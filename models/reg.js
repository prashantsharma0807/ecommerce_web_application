const mongoose=require('mongoose')


const regSchema=mongoose.Schema({
    email:String,
    pass:String,
})

module.exports=mongoose.model('reg',regSchema)