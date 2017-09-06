$(document).ready(function() {
    var $header = $('header'),
        $nav = $('.nav', $header),
        $navLis = $('li', $nav),
        $navExpandLinks = $('a.nav_expand', $nav),
        $navExpandContent = $('div.sub', $header);

    $navExpandLinks.click(function(e) {
        e.preventDefault();
        var $this = $(this),
            $parent = $this.parent(),
            subId = $parent.attr('id').replace('nav_', 'sub_'),
            isActive = $parent.hasClass('active');
        $navLis.removeClass("active");
        $navExpandContent.removeClass('active');
        if (!isActive) {
            $parent.addClass("active");
            $('#' + subId).addClass('active');
        }

        var isSubProfileActive = $('#sub_profile').hasClass('active');
		if (isSubProfileActive) {
			$('#top_login').addClass('active');
		}
		else {
			$('#top_login').removeClass('active');
		}

    });
	
	$(':not(.collapsible-set) > .collapsible').each(function(index, element) {
		var	$collapsibleIcon = $('.icon',element);
		$collapsibleIcon.click(function(e){
			$(this).parent().toggleClass('expanded');
		});
    });
	
	$('.collapsible-set').each(function(index, element) {
		var	$collapsible = $('.collapsible',element),
			$collapsibleIcon = $('.icon',$collapsible);
		$collapsibleIcon.click(function(e){
			var $this = $(this),
				$parent = $this.parent(),
				isActive = $parent.hasClass('expanded');
			$collapsible.removeClass('expanded');
			if (!isActive) {
				$parent.addClass('expanded');
			}
		});
    });

});