$(function() {

	$('.slider').slick({
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slider/prev-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/slider/next-arrow.svg" alt=""></button>',	
		slidesToShow: 1,
		slidesToScroll: 1,	
		infinite: false,
		fade: true,
		speed: 2000,
		easing: 'ease',
		waitForAnimate: false,	
		asNavFor: '.slider__bottom',

		responsive: [
			{
				breakpoint: 981,
				settings: {
					infinite: true,
					speed: 1000
				}
			},
			{
				breakpoint: 511,
				settings: {
					arrows: false
				}
			}
		]
 })

	$('.slider__bottom').slick({
		arrows: false,			
			slidesToShow: 6,
			slidesToScroll: 1,
			speed: 1000,
			centerMode: true,
			variableWidth: true,
			focusOnSelect: true,
			asNavFor: '.slider'		 
	})

// открыть/закрыть меню по клику на бургер
	$('.menu__btn').on('click', function() {	
		$('.menu__list').slideToggle()
	})

// смена фона фиксированного header 
	$(document).scroll(function() {
    let $nav = $(".header--fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })

})






 
