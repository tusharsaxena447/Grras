const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded, {extended : true})
const router = require('./router/api')
app.use('/api', router)

// app.get("/" , (req,res)=>{
//     console.log("object")
// })


app.listen(5000, ()=>{console.log("server running on port 5000")})