
var searchq='';
var mouseq=false;
var useenter=false;
define(['jquery', 'cadence','cadence.utils', 'bootstrap3-typeahead'], function($) {
$('.clearable').on('keyup', this, function (event) { 
     if (event.keyCode == 13) {
            if(!useenter) {
            if(!mouseq) {
            $(this).val(searchq);
	    $('.clearable').typeahead('destroy');
            }
            $(this).parent().submit();
            }
     } else if (event.keyCode == 38 || event.keyCode == 40) {
     useenter=true;
     }	
     else {
     searchq=$(this).val();
     mouseq=false;
     useenter=false;
     }

    });
    
$('.search form').mouseup(function() {
searchq=$('.clearable').val();
mouseq=true;
});
	// IF window.location.orgin is not defined
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

  // Cadence Search Typeahead Plugin Constructor
  CADENCE.searchTypeaheadServiceURLRoot   = window.location.origin + "/bin/fast/_api/search/suggest?fprequerysuggestions=true&showpeoplenamesuggestions=false&querytext=";
  function CADENCE_SEARCH_TYPEAHEAD() {
    var that = this;
    this.$searchbox = $('.global-search [name="k"]');
    // searchbox should be on all pages, but check for it anyway for good measure
    if (this.$searchbox.length) {
      // init the typeahead plugin
      this.$searchbox.typeahead({
        source: function(query, process) {
          return $.ajax({
            url: CADENCE.searchTypeaheadServiceURLRoot + "%27" + query + "%27",
            type: 'get',
            contentType: "application/xml;charset=utf-8",
			dataType: "xml",
            success: function(data, textStatus , xhr) {
              
              return process(that.parseSuggestionsXML(data, textStatus , xhr));
            }
          });
        },
        minLength: 1
      });
    }
  };

  /**
   * Helper function parses XML data and pulls the Queries:Query elements
   * @param data - in xml format
   * @returns {Array} - the
   */
  CADENCE_SEARCH_TYPEAHEAD.prototype.parseSuggestionsXML = function(data, textStatus , xhr) {
 		var parsedXML = typeof data == 'object' && xhr.responseXML.contentType == 'application/xml' ? data : $.parseXML(xhr.responseText);

      /*
      * JIRA 2141 - Auto population not work for IE and FF
      * Auto population fix for FF and IE. contenType comes different for different
      * Browsers. So parsing the object accordingly and getting the results
      */
      if(xhr.responseXML.contentType == 'application/xml'){
		var $results = $(parsedXML).find('Queries').find('element');
      }else{

          var $results = $(parsedXML).find('d\\:Queries').find('d\\:element');
      }


		var output = [];
		$results.each(function() { //looping through results

            if(xhr.responseXML.contentType == 'application/xml'){
                var title = $(this).find('Query').text();

     			 }else{
				var title = $(this).find('d\\:Query').text();
      			}


		output.push(CADENCE.UTILS.decodeEntities(title));
		});
		return output;


  };

  // initialize as soon as we load this plugin
  (new CADENCE_SEARCH_TYPEAHEAD());

  return CADENCE_SEARCH_TYPEAHEAD;
});
