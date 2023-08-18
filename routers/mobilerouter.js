const router=require('express').Router()
const mobilec=require('../controllers/mobilecontrollers')

router.get('/back',mobilec.back)

router.get('/mobilepage',mobilec.mobilepageshow)
router.get('/mobilesingledatd/:id',mobilec.mobilesingledatd)

router.get('/redmi',mobilec.redmirecord)
router.get('/vivo',mobilec.vivorecord)
router.get('/oppo',mobilec.opporecord)
router.get('/samsung',mobilec.samsungrecord)
router.get('/oneplus',mobilec.oneplusrecord)
router.get('/apple',mobilec.applerecord)
router.get('/realme',mobilec.realmerecord)

router.get('/sixtoten',mobilec.sixtoten)
router.get('/tentotwenty',mobilec.tentotwenty)
router.get('/twentytothirty',mobilec.twentytothirty)
router.get('/thirtyplus',mobilec.thirtyplus)





module.exports=router