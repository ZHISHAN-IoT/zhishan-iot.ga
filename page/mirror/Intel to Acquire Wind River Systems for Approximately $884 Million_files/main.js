$(document).ready(function(){

    "use strict";

    secondNavigation();

    var noDevice;

    var windowHeight;

    var windowWidth;




    initScrolling();

    /*secondary navigation*/

    if($(".sn-content").length){
        var eTop = $('.sn-content').offset().top;

        //create the false object
        var objectEmpty = $("<div>").attr("id","empty_sec_nav");
        $(objectEmpty).height($('.sn-content').height());
        $(objectEmpty).addClass("section").addClass("no-padding");

    }
    function secondNavigation(){
        if(!$(".sn-content").length){
            return false;
        }

        var newTop = eTop - $(window).scrollTop();
        if(newTop < 0) {
            $(objectEmpty).insertBefore(".sn-content");
            $('.sn-content').addClass('sn-fixed');
        } else {
            $("#empty_sec_nav").remove();
            $('.sn-content').removeClass('sn-fixed');
        }
    }


    function windowResizeHandler() {

        windowHeight = window.innerHeight;

        windowWidth = $(window).width();

    }

    $(window).scroll(function() {
        secondNavigation();
    });


    windowResizeHandler();

    $(window).resize(function() {

        windowResizeHandler();

        if(windowWidth >= 992) {

            $('#nav').show();

            $('#top-nav').show();

        }

        secondNavigation();
        setTimeout(function(){ fix_tiles_height(); }, 100);

    });


    if(!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {

        $('body').addClass('no-touch');

        $('[data-toggle="tooltip"]').tooltip();

    }

    /*Window Pop-up*/
    var cboxOptionsPopUpWindowInline = {
          width: '95%',
          maxWidth: '1100px',
          inline:true
        }

    $("a[rel='popupWindowInline']").colorbox(cboxOptionsPopUpWindowInline);

     var cboxOptionsPopUpWindowIframe = {
          width: '95%',
          maxWidth: '1100px',
          iframe:true
        }

    $("a[rel='popupWindowIframe']").colorbox(cboxOptionsPopUpWindowIframe);
    /*Images popup*/
    $("a[rel='popupImage']").colorbox({maxWidth: "60%"});
    /*
    video popup
    */


    $('.home-tile').hover(
        function() {
            $(this).find('.caption-more').slideDown('fast');
        },
        function() {
            $(this).find('.caption-more').slideUp('fast');
        }
    );

    $('#top-search-handler').click(function() {

        if($(this).hasClass('active')) {

            $(this).removeClass('active');

            $('.search-wrapper').removeClass('active');

            $('#top-events-handler').show();

            $('#top-global-handler').show();

        } else {

            $(this).addClass('active');

            $('.search-wrapper').addClass('active');

            $('#top-global-handler').removeClass('active');
            $('#global-nav').hide();
            if(windowWidth < 767) {

                $('#top-events-handler').hide();

                $('#top-global-handler').hide();


            }

        }

    });

    $('#top-global-handler').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#global-nav').hide();
        } else {
            $(this).addClass('active');
            $('#global-nav').slideDown(300, 'easeInOutCubic');
            $('.search-wrapper').removeClass('active');
            $('#top-search-handler').removeClass('active');
        }
    });



    $('#top-nav-handler').click(function() {

        if($(this).hasClass('active')) {

            $(this).removeClass('active');

            $('#nav').slideUp(300, 'easeInOutCubic', function() {

                $('#top-nav').hide();

            });

        } else {

            $(this).addClass('active');

            $('#top-nav').show();

            $('#nav').slideDown(300, 'easeInOutCubic');

        }

    });



    $('#nav > ul > li > a').click(function() {

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('.back').hide();
            $(this).siblings('.big-nav').hide();
            $('#nav > ul > li > a').removeClass('nav-item-hidden');
        } else {
            $('#nav > ul > li > a').removeClass('active').addClass('nav-item-hidden');
            $('#nav > ul > li > a > .back').hide();
            $('.big-nav').hide();
            $(this).addClass('active').removeClass('nav-item-hidden');
            $(this).children('.back').show();
            $(this).siblings('.big-nav').slideDown(300, 'easeInOutCubic');
        }

        if ($('.big-nav').is(':visible')) {
            var elem = $(this);
            var offset = elem.offset();
            var offsetRight = windowWidth - offset.left;
            var navWidth = $(this).siblings('.big-nav').outerWidth();

            if(navWidth > offsetRight) {
                $(this).siblings('.big-nav').css('right', '0');
            }
        }

    });

    $(document).mouseup(function(e) {
        if(windowWidth >= 992) {
            var container = $(".big-nav");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
                //$('#nav > ul > li > a').removeClass('active').addClass('nav-item-hidden');
                $('#nav > ul > li > a').each(function(index, el) {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        $(this).children('.back').hide();
                        $(this).siblings('.big-nav').hide();
                        $('#nav > ul > li > a').removeClass('nav-item-hidden');
                    }
                });
            }
        }
    });





    function fix_tiles_height(){
        /*Tiles fix*/

        $("div.tile").each(function(){
            $(this).css('height',"auto");
        });

        $(".row.tiles").each(function(){

            if($(this).find("div.tile:has(div.tile)").length){
                var elementHeights = $(this).find(".tile > .tile").map(function() {
                    return $(this).height();
                  }).get();

                var maxHeight = Math.max.apply(null, elementHeights);
                $(this).find(".tile > .tile").height(maxHeight);
            }else{

                var elementHeights = $(this).find(".tile").map(function() {
                return $(this).height();
              }).get();

                var maxHeight = Math.max.apply(null, elementHeights);
                $(this).find(".tile").height(maxHeight);
          }
        })
    }

    setTimeout(function(){ fix_tiles_height(); }, 500);


    if($("a.home-tile").length){
        $('.no-touch a.home-tile').each(function() {

            $(this).hover(
              function() {
                $(this).find(".caption.hover").css("display","block");

                //width_ = $(this).find(".caption.hover").outerWidth();

                $(this).find(".caption.hover").css("left", "-"+$(this).find(".caption.hover").outerWidth() + "px");
                $(this).find(".caption.hover").stop().animate({left: "0"}, 400, "easeInOutCubic", function() {});
              }, function() {
               $(this).find(".caption.hover").stop().animate({left: "-" + $(this).find(".caption.hover").outerWidth() + "px"}, 400, "easeInOutCubic", function() {});
              }
            );


        });
    }


    if($("a.tile").length){
        $('.no-touch a.tile').each(function() {

            $(this).hover(
              function() {
                $(this).find(".caption.hover").css("display","block");

                //width_ = $(this).find(".caption.hover").outerWidth();

                $(this).find(".caption.hover").css("left", "-"+$(this).find(".caption.hover").outerWidth() + "px");
                $(this).find(".caption.hover").stop().animate({left: "0"}, 400, "easeInOutCubic", function() {});
              }, function() {
               $(this).find(".caption.hover").stop().animate({left: "-" + $(this).find(".caption.hover").outerWidth() + "px"}, 400, "easeInOutCubic", function() {});
              }
            );


        });
    }


    if($(".slider-sections").length){

        $('.slider-sections ul > li > a').each(function() {

            if($(this).hasClass('active')) {

                var content_rel = $(this).attr('rel');

                $('.hs-item').hide();

                $('#' + content_rel).show();

            }

            $(this).click(function() {



                content_rel = $(this).attr('rel');

                var text = $(this).text();

                ga('send', 'event', 'Sliders', 'Tab', text);

                $('.hs-dropdown .selected').html(text + '<span class="caret pull-right"></span>');

                $('.hs-item').hide();

                $('#' + content_rel).fadeIn(300, 'easeInOutCubic');


                $('.slider-sections > ul > li > a').removeClass('active');

                $("[rel='"+content_rel+"']").addClass('active');

                setTimeout(function(){ fix_tiles_height(); }, 300);

            });

        });

    }


    if($(".carousel-inner").length){

        $(".carousel-inner").swipe( {

            swipeLeft:function(event, direction, distance, duration, fingerCount) {

                ga('send', 'event', 'Sliders', 'Swipe', 'Next');

                $(this).parent().carousel('next');

            },

            swipeRight: function() {

                ga('send', 'event', 'Sliders', 'Swipe', 'Previous');

                $(this).parent().carousel('prev');

            }

        });
    }


     if($(".fp-icon").length){
        /* contact us */
        $('.fp-icon').click(function() {
            ga('send', 'event', 'Triggers', 'Slide', 'Contact us');
            $(this).parent('.fixed-phone').toggleClass('active');
        });
    }



    /*
    Apply slider content
    class: slider-content
    child: item-slider

    p: apply for each
    */
    if($(".slider-content").length){

        $('.slider-content').each(function(){


            var slider_this;
            var navWrapper;
            var slider;
            var itemWidth = 0;

            navWrapper = $(this).attr('data-nav');

           slider = $(this);
           itemWidth = $(this).find('ul > li').outerWidth();
           $(slider).flexslider({
                    animation: 'slide',
                    animationLoop: true,
                    slideshow: true,
                    directionNav: false,
                    controlNav: true,
                    itemMargin: 0,
                    video: false,
                    manualControls: "#"+navWrapper+" ul.bullets.slider-navigation > li",
                    useCSS: true,
                    itemWidth: itemWidth,
                     start: function(slider){
                        slider_this = slider;
                  },
                  after: function(slider){


                        $("#"+navWrapper+" ul.bullets.slider-navigation > li").each(function(index){

                            if(index == slider.currentSlide){

                                $(this).find("a").addClass("active");
                            }else{
                                $(this).find("a").removeClass("active");
                            }
                        })
                  }
            });



            $("#" + navWrapper).find('a.nav-arrow-left').click(function() {
                $(slider).flexslider('prev');
            });

            $("#" + navWrapper).find('a.nav-arrow-right').click(function() {
                $(slider).flexslider('next');
            });

        });
    }

    //scroll on click
    /*initScrollTo();
    $('#secondary-nav a[href*=#]:not([href=#])').click(function() {
        document.location.hash = $(this).attr("href");
        initScrollTo();
        return false;
    });*/

    /*$(function() {
      $('#secondary-nav a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            document.location.hash = $(this).attr("href");

            window.scroll(0,target.offset().top - 160);
            return false;
          }
        }
      });
    });*/



});

