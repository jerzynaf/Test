/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    print = require('gulp-print'),
     sass = require('gulp-sass'),
    concat = require("gulp-concat");


var paths = {};

gulp.task('default', function () {
    // place code for your default task here
});

paths.DatabaseScriptsBase = "./../HP.Database.Scripts/Release0001/";
paths.DatabaseScriptsSource = paths.DatabaseScriptsBase + "Source/";
paths.DatabaseWatchPath = paths.DatabaseScriptsSource + "**/*.sql";
paths.DatabaseScriptsWorkingArea = paths.DatabaseScriptsBase + "AggregatedScripts/WorkingArea/";
paths.DatabaseScriptsOutput = paths.DatabaseScriptsBase + "AggregatedScripts/";

paths.SassWatchPath = "Sass/**/*.scss";
paths.SassSource = "Sass/cvl.scss";
paths.SassDest = "css/";

gulp.task('sass:watch', function () {
    gulp.watch(paths.SassWatchPath, ['sass:aggregate']);
});

gulp.task('sass:aggregate', function () {
    gulp.src(paths.SassSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.SassDest));
});

gulp.task('database:watch', function () {
    gulp.watch(paths.DatabaseWatchPath, ['database:aggregate']);
});

gulp.task('database:aggregate', function () {

    console.log("Base:" + paths.DatabaseScriptsSource);

    var clearSource = paths.DatabaseScriptsSource + '01.Cleardown/*.*';
    var tableSource = paths.DatabaseScriptsSource + '02.Tables/*.*';
    var viewSource = paths.DatabaseScriptsSource + '03.Views/*.*';
    var procSource = paths.DatabaseScriptsSource + '04.Programatic/*.*';
    var dataSource = paths.DatabaseScriptsSource + '05.Data/*.*';

    gulp.src([clearSource])
      .pipe(concat('01 - clear.sql'))
      .pipe(gulp.dest(paths.DatabaseScriptsWorkingArea));

    gulp.src([tableSource])
      .pipe(concat('02 - table.sql'))
      .pipe(gulp.dest(paths.DatabaseScriptsWorkingArea));

    gulp.src([viewSource])
      .pipe(concat('03 - views.sql'))
      .pipe(gulp.dest(paths.DatabaseScriptsWorkingArea));

    gulp.src([procSource])
      .pipe(concat('04 - programatic.sql'))
      .pipe(gulp.dest(paths.DatabaseScriptsWorkingArea));

    gulp.src([dataSource])
      .pipe(concat('05 - data.sql'))
      .pipe(gulp.dest(paths.DatabaseScriptsWorkingArea));

    gulp.src(
       [
           paths.DatabaseScriptsWorkingArea + '01 - clear.sql',
           paths.DatabaseScriptsWorkingArea + '02 - table.sql',
           paths.DatabaseScriptsWorkingArea + '03 - view.sql',
           paths.DatabaseScriptsWorkingArea + '04 - programatic.sql',
           paths.DatabaseScriptsWorkingArea + '05 - data.sql'
       ])
      .pipe(concat('allSql.sql'))
      .pipe(gulp.dest(paths.DatabaseScriptsOutput));
});
