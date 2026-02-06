const https = require('https');
const fs = require('fs');

const API_KEY = '2334cce9e0378fcb4f4ddfe833f41be1a581bc73e70d06a379fb5f9f09d984bb';

// Prompt specifici e dettagliati per ogni trattamento
const imageRequests = [
  // 1. SBIANCAMENTO DENTALE - PRIMA
  {
    name: 'whitening-before',
    filename: 'whitening-before.jpg',
    prompt: 'Professional dental close-up photograph of natural teeth before whitening treatment, slightly yellowed discolored teeth, visible coffee tea stains, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, authentic realistic look, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  // 1. SBIANCAMENTO DENTALE - DOPO
  {
    name: 'whitening-after',
    filename: 'whitening-after.jpg',
    prompt: 'Professional dental close-up photograph after professional teeth whitening treatment, bright brilliant white teeth, healthy natural looking smile, no stains, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  
  // 2. FACCETTE DENTALI - PRIMA
  {
    name: 'veneers-before',
    filename: 'veneers-before.jpg',
    prompt: 'Professional dental close-up photograph before porcelain veneers treatment, slightly crooked misaligned front teeth with small gaps, minor imperfections, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, authentic realistic look, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  // 2. FACCETTE DENTALI - DOPO
  {
    name: 'veneers-after',
    filename: 'veneers-after.jpg',
    prompt: 'Professional dental close-up photograph after porcelain veneers treatment, perfectly aligned uniform white teeth, beautiful Hollywood smile, flawless ceramic veneers, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  
  // 3. ORTODONZIA INVISIBILE - PRIMA
  {
    name: 'orthodontics-before',
    filename: 'orthodontics-before.jpg',
    prompt: 'Professional dental close-up photograph before orthodontic treatment, noticeably crooked overlapping misaligned teeth, dental crowding, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, authentic realistic look, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  // 3. ORTODONZIA INVISIBILE - DOPO
  {
    name: 'orthodontics-after',
    filename: 'orthodontics-after.jpg',
    prompt: 'Professional dental close-up photograph after invisible aligner orthodontic treatment, perfectly straight well-aligned teeth, beautiful corrected smile, no crowding, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  
  // 4. IMPLANTOLOGIA - PRIMA
  {
    name: 'implants-before',
    filename: 'implants-before.jpg',
    prompt: 'Professional dental close-up photograph before dental implant, visible missing front tooth with gap in smile, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, authentic realistic look, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  // 4. IMPLANTOLOGIA - DOPO
  {
    name: 'implants-after',
    filename: 'implants-after.jpg',
    prompt: 'Professional dental close-up photograph after dental implant treatment, complete smile with natural looking dental implant tooth seamlessly integrated, perfect restoration, realistic dental photography from front view, natural dental office lighting, professional medical photography quality, 8k ultra detailed, photorealistic',
    resolution: '2K',
    aspect_ratio: '4:3'
  }
];

// Funzione per generare immagine con retry logic e backoff esponenziale
async function generateImageWithRetry(imageRequest, maxAttempts = 3) {
  console.log(`\n🎨 Generando: ${imageRequest.name}`);
  console.log(`📝 Prompt: ${imageRequest.prompt.substring(0, 80)}...`);
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      console.log(`\n🔄 Tentativo ${attempt + 1}/${maxAttempts}...`);
      
      const result = await generateImage(imageRequest);
      
      if (result.success) {
        console.log(`✅ Successo al tentativo ${attempt + 1}!`);
        return true;
      }
      
    } catch (error) {
      console.error(`❌ Tentativo ${attempt + 1} fallito: ${error.message}`);
      
      if (attempt < maxAttempts - 1) {
        // Backoff esponenziale: 5s, 10s, 20s
        const waitTime = Math.pow(2, attempt) * 5;
        console.log(`⏳ Attendo ${waitTime} secondi prima del prossimo tentativo...`);
        await sleep(waitTime * 1000);
      }
    }
  }
  
  console.error(`❌ Fallimento definitivo dopo ${maxAttempts} tentativi per ${imageRequest.name}`);
  return false;
}

// Funzione principale per generare immagine
function generateImage(imageRequest) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      model: 'bytedance/seedream/v4/text-to-image',
      arguments: {
        prompt: imageRequest.prompt,
        resolution: imageRequest.resolution,
        aspect_ratio: imageRequest.aspect_ratio,
        camera_fixed: false
      }
    });

    const options = {
      hostname: 'api.higgsfield.ai',
      path: '/v1/generate',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 120000 // 120 secondi timeout aumentato
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', async () => {
        try {
          if (res.statusCode === 522) {
            reject(new Error('Errore 522: Timeout del server. Il server è sovraccarico.'));
            return;
          }
          
          if (res.statusCode !== 200) {
            reject(new Error(`API Error ${res.statusCode}: ${data}`));
            return;
          }

          const jsonData = JSON.parse(data);
          
          if (jsonData.images && jsonData.images.length > 0) {
            const imageUrl = jsonData.images[0].url;
            console.log(`📥 Scaricando da: ${imageUrl}`);
            
            await downloadImage(imageUrl, `public/${imageRequest.filename}`);
            console.log(`✅ Salvata: public/${imageRequest.filename}`);
            
            resolve({ success: true, url: imageUrl });
          } else {
            reject(new Error('Nessuna immagine nella risposta'));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout dopo 120 secondi'));
    });

    req.write(postData);
    req.end();
  });
}

// Funzione per scaricare immagine
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    const request = https.get(url, { timeout: 60000 }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Download failed: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    
    request.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
    
    request.on('timeout', () => {
      request.destroy();
      fs.unlink(filepath, () => {});
      reject(new Error('Download timeout'));
    });
    
    file.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Utility function per sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Funzione principale
async function generateAllImages() {
  console.log('🚀 ====================================');
  console.log('   GENERAZIONE IMMAGINI DENTALI PRIMA/DOPO');
  console.log('   Con Higgsfield AI + Best Practices');
  console.log('====================================\n');
  console.log('🔑 API Key configurata');
  console.log(`📊 Totale immagini: ${imageRequests.length}`);
  console.log('⚙️  Features: Retry logic, Backoff esponenziale, Timeout 120s\n');

  // Crea directory public se non esiste
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
    console.log('📁 Creata cartella public/\n');
  }

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < imageRequests.length; i++) {
    const request = imageRequests[i];
    console.log(`\n${'='.repeat(60)}`);
    console.log(`[${i + 1}/${imageRequests.length}] ${request.name.toUpperCase()}`);
    console.log('='.repeat(60));
    
    const success = await generateImageWithRetry(request, 3);
    
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Pausa tra richieste per evitare rate limiting
    if (i < imageRequests.length - 1) {
      const pauseTime = 5;
      console.log(`\n⏸️  Pausa di ${pauseTime} secondi prima della prossima richiesta...`);
      await sleep(pauseTime * 1000);
    }
  }

  console.log('\n\n' + '='.repeat(60));
  console.log('🎉 GENERAZIONE COMPLETATA!');
  console.log('='.repeat(60));
  console.log(`✅ Successi: ${successCount}/${imageRequests.length}`);
  console.log(`❌ Falliti: ${failCount}/${imageRequests.length}`);
  console.log('='.repeat(60) + '\n');
  
  if (successCount > 0) {
    console.log('📁 Immagini salvate in: public/\n');
    console.log('🦷 SBIANCAMENTO DENTALE:');
    console.log('   - whitening-before.jpg');
    console.log('   - whitening-after.jpg\n');
    console.log('✨ FACCETTE DENTALI:');
    console.log('   - veneers-before.jpg');
    console.log('   - veneers-after.jpg\n');
    console.log('📐 ORTODONZIA INVISIBILE:');
    console.log('   - orthodontics-before.jpg');
    console.log('   - orthodontics-after.jpg\n');
    console.log('🦴 IMPLANTOLOGIA:');
    console.log('   - implants-before.jpg');
    console.log('   - implants-after.jpg\n');
  }
  
  if (failCount > 0) {
    console.log('⚠️  Alcune immagini non sono state generate.');
    console.log('💡 Suggerimenti:');
    console.log('   1. Verifica lo stato del servizio: https://www.saashub.com/higgsfield-status');
    console.log('   2. Riprova tra qualche minuto');
    console.log('   3. Il servizio potrebbe essere sovraccarico\n');
  }
}

// Avvia la generazione
generateAllImages().catch(error => {
  console.error('\n❌ ERRORE FATALE:', error.message);
  process.exit(1);
});