$(window).load(function(){
    if ($('.resource-tile-carousel-container').length) {

        setTimeout(function() {
          if ($( window ).width() > 1288) {
            resourceCarouselFullSize();
          }
          else if ($( window ).width() > 986 && $( window ).width() < 1289) {
            resourceCarouselTablet();
          }
          else if ($( window ).width() > 604 && $( window ).width() < 987) {
            resourceCarouselMobile();
          }
          else {
            resourceCarouselMobilePortrait();
          }
        }, 500);

        $(window).resize(function(event) {
          $('.resource-tile-carousel').slick('unslick');

          if ($( window ).width() > 1288) {
            resourceCarouselFullSize();
          }
          else if ($( window ).width() > 986 && $( window ).width() < 1289) {
            resourceCarouselTablet();
          }
          else if ($( window ).width() > 604 && $( window ).width() < 987) {
            resourceCarouselMobile();
          }
          else {
            resourceCarouselMobilePortrait();
          }
        });
    }
});

function resourceCarouselFullSize() {
  $('.resource-tile-carousel-controls').show();

  $('.resource-tile-carousel').each(function() {
        var _self = $(this);
        _self.slick({
            autoplay: true,
            autoplaySpeed: 7000,
            arrows: true,
            prevArrow: _self.parent().find(".resource-tile-carousel-controls .prev"),
            nextArrow: _self.parent().find(".resource-tile-carousel-controls .next"),
            dots: true,
            dotsClass: 'resource-tile-carousel-pagination',
            slidesToShow: 4,
            slidesToScroll: 4,
            variableWidth: false,
      });
  });


  $('.resource-tile-carousel').each(function() {
    var numResourceItems = $(this).find('.resource-item').length;
    if (numResourceItems < 5) {
      $(this).parent().find('.resource-tile-carousel-controls').hide();
    }
  });
}

