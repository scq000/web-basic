'use strict';

var Topic = require('./topic');

function JudgeTopic(type,name,question,options,score,answer){
    Topic.call(this,"fill_in_blank",name,question,options,score,answer);
}

JudgeTopic.prototype = Object.create(Topic.prototype);
JudgeTopic.prototype.constructor = JudgeTopic;

JudgeTopic.prototype.mark = function(){};

module.exports = JudgeTopic;