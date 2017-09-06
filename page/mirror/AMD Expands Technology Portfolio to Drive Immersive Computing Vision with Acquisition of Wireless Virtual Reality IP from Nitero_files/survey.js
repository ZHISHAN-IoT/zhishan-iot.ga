/*
 * Survey deployment and Device Type detection Script
 * Last Update 10:25 EST 09/08/2015
 */

//survey - BOF
function isCookieEnabled()
{
	var cookieEnabled = (navigator.cookieEnabled) ? true : false;

	if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
	{
		document.cookie="testcookie";
		cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	}
	return (cookieEnabled);
}

function getCookieValueString(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function setCookie(name, value)
{
    var cookieDate = new Date();
    var expire_date = 90;
    cookieDate.setTime (cookieDate.getTime() + (1000 * 60 * 60 * 24 * expire_date));
    cookie_set = name + "=" + escape(value);
    cookie_set += "; expires=" + cookieDate.toGMTString();
    cookie_set += "; path=/;";
    cookie_set += " domain=amd.com;";
    document.cookie = cookie_set;
}

function FunctionLoad (percent_chance, survey_url, survey_onexit)
{
	random_number = Math.floor((Math.random()*100)+1);
	if (isCookieEnabled())
	{
		var sPageVisited;
		sPageVisited = "";
		sPageVisited = getCookieValueString("sPageVisited2");

		if (sPageVisited==null && (random_number < percent_chance))
		{
			setCookie("sPageVisited2", "true");
			// setCookie("sPageVisited2"+random_number, "true");

			if (survey_onexit)
			{
				$(window).unload( function() {
	  				window.open ( survey_url, "", "toolbar=no,toolbar=0,location=no,location=0,status=no,status=0,menubar=no,menubar=0,scrollbars=yes,scrollbars=1,resizable=yes,resizable=1,height=600,width=800" );
				});
			}
			else
			{
				if((!isMobile()) && (typeof jQuery != "undefined"))
				// {
					// window.open ( survey_url, "", "toolbar=no,toolbar=0,location=no,location=0,status=no,status=0,menubar=no,menubar=0,scrollbars=yes,scrollbars=1,resizable=yes,resizable=1,height=600,width=800" );
				// }
				{
					var lightboxHTML = "<div id='overlay'></div><div id='lightbox' style='top: 20px; width: 800px; padding: 1px; position: absolute; top:25px;left:25px;'><a href='#' id='popClose'>Close</a></div>";
					$(lightboxHTML).appendTo('body');
					$('#lightbox').append("<iframe height='600px' width='800px' id='surveyframe' src='" + survey_url + "'></iframe>");
					$('#overlay').css('opacity', '0.8');
					$("#popClose, #overlay").click(function() {
						$('#lightbox, #overlay').remove();
					});
					$(document).keyup(function(e){
						if(e.keyCode === 27)
						$('#lightbox, #overlay').remove();
					});
				}
				else
				{
					window.open ( survey_url, "", "toolbar=no,toolbar=0,location=no,location=0,status=no,status=0,menubar=no,menubar=0,scrollbars=yes,scrollbars=1,resizable=yes,resizable=1,height=600,width=800" );
				}
			}
		}
	}
}
//survey EOF

//survey deployment
/*
if ((cvSurveyURLCheck.indexOf("support.amd.com/en-us/download") != -1)  || (cvSurveyURLCheck.indexOf("support.amd.com/en-us/kb-articles/pages/latest-catalyst-windows-beta.aspx") != -1) || (cvSurveyURLCheck.indexOf("support.amd.com/en-us/download/auto-detect-tool") != -1)){
	FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D20CA0E590', false); // AMD Multi-GPU Survey
}
*/

/*
if ((cvSurveyURLCheck.indexOf("support.amd.com/en-us/download") != -1)  || (cvSurveyURLCheck.indexOf("support.amd.com/en-us/kb-articles/pages/latest-catalyst-windows-beta.aspx") != -1) || (cvSurveyURLCheck.indexOf("support.amd.com/en-us/download/auto-detect-tool") != -1) || (cvSurveyURLCheck.indexOf("sites.amd.com/us/game") != -1) || (cvSurveyURLCheck.indexOf("amd4u.com") != -1)){
	FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D20CA0E579', false); // AMD Technology Survey
}
*/


// if (isDesktop()) {

//	if (cvSurveyURLCheck.indexOf("amd.com/en-us/markets/if-it-can-game") != -1) {
		//FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D25BCC88A8', false); // AMD Marketing Consumer Survey (OLD survey)
	//	FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D20CA0E58A', false); // AMD Consumer Preference Survey
		//http://www.amd.com/en-us/markets/if-it-can-game
//	}
//	else if (cvSurveyURLCheck.indexOf("promo/never-settle/pages/nsreloadedforever.aspx") != -1) {
//		FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D20CA0E598', false); // AMD Graphics Preference Survey
		//http://sites.amd.com/us/promo/never-settle/Pages/nsreloadedforever.aspx
//	}
//	else if (cvSurveyURLCheck.indexOf("products/graphics/desktop/r9") != -1) {
	//	FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D20CA0E598', false); // AMD Graphics Preference Survey
		//http://www.amd.com/en-us/products/graphics/desktop/r9#
//	}
	//else if (/www.amd.com.*\/products\/processors\/desktop\/(a-series-apu|athlon|sempron)(?!-)/i.test(cvSurveyURLCheck)) {
	//	FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D20CA0E550', false); // AMD Client Component Preference Survey
		//http://www.amd.com/en-us/products/processors/desktop/a-series-apu
		//http://www.amd.com/en-us/products/processors/desktop/athlon
		//http://www.amd.com/en-us/products/processors/desktop/sempron
//	}
//	else if (/www.amd.com.*\/solutions\/pro.*/i.test(cvSurveyURLCheck)) {
//		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D26A475CCB', false); // AMD Commercial Preference Survey
		// http://www.amd.com/en-us/solutions/pro
		// http://www.amd.com/en-us/solutions/pro/performance
		// http://www.amd.com/en-us/solutions/pro/security-manageability
		// http://www.amd.com/en-us/solutions/pro/virtualization
		// http://www.amd.com/en-us/solutions/pro/performance/benchmarks
	//}
	//else if ((/www.amd.com.*\/products\/graphics\/workstation\/.*/i.test(cvSurveyURLCheck)) || (/support.amd.com\/en-us\/download\/workstation.*/i.test(cvSurveyURLCheck))) {
	//	FunctionLoad(30, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D2708815DF', false); // AMD FirePro Graphics Feedback
//	}
	//else if ((/www.amd.com.*\/products\/graphics\/desktop\/.*/i.test(cvSurveyURLCheck)) || (/support.amd.com\/en-us.*/i.test(cvSurveyURLCheck))) {
	//	FunctionLoad(3, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D24CDC7EFC', false); 
	// AMD Catalyst Control Center Feedback
	//}

/*
	if (cvSurveyURLCheck.indexOf("/us/") != -1) {
		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D24301077E', false); // UX Recruiting
	}
	else if (cvSurveyURLCheck.indexOf("/de/") != -1) {
		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010756&c=de-DE', false); // DE UX Recruiting
	}
	else if (cvSurveyURLCheck.indexOf("/ru/") != -1) {
		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D2430107A2&c=ru-RU', false); // RU UX Recruiting
	}
	else if (cvSurveyURLCheck.indexOf("/br/") != -1) {
		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010740&c=pt-BR', false); // BR UX Recruiting
	}
	else if (cvSurveyURLCheck.indexOf("/jp/") != -1) {
		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010796&c=ja-JP', false); // JP UX Recruiting
	}
	else if (cvSurveyURLCheck.indexOf("/cn/") != -1) {
		FunctionLoad(15, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D2430107C2&c=zh-CN', false); // CN UX Recruiting
	}
*/
/*
	if (ReportSuiteID.indexOf("amdvconsumer") != -1) {
		FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010726', false); // HSA Value Proposition
	}
*/
/*
	if (/(sites|support).amd.com.us.*(radeon.*(32|64)|auto_detect|catalyst1211betadriver)/i.test(cvSurveyURLCheck)) {
		//FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010771', false); // driver feedback
	}
	else if (/support.amd.com.de.pages.amdsupporthub/i.test(cvSurveyURLCheck)) {
		FunctionLoad(40, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010761', false); // driver feedback - de
	}
	else if (/support.amd.com.cn.*radeon.*(xp|32|64)/i.test(cvSurveyURLCheck)) {
		FunctionLoad(40, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D243010743', false); // driver feedback - chs
	}
*/
//}

//mobile survey
//if (cvSurveyURLCheck.indexOf("en-us") != -1) {
//	if (isMobile() || isTablet()) {
//		FunctionLoad(10, 'http://www.amdsurveys.com/se.ashx?s=5A1E27D24301074E', false); //mobile sat
//	}
//}
