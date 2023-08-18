const mongoose=require('mongoose')

let todayDate= new Date()
let minutes=todayDate.getMinutes()
let hour=todayDate.getHours()
let date=todayDate.getDate()
let month=todayDate.getMonth()
let year=todayDate.getFullYear()

let formet=(`${hour}:${minutes} // ${date}-${month+1}-${year}`)

const otherSchema=mongoose.Schema({
    category:String,
    item:String,
    price:Number,
    desc:String,
    img:String,
    postedDate:{type:String,default:formet},
    status:{type:String,default:'publish'}
})

module.exports=mongoose.model('other',otherSchema)