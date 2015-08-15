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
    var topic;

    if (type === TOPIC_TYPE.FILL_IN_BLANK) {
        topic = new FillInBlankTopic(data.name, data.question, data.score, data.answer);
        topic.setOptions(data.options);
    } else if (type === TOPIC_TYPE.SINGLE_CHOICE) {
        topic = new SingleChoiceTopic(data.name, data.question, data.score, data.answer);
        topic.setOptions(data.options);
    } else if (type === TOPIC_TYPE.MULTIPLE_CHOICE) {
        topic = new MultipleChoiceTopic(data.name, data.question, data.score, data.answer);
        topic.setOptions(data.options);
    } else if (type === TOPIC_TYPE.TRUE_FALSE) {
        topic = new TrueFalseTopic(data.name, data.question, data.score, data.answer);
        topic.setOptions(data.options);
    } else if (type === TOPIC_TYPE.SHORT_ANSWER) {
        topic = new ShortAnswerTopic(data.name, data.question, data.score, data.answer);
        topic.setOptions(data.options);
    }

    return topic;
};

module.exports = TopicFactory;