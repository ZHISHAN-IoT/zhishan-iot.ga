define(['jquery'], function($) {
  
  // Cadence Quote Carousel Carousel Plugin Constructor
  // Sorry had to do sloppy hack due to paging issue. TBD merge with cadence slick carousel.
  function CADENCE_SLICK_QUOTE_CAROUSEL(element, options){
    this.$sliders = $('.cdn-slick-quote-carousel');
    this.$dots = $('.cdn-slick-quote-carousel-dots');
    this.$controls = $('.cdn-slick-quote-carousel-controls');
    this.$prev = $('.quote-prev');
    this.$next = $('.quote-next');
    this.el = element;
    this.$slick = this.$el = $(this.el);
    this.slick = null; 
    this.defaults = {
      items: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      dots: true,
      appendDots: this.$slick.find(this.$dots),
      customPaging: function(slider, i) {
        return '<span class="dot"></span>';
      }
    };
    this.settings = $.extend(this.settings, this.defaults || {}, options);
    this.init();
  }
  
  //Set up our inheritance
  CADENCE_SLICK_QUOTE_CAROUSEL.prototype.constructor = CADENCE_SLICK_QUOTE_CAROUSEL;
  
  CADENCE_SLICK_QUOTE_CAROUSEL.prototype.init = function() {
    var that = this;
    
    this.slick = this.$sliders.slick(this.settings); //new slick(this.$sliders,this.settings);
    console.log('loaded quote slick:' + this.$slick.toString());
    this.$slick.find(this.$prev).on('click', function(e){
      e.preventDefault();
      that.$sliders.slick('slickPrev');
    });
    this.$slick.find(this.$next).on('click', function(e){
      e.preventDefault();
      that.$sliders.slick('slickNext');
    });
  };
  
  CADENCE_SLICK_QUOTE_CAROUSEL.prototype.afterMove = function () {
  };
  
  CADENCE_SLICK_QUOTE_CAROUSEL.prototype.afterInit = function () {
  };
  
  CADENCE_SLICK_QUOTE_CAROUSEL.prototype.adjustCarouselWidth = function (){
  };
  
  //Make a jQuery plugin out of it
  $.fn.CADENCE_SLICK_QUOTE_CAROUSEL = function(options) {
    return this.each(function() {
      if (!$.data(this, 'CADENCE_SLICK_QUOTE_CAROUSEL')) {
        $.data(this, 'CADENCE_SLICK_QUOTE_CAROUSEL', new CADENCE_SLICK_QUOTE_CAROUSEL(this, options));
      }
    });
  };
  
  return CADENCE_SLICK_QUOTE_CAROUSEL;
});

