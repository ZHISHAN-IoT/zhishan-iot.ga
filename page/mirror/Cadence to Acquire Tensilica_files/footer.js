define(['jquery', 'cadence', 'bootstrap'], function ($) {

// open modal
window.open_modal = function(id){
jQuery(id).modal('show');
   // $('#cdn-nxtgn-modal').modal('show');
}


// need to check if works fine otherwise need to remove
function zoomDisable(){
  $('head meta[name=viewport]').remove();
  $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />');
}
function zoomEnable(){
  $('head meta[name=viewport]').remove();
  $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />');
}

function bannersize(){
    //modal popup adding 15px etra width to the sticky
    var orient = ($(window).width() == 1024) ? "landscape" : "portrait";
    if (navigator.userAgent.match(/iPad/i) != true && orient == "landscape"){
		$('.topfixedHeaderBanner').removeAttr( 'style' ).css('position','absolute');

    }else{
		$(".topfixedHeaderBanner").removeAttr( 'style' );
    }
    //banner resize
	if ( window.innerWidth <= 520){
        var biggestHeight = 0;
        $this = $(".global-page-header .bannerinfo");
        if($this.length){
            var fullheight = $this.outerHeight() + 108;//$(".global-page-header").height(0).outerHeight();//$this.position().top ;
        if ( fullheight > 0 ){ 
        	$(".global-page-header").height(fullheight);
        	$(".global-page-header .header-left").height(fullheight);  
        }
        }
        if($('#bannerinfoCenter').size()<=0 ){
        	$this.wrapInner( "<div id='bannerinfoCenter'></div>" );
        }
    }else{ $(".global-page-header, .global-page-header .header-left").removeAttr("style"); }

	/*if (navigator.userAgent.indexOf('Chrome') >= 0){
	//Owl Carousel transform font fix
		if($('.owl-carousel ').size() > 0){
		    var html="<style>@media all and (transform-3d), (-webkit-transform-3d) {"+
		    " .generic-list-navigation .product-nav .owl-wrapper {"+$('.owl-wrapper-outer .owl-wrapper').attr('style')+"}}</style>"
		    $('body').append(html);
		    $('.owl-wrapper-outer .owl-wrapper').removeAttr('style'); 
		}
	}*/

}
function mobileMenuSticky(){
    $('ul.cdn-nxtgn-menu.mobile').css('overflow-y', 'auto');
    $('ul.cdn-nxtgn-menu.mobile').css('overflow-x', 'hidden');
    $( "ul.cdn-nxtgn-menu.mobile" ).css( "height", function() {
        return $( window ).height();
    });
}
$(document).ready(function(){

	$("body").removeAttr( 'style' );
	var delay = 100;
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	// Clone desktop menu and prepare the mobile menu
	// $('ul.cdn-nxtgn-menu').addClass('desktop').clone().insertAfter('ul.cdn-nxtgn-menu').addClass('mobile').removeClass('desktop');
	// $('#cdn-nxtgn-search').addClass('desktop').clone().insertAfter('#cdn-nxtgn-search').addClass('mobile').removeClass('desktop');
  	// Clone desktop menu and prepare the mobile menu if didnt work please
	// revert back
	var startsupport = 4;
    var totalsupport = $('ul.cdn-nxtgn-menu.desktop li.support ul.sub-menu > li').length; 
	while (totalsupport >= startsupport) {
        $('ul.cdn-nxtgn-menu.desktop li.support ul.sub-menu > li:nth-child('+totalsupport+')').addClass('trainingmenu');
		totalsupport--;
	}
	$('ul.cdn-nxtgn-menu.desktop').clone().insertAfter('ul.cdn-nxtgn-menu').addClass('mobile').removeClass('desktop');
	$('#cdn-nxtgn-search').addClass('desktop').clone().insertAfter('#cdn-nxtgn-search').addClass('mobile').removeClass('desktop');
// Adding class for mobilemenu
		if($('.page_home_nextgen').length > 0){
			$('.page_home_nextgen').find('#mainBody').addClass('page-header-wrapper');
        }
		
	// great place to work
		$('.columContainer.cont-one form, .cont-two .parbase.section.textimage_advanced').remove();
		$('#footer-nexgen-menu .footer-contact, #footer-nexgen-menu .footer-company').removeClass('col-md-6').addClass('col-md-5');
		$('#footer-nexgen-menu .promocode, #footer-nexgen-menu .footer-subscribe').removeClass('col-md-6').addClass('col-md-7');
		//$('#footer-nexgen-menu .txtimgLeftCol').addClass('hidden-xs');
	    $("#footer-nexgen-menu #txtImgOuterDiv").css("display","inline-block");
		
    // IE-11/10
    $(function(){
        if(navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/MSIE 10/)){
            $('header ul.cdn-nxtgn-menu.desktop ul li').css('list-style-image','url(data:0)');
        }
     });

// remove unnecesary list from the mobile menu
// $('ul.cdn-nxtgn-menu.mobile li.media.share').remove();
	$('ul.cdn-nxtgn-menu.mobile li.media.search').remove();
	$('ul.cdn-nxtgn-menu.mobile > li').each(function(){
		if( $('ul.sub-menu', this).hasClass('normal') ){
			var overviewTitle = $('> a', this).text() + " Overview";
			var overviewLink = $('ul.sub-menu.normal  > li div.sub-menu2 div.menu-description p.summary-links a:first-child', this).attr('href');
			$('ul.sub-menu', this).prepend('<li><a href="'+overviewLink+'">'+overviewTitle+'</a></li>');
			$('ul.sub-menu li:nth-child(2)', this).remove();
			$('ul.sub-menu', this).removeClass('normal');
		}
		$('div.sub-menu2', this).remove();
		$('ul li:empty').remove();
		$('ul.sub-menu', this).removeClass('normal');
	});
	$('ul.cdn-nxtgn-menu.mobile li.media.start figure').remove();
	$('ul.cdn-nxtgn-menu.mobile li.media.start ul.loggedlist li:first-child').remove();
	$('ul.cdn-nxtgn-menu.mobile li#contactUs figure').remove();
	$('ul.cdn-nxtgn-menu.mobile li.media.share figure').remove();
	$('ul.cdn-nxtgn-menu.mobile li ul.sub-menu.supportmenu li:first-child').remove();
	$('ul.cdn-nxtgn-menu.mobile li ul.sub-menu.trainingmenu li:first-child').remove();
	$('ul.cdn-nxtgn-menu.mobile li.support ul.sub-menu li.trainingmenu').remove();
	$('ul.cdn-nxtgn-menu.mobile li.support ul.sub-menu li:last-child a div.noindex').html('Training');
	$("ul.cdn-nxtgn-menu.mobile").prepend("<li class='searchMobile'></li>");
	$('#cdn-nxtgn-search.mobile').clone().removeClass('desktop mobile').appendTo("ul.cdn-nxtgn-menu.mobile li.searchMobile");
	// banner info
	$('.bannerinfo').parent().addClass('mobile_banner');
	//sticky('header');
	newsletterSubscriptionMsg();
	$('header.original nav a').unbind();
// MENU MOBILE VERSION
/*
	function loggedmobile(){
		$('ul.cdn-nxtgn-menu.mobile li.start').addClass('logged');
		// $('ul.cdn-nxtgn-menu.mobile li.logged > a').text('Hi Suzie');
		$this = $('ul.cdn-nxtgn-menu.mobile li.start.logged');
		//$this.on("touchstart click", function() {
			swapLogged();
		//});
        $('ul.loggedlist', $this).parent().toggleClass('active');
        $('ul.cdn-nxtgn-menu.mobile > li:not(.media.start)').removeClass('active');
	};
	/*
	 * CDNCOM 2263: Added method to display the alert if news letter
	 * subscription is true - Starts
	 */

	function alignModal(){
		var modalDialog = $(this).find(".modal-dialog");
		/* Applying the top margin on modal dialog to align it vertically center */
		modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
	}
	function newsletterSubscriptionMsg(){
		var regexS = "[\\?&]isSubscriptionSuccess=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.search);
		if ((results != null) && (results[1]=='true')) {
			$(".modal").on("shown.bs.modal", alignModal);
			$("#myNewSubscriptionModal").modal();
		}
	};

	/*
	 * CDNCOM 2263: Added method to display the alert if news letter
	 * subscription is true - Ends
	 */


	$('ul.cdn-nxtgn-menu.mobile > li:not(:first-child):not(#contactUs):not(.media.start)').click(function(e){
		if (!$(this).hasClass('active')){
			$(this).prev().toggleClass('removeborder');
			$('ul.cdn-nxtgn-menu.mobile li').removeClass('active');
		}
		$('ul.cdn-nxtgn-menu.mobile li').removeClass('removeborder');
		$(this).prev().toggleClass('removeborder');
		$(this).toggleClass('active');
	});

	$('ul.cdn-nxtgn-menu.mobile li#contactUs').on( 'touchstart click', function(e) {
		e.preventDefault();
		$('#cdn-nxtgn-modal').modal('show');
		$( 'header.cloned .mobileMenu' ).trigger('click');
	});

	$('ul.cdn-nxtgn-menu.mobile li.media.share').on( 'touchstart click', function(e) {
		e.preventDefault();
		$('#cdn-nxtgn-modal-share').modal('show');
		$( 'header.cloned .mobileMenu' ).trigger('click');
	});

	$('ul.cdn-nxtgn-menu.mobile li.start').on( 'touchstart click', function(e) {
		e.preventDefault();
		loggedmobile();
	});

	$('ul.cdn-nxtgn-menu.desktop li.title').click(function(e){
		e.preventDefault(); 
        e.stopPropagation();
	});
	$('ul.cdn-nxtgn-menu.desktop div.second-menu .h1').click(function(e){
		e.preventDefault(); 
    	e.stopPropagation();
	});

	$('.showprod').click(function(e){
		e.preventDefault();
		$('.links-right').toggleClass('hidden-xs');
	});

	$( '.mobileMenu' ).on( 'touchstart click', function(e) {
		e.preventDefault();
		$('ul.cdn-nxtgn-menu.mobile li.media.start figure').ready(function() {
             $('ul.cdn-nxtgn-menu.mobile li.media.start').css("display", "none");
       		 $('ul.cdn-nxtgn-menu.mobile li.media.start figure').remove();
             $('ul.cdn-nxtgn-menu.mobile li.media.start').css("display", "block");
             //$('ul.cdn-nxtgn-menu.mobile li.media.start ul.loggedlist li:first-child').remove();
             $('.username').remove();
        });
		var completeHeight = $('body').height();
		// $('ul.cdn-nxtgn-menu.mobile').css('overflow', 'visible');
		mobileMenuSticky();
		if ( $('.mobileSearch').hasClass('active') ){
			$('nav > #cdn-nxtgn-search').remove("fromMobile");
			$('nav > #cdn-nxtgn-search').hide();
			$('.mobileSearch').toggleClass('active');


		}

		$('ul.cdn-nxtgn-menu.mobile li').removeClass('active');
		var $body = $( 'body' ),
		$page = $( '.page-header-wrapper' ),
		$menu = $( 'ul.cdn-nxtgn-menu.mobile' ),

		/* Cross browser support for CSS "transition end" event */
		transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

        var $pageContent = $( '.cdn-nxtgn-body' );

		/* When the toggle menu link is clicked, animation starts */
		$body.addClass( 'animating' );

		/***********************************************************************
		 * Determine the direction of the animation and add the correct
		 * direction class depending on whether the menu was already visible.
		 */
		if ( $body.hasClass( 'menu-visible' ) ) {
			$body.addClass( 'right' );
		} else {
			$body.addClass( 'left' );
		}

		/***********************************************************************
		 * When the animation (technically a CSS transition) has finished,
		 * remove all animating classes and either add or remove the
		 * "menu-visible" class depending whether it was visible or not
		 * previously.
		 */
		$page.on( transitionEnd, function() {
			$body
			.removeClass( 'animating left right' )
			.toggleClass( 'menu-visible' );
			$page.off( transitionEnd );
		}).find('#mainBanner .carousel.slide').children().on(transitionEnd, function(){
             return false;
         });
        if($('.page_home_nextgen').length <= 0){
			$pageContent.on( transitionEnd, function() {
				$body
				.removeClass( 'animating left right' )
				.toggleClass( 'menu-visible' );
				$pageContent.off( transitionEnd );
			}).find('#videos').children().on(transitionEnd, function(){
             	return false;
         	});
        }
	});

	$('.mobileSearch').click(function(e) {
		e.preventDefault();
		if ( $(this).hasClass('active')   ){
			$('nav > #cdn-nxtgn-search.mobile').remove("fromMobile");
			$('nav > #cdn-nxtgn-search.mobile').hide();
		}else{
			$('nav > #cdn-nxtgn-search.mobile').addClass("fromMobile");
			$('nav > #cdn-nxtgn-search.mobile').show();
			setTimeout(function(){ $('.search-main').find('input[type="search"]').focus(); }, 10);
		}
		$('nav .mobileSearch').toggleClass('active');

	});





// MENU DESKTOP VERSION
	$('ul.cdn-nxtgn-menu.desktop > li').first().hover(function(){
		$('.sub-menu > li', this).removeClass('active');
		$('.sub-menu2', this).hide();
	});

	$("ul.cdn-nxtgn-menu.desktop > li:nth-child(5)").hover(function(){
		$('.sub-menu > li', this).removeClass('active');
		$('.sub-menu2', this).hide();
		$("ul.sub-menu", this).css('margin-left','-20px');
	});

	$("ul.cdn-nxtgn-menu.desktop > li:nth-child(6)").hover(function(){
		$('.sub-menu > li', this).removeClass('active');
		$('.sub-menu2', this).hide();
		$("ul.sub-menu", this).css('margin-left','-20px');
	});
	$("ul.cdn-nxtgn-menu.desktop > li:nth-child(7)").hover(function(){
		if ( $('body').attr('lang') == 'zh_cn' || $('body').attr('lang') == 'zh_tw'){
			$("ul.sub-menu", this).css('margin-left','-78px');
		} 		
	});



	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu > li').hover(function () {
		var $this = $(this);
        $('header nav ul.cdn-nxtgn-menu.desktop > li.support ul.sub-menu > li:nth-child(3)').unbind();
		var timer = window.setTimeout(function () {
			$this.data('timerid', null);
			$('ul.cdn-nxtgn-menu.desktop .sub-menu > li').removeClass('active');
			$this.addClass('active');
			$('.sub-menu3-level3 li', $this).removeClass('active');
			supportspace = 0;
			var parentli = $this.parent().closest("ul").prev();
			var value = $(parentli).text();
			if ($this.parent().parent().hasClass('support')){
				if ( $('body').attr('lang') == 'zh_cn'  || $('body').attr('lang') == 'zh_tw' ){
					$("ul.cdn-nxtgn-menu.desktop > li.support > ul.sub-menu").css('margin-left','-393px');
				} else {
					$("ul.cdn-nxtgn-menu.desktop > li.support > ul.sub-menu").css('margin-left','-364px');	
				}
                supportspace = 1;
			}
			if($this.parent().parent().hasClass('community')){
				if ( $('body').attr('lang') == 'zh_cn'  || $('body').attr('lang') == 'zh_tw' ){
					$("ul.cdn-nxtgn-menu.desktop > li.community > ul.sub-menu").css('margin-left','-525px');
				} else {
					$("ul.cdn-nxtgn-menu.desktop > li.community > ul.sub-menu").css('margin-left','-466px');
				}	
			}



			$('div.sub-menu2').hide();
			var numberLi = $this.index();
            var top = 15;
			var topTitle = 0;
            if (numberLi <= 0){
				top = '-' + top + 'px';
            }
            else {
                top = 0;
                while ((numberLi-1) >= 0) {
					top += parseInt($('> li', $this.parent(3)).eq(numberLi-1).outerHeight( true ));
                	numberLi--;
                }
                top = '-' + top + 'px';
            }
			$('div.sub-menu2', $this).css('top', top);
			$('div.sub-menu2', $this).show();
			// IE-11/10
	        if(navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/MSIE 10/)){
	           $('ul.default', $this).parent().css('display','list-item ');
	        }else{
				$('ul.default', $this).parent().css('display','block');
	        }

			// if ( !$this.hasClass('doneprocess') ){
			if ( $('.sub-menu2 .second-menu .h1', $this).text() == "" ){
				$('div.sub-menu2 div.second-menu .h1', $this).css("padding-top", "5px");
				topTitle = 15;
				if ( navigator.userAgent.indexOf('Firefox') >= 0  && $this.parent().parent().hasClass('support')){
					topTitle = 13;
                }
				if( !$('ul.sub-menu3-level4 li:first-child', $this).hasClass('title')  ){
					$('ul.sub-menu3-level4', $this).prepend('<li class="title" style="padding-top:6px"></li>');
				}
			}else{
				topTitle = 46;
			}



			var lastLi = $('ul.default', $this).parent().outerHeight( true );  // last li with borders
			var counter = 0;
			var toplvl4 = 0;
			var temporalfullheight = 0;
			var total = $('.sub-menu3-level3 > li', $this).length;

			$('.sub-menu3-level3 > li', $this).each(function(){

				if (counter == 0) {
					toplvl4 = '-' + topTitle + 'px';
				}else{
					var i = counter;
					var toplvl = 0;
					while (i > 0) {
						liHeight = parseInt($('.sub-menu3-level3 > li', $this).eq(i-1).outerHeight( true ));
						toplvl = liHeight + toplvl;
						i--;
					}
					temporalfullheight = toplvl + topTitle;
					toplvl4 = '-'+(toplvl + topTitle)+'px';
				}

				if (counter == (total -1) ){
					var notlast = $(this).prev().position();
					var last = $(this).position();
					var spacebottom = last.top - notlast.top;
					$('.cdn-nxtgn-menu .sub-menu ul.default').css('display', 'block');
					if (spacebottom > (lastLi-1)) {
						spacebottom -= (lastLi-1);
						var toplvl4 = '-' + (temporalfullheight + spacebottom + 1) + 'px';
					}else{
						var toplvl4 = '-' + (temporalfullheight + 1) + 'px';
					}
				}else{
					$('.cdn-nxtgn-menu .sub-menu ul.default').css('display', 'none');
				}
				$('.sub-menu3-level4', $this).eq(counter).css('top', toplvl4);


				 if ( $this.parent().parent().hasClass('support')){

				 	
                     $('ul.cdn-nxtgn-menu.desktop li.support ul.sub-menu > li:nth-child(2) ul.sub-menu3-level3  ul.sub-menu3-level4 li.title').css({'padding':'0', 'padding-top': '0'});
                     $('ul.cdn-nxtgn-menu.desktop li.support ul.sub-menu > li:nth-child(1) ul.sub-menu3-level3  ul.sub-menu3-level4 li.title').css({'padding':'0', 'padding-top': '0'});
				 	
                     if ( navigator.userAgent.indexOf('Firefox') >= 0){
                         //console.log(toplvl4);
                        if(toplvl4=='-232px')
                           $('.sub-menu3-level4', $this).eq(counter).css('top', -230);

                        if(toplvl4=='-340.0000305175781px')
	                		$('.sub-menu3-level4', $this).eq(counter).css('top', -338);
                     }

                    if ( navigator.userAgent.indexOf('Chrome') >= 0){

                        if(toplvl4=='-233px')
                           $('.sub-menu3-level4', $this).eq(counter).css('top', -234);

                        if(toplvl4=='-269px')
                           $('.sub-menu3-level4', $this).eq(counter).css('top', -270);
                     }

                    if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){

						 if(toplvl4=='-232px')
                           $('.sub-menu3-level4', $this).eq(counter).css('top', -228);

                         if(toplvl4=='-340.0000305175781px')
                           $('.sub-menu3-level4', $this).eq(counter).css('top', -340);
                     }
               }

				 if ( $this.parent().parent().hasClass('tools')){
                    //console.log(toplvl4);
					 if ( navigator.userAgent.indexOf('Chrome') >= 0){
                         if(toplvl4=='-383px')
	                		$('.sub-menu3-level4', $this).eq(counter).css('top', -403);

                        if(toplvl4=='-407px')
	                		$('.sub-menu3-level4', $this).eq(counter).css('top', -403);
                    }
                    if ( navigator.userAgent.indexOf('Firefox') >= 0){
						if(toplvl4=='-407px')
	                		$('.sub-menu3-level4', $this).eq(counter).css('top', -403);

                       if(toplvl4=='-383.0000305175781px')
	                		$('.sub-menu3-level4', $this).eq(counter).css('top', -403);
                    }
                    if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
                        //console.log(toplvl4);
                        if(toplvl4=='-407px')
	                		$('.sub-menu3-level4', $this).eq(counter).css('top', -403);

                        if(toplvl4=='-383px')
                            $('.sub-menu3-level4', $this).eq(counter).css('top', -403);
                    }
               }

				counter ++;
			});
			$this.addClass('doneprocess');



			// }//doneprocess


			if ( $this.parent().parent().hasClass('support')){

                $('.second-menu > ul.sub-menu3-level3', $this).css('min-height', '425px');
                if ( navigator.userAgent.indexOf('Firefox') >= 0){
   					 $('.second-menu > ul.sub-menu3-level3', $this).css('min-height', '425px');
				}
                if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
					$('.second-menu > ul.sub-menu3-level3', $this).css('min-height', '429px');
                }

				//$('ul.sub-menu3-level3 li:last-child ul.default li:first-child', $this).css('display','none');
				//$('ul.sub-menu3-level3 li:last-child ul.default li:last-child',$this).css('border','none');
			};

			if($this.parent().parent().hasClass('community')){
			    if ( navigator.userAgent.indexOf('Firefox') >= 0){
			     	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "554px");
			    }
			     if ( navigator.userAgent.indexOf('Chrome') >= 0){
			     	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "552px");
			    }
			     if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
	   					/* Microsoft Internet Explorer detected in. */
						$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "552px");
					}
			}

			 if ( $this.parent().parent().hasClass('support')){
			      if ( navigator.userAgent.indexOf('Firefox') >= 0){
			     	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "551px");
			    }
			     if ( navigator.userAgent.indexOf('Chrome') >= 0){
			     	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "547px");
			    }
			     if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
						$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "551px");
					}
			}

			if($this.parent().parent().hasClass('tools')){
			    if ( navigator.userAgent.indexOf('Firefox') >= 0){
			     	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "550px");
			    }
			     if ( navigator.userAgent.indexOf('Chrome') >= 0){
			     	$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "547px");
			    }
			     if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
	   					/* Microsoft Internet Explorer detected in. */
						$('ul.cdn-nxtgn-menu.desktop ul.sub-menu').css("height", "547px");
					}
			}


			$('ul.default',$this).show();
			$("ul.normal li div.sub-menu2").css('display','block');
		}, 200);
		$this.data('timerid', timer);
	}, function () {
		var timerid = $(this).data('timerid');
		if (timerid != null) {
			window.clearTimeout(timerid);
		}
	});

	$('ul.cdn-nxtgn-menu.desktop .sub-menu3-level3 > li').hover(function(){
		var $this2 = $(this);
		var timer2 = window.setTimeout(function () {
			$this2.data('timerid', null);
			$('.sub-menu3-level3 > li').removeClass('active');
			var total = $this2.parent().children('li').length;
			$this2.addClass('active');
			if ( $this2.is(':last-child') ){
				$('.cdn-nxtgn-menu .sub-menu ul.default').css('display', 'block');
			}else{
				$('.cdn-nxtgn-menu .sub-menu ul.default').css('display', 'none');
			}
		}, 250);
		$this2.data('timerid', timer2);
	}, function () {
		var timerid = $(this).data('timerid');
		if (timerid != null) {
			window.clearTimeout(timerid);
		}
	});



	$("ul.cdn-nxtgn-menu.desktop .summary-links a:not(:last-child)").append("<span class='divider'> | </span>");
	$("ul.cdn-nxtgn-menu.desktop ul.normal li div.sub-menu2").css('display','block');




	$('#contactUs').click(function(){
		$('#cdn-nxtgn-modal').modal('show');
	});

	$('li.media.share').click(function(){
		$('#cdn-nxtgn-modal-share').modal('show');
	});

	$(".cdn-nxtgn-modal div.modal-body .dropdown").on('click', function(event){
		$("dd ul", this).toggle();
		return false;
	});

	$(".cdn-nxtgn-modal .dropdown dd ul li a").click(function() {
		var text = $(this).html();
		var root = $(this).closest("dl");
		$("dt a span", root).html(text);
		$("dd ul", root).hide();
		return false;
		// getSelectedValue("typeof")); GET THE VALUE
	});

	function getSelectedValue(id) {
		return $("#" + id).find("dt a span.value").html();
	}

	var swapLogged = function () {
		var $this = $('ul.cdn-nxtgn-menu.desktop >li.media.start.logged').find('img');
		var newSource = $this.data('alt-src');
		$this.data('alt-src', $this.attr('src'));
		$this.attr('src', newSource);
	}


	function logged(){
		$this = $('ul.cdn-nxtgn-menu.desktop > li.media.start')
		$this.addClass('logged');
		var img = $this.find('img').attr("src");
		var fileExt = img.split('.').pop();
		var fileName = img.substr(0, img.lastIndexOf('.')) + "on";
		$this.find('img').attr("src", fileName + "." + fileExt);
		$this.on("mouseenter", function() {
			swapLogged();
			$('ul.loggedlist', $this).show();
		});
		$this.on("mouseleave", function() {
			swapLogged();
			$('ul.loggedlist', $this).hide();
		});
	};


	if ($('div.info').length > 0){
		size_li = $('div.info .element').size();
		x=3;
		$('div.info .element:lt('+x+')').show();
		$('a.showmore').click(function (event) {
			event.preventDefault();
			x= (x+5 <= size_li) ? x+5 : size_li;
			$('div.info .element:lt('+x+')').show();
			if(x == size_li){
				$('a.showless').show();
				$('a.showmore').hide();
			}
		});
		$('.showless').click(function (event) {
			event.preventDefault();
			x=(x-2<0) ? 3 : x-2;
			$('div.info .element').not(':lt('+x+')').hide();
			if (x <= 3){
				$('a.showless').hide();
				$('a.showmore').show();
			}
		});
	};


	if ($('#accordion-normal').length > 0){
		$('#accordion-normal > ul > li p').click(function(){
			if($(this).siblings('div').is(':visible')){
				$(this).siblings('div').slideUp( "fast" );
				$(this).removeClass('active');
			}else{
				$('div.accordion').slideUp( "fast" );
				$('#accordion-normal > ul > li p').removeClass('active');
				$(this).siblings('div').slideDown( "fast" );
				$(this).addClass('active');
			}
		});
		$('#accordion-normal > ul > li.products p').unbind( "click" );

		$('#accordion-normal > ul > li.products p').click(function(event){
			event.preventDefault();
			$(".info").empty();
			$(this).next("div").children().clone().appendTo(".info");
			scrollToAnchor('infoContainer');
		});

		$('#accordion-normal > ul > li:first-child p').trigger('click');
	}

	if ($('#title-menu').length > 0){
		// $('#title-menu').addClass('original').clone().insertAfter('#title-menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
		$('#title-menu ul li:first-child').addClass('active');
		$('#title-menu ul li').click(function (event){
			event.preventDefault();
			var getli = $(this).index();
			if(!$(this).hasClass('active')){
				$this = $(this).find('img');
				var newSource = $this.data('alt-src');
				$this.data('alt-src', $this.attr('src'));
				$this.attr('src', newSource);
				$('#title-menu ul li').removeClass('active');
				$('#title-menu.cloned ul li').removeClass('active');
				$('#title-menu ul li').eq(getli).addClass('active');
				$('#title-menu.cloned ul li').eq(getli).addClass('active');
			}
			var goto = $(this).find('a').attr("href").replace("#", "");
			scrollToAnchor(goto);
		});


		var sourceSwap = function () {
			if(!$(this).hasClass('active')){
				var $this = $(this).children(2).children().children();
				var newSource = $this.data('alt-src');
				$this.data('alt-src', $this.attr('src'));
				$this.attr('src', newSource);
			}
		}


		$('#title-menu ul li').hover(sourceSwap, sourceSwap);


	};


