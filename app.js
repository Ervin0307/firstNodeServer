const http = require('http');
const fs= require('fs')
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':"text/html"
    })
    fs.readFile('index.html', (err,data) => {
        if (err) {
            res.writeHead(404)
            res.write("File Not Found")
        }
        else {
            res.write(data);
        }
        res.end();
    })

})

server.listen(port, (e) => {
    if (e) {
        console.log("soemthing went wrong ", e);
    }
    else {
        console.log("Server is listing on port", port);
        
    }
})