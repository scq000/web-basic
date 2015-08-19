var gulp = require('gulp');
var execsql = require('execsql');
var dbConfig = require('./config/database');
var nodemon = require('gulp-nodemon');


gulp.task('init', function() {
  var connection = execsql.config(dbConfig);

  connection.execFile('./seeds/topics.sql', function(err, results) {
    if (err) {
      throw err;
    }

    connection.end();
    console.log('数据库初始化成功!');
  });

});

gulp.task('start', function() {
  nodemon({
      script: 'app.js',
      ext: 'ejs js sql json',
      ignore: ['public/*']
    })
    .on('restart', function() {
      console.log('restarted!');
    });

});
