function jQueryValidatorWrapper(formId, rules, messages) {
    // hook up the form, the validation rules, and messages with jQuery validate.
    var validator = $("#" + formId).validate({
        onchange: true,
        rules: rules,
        messages: messages,
        errorPlacement: function(error, element) {
    	    if ( element.is( ':radio' ) || element.is( ':checkbox' ) )
    	    	error.appendTo( element.parent().parent() );
    	    else
    	    	error.insertAfter( element );
    	}
    });

    // This is the function to call whem make the validation
    this.validate = function () {
        var result = validator.form();
        return result;
    };
}
