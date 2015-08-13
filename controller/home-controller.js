'use strict';

function HomeController() {
}

HomeController.prototype.createIndex = function(req,res) {
    res.render('index');
};

module.exports = HomeController;