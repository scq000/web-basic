'use strict';

var Topic = require('./topic');
var FillInBlankTopic = require('./fill-in-blank-topic');
var SingleChoiceTopic = require('./single-choice-topic');
var MultipleChoiceTopic = require('./multiple-choice-topic');
var TrueFalseTopic = require('./true-false-topic');
var ShortAnswerTopic = require('./short-answer-topic');

function TopicFactory() {
}

TopicFactory.prototype.create = function (type, data) {
    if (type === 'fill_in_blank') {
        return new FillInBlankTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === 'single_choice') {
        return new SingleChoiceTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === 'multiple_choice') {
        return new MultipleChoiceTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === 'true_false') {
        return new TrueFalseTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === 'short_answer') {
        return new ShortAnswerTopic(data.name, data.question, data.options, data.score, data.answer);
    }
};

module.exports = TopicFactory;