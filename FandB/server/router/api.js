const router = require('express').Router()
const data = []


router.post('/insert', (req,res)=>{
   data.push(req.body)
    console.log(data)
    res.json({message : "inserted"})
})

module.exports = router