$(document).ready(function (e) {

    $("#contactByEmail_no_emails").click(function () {
        var width = 320;
        var posX = $(this).offset().left - $(document).scrollLeft() - width + $(this).outerWidth();
        var posY = $(this).offset().top - $(document).scrollTop() + $(this).outerHeight() - 70;
        $("#no_emails_dialog").css({ 'background-color': "#f2f2f2" });
        $("#no_emails_dialog").dialog({ autoOpen: false, height: 150 });
        
        $("#no_emails_dialog").dialog('open');
        $('#no_emails_dialog').dialog('option', 'position', [posX, posY]);
    });

    $("#contactByEmail").click(function () {
        var width = 320;
        var posX = $(this).offset().left - $(document).scrollLeft() - width + $(this).outerWidth();
        var posY = $(this).offset().top - $(document).scrollTop() + $(this).outerHeight() - 70;
        $("#dialog").css({ 'background-color': "#f2f2f2" });
        $("#dialog").dialog({ autoOpen: false, height: 570 });
        $('#contact_form').show();
        $('#contact_form_message').hide();
        
        $("#contact_form #captcha a").click();

        $("#dialog").dialog('open');
        $('#dialog').dialog('option', 'position', [posX, posY]);
        $('#send_email_form').validate({
            rules: {
                contactFrom: {
                    required: true,
                    email: true
                },
                contactEmailBody: {
                    required: true
                }
            },
            messages: {
                contactFrom: {
                    required: window.detailResource ? window.detailResource.FromEmailRequired : "From email address in required.",
                    email: window.detailResource ? window.detailResource.InValidEmailAddress : "Please enter a valid email address,"
                },
                contactEmailBody: {
                    required: window.detailResource ? window.detailResource.ContactEmailBodyRequired : "Description is required."
                }
            }
        });
    });

    $(function () {
        $("#send_email_form").submit(requestRegisterUser);
        $("#contactFrom").keypress(onRegisterEmailFieldChange);
        $("#contactEmailBody").keypress(onRegisterEmailFieldChange);
        $('#CaptchaInputText').keypress(onRegisterEmailFieldChange);
    });
    
   

    
    if ($.trim($('#article_image-box').html()) == '') {
        $('#article_image-box').hide();
    }

    // Init facebook
    window.fbAsyncInit = function () {

        // init the FB JS SDK - subscribe to event
        FB.Event.subscribe('edge.create',
            function (response) {
                //alert('You liked the URL: ' + response);
                LogUserActivityFBAndGoogle('facebook');
            }
        );
    };
    
    // Init facebook api asynchronosely
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});


/// #################
//  Named js functions
/// #################
function onRegisterEmailFieldChange() {
    $("#errorMessagePanel").empty().hide();
}

function requestRegisterUser(event) {
    event.preventDefault();
    var valid = $("#send_email_form").valid();
    if (valid) {
        var postData = $("#send_email_form").serializeArray();
        var actionUrl = $("#send_email_form").attr('action');
        executeAjaxPost(actionUrl, postData,
                    processResult, processCaptchaError);
    }
    else {
        $("#captcha a").click();
    }
}


function executeAjaxPost(url, data, successHandlerFn, errorHandlerFn) {
    errorHandlerFn = errorHandlerFn || $("#errorMessagePanel").html(message).show(); ;

    $.ajaxSetup({
        beforeSend: function () {
            // show processsing gif here
            $("#contactBusyIndicator").show();
        },
        complete: function () {
            // hide processsing gif here
            $("#contactBusyIndicator").hide();
        }
    });

    $.ajax({
        type: "POST",
        url: url,
        //dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (result) {
            if (result) {
                if (result.Success === false) {
                    // Handled exception
                    errorHandlerFn(result, data);
                } else {
                    $("#contactEmailBody").val('');
                    $("#CaptchaInputText").val('');
                    successHandlerFn(result, data);
                }
            } else {
                //unhandled exception occured
                var message = window.detailResource ? window.detailResource.ResponseNull : "Response is null";
                $("#errorMessagePanel").html(message).show();
            }
        },
        error: function (jsonError) {
            //Unhandled exception
            errorHandlerFn(jsonError.statusText, true, data);
        }
    });
}
    
function processCaptchaError(result) {
    //handle CAPTCHA validation error
    if (result) {
        if (!result.IsValidCaptcha) {
            $("#errorMessagePanel").html(result.Message).show();
            //set new values.
            $('#CaptchaDeText').attr('value', result.DeText);
            $('#CaptchaImage').attr('src', result.Image);

        } else {

            var errorMessage = window.detailResource ? window.detailResource.CAPTCHAFlagNotSet : "CAPTCHA flag not set";

            $("#errorMessagePanel").html(errorMessage).show();
        }
    }
}

function processResult(result) {
    $("#errorMessagePanel").hide();
    $('#contact_form').hide();
    $('#contact_form_message').show();
    $('#contact_form_message').html("<div id='message'></div>");

    var successMessage = window.detailResource ? window.detailResource.EmailSendSuccessfully : 'Email sent sucessfully!';

    $('#message').html(successMessage)
        .hide()
        .fadeIn(1500, function () {
            $('#message');
            $("#dialog").dialog('close');
        });
}

//Logs social media user activity (Facebook, GooglePluse, Twitter, LinkedIn, Sharethis Email)
//event - Event of calling function Ex: click
//service - Calling service Example: facebook, googlePluse, twitter, linkedin, email etc..
function LogUserActivity(event, service) {
    //alert("event called is:" + event); //the event type. Only "click" is supported.     
    //alert("service called is:" + service); //the service shared by user. e.g. facebook
    $.ajax({
        url: userActivityUrl,
        data: { context: articleId, activity: service.toLowerCase() },
        success: function(result) {
        } 
    });
}
function LogUserAddThisActivity(event, service) {
    $.ajax({
        url: userActivityUrl,
        data: { context: articleId, activity: event.data.service.toLowerCase() },
        success: function (result) {
        }
    });
}

//Track GooglePluse user activity for ShareThis.
function trackGooglePluse(data) {
    if (data && data.state == 'on') {
        LogUserActivity(null, 'googlePlus');
    }
}
//Track GooglePluse user activity for AddThis.
function trackGooglePluseAddThis(data) {
    if (data && data.state == 'on') {
        LogUserAddThisActivity(null, 'googlePlus');
    }
}
function LogUserActivityFBAndGoogle(service) {
    //alert("event called is:" + event); //the event type. Only "click" is supported.     
    //alert("service called is:" + service); //the service shared by user. e.g. facebook
    $.ajax({
        url: userActivityUrl,
        data: { context: articleId, activity: service.toLowerCase() },
        success: function (result) {
        }
    });
}