// Create Sticky Menu
function sticky (element){
	$(element).addClass('original').clone().insertAfter(element).addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
	 //CDNCOM-2542
	 if($(window).width()>1024){
		$(window).scroll(function(){
			var orgElementPos = $(element).offset();
			orgElementTop = 64;
			if ($(window).scrollTop() >= (orgElementTop)) {
				orgElement = $('.original');
				coordsOrgElement = orgElement.offset();
				leftOrgElement = coordsOrgElement.left;
				widthOrgElement = orgElement.css('width');
				if ( window.innerWidth >= 769 && window.innerWidth <= 1200 && isiPad == true){
					$(element+'.cloned').css('left',leftOrgElement+'px').css('top',0).hide();
					$(element+'.original').css('visibility','hidden'); $('.original').css('position','relative');
					$('#cdn-nxtgn-title-menu.ribbonCloned').css('display','none');
					$('#cdn-nxtgn-title-menu.ribbonOriginal').css('display','block');
				}else{
					$(element+'.cloned').css('left',leftOrgElement+'px').css('top',0).show(); $('.original').css('visibility','visible');
					$(element+'.original').css('position','static');
				}
			}
			else{
				$(element+'.cloned').hide(); $(element+'.original').css('visibility','visible'); $(element+'.original').css('position','static');
			}
		});
	}
}


