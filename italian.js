var wordBank = (function(origObj) {

	var italianWords = {
		"happy":"felice",
		"new": "nuovo",
		"year": "anno",
		"merry" : "buon",
		"christmas" : "Natale",
		"hannukah" : "Hannukah",
		"holidays" : "vacanze",
		"thanksgiving" : "ringraziamento",
		"birthday" : "compleanno",
		"the" : "il",
		"and" : "e",
		"of" : "di",
		"season" : "stagione",
		"good" : "buona",
		"tidings" : "novella",
		"festivus" : "festivus",
		"for" : "per",
		"a" : "un",
		"rest" : "rest",
		"us" : "noi",
		"congratulations" : "",
		"graduation" : ""
	};

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

