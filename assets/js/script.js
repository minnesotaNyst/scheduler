//GLOBAL VARIABLES
var cTime = moment();
var eCounter = 1;
var tCounter = 8;
var wDay = {
	'8 AM': '',
	'9 AM': '',
	'10 AM': '',
	'11 AM': '',
	'12 PM': '',
	'1 PM': '',
	'2 PM': '',
	'3 PM': '',
	'4 PM': '',
	'5 PM': ''
};

//----DISPLAY THE CURRENT DAY AT THE TOP OF THE CALENDAR----//
$('#currentDay').text(
	cTime.format('dddd') + ', ' + cTime.format('MMM Do YYYY')
); /* could add " ,hh:ss:mm a" */

//----COLOR CODE THE TIME OF DAY (PAST, PRESENT, FUTURE)----//
for (var property in wDay) {
	var tEntry = '#text-entry' + eCounter;
	var hour = cTime.hour();
	if (tCounter < hour) {
		$(tEntry).addClass('past');
	} else if (tCounter > hour) {
		$(tEntry).addClass('future');
	} else {
		$(tEntry).addClass('present');
	}
	tCounter++;
	eCounter++;
}
