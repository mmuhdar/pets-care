"use strict";

const router = require("express").Router();
const Controller = require("../controllers/petController");

router.get("/add/:id", Controller.viewFormAdd);
router.post("/add/:id", Controller.addPetService);
router.get("/list/:id", Controller.listPetsByService);
router.get("/adding-more", Controller.addMoreServiceForm);
router.post("/adding-more", Controller.addMoreService);

module.exports = router;
