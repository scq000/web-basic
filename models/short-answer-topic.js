'use strict';

var Topic = require('./topic');

function ShortAnswerTopic(name, question, score, answer) {
    Topic.call(this, name, question, score, answer);
}

ShortAnswerTopic.prototype = Object.create(Topic.prototype);
ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.mark = function () {
    return this.value.toString() === this.answer.toString() ? this.score : 0;
};

module.exports = ShortAnswerTopic;