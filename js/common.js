
$(function() {

	document.getElementById('svg-icons').innerHTML = SVG_ICONS;

	animateNavigation ();
	goToElement ();
	detectIfScroll();

	// инициализация плагина для адаптивных таблиц
	$('.table_responsive').cardtable();


	window.onscroll = function() {

		detectIfScroll();
	
	};

});


function detectIfScroll () {
	
	var scrollFromTop = $(window).scrollTop();
	var targetBlock = $('.header');
	var scrolledState = 'is-scrolled';
	var menuItems = $('.main-nav__i');
	var activeState = 'is-active';
	var hiddenState = 'is-hidden';
	var goToTopButton = $('.go-to-top');

	//var posOfAbout = ( $('.page').length > 0 ) ? $('.page').offset().top - 150 : 0;
	var posOfProgramm = ( $('.gothere-programm').length > 0 ) ? $('.gothere-programm').offset().top - 150 : 0;
	var posOfLocation = ( $('.gothere-location').length > 0 ) ? $('.gothere-location').offset().top - 150 : 0;
	var posOfLeaders = ( $('.gothere-leaders').length > 0 ) ? $('.gothere-leaders').offset().top - 150 : 0;
	var posOfPrice = ( $('.gothere-price').length > 0 ) ? $('.gothere-price').offset().top - 150 : 0;
	var posOfYesIDo = ( $('.gothere-yes-i-do').length > 0 ) ? $('.gothere-yes-i-do').offset().top - 150 : 0;
	var posOfQuestions = ( $('.gothere-questions').length > 0 ) ? $('.gothere-questions').offset().top - 150 : 0;
	var posOfContacts = ( $('.gothere-contacts').length > 0 ) ? $('.gothere-contacts').offset().top - 150 : 0;


	var wH = $(window).height();
	var docH = $(document).height();


	if (scrollFromTop > 150) { // go-to-top display\hide 

		goToTopButton.removeClass(hiddenState);
	} else	{

		goToTopButton.addClass(hiddenState);
	}

	if (scrollFromTop > 0) {

		targetBlock.addClass( scrolledState );
		menuItems.removeClass( activeState );
	} else	{

		targetBlock.removeClass( scrolledState );
	}


	if (scrollFromTop > posOfProgramm) {

		menuItems.removeClass( activeState );
		menuItems.eq(0).addClass( activeState );
		
	}


	if (scrollFromTop > posOfLocation) {

		menuItems.removeClass( activeState );
		menuItems.eq(1).addClass( activeState );
		
	}	


	if (scrollFromTop > posOfLeaders) {

		menuItems.removeClass( activeState );
		menuItems.eq(2).addClass( activeState );
		
	}	


	if (scrollFromTop > posOfPrice) {

		menuItems.removeClass( activeState );
		menuItems.eq(3).addClass( activeState );
		
	}	


	if (scrollFromTop > posOfYesIDo) {

		menuItems.removeClass( activeState );
		menuItems.eq(4).addClass( activeState );
		
	}


	if (scrollFromTop > posOfQuestions) {

		menuItems.removeClass( activeState );
		menuItems.eq(5).addClass( activeState );
		
	}


	if (scrollFromTop > posOfContacts || scrollFromTop + wH == docH) {

		menuItems.removeClass( activeState );
		menuItems.eq(6).addClass( activeState );
		
	}


} // detectIfScroll


function animateNavigation () {
	
	var animationAllow = 'is-animate';
	var openState = 'is-open';
	var nav = $('.js-nav');
	var navControl = $('.js-nav__control');
	var navPhone = $('.js-nav__phone');

	navControl.on('click', function(e) {

		e.preventDefault();
		
		navControl.toggleClass(openState);
		navPhone.toggleClass(openState);
		nav.toggleClass(openState);
		$('body').toggleClass(openState);

		// for not alowing animation during resizing the window
		setTimeout(function() {

			navControl.toggleClass(animationAllow);
			nav.toggleClass(animationAllow);
		}, 300);

		
	});

} // animateNavigation



function goToElement () {

	var animationAllow = 'is-animate';
	var openState = 'is-open';
	var nav = $('.js-nav');
	var navControl = $('.js-nav__control');
	var navPhone = $('.js-nav__phone');
	var navH = 40;

	$(".js-goto").click(function(e) {

		nav.removeClass(animationAllow + ' ' + openState);
		navControl.removeClass(animationAllow + ' ' + openState);
		navPhone.removeClass(openState);
		$('body').removeClass(openState);

		var self = $(this),
			targetClass = self.data('goto');
		    target = $(targetClass);

		var speed = 1000;

		 e.preventDefault();


	    $('html, body').stop().animate({
	        scrollTop: target.offset().top - (navH + 10)
	        
	    }, speed, 'easeInOutCubic');
	});

} // goToElement

