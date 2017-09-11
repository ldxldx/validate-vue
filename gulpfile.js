var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
/**
 * 编译html文件，对模块文件进行替换
 */
gulp.task('fileinclude', function () {
    gulp.src(['./src/html_tpl/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/html/'));
});

gulp.task('default', ['fileinclude'], function () {
    gulp.watch('./src/html_tpl/**/*.html', ['fileinclude']);
});

/**
 * 发布
 */
gulp.task('winSend', function () {
    var svn_url = "C:/files/zhaoyl/zyl-mobile-res/src/activity/webAppAuth";
    gulp.src('./dist/**/*')
        .pipe(gulp.dest(svn_url + '/dist/'));
});