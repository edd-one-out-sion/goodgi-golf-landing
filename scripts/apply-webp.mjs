import { readFile, writeFile } from 'fs/promises';

const FILES = ['index.html', 'about.html'];

// <img src="assets/images/xxx.jpg|png" ... /> → <picture><source srcset=".webp"><img ...></picture>
function wrapWithPicture(html) {
  return html.replace(
    /<img\s([^>]*?)src="(assets\/images\/[^"]+\.(jpg|jpeg|png))"([^>]*?)>/gi,
    (match, before, src, ext, after) => {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      // already wrapped 방지
      if (match.includes('</picture>')) return match;
      return `<picture><source srcset="${webpSrc}" type="image/webp"><img ${before}src="${src}"${after}></picture>`;
    }
  );
}

for (const file of FILES) {
  const original = await readFile(file, 'utf8');
  const updated = wrapWithPicture(original);
  const count = (updated.match(/<picture>/g) || []).length;
  await writeFile(file, updated, 'utf8');
  console.log(`${file}: ${count}개 이미지 picture 태그로 교체`);
}

console.log('\n완료!');
