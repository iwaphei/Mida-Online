(function ($) {
 "use strict";
 $(document).ready(function(){
	/*---------------------
	Active for preloader
	-----------------------*/
		$('#preloader').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(100).css({'overflow':'visible'});
		/*---------------------
		 1.jQuery MOBILEMenu
		--------------------- */	
		/* jQuery MOBILEMenu */
	   jQuery('nav#dropdown').meanmenu();

		// price slider=========
		$(function() {
			$( "#slider-range" ).slider({
				range: true,
				min: 0,
				max: 500,
				values: [ 15, 458 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
				}
			});
			$( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
				" - £" + $( "#slider-range" ).slider( "values", 1 ) );
		});
	// Revolution Slider Initialize			
	jQuery('.fullwidthbanner').show().revolution(
	{
		dottedOverlay:"none",
		delay:9000,
		startwidth:1920,
		startheight:515,
		hideThumbs:200,

		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:2,
		
		simplifyAll:"off",
		
		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview1",
		
		touchenabled:"on",
		onHoverStop:"on",
		nextSlideOnWindowFocus:"off",
		
		swipe_threshold: 75,
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
								
		keyboardNavigation:"off",
		
		navigationHAlign:"center",
		navigationVAlign:"bottom",
		navigationHOffset:0,
		navigationVOffset:20,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,
				
		shadow:0,
		fullWidth:"on",
		fullScreen:"off",

		spinner:"spinner0",
		
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		
		hideTimerBar:"on",

		shuffle:"off",
		
		autoHeight:"off",						
		forceFullWidth:"off",
								
		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,						
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResolution:0,
		
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		startWithSlide:0,
		videoJsPath:"rs-plugin/videojs/",
		fullScreenOffsetContainer: ""	
	});	
	// Revolution Slider Initialize			
	jQuery('.home-3slider').show().revolution(
	{
		dottedOverlay:"none",
		delay:9000,
		startwidth:1230,
		startheight:506,
		hideThumbs:200,

		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:2,
		
		simplifyAll:"off",
		
		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview1",
		
		touchenabled:"on",
		onHoverStop:"on",
		nextSlideOnWindowFocus:"off",
		
		swipe_threshold: 75,
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
								
		keyboardNavigation:"off",
		
		navigationHAlign:"center",
		navigationVAlign:"bottom",
		navigationHOffset:0,
		navigationVOffset:20,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,
				
		shadow:0,
		fullWidth:"on",
		fullScreen:"off",

		spinner:"spinner0",
		
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		
		hideTimerBar:"on",

		shuffle:"off",
		
		autoHeight:"off",						
		forceFullWidth:"off",
								
		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,						
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResolution:0,
		
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		startWithSlide:0,
		videoJsPath:"rs-plugin/videojs/",
		fullScreenOffsetContainer: ""	
	});	
	/*-------------------------------
	 1. owl-carousel for Tab slider
	--------------------------------*/
	$(".p_owl_carousel").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
	/*-------------------------------
	 1. owl-carousel for Blog slider
	--------------------------------*/
	$(".blog-slider").owlCarousel({
		autoPlay: false,
		center: true,
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	
	/*-------------------------------
	 2. owl-carousel for best seller
	--------------------------------*/
	$(".best_seller").owlCarousel({
		autoPlay: false,
		center: true,
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	/*--------------------------------
	7.owl-carousel for bxslider
	----------------------------------*/
	$(".bxpage_slider").owlCarousel({
		autoPlay: true,
		center: true,
		items : 4, //4 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //1 items between 600 and 0
		itemsMobile : [600,2], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
	
	/*--------------------------------------
	 2. owl-carousel for best seller home-4
	-----------------------------------------*/
	$(".home-4-best_seller").owlCarousel({
		autoPlay: false,
		center: true,
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	
	/*--------------------------------------
	 2. owl-carousel for all_r_p_slide 
	-----------------------------------------*/
	$(".all_r_p_slide").owlCarousel({
		autoPlay: false,
		center: true,
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	
	/*-------------------------------
	 2. owl-carousel for home2_seller
	--------------------------------*/
	$(".home2_seller").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	/*-------------------------------
	 4. owl-carousel for all brands
	--------------------------------*/
	$(".all_brands").owlCarousel({
		autoPlay: false,
		center: true,
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,2], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	/*-------------------------------
	 5. owl-carousel for all blogs
	--------------------------------*/
	$(".all_blogs").owlCarousel({
		autoPlay: false,
		center: true,
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	
	/*-------------------------------
	 6. owl-carousel for all blogs
	--------------------------------*/
	$(".all_clients").owlCarousel({
		autoPlay: false,
		center: true,
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});	

	/*-------------------------
	Active for bxslider
	--------------------------*/
	$('#gallery_imgs').bxSlider({
	  pagerCustom: '#bx-pager'
	});
	
	/*-------------------------
	Active for fancybox
	--------------------------*/
	$('.fancybox').fancybox();

	/* For tooltip  */
	$('[data-toggle="tooltip"]').tooltip(); 
	/*-------------------------
	  showlogin toggle function
	--------------------------*/
	 $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
	/*-------------------------
	  showcoupon toggle function
	--------------------------*/
	 $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });
     /*-------------------------
	  Create an account toggle function
	--------------------------*/
	 $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
		 
	/*-------------------------
	  Create an account toggle function
	--------------------------*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });	
	/* --------------------------------------------------------
  	 payment-accordion
	* -------------------------------------------------------*/ 
	$(".payment-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});  
	/*---------------------
	   scrollUp
	--------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	
	
	
	}); 
	
 })(jQuery);