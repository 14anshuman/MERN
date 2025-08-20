const UserModel=require('../models/adminModels')

const adminDefault=(req,res)=>{
    res.render("adminViews/adminDefault")
}


const adminHome=(req,res)=>{
     let userData=[
        {uid:1002,unm:"Virat",gender:"Male"},
        {uid:1002,unm:"Virat",gender:"Male"},
        {uid:1002,unm:"Virat",gender:"Male"},
     ]
     res.render("adminViews/adminHome",{userData});
}

const addUser= async(req,res)=>{
   if(req.method ==='POST'){
        const newUser=new UserModel({
         userName:req.fields.unm,
         password:req.fields.pwd,
         emailId:req.fields.mailId,
        })
    let user=await newUser.save();
     if(user){
      res.json({msg:"record added succfully",user});
     }
      
   }else{
      res.json({msg:"Not added"});
   }
}



const showUser= async(req,res)=>{

   const userData=await UserModel.find();
   // console.log(userData);
   
   //   res.render("adminViews/showUsers",{userData})
   res.json(userData);
}


const editUser= async(req,res)=>{

   if(req.method==='POST'){
        const updatedUser=await UserModel.findByIdAndUpdate(req.params.id,{password:req.fields.pwd, email:req.fields.mailId},{new:true})
        if(updatedUser){
          res.render("adminViews/editUser",{userData:updatedUser,msg:"User Updated Successfully"})
           }
   }
   else{
            // const userData=await UserModel.find();
   // console.log(userData);
   const userData=await UserModel.findOne({_id:req.params.id});
   // console.log(userData);
   

   
     res.render("adminViews/editUser",{userData,msg:null})
   }
   
}


const deleteUser=async(req,res)=>{
   const user=await UserModel.findByIdAndDelete({_id:req.params.id});
   if(user){
      res.redirect("/admin/showUsers")
   }

}

//  const getAdminData=(req,res)=>{
//      let nm=req.params.adminNm;
//       res.send(`<h1 align='center'>${nm} Admin Page </h1>`);
//  }



module.exports = {adminHome,adminDefault,addUser,deleteUser,editUser,showUser};