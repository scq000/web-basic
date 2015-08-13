'use strict';

var Topic = require('./topic');

function SimpleAnswerTopic(name,question,options,score,answer){
    Topic.call(this,"simple_answer",name,question,options,score,answer);
}

SimpleAnswerTopic.prototype = Object.create(Topic.prototype);
SimpleAnswerTopic.prototype.constructor = SimpleAnswerTopic;

SimpleAnswerTopic.prototype.mark = function(){};

module.exports = SimpleAnswerTopic;