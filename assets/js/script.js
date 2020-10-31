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
//----GET LOCAL STORAGE----//
var checkHistory = function () {
	$('#text-entry1').val(localStorage.getItem('text-entry1'));
	$('#text-entry2').val(localStorage.getItem('text-entry2'));
	$('#text-entry3').val(localStorage.getItem('text-entry3'));
	$('#text-entry4').val(localStorage.getItem('text-entry4'));
	$('#text-entry5').val(localStorage.getItem('text-entry5'));
	$('#text-entry6').val(localStorage.getItem('text-entry6'));
	$('#text-entry7').val(localStorage.getItem('text-entry7'));
	$('#text-entry8').val(localStorage.getItem('text-entry8'));
	$('#text-entry9').val(localStorage.getItem('text-entry9'));
	$('#text-entry10').val(localStorage.getItem('text-entry10'));
};
checkHistory();

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
};
onLoad();
