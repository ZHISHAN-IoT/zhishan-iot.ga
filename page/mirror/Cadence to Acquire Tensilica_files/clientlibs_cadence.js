/*!
 * Bootstrap v3.3.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=b60ceab606966e1193d2)
 * Config saved to config.json and https://gist.github.com/b60ceab606966e1193d2
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(a){var b=a.fn.jquery.split(" ")[0].split(".");
if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}}(jQuery),+function(b){function d(g){return this.each(function(){var e=b(this),h=e.data("bs.alert");
h||e.data("bs.alert",h=new f(this)),"string"==typeof g&&h[g].call(e)
})
}var a='[data-dismiss="alert"]',f=function(g){b(g).on("click",a,this.close)
};
f.VERSION="3.3.0",f.TRANSITION_DURATION=150,f.prototype.close=function(k){function g(){j.detach().trigger("closed.bs.alert").remove()
}var h=b(this),l=h.attr("data-target");
l||(l=h.attr("href"),l=l&&l.replace(/.*(?=#[^\s]*$)/,""));
var j=b(l);
k&&k.preventDefault(),j.length||(j=h.closest(".alert")),j.trigger(k=b.Event("close.bs.alert")),k.isDefaultPrevented()||(j.removeClass("in"),b.support.transition&&j.hasClass("fade")?j.one("bsTransitionEnd",g).emulateTransitionEnd(f.TRANSITION_DURATION):g())
};
var c=b.fn.alert;
b.fn.alert=d,b.fn.alert.Constructor=f,b.fn.alert.noConflict=function(){return b.fn.alert=c,this
},b(document).on("click.bs.alert.data-api",a,f.prototype.close)
}(jQuery),+function(b){function c(f){return this.each(function(){var g=b(this),e=g.data("bs.button"),h="object"==typeof f&&f;
e||g.data("bs.button",e=new a(this,h)),"toggle"==f?e.toggle():f&&e.setState(f)
})
}var a=function(f,g){this.$element=b(f),this.options=b.extend({},a.DEFAULTS,g),this.isLoading=!1
};
a.VERSION="3.3.0",a.DEFAULTS={loadingText:"loading..."},a.prototype.setState=function(h){var f="disabled",j=this.$element,g=j.is("input")?"val":"html",k=j.data();
h+="Text",null==k.resetText&&j.data("resetText",j[g]()),setTimeout(b.proxy(function(){j[g](null==k[h]?this.options[h]:k[h]),"loadingText"==h?(this.isLoading=!0,j.addClass(f).attr(f,f)):this.isLoading&&(this.isLoading=!1,j.removeClass(f).removeAttr(f))
},this),0)
},a.prototype.toggle=function(){var g=!0,h=this.$element.closest('[data-toggle="buttons"]');
if(h.length){var f=this.$element.find("input");
"radio"==f.prop("type")&&(f.prop("checked")&&this.$element.hasClass("active")?g=!1:h.find(".active").removeClass("active")),g&&f.prop("checked",!this.$element.hasClass("active")).trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
}g&&this.$element.toggleClass("active")
};
var d=b.fn.button;
b.fn.button=c,b.fn.button.Constructor=a,b.fn.button.noConflict=function(){return b.fn.button=d,this
},b(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var f=b(e.target);
f.hasClass("btn")||(f=f.closest(".btn")),c.call(f,"toggle"),e.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){b(f.target).closest(".btn").toggleClass("focus","focus"==f.type)
})
}(jQuery),+function(b){function d(g){return this.each(function(){var j=b(this),e=j.data("bs.carousel"),k=b.extend({},a.DEFAULTS,j.data(),"object"==typeof g&&g),h="string"==typeof g?g:k.slide;
e||j.data("bs.carousel",e=new a(this,k)),"number"==typeof g?e.to(g):h?e[h]():k.interval&&e.pause().cycle()
})
}var a=function(h,g){this.$element=b(h),this.$indicators=this.$element.find(".carousel-indicators"),this.options=g,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",b.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",b.proxy(this.pause,this)).on("mouseleave.bs.carousel",b.proxy(this.cycle,this))
};
a.VERSION="3.3.0",a.TRANSITION_DURATION=600,a.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},a.prototype.keydown=function(e){switch(e.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}e.preventDefault()
},a.prototype.cycle=function(g){return g||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval)),this
},a.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)
},a.prototype.getItemForDirection=function(h,k){var g="prev"==h?-1:1,l=this.getItemIndex(k),j=(l+g)%this.$items.length;
return this.$items.eq(j)
},a.prototype.to=function(h){var j=this,g=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return h>this.$items.length-1||0>h?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){j.to(h)
}):g==h?this.pause().cycle():this.slide(h>g?"next":"prev",this.$items.eq(h))
},a.prototype.pause=function(g){return g||(this.paused=!0),this.$element.find(".next, .prev").length&&b.support.transition&&(this.$element.trigger(b.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},a.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},a.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},a.prototype.slide=function(v,k){var z=this.$element.find(".item.active"),m=k||this.getItemForDirection(v,z),g=this.interval,y="next"==v?"left":"right",q="next"==v?"first":"last",t=this;
if(!m.length){if(!this.options.wrap){return
}m=this.$element.find(".item")[q]()
}if(m.hasClass("active")){return this.sliding=!1
}var w=m[0],j=b.Event("slide.bs.carousel",{relatedTarget:w,direction:y});
if(this.$element.trigger(j),!j.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var x=b(this.$indicators.children()[this.getItemIndex(m)]);
x&&x.addClass("active")
}var u=b.Event("slid.bs.carousel",{relatedTarget:w,direction:y});
return b.support.transition&&this.$element.hasClass("slide")?(m.addClass(v),m[0].offsetWidth,z.addClass(y),m.addClass(y),z.one("bsTransitionEnd",function(){m.removeClass([v,y].join(" ")).addClass("active"),z.removeClass(["active",y].join(" ")),t.sliding=!1,setTimeout(function(){t.$element.trigger(u)
},0)
}).emulateTransitionEnd(a.TRANSITION_DURATION)):(z.removeClass("active"),m.addClass("active"),this.sliding=!1,this.$element.trigger(u)),g&&this.cycle(),this
}};
var f=b.fn.carousel;
b.fn.carousel=d,b.fn.carousel.Constructor=a,b.fn.carousel.noConflict=function(){return b.fn.carousel=f,this
};
var c=function(g){var k,h=b(this),l=b(h.attr("data-target")||(k=h.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,""));
if(l.hasClass("carousel")){var j=b.extend({},l.data(),h.data()),e=h.attr("data-slide-to");
e&&(j.interval=!1),d.call(l,j),e&&l.data("bs.carousel").to(e),g.preventDefault()
}};
b(document).on("click.bs.carousel.data-api","[data-slide]",c).on("click.bs.carousel.data-api","[data-slide-to]",c),b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var e=b(this);
d.call(e,e.data())
})
})
}(jQuery),+function(d){function h(a){a&&3===a.which||(d(f).remove(),d(k).each(function(){var l=d(this),e=c(l),m={relatedTarget:this};
e.hasClass("open")&&(e.trigger(a=d.Event("hide.bs.dropdown",m)),a.isDefaultPrevented()||(l.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",m)))
}))
}function c(l){var a=l.attr("data-target");
a||(a=l.attr("href"),a=a&&/#[A-Za-z]/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));
var m=a&&d(a);
return m&&m.length?m:l.parent()
}function j(a){return this.each(function(){var e=d(this),l=e.data("bs.dropdown");
l||e.data("bs.dropdown",l=new g(this)),"string"==typeof a&&l[a].call(e)
})
}var f=".dropdown-backdrop",k='[data-toggle="dropdown"]',g=function(a){d(a).on("click.bs.dropdown",this.toggle)
};
g.VERSION="3.3.0",g.prototype.toggle=function(p){var l=d(this);
if(!l.is(".disabled, :disabled")){var q=c(l),m=q.hasClass("open");
if(h(),!m){"ontouchstart" in document.documentElement&&!q.closest(".navbar-nav").length&&d('<div class="dropdown-backdrop"/>').insertAfter(d(this)).on("click",h);
var e={relatedTarget:this};
if(q.trigger(p=d.Event("show.bs.dropdown",e)),p.isDefaultPrevented()){return
}l.trigger("focus").attr("aria-expanded","true"),q.toggleClass("open").trigger("shown.bs.dropdown",e)
}return !1
}},g.prototype.keydown=function(u){if(/(38|40|27|32)/.test(u.which)){var v=d(this);
if(u.preventDefault(),u.stopPropagation(),!v.is(".disabled, :disabled")){var q=c(v),t=q.hasClass("open");
if(!t&&27!=u.which||t&&27==u.which){return 27==u.which&&q.find(k).trigger("focus"),v.trigger("click")
}var n=" li:not(.divider):visible a",m=q.find('[role="menu"]'+n+', [role="listbox"]'+n);
if(m.length){var p=m.index(u.target);
38==u.which&&p>0&&p--,40==u.which&&p<m.length-1&&p++,~p||(p=0),m.eq(p).trigger("focus")
}}}};
var b=d.fn.dropdown;
d.fn.dropdown=j,d.fn.dropdown.Constructor=g,d.fn.dropdown.noConflict=function(){return d.fn.dropdown=b,this
},d(document).on("click.bs.dropdown.data-api",h).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()
}).on("click.bs.dropdown.data-api",k,g.prototype.toggle).on("keydown.bs.dropdown.data-api",k,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)
}(jQuery),+function(b){function c(f,g){return this.each(function(){var e=b(this),j=e.data("bs.modal"),h=b.extend({},a.DEFAULTS,e.data(),"object"==typeof f&&f);
j||e.data("bs.modal",j=new a(this,h)),"string"==typeof f?j[f](g):h.show&&j.show(g)
})
}var a=function(g,f){this.options=f,this.$body=b(document.body),this.$element=b(g),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,b.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
a.VERSION="3.3.0",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
},a.prototype.show=function(g){var h=this,f=b.Event("show.bs.modal",{relatedTarget:g});
this.$element.trigger(f),this.isShown||f.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',b.proxy(this.hide,this)),this.backdrop(function(){var e=b.support.transition&&h.$element.hasClass("fade");
h.$element.parent().length||h.$element.appendTo(h.$body),h.$element.show().scrollTop(0),e&&h.$element[0].offsetWidth,h.$element.addClass("in").attr("aria-hidden",!1),h.enforceFocus();
var j=b.Event("shown.bs.modal",{relatedTarget:g});
e?h.$element.find(".modal-dialog").one("bsTransitionEnd",function(){h.$element.trigger("focus").trigger(j)
}).emulateTransitionEnd(a.TRANSITION_DURATION):h.$element.trigger("focus").trigger(j)
}))
},a.prototype.hide=function(f){f&&f.preventDefault(),f=b.Event("hide.bs.modal"),this.$element.trigger(f),this.isShown&&!f.isDefaultPrevented()&&(this.isShown=!1,this.escape(),b(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),b.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",b.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())
},a.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")
},this))
},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",b.proxy(function(e){27==e.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},a.prototype.hideModal=function(){var e=this;
this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")
})
},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},a.prototype.backdrop=function(h){var j=this,f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var k=b.support.transition&&f;
if(this.$backdrop=b('<div class="modal-backdrop '+f+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",b.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))
},this)),k&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!h){return
}k?this.$backdrop.one("bsTransitionEnd",h).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):h()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){j.removeBackdrop(),h&&h()
};
b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):g()
}else{h&&h()
}}},a.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()
},a.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);
this.scrollbarWidth&&this.$body.css("padding-right",e+this.scrollbarWidth)
},a.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
},a.prototype.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth){return 0
}var f=document.createElement("div");
f.className="modal-scrollbar-measure",this.$body.append(f);
var g=f.offsetWidth-f.clientWidth;
return this.$body[0].removeChild(f),g
};
var d=b.fn.modal;
b.fn.modal=c,b.fn.modal.Constructor=a,b.fn.modal.noConflict=function(){return b.fn.modal=d,this
},b(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var h=b(this),f=h.attr("href"),j=b(h.attr("data-target")||f&&f.replace(/.*(?=#[^\s]+$)/,"")),g=j.data("bs.modal")?"toggle":b.extend({remote:!/#/.test(f)&&f},j.data(),h.data());
h.is("a")&&e.preventDefault(),j.one("show.bs.modal",function(k){k.isDefaultPrevented()||j.one("hidden.bs.modal",function(){h.is(":visible")&&h.trigger("focus")
})
}),c.call(j,g,this)
})
}(jQuery),+function(b){function c(f){return this.each(function(){var h=b(this),e=h.data("bs.tooltip"),j="object"==typeof f&&f,g=j&&j.selector;
(e||"destroy"!=f)&&(g?(e||h.data("bs.tooltip",e={}),e[g]||(e[g]=new a(this,j))):e||h.data("bs.tooltip",e=new a(this,j)),"string"==typeof f&&e[f]())
})
}var a=function(f,g){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",f,g)
};
a.VERSION="3.3.0",a.TRANSITION_DURATION=150,a.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},a.prototype.init=function(m,h,p){this.enabled=!0,this.type=m,this.$element=b(h),this.options=this.getOptions(p),this.$viewport=this.options.viewport&&b(this.options.viewport.selector||this.options.viewport);
for(var j=this.options.trigger.split(" "),q=j.length;
q--;
){var k=j[q];
if("click"==k){this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this))
}else{if("manual"!=k){var g="hover"==k?"mouseenter":"focusin",f="hover"==k?"mouseleave":"focusout";
this.$element.on(g+"."+this.type,this.options.selector,b.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,b.proxy(this.leave,this))
}}}this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},a.prototype.getDefaults=function(){return a.DEFAULTS
},a.prototype.getOptions=function(f){return f=b.extend({},this.getDefaults(),this.$element.data(),f),f.delay&&"number"==typeof f.delay&&(f.delay={show:f.delay,hide:f.delay}),f
},a.prototype.getDelegateOptions=function(){var g={},f=this.getDefaults();
return this._options&&b.each(this._options,function(e,h){f[e]!=h&&(g[e]=h)
}),g
},a.prototype.enter=function(g){var f=g instanceof this.constructor?g:b(g.currentTarget).data("bs."+this.type);
return f&&f.$tip&&f.$tip.is(":visible")?void (f.hoverState="in"):(f||(f=new this.constructor(g.currentTarget,this.getDelegateOptions()),b(g.currentTarget).data("bs."+this.type,f)),clearTimeout(f.timeout),f.hoverState="in",f.options.delay&&f.options.delay.show?void (f.timeout=setTimeout(function(){"in"==f.hoverState&&f.show()
},f.options.delay.show)):f.show())
},a.prototype.leave=function(g){var f=g instanceof this.constructor?g:b(g.currentTarget).data("bs."+this.type);
return f||(f=new this.constructor(g.currentTarget,this.getDelegateOptions()),b(g.currentTarget).data("bs."+this.type,f)),clearTimeout(f.timeout),f.hoverState="out",f.options.delay&&f.options.delay.hide?void (f.timeout=setTimeout(function(){"out"==f.hoverState&&f.hide()
},f.options.delay.hide)):f.hide()
},a.prototype.show=function(){var B=b.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(B);
var q=b.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(B.isDefaultPrevented()||!q){return
}var H=this,t=this.tip(),j=this.getUID(this.type);
this.setContent(),t.attr("id",j),this.$element.attr("aria-describedby",j),this.options.animation&&t.addClass("fade");
var E="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,y=x.test(E);
y&&(E=E.replace(x,"")||"top"),t.detach().css({top:0,left:0,display:"block"}).addClass(E).data("bs."+this.type,this),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element);
var C=this.getPosition(),k=t[0].offsetWidth,D=t[0].offsetHeight;
if(y){var A=E,G=this.options.container?b(this.options.container):this.$element.parent(),z=this.getPosition(G);
E="bottom"==E&&C.bottom+D>z.bottom?"top":"top"==E&&C.top-D<z.top?"bottom":"right"==E&&C.right+k>z.width?"left":"left"==E&&C.left-k<z.left?"right":E,t.removeClass(A).addClass(E)
}var F=this.getCalculatedOffset(E,C,k,D);
this.applyPlacement(F,E);
var w=function(){var e=H.hoverState;
H.$element.trigger("shown.bs."+H.type),H.hoverState=null,"out"==e&&H.leave(H)
};
b.support.transition&&this.$tip.hasClass("fade")?t.one("bsTransitionEnd",w).emulateTransitionEnd(a.TRANSITION_DURATION):w()
}},a.prototype.applyPlacement=function(w,t){var k=this.tip(),A=k[0].offsetWidth,m=k[0].offsetHeight,g=parseInt(k.css("margin-top"),10),z=parseInt(k.css("margin-left"),10);
isNaN(g)&&(g=0),isNaN(z)&&(z=0),w.top=w.top+g,w.left=w.left+z,b.offset.setOffset(k[0],b.extend({using:function(e){k.css({top:Math.round(e.top),left:Math.round(e.left)})
}},w),0),k.addClass("in");
var q=k[0].offsetWidth,u=k[0].offsetHeight;
"top"==t&&u!=m&&(w.top=w.top+m-u);
var x=this.getViewportAdjustedDelta(t,w,q,u);
x.left?w.left+=x.left:w.top+=x.top;
var j=/top|bottom/.test(t),y=j?2*x.left-A+q:2*x.top-m+u,v=j?"offsetWidth":"offsetHeight";
k.offset(w),this.replaceArrow(y,k[0][v],j)
},a.prototype.replaceArrow=function(g,h,f){this.arrow().css(f?"left":"top",50*(1-g/h)+"%").css(f?"top":"left","")
},a.prototype.setContent=function(){var f=this.tip(),g=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](g),f.removeClass("fade in top bottom left right")
},a.prototype.hide=function(h){function j(){"in"!=f.hoverState&&k.detach(),f.$element.removeAttr("aria-describedby").trigger("hidden.bs."+f.type),h&&h()
}var f=this,k=this.tip(),g=b.Event("hide.bs."+this.type);
return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(k.removeClass("in"),b.support.transition&&this.$tip.hasClass("fade")?k.one("bsTransitionEnd",j).emulateTransitionEnd(a.TRANSITION_DURATION):j(),this.hoverState=null,this)
},a.prototype.fixTitle=function(){var e=this.$element;
(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")
},a.prototype.hasContent=function(){return this.getTitle()
},a.prototype.getPosition=function(k){k=k||this.$element;
var g=k[0],l="BODY"==g.tagName,h=g.getBoundingClientRect();
null==h.width&&(h=b.extend({},h,{width:h.right-h.left,height:h.bottom-h.top}));
var m=l?{top:0,left:0}:k.offset(),j={scroll:l?document.documentElement.scrollTop||document.body.scrollTop:k.scrollTop()},f=l?{width:b(window).width(),height:b(window).height()}:null;
return b.extend({},h,j,f,m)
},a.prototype.getCalculatedOffset=function(g,h,f,j){return"bottom"==g?{top:h.top+h.height,left:h.left+h.width/2-f/2}:"top"==g?{top:h.top-j,left:h.left+h.width/2-f/2}:"left"==g?{top:h.top+h.height/2-j/2,left:h.left-f}:{top:h.top+h.height/2-j/2,left:h.left+h.width}
},a.prototype.getViewportAdjustedDelta=function(w,q,m,g){var x={top:0,left:0};
if(!this.$viewport){return x
}var j=this.options.viewport&&this.options.viewport.padding||0,f=this.getPosition(this.$viewport);
if(/right|left/.test(w)){var v=q.top-j-f.scroll,k=q.top+j-f.scroll+g;
v<f.top?x.top=f.top-v:k>f.top+f.height&&(x.top=f.top+f.height-k)
}else{var p=q.left-j,u=q.left+j+m;
p<f.left?x.left=f.left-p:u>f.width&&(x.left=f.left+f.width-u)
}return x
},a.prototype.getTitle=function(){var g,h=this.$element,f=this.options;
return g=h.attr("data-original-title")||("function"==typeof f.title?f.title.call(h[0]):f.title)
},a.prototype.getUID=function(e){do{e+=~~(1000000*Math.random())
}while(document.getElementById(e));
return e
},a.prototype.tip=function(){return this.$tip=this.$tip||b(this.options.template)
},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},a.prototype.enable=function(){this.enabled=!0
},a.prototype.disable=function(){this.enabled=!1
},a.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},a.prototype.toggle=function(g){var f=this;
g&&(f=b(g.currentTarget).data("bs."+this.type),f||(f=new this.constructor(g.currentTarget,this.getDelegateOptions()),b(g.currentTarget).data("bs."+this.type,f))),f.tip().hasClass("in")?f.leave(f):f.enter(f)
},a.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type)
})
};
var d=b.fn.tooltip;
b.fn.tooltip=c,b.fn.tooltip.Constructor=a,b.fn.tooltip.noConflict=function(){return b.fn.tooltip=d,this
}
}(jQuery),+function(b){function c(f){return this.each(function(){var h=b(this),e=h.data("bs.popover"),j="object"==typeof f&&f,g=j&&j.selector;
(e||"destroy"!=f)&&(g?(e||h.data("bs.popover",e={}),e[g]||(e[g]=new a(this,j))):e||h.data("bs.popover",e=new a(this,j)),"string"==typeof f&&e[f]())
})
}var a=function(f,g){this.init("popover",f,g)
};
if(!b.fn.tooltip){throw new Error("Popover requires tooltip.js")
}a.VERSION="3.3.0",a.DEFAULTS=b.extend({},b.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.prototype=b.extend({},b.fn.tooltip.Constructor.prototype),a.prototype.constructor=a,a.prototype.getDefaults=function(){return a.DEFAULTS
},a.prototype.setContent=function(){var g=this.tip(),h=this.getTitle(),f=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](h),g.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof f?"html":"append":"text"](f),g.removeClass("fade top bottom left right in"),g.find(".popover-title").html()||g.find(".popover-title").hide()
},a.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},a.prototype.getContent=function(){var f=this.$element,g=this.options;
return f.attr("data-content")||("function"==typeof g.content?g.content.call(f[0]):g.content)
},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
},a.prototype.tip=function(){return this.$tip||(this.$tip=b(this.options.template)),this.$tip
};
var d=b.fn.popover;
b.fn.popover=c,b.fn.popover.Constructor=a,b.fn.popover.noConflict=function(){return b.fn.popover=d,this
}
}(jQuery),+function(b){function d(g){return this.each(function(){var h=b(this),e=h.data("bs.tab");
e||h.data("bs.tab",e=new a(this)),"string"==typeof g&&e[g]()
})
}var a=function(g){this.element=b(g)
};
a.VERSION="3.3.0",a.TRANSITION_DURATION=150,a.prototype.show=function(){var l=this.element,h=l.closest("ul:not(.dropdown-menu)"),m=l.data("target");
if(m||(m=l.attr("href"),m=m&&m.replace(/.*(?=#[^\s]*$)/,"")),!l.parent("li").hasClass("active")){var j=h.find(".active:last a"),p=b.Event("hide.bs.tab",{relatedTarget:l[0]}),k=b.Event("show.bs.tab",{relatedTarget:j[0]});
if(j.trigger(p),l.trigger(k),!k.isDefaultPrevented()&&!p.isDefaultPrevented()){var g=b(m);
this.activate(l.closest("li"),h),this.activate(g,g.parent(),function(){j.trigger({type:"hidden.bs.tab",relatedTarget:l[0]}),l.trigger({type:"shown.bs.tab",relatedTarget:j[0]})
})
}}},a.prototype.activate=function(k,l,h){function m(){j.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),k.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),g?(k[0].offsetWidth,k.addClass("in")):k.removeClass("fade"),k.parent(".dropdown-menu")&&k.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),h&&h()
}var j=l.find("> .active"),g=h&&b.support.transition&&(j.length&&j.hasClass("fade")||!!l.find("> .fade").length);
j.length&&g?j.one("bsTransitionEnd",m).emulateTransitionEnd(a.TRANSITION_DURATION):m(),j.removeClass("in")
};
var f=b.fn.tab;
b.fn.tab=d,b.fn.tab.Constructor=a,b.fn.tab.noConflict=function(){return b.fn.tab=f,this
};
var c=function(e){e.preventDefault(),d.call(b(this),"show")
};
b(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',c).on("click.bs.tab.data-api",'[data-toggle="pill"]',c)
}(jQuery),+function(b){function c(f){return this.each(function(){var g=b(this),e=g.data("bs.affix"),h="object"==typeof f&&f;
e||g.data("bs.affix",e=new a(this,h)),"string"==typeof f&&e[f]()
})
}var a=function(f,g){this.options=b.extend({},a.DEFAULTS,g),this.$target=b(this.options.target).on("scroll.bs.affix.data-api",b.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",b.proxy(this.checkPositionWithEventLoop,this)),this.$element=b(f),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};
a.VERSION="3.3.0",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},a.prototype.getState=function(v,q,m,g){var w=this.$target.scrollTop(),j=this.$element.offset(),f=this.$target.height();
if(null!=m&&"top"==this.affixed){return m>w?"top":!1
}if("bottom"==this.affixed){return null!=m?w+this.unpin<=j.top?!1:"bottom":v-g>=w+f?!1:"bottom"
}var u=null==this.affixed,k=u?w:j.top,p=u?f:q;
return null!=m&&m>=k?"top":null!=g&&k+p>=v-g?"bottom":!1
},a.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(a.RESET).addClass("affix");
var f=this.$target.scrollTop(),g=this.$element.offset();
return this.pinnedOffset=g.top-f
},a.prototype.checkPositionWithEventLoop=function(){setTimeout(b.proxy(this.checkPosition,this),1)
},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var p=this.$element.height(),q=this.options.offset,k=q.top,t=q.bottom,m=b("body").height();
"object"!=typeof q&&(t=k=q),"function"==typeof k&&(k=q.top(this.$element)),"function"==typeof t&&(t=q.bottom(this.$element));
var g=this.getState(m,p,k,t);
if(this.affixed!=g){null!=this.unpin&&this.$element.css("top","");
var f="affix"+(g?"-"+g:""),j=b.Event(f+".bs.affix");
if(this.$element.trigger(j),j.isDefaultPrevented()){return
}this.affixed=g,this.unpin="bottom"==g?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")
}"bottom"==g&&this.$element.offset({top:m-p-t})
}};
var d=b.fn.affix;
b.fn.affix=c,b.fn.affix.Constructor=a,b.fn.affix.noConflict=function(){return b.fn.affix=d,this
},b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var e=b(this),f=e.data();
f.offset=f.offset||{},null!=f.offsetBottom&&(f.offset.bottom=f.offsetBottom),null!=f.offsetTop&&(f.offset.top=f.offsetTop),c.call(e,f)
})
})
}(jQuery),+function(b){function d(h){var g,j=h.attr("data-target")||(g=h.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return b(j)
}function a(g){return this.each(function(){var e=b(this),h=e.data("bs.collapse"),j=b.extend({},f.DEFAULTS,e.data(),"object"==typeof g&&g);
!h&&j.toggle&&"show"==g&&(j.toggle=!1),h||e.data("bs.collapse",h=new f(this,j)),"string"==typeof g&&h[g]()
})
}var f=function(h,g){this.$element=b(h),this.options=b.extend({},f.DEFAULTS,g),this.$trigger=b(this.options.trigger).filter('[href="#'+h.id+'"], [data-target="#'+h.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
f.VERSION="3.3.0",f.TRANSITION_DURATION=350,f.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},f.prototype.dimension=function(){var e=this.$element.hasClass("width");
return e?"width":"height"
},f.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var m,j=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");
if(!(j&&j.length&&(m=j.data("bs.collapse"),m&&m.transitioning))){var o=b.Event("show.bs.collapse");
if(this.$element.trigger(o),!o.isDefaultPrevented()){j&&j.length&&(a.call(j,"hide"),m||j.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!b.support.transition){return h.call(this)
}var g=b.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",b.proxy(h,this)).emulateTransitionEnd(f.TRANSITION_DURATION)[k](this.$element[0][g])
}}}},f.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var j=b.Event("hide.bs.collapse");
if(this.$element.trigger(j),!j.isDefaultPrevented()){var g=this.dimension();
this.$element[g](this.$element[g]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var h=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return b.support.transition?void this.$element[g](0).one("bsTransitionEnd",b.proxy(h,this)).emulateTransitionEnd(f.TRANSITION_DURATION):h.call(this)
}}},f.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},f.prototype.getParent=function(){return b(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(b.proxy(function(e,h){var g=b(h);
this.addAriaAndCollapsedClass(d(g),g)
},this)).end()
},f.prototype.addAriaAndCollapsedClass=function(h,j){var g=h.hasClass("in");
h.attr("aria-expanded",g),j.toggleClass("collapsed",!g).attr("aria-expanded",g)
};
var c=b.fn.collapse;
b.fn.collapse=a,b.fn.collapse.Constructor=f,b.fn.collapse.noConflict=function(){return b.fn.collapse=c,this
},b(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(j){var g=b(this);
g.attr("data-target")||j.preventDefault();
var k=d(g),h=k.data("bs.collapse"),e=h?"toggle":b.extend({},g.data(),{trigger:this});
a.call(k,e)
})
}(jQuery),+function(b){function c(e,g){var f=b.proxy(this.process,this);
this.$body=b("body"),this.$scrollElement=b(b(e).is("body")?window:e),this.options=b.extend({},c.DEFAULTS,g),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f),this.refresh(),this.process()
}function a(e){return this.each(function(){var g=b(this),f=g.data("bs.scrollspy"),h="object"==typeof e&&e;
f||g.data("bs.scrollspy",f=new c(this,h)),"string"==typeof e&&f[e]()
})
}c.VERSION="3.3.0",c.DEFAULTS={offset:10},c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},c.prototype.refresh=function(){var g="offset",f=0;
b.isWindow(this.$scrollElement[0])||(g="position",f=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();
var h=this;
this.$body.find(this.selector).map(function(){var j=b(this),e=j.data("target")||j.attr("href"),k=/^#./.test(e)&&b(e);
return k&&k.length&&k.is(":visible")&&[[k[g]().top+f,e]]||null
}).sort(function(j,k){return j[0]-k[0]
}).each(function(){h.offsets.push(this[0]),h.targets.push(this[1])
})
},c.prototype.process=function(){var g,k=this.$scrollElement.scrollTop()+this.options.offset,f=this.getScrollHeight(),l=this.options.offset+f-this.$scrollElement.height(),h=this.offsets,m=this.targets,j=this.activeTarget;
if(this.scrollHeight!=f&&this.refresh(),k>=l){return j!=(g=m[m.length-1])&&this.activate(g)
}if(j&&k<h[0]){return this.activeTarget=null,this.clear()
}for(g=h.length;
g--;
){j!=m[g]&&k>=h[g]&&(!h[g+1]||k<=h[g+1])&&this.activate(m[g])
}},c.prototype.activate=function(g){this.activeTarget=g,this.clear();
var f=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]',h=b(f).parents("li").addClass("active");
h.parent(".dropdown-menu").length&&(h=h.closest("li.dropdown").addClass("active")),h.trigger("activate.bs.scrollspy")
},c.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var d=b.fn.scrollspy;
b.fn.scrollspy=a,b.fn.scrollspy.Constructor=c,b.fn.scrollspy.noConflict=function(){return b.fn.scrollspy=d,this
},b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var f=b(this);
a.call(f,f.data())
})
})
}(jQuery),+function(a){function b(){var d=document.createElement("bootstrap"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in f){if(void 0!==d.style[c]){return{end:f[c]}
}}return !1
}a.fn.emulateTransitionEnd=function(f){var c=!1,g=this;
a(this).one("bsTransitionEnd",function(){c=!0
});
var d=function(){c||a(g).trigger(a.support.transition.end)
};
return setTimeout(d,f),this
},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(c){return a(c.target).is(this)?c.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery);
/*!
 * Bootstrap-select v1.6.3 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE) 
 */
