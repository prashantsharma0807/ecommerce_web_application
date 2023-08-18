const router=require('express').Router()

const otherc= require('../controllers/othercontroller')

router.get('/back',otherc.back)
router.get('/grocery',otherc.grocerypage)
router.get('/electronics',otherc.electronics)
router.get('/babytoy',otherc.babytoy)



module.exports=router