const fork = require('child_process').fork;

const ls = fork("child.js");


let count =0;
ls.send(count);
ls.on('exit', (code)=>{


	console.log(`child_process exited with code ${code}`);

});

ls.on('message', (msg)=>{

	 console.log(`PARENT: message from child process is ${msg}`);

	 count = parseInt(msg) + 1;
	 console.log("PARENT: +1 from parent");

	 ls.send(count);

});