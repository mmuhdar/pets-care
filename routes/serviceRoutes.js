"use strict";

const router = require("express").Router();
const Controller = require("../controllers/serviceController");

router.get("/add", Controller.formAddService);
router.post("/add", Controller.addService)

module.exports = router;
