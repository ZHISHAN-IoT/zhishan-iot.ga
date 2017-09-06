(function($) {
	var prev_hash = window.location.hash || "#";
	function hash_update() {
		var hash = window.location.hash || "#";
		if (hash != prev_hash) {
			prev_hash = hash;
			$(window).trigger("hashchange");
		}
	}

	$(function() {
		var liar = (navigator.userAgent.indexOf("MSIE") >= 0 && (!("documentMode" in document) || document.documentMode < 8));

		if (!("onhashchange" in window) || liar) {
			setInterval(hash_update,200);
		}
	});

	$.fn.hashchange = function(handler) {
		return handler ? this.on("hashchange", handler) : this.trigger("hashchange");
	};
})(webDriver.jQuery);
