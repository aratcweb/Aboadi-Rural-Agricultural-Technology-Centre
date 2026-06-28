import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function main() {
  const inputDir = path.join(rootDir, 'asset', 'image for homepage');
  const outputDir = path.join(rootDir, 'public', 'gallery-images');
  
  await fs.mkdir(outputDir, { recursive: true });
  
  const files = await fs.readdir(inputDir);
  let count = 0;
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(inputDir, file);
      // Clean up spaces in filenames for web use
      const safeName = baseName.replace(/\s+/g, '-').toLowerCase();
      const outputPath = path.join(outputDir, `${safeName}.webp`);
      
      console.log(`Optimizing: ${inputPath}`);
      
      try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // Resize to max 1200 width to save space
        const maxWidth = 1200;
        if (metadata.width > maxWidth) {
          image.resize({ width: maxWidth, withoutEnlargement: true });
        }
        
        await image
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        console.log(`Created: ${outputPath}`);
        count++;
      } catch (err) {
        console.error(`Error processing ${inputPath}:`, err);
      }
    }
  }
  console.log(`Successfully optimized ${count} images into public/gallery-images`);
}

main().catch(console.error);
