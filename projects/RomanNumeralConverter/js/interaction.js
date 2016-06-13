// Text input fields for number and roman numeral input.
var numberInput = $("#input-number");
var numeralInput = $("#input-numeral");

// When a number is entered, automatically convert into Roman Numerals
// and populate the numeral text input.
numberInput.on("keyup change", function() {
	var value = $(this).val();
	numeralInput.val(convertInteger2Roman(value));
});

// When a Roman Numeral is entered, automatically convert into numbers
// and populate the number text input.
numeralInput.on("keyup change", function() {
	var value = $(this).val().toUpperCase();
	numberInput.val(convertRoman2Integer(value));
});