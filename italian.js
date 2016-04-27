function italyInit() {
	// console.log("wordBank = ", wordBank);
	var wordBank = (function(origObj) {
		console.log("Inside wordBank italy", typeof(origObj));
		var italianWords = {
			"happy":"felice",
			"new":"nuovo",
			"year":"anno"};

		origObj.getItalian = function(item) {
			// return origObj.italianWords[item];
			if(item) {
				return origObj.italianWords[item];
			}
			return "VOID";
		};

		return origObj;

	})(wordBank);
}