const http = require('http');

http.createServer((req,res)=>{
   res.write('hi, i am sourav')
   res.end()
}).listen(3000)