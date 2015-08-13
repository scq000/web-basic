'use strict';

var Topic = require('./topic');

function FillInBlankTopic(type,name,question,options,score,answer){
    Topic.call(this,"fill_in_blank",name,question,options,score,answer);
}

FillInBlankTopic.prototype = Object.create(Topic.prototype);
FillInBlankTopic.prototype.constructor = FillInBlankTopic;

FillInBlankTopic.prototype.mark = function(){};

module.exports = FillInBlankTopic;