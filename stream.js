const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogtest.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/writtenFile.txt');

readStream.on('data', (chunk) => {
  console.log('----------NEW CHUNK----------');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});

readStream.pipe(writeStream);