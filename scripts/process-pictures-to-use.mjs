import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Detailed mapping from raw filename to descriptive target WebP name
const imageMapping = {
  // Sustainable Agriculture & Food Security
  "20250626_133544.jpg": "aquaculture-releasing-fingerlings.webp",
  "IMG-20250613-WA0044.jpg": "aquaculture-tarpaulin-tanks.webp",
  "IMG-20250623-WA0000.jpg": "aquaculture-mobile-tanks-outdoor.webp",
  "20250613_090808.jpg": "aquaculture-mobile-tanks-farmers.webp",
  "20250613_081536.jpg": "beekeeping-hive-setup-farm.webp",
  "IMG-20250616-WA0057.jpg": "ruminant-rearing-sheep-goat-pen.webp",
  "IMG-20250619-WA0022.jpg": "ruminant-wooden-pen-outdoor.webp",
  "IMG_20210514_095046_514.jpg": "pig-farming-concrete-pen.webp",
  "IMG-20220119-WA0073.jpg": "nursery-potted-plants-training.webp",
  "IMG-20220119-WA0082.jpg": "livestock-snail-pens-outdoor.webp",

  // Livelihood & Skills Training (Soap Making)
  "IMG-20250918-WA0028.jpg": "soap-making-exhibition-graduation.webp",
  "IMG-20250313-WA0044.jpg": "soap-making-starter-kits-truck.webp",
  "IMG-20250313-WA0047.jpg": "soap-making-kits-distribution.webp",
  "IMG-20250918-WA0014.jpg": "soap-making-practical-mixing.webp",
  "IMG-20250918-WA0020.jpg": "soap-making-pouring-molds.webp",
  "IMG-20250918-WA0021.jpg": "soap-making-products-display.webp",

  // Entrepreneurship Development / Military Livelihood
  "100_4103.JPG": "military-livelihood-classroom-training.webp",
  "100_9016.JPG": "military-compost-rearing-training.webp",
  "000_0336.JPG": "military-partnership-award.webp",

  // Community & Environment Training Workshops
  "20250115_095054.jpg": "community-agricultural-training-hall.webp",
  "20250115_110520.jpg": "community-workshop-laptop-presentation.webp",
  "20250115_112128.jpg": "aquaculture-fingerlings-presentation.webp",
  "20250117_101054.jpg": "community-training-library.webp"
};

async function main() {
  const inputDir = path.join(rootDir, 'asset', 'pictures to use');
  const outputDir = path.join(rootDir, 'public', 'gallery-images');
  
  await fs.mkdir(outputDir, { recursive: true });
  
  const files = await fs.readdir(inputDir);
  let count = 0;
  
  for (const file of files) {
    // Check if the file is an image
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      
      // Determine the output filename
      let outputName = imageMapping[file];
      
      // Fallback for case sensitivity or missing mappings
      if (!outputName) {
        // Try exact match or lowercased key match
        const lowercasedFile = file.toLowerCase();
        const foundKey = Object.keys(imageMapping).find(k => k.toLowerCase() === lowercasedFile);
        if (foundKey) {
          outputName = imageMapping[foundKey];
        } else {
          // If no mapping, clean up original name
          const ext = path.extname(file);
          const baseName = path.basename(file, ext);
          const safeName = baseName.replace(/\s+/g, '-').toLowerCase();
          outputName = `${safeName}.webp`;
        }
      }
      
      const outputPath = path.join(outputDir, outputName);
      console.log(`Processing: ${file} -> ${outputName}`);
      
      try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // Resize to max 1200 width to save bandwidth/space
        const maxWidth = 1200;
        if (metadata.width > maxWidth) {
          image.resize({ width: maxWidth, withoutEnlargement: true });
        }
        
        // Auto-orient based on EXIF tag (handles rotated phone pics)
        image.rotate();
        
        await image
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        console.log(`Successfully generated: ${outputPath}`);
        count++;
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  
  console.log(`\nSuccessfully processed ${count} images into public/gallery-images/`);
}

main().catch(console.error);
