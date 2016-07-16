var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    reload = browserSync.reload,
    header = require('gulp-header'),
    pkg = require('./package.json'),
    banner = ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @author <%= pkg.author %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' */\n\n'
    ].join('\n');

// Angular Bundle
gulp.task('angular', ['delete'], function () {
    var angularLib = './node_modules/angular/angular.js',
        uiRouter = './node_modules/angular-ui-router/release/angular-ui-router.js';

    return gulp.src([angularLib, uiRouter])
        .pipe(concat('angular-libs.min.js'))
        .pipe(uglify())
        .pipe(size({ gzip: true, showFiles: true }))
        .pipe(gulp.dest('./statics/js'));
});

// App Bundle
gulp.task('my-app', function () {
    var appModule = './src/js/modules/*.js',
        appRoutes = './src/js/routes/*.js',
        appController = './src/js/controllers/*.js';

    return gulp.src([appModule, appController, appRoutes])
        .pipe(sourcemaps.init())
        .pipe(concat('app-libs.min.js'))
        .pipe(size({ gzip: true, showFiles: true }))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./statics/js'))
        .pipe(browserSync.stream());
});

// CSS
gulp.task('css', function () {
    var normalize = './node_modules/reset-css/reset.css',
        custom = './src/css/style.css';

    return gulp.src([normalize, custom])
        .pipe(minifyCSS('*'))
        .pipe(concat('all.min.css'))
        .pipe(size({ gzip: true, showFiles: true }))
        .pipe(gulp.dest('./statics/css'));
});

// Delete
gulp.task('delete', function () {
    return del([
        'statics/**/*'
    ]);
});

// Default
gulp.task('default', ['delete', 'angular', 'my-app', 'css', 'browser-sync']);

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['my-app'], reload);
// use default task to launch Browsersync and watch JS files
gulp.task('browser-sync', ['my-app'], function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('./src/js/**/*', ['js-watch']);
    gulp.watch('templates/**/*.html').on('change', reload);
});