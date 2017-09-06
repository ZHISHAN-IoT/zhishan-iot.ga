/* eslint-disable */

/*
 * SP2013 Custom Script
 * Last Update 10:43 EST 06/19/2017
 */

 window.dataLayer = window.dataLayer || [];
 cvURLCheck = cvSurveyURLCheck = window.location.href.toLowerCase();

 function createCSSSelector(selector, style) {
   if (!document.styleSheets) return;
   if (document.getElementsByTagName('head').length == 0) return;

   var head = document.head || document.getElementsByTagName('head')[0];
   var styleSheet = document.createElement('style');
   var css = selector + ' {' + style + ';}';

   styleSheet.type = 'text/css';
   if (styleSheet.styleSheet){
     styleSheet.styleSheet.cssText = css;
   } else {
     styleSheet.appendChild(document.createTextNode(css));
   }
   head.appendChild(styleSheet);
}

if (!(/https?:\/\/(((pro|instinct)\.)?radeon\.com|((pro|instinct)\-radeon\-com\.)?radeon\.staging\.wpengine\.com)/.test(cvURLCheck))) {
  createCSSSelector('.async-hide', 'opacity: 0 !important');

  (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
  h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'');};
  (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null;},c);h.timeout=c;
  })(window,document.documentElement,'async-hide','dataLayer',4000,
  {'GTM-W6WQKKT':true});
}
cvLnkTrack = {};

/* New Cookie Code */
var i = 0;
var CookieExpiryTime = {
  END_OF_SESSION: 0,
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
  MONTH: 1000 * 60 * 60 * 24 * 30,
  YEAR: 1000 * 60 * 60 * 24 * 365,
  NEVER: 1000 * 60 * 60 * 24 * 365 * 20
};
var Cookie = {
  Set: function(c_name, value, expTime, path, domain) {
    var e = '',
      d;
    if (expTime) {
      d = new Date();
      d.setTime(d.getTime() + (expTime));
      e = "; expires=" + d.toUTCString();
    }
    if (!path) path = "/";
    if (!domain) {
      var tempURI = parseUri(document.URL);
      domain = tempURI.domain + '.' + tempURI.tld;
    }
    document.cookie = c_name + "=" + value + e + "; path=" + path + "; domain=" + domain;
  },
  Get: function(c_name) {
    var match = c_name + "=",
      c = '',
      ca = document.cookie.split(';'),
      i,
      cl;
    for (i = 0, cl = ca.length; i < cl; i++) {
      c = String(ca[i]).trim();
      if (c.indexOf(match) === 0) {
        return c.substring(match.length, c.length);
      }
    }
    return null;
  },
  Unset: function(c_name, path, domain) {
    this.Set(c_name, '', -1, path, domain);
  },
  Enabled: function() {
    var isEnabled = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !isEnabled) {
      document.cookie = "testcookie";
      isEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (isEnabled);
  }
};

/* parseUri BOF */
function parseUri(str) { //http://blog.stevenlevithan.com/archives/parseuri
	// Object { // https://www.amd.uk.com:80/abc/def/xyz/index.html?aaa=111&bbb=222#hashing
	// anchor: hashing
	// authority: full domain plus port: www.amd.uk.com:80
	// directory: /abc/def/xyz/
	// domain: amd
	// file: index.html
	// host: full domain: www.amd.uk.com
	// noquery: https://www.amd.uk.com:80/abc/def/xyz/index.html
	// password: {{password}}
	// path: /abc/def/xyz/index.html
	// pathLevel: parseUri(uri).pathLevel[3]; (7 maximum)
	// pathLevel[0]: www.amd.uk.com
	// pathLevel[1]: www.amd.uk.com/abc
	// pathLevel[2]: www.amd.uk.com/abc/def
	// pathLevel[3]: www.amd.uk.com/abc/def/xyz
	// pathLevel[4]: www.amd.uk.com/abc/def/xyz/index.html
	// pathLevel[5]:
	// pathLevel[6]:
	// pathLevel[7]:
	// port: 80
	// protocol: https
	// query: aaa=111&bbb=222
	// queryKey: parseUri(uri).queryKey["query parameter"];
	// queryKey["aaa"] = 111
	// queryKey["bbb"] = 222
	// relative: /abc/def/xyz/index.html?aaa=111&bbb=222#hashing
	// source: full URL: https://www.amd.uk.com:80/abc/def/xyz/index.html?aaa=111&bbb=222#hashing
	// subdomain: www
	// tld: uk.com
	// user: {{username}}
	// userInfo: {{username:password}}
	// }

	if (typeof parseUri.options == 'undefined' || parseUri.options === null) {
		parseUri.options = {
			strictMode: false,
			key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
			q: {
				name: "queryKey",
				parser: /(?:^|&)([^&=]*)=?([^&]*)/g
			},
			parser: {
				strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
				loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
			}
		};
	}
	var pu = parseUri.options,
		m = pu.parser[pu.strictMode ? "strict" : "loose"].exec(str),
		uri = {},
		i = 14;

	while (i--) uri[pu.key[i]] = m[i] || "";

	uri[pu.q.name] = {};
	uri[pu.key[12]].replace(pu.q.parser, function($0, $1, $2) {
		if ($1) uri[pu.q.name][$1] = $2;
	});

	var uriSplit = uri.host.split('.');
	switch (uriSplit.length) {
		case 2:
			uri.subdomain = null;
			uri.domain = uriSplit[0];
			uri.tld = uriSplit[1];
			break;
		case 3:
			uri.subdomain = uriSplit[0];
			uri.domain = uriSplit[1];
			uri.tld = uriSplit[2];
			break;
		case 4:
			uri.subdomain = uriSplit[0];
			uri.domain = uriSplit[1];
			uri.tld = uriSplit[2] + '.' + uriSplit[3];
			break;
		default:
			uri.subdomain = uri.domain = uri.tld = null;
	}

	var pathSplit = uri.path.split('/');
	pathSplit[0] = uri.host;
	for (p = 1; p < pathSplit.length; p++) {
		if (!!pathSplit[p]) pathSplit[p] = pathSplit[p - 1] + "/" + pathSplit[p]; //avoid extra entry with trailing slash
	}
	if (pathSplit.length < 8) {
		for (p = pathSplit.length; p < 8; p++) {
			pathSplit[p] = "";
		}
	}
	uri.pathLevel = pathSplit;
	uri.noquery = uri.protocol + "://" + uri.authority + uri.path;
	return uri;
}

	/* parseUri EOF */


//load jQuery
if (typeof jQuery === "undefined") {
	var jq = document.createElement('script');
	jq.type = 'text/javascript';
	jq.src = "//www.amd.com/Style%20Library/js/jquery-1.8.2.min.js";
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(jq, s);
}

var sAA = {}; var cvOldLinkClickObject = {}; cvSPwebtrack = 0;
//==============================================
var cvURL;
try {cvURL = decodeURI(document.URL.toLowerCase());}
catch(err){cvURL = unescape(document.URL.toLowerCase());}

