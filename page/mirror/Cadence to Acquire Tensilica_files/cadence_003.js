define(['jquery'], function($) {
  
  // Cadence Carousel Plugin Constructor
  function CADENCE_SLICK_CAROUSEL(element, options){
    this.$sliders = $('.cdn-slick-carousel');
    this.$dots = $('.cdn-slick-carousel-dots');
    this.$controls = $('.cdn-slick-carousel-controls');
    this.$prev = $('.prev');
    this.$next = $('.next');
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
  CADENCE_SLICK_CAROUSEL.prototype.constructor = CADENCE_SLICK_CAROUSEL;
  
  CADENCE_SLICK_CAROUSEL.prototype.init = function() {
    var that = this;
    
    this.slick = this.$sliders.slick(this.settings); //new slick(this.$sliders,this.settings);
    console.log('loaded slick:' + this.$slick.toString());
    this.$slick.find(this.$prev).on('click', function(e){
      e.preventDefault();
      that.$sliders.slick('slickPrev');
    });
    this.$slick.find(this.$next).on('click', function(e){
      e.preventDefault();
      that.$sliders.slick('slickNext');
    });
    //$('.cdn-slick-carousel-container').find($('.next')).on('click', function(e){e.preventDefault();$('.cdn-slick-carousel').slick('slickNext');});
  };
  
  CADENCE_SLICK_CAROUSEL.prototype.afterMove = function () {
  };
  
  CADENCE_SLICK_CAROUSEL.prototype.afterInit = function () {
  };
  
  CADENCE_SLICK_CAROUSEL.prototype.adjustCarouselWidth = function (){
  };
  
  //Make a jQuery plugin out of it
  $.fn.CADENCE_SLICK_CAROUSEL = function(options) {
    return this.each(function() {
      if (!$.data(this, 'CADENCE_SLICK_CAROUSEL')) {
        $.data(this, 'CADENCE_SLICK_CAROUSEL', new CADENCE_SLICK_CAROUSEL(this, options));
      }
    });
  };
  
  return CADENCE_SLICK_CAROUSEL;
});
