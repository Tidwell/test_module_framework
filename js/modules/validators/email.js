/*
    VALIDATOR EMAIL

    Widget implimentation (a jquery plugin with 
    a call to register with the BI widget handler)

    Right now this sample is using the constructor 
    pattern, there may be a better way to construct this
    for consistancy sake

    Dependancy: base.js, widgets.js
*/

(function($,BI,undefined) {
    var email = function(els) {
        console.log(els.val())
        BI.events.publish('emailInvalid');
    }

    var emailInvalid = function(el){
        $(el).css('border','red');
    }

    BI.events.subscribe('emailInvalid',emailInvalid);
    //Register the widget with the BI object
    BI.validation.addValidator('email', email);
})(jQuery,BI);



(function($,BI,undefined) {
    var date = function(els) {
        console.log(els.val())
    }
    //Register the widget with the BI object
    BI.validation.addValidator('date', date);
})(jQuery,BI);

