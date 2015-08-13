'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(name, question, options, score, answer) {
    Topic.call(this, "multiple_choice", name, question, options, score, answer);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.mark = function () {
    return this.answer.join('') === this.value ? this.score : 0;
};

MultipleChoiceTopic.prototype.setValue = function (value) {
    if (value) {
        this.value = value.join('');
    }
};

module.exports = MultipleChoiceTopic;