function ipadvideofix() {
	var orient = ($(window).width() == 1024) ? "landscape" : "portrait";
	if (navigator.userAgent.match(/iPad/i) == true & orient == "portrait"){
	 	$('#cdn-nxtgn-videosCarousel div.item div:nth-child(2) a figure').css('width', '100.5%');
	}else{
	 	$('#cdn-nxtgn-videosCarousel div.item div:nth-child(2) a figure').css('width', '100%');
	}
}


// // Complete interactive accordion, NOT IN USE FOR NOW ***DO NOT DELETE IN
// CASE WE USE IT LATER***
// $('.interactive-accordion ul li div.accordion a').click(function(event){
// event.preventDefault();
// $(".viewcontent").empty();
// $(this).next("div").clone().appendTo(".viewcontent");
// $('.viewcontent p.viewparagraph').hide();
// $('<a class="showmore" href="#">More [+]</a>"').appendTo(".viewcontent");
// size_li = $('.viewcontent p.viewparagraph').size();
// x=3;
// $('.viewcontent p.viewparagraph:lt('+x+')').show();
// $('a.showmore').click(function (event) {
// event.preventDefault();
// x= (x+5 <= size_li) ? x+5 : size_li;
// $('.viewcontent p.viewparagraph:lt('+x+')').show();
// if(x == size_li){
// $('a.showmore').hide();
// }
// });
// })


