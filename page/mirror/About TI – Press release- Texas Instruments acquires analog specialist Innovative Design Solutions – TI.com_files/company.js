// JavaScript Document

$(function() {
	var $window = $(window),
		$body = $('body');
		
	//media panel stuff start
	var rssUrl = 'http://e2e.ti.com/blogs_/b/thinkinnovate/rss?tags=',
		newsItemTemplate = '<li class="article"><div><a href="[link]">[title]</a></div></li>';
		$media = $('div.mediaBoxContainer:first');
	
	function loadMediaBoxFunctionality($mediaBox){
		var $mediaBoxBtns = $mediaBox.children('a.mediaBoxButtons'),
			$mediaSections = $mediaBox.children('div:lt(3)'),
			$mediaNews = $mediaBox.children('div.mediaBox-news:first'),
			$mediaVids = $mediaBox.children('div.mediaBox-videos:first'),
			$mediaImgs = $mediaBox.children('div.mediaBox-images:first');
		
		$mediaBoxBtns.click(function(e){
			var $this = $(this),
				thisHref = $this.attr('href');
			
			if ($this.hasClass('disabled')){
				e.preventDefault();
				return;
			}
			
			if (!($this.hasClass('active') && $this.hasClass('news'))) {
				e.preventDefault();
				$mediaBoxBtns.removeClass('active');
				$this.addClass('active');
				if ($this.hasClass('news')){
					$mediaNews.removeClass("off");
					$mediaVids.addClass("off");
					$mediaImgs.addClass("off");
				} else if ($this.hasClass('videos')){
					$mediaNews.addClass("off");
					$mediaVids.removeClass("off");
					$mediaImgs.addClass("off");
				} else if ($this.hasClass('photos')){
					$mediaNews.addClass("off");
					$mediaVids.addClass("off");
					$mediaImgs.removeClass("off");
				}
			} else if (thisHref == undefined || thisHref == '' || thisHref == '#') {
				e.preventDefault();
			}
		});
		
		//news feed
		loadNewsFeed($mediaNews);

	}

	function loadNewsFeed($newsBox) {
		var $newsList = $newsBox.find('ul.news:first'),
			newsFeed = $newsList.attr('rssFeed');
		if (newsFeed != undefined && newsFeed != '') {
			$newsList.RSSer({
				'template': newsItemTemplate,
				'rssURLs' : rssUrl+newsFeed+'&v=9',
				'maxItems' : 3,
				'callback' : function(){
					var $mainBox = $newsBox.parent(),
						$newsBtnTxt = $mainBox.find('a.mediaBoxButtons.news span:first');
					if ($mainBox.hasClass('popUpTop')) $mainBox = $('#popNews');
					
					var $emptyLinks = $newsList.find('a[href="[link]"]');
					$emptyLinks.each(function(){
						$(this).parent().parent().remove();
					});
					
					if ($newsList.is(':empty')) {
						$mainBox.hide();
						$('#popupContainer').find('ul.popUpMenu.divider').hide();
					}
				}
			});
		}
	}
	
	loadMediaBoxFunctionality($media);
	//media panel stuff end
	
	//nav stuff start
	var $nav = $('section.nav').children('ul'),
		cUrl = location.pathname;
	
	cUrl = cUrl.substr(cUrl.lastIndexOf('/')+1).toLowerCase();
	
	if (cUrl != undefined && cUrl != '' && cUrl != 'home.html') {
		var $cNav = $nav.find('a:last[href$="'+cUrl+'"]').parent();
		var $cParent = $cNav.parent().parent();
		$cNav.addClass('active');
		if ($cParent.prop('tagName') == 'LI') $cParent.addClass('expanded');
	}
	//nav stuff end
	
	//tab stuff
	
	var getParams = function(){
		var urlParams = {},
			urlQuery = window.location.search.substring(1),
			urlArr = urlQuery.split("&"),
			arrLen = urlArr.length;
		
		for (i=0;i<arrLen;i++) {
			tmp = urlArr[i].split("=");
			urlParams[tmp[0].toLowerCase()] = tmp[1];
		}
		
		return urlParams;
	};
	
	var $content = $('main.content'),
		$tab = $content.find('div.active-tab:first'),
		$tabLis = $tab.find('li'),
		$tabBtns = $tab.find('a'),
		$tabContent = $content.find('div.tab-content');
		
	$tabBtns.click(function(e){
		e.preventDefault();
		var $this = $(this),
			thisTarget = $this.attr('target-tab');
		$tabLis.removeClass('active');
		$tabContent.removeClass('active');
		$this.parent().addClass('active');
		$('#'+thisTarget).addClass('active');
	});
	
	var params = getParams(),
		paramsTab = params.tab;
	
	if ( paramsTab != undefined ) {
		var $activeTabBtn = $content.find('a[target-tab="'+paramsTab+'"]');
		if ($activeTabBtn.length == 1) $activeTabBtn.click();
	}
	
});

