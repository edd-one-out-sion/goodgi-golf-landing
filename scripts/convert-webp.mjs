import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = 'assets/images';
const QUALITY = 82;

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const images = await getImages(IMAGES_DIR);
console.log(`변환 대상: ${images.length}개`);

let totalBefore = 0;
let totalAfter = 0;

for (const imgPath of images) {
  const ext = extname(imgPath);
  const webpPath = imgPath.slice(0, -ext.length) + '.webp';
  const before = (await stat(imgPath)).size;

  await sharp(imgPath).webp({ quality: QUALITY }).toFile(webpPath);

  const after = (await stat(webpPath)).size;
  totalBefore += before;
  totalAfter += after;

  const saved = Math.round((1 - after / before) * 100);
  console.log(`  ${imgPath.replace(IMAGES_DIR + '/', '')} → ${saved}% 절약`);
}

const totalSaved = Math.round((1 - totalAfter / totalBefore) * 100);
console.log(`\n완료: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (${totalSaved}% 절약)`);
