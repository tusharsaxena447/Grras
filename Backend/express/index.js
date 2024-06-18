const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use((req,res,next)=>{
    console.log("middleware running")
    next()
})

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/profile', (req,res)=>{
    res.send("this is profile")
})


app.listen(3000, ()=>{console.log("server running")})