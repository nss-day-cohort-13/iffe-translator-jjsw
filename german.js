var wordBank = (function(origObj) {
	console.log("Inside wordBank germany", typeof(origObj));

	var germanWords = {
		"happy": "frohes",
		"new": "neues",
		"year": "jahr",
		"merry" : "Fröhliche",
		"christmas" : "Weihnachten",
		"hannukah" : "hannukah",
		"holidays" : "ferien",
		"thanksgiving" : "Danksagung",
		"birthday" : "Geburtstag",
		"the" : "der",
		"and" : "und",
		"of" : "von",
		"season" : "jahreszeit",
		"good" : "gute",
		"tidings" : "Nachrichten",
		"festivus" : "festivus",
		"for" : "für",
		"a" : "ein",
		"rest" : "rest",
		"us" : "uns",
		"congratulations" : "Herzliche Glückwünsche",
		"graduation" : "Graduierung"
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
