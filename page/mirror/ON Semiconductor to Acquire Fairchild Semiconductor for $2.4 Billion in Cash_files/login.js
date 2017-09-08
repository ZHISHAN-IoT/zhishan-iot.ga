var keepLoginDialog = false;
var logging = false;
var successCallbackName = null;
var currentMousePos = { x: -1, y: -1 };

$(window).load(function(e){
	$(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
//        console.log(currentMousePos.x,currentMousePos.y)
    });
});

function setKeepLoginDialog(bool){
//	console.log(bool);
	if (!bool) { 
    	bool = isIn();
    }    
//    console.log(bool);
	keepLoginDialog = bool;
}

function hideLoginDialog(e){
    setTimeout(function(){
        if (!(keepLoginDialog || logging)){
        	$('#loginPassword').focus();
        	$('#LoginBoxId:visible').hide();
        }
    },200);
};

function onclickLoginWrapper(id, url, leftOffsetForLoginDialog, up) {
    if (userLogged()){
        window.location=url;
    } else {
        setKeepLoginDialog(true);
        return showLoginDialog(id, url, leftOffsetForLoginDialog, up);
    }
}


function showLoginDialog(id, url, leftOffsetForLoginDialog, up) {
//    alert('event: ' + event +' fce: ' + fce +' url: ' + url +' leftoffset: ' + leftOffsetForLoginDialog+' up: '+up);
    if (userLogged()){
        return false;
    } else {
        if (url){
            $('#hiddenInputReferrer').attr("value", url);
// doesnt work in ie8    $('#hiddenInputReferrer').val(url);
        } else {
            $('#hiddenInputReferrer').attr("value", $(location).attr('href'));
        }
        try {
            setPosition(id, leftOffsetForLoginDialog, up);
        } catch (exception){
            location.href=$('#LoginFormId').attr('action');  // login.do
        }
        $('#myonLoginButtonId').off('click').on('click', function() {
            submitLogin(url);
            return false;
        });
//        $('#loadingLoginId').hide();
        $('#LoginBoxId').show();
//        $('#loadingLogin').-toggle();
        if ($('#loginBox').val() === ''){
           $('#loginBox').focus();
        } else {
            $('#loginPassword').focus();
        }
    }
    return false;
};

function setPosition (id, leftOffsetForLoginDialog, up) {
    var leftOffset = 0;
    if (leftOffsetForLoginDialog != null){
        try {
            leftOffset = parseInt(leftOffsetForLoginDialog, 10);
        } catch (exception){
        }
    }

    var left = 0;
    left = $('#'+id).offset().left;
    left = left + leftOffset;

    var parentTop = 0;
    var parentBottom = 0;
    if (up == 'true'){
        parentTop = $('#'+id).offset().top - $('#LoginBoxId').outerHeight(true) + 1;  // -1 for border width
    } else {
        parentBottom = $('#'+id).offset().top + $('#'+id).outerHeight(true) - 1; // -1 for border width
    }

    $('#LoginBoxId').css("left", left);

    if (up == 'true'){
        $('#LoginBoxId').css("top", parentTop);
        $('#LoginBoxId').css("border-bottom-right-radius", "");
        $('#LoginBoxId').css("border-bottom-left-radius", "");
        $('#LoginBoxId').css("border-top-right-radius", "5px");
        $('#LoginBoxId').css("border-top-left-radius", "5px");
    } else {
        $('#LoginBoxId').css("top", parentBottom);
        $('#LoginBoxId').css("border-bottom-right-radius", "5px");
        $('#LoginBoxId').css("border-bottom-left-radius", "5px");
        $('#LoginBoxId').css("border-top-right-radius", "");
        $('#LoginBoxId').css("border-top-left-radius", "");
    }
};


function isIn(){
//	setTimeout(function(){	
		leftin = $('#LoginBoxId').position().left;
		rightin = $('#LoginBoxId').position().left + $('#LoginBoxId').outerWidth(true);
		topin = $('#LoginBoxId').position().top;
		bottomin = $('#LoginBoxId').position().top + $('#LoginBoxId').outerHeight(true); 

//		console.log('left:  '+ leftin +' top: ' + topin + ' bottom: ' + bottomin + ' right: ' + rightin);
//		console.log('mouse x: ' + currentMousePos.x + ' mouse y: ' +currentMousePos.y);

//		console.log('leftin '+leftin+ ' < currentMousePos.x ' +currentMousePos.x +  '< rightin '+rightin + ' && topin ' + topin + '< currentMousePos.y ' + currentMousePos.y + '< bottomin ' +bottomin);
		
		if ((leftin < currentMousePos.x - 20) && (currentMousePos.x + 20 < rightin) && (topin < currentMousePos.y - 20) && (currentMousePos.y + 20 < bottomin)){
			 return true;
		 } else {
			 return false;
		 }
//	},50);
}

function submitLogin(url){
    logging = true;
    showCircle();
    try {
        ajaxLoginIntoMyon(url);
    } catch (exception){
        submitFormUsualWay();
        return false;
    }
    return false;
}


function submitFormUsualWay() {
    $('#hiddenInputAjax').attr("value", "false");
    $('#LoginFormId').attr('action', $('#hiddenWelcomeAction').val());
    $('#LoginFormId').submit();
}

function ajaxLoginIntoMyon(url) {
    $('#hiddenInputAjax').attr("value", "true");
    $.support.cors = true;
    var jqxhr = $.ajax({
        type: 'POST',
        url: $('#hiddenAjaxAction').val(),
        data: $('#LoginFormId').serialize(),
        crossDomain: 'true',
        xhrFields: {
              withCredentials: true
        },
        success: function (data, textStatus, jqXHR) {
            loginSuccess(data, url);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            submitFormUsualWay();
            return false;
        }
    });
}

function setupSuccessCallback(callback){
    successCallbackName = callback;
}

function successCallback(){
    if (successCallbackName != null){
        var fn = window[successCallbackName];
        if (typeof fn === "function") fn();
    }
}

function loginSuccess(data, url) {
    if (data.substring(0,2) == 'OK'){
        data = data.substring(5);
        $('#myonLoginTableId').html(data);
        $('#LoginFormId').find('input[type=password]').attr("value", "");
        $('#loadingLoginId').hide();
        $('#LoginBoxId').hide();
        if (url != null && url !=''){
            location.href=url;
        }
        pushToGoogleAnalytics();
        successCallback();
        logging = false;
        return false;
    } else {
        submitFormUsualWay();
        return false;
    }
}

function pushToGoogleAnalytics() {
    dataLayer.push({'event': 'USR-MYON-LOGIN'});
}

function userLogged(){
    var logged = ($('#logoutLinkId').length != 0);
    return logged;
}

function showCircle(){
    var top = $('#loginInnerTableId').position().top;
    var left = $('#loginInnerTableId').position().left;

    $('#loadingLoginId').css("top", top);
    $('#loadingLoginId').css("left", left);

    $('#loadingLoginId').width($('#loginInnerTableId').width());
    $('#loadingLoginId').height($('#loginInnerTableId').outerHeight());

    //$('#loadingCircleId').attr("height", $('#loginInnerTableId').height());
    //$('#loadingCircleId').attr("width", $('#loginInnerTableId').height());

    $('#loadingLoginId').show();
}
