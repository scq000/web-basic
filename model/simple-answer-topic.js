'use strict';

var Topic = require('./topic');

function SimpleAnswerTopic(type,name,question,options,score,answer){
    Topic.call(this,"fill_in_blank",name,question,options,score,answer);
}

SimpleAnswerTopic.prototype = Object.create(Topic.prototype);
SimpleAnswerTopic.prototype.constructor = SimpleAnswerTopic;

SimpleAnswerTopic.prototype.mark = function(){};

module.exports = SimpleAnswerTopic;