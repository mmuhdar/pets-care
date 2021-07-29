"use strict";
const { Pet, Service, PetService, User} = require("../models/index");

class Controller {
  static viewFormAdd(req, res) {
    const serviceId = req.params.id;
    Service.findByPk(serviceId)
      .then((service) => {
        res.render("pets/viewFormAdd", { data: service });
      })
      .catch(err => console.log(err));
  }

  static addPetService(req, res) {
    const { name, type, weight, race} = req.body
    const serviceId = req.params.id
    Pet.create({
      name: name,
      type: type,
      weight: weight,
      race: race,
      UserId: req.session.userId
    })
      .then(pet => {
        return pet
      })
      .then(pet => {
        PetService.create({
          PetId: pet.id,
          ServiceId: serviceId,
        })
        res.redirect("/")
      })
      .catch(err => console.log(err))
  }

  static listPetsByService(req, res) {
    // console.log(req.session.userId);
    const serviceId = req.params.id;
    Service.findByPk(serviceId, {
      include: [Pet]
    })
      .then(data => {
         res.render("pets/listPetsService", {data})
      })
      .catch(err => console.log(err))
  }

  static addMoreServiceForm(req, res) {
    const userId = req.session.userId;
    const result = {}
    User.findByPk(userId, {
      include: [Pet]
    })
      .then(data => {
        result.data = data
        return Service.findAll()
      })
      .then(data => {
        result.services = data
        res.render("pets/moreService", result)
      })
      .catch(err => console.log(err))
  }

  static addMoreService(req, res) {
    PetService.create({
      PetId: req.body.PetId,
      ServiceId: req.body.ServiceId
    })
      .then(() => res.redirect("/"))
      .catch(err => console.log(err))
  }
}

module.exports = Controller;
