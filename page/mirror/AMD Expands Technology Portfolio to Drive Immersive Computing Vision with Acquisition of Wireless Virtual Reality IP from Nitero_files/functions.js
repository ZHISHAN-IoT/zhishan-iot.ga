//Remove span from literals
function stripSpan(str) {

	if (str.indexOf('<span') > -1)
	{
		str = str.substring(str.indexOf('>')+1);
		str = str.substring(0,str.indexOf('</span>'));	
	}
	return str;
}

//Remove div from literals
function stripDiv(str) {

	if (str.indexOf('<div') > -1)
	{
		str = str.substring(str.indexOf('>')+1);
		str = str.substring(0,str.indexOf('<'));	
	}
	return str;
}

//KB Survey
function kbSurvey()
{
	var regionLocale = findLocale();
	var surveyURL = "";
	
	switch(regionLocale)
	{
		case "zh-cn":
			surveyURL = "http://www.amdsurveys.com/se.ashx?s=5A1E27D207AEFB0A&refurl=" + document.URL;
			break;
		default:
			surveyURL = "http://www.amdsurveys.com/se.ashx?s=5A1E27D265908495&refurl=" + document.URL;
			break;
	}
	
	document.write('<iframe src="' + surveyURL + '" name="feedback" scrolling="no" frameborder="0" class="kb-survey" ></iframe>')
}

//Short date renderer for display template date fields
function ShortDateRenderer(a)
{
	if(!Srch.U.n(a)&&!a.isEmpty&&Date.isInstanceOfType(a.value))
	{
		var b=Srch.U.$C(String.format("cc_ValueRendererDateFormat_{0}",a.managedPropertyName),false);
		if(Srch.U.w(b))b="ShortDatePattern";
		return SP.Utilities.HttpUtility.htmlEncode(Srch.U.toFormattedDate(a.value,b));
	}
	else return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(a);
};

//Returns locale from URL
function findLocale()
{
	var pathArray = new Array();
	pathArray = document.location.pathname.split( '/' );
	return pathArray[1];
}

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)


//left nav expand/contract
        $(document).ready(function(){
		function navToggle(){
		$(this).children("ul").slideToggle("fast");
		}
        $(document.getElementById("sideNavBox")).find("a.static").not(".selected").next("ul").hide();
        $(document.getElementById("sideNavBox")).find("li.static").not(".selected").hoverIntent({
        over: navToggle,
        out: navToggle, 
		timeout: 500});

		$('.ms-core-listMenu-root > li.selected').prependTo('.ms-core-listMenu-root');
        });
//jQuery random plugin
jQuery.fn.random = function() {
    var randomIndex = Math.floor(Math.random() * this.length);  
    return jQuery(this[randomIndex]);
};


//GLOBAL SEARCH FUNCITONS
var tmp_hostName = "";
var GblSearch_hostName = "http://search.amd.com/";
var GblSearch_variationName = "";
var GblSearch_collectionName = "";


$(document).ready(function(){
	//tmp_hostName = location.hostname;
	//GblSearch_hostName = 'http://' + tmp_hostName.replace("www","search") + '/';
	GblSearch_collectionName = 'results-all.aspx';
	GblSearch_variationName = findLocale();
	
	if (GblSearch_variationName == "Pages")
	{
		GblSearch_variationName = "en-us";
	}
	if (typeof GblSearch_helpText !== 'undefined') {
		$('#search_csquery, #search_csquery_mobile').attr("placeholder", GblSearch_helpText);
	}
	$('#search_csquery, #search_csquery_mobile').val("");
	$('#search_csquery, #search_csquery_mobile').click(function(){
		if($(this).val() == GblSearch_helpText){
			$(this).val("");
		}
	});
});


function GblSearch_DoSubmit(hostName, variationName, keywordTerm, collectionName){
		var sender = this;
		if(keywordTerm != GblSearch_helpText && keywordTerm != "" && typeof keywordTerm != 'undefined')
		{
		if (hostName == '')
			hostName = 'http://search.amd.com/';
		
		if (collectionName == '')
			collectionName = 'results-all.aspx';
		
    	var newURL = hostName + variationName + '/Pages/' + collectionName + '#k=' + keywordTerm;

		document.location = newURL;
		return true;
		}
		else {
			
			$('#search_csquery:visible, #search_csquery_mobile:visible').eq(0).focus();
			}
}



