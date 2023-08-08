const express = require("express");
const router = express.Router();
const information = require("../../controller/homeController/informationController");
const jwtauthontification = require("../../util/jwtauthontification")


router.get("/getdata" ,information.getdata);
router.post("/adddata" ,jwtauthontification(['admin']) ,information.adddata);
router.post("/deletedata" ,jwtauthontification(['admin']) ,information.deletedata);



module.exports = router