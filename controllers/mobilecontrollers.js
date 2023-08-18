const Mobile=require('../models/mobile')
const Add=require('../models/addrs')

exports.mobilepageshow=async(req,res)=>{
    const mobileRecord= await Mobile.find({status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('mobiles.ejs',{mobileRecord,addressrecord})
}
exports.back=(req,res)=>{
    res.redirect('/mobile/mobilepage')
}
exports.mobilemanage=async(req,res)=>{
    const record=await Mobile.find()
    const mobilerecordcount=await Mobile.count()
    const publishrecordcount=await Mobile.count({status:'publish'})
    const unpublishrecordcount=await Mobile.count({status:'unpublish'})
    res.render('admin/mobilemanage.ejs',{record,mobilerecordcount,publishrecordcount,unpublishrecordcount})
}
exports.addmobileservice=(req,res)=>{
    res.render('admin/addmobileservice.ejs',{message:''})
}
exports.addmobile=(req,res)=>{
    const filename=req.file.filename
    const{bname,mname,ram,price,camera,features}=req.body
    const record= new Mobile({brand:bname,name:mname,price:price,ram:ram,camera:camera,features:features,img:filename})
    record.save()
    res.render('admin/addmobileservice.ejs',{message:'Successfully Added'})
}
exports.mobileupdateform=async(req,res)=>{
    const id=req.params.id
    const record=await Mobile.findById(id)
    res.render('admin/mobileupdate.ejs',{record})
}
exports.updatemobile=async(req,res)=>{
    const id=req.params.id
    const{bname,mname,ram,price,camera,features}=req.body
    if(req.file){
        const filename=req.file.filename
        await Mobile.findByIdAndUpdate(id,{brand:bname,name:mname,price:price,ram:ram,camera:camera,features:features,img:filename})
    }else{
        await Mobile.findByIdAndUpdate(id,{brand:bname,name:mname,price:price,ram:ram,camera:camera,features:features})
    }
    //res.render('admin/mobilemanage.ejs')
    res.redirect('/admin/mobilemanage')
}

exports.mobiledelete=async(req,res)=>{
    const id=req.params.id
    await Mobile.findByIdAndDelete(id)
    res.redirect('/admin/mobilemanage')
}

exports.mobilesingledatd=async(req,res)=>{
    const id=req.params.id
    const result=await Mobile.findById(id)
    const addressrecord=await Add.findOne()
    res.render('mobilesingledata.ejs',{result,addressrecord})
}

exports.redmirecord=async(req,res)=>{
    let test=['Redmi']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('redmi.ejs',{record,addressrecord})
}
exports.vivorecord=async(req,res)=>{
    let test=['Vivo']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('vivo.ejs',{record,addressrecord})
}
exports.opporecord=async(req,res)=>{
    let test=['Oppo']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('oppo.ejs',{record,addressrecord})
}
exports.samsungrecord=async(req,res)=>{
    let test=['Samsung']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('samsung.ejs',{record,addressrecord})
}
exports.oneplusrecord=async(req,res)=>{
    let test=['OnePlus']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('oneplus.ejs',{record,addressrecord})
}
exports.applerecord=async(req,res)=>{
    let test=['Apple']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('apple.ejs',{record,addressrecord})
}
exports.realmerecord=async(req,res)=>{
    let test=['Realme']
    const record=await Mobile.find({brand:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('realme.ejs',{record,addressrecord})
}
exports.mobileststus=async(req,res)=>{
    const id=req.params.id
    const record=await Mobile.findById(id)
    let newststus=null
    if(record.status=='unpublish'){
        newststus='publish'
    }else{
        newststus='unpublish'
    }
    await Mobile.findByIdAndUpdate(id,{status:newststus})
    res.redirect('/admin/mobilemanage')
}
exports.sixtoten=async(req,res)=>{
    let test=['6999','7999','9999']
    const record=await Mobile.find({price:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('sixtoten.ejs',{record,addressrecord})
}
exports.tentotwenty=async(req,res)=>{
    let test=['13999','14999','17999','18999','19999']
    const record=await Mobile.find({price:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('tentotwenty.ejs',{record,addressrecord})
}
exports.twentytothirty=async(req,res)=>{
    let test=['22999','23999','24999','28999']
    const record=await Mobile.find({price:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('twentytothirty.ejs',{record,addressrecord})
}
exports.thirtyplus=async(req,res)=>{
    let test=['34999','44999','74999','86999']
    const record=await Mobile.find({price:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('thirtyplus.ejs',{record,addressrecord})
}

