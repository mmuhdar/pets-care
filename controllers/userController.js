"use strict";
const { User, Pet } = require("../models/index")

class Controller {
    static list(req, res){
        User
            .findAll()
            .then(data => {
                res.render("userList.ejs", { data })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = Controller