(function(d){d.expr[":"].icontains=function(k,h,j){return g(d(k).text(),j[3])
};
d.expr[":"].aicontains=function(k,h,j){return g(d(k).data("normalizedText")||d(k).text(),j[3])
};
function g(h,j){return h.toUpperCase().indexOf(j.toUpperCase())>-1
}function f(j){var h=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];
d.each(h,function(){j=j.replace(this.re,this.ch)
});
return j
}function e(j){var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var n="(?:"+Object.keys(l).join("|")+")",m=new RegExp(n),k=new RegExp(n,"g"),h=j==null?"":""+j;
return m.test(h)?h.replace(k,function(o){return l[o]
}):h
}var b=function(j,h,k){if(k){k.stopPropagation();
k.preventDefault()
}this.$element=d(j);
this.$newElement=null;
this.$button=null;
this.$menu=null;
this.$lis=null;
this.options=h;
if(this.options.title===null){this.options.title=this.$element.attr("title")
}this.val=b.prototype.val;
this.render=b.prototype.render;
this.refresh=b.prototype.refresh;
this.setStyle=b.prototype.setStyle;
this.selectAll=b.prototype.selectAll;
this.deselectAll=b.prototype.deselectAll;
this.destroy=b.prototype.remove;
this.remove=b.prototype.remove;
this.show=b.prototype.show;
this.hide=b.prototype.hide;
this.init()
};
b.VERSION="1.6.3";
b.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results match",countSelectedText:function(j,h){return(j==1)?"{0} item selected":"{0} items selected"
},maxOptionsText:function(j,k){var h=[];
h[0]=(j==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)";
h[1]=(k==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)";
return h
},selectAllText:"Select All",deselectAllText:"Deselect All",multipleSeparator:", ",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false,searchAccentInsensitive:false};
b.prototype={constructor:b,init:function(){var h=this,j=this.$element.attr("id");
this.$element.hide();
this.multiple=this.$element.prop("multiple");
this.autofocus=this.$element.prop("autofocus");
this.$newElement=this.createView();
this.$element.after(this.$newElement);
this.$menu=this.$newElement.find("> .dropdown-menu");
this.$button=this.$newElement.find("> button");
this.$searchbox=this.$newElement.find("input");
if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")
}if(typeof j!=="undefined"){this.$button.attr("data-id",j);
d('label[for="'+j+'"]').click(function(k){k.preventDefault();
h.$button.focus()
})
}this.checkDisabled();
this.clickListener();
if(this.options.liveSearch){this.liveSearchListener()
}this.render();
this.liHeight();
this.setStyle();
this.setWidth();
if(this.options.container){this.selectPosition()
}this.$menu.data("this",this);
this.$newElement.data("this",this);
if(this.options.mobile){this.mobile()
}},createDropdown:function(){var j=this.multiple?" show-tick":"",k=this.$element.parent().hasClass("input-group")?" input-group-btn":"",p=this.autofocus?" autofocus":"",h=this.$element.parents().hasClass("form-group-lg")?" btn-lg":(this.$element.parents().hasClass("form-group-sm")?" btn-sm":"");
var o=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";
var n=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+e(this.options.liveSearchPlaceholder)+'"')+"></div>":"";
var m=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">'+this.options.selectAllText+'</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">'+this.options.deselectAllText+"</button></div></div>":"";
var l='<div class="btn-group bootstrap-select'+j+k+'"><button type="button" class="btn dropdown-toggle form-control selectpicker'+h+'" data-toggle="dropdown"'+p+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+o+n+m+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';
return d(l)
},createView:function(){var h=this.createDropdown();
var j=this.createLi();
h.find("ul").append(j);
return h
},reloadLi:function(){this.destroyLi();
var h=this.createLi();
this.$menu.find("ul").append(h)
},destroyLi:function(){this.$menu.find("li").remove()
},createLi:function(){var l=this,k=[],m=0;
var h=function(p,n,o){return"<li"+(typeof o!=="undefined"?' class="'+o+'"':"")+(typeof n!=="undefined"|null===n?' data-original-index="'+n+'"':"")+">"+p+"</li>"
};
var j=function(r,o,q,n){var p=f(e(r));
return'<a tabindex="0"'+(typeof o!=="undefined"?' class="'+o+'"':"")+(typeof q!=="undefined"?' style="'+q+'"':"")+(typeof n!=="undefined"?'data-optgroup="'+n+'"':"")+' data-normalized-text="'+p+'">'+r+'<icon class="'+l.options.iconBase+" "+l.options.tickIcon+' check-mark"></icon></a>'
};
this.$element.find("option").each(function(){var r=d(this);
var o=r.attr("class")||"",q=r.attr("style"),w=r.data("content")?r.data("content"):r.html(),u=typeof r.data("subtext")!=="undefined"?'<small class="muted text-muted">'+r.data("subtext")+"</small>":"",s=typeof r.data("icon")!=="undefined"?'<icon class="'+l.options.iconBase+" "+r.data("icon")+'"></icon> ':"",v=r.is(":disabled")||r.parent().is(":disabled"),p=r.index();
if(s!==""&&v){s="<span>"+s+"</span>"
}if(!r.data("content")){w=s+'<span class="text">'+w+u+"</span>"
}if(l.options.hideDisabled&&v){return
}if(r.parent().is("optgroup")&&r.data("divider")!==true){if(r.index()===0){m+=1;
var t=r.parent().attr("label");
var x=typeof r.parent().data("subtext")!=="undefined"?'<small class="muted text-muted">'+r.parent().data("subtext")+"</small>":"";
var n=r.parent().data("icon")?'<icon class="'+l.options.iconBase+" "+r.parent().data("icon")+'"></icon> ':"";
t=n+'<span class="text">'+t+x+"</span>";
if(p!==0&&k.length>0){k.push(h("",null,"divider"))
}k.push(h(t,null,"dropdown-header"))
}k.push(h(j(w,"opt "+o,q,m),p))
}else{if(r.data("divider")===true){k.push(h("",p,"divider"))
}else{if(r.data("hidden")===true){k.push(h(j(w,o,q),p,"hidden is-hidden"))
}else{k.push(h(j(w,o,q),p))
}}}});
if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")
}return d(k.join(""))
},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")
}return this.$lis
},render:function(l){var k=this;
if(l!==false){this.$element.find("option").each(function(q){k.setDisabled(q,d(this).is(":disabled")||d(this).parent().is(":disabled"));
k.setSelected(q,d(this).is(":selected"))
})
}this.tabIndex();
var n=this.options.hideDisabled?":not([disabled])":"";
var p=this.$element.find("option:selected"+n).map(function(){var s=d(this);
var r=s.data("icon")&&k.options.showIcon?'<i class="'+k.options.iconBase+" "+s.data("icon")+'"></i> ':"";
var q;
if(k.options.showSubtext&&s.attr("data-subtext")&&!k.multiple){q=' <small class="muted text-muted">'+s.data("subtext")+"</small>"
}else{q=""
}if(s.data("content")&&k.options.showContent){return s.data("content")
}else{if(typeof s.attr("title")!=="undefined"){return s.attr("title")
}else{return r+s.html()+q
}}}).toArray();
var m=!this.multiple?p[0]:p.join(this.options.multipleSeparator);
if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");
if((h.length>1&&p.length>h[1])||(h.length==1&&p.length>=2)){n=this.options.hideDisabled?", [disabled]":"";
var j=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+n).length,o=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(p.length,j):this.options.countSelectedText;
m=o.replace("{0}",p.length.toString()).replace("{1}",j.toString())
}}this.options.title=this.$element.attr("title");
if(this.options.selectedTextFormat=="static"){m=this.options.title
}if(!m){m=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText
}this.$button.attr("title",d.trim(m.replace(/<[^>]*>?/g,"")));
this.$newElement.find(".filter-option").html(m)
},setStyle:function(k,j){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi,""))
}var h=k?k:this.options.style;
if(j=="add"){this.$button.addClass(h)
}else{if(j=="remove"){this.$button.removeClass(h)
}else{this.$button.removeClass(this.options.style);
this.$button.addClass(h)
}}},liHeight:function(){if(this.options.size===false){return
}var l=this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus",false).end().appendTo("body"),m=l.addClass("open").find("> .dropdown-menu"),k=m.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),j=this.options.header?m.find(".popover-title").outerHeight():0,n=this.options.liveSearch?m.find(".bs-searchbox").outerHeight():0,h=this.options.actionsBox?m.find(".bs-actionsbox").outerHeight():0;
l.remove();
this.$newElement.data("liHeight",k).data("headerHeight",j).data("searchHeight",n).data("actionsHeight",h)
},setSize:function(){this.findLis();
var o=this,j=this.$menu,p=j.find(".inner"),A=this.$newElement.outerHeight(),l=this.$newElement.data("liHeight"),y=this.$newElement.data("headerHeight"),s=this.$newElement.data("searchHeight"),n=this.$newElement.data("actionsHeight"),r=this.$lis.filter(".divider").outerHeight(true),x=parseInt(j.css("padding-top"))+parseInt(j.css("padding-bottom"))+parseInt(j.css("border-top-width"))+parseInt(j.css("border-bottom-width")),v=this.options.hideDisabled?", .disabled":"",u=d(window),m=x+parseInt(j.css("margin-top"))+parseInt(j.css("margin-bottom"))+2,w,B,z,q=function(){B=o.$newElement.offset().top-u.scrollTop();
z=u.height()-B-A
};
q();
if(this.options.header){j.css("padding-top",0)
}if(this.options.size=="auto"){var k=function(){var D,C=o.$lis.not(".hidden");
q();
w=z-m;
if(o.options.dropupAuto){o.$newElement.toggleClass("dropup",(B>z)&&((w-m)<j.height()))
}if(o.$newElement.hasClass("dropup")){w=B-m
}if((C.length+C.filter(".dropdown-header").length)>3){D=l*3+m-2
}else{D=0
}j.css({"max-height":w+"px",overflow:"hidden","min-height":D+y+s+n+"px"});
p.css({"max-height":w-y-s-n-x+"px","overflow-y":"auto","min-height":Math.max(D-x,0)+"px"})
};
k();
this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",k);
d(window).off("resize.getSize").on("resize.getSize",k);
d(window).off("scroll.getSize").on("scroll.getSize",k)
}else{if(this.options.size&&this.options.size!="auto"&&j.find("li"+v).length>this.options.size){var t=this.$lis.not(".divider"+v).find(" > *").slice(0,this.options.size).last().parent().index();
var h=this.$lis.slice(0,t+1).filter(".divider").length;
w=l*this.options.size+h*r+x;
if(o.options.dropupAuto){this.$newElement.toggleClass("dropup",(B>z)&&(w<j.height()))
}j.css({"max-height":w+y+s+n+"px",overflow:"hidden"});
p.css({"max-height":w-x+"px","overflow-y":"auto"})
}}},setWidth:function(){if(this.options.width=="auto"){this.$menu.css("min-width","0");
var k=this.$newElement.clone().appendTo("body");
var h=k.find("> .dropdown-menu").css("width");
var j=k.css("width","auto").find("> button").css("width");
k.remove();
this.$newElement.css("width",Math.max(parseInt(h),parseInt(j))+"px")
}else{if(this.options.width=="fit"){this.$menu.css("min-width","");
this.$newElement.css("width","").addClass("fit-width")
}else{if(this.options.width){this.$menu.css("min-width","");
this.$newElement.css("width",this.options.width)
}else{this.$menu.css("min-width","");
this.$newElement.css("width","")
}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")
}},selectPosition:function(){var k=this,j="<div />",l=d(j),n,m,h=function(o){l.addClass(o.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",o.hasClass("dropup"));
n=o.offset();
m=o.hasClass("dropup")?0:o[0].offsetHeight;
l.css({top:n.top+m,left:n.left,width:o[0].offsetWidth,position:"absolute"})
};
this.$newElement.on("click",function(){if(k.isDisabled()){return
}h(d(this));
l.appendTo(k.options.container);
l.toggleClass("open",!d(this).hasClass("open"));
l.append(k.$menu)
});
d(window).resize(function(){h(k.$newElement)
});
d(window).on("scroll",function(){h(k.$newElement)
});
d("html").on("click",function(o){if(d(o.target).closest(k.$newElement).length<1){l.removeClass("open")
}})
},setSelected:function(h,j){this.findLis();
this.$lis.filter('[data-original-index="'+h+'"]').toggleClass("selected",j)
},setDisabled:function(h,j){this.findLis();
if(j){this.$lis.filter('[data-original-index="'+h+'"]').addClass("disabled").find("a").attr("href","#").attr("tabindex",-1)
}else{this.$lis.filter('[data-original-index="'+h+'"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)
}},isDisabled:function(){return this.$element.is(":disabled")
},checkDisabled:function(){var h=this;
if(this.isDisabled()){this.$button.addClass("disabled").attr("tabindex",-1)
}else{if(this.$button.hasClass("disabled")){this.$button.removeClass("disabled")
}if(this.$button.attr("tabindex")==-1){if(!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")
}}}this.$button.click(function(){return !h.isDisabled()
})
},tabIndex:function(){if(this.$element.is("[tabindex]")){this.$element.data("tabindex",this.$element.attr("tabindex"));
this.$button.attr("tabindex",this.$element.data("tabindex"))
}},clickListener:function(){var h=this;
this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(j){j.stopPropagation()
});
this.$newElement.on("click",function(){h.setSize();
if(!h.options.liveSearch&&!h.multiple){setTimeout(function(){h.$menu.find(".selected a").focus()
},10)
}});
this.$menu.on("click","li a",function(y){var o=d(this),j=o.parent().data("originalIndex"),w=h.$element.val(),q=h.$element.prop("selectedIndex");
if(h.multiple){y.stopPropagation()
}y.preventDefault();
if(!h.isDisabled()&&!o.parent().hasClass("disabled")){var u=h.$element.find("option"),v=u.eq(j),l=v.prop("selected"),t=v.parent("optgroup"),A=h.options.maxOptions,r=t.data("maxOptions")||false;
if(!h.multiple){u.prop("selected",false);
v.prop("selected",true);
h.$menu.find(".selected").removeClass("selected");
h.setSelected(j,true)
}else{v.prop("selected",!l);
h.setSelected(j,!l);
o.blur();
if((A!==false)||(r!==false)){var k=A<u.filter(":selected").length,n=r<t.find("option:selected").length;
if((A&&k)||(r&&n)){if(A&&A==1){u.prop("selected",false);
v.prop("selected",true);
h.$menu.find(".selected").removeClass("selected");
h.setSelected(j,true)
}else{if(r&&r==1){t.find("option:selected").prop("selected",false);
v.prop("selected",true);
var x=o.data("optgroup");
h.$menu.find(".selected").has('a[data-optgroup="'+x+'"]').removeClass("selected");
h.setSelected(j,true)
}else{var m=(typeof h.options.maxOptionsText==="function")?h.options.maxOptionsText(A,r):h.options.maxOptionsText,z=m[0].replace("{n}",A),p=m[1].replace("{n}",r),s=d('<div class="notify"></div>');
if(m[2]){z=z.replace("{var}",m[2][A>1?0:1]);
p=p.replace("{var}",m[2][r>1?0:1])
}v.prop("selected",false);
h.$menu.append(s);
if(A&&k){s.append(d("<div>"+z+"</div>"));
h.$element.trigger("maxReached.bs.select")
}if(r&&n){s.append(d("<div>"+p+"</div>"));
h.$element.trigger("maxReachedGrp.bs.select")
}setTimeout(function(){h.setSelected(j,false)
},10);
s.delay(750).fadeOut(300,function(){d(this).remove()
})
}}}}}if(!h.multiple){h.$button.focus()
}else{if(h.options.liveSearch){h.$searchbox.focus()
}}if((w!=h.$element.val()&&h.multiple)||(q!=h.$element.prop("selectedIndex")&&!h.multiple)){h.$element.change()
}}});
this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(j){if(j.currentTarget==this){j.preventDefault();
j.stopPropagation();
if(!h.options.liveSearch){h.$button.focus()
}else{h.$searchbox.focus()
}}});
this.$menu.on("click","li.divider, li.dropdown-header",function(j){j.preventDefault();
j.stopPropagation();
if(!h.options.liveSearch){h.$button.focus()
}else{h.$searchbox.focus()
}});
this.$menu.on("click",".popover-title .close",function(){h.$button.focus()
});
this.$searchbox.on("click",function(j){j.stopPropagation()
});
this.$menu.on("click",".actions-btn",function(j){if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}j.preventDefault();
j.stopPropagation();
if(d(this).is(".bs-select-all")){h.selectAll()
}else{h.deselectAll()
}h.$element.change()
});
this.$element.change(function(){h.render(false)
})
},liveSearchListener:function(){var j=this,h=d('<li class="no-results"></li>');
this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){j.$menu.find(".active").removeClass("active");
if(!!j.$searchbox.val()){j.$searchbox.val("");
j.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}if(!j.multiple){j.$menu.find(".selected").addClass("active")
}setTimeout(function(){j.$searchbox.focus()
},10)
});
this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(k){k.stopPropagation()
});
this.$searchbox.on("input propertychange",function(){if(j.$searchbox.val()){if(j.options.searchAccentInsensitive){j.$lis.not(".is-hidden").removeClass("hidden").find("a").not(":aicontains("+f(j.$searchbox.val())+")").parent().addClass("hidden")
}else{j.$lis.not(".is-hidden").removeClass("hidden").find("a").not(":icontains("+j.$searchbox.val()+")").parent().addClass("hidden")
}if(!j.$menu.find("li").filter(":visible:not(.no-results)").length){if(!!h.parent().length){h.remove()
}h.html(j.options.noneResultsText+' "'+e(j.$searchbox.val())+'"').show();
j.$menu.find("li").last().after(h)
}else{if(!!h.parent().length){h.remove()
}}}else{j.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}j.$menu.find("li.active").removeClass("active");
j.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus();
d(this).focus()
})
},val:function(h){if(typeof h!=="undefined"){this.$element.val(h);
this.render();
return this.$element
}else{return this.$element.val()
}},selectAll:function(){this.findLis();
this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()
},deselectAll:function(){this.findLis();
this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()
},keydown:function(u){var v=d(this),n=(v.is("input"))?v.parent().parent():v.parent(),t,r=n.data("this"),s,p,o,w,k,m,j,x,l={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};
if(r.options.liveSearch){n=v.parent().parent()
}if(r.options.container){n=r.$menu
}t=d("[role=menu] li a",n);
x=r.$menu.parent().hasClass("open");
if(!x&&/([0-9]|[A-z])/.test(String.fromCharCode(u.keyCode))){if(!r.options.container){r.setSize();
r.$menu.parent().addClass("open");
x=true
}else{r.$newElement.trigger("click")
}r.$searchbox.focus()
}if(r.options.liveSearch){if(/(^9$|27)/.test(u.keyCode.toString(10))&&x&&r.$menu.find(".active").length===0){u.preventDefault();
r.$menu.parent().removeClass("open");
r.$button.focus()
}t=d("[role=menu] li:not(.divider):not(.dropdown-header):visible",n);
if(!v.val()&&!/(38|40)/.test(u.keyCode.toString(10))){if(t.filter(".active").length===0){if(r.options.searchAccentInsensitive){t=r.$newElement.find("li").filter(":aicontains("+f(l[u.keyCode])+")")
}else{t=r.$newElement.find("li").filter(":icontains("+l[u.keyCode]+")")
}}}}if(!t.length){return
}if(/(38|40)/.test(u.keyCode.toString(10))){s=t.index(t.filter(":focus"));
o=t.parent(":not(.disabled):visible").first().index();
w=t.parent(":not(.disabled):visible").last().index();
p=t.eq(s).parent().nextAll(":not(.disabled):visible").eq(0).index();
k=t.eq(s).parent().prevAll(":not(.disabled):visible").eq(0).index();
m=t.eq(p).parent().prevAll(":not(.disabled):visible").eq(0).index();
if(r.options.liveSearch){t.each(function(z){if(d(this).is(":not(.disabled)")){d(this).data("index",z)
}});
s=t.index(t.filter(".active"));
o=t.filter(":not(.disabled):visible").first().data("index");
w=t.filter(":not(.disabled):visible").last().data("index");
p=t.eq(s).nextAll(":not(.disabled):visible").eq(0).data("index");
k=t.eq(s).prevAll(":not(.disabled):visible").eq(0).data("index");
m=t.eq(p).prevAll(":not(.disabled):visible").eq(0).data("index")
}j=v.data("prevIndex");
if(u.keyCode==38){if(r.options.liveSearch){s-=1
}if(s!=m&&s>k){s=k
}if(s<o){s=o
}if(s==j){s=w
}}if(u.keyCode==40){if(r.options.liveSearch){s+=1
}if(s==-1){s=0
}if(s!=m&&s<p){s=p
}if(s>w){s=w
}if(s==j){s=o
}}v.data("prevIndex",s);
if(!r.options.liveSearch){t.eq(s).focus()
}else{u.preventDefault();
if(!v.is(".dropdown-toggle")){t.removeClass("active");
t.eq(s).addClass("active").find("a").focus();
v.focus()
}}}else{if(!v.is("input")){var h=[],q,y;
t.each(function(){if(d(this).parent().is(":not(.disabled)")){if(d.trim(d(this).text().toLowerCase()).substring(0,1)==l[u.keyCode]){h.push(d(this).parent().index())
}}});
q=d(document).data("keycount");
q++;
d(document).data("keycount",q);
y=d.trim(d(":focus").text().toLowerCase()).substring(0,1);
if(y!=l[u.keyCode]){q=1;
d(document).data("keycount",q)
}else{if(q>=h.length){d(document).data("keycount",0);
if(q>h.length){q=1
}}}t.eq(h[q-1]).focus()
}}if((/(13|32)/.test(u.keyCode.toString(10))||(/(^9$)/.test(u.keyCode.toString(10))&&r.options.selectOnTab))&&x){if(!/(32)/.test(u.keyCode.toString(10))){u.preventDefault()
}if(!r.options.liveSearch){d(":focus").click()
}else{if(!/(32)/.test(u.keyCode.toString(10))){r.$menu.find(".active a").click();
v.focus()
}}d(document).data("keycount",0)
}if((/(^9$|27)/.test(u.keyCode.toString(10))&&x&&(r.multiple||r.options.liveSearch))||(/(27)/.test(u.keyCode.toString(10))&&!x)){r.$menu.parent().removeClass("open");
r.$button.focus()
}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement);
if(this.options.container){this.$menu.hide()
}},refresh:function(){this.$lis=null;
this.reloadLi();
this.render();
this.setWidth();
this.setStyle();
this.checkDisabled();
this.liHeight()
},hide:function(){this.$newElement.hide()
},show:function(){this.$newElement.show()
},remove:function(){this.$newElement.remove();
this.$element.remove()
}};
function c(k,l){var h=arguments;
var n=k,k=h[0],l=h[1];
[].shift.apply(h);
if(typeof k=="undefined"){k=n
}var m;
var j=this.each(function(){var s=d(this);
if(s.is("select")){var r=s.data("selectpicker"),p=typeof k=="object"&&k;
if(!r){var o=d.extend({},b.DEFAULTS,d.fn.selectpicker.defaults||{},s.data(),p);
s.data("selectpicker",(r=new b(this,o,l)))
}else{if(p){for(var q in p){if(p.hasOwnProperty(q)){r.options[q]=p[q]
}}}}if(typeof k=="string"){if(r[k] instanceof Function){m=r[k].apply(r,h)
}else{m=r.options[k]
}}}});
if(typeof m!=="undefined"){return m
}else{return j
}}var a=d.fn.selectpicker;
d.fn.selectpicker=c;
d.fn.selectpicker.Constructor=b;
d.fn.selectpicker.noConflict=function(){d.fn.selectpicker=a;
return this
};
d(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",b.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",function(h){h.stopPropagation()
});
d(window).on("load.bs.select.data-api",function(){d(".selectpicker").each(function(){var h=d(this);
c.call(h,h.data())
})
})
})(jQuery);
!function(b,d,c){var a=b();
b.fn.dropdownHover=function(e){return"ontouchstart" in document?this:(a=a.add(this.parent()),this.each(function(){function f(h){m.parents(".navbar").find(".navbar-toggle").is(":visible")||(d.clearTimeout(o),d.clearTimeout(j),j=d.setTimeout(function(){a.find(":focus").blur(),p.instantlyCloseOthers===!0&&a.removeClass("open"),d.clearTimeout(j),m.attr("aria-expanded","true"),t.addClass("open"),m.trigger(k)
},p.hoverDelay))
}var o,j,m=b(this),t=m.parent(),q={delay:500,hoverDelay:0,instantlyCloseOthers:!0},g={delay:b(this).data("delay"),hoverDelay:b(this).data("hover-delay"),instantlyCloseOthers:b(this).data("close-others")},k="show.bs.dropdown",n="hide.bs.dropdown",p=b.extend(!0,{},q,e,g);
t.hover(function(h){return t.hasClass("open")||b.contains(m[0],b(h.target)[0])?void f(h):!0
},function(){d.clearTimeout(j),o=d.setTimeout(function(){m.attr("aria-expanded","false"),t.removeClass("open"),m.trigger(n)
},p.delay)
}),m.hover(function(h){return t.hasClass("open")||b.contains(t[0],b(h.target)[0])?void f(h):!0
}),t.find(".dropdown-submenu").each(function(){var l,h=b(this);
h.hover(function(){d.clearTimeout(l),h.children(".dropdown-menu").show(),h.siblings().children(".dropdown-menu").hide()
},function(){var r=h.children(".dropdown-menu");
l=d.setTimeout(function(){r.hide()
},p.delay)
})
})
}))
},b(document).ready(function(){b('[data-hover="dropdown"]').dropdownHover()
})
}(jQuery,window);
(function(a){a.extend(a.fn,{validate:function(d){if(this.length){var c=a.data(this[0],"validator");
if(c){return c
}this.attr("novalidate","novalidate");
c=new a.validator(d,this[0]);
a.data(this[0],"validator",c);
if(c.settings.onsubmit){d=this.find("input, button");
d.filter(".cancel").click(function(){c.cancelSubmit=true
});
c.settings.submitHandler&&d.filter(":submit").click(function(){c.submitButton=this
});
this.submit(function(f){function b(){if(c.settings.submitHandler){if(c.submitButton){var e=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)
}c.settings.submitHandler.call(c,c.currentForm);
c.submitButton&&e.remove();
return false
}return true
}c.settings.debug&&f.preventDefault();
if(c.cancelSubmit){c.cancelSubmit=false;
return b()
}if(c.form()){if(c.pendingRequest){c.formSubmitted=true;
return false
}return b()
}else{c.focusInvalid();
return false
}})
}return c
}else{d&&d.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")
}},valid:function(){if(a(this[0]).is("form")){return this.validate().form()
}else{var d=true,c=a(this[0].form).validate();
this.each(function(){d&=c.element(this)
});
return d
}},removeAttrs:function(e){var c={},f=this;
a.each(e.split(/\s/),function(d,b){c[b]=f.attr(b);
f.removeAttr(b)
});
return c
},rules:function(j,c){var o=this[0];
if(j){var n=a.data(o.form,"validator").settings,m=n.rules,l=a.validator.staticRules(o);
switch(j){case"add":a.extend(l,a.validator.normalizeRule(c));
m[o.name]=l;
if(c.messages){n.messages[o.name]=a.extend(n.messages[o.name],c.messages)
}break;
case"remove":if(!c){delete m[o.name];
return l
}var k={};
a.each(c.split(/\s/),function(b,d){k[d]=l[d];
delete l[d]
});
return k
}}o=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(o),a.validator.classRules(o),a.validator.attributeRules(o),a.validator.staticRules(o)),o);
if(o.required){n=o.required;
delete o.required;
o=a.extend({required:n},o)
}return o
}});
a.extend(a.expr[":"],{blank:function(b){return !a.trim(""+b.value)
},filled:function(b){return !!a.trim(""+b.value)
},unchecked:function(b){return !b.checked
}});
a.validator=function(d,c){this.settings=a.extend(true,{},a.validator.defaults,d);
this.currentForm=c;
this.init()
};
a.validator.format=function(d,c){if(arguments.length==1){return function(){var b=a.makeArray(arguments);
b.unshift(d);
return a.validator.format.apply(this,b)
}
}if(arguments.length>2&&c.constructor!=Array){c=a.makeArray(arguments).slice(1)
}if(c.constructor!=Array){c=[c]
}a.each(c,function(f,b){d=d.replace(RegExp("\\{"+f+"\\}","g"),b)
});
return d
};
a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(b){this.lastActive=b;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass);
this.addWrapper(this.errorsFor(b)).hide()
}},onfocusout:function(b){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)
}},onkeyup:function(b){if(b.name in this.submitted||b==this.lastElement){this.element(b)
}},onclick:function(b){if(b.name in this.submitted){this.element(b)
}else{b.parentNode.name in this.submitted&&this.element(b.parentNode)
}},highlight:function(e,c,f){e.type==="radio"?this.findByName(e.name).addClass(c).removeClass(f):a(e).addClass(c).removeClass(f)
},unhighlight:function(e,c,f){e.type==="radio"?this.findByName(e.name).removeClass(c).addClass(f):a(e).removeClass(c).addClass(f)
}},setDefaults:function(b){a.extend(a.validator.defaults,b)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function e(h){var d=a.data(this[0].form,"validator"),b="on"+h.type.replace(/^validate/,"");
d.settings[b]&&d.settings[b].call(d,this[0],h)
}this.labelContainer=a(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);
this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var c=this.groups={};
a.each(this.settings.groups,function(d,b){a.each(b.split(/\s/),function(k,j){c[j]=d
})
});
var f=this.settings.rules;
a.each(f,function(d,b){f[d]=a.validator.normalizeRule(b)
});
a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e);
this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
},form:function(){this.checkForm();
a.extend(this.submitted,this.errorMap);
this.invalid=a.extend({},this.errorMap);
this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]);
this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var d=0,c=this.currentElements=this.elements();
c[d];
d++){this.check(c[d])
}return this.valid()
},element:function(d){this.lastElement=d=this.validationTargetFor(this.clean(d));
this.prepareElement(d);
this.currentElements=a(d);
var c=this.check(d);
if(c){delete this.invalid[d.name]
}else{this.invalid[d.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return c
},showErrors:function(d){if(d){a.extend(this.errorMap,d);
this.errorList=[];
for(var c in d){this.errorList.push({message:d[c],element:this.findByName(c)[0]})
}this.successList=a.grep(this.successList,function(b){return !(b.name in d)
})
}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm();
this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass)
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(e){var c=0,f;
for(f in e){c++
}return c
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()==0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(b){}}},findLastActive:function(){var b=this.lastActive;
return b&&a.grep(this.errorList,function(c){return c.element.name==b.name
}).length==1&&b
},elements:function(){var d=this,c={};
return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&d.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in c||!d.objectLength(a(this).rules())){return false
}return c[this.name]=true
})
},clean:function(b){return a(b)[0]
},errors:function(){return a(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=a([]);
this.toHide=a([]);
this.currentElements=a([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset();
this.toHide=this.errorsFor(b)
},check:function(j){j=this.validationTargetFor(this.clean(j));
var c=a(j).rules(),o=false,n;
for(n in c){var m={method:n,parameters:c[n]};
try{var l=a.validator.methods[n].call(this,j.value.replace(/\r/g,""),j,m.parameters);
if(l=="dependency-mismatch"){o=true
}else{o=false;
if(l=="pending"){this.toHide=this.toHide.not(this.errorsFor(j));
return
}if(!l){this.formatAndAdd(j,m);
return false
}}}catch(k){this.settings.debug&&window.console&&console.log("exception occured when checking element "+j.id+", check the '"+m.method+"' method",k);
throw k
}}if(!o){this.objectLength(c)&&this.successList.push(j);
return true
}},customMetaMessage:function(e,c){if(a.metadata){var f=this.settings.meta?a(e).metadata()[this.settings.meta]:a(e).metadata();
return f&&f.messages&&f.messages[c]
}},customMessage:function(e,c){var f=this.settings.messages[e];
return f&&(f.constructor==String?f:f[c])
},findDefined:function(){for(var b=0;
b<arguments.length;
b++){if(arguments[b]!==undefined){return arguments[b]
}}},defaultMessage:function(d,c){return this.findDefined(this.customMessage(d.name,c),this.customMetaMessage(d,c),!this.settings.ignoreTitle&&d.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+d.name+"</strong>")
},formatAndAdd:function(f,c){var h=this.defaultMessage(f,c.method),g=/\$?\{(\d+)\}/g;
if(typeof h=="function"){h=h.call(this,c.parameters,f)
}else{if(g.test(h)){h=jQuery.format(h.replace(g,"{$1}"),c.parameters)
}}this.errorList.push({message:h,element:f});
this.errorMap[f.name]=h;
this.submitted[f.name]=h
},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))
}return b
},defaultShowErrors:function(){for(var d=0;
this.errorList[d];
d++){var c=this.errorList[d];
this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(c.element,c.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(d=0;
this.successList[d];
d++){this.showLabel(this.successList[d])
}}if(this.settings.unhighlight){d=0;
for(c=this.validElements();
c[d];
d++){this.settings.unhighlight.call(this,c[d],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return a(this.errorList).map(function(){return this.element
})
},showLabel:function(e,c){var f=this.errorsFor(e);
if(f.length){f.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
f.attr("generated")&&f.html(c)
}else{f=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(e),generated:true}).addClass(this.settings.errorClass).html(c||"");
if(this.settings.wrapper){f=f.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}this.labelContainer.append(f).length||(this.settings.errorPlacement?this.settings.errorPlacement(f,a(e)):f.insertAfter(e))
}if(!c&&this.settings.success){f.text("");
typeof this.settings.success=="string"?f.addClass(this.settings.success):this.settings.success(f)
}this.toShow=this.toShow.add(f)
},errorsFor:function(d){var c=this.idOrName(d);
return this.errors().filter(function(){return a(this).attr("for")==c
})
},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)
},validationTargetFor:function(b){if(this.checkable(b)){b=this.findByName(b.name).not(this.settings.ignore)[0]
}return b
},checkable:function(b){return/radio|checkbox/i.test(b.type)
},findByName:function(d){var c=this.currentForm;
return a(document.getElementsByName(d)).map(function(f,b){return b.form==c&&b.name==d&&b||null
})
},getLength:function(d,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;
case"input":if(this.checkable(c)){return this.findByName(c.name).filter(":checked").length
}}return d.length
},depend:function(d,c){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,c):true
},dependTypes:{"boolean":function(b){return b
},string:function(d,c){return !!a(d,c.form).length
},"function":function(d,c){return d(c)
}},optional:function(b){return !a.validator.methods.required.call(this,a.trim(b.value),b)&&"dependency-mismatch"
},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;
this.pending[b.name]=true
}},stopRequest:function(d,c){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[d.name];
if(c&&this.pendingRequest==0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();
this.formSubmitted=false
}else{if(!c&&this.pendingRequest==0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(d,c){d.constructor==String?this.classRuleSettings[d]=c:a.extend(this.classRuleSettings,d)
},classRules:function(d){var c={};
(d=a(d).attr("class"))&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])
});
return c
},attributeRules:function(f){var c={};
f=a(f);
for(var h in a.validator.methods){var g;
if(g=h==="required"&&typeof a.fn.prop==="function"?f.prop(h):f.attr(h)){c[h]=g
}else{if(f[0].getAttribute("type")===h){c[h]=true
}}}c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength;
return c
},metadataRules:function(d){if(!a.metadata){return{}
}var c=a.data(d.form,"validator").settings.meta;
return c?a(d).metadata()[c]:a(d).metadata()
},staticRules:function(e){var c={},f=a.data(e.form,"validator");
if(f.settings.rules){c=a.validator.normalizeRule(f.settings.rules[e.name])||{}
}return c
},normalizeRules:function(d,c){a.each(d,function(h,g){if(g===false){delete d[h]
}else{if(g.param||g.depends){var b=true;
switch(typeof g.depends){case"string":b=!!a(g.depends,c.form).length;
break;
case"function":b=g.depends.call(c,c)
}if(b){d[h]=g.param!==undefined?g.param:true
}else{delete d[h]
}}}});
a.each(d,function(f,b){d[f]=a.isFunction(b)?b(c):b
});
a.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])
}});
a.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]
}});
if(a.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];
delete d.min;
delete d.max
}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];
delete d.minlength;
delete d.maxlength
}}d.messages&&delete d.messages;
return d
},normalizeRule:function(d){if(typeof d=="string"){var c={};
a.each(d.split(/\s/),function(){c[this]=true
});
d=c
}return d
},addMethod:function(e,c,f){a.validator.methods[e]=c;
a.validator.messages[e]=f!=undefined?f:a.validator.messages[e];
c.length<3&&a.validator.addClassRules(e,a.validator.normalizeRule(e))
},methods:{required:function(e,c,f){if(!this.depend(f,c)){return"dependency-mismatch"
}switch(c.nodeName.toLowerCase()){case"select":return(e=a(c).val())&&e.length>0;
case"input":if(this.checkable(c)){return this.getLength(e,c)>0
}default:return a.trim(e).length>0
}},remote:function(h,c,m){if(this.optional(c)){return"dependency-mismatch"
}var l=this.previousValue(c);
this.settings.messages[c.name]||(this.settings.messages[c.name]={});
l.originalMessage=this.settings.messages[c.name].remote;
this.settings.messages[c.name].remote=l.message;
m=typeof m=="string"&&{url:m}||m;
if(this.pending[c.name]){return"pending"
}if(l.old===h){return l.valid
}l.old=h;
var k=this;
this.startRequest(c);
var j={};
j[c.name]=h;
a.ajax(a.extend(true,{url:m,mode:"abort",port:"validate"+c.name,dataType:"json",data:j,success:function(e){k.settings.messages[c.name].remote=l.originalMessage;
var b=e===true;
if(b){var d=k.formSubmitted;
k.prepareElement(c);
k.formSubmitted=d;
k.successList.push(c);
k.showErrors()
}else{d={};
e=e||k.defaultMessage(c,"remote");
d[c.name]=l.message=a.isFunction(e)?e(h):e;
k.showErrors(d)
}l.valid=b;
k.stopRequest(c,b)
}},m));
return"pending"
},minlength:function(e,c,f){return this.optional(c)||this.getLength(a.trim(e),c)>=f
},maxlength:function(e,c,f){return this.optional(c)||this.getLength(a.trim(e),c)<=f
},rangelength:function(e,c,f){e=this.getLength(a.trim(e),c);
return this.optional(c)||e>=f[0]&&e<=f[1]
},min:function(e,c,f){return this.optional(c)||e>=f
},max:function(e,c,f){return this.optional(c)||e<=f
},range:function(e,c,f){return this.optional(c)||e>=f[0]&&e<=f[1]
},email:function(d,c){return this.optional(c)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
},url:function(d,c){return this.optional(c)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,c){return this.optional(c)||!/Invalid|NaN/.test(new Date(d))
},dateISO:function(d,c){return this.optional(c)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(d)
},number:function(d,c){return this.optional(c)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(d)
},digits:function(d,c){return this.optional(c)||/^\d+$/.test(d)
},creditcard:function(h,c){if(this.optional(c)){return"dependency-mismatch"
}if(/[^0-9 -]+/.test(h)){return false
}var m=0,l=0,k=false;
h=h.replace(/\D/g,"");
for(var j=h.length-1;
j>=0;
j--){l=h.charAt(j);
l=parseInt(l,10);
if(k){if((l*=2)>9){l-=9
}}m+=l;
k=!k
}return m%10==0
},accept:function(e,c,f){f=typeof f=="string"?f.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(c)||e.match(RegExp(".("+f+")$","i"))
},equalTo:function(e,c,f){f=a(f).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()
});
return e==f.val()
}}});
a.format=a.validator.format
})(jQuery);
(function(f){var e={};
if(f.ajaxPrefilter){f.ajaxPrefilter(function(c,b,a){b=c.port;
if(c.mode=="abort"){e[b]&&e[b].abort();
e[b]=a
}})
}else{var d=f.ajax;
f.ajax=function(b){var a=("port" in b?b:f.ajaxSettings).port;
if(("mode" in b?b:f.ajaxSettings).mode=="abort"){e[a]&&e[a].abort();
return e[a]=d.apply(this,arguments)
}return d.apply(this,arguments)
}
}})(jQuery);
(function(a){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&a.each({focus:"focusin",blur:"focusout"},function(e,c){function f(b){b=a.event.fix(b);
b.type=c;
return a.event.handle.call(this,b)
}a.event.special[c]={setup:function(){this.addEventListener(e,f,true)
},teardown:function(){this.removeEventListener(e,f,true)
},handler:function(b){arguments[0]=a.event.fix(b);
arguments[0].type=c;
return a.event.handle.apply(this,arguments)
}}
});
a.extend(a.fn,{validateDelegate:function(e,c,f){return this.bind(c,function(d){var b=a(d.target);
if(b.is(e)){return f.apply(b,arguments)
}})
}})
})(jQuery);
(function testtools(){var a=window.location;
validURL="/content/cadence-www/global/en_US/home/tools/";
var b=a.pathname.substring(0,a.pathname.lastIndexOf("/")+1);
if(b.match("^"+validURL)==validURL){console.log("Tools page");
(function(f,h,g,l){var j,k,d;
f.SMCX=f.SMCX||[],h.getElementById(l)||(j=h.getElementsByTagName(g),k=j[j.length-1],d=h.createElement(g),d.type="text/javascript",d.async=!0,d.id=l,d.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/Uh9Ku9iHrLlAHSUyKuW6bbBuAvHqyUph0ant2G8dbYJesjA1zMpmsV8J5Skw4_2FJA.js"].join(""),k.parentNode.insertBefore(d,k))
})(window,document,"script","smcx-sdk")
}})();
$(function(){function b(){if(window.innerWidth<=767){$("#cdn-nxtgn-accordion .link").click(function(d){$("#cdn-nxtgn-accordion  #cdn-nxtgn-accordion-normal").toggleClass("hidden-xs")
})
}}b();
$(window).resize(function(){b()
});
function a(){c("#nxtgen-products")
}setTimeout(function(){var e=document.getElementById("cdn-nxtgn-accordion-normal");
if(e!==null){var d=e.getAttribute("data-advanced-accordion")
}if(d=="show"){$("#cdn-nxtgn-accordion #cdn-nxtgn-accordion-normal > ul > li p").click(function(){if($(this).siblings("div").is(":visible")){$(this).siblings("div").slideUp("fast");
$(this).removeClass("active")
}else{$("#cdn-nxtgn-accordion #cdn-nxtgn-accordion-normal > ul > li p").removeClass("active");
$("div.accordion").slideUp("fast");
$(this).siblings("div").slideDown("fast");
$(this).addClass("active")
}});
$("#cdn-nxtgn-accordion-normal > ul:first-child > li:first-child p").trigger("click")
}else{if($("#cdn-nxtgn-accordion-normal").length>0){if($("#cdn-nxtgn-accordion-normal").hasClass("disabled")){$("#cdn-nxtgn-accordion-normal > ul > li p:first-child").addClass("active");
$("#cdn-nxtgn-accordion-normal > ul > li p:first-child").siblings("div").slideDown("fast")
}else{$("#cdn-nxtgn-accordion-normal > ul > li p").click(function(){if($(this).siblings("div").is(":visible")){$(this).siblings("div").slideUp("fast");
$(this).removeClass("active")
}else{$("#cdn-nxtgn-accordion-normal > ul > li p").removeClass("active");
$("div.accordion").slideUp("fast");
$(this).siblings("div").slideDown("fast");
$(this).addClass("active")
}});
if(location.pathname.split("/").slice(-1)[0]=="implementationOverview.html"){$("#cdn-nxtgn-accordion-normal > ul > li:nth-child(2) p").trigger("click");
$("#cdn-nxtgn-accordion-normal > ul > li:nth-child(2) div.accordion > ul > li:first-child").addClass("active")
}else{$("#cdn-nxtgn-accordion-normal").each(function(){if($("p.hasCurrentPage",this).length>0){$("p.hasCurrentPage",this).trigger("click")
}else{$("> ul > li:first-child p",this).trigger("click")
}})
}}}}$("#cdn-nxtgn-accordion-normal > ul > li.products p").bind("click",a)
},2);
function c(f){var d=$(f);
var e=d.offset().top-175;
$("html,body").animate({scrollTop:e},"slow")
}});
function getTopPosition(){var a=$(".topfixedHeaderBanner").css("position");
if(a==="fixed"){return $("header").height()
}else{return 0
}}function showSection(){if($("#cdn-nxtgn-title-menu.ribbonOriginal").length>0){$("#cdn-nxtgn-title-menu.ribbonOriginal a").each(function(a){var b=$(this).attr("href");
$(b).show()
})
}}function hideSection(){if($("#cdn-nxtgn-title-menu.ribbonOriginal").length>0){$(".cdn-nxtgn-body .ribbonLinkSection").each(function(a){$(this).hide()
})
}}function ribonsize(){var h=$(window).width();
var j=$("#cdn-nxtgn-title-menu.ribbonOriginal .container ul").width();
var k=$("#cdn-nxtgn-title-menu.ribbonOriginal ul:not(.dropdown) > li").length;
var e=j/k;
var f=Math.ceil(k/2);
var g=k-f;
var d=Math.floor(e)+"px";
var c=Math.ceil(e)+"px";
var a=$("#cdn-nxtgn-title-menu.ribbonOriginal ul:not(.dropdown) > li");
var b=$("#cdn-nxtgn-title-menu.ribbonCloned ul:not(.dropdown) > li");
if(h>1265){a.each(function(m,l){if(m<=f){$(l).css("width",d)
}else{$(l).css("width",c)
}});
b.each(function(m,l){if(m<=f){$(l).css("width",d)
}else{$(l).css("width",c)
}})
}else{a.each(function(m,l){$(l).css("width",e)
});
b.each(function(m,l){$(l).css("width",e)
})
}}(function(a){a(function(){ribonsize();
hideSection();
showSection();
var b=navigator.userAgent.match(/iPad/i)!=null;
if(a("#cdn-nxtgn-title-menu").length>0){a(".bannerinfo").addClass("ribbonMargin");
a("#cdn-nxtgn-title-menu").addClass("ribbonOriginal").clone().insertAfter("#cdn-nxtgn-title-menu").addClass("ribbonCloned").css("position","fixed").css("top",74).css("width","100%").css("margin-top","").css("z-index","500").removeClass("ribbonOriginal").hide();
a(window).scroll(function(){var g=a("#cdn-nxtgn-title-menu.ribbonOriginal").offset();
var f;
if(typeof g!=="undefined"){f=g.top-74
}if(a(window).scrollTop()>=(f)){orgElement=a("#cdn-nxtgn-title-menu.ribbonOriginal");
coordsOrgElement=orgElement.offset();
leftOrgElement=0;
widthOrgElement=orgElement.css("width");
a("#cdn-nxtgn-title-menu.ribbonCloned").css("left",leftOrgElement+"px").css("top",getTopPosition()).show();
a("#cdn-nxtgn-title-menu.ribbonOriginal").css("visibility","hidden");
if(window.innerWidth>=769&&window.innerWidth<=1200&&b==true){a("#cdn-nxtgn-title-menu.ribbonCloned").css("left",leftOrgElement+"px").css("top",getTopPosition()).show();
a("#cdn-nxtgn-title-menu.ribbonOriginal").css("visibility","hidden")
}else{a("#cdn-nxtgn-title-menu.ribbonCloned").css("top",getTopPosition())
}}else{a(".ribbonCloned").hide();
a(".ribbonOriginal").css("visibility","visible");
a(".ribbonOriginal").css("width","100%")
}});
a("#cdn-nxtgn-title-menu ul li:first-child").addClass("active");
a("#cdn-nxtgn-title-menu ul li").click(function(h){h.preventDefault();
var g=a(this).index();
if(!a(this).hasClass("active")){$thisRibbonOriginal=a("#cdn-nxtgn-title-menu.ribbonOriginal ul li").eq(g).find("img");
var j=$thisRibbonOriginal.data("alt-src");
$thisRibbonOriginal.data("alt-src",$thisRibbonOriginal.attr("src"));
$thisRibbonOriginal.attr("src",j);
$thisRibbonCloned=a("#cdn-nxtgn-title-menu.ribbonCloned ul li").eq(g).find("img");
var j=$thisRibbonCloned.data("alt-src");
$thisRibbonCloned.data("alt-src",$thisRibbonCloned.attr("src"));
$thisRibbonCloned.attr("src",j);
a("#cdn-nxtgn-title-menu ul li").removeClass("active");
a("#cdn-nxtgn-title-menu.ribbonCloned ul li").removeClass("active");
a("#cdn-nxtgn-title-menu ul li").eq(g).addClass("active");
a("#cdn-nxtgn-title-menu.ribbonCloned ul li").eq(g).addClass("active")
}var f=a(this).find("a").attr("href");
e(f)
});
var d="false";
var c=function(){if(!a(this).hasClass("active")){if(d=="false"){d="true";
var g=(a(this).index()==-1)?a("#cdn-nxtgn-title-menu ul").find("li:hover").index():a(this).index();
var j=a("#cdn-nxtgn-title-menu.ribbonOriginal ul li").eq(g).children(2).children().children();
var h=j.data("alt-src");
j.data("alt-src",j.attr("src"));
j.attr("src",h);
var f=a("#cdn-nxtgn-title-menu.ribbonCloned ul li").eq(g).children(2).children().children();
var h=f.data("alt-src");
f.data("alt-src",f.attr("src"));
f.attr("src",h);
d="false"
}}};
a("#cdn-nxtgn-title-menu ul li").hover(c,c);
if(a("#cdn-nxtgn-title-menu ul").find("li:hover").length){c()
}function e(j){var f=a(j);
var h=navigator.userAgent.match(/android/i)!=null;
var g=f.offset().top-170;
if(window.innerWidth<=768){var g=f.offset().top-120
}if(window.innerWidth<=991&&!b){var g=f.offset().top-120
}if(f.selector=="#section1"){var g=f.offset().top-180
}if(f.selector=="#section1"&&(b||h)){var g=f.offset().top-120
}if(window.innerWidth==1024){var g=f.offset().top-110
}if(window.innerWidth==1024&&b){var g=f.offset().top-100
}jQuery("html").animate({scrollTop:g},"slow")
}}})
})(jQuery);
$(window).resize(function(){ribonsize()
});
function neweventsize(){if($(".generic-threecol.column-system.section .homeEvents").length>0){$(".homeEvents .columns .columnsInfo").removeAttr("style");
var a=0;
$(".homeEvents .columns .columnsInfo").each(function(){if($(this).prop("scrollHeight")>a){a=$(this).prop("scrollHeight")
}});
a=a+27;
$(".homeEvents .columns .columnsInfo").each(function(){$(this).css("min-height",a)
})
}}$(window).resize(function(){neweventsize()
});
var RibbonWithNavigation={name:"RibbonWithNavigation",ribonsize:function(){var h=$(window).width();
var j=$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal .container ul").width();
var k=$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal ul:not(.dropdown) > li").length;
var e=j/k;
var f=Math.ceil(k/2);
var g=k-f;
var d=Math.floor(e)+"px";
var c=Math.ceil(e)+"px";
var a=$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal ul:not(.dropdown) > li");
var b=$("#cdn-nxtgn-title-menu-ribbon.ribbonCloned ul:not(.dropdown) > li");
if(h<=767){$("#cdn-nxtgn-title-menu-ribbon.mobile ul:not(:hover) li.active a").click(function(){event.preventDefault()
})
}if(h>1265){a.each(function(m,l){if(m<=f){$(l).css("width",d)
}else{$(l).css("width",c)
}});
b.each(function(m,l){if(m<=f){$(l).css("width",d)
}else{$(l).css("width",c)
}})
}else{a.each(function(m,l){$(l).css("width",e)
});
b.each(function(m,l){$(l).css("width",e)
})
}},theTop:function(){var a=$(".topfixedHeaderBanner").css("position");
if(a==="fixed"){return $("header").height()
}else{return 0
}},cloneIt:function(){if($("#cdn-nxtgn-title-menu-ribbon").length>0){$("#cdn-nxtgn-title-menu-ribbon").addClass("ribbonOriginal").clone().insertAfter("#cdn-nxtgn-title-menu-ribbon").addClass("ribbonCloned").css("position","fixed").css("top",74).css("width","100%").css("margin-top","").css("z-index","500").removeClass("ribbonOriginal").hide();
$("ul.cdn-nxtgn-title-menu-ribbon").addClass("desktop").clone().insertAfter("ul.cdn-nxtgn-title-menu-ribbon").addClass("mobile").removeClass("desktop")
}},onScroll:function(){var b=$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal").offset();
var a;
if(typeof b!=="undefined"){a=b.top
}if($(window).scrollTop()>=(a)){orgElement=$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal");
coordsOrgElement=orgElement.offset();
leftOrgElement=0;
widthOrgElement=orgElement.css("width");
$("#cdn-nxtgn-title-menu-ribbon.ribbonCloned").css({left:leftOrgElement+"px",top:RibbonWithNavigation.theTop()}).show();
$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal").css("visibility","hidden")
}else{$("#cdn-nxtgn-title-menu-ribbon.ribbonCloned").hide();
$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal").css("visibility","visible");
$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal").css("width","100%")
}},scrollToMediaContacts:function(d){var a=navigator.userAgent.match(/iPad/i)!=null;
var b=$(d);
var c=b.offset().top-170;
if(window.innerWidth<=768){var c=b.offset().top-120
}if(window.innerWidth<=991&&!a){var c=b.offset().top-120
}if(b.selector=="#section1"){var c=b.offset().top-180
}if(b.selector=="#section1"&&a){var c=b.offset().top-120
}if(window.innerWidth==1024){var c=b.offset().top-110
}if(window.innerWidth==1024&&a){var c=b.offset().top-100
}$("html").animate({scrollTop:c},"slow")
}};
function disablemobilemenu(){if($("#cdn-nxtgn-title-menu-ribbon.mobile").length>0&&($(window).width()<=767)){$("#cdn-nxtgn-title-menu-ribbon.mobile ul").on("click",function(a){console.log(a);
if(!$(this).hasClass("open")){a.preventDefault();
$(this).addClass("open");
return false
}else{a.stopPropagation();
a.stopImmediatePropagation();
return true
}});
$("#cdn-nxtgn-title-menu-ribbon.mobile ul").mouseleave(function(){$(this).removeClass("open")
})
}}$(function(){$(function(){RibbonWithNavigation.ribonsize();
$("#cdn-nxtgn-media_container .mediacontacts a.link").click(function(d){d.preventDefault();
var c=$(this).attr("href");
RibbonWithNavigation.scrollToMediaContacts(c)
});
if($("#cdn-nxtgn-title-menu-ribbon").length>0){$(".bannerinfo").addClass("ribbonMargin");
var b="false";
var a=function(){if(!$(this).hasClass("active")){var f=($(this).index()==-1)?$("#cdn-nxtgn-title-menu-ribbon ul.cdn-nxtgn-menu-ribbon").find("li:hover").index():$(this).index();
var j=$("#cdn-nxtgn-title-menu-ribbon.ribbonOriginal ul li").eq(f).children(2).children().children();
var g=j.data("alt-src");
var h=j.attr("src");
if(g!=h){j.data("alt-src",h);
j.attr("src",g)
}var e=$("#cdn-nxtgn-title-menu-ribbon.ribbonCloned ul li").eq(f).children(2).children().children();
var d=e.data("alt-src");
var c=e.attr("src");
if(d!=c){e.data("alt-src",c);
e.attr("src",d)
}}};
if(b=="false"){b="true";
if($("ul.cdn-nxtgn-menu-ribbon").find("li:hover").length){}b="false"
}if(b=="false"){b="true";
$("#cdn-nxtgn-title-menu-ribbon ul li").hover(a,a);
b="false"
}$(window).scroll(RibbonWithNavigation.onScroll)
}});
$(window).resize(function(){RibbonWithNavigation.ribonsize();
disablemobilemenu()
});
RibbonWithNavigation.cloneIt();
disablemobilemenu()
});
(function(a){a(document).ready(function(){var b=a("ul.alphabetically-ordered a");
if(b.parent().is("div")){b.unwrap()
}})
})(jQuery);
$(document).ready(function(){caraouselAnimation()
});
function caraouselAnimation(){if($("#videos").length>0){$("#videos").each(function(){if($("#cdn-nxtgn-videosCarousel.carousel .item,.cdn-nxtgn-videosBannerCarousel .item",this).length<=3&&$(window).width()>=736){$("#cdn-nxtgn-videosCarousel,div.cdn-nxtgn-videosBannerCarousel",this).carousel({interval:false});
$("#cdn-nxtgn-videosCarousel,div.cdn-nxtgn-videosBannerCarousel",this).addClass("homevideos")
}else{$("#cdn-nxtgn-videosCarousel,div.cdn-nxtgn-videosBannerCarousel",this).carousel({interval:10000})
}});
var a=($(window).width()==1024)?"landscape":"portrait";
if(navigator.userAgent.match(/iPad/i)!=true&&a=="portrait"){$("#cdn-nxtgn-videosCarousel div.item div:nth-child(2) a figure").css("width","100.5%")
}else{$("#cdn-nxtgn-videosCarousel div.item div:nth-child(2) a figure").css("width","100%")
}}}(function(a){a(document).ready(function(){a("#contentaccordion .content-nextgen-accordion-section-1 .content-nextgen-accordion-section-title").addClass("active");
a("#contentaccordion .content-nextgen-accordion #content-nextgen-accordion-1").slideDown("fast").addClass("open");
function b(){a("#contentaccordion .content-nextgen-accordion .content-nextgen-accordion-section-title").removeClass("active");
a("#contentaccordion .content-nextgen-accordion .content-nextgen-accordion-section-content").slideUp("fast").removeClass("open")
}a("#contentaccordion .content-nextgen-accordion-section-title").click(function(c){if(a(this).hasClass("content-nextgen-accordion-section-title")){var d=a(this).attr("href")
}else{var d=a(this).closest(".content-nextgen-accordion-section-title").attr("href")
}if(a(c.target).is(".active")){b()
}else{b();
if(a(this).hasClass("content-nextgen-accordion-section-title")){a(this).addClass("active")
}else{a(this).closest(".content-nextgen-accordion-section-title").addClass("active")
}a("#contentaccordion "+d).slideDown("fast").addClass("open")
}a("html").animate({scrollTop:(a("#contentaccordion").offset().top-400)},500);
c.preventDefault()
})
})
})(jQuery);
(function(a){a("#txtImgEnIco").load(function(){var g=a("#txtImgEnIco");
var e=new Image();
e.src=g.attr("src");
var b=e.height;
var f=e.width;
var j="-"+b+"px";
if(a(window).width()<767){var h=Math.round((f/2)+5);
var d=Math.round((b/2)+5);
var c="-"+d+"px";
a(".txtImgEnIcoPos").css("height",d+"px");
a(".txtImgEnIcoPos").css("width",h+"px");
a(".txtImgEnIcoPos").css("margin-top",c)
}else{a(".txtImgEnIcoPos").css("margin-top",j)
}})
})(jQuery);
$("button[name=contact-us-submit]").addClass("nudge-right");
function btn_onclick(){window.location.href="/content/cadence-www/global/en_US/home/about-cadence/contact-us.html?lstGlobalOffices=RegionalHQ"
}$(function(){var a=window.location.href;
var d="";
var c;
var b=a.split("?")[1];
if(b!==undefined){c=b.split("&")
}if(c!==undefined){c.forEach(function(g){if(g){var h=g.split("=");
if(h[0]=="lstGlobalOffices"){var e=0;
var f=h[1].lastIndexOf("HQ");
d=h[1].substring(e,f)
}}})
}if(d=="Regional"||d==""){d="Select Country"
}$(".page_global_contactus span.filter-option.pull-left").text(decodeURI(d))
});
$(document).ready(function(){$(".page_global_contactus .dropdown_contact_us").on("shown.bs.dropdown",function(){var a=$(this);
$(document).keypress(function(c){var b=String.fromCharCode(c.which);
a.find("li").each(function(d,e){$(e).removeClass("active");
if($(e).text().charAt(0).toLowerCase()==b){$(e).addClass("active");
return false
}})
});
$(document).hover(function(b){a.find("li").each(function(c,d){$("ul .active").removeClass("active")
})
})
});
$(".page_global_contactus .dropdown_contact_us").on("hide.bs.dropdown",function(){$(document).unbind("keypress")
})
});
$(function(){getUrl=document.location.pathname.match(/[^\/]+$/);
if(getUrl!=null&&getUrl[0]=="newsroom.html"){$(".modal-header .close").on("click",function(){$("body").removeClass("newmodalproduct")
});
$(".href-refiner").on("click",function(){var a=$(this).data("attr");
var b=$(this).data("src");
$.ajax({method:"GET",url:b+".html"+a,data:{},dataType:"html"}).done(function(c){$("#fast-result-product-screenshots").html(c)
})
});
$("#refiner").click(function(){$("#all").removeClass("active")
});
if($("#refiner").hasClass("active")){$("#all").removeClass("active");
$("#al").hide()
}else{$("#all").addClass("active");
$("#back").hide()
}$(".resources_info  .info ul li:nth-child(2)").on("touchstart click",function(){$("body").addClass("newmodalproduct")
});
$(".resources_info  .info ul li:nth-child(3)").on("touchstart click",function(){$("body").addClass("newmodal")
})
}});
$(function(){getUrl=document.location.pathname.match(/[^\/]+$/);
if(getUrl!=null&&getUrl[0]=="newsroom.html"){$(".modal-header .close").on("click",function(){$("body").removeClass("newmodal")
});
$(".href-pagination").on("click",function(){var a=$(this).data("attr");
var b=$(this).data("src");
$.ajax({method:"GET",url:b+".html"+a,data:{},dataType:"html"}).done(function(c){$("#fast-result-cultue-images").html(c)
})
})
}});
function normalizeminiview(){if($(".conferenceProceedings .featured_link .moduleinfo.miniview").length>=2){if($(window).width()>=768){$(".featured_link .moduleinfo.miniview").removeAttr("style");
$this=$(".conferenceProceedings .featured_link .moduleinfo.miniview");
$("p",$this).css("padding-bottom","20px");
var c=Math.round($this.length);
for(var b=0;
b<c;
b+=2){var e=$this.eq(b).prop("scrollHeight");
var d=$this.eq(b+1).prop("scrollHeight");
if(e>d){var a=e
}else{var a=d
}$this.filter(":eq("+b+"),:eq("+(b+1)+")").css("height",a)
}}else{$(".featured_link .moduleinfo.miniview").removeAttr("style")
}}}$(function(){normalizeminiview()
});
$(window).resize(function(a){normalizeminiview()
});
$(function(){listnum=5;
resourceopens=false;
firstmore=true;
getaction=0;
$(".resource_result p").on("click",function(){$this=$(this);
if($this.parent().hasClass("active")){a($this.parent())
}else{if($(".resource_result").hasClass("active")){resourceopens=true;
a($(".resource_result.active"))
}totalel=$("li",$this.next()).length;
if(totalel<=listnum){$this.parent().addClass("active");
$("li",$this.next()).each(function(){$this.next().addClass("open");
$("li",$this.next()).addClass("displayed")
})
}else{showmoreHtml='<div class="resource_showmore"><span>Show more</span></div>';
$this.next().after(showmoreHtml);
$this.parent().addClass("active more");
$this.next().addClass("open");
var b;
for(b=0;
b<=listnum;
++b){$("li:nth-child("+b+")",$this.next()).addClass("displayed")
}}}});
$(".resource_result").on("click",".resource_showmore span",function(){if(firstmore){getaction=$(window).scrollTop()
}firstmore=false;
$this=$(this);
notshowned=$("ul li:not(.displayed)",$this.parents()[1]).length;
showed=$("ul li.displayed",$this.parents()[1]).length;
if(notshowned<=listnum){$("ul li:not(.displayed)",$this.parents()[1]).addClass("displayed");
$($this.parents()[1]).removeClass("more");
$this.parent().remove()
}else{numlist=showed+listnum;
for(i=showed;
i<=numlist;
++i){$("ul li:nth-child("+i+")",$this.parents()[1]).addClass("displayed")
}}});
function a(c){if(getaction){$("body").animate({scrollTop:(getaction)},"fast")
}var b=$(document).height();
if(c.hasClass("more")){c.removeClass("more");
$(".resource_showmore",c).remove()
}$("ul li",c).removeClass("displayed");
$("ul",c).removeClass("open");
c.removeClass("active");
getaction="";
firstmore=true
}});
$(function(){$("header nav").before("<div class='headerlogo printpager'><img src='/content/dam/cadence-www/global/en_US/images/site-images/icons/navigation-icons/cadence-logo-black.png'></div>")
});
(function(a){a(window).on("scroll",function(){ratio=window.innerWidth/document.documentElement.clientWidth;
if(ratio<1){a("body").addClass("zoomed")
}else{a("body").removeClass("zoomed")
}})
})(jQuery);
$(function(){if($("table.cdn-nxtgn-event-table + pagination").length!=0){function a(){$this=$(".page_event_landing ul.pagination");
if($("li:first-child",$this).hasClass("disabled")){$("li:last-child",$this).css("display","none")
}else{$("li:first-child",$this).css("display","none");
$("li:last-child",$this).css("display","none")
}$this.css("position","absolute");
$this.css("top",(($this.parent().height()-$this.outerHeight())/2)+$this.parent().scrollTop()+"px");
$this.css("left",(($this.parent().width()-$this.outerWidth())/2)+$this.parent().scrollLeft()+"px")
}a();
$(window).on("resize",function(){a()
})
}});