//Community
 $( ".search-main .clearable" ).on( "keydown", function( event ) {
     if(event.which == 13){
         $(this).siblings("a").click();
     }
 });

	//Community
 $('a.submit.submitsearch').on('click',function(){

  var search = $(this).prev().val();
   if ( search == ""){
  	var search = $(this).prev().prev().val();
  	}
  	if(search==undefined){
       search="";
    }
  var url = $(this).parent().attr('action');
  if(navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/MSIE 10/)){
		search =  encodeURI(search);
   }
     window.location.href = url+'?k='+search;
    return false;
 });


// search
	$('ul.cdn-nxtgn-menu.desktop li.media.search').on('click',function(event){
		event.preventDefault();
		$("ul.cdn-nxtgn-menu.desktop").hide();
		$("nav #cdn-nxtgn-search.desktop").animate({width:'toggle', opacity:'toggle'},250);
		$('#cdn-nxtgn-search .search-main .clearable').focus();
	});

	$('nav #cdn-nxtgn-search.desktop .search_containter button.close').click(function(event){
		event.preventDefault();
		$("ul.cdn-nxtgn-menu.desktop").show();
		$("nav #cdn-nxtgn-search.desktop").animate({width:'toggle', opacity:'toggle'},250);

	});

	$('.cdn-nxtgn-modal #cdn-nxtgn-dd').on('click', function(event){
		$(this).toggleClass('active');
		return false;
	});


	$('.legal #cdn-nxtgn-dd').click( function(event){
		$(this).toggleClass('active');
	});
	$("#footer-nexgen-submenu #cdn-nxtgn-dd").on('click',function(event){
		if(event.target.attributes.href == undefined || event.target.attributes.hasOwnProperty('data-toggle')){
       	 	$('#footer-nexgen-submenu ul.nav li.dropdown ul.dropdown-menu').parent().toggleClass("open");
        	var worldwideHeight = $('#cdn-nxtgn-footer .navbar-nav > li > ul').height() + ($('#cdn-nxtgn-footer #footer-nexgen-submenu.footer-media .container ul>li ul.dropdown-menu .last a').height()-$('#cdn-nxtgn-footer #footer-nexgen-submenu.footer-media .container ul>li ul.dropdown-menu .first a').height()) -2 ;
       		 $('#cdn-nxtgn-footer .navbar-nav > li > ul').css({ top: '-'+worldwideHeight+'px' });
        	return false;
        }
    });
    $('#footer-nexgen-submenu #cdn-nxtgn-dd ul').mouseleave(function(){$('#cdn-nxtgn-dd').removeClass('open');});
		//contact-us and requestdemo close
    $(document.body).on('click', '.close, .close img' ,function(){
    	$('#State').parent().hide();
    	$('.mktoError').hide();
		$(".close, .close img").closest('.modal').find("input, textarea, select").val("");

    });
	$(document).on('touchstart click', function(e) {
		if(!$(e.target).closest('#cdn-nxtgn-dd').length) {
			$('#cdn-nxtgn-dd.wrapper-dropdown-1').removeClass('active');
			$('#cdn-nxtgn-dd').removeClass('open');
		}
		// $('#cdn-nxtgn-dd.wrapper-dropdown-1').removeClass('active');
		$('.cdn-nxtgn-modal .dropdown dd ul').hide();

		/*Global Contact-us Bootstrap dropdown menu hide.bs.dropdown not firing 
		thats why checking for class and  show.bs.dropdown
		Needs to remove once dropdown functionality fix.
		CDNCOM-3765
		*/
        if($(window).width() <= 1024){
            if( e.target.classList.contains('caret')||  e.target.classList.contains('filter-option') ||  e.target.classList.contains('dropdown_contact_us') ||  e.target.classList.contains('dropdown-toggle')){
				$('.dropdown-backdrop').remove();
            }
            $('.dropdown_contact_us').on('show.bs.dropdown', function () {
             	$('.dropdown-backdrop').remove();
            })
        }
	});

	$('.page-header-wrapper').on('touchstart click', function(e) {
		if ( $('body').hasClass('menu-visible') ){
			$('header .mobileMenu').trigger('click');
			return false;
		}
		if ( $('header .mobileSearch').hasClass('active') ){

			$(' header .mobileSearch').trigger('click');
		}
	})


    $('.cdn-nxtgn-body').on('touchstart click', function(e) {
		if ( $('body').hasClass('menu-visible') ){
			$('header .mobileMenu').trigger('click');
			return false;
		}
		if ( $('header .mobileSearch').hasClass('active') ){

			$(' header .mobileSearch').trigger('click');
		}
	})


	// Videos

