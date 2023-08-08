const express = require("express");
const router = express.Router();
const jwtauthontification = require("../../util/jwtauthontification")
const gallery = require("../../controller/galleryController/galleryController");
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
const upload = multer({ storage: storage }).array('images',12)

router.get("/getdata" ,gallery.getdata);
router.post("/adddata",jwtauthontification(['admin']) ,gallery.adddata);
router.post("/deletedata",jwtauthontification(['admin']) ,gallery.deletedata);



module.exports = router