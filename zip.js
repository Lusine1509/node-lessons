const fs = require('fs');
const path = require('path');
const zlib = require('zlib')


// const myPath= path.join(__dirname,'zip.js')
// if (fs.existsSync(myPath)) {
//     fs.readFile('./text.txt', (err, data) => {
//         if (err) console.err(err)
//         console.log((data.toString()))
//     })
// }


const stream = fs.createReadStream('./text.txt', {
    highWaterMark: 8
});
// const output = fs.createWriteStream('./hello.html');

// stream.pipe(output)

let out = '';

stream.on('data', (chunk) => {
    // console.log(chunk.toString());
    out += chunk
})

stream.on('error', (err) => {
    // console.log(err);
})

stream.on('close', () => {
    // console.log('close event');
})

// readable file
stream.on('end', () => {
    // console.log('end event');
})



//writeable file

// output.on('finish', () => {
//     console.log('finished event');
// })






