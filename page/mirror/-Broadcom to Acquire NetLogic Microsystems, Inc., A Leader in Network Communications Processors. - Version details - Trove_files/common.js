sbdp = {};

//check if the page needs to be refreshed
refreshcookiename = 'refreshrequired-' + encodeURIComponent(window.location.pathname);
if ($.cookie(refreshcookiename) == 'true') {
	// do so immediately before any other processing takes place
	$.cookie(refreshcookiename, null);
	window.location.reload();
}

// disable caching so that get requests work properly in IE
$.ajaxSetup({cache: false});

// CLONE of common.js used for testing new incremental work load thingo
$(document).ready(function(){
  var form = $("#commentform");
  var target = form.find("input[name='target']").val();
  if (target !== null && target !== "") {
    var btn = $("#comments-cntnr a.actn-add");
    var bannedCommentTargets = ['r47431772', 'r30628882', 'r49026860', 'r25105266', 'r43630398', 'r39456330',
      'r48522099', 'r28487441', 'r32087937', 'r46854317', 'r43630173', 'r13258719', 'r43658993', 'r44598033',
      'r28488206', 'r43630387', 'r43659010', 'r43630170', 'r32746592', 'r51096982', 'r39379596', 'r51096989',
      'r28484843', 'r28487021', 'r43630182', 'r24811964', 'r28488460', 'r45675152', 'r43659023', 'r48522150',
      'r28488328', 'r28485344', 'r24794776', 'r28488276', 'r32770668', 'r38776015', 'r43630204', 'r43630221',
      'r43630227', 'r43630238', 'r43630406', 'r43630493', 'r43659015', 'r43659012', 'r45675164', 'r43658996',
      'r32748244', 'r43658991', 'r43659001', 'r32770626', 'r43630336', 'r43658990', 'r28487215', 'r28487601',
      'r43630407', 'r28485392', 'r28486677', 'r28487891', 'r28487914', 'r32008916', 'r41228756', 'r32580848',
      'r32791963', 'r42761609', 'r43630255', 'r43630176', 'r43630352', 'r43630479', 'r43658972', 'r43658985',
      'r43659013', 'r43658984', 'r43659021', 'r43659007', 'r30460139', 'r43630392', 'r28486532', 'r28486741',
      'r32770084', 'r28488441', 'r43658980', 'r31402165', 'r45675151', 'r39561969', 'r38932257', 'r43630229',
      'r28488095', 'r94333016', 'r173164933', 's23536148', 'r173164933', 's81050201'];
    for (var i = 0; i < bannedCommentTargets.length; i++) {
      if (bannedCommentTargets[i] == target) {
        form.remove();
        btn.html("Comments locked");
      }
    }
  }

	sbdp.initPage();
});

var troveReady = false ;	
var troveReadyRun = null;	// function ref will be stored here if dialog needed before page loads

sbdp.initPage = function() {
  troveReady = true ;
  if(document.URL.indexOf('#') < 0) {
	    if (document.getElementById("username")) {
	        //document.getElementById("username").focus();
	    } else if (document.getElementById("userid"))    {
	        // disabled to allow focus on signup page to open help text
	    	//document.getElementById("userid").focus(); 
	    } else {
	    	// disabled because it causes IE to jump to the top of the page
	    	//document.getElementById("header").focus(); // set focus to header div for skip links
	    	//$("#primarysearchbox").focus(); // set focus to the primary search box
	    }
  }
  sbdp.iniExternalLinks();
	sbdp.iniLinkStatistics();
  sbdp.iniRollover();
  sbdp.iniPushQueryToTabs();
  sbdp.ieRoundedButtons();
  sbdp.ieBreadcrumb();
  ie7FloatFix.init();
  if (troveReadyRun != null) troveReadyRun() ;  
  
  // Disabled
  // History
  // Since the hash event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  // $(window).trigger('hashchange');
  sbdp.triggerStateChange(null, null);
  
//  sbdp.checkNoteText();
};

// make external links open in a new tab or window
sbdp.iniExternalLinks = function() {
    $("a[href*=librariesaustraliaref]").each(function(index) {
    	this.target = "_blank";
    });
    $("a[href*=splitmergeguidelines]").each(function(index) {
    	this.target = "_blank";
    });
    if (location.href.match(/\/general\//gi)) {
        $("a[href*='http']:not([href*='" + location.hostname + "'])").each(function(index) {
        	this.target = "_blank";
        });
    }
};
sbdp.iniLinkStatistics = function() {
	var trackedLinks = $(".trackedLink");
	trackedLinks.each(function(_, e) {
		var link = $(e);
		var zone = link.attr("data-zone");
		var focus = link.attr("data-focus");
		link.mousedown(function() {
			try {
				$.ajax({
					url: "/linkClick",
					data: {
						zone: link.attr("data-zone"),
						focus: link.attr("data-focus"),
						href: link.attr("href")
					},
					cache: false,
					global: false
				});
			} catch(err) {
				// We really don't care
			} finally {
				return true;
			}
		});
	});
};

sbdp.iniBoxExpander = function(current) {

	if (current.attr("id") == "tamazons") {
		var errorDiv = current.children("div.error") ;
		if (errorDiv.size() > 0) {
			var errorEle = errorDiv.get(0) ;
			var errorTxt = $(errorEle).text() ;
			if (errorTxt == "The search failed, details are: Service Unavailable (503) - Service Unavailable") {
				current.hide() ;
				return ;
			}
		}
	}


	current.find('div.hdrresult .expander').click(function() {

		var $this = $(this);

		var box = $this.parents('.box') ; 
		var isPrimary = box.hasClass('primary') ;

		if  (isPrimary) {
			box.toggleClass('minimised') ;
			if (!box.hasClass("minimised")) {
				$.cookie('primaryBox' /* + box.attr('id')*/, 'normal', {path: '/'});
				$this.children("span").removeClass("minpanel").addClass("maxpanel").html("Open");
				$("#mainresults").css("width", "65%") ; // good luck finding this!
				$("#related").fadeIn(333) ;
				$("#maxlink").attr("title","maximise") ;
			} else {
				$.cookie('primaryBox' /* + box.attr('id')*/, 'maxed', {path: '/'});
				$this.children("span").removeClass("maxpanel").addClass("minpanel").html("Close");
				$("#related").fadeOut(333, function() {$("#mainresults").css("width", "100%") ; }) ;
				$("#maxlink").attr("title", "restore") ;
			}
		}
		else {
			box.toggleClass('minimised').children('ol, div#picresultcontainer').toggle();		
			if (box.hasClass("minimised")) {
				$.cookie('box' + box.attr('id'), 'hidden', {path: '/'});
				$this.children("span").removeClass("minpanel").addClass("maxpanel").html("Open");
			} else {
				$.cookie('box' + box.attr('id'), 'visible', {path: '/'});
				$this.children("span").removeClass("maxpanel").addClass("minpanel").html("Close");
			}
		}
		return false;
	});

	if (current.hasClass("primary")) {
		if ($.cookie('primaryBox' /* + current.attr('id')*/) == 'maxed') current.find('div.hdrresult .expander').click();
	}
	else {
		if ($.cookie('box' + current.attr('id')) == 'hidden') current.find('div.hdrresult .expander').click();
	}
}

sbdp.ORIGiniBoxExpander = function(current) {

	current.find('div.hdrresult .expander').click(function() {

		var $this = $(this);

		var box = $this.parents('.box:not(.primary)');
		box.toggleClass('minimised').children('ol, div#picresultcontainer').toggle();
		
		if (box.hasClass("minimised")) {
			$.cookie('box' + box.attr('id'), 'hidden');
			$this.children("span").removeClass("minpanel").addClass("maxpanel").html("Open");
		} else {
			$.cookie('box' + box.attr('id'), 'visible');
			$this.children("span").removeClass("maxpanel").addClass("minpanel").html("Close");
		}
		return false;
	});
		
	if ($.cookie('box' + current.attr('id')) == 'hidden') {
		current.find('div.hdrresult .expander').click();
	}
}

sbdp.iniFacetExpanders = function() {
	var $facetRef =  $('#facets > h3 > a, #facetPanel > h3 > a');
	
	$facetRef.click(function() {
		$(this).parent().toggleClass('expanded').toggleClass('collapsed').next().toggle();

		var facetSpan = $(this).children('span');
		var parentFacetExpanded = $(this).parent().hasClass('expanded');
				
		switch(parentFacetExpanded) {
		case true:
			facetSpan.text('Collapse ');
			break;
		case false:
			facetSpan.text('Expand ');
			break;
		default:
			// No other value
		}
			
		return false;
	});
	
	$('#facets > h3.collapsed, #facetPanel > h3.collapsed').each(function() {
		$(this).next().toggle();
	});
}

sbdp.iniFacetMore = function() {
	//var $facetDiv =  $('#facets > div');
	var $facetUl= $('#facets > div > ul, #facetPanel > div > ul');
	var $facetMore =  $facetUl.children('li.more');
	
	$facetMore.click(function() {
		var $hidden = $(this).parent().find('li:not(.showing, .more)');
		var amount = $hidden.length;
		
		var list = $hidden.slice().sort(function(a,b) {
			return a.className < b.className;
		});
		list.slice(0, amount < 13 ? amount : 10).addClass("showing").show();
		$hidden.filter(':has(a.selected)').show();
		
		if ($hidden.not(".showing").length == 0) {
			$(this).hide();
		}
		
		return false;
	});
	
	$('li:not(.more)', $facetUl).hide();
	$facetMore.click();
};


sbdp.iniEditionsTable = function() {
	// initialise the view selector
	$('#editions a[class*="view-"]').click(function() {
		var $this = $(this);

		window.sessionStorage.setItem("layout", $this.attr('id'));
		
		sbdp.loadEditionsTable();
		
		return false;
	});
	
	// initialise the sort selectors
	$('#editions th.sortable a').click(function() {
		var $this = $(this);
		var $parent = $this.parent();
		var $sort = $parent.parent().children(".sort");
		
		var asc;
		if ($parent[0] == $sort[0]) {
			asc = !$parent.hasClass("asc");
		} else {
			asc = $sort.hasClass("asc");
		}
		
		window.sessionStorage.setItem("sort", $this.attr('id'));
		window.sessionStorage.setItem("order", (asc ? "asc" : "desc"));
		
		sbdp.loadEditionsTable();
		
		return false;
	});
	
	sbdp.loadEditionsTable();
};

sbdp.iniEditionsTableMore = function() {
	$('#editionsmore').click(function() {
		
		window.sessionStorage.setItem(window.location.pathname + "-versioncount", 'all');
		
		sbdp.loadEditionsTable();
		
		return false;
	});
};

/* set the selected layout */
sbdp.setSelectedLayout = function(layout) {
	var id = layout == null ? "view-table" : layout;
	
	var $layoutbutton = $('#' + id);
	
	$layoutbutton.parent().children().removeClass('view-selected');
	$layoutbutton.addClass('view-selected');
	
	return id.replace(/.*-/, '');
};

/* set the selected sort order */
sbdp.setSelectedSort = function(sort, order) {
	var id = sort == null ? "sort-holdings" : sort;
	var dir = order == null ? "desc" : order;
	
	var $this = $('#' + id);
	var $parent = $this.parent();
	var $sort = $parent.parent().children(".sort");
	
	// remove the current sort styles
	$sort.removeClass("sort").removeClass("asc");
	$sort.find('span').remove();
	
	// set the new sort styles
	$parent.addClass("sort");
	if (dir == 'asc') $parent.addClass("asc");
	$this.append('<span class="offscreen">[Sorted ' + (dir == 'asc' ? 'ascending' : 'decending') + ']</span>');
	
	return id.replace(/.*-/, '') + ' ' + dir;
};

var editionTableActiveRequest = null;

sbdp.loadEditionsTable = function() {
	var layout = window.sessionStorage.getItem("layout");
	var sort = window.sessionStorage.getItem("sort");
	var order = window.sessionStorage.getItem("order");
	var more = window.sessionStorage.getItem(window.location.pathname + "-versioncount");
	
	layout = sbdp.setSelectedLayout(layout);
	sort = sbdp.setSelectedSort(sort, order);

	if (editionTableActiveRequest != null) {
		editionTableActiveRequest.abort();
	} else {
		$('#editions tbody').prepend('<tr><td colspan="6"><p style="text-align:center;"><img src="' + imageRef + '/throbber.gif" alt="" /> Loading editions. Please wait....</p></td></tr>');
		$('#editions tbody tr:first').hide().fadeIn(2000);
	}
	
	var u = rootRef + limitParms + "&maxSummaries=" + encodeURIComponent(more) + "&layout=" + encodeURIComponent(layout) + "&sort=" + encodeURIComponent(sort);
	editionTableActiveRequest = $.ajax({
		type: "GET",
		url: u,
		success: function(msg){
			editionTableActiveRequest = null;
			
			$('#editions tbody tr').remove() ;
			$('#editions tbody').append(msg) ;
			
			Tooltips.init();
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			editionTableActiveRequest = null;
			
			$('#editions tbody tr').remove() ;
			$('#editions tbody').prepend('<tr><td colspan="6"><p>There was an unexpected error encountered whilst getting edition information, textStatus='+textStatus+',errorThrown='+errorThrown+'</p></td></tr>');
		}
	});

	return false;
};

sbdp.iniEditionExpanders = function(redoing) {

	var $titleedtn = $('#editions a.titleedtn');

	if (redoing) $titleedtn.unbind("click") ; // dont want to assign click twice - otherwise, we'll open and close on a single click!

	$titleedtn.each(function() {
		var $this = $(this);
		
		// set the default value to closed
		historyDefaults[$this.attr('id')] = false;
		
		$this.click(function() {
			var id = $(this).attr('id');
			
			sbdp.triggerStateChange(id, !historyStatus[id]);
			
			/* disabled
			var current = $.bbq.getState(id, true);
			
			// record the state
			var state = {};
			state[id] = !current;
			$.bbq.pushState(state);
			*/
		    
		    return false;
		});
	});
	
};

sbdp.loadEdition = function(id) {
	var $this = $(id);
	$this.toggleClass('expanded');
	$this.children("span:first").toggleClass('arrowcollapse').toggleClass('arrowexpand');
//	$this.parents('tr').toggleClass('expandedtr').next().next().toggle();
//	$this.parents('tr').toggleClass('expandedtr').next().next().css("display", "block");
	var kf = $this.parents('tr').toggleClass('expandedtr').next().next() ;
	var kfcss = kf.css("display") ;
	if ((kfcss  == 'none') || (kfcss == '')) kf.show() ;
	else kf.hide() ;
//alert("kf1") ;
//alert("trnn="+$this.parents('tr').next().next().html()) ;

	var expandContainer = $this.parents('tr').next().next().children("td") ;
	var possibleExpandInstructionDiv = expandContainer.children("div") ;
	 //div id starts with needw000i111
//alert("possibleExpandInstructionDiv ="+possibleExpandInstructionDiv .html()) ;
	if (possibleExpandInstructionDiv.size() > 0) {
		var wINeeded = possibleExpandInstructionDiv.attr("id") ;
	//	alert("wINeeded ="+wINeeded ) ;
		if ((wINeeded != null) && (wINeeded.indexOf("needw") == 0)) {
			var s = wINeeded.substring(5) ;
			var i = s.indexOf("i") ;
		//	var c = s.indexOf("c") ;
			var work = s.substring(0,i) ;
			var item = s.substring(i+1) ;
		//	var island = s.substring(c+1) ;
		//	alert("work="+work+",item="+item) ;

			expandContainer.html("<b>Loading...</b>") ;
			var u = rootRef + "/work/" + work + "?versionId=" + item.replace(/-/g, " ") ; // + "&c=" + island;
//alert("u="+u) ;
			$.ajax({
				type: "GET",
				url: u,
				success: function(msg){
				//	alert(msg) ;
					expandContainer.html(msg) ;
					// $(window).trigger('hashchange');	// needed because the URL might have some state encoded in it
					sbdp.triggerStateChange(null, null);
					sbdp.scrollto('#available' + item.replace(/-/g, " "));
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					alert("There was an unexpected error encountered whilst getting version information, textStatus="+textStatus+",errorThrown="+errorThrown) ;
				}
			});
		}
	}
	
	return false;
};

sbdp.iniEditionsMore = function() {

	historyDefaults["emore"] = false;
	
	$('#work p#morew').click(function () {
		
		sbdp.triggerStateChange("emore", true);
		
		/* disabled
		// record the state
		var state = {};
		state["emore"] = true;
		$.bbq.pushState(state);
		*/
	    
	    return false;
	});

};

sbdp.loadEditions = function() {
	var $this = $('#work p#morew');
	var $editions = $this.parent().find("tr.pageable");

	var wMNeeded = $this.attr("id") ;
	if ((wMNeeded != null) && (wMNeeded .indexOf("morew") == 0)) {
		$this.html("<b>Loading...</b>") ;

		var u = rootRef + limitParms ;
//alert("u="+u) ;
		$.ajax({
			type: "GET",
			url: u,
			success: function(msg){
				//alert(msg) ;
				$('#editions tr:last').after(msg) ;
				sbdp.iniEditionExpanders(true);
				// $(window).trigger('hashchange');	// needed because the URL might have some state encoded in it
				sbdp.triggerStateChange(null, null);
				//expandContainer.html(msg) ;
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert("There was an unexpected error encountered whilst getting version information, textStatus="+textStatus+",errorThrown="+errorThrown) ;
			}
		});
	}
	$this.hide();
	
	return false;
};

var draggedObject ;
var originalDraggedTop = 0 ;
var originalDraggedLeft = 0 ;

sbdp.iniRollover = function() {
	/* no longer use (i) rollovers
	$('.box .moreinfo').hover(function() {
		$('.rollover').hide();
		$(this).parents('li').addClass('hover').find('.rollover').fadeIn(250);
	}, function() {
		$(this).parents('li').removeClass('hover').find('.rollover').hide();
	});*/

	$(".result li, .search .submit").hover(
		function() {
			$(this).addClass("hovered");
		}, 
		function(){
			$(this).removeClass("hovered");
		}
	);

	// make the grabber on primary results visible on hover

	//$(".mid-col .result li").hover(
	$("#mainresults .island ol li").hover(

		function() {
			$(this).find('.grabber').css("visibility", "visible") ; 
		}, 
		function(){
			$(this).find('.grabber').css("visibility", "hidden") ; 			
		}
	);

	// drag and drop search results - hopefully soon, we'll support dragging to our book-bag!

	$("li.draggableResult").draggable({
		handle: '.grabber',
		axis: 'y', opacity:0.9, zIndex:30, containment: '.mid-col .box',
		helper: 'clone',
	//	revert: false,			// we always fade out the clone
		revert: true,			// we always fade out the clone
		revertDuration: 1200,
		start: function(event, ui) {
			draggedObject = $(this) ;
		}
	}) ;

	$("li.draggableResult").droppable({
		accept: '.draggableResult', 
		hoverClass: 'ui-state-hover',
		drop: function(event, ui) {

			var dropTarget = this ;

			ui.helper.fadeOut(500, function() {  // make the helper clone go away


			if (shortUserid.length < 1) {
				
				var msg =	"<p>Merging of records is currently only available to registered users of Trove. " +
						  	"Please consider becoming a registered user by going to the <a href='/login'>signup page</a> - it is free and fast.</p>" ;
				
				$("#dialogMsg").html(msg) ;

				$("#dialog").dialog('option', 'title', '<h3>Please register</h3>') ;
				
				$("#dialog").dialog('option', 'buttons', {
										Ok: function() {
											$(this).dialog('close');
										}
									}) ;

				$("#dialog").dialog('open') ;	
				return;
			}
			//ui.helper.effect("puff", null, 1200, function() { 
			//alert("FO DONE") ;
			// get titles and authors
			var dragTitle = limitTo(draggedObject.find('dt a').html(), 250) ;
			var dragAuthor = limitTo(draggedObject.find('.creator').html(), 250) ;
			
			// and suid from the a href (assumed to be run of digits after /work/
			//var dragSuid = (draggedObject.find('a,.title').attr('href').match(/work\/\d+/) + "").substr(5) ;
			var dragSuid = (draggedObject.find('dt a').attr('href').match(/work\/\d+/) + "").substr(5) ;

			//var dropTitle = limitTo($(dropTarget).find('.text').html(), 250)  ;
			var dropTitle = limitTo($(dropTarget).find('dt a').html(), 250)  ;
			var dropAuthor = limitTo($(dropTarget).find('.creator').html(), 250)  ;
			var dropSuid = ($(dropTarget).find('dt a').attr('href').match(/work\/\d+/) + "").substr(5) ;

			var msg =   "<h3>Are you certain?</h3>" +
						"<p>Are you sure that you want to merge the work shown in this result</p>" +
						"<dl>" +
						"	<dt>Title:</dt>" +
						"	<dd>"+ dragTitle + "</dd>" +
						"	<dt>Author:</dt>" +
						"	<dd>" + dragAuthor + "</dd>" +
						"</dl>" +
						"<p>with this work</p>" +
						"<dl>" +
						"	<dt>Title:</dt>" +
						"	<dd>"+ dropTitle + "</dd>" +
						"	<dt>Author:</dt>" +
						"	<dd>" + dragAuthor + "</dd>" +
						"</dl>" +
						"<p>You should only proceed if you are <b>COMPLETELY CERTAIN</b> that these two results are really the " +
						"same <b><i>work</i></b>, and have been mis-catalogued or erroneously separated or not grouped.</p>" +
						"<p>For help and more information, <a href='http://help.nla.gov.au/trove/using-trove/creating-contributing/splitting-merging' target='_new'>view our guidelines " +
						"<i>(opens new window)</i></a> " +
						" on merging results together to become the same work.</p>" +			
						"<form action='#' id='frmMerge'>" +
						"	<fieldset>" +
						"		<label for='mergeNote'>Write a note here if you think it will help others understand why " +
						"you've decided to merge these works:</label>" +
						"		<textarea cols='45' rows='4' name='mergeNote' id='mergeNote'></textarea>" +
						"	</fieldset>" +
						"</form>" +
						"<p>Note:  Merged records will never be automatically separated, but may be separated manually. " +
						"<i>What has been joined by Man, let no Algorithm put asunder.</i></p>" ; 	

			$("#dialogMsg").html(msg) ;

			$("#dialog").dialog('option', 'title', '<h3>Merge these results together into a single work?</h3>') ;

			$("#dialog").dialog('option', 'buttons', {
				'I am certain! Merge these results!': function() {
					//draggedObject.fadeOut(1500, function() { draggedObject.remove() ; }) ;

					var myDialog = $(this) ;

					var note = $("#mergeNote").val() ;

					var description = "<merge>" +
							"<from suid='" + dragSuid + "'><title>" + xmlEncode(dragTitle) + 
							"</title><author>" + xmlEncode(dragAuthor) + "</author></from>" +
							"<to suid='" + dropSuid + "'><title>" + xmlEncode(dropTitle) + 
							"</title><author>" + xmlEncode(dropAuthor) + "</author></to>" +
							"</merge>" ;

					description = description.replace(/\u200B/g, "") ;	// remove zero width space, if any

//alert("Merged, with note " + note + " dropSuid =" + dropSuid ) ;

					$.post(rootRef + "/update", 
						{functionid: "merge", suMergeFrom: dragSuid, suMergeTo: dropSuid, note: note, description: description},
//					$.get(rootRef + "/update/merge", 
//						{suMergeFrom: dragSuid, suMergeTo: dropSuid, note: note, description: description},
						function(data) {
							myDialog.dialog('close') ;
							if (data.indexOf("Update Transaction Succeeded") >= 0) {

								/* alert("Your merge request has been received as is being processed.\n \n" +
									"It may take up to 5 minutes before the merged record is " +
									"visible in the system.") ;*/
								
								var msg =	"<p>Your merge request has been received as is being processed. " +
							  	"It may take up to 5 minutes before the merged record is visible in the system.</p>" ;
					
								$("#dialogMsg").html(msg) ;
			
								$("#dialog").dialog('option', 'title', '<h3>Merge successful</h3>') ;
								
								$("#dialog").dialog('option', 'buttons', {
									Ok: function() {
										$(this).dialog('close');
										// animated disappearence, then remove from the DOM
										draggedObject.effect("puff", null, 1500, function() { 
											draggedObject.remove() ;
										}) ;
									}
								}) ;
								$("#dialog").dialog('open') ;
							}
							else {	// alert("ERROR:\n \nThe merge failed - reason:\n \n" + data) ;
								var msg =	"<p>We're sorry but the merge request could not be completed for the following reason:</p> " + data;
								$("#dialogMsg").html(msg) ;
								$("#dialog").dialog('option', 'title', '<h3>Merge not successful</h3>') ;
								$("#dialog").dialog('option', 'buttons', {
									Ok: function() { $(this).dialog('close'); }
								}) ;	
								$("#dialog").dialog('open') ;
							}
					}) ;
				},
				Cancel: function() {
					$(this).dialog('close');
				}
			}) ;

			$("#dialog").dialog('open') ;	
			}) ;
	

//			$("#dialog").dialog('open') ;			

//alert("dragTitle ="+dragTitle +",dragAuthor ="+dragAuthor +",dropTitle ="+dropTitle +",dropAuthor="+dropAuthor);
//alert("dropped  " + "draggedObject.find('.text')="+draggedObject.find('.text')+
//",drt="+ dragTitle + " ,content="+draggedObject.html()) ;
		}
	}) ;

	$("#dialog").dialog({
		autoOpen: false,
		bgiframe: true,
		resizable: false,
	//	height:400,		auto
		width:500,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.5
		}
	}) ;
}

