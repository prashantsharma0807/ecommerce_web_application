const express=require('express')
const app=express()
app.use(express.urlencoded({extended:false}))
const frontendRouter=require('./routers/frontend')
const adminRouter=require('./routers/admin')
const mobileRouter=require('./routers/mobilerouter')
const fashionRouter=require('./routers/fashion')
const otherRouter=require('./routers/other')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecart')
const session=require('express-session')


app.use(session({
    secret:'psk',
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24}
}
))
app.use(frontendRouter)
app.use('/admin',adminRouter)
app.use('/mobile',mobileRouter)
app.use('/fashion',fashionRouter)
app.use('/other',otherRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000)