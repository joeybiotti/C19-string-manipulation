var userInput = document.getElementById("text-area");
var submitBtn = document.getElementById("submitbtn");
var clearBtn = document.getElementById("clerabtn");
var reverseArea = document.getElementById("output-reverse");
var alphaArea = document.getElementById("output-alpha");
var palidromeArea = document.getElementById("output-palindrome");




function reversal(x) {
	return x.split("").reverse().join("");
};

function alphabits(y) {
	return y.split('').sort().join('');
}

function palindrome(z) {
	 return z == z.split('').reverse().join('');
}

var testString = userInput.value;
reversal(testString);
alphabits(testString);
palindrome(testString);


console.log("reversal", reversal("hello"));
console.log("alphabits", alphabits("edcba"));
console.log("palindrome", palindrome("racecar"));