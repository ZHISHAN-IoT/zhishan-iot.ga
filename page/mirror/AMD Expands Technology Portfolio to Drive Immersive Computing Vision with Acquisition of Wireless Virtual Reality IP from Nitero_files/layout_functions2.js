/*************************************************************************/
/*************************************************************************/	

/* Show/hide top nav */

/*************************************************************************/
/*************************************************************************/	
function CheckIfNoneExist(checkedValue, collection) {
//checks a string (like the page URL) to make sure it doesn't match any of the conditions
    for (var i = 0; i < collection.length; i++) {
        if (checkedValue.indexOf(collection[i]) != -1) {
            return false;
        }
    }
    return true;
}
/*************************************************************************/	

/* Accessible nav */

/*************************************************************************/

function navHandleKey(e, $item){
	var navItems = $('.topNavHeading');
	var thisIndex = navItems.index($item);
	switch(e.keyCode){
		case 9:	//tab
			navHide();
			break;
		case 37: //left
			navHide();
			navItems.eq(thisIndex -1 % navItems.length).focus();
			//console.log(thisIndex +1 + ", " + navItems.length);
			break;
		case 39: //right
			navHide();
			if($item.next('.topNavHeading').length == 0){
				navItems.first().focus();
				}
			else{
				$item.next('.topNavHeading').focus();
			}
			break;
		case 27: //escape
			navHide();
			$item.blur();
			break;
		case 40: //down
		case 13://enter
		case 32://space
			if($item.find('a:focus').length == 0){
			$item.find('a').eq(0).focus();
			e.preventDefault();
			}
			break;
		default:
			return true;
	}
}
function navLinksHandleKey(e, $item){
	var links = $item.parents('.navBox').find('a');
	var thisIndex = links.index($item);
//	console.log(thisIndex);
	switch(e.keyCode){
		case 27: //escape
			navHide();
			$item.blur();
			break;
		case 38: //up
			if(links.eq(thisIndex -1).length == 0){
				links.last().focus();
			}
			else{
				links.eq(thisIndex -1).focus();
			}
			e.preventDefault();
			break;
		case 40: //down
			if(links.eq(thisIndex +1).length == 0){
				links.first().focus();
			}
			else{
				links.eq(thisIndex +1).focus();
			}
			e.preventDefault();
			break;
		case 37: //left
			navHide();
			$item.parents('.topNavHeading').next().focus();
			break;
		case 39: //right
			navHide();
			$item.parents('.topNavHeading').prev().focus();
			break;
	}
}

