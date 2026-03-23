const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  'bi_tree.png', 'bi_pen.png', 'bi_box.png', 'bi_neo.png',
  'logo_01.png', 'logo_02.png', 'logo_03.png', 'logo_04.png',
  'logo_05.png', 'logo_06.png', 'logo_07.png', 'logo_08.png',
  'logo_09.png', 'logo_10.png', 'logo_11.png', 'logo_12.png'
];

const dir = path.join(__dirname, 'public', 'images', 'bi');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

images.forEach(img => {
  const file = fs.createWriteStream(path.join(dir, img));
  const url = `https://www.neolab.kr/wp-content/uploads/2021/11/${img}`;
  https.get(url, options, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      console.log(`Downloaded ${img}`);
    } else {
      console.log(`Failed to download ${img}: ${response.statusCode}`);
    }
  }).on('error', function(err) { 
    console.error(`Error downloading ${img}:`, err);
  });
});
