'use strict';

var _ = require('lodash');

function HomeViewModelHelper(formData,topics) {
    this.formData = formData;
    this.topics = topics;
};

HomeViewModelHelper.prototype.setUserInputs = function () {
    for (var name in this.formData) {
        if (name === 'grade' || name === 'studentId' || name === 'studentName') {
            continue;
        }

        _.find(this.topics, {'name': name}).setValue(this.formData[name]);
    }
};

HomeViewModelHelper.prototype.getTotalScore = function () {
    var totalScore = 0;

    this.topics.forEach(function (topic) {
        totalScore += topic.mark();
    });

    return totalScore;
};

HomeViewModelHelper.prototype.getStudentInfo = function () {
    return {
        'grade': this.formData.grade,
        'studentId': this.formData.studentId,
        'studentName': this.formData.studentName
    };
};

module.exports = HomeViewModelHelper;

