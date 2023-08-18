const Add=require('../models/addrs')


exports.add=async(req,res)=>{
    try{
    const record=await Add.findOne()
    //console.log(record)
    res.render('admin/add.ejs',{record})
  }catch(error){
    res.render('admin/dashboard.ejs',{message:error.message})
  }
}

exports.addressupdate=async(req,res)=>{
    const id=req.params.id
    try{
    const record=await Add.findById(id)
    res.render('admin/addressupdate.ejs',{record})
  }catch(error){
    res.render('admin/dashboard.ejs',{message:error.message})
  }
}

exports.updatedaddress=async(req,res)=>{
    const id=req.params.id
    try{
   const{add,landline,phone,email,insta,twitter}=req.body
   await Add.findByIdAndUpdate(id,{add:add,landline:landline,phone:phone,email:email,insta:insta,twitter:twitter})
   res.redirect('/admin/add')
    }catch(error){
        res.render('admin/dashboard.ejs',{message:error.message})
    }
}