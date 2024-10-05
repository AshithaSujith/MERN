const fs = require('fs');

fs.writeFile('output.txt', 'HELLO BEAUTY', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
});

console.log('File reading initialized..');