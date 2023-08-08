const express = require("express");
const router = express.Router();
const about = require("../../controller/aboutController.js/aboutController");
const jwtauthontification = require("../../util/jwtauthontification")


router.get("/getdata",about.getdata);
router.post("/adddata"  ,jwtauthontification(['admin']),about.adddata);
router.post("/deletedata"  ,jwtauthontification(['admin']),about.deletedata);



module.exports = router