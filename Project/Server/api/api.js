const router = require('express').Router()
const { default: mongoose } = require('mongoose')
const User = require('../models/User')
const db = mongoose.connection

router.post('/reg', (req,res)=>{
    // console.log(req.body)
    const email = req.body.email
    const pass = req.body.password
    // console.log(email,pass)
    const record = User({email:email, password:pass})
    record.save()
    res.json({message:"Inserted"})
})

router.get('/getusers', (req,res)=>{
     data = async function(){
        var result = await db.collection('users').find({}).toArray()
        return res.send(result)
     }
    data()
})

module.exports = router