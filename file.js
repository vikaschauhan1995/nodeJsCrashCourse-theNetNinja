const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log('err=>', err);
//   }
//   console.log('data=>', data.toString());
// });
// console.log('after file reading');


// writing file
// fs.writeFile('./docs/blog.txt', 'Hello Vikas chauhan', () => {
//   console.log('file was written');
// });

// create file if not exists
// fs.writeFile('./docs/blog1.txt', 'Hello world again!', () => {
//   console.log('file was created');
// });

// create directory
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log('err=>', err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log('err=>', err);
//     }
//     console.log('folder deleted');
//   });
// }

// deleting file
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}