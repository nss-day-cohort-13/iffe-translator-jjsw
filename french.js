var wordBank = (function(origObj) {
	console.log("Inside wordBank france", typeof(origObj));

	var frenchTrans = [];
	var frenchWords = {
		"happy":"bonne",
		"new":"nouvelle",
		"year":"année",
    "thanksgiving":"action de grâces", 
    "congratulations":"félicitations à vous",
    "merry" : "joyeux",
    "christmas" : "Noël",
    "hannukah" : "Hannukah",
    "holidays" : "vacances",
    "birthday" : "anniversaire",   
    "the" : "la",
    "and" : "et",
    "of" : "de",
    "season" : "saison",
    "good" : "bien",
    "tidings" : "nouvelles",
    "festivus" : "festivus",
    "for" : "pour",
    "a" : "une",
    "rest" : "le repos",
    "us" : "nous",
    "graduation" : "l'obtention du diplôme"
    };

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

