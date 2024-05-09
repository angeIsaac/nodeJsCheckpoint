const http = require("http");
const port = 3000;
const server = http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "text/html"})
    res.end('<h1>Hello node\n</h1>');
    
});

server.listen(port, ()=>console.log(`le serveur est en cour d'execution sur le port ${port}`));
