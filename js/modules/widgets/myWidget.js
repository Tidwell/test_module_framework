/*
    WIDGET MYWIDGET

    Widget implimentation (a jquery plugin with 
    a call to register with the BI widget handler)

    Right now this sample is using the constructor 
    pattern, there may be a better way to construct this
    for consistancy sake
*/

(function($) {
    function myWidget(el, options) {
        //Defaults:
        this.defaults = {};
        //Extending options:
        this.opts = $.extend({}, this.defaults, options);

        //Privates:
        this.$el = $(el);
    }

    // Separate functionality from object creation
    myWidget.prototype = {
        id: 'myWidget',
        init: function() {
            //WILL BE CALLED IF data-widget="myWidget" is applied to an element
            var self = this;
            self.$el.css('background', 'red');
        },

    };

    // The actual plugin
    $.fn.myWidget = function(options) {
        if (this.length) {
            this.each(function() {
                var rev = new myWidget(this, options);
                rev.init();
                $(this).data('myWidget', rev);
            });
        }
    };
})(jQuery);

//Register the widget with the BI object
BI.widgets.addWidget('myWidget');