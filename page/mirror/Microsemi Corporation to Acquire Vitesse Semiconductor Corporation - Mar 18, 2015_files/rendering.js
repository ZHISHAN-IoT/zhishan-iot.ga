(function(a){a.fn.deepestHeight=function(){var b=0;a(this).each(function(){b=Math.max(b,a(this).height())}).height(b)};a.fn.clearForm=function(){return this.each(function(){a(":input",this).each(function(){var a=this.type,b=this.tagName.toLowerCase();if(a=="text"||a=="password"||b=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=false;else if(b=="select")this.value=""})})}})(jQuery)