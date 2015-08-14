'use strict';

var _ = require('lodash');

function Topic(type, name, question, options, score, answer) {
    this.type = type;
    this.name = name;
    this.question = question;
    this.options = options;
    this.score = score;
    this.answer = answer;
    this.value = [];
}

Topic.prototype.mark = function () {
    //Should be implemented
};

Topic.prototype.setValue = function (value) {
    this.value = value instanceof Array ? value : [value];
};

module.exports = Topic;