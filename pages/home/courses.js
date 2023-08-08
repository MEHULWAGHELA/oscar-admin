const express = require("express");
const router = express.Router();
const courses = require("../../controller/homeController/coursesController");
const multer= require("multer")
const jwtauthontification = require("../../util/jwtauthontification")


let imagename = ''
var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './public/uploads');    
    }, 
    filename: function (req, file, cb) { 
      imagename = file.originalname
      cb(null , file.originalname);   
   }
});
const upload = multer({ storage: storage })

router.get("/getdata" ,courses.getdata);
router.post("/adddata" ,upload.single('img') ,jwtauthontification(['admin']),courses.adddata);
router.post("/deletedata"  ,jwtauthontification(['admin']),courses.deletedata);



module.exports = router