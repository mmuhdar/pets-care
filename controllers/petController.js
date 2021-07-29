"use strict";
const { Pet, User } = require("../models/index")

class Controller {
    static petList(req, res){
        Pet
            .findAll({
                where:{
                    UserId: req.params.id
                }
            })
            .then(data => {
                res.render("petList.ejs", { data })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static getAdd(req, res){

    }
}

module.exports = Controller