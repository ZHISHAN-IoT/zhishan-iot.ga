(function($) {
	webDriver.adjustAspectRatio = function() {
		var $this = $(this);

		var parts = $this.attr("wd_fixed_aspect").split(":");
		var dim = parts[0];
		var w = parts[1];
		var h = parts[2];
		var min = parts[3];
		var max = parts[4];

		if (dim == "both")
			$this.outerWidth(max).outerHeight(max);

		if (dim == "height" || dim == "both") {
			var height = Math.max(min, Math.min(h * $this.outerWidth() / w, max));
			$this.outerHeight(height);
		}

		if (dim == "width" || dim == "both") {
			var width = Math.max(min, Math.min(w * $this.outerHeight() / h, max));
			$this.outerWidth(width);
		}
	}
})(webDriver.jQuery);