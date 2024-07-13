const router = require('express').Router()
const User = require('../models/users')

router.post('/insert', (req,res)=>{
   data.push(req.body)
    console.log(data)
    res.json({message : "inserted"})
})
router.get('/read', (req,res)=>{
    res.send(data)
})

module.exports = router