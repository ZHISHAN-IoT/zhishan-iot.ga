var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': false,
  'version': '18.1.8',
  'files': '/trigger/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'qMDDR6ATsNA1qgTPjF1QFw==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'qualcomm.com',
  'site_id': 'qualcomm.com',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk|co\.in|cn)/
  },
  {
    'path': '.',
    'domain': 'default'
  }],
  'storageOption': 'cookie',
  'nameBackup': window.name,
  'iframeHrefs': ["frameWorker.html"],
  'acceptableorigins': []
};

$$FSR.FSRCONFIG = {};

(function (config) {

  var FSR, supports_amd = !! config.enableAMD && typeof(_4c.global["define"]) === 'function' && !! _4c.global["define"]["amd"];

  if (!supports_amd) FSR = window.FSR;
  else FSR = {};
/*
 * ForeSee Survey Def(s)
 */
  FSR.surveydefs = [{
    name: 'mobile_web_in',
    platform: 'phone',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinviteM'><li>Survey will be sent at the end of your visit</li><li>Your answers will remain private</li></ul>",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            // e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            // textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter an email address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      // sp: 0,
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['qualcomm.co.in']
    }
  },
  {
    name: 'mobile_web_eu',
    platform: 'phone',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinviteM'><li>Survey will be sent at the end of your visit</li><li>Your answers will remain private</li></ul>",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            // e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            // textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter an email address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 0,
      //sp : 100,
      lf: 2
    },
    include: {
      urls: ['qualcomm.co.uk']
    }
  },
  {
    name: 'mobile_web_zh',
    platform: 'phone',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "您的意见可帮助我们为您提供更好的服务！",
          blurb: "<ul class='ulinviteM'><li>您的访问结束时，会向您发送意见调查问卷</li><li>您的回答会始终保密</li></ul>",
          attribution: "由ForeSee主办。",
          declineButton: "不，谢谢",
          acceptButton: "是，我愿意参加",
          error: "错误"
        }],
        [{
          reverseButtons: false,
          headline: "谢谢您的帮助！",
          blurb: "请提供您的电子邮件地址。您的访问结束后，我们将向您发送这项调查问卷的链接。",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>的隐私政策</a>",
          declineButton: "取消",
          acceptButton: "发电子邮件给我",
          error: "错误",
          mobileExitDialog: {
            support: "e",
            // e for email only, s for sms only, b for both
            inputMessage: "电子邮件",
            emailMeButtonText: "发电子邮件给我",
            // textMeButtonText: "text me",
            fieldRequiredErrorText: "输入电子邮件地址",
            invalidFormatErrorText: "格式如下: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      // sp: 0,
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['qualcomm.cn']
    }
  },
  {
    name: 'mobile_web_en',
    platform: 'phone',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinviteM'><li>Survey will be sent at the end of your visit</li><li>Your answers will remain private</li></ul>",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address or mobile number (US and CA only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            // e for email only, s for sms only, b for both
            inputMessage: "email or mobile number",
            emailMeButtonText: "email me",
            textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter a mobile number or email address",
            invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'tablet_in',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinviteM'><li>Survey will be sent at the end of your visit</li><li>Your answers will remain private</li></ul>",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            // e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            // textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter an email address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      // sp: 0,
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['qualcomm.co.in']
    }
  },
  {
    name: 'tablet_eu',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinviteM'><li>Survey will be sent at the end of your visit</li><li>Your answers will remain private</li></ul>",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email me",
          error: "Error",
          mobileExitDialog: {
            support: "e",
            // e for email only, s for sms only, b for both
            inputMessage: "email",
            emailMeButtonText: "email me",
            // textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter an email address",
            invalidFormatErrorText: "Format should be: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 0,
      //sp : 100,
      lf: 2
    },
    include: {
      urls: ['qualcomm.co.uk']
    }
  },
  {
    name: 'tablet_zh',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "您的意见可帮助我们为您提供更好的服务！",
          blurb: "<ul class='ulinviteM'><li>您的访问结束时，会向您发送意见调查问卷</li><li>您的回答会始终保密</li></ul>",
          attribution: "由ForeSee主办。",
          declineButton: "不，谢谢",
          acceptButton: "是，我愿意参加",
          error: "错误"
        }],
        [{
          reverseButtons: false,
          headline: "谢谢您的帮助！",
          blurb: "请提供您的电子邮件地址。您的访问结束后，我们将向您发送这项调查问卷的链接。",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>的隐私政策</a>",
          declineButton: "取消",
          acceptButton: "发电子邮件给我",
          error: "错误",
          mobileExitDialog: {
            support: "e",
            // e for email only, s for sms only, b for both
            inputMessage: "电子邮件",
            emailMeButtonText: "发电子邮件给我",
            // textMeButtonText: "text me",
            fieldRequiredErrorText: "输入电子邮件地址",
            invalidFormatErrorText: "格式如下: name@domain.com"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      // sp: 0,
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['qualcomm.cn']
    }
  },
  {
    name: 'tablet_en',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      delay: 10,
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinviteM'><li>Survey will be sent at the end of your visit</li><li>Your answers will remain private</li></ul>",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address or mobile number (US and CA only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            // e for email only, s for sms only, b for both
            inputMessage: "email or mobile number",
            emailMeButtonText: "email me",
            textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter a mobile number or email address",
            invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'browse',
    platform: 'desktop',
    invite: {
      when: 'onentry',
      delay: 10
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 100,
      lf: 2
    },
    locales: [{
      locale: 'eu',
      sp: 0,
      //sp : 100,
      lf: 2
    },
    {
      locale: 'cn',
      // sp: 0,
      sp: 100,
      lf: 2
    },
    {
      locale: 'in',
      // sp: 0,
      sp: 100,
      lf: 2
    }],
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 90,

    repeatoverride: false,

    altcookie: {},

    language: {
      locale: 'en',
      src: 'location',
      locales: [{
        match: 'qualcomm.co.uk',
        locale: 'eu'
      },
      {
        match: 'qualcomm.cn',
        locale: 'cn'
      },
      {
        match: 'qualcomm.co.in',
        locale: 'in'
      }]
    },

    exclude: {},

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /* mobile on exit heartbeat delay seconds */
      max: 3600 /* mobile on exit heartbeat max run time seconds */
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      // alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Your opinions let us serve you better!",
          blurb: "<ul class='ulinvite'><li>Survey will appear at the end of your visit</li><li>Your answers will remain private</li></ul>",
          // noticeAboutSurvey: "The survey is designed to measure your entire
          // experience, please look for it at the <u>conclusion</u> of your
          // visit.",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window",

          locales: {
            "eu": {
              headline: "Your opinions let us serve you better!",
              blurb: "<ul class='ulinvite'><li>Survey will appear at the end of your visit</li><li>Your answers will remain private</li></ul>",
              // noticeAboutSurvey: "The survey is designed to measure
              // your entire experience, please look for it at the
              // <u>conclusion</u> of your visit.",
              attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
              closeInviteButtonText: "Click to close.",
              declineButton: "No, thanks",
              acceptButton: "Yes, I'll give feedback"
            },
            "in": {
              headline: "Your opinions let us serve you better!",
              blurb: "<ul class='ulinvite'><li>Survey will appear at the end of your visit</li><li>Your answers will remain private</li></ul>",
              // noticeAboutSurvey: "The survey is designed to measure
              // your entire experience, please look for it at the
              // <u>conclusion</u> of your visit.",
              attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
              closeInviteButtonText: "Click to close.",
              declineButton: "No, thanks",
              acceptButton: "Yes, I'll give feedback"
            },
            "cn": {
              headline: "您的意见能让我们更好的为您服务！",
              blurb: "<ul class='ulinvite'><li>您的访问结束后，将会出现一份调查</li><li>您的回答将会保持隐私</li></ul>",
              // noticeAboutSurvey:
              // "设计本项调查的目的是检测您的整个体验，请准备好在您访问结束时填写这份调查。",
              attribution: "本项调查由独立公司 ForeSee 代表您造访的网站举办。",
              closeInviteButtonText: "单击此处关闭。",
              declineButton: "不参加，谢谢",
              acceptButton: "是，我会提供反馈意见"
            }
          }
        }]
      ],

      exclude: {
        urls: ['/whywait', '/contact', '/signup', '/evaluation-kit', '/newsletter'],
        referrers: [],
        userAgents: [],
        browsers: [],
        cookies: [],
        variables: []
      },
      include: {
        local: ['.']
      },

      // delay: 0,
      timeout: 0,

      hideOnClick: false,

      hideCloseButton: false,

      css: 'foresee_dhtml.css',

      hide: [],

      hideFlash: false,

      type: 'dhtml',
      /* desktop */
      // url: 'invite.html'
      /* mobile */
      url: 'invite-mobile.html',
      back: 'url'

      // SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 10,

      // Fast timeout is when we think there's a good chance we've closed the
      // browser
      fasttimeout: 4,

      adjust: true,
      alert: {
        enabled: true,
        message: 'The survey is now available.',
        locales: [{
          locale: 'cn',
          message: '本项调查现在可供使用。 '
        }]
      },
      url: 'tracker.html',
      locales: [{
        locale: 'eu',
        url: 'tracker_eu.html',
        height: '435'
      },
      {
        locale: 'in',
        url: 'tracker_eu.html',
        height: '435'
      },
      {
        locale: 'cn',
        url: 'tracker_cn.html',
        height: '435'
      }]
    },

    survey: {
      width: 690,
      height: 600
    },

    qualifier: {
      footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
        accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee_dhtml.css',
      url: 'qualifying.html'
    },

    cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
    },

    pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
    },

    meta: {
      referrer: false,
      terms: false,
      ref_url: false,
      url: false,
      url_params: false,
      user_agent: false,
      entry: false,
      entry_params: false
    },

    events: {
      enabled: true,
      id: true,
      codes: {
        purchase: 800,
        items: 801,
        dollars: 802,
        followup: 803,
        information: 804,
        content: 805
      },
      pd: 7,
      custom: {}
    },

    previous: false,

    analytics: {
      google_local: false,
      google_remote: false
    },

    cpps: {
      Viewed_Snapdragon_Content: { // this will be the name of the cpp
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/products/snapdragon',
          value: 'Y' // This will be the value sent
        },
        {
          regex: '/news/snapdragon',
          value: 'Y'
        }]
      },
      Viewed_Products: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/products',
          value: 'Y'
        }]
      },
      Viewed_Invention: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention',
          value: 'Y'
        }]
      },
      Viewed_News: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/news',
          value: 'Y'
        }]
      },
      Viewed_Company: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/company',
          value: 'Y'
        }]
      },
      Viewed_Stories: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention/stories',
          value: 'Y'
        }]
      },
      Viewed_Research: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention/research',
          value: 'Y'
        }]
      },
      Viewed_ImpaQt: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention/impaqt',
          value: 'Y'
        }]
      },
      Viewed_Ventures: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention/ventures',
          value: 'Y'
        }]
      },
      Viewed_Licensing: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention/licensing',
          value: 'Y'
        }]
      },
      Viewed_Wireless_Technologies: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/invention/technologies/wireless',
          value: 'Y'
        }]
      },
      Viewed_Why_Wait_Campaign: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/whywait',
          value: 'Y'
        }]
      },
      Viewed_Solutions: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: 'qualcomm.com/solutions',
          value: 'Y'
        }]
      },
      Viewed_Storefront: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/solutions',
          value: 'Y'
        },
        {
          regex: '/products/catalog',
          value: 'Y'
        },
        {
          regex: '/products/ar',
          value: 'Y'
        },
        {
          regex: '/products/qca',
          value: 'Y'
        },
        {
          regex: '/products/csr',
          value: 'Y'
        },
        {
          regex: '/products/ipq',
          value: 'Y'
        },
        {
          regex: '/products/wcn',
          value: 'Y'
        },
        {
          regex: '/products/mdm',
          value: 'Y'
        },
        {
          regex: '/products/quick-charge',
          value: 'Y'
        },
        {
          regex: '/products/platform',
          value: 'Y'
        },
        {
          regex: '/products/bluecore',
          value: 'Y'
        },
        {
          regex: '/products/s4',
          value: 'Y'
        },
        {
          regex: '/products/s3',
          value: 'Y'
        },
        {
          regex: '/products/qualcomm',
          value: 'Y'
        },
        {
          regex: '/products/development-kit',
          value: 'Y'
        }]
      },
      OMTR_BEACON: {
        source: 'function',
        value: function getAABeacon() {
          function getQueryValue(args, str) {
            var res = "",
                strb = str.split('&');
            for (var p = 0; p < strb.length; p++) {
              var bts = strb[p].split('=');
              for (var h = 0; h < args.length; h++) {
                if (args[h] == bts[0]) {
                  res += bts[0] + '=' + bts[1] + '&';
                  break;
                }
              }
            }
            if (res.substr(res.length - 1) == '&') {
              res = res.substr(0, res.length - 1);
            }
            return res;
          }

          var whitelist = ['AQB', 'mid', 'aid', 'vid', 'fid', 'AQE'],
              foundSrc = '';
          for (var p in window) {
            if ((p.substring(0, 4) == 's_i_') && (window[p].src)) {
              var src = window[p].src;
              if (src.indexOf('/b/ss/') >= 0) {
                foundSrc = src;
                break;
              }
            }
          }
          // TODO: also loop through document.images just in case
          if (!foundSrc && window.document.images) {
            for (var image_num = 0; image_num < window.document.images.length; image_num++) {
              var src = window.document.images[image_num].src;
              if (src.indexOf('/b/ss/') >= 0) {
                foundSrc = src;
                break;
              }
            }
          }
          if (!foundSrc && localStorage) {
            return (localStorage.getItem("fsr_om") || "");
          }

          var mainURL = foundSrc.substring(0, foundSrc.indexOf('?')),
              query = foundSrc.substring(foundSrc.indexOf('?') + 1),
              filteredQuery = '';
          filteredQuery = getQueryValue(whitelist, query);
          if (s && s.trackingServerSecure) {
            var mainURL = "https://" + s.trackingServerSecure + foundSrc.substring(foundSrc.indexOf('/b/ss/'), foundSrc.indexOf('?')),
                query = foundSrc.substring(foundSrc.indexOf('?') + 1),
                filteredQuery = '';
            filteredQuery = getQueryValue(whitelist, query);
          }
          var finalval = mainURL + '?' + filteredQuery;
          try {
            if (finalval && finalval.length > 0) {
              localStorage.setItem("fsr_om", finalval);
            } else {
              finalval = localStorage.getItem("fsr_om") || "";
            }
          } catch (e) {}
          return finalval;
        }
      }
    },

    mode: 'first-party'
  };

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);