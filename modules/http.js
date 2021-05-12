const http = require('http');

http.createServer(function (req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    res.writeHead(201, {'Content-Type': 'Text/Plain'})
    res.write('HTTP running on Node.js');
    res.end();
}).listen(3000);

console.info('Server HTTP en puerto 3000');