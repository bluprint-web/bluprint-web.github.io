var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync").create();
var plumber = require("gulp-plumber");

var reload = browser.reload;



gulp.task('sass', function() {
    gulp.src('assets/stylesheets/sass/**/*.scss')
    	.pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/stylesheets/css'))
        .pipe(browser.stream());
});


gulp.task('default', function(){
	browser.init({
        server: {
            proxy: "127.0.0.1:4000"
        }
    });
    gulp.watch('assets/stylesheets/sass/**/*.scss', ['sass']);

});
