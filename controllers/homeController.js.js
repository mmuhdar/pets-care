"use strict";
const { Service } = require("../models");

class Controller {
  static home(req, res) {
    Service.findAll()
      .then(data => {
        // console.log(data);
        res.render("home", { data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Controller;
