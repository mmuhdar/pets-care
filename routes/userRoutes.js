"use strict";

const router = require("express").Router()
const UserController = require("../controllers/userController")
const PetController = require("../controllers/petController")

router.get("/", UserController.list)
router.get("/:id", PetController.petList)

module.exports = router