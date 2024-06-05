const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Home`)
    } else if (req.url === '/about') {
        res.end(`About`)
    } else {
        res.end(`
        <h1>Page not found</h1>
        <a href='/'>Home</a>
        `)
    }
});


server.listen(4000)