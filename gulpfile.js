const gulp = require('gulp');
const postcss = require('gulp-postcss');
const less = require('gulp-less');
const  autoprefixer = require('autoprefixer-core');
const precss = require('precss')
const cssnext = require('postcss-cssnext')
const rename = require('gulp-rename')
const Autoprefixer = require('gulp-autoprefixer');
/*
 * 使用postcss编译css
 */
gulp.task('less', function() {
    gulp.src('./less/*.less') //该任务针对的文件，*代表所有文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./css')); //将会在css目录下生成.css文件
});

gulp.task('postcss', () => {
  var processors = [
        autoprefixer({
            browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 10"]
        })];

  return gulp.src(['./less/*.+(css|styl|stylus|less|sass|scss)'])
    .pipe(postcss([
      precss(),
      cssnext({
        warnForDuplicates: false
      })
    ]))
    // .pipe(sourcemaps.init())
    // .pipe(postcss(processors))
    // .pipe(sourcemaps.write("."))
    .pipe(rename({extname: '.css'}))
    .pipe(gulp.dest('./css'))
})

gulp.task('testAutoFx', function () {
    gulp.src('./css/*.css')
        .pipe(Autoprefixer({
            browsers: ['last 2 versions'], //主流浏览器的最新两个版本
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./css'));
});
gulp.task('default', function(){
    gulp.run('postcss');// 表示运行对应的任务

    // 监听文件变化，若有改动则执行以下三个任务
    // gulp.watch('./js/*.js', function(){
    //     gulp.run('postcss', 'csslint', 'jslint', 'testCssmin', 'scripts');
    // });
});