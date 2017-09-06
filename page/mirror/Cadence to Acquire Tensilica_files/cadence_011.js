jQuery.noConflict();
require([
    "jquery",
    "cadence.marketo",
    "cadence.utils",
    "bootstrap",
    "bootstrap-select",
    "bootstrap3-typeahead",
    "requirejs",
    //"idangerous.swiper",
    "bootstrap-hover-dropdown",
    "sortable",
    "cadence.slick.carousel",
    "cadence.slick.quote.carousel",
    "slick",
    "jquery.cookie",
    "jquery.scrollTo",
    "jquery.placeholder",
    "jquery.waitforimages",
    //"jquery.lazyLoad",
    "cadence.forms",
    "cadence.modals",
    "cadence.carousel",
    "cadence.homepageHero",
    "cadence.owl.carousel",
    "cadence.expandingFeaturedContent",
    "cadence.searchTypeahead",
    "jquery.ui",
    "footer",
    "cadence.fastSearchResults"
], function ($, CadenceMarketo, CADENCEUTILS) {
    CADENCE = CADENCE || {};

    CADENCE.editing = false;

    CADENCE.layouts = {
        MOBILE: 1,
        PHABLET: 2,
        TABLET: 3,
        DESKTOP: 4,
        LARGE_DESKTOP: 5
    };
    CADENCE.currentLayout = -1;

    CADENCE.eventType = {
        INIT: "init",
        RESIZE: "resize",
        LAYOUT_CHANGED: "layoutchanged",
        LAZY_LOAD_COMPLETE: "lazyloadcomplete",
        MARKETO_FORM_INIT: "marketoforminit",
        MARKETO_FORM_SUCCESS: "marketoformsuccess"
    };

    //CADENCE.events = null;

    CADENCE.events = $({});

    CADENCE.subscribe = function () {
        CADENCE.events.on.apply(CADENCE.events, arguments);
    };

    CADENCE.unsubscribe = function () {
        CADENCE.events.off.apply(CADENCE.events, arguments);
    };

    CADENCE.publish = function () {
        CADENCE.events.trigger.apply(CADENCE.events, arguments);
    };

    CADENCE.marketoFormInit = function () {
        CADENCE.publish(CADENCE.eventType.MARKETO_FORM_INIT, arguments);
    };

    CADENCE.subscribe(CADENCE.eventType.MARKETO_FORM_INIT, function (e, form) {
        // $('.contact-us').marketoFormCleanup();
        MktoForms2 && MktoForms2.onFormRender(function (form) {
            $(form.getFormElem()).marketoFormCleanup('update');
        });

		form.onValidate(function(success){ 
            if (($('input#contactUsInStId').length > 0) && ($('input#requestForDemoInStId').length > 0)) {
				if (($('input#contactUsInStId').val().length == 0) && ($('input#requestForDemoInStId').val().length == 0)) {
                    form.submittable(true);
                } else {
                    event.preventDefault();
                    form.submittable(false);
                }
            } else if ($('input#contactUsInStId').length > 0) {
                if ($('input#contactUsInStId').val().length != 0) {
                    event.preventDefault();
                    form.submittable(false);
                } else {
					form.submittable(true);
				}
			} else if ($('input#requestForDemoInStId').length > 0) {
                if ($('input#requestForDemoInStId').val().length != 0) {
					event.preventDefault();
				 	form.submittable(false);
                } else {
                    form.submittable(true);
                }
			} else {
                form.submittable(true);
            }
		});
		
        form.onSuccess(function (values, followUpUrl) {
            CADENCE.publish(CADENCE.eventType.MARKETO_FORM_SUCCESS, form);
        });
    });

    CADENCE.subscribe(CADENCE.eventType.LAYOUT_CHANGED, CadenceMarketo.CadenceMarketoContactFormUpdate);

    // var removeImageTitleAttribute = function() {
    // 	$('img').removeAttr('title');
    // };

    // CADENCE.subscribe(CADENCE.eventType.RESIZE, function(e, args) {
    // });
    $('select:not(.processed)').each(function(i,o) {
            var $s = $(o).addClass('processed');
            $s.selectpicker();
            if ( typeof($s.data('on-select-loaded')) != 'undefined' ) {            
                f =  window[$s.data('on-select-loaded')]($s);
            }
     });
    CADENCE.subscribe(CADENCE.eventType.INIT, function (e, args) {
        var context = args || document;
        //$('.megamenu', context).Megamenu();
        //$('#primary-nav', context).MobileMenu();
        $('.main-features', context).HomepageHero();
        $("[data-modal-content-url]", context).CADENCE_Modal();
        $('.swiper-container', context).CADENCE_CAROUSEL();
        $('.cdn-slick-carousel-container', context).CADENCE_SLICK_CAROUSEL();
        $('.cdn-slick-quote-carousel-container', context).CADENCE_SLICK_QUOTE_CAROUSEL();
         $('.owl-carousel', context).CADENCE_OWL_CAROUSEL();
        $('form', context).countryStateDropdowns();
        //CADENCE.FORMS.updateSelects(context);
        CADENCEUTILS.browserBack(context);
        CADENCEUTILS.updateLayout();
        CADENCEUTILS.evenHeights(context);
        CADENCEUTILS.listToggle(context);
        CADENCEUTILS.toggler(context);
        CADENCEUTILS.simpleExpandCollapse(context);
        CADENCEUTILS.lazyLoad(context);
        CADENCEUTILS.checkTermReg();
        CADENCE.FORMS.scrollToError(context); // CDNCOM-1488/rlehr
        (new CadenceMarketo(context));

        // place all modals just before the end of the body tag
        // to ensure they are properly placed on the screen
        $('.modal', context).each(function (i, o) {
            $('body').append($(o).detach());
        });

        // open a modal automatically
        $(".modal.auto-open").modal("show");
    });

    // CADENCE.subscribe(CADENCE.eventType.LAZY_LOAD_COMPLETE, function(e, tag) {
    // 	removeImageTitleAttribute();
    // });

    CADENCE.subscribe(CADENCE.eventType.LAYOUT_CHANGED, function (e, layout) {
        CADENCE.scrollUpdate(layout);
    });

    CADENCE.scrollUpdate = function (e) {
        var layout = typeof e == "number" ? e : CADENCE.currentLayout;
        var $mobileSearchBtn = $('.navbar-toggle-search');
        $('#search-header,#cdn-search-header,#event-search-header,#resource-search-header').each (function(index) {
            $headerSearch = $(this);
            if ($headerSearch.hasClass('static')) {
                if (layout < CADENCE.layouts.TABLET) {
                    $headerSearch.hide();
                    $mobileSearchBtn.show();
                } else {
                    $mobileSearchBtn.hide();
                    $headerSearch.show();
                }
            } else if ($(window).scrollTop() > 80) {
                if (layout < CADENCE.layouts.TABLET) {
                    $headerSearch.hide();
                    if (!$mobileSearchBtn.is(':visible')) {
                        $mobileSearchBtn.fadeIn();
                    }
                } else {
                    $mobileSearchBtn.hide();
                    if (!$headerSearch.is(":visible"))
                        $headerSearch.fadeIn();
                }
            } else {
                if (layout < CADENCE.layouts.TABLET) {
                    $headerSearch.hide();
                    if ($mobileSearchBtn.is(':visible')) {
                        $mobileSearchBtn.fadeOut('fast');
                    }
                } else {
                    $mobileSearchBtn.hide();
                    if ($headerSearch.is(":visible"))
                        $headerSearch.fadeOut('fast');
                }
            }
        });
    };

    $(window).on("resize", function (e) {
        CADENCEUTILS.updateLayout();
        CADENCEUTILS.evenHeights();
        $("[data-mq]").each(function (i, o) {
            var $this = $(this);
            var mq = $this.data("mq");
            if (Modernizr.mq(mq)) {
                $this.show();
            } else {
                $this.hide();
            }
        });
    });

    //DOM READY
    $(document).ready(function () {
        $("#search-header.static,#cdn-search-header.static,#event-search-header.static,#resource-search-header.static").show();
        $(window).scroll(CADENCE.scrollUpdate);
        CADENCE.scrollUpdate();
        // Run default utils -lazy load, simple collapse/expand
        CADENCEUTILS.loadDefaults();
        // placeholder fix for IE
        $("input, textarea").placeholder();
        // check the layout of the page

        $('body').on('click', function (e) {
            var $target = $(e.target);
            if ($target.parents('.bootstrap-select').length && $target.parents('.dropdown-menu').length) {
                e.stopPropagation();
                $target.parents('.bootstrap-select').toggleClass('open');
            }
        });

        // initialize Marketo Munchkin API
        // I (AP) have a SERIOUS HUNCH that the Munchkin is not defined, it must be passed as a module
        if (typeof window.munchkinAccountID !== 'undefined' && typeof (Munchkin) !== 'undefined') {
            jQuery(function () {
                // hack bypasses bug in Munchkin code
                jQuery.fn.jquery = '1.9.9';
                Munchkin.init(munchkinAccountID);
            });
        }

        // Publish the init event and setup the resize event trigger
        CADENCE.publish(CADENCE.eventType.INIT);
        $(window).resize(function () {
            CADENCE.publish(CADENCE.eventType.RESIZE);
        });
         $.ajaxSetup({ cache: false });
         $(".login_component").load($(".login_component").attr("data-fasturl"));
         $('ul.cdn-nxtgn-menu.mobile li.media.start figure').ready(function() {
			$('ul.cdn-nxtgn-menu.mobile li.media.start').css("display", "none");
         });

// CDNCOM-1348 - DFParker 2015-10-22
      var url_test = {"contactus":"1","requestdemo":"1"};
      var match,
          pl     = /\+/g,  // Regex for replacing addition symbol with a space
          search = /([^&=]+)=?([^&]*)/g,
          decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
          query  = window.location.search.substring(1);
      urlParams = {};
      while (match = search.exec(query)) urlParams[decode(match[1])] = decode(match[2]);

      var found = [];
      for(key in url_test ) {
          if( urlParams[key] === undefined ) continue;
          found.push(key);
      }

      if(found.length > 0 ) {
			$( "a[data-modal-class='contact-us']:first" ).trigger( "click" );
      }
//CDNCOM-1348  END
      //CDNCOM 2146 start
      //$('.richtext div').removeClass('table-responsive');
      //CDNCOM 2146 end
    });

    $(".table-zebra-gray, .table-red-white").each (function () { $(this).wrap("<div class='table-responsive'/>") } );
    $(".table-zebra-gray, .table-red-white").each (function () { $(this).addClass("table") } );
    // make only training ribbon dropdowns on hover
    $('.cdn-nxtgn-training-menu .dropdown-toggle,.training-browse .dropdown-toggle').dropdownHover();
    return CADENCE;
});