sbdp.iniVersionMore = function(versionDLid) {

	sbdp.iniOnlineMore(versionDLid) ;
	sbdp.iniShowFieldMore(versionDLid) ;
}

sbdp.iniOnlineMore = function(versionDLid) {
	$(versionDLid + ' dd.ddonlinerec li.more-link').click(function() {
		$(this).parent("ul").find("li").show();
		$(this).remove();
		
		return false;
	});
	
	$(versionDLid + ' dd.ddonlinerec ul').each(function(i) {
		var $li = $(this).find('li:not(.more-link)');
		if ($li.length > 6) {
			$li.slice(5).hide();
			$(this).find('li.more-link a').text($li.length-5 + " More...");	
		} else {
			$(this).find('li.more-link').remove();
		}
	});
}

sbdp.iniShowFieldMore = function(versionDLid) {
	$(versionDLid + ' dd.showfield-list.limited').each(function(){
		var limit = $(this).attr("limit");		
		if (!limit) return;

		limit = parseInt(limit);
		
		$(this).find('li.more-link').click(function() {
			$(this).parent("ul").find("li").show();
			$(this).remove();
			
			return false;
		});
		
		$(this).find('ul').each(function(i) {
			var $li = $(this).find('li:not(.more-link)');
			if ($li.length > limit+1) {				
				$li.slice(limit).hide();
				$(this).find('li.more-link a').text($li.length-limit + " More...");				
			} else {
				$(this).find('li.more-link').remove();
			}
		});
	});
};

/*
sbdp.iniGettingTab = function(island, workid, sitemid, worktitle) {
	var key = "tabs" + sitemid;
	var $tabs = $("#" + key);
	
	// the tab selector
	var tabselector = 'ul.tabheader > li > a';
	
	// determine what tabs are active
	var active = [];
	var activeclass = [];
	$tabs.find(tabselector + " > span").each(function(i, v) {
		var $v = $(v);
		active[i] = v.childNodes[0].nodeValue.match(/\d+/) > 0 || $v.hasClass("subscriptionlinks");
		activeclass[i] = $v.hasClass("active");
	});
	active[3] = $tabs.children("div:last").children("div").length;
	
	// determine what tabs are disabled and what the default is
	var defaulttabindex = null;
	var disabled = [];
	for (i = 0; i < active.length; i++) {
		if (!active[i]) {
			if (!activeclass[i]) {
				disabled[disabled.length] = i;
			}
		} else if (defaulttabindex == null) defaulttabindex = i;
	}

	
	historyDefaults[key] = defaulttabindex;
	
	$tabs.tabs({
		selected: null,
        collapsible: true,
        disabled: disabled,
        event: 'change',
        select: function(event, ui) {

        	if (ui.panel.id == "buy" + sitemid) {
        		if (!ui.panel.processed) {
//alert("OFF to bookshops with " + workid + "/item/" + sitemid + "/bookshops") ;
				var gotAny = false ;
				var processed = bookshoptotal;
				for (var bi = 0; bi < bookshoptotal; bi++) {
            		$.getJSON(workid + "/item/" + sitemid.replace("i", "") + "/bookshops/" + bi + window.location.search,
						function(data) {
//alert("DATA BACK"+ data) ;
            				
							var shopList = $("#fbuy" + sitemid) ;
							if (--processed == 0) $("#buysearching" + sitemid).hide();

							$.each(data, function(i,item) {
								if (!gotAny) {
									gotAny = true ;
									$("#buynotfound" + sitemid).hide();
									$("#buyfound" + sitemid).show();
									shopList.html("");
								}
	
								var bookindex = parseInt(item.pos) ;
								var $appendAfter = shopList.children("li").filter(function(index) {
									return $(this).data("pos") < bookindex ;
								});
								
								var contents = '\
										<dl>\
											<dt><a href="' + rootRef + '/goto?i=' + encodeURIComponent(island) + '&amp;w=' + encodeURIComponent(workid) + '&amp;d=' + encodeURIComponent(item.searchURL) + '">' + item.name + '</a> \
												<span class="buy-location">(' + item.location + ')</span>\
											</dt>\
											<dd class="buy-info">'
												+ (item.thumbnailURL ? '<img alt="' + worktitle + '" src="' + item.thumbnailURL + '"  class="buy-thumbnail ui-shdw" /> ': '') +
												'<div class="buy-desc"><p>' + item.notes + '</p></div>\
												<a href="' + rootRef + '/goto?i=' + encodeURIComponent(island) + '&amp;w=' + encodeURIComponent(workid) + '&amp;d=' + encodeURIComponent(item.searchURL) + '" class="ui-btn actn-get actn-size-n buy-actn">Buy now</a>\
											</dd>\
										</dl>';

								
								//var contents ="<li><a href=\"" + rootRef + "/goto?i=" + encodeURIComponent(island) + "&amp;w=" + encodeURIComponent(workid) + "&amp;d=" + encodeURIComponent(item.searchURL) + "\"><b>" + item.name + "</b></a><dl><dt>" + item.location + "</dt><dd>" + item.notes + "</dd><dd><a href=\"" + rootRef + "/goto?i=" + encodeURIComponent(island) + "&amp;w=" + encodeURIComponent(workid) + "&amp;d=" + encodeURIComponent(item.searchURL) + "\" style=\"font-weight:normal\">Buy now</a></dd>" + (item.thumbnailURL ? "<dd class=\"bookthumbnail\"><img src=\"" + item.thumbnailURL + "\" alt=\"" + worktitle + "\" /></dd>": "") + "</dl></li>"
								//var contents ="<li><a href=\"" + rootRef + "/goto?i=" + encodeURIComponent(island) + "&amp;w=" + encodeURIComponent(workid) + "&amp;d=" + encodeURIComponent(item.searchURL) + "\"><b>" + item.name + "</b></a><dl><dt>" + item.location + "</dt><dd>" + item.notes + "</dd><dd><a href=\"" + rootRef + "/goto?i=" + encodeURIComponent(island) + "&amp;w=" + encodeURIComponent(workid) + "&amp;d=" + encodeURIComponent(item.searchURL) + "\" style=\"font-weight:normal\">Buy now</a></dd>" + (item.thumbnailURL ? "<dd class=\"bookthumbnail\"><img src=\"" + item.thumbnailURL + "\" alt=\"\" /></dd>": "") + "</dl></li>"
								var $li = $(contents).data("pos", bookindex);
								if ($appendAfter.length > 0) {
									$li.insertAfter($appendAfter.eq($appendAfter.length - 1));
								} else {
									shopList.prepend($li);
								}
							});
							if (!gotAny && processed == 0) $("#buynotfound" + sitemid).show();
						}
            		);
				}
				ui.panel.processed = true;
	        	}
        	}
        }
    });
	
	// select the correct tab so that the AJAX request fires if necessary
	$tabs.tabs("select", defaulttabindex);
	
	// Define our own click handler for the tabs, overriding the default.
	$tabs.find(tabselector).click(function() {
		// Get the index of this tab.
		var idx = $(this).parent().prevAll().length;
		
		sbdp.triggerStateChange(key, idx);
		
		// removed recording state history in URL
		// var state = {};
    
		// Set the state!
		// state[key] = idx;
		// $.bbq.pushState(state);
		
		// return false;
	});
	
	var libKey = "alllibraries" + sitemid;
	var onlinesubKey = "onlinesub" + sitemid;
	
	function configureStateSelectors(selectorKey) {
		// determine the default state
		// maybe stored in a cookie
		var defaultState = $.cookie('selectedHoldingState');
		if (defaultState == null) {
			defaultState = "All";
		}
		// or the last selected location facet
		var lfacets = $.deparam.querystring()["l-location"];
		if (!isUndefined(lfacets)) {
			switch (typeof lfacets == "string" ? lfacets : lfacets[lfacets.length - 1]) {
			  case 'Australian Capital Territory': defaultState = 'ACT'; break;
			  case 'New South Wales': defaultState = 'NSW'; break;
			  case 'Northern Territory': defaultState = 'NT'; break;
			  case 'Queensland': defaultState = 'QLD'; break;
			  case 'South Australia': defaultState = 'SA'; break;
			  case 'Tasmania': defaultState = 'TAS'; break;
			  case 'Victoria': defaultState = 'VIC'; break;
			  case 'Western Australia': defaultState = 'WA'; break;
			}
		}
		
		historyDefaults[selectorKey] = "#" + defaultState + sitemid;
		historyStatus[selectorKey] = null;
	    var $selectorHeaders = $("#" + selectorKey + " > ul.statefilter > li > a");
		
	    $selectorHeaders.click(function () {
	    	var idx = $(this).attr("href").replace(/.*#/i, "#");
	    	
	    	sbdp.triggerStateChange(selectorKey, idx);
	    	
	    	// removed recording state history in URL
	    	// record the state
			// var state = {};
			// state[libKey] = idx;
			// $.bbq.pushState(state);
	        
	        return false;
	    });
	}
	configureStateSelectors(libKey);
	configureStateSelectors(onlinesubKey);
    
    // hide the online my libraries links
    $("#onlinemyliblink" + sitemid).click(function() {
    	// $(this).css({'display':'none'});
    	$("#onlinemylib" + sitemid).toggle();
    	return false;
    });
    $("#onlinemylib" + sitemid).css({'display':'none'});
    
    // hide the subscription links
    $("#onlinesublink" + sitemid).click(function() {
    	$(this).css({'display':'none'});
    	$("#onlinesub" + sitemid).css({'display':''});
    	if (supportsStorage()) { sessionStorage['onlinesublink' + sitemid] = "true"; }
    	return false;
    });
    $("#onlinesub" + sitemid).css({'display':'none'});
    if (supportsStorage() && sessionStorage['onlinesublink' + sitemid] == "true") { $("#onlinesublink" + sitemid).click(); }
    
    // add a more/less button to long lists
    $("#tabs" + sitemid + ' ul.workonline').each(function(i) {
    	moreless($(this), i, "links");
    });
    
    $("#tabs" + sitemid + ' ul.librarylist').each(function(i) {
    	moreless($(this), i, "libraries");
    });
    
    function moreless($this, i, label) {
		var limit = 5;
		var $li = $this.children('li');
		
		if ($li.length > limit + 1) {				
			$li.slice(limit).css({'display':'none'});

			var $more = $this.next('p.morecontainer').children('a');
			$more.click(function () {
				if ($li.filter(":hidden").length > 0) {
					$li.css({'display':''});
					$more.children("b").text(" fewer " + label);
				} else {
					$li.slice(limit).css({'display':'none'});
					$more.children("b").text($li.length - limit + " more " + label);
				}
				
				return false;
			});
			$more.children("b").text($li.length - limit + " more " + label);				
		} else {
			$this.next('p.morecontainer').css({'display':'none'});
		}	
    };
    
    // $(window).trigger('hashchange');	// needed to force the update immediately
    sbdp.processStateChange(libKey, historyDefaults[libKey]);
    sbdp.processStateChange(onlinesubKey, historyDefaults[onlinesubKey]);
};
*/

function moreless($this, i, label) {
	var limit = 11;
	var $li = $this.children('tr:not(:has(td.tr-more)), li:not(.more)');
	
	if ($li.length > limit + 1) {				
		$li.slice(limit).css({'display':'none'});

		var $more = $this.find('.more, .tr-more').find('a');
		$more.click(function () {
			if ($li.filter(function() { return $(this).css("display") == "none";}).length > 0) {
				$li.css({'display':''});
				$more.children("b").text(" fewer " + label);
			} else {
				$li.slice(limit).css({'display':'none'});
				$more.children("b").text($li.length - limit + " more " + label);
			}
			
			return false;
		});
		$more.children("b").text($li.length - limit + " more " + label);				
	} else {
		$this.find('.more, .tr-more').css({'display':'none'});
	}	
};

