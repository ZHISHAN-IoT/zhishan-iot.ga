

var configuration = {data: {page: {}, global: {}, i18n: {}}};


(function initConfiguration(allowPredefinedData) {
	if(typeof configuration.data === 'undefined') {
		configuration.data = {};
	} else {
		if(allowPredefinedData === true) {
			// reset everything but data
			var tempData = configuration.data;
			configuration = {data: tempData};
		} else {
			configuration.data = {};
		}
	}

	// configuration functions
	configuration.set = function(key, value) {
		var tempKeys = key.split('.');
		if(tempKeys.length === 2) {
			if(typeof configuration[tempKeys[0]] === 'undefined') {
				configuration.data[tempKeys[0]] = {};
			}
			configuration.data[tempKeys[0]][tempKeys[1]] = value;
			return true;
		}
		configuration.data[tempKeys[0]] = value;
		return true;
	};

	configuration.get = function(key) {
		var tempKeys = key.split('.');
		if(tempKeys.length === 2) {
			if(typeof configuration.data[tempKeys[0]] === 'undefined' || typeof configuration.data[tempKeys[0]][tempKeys[1]] === 'undefined') {
				return null;
			}
			return configuration.data[tempKeys[0]][tempKeys[1]];
		}
		if(typeof configuration.data[tempKeys[0]] === 'undefined') {
			return null;
		}
		return configuration.data[tempKeys[0]];
	};
})(true);


configuration.data.global.offline=false;

		configuration.data.global.navigationJsonUri = '/cms/en/navigation.json';
	
configuration.data.global.flyoutUri='/cms/en/services/ajax/flyoutElements.json';
configuration.data.global.navigationsectionUri = '/cms/en/services/ajax/navigationsection.html';
configuration.data.global.productnavigationsectionUri = '/cms/en/services/ajax/productnavigationsection.html';
configuration.data.global.searchUri = '/cms/en/search.html';
configuration.data.global.starRatingUrl = '/cms/services/rateVideo.jsp';
configuration.data.global.isEditMode = false;
configuration.data.global.isTrackingEnabled = true;

configuration.data.global.cookieUrls = '/export/sites/default/config/ifx.cookie.urls.js';

configuration.data.page.id = typeof(navigationPageId) == 'undefined' ? '' : navigationPageId;
configuration.data.page.ancestorIds = [];


configuration.data.i18n.navigationOverview = 'Overview';
configuration.data.i18n.navigationUp = 'Back';

configuration.data.i18n.lightboxClose = 'Close\x20\x28Esc\x29';
configuration.data.i18n.lightboxLoading = 'Loading...';
configuration.data.i18n.lightboxPrev = 'Previous\x20\x28Left\x20arrow\x20key\x29';
configuration.data.i18n.lightboxNext = 'Next\x20\x28Right\x20arrow\x20key\x29';
configuration.data.i18n.lightboxShowCaption = 'Show\x20info';
configuration.data.i18n.lightboxHideCaption = 'Hide\x20info';

configuration.data.i18n.searchSupport = 'Support';
configuration.data.i18n.searchSupportUrl = '/en/about-infineon/company/contacts/product-support-form/';

configuration.data.i18n.searchSupportForum = 'Forum';
configuration.data.i18n.searchSupportForumJoinURL = 'http://www.infineonforums.com/';

configuration.data.i18n.searchSupportChat = 'Live\x20Chat\x20Online';
configuration.data.i18n.searchSupportChatConnectUsURL = 'https://chat.infineon.com/webscout/user/start.do?unit=infineon&locale=en&userLastUrl=http://www.infineon.com/cms/en/about-infineon/company/contacts/support/&LCSTRT=http%3A%2F%2Fwww.infineon.com%2Fcms%2Fen%2Fabout-infineon%2Fcompany%2Fcontacts%2Fsupport%2F';

configuration.data.i18n.searchSupportFaqs = 'FAQs';
configuration.data.i18n.searchSupportFaqsQuestionsURL = '/en/about-infineon/company/contacts/support/';

