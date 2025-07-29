const http = require('http')

const port = 3000
// IP address
const hostname = '127.0.0.1'
const server = http.createServer((req,res)=>{
  res.statusCode = 200
  // no html or css file -->textplain
  res.setHeader('content-type','text-plain')
  res.end('Hello')
})
// takes 2 parametrs where you want to listen 
server.listen(port,hostname,()=>{
  console.log(`Serber is listening at http://${hostname} : ${port}`)
})