const planetsRouter = require('./routes/planets.router')
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
    ))

app.use(express.json());
app.use('/planets', planetsRouter)

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

module.exports = app;