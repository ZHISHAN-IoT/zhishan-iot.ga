

 $(document).ready(function() {
   //alert("11111");

     $(".less").bind( "click", function() {
 		// alert( "clicked on Less'" );
 		 $(this).prev().hide();
         $(this).hide();
         $(this).next().show();
	});


     $(".more").bind( "click", function() {
 		// alert( "clicked on more'" );
 		$(this).prev().prev().show();
        $(this).prev().css('display','block');
        $(this).hide();
	});



  });// ready function close
