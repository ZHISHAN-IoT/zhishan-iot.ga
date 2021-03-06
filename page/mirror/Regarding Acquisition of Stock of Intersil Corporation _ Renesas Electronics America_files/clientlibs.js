/**
 * ユーザ名前を取得する
 *
 * @param p_ssoUrl
 * @param p_instanceName
 * @param p_initParam
 */
function userLogin(p_ssoUrl, p_instanceName, p_initParam) {
	/**
	 * get initial data
	 *
	 */
	this.init = function(){
		var htmlUsrBx = '';
		var htmlAccBx = '';
		if(p_ssoUrl == null || p_ssoUrl == '') {
			$("#userBox").html(htmlUsrBx);
			htmlAccBx = '<a href="/api/loginDispatcher?source=refresh"><span>' + p_initParam['signIn'] + '</span></a>';
			$("#accountBox").html(htmlAccBx);
			return;
		}
		$.ajaxSetup({xhrFields: {withCredentials: true}});
		// get json data
		$.ajax({
			type: 'GET',
			data:p_initParam,
			url: p_ssoUrl,
			dataType: 'jsonp',
			jsonp: '_jsonpCallback',
			jsonpCallback: p_instanceName + '.jsonpCallback_success',
			cache: true,
			crossDomain:true,
			timeout:30000,
			success: function(){
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				// get instance by name
				var searchInstance = eval(p_instanceName);
				// time out
				if(textStatus == 'timeout') {
					return;
				}
			},
			complete : function(XMLHttpRequest, textStatus) {
			}
		});
	};

	/**
	 * jsonp callback function
	 *
	 */
	this.jsonpCallback_success = function(data){
	    var obj = this;
	    var landed = this.getCookie("landed");
	    if(typeof data.userNm != "undefined"
	        && data.userNm != null
	        && data.userNm === ""
            && landed != null
            && landed === "0"
            && typeof data.authenticationUrl != "undefined"
            && data.authenticationUrl != null
            && data.authenticationUrl != ""){
    	        $.ajax({
    	            type: 'GET',
    	            url: data.authenticationUrl,
    	            dataType: "json",
    	            crossDomain : true,
    	            success: function(data){
    	                obj.setUserNm(data);
    	            },
    	            error: function(XMLHttpRequest, textStatus, errorThrown){
    	                obj.setUserNm();
    	            }
    	        });
	    } else {
	        obj.setUserNm(data);
	    }
	};

	/**
	 * get cookie by name
	 */
	this.getCookie = function(c_name){
	    if(document.cookie.length>0){
	        var c_start = document.cookie.indexOf(c_name + "=");
	        if(c_start != -1){
	            c_start += c_name.length + 1;
	            var c_end = document.cookie.indexOf(";",c_start);
	            if(c_end == -1) {
	                c_end = document.cookie.length;
	            }
	            return unescape(document.cookie.substring(c_start, c_end));
	        }
	    }
	    return "";
	}

	/**
	 * 登録したユーザ名前と更新通知アイコンを表示する
	 * @param p_userNm
	 */
	this.setUserNm = function(p_userNm){

		var signedIn = true;
		if(jQuery.isEmptyObject(p_userNm)){
			signedIn = false;
		} else if(p_userNm.userNm == null || p_userNm.userNm == ''){
			signedIn = false;
		}

		var htmlUsrBx = '';
		var htmlAccBx = '';

		if(signedIn){
			htmlUsrBx = '<a href="/' + p_initParam['aemLocale'] + '/mypage.html"><span>' + p_userNm.userNm + ((p_initParam['aemLocale'] == 'ja-jp') ? "さん" : "") + '</span></a>';
			htmlAccBx = '<a href="' + p_initParam['signOutUrl'] + '"><span>' + p_initParam['signOut'] + '</span></a>';
			//更新通知フラグ
			if(p_userNm.updateNotifyFlag == 1){
			  $("#userBox").removeClass("noAlert");
			} else {
			  $("#userBox").addClass("noAlert");
			}
		} else {
			htmlAccBx = '<a href="/api/loginDispatcher?source=refresh"><span>' + p_initParam['signIn'] + '</span></a>';
		}
		$("#userBox").html(htmlUsrBx);
		$("#accountBox").html(htmlAccBx);
	};
};

