function TrackSitecoreEvent(pageEventName, pageEventText, pageEventData, pageEventDataKey) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "/SitecoreClientTracking.aspx?pageEventName=" + encodeURIComponent(pageEventName) + "&pageEventText=" + encodeURIComponent(pageEventText) + "&pageEventData=" + encodeURIComponent(pageEventData) + "&pageEventDataKey=" + encodeURIComponent(pageEventDataKey) + "", true);
    xmlhttp.send();
}