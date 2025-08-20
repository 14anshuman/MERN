 const express=require('express')
const {adminDefault,adminHome,addUser,showUser, editUser, deleteUser}=require("../controllers/adminController")
const router=express.Router();


//Localhost:8000/admin
router.get("/",adminDefault)


router.get("/home",adminHome)

router.post("/addUser",addUser)
router.get("/addUser",addUser)
router.get("/showUsers",showUser)


router.get("/editUser/:id",editUser);
router.patch("/editUser/:id",editUser);

router.post("/deleteUser/:id",deleteUser)
// router.get("/:adminNm",getAdminData)
module.exports = router;