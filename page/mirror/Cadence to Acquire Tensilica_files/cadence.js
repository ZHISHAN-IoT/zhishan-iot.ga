define(['jquery', 'jquery.cookie', 'cadence','cadence.forms', 'cadence.modals'], function($) {

  // Selector Plugin Constructor
  function CadenceMarketo(context) {
    context = context != undefined ? context : document;
    // $('[data-trigger-marketo-trackdownload]', context).CadenceMarketoClickTracking();
    $('[data-trigger-marketo-cookie]', context).CadenceMarketoCookieTracking();
    var cookieVal = $.cookie('marketo-form-submitted');
    if (cookieVal != undefined) {
      CADENCE.openModalUrl(cookieVal);
      $.removeCookie('marketo-form-submitted', {path: '/'});
    }
    $(context).marketoFormCleanup();
  };

  function CadenceMarketoClickTracking() {
    var that = this;
    $(this).on('click', function(e) {
      that.click.apply(that, [e]);
    });
  };

  CadenceMarketoClickTracking.prototype.click = function(e) {
    e.preventDefault();
    var href = $(this).data('href') ? $(this).data('href') : $(this).attr('href');
    if (href && mktoMunchkin) {
      mktoMunchkinFunction('clickLink', {href: href});
    }
  };

  //Make a jQuery plugin out of it
  $.fn.CadenceMarketoClickTracking = function(options) {
    return this.each(function() {
      if (!$.data(this, 'CadenceMarketoClickTracking')) {
        var tracker = new CadenceMarketoClickTracking(this, options);
        $.data(this, 'CadenceMarketoClickTracking', tracker);
      }
    });
  };

  function CadenceMarketoCookieTracking(el) {
    this.$el = $(el);
    this.$form = $('[id^="mktoForm"]', this.$el);
    this.cookieId = this.$el.data('set-cookie-id');
    this.cookieValue = this.$el.data('set-cookie-value');
    CADENCE.subscribe(CADENCE.eventType.MARKETO_FORM_SUCCESS, $.proxy(this.submit, this));
  };

  CadenceMarketoCookieTracking.prototype.submit = function(e) {
    if ($('.mktoInvalid', this.$form).length < 1) {
      $.cookie(this.cookieId, this.cookieValue, { expires: 7, path: '/' });
    }
  };

  //Make a jQuery plugin out of it
  $.fn.CadenceMarketoCookieTracking = function() {
    return this.each(function() {
      if (!$.data(this, 'CadenceMarketoCookieTracking')) {
        var tracker = new CadenceMarketoCookieTracking(this);
        $.data(this, 'CadenceMarketoCookieTracking', tracker);
      }
    });
  };

  function CadenceMarketoFormCleanup(el) {
    var that = this;
    this.$el = $(el);
    this.$form = this.$el.hasClass('mktoForm') ? this.$el : $('[id^="mktoForm"]', this.$el);
    this.isContactForm = this.$form.parents('.contact-us').length ? true : false;
    this.isRequeestDemo=this.$form.parents('.request-demo').length ? true : false;
    if (this.$form.length) {
      if (this.isContactForm) {
        CadenceMarketoContactFormUpdate(null, CADENCE.currentLayout);
        // this.update();
        $(window).resize($.proxy(this.update, this));
      }
      if(this.isRequeestDemo){
        CadenceMarketoRequestDemoFormUpdate(null, CADENCE.currentLayout);
        $(window).resize($.proxy(this.update, this));
     }

//    Following two lines commented out because was breaking two column style in Marketo Contact Us form.
//    Client asked for same layout for these Marketo Forms.   
//      $('.mktoButtonRow [type="submit"]', this.$form).removeClass('mktoButton').addClass('btn btn-primary');
//      CADENCE.FORMS.updateSelects(this.$form);
    }
  };

  // Style updates for the contact us form only currently
  CadenceMarketoFormCleanup.prototype.update = function() {
    var $footerContactUs = $('#footer-contactus > div').css('overflow-y', 'auto');
    var $headerContactUs = $('#header-contactus > div');
    if (CADENCE.currentLayout == CADENCE.layouts.MOBILE) {
      $footerContactUs.height($(window).height() - $('.mobile-footer-share').height());
    } else {
      $footerContactUs.css('height', '');
      $headerContactUs.css('height', '');
    }
  };

  CadenceMarketoContactFormUpdate = function(e, layout) {
    var $headerContactUs = $('#header-contactus');
    var $footerContactUs = $('#footer-contactus');
    setTimeout(function () {
    $('.marketo-form .mktoForm .mktoFormCol').find('textarea').closest( ".mktoFieldWrap" ).addClass('col-lg-12 col-sm-12 col-xs-12').parent().addClass('col-lg-12 col-sm-12 col-xs-12');
    $('.marketo-form .mktoForm .mktoFormCol').find('select').closest( ".mktoFieldWrap" ).addClass('col-sm-12 col-xs-12').parent().addClass('col-sm-6 col-xs-12');
    $('.cdn-nxtgn-modal div.modal-body input[type="text"],.cdn-nxtgn-modal div.modal-body input[type="email"]').closest( ".mktoFieldWrap" ).addClass('col-sm-12 col-xs-12').parent().addClass('col-sm-6 col-xs-12');
    $('.marketo-form .mktoForm .mktoFormCol').find('select').attr('style', 'padding: 5px ');
    $('.marketo-form .mktoForm .mktoFormCol').find('select').css({'-webkit-appearance': 'none', '-moz-appearance': 'none', 'appearance': 'none'});
    $('.mktoFormRow.col-sm-6.col-xs-12 .mktoFieldDescriptor').removeClass('col-sm-6').addClass('col-sm-12');
    $('.contact-us .btn-group.bootstrap-select.mktoField.mktoHasWidth.mktoRequired.processed').addClass('col-xs-12 col-sm-12');
    $('.mktoButtonRow ').css('width','50%');
    //$('.contact-us .bootstrap-select').remove();
    //$('.mktoButtonRow span').css({'float':'right','padding-right':'15px'});
    $('.contact-us #expandableRichText').css('padding-right',"0px");
    }, 3000);
    CadenceMarketoGeneralEventBind();
    if($(window).width() <= 768) {
        $('.cdn-nxtgn-modal .modal-body .marketo-form').css({'padding-right': '25px'});
    }

    if($(window).width() <= 320) {
        $('.cdn-nxtgn-modal .modal-body .marketo-form').css({'padding-right': '10px'});
    }

    if($(window).width() <= 736) {
        $('.mktoButtonRow').attr('style', 'width: 100% ;padding-right: 0px;');
    }


    if($('#contactUsInStId').length == 0) {
    	$( '<input id="contactUsInStId" name="contactUsInStName" type="text" value=""  />' ).insertBefore( ".modal.contact-us .mktoButtonRow" );
    } else {
		$('input#contactUsInStId').val('');
	}

    if (!$('[data-lazyload]', $headerContactUs).length) {
      if (layout == CADENCE.layouts.MOBILE) {
        if ($.trim($footerContactUs.html()) == '') {
          $footerContactUs.html($('> div', $headerContactUs).detach());
        }
      } else {
        if ($.trim($headerContactUs.html()) == '') {
          $headerContactUs.html($('> div', $footerContactUs).detach());
        }
      }
    }
  };
    CadenceMarketoRequestDemoFormUpdate = function(e, layout) {
    $('.request-demo .mktoFormRow').find("#Phone").attr('style', 'width: 100% ;background-color:#ffffff;color:#000000;');
    $('.marketo-form .mktoForm .mktoFormCol').find('select').attr('style', 'padding: 5px ');
    $('.marketo-form .mktoForm .mktoFormCol').find('select').css({'-webkit-appearance': 'none', '-moz-appearance': 'none', 'appearance': 'none'});
    $('.marketo-form .mktoForm .mktoFormCol').find('select').closest( ".mktoFieldWrap" ).addClass('col-sm-12 col-xs-12').parent().addClass('col-sm-6 col-xs-12');
    $('.request-demo .mktoFormRow .mktoFieldDescriptor.mktoFormCol').addClass('col-sm-6 col-xs-12');
    $('.request-demo .mktoFormRow .mktoFieldDescriptor .mktoFieldWrap').addClass('col-sm-12 col-xs-12');
    $('.request-demo .mktoButtonRow ').css('width','50%');
    //$('.request-demo .mktoButtonRow span').css({'float':'right','padding-right':'15px'});
    $('.mktoButtonRow span button').attr('style', 'width: 126px ');
    $('.request-demo #expandableRichText').css('padding-right',"0px");
    $('.request-demo .bootstrap-select').remove();
    $('.marketo-form .mktoForm .mktoFormCol').find('textarea').closest( ".mktoFieldWrap" ).addClass('col-lg-12 col-sm-12 col-xs-12').parent().removeClass('col-sm-6 col-xs-12').addClass('col-lg-12 col-sm-12 col-xs-12');
  CadenceMarketoGeneralEventBind();

    if($(window).width() <= 768) {
        $('.cdn-nxtgn-modal .modal-body .marketo-form').css({'padding-right': '25px'});
    }

    if($(window).width() <= 320) {
        $('.cdn-nxtgn-modal .modal-body .marketo-form').css({'padding-right': '10px'});
    }
    if($(window).width() <= 480) {
      $('.mktoButtonRow').attr('style', 'width: 100% ;padding-right: 0px;');
    }
    if($(window).width() <= 736) {
        $('.cdn-nxtgn-modal .modal-body .marketo-form').css({'padding-right': '10px'});
        $('.request-demo .mktoFormRow').find("label[for='ContactFormPreference']").parent().parent().css("top","0px");
        $('.mktoButtonRow').attr('style', 'width: 100% ;padding-right: 15px;');
        $('.mktoForm .mktoFormRow .mktoRequiredField .mktoAsterix').attr('style', 'float:right;');
    $('.mktoFieldDescriptor.mktoFormCol, .mktoFieldWrap.mktoRequiredField, .mktoFieldWrap, #phone').addClass('col-xs-12');
    }

	if($('#requestForDemoInStId').length == 0) {
		$( '<input id="requestForDemoInStId" name="requestForDemoInStId" type="text" value=""  />' ).insertBefore( ".modal.request-demo .mktoButtonRow" );
	} else {
		$('input#requestForDemoInStId').val('');
	}
  };
  CadenceMarketoGeneralEventBind = function() {
    $('.contact-us #Country,.request-demo #Country').on('change',function(){
      if($('#State').length > 0){
        $('.marketo-form .mktoForm .mktoFormCol').find('select').attr('style', 'padding: 5px ');
        $('.marketo-form .mktoForm .mktoFormCol').find('select').css({'-webkit-appearance': 'none', '-moz-appearance': 'none', 'appearance': 'none'});
        $('.marketo-form .mktoForm .mktoFormCol').find('select').closest( ".mktoFieldWrap" ).addClass('col-sm-12 col-xs-12').parent().addClass('col-sm-6 col-xs-12');
      }
    });
    $(".close img").on('touchstart click',function() {
      $(".close img").closest('.modal').find("input, textarea, select").val("");
    });
  }
  CadenceMarketo.CadenceMarketoGeneralEventBind = CadenceMarketoGeneralEventBind;
  CadenceMarketo.CadenceMarketoRequestDemoFormUpdate = CadenceMarketoRequestDemoFormUpdate;
  CadenceMarketo.CadenceMarketoContactFormUpdate = CadenceMarketoContactFormUpdate;


  //Make a jQuery plugin out of it
  $.fn.marketoFormCleanup = function(option) {
    return this.each(function() {
      var form = null;
      if (!$.data(this, 'CadenceMarketoFormCleanup')) {
        form = new CadenceMarketoFormCleanup(this);
        $.data(this, 'CadenceMarketoFormCleanup', form);
      } else {
        form = $.data(this, 'CadenceMarketoFormCleanup');
      }
      if (typeof form[option] == 'function') {
        form[option]();
      }
    });
  };

  return CadenceMarketo;
});
