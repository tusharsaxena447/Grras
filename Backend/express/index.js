const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log("middleware running")
    next()
})

app.get('/', (req,res)=>{
    res.send("this is home page")
})
app.get('/profile', (req,res)=>{
    res.send("this is profile")
})

app.listen(3000, ()=>{console.log("server running")})