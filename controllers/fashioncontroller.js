const Fashion=require('../models/fashion')
const Add=require('../models/addrs')


exports.fashionpage=async(req,res)=>{
    
    const record=await Fashion.find({status:'publish'})
    //console.log(record)
    const addressrecord=await Add.findOne()
    res.render('fashionpage.ejs',{record,addressrecord,message:""})

}

exports.fashionmanage=async(req,res)=>{
    const record=await Fashion.find().sort({postedDate:1})
    const fashionrecordcount=await Fashion.count()
    const publishrecordcount=await Fashion.count({status:'publish'})
    const unpublishrecordcount=await Fashion.count({status:'unpublish'})
    res.render('admin/fashionmanage.ejs',{record,fashionrecordcount,publishrecordcount,unpublishrecordcount})
}

exports.fashionadd=async(req,res)=>{
    res.render('admin/fashionadd.ejs',{message:''})
}
exports.fashionformrecord=(req,res)=>{
    const{item,category,price,desc,ldesc}=req.body
    const filename=req.file.filename
    const record=new Fashion({item:item,category:category,price:price,desc:desc,ldesc:ldesc,img:filename})
    record.save()
    res.render('admin/fashionadd.ejs',{message:'Successfully added'})
}
exports.fashiondelete=async(req,res)=>{
    const id=req.params.id
    await Fashion.findByIdAndDelete(id)
    res.redirect('/admin/fashionmanage')
}
exports.fashionupdateform=async(req,res)=>{
    const id=req.params.id
    const record=await Fashion.findById(id)
    res.render('admin/fashionupdate.ejs',{record})
}

exports.updatefashion=async(req,res)=>{
    const id=req.params.id
    const{item,category,price,desc,ldesc}=req.body
    if(req.file){
        const filename=req.file.filename
        await Fashion.findByIdAndUpdate(id,{item:item,category:category,price:price,desc:desc,ldesc:ldesc,img:filename})
    }else{
        await Fashion.findByIdAndUpdate(id,{item:item,category:category,price:price,desc:desc,ldesc:ldesc})
    }
    //res.render('admin/mobilemanage.ejs')
    res.redirect('/admin/fashionmanage')
}
exports.fashionststus=async(req,res)=>{
    const id=req.params.id
    const record=await Fashion.findById(id)
    let newststus=null
    if(record.status=='unpublish'){
        newststus='publish'
    }else{
        newststus='unpublish'
    }
    await Fashion.findByIdAndUpdate(id,{status:newststus})
    res.redirect('/admin/fashionmanage')
}

exports.fashionsingledata=async(req,res)=>{
    const id=req.params.id
    const result=await Fashion.findById(id)
    //console.log(result)
    const addressrecord=await Add.findOne()
    res.render('fashionsingledata.ejs',{result,addressrecord})
}
exports.back=(req,res)=>{
    res.redirect('/fashion/fashionpage')
}

exports.man=async(req,res)=>{
    let test=['Man']
    const record=await Fashion.find({category:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('fmenswear.ejs',{record,addressrecord})
}
exports.women=async(req,res)=>{
    let test=['Women']
    const record=await Fashion.find({category:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('fwomenwear.ejs',{record,addressrecord})
}
exports.boy=async(req,res)=>{
    let test=['Boy']
    const record=await Fashion.find({category:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('fboywear.ejs',{record,addressrecord})
}
exports.girl=async(req,res)=>{
    let test=['Girl']
    const record=await Fashion.find({category:test,status:'publish'})
    const addressrecord=await Add.findOne()
    res.render('fgirlswear.ejs',{record,addressrecord})
}