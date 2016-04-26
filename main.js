
// create variables in which to store input info
var userInput = document.getElementById("input-field");

var selectedLanguage = document.getElementById("selected-language");

var translateButton = document.getElementById("translate-button");

var outputDisplay = document.getElementById("ouput-display");

// choose the language
if (selectedLanguage.value === "Italian") {

	var getLanguage = wordBank.getItalian;

} else if (selectedLanguage.value === "German") {

	var getLanguage = wordBank.getGerman;

} else if (selectedLanguage.value === "French") {

	var getLanguage = wordBank.getFrench;

} else {

	var getLanguage = wordBank.getIcelandic;

};

// take user input string and make it an array
var userArray = userInput.value.split(" ");

// create processing function
function wordCheck(element) {

	if (getLanguage(element)){ // if he element is found
		return element;
	} else 
	{
	 	return;
	}
}

// process each word in the array and compare it against the wordbank dictionary for the specified language

userArray.filter(wordCheck())

