/********/
var prm;
var zoomOn;
var jsOn = 1;
var qstr = window.location.search.substring(1).split('&');

for(var i = 0; i < qstr.length; i++) {
  prm = qstr[i].split('=');
  if(prm[0].toLowerCase() == 'js' && prm[1].toLowerCase() == 'off') {
    jsOn = 0;
    break;
  }
}
if(jsOn) {
  var $tmpl = jQuery.noConflict();
  (function() {
/********/
new function() {
	/****************************************
	 * Private
	 ***************************************/
	// CONST
	var SMALL_BORDER_WIDTH = 641;
	var BODY_CLASS_SMALL = "tmpl_small";
	var DURATION_SLIDE = 200;
	var SLIDE_EASING = "easeInOutQuad";
	var SLIDE_COOKIE_NAME = "HMPG-GN";
	var COOKIE_EXPIRE = 999999;

	// Variable
	var isSmallScreen = false;
	var headerHeight = 0;
	var initResize = true;
	var lrgScreenCorpInfoOpen = null;

/********/
	// for Mobile Home
	var isTop = false;
	var label, splink;
	var about1, about2;
	var isNewTop = false;
//	var location = window.location.href;
	var location = window.location.pathname;
	if( location.indexOf("/index.html") != -1 ){
		location = location.replace("/index.html", "/");
	}

	if( location.match(/\/top\/mobile\/$/) && initResize ) {
		if( $tmpl("html").attr("lang") == "ja" ) {
			label = 'モバイル版へ';
		} else {
			label = 'View Mobile Site';
		}
		splink = '<li class="tmpl_util_sml_border" id="tmpl_mobile"><a href="/top/mobile/" onclick="return setDispMode(\'mobile\')">' + label + '</a></li>';
		isTop = true;
	}
//	if( location.match(/\/renewal\/$/) && initResize ) {
	if( ( location.match(/^\/renewal\/$/) || location.match(/^\/$/) ) && initResize ) {
		isNewTop = true;
	}
/********/
	// onLoad
	$tmpl(function(){
		$tmpl('.tmpl_search_default').removeClass('tmpl_search_default');
		$tmpl('body').addClass('js-on');
		$tmpl(window).resize(resizeFunc);
		$tmpl("#tmpl_utilityOpen").click(menuOpen);
		$tmpl(".tmpl_noscript").removeClass("tmpl_noscript");
		$tmpl(".tmpl_noscript_sml_visible_block ").removeClass("tmpl_noscript_sml_visible_block ");
		$tmpl('#tmpl_aboutSony').css("margin-right", "0");
		$tmpl("#tmpl_aboutSonyHome > a").click(corpInfoClick);
		$tmpl(".tmpl_noscript_sml_invisible").removeClass("tmpl_noscript_sml_invisible");

		$tmpl('.tmpl_utilityOpen_trigger').click(function(){
			if($tmpl(this).attr('aria-expanded') === 'true'){
				$tmpl(this).attr('aria-expanded','false');
				$tmpl(this).find('.tmpl_utilityOpen_txt').html('open');
			}else{
				$tmpl(this).attr('aria-expanded','true');
				$tmpl(this).find('.tmpl_utilityOpen_txt').html('close');
			}
		});

		about1 = $tmpl('#tmpl_aboutSony a').text();
		about2 = $tmpl('#tmpl_aboutSonyTxt').text();

		resizeFunc();

		$tmpl('#tmpl_search_wrapper > p > a').click(function(e){
			e.preventDefault();
			if($tmpl(this).parent().hasClass('tmpl_open')){
				$tmpl(this).parent().removeClass('tmpl_open');
				$tmpl(this).parent().next().fadeOut(300);
			}else{
				$tmpl(this).parent().addClass('tmpl_open');
				$tmpl(this).parent().next().slideDown(300);
				$tmpl(this).parent().next().find('#MF_form_phrase').focus();
			}
		});

		window.addEventListener("keydown", function(e){
			$tmpl('#tmpl_search_wrapper > p > a').focus(function(){
				$tmpl(this).parent().next().slideDown(300);
				$tmpl(this).parent().next().find('#MF_form_phrase').focus();
			});
			$tmpl('#MF_form_phrase').blur(function(){
				/*shift + tab action*/
				if(e.shiftKey && e.keyCode == 9){
					$tmpl('#tmpl_SonyLogo a').focus();
				}
				/*tab　action*/
				else if(e.keyCode == 9){
					$tmpl('ul#tmpl_util .tmpl_util_sml_border:nth-child(2) a').focus();
				}
				$tmpl(this).parents('#tmpl_searchForm').fadeOut(300);
			});
		});

		if( isSmallScreen ) {
			$tmpl('#tmpl_aboutSonyHome').css("display", "inline-block");
			if($tmpl.cookie("ABOUT")) {
				$tmpl("#tmpl_aboutSonyLink").addClass('tmpl_open');
				$tmpl('#tmpl_corpInfoList_sml').show();
			}

			$tmpl('#tmpl_aboutSonyHome').removeClass('tmpl_close').addClass('tmpl_open');
			$tmpl('#tmpl_corpInfoList_sml').show();
			$tmpl('#'+$tmpl.cookie("childSlide")).find('.tmpl-acd-nav').show();
			$tmpl('#'+$tmpl.cookie("childSlide")).find('.nav-li-link').addClass('oneClick');
		}
	});

	// private method
	var resizeFunc = function () {
		var $w = $tmpl(window);
		var w_width = $w.width();

		$body = $tmpl("body");
		if( w_width < SMALL_BORDER_WIDTH ) {
			$tmpl('#tmpl_aboutSonyHome').css("display", "inline-block");
			$tmpl('#tmpl_searchForm').show();
			$tmpl(document).off('click');
		}else {
			if($tmpl('#tmpl_search_wrapper > p').hasClass('tmpl_open')){
				$tmpl('#tmpl_searchForm').show();
			}else {
				$tmpl('#tmpl_searchForm').hide();
			}
			$tmpl(document).on('click',function(event){
				if(!$tmpl(event.target).closest('#tmpl_searchForm,#tmpl_search_wrapper > p').length) {
					$tmpl('#tmpl_searchForm').fadeOut(300);
					$tmpl('#tmpl_search_wrapper > p').removeClass('tmpl_open');
				}
			});
		}
/********/
		if( isTop && initResize ) {
			$tmpl("#tmpl_support").before(splink);
		}
/********/
		if( ! ($tmpl.browser.msie && $tmpl.browser.version < 9 ) && w_width < SMALL_BORDER_WIDTH ) {
/********/
			qstr = window.location.search.substring(1).split('&');
			for( var i = 0; i < qstr.length; i++ ) {
				prm = qstr[i].split('=');
				if( prm[0].toLowerCase() == 'zoom' ) {
					if( prm[1].toLowerCase() == 'on' ) {
						zoomOn = 1;
						break;
					}
					if( prm[1].toLowerCase() == 'off' ) {
						zoomOn = 0;
						break;
					}
				}
			}
			if( zoomOn == 1 ) {
				$tmpl('html').css({"zoom" : w_width / 480});
			}
/********/
			if( ! $body.hasClass(BODY_CLASS_SMALL) || initResize ) {
				if( ! initResize ) {
					lrgScreenCorpInfoOpen = $tmpl("#tmpl_aboutSonyHome").hasClass("tmpl_open");
				}
/********/
				if( isTop ){
					$tmpl("#tmpl_mobile").hide();
				}
/********/
				$body.addClass(BODY_CLASS_SMALL);
				$tmpl('.tmpl_sml_only').show();
				$tmpl('.tmpl_lrg_only').hide();
				$tmpl('#tmpl_searchForm').appendTo('#tmpl_search_small');
				$tmpl("#tmpl_utilityOpen").removeClass("tmpl_open").addClass("tmpl_close");
				$tmpl("#tmpl_utilityOpenMark > img").attr("alt",$tmpl("#tmpl_utilityOpenMark > img").attr("data-open"));
				$tmpl("#tmpl_util").hide();
				$tmpl("#tmpl_aboutSonyHome").removeClass("tmpl_open").addClass("tmpl_close");

				$tmpl('#tmpl_aboutSony').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_aboutSony a').text(about2);
				$tmpl('#tmpl_aboutSonyTxt').text(about1);

				$tmpl('#tmpl_proServ').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_corpInfo').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_news').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_ir').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_csr').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_jobs').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_bd').appendTo('#tmpl_corpInfoList_sml');
				$tmpl('#tmpl_sd').appendTo('#tmpl_corpInfoList_sml');
//
if( isNewTop ){
	$tmpl("#tmpl_aboutSonyBtn").show();
}
//
				isSmallScreen = true;
			}
		} else {
			if( $body.hasClass(BODY_CLASS_SMALL) || initResize ) {
				corpInfoReset();
/********/
				if( isTop ){
					$tmpl("#tmpl_mobile").show();
				}
/********/
				$body.removeClass(BODY_CLASS_SMALL);
				$tmpl('html').css({"zoom" : 1});
				$tmpl("#tmpl_util").css({display:""});
				$tmpl('.tmpl_sml_only').hide();
				$tmpl('.tmpl_lrg_only').show();

				$tmpl('#tmpl_aboutSonyHome').before($tmpl('#tmpl_aboutSony'));
				$tmpl('#tmpl_aboutSony a').text(about1);
				$tmpl('#tmpl_aboutSonyTxt').text(about2);

				$tmpl('#tmpl_proServ').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_corpInfo').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_news').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_ir').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_csr').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_jobs').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_tech').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_bd').appendTo('#tmpl_globalNavi');
				$tmpl('#tmpl_sd').appendTo('#tmpl_globalNavi');

				var $corpInfo = $tmpl("#tmpl_aboutSonyHome");
				var cookieVal = $tmpl.cookie(SLIDE_COOKIE_NAME);
//				if( cookieVal != null ){
				$aboutSonyBtnImg = $tmpl("#tmpl_aboutSonyBtn > img");
if( isNewTop ){
	$corpInfo.removeClass("tmpl_close").addClass("tmpl_open");
	$aboutSonyBtnImg.attr("alt",$aboutSonyBtnImg.attr("data-open"));
	$tmpl("#tmpl_aboutSonyBtn").hide();
}
else if( cookieVal != null ){
//
					if( cookieVal == 0 ) {
						$corpInfo.addClass("tmpl_close");
						$aboutSonyBtnImg.attr("alt",$aboutSonyBtnImg.attr("data-open"));
					}else{
						$corpInfo.removeClass("tmpl_close").addClass("tmpl_open");
						$aboutSonyBtnImg.attr("alt",$aboutSonyBtnImg.attr("data-close"));
					}
				}
				if ( lrgScreenCorpInfoOpen != null ) {
					lrgScreenCorpInfoOpen ?
						$corpInfo.removeClass("tmpl_close").addClass("tmpl_open"):
						$corpInfo.removeClass("tmpl_open").addClass("tmpl_close");

					$aboutSonyBtnImg.attr("alt", ($corpInfo.hasClass("tmpl_close") ? $aboutSonyBtnImg.attr("data-open") : $aboutSonyBtnImg.attr("data-close")));
				}
				if( $corpInfo.hasClass("tmpl_close") ) {
					$tmpl("#tmpl_globalNavi").hide();
				}else{
					$tmpl("#tmpl_globalNavi").show();
				}

				isSmallScreen = false;
			}
		}
		initResize = false;
	};

	var corpSlidable = true;
	var globalNaviOpenable = true;
	var corpInfoClick = function(){
		if( isSmallScreen ) {
			if( corpSlidable ) {
				corpSlidable = false;
				var $corpInfo = $tmpl("#tmpl_aboutSonyHome");
				$corpInfo.hasClass("tmpl_close") ?
					$corpInfo.removeClass("tmpl_close").addClass("tmpl_open") :
					$corpInfo.removeClass("tmpl_open").addClass("tmpl_close") ;

				var $img = $tmpl("#tmpl_aboutSonyBtn > img");

				if($tmpl("#tmpl_aboutSonyLink").hasClass('tmpl_open')){
					$tmpl("#tmpl_aboutSonyLink").removeClass('tmpl_open');
					$tmpl.removeCookie("ABOUT", { path: "/" });
				}else{
					$tmpl("#tmpl_aboutSonyLink").addClass('tmpl_open');
					$tmpl.cookie("ABOUT", "tmpl_open", { expires: 365 , path: '/' });
				}

				$tmpl('#tmpl_corpInfoList_sml').slideToggle(DURATION_SLIDE, SLIDE_EASING ,
					function() { corpSlidable = true; }
				);
			}
			return false;
		}else{
			if( globalNaviOpenable ) {
				globalNaviOpenable = false;
				var $corpInfo = $tmpl("#tmpl_aboutSonyHome");
				var $img = $tmpl("#tmpl_aboutSonyBtn > img");
				if( $corpInfo.hasClass("tmpl_close") ){
					$corpInfo.removeClass("tmpl_close").addClass("tmpl_open");
					$img.attr("alt", $img.attr("data-close"));
					$tmpl.cookie(SLIDE_COOKIE_NAME, "1", { expires: COOKIE_EXPIRE , path: '/' });
				}else{
					$corpInfo.removeClass("tmpl_open").addClass("tmpl_close") ;
					$img.attr("alt", $img.attr("data-open"));
					$tmpl.cookie(SLIDE_COOKIE_NAME, "0", { expires: COOKIE_EXPIRE , path: '/' });
				}

				$tmpl('#tmpl_globalNavi').slideToggle(DURATION_SLIDE, SLIDE_EASING ,
					function() { globalNaviOpenable = true; }
				);
			}
			return false;
		}
	};

	var ua = {};
	ua.name = window.navigator.userAgent.toLowerCase();
	ua.isiPhone = ua.name.indexOf('iphone') >= 0;
	ua.isAndroid = ua.name.indexOf('android') >= 0;
	ua.isiPad = (ua.name.indexOf('ipad') > -1);
	ua.isAndroidTablet = (ua.name.indexOf('android') > -1) && (ua.name.indexOf('mobile') == -1);

	var addNavClick = function(e,t){
		var flag = 'oneClick';
		var key = t.parent().attr('id');
		if( isSmallScreen || ua.isiPhone || ua.isAndroid || ua.isiPad || ua.isAndroidTablet ) {
			e.preventDefault();
			if(!t.hasClass(flag)){
				$tmpl(".nav-li-link").removeClass(flag);
				$tmpl("#tmpl_util").find('.nav-li-icon').remove();
				$tmpl(".nav-li-link").next('.tmpl-acd-nav').slideUp(DURATION_SLIDE);
				$tmpl.removeCookie("childSlide", { path: "/" });
				t.addClass(flag);
				t.before('<i class="nav-li-icon" tabIndex="0"></i>');
				t.next('.tmpl-acd-nav').slideDown(DURATION_SLIDE);
				$tmpl.cookie('childSlide', key, { expires: 365 , path: '/' });
			}else{
				t.next('.tmpl-acd-nav').slideUp(DURATION_SLIDE);
				t.removeClass('oneClick');
				$tmpl.removeCookie('childSlide');
				$tmpl('.nav-li-icon').remove();
			}
		}
	};

	var corpInfoReset = function() {
	}

	$tmpl(window).on('load',function(){
		$tmpl(".nav-li-link").on('click', function(e){
			addNavClick(e,$tmpl(this));
		});
	});

	$tmpl(window).on('load resize',function(){
		$tmpl(".nav-li-link").next('.tmpl-acd-nav').hide();
		if($tmpl(".nav-li-link").hasClass('oneClick')){
			$tmpl("#tmpl_corpInfoList_sml").show();
			$tmpl("#tmpl_aboutSonyLink").addClass("tmpl_open");
		}

		$tmpl("ul.nav_list_2col").each(function(){
			$tmpl(this).find("li.nav_item").tile(2);
		});
		$tmpl("ul.nav_list_3col").each(function(){
			$tmpl(this).find("li.nav_item").tile(3);
		});

		$tmpl(".nav-li-link").each(function(){
			if($tmpl(this).hasClass('oneClick')){
				$tmpl(this).next('.tmpl-acd-nav').show();
			}
		});
	});

	$tmpl(function(){
		$tmpl(".nav-li-link").each(function(){
			if($tmpl(this).hasClass('oneClick')){
				$tmpl(this).before('<i class="nav-li-icon" tabIndex="0"></i>');
			}
		});
		$tmpl('body').on('click', '.nav-li-icon', function(e){
			e.preventDefault();
			var t = $tmpl(this).siblings('.nav-li-link');
			t.next('.tmpl-acd-nav').slideUp(DURATION_SLIDE);
			t.removeClass('oneClick');
			$tmpl.removeCookie('childSlide');
			$tmpl('.nav-li-icon').remove();
		});
		$tmpl(document).on('keypress', '.nav-li-icon', function(e){
			if( e.which === 13 ){
				e.preventDefault();
				var t = $tmpl(this).siblings('.nav-li-link');
				t.next('.tmpl-acd-nav').slideUp(DURATION_SLIDE);
				t.removeClass('oneClick');
				$tmpl.removeCookie('childSlide');
				$tmpl('.nav-li-icon').remove();
			}
		});
	});

	var menuOpenable = true;
	var menuOpen = function() {
		if( menuOpenable ) {
			menuOpenable = false;

			var $utilOpen = $tmpl("#tmpl_utilityOpen");
			$utilOpen.hasClass("tmpl_close") ?
				$utilOpen.removeClass("tmpl_close").addClass("tmpl_open") :
				$utilOpen.removeClass("tmpl_open").addClass("tmpl_close") ;

			var $img = $tmpl("#tmpl_utilityOpenMark > img");
			$img.attr("alt", ($utilOpen.hasClass("tmpl_close") ? $img.attr("data-open") : $img.attr("data-close")));

			var $menu = $tmpl("#tmpl_util");
			$menu.slideToggle(DURATION_SLIDE, SLIDE_EASING ,
				function() {
					menuOpenable = true;
				}
			);
			corpInfoReset();
		}
		return false;
	};
};
/********/
  })();
}


