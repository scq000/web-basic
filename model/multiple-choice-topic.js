'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(type,name,question,options,score,answer){
    Topic.call(this,"fill_in_blank",name,question,options,score,answer);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.mark = function(){};

module.exports = MultipleChoiceTopic;