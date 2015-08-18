var gulp = require('gulp');
var execsql = require('execsql');
var dbConfig = require('./config/database');
var exec = require('gulp-exec');

gulp.task('init', function() {
  var connection = execsql.config(dbConfig);

  connection.execFile('./seeds/topics.sql', function(err, results) {
    if (err) {
      console.log(err);
    }
    console.log('数据库初始化成功!');
    
    connection.end();
  });

});


gulp.task('start', function() {
  gulp.src('').pipe(exec('npm start'))
  .pipe(exec.reporter({err:true,stderr:true,stdout:true}));
});
