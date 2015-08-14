'use strict';

var Topic = require('./topic');
var FillInBlankTopic = require('./fill-in-blank-topic');
var SingleChoiceTopic = require('./single-choice-topic');
var MultipleChoiceTopic = require('./multiple-choice-topic');
var TrueFalseTopic = require('./true-false-topic');
var ShortAnswerTopic = require('./short-answer-topic');

var TOPIC_TYPE = require('../lib/utils');

function TopicFactory() {
}

TopicFactory.prototype.create = function (type, data) {
    if (type === TOPIC_TYPE.FILL_IN_BLANK) {
        return new FillInBlankTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === TOPIC_TYPE.SINGLE_CHOICE) {
        return new SingleChoiceTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === TOPIC_TYPE.MULTIPLE_CHOICE) {
        return new MultipleChoiceTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === TOPIC_TYPE.TRUE_FALSE) {
        return new TrueFalseTopic(data.name, data.question, data.options, data.score, data.answer);
    } else if (type === TOPIC_TYPE.SHORT_ANSWER) {
        return new ShortAnswerTopic(data.name, data.question, data.options, data.score, data.answer);
    }
};

module.exports = TopicFactory;