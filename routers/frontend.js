const router=require('express').Router()
const queryc=require('../controllers/querycontrollers')

const Mobile=require('../models/mobile')
const Add=require('../models/addrs')

const Other=require('../models/other')


router.get('/',async(req,res)=>{
    const addressrecord=await Add.findOne()
    const recordToy= await Other.find({category:'toy'})
    //console.log(addressrecord)
    res.render('index.ejs',{addressrecord,recordToy})
})

 

router.post('/queryform',queryc.queryform)





module.exports=router