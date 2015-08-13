'use strict';

function HomeController() {
}

HomeController.prototype.createIndex = function(req,res) {
    res.render('index');
};

HomeController.prototype.controlUserInput = function(req,res) {
    res.send(req.body);
};

module.exports = HomeController;