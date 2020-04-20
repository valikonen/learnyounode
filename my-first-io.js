const fs = require('fs');

const filePath = process.argv[2];

const file = fs.readFileSync('./text.txt', 'utf8');

const lineCount = file.split('\n').length;

console.log(lineCount);