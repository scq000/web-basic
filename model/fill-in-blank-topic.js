'use strict';

var Topic = require('./topic');
var _ = require('lodash');

function FillInBlankTopic(name,question,options,score,answer){
    Topic.call(this,"fill_in_blank",name,question,options,score,answer);
}

FillInBlankTopic.prototype = Object.create(Topic.prototype);
FillInBlankTopic.prototype.constructor = FillInBlankTopic;

FillInBlankTopic.prototype.mark = function(){
    var userAnswer = this.value instanceof Array ? this.value : new Array(this.value);
    return _.intersection(this.answer,userAnswer).length * this.score;
};

module.exports = FillInBlankTopic;