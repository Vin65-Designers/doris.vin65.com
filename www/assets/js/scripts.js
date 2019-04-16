var v65 = {
	global : {
		init : function(){
			v65.global.addButtonListener();
			v65.global.addToCartListener();
			v65.global.continueShopping();
			v65.global.mainMenuHover();
			v65.global.mobileMenu();
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		},
		addToCartListener : function(){
			$("[v65js=addToCart]").on("submit",function(){
				v65.cookies.createCookie("continueShoppingURL", window.location.href);
			});
		},
		continueShopping : function(){
			if(v65.cookies.readCookie("continueShoppingURL") !== null){
				$(".v65-cartCheckOutButtons a.linkAltBtn, #v65-checkCartSummaryMoreOptions a:contains('Continue shopping')").attr("href", v65.cookies.readCookie("continueShoppingURL"));
			}
		},
		mainMenuHover : function(){
			$(".mainMenu ul li ul li").hover(function(){
				$(this).parent().parent().children("a").toggleClass("hover");
			});
		},
		mobileMenu : function(){

			$(".menu-icon").disableSelection(); 

			$(".menu-icon").click(function(){
				$('body').toggleClass('mobileBody');
				$(this).toggleClass('menu-position');	
				$('.mainMenu').toggleClass('menuOpen');
				$(this).toggleClass('on');
				$('.homepageProductGroup').toggle();
				return false;	
			});

			// Close cart when opening menu
			$(".menu-icon").click(function(){
				if(!$('.mainMenu').hasClass('menuOpen') && $('#v65-modalCartDropdown:visible')){
			  		vin65.cart.hideCart();
				}
			});

			// Close menu when opening cart
			$('body').click(function(e){
				if($(e.target).attr('id') === "v65-toggleModalCart"){
			   		if($('.mainMenu').hasClass('menuOpen')){
			  			$('body').toggleClass('mobileBody');
			  			$('.menu-icon').removeClass('menu-position');	
			    		$('.mainMenu').removeClass('menuOpen');
			    		$('.menu-icon').removeClass('on');
			    		$('.homepageProductGroup').show();
					}
				}
			});
		}
	},
	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},
	home : {
		homepageSlider : function(){

			$('.homepageProductGroup .v65-productGroup-product').wrapAll('<div class="productSlider"></div>');
			$('.productSlider').slick({
				dots: false,
				arrows: true,
		  	slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	},
	page : {
		init : function(){
			v65.page.initPhotoGallery();
			v65.page.productGroupRowClear();
			v65.page.scrollToBottom();
			v65.page.scrollToTop();
		},
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					galleryHeight : null, // This value is translated to the set height of the gallery and will change the photogallery height
					galleryWidth : null, // This value is translated to the set width of the gallery and will change the photogallery width
					/*
						Uncomment the code below if you want to change how the photo gallery is displayed.
						arrows: true, //Show the arrow navigation
						autoplay: false, //Does the carousel autoplay or not
						autoplaySpeed: 3000,, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: false, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: '50px', //Side padding when in center mode (px or %)
						dots: true, //Show the dot navigation for each image
						fade: false, //Add a fade effect between image transitions
            slidesToShow: 1, //How may slides to show at once
						slidesToScroll: 1 //How many slides to scroll at once
					*/
				});
			}
		},
		productGroupRowClear : function(){
			if($(".v65-productGroup").length){
				for(var i = 1; i <= $(".v65-productGroup-product").length; i++){
					if(i % 2 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-2Up-rowClear"></div>');
					} else if (i % 3 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-3Up-rowClear"></div>');
					}
				}
			}
		},
		scrollToBottom : function(){
			$('.footerMenuLink').click(function() {
				$("html, body").animate({ scrollTop: ($("a[name='footerMenu']").offset().top - 20) }, 400);
				return false;
			});

			$('.scrollDownArrow').click(function() {
				if($(window).width() > 920){
					$("html, body").animate({ scrollTop: ($("a[name='scrollDown']").offset().top - 100) }, 400);
					return false;
				}
				if($(window).width() < 920){
					$("html, body").animate({ scrollTop: ($("a[name='scrollDown']").offset().top) }, 400);
					return false;
				}
			});
		},
		scrollToTop : function(){
			$(window).scroll(function() {
				if($(document).scrollTop() > 150 && $(window).width() < 580){
					$(".backToTop").css("display", "block");
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
					$("footer").css("margin-bottom", $('.v65-productAddToCart-drilldownActivate').outerHeight())

				} else{
					$(".backToTop").css("display", "none");
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
					$("footer").removeAttr('style');
				}
			});

			$('.backToTop').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		}
	},
	documentReady : {
		init : function(){
			v65.documentReady.upcomingEvents();
			v65.documentReady.videoFormatting();
			v65.documentReady.eventFormatting();
			v65.documentReady.blogFormatting();
		},
		upcomingEvents : function(){
			$('.upcomingEvents .v65-event-upcoming-event').each(function(){
			     var date = $(this).find($('.v65-event-upcoming-event-date')).text().replace(/,/g, '').split(" ");
			     var month = date[0];
			     var day = date[1];
			     $(this).find($('.v65-event-upcoming-event-date')).text('');
			     $(this).find($('.v65-event-upcoming-event-date')).append('<div class="month">' + date[0] + '</div>');
			     $(this).find($('.v65-event-upcoming-event-date')).append('<div class="day">' + date[1] + '</div>');

			     if($(this).find('.v65-event-upcoming-event-title a').attr('href')){
					var eventLink = $(this).find('.v65-event-upcoming-event-title a').attr('href');
					$(this).append('<div class="eventLink"><a href="' + eventLink + '">View more details</a></div>');
			     }
				    
			})  
		},
		videoFormatting : function(){
			$("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com']").wrap('<div class="videoWrapper"></div>');
		},
		eventFormatting : function(){

			// Center title
			if($('#v65-CalendarEventTable').length >= 1){
				$('.wideContent h1').css('text-align', 'center');
			}

			//Homepage Events - Hide if there are no upcoming events
			if($('.upcomingEvents .v65-event-upcoming-event').text().trim() == "No Upcoming Events"){
  				$('.upcomingEvents .v65-event-upcoming-event').hide();
			}
		},
		blogFormatting : function(){
			// Move blog post date below title on list
			$('.v65-blogPost').each(function(){ 
				var date = $(this).find('.v65-blogPostDate'); 
				$(this).find('h2:eq(0)').after(date) 
			});

			// Move blog post date below title on drilldown
			$('.v65-blogPost').each(function(){ 
				var date = $(this).find('.v65-blogPostDate'); 
				$(this).find('h1:eq(0)').after(date) 
			});
		},
		headerAnimation : function(){
			$('.v65-logo, .mainMenu').addClass('transition');

			if($(window).width() > 900){				
				var myElement = document.querySelector("header");
				var headroom = new Headroom(myElement, {
					"offset": 50,
					"tolerance": 5,
					"classes": {
						"initial": "animated",
						"pinned": "slideDown",
						"unpinned": "slideUp"
					}
				});
				headroom.init();
			}
		},
		matchHeights : function(){
		    $('.homepageProductGroup, .blogPosts').matchHeight();
		    $('.subscribeSection, .upcomingEvents').matchHeight();
		    $('.v65-product2Up').matchHeight();
		    $('.v65-club .v65-clubTeaser').matchHeight();
		    $('.contentSection .bottomContent').matchHeight();
		}
	}
}