configuration.data.i18n.quickaccessLabelNav = 'Quick\x20Access\x3A';
configuration.data.i18n.quickaccessLabelSearch = 'Quick\x20Access\x3A';

configuration.data.i18n.searchTopButtonLabel = 'Back\x20to\x20top';
configuration.data.i18n.searchSeeResultsButtonLabel = 'See\x20Results';


configuration.data.myInfineonLabel='myInfineon';
configuration.data.myInfineonUserSessionDataUrl='/service/user/sessionData';
configuration.data.myInfineonUserDataUrl='/sec/user/data';
configuration.data.myInfineonLoginUrl='/sec/login';
configuration.data.myInfineonLoginMessage=',\x20you\x20are\x20logged\x20in';
configuration.data.myInfineonDashboardLinkUrl='/cms/en/profile/';
configuration.data.myInfineonDashboardLinkLabel='My\x20Dashboard';
configuration.data.myInfineonProfileLinkUrl='/cms/en/profile/#/myProfile';
configuration.data.myInfineonProfileLinkLabel='My\x20Profile';

configuration.data.myInfineonMobileLoginLinkLabel = 'myInfineon\x20Login';
configuration.data.myInfineonMobileDashboardLinkLabel = 'myInfineon\x20Dashboard';


configuration.data.myInfineonLogoutLinkLabel='Log\x20out';
configuration.data.myInfineonLogoutIdpUrl='https://www.infineon.com/viidp/idp/logout';
configuration.data.myInfineonLogoutEdgeServiceUrl='https://www.infineon.com/profile/profile/logout';
configuration.data.myInfineonLogoutWebappUrl='/service/user/logout';


configuration.data.formvalidationRegexpEmail=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
configuration.data.formvalidationRegexpTel = /^[0-9 ()\+\-\/]+$/;


configuration.data.formvalidationRegexpFirstName = /^(?=^[\D].*$)(?=^[\S].*$)[A-Za-z\u00aa\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\d -]{2,255}$/;
configuration.data.formvalidationRegexpLastName = /^(?=^[\D].*$)(?=^[\S].*$)[A-Za-z\u00aa\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\d -]{2,255}$/;
configuration.data.formvalidationRegexpCompany = /^[A-Za-z\u00aa\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\d ,.-]{2,255}$/;


configuration.data.activationLinkApiUrl = 'https://www.infineon.com/profile/profile/activate/{code}';
configuration.data.activationRedirectSuccessUrl = configuration.data.myInfineonDashboardLinkUrl;


configuration.data.passwordResetURL = 'https://www.infineon.com/profile/profile/password/reset';
configuration.data.passwordRenewWebuserURL = 'https://www.infineon.com/profile/profile/password/renew/webuser';
configuration.data.passwordRenewPartnerURL = 'https://www.infineon.com/profile/profile/password/renew/partner';


