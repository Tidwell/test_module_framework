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

    if (window.BI) {
        throw new Error('BI already exists on window.')
    } else {
        //define the methods we want to expose on BI
        //and add them to the window object
        window.BI = {
            addModule: addModule
        };
    }

})($, window);