if ( $('#videos').length > 0 ){
	$('#videos').each(function(){
		if ( $('#cdn-nxtgn-videosCarousel.carousel .item,.cdn-nxtgn-videosBannerCarousel .item', this).length <= 3 &&  $( window ).width() >= 736 ){
			$('#cdn-nxtgn-videosCarousel,div.cdn-nxtgn-videosBannerCarousel', this).carousel({ interval: false });
			$('#cdn-nxtgn-videosCarousel,div.cdn-nxtgn-videosBannerCarousel', this).addClass('homevideos');
		}else{
			$('#cdn-nxtgn-videosCarousel,div.cdn-nxtgn-videosBannerCarousel', this).carousel({ interval: 10000 });
		}
	});
	$('#cdn-nxtgn-videosCarousel.carousel .item,.cdn-nxtgn-videosBannerCarousel .item').each(function(){
		var next = $(this).next();
		if (!next.length){
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
		if (next.next().length>0){
			next.next().children(':first-child').clone().appendTo($(this));
		}else{
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
	ipadvideofix()
}




	if (navigator.userAgent.indexOf('Mozilla') !=-1){
		$('header ul.cdn-nxtgn-menu.desktop  li ul.sub-menu').css('margin-top','20px');
	}
// new changes by angel


	$('ul.cdn-nxtgn-menu.mobile > li').each(function(){
		$('> a', this).removeAttr("href");
	});
/*CDNCOM-4076 changes  start*/
	/*$('ul.cdn-nxtgn-menu.desktop > li').each(function(){
		$('> a', this).removeAttr("href");
	});


	$('ul.cdn-nxtgn-menu.desktop > li > ul.sub-menu > li').each(function(){
		if ( !$(this).hasClass('normal') ){
			if($('> a', this).hasClass('has-children')){
				$('> a', this).removeAttr("href");
			}
		}
	});*/

	/* CDNCOM-2522 changes starts 

	 $('ul.cdn-nxtgn-menu.desktop > li > ul.sub-menu > li > div.sub-menu2 > div.second-menu > ul.sub-menu3-level3 > li').each(function(){
		if ( !$(this).hasClass('normal') ){
			if($('> a', this).hasClass('has-children')){
				$('> a', this).removeAttr("href");
			}
		}
	});

	CDNCOM-2522 changes  ends*/
	/* CDNCOM-5726 -Start (Code commented) */
 /*   if ( window.innerWidth >= 1025){
        $('ul.cdn-nxtgn-menu.desktop > li > ul.sub-menu > li').children().not('div.sub-menu2 > div.second-menu > ul.sub-menu3-level3').on('click', function(){
            window.location.href = $(this).find('a:first').attr('href'); 
        });
        
        $('ul.cdn-nxtgn-menu.desktop > li > ul.sub-menu > li > div.sub-menu2 > div.second-menu > ul.sub-menu3-level3 > li').on('click', function(){
            window.location.href = $(this).find('a:first').attr('href'); 
        });
    } */
	/* CDNCOM-5726 -End (Code commented) */
    /*CDNCOM-4076 changes  ends*/
// ends here
// page Scroll to mainBody DIV
$('#getTop').fadeOut();
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $('#getTop').fadeIn();
    }else{
    	$('#getTop').fadeOut();
    }
});
function scrollToAnchor(aid, page){
	 aTag = $(aid);
	if(aTag.length){
		if (page != null && window.innerWidth <= 767){
			var scrollpos = aTag.offset().top - 30;
		}else {
			var scrollpos = aTag.offset().top - 100;
		}
		$('html').animate({scrollTop: scrollpos},'slow');
	}else if($(window).innerWidth() == 1280){
		$('html').animate({scrollTop: 0},'slow');
	}else{
		$('html').animate({scrollTop: $("#".aTag)},'slow');
	}
};
$('#getTop').on("touchstart click", function() {
	scrollToAnchor('mainBody');
	$('#cdn-nxtgn-title-menu ul li').removeClass('active');
	$('#cdn-nxtgn-title-menu ul li:first-child').addClass('active');
});
// Align modal when user resize the window
$(window).on("resize", function(){
	if($(window).width()>='1024'){
			$('body').removeClass('menu-visible');
		}

	$("#myNewSubscriptionModal.modal:visible").each(alignModal);
	$( "ul.cdn-nxtgn-menu.mobile" ).css( "height", function() {
		return $( window ).height();
	});
    bannersize();
    ipadvideofix();
    mobileMenuSticky();
});
if (navigator.userAgent.indexOf('Mozilla') !=-1){
	$('header ul.cdn-nxtgn-menu.desktop  li ul.sub-menu').css('margin-top','20px');
}

if ( navigator.userAgent.indexOf('Firefox') >= 0){
	$('ul.cdn-nxtgn-menu.desktop li ul.sub-menu').css({'margin-top': '18px','border-top': '3px solid #E31837'});
	$('ul.cdn-nxtgn-menu.desktop li ul.sub-menu.normal').css('margin-top', '18px');
	$('ul.cdn-nxtgn-menu.desktop ul.normal li div.sub-menu2').css('margin-top', '0px');
	$('header ul.cdn-nxtgn-menu.desktop .community ul.sub-menu, header ul.cdn-nxtgn-menu.desktop .tools ul.sub-menu').css('height', '554px');
	$('header ul.cdn-nxtgn-menu.desktop .support ul.sub-menu').css('height', '553px');
	$('.tools .menu-description').css('width','560px');
	$('ul.sub-menu3-level4.default div.testimonialsQuotes p').css('margin-bottom', '28.8');
}

if (navigator.userAgent.indexOf('Chrome') >= 0){
	$('ul.cdn-nxtgn-menu.desktop li ul.sub-menu').css('margin-top', '20px');
	$('ul.cdn-nxtgn-menu.desktop li ul.sub-menu.normal').css('margin-top', '20px');
	
	//Owl Carousel transform font fix
	/*$(document.body).on('click', '.owl-prev, .owl-next' ,function(){
		var html="<style>@media all and (transform-3d), (-webkit-transform-3d) {"+
		" .generic-list-navigation .product-nav .owl-wrapper {"+$('.owl-wrapper-outer .owl-wrapper').attr('style')+"}}</style>"
		$('body').append(html);
		$('.owl-wrapper-outer .owl-wrapper').removeAttr('style');
	});*/ 
}
if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
	$("header ul.cdn-nxtgn-menu.desktop .support ul.sub-menu > li ul.sub-menu3-level3 li ul.sub-menu3-level4").css("min-height", "444px");
}	
	/* Start : CDNCOM-4279 */
	$('header ul.cdn-nxtgn-menu.desktop ul.sub-menu li').each(function(){
        if(!$( this ).children().hasClass( "sub-menu2" )) {
            $(this).addClass('noChevron');
        }
     });
	 /* End : CDNCOM-4279 */
