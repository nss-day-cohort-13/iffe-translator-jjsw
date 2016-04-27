var wordBank = (function(origObj) {
	console.log("Inside wordBank france", typeof(origObj));

	var frenchTrans = [];
	var frenchWords = {
		"happy":"bonne",
		"new":"nouvelle",
		"year":"année"};

	origObj.getFrench = function(item) {
    console.log("French, item = ", item);

		//if(item) {
//      return origObj.FrenchWords[item];
      console.log("frenchWords[item] = ", frenchWords[item]);
      return frenchWords[item];
	//	}
	//	return "VOID";
	};

	return origObj;

})(wordBank);

