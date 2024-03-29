/*
    VALIDATOR EMAIL

    Validator implimentation.  
    Validators require a name and a method to regiser with addValidator
    
    When a corresponding data-validate="NAME" is found in the markup,
    the validator module will automatically call the corresponding validator
    function passing the element(s)

    Dependancy: base.js, validators.js
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

    //Register the validator
    BI.validation.addValidator('email', email);
})(jQuery,BI);