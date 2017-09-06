(function(b){var a=function(d,e,c){if(typeof this.tryCount!=="number"){this.tryCount=1
}if(e==="timeout"){if(this.tryCount<3){this.tryCount++;
b.ajax(this);
return
}return
}if(d.status===500){return
}else{return
}};
b(document).ready(function(){if(CADENCE&&CADENCE.blogFeedData){var c={q:CADENCE.blogFeedData.feedPath,num:10,output:"json",v:"1.0"};
b.ajax({url:"https://api.rss2json.com/v1/api.json",method:"GET",dataType:"json",data:{rss_url:CADENCE.blogFeedData.feedPath,api_key:"loivce6litqfts30tugmv8sq5n18u87hvb6lbmja",count:CADENCE.blogFeedData.feedLimit}}).done(function(d){if(d.status!="ok"){throw d.message
}var f="";
for(var e in d.items){var g=d.items[e];
f+=' <div class="list-item"> <h4><strong><a href="'+g.link+'">'+g.title+'</a></strong></h4><p class="list-item-desc">'+g.contentSnippet+"</p></div>";
"</li></p>"
}b("#blog-feed").html(f)
})
}})
})(jQuery);
(function(b){var a=function(d,e,c){if(typeof this.tryCount!=="number"){this.tryCount=1
}if(e==="timeout"){if(this.tryCount<3){this.tryCount++;
b.ajax(this);
return
}return
}if(d.status===500){return
}else{return
}};
b(document).ready(function(){if(CADENCE&&CADENCE.blogFeedData){var c={q:CADENCE.blogFeedData.feedPath,num:10,output:"json",v:"1.0"};
b.ajax({url:"https://api.rss2json.com/v1/api.json",method:"GET",dataType:"json",data:{rss_url:CADENCE.blogFeedData.feedPath,api_key:"loivce6litqfts30tugmv8sq5n18u87hvb6lbmja",count:CADENCE.blogFeedData.feedLimit}}).done(function(d){if(d.status!="ok"){throw d.message
}var f="";
for(var e in d.items){if(!isNaN(e)){var g=d.items[e];
f+=' <li><p><a href="'+g.link+'">'+g.title+"</a></p><a><span>"+(new Date(g.pubDate.replace(/-/g,"/")).getMonth()+1)+"/"+new Date(g.pubDate.replace(/-/g,"/")).getDate()+"/"+new Date(g.pubDate.replace(/-/g,"/")).getFullYear()+"</span><span>"+g.author+"</span></a></li>";
"</li></p>"
}}b("#blog-feed-nextgen").html(f)
})
}})
})(jQuery);
(function(a){a(document).ready(function(){if(CADENCE&&CADENCE.forumFeedData){var b="https://query.yahooapis.com/v1/public/yql?q=select%20rss.channel.info.item%20from%20html%20where%20url%3D'"+CADENCE.blogFeedData.feedPath+"'%20%20limit%20"+CADENCE.blogFeedData.feedLimit+"&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
a.getJSON(b,function(e){var d="";
for(var c in e.query.results.body){var f=e.query.results.body[c].rss.channel.info.item;
title=f.content;
title=title.replace(/(?:https?|ftp):\/\/[\n\S]+/g,"");
d+=' <div class="list-item"> <h4><strong><a href="'+f.origlink+'">'+title+'</a></strong></h4><p class="list-item-desc">'+f.contentSnippet+"</p></div>";
"</li></p>"
}a("#forum-feed").html(d)
},"jsonp")
}})
})(jQuery);
jQuery(function(b){function a(c){return c?"addClass":"removeClass"
}b(document).on("input",".clearable",function(){b(this)[a(this.value)]("x")
}).on("click",".clearable",function(c){if(b(this).val()!=""){b(this)[a(this.value)]("x");
b(this)[a(this.offsetWidth-18<c.clientX-this.getBoundingClientRect().left)]("onX");
b(this).attr("placeholder",b(this).val())
}}).on("mousemove",".x",function(c){b(this)[a(this.offsetWidth-18<c.clientX-this.getBoundingClientRect().left)]("onX");
b(this).attr("placeholder",b(this).val())
}).on("touchstart click",".onX",function(c){c.preventDefault();
b(this).removeClass("x onX").val("").change();
b(this).attr("placeholder","Search")
});
b(document).ready(function(){if(b('.fast-search-results-default .fast-result-form input[name="k"]').val()!=undefined&&b('.fast-search-results-default .fast-result-form input[name="k"]').val()!=null&&b('.fast-search-results-default .fast-result-form input[name="k"]').val()!=""){b('.global-search .search-main input[name="k"]').attr("value","");
b('.global-search .search-main input[name="k"]').attr("placeholder",document.title)
}var c=b('.global-search .search-main input[name="k"]').attr("placeholder");
if(c&&c!=undefined&&c!=""){b('#search-header .search input[name="k"]').attr("placeholder",c)
}if(b(window).width()<="767"){b(".fast-search-results-default .expand-collapse").addClass("collapsed");
b(".fast-search-results-default .expand-collapse-trigger").addClass("toggled")
}})
});