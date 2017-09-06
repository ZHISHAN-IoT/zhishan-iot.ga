/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */
(function(b,a){(function(e){var f={vertical:false,rtl:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},d=false;
e(window).bind("load.jcarousel",function(){d=true
});
e.jcarousel=function(m,h){this.options=e.extend({},f,h||{});
this.locked=false;
this.autoStopped=false;
this.container=null;
this.clip=null;
this.list=null;
this.buttonNext=null;
this.buttonPrev=null;
this.buttonNextState=null;
this.buttonPrevState=null;
if(!h||h.rtl===undefined){this.options.rtl=(e(m).attr("dir")||e("html").attr("dir")||"").toLowerCase()=="rtl"
}this.wh=!this.options.vertical?"width":"height";
this.lt=!this.options.vertical?(this.options.rtl?"right":"left"):"top";
var r="",p=m.className.split(" ");
for(var l=0;
l<p.length;
l++){if(p[l].indexOf("jcarousel-skin")!=-1){e(m).removeClass(p[l]);
r=p[l];
break
}}if(m.nodeName.toUpperCase()=="UL"||m.nodeName.toUpperCase()=="OL"){this.list=e(m);
this.clip=this.list.parents(".jcarousel-clip");
this.container=this.list.parents(".jcarousel-container")
}else{this.container=e(m);
this.list=this.container.find("ul,ol").eq(0);
this.clip=this.container.find(".jcarousel-clip")
}if(this.clip.size()===0){this.clip=this.list.wrap("<div></div>").parent()
}if(this.container.size()===0){this.container=this.clip.wrap("<div></div>").parent()
}if(r!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1){this.container.wrap('<div class=" '+r+'"></div>')
}this.buttonPrev=e(".jcarousel-prev",this.container);
if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null){this.buttonPrev=e(this.options.buttonPrevHTML).appendTo(this.container)
}this.buttonPrev.addClass(this.className("jcarousel-prev"));
this.buttonNext=e(".jcarousel-next",this.container);
if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null){this.buttonNext=e(this.options.buttonNextHTML).appendTo(this.container)
}this.buttonNext.addClass(this.className("jcarousel-next"));
this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});
this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css((this.options.rtl?"right":"left"),0);
this.container.addClass(this.className("jcarousel-container")).css({position:"relative"});
if(!this.options.vertical&&this.options.rtl){this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl")
}var n=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;
var q=this.list.children("li");
var s=this;
if(q.size()>0){var g=0,k=this.options.offset;
q.each(function(){s.format(this,k++);
g+=s.dimension(this,n)
});
this.list.css(this.wh,(g+100)+"px");
if(!h||h.size===undefined){this.options.size=q.size()
}}this.container.css("display","block");
this.funcNext=function(){s.next()
};
this.funcPrev=function(){s.prev()
};
this.funcResize=function(){if(s.resizeTimer){clearTimeout(s.resizeTimer)
}s.resizeTimer=setTimeout(function(){s.reload()
},100)
};
if(this.options.initCallback!==null){this.options.initCallback(this,"init")
}if(!d&&e.browser.safari){this.buttons(false,false);
e(window).bind("load.jcarousel",function(){s.setup()
})
}else{this.setup()
}};
var c=e.jcarousel;
c.fn=c.prototype={jcarousel:"0.2.8"};
c.fn.extend=c.extend=e.extend;
c.fn.extend({setup:function(){this.first=null;
this.last=null;
this.prevFirst=null;
this.prevLast=null;
this.animating=false;
this.timer=null;
this.resizeTimer=null;
this.tail=null;
this.inTail=false;
if(this.locked){return
}this.list.css(this.lt,this.pos(this.options.offset)+"px");
var g=this.pos(this.options.start,true);
this.prevFirst=this.prevLast=null;
this.animate(g,false);
e(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);
if(this.options.setupCallback!==null){this.options.setupCallback(this)
}},reset:function(){this.list.empty();
this.list.css(this.lt,"0px");
this.list.css(this.wh,"10px");
if(this.options.initCallback!==null){this.options.initCallback(this,"reset")
}this.setup()
},reload:function(){if(this.tail!==null&&this.inTail){this.list.css(this.lt,c.intval(this.list.css(this.lt))+this.tail)
}this.tail=null;
this.inTail=false;
if(this.options.reloadCallback!==null){this.options.reloadCallback(this)
}if(this.options.visible!==null){var i=this;
var j=Math.ceil(this.clipping()/this.options.visible),h=0,g=0;
this.list.children("li").each(function(k){h+=i.dimension(this,j);
if(k+1<i.first){g=h
}});
this.list.css(this.wh,h+"px");
this.list.css(this.lt,-g+"px")
}this.scroll(this.first,false)
},lock:function(){this.locked=true;
this.buttons()
},unlock:function(){this.locked=false;
this.buttons()
},size:function(g){if(g!==undefined){this.options.size=g;
if(!this.locked){this.buttons()
}}return this.options.size
},has:function(h,k){if(k===undefined||!k){k=h
}if(this.options.size!==null&&k>this.options.size){k=this.options.size
}for(var g=h;
g<=k;
g++){var l=this.get(g);
if(!l.length||l.hasClass("jcarousel-item-placeholder")){return false
}}return true
},get:function(g){return e(">.jcarousel-item-"+g,this.list)
},add:function(m,r){var o=this.get(m),k=0,h=e(r);
if(o.length===0){var q,l=c.intval(m);
o=this.create(m);
while(true){q=this.get(--l);
if(l<=0||q.length){if(l<=0){this.list.prepend(o)
}else{q.after(o)
}break
}}}else{k=this.dimension(o)
}if(h.get(0).nodeName.toUpperCase()=="LI"){o.replaceWith(h);
o=h
}else{o.empty().append(r)
}this.format(o.removeClass(this.className("jcarousel-item-placeholder")),m);
var p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;
var g=this.dimension(o,p)-k;
if(m>0&&m<this.first){this.list.css(this.lt,c.intval(this.list.css(this.lt))-g+"px")
}this.list.css(this.wh,c.intval(this.list.css(this.wh))+g+"px");
return o
},remove:function(g){var h=this.get(g);
if(!h.length||(g>=this.first&&g<=this.last)){return
}var j=this.dimension(h);
if(g<this.first){this.list.css(this.lt,c.intval(this.list.css(this.lt))+j+"px")
}h.remove();
this.list.css(this.wh,c.intval(this.list.css(this.wh))-j+"px")
},next:function(){if(this.tail!==null&&!this.inTail){this.scrollTail(false)
}else{this.scroll(((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size)?1:this.first+this.options.scroll)
}},prev:function(){if(this.tail!==null&&this.inTail){this.scrollTail(true)
}else{this.scroll(((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1)?this.options.size:this.first-this.options.scroll)
}},scrollTail:function(g){if(this.locked||this.animating||!this.tail){return
}this.pauseAuto();
var h=c.intval(this.list.css(this.lt));
h=!g?h-this.tail:h+this.tail;
this.inTail=!g;
this.prevFirst=this.first;
this.prevLast=this.last;
this.animate(h)
},scroll:function(h,g){if(this.locked||this.animating){return
}this.pauseAuto();
this.animate(this.pos(h),g)
},pos:function(C,k){var n=c.intval(this.list.css(this.lt));
if(this.locked||this.animating){return n
}if(this.options.wrap!="circular"){C=C<1?1:(this.options.size&&C>this.options.size?this.options.size:C)
}var z=this.first>C;
var E=this.options.wrap!="circular"&&this.first<=1?1:this.first;
var H=z?this.get(E):this.get(this.last);
var B=z?E:E-1;
var F=null,A=0,w=false,G=0,D;
while(z?--B>=C:++B<C){F=this.get(B);
w=!F.length;
if(F.length===0){F=this.create(B).addClass(this.className("jcarousel-item-placeholder"));
H[z?"before":"after"](F);
if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(B<=0||B>this.options.size)){D=this.get(this.index(B));
if(D.length){F=this.add(B,D.clone(true))
}}}H=F;
G=this.dimension(F);
if(w){A+=G
}if(this.first!==null&&(this.options.wrap=="circular"||(B>=1&&(this.options.size===null||B<=this.options.size)))){n=z?n+G:n-G
}}var s=this.clipping(),u=[],h=0,t=0;
H=this.get(C-1);
B=C;
while(++h){F=this.get(B);
w=!F.length;
if(F.length===0){F=this.create(B).addClass(this.className("jcarousel-item-placeholder"));
if(H.length===0){this.list.prepend(F)
}else{H[z?"before":"after"](F)
}if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(B<=0||B>this.options.size)){D=this.get(this.index(B));
if(D.length){F=this.add(B,D.clone(true))
}}}H=F;
G=this.dimension(F);
if(G===0){throw new Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...")
}if(this.options.wrap!="circular"&&this.options.size!==null&&B>this.options.size){u.push(F)
}else{if(w){A+=G
}}t+=G;
if(t>=s){break
}B++
}for(var r=0;
r<u.length;
r++){u[r].remove()
}if(A>0){this.list.css(this.wh,this.dimension(this.list)+A+"px");
if(z){n-=A;
this.list.css(this.lt,c.intval(this.list.css(this.lt))-A+"px")
}}var q=C+h-1;
if(this.options.wrap!="circular"&&this.options.size&&q>this.options.size){q=this.options.size
}if(B>q){h=0;
B=q;
t=0;
while(++h){F=this.get(B--);
if(!F.length){break
}t+=this.dimension(F);
if(t>=s){break
}}}var o=q-h+1;
if(this.options.wrap!="circular"&&o<1){o=1
}if(this.inTail&&z){n+=this.tail;
this.inTail=false
}this.tail=null;
if(this.options.wrap!="circular"&&q==this.options.size&&(q-h+1)>=1){var y=c.intval(this.get(q).css(!this.options.vertical?"marginRight":"marginBottom"));
if((t-y)>s){this.tail=t-s-y
}}if(k&&C===this.options.size&&this.tail){n-=this.tail;
this.inTail=true
}while(C-->o){n+=this.dimension(this.get(C))
}this.prevFirst=this.first;
this.prevLast=this.last;
this.first=o;
this.last=q;
return n
},animate:function(k,g){if(this.locked||this.animating){return
}this.animating=true;
var h=this;
var i=function(){h.animating=false;
if(k===0){h.list.css(h.lt,0)
}if(!h.autoStopped&&(h.options.wrap=="circular"||h.options.wrap=="both"||h.options.wrap=="last"||h.options.size===null||h.last<h.options.size||(h.last==h.options.size&&h.tail!==null&&!h.inTail))){h.startAuto()
}h.buttons();
h.notify("onAfterAnimation");
if(h.options.wrap=="circular"&&h.options.size!==null){for(var m=h.prevFirst;
m<=h.prevLast;
m++){if(m!==null&&!(m>=h.first&&m<=h.last)&&(m<1||m>h.options.size)){h.remove(m)
}}}};
this.notify("onBeforeAnimation");
if(!this.options.animation||g===false){this.list.css(this.lt,k+"px");
i()
}else{var l=!this.options.vertical?(this.options.rtl?{right:k}:{left:k}):{top:k};
var j={duration:this.options.animation,easing:this.options.easing,complete:i};
if(e.isFunction(this.options.animationStepCallback)){j.step=this.options.animationStepCallback
}this.list.animate(l,j)
}},startAuto:function(h){if(h!==undefined){this.options.auto=h
}if(this.options.auto===0){return this.stopAuto()
}if(this.timer!==null){return
}this.autoStopped=false;
var g=this;
this.timer=window.setTimeout(function(){g.next()
},this.options.auto*1000)
},stopAuto:function(){this.pauseAuto();
this.autoStopped=true
},pauseAuto:function(){if(this.timer===null){return
}window.clearTimeout(this.timer);
this.timer=null
},buttons:function(i,h){if(i==null){i=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!="first")||this.options.size===null||this.last<this.options.size);
if(!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&&this.last>=this.options.size){i=this.tail!==null&&!this.inTail
}}if(h==null){h=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!="last")||this.first>1);
if(!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1){h=this.tail!==null&&this.inTail
}}var g=this;
if(this.buttonNext.size()>0){this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext);
if(i){this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext)
}this.buttonNext[i?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",i?false:true);
if(this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=i){this.buttonNext.each(function(){g.options.buttonNextCallback(g,this,i)
}).data("jcarouselstate",i)
}}else{if(this.options.buttonNextCallback!==null&&this.buttonNextState!=i){this.options.buttonNextCallback(g,null,i)
}}if(this.buttonPrev.size()>0){this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev);
if(h){this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev)
}this.buttonPrev[h?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",h?false:true);
if(this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=h){this.buttonPrev.each(function(){g.options.buttonPrevCallback(g,this,h)
}).data("jcarouselstate",h)
}}else{if(this.options.buttonPrevCallback!==null&&this.buttonPrevState!=h){this.options.buttonPrevCallback(g,null,h)
}}this.buttonNextState=i;
this.buttonPrevState=h
},notify:function(g){var h=this.prevFirst===null?"init":(this.prevFirst<this.first?"next":"prev");
this.callback("itemLoadCallback",g,h);
if(this.prevFirst!==this.first){this.callback("itemFirstInCallback",g,h,this.first);
this.callback("itemFirstOutCallback",g,h,this.prevFirst)
}if(this.prevLast!==this.last){this.callback("itemLastInCallback",g,h,this.last);
this.callback("itemLastOutCallback",g,h,this.prevLast)
}this.callback("itemVisibleInCallback",g,h,this.first,this.last,this.prevFirst,this.prevLast);
this.callback("itemVisibleOutCallback",g,h,this.prevFirst,this.prevLast,this.first,this.last)
},callback:function(l,o,g,m,k,j,h){if(this.options[l]==null||(typeof this.options[l]!="object"&&o!="onAfterAnimation")){return
}var p=typeof this.options[l]=="object"?this.options[l][o]:this.options[l];
if(!e.isFunction(p)){return
}var q=this;
if(m===undefined){p(q,g,o)
}else{if(k===undefined){this.get(m).each(function(){p(q,this,m,g,o)
})
}else{var r=function(s){q.get(s).each(function(){p(q,this,s,g,o)
})
};
for(var n=m;
n<=k;
n++){if(n!==null&&!(n>=j&&n<=h)){r(n)
}}}}},create:function(g){return this.format("<li></li>",g)
},format:function(l,k){l=e(l);
var h=l.get(0).className.split(" ");
for(var g=0;
g<h.length;
g++){if(h[g].indexOf("jcarousel-")!=-1){l.removeClass(h[g])
}}l.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+k)).css({"float":(this.options.rtl?"right":"left"),"list-style":"none"}).attr("jcarouselindex",k);
return l
},className:function(g){return g+" "+g+(!this.options.vertical?"-horizontal":"-vertical")
},dimension:function(i,j){var h=e(i);
if(j==null){return !this.options.vertical?(h.outerWidth(true)||c.intval(this.options.itemFallbackDimension)):(h.outerHeight(true)||c.intval(this.options.itemFallbackDimension))
}else{var g=!this.options.vertical?j-c.intval(h.css("marginLeft"))-c.intval(h.css("marginRight")):j-c.intval(h.css("marginTop"))-c.intval(h.css("marginBottom"));
e(h).css(this.wh,g+"px");
return this.dimension(h)
}},clipping:function(){return !this.options.vertical?this.clip[0].offsetWidth-c.intval(this.clip.css("borderLeftWidth"))-c.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-c.intval(this.clip.css("borderTopWidth"))-c.intval(this.clip.css("borderBottomWidth"))
},index:function(g,h){if(h==null){h=this.options.size
}return Math.round((((g-1)/h)-Math.floor((g-1)/h))*h)+1
}});
c.extend({defaults:function(g){return e.extend(f,g||{})
},intval:function(g){g=parseInt(g,10);
return isNaN(g)?0:g
},windowLoaded:function(){d=true
}});
e.fn.jcarousel=function(i){if(typeof i=="string"){var g=e(this).data("jcarousel"),h=Array.prototype.slice.call(arguments,1);
return g[i].apply(g,h)
}else{return this.each(function(){var j=e(this).data("jcarousel");
if(j){if(i){e.extend(j.options,i)
}j.reload()
}else{e(this).data("jcarousel",new c(this,i))
}})
}}
})(b)
})(window.$CQ||window.$||function(){throw new Error("jQuery is not defined")
}(),window.$CQ||window.$);