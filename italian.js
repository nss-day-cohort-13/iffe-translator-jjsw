
var wordBank = (function(origObj) {
	console.log("Inside wordBank italy", typeof(origObj));
	var italianWords = {
		"happy":"felice",
		"new":"nuovo",
		"year":"anno"};

	origObj.getItalian = function(item) {
		// return origObj.italianWords[item];
		// console.log("inside of getItalian fuction. Item = ", item);
		// console.log("item = ", item);

		// go through each word in the dictionary and compare it against the current word.
		for (key in italianWords) { 
			// console.log(italianWords[key]);
			if (key === item) {
				// console.log("Key found key ===", key)
				// console.log("item = ", item);
				console.log("test", italianWords[item]);
				return italianWords[item];
			}
		}
		// if the item is not found, return false
		return false;
	};

	return origObj;

})(wordBank);

