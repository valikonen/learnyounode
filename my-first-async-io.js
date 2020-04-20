const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data) {
    if(err) {
        return console.log(err);
    } 

    let textData = '';
    textData += data;
    const textLength = textData.split('\n').length - 1;

    console.log(textLength);
});


// const textLength = textData.split('\n').length;

