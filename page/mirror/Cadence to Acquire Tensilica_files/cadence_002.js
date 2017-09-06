define(['jquery','cadence', 'jquery.waitforimages'], function($) {

  // Selector Plugin Constructor
  CADENCE.HomepageHero = function(element, options) {
    this.el = element;
    this.$el = $(this.el);
    this.defaults = {
      heroSelector: ".homepage-hero",
      bgDivSelector: ".hero-background",
      mainFeatureSelector: ".main-feature",
      featureSelector: ".feature"
    };
    this.settings = $.extend(this.settings, this.defaults || {}, options);
    this.init();
  };

  //Set up our inheritance
  CADENCE.HomepageHero.prototype.constructor = CADENCE.HomepageHero;

  /*
   * Initialize the plugin
   */
  CADENCE.HomepageHero.prototype.init = function() {
    var that            = this;
    this.$hero          = $(this.settings.heroSelector);
    this.$mFeatureNext  = $('.feature-next', this.$hero);
    this.$mFeaturePrev  = $('.feature-prev', this.$hero);
    this.$backgroundDiv = $(this.settings.bgDivSelector, this.$hero);
    this.$mainFeature   = $(this.settings.mainFeatureSelector, this.$hero);
    this.$features      = $(this.settings.featureSelector, this.$hero);
    this.index          = this.$features.index(this.$el);
    this.$image         = $('.hero-' + this.index, this.$backgroundDiv);
    this.$panel         = $('.panel-' + this.index, this.$mainFeature);
    this.$el.on('click', $.proxy(this.click, this));
  };

  CADENCE.HomepageHero.prototype.click = function(e) {
    e.preventDefault();
    if (this.$mainFeature.length && !CADENCE.editing) {
      this.$features.not(this.$el).removeClass('active');
      this.$el.addClass('active');
      var that = this;
      this.$backgroundDiv.waitForImages(function() {
        var $activeImage = $('.active', that.$backgroundDiv);
        var $activePanel = $('.active', that.$mainFeature);
        $activePanel.hide().removeClass('active');
        $activeImage.stop(true).fadeOut(function(e) {
          $activeImage.removeClass('active');
        });
        that.$panel.show().addClass('active');
        that.$image.stop(true).fadeIn(function(e) {
          that.$image.addClass('active');
        });
      });
    }
  };

  CADENCE.HomepageHeroControls = function() {
    this.$hero = $('.homepage-hero:not(.processed)');
    if (this.$hero.length) {
      this.$active = $('.main-features.active', this.$hero);
      this.$mainFeatures = $('.main-features', this.$hero);
      this.current = this.$mainFeatures.index(this.$active);
      this.$hero.addClass('processed');
      var $feature = $('.main-feature', this.$hero);
      var $featureNext = $('.feature-next', $feature);
      var $featurePrev = $('.feature-prev', $feature);
      $featureNext.on('click', $.proxy(this.next, this));
      $featurePrev.on('click', $.proxy(this.prev, this));
    }
  };
  CADENCE.HomepageHeroControls.prototype.constructor = CADENCE.HomepageHeroControls;

  CADENCE.HomepageHeroControls.prototype.next = function(e) {
    var nextIndex = this.current + 1;
    if (nextIndex >= this.$mainFeatures.length) {
      nextIndex = 0;
    }
    this.$mainFeatures.eq(nextIndex).trigger('click');
    this.current = nextIndex;
  };

  CADENCE.HomepageHeroControls.prototype.prev = function(e) {
    var prevIndex = this.current - 1;
    if (prevIndex < 0) {
      prevIndex = this.$mainFeatures.length - 1;
    }
    this.$mainFeatures.eq(prevIndex).trigger('click');
    this.current = prevIndex;
  };

  //Make a jQuery plugin out of it
  $.fn.HomepageHero = function(options) {
    (new CADENCE.HomepageHeroControls());
    return this.each(function() {
      if (!$.data(this, 'HomepageHero')) {
        $.data(this, 'HomepageHero', new CADENCE.HomepageHero(this, options));
      }
    });
  };

  return CADENCE.HomepageHero;
});
