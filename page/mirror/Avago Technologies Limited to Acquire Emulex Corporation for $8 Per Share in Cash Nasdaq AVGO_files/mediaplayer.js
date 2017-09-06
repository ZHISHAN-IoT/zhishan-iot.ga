var verifyToken;

//Video player code
$(document).ready(function () {

    $(".mediaplayer").each(function () {

        // Setup the attributes added to the div.
        var elMediaPlayer = $(this);
        var src = elMediaPlayer.attr("src");
        var url = elMediaPlayer.attr("url");
        var vidId = elMediaPlayer.attr("vidid");
        var base = elMediaPlayer.attr("base");
        var height = elMediaPlayer.attr("height");
        var poster = elMediaPlayer.attr("poster");
        if (height == null) {
            height = 300;
        }
        var width = elMediaPlayer.attr("width");
        if (width == null) {
            width = 360;
        }

        // Setup attributes used for tracking. Most a meant to prevent over creation of track items.
        var lastTime = -1;
        var stopLogged = false;
        var started = false;

        // Get the verify token.
        verifyToken = $('input[name="__RequestVerificationToken"]').first().val();

        // Package up the data for the player.
        var mediaData = {
            width: width,
            height: height,
            src: src,
            flashPlayerPath: base + '/Scripts/MediaPlayer/includes/NasdaqFlashPlayer.swf',
            silverlightPlayerPath: base + '/Scripts/MediaPlayer/includes/ProgressiveDownloadPlayer.xap',
            autoPlay: false,
            poster: poster
        };

        // Create the player instance.
        elMediaPlayer.nasdaq_media_player(mediaData);

        // Occurs when control is loaded and ready for JS interaction
        //updateEventLog("loaded") 
        elMediaPlayer.bind("loaded", function (el, data) {

            var datum = {
                __RequestVerificationToken: verifyToken,
                videoId: vidId,
                videoAction: "1",
                videoTimeSpan: elMediaPlayer.controller().currentTime()
            };

            executeAjaxPost(url, datum);
        });

        // Occurs when a stream command occurs
        // updateEventLog2("command") 
        // There must be an id on the div tag that hold the media for this to work.
        elMediaPlayer.bind("player_state_change", function (el, data) {

            var videoActionId = -1;
            stopLogged = false;
            var time = elMediaPlayer.controller().currentTime();

            if (data == "paused" && time > 0) {
                videoActionId = 4;

            } else if (data == "playing" && started) {
                
                videoActionId = 2;
                pauseThePlayers(elMediaPlayer);
               
            } else if (data == "startnewitem") {
                
                videoActionId = 5;
                pauseThePlayers(elMediaPlayer);
                started = true;
            }

            if (videoActionId != -1) {
                var datum = {
                    __RequestVerificationToken: verifyToken,
                    videoId: vidId,
                    videoAction: videoActionId,
                    videoTimeSpan: elMediaPlayer.controller().currentTime()
                };

                executeAjaxPost(url, datum);
            }
        });

        // Timer to check time.
        setInterval(checkMediaTime, 30000);

        // Take the heartbeat of the videoplayer.
        function checkMediaTime() {
            var time = elMediaPlayer.controller().currentTime();
            var datum;

            // Only log a heartbeat if the video has started.
            if (time > 0) {
                if (lastTime != time) {
                    lastTime = time;

                    datum = {
                        __RequestVerificationToken: verifyToken,
                        videoId: vidId,
                        videoAction: "6",
                        videoTimeSpan: elMediaPlayer.controller().currentTime()
                    };

                    executeAjaxPost(url, datum);
                } else if (!stopLogged) {

                    // If to heartbeats pass with no time change then the video has stopped.
                    datum = {
                        __RequestVerificationToken: verifyToken,
                        videoId: vidId,
                        videoAction: "3",
                        videoTimeSpan: elMediaPlayer.controller().currentTime()
                    };

                    executeAjaxPost(url, datum);
                    stopLogged = true;
                }
            }
        }
    });


    // Create the video action track item.
    function executeAjaxPost(url, data) {
        $.ajax({
            type: "POST",
            url: url,
            //dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            data: data
        });
    }

    // Stop all other videos on the page when a new one starts.
    function pauseThePlayers(mediaPlayer) {
        
        $(".mediaplayer").each(function () {
            if ($(this).attr("id") != mediaPlayer.attr("id")) {
                
                try {
                    if (typeof $(this).controller().pause() != 'undefined') {
                        $(this).controller().pause();
                    }
                }
                catch(e)
                {}
            }
        });

        return;
    }

});