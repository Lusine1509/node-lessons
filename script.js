
// console.log('hello branch 1');

// console.log('hello branch 2');

// console.log('hello branch 3');


const fs = require('fs');
const path= require('path');

const mypath= path.join(__dirname, 'new.txt')



fs.readFile('./greeting.txt', (err,data)=>{
   if (err) console.error(err);
   console.log('data',data.toString())
})


fs.writeFileSync('./new.txt','lusine');//creatin new file  synch

fs.writeFile('./greeting.txt', 'fdfdg',(err)=>{
    if (err) console.error(err);
})// creating new file asynch 

fs.existsSync('./')