sbdp.configureStateSelectors = function (type, sitemid, selectorKey) {
	selectorKey = selectorKey + sitemid;
	
	// determine the default state
	// maybe stored in a cookie
	var defaultState = $.cookie('selectedHoldingState');
	if (defaultState == null) {
		defaultState = "All";
	}

	// or the last selected location facet
	var lfacets = $.deparam.querystring()["l-location"];
	if (!isUndefined(lfacets)) {
		switch (typeof lfacets == "string" ? lfacets : lfacets[lfacets.length - 1]) {
		  case 'Australian Capital Territory': defaultState = 'ACT'; break;
		  case 'New South Wales': defaultState = 'NSW'; break;
		  case 'Northern Territory': defaultState = 'NT'; break;
		  case 'Queensland': defaultState = 'QLD'; break;
		  case 'South Australia': defaultState = 'SA'; break;
		  case 'Tasmania': defaultState = 'TAS'; break;
		  case 'Victoria': defaultState = 'VIC'; break;
		  case 'Western Australia': defaultState = 'WA'; break;
		}
	}
	
	historyDefaults[selectorKey] = "#" + type + defaultState + sitemid;
	historyStatus[selectorKey] = null;
    var $selectorHeaders = $("#" + selectorKey + " > ul > li > a");
    
    $selectorHeaders.click(function () {
    	var idx = $(this).attr("href").replace(/.*#/i, "#");

    	sbdp.triggerStateChange(selectorKey, idx);
    	
    	/* removed recording state history in URL
    	// record the state
		var state = {};
		state[libKey] = idx;
		$.bbq.pushState(state);
		*/
        
        return false;
    });
};

sbdp.changeStateTab = function(id, idx) {

	// record the selected state
	$.cookie('selectedHoldingState', idx.replace(/#?([a-z]{3}([a-z]+?|000))i*[0-9]+/i, "$2"), {path: '/'});

	var $alllibraries = $("#" + id);

	// reset the tab label
	var $libtabs = $alllibraries.find("ul li");
	$libtabs.removeClass('selected').children("a").removeClass("ui-btn-grey").removeClass("btn-icon-invert");
	
	// highlight the selected tab label
	var $current = $libtabs.find("a[href*='" + idx + "']").addClass("ui-btn-grey").addClass("btn-icon-invert");
	$current.parent().addClass('selected');
	
	// show hide the actual content of the tab
	var $div = $alllibraries.children("div").css({'display':'none'});
	var $fdiv = $div.filter(idx);
	if ($fdiv.length > 0) {
		$fdiv.show();
	} else {
		$fdiv = $div.filter(":first").css({'display':''});
		idx = "All";
	}
	
	// show a full or partial list?
	var $libtabsSelected = $libtabs.filter(".selected");
	if ($libtabsSelected.length) {
		$fdiv.find("li").css({'display':''});
		$fdiv.find('p.morecontainer a b').text(" fewer libraries");
	}
	
};

sbdp.configureHoldingsTableSort = function(selector) {
	$.tablesorter.addWidget({  
	    id: "sortarrows", 
	    format: function(table) {
	    	// remove the sort labels and arrows
	    	$("thead tr th a span", table).remove();
	    	
	    	// add the sort labels and arrows
	    	$("thead tr th.sort.asc a", table).append('<span class="offscreen">[Sorted ascending]</span>');
	    	$("thead tr th.sort.desc a", table).append('<span class="offscreen">[Sorted descending]</span>');
	    } 
	});
	
	$.tablesorter.addWidget({  
	    id: "moreless", 
	    format: function(table) {
	    	$tbody = $('tbody', table);
	    	
	    	// remove the more less link
	    	$tbody.children('tr').css({'display':''});
	    	$tbody.find("tr:has(td.tr-more)").remove();
	    	$tbody.append('<tr><td colspan="5" class="tr-more"><a href="#">Show <b>0 more ${libsLabel}</b>...</a></td></tr>');
	    	
	    	moreless($tbody, 0, "libraries");
	    } 
	});
	
	$(selector).tablesorter({
		cssAsc:   "sort desc",
		cssDesc:  "sort asc",
		sortList: [[0,0]],
		widgets:  ['sortarrows','moreless'] 
	});
};

var buyprocessed = false;

sbdp.configureBuyResults = function(island, workid, sitemid, worktitle, bookshoptotal) {
	
	if (!buyprocessed) {
		
//alert("OFF to bookshops with " + workid + "/item/" + sitemid + "/bookshops") ;
		var gotAny = false ;
		var processed = bookshoptotal;
		
		for (var bi = 0; bi < bookshoptotal; bi++) {
    		$.getJSON(workid + "/item/" + sitemid.replace("i", "") + "/bookshops/" + bi + window.location.search,
				function(data) {
// alert("DATA BACK"+ data) ;
    				
					var shopList = $("#fbuy" + sitemid) ;
					if (--processed == 0) $("#buysearching" + sitemid).hide();

					$.each(data, function(i,item) {
						if (!gotAny) {
							gotAny = true ;
							$("#buynotfound" + sitemid).hide();
							$("#buyfound" + sitemid).show();
							shopList.html("");
						}

						var bookindex = parseInt(item.pos) ;
						var $appendAfter = shopList.children("li").filter(function(index) {
							return $(this).data("pos") < bookindex ;
						});

						var contents = '\
								<li><dl>\
									<dt><a href="' + rootRef + '/goto?i=' + encodeURIComponent(island) + '&amp;w=' + encodeURIComponent(workid) + '&amp;d=' + encodeURIComponent(item.searchURL) + '&amp;s=' + encodeURIComponent(item.signature) + '" onmouseover="sbdp.externallink(this);">' + item.name + '</a> \
										<span class="buy-location">(' + item.location + ')</span>\
									</dt>\
									<dd class="buy-info">'
										+ (item.thumbnailURL ? '<img alt="' + worktitle + '" src="' + item.thumbnailURL + '"  class="hide buy-thumbnail ui-shdw" onload="$(this).removeClass(\'hide\');"/> ': '') +
										'<div class="inline-help-text"><p>' + item.notes + '</p></div>\
										<a href="' + rootRef + '/goto?i=' + encodeURIComponent(island) + '&amp;w=' + encodeURIComponent(workid) + '&amp;d=' + encodeURIComponent(item.searchURL) + '&amp;s=' + encodeURIComponent(item.signature) + '" class="ui-btn ui-btn-green">Buy now</a>\
									</dd>\
								</dl></li>';
						
						var $li = $(contents).data("pos", bookindex);
						if ($appendAfter.length > 0) {
							$li.insertAfter($appendAfter.eq($appendAfter.length - 1));
						} else {
							shopList.prepend($li);
						}
					});
					if (!gotAny && processed == 0) $("#buynotfound" + sitemid).show();
				}
    		);
		}
		
	}
		
	buyprocessed = true;

};

sbdp.iniBiographyExpanders = function() {
	var speed = 0;
	
	var showhide = function() {
		$this = $(this);
		
		$this.prev("span").toggleClass('ui-icon-triangle-1-s').toggleClass('ui-icon-triangle-1-e');
		var $h3 = $this.parent("h3");
		$h3.toggleClass("ui-state-active").toggleClass("ui-corner-top").toggleClass("ui-state-focus").toggleClass("ui-state-default").toggleClass("ui-corner-all");
		$h3.next("div.biocontent").slideToggle(speed);
	};
	
	var $a = $('#bio > h3 > a');
	
	$a.prev("span").click(function() {
		$(this).next("a").click();
	});
	$a.toggle(showhide,showhide);
	$a.filter(":not(:first)").click();
	
	speed = "fast";
};

/**
function gbsCallback(booksInfo) {	// defunct

	for (isbn in booksInfo) {
		var bookInfo = booksInfo[isbn];
		if (bookInfo) {
			if (bookInfo.preview == 'full' || bookInfo.preview == 'partial') {
//alert(isbn) ;
			
				var element = document.getElementById(isbn) ;
				element.href = bookInfo.preview_url ;
				element.innerHTML = "<img alt=\"Read online at Google Books\" src=\"" + imageRef + "/gbs/preview.gif\"/>" + 
									"<span>Read online at Google Books</span>"; 
				element.style.display = 'inline' ;
			}
		}
	}
}
**/

var booksInfo;

function gbsCallback(gbsBooksInfo) {
	booksInfo = gbsBooksInfo;
}

function gbsCallbackMultiIds(booksInfo) {

//alert("back " + booksInfo) ;
//var info="" ;
	for (bookId in booksInfo) {
		var bookInfo = booksInfo[bookId];
		if (bookInfo) {
			if (bookInfo.preview == 'full' || bookInfo.preview == 'partial') {
//info+="\n" + bookId + " type="+bookInfo.preview ;
//alert(bookId) ;
				// find elements waiting for info on google book availability

				$("a.gbspreview:hidden:contains('" + bookId + "')").each(function() {
//info +=" FOUND" ;
					this.href = rootRef + "/goto?i=x&w=x&sr=" + encodeURIComponent("4bfgOYC96uZBpr7xeQRZOWLsi5nAxD8b7ZcaRA4je5E=") + "&d=" + encodeURIComponent(bookInfo.preview_url) ;
					this.innerHTML = "<img alt=\"Preview online at Google Books\" src=\"" + imageRef + "/gbs/preview.gif\"/>" + 
									 "<span>Preview online at Google Books</span>"; 
					this.style.display = 'inline' ;
				}) ;
			}
		}
	}
//alert(info) ;
}

function gbsCallbackAnyISBN(booksInfo) {	// one day, we may show different links for different editions?

	var found = false;
	for (isbn in booksInfo) {
		var bookInfo = booksInfo[isbn];
		if (bookInfo) {
			if (bookInfo.preview == 'full' || bookInfo.preview == 'partial') {
				var element = document.getElementById("gbsMainLink") ;	// static, coz it is the main at top
				element.href = rootRef + "/goto?i=x&w=x&sr=" + encodeURIComponent("4bfgOYC96uZBpr7xeQRZOWLsi5nAxD8b7ZcaRA4je5E=") + "&d=" + encodeURIComponent(bookInfo.preview_url) ;
				element.innerHTML = "<img alt=\"Preview online at Google Books\" src=\"" + imageRef + "/gbs/preview.gif\"/>Preview online at Google Books"; 
				element.style.display = 'inline' ;
				found = true;
				break ;							// only bother with 1st
			}
		}
	}
	
	var $li = $("#gbsMainLink").parent("li");
	if (found) {
		var $ul = $li.parent("ul");
		var id = $ul.parent("div").attr("id");
		var $a = $("a[href*='#" + id + "']");
		
		$a.children("span").text("(" + $ul.children("li").length + ")");
		
		// remove the no links message
		$ul.nextAll("p.nolinks").remove();
	} else {
		var $ul = $li.parent();
		
		$li.remove();
		if ($ul.children("li:not(.more)").length == 0) {
			$ul.prev("h2").remove();
			$ul.remove();
		}
	}
}


sbdp.iniRelatedItemSwitch = function() {

	if ($.cookie('relatedItems')=="hide") {
		var parentContainer = $(".right-col:first");
		$(".related-items").css("height", parentContainer.height()+"px");		
		parentContainer.addClass("benched");
		$(".wrapper .mid-col").addClass("expanded");
	}
	$("#relatedItemSwitch").hover(
		function() {
			$(this).addClass("hovered");
		},
		function() {
			$(this).removeClass("hovered");
		}
	);
	$("#relatedItemSwitch a").click(function() {
		var parentContainer = $(this).parents(".right-col:first");
		if (parentContainer.hasClass("benched")) {
			$.cookie('relatedItems', "show");
			parentContainer.removeClass("benched");
			$(".related-items").css("height","");
			$(".wrapper .mid-col").removeClass("expanded");
			$(".related-items .box").css("display","block");
			setTimeout('$(".related-items").css("position","relative");',0);
		} else {
			$.cookie('relatedItems', "hide");
			$(".related-items").css("height", parentContainer.height()+"px");			
			parentContainer.addClass("benched");
			$(".wrapper .mid-col").addClass("expanded");			
		}
	});
};

/* Advanced search functions */
var advqtype = new Object();
var advlibraries = new Array() ;
var advlibrarieshash = new Object();
var advlibrariesfromcookie = new Object() ;

iniAdvLoadAndRestoreLocations = function() {};

iniAdvancedSearchForm = function() {
	
	// limit the query type options
	$('#terms select.q-type').each(function() {
		var $this = $(this);
		advqtype[$this.attr('id')] = $this.html();
	});
	$('#terms select.q-field').click();
	
	// restore the last search performed
	var sadvsearchform = $.cookie("advancedsearchform");
	if (sadvsearchform != null) {
		var formvals = $.deparam(sadvsearchform);
		for (key in formvals) {
			if (key.match(/q-slocation.*/i)) {
				advlibrariesfromcookie[formvals[key]] = formvals[key];
			} else {
				var $field = $('#' + key);
				if ($field.length > 0) {
					if ($field.is("input[type='checkbox']"))
						$field.attr("checked", formvals[key] == 'true');
					else {
						$field.val(formvals[key]);
						$field.click();
					}
				}
			}
		}
	}
	
	// load and restore locations
	iniAdvLoadAndRestoreLocations();
	
	// record the state of the form in a cookie when the search button is pressed
	$('#advsearchbtn, #advsearchbtn1').click(function () {
		
	  var advsearchform = new Object();
	  $('#advsrchfrm').find(':input').each(function() {
		  var $this = $(this);
		  if ($this.is("button"))
			  ; // do nothing
		  else if ($this.is("input[type='checkbox']")) {
			  var id = $this.attr("id");
			  
			  if (!id.match(/slibrary.*/i))
				  advsearchform[id] = $this.attr("checked");
		  } else {
			  advsearchform[$this.attr("id")] = $this.val();
		  }
	  });
	  $.cookie("advancedsearchform", $.param(advsearchform));
	  
	});
};

function advSearchLimitSelect($field, $type) {

	var fieldval = $field.val();
	if ($field.data('fieldval') != fieldval) {
		$field.data('fieldval', fieldval);
		
		$type.html(advqtype[$type.attr('id')]);
		if (fieldval == 'publictag:') {
			$type.children("option:not([value^='tag'])").remove();
		} else {
			$type.children("option[value^='tag']").remove();
		}
		if ($type.children("option:visible:selected").length < 1) {
			$type.children("option:visible:first").attr("selected", "selected");
		}
	}
};

function walkDownLibrary(lib, libaction) {
	libaction(lib);
	
	var childlibs = lib.childlibs;
	for (var j = 0; j < childlibs.length; j++) {
		var childlib = childlibs[j];
		
		walkDownLibrary(childlib, libaction);
	}
}

function walkUpLibrary(lib, libaction) {
	if (lib.parentnuc != null) {
		var parentlib = advlibrarieshash[lib.parentnuc];
		if (parentlib != null) {
			libaction(parentlib);
			
			walkUpLibrary(parentlib, libaction);
		}
	}
}

function advGetLibraryList(showAction, selectedLibraries) {
	
	if (isUndefined(selectedLibraries)) {
		selectedLibraries = advlibrariesfromcookie;
	}

	$.getJSON(rootRef + "/general/libraries",
		function(data) {
			advlibraries = data.libraryList ;
			
			for (var i = 0; i < advlibraries.length; i++) {
				var lib = advlibraries[i];
				
				lib.primaryparent = function(isAdvSearch) {
					if (this.holdings > 0 || this.subs > 0) return this;
					
					var primary = this;
					
					var displaycount = 0;
					var childlibs = primary.childlibs;
					for (var j = 0; j < childlibs.length; j++) {
						var childlib = childlibs[j];
						if (isAdvSearch && childlib.advsearch != "hide" || !isAdvSearch && childlib.mylibraries != "hide") {
							primary = childlib;
							displaycount++;
						}
					}
					
					return displaycount == 1 ? primary : this;
				};
				
				walkDownLibrary(lib, function(alib) {
					advlibrarieshash[alib.nuc] = alib;
					alib.alreadySelected = selectedLibraries[alib.nuc] != null;
					
					alib.hasDisplayableChildren = function(isAdvSearch) {
						var childlibs = this.childlibs;
						for (var j = 0; j < childlibs.length; j++) {
							var childlib = childlibs[j];
							if (isAdvSearch && childlib.advsearch != "hide" || !isAdvSearch && childlib.mylibraries != "hide") {
								return true;
							}
						}
						
						return false;
					};
				});
				
				walkDownLibrary(lib, function(alib) {
					alib.advsearch = alib.tholdings > 0 ? "show" : "hide";
					alib.mylibraries = alib.tholdings > 0 || alib.tsubs > 0 ? "show" : "hide";
					
					alib.holdings = 0;
					alib.subs = 0;
					var childlibs = alib.childlibs;
					for (var j = 0; j < childlibs.length; j++) {
						var childlib = childlibs[j];
						if (childlib.nuc.match(/[0-9]+/)) {
							childlib.alreadySelected = alib.alreadySelected;
						}
						alib.holdings += childlib.tholdings;
						alib.subs += childlib.tsubs;
					}
					alib.holdings = alib.tholdings - alib.holdings;
					alib.subs = alib.tsubs - alib.subs;
					
					walkUpLibrary(alib, function(blib) {
						var isnuc = !alib.nuc.match(/[0-9]+/);
						alib.advsearch = alib.advsearch == "hide" && (blib.holdings > 0 || !isnuc) ? "disable" : alib.advsearch;
						alib.mylibraries = alib.mylibraries == "hide" && (blib.holdings > 0 || blib.subs > 0 || !isnuc) ? "disable" : alib.mylibraries;
						
						if (!isnuc) {
							var selected = true;
							for (var j = 0; j < blib.childlibs.length; j++) {
								selected &= blib.childlibs[j].alreadySelected;
							}
							blib.alreadySelected = selected;
						}
					});
				});
			}
			
			if (!isUndefined(showAction)) {
				showAction();
			} else {
				advShowSelectedLocations();
			}
	}) ;

}

function searchMatchingLibs(showAction) {
	var isAdvSearch = false;
	
	if (isUndefined(showAction)) {
		showAction = "advShowSelectedLocations";
		isAdvSearch = true;
	}

	var st = document.getElementById('q-location1').value ;			
	var words = st.toLowerCase().split(' ') ;

	var s = "" ;

	var alreadyprocessed = new Object();
	var matchcount = 0;
	for (var i = 0; i < advlibraries.length; i++) {
		var lib = advlibraries[i];
		
		if (alreadyprocessed[lib.nuc] != null) continue ;
		
		function getfullname(lib) {
			alreadyprocessed[lib.nuc] = lib;
			var n = lib.nuc.toLowerCase() + " " + lib.name.toLowerCase() ;
			for (var j=0;j<lib.childlibs.length;j++) {
				alreadyprocessed[lib.childlibs[j].nuc] = lib.childlibs[j];
				n += " " + getfullname(lib.childlibs[j]) ;
			}
			
			return n;
		}
		
		match = isAdvSearch && lib.advsearch != "hide" || !isAdvSearch && lib.mylibraries != "hide" ;
		var n = getfullname(lib);
		for (var k=0;k<words.length;k++) {
			if (n.indexOf(words[k]) < 0) {
				match = false ;
				break ;
			}
		}
		if (!match) continue ;
		
		matchcount++;
		
		function displaylibrary(i, lib, child) {
			var out = "";
			var isnuc = !lib.nuc.match(/[0-9]+/);
			
			if (isAdvSearch && lib.advsearch != "hide" || !isAdvSearch && lib.mylibraries != "hide") {
				var disabled = isAdvSearch && lib.advsearch == "disable" || !isAdvSearch && lib.mylibraries == "disable";
			
	  			out += "<li class='lib'><input type='checkbox' name='nuc' id='slibrary" + i + "' " + 
	  			(lib.alreadySelected ? " checked='checked' " : " ") +
	  			((child && disabled) ? " disabled='disabled' " : " ") +
				"value='" + lib.nuc + "' onClick='advSelectLocation(this, " + showAction + ");' /><label for='slibrary" + i + "'> "  +
				(child ? lib.sname : lib.fname) + (isnuc ? " [" + lib.nuc + "]" : "") + "</label>";
	  			out += showRestriction(lib.ap);
	
				if (lib.hasDisplayableChildren(isAdvSearch)) {
					out += "<br/><span class=\"including\">including:</span><ul>";
					for (var j=0;j<lib.childlibs.length;j++) {
			      		var blib = advlibrarieshash[lib.childlibs[j].nuc];
			      		if (isUndefined(blib)) blib = lib.childlibs[j];
			      		out += displaylibrary(i + "-" + j, blib, true);
					}
					out += "</ul>";
				}
				out += "</li>";
			
			}
			
			return out;
		}
		
		s += displaylibrary(i, lib.primaryparent(isAdvSearch), false);
	}

	var result = new Object;
	result.s = s;
	result.matchcount = matchcount;
	
	return result;
}

function advMatchingLibs() {
	var result = searchMatchingLibs();
	
	var s = result.s;
	if (s == "") s = '<legend>Select locations</legend>\
					  <h3 class="red">Sorry, we couldn\'t find any matching libraries or locations</h3>\
					  <p>Please enter a different search and try again.</p>' ;
	else s = 
		'<legend>Select locations</legend>\
		 <h3 class="green">' + result.matchcount + ' Matching locations</h3>\
		 <p>Select the locations you wish to limit your search to from the list below.</p>\
		 <p>Select: <a href="" onClick="advselectall(true); return false;">All</a> \
		 <a href="" onClick="advselectall(false); return false;">None</a></p>\
		 <ul id="searchresultlibraries">' + s + '</ul>';

	document.getElementById("locationselection").innerHTML = s ;
	return false ;
}

function advselectall(all) {
	var boxes = all ? $("#searchresultlibraries > li> input:not(:checked)").slice(0, 10) : $("#selectedlibs > li > a");
	boxes.click();
	
	return false;
};

function showRestriction(restriction) {
	if (restriction == "May not be open to the public")
		return "<span class='orange'>[May not be open to the public]</span>";
	else if (restriction == "Not open to the public")
		return "<span class='red'>[" + restriction + "]</span>";
	else if (restriction != "")
		return "<span class='green'>[" + restriction + "]</span>";
	return "";
}

function advCheckEnter(ev, action) {
					
	var myEvent = ev ? ev : window.event ; 			
	var cc = myEvent.keyCode ;					
	if (cc == 13) { action() ; return false ;	 }								
	return true ;						
}

function advSelectLocation(lib, showAction) {
	var $selectedLib = $(lib);
	var $selectedParent = $selectedLib.parent();
	
	// select or deselect current plus children
	var $libs = $selectedParent.find("input");
	$libs.attr('checked', $selectedLib.attr('checked'));
	
	// deselect parent where any children are deselected and parent is not a nuc
	$selectedParent.parents("li.lib").each(function() {
		var $pLI = $(this);
		var $plib = $pLI.children("input");
		
		if ($plib.val().match(/[0-9]+/)) {
			$libs = $libs.add($plib);
			var $cUL = $pLI.children("ul");
			if ($cUL.find("input:checked").length == $cUL.find("input").length) {
				$plib.attr("checked", "checked");
			} else {
				$plib.attr("checked", "");
			}
		}
	});
	
	// process the libraries that have to be changed
	$libs.each(function () {
		var $lib = $(this);
		
		var lib = advlibrarieshash[$lib.val()];
		lib.alreadySelected = $lib.attr('checked');
	});
	
	if (!isUndefined(showAction)) {
		showAction();
	} else {
		advShowSelectedLocations();
	}
	
	return false;
}

function advRemoveLocation(a, nuc, showAction, searchAction) {
	var $a = $(a);
	
	var lib = advlibrarieshash[nuc];
	lib.alreadySelected = false;
	
	walkDownLibrary(lib, function(alib) {
		if (alib.nuc.match(/[0-9]+/)) {
			alib.alreadySelected = advlibrarieshash[alib.parentnuc] != null ? advlibrarieshash[alib.parentnuc].alreadySelected : false;
		}
	});
	walkUpLibrary(lib, function(alib) {
		if (alib.nuc.match(/[0-9]+/)) {
			alib.alreadySelected = false;
		}
	});
	
	if (!isUndefined(showAction)) {
		showAction();
	} else {
		advShowSelectedLocations();
	}
	
	if ($("#searchresultlibraries").length > 0) {
		if (!isUndefined(showAction)) {
			searchAction();
		} else {
			advMatchingLibs();
		}
	}
	
	return false;
}

function advShowSelectedLocations() {
	var s = "" ;
	
	var count = 0;
	for (var i = 0; i < advlibraries.length; i++) {
		var lib = advlibraries[i];
		
		walkDownLibrary(lib, function(alib) {
			if (!alib.alreadySelected || alib.nuc.match(/[0-9]+/) || alib.holdings == 0) return ;
			
			var nuc = alib.nuc;

			count++;
			s += '\
				<li>' + alib.fname + ' [' + nuc + '] \
				' + showRestriction(alib.ap) + '\
				<a onclick="return  advRemoveLocation(this, \'' + nuc + '\');" title="Remove location" class="tagdelete" href="#"></a>\
				<input type="hidden" id="q-slocation' + nuc + '" name="q-location" value="' + nuc + '" />\
				</li>';
		});
	}

	if (s == "") {
		$('#nolocationsselected').show();
		$('#somelocationsselected').hide();
		$('#selectedlibs').html("").hide();
	} else { 
		$('#nolocationsselected').hide();
		$('#somelocationsselected').show().children("strong").html(count == 1 ? ("This " + count + " library") : ("These " + count + " libraries"));
		$('#selectedlibs').html(s).show();
	}
	
	return false;
}

/* end advanced search functions */

/* start my libraries functions */

function mylibsselectall(all) {
	var boxes = all ? $("#searchresultlibraries > li> input:not(:checked)").slice(0, 10) : $("#myselectedlibs > li > a");
	boxes.click();
	
	return false;
};

function mySelectedLibraries() {
	var nucs = "" ;
	var s = "" ;

	var count = 0;
	for (var i = 0; i < advlibraries.length; i++) {
		var lib = advlibraries[i];

		walkDownLibrary(lib, function(alib) {
			if (!alib.alreadySelected || alib.nuc.match(/[0-9]+/) || (alib.holdings == 0 && alib.subs == 0)) return ;

				var nuc = alib.nuc;
				nucs += ((nucs.length > 1) ? (" ") : "") + nuc ;

				count++;
				s += '\
						<li>' + alib.fname + ' [' + nuc + '] \
						' + showRestriction(alib.ap) + '\
						<a onclick="return advRemoveLocation(this, \'' + nuc + '\', mySelectedLibraries, myMatchingLibs);" title="Remove location" class="tagdelete" href="#"></a>\
						</li>';
		});
	}

	if (nucs != libraryNUCSAsString) {
		// alert("nucs: " + nucs + " nucs as string:" + libraryNUCSAsString) ;
		saveMyLibraries(nucs);
		libraryNUCSAsString = nucs;
	}
	
	$('#mylocationsheader').html(count == 0 ? ("Your Libraries") : count == 1 ? ("Your " + count + " Library") : ("Your " + count + " Libraries"));
	if (s == "") {
		$('#nolocationsselected').show();
		$('#mylocationsselected').hide();
		$('#mylocationsselectedremove').hide();
		$('#myselectedlibs').html("").hide();
		$('#l-location').attr("disabled", 'disabled').attr("checked", "");
	} else { 
		$('#nolocationsselected').hide();
		$('#mylocationsselected').show();
		$('#mylocationsselectedremove').show();
		$('#myselectedlibs').html(s).show();
		$('#l-location').attr("disabled", '');
	}

	return false;
}

function saveMyLibraries(nucs) {

	//	alert("nucs:" + nucs) ;	

	$.ajax({
		type: "POST",
		url: rootRef + "/userProfile",
		data: "functionid=setLibraries&libraries=" + nucs,
		success: function(msg){
			if (msg == "ok") {
				// alert("Your library preferences have been saved") ;
				
				var msg2 =	'<div id="notification" style="position:fixed;right:0;top:0;background:#FFFC17">\
							 <p>Your library preferences have been saved</p></div>' ;
				if ($("#notification").length == 0) {
					$("#libraries").prepend(msg2);
					$("#notification").fadeTo(4000, 1).fadeTo(1000, 0.1, function() {
						$(this).remove();
					});
				}
				
			} else {
				//alert("There was an unexpected error encountered whilst saving your preferences:" + msg ) ;

				var msg2 =	"<p>There was an unexpected error encountered whilst saving your preferences:</p> " +
							"<p>" + msg + ".</p>" ;

				$("#dialogMsg").html(msg2) ;

				$("#dialog").dialog('option', 'title', '<h3>We\'re sorry</h3>') ;

				$("#dialog").dialog('option', 'buttons', {
					Ok: function() {
						$(this).dialog('close') ;
					}
				}) ;

				$("#dialog").dialog('open') ;
			}
			forceReloadOnBackButton();
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("There was an unexpected error encountered whilst saving your preferences, textStatus="+textStatus+",errorThrown="+errorThrown) ;
		}
	});
}

/* end my libraries functions */

function limitTo(str, size)  {

	if (str == null) return str ;
	return (str.length > size) ? str.substring(0, size-3) + "..." : str ;
}

function separateRecord(ele, ids) {

	var suid = (document.URL.match(/work\/\d+/) + "").substr(5) ;
	//var parentDD = $(ele).parents("dd") ;
	//var parentDL = parentDD.parents("dl") ;
	
	var mainDL = $('#details-version').find("dl:first") ;
	
	// winkle our vital parts from the mash of html
	var sepTitle = jQuery.trim(mainDL.find("dt:contains('Title'):first").next().text()).replace(/\s\s+/g," ") ;
	var sepAuthor =  jQuery.trim(mainDL.find("dt:contains('Author'):first").next().text()).replace(/\s\s+/g," ") ;
	var sepPublished =  jQuery.trim(mainDL.find("dt:contains('Published'):first").next().text()).replace(/\s\s+/g," ") ;
	
	if (shortUserid.length < 1) { // If not registered user
		var msg =	"<p>Separating editions is currently only available to registered users of Trove." +
					"Please consider becoming a registered user by going to the <a href='/login'>signup page</a> - it is free and fast.</p>";

		$("#dialogMsg").html(msg) ;
		
		$("#dialog").dialog('option', 'title', '<h3>Please register</h3>') ;
		
		$("#dialog").dialog('option', 'buttons', {
								Ok: function() {
								$(this).dialog('close');
								}
							}) ;
	}
	else // Show separate confirmation modal
	{

		var msg =	"<p>Are you sure you want separate this edition from this work?<br/> " +
					"For help and more information, view our <a href='http://help.nla.gov.au/trove/using-trove/creating-contributing/splitting-merging'>guidelines for separating editions from a work</a>"+
					"<dl>" +
					"	<dt>Title:</dt>" +
					"	<dd>"+ sepTitle + "</dd>" +
					"	<dt>Author:</dt>" +
					"	<dd>" + sepAuthor + "</dd>" +
					"	<dt>Published:</dt>" +
					"	<dd>" + sepPublished + "</dd>" +
					"</dl>" +
					"<form action='#' id='frmseparate'>" +
					"	<fieldset>" +
					"		<label for='txtareacomment'>Please note why you have separated this edition (optional):</label>" +
					"		<textarea cols='45' rows='4' name='txtareacomment' id='txtareacomment2'></textarea>" +
					"	</fieldset>" +
					"</form>" +
					"<p>You should only proceed if you are COMPLETELY CERTAIN that this edition does not " +
					"belong in this work, and has been mis-catalogued or incorrectly grouped.</p>" +
					"<p>If you are unsure, please view our <a href='http://help.nla.gov.au/trove/using-trove/creating-contributing/splitting-merging'>guidelines for separating "+
					"editions from a work.</a></p>";
	
		$("#dialogMsg").html(msg) ;
	
		$("#dialog").dialog('option', 'title', '<h3>Separate this edition from this work?</h3>') ;
	
		$("#dialog").dialog('option', 'buttons', {
			'I am certain! This edition doesnt belong here!': function() {
				//draggedObject.fadeOut(1500, function() { draggedObject.remove() ; }) ;
	
				var myDialog = $(this) ;
	
				var note = $("#txtareacomment2").val() ;
	
				var description = "<separate>" +
						"<from suid='" + suid + "'/><ids>" + ids + "</ids><title>" + xmlEncode(sepTitle) + 
						"</title><author>" + xmlEncode(sepAuthor) + "</author><published>" +
						xmlEncode(sepPublished) + "</published>" +
						"</separate>" ;
				description = description.replace(/\u200B/g, "") ;	// remove zero width space, if any
	
	//alert("Sep with note " + note + " description =" + description + " BTW, seppversize="+ $(".separateVersion").size()) ;
	
				$.post(rootRef + "/update", 
					{functionid: "separate", suSeparateFrom: suid, surecids: ids, note: note, description: description},
					function(data) {
						myDialog.dialog('close') ;
						if (data.indexOf("Update Transaction Succeeded") >= 0) {
	
							
							var msg =	"<p>Your separation request has been received as is being processed.</p>" +
										"<p>It may take up to 5 minutes before the separation is visible in the system.</p>";

							$("#dialogMsg").html(msg) ;
							
							$("#dialog").dialog('option', 'title', '<h3>Separation pending</h3>') ;
							
							$("#dialog").dialog('option', 'buttons', {
								Ok: function() {
								$(this).dialog('close');
								}
							}) ;
							$("#dialog").dialog('open') ;
							
							/* alert("Your separation request has been received as is being processed.\n \n" +
								"It may take up to 5 minutes before the separation is " +
								"visible in the system.") ;*/
	
							// animated disappearence, then remove from the DOM
							
							$('h1 span.hdetails').html("Separation Pending. This edition will be removed from this work soon:");
							$('li.separatemsg').html("Separation Pending <font color='red'>This edition will be removed from this work soon</font>");

						}
						else alert("ERROR:\n \nThe separation failed - reason:\n \n" + data) ;
				}) ;
	
			},
			Cancel: function() {
				$(this).dialog('close');
			}
		}) ;

	}
	
	$("#dialog").dialog('open') ;	

}


/**
 * Tagging and Annotation functions.
 */

var functionToRunWhenHuman ;
var argumentToPassToFunctionToRunWhenHuman ;
var refreshRequired = false ;

function notYetHuman(fn, obj) {

	functionToRunWhenHuman = fn ;
	argumentToPassToFunctionToRunWhenHuman = obj ;
	setTimeout(initiateHumanDialog, 100) ;		// async? why? for luck?
}

function cancelFunctionToRunWhenHuman() {

	functionToRunWhenHuman = null ;
	argumentToPassToFunctionToRunWhenHuman = null ;
}

function reinvokeFunction() {
//alert("in reinvokeFunction functionToRunWhenHuman="+functionToRunWhenHuman) ;
	functionToRunWhenHuman(argumentToPassToFunctionToRunWhenHuman) ;
}


var tag_timeout = undefined;

function delayShowTags() {
	if (tag_timeout != undefined) {
        clearTimeout(tag_timeout);
	}

	tag_timeout = setTimeout(function() {
        tag_timeout = undefined;
        showTags();
	}, 500);
};

function iniTagForm(id, hide) {
	if (hide) {
		var tagform = $('#tagform' + id).hide();
		$('#addtagform' + id).click(function() {
			tagform.toggle();
			return false;
		});
	}
	
	var tagadd = $('#tagadd' + id);
	var txttag = $('#txttag' + id).keyup(function() {
		var disabled = tagadd.hasClass('disabled');
		if (disabled && this.value != '') {
			tagadd.removeClass('disabled').removeAttr("disabled");
		} else if (!disabled && this.value == '') {
			tagadd.addClass('disabled').attr("disabled", 'disabled');
		}
	});
	$('#tagcancel' + id).click(function() {
		if (hide) $('#tagform' + id).hide();
		txttag.val('');
		tagadd.addClass('disabled');
		
		return false;
	});
}


function showTags() {

	$('#tagResultContainer').html("<H2 style='margin:5em'>Loading...</H2>") ;
 /*
alert("${rootURL}/tag?functionid=list&size=" + $('#selecttaglimit').val() + "&from=" + $('#selecttagtype').val() +
			"&containing=" + $('#txttagcontain').val() +
			"&added=" + $('#selecttagadded').val()) ;
 */
	
	var cloud =  true ; // ("cloud" == $('#selecttagdisplay').val()) ;
	var selectedTagType = $('#selecttagtype').val();
	var selectedTagLimit = $('#selecttaglimit').val();
	var txtTagContain = $('#txttagcontain').val();
	var selectTagAdded = $('#selecttagadded').val();
	
	var limit = "l-publictag";
	if (selectedTagType == "allMine") 
		limit = "l-usertag";
	else if (selectedTagType == "myPublic")
		limit = "l-userpublictag";
	else if (selectedTagType == "myPrivate")
		limit = "l-userprivatetag";
	

	$.getJSON(rootRef + "/tag?functionid=list&size=" + selectedTagLimit + "&from=" + selectedTagType +
			"&containing=" + encodeURIComponent(txtTagContain) +
			"&added=" + selectTagAdded,

		function(data) {
		 	//alert("got res="+data) ;
			var s ;
			var tags = data.tags ;

			if (tags.length == 0) {
				s = "<ul class='tagcloudprofile'><li><h1>No tags found.</h1></li></ul>";
			}
			else if (cloud) {
				s = "<ul class='tagcloudprofile'>" ;
				// find the tag with the maximum occurance.
				var max = 1;
				var scs = [];
                var min = 0;
				for (var i = 0; i < tags.length; i++) {
					scs[i] = parseFloat(tags[i].cnt);
                   if (scs[i] > max) max = scs[i];
                    if (min == 0){ min = scs[i];}
                    else if (scs[i] < min ) { min = scs[i]; }
                }
                //Calculate relative sizes based on the specific data
                //These calculations are coupled to the number of styles available in styles.css related to tags
                if(max <= 12){   // exception 1 - tag numbers are small enough to match number of styles
                    var size1 = 1;
                    var size2 = 2;
                    var size3 = 3;
                    var size4 = 4;
                    var size5 = 5;
                    var size6 = 6;
                    var size7 = 7;
                    var size8 = 8;
                    var size9 = 9;
                    var size10 = 10;
                    var size11 = 11;
                }
                else {  //usual case - assign styling based on size and distribution of data
                    var median = calculateMedian(scs);
                    var lowerRange = median - min;
                    var upperRange = max - median;
                    var size1 = min + lowerRange / 5;
                    var size2 = min + lowerRange * 2 / 5;
                    var size3 = min + lowerRange * 3 / 5;
                    var size4 = min + lowerRange * 4 / 5;
                    var size5 = (median - size4) / 2 + size4;
                    var size6 = (median + size4)/2 + size5;
                    var size8 = median + upperRange / 5;
                    var size7 = (size8 - median) / 2 + median;
                    var size9 = median + upperRange * 2/5;
                    var size10 = median + upperRange * 3/5;
                    var size11 = median + upperRange * 4/5;

                }

                    // render the tags
                    for (var i = 0; i < tags.length; i++) {
                        var sc = parseFloat(tags[i].cnt);
                        var c;
                        if (sc <= size1) {
                            c = 1;
                        }
                        else if (sc <= size2) {
                            c = 2;
                        }
                        else if (sc <= size3) {
                            c = 3;
                        }
                        else if (sc <= size4) {
                            c = 4;
                        }
                        else if (sc <= size5) {
                            c = 5;
                        }
                        else if (sc <= size6) {
                            c = 6;
                        }
                        else if (sc <= size7) {
                            c = 7;
                        }
                        else if (sc <= size8) {
                            c = 8;
                        }
                        else if (sc <= size9) {
                            c = 9;
                        }
                        else if (sc <= size10) {
                            c = 10;
                        }
                        else if (sc <= size11) {
                            c = 11;
                        }
                        else if (sc > size11) {
                            c = 12;
                        }

											  var tagText = $('<div/>').text(tags[i].c).html();
                        s += " <li><a title=\"" + tags[i].cnt + " tags \" class=\"tag" + c +
                            "\" href=\"" + rootRef + "/result?" + limit + "=" + encodeURIComponent(tags[i].c) + "\">" + tagText + "</a></li>";
                    }
				s += "</ul>" ;
				
				s += "<a href=\"" + rootRef + "/tag?size=" + selectedTagLimit + "&from=" + selectedTagType +
						"&containing=" + encodeURIComponent(txtTagContain) +
						"&added=" + selectTagAdded+"\">Bookmark this tag cloud</a>";
			}


			else {
				s = "<ul>" ;
				for (var i=0;i<tags.length;i++) 
				s += "<A href=\"${rootURL}/result?l-publictag=" + encodeURIComponent(tags[i].c) +
					"\">" + tags[i].c + "</A>" +
					 ((tags[i].cnt > 1) ? (" (" + tags[i].cnt + ")") : "") + "<BR />" ;
				s += "</ul>" ;
			}
			
			
		 	//alert ("s="+s) ;
			$('#tagResultContainer').html(s) ;
	}) ;
}

function calculateMedian(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

function validateEmailAddress(emailAddress){
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)){
		return true;
	}
	else {
		return false;
	}
}

function articleComingSoon(notifyMeButton, articleId, pageId) {
	var message = "";
    var emailAddr = $(notifyMeButton.parentNode.children).find("input").val();
	var emailIsvalid = validateEmailAddress(emailAddr);
	$('#errorMessage').remove();
	$('#successMessage').remove();
	$('#fieldError').remove();
	if (emailIsvalid){
    var customerNotes = $(notifyMeButton.parentNode.children).find("textArea").val();
    var groupEmail = false;
	if($(notifyMeButton.parentNode.children).find('input[name="groupEmails"]').is(":checked")) {
        groupEmail = true;
    }
    var subscription = {customerEmail: emailAddr, nameOfSubscriptionType: "Article Coming Soon", nameOfClientApp: "Newspapers", articleId: articleId, pageId: pageId, customerNotes: customerNotes, groupEmails: groupEmail}
    var url = rootRef + "/subscriptions"

    $.ajax({
        type:"POST",
        url: url,
        data: subscription,
        success: function(msg){
            if (msg == "ok"){
                $(notifyMeButton).attr("disabled", true);
				message = "<span id='successMessage'>Thank-you, we'll let you know when this item is available</span>";
				var heading = $(notifyMeButton.parentNode.parentNode.parentNode.parentNode).find('dt');
				$(notifyMeButton.parentNode.parentNode.parentNode.parentNode).find('#successMessage').addClass('success');
                toggleExplainPreview(notifyMeButton);
				heading.append(message);
				heading.find('#successMessage').addClass('success');

            } else {
				message = "<div id='errorMessage' ><p>Whoops, something went wrong at our end trying to process your 'Notify me' request.</p><p> Please try to submit the request again.</p>";
				$(notifyMeButton.parentNode.parentNode.parentNode).find('h3').append(message);
				$(notifyMeButton.parentNode.parentNode.parentNode).find('#errorMessage').addClass('error_form');}
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
			message = "<div id='errorMessage' ><p>Whoops, something went wrong at our end trying to process your 'Notify me' request.</p><p> Please try to submit the request again.</p>";
			$(notifyMeButton.parentNode.parentNode.parentNode).find('h3').append(message);
			$(notifyMeButton.parentNode.parentNode.parentNode).find('#errorMessage').addClass('error_form');
            }
    });
	} else {
		message = "<div id='errorMessage' ><p>An error occurred when trying to process your 'Notify me' request.</p><p> Please check the email address and then re-submit the form.</p>";
		$(notifyMeButton.parentNode.parentNode.parentNode).find('h3').append(message);
		$(notifyMeButton.parentNode.parentNode.parentNode).find('#errorMessage').addClass('error_form');
		var fieldMessage = "";
		if(!emailAddr || 0 === emailAddr.length){
			fieldMessage = "<span id='fieldError' class='error_field'>Error: email address cannot be empty.</span>";
		}else {
			fieldMessage = "<span id='fieldError' class='error_field'>Error: email address is invalid.</span>";
		}
		$(notifyMeButton.parentNode.children).find('label').filter(":first").append(fieldMessage);
	}
    return false ;

}



function ndpArticleNotification(ele, articleId) {

	var emailAddr = $(ele).parent().children("input").val();

	var reqUrl = rootRef + "/ndp/del/registerArticleEmailNotification" ;
//	var reqUrl = "http://girt.nla.gov.au:6160/ndp/del/registerArticleEmailNotification" ;

//	alert("emailAddr ="+emailAddr +",article="+articleId+",url="+reqUrl) ;

	$.ajax({
		type: "POST",
		url: reqUrl,
		data: "articleId=" + articleId + "&emailAddr=" + emailAddr,
		success: function(msg){
			if (msg == "ok") {
				$(ele).attr("disabled", true);
				alert("Your request for notification has been recorded") ;
			}
			else alert("Your request to be notified was not recorded: " + msg) ;
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("There was an unexpected error encountered whilst recording this notification, textStatus="+textStatus+",errorThrown="+errorThrown) ;
		}
	});
	return false ;
}

function toggleExplainPreview(ele) {

	$(ele).parents("dl:first").children(".ddpreview").toggle() ;
	return false ;
}

function listItemDelete(listId, target, listItemId) {

	var itemLi = $("#list" + listId) ;

	if (confirm('Are you sure you want to remove this item from this list?')) {
	$.ajax({
		type: "POST",
		url: rootRef + "/list",
		data: "functionid=deleteItem&listId=" + listId + 
				((target != null) ? ("&target=" + encodeURIComponent(target)) : ("&listItemId=" + listItemId)),
		dataType: "json",
		success: function(resp){
//alert(resp.result) ;
			if (resp.result != 'ok') alert("The following error occurred whilst attempting to remove this item from list:\n \n" + resp.result) ;
			else itemLi.hide('slow', function() {
				$(this).remove() ;
				// update list count
				$('#listscount').html('(' + $('#listlist').children('li[id^="list"]').length + ')');
			}) ;
			if (listId != null) {  // remove disabled from list selector now
				$("#alist" + listId ).removeClass('disabled').removeAttr("disabled").parent().children("label").removeAttr("style");
			}
			
			forceReloadOnBackButton();
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
		}
	});
	}
	return false ;
}

function delTag(ele) {

	var f = $(ele).parent() ;
	var tval = f.children("a:first").text() ;
	var tid = f.attr("id").substring(3) ;
	//alert("Del " + " tid="+tid + ",val="+tval) ; // $(ele).parent().html()) ;

	
	var msg =	"<p>Are you sure you want to delete the tag?:</p> " + 
				"<p><span class=\"highlight\">" + tval + "</span></p>";
	
				$("#dialogMsg").html(msg) ;
			
				$("#dialog").dialog('option', 'title', '<h3>Delete this tag?</h3>') ;
			
				$("#dialog").dialog('option', 'buttons', {
					'Yes': function() {
						$(this).dialog('close') ;
						sendTagUpdate("functionid=delete&id=" + tid) ;
					},
					Cancel: function() {
						$(this).dialog('close') ;
					}
				}) ;
				$("#dialog").dialog('open') ;
	return false ;
}

function editTag(ele) {

	var f = $(ele).parent() ;
	var $tagLink = f.children("a:first") ;
	var tval = $tagLink.text() ;
	var tid = f.attr("id").substring(3) ;
	var isPriv = $tagLink.hasClass("privateTag") ;
	//alert("edit " + " tid="+tid + ",val="+tval) ; // $(ele).parent().html()) ;

	$("#dialogMsg").html('<h3>Edit Tag</h3>' +
		'<form id="frmaddtag" action="#"><fieldset>' +
		'<input type="radio" name="tagtype" id="rdoworkpublic" ' + ((isPriv) ? '' : 'checked="checked" ') + ' value="pub"/>' +
		'<label for="rdoworkpublic"> Public </label>' +
		' <input type="radio" name="tagtype" id="rdoworkprivate" ' +  
				((troveUserid == '') ? 'disabled="true" ' : '') +
				((isPriv) ? 'checked="checked" ' : '') + ' value="priv"/> ' +
		'<label for="rdoworkprivate"> Private</label><br/>' +
		'<input type="text" name="txttag" id="txttag" value="' + tval + '"/>' +
		'</fieldset></form>' +
//		'<p>Separate multiple tags with a semicolon <i>test cricket; Perth (WA)</i></p>') ;
 		'<p>Separate tags with a comma. To include a comma in your tag, surround the tag with' +
			' double quotes: <i>test cricket, Perth (WA), "Parkes, Henry"</i></p>') ;

	$("#dialog").dialog('option', 'title', '<h3>Edit Tag</h3>') ;

	$("#dialog").dialog('option', 'buttons', {
		'Update': function() {

			var f = $(this).find("fieldset") ;

			tval = $.trim(f.children("input[name='txttag']").val()) ;

			if (tval.length < 1) {
				alert("you forgot to add a tag value") ;
				return  ;
			}
				
			var tprivate = ("priv" == f.children("input:radio:checked").val()) ? "y" : "n" ;

			$(this).dialog('close') ;
			sendTagUpdate("functionid=update&id=" +tid + "&content=" + encodeURIComponent(tval) + "&private=" + tprivate) ;		
		},
		Cancel: function() {
			$(this).dialog('close') ;
		}
	}) ;
	$("#dialog").dialog('open') ;	
	return false ;
}

function addTag(ele) {
	var $tagadd = $(ele);
	var f = $tagadd.parents("fieldset") ;

	var $tInputBox = f.children("[name='txttag']") ;
	var tval = $.trim($tInputBox.val()) ;

	if (tval.length < 1) {
		// alert("you forgot to add a tag value") ;
		return false ;
	}

	if (!isHuman) {
		notYetHuman(addTag, ele) ;
		return false ;
	}
//	alert("tag added (NOT REALLY)" + ele + " JQ " + $(ele).parent().html()) ;
	
	// reset the button to disabled
	$tagadd.addClass('disabled');

	var targetId = f.children("[name='target']").val() ;
	var tprivate = ("priv" == f.children("input:radio:checked").val()) ? "y" : "n" ;

// alert("targetId ="+targetId +" tval ="+tval + " tprivate ="+tprivate ) ;
	sendTagUpdate("functionid=add&target=" + targetId + "&content=" + encodeURIComponent(tval) + "&private=" + tprivate) ;
	
	// clear the input box
	$tInputBox.val("") ;
	
	// close tag form
	$tagadd.parents("form").hide();
	
	return false ;
}

function sendTagUpdate(parms) {

	$.ajax({
		type: "POST",
		url: rootRef + "/tag",
		data: parms,
		dataType: "json",
		success: function(resp){
			processTagUpdateResponse(resp) ;
			forceReloadOnBackButton();
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
		}
	});	
}

function processTagUpdateResponse(resp) {

//	alert(resp.result) ;
	if (resp.actions) {
		var len = resp.actions.length ;
		for (var i=0;i<len;i++) {
			var ac = resp.actions[i] ;
			var containerList = $("#taglist" + ac.target) ;
			if (containerList.length == 0) containerList = $('#tag' + ac.id).parent();
			
//alert("ac.action="+ac.action+",ac.id="+ac.id) ;
			if ((ac.action == "delete") || (ac.action == "update")) $('#tag' + ac.id).remove() ;
			if ((ac.action == "add") || (ac.action == "update")) {
				var newLi = '<li id="tag' + ac.id + '">' +
	       				'<a ' + (ac.priv == 'y' ? 'class="privateTag" ' : '') +
	       					'title="View all works/editions tagged as ' + ac.content + 
	       					'" href="' + rootAndC + '/result?l-publictag=' + ac.content + '">' + ac.content + '</a> ' +
	       				(ac.priv == 'y' ? '<span class="private" title="Private tag">Private tag</span> ' : '') +
	       				'<a href="#" class="tagdelete" title="Delete tag" onclick="return delTag(this);"></a>' +
					'</li>' ;
// 	alert("ADDING " + newLi + "   TO  " + containerList.html() + "   ID=" + "list" + ac.target) ;
				containerList.append(newLi) ;
				
				// remove no from the heading if necessary
				var $containerListHeading = containerList.prev() ;
				if ($containerListHeading.html() == null) {
					$containerListHeading = containerList.parent().prev().children("a");
				}
				if ($containerListHeading != null && $containerListHeading.html().match(/^no .*/i)) {
					$containerListHeading.html($containerListHeading.html().substring(3)) ;
				}
				
				// remove various messages as tag has been added
				$('#notagsmsg').remove();
			}
			// update tag count
			$('#tagscount').html('(' + containerList.children('li').length + ')');
		}
	}
	if (refreshRequired) window.location.reload() ;
}

function iniAnnotationForm(id) {
	var annotationadd = $('#commentadd' + id);
	var txtannotation = $('#txtareacomment' + id);
	var rating = $('#rating' + id);
	
	var enabledisable = function() {
		var disabled = annotationadd.hasClass('disabled');
		if (disabled && (txtannotation.val() != '' || rating.val() != '')) {
			annotationadd.removeClass('disabled').removeAttr("disabled");
		} else if (!disabled && this.value == '' && rating.val() == '') {
			annotationadd.addClass('disabled').attr("disabled", 'disabled');
		}
	};
	
	txtannotation.keyup(enabledisable);
	rating.change(enabledisable);
	
	$('#commentcancel' + id).click(function() {
		txtannotation.val('');
		rating.val('');
		annotationadd.addClass('disabled').attr("disabled", 'disabled');
		return false;
	});
}

function editAnnotation(aid) {
	var aheadEle = $("#anno" + aid) ;
	var aval = $("#anno" + aid + " p").html() ;
	var annoRating = $("#annoratingfor" + aid).text() ;
	var arating = (annoRating.length > 0) ?  annoRating.substring(8,9) : "" ;
	var isPriv = $("#annocreatorfor" + aid).text().indexOf("Private") > 0 ;
//	alert("edit " + " aid="+aid + ",val="+aval+",arating ="+arating ) ; 
	
	var aform =	"<form action='#' id='frmaddanno'>" +
				"	<fieldset class=\"annotype\">" +				
				"<input type=\"radio\" name=\"annotype\" id=\"rdoworkpublic\" " + ((isPriv) ? '' : 'CHECKED ') + "value=\"pub\"/>" +
				"<label for=\"rdoworkpublic\"> Public </label>" +
				"<input type=\"radio\" name=\"annotype\" id=\"rdoworkprivate\" " +  ((isPriv) ? 'CHECKED ' : '') +
				((troveUserid == '') ? 'disabled="true" ' : '') +
				"value=\"priv\"/> " +
				"<label for=\"rdoworkprivate\"> Private</label>" +
				"	</fieldset>" +
				"	<fieldset>" +
				"		<label for=\"txtareacomment\">Your comments</label>" +
				"		<textarea cols=\"80\" rows=\"4\" name=\"comment\" id=\"txtareacomment\">" + aval + "</textarea>" +
				"<label for=\"rating\">Your rating</label>" +
				"	  <select name=\"rating\" id=\"rating\" class=\"rating\"><option value=\"\">no rating</option>" ;
				for (var i=0;i<=5;i++) aform += '<option value="' + i + '"' + (((""+i) == arating) ? ' SELECTED' : '') + ' >' + i + '</option>' ;
				aform += "</select>" +
				"	</fieldset>" +
				"</form>";

			
	$("#dialogMsg").html(aform) ;
    
	$("#dialog").dialog('option', 'title', '<h3>Edit comment</h3>') ;

	$("#dialog").dialog('option', 'buttons', {
		'Save changes': function() {

			var f = $(this).find("fieldset") ;

			aval = $.trim(f.children("textarea").val()) ;

			var aprivate = ("priv" == f.children("input:radio:checked").val()) ? "y" : "n" ;
			var astars = f.children("select").val() ;
			if ((astars == null) || (astars == ' ')) astars = "" ;

			$(this).dialog('close') ;
			sendAnnotationUpdate("functionid=update&id=" + aid + "&content=" + /*encodeURI*/escapeAnnotation(aval) + "&private=" + aprivate +
				"&reviewStars=" + astars) ;		
		},
		Cancel: function() {
			$(this).dialog('close') ;
		}
	}) ;
	$("#dialog").dialog('open') ;	


	return false ;
}

function escapeAnnotation(s) {

	return encodeURIComponent(s) ;
}

function addAnnotation(ele) {

	if (!isHuman) {
		notYetHuman(addAnnotation, ele) ;
		return false ;
	}
//	alert("addAnnotation" + ele + " JQ " + $(ele).parent().html()) ;
	
	var $addButton = $(ele);
	var f = $addButton.parent().parent().parent() ;

	var tval = $.trim(f.children("textarea").val()) ;

	var astars = f.children("select").val() ;
	if ((astars == null) || (astars == ' ')) astars = "" ;

	if ((tval.length < 1) && (astars == "")) {
		// alert("you forgot to add a comment and/or rating") ;
		return false ;
	}
	
	// reset the button to disabled
	$addButton.addClass('disabled').attr("disabled","disabled");

	var targetId = f.children("[name='target']").val() ;
	var tprivate = ("priv" == f.children("input:radio:checked").val()) ? "y" : "n" ;

//	alert("targetId ="+targetId +" tval ="+tval + " tprivate ="+tprivate ) ;
	sendAnnotationUpdate("functionid=add&target=" + targetId + "&content=" + /*encodeURI*/escapeAnnotation(tval) + "&private=" + tprivate +
		"&reviewStars=" + astars) ;

	// clear the textarea
	f.children("textarea").val("") ;
	f.children("select").val("") ;
	
	// close comment form
	$addButton.parents("form").hide();

	return false ;
}


function delAnnotation(aid) {

	
	var aheadEle = $("#anno" + aid + " p") ;
	var aval = aheadEle.text() ;

	var msg =	"<p>Are you sure you want to delete this comment?:</p> " + //start
				"<p><span class=\"highlight\">" + aval + "</span></p>";

				$("#dialogMsg").html(msg) ;
			
				$("#dialog").dialog('option', 'title', '<h3>Delete this comment?</h3>') ;
			
				$("#dialog").dialog('option', 'buttons', {
					'Yes': function() {
						$(this).dialog('close') ;
						sendAnnotationUpdate("functionid=delete&id=" + aid) ;
					},
					Cancel: function() {
						$(this).dialog('close') ;
					}
				}) ;
				
	$("#dialog").dialog('open') ;
	return false ;
}

function sendAnnotationUpdate(parms) {

//alert("sendAnnotationUpdate, parms="+parms) ;
	$.ajax({
		type: "POST",
		url: rootRef + "/annotation",
			data: parms,
		dataType: "json",
		success: function(resp){
			processAnnotationUpdateResponse(resp) ;
			forceReloadOnBackButton();
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
		}
	});	
}

function commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) {
	/* alert("There was an unexpected error whilst processing your update:" + textStatus + ",errorThrown="+errorThrown + 
		"\n \nThe most likely reason is that you have logged on or\n" +
		"logged off Trove since viewing this page, perhaps in another\n" +
		"browser window, or perhaps by navigating your browser history.\n" +
		" \nWe suggest you reload this page to continue.") ;*/
	
		var msg =	"<p>There was an unexpected error whilst processing your update:</p>" + 
					"<p>" + textStatus + ", errorThrown=" + errorThrown + "</p>" +
					"<p>The most likely reason is that you have logged on or " +
					"logged off Trove since viewing this page, perhaps in another " +
					"browser window, or perhaps by navigating your browser history. " +
					"We suggest you reload this page to continue.</p>" ;
	
		$("#dialogMsg").html(msg) ;
	
		$("#dialog").dialog('option', 'title', '<h3>We\'re sorry</h3>') ;
	
		$("#dialog").dialog('option', 'buttons', {
			Close: function() {
				$(this).dialog('close') ;
			}
		}) ;
		
		$("#dialog").dialog('open') ;
}



function toggleListExpander(ele) {

	if ($(ele).html().indexOf("all") >= 0) $(ele).html("Show <b>fewer lists</b>...") ;
	else $(ele).html("Show <b>all lists</b>...") ;
		
	$('#listlist').find(".listextras").toggle() ;
}

function toggleListCreation() {
	$('#firstListPrompt').hide() ; 
	$('#createnewlist').toggle(); 
	$('#addTolist').toggle(); 
	$('#listnamenew').val(''); 
	$('#listdesc').val('');
	
	return false ;
}

function createAndAddToList(e) {

	var target = $("#addToListTarget").val() ;
	var targetType = encodeURI(target.substring(0, 1)) ;
	var targetId = encodeURI(target.substring(1)) ;
	var itemNote = ($('#itemnote').is('.instructiontxt')) ? "" : encodeURIComponent($.trim($('#itemnote').val())) ;
	
	$("#createAndAddList input[type=checkbox]:checked").each(function(index) {
		var $checkbox = $(this);
		var listId = this.id.substring(5) ;

		var error = false;
		if (listId == "new") {
			var listName = $.trim($('#listnamenew').val()) ;
			var listDesc = $.trim($('#listdescnew').val()) ;
			var listPriv = ($('#listtypenewpriv').is(':checked')) ? "y" : "n" ;
			
			if (listName.length < 1) {
				alert("Please add a name for your new list") ;
				return false ;
			}
			if (listName.length > 100) {
				alert("Please reduce the length of your list name to 100 or fewer characters") ;
				return false ;
			}
			
			$.ajax({
				async: false,
				type: "POST",
				url: rootRef + "/list",
				data: "functionid=addList&name=" + encodeURIComponent(listName) + "&description=" + encodeURIComponent(listDesc) + "&private=" + listPriv + "&imageUrl=" + encodeURI(""),
				dataType: "json",
				success: function(resp){
					if (resp.result != 'ok') {
						alert("The following error occurred whilst attempting to add your new list:\n \n" + resp.result) ;
						error = true;
						return false ;
					}
					listId = resp.list.listId ;
					var s = '<li><input type="checkbox" class="disabled" disabled="disabled" onclick="listClick()" name="alist' + listId + '" id="alist' + listId + '"/>' +
						' <label for="list' + listId + '" style="color:#777;">' + listName + 
							((listPriv == 'y') ? '<span class="private" title="Private list">Private list</span>' : '') + '</label></li>' ;
					$('#myLists').append(s) ;
					$('#listnamenew').val('').css("width", "80%") ;
					$('#listdescnew').val('') ;
					$('#firstListPrompt').hide();
					$('#listnamenewlabel').css("margin-left", "1.8em").html("<b>or</b> make a <b>new list</b>");
					$('#listtypenewpub').css("margin-left", "1.8em");
					$checkbox.attr('disabled', true).attr('checked', false).css("display","inline") ;
					$('#newlistoption').addClass('hide') ;
					$('#newlistdiv').removeClass('highlightfield') ;
					forceReloadOnBackButton();
					return false ;		
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
					error = true;
					return false ;
				}
			});
		} 
		
		if (!error) {
			var listEle = $('#alist' + listId).parent() ;
			var listName = listEle.children('label').html() ;
			var i = listName.indexOf("<span");
			if (i > 0) listName = listName.substring(0, i) ;
			var listPriv = $(listEle).find('.private').size() > 0 ;
		
			$.ajax({
				type: "POST",
				url: rootRef + "/list",
				data: "functionid=addItem&listId=" + listId + "&targetType=" + targetType + "&targetId=" + targetId + 
						"&note=" + itemNote + "&imageUrl=" + encodeURI("") + "&description=" +  encodeURI(""),
				dataType: "json",
				success: function(resp){
					if (resp.result != 'ok') {
						alert("The following error occurred whilst attempting to add your new list:\n \n" + resp.result) ;
						return false ;
					}
					
					var listItemId = resp.listItem.id ;
	
					var s = '<li id="list' + listId + '" class="hide"><a title="View content of list" href="' +
						rootRef + '/list?id=' + listId  + '">' + listName  +
						' <span class="listtype">(' + shortUserid + ')</span></a>' + 
						((listPriv) ? '<span class="private" title="Private list">Private list</span>' : '') +
						'<a href="#" class="listitemdelete" title="Delete from list" onclick="return listItemDelete(' + listId + ', null, ' + listItemId + ');"></a>' +
						'</li>' ;
					if ($("#listlist > li").length == 0) $("#listHdr").html("Listed in") ;
					$('#listlist').append(s) ;
					$('#firstListPrompt').hide();
					listEle.children("input").addClass("disabled") ;
					listEle.children("input").removeAttr("checked") ;
					listEle.children("input").attr("disabled", "disabled") ;
					$('#itemnote').val("") ; // clear note
					listEle.children('label').css("color", "#777");
					$('#list' + listId).show('slow') ;
					$('#frmaddworklist').hide() ;
					// update list count
					$('#listscount').html('(' + $('#listlist').children('li[id^="list"]').length + ')');
					forceReloadOnBackButton();
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
				}
			});
		}

	}) ;

	return false;
}

function createList(e) {

	var listName = $.trim($('#listnamenew').val()) ;
	var listDesc = $.trim($('#listdesc').val()) ;
	var listPrivate = ($('#listtypenewpriv').is(':checked')) ? "y" : "n" ;

	if (listName.length < 1) {
		alert("Please add a name for your new list") ;
		return false ;
	}
	if (listName.length > 100) {
		alert("Please reduce the length of your list name to 100 or fewer characters") ;
		return false ;
	}
//alert("listName ="+listName +",listDesc ="+listDesc +",listPrivate ="+listPrivate ) ;
//alert("URL " + rootRef + "/list?functionid=addList&name=" + listName + "&description=" + listDesc + "&priv=" + listPrivate + "&imageUrl=");

	$.ajax({
		type: "POST",
		url: rootRef + "/list",
		data: "functionid=addList&name=" + encodeURIComponent(listName) + "&description=" + encodeURIComponent(listDesc) + 
				"&private=" + listPrivate + "&imageUrl=" + encodeURI(""),
		dataType: "json",
		success: function(resp){
//alert(resp.result) ;
			if (resp.result != 'ok') {
				alert("The following error occurred whilst attempting to add your new list:\n \n" +
					resp.result) ;
				return false ;
			}
//alert("id="+resp.list.listId) ;
			var listId = resp.list.listId ;
			var s = '<li><input type="checkbox" checked="checked" onclick="listClick()" name="list' + listId + '" id="list' + listId + '"/>' +
				' <label for="list' + listId + '">' + listName + 
					((listPrivate == 'y') ? '<span class="private" title="Private list">Private list</span>' : '') + '</label></li>' ;
//alert("adding new item:" + s) ;
			$('#myLists').append(s) ;
			$('#addToListButton').removeClass('disabled') ;
			forceReloadOnBackButton();
			return toggleListCreation() ;		
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
			return toggleListCreation() ;
		}
	});
	return false ;	
} 

function listClick() {
	if ($("#myLists > li > input:checked").length > 0) $('#addToListButton').removeClass('disabled') ;
	else $('#addToListButton').addClass('disabled') ;
}

function addToList() {

	var target = $("#addToListTarget").val() ;
	var targetType = encodeURI(target.substring(0, 1)) ;
	var targetId = encodeURI(target.substring(1)) ;
	var itemNote = ($('#itemnote').is('.instructiontxt')) ? "" : encodeURIComponent($.trim($('#itemnote').val())) ;

	$("#myLists > li > input:checked").each(function(index) {
		var listId = this.id.substring(4) ;
		var listEle = $(this).parent() ;
		var listName = listEle.children('label').html() ;
		var i = listName.indexOf("<span");
		if (i > 0) listName = listName.substring(0, i) ;
		var listPriv = $(listEle).find('.private').size() > 0 ;
	
		
//alert("listId="+listId +",listName ="+listName +",listPriv ="+listPriv ) ;

//alert("	issue req: functionid=addItem&listId=" + listId + "&targetType=" + targetType + "&targetId=" + targetId + "&note=" + itemNote + "&imageUrl=" + encodeURI("") + "&description=" +  encodeURI("")) ;
		$.ajax({
			type: "POST",
			url: rootRef + "/list",
			data: "functionid=addItem&listId=" + listId + "&targetType=" + targetType + "&targetId=" + targetId + 
					"&note=" + itemNote + "&imageUrl=" + encodeURI("") + "&description=" +  encodeURI(""),
			dataType: "json",
			success: function(resp){
//alert(resp.result) ;
				if (resp.result != 'ok') {
					alert("The following error occurred whilst attempting to add your new list:\n \n" +
						resp.result) ;
					return false ;
				}
				
				var listItemId = resp.listItem.id ;

				var s = '<li id="list' + listId + '" class="hide"><a title="View content of list" href="' +
					rootRef + '/list?id=' + listId  + '">' + listName  +
					' <span class="listtype">(' + shortUserid + ')</span></a>' + 
					((listPriv) ? '<span class="private" title="Private list">Private list</span>' : '') +
					'<a href="#" class="listitemdelete" title="Delete from list" onclick="return listItemDelete(' + listId + ', null, ' + listItemId + ');"></a>' +
					'</li>' ;
//alert("adding new item:" + s) ;
				if ($("#listlist > li").length == 0) $("#listHdr").html("Listed in") ;
				$('#listlist').append(s) ;
				listEle.children("input").addClass("disabled") ;
				listEle.children("input").removeAttr("checked") ;
				listEle.children("input").attr("disabled", "disabled") ;
				$('#itemnote').val("") ; // clear note
				$('#list' + listId).show('slow') ;
				$('#frmaddworklist').hide() ;
				// update list count
				$('#listscount').html('(' + $('#listlist').children('li[id^="list"]').length + ')');
				forceReloadOnBackButton();
//alert("disabled removing " + listEle.html()) ;
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				commonErrorAlert(XMLHttpRequest, textStatus, errorThrown) ;
			}
		});

	}) ;
	
//	alert("got t="+target+",ids="+ ids) ;
	return false;
}

// issue req: functionid=addItem&listId=5&targetType=s&targetId=18571065&note=s&imageUrl=&description=
//adding new item:<li id="list5"><a title="View content of list" href="/sbdp-ui/list?functionid=show?id=5">test2 <span class="listtype">(kfitch</span></a></li>

function processAnnotationUpdateResponse(resp) {

//	alert(resp.result) ;

	if (resp.actions) {
		var len = resp.actions.length ;
		for (var i=0;i<len;i++) {
			var ac = resp.actions[i] ;
//alert("ac.action="+ac.action+",ac.id="+ac.id) ;
			var containerList = (ac.target != null) ? $("#annotationList" + ac.target) : $("#anno" + ac.id).parent() ;

			if ((ac.action == "delete") || (ac.action == "update")) {

				// ac.id leads us to the dt - delete it and its siblings until we bump into the next dt - urk...
				var ahead = containerList.children("#anno" + ac.id) ;

//alert("CL  " + containerList.html() + " ahead=" + ahead) ;

				var aheadSiblings = ahead.nextAll() ; 	// following siblings...
				ahead.remove() ;			// remove the dt
//alert("aheadSiblings ="+aheadSiblings +" len="+aheadSiblings.length) ;
				for (var i = 0;i<aheadSiblings.length;i++) {
					var sib = aheadSiblings.get(i) ;
//alert("sib is" + sib + "tn="+sib.tagName) ;
					if (sib.tagName.toLowerCase() == "dt") break ;	// time to stop - bumped into next annotation
					$(sib).remove() ;				
				}
			}
			if ((ac.action == "add") || (ac.action == "update")) {

				
				var newLi = '<dt id="anno' + ac.id + '"></dt>' +
							(((ac.reviewStars != null) && (ac.reviewStars.length == 1)) ?
							('<dd id="annoratingfor' + ac.id + '" class="rating"><span>Rating:</span> <span class="r'+ ac.reviewStars  + '">' + ac.reviewStars + '/5</span></dd>') : '') +
							'<dd id="annocreatorfor' + ac.id + '" class="creator">' + ((ac.user.indexOf('*anon*') == 0) ? 'Anonymous' : '<a href="/userProfile?user=' + ac.user + '">' + ac.user + '</a>') + 
							((ac.priv == 'y') ? ' <span title="Private comment" class="private">Private comment</span>' : '') + '</dd>' +
							'<dd class="created">' + ac.lastModified + '</dd>' +
							'<dd id="anno' + ac.id + '" class="comment"><blockquote><p>' + ac.content + '</p></blockquote>' +
								'<div>' +
								'<a href="#" onclick="return editAnnotation(' + ac.id + ');" class="edit offscreen" title="Edit this comment">Edit</a>' +
								'<a href="#" onclick="return delAnnotation(' + ac.id + ');" class="remove offscreen" title="Remove this comment">Remove</a>' +
								'</div>' +
							'</dd>' ;
				
				/* var newLi = '<dt id="anno' + ac.id + '" class="comment">' + ac.content + '</dt>' +
					(((ac.reviewStars != null) && (ac.reviewStars.length == 1)) ?
						('<dd id="annoratingfor' + ac.id + '" class="rating' + ac.reviewStars + '">' + ac.reviewStars + '/5</dd>') : '') +
					'<dd class="creator" id="annocreatorfor' + ac.id + '">' + ((ac.user.indexOf('*anon*') == 0) ? 'Anonymous' : ac.user) + 
					((ac.priv == 'y') ? ' (private)' : '') + '</dd>' +
					'<dd class="created">' + ac.lastModified + '</dd>' +
					'<dd class="actions"><ul>' +
					'<li><a href="#" onclick="return editAnnotation(' + ac.id + ');">Edit</a></li>' +
					'<li class="last"><a href="#" onclick="return delAnnotation(' + ac.id + ');">Remove</a></li>' +
//'<li class="last"><a href="#" onclick="replyToAnnotation(' + ac.id + ')"/>Reply to this</a></li>' +
					'</ul></dd>' ; */

//alert("ADDING " + newLi + "   TO  " + containerList.html() ) ;
				containerList.append(newLi) ;
			}
			
			// update annotations count
			var annoCount = containerList.children('dt').length;
			$('#annotationscount').html('(' + annoCount + ')');
			$('#annotationsmsgcount').html((annoCount == 0 ? 'No' : annoCount ));
		}
	}
	if (refreshRequired) window.location.reload() ;

}

function initiateHumanDialog() {

	$.ajax({
		type: "GET",
		url: rootRef + "/captcha",
 		data: "randomCacheDefeater=" + new Date().getTime(),
		success: function(msg){
			if (msg == "captchaReady") displayCaptchaDialog() ;
			else alert("There was an unexpected error whilst generating captcha:" + msg + 
				"\n \nThe most likely reason is that you have logged on or\n" +
				"logged off Trove since viewing this page, perhaps in another\n" +
				"browser window, or perhaps by navigating your browser history.\n" +
				" \nWe suggest you reload this page to continue.") ;
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("There was an unexpected error encountered whilst generating captcha, textStatus="+textStatus+",errorThrown="+errorThrown) ;
		}
	});
}

function tryAnotherCaptcha() {

	$("#dialog").dialog('close') ;
	setTimeout(initiateHumanDialog, 200) ;		// async? why? for luck?

}

function displayCaptchaDialog() {

	// we should now have a session coookie!!!

	var msg = "" +
		"<label for='captcha'>Type the characters you see in the image below</label>" +
		"<input type='text' id='captcha' size='10' style='width:10em;'/>" +
		"<img src=\"" + rootRef + "/captchaImage?t=" + new Date().getTime() + "\" alt=\"Captcha image\">" +
		// "<div spellcheck='false'><p><img src='" + rootRef + "/captchaImage?t=" + new Date().getTime() + "' style='float:left;margin-right:2em'>" +
		// "To help safeguard the users of TROVE from spam, we require you to " +
		// "enter the characters you see in this image: " +
		// "<input type='text' id='captcha' size='10' style='width:10em'/><BR CLEAR='ALL'/>" +
		"<p>If you can't read the image, either <a href='#' onclick='return tryAnotherCaptcha()'>click here to try another image</a>, " +
		"or <a href=\"" + rootRef + "/captchaAudio?t=" + new Date().getTime() + "\">click here</a> to listen to the same characters being read." +
		"</p>" +
		"<h4>If you already have a Trove account, just login...</h4>" +
		"<ul>" +
		"<li><label for='username'>Username</label><input type='text' id='username' size='32'></li>" +
		"<li><label for='password'>Password</label><input type='password' id='password' size='32'/></li>" +
		"</ul>" +
		"<h4>If you <em>don't</em> have a Trove account...</h4>" +
		"<p>... and you can't abide these inane <em>spam</em> tests, just " +
		"<a href=\"" + rootRef + "/signup\"><strong>signup for an account</strong></a> - it's free and only takes 2 minutes!</p>" +
		"<p>To use this feature, your browser must have cookies enabled.</p>";

	$("#dialogMsg").html(msg) ;

	$("#dialog").dialog('option', 'title', '<h3>CAPTCHA challenge</h3>') ;

	$("#dialog").dialog('option', 'buttons', {
		'Done': function() {

			var myDialog = $(this) ;

			var username = $("#username").val() ;
			var password = $("#password").val() ;
			var captcha = $("#captcha").val() ;

			if ((username.length > 0) && (password.length > 0)) {

				$.ajax({
					type: "POST",
					url: rootRef + "/login",
 					data: "modalMode=y&username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password),
					success: function(msg){
						if (msg == "ok") {
							myDialog.dialog('close') ;
							
							var msg =	"<p>Thank you for logging on.</p>" + 
							"<p>This web page was constructed without knowing who you are, so to show you accurate information " +
							"customised for you this page will be refreshed.</p>" ;
			
							$("#dialogMsg").html(msg) ;
						
							$("#dialog").dialog('option', 'title', '<h3>You\'re now logged in</h3>') ;
						
							$("#dialog").dialog('option', 'buttons', {
								Close: function() {
									$(this).dialog('close') ;
									refreshRequired = true ;
									isHuman = true ;
									$(".rdoprivate").removeAttr("disabled") ; 
									$(".rdocommentprivate").removeAttr("disabled") ; 
									reinvokeFunction() ;
								}
							}) ;
							
							$("#dialog").dialog('open') ;
							
							
							/* alert("Thank you for logging on!\n \nThis web page was constructed without " +
							"knowing who you are, so to show you accurate information customised for you " +
							"this page will be refreshed.") ;
							refreshRequired = true ;
							isHuman = true ;
							$(".rdoprivate").removeAttr("disabled") ; 
							$(".rdocommentprivate").removeAttr("disabled") ; 
							reinvokeFunction() ;*/
						}
						else alert("Error logging in:" + msg ) ;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						alert("There was an unexpected error encountered whilst logging in, textStatus="+textStatus+",errorThrown="+errorThrown) ;
					}
				});
			}
			else if (captcha.length > 0) {
				$.get(rootRef + "/captcha?captcha=" + captcha, 
					function(data) {						
						if (data == "ok") {
							myDialog.dialog('close') ;
							//alert("You are now logged in to TROVE") ;
							isHuman = true ;
							reinvokeFunction()
						}
						else alert("ERROR:\n \nThe human test failed - reason:\n \n" + data) ;
				}) ;
			}
			else alert("Come on, human! Either submit to the human reading challenge or tell us your Trove username and password") ;
		},
		Cancel: function() {
			$(this).dialog('close') ;
			cancelFunctionToRunWhenHuman() ;
		}
	}) ;
	$("#dialog").dialog('open') ;	
}


function displayCiteDialog(versionRecordId, versionId) {

	if (!troveReady) {
		troveReadyRun = function() { displayCiteDialog(versionRecordId, versionId); } ;
		return ;
	}

	$("#dialogMsg").html("Please wait...") ;

	$("#dialog").dialog('option', 'title', '<h3>Cite this record</h3>') ;
	// $("#dialog").dialog('option', "position", 'top') ;
	
	var closed = false;
	$("#dialog").dialog('option', 'buttons', {
		Close: function() {
			closed = true;
			$(this).dialog('close');
		}
	}) ;

	
	var myDialog = $("#dialog").dialog('open') ;
//alert("myDialog ="+myDialog ) ;

	var matches = document.URL.match(/(work|people)\/(\d+)/);
	var island = matches[1];
	var suid = matches[2];
	
	// var suid = (document.URL.match(/work\/\d+/) + "").substr(5) ;

	//alert("about to issue req:   " + rootRef + "/work/" + suid + "?citationFormat=default&selectedversion=" + versionRecordId) ;

	if (versionRecordId == null) versionRecordId = "" ;
	if (versionId == null) versionId = "" ;

	//$.getJSON(rootRef + "/work/8315805?citationFormat=default&selectedversion=NBD10679712",
	$.getJSON(rootRef + "/" + island + "/" + suid + "?citationFormat=default&selectedversion=" + versionRecordId,

		function(data) {
		 	//alert("got res t="+data.citation.title+",\nmyDialog ="+myDialog ) ;
			var citation = data.citation ;
			var authors = citation.authors ;

			var isNBDrecord = (versionRecordId.indexOf("NBD") == 0) ;
			var isOpenLibraryRecord = (versionRecordId.indexOf("OL") == 0) ;

			var msg = "<div class='citedownload'>" +
    				"<dl>";
			if (citation.persistenturl)
		    	msg += "<dt>Persistent identifier</dt>" +
	        	"<dd><a href='/" + citation.persistenturl + "'>" + citation.persistenturl + "</a></dd>" ;
			else
		    	msg += "<dt>Work identifier</dt>" +
		        	"<dd><a href='/" + island + "/" + suid + "'>http://trove.nla.gov.au/" + island + "/" + suid + "</a></dd>";
      if (isNBDrecord || versionId != "") {
        msg += "<dt>Edition identifier</dt>";
        if (versionId != "") {
          msg += "<dd><a href='/version/" + versionId + "'>http://trove.nla.gov.au/version/" + versionId + "</a></dd>";
        }
        if (isNBDrecord) {
          msg += "<dd><a href='http://nla.gov.au/anbd.bib-an" + versionRecordId.substring(3) +
              "'>http://nla.gov.au/anbd.bib-an" + versionRecordId.substring(3) + "</a></dd>";
        }
      }

			msg += "<dt>APA citation</dt><dd>" ;
//alert("msg1="+msg) ;
			for (var i=0;i<authors.length;i++) {
				if (i == 5) {
					msg += " et al." ;
					break ;
				}
				if (i > 0) msg += " &amp; " ;
				msg += authors[i] ;
			}

			if ((authors.length > 0) && (citation.year)) msg += " (" + citation.year + "). " ;
			if (citation.articleTitle) msg += citation.articleTitle + "." ;
			if ((authors.length == 0) && (citation.year)) msg += " (" + citation.year + "). " ;
			if (citation.articleTitle) msg += " In";
			msg += " <I>" + citation.title + "</I>";
			if (citation.edition) msg += " (" + citation.edition + ")";
			msg += ". " ;

			if (citation.volume || citation.issue) {
        if (citation.volume) msg += citation.volume + " " ;
  			if (citation.issue) msg += " (" + citation.issue + "), " ;
  		}
			if (citation.pagination) msg += citation.pagination + ". " ;
			
      if (citation.publisher && !citation.articleTitle) {
				msg += " " + citation.publisher ;
				if (citation.publishPlace) msg += ", " + citation.publishPlace ;
			}
      		if (citation.persistenturl) {
      			msg += " Retrieved " + citation.currentmonthdayyear + ", from " + citation.persistenturl;
      		}
			msg += "</dd>" +
				"<dt>MLA citation</dt><dd>" ;
			for (var i=0;i<authors.length;i++) {
				if (i == 5) {
					msg += " et al." ;
					break ;
				}
				if (i > 0) {
					if (i == (authors.length - 1))	msg += " and " ;
					else msg += ", " ;
				}
				msg += authors[i] ;
			}
			if (citation.articleTitle) msg += " \"" + citation.articleTitle + "\". ";

			msg += " <I>" + citation.title + "</I>";
			if (citation.edition) msg += " (" + citation.edition + ")";
			msg += ". " ;
			
			if (citation.volume) msg += citation.volume + "." ;
  		if (citation.issue) msg += citation.issue + " " ;
			 
			if (citation.publisher && !citation.articleTitle) {
				msg += " " + citation.publisher ;
				if (citation.publishPlace) msg += ", " + citation.publishPlace ;
			}
			if (citation.year) {
        if (citation.articleTitle) msg += " " + citation.year + ". " ;
        else msg += ", " + citation.year + ". " ;
      }
			
			if (citation.pagination) msg += citation.pagination + ". " ;
			if (citation.persistenturl) {
				msg += " Web. " + citation.currentdaymonthyear + " &lt;" + citation.persistenturl + "&gt;"; 
			}

			msg += "</dd>" +
				"<dt>Harvard/Australian citation</dt><dd>" ;
			for (var i=0;i<authors.length;i++) {
				if (i == 5) {
					msg += " et al." ;
					break ;
				}
				if (i > 0) msg += " &amp; " ;
				msg += authors[i] ;
			}
			msg += " " ;

			if (authors.length > 0) {
				if (citation.year) msg += citation.year ;
				else msg += "n.d.";
				msg += ", ";
			}
			if (citation.articleTitle) msg += "\'" + citation.articleTitle + "\'";
			if (authors.length == 0) {
				if (citation.year) msg += " " + citation.year + ". ";
				else msg += " n.d. ";
			}
      msg += " <I>" + citation.title + "</I>" ;
      if (citation.edition) msg += ", " + citation.edition ;
			
      if (citation.volume) msg += ", vol. " + citation.volume ;
  		if (citation.issue) msg += ", no. " + citation.issue ;
      
      if (citation.publisher && !citation.articleTitle) {
				msg += ", " + citation.publisher ;
				if (citation.publishPlace) msg += ", " + citation.publishPlace ;
			}
			if (citation.pagination) msg += ", pp. " + citation.pagination + ". " ;
			if (citation.persistenturl) {
				msg += ", viewed " + citation.currentdaymonthyear + " &lt;" + citation.persistenturl + "&gt;";
			}
			
			msg += "</dd>" +
				"<dt>Wikipedia citation</dt><dd>{{Citation" ;
			for (var i=0;i<authors.length;i++) {
				msg += " | author" + (i + 1) + "=" + authors[i] ;
			}
			if (citation.articleTitle) {
				msg += " | title=" + citation.articleTitle ;
				msg += " | journal=" + citation.title ;
			} else {
				msg += " | title=" + citation.title ;
			}
			if (citation.year) msg += " | publication-date=" + citation.year ;
			if (citation.publisher) msg += " | publisher=" + citation.publisher ;
			if (citation.edition) msg += " | edition=" + citation.edition ;
		    if (citation.volume) msg += " | volume=" + citation.volume ;
		    if (citation.issue) msg += " | issue=" + citation.issue ;
		    if (citation.pagination) msg += " | pages=" + citation.pagination ;
		    
		    if (citation.isbn) msg += " | isbn=" + citation.isbn ;
		    if (citation.issn) msg += " | issn=" + citation.issn ;
		    
		    if (citation.persistenturl) {
		    	msg += " | url=" + citation.persistenturl ;
		    	msg += " | access-date=" + citation.accessdate ;
		    }
		    if (!(citation.isbn || citation.issn || citation.persistenturl)) {
		    	msg += " | url=" + "http://trove.nla.gov.au/" + island + "/" + suid ;
		    	msg += " | accessdate=" + citation.accessdate ;
		    }
			
			msg += " }}</dd>" ;
			msg += "<div>Citations are automatically generated and may require some modification to conform to exact standards.</div>"
			

			msg += "</dl>" +   
				"<h4>Download</h4>" +
				"<ul class='actions'>" +
				"<li><button class='btnsecondary' onclick='document.location.href=\"" + rootRef + "/" + island + "/" + suid +
					"?citationFormat=endNoteXML&selectedversion=" + versionRecordId +
					 "\"'><span><img src=\""+ imageRef + "/icon-endnote.gif\" alt=\"\"/>EndNote XML</span></button></li>" +
				"<li><button class='btnsecondary' onclick='document.location.href=\"" + rootRef + "/" + island + "/" + suid +
					"?citationFormat=BibTeX&selectedversion=" + versionRecordId +
					 "\"'><span><img src=\"" + imageRef + "/icon-bibtex.gif\" alt=\"\"/>BibTeX</span></button></li>" +
				((isNBDrecord || isOpenLibraryRecord) ? "<li><button class='btnsecondary' onclick='document.location.href=\"" + rootRef + "/" + island + "/" + suid +
					"?citationFormat=marc&selectedversion=" + versionRecordId +
					 "\"><span><img src=\"" + imageRef + "/icon-marc21.gif\" alt=\"\"/>MARC XML</span></button></li>" : "") +
				"</ul></div>";
//alert("msg3="+msg) ;
			if (!closed) {
				$("#dialog").dialog('close') ;
				$("#dialogMsg").html(msg) ;
				$("#dialog").dialog('open') ;
			}
//alert("msg4="+msg) ;
			
	}) ;
}

function displayCopyrightDialog(id, surcid) {
	
	if (!troveReady) {
		troveReadyRun = function() {displayCopyrightDialog(id) } ;
		return ;
	}

	$.ajax({
		type: "GET",
		url: rootRef + "/copyrightstatus/" + encodeURIComponent(id),
		success: function(m){
			var cstatus = $(m);
			var msg = 
				"<div class='citedownload'>" +
				"<h1>" + cstatus.find("copyrightStatus").text() + "</h1>";
			var cstatusReason = cstatus.find("copyrightStatusReason").text();
			if (cstatusReason != "") {
		    	msg += 
		    		"<dl>" +
		    		"<dt>Reason for copyright status:</dt>" +
		    		"<dd>" + cstatusReason + "</dd>" +
		    		"</dl>";
			}
			var contextMsg = cstatus.find("contextMsg").text();
			var geturl = "<a href=\"javascript:focusOnGetting('" + surcid + "', 'borrow')\">";
			var buyurl = "<a href=\"javascript:focusOnGetting('" + surcid + "', 'buy')\">";
			switch (contextMsg) {
				case "1.1": msg += "<p>You may copy under some circumstances, for example you may copy a portion for research or study. " + buyurl + "Order a copy</a> to the extent allowed under fair dealing. " + geturl + "Contact the holding library</a> for further information about copying.</p>"; break;
				case "1.2": 
				case "2.1": msg += "<p>You may copy or " + buyurl + "order</a> a copy. " + geturl + "Contact the holding library</a> for further information about copying.</p>"; break;
				case "1.3": msg += "<p>You may have full rights to copy, or may be able to copy only under some circumstances, for example a portion for research or study. " + geturl + "Contact the holding library</a> for further information about copying.</p>"; break;
				case "2.2": msg += "<p>Copyright varies with publication date of each issue. You may have full rights to copy, or may be able to copy only under some circumstances, for example a portion for research or study. " + buyurl + "Order a copy</a> to the extent allowed under fair dealing. " + geturl + "Contact the holding library</a> for further information about copying.</p>"; break;
				case "3":
				case "4": msg += "<p>This collection may have multiple rights owners; If you wish to copy or order copies, " + geturl +"contact the holding library</a>.</p>"; break;
				case "5": msg += "<p>You may " + buyurl + "order a copy</a> or use the online copy for research or study; for other uses " + geturl + "contact the holding library</a>.</p>"; break;
				case "6":
				case "7": msg += "<p>" + geturl + "Contact the holding library</a> for information about copying.</p>"; break;
				case "8": msg += "<p>You may " + buyurl +"order a copy</a> for research or study; for other uses " + geturl + "contact the holding library</a>.</p>"; break;
			}
		    msg += "<p>Copyright status was determined using the following information:</p>" +
		    	"<dl>";
		    var creatorStatus = cstatus.find("creatorAliveStatus").text();
		    if (creatorStatus != "") {
		    	msg += "<dt>Creator Status:</dt>" +
		        	"<dd>" + creatorStatus + "</dd>";
		    }
		    var deathDate = cstatus.find("creatorDateOfDeath").text();
		    if (deathDate != "") {
		    	msg += "<dt>Creator Date of Death:</dt>" +
		        	"<dd>" + deathDate + "</dd>";
		    }
		    var materialType = cstatus.find("materialType").text();
		    if (materialType != "") {
		    	msg += "<dt>Material type:</dt>" +
		        	"<dd>" + materialType + "</dd>";
		    }
		    var publishedStatus = cstatus.find("publishedStatus").text();
		    if (publishedStatus != "") {
		        msg += "<dt>Published status:</dt>" +
		        	"<dd>" + publishedStatus + "</dd>";
		    }
		    var publicationDate = cstatus.find("publicationDate").text();
		    if (publicationDate != "") {
		    	msg += "<dt>Publication date:</dt>" +
		        	"<dd>" + publicationDate + "</dd>";
		    }
		    var governmentOwnership = cstatus.find("govtCopyrightOwnership").text();
		    if (governmentOwnership != "") {
		    	msg += "<dt>Government copyright ownership:</dt>" +
		        	"<dd>" + governmentOwnership + "</dd>";
		    }
		    msg += 
		    	"</dl>" +   
		        "<p>Copyright status may not be correct if data in the record is incomplete or inaccurate. " + 
		        "For more information please see: <a href='http://wiki.nla.gov.au//x/LAJbAQ'>how copyright status is determined</a>.</p>" +
		        "</div>";
	
			$("#dialogMsg").html(msg);
		
			$("#dialog").dialog('option', 'title', '<h3>Copyright Status</h3>');
			
			$("#dialog").dialog('option', 'buttons', {
				Close: function() {
					$(this).dialog('close');
				}
			});
			
			$("#dialog").dialog('open');
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			var msg = 
				"<div class='citedownload'>" +
				"<h3>Unknown</h3>" +  
		        "<p>Copyright status could not be determined due to data in the record being incomplete or inaccurate. " + 
		        "For more information please see: <a href='http://wiki.nla.gov.au//x/A7U'>how copyright status is determined</a>.</p>" +
		        "</div>";
	
			$("#dialogMsg").html(msg);
		
			$("#dialog").dialog('option', 'title', '<h3>Copyright Status</h3>');
			
			$("#dialog").dialog('option', 'buttons', {
				Close: function() {
					$(this).dialog('close');
				}
			});
			
			$("#dialog").dialog('open');
		}
	});
	
}

function focusOnGetting(id, tab) {
	var $tabs = $("#get");
	
	// close the dialog
	$("#dialog").dialog('close');
	
	// open the either the first tab or the supplied tab
	$tabs.tabs('option', 'selected', -1);
	$tabs.tabs('select', tab != "" ? tab : 0);
	
	var index = 0;
	while ($tabs.tabs('option', 'selected') == -1 && index < 10) {
		$tabs.tabs('option', 'selected', index++);
	}
	
	// move the user to the top of the tabs
	var offset = $tabs.offset().top - 15;
	if (offset > 0) {
		$('html,body').animate({scrollTop: offset}, 1000);
	}
}


function focusOnSearchbox() {
	if (document.getElementById("primarysearchbox")) {
		document.getElementById("primarysearchbox").focus();
    }
	else {
    	return false;
    }
}

sbdp.iniPushQueryToTabs = function () {
	function pushQueryToTabs($input) {
		$("#navcategories > li > a, #c-zones li a").each(function() {
			var $this = $(this);
			
			var name = $input.attr('name');
			
			switch ($input.attr('type')) {
				case 'text': 
					var value = $input.attr('value');
					break;
				case 'checkbox':
					var value = $input.attr('checked') ? $input.attr('value') : null;
					break;
				default:
					var value = null;
			}
			
			var href = $this.attr("href");
			var params = getUrlParams(href);

			if (value != null) {
				params[name] = value;
			} else {
				delete params[name];
			}
			
			// can't use $.param because it mangles spaces
			var q = [ ];
			for (var j in params)
				q[q.length] = j + '=' + encodeURIComponent(params[j]);

			href = href.replace(/\?.*/i, '');
			$this.attr("href", href + '?' + q.join("&"));
		});
	};

	$('#search input').each(function () {
		pushQueryToTabs($(this));
	}).blur(function (event) {
		pushQueryToTabs($(event.target));
	});
};

//Read a url's parameters and return them as an associative array.
function getUrlParams(url) {
	var map = {};
	
	var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		map[key] = decodeURIComponent(value);
	});
	
	return map; 
}

