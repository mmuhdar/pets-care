"use strict";
const { Service, Pet, User, PetService } = require("../models/index");
const nodemailer = require("nodemailer");

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

  static listAllPets(req, res) {
    Pet.findAll({
      include: [User, Service],
      order: [
        ["name", "ASC"]
      ]
    })
      .then(data => {
        res.render("services/allPets", {data})
      })
      .catch(err => console.log(err))
  }

  static updateStatus(req, res) {
    PetService.update({
      status: "success",
    },{
      where: {
        uuid: req.params.id
      }
    })
      .then(() => res.redirect("/"))
      .catch(err => console.log(err))
  }

  static sendMail( req, res ) {
    const { petId, userId } = req.body;
    const result = {};
    Pet.findByPk(petId, {
      include: [Service]
    })
      .then(data => {
        result.pet = data
        return User.findByPk(userId)
      })
      .then(data => {
        result.owner = data
        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'kasey.kling86@ethereal.email',
              pass: 'pUKNbGgWE5bfZ1UMjY'
          }
        });
        transporter.sendMail({
          to: `${result.owner.email}`,
          from: "petscare@hacktiv8.com",
          subject: "Pets Care Information",
          text: `Hai ${result.owner.name}, peliharaan kamu udah boleh di ambil nih.`
        })
        res.redirect("/")
      })
      .catch(err => console.log(err))
  }
}

module.exports = Controller;
