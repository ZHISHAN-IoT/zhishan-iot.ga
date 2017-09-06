var PADDING; // lazy-initiliazed below
define(['jquery'], function($) {
    CADENCE.FORMS = CADENCE.FORMS || {};
    // function to scroll the page to the form that has errors
    // 
    // CDNCOM-1488/rlehr - enhanced to ensure that error message is visible below header
    CADENCE.FORMS.scrollToError = (function(){
        return function(){
            //  console.log("CADENCE.FORMS.scrollToError()");
            //  $('html, body').animate({ scrollTop : 0 }, 500);
	    //  return;
            // 
            // NOTE/rlehr - lazy initialization b/c cadence.js depends on cadence.forms.js, etc.
            if ( !! $(".form p").hasClass("form_error")) {
		if ( ! PADDING)
		{
		    // a simple struct to map layout to content-padding for the form.
		    //
		    // XXX/rlehr - it would better to calculate the padding from the
		    // page content.  but I didn't find a feasible way to do that.
		    // So I estimated these based on trial-and-error.
                    PADDING = {};
                    PADDING[ CADENCE.layouts.MOBILE ]        =  -40;
                    PADDING[ CADENCE.layouts.PHABLET ]       =  -60; // XXX - not used
                    PADDING[ CADENCE.layouts.TABLET ]        =    0;
                    PADDING[ CADENCE.layouts.DESKTOP ]       =   60;
                    PADDING[ CADENCE.layouts.LARGE_DESKTOP ] =   70;
		}
		var height = { navbar : 0, // a simple struct
                               header : 0,
                               content : PADDING[ CADENCE.currentLayout ]
                             };
		height.content = $("form div.form").height();
		//  console.log("CADENCE.FORMS.scrollToError() - height.content => ["+ height.content +"]; currentLayout => ["+ CADENCE.currentLayout +"];");
		height.navbar = $("header.top nav.navbar").height();
		//  console.log("CADENCE.FORMS.scrollToError() - navbar_bottom => ["+ height.navbar +"]");
		height.header = $(".page-header-wrapper").height();
		//  console.log("CADENCE.FORMS.scrollToError() - header_bottom => ["+ height.header +"]");
		var scroll_distance = height.header + height.content - height.navbar;
		//  console.log("CADENCE.FORMS.scrollToError() - scroll_distance => ["+ scroll_distance +"]");
                $('html, body').animate({ scrollTop : scroll_distance }, 500);
            }
        };
    })();

    /**
     *  Helper function styles select lists and fixes an
     *  issue when displaying within dropdowns
     */
    CADENCE.FORMS.updateSelects = function() {
        //$('select:not(.processed)').each(function(i,o) {
        //    var $s = $(o).addClass('processed');
        //    $s.selectpicker();
        //});
    };

    /**
     * Checks all country dropdowns in forms for a respective state.
     *
     * State dropdown values are prefixed with the country value.
     * country = <option value="country_val">
     * state   = <option value="country_val-state_val">
     */
    CADENCE.FORMS.countryStateDropdowns = function(element, options) {
        this.el = element;
        this.$el = $(this.el);
        this.$form = this.$el;
        this.defaults = {};
        this.settings = $.extend(this.settings, this.defaults || {}, options);
        this.init();
    };
    CADENCE.FORMS.countryStateDropdowns.prototype.constructor = CADENCE.FORMS.countryStateDropdowns;
    CADENCE.FORMS.countryStateDropdowns.prototype.init = function () {
        if  (  $('form#form_service_bureau').length != 0) {
            this.$country = $('#form_service_bureau_country', this.$form);
            this.$state   = $('#form_service_bureau_state', this.$form);
        }   else {
            this.$country = $('.country select.form_field_select', this.$form);
            this.$state   = $('.state select.form_field_select', this.$form);
        }
        this.$states  = this.$state.clone(); // backup the states
        $('option', this.$state).remove();   // remove all options

        // don't bother if no country and state fields
        if (this.$country.length && this.$state.length) {
            // refresh the styled dropdowns
            this.$state.selectpicker('refresh');
            this.$country.on('change', $.proxy(this.update, this));
            this.$country.trigger('change');
        }
    };
    CADENCE.FORMS.countryStateDropdowns.prototype.update = function(e) {
        // get the country value
        var country = $(e.currentTarget).val();
        this.$states.append($('option', this.$state));
        // remove all current options
        $('option', this.$state).remove();
        // append options matching with values beginning with the country
        this.$state.append($('option[value^="' + country + '"]', this.$states));
        // update the styled dropdowns again
        this.$state.selectpicker('refresh');
    };

    //Make a jQuery plugin out of it
    $.fn.countryStateDropdowns = function(options) {
        return this.each(function() {
            if (!$.data(this, 'countryStateDropdowns')) {
                $.data(this, 'countryStateDropdowns',
                       new CADENCE.FORMS.countryStateDropdowns(this, options));
            }
        });
    };

    return CADENCE.FORMS;
});
