const express = require("express");
const router = express.Router();
const jwtauthontification = require("../../util/jwtauthontification")
const placement = require("../../controller/placementController/placementController");
const multer= require("multer");

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

router.get("/getdata" ,placement.getdata);
router.post("/adddata",jwtauthontification(['admin']) ,upload.single('image'),placement.adddata);
router.post("/deletedata" ,jwtauthontification(['admin']),placement.deletedata);



module.exports = router