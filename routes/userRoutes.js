"use strict";

const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("masuk user")
})

module.exports = router