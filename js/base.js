/*
    Define our global variable (and only entry point
    Provides utility methods for adding features to itself

    This is a singleton defined using the Revealing Module Pattern
*/

(function($, window, undefined) {
    var exposed;

    //takes a key (string) and an object to add to the
    //BI global as a module
    var addModule = function(name, obj) {
        if (exposed.hasOwnProperty(name)) {
            throw new Error('Module "'+name+'" already exists on global BI'); 
        }
        else {
            exposed[name] = obj;
        }
    }

    //define the methods we want to expose on BI
    exposed = {
        addModule: addModule
    }
    //add them to the window
    if (window.BI) {
        throw new Error('BI already exists on window.')
    } else {
        window.BI = exposed;
    }

})($, window);