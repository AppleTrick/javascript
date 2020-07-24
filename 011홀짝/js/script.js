$('#even-btn').on('click',changeColor);
$('#odd-btn').on('click',changeColor);

function changeColor (event) {
	console.log(event);
	if (event.currentTarget.id == 'even-btn') {
		$('.card').each(valname1);
	} else if (event.currentTarget.id == 'odd-btn') {
		$('.card').each(valname2);	
	}
}

function valname1 (){
	var cardValue = $(this).text();

	if (cardValue % 2 == 0) {
		$(this).addClass('selected');
	} else {
		$(this).removeClass('selected');
	}
}


function valname2 (){
	var cardValue = $(this).text();
	if (cardValue % 2 == 1) {
		$(this).addClass('selected');
	} else {
		$(this).removeClass('selected');
	}
}
