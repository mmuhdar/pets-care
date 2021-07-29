"use strict";
require("dotenv").config();
const router = require("./routes/index")
const port = process.env.PORT || 3000
const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
