const userDefault=(req,res)=>{
    res.send("<h1 align='center'>user Default Page </h1>");
}


const userHome=(req,res)=>{
     res.send("<h1 align='center'>user Home Page </h1>");
}


module.exports = {userHome,userDefault};