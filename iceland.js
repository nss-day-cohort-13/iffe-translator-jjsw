var wordBank = (function(origObj) {
	var icelandicWords = {

		"happy":"hamingjusamur",
		"new":"ný",
		"year":"ári"
		"merry" : "Gleðileg",
		"christmas" : "jól",
		"hannukah" : "hannukah",
		"holidays" : "frí",
		"thanksgiving" : "þakkargjörð",
		"birthday" : "afmæli",
		"the" : "sem",
		"and" : "og",
		"of" : "af",
		"season" : "árstíð",
		"good" : "gott",
		"tidings" : "tíðindi",
		"festivus" : "festivus",
		"for" : "fyrir",
		"a" : "a",
		"rest" : "hvíld",
		"us" : "okkur",
		"congratulations" : "til hamingju",
		"graduation" : "útskrift"};

	origObj.getIcelandic = function(item) {

		// return origObj.italianWords[item];
		// console.log("inside of getItalian fuction. Item = ", item);
		// console.log("item = ", item);

		// go through each word in the dictionary and compare it against the current word.
		for (key in icelandicWords) {
			// console.log(italianWords[key]);
			if (key === item) {
				// console.log("Key found key ===", key)
				// console.log("item = ", item);
				console.log("test", icelandicWords[item]);
				return icelandicWords[item];
			}
		}
		// if the item is not found, return false
		return false;
	};

	return origObj;

})(wordBank);
