const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const srcDir = path.join(__dirname, '..', 'mhmdaa-website-client-files');
const outDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const htmlFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
const extracted = new Map();
let counter = 0;

function extractFromChunk(content, pageName) {
  const marker = 'data:image/';
  let searchFrom = 0;

  while (true) {
    const idx = content.indexOf(marker, searchFrom);
    if (idx === -1) break;

    const semiIdx = content.indexOf(';base64,', idx);
    if (semiIdx === -1 || semiIdx - idx > 40) {
      searchFrom = idx + marker.length;
      continue;
    }

    const mimeType = content.substring(idx + marker.length, semiIdx);
    const dataStart = semiIdx + 8;

    let dataEnd = dataStart;
    while (dataEnd < content.length) {
      const ch = content[dataEnd];
      if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') ||
          (ch >= '0' && ch <= '9') || ch === '+' || ch === '/' || ch === '=' ||
          ch === '\n' || ch === '\r' || ch === ' ') {
        dataEnd++;
      } else {
        break;
      }
    }

    const b64Data = content.substring(dataStart, dataEnd).replace(/\s/g, '');

    if (b64Data.length < 200) {
      searchFrom = dataEnd;
      continue;
    }

    const hash = crypto.createHash('md5').update(b64Data.substring(0, 2000)).digest('hex').substring(0, 10);

    if (!extracted.has(hash)) {
      const ext = (mimeType === 'jpeg' || mimeType === 'jpg') ? 'jpg'
        : mimeType === 'svg+xml' ? 'svg'
        : mimeType === 'gif' ? 'gif'
        : mimeType === 'webp' ? 'webp'
        : 'png';

      const imgIdx = counter;
      const fileName = `${pageName}-${imgIdx}.${ext}`;

      try {
        const buffer = Buffer.from(b64Data, 'base64');
        if (buffer.length > 500) {
          fs.writeFileSync(path.join(outDir, fileName), buffer);
          extracted.set(hash, fileName);
          counter++;
          console.log(`  [${pageName}] -> ${fileName} (${(buffer.length / 1024).toFixed(1)} KB)`);
        }
      } catch (e) {
        console.error(`  Error: ${e.message}`);
      }
    }

    searchFrom = dataEnd;
  }
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
  const pageName = file.replace('.html', '');
  extractFromChunk(content, pageName);
}

console.log(`\nDone! Extracted ${counter} unique images to public/images/`);
