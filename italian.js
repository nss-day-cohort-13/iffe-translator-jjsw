
var wordBank = (function(origObj) {

	var italianWords = {
		"happy":"felice",
		"new":"nuovo",
		"year":"anno"};

	origObj.getItalian = function(item) {
		// go through each word in the dictionary and compare it against the current word.
		for (key in italianWords) { 

			if (key === item) {
				return italianWords[item];
			}
		}
		// if the item is not found, return false
		return false;
	};

	return origObj;

})(wordBank);

