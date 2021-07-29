"use strict";

const router = require("express").Router()
const Controller = require("../controllers/petController")

router.get("/", Controller.petList)
router.get("/add", Controller.getAdd)
// router.post("/add", Controller.postAdd)

module.exports = router