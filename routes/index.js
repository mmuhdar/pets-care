"use strict";

const router = require("express").Router();
const homeController = require("../controllers/homeController.js");
const Users = require("./userRoutes");
const Pets = require("./petRoutes");
const Services = require("./serviceRoutes");
const isLogin = require("../middleware/isLogin");

router.get("/", isLogin, homeController.home);
router.use("/users", Users);
router.use("/pets", isLogin, Pets);
router.use("/services", Services);

module.exports = router;
