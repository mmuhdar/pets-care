"use strict";

const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("masuk pets")
})

module.exports = router