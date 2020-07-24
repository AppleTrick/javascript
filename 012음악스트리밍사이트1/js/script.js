function scrollHandler(){
	var windowBottom = $(window).scrollTop() + $(window).height();

	// var playlists = $('.playlist');

	// for (var i = 0; i < playlists.length; i++) {
	// 	var playlist = $(playlists [i]);
	// 	var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

	// 	if (playlistHalf < windowBottom) {
	// 		playlist.animate({'opacity' : 1},1500);
	// 	}
	// }

	$('.playlist').each(function(){
		var playlist = $(this);
		var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

		if (playlistHalf < windowBottom) {
			playlist.animate({'opacity' : 1},1500);
		}
		
	});

	console.log(windowBottom);
	console.log($(document).height());

	if(windowBottom == $(document).height()){
		$('.to-top-btn').fadeIn();
	}else{
		$('.to-top-btn').fadeOut();
	}
}


$(window).on('scroll',scrollHandler);

$('.to-top-btn').on('click',function(){
	$('html, body').animate({scrollTop : 0},1000);
});

scrollHandler();


