const express = require("express");
const router = express.Router();
const adminform = require("../../controller/adminformcontroller/adminFormController");
const jwtauthontification = require("../../util/jwtauthontification")

// router.get("/getdata" ,information.getdata);
router.post("/adddata" ,adminform.adddata);
router.post("/login" ,adminform.login);
router.patch("/editpassword",jwtauthontification(['admin']) ,adminform.editpassword);

module.exports = router