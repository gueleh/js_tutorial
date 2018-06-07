let a = ["ant", "bat", "cat", 42];
a.forEach(function(e) {
	console.log(e);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(char) {
	console.log(char);
});


a.forEach((e) => {
	console.log(e);
});

let b = [78, 5, 92, 1, 56378];
let c = b.sort((a, b) => {
	return a - b;
});

c.forEach((e) => {
	console.log(e);
});