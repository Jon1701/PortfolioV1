// Ruleset for mapping Arabic integers to Roman Numerals.
var mappingIntToRoman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [1, "I"]
];

// Reverse the ruleset for mapping Arabic integers to Roman Numerals.
//
// New ruleset: Roman Numerals to Arabic integers.
var objRomanToInt = {};
for (var i = 0; i < mappingIntToRoman.length; i++) {
	
	// Get Arabic integer and Roman Numeral.
	var number = mappingIntToRoman[i][0];
	var numeral = mappingIntToRoman[i][1];
	
	// Store the rule into the new ruleset.
	objRomanToInt[numeral] = number;
}

var convertInteger2Roman = function(givenInt) {
	
	// Temporary array to hold the Roman Numerals.
	var buffer = [];
	
	// Given an integer (givenInt), keep subtracting values of 1000, 900, 500, ..., 5, 1
	// from itself.
	// 
	// If a certain value was subtracted, push that value's Roman Numeral into a temporary
	// array. Once done storing, break from the current iteration of the loop (loop which 
	// subtracts 1000, 900, 500, ..., 5, 1) and start over.
	//
	// Keep subtracting those values from itself once per iteration until the givenInt is 
	// finally 0.
	while (givenInt > 0) {
		
		// Go through the ruleset.
		for (var i=0; i < mappingIntToRoman.length; i++) {
			
			// Get the current integer and corresponding roman numeral from the ruleset.
			var currInt = mappingIntToRoman[i][0];
			var romanNum = mappingIntToRoman[i][1];
			
			// If the given integer is 
			if (givenInt >= currInt) {
				
				// Subtract either 1000, 900, 500, ..., 5, or 1 from the given integer.
				givenInt = givenInt - currInt;
				
				// Store the corresponding Roman Numeral of that value which was just subtracted.
				buffer.push(romanNum);
				
				// Do not subtract any more. Restart this process using the updated given integer.
				break;
			}
		}
	}

	// Return the Roman Numeral as a String.
	return buffer.join("");	
}

var convertRoman2Integer = function(givenNumeral) {
	
	// Keep a running sum of the converter Roman Numeral as an integer.
	var runningSum = 0;
	
	// Split the Roman Numeral into an array of tokens.
	//
	// This array contains any of the first 9 Roman Numberal (I, II, ..., IX, X).
	var numeralTokenArray = givenNumeral.split("");
	
	// Convert the array which contains any of the first 9 Roman Numerals into
	// Integers.
	var integerTokenArray = numeralTokenArray.map(function(numeralToken) {
		return objRomanToInt[numeralToken];
	});
	
	for (var i=0; i < integerTokenArray.length; i++) {
		
		// Get the current and next value.
		var currentValue = integerTokenArray[i];
		var nextValue = integerTokenArray[i + 1];
		
		// If the current value is smaller than the next value, then subtract from
		// the running sum.
		//
		// If larger, add current value to the running sum.
		if (currentValue < nextValue) {
			runningSum = runningSum - currentValue;
		} else {
			runningSum = runningSum + currentValue;
		}
	}
	
	// Return the running sum.	
	return runningSum;
	
}