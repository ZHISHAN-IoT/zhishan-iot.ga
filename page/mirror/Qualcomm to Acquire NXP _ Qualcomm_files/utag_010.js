//tealium universal tag - utag.loader ut4.0.201707241750, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_qualcomm_qualcomm-react=(\/\/tags\.tiqcdn\.com\/utag\/qualcomm\/[^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/qualcomm/qualcomm-react/prod/';}}})();}catch(e){};try{window.utag_cfg_ovrd={noview:true};if((document.location.href.indexOf('/products/snapdragon/4k-video-contest?linkId=')>-1)||(document.location.href.indexOf('qroniclesofinvention')>-1)||((document.location.href.indexOf('products/snapdragon/4k-video-contest')>-1)&&(document.location.href.indexOf('?')>-1)))
{window.utag_cfg_ovrd={noview:false};}}catch(e){};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"qualcomm.qualcomm-react",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],db_log:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],lq:[],bq:{},bk:{},rf:0,ri:0,rp:0,rq:[],ready_q:[],sendq:{"pending":0},run_ready_q:function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};}},lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d,g){utag.DB('WQ:'+utag.loader.wq.length);try{if(utag.udoname&&utag.udoname.indexOf(".")<0){utag.ut.merge(utag.data,window[utag.udoname],0);}
if(utag.cfg.load_rules_at_wait){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};d=0;g=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load==4){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.load>0){g.push(b);d++;}else{this.f[b.id]=1;}}
for(a=0;a<g.length;a++){utag.loader.AS(g[a]);}
if(d==0){utag.loader.END();}},AS:function(a,b,c,d){utag.send[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'ut'+'ag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+(a.v?utag.cfg.template+a.v:utag.cfg.v);utag.rpt['l_'+a.id]=a.src;b=document;this.f[a.id]=0;if(a.load==2){utag.DB("Attach sync: "+a.src);a.uid=a.id;b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')
if(typeof a.cb!='undefined')a.cb();}else if(a.load==1||a.load==3){if(b.createElement){c='utag_qualcomm.qualcomm-react_'+a.id;if(!b.getElementById(c)){d={src:a.src,id:c,uid:a.id,loc:a.loc}
if(a.load==3){d.type="iframe"};if(typeof a.cb!='undefined')d.cb=a.cb;utag.ut.loader(d);}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},OU:function(a,b,c,d,f){try{if(typeof utag.data['cp.OPTOUTMULTI']!='undefined'){c=utag.loader.cfg;a=utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');for(d=0;d<a.length;d++){b=a[d].split(':');if(b[1]*1!==0){if(b[0].indexOf('c')==0){for(f in utag.loader.GV(c)){if(c[f].tcat==b[0].substring(1))c[f].load=0}}else if(b[0]*1==0){utag.cfg.nocookie=true}else{for(f in utag.loader.GV(c)){if(c[f].tid==b[0])c[f].load=0}}}}}}catch(e){utag.DB(e)}},RDdom:function(o){var d=document||{},l=location||{};o["dom.referrer"]=d.referrer;o["dom.title"]=""+d.title;o["dom.domain"]=""+l.hostname;o["dom.query_string"]=(""+l.search).substring(1);o["dom.hash"]=(""+l.hash).substring(1);o["dom.url"]=""+d.URL;o["dom.pathname"]=""+l.pathname;o["dom.viewport_height"]=window.innerHeight||(d.documentElement?d.documentElement.clientHeight:960);o["dom.viewport_width"]=window.innerWidth||(d.documentElement?d.documentElement.clientWidth:960);},RDcp:function(o,b,c,d){b=utag.loader.RC();for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(utag.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=utag.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";utag.DB(e)};if(utag.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=utag.ut.flatten({va:JSON.parse(a)});utag.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){utag.DB(e)}},RDut:function(o,a){var t={};var d=new Date();var m=(utag.ut.typeOf(d.toISOString)=="function");o["ut.domain"]=utag.cfg.domain;o["ut.version"]=utag.cfg.v;t["tealium_event"]=o["ut.event"]=a||"view";t["tealium_visitor_id"]=o["ut.visitor_id"]=o["cp.utag_main_v_id"];t["tealium_session_id"]=o["ut.session_id"]=o["cp.utag_main_ses_id"];try{t["tealium_datasource"]="";t["tealium_account"]=o["ut.account"]=utag.cfg.utid.split("/")[0];t["tealium_profile"]=o["ut.profile"]=utag.cfg.utid.split("/")[1];t["tealium_environment"]=o["ut.env"]=utag.cfg.path.split("/")[6];}catch(e){utag.DB(e)}
t["tealium_random"]=Math.random().toFixed(16).substring(2);t["tealium_library_name"]="ut"+"ag.js";t["tealium_library_version"]=(utag.cfg.template+"0").substring(2);t["tealium_timestamp_epoch"]=Math.floor(d.getTime()/1000);t["tealium_timestamp_utc"]=(m?d.toISOString():"");d.setHours(d.getHours()-(d.getTimezoneOffset()/60));t["tealium_timestamp_local"]=(m?d.toISOString().replace("Z",""):"");utag.ut.merge(o,t,0);},RDses:function(o,a,c){a=(new Date()).getTime();c=(a+parseInt(utag.cfg.session_timeout))+"";if(!o["cp.utag_main_ses_id"]){o["cp.utag_main_ses_id"]=a+"";o["cp.utag_main__ss"]="1";o["cp.utag_main__sn"]=(1+parseInt(o["cp.utag_main__sn"]||0))+"";}else{o["cp.utag_main__ss"]="0";}
o["cp.utag_main__pn"]=o["cp.utag_main__pn"]||"1";o["cp.utag_main__st"]=c;utag.loader.SC("utag_main",{"_sn":(o["cp.utag_main__sn"]||1),"_ss":o["cp.utag_main__ss"],"_st":c,"ses_id":(o["cp.utag_main_ses_id"]||a)+";exp-session","_pn":o["cp.utag_main__pn"]+";exp-session"});},RDpv:function(o){if(typeof utag.pagevars=="function"){utag.DB("Read page variables");utag.pagevars(o);}},RD:function(o,a){utag.DB("utag.loader.RD");utag.DB(o);utag.loader.RDcp(o);if(!utag.loader.rd_flag){utag.loader.rd_flag=1;o["cp.utag_main_v_id"]=o["cp.utag_main_v_id"]||utag.ut.vi((new Date()).getTime());o["cp.utag_main__pn"]=(1+parseInt(o["cp.utag_main__pn"]||0))+"";utag.loader.SC("utag_main",{"v_id":o["cp.utag_main_v_id"]});utag.loader.RDses(o);}
if(a&&!utag.cfg.noview)utag.loader.RDses(o);utag.loader.RDqp(o);utag.loader.RDmeta(o);utag.loader.RDdom(o);utag.loader.RDut(o,a||"view");utag.loader.RDpv(o);utag.loader.RDva(o);},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)$/;t=(new Date()).getTime();for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){utag.DB(er)};}
o[ck]={};for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){if(!utag.loader.cfg){return}
if(this.ol==0){if(utag.loader.cfg[a].block&&utag.loader.cfg[a].cbf){this.f[a]=1;delete utag.loader.bq[a];}
for(b in utag.loader.GV(utag.loader.bq)){if(utag.loader.cfg[a].load==4&&utag.loader.cfg[a].wait==0){utag.loader.bk[a]=1;utag.DB("blocked: "+a);}
utag.DB("blocking: "+b);return;}
utag.loader.INIT();return;}
utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(utag.cfg.noview!=true){if(utag.loader.cfg[a].send){utag.DB("SENDING: "+a);try{if(utag.loader.sendq.pending>0&&utag.loader.sendq[a]){utag.DB("utag.loader.LOAD:sendq: "+a);while(d=utag.loader.sendq[a].shift()){utag.DB(d);utag.sender[a].send(d.event,utag.handler.C(d.data));utag.loader.sendq.pending--;}}else{utag.sender[a].send('view',utag.handler.C(utag.data));}
utag.rpt['s_'+a]=0;}catch(e){utag.DB(e);utag.rpt['s_'+a]=1;}}}
if(utag.loader.rf==0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
utag.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!utag.data){try{utag.cl={'_all_':1};utag.loader.initdata();utag.loader.RD(utag.data);}catch(e){utag.DB(e)};}
if((document.attachEvent||utag.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;utag.DB("loader.END");b=utag.data;if(utag.handler.base&&utag.handler.base!='*'){e=utag.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")utag.handler.df[e[d]]=b[e[d]]}}else if(utag.handler.base=='*'){utag.ut.merge(utag.handler.df,b,1);}
utag.rpt['r_0']="t";for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}
utag.rpt.ts['s']=new Date();v=".tiqcdn.com";w=utag.cfg.path.indexOf(v);if(w>0&&b["cp.utag_main__ss"]==1&&!utag.cfg.no_session_count)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");utag.handler.INIT();}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){var t;if(utag.ut.typeOf(a)=="object"){t=utag.handler.C(a)}else{t=a}
utag.db_log.push(t);try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a,cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a,cfg:{cb:c,uids:d}})},track:function(a,b,c,d){if(typeof a=="string")a={event:a,data:b,cfg:{cb:c}};for(d in utag.loader.GV(utag.o)){try{utag.o[d].handler.trigger(a.event||"view",a.data||a,a.cfg)}catch(e){utag.DB(e)};}
if(a.cfg&&a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};return true},handler:{base:"site_brand,site_name,site_region,site_tier,country_code,language_code",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){utag.DB('utag.handler.INIT');if(utag.initcatch){utag.initcatch=0;return}
this.iflag=1;a=utag.loader.q.length;if(a>0){utag.DB("Loader queue");for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){utag.DB("Load Rules");for(var d in utag.loader.GV(utag.cond)){utag.cond[d]=false;}
utag.DB(b);utag.loader.loadrules(b);utag.DB(utag.cond);utag.loader.initcfg();utag.loader.OU();for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
utag.DB("RE: "+c);if(c=="alr")utag.DB("All Tags EXTENSIONS");utag.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);utag.rpt['ex_'+d]=0}}catch(er){utag.DB(er);utag.rpt['ex_'+d]=1;utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});}}
utag.DB(b);return g;}},trigger:function(a,b,c,d,e,f){utag.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};utag.DB(b);if(!this.iflag){utag.DB("trigger:called before tags loaded");for(d in utag.loader.f){if(!(utag.loader.f[d]===1))utag.DB('Tag '+d+' did not LOAD')}
utag.loader.q.push({a:a,b:utag.handler.C(b),c:c});return;}
utag.ut.merge(b,this.df,0);utag.loader.RD(b,a);utag.cfg.noview=false;function sendTag(a,b,d){try{if(typeof utag.sender[d]!="undefined"){utag.DB("SENDING: "+d);utag.sender[d].send(a,utag.handler.C(b));utag.rpt['s_'+d]=0;}else if(utag.loader.cfg[d].load!=2&&utag.loader.cfg[d].s2s!=1){utag.loader.sendq[d]=utag.loader.sendq[d]||[];utag.loader.sendq[d].push({"event":a,"data":utag.handler.C(b)});utag.loader.sendq.pending++;utag.loader.AS({id:d,load:1});}}catch(e){utag.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];sendTag(a,b,d);}}else if(utag.cfg.load_rules_ajax){this.RE(a,b,"blr");this.LR(b);this.RE(a,b,"alr");for(f=0;f<utag.loader.cfgsort.length;f++){d=utag.loader.cfgsort[f];if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in utag.loader.GV(utag.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");},C:function(a,b,c){b={};for(c in utag.loader.GV(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!utag.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;}
return utag.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=utag.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return utag.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||c instanceof Array){a[p]=c;}else{if(utag.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d]}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=unescape(a)};return b},encode:function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=escape(a)};return b},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}},loader:function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}
o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}
if(o.id){b.id=o.id};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}}};utag.o['qualcomm.qualcomm-react']=utag;utag.cfg={template:"ut4.42.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,noconsole:false,session_timeout:1800000,readywait:0,noload:0,domain:utag.loader.lh(),path:"//tags.tiqcdn.com/utag/qualcomm/qualcomm-react/prod/",utid:"qualcomm/qualcomm-react/201707241507"};utag.cfg.v=utag.cfg.template+"201707241750";utag.cond={29:0,32:0,33:0,34:0,35:0};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(_pd,_pc){var d=_pd||utag.data;var c=_pc||utag.cond;for(var l in utag.loader.GV(c)){switch(l){case'29':try{c[29]|=(d['dom.url'].toString().indexOf('qualcomm.com')>-1)}catch(e){utag.DB(e)};break;case'32':try{c[32]|=(d['dom.pathname'].toString().indexOf('/invention/5g')>-1)}catch(e){utag.DB(e)};break;case'33':try{c[33]|=(typeof d['label']!='undefined'&&d['label'].toString().toLowerCase().indexOf('Anyone can talk about 5G. We’re creating it.'.toLowerCase())>-1&&typeof d['action']!='undefined'&&d['action'].toString().toLowerCase().indexOf('start'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'34':try{c[34]|=(typeof d['label']!='undefined'&&d['label'].toString().toLowerCase().indexOf('news/onq/2017/01/05/ces-2017-steve-mollenkopf-keynote'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'35':try{c[35]|=(d['dom.url'].toString().indexOf('/invention/yoursmartphone')>-1)}catch(e){utag.DB(e)};break;}}};utag.pre=function(){utag.loader.initdata();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){try{if(1){if(b.tealium_event=='view'){utag.ut.merge(b,utag.data,0);utag.ut.merge(utag.data,b,1);}}}catch(e){utag.DB(e)}},function(a,b){b.is_mobile=((function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true})(navigator.userAgent||navigator.vendor||window.opera))?'1':'0';},function(a,b){try{if((typeof b['ev']!='undefined'&&b['ev'].toString().toLowerCase().indexOf('search click'.toLowerCase())>-1)){try{b['search_term']=utag.data['search_term']}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['search_term']!='undefined'&&b['search_term']!=''){try{b['sc_search_pagename']=utag.data['sc_page_name']}catch(e){};try{b['device_orientation']=utag.data['device_orientation']}catch(e){};try{b['site_section1']=utag.data['site_section1']||""}catch(e){};try{b['site_section2']=utag.data['site_section2']||""}catch(e){};try{b['site_section3']=utag.data['site_section3']||""}catch(e){};try{b['site_section4']=utag.data['site_section4']||""}catch(e){};try{b['site_section5']=utag.data['site_section5']||""}catch(e){};try{b['site_section6']=utag.data['site_section6']||""}catch(e){};try{b['site_tier']=utag.data['site_tier']}catch(e){};try{b['promotion']=utag.data['promotion']}catch(e){};try{b['country_code']=utag.data['country_code']}catch(e){};try{b['site_brand']=utag.data['site_brand']}catch(e){};try{b['site_name']=utag.data['site_name']}catch(e){};try{b['stakeholder']=utag.data['stakeholder']}catch(e){};try{b['technology_topic']=utag.data['technology_topic']}catch(e){};try{b['site_region']=utag.data['site_region']}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section1']!='undefined'&&b['site_section1'].toString().indexOf('?')>-1)){try{b['site_section1']=b.site_section1.split('?')[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section2']!='undefined'&&b['site_section2'].toString().indexOf('?')>-1)){try{b['site_section2']=b.site_section2.split('?')[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section3']!='undefined'&&b['site_section3'].toString().indexOf('?')>-1)){try{b['site_section3']=b.site_section3.split('?')[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section4']!='undefined'&&b['site_section4'].toString().indexOf('?')>-1)){try{b['site_section4']=b.site_section4.split('?')[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section5']!='undefined'&&b['site_section5'].toString().indexOf('?')>-1)){try{b['site_section5']=b.site_section5.split('?')[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section6']!='undefined'&&b['site_section6'].toString().indexOf('?')>-1)){try{b['site_section6']=b.site_section6.split('?')[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['site_section1']=='home'){b['site_section1']='home page'}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section1']!='undefined'&&b['site_section1']!=''){c=['qc',b['country_code'],b['site_section1']];b['sc_page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section1']!='undefined'&&b['site_section1']!=''){c=['qc',b['country_code'],b['site_section1']];b['sc_site_section_1']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section2']!='undefined'&&b['site_section2']!=''){c=[b['sc_page_name'],b['site_section2']];b['sc_site_section_2']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section2']!='undefined'&&b['site_section2']!=''){c=[b['sc_page_name'],b['site_section2']];b['sc_page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section3']!='undefined'&&b['site_section3']!=''){c=[b['sc_page_name'],b['site_section3']];b['sc_site_section_3']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section3']!='undefined'&&b['site_section3']!=''){c=[b['sc_page_name'],b['site_section3']];b['sc_page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section4']!='undefined'&&b['site_section4']!=''){c=[b['sc_page_name'],b['site_section4']];b['sc_site_section_4']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section4']!='undefined'&&b['site_section4']!=''){c=[b['sc_page_name'],b['site_section4']];b['sc_page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section5']!='undefined'&&b['site_section5']!=''){c=[b['sc_page_name'],b['site_section5']];b['sc_site_section_5']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section5']!='undefined'&&b['site_section5']!=''){c=[b['sc_page_name'],b['site_section5']];b['sc_page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section6']!='undefined'&&b['site_section6']!=''){c=[b['sc_page_name'],b['site_section6']];b['sc_site_section_6']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(typeof b['site_section6']!='undefined'&&b['site_section6']!=''){c=[b['sc_page_name'],b['site_section6']];b['sc_page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((typeof b['site_name']!='undefined'&&b['site_name']!=''&&typeof b['site_brand']!='undefined'&&b['site_brand']!=''&&typeof b['site_region']!='undefined'&&b['site_region']!=''&&typeof b['site_tier']!='undefined'&&b['site_tier']!='')){c=[b['site_name'],b['site_brand'],b['site_tier'],b['site_region']];b['sc_site_identification']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b){try{if(utag.data['qp.utagdb']){if(utag.data['qp.utagdb']=='1'||utag.data['qp.utagdb'].toLowerCase()=='true'){document.cookie='utagdb=true';utag.cfg.utagdb=true;}else{document.cookie='utagdb=false';utag.cfg.utagdb=false;}}
b._utag_event=a;utag.DB(b);}catch(e){utag.DB('Tealium Debugging Tools Failed: '+e);}},function(a,b){try{if((typeof b['ev']!='undefined'&&b['ev'].toString().toLowerCase().indexOf('video'.toLowerCase())>-1)){b['video_name']=b['label']}}catch(e){utag.DB(e)}},function(a,b){for(var i=2;i<7;++i){if(b['site_section'+i]==""||typeof b['site_section'+i]=="undefined"){b['sc_site_section_'+i]=b['sc_site_section_'+(i-1)]}}},function(a,b){try{if(1){if(b['ut.event']=="view")
window._utag_flag=false;}}catch(e){utag.DB(e)}}];utag.handler.cfg_extend=[{"alr":0,"bwq":0,"id":"199","blr":1,"end":0},{"alr":1,"bwq":0,"id":"135","blr":0,"end":0},{"alr":1,"bwq":0,"id":"202","blr":0,"end":0},{"alr":1,"bwq":0,"id":"102","blr":0,"end":0},{"alr":1,"bwq":0,"id":"115","blr":0,"end":0},{"alr":1,"bwq":0,"id":"116","blr":0,"end":0},{"alr":1,"bwq":0,"id":"117","blr":0,"end":0},{"alr":1,"bwq":0,"id":"118","blr":0,"end":0},{"alr":1,"bwq":0,"id":"119","blr":0,"end":0},{"alr":1,"bwq":0,"id":"120","blr":0,"end":0},{"alr":1,"bwq":0,"id":"192","blr":0,"end":0},{"alr":1,"bwq":0,"id":"73","blr":0,"end":0},{"alr":1,"bwq":0,"id":"100","blr":0,"end":0},{"alr":1,"bwq":0,"id":"95","blr":0,"end":0},{"alr":1,"bwq":0,"id":"74","blr":0,"end":0},{"alr":1,"bwq":0,"id":"96","blr":0,"end":0},{"alr":1,"bwq":0,"id":"75","blr":0,"end":0},{"alr":1,"bwq":0,"id":"97","blr":0,"end":0},{"alr":1,"bwq":0,"id":"76","blr":0,"end":0},{"alr":1,"bwq":0,"id":"98","blr":0,"end":0},{"alr":1,"bwq":0,"id":"92","blr":0,"end":0},{"alr":1,"bwq":0,"id":"99","blr":0,"end":0},{"alr":1,"bwq":0,"id":"93","blr":0,"end":0},{"alr":1,"bwq":0,"id":"77","blr":0,"end":0},{"alr":1,"bwq":0,"id":"80","blr":0,"end":0},{"alr":1,"bwq":0,"id":"91","blr":0,"end":0},{"alr":1,"bwq":0,"id":"104","blr":0,"end":0},{"alr":1,"bwq":0,"id":"191","blr":0,"end":0}];utag.loader.initcfg=function(){utag.loader.cfg={"24":{load:1,send:1,v:201707122250,wait:1,tid:19004},"4":{load:1,send:1,v:201704252313,wait:1,tid:7117},"35":{load:1,send:1,v:201704252313,wait:1,tid:20010},"38":{load:utag.cond[29],send:1,v:201704252313,wait:1,tid:17005},"46":{load:utag.cond[29],send:1,v:201705021919,wait:1,tid:13060},"47":{load:1,send:1,v:201704252313,wait:1,tid:6026},"48":{load:1,send:1,v:201704252313,wait:1,tid:20103},"53":{load:utag.cond[32],send:1,v:201704252313,wait:1,tid:4001},"57":{load:(utag.cond[32]&&utag.cond[33]),send:1,v:201704252313,wait:1,tid:20067},"58":{load:utag.cond[32],send:1,v:201704252313,wait:1,tid:20067},"59":{load:utag.cond[34],send:1,v:201704252313,wait:1,tid:20067},"63":{load:utag.cond[35],send:1,v:201706072223,wait:1,tid:4001},"65":{load:1,send:1,v:201706121557,wait:1,tid:6021},"66":{load:1,send:1,v:201706201807,wait:1,tid:12047}};utag.loader.cfgsort=["24","4","35","38","46","47","48","53","57","58","59","63","65","66"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};utag.loader.PINIT=function(a,b,c){utag.DB("Pre-INIT");if(utag.cfg.noload){return;}
try{this.GET();if(utag.handler.RE('view',utag.data,"blr")){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr");utag.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1&&b.s2s!=1){if(utag.loader.bk[b.id]||((utag.cfg.readywait||utag.cfg.noview)&&b.load==4)){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.wait==1&&utag.loader.rf==0){utag.DB('utag.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){utag.DB('utag.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();}});else if(this.lq.length>0)utag.loader.rf=1;else if(this.lq.length==0)utag.loader.END();return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{if(typeof utag.linkHandler=='undefined'){utag.linkHandler=function(a,b,c,d,e){if(!a)a=window.event;if(a.target)b=a.target;else if(a.srcElement)b=a.srcElement;if(b.nodeType==3)b=b.parentNode;if(typeof b=='undefined'||typeof b.tagName=='undefined')return;c=b.tagName.toLowerCase();if(c=='body')return;if(c!='a'){for(d=0;d<5;d++){if(typeof b!='undefined'&&b.parentNode)b=b.parentNode;c=(b!=null&&b.tagName)?b.tagName.toLowerCase():'';if(c=='a')break;else if(c=='body')return;}}
if(c!='a')return;var lt=b.text?b.text:b.innerText?b.innerText:'';if((lt==''||/^\s+$/.test(lt))&&typeof b.innerHTML!='undefined'){lt=b.innerHTML.toLowerCase();if(lt.indexOf('<img ')>-1){d=lt.indexOf('alt="');if(d>-1){e=lt.indexOf('"',d+5);lt=lt.substring(d+5,e);}else{d=lt.indexOf('src="');if(d>-1){e=lt.indexOf('"',d+5);lt=lt.substring(d+5,e);}}}}
var hr=b.href,hrnq=(b.href.split('?'))[0];var obj={link_obj:b,link_text:lt,link_url:hr,link_type:'exit link',event_name:'link'};c=[location.hostname].concat(('javascript:').split(','));for(d=0;d<c.length;d++){if(hrnq.indexOf(c[d])>-1){obj.link_type='link';break;}};c=('pdf,xls,doc').split(',');for(d=0;d<c.length;d++){e=new RegExp(c[d]+'$');if(e.test(hrnq)){obj.link_type='download link';break;}};if(obj['link_url'].toString().indexOf('documents/files')>-1||obj['link_url'].toString().indexOf('document/files')>-1)utag.link(obj);}
utag.loader.EV(document,'mousedown',utag.linkHandler);}}catch(e){utag.DB(e)};}})
if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.cfg.readywait=1;utag.DB('READY:utag.cfg.readywait');setTimeout(function(){utag.loader.PINIT()},utag.cfg.waittimer||1);}})}else{utag.loader.PINIT()}}