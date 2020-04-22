const fs = require('fs');
const path = require('path');


module.exports = (dirName, fileExtension, callback) => {
    
    fileExtension = `.${fileExtension}`;

    fs.readdir(dirName, (err, files) => {
        if(err) {
            return callback(err);
        }
        const filteredFiles = files.filter(file => {
            const extension = path.extname(file)
            return extension === fileExtension
        });

        return callback(null, filteredFiles);
    });
};