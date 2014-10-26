'use strict';
// Generated on 2014-04-12 using generator-gulp-webapp 0.0.6

var gulp = require('gulp');
var open = require('open');
var wiredep = require('wiredep').stream;

// Load plugins
var $ = require('gulp-load-plugins')();


// Styles
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.rubySass({
          style: 'expanded',
          loadPath: ['app/bower_components']
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/styles'))
        .pipe($.size());
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('default'))
        .pipe($.size());
});

// HTML
gulp.task('html', ['styles', 'scripts'], function () {
    var assets = $.useref.assets();
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

// Images
gulp.task('svg', function () {
  return gulp.src('app/images/*.svg')
             .pipe($.svgmin())
             .pipe($.svgstore({ fileName: 'icons.svg' }))
             .pipe(gulp.dest('dist/images'))
});
gulp.task('svg', function () {
    var svgs = gulp.src('app/images/*.svg')
        .pipe($.svgstore({ inlineSvg: true }))
    function fileContents (filePath, file) {
        return file.contents.toString('utf8')
    }
    return gulp
        .src('app/index.html')
        .pipe($.inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('svgtest/'))
});
gulp.task('images', ['svg'], function () {
    return gulp.src(['app/images/**/*', '!app/images/*.svg'])
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter([
            '**/*.eot',
            '**/*.svg',
            '**/*.ttf',
            '**/*.woff'
        ]))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images', 'dist/fonts'], { read: false }).pipe($.clean());
});

// Build
gulp.task('build', ['html', 'images', 'fonts']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

// Connect
gulp.task('connect', function () {
  $.connect.server({
    root: ['app'],
    port: 9000,
    livereload: true
  });
});

// Open
gulp.task('serve', ['connect', 'watch'], function() {
  open("http://localhost:9000");
});

// Inject Bower components
gulp.task('wiredep', function () {
    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/bower_components/'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/'
        }))
        .pipe(gulp.dest('app'));
});

// Watch
gulp.task('watch', function () {
    // Watch for changes in `app` folder
    gulp.watch([
        'app/*.html',
        'app/styles/**/*.scss',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ], function (event) {
        return gulp.src(event.path)
            .pipe($.connect.reload());
    });

    // Watch .scss files
    gulp.watch('app/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch bower files
    gulp.watch('bower.json', ['wiredep']);
});

var deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
    gulp.src("./dist/**/*")
        .pipe(deploy('https://github.com/Sinetheta/piechnik.ca.git', 'origin'));
});
