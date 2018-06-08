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

// Returns a single word string
function singleWord(state) {
	return state.split(/\s+/).length === 1;
}

// Test words
function wordCountTest(state, length) {
	return state.split(/\s+/).length === length;
}

// filter: Imperative version
function imperativeFilter(states) {
	let singleWordStates = [];
	states.forEach(function(state) {
		if (singleWord(state)) {
			singleWordStates.push(state);
		}
	});
	return singleWordStates;
}
console.log(imperativeFilter(states));

// filter: Functional version
function functionalFilter(states) {
//	return states.filter(state => singleWord(state));
	return states.filter(state => wordCountTest(state, 1));
}
console.log(functionalFilter(states));

// filter: Dakota via includes
function functionalDakota1(states) {
	return states.filter(state => state.includes("Dakota"));
}
console.log(functionalDakota1(states));

// filter: Dakota via regex
function functionalTwoWordStates(states) {
	return states.filter(state => wordCountTest(state, 2));
}
console.log(functionalTwoWordStates(states));

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce: Iterative solution
function iterativeSum(array) {
	let total = 0;
	array.forEach(function(n) {
		total += n;
	})
	return total;
}
console.log(iterativeSum(a));

let gesamt = a.reduce((total, n) => { return total += n });
console.log(gesamt);

// reduce: With reduce
function functionalSum(array) {
	return array.reduce((total, n) => { return total += n });
}
console.log(functionalSum(a));