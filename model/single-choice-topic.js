'use strict';

var Topic = require('./topic');

function SingleChoiceTopic(name,question,options,score,answer){
    Topic.call(this,"single_choice",name,question,options,score,answer);
}

SingleChoiceTopic.prototype = Object.create(Topic.prototype);
SingleChoiceTopic.prototype.constructor = SingleChoiceTopic;

SingleChoiceTopic.prototype.mark = function(){};

module.exports = SingleChoiceTopic;