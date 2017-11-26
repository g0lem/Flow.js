/**
 *      Flow.js - a portable frontend Model View Controller made in JavaScript
 *
 *      made by: Serb Stefan & Gabriel Apostol
 *      26/11/2017
 *
 */

var frameworkAppDirectiveName = "flw-app";
var app = {
    directives: []
};

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        executeFrameworkModules();
    }
};


var executeFrameworkModules = function () {
    var a = document.querySelector('[' + frameworkAppDirectiveName + ']');
    var appName = app.name = a.attributes.getNamedItem(frameworkAppDirectiveName).value;
    console.log(appName);
}

app.directive = function(name, func){
    directives.push({ name: name, func: func});
}