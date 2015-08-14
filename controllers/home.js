'use strict';

var TopicHelper = require('../helpers/topic');
var HomeViewModel = require('../view-models/home');

function HomeController() {
}

HomeController.prototype.index = function (req, res) {

    var data = require('../seeds/topics.json');
    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);

    var homeViewModel = new HomeViewModel(topics, req.body);

    res.render('index', homeViewModel);
};
module.exports = HomeController;