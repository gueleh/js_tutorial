// Returns the day of the week for the given date.
function dayOfTheWeek(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[date.getDay()];
}