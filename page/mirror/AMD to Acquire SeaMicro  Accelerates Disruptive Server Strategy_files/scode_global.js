/* eslint-disable */
/*
 * SP2013 Global scode
 * Last Update 13:26 EST 07/10/2017
 */

cvCheckSearchAjax = '';
cvPageLoad = cv404 = 0;

/* Custom Function for Link Tracking */

cfLnkClick = (function(evt) {
    var isPromoClick = 0;
    var defeatCharLimit = cvURL;
    var cvEvents = "",
        cvDFAEvent = "";
    Destination_LID = "", Destination_LPOS = "", cvDestination_URL = "", Destination_URL_wParam = "", cvDestination_URL_ext = "", Destination_Name = "", Destination_Server = "", Destination_Domain = "", cvDownloadFileExt = "", cvNRPPR = "", sAA.linkType = "", sAA.eVar32 = "", sAA.eVar31 = "", sAA.eVar33 = "", sAA.eVarMan = "", sAA.eVarCat = "", LnkTypePos = "";
    o = evt.target;
    cvLinkType = '';
	  if (typeof o.tagName != 'undefined') {
        cvTagName = o.tagName.toLowerCase();
    }
    if (typeof o.parentNode != 'undefined') {
        cvPTagName = o.parentNode.tagName.toLowerCase();
        if (typeof o.parentNode.parentNode != 'undefined' && !cfIsNullOrWhitespace(o.parentNode.parentNode) && o.parentNode.tagName.toLowerCase() != 'html') {
            if (typeof o.parentNode.parentNode.tagName != 'undefined') {
                cvPPTagName = o.parentNode.parentNode.tagName.toLowerCase();
                if (typeof o.parentNode.parentNode.className != 'undefined') {
                    cvPPClassName = o.parentNode.parentNode.className.toLowerCase();
                }
                if (typeof o.parentNode.parentNode.parentNode != 'undefined' && !cfIsNullOrWhitespace(o.parentNode.parentNode.parentNode) && o.parentNode.parentNode.tagName.toLowerCase() != 'html') {
                    if (typeof o.parentNode.parentNode.parentNode.tagName != 'undefined') {
                        cvPPPTagName = o.parentNode.parentNode.parentNode.tagName.toLowerCase();
                        if (typeof o.parentNode.parentNode.parentNode.className != 'undefined') {
                            cvPPPClassName = o.parentNode.parentNode.parentNode.className.toLowerCase();
                        }
                    }
                }

            }
        }
    }
    if ((cvTagName != 'a') && !((typeof o.parentNode != 'undefined') && (cvTagName == 'area' && cvPTagName == 'map')) && !(cvTagName == 'div' && unescape(o.className) == 'accordiontitle') && (cvTagName != 'button')) {
        exitLoop = 0;
        treeLevels = 0;
        var GAo = o;
        while ((treeLevels < 4) && !exitLoop && GAo.tagName.toLowerCase() != "body") {
            if (typeof GAo.parentNode != 'undefined') {
                GAo = GAo.parentNode;
                if (typeof GAo.tagName != 'undefined') {
                    cvGATagName = GAo.tagName.toLowerCase();
                }
                if (typeof GAo.parentNode != 'undefined') {
                    cvGAPTagName = GAo.parentNode.tagName.toLowerCase();
                    if (typeof GAo.parentNode.parentNode != 'undefined' && !cfIsNullOrWhitespace(GAo.parentNode.parentNode) && GAo.parentNode.tagName.toLowerCase() != 'html') {
                        if (typeof GAo.parentNode.parentNode.tagName != 'undefined') {
                            cvGAPPTagName = GAo.parentNode.parentNode.tagName.toLowerCase();
                            if (typeof GAo.parentNode.parentNode.className != 'undefined') {
                                cvGAPPClassName = GAo.parentNode.parentNode.className.toLowerCase();
                            }
                            if (typeof GAo.parentNode.parentNode.parentNode != 'undefined' && !cfIsNullOrWhitespace(GAo.parentNode.parentNode.parentNode) && GAo.parentNode.parentNode.tagName.toLowerCase() != 'html') {
                                if (typeof GAo.parentNode.parentNode.parentNode.tagName != 'undefined') {
                                    cvGAPPPTagName = GAo.parentNode.parentNode.parentNode.tagName.toLowerCase();
                                    if (typeof GAo.parentNode.parentNode.parentNode.className != 'undefined') {
                                        cvGAPPPClassName = GAo.parentNode.parentNode.parentNode.className.toLowerCase();
                                    }
                                }
                            }

                        }
                    }
                }
                if ((cvGATagName == 'a') || ((typeof GAo.parentNode != 'undefined') && (cvGATagName == 'area' && cvGAPTagName == 'map')) || (cvGATagName == 'div' && unescape(GAo.className) == 'accordiontitle') || (cvGATagName == 'button')) {
                    o = GAo;
                    cvTagName = cvGATagName;
                    cvPTagName = cvGAPTagName;
                    cvPPTagName = cvGAPPTagName;
                    cvPPPTagName = cvGAPPPTagName;
                    cvPPClassName = cvGAPPClassName;
                    cvPPPClassName = cvGAPPPClassName;
                    exitLoop = 1;
                }
            } else {
                exitLoop = 1;
            }
            treeLevels++;
        }
    }
    if (cvTagName == 'a') {
        cvLinkType = 'Link|A';
        if (typeof(o.href) !== 'undefined') {
            Destination_URL_wParam = o.href.toLowerCase();
        }
        if (typeof o.className !== "undefined") {
            if ((o.className.indexOf("menu-item") != -1) || (o.className.indexOf("ms-core-listMenu-item") != -1) || (o.className.indexOf("menu-item-text") != -1) || (o.className.indexOf("static") != -1)) {
                cvLinkType = 'Link|LeftNavlinks';
            } else if (cvPTagName != "" && cvPPTagName != "" && !cfIsNullOrWhitespace(o.parentNode.parentNode) && typeof o.parentNode.parentNode.className != 'undefined' && o.parentNode.parentNode.className.indexOf("rwd_menu_dropdown") != -1) {
                cvLinkType = 'Link|MegaMenuSmall';
            }

        }
        if (typeof cvPPPClassName !== "undefined") {
            if (cvPPPClassName == "breadcrumb") {
                cvLinkType = 'Link|Breadcrumb';
            }
        }

        try {
            cvFoundChild = cfFindChild(o, "IMG");
        } catch (err) {}
        if (typeof cvFoundChild != "undefined") {
            cvLinkType = 'Link|IMG';
            if (typeof(cvFoundChild.src) !== 'undefined') {
                cvImageSRC = parseUri(cvFoundChild.src).host + parseUri(cvFoundChild.src).path;
                cvImageSRC = cvImageSRC.replace(/(publishingimages.photography)/i, "...");
                cvImageSRC = cvImageSRC.replace(/(publishingimages.public)/i, "");
                cvImageSRC = cvImageSRC.replace(/(flash|style library|graphic_illustrations)/i, "...");
                cvImageSRC = cvImageSRC.replace(/webbannerjpeg/i, "...");
                cvImageSRC = cvImageSRC.replace(/(now.eloqua.com|images.global.amd.com\/eloquaimages\/clients\/advancedmicrodevicesamdmae\/({|%7b).*(}|%7d)_)/i, "...");

                if (typeof(cvFoundChild.alt) !== 'undefined') {
                    Destination_LID = "IMG|ALT|" + cvImageSRC + "|" + unescape(cvFoundChild.alt);
                } else if (typeof(cvFoundChild.name) !== 'undefined') {
                    Destination_LID = "IMG|NAME|" + cvImageSRC + "|" + unescape(cvFoundChild.name);
                } else if (typeof(cvFoundChild.id) !== 'undefined') {
                    Destination_LID = "IMG|ID|" + cvImageSRC + "|" + unescape(cvFoundChild.id);
                } else {
                    Destination_LID = "IMG|SRC|" + cvImageSRC;
                }
            }
            if (typeof(o.name) !== 'undefined') {
                Destination_Name = unescape(o.name);
            }
        } else if (typeof cvPPPTagName != 'undefined') {
            if (cvPPPTagName == 'div') {
                if (cvPPPClassName.indexOf("where_to_buy") != -1) {
                    cvLinkType = 'Link|Shop'; //Shop WTB
                } else if (cvPPPClassName.indexOf("navlinks") != -1) {
                    cvLinkType = 'Link|HeaderNavlinks';
                }
            }
        }

        if (((parseUri(cvURL).host == "www-auth.amd.com" || parseUri(cvURL).host == "www.amd.com" || parseUri(cvURL).host == "amd.com") && (/(en-us|de-de|en-gb|es-es|es-xl|fr-fr|it-it|ja-jp|ko-kr|pl-pl|pt-br|ru-ru|tr-tr|zh-cn|zh-tw)($|\/$|\#|\?|\/#|\/\?)/i.test(cvURL)))) { //homepages

            if ((jQuery(o).parents('[class*="Hero"]').length) || (jQuery(o).parents('[class*="hero"]').length)) {
                jQuery('.homePageHeroLink').each(function(hrps) {
                    var link = jQuery(this).find('a');
                    link.attr("heropos", "Hero" + (hrps + 1));
                    hrps++
                });
                if (typeof jQuery(o).attr('heropos') != "undefined") {
                    Destination_LPOS = jQuery(o).attr('heropos');
                    isPromoClick = 1;
                } else {
                    Destination_LPOS = "Hero";
                    isPromoClick = 1;
                }
            } else if (jQuery(o).parents('[class="quickNav"]').length) {
                jQuery('.quickNavContainer').each(function() {
                    var link = jQuery(this).find('a');
                    link.attr("qnav", "QuickNav" + (jQuery(this).index() + 1));
                });
                if (typeof jQuery(o).attr('qnav') != "undefined") {
                    Destination_LPOS = jQuery(o).attr('qnav');
                    isPromoClick = 1;
                } else {
                    Destination_LPOS = "QuickNav";
                    isPromoClick = 1;
                }
            } else if (jQuery(o).parents('[class="pointerFeaturesContainer"]').length) {
                jQuery('.pointerFeature').each(function() {
                    var link = jQuery(this).find('a');
                    link.attr("fimg", "FeatureImg" + (jQuery(this).index() + 1));
                });
                jQuery('.pointerFeatureCopy').each(function() {
                    var link = jQuery(this).find('a');
                    link.attr("fcopy", "FeatureCopy" + (jQuery(this).index() + 1));
                });
                if (typeof jQuery(o).attr('fimg') != "undefined") {
                    Destination_LPOS = jQuery(o).attr('fimg');
                    isPromoClick = 1;
                } else if (typeof jQuery(o).attr('fcopy') != "undefined") {
                    Destination_LPOS = jQuery(o).attr('fcopy');
                    isPromoClick = 1;
                } else {
                    Destination_LPOS = "Feature";
                    isPromoClick = 1;
                }
            } else if (jQuery(o).parents('[class*="tile"]').length) {
                jQuery('.homepageTiles>div').each(function() {
                    var link = jQuery(this).find('a');
                    link.attr("title", "Tile" + (jQuery(this).index() + 1));
                });
                if (typeof o.title != "undefined") {
                    Destination_LPOS = o.title;
                    isPromoClick = 1;
                } else {
                    Destination_LPOS = "Tile";
                    isPromoClick = 1;
                }
            }
            if (/shop.*amd.com/i.test(cvURL)) { //shop home
                if (jQuery(o).parents('[class="homeResellers"]').length) {
                    Destination_LPOS = "homeResellers";
                } else if (jQuery(o).parents('[class="homeComputers"]').length) {
                    Destination_LPOS = "homeComputers";
                } else if (jQuery(o).parents('[class="homeComponents"]').length) {
                    Destination_LPOS = "homeComponents";
                }
            }
            if (/partner.*amd.com/i.test(cvURL)) {
                if (jQuery(o).parents('[id*="lightbox"]').length) {
                    cvLinkType = 'Link|Lightbox';
                } else if (jQuery(o).parents('[id*="cookieContent"]').length) {
                    cvLinkType = 'Link|CookieContent';
                }
            }
        } else if (parseUri(cvURL).host != "community.amd.com" && jQuery(o).parents('[class*="productDetailHero2"]').length) {
            jQuery('.productDetailHero2').each(function() {
                var link = jQuery(this).find('a');
                link.attr("title", "Hero2Promo" + (jQuery(this).index() - 1));
            });
            if (o.title != "undefined") {
                Destination_LPOS = o.title;
            } else {
                Destination_LPOS = "Hero2Promo";
            }
        } else if (parseUri(cvURL).host != "community.amd.com" && jQuery(o).parents('[class*="gamePromo"]').length) {
            if (jQuery(o).parents('[class="gamePromoOne"]').length) {
                Destination_LPOS = "GamePromo1";
            } else if (jQuery(o).parents('[class="gamePromoTwo"]').length) {
                Destination_LPOS = "GamePromo2";
            } else if (jQuery(o).parents('[class="gamePromoThree"]').length) {
                Destination_LPOS = "GamePromo3";
            } else {
                Destination_LPOS = "GamePromo";
            }
        } else if (parseUri(cvURL).host != "community.amd.com" && ((jQuery(o).parents('[class*="Hero"]').length) || (jQuery(o).parents('[class*="hero"]').length))) {
            Destination_LPOS = "HeroBanner";
        } else if (parseUri(cvURL).host != "community.amd.com" && jQuery(o).parents('[id*="lightbox"]').length) {
            cvLinkType = 'Link|Lightbox';
        } else if (parseUri(cvURL).host != "community.amd.com" && jQuery(o).parents('[id*="cookieContent"]').length) {
            cvLinkType = 'Link|CookieContent';
        }
    } else if (typeof o.parentNode != 'undefined') {
        if (cvTagName == 'area' && cvPTagName == 'map') {
            cvLinkType = 'Link|IMGMAP';
        } else if (cvTagName == 'div' && unescape(o.className) == 'accordiontitle') {
            cvLinkType = 'Link|AccordionTitle';
        } else if (cvTagName == 'button') {
            cvLinkType = 'Link|Button';
        }
    }
    if (!cfIsNullOrWhitespace(cvLinkType)) {
        if (cvLinkType == 'Link|A') {
            if (typeof o.href != 'undefined') {
                Destination_URL_wParam = unescape(o.href.toLowerCase());
            }
            cvDestination_URL = Destination_URL_wParam.split("?")[0];

            if (Destination_URL_wParam.indexOf('/node/') != -1) {
                cvISseamicro = 1;
            } else {
                cvISseamicro = 0;
            } //seamicro drupal link
            Destination_LID = '';
            if (unescape(o.innerHTML) != '') {
                if (Destination_LID == '') {
                    if (Destination_URL_wParam.indexOf("cdn.bluestacks.com") != -1) {
                        cvDestination_URL = Destination_URL_wParam.split("?")[0];
                        cvDestination_URL_ext = parseUri(cvDestination_URL).file.split(".");
                        cvDestination_URL_ext = cvDestination_URL_ext[cvDestination_URL_ext.length - 1];

                        if (!cfIsNullOrWhitespace(cvDestination_URL_ext) && (cvDownloadExtentions.indexOf(cvDestination_URL_ext) != -1)) {
                            Destination_LID = parseUri(Destination_URL_wParam).file;
                        }
                    } else if (o.className == 'hero_button') {
                        Destination_LID = "Btn-hero|" + unescape(o.innerHTML) + "|" + parseUri(cvDestination_URL).file;
                        if (typeof(o.name) !== 'undefined') {
                            Destination_LID += "|" + o.name
                        }
                    } else if (/(.*)_?button/i.test(o.className)) {
                        cvButtonColor = o.className.match(/(.*)_?button/i);
                        Destination_LID = "Btn-" + cvButtonColor[1] + "|" + unescape(o.innerHTML);
                    } else if ((typeof o.parentNode != 'undefined') && (o.parentNode.tagName.toLowerCase() == 'div' && /(.*)button.*/i.test(o.parentNode.className))) {
                        cvButtonColor = o.parentNode.className.match(/(.*)button.*/i);
                        Destination_LID = "Btn-" + cvButtonColor[0] + "|" + unescape(o.innerHTML);
                    } else if ((typeof o.parentNode != 'undefined') && (o.parentNode.tagName.toLowerCase() == 'li' && /tab\d.*/i.test(o.parentNode.className))) {
                        Destination_LID = "Tab" + "|" + o.parentNode.className.match(/tab\d.*/i) + "|" + unescape(o.innerHTML);
                    } else if ((typeof o.parentNode != 'undefined') && (typeof o.parentNode.parentNode != 'undefined') && (typeof o.parentNode.parentNode.className != 'undefined') && (o.parentNode.parentNode.className.indexOf("addthis") != -1)) {
                        Destination_LID = "AddThis" + "|" + unescape(o.innerHTML);
                        Destination_LPOS = "AddThis";
                    } else Destination_LID = unescape(o.innerHTML); //gets anchor text
                }
            } else if (unescape(o.parentNode.className) != '') { //AR 3.2 to accomodate <DIV><A></A></DIV>
                Destination_LID = (unescape(o.parentNode.className));
            } else if (unescape(o.className) != '') { //AR 3.2 to accomodate <DIV><A></A></DIV>
                Destination_LID = (unescape(o.className));
            } else {
                Destination_LID = Destination_URL_wParam;
            }

            if (cvISseamicro == 1) {
                Destination_LID = parseUri(Destination_URL_wParam).file + "|" + Destination_LID; //prepend with seamicro drupal node ID
            }
            // Destination_Name = unescape(o.name);
            Destination_Name = decodeURIComponent(o.name);
            if (Destination_Name == "undefined") {
                Destination_Name = "";
            }
            Destination_ID = unescape(o.id); //AR 3.0 added "ID" attribute for LID and LPOS tracking
            if (!cfIsNullOrWhitespace(parseUri(Destination_URL_wParam).queryKey["promo"])) {
                Destination_LID = Destination_LID + "|promo:" + parseUri(Destination_URL_wParam).queryKey["promo"];
            }
        } else if (cvLinkType == 'Link|IMGMAP') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "IMG|MAP|" + Destination_Name;
        } else if (cvLinkType == 'Link|Shop') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "Shop|WTB|" + unescape(o.innerHTML) + "|" + parseUri(Destination_URL_wParam).host;
            Destination_LPOS = "Shop|WTB";
        } else if (cvLinkType == 'Link|Lightbox') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "Lightbox|" + unescape(o.innerHTML);
            Destination_LPOS = "Lightbox";
        } else if (cvLinkType == 'Link|CookieContent') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "CookieContent|" + unescape(o.innerHTML);
            Destination_LPOS = "CookieContent";
        } else if (cvLinkType == 'Link|MegaMenuSmall') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "mm|" + unescape(o.innerHTML);
            Destination_LPOS = "megamenu";
        } else if (cvLinkType == 'Link|HeaderNavlinks') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "HeaderNavLinks|" + unescape(o.innerHTML);
            Destination_LPOS = "HeaderNavLinks";
        } else if (cvLinkType == 'Link|LeftNavlinks') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "LeftNavlinks|" + unescape(o.innerHTML);
            Destination_LPOS = "LeftNavlinks";
        } else if (cvLinkType == 'Link|Breadcrumb') {
            Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
            Destination_Name = unescape(o.href);
            Destination_LID = "Breadcrumb|" + unescape(o.innerHTML);
            Destination_LPOS = "Breadcrumb";
        } else if (cvLinkType == 'Link|IMG') {
            if (typeof o.href != 'undefined') Destination_URL_wParam = unescape(o.href.toLowerCase());
            cvDestination_URL = Destination_URL_wParam.split("?")[0];
        } else if (cvLinkType == 'Link|AccordionTitle') {
            Destination_URL_wParam = "AccordionTitle";
            Destination_LID = unescape(removeHTMLTags(o.innerHTML.toLowerCase()));
            Destination_Name = unescape(removeHTMLTags(o.innerHTML.toLowerCase()));
            Destination_LPOS = "AccordionTitle";
        } else if (cvLinkType == 'Link|Button') { //4p server
            Destination_LID = Destination_Name = o.id;
            Destination_URL_wParam = cvURL;
        }

        Destination_URL_wParam = Destination_URL_wParam.length ? Destination_URL_wParam : '';
        Destination_URL_wParam = Destination_URL_wParam.length ? Destination_URL_wParam.replace(/([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/g, 'pii') : '';
        Destination_URL_wParam = Destination_URL_wParam.length ? Destination_URL_wParam.replace(/([a-zA-Z0-9_.+-])+\%40(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/g, 'pii') : '';
        Destination_URL_wParam = Destination_URL_wParam.length ? Destination_URL_wParam.replace(/@/g, '(at)') : '';

        var Destination_Server = parseUri(Destination_URL_wParam).host;
        var Destination_Domain = "," + parseUri(Destination_URL_wParam).domain + "." + parseUri(Destination_URL_wParam).tld;
        Destination_URL_wParam_Original = Destination_URL_wParam;
        Destination_URL_wParam = "/" + parseUri(Destination_URL_wParam).host + parseUri(Destination_URL_wParam).relative;
        Destination_URL = Destination_URL_wParam.split("?")[0];
        var cvIsThisADownload = 0;
        //AR 3.0 added "ID" attribute for LID and LPOS tracking
        if (!cfIsNullOrWhitespace(Destination_ID) && cfIsNullOrWhitespace(Destination_Name)) {
            Destination_Name = Destination_ID;
        }
        //AR 2.7: Destination_Name validation to track &lid and &lpos in URL parameters if no "name" attribute is defined
        if ((Destination_Name == "undefined" || cfIsNullOrWhitespace(Destination_Name)) && (cvAMDWebProperties.indexOf(Destination_Domain) != -1) && ((Destination_URL_wParam.indexOf("lid=") != -1) || (Destination_URL_wParam.indexOf("lpos=") != -1))) {
            Destination_Name = Destination_URL_wParam;
        }
        var DADapp = 0;
        if ((Destination_Name == "undefined" || cfIsNullOrWhitespace(Destination_Name)) && (cvURL.indexOf("appid=dad") != -1)) {
            DADapp = 1;
        }
        if (Destination_Name) {
            Destination_Name = Destination_Name.replace("?", "&");
            Destination_Name = Destination_Name.replace("&LinkID=", "&lid="); //fix for LinkID vs. lid
            Destination_Name = Destination_Name.replace("&linkID=", "&lid="); //fix for LinkID vs. lid
            Destination_Name = Destination_Name.replace("&LnkType=", "&lnktype=");
            Destination_Name = Destination_Name.replace("&amp;LinkID=", "&lid="); //fix for LinkID vs. lid
            Destination_Name = Destination_Name.replace("&amp;linkID=", "&lid="); //fix for LinkID vs. lid
            Destination_Name = Destination_Name.replace("&amp;LnkType=", "&lnktype=");
            Destination_Name = Destination_Name.replace("#lid=", "&lid=");
            Destination_Name = Destination_Name.replace("&amp;lid=", "&lid="); //AR 2.3: fix for MOSS lid rewrite issue
            Destination_Name = Destination_Name.replace("#lnktype=", "&lnktype=");
            Destination_Name = Destination_Name.replace("&amp;lnktype=", "&lnktype=");
            Destination_Name = Destination_Name.replace("&amp;lpos=", "&lpos="); //AR 2.3: fix for MOSS lpos rewrite issue
            Destination_Name = Destination_Name.replace("#lpos=", "&lpos=");
            Destination_Name_Split = Destination_Name.split("&");
            for (var i = 0; i < Destination_Name_Split.length; i = i + 1) {
                if ((Destination_Name_Split[i].toLowerCase().indexOf("channelid=") == -1) && (Destination_Domain != ",en25.com") && (Destination_Server != "link.global.amd.com")) {
                    //AR 3.1 added filter to exclude LID tagging via URL for "channelid=" (salesedge portal issue)
                    // added filter to exclude eloqua redirect domain containing lid
                    if (Destination_Name_Split[i].toLowerCase().substr(0, 'lid='.length) === 'lid=') {
                        Destination_LID = Destination_Name_Split[i].substring(4, Destination_Name_Split[i].length); // Extract LID (Link ID) from name="&lid="
                        if (o.tagName == 'IMG' && o.parentNode.tagName == 'A') {
                            Destination_LID = Destination_LID + " | " + cfRight(unescape(o.src), 97 - Destination_LID.length);
                        }
                    }
                    if (Destination_Name_Split[i].toLowerCase().substr(0, 'lpos='.length) === 'lpos=') {
                        Destination_LPOS = Destination_Name_Split[i].substring(5, Destination_Name_Split[i].length); // Extract LPOS (Link Position) from name="&lpos="
                    }

                    if (Destination_Name_Split[i].toLowerCase().substr(0, 'lnktype='.length) === 'lnktype=') {
                        LnkTypePos = Destination_Name_Split[i].substring(8, Destination_Name_Split[i].length);
                        if (LnkTypePos.toLowerCase() == 'featured') {
                            LnkTypePos = "featuredlink";
                        } else if (LnkTypePos.toLowerCase() == 'promo') {
                            LnkTypePos = "promolink";
                        } else {
                            LnkTypePos = "";
                        }
                    }
                } // close AR 3.1 if == -1
            }
        }
        var cvDownloadFileExt = parseUri(Destination_URL).file.split("."); //AR 2.6: validate Null or Whitespace for URL
        cvDownloadFileExt = cvDownloadFileExt[cvDownloadFileExt.length - 1];
        if (!cfIsNullOrWhitespace(cvDownloadFileExt) && (cvNonDownloadExtensions.indexOf(cvDownloadFileExt) == -1) && (cvDownloadExtentions.indexOf(cvDownloadFileExt) != -1)) {
            //if extension on URL exists AND the extension is NOT in the exclude list AND the extension IS in the
            //download extension list, then set to 1
            //AR 2.5: removed !=0 condition to enable download tracking of exe files.
            //&& cvDownloadExtentions.indexOf(cfUtility(Destination_URL,"ext")) != 0)
            //AR 2.6: false means extension exists; -1 means it exists as download file extension
            cvIsThisADownload = 1;
        } else if ((!cfIsNullOrWhitespace(cvElqAssetType)) && (cvDownloadExtentions.indexOf(cvElqAssetType) != -1)) {
            cvIsThisADownload = 1;
            cvDownloadFileExt = cvElqAssetType;
        }
        Destination_LID = removeHTMLTags(Destination_LID);
        /* Custom Link, Exit Link, Download Link */
        if (((cvAMDWebProperties.indexOf(Destination_Domain) != -1) && (cvIsThisADownload != 1)) || (Destination_Domain.indexOf("undefined") != -1)) {
            sAA.linkType = "o"; // Internal Links
        } else if ((cvAMDWebProperties.indexOf(Destination_Domain) != -1) && (cvIsThisADownload == 1)) {
            sAA.linkType = "d"; // Download Links
        } else if (cfIsNullOrWhitespace(Destination_URL_wParam_Original)) {
            sAA.linkType = "o";
        } else {
            sAA.linkType = "e"; // External Links
        }
        sAA.linkName = Destination_LID;
        sAA.linkURL = Destination_URL;

        // Non Revenue Partner Referral (NRPPR) BOF
        if (sAA.linkType == "e") {
            if (Destination_LPOS != "PPRlink" && Destination_LPOS != "RTPPRLink") {
                Destination_CoreDomain = parseUri(Destination_URL_wParam_Original);
                if (Destination_URL_wParam_Original.indexOf("linksynergy") != -1) {
                    Destination_URL_wParam_Original_Split = Destination_URL_wParam_Original.split(/.*http/);
                    Destination_CoreDomain = parseUri(decodeURIComponent("http" + Destination_URL_wParam_Original_Split[1]));
                }

                // SourceURL_CoreDomain=parseURL(cvURL);
                SourceURL_CoreDomain = parseUri(cvURL);
                if ((cvPartnerExcludeDomains.indexOf(Destination_CoreDomain.domain) == -1) && ((cvSourceExcludeDomains.indexOf(SourceURL_CoreDomain.host) == -1) || (cvURL.indexOf("support.amd.com\/en-us\/download\/ccc") != -1))) {
                    var cvNRPPR = '';
                    if (/sites.amd.com.*server.*(hp|dell|cray|ibm|acer).*/i.test(cvURL)) {
                        cvNRPPR = "Server|" + cvURL.match(/hp|dell|cray|ibm|acer/i);
                    } else if (/sites.amd.*business.*north-america-partners.*/i.test(cvURL) || /www.amd.com.*server.*series-processors.*/i.test(cvURL)) {
                        cvNRPPR = "NAServer|";
                    } else if (/sites.amd.*business.*desktop.*(lenovo|dell).*/i.test(cvURL)) {
                        cvNRPPR = "OEM|Desktop|" + cvURL.match(/lenovo|dell/i);
                    } else if (/sites.amd.*business.*notebooks.*(lenovo|dell|hp).*/i.test(cvURL)) {
                        cvNRPPR = "OEM|Notebook|" + cvURL.match(/lenovo|dell|hp/i);
                    } else if (/VISION[|]CoolApps[|]DownloadNow.*/i.test(Destination_LID)) {
                        cvAppZoneCategory = parseUri(cvURL).file.split(".");
                        cvNRPPR = "AppZone|" + "|" + cvAppZoneCategory[0];
                    } else if (/vision.*cool-apps.*/i.test(cvURL)) {
                        cvAppZoneCategory = parseUri(cvURL).file.split(".");
                        cvAppZoneRegion = (parseUri(cvURL).host + parseUri(cvURL).directory).split("/");
                        cvNRPPR = "AppZone|" + cvAppZoneCategory[0] + "|" + cvAppZoneRegion[2].toUpperCase();
                    } else if (/sites.amd.com.*game\/games\/pages(.*)/i.test(cvURL) || /www.amd.com.*markets\/game(.*)/i.test(cvURL)) {
                        cvURL_fragment = cvURL.split('/');
                        cvGameTitle = cvURL_fragment[cvURL_fragment.length - 2];
                        cvNRPPR = "Game|" + cvGameTitle;
                    } else if (/hp-envy-iicg/i.test(cvURL)) {
                        cvNRPPR = "HP-Envy-IICG";
                    } else if (/if-it-can-game/i.test(cvURL)) {
                        cvNRPPR = "IICG";
                    } else if (cvURL.indexOf("products/processors/desktop/a-series-apu") != -1) {
                        Destination_LID = "Shop|WTB|APU|" + Destination_LID;
                        Destination_LPOS = "Shop|WTB";
                    } else if ((cvURL.indexOf("gpuopen.com") != -1) || (cvURL.indexOf("developer.amd.com") != -1) || (cvURL.indexOf("wwwd.amd.com") != -1)) {
                        cvNRPPR = "Developer";
                    } else if (cvURL.indexOf("community.amd.com") != -1) {
                        cvNRPPR = "Community";
                    } else if (cvURL.indexOf("subscriptions.amd.com") != -1) {
                        cvNRPPR = "Subscription-Email";
                    } else if (cvURL.indexOf("experience.amd.com") != -1) {
                        cvNRPPR = "Experience";
                    } else if (cvURL.indexOf("promo") != -1) {
                        cvNRPPR = "Promo";
                    } else if (cvURL.indexOf("innovations") != -1) {
                        cvNRPPR = "Innovations";
                    } else if (cvURL.indexOf("markets") != -1) {
                        cvNRPPR = "Markets";
                    } else if (cvURL.indexOf("radeonmemory.com") != -1) {
                        cvNRPPR = "RadeonMemory";
                    } else if (cvURL.indexOf("graphics/desktop") != -1) {
                        cvNRPPR = "Graphics|Desktop";
                    } else if (cvURL.indexOf("graphics/workstation") != -1) {
                        cvNRPPR = "Graphics|Workstation";
                    } else if (cvURL.indexOf("processors/desktop") != -1) {
                        cvNRPPR = "Processors|Desktop";
                    } else if (cvURL.indexOf("processors/notebook-tablet") != -1) {
                        cvNRPPR = "Processors|Notebook-Tablet";
                    } else if (cvURL.indexOf("processors") != -1) {
                        cvNRPPR = "Processors";
                    } else if (cvURL.indexOf("products/chipsets") != -1) {
                        cvNRPPR = "Chipsets";
                    } else if (cvURL.indexOf("products/embedded") != -1) {
                        cvNRPPR = "Embedded";
                    } else if (cvURL.indexOf("products/solid-state-drives") != -1) {
                        cvNRPPR = "SSD";
                    } else if (cvURL.indexOf("game") != -1) {
                        cvNRPPR = "Game";
                    } else if (cvURL.indexOf("solutions/software-partners") != -1) {
                        cvNRPPR = "Solutions|Software";
                    } else if (cvURL.indexOf("solutions/servers") != -1) {
                        cvNRPPR = "Solutions|Server";
                    } else if (cvURL.indexOf("server") != -1) {
                        cvNRPPR = "Server";
                    } else if (cvURL.indexOf("solutions/tablets") != -1) {
                        cvNRPPR = "Solutions|Tablets";
                    } else if (cvURL.indexOf("solutions/workstations") != -1) {
                        cvNRPPR = "Solutions|Workstations";
                    } else if (cvURL.indexOf("solutions/pro") != -1) {
                        cvNRPPR = "Solutions|Pro";
                    } else if (cvURL.indexOf("solutions/laptops") != -1) {
                        cvNRPPR = "Solutions|Laptops";
                    } else if (cvURL.indexOf("solutions/desktops") != -1) {
                        cvNRPPR = "Solutions|Desktops";
                    } else if (cvURL.indexOf("partners/distributor-locator") != -1) {
                        cvNRPPR = "Partners|Distributor";
                    } else if (cvURL.indexOf("partners/global-oems") != -1) {
                        cvNRPPR = "Partners|Global OEM";
                    } else if (cvURL.indexOf("partners/north-america-oems") != -1) {
                        cvNRPPR = "Partners|NA OEM";
                    } else if (cvURL.indexOf("partners/reseller-locator") != -1) {
                        cvNRPPR = "Partners|Reseller";
                    } else if (cvURL.indexOf("microsoft") != -1) {
                        cvNRPPR = "Business|Microsoft";
                    } else if (cvURL.indexOf("business") != -1) {
                        cvNRPPR = "Business";
                    } else if (cvURL.indexOf("consumer/where-to-buy") != -1) {
                        cvNRPPR = "Consumer|WTB";
                    } else if (cvURL.indexOf("press-releases") != -1) {
                        cvNRPPR = "Press Release";
                    } else if (cvURL.indexOf("who-we-are") != -1) {
                        cvNRPPR = "Who We Are";
                    } else if (cvURL.indexOf("amd4u.com") != -1) {
                        cvNRPPR = "AMD4U";
                    } else if (/\/www\.amd\.com\/(\D\D-\D\D)\//i.test(cvURL)) {
                        cvNRPPR = "homepage:" + cvURL.match(/\D\D-\D\D/i);
                    } else if (cvURL.indexOf("support.amd.com\/en-us\/download\/ccc") != -1) {
                        cvNRPPR = "CCC";
                    } else {
                        cvNRPPR = "ERROR";
                    }
                    if ((Destination_CoreDomain.domain != null) && cvNRPPR && (cvNRPPR != '')) {
                        cvNRPPR = "PartnerRef|" + Destination_CoreDomain.domain;
                        if (cvPartnerExcludeDestination_LID.indexOf(Destination_LID) == -1) {
                            cvNRPPR = "PartnerRef|" + Destination_LID + "|" + Destination_CoreDomain.domain;
                            sAA.eVar13 = sAA.prop13 = Destination_LID = cvNRPPR;
                            if (cvNRPPR.indexOf("AppZone") != -1) {
                                cvEvents += ",event80";
                            } else if (cvNRPPR.indexOf("ERROR") == -1) {
                                cvEvents += ",event99";
                            }
                        }
                    }
                }
            }
        } // Non Revenue Partner Referral (NRPPR) EOF

        if (cvURL && cvURL != '') {
            sAA.prop12 = cvURL; // Clicks by Page URL
        }
        if (Destination_LID && Destination_LID != '') {
            sAA.eVar13 = sAA.prop13 = Destination_LID; // Clicks by Link ID
        }
        if (Destination_URL && Destination_URL != '') {
            sAA.prop14 = Destination_URL; // Clicks by Link URL - No Params
        }
        if (DADapp == 1) {
            sAA.prop13 = "DAD|" + sAA.prop13;
            sAA.eVar13 = sAA.prop13;
            sAA.prop14 = "DAD|" + sAA.prop14;
            Destination_LPOS = "Driver AutoDetect (DAD)";
        }
        if (Destination_URL_wParam && Destination_URL_wParam != '') {
            sAA.eVar6 = Destination_URL_wParam; // Clicks by Link Full URL - With Params
        }
        if (cfCookieEnabled()) {
            if (/shop\.amd\.com\/.*k=.*/i.test(Destination_URL_wParam)) { //Shop OSS linked search vs. user search
                cfSetCookie('c_durl', Destination_URL_wParam, 1); //durl = destination URL
            }
            cfSetCookie('c_rurl', cvURL, -15); //rurl = current URL as Referring URL; negative expiry value denotes seconds not days
        }
        var isProductSearch = (parseUri(cvURL).host == "products.amd.com") && (!!jQuery(o).closest('div.ms-srch-result').length && !!csKeyword);
        if ((Destination_LPOS && Destination_LPOS != '') || isProductSearch) {
            Destination_LPOS = removeHTMLTags(Destination_LPOS);
            if (isProductSearch || (Destination_LPOS.indexOf("RankRelevancy|") != -1) || (Destination_LPOS.indexOf("Promoted|") != -1) || (/block\-.*\-relevancy\|/i.test(Destination_LPOS))) { //search result rank
                if (isProductSearch) {
                    Destination_LPOS = 'Unranked';
                } else {
                    cvSearchResultRank1 = Destination_LPOS.split("|");
                    cvSearchResultRank2 = cvSearchResultRank1[1].split("_");
                    if (cvSearchResultRank1[1].indexOf("_") != -1) {
                        cvSearchResultRankPosition = parseInt(cvSearchResultRank2[0]) + 1;
                    } else {
                        cvSearchResultRankPosition = cvSearchResultRank1[1];
                    }
                    Destination_LPOS = cvSearchResultRank1[0] + "|" + cvSearchResultRankPosition;
                }
                if (csKeyword != '') {
                    sAA.prop5 = sAA.eVar5 = csKeyword.toLowerCase(); // Internal Search Term result clicked
                }
                cvEvents += ",event13";
            }
            sAA.prop15 = sAA.eVar15 = Destination_LPOS; // Clicks by Link Position
        }
        if (cvURL.indexOf("experience.amd.com/feedback") != -1) {
            if (typeof Destination_LPOS == "undefined") {
                Destination_LPOS = "";
            }
            sAA.prop15 = sAA.eVar15 = Destination_LPOS = "SurveyTY|" + Destination_LPOS;
        }

        if (Destination_LID && Destination_LID != '' && Destination_LID.indexOf("|Complete") != -1) {
            cvEvents += ",event98";
        }
        // Link Clicks Event
        cvEvents += ",event6";

        /* Download Tracking */
        if (cvIsThisADownload) {
            cvIsDownloadDomain = 0;
            for (i = 0; i < cvDriverDownloadDomains.length; i++) { //AR 2.8 checks if download file belongs to a download domain
                if (Destination_URL.indexOf(cvDriverDownloadDomains[i]) != -1) {
                    cvIsDownloadDomain = 1;
                }
            }
            if (cvNonDownloadExtensions.indexOf(cvDownloadFileExt) == -1) { // driver or asset only if extension is not on exlude list
                if (((cvIsDownloadDomain) && (Destination_URL_wParam.indexOf('driver') != -1)) && (cvDriverExtensions.indexOf(cvDownloadFileExt) != -1)) {
                    //AR 2.8 assign LID
                    Destination_LID = "DD|";
                    if (Destination_URL_wParam.indexOf('processor') != -1) {
                        Destination_LID += "Processor";
                    } else if (Destination_URL_wParam.indexOf('embedded') != -1) {
                        Destination_LID += "Embedded";
                    } else if (Destination_URL_wParam.indexOf('chipsetmotherboard') != -1) {
                        Destination_LID += "Chipset";
                    } else if (Destination_URL_wParam.indexOf('fire') != -1) { //firepro, firegl, firemv
                        Destination_LID += "GPU-WS";
                    } else {
                        Destination_LID += "GPU-Other";
                    }

                    if (Destination_URL_wParam.indexOf('linux') != -1) {
                        Destination_LID += "-Linux|";
                    } else {
                        Destination_LID += "|";
                    }

                    Destination_LID += parseUri(Destination_URL).file;
                    sAA.linkName = Destination_LID;
                    sAA.eVar13 = sAA.prop13 = Destination_LID;
                    Destination_LPOS = "DD";
                    cvEvents += ",event15";
                    cvDFAEvent = "driver";
                } else {
                    cvEvents += ",event4"; // Asset Downloads Event (event4)
                    sAA.prop15 = sAA.eVar15 = Destination_LPOS = "AD";
                    Destination_LID = "AD|" + parseUri(Destination_URL).file;
                    if (((sAA.prop14.indexOf("the_amd_story") != -1) || (sAA.prop14.indexOf("the-amd-story") != -1)) && (sAA.prop14.indexOf(".pdf") != -1)) {
                        cvEvents += ",event32"; //AMD Story (event32)
                    }
                    cvDFAEvent = "asset";
                }
            }
        }

        // Custom Shop Now Link Tracking on Shop.amd.com SNC
        if (Destination_LPOS == "PPRlink") {
            sAA.linkTrackVars = sAA.linkTrackVars + ",prop30,prop31,prop32,prop33,eVar20,eVar30,eVar31,eVar32,eVar33,eVar34,products";
            sAA.linkTrackEvents = sAA.linkTrackEvents + ",event9,purchase";
            Destination_LID = Destination_LID.replace("|CND|", "|CAD|");
            cvShop_LinkID = Destination_LID.split("|");
            sAA.prop30 = sAA.prop12;
            sAA.eVar30 = sAA.eVar8;
            sAA.prop31 = sAA.eVar31 = cvShop_LinkID[2]; // RetailerID

            if ((typeof document.getElementsByName("shopUniqueID")[0] != "undefined") && (typeof document.getElementsByName("shopUniqueID")[0].value != "undefined")) {
                sAA.prop32 = sAA.eVar32 = document.getElementsByName("shopUniqueID")[0].value; // ProductID
            } else {
                sAA.prop32 = sAA.eVar32 = cvShop_LinkID[3]; // ProductID
            }

            sAA.prop33 = sAA.eVar33 = cvShop_LinkID[4].replace(',', '.'); // Price
            sAA.eVar34 = cvShop_LinkID[0] + "|" + cvShop_LinkID[1] + "|" + sAA.prop31 + "|" + sAA.prop32;
            sAA.eVar13 = sAA.prop13 = sAA.eVar34 + "|" + sAA.prop33 + "|" + cvShop_LinkID[5];
            if (cvShop_LinkID.length >= 8) {
                sAA.eVarMan = cvShop_LinkID[6];
                sAA.eVarCat = cvShop_LinkID[7];
                sAA.eVarCat = (sAA.eVarCat == "null") ? "N/A" : sAA.eVarCat;
            }
            if (cvShop_LinkID.length == 9) {
                sAA.eVarPrdNm = cvShop_LinkID[8];
            }
            var shopRealLnk = parseUri(Destination_URL_wParam.toLowerCase()).queryKey["rd_param1"] || parseUri(Destination_URL_wParam.toLowerCase()).queryKey["url"] || "";
            if (!cfIsNullOrWhitespace(shopRealLnk)) {
                var cvShopRealURL = "";
                try {
                    cvShopRealURL = decodeURI(shopRealLnk);
                } catch (err) {
                    cvShopRealURL = unescape(shopRealLnk);
                }
                var cvShopURLTemp = ',' + parseUri(cvShopRealURL).domain + '.' + parseUri(cvShopRealURL).tld;
                if (cvShopURLTemp.indexOf(',null.null') == -1) {
                  Destination_Domain = cvShopURLTemp;
                }
            }
            cvEvents += ",event9";
            cvEvents += ",purchase";
            sAA.products = ";" + sAA.prop32 + ";1;" + cvShop_LinkID[4].replace(',', '.');
            sAA.linkType = "s";
            // VWO tracking BOF
            /* if (typeof(_vis_opt_top_initialize) == "function") {
                _vis_opt_goal_conversion(203); // Code for Custom Goal: PPR Click
                _vis_opt_pause(500);
            } */

        }

        //review tracking

        if ((Destination_URL_wParam.indexOf("reviews") != -1) && (cvEvents.indexOf(",purchase") == -1)) {
            if (typeof ctProdView != "undefined" && ctProdView != "" && ctProdView != "undefined") {
                sAA.eVar32 = "Review|" + ctProdView;
            } else {
                sAA.eVar32 = "Review|" + parseUri(Destination_URL_wParam).file;
            }
            cvEvents += ",event60";
        }
    }
    if (cvTagName == "button" && cfIsNullOrWhitespace(Destination_LID)) {
        if (cvURL.indexOf("developer.amd.com") != -1) {
            if (!cfIsNullOrWhitespace(o.getAttribute('data-href'))) {
                Destination_LID = o.getAttribute('data-href');
            } else {
                Destination_LID = '(not set)';
            }
        } else {
            Destination_LID = "Generic Button";
        }
    }
    if (Destination_Server == "mars.amd.com") {
        if (!cfIsNullOrWhitespace(Destination_LPOS)) {
            Destination_LPOS = "MARS|" + Destination_LPOS;
        } else {
            Destination_LPOS = "MARS";
        }
    }
    if (Destination_LPOS == "RTPPRLink") {
        cvEvents = "";
    }
    if (!cfIsNullOrWhitespace(LnkTypePos)) {
        if (!cfIsNullOrWhitespace(Destination_LPOS)) {
            Destination_LPOS = Destination_LPOS + "|" + LnkTypePos;
        } else {
            Destination_LPOS = LnkTypePos;
        }
    }

    cvDestination_URL = cvDestination_URL.length ? cvDestination_URL : '';
    cvDestination_URL = cvDestination_URL.length ? cvDestination_URL.replace(/([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/g, 'pii') : '';
    cvDestination_URL = cvDestination_URL.length ? cvDestination_URL.replace(/([a-zA-Z0-9_.+-])+\%40(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/g, 'pii') : '';
    cvDestination_URL = cvDestination_URL.length ? cvDestination_URL.replace(/@/g, '(at)') : '';

    cvLnkTrack = {
        "DestLID": Destination_LID || "(not set)",
        "DestLPOS": Destination_LPOS || "(not set)",
        "DestURL": cvDestination_URL || "(not set)",
        "Events": cvEvents || "(not set)",
        "DestURLwParam": Destination_URL_wParam || "(not set)",
        "DestURLext": cvDestination_URL_ext || "(not set)",
        "DestName": Destination_Name || "(not set)",
        "DestServer": Destination_Server || "(not set)", //with subdomain
        "DestDomain": Destination_Domain || "(not set)", //without subdomain
        "DownloadFileExt": cvDownloadFileExt || "(not set)",
        "PartnerReferral": cvNRPPR || "(not set)",
        "LinkType": sAA.linkType || "(not set)",
        "DFAEvent": cvDFAEvent || "(not set)",
        "ProductID": sAA.eVar32 || "(not set)",
        "RetailerID": sAA.eVar31 || "(not set)",
        "Price": sAA.eVar33 || "0.01",
        "Manufacturer": sAA.eVarMan || "(not set)",
        "Category": sAA.eVarCat || "(not set)",
        "ProductName": sAA.eVarPrdNm || "(not set)",
        "DestLPOSCD19": Destination_LPOS || "Other"
    };

    if (isPromoClick || (typeof jQuery(o).attr('intpromo') != 'undefined')) {
        var that = jQuery(o);
        var IPCount = parseInt(that.attr('intpromo').substring(2), 10);
        isPromoVisible(trackPromo[IPCount - 1], 1);
        var cvPromoImageSRC = '';
        var cvPromoFoundChild;
        var cvPromoHTML;
        try {
            cvPromoFoundChild = cfFindChild(that, "IMG");
        } catch (err) {}
        if (typeof cvPromoFoundChild != "undefined") {
            if (typeof(cvPromoFoundChild.src) !== 'undefined') {
                cvPromoImageSRC = parseUri(cvFoundChild.src).host + parseUri(cvFoundChild.src).path;
            }
        } else {
            cvPromoHTML = unescape(that.html());
        }
        var cvPromoCreative = (cvPromoImageSRC ? cvPromoImageSRC : cvPromoHTML) || '(not set)';
        var cvPromoKName = parseUri(that.attr('href')).queryKey["k"] || '(not set)';
        var cvPromoPromoName = parseUri(that.attr('href')).queryKey["promo"] || '(not set)';
        var cvPromoiPromoName = parseUri(that.attr('href')).queryKey["ipromo"] || '(not set)';
        if (cvPromoKName == '(not set)' && cvPromoPromoName == '(not set)' && cvPromoiPromoName == '(not set)') {
            cvPromoKName = that.attr('href') || '(not set)';
            cvPromoiPromoName = cvPromoCreative;
        }
        var cvPromoClickType = that.is('div') ? 'promotionDivClick' : 'promotionClick';
        dataLayer.push({
            'event': cvPromoClickType,
            'ecommerce': {
                'promoClick': {
                    'promotions': [{
                        'id': cvPromoPromoName + '|' + cvPromoiPromoName + '|' + cvPromoKName + '|' + cvPromoCreative,
                        'name': cvPromoPromoName + '|' + cvPromoiPromoName + '|' + cvPromoKName,
                        'creative': cvPromoCreative,
                        'position': that.attr('intpromo') || '(not set)'
                    }]
                }
            },
        });
    }
    dataLayer.push({
        "event": "PageClick"
    });
    //return [Destination_LID,Destination_LPOS,cvDestination_URL,cvEvents,Destination_URL_wParam,cvDestination_URL_ext,Destination_Name,Destination_Server,Destination_Domain,cvDownloadFileExt,cvNRPPR];

    //1. need to return sAA.events
    //2. create variable and assign sAA.events to it
    //3. create event tags (one for each type of event) to fire if sAA.events variable contains "event#"
});


function slideboxInit(slideboxURL) {
    if (jQuery('#slidebox').length <= 0) {
        var cssId = 'slideboxCss';
        if (jQuery('#' + cssId).length <= 0) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'http://subscriptions.amd.com/css/slidebox.css';
            link.media = 'all';
            head.appendChild(link);
        }

        if (jQuery('#' + cssId).length > 0) {
            var slideboxDOM = document.createElement('div');
            slideboxDOM.id = 'slidebox';
            slideboxDOM.innerHTML = '<div id="tab" style="position:absolute;bottom:0;left:-20px;width:20px;height:135px;background-color:#000;z-index: 999999999;"><img src="http://subscriptions.amd.com/images/stay-up-to-date-blue-vert-20x135.png" /></div><a class="close">&nbsp;<\/a><iframe src="" width="0" height="0" id="slideframe"><\/iframe>';
            document.body.appendChild(slideboxDOM);
        }

        if (jQuery('#slidebox').length > 0) {
            window.slideboxLock = 0;
            document.domain = "amd.com";
            jQuery('#slidebox iframe').attr('frameborder', 0);
            var slideboxEl = jQuery('#slidebox');
            var slideboxTab = jQuery('#tab');
            var slideElement = '';
            if (slideboxEl.length > 0) {
                if (!!document.getElementById('s4-workspace') && !!document.getElementById('s4-bodyContainer') && !!document.getElementById('masthead')) {
                    slideElement = jQuery('#s4-workspace');
                } else {
                    slideElement = jQuery(window);
                }
                slideElement.scroll(function() {
                    var tmpPageSize = cfRWLayout();
                    var xframe, yframe;
                    if (tmpPageSize == 'small') {
                        xframe = 0;
                        yframe = 0;
                    } else if (tmpPageSize == 'medium') {
                        xframe = 500;
                        yframe = 250;
                    } else if (tmpPageSize == 'large') {
                        xframe = 500;
                        yframe = 250;
                    }
                    if (xframe !== 0) {
                        slideboxEl.css("zIndex", 999999999);
                        jQuery('#slidebox iframe').attr('width', xframe);
                        jQuery('#slidebox iframe').attr('height', yframe);
                        jQuery('#slidebox iframe').attr('right', -(xframe + 26));
                        if (jQuery('#slidebox iframe').attr('src') != slideboxURL) {
                            jQuery('#slidebox iframe').attr('src', slideboxURL);
                        }
                        var distanceTop;
                        try {
                            distanceTop = jQuery('.footer').first().offset().top - jQuery(window).height();
                        } catch (e) {
                            distanceTop = jQuery(window).height() * 0.85;
                        }
                        slideboxTab.off('mouseenter').on('mouseenter', (function() {
                            slideboxEl.animate({
                                'right': '0px'
                            }, 300);
                        }));
                        slideboxEl.off('mouseenter').on('mouseenter', (function() {
                            window.slideboxLock = 0;
                        }));
                        slideboxEl.off('mouseleave').on('mouseleave', (function() {
                            if (window.slideboxLock != 1) {
                                slideboxEl.stop(true).animate({
                                    'right': '-' + (xframe + 26) + 'px'
                                }, 100);
                            }
                        }));
                        if ((jQuery(window).scrollTop() > distanceTop) && (jQuery('#slidebox iframe').attr('width') !== 0)) {
                            slideboxEl.animate({
                                'right': '0px'
                            }, 300);
                        } else {
                            slideboxEl.stop(true).animate({
                                'right': '-' + (xframe + 26) + 'px'
                            }, 100);
                        }
                    } else {
                        slideboxEl.stop(true).animate({
                            'right': '-' + 99999 + 'px'
                        }, 100);
                    }
                });
                jQuery(window).resize(function() {
                    slideboxEl.stop(true).animate({
                        'right': '-' + 99999 + 'px'
                    }, 100);
                });
                jQuery('#slidebox .close').on('click', function() {
                    if (Cookie.Enabled() && slideboxForm !== '') {
                        var cvslidebox = Cookie.Get(slideboxForm) || " ";
                        if (cvslidebox.indexOf('true') < 0) {
                            Cookie.Set(slideboxForm, 'true', CookieExpiryTime.END_OF_SESSION, null, null);
                        }
                    }
                    jQuery(this).parent().remove();
                });
            }
        }
    }
}

function closeSlidebox() {
    // call using parent.closeSlidebox() from form confirmation page.
    if (jQuery('#slidebox').length > 0) {
        jQuery('#slidebox').stop(true).animate({
            'right': '-9999px'
        }, 100);
        jQuery('#slidebox').remove();
    }

    /* Possible alternate
     * parent.postMessage("child frame", "*");  in form confirmation page
     * window.addEventListener("message", function(event) {
     * console.log("Hello from " + event.data);  check event data - if close message passed then close div with form iframe
     * }); */
}

// Enable Slide In Opt-In Forms on Specific Pages

var slideboxForm = '';
jQuery(document).ready(function() {
    var slideboxCookie = false,
        optIns = '';
    if (Cookie.Enabled()) {
        slideboxCookie = true;
        optIns = (Cookie.Get('c_slidebox_lists') || ' ').toLowerCase();
        Cookie.Set('c_slidebox_lists', optIns, CookieExpiryTime.NEVER, null, null);
    }
    if (slideboxCookie) {
        // ProdTech, Promotions, Gaming Evolved, and Radeon Software combined optin forms
        var patt;
        var isVisible = false;
        if (optIns.indexOf('pt') === -1 || optIns.indexOf('pr') === -1 || optIns.indexOf('ge') === -1 || optIns.indexOf('rs') === -1) {
            patt = /(www\.|\/\/)amd\.com\/en\-us\/products\/graphics\/(radeon\-rx\-series|desktop\/(radeon\-pro\-duo|r9|r7|5000\/5450))($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_radeon') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_radeon';
                isVisible = true;
                slideboxInit('http:\/\/experience.amd.com\/slidein\/radeon\/radeon-signup\/');
            }
        }
        // ProdTech, Promotions, and Gaming Evolved combined optin forms
        if (!isVisible && (optIns.indexOf('pt') === -1 || optIns.indexOf('pr') === -1 || optIns.indexOf('ge') === -1)) {
            patt = /(www\.|\/\/)amd\.com\/en\-us\/(innovations\/software\-technologies\/technologies\-gaming\/raptr|markets\/game(\/community|\/downloads|\/featured|\/raptr\/gaming\-evolved)?)($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_gaming') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_gaming';
                isVisible = true;
                slideboxInit('http:\/\/experience.amd.com\/slidein\/gaming\/gaming-signup\/');
            }
            patt = /(www\.|\/\/)amd\.com\/en\-us\/products\/processors\/desktop\/(fx|a\-series\-apu)($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_processor') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_processor';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/processor\/processor-signup\/');
            }
        }
        // ProdTech and Promotions combined optin forms
        if (!isVisible && (optIns.indexOf('pt') === -1 || optIns.indexOf('pr') === -1)) {
            patt = /(www\.|\/\/)amd\.com\/en\-us\/(products(\/graphics(\/desktop)?)?|solutions\/(laptops|desktops))($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_prodtech') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_prodtech';
                isVisible = true;
                slideboxInit('http:\/\/experience.amd.com\/slidein\/prodtech\/prodtech-signup\/');
            }
        }
        // Radeon Software and ProdTech combined optin forms
        if (!isVisible && (optIns.indexOf('pt') === -1 || optIns.indexOf('rs') === -1)) {
            patt = /(www\.|\/\/)amd\.com\/en\-us\/innovations\/software\-technologies\/enhanced\-media\/radeon\-software($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_radeonsoftware') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_radeonsoftware';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/radeon-software\/radeon-software-signup\/');
            }
        }
        // Promotions and Pro Graphics News combined optin forms
        if (!isVisible && (optIns.indexOf('pg') === -1 || optIns.indexOf('pr') === -1)) {
            patt = /shop\.amd\.com\/en\-(us|ca)(\/computers\/workstation|\/business\/pro\-graphics)($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_shopprographics') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_shopprographics';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/shop\/shop-prographics-signup\/');
            }
        }
        // Pro Graphics News optin forms
        if (!isVisible && (optIns.indexOf('pg') === -1)) {
            patt = /(www\.|\/\/)amd\.com\/en\-us\/(products\/graphics\/workstation(\/firepro\-3d)?|solutions\/professional)($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_prographics') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_prographics';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/prographics\/prographics-signup\/');
            }
        }
        // Promotions optin forms
        if (!isVisible && (optIns.indexOf('pr') === -1)) {
            patt = /shop\.amd\.com\/en\-(us|ca)(\/computers(\/desktop|\/notebook)?|\/components(\/processors|\/graphic\-cards|\/motherboards)?)?($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_shopgeneric') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_shopgeneric';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/shop\/shop-generic-signup\/');
            }
            patt = /shop\.amd\.com\/en\-(us|ca)(\/computers\/server|\/business(\/processors|\/notebook|\/desktop)?)($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_shopbusiness') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_shopbusiness';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/shop\/shop-business-signup\/');
            }
            patt = /shop\.amd\.com\/en\-(us|ca)\/gaming(\/desktop|\/graphic\-card|\/processor)?($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_shopgaming') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_shopgaming';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/shop\/shop-gaming-signup\/');
            }
        }
        // Events optin forms
        if (!isVisible && (optIns.indexOf('ev') === -1)) {
            patt = /((www\.|\/\/)amd\.com\/en\-us\/who-we-are\/corporate\-information|developer\.amd\.com\/community)\/events($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_events') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_events';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/events\/events-signup\/');
            }
        }
        // Server optin forms
        if (!isVisible && (optIns.indexOf('sv') === -1)) {
            patt = /(www\.|\/\/)amd\.com\/en\-us\/products\/server(\/(opteron(\-x|\-a\-series)?|benchmarks))?($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_server') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_server';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/server\/server-signup\/');
            }
        }
        // Channel Updates and Meet The Experts optin forms
        if (!isVisible && (optIns.indexOf('cu') === -1 || optIns.indexOf('me') === -1)) {
            patt = /partner\.amd\.com\/en\-us($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates\/');
            }
            patt = /partner\.amd\.com\/en\-gb($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-gb\/');
            }
            patt = /partner\.amd\.com\/pt\-br($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-br\/');
            }
            patt = /partner\.amd\.com\/de\-de($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-de\/');
            }
            patt = /partner\.amd\.com\/fr\-fr($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-fr\/');
            }
            patt = /partner\.amd\.com\/ja\-jp($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-jp\/');
            }
            patt = /partner\.amd\.com\/ko\-kr($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-kr\/');
            }
            patt = /partner\.amd\.com\/es\-xl($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-la\/');
            }
            patt = /partner\.amd\.com\/pl\-pl($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-pl\/');
            }
            patt = /partner\.amd\.com\/ru\-ru($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-ru\/');
            }
            patt = /partner\.amd\.com\/tr\-tr($|\/$|\?|\/\?|#|\/#)/i;
            if (patt.test(cvURL) && ((Cookie.Get('c_slidebox_channelupdates') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_channelupdates';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-tr\/');
            }
            patt = /partner\.amd\.com\/en\-us\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates\/');
            }
            patt = /partner\.amd\.com\/en\-gb\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-gb\/');
            }
            patt = /partner\.amd\.com\/pt\-br\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-br\/');
            }
            patt = /partner\.amd\.com\/de\-de\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-de\/');
            }
            patt = /partner\.amd\.com\/fr\-fr\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-fr\/');
            }
            patt = /partner\.amd\.com\/ja\-jp\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-jp\/');
            }
            patt = /partner\.amd\.com\/ko\-kr\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-kr\/');
            }
            patt = /partner\.amd\.com\/es\-xl\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-la\/');
            }
            patt = /partner\.amd\.com\/pl\-pl\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-pl\/');
            }
            patt = /partner\.amd\.com\/ru\-ru\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-ru\/');
            }
            patt = /partner\.amd\.com\/tr\-tr\/training\/meet\-the\-experts($|\/$|\?|\/\?|#|\/#)/i;
            if (!isVisible && patt.test(cvURL) && ((Cookie.Get('c_slidebox_meettheexperts') || ' ').toLowerCase().indexOf('true') < 0)) {
                slideboxForm = 'c_slidebox_meettheexperts';
                isVisible = true;
                slideboxInit('http:\/\/experience\.amd\.com\/slidein\/channel-updates\/channel-updates-tr\/');
            }
        }
    }

});

