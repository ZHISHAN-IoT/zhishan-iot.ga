$(document).ready(
		function() {
			$('.parSearchBox a').on(
					'click',
					function() {
						var current_path = location.pathname.substr(0,
								location.pathname
										.indexOf(relContext.region.locale)
										+ relContext.region.locale.length);
						var parametric_uri = current_path
								+ '/search/parametric_search.html';
						if (relContext.page.productCategory.length > 0) {
							parametric_uri += '?category='
									+ relContext.page.productCategory;
						}
						if (relContext.page.family.length > 0) {
							if (parametric_uri.endsWith('html')) {
								parametric_uri += '?family=';
							} else {
								parametric_uri += '&family=';
							}
							parametric_uri += relContext.page.family.join(':');
						}
						if (relContext.page.series.length > 0) {
							if (parametric_uri.endsWith('html')) {
								parametric_uri += '?series=';
							} else {
								parametric_uri += '&series=';
							}
							parametric_uri += relContext.page.series.join(':');
						}
						if (relContext.page.group.length > 0) {
							if (parametric_uri.endsWith('html')) {
								parametric_uri += '?group=';
							} else {
								parametric_uri += '&group=';
							}
							parametric_uri += relContext.page.group.join(':');
						}
						location.href = parametric_uri;
					});
		});

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(searchString, position) {
		var subjectString = this.toString();
		if (typeof position !== 'number' || !isFinite(position)
				|| Math.floor(position) !== position
				|| position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
}
