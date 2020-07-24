function scrollHandler () {
	console.log($(window).scrollTop());
	//	브라우저 스크롤 현재 위치
	console.log($('.about').position().top);
	// about 섹션 위치

	if ($(window).scrollTop() >= $('.about').position().top) {
		$('.menu-right button').css('color','#4a4a4a');
	} else {
		$('.menu-right button').css('color','white');
	}

	$('section').each(function(){
		if ($(window).scrollTop() >= $(this).position().top) {
			$(this).find('.vertical-center').animate({top : '0', opacity : '1'},800);
		}
	});
}

$(window).on('scroll',scrollHandler);
scrollHandler();

$('.menu-right button').on('click',function(){
	var id = $(this).attr('id');

	if (id == "about-btn") {
		$('html, body').animate({scrollTop : $('.about').position().top},1000);
	} else if (id == "contact-btn"){
		$('html, body').animate({scrollTop : $('.contact').position().top},1000);
	}
})

$('.skill').each(function(){
	var skill = $(this);
	var percentage = skill.find('.percentage').text()
	skill.find('.inner-bar').animate({width : percentage},1200);
})