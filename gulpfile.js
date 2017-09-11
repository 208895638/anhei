var gulp = require('gulp');
var sass = require('gulp-sass');
var imgmin = require("gulp-imagemin");//压缩img
var jsmin = require("gulp-uglify");//压缩js
var yasuocss = require("gulp-minify-css");//压缩css
var concat = require('gulp-concat');//- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');//- 压缩CSS为一行； 
var rev = require('gulp-rev');//- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//- 路径替换
var imgSrc = 'img/*';
var imgDest = 'images';
var jsold = "jss/**/*.js";
var jsnew = "js";
//压缩图片
gulp.task('imgmin',function(){
  gulp.src(imgSrc)
  .pipe(imgmin())
  .pipe(gulp.dest(imgDest));
});
//压缩js
gulp.task('jsmin',function(){
  gulp.src(jsold)
  .pipe(jsmin())
  .pipe(gulp.dest(jsnew));
});
//压缩css
gulp.task("yasuocss",function(){
	gulp.src("csss/*")
	.pipe(yasuocss())
	.pipe(gulp.dest("css"));
});
gulp.task('sass',function() {
	return gulp.src('sass/*.*').pipe(sass()).pipe(gulp.dest('css'));
});
gulp.task('default',['sass','watch']);
gulp.task('watch',function(){
	return gulp.watch('sass/*.*',['sass']);
});