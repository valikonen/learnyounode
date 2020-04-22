const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExtension = `.${process.argv[3]}`;

const dirContents = fs.readdir(dirPath, (err, files) => {

    if(err) throw err;

    console.log('files: ', files);

    const filtredFiles = files.filter(file => {
        const extension = path.extname(file);
        return extension === fileExtension;
    });

    console.log('filtredFiles: ', filtredFiles);

    console.log(filtredFiles.join('\n'));
});