function preload(i) {
    $(i).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

/*************************************************************************/
/*************************************************************************/	
function loadLanguagePage(pageurl,defaulturl) {
	pageurl = pageurl.replace("www.amd.com", window.location.hostname);
	//pageurl = "http://www-auth.amd.com/en-us/markets";
	$.ajax({
	url: pageurl,
	type: "GET",
	contentType: "text/html; charset=utf-8",
	timeout: 5000
	}).done(function(){
		window.location.href = pageurl;
		}).fail(function(stuff, status){
		window.location.href = defaulturl;
	});
}

/* Show/hide top nav */

/*************************************************************************/
/*************************************************************************/	
function navUp() {
	$(this).find('div').fadeOut(20);
};
	
function navDown() {
	if($(this).find('.topNavGroup a').length > 0) {
		var offset  = $(this).position();
		$(this).find('div').css({left: offset.left}).fadeIn('fast');
	}
};

function navHide() {
	$('#topNav .navBox').hide().attr('aria-hidden', false);
};
	
function navShow() {
if($(this).find('.topNavGroup a').length > 0) {
	$(this).find('div').show();
	}
};


/*************************************************************************/
/*************************************************************************/	

/* Function to wrap tabs */

/*************************************************************************/
/*************************************************************************/	

function stackTabs() {
	var finalWidthTotal = 0;
	var newFinalWidthTotal = 0;	
	var widthTotal = 0; 
	var newWidthTotal = 0; 
	var index = 0; 
	var maxWidth = $('.liquid-slider').width();		
	$('#coda-slider-1-nav-ul li a').each(function() {
		widthTotal = $(this).width() + parseInt($(this).css('padding-left'), 10) + parseInt($(this).css('padding-right'), 10);
		finalWidthTotal += widthTotal;	
		if (finalWidthTotal > maxWidth) {
			newWidthTotal = $(this).width() + (parseInt($(this).css('padding-left'), 10) + parseInt($(this).css('padding-right'), 10)) + 2;
			newFinalWidthTotal += newWidthTotal;
			$(this).parent().prependTo('#coda-slider-1-nav-ul');
			index++;
			if (index == 1) {
				$(this).addClass('endRow');								
			}			
		}
	});	
	var rightMargin = maxWidth - newFinalWidthTotal;
	$('#coda-slider-1-nav-ul li a.endRow').css('margin-right', rightMargin + 'px');			
};
function wrapTabs() {
	var finalWidthTotal = 0;
	var tabWidth = 0;  
	var maxWidth = $('.liquid-slider').width();			
	$('#coda-slider-1-nav-ul li a').each(function() {
		tabWidth = $(this).width() + parseInt($(this).css('padding-left'), 10) + parseInt($(this).css('padding-right'), 10);
		finalWidthTotal += tabWidth;					
	});			
	if (finalWidthTotal > maxWidth) {
		resizeTabs();
	}
};
var functCall = 0;
function resizeTabs() {
	if (functCall <= 3) {
		functCall++;	
		var tabFontSize = parseInt($('#coda-slider-1-nav-ul li a').css('font-size').slice(0,-2), 10) - 1;
		$('#coda-slider-1-nav-ul li a').css('font-size', tabFontSize);	
			wrapTabs();												
	} else {
		stackTabs();
	}
};
	
/*************************************************************************/
/*************************************************************************/	

/* Function to change and show a ticker item */

/*************************************************************************/
/*************************************************************************/	

function newstick() {
	$('.newsticker').last().after($('.newsticker').first());
	$('span#newsdisplay').fadeTo(500, 1, changeShow($('span#newsdisplay'), $('.newsticker').first().html()));
}
	
function quotetick() {
	$('.QuoteRotator').last().after($('.QuoteRotator').first());
	$('div#quotedisplay').fadeTo(500, 1, changeShow($('div#quotedisplay'), $('.QuoteRotator').first().html()));
}

function changeShow(container, text) {
	container.fadeTo(500, .1,function(){container.html(text)});
}

/*************************************************************************/
/*************************************************************************/	

/* Function to fix the spacing between top nav items and tabs */

/*************************************************************************/
/*************************************************************************/
	
function fixTopNavWidth() {
	for(i=35;i>10;i--) {
		$('li.topNavHeading').css({"padding-left": i, "padding-right": i});
		if($('li.topNavHeading').first().offset().top == $('li.topNavHeading').last().offset().top) {
			break;
		}
	}
}
function fixTabWidth() {
	if($('.ls-nav').length){
		for(i=15;i>9;i--) {
			if($('.ls-nav a').first().offset().top == $('.ls-nav a').last().offset().top) {
				break;
			}
			$('.ls-wrapper a').css({"padding-left": i, "padding-right": i});
		}
	}
}

/*************************************************************************/
/*************************************************************************/	

/* Handlers for left nav click + hover functionality on mobile devices */

/*************************************************************************/
/*************************************************************************/	

function clickSelected(item) {
	if($(window).width() <= 640) {		
		$(item).toggleClass('open');		
		$('#left-col li.static, #left-col li.display').toggleClass('static display');				
	}	
}	

function hoverLeftNav(item) {
	if($(window).width() <= 640) {		
		$('#left-col li').unbind('mouseenter mouseleave mouseover mouseout');				
	}	
}

/*************************************************************************/

/* Load up some Twitch  */

/*************************************************************************/

function getTwitch(channel, twitchTarget){
    $.ajax({
	headers: {'Client-ID': 'kkv1x3nlp7cblss6sec4ujhuvj0dw8q'},
	url: "https://api.twitch.tv/kraken/streams/" +channel+ ".json",
	dataType: 'json',
	type: 'GET',
	success: function(c) {
    var twitchObject = {status:"", image:""};
        if (c.stream == null) {
            $.ajax({
			type: 'GET',
			dataType: 'json',
			headers: {'Client-ID': 'kkv1x3nlp7cblss6sec4ujhuvj0dw8q'},
			url: "https://api.twitch.tv/kraken/channels/"+ channel +"/videos?limit=1&broadcasts=true",	
			success: function(z) {
				var video = z.videos[0];
				var preview = video.preview.replace("320x240","640x360");
				 var twitchHTML = $('<div class="twitchStream"><div class="twitchAbove"><span class="streamTitle">' + video.title + '</span></div><a href="'+video.url+'" target="_blank"><span class="playButton">&#x25b6;</span><img class="twitchPreview" src="'+ preview +'" alt="Watch Now" /></a><div class="twitchBelow"><span class="streamStatus"><span class="red">●</span>' + video.status + '</span><span class="streamViewers">' + video.views + ' views</span></div></div>')
            twitchTarget.append(twitchHTML);
			}});
        } 
        else {
            var twitchHTML = $('<div class="twitchStream"><div class="twitchAbove"><span class="streamTitle">' + c.stream.channel.display_name + '</span></div><a href="'+c.stream.channel.url+'" target="_blank"><span class="playButton">&#x25b6;</span><img class="twitchPreview" src="'+ c.stream.preview.large +'" alt="Watch Now" /></a><div class="twitchBelow"><span class="streamStatus"><span class="red">●</span>' + c.stream.channel.status + '</span><span class="streamViewers">' + c.stream.viewers + ' viewers</span></div></div>')
            twitchTarget.append(twitchHTML);
        }
    }
	});
}

/*************************************************************************/
/*************************************************************************/	

/*  */

/*************************************************************************/
/*************************************************************************/

function hasCopy(element){
  return $.trim(element.html())
}

/*************************************************************************/
/*************************************************************************/	

/* Remove '&nbsp;' that SharePoint places before header text */

/*************************************************************************/
/*************************************************************************/

function ditchH1Spaces() { 
	$('h1, h2, h3').each(function(){
		$(this).html($(this).html().replace(/&nbsp;/gi,''));
	});	
}


/*************************************************************************/
/*************************************************************************/

function createTopNav(result){
	//get the links that go in the bottom
	var bottomlinks = $(result).find('bottomlinks');
	var bottomlinksTitle = bottomlinks.attr("title");
	var topNavBottomLink = $('<p class="topNavBottomLink"><span class="bottom-links-heading">' + bottomlinksTitle + '</span></p>');
	bottomlinks.find('link').each(function(){
		var bottomLinkTitle = $(this).attr("title");
		var bottomLinkURL = $(this).attr("url");
		var bottomLink = $('<a></a>');
		bottomLink.attr("href", bottomLinkURL).text(bottomLinkTitle);
		bottomLink.attr("name", "&amp;lpos=megamenu&amp;lid=mm%7c%7cLooking%20For%7c" + encodeURIComponent(bottomLinkTitle));
		bottomLink.appendTo(topNavBottomLink);
	});
	topNavBottomLink.find('a:not(:last-child)').after(" / ");
	var navul = $('<ul id="topNav"></ul>');
	var level = $(result).find('level[top="true"]');
	level.each(function(){
		var image = ($(this).find('image').attr('src'));
		var content = $(this).find('content').find('promo');
		var headingTitle = $(this).attr("title");
		var headingLink = $(this).attr("url");
		var locationTop = $(this).attr("top");
		var locationBottom = $(this).attr("bottom");
		var group = $(this).find('group');
		var topNavHeading, sectionTitle;
		var navbox = $("<div class='navBox'></div>");
		if(typeof headingTitle == undefined || typeof headingTitle == "undefined") {
			topNavHeading = $('<li class="topNavHeading" tabindex="0"><img src="' + image +'" /></li>');
			sectionTitle = $('<span></span>')
		} else {		
			if (typeof headingLink != "undefined") {
				topNavHeading = $("<li class='topNavHeading' tabindex='0'><a href='" + headingLink + 
					"' name='&lpos=megamenu&lid=mm|" + headingTitle + "|" + headingTitle + "'>"
					+ headingTitle + "</a></li>");
			} else {
				topNavHeading = $('<li class="topNavHeading" tabindex="0">' + headingTitle + '</li>');
			}		
			sectionTitle = $("<span class='sectionTitle' tabindex='0'><a href='" + headingLink + 
				"' name='&lpos=megamenu&lid=mm|" + headingTitle + "|" + headingTitle + "'>"
				+ headingTitle + "</a></span>");
		}
		navbox.append(sectionTitle);
		var topNavGroups = $('<ul class="topNavGroup" data-column="1"></ul><ul class="topNavGroup" data-column="2"></ul><ul class="topNavGroup" data-column="3"></ul>');
		group.each(function(){
			var groupTitle = $(this).attr("title");
			var groupLink = $(this).attr("url");
			var groupColumn = $(this).attr("column");
			var link = $(this).find('link');
			var tnSecondaryGroup = $('<li class="tnSecondaryGroup" data-column="' + groupColumn + '"><a href="' + groupLink +'" name="&lpos=megamenu&lid=mm|' + headingTitle +'|' + groupTitle + '">' + groupTitle + '</a></li>');
			var topNavLinkList = $('<ul class="topNavLinkList"></ul>');
			link.each(function(){
				var linkURL = $(this).attr("url");
				var linkText = $(this).text();
				var tnSecondaryLink = $('<li class="topNavLink"><a class="topNavLink" href="' + linkURL +'" name="&lpos=megamenu&lid=mm|' + headingTitle + "|" + groupTitle +'|' + linkText + '">'+ linkText + '</a></li>');
				tnSecondaryLink.appendTo(topNavLinkList);
			});
			topNavLinkList.appendTo(tnSecondaryGroup);
			tnSecondaryGroup.appendTo(navbox);
		});
		topNavGroups.appendTo(navbox);
		navbox.append($('<div style="clear: both; width: 1px; height: 1px;"></div>'));
		topNavBottomLink.clone().appendTo(navbox);
		navbox.find('li.tnSecondaryGroup').each(function(){
			var column = $(this).data('column');
			$(this).appendTo($(this).siblings('ul[data-column="' + column +'"]'));
		});
		if(content.length > 0){
			var contentString = new String(content);
			var promo = $('<div><li id="topNavPromo" style="list-style-image:url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"></li></div>');
			try{
				var promoHeader = content.find('header');
				var promoCopy = content.find('copy');
				var promoLink = content.find('a');				
				var promoLi = promo.find('li');	
												
				if (content.find('image').text().length) {
					var promoImage = $('<img src="' + content.find('image').text() + '" />');
					var promoImageLink = promoLink.clone().removeAttr('class');
					promoImageLink.text("").append(promoImage);
					promoLi.append(promoImageLink);					
				}
				promoLi.append(promoHeader);
				promoLi.append(promoCopy);
				promoLi.append(promoLink);
				navbox.find('ul[data-column="3"]').append(promo.html());
			}
			catch(err){	
				//alert("Problem with " + err);
			}
		}
		topNavHeading.append(navbox);
		navul.append(topNavHeading);
		if(navbox.find('ul').html().length > 0) {
			navbox.closest('.topNavHeading').wrapInner('<span></span>');
			navbox.closest('.topNavHeading').attr('onClick', 'return false').css('cursor', 'default');
		}		
	});
	navul.appendTo('div#topNav');
	return $('div#topNav').html();
	

	
}

function createFooter(result){
	var footerNav = $('#footer-nav');
	var level = $(result).find('level:not(:last)');
	level.each(function(){ 	
		var headingTitle = $(this).attr("title");
		var headingLink = $(this).attr("url");
		var locationBottom = $(this).attr("bottom");
		var expanded = $(this).attr("expand");
		var group = $(this).find('group');
		var topNavHeading, sectionTitle;
		sectionTitle = $('<a class="footerHeaderLink" href="' + headingLink + 
					'" name="&lpos=megafooter&lid=mm|' + headingTitle + '|' + headingTitle + '">'
					+ headingTitle + '</a>');
		if(expanded == "true"){
			footerNav.append($('<div style="clear:both; margin-top:25px"></div>'));
			footerNav.append(sectionTitle);
			var groupList = $('<ul class="bottomNavGroup" />');
			group.each(function(){
				var groupTitle = $(this).attr("title");
				var groupURL = $(this).attr("url");
				var groupLink = $("<li><a name='&lpos=megafooter&lid=mm|" + headingTitle + "|" + groupTitle + "' href='" + groupURL + "'>" + groupTitle + "</a></li>");
				groupList.append(groupLink);
			});
			groupList.find('li:not(:last)').append("&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;");
			footerNav.append(groupList);
		}
		else{
			footerNav.append(sectionTitle).append($('<span class="footerLinkSeparator"> | </span>'));
		}
	});
	$('.footerLinkSeparator').last().hide();
	$('.footer').prepend(footerNav);
	//return footerNav[0].outerHTML;
}

function createMobileMenu() {
/*
	var mobileMenus = $('<div id="hide_rwd" style="float:right;"></div>');
	var languageMenu = $('<div class="rwd_menu"><div class="slide" style="cursor: pointer;"><img src="/style library/images/globe.png"/></div><div class="view" style="display: none;"><ul class="rwd_menu_dropdown"></ul></div></div>');
	$('li.topNavHeading').last().find('.tnSecondaryGroup a').clone().appendTo(languageMenu.find('.rwd_menu_dropdown'));
	var mobileMenu = $('<div class="rwd_menu"><div class="slide" style="cursor: pointer;">Menu</div><div class="view" style="display:none;"><ul class="rwd_menu_dropdown" id="menu"></ul></div></div>');
	var sectionTitles = $('.sectionTitle a').clone();
	sectionTitles.appendTo(mobileMenu.find('.rwd_menu_dropdown'));
	mobileMenus.append(languageMenu).append(mobileMenu);
	mobileMenus.find('a').wrap('<li></li>');
	$('.SecondaryNav').after(mobileMenus);
	return mobileMenus[0].outerHTML;
*/
	//$('#nav-offcanvas').append($('ul#topNav'));
	$('ul#topNav').clone().appendTo($('#nav-offcanvas'));
}

function displayNewNav(region){
	if(sessionStorage && sessionStorage.getItem("topNav" + region + "2") !== null){	
		var topNavHTML = JSON.parse(sessionStorage.getItem("topNav" + region + "2"));
		var topNav = topNavHTML.topNav;
		var mobileMenu = topNavHTML.mobileMenu;
		var footer = topNavHTML.footer;
		//abg append html to places now
		$('div#topNav').html(topNav);
		$('.footer').prepend($(footer));
		$('.SecondaryNav').after($(mobileMenu));
		$('div.view').hide(); 
		$('div.rwd_menu').click(function(e) {
			var thisMenu = $(this).find('div.view');
			if(thisMenu.is(':visible'))
			{
				thisMenu.fadeOut('fast');
			}
			else {	
				$('.view').hide();
			 	thisMenu.fadeIn('fast');
   				e.stopPropagation();
			}
		});
		}
	else{
		var navurl = "/style library/topnav/topnav" + region + "2.xml";
		$.get(navurl,
			function(result){						
				var topNav = createTopNav(result);
				var mobileMenu = createMobileMenu();
				var footer = createFooter(result);
				var data = {
					region: region,
					topNav: topNav,
					mobileMenu: mobileMenu,
					footer: footer
				}
				if(sessionStorage){
					sessionStorage.setItem("topNav" + region + "2.xml", JSON.stringify(data));
				}

				$('li.topNavHeading').hoverIntent({
					over: navDown,
					out: navUp, 
					timeout: 100
					}).keydown(function(e){
	    				navHandleKey(e,$(this));
			    });			  			    				
			    var navHeadings = document.querySelectorAll('li.topNavHeading'), i;
				for (i = 0; i < navHeadings.length; ++i) {
					navHeadings[i].addEventListener('focus',navShow,true);
				}
				$('.navBox a').keydown(function(e){
					navLinksHandleKey(e,$(this));
				});
				$('div.view').hide(); 
				$('div.rwd_menu').click(function(e) {
					var thisMenu = $(this).find('div.view');
					if(thisMenu.is(':visible'))
	  				{
						thisMenu.fadeOut('fast');
					}
					else {	
						$('.view').hide();
						thisMenu.fadeIn('fast');
						e.stopPropagation();
					}
		});
	}), "html";
	//console.log('displayNewNav: ' + $('div.#topnav').html());
	}
	$('ul[data-column="1"], ul[data-column="2"], ul[data-column="3"]').removeAttr("data-column");				
	setTimeout(function(){fixTopNavWidth()},250);
	$("li.topNavHeading").unbind("mouseenter").unbind("mouseleave").removeProp('hoverIntent_t').removeProp('hoverIntent_s');
	$('li.topNavHeading').hoverIntent({	
		over: navDown,
		out: navUp, 
		timeout: 100
	});
	
	
	
	
	
}

/*************************************************************************/
/*************************************************************************/	

/* Reduce padding on tabs until they're on the same line */

/*************************************************************************/
/*************************************************************************/	
	
setTimeout(function(){fixTabWidth()},1000);		


/*************************************************************************/
/*************************************************************************/	

/* Make hub page grids fluid for responsive. Set grid header and content */
/* columns the same height across the rows as they change for responsive */

/*************************************************************************/
/*************************************************************************/


var delay = (function() {
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function resetGrid() {
	if ($('.originalGrid').length) {
		$('.majorHubGrid').remove();
		$('.originalGrid').show().attr('class', 'majorHubGrid');
	}		
	$('.majorHubGrid').clone().insertAfter('.majorHubGrid').attr('class', 'originalGrid').hide();
	$('.majorHubGrid').css('display', 'table');
	$('.majorHubGridRow').css('display', 'table-row');
	$('.majorHubGridColumn').css('display', 'table-cell');	
}

function gridHeaderHeight() {
	$('.majorHubGrid .majorHubGridRow').each(function(i, el) {
		height1 = $(this).find('.majorHubGridColumn .majorHubGridHeader:eq(0)').height();
		height2 = $(this).find('.majorHubGridColumn .majorHubGridHeader:eq(1)').height();
		height3 = $(this).find('.majorHubGridColumn .majorHubGridHeader:eq(2)').height();
		maxHeight = Math.max(height1, height2, height3);
		$(this).find('.majorHubGridColumn .majorHubGridHeader').height(maxHeight);
	});
}

function responsiveGrid() {
    var pause = 250;
    $(window).resize(function() {
        delay(function() {
            var width = $('.pageWidth').css('width');
            if (width == '1px') {           	
				resetGrid(); 
				gridHeaderHeight();      
				setTimeout(function(){fixTopNavWidth()},250);				
            } else if (width == '2px') {		
				resetGrid();
				$('.majorHubGrid .majorHubGridRow').each(function(i, el) {				
					if (i % 2 === 0) {
						$('<div class="majorHubGridRow" />').append($(this).find('.majorHubGridColumn:eq(2)')).insertAfter($(this));
					} else {
						$(this).prev().append($(this).find('.majorHubGridColumn:eq(0)'));
					}
				});		
				gridHeaderHeight();						
            } else if (width == '3px') {
				resetGrid();				
				$('.majorHubGrid').css('display', 'inline-block');
				$('.majorHubGridRow').css('display', 'inline-block');
				$('.majorHubGridColumn').css('display', 'inline-block');
				$('.majorHubGridHeaderContainer').css('display', 'inline-block');	
            }
        }, pause );
    });
    $(window).resize();
};


/**************************************************************************/
/**************************************************************************/

/* Feature Comparison Functions */

/**************************************************************************/
/**************************************************************************/

//Get parameter value
function getParam(key) {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars[key];
}

//Set compare checkboxes function
function setCompareFeatures() {
	var cbxCount = $("#featureheader :checkbox").size();
	var cbxState = $(this).is(":checked");
	
	//First see if max products already checked
	if (cbxState && $(".fccbxh" + cbxCount).is(":checked"))
	{
		$(this).removeAttr("checked");
		alert("Only four products may be compared");
	}
	//Toggle check ON
	else if (cbxState)
	{
		for (i = 1; i <= cbxCount; i++)
		{
			if($(".fccbxh" + i).attr("checked") != "checked")
			{
				$(".fccbxh" + i).attr("checked","checked");
				
				if ($("#featurecontent :checked").length > 1)
				{
					$("div #fcbtn").show();
					$("div #featurecomparebtn").show();
				}
				break;
			}
		}
	}
	//Toggle check OFF
	else
	{
		for (i = cbxCount; i > 0; i--)
		{
			if($(".fccbxh" + i).attr("checked") == "checked")
			{
				$(".fccbxh" + i).removeAttr("checked");
				break;
			}
		}
		
		if ($("#featurecontent :checked").length < 2)
		{
			$("div #fcbtn").hide();
			$("div #featurecomparebtn").hide();
		}
	}
}

//Compare Features
function compareFeatures() {
	var featurenewQS = "?";
	var prodCounter = 0;
	//var origPageQS = getOrigPageQS();
	
	$("#featurecontent :checked").each(function() {
		var prodIndex = $(this).index("#featurecontent :checked") + 1;
		var prodID = $(this).attr("id");
		
		prodCounter = prodCounter + 1;
		featurenewQS = featurenewQS + "prod" + prodIndex + "=" + prodID;
		
		if ($("#featurecontent :checked").length != prodCounter) {
			featurenewQS = featurenewQS + "&";
		}
	});
	
	var newURL = "http://" + window.location.hostname + "/en-us/products-site/Pages/test-rs-fctable.aspx" + featurenewQS;
	window.location = newURL;
}

/*************************************************************************/
/*************************************************************************/	

/* Makes spec tables inside tabs responsive */

/*************************************************************************/
/*************************************************************************/

function stopVid() {
	//$('.HeroItem').find('iframe').attr('src', '');
	$('.HeroItem').each(function(){	
		if ($(this).find('iframe').length > 0) {
			$(this).find('iframe').attr('src', '');
			$(this).find('.HeroContent').css('display', 'inline-block');
			$(this).find('.videoContainer').css('display', 'none');			
		}		
	});
}


/*************************************************************************/
/*************************************************************************/	

/* Makes tables inside tabs responsive */

/*************************************************************************/
/*************************************************************************/

var delayTable = (function() {
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();	

function responsiveTable() {
	var pause = 250;
	var dataText;
	if (!$('.resTable').length) {	
		$('.ms-rteTable-default').each(function() {			
			if (!$(this).hasClass('smallTable') && (!$(this).hasClass('featuresTable') || !$(this).attr("id") == "featuresTable")) {
				$(this).clone().removeClass('ms-rteTable-default').addClass('resTable').appendTo($(this).parent());
			}	
		});	
		var j=0;
		$('.resTable').each(function() {
			if ($(this).hasClass('headerOnly')) {
				$('<div class="dataContent"></div>').insertAfter(this);				
				$('th', this).each(function() {
					$(this).appendTo('.dataContent').replaceWith('<div class="dataHeader">' + $(this).index() + '<br/>' + $(this).html() + '</div>');					
				});
				$('td', this).each(function() {
					$(this).replaceWith('<div class="dataCell">' + $(this).index() + '<br/>' + $(this).html() + '</div>');								
				});
				$('.dataCell', this).each(function() {
					$(this).insertAfter('.dataContent .dataHeader:eq(' + $(this).index() + ')');
				});
			} else {
				$(this).prepend('<h3>' + $(this).find('tr.tableTitle').text() + '</h3>');
				$(this).find('tr.tableTitle').remove();
				j++;
				$(this).find('tr').each(function() {
					$(this).find('th, td').each(function() {
						$(this).replaceWith('<div class="dataCell list">' + $(this).html() + '</div>');	
					});				
					$(this).before('<div class="row dataGroup">' + $(this).find(':first-child').html() + '</div>');			
					$(this).children().first().remove();		
					$(this).replaceWith('<div class="row dataRow">' + $(this).html() + '</div>'); 				
				});				
				$(this).find('.row:nth-child(2)').insertAfter($('.dataGroup')).attr('class', 'row dataLabelRow');		
				$(this).find('.dataRow .dataLabel:last-child').remove();
				$(this).find('.row').each(function() {
					var i=0;
					if (!$(this).hasClass('dataLabelRow') && !$(this).hasClass('dataGroup')) {					
						$(this).find('.dataCell').each(function() {
							$(this).attr('class', 'dataVal');
								dataText = $(this).parent().prev().find('.dataCell:eq(' + i + ')').text();
							$(this).before('<div class="dataCell dataLabel">' + dataText + ':</div>');
							i++;
						});
					}											
				});
			}	
		});				
	}		
	$(window).resize(function() {	
		delayTable(function() {
			var width = $(window).width();
			if (width > 900) {		
				$('.ms-rteTable-default').css('display', 'block');
				$('.resTable').css('display', 'none');				
			} else if (width <= 900) {						
				$('.resTable').css('display', 'block');
				$('.ms-rteTable-default').css('display', 'none');
			}
		}, pause );
	});
	$(window).resize();
}	
	
/**************************************************************************/
/**************************************************************************/

/* Change layout of form tables for mobile devices */

/**************************************************************************/
/**************************************************************************/

function responsiveFormTable() {
	if ($('table.formTable') && $(window).width() <= 640) {
		$('table.formTable tr').each(function(){
			if ($(this).find(':first-child') && $(this).find(':first-child').html().length) {
				$(this).before('<tr class="r" id="r' + i + '"><td>' + $(this).find(':first-child').html() + '</td></tr>');
				$(this).not('.r').find('td:first-child').css('display', 'none');
			}
		});	
	} else if ($('table.formTable') && $(window).width() > 640) {
		$('table.formTable tr').each(function(){		
			if ($(this).hasClass('r')) {
				$(this).remove();
			}
			$(this).not('.r').find('td:first-child').css('display', '');
		});		
	}
}

/**************************************************************************/
/**************************************************************************/

/* Code that runs when page is loaded */

/**************************************************************************/
/**************************************************************************/



$(document).ready(function() { 	
	
	var firstNavElem = $('#sideNavBox').find('#left-col').find('ul').first().find('li').first();	
	if (firstNavElem.find('ul').length) {
		firstNavElem.removeClass('selected');
		firstNavElem.find('a').first().removeClass('selected');
	}
	
var oldwidth = $(window).width();
var timeout;

var recalc = function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
  var container_width = $('#fbcontainer').width();    
	$('#fbcontainer').html('<div class="fb-page" ' + 
	'data-href="http://www.facebook.com/AMD"' +
	' data-width="' + container_width + '" data-height="394" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="YOUR FACEBOOK PAGE URL"><a href="YOUR FACEBOOK PAGE URL">YOUR FACEBOOK PAGE TITLE</a></blockquote></div></div>');
	if(typeof FB !== 'undefined') {
		FB.XFBML.parse( );  
	}  
  }, 100);  
};

//recalc();

$(window).bind("resize", function(){  
if(oldwidth !== $(window).width()) {
	recalc();
	oldwidth = $(window).width();
}
});	
/**************************************************************************/
$('.homePageFeature').first().addClass('active');

/*
$('.homePageFeature').each(function() {
	var thisLink = $(this).find('a');
	var featureLink = $('.homePageFeatureCopy').eq($(this).index()).find('a');
	thisLink.attr('href', featureLink.attr('href'));
	thisLink.attr('target',featureLink.attr('target'));
});
*/

/*
$('.homePageFeature').each(function() {
	var thisLink = $(this).find('a');
	var featureLink = $('.homePageFeatureCopy').eq($(this).index()).find('a');
	thisLink.attr('href', featureLink.attr('href'));
	thisLink.attr('target',featureLink.attr('target'));
});
*/

preload([
    '/style library/images/page-bg-game-pentagon.png'
]);


/**************************************************************************/
/**************************************************************************/

/* Add gray bg color to hero when class is added to child on page */

/**************************************************************************/
/**************************************************************************/

	if ($('.productListingHubHero').find('.bannerGrayBg')) {
		$('.productListingHubHero').addClass('bannerGrayBg');	
		$('.productListingHubHero').find('.bannerGrayBg').addClass('bannerGrayText');
	}
	
/**************************************************************************/
/**************************************************************************/

/* Actions for the stacked heroes */

/**************************************************************************/
/**************************************************************************/	

	var heroNum = 0;
	var heroLen = $('.HeroItem.stacked').length;
	
	$('.HeroItem.stacked').each(function() {
		$(this).attr('id', 'hero' + (heroNum + 1));
		
		// Set hero content height to the height of the hidden image 
		
		if ($(this).find('img').height() > 50) {
			$(this).find('img').hide();
			$(this).find('img').css('opacity', '0');
			$(this).find('.heroContent').css('height', $(this).find('img').height() + 'px');
			var contentHeight = $(this).find('img').height();						
		} else {		
			$(this).find('img').load(function() {
				$(this).hide();
				$(this).css('opacity', '0');	
				var imgHeight = $(this).height();
				if (imgHeight > 50) {
					$(this).closest('.heroContent').css('height', imgHeight + 'px');	
					$(this).hide();
					var contentHeight = imgHeight;
				}
			});				
		}

		// Create rollover action if hero contains a link or a YouTube video
		
		if ($(this).find('a').length || $(this).find('iframe[src*="youtube"]').length) {
			if (!$(this).find('a').hasClass('hero_button')) {					
				$(this).hover(function(){
				    $(this).find('.heroBg').css('opacity', '0.7');
				    $(this).css('cursor', 'pointer');
				    }, function(){
				    $(this).find('.heroBg').css('opacity', '1');
				    $(this).css('cursor', 'default');
				});
			}
		}

		// Find hero image and set it as the background image of the hero
			
		var prodHubHeroBg = $(this).find('img').attr('src');
		heroNum++;
		if ($(this).find('.imageRight').length) {
			$(this).find('.heroBg').addClass('imageRight');
		} else if ($(this).find('.imageCenter').length) {
			$(this).find('.heroBg').addClass('imageCenter');
		}
		$(this).find('.heroBg').css('background-image', 'url(' + prodHubHeroBg + ')');
		
		// Append pointer graphic to end of CTA if hero contains link but NOT YouTube video
		
		/*
		if (!$(this).find('iframe[src*="youtube"]').length && $(this).find('.heroContent').parent('a').length) {
			$(this).find('h2').append('<span class="heroTitlePointer"><img src="/style library/images/hero-title-pointer.png"></span>');
		}
		*/
		
		// If hero contains YouTube video create close bar, size video + create click actions to fade in/out hero content/video
									
	    $(this).find('.heroVidContainer').css('height', contentHeight);
	    $(this).find('.heroVidContainer').find('p').remove();
	    $(this).find('.heroVidContainer').prepend('<div class="closeVid"><div class="closeBox"><a href="#">Close X</a></div></div>').width();
		if ($(this).find('iframe[src*="youtube"]').length) {
			$(this).css('cursor', 'pointer');
			var thisVid = $(this).find('iframe[src*="youtube"]');
			//var vidSrc = thisVid.attr('src') + '?autoplay=1';
			var vidSrc = thisVid.attr('src');
			var initVidWidth = 968;
			var ratio = thisVid.width() / thisVid.height();	
			thisVid.width(initVidWidth).height(initVidWidth / ratio);
			$(this).click(function(e) {
				if(!$(e.target).closest('a').length) {
					$(this).css('cursor', 'default');
					//thisVid.attr('src', vidSrc);
					var targetVideoId  = parseUri(vidSrc).path.split("/");
					targetVideoId = targetVideoId[targetVideoId.length -1] || "";
					$(this).find('.heroBg').fadeOut('slow', function(){
						$(this).animate({height: thisVid.height()})
						$(this).next().fadeIn('slow', function(){							
						});
						cfAutoPlayVideo(targetVideoId,0);						
					});
				}		
			});
			$(this).find('.closeVid').width(initVidWidth);
			$(this).find('.closeVid a').click(function(e) {
				e.stopPropagation();
				e.preventDefault();				
				$(this).closest('.heroVidContainer').fadeOut('slow', function() {
					$(this).find('iframe[src*="youtube"]').attr('src', '');	
					$(this).closest('.heroVidContainer').prev().fadeIn('slow', function(){
						$(this).closest('.HeroItem').find('.heroVidContainer').find('iframe').attr('src', vidSrc);	
					});
					$(this).closest('.heroVidContainer').prev().animate({height: contentHeight});
				});							
			});    	
	    }  	
	});

/**************************************************************************/
/**************************************************************************/

/* Responsive for stacked hereos change margins + resize video */

/**************************************************************************/
/**************************************************************************/	

	$(window).resize(function() {
		$('.HeroItem.stacked').each(function(){
			if ($('.pageWidth').css('width') == '3px') {
			    var imgHeight = $(this).find('img').height();
			    if (imgHeight > 200) {
					$(this).find('.productHubHeroText').css('margin-top', imgHeight);
				}
			} else {
				$(this).find('.productHubHeroText').css('margin-top', '0');
			}
			var initVidWidth = 968;
			var pageWidth = $('.content').width();
			var thisVid = $(this).find('iframe[src*="youtube"]');
			var ratio = thisVid.width() / thisVid.height();
			if (thisVid.length && pageWidth <= initVidWidth) {
				thisVid.width(pageWidth).height(pageWidth / ratio);		
			} else {			
				thisVid.width(initVidWidth).height(initVidWidth / ratio);
			}
		    $(this).find('.heroVidContainer').css('height', thisVid.height() + $(this).find('.closeVid').outerHeight());
		    var closeWidth = thisVid.width() - $(this).find('.closeVid');
		    $(this).find('.closeVid').width(thisVid.width());
		
		});
	});

/**************************************************************************/
/**************************************************************************/

/* Remove link actions for headers on product hub page when no URL present */

/**************************************************************************/
/**************************************************************************/	
	
	$('.productHubCategory').each(function(){
		if ($(this).find('h3').find('a').length) {
			if ($(this).find('h3').find('a').attr('href').length <= 1 ) {
				$(this).find('h3').find('a').css({
					'color' : '#000',
					'cursor' : 'default'
				});	
			}		
		}
	});


/**************************************************************************/
/**************************************************************************/

/* Set 'resize' var to '0' when page is loaded. This is used so that code */
/* that runs on resize will only run the first time the viewport is resized */

/**************************************************************************/
/**************************************************************************/

	resize = 0;		
	var switched = 0;
	var resizeTimer = null;
		
/**************************************************************************/
/**************************************************************************/

/* Get the page's region code and add link to regional CSS in the header */

/**************************************************************************/
/**************************************************************************/
		
		var pageLang = $('html').attr('lang').toLowerCase();			
		if(pageLang.length > 0) {
			$('head').append('<link href="/Style Library/' + pageLang + '.css" type="text/css" rel="stylesheet">');
			//$('head').append('<link href="/Style Library/' + pageLang + '.css" type="text/css" rel="stylesheet">');
		}
		
/**************************************************************************/
/**************************************************************************/

/* Function to capitalize each word in text */

/**************************************************************************/
/**************************************************************************/		
				
		$.fn.capitalise = function() {
		    return this.each(function() {
		        var $this = $(this),
		            text = $this.text(),
		            split = text.split(" "),
		            res = [],
		            i,
		            len,
		            component;
		        for (i = 0, len = split.length; i < len; i++) {
		            component = split[i];
		            res.push(component.substring(0, 1).toUpperCase());
		            res.push(component.substring(1));
		            res.push(" "); // put space back in
		        }
		        $this.text(res.join(""));
		    });
		};
		
		
		$('#notifyme, .notifyme').click(function(){
			LightBoxWindow($(this).attr("href"),700,700);
			return false;
		});
		
		
		
		
		//$('.homePageFeatures').html($('.homePageFeatures').html().replace(/[\u200B]/g,''));
		
	$('.SecondaryNav div.lang a').mouseover(function(event) {
		$('.SecondaryNav ul.lang-links').show();
	});		
		
	$('.SecondaryNav ul.lang-links').mouseover(function(event) {
		$('.SecondaryNav div.lang a').addClass('lang-open');
	});		
	
	$('.SecondaryNav div.lang').mouseout(function(event) {
		$('.SecondaryNav div.lang a').removeClass('lang-open');
		$('.SecondaryNav ul.lang-links').hide();
	});		
		
	
			
/**************************************************************************/
/**************************************************************************/

/* Functions you want to happen when users aren't in authoring */

/**************************************************************************/
/**************************************************************************/

if ($('input#MSOAuthoringConsole_FormContext').val() != '1') {

	responsiveTable();
	responsiveGrid();
		
	$('.navbar-toggle').click(function() {
		var mobilenav = $('#nav-offcanvas');		
		$('#masthead').animate({
		    marginLeft: '300px'
		}, 500);			
		$('#s4-bodyContainer').animate({
		    marginLeft: '300px'
		}, 500);
	    mobilenav.show().animate({
		    marginLeft: '0'
		}, 500);
		$('.navbar-toggle-mobile').show();
		//$('.navbar-toggle-mobile').addClass('show');
	});	
	
	function closeMobileMenu() {
		var mobilenav = $('#nav-offcanvas');
		if (mobilenav.is(':visible')) {
			$('#masthead').animate({
			    marginLeft: '0'
			}, 500);			
			$('#s4-bodyContainer').animate({
			    marginLeft: '0'
			}, 500);
		    mobilenav.show().animate({
			    marginLeft: '-300px'
			}, 500);
			$('.navbar-toggle-mobile').hide();
		}
	}
	
	$('.navbar-toggle-mobile').click(function() {
		closeMobileMenu();
	});	
	 		
	$('.productDetailProcCol').each(function() {
		if ($.trim($(this).find('div').not('div[id$="_label"]').text()).length < 1) {
			$(this).hide();
		}
	});
	
	$(window).resize(function() {
		//var newHeight = $('#s4-workspace').outerHeight() - 45;
		var newHeight = $('#s4-workspace').outerHeight();
		$('#s4-workspace').css('height', newHeight);
		if ($('.pageWidth').css('width') == '1px') {
			closeMobileMenu();
		}
	});
		
/**************************************************************************/
/**************************************************************************/

/* Show/hide JiaThis mobile menu */

/**************************************************************************/
/**************************************************************************/

	if (pageLang == 'zh-cn') {
		$('follow').empty();
		$(window).resize(function() {
			if ($('.pageWidth').css('width') == '1px') {
				$('.jiathis_style_m').hide();
			} else {
				$('.jiathis_style_m').show();
			}
		});
	}

	$('.jiathis_style_m a.jiathis_button_tsina').remove();
	$('.jiathis_style_m a.jiathis_button_qzone').remove();
	$('.jiathis_style_m a.jiathis_button_tqq').remove();
	$('.jiathis_style_m a.jiathis_button_renren').remove();
	$('.jiathis_style_m .jiathis.jiathis_txt.jtico.jtico_jiathis').remove();
	$('.jiathis_style_m .jiathis_style_32x32').append('<a class="jiathis_button_tsina" name="&LPos=JIAThis&LinkID=sinaweibo" onclick="jiathis_mh5.sendTo(&#39;tsina&#39;);" title="分享到豆瓣"><span class="jiathis_txt jtico jtico_tsina"></span></a>' +
		'<a class="jiathis_button_weixin" name="&LPos=JIAThis&LinkID=weixin" onclick="jiathis_mh5.sendTo(&#39;weixin&#39;);" title="分享到豆瓣"><span class="jiathis_txt jtico jtico_weixin"></span></a>' +
		'<a class="jiathis_button_linkedin" name="&LPos=JIAThis&LinkID=linkedin" onclick="jiathis_mh5.sendTo(&#39;linkedin&#39;);" title="分享到LinkedIn"><span class="jiathis_txt jtico jtico_linkedin"></span></a>' +
		'<a class="jiathis_button_email" name="&LPos=JIAThis&LinkID=email" onclick="jiathis_mh5.sendTo(&#39;email&#39;);" title="分享到邮件"><span class="jiathis_txt jtico jtico_email"></span></a>' +
		'<a class="jiathis_button_print" name="&LPos=JIAThis&LinkID=print" onclick="jiathis_sendto(&#39;print&#39;);return false;" title="打印"><span class="jiathis_txt jtico jtico_print"></span></a>'
	);

/**************************************************************************/
/**************************************************************************/

/* Append second button in imageLeftOrangeButton Item Style */

/**************************************************************************/
/**************************************************************************/

	$('.imageLeftOrangeSecondButton').each(function(){
		var firstButton = $(this).closest('li').prev('li').find('.orangeButton'); 
		$(this).insertAfter(firstButton);
	});	

/**************************************************************************/
/**************************************************************************/

/* Remove extraneous paragprah tags from video on product detail page */

/**************************************************************************/
/**************************************************************************/
		
	if ($('.productDetailVideo').length) {
		$('.productDetailVideo').hide();
		$('.productDetailVideo').find('p').remove();
	}
	
	if ($('.productDetailTwoColumnLink').length) {
		$('.productDetailVideo').hide();
		$('.productDetailVideo').find('p').remove();
	}
	
/**************************************************************************/
/**************************************************************************/

/* Hide space when no link entered for shop promo links on product detail page */

/**************************************************************************/
/**************************************************************************/
		
	$('.productDetailTwoColumnLink').each(function() {
		if (!$(this).find('a').length) {
			$(this).hide();
		}   	
	});
	
/**************************************************************************/
/**************************************************************************/

/* Hide shop promos on product detail page when one or both do not 
   contain copy + an image  */

/**************************************************************************/
/**************************************************************************/

	$('.productDetailPromo .productDetailPromoImage').each(function() {
		if (!$(this).find('img').length) {
			$('.productDetailPromo').hide();
		}
	});
	
	$('.productDetailPromo .productDetailTwoColumnContent').each(function() {
		if ($.trim($(this).find('div').not('div[id$="_label"]').text()).length < 1) {
			$('.productDetailPromo').hide();
		}		
	});	
	
/**************************************************************************/
/**************************************************************************/

/* Scale full screen width page sections to fit screen width  */

/**************************************************************************/
/**************************************************************************/
	
	function scalePageSection() {
		var viewWidth = $(window).width();
		var viewHeight = $(window).height() - $('#masthead').outerHeight() - $('#ms-designer-ribbon').outerHeight();	
		$('#fullScreenPromoPage').find('.pageSection').each(function() {
			$(this).css({
				'width' : '100%',
				'min-height' : viewHeight
			});
			$(this).find('.pageContentFull').css('min-height', viewHeight);							    	
		});
	}
	
/**************************************************************************/
/**************************************************************************/

/*   */

/**************************************************************************/
/**************************************************************************/	
	
	$('.contentBoxColor').each(function() {
		if ($.trim($(this).find('.contentBoxColorTitle').text()).length < 1 && $.trim($(this).find('.contentBoxColorText').text()).length < 14) {		
			$(this).find('.contentBoxColorTitle').closest('.contentBoxColor').hide();
		}
	});
	
	//if ($.trim($('#productDetail .productDetailHeroText h2')).text()).length < 1 && $.trim($('#productDetail .productDetailHeroText p')).text()).length < 1) {
		
	if ($.trim($('#productDetail .productDetailHero p').text()).length < 6) {
		$('#productDetail .productDetailHero p').hide();
	}
		
	if ($.trim($('#productDetail .productDetailHeroText h2').text()).length < 1 && $.trim($('#productDetail .productDetailHeroText p').text()).length < 3) {
		$('#productDetail .productDetailHeroText').hide();
	}
	
	if ($.trim($('.pageContentFull.saLandingPage h2').text()).length < 5) {
		$('.pageContentFull.saLandingPage h2').hide();
	}
		
	if ($.trim($('.productDetailHeader h2').text()).length < 1) {
		$('.productDetailHeader h2').hide();
	}
		

		
	//$('#homePageHeroMult').find('.pointerFeatureCopy').appendTo('.pointerFeaturesCopyContainer');
	$('.pointerFeatureCopy').appendTo('.pointerFeaturesCopyContainer');
	$('.pointerFeaturePointerLink').appendTo('.pointerFeaturesPointerContainer');
	
	$('.pointerFeature:first-child').addClass('active');	
	$('.pointerFeatureCopy:first-child').addClass('active');
	$('.pointerFeaturePointer:first-child').addClass('active');		
	
	$('.pointerFeature').mouseover(function(event) {
		var featureNum = $(this).index();
		if(!$(this).hasClass('active')){
			$(this).parent().find('.pointerFeature').removeClass('active');
			$(this).addClass('active');
			$('.pointerFeaturePointer').not(':eq(' + featureNum + ')').removeClass('active');
			$('.pointerFeaturePointer').eq(featureNum).addClass('active');		
			$('.pointerFeatureCopy').eq(featureNum).addClass('active');
			$('.pointerFeatureCopy').not(':eq(' + featureNum + ')').removeClass('active');	
		}					
	});	
	
	$('.pointerFeaturePointer').mouseover(function(event) {
		var featureNum = $(this).index();
		if(!$(this).hasClass('active')){
			$(this).parent().find('.pointerFeaturePointer').removeClass('active');					
			$(this).addClass('active');
			$('.pointerFeatureCopy').eq(featureNum).addClass('active');
			$('.pointerFeatureCopy').not(':eq(' + featureNum + ')').removeClass('active');						
		}					
	});	

	$('.pointerFeatureCopy').mouseover(function(event) {
		var featureNum = $(this).index();
		if(!$(this).hasClass('active')){
			$(this).parent().find('.pointerFeatureCopy').removeClass('active');		
			$(this).addClass('active');
			$('.pointerFeaturePointer').not(':eq(' + featureNum + ')').removeClass('active');
			$('.pointerFeaturePointer').eq(featureNum).addClass('active');	
			$('.pointerFeature').eq(featureNum).addClass('active');
			$('.pointerFeature').not(':eq(' + featureNum + ')').removeClass('active');
		}					
	});
	
/*
	$('.pointerFeature').click(function() {
		var featureNum = $(this).index();						
		 if ($('.pointerFeatureCopy').eq(featureNum).find('a').attr('target') == "_blank") {
		 	window.open($('.pointerFeatureCopy').eq(featureNum).find('a').attr('href'));
		 } else {
		 	window.location.href = $('.pointerFeatureCopy').eq(featureNum).find('a').attr('href');
		 }
	});
	
	$('.pointerFeaturePointer').click(function() {
		var featureNum = $(this).index();
		 if ($('.pointerFeatureCopy').eq(featureNum).find('a').attr('target') == "_blank") {
		 	window.open($('.pointerFeatureCopy').eq(featureNum).find('a').attr('href'));
		 } else {
		 	window.location.href = $('.pointerFeatureCopy').eq(featureNum).find('a').attr('href');
		 }
				
	});
	
	$('.pointerFeatureCopy').click(function() {
		var featureNum = $(this).index();		
		 if ($(this).find('a').attr('target') == "_blank") {
		 	window.open($(this).find('a').attr('href'));
		 } else {
		 	window.location.href = $(this).find('a').attr('href');
		 }						
	});	
*/	
	
	$('.pointerFeatureCopy').find('a').click(function(e) {
		//e.preventDefault();			
	});	
		
/**************************************************************************/
/**************************************************************************/

/* Scale hero to viewport size (Ignition pages + homepage 'takeover') */

/**************************************************************************/
/**************************************************************************/

	$(window).load(function() {
		
		function scaleHero() {
			var viewWidth = $(window).width();
			//if ($('#ms-designer-ribbon').length) {				
				//var viewHeight = $(window).height() - $('#masthead').outerHeight() - $('#ms-designer-ribbon').outerHeight();		
			//} else {
				//var viewHeight = $(window).height() - $('#masthead').outerHeight();
			//}
			
			var viewHeight = $(window).height() - $('#ms-designer-ribbon').outerHeight();					
			var ratio = viewWidth / viewHeight;
			var contentWidth = (945 / viewWidth) * 100; 
			var initOffset = $('#fullScreenPromoPage').offset();
			var initPos = $('#fullScreenPromoPage').position();			
			var mastheadOffset = $('#masthead').outerHeight() + $('#ms-designer-ribbon').outerHeight();	
			var workspaceOffset = $('#s4-workspace').offset().top - mastheadOffset;
			var currentSectionOffset;
			
	
			 
			function scaleIt(thisHero) {
				if ($('.pageWidth').css('width') != '3px') {
				
					var mastheadNegative = $('#masthead').outerHeight() - $('#ms-designer-ribbon').outerHeight();	
										
					if ($('.currentSection').length) {					
						var snapTo = $('.currentSection').position().top;
					}

					if (ratio > 2.25) {	
						displayHeight = 'auto'; 
						displayWidth = viewWidth + "px";					
						thisHero.find('.heroBg').css('background-position', 'center 10%');		
					} else {				
						displayHeight = viewHeight + "px"; 
						displayWidth = 'auto';					
						thisHero.find('.heroBg').css('background-position', 'center 0');						
					}
					thisHero.css({
						'width' : '100%',
						'height' : viewHeight
					});			
					thisHero.find('.heroBg').css({
						'width' : '100%',
						'height' : viewHeight,
						'-moz-background-size' : displayWidth + " " + displayHeight,
						'-webkit-background-size' : displayWidth + " " + displayHeight,
						'-o-background-size' : displayWidth + " " + displayHeight,
						'background-size' : displayWidth + " " + displayHeight
					});	
										
					thisHero.find('.heroContent').css('height', viewHeight);					
					var heroOffset = thisHero.offset();
					var heroPosition = thisHero.position();
					var viewHalf = (viewHeight / 2) + mastheadOffset;
					var viewHalfTop = (viewHeight / 2) - mastheadOffset;
					
					var workspaceOffset = $('#s4-workspace').offset().top;
					var workspacePos = $('#s4-workspace').position().top;
				
					if ($('.currentSection').length) {						
						var heroHeight = 0;
						$('#s4-workspace').animate({
							scrollTop: snapTo
						}, 0);						
					}								
				}			
			}
			$('#fullScreenPromoPage').find('.HeroItem.stacked').each(function() {
							
				scaleIt($(this));
								
			});	
			$('#homePageHero').find('.HeroItem.stacked').each(function() {				
				scaleIt($(this));
			});						
		}
					
		scaleHero();
		scalePageSection();

		$(window).resize(function() {		
			scaleHero();
			scalePageSection();				
	    });	
    });
    
/**************************************************************************/
/**************************************************************************/

/* Scalable heroes scrolling + snapping */

/**************************************************************************/
/**************************************************************************/

$(window).load(function(){

	// Only run on Full Screen Promo Layout
	 
	if ($('#fullScreenPromoPage').length) {
	
		// If page isn't opened at mobile size, add a class to each hero that 
		// the code will use to know which sections can be scrolled to and snapped

		if ($('.pageWidth').css('width') != '3px') {
			$('.HeroItem.stacked').addClass('scrollStop');			
		}	

		var i=0;
		
		// Add a custom numbered attribute to each hero so we can have a
		// unique identifier for each scrollable section
		
		$('.HeroItem.stacked').each(function() {
			i++;		
			$(this).attr('scrollSection', i);			
		});
		
		// Do the smame only for the first section with content
		// We want the user to be able to scroll through the content without the
		// snapping preventing that	
		
		$('.pageSection:first').each(function() {
			i++;		
			$(this).attr('scrollSection', i);
			$(this).addClass('scrollStop');			
		});

		// Add a class that denotes the first hero as the current section by default
		// and a class that denotes the first section with the scroll/snap functionality,
		// the last hero and denotes the first content section as the last section that can be 
		// scrolled to using the scroll button
				
		$('.scrollStop:first').addClass('currentSection').addClass('firstSection');
		$('.HeroItem:last').addClass('lastHero');
		$('.pageSection:first').addClass('lastSection');
		
		// Create the scroll button
		
		$('body').append('<div class="heroDownBtn"><img src="/style library/images/scroll-down-btn.png"/></div>');	
		
		if($('.pageWidth').css('width') == '3px') {
			$('.heroDownBtn').hide();				
		}
		
		// set the masthead height globally
		
		var mastheadheight = $('#masthead').outerHeight() + $('#ms-designer-ribbon').outerHeight();

		$('#s4-workspace').scroll(function() {	
			//$(window).off('mousewheel DOMMouseScroll', mouseScroll);
			//disableMousewheel();
			
			
/*
			console.log('window height: ' , $(window).height() - mastheadheight));
			if (lastHeroBottomPos <= mastheadheight) {
				console.log('Do not snap this!');
				$('#s4-workspace').off('scrollstop');
			}
*/			
			
		});	

		// Functions for scrolling up/down to the nest/previous section when using the scroll button, the up/down 
		// keyboard keys and the mousewheel
						
		function sectionUp() {
			if (!$('.currentSection').hasClass('firstSection')) {		
				$('.heroDownBtn').hide();
				var scrollSection = $('.currentSection').attr('scrollSection');
				var prevSectionNum = parseInt(scrollSection, 10) - 1;
				var prevSection = $("div[scrollSection='" + prevSectionNum + "']");
				var prevPosition = prevSection.position().top;
				$('#s4-workspace').animate({
					scrollTop: prevPosition
					
				}, 800, function() {

				});
			}
		}
		
		function sectionDown() {
			$('.heroDownBtn').hide();
			var scrollSection = $('.currentSection').attr('scrollSection');
			var nextSectionNum = parseInt(scrollSection, 10) + 1;
			var nextSection = $("div[scrollSection='" + nextSectionNum + "']");
			var nextPosition = nextSection.position().top;
			$('#s4-workspace').animate({
				scrollTop: nextPosition
				
			}, 800, function() {

				});

		}

		var isContent = true;
		
		// Function that animates s4-workspace to the top of the div closest to the top
		// of the viewport
		
		function snapSection(scrollDelay) {
		
			if (isContent) {
	
				var mastheadheight = $('#masthead').outerHeight() + $('#ms-designer-ribbon').outerHeight();
				var scrollTop = $('#s4-workspace').offset().top;
				var scrollArr = [];
				var posArr = [];
				
				// Put all the divs with the 'scrollStop' class into an array with their current y positions
				
				$('.scrollStop').each(function() {
					heroOffset = $(this).position().top;
					scrollArr.push([$(this) , $(this).offset().top]);						
				});
				
				// Create another array 
				 
				$.each(scrollArr, function(key, value) {			
					posArr.push([Math.abs(value[1] - scrollTop)]);						
					var thisSection = value[0];				
				});
	
				var arrMin = Math.min.apply(Math, posArr);
				var arrMax = Math.max.apply(Math, posArr);
				var currentSection;
				var scrollPos;
				var thisOffset;
							
				$.each(posArr, function(key, value) {
					if (value == arrMin) {
						currentSection = scrollArr[key][0];
						scrollPos = scrollArr[key][0].position().top;	
						scrollOffset = scrollArr[key][0].offset().top - mastheadheight;
					}	
				});
				
				var scrollDelay = 0;				
	
				$('#s4-workspace').delay(scrollDelay).animate({
					scrollTop: scrollPos
				}, 200, function() {
				
					if (currentSection.hasClass('HeroItem')) {
						$('.heroDownBtn').fadeIn(600);						
					}
						
					$('.currentSection').removeClass('currentSection');
					currentSection.addClass('currentSection');

				});
			}
		}
		
		var mastheadheight = $('#masthead').outerHeight() + $('#ms-designer-ribbon').outerHeight();

		$('#s4-workspace').off('scrollstart', snapSection);
			
		$('#s4-workspace').on('scroll', function() {
			$('.heroDownBtn').hide();
			if ($('.lastSection').offset().top <= mastheadheight) {
				isContent = false;
			} else if ($('.lastSection').offset().top > mastheadheight && ($('.lastHero').offset().top + $('.lastHero').outerHeight()) > mastheadheight) {				
				isContent = true;			
			}			
		});
		
		$('#s4-workspace').on('scrollstop', snapSection);		
		$(window).on('keyup', scrollDownArrow);
		$(window).on('keyup', scrollUpArrow);
		$(window).on('keydown', scrollDownArrowHold);
		$(window).on('keydown', scrollUpArrowHold);		

		
		function scrollDownArrowHold(e) {	
			if (e.keyCode == 40) {
				e.preventDefault();
			}		
		}
		
		function scrollUpArrowHold(e) {	
			if (e.keyCode == 38) {
				e.preventDefault();
			}		
		}
		
		function scrollDownArrow(e) {
			if (e.keyCode == 40) {
				e.preventDefault();
				//console.log('e.keyCode: ' + e.keyCode);
				sectionDown();
			}		
		}
		
		function scrollUpArrow(e) {		
			if (e.keyCode == 38) {
				e.preventDefault();			
				sectionUp();
			}		
		}		
		
		function mouseScrollDown(e) {
			e.preventDefault();
		    if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
		        sectionDown();			        
		   }	
		}
		
		function mouseScrollUp(e) {
			e.preventDefault();
		    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
		        sectionUp();	        			        
		   }	
		}
		
		$('.heroDownBtn').click(function() {		
			sectionDown();							
		});	    		
	}
	
});
    
/**************************************************************************/
/**************************************************************************/

/* Show/hide overlays in hero tiles on mouseover/mouseout */

/**************************************************************************/
/**************************************************************************/

	$('#homePage').find('.tileHoverContent').each(function() {
		$(this).mouseover(function(e) {		
	    	$(this).find('p').css('display', 'block');   	
	    });	    
		$(this).mouseout(function(e) {
	    	$(this).find('p').css('display', 'none');   	
	    });
	 });
    
/*************************************************************************/
/*************************************************************************/	

/* Hide headers when they contain no alphanumeric characters  */

/*************************************************************************/
/*************************************************************************/	

	$("h1, h2, h3").filter( function() {
	    return $.trim($(this).html()) == '';
	}).hide();	
		
/*************************************************************************/
/*************************************************************************/	

/* Check for NewsTicker items and animate them if they exist  */

/*************************************************************************/
/*************************************************************************/	
	
	if($('.newsticker').length > 0) {
		$('.newsticker').first().before('<span id="newsdisplay"></span>');
		$('.newsticker').hide();
		$('.newsticker').hide();
		newstick();
		setInterval(newstick, 7000); 	
	}
	
	if($('.QuoteRotator').length > 0) {
		$('.QuoteRotator').first().before('<div id="quotedisplay"></div>');
		$('.QuoteRotator').hide();
		$('div#quotedisplay').hide();
		quotetick();
		setInterval(quotetick, 15000); 	
	}
	
/**************************************************************************/
/**************************************************************************/

/* Feature Comparison */

/**************************************************************************/
/**************************************************************************/

	var featureQS = window.location.search.substring(1);
	
	if (featureQS) {
		$("#featuretable th").each(function() {
			var featureID = $(this).attr("id");

			//Check each th id to see if it exists in the query string
			if (featureQS.indexOf(featureID) != -1) {
				//If yes, do nothing, continue showing the column
			}
			else if (featureID != "techcolumn")
			{
				//otherwise hide the column
				var hideIndex = $("#" + featureID).index() + 1;
				$("#featuretable td:nth-child(" + hideIndex + "), th:nth-child(" + hideIndex + ")").hide();
			}
		});
	}

/*************************************************************************/
/*************************************************************************/	

/* Hide gray background heroes when they contain no content  */

/*************************************************************************/
/*************************************************************************/	
		
	if (!$('div.generalHero').find('img').length) {
		$('div.generalHero').hide();
	}
	
	if (!$('div.minorHubHero').find('img').length) {
		$('div.minorHubHero').hide();
	}

	$('.generalHeroLeft').each(function() {	
		var leftText = $(this).find('.rightImageTextLeft').find('div').not('div[id$="_label"]').text().length;
		var rightImg = $(this).find('.rightImageTextRight').find('img').length;		
		var heroLeft = leftText + rightImg;				
		if (heroLeft < 10) {
			$(this).hide();
		}		
	});	
	
	$('.generalHeroRight').each(function() {	
		var rightText = $(this).find('.imageTextRight').find('div').not('div[id$="_label"]').text().length;
		var leftImg = $(this).find('.imageTextLeft').find('img').length;
		var heroRight = rightText + leftImg;	
		if (heroRight < 10) {
			$(this).hide();
		}
	});	
	
/*************************************************************************/
/*************************************************************************/	

/* Hide product icon divs when they contain no images  */

/*************************************************************************/
/*************************************************************************/
		
	if (!$('div.productDetailHeroIcon').find('img').length) {
		$('div.productDetailHeroIcon').css('display', 'none');
	}

	if (!$('div.productDetailHeroLink').find('a').length) {
		$('div.productDetailHeroLink').css('display', 'none');
	}
	
	if (!$('div.productDetailHero2Link').find('a').length) {
		$('div.productDetailHero2Link').css('display', 'none');
	}
	
/*************************************************************************/
/*************************************************************************/	

/* Hide secondary hero on product pages if no text + image present  */

/*************************************************************************/
/*************************************************************************/
	
	$('.productDetailHero2').each(function(){
		if ($(this).find('.productDetailHero2Text').text().length <= 76 && $(this).find('.productDetailHero2Image').find('img').length < 1) {		
			$(this).css('display', 'none');
		}
	});	

/*************************************************************************/
/*************************************************************************/	

/* Hide content rows on Game home page if no text + image present  */

/*************************************************************************/
/*************************************************************************/
		
	$('.gamePageRow').each(function(){				
		if (!$(this).find('p, span, ul, ol, a, img, iframe, table').length) {
			$(this).css('display', 'none');
		}		
	});			
	$('.pageContentLeft, .pageContentRight').each(function(){	
		if ($(this).find('.pageContentText').text().length <= 40 && $(this).find('.pageContentImage').find('img').length < 1) {	
			$(this).css('display', 'none');
		}		
	});
	
/*************************************************************************/
/*************************************************************************/	

/* Add Link to Featured Games Container on Game Home Page for Mobile */

/*************************************************************************/
/*************************************************************************/	
	
	$(window).resize(function() {
		if ($('.pageWidth').css('width') == '3px') {
			$('.gameHomeIconContainer').each(function () {
				var thisParent = $(this).parent().attr('class');
				if (thisParent != 'gameLink') {
					var gameLink = $('.gameHomeIconLink a', this).attr('href');
					$(this).wrap('<a class="gameLink" href="' + gameLink + '"></a>');
					$(this).bind({
						mouseenter: function(e) {
							$('.gameHomeIconLink a', this).css('color', '#000');  
						},
						mouseleave: function(e) {
							$('.gameHomeIconLink a', this).css('color', '#f26621');
						}
					});
				}
			});
		} else {
			$('.gameHomeIconContainer').each(function () {
				var thisParent = $(this).parent().attr('class');
				if (thisParent == 'gameLink') {
					$(this).unwrap().unbind('mouseenter mouseleave mouseover mouseout');		
					$('.gameHomeIconLink a', this).removeAttr('style');	
				}
			});
		}
	});

/*************************************************************************/
/*************************************************************************/	

/* Align Featured Game Icons */

/*************************************************************************/
/*************************************************************************/	
	
/*
	var divHeight = $('.gameHomeIconContainer .gameHomeIconImg img').height();
	$('.gameHomeIconContainer').each(function () {
		var $this = $(this).find('.gameHomeIconImg');
		$this.html($this.html().replace(/&nbsp;/g, ''));				
		$this.html($this.html().replace(/[\u200B]/g, ''));						
		divHeight = divHeight > $(this).find('img').height() ? divHeight : $(this).find('img').height();
	});
	$('.gameHomeIconContainer .gameHomeIconImg').height(divHeight);
	$('.gameHomeIconContainer .gameHomeIconImg').each(function () {
		divHeight = $(this).height();
		var imgPad = (divHeight - $('img', this).height()) / 2;
		$(this).css('padding-top', imgPad);
	});	
*/

$('#gameHomePage .featuredTile').each(function () {
	$(this).html($(this).html().replace(/[\u200B]/g,''));
	$(this).html($(this).html().replace(/&nbsp;/g, ''));
});

/*
$('.homepage_tile_twitter_content').find('p').each(function () {
	if ($.trim($(this).text()).length < 1) {
		$(this).hide();
	}
});
*/
	
	
/*************************************************************************/
/*************************************************************************/	

/* Add DIV wrapper to YouTube/Flikr/Slideshare iframe for responsive */

/*************************************************************************/
/*************************************************************************/	
			
	yt = 0;
	fk = 0;
	ss = 0;
	tw = 0;
	fb = 0;

	$('iframe[src*="youtube"]').each(function() {
		if ($(this).parent().attr('class') != 'videoContainer') {
			yt++;
			$(this).before('<div class="videoContainer" id="yt' + yt + '"></div>');
			$('div#yt' + yt).append($(this));				
		}		
		var url = $(this).attr('src');
		var prm = 'wmode=transparent';
		if (url.indexOf(prm) < 0) { 
			if (url.indexOf('?') < 0) {       
        		$(this).attr('src', url + '?' + prm);
        	} else {
        		$(this).attr('src', url + '&' + prm);
        	}
        }      
    });    
	$('iframe[src*="flickr.com"]').each(function() {
		if ($(this).parent().attr('class') != 'videoContainer') {	
			fk++;
			$(this).before('<div class="videoContainer" id="fk' + fk + '"></div>');
			$('div#fk' + fk).append($(this));
		}
    });    
	$('iframe[src*="slideshare.net"]').each(function() {
		if ($(this).parent().attr('class') != 'videoContainer') {	
			ss++;
			$(this).before('<div class="videoContainer" id="ss' + ss + '"></div>');
			$('div#ss' + ss).append($(this));
		}			
    });     
	$('iframe[src*="twitch"]').each(function() {
		if ($(this).parent().attr('class') != 'videoContainer') {	
			tw++;
			$(this).before('<div class="videoContainer" id="tw' + tw + '"></div>');
			$('div#tw' + tw).append($(this));
		}			
    }); 
        
	
/*************************************************************************/
/*************************************************************************/	

/* END NON-AUTHORING FUNCTIONS */

/*************************************************************************/
/*************************************************************************/	

}

/*************************************************************************/
/*************************************************************************/	

/* ACTIONS TO RUN ONLY ON AUTHORING MODE */

/*************************************************************************/
/*************************************************************************/	

if ($('input#MSOAuthoringConsole_FormContext').val() == '1') {

/**************************************************************************/
/**************************************************************************/

/* Set #s4-workspace overflow to visible in authoring mode */

/**************************************************************************/
/**************************************************************************/

	$('#s4-workspace').css('overflow-x', 'visible');	
}	

/*************************************************************************/
/*************************************************************************/	

/* END AUTHORING FUNCTIONS */

/*************************************************************************/
/*************************************************************************/	
		
var defaultval = $.trim($('div.keywordlabel').text());
$('input[name=SupportKeywords]').val(defaultval).focus(function() {
    if(this.value == defaultval) {
        this.value = '';
    }
}).blur(function() {
    if(this.value == '') {
    }
});
	    
/**************************************************************************/
/**************************************************************************/

/* Change color for active text in search input */

/**************************************************************************/
/**************************************************************************/
	    	    
$('#search_csquery').focus(function() {
	$(this).addClass('searchFocus');
});	     
	        	    
/**************************************************************************/
/**************************************************************************/

/* Change top margin of masthead */

/**************************************************************************/
/**************************************************************************/

if($('#suiteBar').length){
	$('div#masthead').css("margin-top",0);
}
$('div.accordion-bar').toggle(
	function() {
 		$(this).siblings('div.accordion-content').slideDown('slow');
 		$(this).find('div.accordion-arrow').attr('class', 'accordion-arrow-open');
 	}, 
	function() { 
		$(this).siblings('div.accordion-content').slideUp('fast'); 
		$(this).find('div.accordion-arrow-open').attr('class', 'accordion-arrow');
		return false; 
	}
); 
$('div.page-footer-bar').toggle(
	function() {
 		$(this).siblings('div.page-footer-content').slideDown('slow');
 	}, 
	function() { 
		$(this).siblings('div.page-footer-content').slideUp('fast'); 
		return false; 
	}
); 
	 	
/**************************************************************************/
/**************************************************************************/

/* Display the top nav. Putting this in the layouts_functions so there */
/* aren't any race conditions */

/**************************************************************************/
/**************************************************************************/

	var urlStem = location.pathname.toString();	
	var pageDir = urlStem.substring(0,7);
	var region;
	
	if (pageDir != '/Pages/') {
		region = urlStem.substring(4,6);
	} else {
		region = 'us';
	}
	
	try{
		displayNewNav(region);
	}
	catch(err){
	}

	$('li.topNavHeading').hoverIntent({
		over: navDown,
		out: navUp, 
		timeout: 100
	});
	

	
	var pagePath = urlStem.substring(6);
	var usOnlyPages = ["press-releases/Pages", "server/benchmarks"];
	var nonePresent = CheckIfNoneExist(pagePath, usOnlyPages);
	if(nonePresent){
		$('.topNavHeading').last().find('a').each(function(){
			var defurl = $(this).attr('href');
    		$(this).click(function(e){
    			e.preventDefault();
    			loadLanguagePage(defurl + pagePath, defurl);
    		});
    	});
    }

	ditchH1Spaces();

	var headerLink = "";
	

	
/**************************************************************************/
/**************************************************************************/

/* Get URL from anchor in grid headers and set it to click action for grid */

/**************************************************************************/
/**************************************************************************/
		
	$('.majorHubGridHeader').each(function(index) {	
		var headerLink = headerLink = $(this).find('a').attr('href');
		$(this).wrap('<a href="' + headerLink + '" class="majorHubGridHeaderLink"></a>');				
	});	
	$('.majorHubGridHeaderFull').each(function(index) {
		var headerLink = headerLink = $(this).find('a').attr('href');
		$(this).parent().parent().wrap('<a href="' + headerLink + '"></a>');
	});	
	
/**************************************************************************/
/**************************************************************************/

/* Wechat QR code popup for zh-cn */

/**************************************************************************/
/**************************************************************************/

	//var wechatBtn = $('img[src$="wechat.png"]');
	var wechatBtn = $('a#wechat');
	var popUp = $('<div class="wechatPopup"><div class="wechatPopupClose"><a href="#">关闭&nbsp;&nbsp;X</a></div></div>');	
	popUp.appendTo('body');
	
	function wechatPos() {
		if ($(wechatBtn).length) {
			$('.wechatPopup').css('display', 'block');
			var offset = $(wechatBtn).offset();
			var popupTop = offset.top - $('.wechatPopup').outerHeight();
			var popupLeft = offset.left;
			$('.wechatPopup').offset({ top: popupTop, left: popupLeft });
		}				
	}
	
	$(wechatBtn).on('click', function(e) {	
		e.preventDefault();	
		if ($('.wechatPopup').css('display') != 'none') {
			wechatPos();
		}
		$(wechatBtn).css('cursor', 'default');					
	});	
	
	$('.wechatPopupClose a').click(function(e){	
		e.preventDefault();
		$(wechatBtn).css('cursor', 'pointer');
		$('.wechatPopup').css('display', 'none');
	});
	
	$('#s4-workspace').scroll(function() {	
		if ($('.wechatPopup').css('display') != 'none') {
			wechatPos();
		}
	});
	
	$(window).resize(function() {
		if ($('.wechatPopup').css('display') != 'none') {
			wechatPos();
		}	
		if ($('.pageWidth').css('width') == '3px') {
			$(wechatBtn).css('cursor', 'pointer');
			$(wechatBtn).parent().attr('href', 'http://weixin.qq.com/r/snUtNWvEfjYBrS9W9yCg').attr('target','_blank');
			$(wechatBtn).on('click', function() {	
				$(wechatBtn).css('cursor', 'pointer');					
			});			
		} else {
			$(wechatBtn).parent().attr('href', '#').attr('target','_self');
			$(wechatBtn).on('click', function() {	
				wechatPos();	
				$(wechatBtn).css('cursor', 'default');					
			});		
		}
	});	
		
/**************************************************************************/
/**************************************************************************/

/* Hide button area on Great Page banners when no button present */

/**************************************************************************/
/**************************************************************************/
	
	if (hasCopy($('.greatPageHeroButtons').find('a'))) {
		$('.greatPageHeroButtons').css('display', 'inline-block');
	} else {
		$('.greatPageHeroButtons').css('display', 'none');
	}
	
	if (!hasCopy($('#greatPageRotatorContent1').find('p'))) {
		$('.greatPageRotator').css('display', 'none');
	}	
	
/**************************************************************************/
/**************************************************************************/

/* Stacked heroes handler */

/**************************************************************************/
/**************************************************************************/

	if (($('.HeroItem.stacked').length || $('.HeroItem.homePageHeroContainer').length)) {	
		var heroes = $('.HeroItem');
		// Tosses it in .pageContentFull or .pageContent. If neither exists, it hides it. //
		var $heroesparent = heroes.parent("div");
		if ($('.pageContentFull').length > 0) {
				$heroesparent.prependTo($('.pageContentFull:first')).css({"position":"relative"});
		}
	}
	
	if ($('#generalContent').length) {	
		var heroes = $('.HeroItem');
		// Tosses it in .pageContentFull or .pageContent. If neither exists, it hides it. //
		var $heroesparent = heroes.parent("div");		
		if ($('.pageContentFull').length > 0) {
			$heroesparent.insertBefore($('.page-border')).css({"position":"relative"}).wrap('<div id="generalContentHero"></div>');
		}
	}
	
	$('.homePageHero').show();
	
/**************************************************************************/
/**************************************************************************/

/* Game hero handler */

/**************************************************************************/
/**************************************************************************/

/*
	if ($('.HeroItem.gameHomePageHeroContainer').length) {		
		var heroes = $('.HeroItem');
		// Tosses it in .pageContentFull or .pageContent. If neither exists, it hides it. //
		var $heroesparent = heroes.parent("div");
		$heroesparent.prependTo($('#s4-bodyContainer')).css({"position":"relative"});
		var gameHeroBg = $('.HeroItem.gameHomePageHeroContainer').find('.heroContent').find('img').attr('src');
		//var contentHeight = $('.HeroItem.gameHomePageHeroContainer').find('.heroContent').find('img').height();
		var contentHeight = "850px";
		//$('.HeroItem.gameHomePageHeroContainer').find('.heroContent').css('background-image', 'url(' + gameHeroBg + ')');
		$('.HeroItem.gameHomePageHeroContainer').find('.heroBg').css('background-image', 'url(' + gameHeroBg + ')');
		$('.HeroItem.gameHomePageHeroContainer').find('.heroContent').find('img').hide();		
		$('.HeroItem.gameHomePageHeroContainer').find('.heroContent').css('height', contentHeight);
		$('.HeroItem').after('<div style="clear: both;"></div>');
	}
*/		
/**************************************************************************/
/**************************************************************************/

/* Rotating heroes handler */

/**************************************************************************/
/**************************************************************************/

	if ($('.HeroItem').length && !$('.HeroItem.stacked, .HeroItem.homePageHeroContainer, .HeroItem.gameHomePageHeroContainer').length) {
	//if ($('.HeroItem').length) {
		var heroes = $('.HeroItem');
		heroes.hide();
		//tosses it in .pageContentFull or .pageContent. If neither exists, it hides it. 
		var $heroesparent = heroes.parent("div");
		if($('.pageContentFull').length > 0) {
			$heroesparent.prependTo($('div.pageContentFull:eq(0)')).css({"position":"relative"});
		} else if ($('.pageContent').length > 0){
			//if ($('.pageContent.gameHome').length > 0) {
				//$heroesparent.prependTo($('div.pageContent:eq(0)')).css({"position":"relative"});
		//	} else {
				$heroesparent.insertAfter($('h1')).css({"position":"relative"});
			//}
		} else {
			$heroesparent.hide();
		}
		showHero(0, 2000);
		if (heroes.length > 1) {
			var heronav = "<div id='heronav'>";
			heroes.each(function(index) {
				var i = 1 + index;
				heronav = heronav + "<div class='herobtn' data-hero='" + index + "'>" + i + "</div>";
			});
			heronav = heronav + "</div>";
			heroes.last().after(heronav);
			$('#heronav').after('<div style="clear: both;"></div>');
			$('#heronav').find('div').eq(0).addClass('active');
		} else {
			heroes.last().after("<div class='herobtnEmpty'></div>");
		}
		var windowHash = window.location.hash.replace('#','');
		if (windowHash != ""){
			var hashIndex = $(".HeroContent").index($("." + windowHash));
			$('.herobtn').removeClass("active");
			$('.herobtn').eq(hashIndex).addClass("active");
			showHero(hashIndex, 1);
		}
	}	
		
	$('.herobtn').click(function(){		
		stopVid();
		$('.herobtn').removeClass("active");
		$(this).addClass("active");
		var heroIndex = $(this).data('hero');
		if(!$('.HeroItem').eq(heroIndex).hasClass('active')){			
			showHero(heroIndex, 1000);
		}
	});
	
	function showHero(heroIndex, speed) {
		var activeHero = $('.HeroItem').eq(heroIndex);			
		$('.HeroItem').css({"position":"absolute"}).removeClass('active').fadeOut(speed);
		activeHero.css({"position":"relative"}).fadeIn(speed).addClass('active');
		/*
		if ($('.pageFooter').length ){
			$('.pageFooter').find('p.HeroDisclaimer').remove();
			var disclaimer = $('<p class="HeroDisclaimer"></p>');
			disclaimer.html(activeHero.find('div.HeroDisclaimer').html());
			disclaimer.appendTo('.pageFooter:eq(0)').show();
		}
		else if($('#legalLabel').length) {
			$('#legalLabel').find('p.HeroDisclaimer').remove();
			var disclaimer = $('<p class="HeroDisclaimer"></p>');
			disclaimer.html(activeHero.find('div.HeroDisclaimer').html());
			$(disclaimer).appendTo('#legalLabel').show();
			$('#legalLabel').show();
		}
		*/
	}
	z=0;
	/*
	$('.pageContent#game .HeroItem').each(function() {		
		if ($(this).find('h2').text().length < 1) {
			$(this).find('.gameHeroText').css('padding', '0');
		}		
	});	
	*/
	$('.hubPageHeroContainer').prependTo($('#s4-bodyContainer'));

	if ($('.hubPageHeroBackground')) {
		var hubHeroBg = $('.hubPageHeroBackground').find('img').attr('src');
		$('.hubPageHero').css('background-image', 'url(' + hubHeroBg + ')');
	}
		
/*		
	if ($('.homePageHeroBackground')) {
		var heroBg = $('.homePageHeroBackground').find('img').attr('src');
		$('.homePageHero').css('background-image', 'url(' + heroBg + ')');
	}
*/	
	if ($('.saLandingPageHeroBackground')) {
		var heroImg = $('.saLandingPageHeroBackground').find('img').attr('src');
		$('.saLandingPageHero').css('background-image', 'url(' + heroImg + ')');
	}
	

/**************************************************************************/
/**************************************************************************/

/* Manual Rotator handler */

/**************************************************************************/
/**************************************************************************/
		
	if($('.RotatorItem').length) {
		var rotators = $('.RotatorItem');
		rotators.hide();
		var $rotatorsparent = rotators.parent("div");
		$rotatorsparent.css({"position":"relative"});
		showRotator(0, 2000);
		if(rotators.length > 1)
		{
		var rotatornav = "<div id='rotatornav' style='clear: both'>";
		rotators.each(function(index){
			var i = 1 + index;
			rotatornav = rotatornav + "<div class='rotatorbtn' data-rotator='" + index + "'>" + i + "</div>";
		});
		rotatornav = rotatornav + "</div>";
		rotators.last().after(rotatornav);
		$('#rotatornav').after('<div style="clear: both;"></div>');
		$('#rotatornav').find('div').eq(0).addClass('active');
		}
	}
	
	$('.rotatorbtn').on('click', rotatefunction);
	function rotatefunction(){
		$('.rotatorbtn').removeClass("active");
		$(this).addClass("active");
		var rotatorIndex = $(this).data('rotator');
		if(!$('.RotatorItem').eq(rotatorIndex).hasClass('active')){
				var activeRotator = $('.RotatorItem').eq(rotatorIndex);
				var outgoingRotator = $('.RotatorItem.active');
				if(outgoingRotator.index() < rotatorIndex)
				{
					outgoingRotator.css({"position":"absolute"}).removeClass('active').fadeOut(1000);
					activeRotator.css({"position":"relative"}).fadeIn(1000).addClass('active');
	
				}
				else
				{					
					outgoingRotator.css({"position":"absolute","top":"0","left":"0"}).removeClass('active').fadeOut(1000);
					activeRotator.css({"position":"relative","top":"0","left":"0"}).fadeIn(1000).addClass('active');
					/*
					outgoingRotator.css({"position":"absolute","top":"0","left":"0"}).removeClass("active").fadeOut(1000, function(){
					activeRotator.addClass("active").css({"position":"relative"});
					activeRotator.fadeIn(1000); 
					});*/
				}
			}
			setTimeout(function(){$('.rotatorbtn').one('click', rotatefunction)}, 0);
	}
	function showRotator(rotatorIndex, speed) {
		$('.RotatorItem.active').removeClass('active');
		$('.RotatorItem').eq(rotatorIndex).fadeIn(speed).addClass('active').css({"position":"relative"});
	}

	
/**************************************************************************/
/**************************************************************************/

/* Page footer accordion */

/**************************************************************************/
/**************************************************************************/

	if(!$('div.ms-formfieldvaluecontainer').length) {
	
		// Footer copy for homepage heroes + features
							
		if ($('#homePageHeroMult').length) {
			var homeFooterCopy = '';
			$('.videoHeroVars').find('.heroFooter').each(function() {
				if (hasCopy($(this).find('p, ul, ol, a'))) {
					var thisFoot = $(this).html().replace(/[\u200B]/g,'');
					homeFooterCopy += thisFoot;
				}
			});		
			$('.pageFooter').html(homeFooterCopy);			
		}			
	
		footerAccordion = '<div class="footerAccordion"><a href="#" id="footerLink" class="footerOpen footerClosed">' + $('div#legalLabel').text() + '</a></div>';	
		
		// Check if pageFooter in authoring mode contains following tags and the scalable 'takeover' hero isn't being used 
		
		if ($('.pageFooter').find('p, ul, ol, a').length && !$('#homePageHero').find('.HeroItem.stacked').length) {
			$('.pageFooter').find('p').each(function() {
				if ($(this).html().replace(/\s|&nbsp;/g, '').length == 0) {
					$(this).remove();
				}
			});					
			$('.footerContainer').before(footerAccordion);
			$('.footer').css('margin-top', '0');
			$('.pageFooter').insertAfter('.footerAccordion').find('strong').contents().unwrap();			
		} else {
			$('.pageFooter').css('display', 'none');
		}
		$('a#footerLink').hover(function() {
		   $(this).removeClass('footerClosed').addClass('footerClosedOver');
		}, function() {
		   $(this).removeClass('footerClosedOver').addClass('footerClosed');
		}).toggle(function(e) {
			$('.pageFooter').slideDown('slow');		
			$(this).addClass('footerOpen');
		}, function() {	
			$('.pageFooter').slideUp('slow');
			$(this).removeClass('footerOpen');
		});	
	}	

/*************************************************************************/
/*************************************************************************/

/* Align images with corresponding list item on Corporate History page  */

/*************************************************************************/
/*************************************************************************/	
	
	if ($('.historyList')) {	
		$('.historyContent img').each(function(){						
			var parentItem = $(this).parent('li').prev('li');
			var parentText = $(this).parent('li').prev('li').text();						
			var newHTML = "<div class='historyImg'><div style='float:left'><image src='" + $(this).prop('src') + "'></div><div><ul><li>" + parentText + "</li></ul></div></div>"			
			$(parentItem).replaceWith(newHTML);			
			$(this).parent('li').css({display: 'none'});
		});
	}	
		
      $('h3.head').click(function(e){
        e.preventDefault();
	
			$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
		
        $(this).closest('li').find('.content').slideToggle().toggleClass('expanded');
		$(this).toggleClass('active');
      });

      $('h3#title-1').click(function(e){
        e.preventDefault();
        	$('#numbers .number').removeClass('active');
	     $('div#hotspot-1').toggleClass('active');      
      });
      
      $('h3#title-2').click(function(e){
        e.preventDefault();
        	$('#numbers .number').removeClass('active');
	     $('div#hotspot-2').toggleClass('active');      
      });
      
      $('h3#title-3').click(function(e){
        e.preventDefault();
        	$('#numbers .number').removeClass('active');
	     $('div#hotspot-3').toggleClass('active');      
      });
      
      $('h3#title-4').click(function(e){
        e.preventDefault();
        	$('#numbers .number').removeClass('active');
	     $('div#hotspot-4').toggleClass('active');      
      });
      
      $('h3#title-5').click(function(e){
        e.preventDefault();
        	$('#numbers .number').removeClass('active');
	     $('div#hotspot-5').toggleClass('active');      
      });
      
      $('h3#title-6').click(function(e){
        e.preventDefault();
        	$('#numbers .number').removeClass('active');
	     $('div#hotspot-6').toggleClass('active');      
      });
      
      $('div#hotspot-1').click(function(e){
        e.preventDefault();
        	$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
			$('#numbers .number').removeClass('active');
        $('#content-1').slideToggle();
        $(this).toggleClass('active');
        $('h3#title-1').toggleClass('active');
        
       });
       
       $('div#hotspot-2').click(function(e){
        e.preventDefault();
        	$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
			$('#numbers .number').removeClass('active');
        $('#content-2').slideToggle();
        $(this).toggleClass('active');
        $('h3#title-2').toggleClass('active');
        
       });
       
       $('div#hotspot-3').click(function(e){
        e.preventDefault();
        	$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
			$('#numbers .number').removeClass('active');
        $('#content-3').slideToggle();
        $(this).toggleClass('active');
        $('h3#title-3').toggleClass('active');
        
       });
       
       $('div#hotspot-4').click(function(e){
        e.preventDefault();
        	$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
			$('#numbers .number').removeClass('active');
        $('#content-4').slideToggle();
        $(this).toggleClass('active');
        $('h3#title-4').toggleClass('active');
        
       });
       
       $('div#hotspot-5').click(function(e){
        e.preventDefault();
        	$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
			$('#numbers .number').removeClass('active');
        $('#content-5').slideToggle();
        $(this).toggleClass('active');
        $('h3#title-5').toggleClass('active');
        
       });
       
       $('div#hotspot-6').click(function(e){
        e.preventDefault();
        	$('#accordion .content').slideUp();
			$('#accordion h3').removeClass('active');
			$('#numbers .number').removeClass('active');
        $('#content-6').slideToggle();
        $(this).toggleClass('active');
        $('h3#title-6').toggleClass('active');
        
       });
       
			

	
/*************************************************************************/
/*************************************************************************/	

/* Hide content area when it contains no content  */

/*************************************************************************/
/*************************************************************************/	
		
	$('.columnContainer').each(function(){
		if (!$(this).find('h1, h2, h3, p, span, ul, ol, a, img, iframe, table').length) {
			$(this).css('display', 'none');
		}	
		if ($(this).find('.landingPageThreeColumn').length && $(this).find('.landingPageThreeColumn').find('h3').text().length < 1 && !$(this).find('.landingPageThreeColumn').find('p, span, ul, ol, a, img, iframe, table').length) {
			$(this).css('display', 'none');
		}
		if ($(this).find('.landingPageThreeColumnLast').length && $(this).find('.landingPageThreeColumnLast').find('h3').text().length < 1 && !$(this).find('.landingPageThreeColumnLast').find('p, span, ul, ol, a, img, iframe, table').length) {
			$(this).css('display', 'none');
		}
		
		if ($(this).find('.twoColumnLeft .columnText').length && !$(this).find('.twoColumnLeft .columnText').find('h1, h2, h3, p, span, ul, ol, a, img, iframe, table').length) {
			$(this).css('display', 'none');
		}
	});
			
/*************************************************************************/
/*************************************************************************/	

/* Binds handlers to left nav for click and hover functionality */
/* on mobile devices */

/*************************************************************************/
/*************************************************************************/	
	
	$('#left-col li a.selected').bind('click', function(e) {
		e.preventDefault();
		clickSelected(this);												
	});	
	
	$('#left-col li').bind('mouseover', function(e) {
		e.preventDefault();
		hoverLeftNav(this);												
	});	
	   	
/*
$('#s4-workspace').scroll(function() {
	var scrollTop = $(this).scrollTop();
    $('.homePageHero').css('background-position', 'center ' + ((scrollTop * 0.25)) + 'px');	
});
*/



/*************************************************************************/
/*************************************************************************/	

/* Code that's called when viewport is resized */

/*************************************************************************/
/*************************************************************************/	

	$(window).resize(function() {	
	

		if ($('#homePageHero').find('.homePageHeroImage').length > 0) {
			var p = $('.homepageTiles');
			var position = p.position();		
			var z = $('.homePageHeroImage');
			var positionz = z.position();
			var windowWidth = $(window).width();
			if(windowWidth > 1000) {		
				$('.homePageHeroImage').css('left', '0');			
			} else if (windowWidth <= 1000 && windowWidth > 780) {			
				$('.homePageHeroImage').css('left', (position.left - 450) + 'px');
			} else if (windowWidth <= 780 && windowWidth > 640) {			
				$('.homePageHeroImage').css('left', (position.left - 550) + 'px');				
			} else if (windowWidth <= 640 && windowWidth > 450) {	
				$('.homePageHeroImage').css('left', '-590px');									
			} else if (windowWidth <= 450) {		
				$('.homePageHeroImage').css('left', '-690px');
			}					
		}

		
		//var ribbonHeight = $('#ms-designer-ribbon').height();								
		var ribbonHeight = 0;								
		var mastheadHeight = $('#masthead').outerHeight();

		var calculatedHeight = window.innerHeight - mastheadHeight - ribbonHeight;
				
		if ($('.pageWidth').css('width') == '3px') {
			var calculatedHeight = window.innerHeight - ribbonHeight;										
		} else {
			var calculatedHeight = window.innerHeight - mastheadHeight - ribbonHeight;
		}
		//$('#s4-workspace').attr('style', 'height:' + calculatedHeight + 'px !important;');
							
/*************************************************************************/
/*************************************************************************/	

/* Move current page to the top of the left nav for mobile devices */

/*************************************************************************/
/*************************************************************************/

		if ($('.pageWidth').css('width') == '3px') {		
			$('.container').prepend($('h2'));
			if ($('#left-col li.selected').length == 1) {
				$('#left-col li.selected').hide().clone(true).prependTo($('#left-col ul:first-child')).addClass('mobileTopItem').show();
			}	
		} else {
			$('#left-col li.selected.mobileTopItem').remove();
			$('#left-col li.selected').show();
		}
	
/*************************************************************************/
/*************************************************************************/	

/* Place hero images above hero text on mobile (Hero images were placed */
/* after text as workaround for disappearing image bug in SharePoint) */

/*************************************************************************/
/*************************************************************************/			




	});
	
});




$(window).load(function() {

	$('li.topNavLink').each(function(){
		$(this).click(function() {
			window.location.href = $(this).find('a').attr('href');
		});
	});	


	if ($('html').attr('lang').toLowerCase() == 'en-us') {
		$('li.labor').show();
	}
    	


	if ($('input#MSOAuthoringConsole_FormContext').val() == '1') {

/**************************************************************************/
/**************************************************************************/

/* Functions that run ONLY in authoring mode */

/**************************************************************************/
/**************************************************************************/

	$('#gameHomePage').find('.homepage_tile_large_r.twitterTile').css('height', 'auto');

/**************************************************************************/
/**************************************************************************/

/* Hide AddThis in authoring mode */

/**************************************************************************/
/**************************************************************************/
	
		$('.addthis-smartlayers, #at4-share, #at4-follow, #at4-whatsnext, #at4-thankyou').css('display', 'none');
	}
});	