(function($){
	$(function(){
		$('.navtray-w').hover(function(){
			$(this).addClass('navtray-w-visible');
		},function(){
			$(this).removeClass('navtray-w-visible');
		});
		$('.navtray-w').focus(function(){
			$(this).addClass('over');
		},function(){
			$(this).removeClass('navtray-w-visible over');
		});

		var target;
		$('#tmpl_globalNavi').on('mouseenter','.nav-li a',function(){
			menuDown($(this));
		});
		$('#tmpl_globalNavi').on('mouseleave','.nav-li a',function(){
			menuUp($(this));
		});
		$(document).on('touchstart',function(e) {
			if (!$(e.target).closest('#tmpl_globalNavi .nav-li a').length) {
				$('#tmpl_globalNavi .nav-li a').trigger('mouseout');
			}
		});



		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-01"]').focus(function(){
			var dataClass = $(this).attr('data-target');
			menuDown($(this));
			$(document).on('keydown', '#tmpl_globalNavi .nav-li a[data-target="navtray-w-01"]', function(e) {
				if(e.keyCode == 9) {
					e.preventDefault();
					$('.'+dataClass).find('.cont-box li').eq(0).children('a').focus();
				}
			});
		});
		$(document).on('keydown', '.navtray-w-01 .cont-box li:last a', function(e){
			var keyNumber = '02';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-02"]').focus(function(){
			var keyNumber = '02';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-02 .cont-box li:last a', function(e){
			var keyNumber = '03';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-03"]').focus(function(){
			var keyNumber = '03';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-03 .cont-box li:last a', function(e){
			var keyNumber = '04';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-04"]').focus(function(){
			var keyNumber = '04';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-04 .cont-box li:last a', function(e){
			var keyNumber = '05';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-05"]').focus(function(){
			var keyNumber = '05';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-05 .cont-box li:last a', function(e){
			var keyNumber = '06';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-06"]').focus(function(){
			var keyNumber = '06';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-06 .cont-box li:last a', function(e){
			var keyNumber = '07';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-07"]').focus(function(){
			var keyNumber = '07';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-07 .cont-box li:last a', function(e){
			var keyNumber = '08';
			nextFocus(e,keyNumber);
		});
		$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-08"]').focus(function(){
			var keyNumber = '08';
			acdFocus($(this),keyNumber);
		});

		$(document).on('keydown', '.navtray-w-08 .cont-box li:last a', function(e){
			var nowHref = window.location.href;
			$('.navtray-w').removeClass('navtray-w-visible');
			location.href = nowHref+'#tmpl_content'
		});

		$('#tmpl_globalNavi li .nav-li-link').on('click',function(e){
			if(window.matchMedia('(max-width:640px)').matches){
				e.preventDefault();
			}
		});

		function acdFocus(t,num){
			var dataClass = t.attr('data-target');
			menuDown(t);
			$(document).on('keydown', '#tmpl_globalNavi .nav-li a[data-target="navtray-w-'+num+'"]', function(e) {
				if(e.keyCode == 9) {
					e.preventDefault();
					$('.'+dataClass).find('.cont-box dt').children('a').focus();
				}
			});
		}
		function nextFocus(e,num){
			if(e.keyCode == 9) {
				e.preventDefault();
				$('.navtray-w').removeClass('navtray-w-visible');
				$('.navtray-w-'+num).addClass('navtray-w-visible');
				$('#tmpl_globalNavi .nav-li a[data-target="navtray-w-'+num+'"]').focus();
			}
		}


		function menuDown(t){
			var target = t.data('target');
			$("."+ target).addClass('navtray-w-visible');
		};
		function menuUp(t){
			$('.navtray-w').removeClass('navtray-w-visible');
		};

		$('.tmpl_img_over').on('mouseover',function(){
			$(this).attr('src',$(this).attr('src').replace('.png','_on.png'));
		});
		$('.tmpl_img_over').on('mouseout',function(){
			$(this).attr('src',$(this).attr('src').replace('_on.png','.png'));
		});

		$('div.navtray-w dl dt').click(function(){
			location.href = $(this).children().attr('href');
		});
		$('div.navtray-w dl dt').on('mouseover',function(){
			$(this).addClass('is_hover');
		});
		$('div.navtray-w dl dt').on('mouseout',function(){
			$(this).removeClass('is_hover');
		});

	});
})(jQuery);
/********/
