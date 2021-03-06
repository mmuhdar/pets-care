"use strict";

const router = require("express").Router();
const UserController = require("../controllers/userController");

router.get("/register", UserController.formRegister);
router.post("/register", UserController.register);
router.get("/login", UserController.formLogin);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);

module.exports = router;
