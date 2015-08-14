'use strict';

var FormHelper = require('../helpers/form');

function HomeViewModel(topics, formData) {
    this.topics = topics;
    this.formData = formData;
}

HomeViewModel.prototype.getFillInBlankTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === 'fill_in_blank';
    });
};

HomeViewModel.prototype.getSingleChoiceTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === 'single_choice';
    });
};

HomeViewModel.prototype.getMultipleChoiceTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === 'multiple_choice';
    });
};

HomeViewModel.prototype.getJudgeTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === 'judge';
    });
};

HomeViewModel.prototype.getSimpleAnswerTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === 'simple_answer';
    });
};


HomeViewModel.prototype.getStudentInfo = function () {
    var formHelper = new FormHelper(this.formData);
    return formHelper.getStudentInfo();
};

HomeViewModel.prototype.getTotalScore = function () {
    if (!this.formData) {
        return '';
    }
    var formHelper = new FormHelper(this.formData);
    formHelper.setUserInputs(this.topics);
    return formHelper.getTotalScore(this.topics);
};

module.exports = HomeViewModel;