var http = require('http');
http.createServer(function (res, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    var objeto = {
        mensaje : 'Hola mundo Node JS Repo GIT - Osuna Tirado Juan Roman\n'
    };

    var json = JSON.stringify(obejto);

    res.end(json);
}).listen(8081);
console.log('Server running on port 8081');