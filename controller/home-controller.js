'use strict';

var TopicHelper = require('../helper/topic-helper');
var HomeViewModel = require('../view-models/home-view-model');
var FormHelper = require('../helper/form-helper');

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

    var homeViewModel = new HomeViewModel(topics);
    var formHelper = new FormHelper(req.body);
    formHelper.setUserInputs(topics);

    res.send(topics);
};

module.exports = HomeController;