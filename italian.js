var wordBank = (function(origObj) {
	var italianWords = {
		"happy":"felice",
		"new":"nuovo",
		"year":"anno"};

	origObj.getItalian = function(item) {
		return origObj.italianWords[item];
	};

	return origObj;

})(wordBank);
