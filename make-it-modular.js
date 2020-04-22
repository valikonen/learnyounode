const mymodule = require('./mymodule');

const directory = process.argv[2];
const fileExtension = process.argv[3];

mymodule(directory, fileExtension, (err, files) => {
    if(err) {
        return console.error(err);
    }
    files.forEach((file) => {
        console.log(file);
    });
});