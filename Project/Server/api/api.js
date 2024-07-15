const router = require('express').Router()
const User = require('../models/User')

router.post('/reg', (req,res)=>{
    // console.log(req.body)
    const email = req.body.email
    const pass = req.body.password
    // console.log(email,pass)
    const record = User({email:email, password:pass})
    record.save()
    res.json({message:"Inserted"})
})

module.exports = router