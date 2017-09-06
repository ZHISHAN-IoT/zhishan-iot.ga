define(['jquery','cadence','modernizr'], function($) {

  CADENCE.UTILS = CADENCE.UTILS || {};

  /**
   * Helper function decodes HTML entities
   */
  CADENCE.UTILS.decodeEntities = function(string) {
    return $('<div>').html(string).text();
  };

  CADENCE.UTILS.browserBack = function() {
    var context = arguments.length ? arguments : document;
    $('.browser-back:not(.processed)', context).each(function(i,o) {
      var $bb = $(o).addClass('processed');
      $bb.on('click', function(e) {
        e.preventDefault();
        window.history.back();
      });
    });
  };

  /**
   * Checks for specific element in Registration page
   * Specifically on TOC link's position
   */
  CADENCE.UTILS.checkTermReg = function() {
    if ($('.form_row.Term .text.custom-checkbox.richtext').length) {
      var $t = $('.form_row.Term .text.custom-checkbox.richtext');
      var $l = $('.form_row.Term label');
      $t.css({ left : $l.width() + 5 });
    }
  };


  /**
   * Helper function toggles a class on a target element
   */
  CADENCE.UTILS.toggler = function() {
    var context = arguments.length ? arguments : document;
    $('[data-toggler]:not(.processed)', context).each(function(i,o) {
      var $toggle = $(o).addClass('processed');
      var toggleClass = $toggle.data('class');
      var toggleTarget = $toggle.data('target');
      var groupSelector = $toggle.data('group');
      var toggleSelector = $toggle.data('toggler');
      $toggle.on('click', function(e) {
        e.preventDefault();
        if (toggleSelector != undefined && toggleClass != undefined) {
          var $toggleDiv = null;
          if (toggleTarget && toggleTarget == 'parent') {
            $toggleDiv = $toggle.parents(toggleSelector);
          } else {
            $toggleDiv = $(toggleSelector, $toggle);
          }
          $toggle.parents(groupSelector).find(toggleSelector).not($toggleDiv).removeClass(toggleClass);
          /*CDNCOM: 2587 - starts*/
          $toggleDiv.toggleClass(toggleClass).animate({scrollTop:$toggleDiv.offset().top },'linear');
          /*
          $toggleDiv.toggleClass(toggleClass).ScrollTo({
            duration: 200,
            easing: 'linear',
            offsetTop: CADENCE.currentLayout == CADENCE.layouts.MOBILE ? 0 : 100
          });
          */
          /*CDNCOM: 2587 - ends*/
        }
      });
    });
  };

  /**
   * Helper function evens out the height of certain components
   *
   * Currently supported: expandable feature components, products list
   */
  CADENCE.UTILS.evenHeights = function() {
    var context = arguments.length ? arguments : document;
    // Check for the even-features helper class, signaling children elements need their heights evened out
    $('.even-features', context).each(function(i,o) {
      CADENCE.UTILS.updateEvenHeights($('.expanding-featured-content', this), '.expanding-feature');
      CADENCE.UTILS.updateEvenHeights($('.expandable-info-complex-training', this), '.page-tile');
    });
    $('.product-list .grid', context).each(function(i,o) {
      CADENCE.UTILS.updateEvenHeights($(this), '.page');
    });
    $('.generic-list .executive-team', context).each(function(i,o) {
      CADENCE.UTILS.updateEvenHeights($(this), '.module-content');
    });
  };

  CADENCE.UTILS.updateEvenHeights = function($container, itemSelector) {
    var $items = $(itemSelector, $container);
    if (CADENCE.currentLayout == CADENCE.layouts.MOBILE ||
      (CADENCE.currentLayout == CADENCE.layouts.TABLET && $items.parents('[class*="col-md"]').length)) {
      $items.css('height', '');
    } else {
      var maxHeight = false;
      $items.not('.open').filter(':visible').each(function(i,o) {
        var $feature = $(this).css('height', '');
        if (!maxHeight || maxHeight < $feature.height()) {
          maxHeight = $feature.height();
        }
      }).css('height', maxHeight);
    }
  };

  CADENCE.UTILS.lazyLoad = function() {
    var context = arguments.length ? arguments : document;
    var requests = {};
    var lazyLoadItems = $("[data-lazyload]");
    if (!lazyLoadItems.length) {
      return;
    }
    $(lazyLoadItems, context).each(function(i, o) {
      var $el = $(o);
      var type = $el.data("type");
      var tag = $el.data("tag") || "generic";
      var mq = $el.data("mq") || false;
      //if no media query data attribute or if mq is true
      if (mq === false || Modernizr.mq(mq)) {
        requests[tag] = requests[tag] || [];
        switch (type) {
          case "html":
          default:
            var url = $el.data("url") ? $el.data("url") : $el.data("lazyload");
            if (url) {
              //push our ajax request so we can use $.when to resolve
              //all requests of a certain tag
                var idx = url.indexOf("com");
                if(idx > 0) {
                    idx = idx + 3;
                    var urlDomain = url.substring(0, idx);
                }
                var locationDomain = window.location.protocol + "//" +window.location.hostname;
                if ((typeof urlDomain == 'undefined') || (urlDomain == locationDomain)) {
  	              requests[tag].push($.ajax({
  	                url: url,
  	                dataType: "html",
  	                success: function(data) {
  	                  var $data = $(data);
  	                  if (mq !== false) {
  	                    $data.data("mq", mq).attr("data-mq", mq);
  	                  }
  	                  $el.replaceWith($data);
  	                  CADENCE.publish(CADENCE.eventType.INIT, [ $data ]);
  	                }
  	              }));
              }
      		  if (window.XDomainRequest) {
                  var xdr = new XDomainRequest();
                  xdr.open("get", url);
                  xdr.onload = function() {
    	        	  	var xData = xdr.responseText;
    	        	  	var $xData = $(xData);
    	                  if (mq !== false) {
    	                	  $xData.data("mq", mq).attr("data-mq", mq);
    	                    }
    	                    $el.replaceWith($xData);
    	                    CADENCE.publish(CADENCE.eventType.INIT, [ $xData ]);
    		          }
                  xdr.send();
              } else {
	              requests[tag].push($.ajax({
	                url: url,
	                dataType: "html",
	                success: function(data) {
	                  var $data = $(data);
	                  if (mq !== false) {
	                    $data.data("mq", mq).attr("data-mq", mq);
	                  }
	                  $el.replaceWith($data);
	                  CADENCE.publish(CADENCE.eventType.INIT, [ $data ]);
	                }
	              }));
              }
            }
            break;
        }
      }
    });
    for (var k in requests) {
      if (requests.hasOwnProperty(k)) {
        //resolve deferreds for tag
        (function(tag) {
          $.when.apply($, requests[k]).done(function() {
            CADENCE.publish(CADENCE.eventType.LAZY_LOAD_COMPLETE, [ tag ]);
          });
        })(k);
      }
    }
  }

  CADENCE.UTILS.simpleExpandCollapse = function() {

    var context = arguments.length ? arguments : document;
    $('.expand-collapse-trigger:not(.processed)', context).each(function(i,o) {
      var $trigger = $(o).addClass('processed');
	   var contextString=String($(o).context);
	  if(i>0 && $(".fast-search-results-default")[0] && contextString.indexOf("refinementfilters") == -1){
           var $me1 = $(o).toggleClass('toggled');
           var $targ1 = (!!$me1.attr('data-target'))? $($me1.attr('data-target')): $me1.closest('.expand-collapse');
           $targ1.toggleClass('collapsed');

      }
      $trigger.on('click', function(e) {
        e.preventDefault();
        var $me = $(e.target).toggleClass('toggled');
        var $targ = (!!$me.attr('data-target'))? $($me.attr('data-target')): $me.closest('.expand-collapse');
        var showText = $me.attr('data-showText');
        var hideText = $me.attr('data-hideText');
        $targ.toggleClass('collapsed');
        if (showText && hideText) {
          if($targ.hasClass('collapsed')) {
            $me.text(showText);
            $('.search-column-filters').hide(500);
            $('.search-column-results').switchClass('col-sm-9', 'col-sm-12', 1000);
          }
          else {
            $me.text(hideText);
            $('.search-column-filters').show(1000);
            $('.search-column-results').switchClass('col-sm-12', 'col-sm-9', 500);
          }
        }
      });
    });
  };

  /**
   * Used to toggle list views, like on the product category pages
   *
   * Requires an element with icons having a data-view attribute.
   * List must be the next div in the DOM
   *
   * Example:
   *  <div class="list-toggle">
   *    <i data-view="list" class="some-font-class"></i>
   *    <i data-view="grid" class="some-font-class"></i>
   *  </div>
   *  <div class="list">
   *    ...
   *  </div>
   */
  CADENCE.UTILS.listToggle = function() {
    var context = arguments.length ? arguments : document;
    $('.list-toggle', context).each(function(i,o) {
      var $toggle = $(document);
      var $icons  = $('i', $toggle);
      var $list   = $toggle.find('.grid');
      if (!$list.length) {
        $list = $toggle.find('.list');
      }
      if ($list.length) {
        // add the processed class after successfully finding the list... in case the list is ajax'd in
        $toggle.addClass('processed');
        $icons.on('click', function(e) {
          var $icon   = $(e.currentTarget);
          if (!$icon.hasClass('active')) {
            if ($icon.data('view') != undefined && $icon.data('view') == 'grid') {
              $list.removeClass('list').addClass('grid');
              CADENCE.UTILS.updateEvenHeights($list, '.page');              
            } else {
              $list.removeClass('grid').addClass('list');
              $('.page', $list).css('height', '');
            }
            $icons.not($icon).removeClass('active');
            $icon.addClass('active');
          }
        });
      }
    });
  };

  // Add helper classes to the DOM for use with the updateLayout function
  $('body')
    .append($('<div>').addClass('layout-check visible-xs'))
    .append($('<div>').addClass('layout-check visible-sm'))
    .append($('<div>').addClass('layout-check visible-md'))
    .append($('<div>').addClass('layout-check visible-lg'));

     var topPadding = $("#siteMaintenance").height() + $("#incompBrowser").height();
     $("#mainBody").css("padding-top", topPadding+"px");
  /**
   * Helper function publishes the LAYOUT_CHANGED event
   * when each breakpoint is crossed
   *
   * NOTE: Bootstrap does not have a PHABLET sized visible- class
   */
  CADENCE.UTILS.updateLayout = function() {
    var $visibleCheck = $('.layout-check:visible');
    if ($visibleCheck.hasClass('visible-lg')) {
      if (CADENCE.currentLayout != CADENCE.layouts.LARGE_DESKTOP) {
        CADENCE.publish(CADENCE.eventType.LAYOUT_CHANGED, [CADENCE.layouts.LARGE_DESKTOP]);
      }
      CADENCE.currentLayout = CADENCE.layouts.LARGE_DESKTOP;
    } else if ($visibleCheck.hasClass('visible-md')) {
      if (CADENCE.currentLayout != CADENCE.layouts.DESKTOP) {
        CADENCE.publish(CADENCE.eventType.LAYOUT_CHANGED, [CADENCE.layouts.DESKTOP]);
      }
      CADENCE.currentLayout = CADENCE.layouts.DESKTOP;
    } else if ($visibleCheck.hasClass('visible-sm')) {
      if (CADENCE.currentLayout != CADENCE.layouts.TABLET) {
        CADENCE.publish(CADENCE.eventType.LAYOUT_CHANGED, [CADENCE.layouts.TABLET]);
      }
      CADENCE.currentLayout = CADENCE.layouts.TABLET;
    } else if ($visibleCheck.hasClass('visible-xs')) {
      if (CADENCE.currentLayout != CADENCE.layouts.MOBILE) {
        CADENCE.publish(CADENCE.eventType.LAYOUT_CHANGED, [CADENCE.layouts.MOBILE]);
      }
      CADENCE.currentLayout = CADENCE.layouts.MOBILE;
    }
  };

  CADENCE.UTILS.loadDefaults = function() {
    //console.log('CADENCE.UTILS.loadDefaults');
    //default utils
    CADENCE.UTILS.lazyLoad();
    CADENCE.UTILS.simpleExpandCollapse();

    if ($('body').hasClass('cq-wcm-edit')) {
      CADENCE.editing = true;
    }
  };

    CADENCE.UTILS.redirectLogin = function($URL) {
    if($URL != ""){
      var lhref = window.location.href;
      lhref= lhref.replace("https:/",""); 
        var $redirect = $URL + "/login.html?sredirect=" + lhref;
      if(lhref.indexOf("logout")>-1)
      {
        $redirect = $URL + "login.html?sredirect=/content/cadence-www/global/en_US/home.html";  
      }
        window.location.href = $redirect;
      }
  };
  
  CADENCE.UTILS.escapeRegExp = function (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  };
  
	CADENCE.UTILS.changeitemsnumOWLCarousel = function () {
    var carousel = $('.product-nav');
    sizeData = carousel.parents('.owl-data');
		carousel.find(".owl-slide").each(function() {
			var spanElt = $(this).find('a span');
			var spanary = spanElt.text().split(" ");
		for (i = 0; i < spanary.length; i++) { 
				if(spanary[i].length>14) {
				sizeData.attr('data-items','6');
				sizeData.attr('data-itemsdesktop','5');
				sizeData.attr('data-itemstablet','3');
				sizeData.attr('data-itemstabletsmall','2');			
				sizeData.attr('data-itemsmobile','1');
			}
			}			
		});
  };
  return CADENCE.UTILS;
});
