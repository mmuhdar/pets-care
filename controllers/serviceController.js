"use strict";
const { Service } = require("../models/index")

class Controller {
    static listServices(req, res){
        Service
            .findAll()
            .then(data => {
                res.render("services.ejs", { data })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = Controller