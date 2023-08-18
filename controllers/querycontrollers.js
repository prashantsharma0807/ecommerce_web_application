const Query=require('../models/query')
const nodemailer=require('nodemailer')


exports.queryform=(req,res)=>{
  const {email,query}=req.body
  const record=  new Query({email:email,query:query})
  record.save()
  res.redirect('/')
}

exports.querymanage=async(req,res)=>{
    const record=await Query.find()
    res.render('admin/querymanagement.ejs',{record})   
}
exports.queryreplyform=async(req,res)=>{
    const id=req.params.id
   const record= await Query.findById(id)
   res.render('admin/queryreplyform.ejs',{record})
}
exports.queryrecord=async(req,res)=>{
    const id=req.params.id
    const filepath=req.file.path
    const{emailto,emailfrom,subject,body,attachment}=req.body
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'pks637700@gmail.com', // generated ethereal user
          pass: 'zllgtmaiotxmsesd', // generated ethereal password
        },
      });
      console.log('connected to SMTP server')
      
      let info = await transporter.sendMail({
        from:emailfrom, // sender address
        to:emailto, // list of receivers
        subject:subject, // Subject line
        text:body, // plain text body
        //html: "<b>Hello world?</b>", // html body
        attachment:[{path:filepath}]
      });
      console.log('email sent')
      await Query.findByIdAndUpdate(id,{status:'Replyed'})
      res.redirect('/admin/querymanage')
    
}

exports.querydelete=async(req,res)=>{
    const id=req.params.id
    await Query.findByIdAndDelete(id)
    res.redirect('/admin/querymanage')
}