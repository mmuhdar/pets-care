"use strict";

const router = require("express").Router()
const Controller = require("../controllers/serviceController")

router.get("/", Controller.listServices)

module.exports = router