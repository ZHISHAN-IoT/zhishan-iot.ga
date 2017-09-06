
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
	Drupal.behaviors.piDynamicWebform = {
	  attach: function (context, settings) {
			var count = 0;
			var total = $('.document_select').length;
			var drawer = 0;
			
			$('.document_select').each(function(f) {
				var doc_id = $(this).attr('id');
				var block_css = 'docinfo-'+doc_id;
				count++;

				
				if (count%3 == 0 || count == total) {
					drawer++;
					$(this).parent().after($('<div class="form_drawer" id="drawer_'+drawer+'"></div>'));
				}
				
				$('#'+doc_id).click(function(e) {

					var rel = $(this).attr('rel');
					var selectedDoc = $(this);

					var itemNum   = rel;			
					var drawerNum = Math.ceil(itemNum/3);
					var drawer_id = '#drawer_'+drawerNum;
					
					$('#docbox').prependTo($(drawer_id));
					$('.form_drawer').css('display','none');
					$(drawer_id).css('display','block');
					

					$('.document_details').css('display','none');
					$('.document_download').css('display','none');
					$('.document_action').css('display','none');

					$('.document_select').removeClass('docSelected');
					selectedDoc.addClass('docSelected');

					if (selectedDoc.hasClass('restricted')) {
						$('#request_access_form').css('display','block');
					}
					else {
						$('#download_document').css('display','block');
					}
					$('.'+block_css).css('display','block');
							
					$('input.form-radio[value="'+doc_id+'"]').attr('checked', true);

					$(drawer_id).css('display','block');
					$('#docbox').slideDown();
				});
			});
		  
	  }
	}


})(jQuery);
