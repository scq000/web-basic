'use strict';

var TopicHelper = require('../helper/topic-helper');
var HomeViewModel = require('../view-models/home-view-model');

function HomeController() {
}

HomeController.prototype.index = function(req,res) {

    var data = require('../seeds/topics.json');
    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);

    console.log(req.body);

    var homeViewModel = new HomeViewModel(topics,req.body);

    res.render('index', homeViewModel);
};
module.exports = HomeController;