import SlideNav from './modules/slide.js';

 const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');



$('.menu-nav a[href^="#"]').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		menuHeight = $('.menu').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});


$('.topo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});


$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});