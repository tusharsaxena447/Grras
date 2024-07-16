const mongoose = require('mongoose')

const regSchema = mongoose.Schema({
    email:{
        type : String,
        required: [true, "Email is required"],
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    }
})

module.exports = mongoose.model("user", regSchema)