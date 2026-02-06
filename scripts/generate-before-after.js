const fs = require('fs');
const https = require('https');

// Configurazione API
const API_KEY = '2334cce9e0378fcb4f4ddfe833f41be1a581bc73e70d06a379fb5f9f09d984bb';

// Prompts per le immagini prima/dopo
const imageRequests = [
  // SBIANCAMENTO DENTALE
  {
    name: 'whitening-before',
    prompt: 'Close-up photograph of natural teeth before whitening treatment, slightly yellowed teeth, realistic dental photography, professional medical photo, natural lighting, front view of smile, authentic look, 8k, ultra detailed',
    filename: 'whitening-before.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  {
    name: 'whitening-after',
    prompt: 'Close-up photograph of beautiful white teeth after professional whitening treatment, bright white smile, perfect teeth, realistic dental photography, professional medical photo, natural lighting, front view of smile, healthy gums, 8k, ultra detailed',
    filename: 'whitening-after.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  
  // FACCETTE DENTALI
  {
    name: 'veneers-before',
    prompt: 'Close-up dental photograph before veneers, slightly crooked teeth with gaps, natural imperfect teeth, realistic dental photography, professional medical photo, front view of smile, authentic look, 8k, ultra detailed',
    filename: 'veneers-before.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  {
    name: 'veneers-after',
    prompt: 'Close-up dental photograph after porcelain veneers treatment, perfect aligned white teeth, beautiful Hollywood smile, flawless dental work, realistic dental photography, professional medical photo, front view of smile, 8k, ultra detailed',
    filename: 'veneers-after.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  
  // ORTODONZIA INVISIBILE
  {
    name: 'orthodontics-before',
    prompt: 'Close-up dental photograph before orthodontic treatment, misaligned crooked teeth, overcrowding, realistic dental photography, professional medical photo, front view of smile, authentic look, 8k, ultra detailed',
    filename: 'orthodontics-before.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  {
    name: 'orthodontics-after',
    prompt: 'Close-up dental photograph after invisible aligner orthodontic treatment, perfectly straight aligned teeth, beautiful corrected smile, realistic dental photography, professional medical photo, front view of smile, 8k, ultra detailed',
    filename: 'orthodontics-after.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  
  // IMPLANTOLOGIA
  {
    name: 'implants-before',
    prompt: 'Close-up dental photograph before dental implant, missing tooth visible, gap in smile, realistic dental photography, professional medical photo, front view showing tooth gap, authentic look, 8k, ultra detailed',
    filename: 'implants-before.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  },
  {
    name: 'implants-after',
    prompt: 'Close-up dental photograph after dental implant treatment, complete smile with natural looking implant tooth, seamless integration, realistic dental photography, professional medical photo, front view of perfect smile, 8k, ultra detailed',
    filename: 'implants-after.jpg',
    resolution: '2K',
    aspect_ratio: '4:3'
  }
];

async function generateImage(imageRequest) {
  console.log(`\n🎨 Generando: ${imageRequest.name}...`);
  console.log(`📝 Prompt: ${imageRequest.prompt.substring(0, 100)}...`);
  
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
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', async () => {
        try {
          if (res.statusCode !== 200) {
            console.error(`❌ API Error ${res.statusCode}: ${data}`);
            resolve(false);
            return;
          }

          const jsonData = JSON.parse(data);
          
          if (jsonData.images && jsonData.images.length > 0) {
            const imageUrl = jsonData.images[0].url;
            console.log(`📥 Scaricando da: ${imageUrl}`);
            
            await downloadImage(imageUrl, `public/${imageRequest.filename}`);
            console.log(`✅ Salvata: public/${imageRequest.filename}`);
            
            resolve(true);
          } else {
            console.error('❌ Nessuna immagine nella risposta');
            console.log('Risposta completa:', JSON.stringify(jsonData, null, 2));
            resolve(false);
          }
        } catch (error) {
          console.error(`❌ Errore parsing: ${error.message}`);
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Errore richiesta: ${error.message}`);
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    const request = https.get(url, (response) => {
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
    
    file.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generateAllImages() {
  console.log('🚀 Inizio generazione immagini PRIMA/DOPO con Higgsfield AI');
  console.log('🔑 API Key configurata');
  console.log(`📊 Totale immagini da generare: ${imageRequests.length}\n`);

  // Crea directory public se non esiste
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < imageRequests.length; i++) {
    const request = imageRequests[i];
    console.log(`\n[${i + 1}/${imageRequests.length}] ============================`);
    
    const success = await generateImage(request);
    
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Pausa di 3 secondi tra le richieste per evitare rate limiting
    if (i < imageRequests.length - 1) {
      console.log('⏳ Attendo 3 secondi prima della prossima richiesta...');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  console.log('\n\n🎉 ============================');
  console.log('Generazione completata!');
  console.log(`✅ Successi: ${successCount}`);
  console.log(`❌ Falliti: ${failCount}`);
  console.log('============================\n');
  
  if (successCount > 0) {
    console.log('📁 Le immagini sono state salvate in: public/');
    console.log('   - whitening-before.jpg / whitening-after.jpg');
    console.log('   - veneers-before.jpg / veneers-after.jpg');
    console.log('   - orthodontics-before.jpg / orthodontics-after.jpg');
    console.log('   - implants-before.jpg / implants-after.jpg');
  }
}

// Avvia la generazione
generateAllImages().catch(console.error);
