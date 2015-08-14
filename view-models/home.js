'use strict';

var FormHelper = require('../helpers/form');
var TOPIC_TYPE = require('../lib/utils');

function HomeViewModel(topics, formData) {
    this.topics = topics;
    this.formData = formData;
}

HomeViewModel.prototype.getFillInBlankTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === TOPIC_TYPE.FILL_IN_BLANK;
    });
};

HomeViewModel.prototype.getSingleChoiceTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === TOPIC_TYPE.SINGLE_CHOICE;
    });
};

HomeViewModel.prototype.getMultipleChoiceTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === TOPIC_TYPE.MULTIPLE_CHOICE;
    });
};

HomeViewModel.prototype.getTrueFalseTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === TOPIC_TYPE.TRUE_FALSE;
    });
};

HomeViewModel.prototype.getShortAnswerTopic = function () {
    return this.topics.filter(function (topic) {
        return topic.type === TOPIC_TYPE.SHORT_ANSWER;
    });
};


HomeViewModel.prototype.getStudentInfo = function () {
    if (!this.formData) {
       return {grade:'', studentName:'', studentId:''};
    }
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