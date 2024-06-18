const express = require('express')
const app = express()
const router = require('./router/api')

app.use('/api', router)

app.listen(5000)