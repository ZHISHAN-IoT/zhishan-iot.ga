if((typeof ci_analytics_poc_load!="boolean")||(ci_analytics_poc_load!=true)){var metricsPrefix="";var metricsVersion="94";var metricsHost="www.ti.com";var metricsProtocol=location.protocol;if(location.hostname.indexOf("-uat.itg.ti.com")!=-1){metricsPrefix="uat-";metricsHost="www-uat.itg.ti.com"}else{if(location.hostname.indexOf("-sat.itg.ti.com")!=-1){metricsPrefix="sat-";metricsHost="www-sat.itg.ti.com"}else{if(location.hostname.indexOf("-int.itg.ti.com")!=-1){metricsPrefix="int-";metricsHost="www-int.itg.ti.com"}}}document.write('<script language="JavaScript" src=\''+metricsProtocol+"//"+metricsHost+"/assets/js/headerfooter/"+metricsPrefix+"metrics-min.js?version="+metricsVersion+'\' type="text/javascript"><\/script>')};