const fs = require('fs');

const readStream = fs.createReadStream('./masila.text', {encoding: 'utf8'});
const writeStream =  fs.createWriteStream('./masila2.txt');
// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK-----');
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });


// piping 

readStream.pipe(writeStream);
