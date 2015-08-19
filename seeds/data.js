var mysql = require('mysql');
var dbConfig = require('../config/database');
var _ = require('lodash');

var topicsData;

var connection = mysql.createConnection(dbConfig);

connection.connect(function(err) {
  if (err) throw err;
});

connection.query('SELECT * FROM topic;', function(err, rows) {
  if (err) throw err;
  topicsData = rows;
});

connection.query('SELECT value,description,topic_name FROM alternative;', function(err, rows) {
  if (err) throw err;

  _.forEach(topicsData, function(topic) {
    topic.options = [];

    _.forEach(rows, function(option) {
      if (topic.name === option.topic_name) {
        topic.options.push(option);
      }
    });

  });

  connection.end();

  module.exports.topicsData = topicsData;
});
