const fs = require('fs');
const path = require('path');
const zlib = require('zlib');


const folderName = process.argv.slice(2)[0];

const folderPath = path.join(__dirname, folderName);


const newFolder = path.join(__dirname, 'test');


if (fs.existsSync(folderPath)) {
    fs.mkdir(newFolder, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('Directory created successfully!');
    });

} else {

    throw new Error('there is no such directory');

}

fs.readdir(folderPath, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach( file => {

        const fromPath = path.join(folderPath, file);
        const toPath = path.join(newFolder, file);


        fs.stat(fromPath, (error) => {
            if (error) {
                console.error("Error stating file.", error);
                return;
            }

            fs.createReadStream(fromPath).pipe(zlib.createGzip()).pipe(fs.createWriteStream(toPath + '.gz'));

        });
    });
});