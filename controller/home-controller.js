'use strict';

var TopicHelper = require('../helper/topic-helper');
var HomeViewModel = require('../view-models/home-view-model');

function HomeController() {
}

HomeController.prototype.createIndex = function(req,res) {

    var data = require('../seeds/topics.json');
    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);

    var homeViewModel = new HomeViewModel(topics);

    res.render('index', homeViewModel);
};

HomeController.prototype.controlUserInput = function(req,res) {

    var data = require('../seeds/topics.json');
    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);

    var homeViewModel = new HomeViewModel(topics,req.body);

    res.render('index',homeViewModel);
    //res.send(homeViewModel.getStudentInfo());
};

module.exports = HomeController;