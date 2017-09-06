define(['jquery','jquery.ui'], function($) {
	$(document).on('touchstart', function (e) {
	var container = $(".ui-datepicker");

		if (!container.is(e.target) // if the target of the click isn't the container...
		&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
				container.hide();
			}
	});
 $(document).ready(function () {
    if(typeof $.fn.datepicker === "function") {
            $("#filter-start-date").datepicker({
                showOn: "button",                                
                buttonText: "<span id=\"filter-start-date-span\"><i class=\"new-calendar-icon\"></i></span>"
            });
            $("#filter-end-date").datepicker({
                showOn: "button",
                buttonText: "<span id=\"filter-end-date-span\"><i class=\"new-calendar-icon\"></i></span>"
            });
        }        
        $('input[name=sortList]').click(function() {
            $(this).closest("form").submit();
        }); 
 });   
 return CADENCE;
});



/*$(".hasDatepicker").on("blur", function(e) { $(this).datepicker("hide"); });*/