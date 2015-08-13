'use strict';

function HomeViewModel(topics) {
    this.topics = topics;
}

HomeViewModel.prototype.getFillInBlankTopic = function () {
    return this.topics.filter(function(topic) {
        return topic.type === 'fill_in_blank';
    });
};

HomeViewModel.prototype.getSingleChoiceTopic = function () {
    return this.topics.filter(function(topic) {
        return topic.type === 'single_choice';
    });
};

HomeViewModel.prototype.getMultipleChoiceTopic = function () {
    return this.topics.filter(function(topic) {
        return topic.type === 'multiple_choice';
    });
};

HomeViewModel.prototype.getJudgeTopic = function () {
    return this.topics.filter(function(topic) {
        return topic.type === 'judge';
    });
};

HomeViewModel.prototype.getSimpleAnswerTopic = function () {
    return this.topics.filter(function(topic) {
        return topic.type === 'simple_answer';
    });
};

module.exports = HomeViewModel;