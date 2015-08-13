'use strict';

function HomeController() {
}

HomeController.prototype.createIndex = function(req,res) {

    var topics = require('../seeds/topics.json');

    res.render('index',{topics: topics});
};

HomeController.prototype.controlUserInput = function(req,res) {
    res.send(req.body);
};

module.exports = HomeController;