/**
 * Created by liuhuizhi on 15/12/3.
 */



var gulp = require('gulp');
var livereload = require('gulp-livereload');


gulp.task('default',function(){
    gulp.src('src/*.js')
        .pipe(gulp.dest('build'))
        //.pipe(livereload)
})


//gulp.task('watch',function(){
//    livereload.listen();
//    gulp.watch('src/*.js');
//})