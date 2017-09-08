$(document).ready(function(){
	var $section_nav = $('nav.drawer section.nav'),
		$nav_ul = $('ul',$section_nav),
		$navLis = $nav_ul.children('li'),
		$a_icons = $('a.icon', $nav_ul);
	
	$a_icons.click(function(e){
		e.preventDefault();
		var $this = $(this),
			$parent = $this.parent(),
			isExpanded = $parent.hasClass('expanded');
			
		$navLis.removeClass('expanded');
		if (!isExpanded) $parent.addClass('expanded');
	});

	$('button.drawer').click(function(e){
		$('html').addClass('drawerOpen');
	});
	
	$('button.search').click(function(e){
		$('#drawer_search_input').addClass('active').focus();
	});
	
	$('#drawer_search_input')
		.keypress(function(e) {
			if (e.keyCode == 13) {
				$('#drawer_search').submit();
			}
		})
		.blur(function(e) {
			$(this).removeClass('active');
		});;
	
	$('.modalMask').click(function(e){
		$('html').removeClass('drawerOpen');
	});

	$('nav.drawer').TIcomTouchSwipe({
		'left': function() {
			$('html').removeClass('drawerOpen');	
		}
	});
});

/**
*  jQuery ti.com swipe events - add swipe events to a dom object
*  @requires jQuery v1.7 or higher
*/
(function( $ , undefined ){
	var TOUCH_SWIPE_NAMESPACE = "TIcomTouchSwipe";
	
	// define some defaults at this level so that we can overwrite after it's been extended
	var defaults = {
			'minSwipeDist': 100,			// minimum distance before considered a swipe (100 is about 2.5 finger widths - need to shorten this if specifically interested in up / down)
			'maxSwipeDuration': 600, 		// maximum milliseconds within which action can be considered a swipe
			'left': function() {},			// called on swipe left
			'right': function() {},			// called on swipe right
			'up': function() {},			// called on swipe up
			'down': function() {},			// called on swipe down
			'vector': function(a, d) {}		// use this if you want to handle your own vectors (angle, distance)
		};
	
	var methods = {
		/**
		 * Initialization method for swipe event detection on target
		 * @param {Object} options	Object that contains defaults
		 */
		init : function(options) {

			// extend the default fields
			var options = $.extend(defaults, options);
			// after extending options remember the options as the new defaults
			defaults = options;
			
			// build out each component (everything in here actually acts like our objects)
			return this.each(function(){
				
				// realized that we need to keep this out here
				var _target = $(this),
					_data = _target.data(TOUCH_SWIPE_NAMESPACE),
					x1, y1, x2, y2,
					elapsedTime,
					startTime;
                
				// there's data, then the component has probably been initialized already
				// we probably don't need to continue with the rest of initialization
				if (_data) return;
				
				_target.on('touchstart', function(e) {
					// TODO: consider what happens to this line if jQuery mobile touch events are available on page
					var touchPoint = e.originalEvent.changedTouches[0];
					x1 = touchPoint.pageX;
					y1 = touchPoint.pageY;
					startTime = new Date().getTime(); 
				});

				_target.on('touchend', function(e) {
					// TODO: consider what happens to this line if jQuery mobile touch events are available on page
					var touchPoint = e.originalEvent.changedTouches[0],
						dist = Math.pow(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2), 0.5);
					x2 = touchPoint.pageX;
					y2 = touchPoint.pageY;
					elapsedTime = new Date().getTime() - startTime; 

					// check to make sure we're within limits to consider this a swipe
					if ((elapsedTime <= defaults.maxSwipeDuration) && (dist >= defaults.minSwipeDist)) {
						// calculate angle in degrees
						// straight up is 0
						// left hemisphere is positive up to 180
						// right hemisphere is negative up to -180
						var angle = Math.atan2(x1 - x2, y1 - y2) * 180 / Math.PI;
						// people mostly care about swiping left (so we handle that first)
						if (45 <= angle && angle <= 135) {
							defaults.left();
						} else if (-45 >= angle && angle >= -135) {
							defaults.right();
						} else if (Math.abs(angle) >= 135) {
							defaults.down();
						} else if (-45 <= angle && angle <= 45) {
							defaults.up();
						}
						defaults.vector(angle, dist);
					}
					return true;
				});

			});
		}, // end init
		destroy : function() {
			return this.each(function(){
				var $this = $(this),
					data = $this.data(TOUCH_SWIPE_NAMESPACE);

				// remove our events
				$this.off('touchstart');
				$this.off('touchend');

				data[TOUCH_SWIPE_NAMESPACE].remove();
				$this.removeData(TOUCH_SWIPE_NAMESPACE);
			});
		} // end destroy (not fully implemented yet)
	};

	$.fn.TIcomTouchSwipe = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply(this, arguments);
		} else {
			$.error( 'Method ' +  method + ' does not exist on TIcomTouchSwipe' );
		}
	};
})( jQuery );