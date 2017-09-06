//$(document).ready(function(){//doesn't work may because $ is causing conflict
jQuery(document).ready(function($) {//works but need to change jQuery inside the function to $
//jQuery(document).ready(function() {//works but need to change $ inside the function to jQuery
  var depth_1=$("ul.sf-menu > li.sf-depth-1");
  var depth_1_count=depth_1.length;    
  /** If have time, try to add event listener with IE fallback
    depth_1[i].mouseover(function(){//this is event handler, should be avoid
    });
  **/		
  for (var i=0;i<depth_1.length;i++) { 
    var column=$("ul.sf-menu > li.sf-depth-1:eq("+i+") li.sf-megamenu-column");
	var column_count=column.length;	  
	  if (column_count > 4) {
	  /*
	  $("ul.sf-menu > li.sf-depth-1:eq("+i+") li.sf-megamenu-column:eq(4)").css("clear","left");//works
      */
	    for (var x=4;x<column_count;x++) {		
		  var y=x%4;		  
		  if (y==0) {
		  column[x].style.clear="left";//works, if use non-jquery object, need to use traditional method
          //$("ul.sf-menu > li.sf-depth-1:eq("+i+") li.sf-megamenu-column:eq("+x+")").css("clear","left");//works
   	      }//end of if y=1
	    }//end of for x<column_count
	 }//end of if column_count> 4    
  }//end of for loop 
});//end of duct ready