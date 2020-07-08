jQuery.extend(jQuery.validator.messages, {
    required: "To pole jest wymagane.",
    digits: "Proszę wpisać tylko cyfry.",
    email: "Proszę podać poprawny adres email.",
    insuranceReason: "Proszę zaznaczyć conajmniej jeden tytuł ubezpieczenia"
});

$.validator.setDefaults({

errorElement: 'div',
errorClass: 'invalid-feedback',

highlight: function(element){
    $(element)
    .addClass('is-invalid')
},

unhighlight: function(element){
    $(element)
    .removeClass('is-invalid')
    .addClass('is-valid')
},

errorPlacement: function (error, element) {
    if (element.next().is("small")){
        error.insertAfter(element.next());
    } else if(element.is(':radio') || element.is(':checkbox')){
        error.appendTo(element.parents('.check-container'));
    } else{
        error.insertAfter(element);
    }
}

});

$.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/i.test(value);
  }, "Proszę wpisać tylko dozwolone znaki.");

$.validator.addMethod("numLetter", function(value, element) {
    return this.optional(element) || /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ1-9 ]+$/i.test(value);
  }, "Proszę wpisać tylko dozwolone znaki.");

$.validator.addMethod("digitsSpaces", function(value, element) {
    return this.optional(element) || /^[0-9 ]+$/i.test(value);
  }, "Proszę wpisać tylko dozwolone znaki.");

$.validator.addMethod("exactlength", function(value, element, param) {
    return this.optional(element) || value.replace(/\s/g, "").length == param;
   }, $.validator.format("Proszę wpisać {0} znaków."));

$.validator.addMethod("phoneRegex", function(value, element) {
    return this.optional(element) || /^(\(\d){3}){3}$/i.test(value);
  }, "Proszę podać poprawny numer telefonu.");






  