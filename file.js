const fs = require('fs');

// reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');


//writing files
// fs.writeFile('./docs/blog.txt', 'Hello, World', () => {
//     console.log('file was written');
// });


// fs.writeFile('./docs/blog1.txt', 'Hello, World', () => {
//     console.log('file was written');
// });




//directories
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created')
})



// deleting files