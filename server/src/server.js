const app = require('./app')
const http = require('http');
const server = http.createServer(app)

const PORT = process.env.PORT || 8000; 

server.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})


