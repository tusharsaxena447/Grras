const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/frontback').then(()=>{console.log("connected to mongoDB")})
.catch((Error)=> {console.log(Error)})

app.use(cors())
app.use(express.json())

const router = require('./router/api')
app.use('/api', router)


app.listen(5000, ()=>{console.log("server running on port 5000")})