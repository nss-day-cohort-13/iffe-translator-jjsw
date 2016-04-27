var wordBank = (function(origObj) {
	console.log("Inside wordBank germany", typeof(origObj));

	var germanWords = {
		"happy": "frohes",
		"new": "neues",
		"year": "jahr"
	};

	origObj.getGerman = function(item) {
		for (key in germanWords) {
			if (key === item) {
				// console.log("test", germanWords[item]);
				return germanWords[item];
			}
		}
		return false;
	}
	return origObj;
})(wordBank);
