var wordBank = (function(origArray) {
	var translated = [];
	var italianWords = {
		"happy":"felice",
		"new":"nuovo",
		"year":"anno"
	};
	origArray.getItalian = function(item){
		return origArray.italianWords[item];
	};
})(wordBank);