scrollelements = new Array();

sbdp.scrollto = function(id, scroll) {
	var $available = $(id);
	
	if (isUndefined(scroll) && scrollelements[id]) {
		if ($available.length > 0) {
			scrollelements[id] = false;
			
			var offset = $available.offset().top - 15;		
			if (offset > 0) {
				$('html,body').animate({scrollTop: offset}, 500);
			}
		}
	} else if (scroll) {
		if ($available.length > 0) {
			var offset = $available.offset().top - 15;		
			if (offset > 0) {
				$('html,body').animate({scrollTop: offset}, 500);
			}
		} else {
			scrollelements[id] = true;
		}
	}
};

sbdp.limitsummary = function(workid) {
	$('.summary').each(function(index) {
		var $summary = $(this);
		var words = $summary.text().split(" ");
		
		if (words.length > 250 && (!supportsStorage() || sessionStorage['limitsummary-' + index + "-" + workid] != "true")) {
			var displaywords = words.splice(0, 200);
			
			$summary.html(displaywords.join(" "));
			
			var $span = $(document.createElement('span'));
			$span.html(words.join(" "));
			$span.hide();
			
			var $morelink = $(document.createElement('a'));
			$morelink.attr("href", "#");
			$morelink.html("... [more]");
			$morelink.click(function() {
				$morelink.hide();
				$span.show();
				$span.css("display", "inline");
				if (supportsStorage()) { sessionStorage['limitsummary-' + index + "-" + workid] = "true"; }
				return false;
			});
			
			$summary.append(" ", $morelink, $span);
		}
	});
};

