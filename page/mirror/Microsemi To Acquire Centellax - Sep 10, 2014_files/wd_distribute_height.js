(function($) {
	webDriver.distributeHeight = function() {
		var $this = $(this);
		var default_proportion = $this.attr("wd_default_proportion");
		default_proportion = default_proportion ? parseFloat(default_proportion) : 1;
		
		$this.children().each(function() {$(this).css("height", "auto"); });
		webDriver.doResize($this);

		var available_height = $this.innerHeight();
		var total_height = 0;
		var total_proportion = 0;
		$this.children().each(function() {
			var $child = $(this);
			var h = $child.outerHeight();
			var min = $child.attr("wd_min_height");
			if (min)
				h = Math.max(parseInt(min), h);
			var max = $child.attr("wd_max_height");
			if (max)
				h = Math.min(parseInt(max), h);
			total_height += h;
			var proportion = $child.attr("wd_proportion");
			total_proportion += proportion ? parseFloat(proportion) : default_proportion;
		});

		var $to_place = $this.children();

		// Everything fits. Just fix heights.
		if (total_height <= available_height) {
			$to_place.each(function() {
				var $child = $(this);
				if ($child.attr("wd_fix_height"))
					$child.outerHeight($child.outerHeight());
			});
			return false;
		}

		// Place all items whose adjusted height is less than its proportional height
		do {
			var $placed = $([]);
			var used_proportion = 0;
			var used_height = 0;
			$to_place.each(function() {
				var $child = $(this);
				var h = $child.outerHeight();
				var min = $child.attr("wd_min_height");
				if (min)
					h = Math.max(parseInt(min), h);
				var max = $child.attr("wd_max_height");
				if (max)
					h = Math.min(parseInt(max), h);
				var proportion = $child.attr("wd_proportion");
				proportion = proportion ? parseFloat(proportion) : default_proportion;
				var prop_height = available_height * proportion / total_proportion;
				if (h <= prop_height) {
					if ($child.attr("wd_fix_height"))
						$child.outerHeight(h);
					$placed = $placed.add($child);
					used_height += h;
					used_proportion += proportion;
				}
			});
			$to_place = $to_place.not($placed);
			available_height -= used_height;
			total_proportion -= used_proportion;
		} while ($placed.length > 0);

		// Place all remaining items
		$to_place.each(function() {
			var $child = $(this);
			if ($child.attr("wd_fix_height")) {
				var proportion = $child.attr("wd_proportion");
				proportion = proportion ? parseFloat(proportion) : default_proportion;
				var prop_height = available_height * proportion / total_proportion;
				$child.outerHeight(prop_height);
			}
		});
	};
})(webDriver.jQuery);
