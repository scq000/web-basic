'use strict';

var TopicHelper = require('../helpers/topic');
var HomeViewModelHelper = require('../helpers/home-view-model');
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
    var homeViewModelHelper = new HomeViewModelHelper(req.body,topics);

    homeViewModelHelper.setUserInputs();
    homeViewModel.totalScore = homeViewModelHelper.getTotalScore();
    homeViewModel.studentInfo = homeViewModelHelper.getStudentInfo();

    res.render('index', homeViewModel);
};

module.exports = HomeController;