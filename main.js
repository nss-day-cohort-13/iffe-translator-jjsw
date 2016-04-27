
// create variables in which to store input info
var userInput = document.getElementById("input-field");

var selectedLanguage = document.getElementById("select-language");

var translateButton = document.getElementById("translate-button");

var outputDisplay = document.getElementById("output-display");

var outPutString = '';

var getLanguage;

// define the main iife
var wordBank = (function() { return {};})();

// choose the language
function setup() {

	var outPutString = "";

	if (selectedLanguage.value === "Italian") {

		getLanguage = wordBank.getItalian;

	} else if (selectedLanguage.value === "German") {

		getLanguage = wordBank.getGerman;

	} else if (selectedLanguage.value === "French") {

		getLanguage = wordBank.getFrench;

	} else if (selectedLanguage.value === "Icelandic") {

		getLanguage = wordBank.getIcelandic;

	};

	// take user input string and make it an array
	// userInput = userInput.value.toLowerCase();
	var userArray = userInput.value.split(" ");

	// this function checks
	function wordCheck(element) {

		// if the element is found in the specified language's dictionary, return it
		if (getLanguage(element)) {
			return element;

		// otherwise, throw it away
		} else {
		 	return;
		}
	}

	// Translating function. At this point, each element is a known good word that exists in the dictonary and its just
	// a matter of returning it in the language specified
	function translate(element, index, array) {

		outPutString += getLanguage(element) + " ";

		console.log("element in translate = ", element);

		// if this is the last time through the array
		if (index === array.length -1 || array.length === 1) {
			console.log("outPutString", outPutString);
			return outPutString;
		}
		else{
			return;
		}
	}

outputDisplay.innerHTML = outPutString;
}
