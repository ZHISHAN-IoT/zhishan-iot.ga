(function(a){a("#txtImgEnIco").load(function(){var g=a("#txtImgEnIco");
var e=new Image();
e.src=g.attr("src");
var b=e.height;
var f=e.width;
var i="-"+b+"px";
if(a(window).width()<767){var h=Math.round((f/2)+5);
var d=Math.round((b/2)+5);
var c="-"+d+"px";
a(".txtImgEnIcoPos").css("height",d+"px");
a(".txtImgEnIcoPos").css("width",h+"px");
a(".txtImgEnIcoPos").css("margin-top",c)
}else{a(".txtImgEnIcoPos").css("margin-top",i)
}})
})(jQuery);