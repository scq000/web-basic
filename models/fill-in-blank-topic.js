'use strict';

var Topic = require('./topic');
var _ = require('lodash');

function FillInBlankTopic(name, question, options, score, answer) {
    Topic.call(this, name, question, options, score, answer);
}

FillInBlankTopic.prototype = Object.create(Topic.prototype);
FillInBlankTopic.prototype.constructor = FillInBlankTopic;

FillInBlankTopic.prototype.mark = function () {
    return _.intersection(this.answer, this.value).length * this.score;
};

module.exports = FillInBlankTopic;