sbdp.limitothername = function(workid) {
	if (supportsStorage()) {
			
		var $dd = $('dd.peauothername');
		
		if ($dd.length > 5) {
			
			// Create more link
			var $morelink = $(document.createElement('a'));
			$morelink.attr("href", "#");
			$morelink.html("[more]");
			$morelink.click(function() {
				$moredd.hide();
				$lessdd.show();
				$dd.show();
				if (supportsStorage()) { sessionStorage['limitothername-' + workid] = "true"; }
				return false;
			});
			
			// Add the [More] link to the page
			var $moredd = $(document.createElement('dd'));
			$moredd.append($morelink);
			
			$($dd[$dd.length - 1]).after($moredd);
			
			// Create less link
			var $lesslink = $(document.createElement('a'));
			$lesslink.attr("href", "#");
			$lesslink.html("[less]");
			$lesslink.click(function() {
				$lessdd.hide();
				$moredd.show();
				$dd.slice(3).hide();
				if (supportsStorage()) { sessionStorage['limitothername-' + workid] = "false"; }
				return false;
			});
			
			// Add the [Less] link to the page
			var $lessdd = $(document.createElement('dd'));
			$lessdd.append($lesslink);
			
			$($dd[$dd.length - 1]).after($lessdd);
			
			// Handle display of [Less] and [More] links on page load
			if (sessionStorage['limitothername-' + workid] != 'true') {
				$dd.slice(3).hide();
				$lessdd.hide();
			} else {
				$moredd.hide();
			}
			
		}
		
	}
	
};

