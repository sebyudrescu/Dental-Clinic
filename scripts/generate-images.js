const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = '2334cce9e0378fcb4f4ddfe833f41be1a581bc73e70d06a379fb5f9f09d984bb';
const API_URL = 'https://api.higgsfield.ai/v1/generate';

// Prompts per le immagini
const imagePrompts = [
  {
    name: 'hero-background',
    prompt: 'Modern luxury dental clinic interior, clean white walls, natural light, professional medical environment, minimalist design, premium quality, photorealistic, 4k',
    output: 'public/hero-bg.jpg'
  },
  {
    name: 'dental-smile',
    prompt: 'Beautiful healthy white smile closeup, perfect teeth, professional dental photography, natural lighting, clean aesthetic, medical photography style, high quality',
    output: 'public/smile-hero.jpg'
  },
  {
    name: 'clinic-interior',
    prompt: 'Professional dental clinic reception area, modern furniture, clean white and blue colors, welcoming atmosphere, luxury medical office, architectural photography',
    output: 'public/clinic-interior.jpg'
  },
  {
    name: 'dental-team',
    prompt: 'Professional dental team in white coats, friendly doctors and dentists, modern clinic background, professional medical photography, confident and welcoming',
    output: 'public/team-photo.jpg'
  },
  {
    name: 'before-after-whitening',
    prompt: 'Dental teeth whitening before and after comparison, professional dental photography, clean white background, medical quality, high detail',
    output: 'public/whitening-result.jpg'
  },
  {
    name: 'orthodontics',
    prompt: 'Invisible aligners orthodontic treatment, clear dental braces, professional dental photography, clean aesthetic, medical quality',
    output: 'public/orthodontics.jpg'
  }
];

async function generateImage(prompt, outputPath) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      prompt: prompt,
      model: 'stable-diffusion-xl',
      width: 1024,
      height: 768,
      steps: 30
    });

    const options = {
      hostname: 'api.higgsfield.ai',
      path: '/v1/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const result = JSON.parse(responseData);
            // Download image from URL
            if (result.url || result.image_url) {
              downloadImage(result.url || result.image_url, outputPath)
                .then(() => resolve(outputPath))
                .catch(reject);
            } else {
              reject(new Error('No image URL in response'));
            }
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error(`API returned status ${res.statusCode}: ${responseData}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

async function generateAllImages() {
  console.log('🎨 Inizio generazione immagini con Higgsfield AI...\n');

  // Crea la directory public se non esiste
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  for (const image of imagePrompts) {
    try {
      console.log(`📸 Generando: ${image.name}...`);
      await generateImage(image.prompt, image.output);
      console.log(`✅ Completato: ${image.output}\n`);
      
      // Pausa di 2 secondi tra le richieste
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Errore per ${image.name}:`, error.message);
    }
  }

  console.log('🎉 Generazione completata!');
}

generateAllImages();
