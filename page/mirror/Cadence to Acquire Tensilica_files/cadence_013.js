define(['jquery', 'cadence.utils'], function ($) {
    //console.log("ENTERING !!!");
	
	$('body').on('click', '.expanding-featured-content .expandLink', function (e) {
        /* Added for expend icon color change - Start */
        var $im = $(e.target),
            $efcic = $im.closest('.expanding-featured-content'),
            $linkcolor = $(".info .linkcolor", $efcic).val(),
            $linkcolorExpended = $(".content .linkcolorExpanded", $efcic).val();
        
        if ($linkcolorExpended == undefined) {
            $linkcolorExpended = $linkcolor;
        }
        
        if($efcic.hasClass("expanded")) {
            $(".expandLink", $efcic).css("color", $linkcolor);
        } else {
            $(".expandLink", $efcic).css("color", $linkcolorExpended);
        }
        /* Added for expend icon color change - End */

        /* Background of event carousel - Start */
        $(".event-list-expandable .expanding-featured-content .content").css({"background-color":"#ffffff", "padding-bottom":"20px"});
        $(".event-list-expandable .expanding-featured-content .event-view-expanded .details .btn.btn-primary-white.default").css({"background-color":"#09698D", "color":"#ffffff"});
        $(".event-list-expandable .expanding-featured-content .event-view-expanded .details a.btn.btn-primary-white.default").css("color", "#ffffff");
        $(".event-list-expandable .expanding-feature .expandLink").css("top", "-5px");
        /* Background of event carousel - End */
        
    });	
	
    function training_landing_setHeight() {
        var maxHeight = 0;
        $('.default').each(function () {
            $(this).height('auto');
        });
    }
    function eventSession_setHeight() {
        var maxHeight = 0;
        $('.event-session .expandable-info .info').each(function () {
            $(this).height('auto');
        });
        // equal height columns
        $('.event-session .expandable-info .info').each(function () {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        $('.event-session .expandable-info .info').each(function () {
            $(this).height(maxHeight);
        });
    }
    function eventSession_setHeightInner() {
        var maxHeight = 0;
        $('.event-session .expandable-info .info_inner').each(function () {
            $(this).height('auto');
        });
        // equal height columns
        $('.event-session .expandable-info .info_inner').each(function () {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        $('.event-session .expandable-info .info_inner').each(function () {
            $(this).height(maxHeight);
        });
    }
    if ($('.image-overlay .expandLink')) {
        var imageoverlayResizeDebounce;
        $(window).on('resize', function (e) {
            try {
                window.clearTimeout(imageoverlayResizeDebounce);
                imageoverlayResizeDebounce = 0;
            }
            catch (e) {
            }
           if(typeof resizedisable === "undefined") {
	    imageoverlayResizeDebounce = window.setTimeout(resize_imageoverlay, 150);
	   }
        });
        function resize_imageoverlay() {
            var $imgovr = $('.image-overlay.expanded');
            $imgovr.each(function () {
                $this = $(this);
                imgovrLeftOffset = $this.offset().left;
                var $container = $imgovr.closest('.container');
                $this.css({width: $container.width() - imgovrLeftOffset, height: 'auto'});
            });
            $('.image-overlay').each(function () {
                var top_val = $(this).data('top');
                var left_val = $(this).data('left');

                if ((typeof (top_val) == "undefined") || (typeof (left_val) == "undefined")) {
                    top_val = $(this).offset().top;
                    left_val = $(this).offset().left;
                    $(this).data('top', top_val);
                    $(this).data('left', left_val);
                }
                if ($('body').width() < 751) {
                    $(this).css({
                        top: '0',
                        left: '0'
                    });
                } else {
                    $(this).css({
                        top: top_val,
                        left: left_val
                    });
                }
            });
        }
        $('body').on('click', '.image-overlay .expandLink', function (e) {
            e.preventDefault();
            var $me = $(e.target),
                    $container = $me.closest('.container'),
                    $imgovr = $me.closest('.image-overlay'),
                    contitleWidth = 220,
                    contitleHeight = 35,
                    imgovrWidth = $imgovr.width(),
                    imgovrHeight = $imgovr.height(),
                    imgovrLeftOffset = $imgovr.offset().left;

            if ($imgovr.hasClass('expanded')) {
                collapse();
            } else {
                expand();
            }

            function expand() {
                $('.image-overlay').removeClass('expanded');
                $(".image-overlay").css({"background-color": "", "z-index": "100"});
                $('.image-overlay').animate({height: '35px' , width: '220px'}, 100);
                $('.expandLink').html('&#43');

                var def = new $.Deferred();
                def.resolve();
                def.then(function () {
                    $me.html('&times;');
                    
                    var calculatedWidth = $container.width() - imgovrLeftOffset
                    /* CDNCOM - 2184 changes */
                    if(imgovrLeftOffset > 860)
                    {
						calculatedWidth = calculatedWidth + ($container.width()  - 850);

                    }
                    /* CDNCOM - 2184 changes ends*/
                    if (calculatedWidth < 0) {
                    	calculatedWidth = 220;
                    }
                    
                    $imgovr.css({
                        width: calculatedWidth,
                        height: 'auto'
                    });
                    $imgovr.addClass('expanded');
                    var newHeight = $imgovr.height() + 20;
                    $imgovr.css({
                        width: imgovrWidth,
                        height: imgovrHeight
                    });
                    var styles = {
                        width: calculatedWidth,
                        height: newHeight
                    };
                    $(".expanded").css({"background-color" : "#FFFFFF" , "z-index": "9999"});
                    $imgovr.animate(styles);
                })
            }
            function collapse() {

                var def = new $.Deferred();
                $(".expanded").css({"background-color": "" , "z-index": "100"});

                def.resolve();
                def.then(function () {
                    $me.html('+');
                    $imgovr.removeClass('expanded');
                    var styles = {
                        width: contitleWidth,
                        height: contitleHeight
                    };
                    $imgovr.animate(styles);
                })
            }
        })

    }
    if ($('.training-courses.expanding-featured-content').length) {
        var efcResizeDebounce;
        $('.training-courses.expanding-featured-content').each(function () {
            $(this).closest('.section').addClass('expanding-featured-content-base');
            // needed to add this class to the closest row for styling purposes
            //if ($(this).parents('.event-list-expandable').length) {
            //    $(this).closest('.section').addClass('event-list-expandable');
            //}
        });
        //training_landing_setHeight();

        $('body').on('click', '.training-courses.expanding-featured-content .expandLink', function (e) {
 
            e.stopPropagation();
            e.preventDefault();
            var $me = $(e.target),
                    $efc = $me.closest('.training-courses.expanding-featured-content'),
                    $ef = $('.expanding-feature', $efc),
                    $row = $me.closest('.section'),
                    rowLeftOffset = $row.offset().left;

            if ($efc.hasClass('expanded')) {
                collapse();
            }
            else {
                expand();
            }

            function expand() {
                var leftPad = parseFloat($efc.closest("div[class*='col-']").css('padding-left')),
                        efcLeftOffset = $efc.offset().left,
                        efcLeftPosition = $efc.position().left,
                        efcTopPosition = $efc.offset().top - $row.offset().top,
                        efcWidth = $efc.width(),
                        efcHeight = $('.expanding-feature', $efc).length && $('.expanding-feature', $efc).css('height') != undefined ? parseInt($('.expanding-feature', $efc).css('height')) : $efc.height(),
                        efcNewHeight,
                        $col = $efc.closest("div[class*='col-']"),
                        $siblings = $('.expanding-featured-content', $row).not($efc),
                        rowHeight = $row.height(),
                        def = new $.Deferred();
                $efc.data({'parent': $efc.parent(), 'closestCol': $col, 'heightOrig': efcHeight})
                $row.css('min-height', rowHeight);
                //$efc.appendTo($row);
                $efc.css({
                    height: efcHeight + 2,
                });
                $('.expandLink', $efc).html('&#45;');
                //hide other efcs in same row
                //$row.children('.expanding-featured-content')
                def.resolve();
                def.then(function () {
                    //left slide done, now we need to capture height of visible content at 100% width of parent, so we flash efc to 100% width and height auto, capture height, then drop height to what it was before the flash, and animate that and width to full size
                    $efc.addClass('expanded');
                    $efc.css({
                        height: 'auto'
                    })
                    var origHeight = $('.expanding-feature', $efc).css('height');
                    $('.expanding-feature', $efc).data('origHeight', efcHeight).css('height', '');
                    efcNewHeight = $efc.height();
                    $efc.css({
                        height: efcHeight
                    })
                    $efc.parent().animate({
                        'min-height': efcNewHeight
                    });
                    var styles = {
                        height: efcNewHeight
                    };

                    $efc.animate(styles)
                })
            }
            function collapse() {
                var storedCSS = $efc.attr('style'),
                        destHeight,
                        destLeft,
                        leftPad,
                        efcHeight = $('.expanding-feature', $efc).length && $('.expanding-feature', $efc).data('origHeight') != undefined ? parseInt($('.expanding-feature', $efc).data('origHeight')) : $efc.height(),
                        $col = $efc.closest("div[class*='col-']"),
                        $siblings = $('.training-courses.expanding-featured-content', $row).not($efc),
                        def = new $.Deferred();
                destHeight = efcHeight;
                $efc.addClass('expanded').attr('style', storedCSS);

                var styles = {
                    height: destHeight
                };
                $efc.removeClass('expanded');
                $efc.css('min-height', 'auto');
                storedCSS = $efc.attr('style');
                $efc.attr('style', '');
//                $efc.appendTo($efc.data('parent'));
                leftPad = parseFloat($efc.closest("div[class*='col-']").css('padding-left')),
                        destLeft = $efc.offset().left - rowLeftOffset;
                $efc.appendTo($row);
                $efc.attr('style', storedCSS);
                if (destLeft > leftPad) {
                    styles.left = destLeft;
                }
                if ($('.expanding-feature', $efc).data('origHeight') != undefined) {
                    $('.expanding-feature', $efc).animate({'height': efcHeight});
                }
                $row.animate({
                    'min-height': $efc.data('heightOrig')
                }, function () {
                    $row.css('min-height', 0).removeClass('feature-overlayed');
                });
                $efc.animate(styles).promise().then(function () {
                    def.resolve();
                    if ($ef.data('show-siblings') !== true) {
                        $siblings.animate({
                            'opacity': 1
                        });
                    }
                    def.then(function () {
                        $efc.attr('style', '');
                        //$efc.appendTo($efc.data('parent'));
                        $('.expandLink', $efc).html('&#43;');
                    })
                });
            }
        })
    }

    if ( $('.expanding-featured-content').length )  {
        var efcResizeDebounce;
        $('.expanding-featured-content').each(function () {
            $(this).closest('.row').addClass('expanding-featured-content-base');
            // needed to add this class to the closest row for styling purposes
            if ($(this).parents('.event-list-expandable').length) {
                $(this).closest('.row').addClass('event-list-expandable');
            }
        });
        eventSession_setHeightInner();
        eventSession_setHeight();

        $(window).on('resize', function (e) {
            //debounce and handle resizing of expanded EFC elements to match responsive design
            try {
                window.clearTimeout(efcResizeDebounce);
                efcResizeDebounce = 0;
            }
            catch (e) {
                //nah
            }
            efcResizeDebounce = window.setTimeout(resize, 150);
        });
        function resize() {
            eventSession_setHeightInner();
            eventSession_setHeight();
            var $efce = $('.expanding-featured-content.expanded');
            $efce.each(function () {
                $this = $(this);
                var $row = $efce.closest('.row'),
                        $col = $efce.data('closestCol'),
                        targWidth = $row.width() - parseFloat($col.css('padding-left')) - parseFloat($col.css('padding-right')) - 2; //2 for border
                $efce.width(targWidth);
            });
        }

        $('body').on('click', '.expanding-featured-content .expandLink', function (e) {

            e.preventDefault();
            var $me = $(e.target),
                    $efc = $me.closest('.expanding-featured-content'),
                    $ef = $('.expanding-feature', $efc),
                    $row = $me.closest('.row'),
                    rowLeftOffset = $row.offset().left;

            if (!$efc.hasClass('training-courses')) {

                if ($efc.hasClass('expanded')) {
                    collapse();
                }
                else {
                    expand();
                }
            }
            function expand() {
                       console.log('expand');
                var leftPad = parseFloat($efc.closest("div[class*='col-']").css('padding-left')),
                        efcLeftOffset = $efc.offset().left,
                        efcLeftPosition = $efc.position().left,
                        efcTopPosition = $efc.offset().top - $row.offset().top,
                        efcWidth = $efc.width(),
                        efcHeight = $('.expanding-feature', $efc).length && $('.expanding-feature', $efc).css('height') != undefined ? parseInt($('.expanding-feature', $efc).css('height')) : $efc.height(),
                        efcNewHeight,
                        $col = $efc.closest("div[class*='col-']"),
                        $siblings = $('.expanding-featured-content', $row).not($efc),
                        rowHeight = $row.height(),
                        def = new $.Deferred();
                $efc.data({'parent': $efc.parent(), 'closestCol': $col, 'heightOrig': efcHeight})
                $row.css('min-height', rowHeight);
                $efc.appendTo($row);
                $efc.css({
                    position: 'absolute',
                    left: efcLeftOffset - rowLeftOffset,
                    top: efcTopPosition,
                    width: efcWidth + 2, //2 accounts for 1px border on either side
                    height: efcHeight + 2,
                    "z-index": 100
                });
                $('.expandLink', $efc).html('&times;');
                //hide other efcs in same row
                //$row.children('.expanding-featured-content')
                if ($ef.data('show-siblings') !== true) {
                    $row.addClass('feature-overlayed');
                    $siblings.animate({
                        opacity: 0
                    });
                }

                def.resolve();
                def.then(function () {
                    //left slide done, now we need to capture height of visible content at 100% width of parent, so we flash efc to 100% width and height auto, capture height, then drop height to what it was before the flash, and animate that and width to full size
                    $efc.addClass('expanded');
                    $efc.css({
                        width: $row.width(),
                        height: 'auto'
                    })
                    var origHeight = $('.expanding-feature', $efc).css('height');
                    $('.expanding-feature', $efc).data('origHeight', efcHeight).css('height', '');
                    efcNewHeight = $efc.height() + 55; //55 for padding
                    $efc.css({
                        width: efcWidth,
                        height: efcHeight
                    })
                    $efc.parent().animate({
                        'min-height': efcNewHeight
                    });
                    var styles = {
                        width: $row.width() - parseFloat($col.css('padding-left')) - parseFloat($col.css('padding-right')),
                        height: efcNewHeight
                    };
                    if (efcLeftOffset - rowLeftOffset > leftPad) {
                        styles.left = leftPad;
                    }
                    $efc.animate(styles)
                })
            }
            function collapse() {
                var storedCSS = $efc.attr('style'),
                        destWidth = $($efc.data('parent')).parent().width(),
                        destHeight,
                        destLeft,
                        leftPad,
                        efcHeight = $('.expanding-feature', $efc).length && $('.expanding-feature', $efc).data('origHeight') != undefined ? parseInt($('.expanding-feature', $efc).data('origHeight')) : $efc.height(),
                        $col = $efc.closest("div[class*='col-']"),
                        $siblings = $('.expanding-featured-content', $row).not($efc),
                        def = new $.Deferred();
                $efc.attr('style', 'width:' + destWidth + 'px;');
                destHeight = efcHeight;
                $efc.addClass('expanded').attr('style', storedCSS);

                var styles = {
                    width: destWidth,
                    height: destHeight
                };
                $efc.removeClass('expanded');
                $efc.css('min-height', 'auto');
                //flash row to final position to grab left val - we have to flash instead of storing because sizes and positions could change responsively between open and close
                storedCSS = $efc.attr('style');
                $efc.attr('style', '');
                $efc.appendTo($efc.data('parent'));
                leftPad = parseFloat($efc.closest("div[class*='col-']").css('padding-left')),
                        destLeft = $efc.offset().left - rowLeftOffset;
                $efc.appendTo($row);
                $efc.attr('style', storedCSS);
                if (destLeft > leftPad) {
                    styles.left = destLeft;
                }
                if ($('.expanding-feature', $efc).data('origHeight') != undefined) {
                    $('.expanding-feature', $efc).animate({'height': efcHeight});
                }
                $row.animate({
                    'min-height': $efc.data('heightOrig')
                }, function () {
                    $row.css('min-height', 0).removeClass('feature-overlayed');
                });
                $efc.animate(styles).promise().then(function () {
                    def.resolve();
                    if ($ef.data('show-siblings') !== true) {
                        $siblings.animate({
                            'opacity': 1
                        });
                    }
                    def.then(function () {
                        $efc.attr('style', '');
                        $efc.css('z-index', 'auto');
                        $efc.appendTo($efc.data('parent'));
                        $('.expandLink', $efc).html('+');
                    })
                });
                CADENCE.UTILS.evenHeights();
            }

        })
    }

});