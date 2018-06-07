let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
let website = "https://usofa.com/";

// Returns a URL-friendly version of a string.
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}


// map: Imperative version
function imperativeMap(states) {
	let urlStates = [];
	states.forEach(function(state) {
		urlStates.push(urlify(state));
	});
	return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
	return states.map(state => urlify(state));
}
console.log(functionalMap(states));

function functionalURLs(states) {
	return states.map(state => website + urlify(state));
}
console.log(functionalURLs(states));