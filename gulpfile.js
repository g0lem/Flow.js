var gulp          = require('gulp'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    watch         = require('gulp-watch');



//The list of task names used in the default gulp task

var defaultTaskList = ['minifyFlowWatch'];



//List of glob paths to SOURCE files for piping

var flowFilesPath = ['./scripts/main.js'
                    ,'./scripts/directive.js'
                    ];




//List of glob paths to DESTINATION files for piping

var productionAngularPath = {
    name : 'angular.app.min.js',
    dest : './scripts/'
};

var developmentFlowPath = {
    name : 'flow.dev.js',
    dest : './production/'
};



//Gulp tasks for Development Only

gulp.task('minifyFlowWatch', function() {

  watch(flowFilesPath, function(){

    gulp.src(flowFilesPath)
    .pipe(concat(developmentFlowPath.name))
    .pipe(gulp.dest(developmentFlowPath.dest));

  });

});



//The gulp default task

gulp.task('default', defaultTaskList);