
// create variables in which to store input info
var userInput = document.getElementById("input-field");

var selectedLanguage = document.getElementById("select-language");

var translateButton = document.getElementById("translate-button");

var outputDisplay = document.getElementById("ouput-display");

var outPutString = '';

// define the main iife
var wordBank = (function() { return {};})();

// choose the language
function setup() {

	if (selectedLanguage.value === "Italian") {

		var getLanguage = wordBank.getItalian;
		console.log("after italian selected getLanguage = ", getLanguage);
		italyInit;

	} else if (selectedLanguage.value === "German") {

		var getLanguage = wordBank.getGerman;

	} else if (selectedLanguage.value === "French") {

		var getLanguage = wordBank.getFrench;

	} else if (selectedLanguage.value === "Icelandic") {

		var getLanguage = wordBank.getIcelandic;

	};

	// take user input string and make it an array
	var userArray = userInput.value.split(" ");
	// console.log("userArray", userArray);

	// create processing function
	function wordCheck(element) {

		console.log("inside wordCheck. wordBank = ", wordBank);
		console.log("element = ", element);
		// console.log("getLanguage = ", typeof(getLanguage));

		// if (getLanguage(element)){ // if the element is found
		italyInit();
		if(wordBank.getItalian(element)) {
			console.log("This is working as a non-function", getLanguage);
			return element;
		} else {
		 	return;
		}
	}

	// create translating function
	function translate(element, index, array) {

		outPutString = getLanguage[element] + " ";

		// if this is the last time through the array
		if (index === array.length -1){
			console.log("outPutString", outPutString)
			return outPutString;
		}
		else{
			return;
		}
	}

// process each word in the array and compare it against the wordbank dictionary for the specified language
console.log("Output", userArray.filter(wordCheck).forEach(translate));

}

