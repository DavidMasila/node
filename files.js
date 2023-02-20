// file system in node js
const fs = require('fs');

// reading files ~ Is Asynchronous. Doesn't block code from running.
// fs.readFile('./masila.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("Masila david");

// reading files 

// fs.writeFile("./masila.txt", "Hellow world", () => {
//     console.log("Files was written to!");
// }); 

//directories
// fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("Folder Created");
// })

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("Folder Created");
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("Folder deleted");
//     })
// }

// deleting files

if(fs.existsSync('./assets/deleteme.txt')) {
    fs.unlink('./assets/deleteme.txt', (err) => {
        if(err) {
            console.group(err);
        }
        console.log("File deleted");
    })
}