define(['jquery','cadence'], function($) {

  // Selector Plugin Constructor
  CADENCE.Modal = function(element, options) {
    this.el = element;
    this.$el = $(this.el);
    this.currentRequest=null;
    this.defaults = {
      url: null,
      $modal: null,
      initd: false,
      size: false,
      cssClass: false,
      title: false,
      style:false,
      imgWidth: null,
      winWidth: null
    };
    this.settings = $.extend(this.settings, this.defaults || {}, options);
    this.init();
    this.adjustableModal();
  };

  /*
   * Initialize the plugin
   */
  CADENCE.Modal.prototype.init = function() {
    var that = this;
    this.url = this.$el.data('modal-content-url');
    this.size = this.$el.data('modal-size') != undefined ? this.$el.data('modal-size') : false;
    this.title = this.$el.data('modal-title') != undefined ? this.$el.data('modal-title') : false;
    this.cssClass = this.$el.data('modal-class') != undefined ? this.$el.data('modal-class') : false;
    this.style = (this.$el.data('modal-style') != undefined || this.$el.data('modal-style') != '') ? this.$el.data('modal-style') : false;
    if (this.url) {

            if (this.title == "Contact Us"){
                this.$el.off().on('touchstart click', function(e) {
                e.preventDefault();
                    that.click.apply(that, [e]);
              });
            }else {
          this.$el.off().on('click', function(e) {
                e.preventDefault();
                    that.click.apply(that, [e]);
              });
            }
        }
      };

  CADENCE.Modal.prototype.click = function(e) {

    e.preventDefault();
    var that = this;
    if (CADENCE.Modals[this.settings.id] && this.initd) {
      this.show();
    } else {
      if (/\.(png|jpg|jpeg|gif)/i.test(this.url)) {
        var img = $('<img />').attr('src', this.url);
        this.parseData($('<div class="text-center" />').append(img));
        this.show();
      } if (/\.json$/i.test(this.url)) {
          if (window.XDomainRequest) {
              var xdr = new XDomainRequest();
              xdr.open("get", this.url);
              xdr.onload = function() {
            var xData = xdr.responseText;
                that.parseData.apply(that, [xData]);
                that.show.apply(that);
              }
              xdr.send();
          } else {
          $.ajax({
            url: this.url,
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
              that.parseJSONData.apply(that, [data]);
              that.show.apply(that);
            }
          });
          }
      } else {
          if (window.XDomainRequest) {
              var xdr = new XDomainRequest();
              xdr.open("get", this.url);
              xdr.onload = function() {
                var xData = xdr.responseText;
                that.parseData.apply(that, [xData]);
                that.show.apply(that);
              }
              xdr.send();
          } else {
            if(this.currentRequest && this.currentRequest.readystate != 4){
              this.currentRequest.abort();
            }
            this.currentRequest =$.ajax({
            url: this.url,
            dataType: 'html',
            success: function(data, textStatus, jqXHR) {
              that.parseData.apply(that, [data]);
                that.show.apply(that);
            }
          });
        }
      }
    }
  };

  CADENCE.Modal.prototype.parseJSONData = function(data) {
    var addTitle = false;
    var $title = $();
    var $subtitle = $();
    var $content = $();
    if (data['jcr:content'] != undefined) {
      var jcr = data['jcr:content'];
      if (jcr.metadata != undefined) {
        if (jcr.metadata['dc:title'] != "") {
          addTitle = true;
          $title = $('<h4 class="modal-title"></h4>').text(jcr.metadata['dc:title']);
        }
        if (jcr.metadata['dc:description'] != "") {
          addTitle = true;
          $subtitle = $('<h6 class="modal-title"></h6>').text(jcr.metadata['dc:description']);
        }
        if (jcr.metadata['dc:format'] != "") {
          if (jcr.metadata['dc:format'].indexOf('video/') === 0) {
            $content = this.renderVideo(jcr);
          }
        }
      }
    }

    this.parseData($content, addTitle ? $title.add($subtitle) : null);
  };

  CADENCE.Modal.prototype.renderVideo = function(jcr) {
    var playerId = (jcr.metadata['dc:limelight_playerId']) ? jcr.metadata['dc:limelight_playerId'] : 'limelight_player_' + CADENCE.Modals.length + 1;
    var playerForm = (jcr.metadata['dc:limelight_playerId']) ? jcr.metadata['dc:limelight_playerId'] : 'Player';
    return '\
<div class="LimelightEmbeddedPlayer"> \
<object type="application/x-shockwave-flash" id="' + playerId + '" name="' + playerId + '" class="LimelightEmbeddedPlayerFlash" data="//video.limelight.com/player/loader.swf"> \
<param name="movie" value="//video.limelight.com/player/loader.swf"/> \
<param name="wmode" value="window"/> \
<param name="allowScriptAccess" value="always"/> \
<param name="allowFullScreen" value="true"/> \
<param name="flashVars" value="mediaId=' + jcr.metadata['dc:limelight_videoId'] + '&amp;playerForm='+playerForm+'"/> \
</object><script>LimelightPlayerUtil.initEmbed("' + playerId + '");</script></div>';
  };

  CADENCE.Modal.prototype.parseData = function(data, header) {
    var $modal = $(data).hasClass('modal') ? $(data) : ($('.modal', data).length ? $('.modal', data).first() : false);
    if (!$modal) {
      var $newModal = $('<div class="modal fade">');
      var $modalDialog = $('<div class="cdn-nxtgn-modal modal-dialog">');
      var $modalContent = $('<div class="modal-content">');
      var $modalBody = $('<div class="modal-body">').append(data);
      if (this.style) {
          $modalBody = $('<div class="modal-body" style="' + this.style +'">').append(data);
      }
      var $modalCloseButton = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="/content/dam/cadence-www/global/en_US/images/site-images/icons/navigation-icons/icon_close.png"></button>');
      // create an empty jquery object
      var $headerContent = $();
      if (header != null) {
        $headerContent = header;
        // if no close button in the header... add one
        if (!$('.close', $headerContent).length) {
          $headerContent = $modalCloseButton.add(header);
        }
      } else {
        // if no header specified, add the close button and a blank title to the modal
        $headerContent = $headerContent.add($modalCloseButton).add('<h4 class="modal-title">&nbsp;</h4>')
      }
      var $modalHeader = $("<div class='modal-header'/>").append($headerContent);
      $modalContent.append($modalHeader).append($modalBody);
      $modalDialog.append($modalContent);
      $newModal.append($modalDialog);
      this.$modal = $newModal;
    } else {
      this.$modal = $modal;
    }
    if (this.size) {
      var size = '';
      switch (this.size) {
        case 'adjustable':
          size = 'modal-adjustable';
          break;
        case 'xtraLarge':
          size = 'modal-xl';
          break;
        case 'large':
          size = 'modal-lg';
          break;
        case 'small':
          size = 'modal-sm';
          break;
      }
      $('.modal-dialog', this.$modal).addClass(size);
    }
    if (this.cssClass) {
      this.$modal.addClass(this.cssClass);
    }
    if (this.title) {
      $('.modal-title', this.$modal).text(this.title);
    }
    $('body').append(this.$modal);
    CADENCE.publish(CADENCE.eventType.INIT, [this.$modal]);
    this.initd = true;
  };

  CADENCE.Modal.prototype.show = function() {
    if (this.$modal) {
      if ($('.modal.in').length) {
        var modalParts = ['header', 'body', 'footer'];
        for (var i = 0; i < modalParts.length; i++) {
          if ($('.modal-' + modalParts[i], this.$modal).length) {
            $('.modal.in .modal-' + modalParts[i]).replaceWith($('.modal-' + modalParts[i], this.$modal));
            CADENCE.publish(CADENCE.eventType.INIT, [this.$modal]);
          }
        }
        if (this.$modal.hasClass('large-modal')) {
          $('.modal.in').addClass('large-modal');
        } else
        if (this.$modal.hasClass('medium-modal')) {
          $('.modal.in').addClass('medium-modal');
        } else {
          $('.modal.in').removeClass('large-modal').removeClass('medium-modal');
        }
      } else {
        this.$modal.modal('show');
      }

      //force pause of video on modal close
      var $video = $('.LimelightEmbeddedPlayer object,.LimelightEmbeddedPlayer video', this.$modal);
      if ($video.length) {
        var that = this;
        this.$modal.off('hidden.bs.modal').on('hidden.bs.modal', function(e){
          try{
            $video[0].doPause();
            // try pausing according to limelight docs
            $('.LimelightEmbeddedPlayer object,.LimelightEmbeddedPlayer video')[0].doPause();
          } catch(e) {
            try{
              // try pausing based on instinct
              $('.LimelightEmbeddedPlayer object,.LimelightEmbeddedPlayer video')[0].pause();

              for (var i=0;i<$video.length;i++){
             $('.LimelightEmbeddedPlayer object,.LimelightEmbeddedPlayer video')[i].doPause();
              }
            } catch(e) {
              // pause the DAM video already!
              $('.LimelightEmbeddedPlayer video').length && $('.LimelightEmbeddedPlayer video').attr('src', $('.LimelightEmbeddedPlayer video').attr('src'));
            }
          }
        });
      }
    }
  };

  // Container of CADENCE.Modals on the current page
  CADENCE.Modals = [];

  CADENCE.openModalUrl = function(url) {
    var $modal = $('<div>').data('modal-content-url', url);
    ($modal.CADENCE_Modal()).trigger('click');
  };

  CADENCE.Modal.prototype.adjustableModal = function() {
      $("#multimed-withshare #image-withshare .optionalImage a, .right_text .buttons-row #btn-full-size").click(function() {
          $(".imagelarge .modal-dialog.modal-adjustable .modal-content .modal-body img").ready(function() {
          $(".imagelarge .modal-dialog.modal-adjustable .modal-content .modal-body img").load(function() {
              if ((this.imgWidth == null) || (this.imgWidth == 0)) {
                this.imgWidth = $(this).get(0).naturalWidth;
                  if (this.imgWidth < 600) {
                      this.imgWidth = 600;
                  }
                  if ((this.imgWidth != null) && (this.imgWidth != 0)) {
                    this.winWidth = $(window).width();
                      if ((this.winWidth != null) && (this.winWidth != 0)) {
            this.winWidth = (this.winWidth * 95) / 100;
                      }
                      if (this.imgWidth > this.winWidth) {
                          this.imgWidth = this.winWidth;
                      }
                  $(".imagelarge .modal-dialog.modal-adjustable .modal-content").width(this.imgWidth+"px");
                    $(".imagelarge .modal-dialog.modal-adjustable").width(this.imgWidth+"px");
                    
                  }
              }

              if ((this.imgHeight == null) || (this.imgHeight == 0)) {
                  this.imgHeight = $(this).get(0).naturalHeight;
                    this.topMargin = 0;
                    if (this.imgHeight < 600) {
                        this.topMargin = ((600 - this.imgHeight) / 2);
            this.topMargin = this.topMargin - ((this.topMargin * 20)/100);
                        this.imgHeight = 600;
                    }
                    if ((this.imgHeight != null) && (this.imgHeight != 0)) {
                        $(".imagelarge .modal-dialog.modal-adjustable .modal-content .modal-body").css("top", this.topMargin+"px");
                    $(".imagelarge .modal-dialog.modal-adjustable .modal-content").height(this.imgHeight+"px");
                        $(".imagelarge .modal-dialog.modal-adjustable").height(this.imgHeight+"px");
                  }
              }
          });
      });
      });
  };

  //Make a jQuery plugin out of it
  $.fn.CADENCE_Modal = function(options) {
    return this.each(function() {
      if (!$.data(this, 'CADENCE.Modal')) {
        var modalId = 'modal-id-' + (CADENCE.Modals.length + 1);
        options = $.extend({}, {id: modalId}, options);
        var modal = new CADENCE.Modal(this, options);
        $.data(this, 'CADENCE.Modal', modal);
        CADENCE.Modals[modalId] = modal;
      }
    });
  };

  return CADENCE.Modal;
});
