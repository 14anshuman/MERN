const express =require('express')
const app=express()
const userRoute=require('./routes/userRoutes')


const HOST='localhost'
const PORT=8000




app.use("/user",userRoute)
//Application level 
app.use((req,res,next)=>{
    console.log("Middleware 1");
    next();
    
})

app.use((req,res,next)=>{
    console.log("Middleware 2");
    // res.send("Response send by Middleware 2")
    next()
})

app.use("/home",(req,res,next)=>{
    console.log("Middleware Home");
    next();
})



app.get("/",(req,res)=>{
    res.send("<h1 align='center'>Application Default Page</h1>");
})

app.get("/home",(req,res)=>{
    res.send("<h1 align='center'>Application Home Page</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1 align='center'>Application About Us Page</h1>");
})

//Error Handling Middleware
app.use((err,req,res,next)=>{
    console.log("Error Handling Middlware");
    next()
    
})

app.listen(PORT,HOST,(err)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(`Server running on http://${HOST}:${PORT}`);
        
    }
})