sbdp.findImageForPerson = function(personid, alttext, elename, posfunct) {
	$.getJSON(rootRef + '/people/' + personid + '/image', function(data) {
		var display = data[0];
		
		// create the image element
		var $img = $(document.createElement('img'));
		$img.attr({
			src: display.url,
			alt: alttext
		});
		$img.addClass('ssk-image');
		$img.load(function() {
			if (this.width == 1 && this.height == 1) 
				$(this).hide().parents(elename).addClass('nopreviewpic');
		});
		$img.error(function() {
			$(this).hide().parents(elename).addClass('nopreviewpic');
		});
		if (display.caption) $img.attr('title', display.caption);
		var $ele = $(document.createElement(elename)).addClass('thumbnail').append($img);
		
		posfunct($ele);
	});
};

sbdp.findSummaryImageForPerson = function(personid, extraqueryparams, alttext, elename, posfunct) {
	$.getJSON(rootRef + '/people/' + personid + '/image?cacheonly=true', function(data) {
		var display = data[0];
		
		// create the image element
		var $img = $(document.createElement('img'));
		$img.attr({
			src: display.url,
			alt: alttext
		});
		$img.load(function() {
			if (this.width == 1 && this.height == 1) 
				$(this).hide().parents(elename).addClass('nopreviewpic');
		});
		$img.error(function() {
			$(this).hide().parents(elename).addClass('nopreviewpic');
		});
		if (display.caption) $img.attr('title', display.caption);
		
		var $a = $(document.createElement('a'));
		$a.attr({
			href: rootRef + '/people/' + personid + '?' + extraqueryparams
		});
		$a.append($img);
		
		var $ele = $(document.createElement(elename)).addClass('thumbnail').append($a);
		
		posfunct($ele);
	});
};