function resourceCarouselTablet() {
  $('.resource-tile-carousel').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    dotsClass: 'resource-tile-carousel-pagination',
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
  });
}

function resourceCarouselMobile() {
  $('.resource-tile-carousel').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    dotsClass: 'resource-tile-carousel-pagination',
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: false,
  });
}

function resourceCarouselMobilePortrait() {
  $('.resource-tile-carousel').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    dotsClass: 'resource-tile-carousel-pagination',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
  });
}


function initScrollTo(hash_){

        /* if (location.hash) {
            window.scrollTo(0, 0);
        }
        target = $(hash_);
        if(target.length){
            var y_pos = $(target).offset().top;
            if($(".sn-content").hasClass("sn-fixed")){
                var scrollToY = Math.floor(y_pos - ($(".sn-content.sn-fixed").height()) - 60);
            }else{
                var scrollToY = Math.floor(y_pos - ($(".sn-content").height()*2));
            }

            window.scroll(0,scrollToY);
        }*/

        setTimeout(function(){
        var scroll = $(window).scrollTop();
         if($(".sn-content").hasClass("sn-fixed")){
            scroll = scroll - $(".sn-content.sn-fixed").height() - 60;

         }else{
            scroll = scroll + $(".sn-content.sn-fixed").height();
         }
         window.scroll(0,scroll);
     }, 15);
}

function initScrolling(){
    jQuery(window).scroll(function(e){
        var offsetY = jQuery(window).scrollTop();
        if(offsetY >= 1000){
           jQuery('#top-link').addClass('active');
        }
        else if(offsetY < 1000 ){
          jQuery('#top-link').removeClass('active');
        }



      });

     /* jQuery('#top-link').click(function(){
        animScrollTo( jQuery(this).attr('href') );
      });*/
}

function querystring(key)
        {
         var ary = location.search.substring(1).split("&");
         for ( var i=0; i<ary.length; i++ )
         {
         if ( ary[i].split("=")[0].toUpperCase() == key.toUpperCase() )
        return ary[i].split("=")[1];
         }
         return("")
        }

/*
Predictive resources home page
 */
function mkto_home_tiles(tag){
    var content_rel = '';
    switch(tag) {
    case 'iot':
        content_rel = 'iot-section';
        break;
    case 'nfv':
        content_rel = 'nfv-section';
        break;
    case 'automotive':
        content_rel = 'automotive-section';
        break;
    case 'simulation':
        content_rel = 'simulation-section';
        break;
    case 'os':
        content_rel = 'os-section';
        break;
    default:
        break;
    }

    if(content_rel.length>0){
        $('.hs-item').hide();
        $('#' + content_rel).show();
        $('.slider-sections > ul > li > a').removeClass('active');
        $("[rel='"+content_rel+"']").addClass('active');
        return true;
    }
    return false;
}


