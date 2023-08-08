const express = require("express");
const router = express.Router();
const learn = require("../../controller/homeController/learnController");
const jwtauthontification = require("../../util/jwtauthontification")


router.get("/getdata" ,learn.getdata);
router.post("/adddata" ,jwtauthontification(['admin']) ,learn.adddata);
router.post("/deletedata" ,jwtauthontification(['admin']) ,learn.deletedata);



module.exports = router