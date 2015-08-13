'use strict';

var TopicFactory = require('../model/topic-factory');

function TopicHelper() {
}

TopicHelper.prototype.getTopics = function (data) {
    var topics = [];

    var topicFactory = new TopicFactory();
    for (var type in data) {
        data[type].forEach(function (topicData) {
            topics.push(topicFactory.create(type, topicData));
        });
    }

    return topics;
};


module.exports = TopicHelper;