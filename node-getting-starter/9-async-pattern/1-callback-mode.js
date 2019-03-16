const fs = require('fs');

fs.readFile(__filename, function(err, data) {
    fs.writeFile(__filename + '.copy', data, function(err){
        
    })
});

console.log('TEST');