const router=require('express').Router()
const regc=require('../controllers/regcontrollers')
const mobilec=require('../controllers/mobilecontrollers')
const queryc=require('../controllers/querycontrollers')
const addc=require('../controllers/addcontroller')
const fashionc=require('../controllers/fashioncontroller')

const otherc=require('../controllers/othercontroller')
const Reg=require('../models/reg')

function handlelogin(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/admin/')
    }
}


const multer=require('multer')

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/upload')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
const upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*4}
})

router.get('/',regc.loginpage)
router.post('/',regc.dashbord)
//router.get('/home',regc.home)
router.get('/dashboard',handlelogin,regc.showdashboard)
router.get('/logout',regc.logout)

router.get('/mobilemanage',handlelogin,mobilec.mobilemanage)
router.get('/addmobileservice',handlelogin,mobilec.addmobileservice)
router.post('/addmobileservice',upload.single('img'),mobilec.addmobile)
router.get('/mobileupdate/:id',handlelogin,mobilec.mobileupdateform)
router.post('/mobileupdate/:id',upload.single('img'),mobilec.updatemobile)
router.get('/mobiledelete/:id',mobilec.mobiledelete)
router.get('/mobileststus/:id',mobilec.mobileststus)

router.get('/querymanage',handlelogin,queryc.querymanage)
router.get('/queryreplay/:id',handlelogin,queryc.queryreplyform)
router.post('/queryrecord/:id',upload.single('attachment'),queryc.queryrecord)
router.get('/querydelete/:id',queryc.querydelete)

router.get('/add',handlelogin,addc.add)
router.get('/addressupdate/:id',handlelogin,addc.addressupdate)
router.post('/updatedaddress/:id',addc.updatedaddress)


router.get('/fashionmanage',handlelogin,fashionc.fashionmanage)
router.get('/addfashionservice',handlelogin,fashionc.fashionadd)
router.post('/addfashionservice',upload.single('img'),fashionc.fashionformrecord)
router.get('/fashiondelete/:id',fashionc.fashiondelete)
router.get('/fashionupdate/:id',handlelogin,fashionc.fashionupdateform)
router.post('/fashionupdate/:id',upload.single('img'),fashionc.updatefashion)
router.get('/fashionststus/:id',fashionc.fashionststus)


router.get('/othermanage',handlelogin,otherc.othermanage)
router.get('/addotherservice',handlelogin,otherc.addotherservice)
router.post('/addotherservice',upload.single('img'),otherc.otherformrecord)
router.get('/otherdelete/:id',otherc.otherdelete)
router.get('/otherupdate/:id',handlelogin,otherc.otherupdateform)
router.post('/otherupdate/:id',upload.single('img'),otherc.updateother)
router.get('/otherstatus/:id',otherc.otherstatus)

module.exports=router