(function($){

 $.fn.spamless = function(options) {

		var defaults = {
					  maxTime: 2000,
					  spf: function() {}
					  };

  		var options = $.extend(defaults, options);

		 var Robot = function() {
			this.startTime;
			this.endTime;
			this.first = false;
		 }
		 var f=true;
		 Robot.prototype = {
			 getTimer : function() {
				var d = new Date();
				var n = d.getTime();
				return n;
			 },
			 startTimer : function() {
				if(this.first == false){
				this.first = true;
				this.startTime = this.getTimer();
				}


			 },
			 endTimer : function(e) {
				this.endTime = this.getTimer();
				if(this.startTime < this.endTime - options.maxTime){
					e.preventDefault();
					if(f==true){
					f=false;
					options.spf.call(this);
					}
					return false;
				}else{
					return false;
				}

			 }
		 }

		var identity;
		function checkFi(obj){
			if($(":input[name=" + identity+"]").val() != "type your email"){
				obj.preventDefault();
				if(f==true){
					f=false;
					options.spf.call(this);
				}
			}
		}


       return this.each(function() {
			var robot = new Robot();
			identity = String(robot.getTimer());

			after_this = $(this).find('input:first-child');
			var nofield = $("<div>").insertAfter(after_this);

			//var nofield = $("<div>").insertAfter(this + ':input:first-child');
			nofield.css({"display":"none"});
			nofield.html('<input class="' + identity + '" name="' + identity + '" value="type your email">');

			$(this).find('input').each(function( index ) {
				$(this).bind("mousedown", function (e){
					robot.startTimer();
					//removeBind();
				})
			});

			$(this).bind("submit", function(e) {
				robot.endTimer(e);
				checkFi(e);
            });

        });

     };

})(jQuery);