var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'application/json; charset=utf-8'});

    var objeto ={
        mensaje : 'Hola mundo Node JS Repo GIT - Angulo Rodriguez Eduardo\n'}

    res.end('Hola mundo Node JS Repo GIT - Angulo Rodriguez Eduardo\n');
}).listen(8081);
console.log('Server running on port 8081');
