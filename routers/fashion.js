const router=require('express').Router()
const fashionc=require('../controllers/fashioncontroller')

router.get('/fashionpage',fashionc.fashionpage)

router.get('/fashionsingledata/:id',fashionc.fashionsingledata)
router.get('/back',fashionc.back)

router.get('/man',fashionc.man)
router.get('/women',fashionc.women)
router.get('/girl',fashionc.girl)
router.get('/boy',fashionc.boy)

module.exports=router