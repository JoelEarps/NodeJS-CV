//create server and tell it to start listeneing on a port

const http = require("http");
const fs = require("fs");

const port = 3000;

//create the server
const server = http.createServer((req, res)=>{
    //this will render plain text but we probably want to render html rather than text
    //tells browser everything is okay and the content type being sent is html and should parse it as such
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("index.html", (err, data)=> {
        if (err){
            //not found error code
            res.writeHead(404);
            res.write("File not found - make this a page");
            throw err;
        }
        res.write(data);
        res.end();
    })
   
    
});

//tell server to start listening on the port - see if an error occurs and throw if so
server.listen(port, err => {
    if (err){
        throw err;
    }
    console.log(`Server listening on port ${port}`);
});