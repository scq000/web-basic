'use strict';

var Topic = require('./topic');

function TrueFalseTopic(name, question, options, score, answer) {
    Topic.call(this, name, question, options, score, answer);
}

TrueFalseTopic.prototype = Object.create(Topic.prototype);
TrueFalseTopic.prototype.constructor = TrueFalseTopic;

TrueFalseTopic.prototype.mark = function () {
    return this.value.toString() === this.answer.toString() ? this.score : 0;
};

module.exports = TrueFalseTopic;