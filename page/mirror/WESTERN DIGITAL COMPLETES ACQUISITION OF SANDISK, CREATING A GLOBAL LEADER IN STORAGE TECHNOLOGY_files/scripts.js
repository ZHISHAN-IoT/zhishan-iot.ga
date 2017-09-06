$(document).ready(function(){

	$('.resources-link a.btn').on('click',function(){
		$(this).parents().find('.grid-menu.scroll-fix').removeClass('slide-open');
	});
    
});
