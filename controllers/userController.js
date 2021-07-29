"use strict";
const { User } = require("../models/index");
const { checkPassword } = require("../helper/bcrypt")

class Controller {
  static formRegister(req, res) {
    res.render("users/register");
  }

  static register(req, res) {
    const { name, email, password } = req.body;
    User.create({
      name,
      email,
      password,
    })
      .then(() => res.redirect("/"))
      .catch((err) => res.send(err));
  }

  static formLogin(req, res) {
    res.render("users/login");
  }

  static login(req, res) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((data) => {
        if (!data) {
          let message = "Email yang anda masukkan belum terdaftar";
          res.redirect(`/users/login?msg=${message}`);
        } else { 
            const isPasswordMatch = checkPassword(password, data.password)
            if(isPasswordMatch) {
              req.session.isAdmin = data.role
              req.session.isLogin = true;
              req.session.userId = data.id
              res.redirect("/")
            } else {
              let message = "Email dan Password yang dimasukkan tidak cocok";
              res.redirect(`/users/login?msg=${message}`);
            }
        }
      })
      .catch((err) => res.send(err));
  }

  static logout(req, res) {
    req.session.isLogin = false;
    res.redirect("/users/login")
  }
}

module.exports = Controller;
