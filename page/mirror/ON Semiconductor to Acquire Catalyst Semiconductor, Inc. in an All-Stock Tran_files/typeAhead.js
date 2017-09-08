var suggestArray = [];
var linkMap = {};

$(document).ready(function() {
	$.ajax({
        url: "/site/autocomplete/typeAhead",
        dataType: "text",
        success: function(data) {
			var tempArray = data.split("|");
			tempArray.forEach(function(element) {
				var splitIndex = element.indexOf(":");
				if (splitIndex != -1) {
					var keyword = element.substring(0, splitIndex);
					var link = "/PowerSolutions/" + element.substring(splitIndex + 1);
					
					suggestArray.push(keyword);
					linkMap[keyword.toUpperCase()] = link;
				} else {
					suggestArray.push(element);
					linkMap[element.toUpperCase()] = "/PowerSolutions/product.do?id=" + element;
				}
			});
        }
    });

    $("#query").autocomplete({
    	minLength:3,
		source: function(request, response) {
			var outputArray = new Array();
		    if (request && request.term) {
		        var requestRegex = $.trim(request.term).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		        var matcher = new RegExp(requestRegex, "i");
		        for (var j = 0;
		            (j < suggestArray.length) && (outputArray.length < 10); j++) {
		            if (matcher.test(suggestArray[j])) {
		                outputArray.push(suggestArray[j]);
		            }
		        }
		        
		        response(outputArray.length > 8 ? outputArray.slice(0, 8) : outputArray);
		    }
		}, 
		select: function(event, ui) {
			$("#query").val(ui.item.label);
			$("#searchForm").submit();
		}, 
		open: function(event, ui) {
			var terms = $("#query").val();
			var keywords = $.trim(terms).split(" ").join("|");
			var counter = 1;
			
			$(".ui-menu-item").each(function() {
				var item = $(this);
				item.children(".ui-menu-item-wrapper").each(function () {
					var wrapper = $(this);
					wrapper.html(wrapper.text().replace(new RegExp("(" + keywords + ")", "gi"), "<b>$1</b>"));
				});
				
				if (counter % 2 == 1) {
					item.addClass("ac-odd-item");
		        } else {
		        	item.addClass("ac-even-item");
		        }
		        counter++;
			});
		}
    });
	
	$("#searchForm").submit(function(){
		
		var searchText = $.trim($("#query").val());
		if (searchText) {
			var date = new Date();
			var mins = 60;
			date.setTime(date.getTime() + (mins * 60 * 1000));

			$.cookie("searchText", searchText, {
				expires: date, 
				path: "/"
			});

		} else {
			return false;
		}
		
		var searchType = $("select[name='searchType']").val();
		if(searchType == "xref")
			return true;
		
		searchText = searchText.toUpperCase();
		if (linkMap[searchText]) {
            window.location = linkMap[searchText];
            return false;
        } else {
            return true;
        }
		
	});
	
	var searchCookieValue = $.cookie("searchText");
	if (searchCookieValue) $("#query").val(searchCookieValue);
	
});