cvURL = cvURL.length ? cvURL : '';
cvURL = cvURL.length ? cvURL.replace(/([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/g, 'pii') : '';
cvURL = cvURL.length ? cvURL.replace(/([a-zA-Z0-9_.+-])+\%40(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/g, 'pii') : '';
cvURL = cvURL.length ? cvURL.replace(/@/g, '(at)') : '';

//add trailing slash on folders BOF
if  (!((/((\.[a-z]{3,4})|(\/))$/i.test(cvURL)) || (/#|\?/i.test(cvURL)))) cvURL =cvURL+"/";
if ((/#|\?/i.test(cvURL))) {
	if ((cvURL.indexOf("/#") == -1) && (cvURL.indexOf("/?") == -1)) {
		if ((cvURL.indexOf("#") != -1) && (cvURL.indexOf("?") != -1)) {
			if (cvURL.indexOf("#") > cvURL.indexOf("?")) { //? is first
				cvURLtempSplit=cvURL.split("?");
				cvURL=cvURLtempSplit[0]+"/?"+cvURLtempSplit[1];
			} else { //# is first
				cvURLtempSplit=cvURL.split("#");
				cvURL=cvURLtempSplit[0]+"/#"+cvURLtempSplit[1];
			}
		}
		else if (cvURL.indexOf("#") != -1) {
			cvURLtempSplit=cvURL.split("#");
			cvURL=cvURLtempSplit[0]+"/#"+cvURLtempSplit[1];
		}
		else if (cvURL.indexOf("?") != -1) {
			cvURLtempSplit=cvURL.split("?");
			cvURL=cvURLtempSplit[0]+"/?"+cvURLtempSplit[1];
		}
	}
} //add trailing slash on folders EOF
cvURL = cvURL.replace(/#$/,""); //remove trailing hash
//==============================================


// Lega Consent LightBoxes
var consentWidth = 700;
var consentHeight = 700;
var consentW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (consentW<consentWidth) { consentWidth = consentW - 10;}
if (consentWidth<630) {consentWidth=630;}

if (/amd\.com\/en\-us\/who\-we\-are\/newsroom\/assets\-agreement\/assets(\/$|$|\?|\#)/i.test(cvURL)) {
	var cvLUG = cfGetCookie('c_BrandConsent') || "";
	if (cvLUG != "Agreed") {
		LightBoxWindow2 ("http://experience.amd.com/LegalConsent/brand/agree_brand/",consentWidth,consentHeight, "http://experience.amd.com/LegalConsent/brand/access-denied_brand/");
	} else {
		cfSetCookie('c_BrandConsent',"Agreed",365);
	}
}

//driver installed BOF
if ((cvURLCheck.indexOf("driverinstalled/index.html") != -1) && (cvURLCheck.indexOf("%%") != -1)) {
	cvURLCheck=replaceAll(cvURLCheck,"%%","%");
	window.location.href=cvURLCheck;
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
//driver installed EOF

//load external js
/* function _load_js(j){
	document.write('<script type="text/javascript" src="'+j+'"></scr'+'ipt>');
} */

function _load_js(src, done) {
    var js = document.createElement('script');
    var head = document.getElementsByTagName("head")[0] || document.documentElement;
    js.src = src;
    js.type = 'text/javascript';
    js.async = true;
    // Handle Script loading
    var isDone = false;
    js.onload = js.onreadystatechange = function() {
        if (!isDone && (!this.readyState ||
                this.readyState === "loaded" || this.readyState === "complete")) {
            isDone = true;

            // Handle memory leak in IE
            js.onload = js.onreadystatechange = null;
              /* if (head && js.parentNode) {
                  head.removeChild(js);
              } */
            if (typeof done !== 'undefined') {
                done();
            }
        }
    };
    js.onerror = function() {
        if (typeof done !== 'undefined') {
            done(new Error('Script failed to load: ' + src));
        } else {
            new Error('Script failed to load: ' + src);
        }
    };
    head.insertBefore(js, head.firstChild);
    //head.appendChild(js);
}

//Silverpop web tracking
if((cvURLCheck.indexOf("experience.amd.com") == -1) && (cvURLCheck.indexOf("amd.mkt6303.com") == -1) && (cvURLCheck.indexOf("www.pages03.net") == -1)){
	cvSPwebtrack=0;
	_load_js('//www.amd.com/us/as/sp2013/sp.js');
}
cvAddThis = 0;
cvAMDWebProperties = ",amd.com,amd.jp,amd.de,amd.com.cn,amd.com.tw,amd.com.hk,amd.co.jp,amdtaiwan.com.tw,amd64.co.kr,amdathlon.com,amdlive.com,amdcompare.com,amd-firefly.com,amd.ru,ati.com,ati.de,ati.jp,accelerateresults.com,graphics-scout.com,marketbuilder3.com,atiplus,amd64.org,amd-unleash.com,amd-bilder.de,entertainmentsimplified.com,amdassets.com,x86-64.org,amdquizzes.com,amdrewards.com,atistickers.com,lookbeyond.de,amdinfo.co.kr,amdchannel.com.cn,amdlivestrong.com,amdmotorsports.com,amdprocycling.com,amdsports.com,amdadvantage.com,amdsurveys.com,amdtaiwan.com,amd-member.com,outstart.com,amdvisionary.com,amd-site.com,seamicro.com,gpuopen.com,radeon.com,betterred.com,radeon.wpengine.com,ve.ga,amdryzenreviews.com";	// AMD Web Properties
cvAMDWebProperties += ",phx.corporate-ir.net,en25.com,eloqua.com,amdimprovision.com.br,flixfacts.co.uk,amd3.c-3.com,radeonramdisk.com,fireprographics.com,amd-ext.uat5.hosted.jivesoftware.com,amd4u.com,standupforfirepro.com,radeonmemory.com,amd.mkt6303.com,www.pages03.net,gizmosphere.org"; //other properties
//cvAMDWebProperties += ",atiplushp.com,atipluslenovo.com"; //old domains
cvDNTDomains ="";
cvSocialDomains=new Array("163","12seconds","4travel","advogato","ameba","anobii","asmallworld","backtype","badoo","bebo","bigadda","bigtent","biip","blackplanet","blogspot","blogster","blomotion","bolt","brightkite","buzznet","cafemom","care2","classmates","cloob","collegeblender","cyworld","cyworld","dailymotion","daum","delicious","deviantart","digg","diigo","disqus","draugiem","facebook","faceparty","fc2","flickr","flixster","fotolog","foursquare","friendfeed","friendsreunited","friendster","fubar","gaiaonline","geni","goodreads","grono","habbo","hatena","hexun","hi5","hyves","ibibo","identi","ifeng","imeem","infoseek","intensedebate","irc-galleria","iwiw","jaiku","kaixin001","kaixin002","kakaku","kanshin","kozocom","last","linkedin","livejournal","me2day","meetup","mister-wong","mixi","mixx","mouthshut","multiply","myheritage","mylife","myspace","myspace","myyearbook","nasza-klasa","netlog","nettby","netvibes","nicovideo","ning","odnoklassniki","orkut","pakila","people","photobucket","pinterest","plaxo","plurk","qq","reddit","renren","seesaa","skyrock","slideshare","smcb","smugmug","sohu","sonico","studivz","stumbleupon","t","tabelog","tagged","taringa","tripit","trombi","trytrend","tuenti","tumblr","twine","twitter","twitch","uhuru","viadeo","vimeo","vkontakte","vox","wayn","weibo","weourfamily","wer-kennt-wen","wordpress","xanga","xing","yaplog","yelp","youtube","yuku","zooomr","google");
cvSearchDomains=new Array("abcsok","alicesuche","alltheweb","altavista","anonymouse","aol","aolrecherche","aolsearch","aolsvc","ask","baidu","biglobe","bing","centrum","chip","clix","cuil","daum","eniro","euroseek","excite","fireball","goo","google","googlesyndication","icq","infoseek","ixquick","kvasir","libero","live","livedoor","lycos","mail","msn","myway","naver","netscape","nifty","rambler","recherche","recherchet2","search","searchalot","seznam","startpagina","suche","szukaj","terra","tiscali","toile","ucweb","uol","vinden","virgilio","walla","yahoo","yandex","web","youdao","webalta");
cvAMDShortDomains=new Array("amd","amdsurveys","amd-member","seamicro");
cvOtherPartnerExcludeDomains=new Array("dataram","adcash","gobongo","youradexchange","openadserving","otvetim-vopros","undefined","drotator","uxup","wpengine");
cvPartnerExcludeDestination_LID=new Array("ms-backgroundImage"," ms-backgroundImage");
cvPartnerExcludeDomains=cvOtherPartnerExcludeDomains.join(",")+","+cvSearchDomains.join(",")+","+cvSocialDomains.join(",")+cvAMDWebProperties; //PartnerRef
cvSourceExcludeDomains=new Array("devgurus.amd.com","devforums.amd.com","forums.amd.com","support.amd.com"); //PartnerRef
cvDownloadExtentions = "run,msi,rpm,gz,tar,bz2,dmg,sit,gzip,patch,exe,zip,wav,mp3,wma,mov,mpg,avi,wmv,mp4,doc,pdf,xls,ppt,pps,csv,jpg,png,bmp,wmf,tif,docx,xlsx,pptx,cbr";	// File extensions to track as downloadable content
cvDriverExtensions = "run,msi,rpm,gz,tar,bz2,dmg,sit,gzip,exe,zip"; // File extensions to include for driver downloads
cvNonDownloadExtensions = "do,aspx,ashx,asp,jp,ru,it"; // File extensions to exclude for driver downloads
cvDriverDownloadDomains = ["support.amd.com","www2.ati.com"]; // array of AMD driver download domains

tmpDestination_LID = ""; ReportSuiteID=""; cvTagName = ""; cvPTagName = ""; cvPPTagName = ""; cvPPPTagName = ""; cvLinkType = ""; cvRsid = ""; cvRsidVal = ""; Destination_URL_wParam = ""; Destination_Name = ""; Destination_LPOS=""; Destination_LID = ""; Destination_ID = ""; nodesForm = ""; cvElqFormId = ""; cvFormName = ""; cvFormPassed=''; cvElqAssetType = ""; cvTimedReading = ""; cvSearchKeywordLoop=0;cvVideoID = "";cvURL_fragment="";cvSTL =  0;cvGTMID="";cvCVAReferrerURL="";cvLinkedSearch=0; cvCookieDURL="";cvCookieRURL="";csTotalCounts=0;cvFFonPlayerReady=""; cvGACheckSearchAjax=""; cvSearchURL = ""; cvGASearchURL = ""; cvOSSEvents=""; cvDestination_URL ="";
sAA.referrer=document.referrer.toLowerCase();
cvUTCdate=getCurrentTimeUTC();

/* Set report suite ID dynamically based on domain */
var cvLang = cfDetectLanguage() || "";
var cfCheckRSID = (function() {
    var ReportSuiteID = "";
    var cvCurrency = "USD";
    var cvLang = cfDetectLanguage() || "";
    var cvHostName = parseUri(cvURL).host;
    //	cvURL = parseUri(cvURL).source;
    if ((cvURL.indexOf("driverinstalled") != -1) || (cvURL.indexOf("driver-installed") != -1)) { // cvDI = Driver Installed
        ReportSuiteID = "amdvgraphics";
    } else if (cvHostName == "www.amd.com" || cvHostName == "amd.com" || cvHostName == "www2.amd.com") {
        if (cvURL.indexOf('/ccc/') != -1) {
            ReportSuiteID = "amdvgraphics,amdvappzone";
        } else if (cvURL.indexOf("/vision/shop") != -1) {
            if (cvURL.indexOf("/cool-apps/pages") != -1) {
                ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvappzone";
            } else {
                ReportSuiteID = "amdvgraphics,amdvaudiencegaming";
            }
        } else if (/.*products/i.test(cvURL)) {
            if (/embedded/i.test(cvURL)) {
                if (/\/(processors|graphics|chipsets)/i.test(cvURL)) {
                    ReportSuiteID = 'amdvembedded,amdvaudiencebusiness,amdvbusiness';
                } else ReportSuiteID = 'amdvembedded,amdvaudiencebusiness,amdvbusiness'; //default /embedded/
            } else if (/graphics/i.test(cvURL)) {
                if (/desktop/i.test(cvURL)) {
                    if (/r(9|7)/i.test(cvURL)) {
                        ReportSuiteID = 'amdvgraphics,amdvaudiencegaming';
                    } else ReportSuiteID = 'amdvgraphics,amdvaudiencehome'; //default /desktop/
                } else if (/notebook/i.test(cvURL)) {
                    if (/(r(7|9)-m200)|8900m/i.test(cvURL)) {
                        ReportSuiteID = 'amdvgraphics,amdvaudiencegaming';
                    } else ReportSuiteID = 'amdvgraphics,amdvaudiencehome'; //default /notebook/
                } else if (/workstation/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgraphics,amdvaudiencebusiness,amdvbusiness,amdvworkstation';
                } else if (/help-me-choose/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgraphics,amdvaudiencehome';
                } else ReportSuiteID = 'amdvgraphics,amdvaudiencehome'; //default /graphics/
            } else if (/processors/i.test(cvURL)) {
                if (/desktop/i.test(cvURL)) {
                    ReportSuiteID = 'amdvcomponent,amdvaudiencehome';
                } else if (/notebook-tablet/i.test(cvURL)) {
                    ReportSuiteID = 'amdvcomponent,amdvaudiencehome';
                } else ReportSuiteID = 'amdvcomponent,amdvaudiencehome'; //default /processors/
            } else if (/server/i.test(cvURL)) {
                ReportSuiteID = 'amdvserver,amdvaudiencebusiness,amdvbusiness';
            } else if (/pricing/i.test(cvURL)) {

                if (/(opteron|fx)/i.test(cvURL)) {
                    ReportSuiteID = 'amdvserver,amdvaudiencebusiness,amdvbusiness';

                } else if (/fx|a-series/i.test(cvURL)) {
                    ReportSuiteID = 'amdvcomponent';
                } else ReportSuiteID = 'amdvcomponent,amdvaudiencehome'; //default /pricing/

            } else if (/chipsets/i.test(cvURL)) {
                ReportSuiteID = 'amdvcomponent,amdvaudiencebusiness,amdvbusiness';

            } else if (/memory/i.test(cvURL)) {
                ReportSuiteID = 'amdvcomponent,amdvaudiencegaming,amdvramdisk';
            } else ReportSuiteID = ''; //default /products/

        } else if (/markets/i.test(cvURL)) {

            if (/partners/i.test(cvURL)) {
                ReportSuiteID = 'amdvaudiencebusiness';

            } else if (/embedded/i.test(cvURL)) {
                ReportSuiteID = 'amdvembedded,amdvaudiencebusiness,amdvbusiness';

            } else if (/commercial/i.test(cvURL)) {
                ReportSuiteID = 'amdvserver,amdvaudiencebusiness,amdvbusiness,amdvworkstation';

            } else if (/(consumer|if-it-can-game)/i.test(cvURL)) {
                ReportSuiteID = 'amdvclient,amdvaudiencehome';

            } else if (/game/i.test(cvURL)) {

                if (/shop/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgame,amdvaudiencegaming,amdvgraphics,amdvshop';

                } else if (/downloads/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgame,amdvaudiencegaming,amdvgraphics,amdvsupport';
                } else ReportSuiteID = 'amdvgame,amdvaudiencegaming,amdvgraphics'; //default /markets/game
            } else ReportSuiteID = ''; //default /markets/

        } else if (/solutions/i.test(cvURL)) {
            if (/\/(tablets|laptops|desktops)/i.test(cvURL)) {
                ReportSuiteID = 'amdvclient,amdvaudiencehome';

            } else if (/servers/i.test(cvURL)) {
                ReportSuiteID = 'amdvserver,amdvaudiencebusiness,amdvbusiness';

            } else if (/\/(workstations|professional)/i.test(cvURL)) {
                ReportSuiteID = 'amdvgraphics,amdvaudiencebusiness,amdvbusiness,amdvworkstation';
            } else if (/\/software-partners\/(altair|ansys|citrix|comsol|dassault|dem|ensight|ptc|remotefx|siemens|spaceclaim|teradici|vmware)/i.test(cvURL)) {
                ReportSuiteID = 'amdvgraphics,amdvaudiencebusiness,amdvbusiness,amdvworkstation';

            } else if (/embedded/i.test(cvURL)) {
                ReportSuiteID = 'amdvembedded,amdvaudiencebusiness,amdvbusiness';

            } else if (/pro/i.test(cvURL)) {
                ReportSuiteID = 'amdvclient,amdvaudiencebusiness,amdvbusiness';
            } else ReportSuiteID = ''; //default /solutions/

        } else if (/who-we-are/i.test(cvURL)) {

            if (/404/i.test(cvURL)) {
                ReportSuiteID = 'amdv404';

            } else if (/site-map/i.test(cvURL)) {
                ReportSuiteID = '';
            } else ReportSuiteID = 'amdvcorporate'; //default /who-we-are/

        } else if (/press-releases/i.test(cvURL)) {
            ReportSuiteID = 'amdvcorporate,amdvir';

        } else if (/innovations/i.test(cvURL)) {
            if (/\/(2010-present|2000-2009|1970-1999)/i.test(cvURL)) {
                ReportSuiteID = 'amdvcorporate';

            } else if (/servers/i.test(cvURL)) {
                ReportSuiteID = 'amdvcorporate';

            } else if (/software-technologies/i.test(cvURL)) {
                if (/\/(apu|multicore|photo-composer|turbo-core|compute-cores|hsa|screen-mirror|face-login|gesture-control|experiences-faq|wireless-display|discovery)/i.test(cvURL)) {
                    ReportSuiteID = 'amdvclient,amdvaudiencehome';
                } else if (/\/(catalyst|gcn|eyefinity|crossfire|hd3d|dual-graphics|tressfx|trueaudio|mantle|enduro)/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgraphics,amdvaudiencegaming';

                } else if (/amp/i.test(cvURL)) {
                    ReportSuiteID = 'amdvcomponent,amdvaudiencegaming,amdvramdisk';

                } else if (/das/i.test(cvURL)) {
                    ReportSuiteID = 'amdvembedded,amdvaudiencebusiness,amdvbusiness';
                } else if (/\/(direct-connect|open-compute)/i.test(cvURL)) {
                    ReportSuiteID = 'amdvserver,amdvaudiencebusiness,amdvbusiness';

                } else if (/app-acceleration/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgraphics,amdvaudiencegaming,amdvappzone';

                } else if (/app-zone/i.test(cvURL)) {
                    ReportSuiteID = 'amdvgraphics,amdvaudiencegaming,amdvappzone';
                } else if (/\/(hypertransport|quick-stream|surround-house)/i.test(cvURL)) {
                    ReportSuiteID = 'amdvcorporate';
                } else ReportSuiteID = ''; //default /software-technologies/
            } else ReportSuiteID = 'amdvcorporate'; //default /innovations/
        } else if (cvURL.indexOf("amdhomepage.aspx") != -1) {
            ReportSuiteID = ''; //homepage
        } else if (/\/(en(-(us|gb))?|de(-de)?|es(-(es|xl))?|fr(-fr)?|it(-it)?|ja(-jp)?|ko(-kr)?|pl(-pl)?|pt(-br)?|ru(-ru)?|tr(-tr)?|zh(-(cn|hans|tw|hant)))(\/home(page)?)?(\/?($|#|\?))/i.test(cvURL)) {
            ReportSuiteID = ''; //homepage
        } else {
            ReportSuiteID = "amdvother"; //default www.amd.com; no audience
        }
    } else if (cvHostName == "wwwd.amd.com") {
        ReportSuiteID = "amdvembedded,amdvaudiencebusiness";
    } else if (cvHostName == "game.amd.com") {
        ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame";
    } else if (cvHostName == 've.ga' || cvHostName.indexOf('radeon.com') != -1 || cvHostName.indexOf('betterred.com') != -1) {
        ReportSuiteID = "amdvgraphics,amdvaudiencegaming";
    } else if ((cvHostName == "fpp.amd.com") || (cvHostName == "registration-fpp.amd.com") || (cvHostName == "partner.amd.com") || (parseUri(cvURL).host === 'subscriptions.amd.com' && parseUri(cvURL).path.substr(0, '/newsletters/channelnews/'.length) === '/newsletters/channelnews/')) {
        ReportSuiteID = "amdvcomponent,amdvaudiencebusiness,amdvfpp-global,amdvbusiness";
        if (cvURL.indexOf("en-us") != -1) {
            ReportSuiteID = "amdvfpp-na," + ReportSuiteID;
        } else if (/(en-gb|fr-fr|de-de|it-it|pl-pl|ru-ru|es-es|tr-tr)/i.test(cvURL)) {
            ReportSuiteID = "amdvfpp-emea," + ReportSuiteID;
        } else if (/(pt-br|en-mx|es-mx)/i.test(cvURL)) {
            ReportSuiteID = "amdvfpp-la," + ReportSuiteID;
        } else if (/(en-in|en-sa|ko-kr|ja-jp|jp-jp)/i.test(cvURL)) {
            ReportSuiteID = "amdvfpp-apac," + ReportSuiteID;
        } else if (cvURL.indexOf("zh-cn") != -1) {
            ReportSuiteID = "amdvfpp-cn," + ReportSuiteID;
        }
    } else if ((cvHostName == "support.amd.com") || (cvHostName == "emailcustomercare.amd.com")) {
        if (cvURL.indexOf('/search/') != -1) {
            ReportSuiteID = "amdvsupport,amdvoss";
        } else if ((cvURL.indexOf('download/ccc') != -1) || (cvURL.indexOf('/ccc/') != -1)) {
            ReportSuiteID = "amdvaudiencegaming"; //ccc

        } else {
            ReportSuiteID = "amdvsupport";
        }
    } else if (cvHostName == "onlineservices.amd.com") {
        if (cvURL.indexOf("/icss/") != -1) {
            ReportSuiteID = "amdvsupport";
        }
    } else if (cvHostName == "sites.amd.com") {
        if (cvURL.indexOf("/microsoft/business") != -1) {
            ReportSuiteID = "amdvclient,amdvaudiencebusiness,amdvbusiness,amdvmicrosoft";

        } else if (/microsoft/i.test(cvURL)) {
            ReportSuiteID = "amdvclient,amdvaudiencehome,amdvmicrosoft";

        } else if (/recommended|desktopstoryteller/i.test(cvURL)) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming";
        } else if (cvURL.indexOf("/game/shop") != -1) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame";
        } else if (cvURL.indexOf("/game/downloads") != -1) {
            ReportSuiteID = "amdvsupport,amdvaudiencegaming,amdvgame";

        } else if (/game/i.test(cvURL)) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame";

        } else if (/shop-amd/i.test(cvURL)) {
            ReportSuiteID = "amdvshop";

        } else if (/underground/i.test(cvURL)) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame";
        } else if (/promo.*(battlefield4|bf4|never-settle|nsreloadedforever)/i.test(cvURL)) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame";
        } else if ((cvURL.indexOf("server") != -1) || (cvURL.indexOf("opteron") != -1) || (cvURL.indexOf("oems") != -1) || (cvURL.indexOf("partners") != -1)) {
            ReportSuiteID = "amdvserver,amdvaudiencebusiness,amdvbusiness";

        } else if (/(ccc|vision-redirect)/i.test(cvURL)) {
            ReportSuiteID = "amdvworkstation";

        } else if (/processors/i.test(cvURL)) {
            ReportSuiteID = "amdvcomponent";
        } else if (/promo.*(invincible|amdfx)/i.test(cvURL)) {
            ReportSuiteID = "amdvcomponent,amdvaudiencegaming";

        } else if (/business/i.test(cvURL)) {
            ReportSuiteID = "amdvserver,amdvaudiencebusiness,amdvbusiness";

        } else if (/vision|amdvisionary/i.test(cvURL)) {
            ReportSuiteID = "amdvclient,amdvaudiencehome";
        } else {
            ReportSuiteID = "amdvother";
        }
    } else if (cvHostName == "community.amd.com") {
        if ((cvURL.indexOf("game") != -1) || (cvURL.indexOf("gaming") != -1)) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame,amdvblogs";
        } else if ((cvURL.indexOf("partners") != -1) || (cvURL.indexOf("business") != -1)) {
            ReportSuiteID = "amdvaudiencebusiness,amdvbusiness,amdvblogs";
        } else {
            ReportSuiteID = "amdvblogs";
        }
    } else if ((cvURL.indexOf("amddevcentral.com") != -1) || cvHostName == "developer.amd.com" || cvHostName == "media.amddevcentral.com" || cvHostName == "download-developer.amd.com" || cvHostName == "devgurus.amd.com" || cvHostName == "gpuopen.com") {
        ReportSuiteID = "amdvaudiencedeveloper,amdvdev,amdvbusiness";
    } else if (cvHostName == "shop.amd.com") {
        cvShopAudience = "";
        ReportSuiteID = "amdvshop";
        if (cvURL.indexOf('/gaming') != -1) {
            cvShopAudience = ReportSuiteID += ",amdvaudiencegaming";
        } else if (cvURL.indexOf('/home') != -1) {
            cvShopAudience = ReportSuiteID += ",amdvaudiencehome";
        } else if (cvURL.indexOf('/business') != -1) {
            cvShopAudience = ReportSuiteID += ",amdvaudiencebusiness";
        }
        if (cvURL.indexOf('category:') != -1) {
            if ((cvURL.indexOf('graphic+card') != -1) || (cvURL.indexOf('processor') != -1) || (cvURL.indexOf('motherboard') != -1)) {
                if (cvShopAudience == "") ReportSuiteID += ",amdvaudiencegaming";
                ReportSuiteID += ",amdvcomponent";
            } else if ((cvURL.indexOf('notebook') != -1) || (cvURL.indexOf('desktop') != -1) || (cvURL.indexOf('tablet') != -1)) {
                if (cvShopAudience == "") ReportSuiteID += ",amdvaudiencehome";
                ReportSuiteID += ",amdvclient";
            } else if (cvURL.indexOf('server') != -1) {
                if (cvShopAudience == "") ReportSuiteID += ",amdvaudiencebusiness";
                ReportSuiteID += ",amdvserver";
            } else if (cvURL.indexOf('workstation') != -1) {
                if (cvShopAudience == "") ReportSuiteID += ",amdvaudiencebusiness";
                ReportSuiteID += ",amdvcomponent,amdvworkstation";
            }
        }
    } else if ((cvHostName == "forums.amd.com") || (cvHostName == "devforums.amd.com")) {
        if ((cvURL.indexOf("forums.amd.com/devforum") != -1) || (cvHostName == "devforums.amd.com")) {
            ReportSuiteID = "amdvaudiencedeveloper,amdvdev,amdvforums";
        } else if (cvURL.indexOf("forums.amd.com/forum") != -1) {
            if (typeof(cvIsDevforum) !== 'undefined') {
                if (cvIsDevforum == "yes") {
                    ReportSuiteID = "amdvaudiencedeveloper,amdvdev,amdvforums";
                }
            } else {
                ReportSuiteID = "amdvsupport,amdvforums";
            }
        } else if (cvURL.indexOf("forums.amd.com/game") != -1) {
            ReportSuiteID = "amdvgraphics,amdvaudiencegaming,amdvgame,amdvforums";
        } else {
            ReportSuiteID = "amdvsupport,amdvaudiencegaming,amdvforums";
        }
    } else if (cvHostName == "phx.corporate-ir.net" || cvHostName == "ir.amd.com" || cvHostName == "quarterlyearnings.amd.com") {
        ReportSuiteID = "amdvcorporate,amdvaudiencebusiness,amdvir";
    } else if (cvHostName == "products.amd.com") {
        ReportSuiteID = "amdvcomponent";
    } else if ((cvHostName == "search.amd.com") || (cvURL.indexOf('/search/') != -1)) {
        ReportSuiteID = "amdvoss";
    } else if (cvHostName == "cmp.amd.com") {
        ReportSuiteID = "amdvcmp01";
    } else if (cvHostName == "shop-qa.amd.com" || cvHostName == "shop-auth.amd.com" || cvHostName == "shop-sit.amd.com" || cvHostName == "shopcontent-auth.amd.com" || cvHostName == "shop-new.amd.com" || cvHostName == "shopapp-sit.amd.com" || cvHostName == "shop-preprod.amd.com" || cvHostName == "shopcontent-auth-sit.amd.com" || cvHostName == "shopcontent-auth-dit.amd.com" || cvHostName == "shopapp-dit.amd.com" || cvHostName == "shop-dit.amd.com" || cvHostName == "shopapp-design.amd.com") {
        ReportSuiteID = "amdvtest-fd";
    } else if (cvHostName == "server.amd.com") {
        ReportSuiteID = "amdvserver,amdvaudiencebusiness,amdvbusiness"; //amdvserver = AMD Server
    } else if ((cvHostName == "global.amd.com") || (cvHostName == "experience.amd.com") || (cvHostName == "amd.mkt6303.com") || (cvHostName == "www.pages03.net/advancedmicrodevicesinc")) {
        ReportSuiteID = "amdverror";
    } else if (cvURL.indexOf("seamicro.com") != -1) {
        ReportSuiteID = "amdvserver,amdvaudiencebusiness,amdvseamicro,amdvbusiness";
    } else if (cvURL.indexOf("amd3.c-3.com") != -1) {
        ReportSuiteID = "amdvembedded,amdvaudiencebusiness,amdvsalespro";
    } else if (cvURL.indexOf("gizmosphere.org") != -1) {
        ReportSuiteID = "amdvembedded,amdvaudiencedeveloper,amdvgizmosphere";
    } else if ((cvURL.indexOf("radeonramdisk.com") != -1) || (cvURL.indexOf("radeonmemory.com") != -1)) {
        ReportSuiteID = "amdvcomponent,amdvaudiencegaming,amdvramdisk"; //amvother14 = AMD Ramdisk
    } else if (cvURL.indexOf("fireprographics.com") != -1) {
        ReportSuiteID = "amdvcomponent,amdvaudiencebusiness,amdvworkstation,amdvbusiness"; //amdvcomponent = AMD Component
    } else if (cvURL.indexOf("survey.foreseeresults.com") != -1) {
        ReportSuiteID = "amdvforesee";
    } else if (cvURL.indexOf("amd4u.com") != -1) {
        ReportSuiteID = "amdvgraphics,amdvaudiencegaming";
    } else if (cvURL.indexOf("querycn.php") != -1) {
        ReportSuiteID = "amdvsupport,amdvaudiencehome";
    } else if ((cvURL.indexOf('/mynda/') != -1) || (cvURL.indexOf('mynda.amd.com') != -1)) {
        ReportSuiteID = "amdvcorporate,amdvaudiencebusiness,amdvnda,amdvbusiness";
    } else if ((cvHostName.indexOf("-auth2007.amd.com") != -1) || (cvHostName.indexOf("-auth.amd.com") != -1) || (cvHostName.indexOf("-new.amd.com") != -1) || (cvHostName.indexOf("-prod.amd.com") != -1) || (cvHostName.indexOf("localhost") != -1) || (cvURL.indexOf(".hosted.jivesoftware.com") != -1) || (cvURL.indexOf("files.fuelintegrated.co.uk") != -1)) {
        ReportSuiteID = "amdvtest";
    } else if (cvURL.indexOf("cchecker") != -1) {
        ReportSuiteID = "amdvgraphics,amdvaudiencehome";
    } else if ((cvURL.indexOf("amdcentral") != -1) || (cvURL.indexOf("singanet") != -1)) {
        ReportSuiteID = "amdvcentral";
        if (cvURL.indexOf("amdcentral.amd.com") != -1) {
            ReportSuiteID += ",amdvcentral-corp";
            if (cvURL.indexOf("emea-amdcentral.amd.com") != -1) {
                ReportSuiteID += ",amdvcentral-emea";
            } else if (cvURL.indexOf("cn-amdcentral.amd.com") != -1) {
                ReportSuiteID += ",amdvcentral-cn";
            } else if (cvURL.indexOf("mys-amdcentral.amd.com") != -1) {
                ReportSuiteID += ",amdvcentral-mys";
            } else if ((cvURL.indexOf("sgp-amdcentral.amd.com") != -1) || (cvURL.indexOf("singanet") != -1)) {
                ReportSuiteID += ",amdvcentral-sgp";
            }
        }
    } else if (cvURL.indexOf("videocentral.amd.com") != -1) {
        ReportSuiteID += ",amdvvideocentral";
    } else if (cvURL.indexOf("searchamdcentral.amd.com") != -1) {
        ReportSuiteID += ",amdvcentral-search";
    } else if (cvURL.indexOf("connect.amd.com") != -1) {
        ReportSuiteID += "amdvconnect";
    } else if ((cvURL.indexOf('ati.com') != -1) || (cvURL.indexOf('file:') != -1) || (cvURL.indexOf('translate') != -1) || (cvURL.indexOf('proxy.ashx') != -1) || (cvURL.indexOf('webcache') != -1)) {
        ReportSuiteID = "amdvjunk";
    } else if ((cvURL.indexOf('subscriptions.amd.com/greatpower') != -1)) {
        ReportSuiteID = "amdvembedded,amdvaudiencebusiness,amdvbusiness,amdvglobal";
    } else if (cvHostName == 'amdryzenreviews.com') {
        ReportSuiteID = "amdvglobal";
    } else {
        ReportSuiteID = "amdvother";
    }

    if ((ReportSuiteID.indexOf("amdvtest") == -1) && (ReportSuiteID.indexOf("amdvcentral") == -1) && (ReportSuiteID.indexOf("amdvconnect") == -1) && (ReportSuiteID.indexOf("amdvjunk") == -1) && (cvURL.indexOf('download/ccc') == -1) && (cvURL.indexOf('/ccc/') == -1)) {
        if (cvURL.indexOf('support.amd.com') == -1) { //exclude support.amd.com from regional RS
            /* Adding AMD Regional Accounts */
            if ((cvURL.indexOf("/cn/") != -1) || (cvURL.indexOf("zh-cn") != -1) || (cvURL.indexOf(".cn") != -1) || (cvURL.indexOf("querycn.php") != -1) || (cvURL.indexOf("/gc/") != -1)) {
                ReportSuiteID = "amdvregions-cn," + ReportSuiteID; // AMD China
                cvCurrency = "CNY";
            } else if ((cvURL.indexOf("/tw/") != -1) || (cvURL.indexOf("zh-tw") != -1)) {
                ReportSuiteID = "amdvregions-tw," + ReportSuiteID; // AMD Taiwan
                cvCurrency = "TWD";
            } else if ((cvURL.indexOf("/ko/") != -1) || (cvURL.indexOf("/kr/") != -1) || (cvURL.indexOf("ko-kr") != -1)) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-kr," + ReportSuiteID; // AMD Korea
                cvCurrency = "KRW";
            } else if ((cvURL.indexOf("/ja/") != -1) || (cvURL.indexOf("/jp/") != -1) || (cvURL.indexOf("ja-jp") != -1)) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-jp," + ReportSuiteID; // AMD Japan
                cvCurrency = "JPY";
            } else if (cvURL.indexOf("/sg/") != -1) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-sg," + ReportSuiteID; // AMD Singapore
                cvCurrency = "SGD";
            } else if (cvURL.indexOf("/au/") != -1) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-au," + ReportSuiteID; // AMD Australia
                cvCurrency = "AUD";
            } else if (cvURL.indexOf("/my/") != -1) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-my," + ReportSuiteID; // AMD Malaysia
                cvCurrency = "MYR";
            } else if (cvURL.indexOf("/in/") != -1 || (cvURL.indexOf("/en-in") != -1)) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-in," + ReportSuiteID; // AMD India
                cvCurrency = "INR";
            } else if (cvURL.indexOf("/sv/") != -1 || (cvURL.indexOf("/sv-se") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-sv," + ReportSuiteID; // AMD Sweden
                cvCurrency = "SEK";
            } else if (cvURL.indexOf("/hk/") != -1) {
                ReportSuiteID = "amdvmegaregion-apac,amdvregions-hk," + ReportSuiteID; // AMD Hong Kong (English)
                cvCurrency = "HKD";
            } else if (cvURL.indexOf("/apj/") != -1) {
                ReportSuiteID = "amdvmegaregion-apac," + ReportSuiteID; // AMD APJ
            } else if ((cvURL.indexOf("/ca/") != -1) || (cvURL.indexOf("/us/") != -1) || (cvURL.indexOf("en-us") != -1) || (cvURL.indexOf("en-na") != -1) || (cvURL.indexOf("en-ca") != -1) || (cvURL.indexOf("/na/") != -1)) {
                ReportSuiteID = "amdvmegaregion-na," + ReportSuiteID; // AMD North America (English)
            } else if ((cvURL.indexOf("/la/") != -1) || (cvURL.indexOf("es-la") != -1) || (cvURL.indexOf("es-xl") != -1)) {
                ReportSuiteID = "amdvmegaregion-la,amdvregions-la," + ReportSuiteID; // AMD Latin America (Espanol)
            } else if ((cvURL.indexOf("/br/") != -1) || (cvURL.indexOf("pt-br") != -1)) {
                ReportSuiteID = "amdvmegaregion-la,amdvregions-br," + ReportSuiteID; // AMD Brazil (Portugues)
                cvCurrency = "BRL";
            } else if ((cvURL.indexOf("en-mx") != -1) || (cvURL.indexOf("es-mx") != -1)) {
                ReportSuiteID = "amdvmegaregion-la," + ReportSuiteID; // AMD Mexico (English & Spanish)
                cvCurrency = "MXN";
            } else if ((cvURL.indexOf("/uk/") != -1) || (cvURL.indexOf("en-gb") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-uk," + ReportSuiteID; // AMD United Kingdom (English)
                cvCurrency = "GBP";
            } else if ((cvURL.indexOf("/es/") != -1) || (cvURL.indexOf("es-es") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-es," + ReportSuiteID; // AMD Spain (Espanol)
            } else if ((cvURL.indexOf("/fr/") != -1) || (cvURL.indexOf("fr-fr") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-fr," + ReportSuiteID; // AMD France (Francais)
            } else if ((cvURL.indexOf("/de/") != -1) || (cvURL.indexOf("de-de") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-de," + ReportSuiteID; // AMD Germany
            } else if ((cvURL.indexOf("/it/") != -1) || (cvURL.indexOf("it-it") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-it," + ReportSuiteID; // AMD Italy (Italiano)
            } else if ((cvURL.indexOf("/pl/") != -1) || (cvURL.indexOf("pl-pl") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-pl," + ReportSuiteID; // AMD Poland (Polski)
                cvCurrency = "PLN";
            } else if ((cvURL.indexOf("/ru/") != -1) || (cvURL.indexOf("ru-ru") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-ru," + ReportSuiteID; // AMD Russia (Russian)
                cvCurrency = "RUB";
            } else if ((cvURL.indexOf("/tr/") != -1) || (cvURL.indexOf("tr-tr") != -1)) {
                ReportSuiteID = "amdvmegaregion-emea,amdvregions-tr," + ReportSuiteID; // AMD Turkey (Turkce)
                cvCurrency = "TRY";
            } else if (cvURL.indexOf("/emea/") != -1) {
                ReportSuiteID = "amdvmegaregion-emea," + ReportSuiteID; // emea
            }
        }
        if (/,$/i.test(ReportSuiteID)) {
            ReportSuiteID = ReportSuiteID + "amdvglobal";
        } else {
            ReportSuiteID = ReportSuiteID + ",amdvglobal";
        }
    }

    //marketing landing pages
    if ((cvURL.indexOf("global.amd.com") != -1) || (cvURL.indexOf("server.amd.com") != -1) || (cvURL.indexOf("experience.amd.com") != -1)) {
        var cvMetaRSID;
        var cvMetas = document.getElementsByTagName('meta');
        if (cvMetas.length > 0) {
            for (var x = 0, y = cvMetas.length; x < y; x++) {
                if (cvMetas[x].name.toLowerCase() == "scrs") {
                    cvMetaRSID = cvMetas[x];
                    if (cvMetaRSID.content.toLowerCase() != "") {
                        if (ReportSuiteID.indexOf("amdverror") != -1) {
                            ReportSuiteID = ReportSuiteID.replace("amdverror,", "");
                        }
                    }
                    if (cvMetaRSID.content.toLowerCase() != "dnt") {
                        ReportSuiteID += "," + cvMetaRSID.content.toLowerCase();
                    }
                    if (cvMetaRSID.content.toLowerCase() == "amdvplugindev") {
                        ReportSuiteID = cvMetaRSID.content.toLowerCase();
                    }
                }
            }
        }
        var reportSuiteMatrix = {
            "amdvother02": "amdvoss",
            "amdvother03": "amdvserver",
            "amdvother05": "amdvir",
            "amdvother06": "amdvforesee",
            "amdvother07": "amdvcomponent",
            "amdvother08": "amdvcorporate",
            "amdvother11": "amdvseamicro",
            "amdvother12": "amdvsalespro",
            "amdvother13": "amdvappzone",
            "amdvother14": "amdvramdisk",
            "amdvother16": "amdvworkstation",
            "amdvother17": "amdvclient",
            "amdvother18": "amdvgraphics",
            "amdvother19": "amdvaudiencehome",
            "amdvother20": "amdvaudiencebusiness",
            "amdvother21": "amdvaudiencedeveloper",
            "amdvother22": "amdvaudiencegaming",
            "amdvother25": "amdvgizmosphere",
            "amdvother30": "amdvjunk"
        };

        for (var rprtSuite in reportSuiteMatrix) {
            if (reportSuiteMatrix.hasOwnProperty(rprtSuite)) {
                if (ReportSuiteID.indexOf(rprtSuite) != -1) {
                    ReportSuiteID = ReportSuiteID.replace(rprtSuite, reportSuiteMatrix[rprtSuite]);
                }
            }
        }
        ReportSuiteID = ReportSuiteID + ",amdvlandingpage";
    }
    if ((cvURL.indexOf('experience.amd.com/redirect/') != -1)) {
        ReportSuiteID = "amdvother";
    }

    ReportSuiteID = ReportSuiteID.toLowerCase();
    if ((ReportSuiteID.indexOf("amdvmegaregion-emea") != -1) && cvCurrency == "USD") cvCurrency = "EUR";

    /* GA VWO tracking */
    /* if (typeof(_vis_opt_settings_loaded) == "boolean") {
        var _combination = _vis_opt_readCookie('_vis_opt_exp_' + _vis_opt_experiment_id + '_combi');
        if (typeof(_vis_opt_comb_name[_combination]) != "undefined") {
            sAA.eVar14 = _vis_opt_experiment_id + ':' + _vis_opt_comb_name[_combination];
        }
    } */


    //return [ReportSuiteID,cvCurrency,cvURL];
    return {
        "ReportSuiteID": ReportSuiteID || "",
        "cvCurrency": cvCurrency || "",
        "cvURL": cvURL || "",
        "cvURLnoQuery": parseUri(cvURL).noquery.toLowerCase() || "",
        "cvLang": cvLang || "",
        "VWO": sAA.eVar14 || "",
        "cmpid": parseUri(cvURL).queryKey["cmpid"] || ""
    };
})();

function getUTCDate() {
	cvCurrentDT = new Date();
	return Date.UTC(cvCurrentDT.getUTCFullYear(), cvCurrentDT.getUTCMonth(), cvCurrentDT.getUTCDate(), cvCurrentDT.getUTCHours(), cvCurrentDT.getUTCMinutes(), cvCurrentDT.getUTCSeconds());
}

// CVA Cross Visit Attribution BOF

function cfCVAConversion(cvConversionType) {
// delete
	if (!cvConversionType) cvConversionType = "UK";
	cvCVA = cfGetCookie('c_sccva') || ""; //sccva = SiteCatalyst cross visit attribution
	if (!!cvCVA) { //cookie exists
		cvCVASplit = cvCVA.split(',');
		if (!cfis_int(cvCVASplit[0])){cvCVASplit[0]=cvCurrentDTUTC;}
		if (cfGetByteSize(cvCVA) > 950) {
			if(cvCVA.indexOf("CV")) {
				cvCVASplit = [cvCurrentDTUTC,"CV","Clear"];
			} else {
				cvCVASplit = [cvCurrentDTUTC,"Clear"];
			}
		}
		cvCVASplit.shift(); //drop last time stamp
		cvCVAtoOSC=cvCVASplit+",CV|"+cvConversionType;
		cvCVA=cvCurrentDTUTC+","+cvCVAtoOSC;
		cfSetCookie('c_sccva',cvCVA,365);
		return cvCVAtoOSC;
	}
	else { //no cookie;
		cvCVARefTypeResult = cfCVARefTypeCheck();
		cvCVAtoOSC=cvCVARefTypeResult+",CV|"+cvConversionType;
		cvCVA=cvCurrentDTUTC+","+cvCVAtoOSC;
		cfSetCookie('c_sccva',cvCVA,365);
		return cvCVAtoOSC;
	}
}

function cfFormPassed(cvFormPassedName) {
	dataLayer.push({"event":"FormComplete","FormName":cvFormPassedName});
}

function cfCVARefTypeCheck() {
	return ""; //cvCVARefType;
}

// CVA Cross Visit Attribution EOF

//SP2013 shop BOF
function cfSetShopValues() { //function called onpostrender of shop item/detail page
	if (cvURL.substring(0, 5) != "https") {
		if (typeof document.getElementsByName("shopUniqueID")[0] != "undefined") {
			s.prop32 = s.eVar32 = document.getElementsByName("shopUniqueID")[0].value;   // ProductID
			s.products = ";" + document.getElementsByName("shopUniqueID")[0].value;   // ProductID
		}
	}
} //SP2013 shop EOF

//on-site search (OSS) BOF
cvtimer=1;
cvSavedSearchKeywordCheck = [];
cvSavedSearchKeywordCheck[0] = "";
cvSavedSearchKeywordCheck[1] = "";

function cfGetSearchKeywordFromURL(){
	cvSearchKeywordCheck=cfGetQParamwithHash("k",document.URL.toLowerCase());
	if(cvSearchKeywordCheck.indexOf("#s=") != -1) {
		cvSearchKeywordCheck=cvSearchKeywordCheck.substring(0,cvSearchKeywordCheck.indexOf("#s="));
	}
	if(cvSearchKeywordCheck.indexOf("#k=") != -1) {
		cvSearchKeywordCheck=cvSearchKeywordCheck.substring(cvSearchKeywordCheck.lastIndexOf("#k=")+3);
	}
	return cvSearchKeywordCheck;
}

function cfCheckSearchAjax() {
	if(document.getElementById('Result')) {
		cvSearchHTML = document.getElementById('Result').innerHTML;
		cvSearchURL = decodeURI(document.URL.toLowerCase());
		if ((cvSearchHTML == document.getElementById('Result').innerHTML) && !!cvCheckSearchAjax) {
			window.clearInterval(cvCheckSearchAjax);
			cvCheckSearchAjax = '';
			cfTrackSearch1();
		}
	}
}
//csKeyword, csSearchOriginationPage, csTotalCounts, csResultsRange, csPageNumber
function cfTrackSearch1() {
if (cvURL.substring(0, 5) != "https") {
	cvSavedSearchKeywordCheck[0] = cvSavedSearchKeywordCheck[1];
	cvSavedSearchKeywordCheck[1] = cfGetSearchKeywordFromURL();

	if (typeof csKeyword == 'undefined') {
		csKeyword = cfGetSearchKeywordFromURL();
			}
		if (typeof csKeyword != 'undefined') {
		if (!!csKeyword) {
			s.prop6 = s.server; // Search Property ID
			s.prop55 = s.eVar55 = csKeyword.toLowerCase(); // Internal Search Terms
			if (typeof s.referrer != 'undefined') s.eVar39 = s.prop11 = s.referrer;
			if (typeof csTotalCounts != 'undefined') {
				if (csTotalCounts == 0) {
					if(jQuery("*").hasClass("ms-srch-group-count")) {
						csTotalCounts=jQuery( ".ms-srch-group-count" ).text().match(/\d/g).join("");
					}
				}
				s.prop36 = s.eVar36 = csTotalCounts; // Total Counts
			}

			if (cfCookieEnabled()) {
				cvCookieDURL = cfGetCookie('c_durl') || "";
				if (/shop\.amd\.com\/.*k=.*/i.test(cvCookieDURL)) {cvLinkedSearch=1;}
				else cvLinkedSearch=0;
				cfSetCookie('c_durl',"",1); //durl = cleared
			}

			if(!cvSavedSearchKeywordCheck[0] || (!!cvSavedSearchKeywordCheck[0] &&(cvSavedSearchKeywordCheck[0] != cvSavedSearchKeywordCheck[1]))) {
				s.events = s.apl(s.events,"event5",",",1); // On-Site Search (Counter)

				//if (csTotalCounts == 0) {
				if (jQuery( "#NoResult").length ==1) {
					s.prop9 = s.eVar9 = csKeyword.toLowerCase(); // Internal Search Failed Terms
					s.events = s.apl(s.events,"event12",",",1); // On-Site Search (Failed)
				} else {
					s.events = s.apl(s.events,"event11",",",1); // On-Site Search (Success)
				}
			}
			s.prop37 = s.eVar37 = Math.round(csPageNumber); // Results Page Number
			s.prop38 = s.eVar38 = csKeyword.toLowerCase() + "|" + csResultsRange; // Keywords | Results Range

			// On-Site Search (Advanced) Event
			cvSTL = 1;
			s.tl(this,'o',cvURL);
			s.clearVars();
			s.events = s.linkTrackEvents = ''; cvSTL = 0;
		}
	}
}
}

function cfTrackSearch() {
//empty
}

/* Banner tracking BOF */
function cfBannerImpression(cvBIrs,cvBIprop,cvBIevar,cvBIevent,cvBIlnkname) {
}
/* Banner tracking EOF */

/* NotifyMe Error BOF */
function cfNotifyMeError(cvProduct) {
	dataLayer.push({"event":"NotifyMeError","NFMProductName":cvProduct});
	// remove for switch to GTM
	if (cvURL.substring(0, 5) != "https") {
	s.account = ReportSuiteID;
	s.linkTrackEvents="";
	s.prop12=s.pageName;
	s.prop25 = ReportSuiteID;
	s.prop13=s.eVar13="Form|SP|NotifyMe|"+cvProduct+"|Error";
	s.prop23 = s.eVar23 = s.referrer;
	s.events="";

	if(cvDNTDomains.indexOf(cfUtility(cvURL,'server')) == -1) {
		s.visitorNamespace="amd";
		s.trackingServer="metrics.amd.com";
		s.trackingServerSecure="smetrics.amd.com";
	}

	cvSTL = 1;
	s.tl(this,'o',cvURL);
	s.events = s.linkTrackEvents = ''; cvSTL = 0;
	// end of remove
	}
}
/* NotifyMe Error tracking EOF */

/* Custom Function for Referrer Tracking */
function cfNoReferrer (cvURL) {
	if (cvURL.substring(0, 5) != "https") {
	if (cvURL.indexOf("elq=") != -1) {
		s.referrer = "mail://eloqua.email.campaign/";
		cvReferrer = s.prop23 = s.eVar23 = s.referrer;
	}
	}
}

function cfReferrer (cvReferrer) {
	if (cvURL.substring(0, 5) != "https") {
	if (cvReferrer.indexOf("/plus.url.google.com/") != -1) {
		/* Clean up Google Plus referrer values */
		document.referrer=cvReferrer;
		s.cleanGP=new Function("var s=this,a=document.referrer,b='plus.url.go"+"ogle.com',c,d,e,g,i=0,p,referrer;if(a&&a.split('/')[2]==b){c=a.spli"+"t(/[\?|&]/);d=c[0].length;e=c[0].lastIndexOf('/');g=d>e?c[0].substr"+"ing(0,e+1):c[0];for(i=0;i<=c.length;i++)'url'==c[i].substring(0,3)&"+"&(p='?'+unescape(c[i]),i=c.length+1);g&&(this.s.referrer=p?g+p:g);}"+"return this.s.referrer")();

		cvReferrer=this.s.referrer;
	}
	else if (cvReferrer.indexOf("/links.global.amd.com/") != -1) {
		cvReferrer = document.referrer = s.referrer = "mail://eloqua.email.campaign/";
	}

	cvReferrer = cvReferrer.toLowerCase();

	if (cvReferrer && (cfPageName(cvReferrer) != s.pageName)) {
		s.prop23 = cfUtility(cvReferrer,'server');	// Referring Domain
		s.referrer = s.eVar23 = cvReferrer;	// Referring URL
		return this.s.referrer;
	}
	}
}

/* Custom Functions for Responsive Web (RW) BOF */
// http://blogs.adobe.com/digitalmarketing/digital-marketing/mobile/responsive-web-design-and-web-analytics/

// userAgent assignment
	cvUA="";
	if (navigator.userAgent) cvUA=navigator.userAgent;
	cvPlatformCategory="";

/* RW: Device by UA - eVar41 */
function cfDeviceByUA(){
	catergorize_tablets_as_desktops = false;  //If TRUE, tablets will be categorized as desktops
	catergorize_tvs_as_desktops = false;  //If TRUE, smartTVs will be categorized as desktops

	// Check if user agent is a smart TV - http://goo.gl/FocDk
	if (/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i.test(cvUA))
		{cvPlatformCategory = "tv";}
	// Check if user agent is a TV Based Gaming Console
	else if (/Xbox|PLAYSTATION.3|Wii/i.test(cvUA))
		{cvPlatformCategory = "gaming console";}
	// Check if user agent is a Tablet
	else if(/iP(a|ro)d/i.test(cvUA) || /tablet/i.test(cvUA) && !(/RX-34/i.test(cvUA)) || /FOLIO/i.test(cvUA))
		{cvPlatformCategory = "tablet";}
	// Check if user agent is an Android Tablet
	else if (/Linux/i.test(cvUA) && /Android/i.test(cvUA) && !(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i.test(cvUA)))
		{cvPlatformCategory = "tablet";}
	// Check if user agent is a Kindle or Kindle Fire
	else if (/Kindle/i.test(cvUA) || /Mac.OS/i.test(cvUA) && /Silk/i.test(cvUA))
		{cvPlatformCategory = "tablet";}
	// Check if user agent is a pre Android 3.0 Tablet
	else if (/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i.test(cvUA) || /MB511/i.test(cvUA) && /RUTEM/i.test(cvUA))
		{cvPlatformCategory = "tablet";}
	// Check if user agent is unique Mobile User Agent
	else if (/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i.test(cvUA))
		{cvPlatformCategory = "mobile";}
	// Check if user agent is an odd Opera User Agent - http://goo.gl/nK90K
	else if (/Opera/.test(cvUA) && /Windows.NT.5/i.test(cvUA) && /HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i.test(cvUA))
		{cvPlatformCategory = "mobile";}
	// Check if user agent is Windows Desktop
	else if (/Windows.(NT|XP|ME|9)/i.test(cvUA) && !(/Phone/i.test(cvUA)) || /Win(9|.9|NT)/i.test(cvUA))
		{cvPlatformCategory = "desktop";}
	// Check if agent is Mac Desktop
	else if (/Macintosh|PowerPC/i.test(cvUA) && !(/Silk/i.test(cvUA)))
		{cvPlatformCategory = "desktop";}
	// Check if user agent is a Linux Desktop
	else if (/Linux/.test(cvUA) && /X11/i.test(cvUA))
		{cvPlatformCategory = "desktop";}
	// Check if user agent is a Solaris, SunOS, BSD Desktop
	else if (/Solaris|SunOS|BSD/i.test(cvUA))
		{cvPlatformCategory = "desktop";}
	// Check if user agent is a Desktop BOT/Crawler/Spider
	else if (/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i.test(cvUA) && !(/Mobile/i.test(cvUA)))
		{cvPlatformCategory = "bot/crawler/spider";}
	else if (!cvUA) {cvPlatformCategory ="NoUA";}
	// Otherwise assume it is a Mobile Device
	else {cvPlatformCategory = "mobile";}

	// Categorize Tablets as desktops
	if (catergorize_tablets_as_desktops && cvPlatformCategory == "tablet")
		{cvPlatformCategory = "desktop";}

	// Categorize TVs as desktops
	if (catergorize_tvs_as_desktops && cvPlatformCategory == "tv")
		{cvPlatformCategory = "desktop";}

	cvDeviceByUA = cvPlatformCategory;
	return cvDeviceByUA;
} // End cfDeviceByUA function

// Returns true if desktop user agent is detected
function isDesktop(){
	cvDeviceByUA = cfDeviceByUA();
	if(cvDeviceByUA == "desktop"){return true;}
	return false;
}
// Returns true if tablet user agent is detected
function isTablet(){
	cvDeviceByUA = cfDeviceByUA();
	if(cvDeviceByUA == "tablet"){return true;}
	return false;
}
// Returns true if tablet user agent is detected
function isTV(){
	cvDeviceByUA = cfDeviceByUA();
	if(cvDeviceByUA == "tv"){return true;}
	return false;
}
// Returns true if mobile user agent is detected
function isMobile(){
	cvDeviceByUA = cfDeviceByUA();
	if(cvDeviceByUA == "mobile"){return true;}
	return false;
}

/* Custom Function for Link Tracking */

//Google Analytics DriverInstalled
if (cvURL.indexOf("driverinstalled") != -1) {
  //http://www.amd.com/di?vid1=v1111&vid2=v2222&vid3=v3333&vid4=v4444&did1=d1111&did2=d2222&did3=d3333&did4=d4444&ssvid1=ssv1111&ssvid2=ssv2222&ssvid3=ssv3333&ssvid4=ssv4444&ssid1=ss1111&ssid2=ss2222&ssid3=ss3333&ssid4=ss4444&pid1=p1111&pid2=p2222&pid3=p3333&pid4=p4444
	//https://secure.amd.com/di?vid1=v1RadeonÃƒÂ¢"Ã‚Â¢ HD 1111*&vid2=v2RadeonÃƒÂ¢"Ã‚Â¢ HD 2222*&vid3=v3RadeonÃƒÂ¢"Ã‚Â¢ HD 3333*&vid4=v4RadeonÃƒÂ¢"Ã‚Â¢ HD 4444*&did1=d1111&did2=d2222&did3=d3333&did4=d4444&ssvid1=ssv1111&ssvid2=ssv2222&ssvid3=ssv3333&ssvid4=ssv4444&ssid1=ss1111&ssid2=ss2222&ssid3=ss3333&ssid4=ss4444&pid1=p1111&pid2=p2222&pid3=p3333&pid4=p4444
	cvDILang = cfDetectLanguage() || "";
	cvDILangURLwww = "en-us"; //set default
	cvDILangURL = "en"; //set default
	if (!!cvDILang) {
	   if (cvDILang.indexOf("en") !=-1) {cvDILangURL="en"; cvDILangURLwww="en-us";}
	   else if (cvDILang.indexOf("de") !=-1) {cvDILangURL="de"; cvDILangURLwww="de-de";}
		 //	else if (cvDILang.indexOf("es") !=-1) {cvDILangURL="es"; cvDILangURLwww="es-es";}
		 else if (cvDILang.indexOf("fr") !=-1) {cvDILangURL="fr"; cvDILangURLwww="fr-fr";}
		 //	else if (cvDILang.indexOf("it") !=-1) {cvDILangURL="it"; cvDILangURLwww="it-it";}
		 //	else if (cvDILang.indexOf("pl") !=-1) {cvDILangURL="pl"; cvDILangURLwww="pl-pl";}
		 else if (cvDILang.indexOf("pt") !=-1) {cvDILangURL="br"; cvDILangURLwww="pt-br";}
		 else if (cvDILang.indexOf("ru") !=-1) {cvDILangURL="ru"; cvDILangURLwww="ru-ru";}
		 //	else if (cvDILang.indexOf("sv") !=-1) cvDILangURL="se";
		 //	else if (cvDILang.indexOf("tr") !=-1) {cvDILangURL="tr"; cvDILangURLwww="tr-tr";}
		 else if (cvDILang.indexOf("cn") !=-1) {cvDILangURL="cn"; cvDILangURLwww="zh-cn";}
		 else if (cvDILang.indexOf("tw") !=-1) {cvDILangURL="tw"; cvDILangURLwww="zh-tw";}
		 else if (cvDILang.indexOf("ko") !=-1) {cvDILangURL="kr"; cvDILangURLwww="ko-kr";}
		 else if (cvDILang.indexOf("ja") !=-1) {cvDILangURL="jp"; cvDILangURLwww="ja-jp";}
	}
	//cvDILangURLwww = (cvDILangURL=="en") ? "en-us" : cvDILangURL;
	cvDILangURLwww="en-us"; //temp fix for missing languages. remove this line to go back to languages.
  var cvParamsV = [], cvParamsD = [], cvParamsSSV = [], cvParamsSS = [], cvParamsP = [], cvParamPT='', cvParamOS='', cvParamOSBit='', cvParamCPU='';

	if (cvURL.indexOf("driverinstalled/index.html") != -1) { // cvDI = Driver Installed
	   sAA.events += ",event55"; // Driver Installed (DI) Event
		 cvEloquaUID = cvDIRirectURL = "";
		 cvDIRegistered = "no";
		 cvURL=cvURL.toLowerCase();
		 cvDIparams = cfUtility(cvURL, 'parametersonly') || "";
		 cvDIparams=cvDIparams.toLowerCase();
		 cvDIparams=cvDIparams.replace(/[^.\sa-zA-Z0-9&?=,_-]/g,'');
     cvParamPT = "pt=" +  (parseUri(cvURL).queryKey["pt"] || "");
		 cvParamsV[0] = "vid1=" + (parseUri(cvURL).queryKey["vid1"] || "");
		 cvParamsV[1] = "vid2=" + (parseUri(cvURL).queryKey["vid2"] || "");
		 cvParamsV[2] = "vid3=" + (parseUri(cvURL).queryKey["vid3"] || "");
		 cvParamsV[3] = "vid4=" + (parseUri(cvURL).queryKey["vid4"] || "");
		 cvParamsP[0] = "pid1=" + (parseUri(cvURL).queryKey["pid1"] || "");
		 cvParamsP[1] = "pid2=" + (parseUri(cvURL).queryKey["pid2"] || "");
		 cvParamsP[2] = "pid3=" + (parseUri(cvURL).queryKey["pid3"] || "");
		 cvParamsP[3] = "pid4=" + (parseUri(cvURL).queryKey["pid4"] || "");
		 cvParamsD[0] = "did1=" + (parseUri(cvURL).queryKey["did1"] || "");
		 cvParamsD[1] = "did2=" + (parseUri(cvURL).queryKey["did2"] || "");
		 cvParamsD[2] = "did3=" + (parseUri(cvURL).queryKey["did3"] || "");
		 cvParamsD[3] = "did4=" + (parseUri(cvURL).queryKey["did4"] || "");
		 cvParamsSSV[0] = "ssvid1=" + (parseUri(cvURL).queryKey["ssvid1"] || "");
		 cvParamsSSV[1] = "ssvid2=" + (parseUri(cvURL).queryKey["ssvid2"] || "");
		 cvParamsSSV[2] = "ssvid3=" + (parseUri(cvURL).queryKey["ssvid3"] || "");
		 cvParamsSSV[3] = "ssvid4=" + (parseUri(cvURL).queryKey["ssvid4"] || "");
		 cvParamsSS[0] = "ssid1=" + (parseUri(cvURL).queryKey["ssid1"] || "");
		 cvParamsSS[1] = "ssid2=" + (parseUri(cvURL).queryKey["ssid2"] || "");
		 cvParamsSS[2] = "ssid3=" + (parseUri(cvURL).queryKey["ssid3"] || "");
		 cvParamsSS[3] = "ssid4=" + (parseUri(cvURL).queryKey["ssid4"] || "");
     cvParamOS = "os=" + (parseUri(cvURL).queryKey["os"] || "");
     cvParamOSBit = "osbit=" + (parseUri(cvURL).queryKey["osbit"] || "");
     cvParamCPU =  "cpu=" + (parseUri(cvURL).queryKey["cpu"] || "");

		 sAA.eVar17=cvParamsV.join(",");
		 sAA.eVar18=cvParamsP.join(",");
		 sAA.eVar19=cvParamsD.join(",");
		 sAA.eVar21=cvParamsSSV.join(",");
		 sAA.eVar22=cvParamsSS.join(",");

		 sAA.eVar17a=cvParamsV.join("|");
		 sAA.eVar18a=cvParamsP.join("|");
		 sAA.eVar19a=cvParamsD.join("|");
		 sAA.eVar21a=cvParamsSSV.join("|");
		 sAA.eVar22a=cvParamsSS.join("|");

		 if (cfCookieEnabled()) {
       cvDI = cfGetCookie('c_scdi') || ""; //scdi = SiteCatalyst Driver Installed

			 if (!!cvDI) { //cookie exists
         cvDISplit = cvDI.split(',');

				 var i,cvElement,cvElementValue;
				 for (i=0;i<cvDISplit.length;i++)
				 {
           cvElement=cvDISplit[i].substr(0,cvDISplit[i].indexOf("="));
					 cvElementValue=cvDISplit[i].substr(cvDISplit[i].indexOf("=")+1) || "";
					 cvElement=cvElement.replace(/^\s+|\s+$/g,"");
					 if(cvElement=="reg") {
             cvDIRegistered=cvElementValue;
           }
				 }
			 }
		 }

		 cvDICookieValue = "reg="+cvDIRegistered+",lang="+cvDILang+","+cvParamPT+","+sAA.eVar17+","+sAA.eVar18+","+sAA.eVar19+","+sAA.eVar21+","+sAA.eVar22+","+cvParamOS+","+cvParamOSBit+","+cvParamCPU;
		 cvDICookieValue=cvDICookieValue.replace(/[^.\sa-zA-Z0-9=,_-]/g,'');
		 if (cvDIparams.indexOf("?") != -1) {
       cvDIparams+="&lang="+cvDILang;
		 } else {
       cvDIparams+="?lang="+cvDILang;
		 }

		 if(cvDIRegistered=="yes") {
       cvDIRedirectURL="http://experience.amd.com/driver-installed/thank-you/";
       //"http://www.amd.com/"+cvDILangURLwww+"/who-we-are/subscriptions/catalyst-software-installed"; //"/products/technologies/amd-catalyst/Pages/catalyst-software-installed.aspx";
		 } else {
       if (cvParamPT.indexOf("radeonpro") !== -1) {
         cvDIRedirectURL="http://experience.amd.com/driver-installed/prographics-en/";
       } else {
         cvDIRedirectURL="http://experience.amd.com/driver-installed/"+cvDILangURL;
       }
		 }
		 if (!cfCookieEnabled()) {cvDIRedirectURL+=cvDIparams;}
		 else {cfSetCookie('c_scdi',cvDICookieValue,365);}
		 dataLayer.push({
       'PT':cvParamPT||'',
	     'VID':sAA.eVar17a||'',
	     'PID':sAA.eVar18a||'',
	     'DID':sAA.eVar19a||'',
	     'SSVID':sAA.eVar21a||'',
	     'SSID':sAA.eVar22a||'',
       'OS':cvParamOS||'',
       'OSBIT':cvParamOSBit||'',
       'CPU':cvParamCPU||'',
       'event' : 'DriverInstalled',
       'eventCallback' : function() {
         window.location.href=cvDIRedirectURL;
       }
     });
	}
	if (cvURL.indexOf("driverinstalled/thankyou.html") != -1) { //opt-in thank you (http://subscriptions.amd.com/driverinstalled/thankyou.html)
    cvEloquaUID = cvDISplit = "";
		cvDIRegistered = "yes";
    cvDIparams = cfUtility(cvURL, 'parametersonly') || "";
    cvDI = cfGetCookie('c_scdi') || ""; //scdi = SiteCatalyst Driver Installed

    if (!!cvDI) { //cookie exists
      cvDISplit = cvDI.split(',');
      var DILoop,cvDIElement='', cvDIElementValue='', cvDIPT='';
      for (DILoop = 0; DILoop < cvDISplit.length; DILoop++) {
           cvDIElement = cvDISplit[DILoop].substr(0, cvDISplit[DILoop].indexOf("="));
           cvDIElementValue = cvDISplit[DILoop].substr(cvDISplit[DILoop].indexOf("=") + 1) || "";
           cvDIElement = cvDIElement.replace(/^\s+|\s+$/g, "");

           if (cvDIElement == "pt") {
             cvDIPT = cvDIElementValue;
           }
      }
      cvDISplit.shift(); //drop reg value
    }
    cvDICookieValue = "reg=yes,"+cvDISplit;
    cfSetCookie('c_scdi',cvDICookieValue,365);
    if (cvDIPT.indexOf("radeonpro") !== -1) {
      cvDIRedirectURL="http://www.amd.com/"+cvDILangURLwww+"/products/graphics/workstation/radeon-pro"+cvDIparams;
    } else {
		  cvDIRedirectURL="http://www.amd.com/"+cvDILangURLwww+"/who-we-are/subscriptions/thank-you"+cvDIparams;
    }
    window.location.href=cvDIRedirectURL;
		/* dataLayer.push({
      'PT':cvParamPT||'',
      'VID':sAA.eVar17a||'',
      'PID':sAA.eVar18a||'',
      'DID':sAA.eVar19a||'',
      'SSVID':sAA.eVar21a||'',
      'SSID':sAA.eVar22a||'',
      'OS':cvParamOS||'',
      'OSBIT':cvParamOSBit||'',
      'CPU':cvParamCPU||'',
      'event' : 'DriverInstalled',
      'eventCallback' : function() {
        window.location.href=cvDIRedirectURL;
      }
    }); */
  }
}

//Google Analytics Compatibility Checker
//https://secure.amd.com/acc
//http://www.amd.com/us/as/cchecker/index.html
	if (cvURL.indexOf("cchecker/") != -1) {
		if(parseUri(cvURL).queryKey["lang"]) {
			cvCCLang = parseUri(cvURL).queryKey["lang"];
		} else cvCCLang = cvLang || "";
		cvCCLangURL = "us"; //set default

		if (cvURL.indexOf("cchecker/index.html") != -1) { // cvCC = Compatibility Checker
			cvEloquaUID = cvCCRirectURL = "";
			cvCCRegistered = "no";
			cvURL=cvURL.toLowerCase();
			cvCCparams = parseUri(cvURL).query || "";
			cvCCparams=cvCCparams.toLowerCase();
			cvCCparams=cvCCparams.replace(/[^.\sa-zA-Z0-9&?=,_-]/g,'');
			cvCCGC = (parseUri(cvURL).queryKey["gesturecontrol"] || 0);
			cvCCFL = (parseUri(cvURL).queryKey["facelogin"] || 0);
			cvCCAZ = (parseUri(cvURL).queryKey["appzone"] || 0);
			cvCCSM = (parseUri(cvURL).queryKey["screenmirror"] || 0);
			cvCCCPU = (parseUri(cvURL).queryKey["cpu"] || "");
			cvCCNordic = (parseUri(cvURL).queryKey["nordic"] || 0);

			if (cfCookieEnabled()) {
				cvCC = cfGetCookie('c_sccc') || ""; //sccc = SiteCatalyst Compatibility Checker

				if (!!cvCC) { //cookie exists
					cvCCSplit = cvCC.split(',');

					var i,cvElement,cvElementValue;
					for (i=0;i<cvCCSplit.length;i++)
					{
						cvElement=cvCCSplit[i].substr(0,cvCCSplit[i].indexOf("="));
						cvElementValue=cvCCSplit[i].substr(cvCCSplit[i].indexOf("=")+1) || "";
						cvElement=cvElement.replace(/^\s+|\s+$/g,""); //clean leading and trailing spaces
						if(cvElement=="reg") cvCCRegistered=cvElementValue;
						if(cvElement=="gc" && cvElementValue==1) cvCCGC=1;
						if(cvElement=="fl" && cvElementValue==1) cvCCFL=1;
						if(cvElement=="az" && cvElementValue==1) cvCCAZ=1;
						if(cvElement=="sm" && cvElementValue==1) cvCCSM=1;
						if(cvElement=="cpu" && !cvCCCPU && !!cvElementValue) cvCCCPU=cvElementValue; //if cookie has value, don't overwrite with blank

					}
				}
			}

			cvCCCookieValue = "reg="+cvCCRegistered+",lang="+cvCCLang+",cpu="+cvCCCPU+",gc="+cvCCGC+",fl="+cvCCFL+",az="+cvCCAZ+",sm="+cvCCSM;
			cvCCCookieValue=cvCCCookieValue.replace(/[^.\sa-zA-Z0-9=,_-]/g,'');
			if (cvCCparams.indexOf("?") != -1) {
				cvCCparams+="&lang="+cvCCLang;
			} else {
				cvCCparams+="?lang="+cvCCLang;
			}
			if(cvCCRegistered=="yes") {
				cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/en/";
			} else {
				cvCCLangURL = cvCCLangURL.toUpperCase();
				if (cvCCLangURL == "US") cvCCLangURL="";
				cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/en/";
			}

			//Nordic cchecker
			if (cvCCNordic==1){
				if ((cvCCLang.indexOf("no") !=-1) || (cvCCLang.indexOf("nn") !=-1)) cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/nordic/no/";
				else if (cvCCLang.indexOf("da") !=-1) cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/nordic/dk/";
				else if (cvCCLang.indexOf("sv") !=-1) cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/nordic/se/";
				else if (cvCCLang.indexOf("fi") !=-1) cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/nordic/fi/";
				else cvCCRedirectURL="http://experience.amd.com/compatibility-checker-installed/nordic/en/";
			}

			if (!cfCookieEnabled()) {cvCCRedirectURL+=cvCCparams;}
			else {cfSetCookie('c_sccc',cvCCCookieValue,365);}

			window.location.href=cvCCRedirectURL;
		}
		if (cvURL.indexOf("cchecker/thankyou.html") != -1) { //opt-in thank you (http://subscriptions.amd.com/cchecker/thankyou.html)
			cvEloquaUID = cvCCSplit = "";
			cvCCRegistered = "yes";
			cvCCparams = cfUtility(cvURL, 'parametersonly') || "";
			cvCCRedirectURL="http://www.amd.com/";
			cvCC = cfGetCookie('c_sccc') || ""; //sccc = SiteCatalyst Compatibility Checker

			if (!!cvCC) { //cookie exists
				cvCCSplit = cvCC.split(',');
				cvCCSplit.shift(); //drop reg value
			}
			cvCCCookieValue = "reg=yes,"+cvCCSplit;
			cfSetCookie('c_sccc',cvCCCookieValue,365);
			window.location.href=cvCCRedirectURL;
		}
	}



function cfTimedReading(){ //Content Consumption
if (cvURL.substring(0, 5) != "https") {
	s.account = ReportSuiteID;

	s.prop12 = s.pageName;
	s.prop25 = ReportSuiteID;
	if(cvDNTDomains.indexOf(cfUtility(cvURL,'server')) == -1) {
		s.visitorNamespace="amd";
		s.trackingServer="metrics.amd.com";
		s.trackingServerSecure="smetrics.amd.com";
	}
	s.events = s.linkTrackEvents = 'event33';
	cvSTL = 1;
	s.tl(this,'o',cvURL);
	clearTimeout(cvTimedReading);
	s.events = s.linkTrackEvents = ''; cvSTL = 0;
	if (cvSPwebtrack==1) {(function(){return ewt.track({name:'CC|'+s.prop12,type:'content-consumed',link:o }); } )(); }
}
}

function cvSendOption(id,selectedid){
if (cvURL.substring(0, 5) != "https") {
	var cvSelectedID = selectedid;
	var cvSelectID = id;
	Destination_LID = s.prop13=s.eVar13=cvSelectID + "|" + cvSelectedID;
	Destination_URL_wParam = s.prop14 = s.prop12 = s.eVar6 = cvURL;
	s.events = s.linkTrackEvents = "event6";
	s.prop25=ReportSuiteID;
	if(cvDNTDomains.indexOf(cfUtility(cvURL,'server')) == -1) {
		s.visitorNamespace="amd";
		s.trackingServer="metrics.amd.com";
		s.trackingServerSecure="smetrics.amd.com";
	}
	cvSTL = 1;
	s.tl(this,'o',cvURL);
	s.events = s.linkTrackEvents = ''; cvSTL = 0;
}
}

//migrate as variable if needed
function cfPageName(cvURL,cvParamInPageName,cvParamToInclude) {
	var cvPageName;
	if (cvParamInPageName == 1) {
	    if (!!cvParamToInclude) {
	        var cvParam_Modified = "?";
	        cvParam_Split = cvParamToInclude.toLowerCase().split(",");
	        for (var i = 0; i < cvParam_Split.length; i = i + 1) {
				if (cfGetQParam(cvURL,cvParam_Split[i])) cvParam_Modified = cvParam_Modified + cvParam_Split[i] + "=" + cfGetQParam(cvURL,cvParam_Split[i]) + "&";
	        }
	        cvParam_Modified = cvParam_Modified.substring(0, cvParam_Modified.length - 1);
	        cvPageName = cfUtility(cvURL,'channel') + cfUtility(cvURL,'filename') + cvParam_Modified;
	    } else {
	        cvPageName = cfUtility(cvURL,'channel') + cfUtility(cvURL,'filenameparameters');
	    }
	} else {
	    cvPageName = cfUtility(cvURL,'channel') + cfUtility(cvURL,'filename');
	}
	/* ----- IF PageName is Over 100 Chars ----- */
	if (cvPageName.length > 100) cvPageName = "/" + cfUtility(cvURL,'server') + "/..." + cfRight(cvPageName.replace(cfUtility(cvURL,'server') + "/", ""), 100 - (cfUtility(cvURL,'server').length + 5));
	return cvPageName;
}

function cfGetSubstringIndex(str, substring, n) {
    var times = 0, index = null;

    while (times < n && index !== -1) {
        index = str.indexOf(substring, index+1);
        times++;
    }

    return index;
}

function cfUtility(cvURL,cvAction) {
	var a,b,c,TheResult,cvParamPos,cvParam;
	switch (cvAction) {
	case "server":	// Example: sites.amd.com, www.hp.com
		a = cvURL.split(/\/+/g)[1];
		if (typeof(a) !== 'undefined') {
			b = a.split("."); if (b.length == 2) { c = 'www.' + a; } else { c = a; } TheResult = c;
		} else {
			TheResult = "";
		}
		break;
	case "domain":	// Example: amd.com, hp.com
		a = cfUtility(cvURL,"server");
		if (typeof(a) !== 'undefined') {
			b  = a.split("."); b_len = b.length;
			if (b_len == 4) {
				TheResult = String(b[b_len - 3] + '.' + b[b_len - 2] + '.' + b[b_len - 1]);
			} else {
				TheResult = String(b[b_len - 2] + '.' + b[b_len - 1]);
			}
		} else {
			TheResult = "";
		}
		break;
	case "coredomain":	// Example: amd, hp
		a = cfUtility(cvURL,"domain"); //amd.com, hp.com
		if (typeof(a) !== 'undefined') {
			b  = a.split(".");
			TheResult=b[0];
		} else {
			TheResult = "";
		}
		break;
	case "channel":
		a = cvURL.split("?")[0]; a = a.replace("http://","/"); a = a.replace("https://","/");
		b = a.substring(a.lastIndexOf('/')+1);
		a = a.substring(0,a.length-b.length);
		a = a.replace(cvURL.split(/\/+/g)[1],cfUtility(cvURL,"server"));
		TheResult = a;
		break;
	case "filename":
		a = cvURL.split("?")[0]; b = a.substring(a.lastIndexOf('/')+1);
		TheResult = b;
		break;
	case "filenameparameters":
		cvParamPos = cvURL.indexOf("?"); if (cvParamPos != -1) { cvParam = cvURL.substring(cvParamPos); } else { cvParam = ""; }
		TheResult = cfUtility(cvURL,"filename") + cvParam;
		break;
	case "parametersonly":
		cvParamPos = cvURL.indexOf("?"); if (cvParamPos != -1) { cvParam = cvURL.substring(cvParamPos); } else { cvParam = ""; }
		TheResult = cvParam;
		break;
	case "se":
		var cvReferrer_Server = cvURL.split(/\/+/g)[1]; // www.google.ca, www.yahoo.com
		var cvReferrer_Server_Splitted = cvReferrer_Server.split("."); // google.ca, yahoo.ca
		cvReferrer_Server_Splitted_Length = cvReferrer_Server_Splitted.length;
		TheResult = String('.' + cvReferrer_Server_Splitted[cvReferrer_Server_Splitted_Length - 2] + '.');
		break;
	case "ext":
		TheResult = cvURL.substring(cvURL.lastIndexOf('/') + 1, cvURL.length).substring(cvURL.substring(cvURL.lastIndexOf('/') + 1, cvURL.length).lastIndexOf('.') + 1, cvURL.substring(cvURL.lastIndexOf('/') + 1, cvURL.length).length);
		break;
	default:
		TheResult = "";
	}
	return TheResult;
}

//Visual Website Optimizer Code BOF

/* cvExcludeVWO = 0;
cvExcludeVWODomains = ["localhost","-auth","-prod","-qa","-sit","-dit","-preprod","-design","-new","fpp.amd.com","app.amd.com","connect.amd.com","gpuopen.com"];
if (document.referrer.indexOf("visualwebsiteoptimizer.com/heatmap") !=-1) {
	cvExcludeVWO = 1;
} else {
	for (i=0;i < cvExcludeVWODomains.length;i++) {
		if (unescape(document.URL).indexOf(cvExcludeVWODomains[i]) != -1) {
			cvExcludeVWO = 1;
		}
	}
}
if (cvExcludeVWO == 0) {_load_js('//www.amd.com/us/as/vwo/vwo_a.js');} */

//Visual Website Optimizer Code EOF

//Google Tag Manager (GTM)
	//cvGTMID = "GTM-T42PP2"; //AMD GTM v2
  cvGTMID = "GTM-K2BP2F"; //AMD GTM v3
  //cvGTMID = "GTM-58DFX4Z"; //AMD GTM v4

function GTMClickAttach () {
  var bodyEle = jQuery('body').get(0);
  if (bodyEle.addEventListener) {
    bodyEle.addEventListener('click', function (evt) { cfLnkClick(evt); }, true);
  } else if (bodyEle.attachEvent) {
    document.attachEvent('onclick', function () {
      var evt = window.event;
      cfLnkClick(evt);
    });
  }
}

var cfLnkClick = (function(evt){});

if (window.jQuery) {
  if (jQuery('body').length) {
    GTMClickAttach ();
  } else {
    var checkExist = setInterval(function() {
      if (jQuery('body').length) {
        clearInterval(checkExist);
        GTMClickAttach ();
      }
    }, 100);
  }
    //jQuery(document).on("click", function (evt) {cfLnkClick(evt);}, true);
}

	if (cvGTMID) {
		_load_js('//www.amd.com/us/as/sp2013/gtm.js');
	}	//EOF GTM

if ((cvSurveyURLCheck.toLowerCase().indexOf("ccc") == -1) && (cvURLCheck.toLowerCase().indexOf("compatcheck") == -1) && (cvURLCheck.toLowerCase().indexOf("cchecker") == -1)) { //do not edit; exclude from banners (i.e. CCC, ccc-apu, compatcheck, cchecker)
	//Survey code BOF
	if ((cvSurveyURLCheck.indexOf("/us/") != -1) || (cvSurveyURLCheck.indexOf("en-us") != -1) || (cvSurveyURLCheck.indexOf("de-de") != -1) || (cvSurveyURLCheck.indexOf("es-xl") != -1) || (cvSurveyURLCheck.indexOf("fr-fr") != -1) || (cvSurveyURLCheck.indexOf("zh-cn") != -1)) {
		_load_js('//www.amd.com/us/as/sp2013/survey.js');
	}

	//YouTube tracking
	if (typeof jQuery != 'undefined') {
		//_load_js('//www.amd.com/us/as/sp2013/scode_yt.js');
	}

	//ForeSee Survey
	if (/(www|sites|support|search|server|global|subscriptions|developer|community|shop|products|experience|partner)\.amd\.com.*/i.test(cvURLCheck)) {
		_load_js('//download.amd.com/js/foresee/foresee-production-hot-deploy.js'); // foresee-trigger.js
	}

	//Cookie prompt
	//if ((/(www|sites|support|search|community|shop|products|global|server|experience)\.amd\.com.*/i.test(cvURLCheck)) || (cvURLCheck.indexOf("amd.mkt6303.com") != -1)) {
	if (/(www|sites|support|search|products|shop|partner)\.amd\.com.*/i.test(cvURLCheck)) {
		_load_js('//www.amd.com/Style%20Library/js/cookie-prompt.js');
	}

	//StumbleUpon
	if (/(www|shop|experience)\.amd\.com.*/i.test(cvURLCheck)) {
		//_load_js('http://cdn.insidesocial.com/static/js/amd/a.min.js#c55544050c6c4377b14cbea50b75a01b');
	}
} //do not edit; exclude from banners (i.e. CCC, ccc-apu, compatcheck)



//VECC: www.amd.com/us/vision/shop/cool-apps/ccc/pages/index.aspx; new: support.amd.com/en-us/download/ccc-APU
//Catalyst Pro CC: /sites.amd.com/us/business/ccc/pages/index.aspx
//CCC: /support.amd.com/en-us/download/ccc

//UTILITY FUNCTIONS
function cfGetByteSize(s) { //CVA - delete
	return encodeURIComponent("" + s).length;
}

function cfis_int(value) { //CVA - delete
  if(!isNaN(value) && (parseFloat(value) == parseInt(value))){
	  return true;
  } else {return false;}
}

function cfHideshow(elementid) { //VideoFX - delete
	if (!document.getElementById) return;
	if (elementid.style.display=="block") elementid.style.display="none";
	else elementid.style.display="block";
}

function cfClean(cvURL) { // use parseURL instead - delete
	if (cvURL) {
		cvURL = cvURL.replace("http://","/");
		cvURL = cvURL.replace("https://","/");
	}
	return cvURL;
}

function cfTrim(stringToTrim) { //not used - delete
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function parseURL(url){ // delete (replaced with parseUri)

// https://www.facebook.com/amd
// Object {
    // domain : "www.facebook.com",
    // host : "facebook",
    // path : "amd",
    // protocol : "https",
    // subdomain : "www",
    // tld : "com"
// }

    parsed_url = {};

    if ( url === null || url.length === 0 )
        return parsed_url;
    protocol_i = url.indexOf('://');
    parsed_url.protocol = url.substr(0,protocol_i);
    remaining_url = url.substr(protocol_i + 3, url.length);
    domain_i = remaining_url.indexOf('/');
    domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
    parsed_url.domain = remaining_url.substr(0, domain_i);
    parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);

    domain_parts = parsed_url.domain.split('.');
    switch ( domain_parts.length ){
        case 2:
          parsed_url.subdomain = null;
          parsed_url.host = domain_parts[0];
          parsed_url.tld = domain_parts[1];
          break;
        case 3:
          parsed_url.subdomain = domain_parts[0];
          parsed_url.host = domain_parts[1];
          parsed_url.tld = domain_parts[2];
          break;
        case 4:
          parsed_url.subdomain = domain_parts[0];
          parsed_url.host = domain_parts[1];
          parsed_url.tld = domain_parts[2] + '.' + domain_parts[3];
          break;
    }

    parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;

    return parsed_url;
}

//get URL paramter values - delete (replaced with parseUri)
function cfParamValue(cvURL,name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec(cvURL);
  if( results === null )
    return "";
  else
    return results[1];
}

function cfGetQParam(a, b) {	// Custom Function to Get Query Parameters - delete (replaced with parseUri)
	var c = a.indexOf('?'); var d = a.indexOf('#');
	if (c < 0) { return ""; }
	var e = a.substr(c + 1);
	if (d > 0) { e = a.substring(c + 1, d); }
	var f = e.split('&');
	for (var i = 0; i < f.length; i++) {
		var g = f[i].split('=');
		g[0] = unescape(g[0]);
		if (g[0] == b) {
			g[1] = unescape(g[1]);
			if (g[1].indexOf('"') > -1) {
				var h = /"/g;
				g[1] = g[1].replace(h, '\\"');
			}
			if (g[1].indexOf('+') > -1) {
				var j = /\+/g;
				g[1] = g[1].replace(j, ' ');
			}
			return g[1];
		}
	}
	return "";
}

/* Custom Functions for Responsive Web (RW) EOF */

function cfFindChild(cvNode,cvTag) { //node to search for children, tagname being searched
	var cvChildren = cvNode.children;
	for(var i=0; i < cvChildren.length; i++) {
		if(cvChildren[i].tagName.toLowerCase() == cvTag.toLowerCase()){return cvChildren[i];}
		else {
			cvFosterChildren=cfFindChild(cvChildren[i],cvTag);
			if (typeof cvFosterChildren != "undefined"){
				return cvFosterChildren;
			}
		}
	}
}

//***********************************************************************

/* cookie functions BOF */
function cfCookieEnabled() {
	var cvCookieEnabled = (navigator.cvCookieEnabled) ? true : false;
	if (typeof navigator.cvCookieEnabled == "undefined" && !cvCookieEnabled) {
		document.cookie="testcookie";
		cvCookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	}
	return (cvCookieEnabled);
}

function cfSetCookie(c_name,value,exdays) { //negative expiry value denotes seconds not days
	var exdate,c_value;
	if (exdays>=0) {
		exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		c_value=escape(value) + ((exdays===null) ? "" : "; expires="+exdate.toUTCString());
	}
	else if (exdays<0) {
		exdate=new Date();
		exdate.setSeconds(exdate.getSeconds() - exdays);
		c_value=escape(value) + ((exdays===null) ? "" : "; expires="+exdate.toUTCString());
	}
	document.cookie=c_name + "=" + c_value + ";path=/;domain=" + cfUtility(cvURL,'domain');
}

function cfGetCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) 	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name) 		{
		return unescape(y);
		}
	  }
}
/* cookie functions EOF */

/* LightBoxWindow BOF */
	function LightBoxWindow (survey_url,width,height) {
		if(typeof jQuery != "undefined" && parseUri(cvURL).protocol.toLowerCase() != 'https')
		{
			var lightboxHTML = "<div id='overlay'></div><div id='lightbox' style='top: 20px; width: "+width+"px; padding: 1px; position: absolute; top:25px;left:25px;'><a href='#' id='popClose'>Close</a></div>";
			jQuery(lightboxHTML).appendTo('body');
			jQuery('#lightbox').append("<iframe height='"+height+"px' width='"+width+"px' id='surveyframe' src='" + survey_url + "'></iframe>");
			jQuery('#overlay').css('opacity', '0.8');
			jQuery("#popClose, #overlay").click(function() {
				jQuery('#lightbox, #overlay').remove();
			});
			jQuery(document).keyup(function(e){
				if(e.keyCode === 27)
				jQuery('#lightbox, #overlay').remove();
			});
		}
		else
		{
			window.open ( survey_url, "", "toolbar=no,toolbar=0,location=no,location=0,status=no,status=0,menubar=no,menubar=0,scrollbars=yes,scrollbars=1,resizable=yes,resizable=1,height="+height+",width="+width );
		}
	}

	function LightBoxWindow2 (page_url,width,height,redirect_url) {
		if(typeof jQuery != "undefined"  && parseUri(cvURL).protocol.toLowerCase() != 'https')
		{
			document.domain = "amd.com";
			var lightboxHTML2 = "<div id='overlay'></div><div id='lightbox' style='top: 20px; width: "+width+"px; padding: 1px; position: absolute; top:25px;left:25px;'><a href='#' id='popClose'>Close</a></div>";
			jQuery(lightboxHTML2).appendTo('body');
			jQuery('#lightbox').append("<iframe height='"+height+"px' width='"+width+"px' id='pageframe' src='" + page_url + "'></iframe>");
			jQuery('#overlay').css('opacity', '0.8');
			jQuery("#popClose").click(function(e) {
				window.location = redirect_url;
				window.location.href = redirect_url;
				jQuery(location).attr("href",redirect_url);
				e.preventDefault();
				closeLightBoxWindow2();
			});
			jQuery(document).keyup(function(e){
				if(e.keyCode === 27)
				window.location = redirect_url;
				window.location.href = redirect_url;
				jQuery(location).attr("href",redirect_url);
				closeLightBoxWindow2();
			});
		}
		else
		{
			var theDiv = document.createElement("div");
			theDiv.setAttribute("id","divBackground");
			theDiv.setAttribute("style","position:absolute; top:0px; left:0px;background-color:black; z-index:100;opacity: 0.8;filter:alpha(opacity=60); -moz-opacity: 0.8; overflow:hidden; display:none");
			document.body.appendChild(theDiv);
			LoadModal();

			thePopUp = window.open ( page_url, "", "toolbar=no,toolbar=0,location=no,location=0,status=no,status=0,menubar=no,menubar=0,scrollbars=yes,scrollbars=1,resizable=yes,resizable=1,height="+height+",width="+width );
			thePopUp.focus();

	}
	}

function LoadModal() {
	var bcgDiv = document.getElementById("divBackground");
			bcgDiv.style.display="block";
			if (bcgDiv !== null)
			{
					if (document.body.clientHeight > document.body.scrollHeight)
					{
							bcgDiv.style.height = document.body.clientHeight + "px";
					}
					else
					{
							bcgDiv.style.height = document.body.scrollHeight + "px" ;
					}
					bcgDiv.style.width = "100%";
			}
}



	function closeLightBoxWindow2() {
		jQuery('#lightbox, #overlay').remove();
	}
/* LightBoxWindow BOF */



function cfGetQParamwithHash(b,a,c) {	// Custom Function to Get Query Parameters with Hash for OSS
var e;c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&
(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return"";
}

function cfLeft(str, n){
	if (n <= 0) { return ""; } else if (n > String(str).length) { return str; } else { return String(str).substring(0,n); }
}

function cfRight(str, n){
    if (n <= 0) { return ""; } else if (n > String(str).length) { return str; } else { var iLen = String(str).length; return String(str).substring(iLen, iLen - n); }
}

function cfIsNullOrWhitespace(value) { // Returns true if string value is empty or whitespace characters only.
	var re = /^\s+$/; // Regular Expression for matching whitespace characters
	return (((typeof value === "undefined") || (value === null) || (value.length === 0)) || re.test(value)); // Is value empty or whitespace?
}

function cfPause(d){for(var e=new Date(),t=e.getTime()+d;e.getTime()<t;){e=new Date();}}

function removeHTMLTags(strInputCode) {
	if (strInputCode) {
		strInputCode = strInputCode.replace(/&(lt|gt);/g, function (strMatch, p1) {
			return (p1 == "lt") ? "<" : ">";
		});
		var strTagStrippedText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
		return strTagStrippedText;
	}
}

/* Responsive Web (RW) */
//Rendered Experiences (with specific break points)
function cfRWLayout() {
	cvRWLayout = "unknown";
	cvDocWidth = document.documentElement.clientWidth;
	if (cvDocWidth < 640) {cvRWLayout="small";}
	else if (cvDocWidth >= 640 && cvDocWidth <= 1000) {cvRWLayout="medium";}
	else if (cvDocWidth > 1000) {cvRWLayout="large";}
	return cvRWLayout;
}
/* RW: Screen Size - eVar43 */
//Screen Size
function cfWinSize() {
	cvWinSize=document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight;
	return cvWinSize;
}

function cfDetectLanguage() {
	cvSysLanguage = window.navigator.userLanguage || window.navigator.language || "";
	cvSysLanguage = cvSysLanguage.toLowerCase();
	return cvSysLanguage;
}

function getCurrentTimeUTC() {
    var tmLoc = new Date();
    return tmLoc.getTime();
}

function cfSPwebtrack(theName,theType,theLinkObject) {
		if (cvOldLinkClickObject != theLinkObject) {
			cvOldLinkClickObject = theLinkObject;
			return ewt.track({'name':"GA"+theName,'type':theType,'link':theLinkObject });
		}
}

//on-site search (OSS) BOF
cvGAtimer=1;
cvGASavedSearchKeywordCheck = [];
cvGASavedSearchKeywordCheck[0] = "";
cvGASavedSearchKeywordCheck[1] = "";

function cfGAGetSearchKeywordFromURL(){
	cvGASearchKeywordCheck=parseUri(cvURL).queryKey["k"] +"#"+parseUri(cvURL).anchor;
	if(cvGASearchKeywordCheck.indexOf("#s=") != -1) {
		cvGASearchKeywordCheck=cvGASearchKeywordCheck.substring(0,cvGASearchKeywordCheck.indexOf("#s="));
	}
	if(cvGASearchKeywordCheck.indexOf("#k=") != -1) {
		cvGASearchKeywordCheck=cvGASearchKeywordCheck.substring(cvGASearchKeywordCheck.lastIndexOf("#k=")+3);
	}
	return cvGASearchKeywordCheck;
}

function cfGACheckSearchAjax() {
	if(document.getElementById('Result')) {
		cvGASearchHTML = document.getElementById('Result').innerHTML;
		cvGASearchURL = decodeURI(document.URL.toLowerCase());
		if ((cvGASearchHTML == document.getElementById('Result').innerHTML) && !!cvGACheckSearchAjax) {
			window.clearInterval(cvGACheckSearchAjax);
			cvGACheckSearchAjax = '';
			cfGATrackSearch1();
		}
	}
}
function cfGACheckSearchAjax1() {

	if(document.getElementById('Result')) {
		cvGASearchHTML = document.getElementById('Result').innerHTML;
		cvGASearchURL = decodeURI(document.URL.toLowerCase());
		if ((cvGASearchHTML == document.getElementById('Result').innerHTML) && !!cvGACheckSearchAjax) {
			window.clearInterval(cvGACheckSearchAjax);
			cvGACheckSearchAjax = '';
			cfGATrackSearch2();
		}
	}
}
//csKeyword, csSearchOriginationPage, csTotalCounts, csResultsRange, csPageNumber
function cfGATrackSearch1() {
	cvGASavedSearchKeywordCheck[0] = cvGASavedSearchKeywordCheck[1];
	cvGASavedSearchKeywordCheck[1] = cfGAGetSearchKeywordFromURL();

	if (typeof csKeyword == 'undefined') {
		csKeyword = cfGAGetSearchKeywordFromURL();
	}
	if (typeof csKeyword != 'undefined') {
		if (!!csKeyword) {
			sAA.prop6 = parseUri(cvURL).host; // Search Property ID
			sAA.prop55 = sAA.eVar55 = csKeyword.toLowerCase(); // Internal Search Terms
			if (typeof sAA.referrer != 'undefined') sAA.eVar39 = sAA.prop11 = sAA.referrer;
			if (typeof csTotalCounts != 'undefined') {
				if (csTotalCounts == 0) {
					if(jQuery("*").hasClass("ms-srch-group-count")) {
						csTotalCounts=jQuery( ".ms-srch-group-count" ).text().match(/\d/g).join("");
					}
				}
				sAA.prop36 = sAA.eVar36 = csTotalCounts; // Total Counts
			}

			if (cfCookieEnabled()) {
				cvGACookieDURL = cfGetCookie('c_durl') || "";
				if (/shop\.amd\.com\/.*k=.*/i.test(cvGACookieDURL)) {cvGALinkedSearch=1;}
				else cvGALinkedSearch=0;
				cfSetCookie('c_durl',"",1); //durl = cleared
			}

			if(!cvGASavedSearchKeywordCheck[0] || ((cvGASavedSearchKeywordCheck[0] != cvGASavedSearchKeywordCheck[1]) && !!cvGASavedSearchKeywordCheck[0])) {
				cvOSSEvents += ",event5"; // On-Site Search (Counter)

				if (jQuery( "#NoResult").length ==1) {
					sAA.prop9 = sAA.eVar9 = csKeyword.toLowerCase(); // Internal Search Failed Terms
					cvOSSEvents += ",event12"; // On-Site Search (Failed)
				} else {
					cvOSSEvents += ",event11"; // On-Site Search (Success)
				}
			}
			sAA.prop37 = sAA.eVar37 = Math.round(csPageNumber); // Results Page Number
			sAA.prop38 = sAA.eVar38 = csKeyword.toLowerCase() + "|" + csResultsRange; // Keywords | Results Range

			//data layer event name is the GTM trigger event name
			dataLayer.push({
				'event': 'search',
				'OSS-keyword':sAA.prop55||'',
				'OSS-propertyID':sAA.prop6||'',
				'OSS-referrer':sAA.prop11||'',
				'OSS-totalCount':sAA.prop36||'0',
				'OSS-events':cvOSSEvents||'',
				'OSS-failedKeyword':sAA.prop9||'',
				'OSS-pageNumber':sAA.prop37||'',
				'OSS-keywordRange':sAA.prop38||''
			});

		}
	}
}

function cfGATrackSearch2() {
	cvGASavedSearchKeywordCheck[0] = cvGASavedSearchKeywordCheck[1];
	cvGASavedSearchKeywordCheck[1] = cfGAGetSearchKeywordFromURL();

	if (typeof csKeyword == 'undefined') {
		csKeyword = cfGAGetSearchKeywordFromURL();
	}
	if (typeof csKeyword != 'undefined') {
		if (!csKeyword) {
			csKeyword = "TBD";
		}
			sAA.prop6 = parseUri(cvURL).host; // Search Property ID
			sAA.prop55 = sAA.eVar55 = csKeyword.toLowerCase(); // Internal Search Terms
			if (typeof sAA.referrer != 'undefined') sAA.eVar39 = sAA.prop11 = sAA.referrer;
			if (typeof csTotalCounts != 'undefined') {
				if (csTotalCounts == 0) {
					if(jQuery("*").hasClass("ms-srch-group-count")) {
						csTotalCounts=jQuery( ".ms-srch-group-count" ).text().match(/\d/g).join("");
					}
				}
				sAA.prop36 = sAA.eVar36 = csTotalCounts; // Total Counts
			}

			if (cfCookieEnabled()) {
				cvGACookieDURL = cfGetCookie('c_durl') || "";
				if (/shop\.amd\.com\/.*k=.*/i.test(cvGACookieDURL)) {cvGALinkedSearch=1;}
				else cvGALinkedSearch=0;
				cfSetCookie('c_durl',"",1); //durl = cleared
			}

			if(!cvGASavedSearchKeywordCheck[0] || ((cvGASavedSearchKeywordCheck[0] != cvGASavedSearchKeywordCheck[1]) && !!cvGASavedSearchKeywordCheck[0])) {
				cvOSSEvents += ",event5"; // On-Site Search (Counter)

				if (jQuery( "#NoResult").length ==1) {
					sAA.prop9 = sAA.eVar9 = csKeyword.toLowerCase(); // Internal Search Failed Terms
					cvOSSEvents += ",event12"; // On-Site Search (Failed)
				} else {
					cvOSSEvents += ",event11"; // On-Site Search (Success)
				}
			}
			sAA.prop37 = sAA.eVar37 = Math.round(csPageNumber); // Results Page Number
			sAA.prop38 = sAA.eVar38 = csKeyword.toLowerCase() + "|" + csResultsRange; // Keywords | Results Range

			//data layer event name is the GTM trigger event name
			dataLayer.push({
				'event': 'shopsearch',
				'SS-keyword':sAA.prop55||'',
				'SS-propertyID':sAA.prop6||'',
				'SS-referrer':sAA.prop11||'',
				'SS-totalCount':sAA.prop36||'0',
				'SS-events':cvOSSEvents||'',
				'SS-failedKeyword':sAA.prop9||'',
				'SS-pageNumber':sAA.prop37||'',
				'SS-keywordRange':sAA.prop38||''
			});
	}
}


function cfGATrackSearch() {
//empty
}

cvGASearchTrackCnt=0;
if ((parseUri(cvURL).queryKey["k"]) || (cvURL.indexOf("#k=") != -1) || (cvURL.indexOf("shop.amd.com") != -1) ||(typeof csKeyword != 'undefined')) {
	if (cvGASearchTrackCnt==1){
		if (cvGASearchURL != decodeURI(document.URL.toLowerCase())) {
			cvGASearchTrackCnt=0;
		}
	}
	if ((cvGASearchTrackCnt==0) && (!cvGACheckSearchAjax)){
		if (cvURL.indexOf("shop.amd.com") != -1) {
		cvGACheckSearchAjax=setInterval(function(){cfGACheckSearchAjax1();},250);
		} else {
			cvGACheckSearchAjax=setInterval(function(){cfGACheckSearchAjax();},250);
		}
		cvGASearchTrackCnt=1;
	}
}
//on-site search (OSS) EOF
