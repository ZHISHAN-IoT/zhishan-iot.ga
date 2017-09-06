(function($) {
  $(document).ready(function() {
	$('.icon-tooltip').each(function(e) {
	  $(this).qtip({
		content: $(this).prop('title')
	  });
	});

	if ($('.colorbox').length) {
	  $(document).bind('cbox_complete', function(){
		$.colorbox.resize();
	  });
	}
	
	if ($('.search-icon').length) {
		$('.search-icon').click(function(e) {
			$('#search-block-form .form-text').toggle();
		});
	}
  });
})(jQuery);