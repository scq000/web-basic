'use strict';

var _ = require('lodash');

function FormHelper(formData){
  this.formData = formData;
};

FormHelper.prototype.setUserInputs = function(topics){
    console.log(topics);
    for(var name in this.formData) {
        if(name === 'grade' || name === 'studentId' || name === 'studentName') {
            continue;
        }
        console.log(this.formData);
        _.find(topics,{'name': name}).setValue(this.formData[name]);
    }
};

module.exports = FormHelper;

