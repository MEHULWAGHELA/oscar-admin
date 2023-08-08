const express = require("express");
const router = express.Router();
const slider = require("./home/slider")
const information = require("./home/information")
const learn = require("./home/learn")
const courses = require("./home/courses")
const training = require("./home/training")
const partner = require("./home/partner");
const about = require("../pages/about us/about");
const placement = require("./placement/placement")
const gallery = require("./gallery/galley")
const form = require("./contact us/form")
const adminForm = require("./adminForm/adminForm")

router.use("/slider",slider);
router.use("/information",information);
router.use("/learn",learn);
router.use("/courses",courses);
router.use("/training",training);
router.use("/partner",partner);
router.use("/about",about);
router.use("/placement",placement);
router.use("/gallery",gallery);
router.use("/form",form);
router.use("/adminform",adminForm);

module.exports = router