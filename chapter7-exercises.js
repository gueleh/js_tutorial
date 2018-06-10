// Adds a blank method to String to test for empty strings or strings consisting only of whitespace
String.prototype.blank = function() {
	if (!!this.length == false || !!this.match(/^\s+$/g) == true) {
		return true;
	} else {
		return false;
	}
}

// Return last element of an array, without changing it
Array.prototype.last = function() {
	let temp = this.pop(-1);
	this.push(temp);
	return temp;
}