//引用gulp导入工具包（node-modules里对应的模块）
var gulp = require('gulp');
//sass插件文件
// var sass = require('gulp-sass');

//合并插件
/* var concat = require('gulp-concat');
//引入gulp-uglify压缩插件
var uglify = require("gulp-uglify");
//引入gulp-rename重命名插件
var rename = require("gulp-rename"); */

gulp.task("copy-index",function () {
    //复制文件
    //gulp.src("index.html").pipe(gulp.dest("dist"));
    gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\html"));
});
/* 
gulp.task('copy-scss', function(){
    gulp.src('sass/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\css'));
});

gulp.task('copy-jpg', function(){
    gulp.src('imgs/*.jpg')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\imgs'));
});

gulp.task('copy-js', function(){
    gulp.src('js/*.js')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\js'));
});  */

//合并压缩重命名文件
/* gulp.task('concatuglify', function(){
    gulp.src(['js/index.js', 'js/goods.js'])
        .pipe(concat('concat.js'))         //将上面两个文件合并成一个
        .pipe(gulp.dest('js'))            //合并后要发送的地址
        .pipe(uglify())                  //压缩
        .pipe(rename("concat.min.js"))   //压缩后重命名
        .pipe(gulp.dest('js'));         //压缩后要发布的地址        
}) */

gulp.task('watch', function(){
    gulp.watch('*.html', ['copy-index']);
  /*   gulp.watch('sass/*.scss', ['copy-scss']);
    gulp.watch('imgs/*.jpg', ['copy-jpg']);
    gulp.watch('js/*.js', ['copy-js']); */
    // gulp.watch(['js/index.js','js/goods.js'],['concatuglify']);
})