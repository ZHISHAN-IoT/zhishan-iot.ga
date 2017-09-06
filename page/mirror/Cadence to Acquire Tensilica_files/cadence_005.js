define(['jquery'], function($) {

  // Cadence Carousel Plugin Constructor
  function CADENCE_CAROUSEL(element, options) {
    this.el = element;
    this.$swiper = this.$el = $(this.el);
    this.Swiper = null; // Swiper object
    this.defaults = {
      pagination: '.pagination',
      loop: false,
      grabCursor: true,
      paginationClickable: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      slidesPerViewFit: true,
      centeredSlides: false,
      calculateHeight: true
    };
    this.settings = $.extend(this.settings, this.defaults || {}, options);
    this.init();
  }

  //Set up our inheritance
  CADENCE_CAROUSEL.prototype.constructor = CADENCE_CAROUSEL;

  CADENCE_CAROUSEL.prototype.init = function () {
    var that = this;
    this.$wrapper = this.$swiper.parent('.swiper-outer-container');
    this.$cData = this.$swiper.parents('.swiper-data');
    this.isProductFinder = this.$swiper.parents('.product-finder').length > 0;
    if (this.$cData.data('loop') !== undefined) {
      this.settings.loop = this.$cData.data('loop');
    }
    if (this.$cData.data('mode') !== undefined) {
      this.settings.mode = this.$cData.data('mode');
    }
    if (this.$cData.data('initialslide') !== undefined) {
      this.settings.initialSlide = this.$cData.data('initialslide');
    }
    if (this.$cData.data('slidesperview') !== undefined) {
      this.settings.slidesPerView = this.$cData.data('slidesperview');
    }
    if (this.$cData.data('slidesperviewfit') !== undefined) {
      this.settings.slidesPerViewFit = this.$cData.data('slidesperviewfit');
    }
    if (this.$cData.data('slidespergroup') !== undefined) {
      this.settings.slidesPerGroup = this.$cData.data('slidespergroup');
    }
    if (this.$cData.data('centeredslides') !== undefined) {
      this.settings.centeredSlides = this.$cData.data('centeredslides');
    }
    if (this.$cData.data('calculateheight') !== undefined) {
      this.settings.calculateHeight = this.$cData.data('calculateheight');
    }
    if (this.$cData.data('csswidthandheight') !== undefined) {
      this.settings.cssWidthAndHeight = this.$cData.data('csswidthandheight');
    }
    this.Swiper = new Swiper(this.$swiper[0], this.settings);
    this.$next = $('.next', this.$wrapper);
    this.$prev = $('.prev', this.$wrapper);
    this.$next.on('click', function(e){
      e.preventDefault();
      that.Swiper.swipeNext();
    });
    this.$prev.on('click', function(e){
      e.preventDefault();
      that.Swiper.swipePrev();
    });
    this.update_nav();
    if (this.Swiper.slides.length <= this.Swiper.params.slidesPerView) {
      $('.prev,.next,.pagination', this.$wrapper).hide();
    }
    if (this.isProductFinder) {
      // Add some helper classes for styling the first and last visible elements
      // This is specific to the homepage vertical carousel
      var initCenteredClasses = function(swiper) {
        var $slides = $(swiper.slides);
        $slides.removeClass('first-visible last-visible next-visible prev-visible');
        if (swiper.activeIndex - 2 > -1) {
          $slides.eq(swiper.activeIndex - 2).addClass('first-visible');
        }
        if (swiper.activeIndex - 1 > -1) {
          $slides.eq(swiper.activeIndex - 1).addClass('prev-visible');
        }
        if (swiper.activeIndex + 2 < swiper.slides.length) {
          $slides.eq(swiper.activeIndex + 2).addClass('last-visible');
        }
        if (swiper.activeIndex + 1 < swiper.slides.length) {
          $slides.eq(swiper.activeIndex + 1).addClass('next-visible');
        }
      };
      initCenteredClasses(this.Swiper);
      this.Swiper.addCallback('SlideChangeStart', function(swiper) {
        initCenteredClasses(swiper);
      });
    }

    this.Swiper.addCallback('SlideChangeStart', function(swiper) {
      that.update_nav();
    });
    this.Swiper.addCallback('TouchMove', function(swiper) {
      that.$swiper.addClass('swiping', that.$swiper);
    });
    this.Swiper.addCallback('TouchEnd', function(swiper) {
      that.$swiper.removeClass('swiping');
    });
  };

  CADENCE_CAROUSEL.prototype.update_nav = function () {
    // the product finder in the homepage hero needs the arrows to show
    // slightly differently than the rest of the carousels
    if (this.isProductFinder) {
      // show the previous arrow except when the first element is active
      if (this.Swiper.activeIndex === 0) {
        this.$prev.hide();
      } else {
        this.$prev.show();
      }
      // show the next arrow except when the last element is active
      if (this.Swiper.activeIndex == this.Swiper.slides.length - 1) {
        this.$next.hide();
      } else {
        this.$next.show();
      }
    } else {
        // show the previous arrow if the first slide is not visible
      if (this.Swiper.visibleSlides[0] == this.Swiper.slides[0]) {
        this.$prev.hide();
      } else {
        this.$prev.show();
      }
      // show the next arrow if the last slide is not visible
      if (this.Swiper.visibleSlides[this.Swiper.visibleSlides.length - 1] == this.Swiper.slides[this.Swiper.slides.length - 1]) {
        this.$next.hide();
      } else {
        this.$next.show();
      }
    }
  };

  //Make a jQuery plugin out of it
  $.fn.CADENCE_CAROUSEL = function(options) {
    return this.each(function() {
      if (!$.data(this, 'CADENCE_CAROUSEL')) {
        $.data(this, 'CADENCE_CAROUSEL', new CADENCE_CAROUSEL(this, options));
      }
    });
  };

  return CADENCE_CAROUSEL;
});
