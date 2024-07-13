const express = require('express')
const app = express()
const port = 5000
const router = require('./api/api')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/project').then(()=>{
    console.log("Connected Successfully")
}).catch(Error => console.log(Error))


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})