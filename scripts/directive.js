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