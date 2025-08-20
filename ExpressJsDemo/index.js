const express=require("express");
const app=express()
const adminRoutes=require("./routes/adminRoutes");
const userRoutes=require("./routes/userRoutes");
const formidable=require('express-formidable');
const db=require('./dbCon');
const adminModel=require('./models/adminModels')
const cors=require('cors');
const jwt=require('jsonwebtoken');

app.use(cors({
    origin:"http://localhost:5173"
}))



const HOST='localhost' //127.0.0.1
const PORT=8000

app.use(formidable());

app.use("/admin",adminRoutes)     //http://localhost:8000/admin
app.use("/user",userRoutes)        //http://localhost:8000/user

app.set("view engine",'ejs')
app.use(express.static('public'))

app.get("/login",(req,res)=>{
    res.render('login',{msg:null})
})
app.post("/login",async(req,res)=>{
    const user=await  adminModel.findOne({emailId:req.fields.mailId})
    // console.log(user);
    if(user && user.password===req.fields.pwd){
        const token=jwt.sign({id:user._id, email:user.emailId},'qwerty123',{expiresIn: '1h'});
        
        // localStorage.setItem('token', token);
        res.json({success:true,msg:"Login Success",user,token});
        
    }else{
       res.json({msg:"Invalid Email"})
    }
    
    
})


app.get("/",(req,res)=>{
    // res.send("Hello")
    let name="Sachin"
    let msg="<font size='4' face='chiller'>Hello</font>"
    let isValid=true
    res.render('default',{name ,msg,isValid})
})



 app.get("/home",(req,res)=>{
     let fruitNames=["Apple","Mango","Banana","PineApple"]
     let userData={uid:1002,unm:"Virat" , gender:"Male"}
     res.render("home",{fruitNames},{userData})
})



// app.get("/about",(req,res)=>{
//     res.send("Hello About Page")
// })

// app.post("/",(req,res)=>{
//     res.send("Post request send")
// })
 
app.listen(PORT, HOST, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server running on Port ${PORT}:${HOST}`);
    }

})