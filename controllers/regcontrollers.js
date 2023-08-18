const Reg=require('../models/reg')


exports.loginpage=(req,res)=>{
    res.render('login.ejs',{message:''})
}

exports.dashbord=async(req,res)=>{
    const{email,pass}=req.body
    const record=await Reg.findOne({email:email})
    if(record!==null){
        if(record.pass==pass){
            req.session.isAuth=true
            res.redirect('/admin/dashboard')
        }else{
            res.render('login.ejs',{message:'Wrong credentails'})
        }
    }else{
        res.render('login.ejs',{message:'Wrong credentails'})   
    }   
}

exports.showdashboard=(req,res)=>{
    res.render('admin/dashboard.ejs',message='')
}

//exports.home=(req,res)=>{
//    res.render('admin/dashboard.ejs')
//}

exports.logout=(req,res)=>{
    req.session.destroy()
    res.redirect('/admin/')
}