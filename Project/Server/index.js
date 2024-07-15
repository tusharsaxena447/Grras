const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const router = require('./api/api')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://127.0.0.1:27017/project').then(()=>{
    console.log("Connected Successfully")
}).catch(Error => console.log(Error))
app.use('/api',router)

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})