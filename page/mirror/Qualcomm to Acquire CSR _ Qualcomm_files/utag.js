//tealium universal tag - utag.65 ut4.0.201706121557, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"triggerpath":"//gateway.foresee.com/sites/qualcomm/production/gateway.min.js"};g={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];if(e[f]!=="triggerpath"){g[e[f]]=b[d];}}}}
if(!u.data.triggerpath){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.loader_cb=function(){for(var key in g){FSR.CPPS.set(key,g[key]);}};(function(g){g['acsReady']=function(){var aT='__acsReady__',args=Array.prototype.slice.call(arguments,0),k=setInterval(function(){if(typeof g[aT]==='function'){clearInterval(k);for(i=0;i<args.length;i++){g[aT].call(g,function(fn){return function(){setTimeout(fn,1)};}(args[i]));}}},50);};acsReady(u.loader_cb);if(g.FSR){FSR.run();}else{u.loader({"type":"script","src":u.data.triggerpath,"cb":null,"loc":"script","id":"utag_65","attrs":{"data-vendor":"acs","data-role":"gateway"}});}})(window);utag.DB("send:65:COMPLETE");}};utag.o[loader].loader.LOAD(id);}('65','qualcomm.qualcomm-react'));}catch(error){utag.DB(error);}
