const express =require("express")
const router=express.Router();



router.use((req,res,next)=>{
    console.log("Route Level Middleware");
    next();
})

router.get("/contact",(req,res)=>{
    res.send("<h1 align='center'>User Contact Page</h1>")
})

router.get("/profile",(req,res)=>{
    res.send("<h1 align='center'>User Profile Page</h1>")
})


module.exports=router