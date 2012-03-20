/*
    MODULE WIDGETS

    Module providing widget capabilities to the page
    Searches on DOM ready for data-widget attributes, and
    calls the corresponding jquery plugin if it has been registerd
    as a valid widget

    This uses the Revealing Module Pattern
*/

(function($, BI, window, undefined) {
    /* PRIVATE VARS */
    
    //container to store ids of auto-initialized jquery plugins
    var widgets = [];
    var initCalled = false;

    /* METHODS */
    
    //iterates over each widget and auto-initiates a jquery plugin
    //based on data-widget attributes in markup
    //@void
    var init = function() {
        widgets.forEach(function(id, index) {
            var selector = '*[data-widget="' + id + '"]';
            var elements = $(selector);
            if (elements.length) {
                elements[id]();
            }
        });
        initCalled = true;
    }

    //registers a widget
    //@string
    var addWidget = function(id) {
        if (initCalled) {
            throw new Error('Init was already called, cannot add additional widgets')
        }
        widgets.push(id);
    }


    /* Expose only the methods we want exposed */
    BI.addModule('widgets', {
   		addWidget: addWidget
    });

    //call init on document ready
    $(init);
})(jQuery, BI, window);