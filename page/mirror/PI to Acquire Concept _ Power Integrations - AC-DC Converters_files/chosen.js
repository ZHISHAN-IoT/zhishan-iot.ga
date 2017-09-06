jQuery(document).ready(function() {
 //jQuery("#edit-field-vin-min-value-selective, #edit-field-vin-max-value-selective, #edit-field-output-power-value-selective, #edit-field-vout-1-value-selective, #edit-field-vout-2-value-selective, #edit-field-vout-3-value-selective, #edit-field-vout-4-value-selective, #edit-field-vout-5-value-selective, #edit-field-vout-6-value-selective, #edit-field-prod-fam-nid, #edit-field-number-of-outputs-value-selective, #edit-field-output-power-value-selective, #edit-field-topology-tid-selective, #edit-field-isolated-value-selective, #edit-field-application-tid-selective, #edit-field-cv-cc-value-selective").chosen() });
	jQuery("#edit-secondary .form-item select").each(function() {
		if(this.value != "All" && this.value != "") { jQuery("#edit-secondary .fieldset-wrapper").show(); };
		if(jQuery("#edit-field-product-type-value-selective").val() == "DC%2FDC+Converter") {
		 jQuery("#edit-field-igbt-manufacturer-tid-selective-wrapper, #edit-field-igbt-package-tid-selective-wrapper, #edit-field-switching-frequency-value-value-wrapper").css("opacity", 0.001); } 
	 else if(jQuery("#edit-field-igbt-manufacturer-tid-selective-wrapper").css("opacity") < 1){
		 jQuery("#edit-field-igbt-manufacturer-tid-selective-wrapper, #edit-field-igbt-package-tid-selective-wrapper, #edit-field-switching-frequency-value-value-wrapper").css("opacity", 0.01); }
	});
});
