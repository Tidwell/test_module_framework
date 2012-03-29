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
        var regEx = new RegExp(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/)
        els.each(function() {
            var el = $(this);
            if (!regEx.exec(el.val())) {
                alert('invalid email')
            }
        })
    }


    //Register the widget with the BI object
    BI.validation.addValidator('email', email);
})(jQuery,BI);