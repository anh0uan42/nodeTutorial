const { createReadStream } = require('fs');
const { result } = require('lodash');

const stream = createReadStream('./content/bigFile.txt', 'utf8');

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})


//default at 64kb
//highWaterMark - control size
//const stream = createReadStream('./content/bigFile.txt', {highWaterMark: 90000(*90kb*)})