'use strict';

var _ = require('lodash');

function FormHelper(formData){
    this.formData = formData;
};

FormHelper.prototype.setUserInputs = function(topics){
    for(var name in this.formData) {
        if(name === 'grade' || name === 'studentId' || name === 'studentName') {
            continue;
        }
        console.log(this.formData);
        _.find(topics,{'name': name}).setValue(this.formData[name]);
    }
};

FormHelper.prototype.isDateEmpty = function(){
    for(var name in this.formData) {
      return false;
    }

    return true;
};

FormHelper.prototype.getTotalScore = function(topics){
    if(this.isDateEmpty()) {
        return '';
    }
    var totalScore = 0;

    topics.forEach(function(topic) {
        totalScore += topic.mark();
    });

    return totalScore;
};

FormHelper.prototype.getStudentInfo = function () {
    return {
        'grade': this.formData.grade,
        'studentId': this.formData.studentId,
        'studentName': this.formData.studentName
    };
};

module.exports = FormHelper;

