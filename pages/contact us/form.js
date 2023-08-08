const express = require("express");
const router = express.Router();
const form = require("../../controller/contactUsController/form");


router.get("/getdata" ,form.getdata);
router.post("/adddata" ,form.adddata);
router.post("/deletedata" ,form.deletedata);



module.exports = router