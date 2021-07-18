const fs = require('fs');
const path = require('path');
const readline = require('readline');
const CSVToJSON = require('csvtojson');
const  extract = require('extract-zip');
const tree = require('tree-node-cli');




//task1

const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, 'addresses.csv')),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});




//task 2

CSVToJSON().fromFile('addresses.csv')
    .then(adds => {
        console.log(adds);
    }).catch(err => {
        console.log(err);
    });




//task 3


 
async function main () {
  try {
    await extract(path.resolve('yup.zip'), { dir: path.join(__dirname, 'new2') })
    console.log('Extraction complete');
    const string = tree('./new2', {
        allFiles: true,
        maxDepth: 4,
      });
       
      console.log(string);
  } catch (err) {
   console.log(err);
  }
}

main();




