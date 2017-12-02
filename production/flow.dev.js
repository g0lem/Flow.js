/**
 *      Flow.js - a portable frontend Model View Controller made in JavaScript
 *
 *      made by: Stefan Serb & Gabriel Apostol
 *      26/11/2017
 *
 */

var frameworkAppDirectiveName = "flw-app";
var app = {
    directives: []
};

/**
 *  The logic of the directives is to be loaded, and execute the functions based on the querySelector in pure JavaScript
 *  the Flow app should be able to load modules as it goes, it will have a basic execute script at the beginning to
 *  load all the basic functionality, but after that it should still be able to get directives and controllers from
 *  the apps that use the framework
 */

//TODO: make this execute as it goes, not once everything is loaded

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        executeFrameworkModules();
    }
};

//Execute everything, once the
var executeFrameworkModules = function () {
    getAllDirectives();
    executeAllDirectives();
};

//Push directives and execute the functions if needed
app.directive = function(name, func){
    app.directives.push({ name: name, func: func});
};

var appDirective = function(){
    var a = document.querySelector('[' + frameworkAppDirectiveName + ']');
    var appName = app.name = a.attributes.getNamedItem(frameworkAppDirectiveName).value;
    console.log(appName);
};

var executeAllDirectives = function(){
    for(var i in app.directives){
        app.directives[i].func();
    }
};


var getAllDirectives = function(){
    app.directive("flw-app", appDirective);
};