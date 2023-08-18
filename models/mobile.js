const mongoose=require('mongoose')

const mobileSchema=mongoose.Schema({
    name:String,
    img:String,
    brand:String,
    ram:String,
    price:Number,
    camera:String,
    features:String,
    status:{type:String,default:'unpublish'}
})

module.exports=mongoose.model('mobile',mobileSchema)
