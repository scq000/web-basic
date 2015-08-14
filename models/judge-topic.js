'use strict';

var Topic = require('./topic');

function JudgeTopic(name, question, options, score, answer) {
    Topic.call(this, "judge", name, question, options, score, answer);
}

JudgeTopic.prototype = Object.create(Topic.prototype);
JudgeTopic.prototype.constructor = JudgeTopic;

JudgeTopic.prototype.mark = function () {
    return this.value.toString() === this.answer.toString() ? this.score : 0;
};

module.exports = JudgeTopic;