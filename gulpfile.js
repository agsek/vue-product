/*!
 * gulp
 * $ npm install gulp gulp-sass gulp-autoprefixer gulp-cssnano gulp-rename gulp-notify del gulp-concat gulp-uglify --save-dev
 */
// Load plugins
var gulp = require('gulp'), // gulp main module
    sass = require('gulp-sass'), // compiles sass
    autoprefixer = require('gulp-autoprefixer'), // adds prefixes to CSS
    cssnano = require('gulp-cssnano'), // minifies CSS
    rename = require('gulp-rename'), // renames temp CSS and JS files
    notify = require('gulp-notify'), // notifies on results
    del = require('del'), // deletes files
    concat = require('gulp-concat'), // adds files and creates one huge file either CSS or JS
    uglify = require('gulp-uglify'), // minifies JS
    kss = require('kss'), // generates styleguide

    // Paths
    pathToStyles = './src/styles/',
    pathToScripts = './src/scripts/',
    pathToBin = './bin/',
    pathToBinStyles = pathToBin + 'styles',
    pathToBinScripts = pathToBin + 'scripts';

// Styles
gulp.task('styles', function () {
    gulp.src(pathToStyles + 'main.scss')
        .pipe(
            sass({
                errLogToConsole: true,
                outputStyle: 'compressed',
                precision: 10
            })
            .on('error', notify.onError(function (error) {
                return 'Error spotted! ' + error
            }))
        )
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(pathToBinStyles))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(pathToBinStyles))
});

// Styleguide
gulp.task('styleguide', function () {
    return kss({
        title: 'Title of the Style Guide',
        source: 'src/styles/',
        destination: 'bin/kss/',
        builder: 'node_modules/michelangelo/kss_styleguide/custom-template/',
        css: [
            '../styles/main.min.css'
        ],
        homepage: 'homepage.md'
    });
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src(pathToScripts + '**/*.js')
        .pipe(concat('main.js')
            .on('error', notify.onError(function (error) {
                return 'Error spotted! ' + error
            })))
        .pipe(gulp.dest(pathToBinScripts))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify()
            .on('error', notify.onError(function (error) {
                return 'Error spotted! ' + error
            })))
        .pipe(gulp.dest(pathToBinScripts))
});

// Clean build
gulp.task('clean', function () {
    return del(
        [
            pathToBinStyles,
            pathToBinScripts
        ],
        {
            force: true
        })
});

// Default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts', 'styleguide')
});

// Watch
gulp.task('watch', function () {
    // Watch .scss files
    gulp.watch(pathToStyles + '/**/*.scss', ['styles', 'styleguide'])
    gulp.watch(pathToScripts + '/**/*.js', ['scripts'])
});
