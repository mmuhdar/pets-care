"use strict";
const { Service } = require("../models/index");

class Controller {
  static formAddService(req, res) {
    res.render("services/addForm");
  }

  static addService(req, res) {
    const { name, price, imageUrl } = req.body;
    Service.create({
      name,
      price,
      imageUrl
    })
     .then(() => res.redirect("/"))
     .catch(err => console.log(err))
  }
}

module.exports = Controller;
