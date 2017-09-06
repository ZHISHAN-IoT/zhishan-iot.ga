/*
 * Engage Web Tracking Code
 * Last Update 9:26 EST 02/13/2017
 */

//Silverpop Engage

if((cvURLCheck.indexOf("experience.amd.com") == -1) && (cvURLCheck.indexOf("amd.mkt6303.com") == -1) && (cvURLCheck.indexOf("www.pages03.net") == -1)){
	var silverpopmeta1 = document.createElement('meta');
	silverpopmeta1.name = "com.silverpop.brandeddomains";
	silverpopmeta1.content ="www.pages03.net,amd.com,amd.mkt6303.com,amdsurveys.com,community.amd.com,developer.amd.com,experience.amd.com,global.amd.com,gpuopen.com,localhost,partner.amd.com,products.amd.com,radeon.com,search.amd.com,server.amd.com,shop.amd.com,sites.amd.com,subscriptions.amd.com,support.amd.com,www.amd.com,ve.ga,amdryzenreviews.com";

	document.getElementsByTagName('head')[0].appendChild(silverpopmeta1);

	if (cvURLCheck.indexOf("http://") != -1) {
		_load_js('http://contentz.mkt932.com/lp/static/js/iMAWebCookie.js?2542eeac-14320b43e23-2d617ac8ac4460b9f143347708bf4d50&h=www.pages03.net');
	}
	else if (cvURLCheck.indexOf("https://") != -1) {
		_load_js('https://www.sc.pages03.net/lp/static/js/iMAWebCookie.js?2542eeac-14320b43e23-2d617ac8ac4460b9f143347708bf4d50&h=www.pages03.net');
	}
}


//custom web tracking events
// if (cvSPwebtrack==1) {return ewt.track({name:Destination_LID,type:'download-driver',link:o }); }
//if (cvSPwebtrack==1) {(function(){return ewt.track({name:s.eVar13,type:'nrppr',link:o }); } )(); }


// download-asset
// download-driver
// shop-now
// shop-review
// content-consumed
// appzone
// nrppr
// video


// oss-counter
// oss-failed
// oss-success
// oss-resultclick
// link-click
