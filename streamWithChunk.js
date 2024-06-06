const http = require('http');
const fs = require('fs');

http
    .createServer(function (req, res) {
        //const text = fs.readFileSync('./content/bigFile.txt', 'utf-8');
        //res.end(text);
        const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf-8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(4000)


//send data as chunk
