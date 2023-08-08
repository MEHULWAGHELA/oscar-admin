const express = require("express");
const router = express.Router();
const training = require("../../controller/homeController/trainingController");
const jwtauthontification = require("../../util/jwtauthontification")


router.get("/getdata" ,training.getdata);
router.post("/adddata" ,jwtauthontification(['admin']),training.adddata);
router.post("/deletedata"  ,jwtauthontification(['admin']),training.deletedata);



module.exports = router