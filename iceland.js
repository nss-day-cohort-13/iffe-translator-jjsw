var wordBank = (function(origObj) {
	var icelandicTrans = []
	var icelandicWords = {

		"happy":"hamingjusamur",
		"new":"ný",
		"year":"ári"};

	origObj.getIcelandic = function(items) {
		// items.forEach(function(items) {
		// 	icelandicTrans.push(icelandicWords[items])
		// });
		return icelandicTrans[items];
	};

	return origObj;

})(wordBank);