sbdp.externallink = function(link) {
	var $link = $(link);
	var $extlink = $link.next('a.extlink');
	
	if ($link.parent(':not(".disableextlink")').length == 1 && $extlink.length == 0) {
		$extlink = $(document.createElement('a'));
		$extlink.attr({
			href: $link.attr('href'),
			title: 'Click here to open link in a new window',
			target: '_blank'
		});
		$extlink.addClass('extlink');
		$extlink.html('&nbsp;');
		
		$link.after($extlink);
	}
		
	$extlink.show();

	$link.parent().mouseleave(function() {
		$(this).children('.extlink').hide();
	});
};

// History related functions

// the default values
historyDefaults = new Array();
// the current status of component
historyStatus = new Array();

/* Disabled
 * 
// Bind an event to window.onhashchange that, when the history state changes,
// iterates over all tab widgets, changing the current tab as necessary.
$(window).bind('hashchange', function(e) {
	
	for (i in historyDefaults) {
		var idx = $.bbq.getState(i, true);
		sbdp.processStateChange(i, idx);
	}

});
*/

sbdp.triggerStateChange = function(i, currentidx) {
	var removeStates = new Array();
	
	for (id in historyDefaults) {
		var idx = null;
		if (id == i) 
			idx = currentidx;
		
		var removeState = sbdp.processStateChange(id, idx);
		if (removeState != null) removeStates[removeStates.length] = removeState;
	}
	
	if (removeStates.length > 0) $.bbq.removeState(removeStates);
	
};

