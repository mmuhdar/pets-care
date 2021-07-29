"use strict";

const router = require("express").Router()
const Controller = require("../controllers/controller")
const Services = require("./serviceRoutes")
const Users = require("./userRoutes")
const Pets = require("./petRoutes")

router.get("/", Controller.home)
router.use("/services", Services)
router.use("/users", Users)
router.use("/pets", Pets)

module.exports = router