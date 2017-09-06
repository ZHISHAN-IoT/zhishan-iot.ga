define(['jquery', 'owl.carousel'], function($) {

  $( window ).resize(function() {
		setTimeout(function(){
			var sz = $('.owl-item').size()-1;
			if($('.owl-item:eq('+sz+')').hasClass('active')){
				$('.owl-next').css('display','none');
			}else{
				$('.owl-next').css('display','block');
			}
			
			if($('.owl-item:eq(0)').hasClass('active')){
				$('.owl-prev').css('display','none');
			}else{
				$('.owl-prev').css('display','block');
			}
		}, 500);
	});
	
  // Cadence Carousel Plugin Constructor
  function CADENCE_OWL_CAROUSEL(element, options) {
    this.el = element;
    this.$owl = this.$el = $(this.el);
    this.OwlCarousel = null; // Owl Carousel object
    this.defaults = {
      items: 5,
      itemsDesktop: [1199, 4],
      itemsTablet: [979, 2],
      itemsMobile: [768, 1],
      rewindNav: false,
      addClassActive: true,
      pagination: false,
      afterMove: $.proxy(this.afterMove, this),
      navigation: true,
      navigationText: [
        '<span class="prev"></span>',
        '<span class="next"></span>'
      ]
    };
    this.settings = $.extend(this.settings, this.defaults || {}, options);
    this.init();
  }

  //Set up our inheritance
  CADENCE_OWL_CAROUSEL.prototype.constructor = CADENCE_OWL_CAROUSEL;

  CADENCE_OWL_CAROUSEL.prototype.init = function () {
    var that = this;
    this.$prev = $('.prev', this.$owl);
    this.$next = $('.next', this.$owl);
    this.changeItemsnum();
    this.$cData = this.$owl.parents('.owl-data');
    if (this.$cData.data('items') !== undefined) {
      this.settings.items = this.$cData.data('items');
    }
    if (this.$cData.data('itemsdesktop') !== undefined) {
      this.settings.itemsDesktop = [1199,this.$cData.data('itemsdesktop')];
    }
    if (this.$cData.data('itemsdesktopsmall') !== undefined) {
      this.settings.itemsDesktopSmall = [979,this.$cData.data('itemsdesktopsmall')];
    }
    if (this.$cData.data('itemstablet') !== undefined) {
      this.settings.itemsTablet = [768,this.$cData.data('itemstablet')];
    }
    if (this.$cData.data('itemstabletsmall') !== undefined) {
      this.settings.itemsTabletSmall = [767,this.$cData.data('itemstabletsmall')];
    }
    if (this.$cData.data('itemsmobile') !== undefined) {
      this.settings.itemsMobile = [479,this.$cData.data('itemsmobile')];
    }
    if (this.$cData.data('pagination') !== undefined) {
      this.settings.pagination = this.$cData.data('pagination');
    }
    if (this.$cData.data('navigation') !== undefined) {
      this.settings.navigation = this.$cData.data('navigation');
    }
    if (this.$cData.data('addclassactive') !== undefined) {
      this.settings.addClassActive = this.$cData.data('addclassactive');
    }
    this.$owl.owlCarousel(this.settings);
    this.OwlCarousel = this.$owl.data('owlCarousel');
    this.afterMove();
    this.afterInit(); 
    this.adjustDamCarouselWidth();
    this.changeTrainingDescEncod();
  };

  CADENCE_OWL_CAROUSEL.prototype.afterMove = function () {
    if ($(this.OwlCarousel.$owlItems[0]).hasClass('active')) {
      $(this.OwlCarousel.buttonPrev).hide();
    } else {
      $(this.OwlCarousel.buttonPrev).show();
    }
    if ($(this.OwlCarousel.$owlItems[this.OwlCarousel.$owlItems.length - 1]).hasClass('active')) {
      $(this.OwlCarousel.buttonNext).hide();
    } else {
      $(this.OwlCarousel.buttonNext).show();
    }
  };

  CADENCE_OWL_CAROUSEL.prototype.afterInit = function () {
    if ($(this.OwlCarousel.$elem[0]).hasClass('product-nav')) {
      var owl = $(this.OwlCarousel.$elem).data('owlCarousel');
   var i=0; 
      owl.$owlItems.each(function() {
      i=i+1; if($(this).find('.owl-slide').hasClass('on')) {owl.goTo(i-4);} 
      });
    }
      $(window).load(function() {
          var owlmaxheight=$('.carousel-expandable .owl-carousel .expandable-info-complex .expanding-featured-content .expanding-feature').height();
          if(owlmaxheight<200) {
        owlmaxheight=$('.carousel-expandable .owl-carousel .expandable-info .expanding-featured-content .expanding-feature').height();
              if(owlmaxheight<200) {owlmaxheight=200;}
          }
          $('.carousel-expandable .owl-carousel .expandable-info-complex .expanding-featured-content .expanding-feature').css('max-height',owlmaxheight + 'px');
      $('.carousel-expandable .owl-carousel .expandable-info .expanding-featured-content .expanding-feature').css('max-height',owlmaxheight + 'px');
      $('.carousel-expandable').css('height',(owlmaxheight+32) + 'px');
      });
  };

  CADENCE_OWL_CAROUSEL.prototype.changeItemsnum = function() {
    CADENCE.UTILS.changeitemsnumOWLCarousel();
  };  

    CADENCE_OWL_CAROUSEL.prototype.adjustDamCarouselWidth = function () {
        var crouselOwlWidth = 0;
        $(".dam_carousel .owl-carousel .owl-wrapper-outer .owl-wrapper .active").each(function() {
          crouselOwlWidth = crouselOwlWidth + $(this).width();
        });
        if (crouselOwlWidth > 0) {
            crouselOwlWidth = crouselOwlWidth + 15;
            $(".dam_carousel .owl-carousel.owl-theme").css("width", crouselOwlWidth + "px");
            $(".dam_carousel .owl-carousel.owl-theme").css("padding-left", "15px");
            $(".dam_carousel .owl-carousel.owl-theme .owl-wrapper-outer .owl-item .small_horizontal .content").css("margin-top", "15px");
            $(".dam_carousel .owl-carousel.owl-theme .owl-wrapper-outer .owl-item .small_horizontal .optionalImage").css("text-align", "center");
        }
    };
  
    CADENCE_OWL_CAROUSEL.prototype.changeTrainingDescEncod = function () {
    $(".expandLink").click(function(){
        $(".page_training_course_detail .courseDescAct").each(function(){
            var courseDesc = $(this).text();
            var courseDescHtml = $(this).html();
            if (containsEncoded(courseDesc)) {
               $(this).html(decodeURIComponent(courseDesc));
            } else {
               $(this).html(decodeURIComponent(courseDescHtml));
            }
            $(this).addClass("courseDescChan").removeClass("courseDescAct");
            $('.courseDescChan a').css('color','#09698d');
        });
            });

    function containsEncoded (val){
        //var rHTMLEncoded = /&lt;/;
        var rHTMLEncoded = /<div/;
        return rHTMLEncoded.test(val) ;
    }
    };

  //Make a jQuery plugin out of it
  $.fn.CADENCE_OWL_CAROUSEL = function(options) {
    return this.each(function() {
      if (!$.data(this, 'CADENCE_OWL_CAROUSEL')) {
        $.data(this, 'CADENCE_OWL_CAROUSEL', new CADENCE_OWL_CAROUSEL(this, options));
      }
    });
  };

  return CADENCE_OWL_CAROUSEL;
});




	
