$('#blue_flag_down').on('click',bluedown);
$('#white_flag_down').on('click',whitedown);
$('#blue_dot_flag_down').on('click',bluedotdown);

function bluedown (){
	$('.blue').addClass('down');
	setTimeout(UpFunction, 1000);
	// $('.blue').not('.dot').addClass('down');
	// 청기만 내리고 싶은 경우 이렇게 사용 하면 된다.
}

function whitedown (){
	$('.white').addClass('down');
	setTimeout(UpFunction, 1000);
}

function bluedotdown (){
	$('.blue.dot').addClass('down');
	setTimeout(UpFunction, 1000);
}

function UpFunction() {
	 $('.flag').removeClass('down');
}