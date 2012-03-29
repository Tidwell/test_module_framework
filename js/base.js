/*
    Define our global variable (and only entry point
    Provides utility methods for adding features to itself

    This is a singleton defined using the Revealing Module Pattern

    Dependancy: jquery
*/

(function($, window, undefined) {
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

    
    var exposed = {
        addModule: addModule
    }

    if (window.BI) {
        throw new Error('BI already exists on window.')
    } else {
        //define the methods we want to expose on BI
        //and add them to the window object
        window.BI = exposed;
    }
})($, window);