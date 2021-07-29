"use strict";

const express = require("express");
const app = express();
const router = require("./routes/index");
const port = 3000;
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
