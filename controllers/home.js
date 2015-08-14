'use strict';

var TopicHelper = require('../helpers/topic');
var FormHelper = require('../helpers/form');
var HomeViewModel = require('../view-models/home');
var data = require('../seeds/topics.json');

function HomeController() {
}

HomeController.prototype.index = function (req, res) {

    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);

    var homeViewModel = new HomeViewModel(topics);

    res.render('index', homeViewModel);
};

HomeController.prototype.submit = function (req, res) {
    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);

    var homeViewModel = new HomeViewModel(topics, req.body);
    var formHelper = new FormHelper(req.body,topics);

    formHelper.setUserInputs();
    homeViewModel.totalScore = formHelper.getTotalScore();

    res.render('index', homeViewModel);
};

module.exports = HomeController;