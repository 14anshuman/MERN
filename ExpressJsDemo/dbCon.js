const mongoose=require('mongoose')
const mongoURI=process.env.MONGODB_URL

mongoose.connect(mongoURI)
.then(()=>{
    console.log("Database Connectivity Established");
})
.catch((err)=>{
    console.log("Database Connection Failed...");
    
})

module.export=mongoose;