configuration.data.registrationUrl = 'https://www.infineon.com/profile/profile/register';
configuration.data.registrationCheckEmailUrl = 'https://www.infineon.com/profile/validator/email';
configuration.data.i18n.registrationHeadline = 'myInfineon\x20registration';
configuration.data.i18n.registrationCopy = 'Register\x20for\x20myInfineon\x20to\x20access\x20additional\x20content,\x20services,\x20and\x20customized\x20information\x20.\x20There\u2019s\x20a\x20whole\x20new\x20Infineon\x20experience\x20waiting\x20for\x20you.\x20Make\x20myInfineon\x20your\x20Infineon.';
configuration.data.i18n.registrationFirstName = 'First\x20name';
configuration.data.i18n.registrationLastName = 'Last\x20name';
configuration.data.i18n.registrationCountry = 'Country';
configuration.data.i18n.registrationCountryPrompt = 'Please\x20select';
configuration.data.i18n.registrationCountryCopy = 'Please\x20enter\x20the\x20country\x20you\x20work\x20in\x20currently.';
configuration.data.i18n.registrationCompany = 'Company';
configuration.data.i18n.registrationEmail = 'E\x2Dmail';
configuration.data.i18n.registrationEmailCopy = 'Please\x20enter\x20your\x20business\x20e\x2Dmail\x20address\x20to\x20benefit\x20from\x20all\x20myInfineon\x20offerings.';
configuration.data.i18n.registrationPassword = 'Password';
configuration.data.i18n.registrationPasswordRepeat = 'Repeat\x20password';
configuration.data.i18n.registrationSavedata = 'I\x20agree\x20that\x20my\x20personal\x20data\x20can\x20be\x20gathered\x20and\x20processed\x20by\x20Infineon\x20Technologies\x20AG\x20and\x20its\x20licensed\x20partners.';
configuration.data.i18n.registrationMarketing = 'I\x20would\x20like\x20to\x20receive\x20newsletter\x20informing\x20me\x20about\x20Infineon\x20products.\x20\x28You\x20can\x20cancel\x20the\x20free\x20subscription\x20any\x20time.\x29';
configuration.data.i18n.registrationFirstNameError = 'First\x20name\x20must\x20only\x20use\x20characters\x20from\x20the\x20ISO\x2FIEC\x208859\x2D1\x20character\x20set.\x20Please\x20enter\x20more\x20than\x202\x20characters\x20and\x20do\x20not\x20use\x20special\x20characters\x20except\x20\x22\x2D\x22.\x3Cbr\x2F\x3EPlease\x20notice\x20that\x20the\x20first\x20character\x20shouldn\x27t\x20be\x20a\x20number.';
configuration.data.i18n.registrationLastNameError = 'Last\x20name\x20must\x20only\x20use\x20characters\x20from\x20the\x20ISO\x2FIEC\x208859\x2D1\x20character\x20set.\x20Please\x20enter\x20more\x20than\x202\x20characters\x20and\x20do\x20not\x20use\x20special\x20characters\x20except\x20\x22\x2D\x22.\x3Cbr\x2F\x3EPlease\x20notice\x20that\x20the\x20first\x20character\x20shouldn\x27t\x20be\x20a\x20number.';
configuration.data.i18n.registrationCountryError = 'Please\x20select\x20a\x20country.';
configuration.data.i18n.registrationCompanyError = 'Company\x20name\x20must\x20only\x20use\x20characters\x20from\x20the\x20ISO\x2FIEC\x208859\x2D1\x20character\x20set.\x20Please\x20enter\x20more\x20than\x202\x20characters\x20and\x20do\x20not\x20use\x20special\x20characters\x20except\x20\x22\x20\x2D,.\x22.';
configuration.data.i18n.registrationPasswordError = 'The\x20given\x20password\x20is\x20invalid\x3A';
configuration.data.i18n.registrationPasswordLengthError = 'It\x20needs\x20at\x20least\x2010\x20chars';
configuration.data.i18n.registrationPasswordLowerCaseError = 'It\x20needs\x20to\x20contain\x20at\x20least\x20one\x20lowercase\x20letter';
configuration.data.i18n.registrationPasswordUpperCaseError = 'It\x20needs\x20to\x20contain\x20at\x20least\x20one\x20uppercase\x20letter';
configuration.data.i18n.registrationPasswordDigitError = 'It\x20needs\x20to\x20contain\x20at\x20least\x20one\x20digit';
configuration.data.i18n.registrationPasswordSpecialCharError = 'It\x20needs\x20to\x20contain\x20at\x20least\x20one\x20special\x20char';
configuration.data.i18n.registrationPasswordMatchError = 'Repeated\x20password\x20differs\x20from\x20password';
configuration.data.i18n.registrationPasswordInvalidCharacterError = 'Password\x20must\x20only\x20use\x20characters\x20from\x20the\x20ISO\x2FIEC\x208859\x2D1\x20character\x20set\x20\x28also\x20called\x20\x22Latin\x2D1\x22\x29';
configuration.data.i18n.registrationEmailError = 'Please\x20enter\x20a\x20valid\x20e\x2Dmail\x20address.';
configuration.data.i18n.registrationEmailNotAllowedError = 'You\x20cannot\x20use\x20the\x20entered\x20email\x20address\x20as\x20it\x20is\x20either\x20an\x20Infineon\x20or\x20affiliate\x20address,\x20already\x20in\x20use,\x20or\x20blacklisted.';
configuration.data.i18n.registrationSavedataError = 'Please\x20agree\x20that\x20your\x20data\x20can\x20be\x20processed.';
configuration.data.i18n.registrationGeneralError = 'An\x20unknown\x20error\x20occurred.\x20Please\x20try\x20again\x20later.';
configuration.data.i18n.registrationSuccessHeadline = 'Hooray\x21\x20Your\x20registration\x20was\x20successful\x21';
configuration.data.i18n.registrationSuccessCopy  = '\x3Cp\x3EThank\x20you\x20for\x20registering\x20for\x20myInfineon.\x20Your\x20account\x20has\x20been\x20created.\x20Before\x20getting\x20started\x20you\x20need\x20to\x20activate\x20your\x20account.\x20Please\x20check\x20your\x20inbox\x20for\x20the\x20e\x2Dmail\x20with\x20the\x20activation\x20link.\x3C\x2Fp\x3E\x3Cp\x3EYou\x20haven\x27t\x20received\x20any\x20e\x2Dmail\x20yet\x3F\x20Take\x20a\x20look\x20inside\x20your\x20SPAM\x20folder.\x3Cbr\x3EIf\x20in\x20doubt\x20please\x20contact\x20our\x20\x3Ca\x20href\x3D\x22\x2Fcms\x2Fen\x2Fabout\x2Dinfineon\x2Fcompany\x2Fcontacts\x2Fsupport\x2F\x22\x20class\x3D\x22link\x22\x3Esupport\x3C\x2Fa\x3E.\x3C\x2Fp\x3E';
configuration.data.i18n.registrationLoginCopy = 'Already\x20signed\x20up\x3F';
configuration.data.i18n.registrationLoginButton = 'Login';
configuration.data.i18n.registrationSubmitButton = 'Submit';
configuration.data.i18n.registrationMandatoryInfo = 'All\x20fields\x20marked\x20with\x20an\x20asterisk\x20\x28\x2A\x29\x20are\x20mandatory.';
configuration.data.i18n.registrationPrivacyPolicy = 'By\x20clicking\x20on\x20\x22Submit\x22\x20you\x20agree\x20to\x20the\x20Infineon\x20\x3Ca\x20href\x3D\x22\x2Fcms\x2Fen\x2Fabout\x2Dinfineon\x2Fprivacy\x2Dpolicy\x2F\x22\x20target\x3D\x22_blank\x22\x3EPrivacy\x20Policy\x3C\x2Fa\x3E.';


