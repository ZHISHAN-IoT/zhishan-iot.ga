//Get domain
var currentDomain = window.location.host;
var newDomain = currentDomain;

//used for shop.amd.com
var urlArray =  top.location.pathname.split( '/' );
if (urlArray[2] != null){
	var urlSub = urlArray[2].toLowerCase();
} else {
	var urlSub = "";}
//choose correct css depending on domain
var css = "";
switch (newDomain.toLowerCase()) {
case "products.amd.com":
	 css = '#cookieContent {line-height:20px;font-family:Calibri;font-size:14px;} #popClose {top:-15px;width:34px;height:34px;right:-15px;text-indent:-1000em;display:block;position:absolute;background-image:url(http://www.amd.com/Style%20Library/Images/close_icon.png);} @font-face{font-family: KlavikaMediumCondensed;src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot);src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot?#iefix) format(embedded-opentype), url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCondensed.woff) format(woff);} #cookieTitle {font-family:KlavikaMediumCondensed, Calibri, Arial, sans-serif;line-height:26px;font-size:25px;font-weight:normal;margin-top:0px;margin-right:10px;margin-bottom:10px;margin-left:0px;color:#000;} .AMDArrowLink {padding-top:0px;padding-bottom:10px;padding-left:0px;background-image:none;color:#FFF;} .AMDArrowLink li {margin:0;padding:0;text-decoration:none;background-image:none;} .AMDArrowLink a {color:#f26522;text-decoration:none;}';
	break;
case "sites.amd.com":
	 css = '#cookieContent {line-height:20px;font-family:Calibri;font-size:14px;} #popClose {top:-15px;width:34px;height:34px;right:-15px;text-indent:-1000em;display:block;position:absolute;background-image:url(http://www.amd.com/Style%20Library/Images/close_icon.png);} @font-face{font-family: KlavikaMediumCondensed;src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot);src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot?#iefix) format(embedded-opentype), url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCondensed.woff) format(woff);} #cookieTitle {font-family:KlavikaMediumCondensed, Calibri, Arial, sans-serif;line-height:26px;font-size:25px;font-weight:normal;margin-top:-5px;margin-right:10px;margin-bottom:5px;margin-left:0px;color:#000;} .AMDArrowLink {padding-top:19px;padding-bottom:30px;padding-left:40px;background-image:none;color:#fff;} .AMDArrowLink li {margin:0;padding:0;text-decoration:none;background-image:none;} .AMDArrowLink a {color:#f26522;text-decoration:none;}';
	break;
case "support.amd.com":	
	 css = '#cookieContent {line-height:20px;font-family:Calibri;font-size:14px;} #popClose {top:-15px;width:34px;height:34px;right:-15px;text-indent:-1000em;display:block;position:absolute;background-image:url(http://www.amd.com/Style%20Library/Images/close_icon.png);} #cookieTitle {font-family:KlavikaMediumCondensed, Calibri, Arial,sans-serif;line-height:26px;font-size:25px;font-weight:normal;margin-top:0px;margin-right:10px;margin-bottom:5px;margin-left:0px;color:#000;} .AMDArrowLink {padding-top:19px;padding-bottom:30px;padding-left:40px;} .AMDArrowLink li {margin:0;padding:0;text-decoration:none;list-style-type:none;} .AMDArrowLink a {color:#f26522;text-decoration:none;}';
	break;
case "shop.amd.com":
	if (urlSub === "all"){
	css  = '#cookieContent {line-height:20px;font-family:Calibri;font-size:14px;} #popClose {top:-15px;width:34px;height:34px;right:-15px;text-indent:-1000em;display:block;position:absolute;background-image:url(http://www.amd.com/Style%20Library/Images/close_icon.png);} @font-face{font-family: KlavikaMediumCondensed;src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot);src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot?#iefix) format(embedded-opentype), url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCondensed.woff) format(woff);} #cookieTitle {font-family:KlavikaMediumCondensed, Calibri, Arial, sans-serif;line-height:26px;font-size:25px;font-weight:normal;margin-top:10px;margin-right:10px;margin-bottom:10px;margin-left:0px;color:#000;} .AMDArrowLink {padding-top:25px !important;padding-bottom:18px !important;padding-left:30px !important;line-height:20px !important;background-image:none;} .AMDArrowLink li {margin:0;padding:0;text-decoration:none;background-image:none !important;} .AMDArrowLink a {color:#f26522;text-decoration:none;} .AMDArrowLink a:hover{text-decoration:none;}';
	} else {
	css  = '#cookieContent {line-height:20px;font-family:Calibri;font-size:14px;} #popClose {top:-15px;width:34px;height:34px;right:-15px;text-indent:-1000em;display:block;position:absolute;background-image:url(http://www.amd.com/Style%20Library/Images/close_icon.png);} @font-face{font-family: KlavikaMediumCondensed;src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot);src: url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCond.eot?#iefix) format(embedded-opentype), url(http://www.amd.com/Style%20Library/fonts/KlavikaWebMediumCondensed.woff) format(woff);} #cookieTitle {font-family:KlavikaMediumCondensed, Calibri, Arial, sans-serif;line-height:26px;font-size:25px;font-weight:normal;margin-top:10px;margin-right:10px;margin-bottom:10px;margin-left:0px;color:#000;} .AMDArrowLink {padding-top:25px !important;padding-bottom:18px !important;padding-left:30px !important;line-height:11px !important;background-image:none;} .AMDArrowLink li {margin:0;padding:0;text-decoration:none;background-image:none !important;} .AMDArrowLink a {color:#f26522;text-decoration:none;} .AMDArrowLink a:hover{text-decoration:none;}';}
	break;
case "search.amd.com":
	 css = '#cookieContent {line-height:20px;font-family:Calibri;font-size:14px;} #popClose {top:-15px;width:34px;height:34px;right:-15px;text-indent:-1000em;display:block;position:absolute;background-image:url(http://www.amd.com/Style%20Library/Images/close_icon.png);} #cookieTitle {font-family:KlavikaMediumCondensed, Calibri, Arial,sans-serif;line-height:26px;font-size:25px;font-weight:normal;margin-top:0px;margin-right:10px;margin-bottom:10px;margin-left:0px;color:#000;} .AMDArrowLink {padding-top:19px;padding-bottom:30px;padding-left:40px;} .AMDArrowLink li {margin:0;padding:0;text-decoration:none;list-style-type:none;} .AMDArrowLink a {color:#f26522;text-decoration:none;}';
	break;
default:
css = "";

}
/*

Author:	 Rob Reid
Website: http://www.strictly-software.com
Description: According to new EU law all sites that use cookies must inform their site visitors that they will be stored on their computer and offer them a choice
	     whether or not to continue with or without cookies. This code can be placed in a global footer within your site and it will run whatever page is first hit.
*/
(function(){

	EUCookie = {
		
		// name of the cookie to tell us they have accepted cookies
		CookieName : "EUCookie",
		
		// value for the cookie
		CookieValue : "Agree",

		// text for the I Agree button
		AgreeText : "I Agree", 

		// text for the I Disagree button
		DisagreeText : "I Disagree",

		// the URL to take the user to if they disagree to cookie use
		RedirectLink : "http://blog.strictly-software.com/",

		// width of popup
		MsgWidth : "400px",

		// height of popup
		MsgHeight : "100px",

		// if set to true will always show even if cookies cannot be set at this point in time
		AlwaysShowMsg : true, 

		// if you are really paranoid about cookies being deleted and coming back it double checks their deletion and checks for the creation of new cookies or the enabling
		// of cookies by toolbars and browsers during a page load. So if cookies were disabled by the Web Dev Toolbar and then re-enabled the popup would show once detected
		ParanoidMode : true, 

		// how many milliseconds to check for cookies to re-appear or be re-enabled in Paranoid mode
		ParanoidCheckTimer : 10000, 

		// If you want to hide scrollbars when the lightbox is shown then set it to either BODY, HTML or "" for nothing and the scrollbars will be set to auto once confirmed
		HideScroll : "", 

		PageSize : {},
		
		// Return translation of lightbox content
		FindMsg : function() {
			var pathArray = [];
			pathArray = window.location + "/";
			pathArray = pathArray.split( '/' );
			var urlLocale = pathArray[3];
			var translation = "<div id='cookieContent'><a id='popClose'  onclick='EUCookie.AgreeToUse();'>Close</a><h3 id='cookieTitle'>";
			switch (urlLocale.toLowerCase()) {
				case "us": 
				case "en-us": 
				translation = translation + "Why We Use Cookies</h3>This site uses cookies to make your browsing experience more convenient and personal. Cookies store useful information on your computer to help us improve the efficiency and relevance of our site for you. In some cases, they are essential to making the site work properly. By accessing this site, you consent to the use of cookies.  For more information, please see one of the links below.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/en-us/who-we-are/privacy'>View AMD's privacy policy</a></li><li><a href='http://www.amd.com/en-us/who-we-are/cookies'>View AMD's cookie policy</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Continue to the site";
				break;
				case "br": 
				case "pt-br": 
				translation = translation + "Por que usamos cookies</h3>Este site usa cookies para deixar sua navega&ccedil;&atilde;o mais pr&aacute;tica e personalizada. Os cookies armazenam informa&ccedil;&otilde;es &uacute;teis no seu computador para ajudar-nos a melhorar a efici&ecirc;ncia e a relev&acirc;ncia do nosso site para voc&ecirc;. Em alguns casos, eles s&atilde;o essenciais para que o site funcione adequadamente. Ao acessar este site, voc&ecirc; autoriza o uso de cookies. Para obter mais informa&ccedil;&otilde;es, veja um dos links abaixo.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/pt-br/who-we-are/privacy'>Exibir a pol&iacute;tica de privacidade da AMD</a></li><li><a href='http://www.amd.com/pt-br/who-we-are/cookies'>Exibir a pol&iacute;tica de cookies da AMD</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Prosseguir com o site";
				break;
				case "cn": 
				case "zh-cn":
				translation = translation + "&#x6211;&#x4EEC;&#x4E3A;&#x4EC0;&#x4E48;&#x4F7F;&#x7528; Cookie</h3>&#x672C;&#x7F51;&#x7AD9;&#x4F7F;&#x7528; cookie &#x7684;&#x76EE;&#x7684;&#x662F;&#x4E3A;&#x60A8;&#x63D0;&#x4F9B;&#x66F4;&#x52A0;&#x7B80;&#x6377;&#x548C;&#x4E2A;&#x6027;&#x5316;&#x7684;&#x4E0A;&#x7F51;&#x4F53;&#x9A8C;&#x3002;Cookie &#x5C06;&#x6709;&#x7528;&#x7684;&#x4FE1;&#x606F;&#x5B58;&#x50A8;&#x5728;&#x60A8;&#x7684;&#x7535;&#x8111;&#x4E0A;&#xFF0C;&#x53EF;&#x5E2E;&#x52A9;&#x6211;&#x4EEC;&#x6539;&#x5584;&#x60A8;&#x6D4F;&#x89C8;&#x6211;&#x4EEC;&#x7F51;&#x7AD9;&#x7684;&#x6548;&#x7387;&#x4EE5;&#x53CA;&#x5BF9;&#x60A8;&#x7684;&#x5B9E;&#x7528;&#x6027;&#x3002;&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5B83;&#x4EEC;&#x662F;&#x7F51;&#x7AD9;&#x6B63;&#x5E38;&#x8FD0;&#x884C;&#x6240;&#x5FC5;&#x4E0D;&#x53EF;&#x5C11;&#x7684;&#x3002;&#x5982;&#x679C;&#x60A8;&#x8BBF;&#x95EE;&#x672C;&#x7F51;&#x7AD9;&#xFF0C;&#x5373;&#x8868;&#x793A;&#x60A8;&#x540C;&#x610F;&#x6211;&#x4EEC;&#x4F7F;&#x7528; cookie&#x3002;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF0C;&#x8BF7;&#x70B9;&#x51FB;&#x4E0B;&#x9762;&#x4EFB;&#x4E00;&#x94FE;&#x63A5;&#x3002;<ul class='AMDArrowLink'><li><a href='http://www.amd.com/zh-cn/who-we-are/privacy'>&#x9605;&#x8BFB; AMD &#x9690;&#x79C1;&#x653F;&#x7B56;</a></li><li><a href='http://www.amd.com/zh-cn/who-we-are/cookies'>&#x9605;&#x8BFB; AMD cookie &#x653F;&#x7B56;</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>&#x7EE7;&#x7EED;&#x4F7F;&#x7528;&#x7F51;&#x7AD9;";
				break;
				case "de": 
				case "de-de": 
				translation = translation + "Wozu wir Cookies verwenden</h3>Diese Website nutzt Cookies, um Ihnen Ihren Besuch komfortabler und pers&ouml;nlicher zu gestalten. Cookies speichern hilfreiche Information auf Ihrem Computer und helfen uns, f&uuml;r Sie die Effizienz und Relevanz dieser Website stetig zu verbessern. In einigen F&auml;llen sind sie f&uuml;r eine einwandfreie Funktion der Website unerl&auml;sslich. Mit dem Zugriff auf diese Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie unter den folgenden Links.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/de-de/who-we-are/privacy'>AMDs Richtlinien zum Datenschutz anzeigen</a></li><li><a href='http://www.amd.com/de-de/who-we-are/cookies'>AMDs Richtlinien zu Cookies anzeigen</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Weiter zur Website";
				break;
				case "es-xl": 
				case "la": 
				translation = translation + "Por qu&eacute; usamos cookies</h3>Este sitio usa cookies para que tu experiencia de navegaci&oacute;n sea m&aacute;s c&oacute;moda y personal. Las cookies almacenan informaci&oacute;n &uacute;til acerca de tu computadora para ayudarnos a mejorar la eficiencia y la relevancia de nuestro sitio para ti. En algunos casos son esenciales para hacer que el sitio funcione adecuadamente. Al acceder a este sitio, debes consentir el uso de cookies. Para obtener m&aacute;s informaci&oacute;n, consulta uno de los enlaces a continuaci&oacute;n.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/la/who-we-are/privacy'>Consulta la pol&iacute;tica de privacidad de AMD</a></li><li><a href='http://www.amd.com/la/who-we-are/cookies'>Consulta la pol&iacute;tica de cookies de AMD</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Contin&uacute;a al sitio";
				break;
				case "fr": 
				case "fr-fr": 
				translation = translation + "Pourquoi utilisons-nous des cookies ?</h3>Ce site utilise des cookies pour faciliter et personnaliser votre navigation. Les cookies enregistrent des informations utiles sur votre ordinateur pour nous aider &agrave; am&eacute;liorer l'efficacit&eacute; et la pertinence de notre site &agrave; votre &eacute;gard. Dans certains cas, ils sont essentiels au bon fonctionnement du site. En acc&eacute;dant au site, vous acceptez d'utiliser des cookies. Pour plus d'informations, voir les liens ci-dessous.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/fr-fr/who-we-are/privacy'>Afficher la politique de confidentialit&eacute; d'AMD</a></li><li><a href='http://www.amd.com/fr-fr/who-we-are/cookies'>Afficher la politique de cookie d'AMD</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Continuer vers le site";
				break;
				case "it":
				case "it-it": 
				translation = translation + "Perch&eacute; utilizziamo i cookie</h3>Questo sito utilizza i cookie per semplificare e personalizzare l'esperienza di navigazione. I cookie memorizzano informazioni utili sul computer per aiutarci a migliorare l'efficienza e la rilevanza del nostro sito. In alcuni casi sono essenziali per il corretto funzionamento del sito. L'accesso a questo sito implica il consenso all'utilizzo dei cookie. Per maggiori informazioni, utilizza uno dei seguenti link.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/it-it/who-we-are/privacy'>Visualizza l'informativa sulla privacy di AMD</a></li><li><a href='http://www.amd.com/it-it/who-we-are/cookies'>Visualizza l'informativa sui cookie di AMD</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Vai al sito";
				break;
				case "ja-jp":
				case "jp":
				translation = translation + "Cookie&#x3092;&#x4F7F;&#x7528;&#x3059;&#x308B;&#x7406;&#x7531;</h3>&#x3053;&#x306E;&#x30B5;&#x30A4;&#x30C8;&#x3067;&#x306F;&#x3001;&#x30D6;&#x30E9;&#x30A6;&#x30BA;&#x4F53;&#x9A13;&#x3092;&#x4FBF;&#x5229;&#x3067;&#x30D1;&#x30FC;&#x30BD;&#x30CA;&#x30EB;&#x306A;&#x3082;&#x306E;&#x306B;&#x3059;&#x308B;&#x305F;&#x3081;&#x3001;Cookie&#x3092;&#x4F7F;&#x7528;&#x3057;&#x3066;&#x3044;&#x307E;&#x3059;&#x3002;Cookie&#x306F;&#x3001;&#x30B5;&#x30A4;&#x30C8;&#x306E;&#x52B9;&#x7387;&#x6027;&#x3084;&#x30E6;&#x30FC;&#x30B6;&#x30FC;&#x3068;&#x306E;&#x95A2;&#x9023;&#x6027;&#x3092;&#x5411;&#x4E0A;&#x3055;&#x305B;&#x308B;&#x305F;&#x3081;&#x306E;&#x60C5;&#x5831;&#x3092;&#x30B3;&#x30F3;&#x30D4;&#x30E5;&#x30FC;&#x30BF;&#x30FC;&#x306B;&#x4FDD;&#x5B58;&#x3057;&#x307E;&#x3059;&#x3002;Cookie&#x304C;&#x306A;&#x3051;&#x308C;&#x3070;&#x3001;&#x30B5;&#x30A4;&#x30C8;&#x304C;&#x6B63;&#x3057;&#x304F;&#x6A5F;&#x80FD;&#x3057;&#x306A;&#x3044;&#x3068;&#x3044;&#x3046;&#x5834;&#x5408;&#x3082;&#x3042;&#x308A;&#x307E;&#x3059;&#x3002;&#x3053;&#x306E;&#x30B5;&#x30A4;&#x30C8;&#x306B;&#x30A2;&#x30AF;&#x30BB;&#x30B9;&#x3059;&#x308B;&#x3053;&#x3068;&#x306B;&#x3088;&#x308A;&#x3001;Cookie&#x306E;&#x4F7F;&#x7528;&#x306B;&#x540C;&#x610F;&#x3057;&#x305F;&#x3068;&#x307F;&#x306A;&#x3055;&#x308C;&#x307E;&#x3059;&#x3002;&#x8A73;&#x7D30;&#x306B;&#x3064;&#x3044;&#x3066;&#x306F;&#x3001;&#x4EE5;&#x4E0B;&#x306E;&#x30EA;&#x30F3;&#x30AF;&#x3092;&#x3054;&#x89A7;&#x304F;&#x3060;&#x3055;&#x3044;&#x3002;<ul class='AMDArrowLink'><li><a href='http://www.amd.com/ja-jp/who-we-are/privacy'>AMD&#x306E;&#x30D7;&#x30E9;&#x30A4;&#x30D0;&#x30B7;&#x30FC;&#x30DD;&#x30EA;&#x30B7;&#x30FC;&#x3092;&#x8868;&#x793A;&#x3059;&#x308B;</a></li><li><a href='http://www.amd.com/ja-jp/who-we-are/cookies'>AMD&#x306E;Cookie&#x306E;&#x30DD;&#x30EA;&#x30B7;&#x30FC;&#x3092;&#x8868;&#x793A;&#x3059;&#x308B;</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>&#x30B5;&#x30A4;&#x30C8;&#x306E;&#x30D6;&#x30E9;&#x30A6;&#x30BA;&#x3092;&#x7D9A;&#x884C;&#x3059;&#x308B;";
				break;
				case "ko-kr": 
				case "kr": 
				translation = translation +  "&#xCFE0;&#xD0A4;&#xB97C; &#xC0AC;&#xC6A9;&#xD558;&#xB294; &#xC774;&#xC720;</h3>&#xC774; &#xC0AC;&#xC774;&#xD2B8;&#xB294; &#xBCF4;&#xB2E4; &#xD3B8;&#xB9AC;&#xD55C; &#xB9DE;&#xCDA4;&#xD615; &#xAC80;&#xC0C9;&#xC744; &#xC9C0;&#xC6D0;&#xD558;&#xAE30; &#xC704;&#xD574; &#xCFE0;&#xD0A4;&#xB97C; &#xC0AC;&#xC6A9;&#xD569;&#xB2C8;&#xB2E4;. &#xCFE0;&#xD0A4;&#xB294; &#xC0AC;&#xC774;&#xD2B8;&#xC758; &#xD6A8;&#xC728;&#xC131;&#xACFC; &#xAD00;&#xB828;&#xC131;&#xC744; &#xAC1C;&#xC120;&#xD558;&#xB294; &#xB370; &#xB3C4;&#xC6C0;&#xC774; &#xB420; &#xC218; &#xC788;&#xB3C4;&#xB85D; &#xCEF4;&#xD4E8;&#xD130;&#xC5D0; &#xB300;&#xD55C; &#xC720;&#xC6A9;&#xD55C; &#xC815;&#xBCF4;&#xB97C; &#xC800;&#xC7A5;&#xD569;&#xB2C8;&#xB2E4;. &#xB54C;&#xB85C; &#xC0AC;&#xC774;&#xD2B8;&#xC758; &#xC62C;&#xBC14;&#xB978; &#xB3D9;&#xC791;&#xC744; &#xC704;&#xD574; &#xCFE0;&#xD0A4;&#xAC00; &#xD544;&#xC218;&#xC801;&#xC73C;&#xB85C; &#xC694;&#xAD6C;&#xB418;&#xAE30;&#xB3C4; &#xD569;&#xB2C8;&#xB2E4;. &#xC774; &#xC0AC;&#xC774;&#xD2B8;&#xC5D0; &#xC811;&#xC18D;&#xD558;&#xBA74; &#xCFE0;&#xD0A4; &#xC0AC;&#xC6A9;&#xC5D0; &#xB3D9;&#xC758;&#xD558;&#xB294; &#xAC83;&#xC785;&#xB2C8;&#xB2E4;. &#xC790;&#xC138;&#xD55C; &#xC815;&#xBCF4;&#xAC00; &#xD544;&#xC694;&#xD558;&#xBA74; &#xC544;&#xB798; &#xB9C1;&#xD06C; &#xC911; &#xD558;&#xB098;&#xB97C; &#xD074;&#xB9AD;&#xD558;&#xC2ED;&#xC2DC;&#xC624;.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/ko-kr/who-we-are/privacy'>AMD&#xC758; &#xAC1C;&#xC778; &#xC815;&#xBCF4; &#xBCF4;&#xD638; &#xC815;&#xCC45; &#xBCF4;&#xAE30;</a></li><li><a href='http://www.amd.com/ko-kr/who-we-are/cookies'>AMD&#xC758; &#xCFE0;&#xD0A4; &#xC815;&#xCC45; &#xBCF4;&#xAE30;</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>&#xC0AC;&#xC774;&#xD2B8; &#xACC4;&#xC18D; &#xC0AC;&#xC6A9;";
				break;
				case "pl": 
				case "pl-pl":
				translation = translation +  "Dlaczego korzystamy z plik&oacute;w cookie</h3>EWitryna ta wykorzystuje pliki cookie, aby u&#x0142;atwi&#x0107; u&#x017C;ytkownikowi korzystanie z niej oraz w celu personalizacji udost&#x0119;pnianych funkcji. W plikach cookie, zapisywanych na komputerze u&#x017C;ytkownika, przechowywane s&#x0105; przydatne informacje, kt&oacute;re pozwalaj&#x0105; nam poprawia&#x0107; wydajno&#x015B;&#x0107; us&#x0142;ug oraz dostosowywa&#x0107; zawarto&#x015B;&#x0107; witryny do indywidualnych potrzeb u&#x017C;ytkownika. W niekt&oacute;rych przypadkach pliki te s&#x0105; wymagane do prawid&#x0142;owego dzia&#x0142;ania witryny. Wchodz&#x0105;c na witryn&#x0119;, zgadzasz si&#x0119; na wykorzystywanie plik&oacute;w cookie. Wi&#x0119;cej informacji mo&#x017C;na uzyska&#x0107; dzi&#x0119;ki podanym poni&#x017C;ej &#x0142;&#x0105;czom.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/pl/who-we-are/privacy'>Wy&#x015B;wietl Polityk&#x0119; prywatno&#x015B;ci firmy AMD</a></li><li><a href='http://www.amd.com/pl/who-we-are/cookies'>Wy&#x015B;wietl Zasady stosowania plik&oacute;w cookie firmy AMD</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Przejd&#x017A; do witryny";
				break;
				case "ru": 
				case "ru-ru": 
				translation = translation + "&#x041F;&#x043E;&#x0447;&#x0435;&#x043C;&#x0443; &#x043C;&#x044B; &#x0438;&#x0441;&#x043F;&#x043E;&#x043B;&#x044C;&#x0437;&#x0443;&#x0435;&#x043C; &#x0444;&#x0430;&#x0439;&#x043B;&#x044B; cookie?</h3>&#x042D;&#x0442;&#x043E;&#x0442; &#x0432;&#x0435;&#x0431;-&#x0441;&#x0430;&#x0439;&#x0442; &#x0438;&#x0441;&#x043F;&#x043E;&#x043B;&#x044C;&#x0437;&#x0443;&#x0435;&#x0442; &#x0444;&#x0430;&#x0439;&#x043B;&#x044B; cookie &#x0434;&#x043B;&#x044F; &#x043E;&#x0431;&#x0435;&#x0441;&#x043F;&#x0435;&#x0447;&#x0435;&#x043D;&#x0438;&#x044F; &#x0431;&#x043E;&#x043B;&#x0435;&#x0435; &#x0443;&#x0434;&#x043E;&#x0431;&#x043D;&#x043E;&#x0433;&#x043E; &#x0438; &#x0447;&#x0430;&#x0441;&#x0442;&#x043D;&#x043E;&#x0433;&#x043E; &#x043F;&#x0440;&#x043E;&#x0441;&#x043C;&#x043E;&#x0442;&#x0440;&#x0430;. &#x0424;&#x0430;&#x0439;&#x043B;&#x044B; cookie &#x0445;&#x0440;&#x0430;&#x043D;&#x044F;&#x0442; &#x043F;&#x043E;&#x043B;&#x0435;&#x0437;&#x043D;&#x0443;&#x044E; &#x0438;&#x043D;&#x0444;&#x043E;&#x0440;&#x043C;&#x0430;&#x0446;&#x0438;&#x044E; &#x043D;&#x0430; &#x0432;&#x0430;&#x0448;&#x0435;&#x043C; &#x043A;&#x043E;&#x043C;&#x043F;&#x044C;&#x044E;&#x0442;&#x0435;&#x0440;&#x0435; &#x0434;&#x043B;&#x044F; &#x0442;&#x043E;&#x0433;&#x043E;, &#x0447;&#x0442;&#x043E;&#x0431;&#x044B; &#x043C;&#x044B; &#x043C;&#x043E;&#x0433;&#x043B;&#x0438; &#x0443;&#x043B;&#x0443;&#x0447;&#x0448;&#x0438;&#x0442;&#x044C; &#x043E;&#x043F;&#x0435;&#x0440;&#x0430;&#x0442;&#x0438;&#x0432;&#x043D;&#x043E;&#x0441;&#x0442;&#x044C; &#x0438; &#x0442;&#x043E;&#x0447;&#x043D;&#x043E;&#x0441;&#x0442;&#x044C; &#x043D;&#x0430;&#x0448;&#x0435;&#x0433;&#x043E; &#x0441;&#x0430;&#x0439;&#x0442;&#x0430; &#x0434;&#x043B;&#x044F; &#x0432;&#x0430;&#x0448;&#x0435;&#x0439; &#x0440;&#x0430;&#x0431;&#x043E;&#x0442;&#x044B;. &#x0412; &#x043D;&#x0435;&#x043A;&#x043E;&#x0442;&#x043E;&#x0440;&#x044B;&#x0445; &#x0441;&#x043B;&#x0443;&#x0447;&#x0430;&#x044F;&#x0445; &#x0444;&#x0430;&#x0439;&#x043B;&#x044B; cookie &#x043D;&#x0435;&#x043E;&#x0431;&#x0445;&#x043E;&#x0434;&#x0438;&#x043C;&#x044B; &#x0434;&#x043B;&#x044F; &#x043E;&#x0431;&#x0435;&#x0441;&#x043F;&#x0435;&#x0447;&#x0435;&#x043D;&#x0438;&#x044F; &#x043A;&#x043E;&#x0440;&#x0440;&#x0435;&#x043A;&#x0442;&#x043D;&#x043E;&#x0439; &#x0440;&#x0430;&#x0431;&#x043E;&#x0442;&#x044B; &#x0441;&#x0430;&#x0439;&#x0442;&#x0430;. &#x0417;&#x0430;&#x0445;&#x043E;&#x0434;&#x044F; &#x043D;&#x0430; &#x0434;&#x0430;&#x043D;&#x043D;&#x044B;&#x0439; &#x0441;&#x0430;&#x0439;&#x0442;, &#x0432;&#x044B; &#x0441;&#x043E;&#x0433;&#x043B;&#x0430;&#x0448;&#x0430;&#x0435;&#x0442;&#x0435;&#x0441;&#x044C; &#x043D;&#x0430; &#x0438;&#x0441;&#x043F;&#x043E;&#x043B;&#x044C;&#x0437;&#x043E;&#x0432;&#x0430;&#x043D;&#x0438;&#x0435; &#x0444;&#x0430;&#x0439;&#x043B;&#x043E;&#x0432; cookie. &#x0414;&#x043B;&#x044F; &#x043F;&#x043E;&#x043B;&#x0443;&#x0447;&#x0435;&#x043D;&#x0438;&#x044F; &#x0434;&#x043E;&#x043F;&#x043E;&#x043B;&#x043D;&#x0438;&#x0442;&#x0435;&#x043B;&#x044C;&#x043D;&#x043E;&#x0439; &#x0438;&#x043D;&#x0444;&#x043E;&#x0440;&#x043C;&#x0430;&#x0446;&#x0438;&#x0438; &#x043F;&#x0435;&#x0440;&#x0435;&#x0439;&#x0434;&#x0438;&#x0442;&#x0435; &#x043F;&#x043E; &#x043E;&#x0434;&#x043D;&#x043E;&#x0439; &#x0438;&#x0437; &#x0440;&#x0430;&#x0441;&#x043F;&#x043E;&#x043B;&#x043E;&#x0436;&#x0435;&#x043D;&#x043D;&#x044B;&#x0445; &#x043D;&#x0438;&#x0436;&#x0435; &#x0441;&#x0441;&#x044B;&#x043B;&#x043E;&#x043A;.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/ru-ru/who-we-are/privacy'>&#x041E;&#x0437;&#x043D;&#x0430;&#x043A;&#x043E;&#x043C;&#x044C;&#x0442;&#x0435;&#x0441;&#x044C; &#x0441; &#x043F;&#x043E;&#x043B;&#x0438;&#x0442;&#x0438;&#x043A;&#x043E;&#x0439; &#x043A;&#x043E;&#x043D;&#x0444;&#x0438;&#x0434;&#x0435;&#x043D;&#x0446;&#x0438;&#x0430;&#x043B;&#x044C;&#x043D;&#x043E;&#x0441;&#x0442;&#x0438; &#x043A;&#x043E;&#x043C;&#x043F;&#x0430;&#x043D;&#x0438;&#x0438; AMD</a></li><li><a href='http://www.amd.com/ru-ru/who-we-are/cookies'>W&#x041E;&#x0437;&#x043D;&#x0430;&#x043A;&#x043E;&#x043C;&#x044C;&#x0442;&#x0435;&#x0441;&#x044C; &#x0441; &#x043F;&#x043E;&#x043B;&#x0438;&#x0442;&#x0438;&#x043A;&#x043E;&#x0439; &#x043A;&#x043E;&#x043C;&#x043F;&#x0430;&#x043D;&#x0438;&#x0438; AMD, &#x043A;&#x0430;&#x0441;&#x0430;&#x044E;&#x0449;&#x0435;&#x0439;&#x0441;&#x044F; &#x0444;&#x0430;&#x0439;&#x043B;&#x043E;&#x0432; cookie</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>&#x041F;&#x0435;&#x0440;&#x0435;&#x0439;&#x0434;&#x0438;&#x0442;&#x0435; &#x043D;&#x0430; &#x0441;&#x0430;&#x0439;&#x0442;";
				break;
				case "se":
				case "sv-se":
				translation = translation + "Varf\u00F6r vi anv\u00E4nder Cookies</h3>Denna websida anv\u00E4nder cookies f\u00F6r att g\u00F6ra din upplevelse b\u00E4ttre och mer personlig. Cookies sparar anv\u00E4ndbar information p\u00E5 din dator f\u00F6r att hj\u00E4lpa oss f\u00F6rb\u00E4ttra relevansen p\u00E5 v\u00E5r sida f\u00F6r dig. I vissa fall \u00E4r de n\u00F6dv\u00E4ndiga f\u00F6r att f\u00E5 websidan att fungera ordentligt. N\u00E4r du anv\u00E4nder denna sida samtycker du med att vi anv\u00E4nder coockies. F\u00F6r mer information se nedan l\u00E4nkar.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/en-us/who-we-are/privacy'>Se AMDs privacy policy</a></li><li><a href='http://www.amd.com/en-us/who-we-are/cookies'>Se AMDs cookie policy</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Forts\u00E4tt till sidan";
				break;
				case "tr": 
				case "tr-tr":
				translation = translation +  "Neden &Ccedil;erez Kullan&#x0131;yoruz?</h3>Bu site, i&ccedil;inde gezinme deneyiminizi daha rahat ve ki&#x015F;isel hale getirmek i&ccedil;in &ccedil;erezlerden faydalan&#x0131;yor. &Ccedil;erezler, bilgisayar&#x0131;n&#x0131;zda &ouml;nemli bilgileri saklayarak, sitemizin sizin a&ccedil;&#x0131;n&#x0131;zdan verimlili&#x011F;ini ve sizin amac&#x0131;n&#x0131;za uygunlu&#x011F;unu iyile&#x015F;tirmemizi sa&#x011F;l&#x0131;yor. Baz&#x0131; durumlarda ise &ccedil;erezler, sitenin d&uuml;zg&uuml;n bir &#x015F;ekilde &ccedil;al&#x0131;&#x015F;abilmesi i&ccedil;in gereklidir. Siteye eri&#x015F;erek, &ccedil;erezlerin kullan&#x0131;m&#x0131;na onay vermi&#x015F; olursunuz. Daha fazla bilgi edinmek i&ccedil;in l&uuml;tfen a&#x015F;a&#x011F;&#x0131;daki ba&#x011F;lant&#x0131;lardan birini kullan&#x0131;n.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/tr-tr/who-we-are/privacy'>AMD'nin gizlilik politikas&#x0131;n&#x0131; g&ouml;r&uuml;nt&uuml;le</a></li><li><a href='http://www.amd.com/tr-tr/who-we-are/cookies'>AMD'nin &ccedil;erez politikas&#x0131;n&#x0131; g&ouml;r&uuml;nt&uuml;le</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Siteye git";
				break;
				case "tw": 
				case "zh-tw":
				translation = translation + "&#x6211;&#x5011;&#x70BA;&#x4EC0;&#x9EBC;&#x8981;&#x4F7F;&#x7528; Cookies</h3>&#x672C;&#x7DB2;&#x7AD9;&#x4F7F;&#x7528; cookies &#x8B93;&#x60A8;&#x7684;&#x700F;&#x89BD;&#x9AD4;&#x9A57;&#x66F4;&#x65B9;&#x4FBF;&#x800C;&#x4E14;&#x7B26;&#x5408;&#x500B;&#x4EBA;&#x9700;&#x6C42;&#x3002;Cookies &#x6703;&#x5728;&#x60A8;&#x7684;&#x96FB;&#x8166;&#x4E0A;&#x5132;&#x5B58;&#x6709;&#x7528;&#x7684;&#x8CC7;&#x8A0A;&#xFF0C;&#x4EE5;&#x5354;&#x52A9;&#x6211;&#x5011;&#x63D0;&#x9AD8;&#x672C;&#x7DB2;&#x7AD9;&#x7684;&#x6548;&#x7387;&#x4EE5;&#x53CA;&#x5C0D;&#x60A8;&#x7684;&#x9069;&#x5207;&#x6027;&#x3002;&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x6CC1;&#x4E0B;&#xFF0C;&#x5B83;&#x5011;&#x5C0D;&#x7DB2;&#x7AD9;&#x7684;&#x6B63;&#x5E38;&#x904B;&#x4F5C;&#x5341;&#x5206;&#x91CD;&#x8981;&#x3002;&#x5B58;&#x53D6;&#x672C;&#x7DB2;&#x7AD9;&#x8868;&#x793A;&#x60A8;&#x540C;&#x610F;&#x4F7F;&#x7528; cookies&#x3002;&#x5982;&#x9700;&#x66F4;&#x591A;&#x8CC7;&#x8A0A;&#xFF0C;&#x8ACB;&#x6AA2;&#x8996;&#x4EE5;&#x4E0B;&#x9023;&#x7D50;&#x3002;<ul class='AMDArrowLink'><li><a href='http://www.amd.com/zh-tw/who-we-are/privacy'>&#x6AA2;&#x8996; AMD &#x7684;&#x96B1;&#x79C1;&#x6B0A;&#x653F;&#x7B56;</a></li><li><a href='http://www.amd.com/zh-tw/who-we-are/cookies'>&#x6AA2;&#x8996; AMD &#x7684; cookie &#x653F;&#x7B56;</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>&#x7E7C;&#x7E8C;&#x700F;&#x89BD;&#x672C;&#x7DB2;&#x7AD9;";
				break;
				default: 
				translation = translation + "Why We Use Cookies</h3>This site uses cookies to make your browsing experience more convenient and personal. Cookies store useful information on your computer to help us improve the efficiency and relevance of our site for you. In some cases, they are essential to making the site work properly. By accessing this site, you consent to the use of cookies.  For more information, please see one of the links below.<ul class='AMDArrowLink'><li><a href='http://www.amd.com/en-us/who-we-are/privacy'>View AMD's privacy policy</a></li><li><a href='http://www.amd.com/en-us/who-we-are/cookies'>View AMD's cookie policy</a></li><li><a href='#' onclick='EUCookie.AgreeToUse();'>Continue to the site";
			}
			translation = translation + "</li></ul></div>";
			return translation;
		},
		
		// Reads a cookie
		ReadCookie : function(n){
						
			n+= "=";
			var ca = document.cookie.split(';');

			for(var i=0,l=ca.length;i<l;i++){
				var c=ca[i];
				while(c.charAt(0)==' ')c=c.substring(1,c.length);
			
				if (c.indexOf(n)==0){
			
					var r=EUCookie.Decode(c.substring(n.length,c.length));
			
					return r;
				}
			}
		},

		// Creates a cookie
		CreateCookie : function(n,v,d) {
			var expires = "";
			if(d){
				var date = new Date();
				date.setTime(date.getTime()+(d*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}			
			document.cookie=n+"="+EUCookie.Encode(v)+expires+"; path=/;domain=amd.com";
		},

		// Deletes a cookie and in Paranoid mode checks it has actually been deleted as some browsers dont until the next session
		DeleteCookie : function(n){		
			
			document.cookie = n + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';

			// some browsers like older versions of Chrome and IE dont actually delete until the next session so check its gone
			if(EUCookie.ParanoidMode){

				var chk=EUCookie.ReadCookie(n);
				
				if (chk && chk!=""){			
	
					return false;
				}
			}
			
			return true;
		},

		// get viewport size
		GetViewportSize : function()
		{
			var width=0,height=0;

			if (typeof self.innerWidth != 'undefined') {
				width = self.innerWidth;
				height = self.innerHeight;			
			}else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0){
				width = document.documentElement.clientWidth;
				height = document.documentElement.clientHeight;			
			}else{
				width = document.getElementsByTagName('body')[0].clientWidth;
				height = document.getElementsByTagName('body')[0].clientHeight;
			
			}
			
			var size = {
				"width" : width,
				"height" : height
			};
			return size;
		},

		
		// get scroll position
		GetScrollPosition : function(){
			var x=0,y=0;

			if( typeof( window.pageYOffset ) == 'number' ) {
				// Most browsers apart from IE
				x = window.pageXOffset;
				y = window.pageYOffset;
			} else if( typeof(document.documentElement) != 'undefined' && (document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
				//IE6 standards compliant mode and some other browsers
				x = document.documentElement.scrollLeft;
				y = document.documentElement.scrollTop;
			} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
				//DOM compliant browsers
				x = document.body.scrollLeft;
				y = document.body.scrollTop;
			} 

			var position = {
				'x' : x,
				'y' : y
			};

			return position;
		},

		GetPageSize : function(){

			var viewport = EUCookie.GetViewportSize();
			
			if (window.innerHeight && window.scrollMaxY) {
				// Mozilla
				xScroll = document.body.scrollWidth;
				yScroll = window.innerHeight + window.scrollMaxY;				
			} else if (document.body.scrollHeight > document.body.offsetHeight){
				xScroll = document.body.scrollWidth;
				yScroll = document.body.scrollHeight;				
			} else {
				// IE 7
				xScroll = document.body.offsetWidth;
				yScroll = document.body.offsetHeight;
			}	

			// for small pages with total height less then height of the viewport
			if(yScroll < viewport.height){
				pageHeight = viewport.height;
			} else {
				pageHeight = yScroll;				
			}

			// for small pages with total width less then width of the viewport
			if(xScroll < viewport.width){
				pageWidth = viewport.width;
			} else {
				pageWidth = xScroll;
			}

			var pageSize={
				"pageWidth": parseInt(pageWidth)+"px",
				"pageHeight": parseInt(pageHeight)+"px",
				"viewportWidth": parseInt(viewport.width)+"px",
				"viewportHeight": parseInt(viewport.height)+"px"
			};
			
			return pageSize;
		},

		// Center the message box in the middle of the viewport
		CenterContent : function(){
			
			var left,top; left=top=0,
				//ViewportSize = EUCookie.ViewportSize(),
				PageSize = EUCookie.GetPageSize(),
				Scroll = EUCookie.GetScrollPosition();
			
			// if specific x,y co-ords have been passed in use them otherwise center editor

			// calculate starting position for the editor to appear centered on the screen
			var startX = ((parseInt(PageSize.viewportWidth)/2)-(parseInt(EUCookie.MsgWidth)/2))+Scroll.x;
			var startY = ((parseInt(PageSize.viewportHeight)/2)-(parseInt(EUCookie.MsgHeight)/2))+Scroll.y;

			// set editor styles to position it
			left = ((startX<0)?0:startX)+"px";
			top = ((startY<0)?0:startY)+"px";
			
			document.getElementById('EUCookieMsg').style.top=top;
			document.getElementById('EUCookieMsg').style.left=left;

			return;
		},

		// Check whether the current browser has the ability to set cookies at this point in time and in Paranoid mode set up a timer to constantly check for their 
		// appearance or re-enabling e.g web dev toolbar
		HasCookiesEnabled : function(){
			
			var self = this;

			// if the user has disabled all cookie use then we don't show the message or try setting a cookie
			if(!document.cookie && !EUCookie.ParanoidMode){			

				return false;
			}

			// paranoid mode - set, check then delete a cookie to prove they can be set
			if(EUCookie.ParanoidMode){
			
				EUCookie.CreateCookie("EUTestCookie","test",1);
				
				var chk=EUCookie.ReadCookie("EUTestCookie");

				if (chk && chk=="test"){
					
					// user has now re-enabled cookies maybe through a toolbar you could now show the message - even if the page had already loaded for X minutes
				
					// will return false if the cookie cannot be removed until the next session
					EUCookie.DeleteCookie("EUTestCookie");

					// cookies can be set				
				}else{

					// cannot be set at moment but could be through AJAX requests in lazy loaded scripts etc or if web dev toolbar is changed etc
					// so set a timer to constantly check for their appearance and display the message if they appear
					
					setTimeout(function(){
						self.CheckCookieConstantly();
						},self.ParanoidCheckTimer);		

					return false;
				}
			}

			return true;
		},

		// Constantly checks for cookies to be turned back on or for scripts to set cookies if none currently exist once the EUCookie compliance cookie has been set
		// the timer will stop checking for cookies
		CheckCookieConstantly : function()
		{
			
			var retry = false,
				self = this;

			if(!document.cookie){
				retry = true;
			}else{
				// if they have since agreed to the cookie use stop the timer
				if(self.HasEUCookie()){					
					retry = false;
				}else{
					// as they now have the ability for cookies to be set we need to show the warning
					self.ShowEUCookieRequest();	
					return;
				}
			}

			// do we try again?
			if(retry){				
				setTimeout(function(){self.CheckCookieConstantly();},self.ParanoidCheckTimer);
			}else{
				// no more retries
				return;
			}
		},

		// does the users browser already have the EU Cookie set for it
		HasEUCookie : function(){

			// check whether there is an EU Cookie already on the users PC
			var n=EUCookie.CookieName,
				chk=EUCookie.ReadCookie(n);
			
			if (chk && chk==EUCookie.CookieValue)
			{
				return true;
			}

			return false;
		},

		// Main function to decide whether or not we need to show the message by checking for a previous cookies existance 
		CheckCookie : function(){

			// if we show the warning whether cookies cannot be set at this point of time - they might later e.g web dev toolbar enable/disable cookie use
			if(EUCookie.AlwaysShowMsg || EUCookie.HasCookiesEnabled()){
				
				// user has cookies enabled check whether they have already agreed to use them
				if(EUCookie.HasEUCookie())
				{
					// the EU cookie was found so the user has read and confirmed that they want to use cookies on this site
					// reset for another 365 days
					
					// reset the cookie for another year
					EUCookie.CreateCookie(EUCookie.CookieName,EUCookie.CookieValue,365);	
				}
				else 
				{					
					// No EU cookie exists OR we so we need to ask the user whether they want to accept cookies on this site
					EUCookie.ShowEUCookieRequest();					
				}
				
			}
		
		},

		HideScrollbars : function()
		{
			// try to remove scrollbars on specified object
			
			switch(EUCookie.HideScroll)
			{
				case "":
					break;
				case "BODY":
					EUCookie.GetBody().style.overflow = "hidden";
					break;		
				case "HTML":
					document.getElementsByTagName("HTML")[0].style.overflow = "hidden";
					break;		
					
			}

			return;
		},

		// Show relevant scrollbars
		ShowScrollbars : function()
		{
			
			switch(EUCookie.HideScroll)
			{
				case "":
					break;
				case "BODY":
					EUCookie.GetBody().style.overflow = "auto";
					break;			
				case "HTML":
					document.getElementsByTagName("HTML")[0].style.overflow = "auto";
					break;		
					
			}
			
			return;
		},

		ResizeOverlay : function(){

			var height = EUCookie.PageSize.pageHeight, width = EUCookie.PageSize.pageWidth;
			
			var el = document.getElementById('EUCookieFade');
			if(el){
				// set all styles at once
				el.style.cssText = "z-index:999999; position:absolute;top:0;left:0;";
			}	

			return;
		},

		// Whether to show the message box or not
		ShowEUCookieRequest : function()
		{

			// get page size and save it for future use
			EUCookie.PageSize = EUCookie.GetPageSize();

			var width = EUCookie.PageSize.pageWidth,
				height = EUCookie.PageSize.pageHeight;		

			// taken from Scott Herbert (www.scott-herbert.com)
			// quick way to lightbox a DIV that is cross browser
			var html = "<div id='EUCookieFade' ><div style='z-index:99999999; position:absolute;bottom:0;left:0;background: transparent;'>";

			// create the DIV wrapper
			if (newDomain.toLowerCase()=='support.amd.com' || newDomain.toLowerCase()=='search.amd.com'){
				html += "<div id='EUCookieMsg' style='position:fixed; right:25px !important; bottom:2px !important;padding:11px 11px 0px 11px;width:" + EUCookie.MsgWidth +  ";background:#fff;color:#000;margin:0px;border-bottom:#999 5px solid;border-top:#999 5px solid;border-left:#999 5px solid;border-right:#999 5px solid;display:block;'>";
				}
			else if(newDomain.toLowerCase()=='search-auth.amd.com'){
				}
			else
				{
				html += "<div id='EUCookieMsg' style='position:fixed; right:8px; bottom:0px !important;padding:11px 11px 0px 11px;width:" + EUCookie.MsgWidth +  ";background:#fff;color:#000;margin:0px;border-bottom:#999 5px solid;border-top:#999 5px solid;border-left:#999 5px solid;border-right:#999 5px solid;display:block;'>";
				}

			// this is the message displayed to the user - overwrite if necessary e.g multi lingual sites 
			html += EUCookie.FindMsg();				
						
			html += "</div></div></div>";
			
			var div = document.createElement("DIV");
			div.innerHTML = html;			

			$('body').append(div);
			$('head').append('<style>' + css + '</style>');
			// hide scrollbars
			EUCookie.HideScrollbars();

			// Chrome, FF, IE9, Safari, IE9
			if(window.addEventListener){
				window.addEventListener("resize",function(){					
					EUCookie.ResizeOverlay();
				},false);
			// skip DOM2 pre IE 8 as its rubbish go for DOM0 standard
			}else{
				var func = window["onresize"];
				if(typeof(func)=="function"){
					window.onresize = function(){												
												func();
												EUCookie.ResizeOverlay();
										}
				}else{
					window.onresize = function(){						
						EUCookie.ResizeOverlay();
					}
				}	
			}	

			return;
		},

		// Will reset the cookie for another 365 days and remove the message HTML from the DOM as well as putting back any missing scrollbars
		AgreeToUse : function(){

			EUCookie.CreateCookie(EUCookie.CookieName,EUCookie.CookieValue,365);	

			// hide msg
			var el = document.getElementById('EUCookieMsg').parentNode;		
			el.removeChild( el.firstChild ); 

			el = document.getElementById('EUCookieFade').parentNode;		
			el.removeChild( el.firstChild );      
			
			//Add overflow back
			EUCookie.ShowScrollbars();
			
			return true;
		},

		// utility function to decode a URL
		Decode : function(v){
			if(typeof(decodeURIComponent)=="function"){
				return decodeURIComponent(v);
			}else{
				return unescape(v);
			} 
		},

		// utility function to encode a URL
		Encode : function(v){
			if (typeof(encodeURIComponent)=="function"){
				return encodeURIComponent(v);
			}else{
				return escape(val);
			}
		},

		// utility function to ger the document body
		GetBody : function(){
			return document.getElementsByTagName("body")[0] || document.body;
		}

	}

	// call the CheckCookie function
	var cccPage = location.pathname;
	if (cccPage.indexOf( "/en-us/download/ccc") == -1 && cccPage.indexOf("-auth") == -1){
	// call the CheckCookie function
	EUCookie.CheckCookie();
	} else {
	return;}


})();