// Hero Page Target Tagging

jQuery(document).ready(function() {
    var patt = /www\.amd\.com\/.*\/sites\-site\/Pages\/hero\.aspx/i;
    if (patt.test(cvURL)) {
        jQuery('a').each(function() {
            jQuery(this).attr('target', '_parent');
        });
    }
});

// End Hero Page Target Tagging

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = jQuery(window);
    $.fn.visible = function(partial, hidden, direction) {

        if (this.length < 1)
            return;

        var $t = this.length > 1 ? this.eq(0) : this,
            t = $t.get(0),
            vpWidth = $w.width(),
            vpHeight = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function') {

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top >= 0 && rec.top < vpHeight,
                bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = rec.left >= 0 && rec.left < vpWidth,
                rViz = rec.right > 0 && rec.right <= vpWidth,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || rViz : lViz && rViz;

            if (direction === 'both') {
                return clientSize && vVisible && hVisible;
            } else if (direction === 'vertical') {
                return clientSize && vVisible;
            } else if (direction === 'horizontal') {
                return clientSize && hVisible;
            }
        } else {

            var viewTop = $w.scrollTop(),
                viewBottom = viewTop + vpHeight,
                viewLeft = $w.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                offset = $t.offset(),
                _top = offset.top,
                _bottom = _top + $t.height(),
                _left = offset.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if (direction === 'both') {
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            } else if (direction === 'vertical') {
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            } else if (direction === 'horizontal') {
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            }
        }
    };

})(jQuery);

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, fromIndex) {
        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, this.length + fromIndex);
        }
        for (var i = fromIndex, j = this.length; i < j; i++) {
            if (this[i] === obj)
                return i;
        }
        return -1;
    };
}

