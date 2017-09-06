var hashTab=window.location.hash;
var hashMenuID=hashTab+"-menu";
var bootstrapMediaQuery=findBootstrapEnvironment();
$("h3.javascript-check").addClass("hide-if-javascript");
$(window).resize(function(){var b=0;
var d=0;
$("ul#myTab li").each(function(){d++;
if(d>1){b+=$(this).outerWidth()
}});
var a=($(document).width()-b)/2+"px";
$("li#xmp-menu").css("width",a);
$("#myTab li").css({display:"block"})
});
 $(document).ready(function(){
/*	if(hashTab==""){
	$(".tab-pane").first().addClass("in").addClass("active");
	$("ul#myTab li:nth-child(2)").addClass("active");
	$("ul#myTabContent li:nth-child(2)").addClass("active")
}else{
	$(hashTab).first().addClass("in").addClass("active");
	$("ul#myTab li:nth-child(2)").removeClass("active");
	$("ul#myTab li:first").removeClass("active");
	$("ul#myTab li:nth-child(2)").removeClass("active");
	$("ul#myTab li:first").removeClass("active");
	$(hashMenuID).addClass("active")
} */var b=0;
var d=0;
$("ul#myTab li").each(function(){d++;
if(d>1){b+=$(this).outerWidth()
}});
var a=($(document).width()-b)/2+"px";
$("li#xmp-menu").css("width",a);
$("#myTab li").css({display:"inline-block"});
$("ul#myTabSecond  li").each(function(){d++;
if(d>1){b+=$(this).outerWidth()
}});
var a=($(document).width()-b)/2+"px";
$("li#xmp-menu").css("width",a);
$("#myTabSecond  li").css({display:"inline-block"})
});