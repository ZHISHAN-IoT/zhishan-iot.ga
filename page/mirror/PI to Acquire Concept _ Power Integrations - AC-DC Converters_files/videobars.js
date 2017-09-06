
(function($) {

	/**
	 * Drupal.behaviors Object
	 * 
	 * This is just a stub for attaching custom JS actions that we might want to call on page load. 
	 * 
	 * Normally we would attempt to override the Accordion group's code here and update the settings so that the heightStyle 
	 * property is set as we want for the Accordion to only expand to the height of the contained content. As you'll see in 
	 * the next function, there's no place where flexible variables are called so we're forced to just override the original 
	 * code by copying the original function into our own JavaScript set. I'm naming it exactly the same as the original 
	 * function so that it replaces the original item.
	 * 
	 * If you do a console.log(Drupal.FieldGroup) you'll notice the other JavaScript functions that were defined in the 
	 * modules/contrib/field_group/field_group.js file. We're able to access everything else in that Class because it's 
	 * attached to the Drupal JavaScript object, which is global in regards to these JavaScript "behaviors" files. The only 
	 * other requirement is that this file has to be included after the original field_group.js file, and we do that in the 
	 * pi_toolkit_js_alter() function by including this file and making sure that we set the weight of the file to be higher
	 * than the field_group.js file. 
	 * 
	 */
	Drupal.behaviors.piVideoBar = {
	  attach: function (context, settings) {
		  
		var position = 0;
		var scrollHeight = 0;
		var scrollBody   = 0;
		var maxScroll = 0;

		setTimeout(function() {
			scrollHeight = $('#productRightCol').height();
			scrollBody = $('.scrollbody').height();
			$('.scrollzone').css('height',scrollHeight);
			maxScroll  = scrollBody - scrollHeight;

			if (scrollBody > scrollHeight) {
			  $('#scrollDown').show();		    	
			}
		}, 2000);
		
	    $('.scrollBtn').on('mouseup', function() {

		  var btnId = $(this).prop('id');		

		  if (btnId == 'scrollDown') {
		    position += scrollHeight;
		  } 
		  else {
			position -= scrollHeight;
		  }
		  
			$('div.scrollcontainer')
			  .animate({
			    scrollTop: position,
			  }, 
			  1000, 
			  'swing', 
			  function() { 
				if (position < scrollHeight) {
  				  $('#scrollDown').show();		
				}
				
			    if (position <= 0) {
			      position = 0;
			      $('#scrollUp').hide(); 
			    }
			    else {
		    	  $('#scrollUp').show(); 

		    	  if (position >= maxScroll) {
					$('#scrollDown').hide();		    	
				  }			    	

				  if (position >= 0) {
				    if (position > scrollHeight) {
				      $('#scrollUp').show(); 
				    }
				  }
			    }
			  });
		});	  
		  
	  }
	}


})(jQuery);
