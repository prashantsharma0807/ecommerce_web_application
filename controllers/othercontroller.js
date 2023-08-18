const Other=require('../models/other')
const Add=require('../models/addrs')

exports.othermanage=async(req,res)=>{
    const record=await Other.find().sort({postedDate:-1})
    const otherrecordcount=await Other.count()
    const publishrecordcount=await Other.count({status:'publish'})
    const unpublishrecordcount=await Other.count({status:'unpublish'})
    res.render('admin/othermanage.ejs',{record,otherrecordcount,publishrecordcount,unpublishrecordcount})
    
}

exports.addotherservice=(req,res)=>{
    res.render('admin/otheradd.ejs',{message:''})
}

exports.otherformrecord=(req,res)=>{
    const{item,category,price,desc,ldesc}=req.body
    const filename=req.file.filename
    const record=new Other({item:item,category:category,price:price,desc:desc,ldesc:ldesc,img:filename})
    record.save()
    //console.log(record)
    res.render('admin/otheradd.ejs',{message:'Successfully Added'})
}
exports.otherdelete=async(req,res)=>{
    const id=req.params.id
    await Other.findByIdAndDelete(id)
    res.redirect('/admin/othermanage')
}
exports.otherupdateform=async(req,res)=>{
    const id=req.params.id
    const record=await Other.findById(id)
    res.render('admin/otherupdate.ejs',{record})
}
exports.updateother=async(req,res)=>{
    const id=req.params.id
    const{item,category,price,desc}=req.body
    if(req.file){
        const filename=req.file.filename
        await Other.findByIdAndUpdate(id,{item:item,category:category,price:price,desc:desc,img:filename})
    }else{
        await Other.findByIdAndUpdate(id,{item:item,category:category,price:price,desc:desc})
    }
    //res.render('admin/mobilemanage.ejs')
    res.redirect('/admin/othermanage')
}
exports.otherstatus=async(req,res)=>{
    const id=req.params.id
    const record=await Other.findById(id)
    let newststus=null
    if(record.status=='unpublish'){
        newststus='publish'
    }else{
        newststus='unpublish'
    }
    await Other.findByIdAndUpdate(id,{status:newststus})
    res.redirect('/admin/othermanage')
}

exports.back=(req,res)=>{
    res.redirect('/')
}

exports.grocerypage=async(req,res)=>{
  const record=await Other.find({category:'grocery'})
  const addressrecord=await Add.findOne()
  res.render('grocerypage.ejs',{record,addressrecord})
}
exports.electronics=async(req,res)=>{    
 const record= await Other.find({category:'electronics'})
 const addressrecord=await Add.findOne()
 res.render('electronics.ejs',{record,addressrecord})
}
exports.babytoy=async(req,res)=>{    
    const record= await Other.find({category:'toy'})
    const addressrecord=await Add.findOne()
    res.render('babytoy.ejs',{record,addressrecord})   
}