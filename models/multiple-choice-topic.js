'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(name, question, options, score, answer) {
    Topic.call(this, "multiple_choice", name, question, options, score, answer);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.mark = function () {
    return this.value.toString() === this.answer.toString() ? this.score : 0;
};

module.exports = MultipleChoiceTopic;