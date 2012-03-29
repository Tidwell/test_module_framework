/*
    MODULE VALIDATORS

    Module providing form validation

    This uses the Revealing Module Pattern

    Dependancy: jquery, base.js
*/

(function($, BI, window, undefined) {
    /* PRIVATE VARS */
    
    //container to store ids of auto-initialized jquery plugins
    var validators = [];
    var initCalled = false;

    /* METHODS */
    
    //iterates over each widget and auto-initiates a jquery plugin
    //based on data-widget attributes in markup
    //@void
    var init = function() {
        validators.forEach(function(obj, index) {
            var id = obj.id;
            var method = obj.method;
            var selector = '*[data-validate="' + id + '"]';
            var elements = $(selector);
            if (elements.length) {
                elements.each(function() {
                    var el = $(this);
                    el.parents('form').submit(function() {
                        method(el); 
                        return false;
                    });
                })
            }
        });
        initCalled = true;
    }

    //registers a validator
    //@string
    var addValidator = function(id,func) {
        if (initCalled) {
            throw new Error('Init was already called, cannot add additional validator')
        }
        validators.push({id: id,method: func});
    }


    /* Expose only the methods we want exposed */
    BI.addModule('validation', {
   		addValidator: addValidator
    });

    //call init on document ready
    $(init);
})(jQuery, BI, window);