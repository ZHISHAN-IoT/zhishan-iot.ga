/********/
var prm;
var jsOn = 1;
var qstr = window.location.search.substring(1).split('&');
var cmenuOpen = false;
var cmenuCode = 'shp_cmenu_click_B_Corp';

for(var i = 0; i < qstr.length; i++) {
  prm = qstr[i].split('=');
  if(prm[0].toLowerCase() == 'js' && prm[1].toLowerCase() == 'off') {
    jsOn = 0;
  }
}
if(jsOn) {
  (function() {
/********/
new function() {
	/****************************************
	 * Private
	 ***************************************/
	// CONST
	var SMALL_BORDER_WIDTH = 640;
	var DURATION_SLIDE = 200;
	var DURATION_SLIDE_BACKMARK_FADE = 200;
	var DURATION_SIBLE_FORM = 200;
	var SLIDE_EASING = "easeInOutQuad";
	var PC_DURATION_SLIDE = 700;

	var SLIDE_BACK_LEFT_MARGIN = 33;

	var CONTENT_MENU_PC_LIST_WIDTH = 270;
	var CONTENT_MENU_PC_LIST_PADDING = 10;
	var CONTENT_MENU_H3_LEFT = 20;

	// Variable
	var headerHeight = 0;
	var initResize = true;
	var useFixed = true;
	var isSmallScreen = false;

	// onLoad
	$tmpl(function(){
		$tmpl(window).resize(resizeFunc);

		// Mobile Content Menu
		var $mnavi = $tmpl("#tmpl_footerNavi").clone();
		$mnavi.attr("id", "tmpl_contentMenu_link");
		$mnavi.removeAttr("class");
		$mnavi.appendTo("#tmpl_contentMenu_bar");
//
		var ua = window.navigator.userAgent.toLowerCase();
		var ver = window.navigator.appVersion.toLowerCase();
		if( ua.indexOf("msie") == -1 || ( ver.indexOf("msie 8.") == -1 &&
			ver.indexOf("msie 7.") == -1 && ver.indexOf("msie 6.") == -1 )) {

			var $cmenu = $tmpl("#tmpl_contentMenu_bar_menu_open");
			var cmtext = $cmenu.text();
			var newelm = '<span id="tmpl_contentMenuLabel">' + cmtext + '</span>';
			$cmenu.contents().filter(function(){return this.nodeType == 3;}).remove();
			$tmpl("#tmpl_contentMenu_open_mark").before(newelm);
		}
//
		// PC Content Menu
		var $hnavi = $tmpl("#tmpl_footerNavi").clone();
		$hnavi.attr("id", "tmpl_headerNavi");
		$hnavi.removeAttr("style");
		$hnavi.addClass("tmpl_contentMenu current");
		$hnavi.appendTo("#tmpl_pc_content_menu_inner");

		$tmpl("#tmpl_contentMenu_link").find("li").map(function(){
			var $this = $tmpl(this);
			if( $this.is(":has(ul)") ){
				$this.find(">h3").addClass("tmpl_parent");
//				$this.find(".tmpl_parent").find("a").click(sml_click);
				$this.find(".tmpl_parent").wrapInner($tmpl("<a>").attr("href", "").click(sml_click));
				$this.find("ul").hide();
			}
		});
		$tmpl("#tmpl_contentMenu_bar_menu_open").click(contentMenuOpen);

		resizeFunc();
		if(navigator.userAgent.indexOf("MSIE") != -1) {
		}
		// 2016/01/26
		$tmpl(window).on('beforeunload', function() {
			if(cmenuOpen) {
				s.tl(true,'o',cmenuCode,null,'navigate');
			}
		});
	});

	// private method
	// Content Menu Open
	var contentMenuControlable = true;
	var sml_contentMenuOpenable = true;
	var contentMenuOpen = function(e) {
		var $target = $tmpl(e.currentTarget);
		if(isSmallScreen ) {
			if(sml_contentMenuOpenable ) {
				sml_contentMenuOpenable = false;

				var $contentMenu = $tmpl("#tmpl_contentMenu_link");
				if( $target.hasClass("tmpl_open") ){
					$target.removeClass("tmpl_open");
					$contentMenu.slideUp(DURATION_SLIDE, SLIDE_EASING,
						function(){
							$tmpl("#tmpl_contentMenu_bar").css("border-bottom-width", "1px");
							sml_contentMenuOpenable = true;
						}
					);
				} else {
					$target.addClass("tmpl_open");
					$contentMenu.slideDown(DURATION_SLIDE, SLIDE_EASING,
						function(){
							$tmpl("#tmpl_contentMenu_bar").css("border-bottom-width", "0");
							sml_contentMenuOpenable = true;
						}
					);
					cmenuOpen = true;
				}
			}

		}else{
			// PC
			if( contentMenuControlable ) {
				contentMenuControlable = false;

				if( $target.hasClass("tmpl_open") ){
					$target.removeClass("tmpl_open");
					var $contentMenu = $tmpl("#tmpl_pc_content_menu_inner");
					$contentMenu.slideUp(DURATION_SLIDE, SLIDE_EASING,
						function(){ 
							$tmpl("#tmpl_pc_content_menu").css("border-top-width", "0");
							$tmpl("#tmpl_pc_content_menu").css("border-bottom-width", "0");
							$tmpl("#tmpl_contentMenu_bar").css("border-bottom-width", "1px");
							contentMenuControlable = true; 
						}
					);

				} else {

					$target.addClass("tmpl_open");
					$tmpl("#tmpl_pc_content_menu_inner").slideDown(DURATION_SLIDE, SLIDE_EASING,
						function(){
							$tmpl("#tmpl_contentMenu_bar").css("border-bottom-width", "0");
							$tmpl("#tmpl_pc_content_menu").css("border-top-width", "1px");
							$tmpl("#tmpl_pc_content_menu").css("border-bottom-width", "1px");
							contentMenuControlable = true;
						}
					);
					cmenuOpen = true;
				}

			}
		}
		return false;
	};


	// PC Content Menu
	var setContentMenu = function( $titleLink, $toSetList) {
		var $clone = $tmpl(".tmpl_pc_content_menuLink.tmpl_displayOff").clone();
		$clone.removeClass("tmpl_displayOff");
		$clone.find("h3").append($titleLink.clone());
		$toSetList.find(">li").map( function() {
			var $this = $tmpl(this);
			var $toAddLink = $this.find(">h3>a, >h4>a").eq(0).clone();
			var $appendList = $tmpl("<li></li>");
			$appendList.append($toAddLink);
			$clone.find("ul").append($appendList);
			var $link = $appendList.find("a");
		});
		return $clone;
	};

	// Resize
	var resizeFunc = function () {
		var $w = $tmpl(window);
		var w_width = $w.width();
		var w_height = $w.height();
		$body = $tmpl("body");
		if( ! ($tmpl.browser.msie && $tmpl.browser.version < 9) &&  w_width < SMALL_BORDER_WIDTH ) {
			if( ! isSmallScreen || initResize ) {
				$tmpl("#tmpl_contentMenu_bar_menu_open").removeClass("tmpl_open");
				$tmpl("#tmpl_pc_content_menu_inner").hide();
				$tmpl(".tmpl_pc_content_menuLink:not(.tmpl_displayOff)").remove();

				$tmpl("#tmpl_contentMenu_link").hide();

				isSmallScreen = true;
			}
		} else {
			if( isSmallScreen || initResize ) {
				isSmallScreen = false;
				$tmpl("#tmpl_contentMenu_link").hide();
				$tmpl("#tmpl_contentMenu_bar_menu_open").removeClass("tmpl_open");
			}
			var $current = $tmpl(".tmpl_pc_content_menuLink.tmpl_displayOff");
			var box_width = $current.outerWidth(false);
			var toSetLeft = w_width - box_width > SLIDE_BACK_LEFT_MARGIN - 10 ?  (w_width - box_width ) / 2 - SLIDE_BACK_LEFT_MARGIN : -10;
			$tmpl("#tmpl_pc_content_menu_back").css({left: toSetLeft});
			var barHeight = $tmpl("#tmpl_contentMenu_bar_base").height() + 
				$tmpl("#tmpl_pc_content_menu_inner").height();
			useFixed = w_height > barHeight && $tmpl("#tmpl_main").height() > barHeight ;
		}
		initResize = false;
//
		isSmallScreen ?
			$tmpl("#tmpl_contentMenuLabel").css("display", "none"):
			$tmpl("#tmpl_contentMenuLabel").css("display", "inline-block");
	};


	//sml click
	var sml_clickable = true;
	var sml_click = function(e){
		if( sml_clickable ){
			sml_clickable = false;
			var $target = $tmpl(e.currentTarget);
			if( $target.hasClass("active")) {
				$target.removeClass("active");

				$target.parent().parent().find("> ul").slideUp(DURATION_SLIDE, SLIDE_EASING,
					function(){ 
						$target.parent().parent().removeClass("active");
						sml_clickable = true; 
					}
				);
			}else{
				$target.addClass("active");
				$target.parent().parent().addClass("active");
				$target.parent().parent().find("> ul").slideDown(DURATION_SLIDE, SLIDE_EASING,
					function(){ sml_clickable = true; }
				);
			}
			sml_clickable = true;
		}
		return false;
	};


	//--------------------------------------------------------------------------
	//  top buttom
	//--------------------------------------------------------------------------
	//  DOM Ready
	$(document).on('ready', function() 
	{
		$('#tmpl_content .pagetop').fixPagetop(100);
		$('.floater a[href*=#]').smoothScroll(600, 'easeInOutCubic');
	});
	
	//  FixPagetop
	$.fn.fixPagetop = function(fadeIn) {
		return this.each(function(i) {
			new FixPagetop(this, fadeIn);
		});
	};
	
	var FixPagetop = function(element, fadeIn) {
		var self = this;
		
		if(Env.isIOS || Env.isAndroid2) return;
		
		self.FADEIN_HEIGHT = fadeIn || 100;
		self.FADE_SPEED = 300;
		self.$window = $(window);
		self.$container = $(element);
		self.$floater   = $('.floater', self.$container);
		self.$target  = $('<div class="target" />');
		self.initialize();
	};
	
	FixPagetop.prototype = {
		initialize : function() {
			var self = this;
			
			self.$container.append(self.$target);
			self.$window.on('scroll.pagetop resize.pagetop', $.proxy(self.detect, self));
		},
		
		detect : function(e) {
			var self = this;
			
			var $floater = self.$floater;
			var scrollTop  = self.$window.scrollTop();
			var defaultTop = self.$container.offset().top;
			var targetTop  = self.$target.offset().top;
			
			if (scrollTop < self.FADEIN_HEIGHT) {
				$floater
				.stop(true, false)
				.fadeTo(self.FADE_SPEED, 0.0, function() {
					$(this).hide()
				});
			}
			else if (defaultTop > targetTop) {
				$floater
				.addClass('fixed')
				.stop(true, false)
				.fadeTo(self.FADE_SPEED, 1.0);
			}
			else if (defaultTop <= targetTop) {
				$floater
				.removeClass('fixed')
				.stop(true, false)
				.fadeTo(0, 1.0);
			}
			
			if (!Modernizr.touch || !Modernizr.msPointer) {
				var scrollLeft = self.$window.scrollLeft();
				self.$floater.css('left', -scrollLeft);
			}
		}
	};

	$.fn.smoothScroll = function(duration, easing) {
		duration = duration || 400;
		easing   = easing || 'swing';
		
		return this.each(function(i)
		{
			var $target = $(this.hash);
			var hash = this.hash;
			
			if ($target.length == 0 && $(this).parent().hasClass('floater')) {
				$target = $('#tmpl_content');
			}
			
			if($target.length == 0) return;
			
			$(this).on('click', function(e)
			{
				e.preventDefault();
				
				var speed = duration;
				var offsetHeight = document.body.offsetHeight;
				var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				var offsetTop = $target.offset().top;
				var position = Math.floor(offsetTop);
				var dif = offsetHeight - position;
				if(dif < clientHeight) position -= clientHeight - dif;
				
				$('html,body').delay(50).stop()
				.animate({ scrollTop:position }, speed, easing)
				.queue(function(){ $(this).dequeue() });
				
				return false;
			});
		});
	};

	//  Env
	var Env = (function() {
		var ua = navigator.userAgent.toLowerCase();
		var ie = /*@cc_on!@*/false;
		
		var env = {
			isIE6:false, isIE7:false, isIE8:false, isIELegacy:false,
			isIPad:false, isIPhone:false, isIPod:false, isIOS:false,
			isAndroid:false, isAndroid2:false, isWTable:false, isMobile:false
		};
		
		if (ie && ua.indexOf('msie 6.') >= 0) env.isIE6 = true;
		else if (ie && ua.indexOf('msie 7.') >= 0) env.isIE7 = true;
		else if (ie && ua.indexOf('msie 8.') >= 0) env.isIE8 = true;
		
		if (ua.indexOf('ipad') >= 0) env.isIPad = true;
		else if (ua.indexOf('iphone') >= 0) env.isIPhone = true;
		else if (ua.indexOf('ipod') >= 0) env.isIPod = true;
		else if (ua.indexOf('android') >= 0) env.isAndroid = true;
		
		var aver = ua.substr(ua.indexOf('android')+8, 2);
		if (env.isAndroid && aver == '4.') env.isAndroid4 = true;
		else if (env.isAndroid && aver == '2.') env.isAndroid2 = true;
		
		var trident = (ua.indexOf('trident/') >= 0)? true : false;
		var touch = (ua.indexOf('touch') >= 0)? true : false;
		if (trident && touch && ua.indexOf('tablet pc') >= 0) env.isWTable = true;
		if (env.isIE6 || env.isIE7 || env.isIE8) env.isIELegacy = true;
		if (env.isIPad || env.isIPhone || env.isIPod) env.isIOS = true;
		if (env.isIOS || env.isAndroid || env.isWTable || env.isWPhone) env.isMobile = true;
		
		return env;
	})();

};
/********/
  })();
}
/********/
