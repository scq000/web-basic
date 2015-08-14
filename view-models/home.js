'use strict';

var FormHelper = require('../helpers/home-view-model');

var FillInBlankTopic = require('../models/fill-in-blank-topic');
var SingleChoiceTopic = require('../models/single-choice-topic');
var MultipleChoiceTopic = require('../models/multiple-choice-topic');
var TrueFalseTopic = require('../models/true-false-topic');
var ShortAnswerTopic = require('../models/short-answer-topic');

function HomeViewModel(topics, formData) {
    this.topics = topics;
    this.formData = formData;
    this.totalScore = '';
    this.studentInfo = {grade:'', studentName:'', studentId:''};
}

HomeViewModel.prototype.getFillInBlankTopic = function () {
    return this.topics.filter(function (topic) {
        return topic instanceof FillInBlankTopic;
    });
};

HomeViewModel.prototype.getSingleChoiceTopic = function () {
    return this.topics.filter(function (topic) {
        return topic instanceof SingleChoiceTopic;
    });
};

HomeViewModel.prototype.getMultipleChoiceTopic = function () {
    return this.topics.filter(function (topic) {
        return topic instanceof MultipleChoiceTopic;
    });
};

HomeViewModel.prototype.getTrueFalseTopic = function () {
    return this.topics.filter(function (topic) {
        return topic instanceof TrueFalseTopic;
    });
};

HomeViewModel.prototype.getShortAnswerTopic = function () {
    return this.topics.filter(function (topic) {
        return topic instanceof ShortAnswerTopic;
    });
};

module.exports = HomeViewModel;