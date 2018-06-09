// Reverses a string.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing
	this.processedContent = function() {
		return this.processor(this.content);
	}

	this.palindrome = function() {
		return this.processedContent() === this.processedContent().reverse();
	}

}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns translation processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();
