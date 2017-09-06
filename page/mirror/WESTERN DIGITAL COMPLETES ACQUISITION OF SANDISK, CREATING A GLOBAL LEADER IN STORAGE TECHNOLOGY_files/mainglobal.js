/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)
},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()
};
m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=m.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return m.each(this,a,b)
},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===m.type(a)
},isArray:Array.isArray||function(a){return"array"===m.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){return !m.isArray(a)&&a-parseFloat(a)>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a)){return !1
}try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(k.ownLast){for(b in a){return j.call(a,b)
}}for(b in a){}return void 0===b||j.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":(a+"").replace(n,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(g){return g.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))
},e.guid=a.guid=a.guid||m.guid++,e):void 0
},now:function(){return +new Date
},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function r(a){var b=a.length,c=m.type(a);
return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0
},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;
c>b;
b++){if(this[b]===a){return b
}}return -1
},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
};
try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType
}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;
if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a){return d
}if(1!==(k=b.nodeType)&&9!==k){return[]
}if(p&&!e){if(f=_.exec(a)){if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode){return d
}if(h.id===j){return d.push(h),d
}}else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j){return d.push(h),d
}}}else{if(f[2]){return I.apply(d,b.getElementsByTagName(a)),d
}if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName){return I.apply(d,b.getElementsByClassName(j)),d
}}}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;
while(l--){o[l]=s+qb(o[l])
}w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")
}if(x){try{return I.apply(d,w.querySelectorAll(x)),d
}catch(y){}finally{r||b.removeAttribute("id")
}}}}return i(a.replace(R,"$1"),b,d,e)
}function gb(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function hb(a){return a[u]=!0,a
}function ib(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function jb(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function lb(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function mb(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a
}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;
return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()
},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()
})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length
}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")
}),ib(function(a){var b=e.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];
if(!f||!g){return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0
}if(f===g){return kb(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){i.unshift(c)
}while(h[d]===i[d]){d++
}return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0
},e):n
},fb.matches=function(a,b){return fb(a,null,null,b)
},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return fb(b,n,null,[a]).length>0
},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];
break
}}}else{if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=K.call(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));
return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()
}
}),has:hb(function(a){return function(b){return fb(a,b).length>0
}
}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Z.test(a.nodeName)
},input:function(a){return Y.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:nb(function(){return[0]
}),last:nb(function(a,b){return[b-1]
}),eq:nb(function(a,b,c){return[0>c?c+b:c]
}),even:nb(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:nb(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=lb(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=mb(b)
}function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?fb.error(a):z(a,i).slice(0)
};
function qb(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function sb(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function tb(a,b,c){for(var d=0,e=b.length;
e>d;
d++){fb(a,b[d],c)
}return c
}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)
}})
}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b
},h,!0),l=rb(function(a){return K.call(b,a)>-1
},h,!0),m=[function(a,c,d){return !g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[rb(sb(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))
}m.push(c)
}}return sb(m)
}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||0.1,x=u.length;
for(k&&(j=g!==n&&g);
q!==x&&null!=(l=u[q]);
q++){if(e&&l){m=0;
while(o=a[m++]){if(o(l,g,h)){i.push(l);
break
}}k&&(w=v)
}c&&((l=!o&&l)&&p--,f&&r.push(l))
}if(p+=q,c&&q!==p){m=0;
while(o=b[m++]){o(r,s,g,h)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=G.call(i))
}}s=ub(s)
}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)
}return k&&(w=v,j=t),r
};
return c?hb(f):f
}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=wb(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,xb(e,d)),f.selector=a
}return f
},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=X.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a){return I.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ib(function(a){return null==a.getAttribute("disabled")
})||jb(L,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fb
}(a);
m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;
var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;
function w(a,b,c){if(m.isFunction(b)){return m.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return m.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(v.test(b)){return m.filter(b,a,c)
}b=m.filter(b,a)
}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c
})
}m.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType
}))
},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(m(a).filter(function(){for(b=0;
e>b;
b++){if(m.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){m.find(a,d[b],c)
}return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(w(this,a||[],!1))
},not:function(a){return this.pushStack(w(this,a||[],!0))
},is:function(a){return !!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length
}});
var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||x).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b)){for(c in b){m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2]){return x.find(a)
}this.length=1,this[0]=d
}return this.context=y,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))
};
A.prototype=m.fn,x=m(y);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
m.extend({dir:function(a,b,c){var d=[],e=a[b];
while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c))){1===e.nodeType&&d.push(e),e=e[b]
}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(m.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?m.unique(f):f)
},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}m.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return m.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return m.dir(a,"nextSibling")
},prevAll:function(a){return m.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)
},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return m.sibling(a.firstChild)
},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)
}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return m.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;
h&&e>f;
f++){if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;
break
}}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())
},k={add:function(){if(h){var d=h.length;
!function f(b){m.each(b,function(b,c){var d=m.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)
})
}(arguments),b?e=h.length:c&&(g=d,j(c))
}return this
},remove:function(){return h&&m.each(arguments,function(a,c){var d;
while((d=m.inArray(c,h,d))>-1){h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)
}}),this
},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],e=0,this
},disable:function(){return h=i=c=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,c||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,c){return !h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return k
},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?m.extend(a,d):d
}},e={};
return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
m.fn.ready=function(a){return m.ready.promise().done(a),this
},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)
},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body){return setTimeout(m.ready)
}m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))
}}});
function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))
}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())
}m.ready.promise=function(b){if(!H){if(H=m.Deferred(),"complete"===y.readyState){setTimeout(m.ready)
}else{if(y.addEventListener){y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1)
}else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);
var c=!1;
try{c=null==a.frameElement&&y.documentElement
}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")
}catch(a){return setTimeout(e,50)
}I(),m.ready()
}}()
}}}return H.promise(b)
};
var K="undefined",L;
for(L in m(k)){break
}k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))
}),function(){var a=y.createElement("div");
if(null==k.deleteExpando){k.deleteExpando=!0;
try{delete a.test
}catch(b){k.deleteExpando=!1
}}a=null
}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
};
var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;
function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c
}catch(e){}m.data(a,b,c)
}else{c=void 0
}}return c
}function P(a){var b;
for(b in a){if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f
}}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!P(d):!m.isEmptyObject(d)){return
}}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)
}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)
},data:function(a,b,c){return Q(a,b,c)
},removeData:function(a,b){return R(a,b)
},_data:function(a,b,c){return Q(a,b,c,!0)
},_removeData:function(a,b){return R(a,b,!0)
}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])))
}m._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){m.data(this,a)
}):arguments.length>1?this.each(function(){m.data(this,a,b)
}):f?O(f,a,m.data(f,a)):void 0
},removeData:function(a){return this.each(function(){m.removeData(this,a)
})
}}),m.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)
})})
}}),m.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);
m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){m.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)
},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===m.type(c)){e=!0;
for(h in c){m.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},W=/^(?:checkbox|radio)$/i;
!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();
if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1
}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;
try{delete b.test
}catch(d){k.deleteExpando=!1
}}}(),function(){var b,c,d=y.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1)
}d=null
}();
var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;
function ab(){return !0
}function bb(){return !1
}function cb(){try{return y.activeElement
}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(E)||[""],h=b.length;
while(h--){f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);
if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;
while(f--){g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){m.event.remove(a,o+b[j],c,d,!0)
}}}m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];
if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);
h;
h=h.parentNode){o.push(h),l=h
}l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)
}n=0;
while((h=o[n++])&&!b.isPropagationStopped()){b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault())
}if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;
try{d[p]()
}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)
}return b.result
}},dispatch:function(a){a=m.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;
while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;
h>f;
f++){d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d)
}e.length&&g.push({elem:i,handlers:e})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[m.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return m.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))
},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void (this[m.expando]=!0)):new m.Event(a,b)
},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;
c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0
}),m._data(c,"submitBubbles",!0))
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")
}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)
}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)
})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;
X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)
}),m._data(b,"changeBubbles",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)
}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)
};
m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);
e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;
e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))
}}
}),m.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(f in a){this.on(f,b,c,a[f],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=bb
}else{if(!d){return this
}}return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)
},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?m.event.trigger(a,b,c,!0):void 0
}});
function db(a){var b=eb.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));
rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;
function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b))
}}return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f
}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)
}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a
}function yb(a){var b=pb.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function zb(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))
}}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){m.event.add(b,c,h[c][d])
}}}g.data&&(g.data=m.extend({},g.data))
}}function Bb(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);
for(d in e.events){m.removeEvent(b,d,e.handle)
}b.removeAttribute(m.expando)
}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);
if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a))){for(d=ub(f),h=ub(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Bb(e,d[g])
}}if(b){if(c){for(h=h||ub(a),d=d||ub(f),g=0;
null!=(e=h[g]);
g++){Ab(e,d[g])
}}else{Ab(a,f)
}}return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;
n>q;
q++){if(f=a[q],f||0===f){if("object"===m.type(f)){m.merge(p,f.nodeType?[f]:f)
}else{if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];
while(e--){h=h.lastChild
}if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;
while(e--){m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)
}}m.merge(p,h.childNodes),h.textContent="";
while(h.firstChild){h.removeChild(h.firstChild)
}h=o.lastChild
}else{p.push(b.createTextNode(f))
}}}}h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;
while(f=p[q++]){if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;
while(f=h[e++]){ob.test(f.type||"")&&c.push(f)
}}}return h=null,o
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;
null!=(d=a[h]);
h++){if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))
}}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&m.cleanData(ub(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&m.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)
})
},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0
}if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);
if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p)){return this.each(function(c){var d=n.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;
l>j;
j++){d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j)
}if(f){for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;
f>j;
j++){d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")))
}}i=c=null
}return this
}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get())
}return this.pushStack(e)
}
});
var Cb,Db={};
function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");
return e.detach(),f
}function Fb(a){var b=y,c=Db[a];
return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c
}!function(){var a;
k.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,d;
return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0
}
}();
var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function Lb(a,b){return{get:function(){var c=a();
if(null!=c){return c?void delete this.get:(this.get=b).apply(this,arguments)
}}}
}!function(){var b,c,d,e,f,g,h;
if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g
},boxSizingReliable:function(){return null==f&&i(),f
},pixelPosition:function(){return null==e&&i(),e
},reliableMarginRight:function(){return null==h&&i(),h
}});
function i(){var b,c,d,i;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))
}}}(),m.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];
function Ub(a,b){if(b in a){return b
}var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;
while(e--){if(b=Tb[e]+c,b in a){return b
}}return d
}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function Wb(a,b,c){var d=Pb.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)))
}return g
}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e)){return e
}d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"
}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;
if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);
return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f
}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)
}):Yb(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ib(a);
return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)
}}
}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)
}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0
}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+T[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)
}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;
if(m.isArray(b)){for(d=Ib(a),e=b.length;
e>g;
g++){f[b[g]]=m.css(a,b[g],!1,d)
}return f
}return void 0!==c?m.style(a,b,c):m.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Vb(this,!0)
},hide:function(){return Vb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()
})
}});
function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];
return a&&a.get?a.get(this):Zb.propHooks._default.get(this)
},run:function(a){var b,c=Zb.propHooks[this.prop];
return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this
}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},m.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},m.fx=Zb.prototype.init,m.fx.step={};
var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,m.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function fc(){return setTimeout(function(){$b=void 0
}),$b=m.now()
}function gc(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=T[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");
c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||m.style(a,d)
}else{j=void 0
}}if(m.isEmptyObject(o)){"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()
}),n.done(function(){var b;
m._removeData(a,"fxshow");
for(b in o){m.style(a,b,o[b])
}});
for(d in o){g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function jc(a,b){var c,d,e,f,g;
for(c in a){if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(jc(k,j.opts.specialEasing);
g>f;
f++){if(d=dc[f].call(j,a,k,j.opts)){return d
}}return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)
}},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)
}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};
return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)
},d
},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);
(e||m._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&cc.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&m.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;
for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];
m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)
}
}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;
for($b=m.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||m.fx.stop(),$b=void 0
},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()
},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))
},m.fx.stop=function(){clearInterval(_b),_b=null
},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a,b,c,d,e;
b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value
}();
var lc=/\r/g;
m.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=m.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""
})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)
}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");
return null!=b?b:m.trim(m.text(a))
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;
while(g--){if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0
}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;
m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)
})
}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)
}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c
}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;
oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;
return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e
}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null
}
}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void (a.defaultValue=b):mc&&mc.set(a,b,c)
}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},oc.id=oc.name=oc.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)
}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;
m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");
return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1
}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this
}),k.enctype||(m.propFix.enctype="encoding");
var uc=/[\t\r\n\f]/g;
m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).addClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=m.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?m.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0){return !0
}}return !1
}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
m.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=m.trim(b+"");
return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():m.error("Invalid JSON: "+b)
},m.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c
};
var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");
try{zc=location.href
}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href
}yc=Gc.exec(zc.toLowerCase())||[];
function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(m.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Mc(a,b,c,d){var e={},f=a===Ic;
function g(h){var i;
return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&m.extend(!0,a,c),a
}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)
},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!j){j={};
while(b=Cc.exec(f)){j[b[1].toLowerCase()]=b[2]
}}b=j[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?f:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return i&&i.abort(b),x(0,b),this
}};
if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t){return v
}h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);
for(d in k.headers){v.setRequestHeader(d,k.headers[d])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(d in {success:1,error:1,complete:1}){v[d](k[d])
}if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,i.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,c,d){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return m.get(a,b,c,"json")
},getScript:function(a,b){return m.get(a,void 0,b,"script")
}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)
}
}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},m.fn.extend({wrapAll:function(a){if(m.isFunction(a)){return this.each(function(b){m(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))
}:function(){var b=m(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=m.isFunction(a);
return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)
}).end()
}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))
},m.expr.filters.visible=function(a){return !m.expr.filters.hidden(a)
};
var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;
function Vc(a,b,c,d){var e;
if(m.isArray(b)){m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==m.type(b)){d(a,b)
}else{for(e in b){Vc(a+"["+e+"]",b[e],c,d)
}}}}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a)){m.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Vc(c,a[c],b,e)
}}return d.join("&").replace(Qc,"+")
},m.fn.extend({serialize:function(){return m.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");
return a?m.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))
}).map(function(a,b){var c=m(this).val();
return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}
}):{name:b.name,value:c.replace(Sc,"\r\n")}
}).get()
}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()
}:Zc;
var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();
a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc){Xc[a](void 0,!0)
}}),k.cors=!!Yc&&"withCredentials" in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;
return{send:function(c,d){var e,f=a.xhr(),g=++Wc;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){void 0!==c[e]&&f.setRequestHeader(e,c[e]+"")
}f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;
if(b&&(e||4===f.readyState)){if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e){4!==f.readyState&&f.abort()
}else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);
try{i=f.statusText
}catch(k){i=""
}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404
}}j&&d(h,i,j,f.getAllResponseHeaders())
},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()
},abort:function(){b&&b(void 0,!0)
}}
}});
function Zc(){try{return new a.XMLHttpRequest
}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a
}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;
return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var _c=[],ad=/(=)\?(?=&|$)|\?\?/;
m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;
return this[a]=!0,a
}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||y;
var d=u.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))
};
var bd=m.fn.load;
m.fn.load=function(a,b,c){if("string"!=typeof a&&bd){return bd.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])
}),this
},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem
}).length
};
var cd=a.document.documentElement;
function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using" in b?b.using.call(a,n):l.css(n)
}},m.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;
while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position")){a=a.offsetParent
}return a||cd
})
}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0
})
}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return V(this,function(b,c,d){var e;
return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),m.fn.size=function(){return this.length
},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m
});
var ed=a.jQuery,fd=a.$;
return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m
},typeof b===K&&(a.jQuery=a.$=m),m
});
window.Modernizr=function(an,am,al){function H(b){ae.cssText=b
}function Y(d,c){return H(ab.join(d+";")+(c||""))
}function W(d,c){return typeof d===c
}function U(d,c){return !!~(""+d).indexOf(c)
}function S(f,c){for(var h in f){var g=f[h];
if(!U(g,"-")&&ae[g]!==al){return c=="pfx"?g:!0
}}return !1
}function Q(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==al){return j===!1?g[i]:W(h,"function")?h.bind(j||c):h
}}return !1
}function O(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+Z.join(i+" ")+i).split(" ");
return W(f,"string")||W(f,"undefined")?S(h,f):(h=(g+" "+X.join(i+" ")+i).split(" "),Q(h,f,j))
}var ak="2.6.2",aj={},ai=!0,ah=am.documentElement,ag="modernizr",af=am.createElement(ag),ae=af.style,ad,ac={}.toString,ab=" -webkit- -moz- -o- -ms- ".split(" "),aa="Webkit Moz O ms",Z=aa.split(" "),X=aa.toLowerCase().split(" "),V={},T={},R={},P=[],N=P.slice,M,K=function(v,u,t,s){var r,q,p,o,h=am.createElement("div"),g=am.body,b=g||am.createElement("body");
if(parseInt(t,10)){while(t--){p=am.createElement("div"),p.id=s?s[t]:ag+(t+1),h.appendChild(p)
}}return r=["&#173;",'<style id="s',ag,'">',v,"</style>"].join(""),h.id=ag,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=ah.style.overflow,ah.style.overflow="hidden",ah.appendChild(b)),q=u(h,v),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),ah.style.overflow=o),!!q
},J={}.hasOwnProperty,I;
!W(J,"undefined")&&!W(J.call,"undefined")?I=function(d,c){return J.call(d,c)
}:I=function(d,c){return c in d&&W(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=N.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(N.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(N.call(arguments)))
};
return f
}),V.touch=function(){var a;
return"ontouchstart" in an||an.DocumentTouch&&am instanceof DocumentTouch?a=!0:K(["@media (",ab.join("touch-enabled),("),ag,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},V.cssanimations=function(){return O("animationName")
},V.csstransitions=function(){return O("transition")
};
for(var L in V){I(V,L)&&(M=L.toLowerCase(),aj[M]=V[L](),P.push((aj[M]?"":"no-")+M))
}return aj.addTest=function(f,c){if(typeof f=="object"){for(var g in f){I(f,g)&&aj.addTest(g,f[g])
}}else{f=f.toLowerCase();
if(aj[f]!==al){return aj
}c=typeof c=="function"?c():c,typeof ai!="undefined"&&ai&&(ah.className+=" "+(c?"":"no-")+f),aj[f]=c
}return aj
},H(""),af=ad=null,function(aq,ap){function z(g,f){var i=g.createElement("p"),h=g.getElementsByTagName("head")[0]||g.documentElement;
return i.innerHTML="x<style>"+f+"</style>",h.insertBefore(i.lastChild,h.firstChild)
}function y(){var b=s.elements;
return typeof b=="string"?b.split(" "):b
}function x(d){var c=B[d[D]];
return c||(c={},C++,d[D]=C,B[C]=c),c
}function w(b,i,h){i||(i=ap);
if(A){return i.createElement(b)
}h||(h=x(i));
var d;
return h.cache[b]?d=h.cache[b].cloneNode():F.test(b)?d=(h.cache[b]=h.createElem(b)).cloneNode():d=h.createElem(b),d.canHaveChildren&&!G.test(b)?h.frag.appendChild(d):d
}function v(b,l){b||(b=ap);
if(A){return b.createDocumentFragment()
}l=l||x(b);
var k=l.frag.cloneNode(),j=0,i=y(),h=i.length;
for(;
j<h;
j++){k.createElement(i[j])
}return k
}function u(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return s.shivMethods?w(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+y().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(s,c.frag)
}function t(b){b||(b=ap);
var d=x(b);
return s.shivCSS&&!E&&!d.hasCSS&&(d.hasCSS=!!z(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),A||u(b,d),b
}var ao=aq.html5||{},G=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,F=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E,D="_html5shiv",C=0,B={},A;
(function(){try{var b=ap.createElement("a");
b.innerHTML="<xyz></xyz>",E="hidden" in b,A=b.childNodes.length==1||function(){ap.createElement("a");
var c=ap.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(d){E=!0,A=!0
}})();
var s={elements:ao.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:ao.shivCSS!==!1,supportsUnknownElements:A,shivMethods:ao.shivMethods!==!1,type:"default",shivDocument:t,createElement:w,createDocumentFragment:v};
aq.html5=s,t(ap)
}(this,am),aj._version=ak,aj._prefixes=ab,aj._domPrefixes=X,aj._cssomPrefixes=Z,aj.testProp=function(b){return S([b])
},aj.testAllProps=O,aj.testStyles=K,aj.prefixed=function(f,d,g){return d?O(f,d,g):O(f,"pfx")
},ah.className=ah.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ai?" js "+P.join(" "):""),aj
}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)
}function Z(b){return"string"==typeof b
}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function W(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),W()):M=0
}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)
},50);
for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()
}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};
1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))
}function U(h,g,k,j,i){return M=0,g=g||"j",Z(h)?V("c"==g?G:H,h,g,this.i++,k,j,i):(O.splice(this.i++,0,h),1==O.length&&W()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(f){function c(i){var i=i.split("!"),h=E.length,r=i.pop(),q=i.length,r={url:r,origUrl:r,prefixes:i},p,l,j;
for(l=0;
l<q;
l++){j=i[l].split("="),(p=C[j.shift()])&&(r=p(r,j))
}for(l=0;
l<h;
l++){r=E[l](r)
}return r
}function o(b,t,s,r,q){var p=c(b),l=p.autoCallback;
p.url.split(".").pop().split("?").shift(),p.bypass||(t&&(t=aa(t)?t:t[b]||t[r]||t[b.split("/").pop().split("?")[0]]),p.instead?p.instead(b,t,s,r,q):(D[p.url]?p.noexec=!0:D[p.url]=1,s.load(p.url,p.forceCSS||!p.forceJS&&"css"==p.url.split(".").pop().split("?").shift()?"c":ab,p.noexec,p.attrs,p.timeout),(aa(t)||aa(l))&&s.load(function(){T(),t&&t(p.origUrl,q,r),l&&l(p.origUrl,q,r),D[p.url]=2
})))
}function n(x,w){function v(b,h){if(b){if(Z(b)){h||(s=function(){var i=[].slice.call(arguments);
r.apply(this,i),q()
}),o(b,s,w,0,u)
}else{if(Object(b)===b){for(g in p=function(){var a=0,i;
for(i in b){b.hasOwnProperty(i)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--p&&(aa(s)?s=function(){var i=[].slice.call(arguments);
r.apply(this,i),q()
}:s[g]=function(i){return function(){var a=[].slice.call(arguments);
i&&i.apply(this,a),q()
}
}(r[g])),o(b[g],s,w,g,u))
}}}}else{!h&&q()
}}var u=!!x.test,t=x.load||x.both,s=x.callback||Y,r=s,q=x.complete||Y,p,g;
v(u?x.yep:x.nope,!!t),t&&v(t)
}var m,k,d=this.yepnope.loader;
if(Z(f)){o(f,0,d,0)
}else{if(F(f)){for(m=0;
m<f.length;
m++){k=f[m],Z(k)?o(k,0,d,0):F(k)?L(k):Object(k)===k&&n(k,d)
}}else{Object(f)===f&&n(f,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
(function(d,b,g){var f=b.Modernizr,c=d("body");
d.DLMenu=function(h,i){this.$el=d(i);
this._init(h)
};
d.DLMenu.defaults={animationClasses:{classin:"dl-animate-in",classout:"dl-animate-out"},onLevelClick:function(i,h){return false
},onLinkClick:function(h,i){return false
}};
d.DLMenu.prototype={_init:function(i){this.options=d.extend(true,{},d.DLMenu.defaults,i);
this._config();
var h={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},j={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};
this.animEndEventName=h[f.prefixed("animation")]+".dlmenu";
this.transEndEventName=j[f.prefixed("transition")]+".dlmenu",this.supportAnimations=f.cssanimations,this.supportTransitions=f.csstransitions;
this._initEvents()
},_config:function(){this.open=false;
this.$trigger=this.$el.children(".dl-trigger");
this.$menu=this.$el.children("ul.dl-menu");
this.$menuitems=this.$menu.find("li:not(.dl-back)");
this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">back</a></li>');
this.$back=this.$menu.find("li.dl-back")
},_initEvents:function(){var h=this;
this.$trigger.on("click.dlmenu",function(){if(h.open){h._closeMenu()
}else{h._openMenu()
}return false
});
this.$menuitems.on("click.dlmenu",function(k){k.stopPropagation();
var j=d(this),i=j.children("ul.dl-submenu");
if(i.length>0){var m=i.clone().css("opacity",0).insertAfter(h.$menu),l=function(){h.$menu.off(h.animEndEventName).removeClass(h.options.animationClasses.classout).addClass("dl-subview");
j.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview");
m.remove()
};
setTimeout(function(){m.addClass(h.options.animationClasses.classin);
h.$menu.addClass(h.options.animationClasses.classout);
if(h.supportAnimations){h.$menu.on(h.animEndEventName,l)
}else{l.call()
}h.options.onLevelClick(j,j.children("a:first").text())
});
return false
}else{h.options.onLinkClick(j,k)
}});
this.$back.on("click.dlmenu",function(k){var l=d(this),j=l.parents("ul.dl-submenu:first"),i=j.parent(),n=j.clone().insertAfter(h.$menu);
var m=function(){h.$menu.off(h.animEndEventName).removeClass(h.options.animationClasses.classin);
n.remove()
};
setTimeout(function(){n.addClass(h.options.animationClasses.classout);
h.$menu.addClass(h.options.animationClasses.classin);
if(h.supportAnimations){h.$menu.on(h.animEndEventName,m)
}else{m.call()
}i.removeClass("dl-subviewopen");
var o=l.parents(".dl-subview:first");
if(o.is("li")){o.addClass("dl-subviewopen")
}o.removeClass("dl-subview")
});
return false
})
},closeMenu:function(){if(this.open){this._closeMenu()
}},_closeMenu:function(){var h=this,i=function(){h.$menu.off(h.transEndEventName);
h._resetMenu()
};
this.$menu.removeClass("dl-menuopen");
this.$menu.addClass("dl-menu-toggle");
this.$trigger.removeClass("dl-active");
if(this.supportTransitions){this.$menu.on(this.transEndEventName,i)
}else{i.call()
}this.open=false
},openMenu:function(){if(!this.open){this._openMenu()
}},_openMenu:function(){var h=this;
c.off("click").on("click.dlmenu",function(){h._closeMenu()
});
this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName,function(){d(this).removeClass("dl-menu-toggle")
});
this.$trigger.addClass("dl-active");
this.open=true
},_resetMenu:function(){this.$menu.removeClass("dl-subview");
this.$menuitems.removeClass("dl-subview dl-subviewopen")
}};
var a=function(h){if(b.console){b.console.error(h)
}};
d.fn.dlmenu=function(i){if(typeof i==="string"){var h=Array.prototype.slice.call(arguments,1);
this.each(function(){var j=d.data(this,"dlmenu");
if(!j){a("cannot call methods on dlmenu prior to initialization; attempted to call method '"+i+"'");
return
}if(!d.isFunction(j[i])||i.charAt(0)==="_"){a("no such method '"+i+"' for dlmenu instance");
return
}j[i].apply(j,h)
})
}else{this.each(function(){var j=d.data(this,"dlmenu");
if(j){j._init()
}else{j=d.data(this,"dlmenu",new d.DLMenu(i,this))
}})
}return this
}
})(jQuery,window);
/*! jQuery UI - v1.11.4 - 2015-05-05
* http://jqueryui.com
* Includes: core.js, widget.js, position.js, autocomplete.js, menu.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)
})(function(d){function b(h,i){var l,g,k,j=h.nodeName.toLowerCase();
return"area"===j?(l=h.parentNode,g=l.name,h.href&&g&&"map"===l.nodeName.toLowerCase()?(k=d("img[usemap='#"+g+"']")[0],!!k&&a(k)):!1):(/^(input|select|textarea|button|object)$/.test(j)?!h.disabled:"a"===j?h.href||i:i)&&a(h)
}function a(g){return d.expr.filters.visible(g)&&!d(g).parents().addBack().filter(function(){return"hidden"===d.css(this,"visibility")
}).length
}d.ui=d.ui||{},d.extend(d.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),d.fn.extend({scrollParent:function(j){var h=this.css("position"),k="absolute"===h,l=j?/(auto|scroll|hidden)/:/(auto|scroll)/,g=this.parents().filter(function(){var i=d(this);
return k&&"static"===i.css("position")?!1:l.test(i.css("overflow")+i.css("overflow-y")+i.css("overflow-x"))
}).eq(0);
return"fixed"!==h&&g.length?g:d(this[0].ownerDocument||document)
},uniqueId:function(){var g=0;
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++g)
})
}
}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&d(this).removeAttr("id")
})
}}),d.extend(d.expr[":"],{data:d.expr.createPseudo?d.expr.createPseudo(function(g){return function(h){return !!d.data(h,g)
}
}):function(h,g,j){return !!d.data(h,j[3])
},focusable:function(g){return b(g,!isNaN(d.attr(g,"tabindex")))
},tabbable:function(g){var h=d.attr(g,"tabindex"),j=isNaN(h);
return(j||h>=0)&&b(g,!j)
}}),d("<a>").outerWidth(1).jquery||d.each(["Width","Height"],function(j,h){function k(p,o,q,n){return d.each(m,function(){o-=parseFloat(d.css(p,"padding"+this))||0,q&&(o-=parseFloat(d.css(p,"border"+this+"Width"))||0),n&&(o-=parseFloat(d.css(p,"margin"+this))||0)
}),o
}var m="Width"===h?["Left","Right"]:["Top","Bottom"],g=h.toLowerCase(),l={innerWidth:d.fn.innerWidth,innerHeight:d.fn.innerHeight,outerWidth:d.fn.outerWidth,outerHeight:d.fn.outerHeight};
d.fn["inner"+h]=function(i){return void 0===i?l["inner"+h].call(this):this.each(function(){d(this).css(g,k(this,i)+"px")
})
},d.fn["outer"+h]=function(i,o){return"number"!=typeof i?l["outer"+h].call(this,i):this.each(function(){d(this).css(g,k(this,i,!0,o)+"px")
})
}
}),d.fn.addBack||(d.fn.addBack=function(g){return this.add(null==g?this.prevObject:this.prevObject.filter(g))
}),d("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(d.fn.removeData=function(g){return function(h){return arguments.length?g.call(this,d.camelCase(h)):g.call(this)
}
}(d.fn.removeData)),d.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),d.fn.extend({focus:function(g){return function(h,j){return"number"==typeof h?this.each(function(){var i=this;
setTimeout(function(){d(i).focus(),j&&j.call(i)
},h)
}):g.apply(this,arguments)
}
}(d.fn.focus),disableSelection:function(){var g="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.bind(g+".ui-disableSelection",function(h){h.preventDefault()
})
}
}(),enableSelection:function(){return this.unbind(".ui-disableSelection")
},zIndex:function(h){if(void 0!==h){return this.css("zIndex",h)
}if(this.length){for(var g,j,k=d(this[0]);
k.length&&k[0]!==document;
){if(g=k.css("position"),("absolute"===g||"relative"===g||"fixed"===g)&&(j=parseInt(k.css("zIndex"),10),!isNaN(j)&&0!==j)){return j
}k=k.parent()
}}return 0
}}),d.ui.plugin={add:function(j,h,k){var l,g=d.ui[j].prototype;
for(l in k){g.plugins[l]=g.plugins[l]||[],g.plugins[l].push([h,k[l]])
}},call:function(l,j,h,k){var m,g=l.plugins[j];
if(g&&(k||l.element[0].parentNode&&11!==l.element[0].parentNode.nodeType)){for(m=0;
g.length>m;
m++){l.options[g[m][0]]&&g[m][1].apply(l.element,h)
}}}};
var c=0,f=Array.prototype.slice;
d.cleanData=function(g){return function(j){var k,m,h;
for(h=0;
null!=(m=j[h]);
h++){try{k=d._data(m,"events"),k&&k.remove&&d(m).triggerHandler("remove")
}catch(l){}}g(j)
}
}(d.cleanData),d.widget=function(v,p,w){var k,u,j,g,q={},m=v.split(".")[0];
return v=v.split(".")[1],k=m+"-"+v,w||(w=p,p=d.Widget),d.expr[":"][k.toLowerCase()]=function(h){return !!d.data(h,k)
},d[m]=d[m]||{},u=d[m][v],j=d[m][v]=function(i,h){return this._createWidget?(arguments.length&&this._createWidget(i,h),void 0):new j(i,h)
},d.extend(j,u,{version:w.version,_proto:d.extend({},w),_childConstructors:[]}),g=new p,g.options=d.widget.extend({},g.options),d.each(w,function(h,i){return d.isFunction(i)?(q[h]=function(){var l=function(){return p.prototype[h].apply(this,arguments)
},o=function(n){return p.prototype[h].apply(this,n)
};
return function(){var s,r=this._super,n=this._superApply;
return this._super=l,this._superApply=o,s=i.apply(this,arguments),this._super=r,this._superApply=n,s
}
}(),void 0):(q[h]=i,void 0)
}),j.prototype=d.widget.extend(g,{widgetEventPrefix:u?g.widgetEventPrefix||v:v},q,{constructor:j,namespace:m,widgetName:v,widgetFullName:k}),u?(d.each(u._childConstructors,function(l,h){var n=h.prototype;
d.widget(n.namespace+"."+n.widgetName,j,h._proto)
}),delete u._childConstructors):p._childConstructors.push(j),d.widget.bridge(v,j),j
},d.widget.extend=function(j){for(var h,k,g=f.call(arguments,1),m=0,l=g.length;
l>m;
m++){for(h in g[m]){k=g[m][h],g[m].hasOwnProperty(h)&&void 0!==k&&(j[h]=d.isPlainObject(k)?d.isPlainObject(j[h])?d.widget.extend({},j[h],k):d.widget.extend({},k):k)
}}return j
},d.widget.bridge=function(h,g){var j=g.prototype.widgetFullName||h;
d.fn[h]=function(i){var m="string"==typeof i,l=f.call(arguments,1),k=this;
return m?this.each(function(){var o,p=d.data(this,j);
return"instance"===i?(k=p,!1):p?d.isFunction(p[i])&&"_"!==i.charAt(0)?(o=p[i].apply(p,l),o!==p&&void 0!==o?(k=o&&o.jquery?k.pushStack(o.get()):o,!1):void 0):d.error("no such method '"+i+"' for "+h+" widget instance"):d.error("cannot call methods on "+h+" prior to initialization; attempted to call method '"+i+"'")
}):(l.length&&(i=d.widget.extend.apply(null,[i].concat(l))),this.each(function(){var n=d.data(this,j);
n?(n.option(i||{}),n._init&&n._init()):d.data(this,j,new g(i,this))
})),k
}
},d.Widget=function(){},d.Widget._childConstructors=[],d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(h,g){g=d(g||this.defaultElement||this)[0],this.element=d(g),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=d(),this.hoverable=d(),this.focusable=d(),g!==this&&(d.data(g,this.widgetFullName,this),this._on(!0,this.element,{remove:function(i){i.target===g&&this.destroy()
}}),this.document=d(g.style?g.ownerDocument:g.document||g),this.window=d(this.document[0].defaultView||this.document[0].parentWindow)),this.options=d.widget.extend({},this.options,this._getCreateOptions(),h),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:d.noop,_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:d.noop,widget:function(){return this.element
},option:function(j,h){var k,m,g,l=j;
if(0===arguments.length){return d.widget.extend({},this.options)
}if("string"==typeof j){if(l={},k=j.split("."),j=k.shift(),k.length){for(m=l[j]=d.widget.extend({},this.options[j]),g=0;
k.length-1>g;
g++){m[k[g]]=m[k[g]]||{},m=m[k[g]]
}if(j=k.pop(),1===arguments.length){return void 0===m[j]?null:m[j]
}m[j]=h
}else{if(1===arguments.length){return void 0===this.options[j]?null:this.options[j]
}l[j]=h
}}return this._setOptions(l),this
},_setOptions:function(h){var g;
for(g in h){this._setOption(g,h[g])
}return this
},_setOption:function(h,g){return this.options[h]=g,"disabled"===h&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!g),g&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this
},enable:function(){return this._setOptions({disabled:!1})
},disable:function(){return this._setOptions({disabled:!0})
},_on:function(j,h,k){var l,g=this;
"boolean"!=typeof j&&(k=h,h=j,j=!1),k?(h=l=d(h),this.bindings=this.bindings.add(h)):(k=h,h=this.element,l=this.widget()),d.each(k,function(p,t){function q(){return j||g.options.disabled!==!0&&!d(this).hasClass("ui-state-disabled")?("string"==typeof t?g[t]:t).apply(g,arguments):void 0
}"string"!=typeof t&&(q.guid=t.guid=t.guid||q.guid||d.guid++);
var n=p.match(/^([\w:-]*)\s*(.*)$/),i=n[1]+g.eventNamespace,m=n[2];
m?l.delegate(m,i,q):h.bind(i,q)
})
},_off:function(h,g){g=(g||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,h.unbind(g).undelegate(g),this.bindings=d(this.bindings.not(h).get()),this.focusable=d(this.focusable.not(h).get()),this.hoverable=d(this.hoverable.not(h).get())
},_delay:function(k,h){function g(){return("string"==typeof k?j[k]:k).apply(j,arguments)
}var j=this;
return setTimeout(g,h||0)
},_hoverable:function(g){this.hoverable=this.hoverable.add(g),this._on(g,{mouseenter:function(h){d(h.currentTarget).addClass("ui-state-hover")
},mouseleave:function(h){d(h.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(g){this.focusable=this.focusable.add(g),this._on(g,{focusin:function(h){d(h.currentTarget).addClass("ui-state-focus")
},focusout:function(h){d(h.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(j,h,k){var m,g,l=this.options[j];
if(k=k||{},h=d.Event(h),h.type=(j===this.widgetEventPrefix?j:this.widgetEventPrefix+j).toLowerCase(),h.target=this.element[0],g=h.originalEvent){for(m in g){m in h||(h[m]=g[m])
}}return this.element.trigger(h,k),!(d.isFunction(l)&&l.apply(this.element[0],[h].concat(k))===!1||h.isDefaultPrevented())
}},d.each({show:"fadeIn",hide:"fadeOut"},function(h,g){d.Widget.prototype["_"+h]=function(j,m,i){"string"==typeof m&&(m={effect:m});
var l,k=m?m===!0||"number"==typeof m?g:m.effect||g:h;
m=m||{},"number"==typeof m&&(m={duration:m}),l=!d.isEmptyObject(m),m.complete=i,m.delay&&j.delay(m.delay),l&&d.effects&&d.effects.effect[k]?j[h](m):k!==h&&j[k]?j[k](m.duration,m.easing,i):j.queue(function(n){d(this)[h](),i&&i.call(j[0]),n()
})
}
}),d.widget,function(){function C(n,l,h){return[parseFloat(n[0])*(j.test(n[0])?l/100:1),parseFloat(n[1])*(j.test(n[1])?h/100:1)]
}function v(l,h){return parseInt(d.css(l,h),10)||0
}function D(l){var h=l[0];
return 9===h.nodeType?{width:l.width(),height:l.height(),offset:{top:0,left:0}}:d.isWindow(h)?{width:l.width(),height:l.height(),offset:{top:l.scrollTop(),left:l.scrollLeft()}}:h.preventDefault?{width:0,height:0,offset:{top:h.pageY,left:h.pageX}}:{width:l.outerWidth(),height:l.outerHeight(),offset:l.offset()}
}d.ui=d.ui||{};
var m,A,k=Math.max,g=Math.abs,w=Math.round,q=/left|center|right/,B=/top|center|bottom/,y=/[\+\-]\d+(\.[\d]+)?%?/,z=/^\w+/,j=/%$/,x=d.fn.position;
d.position={scrollbarWidth:function(){if(void 0!==m){return m
}var n,l,o=d("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),h=o.children()[0];
return d("body").append(o),n=h.offsetWidth,o.css("overflow","scroll"),l=h.offsetWidth,n===l&&(l=o[0].clientWidth),o.remove(),m=n-l
},getScrollInfo:function(o){var l=o.isWindow||o.isDocument?"":o.element.css("overflow-x"),p=o.isWindow||o.isDocument?"":o.element.css("overflow-y"),r="scroll"===l||"auto"===l&&o.width<o.element[0].scrollWidth,h="scroll"===p||"auto"===p&&o.height<o.element[0].scrollHeight;
return{width:h?d.position.scrollbarWidth():0,height:r?d.position.scrollbarWidth():0}
},getWithinInfo:function(l){var h=d(l||window),o=d.isWindow(h[0]),p=!!h[0]&&9===h[0].nodeType;
return{element:h,isWindow:o,isDocument:p,offset:h.offset()||{left:0,top:0},scrollLeft:h.scrollLeft(),scrollTop:h.scrollTop(),width:o||p?h.width():h.outerWidth(),height:o||p?h.height():h.outerHeight()}
}},d.fn.position=function(i){if(!i||!i.of){return x.apply(this,arguments)
}i=d.extend({},i);
var h,l,s,H,t,u,G=d(i.of),E=d.position.getWithinInfo(i.within),F=d.position.getScrollInfo(E),r=(i.collision||"flip").split(" "),o={};
return u=D(G),G[0].preventDefault&&(i.at="left top"),l=u.width,s=u.height,H=u.offset,t=d.extend({},H),d.each(["my","at"],function(){var I,p,n=(i[this]||"").split(" ");
1===n.length&&(n=q.test(n[0])?n.concat(["center"]):B.test(n[0])?["center"].concat(n):["center","center"]),n[0]=q.test(n[0])?n[0]:"center",n[1]=B.test(n[1])?n[1]:"center",I=y.exec(n[0]),p=y.exec(n[1]),o[this]=[I?I[0]:0,p?p[0]:0],i[this]=[z.exec(n[0])[0],z.exec(n[1])[0]]
}),1===r.length&&(r[1]=r[0]),"right"===i.at[0]?t.left+=l:"center"===i.at[0]&&(t.left+=l/2),"bottom"===i.at[1]?t.top+=s:"center"===i.at[1]&&(t.top+=s/2),h=C(o.at,l,s),t.left+=h[0],t.top+=h[1],this.each(function(){var T,p,R=d(this),O=R.outerWidth(),P=R.outerHeight(),J=v(this,"marginLeft"),Q=v(this,"marginTop"),n=O+J+v(this,"marginRight")+F.width,I=P+Q+v(this,"marginBottom")+F.height,K=d.extend({},t),L=C(o.my,R.outerWidth(),R.outerHeight());
"right"===i.my[0]?K.left-=O:"center"===i.my[0]&&(K.left-=O/2),"bottom"===i.my[1]?K.top-=P:"center"===i.my[1]&&(K.top-=P/2),K.left+=L[0],K.top+=L[1],A||(K.left=w(K.left),K.top=w(K.top)),T={marginLeft:J,marginTop:Q},d.each(["left","top"],function(N,M){d.ui.position[r[N]]&&d.ui.position[r[N]][M](K,{targetWidth:l,targetHeight:s,elemWidth:O,elemHeight:P,collisionPosition:T,collisionWidth:n,collisionHeight:I,offset:[h[0]+L[0],h[1]+L[1]],my:i.my,at:i.at,within:E,elem:R})
}),i.using&&(p=function(W){var S=H.left-K.left,N=S+l-O,V=H.top-K.top,M=V+s-P,U={target:{element:G,left:H.left,top:H.top,width:l,height:s},element:{element:R,left:K.left,top:K.top,width:O,height:P},horizontal:0>N?"left":S>0?"right":"center",vertical:0>M?"top":V>0?"bottom":"middle"};
O>l&&l>g(S+N)&&(U.horizontal="center"),P>s&&s>g(V+M)&&(U.vertical="middle"),U.important=k(g(S),g(N))>k(g(V),g(M))?"horizontal":"vertical",i.using.call(this,W,U)
}),R.offset(d.extend(K,{using:p}))
})
},d.ui.position={fit:{left:function(G,I){var E,J=I.within,p=J.isWindow?J.scrollLeft:J.offset.left,H=J.width,o=G.left-I.collisionPosition.marginLeft,F=p-o,u=o+I.collisionWidth-H-p;
I.collisionWidth>H?F>0&&0>=u?(E=G.left+F+I.collisionWidth-H-p,G.left+=F-E):G.left=u>0&&0>=F?p:F>u?p+H-I.collisionWidth:p:F>0?G.left+=F:u>0?G.left-=u:G.left=k(G.left-o,G.left)
},top:function(G,I){var E,J=I.within,p=J.isWindow?J.scrollTop:J.offset.top,H=I.within.height,o=G.top-I.collisionPosition.marginTop,F=p-o,u=o+I.collisionHeight-H-p;
I.collisionHeight>H?F>0&&0>=u?(E=G.top+F+I.collisionHeight-H-p,G.top+=F-E):G.top=u>0&&0>=F?p:F>u?p+H-I.collisionHeight:p:F>0?G.top+=F:u>0?G.top-=u:G.top=k(G.top-o,G.top)
}},flip:{left:function(K,P){var H,Q,F=P.within,N=F.offset.left+F.scrollLeft,E=F.width,I=F.isWindow?F.scrollLeft:F.offset.left,G=K.left-P.collisionPosition.marginLeft,O=G-I,L=G+P.collisionWidth-E-I,M="left"===P.my[0]?-P.elemWidth:"right"===P.my[0]?P.elemWidth:0,r="left"===P.at[0]?P.targetWidth:"right"===P.at[0]?-P.targetWidth:0,J=-2*P.offset[0];
0>O?(H=K.left+M+r+J+P.collisionWidth-E-N,(0>H||g(O)>H)&&(K.left+=M+r+J)):L>0&&(Q=K.left-P.collisionPosition.marginLeft+M+r+J-I,(Q>0||L>g(Q))&&(K.left+=M+r+J))
},top:function(L,Q){var I,R,F=Q.within,O=F.offset.top+F.scrollTop,E=F.height,J=F.isWindow?F.scrollTop:F.offset.top,H=L.top-Q.collisionPosition.marginTop,P=H-J,M=H+Q.collisionHeight-E-J,N="top"===Q.my[1],r=N?-Q.elemHeight:"bottom"===Q.my[1]?Q.elemHeight:0,K="top"===Q.at[1]?Q.targetHeight:"bottom"===Q.at[1]?-Q.targetHeight:0,G=-2*Q.offset[1];
0>P?(R=L.top+r+K+G+Q.collisionHeight-E-O,(0>R||g(P)>R)&&(L.top+=r+K+G)):M>0&&(I=L.top-Q.collisionPosition.marginTop+r+K+G-J,(I>0||M>g(I))&&(L.top+=r+K+G))
}},flipfit:{left:function(){d.ui.position.flip.left.apply(this,arguments),d.ui.position.fit.left.apply(this,arguments)
},top:function(){d.ui.position.flip.top.apply(this,arguments),d.ui.position.fit.top.apply(this,arguments)
}}},function(){var p,l,E,H,G,F=document.getElementsByTagName("body")[0],u=document.createElement("div");
p=document.createElement(F?"div":"body"),E={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},F&&d.extend(E,{position:"absolute",left:"-1000px",top:"-1000px"});
for(G in E){p.style[G]=E[G]
}p.appendChild(u),l=F||document.documentElement,l.insertBefore(p,l.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",H=d(u).offset().left,A=H>10&&11>H,p.innerHTML="",l.removeChild(p)
}()
}(),d.ui.position,d.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(g){g.preventDefault()
},"click .ui-menu-item":function(h){var g=d(h.target);
!this.mouseHandled&&g.not(".ui-state-disabled").length&&(this.select(h),h.isPropagationStopped()||(this.mouseHandled=!0),g.has(".ui-menu").length?this.expand(h):!this.element.is(":focus")&&d(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(h){if(!this.previousFilter){var g=d(h.currentTarget);
g.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(h,g)
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(j,h){var g=this.active||this.element.find(this.options.items).eq(0);
h||this.focus(j,g)
},blur:function(g){this._delay(function(){d.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(g)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(g){this._closeOnDocumentClick(g)&&this.collapseAll(g),this.mouseHandled=!1
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var g=d(this);
g.data("ui-menu-submenu-carat")&&g.remove()
}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(j){var h,k,m,g,l=!0;
switch(j.keyCode){case d.ui.keyCode.PAGE_UP:this.previousPage(j);
break;
case d.ui.keyCode.PAGE_DOWN:this.nextPage(j);
break;
case d.ui.keyCode.HOME:this._move("first","first",j);
break;
case d.ui.keyCode.END:this._move("last","last",j);
break;
case d.ui.keyCode.UP:this.previous(j);
break;
case d.ui.keyCode.DOWN:this.next(j);
break;
case d.ui.keyCode.LEFT:this.collapse(j);
break;
case d.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(j);
break;
case d.ui.keyCode.ENTER:case d.ui.keyCode.SPACE:this._activate(j);
break;
case d.ui.keyCode.ESCAPE:this.collapse(j);
break;
default:l=!1,k=this.previousFilter||"",m=String.fromCharCode(j.keyCode),g=!1,clearTimeout(this.filterTimer),m===k?g=!0:m=k+m,h=this._filterMenuItems(m),h=g&&-1!==h.index(this.active.next())?this.active.nextAll(".ui-menu-item"):h,h.length||(m=String.fromCharCode(j.keyCode),h=this._filterMenuItems(m)),h.length?(this.focus(j,h),this.previousFilter=m,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter
}l&&j.preventDefault()
},_activate:function(g){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(g):this.select(g))
},refresh:function(){var j,h,k=this,l=this.options.icons.submenu,g=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),g.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var n=d(this),m=n.parent(),o=d("<span>").addClass("ui-menu-icon ui-icon "+l).data("ui-menu-submenu-carat",!0);
m.attr("aria-haspopup","true").prepend(o),n.attr("aria-labelledby",m.attr("id"))
}),j=g.add(this.element),h=j.find(this.options.items),h.not(".ui-menu-item").each(function(){var i=d(this);
k._isDivider(i)&&i.addClass("ui-widget-content ui-menu-divider")
}),h.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),h.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!d.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(h,g){"icons"===h&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(g.submenu),"disabled"===h&&this.element.toggleClass("ui-state-disabled",!!g).attr("aria-disabled",g),this._super(h,g)
},focus:function(k,h){var g,j;
this.blur(k,k&&"focus"===k.type),this._scrollIntoView(h),this.active=h.first(),j=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",j.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),k&&"keydown"===k.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),g=h.children(".ui-menu"),g.length&&k&&/^mouse/.test(k.type)&&this._startOpening(g),this.activeMenu=h.parent(),this._trigger("focus",k,{item:h})
},_scrollIntoView:function(j){var h,k,p,g,m,l;
this._hasScroll()&&(h=parseFloat(d.css(this.activeMenu[0],"borderTopWidth"))||0,k=parseFloat(d.css(this.activeMenu[0],"paddingTop"))||0,p=j.offset().top-this.activeMenu.offset().top-h-k,g=this.activeMenu.scrollTop(),m=this.activeMenu.height(),l=j.outerHeight(),0>p?this.activeMenu.scrollTop(g+p):p+l>m&&this.activeMenu.scrollTop(g+p-m+l))
},blur:function(h,g){g||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",h,{item:this.active}))
},_startOpening:function(g){clearTimeout(this.timer),"true"===g.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(g)
},this.delay))
},_open:function(h){var g=d.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(h.parents(".ui-menu")).hide().attr("aria-hidden","true"),h.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(g)
},collapseAll:function(h,g){clearTimeout(this.timer),this.timer=this._delay(function(){var i=g?this.element:d(h&&h.target).closest(this.element.find(".ui-menu"));
i.length||(i=this.element),this._close(i),this.blur(h),this.activeMenu=i
},this.delay)
},_close:function(g){g||(g=this.active?this.active.parent():this.element),g.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
},_closeOnDocumentClick:function(g){return !d(g.target).closest(".ui-menu").length
},_isDivider:function(g){return !/[^\-\u2014\u2013\s]/.test(g.text())
},collapse:function(h){var g=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
g&&g.length&&(this._close(),this.focus(h,g))
},expand:function(h){var g=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
g&&g.length&&(this._open(g.parent()),this._delay(function(){this.focus(h,g)
}))
},next:function(g){this._move("next","first",g)
},previous:function(g){this._move("prev","last",g)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(k,h,g){var j;
this.active&&(j="first"===k||"last"===k?this.active["first"===k?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[k+"All"](".ui-menu-item").eq(0)),j&&j.length&&this.active||(j=this.activeMenu.find(this.options.items)[h]()),this.focus(g,j)
},nextPage:function(h){var g,j,k;
return this.active?(this.isLastItem()||(this._hasScroll()?(j=this.active.offset().top,k=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return g=d(this),0>g.offset().top-j-k
}),this.focus(h,g)):this.focus(h,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(h),void 0)
},previousPage:function(h){var g,j,k;
return this.active?(this.isFirstItem()||(this._hasScroll()?(j=this.active.offset().top,k=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return g=d(this),g.offset().top-j+k>0
}),this.focus(h,g)):this.focus(h,this.activeMenu.find(this.options.items).first())),void 0):(this.next(h),void 0)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(h){this.active=this.active||d(h.target).closest(".ui-menu-item");
var g={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(h,!0),this._trigger("select",h,g)
},_filterMenuItems:function(h){var g=h.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),j=RegExp("^"+g,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return j.test(d.trim(d(this).text()))
})
}}),d.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var j,h,k,m=this.element[0].nodeName.toLowerCase(),g="textarea"===m,l="input"===m;
this.isMultiLine=g?!0:l?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[g||l?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(o){if(this.element.prop("readOnly")){return j=!0,k=!0,h=!0,void 0
}j=!1,k=!1,h=!1;
var i=d.ui.keyCode;
switch(o.keyCode){case i.PAGE_UP:j=!0,this._move("previousPage",o);
break;
case i.PAGE_DOWN:j=!0,this._move("nextPage",o);
break;
case i.UP:j=!0,this._keyEvent("previous",o);
break;
case i.DOWN:j=!0,this._keyEvent("next",o);
break;
case i.ENTER:this.menu.active&&(j=!0,o.preventDefault(),this.menu.select(o));
break;
case i.TAB:this.menu.active&&this.menu.select(o);
break;
case i.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(o),o.preventDefault());
break;
default:h=!0,this._searchTimeout(o)
}},keypress:function(i){if(j){return j=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&i.preventDefault(),void 0
}if(!h){var o=d.ui.keyCode;
switch(i.keyCode){case o.PAGE_UP:this._move("previousPage",i);
break;
case o.PAGE_DOWN:this._move("nextPage",i);
break;
case o.UP:this._keyEvent("previous",i);
break;
case o.DOWN:this._keyEvent("next",i)
}}},input:function(i){return k?(k=!1,i.preventDefault(),void 0):(this._searchTimeout(i),void 0)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(i){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(i),this._change(i),void 0)
}}),this._initSource(),this.menu=d("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(o){o.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur
});
var n=this.menu.element[0];
d(o.target).closest(".ui-menu-item").length||this._delay(function(){var i=this;
this.document.one("mousedown",function(p){p.target===i.element[0]||p.target===n||d.contains(n,p.target)||i.close()
})
})
},menufocus:function(p,o){var q,r;
return this.isNewMenu&&(this.isNewMenu=!1,p.originalEvent&&/^mouse/.test(p.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){d(p.target).trigger(p.originalEvent)
}),void 0):(r=o.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",p,{item:r})&&p.originalEvent&&/^key/.test(p.originalEvent.type)&&this._value(r.value),q=o.item.attr("aria-label")||r.value,q&&d.trim(q).length&&(this.liveRegion.children().hide(),d("<div>").text(q).appendTo(this.liveRegion)),void 0)
},menuselect:function(q,o){var n=o.item.data("ui-autocomplete-item"),p=this.previous;
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=p,this._delay(function(){this.previous=p,this.selectedItem=n
})),!1!==this._trigger("select",q,{item:n})&&this._value(n.value),this.term=this._value(),this.close(q),this.selectedItem=n
}}),this.liveRegion=d("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(h,g){this._super(h,g),"source"===h&&this._initSource(),"appendTo"===h&&this.menu.element.appendTo(this._appendTo()),"disabled"===h&&g&&this.xhr&&this.xhr.abort()
},_appendTo:function(){var g=this.options.appendTo;
return g&&(g=g.jquery||g.nodeType?d(g):this.document.find(g).eq(0)),g&&g[0]||(g=this.element.closest(".ui-front")),g.length||(g=this.document[0].body),g
},_initSource:function(){var h,g,j=this;
d.isArray(this.options.source)?(h=this.options.source,this.source=function(k,l){l(d.ui.autocomplete.filter(h,k.term))
}):"string"==typeof this.options.source?(g=this.options.source,this.source=function(i,k){j.xhr&&j.xhr.abort(),j.xhr=d.ajax({url:g,data:i,dataType:"json",success:function(l){k(l)
},error:function(){k([])
}})
}):this.source=this.options.source
},_searchTimeout:function(g){clearTimeout(this.searching),this.searching=this._delay(function(){var j=this.term===this._value(),h=this.menu.element.is(":visible"),k=g.altKey||g.ctrlKey||g.metaKey||g.shiftKey;
(!j||j&&!h&&!k)&&(this.selectedItem=null,this.search(null,g))
},this.options.delay)
},search:function(h,g){return h=null!=h?h:this._value(),this.term=this._value(),h.length<this.options.minLength?this.close(g):this._trigger("search",g)!==!1?this._search(h):void 0
},_search:function(g){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:g},this._response())
},_response:function(){var g=++this.requestIndex;
return d.proxy(function(h){g===this.requestIndex&&this.__response(h),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")
},this)
},__response:function(g){g&&(g=this._normalize(g)),this._trigger("response",null,{content:g}),!this.options.disabled&&g&&g.length&&!this.cancelSearch?(this._suggest(g),this._trigger("open")):this._close()
},close:function(g){this.cancelSearch=!0,this._close(g)
},_close:function(g){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",g))
},_change:function(g){this.previous!==this._value()&&this._trigger("change",g,{item:this.selectedItem})
},_normalize:function(g){return g.length&&g[0].label&&g[0].value?g:d.map(g,function(h){return"string"==typeof h?{label:h,value:h}:d.extend({},h,{label:h.label||h.value,value:h.value||h.label})
})
},_suggest:function(h){var g=this.menu.element.empty();
this._renderMenu(g,h),this.isNewMenu=!0,this.menu.refresh(),g.show(),this._resizeMenu(),g.position(d.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var g=this.menu.element;
g.outerWidth(Math.max(g.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(h,g){var j=this;
d.each(g,function(l,k){j._renderItemData(h,k)
})
},_renderItemData:function(h,g){return this._renderItem(h,g).data("ui-autocomplete-item",g)
},_renderItem:function(h,g){return d("<li>").text(g.label).appendTo(h)
},_move:function(h,g){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(h)||this.menu.isLastItem()&&/^next/.test(h)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[h](g),void 0):(this.search(null,g),void 0)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(h,g){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(h,g),g.preventDefault())
}}),d.extend(d.ui.autocomplete,{escapeRegex:function(g){return g.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(h,g){var j=RegExp(d.ui.autocomplete.escapeRegex(g),"i");
return d.grep(h,function(i){return j.test(i.label||i.value||i)
})
}}),d.widget("ui.autocomplete",d.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(g){return g+(g>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(h){var g;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(g=h&&h.length?this.options.messages.results(h.length):this.options.messages.noResults,this.liveRegion.children().hide(),d("<div>").text(g).appendTo(this.liveRegion))
}}),d.ui.autocomplete
});
(function(ad,ag,ab){function V(h){var k=[];
X(k,ag.noop).chars(h);
return k.join("")
}function af(h){var k={};
h=h.split(",");
var n;
for(n=0;
n<h.length;
n++){k[h[n]]=!0
}return k
}function T(n,r){function s(w,u,y,x){u=ag.lowercase(u);
if(U[u]){for(;
q.last()&&S[q.last()];
){t("",q.last())
}}Q[u]&&q.last()==u&&t("",u);
(x=o[u]||!!x)||q.push(u);
var v={};
y.replace(R,function(A,z,B,D,C){v[z]=Z(B||D||C||"")
});
r.start&&r.start(u,v,x)
}function t(v,u){var x=0,w;
if(u=ag.lowercase(u)){for(x=q.length-1;
0<=x&&q[x]!=u;
x--){}}if(0<=x){for(w=q.length-1;
w>=x;
w--){r.end&&r.end(q[w])
}q.length=x
}}var h,p,q=[],k=n;
for(q.last=function(){return q[q.length-1]
};
n;
){p=!0;
if(q.last()&&l[q.last()]){n=n.replace(RegExp("(.*)<\\s*\\/\\s*"+q.last()+"[^>]*>","i"),function(u,v){v=v.replace(P,"$1").replace(m,"$1");
r.chars&&r.chars(Z(v));
return""
}),t("",q.last())
}else{if(0===n.indexOf("\x3c!--")){h=n.indexOf("--",4),0<=h&&n.lastIndexOf("--\x3e",h)===h&&(r.comment&&r.comment(n.substring(4,h)),n=n.substring(h+3),p=!1)
}else{if(j.test(n)){if(h=n.match(j)){n=n.replace(h[0],""),p=!1
}}else{if(i.test(n)){if(h=n.match(g)){n=n.substring(h[0].length),h[0].replace(g,t),p=!1
}}else{f.test(n)&&(h=n.match(ac))&&(n=n.substring(h[0].length),h[0].replace(ac,s),p=!1)
}}}p&&(h=n.indexOf("<"),p=0>h?n:n.substring(0,h),n=0>h?"":n.substring(h),r.chars&&r.chars(Z(p)))
}if(n==k){throw d("badparse",n)
}k=n
}t()
}function Z(h){if(!h){return""
}var k=c.exec(h);
h=k[1];
var n=k[3];
if(k=k[2]){ae.innerHTML=k.replace(/</g,"&lt;"),k="textContent" in ae?ae.textContent:ae.innerText
}return h+k+n
}function aa(h){return h.replace(/&/g,"&amp;").replace(b,function(k){return"&#"+k.charCodeAt(0)+";"
}).replace(/</g,"&lt;").replace(/>/g,"&gt;")
}function X(h,k){var n=!1,p=ag.bind(h,h.push);
return{start:function(q,r,s){q=ag.lowercase(q);
!n&&l[q]&&(n=q);
n||!0!==Y[q]||(p("<"),p(q),ag.forEach(r,function(w,v){var u=ag.lowercase(v),t="img"===q&&"src"===u||"background"===u;
!0!==a[u]||!0===W[u]&&!k(w,t)||(p(" "),p(v),p('="'),p(aa(w)),p('"'))
}),p(s?"/>":">"))
},end:function(q){q=ag.lowercase(q);
n||!0!==Y[q]||(p("</"),p(q),p(">"));
q==n&&(n=!1)
},chars:function(q){n||p(aa(q))
}}
}var d=ag.$$minErr("$sanitize"),ac=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,g=/^<\s*\/\s*([\w:-]+)[^>]*>/,R=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,f=/^</,i=/^<\s*\//,P=/\x3c!--(.*?)--\x3e/g,j=/<!DOCTYPE([^>]*?)>/i,m=/<!\[CDATA\[(.*?)]]\x3e/g,b=/([^\#-~| |!])/g,o=af("area,br,col,hr,img,wbr");
ad=af("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
ab=af("rp,rt");
var Q=ag.extend({},ab,ad),U=ag.extend({},ad,af("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),S=ag.extend({},ab,af("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),l=af("script,style"),Y=ag.extend({},o,U,S,Q),W=af("background,cite,href,longdesc,src,usemap"),a=ag.extend({},W,af("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),ae=document.createElement("pre"),c=/^(\s*)([\s\S]*?)(\s*)$/;
ag.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(h){return function(k){var n=[];
T(k,X(n,function(q,p){return !/^unsafe/.test(h(q,p))
}));
return n.join("")
}
}]
});
ag.module("ngSanitize").filter("linky",["$sanitize",function(h){var k=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,n=/^mailto:/;
return function(x,y){function v(p){p&&s.push(V(p))
}function w(p,z){s.push("<a ");
ag.isDefined(y)&&(s.push('target="'),s.push(y),s.push('" '));
s.push('href="');
s.push(p);
s.push('">');
v(z);
s.push("</a>")
}if(!x){return x
}for(var t,u=x,s=[],r,q;
t=u.match(k);
){r=t[0],t[2]==t[3]&&(r="mailto:"+r),q=t.index,v(u.substr(0,q)),w(r,t[0].replace(n,"")),u=u.substring(q+t[0].length)
}v(u);
return h(s.join(""))
}
}])
})(window,window.angular);
$(document).ready(function(){if(!$("section.search")||$("section.search").length<=0){return
}$("#gsa-search-field").autocomplete({minLength:3,source:function(k,i){$.getJSON("/bin/sandisk/gsasuggest",{q:k.term,serviceendpoint:$("#serviceendpoint").val(),site:$("#site").val(),client:$("#client").val(),access:"p",format:"rich"},function(l){i($.map(l,function(n,m){var o=[];
if(m=="results"){$.map(n,function(q,p){if(q.type=="suggest"){o.push(q.name)
}})
}return o
}))
})
}});
var b=window.location.href;
var g=[],f;
var a=b.slice(window.location.href.indexOf("?")+1).split("&");
for(var c=0;
c<a.length;
c++){f=a[c].split("=");
g.push(f[0]);
g[f[0]]=f[1]
}var j=0;
if(g.start!=undefined&&g.start!=null){j=parseInt(g.start)
}var d=$("#search_p");
if(d!=undefined&&d!=null){$(d).attr("href",b.replace("start="+g.start,"start="+(j-10)))
}var h=$("#search_n");
if(h!=undefined&&h!=null){if(j==0){$(h).attr("href",b+"&start="+(j+10))
}else{$(h).attr("href",b.replace("start="+g.start,"start="+(j+10)))
}}$("#collapseOne li").each(function(q,n){var p=b;
var m=$(this).parent().attr("id").replace("dnav-","");
var l=encodeURIComponent($(this).children().first().text().trim());
l=l.replace(".","%2E");
l="inmeta:"+encodeURIComponent(m+"="+l);
if(g.q&&g.q.indexOf(l)>0){var o=g.q.split("+"),i=g.dnavs.split("+");
var r=o.indexOf(l),k=i.indexOf(l);
if(r>0){$(n).toggleClass("list-group-item-info pointer");
$(n).find("span.glyphicon-remove").toggleClass("hide pointer").click(function(){var t="+"+l;
var s=(i.length==1)?l:"+"+l;
p=p.replace("q="+g.q,"q="+(g.q.replace(t,""))).replace("dnavs="+g.dnavs,"dnavs="+(g.dnavs.replace(s,"")));
p=p.match(/dnavs=$/)?p.replace("dnavs=",""):p;
window.open(p,"_self")
});
return
}}$(n).click(function(){p=b;
$(["dnavs","q"]).each(function(t,v){var s="";
var u=(p.indexOf("?"+v+"=")>-1)?"?"+v+"=":"&"+v+"=";
if(g[v]!=undefined&&g[v]!=null){s=g[v];
if(s.length>0){s+="+"
}p=p.replace(u+g[v],u+s+l)
}else{p=p+u+l
}});
window.open(p,"_self")
})
})
});
angular.module("searchApp",["ngSanitize"]).controller("searchCtrl",["$scope","$window","$http","$timeout","$document","$location",function(m,b,j,c,f,i){m.isFacetedSearch=false;
m.searchResp={};
m.suggestions={};
m.row=10;
m.start=0;
m.numFound=0;
var g=[];
var h,d;
var k={};
var l=[];
var n=true;
if(b.sessionStorage.q){m.q=b.sessionStorage.q;
b.sessionStorage.clear()
}if(i.host()=="webhelp.sandisk.com"||i.absUrl().replace(/^https?:\/\/[a-z\-\.:0-9]+/,"").indexOf("/content/aem-training/")==0){n=false
}var a=function(){m.suggestions=[];
m.searchResp={};
d="";
if(m.q){var o=m.searchBaseUrl+((m.searchBaseUrl&&m.searchBaseUrl.indexOf("?")>=0)?"&":"?")+"q="+encodeURIComponent(m.q);
k.wt="json";
for(key in k){if(Object.prototype.toString.call(k[key])==="[object Array]"){angular.forEach(k[key],function(q){o+="&"+key+"="+q
})
}else{o+="&"+key+"="+k[key]
}}if(n){o+="&group=true&group.field=subject&group.sort=score%20desc"
}m.loading=true;
j.get(o).success(function(r,p,t,q){m.searchResp=r;
m.numFound=n?r.grouped.subject.matches:r.response.numFound;
if(r.facet_counts&&r.facet_counts.facet_fields&&Object.keys(r.facet_counts.facet_fields)&&Object.keys(r.facet_counts.facet_fields).length>0){m.isFacetedSearch=true
}else{m.isFacetedSearch=false
}if(n){if(!l[m.start]){angular.forEach(r.grouped.subject.groups,function(v,u){l[m.start+u]=v.doclist.numFound
})
}var s=0;
angular.forEach(l,function(u){s+=u
});
if(s==m.numFound){m.numFound=l.length
}}m.numOfResult=m.numFound;
m.loading=false
}).error(function(r,p,s,q){console.log("error: "+r);
m.loading=false
})
}};
c(function(){if(m.q&&!m.isNotSearchResultPage){a()
}});
m.openURL=function(p,o){if(!o){b.open(p,"_blank")
}else{b.open(p,"_self")
}};
m.prevClick=function(){if(m.start>0){if(m.start-m.row>0){m.start-=m.row
}else{m.start=0
}k.row=m.row;
k.start=m.start;
a()
}};
m.nextClick=function(){if(m.start+m.row<m.numFound){m.start+=m.row;
k.row=m.row;
k.start=m.start;
a()
}};
m.getSearchBlockClass=function(){var o={none:"col-sm-12",seventy:"seventy col-sm-9"};
return(m.isFacetedSearch?o.seventy:o.none)
};
m.applyFacetFilter=function(o,p){if(!k.fq){k.fq=[]
}if(k.fq.indexOf(o+':"'+p+'"')<0){k.fq.push(o+':"'+p+'"');
k.start=0;
m.start=0;
a()
}};
m.removeFacetFilter=function(p,q){if(k.fq&&k.fq.length>0){var o=k.fq.indexOf(p+':"'+q+'"');
k.fq.splice(o,1);
k.start=0;
m.start=0;
a()
}};
m.isFilterApplied=function(o,s){var r=m.searchResp.responseHeader.params.fq;
var p=o+':"'+s+'"';
var q=false;
if(r&&(r==p||r.indexOf(p)>=0)){q=true
}return q
};
m.submitQuery=function(o){if(o){m.q=o.replace(/<\/?[^>]+(>|$)/g,"")
}if(m.q){if(m.isNotSearchResultPage){b.sessionStorage.q=m.q;
m.openURL(m.resultPagePath,true)
}else{k={};
m.start=0;
l=[];
a()
}}};
m.autoSuggest=function(){d=m.q;
if(d&&d.length>=3){if(h){c.cancel(h)
}var o=m.autoSuggestUrl+((m.autoSuggestUrl&&m.autoSuggestUrl.indexOf("?")>=0)?"&":"?")+"q="+encodeURIComponent(d)+"&omitHeader=true&wt=json&distrib=false";
h=c(function(){j.get(o).success(function(s,p,t,r){var q=s.suggest[Object.keys(s.suggest)[0]];
if(Object.keys(q)[0]==d){m.suggestions=q[Object.keys(q)[0]].suggestions
}}).error(function(r,p,s,q){console.log("error: "+r)
})
},500)
}else{m.suggestions=[]
}};
f.bind("click",function(p){var o=p.target;
if($(o).parents(".ui-autocomplete").length==0){$(".ui-autocomplete li").hide()
}});
m.showResultsOnSearchPage=function(o){var q=m.start+1;
var p=(m.start+m.row)<m.numFound?(m.start+m.row):m.numFound;
return(o.replace(/\$START_NUM\$/ig,q).replace(/\$END_NUM\$/ig,p))
}
}]);
$(document).ready(function(){$('[href="#warranty-section"]').click(function(c){c.preventDefault();
$('[href="#specifications-section"]').click();
$('[data-tab="warranty-tab"]').click()
});
$('[href="#specifications-section"]').click(function(){$('[data-tab="specifications-tab"]').click()
});
$(document).on("click",function(f){var d=f.target;
if($(d).context.className.indexOf("tab-link")>-1){var c=$(d).attr("data-tab");
$(d).siblings().removeClass("current");
$(d).parent().parent().children(".tab-content").removeClass("current");
$(d).addClass("current");
$("#"+c).addClass("current")
}});
b("0");
$("[id^=skuCapacityNumber]").click(function(c){c.preventDefault();
b(this.id.substring(17))
});
$("[id^=skuImageThumbNumber]").click(function(c){c.preventDefault();
a(this.id.substring(19))
});
function b(c){$("[id^=skuImageNumber]").hide();
$("[id^=skuDetailsNumber]").hide();
$("[id^=skuCapacityNumber]").removeClass("selected");
$("#skuImageNumber"+c+"0").show().addClass("selected");
$("#skuDetailsNumber"+c).show();
$("#skuCapacityNumber"+c).addClass("selected")
}function a(c){$("[id^=skuImageNumber]").hide();
$("#skuImageNumber"+c).show();
$("[id^=skuImageThumbNumber]").children("img").removeClass("selected");
$("#skuImageThumbNumber"+c).children("img").addClass("selected")
}});
$(document).ready(function(){if($.isFunction($.fn.scrollspy)){$("body").scrollspy({target:".bs-docs-sidebar",offset:100})
}var c=$(window).width();
var d=$(".stickyleftnav");
var a=$(".listoflinknav ");
if(d.length>0){secondaryNavTopPosition=d.offset().top;
$(window).on("scroll",function(){if($(window).scrollTop()>secondaryNavTopPosition){d.addClass("is-fixed")
}else{d.removeClass("is-fixed")
}})
}if(c<768){a.addClass("sd-responsive-filter")
}$("body").on("click",".sd-responsive-filter .sd-filter-title",function(){$(this).closest(".bs-docs-sidebar").toggleClass("open","")
});
$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var f=$(this.hash);
f=f.length?f:$("[name="+this.hash.slice(1)+"]");
if(f.length){$("html,body").animate({scrollTop:f.offset().top-40},800);
$(this).closest(".bs-docs-sidebar").removeClass("open");
return false
}}});
$(window).scroll(function(){var f=$(window).scrollTop();
if(f>=500){$(".back-top").addClass("showme")
}else{$(".back-top").removeClass("showme")
}});
if($(".subnav, .sticky-element").length){var b=$(".subnav, .sticky-element").offset();
$(window).bind("scroll",function(){if($(window).scrollTop()>=b.top){$(".subnav, .sticky-element").addClass("fixed")
}else{$(".subnav, .sticky-element").removeClass("fixed")
}})
}if($.isFunction($.fn.exists)){if($(".sticky-element").exists()){$(".sticky-element.full-width").width($(".sticky-element.full-width").width());
$(function(){$(".sticky-element a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var f=$(this.hash);
f=f.length?f:$("[name="+this.hash.slice(1)+"]");
if(f.length){$("html,body").animate({scrollTop:f.offset().top-100},200);
return false
}}})
})
}}});
function updateAnnouncementList(c,a){var b=c;
$.ajax({method:"GET",url:a,data:{year:b}}).done(function(d){$(".announcementlist").html(d);
$("#selectBox").val(b);
$(".selectpicker").selectpicker()
})
}$(document).ready(function(){$("#selectCountryEvent").change(function(){b()
});
$("#selectEventType").change(function(){b()
});
function b(){a("in eventChange...");
var c=$("#selectCountryEvent");
var d=$("#selectEventType");
a("selectCountryEvent:"+c.val());
a("selectEventType:"+d.val());
if((c.val()=="none")&&(d.val()=="none")){$(".indvl-event").show()
}else{if((c.val()=="none")&&(d.val()!="none")){$(".indvl-event").hide();
$("."+d.val()).parent().show()
}else{if((c.val()!="none")&&(d.val()=="none")){$(".indvl-event").hide();
$("."+c.val()).parent().show()
}else{if((c.val()!="none")&&(d.val()!="none")){$(".indvl-event").hide();
$("."+c.val()+"."+d.val()).parent().show()
}}}}}function a(c){}});
$(document).ready(function(){$("#selectAwardType").change(function(){$(".indvl-award").hide();
a("selectAwardType:"+$("#selectAwardType").val());
if($("#selectAwardType").val()!="none"){$("."+$("#selectAwardType").val()).show()
}else{$(".indvl-award").show()
}});
function a(b){}$("#selectAwardType").val("Awards").change()
});
try{CQ.form.SliderWidget=CQ.Ext.extend(CQ.form.CompositeField,{hiddenField:null,skuId:null,skuCapacity:null,skuReadSpeed:null,skuWriteSpeed:null,skuFormFactor:null,skuClass:null,skuImages:null,skuAdapter:null,skuGeneration:null,skuDetails:null,skuInterface:null,constructor:function(a){a=a||{};
var b={border:true,style:"padding:2px 0 0 2px;"};
a=CQ.Util.applyDefaults(a,b);
CQ.form.SliderWidget.superclass.constructor.call(this,a)
},initComponent:function(){CQ.form.SliderWidget.superclass.initComponent.call(this);
this.hiddenField=new CQ.Ext.form.Hidden({name:this.name});
this.add(this.hiddenField);
this.skuId=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Id",width:335,allowBlank:false,name:"skuId",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuId);
this.skuImages=new CQ.form.MultiField({fieldLabel:"Image",name:"skuImages",fieldConfig:{xtype:"pathfield",rootPath:"/content/dam",rootTitle:"Assets",editable:true,listeners:{change:{scope:this,fn:this.updateHidden},dialogclose:{scope:this,fn:this.updateHidden}}}});
this.add(this.skuImages);
this.skuCapacity=new CQ.Ext.form.NumberField({maxLength:100,fieldLabel:"Capacity",fieldDescription:"numeric value in GB",width:335,allowBlank:true,name:"skuCapacity",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuCapacity);
this.skuReadSpeed=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Read Speed",width:335,allowBlank:true,name:"skuReadSpeed",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuReadSpeed);
this.skuWriteSpeed=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Write Speed",width:335,allowBlank:true,name:"skuWriteSpeed",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuWriteSpeed);
this.skuFormFactor=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Form Factor",width:335,allowBlank:true,name:"skuFormFactor",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuFormFactor);
this.skuClass=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Class",width:335,allowBlank:true,name:"skuClass",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuClass);
this.skuAdapter=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Adapter",width:335,allowBlank:true,name:"skuAdapter",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuAdapter);
this.skuGeneration=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Generation",width:335,allowBlank:true,name:"skuGeneration",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuGeneration);
this.skuDetails=new CQ.Ext.form.TextArea({maxLength:1000,fieldLabel:"Details",width:335,height:150,allowBlank:true,name:"skuDetails",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuDetails);
this.skuInterface=new CQ.Ext.form.TextField({maxLength:100,fieldLabel:"Interface",width:335,allowBlank:true,name:"skuInterface",listeners:{change:{scope:this,fn:this.updateHidden}}});
this.add(this.skuInterface)
},setValue:function(b){var a=JSON.parse(b);
this.skuId.setValue(this.getScrubbedValue(a.skuId));
this.skuCapacity.setValue(this.checkCapacityValue(a.skuCapacity));
this.skuReadSpeed.setValue(this.getScrubbedValue(a.skuReadSpeed));
this.skuWriteSpeed.setValue(this.getScrubbedValue(a.skuWriteSpeed));
this.skuFormFactor.setValue(this.getScrubbedValue(a.skuFormFactor));
this.skuClass.setValue(this.getScrubbedValue(a.skuClass));
this.skuAdapter.setValue(this.getScrubbedValue(a.skuAdapter));
this.skuGeneration.setValue(this.getScrubbedValue(a.skuGeneration));
this.skuDetails.setValue(this.getScrubbedValue(a.skuDetails));
this.skuInterface.setValue(this.getScrubbedValue(a.skuInterface));
this.skuImages.setValue(this.getScrubbedArrayValue(a.skuImages));
this.hiddenField.setValue(b)
},getScrubbedValue:function(a){return $CQ.trim(a)
},checkCapacityValue:function(a){return(a<1)?"0":a
},getScrubbedArrayValue:function(c){var b=new Array();
for(var a=0;
a<c.length;
a++){b.push(this.getScrubbedValue(c[a]))
}return b
},getValue:function(){return this.getRawValue()
},getRawValue:function(){var a={skuId:this.getScrubbedValue(this.skuId.getValue()),skuCapacity:this.checkCapacityValue(this.skuCapacity.getValue()),skuReadSpeed:this.getScrubbedValue(this.skuReadSpeed.getValue()),skuWriteSpeed:this.getScrubbedValue(this.skuWriteSpeed.getValue()),skuFormFactor:this.getScrubbedValue(this.skuFormFactor.getValue()),skuClass:this.getScrubbedValue(this.skuClass.getValue()),skuAdapter:this.getScrubbedValue(this.skuAdapter.getValue()),skuGeneration:this.getScrubbedValue(this.skuGeneration.getValue()),skuDetails:this.getScrubbedValue(this.skuDetails.getValue()),skuInterface:this.getScrubbedValue(this.skuInterface.getValue()),skuImages:this.getScrubbedArrayValue(this.skuImages.getValue())};
return JSON.stringify(a)
},updateHidden:function(){this.hiddenField.setValue(this.getValue())
}});
CQ.Ext.reg("multiskufield",CQ.form.SliderWidget)
}catch(e){}$(document).ready(function(){$("#selectMediaResourceType").change(function(){a()
});
function a(){var c=$("#selectMediaResourceType");
var b=$(".taggedpagelist");
if(c.val()=="none"){$(".indvl-media-resource").show();
if(b){b.show()
}}else{$(".indvl-media-resource").hide();
if(b){b.hide();
c.parent().parent().show();
$("."+c.val()).parent().parent().show()
}$("."+c.val()).show()
}}});
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"undefined"!=typeof exports?module.exports=b(require("jquery")):b(jQuery)
}(function(d){var c=window.Slick||{};
c=function(){function f(m,l){var j,i,b,k=this;
if(k.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:d(m),appendDots:d(m),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(h,g){return'<button type="button" data-role="none">'+(g+1)+"</button>"
},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:0.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},k.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},d.extend(k,k.initials),k.activeBreakpoint=null,k.animType=null,k.animProp=null,k.breakpoints=[],k.breakpointSettings=[],k.cssTransitions=!1,k.hidden="hidden",k.paused=!1,k.positionProp=null,k.respondTo=null,k.rowCount=1,k.shouldClick=!0,k.$slider=d(m),k.$slidesCache=null,k.transformType=null,k.transitionType=null,k.visibilityChange="visibilitychange",k.windowWidth=0,k.windowTimer=null,j=d(m).data("slick")||{},k.options=d.extend({},k.defaults,j,l),k.currentSlide=k.options.initialSlide,k.originalSettings=k.options,i=k.options.responsive||null,i&&i.length>-1){k.respondTo=k.options.respondTo||"window";
for(b in i){i.hasOwnProperty(b)&&(k.breakpoints.push(i[b].breakpoint),k.breakpointSettings[i[b].breakpoint]=i[b].settings)
}k.breakpoints.sort(function(h,g){return k.options.mobileFirst===!0?h-g:g-h
})
}"undefined"!=typeof document.mozHidden?(k.hidden="mozHidden",k.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(k.hidden="webkitHidden",k.visibilityChange="webkitvisibilitychange"),k.autoPlay=d.proxy(k.autoPlay,k),k.autoPlayClear=d.proxy(k.autoPlayClear,k),k.changeSlide=d.proxy(k.changeSlide,k),k.clickHandler=d.proxy(k.clickHandler,k),k.selectHandler=d.proxy(k.selectHandler,k),k.setPosition=d.proxy(k.setPosition,k),k.swipeHandler=d.proxy(k.swipeHandler,k),k.dragHandler=d.proxy(k.dragHandler,k),k.keyHandler=d.proxy(k.keyHandler,k),k.autoPlayIterator=d.proxy(k.autoPlayIterator,k),k.instanceUid=a++,k.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,k.init(!0),k.checkResponsive(!0)
}var a=0;
return f
}(),c.prototype.addSlide=c.prototype.slickAdd=function(a,h,g){var f=this;
if("boolean"==typeof h){g=h,h=null
}else{if(0>h||h>=f.slideCount){return !1
}}f.unload(),"number"==typeof h?0===h&&0===f.$slides.length?d(a).appendTo(f.$slideTrack):g?d(a).insertBefore(f.$slides.eq(h)):d(a).insertAfter(f.$slides.eq(h)):g===!0?d(a).prependTo(f.$slideTrack):d(a).appendTo(f.$slideTrack),f.$slides=f.$slideTrack.children(this.options.slide),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.append(f.$slides),f.$slides.each(function(i,j){d(j).attr("data-slick-index",i)
}),f.$slidesCache=f.$slides,f.reinit()
},c.prototype.animateHeight=function(){var g=this;
if(1===g.options.slidesToShow&&g.options.adaptiveHeight===!0&&g.options.vertical===!1){var f=g.$slides.eq(g.currentSlide).outerHeight(!0);
g.$list.animate({height:f},g.options.speed)
}},c.prototype.animateSlide=function(a,h){var g={},f=this;
f.animateHeight(),f.options.rtl===!0&&f.options.vertical===!1&&(a=-a),f.transformsEnabled===!1?f.options.vertical===!1?f.$slideTrack.animate({left:a},f.options.speed,f.options.easing,h):f.$slideTrack.animate({top:a},f.options.speed,f.options.easing,h):f.cssTransitions===!1?(f.options.rtl===!0&&(f.currentLeft=-f.currentLeft),d({animStart:f.currentLeft}).animate({animStart:a},{duration:f.options.speed,easing:f.options.easing,step:function(b){b=Math.ceil(b),f.options.vertical===!1?(g[f.animType]="translate("+b+"px, 0px)",f.$slideTrack.css(g)):(g[f.animType]="translate(0px,"+b+"px)",f.$slideTrack.css(g))
},complete:function(){h&&h.call()
}})):(f.applyTransition(),a=Math.ceil(a),g[f.animType]=f.options.vertical===!1?"translate3d("+a+"px, 0px, 0px)":"translate3d(0px,"+a+"px, 0px)",f.$slideTrack.css(g),h&&setTimeout(function(){f.disableTransition(),h.call()
},f.options.speed))
},c.prototype.asNavFor=function(a){var g=this,f=g.options.asNavFor;
f&&null!==f&&(f=d(f).not(g.$slider)),null!==f&&"object"==typeof f&&f.each(function(){var b=d(this).slick("getSlick");
b.unslicked||b.slideHandler(a,!0)
})
},c.prototype.applyTransition=function(g){var f=this,h={};
h[f.transitionType]=f.options.fade===!1?f.transformType+" "+f.options.speed+"ms "+f.options.cssEase:"opacity "+f.options.speed+"ms "+f.options.cssEase,f.options.fade===!1?f.$slideTrack.css(h):f.$slides.eq(g).css(h)
},c.prototype.autoPlay=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer),b.slideCount>b.options.slidesToShow&&b.paused!==!0&&(b.autoPlayTimer=setInterval(b.autoPlayIterator,b.options.autoplaySpeed))
},c.prototype.autoPlayClear=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer)
},c.prototype.autoPlayIterator=function(){var b=this;
b.options.infinite===!1?1===b.direction?(b.currentSlide+1===b.slideCount-1&&(b.direction=0),b.slideHandler(b.currentSlide+b.options.slidesToScroll)):(0===b.currentSlide-1&&(b.direction=1),b.slideHandler(b.currentSlide-b.options.slidesToScroll)):b.slideHandler(b.currentSlide+b.options.slidesToScroll)
},c.prototype.buildArrows=function(){var a=this;
a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow=d(a.options.prevArrow),a.$nextArrow=d(a.options.nextArrow),a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.appendTo(a.options.appendArrows),a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.appendTo(a.options.appendArrows),a.options.infinite!==!0&&a.$prevArrow.addClass("slick-disabled"))
},c.prototype.buildDots=function(){var g,f,a=this;
if(a.options.dots===!0&&a.slideCount>a.options.slidesToShow){for(f='<ul class="'+a.options.dotsClass+'">',g=0;
g<=a.getDotCount();
g+=1){f+="<li>"+a.options.customPaging.call(this,a,g)+"</li>"
}f+="</ul>",a.$dots=d(f).appendTo(a.options.appendDots),a.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}},c.prototype.buildOut=function(){var a=this;
a.$slides=a.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),a.slideCount=a.$slides.length,a.$slides.each(function(f,g){d(g).attr("data-slick-index",f).data("originalStyling",d(g).attr("style")||"")
}),a.$slidesCache=a.$slides,a.$slider.addClass("slick-slider"),a.$slideTrack=0===a.slideCount?d('<div class="slick-track"/>').appendTo(a.$slider):a.$slides.wrapAll('<div class="slick-track"/>').parent(),a.$list=a.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),a.$slideTrack.css("opacity",0),(a.options.centerMode===!0||a.options.swipeToSlide===!0)&&(a.options.slidesToScroll=1),d("img[data-lazy]",a.$slider).not("[src]").addClass("slick-loading"),a.setupInfinite(),a.buildArrows(),a.buildDots(),a.updateDots(),a.options.accessibility===!0&&a.$list.prop("tabIndex",0),a.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),a.options.draggable===!0&&a.$list.addClass("draggable")
},c.prototype.buildRows=function(){var u,t,s,r,q,p,o,v=this;
if(r=document.createDocumentFragment(),p=v.$slider.children(),v.options.rows>1){for(o=v.options.slidesPerRow*v.options.rows,q=Math.ceil(p.length/o),u=0;
q>u;
u++){var n=document.createElement("div");
for(t=0;
t<v.options.rows;
t++){var m=document.createElement("div");
for(s=0;
s<v.options.slidesPerRow;
s++){var l=u*o+(t*v.options.slidesPerRow+s);
p.get(l)&&m.appendChild(p.get(l))
}n.appendChild(m)
}r.appendChild(n)
}v.$slider.html(r),v.$slider.children().children().children().css({width:100/v.options.slidesPerRow+"%",display:"inline-block"})
}},c.prototype.checkResponsive=function(a){var o,n,m,p=this,l=!1,k=p.$slider.width(),j=window.innerWidth||d(window).width();
if("window"===p.respondTo?m=j:"slider"===p.respondTo?m=k:"min"===p.respondTo&&(m=Math.min(j,k)),p.originalSettings.responsive&&p.originalSettings.responsive.length>-1&&null!==p.originalSettings.responsive){n=null;
for(o in p.breakpoints){p.breakpoints.hasOwnProperty(o)&&(p.originalSettings.mobileFirst===!1?m<p.breakpoints[o]&&(n=p.breakpoints[o]):m>p.breakpoints[o]&&(n=p.breakpoints[o]))
}null!==n?null!==p.activeBreakpoint?n!==p.activeBreakpoint&&(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),a===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(a)),l=n):(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),a===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(a)),l=n):null!==p.activeBreakpoint&&(p.activeBreakpoint=null,p.options=p.originalSettings,a===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(a),l=n),a||l===!1||p.$slider.trigger("breakpoint",[p,l])
}},c.prototype.changeSlide=function(a,p){var m,l,k,o=this,n=d(a.target);
switch(n.is("a")&&a.preventDefault(),n.is("li")||(n=n.closest("li")),k=0!==o.slideCount%o.options.slidesToScroll,m=k?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,a.data.message){case"previous":l=0===m?o.options.slidesToScroll:o.options.slidesToShow-m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-l,!1,p);
break;
case"next":l=0===m?o.options.slidesToScroll:m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+l,!1,p);
break;
case"index":var j=0===a.data.index?0:a.data.index||n.index()*o.options.slidesToScroll;
o.slideHandler(o.checkNavigable(j),!1,p),n.children().trigger("focus");
break;
default:return
}},c.prototype.checkNavigable=function(g){var j,i,f=this;
if(j=f.getNavigableIndexes(),i=0,g>j[j.length-1]){g=j[j.length-1]
}else{for(var h in j){if(g<j[h]){g=i;
break
}i=j[h]
}}return g
},c.prototype.cleanUpEvents=function(){var a=this;
a.options.dots&&null!==a.$dots&&(d("li",a.$dots).off("click.slick",a.changeSlide),a.options.pauseOnDotsHover===!0&&a.options.autoplay===!0&&d("li",a.$dots).off("mouseenter.slick",d.proxy(a.setPaused,a,!0)).off("mouseleave.slick",d.proxy(a.setPaused,a,!1))),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow&&a.$prevArrow.off("click.slick",a.changeSlide),a.$nextArrow&&a.$nextArrow.off("click.slick",a.changeSlide)),a.$list.off("touchstart.slick mousedown.slick",a.swipeHandler),a.$list.off("touchmove.slick mousemove.slick",a.swipeHandler),a.$list.off("touchend.slick mouseup.slick",a.swipeHandler),a.$list.off("touchcancel.slick mouseleave.slick",a.swipeHandler),a.$list.off("click.slick",a.clickHandler),d(document).off(a.visibilityChange,a.visibility),a.$list.off("mouseenter.slick",d.proxy(a.setPaused,a,!0)),a.$list.off("mouseleave.slick",d.proxy(a.setPaused,a,!1)),a.options.accessibility===!0&&a.$list.off("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().off("click.slick",a.selectHandler),d(window).off("orientationchange.slick.slick-"+a.instanceUid,a.orientationChange),d(window).off("resize.slick.slick-"+a.instanceUid,a.resize),d("[draggable!=true]",a.$slideTrack).off("dragstart",a.preventDefault),d(window).off("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).off("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.cleanUpRows=function(){var f,g=this;
g.options.rows>1&&(f=g.$slides.children().children(),f.removeAttr("style"),g.$slider.html(f))
},c.prototype.clickHandler=function(g){var f=this;
f.shouldClick===!1&&(g.stopImmediatePropagation(),g.stopPropagation(),g.preventDefault())
},c.prototype.destroy=function(a){var f=this;
f.autoPlayClear(),f.touchObject={},f.cleanUpEvents(),d(".slick-cloned",f.$slider).detach(),f.$dots&&f.$dots.remove(),f.$prevArrow&&"object"!=typeof f.options.prevArrow&&f.$prevArrow.remove(),f.$nextArrow&&"object"!=typeof f.options.nextArrow&&f.$nextArrow.remove(),f.$slides&&(f.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){d(this).attr("style",d(this).data("originalStyling"))
}),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.detach(),f.$list.detach(),f.$slider.append(f.$slides)),f.cleanUpRows(),f.$slider.removeClass("slick-slider"),f.$slider.removeClass("slick-initialized"),f.unslicked=!0,a||f.$slider.trigger("destroy",[f])
},c.prototype.disableTransition=function(g){var f=this,h={};
h[f.transitionType]="",f.options.fade===!1?f.$slideTrack.css(h):f.$slides.eq(g).css(h)
},c.prototype.fadeSlide=function(g,f){var h=this;
h.cssTransitions===!1?(h.$slides.eq(g).css({zIndex:1000}),h.$slides.eq(g).animate({opacity:1},h.options.speed,h.options.easing,f)):(h.applyTransition(g),h.$slides.eq(g).css({opacity:1,zIndex:1000}),f&&setTimeout(function(){h.disableTransition(g),f.call()
},h.options.speed))
},c.prototype.filterSlides=c.prototype.slickFilter=function(g){var f=this;
null!==g&&(f.unload(),f.$slideTrack.children(this.options.slide).detach(),f.$slidesCache.filter(g).appendTo(f.$slideTrack),f.reinit())
},c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var b=this;
return b.currentSlide
},c.prototype.getDotCount=function(){var g=this,f=0,i=0,h=0;
if(g.options.infinite===!0){for(;
f<g.slideCount;
){++h,f=i+g.options.slidesToShow,i+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}}else{if(g.options.centerMode===!0){h=g.slideCount
}else{for(;
f<g.slideCount;
){++h,f=i+g.options.slidesToShow,i+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}}}return h-1
},c.prototype.getLeft=function(h){var l,k,i,g=this,j=0;
return g.slideOffset=0,k=g.$slides.first().outerHeight(),g.options.infinite===!0?(g.slideCount>g.options.slidesToShow&&(g.slideOffset=-1*g.slideWidth*g.options.slidesToShow,j=-1*k*g.options.slidesToShow),0!==g.slideCount%g.options.slidesToScroll&&h+g.options.slidesToScroll>g.slideCount&&g.slideCount>g.options.slidesToShow&&(h>g.slideCount?(g.slideOffset=-1*(g.options.slidesToShow-(h-g.slideCount))*g.slideWidth,j=-1*(g.options.slidesToShow-(h-g.slideCount))*k):(g.slideOffset=-1*g.slideCount%g.options.slidesToScroll*g.slideWidth,j=-1*g.slideCount%g.options.slidesToScroll*k))):h+g.options.slidesToShow>g.slideCount&&(g.slideOffset=(h+g.options.slidesToShow-g.slideCount)*g.slideWidth,j=(h+g.options.slidesToShow-g.slideCount)*k),g.slideCount<=g.options.slidesToShow&&(g.slideOffset=0,j=0),g.options.centerMode===!0&&g.options.infinite===!0?g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)-g.slideWidth:g.options.centerMode===!0&&(g.slideOffset=0,g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)),l=g.options.vertical===!1?-1*h*g.slideWidth+g.slideOffset:-1*h*k+j,g.options.variableWidth===!0&&(i=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow),l=i[0]?-1*i[0].offsetLeft:0,g.options.centerMode===!0&&(i=g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow+1),l=i[0]?-1*i[0].offsetLeft:0,l+=(g.$list.width()-i.outerWidth())/2)),l
},c.prototype.getOption=c.prototype.slickGetOption=function(g){var f=this;
return f.options[g]
},c.prototype.getNavigableIndexes=function(){var h,g=this,f=0,j=0,i=[];
for(g.options.infinite===!1?h=g.slideCount:(f=-1*g.options.slidesToScroll,j=-1*g.options.slidesToScroll,h=2*g.slideCount);
h>f;
){i.push(f),f=j+g.options.slidesToScroll,j+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return i
},c.prototype.getSlick=function(){return this
},c.prototype.getSlideCount=function(){var h,g,f,a=this;
return f=a.options.centerMode===!0?a.slideWidth*Math.floor(a.options.slidesToShow/2):0,a.options.swipeToSlide===!0?(a.$slideTrack.find(".slick-slide").each(function(i,b){return b.offsetLeft-f+d(b).outerWidth()/2>-1*a.swipeLeft?(g=b,!1):void 0
}),h=Math.abs(d(g).attr("data-slick-index")-a.currentSlide)||1):a.options.slidesToScroll
},c.prototype.goTo=c.prototype.slickGoTo=function(g,f){var h=this;
h.changeSlide({data:{message:"index",index:parseInt(g)}},f)
},c.prototype.init=function(a){var f=this;
d(f.$slider).hasClass("slick-initialized")||(d(f.$slider).addClass("slick-initialized"),f.buildRows(),f.buildOut(),f.setProps(),f.startLoad(),f.loadSlider(),f.initializeEvents(),f.updateArrows(),f.updateDots()),a&&f.$slider.trigger("init",[f])
},c.prototype.initArrowEvents=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.on("click.slick",{message:"previous"},b.changeSlide),b.$nextArrow.on("click.slick",{message:"next"},b.changeSlide))
},c.prototype.initDotEvents=function(){var a=this;
a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&d("li",a.$dots).on("click.slick",{message:"index"},a.changeSlide),a.options.dots===!0&&a.options.pauseOnDotsHover===!0&&a.options.autoplay===!0&&d("li",a.$dots).on("mouseenter.slick",d.proxy(a.setPaused,a,!0)).on("mouseleave.slick",d.proxy(a.setPaused,a,!1))
},c.prototype.initializeEvents=function(){var a=this;
a.initArrowEvents(),a.initDotEvents(),a.$list.on("touchstart.slick mousedown.slick",{action:"start"},a.swipeHandler),a.$list.on("touchmove.slick mousemove.slick",{action:"move"},a.swipeHandler),a.$list.on("touchend.slick mouseup.slick",{action:"end"},a.swipeHandler),a.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},a.swipeHandler),a.$list.on("click.slick",a.clickHandler),d(document).on(a.visibilityChange,d.proxy(a.visibility,a)),a.$list.on("mouseenter.slick",d.proxy(a.setPaused,a,!0)),a.$list.on("mouseleave.slick",d.proxy(a.setPaused,a,!1)),a.options.accessibility===!0&&a.$list.on("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),d(window).on("orientationchange.slick.slick-"+a.instanceUid,d.proxy(a.orientationChange,a)),d(window).on("resize.slick.slick-"+a.instanceUid,d.proxy(a.resize,a)),d("[draggable!=true]",a.$slideTrack).on("dragstart",a.preventDefault),d(window).on("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).on("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.initUI=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.show(),b.$nextArrow.show()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.show(),b.options.autoplay===!0&&b.autoPlay()
},c.prototype.keyHandler=function(g){var f=this;
37===g.keyCode&&f.options.accessibility===!0?f.changeSlide({data:{message:"previous"}}):39===g.keyCode&&f.options.accessibility===!0&&f.changeSlide({data:{message:"next"}})
},c.prototype.lazyLoad=function(){function h(f){d("img[data-lazy]",f).each(function(){var g=d(this),n=d(this).attr("data-lazy"),m=document.createElement("img");
m.onload=function(){g.animate({opacity:1},200)
},m.src=n,g.css({opacity:0}).attr("src",n).removeAttr("data-lazy").removeClass("slick-loading")
})
}var l,k,j,i,a=this;
a.options.centerMode===!0?a.options.infinite===!0?(j=a.currentSlide+(a.options.slidesToShow/2+1),i=j+a.options.slidesToShow+2):(j=Math.max(0,a.currentSlide-(a.options.slidesToShow/2+1)),i=2+(a.options.slidesToShow/2+1)+a.currentSlide):(j=a.options.infinite?a.options.slidesToShow+a.currentSlide:a.currentSlide,i=j+a.options.slidesToShow,a.options.fade===!0&&(j>0&&j--,i<=a.slideCount&&i++)),l=a.$slider.find(".slick-slide").slice(j,i),h(l),a.slideCount<=a.options.slidesToShow?(k=a.$slider.find(".slick-slide"),h(k)):a.currentSlide>=a.slideCount-a.options.slidesToShow?(k=a.$slider.find(".slick-cloned").slice(0,a.options.slidesToShow),h(k)):0===a.currentSlide&&(k=a.$slider.find(".slick-cloned").slice(-1*a.options.slidesToShow),h(k))
},c.prototype.loadSlider=function(){var b=this;
b.setPosition(),b.$slideTrack.css({opacity:1}),b.$slider.removeClass("slick-loading"),b.initUI(),"progressive"===b.options.lazyLoad&&b.progressiveLazyLoad()
},c.prototype.next=c.prototype.slickNext=function(){var b=this;
b.changeSlide({data:{message:"next"}})
},c.prototype.orientationChange=function(){var b=this;
b.checkResponsive(),b.setPosition()
},c.prototype.pause=c.prototype.slickPause=function(){var b=this;
b.autoPlayClear(),b.paused=!0
},c.prototype.play=c.prototype.slickPlay=function(){var b=this;
b.paused=!1,b.autoPlay()
},c.prototype.postSlide=function(g){var f=this;
f.$slider.trigger("afterChange",[f,g]),f.animating=!1,f.setPosition(),f.swipeLeft=null,f.options.autoplay===!0&&f.paused===!1&&f.autoPlay()
},c.prototype.prev=c.prototype.slickPrev=function(){var b=this;
b.changeSlide({data:{message:"previous"}})
},c.prototype.preventDefault=function(b){b.preventDefault()
},c.prototype.progressiveLazyLoad=function(){var g,f,a=this;
g=d("img[data-lazy]",a.$slider).length,g>0&&(f=d("img[data-lazy]",a.$slider).first(),f.attr("src",f.attr("data-lazy")).removeClass("slick-loading").load(function(){f.removeAttr("data-lazy"),a.progressiveLazyLoad(),a.options.adaptiveHeight===!0&&a.setPosition()
}).error(function(){f.removeAttr("data-lazy"),a.progressiveLazyLoad()
}))
},c.prototype.refresh=function(a){var g=this,f=g.currentSlide;
g.destroy(!0),d.extend(g,g.initials),g.init(),a||g.changeSlide({data:{message:"index",index:f}},!1)
},c.prototype.reinit=function(){var a=this;
a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.slideCount<=a.options.slidesToShow&&(a.currentSlide=0),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),a.setSlideClasses(0),a.setPosition(),a.$slider.trigger("reInit",[a])
},c.prototype.resize=function(){var a=this;
d(window).width()!==a.windowWidth&&(clearTimeout(a.windowDelay),a.windowDelay=window.setTimeout(function(){a.windowWidth=d(window).width(),a.checkResponsive(),a.unslicked||a.setPosition()
},50))
},c.prototype.removeSlide=c.prototype.slickRemove=function(g,f,i){var h=this;
return"boolean"==typeof g?(f=g,g=f===!0?0:h.slideCount-1):g=f===!0?--g:g,h.slideCount<1||0>g||g>h.slideCount-1?!1:(h.unload(),i===!0?h.$slideTrack.children().remove():h.$slideTrack.children(this.options.slide).eq(g).remove(),h.$slides=h.$slideTrack.children(this.options.slide),h.$slideTrack.children(this.options.slide).detach(),h.$slideTrack.append(h.$slides),h.$slidesCache=h.$slides,h.reinit(),void 0)
},c.prototype.setCSS=function(g){var i,h,f=this,j={};
f.options.rtl===!0&&(g=-g),i="left"==f.positionProp?Math.ceil(g)+"px":"0px",h="top"==f.positionProp?Math.ceil(g)+"px":"0px",j[f.positionProp]=g,f.transformsEnabled===!1?f.$slideTrack.css(j):(j={},f.cssTransitions===!1?(j[f.animType]="translate("+i+", "+h+")",f.$slideTrack.css(j)):(j[f.animType]="translate3d("+i+", "+h+", 0px)",f.$slideTrack.css(j)))
},c.prototype.setDimensions=function(){var g=this;
g.options.vertical===!1?g.options.centerMode===!0&&g.$list.css({padding:"0px "+g.options.centerPadding}):(g.$list.height(g.$slides.first().outerHeight(!0)*g.options.slidesToShow),g.options.centerMode===!0&&g.$list.css({padding:g.options.centerPadding+" 0px"})),g.listWidth=g.$list.width(),g.listHeight=g.$list.height(),g.options.vertical===!1&&g.options.variableWidth===!1?(g.slideWidth=Math.ceil(g.listWidth/g.options.slidesToShow),g.$slideTrack.width(Math.ceil(g.slideWidth*g.$slideTrack.children(".slick-slide").length))):g.options.variableWidth===!0?g.$slideTrack.width(5000*g.slideCount):(g.slideWidth=Math.ceil(g.listWidth),g.$slideTrack.height(Math.ceil(g.$slides.first().outerHeight(!0)*g.$slideTrack.children(".slick-slide").length)));
var f=g.$slides.first().outerWidth(!0)-g.$slides.first().width();
g.options.variableWidth===!1&&g.$slideTrack.children(".slick-slide").width(g.slideWidth-f)
},c.prototype.setFade=function(){var f,a=this;
a.$slides.each(function(g,b){f=-1*a.slideWidth*g,a.options.rtl===!0?d(b).css({position:"relative",right:f,top:0,zIndex:800,opacity:0}):d(b).css({position:"relative",left:f,top:0,zIndex:800,opacity:0})
}),a.$slides.eq(a.currentSlide).css({zIndex:900,opacity:1})
},c.prototype.setHeight=function(){var g=this;
if(1===g.options.slidesToShow&&g.options.adaptiveHeight===!0&&g.options.vertical===!1){var f=g.$slides.eq(g.currentSlide).outerHeight(!0);
g.$list.css("height",f)
}},c.prototype.setOption=c.prototype.slickSetOption=function(g,f,i){var h=this;
h.options[g]=f,i===!0&&(h.unload(),h.reinit())
},c.prototype.setPosition=function(){var b=this;
b.setDimensions(),b.setHeight(),b.options.fade===!1?b.setCSS(b.getLeft(b.currentSlide)):b.setFade(),b.$slider.trigger("setPosition",[b])
},c.prototype.setProps=function(){var g=this,f=document.body.style;
g.positionProp=g.options.vertical===!0?"top":"left","top"===g.positionProp?g.$slider.addClass("slick-vertical"):g.$slider.removeClass("slick-vertical"),(void 0!==f.WebkitTransition||void 0!==f.MozTransition||void 0!==f.msTransition)&&g.options.useCSS===!0&&(g.cssTransitions=!0),void 0!==f.OTransform&&(g.animType="OTransform",g.transformType="-o-transform",g.transitionType="OTransition",void 0===f.perspectiveProperty&&void 0===f.webkitPerspective&&(g.animType=!1)),void 0!==f.MozTransform&&(g.animType="MozTransform",g.transformType="-moz-transform",g.transitionType="MozTransition",void 0===f.perspectiveProperty&&void 0===f.MozPerspective&&(g.animType=!1)),void 0!==f.webkitTransform&&(g.animType="webkitTransform",g.transformType="-webkit-transform",g.transitionType="webkitTransition",void 0===f.perspectiveProperty&&void 0===f.webkitPerspective&&(g.animType=!1)),void 0!==f.msTransform&&(g.animType="msTransform",g.transformType="-ms-transform",g.transitionType="msTransition",void 0===f.msTransform&&(g.animType=!1)),void 0!==f.transform&&g.animType!==!1&&(g.animType="transform",g.transformType="transform",g.transitionType="transition"),g.transformsEnabled=null!==g.animType&&g.animType!==!1
},c.prototype.setSlideClasses=function(h){var l,k,j,i,g=this;
g.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),k=g.$slider.find(".slick-slide"),g.options.centerMode===!0?(l=Math.floor(g.options.slidesToShow/2),g.options.infinite===!0&&(h>=l&&h<=g.slideCount-1-l?g.$slides.slice(h-l,h+l+1).addClass("slick-active").attr("aria-hidden","false"):(j=g.options.slidesToShow+h,k.slice(j-l+1,j+l+2).addClass("slick-active").attr("aria-hidden","false")),0===h?k.eq(k.length-1-g.options.slidesToShow).addClass("slick-center"):h===g.slideCount-1&&k.eq(g.options.slidesToShow).addClass("slick-center")),g.$slides.eq(h).addClass("slick-center")):h>=0&&h<=g.slideCount-g.options.slidesToShow?g.$slides.slice(h,h+g.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):k.length<=g.options.slidesToShow?k.addClass("slick-active").attr("aria-hidden","false"):(i=g.slideCount%g.options.slidesToShow,j=g.options.infinite===!0?g.options.slidesToShow+h:h,g.options.slidesToShow==g.options.slidesToScroll&&g.slideCount-h<g.options.slidesToShow?k.slice(j-(g.options.slidesToShow-i),j+i).addClass("slick-active").attr("aria-hidden","false"):k.slice(j,j+g.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===g.options.lazyLoad&&g.lazyLoad()
},c.prototype.setupInfinite=function(){var h,g,f,a=this;
if(a.options.fade===!0&&(a.options.centerMode=!1),a.options.infinite===!0&&a.options.fade===!1&&(g=null,a.slideCount>a.options.slidesToShow)){for(f=a.options.centerMode===!0?a.options.slidesToShow+1:a.options.slidesToShow,h=a.slideCount;
h>a.slideCount-f;
h-=1){g=h-1,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g-a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned")
}for(h=0;
f>h;
h+=1){g=h,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g+a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned")
}a.$slideTrack.find(".slick-cloned").find("[id]").each(function(){d(this).attr("id","")
})
}},c.prototype.setPaused=function(g){var f=this;
f.options.autoplay===!0&&f.options.pauseOnHover===!0&&(f.paused=g,g?f.autoPlayClear():f.autoPlay())
},c.prototype.selectHandler=function(a){var h=this,g=d(a.target).is(".slick-slide")?d(a.target):d(a.target).parents(".slick-slide"),f=parseInt(g.attr("data-slick-index"));
return f||(f=0),h.slideCount<=h.options.slidesToShow?(h.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),h.$slides.eq(f).addClass("slick-active").attr("aria-hidden","false"),h.options.centerMode===!0&&(h.$slider.find(".slick-slide").removeClass("slick-center"),h.$slides.eq(f).addClass("slick-center")),h.asNavFor(f),void 0):(h.slideHandler(f),void 0)
},c.prototype.slideHandler=function(r,q,p){var o,n,m,l,k=null,j=this;
return q=q||!1,j.animating===!0&&j.options.waitForAnimate===!0||j.options.fade===!0&&j.currentSlide===r||j.slideCount<=j.options.slidesToShow?void 0:(q===!1&&j.asNavFor(r),o=r,k=j.getLeft(o),l=j.getLeft(j.currentSlide),j.currentLeft=null===j.swipeLeft?l:j.swipeLeft,j.options.infinite===!1&&j.options.centerMode===!1&&(0>r||r>j.getDotCount()*j.options.slidesToScroll)?(j.options.fade===!1&&(o=j.currentSlide,p!==!0?j.animateSlide(l,function(){j.postSlide(o)
}):j.postSlide(o)),void 0):j.options.infinite===!1&&j.options.centerMode===!0&&(0>r||r>j.slideCount-j.options.slidesToScroll)?(j.options.fade===!1&&(o=j.currentSlide,p!==!0?j.animateSlide(l,function(){j.postSlide(o)
}):j.postSlide(o)),void 0):(j.options.autoplay===!0&&clearInterval(j.autoPlayTimer),n=0>o?0!==j.slideCount%j.options.slidesToScroll?j.slideCount-j.slideCount%j.options.slidesToScroll:j.slideCount+o:o>=j.slideCount?0!==j.slideCount%j.options.slidesToScroll?0:o-j.slideCount:o,j.animating=!0,j.$slider.trigger("beforeChange",[j,j.currentSlide,n]),m=j.currentSlide,j.currentSlide=n,j.setSlideClasses(j.currentSlide),j.updateDots(),j.updateArrows(),j.options.fade===!0?(p!==!0?j.fadeSlide(n,function(){j.postSlide(n)
}):j.postSlide(n),j.animateHeight(),void 0):(p!==!0?j.animateSlide(k,function(){j.postSlide(n)
}):j.postSlide(n),void 0)))
},c.prototype.startLoad=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.hide(),b.$nextArrow.hide()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.hide(),b.$slider.addClass("slick-loading")
},c.prototype.swipeDirection=function(){var g,f,j,i,h=this;
return g=h.touchObject.startX-h.touchObject.curX,f=h.touchObject.startY-h.touchObject.curY,j=Math.atan2(f,g),i=Math.round(180*j/Math.PI),0>i&&(i=360-Math.abs(i)),45>=i&&i>=0?h.options.rtl===!1?"left":"right":360>=i&&i>=315?h.options.rtl===!1?"left":"right":i>=135&&225>=i?h.options.rtl===!1?"right":"left":h.options.verticalSwiping===!0?i>=35&&135>=i?"left":"right":"vertical"
},c.prototype.swipeEnd=function(){var f,a=this;
if(a.dragging=!1,a.shouldClick=a.touchObject.swipeLength>10?!1:!0,void 0===a.touchObject.curX){return !1
}if(a.touchObject.edgeHit===!0&&a.$slider.trigger("edge",[a,a.swipeDirection()]),a.touchObject.swipeLength>=a.touchObject.minSwipe){switch(a.swipeDirection()){case"left":f=a.options.swipeToSlide?a.checkNavigable(a.currentSlide+a.getSlideCount()):a.currentSlide+a.getSlideCount(),a.slideHandler(f),a.currentDirection=0,a.touchObject={},a.$slider.trigger("swipe",[a,"left"]);
break;
case"right":f=a.options.swipeToSlide?a.checkNavigable(a.currentSlide-a.getSlideCount()):a.currentSlide-a.getSlideCount(),a.slideHandler(f),a.currentDirection=1,a.touchObject={},a.$slider.trigger("swipe",[a,"right"])
}}else{a.touchObject.startX!==a.touchObject.curX&&(a.slideHandler(a.currentSlide),a.touchObject={})
}},c.prototype.swipeHandler=function(g){var f=this;
if(!(f.options.swipe===!1||"ontouchend" in document&&f.options.swipe===!1||f.options.draggable===!1&&-1!==g.type.indexOf("mouse"))){switch(f.touchObject.fingerCount=g.originalEvent&&void 0!==g.originalEvent.touches?g.originalEvent.touches.length:1,f.touchObject.minSwipe=f.listWidth/f.options.touchThreshold,f.options.verticalSwiping===!0&&(f.touchObject.minSwipe=f.listHeight/f.options.touchThreshold),g.data.action){case"start":f.swipeStart(g);
break;
case"move":f.swipeMove(g);
break;
case"end":f.swipeEnd(g)
}}},c.prototype.swipeMove=function(j){var o,n,m,l,k,i=this;
return k=void 0!==j.originalEvent?j.originalEvent.touches:null,!i.dragging||k&&1!==k.length?!1:(o=i.getLeft(i.currentSlide),i.touchObject.curX=void 0!==k?k[0].pageX:j.clientX,i.touchObject.curY=void 0!==k?k[0].pageY:j.clientY,i.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(i.touchObject.curX-i.touchObject.startX,2))),i.options.verticalSwiping===!0&&(i.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(i.touchObject.curY-i.touchObject.startY,2)))),n=i.swipeDirection(),"vertical"!==n?(void 0!==j.originalEvent&&i.touchObject.swipeLength>4&&j.preventDefault(),l=(i.options.rtl===!1?1:-1)*(i.touchObject.curX>i.touchObject.startX?1:-1),i.options.verticalSwiping===!0&&(l=i.touchObject.curY>i.touchObject.startY?1:-1),m=i.touchObject.swipeLength,i.touchObject.edgeHit=!1,i.options.infinite===!1&&(0===i.currentSlide&&"right"===n||i.currentSlide>=i.getDotCount()&&"left"===n)&&(m=i.touchObject.swipeLength*i.options.edgeFriction,i.touchObject.edgeHit=!0),i.swipeLeft=i.options.vertical===!1?o+m*l:o+m*(i.$list.height()/i.listWidth)*l,i.options.verticalSwiping===!0&&(i.swipeLeft=o+m*l),i.options.fade===!0||i.options.touchMove===!1?!1:i.animating===!0?(i.swipeLeft=null,!1):(i.setCSS(i.swipeLeft),void 0)):void 0)
},c.prototype.swipeStart=function(g){var h,f=this;
return 1!==f.touchObject.fingerCount||f.slideCount<=f.options.slidesToShow?(f.touchObject={},!1):(void 0!==g.originalEvent&&void 0!==g.originalEvent.touches&&(h=g.originalEvent.touches[0]),f.touchObject.startX=f.touchObject.curX=void 0!==h?h.pageX:g.clientX,f.touchObject.startY=f.touchObject.curY=void 0!==h?h.pageY:g.clientY,f.dragging=!0,void 0)
},c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var b=this;
null!==b.$slidesCache&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.appendTo(b.$slideTrack),b.reinit())
},c.prototype.unload=function(){var a=this;
d(".slick-cloned",a.$slider).remove(),a.$dots&&a.$dots.remove(),a.$prevArrow&&"object"!=typeof a.options.prevArrow&&a.$prevArrow.remove(),a.$nextArrow&&"object"!=typeof a.options.nextArrow&&a.$nextArrow.remove(),a.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")
},c.prototype.unslick=function(g){var f=this;
f.$slider.trigger("unslick",[f,g]),f.destroy()
},c.prototype.updateArrows=function(){var f,g=this;
f=Math.floor(g.options.slidesToShow/2),g.options.arrows===!0&&g.options.infinite!==!0&&g.slideCount>g.options.slidesToShow&&(g.$prevArrow.removeClass("slick-disabled"),g.$nextArrow.removeClass("slick-disabled"),0===g.currentSlide?(g.$prevArrow.addClass("slick-disabled"),g.$nextArrow.removeClass("slick-disabled")):g.currentSlide>=g.slideCount-g.options.slidesToShow&&g.options.centerMode===!1?(g.$nextArrow.addClass("slick-disabled"),g.$prevArrow.removeClass("slick-disabled")):g.currentSlide>=g.slideCount-1&&g.options.centerMode===!0&&(g.$nextArrow.addClass("slick-disabled"),g.$prevArrow.removeClass("slick-disabled")))
},c.prototype.updateDots=function(){var b=this;
null!==b.$dots&&(b.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),b.$dots.find("li").eq(Math.floor(b.currentSlide/b.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))
},c.prototype.visibility=function(){var b=this;
document[b.hidden]?(b.paused=!0,b.autoPlayClear()):b.options.autoplay===!0&&(b.paused=!1,b.autoPlay())
},d.fn.slick=function(){var h,b=this,l=arguments[0],k=Array.prototype.slice.call(arguments,1),j=b.length,i=0;
for(i;
j>i;
i++){if("object"==typeof l||"undefined"==typeof l?b[i].slick=new c(b[i],l):h=b[i].slick[l].apply(b[i].slick,k),"undefined"!=typeof h){return h
}}return b
}
});
"use_strict";
var Shira;
!function(b,a){!function(c){c.Watcher=function(f,d){this.element=f,this.options=a.extend({},c.Watcher.defaults,d)
},c.Watcher.defaults={fixClass:"scroll-fix",fixTop:0,fixOffset:0,unfixOffset:0,onUpdateFixed:null,syncSize:!0,syncPosition:!0,style:!0},c.Watcher.prototype={element:null,substitute:null,options:null,fixed:!1,attached:!1,getElementX:function(f){var d=0;
do{d+=f.offsetLeft
}while(f=f.offsetParent);
return d
},getElementY:function(f){var d=0;
do{d+=f.offsetTop
}while(f=f.offsetParent);
return d
},fix:function(){this.substitute=a(this.element.cloneNode(!1)).css("visibility","hidden").height(a(this.element).height()).insertAfter(this.element)[0],this.options.style&&a(this.element).css("position","fixed").css("top",this.options.fixTop+"px"),a(this.element).addClass(this.options.fixClass)
},updateFixed:function(){if(this.options.syncSize&&a(this.element).width(a(this.substitute).width()),this.options.syncPosition){var d=a(window).scrollLeft(),f=this.getElementX(this.substitute);
a(this.element).css("left",f-d+"px")
}null!==this.options.onUpdateFixed&&this.options.onUpdateFixed(this)
},unfix:function(){a(this.substitute).remove(),this.substitute=null;
var d={};
this.options.syncPosition&&(d.left=""),this.options.syncSize&&(d.width=""),this.options.style&&(d.position="",d.top=""),a(this.element).css(d).removeClass(this.options.fixClass)
},attach:function(){if(this.attached){throw new Error("Already attached")
}var d=this;
this.updateEventHandler=function(){d.pulse()
},a(window).scroll(this.updateEventHandler).resize(this.updateEventHandler),this.attached=!0,this.pulse()
},detach:function(){if(!this.attached){throw new Error("Not attached")
}a(window).unbind("scroll",this.updateEventHandler).unbind("resize",this.updateEventHandler),this.attached=!1
},pulse:function(){var d=a(window).scrollTop();
this.fixed?d<=this.getElementY(this.substitute)+this.options.unfixOffset?(this.unfix(),this.fixed=!1):this.updateFixed():d>=this.getElementY(this.element)+this.options.fixOffset&&(this.fix(),this.fixed=!0,this.updateFixed())
}},a.fn.scrollFix=function(d){var g=this[0];
if(g){var f=new c.Watcher(g,d);
return f.attach(),f
}return !1
}
}(b.ScrollFix||(b.ScrollFix={}))
}(Shira||(Shira={}),jQuery);
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof module&&module.exports?require("jquery"):jQuery)
}(function(z){function y(a){var g={},f=/^jQuery\d+$/;
return z.each(a.attributes,function(d,c){c.specified&&!f.test(c.name)&&(g[c.name]=c.value)
}),g
}function x(a,i){var h=this,g=z(h);
if(h.value==g.attr("placeholder")&&g.hasClass(n.customClass)){if(g.data("placeholder-password")){if(g=g.hide().nextAll('input[type="password"]:first').show().attr("id",g.removeAttr("id").data("placeholder-id")),a===!0){return g[0].value=i
}g.focus()
}else{h.value="",g.removeClass(n.customClass),h==v()&&h.select()
}}}function w(){var j,i=this,c=z(i),b=this.id;
if(""===i.value){if("password"===i.type){if(!c.data("placeholder-textinput")){try{j=c.clone().prop({type:"text"})
}catch(a){j=z("<input>").attr(z.extend(y(this),{type:"text"}))
}j.removeAttr("name").data({"placeholder-password":c,"placeholder-id":b}).bind("focus.placeholder",x),c.data({"placeholder-textinput":j,"placeholder-id":b}).before(j)
}c=c.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",b).show()
}c.addClass(n.customClass),c[0].value=c.attr("placeholder")
}else{c.removeClass(n.customClass)
}}function v(){try{return document.activeElement
}catch(b){}}var u,t,s="[object OperaMini]"==Object.prototype.toString.call(window.operamini),r="placeholder" in document.createElement("input")&&!s,q="placeholder" in document.createElement("textarea")&&!s,p=z.valHooks,o=z.propHooks;
if(r&&q){t=z.fn.placeholder=function(){return this
},t.input=t.textarea=!0
}else{var n={};
t=z.fn.placeholder=function(a){var d={customClass:"placeholder"};
n=z.extend({},d,a);
var c=this;
return c.filter((r?"textarea":":input")+"[placeholder]").not("."+n.customClass).bind({"focus.placeholder":x,"blur.placeholder":w}).data("placeholder-enabled",!0).trigger("blur.placeholder"),c
},t.input=r,t.textarea=q,u={get:function(a){var g=z(a),f=g.data("placeholder-password");
return f?f[0].value:g.data("placeholder-enabled")&&g.hasClass(n.customClass)?"":a.value
},set:function(a,i){var d=z(a),c=d.data("placeholder-password");
return c?c[0].value=i:d.data("placeholder-enabled")?(""===i?(a.value=i,a!=v()&&w.call(a)):d.hasClass(n.customClass)?x.call(a,!0,i)||(a.value=i):a.value=i,d):a.value=i
}},r||(p.input=u,o.value=u),q||(p.textarea=u,o.value=u),z(function(){z(document).delegate("form","submit.placeholder",function(){var a=z("."+n.customClass,this).each(x);
setTimeout(function(){a.each(w)
},10)
})
}),z(window).bind("beforeunload.placeholder",function(){z("."+n.customClass).each(function(){this.value=""
})
})
}});
!function(j){function f(){j[k].glbl||(b={$wndw:j(window),$html:j("html"),$body:j("body")},c={},d={},h={},j.each([c,d,h],function(i,a){a.add=function(m){m=m.split(" ");
for(var o=0,l=m.length;
l>o;
o++){a[m[o]]=a.mm(m[o])
}}
}),c.mm=function(a){return"mm-"+a
},c.add("wrapper menu panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),c.umm=function(a){return"mm-"==a.slice(0,3)&&(a=a.slice(3)),a
},d.mm=function(a){return"mm-"+a
},d.add("parent sub"),h.mm=function(a){return a+".mm"
},h.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"),j[k]._c=c,j[k]._d=d,j[k]._e=h,j[k].glbl=b)
}var k="mmenu",g="5.3.4";
if(!j[k]){j[k]=function(l,a,m){this.$menu=l,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=a,this.conf=m,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();
var i=this.$menu.children(this.conf.panelNodetype);
return this._initAddons(),this.init(i),"function"==typeof this.___debug&&this.___debug(),this
},j[k].version=g,j[k].addons={},j[k].uniqueId=0,j[k].defaults={extensions:[],navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},j[k].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},j[k].prototype={init:function(a){a=a.not("."+c.nopanel),a=this._initPanels(a),this.trigger("init",a),this.trigger("update")
},update:function(){this.trigger("update")
},setSelected:function(a){this.$menu.find("."+c.listview).children().removeClass(c.selected),a.addClass(c.selected),this.trigger("setSelected",a)
},openPanel:function(n){var o=n.parent();
if(o.hasClass(c.vertical)){var m=o.parents("."+c.subopened);
if(m.length){return this.openPanel(m.first())
}o.addClass(c.opened)
}else{if(n.hasClass(c.current)){return
}var p=this.$menu.children("."+c.panel),a=p.filter("."+c.current);
p.removeClass(c.highest).removeClass(c.current).not(n).not(a).not("."+c.vertical).addClass(c.hidden),j[k].support.csstransitions||a.addClass(c.hidden),n.hasClass(c.opened)?n.nextAll("."+c.opened).addClass(c.highest).removeClass(c.opened).removeClass(c.subopened):(n.addClass(c.highest),a.addClass(c.subopened)),n.removeClass(c.hidden).addClass(c.current),setTimeout(function(){n.removeClass(c.subopened).addClass(c.opened)
},this.conf.openingInterval)
}this.trigger("openPanel",n)
},closePanel:function(i){var a=i.parent();
a.hasClass(c.vertical)&&(a.removeClass(c.opened),this.trigger("closePanel",i))
},closeAllPanels:function(){this.$menu.find("."+c.listview).children().removeClass(c.selected).filter("."+c.vertical).removeClass(c.opened);
var i=this.$menu.children("."+c.panel),a=i.first();
this.$menu.children("."+c.panel).not(a).removeClass(c.subopened).removeClass(c.opened).removeClass(c.current).removeClass(c.highest).addClass(c.hidden),this.openPanel(a)
},togglePanel:function(i){var a=i.parent();
a.hasClass(c.vertical)&&this[a.hasClass(c.opened)?"closePanel":"openPanel"](i)
},getInstance:function(){return this
},bind:function(i,a){this.cbck[i]=this.cbck[i]||[],this.cbck[i].push(a)
},trigger:function(){var o=this,l=Array.prototype.slice.call(arguments),p=l.shift();
if(this.cbck[p]){for(var m=0,i=this.cbck[p].length;
i>m;
m++){this.cbck[p][m].apply(o,l)
}}},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){j(this).attr("id",c.mm(j(this).attr("id")))
})),this.$menu.contents().each(function(){3==j(this)[0].nodeType&&j(this).remove()
}),this.$menu.parent().addClass(c.wrapper);
var a=[c.menu];
this.opts.slidingSubmenus||a.push(c.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&a.push(this.opts.extensions),this.$menu.addClass(a.join(" "))
},_initPanels:function(x){var m=this,y=this.__findAddBack(x,"ul, ol");
this.__refactorClass(y,this.conf.classNames.inset,"inset").addClass(c.nolistview+" "+c.nopanel),y.not("."+c.nolistview).addClass(c.listview);
var a=this.__findAddBack(x,"."+c.listview).children();
this.__refactorClass(a,this.conf.classNames.selected,"selected"),this.__refactorClass(a,this.conf.classNames.divider,"divider"),this.__refactorClass(a,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(x,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");
var p=j(),q=x.add(x.find("."+c.panel)).add(this.__findAddBack(x,"."+c.listview).children().children(this.conf.panelNodetype)).not("."+c.nopanel);
this.__refactorClass(q,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||q.addClass(c.vertical),q.each(function(){var n=j(this),o=n;
n.is("ul, ol")?(n.wrap('<div class="'+c.panel+'" />'),o=n.parent()):o.addClass(c.panel);
var l=n.attr("id");
n.removeAttr("id"),o.attr("id",l||m.__getUniqueId()),n.hasClass(c.vertical)&&(n.removeClass(m.conf.classNames.vertical),o.add(o.parent()).addClass(c.vertical)),p=p.add(o)
});
var i=j("."+c.panel,this.$menu);
p.each(function(){var u=j(this),z=u.parent(),A=z.children("a, span").first();
if(z.is("."+c.menu)||(z.data(d.sub,u),u.data(d.parent,z)),!z.children("."+c.next).length&&z.parent().is("."+c.listview)){var n=u.attr("id"),C=j('<a class="'+c.next+'" href="#'+n+'" data-target="#'+n+'" />').insertBefore(A);
A.is("span")&&C.addClass(c.fullsubopen)
}if(!u.children("."+c.navbar).length&&!z.hasClass(c.vertical)){if(z.parent().is("."+c.listview)){var z=z.closest("."+c.panel)
}else{var A=z.closest("."+c.panel).find('a[href="#'+u.attr("id")+'"]').first(),z=A.closest("."+c.panel)
}var B=j('<div class="'+c.navbar+'" />');
if(z.length){var n=z.attr("id");
switch(m.opts.navbar.titleLink){case"anchor":_url=A.attr("href");
break;
case"panel":case"parent":_url="#"+n;
break;
case"none":default:_url=!1
}B.append('<a class="'+c.btn+" "+c.prev+'" href="#'+n+'" data-target="#'+n+'"></a>').append('<a class="'+c.title+'"'+(_url?' href="'+_url+'"':"")+">"+A.text()+"</a>").prependTo(u),m.opts.navbar.add&&u.addClass(c.hasnavbar)
}else{m.opts.navbar.title&&(B.append('<a class="'+c.title+'">'+m.opts.navbar.title+"</a>").prependTo(u),m.opts.navbar.add&&u.addClass(c.hasnavbar))
}}});
var v=this.__findAddBack(x,"."+c.listview).children("."+c.selected).removeClass(c.selected).last().addClass(c.selected);
v.add(v.parentsUntil("."+c.menu,"li")).filter("."+c.vertical).addClass(c.opened).end().not("."+c.vertical).each(function(){j(this).parentsUntil("."+c.menu,"."+c.panel).not("."+c.vertical).first().addClass(c.opened).parentsUntil("."+c.menu,"."+c.panel).not("."+c.vertical).first().addClass(c.opened).addClass(c.subopened)
}),v.children("."+c.panel).not("."+c.vertical).addClass(c.opened).parentsUntil("."+c.menu,"."+c.panel).not("."+c.vertical).first().addClass(c.opened).addClass(c.subopened);
var w=i.filter("."+c.opened);
return w.length||(w=p.first()),w.addClass(c.opened).last().addClass(c.current),p.not("."+c.vertical).not(w.last()).addClass(c.hidden).end().appendTo(this.$menu),p
},_initAnchors:function(){var a=this;
b.$body.on(h.click+"-oncanvas","a[href]",function(y){var q=j(this),l=!1,v=a.$menu.find(q).length;
for(var n in j[k].addons){if(l=j[k].addons[n].clickAnchor.call(a,q,v)){break
}}if(!l&&v){var w=q.attr("href");
if(w.length>1&&"#"==w.slice(0,1)){try{var x=j(w,a.$menu);
x.is("."+c.panel)&&(l=!0,a[q.parent().hasClass(c.vertical)?"togglePanel":"openPanel"](x))
}catch(t){}}}if(l&&y.preventDefault(),!l&&v&&q.is("."+c.listview+" > li > a")&&!q.is('[rel="external"]')&&!q.is('[target="_blank"]')){a.__valueOrFn(a.opts.onClick.setSelected,q)&&a.setSelected(j(y.target).parent());
var m=a.__valueOrFn(a.opts.onClick.preventDefault,q,"#"==w.slice(0,1));
m&&y.preventDefault(),a.__valueOrFn(a.opts.onClick.blockUI,q,!m)&&b.$html.addClass(c.blocking),a.__valueOrFn(a.opts.onClick.close,q,m)&&a.close()
}})
},_initAddons:function(){for(var a in j[k].addons){j[k].addons[a].add.call(this),j[k].addons[a].add=function(){}
}for(var a in j[k].addons){j[k].addons[a].setup.call(this)
}},__api:function(){var a=this,i={};
return j.each(this._api,function(){var l=this;
i[l]=function(){var m=a[l].apply(a,arguments);
return"undefined"==typeof m?i:m
}
}),i
},__valueOrFn:function(i,a,l){return"function"==typeof i?i.call(a[0]):"undefined"==typeof i&&"undefined"!=typeof l?l:i
},__refactorClass:function(i,a,l){return i.filter("."+a).removeClass(a).addClass(c[l])
},__findAddBack:function(i,a){return i.find(a).add(i.filter(a))
},__filterListItems:function(a){return a.not("."+c.divider).not("."+c.hidden)
},__transitionend:function(o,l,p){var m=!1,i=function(){m||l.call(o[0]),m=!0
};
o.one(h.transitionend,i),o.one(h.webkitTransitionEnd,i),setTimeout(i,1.1*p)
},__getUniqueId:function(){return c.mm(j[k].uniqueId++)
}},j.fn[k]=function(l,i){return f(),l=j.extend(!0,{},j[k].defaults,l),i=j.extend(!0,{},j[k].configuration,i),this.each(function(){var m=j(this);
if(!m.data(k)){var a=new j[k](m,l,i);
m.data(k,a.__api())
}})
},j[k].support={touch:"ontouchstart" in window||navigator.msMaxTouchPoints,csstransitions:function(){if("undefined"!=typeof Modernizr){return Modernizr.csstransitions
}var o=document.body||document.documentElement,l=o.style,p="transition";
if("string"==typeof l[p]){return !0
}var m=["Moz","webkit","Webkit","Khtml","O","ms"];
p=p.charAt(0).toUpperCase()+p.substr(1);
for(var i=0;
i<m.length;
i++){if("string"==typeof l[m[i]+p]){return !0
}}return !1
}()};
var c,d,h,b
}}(jQuery);
!function(d){var g="mmenu",h="offCanvas";
d[g].addons[h]={setup:function(){if(this.opts[h]){var l=this.opts[h],a=this.conf[h];
b=d[g].glbl,this._api=d.merge(this._api,["open","close","setPage"]),("top"==l.position||"bottom"==l.position)&&(l.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),b.$allMenus=(b.$allMenus||d()).add(this.$menu),this.vars.opened=!1;
var k=[f.offcanvas];
"left"!=l.position&&k.push(f.mm(l.position)),"back"!=l.zposition&&k.push(f.mm(l.zposition)),this.$menu.addClass(k.join(" ")).parent().removeClass(f.wrapper),this.setPage(b.$page),this._initBlocker(),this["_initWindow_"+h](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector)
}},add:function(){f=d[g]._c,j=d[g]._d,c=d[g]._e,f.add("offcanvas slideout modal background opening blocker page"),j.add("style"),c.add("resize")
},clickAnchor:function(a){if(!this.opts[h]){return !1
}var i=this.$menu.attr("id");
if(i&&i.length&&(this.conf.clone&&(i=f.umm(i)),a.is('[href="#'+i+'"]'))){return this.open(),!0
}if(b.$page){var i=b.$page.first().attr("id");
return i&&i.length&&a.is('[href="#'+i+'"]')?(this.close(),!0):!1
}}},d[g].defaults[h]={position:"left",zposition:"back",modal:!1,moveBackground:!0},d[g].configuration[h]={pageNodetype:"div",pageSelector:null,wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},d[g].prototype.open=function(){if(!this.vars.opened){var a=this;
this._openSetup(),setTimeout(function(){a._openFinish()
},this.conf.openingInterval),this.trigger("open")
}},d[g].prototype._openSetup=function(){var i=this;
this.closeAllOthers(),b.$page.each(function(){d(this).data(j.style,d(this).attr("style")||"")
}),b.$wndw.trigger(c.resize+"-offcanvas",[!0]);
var a=[f.opened];
this.opts[h].modal&&a.push(f.modal),this.opts[h].moveBackground&&a.push(f.background),"left"!=this.opts[h].position&&a.push(f.mm(this.opts[h].position)),"back"!=this.opts[h].zposition&&a.push(f.mm(this.opts[h].zposition)),this.opts.extensions&&a.push(this.opts.extensions),b.$html.addClass(a.join(" ")),setTimeout(function(){i.vars.opened=!0
},this.conf.openingInterval),this.$menu.addClass(f.current+" "+f.opened)
},d[g].prototype._openFinish=function(){var a=this;
this.__transitionend(b.$page.first(),function(){a.trigger("opened")
},this.conf.transitionDuration),b.$html.addClass(f.opening),this.trigger("opening")
},d[g].prototype.close=function(){if(this.vars.opened){var a=this;
this.__transitionend(b.$page.first(),function(){a.$menu.removeClass(f.current).removeClass(f.opened),b.$html.removeClass(f.opened).removeClass(f.modal).removeClass(f.background).removeClass(f.mm(a.opts[h].position)).removeClass(f.mm(a.opts[h].zposition)),a.opts.extensions&&b.$html.removeClass(a.opts.extensions),b.$page.each(function(){d(this).attr("style",d(this).data(j.style))
}),a.vars.opened=!1,a.trigger("closed")
},this.conf.transitionDuration),b.$html.removeClass(f.opening),this.trigger("close"),this.trigger("closing")
}},d[g].prototype.closeAllOthers=function(){b.$allMenus.not(this.$menu).each(function(){var a=d(this).data(g);
a&&a.close&&a.close()
})
},d[g].prototype.setPage=function(k){var l=this,a=this.conf[h];
k&&k.length||(k=b.$body.find(a.pageSelector),k.length>1&&a.wrapPageIfNeeded&&(k=k.wrapAll("<"+this.conf[h].pageNodetype+" />").parent())),k.each(function(){d(this).attr("id",d(this).attr("id")||l.__getUniqueId())
}),k.addClass(f.page+" "+f.slideout),b.$page=k,this.trigger("setPage",k)
},d[g].prototype["_initWindow_"+h]=function(){b.$wndw.off(c.keydown+"-offcanvas").on(c.keydown+"-offcanvas",function(i){return b.$html.hasClass(f.opened)&&9==i.keyCode?(i.preventDefault(),!1):void 0
});
var a=0;
b.$wndw.off(c.resize+"-offcanvas").on(c.resize+"-offcanvas",function(i,k){if(1==b.$page.length&&(k||b.$html.hasClass(f.opened))){var l=b.$wndw.height();
(k||l!=a)&&(a=l,b.$page.css("minHeight",l))
}})
},d[g].prototype._initBlocker=function(){var a=this;
b.$blck||(b.$blck=d('<div id="'+f.blocker+'" class="'+f.slideout+'" />')),b.$blck.appendTo(b.$body).off(c.touchstart+"-offcanvas "+c.touchmove+"-offcanvas").on(c.touchstart+"-offcanvas "+c.touchmove+"-offcanvas",function(i){i.preventDefault(),i.stopPropagation(),b.$blck.trigger(c.mousedown+"-offcanvas")
}).off(c.mousedown+"-offcanvas").on(c.mousedown+"-offcanvas",function(i){i.preventDefault(),b.$html.hasClass(f.modal)||(a.closeAllOthers(),a.close())
})
};
var f,j,c,b
}(jQuery);
!function(j){var b="mmenu",h="navbars";
j[b].addons[h]={setup:function(){var k=this,a=this.opts[h],n=this.conf[h];
if(f=j[b].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);
var m={};
j.each(a,function(A){var q=a[A];
"boolean"==typeof q&&q&&(q={}),"object"!=typeof q&&(q={}),"undefined"==typeof q.content&&(q.content=["prev","title"]),q.content instanceof Array||(q.content=[q.content]),q=j.extend(!0,{},k.opts.navbar,q);
var r=q.position,t=q.height;
"number"!=typeof t&&(t=1),t=Math.min(4,Math.max(1,t)),"bottom"!=r&&(r="top"),m[r]||(m[r]=0),m[r]++;
var w=j("<div />").addClass(d.navbar+" "+d.navbar+"-"+r+" "+d.navbar+"-"+r+"-"+m[r]+" "+d.navbar+"-size-"+t);
m[r]+=t-1;
for(var y=0,z=q.content.length;
z>y;
y++){var i=j[b].addons[h][q.content[y]]||!1;
i?i.call(k,w,q,n):(i=q.content[y],i instanceof j||(i=j(q.content[y])),i.each(function(){w.append(j(this))
}))
}var x=Math.ceil(w.children().not("."+d.btn).length/t);
x>1&&w.addClass(d.navbar+"-content-"+x),w.children("."+d.btn).length&&w.addClass(d.hasbtns),w.prependTo(k.$menu)
});
for(var l in m){k.$menu.addClass(d.hasnavbar+"-"+l+"-"+m[l])
}}},add:function(){d=j[b]._c,g=j[b]._d,c=j[b]._e,d.add("close hasbtns")
},clickAnchor:function(){}},j[b].configuration[h]={breadcrumbSeparator:"/"},j[b].configuration.classNames[h]={panelTitle:"Title",panelNext:"Next",panelPrev:"Prev"};
var d,g,c,f
}(jQuery),function(f){var b="mmenu",d="navbars",c="close";
f[b].addons[d][c]=function(j){var g=f[b]._c,h=f[b].glbl;
j.append('<a class="'+g.close+" "+g.btn+'" href="#"></a>');
var a=function(i){j.find("."+g.close).attr("href","#"+i.attr("id"))
};
a.call(this,h.$page),this.bind("setPage",a)
}
}(jQuery),function(f){var b="mmenu",d="navbars",c="next";
f[b].addons[d][c]=function(g){var h=f[b]._c;
g.append('<a class="'+h.next+" "+h.btn+'" href="#"></a>');
var a=function(o){o=o||this.$menu.children("."+h.current);
var j=g.find("."+h.next),k=o.find("."+this.conf.classNames[d].panelNext),l=k.attr("href"),m=k.html();
j[l?"attr":"removeAttr"]("href",l),j[l||m?"removeClass":"addClass"](h.hidden),j.html(m)
};
this.bind("openPanel",a),this.bind("init",function(){a.call(this)
})
}
}(jQuery),function(f){var b="mmenu",d="navbars",c="prev";
f[b].addons[d][c]=function(g){var h=f[b]._c;
g.append('<a class="'+h.prev+" "+h.btn+'" href="#"></a>'),this.bind("init",function(i){i.removeClass(h.hasnavbar)
});
var a=function(){var o=this.$menu.children("."+h.current),j=g.find("."+h.prev),k=o.find("."+this.conf.classNames[d].panelPrev);
k.length||(k=o.children("."+h.navbar).children("."+h.prev));
var l=k.attr("href"),m=k.html();
j[l?"attr":"removeAttr"]("href",l),j[l||m?"removeClass":"addClass"](h.hidden),j.html(m)
};
this.bind("openPanel",a),this.bind("init",a)
}
}(jQuery),function(f){var b="mmenu",d="navbars",c="title";
f[b].addons[d][c]=function(g,j){var a=f[b]._c;
g.append('<a class="'+a.title+'"></a>');
var h=function(o){o=o||this.$menu.children("."+a.current);
var i=g.find("."+a.title),k=o.find("."+this.conf.classNames[d].panelTitle);
k.length||(k=o.children("."+a.navbar).children("."+a.title));
var m=k.attr("href"),l=k.html()||j.title;
i[m?"attr":"removeAttr"]("href",m),i[m||l?"removeClass":"addClass"](a.hidden),i.html(l)
};
this.bind("openPanel",h),this.bind("init",function(){h.call(this)
})
}
}(jQuery);
!function(g){var f="mmenu",c="fixedElements";
g[f].addons[c]={setup:function(){if(this.opts.offCanvas){var i=this.opts[c];
this.conf[c];
j=g[f].glbl,i=this.opts[c]=g.extend(!0,{},g[f].defaults[c],i);
var d=function(l){var a=this.conf.classNames[c].fixed;
this.__refactorClass(l.find("."+a),a,"slideout").appendTo(j.$body)
};
d.call(this,j.$page),this.bind("setPage",d)
}},add:function(){k=g[f]._c,b=g[f]._d,h=g[f]._e,k.add("fixed")
},clickAnchor:function(){}},g[f].configuration.classNames[c]={fixed:"fixed"};
var k,b,h,j
}(jQuery);
$(document).ready(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=$(this.hash);
i=i.length?i:$("[name="+this.hash.slice(1)+"]");
if(i.length){$("html,body").animate({scrollTop:i.offset().top-62},800);
return false
}}});
$(window).scroll(function(){var i=$(window).scrollTop();
if(i>=500){$(".back-top").addClass("showme")
}else{$(".back-top").removeClass("showme")
}});
var c=function(){var i=[];
$("img").each(function(){var j=$(this).data("alt");
if(j){i.push(j)
}});
return i
};
var f=c();
var h=[];
$.each(f,function(i){h[i]=new Image();
h[i].src=f[i]
});
$(".anim-gif").on("click",function(){var n=$(this),i=n.index(),k=n.children("img"),m=k.attr("src"),l=k.attr("data-alt"),j=l.split(".");
if(j[1]==="gif"){k.attr("src",k.data("alt")).attr("data-alt",m)
}else{k.attr("src",l).attr("data-alt",k.data("alt"))
}n.toggleClass("play")
});
if(b("accept-cookies")==null){$(".cookie-statement").show()
}$(".accept-cookies").click(function(){var i=$(this).closest(".cookie-statement").attr("id");
var j=b("accept-cookies")+",#"+i;
$(this).closest(".cookie-statement").hide();
d("accept-cookies",j.replace("null,",""))
});
function d(j,k){document.cookie=j+"="+escape(k);
var i=new Date();
i.setMonth(i.getMonth()+1);
document.cookie+=("; expires="+i.toUTCString())
}function b(m){var k=document.cookie.split("; ");
for(var l=0;
l<k.length;
l++){var j=k[l].split("=");
if(m==j[0]){return unescape(j[1])
}}return null
}$("section.section").has(".section-bg").addClass("has-img");
$("#home, #business, #oem").hover(function(){$("#icon-"+$(this).attr("id")).toggleClass("grayscale-off")
});
$(".grayscale").hover(function(){$(this).toggleClass("grayscale-off")
});
$("input, textarea").placeholder();
$("#dl-menu").dlmenu({animationClasses:{classin:"dl-animate-in",classout:"dl-animate-out"}});
$("li.has-child > a").on("click",function(i){i.preventDefault();
$(".dropdown-menu").toggleClass("open");
$(this).toggleClass("hide-caret");
i.stopPropagation()
});
$(document).click(function(){$(".dropdown-menu").removeClass("open");
$("li.has-child > a").toggleClass("hide-caret")
});
$("a.dropdown-toggle").each(function(){var i=$(this);
$newLI=$("<li>").append(i.clone());
$newLI.insertBefore(i.next(".dropdown-menu").find("li:first-child"))
});
$(".dropdown-menu .dropdown-toggle:first-child").on("click",function(i){i.preventDefault()
});
$("a.reveal-btn").on("click",function(i){i.preventDefault();
$(this).parents().next().find("section.reveal-content").first().slideToggle();
$("html, body").animate({scrollTop:$(this).offset().top},300)
});
$(".grid-menu-toggle").on("click",function(){$(this).parents().find(".grid-menu.scroll-fix").toggleClass("slide-open")
});
$(".grid-menu-item .products-link, .resources-link a.btn").on("click",function(){$(this).parents().find(".grid-menu.scroll-fix").removeClass("slide-open")
});
var g=$(this).attr("href");
$(".grid-menu-item a").on("click",function(i){i.preventDefault;
$(g).parents().find("section#"+href).addClass("flash")
});
$(".filter-trigger").on("click",function(i){i.preventDefault();
$(".filter-panel").addClass("peekaboo")
});
$(".filter-close").on("click",function(i){$(".filter-panel").removeClass("peekaboo");
$("html, body").animate({scrollTop:$("#results-link").offset().top},300)
});
$("#play-extrem-button").on("click",function(){$("#xt-video-overlay").removeClass("hide")
});
$("#overlay-menu").mmenu({backButton:{close:true},extensions:["fullscreen"],navbars:[{position:"top",content:[],height:1},{position:"top",content:["prev","title","close"],height:1}]});
var a=$("#overlay-menu").data("mmenu");
$(".kebob").click(function(){a.open()
});
if(!($(".cq-wcm-edit").length)){$("header").scrollFix({fixTop:-24,fixOffset:24,style:false,fixClass:"scroll-fix"});
if($(".subnav").length){$(".subnav").scrollFix({fixTop:28,style:false,fixClass:"scroll-fix"})
}if($(".grid-menu").length){$(".grid-menu").scrollFix({fixTop:28,style:false,fixClass:"scroll-fix"})
}}if($(".slider").length){$(".slider").slick({dots:true,arrows:false,infinite:true,autoplay:true,autoplaySpeed:10500,adaptiveHeight:false,speed:timing,fade:true,slidesToShow:1})
}});
function Track_Download_Asset_Path(path,event,eventCategory,eventAction){PushToDataLayer(event,eventCategory,eventAction,TrimAssetPath(path));
var renditionsJson=CQ.shared.HTTP.eval(path+".3.json");
if(renditionsJson!=null){var getRenditions=renditionsJson["jcr:content"]["renditions"];
if(getRenditions!=null){for(var rend in getRenditions){var renditionStr=rend.toString();
if(renditionStr.indexOf("jcr:")<0&&renditionStr.indexOf("cq5dam")<0&&renditionStr.indexOf("original")<0&&renditionStr.indexOf("cqdam")<0){var renditionPath=path+"/jcr:content/renditions/"+renditionStr;
PushToDataLayer(event,eventCategory,eventAction,TrimAssetPath(renditionPath))
}}}}}function Track_Cart_Download_Path(b,f,a,d){for(var c=0;
c<b.length;
c++){PushToDataLayer(f,a,d,TrimAssetPath(b[c].data.damPath))
}}function Track_Addtocart_Asset_Path(b,f,a,d){for(var c=0;
c<b.length;
c++){PushToDataLayer(f,a,d,TrimAssetPath(b[c]))
}}function TrackSearchFilters(f,b,d){var h=document.getElementsByClassName("x-form-checkbox x-form-field");
var g="";
var a=false;
for(var c=0;
c<h.length;
c++){if(h[c].type!="undefined"&&h[c].checked==true){if(h[c].type=="checkbox"){if(h[c].value.toLowerCase().indexOf(":")>=0&&h[c].value.toLowerCase().indexOf("/")>=0){if(!a){g=g+h[c].value.toLowerCase();
a=true
}else{g=g+","+h[c].value.toLowerCase()
}}}}}if(a){PushToDataLayer(f,b,d,g)
}}function PushToDataLayer(d,a,c,b){if(window.ga&&dataLayer){dataLayer.push({event:d,eventCategory:a,eventAction:c,eventLabel:b})
}}function TrimAssetPath(b){var a=new RegExp("(/([a-zA-Z0-9_-]*)){4}");
b=b.replace(b.match(a)[0],"");
return b
}$(document).ready(function(){$(".validate-portal-form form").submit(function(c){var b;
var d=this;
b=validateForm(d);
if(b==0){submitForm(d)
}return false
});
try{$(".loggedinuserinfo-fullname").each(function(){$(this).html(CQ.User.getCurrentUser().getUserName())
});
$(".loggedinuserinfo-userid").each(function(){$(this).html(CQ.User.getCurrentUser().getUserID())
})
}catch(a){console.log("User info not found: "+a.message)
}});
function customFormSubmitAction(b){var a;
a=validateForm(b);
if(a==0){submitForm(b)
}else{}return false
}function validateForm(b){var d=b.getElementsByTagName("*");
for(var a=0;
a<d.length;
a++){if($(d[a]).hasClass("validate")){validateInput(d[a])
}}var c=$(b).find(".error-message.show").length;
return c
}$(".validate").keyup(function(){if($(this).next(".error-message").hasClass("show")){validateInput(this)
}});
$(".validate").on("focusout",function(){validateInput(this)
});
function validateInput(a){var c;
var b=$(a).next(".error-message");
if($(a).hasClass("email")){c=validateEmail(a.value)
}if($(a).hasClass("url")){c=validateUrl(a.value)
}if($(a).hasClass("empty")){c=validateEmpty(a.value)
}if($(a).hasClass("onlyNumbers")){c=validateOnlyNumbers(a.value)
}if($(a).hasClass("onlyAlphabets")){c=validateOnlyText(a.value)
}if($(a).hasClass("requiredSelection")){c=validateSelection(a)
}if(c){b.addClass("show")
}else{b.removeClass("show")
}}function validateEmail(b){var a=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
if(!a.test(b)){return true
}}function validateUrl(b){var a=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
if(!a.test(b)){return true
}}function validateOnlyNumbers(b){var a=/^-?\d+\.?\d*$/;
if(!a.test(b)){return true
}}function validateOnlyText(b){var a=/^[a-zA-Z\s]+$/;
if(!a.test(b)){return true
}}function validateEmpty(a){a=a.trim();
if(a==""||a==null){return true
}}function validateSelection(a){var b=$(a).find(":checked").length;
if(b==0){return true
}}function submitForm(d){var b=$("#"+d.id);
b.find("button").prop("disabled",true).html("Submitting").addClass("disabled");
var a=$("#"+d.id).serialize();
var c=$("#"+d.id).find("input[name=unsubscribed]");
if(c.length>0&&c[0].type=="checkbox"){if(a.indexOf("&unsubscribed=false")<0){a+="&unsubscribed=true"
}}$.ajax({method:"POST",url:d.formAction.value,data:a,success:function(f){$("#"+d.id).addClass("hide-panel");
$(".form-success."+d.id).addClass("show-panel")
}})
}if($.isFunction($.fn.datepicker)){$("#bootstrap-datepicker .input-group.date").datepicker({startDate:"0d",format:"mm/dd/yyyy",autoclose:true});
$(".dp-validate").bind("change blur",function(){value=$(this).val();
if(value==""||value==null){$(this).closest(".input").find(".error-message").addClass("show")
}else{$(this).closest(".input").find(".error-message").removeClass("show")
}})
}$(window).load(function(){if($(".userassignPopup_link").length>0){document.getElementsByName("name_dev_403")[0].value=CQ.User.getCurrentUser().getUserName();
document.getElementsByName("email_dev_403")[0].value=CQ.User.getCurrentUser().getUserID()
}});
function sdmybriefcase(){if((!$("#choose-folder").val())&&(!$("#new-folder").val())||($("#choose-folder").val())&&($("#new-folder").val())){$(".error-mgs").text("Please Either Choose a Folder or Create a Folder.");
$(".error-mgs").removeClass("hide");
return true
}else{$(".error-mgs").addClass("hide")
}}$(".sd-mybriefcase input, .sd-mybriefcase select").on("focusout",function(){sdmybriefcase()
});
$(".sd-mybriefcase form").submit(function(a){a.preventDefault();
if(!sdmybriefcase()){return true
}});
$(".briefcase-share-email a").click(function(a){a.stopImmediatePropagation();
$(this).tab("show")
});
angular.module("FeedReaderApp",[]).controller("FeedReaderController",["$scope","FeedService","$sce",function(b,c,a){b.init=function(g,d,f){c.parseFeed(g,d,f).then(function(h){b.feeds=h.data
})
};
b.wcmImagePath="";
b.wcmImageExists=function(g){var f=document.createElement("div");
f.innerHTML=g;
var d=f.getElementsByTagName("img");
b.wcmImagePath=(d&&d.length>0)?d[0].src:null;
return(b.wcmImagePath)?true:false
};
b.getUnEscapedHTMLContent=function(d){d=angular.element("<div/>").html(d).text();
return a.trustAsHtml(d)
};
b.getFormattedDate=function(d){return new Date(d)
};
b.getCategoriesAsString=function(d){var h="";
if(d&&d.length>0){for(var f=0;
f<d.length;
f++){var g=b.getUnEscapedHTMLContent(d[f]);
h+="&nbsp;"+g+","
}h=h.substr(0,h.length-1)
}return h
}
}]).factory("FeedService",["$http",function(a){return{parseFeed:function(c,d,b){d=((d)&&(d!=""))?d:"5";
b=((b)&&(b!=""))?b:"120";
return a({url:"//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'"+encodeURIComponent(c)+"'&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK",method:"JSONP",transformResponse:function(l,m,j){if(j==200){var n=l.results[0];
if(n){var g=new DOMParser();
var q=g.parseFromString(n,"text/xml");
var p=q.getElementsByTagName("item");
var o=[];
for(var k=0;
k<p.length;
k++){if(k>=d){break
}var h=getValueFromTag(p[k],"description");
var f=angular.element("<div/>").html(h).text();
o.push({title:getValueFromTag(p[k],"title"),link:getValueFromTag(p[k],"link"),author:getAuthorValue(p[k]),source:getValueFromTag(p[k],"source"),publishedDate:getValueFromTag(p[k],"pubDate"),content:h,contentSnippet:getEllipsis(f,b),categories:getMultiValueFromTag(p[k],"category")})
}return o
}}}})
}}
}]);
function getEllipsis(b,a){if(b&&b.length>a){return b.substring(0,a)+"..."
}return b
}function getMultiValueFromTag(f,c,d){var a=[];
if(f.getElementsByTagName(c).length>0){for(var b=0;
b<f.getElementsByTagName(c).length;
b++){if(d==="html"){a.push(f.getElementsByTagName(c)[b].innerHTML)
}else{a.push(f.getElementsByTagName(c)[b].textContent)
}}}return a
}function getAuthorValue(b){var a=getValueFromTag(b,"author");
if(a==""){a=getValueFromTagNS(b,"creator","http://purl.org/dc/elements/1.1/")
}return a
}function getValueFromTagNS(d,a,c,b){if(d.getElementsByTagNameNS(c,a).length>0){if(b==="html"){return d.getElementsByTagNameNS(c,a)[0].innerHTML
}else{return d.getElementsByTagNameNS(c,a)[0].textContent
}}return""
}function getValueFromTag(c,a,b){if(c.getElementsByTagName(a).length>0){if(b==="html"){return c.getElementsByTagName(a)[0].innerHTML
}else{return c.getElementsByTagName(a)[0].textContent
}}return""
}angular.element(document).ready(function(){var a=document.getElementsByClassName("feedreadercomp");
for(var b=0;
b<a.length;
b++){angular.bootstrap(document.getElementById(a[b].id+"_feedReaderAngularAppId"),["FeedReaderApp"])
}});
(function(){function b3(b,a){return b.set(a[0],a[1]),b
}function bV(b,a){return b.add(a),b
}function bY(d,a,b){var c=b.length;
switch(c){case 0:return d.call(a);
case 1:return d.call(a,b[0]);
case 2:return d.call(a,b[0],b[1]);
case 3:return d.call(a,b[0],b[1],b[2])
}return d.apply(a,b)
}function ch(h,c,d,f){for(var a=-1,b=h.length;
++a<b;
){var g=h[a];
c(f,g,d(g),h)
}return f
}function bU(d,a){for(var b=-1,c=d.length;
++b<c&&a(d[b],b,d)!==!1;
){}return d
}function cb(c,a){for(var b=c.length;
b--&&a(c[b],b,c)!==!1;
){}return c
}function b2(d,a){for(var b=-1,c=d.length;
++b<c;
){if(!a(d[b],b,d)){return !1
}}return !0
}function cf(h,c){for(var d=-1,f=h.length,a=0,b=[];
++d<f;
){var g=h[d];
c(g,d,h)&&(b[a++]=g)
}return b
}function cl(b,a){return !!b.length&&bO(b,a,0)>-1
}function cj(f,b,c){for(var d=-1,a=f.length;
++d<a;
){if(c(b,f[d])){return !0
}}return !1
}function b7(f,b){for(var c=-1,d=f.length,a=Array(d);
++c<d;
){a[c]=b(f[c],c,f)
}return a
}function bW(f,b){for(var c=-1,d=b.length,a=f.length;
++c<d;
){f[a+c]=b[c]
}return f
}function cc(g,c,d,f){var a=-1,b=g.length;
for(f&&b&&(d=g[++a]);
++a<b;
){d=c(d,g[a],a,g)
}return d
}function b1(f,b,c,d){var a=f.length;
for(d&&a&&(c=f[--a]);
a--;
){c=b(c,f[a],a,f)
}return c
}function bT(d,a){for(var b=-1,c=d.length;
++b<c;
){if(a(d[b],b,d)){return !0
}}return !1
}function cm(f,b,c,d){var a;
return c(f,function(j,h,g){return b(j,h,g)?(a=d?h:j,!1):void 0
}),a
}function ce(f,b,c){for(var d=f.length,a=c?d:-1;
c?a--:++a<d;
){if(b(f[a],a,f)){return a
}}return -1
}function bO(f,b,c){if(b!==b){return bN(f,c)
}for(var d=c-1,a=f.length;
++d<a;
){if(f[d]===b){return d
}}return -1
}function ci(g,c,d,f){for(var a=d-1,b=g.length;
++a<b;
){if(f(g[a],c)){return a
}}return -1
}function ck(c,a){var b=c?c.length:0;
return b?bQ(c,a)/b:dg
}function bS(f,b,c,d,a){return a(f,function(j,g,h){c=d?(d=!1,j):b(c,j,g,h)
}),c
}function b5(c,a){var b=c.length;
for(c.sort(a);
b--;
){c[b]=c[b].value
}return c
}function bQ(g,c){for(var d,f=-1,a=g.length;
++f<a;
){var b=c(g[f]);
b!==cx&&(d=d===cx?b:d+b)
}return d
}function b9(d,a){for(var b=-1,c=Array(d);
++b<d;
){c[b]=a(b)
}return c
}function c6(b,a){return b7(a,function(c){return[c,b[c]]
})
}function cJ(a){return function(b){return a(b)
}
}function b8(b,a){return b7(a,function(c){return b[c]
})
}function cT(b,a){return b.has(a)
}function cD(d,a){for(var b=-1,c=d.length;
++b<c&&bO(a,d[b],0)>-1;
){}return b
}function cZ(c,a){for(var b=c.length;
b--&&bO(a,c[b],0)>-1;
){}return b
}function cw(a){return a&&a.Object===Object?a:null
}function cC(d,a){for(var b=d.length,c=0;
b--;
){d[b]===a&&c++
}return c
}function cP(a){return aw[a]
}function c3(a){return bd[a]
}function c5(a){return"\\"+cI[a]
}function bN(g,c,d){for(var f=g.length,a=c+(d?0:-1);
d?a--:++a<f;
){var b=g[a];
if(b!==b){return a
}}return -1
}function dj(c){var a=!1;
if(null!=c&&"function"!=typeof c.toString){try{a=!!(c+"")
}catch(b){}}return a
}function cy(c){for(var a,b=[];
!(a=c.next()).done;
){b.push(a.value)
}return b
}function cY(c){var a=-1,b=Array(c.size);
return c.forEach(function(f,d){b[++a]=[d,f]
}),b
}function cN(h,c){for(var d=-1,f=h.length,a=0,b=[];
++d<f;
){var g=h[d];
g!==c&&g!==cV||(h[d]=cV,b[a++]=d)
}return b
}function c1(c){var a=-1,b=Array(c.size);
return c.forEach(function(d){b[++a]=d
}),b
}function cH(c){var a=-1,b=Array(c.size);
return c.forEach(function(d){b[++a]=[d,d]
}),b
}function cL(b){if(!b||!dk.test(b)){return b.length
}for(var a=ab.lastIndex=0;
ab.test(b);
){a++
}return a
}function bZ(a){return a.match(ab)
}function cz(a){return aU[a]
}function cp(lB){function fZ(W){if(jO(W)&&!gk(W)&&!(W instanceof dS)){if(W instanceof kz){return W
}if(N.call(W,"__wrapped__")){return j7(W)
}}return new kz(W)
}function hN(){}function kz(ar,W){this.__wrapped__=ar,this.__actions__=[],this.__chain__=!!W,this.__index__=0,this.__values__=cx
}function dS(W){this.__wrapped__=W,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=dB,this.__views__=[]
}function eh(){var W=new dS(this.__wrapped__);
return W.__actions__=gN(this.__actions__),W.__dir__=this.__dir__,W.__filtered__=this.__filtered__,W.__iteratees__=gN(this.__iteratees__),W.__takeCount__=this.__takeCount__,W.__views__=gN(this.__views__),W
}function lU(){if(this.__filtered__){var W=new dS(this);
W.__dir__=-1,W.__filtered__=!0
}else{W=this.clone(),W.__dir__*=-1
}return W
}function gH(){var eo=this.__wrapped__.value(),ec=this.__dir__,ef=gk(eo),fe=0>ec,ea=ef?eo.length:0,es=j2(0,ea,this.__views__),el=es.start,fc=es.end,fo=fc-el,fi=fe?fc:el-1,er=this.__iteratees__,ee=er.length,eu=0,ei=eX(fo,this.__takeCount__);
if(!ef||cW>ea||ea==fo&&ei==fo){return l8(eo,this.__actions__)
}var cr=[];
eo:for(;
fo--&&ei>eu;
){fi+=ec;
for(var fr=-1,fa=eo[fi];
++fr<ee;
){var W=er[fr],ff=W.iteratee,fl=W.type,ar=ff(fa);
if(fl==a4){fa=ar
}else{if(!ar){if(fl==ac){continue eo
}break eo
}}}cr[eu++]=fa
}return cr
}function gX(ea){var W=-1,ar=ea?ea.length:0;
for(this.clear();
++W<ar;
){var cr=ea[W];
this.set(cr[0],cr[1])
}}function o(){this.__data__=e9?e9(null):{}
}function j4(W){return this.has(W)&&delete this.__data__[W]
}function cn(cr){var W=this.__data__;
if(e9){var ar=W[cr];
return ar===cs?cx:ar
}return N.call(W,cr)?W[cr]:cx
}function iW(ar){var W=this.__data__;
return e9?W[ar]!==cx:N.call(W,ar)
}function jJ(cr,W){var ar=this.__data__;
return ar[cr]=e9&&W===cx?cs:W,this
}function fA(ea){var W=-1,ar=ea?ea.length:0;
for(this.clear();
++W<ar;
){var cr=ea[W];
this.set(cr[0],cr[1])
}}function hp(){this.__data__=[]
}function eF(ea){var W=this.__data__,ar=h(W,ea);
if(0>ar){return !1
}var cr=W.length-1;
return ar==cr?W.pop():hd.call(W,ar,1),!0
}function gr(cr){var W=this.__data__,ar=h(W,cr);
return 0>ar?cx:W[ar][1]
}function kR(W){return h(this.__data__,W)>-1
}function mI(ea,W){var ar=this.__data__,cr=h(ar,ea);
return 0>cr?ar.push([ea,W]):ar[cr][1]=W,this
}function lg(ea){var W=-1,ar=ea?ea.length:0;
for(this.clear();
++W<ar;
){var cr=ea[W];
this.set(cr[0],cr[1])
}}function fb(){this.__data__={hash:new gX,map:new (iO||fA),string:new gX}
}function mb(W){return dQ(this,W)["delete"](W)
}function iC(W){return dQ(this,W).get(W)
}function fG(W){return dQ(this,W).has(W)
}function gQ(ar,W){return dQ(this,ar).set(ar,W),this
}function d5(cr){var W=-1,ar=cr?cr.length:0;
for(this.__data__=new lg;
++W<ar;
){this.add(cr[W])
}}function e5(W){return this.__data__.set(W,cs),this
}function kv(W){return this.__data__.has(W)
}function dK(W){this.__data__=new fA(W)
}function iS(){this.__data__=new fA
}function gm(W){return this.__data__["delete"](W)
}function j0(W){return this.__data__.get(W)
}function l3(W){return this.__data__.has(W)
}function k8(cr,W){var ar=this.__data__;
return ar instanceof fA&&ar.__data__.length==cW&&(ar=this.__data__=new lg(ar.__data__)),ar.set(cr,W),this
}function hJ(ea,W,ar,cr){return ea===cx||iF(ea,mK[ar])&&!N.call(cr,ar)?W:ea
}function eA(cr,W,ar){(ar===cx||iF(cr[W],ar))&&("number"!=typeof W||ar!==cx||W in cr)||(cr[W]=ar)
}function jg(ea,W,ar){var cr=ea[W];
N.call(ea,W)&&iF(cr,ar)&&(ar!==cx||W in ea)||(ea[W]=ar)
}function h(cr,W){for(var ar=cr.length;
ar--;
){if(iF(cr[ar][0],W)){return ar
}}return -1
}function iy(ea,W,ar,cr){return an(ea,function(ef,ec,ee){W(cr,ef,ar(ef),ee)
}),cr
}function eQ(ar,W){return ar&&d1(W,en(W),ar)
}function jn(ee,cr){for(var ea=-1,ec=null==ee,W=cr.length,ar=Array(W);
++ea<W;
){ar[ea]=ec?cx:iM(ee,cr[ea])
}return ar
}function h4(cr,W,ar){return cr===cr&&(ar!==cx&&(cr=ar>=cr?cr:ar),W!==cx&&(cr=cr>=W?cr:W)),cr
}function lI(ea,es,W,el,ee,cr,ei){var er;
if(el&&(er=cr?el(ea,ee,cr,ei):el(ea)),er!==cx){return er
}if(!u(ea)){return ea
}var eo=gk(ea);
if(eo){if(er=iU(ea),!es){return gN(ea,er)
}}else{var ec=l(ea),eu=ec==bM||ec==dA;
if(jZ(ea)){return jV(ea,es)
}if(ec==a3||ec==aX||eu&&!cr){if(dj(ea)){return cr?ea:{}
}if(er=jH(eu?{}:ea),!es){return e1(ea,eQ(er,ea))
}}else{if(!dz[ec]){return cr?ea:{}
}er=fz(ea,ec,lI,es)
}}ei||(ei=new dK);
var ef=ei.get(ea);
if(ef){return ef
}if(ei.set(ea,er),!eo){var ar=W?h6(ea):en(ea)
}return bU(ar||ea,function(fa,fc){ar&&(fc=fa,fa=ea[fc]),jg(er,fc,lI(fa,es,W,el,fc,ea,ei))
}),er
}function f1(cr){var W=en(cr),ar=W.length;
return function(ef){if(null==ef){return !ar
}for(var ea=ar;
ea--;
){var ec=W[ea],ei=cr[ec],ee=ef[ec];
if(ee===cx&&!(ec in Object(ef))||!ei(ee)){return !1
}}return !0
}
}function hP(W){return u(W)?ez(W):{}
}function dV(cr,W,ar){if("function"!=typeof cr){throw new x(cS)
}return gZ(function(){cr.apply(cx,ar)
},W)
}function em(ea,es,W,ei){var er=-1,ec=cl,cr=!0,ef=ea.length,eu=[],ee=es.length;
if(!ef){return eu
}W&&(es=b7(es,cJ(W))),ei?(ec=cj,cr=!1):es.length>=cW&&(ec=cT,cr=!1,es=new d5(es));
ea:for(;
++er<ef;
){var ar=ea[er],eo=W?W(ar):ar;
if(ar=ei||0!==ar?ar:0,cr&&eo===eo){for(var el=ee;
el--;
){if(es[el]===eo){continue ea
}}eu.push(ar)
}else{ec(es,eo,ei)||eu.push(ar)
}}return eu
}function lX(cr,W){var ar=!0;
return an(cr,function(ee,ec,ea){return ar=!!W(ee,ec,ea)
}),ar
}function gK(cr,el,W){for(var ee=-1,ei=cr.length;
++ee<ei;
){var ea=cr[ee],ar=el(ea);
if(null!=ar&&(ec===cx?ar===ar&&!gb(ar):W(ar,ec))){var ec=ar,ef=ea
}}return ef
}function j6(ec,ar,cr,ea){var W=ec.length;
for(cr=g9(cr),0>cr&&(cr=-cr>W?0:W+cr),ea=ea===cx||ea>W?W:g9(ea),0>ea&&(ea+=W),ea=cr>ea?0:A(ea);
ea>cr;
){ec[cr++]=ar
}return ec
}function dr(cr,W){var ar=[];
return an(cr,function(ee,ec,ea){W(ee,ec,ea)&&ar.push(ee)
}),ar
}function iY(ei,cr,ea,ee,W){var ar=-1,ef=ei.length;
for(ea||(ea=eD),W||(W=[]);
++ar<ef;
){var ec=ei[ar];
cr>0&&ea(ec)?cr>1?iY(ec,cr-1,ea,ee,W):bW(W,ec):ee||(W[W.length]=ec)
}return W
}function jL(ar,W){return ar&&jI(ar,W,en)
}function fC(ar,W){return ar&&mD(ar,W,en)
}function ht(ar,W){return cf(W,function(cr){return jt(ar[cr])
})
}function eH(ea,W){W=lb(W,ea)?[W]:dH(W);
for(var ar=0,cr=W.length;
null!=ea&&cr>ar;
){ea=ea[iZ(W[ar++])]
}return ar&&ar==cr?ea:cx
}function gv(ea,W,ar){var cr=W(ea);
return gk(ea)?cr:bW(cr,ar(ea))
}function kT(ar,W){return ar>W
}function mL(ar,W){return N.call(ar,W)||"object"==typeof ar&&W in ar&&null===gF(ar)
}function lj(ar,W){return W in Object(ar)
}function fg(cr,W,ar){return cr>=eX(W,ar)&&cr<hF(W,ar)
}function mh(ea,fc,W){for(var el=W?cj:cl,fa=ea[0].length,ec=ea.length,cr=ec,ei=Array(ec),fe=1/0,ee=[];
cr--;
){var ar=ea[cr];
cr&&fc&&(ar=b7(ar,cJ(fc))),fe=eX(ar.length,fe),ei[cr]=!W&&(fc||fa>=120&&ar.length>=120)?new d5(cr&&ar):cx
}ar=ea[0];
var eu=-1,es=ei[0];
ea:for(;
++eu<fa&&ee.length<fe;
){var ef=ar[eu],er=fc?fc(ef):ef;
if(ef=W||0!==ef?ef:0,!(es?cT(es,er):el(ee,er,W))){for(cr=ec;
--cr;
){var eo=ei[cr];
if(!(eo?cT(eo,er):el(ea[cr],er,W))){continue ea
}}es&&es.push(er),ee.push(ef)
}}return ee
}function iD(ea,W,ar,cr){return jL(ea,function(ef,ec,ee){W(cr,ar(ef),ec,ee)
}),cr
}function fH(ea,ar,cr){lb(ar,ea)||(ar=dH(ar),ea=kB(ea,ar),ar=h9(ar));
var W=null==ea?ea:ea[iZ(ar)];
return null==W?cx:bY(W,ea,cr)
}function g4(ec,ar,cr,ea,W){return ec===ar?!0:null==ec||null==ar||!u(ec)&&!jO(ar)?ec!==ec&&ar!==ar:eg(ec,ar,g4,cr,ea,W)
}function eg(ea,fe,W,eo,fc,ee){var cr=gk(ea),el=gk(fe),es=ai,er=ai;
cr||(es=l(ea),es=es==aX?a3:es),el||(er=l(fe),er=er==aX?a3:er);
var ec=es==a3&&!dj(ea),ff=er==a3&&!dj(fe),ef=es==er;
if(ef&&!ec){return ee||(ee=new dK),cr||hY(ea)?jj(ea,fe,W,eo,fc,ee):h2(ea,fe,es,W,eo,fc,ee)
}if(!(fc&dv)){var ar=ec&&N.call(ea,"__wrapped__"),fa=ff&&N.call(fe,"__wrapped__");
if(ar||fa){var eu=ar?ea.value():ea,ei=fa?fe.value():fe;
return ee||(ee=new dK),W(eu,ei,eo,fc,ee)
}}return ef?(ee||(ee=new dK),lF(ea,fe,W,eo,fc,ee)):!1
}function fm(cr,es,W,ei){var er=W.length,ec=er,ar=!ei;
if(null==cr){return !ec
}for(cr=Object(cr);
er--;
){var ef=W[er];
if(ar&&ef[2]?ef[1]!==cr[ef[0]]:!(ef[0] in cr)){return !1
}}for(;
++er<ec;
){ef=W[er];
var eo=ef[0],el=cr[eo],ea=ef[1];
if(ar&&ef[2]){if(el===cx&&!(eo in cr)){return !1
}}else{var eu=new dK;
if(ei){var ee=ei(el,ea,eo,cr,es,eu)
}if(!(ee===cx?g4(ea,el,ei,bX|dv,eu):ee)){return !1
}}}return !0
}function kE(W){return"function"==typeof W?W:null==W?hG:"object"==typeof W?gk(W)?lp(W[0],W[1]):mp(W):iP(W)
}function dR(W){return fN(Object(W))
}function i1(cr){cr=null==cr?cr:Object(cr);
var W=[];
for(var ar in cr){W.push(ar)
}return W
}function gz(ar,W){return W>ar
}function kb(ea,W){var ar=-1,cr=eb(ea)?Array(ea.length):[];
return an(ea,function(ef,ec,ee){cr[++ar]=W(ef,ec,ee)
}),cr
}function mp(ar){var W=ed(ar);
return 1==W.length&&W[0][2]?g0(W[0][0],W[0][1]):function(cr){return cr===ar||fm(cr,ar,W)
}
}function lp(ar,W){return lb(ar)&&fE(W)?g0(iZ(ar),W):function(cr){var ea=iM(cr,ar);
return ea===cx&&ea===W?g7(cr,ar):g4(W,ea,cx,bX|dv)
}
}function hT(ee,ar,cr,ea,W){if(ee!==ar){if(!gk(ar)&&!hY(ar)){var ec=fq(ar)
}bU(ec||ar,function(ei,el){if(ec&&(el=ei,ei=ar[el]),u(ei)){W||(W=new dK),eM(ee,ar,el,cr,hT,ea,W)
}else{var ef=ea?ea(ee[el],ei,el+"",ee,ar,W):cx;
ef===cx&&(ef=ei),eA(ee,el,ef)
}})
}}function eM(cr,er,W,ef,eo,ec,ar){var ee=cr[W],el=er[W],ei=ar.get(el);
if(ei){return void eA(cr,W,ei)
}var ea=ec?ec(ee,el,W+"",cr,er,ar):cx,es=ea===cx;
es&&(ea=el,gk(el)||hY(el)?gk(ee)?ea=ee:fk(ee)?ea=gN(ee):(es=!1,ea=lI(el,!0)):jA(el)||fJ(el)?fJ(ee)?ea=dF(ee):!u(ee)||ef&&jt(ee)?(es=!1,ea=lI(el,!0)):ea=ee:es=!1),ar.set(el,ea),es&&eo(ea,el,ef,ec,ar),ar["delete"](el),eA(cr,W,ea)
}function jv(cr,W){var ar=cr.length;
if(ar){return W+=0>W?ar:0,kP(W,ar)?cr[W]:cx
}}function f5(ec,ar,cr){var ea=-1;
ar=b7(ar.length?ar:[hG],cJ(kx()));
var W=kb(ec,function(el,ei,ee){var ef=b7(ar,function(eo){return eo(el)
});
return{criteria:ef,index:++ea,value:el}
});
return b5(W,function(ef,ee){return my(ef,ee,cr)
})
}function bt(ar,W){return ar=Object(ar),cc(W,function(cr,ea){return ea in ar&&(cr[ea]=ar[ea]),cr
},{})
}function v(ei,cr){for(var ea=-1,ee=K(ei),W=ee.length,ar={};
++ea<W;
){var ef=ee[ea],ec=ei[ef];
cr(ec,ef)&&(ar[ef]=ec)
}return ar
}function jP(W){return function(ar){return null==ar?cx:ar[W]
}
}function mH(W){return function(ar){return eH(ar,W)
}
}function kX(cr,eo,W,ee){var el=ee?ci:bO,ea=-1,ar=eo.length,ec=cr;
for(W&&(ec=b7(cr,cJ(W)));
++ea<ar;
){for(var ei=0,ef=eo[ea],er=W?W(ef):ef;
(ei=el(ec,er,ei,ee))>-1;
){ec!==cr&&hd.call(ec,ei,1),hd.call(cr,ei,1)
}}return cr
}function lM(ei,cr){for(var ea=ei?cr.length:0,ee=ea-1;
ea--;
){var W=cr[ea];
if(ea==ee||W!==ar){var ar=W;
if(kP(W)){hd.call(ei,W,1)
}else{if(lb(W,ei)){delete ei[iZ(W)]
}else{var ef=dH(W),ec=kB(ei,ef);
null!=ec&&delete ec[iZ(h9(ef))]
}}}}return ei
}function L(ar,W){return ar+kn(k4()*(W-ar+1))
}function hy(ef,cr,ea,ec){for(var W=-1,ar=hF(E((cr-ef)/(ea||1)),0),ee=Array(ar);
ar--;
){ee[ec?ar:++W]=ef,ef+=ea
}return ee
}function m(cr,W){var ar="";
if(!cr||1>W||W>cA){return ar
}do{W%2&&(ar+=cr),W=kn(W/2),W&&(cr+=cr)
}while(W);
return ar
}function iH(cr,er,W,ef){er=lb(er,cr)?[er]:dH(er);
for(var eo=-1,ec=er.length,ar=ec-1,ee=cr;
null!=ee&&++eo<ec;
){var el=iZ(er[eo]);
if(u(ee)){var ei=W;
if(eo!=ar){var ea=ee[el];
ei=ef?ef(ea,el,ee):cx,ei===cx&&(ei=null==ea?kP(er[eo+1])?[]:{}:ea)
}jg(ee,el,ei)
}ee=ee[el]
}return cr
}function e2(ee,cr,ea){var ec=-1,W=ee.length;
0>cr&&(cr=-cr>W?0:W+cr),ea=ea>W?W:ea,0>ea&&(ea+=W),W=cr>ea?0:ea-cr>>>0,cr>>>=0;
for(var ar=Array(W);
++ec<W;
){ar[ec]=ee[ec+cr]
}return ar
}function jB(cr,W){var ar;
return an(cr,function(ee,ec,ea){return ar=W(ee,ec,ea),!ar
}),!!ar
}function ig(ef,cr,ea){var ec=0,W=ef?ef.length:ec;
if("number"==typeof cr&&cr===cr&&bg>=W){for(;
W>ec;
){var ar=ec+W>>>1,ee=ef[ar];
null!==ee&&!gb(ee)&&(ea?cr>=ee:cr>ee)?ec=ar+1:W=ar
}return W
}return lT(ef,cr,hG,ea)
}function lT(ea,fe,W,eo){fe=W(fe);
for(var fc=0,ee=ea?ea.length:0,cr=fe!==fe,el=null===fe,es=gb(fe),er=fe===cx;
ee>fc;
){var ec=kn((fc+ee)/2),ff=W(ea[ec]),ef=ff!==cx,ar=null===ff,fa=ff===ff,eu=gb(ff);
if(cr){var ei=eo||fa
}else{ei=er?fa&&(eo||ef):el?fa&&ef&&(eo||!ar):es?fa&&ef&&!ar&&(eo||!eu):ar||eu?!1:eo?fe>=ff:fe>ff
}ei?fc=ec+1:ee=ec
}return eX(ee,ay)
}function iq(cr,el){for(var W=-1,ee=cr.length,ei=0,ea=[];
++W<ee;
){var ar=cr[W],ec=el?el(ar):ar;
if(!W||!iF(ec,ef)){var ef=ec;
ea[ei++]=0===ar?0:ar
}}return ea
}function U(W){return"number"==typeof W?W:gb(W)?dg:+W
}function gd(ar){if("string"==typeof ar){return ar
}if(gb(ar)){return fY?fY.call(ar):""
}var W=ar+"";
return"0"==W&&1/ar==-bE?"-0":W
}function hZ(ea,es,W){var el=-1,er=cl,ee=ea.length,cr=!0,ei=[],ec=ei;
if(W){cr=!1,er=cj
}else{if(ee>=cW){var eu=es?null:lG(ea);
if(eu){return c1(eu)
}cr=!1,er=cT,ec=new d5
}else{ec=es?[]:ei
}}ea:for(;
++el<ee;
){var ef=ea[el],ar=es?es(ef):ef;
if(ef=W||0!==ef?ef:0,cr&&ar===ar){for(var eo=ec.length;
eo--;
){if(ec[eo]===ar){continue ea
}}es&&ec.push(ar),ei.push(ef)
}else{er(ec,ar,W)||(ec!==ei&&ec.push(ar),ei.push(ef))
}}return ei
}function kK(cr,W){W=lb(W,cr)?[W]:dH(W),cr=kB(cr,W);
var ar=iZ(h9(W));
return !(null!=cr&&mL(cr,ar))||delete cr[ar]
}function d2(ea,W,ar,cr){return iH(ea,W,ar(eH(ea,W)),cr)
}function ex(ee,cr,ea,ec){for(var W=ee.length,ar=ec?W:-1;
(ec?ar--:++ar<W)&&cr(ee[ar],ar,ee);
){}return ea?e2(ee,ec?0:ar,ec?ar+1:W):e2(ee,ec?ar+1:0,ec?W:ar)
}function l8(cr,W){var ar=cr;
return ar instanceof dS&&(ar=ar.value()),cc(W,function(ec,ea){return ea.func.apply(ea.thisArg,bW([ec],ea.args))
},ar)
}function gW(ee,cr,ea){for(var ec=-1,W=ee.length;
++ec<W;
){var ar=ar?bW(em(ar,ee[ec],cr,ea),em(ee[ec],ar,cr,ea)):ee[ec]
}return ar&&ar.length?hZ(ar,cr,ea):[]
}function hb(ei,cr,ea){for(var ee=-1,W=ei.length,ar=cr.length,ef={};
++ee<W;
){var ec=ar>ee?cr[ee]:cx;
ea(ef,ei[ee],ec)
}return ef
}function C(W){return fk(W)?W:[]
}function km(W){return"function"==typeof W?W:hG
}function dH(W){return gk(W)?W:eW(W)
}function i7(ea,W,ar){var cr=ea.length;
return ar=ar===cx?cr:ar,!W&&ar>=cr?ea:e2(ea,W,ar)
}function jV(cr,W){if(W){return cr.slice()
}var ar=new cr.constructor(cr.length);
return cr.copy(ar),ar
}function fL(ar){var W=new ar.constructor(ar.byteLength);
return new X(W).set(new X(ar)),W
}function hE(cr,W){var ar=W?fL(cr.buffer):cr.buffer;
return new cr.constructor(ar,cr.byteOffset,cr.byteLength)
}function eV(ar,cr,ea){var W=cr?ea(cY(ar),!0):cY(ar);
return cc(W,b3,new ar.constructor)
}function gG(ar){var W=new ar.constructor(ar.source,al.exec(ar));
return W.lastIndex=ar.lastIndex,W
}function k3(ea,ar,cr){var W=ar?cr(c1(ea),!0):c1(ea);
return cc(W,bV,new ea.constructor)
}function mS(W){return jk?Object(jk.call(W)):{}
}function ly(cr,W){var ar=W?fL(cr.buffer):cr.buffer;
return new cr.constructor(ar,cr.byteOffset,cr.length)
}function fw(cr,eo){if(cr!==eo){var W=cr!==cx,ee=null===cr,el=cr===cr,ea=gb(cr),ar=eo!==cx,ec=null===eo,ei=eo===eo,ef=gb(eo);
if(!ec&&!ef&&!ea&&cr>eo||ea&&ar&&ei&&!ec&&!ef||ee&&ar&&ei||!W&&ei||!el){return 1
}if(!ee&&!ea&&!ef&&eo>cr||ef&&W&&el&&!ee&&!ea||ec&&W&&el||!ar&&el||!ei){return -1
}}return 0
}function my(cr,eo,W){for(var ee=-1,el=cr.criteria,ea=eo.criteria,ar=el.length,ec=W.length;
++ee<ar;
){var ei=fw(el[ee],ea[ee]);
if(ei){if(ee>=ec){return ei
}var ef=W[ee];
return ei*("desc"==ef?-1:1)
}}return cr.index-eo.index
}function iN(cr,er,W,ef){for(var eo=-1,ec=cr.length,ar=W.length,ee=-1,el=er.length,ei=hF(ec-ar,0),ea=Array(el+ei),es=!ef;
++ee<el;
){ea[ee]=er[ee]
}for(;
++eo<ar;
){(es||ec>eo)&&(ea[W[eo]]=cr[eo])
}for(;
ei--;
){ea[ee++]=cr[eo++]
}return ea
}function fR(ea,eu,W,el){for(var es=-1,ee=ea.length,cr=-1,ei=W.length,er=-1,eo=eu.length,ec=hF(ee-ei,0),fa=Array(ec+eo),ef=!el;
++es<ec;
){fa[es]=ea[es]
}for(var ar=es;
++er<eo;
){fa[ar+er]=eu[er]
}for(;
++cr<ei;
){(ef||ee>es)&&(fa[ar+W[cr]]=ea[es++])
}return fa
}function gN(ea,W){var ar=-1,cr=ea.length;
for(W||(W=Array(cr));
++ar<cr;
){W[ar]=ea[ar]
}return W
}function d1(ei,cr,ea,ee){ea||(ea={});
for(var W=-1,ar=cr.length;
++W<ar;
){var ef=cr[W],ec=ee?ee(ea[ef],ei[ef],ef,ea,ei):ei[ef];
jg(ea,ef,ec)
}return ea
}function e1(ar,W){return d1(ar,gU(ar),W)
}function kq(ar,W){return function(ec,cr){var ea=gk(ec)?ch:iy,ee=W?W():{};
return ea(ec,ar,kx(cr),ee)
}
}function dG(W){return jN(function(ea,ec){var ef=-1,ar=ec.length,cr=ar>1?ec[ar-1]:cx,ei=ar>2?ec[2]:cx;
for(cr=W.length>3&&"function"==typeof cr?(ar--,cr):cx,ei&&mG(ec[0],ec[1],ei)&&(cr=3>ar?cx:cr,ar=1),ea=Object(ea);
++ef<ar;
){var ee=ec[ef];
ee&&W(ea,ee,ef,cr)
}return ea
})
}function iQ(ar,W){return function(ec,ee){if(null==ec){return ec
}if(!eb(ec)){return ar(ec,ee)
}for(var cr=ec.length,ea=W?cr:-1,ef=Object(ec);
(W?ea--:++ea<cr)&&ee(ef[ea],ea,ef)!==!1;
){}return ec
}
}function gj(W){return function(ec,ee,ei){for(var cr=-1,ea=Object(ec),el=ei(ec),ef=el.length;
ef--;
){var ar=el[W?ef:++cr];
if(ee(ea[ar],ar,ea)===!1){break
}}return ec
}
}function jY(ee,cr,ea){function ec(){var ef=this&&this!==c0&&this instanceof ec?ar:ee;
return ef.apply(W?ea:this,arguments)
}var W=cr&cF,ar=hH(ee);
return ec
}function l0(W){return function(cr){cr=jU(cr);
var ea=dk.test(cr)?bZ(cr):cx,ec=ea?ea[0]:cr.charAt(0),ar=ea?i7(ea,1).join(""):cr.slice(1);
return ec[W]()+ar
}
}function k6(W){return function(ar){return cc(dL(O(ar).replace(bH,"")),W,"")
}
}function hH(W){return function(){var ar=arguments;
switch(ar.length){case 0:return new W;
case 1:return new W(ar[0]);
case 2:return new W(ar[0],ar[1]);
case 3:return new W(ar[0],ar[1],ar[2]);
case 4:return new W(ar[0],ar[1],ar[2],ar[3]);
case 5:return new W(ar[0],ar[1],ar[2],ar[3],ar[4]);
case 6:return new W(ar[0],ar[1],ar[2],ar[3],ar[4],ar[5]);
case 7:return new W(ar[0],ar[1],ar[2],ar[3],ar[4],ar[5],ar[6])
}var cr=hP(W.prototype),ea=W.apply(cr,ar);
return u(ea)?ea:cr
}
}function ew(ec,cr,ea){function W(){for(var eo=arguments.length,el=Array(eo),ef=eo,er=hL(W);
ef--;
){el[ef]=arguments[ef]
}var ee=3>eo&&el[0]!==er&&el[eo-1]!==er?[]:cN(el,er);
if(eo-=ee.length,ea>eo){return hh(ec,cr,fU,W.placeholder,cx,el,ee,cx,cx,ea-eo)
}var ei=this&&this!==c0&&this instanceof W?ar:ec;
return bY(ei,this,el)
}var ar=hH(ec);
return W
}function jb(W){return jN(function(ec){ec=iY(ec,1);
var ee=ec.length,ei=ee,cr=kz.prototype.thru;
for(W&&ec.reverse();
ei--;
){var ea=ec[ei];
if("function"!=typeof ea){throw new x(cS)
}if(cr&&!el&&"wrapper"==fX(ea)){var el=new kz([],!0)
}}for(ei=el?ei:ee;
++ei<ee;
){ea=ec[ei];
var ef=fX(ea),ar="wrapper"==ef?H(ea):cx;
el=ar&&l7(ar[0])&&ar[1]==(cd|aY|bu|bh)&&!ar[4].length&&1==ar[9]?el[fX(ar[0])].apply(el,ar[3]):1==ea.length&&l7(ea)?el[ef]():el.thru(ea)
}return function(){var eu=arguments,es=eu[0];
if(el&&1==eu.length&&gk(es)&&es.length>=cW){return el.plant(es).value()
}for(var eo=0,er=ee?ec[eo].apply(this,eu):es;
++eo<ee;
){er=ec[eo].call(this,er)
}return er
}
})
}function fU(ea,fe,W,eo,fc,ee,cr,el,es,er){function ec(){for(var gc=arguments.length,ga=Array(gc),fr=gc;
fr--;
){ga[fr]=arguments[fr]
}if(fa){var fs=hL(ec),fo=cC(ga,fs)
}if(eo&&(ga=iN(ga,eo,fc,fa)),ee&&(ga=fR(ga,ee,cr,fa)),gc-=fo,fa&&er>gc){var fl=cN(ga,fs);
return hh(ea,fe,fU,ec.placeholder,W,ga,fl,el,es,er-gc)
}var fu=ef?W:this,fi=ar?fu[ea]:ea;
return gc=ga.length,el?ga=dO(ga,el):eu&&gc>1&&ga.reverse(),ff&&gc>es&&(ga.length=es),this&&this!==c0&&this instanceof ec&&(fi=ei||hH(fi)),fi.apply(fu,ga)
}var ff=fe&cd,ef=fe&cF,ar=fe&cv,fa=fe&(aY|bm),eu=fe&db,ei=ar?cx:hH(ea);
return ec
}function T(ar,W){return function(cr,ea){return iD(cr,ar,W(ea),{})
}
}function d(W){return function(ar,cr){var ea;
if(ar===cx&&cr===cx){return 0
}if(ar!==cx&&(ea=ar),cr!==cx){if(ea===cx){return cr
}"string"==typeof ar||"string"==typeof cr?(ar=gd(ar),cr=gd(cr)):(ar=U(ar),cr=U(cr)),ea=W(ar,cr)
}return ea
}
}function jE(W){return jN(function(ar){return ar=1==ar.length&&gk(ar[0])?b7(ar[0],cJ(kx())):b7(iY(ar,1,gp),cJ(kx())),jN(function(ea){var cr=this;
return W(ar,function(ec){return bY(ec,cr,ea)
})
})
})
}function mx(ea,W){W=W===cx?" ":gd(W);
var ar=W.length;
if(2>ar){return ar?m(W,ea):W
}var cr=m(W,E(ea/cL(W)));
return dk.test(W)?i7(bZ(cr),0,ea).join(""):cr.slice(0,ea)
}function kN(ef,cr,ec,W){function ar(){for(var eo=-1,el=arguments.length,eu=-1,ei=W.length,es=Array(ei+el),er=this&&this!==c0&&this instanceof ar?ea:ef;
++eu<ei;
){es[eu]=W[eu]
}for(;
el--;
){es[eu++]=arguments[++eo]
}return bY(er,ee?ec:this,es)
}var ee=cr&cF,ea=hH(ef);
return ar
}function lC(W){return function(ar,cr,ea){return ea&&"number"!=typeof ea&&mG(ar,cr,ea)&&(cr=ea=cx),ar=kk(ar),ar=ar===ar?ar:0,cr===cx?(cr=ar,ar=0):cr=kk(cr)||0,ea=ea===cx?cr>ar?1:-1:kk(ea)||0,hy(ar,cr,ea,W)
}
}function B(W){return function(ar,cr){return"string"==typeof ar&&"string"==typeof cr||(ar=kk(ar),cr=kk(cr)),W(ar,cr)
}
}function hh(ea,fe,W,eo,fc,ee,cr,el,es,er){var ec=fe&aY,ff=ec?cr:cx,ef=ec?cx:cr,ar=ec?ee:cx,fa=ec?cx:ee;
fe|=ec?bu:aM,fe&=~(ec?aM:bu),fe&cU||(fe&=~(cF|cv));
var eu=[ea,fe,fc,ar,ff,fa,ef,el,es,er],ei=W.apply(cx,eu);
return l7(ea)&&iB(ei,eu),ei.placeholder=eo,ei
}function mR(ar){var W=f7[ar];
return function(ee,ea){if(ee=kk(ee),ea=g9(ea)){var ec=(jU(ee)+"e").split("e"),cr=W(ec[0]+"e"+(+ec[1]+ea));
return ec=(jU(cr)+"e").split("e"),+(ec[0]+"e"+(+ec[1]-ea))
}return W(ee)
}
}function iw(W){return function(ar){var cr=l(ar);
return cr==by?cY(ar):cr==c7?cH(ar):c6(ar,W(ar))
}
}function eL(ea,fc,W,el,fa,ee,cr,ei){var er=fc&cv;
if(!er&&"function"!=typeof ea){throw new x(cS)
}var eo=el?el.length:0;
if(eo||(fc&=~(bu|aM),el=fa=cx),cr=cr===cx?cr:hF(g9(cr),0),ei=ei===cx?ei:g9(ei),eo-=fa?fa.length:0,fc&aM){var ec=el,fe=fa;
el=fa=cx
}var ef=er?cx:H(ea),ar=[ea,fc,W,el,fa,ec,fe,ee,cr,ei];
if(ef&&d9(ar,ef),ea=ar[0],fc=ar[1],W=ar[2],el=ar[3],fa=ar[4],ei=ar[9]=null==ar[9]?er?0:ea.length:hF(ar[9]-eo,0),!ei&&fc&(aY|bm)&&(fc&=~(aY|bm)),fc&&fc!=cF){eu=fc==aY||fc==bm?ew(ea,fc,ei):fc!=bu&&fc!=(cF|bu)||fa.length?fU.apply(cx,ar):kN(ea,fc,W,el)
}else{var eu=jY(ea,fc,W)
}var es=ef?kQ:iB;
return es(eu,ar)
}function jj(ea,fc,W,eo,fa,ee){var cr=fa&dv,el=ea.length,es=fc.length;
if(el!=es&&!(cr&&es>el)){return !1
}var er=ee.get(ea);
if(er){return er==fc
}var ec=-1,fe=!0,ef=fa&bX?new d5:cx;
for(ee.set(ea,fc);
++ec<el;
){var ar=ea[ec],eu=fc[ec];
if(eo){var ei=cr?eo(eu,ar,ec,fc,ea,ee):eo(ar,eu,ec,ea,fc,ee)
}if(ei!==cx){if(ei){continue
}fe=!1;
break
}if(ef){if(!bT(fc,function(fi,ff){return ef.has(ff)||ar!==fi&&!W(ar,fi,eo,fa,ee)?void 0:ef.add(ff)
})){fe=!1;
break
}}else{if(ar!==eu&&!W(ar,eu,eo,fa,ee)){fe=!1;
break
}}}return ee["delete"](ea),fe
}function h2(cr,eo,W,ee,el,ea,ar){switch(W){case bz:if(cr.byteLength!=eo.byteLength||cr.byteOffset!=eo.byteOffset){return !1
}cr=cr.buffer,eo=eo.buffer;
case a8:return !(cr.byteLength!=eo.byteLength||!ee(new X(cr),new X(eo)));
case cR:case ao:return +cr==+eo;
case ax:return cr.name==eo.name&&cr.message==eo.message;
case aR:return cr!=+cr?eo!=+eo:cr==+eo;
case cO:case ah:return cr==eo+"";
case by:var ec=cY;
case c7:var ei=ea&dv;
if(ec||(ec=c1),cr.size!=eo.size&&!ei){return !1
}var ef=ar.get(cr);
return ef?ef==eo:(ea|=bX,ar.set(cr,eo),jj(ec(cr),ec(eo),ee,el,ea,ar));
case bl:if(jk){return jk.call(cr)==jk.call(eo)
}}return !1
}function lF(eo,ec,ef,fe,ea,es){var el=ea&dv,fc=en(eo),fo=fc.length,fi=en(ec),er=fi.length;
if(fo!=er&&!el){return !1
}for(var ee=fo;
ee--;
){var eu=fc[ee];
if(!(el?eu in ec:mL(ec,eu))){return !1
}}var ei=es.get(eo);
if(ei){return ei==ec
}var cr=!0;
es.set(eo,ec);
for(var fr=el;
++ee<fo;
){eu=fc[ee];
var fa=eo[eu],W=ec[eu];
if(fe){var ff=el?fe(W,fa,eu,ec,eo,es):fe(fa,W,eu,eo,ec,es)
}if(!(ff===cx?fa===W||ef(fa,W,fe,ea,es):ff)){cr=!1;
break
}fr||(fr="constructor"==eu)
}if(cr&&!fr){var fl=eo.constructor,ar=ec.constructor;
fl!=ar&&"constructor" in eo&&"constructor" in ec&&!("function"==typeof fl&&fl instanceof fl&&"function"==typeof ar&&ar instanceof ar)&&(cr=!1)
}return es["delete"](eo),cr
}function h6(W){return gv(W,en,gU)
}function K(W){return gv(W,fq,f)
}function fX(ee){for(var cr=ee.name+"",ea=iV[cr],ec=N.call(iV,cr)?ea.length:0;
ec--;
){var W=ea[ec],ar=W.func;
if(null==ar||ar==ee){return W.name
}}return cr
}function hL(ar){var W=N.call(fZ,"placeholder")?fZ:ar;
return W.placeholder
}function kx(){var W=fZ.iteratee||eY;
return W=W===eY?kE:W,arguments.length?W(arguments[0],arguments[1]):W
}function dQ(cr,W){var ar=cr.__data__;
return e8(W)?ar["string"==typeof W?"string":"hash"]:ar.map
}function ed(cr){for(var W=eO(cr),ar=W.length;
ar--;
){W[ar][2]=fE(W[ar][1])
}return W
}function lS(cr,W){var ar=cr[W];
return hx(ar)?ar:cx
}function gF(W){return dJ(Object(W))
}function gU(W){return kL(Object(W))
}function l(W){return iJ.call(W)
}function j2(ef,cr,ea){for(var ec=-1,W=ea.length;
++ec<W;
){var ar=ea[ec],ee=ar.size;
switch(ar.type){case"drop":ef+=ee;
break;
case"dropRight":cr-=ee;
break;
case"take":cr=eX(cr,ef+ee);
break;
case"takeRight":ef=hF(ef,cr-ee)
}}return{start:ef,end:cr}
}function br(ef,cr,ea){cr=lb(cr,ef)?[cr]:dH(cr);
for(var ec,W=-1,ar=cr.length;
++W<ar;
){var ee=iZ(cr[W]);
if(!(ec=null!=ef&&ea(ef,ee))){break
}ef=ef[ee]
}if(ec){return ec
}var ar=ef?ef.length:0;
return !!ar&&bn(ar)&&kP(ee,ar)&&(gk(ef)||S(ef)||fJ(ef))
}function iU(cr){var W=cr.length,ar=cr.constructor(W);
return W&&"string"==typeof cr[0]&&N.call(cr,"index")&&(ar.index=cr.index,ar.input=cr.input),ar
}function jH(W){return"function"!=typeof W.constructor||iA(W)?{}:hP(gF(W))
}function fz(ec,ar,cr,ea){var W=ec.constructor;
switch(ar){case a8:return fL(ec);
case cR:case ao:return new W(+ec);
case bz:return hE(ec,ea);
case dl:case bb:case co:case bI:case du:case ca:case bp:case df:case aC:return ly(ec,ea);
case by:return eV(ec,ea,cr);
case aR:case ah:return new W(ec);
case cO:return gG(ec);
case c7:return k3(ec,ea,cr);
case bl:return mS(ec)
}}function hm(ar){var W=ar?ar.length:cx;
return bn(W)&&(gk(ar)||S(ar)||fJ(ar))?b9(W,String):null
}function eD(W){return gk(W)||fJ(W)
}function gp(W){return gk(W)&&!(2==W.length&&!jt(W[0]))
}function kP(ar,W){return W=null==W?cA:W,!!W&&("number"==typeof ar||af.test(ar))&&ar>-1&&ar%1==0&&W>ar
}function mG(ea,W,ar){if(!u(ar)){return !1
}var cr=typeof W;
return("number"==cr?eb(ar)&&kP(W,ar.length):"string"==cr&&W in ar)?iF(ar[W],ea):!1
}function lb(cr,W){if(gk(cr)){return !1
}var ar=typeof cr;
return"number"==ar||"symbol"==ar||"boolean"==ar||null==cr||gb(cr)?!0:dq.test(cr)||!bP.test(cr)||null!=W&&cr in Object(W)
}function e8(ar){var W=typeof ar;
return"string"==W||"number"==W||"symbol"==W||"boolean"==W?"__proto__"!==ar:null===ar
}function l7(ea){var W=fX(ea),ar=fZ[W];
if("function"!=typeof ar||!(W in dS.prototype)){return !1
}if(ea===ar){return !0
}var cr=H(ar);
return !!cr&&ea===cr[0]
}function iA(cr){var W=cr&&cr.constructor,ar="function"==typeof W&&W.prototype||mK;
return cr===ar
}function fE(W){return W===W&&!u(W)
}function g0(ar,W){return function(cr){return null==cr?!1:cr[ar]===W&&(W!==cx||ar in Object(cr))
}
}function d9(cr,el){var W=cr[1],ee=el[1],ei=W|ee,ea=(cF|cv|cd)>ei,ar=ee==cd&&W==aY||ee==cd&&W==bh&&cr[7].length<=el[8]||ee==(cd|bh)&&el[7].length<=el[8]&&W==aY;
if(!ea&&!ar){return cr
}ee&cF&&(cr[2]=el[2],ei|=W&cF?0:cU);
var ec=el[3];
if(ec){var ef=cr[3];
cr[3]=ef?iN(ef,ec,el[4]):ec,cr[4]=ef?cN(cr[3],cV):el[4]
}return ec=el[5],ec&&(ef=cr[5],cr[5]=ef?fR(ef,ec,el[6]):ec,cr[6]=ef?cN(cr[5],cV):el[6]),ec=el[7],ec&&(cr[7]=ec),ee&cd&&(cr[8]=null==cr[8]?el[8]:eX(cr[8],el[8])),null==cr[9]&&(cr[9]=el[9]),cr[0]=el[0],cr[1]=ei,cr
}function fh(ee,cr,ea,ec,W,ar){return u(ee)&&u(cr)&&hT(ee,cr,cx,fh,ar.set(cr,ee)),ee
}function kB(ar,W){return 1==W.length?ar:eH(ar,e2(W,0,-1))
}function dO(ee,cr){for(var ea=ee.length,ec=eX(cr.length,ea),W=gN(ee);
ec--;
){var ar=cr[ec];
ee[ec]=kP(ar,ea)?W[ar]:cx
}return ee
}function iZ(ar){if("string"==typeof ar||gb(ar)){return ar
}var W=ar+"";
return"0"==W&&1/ar==-bE?"-0":W
}function gw(ar){if(null!=ar){try{return lO.call(ar)
}catch(W){}try{return ar+""
}catch(W){}}return""
}function j7(ar){if(ar instanceof dS){return ar.clone()
}var W=new kz(ar.__wrapped__,ar.__chain__);
return W.__actions__=gN(ar.__actions__),W.__index__=ar.__index__,W.__values__=ar.__values__,W
}function mk(ef,cr,ea){cr=(ea?mG(ef,cr,ea):cr===cx)?1:hF(g9(cr),0);
var ec=ef?ef.length:0;
if(!ec||1>cr){return[]
}for(var W=0,ar=0,ee=Array(E(ec/cr));
ec>W;
){ee[ar++]=e2(ef,W,W+=cr)
}return ee
}function lk(ee){for(var cr=-1,ea=ee?ee.length:0,ec=0,W=[];
++cr<ea;
){var ar=ee[cr];
ar&&(W[ec++]=ar)
}return W
}function hQ(){for(var ea=arguments.length,W=Array(ea?ea-1:0),ar=arguments[0],cr=ea;
cr--;
){W[cr-1]=arguments[cr]
}return ea?bW(gk(ar)?gN(ar):[ar],iY(W,1)):[]
}function eI(ea,W,ar){var cr=ea?ea.length:0;
return cr?(W=ar||W===cx?1:g9(W),e2(ea,0>W?0:W,cr)):[]
}function jp(ea,W,ar){var cr=ea?ea.length:0;
return cr?(W=ar||W===cx?1:g9(W),W=cr-W,e2(ea,0,0>W?0:W)):[]
}function f2(ar,W){return ar&&ar.length?ex(ar,kx(W,3),!0,!0):[]
}function at(ar,W){return ar&&ar.length?ex(ar,kx(W,3),!0):[]
}function s(ec,ar,cr,ea){var W=ec?ec.length:0;
return W?(cr&&"number"!=typeof cr&&mG(ec,ar,cr)&&(cr=0,ea=W),j6(ec,ar,cr,ea)):[]
}function jM(ar,W){return ar&&ar.length?ce(ar,kx(W,3)):-1
}function mE(ar,W){return ar&&ar.length?ce(ar,kx(W,3),!0):-1
}function kU(ar){var W=ar?ar.length:0;
return W?iY(ar,1):[]
}function lJ(ar){var W=ar?ar.length:0;
return W?iY(ar,bE):[]
}function I(cr,W){var ar=cr?cr.length:0;
return ar?(W=W===cx?1:g9(W),iY(cr,W)):[]
}function hv(ec){for(var ar=-1,cr=ec?ec.length:0,ea={};
++ar<cr;
){var W=ec[ar];
ea[W[0]]=W[1]
}return ea
}function i(W){return W&&W.length?W[0]:cx
}function iE(ea,W,ar){var cr=ea?ea.length:0;
return cr?(ar=g9(ar),0>ar&&(ar=hF(cr+ar,0)),bO(ea,W,ar)):-1
}function eZ(W){return jp(W,1)
}function jz(ar,W){return ar?jW.call(ar,W):""
}function h9(ar){var W=ar?ar.length:0;
return W?ar[W-1]:cx
}function lQ(ec,ar,cr){var ea=ec?ec.length:0;
if(!ea){return -1
}var W=ea;
if(cr!==cx&&(W=g9(cr),W=(0>W?hF(ea+W,0):eX(W,ea-1))+1),ar!==ar){return bN(ec,W,!0)
}for(;
W--;
){if(ec[W]===ar){return W
}}return -1
}function im(ar,W){return ar&&ar.length?jv(ar,g9(W)):cx
}function R(ar,W){return ar&&ar.length&&W&&W.length?kX(ar,W):ar
}function f9(cr,W,ar){return cr&&cr.length&&W&&W.length?kX(cr,W,kx(ar)):cr
}function hX(cr,W,ar){return cr&&cr.length&&W&&W.length?kX(cr,W,cx,ar):cr
}function kI(ef,cr){var ea=[];
if(!ef||!ef.length){return ea
}var ec=-1,W=[],ar=ef.length;
for(cr=kx(cr,3);
++ec<ar;
){var ee=ef[ec];
cr(ee,ec,ef)&&(ea.push(ee),W.push(ec))
}return lM(ef,W),ea
}function dZ(W){return W?lz.call(W):W
}function et(ea,W,ar){var cr=ea?ea.length:0;
return cr?(ar&&"number"!=typeof ar&&mG(ea,W,ar)?(W=0,ar=cr):(W=null==W?0:g9(W),ar=ar===cx?cr:g9(ar)),e2(ea,W,ar)):[]
}function l4(ar,W){return ig(ar,W)
}function gR(cr,W,ar){return lT(cr,W,kx(ar))
}function g8(ea,W){var ar=ea?ea.length:0;
if(ar){var cr=ig(ea,W);
if(ar>cr&&iF(ea[cr],W)){return cr
}}return -1
}function z(ar,W){return ig(ar,W,!0)
}function kj(cr,W,ar){return lT(cr,W,kx(ar),!0)
}function dE(ea,W){var ar=ea?ea.length:0;
if(ar){var cr=ig(ea,W,!0)-1;
if(iF(ea[cr],W)){return cr
}}return -1
}function i5(W){return W&&W.length?iq(W):[]
}function jT(ar,W){return ar&&ar.length?iq(ar,kx(W)):[]
}function fI(W){return eI(W,1)
}function hC(cr,W,ar){return cr&&cr.length?(W=ar||W===cx?1:g9(W),e2(cr,0,0>W?0:W)):[]
}function eS(ea,W,ar){var cr=ea?ea.length:0;
return cr?(W=ar||W===cx?1:g9(W),W=cr-W,e2(ea,0>W?0:W,cr)):[]
}function gD(ar,W){return ar&&ar.length?ex(ar,kx(W,3),!1,!0):[]
}function k1(ar,W){return ar&&ar.length?ex(ar,kx(W,3)):[]
}function mP(W){return W&&W.length?hZ(W):[]
}function lw(ar,W){return ar&&ar.length?hZ(ar,kx(W)):[]
}function ft(ar,W){return ar&&ar.length?hZ(ar,cx,W):[]
}function mv(ar){if(!ar||!ar.length){return[]
}var W=0;
return ar=cf(ar,function(cr){return fk(cr)?(W=hF(cr.length,W),!0):void 0
}),b9(W,function(cr){return b7(ar,jP(cr))
})
}function iL(cr,W){if(!cr||!cr.length){return[]
}var ar=mv(cr);
return null==W?ar:b7(ar,function(ea){return bY(W,cx,ea)
})
}function fP(ar,W){return hb(ar||[],W||[],jg)
}function gS(ar,W){return hb(ar||[],W||[],iH)
}function d7(ar){var W=fZ(ar);
return W.__chain__=!0,W
}function e7(ar,W){return W(ar),ar
}function kw(ar,W){return W(ar)
}function dM(){return d7(this)
}function iT(){return new kz(this.value(),this.__chain__)
}function gn(){this.__values__===cx&&(this.__values__=l6(this.value()));
var ar=this.__index__>=this.__values__.length,W=ar?cx:this.__values__[this.__index__++];
return{done:ar,value:W}
}function j1(){return this
}function l5(ec){for(var ar,cr=this;
cr instanceof hN;
){var ea=j7(cr);
ea.__index__=0,ea.__values__=cx,ar?W.__wrapped__=ea:ar=ea;
var W=ea;
cr=cr.__wrapped__
}return W.__wrapped__=ec,ar
}function k9(){var ar=this.__wrapped__;
if(ar instanceof dS){var W=ar;
return this.__actions__.length&&(W=new dS(this)),W=W.reverse(),W.__actions__.push({func:kw,args:[dZ],thisArg:cx}),new kz(W,this.__chain__)
}return this.thru(dZ)
}function hK(){return l8(this.__wrapped__,this.__actions__)
}function eC(ea,W,ar){var cr=gk(ea)?b2:lX;
return ar&&mG(ea,W,ar)&&(W=cx),cr(ea,kx(W,3))
}function jh(cr,W){var ar=gk(cr)?cf:dr;
return ar(cr,kx(W,3))
}function fW(cr,W){if(W=kx(W,3),gk(cr)){var ar=ce(cr,W);
return ar>-1?cr[ar]:cx
}return cm(cr,W,an)
}function Z(cr,W){if(W=kx(W,3),gk(cr)){var ar=ce(cr,W,!0);
return ar>-1?cr[ar]:cx
}return cm(cr,W,n)
}function j(ar,W){return iY(c(ar,W),1)
}function jG(ar,W){return iY(c(ar,W),bE)
}function mC(cr,W,ar){return ar=ar===cx?1:g9(ar),iY(c(cr,W),ar)
}function lE(cr,W){var ar=gk(cr)?bU:an;
return ar(cr,kx(W,3))
}function G(cr,W){var ar=gk(cr)?cb:n;
return ar(cr,kx(W,3))
}function hk(ec,ar,cr,ea){ec=eb(ec)?ec:dt(ec),cr=cr&&!ea?g9(cr):0;
var W=ec.length;
return 0>cr&&(cr=hF(W+cr,0)),S(ec)?W>=cr&&ec.indexOf(ar,cr)>-1:!!W&&bO(ec,ar,cr)>-1
}function c(cr,W){var ar=gk(cr)?b7:kb;
return ar(cr,kx(W,3))
}function iz(ea,W,ar,cr){return null==ea?[]:(gk(W)||(W=null==W?[]:[W]),ar=cr?cx:ar,gk(ar)||(ar=null==ar?[]:[ar]),f5(ea,W,ar))
}function eT(ec,ar,cr){var ea=gk(ec)?cc:bS,W=arguments.length<3;
return ea(ec,kx(ar,4),cr,W,an)
}function jq(ec,ar,cr){var ea=gk(ec)?b1:bS,W=arguments.length<3;
return ea(ec,kx(ar,4),cr,W,n)
}function h5(cr,W){var ar=gk(cr)?cf:dr;
return W=kx(W,3),ar(cr,function(ee,ea,ec){return !W(ee,ea,ec)
})
}function lK(cr){var W=eb(cr)?cr:dt(cr),ar=W.length;
return ar>0?W[L(0,ar-1)]:cx
}function ib(cr,el,W){var ee=-1,ei=l6(cr),ea=ei.length,ar=ea-1;
for(el=(W?mG(cr,el,W):el===cx)?1:h4(g9(el),0,ea);
++ee<el;
){var ec=L(ee,ar),ef=ei[ec];
ei[ec]=ei[ee],ei[ee]=ef
}return ei.length=el,ei
}function P(W){return ib(W,dB)
}function f3(cr){if(null==cr){return 0
}if(eb(cr)){var W=cr.length;
return W&&S(cr)?cL(cr):W
}if(jO(cr)){var ar=l(cr);
if(ar==by||ar==c7){return cr.size
}}return en(cr).length
}function hR(ea,W,ar){var cr=gk(ea)?bT:jB;
return ar&&mG(ea,W,ar)&&(W=cx),cr(ea,kx(W,3))
}function kC(ar,W){if("function"!=typeof W){throw new x(cS)
}return ar=g9(ar),function(){return --ar<1?W.apply(this,arguments):void 0
}
}function dX(cr,W,ar){return W=ar?cx:W,W=cr&&null==W?cr.length:W,eL(cr,cd,cx,cx,cx,cx,W)
}function ep(cr,W){var ar;
if("function"!=typeof W){throw new x(cS)
}return cr=g9(cr),function(){return --cr>0&&(ar=W.apply(this,arguments)),1>=cr&&(W=cx),ar
}
}function lZ(ea,W,ar){W=ar?cx:W;
var cr=eL(ea,aY,cx,cx,cx,cx,cx,W);
return cr.placeholder=lZ.placeholder,cr
}function gM(ea,W,ar){W=ar?cx:W;
var cr=eL(ea,bm,cx,cx,cx,cx,cx,W);
return cr.placeholder=gM.placeholder,cr
}function g2(eo,ec,ef){function ff(fu){var ga=fa,gc=ei;
return fa=ei=cx,fi=fu,fs=eo.apply(gc,ga)
}function ea(fu){return fi=fu,fc=gZ(fe,ec),fo?ff(fu):fs
}function eu(ge){var ga=ge-W,gc=ge-fi,fu=ec-ga;
return ar?eX(fu,cr-gc):fu
}function el(gc){var fu=gc-W,ga=gc-fi;
return !W||fu>=ec||0>fu||ar&&ga>=cr
}function fe(){var fu=lq();
return el(fu)?fr(fu):void (fc=gZ(fe,eu(fu)))
}function fr(fu){return gg(fc),fc=cx,er&&fa?ff(fu):(fa=ei=cx,fs)
}function fl(){fc!==cx&&gg(fc),W=fi=0,fa=ei=fc=cx
}function es(){return fc===cx?fs:fr(lq())
}function ee(){var ga=lq(),fu=el(ga);
if(fa=arguments,ei=this,W=ga,fu){if(fc===cx){return ea(W)
}if(ar){return gg(fc),fc=gZ(fe,ec),ff(W)
}}return fc===cx&&(fc=gZ(fe,ec)),fs
}var fa,ei,cr,fs,fc,W=0,fi=0,fo=!1,ar=!1,er=!0;
if("function"!=typeof eo){throw new x(cS)
}return ec=kk(ec)||0,u(ef)&&(fo=!!ef.leading,ar="maxWait" in ef,cr=ar?hF(kk(ef.maxWait)||0,ec):cr,er="trailing" in ef?!!ef.trailing:er),ee.cancel=fl,ee.flush=es,ee
}function t(W){return eL(W,db)
}function j8(cr,W){if("function"!=typeof cr||W&&"function"!=typeof W){throw new x(cS)
}var ar=function(){var ee=arguments,ea=W?W.apply(this,ee):ee[0],ec=ar.cache;
if(ec.has(ea)){return ec.get(ea)
}var ef=cr.apply(this,ee);
return ar.cache=ec.set(ea,ef),ef
};
return ar.cache=new (j8.Cache||lg),ar
}function dC(W){if("function"!=typeof W){throw new x(cS)
}return function(){return !W.apply(this,arguments)
}
}function i0(W){return ep(2,W)
}function jN(ar,W){if("function"!=typeof ar){throw new x(cS)
}return W=hF(W===cx?ar.length-1:g9(W),0),function(){for(var ee=arguments,cr=-1,ea=hF(ee.length-W,0),ef=Array(ea);
++cr<ea;
){ef[cr]=ee[W+cr]
}switch(W){case 0:return ar.call(this,ef);
case 1:return ar.call(this,ee[0],ef);
case 2:return ar.call(this,ee[0],ee[1],ef)
}var ec=Array(W+1);
for(cr=-1;
++cr<W;
){ec[cr]=ee[cr]
}return ec[W]=ef,bY(ar,this,ec)
}
}function fD(ar,W){if("function"!=typeof ar){throw new x(cS)
}return W=W===cx?0:hF(g9(W),0),jN(function(ec){var cr=ec[W],ea=i7(ec,0,W);
return cr&&bW(ea,cr),bY(ar,this,ea)
})
}function hw(ec,ar,cr){var ea=!0,W=!0;
if("function"!=typeof ec){throw new x(cS)
}return u(cr)&&(ea="leading" in cr?!!cr.leading:ea,W="trailing" in cr?!!cr.trailing:W),g2(ec,ar,{leading:ea,maxWait:ar,trailing:W})
}function eJ(W){return dX(W,1)
}function gx(ar,W){return W=null==W?hG:W,d3(W,ar)
}function kV(){if(!arguments.length){return[]
}var W=arguments[0];
return gk(W)?W:[W]
}function mN(W){return lI(W,!1,!0)
}function lm(ar,W){return lI(ar,!1,!0,W)
}function fj(W){return lI(W,!0,!0)
}function mm(ar,W){return lI(ar,!0,!0,W)
}function iF(ar,W){return ar===W||ar!==ar&&W!==W
}function fJ(W){return fk(W)&&N.call(W,"callee")&&(!mg.call(W,"callee")||iJ.call(W)==aX)
}function g3(W){return jO(W)&&iJ.call(W)==a8
}function eb(W){return null!=W&&bn(hn(W))&&!jt(W)
}function fk(W){return jO(W)&&eb(W)
}function kD(W){return W===!0||W===!1||jO(W)&&iJ.call(W)==cR
}function dP(W){return jO(W)&&iJ.call(W)==ao
}function gy(W){return !!W&&1===W.nodeType&&jO(W)&&!jA(W)
}function j9(cr){if(eb(cr)&&(gk(cr)||S(cr)||jt(cr.splice)||fJ(cr)||jZ(cr))){return !cr.length
}if(jO(cr)){var W=l(cr);
if(W==by||W==c7){return !cr.size
}}for(var ar in cr){if(N.call(cr,ar)){return !1
}}return !(dN&&en(cr).length)
}function mn(ar,W){return g4(ar,W)
}function ln(ea,W,ar){ar="function"==typeof ar?ar:cx;
var cr=ar?ar(ea,W):cx;
return cr===cx?g4(ea,W,ar):!!cr
}function hS(W){return jO(W)?iJ.call(W)==ax||"string"==typeof W.message&&"string"==typeof W.name:!1
}function eK(W){return"number"==typeof W&&i8(W)
}function jt(ar){var W=u(ar)?iJ.call(ar):"";
return W==bM||W==dA
}function f4(W){return"number"==typeof W&&W==g9(W)
}function bn(W){return"number"==typeof W&&W>-1&&W%1==0&&cA>=W
}function u(ar){var W=typeof ar;
return !!ar&&("object"==W||"function"==W)
}function jO(W){return !!W&&"object"==typeof W
}function mF(W){return jO(W)&&l(W)==by
}function kW(ar,W){return ar===W||fm(ar,W,ed(W))
}function lL(cr,W,ar){return ar="function"==typeof ar?ar:cx,fm(cr,W,ed(W),ar)
}function J(W){return e0(W)&&W!=+W
}function hx(ar){if(!u(ar)){return !1
}var W=jt(ar)||dj(ar)?jC:bc;
return W.test(gw(ar))
}function k(W){return null===W
}function iG(W){return null==W
}function e0(W){return"number"==typeof W||jO(W)&&iJ.call(W)==aR
}function jA(cr){if(!jO(cr)||iJ.call(cr)!=a3||dj(cr)){return !1
}var W=gF(cr);
if(null===W){return !0
}var ar=N.call(W,"constructor")&&W.constructor;
return"function"==typeof ar&&ar instanceof ar&&lO.call(ar)==q
}function id(W){return u(W)&&iJ.call(W)==cO
}function lR(W){return f4(W)&&W>=-cA&&cA>=W
}function ip(W){return jO(W)&&l(W)==c7
}function S(W){return"string"==typeof W||!gk(W)&&jO(W)&&iJ.call(W)==ah
}function gb(W){return"symbol"==typeof W||jO(W)&&iJ.call(W)==bl
}function hY(W){return jO(W)&&bn(W.length)&&!!de[iJ.call(W)]
}function kJ(W){return W===cx
}function d0(W){return jO(W)&&l(W)==aH
}function ev(W){return jO(W)&&iJ.call(W)==aL
}function l6(cr){if(!cr){return[]
}if(eb(cr)){return S(cr)?bZ(cr):gN(cr)
}if(d4&&cr[d4]){return cy(cr[d4]())
}var W=l(cr),ar=W==by?cY:W==c7?c1:dt;
return ar(cr)
}function gT(ar){if(!ar){return 0===ar?ar:0
}if(ar=kk(ar),ar===bE||ar===-bE){var W=0>ar?-1:1;
return W*ap
}return ar===ar?ar:0
}function g9(cr){var W=gT(cr),ar=W%1;
return W===W?ar?W-ar:W:0
}function A(W){return W?h4(g9(W),0,dB):0
}function kk(cr){if("number"==typeof cr){return cr
}if(gb(cr)){return dg
}if(u(cr)){var W=jt(cr.valueOf)?cr.valueOf():cr;
cr=u(W)?W+"":W
}if("string"!=typeof cr){return 0===cr?cr:+cr
}cr=cr.replace(aA,"");
var ar=av.test(cr);
return ar||aT.test(cr)?au(cr.slice(2),ar?2:8):dy.test(cr)?dg:+cr
}function dF(W){return d1(W,fq(W))
}function i6(W){return h4(g9(W),-cA,cA)
}function jU(W){return null==W?"":gd(W)
}function fK(cr,W){var ar=hP(cr);
return W?eQ(ar,W):ar
}function hD(ar,W){return cm(ar,kx(W,3),jL,!0)
}function eU(ar,W){return cm(ar,kx(W,3),fC,!0)
}function gE(ar,W){return null==ar?ar:jI(ar,kx(W,3),fq)
}function k2(ar,W){return null==ar?ar:mD(ar,kx(W,3),fq)
}function mQ(ar,W){return ar&&jL(ar,kx(W,3))
}function lx(ar,W){return ar&&fC(ar,kx(W,3))
}function fv(W){return null==W?[]:ht(W,en(W))
}function mw(W){return null==W?[]:ht(W,fq(W))
}function iM(ea,W,ar){var cr=null==ea?cx:eH(ea,W);
return cr===cx?ar:cr
}function fQ(ar,W){return null!=ar&&br(ar,W,mL)
}function g7(ar,W){return null!=ar&&br(ar,W,lj)
}function en(ef){var cr=iA(ef);
if(!cr&&!eb(ef)){return dR(ef)
}var ea=hm(ef),ec=!!ea,W=ea||[],ar=W.length;
for(var ee in ef){!mL(ef,ee)||ec&&("length"==ee||kP(ee,ar))||cr&&"constructor"==ee||W.push(ee)
}return W
}function fq(cr){for(var eo=-1,W=iA(cr),ee=i1(cr),el=ee.length,ea=hm(cr),ar=!!ea,ec=ea||[],ei=ec.length;
++eo<el;
){var ef=ee[eo];
ar&&("length"==ef||kP(ef,ei))||"constructor"==ef&&(W||!N.call(cr,ef))||ec.push(ef)
}return ec
}function kH(cr,W){var ar={};
return W=kx(W,3),jL(cr,function(ee,ec,ea){ar[W(ee,ec,ea)]=ee
}),ar
}function dW(cr,W){var ar={};
return W=kx(W,3),jL(cr,function(ee,ec,ea){ar[ec]=W(ee,ec,ea)
}),ar
}function i4(ar,W){return W=kx(W),v(ar,function(ea,cr){return !W(ea,cr)
})
}function gC(ar,W){return null==ar?{}:v(ar,kx(W))
}function kh(ee,cr,ea){cr=lb(cr,ee)?[cr]:dH(cr);
var ec=-1,W=cr.length;
for(W||(ee=cx,W=1);
++ec<W;
){var ar=null==ee?cx:ee[iZ(cr[ec])];
ar===cx&&(ec=W,ar=ea),ee=jt(ar)?ar.call(ee):ar
}return ee
}function mt(cr,W,ar){return null==cr?cr:iH(cr,W,ar)
}function lv(ea,W,ar,cr){return cr="function"==typeof cr?cr:cx,null==ea?ea:iH(ea,W,ar,cr)
}function hW(ec,ar,cr){var ea=gk(ec)||hY(ec);
if(ar=kx(ar,4),null==cr){if(ea||u(ec)){var W=ec.constructor;
cr=ea?gk(ec)?new W:[]:jt(W)?hP(gF(ec)):{}
}else{cr={}
}}return(ea?bU:jL)(ec,function(ei,ef,ee){return ar(cr,ei,ef,ee)
}),cr
}function eR(ar,W){return null==ar?!0:kK(ar,W)
}function jy(cr,W,ar){return null==cr?cr:d2(cr,W,km(ar))
}function f8(ea,W,ar,cr){return cr="function"==typeof cr?cr:cx,null==ea?ea:d2(ea,W,km(ar),cr)
}function dt(W){return W?b8(W,en(W)):[]
}function y(W){return null==W?[]:b8(W,fq(W))
}function jS(cr,W,ar){return ar===cx&&(ar=W,W=cx),ar!==cx&&(ar=kk(ar),ar=ar===ar?ar:0),W!==cx&&(W=kk(W),W=W===W?W:0),h4(kk(cr),W,ar)
}function mM(cr,W,ar){return W=kk(W)||0,ar===cx?(ar=W,W=0):ar=kk(ar)||0,cr=kk(cr),fg(cr,W,ar)
}function k0(ec,ar,cr){if(cr&&"boolean"!=typeof cr&&mG(ec,ar,cr)&&(ar=cr=cx),cr===cx&&("boolean"==typeof ar?(cr=ar,ar=cx):"boolean"==typeof ec&&(cr=ec,ec=cx)),ec===cx&&ar===cx?(ec=0,ar=1):(ec=kk(ec)||0,ar===cx?(ar=ec,ec=0):ar=kk(ar)||0),ec>ar){var ea=ec;
ec=ar,ar=ea
}if(cr||ec%1||ar%1){var W=k4();
return eX(ec+W*(ar-ec+ak("1e-"+((W+"").length-1))),ar)
}return L(ec,ar)
}function lP(W){return dT(jU(W).toLowerCase())
}function O(W){return W=jU(W),W&&W.replace(cG,cP).replace(aB,"")
}function hB(ea,W,ar){ea=jU(ea),W=gd(W);
var cr=ea.length;
return ar=ar===cx?cr:h4(g9(ar),0,cr),ar-=W.length,ar>=0&&ea.indexOf(W,ar)==ar
}function r(W){return W=jU(W),W&&aF.test(W)?W.replace(bq,c3):W
}function iK(W){return W=jU(W),W&&bG.test(W)?W.replace(aP,"\\$&"):W
}function e6(ec,ar,cr){ec=jU(ec),ar=g9(ar);
var ea=ar?cL(ec):0;
if(!ar||ea>=ar){return ec
}var W=(ar-ea)/2;
return mx(kn(W),cr)+ec+mx(E(W),cr)
}function jD(ea,W,ar){ea=jU(ea),W=g9(W);
var cr=W?cL(ea):0;
return W&&W>cr?ea+mx(W-cr,ar):ea
}function ik(ea,W,ar){ea=jU(ea),W=g9(W);
var cr=W?cL(ea):0;
return W&&W>cr?mx(W-cr,ar)+ea:ea
}function lY(cr,W,ar){return ar||null==W?W=0:W&&(W=+W),cr=jU(cr).replace(aA,""),gJ(cr,W||(dd.test(cr)?16:10))
}function iv(cr,W,ar){return W=(ar?mG(cr,W,ar):W===cx)?1:g9(W),m(jU(cr),W)
}function Y(){var ar=arguments,W=jU(ar[0]);
return ar.length<3?W:a.call(W,ar[1],ar[2])
}function gh(cr,W,ar){return ar&&"number"!=typeof ar&&mG(cr,W,ar)&&(W=ar=cx),(ar=ar===cx?dB:ar>>>0)?(cr=jU(cr),cr&&("string"==typeof W||null!=W&&!id(W))&&(W=gd(W),""==W&&dk.test(cr))?i7(bZ(cr),0,ar):fx.call(cr,W,ar)):[]
}function h1(cr,W,ar){return cr=jU(cr),ar=h4(g9(ar),0,cr.length),cr.lastIndexOf(gd(W),ar)==ar
}function kM(ea,fc,W){var el=fZ.templateSettings;
W&&mG(ea,fc,W)&&(fc=cx),ea=jU(ea),fc=jd({},fc,el,hJ);
var fa,ee,cr=jd({},fc.imports,el.imports,hJ),ei=en(cr),er=b8(cr,ei),eo=0,ec=fc.interpolate||aj,fe="__p += '",ef=dn((fc.escape||aj).source+"|"+ec.source+"|"+(ec===c9?cq:aj).source+"|"+(fc.evaluate||aj).source+"|$","g"),ar="//# sourceURL="+("sourceURL" in fc?fc.sourceURL:"lodash.templateSources["+ ++am+"]")+"\n";
ea.replace(ef,function(fi,fl,fr,fs,fo,ff){return fr||(fr=fs),fe+=ea.slice(eo,ff).replace(aq,c5),fl&&(fa=!0,fe+="' +\n__e("+fl+") +\n'"),fo&&(ee=!0,fe+="';\n"+fo+";\n__p += '"),fr&&(fe+="' +\n((__t = ("+fr+")) == null ? '' : __t) +\n'"),eo=ff+fi.length,fi
}),fe+="';\n";
var eu=fc.variable;
eu||(fe="with (obj) {\n"+fe+"\n}\n"),fe=(ee?fe.replace(bB,""):fe).replace(cK,"$1").replace(aV,"$1;"),fe="function("+(eu||"obj")+") {\n"+(eu?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(fa?", __e = _.escape":"")+(ee?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+fe+"return __p\n}";
var es=ej(function(){return Function(ei,ar+"return "+fe).apply(cx,er)
});
if(es.source=fe,hS(es)){throw es
}return es
}function d6(W){return jU(W).toLowerCase()
}function eB(W){return jU(W).toUpperCase()
}function mj(ef,cr,ea){if(ef=jU(ef),ef&&(ea||cr===cx)){return ef.replace(aA,"")
}if(!ef||!(cr=gd(cr))){return ef
}var ec=bZ(ef),W=bZ(cr),ar=cD(ec,W),ee=cZ(ec,W)+1;
return i7(ec,ar,ee).join("")
}function g1(ec,ar,cr){if(ec=jU(ec),ec&&(cr||ar===cx)){return ec.replace(a1,"")
}if(!ec||!(ar=gd(ar))){return ec
}var ea=bZ(ec),W=cZ(ea,bZ(ar))+1;
return i7(ea,0,W).join("")
}function hg(ec,ar,cr){if(ec=jU(ec),ec&&(cr||ar===cx)){return ec.replace(aa,"")
}if(!ec||!(ar=gd(ar))){return ec
}var ea=bZ(ec),W=cD(ea,bZ(ar));
return i7(ea,W).join("")
}function F(cr,es){var W=a9,ei=aS;
if(u(es)){var er="separator" in es?es.separator:er;
W="length" in es?g9(es.length):W,ei="omission" in es?gd(es.omission):ei
}cr=jU(cr);
var ec=cr.length;
if(dk.test(cr)){var ar=bZ(cr);
ec=ar.length
}if(W>=ec){return cr
}var ef=W-cL(ei);
if(1>ef){return ei
}var eo=ar?i7(ar,0,ef).join(""):cr.slice(0,ef);
if(er===cx){return eo+ei
}if(ar&&(ef+=eo.length-ef),id(er)){if(cr.slice(ef).search(er)){var el,ea=eo;
for(er.global||(er=dn(er.source,jU(al.exec(er))+"g")),er.lastIndex=0;
el=er.exec(ea);
){var eu=el.index
}eo=eo.slice(0,eu===cx?ef:eu)
}}else{if(cr.indexOf(gd(er),ef)!=ef){var ee=eo.lastIndexOf(er);
ee>-1&&(eo=eo.slice(0,ee))
}}return eo+ei
}function kp(W){return W=jU(W),W&&aJ.test(W)?W.replace(bj,cz):W
}function dL(cr,W,ar){return cr=jU(cr),W=ar?cx:W,W===cx&&(W=bD.test(cr)?a2:di),cr.match(W)||[]
}function i9(cr){var W=cr?cr.length:0,ar=kx();
return cr=W?b7(cr,function(ea){if("function"!=typeof ea[1]){throw new x(cS)
}return[ar(ea[0]),ea[1]]
}):[],jN(function(ee){for(var ea=-1;
++ea<W;
){var ec=cr[ea];
if(bY(ec[0],this,ee)){return bY(ec[1],this,ee)
}}})
}function jX(W){return f1(lI(W,!0))
}function fO(W){return function(){return W
}
}function hG(W){return W
}function eY(W){return kE("function"==typeof W?W:lI(W,!0))
}function gL(W){return mp(lI(W,!0))
}function k5(ar,W){return lp(ar,lI(W,!0))
}function b(ef,ar,cr){var ec=en(ar),W=ht(ar,ec);
null!=cr||u(ar)&&(W.length||!ec.length)||(cr=ar,ar=ef,ef=this,W=ht(ar,en(ar)));
var ee=!(u(cr)&&"chain" in cr&&!cr.chain),ea=jt(ef);
return bU(W,function(ei){var el=ar[ei];
ef[ei]=el,ea&&(ef.prototype[ei]=function(){var er=this.__chain__;
if(ee||er){var es=ef(this.__wrapped__),eo=es.__actions__=gN(this.__actions__);
return eo.push({func:el,args:arguments,thisArg:ef}),es.__chain__=er,es
}return el.apply(ef,bW([this.value()],arguments))
})
}),ef
}function lA(){return c0._===this&&(c0._=e4),this
}function fy(){}function mB(W){return W=g9(W),jN(function(ar){return jv(ar,W)
})
}function iP(W){return lb(W)?jP(iZ(W)):mH(W)
}function fT(W){return function(ar){return null==W?cx:eH(W,ar)
}
}function g6(ec,ar){if(ec=g9(ec),1>ec||ec>cA){return[]
}var cr=dB,ea=eX(ec,dB);
ar=kx(ar),ec-=dB;
for(var W=b9(ea,ar);
++cr<ec;
){ar(cr)
}return W
}function ek(W){return gk(W)?b7(W,iZ):gb(W)?[W]:gN(eW(W))
}function fp(ar){var W=++hA;
return jU(ar)+W
}function kG(W){return W&&W.length?gK(W,hG,kT):cx
}function dU(ar,W){return ar&&ar.length?gK(ar,kx(W),kT):cx
}function i3(W){return ck(W,hG)
}function gB(ar,W){return ck(ar,kx(W))
}function kg(W){return W&&W.length?gK(W,hG,gz):cx
}function mr(ar,W){return ar&&ar.length?gK(ar,kx(W),gz):cx
}function lt(W){return W&&W.length?bQ(W,hG):0
}function hV(ar,W){return ar&&ar.length?bQ(ar,kx(W)):0
}lB=lB?ae.defaults({},lB,ae.pick(c0,cu)):c0;
var eP=lB.Date,jx=lB.Error,f7=lB.Math,dn=lB.RegExp,x=lB.TypeError,jR=lB.Array.prototype,mK=lB.Object.prototype,kZ=lB.String.prototype,lO=lB.Function.prototype.toString,N=mK.hasOwnProperty,hA=0,q=lO.call(Object),iJ=mK.toString,e4=c0._,jC=dn("^"+lO.call(N).replace(aP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ij=bw?lB.Buffer:cx,lW=lB.Reflect,it=lB.Symbol,X=lB.Uint8Array,gg=lB.clearTimeout,h0=lW?lW.enumerate:cx,kL=Object.getOwnPropertySymbols,d4="symbol"==typeof(d4=it&&it.iterator)?d4:cx,ez=Object.create,mg=mK.propertyIsEnumerable,gZ=lB.setTimeout,hd=jR.splice,E=f7.ceil,kn=f7.floor,dJ=Object.getPrototypeOf,i8=lB.isFinite,jW=jR.join,fN=Object.keys,hF=f7.max,eX=f7.min,gJ=lB.parseInt,k4=f7.random,a=kZ.replace,lz=jR.reverse,fx=kZ.split,mA=lS(lB,"DataView"),iO=lS(lB,"Map"),fS=lS(lB,"Promise"),gV=lS(lB,"Set"),d8=lS(lB,"WeakMap"),e9=lS(Object,"create"),ky=d8&&new d8,dN=!mg.call({valueOf:1},"valueOf"),iV={},gq=gw(mA),j3=gw(iO),l9=gw(fS),ld=gw(gV),hM=gw(d8),eE=it?it.prototype:cx,jk=eE?eE.valueOf:cx,fY=eE?eE.toString:cx;
fZ.templateSettings={escape:b4,evaluate:be,interpolate:c9,variable:"",imports:{_:fZ}},fZ.prototype=hN.prototype,fZ.prototype.constructor=fZ,kz.prototype=hP(hN.prototype),kz.prototype.constructor=kz,dS.prototype=hP(hN.prototype),dS.prototype.constructor=dS,gX.prototype.clear=o,gX.prototype["delete"]=j4,gX.prototype.get=cn,gX.prototype.has=iW,gX.prototype.set=jJ,fA.prototype.clear=hp,fA.prototype["delete"]=eF,fA.prototype.get=gr,fA.prototype.has=kR,fA.prototype.set=mI,lg.prototype.clear=fb,lg.prototype["delete"]=mb,lg.prototype.get=iC,lg.prototype.has=fG,lg.prototype.set=gQ,d5.prototype.add=d5.prototype.push=e5,d5.prototype.has=kv,dK.prototype.clear=iS,dK.prototype["delete"]=gm,dK.prototype.get=j0,dK.prototype.has=l3,dK.prototype.set=k8;
var an=iQ(jL),n=iQ(fC,!0),jI=gj(),mD=gj(!0);
h0&&!mg.call({valueOf:1},"valueOf")&&(i1=function(W){return cy(h0(W))
});
var kQ=ky?function(ar,W){return ky.set(ar,W),ar
}:hG,lG=gV&&1/c1(new gV([,-0]))[1]==bE?function(W){return new gV(W)
}:fy,H=ky?function(W){return ky.get(W)
}:fy,hn=jP("length");
kL||(gU=function(){return[]
});
var f=kL?function(ar){for(var W=[];
ar;
){bW(W,gU(ar)),ar=gF(ar)
}return W
}:gU;
(mA&&l(new mA(new ArrayBuffer(1)))!=bz||iO&&l(new iO)!=by||fS&&l(fS.resolve())!=c8||gV&&l(new gV)!=c7||d8&&l(new d8)!=aH)&&(l=function(ea){var W=iJ.call(ea),ar=W==a3?ea.constructor:cx,cr=ar?gw(ar):cx;
if(cr){switch(cr){case gq:return bz;
case j3:return by;
case l9:return c8;
case ld:return c7;
case hM:return aH
}}return W
});
var iB=function(){var ar=0,W=0;
return function(ec,ee){var cr=lq(),ea=aD-(cr-W);
if(W=cr,ea>0){if(++ar>=bJ){return ec
}}else{ar=0
}return kQ(ec,ee)
}
}(),eW=j8(function(ar){var W=[];
return jU(ar).replace(a6,function(ee,ea,ec,cr){W.push(ec?cr.replace(bC,"$1"):ea||ee)
}),W
}),jw=jN(function(ar,W){return fk(ar)?em(ar,iY(W,1,fk,!0)):[]
}),h7=jN(function(cr,W){var ar=h9(W);
return fk(ar)&&(ar=cx),fk(cr)?em(cr,iY(W,1,fk,!0),kx(ar)):[]
}),lN=jN(function(cr,W){var ar=h9(W);
return fk(ar)&&(ar=cx),fk(cr)?em(cr,iY(W,1,fk,!0),cx,ar):[]
}),ih=jN(function(ar){var W=b7(ar,C);
return W.length&&W[0]===ar[0]?mh(W):[]
}),Q=jN(function(cr){var W=h9(cr),ar=b7(cr,C);
return W===h9(ar)?W=cx:ar.pop(),ar.length&&ar[0]===cr[0]?mh(ar,kx(W)):[]
}),f6=jN(function(cr){var W=h9(cr),ar=b7(cr,C);
return W===h9(ar)?W=cx:ar.pop(),ar.length&&ar[0]===cr[0]?mh(ar,cx,W):[]
}),hU=jN(R),kF=jN(function(ea,W){W=iY(W,1);
var ar=ea?ea.length:0,cr=jn(ea,W);
return lM(ea,b7(W,function(ec){return kP(ec,ar)?+ec:ec
}).sort(fw)),cr
}),dY=jN(function(W){return hZ(iY(W,1,fk,!0))
}),eq=jN(function(ar){var W=h9(ar);
return fk(W)&&(W=cx),hZ(iY(ar,1,fk,!0),kx(W))
}),l1=jN(function(ar){var W=h9(ar);
return fk(W)&&(W=cx),hZ(iY(ar,1,fk,!0),cx,W)
}),gP=jN(function(ar,W){return fk(ar)?em(ar,W):[]
}),g5=jN(function(W){return gW(cf(W,fk))
}),w=jN(function(ar){var W=h9(ar);
return fk(W)&&(W=cx),gW(cf(ar,fk),kx(W))
}),kd=jN(function(ar){var W=h9(ar);
return fk(W)&&(W=cx),gW(cf(ar,fk),cx,W)
}),dD=jN(mv),i2=jN(function(cr){var W=cr.length,ar=W>1?cr[W-1]:cx;
return ar="function"==typeof ar?(cr.pop(),ar):cx,iL(cr,ar)
}),jQ=jN(function(ec){ec=iY(ec,1);
var ar=ec.length,cr=ar?ec[0]:0,ea=this.__wrapped__,W=function(ee){return jn(ee,ec)
};
return !(ar>1||this.__actions__.length)&&ea instanceof dS&&kP(cr)?(ea=ea.slice(cr,+cr+(ar?1:0)),ea.__actions__.push({func:kw,args:[W],thisArg:cx}),new kz(ea,this.__chain__).thru(function(ee){return ar&&!ee.length&&ee.push(cx),ee
})):this.thru(W)
}),fF=kq(function(cr,W,ar){N.call(cr,ar)?++cr[ar]:cr[ar]=1
}),hz=kq(function(cr,W,ar){N.call(cr,ar)?cr[ar].push(W):cr[ar]=[W]
}),eN=jN(function(ef,cr,ec){var W=-1,ar="function"==typeof cr,ee=lb(cr),ea=eb(ef)?Array(ef.length):[];
return an(ef,function(el){var ei=ar?cr:ee&&null!=el?el[cr]:cx;
ea[++W]=ei?bY(ei,el,ec):fH(el,cr,ec)
}),ea
}),gA=kq(function(cr,W,ar){cr[ar]=W
}),kY=kq(function(cr,W,ar){cr[ar?0:1].push(W)
},function(){return[[],[]]
}),mO=jN(function(cr,W){if(null==cr){return[]
}var ar=W.length;
return ar>1&&mG(cr,W[0],W[1])?W=[]:ar>2&&mG(W[0],W[1],W[2])&&(W=[W[0]]),W=1==W.length&&gk(W[0])?W[0]:iY(W,1,gp),f5(cr,W,[])
}),lq=eP.now,fn=jN(function(ec,ar,cr){var ea=cF;
if(cr.length){var W=cN(cr,hL(fn));
ea|=bu
}return eL(ec,ea,ar,cr,W)
}),mq=jN(function(ec,ar,cr){var ea=cF|cv;
if(cr.length){var W=cN(cr,hL(mq));
ea|=bu
}return eL(ar,ea,ec,cr,W)
}),iI=jN(function(ar,W){return dV(ar,1,W)
}),fM=jN(function(cr,W,ar){return dV(cr,kk(W)||0,ar)
});
j8.Cache=lg;
var gO=jN(function(cr,W){W=1==W.length&&gk(W[0])?b7(W[0],cJ(kx())):b7(iY(W,1,gp),cJ(kx()));
var ar=W.length;
return jN(function(ea){for(var ec=-1,ee=eX(ea.length,ar);
++ec<ee;
){ea[ec]=W[ec].call(this,ea[ec])
}return bY(cr,this,ea)
})
}),d3=jN(function(cr,W){var ar=cN(W,hL(d3));
return eL(cr,bu,cx,W,ar)
}),e3=jN(function(cr,W){var ar=cN(W,hL(e3));
return eL(cr,aM,cx,W,ar)
}),kt=jN(function(ar,W){return eL(ar,bh,cx,cx,cx,iY(W,1))
}),dI=B(kT),iR=B(function(ar,W){return ar>=W
}),gk=Array.isArray,jZ=ij?function(W){return W instanceof ij
}:fO(!1),l2=B(gz),k7=B(function(ar,W){return W>=ar
}),hI=dG(function(cr,W){if(dN||iA(W)||eb(W)){return void d1(W,en(W),cr)
}for(var ar in W){N.call(W,ar)&&jg(cr,ar,W[ar])
}}),ey=dG(function(cr,W){if(dN||iA(W)||eb(W)){return void d1(W,fq(W),cr)
}for(var ar in W){jg(cr,ar,W[ar])
}}),jd=dG(function(ea,W,ar,cr){d1(W,fq(W),ea,cr)
}),fV=dG(function(ea,W,ar,cr){d1(W,en(W),ea,cr)
}),V=jN(function(ar,W){return jn(ar,iY(W,1))
}),g=jN(function(W){return W.push(cx,hJ),bY(jd,cx,W)
}),jF=jN(function(W){return W.push(cx,fh),bY(hj,cx,W)
}),mz=T(function(cr,W,ar){cr[W]=ar
},fO(hG)),kO=T(function(cr,W,ar){N.call(cr,W)?cr[W].push(ar):cr[W]=[ar]
},kx),lD=jN(fH),D=dG(function(cr,W,ar){hT(cr,W,ar)
}),hj=dG(function(ea,W,ar,cr){hT(ea,W,ar,cr)
}),mT=jN(function(ar,W){return null==ar?{}:(W=b7(iY(W,1),iZ),bt(ar,em(K(ar),W)))
}),ix=jN(function(ar,W){return null==ar?{}:bt(ar,b7(iY(W,1),iZ))
}),eO=iw(en),jm=iw(fq),h3=k6(function(cr,W,ar){return W=W.toLowerCase(),cr+(ar?lP(W):W)
}),lH=k6(function(cr,W,ar){return cr+(ar?"-":"")+W.toLowerCase()
}),h8=k6(function(cr,W,ar){return cr+(ar?" ":"")+W.toLowerCase()
}),M=l0("toLowerCase"),f0=k6(function(cr,W,ar){return cr+(ar?"_":"")+W.toLowerCase()
}),hO=k6(function(cr,W,ar){return cr+(ar?" ":"")+dT(W)
}),kA=k6(function(cr,W,ar){return cr+(ar?" ":"")+W.toUpperCase()
}),dT=l0("toUpperCase"),ej=jN(function(cr,W){try{return bY(cr,cx,W)
}catch(ar){return hS(ar)?ar:new jx(ar)
}}),lV=jN(function(ar,W){return bU(iY(W,1),function(cr){cr=iZ(cr),ar[cr]=fn(ar[cr],ar)
}),ar
}),gI=jb(),gY=jb(!0),p=jN(function(ar,W){return function(cr){return fH(cr,ar,W)
}
}),j5=jN(function(ar,W){return function(cr){return fH(ar,cr,W)
}
}),ct=jE(b7),iX=jE(b2),jK=jE(bT),fB=lC(),hq=lC(!0),eG=d(function(ar,W){return ar+W
}),gt=mR("ceil"),kS=d(function(ar,W){return ar/W
}),mJ=mR("floor"),lh=d(function(ar,W){return ar*W
}),fd=mR("round"),md=d(function(ar,W){return ar-W
});
return fZ.after=kC,fZ.ary=dX,fZ.assign=hI,fZ.assignIn=ey,fZ.assignInWith=jd,fZ.assignWith=fV,fZ.at=V,fZ.before=ep,fZ.bind=fn,fZ.bindAll=lV,fZ.bindKey=mq,fZ.castArray=kV,fZ.chain=d7,fZ.chunk=mk,fZ.compact=lk,fZ.concat=hQ,fZ.cond=i9,fZ.conforms=jX,fZ.constant=fO,fZ.countBy=fF,fZ.create=fK,fZ.curry=lZ,fZ.curryRight=gM,fZ.debounce=g2,fZ.defaults=g,fZ.defaultsDeep=jF,fZ.defer=iI,fZ.delay=fM,fZ.difference=jw,fZ.differenceBy=h7,fZ.differenceWith=lN,fZ.drop=eI,fZ.dropRight=jp,fZ.dropRightWhile=f2,fZ.dropWhile=at,fZ.fill=s,fZ.filter=jh,fZ.flatMap=j,fZ.flatMapDeep=jG,fZ.flatMapDepth=mC,fZ.flatten=kU,fZ.flattenDeep=lJ,fZ.flattenDepth=I,fZ.flip=t,fZ.flow=gI,fZ.flowRight=gY,fZ.fromPairs=hv,fZ.functions=fv,fZ.functionsIn=mw,fZ.groupBy=hz,fZ.initial=eZ,fZ.intersection=ih,fZ.intersectionBy=Q,fZ.intersectionWith=f6,fZ.invert=mz,fZ.invertBy=kO,fZ.invokeMap=eN,fZ.iteratee=eY,fZ.keyBy=gA,fZ.keys=en,fZ.keysIn=fq,fZ.map=c,fZ.mapKeys=kH,fZ.mapValues=dW,fZ.matches=gL,fZ.matchesProperty=k5,fZ.memoize=j8,fZ.merge=D,fZ.mergeWith=hj,fZ.method=p,fZ.methodOf=j5,fZ.mixin=b,fZ.negate=dC,fZ.nthArg=mB,fZ.omit=mT,fZ.omitBy=i4,fZ.once=i0,fZ.orderBy=iz,fZ.over=ct,fZ.overArgs=gO,fZ.overEvery=iX,fZ.overSome=jK,fZ.partial=d3,fZ.partialRight=e3,fZ.partition=kY,fZ.pick=ix,fZ.pickBy=gC,fZ.property=iP,fZ.propertyOf=fT,fZ.pull=hU,fZ.pullAll=R,fZ.pullAllBy=f9,fZ.pullAllWith=hX,fZ.pullAt=kF,fZ.range=fB,fZ.rangeRight=hq,fZ.rearg=kt,fZ.reject=h5,fZ.remove=kI,fZ.rest=jN,fZ.reverse=dZ,fZ.sampleSize=ib,fZ.set=mt,fZ.setWith=lv,fZ.shuffle=P,fZ.slice=et,fZ.sortBy=mO,fZ.sortedUniq=i5,fZ.sortedUniqBy=jT,fZ.split=gh,fZ.spread=fD,fZ.tail=fI,fZ.take=hC,fZ.takeRight=eS,fZ.takeRightWhile=gD,fZ.takeWhile=k1,fZ.tap=e7,fZ.throttle=hw,fZ.thru=kw,fZ.toArray=l6,fZ.toPairs=eO,fZ.toPairsIn=jm,fZ.toPath=ek,fZ.toPlainObject=dF,fZ.transform=hW,fZ.unary=eJ,fZ.union=dY,fZ.unionBy=eq,fZ.unionWith=l1,fZ.uniq=mP,fZ.uniqBy=lw,fZ.uniqWith=ft,fZ.unset=eR,fZ.unzip=mv,fZ.unzipWith=iL,fZ.update=jy,fZ.updateWith=f8,fZ.values=dt,fZ.valuesIn=y,fZ.without=gP,fZ.words=dL,fZ.wrap=gx,fZ.xor=g5,fZ.xorBy=w,fZ.xorWith=kd,fZ.zip=dD,fZ.zipObject=fP,fZ.zipObjectDeep=gS,fZ.zipWith=i2,fZ.entries=eO,fZ.entriesIn=jm,fZ.extend=ey,fZ.extendWith=jd,b(fZ,fZ),fZ.add=eG,fZ.attempt=ej,fZ.camelCase=h3,fZ.capitalize=lP,fZ.ceil=gt,fZ.clamp=jS,fZ.clone=mN,fZ.cloneDeep=fj,fZ.cloneDeepWith=mm,fZ.cloneWith=lm,fZ.deburr=O,fZ.divide=kS,fZ.endsWith=hB,fZ.eq=iF,fZ.escape=r,fZ.escapeRegExp=iK,fZ.every=eC,fZ.find=fW,fZ.findIndex=jM,fZ.findKey=hD,fZ.findLast=Z,fZ.findLastIndex=mE,fZ.findLastKey=eU,fZ.floor=mJ,fZ.forEach=lE,fZ.forEachRight=G,fZ.forIn=gE,fZ.forInRight=k2,fZ.forOwn=mQ,fZ.forOwnRight=lx,fZ.get=iM,fZ.gt=dI,fZ.gte=iR,fZ.has=fQ,fZ.hasIn=g7,fZ.head=i,fZ.identity=hG,fZ.includes=hk,fZ.indexOf=iE,fZ.inRange=mM,fZ.invoke=lD,fZ.isArguments=fJ,fZ.isArray=gk,fZ.isArrayBuffer=g3,fZ.isArrayLike=eb,fZ.isArrayLikeObject=fk,fZ.isBoolean=kD,fZ.isBuffer=jZ,fZ.isDate=dP,fZ.isElement=gy,fZ.isEmpty=j9,fZ.isEqual=mn,fZ.isEqualWith=ln,fZ.isError=hS,fZ.isFinite=eK,fZ.isFunction=jt,fZ.isInteger=f4,fZ.isLength=bn,fZ.isMap=mF,fZ.isMatch=kW,fZ.isMatchWith=lL,fZ.isNaN=J,fZ.isNative=hx,fZ.isNil=iG,fZ.isNull=k,fZ.isNumber=e0,fZ.isObject=u,fZ.isObjectLike=jO,fZ.isPlainObject=jA,fZ.isRegExp=id,fZ.isSafeInteger=lR,fZ.isSet=ip,fZ.isString=S,fZ.isSymbol=gb,fZ.isTypedArray=hY,fZ.isUndefined=kJ,fZ.isWeakMap=d0,fZ.isWeakSet=ev,fZ.join=jz,fZ.kebabCase=lH,fZ.last=h9,fZ.lastIndexOf=lQ,fZ.lowerCase=h8,fZ.lowerFirst=M,fZ.lt=l2,fZ.lte=k7,fZ.max=kG,fZ.maxBy=dU,fZ.mean=i3,fZ.meanBy=gB,fZ.min=kg,fZ.minBy=mr,fZ.multiply=lh,fZ.nth=im,fZ.noConflict=lA,fZ.noop=fy,fZ.now=lq,fZ.pad=e6,fZ.padEnd=jD,fZ.padStart=ik,fZ.parseInt=lY,fZ.random=k0,fZ.reduce=eT,fZ.reduceRight=jq,fZ.repeat=iv,fZ.replace=Y,fZ.result=kh,fZ.round=fd,fZ.runInContext=cp,fZ.sample=lK,fZ.size=f3,fZ.snakeCase=f0,fZ.some=hR,fZ.sortedIndex=l4,fZ.sortedIndexBy=gR,fZ.sortedIndexOf=g8,fZ.sortedLastIndex=z,fZ.sortedLastIndexBy=kj,fZ.sortedLastIndexOf=dE,fZ.startCase=hO,fZ.startsWith=h1,fZ.subtract=md,fZ.sum=lt,fZ.sumBy=hV,fZ.template=kM,fZ.times=g6,fZ.toFinite=gT,fZ.toInteger=g9,fZ.toLength=A,fZ.toLower=d6,fZ.toNumber=kk,fZ.toSafeInteger=i6,fZ.toString=jU,fZ.toUpper=eB,fZ.trim=mj,fZ.trimEnd=g1,fZ.trimStart=hg,fZ.truncate=F,fZ.unescape=kp,fZ.uniqueId=fp,fZ.upperCase=kA,fZ.upperFirst=dT,fZ.each=lE,fZ.eachRight=G,fZ.first=i,b(fZ,function(){var W={};
return jL(fZ,function(ar,cr){N.call(fZ.prototype,cr)||(W[cr]=ar)
}),W
}(),{chain:!1}),fZ.VERSION=cQ,bU(["bind","bindKey","curry","curryRight","partial","partialRight"],function(W){fZ[W].placeholder=fZ
}),bU(["drop","take"],function(ar,W){dS.prototype[ar]=function(ea){var ec=this.__filtered__;
if(ec&&!W){return new dS(this)
}ea=ea===cx?1:hF(g9(ea),0);
var cr=this.clone();
return ec?cr.__takeCount__=eX(ea,cr.__takeCount__):cr.__views__.push({size:eX(ea,dB),type:ar+(cr.__dir__<0?"Right":"")}),cr
},dS.prototype[ar+"Right"]=function(cr){return this.reverse()[ar](cr).reverse()
}
}),bU(["filter","map","takeWhile"],function(ea,W){var ar=W+1,cr=ar==ac||ar==dm;
dS.prototype[ea]=function(ee){var ec=this.clone();
return ec.__iteratees__.push({iteratee:kx(ee,3),type:ar}),ec.__filtered__=ec.__filtered__||cr,ec
}
}),bU(["head","last"],function(cr,W){var ar="take"+(W?"Right":"");
dS.prototype[cr]=function(){return this[ar](1).value()[0]
}
}),bU(["initial","tail"],function(cr,W){var ar="drop"+(W?"":"Right");
dS.prototype[cr]=function(){return this.__filtered__?new dS(this):this[ar](1)
}
}),dS.prototype.compact=function(){return this.filter(hG)
},dS.prototype.find=function(W){return this.filter(W).head()
},dS.prototype.findLast=function(W){return this.reverse().find(W)
},dS.prototype.invokeMap=jN(function(ar,W){return"function"==typeof ar?new dS(this):this.map(function(cr){return fH(cr,ar,W)
})
}),dS.prototype.reject=function(W){return W=kx(W,3),this.filter(function(ar){return !W(ar)
})
},dS.prototype.slice=function(cr,W){cr=g9(cr);
var ar=this;
return ar.__filtered__&&(cr>0||0>W)?new dS(ar):(0>cr?ar=ar.takeRight(-cr):cr&&(ar=ar.drop(cr)),W!==cx&&(W=g9(W),ar=0>W?ar.dropRight(-W):ar.take(W-cr)),ar)
},dS.prototype.takeRightWhile=function(W){return this.reverse().takeWhile(W).reverse()
},dS.prototype.toArray=function(){return this.take(dB)
},jL(dS.prototype,function(ee,cr){var ea=/^(?:filter|find|map|reject)|While$/.test(cr),ec=/^(?:head|last)$/.test(cr),W=fZ[ec?"take"+("last"==cr?"Right":""):cr],ar=ec||/^find/.test(cr);
W&&(fZ.prototype[cr]=function(){var ff=this.__wrapped__,ei=ec?[1]:arguments,es=ff instanceof dS,fa=ei[0],eu=es||gk(ff),el=function(fl){var fi=W.apply(fZ,bW([fl],ei));
return ec&&eo?fi[0]:fi
};
eu&&ea&&"function"==typeof fa&&1!=fa.length&&(es=eu=!1);
var eo=this.__chain__,ef=!!this.__actions__.length,fe=ar&&!eo,fc=es&&!ef;
if(!ar&&eu){ff=fc?ff:new dS(this);
var er=ee.apply(ff,ei);
return er.__actions__.push({func:kw,args:[el],thisArg:cx}),new kz(er,eo)
}return fe&&fc?ee.apply(this,ei):(er=this.thru(el),fe?ec?er.value()[0]:er.value():er)
})
}),bU(["pop","push","shift","sort","splice","unshift"],function(ea){var W=jR[ea],ar=/^(?:push|sort|unshift)$/.test(ea)?"tap":"thru",cr=/^(?:pop|shift)$/.test(ea);
fZ.prototype[ea]=function(){var ee=arguments;
if(cr&&!this.__chain__){var ec=this.value();
return W.apply(gk(ec)?ec:[],ee)
}return this[ar](function(ef){return W.apply(gk(ef)?ef:[],ee)
})
}
}),jL(dS.prototype,function(ec,ar){var cr=fZ[ar];
if(cr){var ea=cr.name+"",W=iV[ea]||(iV[ea]=[]);
W.push({name:ar,func:cr})
}}),iV[fU(cx,cv).name]=[{name:"wrapper",func:cx}],dS.prototype.clone=eh,dS.prototype.reverse=lU,dS.prototype.value=gH,fZ.prototype.at=jQ,fZ.prototype.chain=dM,fZ.prototype.commit=iT,fZ.prototype.next=gn,fZ.prototype.plant=l5,fZ.prototype.reverse=k9,fZ.prototype.toJSON=fZ.prototype.valueOf=fZ.prototype.value=hK,d4&&(fZ.prototype[d4]=j1),fZ
}var cx,cQ="4.12.0",cW=200,cS="Expected a function",cs="__lodash_hash_undefined__",cV="__lodash_placeholder__",cF=1,cv=2,cU=4,aY=8,bm=16,bu=32,aM=64,cd=128,bh=256,db=512,bX=1,dv=2,a9=30,aS="...",bJ=150,aD=16,ac=1,a4=2,dm=3,bE=1/0,cA=9007199254740991,ap=1.7976931348623157e+308,dg=NaN,dB=4294967295,ay=dB-1,bg=dB>>>1,aX="[object Arguments]",ai="[object Array]",cR="[object Boolean]",ao="[object Date]",ax="[object Error]",bM="[object Function]",dA="[object GeneratorFunction]",by="[object Map]",aR="[object Number]",a3="[object Object]",c8="[object Promise]",cO="[object RegExp]",c7="[object Set]",ah="[object String]",bl="[object Symbol]",aH="[object WeakMap]",aL="[object WeakSet]",a8="[object ArrayBuffer]",bz="[object DataView]",dl="[object Float32Array]",bb="[object Float64Array]",co="[object Int8Array]",bI="[object Int16Array]",du="[object Int32Array]",ca="[object Uint8Array]",bp="[object Uint8ClampedArray]",df="[object Uint16Array]",aC="[object Uint32Array]",bB=/\b__p \+= '';/g,cK=/\b(__p \+=) '' \+/g,aV=/(__e\(.*?\)|\b__t\)) \+\n'';/g,bj=/&(?:amp|lt|gt|quot|#39|#96);/g,bq=/[&<>"'`]/g,aJ=RegExp(bj.source),aF=RegExp(bq.source),b4=/<%-([\s\S]+?)%>/g,be=/<%([\s\S]+?)%>/g,c9=/<%=([\s\S]+?)%>/g,bP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dq=/^\w*$/,a6=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,aP=/[\\^$.*+?()[\]{}|]/g,bG=RegExp(aP.source),aA=/^\s+|\s+$/g,aa=/^\s+/,a1=/\s+$/,di=/[a-zA-Z0-9]+/g,bC=/\\(\\)?/g,cq=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,al=/\w*$/,dd=/^0x/i,dy=/^[-+]0x[0-9a-f]+$/i,av=/^0b[01]+$/i,bc=/^\[object .+?Constructor\]$/,aT=/^0o[0-7]+$/i,af=/^(?:0|[1-9]\d*)$/,cG=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,aj=/($^)/,aq=/['\n\r\u2028\u2029\\]/g,bK="\\ud800-\\udfff",dw="\\u0300-\\u036f\\ufe20-\\ufe23",bv="\\u20d0-\\u20f0",aN="\\u2700-\\u27bf",aZ="a-z\\xdf-\\xf6\\xf8-\\xff",c2="\\xac\\xb1\\xd7\\xf7",cB="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",cX="\\u2000-\\u206f",ad=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bi="A-Z\\xc0-\\xd6\\xd8-\\xde",aE="\\ufe0e\\ufe0f",aI=c2+cB+cX+ad,a5="['’]",bx="["+bK+"]",dh="["+aI+"]",ba="["+dw+bv+"]",cg="\\d+",bF="["+aN+"]",dp="["+aZ+"]",b0="[^"+bK+aI+cg+aN+aZ+bi+"]",bo="\\ud83c[\\udffb-\\udfff]",dc="(?:"+ba+"|"+bo+")",az="[^"+bK+"]",bA="(?:\\ud83c[\\udde6-\\uddff]){2}",cM="[\\ud800-\\udbff][\\udc00-\\udfff]",aW="["+bi+"]",bk="\\u200d",bs="(?:"+dp+"|"+b0+")",aK="(?:"+aW+"|"+b0+")",aG="(?:"+a5+"(?:d|ll|m|re|s|t|ve))?",b6="(?:"+a5+"(?:D|LL|M|RE|S|T|VE))?",bf=dc+"?",da="["+aE+"]?",bR="(?:"+bk+"(?:"+[az,bA,cM].join("|")+")"+da+bf+")*",ds=da+bf+bR,a7="(?:"+[bF,bA,cM].join("|")+")"+ds,aQ="(?:"+[az+ba+"?",ba,bA,cM,bx].join("|")+")",bH=RegExp(a5,"g"),aB=RegExp(ba,"g"),ab=RegExp(bo+"(?="+bo+")|"+aQ+ds,"g"),a2=RegExp([aW+"?"+dp+"+"+aG+"(?="+[dh,aW,"$"].join("|")+")",aK+"+"+b6+"(?="+[dh,aW+bs,"$"].join("|")+")",aW+"?"+bs+"+"+aG,aW+"+"+b6,cg,a7].join("|"),"g"),dk=RegExp("["+bk+bK+dw+bv+aE+"]"),bD=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,cu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","Reflect","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],am=-1,de={};
de[dl]=de[bb]=de[co]=de[bI]=de[du]=de[ca]=de[bp]=de[df]=de[aC]=!0,de[aX]=de[ai]=de[a8]=de[cR]=de[bz]=de[ao]=de[ax]=de[bM]=de[by]=de[aR]=de[a3]=de[cO]=de[c7]=de[ah]=de[aH]=!1;
var dz={};
dz[aX]=dz[ai]=dz[a8]=dz[bz]=dz[cR]=dz[ao]=dz[dl]=dz[bb]=dz[co]=dz[bI]=dz[du]=dz[by]=dz[aR]=dz[a3]=dz[cO]=dz[c7]=dz[ah]=dz[bl]=dz[ca]=dz[bp]=dz[df]=dz[aC]=!0,dz[ax]=dz[bM]=dz[aH]=!1;
var aw={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"},bd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},aU={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},ag={"function":!0,object:!0},cI={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ak=parseFloat,au=parseInt,bL=ag[typeof exports]&&exports&&!exports.nodeType?exports:cx,dx=ag[typeof module]&&module&&!module.nodeType?module:cx,bw=dx&&dx.exports===bL?bL:cx,aO=cw(bL&&dx&&"object"==typeof global&&global),a0=cw(ag[typeof self]&&self),c4=cw(ag[typeof window]&&window),cE=cw(ag[typeof this]&&this),c0=aO||c4!==(cE&&cE.window)&&c4||a0||cE||Function("return this")(),ae=cp();
(c4||a0||{})._=ae,"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return ae
}):bL&&dx?(bw&&((dx.exports=ae)._=ae),bL._=ae):c0._=ae
}).call(this);
angular.module("ResourceLibraryApp",["ngSanitize","ngAnimate"]).controller("ResourceLibraryController",["$scope","$http","$location",function(a,c,b){a.docTypes=null;
a.tags=null;
a.selectedTags=[];
a.search="";
a.loading=false;
a.sortOptions=[{title:"Newest First",slug:"newest",type:"date",reverse:true,selected:true},{title:"Oldest First",slug:"oldest",type:"date",reverse:false,selected:false},{title:"A to Z",slug:"a-z",type:"alpha",reverse:false,selected:false},{title:"Z to A",slug:"z-a",type:"alpha",reverse:true,selected:false}];
a.$watch("resourcePath",function(){if(_.isArray(a.tags)){return
}c.get(a.resourcePath+".filters.json").then(function(h){a.baseTags=h.data;
a.docTypes=_.head(a.baseTags).children;
a.tags=_.tail(a.baseTags);
var g;
try{g=JSON.parse(window.sessionStorage.numShown)
}catch(i){}a.loading=true;
var f=a.docTypes.length;
_.forEach(a.docTypes,function(k,j){k.selected=false;
k.numShown=_.get(g,j,5);
c.get(a.resourcePath+".resourcelist."+k.jsonResource+".json").then(function(l){_.find(a.docTypes,function(m){return l.config.url.indexOf("."+m.slug+".")>=0
}).docs=l.data;
if(--f==0){a.loading=false
}},function(l){console.error("Response error: ",l)
})
});
var d=b.search();
a.search=d.q==null?"":d.q;
if(d.sort){a.selectSort(_.find(a.sortOptions,{slug:d.sort}))
}_.forEach(_.split(b.path().substring(1),","),function(j){_.set(_.find(a.docTypes,{slug:j}),"selected",true)
});
if(_.every(a.docTypes,{selected:false})){_.forEach(a.docTypes,function(j){j.selected=true
})
}_.forEach(a.tags,function(j){if(_.has(d,j.slug)){_.forEach(_.split(d[j.slug],","),function(l){var k=_.find(j.children,{slug:l});
if(_.isObject(k)){k.selected=true;
a.selectedTags.push(k.tagId)
}})
}})
},function(d){console.error("Response error: ",d)
})
});
a.selectDocType=function(d){if(!_.isObject(d)){return
}a.startSearch();
b.path(d.jsonResource);
_.forEach(a.docTypes,function(f){f.selected=f.slug==d.jsonResource
})
};
a.queryChange=function(){a.startSearch();
var d=_.trim(a.search);
if(d.length==0){d=null
}b.search("q",d)
};
a.selectTag=function(d){a.gotoSection(".doc-search-filter-control");
a.resetSearch();
_.some(a.tags,function(g){var f=_.find(g.children,function(h){return d.assetTagId.indexOf(h.tagId)>=0
});
if(_.isObject(f)){f.selected=true;
a.selectionChange();
return true
}return false
})
};
a.selectTagDropdown=function(d){_.forEach(a.baseTags,function(f){f.selected=f.slug==d.slug&&!d.selected
})
};
a.selectionChange=function(){a.startSearch();
var d=_.filter(a.docTypes,{selected:true});
b.path(d.length==a.docTypes.length?null:_.join(_.map(d,"slug"),","));
a.selectedTags=[];
_.forEach(a.tags,function(f){var g=_.filter(f.children,{selected:true});
b.search(f.slug,g.length==0?null:_.join(_.map(g,"slug"),","));
a.selectedTags=_.concat(a.selectedTags,_.map(g,"tagId"))
})
};
a.startSearch=function(){_.forEach(a.docTypes,function(d){_.unset(d,"filtered")
})
};
a.countTotalResults=function(){return _.sumBy(a.docTypes,"filtered.length")
};
a.gotoSection=function(d){$("html,body").animate({scrollTop:$(d).offset().top-25},800)
};
a.getSelectedSort=function(){return _.find(a.sortOptions,{selected:true})
};
a.selectSort=function(d){if(!_.isObject(d)){return
}a.sortOptions.selected=false;
if(!d.selected){b.search("sort",d.slug);
a.getSelectedSort().selected=false;
d.selected=true
}};
a.docTypeFilter=function(d){if(!d.selected){return false
}else{if(!_.isArray(d.filtered)){return true
}else{return d.filtered.length>0
}}};
a.textFilter=function(d){return _.every(_.words(a.search),function(g){var f=new RegExp("\\b"+g,"i");
return f.test(d.title)||f.test(d.description)||_.some(d.assetTags,function(h){return f.test(h.assetTagTitle)
})
})
};
a.orderFilter=function(f){var d=a.getSelectedSort();
if(d.type=="date"){return new Date(f.lastModifiedDate)
}else{if(d.type=="alpha"){return f.title
}}};
a.assetTagFilter=function(d){return _.some(a.tags,function(f){return _.some(f.children,function(g){return g.tagId==d.assetTagId
})
})
};
a.tagFilter=function(d){if(!a.selectedTags||a.selectedTags.length==0){return true
}return _.some(a.selectedTags,function(f){return _.isObject(_.find(d.assetTags,function(g){return g.assetTagId.indexOf(f)>=0
}))
})
};
a.resetSearch=function(){a.startSearch();
b.url("");
a.search="";
a.selectSort(a.sortOptions[0]);
a.selectedTags=[];
_.forEach(a.docTypes,function(d){d.selected=true;
d.numShown=5
});
_.forEach(a.tags,function(d){d.selected=false;
_.forEach(d.children,function(f){f.selected=false
})
})
};
a.clickAnywhere=function(d){if(!$(d.target).closest(".filter-dropdowns").length){_.forEach(a.baseTags,function(f){f.selected=false
})
}if(!$(d.target).closest(".sort-dropdown").length){a.sortOptions.selected=false
}};
a.decodeHtml=function(d){return $("<textarea/>").html(d).text()
};
window.onbeforeunload=function(d){window.sessionStorage.numShown=JSON.stringify(_.map(a.docTypes,"numShown"))
}
}]);