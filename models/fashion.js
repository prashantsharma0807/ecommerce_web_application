const mongoose=require('mongoose')

let todayDate= new Date()
let minutes=todayDate.getMinutes()
let hour=todayDate.getHours()
let date=todayDate.getDate()
let month=todayDate.getMonth()
let year=todayDate.getFullYear()

let formet=(`${hour}:${minutes} // ${date}-${month+1}-${year}`)

const fashionSchema=mongoose.Schema({
    item:String,
    category:String,
    price:Number,
    img:String,
    desc:String,
    ldesc:String,
    postedDate:{type:String,default:formet},
    status:{type:String,default:'publish'}
})

module.exports=mongoose.model('fashion',fashionSchema)