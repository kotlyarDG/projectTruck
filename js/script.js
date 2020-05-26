$(document).ready(function(){

	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('_active')
		$('body').toggleClass('_lock')
	});

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}

	ibg();

	

	

	
/*
	$('.filter__btn').click(function(event) {
			var cat = $(this).data('filter');
		event.preventDefault();
		console.log(cat);
		$('.filter__btn.active-filter').removeClass('active-filter')
		$(this).addClass('active-filter')

		if(cat == 1){
			$('.filter__item').show();
		} else {
			$('.filter__item').hide();
			$('.filter__item.f_' + cat).show();
		}


	});

	$('.post__slider').slick({
		slidesToShow: 3,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 1800,
		speed: 1200,

	responsive: [
		{
			breakpoint: 990,

			settings: {
				slidesToShow: 2
			},

			breakpoint: 630,

			settings: {
				slidesToShow: 1,
				autoplay: false,
				variableWidth: true
			}
		}
	]
	});
*/

	$('.lang-link').click(function(event){
		if(!$(this).hasClass('active-lang')){
			$('.lang-link').removeClass('active-lang')
			$(this).addClass('active-lang')
		}
	});

	$(document).on('click', '.main-screen__btn', function() {
	  var linkID = $(this).attr('href');
	  $('html, body').animate({ 
	    scrollTop: $(linkID).offset().top 
	  }, 'slow');
	});

	$('.truck-slider').slick({
		slidesToShow: 1,
		prevArrow: '.prev-ar',
		nextArrow: '.next-ar',

		responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false
				}
			}
		]
	});

});