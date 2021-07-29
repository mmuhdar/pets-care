"use strict";
const { Service } = require("../models");

class Controller {
  static home(req, res) {
    let message = [];
    if (req.query.msg) {
      message.push(req.query.message)
    }
    Service.findAll()
      .then(data => {
        // console.log(data);
        res.render("home", { data, message });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Controller;