function GblSearch_checkEnter(e){ 
	 	e = e || window.event;
		var keynum = e.keyCode || e.which;
		if(keynum === 13){
			GblSearch_DoSubmit(GblSearch_hostName, GblSearch_variationName, document.forms[0].search_csquery.value, GblSearch_collectionName);
			return false;
		}
		else
			return true;
}

function GblSearch_checkEnter_mobile(e){ 
	 	e = e || window.event;
		var keynum = e.keyCode || e.which;
		if(keynum === 13){
			GblSearch_DoSubmit(GblSearch_hostName, GblSearch_variationName, document.forms[0].search_csquery_mobile.value, GblSearch_collectionName);
			return false;
		}
		else
			return true;
}

function GblSearch_disableKeypress(value){ 
		if (value != '')
			document.forms[0].onkeypress = '';
}

//code to expand the first accordion on driver pages
$(document).ready(function(){
	/*var pageURL = $(location).attr('href');
	if(~pageURL.indexOf('download'))
	{
		$('div.accordion-bar:first').find('div.accordion-arrow').attr('class', 'accordion-arrow-open');
		$('div.accordion-bar:first').siblings('div.accordion-content').show();
	}*/
	$("a[href*='FIXUP']").each(function(){
		var brokenURL = $(this).attr("href");
		var brokenStem = brokenURL.substr(0, brokenURL.indexOf('?'));
		var brokenLinkTitle = $(this).text();
		$(this).attr("href", "/Pages/PageNotFoundError.aspx?requestUrl=" + brokenStem + "&Title=" + brokenLinkTitle + "&Page=" + window.location.pathname);
	});
});

//Cookie for accept terms
function acceptCookie(cookiename){
	if (!cfGetCookie(cookiename)) {
		cfSetCookie(cookiename,true,7);
	}
}

var convertRowsToObjects = function(itemRows){ 
	var items = []; //foreach row in the result set 
	for (var i = 0; i < itemRows.length; i++) 
		{ var row = itemRows[i], item = {}; //Each cell in the row is a key/value pair, save each one as an object property 
		for (var j = 0; j < row.Cells.results.length; j++) {
			item[row.Cells.results[j].Key] = row.Cells.results[j].Value; 
		} 
		items.push(item); 
	} 
	return items; 
};

function showPrices(prodID, locale) {
	var priceTable = $('<div class="priceTable"></div>');
	var shopPrices = $.ajax({
		url:"http://" + location.hostname + "/_api/search/query?querytext=%27shopEntityName:ShopProductRetailers_ECT shopLocale:" + locale + " shopProdID=" + prodID + "%27&selectproperties=%27shopRetailerName,shopRetailerLogo,shopRetailerPrice,shopRetailerLink,shopCurrency%27&rowlimit=%2750%27&trimduplicates=false&QueryTemplatePropertiesUrl=%27spfile://webroot/queryparametertemplate.xml%27", 
		type: "GET",
		headers: { 
			"accept": "application/json;odata=verbose",
			"content-type":"application/json;odata=verbose"},
		success: function(anything, status, responseobject){
			var jsonOBJ2 = anything; //JSON.parse(data.body)
			var results = jsonOBJ2.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
			var resultObject = convertRowsToObjects(results);
			$.each(resultObject, function (index, result) {
				var retailerLogo = result.shopRetailerLogo;
				var retailerName = result.shopRetailerName;
				var price = result.shopRetailerPrice;
				var currency = result.shopCurrency;
				var link = result.shopRetailerLink;
				var priceRow = $('<div class="priceRow"><a href="' + link +'">' + retailerName + ' ' + price + ' ' + currency + '</a></div>');
				priceTable.append(priceRow);
			});

		}, 
		error: function(){}
	});
	return priceTable;
}

