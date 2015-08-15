'use strict';

var _ = require('lodash');
var Option = require('./option');

function Topic(name, question, score, answer) {
    this.name = name;
    this.question = question;
    this.options = [];
    this.score = score;
    this.answer = answer;
    this.value = [];
}

Topic.prototype.mark = function () {
    //Should be implemented
};

Topic.prototype.setOptions = function (optionsData) {
    var that = this;
    optionsData.forEach(function(optionData) {
        that.options.push(new Option(optionData.value,optionData.description));
    });
};

Topic.prototype.setValue = function (value) {
    this.value = value instanceof Array ? value : [value];
};

module.exports = Topic;