$(document).on('touchstart', 'input[type=text], textarea, select', function(){
    zoomDisable();
});
$(document).on('touchstart', 'input[type=text], textarea, select', function(){
    setTimeout(zoomEnable, 500);
});

if($('.generic-list-navigation').length){
  $('.bannerinfo').addClass('ribbonMargin');
}
/*CDNCOM-4833*/
$(document).on('shown.bs.modal', '.modal', function(){
    $("body").removeClass('menu-visible');
});
$(function() {
		var worldwideHeight = $('#cdn-nxtgn-footer .navbar-nav > li > ul').height() + 16;
         $('#cdn-nxtgn-footer .navbar-nav > li > ul').css({ top: '-'+worldwideHeight+'px' });
	 });
});// document ready
$( window ).load(function() {
	bannersize();
	mobileMenuSticky();
    $(function() {
    	if ($.cookie('vpath')) { 
            var assetPath = '/etc/clientlibs/cadence-www/modal.views.modal.html?assetType=video&assetPath=' + $.cookie("vpath");
            var vselector = $.cookie("vselector");
            $( vselector + "a[data-modal-content-url='" + assetPath + "']:first" ).trigger('click');
            $.removeCookie('vpath', {domain:'.cadence.com', path:'/'});
            $.removeCookie('vselector', {domain:'.cadence.com', path:'/'});
        }
    });

});
});