// Internal Promo Tracking
var trackPromo = [];
var trackPromoLPOS = [];

function trackPromoInit() {
    var ipIndex = trackPromo.length + 1;
    jQuery('a').each(function() {
        var link = jQuery(this);
        if ((typeof link.attr('href') != 'undefined') && (typeof link.attr('intpromo') == 'undefined') && ((link.attr('href').toLowerCase().indexOf('promo=') != -1) || (link.attr('href').toLowerCase().indexOf('/promo?') != -1)) || (typeof link.attr('lpos') != 'undefined') || link.hasClass('pointerFeatureContent')) {
            var posCheck = link.attr('lpos');
            var promoExists = trackPromoLPOS.indexOf(posCheck);
            if (promoExists != -1) {
                link.attr('intpromo', 'IP' + (promoExists + 1));
                ipIndex = ipIndex - 1;
            } else {
                link.attr('intpromo', 'IP' + ipIndex);
                trackPromo[ipIndex - 1] = {
                    IPName: 'IP' + ipIndex,
                    impressed: 0
                };
                trackPromoLPOS[ipIndex - 1] = posCheck || ipIndex.toString();
            }
            ipIndex++;
        }
    });
}

jQuery(document).ready(function() {
    // Home Page Hero/Tile Tracking Init
    if (((parseUri(cvURL).host == "www-auth.amd.com" || parseUri(cvURL).host == "www.amd.com" || parseUri(cvURL).host == "amd.com") && (/(en-us|de-de|en-gb|es-es|es-xl|fr-fr|it-it|ja-jp|ko-kr|pl-pl|pt-br|ru-ru|tr-tr|zh-cn|zh-tw)($|\/$|\#|\?|\/#|\/\?)/i.test(cvURL)))) {
        jQuery('.homePageHeroLink').each(function(hrps) {
            var link = jQuery(this).find('a');
            link.attr("lpos", "Hero" + (hrps + 1));
            hrps++;
        });
        jQuery('.quickNavContainer').each(function() {
            var link = jQuery(this).find('a');
            link.attr("lpos", "QuickNav" + (jQuery(this).index() + 1));
        });
        jQuery('.pointerFeature').each(function() {
            var link = jQuery(this).find('a');
            link.attr("lpos", "FeatureImg" + (jQuery(this).index() + 1));
        });
        jQuery('.pointerFeatureCopy').each(function() {
            var link = jQuery(this).find('a');
            link.attr("lpos", "FeatureCopy" + (jQuery(this).index() + 1));
        });
        jQuery('a').each(function() {
            var link = jQuery(this);
            if (((jQuery(link).parents('[class*="Hero"]').length) || (jQuery(link).parents('[class*="hero"]').length)) && typeof jQuery(link).attr('lpos') == 'undefined') {
                link.attr('lpos', 'Hero');
            } else if (jQuery(link).parents('[class*="tile"]').length) {
                jQuery('.homepageTiles>div').each(function() {
                    var link2 = jQuery(this).find('a');
                    link2.attr('lpos', 'Tile' + (jQuery(this).index() + 1));
                });
            }
        });
    }
    // End Home Page Hero/Tile Tracking Init
    setTimeout(function() {
        trackPromoInit();
        for (i = 0; i < trackPromo.length; i++) {
            isPromoVisible(trackPromo[i]);
        }
    }, 15);
});


function viewport() {
    var e = window;
    var a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}

function isPromoVisible(promoObj, isClickPromo) {
    if (!promoObj.impressed) {
        var promo = promoObj.IPName;
        if (jQuery("[intpromo='" + promo + "']").visible(false, false, 'both') || (typeof isClickPromo != 'undefined' && isClickPromo == 1)) {
            var that = jQuery("[intpromo='" + promo + "']");
            var cvPromoImageSRC = '';
            var cvPromoFoundChild;
            var cvPromoHTML;
            try {
                cvPromoFoundChild = cfFindChild(that, "IMG");
            } catch (err) {}
            if (typeof cvPromoFoundChild != "undefined") {
                if (typeof(cvPromoFoundChild.src) !== 'undefined') {
                    cvPromoImageSRC = parseUri(cvFoundChild.src).host + parseUri(cvFoundChild.src).path;
                }
            } else {
                cvPromoHTML = unescape(that.html());
            }
            var cvPromoCreative = (cvPromoImageSRC ? cvPromoImageSRC : cvPromoHTML) || '(not set)';
            var cvPromoKName = parseUri(that.attr('href')).queryKey["k"] || '(not set)';
            var cvPromoPromoName = parseUri(that.attr('href')).queryKey["promo"] || '(not set)';
            var cvPromoiPromoName = parseUri(that.attr('href')).queryKey["ipromo"] || '(not set)';
            if (cvPromoKName == '(not set)' && cvPromoPromoName == '(not set)' && cvPromoiPromoName == '(not set)') {
                cvPromoKName = that.attr('href') || '(not set)';
                cvPromoiPromoName = cvPromoCreative;
            }
            dataLayer.push({
                'event': 'promotionView',
                'promoLPOS': that.attr('lpos') || '(not set)',
                'promoName': cvPromoPromoName + '|' + cvPromoiPromoName + '|' + cvPromoKName,
                'ecommerce': {
                    'promoView': {
                        'promotions': [{
                            'id': cvPromoPromoName + '|' + cvPromoiPromoName + '|' + cvPromoKName + '|' + cvPromoCreative,
                            'name': cvPromoPromoName + '|' + cvPromoiPromoName + '|' + cvPromoKName,
                            'creative': cvPromoCreative,
                            'position': that.attr('intpromo') || '(not set)'
                        }]
                    }
                }
            });
            promoObj.impressed = 1;
        }
    }
}
// End Internal Promo Tracking

// Start Progressive Profiling Code
function closePPLightBoxWindow(cookName) {
    if (Cookie.Enabled()) {
        var curCookie = (Cookie.Get(cookName) || ' ').toLowerCase();
        if (curCookie != 'done') {
            Cookie.Set(cookName, 'yes', CookieExpiryTime.END_OF_SESSION, null, null);
        }
    }
    jQuery('#PPlightbox, #PPoverlay').remove();
}

function PPLightBoxWindow(profile_url, width, height, cook) {
    if (typeof jQuery != "undefined") {
        document.domain = 'amd.com';
        var lightboxHTML = "<div id='PPoverlay'><\/div><div id='PPlightbox' style='top: 20px; width: " + width + "px; padding: 1px; position: absolute; top:25px;left:25px;'><a href='#' id='PPpopClose' >Close<\/a><\/div>";
        jQuery(lightboxHTML).appendTo('body');
        jQuery('#PPlightbox').append("<iframe height='" + height + "px' width='" + width + "px' id='ppframe' src='' ><\/iframe>");
        jQuery('#ppframe').attr('src', profile_url);
        jQuery('#PPoverlay').css('opacity', '0.8');
        var tempCook = cook;
        jQuery("#PPpopClose").click(function() {
            closePPLightBoxWindow(tempCook);
        });
        jQuery(document).keyup(function(e) {
            if (e.keyCode === 27) {
                closePPLightBoxWindow(tempCook);
            }
        });
    }
}

function ppLightBoxHide() {
    jQuery('#PPoverlay').hide();
    jQuery('#PPlightbox').hide();
    jQuery('#PPpopClose').hide();
}

function ppLightBoxShow() {
    jQuery('#PPoverlay').show();
    jQuery('#PPlightbox').show();
    jQuery('#PPpopClose').show();
    if (/chrome/.test(navigator.userAgent.toLowerCase())) {
        var oldBackgroundImage = jQuery('#PPpopClose').css("background-image");
        setTimeout(function() {
            jQuery('#PPpopClose').css("background-image", oldBackgroundImage);
        }, 1);
    }
}
PPBlockShow = false;

function setPPBlockShow() {
    PPBlockShow = true;
}
if (cfRWLayout() != 'small') {
    jQuery(document).ready(function() {
        var ppoptIns, shownPP, shownPGP;
        if (parseUri(cvURL).protocol.toLowerCase() != 'https') {
            if (jQuery('#ppCSS').length <= 0) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = 'ppCSS';
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'http://subscriptions.amd.com/css/pplightbox.css';
                link.media = 'all';
                head.appendChild(link);
            }
            if (Cookie.Enabled()) {
                shownPGP = (Cookie.Get('c_slidebox_prgrsvprofile') || ' ').toLowerCase();
                if (shownPGP == 'done') {
                    Cookie.Set('c_slidebox_prgrsvprofile', shownPGP, CookieExpiryTime.NEVER, null, null);
                }
                if (shownPGP != 'yes' && shownPGP != 'done' && (/support\.amd\.com\/en\-us\/download\/workstation(\/)?\?/i.test(cvURL) || /support\.amd\.com\/en\-us\/download\/desktop(\/)?\?/i.test(cvURL))) {
                    PPLightBoxWindow('http:\/\/experience.amd.com\/data-enrichment\/index\/', 500, 650, 'c_slidebox_prgrsvprofile');
                    ppLightBoxHide();
                    jQuery('body').on('click', '.submitButton', function() {
                        if (!PPBlockShow) {
                            ppLightBoxShow();
                        }
                    });
                }
            }
        }
    });
}
// End Progressive Profiling Code

/* if (!(/https?:\/\/(((pro|instinct)\.)?radeon\.com|((pro|instinct)\-radeon\-com\.)?radeon\.staging\.wpengine\.com)/.test(cvURLCheck))) {
  jQuery(document).ready(function () {
  var words = document.getElementsByTagName('body')[0].innerHTML.replace(/(&nbsp;|&#160;)/,' ').replace(/[\n\r]/g, ' ').replace(/<script.*?<\/script>/g, '').replace(/<.*?>/g, '');
  var wordcnt = words.match(/\S+/g).length - 101;
  console.log('words: ' + wordcnt);
  var ttr = wordcnt / 150;
  console.log('At 150 wpm: ' + ttr);
});
} */
/* ------------------------------------------------------------------------------------- */
/* Custom Variables */
/* ------------------------------------------------------------------------------------- */
var cvParamInPageName = 0; // if cvParamInPageName = 1, it will include parameters in the s.pageName
if (cvURL.indexOf("shop.amd.com") != -1) {
    var cvParamToInclude = "promoid";
} else {
    var cvParamToInclude = ""; // comma delimited - if blank, it includes all parameters in the URL
}

var s = {};
//var s = this;
s.t = function() {
    return null;
};
s.tl = function() {
    return null;
};
s.apl = function() {
    return null;
};

function s_gi(value) {
    return {
        'linkTrackVars': '',
        'linkTrackEvents': '',
        'events': '',
        'trackingServer': '',
        't': function() {
            return null;
        },
        'tl': function() {
            return null;
        },
        'apl': function() {
            return null;
        }
    };
}
