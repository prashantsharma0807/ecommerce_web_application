const mongoose=require('mongoose')

const addrsSchema=mongoose.Schema({
    add:String,
    landline:Number,
    phone:Number,
    email:String,
    insta:String,
    twitter:String
})

module.exports=mongoose.model('addrs',addrsSchema)