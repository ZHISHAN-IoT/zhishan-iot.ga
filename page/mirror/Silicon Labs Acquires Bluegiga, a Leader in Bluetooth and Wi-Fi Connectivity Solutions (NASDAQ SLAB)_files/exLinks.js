var arr = [], allLinks = document.links;

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func("/common/download/");
    }
  }
}

addLoadEvent(NDAQ_externalLinks);

// make sure all external links will call the WriteToFile() function
  function NDAQ_externalLinks() {
      
      var websiteUrl = "/common/download/";
        // if no links, do nothing
        if (!allLinks) return;
        
        var tempCount = 0;
        for (var g=0;g<allLinks.length;g++){
          
          var ndq_tempNum = allLinks[g].href;
          
          if (allLinks[g].href && allLinks[g].href.indexOf(websiteUrl) > 0 ){ // if 1

              // add listeners to each link
              if(window.addEventListener){ 
                // Firefox Listener
                //alert("attempting to add event to " + passingUrl);
                allLinks[g].addEventListener('click',function(ndq_tempNum){
                  return function(){
                    NDAQ_writeDownloadTracking(NDAQ_fetchURLParameter(ndq_tempNum,'fileid',1));
                  };
                  }(ndq_tempNum), false);
              } else { 
                // IE Listener
                allLinks[g].attachEvent('onclick', function(ndq_tempNum){
                  return function() {
                    NDAQ_writeDownloadTracking(NDAQ_fetchURLParameter(ndq_tempNum,'fileid',1));
                  };
                  }(ndq_tempNum));
              }

         } //end if 1

      } //end for

    }//end function

    // function to strip out FILEID param
    function NDAQ_fetchURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    var strFILEID = "";
    var ndq_param = param.toUpperCase();
    
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (i=0; i<tempArray.length; i++){
            
            var ndq_param_name = tempArray[i].split('=')[0].toUpperCase();
            
            if (ndq_param_name == ndq_param) {
              strFILEID = tempArray[i].split('=')[1];
            } 
            if(ndq_param_name != ndq_param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    //return baseURL + "?" + newAdditionalURL + rows_txt;
    return strFILEID
}

function NDAQ_writeDownloadTracking(ndq_item){
  s.tl('true', 'd', ndq_item, null, 'navigate');
}
