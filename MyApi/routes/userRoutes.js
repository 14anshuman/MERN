const express=require('express')
const {userDefault,userHome}=require("../controllers/userController")

const router=express.Router();


//Localhost:8000/admin
router.get("/",userDefault)


router.get("/home",userHome)


module.exports = router;