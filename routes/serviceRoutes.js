"use strict";

const router = require("express").Router();
const Controller = require("../controllers/serviceController");

router.get("/add", Controller.formAddService);
router.post("/add", Controller.addService);
router.get("/all-pets", Controller.listAllPets);
router.get("/update/:id", Controller.updateStatus)
router.post("/send-mail", Controller.sendMail)

module.exports = router;
