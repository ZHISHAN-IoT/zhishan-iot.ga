//tealium universal tag - utag.38 ut4.0.201702141651, Copyright 2017 Tealium.com Inc. All Rights Reserved.
window._kiq=window._kiq||[];window._kiq.push(['disableAuto']);try{(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.data={};u.data.jspath="//s3.amazonaws.com/ki.js/62585/ej0.js";u.initialized=false;u.map={};u.extend=[function(a,b){function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){if(oldonload){oldonload();}
func();};}}
utag.onload_flag=utag.onload_flag||{};if(!utag.onload_flag[id]){if(document.readyState!="complete"){addLoadEvent(function(){var customCallback=function(){};if(typeof window.tealiumOnLoadCallback!="undefined")
customCallback=window.tealiumOnLoadCallback;utag.view(utag.data,customCallback,[id]);});return false;}
utag.onload_flag[id]=1;}}];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};var c,d,e,f;c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(u.data.identify){window._kiq.push(["identify",u.data.identify]);}
window._kiq.push(['stopNudge']);window._kiq.push(['selectNudge']);if(!u.initialized){u.base_url="//"+u.data.jspath;u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url;u.s.parentNode.insertBefore(u.scr,u.s);u.initalized=true;}}}
utag.o[loader].loader.LOAD(id);})('38','qualcomm.qualcomm-react');}catch(e){}
