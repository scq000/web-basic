'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(name, question, score, answer) {
    Topic.call(this, name, question, score, answer);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.mark = function () {
    return this.value.join('') === this.answer ? this.score : 0;
};

module.exports = MultipleChoiceTopic;
