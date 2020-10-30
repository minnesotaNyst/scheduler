//GLOBAL VARIABLES
var cTime = moment();
var eCounter = 1;

//----COLOR CODE THE TIME OF DAY (PAST, PRESENT, FUTURE)----//
for (i = 8; i < 18; i++) {
	var tEntry = '#text-entry' + eCounter;
	var hour = cTime.hour();
	if (i < hour) {
		$(tEntry).addClass('past');
	} else if (i > hour) {
		$(tEntry).addClass('future');
	} else {
		$(tEntry).addClass('present');
	}
	eCounter++;
}

//---SAVE THE TEXT ENTRY TO LOCAL STORAGE----//
$('button').click(function () {
	tArea = $(this).siblings('textarea').val();
	wDay = $(this).siblings('textarea').attr('id');

	localStorage.setItem(wDay, tArea);
});

//----LOAD THE PAGE----//

var onLoad = function (list) {
	//grab the current time
	$('#currentDay').text(
		cTime.format('dddd') + ', ' + cTime.format('MMM Do YYYY')
	);
	//create a loop to grab from local storage and display in the document
	for (x = 1; x < 11; x++) {
		$('text-entry' + x).val(localStorage.getItem('text-entry' + x));
	}
};

onLoad();