;(function($,undefined){
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			galleryHeight : null,
			galleryWidth : null,
			timestamp : "&timestamp="+ new Date().getTime()
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth,
			"overflow":"hidden"
		});
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var slides = "";
				$(xml).find('img').each(function() {
					var location = '/assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						caption = $(this).attr('caption'),
						title = $(this).attr('title'),
						url = $(this).attr('link');
						if (url === undefined) {
						var	image = '<img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/>';
						} else{
						var	image = '<a href="'+url+'"><img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/></a>';
						}
						slides += image;
				});
				gallery.append(slides);
			},
			complete: function(){
	   			gallery.slick({
						arrows: settings.arrows, //Show the arrow navigation
						autoplay: settings.autoplay, //Does the carousel autoplay or not
						autoplaySpeed: settings.autoplaySpeed, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: settings.centerMode, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: settings.centerPadding, //Side padding when in center mode (px or %)
						dots: settings.dots, //Show the dot navigation for each image
						fade: settings.fade, //Add a fade effect between image transitions
            slidesToShow: settings.slidesToShow, //How may slides to show at once
						slidesToScroll: settings.slidesToScroll //How many slides to scroll at once
				});
				$('#pagePhotoGallery .slick-slide img').each(function(){ 
					if ($(this).attr('title')){
						var slideCaption = $(this).attr('title');
						$(this).parent('div').addClass('has-caption').append('<div class="slidecaption">' + slideCaption + '</div>');
					}
				});
	   		}
	   	});
	}
})(jQuery);

/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);


/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),
f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),
a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);


v65.global.init();
v65.page.init();

$(document).ready(function(){
	v65.documentReady.init();

	// Not IE 8 or 9
	if(!$('html').hasClass('ie')){
		v65.home.homepageSlider();
		v65.documentReady.headerAnimation();
	}

	v65.documentReady.matchHeights();

    // If there are no featured products on the homepage, remove group margins
    if(!$('.homepageProductGroup .v65-productGroup-products').text().trim().length > 0){
	   $('.homepageProductGroup .v65-productGroup, .homepageProductGroup .v65-productGroup-teaser').css('margin', '0');
	}

	// Remove content section links if 'No Link' is selected
	$('.contentSection .hasLinkNo').each(function(){
        $(this).find('.lightOverlay').css('opacity', '0');
	    $(this).find('.topContent').unwrap();  
	});

	// Cross to modal cart
	if($(window).width() > 580){
		$('#v65-modalCartBody a span').each(function(){
		    if($(this).text() === "Close"){
		        $(this).text('').addClass('icon-cross').parent().addClass('modalCloseButton');
		    }
		});
	}; 

});

$(document).ajaxComplete(function(){
	// Cross to modal cart
	if($(window).width() > 580){
		$('#v65-modalCartBody a span').each(function(){
		    if($(this).text() === "Close"){
		        $(this).text('').addClass('icon-cross').parent().addClass('modalCloseButton');
		    }
		});
	}	
});

$(window).load(function(){	
	// If IE 8 or 9
	if($('html').hasClass('ie')){
		v65.home.homepageSlider();

		// Homepage
		$('.homepageProductGroup, .blogPosts').matchHeight();
	}
});