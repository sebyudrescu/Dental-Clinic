const fs = require('fs');
const https = require('https');

// Configurazione API
const API_KEY = '2334cce9e0378fcb4f4ddfe833f41be1a581bc73e70d06a379fb5f9f09d984bb';

// Prompts per le immagini del sito dentistico
const imageRequests = [
  {
    name: 'hero-dental-clinic',
    prompt: 'Modern luxury dental clinic interior, pristine white walls, natural sunlight streaming through large windows, professional medical environment, minimalist Scandinavian design, premium quality furniture, plants, welcoming atmosphere, architectural photography, 8k, ultra realistic',
    filename: 'hero-clinic.jpg',
    resolution: '2K',
    aspect_ratio: '16:9'
  },
  {
    name: 'beautiful-smile',
    prompt: 'Close-up of a beautiful healthy white smile, perfect aligned teeth, natural lighting, professional dental photography, clean aesthetic, medical quality, high detail, 8k',
    filename: 'smile-hero.jpg',
    resolution: '2K',
    aspect_ratio: '16:9'
  },
  {
    name: 'dental-team',
    prompt: 'Professional dental team of 4 people in modern white medical coats, friendly doctors smiling, diverse team, modern clinic background, professional medical photography, confident and welcoming atmosphere, high quality, 8k',
    filename: 'team-photo.jpg',
    resolution: '2K',
    aspect_ratio: '16:9'
  },
  {
    name: 'clinic-reception',
    prompt: 'Modern dental clinic reception area, elegant white reception desk, comfortable waiting area with modern furniture, plants, natural light, luxury medical office interior, architectural photography, clean aesthetic, 8k',
    filename: 'reception.jpg',
    resolution: '2K',
    aspect_ratio: '16:9'
  },
  {
    name: 'dental-equipment',
    prompt: 'Modern dental chair and equipment in a pristine white treatment room, advanced technology, clean professional environment, natural lighting, medical photography, 8k',
    filename: 'equipment.jpg',
    resolution: '2K',
    aspect_ratio: '1:1'
  },
  {
    name: 'teeth-whitening',
    prompt: 'Professional teeth whitening before and after comparison, dental photography, clean white background, medical quality, high detail, 8k',
    filename: 'whitening.jpg',
    resolution: '1K',
    aspect_ratio: '1:1'
  }
];

async function generateImage(imageRequest) {
  console.log(`\n🎨 Generando: ${imageRequest.name}...`);
  console.log(`📝 Prompt: ${imageRequest.prompt.substring(0, 80)}...`);
  
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
          console.log('📦 Risposta API:', JSON.stringify(jsonData, null, 2));

          if (jsonData.images && jsonData.images.length > 0) {
            const imageUrl = jsonData.images[0].url;
            console.log(`📥 Scaricando da: ${imageUrl}`);
            
            await downloadImage(imageUrl, `public/${imageRequest.filename}`);
            console.log(`✅ Salvata: public/${imageRequest.filename}`);
            
            resolve(true);
          } else {
            console.error('❌ Nessuna immagine nella risposta');
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
  console.log('🚀 Inizio generazione immagini con Higgsfield AI');
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
}

// Avvia la generazione
generateAllImages().catch(console.error);
