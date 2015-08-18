'use strict';

var TopicFactory = require('../models/topic-factory');

function TopicHelper() {
}

TopicHelper.prototype.getTopics = function (datas) {
    var topics = [];

    var topicFactory = new TopicFactory();
    
    datas.forEach(function(data) {
      topics.push(topicFactory.create(data.type,data));
    });

    return topics;
};


module.exports = TopicHelper;
