import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function optimizeImagesInDir(dirPath, isHero) {
  const files = await fs.readdir(dirPath);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(dirPath, file);
      const outputPath = path.join(dirPath, `${baseName}.webp`);
      
      console.log(`Optimizing: ${inputPath}`);
      
      try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        let width = metadata.width;
        // Resize hero images to max 1920, others to max 1200 width to save more space
        const maxWidth = isHero ? 1920 : 1200;
        
        if (width > maxWidth) {
          image.resize({ width: maxWidth, withoutEnlargement: true });
        }
        
        await image
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        console.log(`Created: ${outputPath}`);
        
        // Optionally delete the original file
        await fs.unlink(inputPath);
        console.log(`Deleted original: ${inputPath}`);
        
      } catch (err) {
        console.error(`Error processing ${inputPath}:`, err);
      }
    }
  }
}

async function main() {
  const publicDir = path.join(rootDir, 'public');
  const heroDir = path.join(publicDir, 'hero-images');
  
  await optimizeImagesInDir(publicDir, false);
  
  try {
    await fs.access(heroDir);
    await optimizeImagesInDir(heroDir, true);
  } catch(e) {
    console.log("No hero-images dir found or accessible");
  }
  
  console.log("Image optimization complete.");
}

main().catch(console.error);