configuration.data.progressiveProfilingBaseUrl = 'https://www.infineon.com/profile';
configuration.data.progressiveProfilingUrl = 'https://www.infineon.com/profile/profile/progression';
configuration.data.progressiveProfilingDictUrl = 'https://www.infineon.com/profile/dict/';
configuration.data.progressiveProfilingOfferedUrl = 'https://www.infineon.com/profile/profile/progression/offered';

configuration.data.i18n.progressiveProfilingHeadline = 'Give\x20us\x20the\x20chance\x20to\x20know\x20you\x20better';
configuration.data.i18n.progressiveProfilingCopy = 'We\x20would\x20like\x20to\x20get\x20to\x20know\x20you\x20better\x20to\x20make\x20your\x20Infineon\x20experience\x20more\x20personal\x20and\x20efficient.\x20Please\x20help\x20us\x20to\x20support\x20you\x20the\x20best\x20we\x20can\x20by\x20giving\x20us\x20some\x20information\x20regarding\x20your\x20work.\x20All\x20information\x20is\x20voluntary.';
configuration.data.i18n.progressiveProfilingSkipButton = 'Skip';
configuration.data.i18n.progressiveProfilingSkipSuffix = 'and\x20ask\x20me\x20later';
configuration.data.i18n.progressiveProfilingSubmitButton = 'Submit';
configuration.data.i18n.progressiveProfilingDropdownPrompt = 'Please\x20select';
configuration.data.i18n.progressiveProfilingJobRole = 'Job\x20role';
configuration.data.i18n.progressiveProfilingIndustry = 'Industry';
configuration.data.i18n.progressiveProfilingBusinessPhone = 'Business\x20phone\x20number';
configuration.data.i18n.progressiveProfilingMobilePhone = 'Business\x20mobile\x20phone\x20number';
configuration.data.i18n.progressiveProfilingJobRoleError = 'Please\x20enter\x20a\x20valid\x20job\x20role.';
configuration.data.i18n.progressiveProfilingIndustryError = 'Please\x20enter\x20a\x20valid\x20industry.';
configuration.data.i18n.progressiveProfilingBusinessPhoneError = 'The\x20phone\x20number\x20must\x20contain\x20an\x20international\x20prefix\x20and\x20numbers\x20only.';
configuration.data.i18n.progressiveProfilingMobilePhoneError = 'The\x20phone\x20number\x20must\x20contain\x20an\x20international\x20prefix\x20and\x20numbers\x20only.';
configuration.data.i18n.progressiveProfilingProjectActive = 'Are\x20you\x20currently\x20working\x20on\x20a\x20project\x3F';
configuration.data.i18n.progressiveProfilingProjectActiveOptions = '{"true": "Yes", "false": "No"}';
configuration.data.i18n.progressiveProfilingProductRequired = 'Required\x20product';
configuration.data.i18n.progressiveProfilingProjectVolume = 'Project\x20volume';
configuration.data.i18n.progressiveProfilingTimeFrame = 'Time\x20frame';
configuration.data.i18n.progressiveProfilingStartOfProduction = 'Start\x20of\x20production';
configuration.data.i18n.progressiveProfilingProjectActiveError = 'Please\x20select\x20an\x20option.';
configuration.data.i18n.progressiveProfilingProductRequiredError = 'Please\x20select\x20a\x20required\x20product.';
configuration.data.i18n.progressiveProfilingProjectVolumeError = 'Please\x20select\x20a\x20project\x20volume.';
configuration.data.i18n.progressiveProfilingTimeFrameError = 'Please\x20select\x20a\x20time\x20frame.';
configuration.data.i18n.progressiveProfilingStartOfProductionError = 'Please\x20select\x20a\x20start\x20of\x20production.';

configuration.data.i18n.selectLanguageLabel = 'Select\x20a\x20language';

configuration.data.i18n.countries = {"AF":"Afghanistan","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"Bonaire, Sint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","VG":"British Virgin Islands","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CK":"Cook Islands","CR":"Costa Rica","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czech Republic","CI":"Côte d&#039;Ivoire","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island And McDonald Islands","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle Of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestine","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russia","RW":"Rwanda","BL":"Saint Barthélemy","SH":"Saint Helena","KN":"Saint Kitts And Nevis","LC":"Saint Lucia","MF":"Saint Martin","PM":"Saint Pierre And Miquelon","VC":"Saint Vincent And The Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome And Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia And The South Sandwich Islands","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard And Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","CD":"The Democratic Republic Of Congo","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks And Caicos Islands","TV":"Tuvalu","VI":"U.S. Virgin Islands","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican","VE":"Venezuela","VN":"Vietnam","WF":"Wallis And Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","AX":"Åland Islands"};

configuration.data.staticResourcesBase='/frontend/2017-07/resources/';


var s_account="ifninfineon";

