'use strict';

function Topic(type,name,question,options,score,answer){
    this.type = type;
    this.name = name;
    this.question = question;
    this.options = options;
    this.score = score;
    this.answer = answer;
    this.value = '';
}

Topic.prototype.mark = function(){};

module.exports = Topic;