var gulp = require('gulp');
var execsql = require('execsql');
var dbConfig = require('./config/database');

gulp.task('init', function() {
  var connection = execsql.config(dbConfig);

  connection.execFile('./seeds/topics.sql', function(err, results) {
    if (err) {
      console.log(err);
    }

    console.log(results);

    connection.end();
  });

});
