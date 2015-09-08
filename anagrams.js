//replace the dictionary array below with any list of words
var dictionary = [ "ACT", "ANTS", "ART", "BAT", "BAR", "CAT", "DOOR", "RAT", "TAB", "TAR" ];
var masterKey = {};

dictionary.forEach(function(e){
	//sorts each word alphabetically
	var sortedWord = e.split('').sort().join('');
	//checks whether the word being evaluated already exists in the masterKey object as a key (an element that does not exist in the array will return an index value of -1)
	if (masterKey[sortedWord] !== -1){
		var matches = masterKey[sortedWord] || [];
		matches.push(e);
		masterKey[sortedWord] = matches;
	}
});

var anagramList = [];
for (var key in masterKey){
	if (masterKey.hasOwnProperty(key)){
		// only pushes sets to the final list if there are anagram matches
		if (masterKey[key].length > 1){
			anagramList.push(masterKey[key]);
		}
	}
}

//formats the final console.log statement 
anagramList.forEach(function(e){
	var firstKey = e[0];
	e.shift();
	var restOfArray = e.join(', ');
	console.log(firstKey + ": " + restOfArray);
});