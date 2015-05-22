var fs = require('fs');

var file = fs.readFileSync(__dirname + '/public/icons/folder.png', 'base64');
console.log('file', file);