const mongoose=require('mongoose')
const mongoURI="mongodb://localhost:27017/Hello"

mongoose.connect(mongoURI)
.then(()=>{
    console.log("Database Connectivity Established");
})
.catch((err)=>{
    console.log("Database Connection Failed...");
    
})

module.export=mongoose;
