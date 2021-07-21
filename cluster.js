const cluster = require('cluster');


const num = 10;

if (cluster.isMaster) {

    console.log('this is the master process', process.pid);

    let worker = cluster.fork();

    worker.send(num);


    worker.on('message', function (msg) {

        console.log('Master ' + process.pid + ' received message from worker ' + '.', msg);
    });

    worker.on('exit', (code) => {


        console.log(`child_process exited with code ${code}`);

    });


} else {
    console.log(`Worker ${cluster.worker.id} launched`, process.pid);


    process.on('message', function (msg) {
        console.log('Worker ' + process.pid + ' received message from master to count factorial of  ', msg);

        function factorial(x) {

            if (x === 0) {
                return 1;
            }
            return x * factorial(x - 1);

        }

        const result = factorial(msg);
        process.send(`This is from worker ` + process.pid + `, the factorial of ${msg} will be  ` + result);
        process.exit(result);
    });
}