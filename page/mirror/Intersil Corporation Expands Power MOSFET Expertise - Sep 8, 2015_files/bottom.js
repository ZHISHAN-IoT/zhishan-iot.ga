var Holder=Holder||{};
(function(f,b){var s=false,m=false,a=document.createElement("canvas");
document.getElementsByClassName||(document.getElementsByClassName=function(y){var v=document,z,x,u,w=[];
if(v.querySelectorAll){return v.querySelectorAll("."+y)
}if(v.evaluate){x=".//*[contains(concat(' ', @class, ' '), ' "+y+" ')]",z=v.evaluate(x,v,null,0,null);
while(u=z.iterateNext()){w.push(u)
}}else{z=v.getElementsByTagName("*"),x=new RegExp("(^|\\s)"+y+"(\\s|$)");
for(u=0;
u<z.length;
u++){x.test(z[u].className)&&w.push(z[u])
}}return w
});
window.getComputedStyle||(window.getComputedStyle=function(v,u){return this.el=v,this.getPropertyValue=function(w){var x=/(\-([a-z]){1})/g;
return w=="float"&&(w="styleFloat"),x.test(w)&&(w=w.replace(x,function(){return arguments[2].toUpperCase()
})),v.currentStyle[w]?v.currentStyle[w]:null
},this
});
function r(z,K){var A="complete",L="readystatechange",J=!1,C=J,F=!0,B=z.document,H=B.documentElement,E=B.addEventListener?"addEventListener":"attachEvent",I=B.addEventListener?"removeEventListener":"detachEvent",D=B.addEventListener?"":"on",w=function(u){(u.type!=L||B.readyState==A)&&((u.type=="load"?z:B)[I](D+u.type,w,J),!C&&(C=!0)&&K.call(z,null))
},x=function(){try{H.doScroll("left")
}catch(u){setTimeout(x,50);
return
}w("poll")
};
if(B.readyState==A){K.call(z,"lazy")
}else{if(B.createEventObject&&H.doScroll){try{F=!z.frameElement
}catch(G){}F&&x()
}B[E](D+"DOMContentLoaded",w,J),B[E](D+L,w,J),z[E](D+"load",w,J)
}}function n(v){v=v.match(/^(\W)?(.*)/);
var u=document["getElement"+(v[1]?v[1]=="#"?"ById":"sByClassName":"sByTagName")](v[2]);
var w=[];
u!=null&&(u.length?w=u:u.length==0?w=u:w=[u]);
return w
}function p(v,u){var y={};
for(var x in v){y[x]=v[x]
}for(var w in u){y[w]=u[w]
}return y
}if(!Object.prototype.hasOwnProperty){Object.prototype.hasOwnProperty=function(v){var u=this.__proto__||this.constructor.prototype;
return(v in this)&&(!(v in u)||u[v]!==this[v])
}
}function k(y,v,x){var w=[v,y].sort();
var A=Math.round(w[1]/16),u=Math.round(w[0]/16);
var z=Math.max(x.size,A);
return{height:z}
}function h(D,u,A,z){var x=k(u.width,u.height,A);
var y=x.height;
var v=u.width*z,C=u.height*z;
var w=A.font?A.font:"sans-serif";
a.width=v;
a.height=C;
D.textAlign="center";
D.textBaseline="middle";
D.fillStyle=A.background;
D.fillRect(0,0,v,C);
D.fillStyle=A.foreground;
D.font="bold "+y+"px "+w;
var B=A.text?A.text:(u.width+"x"+u.height);
if(D.measureText(B).width/v>1){y=A.size/(D.measureText(B).width/v)
}D.font="bold "+(y*z)+"px "+w;
D.fillText(B,(v/2),(C/2),v);
return a.toDataURL("image/png")
}function t(z,x,B,u){var v=B.dimensions,y=B.theme,C=B.text?decodeURIComponent(B.text):B.text;
var w=v.width+"x"+v.height;
y=(C?p(y,{text:C}):y);
y=(B.font?p(y,{font:B.font}):y);
var A=1;
if(window.devicePixelRatio&&window.devicePixelRatio>1){A=window.devicePixelRatio
}if(z=="image"){x.setAttribute("data-src",u);
x.setAttribute("alt",C?C:y.text?y.text+" ["+w+"]":w);
if(m||!B.auto){x.style.width=v.width+"px";
x.style.height=v.height+"px"
}if(m){x.style.backgroundColor=y.background
}else{x.setAttribute("src",h(l,v,y,A))
}}else{if(!m){x.style.backgroundImage="url("+h(l,v,y,A)+")";
x.style.backgroundSize=v.width+"px "+v.height+"px"
}}}function e(w,v,B){var y=v.dimensions,z=v.theme,A=v.text;
var u=y.width+"x"+y.height;
z=(A?p(z,{text:A}):z);
var x=document.createElement("div");
x.style.backgroundColor=z.background;
x.style.color=z.foreground;
x.className=w.className+" holderjs-fluid";
x.style.width=v.dimensions.width+(v.dimensions.width.indexOf("%")>0?"":"px");
x.style.height=v.dimensions.height+(v.dimensions.height.indexOf("%")>0?"":"px");
x.id=w.id;
w.style.width=0;
w.style.height=0;
if(z.text){x.appendChild(document.createTextNode(z.text))
}else{x.appendChild(document.createTextNode(u));
g.push(x);
setTimeout(d,0)
}w.parentNode.insertBefore(x,w.nextSibling);
if(window.jQuery){jQuery(function(C){C(w).on("load",function(){w.style.width=x.style.width;
w.style.height=x.style.height;
C(w).show();
C(x).remove()
})
})
}}function d(){for(i in g){if(!g.hasOwnProperty(i)){continue
}var v=g[i],u=v.firstChild;
v.style.lineHeight=v.offsetHeight+"px";
u.data=v.offsetWidth+"x"+v.offsetHeight
}}function c(v,x){var w={theme:q.themes.gray},y=false;
for(sl=v.length,j=0;
j<sl;
j++){var u=v[j];
if(f.flags.dimensions.match(u)){y=true;
w.dimensions=f.flags.dimensions.output(u)
}else{if(f.flags.fluid.match(u)){y=true;
w.dimensions=f.flags.fluid.output(u);
w.fluid=true
}else{if(f.flags.colors.match(u)){w.theme=f.flags.colors.output(u)
}else{if(x.themes[u]){w.theme=x.themes[u]
}else{if(f.flags.text.match(u)){w.text=f.flags.text.output(u)
}else{if(f.flags.font.match(u)){w.font=f.flags.font.output(u)
}else{if(f.flags.auto.match(u)){w.auto=true
}}}}}}}}return y?w:false
}if(!a.getContext){m=true
}else{if(a.toDataURL("image/png").indexOf("data:image/png")<0){m=true
}else{var l=a.getContext("2d")
}}var g=[];
var q={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"};
f.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(v){var u=this.regex.exec(v);
return{width:+u[1],height:+u[2]}
}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(v){var u=this.regex.exec(v);
return{width:u[1],height:u[2]}
}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(v){var u=this.regex.exec(v);
return{size:q.themes.gray.size,foreground:"#"+u[2],background:"#"+u[1]}
}},text:{regex:/text\:(.*)/,output:function(u){return this.regex.exec(u)[1]
}},font:{regex:/font\:(.*)/,output:function(u){return this.regex.exec(u)[1]
}},auto:{regex:/^auto$/}};
for(var o in f.flags){if(!f.flags.hasOwnProperty(o)){continue
}f.flags[o].match=function(u){return u.match(this.regex)
}
}f.add_theme=function(u,v){u!=null&&v!=null&&(q.themes[u]=v);
return f
};
f.add_image=function(z,x){var y=n(x);
if(y.length){for(var w=0,u=y.length;
w<u;
w++){var v=document.createElement("img");
v.setAttribute("data-src",z);
y[w].appendChild(v)
}}return f
};
f.run=function(v){var D=p(q,v),B=[];
if(D.images instanceof window.NodeList){imageNodes=D.images
}else{if(D.images instanceof window.Node){imageNodes=[D.images]
}else{imageNodes=n(D.images)
}}if(D.elements instanceof window.NodeList){bgnodes=D.bgnodes
}else{if(D.bgnodes instanceof window.Node){bgnodes=[D.bgnodes]
}else{bgnodes=n(D.bgnodes)
}}s=true;
for(z=0,y=imageNodes.length;
z<y;
z++){B.push(imageNodes[z])
}var x=document.getElementById("holderjs-style");
if(!x){x=document.createElement("style");
x.setAttribute("id","holderjs-style");
x.type="text/css";
document.getElementsByTagName("head")[0].appendChild(x)
}if(x.styleSheet){x.styleSheet+=D.stylesheet
}else{x.textContent+=D.stylesheet
}var A=new RegExp(D.domain+'/(.*?)"?\\)');
for(var y=bgnodes.length,z=0;
z<y;
z++){var u=window.getComputedStyle(bgnodes[z],null).getPropertyValue("background-image");
var w=u.match(A);
if(w){var C=c(w[1].split("/"),D);
if(C){t("background",bgnodes[z],C,u)
}}}for(var y=B.length,z=0;
z<y;
z++){var u=B[z].getAttribute("src")||B[z].getAttribute("data-src");
if(u!=null&&u.indexOf(D.domain)>=0){var C=c(u.substr(u.lastIndexOf(D.domain)+D.domain.length+1).split("/"),D);
if(C){if(C.fluid){e(B[z],C,u)
}else{t("image",B[z],C,u)
}}}}return f
};
r(b,function(){if(window.addEventListener){window.addEventListener("resize",d,false);
window.addEventListener("orientationchange",d,false)
}else{window.attachEvent("onresize",d)
}s||f.run()
});
if(typeof define==="function"&&define.amd){define("Holder",[],function(){return f
})
}})(Holder,window);
$(function(){window.prettyPrint&&prettyPrint();
$(document).on("click",".yamm .dropdown-menu",function(a){a.stopPropagation()
})
});