const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : "text/html"})
    res.end('raam raam saare ne')
}).listen(3000, ()=>{console.log("server started")})