sbdp.processStateChange = function(i, idx) {
	var removeState = null;
		
	if (isUndefined(historyStatus[i])) {
		historyStatus[i] = historyDefaults[i];
	}
	
	if (isUndefined(idx) || idx == null) {
		idx = $.bbq.getState(i, true);
		if (isUndefined(idx) || idx == null) {
			idx = historyStatus[i];
		} else {
			removeState = i;
		}
	}
	
	if (idx != historyStatus[i]) {
		if (i.match("tabs") || i == "get") {
			var $tab = $("#" + i);
			if (idx != $tab.tabs('option', 'selected')) {
				$tab.find('ul > li > a').eq(idx).triggerHandler('change');
			}
		} else if (i.match("alllibraries")) {
			sbdp.changeStateTab(i, idx);
		} else if (i.match("onlinesub")) {
			sbdp.changeStateTab(i, idx);
		} else if (i.match("emore")) {
			sbdp.loadEditions();
		} else if (i.match("rtop")) {
			sbdp.loadEdition("#" + i);
		}
	}
	
	historyStatus[i] = idx;
	
	return removeState;
};

sbdp.generateBookmarkURL = function(id) {
	var state = {};
	
	for (i in historyDefaults) {
		var def = historyDefaults[i];
		var status = historyStatus[i];
		
		if (!isUndefined(status) && def != status) {
			state[i] = status;
		}
	}
	
	var url = $.param.fragment(window.location.href, state);
	if (url.match('#$')) url = url.substring(0, url.length - 1);
	
	var $urlbox = $("#" + id).toggle().children("input").val(url).select();
};

function forceReloadOnBackButton() {
	$(window).unload(function() {
		$.cookie(refreshcookiename, 'true');
	});

}

function isUndefined(x) {var u; return x === u;};

function xmlEncode(x) {return x.replace(/&(?!(amp|lt|gt|apos|quot|#?\d+);)/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')};

function supportsStorage() {
	try {
		return 'sessionStorage' in window && window['sessionStorage'] !== null;
	} catch (e) {
		return false;
	}
}


function clearInstruction(ele) {

	if ($(ele).is(".instructiontxt")) {
		$(ele).removeClass("instructiontxt") ;
		$(ele).val("") ;
	//	$(ele).text("") ;
	}
}

var Tooltips = 
{
	init: function()
	{
		
		var links = $('#editions-grid ol a.previewable'); // Array of thumbnails that are linked
		var listItems = $('#editions-grid ol li'); // Total array of list items in grid view
		
		
		
		if (listItems.length > links.length) {
			
			$('#editions-grid').addClass('mixed'); // When there is a mix of images and no images
			
			for (var i = 0, ii = links.length; i < ii; i++)
			{
				$(links[i]).next('dl').removeClass('offscreen'); // show the dl's for each linked thumbnail
			}
		}
		else {  
			
			for (var i = 0, ii = links.length; i < ii; i++) // Set up listeners and styles for full grid of images
			{
				// hook up event listeners
				$(links[i]).bind("mouseover", Tooltips.showTipListener);
				$(links[i]).bind("focus", Tooltips.showTipListener);
				$(links[i]).bind("blur", Tooltips.hideTipListener);
				
				$(links[i]).next('dl').addClass('offscreen'); // hide the dl's for each thumbnail
			}
		}
		
		
		// Style grid thumbnails when js enabled
		if (links.length > 0) {	
			$('#editions-grid').removeClass('no-js');
			$('#editions-grid li').removeClass('ui-shdw');
		}
			
		// Close modal preview on body click
		$('html body').bind("click", Tooltips.hideTipListener);
	},
	

	showTipListener: function(event)
	{
		// show our tooltip
		Tooltips.showTip(this); //value of this is the link
	
		// block the browser's tooltip
		event.preventDefault();		
	},
	
	
	hideTipListener: function(event)
	{
		// hide our tooltip
		Tooltips.hideTip(this); //value of 'this' is the link ie. links[i]
	},
	

	showTip: function(link)
	{
		Tooltips.hideTip(); //close the preview box before displaying the refreshed one
	
		// Calculate the rendered image size
		var xydim = Tooltips.imageDimensions(link);
		//alert(xydim);
		var xdim = xydim[0];
		var ydim = xydim[1];
		
		// Debug - display xy in test div
		//$('#dim').replaceWith('<span id="dim">' + xydim + '</span>');
		
		
		var xypos = Tooltips.location(link);
		//alert(xypos);
			
		// Set location to display help text
		var coords = xypos;
		var xpos = coords[0];
		var ypos = coords[1];
		
		// Display xy in test div
		$('#xy').replaceWith('<span id="xy">' + xypos + '</span>');

		// Calculate the offset for non IE browsers
		var yoffset = (ypos - ydim);
		// Debug - display xy in test div
		//$('#ydim').replaceWith('<span id="ydim">' + yoffset + '</span>');

		
		// Calculate x position of modal preview
		var xposModal = (xpos - ((215 - xdim)/2));
		// debug x pos modal
		$('#xypos').replaceWith('<span id="xypos">' + xposModal + '</span>');
		
		// Set absolute position of details dialogue	
		if (xposModal <=0) {
			$('#ui-modal-preview').css('left', 0); // for portrait images next to the left
		}
		else {
			$('#ui-modal-preview').css('left', xpos - ((215 - xdim)/2));
		}
		
		
		
		if ($.browser.msie && $.browser.version == 7.0) {
			$('#ui-modal-preview').css('top', ypos - 14);
		}
		else {
			$('#ui-modal-preview').css('top', yoffset - 3);
		}
		
		var linkdetails = $(link).next('dl').parent().html();
		//alert(linkdetails);
		$('#ui-modal-preview').html(linkdetails);
		$('#ui-modal-preview dl').removeClass('offscreen');		
		$('#ui-modal-preview').fadeIn(100);
		
	},

	
	hideTip: function(link)
	{
		$('#ui-modal-preview').hide();
		$('#ui-modal-preview').empty();

	},
	
	location: function(link)
	{
		// Calculate position to display help/error text
		var $link = $(link);
		var linkPos = $link.position(); // Get position of the clicked help icon
		var xpos = (Math.round(linkPos.left));
		var ypos = (Math.round(linkPos.top));
		var coords = [ xpos, ypos ];
		return coords;
	},
	
	
	imageDimensions: function(link)
	{
		// Calculate position to display help/error text
		var image = $(link).children('img');
		var width = image.width();
		var height = image.height();
		var dimensions = [ width, height ];
		return dimensions;
	}
	
};

var RowHighlight =
{
	init: function()
	{
		
		var rows = $('.tbl-editions .ui-border-bottom'); // Array of table rows
			
		for (var i = 0, ii = rows.length; i < ii; i++) // Set up listeners and styles for full grid of images
			{
				// hook up event listeners
				$(rows[i]).bind("mouseover", RowHighlight.highlightShowListener);
				$(rows[i]).bind("mouseout", RowHighlight.highlightHideListener);
				$(rows[i]).bind("focus", RowHighlight.highlightShowListener);
				$(rows[i]).bind("blur", RowHighlight.highlightHideListener);
				
				//$(rows[i]).next('dl').addClass('offscreen'); // hide the dl's for each thumbnail
			}
	},
	

	highlightShowListener: function(event)
	{
		RowHighlight.highlightShow(this);
		
		event.preventDefault();		
	},
	
	
	highlightHideListener: function(event)
	{
		RowHighlight.highlightHide(this);
	},
	

	highlightShow: function(row)
	{
		// Do the highlight
		$(row).css('background-color','#FFFAD0');
	},

	
	highlightHide: function(row)
	{
		$(row).css('background-color','');
	}
	
};

var contextualHelp = {
	init: function() {

		var buyerList = $('.list-buy'); //get all the buy lists on the page

		
		if (buyerList.hasClass('.hide-more-info')) {
			
			//alert('BOOM');
			// hide moreInfo content when JS enabled and list is set to .hide-more-info
			//var moreInfoContainers = $('.hide-more-info .buy-desc');
			var moreInfoContainers = $('.hide-more-info .inline-help-text');
			
			//$('.hide-more-info .inline-help-text').css('color','#f00');
			//alert('moreInfoContainers: ' + moreInfoContainers.length);			
			
			for (var j = 0, jj = moreInfoContainers.length; j < jj; j++)
			{
				$(moreInfoContainers[j]).addClass('hide ui-crnr-sml notice-inline');
				
				// add the moreInfo icon/link before the content
				var moreInfoLink = "<a title='More info' class='helpi' href='#'>More info</a>";
				$(moreInfoContainers[j]).before(moreInfoLink);
			}
			
		}
				
		// Bind inline help
		var btnInlineHelp = $('.helpi');		
		$(btnInlineHelp).bind("click", contextualHelp.inlineHelpListener);
		
		// Bind external help
		var btnExternalHelp =$('.helpe');
		$(btnExternalHelp).bind("click", contextualHelp.externalHelpListener);

	},
	
		
	inlineHelpListener: function(event) {
		contextualHelp.show(this);
		
		event.preventDefault();
	},
	
	
	externalHelpListener: function(event) {
		contextualHelp.openExternalHelp(this);
		
		event.preventDefault();
	},


	show: function(link) {
		
		//var toShow = $(link).next('.buy-desc');
		var toShow = $(link).next('.inline-help-text');
		$(toShow).toggle();
	},
	
	
	openExternalHelp: function(link) {
		
		var w = window.open(link.href, "myWindowName", "width=800, height=600, resizeable=yes, toolbar=yes, menubar=yes, scrollbars=yes");
	    w.focus();
	
	}
	
};


var SmoothScroll =
{
	init: function(trg)
	{
		var links = $(trg);
		for (var i = 0, ii = links.length; i < ii; i++)
		{
			// hook up event listeners
			$(links[i]).bind("click", SmoothScroll.scrollToListener);
			
		}
		
	},
	
	scrollToListener: function(event) {
		event.preventDefault();
		SmoothScroll.scrollTo(this);
		SmoothScroll.highlightDiv(this);
	},
	
	scrollTo: function(link) {
		var link = $(link).attr('href');
		
		$('html, body').animate({scrollTop:$(link).offset().top}, 1100);
		$(link  + ' .ui-btn').focus();
	},
	
	highlightDiv: function(link) {
		var div = $(link).attr('href');
		
		div = div.substring(1,div.length);
		$('#' + div).css('background-color','#FCF57A');
		$('#' + div).stop().animate({backgroundColor:'#ffffff'}, 4500);

	}

};

var FacetPanel =
{
	init: function()
	{
		var facetBtn = $('#btn-facets');

		// hook up event listener
		$(facetBtn).bind("click", FacetPanel.toggleFacetPanelListener);
	},

	
	toggleFacetPanelListener: function(event)
	{
		// determine whether panel is open or closed
		if ($('#facetPanel').is(":visible")) {
			FacetPanel.hideFacetPanel();
		} 
		else {
			FacetPanel.showFacetPanel();
		}
		event.preventDefault();
	},


	showFacetPanel: function(link)
	{
		$('#facetPanel').fadeIn("fast");
		$('#limits').width('80%');
		$('#editions').width('80%');
	
	},
	
	hideFacetPanel: function(link)
	{
		
		$('#facetPanel').hide();
		$('#limits').width('100%');
		$('#editions').width('100%');
	}
	
};


var ie7FloatFix =   // Remove when IE7 is not supported
{
	init: function()
	{
		if ($.browser.msie && $.browser.version <= 7) {
			
			var $h1 = $('.scrnwork h1');
			var $mosaic = $('.scrnwork .mosaic');
			var $uapanel = $('.scrnwork .get-ua');
			
			// Adjust top margin of mosaic on work,edition & get screens
			if ($mosaic.length == 1) {
				var mosaicAdjYPos = ((ie7FloatFix.location($h1) - ie7FloatFix.location($mosaic)) + 'px');
				$mosaic.css('margin-top', mosaicAdjYPos);
			}
			
			// Adjust top margin of right column - work screen only
			if ($uapanel.length == 1) {
				var uapanelAdjYPos = ((ie7FloatFix.location($h1) - ie7FloatFix.location($uapanel)) + 'px');
				$uapanel.css('margin-top', uapanelAdjYPos);
			}
		
		}
		
	},

	
	location: function(element)
	{
		// Calculate Y position of elements
		var $element = $(element);
		var elementPos = $element.position();
		var ypos = (Math.round(elementPos.top));
		return ypos;
	}
	
};


sbdp.updateCoverArtMosaic = function(workid) {
	var key = 'mosaic' + workid;
	var css = [ "imgfirst", "imgsecond", "imgthird" ];
	var imgs = window.sessionStorage.getItem(key);
	
	if (imgs != null) {
		if (imgs == "hide") {
			$('ul.mosaic').addClass('hide');
		} else {
			var imgurls = JSON.parse(imgs);
			
			var i = 0;
			$(imgurls).each(function() {
				$('.' + css[i++] + ' img').attr("src", this);
			});
		}
	}
		
	$('#editions img.coverart, #editions-grid img.coverart').imagesLoaded(function($images, $proper, $broken) {
		var pos = 0;
		
		var newimgurls = new Array();
		$images.each(function() {
			if (this.naturalWidth > 10 && this.naturalHeight > 10) {
				var src = this.src;
				$(this).css("display", "");
			
				if (pos < 3 && $.inArray(src, newimgurls) == -1) {
					if (src.match(/&size=$/) != null) {
						src += "medium";
					}
					newimgurls.push(src);
					
					$('.' + css[pos++] + ' img').attr("src", src);
				}
			} else {
				$(this).css("display", "none");
			}
		});
		
		if (newimgurls.length > 0) {
			// remove so entries as the list is too long
			var i = 0, pos = 0;
			while (i++ < 50 && window.sessionStorage.length > 200) {
				var k = window.sessionStorage.key(pos);
				if (k.indexOf("mosaic") > -1) {
					window.sessionStorage.removeItem(k);
				} else {
					pos++;
				}
			}
			
			window.sessionStorage.setItem(key, JSON.stringify(newimgurls));
		} else if ($images.length > 0) {
			window.sessionStorage.setItem(key, "hide");
			$('ul.mosaic').addClass('hide');
		}

	});
};

sbdp.ieRoundedButtons = function() {
	if ($.browser.msie && $.browser.version <= 8 ) { 
		var btnCornerHTML = '<span class="ui-ie-crnr crnr-tl ui-ie-btn-tl"></span><span class="ui-ie-crnr crnr-tr ui-ie-btn-tr"></span><span class="ui-ie-crnr crnr-bl ui-ie-btn-bl"></span><span class="ui-ie-crnr crnr-br ui-ie-btn-br"></span>';
		$('.ui-btn').each(function() {
			var $this = $(this);
			
			var btnClasses = $this.attr('class'); // Gets the classes for each 'ui-btn'
			var colourIndex = btnClasses.lastIndexOf('ui-btn-'); // Finds the starting position of the last colour class

			var colour = $this.attr('class').substr(colourIndex).match(/ui-btn-[a-z]+/i)[0];

			$this.append(btnCornerHTML);
			$this.children("span").addClass(colour.replace("ui", "ui-ie"));
		});
		
	}
};

sbdp.ieBreadcrumb = function() {
	if ($.browser.msie && $.browser.version <= 8 ) { 
		
		$('.breadcrumbs li a').each(function() {
			var $this = $(this);
			$this.after(' &gt;');
		});
		
	}
};
