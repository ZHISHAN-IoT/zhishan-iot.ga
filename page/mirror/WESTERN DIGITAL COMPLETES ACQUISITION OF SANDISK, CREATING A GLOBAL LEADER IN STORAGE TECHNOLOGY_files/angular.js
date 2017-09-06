(function(fn,fi,eQ){function fq(a){return function(){var m=arguments[0],v;
v="["+(a?a+":":"")+m+"] http://errors.angularjs.org/1.4.3/"+(a?a+"/":"")+m;
for(m=1;
m<arguments.length;
m++){v=v+(1==m?"?":"&")+"p"+(m-1)+"=";
var t=encodeURIComponent,q;
q=arguments[m];
q="function"==typeof q?q.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof q?"undefined":"string"!=typeof q?JSON.stringify(q):q;
v+=t(q)
}return Error(v)
}
}function Z(m){if(null==m||bT(m)){return !1
}var q="length" in Object(m)&&m.length;
return m.nodeType===bA&&q?!0:fp(m)||fu(m)||0===q||"number"===typeof q&&0<q&&q-1 in m
}function eS(m,q,y){var w,v;
if(m){if(eK(m)){for(w in m){"prototype"==w||"length"==w||"name"==w||m.hasOwnProperty&&!m.hasOwnProperty(w)||q.call(y,m[w],w,m)
}}else{if(fu(m)||Z(m)){var t="object"!==typeof m;
w=0;
for(v=m.length;
w<v;
w++){(t||w in m)&&q.call(y,m[w],w,m)
}}else{if(m.forEach&&m.forEach!==eS){m.forEach(q,y,m)
}else{if(co(m)){for(w in m){q.call(y,m[w],w,m)
}}else{if("function"===typeof m.hasOwnProperty){for(w in m){m.hasOwnProperty(w)&&q.call(y,m[w],w,m)
}}else{for(w in m){bG.call(m,w)&&q.call(y,m[w],w,m)
}}}}}}}return m
}function bY(m,q,w){for(var v=Object.keys(m).sort(),t=0;
t<v.length;
t++){q.call(w,m[v[t]],v[t])
}return v
}function bL(a){return function(m,q){a(q,m)
}
}function ct(){return ++cp
}function by(m,q){q?m.$$hashKey=q:delete m.$$hashKey
}function d2(J,L,H){for(var G=J.$$hashKey,A=0,z=L.length;
A<z;
++A){var y=L[A];
if(fs(y)||eK(y)){for(var w=Object.keys(y),t=0,v=w.length;
t<v;
t++){var q=w[t],m=y[q];
H&&fs(m)?fS(m)?J[q]=new Date(m.valueOf()):(fs(J[q])||(J[q]=fu(m)?[]:{}),d2(J[q],[m],!0)):J[q]=m
}}}by(J,G);
return J
}function fm(a){return d2(a,fM.call(arguments,1),!1)
}function b3(a){return d2(a,fM.call(arguments,1),!0)
}function e9(a){return parseInt(a,10)
}function dP(m,q){return fm(Object.create(m),q)
}function eP(){}function bt(a){return a
}function bp(a){return function(){return a
}
}function bn(a){return eK(a.toString)&&a.toString!==Object.prototype.toString
}function fz(a){return"undefined"===typeof a
}function eO(a){return"undefined"!==typeof a
}function fs(a){return null!==a&&"object"===typeof a
}function co(a){return null!==a&&"object"===typeof a&&!aY(a)
}function fp(a){return"string"===typeof a
}function fh(a){return"number"===typeof a
}function fS(a){return"[object Date]"===a0.call(a)
}function eK(a){return"function"===typeof a
}function a6(a){return"[object RegExp]"===a0.call(a)
}function bT(a){return a&&a.window===a
}function cj(a){return a&&a.$evalAsync&&a.$watch
}function fR(a){return"boolean"===typeof a
}function aK(a){return !(!a||!(a.nodeName||a.prop&&a.attr&&a.find))
}function bQ(m){var q={};
m=m.split(",");
var t;
for(t=0;
t<m.length;
t++){q[m[t]]=!0
}return q
}function aM(a){return fo(a.nodeName||a[0]&&a[0].nodeName)
}function fy(m,q){var t=m.indexOf(q);
0<=t&&m.splice(t,1);
return t
}function eh(m,q,y,w){if(bT(m)||cj(m)){throw r("cpws")
}if(ax.test(a0.call(q))){throw r("cpta")
}if(q){if(m===q){throw r("cpi")
}y=y||[];
w=w||[];
fs(m)&&(y.push(m),w.push(q));
var v;
if(fu(m)){for(v=q.length=0;
v<m.length;
v++){q.push(eh(m[v],null,y,w))
}}else{var t=q.$$hashKey;
fu(q)?q.length=0:eS(q,function(a,z){delete q[z]
});
if(co(m)){for(v in m){q[v]=eh(m[v],null,y,w)
}}else{if(m&&"function"===typeof m.hasOwnProperty){for(v in m){m.hasOwnProperty(v)&&(q[v]=eh(m[v],null,y,w))
}}else{for(v in m){bG.call(m,v)&&(q[v]=eh(m[v],null,y,w))
}}}by(q,t)
}}else{if(q=m,fs(m)){if(y&&-1!==(t=y.indexOf(m))){return w[t]
}if(fu(m)){return eh(m,[],y,w)
}if(ax.test(a0.call(m))){q=new m.constructor(m)
}else{if(fS(m)){q=new Date(m.getTime())
}else{if(a6(m)){q=new RegExp(m.source,m.toString().match(/[^\/]*$/)[0]),q.lastIndex=m.lastIndex
}else{return v=Object.create(aY(m)),eh(m,v,y,w)
}}}w&&(y.push(m),w.push(q))
}}return q
}function dy(m,q){if(fu(m)){q=q||[];
for(var v=0,t=m.length;
v<t;
v++){q[v]=m[v]
}}else{if(fs(m)){for(v in q=q||{},m){if("$"!==v.charAt(0)||"$"!==v.charAt(1)){q[v]=m[v]
}}}}return q||m
}function c2(m,q){if(m===q){return !0
}if(null===m||null===q){return !1
}if(m!==m&&q!==q){return !0
}var v=typeof m,t;
if(v==typeof q&&"object"==v){if(fu(m)){if(!fu(q)){return !1
}if((v=m.length)==q.length){for(t=0;
t<v;
t++){if(!c2(m[t],q[t])){return !1
}}return !0
}}else{if(fS(m)){return fS(q)?c2(m.getTime(),q.getTime()):!1
}if(a6(m)){return a6(q)?m.toString()==q.toString():!1
}if(cj(m)||cj(q)||bT(m)||bT(q)||fu(q)||fS(q)||a6(q)){return !1
}v=dX();
for(t in m){if("$"!==t.charAt(0)&&!eK(m[t])){if(!c2(m[t],q[t])){return !1
}v[t]=!0
}}for(t in q){if(!(t in v||"$"===t.charAt(0)||q[t]===eQ||eK(q[t]))){return !1
}}return !0
}}return !1
}function eY(m,q,t){return m.concat(fM.call(q,t))
}function ak(m,q){var t=2<arguments.length?fM.call(arguments,2):[];
return !eK(q)||q instanceof RegExp?q:t.length?function(){return arguments.length?q.apply(m,eY(t,arguments,0)):q.apply(m,t)
}:function(){return arguments.length?q.apply(m,arguments):q.call(m)
}
}function bD(m,q){var t=q;
"string"===typeof m&&"$"===m.charAt(0)&&"$"===m.charAt(1)?t=eQ:bT(q)?t="$WINDOW":q&&fi===q?t="$DOCUMENT":cj(q)&&(t="$SCOPE");
return t
}function eF(m,q){if("undefined"===typeof m){return eQ
}fh(q)||(q=q?2:null);
return JSON.stringify(m,bD,q)
}function C(a){return fp(a)?JSON.parse(a):a
}function i(m,q){var t=Date.parse("Jan 01, 1970 00:00:00 "+m)/60000;
return isNaN(t)?q:t
}function dD(m,q,v){v=v?-1:1;
var t=i(q,m.getTimezoneOffset());
q=m;
m=v*(t-m.getTimezoneOffset());
q=new Date(q.getTime());
q.setMinutes(q.getMinutes()+m);
return q
}function az(m){m=eM(m).clone();
try{m.empty()
}catch(q){}var v=eM("<div>").append(m).html();
try{return m[0].nodeType===d3?fo(v):v.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(y,w){return"<"+fo(w)
})
}catch(t){return fo(v)
}}function f3(m){try{return decodeURIComponent(m)
}catch(q){}}function fK(m){var q={},v,t;
eS((m||"").split("&"),function(a){a&&(v=a.replace(/\+/g,"%20").split("="),t=f3(v[0]),eO(t)&&(a=eO(v[1])?f3(v[1]):!0,bG.call(q,t)?fu(q[t])?q[t].push(a):q[t]=[q[t],a]:q[t]=a))
});
return q
}function dr(m){var q=[];
eS(m,function(a,t){fu(a)?eS(a,function(v){q.push(cD(t,!0)+(!0===v?"":"="+cD(v,!0)))
}):q.push(cD(t,!0)+(!0===a?"":"="+cD(a,!0)))
});
return q.length?q.join("&"):""
}function bZ(a){return cD(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")
}function cD(m,q){return encodeURIComponent(m).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,q?"%20":"+")
}function bs(m,q){var w,v,t=dQ.length;
for(v=0;
v<t;
++v){if(w=dQ[v]+q,fp(w=m.getAttribute(w))){return w
}}return null
}function a3(m,q){var w,v,t={};
eS(dQ,function(y){y+="app";
!w&&m.hasAttribute&&m.hasAttribute(y)&&(w=m,v=m.getAttribute(y))
});
eS(dQ,function(y){y+="app";
var z;
!w&&(z=m.querySelector("["+y.replace(":","\\:")+"]"))&&(w=z,v=z.getAttribute(y))
});
w&&(t.strictDi=null!==bs(w,"strict-di"),q(w,v?[v]:[],t))
}function bh(m,q,y){fs(y)||(y={});
y=fm({strictDi:!1},y);
var w=function(){m=eM(m);
if(m.injector()){var a=m[0]===fi?"document":az(m);
throw r("btstrpd",a.replace(/</,"&lt;").replace(/>/,"&gt;"))
}q=q||[];
q.unshift(["$provide",function(z){z.value("$rootElement",m)
}]);
y.debugInfoEnabled&&q.push(["$compileProvider",function(z){z.debugInfoEnabled(!0)
}]);
q.unshift("ng");
a=et(q,y.strictDi);
a.invoke(["$rootScope","$rootElement","$compile","$injector",function(A,z,H,G){A.$apply(function(){z.data("$injector",G);
H(z)(A)
})
}]);
return a
},v=/^NG_ENABLE_DEBUG_INFO!/,t=/^NG_DEFER_BOOTSTRAP!/;
fn&&v.test(fn.name)&&(y.debugInfoEnabled=!0,fn.name=fn.name.replace(v,""));
if(fn&&!t.test(fn.name)){return w()
}fn.name=fn.name.replace(t,"");
eZ.resumeBootstrap=function(a){eS(a,function(z){q.push(z)
});
return w()
};
eK(eZ.resumeDeferredBootstrap)&&eZ.resumeDeferredBootstrap()
}function b9(){fn.name="NG_ENABLE_DEBUG_INFO!"+fn.name;
fn.location.reload()
}function fP(a){a=eZ.element(a).injector();
if(!a){throw r("test")
}return a.get("$$testability")
}function aR(m,q){q=q||"_";
return m.replace(fv,function(a,t){return(t?q:"")+a.toLowerCase()
})
}function eV(){var m;
if(!aD){var q=bM();
cP=fn.jQuery;
eO(q)&&(cP=null===q?eQ:fn[q]);
cP&&cP.fn.on?(eM=cP,fm(cP.fn,{scope:dE.scope,isolateScope:dE.isolateScope,controller:dE.controller,injector:dE.injector,inheritedData:dE.inheritedData}),m=cP.cleanData,cP.cleanData=function(t){var y;
if(c7){c7=!1
}else{for(var w=0,v;
null!=(v=t[w]);
w++){(y=cP._data(v,"events"))&&y.$destroy&&cP(v).triggerHandler("$destroy")
}}m(t)
}):eM=fl;
eZ.element=eM;
aD=!0
}}function cU(m,q,t){if(!m){throw r("areq",q||"?",t||"required")
}return m
}function ds(m,q,t){t&&fu(m)&&(m=m[m.length-1]);
cU(eK(m),q,"not a function, got "+(m&&"object"===typeof m?m.constructor.name||"Object":typeof m));
return m
}function c8(m,q){if("hasOwnProperty"===m){throw r("badname",q)
}}function ap(m,q,z){if(!q){return m
}q=q.split(".");
for(var y,w=m,v=q.length,t=0;
t<v;
t++){y=q[t],m&&(m=(w=m)[y])
}return !z&&eK(m)?ak(w,m):m
}function bz(m){var q=m[0];
m=m[m.length-1];
var t=[q];
do{q=q.nextSibling;
if(!q){break
}t.push(q)
}while(q!==m);
return eM(t)
}function dX(){return Object.create(null)
}function eC(m){function q(y,w,z){return y[w]||(y[w]=z())
}var v=fq("$injector"),t=fq("ng");
m=q(m,"angular",Object);
m.$$minErr=m.$$minErr||fq;
return q(m,"module",function(){var a={};
return function(z,y,w){if("hasOwnProperty"===z){throw t("badname","module")
}y&&a.hasOwnProperty(z)&&(a[z]=null);
return q(a,z,function(){function H(P,T,R,Q){Q||(Q=O);
return function(){Q[R||"push"]([P,T,arguments]);
return M
}
}function G(P,Q){return function(R,T){T&&eK(T)&&(T.$$moduleName=z);
O.push([P,Q,arguments]);
return M
}
}if(!y){throw v("nomod",z)
}var O=[],L=[],J=[],A=H("$injector","invoke","push",L),M={_invokeQueue:O,_configBlocks:L,_runBlocks:J,requires:y,name:z,provider:G("$provide","provider"),factory:G("$provide","factory"),service:G("$provide","service"),value:H("$provide","value"),constant:H("$provide","constant","unshift"),decorator:G("$provide","decorator"),animation:G("$animateProvider","register"),filter:G("$filterProvider","register"),controller:G("$controllerProvider","register"),directive:G("$compileProvider","directive"),config:A,run:function(P){J.push(P);
return this
}};
w&&A(w);
return M
})
}
})
}function eq(m){fm(m,{bootstrap:bh,copy:eh,extend:fm,merge:b3,equals:c2,element:eM,forEach:eS,injector:et,noop:eP,bind:ak,toJson:eF,fromJson:C,identity:bt,isUndefined:fz,isDefined:eO,isString:fp,isFunction:eK,isObject:fs,isNumber:fh,isElement:aK,isArray:fu,version:d6,isDate:fS,lowercase:fo,uppercase:bo,callbacks:{counter:0},getTestability:fP,$$minErr:fq,$$csp:d9,reloadWithDebugInfo:b9});
dW=eC(fn);
try{dW("ngLocale")
}catch(q){dW("ngLocale",[]).provider("$locale",dT)
}dW("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:dH});
t.provider("$compile",N).directive({a:du,input:o,textarea:o,form:di,script:cY,select:cL,style:cz,option:cm,ngBind:bW,ngBindHtml:bJ,ngBindTemplate:bw,ngClass:bl,ngClassEven:aW,ngClassOdd:aI,ngCloak:av,ngController:ai,ngForm:x,ngHide:g,ngIf:f1,ngInclude:fI,ngInit:a9,ngNonBindable:aP,ngPluralize:aB,ngRepeat:an,ngShow:I,ngStyle:l,ngSwitch:f7,ngSwitchWhen:fU,ngSwitchDefault:fB,ngOptions:e2,ngTransclude:eH,ngModel:ev,ngList:ej,ngChange:dZ,pattern:b,ngPattern:b,required:fW,ngRequired:fW,minlength:fD,ngMinlength:fD,maxlength:e4,ngMaxlength:e4,ngValue:dM,ngModelOptions:dA}).directive({ngInclude:dn}).directive(aZ).directive(eJ);
t.provider({$anchorScroll:c4,$animate:cR,$$animateQueue:cF,$$AnimateRunner:cs,$browser:b2,$cacheFactory:bP,$controller:bC,$document:br,$exceptionHandler:a2,$filter:ex,$interpolate:b8,$interval:fO,$http:ft,$httpParamSerializer:eU,$httpParamSerializerJQLike:eB,$httpBackend:ep,$location:d5,$log:dS,$parse:dG,$rootScope:dh,$q:cX,$$q:cK,$sce:cy,$sceDelegate:cl,$sniffer:bV,$templateCache:bI,$templateRequest:bv,$$testability:bk,$timeout:aV,$window:aH,$$rAF:au,$$jqLite:ah,$$HashMap:u,$$cookieReader:f})
}])
}function dK(a){return a.replace(f0,function(q,m,v,t){return t?v.toUpperCase():v
}).replace(fH,"Moz$1")
}function el(a){a=a.nodeType;
return a===bA||!a||9===a
}function d1(m,q){var y,w,v=q.createDocumentFragment(),t=[];
if(cI.test(m)){y=y||v.appendChild(q.createElement("div"));
w=(a8.exec(m)||["",""])[1].toLowerCase();
w=cq[w]||cq._default;
y.innerHTML=w[1]+m.replace(aO,"<$1></$2>")+w[2];
for(w=w[0];
w--;
){y=y.lastChild
}t=eY(t,y.childNodes);
y=v.firstChild;
y.textContent=""
}else{t.push(q.createTextNode(m))
}v.textContent="";
v.innerHTML="";
eS(t,function(z){v.appendChild(z)
});
return v
}function fl(m){if(m instanceof fl){return m
}var q;
fp(m)&&(m=fk(m),q=!0);
if(!(this instanceof fl)){if(q&&"<"!=m.charAt(0)){throw cv("nosel")
}return new fl(m)
}if(q){q=fi;
var t;
m=(t=aA.exec(m))?[q.createElement(t[1])]:(t=d1(m,q))?t.childNodes:[]
}dO(this,m)
}function b5(a){return a.cloneNode(!0)
}function aL(m,q){q||ay(m);
if(m.querySelectorAll){for(var w=m.querySelectorAll("*"),v=0,t=w.length;
v<t;
v++){ay(w[v])
}}}function dC(m,q,y,w){if(eO(w)){throw cv("offargs")
}var v=(w=al(m))&&w.events,t=w&&w.handle;
if(t){if(q){eS(q.split(" "),function(z){if(eO(y)){var A=v[z];
fy(A||[],y);
if(A&&0<A.length){return
}}m.removeEventListener(z,t,!1);
delete v[z]
})
}else{for(q in v){"$destroy"!==q&&m.removeEventListener(q,t,!1),delete v[q]
}}}}function ay(m,q){var v=m.ng339,t=v&&dx[v];
t&&(q?delete t.data[q]:(t.handle&&(t.events.$destroy&&t.handle({},"$destroy"),dC(m)),delete dx[v],m.ng339=eQ))
}function al(m,q){var t=m.ng339,t=t&&dx[t];
q&&!t&&(m.ng339=t=++am,t=dx[t]={events:{},data:{},handle:eQ});
return t
}function bS(m,q,y){if(el(m)){var w=eO(y),v=!w&&q&&!fs(q),t=!q;
m=(m=al(m,!v))&&m.data;
if(w){m[q]=y
}else{if(t){return m
}if(v){return m&&m[q]
}fm(m,q)
}}}function D(m,q){return m.getAttribute?-1<(" "+(m.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+q+" "):!1
}function j(m,q){q&&m.setAttribute&&eS(q.split(" "),function(t){m.setAttribute("class",fk((" "+(m.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+fk(t)+" "," ")))
})
}function f4(m,q){if(q&&m.setAttribute){var t=(" "+(m.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
eS(q.split(" "),function(v){v=fk(v);
-1===t.indexOf(" "+v+" ")&&(t+=v+" ")
});
m.setAttribute("class",fk(t))
}}function dO(m,q){if(q){if(q.nodeType){m[m.length++]=q
}else{var v=q.length;
if("number"===typeof v&&q.window!==q){if(v){for(var t=0;
t<v;
t++){m[m.length++]=q[t]
}}}else{m[m.length++]=q
}}}}function dq(m,q){return fL(m,"$"+(q||"ngController")+"Controller")
}function fL(m,q,w){9==m.nodeType&&(m=m.documentElement);
for(q=fu(q)?q:[q];
m;
){for(var v=0,t=q.length;
v<t;
v++){if((w=eM.data(m,q[v]))!==eQ){return w
}}m=m.parentNode||11===m.nodeType&&m.host
}}function c6(a){for(aL(a,!0);
a.firstChild;
){a.removeChild(a.firstChild)
}}function bF(m,q){q||aL(m);
var t=m.parentNode;
t&&t.removeChild(m)
}function F(m,q){q=q||fn;
if("complete"===q.document.readyState){q.setTimeout(m)
}else{eM(q).on("load",m)
}}function cT(m,q){var t=bi[q.toLowerCase()];
return t&&cH[aM(m)]&&t
}function k(m,q){var t=m.nodeName;
return("INPUT"===t||"TEXTAREA"===t)&&cu[q]
}function f6(m,q){var t=function(A,z){A.isDefaultPrevented=function(){return A.defaultPrevented
};
var y=q[z||A.type],w=y?y.length:0;
if(w){if(fz(A.immediatePropagationStopped)){var v=A.stopImmediatePropagation;
A.stopImmediatePropagation=function(){A.immediatePropagationStopped=!0;
A.stopPropagation&&A.stopPropagation();
v&&v.call(A)
}
}A.isImmediatePropagationStopped=function(){return !0===A.immediatePropagationStopped
};
1<w&&(y=dy(y));
for(var a=0;
a<w;
a++){A.isImmediatePropagationStopped()||y[a].call(m,A)
}}};
t.elem=m;
return t
}function ah(){this.$get=function(){return fm(fl,{hasClass:function(m,q){m.attr&&(m=m[0]);
return D(m,q)
},addClass:function(m,q){m.attr&&(m=m[0]);
return f4(m,q)
},removeClass:function(m,q){m.attr&&(m=m[0]);
return j(m,q)
}})
}
}function d(m,q){var t=m&&m.$$hashKey;
if(t){return"function"===typeof t&&(t=m.$$hashKey()),t
}t=typeof m;
return t="function"==t||"object"==t&&null!==m?m.$$hashKey=t+":"+(q||ct)():t+":"+m
}function cV(m,q){if(q){var t=0;
this.nextUid=function(){return ++t
}
}eS(m,this.put,this)
}function fT(a){return(a=a.toString().replace(b4,"").match(bR))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"
}function et(L,O){function J(Q){return function(a,R){if(fs(a)){eS(a,bL(Q))
}else{return Q(a,R)
}}
}function H(R,Q){c8(R,"service");
if(eK(Q)||fu(Q)){Q=P.instantiate(Q)
}if(!Q.$get){throw fY("pget",R)
}return m[R+"Provider"]=Q
}function G(R,Q){return function(){var a=q.invoke(Q,this);
if(fz(a)){throw fY("undef",R)
}return a
}
}function A(R,Q,T){return H(R,{$get:!1!==T?G(R,Q):Q})
}function z(R){var Q=[],T;
eS(R,function(U){function W(Y){var X,ac;
X=0;
for(ac=Y.length;
X<ac;
X++){var ab=Y[X],aa=P.get(ab[0]);
aa[ab[1]].apply(aa,ab[2])
}}if(!t.get(U)){t.put(U,!0);
try{fp(U)?(T=dW(U),Q=Q.concat(z(T.requires)).concat(T._runBlocks),W(T._invokeQueue),W(T._configBlocks)):eK(U)?Q.push(P.invoke(U)):fu(U)?Q.push(P.invoke(U)):ds(U,"module")
}catch(V){throw fu(U)&&(U=U[U.length-1]),V.message&&V.stack&&-1==V.stack.indexOf(V.message)&&(V=V.message+"\n"+V.stack),fY("modulerr",U,V.stack||V.message||V)
}}});
return Q
}function y(a,T){function R(U,W){if(a.hasOwnProperty(U)){if(a[U]===v){throw fY("cdep",U+" <- "+w.join(" <- "))
}return a[U]
}try{return w.unshift(U),a[U]=v,a[U]=T(U,W)
}catch(V){throw a[U]===v&&delete a[U],V
}finally{w.shift()
}}function Q(ac,ab,aa,Y){"string"===typeof aa&&(Y=aa,aa=null);
var X=[],W=et.$$annotate(ac,O,Y),V,ae,U;
ae=0;
for(V=W.length;
ae<V;
ae++){U=W[ae];
if("string"!==typeof U){throw fY("itkn",U)
}X.push(aa&&aa.hasOwnProperty(U)?aa[U]:R(U,Y))
}fu(ac)&&(ac=ac[V]);
return ac.apply(ab,X)
}return{invoke:Q,instantiate:function(V,U,X){var W=Object.create((fu(V)?V[V.length-1]:V).prototype||null);
V=Q(V,W,U,X);
return fs(V)||eK(V)?V:W
},get:R,annotate:et.$$annotate,has:function(U){return m.hasOwnProperty(U+"Provider")||a.hasOwnProperty(U)
}}
}O=!0===O;
var v={},w=[],t=new cV([],!0),m={$provide:{provider:J(H),factory:J(A),service:J(function(R,Q){return A(R,["$injector",function(T){return T.instantiate(Q)
}])
}),value:J(function(R,Q){return A(R,bp(Q),!1)
}),constant:J(function(R,Q){c8(R,"constant");
m[R]=Q;
M[R]=Q
}),decorator:function(R,Q){var U=P.get(R+"Provider"),T=U.$get;
U.$get=function(){var V=q.invoke(T,U);
return q.invoke(Q,null,{$delegate:V})
}
}}},P=m.$injector=y(m,function(R,Q){eZ.isString(Q)&&w.push(Q);
throw fY("unpr",w.join(" <- "))
}),M={},q=M.$injector=y(M,function(R,Q){var T=P.get(R+"Provider",Q);
return q.invoke(T.$get,T,eQ,R)
});
eS(z(L),function(Q){Q&&q.invoke(Q)
});
return q
}function c4(){var a=!0;
this.disableAutoScrolling=function(){a=!1
};
this.$get=["$window","$location","$rootScope",function(m,z,y){function w(G){var A=null;
Array.prototype.some.call(G,function(H){if("a"===aM(H)){return A=H,!0
}});
return A
}function v(A){if(A){A.scrollIntoView();
var G;
G=t.yOffset;
eK(G)?G=G():aK(G)?(G=G[0],G="fixed"!==m.getComputedStyle(G).position?0:G.getBoundingClientRect().bottom):fh(G)||(G=0);
G&&(A=A.getBoundingClientRect().top,m.scrollBy(0,A-G))
}else{m.scrollTo(0,0)
}}function t(G){G=fp(G)?G:z.hash();
var A;
G?(A=q.getElementById(G))?v(A):(A=w(q.getElementsByName(G)))?v(A):"top"===G&&v(null):v(null)
}var q=m.document;
a&&y.$watch(function(){return z.hash()
},function(G,A){G===A&&""===G||F(function(){y.$evalAsync(t)
})
});
return t
}]
}function dl(m,q){if(!m&&!q){return""
}if(!m){return q
}if(!q){return m
}fu(m)&&(m=m.join(" "));
fu(q)&&(q=q.join(" "));
return m+" "+q
}function fA(m){fp(m)&&(m=m.split(" "));
var q=dX();
eS(m,function(a){a.length&&(q[a]=!0)
});
return q
}function fF(a){return fs(a)?a:{}
}function e1(aa,ab,Y,X){function W(ac){try{ac.apply(null,fM.call(arguments,1))
}finally{if(H--,0===H){for(;
y.length;
){try{y.pop()()
}catch(q){Y.error(q)
}}}}}function V(){U();
T()
}function U(){q:{try{z=P.state;
break q
}catch(q){}z=void 0
}z=fz(z)?null:z;
c2(z,A)&&(z=A);
A=z
}function T(){if(t!==Q.url()||O!==z){t=Q.url(),O=z,eS(L,function(q){q(Q.url(),z)
})
}}var Q=this,R=aa.location,P=aa.history,J=aa.setTimeout,G=aa.clearTimeout,w={};
Q.isMock=!1;
var H=0,y=[];
Q.$$completeOutstandingRequest=W;
Q.$$incOutstandingRequestCount=function(){H++
};
Q.notifyWhenNoOutstandingRequests=function(q){0===H?q():y.push(q)
};
var z,O,t=R.href,M=ab.find("base"),v=null;
U();
O=z;
Q.url=function(q,ag,af){fz(af)&&(af=null);
R!==aa.location&&(R=aa.location);
P!==aa.history&&(P=aa.history);
if(q){var ae=O===af;
if(t===q&&(!X.history||ae)){return Q
}var ac=t&&e6(t)===e6(q);
t=q;
O=af;
if(!X.history||ac&&ae){if(!ac||v){v=q
}ag?R.replace(q):ac?(ag=R,af=q.indexOf("#"),q=-1===af?"":q.substr(af),ag.hash=q):R.href=q
}else{P[ag?"replaceState":"pushState"](af,"",q),U(),O=z
}return Q
}return v||R.href.replace(/%27/g,"'")
};
Q.state=function(){return z
};
var L=[],m=!1,A=null;
Q.onUrlChange=function(q){if(!m){if(X.history){eM(aa).on("popstate",V)
}eM(aa).on("hashchange",V);
m=!0
}L.push(q);
return q
};
Q.$$applicationDestroyed=function(){eM(aa).off("hashchange popstate",V)
};
Q.$$checkUrlChange=T;
Q.baseHref=function(){var q=M.attr("href");
return q?q.replace(/^(https?\:)?\/\/[^\/]*/,""):""
};
Q.defer=function(ac,q){var ae;
H++;
ae=J(function(){delete w[ae];
W(ac)
},q||0);
w[ae]=!0;
return ae
};
Q.defer.cancel=function(q){return w[q]?(delete w[q],G(q),W(eP),!0):!1
}
}function b2(){this.$get=["$window","$log","$sniffer","$document",function(m,q,v,t){return new e1(m,t,q,v)
}]
}function bP(){this.$get=function(){function m(J,H){function G(M){M!=a&&(L?L==M&&(L=M.n):L=M,A(M.n,M.p),A(M,a),a=M,a.n=null)
}function A(O,M){O!=M&&(O&&(O.p=M),M&&(M.n=O))
}if(J in q){throw fq("$cacheFactory")("iid",J)
}var z=0,y=fm({},H,{id:J}),v={},w=H&&H.capacity||Number.MAX_VALUE,t={},a=null,L=null;
return q[J]={put:function(O,M){if(!fz(M)){if(w<Number.MAX_VALUE){var P=t[O]||(t[O]={key:O});
G(P)
}O in v||z++;
v[O]=M;
z>w&&this.remove(L.key);
return M
}},get:function(O){if(w<Number.MAX_VALUE){var M=t[O];
if(!M){return
}G(M)
}return v[O]
},remove:function(O){if(w<Number.MAX_VALUE){var M=t[O];
if(!M){return
}M==a&&(a=M.p);
M==L&&(L=M.n);
A(M.n,M.p);
delete t[O]
}delete v[O];
z--
},removeAll:function(){v={};
z=0;
t={};
a=L=null
},destroy:function(){t=y=v=null;
delete q[J]
},info:function(){return fm({},y,{size:z})
}}
}var q={};
m.info=function(){var a={};
eS(q,function(t,v){a[v]=t.info()
});
return a
};
m.get=function(a){return q[a]
};
return m
}
}function bI(){this.$get=["$cacheFactory",function(a){return a("templates")
}]
}function N(H,J){function G(O,M,R){var Q=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,P={};
eS(O,function(T,V){var U=T.match(Q);
if(!U){throw eu("iscp",M,V,T,R?"controller bindings definition":"isolate scope definition")
}P[V]={mode:U[1][0],collection:"*"===U[2],optional:"?"===U[3],attrName:U[4]||V}
});
return P
}function A(O){var M=O.charAt(0);
if(!M||M!==fo(M)){throw eu("baddir",O)
}if(O!==O.trim()){throw eu("baddir",O)
}}var z={},y=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,w=/(([\w\-]+)(?:\:([^;]+))?;?)/,v=bQ("ngSrc,ngSrcset,src,srcset"),q=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,t=/^(on[a-z]+|formaction)$/;
this.directive=function L(M,O){c8(M,"directive");
fp(M)?(A(M),cU(O,"directiveFactory"),z.hasOwnProperty(M)||(z[M]=[],H.factory(M+"Directive",["$injector","$exceptionHandler",function(a,Q){var P=[];
eS(z[M],function(ae,ab){try{var aa=a.invoke(ae);
eK(aa)?aa={compile:bp(aa)}:!aa.compile&&aa.link&&(aa.compile=bp(aa.link));
aa.priority=aa.priority||0;
aa.index=ab;
aa.name=aa.name||M;
aa.require=aa.require||aa.controller&&aa.name;
aa.restrict=aa.restrict||"EA";
var X=aa,W=aa,ag=aa.name,U={isolateScope:null,bindToController:null};
fs(W.scope)&&(!0===W.bindToController?(U.bindToController=G(W.scope,ag,!0),U.isolateScope={}):U.isolateScope=G(W.scope,ag,!1));
fs(W.bindToController)&&(U.bindToController=G(W.bindToController,ag,!0));
if(fs(U.bindToController)){var T=W.controller,Y=W.controllerAs;
if(!T){throw eu("noctrl",ag)
}var ac;
M:if(Y&&fp(Y)){ac=Y
}else{if(fp(T)){var V=bE.exec(T);
if(V){ac=V[3];
break M
}}ac=void 0
}if(!ac){throw eu("noident",ag)
}}var R=X.$$bindings=U;
fs(R.isolateScope)&&(aa.$$isolateBindings=R.isolateScope);
aa.$$moduleName=ae.$$moduleName;
P.push(aa)
}catch(af){Q(af)
}});
return P
}])),z[M].push(O)):eS(M,bL(L));
return this
};
this.aHrefSanitizationWhitelist=function(a){return eO(a)?(J.aHrefSanitizationWhitelist(a),this):J.aHrefSanitizationWhitelist()
};
this.imgSrcSanitizationWhitelist=function(a){return eO(a)?(J.imgSrcSanitizationWhitelist(a),this):J.imgSrcSanitizationWhitelist()
};
var m=!0;
this.debugInfoEnabled=function(M){return eO(M)?(m=M,this):m
};
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(ff,fe,fd,fc,eb,ef,be,ed,bg,ce,bd){function cc(Q,O){try{Q.addClass(O)
}catch(T){}}function P(Q,O,Y,X,W){Q instanceof eM||(Q=eM(Q));
eS(Q,function(a,aa){a.nodeType==d3&&a.nodeValue.match(/\S+/)&&(Q[aa]=eM(a).wrap("<span></span>").parent()[0])
});
var V=ag(Q,O,Q,Y,X,W);
P.$$addScopeClass(Q);
var T=null;
return function(a,fg,fa){cU(a,"scope");
fa=fa||{};
var da=fa.parentBoundTranscludeFn,ca=fa.transcludeControllers;
fa=fa.futureParentElement;
da&&da.$$boundTransclude&&(da=da.$$boundTransclude);
T||(T=(fa=fa&&fa[0])?"foreignobject"!==aM(fa)&&fa.toString().match(/SVG/)?"svg":"html":"html");
fa="html"!==T?eM(fb(T,eM("<div>").append(Q).html())):fg?dE.clone.call(Q):Q;
if(ca){for(var aa in ca){fa.data("$"+aa+"Controller",ca[aa].instance)
}}P.$$addScopeInfo(fa,a);
fg&&fg(fa,a);
V&&V(a,fa,fa,da);
return fa
}
}function ag(f9,fg,fa,da,ca,aa){function Y(gk,gj,gi,gh){var gg,gf,ge,gl,gd,gc,gb;
if(Q){for(gb=Array(gj.length),gl=0;
gl<X.length;
gl+=3){gg=X[gl],gb[gg]=gj[gg]
}}else{gb=gj
}gl=0;
for(gd=X.length;
gl<gd;
){if(gf=gb[X[gl++]],gj=X[gl++],gg=X[gl++],gj){if(gj.scope){if(ge=gk.$new(),P.$$addScopeInfo(eM(gf),ge),gc=gj.$$destroyBindings){gj.$$destroyBindings=null,ge.$on("$destroyed",gc)
}}else{ge=gk
}gc=gj.transcludeOnThisElement?dd(gk,gj.transclude,gh):!gj.templateOnThisElement&&gh?gh:!gh&&fg?dd(gk,fg):null;
gj(gg,ge,gf,gi,gc,gj)
}else{gg&&gg(gk,gf.childNodes,eQ,gh)
}}}for(var X=[],W,V,ga,T,Q,O=0;
O<f9.length;
O++){W=new cg;
V=M(f9[O],[],W,0===O?da:eQ,ca);
(aa=V.length?cb(V,f9[O],W,fg,fa,null,[],[],aa):null)&&aa.scope&&P.$$addScopeClass(W.$$element);
W=aa&&aa.terminal||!(ga=f9[O].childNodes)||!ga.length?null:ag(ga,aa?(aa.transcludeOnThisElement||!aa.templateOnThisElement)&&aa.transclude:fg);
if(aa||W){X.push(O,aa,W),T=!0,Q=Q||aa
}aa=null
}return T?Y:null
}function dd(Q,O,T){return function(Y,X,W,V,a){Y||(Y=Q.$new(!1,a),Y.$$transcluded=!0);
return O(Y,X,{parentBoundTranscludeFn:T,transcludeControllers:W,futureParentElement:V})
}
}function M(gb,f9,fg,fa,da){var ca=fg.$attr,X;
switch(gb.nodeType){case bA:ea(f9,E(aM(gb)),"E",fa,da);
for(var W,gd,V,T=gb.attributes,Q=0,O=T&&T.length;
Q<O;
Q++){var ga=!1,Y=!1;
W=T[Q];
X=W.name;
gd=fk(W.value);
W=E(X);
if(V=dg.test(W)){X=X.replace(a4,"").substr(8).replace(/_(.)/g,function(gf,ge){return ge.toUpperCase()
})
}var gc=W.replace(/(Start|End)$/,"");
cf(gc)&&W===gc+"Start"&&(ga=X,Y=X.substr(0,X.length-5)+"end",X=X.substr(0,X.length-6));
W=E(X.toLowerCase());
ca[W]=X;
if(V||!fg.hasOwnProperty(W)){fg[W]=gd,cT(gb,W)&&(fg[W]=!0)
}ac(gb,f9,gd,W,V);
ea(f9,W,"A",fa,da,ga,Y)
}gb=gb.className;
fs(gb)&&(gb=gb.animVal);
if(fp(gb)&&""!==gb){for(;
X=w.exec(gb);
){W=E(X[2]),ea(f9,W,"C",fa,da)&&(fg[W]=fk(X[3])),gb=gb.substr(X.index+X[0].length)
}}break;
case d3:if(11===cw){for(;
gb.parentNode&&gb.nextSibling&&gb.nextSibling.nodeType===d3;
){gb.nodeValue+=gb.nextSibling.nodeValue,gb.parentNode.removeChild(gb.nextSibling)
}}ee(f9,gb.nodeValue);
break;
case 8:try{if(X=y.exec(gb.nodeValue)){W=E(X[1]),ea(f9,W,"M",fa,da)&&(fg[W]=fk(X[2]))
}}catch(aa){}}f9.sort(ec);
return f9
}function dc(Q,O,W){var V=[],T=0;
if(O&&Q.hasAttribute&&Q.hasAttribute(O)){do{if(!Q){throw eu("uterdir",O,W)
}Q.nodeType==bA&&(Q.hasAttribute(O)&&T++,Q.hasAttribute(W)&&T--);
V.push(Q);
Q=Q.nextSibling
}while(0<T)
}else{V.push(Q)
}return eM(V)
}function eg(Q,O,T){return function(Y,X,W,V,a){X=dc(X[0],O,T);
return Q(Y,X,W,V,a)
}
}function cb(gv,gu,gt,gs,gr,gq,gp,gn,gh){function gl(gw,Q,gy,gx){if(gw){gy&&(gw=eg(gw,gy,gx));
gw.require=gf.require;
gw.directiveName=ga;
if(gd===gf||gf.$$isolateScope){gw=U(gw,{isolateScope:!0})
}gp.push(gw)
}if(Q){gy&&(Q=eg(Q,gy,gx));
Q.require=gf.require;
Q.directiveName=ga;
if(gd===gf||gf.$$isolateScope){Q=U(Q,{isolateScope:!0})
}gn.push(Q)
}}function gj(gw,Q,gB,gA){var gz;
if(fp(Q)){var gy=Q.match(q);
Q=Q.substring(gy[0].length);
var gx=gy[1]||gy[3],gy="?"===gy[2];
"^^"===gx?gB=gB.parent():gz=(gz=gA&&gA[Q])&&gz.instance;
gz||(gA="$"+Q+"Controller",gz=gx?gB.inheritedData(gA):gB.data(gA));
if(!gz&&!gy){throw eu("ctreq",Q,gw)
}}else{if(fu(Q)){for(gz=[],gx=0,gy=Q.length;
gx<gy;
gx++){gz[gx]=gj(gw,Q[gx],gB,gA)
}}}return gz||null
}function f9(gE,gD,gC,gB,gA,gz){var gy=dX(),gx;
for(gx in gB){var gw=gB[gx],Q={$scope:gw===gd||gw.$$isolateScope?gA:gz,$element:gE,$attrs:gD,$transclude:gC},gF=gw.controller;
"@"==gF&&(gF=gD[gw.name]);
Q=ef(gF,Q,!0,gw.controllerAs);
gy[gw.name]=Q;
gi||gE.data("$"+gw.name+"Controller",Q.instance)
}return gy
}function V(gM,gL,gK,gJ,gI,gH){function gC(gO,gN,gQ){var gP;
cj(gO)||(gQ=gN,gN=gO,gO=eQ);
gi&&(gP=gG);
gQ||(gQ=gi?Q.parent():Q);
return gI(gO,gN,gP,gQ,gw)
}var gF,gE,gD,gA,gG,gx,Q;
gu===gK?(gJ=gt,Q=gt.$$element):(Q=eM(gK),gJ=new cg(Q,gt));
gd&&(gA=gL.$new(!0));
gI&&(gx=gC,gx.$$boundTransclude=gI);
aa&&(gG=f9(Q,gJ,gx,aa,gA,gL));
gd&&(P.$$addScopeInfo(Q,gA,!0,!(gg&&(gg===gd||gg===gd.$$originalDirective))),P.$$addScopeClass(Q,!0),gA.$$isolateBindings=gd.$$isolateBindings,ab(gL,gJ,gA,gA.$$isolateBindings,gd,gA));
if(gG){var gy=gd||T,gz;
gy&&gG[gy.name]&&(gE=gy.$$bindings.bindToController,(gD=gG[gy.name])&&gD.identifier&&gE&&(gz=gD,gH.$$destroyBindings=ab(gL,gJ,gD.instance,gE,gy)));
for(gF in gG){gD=gG[gF];
var gB=gD();
gB!==gD.instance&&(gD.instance=gB,Q.data("$"+gF+"Controller",gB),gD===gz&&(gH.$$destroyBindings(),gH.$$destroyBindings=ab(gL,gJ,gB,gE,gy)))
}}gF=0;
for(gH=gp.length;
gF<gH;
gF++){gE=gp[gF],R(gE,gE.isolateScope?gA:gL,Q,gJ,gE.require&&gj(gE.directiveName,gE.require,Q,gG),gx)
}var gw=gL;
gd&&(gd.template||null===gd.templateUrl)&&(gw=gA);
gM&&gM(gw,gK.childNodes,eQ,gI);
for(gF=gn.length-1;
0<=gF;
gF--){gE=gn[gF],R(gE,gE.isolateScope?gA:gL,Q,gJ,gE.require&&gj(gE.directiveName,gE.require,Q,gG),gx)
}}gh=gh||{};
for(var gc=-Number.MAX_VALUE,T=gh.newScopeDirective,aa=gh.controllerDirectives,gd=gh.newIsolateScopeDirective,gg=gh.templateDirective,gm=gh.nonTlbTranscludeDirective,fa=!1,fg=!1,gi=gh.hasElementTranscludeDirective,Y=gt.$$element=eM(gu),gf,ga,gb,gk=gs,O,go=0,ge=gv.length;
go<ge;
go++){gf=gv[go];
var da=gf.$$start,X=gf.$$end;
da&&(Y=dc(gu,da,X));
gb=eQ;
if(gc>gf.priority){break
}if(gb=gf.scope){gf.templateUrl||(fs(gb)?(bc("new/isolated scope",gd||T,gf,Y),gd=gf):bc("new/isolated scope",gd,gf,Y)),T=T||gf
}ga=gf.name;
!gf.templateUrl&&gf.controller&&(gb=gf.controller,aa=aa||dX(),bc("'"+ga+"' controller",aa[ga],gf,Y),aa[ga]=gf);
if(gb=gf.transclude){fa=!0,gf.$$tlb||(bc("transclusion",gm,gf,Y),gm=gf),"element"==gb?(gi=!0,gc=gf.priority,gb=Y,Y=gt.$$element=eM(fi.createComment(" "+ga+": "+gt[ga]+" ")),gu=Y[0],ae(gr,fM.call(gb,0),gu),gk=P(gb,gs,gc,gq&&gq.name,{nonTlbTranscludeDirective:gm})):(gb=eM(b5(gu)).contents(),Y.empty(),gk=P(gb,gs))
}if(gf.template){if(fg=!0,bc("template",gg,gf,Y),gg=gf,gb=eK(gf.template)?gf.template(Y,gt):gf.template,gb=df(gb),gf.replace){gq=gf;
gb=cI.test(gb)?ch(fb(gf.templateNamespace,fk(gb))):[];
gu=gb[0];
if(1!=gb.length||gu.nodeType!==bA){throw eu("tplrt",ga,"")
}ae(gr,Y,gu);
ge={$attr:{}};
gb=M(gu,[],ge);
var W=gv.splice(go+1,gv.length-(go+1));
gd&&cd(gb);
gv=gv.concat(gb).concat(W);
bf(gt,ge);
ge=gv.length
}else{Y.html(gb)
}}if(gf.templateUrl){fg=!0,bc("template",gg,gf,Y),gg=gf,gf.replace&&(gq=gf),V=af(gv.splice(go,gv.length-go),Y,gt,gr,fa&&gk,gp,gn,{controllerDirectives:aa,newScopeDirective:T!==gf&&T,newIsolateScopeDirective:gd,templateDirective:gg,nonTlbTranscludeDirective:gm}),ge=gv.length
}else{if(gf.compile){try{O=gf.compile(Y,gt,gk),eK(O)?gl(null,O,da,X):O&&gl(O.pre,O.post,da,X)
}catch(ca){fd(ca,az(Y))
}}}gf.terminal&&(V.terminal=!0,gc=Math.max(gc,gf.priority))
}V.scope=T&&!0===T.scope;
V.transcludeOnThisElement=fa;
V.templateOnThisElement=fg;
V.transclude=gk;
gh.hasElementTranscludeDirective=gi;
return V
}function cd(Q){for(var O=0,T=Q.length;
O<T;
O++){Q[O]=dP(Q[O],{$$isolateScope:!0})
}}function ea(ca,aa,Y,X,W,V,T){if(aa===W){return null
}W=null;
if(z.hasOwnProperty(aa)){var Q;
aa=ff.get(aa+"Directive");
for(var O=0,a=aa.length;
O<a;
O++){try{Q=aa[O],(X===eQ||X>Q.priority)&&-1!=Q.restrict.indexOf(Y)&&(V&&(Q=dP(Q,{$$start:V,$$end:T})),ca.push(Q),W=Q)
}catch(da){fd(da)
}}}return W
}function cf(a){if(z.hasOwnProperty(a)){for(var T=ff.get(a+"Directive"),Q=0,O=T.length;
Q<O;
Q++){if(a=T[Q],a.multiElement){return !0
}}}return !1
}function bf(Q,O){var W=O.$attr,V=Q.$attr,T=Q.$$element;
eS(Q,function(X,a){"$"!=a.charAt(0)&&(O[a]&&O[a]!==X&&(X+=("style"===a?";":" ")+O[a]),Q.$set(a,X,!0,W[a]))
});
eS(O,function(a,X){"class"==X?(cc(T,a),Q["class"]=(Q["class"]?Q["class"]+" ":"")+a):"style"==X?(T.attr("style",T.attr("style")+";"+a),Q.style=(Q.style?Q.style+";":"")+a):"$"==X.charAt(0)||Q.hasOwnProperty(X)||(Q[X]=a,V[X]=W[X])
})
}function af(gb,f9,fg,fa,ca,aa,Y,X){var W=[],gc,V,T=f9[0],Q=gb.shift(),O=dP(Q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:Q}),ga=eK(Q.templateUrl)?Q.templateUrl(f9,fg):Q.templateUrl,da=Q.templateNamespace;
f9.empty();
fc(ga).then(function(gi){var gg,ge;
gi=df(gi);
if(Q.replace){gi=cI.test(gi)?ch(fb(da,fk(gi))):[];
gg=gi[0];
if(1!=gi.length||gg.nodeType!==bA){throw eu("tplrt",Q.name,ga)
}gi={$attr:{}};
ae(fa,f9,gg);
var a=M(gg,[],gi);
fs(Q.scope)&&cd(a);
gb=a.concat(gb);
bf(fg,gi)
}else{gg=T,f9.html(gi)
}gb.unshift(O);
gc=cb(gb,gg,fg,ca,f9,Q,aa,Y,X);
eS(fa,function(gj,gk){gj==gg&&(fa[gk]=f9[0])
});
for(V=ag(f9[0].childNodes,ca);
W.length;
){gi=W.shift();
ge=W.shift();
var gd=W.shift(),gf=W.shift(),a=f9[0];
if(!gi.$$destroyed){if(ge!==T){var gh=ge.className;
X.hasElementTranscludeDirective&&Q.replace||(a=b5(gg));
ae(gd,eM(ge),a);
cc(eM(a),gh)
}ge=gc.transcludeOnThisElement?dd(gi,gc.transclude,gf):gf;
gc(V,gi,a,fa,ge,gc)
}}W=null
});
return function(ge,gd,gh,gg,gf){ge=gf;
gd.$$destroyed||(W?W.push(gd,gh,gg,ge):(gc.transcludeOnThisElement&&(ge=dd(gd,gc.transclude,gf)),gc(V,gd,gh,gg,ge,gc)))
}
}function ec(Q,O){var T=O.priority-Q.priority;
return 0!==T?T:Q.name!==O.name?Q.name<O.name?-1:1:Q.index-O.index
}function bc(Q,O,W,V){function T(X){return X?" (module: "+X+")":""
}if(O){throw eu("multidir",O.name,T(O.$$moduleName),W.name,T(W.$$moduleName),Q,az(V))
}}function ee(O,T){var Q=fe(T,!0);
Q&&O.push({priority:0,compile:function(W){W=W.parent();
var V=!!W.length;
V&&P.$$addBindingClass(W);
return function(X,aa){var Y=aa.parent();
V||P.$$addBindingClass(Y);
P.$$addBindingInfo(Y,Q.expressions);
X.$watch(Q,function(ca){aa[0].nodeValue=ca
})
}
}})
}function fb(Q,O){Q=fo(Q||"html");
switch(Q){case"svg":case"math":var T=fi.createElement("div");
T.innerHTML="<"+Q+">"+O+"</"+Q+">";
return T.childNodes[0].childNodes;
default:return O
}}function bb(Q,O){if("srcdoc"==O){return bg.HTML
}var T=aM(Q);
if("xlinkHref"==O||"form"==T&&"action"==O||"img"!=T&&("src"==O||"ngSrc"==O)){return bg.RESOURCE_URL
}}function ac(Q,Y,X,W,V){var T=bb(Q,W);
V=v[W]||V;
var O=fe(X,!0,T,V);
if(O){if("multiple"===W&&"select"===aM(Q)){throw eu("selmulti",az(Q))
}Y.push({priority:100,compile:function(){return{pre:function(aa,fa,da){fa=da.$$observers||(da.$$observers={});
if(t.test(W)){throw eu("nodomevents")
}var ca=da[W];
ca!==X&&(O=ca&&fe(ca,!0,T,V),X=ca);
O&&(da[W]=O(aa),(fa[W]||(fa[W]=[])).$$inter=!0,(da.$$observers&&da.$$observers[W].$$scope||aa).$watch(O,function(f9,fg){"class"===W&&f9!=fg?da.$updateClass(f9,fg):da.$set(W,f9)
}))
}}
}})
}}function ae(ca,aa,Y){var X=aa[0],W=aa.length,V=X.parentNode,T,Q;
if(ca){for(T=0,Q=ca.length;
T<Q;
T++){if(ca[T]==X){ca[T++]=Y;
Q=T+W-1;
for(var O=ca.length;
T<O;
T++,Q++){Q<O?ca[T]=ca[Q]:delete ca[T]
}ca.length-=W-1;
ca.context===X&&(ca.context=Y);
break
}}}V&&V.replaceChild(Y,X);
ca=fi.createDocumentFragment();
ca.appendChild(X);
eM.hasData(X)&&(eM(Y).data(eM(X).data()),cP?(c7=!0,cP.cleanData([X])):delete eM.cache[X[eM.expando]]);
X=1;
for(W=aa.length;
X<W;
X++){V=aa[X],eM(V).remove(),ca.appendChild(V),delete aa[X]
}aa[0]=Y;
aa.length=1
}function U(Q,O){return fm(function(){return Q.apply(null,arguments)
},Q,O)
}function R(Q,O,Y,X,W,V){try{Q(O,Y,X,W,V)
}catch(T){fd(T,az(Y))
}}function ab(O,Y,X,W,V,T){var Q;
eS(W,function(ga,f9){var fg=ga.attrName,fa=ga.optional,gb=ga.mode,da,ca,aa,a;
bG.call(Y,fg)||(Y[fg]=eQ);
switch(gb){case"@":Y[fg]||fa||(X[f9]=eQ);
Y.$observe(fg,function(gc){X[f9]=gc
});
Y.$$observers[fg].$$scope=O;
Y[fg]&&(X[f9]=fe(Y[fg])(O));
break;
case"=":if(fa&&!Y[fg]){break
}ca=eb(Y[fg]);
a=ca.literal?c2:function(gd,gc){return gd===gc||gd!==gd&&gc!==gc
};
aa=ca.assign||function(){da=X[f9]=ca(O);
throw eu("nonassign",Y[fg],V.name)
};
da=X[f9]=ca(O);
fa=function(gc){a(gc,X[f9])||(a(gc,da)?aa(O,gc=X[f9]):X[f9]=gc);
return da=gc
};
fa.$stateful=!0;
fa=ga.collection?O.$watchCollection(Y[fg],fa):O.$watch(eb(Y[fg],fa),null,ca.literal);
Q=Q||[];
Q.push(fa);
break;
case"&":ca=eb(Y[fg]);
if(ca===eP&&fa){break
}X[f9]=function(gc){return ca(O,gc)
}
}});
W=Q?function(){for(var ca=0,aa=Q.length;
ca<aa;
++ca){Q[ca]()
}}:eP;
return T&&W!==eP?(T.$on("$destroy",W),eP):W
}var cg=function(Q,O){if(O){var X=Object.keys(O),W,V,T;
W=0;
for(V=X.length;
W<V;
W++){T=X[W],this[T]=O[T]
}}else{this.$attr={}
}this.$$element=Q
};
cg.prototype={$normalize:E,$addClass:function(O){O&&0<O.length&&ce.addClass(this.$$element,O)
},$removeClass:function(O){O&&0<O.length&&ce.removeClass(this.$$element,O)
},$updateClass:function(Q,O){var T=fw(Q,O);
T&&T.length&&ce.addClass(this.$$element,T);
(T=fw(O,Q))&&T.length&&ce.removeClass(this.$$element,T)
},$set:function(ca,aa,Y,X){var W=this.$$element[0],V=cT(W,ca),T=k(W,ca),W=ca;
V?(this.$$element.prop(ca,aa),X=V):T&&(this[T]=aa,W=T);
this[ca]=aa;
X?this.$attr[ca]=X:(X=this.$attr[ca])||(this.$attr[ca]=X=aR(ca,"-"));
V=aM(this.$$element);
if("a"===V&&"href"===ca||"img"===V&&"src"===ca){this[ca]=aa=bd(aa,"src"===ca)
}else{if("img"===V&&"srcset"===ca){for(var V="",T=fk(aa),Q=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,Q=/\s/.test(T)?Q:/(,)/,T=T.split(Q),Q=Math.floor(T.length/2),O=0;
O<Q;
O++){var da=2*O,V=V+bd(fk(T[da]),!0),V=V+(" "+fk(T[da+1]))
}T=fk(T[2*O]).split(/\s/);
V+=bd(fk(T[0]),!0);
2===T.length&&(V+=" "+fk(T[1]));
this[ca]=aa=V
}}!1!==Y&&(null===aa||aa===eQ?this.$$element.removeAttr(X):this.$$element.attr(X,aa));
(ca=this.$$observers)&&eS(ca[W],function(fa){try{fa(aa)
}catch(fg){fd(fg)
}})
},$observe:function(Q,O){var W=this,V=W.$$observers||(W.$$observers=dX()),T=V[Q]||(V[Q]=[]);
T.push(O);
be.$evalAsync(function(){!T.$$inter&&W.hasOwnProperty(Q)&&O(W[Q])
});
return function(){fy(T,O)
}
}};
var de=fe.startSymbol(),db=fe.endSymbol(),df="{{"==de||"}}"==db?bt:function(O){return O.replace(/\{\{/g,de).replace(/}}/g,db)
},dg=/^ngAttr[A-Z]/;
P.$$addBindingInfo=m?function(Q,O){var T=Q.data("$binding")||[];
fu(O)?T=T.concat(O):T.push(O);
Q.data("$binding",T)
}:eP;
P.$$addBindingClass=m?function(O){cc(O,"ng-binding")
}:eP;
P.$$addScopeInfo=m?function(Q,O,V,T){Q.data(V?T?"$isolateScopeNoTemplate":"$isolateScope":"$scope",O)
}:eP;
P.$$addScopeClass=m?function(Q,O){cc(Q,O?"ng-isolate-scope":"ng-scope")
}:eP;
return P
}]
}function E(a){return dK(a.replace(a4,""))
}function fw(m,q){var A="",z=m.split(/\s+/),y=q.split(/\s+/),w=0;
q:for(;
w<z.length;
w++){for(var v=z[w],t=0;
t<y.length;
t++){if(v==y[t]){continue q
}}A+=(0<A.length?" ":"")+v
}return A
}function ch(m){m=eM(m);
var q=m.length;
if(1>=q){return m
}for(;
q--;
){8===m[q].nodeType&&ei.call(m,q,1)
}return m
}function bC(){var m={},q=!1;
this.register=function(t,v){c8(t,"controller");
fs(t)?fm(m,t):m[t]=v
};
this.allowGlobals=function(){q=!0
};
this.$get=["$injector","$window",function(v,t){function a(y,w,A,z){if(!y||!fs(y.$scope)){throw fq("$controller")("noscp",z,w)
}y.$scope[w]=A
}return function(H,G,z,w){var y,J,A;
z=!0===z;
w&&fp(w)&&(A=w);
if(fp(H)){w=H.match(bE);
if(!w){throw dY("ctrlfmt",H)
}J=w[1];
A=A||w[3];
H=m.hasOwnProperty(J)?m[J]:ap(G.$scope,J,!0)||(q?ap(t,J,!0):eQ);
ds(H,J,!0)
}if(z){return z=(fu(H)?H[H.length-1]:H).prototype,y=Object.create(z||null),A&&a(G,A,y,J||H.name),fm(function(){var L=v.invoke(H,y,G,J);
L!==y&&(fs(L)||eK(L))&&(y=L,A&&a(G,A,y,J||H.name));
return y
},{instance:y,identifier:A})
}y=v.instantiate(H,G,J);
A&&a(G,A,y,J||H.name);
return y
}
}]
}function br(){this.$get=["$window",function(a){return eM(a.document)
}]
}function a2(){this.$get=["$log",function(a){return function(m,q){a.error.apply(a,arguments)
}
}]
}function a5(a){return fs(a)?fS(a)?a.toISOString():eF(a):a
}function eU(){this.$get=function(){return function(m){if(!m){return""
}var q=[];
bY(m,function(a,t){null===a||fz(a)||(fu(a)?eS(a,function(v,w){q.push(cD(t)+"="+cD(a5(v)))
}):q.push(cD(t)+"="+cD(a5(a))))
});
return q.join("&")
}
}
}function eB(){this.$get=function(){return function(m){function q(a,w,v){null===a||fz(a)||(fu(a)?eS(a,function(y){q(y,w+"[]")
}):fs(a)&&!fS(a)?bY(a,function(y,z){q(y,w+(v?"":"[")+z+(v?"":"]"))
}):t.push(cD(w)+"="+cD(a5(a))))
}if(!m){return""
}var t=[];
q(m,"",!0);
return t.join("&")
}
}
}function ci(m,q){if(fp(m)){var v=m.replace(dL,"").trim();
if(v){var t=q("Content-Type");
(t=t&&0===t.indexOf(eW))||(t=(t=v.match(dz))&&dm[t[0]].test(v));
t&&(m=C(v))
}}return m
}function eD(m){var q=dX(),t;
fp(m)?eS(m.split("\n"),function(a){t=a.indexOf(":");
var v=fo(fk(a.substr(0,t)));
a=fk(a.substr(t+1));
v&&(q[v]=q[v]?q[v]+", "+a:a)
}):fs(m)&&eS(m,function(a,y){var w=fo(y),v=fk(a);
w&&(q[w]=q[w]?q[w]+", "+v:v)
});
return q
}function er(m){var q;
return function(a){q||(q=eD(m));
return a?(a=q[fo(a)],void 0===a&&(a=null),a):q
}
}function d7(m,q,v,t){if(eK(t)){return t(m,q,v)
}eS(t,function(a){m=a(m,q,v)
});
return m
}function ft(){var m=this.defaults={transformResponse:[ci],transformRequest:[function(v){return fs(v)&&"[object File]"!==a0.call(v)&&"[object Blob]"!==a0.call(v)&&"[object FormData]"!==a0.call(v)?eF(v):v
}],headers:{common:{Accept:"application/json, text/plain, */*"},post:dy(fQ),put:dy(fQ),patch:dy(fQ)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},q=!1;
this.useApplyAsync=function(a){return eO(a)?(q=!!a,this):q
};
var t=this.interceptors=[];
this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(J,H,G,A,z,w){function y(O){function V(X){var W=fm({},X);
W.data=X.data?d7(X.data,X.headers,X.status,T.transformResponse):X.data;
X=X.status;
return 200<=X&&300>X?W:z.reject(W)
}function U(X,W){var aa,Y={};
eS(X,function(ab,ac){eK(ab)?(aa=ab(W),null!=aa&&(Y[ac]=aa)):Y[ac]=ab
});
return Y
}if(!eZ.isObject(O)){throw fq("$http")("badreq",O)
}var T=fm({method:"get",transformRequest:m.transformRequest,transformResponse:m.transformResponse,paramSerializer:m.paramSerializer},O);
T.headers=function(W){var ac=m.headers,ab=fm({},W.headers),aa,Y,X,ac=fm({},ac.common,ac[fo(W.method)]);
W:for(aa in ac){Y=fo(aa);
for(X in ab){if(fo(X)===Y){continue W
}}ab[aa]=ac[aa]
}return U(ab,dy(W))
}(O);
T.method=bo(T.method);
T.paramSerializer=fp(T.paramSerializer)?w.get(T.paramSerializer):T.paramSerializer;
var R=[function(W){var Y=W.headers,X=d7(W.data,er(Y),eQ,W.transformRequest);
fz(X)&&eS(Y,function(ab,aa){"content-type"===fo(aa)&&delete Y[aa]
});
fz(W.withCredentials)&&!fz(m.withCredentials)&&(W.withCredentials=m.withCredentials);
return v(W,X).then(V,V)
},eQ],Q=z.when(T);
for(eS(L,function(W){(W.request||W.requestError)&&R.unshift(W.request,W.requestError);
(W.response||W.responseError)&&R.push(W.response,W.responseError)
});
R.length;
){O=R.shift();
var P=R.shift(),Q=Q.then(O,P)
}Q.success=function(W){ds(W,"fn");
Q.then(function(X){W(X.data,X.status,X.headers,T)
});
return Q
};
Q.error=function(W){ds(W,"fn");
Q.then(null,function(X){W(X.data,X.status,X.headers,T)
});
return Q
};
return Q
}function v(Y,W){function U(ac,bb,ag,af){function ae(){R(bb,ac,ag,af)
}X&&(200<=ac&&300>ac?X.put(V,[ac,bb,eD(ag),af]):X.remove(V));
q?A.$applyAsync(ae):(ae(),A.$$phase||A.$apply())
}function R(ae,ac,ag,af){ac=Math.max(ac,0);
(200<=ac&&300>ac?ab.resolve:ab.reject)({data:ae,status:ac,headers:er(ag),config:Y,statusText:af})
}function aa(ac){R(ac.data,ac.status,dy(ac.headers()),ac.statusText)
}function T(){var ac=y.pendingRequests.indexOf(Y);
-1!==ac&&y.pendingRequests.splice(ac,1)
}var ab=z.defer(),Q=ab.promise,X,O,P=Y.headers,V=a(Y.url,Y.paramSerializer(Y.params));
y.pendingRequests.push(Y);
Q.then(T,T);
!Y.cache&&!m.cache||!1===Y.cache||"GET"!==Y.method&&"JSONP"!==Y.method||(X=fs(Y.cache)?Y.cache:fs(m.cache)?m.cache:M);
X&&(O=X.get(V),eO(O)?O&&eK(O.then)?O.then(aa,aa):fu(O)?R(O[1],O[0],dy(O[2]),O[3]):R(O,200,{},"OK"):X.put(V,Q));
fz(O)&&((O=dU(Y.url)?H()[Y.xsrfCookieName||m.xsrfCookieName]:eQ)&&(P[Y.xsrfHeaderName||m.xsrfHeaderName]=O),J(Y.method,V,W,U,P,Y.timeout,Y.withCredentials,Y.responseType));
return Q
}function a(P,O){0<O.length&&(P+=(-1==P.indexOf("?")?"?":"&")+O);
return P
}var M=G("$http");
m.paramSerializer=fp(m.paramSerializer)?w.get(m.paramSerializer):m.paramSerializer;
var L=[];
eS(t,function(O){L.unshift(fp(O)?w.get(O):w.invoke(O))
});
y.pendingRequests=[];
(function(O){eS(arguments,function(P){y[P]=function(Q,R){return y(fm({},R||{},{method:P,url:Q}))
}
})
})("get","delete","head","jsonp");
(function(O){eS(arguments,function(P){y[P]=function(Q,T,R){return y(fm({},R||{},{method:P,url:Q,data:T}))
}
})
})("post","put","patch");
y.defaults=m;
return y
}]
}function c3(){return new fn.XMLHttpRequest
}function ep(){this.$get=["$browser","$window","$document",function(m,q,t){return cQ(m,c3,m.defer,q.angular.callbacks,t[0])
}]
}function cQ(m,q,y,w,v){function t(A,z,J){var G=v.createElement("script"),H=null;
G.type="text/javascript";
G.src=A;
G.async=!0;
H=function(M){G.removeEventListener("load",H,!1);
G.removeEventListener("error",H,!1);
v.body.removeChild(G);
G=null;
var O=-1,L="unknown";
M&&("load"!==M.type||w[z].called||(M={type:"error"}),L=M.type,O="error"===M.type?404:200);
J&&J(O,L)
};
G.addEventListener("load",H,!1);
G.addEventListener("error",H,!1);
v.body.appendChild(G);
return H
}return function(O,M,J,L,H,a,V,Q){function A(){G&&G();
P&&P.abort()
}function U(W,ab,aa,Y,X){R!==eQ&&y.cancel(R);
G=P=null;
W(ab,aa,Y,X);
m.$$completeOutstandingRequest(eP)
}m.$$incOutstandingRequestCount();
M=M||m.url();
if("jsonp"==fo(O)){var T="_"+(w.counter++).toString(36);
w[T]=function(W){w[T].data=W;
w[T].called=!0
};
var G=t(M.replace("JSON_CALLBACK","angular.callbacks."+T),T,function(X,W){U(L,X,w[T].data,"",W);
w[T]=eP
})
}else{var P=q();
P.open(O,M,!0);
eS(H,function(X,W){eO(X)&&P.setRequestHeader(W,X)
});
P.onload=function(){var X=P.statusText||"",W="response" in P?P.response:P.responseText,Y=1223===P.status?204:P.status;
0===Y&&(Y=W?200:"file"==aT(M).protocol?404:0);
U(L,Y,W,P.getAllResponseHeaders(),X)
};
O=function(){U(L,-1,null,null,"")
};
P.onerror=O;
P.onabort=O;
V&&(P.withCredentials=!0);
if(Q){try{P.responseType=Q
}catch(z){if("json"!==Q){throw z
}}}P.send(J)
}if(0<a){var R=y(A,a)
}else{a&&eK(a.then)&&a.then(A)
}}
}function b8(){var m="{{",q="}}";
this.startSymbol=function(t){return t?(m=t,this):m
};
this.endSymbol=function(a){return a?(q=a,this):q
};
this.$get=["$parse","$exceptionHandler","$sce",function(J,H,G){function A(L){return"\\\\\\"+L
}function z(L){return L.replace(t,m).replace(a,q)
}function y(W,V,R,M){function aa(ae){try{var ac=ae;
ae=R?G.getTrusted(R,ac):G.valueOf(ac);
var ag;
if(M&&!eO(ae)){ag=ae
}else{if(null==ae){ag=""
}else{switch(typeof ae){case"string":break;
case"number":ae=""+ae;
break;
default:ae=eF(ae)
}ag=ae
}}return ag
}catch(af){H(eN.interr(W,af))
}}M=!!M;
for(var Q,T,O=0,Y=[],P=[],X=W.length,L=[],ab=[];
O<X;
){if(-1!=(Q=W.indexOf(m,O))&&-1!=(T=W.indexOf(q,Q+v))){O!==Q&&L.push(z(W.substring(O,Q))),O=W.substring(Q+v,T),Y.push(O),P.push(J(O,aa)),O=T+w,ab.push(L.length),L.push("")
}else{O!==X&&L.push(z(W.substring(O)));
break
}}R&&1<L.length&&eN.throwNoconcat(W);
if(!V||Y.length){var U=function(ae){for(var ac=0,af=Y.length;
ac<af;
ac++){if(M&&fz(ae[ac])){return
}L[ab[ac]]=ae[ac]
}return L.join("")
};
return fm(function(ae){var ac=0,bb=Y.length,ag=Array(bb);
try{for(;
ac<bb;
ac++){ag[ac]=P[ac](ae)
}return U(ag)
}catch(af){H(eN.interr(W,af))
}},{exp:W,expressions:Y,$$watchDelegate:function(ae,ac){var af;
return ae.$watchGroup(P,function(bc,bb){var ag=U(bc);
eK(ac)&&ac.call(this,ag,bc!==bb?af:ag,ae);
af=ag
})
}})
}}var v=m.length,w=q.length,t=new RegExp(m.replace(/./g,A),"g"),a=new RegExp(q.replace(/./g,A),"g");
y.startSymbol=function(){return m
};
y.endSymbol=function(){return q
};
return y
}]
}function fO(){this.$get=["$rootScope","$window","$q","$$q",function(m,q,y,w){function v(M,L,H,J){var G=4<arguments.length,a=G?fM.call(arguments,4):[],R=q.setInterval,O=q.clearInterval,z=0,Q=eO(J)&&!J,P=(Q?w:y).defer(),A=P.promise;
H=eO(H)?H:0;
A.then(null,null,G?function(){M.apply(null,a)
}:M);
A.$$intervalId=R(function(){P.notify(z++);
0<H&&z>=H&&(P.resolve(z),O(A.$$intervalId),delete t[A.$$intervalId]);
Q||m.$apply()
},L);
t[A.$$intervalId]=P;
return A
}var t={};
v.cancel=function(a){return a&&a.$$intervalId in t?(t[a.$$intervalId].reject("canceled"),q.clearInterval(a.$$intervalId),delete t[a.$$intervalId],!0):!1
};
return v
}]
}function dT(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(a){return 1===a?"one":"other"
}}
}
}function fx(m){m=m.split("/");
for(var q=m.length;
q--;
){m[q]=bZ(m[q])
}return m.join("/")
}function dI(m,q){var t=aT(m);
q.$$protocol=t.protocol;
q.$$host=t.hostname;
q.$$port=e9(t.port)||cE[t.protocol]||null
}function dv(m,q){var v="/"!==m.charAt(0);
v&&(m="/"+m);
var t=aT(m);
q.$$path=decodeURIComponent(v&&"/"===t.pathname.charAt(0)?t.pathname.substring(1):t.pathname);
q.$$search=fK(t.search);
q.$$hash=decodeURIComponent(t.hash);
q.$$path&&"/"!=q.$$path.charAt(0)&&(q.$$path="/"+q.$$path)
}function f5(m,q){if(0===q.indexOf(m)){return q.substr(m.length)
}}function e6(m){var q=m.indexOf("#");
return -1==q?m:m.substr(0,q)
}function aS(a){return a.replace(/(#.+)|#$/,"$1")
}function eX(a){return a.substr(0,e6(a).lastIndexOf("/")+1)
}function eE(m,q){this.$$html5=!0;
q=q||"";
var t=eX(m);
dI(m,this);
this.$$parse=function(w){var v=f5(t,w);
if(!fp(v)){throw aE("ipthprfx",w,t)
}dv(v,this);
this.$$path||(this.$$path="/");
this.$$compose()
};
this.$$compose=function(){var w=dr(this.$$search),v=this.$$hash?"#"+bZ(this.$$hash):"";
this.$$url=fx(this.$$path)+(w?"?"+w:"")+v;
this.$$absUrl=t+this.$$url.substr(1)
};
this.$$parseLinkUrl=function(y,w){if(w&&"#"===w[0]){return this.hash(w.slice(1)),!0
}var v,a;
(v=f5(m,y))!==eQ?(a=v,a=(v=f5(q,v))!==eQ?t+(f5("/",v)||v):m+a):(v=f5(t,y))!==eQ?a=t+v:t==y+"/"&&(a=t);
a&&this.$$parse(a);
return !!a
}
}function es(m,q){var t=eX(m);
dI(m,this);
this.$$parse=function(y){var w=f5(m,y)||f5(t,y),v;
fz(w)||"#"!==w.charAt(0)?this.$$html5?v=w:(v="",fz(w)&&(m=y,this.replace())):(v=f5(q,w),fz(v)&&(v=w));
dv(v,this);
y=this.$$path;
var w=m,a=/^\/[A-Z]:(\/.*)/;
0===v.indexOf(w)&&(v=v.replace(w,""));
a.exec(v)||(y=(v=a.exec(y))?v[1]:y);
this.$$path=y;
this.$$compose()
};
this.$$compose=function(){var v=dr(this.$$search),a=this.$$hash?"#"+bZ(this.$$hash):"";
this.$$url=fx(this.$$path)+(v?"?"+v:"")+a;
this.$$absUrl=m+(this.$$url?q+this.$$url:"")
};
this.$$parseLinkUrl=function(v,w){return e6(m)==e6(v)?(this.$$parse(v),!0):!1
}
}function dj(m,q){this.$$html5=!0;
es.apply(this,arguments);
var t=eX(m);
this.$$parseLinkUrl=function(y,w){if(w&&"#"===w[0]){return this.hash(w.slice(1)),!0
}var v,a;
m==e6(y)?v=y:(a=f5(t,y))?v=m+q+a:t===y+"/"&&(v=t);
v&&this.$$parse(v);
return !!v
};
this.$$compose=function(){var v=dr(this.$$search),a=this.$$hash?"#"+bZ(this.$$hash):"";
this.$$url=fx(this.$$path)+(v?"?"+v:"")+a;
this.$$absUrl=m+q+this.$$url
}
}function aq(a){return function(){return this[a]
}
}function cZ(m,q){return function(a){if(fz(a)){return this[m]
}this[m]=q(a);
this.$$compose();
return this
}
}function d5(){var m="",q={enabled:!1,requireBase:!0,rewriteLinks:!0};
this.hashPrefix=function(t){return eO(t)?(m=t,this):m
};
this.html5Mode=function(a){return fR(a)?(q.enabled=a,this):fs(a)?(fR(a.enabled)&&(q.enabled=a.enabled),fR(a.requireBase)&&(q.requireBase=a.requireBase),fR(a.rewriteLinks)&&(q.rewriteLinks=a.rewriteLinks),this):q
};
this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(L,J,H,G,A){function z(Q,P,V){var U=y.url(),T=y.$$state;
try{J.url(Q,P,V),y.$$state=J.state()
}catch(R){throw y.url(U),y.$$state=T,R
}}function w(Q,P){L.$broadcast("$locationChangeSuccess",y.absUrl(),Q,y.$$state,P)
}var y,v;
v=J.baseHref();
var a=J.url(),O;
if(q.enabled){if(!v&&q.requireBase){throw aE("nobase")
}O=a.substring(0,a.indexOf("/",a.indexOf("//")+2))+(v||"/");
v=H.history?eE:dj
}else{O=e6(a),v=es
}y=new v(O,"#"+m);
y.$$parseLinkUrl(a,a);
y.$$state=J.state();
var M=/^\s*(javascript|mailto):/i;
G.on("click",function(P){if(q.rewriteLinks&&!P.ctrlKey&&!P.metaKey&&!P.shiftKey&&2!=P.which&&2!=P.button){for(var T=eM(P.target);
"a"!==aM(T[0]);
){if(T[0]===G[0]||!(T=T.parent())[0]){return
}}var R=T.prop("href"),Q=T.attr("href")||T.attr("xlink:href");
fs(R)&&"[object SVGAnimatedString]"===R.toString()&&(R=aT(R.animVal).href);
M.test(R)||!R||T.attr("target")||P.isDefaultPrevented()||!y.$$parseLinkUrl(R,Q)||(P.preventDefault(),y.absUrl()!=J.url()&&(L.$apply(),A.angular["ff-684208-preventDefault"]=!0))
}});
aS(y.absUrl())!=aS(a)&&J.url(y.absUrl(),!0);
var t=!0;
J.onUrlChange(function(Q,P){L.$evalAsync(function(){var U=y.absUrl(),T=y.$$state,R;
y.$$parse(Q);
y.$$state=P;
R=L.$broadcast("$locationChangeStart",Q,U,P,T).defaultPrevented;
y.absUrl()===Q&&(R?(y.$$parse(U),y.$$state=T,z(U,!1,T)):(t=!1,w(U,T)))
});
L.$$phase||L.$digest()
});
L.$watch(function(){var Q=aS(J.url()),P=aS(y.absUrl()),T=J.state(),R=y.$$replace,U=Q!==P||y.$$html5&&H.history&&T!==y.$$state;
if(t||U){t=!1,L.$evalAsync(function(){var V=y.absUrl(),W=L.$broadcast("$locationChangeStart",V,Q,y.$$state,T).defaultPrevented;
y.absUrl()===V&&(W?(y.$$parse(Q),y.$$state=T):(U&&z(V,R,T===y.$$state?null:y.$$state),w(Q,T)))
})
}y.$$replace=!1
});
return y
}]
}function dS(){var m=!0,q=this;
this.debugEnabled=function(t){return eO(t)?(m=t,this):m
};
this.$get=["$window",function(v){function t(w){w instanceof Error&&(w.stack?w=w.message&&-1===w.stack.indexOf(w.message)?"Error: "+w.message+"\n"+w.stack:w.stack:w.sourceURL&&(w=w.message+"\n"+w.sourceURL+":"+w.line));
return w
}function a(z){var w=v.console||{},A=w[z]||w.log||eP;
z=!1;
try{z=!!A.apply
}catch(y){}return z?function(){var G=[];
eS(arguments,function(H){G.push(t(H))
});
return A.apply(w,G)
}:function(H,G){A(H,null==G?"":G)
}
}return{log:a("log"),info:a("info"),warn:a("warn"),error:a("error"),debug:function(){var w=a("debug");
return function(){m&&w.apply(q,arguments)
}
}()}
}]
}function aF(m,q){if("__defineGetter__"===m||"__defineSetter__"===m||"__lookupGetter__"===m||"__lookupSetter__"===m||"__proto__"===m){throw eG("isecfld",q)
}return m
}function b0(m,q){if(m){if(m.constructor===m){throw eG("isecfn",q)
}if(m.window===m){throw eG("isecwindow",q)
}if(m.children&&(m.nodeName||m.prop&&m.attr&&m.find)){throw eG("isecdom",q)
}if(m===Object){throw eG("isecobj",q)
}}return m
}function cM(m,q){if(m){if(m.constructor===m){throw eG("isecfn",q)
}if(m===cr||m===b1||m===bO){throw eG("isecff",q)
}}}function bB(m,q){return"undefined"!==typeof m?m:q
}function cA(m,q){return"undefined"===typeof m?q:"undefined"===typeof q?m:m+q
}function fj(m,q){var v,t;
switch(m.type){case eR.Program:v=!0;
eS(m.body,function(a){fj(a.expression,q);
v=v&&a.expression.constant
});
m.constant=v;
break;
case eR.Literal:m.constant=!0;
m.toWatch=[];
break;
case eR.UnaryExpression:fj(m.argument,q);
m.constant=m.argument.constant;
m.toWatch=m.argument.toWatch;
break;
case eR.BinaryExpression:fj(m.left,q);
fj(m.right,q);
m.constant=m.left.constant&&m.right.constant;
m.toWatch=m.left.toWatch.concat(m.right.toWatch);
break;
case eR.LogicalExpression:fj(m.left,q);
fj(m.right,q);
m.constant=m.left.constant&&m.right.constant;
m.toWatch=m.constant?[]:[m];
break;
case eR.ConditionalExpression:fj(m.test,q);
fj(m.alternate,q);
fj(m.consequent,q);
m.constant=m.test.constant&&m.alternate.constant&&m.consequent.constant;
m.toWatch=m.constant?[]:[m];
break;
case eR.Identifier:m.constant=!1;
m.toWatch=[m];
break;
case eR.MemberExpression:fj(m.object,q);
m.computed&&fj(m.property,q);
m.constant=m.object.constant&&(!m.computed||m.property.constant);
m.toWatch=[m];
break;
case eR.CallExpression:v=m.filter?!q(m.callee.name).$stateful:!1;
t=[];
eS(m.arguments,function(a){fj(a,q);
v=v&&a.constant;
a.constant||t.push.apply(t,a.toWatch)
});
m.constant=v;
m.toWatch=m.filter&&!q(m.callee.name).$stateful?t:[m];
break;
case eR.AssignmentExpression:fj(m.left,q);
fj(m.right,q);
m.constant=m.left.constant&&m.right.constant;
m.toWatch=[m];
break;
case eR.ArrayExpression:v=!0;
t=[];
eS(m.elements,function(a){fj(a,q);
v=v&&a.constant;
a.constant||t.push.apply(t,a.toWatch)
});
m.constant=v;
m.toWatch=t;
break;
case eR.ObjectExpression:v=!0;
t=[];
eS(m.properties,function(a){fj(a.value,q);
v=v&&a.value.constant;
a.value.constant||t.push.apply(t,a.value.toWatch)
});
m.constant=v;
m.toWatch=t;
break;
case eR.ThisExpression:m.constant=!1,m.toWatch=[]
}}function cn(m){if(1==m.length){m=m[0].expression;
var q=m.toWatch;
return 1!==q.length?q:q[0]!==m?q:eQ
}}function bX(a){return a.type===eR.Identifier||a.type===eR.MemberExpression
}function bK(a){if(1===a.body.length&&bX(a.body[0].expression)){return{type:eR.AssignmentExpression,left:a.body[0].expression,right:{type:eR.NGValueParameter},operator:"="}
}}function bx(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===eR.Literal||a.body[0].expression.type===eR.ArrayExpression||a.body[0].expression.type===eR.ObjectExpression)
}function bm(m,q){this.astBuilder=m;
this.$filter=q
}function aX(m,q){this.astBuilder=m;
this.$filter=q
}function S(m,q,z,y){b0(m,y);
q=q.split(".");
for(var w,v=0;
1<q.length;
v++){w=aF(q.shift(),y);
var t=b0(m[w],y);
t||(t={},m[w]=t);
m=t
}w=aF(q.shift(),y);
b0(m[w],y);
return m[w]=z
}function p(a){return"constructor"==a
}function d8(a){return eK(a.valueOf)?a.valueOf():bq.call(a)
}function dG(){var m=dX(),q=dX();
this.$get=["$filter","$sniffer",function(J,H){function G(M,L){return null==M||null==L?M===L:"object"===typeof M&&(M=d8(M),"object"===typeof M)?!1:M===L||M!==M&&L!==L
}function A(Y,X,W,V,U){var T=V.inputs,R;
if(1===T.length){var Q=G,T=T[0];
return Y.$watch(function(ab){var aa=T(ab);
G(aa,Q)||(R=V(ab,eQ,eQ,[aa]),Q=aa&&d8(aa));
return R
},X,W,U)
}for(var P=[],M=[],L=0,O=T.length;
L<O;
L++){P[L]=G,M[L]=null
}return Y.$watch(function(ab){for(var aa=!1,af=0,ae=T.length;
af<ae;
af++){var ac=T[af](ab);
if(aa||(aa=!G(ac,P[af]))){M[af]=ac,P[af]=ac&&d8(ac)
}}aa&&(R=V(ab,eQ,eQ,M));
return R
},X,W,U)
}function z(M,L,R,Q){var P,O;
return P=M.$watch(function(T){return Q(T)
},function(T,V,U){O=T;
eK(L)&&L.apply(this,arguments);
eO(T)&&U.$$postDigest(function(){eO(O)&&P()
})
},R)
}function y(M,L,T,R){function Q(V){var U=!0;
eS(V,function(W){eO(W)||(U=!1)
});
return U
}var P,O;
return P=M.$watch(function(U){return R(U)
},function(U,W,V){O=U;
eK(L)&&L.call(this,U,W,V);
Q(U)&&V.$$postDigest(function(){Q(O)&&P()
})
},T)
}function v(M,L,Q,P){var O;
return O=M.$watch(function(R){return P(R)
},function(R,U,T){eK(L)&&L.apply(this,arguments);
O()
},Q)
}function w(M,L){if(!L){return M
}var O=M.$$watchDelegate,O=O!==y&&O!==z?function(T,R,Q,P){Q=M(T,R,Q,P);
return L(Q,T,R)
}:function(T,R,Q,P){Q=M(T,R,Q,P);
T=L(Q,T,R);
return eO(Q)?T:Q
};
M.$$watchDelegate&&M.$$watchDelegate!==A?O.$$watchDelegate=M.$$watchDelegate:L.$stateful||(O.$$watchDelegate=A,O.inputs=M.inputs?M.inputs:[M]);
return O
}var t={csp:H.csp,expensiveChecks:!1},a={csp:H.csp,expensiveChecks:!0};
return function(T,Q,R){var L,M,P;
switch(typeof T){case"string":P=T=T.trim();
var O=R?q:m;
L=O[P];
L||(":"===T.charAt(0)&&":"===T.charAt(1)&&(M=!0,T=T.substring(2)),R=R?a:t,L=new dV(R),L=(new dJ(L,J,R)).parse(T),L.constant?L.$$watchDelegate=v:M?L.$$watchDelegate=L.literal?y:z:L.inputs&&(L.$$watchDelegate=A),O[P]=L);
return w(L,Q);
case"function":return w(T,Q);
default:return eP
}}
}]
}function cX(){this.$get=["$rootScope","$exceptionHandler",function(m,q){return aJ(function(t){m.$evalAsync(t)
},q)
}]
}function cK(){this.$get=["$browser","$exceptionHandler",function(m,q){return aJ(function(t){m.defer(t)
},q)
}]
}function aJ(J,M){function H(P,O,T){function R(a){return function(U){Q||(Q=!0,a.call(P,U))
}
}var Q=!1;
return[R(O),R(T)]
}function G(){this.$$state={status:0}
}function A(P,O){return function(a){O.call(P,a)
}
}function z(a){!a.processScheduled&&a.pending&&(a.processScheduled=!0,J(function(){var O,U,T;
T=a.pending;
a.processScheduled=!1;
a.pending=eQ;
for(var R=0,Q=T.length;
R<Q;
++R){U=T[R][0];
O=T[R][a.status];
try{eK(O)?U.resolve(O(a.value)):1===a.status?U.resolve(a.value):U.reject(a.value)
}catch(P){U.reject(P),M(P)
}}}))
}function y(){this.promise=new G;
this.resolve=A(this,this.resolve);
this.reject=A(this,this.reject);
this.notify=A(this,this.notify)
}var w=fq("$q",TypeError);
G.prototype={then:function(P,O,R){var Q=new y;
this.$$state.pending=this.$$state.pending||[];
this.$$state.pending.push([Q,P,O,R]);
0<this.$$state.status&&z(this.$$state);
return Q.promise
},"catch":function(O){return this.then(null,O)
},"finally":function(P,O){return this.then(function(a){return v(a,!0,P)
},function(a){return v(a,!1,P)
},O)
}};
y.prototype={resolve:function(O){this.promise.$$state.status||(O===this.promise?this.$$reject(w("qcycle",O)):this.$$resolve(O))
},$$resolve:function(a){var Q,P;
P=H(this,this.$$resolve,this.$$reject);
try{if(fs(a)||eK(a)){Q=a&&a.then
}eK(Q)?(this.promise.$$state.status=-1,Q.call(a,P[0],P[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,z(this.promise.$$state))
}catch(O){P[1](O),M(O)
}},reject:function(O){this.promise.$$state.status||this.$$reject(O)
},$$reject:function(O){this.promise.$$state.value=O;
this.promise.$$state.status=2;
z(this.promise.$$state)
},notify:function(O){var a=this.promise.$$state.pending;
0>=this.promise.$$state.status&&a&&a.length&&J(function(){for(var P,U,T=0,R=a.length;
T<R;
T++){U=a[T][0];
P=a[T][3];
try{U.notify(eK(P)?P(O):O)
}catch(Q){M(Q)
}}})
}};
var t=function(P,O){var Q=new y;
O?Q.resolve(P):Q.reject(P);
return Q.promise
},v=function(P,O,T){var R=null;
try{eK(T)&&(R=T())
}catch(Q){return t(Q,!1)
}return R&&eK(R.then)?R.then(function(){return t(P,O)
},function(U){return t(U,!1)
}):t(P,O)
},q=function(P,O,T,R){var Q=new y;
Q.resolve(P);
return Q.promise.then(O,T,R)
},m=function L(P){if(!eK(P)){throw w("norslvr",P)
}if(!(this instanceof L)){return new L(P)
}var O=new y;
P(function(Q){O.resolve(Q)
},function(Q){O.reject(Q)
});
return O.promise
};
m.defer=function(){return new y
};
m.reject=function(P){var O=new y;
O.reject(P);
return O.promise
};
m.when=q;
m.resolve=q;
m.all=function(P){var O=new y,R=0,Q=fu(P)?[]:{};
eS(P,function(T,U){R++;
q(T).then(function(V){Q.hasOwnProperty(U)||(Q[U]=V,--R||O.resolve(Q))
},function(V){Q.hasOwnProperty(U)||O.reject(V)
})
});
0===R&&O.resolve(Q);
return O.promise
};
return m
}function au(){this.$get=["$window","$timeout",function(H,J){function G(){for(var M=0;
M<m.length;
M++){var L=m[M];
L&&(m[M]=null,L())
}t=m.length=0
}function A(M){var L=m.length;
t++;
m.push(M);
0===L&&(q=v(G));
return function(){0<=L&&(L=m[L]=null,0===--t&&q&&(q(),q=null,m.length=0))
}
}var z=H.requestAnimationFrame||H.webkitRequestAnimationFrame,y=H.cancelAnimationFrame||H.webkitCancelAnimationFrame||H.webkitCancelRequestAnimationFrame,w=!!z,v=w?function(M){var L=z(M);
return function(){y(L)
}
}:function(a){var L=J(a,16.66,!1);
return function(){J.cancel(L)
}
};
A.supported=w;
var q,t=0,m=[];
return A
}]
}function dh(){function m(z){function y(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;
this.$$listeners={};
this.$$listenerCount={};
this.$$watchersCount=0;
this.$id=++cp;
this.$$ChildScope=null
}y.prototype=z;
return y
}var q=10,w=fq("$rootScope"),v=null,t=null;
this.digestTtl=function(a){arguments.length&&(q=a);
return q
};
this.$get=["$injector","$exceptionHandler","$parse","$browser",function(M,L,J,G){function H(W){W.currentScope.$$destroyed=!0
}function A(){this.$id=++cp;
this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this.$root=this;
this.$$destroyed=!1;
this.$$listeners={};
this.$$listenerCount={};
this.$$watchersCount=0;
this.$$isolateBindings=null
}function a(W){if(z.$$phase){throw w("inprog",z.$$phase)
}z.$$phase=W
}function V(X,W){do{X.$$watchersCount+=W
}while(X=X.$parent)
}function O(X,W,Y){do{X.$$listenerCount[Y]-=W,0===X.$$listenerCount[Y]&&delete X.$$listenerCount[Y]
}while(X=X.$parent)
}function y(){}function U(){for(;
P.length;
){try{P.shift()()
}catch(W){L(W)
}}t=null
}function R(){null===t&&(t=G.defer(function(){z.$apply(U)
}))
}A.prototype={constructor:A,$new:function(W,Y){var X;
Y=Y||this;
W?(X=new A,X.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=m(this)),X=new this.$$ChildScope);
X.$parent=Y;
X.$$prevSibling=Y.$$childTail;
Y.$$childHead?(Y.$$childTail.$$nextSibling=X,Y.$$childTail=X):Y.$$childHead=Y.$$childTail=X;
(W||Y!=this)&&X.$on("$destroy",H);
return X
},$watch:function(Y,W,af,ae){var ac=J(Y);
if(ac.$$watchDelegate){return ac.$$watchDelegate(this,W,af,ac,Y)
}var ab=this,aa=ab.$$watchers,X={fn:W,last:y,get:ac,exp:ae||Y,eq:!!af};
v=null;
eK(W)||(X.fn=eP);
aa||(aa=ab.$$watchers=[]);
aa.unshift(X);
V(this,1);
return function(){0<=fy(aa,X)&&V(ab,-1);
v=null
}
},$watchGroup:function(bb,ag){function af(){Y=!1;
X?(X=!1,ag(ac,ac,aa)):ag(ac,ae,aa)
}var ae=Array(bb.length),ac=Array(bb.length),ab=[],aa=this,Y=!1,X=!0;
if(!bb.length){var W=!0;
aa.$evalAsync(function(){W&&ag(ac,ac,aa)
});
return function(){W=!1
}
}if(1===bb.length){return this.$watch(bb[0],function(bc,be,bd){ac[0]=bc;
ae[0]=be;
ag(ac,bc===be?ac:ae,bd)
})
}eS(bb,function(bd,bc){var be=aa.$watch(bd,function(bf,bg){ac[bc]=bf;
ae[bc]=bg;
Y||(Y=!0,aa.$evalAsync(af))
});
ab.push(be)
});
return function(){for(;
ab.length;
){ab.shift()()
}}
},$watchCollection:function(be,bd){function bc(ca){ag=ca;
var bg,cd,cc,cb;
if(!fz(ag)){if(fs(ag)){if(Z(ag)){for(af!==W&&(af=W,aa=af.length=0,ab++),ca=ag.length,aa!==ca&&(ab++,af.length=aa=ca),bg=0;
bg<ca;
bg++){cb=af[bg],cc=ag[bg],cd=cb!==cb&&cc!==cc,cd||cb===cc||(ab++,af[bg]=cc)
}}else{af!==bf&&(af=bf={},aa=0,ab++);
ca=0;
for(bg in ag){ag.hasOwnProperty(bg)&&(ca++,cc=ag[bg],cb=af[bg],bg in af?(cd=cb!==cb&&cc!==cc,cd||cb===cc||(ab++,af[bg]=cc)):(aa++,af[bg]=cc,ab++))
}if(aa>ca){for(bg in ab++,af){ag.hasOwnProperty(bg)||(aa--,delete af[bg])
}}}}else{af!==ag&&(af=ag,ab++)
}return ab
}}bc.$stateful=!0;
var bb=this,ag,af,ae,ac=1<bd.length,ab=0,Y=J(be,bc),W=[],bf={},X=!0,aa=0;
return this.$watch(Y,function(){X?(X=!1,bd(ag,ag,bb)):bd(ag,ae,bb);
if(ac){if(fs(ag)){if(Z(ag)){ae=Array(ag.length);
for(var bg=0;
bg<ag.length;
bg++){ae[bg]=ag[bg]
}}else{for(bg in ae={},ag){bG.call(ag,bg)&&(ae[bg]=ag[bg])
}}}else{ae=ag
}}})
},$digest:function(){var af,ac,ab,aa,X,bf,Y=q,ag,bd=[],be,bb;
a("$digest");
G.$$checkUrlChange();
this===z&&null!==t&&(G.defer.cancel(t),U());
v=null;
do{bf=!1;
for(ag=this;
T.length;
){try{bb=T.shift(),bb.scope.$eval(bb.expression,bb.locals)
}catch(bc){L(bc)
}v=null
}q:do{if(aa=ag.$$watchers){for(X=aa.length;
X--;
){try{if(af=aa[X]){if((ac=af.get(ag))!==(ab=af.last)&&!(af.eq?c2(ac,ab):"number"===typeof ac&&"number"===typeof ab&&isNaN(ac)&&isNaN(ab))){bf=!0,v=af,af.last=af.eq?eh(ac,null):ac,af.fn(ac,ab===y?ac:ab,ag),5>Y&&(be=4-Y,bd[be]||(bd[be]=[]),bd[be].push({msg:eK(af.exp)?"fn: "+(af.exp.name||af.exp.toString()):af.exp,newVal:ac,oldVal:ab}))
}else{if(af===v){bf=!1;
break q
}}}}catch(W){L(W)
}}}if(!(aa=ag.$$watchersCount&&ag.$$childHead||ag!==this&&ag.$$nextSibling)){for(;
ag!==this&&!(aa=ag.$$nextSibling);
){ag=ag.$parent
}}}while(ag=aa);
if((bf||T.length)&&!Y--){throw z.$$phase=null,w("infdig",q,bd)
}}while(bf||T.length);
for(z.$$phase=null;
Q.length;
){try{Q.shift()()
}catch(ae){L(ae)
}}},$destroy:function(){if(!this.$$destroyed){var X=this.$parent;
this.$broadcast("$destroy");
this.$$destroyed=!0;
this===z&&G.$$applicationDestroyed();
V(this,-this.$$watchersCount);
for(var W in this.$$listenerCount){O(this,this.$$listenerCount[W],W)
}X&&X.$$childHead==this&&(X.$$childHead=this.$$nextSibling);
X&&X.$$childTail==this&&(X.$$childTail=this.$$prevSibling);
this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=eP;
this.$on=this.$watch=this.$watchGroup=function(){return eP
};
this.$$listeners={};
this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null
}},$eval:function(X,W){return J(X)(this,W)
},$evalAsync:function(X,W){z.$$phase||T.length||G.defer(function(){T.length&&z.$digest()
});
T.push({scope:this,expression:X,locals:W})
},$$postDigest:function(W){Q.push(W)
},$apply:function(X){try{return a("$apply"),this.$eval(X)
}catch(W){L(W)
}finally{z.$$phase=null;
try{z.$digest()
}catch(Y){throw L(Y),Y
}}},$applyAsync:function(X){function W(){Y.$eval(X)
}var Y=this;
X&&P.push(W);
R()
},$on:function(X,W){var ab=this.$$listeners[X];
ab||(this.$$listeners[X]=ab=[]);
ab.push(W);
var aa=this;
do{aa.$$listenerCount[X]||(aa.$$listenerCount[X]=0),aa.$$listenerCount[X]++
}while(aa=aa.$parent);
var Y=this;
return function(){var ac=ab.indexOf(W);
-1!==ac&&(ab[ac]=null,O(Y,1,X))
}
},$emit:function(bc,bb){var ag=[],af,ae=this,ac=!1,ab={name:bc,targetScope:ae,stopPropagation:function(){ac=!0
},preventDefault:function(){ab.defaultPrevented=!0
},defaultPrevented:!1},aa=eY([ab],arguments,1),Y,X;
do{af=ae.$$listeners[bc]||ag;
ab.currentScope=ae;
Y=0;
for(X=af.length;
Y<X;
Y++){if(af[Y]){try{af[Y].apply(null,aa)
}catch(W){L(W)
}}else{af.splice(Y,1),Y--,X--
}}if(ac){return ab.currentScope=null,ab
}ae=ae.$parent
}while(ae);
ab.currentScope=null;
return ab
},$broadcast:function(ag,af){var ae=this,ac=this,ab={name:ag,targetScope:this,preventDefault:function(){ab.defaultPrevented=!0
},defaultPrevented:!1};
if(!this.$$listenerCount[ag]){return ab
}for(var aa=eY([ab],arguments,1),Y,X;
ae=ac;
){ab.currentScope=ae;
ac=ae.$$listeners[ag]||[];
Y=0;
for(X=ac.length;
Y<X;
Y++){if(ac[Y]){try{ac[Y].apply(null,aa)
}catch(W){L(W)
}}else{ac.splice(Y,1),Y--,X--
}}if(!(ac=ae.$$listenerCount[ag]&&ae.$$childHead||ae!==this&&ae.$$nextSibling)){for(;
ae!==this&&!(ac=ae.$$nextSibling);
){ae=ae.$parent
}}}ab.currentScope=null;
return ab
}};
var z=new A,T=z.$$asyncQueue=[],Q=z.$$postDigestQueue=[],P=z.$$applyAsyncQueue=[];
return z
}]
}function dH(){var m=/^\s*(https?|ftp|mailto|tel|file):/,q=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(t){return eO(t)?(m=t,this):m
};
this.imgSrcSanitizationWhitelist=function(a){return eO(a)?(q=a,this):q
};
this.$get=function(){return function(w,v){var t=v?q:m,a;
a=aT(w).href;
return""===a||a.match(t)?w:"unsafe:"+a
}
}
}function a1(a){if("self"===a){return a
}if(fp(a)){if(-1<a.indexOf("***")){throw ar("iwcard",a)
}a=aw(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");
return new RegExp("^"+a+"$")
}if(a6(a)){return new RegExp("^"+a.source+"$")
}throw ar("imatcher")
}function aj(m){var q=[];
eO(m)&&eS(m,function(a){q.push(a1(a))
});
return q
}function cl(){this.SCE_CONTEXTS=bN;
var m=["self"],q=[];
this.resourceUrlWhitelist=function(t){arguments.length&&(m=aj(t));
return m
};
this.resourceUrlBlacklist=function(a){arguments.length&&(q=aj(a));
return q
};
this.$get=["$injector",function(z){function y(G,A){return"self"===G?dU(A):!!G.exec(A.href)
}function w(G){var A=function(H){this.$$unwrapTrustedValue=function(){return H
}
};
G&&(A.prototype=new G);
A.prototype.valueOf=function(){return this.$$unwrapTrustedValue()
};
A.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()
};
return A
}var v=function(A){throw ar("unsafe")
};
z.has("$sanitize")&&(v=z.get("$sanitize"));
var t=w(),a={};
a[bN.HTML]=w(t);
a[bN.CSS]=w(t);
a[bN.URL]=w(t);
a[bN.JS]=w(t);
a[bN.RESOURCE_URL]=w(a[bN.URL]);
return{trustAs:function(G,A){var H=a.hasOwnProperty(G)?a[G]:null;
if(!H){throw ar("icontext",G,A)
}if(null===A||A===eQ||""===A){return A
}if("string"!==typeof A){throw ar("itype",G)
}return new H(A)
},getTrusted:function(M,L){if(null===L||L===eQ||""===L){return L
}var J=a.hasOwnProperty(M)?a[M]:null;
if(J&&L instanceof J){return L.$$unwrapTrustedValue()
}if(M===bN.RESOURCE_URL){var J=aT(L.toString()),H,G,A=!1;
H=0;
for(G=m.length;
H<G;
H++){if(y(m[H],J)){A=!0;
break
}}if(A){for(H=0,G=q.length;
H<G;
H++){if(y(q[H],J)){A=!1;
break
}}}if(A){return L
}throw ar("insecurl",L.toString())
}if(M===bN.HTML){return v(L)
}throw ar("unsafe")
},valueOf:function(A){return A instanceof t?A.$$unwrapTrustedValue():A
}}
}]
}function cy(){var a=!0;
this.enabled=function(m){arguments.length&&(a=!!m);
return a
};
this.$get=["$parse","$sceDelegate",function(m,y){if(a&&8>cw){throw ar("iequirks")
}var w=dy(bN);
w.isEnabled=function(){return a
};
w.trustAs=y.trustAs;
w.getTrusted=y.getTrusted;
w.valueOf=y.valueOf;
a||(w.trustAs=w.getTrusted=function(A,z){return z
},w.valueOf=bt);
w.parseAs=function(z,G){var A=m(G);
return A.literal&&A.constant?A:m(G,function(H){return w.getTrusted(z,H)
})
};
var v=w.parseAs,t=w.getTrusted,q=w.trustAs;
eS(bN,function(A,z){var G=fo(z);
w[dK("parse_as_"+G)]=function(H){return v(A,H)
};
w[dK("get_trusted_"+G)]=function(H){return t(A,H)
};
w[dK("trust_as_"+G)]=function(H){return q(A,H)
}
});
return w
}]
}function bV(){this.$get=["$window","$document",function(J,L){var H={},G=e9((/android (\d+)/.exec(fo((J.navigator||{}).userAgent))||[])[1]),A=/Boxee/i.test((J.navigator||{}).userAgent),z=L[0]||{},y,w=/^(Moz|webkit|ms)(?=[A-Z])/,t=z.body&&z.body.style,v=!1,q=!1;
if(t){for(var m in t){if(v=w.exec(m)){y=v[0];
y=y.substr(0,1).toUpperCase()+y.substr(1);
break
}}y||(y="WebkitOpacity" in t&&"webkit");
v=!!("transition" in t||y+"Transition" in t);
q=!!("animation" in t||y+"Animation" in t);
!G||v&&q||(v=fp(t.webkitTransition),q=fp(t.webkitAnimation))
}return{history:!(!J.history||!J.history.pushState||4>G||A),hasEvent:function(O){if("input"===O&&11>=cw){return !1
}if(fz(H[O])){var M=z.createElement("div");
H[O]="on"+O in M
}return H[O]
},csp:d9(),vendorPrefix:y,transitions:v,animations:q,android:G}
}]
}function bv(){this.$get=["$templateCache","$http","$q","$sce",function(m,q,w,v){function t(z,y){t.totalPendingRequests++;
fp(z)&&m.get(z)||(z=v.getTrustedResourceUrl(z));
var a=q.defaults&&q.defaults.transformResponse;
fu(a)?a=a.filter(function(A){return A!==ci
}):a===ci&&(a=null);
return q.get(z,{cache:m,transformResponse:a})["finally"](function(){t.totalPendingRequests--
}).then(function(A){m.put(z,A.data);
return A.data
},function(A){if(!y){throw eu("tpload",z,A.status,A.statusText)
}return w.reject(A)
})
}t.totalPendingRequests=0;
return t
}]
}function bk(){this.$get=["$rootScope","$browser","$location",function(m,q,t){return{findBindings:function(w,v,z){w=w.getElementsByClassName("ng-binding");
var y=[];
eS(w,function(A){var G=eZ.element(A).data("$binding");
G&&eS(G,function(a){z?(new RegExp("(^|\\s)"+aw(v)+"(\\s|\\||$)")).test(a)&&y.push(A):-1!=a.indexOf(v)&&y.push(A)
})
});
return y
},findModels:function(y,v,G){for(var A=["ng-","data-ng-","ng\\:"],z=0;
z<A.length;
++z){var w=y.querySelectorAll("["+A[z]+"model"+(G?"=":"*=")+'"'+v+'"]');
if(w.length){return w
}}},getLocation:function(){return t.url()
},setLocation:function(v){v!==t.url()&&(t.url(v),m.$digest())
},whenStable:function(a){q.notifyWhenNoOutstandingRequests(a)
}}
}]
}function aV(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(m,q,z,y,w){function v(M,A,G){eK(M)||(G=A,A=M,M=eP);
var O=fM.call(arguments,3),J=eO(G)&&!G,H=(J?y:z).defer(),a=H.promise,L;
L=q.defer(function(){try{H.resolve(M.apply(null,O))
}catch(P){H.reject(P),w(P)
}finally{delete t[a.$$timeoutId]
}J||m.$apply()
},A);
a.$$timeoutId=L;
t[L]=H;
return a
}var t={};
v.cancel=function(a){return a&&a.$$timeoutId in t?(t[a.$$timeoutId].reject("canceled"),delete t[a.$$timeoutId],q.defer.cancel(a.$$timeoutId)):!1
};
return v
}]
}function aT(a){cw&&(e8.setAttribute("href",a),a=e8.href);
e8.setAttribute("href",a);
return{href:e8.href,protocol:e8.protocol?e8.protocol.replace(/:$/,""):"",host:e8.host,search:e8.search?e8.search.replace(/^\?/,""):"",hash:e8.hash?e8.hash.replace(/^#/,""):"",hostname:e8.hostname,port:e8.port,pathname:"/"===e8.pathname.charAt(0)?e8.pathname:"/"+e8.pathname}
}function dU(a){a=fp(a)?aT(a):a;
return a.protocol===B.protocol&&a.host===B.host
}function aH(){this.$get=bp(fn)
}function h(m){function q(z){try{return decodeURIComponent(z)
}catch(y){return z
}}var w=m[0]||{},v={},t="";
return function(){var a,G,A,y,z;
a=w.cookie||"";
if(a!==t){for(t=a,a=t.split("; "),v={},A=0;
A<a.length;
A++){G=a[A],y=G.indexOf("="),0<y&&(z=q(G.substring(0,y)),v[z]===eQ&&(v[z]=q(G.substring(y+1))))
}}return v
}
}function f(){this.$get=h
}function ex(m){function q(v,t){if(fs(v)){var a={};
eS(v,function(w,y){a[y]=q(y,w)
});
return a
}return m.factory(v+"Filter",t)
}this.register=q;
this.$get=["$injector",function(t){return function(a){return t.get(a+"Filter")
}
}];
q("currency",f2);
q("date",fJ);
q("filter",b7);
q("json",fN);
q("limitTo",fr);
q("lowercase",eT);
q("number",ba);
q("orderBy",aQ);
q("uppercase",eA)
}function b7(){return function(m,q,v){if(!Z(m)){if(null==m){return m
}throw fq("filter")("notarray",m)
}var t;
switch(dw(q)){case"function":break;
case"boolean":case"null":case"number":case"string":t=!0;
case"object":q=eo(q,v,t);
break;
default:return m
}return Array.prototype.filter.call(m,q)
}
}function eo(m,q,v){var t=fs(m)&&"$" in m;
!0===q?q=c2:eK(q)||(q=function(y,w){if(fz(y)){return !1
}if(null===y||null===w){return y===w
}if(fs(w)||fs(y)&&!bn(y)){return !1
}y=fo(""+y);
w=fo(""+w);
return -1!==y.indexOf(w)
});
return function(a){return t&&!fs(a)?ez(a,m.$,q,!1):ez(a,m,q,v)
}
}function ez(m,q,A,z,y){var w=dw(m),v=dw(q);
if("string"===v&&"!"===q.charAt(0)){return !ez(m,q.substring(1),A,z)
}if(fu(m)){return m.some(function(a){return ez(a,q,A,z)
})
}switch(w){case"object":var t;
if(z){for(t in m){if("$"!==t.charAt(0)&&ez(m[t],q,A,!0)){return !0
}}return y?!1:ez(m,q,A,!1)
}if("object"===v){for(t in q){if(y=q[t],!eK(y)&&!fz(y)&&(w="$"===t,!ez(w?m:m[t],y,A,w,w))){return !1
}}return !0
}return A(m,q);
case"function":return !1;
default:return A(m,q)
}}function dw(a){return null===a?"null":typeof a
}function f2(m){var q=m.NUMBER_FORMATS;
return function(a,v,t){fz(v)&&(v=q.CURRENCY_SYM);
fz(t)&&(t=q.PATTERNS[1].maxFrac);
return null==a?a:aC(a,q.PATTERNS[1],q.GROUP_SEP,q.DECIMAL_SEP,t).replace(/\u00A4/g,v)
}
}function ba(m){var q=m.NUMBER_FORMATS;
return function(a,t){return null==a?a:aC(a,q.PATTERNS[0],q.GROUP_SEP,q.DECIMAL_SEP,t)
}
}function aC(M,O,L,J,H){if(fs(M)){return""
}var G=0>M;
M=Math.abs(M);
var A=Infinity===M;
if(!A&&!isFinite(M)){return""
}var z=M+"",w="",y=!1,t=[];
A&&(w="\u221e");
if(!A&&-1!==z.indexOf("e")){var q=z.match(/([\d\.]+)e(-?)(\d+)/);
q&&"-"==q[2]&&q[3]>H+1?M=0:(w=z,y=!0)
}if(A||y){0<H&&1>M&&(w=M.toFixed(H),M=parseFloat(w))
}else{A=(z.split(ao)[1]||"").length;
fz(H)&&(H=Math.min(Math.max(O.minFrac,A),O.maxFrac));
M=+(Math.round(+(M.toString()+"e"+H)).toString()+"e"+-H);
var A=(""+M).split(ao),z=A[0],A=A[1]||"",q=0,P=O.lgSize,v=O.gSize;
if(z.length>=P+v){for(q=z.length-P,y=0;
y<q;
y++){0===(q-y)%v&&0!==y&&(w+=L),w+=z.charAt(y)
}}for(y=q;
y<z.length;
y++){0===(z.length-y)%P&&0!==y&&(w+=L),w+=z.charAt(y)
}for(;
A.length<H;
){A+="0"
}H&&"0"!==H&&(w+=J+A.substr(0,H))
}0===M&&(G=!1);
t.push(G?O.negPre:O.posPre,w,G?O.negSuf:O.posSuf);
return t.join("")
}function c(m,q,v){var t="";
0>m&&(t="-",m=-m);
for(m=""+m;
m.length<q;
){m="0"+m
}v&&(m=m.substr(m.length-q));
return t+m
}function e7(m,q,v,t){v=v||0;
return function(a){a=a["get"+m]();
if(0<v||a>-v){a+=v
}0===a&&-12==v&&(a=12);
return c(a,q,t)
}
}function fX(m,q){return function(w,v){var t=w["get"+m](),a=bo(q?"SHORT"+m:m);
return v[a][t]
}
}function K(m){var q=(new Date(m,0,1)).getDay();
return new Date(m,0,(4>=q?5:12)-q)
}function n(a){return function(m){var q=K(m.getFullYear());
m=+new Date(m.getFullYear(),m.getMonth(),m.getDate()+(4-m.getDay()))-+q;
m=1+Math.round(m/604800000);
return c(m,a)
}
}function dk(m,q){return 0>=m.getFullYear()?q.ERAS[0]:q.ERAS[1]
}function fJ(m){function q(y){var v;
if(v=y.match(t)){y=new Date(0);
var G=0,A=0,z=v[8]?y.setUTCFullYear:y.setFullYear,w=v[8]?y.setUTCHours:y.setHours;
v[9]&&(G=e9(v[9]+v[10]),A=e9(v[9]+v[11]));
z.call(y,e9(v[1]),e9(v[2])-1,e9(v[3]));
G=e9(v[4]||0)-G;
A=e9(v[5]||0)-A;
z=e9(v[6]||0);
v=Math.round(1000*parseFloat("0."+(v[7]||0)));
w.call(y,G,A,z,v)
}return y
}var t=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(H,A,z){var y="",w=[],a,v;
A=A||"mediumDate";
A=m.DATETIME_FORMATS[A]||A;
fp(H)&&(H=d4.test(H)?e9(H):q(H));
fh(H)&&(H=new Date(H));
if(!fS(H)||!isFinite(H.getTime())){return H
}for(;
A;
){(v=dR.exec(A))?(w=eY(w,v,1),A=w.pop()):(w.push(A),A=null)
}var G=H.getTimezoneOffset();
z&&(G=i(z,H.getTimezoneOffset()),H=dD(H,z,!0));
eS(w,function(J){a=dF[J];
y+=a?a(H,m.DATETIME_FORMATS,G):J.replace(/(^'|'$)/g,"").replace(/''/g,"'")
});
return y
}
}function fN(){return function(m,q){fz(q)&&(q=2);
return eF(m,q)
}
}function fr(){return function(m,q,t){q=Infinity===Math.abs(Number(q))?Number(q):e9(q);
if(isNaN(q)){return m
}fh(m)&&(m=m.toString());
if(!fu(m)&&!fp(m)){return m
}t=!t||isNaN(t)?0:e9(t);
t=0>t&&t>=-m.length?m.length+t:t;
return 0<=q?m.slice(t,t+q):0===t?m.slice(q,m.length):m.slice(Math.max(0,t+q),t)
}
}function aQ(m){function q(v,w){w=w?-1:1;
return v.map(function(z){var G=1,A=bt;
if(eK(z)){A=z
}else{if(fp(z)){if("+"==z.charAt(0)||"-"==z.charAt(0)){G="-"==z.charAt(0)?-1:1,z=z.substring(1)
}if(""!==z&&(A=m(z),A.constant)){var y=A(),A=function(H){return H[y]
}
}}}return{get:A,descending:G*w}
})
}function t(v){switch(typeof v){case"number":case"boolean":case"string":return !0;
default:return !1
}}return function(a,y,w){if(!Z(a)){return a
}fu(y)||(y=[y]);
0===y.length&&(y=["+"]);
var v=q(y,w);
a=Array.prototype.map.call(a,function(A,z){return{value:A,predicateValues:v.map(function(H){var G=H.get(A);
H=typeof G;
if(null===G){H="string",G="null"
}else{if("string"===H){G=G.toLowerCase()
}else{if("object"===H){A:{if("function"===typeof G.valueOf&&(G=G.valueOf(),t(G))){break A
}if(bn(G)&&(G=G.toString(),t(G))){break A
}G=z
}}}}return{value:G,type:H}
})}
});
a.sort(function(G,A){for(var M=0,L=0,J=v.length;
L<J;
++L){var M=G.predicateValues[L],H=A.predicateValues[L],z=0;
M.type===H.type?M.value!==H.value&&(z=M.value<H.value?-1:1):z=M.type<H.type?-1:1;
if(M=z*v[L].descending){break
}}return M
});
return a=a.map(function(z){return z.value
})
}
}function en(a){eK(a)&&(a={link:a});
a.restrict=a.restrict||"AC";
return bp(a)
}function f8(m,q,A,z,y){var w=this,v=[],t=w.$$parentForm=m.parent().controller("form")||fE;
w.$error={};
w.$$success={};
w.$pending=eQ;
w.$name=y(q.name||q.ngForm||"")(A);
w.$dirty=!1;
w.$pristine=!0;
w.$valid=!0;
w.$invalid=!1;
w.$submitted=!1;
t.$addControl(w);
w.$rollbackViewValue=function(){eS(v,function(G){G.$rollbackViewValue()
})
};
w.$commitViewValue=function(){eS(v,function(G){G.$commitViewValue()
})
};
w.$addControl=function(G){c8(G.$name,"input");
v.push(G);
G.$name&&(w[G.$name]=G)
};
w.$$renameControl=function(H,G){var J=H.$name;
w[J]===H&&delete w[J];
w[G]=H;
H.$name=G
};
w.$removeControl=function(G){G.$name&&w[G.$name]===G&&delete w[G.$name];
eS(w.$pending,function(a,H){w.$setValidity(H,null,G)
});
eS(w.$error,function(a,H){w.$setValidity(H,null,G)
});
eS(w.$$success,function(a,H){w.$setValidity(H,null,G)
});
fy(v,G)
};
fV({ctrl:this,$element:m,set:function(H,G,L){var J=H[G];
J?-1===J.indexOf(L)&&J.push(L):H[G]=[L]
},unset:function(H,G,L){var J=H[G];
J&&(fy(J,L),0===J.length&&delete H[G])
},parentForm:t,$animate:z});
w.$setDirty=function(){z.removeClass(m,b6);
z.addClass(m,e5);
w.$dirty=!0;
w.$pristine=!1;
t.$setDirty()
};
w.$setPristine=function(){z.setClass(m,b6,e5+" ng-submitted");
w.$dirty=!1;
w.$pristine=!0;
w.$submitted=!1;
eS(v,function(G){G.$setPristine()
})
};
w.$setUntouched=function(){eS(v,function(G){G.$setUntouched()
})
};
w.$setSubmitted=function(){z.addClass(m,"ng-submitted");
w.$submitted=!0;
t.$setSubmitted()
}
}function c0(a){a.$formatters.push(function(m){return a.$isEmpty(m)?m:m.toString()
})
}function c1(H,J,G,A,z,y){var w=fo(J[0].type);
if(!z.android){var v=!1;
J.on("compositionstart",function(L){v=!0
});
J.on("compositionend",function(){v=!1;
q()
})
}var q=function(a){t&&(y.defer.cancel(t),t=null);
if(!v){var L=J.val();
a=a&&a.type;
"password"===w||G.ngTrim&&"false"===G.ngTrim||(L=fk(L));
(A.$viewValue!==L||""===L&&A.$$hasNativeValidators)&&A.$setViewValue(L,a)
}};
if(z.hasEvent("input")){J.on("input",q)
}else{var t,m=function(M,L,O){t||(t=y.defer(function(){t=null;
L&&L.value===O||q(M)
}))
};
J.on("keydown",function(M){var L=M.keyCode;
91===L||15<L&&19>L||37<=L&&40>=L||m(M,this,this.value)
});
if(z.hasEvent("paste")){J.on("paste cut",m)
}}J.on("change",q);
A.$render=function(){J.val(A.$isEmpty(A.$viewValue)?"":A.$viewValue)
}
}function eL(m,q){return function(w,v){var t,a;
if(fS(w)){return w
}if(fp(w)){'"'==w.charAt(0)&&'"'==w.charAt(w.length-1)&&(w=w.substring(1,w.length-1));
if(dt.test(w)){return new Date(w)
}m.lastIndex=0;
if(t=m.exec(w)){return t.shift(),a=v?{yyyy:v.getFullYear(),MM:v.getMonth()+1,dd:v.getDate(),HH:v.getHours(),mm:v.getMinutes(),ss:v.getSeconds(),sss:v.getMilliseconds()/1000}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},eS(t,function(y,z){z<q.length&&(a[q[z]]=+y)
}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1000*a.sss||0)
}}return NaN
}
}function cO(m,q,v,t){return function(M,L,J,H,A,G,y){function a(R){return R&&!(R.getTime&&R.getTime()!==R.getTime())
}function Q(R){return eO(R)?fS(R)?R:v(R):eQ
}fC(M,L,J,H);
c1(M,L,J,H,A,G);
var z=H&&H.$options&&H.$options.timezone,w;
H.$$parserName=m;
H.$parsers.push(function(R){return H.$isEmpty(R)?null:q.test(R)?(R=v(R,w),z&&(R=dD(R,z)),R):eQ
});
H.$formatters.push(function(R){if(R&&!fS(R)){throw ey("datefmt",R)
}if(a(R)){return(w=R)&&z&&(w=dD(w,z,!0)),y("date")(R,t,z)
}w=null;
return""
});
if(eO(J.min)||J.ngMin){var P;
H.$validators.min=function(R){return !a(R)||fz(P)||v(R)>=P
};
J.$observe("min",function(R){P=Q(R);
H.$validate()
})
}if(eO(J.max)||J.ngMax){var O;
H.$validators.max=function(R){return !a(R)||fz(O)||v(R)<=O
};
J.$observe("max",function(R){O=Q(R);
H.$validate()
})
}}
}function fC(m,q,v,t){(t.$$hasNativeValidators=fs(q[0].validity))&&t.$parsers.push(function(a){var w=q.prop("validity")||{};
return w.badInput&&!w.typeMismatch?eQ:a
})
}function e3(m,q,w,v,t){if(eO(v)){m=m(v);
if(!m.constant){throw fq("ngModel")("constexpr",w,v)
}return m(q)
}return t
}function cN(m,q){m="ngClass"+m;
return["$animate",function(v){function t(y,w){var H=[],A=0;
y:for(;
A<y.length;
A++){for(var z=y[A],G=0;
G<w.length;
G++){if(z==w[G]){continue y
}}H.push(z)
}return H
}function a(y){var w=[];
return fu(y)?(eS(y,function(z){w=w.concat(a(z))
}),w):fp(y)?y.split(" "):fs(y)?(eS(y,function(z,A){z&&(w=w.concat(A.split(" ")))
}),w):y
}return{restrict:"AC",link:function(G,A,z){function w(L,J){var O=A.data("$classCounts")||dX(),M=[];
eS(L,function(P){if(0<J||O[P]){O[P]=(O[P]||0)+J,O[P]===+(0<J)&&M.push(P)
}});
A.data("$classCounts",O);
return M.join(" ")
}function y(L){if(!0===q||G.$index%2===q){var M=a(L||[]);
if(!H){var J=w(M,1);
z.$addClass(J)
}else{if(!c2(L,H)){var O=a(H),J=t(M,O),M=t(O,M),J=w(J,1),M=w(M,-1);
J&&J.length&&v.addClass(A,J);
M&&M.length&&v.removeClass(A,M)
}}}H=dy(L)
}var H;
G.$watch(z[m],y,!0);
z.$observe("class",function(J){y(G.$eval(z[m]))
});
"ngClass"!==m&&G.$watch("$index",function(O,M){var L=O&1;
if(L!==(M&1)){var J=a(G.$eval(z[m]));
L===q?(L=w(J,1),z.$addClass(L)):(L=w(J,-1),z.$removeClass(L))
}})
}}
}]
}function fV(G){function H(L,J){J&&!w[L]?(q.addClass(y,L),w[L]=!0):!J&&w[L]&&(q.removeClass(y,L),w[L]=!1)
}function A(a,J){a=a?"-"+aR(a,"-"):"";
H(cC+a,!0===J);
H(eI+a,!1===J)
}var z=G.ctrl,y=G.$element,w={},v=G.set,t=G.unset,m=G.parentForm,q=G.$animate;
w[eI]=!(w[cC]=y.hasClass(cC));
z.$setValidity=function(a,L,J){L===eQ?(z.$pending||(z.$pending={}),v(z.$pending,a,J)):(z.$pending&&t(z.$pending,a,J),ew(z.$pending)&&(z.$pending=eQ));
fR(L)?L?(t(z.$error,a,J),v(z.$$success,a,J)):(v(z.$error,a,J),t(z.$$success,a,J)):(t(z.$error,a,J),t(z.$$success,a,J));
z.$pending?(H(ek,!0),z.$valid=z.$invalid=eQ,A("",null)):(H(ek,!1),z.$valid=ew(z.$error),z.$invalid=!z.$valid,A("",z.$valid));
L=z.$pending&&z.$pending[a]?eQ:z.$error[a]?!1:z.$$success[a]?!0:null;
A(a,L);
m.$setValidity(a,L,z)
}
}function ew(m){if(m){for(var q in m){if(m.hasOwnProperty(q)){return !1
}}}return !0
}var c9=/^\/(.+)\/([a-z]*)$/,fo=function(a){return fp(a)?a.toLowerCase():a
},bG=Object.prototype.hasOwnProperty,bo=function(a){return fp(a)?a.toUpperCase():a
},cw,eM,cP,fM=[].slice,ei=[].splice,cW=[].push,a0=Object.prototype.toString,aY=Object.getPrototypeOf,r=fq("ng"),eZ=fn.angular||(fn.angular={}),dW,cp=0;
cw=fi.documentMode;
eP.$inject=[];
bt.$inject=[];
var fu=Array.isArray,ax=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,fk=function(a){return fp(a)?a.trim():a
},aw=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")
},d9=function(){if(eO(d9.isActive_)){return d9.isActive_
}var m=!(!fi.querySelector("[ng-csp]")&&!fi.querySelector("[data-ng-csp]"));
if(!m){try{new Function("")
}catch(q){m=!0
}}return d9.isActive_=m
},bM=function(){if(eO(bM.name_)){return bM.name_
}var m,q,w=dQ.length,v,t;
for(q=0;
q<w;
++q){if(v=dQ[q],m=fi.querySelector("["+v.replace(":","\\:")+"jq]")){t=m.getAttribute(v+"jq");
break
}}return bM.name_=t
},dQ=["ng-","data-ng-","ng:","x-ng-"],fv=/[A-Z]/g,aD=!1,c7,bA=1,d3=3,d6={full:"1.4.3",major:1,minor:4,dot:3,codeName:"foam-acceleration"};
fl.expando="ng339";
var dx=fl.cache={},am=1;
fl._data=function(a){return this.cache[a[this.expando]]||{}
};
var f0=/([\:\-\_]+(.))/g,fH=/^moz([A-Z])/,cJ={mouseleave:"mouseout",mouseenter:"mouseover"},cv=fq("jqLite"),aA=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,cI=/<|&#?\w+;/,a8=/<([\w:]+)/,aO=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,cq={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
cq.optgroup=cq.option;
cq.tbody=cq.tfoot=cq.colgroup=cq.caption=cq.thead;
cq.th=cq.td;
var dE=fl.prototype={ready:function(m){function q(){t||(t=!0,m())
}var t=!1;
"complete"===fi.readyState?setTimeout(q):(this.on("DOMContentLoaded",q),fl(fn).on("load",q))
},toString:function(){var a=[];
eS(this,function(m){a.push(""+m)
});
return"["+a.join(", ")+"]"
},eq:function(a){return 0<=a?eM(this[a]):eM(this[this.length+a])
},length:0,push:cW,sort:[].sort,splice:[].splice},bi={};
eS("multiple selected checked disabled readOnly required open".split(" "),function(a){bi[fo(a)]=a
});
var cH={};
eS("input select option textarea button form details".split(" "),function(a){cH[a]=!0
});
var cu={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
eS({data:bS,removeData:ay,hasData:function(m){for(var q in dx[m.ng339]){return !0
}return !1
}},function(m,q){fl[q]=m
});
eS({data:bS,inheritedData:fL,scope:function(a){return eM.data(a,"$scope")||fL(a.parentNode||a,["$isolateScope","$scope"])
},isolateScope:function(a){return eM.data(a,"$isolateScope")||eM.data(a,"$isolateScopeNoTemplate")
},controller:dq,injector:function(a){return fL(a,"$injector")
},removeAttr:function(m,q){m.removeAttribute(q)
},hasClass:D,css:function(m,q,t){q=dK(q);
if(eO(t)){m.style[q]=t
}else{return m.style[q]
}},attr:function(m,q,v){var t=m.nodeType;
if(t!==d3&&2!==t&&8!==t){if(t=fo(q),bi[t]){if(eO(v)){v?(m[q]=!0,m.setAttribute(q,t)):(m[q]=!1,m.removeAttribute(t))
}else{return m[q]||(m.attributes.getNamedItem(q)||eP).specified?t:eQ
}}else{if(eO(v)){m.setAttribute(q,v)
}else{if(m.getAttribute){return m=m.getAttribute(q,2),null===m?eQ:m
}}}}},prop:function(m,q,t){if(eO(t)){m[q]=t
}else{return m[q]
}},text:function(){function a(q,m){if(fz(m)){var t=q.nodeType;
return t===bA||t===d3?q.textContent:""
}q.textContent=m
}a.$dv="";
return a
}(),val:function(m,q){if(fz(q)){if(m.multiple&&"select"===aM(m)){var t=[];
eS(m.options,function(v){v.selected&&t.push(v.value||v.text)
});
return 0===t.length?null:t
}return m.value
}m.value=q
},html:function(m,q){if(fz(q)){return m.innerHTML
}aL(m,!0);
m.innerHTML=q
},empty:c6},function(m,q){fl.prototype[q]=function(t,A){var z,y,w=this.length;
if(m!==c6&&(2==m.length&&m!==D&&m!==dq?t:A)===eQ){if(fs(t)){for(z=0;
z<w;
z++){if(m===bS){m(this[z],t)
}else{for(y in t){m(this[z],y,t[y])
}}}return this
}z=m.$dv;
w=z===eQ?Math.min(w,1):w;
for(y=0;
y<w;
y++){var v=m(this[y],t,A);
z=z?z+v:v
}return z
}for(z=0;
z<w;
z++){m(this[z],t,A)
}return this
}
});
eS({removeData:ay,on:function e0(z,y,w,v){if(eO(v)){throw cv("onargs")
}if(el(z)){var t=al(z,!0);
v=t.events;
var q=t.handle;
q||(q=t.handle=f6(z,v));
for(var t=0<=y.indexOf(" ")?y.split(" "):[y],a=t.length;
a--;
){y=t[a];
var m=v[y];
m||(v[y]=[],"mouseenter"===y||"mouseleave"===y?e0(z,cJ[y],function(A){var G=A.relatedTarget;
G&&(G===this||this.contains(G))||q(A,y)
}):"$destroy"!==y&&z.addEventListener(y,q,!1),m=v[y]);
m.push(w)
}}},off:dC,one:function(m,v,t){m=eM(m);
m.on(v,function q(){m.off(v,t);
m.off(v,q)
});
m.on(v,t)
},replaceWith:function(m,v){var t,q=m.parentNode;
aL(m);
eS(new fl(v),function(a){t?q.insertBefore(a,t.nextSibling):q.replaceChild(a,m);
t=a
})
},children:function(m){var q=[];
eS(m.childNodes,function(t){t.nodeType===bA&&q.push(t)
});
return q
},contents:function(m){return m.contentDocument||m.childNodes||[]
},append:function(m,v){var t=m.nodeType;
if(t===bA||11===t){v=new fl(v);
for(var t=0,q=v.length;
t<q;
t++){m.appendChild(v[t])
}}},prepend:function(m,t){if(m.nodeType===bA){var q=m.firstChild;
eS(new fl(t),function(a){m.insertBefore(a,q)
})
}},wrap:function(m,t){t=eM(t).eq(0).clone()[0];
var q=m.parentNode;
q&&q.replaceChild(t,m);
t.appendChild(m)
},remove:bF,detach:function(m){bF(m,!0)
},after:function(m,z){var y=m,w=m.parentNode;
z=new fl(z);
for(var v=0,t=z.length;
v<t;
v++){var q=z[v];
w.insertBefore(q,y.nextSibling);
y=q
}},addClass:f4,removeClass:j,toggleClass:function(m,t,q){t&&eS(t.split(" "),function(v){var a=q;
fz(a)&&(a=!D(m,v));
(a?f4:j)(m,v)
})
},parent:function(m){return(m=m.parentNode)&&11!==m.nodeType?m:null
},next:function(m){return m.nextElementSibling
},find:function(m,q){return m.getElementsByTagName?m.getElementsByTagName(q):[]
},clone:b5,triggerHandler:function(m,z,y){var w,v,t=z.type||z,q=al(m);
if(q=(q=q&&q.events)&&q[t]){w={preventDefault:function(){this.defaultPrevented=!0
},isDefaultPrevented:function(){return !0===this.defaultPrevented
},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0
},isImmediatePropagationStopped:function(){return !0===this.immediatePropagationStopped
},stopPropagation:eP,type:t,target:m},z.type&&(w=fm(w,z)),z=dy(q),v=y?[w].concat(y):[w],eS(z,function(a){w.isImmediatePropagationStopped()||a.apply(m,v)
})
}}},function(m,q){fl.prototype[q]=function(z,y,w){for(var v,t=0,a=this.length;
t<a;
t++){fz(v)?(v=m(this[t],z,y,w),eO(v)&&(v=eM(v))):dO(v,m(this[t],z,y,w))
}return eO(v)?v:this
};
fl.prototype.bind=fl.prototype.on;
fl.prototype.unbind=fl.prototype.off
});
cV.prototype={put:function(m,q){this[d(m,this.nextUid)]=q
},get:function(m){return this[d(m,this.nextUid)]
},remove:function(m){var q=this[m=d(m,this.nextUid)];
delete this[m];
return q
}};
var u=[function(){this.$get=[function(){return cV
}]
}],bR=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,cx=/,/,ck=/^\s*(_?)(\S+?)\1\s*$/,b4=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,fY=fq("$injector");
et.$$annotate=function(m,v,t){var q;
if("function"===typeof m){if(!(q=m.$inject)){q=[];
if(m.length){if(v){throw fp(t)&&t||(t=m.name||fT(m)),fY("strictdi",t)
}v=m.toString().replace(b4,"");
v=v.match(bR);
eS(v[1].split(cx),function(w){w.replace(ck,function(y,A,z){q.push(z)
})
})
}m.$inject=q
}}else{fu(m)?(v=m.length-1,ds(m[v],"fn"),q=m.slice(0,v)):ds(m,"fn",!0)
}return q
};
var d0=fq("$animate"),cs=function(){this.$get=["$q","$$rAF",function(m,t){function q(){}q.all=eP;
q.chain=eP;
q.prototype={end:eP,cancel:eP,resume:eP,pause:eP,complete:eP,then:function(v,a){return m(function(w){t(function(){w()
})
}).then(v,a)
}};
return q
}]
},cF=function(){var m=new cV,q=[];
this.$get=["$$AnimateRunner","$rootScope",function(v,t){function a(A,z,w){var y=m.get(A);
y||(m.put(A,y={}),q.push(A));
z&&eS(z.split(" "),function(G){G&&(y[G]=!0)
});
w&&eS(w.split(" "),function(G){G&&(y[G]=!1)
});
1<q.length||t.$$postDigest(function(){eS(q,function(M){var L=m.get(M);
if(L){var J=fA(M.attr("class")),H="",G="";
eS(L,function(O,P){O!==!!J[P]&&(O?H+=(H.length?" ":"")+P:G+=(G.length?" ":"")+P)
});
eS(M,function(O){H&&f4(O,H);
G&&j(O,G)
});
m.remove(M)
}});
q.length=0
})
}return{enabled:eP,on:eP,off:eP,pin:eP,push:function(w,A,z,y){y&&y();
z=z||{};
z.from&&w.css(z.from);
z.to&&w.css(z.to);
(z.addClass||z.removeClass)&&a(w,z.addClass,z.removeClass);
return new v
}}
}]
},cR=["$provide",function(m){var q=this;
this.$$registeredAnimations=Object.create(null);
this.register=function(v,t){if(v&&"."!==v.charAt(0)){throw d0("notcsel",v)
}var a=v+"-animation";
q.$$registeredAnimations[v.substr(1)]=a;
m.factory(a,t)
};
this.classNameFilter=function(t){if(1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())){throw d0("nongcls","ng-animate")
}return this.$$classNameFilter
};
this.$get=["$$animateQueue",function(t){function v(y,G,A){if(A){var w;
y:{for(w=0;
w<A.length;
w++){var z=A[w];
if(1===z.nodeType){w=z;
break y
}}w=void 0
}!w||w.parentNode||w.previousElementSibling||(A=null)
}A?A.after(y):G.prepend(y)
}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(w){w.end&&w.end()
},enter:function(z,y,w,a){y=y&&eM(y);
w=w&&eM(w);
y=y||w.parent();
v(z,y,w);
return t.push(z,"enter",fF(a))
},move:function(z,y,w,a){y=y&&eM(y);
w=w&&eM(w);
y=y||w.parent();
v(z,y,w);
return t.push(z,"move",fF(a))
},leave:function(w,a){return t.push(w,"leave",fF(a),function(){w.remove()
})
},addClass:function(y,w,a){a=fF(a);
a.addClass=dl(a.addclass,w);
return t.push(y,"addClass",a)
},removeClass:function(y,w,a){a=fF(a);
a.removeClass=dl(a.removeClass,w);
return t.push(y,"removeClass",a)
},setClass:function(z,y,w,a){a=fF(a);
a.addClass=dl(a.addClass,y);
a.removeClass=dl(a.removeClass,w);
return t.push(z,"setClass",a)
},animate:function(A,z,y,a,w){w=fF(w);
w.from=w.from?fm(w.from,z):z;
w.to=w.to?fm(w.to,y):y;
w.tempClasses=dl(w.tempClasses,a||"ng-inline-animate");
return t.push(A,"animate",w)
}}
}]
}],eu=fq("$compile");
N.$inject=["$provide","$$sanitizeUriProvider"];
var a4=/^((?:x|data)[\:\-_])/i,dY=fq("$controller"),bE=/^(\S+)(\s+as\s+(\w+))?$/,eW="application/json",fQ={"Content-Type":eW+";charset=utf-8"},dz=/^\[|^\{(?!\{)/,dm={"[":/]$/,"{":/}$/},dL=/^\)\]\}',?\n/,eN=eZ.$interpolateMinErr=fq("$interpolate");
eN.throwNoconcat=function(m){throw eN("noconcat",m)
};
eN.interr=function(m,q){return eN("interr",m,q.toString())
};
var bU=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,cE={http:80,https:443,ftp:21},aE=fq("$location"),bH={$$html5:!1,$$replace:!1,absUrl:aq("$$absUrl"),url:function(m){if(fz(m)){return this.$$url
}var q=bU.exec(m);
(q[1]||""===m)&&this.path(decodeURIComponent(q[1]));
(q[2]||q[1]||""===m)&&this.search(q[3]||"");
this.hash(q[5]||"");
return this
},protocol:aq("$$protocol"),host:aq("$$host"),port:aq("$$port"),path:cZ("$$path",function(m){m=null!==m?m.toString():"";
return"/"==m.charAt(0)?m:"/"+m
}),search:function(m,q){switch(arguments.length){case 0:return this.$$search;
case 1:if(fp(m)||fh(m)){m=m.toString(),this.$$search=fK(m)
}else{if(fs(m)){m=eh(m,{}),eS(m,function(t,a){null==t&&delete m[a]
}),this.$$search=m
}else{throw aE("isrcharg")
}}break;
default:fz(q)||null===q?delete this.$$search[m]:this.$$search[m]=q
}this.$$compose();
return this
},hash:cZ("$$hash",function(m){return null!==m?m.toString():""
}),replace:function(){this.$$replace=!0;
return this
}};
eS([dj,es,eE],function(m){m.prototype=Object.create(bH);
m.prototype.state=function(a){if(!arguments.length){return this.$$state
}if(m!==eE||!this.$$html5){throw aE("nostate")
}this.$$state=fz(a)?null:a;
return this
}
});
var eG=fq("$parse"),cr=Function.prototype.call,b1=Function.prototype.apply,bO=Function.prototype.bind,em=dX();
eS("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(m){em[m]=!0
});
var bu={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dV=function(m){this.options=m
};
dV.prototype={constructor:dV,lex:function(m){this.text=m;
this.index=0;
for(this.tokens=[];
this.index<this.text.length;
){if(m=this.text.charAt(this.index),'"'===m||"'"===m){this.readString(m)
}else{if(this.isNumber(m)||"."===m&&this.isNumber(this.peek())){this.readNumber()
}else{if(this.isIdent(m)){this.readIdent()
}else{if(this.is(m,"(){}[].,;:?")){this.tokens.push({index:this.index,text:m}),this.index++
}else{if(this.isWhitespace(m)){this.index++
}else{var w=m+this.peek(),v=w+this.peek(2),t=em[w],q=em[v];
em[m]||t||q?(m=q?v:t?w:m,this.tokens.push({index:this.index,text:m,operator:!0}),this.index+=m.length):this.throwError("Unexpected next character ",this.index,this.index+1)
}}}}}}return this.tokens
},is:function(m,q){return -1!==q.indexOf(m)
},peek:function(m){m=m||1;
return this.index+m<this.text.length?this.text.charAt(this.index+m):!1
},isNumber:function(m){return"0"<=m&&"9">=m&&"string"===typeof m
},isWhitespace:function(m){return" "===m||"\r"===m||"\t"===m||"\n"===m||"\v"===m||"\u00a0"===m
},isIdent:function(m){return"a"<=m&&"z">=m||"A"<=m&&"Z">=m||"_"===m||"$"===m
},isExpOperator:function(m){return"-"===m||"+"===m||this.isNumber(m)
},throwError:function(m,t,q){q=q||this.index;
t=eO(t)?"s "+t+"-"+this.index+" ["+this.text.substring(t,q)+"]":" "+q;
throw eG("lexerr",m,t,this.text)
},readNumber:function(){for(var m="",v=this.index;
this.index<this.text.length;
){var t=fo(this.text.charAt(this.index));
if("."==t||this.isNumber(t)){m+=t
}else{var q=this.peek();
if("e"==t&&this.isExpOperator(q)){m+=t
}else{if(this.isExpOperator(t)&&q&&this.isNumber(q)&&"e"==m.charAt(m.length-1)){m+=t
}else{if(!this.isExpOperator(t)||q&&this.isNumber(q)||"e"!=m.charAt(m.length-1)){break
}else{this.throwError("Invalid exponent")
}}}}this.index++
}this.tokens.push({index:v,text:m,constant:!0,value:Number(m)})
},readIdent:function(){for(var m=this.index;
this.index<this.text.length;
){var q=this.text.charAt(this.index);
if(!this.isIdent(q)&&!this.isNumber(q)){break
}this.index++
}this.tokens.push({index:m,text:this.text.slice(m,this.index),identifier:!0})
},readString:function(m){var y=this.index;
this.index++;
for(var w="",v=m,t=!1;
this.index<this.text.length;
){var q=this.text.charAt(this.index),v=v+q;
if(t){"u"===q?(t=this.text.substring(this.index+1,this.index+5),t.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+t+"]"),this.index+=4,w+=String.fromCharCode(parseInt(t,16))):w+=bu[q]||q,t=!1
}else{if("\\"===q){t=!0
}else{if(q===m){this.index++;
this.tokens.push({index:y,text:v,constant:!0,value:w});
return
}w+=q
}}this.index++
}this.throwError("Unterminated quote",y)
}};
var eR=function(m,q){this.lexer=m;
this.options=q
};
eR.Program="Program";
eR.ExpressionStatement="ExpressionStatement";
eR.AssignmentExpression="AssignmentExpression";
eR.ConditionalExpression="ConditionalExpression";
eR.LogicalExpression="LogicalExpression";
eR.BinaryExpression="BinaryExpression";
eR.UnaryExpression="UnaryExpression";
eR.CallExpression="CallExpression";
eR.MemberExpression="MemberExpression";
eR.Identifier="Identifier";
eR.Literal="Literal";
eR.ArrayExpression="ArrayExpression";
eR.Property="Property";
eR.ObjectExpression="ObjectExpression";
eR.ThisExpression="ThisExpression";
eR.NGValueParameter="NGValueParameter";
eR.prototype={ast:function(m){this.text=m;
this.tokens=this.lexer.lex(m);
m=this.program();
0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
return m
},program:function(){for(var m=[];
;
){if(0<this.tokens.length&&!this.peek("}",")",";","]")&&m.push(this.expressionStatement()),!this.expect(";")){return{type:eR.Program,body:m}
}}},expressionStatement:function(){return{type:eR.ExpressionStatement,expression:this.filterChain()}
},filterChain:function(){for(var m=this.expression();
this.expect("|");
){m=this.filter(m)
}return m
},expression:function(){return this.assignment()
},assignment:function(){var m=this.ternary();
this.expect("=")&&(m={type:eR.AssignmentExpression,left:m,right:this.assignment(),operator:"="});
return m
},ternary:function(){var m=this.logicalOR(),t,q;
return this.expect("?")&&(t=this.expression(),this.consume(":"))?(q=this.expression(),{type:eR.ConditionalExpression,test:m,alternate:t,consequent:q}):m
},logicalOR:function(){for(var m=this.logicalAND();
this.expect("||");
){m={type:eR.LogicalExpression,operator:"||",left:m,right:this.logicalAND()}
}return m
},logicalAND:function(){for(var m=this.equality();
this.expect("&&");
){m={type:eR.LogicalExpression,operator:"&&",left:m,right:this.equality()}
}return m
},equality:function(){for(var m=this.relational(),q;
q=this.expect("==","!=","===","!==");
){m={type:eR.BinaryExpression,operator:q.text,left:m,right:this.relational()}
}return m
},relational:function(){for(var m=this.additive(),q;
q=this.expect("<",">","<=",">=");
){m={type:eR.BinaryExpression,operator:q.text,left:m,right:this.additive()}
}return m
},additive:function(){for(var m=this.multiplicative(),q;
q=this.expect("+","-");
){m={type:eR.BinaryExpression,operator:q.text,left:m,right:this.multiplicative()}
}return m
},multiplicative:function(){for(var m=this.unary(),q;
q=this.expect("*","/","%");
){m={type:eR.BinaryExpression,operator:q.text,left:m,right:this.unary()}
}return m
},unary:function(){var m;
return(m=this.expect("+","-","!"))?{type:eR.UnaryExpression,operator:m.text,prefix:!0,argument:this.unary()}:this.primary()
},primary:function(){var m;
this.expect("(")?(m=this.filterChain(),this.consume(")")):this.expect("[")?m=this.arrayDeclaration():this.expect("{")?m=this.object():this.constants.hasOwnProperty(this.peek().text)?m=eh(this.constants[this.consume().text]):this.peek().identifier?m=this.identifier():this.peek().constant?m=this.constant():this.throwError("not a primary expression",this.peek());
for(var q;
q=this.expect("(","[",".");
){"("===q.text?(m={type:eR.CallExpression,callee:m,arguments:this.parseArguments()},this.consume(")")):"["===q.text?(m={type:eR.MemberExpression,object:m,property:this.expression(),computed:!0},this.consume("]")):"."===q.text?m={type:eR.MemberExpression,object:m,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE")
}return m
},filter:function(m){m=[m];
for(var q={type:eR.CallExpression,callee:this.identifier(),arguments:m,filter:!0};
this.expect(":");
){m.push(this.expression())
}return q
},parseArguments:function(){var m=[];
if(")"!==this.peekToken().text){do{m.push(this.expression())
}while(this.expect(","))
}return m
},identifier:function(){var m=this.consume();
m.identifier||this.throwError("is not a valid identifier",m);
return{type:eR.Identifier,name:m.text}
},constant:function(){return{type:eR.Literal,value:this.consume().value}
},arrayDeclaration:function(){var m=[];
if("]"!==this.peekToken().text){do{if(this.peek("]")){break
}m.push(this.expression())
}while(this.expect(","))
}this.consume("]");
return{type:eR.ArrayExpression,elements:m}
},object:function(){var m=[],q;
if("}"!==this.peekToken().text){do{if(this.peek("}")){break
}q={type:eR.Property,kind:"init"};
this.peek().constant?q.key=this.constant():this.peek().identifier?q.key=this.identifier():this.throwError("invalid key",this.peek());
this.consume(":");
q.value=this.expression();
m.push(q)
}while(this.expect(","))
}this.consume("}");
return{type:eR.ObjectExpression,properties:m}
},throwError:function(m,q){throw eG("syntax",q.text,m,q.index+1,this.text,this.text.substring(q.index))
},consume:function(m){if(0===this.tokens.length){throw eG("ueoe",this.text)
}var q=this.expect(m);
q||this.throwError("is unexpected, expecting ["+m+"]",this.peek());
return q
},peekToken:function(){if(0===this.tokens.length){throw eG("ueoe",this.text)
}return this.tokens[0]
},peek:function(m,v,t,q){return this.peekAhead(0,m,v,t,q)
},peekAhead:function(m,y,w,v,t){if(this.tokens.length>m){m=this.tokens[m];
var q=m.text;
if(q===y||q===w||q===v||q===t||!(y||w||v||t)){return m
}}return !1
},expect:function(m,v,t,q){return(m=this.peek(m,v,t,q))?(this.tokens.shift(),m):!1
},constants:{"true":{type:eR.Literal,value:!0},"false":{type:eR.Literal,value:!1},"null":{type:eR.Literal,value:null},undefined:{type:eR.Literal,value:eQ},"this":{type:eR.ThisExpression}}};
bm.prototype={compile:function(m,y){var w=this,v=this.astBuilder.ast(m);
this.state={nextId:0,filters:{},expensiveChecks:y,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};
fj(v,w.$filter);
var t="",q;
this.stage="assign";
if(q=bK(v)){this.state.computing="assign",t=this.nextId(),this.recurse(q,t),t="fn.assign="+this.generateFunction("assign","s,v,l")
}q=cn(v.body);
w.stage="inputs";
eS(q,function(z,H){var G="fn"+H;
w.state[G]={vars:[],body:[],own:{}};
w.state.computing=G;
var A=w.nextId();
w.recurse(z,A);
w.return_(A);
w.state.inputs.push(G);
z.watchId=H
});
this.state.computing="fn";
this.stage="main";
this.recurse(v);
t='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+t+this.watchFns()+"return fn;";
t=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",t))(this.$filter,aF,b0,cM,bB,cA,m);
this.state=this.stage=eQ;
t.literal=bx(v);
t.constant=v.constant;
return t
},USE:"use",STRICT:"strict",watchFns:function(){var m=[],t=this.state.inputs,q=this;
eS(t,function(a){m.push("var "+a+"="+q.generateFunction(a,"s"))
});
t.length&&m.push("fn.inputs=["+t.join(",")+"];");
return m.join("")
},generateFunction:function(m,q){return"function("+q+"){"+this.varsPrefix(m)+this.body(m)+"};"
},filterPrefix:function(){var m=[],q=this;
eS(this.state.filters,function(t,a){m.push(t+"=$filter("+q.escape(a)+")")
});
return m.length?"var "+m.join(",")+";":""
},varsPrefix:function(m){return this.state[m].vars.length?"var "+this.state[m].vars.join(",")+";":""
},body:function(m){return this.state[m].body.join("")
},recurse:function(J,H,G,A,z,y){var w,t,v=this,q,m;
A=A||eP;
if(!y&&eO(J.watchId)){H=H||this.nextId(),this.if_("i",this.lazyAssign(H,this.computedMember("i",J.watchId)),this.lazyRecurse(J,H,G,A,z,!0))
}else{switch(J.type){case eR.Program:eS(J.body,function(L,a){v.recurse(L.expression,eQ,eQ,function(M){t=M
});
a!==J.body.length-1?v.current().body.push(t,";"):v.return_(t)
});
break;
case eR.Literal:m=this.escape(J.value);
this.assign(H,m);
A(m);
break;
case eR.UnaryExpression:this.recurse(J.argument,eQ,eQ,function(L){t=L
});
m=J.operator+"("+this.ifDefined(t,0)+")";
this.assign(H,m);
A(m);
break;
case eR.BinaryExpression:this.recurse(J.left,eQ,eQ,function(L){w=L
});
this.recurse(J.right,eQ,eQ,function(L){t=L
});
m="+"===J.operator?this.plus(w,t):"-"===J.operator?this.ifDefined(w,0)+J.operator+this.ifDefined(t,0):"("+w+")"+J.operator+"("+t+")";
this.assign(H,m);
A(m);
break;
case eR.LogicalExpression:H=H||this.nextId();
v.recurse(J.left,H);
v.if_("&&"===J.operator?H:v.not(H),v.lazyRecurse(J.right,H));
A(H);
break;
case eR.ConditionalExpression:H=H||this.nextId();
v.recurse(J.test,H);
v.if_(H,v.lazyRecurse(J.alternate,H),v.lazyRecurse(J.consequent,H));
A(H);
break;
case eR.Identifier:H=H||this.nextId();
G&&(G.context="inputs"===v.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",J.name)+"?l:s"),G.computed=!1,G.name=J.name);
aF(J.name);
v.if_("inputs"===v.stage||v.not(v.getHasOwnProperty("l",J.name)),function(){v.if_("inputs"===v.stage||"s",function(){z&&1!==z&&v.if_(v.not(v.nonComputedMember("s",J.name)),v.lazyAssign(v.nonComputedMember("s",J.name),"{}"));
v.assign(H,v.nonComputedMember("s",J.name))
})
},H&&v.lazyAssign(H,v.nonComputedMember("l",J.name)));
(v.state.expensiveChecks||p(J.name))&&v.addEnsureSafeObject(H);
A(H);
break;
case eR.MemberExpression:w=G&&(G.context=this.nextId())||this.nextId();
H=H||this.nextId();
v.recurse(J.object,w,eQ,function(){v.if_(v.notNull(w),function(){if(J.computed){t=v.nextId(),v.recurse(J.property,t),v.addEnsureSafeMemberName(t),z&&1!==z&&v.if_(v.not(v.computedMember(w,t)),v.lazyAssign(v.computedMember(w,t),"{}")),m=v.ensureSafeObject(v.computedMember(w,t)),v.assign(H,m),G&&(G.computed=!0,G.name=t)
}else{aF(J.property.name);
z&&1!==z&&v.if_(v.not(v.nonComputedMember(w,J.property.name)),v.lazyAssign(v.nonComputedMember(w,J.property.name),"{}"));
m=v.nonComputedMember(w,J.property.name);
if(v.state.expensiveChecks||p(J.property.name)){m=v.ensureSafeObject(m)
}v.assign(H,m);
G&&(G.computed=!1,G.name=J.property.name)
}},function(){v.assign(H,"undefined")
});
A(H)
},!!z);
break;
case eR.CallExpression:H=H||this.nextId();
J.filter?(t=v.filter(J.callee.name),q=[],eS(J.arguments,function(L){var M=v.nextId();
v.recurse(L,M);
q.push(M)
}),m=t+"("+q.join(",")+")",v.assign(H,m),A(H)):(t=v.nextId(),w={},q=[],v.recurse(J.callee,t,w,function(){v.if_(v.notNull(t),function(){v.addEnsureSafeFunction(t);
eS(J.arguments,function(L){v.recurse(L,v.nextId(),eQ,function(M){q.push(v.ensureSafeObject(M))
})
});
w.name?(v.state.expensiveChecks||v.addEnsureSafeObject(w.context),m=v.member(w.context,w.name,w.computed)+"("+q.join(",")+")"):m=t+"("+q.join(",")+")";
m=v.ensureSafeObject(m);
v.assign(H,m)
},function(){v.assign(H,"undefined")
});
A(H)
}));
break;
case eR.AssignmentExpression:t=this.nextId();
w={};
if(!bX(J.left)){throw eG("lval")
}this.recurse(J.left,eQ,w,function(){v.if_(v.notNull(w.context),function(){v.recurse(J.right,t);
v.addEnsureSafeObject(v.member(w.context,w.name,w.computed));
m=v.member(w.context,w.name,w.computed)+J.operator+t;
v.assign(H,m);
A(H||m)
})
},1);
break;
case eR.ArrayExpression:q=[];
eS(J.elements,function(L){v.recurse(L,v.nextId(),eQ,function(M){q.push(M)
})
});
m="["+q.join(",")+"]";
this.assign(H,m);
A(m);
break;
case eR.ObjectExpression:q=[];
eS(J.properties,function(L){v.recurse(L.value,v.nextId(),eQ,function(a){q.push(v.escape(L.key.type===eR.Identifier?L.key.name:""+L.key.value)+":"+a)
})
});
m="{"+q.join(",")+"}";
this.assign(H,m);
A(m);
break;
case eR.ThisExpression:this.assign(H,"s");
A("s");
break;
case eR.NGValueParameter:this.assign(H,"v"),A("v")
}}},getHasOwnProperty:function(m,v){var t=m+"."+v,q=this.current().own;
q.hasOwnProperty(t)||(q[t]=this.nextId(!1,m+"&&("+this.escape(v)+" in "+m+")"));
return q[t]
},assign:function(m,q){if(m){return this.current().body.push(m,"=",q,";"),m
}},filter:function(m){this.state.filters.hasOwnProperty(m)||(this.state.filters[m]=this.nextId(!0));
return this.state.filters[m]
},ifDefined:function(m,q){return"ifDefined("+m+","+this.escape(q)+")"
},plus:function(m,q){return"plus("+m+","+q+")"
},return_:function(m){this.current().body.push("return ",m,";")
},if_:function(m,v,t){if(!0===m){v()
}else{var q=this.current().body;
q.push("if(",m,"){");
v();
q.push("}");
t&&(q.push("else{"),t(),q.push("}"))
}},not:function(m){return"!("+m+")"
},notNull:function(m){return m+"!=null"
},nonComputedMember:function(m,q){return m+"."+q
},computedMember:function(m,q){return m+"["+q+"]"
},member:function(m,t,q){return q?this.computedMember(m,t):this.nonComputedMember(m,t)
},addEnsureSafeObject:function(m){this.current().body.push(this.ensureSafeObject(m),";")
},addEnsureSafeMemberName:function(m){this.current().body.push(this.ensureSafeMemberName(m),";")
},addEnsureSafeFunction:function(m){this.current().body.push(this.ensureSafeFunction(m),";")
},ensureSafeObject:function(m){return"ensureSafeObject("+m+",text)"
},ensureSafeMemberName:function(m){return"ensureSafeMemberName("+m+",text)"
},ensureSafeFunction:function(m){return"ensureSafeFunction("+m+",text)"
},lazyRecurse:function(m,z,y,w,v,t){var q=this;
return function(){q.recurse(m,z,y,w,v,t)
}
},lazyAssign:function(m,t){var q=this;
return function(){q.assign(m,t)
}
},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(m){return"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)
},escape:function(m){if(fp(m)){return"'"+m.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'"
}if(fh(m)){return m.toString()
}if(!0===m){return"true"
}if(!1===m){return"false"
}if(null===m){return"null"
}if("undefined"===typeof m){return"undefined"
}throw eG("esc")
},nextId:function(m,t){var q="v"+this.state.nextId++;
m||this.current().vars.push(q+(t?"="+t:""));
return q
},current:function(){return this.state[this.state.computing]
}};
aX.prototype={compile:function(q,A){var z=this,y=this.astBuilder.ast(q);
this.expression=q;
this.expensiveChecks=A;
fj(y,z.$filter);
var w,v;
if(w=bK(y)){v=this.recurse(w)
}w=cn(y.body);
var t;
w&&(t=[],eS(w,function(G,J){var H=z.recurse(G);
G.input=H;
t.push(H);
G.watchId=J
}));
var m=[];
eS(y.body,function(G){m.push(z.recurse(G.expression))
});
w=0===y.body.length?function(){}:1===y.body.length?m[0]:function(G,J){var H;
eS(m,function(a){H=a(G,J)
});
return H
};
v&&(w.assign=function(G,J,H){return v(G,H,J)
});
t&&(w.inputs=t);
w.literal=bx(y);
w.constant=y.constant;
return w
},recurse:function(m,z,y){var w,v,t=this,q;
if(m.input){return this.inputs(m.input,m.watchId)
}switch(m.type){case eR.Literal:return this.value(m.value,z);
case eR.UnaryExpression:return v=this.recurse(m.argument),this["unary"+m.operator](v,z);
case eR.BinaryExpression:return w=this.recurse(m.left),v=this.recurse(m.right),this["binary"+m.operator](w,v,z);
case eR.LogicalExpression:return w=this.recurse(m.left),v=this.recurse(m.right),this["binary"+m.operator](w,v,z);
case eR.ConditionalExpression:return this["ternary?:"](this.recurse(m.test),this.recurse(m.alternate),this.recurse(m.consequent),z);
case eR.Identifier:return aF(m.name,t.expression),t.identifier(m.name,t.expensiveChecks||p(m.name),z,y,t.expression);
case eR.MemberExpression:return w=this.recurse(m.object,!1,!!y),m.computed||(aF(m.property.name,t.expression),v=m.property.name),m.computed&&(v=this.recurse(m.property)),m.computed?this.computedMember(w,v,z,y,t.expression):this.nonComputedMember(w,v,t.expensiveChecks,z,y,t.expression);
case eR.CallExpression:return q=[],eS(m.arguments,function(A){q.push(t.recurse(A))
}),m.filter&&(v=this.$filter(m.callee.name)),m.filter||(v=this.recurse(m.callee,!0)),m.filter?function(G,M,L,H){for(var A=[],J=0;
J<q.length;
++J){A.push(q[J](G,M,L,H))
}G=v.apply(eQ,A,H);
return z?{context:eQ,name:eQ,value:G}:G
}:function(G,O,M,J){var A=v(G,O,M,J),L;
if(null!=A.value){b0(A.context,t.expression);
cM(A.value,t.expression);
L=[];
for(var H=0;
H<q.length;
++H){L.push(b0(q[H](G,O,M,J),t.expression))
}L=b0(A.value.apply(A.context,L),t.expression)
}return z?{value:L}:L
};
case eR.AssignmentExpression:return w=this.recurse(m.left,!0,1),v=this.recurse(m.right),function(G,L,H,J){var A=w(G,L,H,J);
G=v(G,L,H,J);
b0(A.value,t.expression);
A.context[A.name]=G;
return z?{value:G}:G
};
case eR.ArrayExpression:return q=[],eS(m.elements,function(A){q.push(t.recurse(A))
}),function(G,M,L,J){for(var H=[],A=0;
A<q.length;
++A){H.push(q[A](G,M,L,J))
}return z?{value:H}:H
};
case eR.ObjectExpression:return q=[],eS(m.properties,function(A){q.push({key:A.key.type===eR.Identifier?A.key.name:""+A.key.value,value:t.recurse(A.value)})
}),function(G,M,L,J){for(var H={},A=0;
A<q.length;
++A){H[q[A].key]=q[A].value(G,M,L,J)
}return z?{value:H}:H
};
case eR.ThisExpression:return function(A){return z?{value:A}:A
};
case eR.NGValueParameter:return function(A,J,H,G){return z?{value:H}:H
}
}},"unary+":function(m,q){return function(w,v,t,a){w=m(w,v,t,a);
w=eO(w)?+w:0;
return q?{value:w}:w
}
},"unary-":function(m,q){return function(w,v,t,a){w=m(w,v,t,a);
w=eO(w)?-w:0;
return q?{value:w}:w
}
},"unary!":function(m,q){return function(w,v,t,a){w=!m(w,v,t,a);
return q?{value:w}:w
}
},"binary+":function(m,t,q){return function(z,y,w,v){var a=m(z,y,w,v);
z=t(z,y,w,v);
a=cA(a,z);
return q?{value:a}:a
}
},"binary-":function(m,t,q){return function(z,y,w,v){var a=m(z,y,w,v);
z=t(z,y,w,v);
a=(eO(a)?a:0)-(eO(z)?z:0);
return q?{value:a}:a
}
},"binary*":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)*t(y,w,v,a);
return q?{value:y}:y
}
},"binary/":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)/t(y,w,v,a);
return q?{value:y}:y
}
},"binary%":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)%t(y,w,v,a);
return q?{value:y}:y
}
},"binary===":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)===t(y,w,v,a);
return q?{value:y}:y
}
},"binary!==":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)!==t(y,w,v,a);
return q?{value:y}:y
}
},"binary==":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)==t(y,w,v,a);
return q?{value:y}:y
}
},"binary!=":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)!=t(y,w,v,a);
return q?{value:y}:y
}
},"binary<":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)<t(y,w,v,a);
return q?{value:y}:y
}
},"binary>":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)>t(y,w,v,a);
return q?{value:y}:y
}
},"binary<=":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)<=t(y,w,v,a);
return q?{value:y}:y
}
},"binary>=":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)>=t(y,w,v,a);
return q?{value:y}:y
}
},"binary&&":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)&&t(y,w,v,a);
return q?{value:y}:y
}
},"binary||":function(m,t,q){return function(y,w,v,a){y=m(y,w,v,a)||t(y,w,v,a);
return q?{value:y}:y
}
},"ternary?:":function(m,v,t,q){return function(z,y,w,a){z=m(z,y,w,a)?v(z,y,w,a):t(z,y,w,a);
return q?{value:z}:z
}
},value:function(m,q){return function(){return q?{context:eQ,name:eQ,value:m}:m
}
},identifier:function(m,w,v,t,q){return function(A,z,a,y){A=z&&m in z?z:A;
t&&1!==t&&A&&!A[m]&&(A[m]={});
z=A?A[m]:eQ;
w&&b0(z,q);
return v?{context:A,name:m,value:z}:z
}
},computedMember:function(m,w,v,t,q){return function(H,G,y,z){var J=m(H,G,y,z),a,A;
null!=J&&(a=w(H,G,y,z),aF(a,q),t&&1!==t&&J&&!J[a]&&(J[a]={}),A=J[a],b0(A,q));
return v?{context:J,name:a,value:A}:A
}
},nonComputedMember:function(m,y,w,v,t,q){return function(A,a,z,G){A=m(A,a,z,G);
t&&1!==t&&A&&!A[y]&&(A[y]={});
a=null!=A?A[y]:eQ;
(w||p(y))&&b0(a,q);
return v?{context:A,name:y,value:a}:a
}
},inputs:function(m,q){return function(w,v,t,a){return a?a[q]:m(w,v,t)
}
}};
var dJ=function(m,t,q){this.lexer=m;
this.$filter=t;
this.options=q;
this.ast=new eR(this.lexer);
this.astCompiler=q.csp?new aX(this.ast,t):new bm(this.ast,t)
};
dJ.prototype={constructor:dJ,parse:function(m){return this.astCompiler.compile(m,this.options.expensiveChecks)
}};
dX();
dX();
var bq=Object.prototype.valueOf,ar=fq("$sce"),bN={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},eu=fq("$compile"),e8=fi.createElement("a"),B=aT(fn.location.href);
h.$inject=["$document"];
ex.$inject=["$provide"];
f2.$inject=["$locale"];
ba.$inject=["$locale"];
var ao=".",dF={yyyy:e7("FullYear",4),yy:e7("FullYear",2,0,!0),y:e7("FullYear",1),MMMM:fX("Month"),MMM:fX("Month",!0),MM:e7("Month",2,1),M:e7("Month",1,1),dd:e7("Date",2),d:e7("Date",1),HH:e7("Hours",2),H:e7("Hours",1),hh:e7("Hours",2,-12),h:e7("Hours",1,-12),mm:e7("Minutes",2),m:e7("Minutes",1),ss:e7("Seconds",2),s:e7("Seconds",1),sss:e7("Milliseconds",3),EEEE:fX("Day"),EEE:fX("Day",!0),a:function(m,q){return 12>m.getHours()?q.AMPMS[0]:q.AMPMS[1]
},Z:function(m,t,q){m=-1*q;
return m=(0<=m?"+":"")+(c(Math[0<m?"floor":"ceil"](m/60),2)+c(Math.abs(m%60),2))
},ww:n(2),w:n(1),G:dk,GG:dk,GGG:dk,GGGG:function(m,q){return 0>=m.getFullYear()?q.ERANAMES[0]:q.ERANAMES[1]
}},dR=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,d4=/^\-?\d+$/;
fJ.$inject=["$locale"];
var eT=bp(fo),eA=bp(bo);
aQ.$inject=["$parse"];
var du=bp({restrict:"E",compile:function(m,q){if(!q.href&&!q.xlinkHref){return function(t,w){if("a"===w[0].nodeName.toLowerCase()){var v="[object SVGAnimatedString]"===a0.call(w.prop("href"))?"xlink:href":"href";
w.on("click",function(y){w.attr(v)||y.preventDefault()
})
}}
}}}),aZ={};
eS(bi,function(m,w){function v(y,A,z){y.$watch(z[t],function(G){z.$set(w,!!G)
})
}if("multiple"!=m){var t=E("ng-"+w),q=v;
"checked"===m&&(q=function(y,A,z){z.ngModel!==z[t]&&v(y,A,z)
});
aZ[t]=function(){return{restrict:"A",priority:100,link:q}
}
}});
eS(cu,function(m,q){aZ[q]=function(){return{priority:100,link:function(t,w,v){if("ngPattern"===q&&"/"==v.ngPattern.charAt(0)&&(w=v.ngPattern.match(c9))){v.$set("ngPattern",new RegExp(w[1],w[2]));
return
}t.$watch(v[q],function(y){v.$set(q,y)
})
}}
}
});
eS(["src","srcset","href"],function(m){var q=E("ng-"+m);
aZ[q]=function(){return{priority:99,link:function(y,w,v){var t=m,a=m;
"href"===m&&"[object SVGAnimatedString]"===a0.call(w.prop("href"))&&(a="xlinkHref",v.$attr[a]="xlink:href",t=null);
v.$observe(q,function(z){z?(v.$set(a,z),cw&&t&&w.prop(t,v[a])):"href"===m&&v.$set(a,null)
})
}}
}
});
var fE={$addControl:eP,$$renameControl:function(m,q){m.$name=q
},$removeControl:eP,$setValidity:eP,$setDirty:eP,$setPristine:eP,$setSubmitted:eP};
f8.$inject=["$element","$attrs","$scope","$animate","$interpolate"];
var dN=function(m){return["$timeout",function(a){return{name:"form",restrict:m?"EAC":"E",controller:f8,compile:function(v,t){v.addClass(b6).addClass(cC);
var q=t.name?"name":m&&t.ngForm?"ngForm":!1;
return{pre:function(y,G,A,z){if(!("action" in A)){var H=function(J){y.$apply(function(){z.$commitViewValue();
z.$setSubmitted()
});
J.preventDefault()
};
G[0].addEventListener("submit",H,!1);
G.on("$destroy",function(){a(function(){G[0].removeEventListener("submit",H,!1)
},0,!1)
})
}var w=z.$$parentForm;
q&&(S(y,z.$name,z,z.$name),A.$observe(q,function(J){z.$name!==J&&(S(y,z.$name,eQ,z.$name),w.$$renameControl(z,J),S(y,z.$name,z,z.$name))
}));
G.on("$destroy",function(){w.$removeControl(z);
q&&S(y,A[q],eQ,z.$name);
fm(z,fE)
})
}}
}}
}]
},di=dN(),x=dN(!0),dt=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,bj=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,aU=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,aG=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,dB=/^(\d{4})-(\d{2})-(\d{2})$/,dp=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,cB=/^(\d{4})-W(\d\d)$/,c5=/^(\d{4})-(\d\d)$/,cS=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,cG={text:function(m,y,w,v,t,q){c1(m,y,w,v,t,q);
c0(v)
},date:cO("date",dB,eL(dB,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":cO("datetimelocal",dp,eL(dp,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:cO("time",cS,eL(cS,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:cO("week",cB,function(G,A){if(fS(G)){return G
}if(fp(G)){cB.lastIndex=0;
var z=cB.exec(G);
if(z){var y=+z[1],w=+z[2],v=z=0,t=0,m=0,q=K(y),w=7*(w-1);
A&&(z=A.getHours(),v=A.getMinutes(),t=A.getSeconds(),m=A.getMilliseconds());
return new Date(y,0,q.getDate()+w,z,v,t,m)
}}return NaN
},"yyyy-Www"),month:cO("month",c5,eL(c5,["yyyy","MM"]),"yyyy-MM"),number:function(q,A,z,y,w,v){fC(q,A,z,y);
c1(q,A,z,y,w,v);
y.$$parserName="number";
y.$parsers.push(function(G){return y.$isEmpty(G)?null:aG.test(G)?parseFloat(G):eQ
});
y.$formatters.push(function(G){if(!y.$isEmpty(G)){if(!fh(G)){throw ey("numfmt",G)
}G=G.toString()
}return G
});
if(eO(z.min)||z.ngMin){var t;
y.$validators.min=function(G){return y.$isEmpty(G)||fz(t)||G>=t
};
z.$observe("min",function(G){eO(G)&&!fh(G)&&(G=parseFloat(G,10));
t=fh(G)&&!isNaN(G)?G:eQ;
y.$validate()
})
}if(eO(z.max)||z.ngMax){var m;
y.$validators.max=function(G){return y.$isEmpty(G)||fz(m)||G<=m
};
z.$observe("max",function(G){eO(G)&&!fh(G)&&(G=parseFloat(G,10));
m=fh(G)&&!isNaN(G)?G:eQ;
y.$validate()
})
}},url:function(m,y,w,v,t,q){c1(m,y,w,v,t,q);
c0(v);
v.$$parserName="url";
v.$validators.url=function(z,G){var A=z||G;
return v.$isEmpty(A)||bj.test(A)
}
},email:function(m,y,w,v,t,q){c1(m,y,w,v,t,q);
c0(v);
v.$$parserName="email";
v.$validators.email=function(z,G){var A=z||G;
return v.$isEmpty(A)||aU.test(A)
}
},radio:function(m,v,t,q){fz(t.name)&&v.attr("name",++cp);
v.on("click",function(w){v[0].checked&&q.$setViewValue(t.value,w&&w.type)
});
q.$render=function(){v[0].checked=t.value==q.$viewValue
};
t.$observe("value",q.$render)
},checkbox:function(H,G,A,z,y,w,v,q){var t=e3(q,H,"ngTrueValue",A.ngTrueValue,!0),m=e3(q,H,"ngFalseValue",A.ngFalseValue,!1);
G.on("click",function(J){z.$setViewValue(G[0].checked,J&&J.type)
});
z.$render=function(){G[0].checked=z.$viewValue
};
z.$isEmpty=function(J){return !1===J
};
z.$formatters.push(function(J){return c2(J,t)
});
z.$parsers.push(function(J){return J?t:m
})
},hidden:eP,button:eP,submit:eP,reset:eP,file:eP},o=["$browser","$sniffer","$filter","$parse",function(m,v,t,q){return{restrict:"E",require:["?ngModel"],link:{pre:function(z,y,w,a){a[0]&&(cG[fo(w.type)]||cG.text)(z,y,w,a[0],v,m,t,q)
}}}
}],at=/^(true|false|\d+)$/,dM=function(){return{restrict:"A",priority:100,compile:function(m,q){return at.test(q.ngValue)?function(t,w,v){v.$set("value",t.$eval(v.ngValue))
}:function(t,w,v){t.$watch(v.ngValue,function(y){v.$set("value",y)
})
}
}}
},bW=["$compile",function(m){return{restrict:"AC",compile:function(a){m.$$addBindingClass(a);
return function(v,t,q){m.$$addBindingInfo(t,q.ngBind);
t=t[0];
v.$watch(q.ngBind,function(w){t.textContent=w===eQ?"":w
})
}
}}
}],bw=["$interpolate","$compile",function(m,q){return{compile:function(a){q.$$addBindingClass(a);
return function(w,v,t){w=m(v.attr(t.$attr.ngBindTemplate));
q.$$addBindingInfo(v,w.expressions);
v=v[0];
t.$observe("ngBindTemplate",function(y){v.textContent=y===eQ?"":y
})
}
}}
}],bJ=["$sce","$parse","$compile",function(m,t,q){return{restrict:"A",compile:function(y,w){var v=t(w.ngBindHtml),a=t(w.ngBindHtml,function(z){return(z||"").toString()
});
q.$$addBindingClass(y);
return function(G,A,z){q.$$addBindingInfo(A,z.ngBindHtml);
G.$watch(a,function(){A.html(m.getTrustedHtml(v(G))||"")
})
}
}}
}],dZ=bp({restrict:"A",require:"ngModel",link:function(m,v,t,q){q.$viewChangeListeners.push(function(){m.$eval(t.ngChange)
})
}}),bl=cN("",!0),aI=cN("Odd",0),aW=cN("Even",1),av=en({compile:function(m,q){q.$set("ngCloak",eQ);
m.removeClass("ng-cloak")
}}),ai=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}
}],eJ={},ad={blur:!0,focus:!0};
eS("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(m){var q=E("ng-"+m);
eJ[q]=["$parse","$rootScope",function(t,a){return{restrict:"A",compile:function(y,w){var v=t(w[q],null,!0);
return function(A,z){z.on(m,function(H){var G=function(){v(A,{$event:H})
};
ad[m]&&a.$$phase?A.$evalAsync(G):A.$apply(G)
})
}
}}
}]
});
var f1=["$animate",function(m){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(A,z,y,w,v){var t,a,q;
A.$watch(y.ngIf,function(G){G?a||v(function(J,H){a=H;
J[J.length++]=fi.createComment(" end ngIf: "+y.ngIf+" ");
t={clone:J};
m.enter(J,z.parent(),z)
}):(q&&(q.remove(),q=null),a&&(a.$destroy(),a=null),t&&(q=bz(t.clone),m.leave(q).then(function(){q=null
}),t=null))
})
}}
}],fI=["$templateRequest","$anchorScroll","$animate",function(m,t,q){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:eZ.noop,compile:function(z,y){var w=y.ngInclude||y.src,v=y.onload||"",a=y.autoscroll;
return function(L,J,H,R,A){var Q=0,P,O,G,M=function(){O&&(O.remove(),O=null);
P&&(P.$destroy(),P=null);
G&&(q.leave(G).then(function(){O=null
}),O=G,G=null)
};
L.$watch(w,function(V){var T=function(){!eO(a)||a&&!L.$eval(a)||t()
},U=++Q;
V?(m(V,!0).then(function(W){if(U===Q){var X=L.$new();
R.template=W;
W=A(X,function(Y){M();
q.enter(Y,null,J).then(T)
});
P=X;
G=W;
P.$emit("$includeContentLoaded",V);
L.$eval(v)
}},function(){U===Q&&(M(),L.$emit("$includeContentError",V))
}),L.$emit("$includeContentRequested",V)):(M(),R.template=null)
})
}
}}
}],dn=["$compile",function(m){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(v,t,q,a){/SVG/.test(t[0].toString())?(t.empty(),m(d1(a.template,fi).childNodes)(v,function(w){t.append(w)
},{futureParentElement:t})):(t.html(a.template),m(t.contents())(v))
}}
}],a9=en({priority:450,compile:function(){return{pre:function(m,t,q){m.$eval(q.ngInit)
}}
}}),ej=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(m,z,y,w){var v=z.attr(y.$attr.ngList)||", ",t="false"!==y.ngTrim,q=t?fk(v):v;
w.$parsers.push(function(A){if(!fz(A)){var G=[];
A&&eS(A.split(q),function(H){H&&G.push(t?fk(H):H)
});
return G
}});
w.$formatters.push(function(A){return fu(A)?A.join(v):eQ
});
w.$isEmpty=function(A){return !A||!A.length
}
}}
},cC="ng-valid",eI="ng-invalid",b6="ng-pristine",e5="ng-dirty",ek="ng-pending",ey=new fq("ngModel"),s=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(W,V,U,T,R,Q,P,M,O,L){this.$modelValue=this.$viewValue=Number.NaN;
this.$$rawModelValue=eQ;
this.$validators={};
this.$asyncValidators={};
this.$parsers=[];
this.$formatters=[];
this.$viewChangeListeners=[];
this.$untouched=!0;
this.$touched=!1;
this.$pristine=!0;
this.$dirty=!1;
this.$valid=!0;
this.$invalid=!1;
this.$error={};
this.$$success={};
this.$pending=eQ;
this.$name=L(U.name||"",!1)(W);
var G=R(U.ngModel),z=G.assign,H=G,A=z,v=null,w,J=this;
this.$$setOptions=function(q){if((J.$options=q)&&q.getterSetter){var X=R(U.ngModel+"()"),y=R(U.ngModel+"($$$p)");
H=function(Y){var aa=G(Y);
eK(aa)&&(aa=X(Y));
return aa
};
A=function(Y,aa){eK(G(Y))?y(Y,{$$$p:J.$modelValue}):z(Y,J.$modelValue)
}
}else{if(!G.assign){throw ey("nonassign",U.ngModel,az(T))
}}};
this.$render=eP;
this.$isEmpty=function(q){return fz(q)||""===q||null===q||q!==q
};
var m=T.inheritedData("$formController")||fE,t=0;
fV({ctrl:this,$element:T,set:function(q,y){q[y]=!0
},unset:function(q,y){delete q[y]
},parentForm:m,$animate:Q});
this.$setPristine=function(){J.$dirty=!1;
J.$pristine=!0;
Q.removeClass(T,e5);
Q.addClass(T,b6)
};
this.$setDirty=function(){J.$dirty=!0;
J.$pristine=!1;
Q.removeClass(T,b6);
Q.addClass(T,e5);
m.$setDirty()
};
this.$setUntouched=function(){J.$touched=!1;
J.$untouched=!0;
Q.setClass(T,"ng-untouched","ng-touched")
};
this.$setTouched=function(){J.$touched=!0;
J.$untouched=!1;
Q.setClass(T,"ng-touched","ng-untouched")
};
this.$rollbackViewValue=function(){P.cancel(v);
J.$viewValue=J.$$lastCommittedViewValue;
J.$render()
};
this.$validate=function(){if(!fh(J.$modelValue)||!isNaN(J.$modelValue)){var q=J.$$rawModelValue,Y=J.$valid,X=J.$modelValue,y=J.$options&&J.$options.allowInvalid;
J.$$runValidators(q,J.$$lastCommittedViewValue,function(a){y||Y===a||(J.$modelValue=a?q:eQ,J.$modelValue!==X&&J.$$writeModelToScope())
})
}};
this.$$runValidators=function(y,ae,ac){function ab(){var a=!0;
eS(J.$validators,function(bb,ag){var af=bb(y,ae);
a=a&&af;
Y(ag,af)
});
return a?!0:(eS(J.$asyncValidators,function(af,ag){Y(ag,null)
}),!1)
}function aa(){var af=[],a=!0;
eS(J.$asyncValidators,function(bc,bb){var ag=bc(y,ae);
if(!ag||!eK(ag.then)){throw ey("$asyncValidators",ag)
}Y(bb,eQ);
af.push(ag.then(function(){Y(bb,!0)
},function(bd){a=!1;
Y(bb,!1)
}))
});
af.length?O.all(af).then(function(){X(a)
},eP):X(!0)
}function Y(af,ag){q===t&&J.$setValidity(af,ag)
}function X(af){q===t&&ac(af)
}t++;
var q=t;
(function(){var af=J.$$parserName||"parse";
if(w===eQ){Y(af,null)
}else{return w||(eS(J.$validators,function(ag,bb){Y(bb,null)
}),eS(J.$asyncValidators,function(ag,bb){Y(bb,null)
})),Y(af,w),w
}return !0
})()?ab()?aa():X(!1):X(!1)
};
this.$commitViewValue=function(){var q=J.$viewValue;
P.cancel(v);
if(J.$$lastCommittedViewValue!==q||""===q&&J.$$hasNativeValidators){J.$$lastCommittedViewValue=q,J.$pristine&&this.$setDirty(),this.$$parseAndValidate()
}};
this.$$parseAndValidate=function(){var X=J.$$lastCommittedViewValue;
if(w=fz(X)?eQ:!0){for(var y=0;
y<J.$parsers.length;
y++){if(X=J.$parsers[y](X),fz(X)){w=!1;
break
}}}fh(J.$modelValue)&&isNaN(J.$modelValue)&&(J.$modelValue=H(W));
var q=J.$modelValue,a=J.$options&&J.$options.allowInvalid;
J.$$rawModelValue=X;
a&&(J.$modelValue=X,J.$modelValue!==q&&J.$$writeModelToScope());
J.$$runValidators(X,J.$$lastCommittedViewValue,function(Y){a||(J.$modelValue=Y?X:eQ,J.$modelValue!==q&&J.$$writeModelToScope())
})
};
this.$$writeModelToScope=function(){A(W,J.$modelValue);
eS(J.$viewChangeListeners,function(q){try{q()
}catch(y){V(y)
}})
};
this.$setViewValue=function(q,y){J.$viewValue=q;
J.$options&&!J.$options.updateOnDefault||J.$$debounceViewValueCommit(y)
};
this.$$debounceViewValueCommit=function(y){var q=0,a=J.$options;
a&&eO(a.debounce)&&(a=a.debounce,fh(a)?q=a:fh(a[y])?q=a[y]:fh(a["default"])&&(q=a["default"]));
P.cancel(v);
q?v=P(function(){J.$commitViewValue()
},q):M.$$phase?J.$commitViewValue():W.$apply(function(){J.$commitViewValue()
})
};
W.$watch(function(){var X=H(W);
if(X!==J.$modelValue&&(J.$modelValue===J.$modelValue||X===X)){J.$modelValue=J.$$rawModelValue=X;
w=eQ;
for(var y=J.$formatters,q=y.length,a=X;
q--;
){a=y[q](a)
}J.$viewValue!==a&&(J.$viewValue=J.$$lastCommittedViewValue=a,J.$render(),J.$$runValidators(X,a,eP))
}return X
})
}],ev=["$rootScope",function(m){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:s,priority:1,compile:function(a){a.addClass(b6).addClass("ng-untouched").addClass(cC);
return{pre:function(t,z,y,w){var v=w[0],q=w[1]||fE;
v.$$setOptions(w[2]&&w[2].$options);
q.$addControl(v);
y.$observe("name",function(A){v.$name!==A&&q.$$renameControl(v,A)
});
t.$on("$destroy",function(){q.$removeControl(v)
})
},post:function(y,w,v,t){var q=t[0];
if(q.$options&&q.$options.updateOn){w.on(q.$options.updateOn,function(z){q.$$debounceViewValueCommit(z&&z.type)
})
}w.on("blur",function(z){q.$touched||(m.$$phase?y.$evalAsync(q.$setTouched):y.$apply(q.$setTouched))
})
}}
}}
}],e=/(\s+|^)default(\s+|$)/,dA=function(){return{restrict:"A",controller:["$scope","$attrs",function(m,t){var q=this;
this.$options=eh(m.$eval(t.ngModelOptions));
this.$options.updateOn!==eQ?(this.$options.updateOnDefault=!1,this.$options.updateOn=fk(this.$options.updateOn.replace(e,function(){q.$options.updateOnDefault=!0;
return" "
}))):this.$options.updateOnDefault=!0
}]}
},aP=en({terminal:!0,priority:1000}),fZ=fq("ngOptions"),fG=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e2=["$compile","$parse",function(m,w){function v(ae,ac,ab){function aa(y,ag,af,A,z){this.selectValue=y;
this.viewValue=ag;
this.label=af;
this.group=A;
this.disabled=z
}function X(y){var A;
if(!U&&Z(y)){A=y
}else{A=[];
for(var z in y){y.hasOwnProperty(z)&&"$"!==z.charAt(0)&&A.push(z)
}}return A
}var Y=ae.match(fG);
if(!Y){throw fZ("iexp",ae,az(ac))
}var R=Y[5]||Y[7],U=Y[6];
ae=/ as /.test(Y[0])&&Y[1];
var P=Y[9];
ac=w(Y[2]?Y[1]:R);
var M=ae&&w(ae)||ac,O=P&&w(P),W=P?function(y,z){return O(ab,z)
}:function(y){return d(y)
},L=function(y,z){return W(y,H(y,z))
},J=w(Y[2]||Y[1]),V=w(Y[3]||""),T=w(Y[4]||""),G=w(Y[8]),Q={},H=U?function(y,z){Q[U]=z;
Q[R]=y;
return Q
}:function(y){Q[R]=y;
return Q
};
return{trackBy:P,getTrackByValue:L,getWatchables:w(G,function(y){var bc=[];
y=y||[];
for(var bb=X(y),ag=bb.length,af=0;
af<ag;
af++){var A=y===bb?af:bb[af],z=H(y[A],A),A=W(y[A],z);
bc.push(A);
if(Y[2]||Y[1]){A=J(ab,z),bc.push(A)
}Y[4]&&(z=T(ab,z),bc.push(z))
}return bc
}),getOptions:function(){for(var be=[],bc={},bb=G(ab)||[],ag=X(bb),af=ag.length,A=0;
A<af;
A++){var y=bb===ag?A:ag[A],bg=H(bb[y],y),z=M(ab,bg),y=W(z,bg),bf=J(ab,bg),bd=V(ab,bg),bg=T(ab,bg),z=new aa(y,z,bf,bd,bg);
be.push(z);
bc[y]=z
}return{items:be,selectValueMap:bc,getOptionFromViewValue:function(ca){return bc[L(ca)]
},getViewValueFromOption:function(ca){return P?eZ.copy(ca.viewValue):ca.viewValue
}}
}}
}var t=fi.createElement("option"),q=fi.createElement("optgroup");
return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(ab,aa,X,Y){function W(z,A){z.element=A;
A.disabled=z.disabled;
z.value!==A.value&&(A.value=z.selectValue);
z.label!==A.label&&(A.label=z.label,A.textContent=z.label)
}function Q(z,ae,ac,A){ae&&fo(ae.nodeName)===ac?ac=ae:(ac=A.cloneNode(!1),ae?z.insertBefore(ac,ae):z.appendChild(ac));
return ac
}function P(z){for(var A;
z;
){A=z.nextSibling,bF(z),z=A
}}function T(z){var ac=V&&V[0],A=a&&a[0];
if(ac||A){for(;
z&&(z===ac||z===A);
){z=z.nextSibling
}}return z
}function M(){var z=O&&L.readValue();
O=y.getOptions();
var ae={},ac=aa[0].firstChild;
R&&aa.prepend(V);
ac=T(ac);
O.items.forEach(function(af){var bb,ag;
af.group?(bb=ae[af.group],bb||(bb=Q(aa[0],ac,"optgroup",q),ac=bb.nextSibling,bb.label=af.group,bb=ae[af.group]={groupElement:bb,currentOptionElement:bb.firstChild}),ag=Q(bb.groupElement,bb.currentOptionElement,"option",t),W(af,ag),bb.currentOptionElement=ag.nextSibling):(ag=Q(aa[0],ac,"option",t),W(af,ag),ac=ag.nextSibling)
});
Object.keys(ae).forEach(function(af){P(ae[af].currentOptionElement)
});
P(ac);
J.$render();
if(!J.$isEmpty(z)){var A=L.readValue();
(y.trackBy?c2(z,A):z===A)||(J.$setViewValue(A),J.$render())
}}var J=Y[1];
if(J){var L=Y[0];
Y=X.multiple;
for(var V,H=0,U=aa.children(),G=U.length;
H<G;
H++){if(""===U[H].value){V=U.eq(H);
break
}}var R=!!V,a=eM(t.cloneNode(!1));
a.val("?");
var O,y=v(X.ngOptions,aa,ab);
Y?(J.$isEmpty=function(z){return !z||0===z.length
},L.writeValue=function(z){O.items.forEach(function(A){A.element.selected=!1
});
z&&z.forEach(function(A){(A=O.getOptionFromViewValue(A))&&!A.disabled&&(A.element.selected=!0)
})
},L.readValue=function(){var z=aa.val()||[],A=[];
eS(z,function(ac){ac=O.selectValueMap[ac];
ac.disabled||A.push(O.getViewValueFromOption(ac))
});
return A
},y.trackBy&&ab.$watchCollection(function(){if(fu(J.$viewValue)){return J.$viewValue.map(function(z){return y.getTrackByValue(z)
})
}},function(){J.$render()
})):(L.writeValue=function(z){var A=O.getOptionFromViewValue(z);
A&&!A.disabled?aa[0].value!==A.selectValue&&(a.remove(),R||V.remove(),aa[0].value=A.selectValue,A.element.selected=!0,A.element.setAttribute("selected","selected")):null===z||R?(a.remove(),R||aa.prepend(V),aa.val(""),V.prop("selected",!0),V.attr("selected",!0)):(R||V.remove(),aa.prepend(a),aa.val("?"),a.prop("selected",!0),a.attr("selected",!0))
},L.readValue=function(){var z=O.selectValueMap[aa.val()];
return z&&!z.disabled?(R||V.remove(),a.remove(),O.getViewValueFromOption(z)):null
},y.trackBy&&ab.$watch(function(){return y.getTrackByValue(J.$viewValue)
},function(){J.$render()
}));
R?(V.remove(),m(V)(ab),V.removeClass("ng-scope")):V=eM(t.cloneNode(!1));
M();
ab.$watchCollection(y.getWatchables,M)
}}}
}],aB=["$locale","$interpolate","$log",function(m,w,v){var t=/{}/g,q=/^when(Minus)?(.+)$/;
return{link:function(O,M,J){function L(y){M.text(y||"")
}var H=J.count,a=J.$attr.when&&M.attr(J.$attr.when),V=J.offset||0,A=O.$eval(a)||{},U={},R=w.startSymbol(),T=w.endSymbol(),G=R+H+"-"+V+T,Q=eZ.noop,P;
eS(J,function(y,W){var z=q.exec(W);
z&&(z=(z[1]?"-":"")+fo(z[2]),A[z]=M.attr(J.$attr[W]))
});
eS(A,function(y,z){U[z]=w(y.replace(t,G))
});
O.$watch(H,function(W){var z=parseFloat(W),y=isNaN(z);
y||z in A||(z=m.pluralCat(z-V));
z===P||y&&fh(P)&&isNaN(P)||(Q(),y=U[z],fz(y)?(null!=W&&v.debug("ngPluralize: no rule defined for '"+z+"' in "+a),Q=eP,L()):Q=O.$watch(y,L),P=z)
})
}}
}],an=["$parse","$animate",function(m,v){var t=fq("ngRepeat"),q=function(y,J,H,G,z,w,A){y[H]=G;
z&&(y[z]=w);
y.$index=J;
y.$first=0===J;
y.$last=J===A-1;
y.$middle=!(y.$first||y.$last);
y.$odd=!(y.$even=0===(J&1))
};
return{restrict:"A",multiElement:!0,transclude:"element",priority:1000,terminal:!0,$$tlb:!0,compile:function(Q,P){var O=P.ngRepeat,L=fi.createComment(" end ngRepeat: "+O+" "),M=O.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!M){throw t("iexp",O)
}var J=M[1],a=M[2],X=M[3],y=M[4],M=J.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
if(!M){throw t("iidexp",J)
}var V=M[3]||M[1],U=M[2];
if(X&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(X)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(X))){throw t("badident",X)
}var W,G,R,H,T={$id:d};
y?W=m(y):(R=function(w,z){return d(z)
},H=function(w){return w
});
return function(w,aa,A,z,ab){W&&(G=function(af,ae,ac){U&&(T[U]=af);
T[V]=ae;
T.$index=ac;
return W(w,T)
});
var Y=dX();
w.$watchCollection(a,function(ag){var af,ae,cc=aa[0],bf,ac=dX(),bg,ca,bd,cb,bc,be,bb;
X&&(w[X]=ag);
if(Z(ag)){bc=ag,ae=G||R
}else{for(bb in ae=G||H,bc=[],ag){ag.hasOwnProperty(bb)&&"$"!==bb.charAt(0)&&bc.push(bb)
}}bg=bc.length;
bb=Array(bg);
for(af=0;
af<bg;
af++){if(ca=ag===bc?af:bc[af],bd=ag[ca],cb=ae(ca,bd,af),Y[cb]){be=Y[cb],delete Y[cb],ac[cb]=be,bb[af]=be
}else{if(ac[cb]){throw eS(bb,function(cd){cd&&cd.scope&&(Y[cd.id]=cd)
}),t("dupes",O,cb,bd)
}bb[af]={id:cb,scope:eQ,clone:eQ};
ac[cb]=!0
}}for(bf in Y){be=Y[bf];
cb=bz(be.clone);
v.leave(cb);
if(cb[0].parentNode){for(af=0,ae=cb.length;
af<ae;
af++){cb[af].$$NG_REMOVED=!0
}}be.scope.$destroy()
}for(af=0;
af<bg;
af++){if(ca=ag===bc?af:bc[af],bd=ag[ca],be=bb[af],be.scope){bf=cc;
do{bf=bf.nextSibling
}while(bf&&bf.$$NG_REMOVED);
be.clone[0]!=bf&&v.move(bz(be.clone),null,eM(cc));
cc=be.clone[be.clone.length-1];
q(be.scope,af,V,bd,U,ca,bg)
}else{ab(function(cd,cf){be.scope=cf;
var ce=L.cloneNode(!1);
cd[cd.length++]=ce;
v.enter(cd,null,eM(cc));
cc=ce;
be.clone=cd;
ac[be.id]=be;
q(be.scope,af,V,bd,U,ca,bg)
})
}}Y=ac
})
}
}}
}],I=["$animate",function(m){return{restrict:"A",multiElement:!0,link:function(t,q,a){t.$watch(a.ngShow,function(v){m[v?"removeClass":"addClass"](q,"ng-hide",{tempClasses:"ng-hide-animate"})
})
}}
}],g=["$animate",function(m){return{restrict:"A",multiElement:!0,link:function(t,q,a){t.$watch(a.ngHide,function(v){m[v?"addClass":"removeClass"](q,"ng-hide",{tempClasses:"ng-hide-animate"})
})
}}
}],l=en(function(m,t,q){m.$watch(q.ngStyle,function(v,w){w&&v!==w&&eS(w,function(y,z){t.css(z,"")
});
v&&t.css(v)
},!0)
}),f7=["$animate",function(m){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}
}],link:function(G,A,z,y){var w=[],v=[],q=[],t=[],a=function(H,J){return function(){H.splice(J,1)
}
};
G.$watch(z.ngSwitch||z.on,function(M){var L,J;
L=0;
for(J=q.length;
L<J;
++L){m.cancel(q[L])
}L=q.length=0;
for(J=t.length;
L<J;
++L){var H=bz(v[L].clone);
t[L].$destroy();
(q[L]=m.leave(H)).then(a(q,L))
}v.length=0;
t.length=0;
(w=y.cases["!"+M]||y.cases["?"])&&eS(w,function(O){O.transclude(function(R,Q){t.push(Q);
var P=O.element;
R[R.length++]=fi.createComment(" end ngSwitchWhen: ");
v.push({clone:R});
m.enter(R,P.parent(),P)
})
})
})
}}
}],fU=en({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(m,w,v,t,q){t.cases["!"+v.ngSwitchWhen]=t.cases["!"+v.ngSwitchWhen]||[];
t.cases["!"+v.ngSwitchWhen].push({transclude:q,element:w})
}}),fB=en({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(m,w,v,t,q){t.cases["?"]=t.cases["?"]||[];
t.cases["?"].push({transclude:q,element:w})
}}),eH=en({restrict:"EAC",link:function(m,w,v,t,q){if(!q){throw fq("ngTransclude")("orphan",az(w))
}q(function(y){w.empty();
w.append(y)
})
}}),cY=["$templateCache",function(m){return{restrict:"E",terminal:!0,compile:function(q,a){"text/ng-template"==a.type&&m.put(a.id,q[0].text)
}}
}],a7={$setViewValue:eP,$render:eP},aN=["$element","$scope","$attrs",function(m,w,v){var t=this,q=new cV;
t.ngModelCtrl=a7;
t.unknownOption=eM(fi.createElement("option"));
t.renderUnknownOption=function(a){a="? "+d(a)+" ?";
t.unknownOption.val(a);
m.prepend(t.unknownOption);
m.val(a)
};
w.$on("$destroy",function(){t.renderUnknownOption=eP
});
t.removeUnknownOption=function(){t.unknownOption.parent()&&t.unknownOption.remove()
};
t.readValue=function(){t.removeUnknownOption();
return m.val()
};
t.writeValue=function(a){t.hasOption(a)?(t.removeUnknownOption(),m.val(a),""===a&&t.emptyOption.prop("selected",!0)):null==a&&t.emptyOption?(t.removeUnknownOption(),m.val("")):t.renderUnknownOption(a)
};
t.addOption=function(y,A){c8(y,'"option value"');
""===y&&(t.emptyOption=A);
var z=q.get(y)||0;
q.put(y,z+1)
};
t.removeOption=function(y){var z=q.get(y);
z&&(1===z?(q.remove(y),""===y&&(t.emptyOption=eQ)):q.put(y,z-1))
};
t.hasOption=function(y){return !!q.get(y)
}
}],cL=function(){return{restrict:"E",require:["select","?ngModel"],controller:aN,link:function(q,A,z,y){var w=y[1];
if(w){var v=y[0];
v.ngModelCtrl=w;
w.$render=function(){v.writeValue(w.$viewValue)
};
A.on("change",function(){q.$apply(function(){w.$setViewValue(v.readValue())
})
});
if(z.multiple){v.readValue=function(){var G=[];
eS(A.find("option"),function(a){a.selected&&G.push(a.value)
});
return G
};
v.writeValue=function(G){var H=new cV(G);
eS(A.find("option"),function(J){J.selected=eO(H.get(J.value))
})
};
var t,m=NaN;
q.$watch(function(){m!==w.$viewValue||c2(t,w.$viewValue)||(t=dy(w.$viewValue),w.$render());
m=w.$viewValue
});
w.$isEmpty=function(G){return !G||0===G.length
}
}}}}
},cm=["$interpolate",function(m){function q(t){t[0].hasAttribute("selected")&&(t[0].selected=!0)
}return{restrict:"E",priority:100,compile:function(v,t){if(fz(t.value)){var a=m(v.text(),!0);
a||t.$set("value",v.text())
}return function(y,G,A){var z=G.parent(),w=z.data("$selectController")||z.parent().data("$selectController");
w&&w.ngModelCtrl&&(a?y.$watch(a,function(H,J){A.$set("value",H);
J!==H&&w.removeOption(J);
w.addOption(H,G);
w.ngModelCtrl.$render();
q(G)
}):(w.addOption(A.value,G),w.ngModelCtrl.$render(),q(G)),G.on("$destroy",function(){w.removeOption(A.value);
w.ngModelCtrl.$render()
}))
}
}}
}],cz=bp({restrict:"E",terminal:!1}),fW=function(){return{restrict:"A",require:"?ngModel",link:function(m,v,t,q){q&&(t.required=!0,q.$validators.required=function(w,y){return !t.required||!q.$isEmpty(y)
},t.$observe("required",function(){q.$validate()
}))
}}
},b=function(){return{restrict:"A",require:"?ngModel",link:function(m,y,w,v){if(v){var t,q=w.ngPattern||w.pattern;
w.$observe("pattern",function(z){fp(z)&&0<z.length&&(z=new RegExp("^"+z+"$"));
if(z&&!z.test){throw fq("ngPattern")("noregexp",q,z,az(y))
}t=z||eQ;
v.$validate()
});
v.$validators.pattern=function(z){return v.$isEmpty(z)||fz(t)||t.test(z)
}
}}}
},e4=function(){return{restrict:"A",require:"?ngModel",link:function(m,w,v,t){if(t){var q=-1;
v.$observe("maxlength",function(y){y=e9(y);
q=isNaN(y)?-1:y;
t.$validate()
});
t.$validators.maxlength=function(y,z){return 0>q||t.$isEmpty(z)||z.length<=q
}
}}}
},fD=function(){return{restrict:"A",require:"?ngModel",link:function(m,w,v,t){if(t){var q=0;
v.$observe("minlength",function(y){q=e9(y)||0;
t.$validate()
});
t.$validators.minlength=function(y,z){return t.$isEmpty(z)||z.length>=q
}
}}}
};
fn.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(eV(),eq(eZ),eM(fi).ready(function(){a3(fi,bh)
}))
})(window,document);
!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
(function(v,aa,f){function ab(u,t,z){if(!u){throw ngMinErr("areq",t||"?",z||"required")
}return u
}function E(u,t){if(!u&&!t){return""
}if(!u){return t
}if(!t){return u
}d(u)&&(u=u.join(" "));
d(t)&&(t=t.join(" "));
return u+" "+t
}function D(u){var t={};
u&&(u.to||u.from)&&(t.to=u.to,t.from=u.from);
return t
}function ag(u,t,F){var z="";
u=d(u)?u:u&&i(u)&&u.length?u.split(/\s+/):[];
T(u,function(G,H){G&&0<G.length&&(z+=0<H?" ":"",z+=F?t+G:G+t)
});
return z
}function k(t){if(t instanceof s){switch(t.length){case 0:return[];
case 1:if(1===t[0].nodeType){return t
}break;
default:return s(c(t))
}}if(1===t.nodeType){return s(t)
}}function c(u){if(!u[0]){return u
}for(var t=0;
t<u.length;
t++){var z=u[t];
if(1==z.nodeType){return z
}}}function ac(u,t,z){T(t,function(F){u.addClass(F,z)
})
}function I(u,t,z){T(t,function(F){u.removeClass(F,z)
})
}function b(t){return function(u,z){z.addClass&&(ac(t,u,z.addClass),z.addClass=null);
z.removeClass&&(I(t,u,z.removeClass),z.removeClass=null)
}
}function N(u){u=u||{};
if(!u.$$prepared){var t=u.domOperation||r;
u.domOperation=function(){u.$$domOperationFired=!0;
t();
t=r
};
u.$$prepared=!0
}return u
}function M(u,t){m(u,t);
ad(u,t)
}function m(u,t){t.from&&(u.css(t.from),t.from=null)
}function ad(u,t){t.to&&(u.css(t.to),t.to=null)
}function l(u,t,G){var F=(t.addClass||"")+" "+(G.addClass||""),z=(t.removeClass||"")+" "+(G.removeClass||"");
u=n(u.attr("class"),F,z);
J(t,G);
t.addClass=u.addClass?u.addClass:null;
t.removeClass=u.removeClass?u.removeClass:null;
return t
}function n(u,t,H){function G(R){i(R)&&(R=R.split(" "));
var O={};
T(R,function(U){U.length&&(O[U]=!0)
});
return O
}var F={};
u=G(u);
t=G(t);
T(t,function(R,O){F[O]=1
});
H=G(H);
T(H,function(R,O){F[O]=1===F[O]?null:-1
});
var z={addClass:"",removeClass:""};
T(F,function(O,V){var U,R;
1===O?(U="addClass",R=!u[V]):-1===O&&(U="removeClass",R=u[V]);
R&&(z[U].length&&(z[U]+=" "),z[U]+=V)
});
return z
}function P(t){return t instanceof aa.element?t[0]:t
}function p(u,t,G){var F=Object.create(null),z=u.getComputedStyle(t)||{};
T(G,function(O,H){var U=z[O];
if(U){var R=U.charAt(0);
if("-"===R||"+"===R||0<=R){U=ae(U)
}0===U&&(U=null);
F[H]=U
}});
return F
}function ae(u){var t=0;
u=u.split(/\s*,\s*/);
T(u,function(z){"s"==z.charAt(z.length-1)&&(z=z.substring(0,z.length-1));
z=parseFloat(z)||0;
t=t?Math.max(z,t):z
});
return t
}function Q(t){return 0===t||null!=t
}function Y(u,t){var F=o,z=u+"s";
t?F+="Duration":z+=" linear all";
return[F,z]
}function x(u,t){var z=t?"-"+t+"s":"";
w(u,[a,z]);
return[a,z]
}function y(u,t){var F=t?"paused":"",z=g+"PlayState";
w(u,[z,F]);
return[z,F]
}function w(u,t){u.style[t[0]]=t[1]
}function B(){var t=Object.create(null);
return{flush:function(){t=Object.create(null)
},count:function(u){return(u=t[u])?u.total:0
},get:function(u){return(u=t[u])&&u.value
},put:function(u,z){t[u]?t[u].total++:t[u]={total:1,value:z}
}}
}var r=aa.noop,J=aa.extend,s=aa.element,T=aa.forEach,d=aa.isArray,i=aa.isString,e=aa.isObject,K=aa.isUndefined,q=aa.isDefined,j=aa.isFunction,S=aa.isElement,o,A,g,h;
v.ontransitionend===f&&v.onwebkittransitionend!==f?(o="WebkitTransition",A="webkitTransitionEnd transitionend"):(o="transition",A="transitionend");
v.onanimationend===f&&v.onwebkitanimationend!==f?(g="WebkitAnimation",h="webkitAnimationEnd animationend"):(g="animation",h="animationend");
var Z=g+"Delay",C=g+"Duration",a=o+"Delay";
v=o+"Duration";
var af={transitionDuration:v,transitionDelay:a,transitionProperty:o+"Property",animationDuration:C,animationDelay:Z,animationIterationCount:g+"IterationCount"},L={transitionDuration:v,transitionDelay:a,animationDuration:C,animationDelay:Z};
aa.module("ngAnimate",[]).directive("ngAnimateChildren",[function(){return function(u,t,z){u=z.ngAnimateChildren;
aa.isString(u)&&0===u.length?t.data("$$ngAnimateChildren",!0):z.$observe("ngAnimateChildren",function(F){t.data("$$ngAnimateChildren","on"===F||"true"===F)
})
}
}]).factory("$$rAFMutex",["$$rAF",function(t){return function(){var u=!1;
t(function(){u=!0
});
return function(z){u?z():t(z)
}
}
}]).factory("$$rAFScheduler",["$$rAF",function(u){function t(H){F.push([].concat(H));
G()
}function G(){if(F.length){for(var H=[],R=0;
R<F.length;
R++){var O=F[R];
O.shift()();
O.length&&H.push(O)
}F=H;
z||u(function(){z||G()
})
}}var F=[],z;
t.waitUntilQuiet=function(H){z&&z();
z=u(function(){z=null;
H();
G()
})
};
return t
}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(u,t){function z(F){this.setHost(F);
this._doneCallbacks=[];
this._runInAnimationFrame=t();
this._state=0
}z.chain=function(G,F){function O(){if(H===G.length){F(!0)
}else{G[H](function(R){!1===R?F(!1):(H++,O())
})
}}var H=0;
O()
};
z.all=function(G,F){function R(U){H=H&&U;
++O===G.length&&F(H)
}var O=0,H=!0;
T(G,function(U){U.done(R)
})
};
z.prototype={setHost:function(F){this.host=F||{}
},done:function(F){2===this._state?F():this._doneCallbacks.push(F)
},progress:r,getPromise:function(){if(!this.promise){var F=this;
this.promise=u(function(G,H){F.done(function(O){!1===O?H():G()
})
})
}return this.promise
},then:function(G,F){return this.getPromise().then(G,F)
},"catch":function(F){return this.getPromise()["catch"](F)
},"finally":function(F){return this.getPromise()["finally"](F)
},pause:function(){this.host.pause&&this.host.pause()
},resume:function(){this.host.resume&&this.host.resume()
},end:function(){this.host.end&&this.host.end();
this._resolve(!0)
},cancel:function(){this.host.cancel&&this.host.cancel();
this._resolve(!1)
},complete:function(G){var F=this;
0===F._state&&(F._state=1,F._runInAnimationFrame(function(){F._resolve(G)
}))
},_resolve:function(F){2!==this._state&&(T(this._doneCallbacks,function(G){G(F)
}),this._doneCallbacks.length=0,this._state=2)
}};
return z
}]).provider("$$animateQueue",["$animateProvider",function(u){function t(H,G,R,O){return z[H].some(function(U){return U(G,R,O)
})
}function F(H,G){H=H||{};
var R=0<(H.addClass||"").length,O=0<(H.removeClass||"").length;
return G?R&&O:R||O
}var z=this.rules={skip:[],cancel:[],join:[]};
z.join.push(function(H,G,O){return !G.structural&&F(G.options)
});
z.skip.push(function(H,G,O){return !G.structural&&!F(G.options)
});
z.skip.push(function(H,G,O){return"leave"==O.event&&G.structural
});
z.skip.push(function(H,G,O){return O.structural&&!G.structural
});
z.cancel.push(function(H,G,O){return O.structural&&G.structural
});
z.cancel.push(function(H,G,O){return 2===O.state&&G.structural
});
z.cancel.push(function(H,G,O){H=G.options;
O=O.options;
return H.addClass&&H.addClass===O.removeClass||H.removeClass&&H.removeClass===O.addClass
});
this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(az,al,ar,aw,av,am,aq,H,ah){function ai(aD,aC){var aF=P(aD),aE=[],aB=au[aC];
aB&&T(aB,function(aG){aG.node.contains(aF)&&aE.push(aG.callback)
});
return aE
}function ap(aC,aB,aE,aD){az(function(){T(ai(aB,aC),function(aF){aF(aB,aE,aD)
})
})
}function ao(aM,aF,aC){function aL(aO,aR,aP,aQ){ap(aR,aM,aP,aQ);
aO.progress(aR,aP,aQ)
}function aI(aO){G(aM,aC);
M(aM,aC);
aC.domOperation();
aD.complete(!aO)
}var aH,aN;
if(aM=k(aM)){aH=P(aM),aN=aM.parent()
}aC=N(aC);
var aD=new aq;
if(!aH){return aI(),aD
}d(aC.addClass)&&(aC.addClass=aC.addClass.join(" "));
d(aC.removeClass)&&(aC.removeClass=aC.removeClass.join(" "));
aC.from&&!e(aC.from)&&(aC.from=null);
aC.to&&!e(aC.to)&&(aC.to=null);
var aJ=[aH.className,aC.addClass,aC.removeClass].join(" ");
if(!aj(aJ)){return aI(),aD
}var aK=0<=["enter","move","leave"].indexOf(aF),aG=!X||U.get(aH),aJ=!aG&&at.get(aH)||{},aE=!!aJ.state;
aG||aE&&1==aJ.state||(aG=!W(aM,aN,aF));
if(aG){return aI(),aD
}aK&&V(aM);
aG={structural:aK,element:aM,event:aF,close:aI,options:aC,runner:aD};
if(aE){if(t("skip",aM,aG,aJ)){if(2===aJ.state){return aI(),aD
}l(aM,aJ.options,aC);
return aJ.runner
}if(t("cancel",aM,aG,aJ)){2===aJ.state?aJ.runner.end():aJ.structural?aJ.close():l(aM,aG.options,aJ.options)
}else{if(t("join",aM,aG,aJ)){if(2===aJ.state){l(aM,aC,{})
}else{return aF=aG.event=aJ.event,aC=l(aM,aJ.options,aG.options),aD
}}}}else{l(aM,aC,{})
}(aE=aG.structural)||(aE="animate"===aG.event&&0<Object.keys(aG.options.to||{}).length||F(aG.options));
if(!aE){return aI(),an(aM),aD
}aK&&ay(aN);
var aB=(aJ.counter||0)+1;
aG.counter=aB;
aA(aM,1,aG);
al.$$postDigest(function(){var aO=at.get(aH),aP=!aO,aO=aO||{},aR=aM.parent()||[],aQ=0<aR.length&&("animate"===aO.event||aO.structural||F(aO.options));
if(aP||aO.counter!==aB||!aQ){aP&&(G(aM,aC),M(aM,aC));
if(aP||aK&&aO.event!==aF){aC.domOperation(),aD.end()
}aQ||an(aM)
}else{aF=!aO.structural&&F(aO.options,!0)?"setClass":aO.event,aO.structural&&ay(aR),aA(aM,2),aO=am(aM,aF,aO.options),aO.done(function(aS){aI(!aS);
(aS=at.get(aH))&&aS.counter===aB&&an(P(aM));
aL(aD,aF,"close",{})
}),aD.setHost(aO),aL(aD,aF,"start",{})
}});
return aD
}function V(aB){aB=P(aB).querySelectorAll("[data-ng-animate]");
T(aB,function(aD){var aC=parseInt(aD.getAttribute("data-ng-animate")),aE=at.get(aD);
switch(aC){case 2:aE.runner.end();
case 1:aE&&at.remove(aD)
}})
}function an(aB){aB=P(aB);
aB.removeAttribute("data-ng-animate");
at.remove(aB)
}function ak(aC,aB){return P(aC)===P(aB)
}function ay(aC){aC=P(aC);
do{if(!aC||1!==aC.nodeType){break
}var aB=at.get(aC);
if(aB){var aD=aC;
!aB.structural&&F(aB.options)&&(2===aB.state&&aB.runner.end(),an(aD))
}aC=aC.parentNode
}while(1)
}function W(aC,aB,aH){var aE=aH=!1,aG=!1,aD;
for((aC=aC.data("$ngAnimatePin"))&&(aB=aC);
aB&&aB.length;
){aE||(aE=ak(aB,ar));
aC=aB[0];
if(1!==aC.nodeType){break
}var aF=at.get(aC)||{};
aG||(aG=aF.structural||U.get(aC));
if(K(aD)||!0===aD){aC=aB.data("$$ngAnimateChildren"),q(aC)&&(aD=aC)
}if(aG&&!1===aD){break
}aE||(aE=ak(aB,ar),aE||(aC=aB.data("$ngAnimatePin"))&&(aB=aC));
aH||(aH=ak(aB,ax));
aB=aB.parent()
}return(!aG||aD)&&aE&&aH
}function aA(aC,aB,aD){aD=aD||{};
aD.state=aB;
aC=P(aC);
aC.setAttribute("data-ng-animate",aB);
aD=(aB=at.get(aC))?J(aB,aD):aD;
at.put(aC,aD)
}var at=new av,U=new av,X=null,R=al.$watch(function(){return 0===H.totalPendingRequests
},function(aB){aB&&(R(),al.$$postDigest(function(){al.$$postDigest(function(){null===X&&(X=!0)
})
}))
}),ax=s(aw[0].body),au={},O=u.classNameFilter(),aj=O?function(aB){return O.test(aB)
}:function(){return !0
},G=b(ah);
return{on:function(aC,aB,aD){aB=c(aB);
au[aC]=au[aC]||[];
au[aC].push({node:aB,callback:aD})
},off:function(aC,aB,aF){function aD(aH,aG,aJ){var aI=c(aG);
return aH.filter(function(aK){return !(aK.node===aI&&(!aJ||aK.callback===aJ))
})
}var aE=au[aC];
aE&&(au[aC]=1===arguments.length?null:aD(aE,aB,aF))
},pin:function(aC,aB){ab(S(aC),"element","not an element");
ab(S(aB),"parentElement","not an element");
aC.data("$ngAnimatePin",aB)
},push:function(aC,aB,aE,aD){aE=aE||{};
aE.domOperation=aD;
return ao(aC,aB,aE)
},enabled:function(aC,aB){var aF=arguments.length;
if(0===aF){aB=!!X
}else{if(S(aC)){var aD=P(aC),aE=U.get(aD);
1===aF?aB=!aE:(aB=!!aB)?aE&&U.remove(aD):U.put(aD,!0)
}else{aB=X=!!aC
}}return aB
}}
}]
}]).provider("$$animation",["$animateProvider",function(u){function t(F){return F.data("$$animationRunner")
}var z=this.drivers=[];
this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(W,V,ah,O,U){var R=[],F=b(W),H=0,G=0,X=[];
return function(av,ak,ai){function at(az){az=az.hasAttribute("ng-animate-ref")?[az]:az.querySelectorAll("[ng-animate-ref]");
var ay=[];
T(az,function(aA){var aB=aA.getAttribute("ng-animate-ref");
aB&&aB.length&&ay.push(aA)
});
return ay
}function aj(az){var ay=[],aC={};
T(az,function(aE,aG){var aH=P(aE.element),aD=0<=["enter","move"].indexOf(aE.event),aH=aE.structural?at(aH):[];
if(aH.length){var aF=aD?"to":"from";
T(aH,function(aJ){var aI=aJ.getAttribute("ng-animate-ref");
aC[aI]=aC[aI]||{};
aC[aI][aF]={animationID:aG,element:s(aJ)}
})
}else{ay.push(aE)
}});
var aA={},aB={};
T(aC,function(aK,aE){var aH=aK.from,aI=aK.to;
if(aH&&aI){var aF=az[aH.animationID],aG=az[aI.animationID],aD=aH.animationID.toString();
if(!aB[aD]){var aJ=aB[aD]={structural:!0,beforeStart:function(){aF.beforeStart();
aG.beforeStart()
},close:function(){aF.close();
aG.close()
},classes:ax(aF.classes,aG.classes),from:aF,to:aG,anchors:[]};
aJ.classes.length?ay.push(aJ):(ay.push(aF),ay.push(aG))
}aB[aD].anchors.push({out:aH.element,"in":aI.element})
}else{aH=aH?aH.animationID:aI.animationID,aI=aH.toString(),aA[aI]||(aA[aI]=!0,ay.push(az[aH]))
}});
return ay
}function ax(az,ay){az=az.split(" ");
ay=ay.split(" ");
for(var aD=[],aB=0;
aB<az.length;
aB++){var aC=az[aB];
if("ng-"!==aC.substring(0,3)){for(var aA=0;
aA<ay.length;
aA++){if(aC===ay[aA]){aD.push(aC);
break
}}}}return aD.join(" ")
}function ap(az){for(var ay=z.length-1;
0<=ay;
ay--){var aA=z[ay];
if(ah.has(aA)&&(aA=ah.get(aA)(az))){return aA
}}}function an(ay,az){ay.from&&ay.to?(t(ay.from.element).setHost(az),t(ay.to.element).setHost(az)):t(ay.element).setHost(az)
}function aw(){var ay=t(av);
!ay||"leave"===ak&&ai.$$domOperationFired||ay.end()
}function al(ay){av.off("$destroy",aw);
av.removeData("$$animationRunner");
F(av,ai);
M(av,ai);
ai.domOperation();
ao&&W.removeClass(av,ao);
av.removeClass("ng-animate");
au.complete(!ay)
}ai=N(ai);
var ar=0<=["enter","move","leave"].indexOf(ak),au=new O({end:function(){al()
},cancel:function(){al(!0)
}});
if(!z.length){return al(),au
}av.data("$$animationRunner",au);
var aq=E(av.attr("class"),E(ai.addClass,ai.removeClass)),ao=ai.tempClasses;
ao&&(aq+=" "+ao,ai.tempClasses=null);
var am;
ar||(am=H,H+=1);
R.push({element:av,classes:aq,event:ak,classBasedIndex:am,structural:ar,options:ai,beforeStart:function(){av.addClass("ng-animate");
ao&&W.addClass(av,ao)
},close:al});
av.on("$destroy",aw);
if(1<R.length){return au
}V.$$postDigest(function(){G=H;
H=0;
X.length=0;
var ay=[];
T(R,function(az){t(az.element)&&ay.push(az)
});
R.length=0;
T(aj(ay),function(az){function aA(){az.beforeStart();
var aD,aB=az.close,aC=az.anchors?az.from.element||az.to.element:az.element;
t(aC)&&P(aC).parentNode&&(aC=ap(az))&&(aD=aC.start);
aD?(aD=aD(),aD.done(function(aE){aB(!aE)
}),an(az,aD)):aB()
}az.structural?aA():(X.push({node:P(az.element),fn:aA}),az.classBasedIndex===G-1&&(X=X.sort(function(aC,aB){return aB.node.contains(aC.node)
}).map(function(aB){return aB.fn
}),U(X)))
})
});
return au
}
}]
}]).provider("$animateCss",["$animateProvider",function(u){var t=B(),z=B();
this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(aj,ah,am,V,X,W,G){function U(ao,an){var ap=ao.parentNode;
return(ap.$$ngAnimateParentKey||(ap.$$ngAnimateParentKey=++F))+"-"+ao.getAttribute("class")+"-"+an
}function O(ap,aq,ar,ao){var an;
0<t.count(ar)&&(an=z.get(ar),an||(aq=ag(aq,"-stagger"),ah.addClass(ap,aq),an=p(aj,ap,ao),an.animationDuration=Math.max(an.animationDuration,0),an.transitionDuration=Math.max(an.transitionDuration,0),ah.removeClass(ap,aq),z.put(ar,an)));
return an||{}
}function al(an){H.push(an);
G.waitUntilQuiet(function(){t.flush();
z.flush();
for(var ao=ai.offsetWidth+1,ap=0;
ap<H.length;
ap++){H[ap](ao)
}H.length=0
})
}function ak(ap,an,ao){an=t.get(ao);
an||(an=p(aj,ap,af),"infinite"===an.animationIterationCount&&(an.animationIterationCount=1));
t.put(ao,an);
ap=an;
ao=ap.animationDelay;
an=ap.transitionDelay;
ap.maxDelay=ao&&an?Math.max(ao,an):ao||an;
ap.maxDuration=Math.max(ap.animationDuration*ap.animationIterationCount,ap.transitionDuration);
return ap
}var R=b(ah),F=0,ai=P(X).body,H=[];
return function(aT,aS){function aR(){aN()
}function aP(){aN(!0)
}function aN(aV){if(!(ay||aI&&aH)){ay=!0;
aH=!1;
ah.removeClass(aT,an);
ah.removeClass(aT,ao);
y(aQ,!1);
x(aQ,!1);
T(aO,function(aW){aQ.style[aW[0]]=""
});
R(aT,aS);
M(aT,aS);
if(aS.onDone){aS.onDone()
}aL&&aL.complete(!aV)
}}function ax(aV){aK.blockTransition&&x(aQ,aV);
aK.blockKeyframeAnimation&&y(aQ,!!aV)
}function aB(){aL=new am({end:aR,cancel:aP});
aN();
return{$$willAnimate:!1,start:function(){return aL
},end:aR}
}function aw(){function aW(){if(!ay){ax(!1);
T(aO,function(a4){aQ.style[a4[0]]=a4[1]
});
R(aT,aS);
ah.addClass(aT,ao);
if(aK.recalculateTimingStyles){aM=aQ.className+" "+an;
ar=U(aQ,aM);
az=ak(aQ,aM,ar);
au=az.maxDelay;
aC=Math.max(au,0);
aA=az.maxDuration;
if(0===aA){aN();
return
}aK.hasTransitions=0<az.transitionDuration;
aK.hasAnimations=0<az.animationDuration
}if(aK.applyTransitionDelay||aK.applyAnimationDelay){au="boolean"!==typeof aS.delay&&Q(aS.delay)?parseFloat(aS.delay):au;
aC=Math.max(au,0);
var a2;
aK.applyTransitionDelay&&(az.transitionDelay=au,a2=[a,au+"s"],aO.push(a2),aQ.style[a2[0]]=a2[1]);
aK.applyAnimationDelay&&(az.animationDelay=au,a2=[Z,au+"s"],aO.push(a2),aQ.style[a2[0]]=a2[1])
}aF=1000*aC;
aD=1000*aA;
if(aS.easing){var a3=aS.easing;
aK.hasTransitions&&(a2=o+"TimingFunction",aO.push([a2,a3]),aQ.style[a2]=a3);
aK.hasAnimations&&(a2=g+"TimingFunction",aO.push([a2,a3]),aQ.style[a2]=a3)
}az.transitionDuration&&a0.push(A);
az.animationDuration&&a0.push(h);
aV=Date.now();
aT.on(a0.join(" "),aY);
V(a1,aF+1.5*aD);
ad(aT,aS)
}}function a1(){aN()
}function aY(a3){a3.stopPropagation();
var a2=a3.originalEvent||a3;
a3=a2.$manualTimeStamp||a2.timeStamp||Date.now();
a2=parseFloat(a2.elapsedTime.toFixed(3));
Math.max(a3-aV,0)>=aF&&a2>=aA&&(aI=!0,aN())
}if(!ay){if(aQ.parentNode){var aV,a0=[],aX=function(a3){if(aI){aH&&a3&&(aH=!1,aN())
}else{if(aH=!a3,az.animationDuration){if(a3=y(aQ,aH),aH){aO.push(a3)
}else{var a2=aO,a4=a2.indexOf(a3);
0<=a3&&a2.splice(a4,1)
}}}},aZ=0<ap&&(az.transitionDuration&&0===aq.transitionDuration||az.animationDuration&&0===aq.animationDuration)&&Math.max(aq.animationDelay,aq.transitionDelay);
aZ?V(aW,Math.floor(aZ*ap*1000),!1):aW();
aG.resume=function(){aX(!0)
};
aG.pause=function(){aX(!1)
}
}else{aN()
}}}var aQ=P(aT);
if(!aQ||!aQ.parentNode){return aB()
}aS=N(aS);
var aO=[],aJ=aT.attr("class"),aE=D(aS),ay,aH,aI,aL,aG,aC,aF,aA,aD;
if(0===aS.duration||!W.animations&&!W.transitions){return aB()
}var aU=aS.event&&d(aS.event)?aS.event.join(" "):aS.event,at="",av="";
aU&&aS.structural?at=ag(aU,"ng-",!0):aU&&(at=aU);
aS.addClass&&(av+=ag(aS.addClass,"-add"));
aS.removeClass&&(av.length&&(av+=" "),av+=ag(aS.removeClass,"-remove"));
aS.applyClassesEarly&&av.length&&(R(aT,aS),av="");
var an=[at,av].join(" ").trim(),aM=aJ+" "+an,ao=ag(an,"-active"),aJ=aE.to&&0<Object.keys(aE.to).length;
if(!(0<(aS.keyframeStyle||"").length||aJ||an)){return aB()
}var ar,aq;
0<aS.stagger?(aE=parseFloat(aS.stagger),aq={transitionDelay:aE,animationDelay:aE,transitionDuration:0,animationDuration:0}):(ar=U(aQ,aM),aq=O(aQ,an,ar,L));
ah.addClass(aT,an);
aS.transitionStyle&&(aE=[o,aS.transitionStyle],w(aQ,aE),aO.push(aE));
0<=aS.duration&&(aE=0<aQ.style[o].length,aE=Y(aS.duration,aE),w(aQ,aE),aO.push(aE));
aS.keyframeStyle&&(aE=[g,aS.keyframeStyle],w(aQ,aE),aO.push(aE));
var ap=aq?0<=aS.staggerIndex?aS.staggerIndex:t.count(ar):0;
(aU=0===ap)&&x(aQ,9999);
var az=ak(aQ,aM,ar),au=az.maxDelay;
aC=Math.max(au,0);
aA=az.maxDuration;
var aK={};
aK.hasTransitions=0<az.transitionDuration;
aK.hasAnimations=0<az.animationDuration;
aK.hasTransitionAll=aK.hasTransitions&&"all"==az.transitionProperty;
aK.applyTransitionDuration=aJ&&(aK.hasTransitions&&!aK.hasTransitionAll||aK.hasAnimations&&!aK.hasTransitions);
aK.applyAnimationDuration=aS.duration&&aK.hasAnimations;
aK.applyTransitionDelay=Q(aS.delay)&&(aK.applyTransitionDuration||aK.hasTransitions);
aK.applyAnimationDelay=Q(aS.delay)&&aK.hasAnimations;
aK.recalculateTimingStyles=0<av.length;
if(aK.applyTransitionDuration||aK.applyAnimationDuration){aA=aS.duration?parseFloat(aS.duration):aA,aK.applyTransitionDuration&&(aK.hasTransitions=!0,az.transitionDuration=aA,aE=0<aQ.style[o+"Property"].length,aO.push(Y(aA,aE))),aK.applyAnimationDuration&&(aK.hasAnimations=!0,az.animationDuration=aA,aO.push([C,aA+"s"]))
}if(0===aA&&!aK.recalculateTimingStyles){return aB()
}null==aS.duration&&0<az.transitionDuration&&(aK.recalculateTimingStyles=aK.recalculateTimingStyles||aU);
aF=1000*aC;
aD=1000*aA;
aS.skipBlocking||(aK.blockTransition=0<az.transitionDuration,aK.blockKeyframeAnimation=0<az.animationDuration&&0<aq.animationDelay&&0===aq.animationDuration);
m(aT,aS);
aK.blockTransition||x(aQ,!1);
ax(aA);
return{$$willAnimate:!0,end:aR,start:function(){if(!ay){return aG={end:aR,cancel:aP,resume:null,pause:null},aL=new am(aG),al(aw),aL
}}}
}
}]
}]).provider("$$animateCssDriver",["$$animationProvider",function(t){t.drivers.push("$$animateCssDriver");
this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(V,U,R,O,ai,F){function H(aj){return aj.replace(/\bng-\S+\b/g,"")
}function G(ak,aj){i(ak)&&(ak=ak.split(" "));
i(aj)&&(aj=aj.split(" "));
return ak.filter(function(al){return -1===aj.indexOf(al)
}).join(" ")
}function u(aq,ao,ak){function aj(av){var au={},aw=P(av).getBoundingClientRect();
T(["width","height","top","left"],function(ax){var ay=aw[ax];
switch(ax){case"top":ay+=X.scrollTop;
break;
case"left":ay+=X.scrollLeft
}au[ax]=Math.floor(ay)+"px"
});
return au
}function at(){var av=H(ak.attr("class")||""),au=G(av,ar),av=G(ar,av),au=V(al,{to:aj(ak),addClass:"ng-anchor-in "+au,removeClass:"ng-anchor-out "+av,delay:!0});
return au.$$willAnimate?au:null
}function an(){al.remove();
ao.removeClass("ng-animate-shim");
ak.removeClass("ng-animate-shim")
}var al=s(P(ao).cloneNode(!0)),ar=H(al.attr("class")||"");
ao.addClass("ng-animate-shim");
ak.addClass("ng-animate-shim");
al.addClass("ng-anchor");
W.append(al);
var am;
aq=function(){var au=V(al,{addClass:"ng-anchor-out",delay:!0,from:aj(ao)});
return au.$$willAnimate?au:null
}();
if(!aq&&(am=at(),!am)){return an()
}var ap=aq||am;
return{start:function(){function av(){aw&&aw.end()
}var au,aw=ap.start();
aw.done(function(){aw=null;
if(!am&&(am=at())){return aw=am.start(),aw.done(function(){aw=null;
an();
au.complete()
}),aw
}an();
au.complete()
});
return au=new R({end:av,cancel:av})
}}
}function z(ak,aj,ap,ao){var am=ah(ak),an=ah(aj),al=[];
T(ao,function(aq){(aq=u(ap,aq.out,aq["in"]))&&al.push(aq)
});
if(am||an||0!==al.length){return{start:function(){function ar(){T(aq,function(au){au.end()
})
}var aq=[];
am&&aq.push(am.start());
an&&aq.push(an.start());
T(al,function(au){aq.push(au.start())
});
var at=new R({end:ar,cancel:ar});
R.all(aq,function(au){at.complete(au)
});
return at
}}
}}function ah(al){var ak=al.element,aj=al.options||{};
al.structural?(aj.structural=aj.applyClassesEarly=!0,aj.event=al.event,"leave"===aj.event&&(aj.onDone=aj.domOperation)):aj.event=null;
al=V(ak,aj);
return al.$$willAnimate?al:null
}if(!F.animations&&!F.transitions){return r
}var X=P(ai).body;
U=P(O);
var W=s(X.parentNode===U?X:U);
return function(aj){return aj.from&&aj.to?z(aj.from,aj.to,aj.classes,aj.anchors):ah(aj)
}
}]
}]).provider("$$animateJs",["$animateProvider",function(t){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(u,O,G,F){function z(ah){ah=d(ah)?ah:ah.split(" ");
for(var W=[],V={},R=0;
R<ah.length;
R++){var X=ah[R],U=t.$$registeredAnimations[X];
U&&!V[X]&&(W.push(u.get(U)),V[X]=!0)
}return W
}var H=b(F);
return function(al,ak,ah,X){function ap(){X.domOperation();
H(al,X)
}function ai(at,ar,aw,av,au){switch(aw){case"animate":ar=[ar,av.from,av.to,au];
break;
case"setClass":ar=[ar,R,aj,au];
break;
case"addClass":ar=[ar,R,au];
break;
case"removeClass":ar=[ar,aj,au];
break;
default:ar=[ar,au]
}ar.push(av);
if(at=at.apply(at,ar)){if(j(at.start)&&(at=at.start()),at instanceof O){at.done(au)
}else{if(j(at)){return at
}}}return r
}function am(at,ar,ax,aw,au){var av=[];
T(aw,function(az){var ay=az[au];
ay&&av.push(function(){var aD,aB,aC=!1,aA=function(aE){aC||(aC=!0,(aB||r)(aE),aD.complete(!aE))
};
aD=new O({end:function(){aA()
},cancel:function(){aA(!0)
}});
aB=ai(ay,at,ar,ax,function(aE){aA(!1===aE)
});
return aD
})
});
return av
}function V(at,ar,az,ay,aw){var ax=am(at,ar,az,ay,aw);
if(0===ax.length){var av,au;
"beforeSetClass"===aw?(av=am(at,"removeClass",az,ay,"beforeRemoveClass"),au=am(at,"addClass",az,ay,"beforeAddClass")):"setClass"===aw&&(av=am(at,"removeClass",az,ay,"removeClass"),au=am(at,"addClass",az,ay,"addClass"));
av&&(ax=ax.concat(av));
au&&(ax=ax.concat(au))
}if(0!==ax.length){return function(aB){var aA=[];
ax.length&&T(ax,function(aC){aA.push(aC())
});
aA.length?O.all(aA,aB):aB();
return function(aC){T(aA,function(aD){aC?aD.cancel():aD.end()
})
}
}
}}3===arguments.length&&e(ah)&&(X=ah,ah=null);
X=N(X);
ah||(ah=al.attr("class")||"",X.addClass&&(ah+=" "+X.addClass),X.removeClass&&(ah+=" "+X.removeClass));
var R=X.addClass,aj=X.removeClass,U=z(ah),aq,W;
if(U.length){var ao,an;
"leave"==ak?(an="leave",ao="afterLeave"):(an="before"+ak.charAt(0).toUpperCase()+ak.substr(1),ao=ak);
"enter"!==ak&&"move"!==ak&&(aq=V(al,ak,X,U,an));
W=V(al,ak,X,U,ao)
}if(aq||W){return{start:function(){function ar(ax){aw=!0;
ap();
M(al,X);
au.complete(ax)
}var av,at=[];
aq&&at.push(function(ax){av=aq(ax)
});
at.length?at.push(function(ax){ap();
ax(!0)
}):ap();
W&&at.push(function(ax){av=W(ax)
});
var aw=!1,au=new O({end:function(){aw||((av||r)(void 0),ar(void 0))
},cancel:function(){aw||((av||r)(!0),ar(!0))
}});
O.chain(at,ar);
return au
}}
}}
}]
}]).provider("$$animateJsDriver",["$$animationProvider",function(t){t.drivers.push("$$animateJsDriver");
this.$get=["$$animateJs","$$AnimateRunner",function(u,F){function z(G){return u(G.element,G.event,G.classes,G.options)
}return function(H){if(H.from&&H.to){var G=z(H.from),O=z(H.to);
if(G||O){return{start:function(){function R(){return function(){T(V,function(W){W.end()
})
}
}var V=[];
G&&V.push(G.start());
O&&V.push(O.start());
F.all(V,function(W){U.complete(W)
});
var U=new F({end:R(),cancel:R()});
return U
}}
}}else{return z(H)
}}
}]
}])
})(window,window.angular);
(function(ad,ae,ac){function U(g){var h=[];
Y(h,ae.noop).chars(g);
return h.join("")
}function af(h,n){var p={},q=h.split(","),g;
for(g=0;
g<q.length;
g++){p[n?ae.lowercase(q[g]):q[g]]=!0
}return p
}function S(u,p){function r(y,w,z,x){w=ae.lowercase(w);
if(W[w]){for(;
q.last()&&T[q.last()];
){s("",q.last())
}}R[w]&&q.last()==w&&s("",w);
(x=P[w]||!!x)||q.push(w);
var v={};
z.replace(Q,function(A,B,C,E,D){v[B]=aa(C||E||D||"")
});
p.start&&p.start(w,v,x)
}function s(v,w){var y=0,x;
if(w=ae.lowercase(w)){for(y=q.length-1;
0<=y&&q[y]!=w;
y--){}}if(0<=y){for(x=q.length-1;
x>=y;
x--){p.end&&p.end(q[x])
}q.length=y
}}"string"!==typeof u&&(u=null===u||"undefined"===typeof u?"":""+u);
var t,n,q=[],g=u,h;
for(q.last=function(){return q[q.length-1]
};
u;
){h="";
n=!0;
if(q.last()&&m[q.last()]){u=u.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+q.last()+"[^>]*>","i"),function(w,v){v=v.replace(o,"$1").replace(k,"$1");
p.chars&&p.chars(aa(v));
return""
}),s("",q.last())
}else{if(0===u.indexOf("\x3c!--")){t=u.indexOf("--",4),0<=t&&u.lastIndexOf("--\x3e",t)===t&&(p.comment&&p.comment(u.substring(4,t)),u=u.substring(t+3),n=!1)
}else{if(l.test(u)){if(t=u.match(l)){u=u.replace(t[0],""),n=!1
}}else{if(i.test(u)){if(t=u.match(j)){u=u.substring(t[0].length),t[0].replace(j,s),n=!1
}}else{e.test(u)&&((t=u.match(f))?(t[4]&&(u=u.substring(t[0].length),t[0].replace(f,r)),n=!1):(h+="<",u=u.substring(1)))
}}}n&&(t=u.indexOf("<"),h+=0>t?u:u.substring(0,t),u=0>t?"":u.substring(t),p.chars&&p.chars(aa(h)))
}if(u==g){throw d("badparse",u)
}g=u
}s()
}function aa(g){if(!g){return""
}ab.innerHTML=g.replace(/</g,"&lt;");
return ab.textContent
}function Z(g){return g.replace(/&/g,"&amp;").replace(c,function(h){var n=h.charCodeAt(0);
h=h.charCodeAt(1);
return"&#"+(1024*(n-55296)+(h-56320)+65536)+";"
}).replace(b,function(h){return"&#"+h.charCodeAt(0)+";"
}).replace(/</g,"&lt;").replace(/>/g,"&gt;")
}function Y(g,h){var n=!1,p=ae.bind(g,g.push);
return{start:function(q,r,s){q=ae.lowercase(q);
!n&&m[q]&&(n=q);
n||!0!==X[q]||(p("<"),p(q),ae.forEach(r,function(w,v){var t=ae.lowercase(v),u="img"===q&&"src"===t||"background"===t;
!0!==a[t]||!0===V[t]&&!h(w,u)||(p(" "),p(v),p('="'),p(Z(w)),p('"'))
}),p(s?"/>":">"))
},end:function(q){q=ae.lowercase(q);
n||!0!==X[q]||(p("</"),p(q),p(">"));
q==n&&(n=!1)
},chars:function(q){n||p(Z(q))
}}
}var d=ae.$$minErr("$sanitize"),f=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,j=/^<\/\s*([\w:-]+)[^>]*>/,Q=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,e=/^</,i=/^<\//,o=/\x3c!--(.*?)--\x3e/g,l=/<!DOCTYPE([^>]*?)>/i,k=/<!\[CDATA\[(.*?)]]\x3e/g,c=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,b=/([^\#-~| |!])/g,P=af("area,br,col,hr,img,wbr");
ad=af("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
ac=af("rp,rt");
var R=ae.extend({},ac,ad),W=ae.extend({},ad,af("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),T=ae.extend({},ac,af("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
ad=af("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");
var m=af("script,style"),X=ae.extend({},P,W,T,R,ad),V=af("background,cite,href,longdesc,src,usemap,xlink:href");
ad=af("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
ac=af("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0);
var a=ae.extend({},V,ac,ad),ab=document.createElement("pre");
ae.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(g){return function(h){var n=[];
S(h,Y(n,function(q,p){return !/^unsafe/.test(g(q,p))
}));
return n.join("")
}
}]
});
ae.module("ngSanitize").filter("linky",["$sanitize",function(g){var h=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,n=/^mailto:/i;
return function(x,y){function u(p){p&&v.push(U(p))
}function w(p,z){v.push("<a ");
ae.isDefined(y)&&v.push('target="',y,'" ');
v.push('href="',p.replace(/"/g,"&quot;"),'">');
u(z);
v.push("</a>")
}if(!x){return x
}for(var s,t=x,v=[],r,q;
s=t.match(h);
){r=s[0],s[2]||s[4]||(r=(s[3]?"http://":"mailto:")+r),q=s.index,u(t.substr(0,q)),w(r,s[0].replace(n,"")),t=t.substring(q+s[0].length)
}u(t);
return g(v.join(""))
}
}])
})(window,window.angular);
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("collapse",["$animate",function(b){return{link:function(a,n,m){function l(){n.removeClass("collapse").addClass("collapsing"),b.addClass(n,"in",{to:{height:n[0].scrollHeight+"px"}}).then(k)
}function k(){n.removeClass("collapsing"),n.css({height:"auto"})
}function j(){n.css({height:n[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing"),b.removeClass(n,"in",{to:{height:"0"}}).then(i)
}function i(){n.css({height:"0"}),n.removeClass("collapsing"),n.addClass("collapse")
}a.$watch(m.collapse,function(c){c?j():l()
})
}}
}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(e,d,f){this.groups=[],this.closeOthers=function(b){var a=angular.isDefined(d.closeOthers)?e.$eval(d.closeOthers):f.closeOthers;
a&&angular.forEach(this.groups,function(c){c!==b&&(c.isOpen=!1)
})
},this.addGroup=function(g){var c=this;
this.groups.push(g),g.$on("$destroy",function(){c.removeGroup(g)
})
},this.removeGroup=function(g){var c=this.groups.indexOf(g);
-1!==c&&this.groups.splice(c,1)
}
}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}
}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(b){this.heading=b
}
},link:function(f,e,h,g){g.addGroup(f),f.$watch("isOpen",function(a){a&&g.closeOthers(f)
}),f.toggleOpen=function(){f.isDisabled||(f.isOpen=!f.isOpen)
}
}}
}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(g,f,j,i,h){i.setHeading(h(g,angular.noop))
}}
}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(f,e,h,g){f.$watch(function(){return g[h.accordionTransclude]
},function(b){b&&(e.html(""),e.append(b))
})
}}
}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(d,c){d.closeable="close" in c,this.close=d.close
}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}
}).directive("dismissOnTimeout",["$timeout",function(b){return{require:"alert",link:function(a,h,g,f){b(function(){f.close()
},parseInt(g.dismissOnTimeout,10))
}}
}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(e,d,f){d.addClass("ng-binding").data("$binding",f.bindHtmlUnsafe),e.$watch(f.bindHtmlUnsafe,function(b){d.html(b||"")
})
}
}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(b){this.activeClass=b.activeClass||"active",this.toggleEvent=b.toggleEvent||"click"
}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(h,g,l,k){var j=k[0],i=k[1];
i.$render=function(){g.toggleClass(j.activeClass,angular.equals(i.$modelValue,h.$eval(l.btnRadio)))
},g.bind(j.toggleEvent,function(){var a=g.hasClass(j.activeClass);
(!a||angular.isDefined(l.uncheckable))&&h.$apply(function(){i.$setViewValue(a?null:h.$eval(l.btnRadio)),i.$render()
})
})
}}
}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(r,q,p,o){function n(){return l(p.btnCheckboxTrue,!0)
}function m(){return l(p.btnCheckboxFalse,!1)
}function l(a,f){var e=r.$eval(a);
return angular.isDefined(e)?e:f
}var k=o[0],j=o[1];
j.$render=function(){q.toggleClass(k.activeClass,angular.equals(j.$modelValue,n()))
},q.bind(k.toggleEvent,function(){r.$apply(function(){j.$setViewValue(q.hasClass(k.activeClass)?m():n()),j.$render()
})
})
}}
}),angular.module("ui.bootstrap.carousel",[]).controller("CarouselController",["$scope","$interval","$animate",function(z,y,x){function w(d){if(angular.isUndefined(p[d].index)){return p[d]
}var c;
p.length;
for(c=0;
c<p.length;
++c){if(p[c].index==d){return p[c]
}}}function v(){u();
var a=+z.interval;
!isNaN(a)&&a>0&&(s=y(t,a))
}function u(){s&&(y.cancel(s),s=null)
}function t(){var a=+z.interval;
r&&!isNaN(a)&&a>0?z.next():z.pause()
}var s,r,q=this,p=q.slides=z.slides=[],o=-1;
q.currentSlide=null;
var n=!1;
q.select=z.select=function(a,h){function e(){n||(angular.extend(a,{direction:h,active:!0}),angular.extend(q.currentSlide||{},{direction:h,active:!1}),x.enabled()&&!z.noTransition&&a.$element&&(z.$currentTransition=!0,a.$element.one("$animate:close",function(){z.$currentTransition=null
})),q.currentSlide=a,o=c,v())
}var c=q.indexOfSlide(a);
void 0===h&&(h=c>q.getCurrentIndex()?"next":"prev"),a&&a!==q.currentSlide&&e()
},z.$on("$destroy",function(){n=!0
}),q.getCurrentIndex=function(){return q.currentSlide&&angular.isDefined(q.currentSlide.index)?+q.currentSlide.index:o
},q.indexOfSlide=function(b){return angular.isDefined(b.index)?+b.index:p.indexOf(b)
},z.next=function(){var a=(q.getCurrentIndex()+1)%p.length;
return z.$currentTransition?void 0:q.select(w(a),"next")
},z.prev=function(){var a=q.getCurrentIndex()-1<0?p.length-1:q.getCurrentIndex()-1;
return z.$currentTransition?void 0:q.select(w(a),"prev")
},z.isActive=function(b){return q.currentSlide===b
},z.$watch("interval",v),z.$on("$destroy",u),z.play=function(){r||(r=!0,v())
},z.pause=function(){z.noPause||(r=!1,u())
},q.addSlide=function(a,d){a.$element=d,p.push(a),1===p.length||a.active?(q.select(p[p.length-1]),1==p.length&&z.play()):a.active=!1
},q.removeSlide=function(d){angular.isDefined(d.index)&&p.sort(function(f,e){return +f.index>+e.index
});
var c=p.indexOf(d);
p.splice(c,1),p.length>0&&d.active?q.select(c>=p.length?p[c-1]:p[c]):o>c&&o--
}
}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}
}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?",index:"=?"},link:function(f,e,h,g){g.addSlide(f,e),f.$on("$destroy",function(){g.removeSlide(f)
}),f.$watch("active",function(a){a&&g.select(f)
})
}}
}).animation(".item",["$animate",function(b){return{beforeAddClass:function(a,l,k){if("active"==l&&a.parent()&&!a.parent().scope().noTransition){var j=!1,i=a.isolateScope().direction,h="next"==i?"left":"right";
return a.addClass(i),b.addClass(a,h).then(function(){j||a.removeClass(h+" "+i),k()
}),function(){j=!0
}
}k()
},beforeRemoveClass:function(a,l,k){if("active"==l&&a.parent()&&!a.parent().scope().noTransition){var j=!1,i=a.isolateScope().direction,h="next"==i?"left":"right";
return b.addClass(a,h).then(function(){j||a.removeClass(h),k()
}),function(){j=!0
}
}k()
}}
}]),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(h,g){function l(b){var f=[],e=b.split("");
return angular.forEach(i,function(a,n){var m=b.indexOf(n);
if(m>-1){b=b.split(""),e[m]="("+a.regex+")",b[m]="$";
for(var d=m+1,c=m+n.length;
c>d;
d++){e[d]="",b[d]="$"
}b=b.join(""),f.push({index:m,apply:a.apply})
}}),{regex:new RegExp("^"+e.join("")+"$"),map:g(f,"index")}
}function k(e,d,f){return 1>f?!1:1===d&&f>28?29===f&&(e%4===0&&e%100!==0||e%400===0):3===d||5===d||8===d||10===d?31>f:!0
}var j=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
this.parsers={};
var i={yyyy:{regex:"\\d{4}",apply:function(b){this.year=+b
}},yy:{regex:"\\d{2}",apply:function(b){this.year=+b+2000
}},y:{regex:"\\d{1,4}",apply:function(b){this.year=+b
}},MMMM:{regex:h.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=h.DATETIME_FORMATS.MONTH.indexOf(a)
}},MMM:{regex:h.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=h.DATETIME_FORMATS.SHORTMONTH.indexOf(a)
}},MM:{regex:"0[1-9]|1[0-2]",apply:function(b){this.month=b-1
}},M:{regex:"[1-9]|1[0-2]",apply:function(b){this.month=b-1
}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(b){this.date=+b
}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(b){this.date=+b
}},EEEE:{regex:h.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:h.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(b){this.hours=+b
}},H:{regex:"1?[0-9]|2[0-3]",apply:function(b){this.hours=+b
}},mm:{regex:"[0-5][0-9]",apply:function(b){this.minutes=+b
}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(b){this.minutes=+b
}},sss:{regex:"[0-9][0-9][0-9]",apply:function(b){this.milliseconds=+b
}},ss:{regex:"[0-5][0-9]",apply:function(b){this.seconds=+b
}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(b){this.seconds=+b
}}};
this.parse=function(x,w,v){if(!angular.isString(x)||!w){return x
}w=h.DATETIME_FORMATS[w]||w,w=w.replace(j,"\\$&"),this.parsers[w]||(this.parsers[w]=l(w));
var u=this.parsers[w],t=u.regex,s=u.map,r=x.match(t);
if(r&&r.length){var q,e;
q=v?{year:v.getFullYear(),month:v.getMonth(),date:v.getDate(),hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds(),milliseconds:v.getMilliseconds()}:{year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0};
for(var d=1,c=r.length;
c>d;
d++){var a=s[d-1];
a.apply&&a.apply.call(q,r[d])
}return k(q.year,q.month,q.date)&&(e=new Date(q.year,q.month,q.date,q.hours,q.minutes,q.seconds,q.milliseconds||0)),e
}}
}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(g,f){function j(b,d){return b.currentStyle?b.currentStyle[d]:f.getComputedStyle?f.getComputedStyle(b)[d]:b.style[d]
}function i(b){return"static"===(j(b,"position")||"static")
}var h=function(a){for(var k=g[0],d=a.offsetParent||k;
d&&d!==k&&i(d);
){d=d.offsetParent
}return d||k
};
return{position:function(a){var m=this.offset(a),l={top:0,left:0},k=h(a[0]);
k!=g[0]&&(l=this.offset(angular.element(k)),l.top+=k.clientTop-k.scrollTop,l.left+=k.clientLeft-k.scrollLeft);
var e=a[0].getBoundingClientRect();
return{width:e.width||a.prop("offsetWidth"),height:e.height||a.prop("offsetHeight"),top:m.top-l.top,left:m.left-l.left}
},offset:function(b){var a=b[0].getBoundingClientRect();
return{width:a.width||b.prop("offsetWidth"),height:a.height||b.prop("offsetHeight"),top:a.top+(f.pageYOffset||g[0].documentElement.scrollTop),left:a.left+(f.pageXOffset||g[0].documentElement.scrollLeft)}
},positionElements:function(z,y,x,w){var v,u,t,s,r=x.split("-"),q=r[0],p=r[1]||"center";
v=w?this.offset(z):this.position(z),u=y.prop("offsetWidth"),t=y.prop("offsetHeight");
var o={center:function(){return v.left+v.width/2-u/2
},left:function(){return v.left
},right:function(){return v.left+v.width
}},n={center:function(){return v.top+v.height/2-t/2
},top:function(){return v.top
},bottom:function(){return v.top+v.height
}};
switch(q){case"right":s={top:n[p](),left:o[q]()};
break;
case"left":s={top:n[p](),left:v.left-u};
break;
case"bottom":s={top:n[q](),left:o[p]()};
break;
default:s={top:v.top-t,left:o[p]()}
}return s
}}
}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(v,u,t,s,r,q,p,o){var n=this,m={$setViewValue:angular.noop};
this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange","shortcutPropagation"],function(b,a){n[b]=angular.isDefined(u[b])?8>a?s(u[b])(v.$parent):v.$parent.$eval(u[b]):o[b]
}),angular.forEach(["minDate","maxDate"],function(a){u[a]?v.$parent.$watch(t(u[a]),function(b){n[a]=b?new Date(b):null,n.refreshView()
}):n[a]=o[a]?new Date(o[a]):null
}),v.datepickerMode=v.datepickerMode||o.datepickerMode,v.maxMode=n.maxMode,v.uniqueId="datepicker-"+v.$id+"-"+Math.floor(10000*Math.random()),angular.isDefined(u.initDate)?(this.activeDate=v.$parent.$eval(u.initDate)||new Date,v.$parent.$watch(u.initDate,function(b){b&&(m.$isEmpty(m.$modelValue)||m.$invalid)&&(n.activeDate=b,n.refreshView())
})):this.activeDate=new Date,v.isActive=function(a){return 0===n.compare(a.date,n.activeDate)?(v.activeDateId=a.uid,!0):!1
},this.init=function(b){m=b,m.$render=function(){n.render()
}
},this.render=function(){if(m.$viewValue){var d=new Date(m.$viewValue),c=!isNaN(d);
c?this.activeDate=d:q.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),m.$setValidity("date",c)
}this.refreshView()
},this.refreshView=function(){if(this.element){this._refreshView();
var b=m.$viewValue?new Date(m.$viewValue):null;
m.$setValidity("date-disabled",!b||this.element&&!this.isDisabled(b))
}},this.createDateObject=function(e,d){var f=m.$viewValue?new Date(m.$viewValue):null;
return{date:e,label:p(e,d),selected:f&&0===this.compare(e,f),disabled:this.isDisabled(e),current:0===this.compare(e,new Date),customClass:this.customClass(e)}
},this.isDisabled=function(a){return this.minDate&&this.compare(a,this.minDate)<0||this.maxDate&&this.compare(a,this.maxDate)>0||u.dateDisabled&&v.dateDisabled({date:a,mode:v.datepickerMode})
},this.customClass=function(a){return v.customClass({date:a,mode:v.datepickerMode})
},this.split=function(e,d){for(var f=[];
e.length>0;
){f.push(e.splice(0,d))
}return f
},v.select=function(a){if(v.datepickerMode===n.minMode){var d=m.$viewValue?new Date(m.$viewValue):new Date(0,0,0,0,0,0,0);
d.setFullYear(a.getFullYear(),a.getMonth(),a.getDate()),m.$setViewValue(d),m.$render()
}else{n.activeDate=a,v.datepickerMode=n.modes[n.modes.indexOf(v.datepickerMode)-1]
}},v.move=function(e){var d=n.activeDate.getFullYear()+e*(n.step.years||0),f=n.activeDate.getMonth()+e*(n.step.months||0);
n.activeDate.setFullYear(d,f,1),n.refreshView()
},v.toggleMode=function(a){a=a||1,v.datepickerMode===n.maxMode&&1===a||v.datepickerMode===n.minMode&&-1===a||(v.datepickerMode=n.modes[n.modes.indexOf(v.datepickerMode)+a])
},v.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};
var l=function(){r(function(){n.element[0].focus()
},0,!1)
};
v.$on("datepicker.focus",l),v.keydown=function(a){var d=v.keys[a.which];
if(d&&!a.shiftKey&&!a.altKey){if(a.preventDefault(),n.shortcutPropagation||a.stopPropagation(),"enter"===d||"space"===d){if(n.isDisabled(n.activeDate)){return
}v.select(n.activeDate),l()
}else{!a.ctrlKey||"up"!==d&&"down"!==d?(n.handleKeyDown(d,a),n.refreshView()):(v.toggleMode("up"===d?1:-1),l())
}}}
}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(h,g,l,k){var j=k[0],i=k[1];
i&&j.init(i)
}}
}).directive("daypicker",["dateFilter",function(b){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(a,p,o,n){function m(d,c){return 1!==c||d%4!==0||d%100===0&&d%400!==0?j[c]:29
}function l(g,f){var q=new Array(f),i=new Date(g),h=0;
for(i.setHours(12);
f>h;
){q[h++]=new Date(i),i.setDate(i.getDate()+1)
}return q
}function k(e){var d=new Date(e);
d.setDate(d.getDate()+4-(d.getDay()||7));
var f=d.getTime();
return d.setMonth(0),d.setDate(1),Math.floor(Math.round((f-d)/86400000)/7)+1
}a.showWeeks=n.showWeeks,n.step={months:1},n.element=p;
var j=[31,28,31,30,31,30,31,31,30,31,30,31];
n._refreshView=function(){var z=n.activeDate.getFullYear(),y=n.activeDate.getMonth(),x=new Date(z,y,1),w=n.startingDay-x.getDay(),v=w>0?7-w:-w,u=new Date(x);
v>0&&u.setDate(-v+1);
for(var t=l(u,42),s=0;
42>s;
s++){t[s]=angular.extend(n.createDateObject(t[s],n.formatDay),{secondary:t[s].getMonth()!==y,uid:a.uniqueId+"-"+s})
}a.labels=new Array(7);
for(var r=0;
7>r;
r++){a.labels[r]={abbr:b(t[r].date,n.formatDayHeader),full:b(t[r].date,"EEEE")}
}if(a.title=b(n.activeDate,n.formatDayTitle),a.rows=n.split(t,7),a.showWeeks){a.weekNumbers=[];
for(var h=(11-n.startingDay)%7,g=a.rows.length,e=0;
g>e;
e++){a.weekNumbers.push(k(a.rows[e][h].date))
}}},n.compare=function(d,c){return new Date(d.getFullYear(),d.getMonth(),d.getDate())-new Date(c.getFullYear(),c.getMonth(),c.getDate())
},n.handleKeyDown=function(e){var d=n.activeDate.getDate();
if("left"===e){d-=1
}else{if("up"===e){d-=7
}else{if("right"===e){d+=1
}else{if("down"===e){d+=7
}else{if("pageup"===e||"pagedown"===e){var f=n.activeDate.getMonth()+("pageup"===e?-1:1);
n.activeDate.setMonth(f,1),d=Math.min(m(n.activeDate.getFullYear(),n.activeDate.getMonth()),d)
}else{"home"===e?d=1:"end"===e&&(d=m(n.activeDate.getFullYear(),n.activeDate.getMonth()))
}}}}}n.activeDate.setDate(d)
},n.refreshView()
}}
}]).directive("monthpicker",["dateFilter",function(b){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(a,h,g,f){f.step={years:1},f.element=h,f._refreshView=function(){for(var j=new Array(12),i=f.activeDate.getFullYear(),e=0;
12>e;
e++){j[e]=angular.extend(f.createDateObject(new Date(i,e,1),f.formatMonth),{uid:a.uniqueId+"-"+e})
}a.title=b(f.activeDate,f.formatMonthTitle),a.rows=f.split(j,3)
},f.compare=function(d,c){return new Date(d.getFullYear(),d.getMonth())-new Date(c.getFullYear(),c.getMonth())
},f.handleKeyDown=function(e){var d=f.activeDate.getMonth();
if("left"===e){d-=1
}else{if("up"===e){d-=3
}else{if("right"===e){d+=1
}else{if("down"===e){d+=3
}else{if("pageup"===e||"pagedown"===e){var i=f.activeDate.getFullYear()+("pageup"===e?-1:1);
f.activeDate.setFullYear(i)
}else{"home"===e?d=0:"end"===e&&(d=11)
}}}}}f.activeDate.setMonth(d)
},f.refreshView()
}}
}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(h,g,l,k){function j(b){return parseInt((b-1)/i,10)*i+1
}var i=k.yearRange;
k.step={years:i},k.element=g,k._refreshView=function(){for(var a=new Array(i),e=0,d=j(k.activeDate.getFullYear());
i>e;
e++){a[e]=angular.extend(k.createDateObject(new Date(d+e,0,1),k.formatYear),{uid:h.uniqueId+"-"+e})
}h.title=[a[0].label,a[i-1].label].join(" - "),h.rows=k.split(a,5)
},k.compare=function(d,c){return d.getFullYear()-c.getFullYear()
},k.handleKeyDown=function(d){var c=k.activeDate.getFullYear();
"left"===d?c-=1:"up"===d?c-=5:"right"===d?c+=1:"down"===d?c+=5:"pageup"===d||"pagedown"===d?c+=("pageup"===d?-1:1)*k.step.years:"home"===d?c=j(k.activeDate.getFullYear()):"end"===d&&(c=j(k.activeDate.getFullYear())+i-1),k.activeDate.setFullYear(c)
},k.refreshView()
}}
}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(i,h,n,m,l,k,j){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(B,A,z,y){function g(o){return o.replace(/([A-Z])/g,function(p){return"-"+p.toLowerCase()
})
}function f(p){if(angular.isNumber(p)&&(p=new Date(p)),p){if(angular.isDate(p)&&!isNaN(p)){return p
}if(angular.isString(p)){var o=k.parse(p,d,B.date)||new Date(p);
return isNaN(o)?void 0:o
}return void 0
}return null
}function e(p,o){var r=p||o;
if(angular.isNumber(r)&&(r=new Date(r)),r){if(angular.isDate(r)&&!isNaN(r)){return !0
}if(angular.isString(r)){var q=k.parse(r,d)||new Date(r);
return !isNaN(q)
}return !1
}return !0
}var d,c=angular.isDefined(z.closeOnDateSelection)?B.$parent.$eval(z.closeOnDateSelection):j.closeOnDateSelection,b=angular.isDefined(z.datepickerAppendToBody)?B.$parent.$eval(z.datepickerAppendToBody):j.appendToBody;
B.showButtonBar=angular.isDefined(z.showButtonBar)?B.$parent.$eval(z.showButtonBar):j.showButtonBar,B.getText=function(o){return B[o+"Text"]||j[o+"Text"]
};
var a=!1;
if(j.html5Types[z.type]?(d=j.html5Types[z.type],a=!0):(d=z.datepickerPopup||j.datepickerPopup,z.$observe("datepickerPopup",function(p){var o=p||j.datepickerPopup;
if(o!==d&&(d=o,y.$modelValue=null,!d)){throw new Error("datepickerPopup must have a date format specified.")
}})),!d){throw new Error("datepickerPopup must have a date format specified.")
}if(a&&z.datepickerPopup){throw new Error("HTML5 date input types do not support custom formats.")
}var H=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
H.attr({"ng-model":"date","ng-change":"dateSelection()"});
var G=angular.element(H.children()[0]);
if(a&&"month"==z.type&&(G.attr("datepicker-mode",'"month"'),G.attr("min-mode","month")),z.datepickerOptions){var F=B.$parent.$eval(z.datepickerOptions);
F.initDate&&(B.initDate=F.initDate,G.attr("init-date","initDate"),delete F.initDate),angular.forEach(F,function(p,o){G.attr(g(o),p)
})
}B.watchData={},angular.forEach(["minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(o){if(z[o]){var q=h(z[o]);
if(B.$parent.$watch(q,function(r){B.watchData[o]=r
}),G.attr(g(o),"watchData."+o),"datepickerMode"===o){var p=q.assign;
B.$watch("watchData."+o,function(s,r){s!==r&&p(B.$parent,s)
})
}}}),z.dateDisabled&&G.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),z.showWeeks&&G.attr("show-weeks",z.showWeeks),z.customClass&&G.attr("custom-class","customClass({ date: date, mode: mode })"),a?y.$formatters.push(function(o){return B.date=o,o
}):(y.$$parserName="date",y.$validators.date=e,y.$parsers.unshift(f),y.$formatters.push(function(o){return B.date=o,y.$isEmpty(o)?o:l(o,d)
})),B.dateSelection=function(p){angular.isDefined(p)&&(B.date=p);
var o=B.date?l(B.date,d):"";
A.val(o),y.$setViewValue(o),c&&(B.isOpen=!1,A[0].focus())
},y.$viewChangeListeners.push(function(){B.date=k.parse(y.$viewValue,d,B.date)||new Date(y.$viewValue)
});
var E=function(o){B.isOpen&&o.target!==A[0]&&B.$apply(function(){B.isOpen=!1
})
},D=function(o){B.keydown(o)
};
A.bind("keydown",D),B.keydown=function(o){27===o.which?(o.preventDefault(),B.isOpen&&o.stopPropagation(),B.close()):40!==o.which||B.isOpen||(B.isOpen=!0)
},B.$watch("isOpen",function(o){o?(B.$broadcast("datepicker.focus"),B.position=b?m.offset(A):m.position(A),B.position.top=B.position.top+A.prop("offsetHeight"),n.bind("click",E)):n.unbind("click",E)
}),B.select=function(p){if("today"===p){var o=new Date;
angular.isDate(B.date)?(p=new Date(B.date),p.setFullYear(o.getFullYear(),o.getMonth(),o.getDate())):p=new Date(o.setHours(0,0,0,0))
}B.dateSelection(p)
},B.close=function(){B.isOpen=!1,A[0].focus()
};
var C=i(H)(B);
H.remove(),b?n.find("body").append(C):A.after(C),B.$on("$destroy",function(){C.remove(),A.unbind("keydown",D),n.unbind("click",E)
})
}}
}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(d,c){c.bind("click",function(b){b.preventDefault(),b.stopPropagation()
})
}}
}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document","$rootScope",function(g,f){var j=null;
this.open=function(a){j||(g.bind("click",i),g.bind("keydown",h)),j&&j!==a&&(j.isOpen=!1),j=a
},this.close=function(a){j===a&&(j=null,g.unbind("click",i),g.unbind("keydown",h))
};
var i=function(b){if(j&&(!b||"disabled"!==j.getAutoClose())){var k=j.getToggleElement();
if(!(b&&k&&k[0].contains(b.target))){var c=j.getElement();
b&&"outsideClick"===j.getAutoClose()&&c&&c[0].contains(b.target)||(j.isOpen=!1,f.$$phase||j.$apply())
}}},h=function(b){27===b.which&&(j.focusToggleElement(),i())
}
}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate","$position","$document",function(D,C,B,A,z,y,x,w){var v,u=this,t=D.$new(),s=A.openClass,r=angular.noop,q=C.onToggle?B(C.onToggle):angular.noop,p=!1;
this.init=function(a){u.$element=a,C.isOpen&&(v=B(C.isOpen),r=v.assign,D.$watch(v,function(b){t.isOpen=!!b
})),p=angular.isDefined(C.dropdownAppendToBody),p&&u.dropdownMenu&&(w.find("body").append(u.dropdownMenu),a.on("$destroy",function(){u.dropdownMenu.remove()
}))
},this.toggle=function(b){return t.isOpen=arguments.length?!!b:!t.isOpen
},this.isOpen=function(){return t.isOpen
},t.getToggleElement=function(){return u.toggleElement
},t.getAutoClose=function(){return C.autoClose||"always"
},t.getElement=function(){return u.$element
},t.focusToggleElement=function(){u.toggleElement&&u.toggleElement[0].focus()
},t.$watch("isOpen",function(a,f){if(p&&u.dropdownMenu){var e=x.positionElements(u.$element,u.dropdownMenu,"bottom-left",!0);
u.dropdownMenu.css({top:e.top+"px",left:e.left+"px",display:a?"block":"none"})
}y[a?"addClass":"removeClass"](u.$element,s),a?(t.focusToggleElement(),z.open(t)):z.close(t),r(D,a),angular.isDefined(a)&&a!==f&&q(D,{open:!!a})
}),D.$on("$locationChangeSuccess",function(){t.isOpen=!1
}),D.$on("$destroy",function(){t.$destroy()
})
}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(f,e,h,g){g.init(e)
}}
}).directive("dropdownMenu",function(){return{restrict:"AC",require:"?^dropdown",link:function(f,e,h,g){g&&(g.dropdownMenu=e)
}}
}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(g,f,j,i){if(i){i.toggleElement=f;
var h=function(a){a.preventDefault(),f.hasClass("disabled")||j.disabled||g.$apply(function(){i.toggle()
})
};
f.bind("click",h),f.attr({"aria-haspopup":!0,"aria-expanded":!1}),g.$watch(i.isOpen,function(b){f.attr("aria-expanded",!!b)
}),g.$on("$destroy",function(){f.unbind("click",h)
})
}}}
}),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var b=[];
return{add:function(a,d){b.push({key:a,value:d})
},get:function(a){for(var d=0;
d<b.length;
d++){if(a==b[d].key){return b[d]
}}},keys:function(){for(var a=[],d=0;
d<b.length;
d++){a.push(b[d].key)
}return a
},top:function(){return b[b.length-1]
},remove:function(a){for(var f=-1,e=0;
e<b.length;
e++){if(a==b[e].key){f=e;
break
}}return b.splice(f,1)[0]
},removeTop:function(){return b.splice(b.length-1,1)[0]
},length:function(){return b.length
}}
}}
}).directive("modalBackdrop",["$timeout",function(d){function c(a){a.animate=!1,d(function(){a.animate=!0
})
}return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(b,e){return b.addClass(e.backdropClass),c
}}
}]).directive("modalWindow",["$modalStack","$q",function(d,c){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(f,e){return e.templateUrl||"template/modal/window.html"
},link:function(h,g,b){g.addClass(b.windowClass||""),h.size=b.size,h.close=function(e){var f=d.getTop();
f&&f.value.backdrop&&"static"!=f.value.backdrop&&e.target===e.currentTarget&&(e.preventDefault(),e.stopPropagation(),d.dismiss(f.key,"backdrop click"))
},h.$isRendered=!0;
var a=c.defer();
b.$observe("modalRender",function(e){"true"==e&&a.resolve()
}),a.promise.then(function(){h.animate=!0;
var f=g[0].querySelectorAll("[autofocus]");
f.length?f[0].focus():g[0].focus();
var i=d.getTop();
i&&d.modalRendered(i.key)
})
}}
}]).directive("modalAnimationClass",[function(){return{compile:function(d,c){c.modalAnimation&&d.addClass(c.modalAnimationClass)
}}
}]).directive("modalTransclude",function(){return{link:function(g,f,j,i,h){h(g.$parent,function(b){f.empty(),f.append(b)
})
}}
}).factory("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$$stackedMap",function(F,E,D,C,B,A){function z(){for(var e=-1,d=r.keys(),f=0;
f<d.length;
f++){r.get(d[f]).value.backdrop&&(e=f)
}return e
}function y(e){var c=D.find("body").eq(0),f=r.get(e).value;
r.remove(e),w(f.modalDomEl,f.modalScope,function(){c.toggleClass(s,r.length()>0),x()
})
}function x(){if(u&&-1==z()){var b=t;
w(u,t,function(){b=null
}),u=void 0,t=void 0
}}function w(h,e,b){function a(){a.done||(a.done=!0,h.remove(),e.$destroy(),b&&b())
}e.animate=!1,h.attr("modal-animation")&&F.enabled()?h.one("$animate:close",function(){B.$evalAsync(a)
}):E(a)
}function v(e,d,f){return !e.value.modalScope.$broadcast("modal.closing",d,f).defaultPrevented
}var u,t,s="modal-open",r=A.createNew(),q={};
return B.$watch(z,function(b){t&&(t.index=b)
}),D.bind("keydown",function(d){var c;
27===d.which&&(c=r.top(),c&&c.value.keyboard&&(d.preventDefault(),B.$apply(function(){q.dismiss(c.key,"escape key press")
})))
}),q.open=function(d,c){var n=D[0].activeElement;
r.add(d,{deferred:c.deferred,renderDeferred:c.renderDeferred,modalScope:c.scope,backdrop:c.backdrop,keyboard:c.keyboard});
var m=D.find("body").eq(0),l=z();
if(l>=0&&!u){t=B.$new(!0),t.index=l;
var g=angular.element('<div modal-backdrop="modal-backdrop"></div>');
g.attr("backdrop-class",c.backdropClass),c.animation&&g.attr("modal-animation","true"),u=C(g)(t),m.append(u)
}var e=angular.element('<div modal-window="modal-window"></div>');
e.attr({"template-url":c.windowTemplateUrl,"window-class":c.windowClass,size:c.size,index:r.length()-1,animate:"animate"}).html(c.content),c.animation&&e.attr("modal-animation","true");
var o=C(e)(c.scope);
r.top().value.modalDomEl=o,r.top().value.modalOpener=n,m.append(o),m.addClass(s)
},q.close=function(e,d){var f=r.get(e);
return f&&v(f,d,!0)?(f.value.deferred.resolve(d),y(e),f.value.modalOpener.focus(),!0):!f
},q.dismiss=function(e,d){var f=r.get(e);
return f&&v(f,d,!1)?(f.value.deferred.reject(d),y(e),f.value.modalOpener.focus(),!0):!f
},q.dismissAll=function(d){for(var c=this.getTop();
c&&this.dismiss(c.key,d);
){c=this.getTop()
}},q.getTop=function(){return r.top()
},q.modalRendered=function(d){var c=r.get(d);
c&&c.value.renderDeferred.resolve()
},q
}]).provider("$modal",function(){var b={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$modalStack",function(r,q,p,o,n,m){function l(c){return c.template?p.when(c.template):o(angular.isFunction(c.templateUrl)?c.templateUrl():c.templateUrl)
}function k(d){var e=[];
return angular.forEach(d,function(c){(angular.isFunction(c)||angular.isArray(c))&&e.push(p.when(r.invoke(c)))
}),e
}var a={};
return a.open=function(d){var i=p.defer(),h=p.defer(),g=p.defer(),f={result:i.promise,opened:h.promise,rendered:g.promise,close:function(e){return m.close(f,e)
},dismiss:function(e){return m.dismiss(f,e)
}};
if(d=angular.extend({},b.options,d),d.resolve=d.resolve||{},!d.template&&!d.templateUrl){throw new Error("One of template or templateUrl options is required.")
}var c=p.all([l(d)].concat(k(d.resolve)));
return c.then(function(e){var v=(d.scope||q).$new();
v.$close=f.close,v.$dismiss=f.dismiss;
var u,t={},s=1;
d.controller&&(t.$scope=v,t.$modalInstance=f,angular.forEach(d.resolve,function(j,w){t[w]=e[s++]
}),u=n(d.controller,t),d.controllerAs&&(v[d.controllerAs]=u)),m.open(f,{scope:v,deferred:i,renderDeferred:g,content:e[0],animation:d.animation,backdrop:d.backdrop,keyboard:d.keyboard,backdropClass:d.backdropClass,windowClass:d.windowClass,windowTemplateUrl:d.windowTemplateUrl,size:d.size})
},function(e){i.reject(e)
}),c.then(function(){h.resolve(!0)
},function(e){h.reject(e)
}),f
},a
}]};
return b
}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(h,g,l){var k=this,j={$setViewValue:angular.noop},i=g.numPages?l(g.numPages).assign:angular.noop;
this.init=function(b,a){j=b,this.config=a,j.$render=function(){k.render()
},g.itemsPerPage?h.$parent.$watch(l(g.itemsPerPage),function(c){k.itemsPerPage=parseInt(c,10),h.totalPages=k.calculateTotalPages()
}):this.itemsPerPage=a.itemsPerPage,h.$watch("totalItems",function(){h.totalPages=k.calculateTotalPages()
}),h.$watch("totalPages",function(c){i(h.$parent,c),h.page>c?h.selectPage(c):j.$render()
})
},this.calculateTotalPages=function(){var a=this.itemsPerPage<1?1:Math.ceil(h.totalItems/this.itemsPerPage);
return Math.max(a||0,1)
},this.render=function(){h.page=parseInt(j.$viewValue,10)||1
},h.selectPage=function(a,d){h.page!==a&&a>0&&a<=h.totalPages&&(d&&d.target&&d.target.blur(),j.$setViewValue(a),j.$render())
},h.getText=function(a){return h[a+"Text"]||k.config[a+"Text"]
},h.noPrevious=function(){return 1===h.page
},h.noNext=function(){return h.page===h.totalPages
}
}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(d,c){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(v,u,t,s){function r(f,e,g){return{number:f,text:e,active:g}
}function q(C,B){var A=[],z=1,y=B,x=angular.isDefined(n)&&B>n;
x&&(b?(z=Math.max(C-Math.floor(n/2),1),y=z+n-1,y>B&&(y=B,z=y-n+1)):(z=(Math.ceil(C/n)-1)*n+1,y=Math.min(z+n-1,B)));
for(var w=z;
y>=w;
w++){var l=r(w,w,w===C);
A.push(l)
}if(x&&!b){if(z>1){var k=r(z-1,"...",!1);
A.unshift(k)
}if(B>y){var g=r(y+1,"...",!1);
A.push(g)
}}return A
}var p=s[0],o=s[1];
if(o){var n=angular.isDefined(t.maxSize)?v.$parent.$eval(t.maxSize):c.maxSize,b=angular.isDefined(t.rotate)?v.$parent.$eval(t.rotate):c.rotate;
v.boundaryLinks=angular.isDefined(t.boundaryLinks)?v.$parent.$eval(t.boundaryLinks):c.boundaryLinks,v.directionLinks=angular.isDefined(t.directionLinks)?v.$parent.$eval(t.directionLinks):c.directionLinks,p.init(o,c),t.maxSize&&v.$parent.$watch(d(t.maxSize),function(e){n=parseInt(e,10),p.render()
});
var a=p.render;
p.render=function(){a(),v.page>0&&v.page<=v.totalPages&&(v.pages=q(v.page,v.totalPages))
}
}}}
}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(b){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(a,l,k,j){var i=j[0],h=j[1];
h&&(a.align=angular.isDefined(k.align)?a.$parent.$eval(k.align):b.align,i.init(h,b))
}}
}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function f(i){var d=/[A-Z]/g,j="-";
return i.replace(d,function(k,c){return(c?j:"")+k.toLowerCase()
})
}var e={placement:"top",animation:!0,popupDelay:0,useContentExp:!1},h={mouseenter:"mouseleave",click:"click",focus:"blur"},g={};
this.options=function(b){angular.extend(g,b)
},this.setTriggers=function(b){angular.extend(h,b)
},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(l,k,d,c,b,a){return function(y,x,w,v){function u(n){var m=n||v.trigger||w,o=h[m]||m;
return{show:m,hide:o}
}v=angular.extend({},e,g,v);
var t=f(y),s=a.startSymbol(),j=a.endSymbol(),i="<div "+t+'-popup title="'+s+"title"+j+'" '+(v.useContentExp?'content-exp="contentExp()" ':'content="'+s+"content"+j+'" ')+'placement="'+s+"placement"+j+'" popup-class="'+s+"popupClass"+j+'" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';
return{restrict:"EA",compile:function(){var m=k(i);
return function(ai,ah,ag){function af(){S.isOpen?ad():ae()
}function ae(){(!U||ai.$eval(ag[x+"Enable"]))&&(V(),S.popupDelay?aa||(aa=d(ac,S.popupDelay,!1),aa.then(function(o){o()
})):ac()())
}function ad(){ai.$apply(function(){ab()
})
}function ac(){return aa=null,n&&(d.cancel(n),n=null),(v.useContentExp?S.contentExp():S.content)?(Z(),L.css({top:0,left:0,display:"block"}),S.$digest(),Q(),S.isOpen=!0,S.$apply(),Q):angular.noop
}function ab(){S.isOpen=!1,d.cancel(aa),aa=null,S.animation?n||(n=d(X,500)):X()
}function Z(){L&&X(),J=S.$new(),L=m(J,function(o){Y?c.find("body").append(o):ah.after(o)
}),J.$watch(function(){d(Q,0,!1)
}),v.useContentExp&&J.$watch("contentExp()",function(o){!o&&S.isOpen&&ab()
})
}function X(){n=null,L&&(L.remove(),L=null),J&&(J.$destroy(),J=null)
}function V(){T(),R(),P()
}function T(){S.popupClass=ag[x+"Class"]
}function R(){var o=ag[x+"Placement"];
S.placement=angular.isDefined(o)?o:v.placement
}function P(){var p=ag[x+"PopupDelay"],o=parseInt(p,10);
S.popupDelay=isNaN(o)?v.popupDelay:o
}function N(){var o=ag[x+"Trigger"];
O(),W=u(o),W.show===W.hide?ah.bind(W.show,af):(ah.bind(W.show,ae),ah.bind(W.hide,ad))
}var L,J,n,aa,Y=angular.isDefined(v.appendToBody)?v.appendToBody:!1,W=u(void 0),U=angular.isDefined(ag[x+"Enable"]),S=ai.$new(!0),Q=function(){if(L){var o=b.positionElements(ah,L,S.placement,Y);
o.top+="px",o.left+="px",L.css(o)
}};
S.origScope=ai,S.isOpen=!1,S.contentExp=function(){return ai.$eval(ag[y])
},v.useContentExp||ag.$observe(y,function(o){S.content=o,!o&&S.isOpen&&ab()
}),ag.$observe("disabled",function(o){o&&S.isOpen&&ab()
}),ag.$observe(x+"Title",function(o){S.title=o
});
var O=function(){ah.unbind(W.show,ae),ah.unbind(W.hide,ad)
};
N();
var M=ai.$eval(ag[x+"Animation"]);
S.animation=angular.isDefined(M)?!!M:v.animation;
var K=ai.$eval(ag[x+"AppendToBody"]);
Y=angular.isDefined(K)?K:Y,Y&&ai.$on("$locationChangeSuccess",function(){S.isOpen&&ab()
}),ai.$on("$destroy",function(){d.cancel(n),d.cancel(aa),O(),X(),S=null
})
}
}}
}
}]
}).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(f,e,h,g){return{link:function(r,q,p){var o,n,d,c=r.$eval(p.tooltipTemplateTranscludeScope),b=0,a=function(){n&&(n.remove(),n=null),o&&(o.$destroy(),o=null),d&&(f.leave(d).then(function(){n=null
}),n=d,d=null)
};
r.$watch(e.parseAsResourceUrl(p.tooltipTemplateTransclude),function(i){var j=++b;
i?(g(i,!0).then(function(m){if(j===b){var l=c.$new(),k=m,s=h(k)(l,function(t){a(),f.enter(t,q)
});
o=l,d=s,o.$emit("$includeContentLoaded",i)
}},function(){j===b&&(a(),r.$emit("$includeContentError",i))
}),r.$emit("$includeContentRequested",i)):a()
}),r.$on("$destroy",a)
}}
}]).directive("tooltipClasses",function(){return{restrict:"A",link:function(e,d,f){e.placement&&d.addClass(e.placement),e.popupClass&&d.addClass(e.popupClass),e.animation()&&d.addClass(f.tooltipAnimationClass)
}}
}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}
}).directive("tooltip",["$tooltip",function(b){return b("tooltip","tooltip","mouseenter")
}]).directive("tooltipTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html"}
}).directive("tooltipTemplate",["$tooltip",function(b){return b("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})
}]).directive("tooltipHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html"}
}).directive("tooltipHtml",["$tooltip",function(b){return b("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})
}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}
}).value("tooltipHtmlUnsafeSuppressDeprecated",!1).directive("tooltipHtmlUnsafe",["$tooltip","tooltipHtmlUnsafeSuppressDeprecated","$log",function(e,d,f){return d||f.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."),e("tooltipHtmlUnsafe","tooltip","mouseenter")
}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html"}
}).directive("popoverTemplate",["$tooltip",function(b){return b("popoverTemplate","popover","click",{useContentExp:!0})
}]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}
}).directive("popover",["$tooltip",function(b){return b("popover","popover","click")
}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(g,f,j){var i=this,h=angular.isDefined(f.animate)?g.$parent.$eval(f.animate):j.animate;
this.bars=[],g.max=angular.isDefined(g.max)?g.max:j.max,this.addBar=function(a,d){h||d.css({transition:"none"}),this.bars.push(a),a.$watch("value",function(b){a.percent=+(100*b/g.max).toFixed(2)
}),a.$on("$destroy",function(){d=null,i.removeBar(a)
})
},this.removeBar=function(b){this.bars.splice(this.bars.indexOf(b),1)
}
}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}
}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(f,e,h,g){g.addBar(f,e)
}}
}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(f,e,h,g){g.addBar(f,angular.element(e.children()[0]))
}}
}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(f,e,h){var g={$setViewValue:angular.noop};
this.init=function(b){g=b,g.$render=this.render,g.$formatters.push(function(c){return angular.isNumber(c)&&c<<0!==c&&(c=Math.round(c)),c
}),this.stateOn=angular.isDefined(e.stateOn)?f.$parent.$eval(e.stateOn):h.stateOn,this.stateOff=angular.isDefined(e.stateOff)?f.$parent.$eval(e.stateOff):h.stateOff;
var a=angular.isDefined(e.ratingStates)?f.$parent.$eval(e.ratingStates):new Array(angular.isDefined(e.max)?f.$parent.$eval(e.max):h.max);
f.range=this.buildTemplateObjects(a)
},this.buildTemplateObjects=function(i){for(var d=0,j=i.length;
j>d;
d++){i[d]=angular.extend({index:d},{stateOn:this.stateOn,stateOff:this.stateOff},i[d])
}return i
},f.rate=function(a){!f.readonly&&a>=0&&a<=f.range.length&&(g.$setViewValue(a),g.$render())
},f.enter=function(a){f.readonly||(f.value=a),f.onHover({value:a})
},f.reset=function(){f.value=g.$viewValue,f.onLeave()
},f.onKeydown=function(a){/(37|38|39|40)/.test(a.which)&&(a.preventDefault(),a.stopPropagation(),f.rate(f.value+(38===a.which||39===a.which?1:-1)))
},this.render=function(){f.value=g.$viewValue
}
}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(h,g,l,k){var j=k[0],i=k[1];
j.init(i)
}}
}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(f){var e=this,h=e.tabs=f.tabs=[];
e.select=function(b){angular.forEach(h,function(a){a.active&&a!==b&&(a.active=!1,a.onDeselect())
}),b.active=!0,b.onSelect()
},e.addTab=function(b){h.push(b),1===h.length&&b.active!==!1?b.active=!0:b.active?e.select(b):b.active=!1
},e.removeTab=function(b){var d=h.indexOf(b);
if(b.active&&h.length>1&&!g){var c=d==h.length-1?d-1:d+1;
e.select(h[c])
}h.splice(d,1)
};
var g;
f.$on("$destroy",function(){g=!0
})
}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(e,d,f){e.vertical=angular.isDefined(f.vertical)?e.$parent.$eval(f.vertical):!1,e.justified=angular.isDefined(f.justified)?e.$parent.$eval(f.justified):!1
}}
}).directive("tab",["$parse","$log",function(d,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(f,b,a){return function(j,i,h,e){j.$watch("active",function(g){g&&e.select(j)
}),j.disabled=!1,h.disable&&j.$parent.$watch(d(h.disable),function(g){j.disabled=!!g
}),h.disabled&&(c.warn('Use of "disabled" attribute has been deprecated, please use "disable"'),j.$parent.$watch(d(h.disabled),function(g){j.disabled=!!g
})),j.select=function(){j.disabled||(j.active=!0)
},e.addTab(j),j.$on("$destroy",function(){e.removeTab(j)
}),j.$transcludeFn=a
}
}}
}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(d,c){d.$watch("headingElement",function(b){b&&(c.html(""),c.append(b))
})
}}
}]).directive("tabContentTransclude",function(){function b(c){return c.tagName&&(c.hasAttribute("tab-heading")||c.hasAttribute("data-tab-heading")||"tab-heading"===c.tagName.toLowerCase()||"data-tab-heading"===c.tagName.toLowerCase())
}return{restrict:"A",require:"^tabset",link:function(a,h,g){var f=a.$eval(g.tabContentTransclude);
f.$transcludeFn(f.$parent,function(c){angular.forEach(c,function(d){b(d)?f.headingElement=d:h.append(d)
})
})
}}
}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(J,I,H,G,F,E){function D(){var a=parseInt(J.hours,10),d=J.showMeridian?a>0&&13>a:a>=0&&24>a;
return d?(J.showMeridian&&(12===a&&(a=0),J.meridian===u[1]&&(a+=12)),a):void 0
}function C(){var a=parseInt(J.minutes,10);
return a>=0&&60>a?a:void 0
}function B(b){return angular.isDefined(b)&&b.toString().length<2?"0"+b:b.toString()
}function A(b){z(),v.$setViewValue(new Date(w)),y(b)
}function z(){v.$setValidity("time",!0),J.invalidHours=!1,J.invalidMinutes=!1
}function y(a){var f=w.getHours(),e=w.getMinutes();
J.showMeridian&&(f=0===f||12===f?12:f%12),J.hours="h"===a?f:B(f),"m"!==a&&(J.minutes=B(e)),J.meridian=w.getHours()<12?u[0]:u[1]
}function x(d){var c=new Date(w.getTime()+60000*d);
w.setHours(c.getHours(),c.getMinutes()),A()
}var w=new Date,v={$setViewValue:angular.noop},u=angular.isDefined(I.meridians)?J.$parent.$eval(I.meridians):E.meridians||F.DATETIME_FORMATS.AMPMS;
this.init=function(l,k){v=l,v.$render=this.render,v.$formatters.unshift(function(c){return c?new Date(c):null
});
var j=k.eq(0),f=k.eq(1),b=angular.isDefined(I.mousewheel)?J.$parent.$eval(I.mousewheel):E.mousewheel;
b&&this.setupMousewheelEvents(j,f);
var a=angular.isDefined(I.arrowkeys)?J.$parent.$eval(I.arrowkeys):E.arrowkeys;
a&&this.setupArrowkeyEvents(j,f),J.readonlyInput=angular.isDefined(I.readonlyInput)?J.$parent.$eval(I.readonlyInput):E.readonlyInput,this.setupInputEvents(j,f)
};
var t=E.hourStep;
I.hourStep&&J.$parent.$watch(H(I.hourStep),function(b){t=parseInt(b,10)
});
var s=E.minuteStep;
I.minuteStep&&J.$parent.$watch(H(I.minuteStep),function(b){s=parseInt(b,10)
}),J.showMeridian=E.showMeridian,I.showMeridian&&J.$parent.$watch(H(I.showMeridian),function(a){if(J.showMeridian=!!a,v.$error.time){var f=D(),e=C();
angular.isDefined(f)&&angular.isDefined(e)&&(w.setHours(f),A())
}else{y()
}}),this.setupMousewheelEvents=function(a,f){var e=function(d){d.originalEvent&&(d=d.originalEvent);
var c=d.wheelDelta?d.wheelDelta:-d.deltaY;
return d.detail||c>0
};
a.bind("mousewheel wheel",function(c){J.$apply(e(c)?J.incrementHours():J.decrementHours()),c.preventDefault()
}),f.bind("mousewheel wheel",function(c){J.$apply(e(c)?J.incrementMinutes():J.decrementMinutes()),c.preventDefault()
})
},this.setupArrowkeyEvents=function(a,d){a.bind("keydown",function(c){38===c.which?(c.preventDefault(),J.incrementHours(),J.$apply()):40===c.which&&(c.preventDefault(),J.decrementHours(),J.$apply())
}),d.bind("keydown",function(c){38===c.which?(c.preventDefault(),J.incrementMinutes(),J.$apply()):40===c.which&&(c.preventDefault(),J.decrementMinutes(),J.$apply())
})
},this.setupInputEvents=function(a,f){if(J.readonlyInput){return J.updateHours=angular.noop,void (J.updateMinutes=angular.noop)
}var e=function(d,g){v.$setViewValue(null),v.$setValidity("time",!1),angular.isDefined(d)&&(J.invalidHours=d),angular.isDefined(g)&&(J.invalidMinutes=g)
};
J.updateHours=function(){var b=D();
angular.isDefined(b)?(w.setHours(b),A("h")):e(!0)
},a.bind("blur",function(){!J.invalidHours&&J.hours<10&&J.$apply(function(){J.hours=B(J.hours)
})
}),J.updateMinutes=function(){var b=C();
angular.isDefined(b)?(w.setMinutes(b),A("m")):e(void 0,!0)
},f.bind("blur",function(){!J.invalidMinutes&&J.minutes<10&&J.$apply(function(){J.minutes=B(J.minutes)
})
})
},this.render=function(){var b=v.$viewValue;
isNaN(b)?(v.$setValidity("time",!1),G.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(w=b),z(),y())
},J.incrementHours=function(){x(60*t)
},J.decrementHours=function(){x(60*-t)
},J.incrementMinutes=function(){x(s)
},J.decrementMinutes=function(){x(-s)
},J.toggleMeridian=function(){x(720*(w.getHours()<12?1:-1))
}
}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(h,g,l,k){var j=k[0],i=k[1];
i&&j.init(i,g.find("input"))
}}
}),angular.module("ui.bootstrap.transition",[]).value("$transitionSuppressDeprecated",!1).factory("$transition",["$q","$timeout","$rootScope","$log","$transitionSuppressDeprecated",function(t,s,r,q,p){function o(d){for(var c in d){if(void 0!==m.style[c]){return d[c]
}}}p||q.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
var n=function(v,u,g){g=g||{};
var c=t.defer(),b=n[g.animation?"animationEndEventName":"transitionEndEventName"],a=function(){r.$apply(function(){v.unbind(b,a),c.resolve(v)
})
};
return b&&v.bind(b,a),s(function(){angular.isString(u)?v.addClass(u):angular.isFunction(u)?u(v):angular.isObject(u)&&v.css(u),b||c.resolve(v)
}),c.promise.cancel=function(){b&&v.unbind(b,a),c.reject("Transition cancelled")
},c.promise
},m=document.createElement("trans"),l={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},k={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};
return n.transitionEndEventName=o(l),n.animationEndEventName=o(k),n
}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(d){var c=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
return{parse:function(b){var a=b.match(c);
if(!a){throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+b+'".')
}return{itemName:a[3],source:d(a[4]),viewMapper:d(a[2]||a[1]),modelMapper:d(a[1])}
}}
}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(j,i,p,o,n,m,l){var k=[9,13,27,38,40];
return{require:"ngModel",link:function(Z,Y,X,W){var V,U=Z.$eval(X.typeaheadMinLength)||1,T=Z.$eval(X.typeaheadWaitMs)||0,S=Z.$eval(X.typeaheadEditable)!==!1,Q=i(X.typeaheadLoading).assign||angular.noop,O=i(X.typeaheadOnSelect),M=X.typeaheadInputFormatter?i(X.typeaheadInputFormatter):void 0,K=X.typeaheadAppendToBody?Z.$eval(X.typeaheadAppendToBody):!1,I=Z.$eval(X.typeaheadFocusFirst)!==!1,g=i(X.ngModel).assign,e=l.parse(X.typeahead),c=Z.$new();
Z.$on("$destroy",function(){c.$destroy()
});
var b="typeahead-"+c.$id+"-"+Math.floor(10000*Math.random());
Y.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":b});
var a=angular.element("<div typeahead-popup></div>");
a.attr({id:b,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(X.typeaheadTemplateUrl)&&a.attr("template-url",X.typeaheadTemplateUrl);
var R=function(){c.matches=[],c.activeIdx=-1,Y.attr("aria-expanded",!1)
},P=function(q){return b+"-option-"+q
};
c.$watch("activeIdx",function(q){0>q?Y.removeAttr("aria-activedescendant"):Y.attr("aria-activedescendant",P(q))
});
var N=function(r){var q={$viewValue:r};
Q(Z,!0),p.when(e.source(Z,q)).then(function(u){var t=r===W.$viewValue;
if(t&&V){if(u&&u.length>0){c.activeIdx=I?0:-1,c.matches.length=0;
for(var s=0;
s<u.length;
s++){q[e.itemName]=u[s],c.matches.push({id:P(s),label:e.viewMapper(c,q),model:u[s]})
}c.query=r,c.position=K?m.offset(Y):m.position(Y),c.position.top=c.position.top+Y.prop("offsetHeight"),Y.attr("aria-expanded",!0)
}else{R()
}}t&&Q(Z,!1)
},function(){R(),Q(Z,!1)
})
};
R(),c.query=void 0;
var L,J=function(q){L=o(function(){N(q)
},T)
},h=function(){L&&o.cancel(L)
};
W.$parsers.unshift(function(q){return V=!0,q&&q.length>=U?T>0?(h(),J(q)):N(q):(Q(Z,!1),h(),R()),S?q:q?void W.$setValidity("editable",!1):(W.$setValidity("editable",!0),q)
}),W.$formatters.push(function(r){var q,t,s={};
return S||W.$setValidity("editable",!0),M?(s.$model=r,M(Z,s)):(s[e.itemName]=r,q=e.viewMapper(Z,s),s[e.itemName]=void 0,t=e.viewMapper(Z,s),q!==t?q:r)
}),c.select=function(r){var q,t,s={};
s[e.itemName]=t=c.matches[r].model,q=e.modelMapper(Z,s),g(Z,q),W.$setValidity("editable",!0),W.$setValidity("parse",!0),O(Z,{$item:t,$model:q,$label:e.viewMapper(Z,s)}),R(),o(function(){Y[0].focus()
},0,!1)
},Y.bind("keydown",function(q){0!==c.matches.length&&-1!==k.indexOf(q.which)&&(-1!=c.activeIdx||13!==q.which&&9!==q.which)&&(q.preventDefault(),40===q.which?(c.activeIdx=(c.activeIdx+1)%c.matches.length,c.$digest()):38===q.which?(c.activeIdx=(c.activeIdx>0?c.activeIdx:c.matches.length)-1,c.$digest()):13===q.which||9===q.which?c.$apply(function(){c.select(c.activeIdx)
}):27===q.which&&(q.stopPropagation(),R(),c.$digest()))
}),Y.bind("blur",function(){V=!1
});
var f=function(q){Y[0]!==q.target&&(R(),c.$digest())
};
n.bind("click",f),Z.$on("$destroy",function(){n.unbind("click",f),K&&d.remove(),a.remove()
});
var d=j(a)(c);
K?n.find("body").append(d):Y.after(d)
}}
}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(e,d,f){e.templateUrl=f.templateUrl,e.isOpen=function(){return e.matches.length>0
},e.isActive=function(a){return e.active==a
},e.selectActive=function(a){e.active=a
},e.selectMatch=function(a){e.select({activeIdx:a})
}
}}
}).directive("typeaheadMatch",["$templateRequest","$compile","$parse",function(e,d,f){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(h,c,b){var a=f(b.templateUrl)(h.$parent)||"template/typeahead/typeahead-match.html";
e(a).then(function(g){d(g.trim())(h,function(i){c.replaceWith(i)
})
})
}}
}]).filter("typeaheadHighlight",function(){function b(c){return c.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
}return function(a,d){return d?(""+a).replace(new RegExp(b(d),"gi"),"<strong>$&</strong>"):a
}
}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(b){b.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href="javascript:void(0)" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(b){b.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')
}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(b){b.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(b){b.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:\'index\' track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(b){b.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(b){b.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(b){b.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}" ng-class="dt.customClass">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(b){b.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(b){b.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(b){b.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(b){b.put("template/modal/backdrop.html",'<div class="modal-backdrop"\n     modal-animation-class="fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(b){b.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n	ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')
}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(b){b.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n</ul>')
}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(b){b.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1, $event)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages, $event)">{{getText(\'last\')}}</a></li>\n</ul>')
}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(b){b.put("template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(b){b.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(b){b.put("template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(b){b.put("template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(b){b.put("template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
}]),angular.module("template/popover/popover-window.html",[]).run(["$templateCache",function(b){b.put("template/popover/popover-window.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen, fade: animation }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" tooltip-template-transclude></div>\n  </div>\n</div>\n')
}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(b){b.put("template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(b){b.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n')
}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(b){b.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')
}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(b){b.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>\n')
}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(b){b.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(b){b.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(b){b.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(b){b.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(b){b.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(b){b.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');