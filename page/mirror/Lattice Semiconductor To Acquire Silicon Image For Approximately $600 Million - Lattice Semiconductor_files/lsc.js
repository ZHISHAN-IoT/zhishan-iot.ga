/*! jQuery UI - v1.10.1 - 2013-02-22
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.tabs.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);
/*!
	jQuery ColorBox v1.4.3 - 2013-02-18
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Y+o),n&&(r.style.cssText=n),e(r)}function n(e){var t=T.length,i=(A+e)%t;return 0>i?t+i:i}function r(e,t){return Math.round((/%/.test(e)?("x"===t?k.width():k.height())/100:1)*parseInt(e,10))}function h(e,t){return e.photo||e.photoRegex.test(t)}function l(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function s(e){"contains"in w[0]&&!w[0].contains(e.target)&&(e.stopPropagation(),w.focus())}function a(){var t,i=e.data(N,V);null==i?(K=e.extend({},J),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=e.extend({},i);for(t in K)e.isFunction(K[t])&&"on"!==t.slice(0,2)&&(K[t]=K[t].call(N));K.rel=K.rel||N.rel||e(N).data("rel")||"nofollow",K.href=K.href||e(N).attr("href"),K.title=K.title||N.title,"string"==typeof K.href&&(K.href=e.trim(K.href))}function d(i,o){e(t).trigger(i),at.trigger(i),e.isFunction(o)&&o.call(N)}function c(){var e,t,i,o,n,r=Y+"Slideshow_",h="click."+Y;K.slideshow&&T[1]?(t=function(){clearTimeout(e)},i=function(){(K.loop||T[A+1])&&(e=setTimeout(G.next,K.slideshowSpeed))},o=function(){M.html(K.slideshowStop).unbind(h).one(h,n),at.bind(it,i).bind(tt,t).bind(ot,n),w.removeClass(r+"off").addClass(r+"on")},n=function(){t(),at.unbind(it,i).unbind(tt,t).unbind(ot,n),M.html(K.slideshowStart).unbind(h).one(h,function(){G.next(),o()}),w.removeClass(r+"on").addClass(r+"off")},K.slideshowAuto?o():n()):w.removeClass(r+"off "+r+"on")}function u(i){U||(N=i,a(),T=e(N),A=0,"nofollow"!==K.rel&&(T=e("."+Z).filter(function(){var t,i=e.data(this,V);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===K.rel}),A=T.index(N),-1===A&&(T=T.add(N),A=T.length-1)),m.css({opacity:parseFloat(K.opacity),cursor:K.overlayClose?"pointer":"auto",visibility:"visible"}).show(),j||(j=q=!0,w.css({visibility:"hidden",display:"block"}),E=o(dt,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(v),_=x.height()+C.height()+v.outerHeight(!0)-v.height(),z=y.width()+b.width()+v.outerWidth(!0)-v.width(),D=E.outerHeight(!0),B=E.outerWidth(!0),K.w=r(K.initialWidth,"x"),K.h=r(K.initialHeight,"y"),G.position(),lt&&k.bind("resize."+st+" scroll."+st,function(){m.css({width:k.width(),height:k.height(),top:k.scrollTop(),left:k.scrollLeft()})}).trigger("resize."+st),c(),d(et,K.onOpen),P.add(W).hide(),R.html(K.close).show(),w.focus(),t.addEventListener&&(t.addEventListener("focus",s,!0),at.one(nt,function(){t.removeEventListener("focus",s,!0)})),K.returnFocus&&at.one(nt,function(){e(N).focus()})),G.load(!0))}function f(){!w&&t.body&&(X=!1,k=e(i),w=o(dt).attr({id:V,"class":ht?Y+(lt?"IE6":"IE"):"",role:"dialog",tabindex:"-1"}).hide(),m=o(dt,"Overlay",lt?"position:absolute":"").hide(),L=o(dt,"LoadingOverlay").add(o(dt,"LoadingGraphic")),g=o(dt,"Wrapper"),v=o(dt,"Content").append(W=o(dt,"Title"),H=o(dt,"Current"),F=o("button","Previous"),S=o("button","Next"),M=o("button","Slideshow"),L,R=o("a","Close")),g.append(o(dt).append(o(dt,"TopLeft"),x=o(dt,"TopCenter"),o(dt,"TopRight")),o(dt,!1,"clear:left").append(y=o(dt,"MiddleLeft"),v,b=o(dt,"MiddleRight")),o(dt,!1,"clear:left").append(o(dt,"BottomLeft"),C=o(dt,"BottomCenter"),o(dt,"BottomRight"))).find("div div").css({"float":"left"}),I=o(dt,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),P=S.add(F).add(H).add(M),e(t.body).append(m,w.append(g,I)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),u(this))}return w?(X||(X=!0,S.click(function(){G.next()}),F.click(function(){G.prev()}),R.click(function(){G.close()}),m.click(function(){K.overlayClose&&G.close()}),e(t).bind("keydown."+Y,function(e){var t=e.keyCode;j&&K.escKey&&27===t&&(e.preventDefault(),G.close()),j&&K.arrowKey&&T[1]&&!e.altKey&&(37===t?(e.preventDefault(),F.click()):39===t&&(e.preventDefault(),S.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Y,"."+Z,i):e("."+Z).live("click."+Y,i)),!0):!1}var m,w,g,v,x,y,b,C,T,k,E,I,L,W,H,M,S,F,R,P,K,_,z,D,B,N,A,O,j,q,U,$,G,Q,X,J={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},V="colorbox",Y="cbox",Z=Y+"Element",et=Y+"_open",tt=Y+"_load",it=Y+"_complete",ot=Y+"_cleanup",nt=Y+"_closed",rt=Y+"_purge",ht=!e.support.leadingWhitespace,lt=ht&&!i.XMLHttpRequest,st=Y+"_IE6",at=e({}),dt="div";e.colorbox||(e(f),G=e.fn[V]=e[V]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,V,e.extend({},e.data(this,V)||J,t))}).addClass(Z),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},G.position=function(e,t){function i(e){x[0].style.width=C[0].style.width=v[0].style.width=parseInt(e.style.width,10)-z+"px",v[0].style.height=y[0].style.height=b[0].style.height=parseInt(e.style.height,10)-_+"px"}var o,n,h,l=0,s=0,a=w.offset();k.unbind("resize."+Y),w.css({top:-9e4,left:-9e4}),n=k.scrollTop(),h=k.scrollLeft(),K.fixed&&!lt?(a.top-=n,a.left-=h,w.css({position:"fixed"})):(l=n,s=h,w.css({position:"absolute"})),s+=K.right!==!1?Math.max(k.width()-K.w-B-z-r(K.right,"x"),0):K.left!==!1?r(K.left,"x"):Math.round(Math.max(k.width()-K.w-B-z,0)/2),l+=K.bottom!==!1?Math.max(k.height()-K.h-D-_-r(K.bottom,"y"),0):K.top!==!1?r(K.top,"y"):Math.round(Math.max(k.height()-K.h-D-_,0)/2),w.css({top:a.top,left:a.left,visibility:"visible"}),e=w.width()===K.w+B&&w.height()===K.h+D?0:e||0,g[0].style.width=g[0].style.height="9999px",o={width:K.w+B+z,height:K.h+D+_,top:l,left:s},0===e&&w.css(o),w.dequeue().animate(o,{duration:e,complete:function(){i(this),q=!1,g[0].style.width=K.w+B+z+"px",g[0].style.height=K.h+D+_+"px",K.reposition&&setTimeout(function(){k.bind("resize."+Y,G.position)},1),t&&t()},step:function(){i(this)}})},G.resize=function(e){j&&(e=e||{},e.width&&(K.w=r(e.width,"x")-B-z),e.innerWidth&&(K.w=r(e.innerWidth,"x")),E.css({width:K.w}),e.height&&(K.h=r(e.height,"y")-D-_),e.innerHeight&&(K.h=r(e.innerHeight,"y")),e.innerHeight||e.height||(E.css({height:"auto"}),K.h=E.height()),E.css({height:K.h}),G.position("none"===K.transition?0:K.speed))},G.prep=function(t){function i(){return K.w=K.w||E.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function r(){return K.h=K.h||E.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(j){var s,a="none"===K.transition?0:K.speed;E.empty().remove(),E=o(dt,"LoadedContent").append(t),E.hide().appendTo(I.show()).css({width:i(),overflow:K.scrolling?"auto":"hidden"}).css({height:r()}).prependTo(v),I.hide(),e(O).css({"float":"none"}),s=function(){function t(){ht&&w[0].style.removeAttribute("filter")}var i,r,s=T.length,c="frameBorder",u="allowTransparency";j&&(r=function(){clearTimeout($),L.hide(),d(it,K.onComplete)},ht&&O&&E.fadeIn(100),W.html(K.title).add(E).show(),s>1?("string"==typeof K.current&&H.html(K.current.replace("{current}",A+1).replace("{total}",s)).show(),S[K.loop||s-1>A?"show":"hide"]().html(K.next),F[K.loop||A?"show":"hide"]().html(K.previous),K.slideshow&&M.show(),K.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=T[this],n=e.data(o,V);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=e(o).attr("href"),t&&h(n,t)&&(t=l(n,t),i=new Image,i.src=t)})):P.hide(),K.iframe?(i=o("iframe")[0],c in i&&(i[c]=0),u in i&&(i[u]="true"),K.scrolling||(i.scrolling="no"),e(i).attr({src:K.href,name:(new Date).getTime(),"class":Y+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",r).appendTo(E),at.one(rt,function(){i.src="//about:blank"}),K.fastIframe&&e(i).trigger("load")):r(),"fade"===K.transition?w.fadeTo(a,1,t):t())},"fade"===K.transition?w.fadeTo(a,0,function(){G.position(0,s)}):G.position(a,s)}},G.load=function(t){var n,s,c,u=G.prep;q=!0,O=!1,N=T[A],t||a(),Q&&w.add(m).removeClass(Q),K.className&&w.add(m).addClass(K.className),Q=K.className,d(rt),d(tt,K.onLoad),K.h=K.height?r(K.height,"y")-D-_:K.innerHeight&&r(K.innerHeight,"y"),K.w=K.width?r(K.width,"x")-B-z:K.innerWidth&&r(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=r(K.maxWidth,"x")-B-z,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=r(K.maxHeight,"y")-D-_,K.mh=K.h&&K.h<K.mh?K.h:K.mh),n=K.href,$=setTimeout(function(){L.show()},100),K.inline?(c=o(dt).hide().insertBefore(e(n)[0]),at.one(rt,function(){c.replaceWith(E.children())}),u(e(n))):K.iframe?u(" "):K.html?u(K.html):h(K,n)?(n=l(K,n),e(O=new Image).addClass(Y+"Photo").bind("error",function(){K.title=!1,u(o(dt,"Error").html(K.imgError))}).one("load",function(){var e;K.retinaImage&&i.devicePixelRatio>1&&(O.height=O.height/i.devicePixelRatio,O.width=O.width/i.devicePixelRatio),K.scalePhotos&&(s=function(){O.height-=O.height*e,O.width-=O.width*e},K.mw&&O.width>K.mw&&(e=(O.width-K.mw)/O.width,s()),K.mh&&O.height>K.mh&&(e=(O.height-K.mh)/O.height,s())),K.h&&(O.style.marginTop=Math.max(K.mh-O.height,0)/2+"px"),T[1]&&(K.loop||T[A+1])&&(O.style.cursor="pointer",O.onclick=function(){G.next()}),ht&&(O.style.msInterpolationMode="bicubic"),setTimeout(function(){u(O)},1)}),setTimeout(function(){O.src=n},1)):n&&I.load(n,K.data,function(t,i){u("error"===i?o(dt,"Error").html(K.xhrError):e(this).contents())})},G.next=function(){!q&&T[1]&&(K.loop||T[A+1])&&(A=n(1),G.load())},G.prev=function(){!q&&T[1]&&(K.loop||A)&&(A=n(-1),G.load())},G.close=function(){j&&!U&&(U=!0,j=!1,d(ot,K.onCleanup),k.unbind("."+Y+" ."+st),m.fadeTo(200,0),w.stop().fadeTo(300,0,function(){w.add(m).css({opacity:1,cursor:"auto"}).hide(),d(rt),E.empty().remove(),setTimeout(function(){U=!1,d(nt,K.onClosed)},1)}))},G.remove=function(){e([]).add(w).add(m).remove(),w=null,e("."+Z).removeData(V).removeClass(Z),e(t).unbind("click."+Y)},G.element=function(){return e(N)},G.settings=J)})(jQuery,document,window);
(function($){$.extend({tablesorter:new
function(){var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:'/\.|\,/g',onRenderHeader:null,selectorHeaders:'thead th',debug:false};function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);}else{alert(s);}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}if(table.tBodies.length==0)return;var rows=table.tBodies[0].rows;if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);}else if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}if(!p){p=detectParserForColumn(table,rows,-1,i);}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}list.push(p);}}if(table.config.debug){log(parsersDebug);}return list;};function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;while(nodeValue==''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);if(table.config.debug){log('Checking if value was empty on row:'+rowIndex);}}else{keepLooking=false;}}for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];}}return parsers[0];}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));}function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}return false;}function buildCache(table){if(table.config.debug){var cacheTime=new Date();}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);continue;}cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));}cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;};if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);}return cache;};function getElementText(config,node){var text="";if(!node)return"";if(!config.supportsTextContent)config.supportsTextContent=node.textContent||false;if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}return text;}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);}}}if(table.config.appender){table.config.appender(table,rows);}rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}applyWidget(table);setTimeout(function(){$(table).trigger("sortEnd");},0);};function buildHeaders(table){if(table.config.debug){var time=new Date();}var meta=($.metadata)?true:false;var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(table,index))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);if(table.config.onRenderHeader)table.config.onRenderHeader.apply($th);}table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);log($tableHeaders);}return $tableHeaders;};function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName('THEAD')[0];var trs=thead.getElementsByTagName('TR');for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1
var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];}for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}lookup[cellId]=firstAvailCol;for(var k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";}}}}return lookup;}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}return arr;};function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;};return false;}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;};return false;}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder))return table.config.headers[i].lockedOrder;return false;}function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}function getWidgetById(name){var l=widgets.length;for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}};function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;}else{return(v==1)?1:0;}}function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}return false;}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);}}function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$('<colgroup>');$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($('<col>').css('width',$(this).width()));});$(table).prepend(colgroup);};}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];o.count=s[1];o.count++;}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);}return cache;};function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=='text'&&direction=='asc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";}else if(type=='text'&&direction=='desc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";}else if(type=='numeric'&&direction=='asc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";}else if(type=='numeric'&&direction=='desc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";}};function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";};function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";};function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";};function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";};function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return((a<b)?-1:((a>b)?1:0));};function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return((b<a)?-1:((b>a)?1:0));};function sortNumeric(a,b){return a-b;};function sortNumericDesc(a,b){return b-a;};function getCachedSortType(parsers,i){return parsers[i].type;};this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies)return;var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!e[config.sortMultiSortKey]){config.sortList=[];if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}config.sortList.push([i,this.order]);}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}};setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}if(a){parsers.push(parser);};};this.addWidget=function(widget){widgets.push(widget);};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,'')));};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild)this.removeChild(this.firstChild);}empty.apply(table.tBodies[0]);}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s);},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),''));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s));},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");}else if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");}return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);if(!$tr.hasClass(table.config.cssChildRow))row++;odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// IE console fix
var console = console || { log: function () { }, warn: function () { } };
window.lattice = window.lattice || {};

var $j = window.$j = jQuery.noConflict();

$j(function () {
	$j(window).load(function () {
		lattice.init($j);
	});
});

$j(window).ready(function() {
	try { lattice.loadColorbox($j); } catch (err) { console.log("Failed to load colorbox. " + err); }
	try { lattice.utils.makeSameHeight(document); } catch (err) { console.log("Failed to utils makeSameHeight method."); }
});

// ************************************************
// start lattice init
lattice.init = function ($j) {
	try { lattice.transformations.init($j); } catch (err) { console.log("Failed to init transformations."); }
	try { lattice.validation.init($j); } catch (err) { console.log("Failed to init validation."); }
	try { lattice.map.init($j); } catch (err) { console.log("Failed to init map."); }
	try { lattice.filters.init($j); } catch (err) { console.log("Failed to init filters."); }
	try { lattice.searchbox.init($j); } catch (err) { console.log("Failed to init searchbox."); }
	try { lattice.placeholder.init($j); } catch (err) { console.log("Failed to init placeholder text control."); }
    //try { lattice..init($j); } catch (err) { console.log("Failed to ."); }

	try { lattice.carSlides($j); } catch (err) { console.log("Failed to init carSlides."); }
	try { lattice.forms.wireTargets($j); } catch (err) { console.log("Failed to wire targets."); }
	try { lattice.doclist.init($j); } catch(err) { console.log("Failed to setup doc list sorting: " + err); }
};
// end lattice init
// ************************************************ 


// ************************************************
// start car slides content
lattice.carSlides = function ($j) {
	var carWrap = $j('.ie7 .cycle-carousel-wrap');
	var carSlides = carWrap.find('.cycle-slide');
	carWrap.width($j(carSlides[0]).outerWidth() * carSlides.length);
};
// end car slides content
// ************************************************

// ************************************************
// start load colorbox
lattice.loadColorbox = function ($j) {
	if ($j.colorbox) {
		var feedbackLink = $j(".page-footer .feedback a");
		if (feedbackLink.length > 0) {
			feedbackLink.colorbox({ width: "385", height: "600", iframe: true, opacity: 0.60, overlayClose: false });
		}
		$j(".jsModalWindow").each(function () {
			var e = this;
			var $e = $j(e);
			var sHeight = $e.attr('height') || "600";
			var sWidth = $e.attr('width') || "760";
			var bInline = $e.hasClass('jsInline');

			if (bInline) {
				var sTarget = $e.attr('href').replace(/^[^#]*/, "");
				var $target = $j(sTarget);
				$e.colorbox({ width: sWidth, height: sHeight, opacity: 0.60, inline: true, href: $target });
			} else {
				$e.colorbox({ width: sWidth, height: sHeight, iframe: true, opacity: 0.60, overlayClose: false });
			}
		});
	}
};
// end load colorbox
// ************************************************


// ************************************************

// ************************************************
// start util functions
lattice.utils = {
	resizeElement: function (element, maxHeight) {
		element.height(maxHeight);
		element.attr("data-jsSameHeight-resized", "1");
	},
	makeSameHeight: function (context,selector) {
		if(typeof(selector) === 'undefined') { selector  = '.jsSameHeight'; }
		var resizeElement = lattice.utils.resizeElement;

		var elemsToResize = $j(selector, context);
		elemsToResize.css('height', 'auto');
		var iMaxHeight = 0;

		elemsToResize.each(function () {
			var $e = $j(this);
			if ($e.is(':visible')) {
				var iThisHeight = $e.height();
				iMaxHeight = iThisHeight > iMaxHeight ? iThisHeight : iMaxHeight;
			}
		});
		//alert(iMaxHeight);
		elemsToResize.css('height', iMaxHeight);
	}
};
// end utils functions
// ************************************************

// ************************************************
// start map selector functions
lattice.map = {
	init: function ($j) {
		$j("li.continent").click(function (e) {
			// Ignor click on children
			if (e.target != this) return;
			// No slide effect with 0 value
			$j(this).children().slideToggle();
			// add CSS for active
			$j(this).toggleClass("selectedContinent");
		});
	}
};
// end map selector functions
// ************************************************


// ************************************************
// start filter widget functions
lattice.filters = {
    init: function ($j) {
        $j(".filterContent h3").click(function () {
            var $t = $j(this);
            $t.parent(".filterContent").toggleClass("collapsedSection");
            $t.find("div").toggleClass("collapsed");
        });

        $j(".filterContent input[type=checkbox]").click(function () {
            var $t = $j(this);
            $t.parent().toggleClass("selected");
        });
    }
};
// end filter widget functions
// ************************************************


// ************************************************
// start search box functions
lattice.searchbox = {
    init: function ($j) {

        $j(".support-search .search-button").click(function (e) {
            e.preventDefault();
            var $query = $j(this).siblings(".search-text").val();

            document.location.href = "/support/search.aspx?q=" + $query;
            return false;
        });

        $j(".searchAnswerDataBase").on("keypress", ".txtSearchInput", function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                $j(this).next().click();
                event.preventDefault();
            }
        });

    }
};
// end search box functions
// ************************************************

// ************************************************
// start placeholder watermark plugin 
lattice.placeholder = {
    init: function ($j) {
        $j('input, textarea').placeholder();
    }
};
// end placeholder watermark plugin
// ************************************************
lattice.doclist = {
    init: function ($j) {
		$j(".docList").tablesorter({sortList: [[1,0]]});
	}
};
// check if objects exists
var console = console || { log: function () { }, warn: function () { } };
window.lattice = window.lattice || {};

// init called from lattice.js

// ************************************************
// start transformations init
lattice.transformations = {
	init: function () {
		try { lattice.transformations.sniffBrowser(); } catch (Err) { console.log("Failed to sniff browser."); }
    	try { lattice.transformations.sameHeight(); } catch (Err) { console.log("Failed to make same height of all."); }
    	try { lattice.transformations.iFrameParents(); } catch (Err) { console.log("Failed to transform for iframes."); }
    	try { lattice.transformations.menuDelay.init(); } catch (Err) { console.log("Failed to apply menu delay:" + Err); }
    	try { lattice.transformations.menuShim.init(); } catch (Err) { console.log("Failed to apply menu shim:" + Err); }
    	//try {  } catch (Err) { console.log("Failed to ."); }
    }
};
// end transformations init
// ************************************************


// ************************************************
// start sniff browser
lattice.transformations.sniffBrowser = function () {
	var ua = jQuery.browser;  // WILL NOT WORK WITH JQUERY 1.9+.  WOULD REQUIRE https://github.com/jquery/jquery-migrate/
	var sBrowserCss = '';
	if (!ua.msie) {
		sBrowserCss = ua.safari ? ' safari' : '';
		sBrowserCss += ua.mozilla ? ' mozilla' : '';
		sBrowserCss += ua.webkit ? ' webkit' : '';
		sBrowserCss += ua.opera ? ' opera' : '';
		jQuery('html').addClass(sBrowserCss).attr('UserAgentVersion', ua.version);
	}
};
// end sniff browser
// ************************************************

// ************************************************
// Begin various changes to menu display
lattice.transformations.menuShim = {
	init: function() {
		$j(".menuDetails").each(function() {
			var iHeight = 0;
			var menuHeight = 0;
			var padding = $j(".menuContent").first().outerHeight() - $j(".menuContent").first().height();

			if($j(this).parents(".ie7").length > 0) {
				return false;
			}
			
			$j(this).find(".menuContent").each(function() {
				$j(this).css("min-height",0 + "px");
				// $j(this).addClass("hideContent");
				if($j(this).outerHeight() > iHeight) { iHeight = $j(this).outerHeight(); }
			});
		
			$j(this).find(".actionItems > li > a").each(function() {
				// $j(this).addClass("showContent");
				menuHeight += $j(this).outerHeight();
			});
			if(menuHeight > iHeight) { 
				iHeight = menuHeight; 
			}

			$j(this).find(".menuContent").each(function() {
				$j(this).css("height",(iHeight - padding) + "px");
			});
			$j(this).css("height",iHeight + "px");
			
			$j(this).find(".actionItems > li:first-of-type > a").first().addClass("defaultChoice");
			$j(this).find(".actionItems > li:first-of-type .menuContent").first().addClass("visibleMenu");
			$j(this).hover(function() { // mouseenter
				$j(this).find(".defaultChoice").removeClass("defaultChoice");
				$j(this).find(".visibleMenu").removeClass("visibleMenu");
			},function() {
				$j(this).find(".actionItems > li:first-of-type > a").first().addClass("defaultChoice");
				$j(this).find(".actionItems > li:first-of-type .menuContent").first().addClass("visibleMenu");
			});
		});
	}
}

function openSection(element) {
	// console.log($j(element).parent().html());
	return true;
	
	/*$j(".visibleMenu").each(function() {
		$j(this).removeClass("visibleMenu");
		$j(this).addClass("hideContent");
	});
	$j(element).parent().find(".hideContent").addClass("visibleMenu");
	$j(element).parent().find(".hideContent").removeClass("hideContent");*/
}

// End menu shim
// ************************************************

// ************************************************
// start modifying top nav menu delay fix
lattice.transformations.menuDelay = {
	delayTimer: null,
	init: function () {
		$j(".menuDetails").addClass("hiddenNavigation");
		$j(".primaryNavigation").mouseenter(function() {
			lattice.transformations.menuDelay.showAction(this);
		});
		$j(".primaryNavigation").mouseleave(function() {
			lattice.transformations.menuDelay.hideAction(this);
		});
	},
	showAction: function(elem) {
		clearTimeout(lattice.transformations.menuDelay.delayTimer);
		lattice.transformations.menuDelay.delayTimer = setTimeout(function() {
			lattice.transformations.menuDelay.showMenu(elem)},300);
	},
	showMenu: function(elem) {
		lattice.transformations.menuDelay.hideMenus();
		
		$j(elem).children(".hiddenNavigation").removeClass("hiddenNavigation");
		$j(elem).children(".menuDetails").addClass("persistMenu");
	},
	hideAction: function(elem) {
		clearTimeout(lattice.transformations.menuDelay.delayTimer);
		lattice.transformations.menuDelay.delayTimer = setTimeout(function() {
			lattice.transformations.menuDelay.hideMenus()},500);
	},
	hideMenus: function() {
		// this does a reset. addClass is safe, so I can call it each time.
		$j(".persistMenu").removeClass("persistMenu");
		$j(".menuDetails").addClass("hiddenNavigation");

		/*$j(".visibleMenu").each(function() {
			$j(this).removeClass("visibleMenu");
			$j(this).addClass("hideContent");
		});*/
	}
};
// end modifying top nav menu delay fix
// ************************************************


// ************************************************
// start iframe parent transformation
lattice.transformations.iFrameParents = function () {
	var cssSelector = '.page-content > iframe[width="960"]';
	var jqIFrame = jQuery(cssSelector);
	var jqParent = jqIFrame.closest('.page-content');
	var iParentHeight = jqIFrame.height() + 30;
	jqParent.css('height', iParentHeight);
};
// end iframe parent transformation
// ************************************************

// ************************************************
// start same height transformation
lattice.transformations.sameHeight = function () {
	var $j = jQuery.noConflict();
	var eScopeElements = arguments[0] || $j(document);
	eScopeElements.each(function () {
		var scope = this;
		$j('.jsSameHeight', scope).each(function () {
			var $context = $j(this.parentNode);
			$context.addClass('jsSameHeightContext');
		});

		$j('.jsSameHeightContext', scope).each(function () {
			lattice.utils.makeSameHeight(this);
		});		
	});
};
// end same height transformation
// ************************************************

// forms
window.lattice.forms = {
	disableInput: function (input) {
		var $input = jQuery(input);
		var parent = input.parentNode;
		var $parent = jQuery(parent);
		var bOverride = (arguments[1] === true);
		if (bOverride) {
			lattice.forms.enableInput(input);
		}
		else {
			$input.addClass('disabled')
				.attr('disabled', 'disabled');
			if ($parent.hasClass('button-wrapper')) {
				$parent.addClass('disabled');
			}
		}
		jQuery("#errorSummary").css("display","block");
	},
	enableInput: function (input) {
		var $input = jQuery(input);
		var parent = input.parentNode;
		var $parent = jQuery(parent);
		$input.removeClass('disabled')
			.attr('disabled', false);
		$parent.removeClass('disabled');
		jQuery("#errorSummary").css("display","none");
	},
	toggleInput: function (input, override) {
		var bEnableInput = jQuery(input).attr('disabled');
		bEnableInput = (override != undefined) ? override : bEnableInput;
		if (bEnableInput) {
			lattice.forms.enableInput(input);
		}
		else {
			lattice.forms.disableInput(input);
		}
	},
	wireTargets: function ($j) {
		var $search = jQuery('.searchFlyout, .searchwrapper');
		$search.each(function () {
			window.autoTargetId = window.autoTargetId || 0;
			window.autoTargetId++;
			
			var $text = jQuery('input[type="text"]', this);
			var $button = jQuery('input[type="button"], input[type="image"], img.search-button', this);
			if ($button.size() > 0) {
				var sTarget = 'js_Target_' + window.autoTargetId;
				$text.attr('target', sTarget).addClass('jsWireTarget');
				$button.addClass(sTarget);
			}
		});

		jQuery('.jsWireTarget[target]').each(function () {

			// closures
			var elem = this,
			$input = jQuery(elem),
			$target = jQuery('.' + $input.attr('target'), elem.parentNode);

			if ($input.attr('jsTargetWired') != 'true' && $target.size() > 0) {

				// events
				var fKeyDown = function (e) {
					e = e || window.event || {};
					var charCode = e.charCode || e.keyCode || e.which;
					var val = $input.val();
					if (charCode == 13) {
						if (val != '') {
							$target[0].click();
						}
						e.preventDefault();
						return false;
					}
					return true;
				};

				// init
				$input.unbind('keydown').unbind('keyup').keydown(fKeyDown);
				$input.attr('jsTargetWired', 'true');
			}
		});
	}
}
// check if objects exists
var console = console || { log: function () { }, warn: function () { } };
window.lattice = window.lattice || {};

// TODO: Support complex types like radio buttons and checkbox groups
// TODO: validate phone number, date type, date time (before/after a given date)

// validation object
window.lattice.validation = {
	config: {
		sectionCssClassName: 'jsValidationSection',
		submitCssClassName: 'jsValidationSubmit',
		phaseCompleteCssClassName: 'jsValidationPhaseComplete',
		warningCssClassName: 'jsValidationWarning',
		errorCssClassName: 'jsValidationError',
		errorMessageFieldClassName: 'error-message',
		errorMessageFieldShowClassName: 'in-error',
		requiredLabelCssClassName: 'jsMarkedAsRequired',
		submitButtonsAttribute: 'data-submit-buttons',
		toggleTargetAttr: 'target',
		rulesAttr: 'rules',
		inputTypes: ['text', 'password', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'search', 'tel', 'time', 'url', 'week'],
		activeValidationSections: [],
		regex: { 'jsIsExclusive': new RegExp(/jsIsExclusive-[0-9]+/g) }
	},
	rules: {
		'jsIsRequired': {
			// On which DOM event to call the test
			eventName: 'change',

			// Current rule name
			ruleName: 'jsIsRequired',

			// Optional error message to use
			errorMessage: "This field is required",

			// This performs validation
			test: function (displayErrors) {
				var $el = jQuery(this.el);
				var val = $el.val();
				var bIsValid = jQuery.trim(val) != '';
				var sTagName = $el.prop("tagName");

				if (sTagName == "SELECT") {
					bIsValid = val != '0' && bIsValid;
				} else if ($el.attr('type') == "checkbox") {
					bIsValid = $el.attr('checked');
				} else {
					if (!bIsValid) {
						// mask whitespace.
						$el.val('');
					}
				}

				return bIsValid;
			},

			// This is called when the rule is applied to the field. Allows custom code to run.
			initRule: function () {
				lattice.validation.markFieldAsRequired(this.el);
			}
		},
		'jsMinLength': {
			eventName: 'change',
			ruleName: 'jsMinLength',
			errorMessage: 'This field must be at least ## characters long.',
			initRule: function () {
				var $el = jQuery(this.el);
				var sCharLimit = $el.attr('minLength');
				if (sCharLimit == undefined) {
					$el.attr('minLength', '4');
					sCharLimit = '4';
				}
				var sMsg = this.errorMessage.replace('##', sCharLimit);
				
				this.errorMessage = sMsg;
			},
			test: function (displayErrors) {
				var $el = jQuery(this.el);
				var iCharLimit = parseInt($el.attr('minLength'));
				var val = $el.val();
				var bIsValid = val.length >= iCharLimit;
				return bIsValid;
			}
		},
		'jsIsInteger': {
			eventName: 'change',
			ruleName: 'jsIsInteger',
			errorMessage: 'This field may only contain numbers.',
			test: function (displayErrors) {
				var valid = true;
				var value = jQuery(this.el).val();
				if (value != '') {
					var regex = /[^(0-9)]/;
					valid = !regex.test(value);
				}
				return valid;
			}
		},
		'jsIsLetters': {
			eventName: 'change',
			ruleName: 'jsIsLetters',
			errorMessage: 'This field may not contain numbers or special characters.',
			test: function (displayErrors) {
				var valid = true;
				var value = jQuery(this.el).val();
				if (value != '') {
					var regex = /[^(A-Za-z)]/;
					valid = !regex.test(value);
				}
				return valid;
			}
		},
		'jsIsValidState': {
			eventName: 'blur',
			ruleName: 'jsIsValidState',
			errorMessage: 'You must enter a valid state for the selected country.',
			initRule: function () {
				var $el = jQuery('.jsIsValidState');
				window.jsStateOptions = $el.html();
				window.jsSelectedState = $el.val();
				if((window.jsSelectedState === undefined) || (window.jsSelectedState == 0)) {
					$el.find('option').addClass('jsHideOption');
					$el.find('option[value="0"]').removeClass('jsHideOption');
					$el.find('option.jsHideOption').remove();
				}
			},
			test: function(displayErrors) {
				var valid = true;
				var $el = jQuery(this.el);
				
				var $country = jQuery('#ddlCountry');
				if ($country.size() > 0) {
					var sCountryVal = $country.val();
					var bStateIsRequired = sCountryVal == 'CA' || sCountryVal == 'US' || sCountryVal == 'CN';
					valid = bStateIsRequired ? $el.val() != '0' : valid;
				}

				return valid;
			}
		},
		'jsChangeCountry': {
			eventName: 'change',
			ruleName: 'jsBlurZip',
			errorMessage: '',
			initRule: function () {
				var sVal = jQuery(this.el).val();
				if (sVal != "0") {
					window.validationReadyFunction = function() {
						jQuery('.jsChangeCountry').change();
					};
				}
			},
			test: function (displayErrors) {
				var sCountryVal = jQuery(this.el).val();
				if (sCountryVal != window.jsLastCountryVal) {
					window.jsLastCountryVal = sCountryVal;
					var $stateddl = jQuery('.jsIsValidState');
					$stateddl.html(window.jsStateOptions);
					$stateddl.find('option').addClass('jsHideOption');
					$stateddl.find('option[value="0"], option.' + sCountryVal).removeClass('jsHideOption');
					$stateddl.find('.jsHideOption').remove();

					if (window.jsSelectedState && $stateddl.find('option[value=' + window.jsSelectedState + ']').length) {
						$stateddl.val(window.jsSelectedState);
						$stateddl.blur()
					} else {
						$stateddl.val('0');
					}					
				}
				
				if (this.section.hasBeenValidated == true) {
					jQuery('.jsIsZipCode').blur();
					jQuery('.jsIsValidState').blur();					
				}

				return true;
			}
		},
		/* This checks for a valid US, Canada or China? ZIP Code formats */
		'jsIsZipCode': {
			eventName: 'blur',
			ruleName: 'jsIsZipCode',
			errorMessage: 'Must be a valid ZIP code.',
			test: function (displayErrors) {
				var valid = true;
				var $el = jQuery(this.el);
				var value = jQuery.trim($el.val().toUpperCase());
				
				// strip whitespace
				$el.val(value);

				// if there is a country field, then zip is required.
				var $country = jQuery('#ddlCountry');
				if ($country.size() > 0) {
					var sCountryVal = $country.val();
					var bZipIsRequired = sCountryVal == 'CA' || sCountryVal == 'US' || sCountryVal == 'CN';
					if (bZipIsRequired) {
						valid = (value != '');
						if (valid) {
							var regex = /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)|(^\d{6}$)/;
							valid = regex.test(value);
						}
					}
				}

				return valid;
			}
		},
		'jsIsMinLength': {
			eventName: 'change',
			ruleName: 'jsIsMinLength',
			errorMessage: 'This field must be at least {0} characters long.',
			minLength: 0,
			test: function (displayErrors) {
				var valid = true;
				var value = jQuery(this.el).val();
				if (value != '') {
					valid = value.length >= this.minLength;
				}
				return valid;
			},
			initRule: function () {
				// Get the min length
				var className = this.el.className;
				var regEx = new RegExp(/jsMin-(\d+)/);
				var result = regEx.exec(className);
				if (result !== null && result instanceof Array && result.length > 1) {
					var min = result[1];
					min = parseInt(min);
					if (!isNaN(min)) {
						this.minLength = min;
						this.errorMessage = this.errorMessage.replace('{0}', min);
					}
				}
			}
		},
		'jsIsPhoneNumber': {
			eventName: 'blur',
			ruleName: 'jsIsPhoneNumber',
			errorMessage: "This field must be a valid phone number.",
			test: function (displayErrors) {
				var valid = true;
				var $el = jQuery(this.el);
				var value = jQuery.trim($el.val());
				if (value != '') {
					var numbers = value.replace(/[^0-9]/g, "");
					var len = numbers.length;
					valid = false;
					valid = len == 10 ? /^([02-9]{1}[0-9]{9})/.test(numbers) : valid;
					valid = len == 11 ? /^[1]([02-9]{1}[0-9]{9})/.test(numbers) : valid;
					if (valid) {
						var masked = "";
						numbers = numbers.replace(/^[1]/, "");
						masked = "(" + numbers.substr(0, 3) + ") " + numbers.substr(3, 3) + "-" + numbers.substr(6, 4);
						$el.val(masked);
					} else {
						// the above are for North American numbers, for everyone else, just
						// look for numbers, spaces, and other common symbols.
						valid = /^\+?[0-9(\)\-\ x\.]+$/.test(value);
					}
				} else {
					$el.val('');
				}
				return valid;
			}
		},
		'jsIsEmail': {
			eventName: 'change',
			ruleName: 'jsIsEmail',
			errorMessage: "This field must be a valid email address",
			test: function (displayErrors) {
				var valid = true;
				var value = jQuery(this.el).val();
				if (value != '') {
					var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,15})+$/;
					valid = regex.test(value);
				}
				return valid;
			}
		},
		'jsCompanyCheck': {
			eventName: 'change',
			ruleName: 'jsCompanyCheck',
			errorMessage: "This is not a valid company name.",
			test: function (displayErrors) {
				var valid = true;
				var value = jQuery.trim(jQuery(this.el).val());
				var invalidList = (jsInvalidCompanies === undefined) ? "" : jsInvalidCompanies;
				
				if(!(jsInvalidCompanyMessage === undefined)) {
					this.errorMessage = jsInvalidCompanyMessage;
				}
				
				if ((value != '') && (invalidList != '')) {
					var Companies = invalidList.split(',');
					
					for(var i = 0; i < Companies.length; i++) {
						if(Companies[i].toUpperCase() == value.toUpperCase()) {
							valid = false;
							break;
						}
					}
				}
				return valid;
			}
		},
		'jsConfirm': {
			eventName: 'blur',
			ruleName: 'jsConfirm',
			errorMessage: 'These fields must match may not and be blank.',
			test: function (displayErrors) {
				var jqConfirm = jQuery(this.el);
				var jqSection = jqConfirm.closest('.jsValidationSection');
				var jqTarget = jqSection.find('.jsConfirmTarget');
				var val1 = jqTarget.val();
				var val2 = jqConfirm.val();
				var bIsSame = val1 == val2;
				var bIsBlank = jQuery.trim(val1) == '' || jQuery.trim(val2) == '';
				var bIsValid = bIsSame && !bIsBlank;

				if (!bIsValid) {
					jqTarget.addClass(lattice.validation.config.errorCssClassName);
				} else {
					jqTarget.removeClass(lattice.validation.config.errorCssClassName);
				}

				return bIsValid;
			}
		},
		'jsIsExclusive': {
			eventName: null,
			ruleName: 'jsIsExclusive',
			requiredClass: 'jsIsExclusiveRequired',
			conf: {
				exclusive: { errorClass: 'jsIsExclusiveError', errorMessage: "Only one of those fields may have a value" },
				required: { errorClass: 'jsIsExclusiveRequiredError', errorMessage: "One of these fields must have a value" }
			},
			exclusiveFields: [],
			test: function (displayErrors) {
				var nbFieldsWithValue = 0, nbRequiredWithValue = 0,
                    that = this;
				jQuery(this.exclusiveFields).each(function () {
					$this = jQuery(this);
					lattice.validation.removeErrorForField(this, that.conf.exclusive.errorClass);
					lattice.validation.removeErrorForField(this, that.conf.required.errorClass);

					if ($this.val() !== '') {
						nbFieldsWithValue++;
						$this.addClass(that.conf.exclusive.errorClass);
						if ($this.hasClass(that.requiredClass)) {
							nbRequiredWithValue++;
						}
					} else if ($this.hasClass(that.requiredClass)) {
						$this.addClass(that.conf.required.errorClass);
					}
				});

				return nbRequiredWithValue === 1 && nbFieldsWithValue <= 1;
			},
			initRule: function () {
				// Set all exclusive fields
				$el = jQuery(this.el);
				var regX = lattice.validation.config.regex[this.ruleName];
				var className = $el.attr('class');
				var relatedFieldsClass = regX.exec(className)[0];

				var fields = jQuery('.' + relatedFieldsClass, this.section.el);
				for (var i = 0; i < fields.length; i++) {
					this.exclusiveFields.push(fields[i]);
				}

				// Add change events on each
				var curRuleName = this.ruleName;
				var that = this;
				jQuery(this.exclusiveFields).change(this, function (ev) {
					var isReady = true;
					for (var i in lattice.validation.rules) {
						var rule = lattice.validation.rules[i];
						if (rule.ruleName !== curRuleName) {
							if (jQuery(this).hasClass(rule.ruleName + 'Error')) {
								isReady = false;
							}
						}
					}
					if (isReady) {
						ev.data.formField.validateField();
					}
				}).each(function () {
					if (jQuery(this).hasClass(that.requiredClass)) {
						lattice.validation.markFieldAsRequired(this);
					}
				});
			},
			validationFailed: function () {
				var that = this;
				var reqErrElements = jQuery('.' + this.conf.required.errorClass, this.section.el);

				if (reqErrElements.length > 1) {
					reqErrElements.each(function () {
						lattice.validation.displayErrorForField(this, that.conf.required.errorMessage, that.conf.required.errorClass);
					});
				} else {
					jQuery('.' + this.conf.exclusive.errorClass, this.section.el).each(function () {
						lattice.validation.displayErrorForField(this, that.conf.exclusive.errorMessage, that.conf.exclusive.errorClass);
					});
				}
			},
			validationSucceeded: function () {
				var that = this;
				jQuery('.' + this.conf.exclusive.errorClass, this.section.el).each(function () {
					lattice.validation.removeErrorForField(this, that.conf.exclusive.errorClass);
				});
			}
		}
	},

	/* Display error for a given field. */
	displayErrorForField: function (field, message, ruleErrorClass) {
		$field = jQuery(field);
		if (!$field.is('.' + ruleErrorClass + '.' + this.config.errorCssClassName)) {
			$field.addClass(this.config.errorCssClassName).addClass(ruleErrorClass);
			var $errSpan = $field.siblings('.' + this.config.errorMessageFieldClassName);
			if ($errSpan.size() == 0) {
				$errSpan = jQuery('<span class="error-message"></span>').insertAfter($field);
			}
			$errSpan.html(message).addClass(this.config.errorMessageFieldShowClassName);
		}
	},

	/* Remove error for the given field */
	removeErrorForField: function (field, ruleErrorClass) {
		$field = jQuery(field);
		$field.removeClass(lattice.validation.config.errorCssClassName).removeClass(ruleErrorClass);
		$field.siblings('.' + this.config.errorMessageFieldClassName).html('').removeClass(this.config.errorMessageFieldShowClassName);
	},

	markFieldAsRequired: function (field) {
		var $el = jQuery(field);
		var label = [];
		// textareas are automatically wrapped, se we check one level higher
		label = $el.siblings('label');
		if (label.length === 0) {
			label = $el.parent().siblings('label');
		}
		if (label.length > 0) {
			jQuery(label).addClass(lattice.validation.config.requiredLabelCssClassName);
		}
	},

	/* This prevents pressing 'enter' while being focused on a text input field to trigger the submit action.*/
	preventEnterSubmit: function (section) {
		var inputs = '';
		for (var i in this.config.inputTypes) {
			inputs += ', input[type="' + this.config.inputTypes[i] + '"]';
		}
		inputs = inputs.substr(2, inputs.length);

		jQuery(inputs, section).each(function () {
			jQuery(this).keypress(function (event) {
				// Prevent the enter button from submitting the form
				event = event || window.event;
				if (event.keyCode == 13 || event.which == 13) {
					var isPageValid = true;
					for (var i in lattice.validation.config.activeValidationSections) {
						var section = lattice.validation.config.activeValidationSections[i];
						if (section instanceof lattice.validation.FormSection) {
							if (!section.validateForm()) {
								isPageValid = false;
							}
						}
					}

					if (!isPageValid) {
						event.preventDefault();
					}
				}
			});
		});
	},

	/*
    If the form has never been validated and the user clicks one of the submit buttons, validate form first
    [FormSection] formSection
    */
	remoteSubmitClick: function (formSection) {
		jQuery('input[remoteSubmit]', formSection.el).each(function () {
			var $button = jQuery(this);
				var $target = jQuery('#' + $button.attr('remoteSubmit'));
				if ($target.size() > 0) {
					var fClick = function () {
						var bIsValid = formSection.validateForm();
						if (bIsValid) {
							$target.click();
						}
					};
					$button.click(fClick);
				}
		});
	},
	preventPrematureSubmition: function (formSection) {
		jQuery(formSection.submitButtons).each(function () {
			jQuery(this).mousedown(function (event) {
				event = event || window.event;
				var isValid = true;
				isValid = formSection.validateForm();
				formSection.switchSubmitButtons(isValid);
				if (!isValid) {
					event.stopPropagation();
					event.preventDefault();
				}
				return isValid;
			});
		});
	},

	markFieldsRequiredIE7: function () {
		jQuery('.ie7 .' + this.config.requiredLabelCssClassName).each(function () {
			var $t = jQuery(this);
			var $innerSpan = jQuery(document.createElement('span'));
			$t.wrapInner($innerSpan);
			$t.find('span').append('<span class="required-star" style="position: static;">*</span>');
		});
	},

	// Sets all validation events
	init: function () {
		jQuery("." + lattice.validation.config.sectionCssClassName).each(function () {

			var section = new lattice.validation.FormSection({
				el: this
			});

			var rules = window.lattice.validation.rules;
			for (var member in rules) {
					var currRule = rules[member];
					var $el = jQuery('.' + member, section.el);
					var ids = 0;
					var field;
					$el.each(function () {
						var $this = jQuery(this);
						if (typeof $this.prop('data-id') === 'undefined') {
							$this.prop('data-id', ids);
							field = new lattice.validation.FormField({
								el: this,
								id: ids,
								section: section
							});
							ids++;
							section.addField(field);
						} else {
							field = section.formFields[$this.prop('data-id')];
						}
						var rule = new lattice.validation.FormRule(currRule, this, field);
						field.addRule(rule);
					});
			}

			// Prevent 'enter' from submitting the form
			lattice.validation.preventEnterSubmit(this);

			// Validate the form before clicking the submit buttons if the form has never been validated
			lattice.validation.preventPrematureSubmition(section);
			lattice.validation.remoteSubmitClick(section);

			lattice.validation.config.activeValidationSections.push(section);
		});
		lattice.validation.markFieldsRequiredIE7();

		if (typeof(window.validationReadyFunction) === 'function') {
			window.validationReadyFunction();
		}
	},

	/*
    Object defining a form section, containing submit buttons and fields to validate
    [Object] inherit - allows to override some attributes and functions when instantiating
    */
	FormSection: function (inherit) {

		this.el = null;
		this.formFields = [];
		this.hasBeenValidated = false;
		this.submitButtons = [];

		// Add a new FormField to this section
		this.addField = function (field) {
			if (field instanceof lattice.validation.FormField) {
				this.formFields.push(field);
			}
		};

		// This validates the form by testing each form rule, it only returns true if all validations
		// passed, but does not execute any action
		this.testForm = function () {
			var isValid = true;
			jQuery.each(this.formFields, function () {
				if (!this.testField()) {
					isValid = false;
					return false;
				}
			});
			this.hasBeenValidated = true;
			return isValid;
		};

		// This validates the form but also calls action on fields error/success (such as displaying an error message)
		this.validateForm = function () {
			var isValid = true;
			jQuery.each(this.formFields, function () {
				if (!this.validateField()) {
					isValid = false;
				}
			});
			this.hasBeenValidated = true;
			return isValid;
		};

		// Disables submit buttons if any form element fails validation
		this.switchSubmitButtons = function (bOnOff) {
			jQuery(this.submitButtons).each(function () {
				var $button = jQuery(this);
				lattice.forms.toggleInput($button.get(0), bOnOff);
			});
		};

		this.setSubmitButtons = function () {
			this.submitButtons = jQuery('.' + lattice.validation.config.submitCssClassName, this.el);
			var $el = jQuery(this.el),
                buttons = [],
                attr = $el.attr(lattice.validation.config.submitButtonsAttribute);
			if (attr) {
				buttons = jQuery(attr);
			}
			for (var i = 0; i < buttons.length; i++) {
				this.submitButtons.push(buttons[i]);
			}
		};

		// This allows to overwrite default functions and variables by the ones of the object passed in parameter
		var that = this;
		that = jQuery.extend(that, inherit);
		this.setSubmitButtons();
		that = null;
	},

	/*
    Object representing a field that contains validation rules (of type FormRule)
    [Object] inherit - allows to override some attributes and functions when instantiating
    */
	FormField: function (inherit) {
		// Section
		this.section = null;
		// DOM Element
		this.el = null;
		// ID to identify the field
		this.id = null;
		// Rules that apply
		this.rules = [];
		// This object is used to trigger validation on specific events
		this.events = {};

		this.addRule = function (rule) {
			if (rule instanceof lattice.validation.FormRule) {
				this.rules.push(rule);
				if (rule.eventName !== null) {
					if (!this.events[rule.eventName]) {
						this.events[rule.eventName] = [];

						// Add an event for this event type (e.g: 'change')
						if (rule.eventName == 'change') {
							jQuery(this.el).change(
                        		{ field: this, eventName: rule.eventName },
                        		function (ev) {
                        			if (ev.data.field instanceof lattice.validation.FormField) {
                        				jQuery.each(ev.data.field.events[ev.data.eventName], function () {
                        					if (!this.validateRule()) {
                        						return false;
                        					}
                        				});
                        			}
                        		}
                        	);
						} else {
							jQuery(this.el).on(rule.eventName, { field: this, eventName: rule.eventName }, function (ev) {
								if (ev.data.field instanceof lattice.validation.FormField) {
									jQuery.each(ev.data.field.events[ev.data.eventName], function () {
										if (!this.validateRule()) {
											return false;
										}
									});
								}
							});
						}

					}
					this.events[rule.eventName].push(rule);
				}
			}
		};

		// Validate all the rules of the field, calling success/failure callbacks
		this.validateField = function () {
			var isValid = true;
			jQuery.each(this.rules, function () {
				if (!this.validateRule()) {
					isValid = false;
					return false; // quits .each
				}
			});
			return isValid;
		};

		// Test all rules of the field, without calling any action
		this.testField = function () {
			var isValid = true;
			jQuery.each(this.rules, function () {
				if (!this.test()) {
					isValid = false;
					return false; // quits .each
				}
			});
			return isValid;
		};

		// This allows to overwrite default functions and variables by the ones of the object passed in parameter
		var that = this;
		that = jQuery.extend(that, inherit);
		that = null;
	},

	// Object defining form validation rules
	FormRule: function (inherit, elem, formField) {
		// Rule name (required, isemail, etc.)
		this.ruleName = null;
		// event to bind to the element (click, change, etc.)
		this.eventName = null;

		// action called when the event is raised
		this.validateRule = function () {
			var isValid = true;
			if (this.test(true)) {
				this.onSuccess();
			} else {
				this.onFailure();
				isValid = false;
			}
			return isValid;
		};

		// Element on which the validation is made
		this.el = elem ? elem : null;
		this.formField = formField ? formField : null;
		// Form section containing the element
		this.section = (formField && formField.section) ? formField.section : null;
		// Default message displayed in case of error
		this.errorMessage = "This field failed validation";
		// Thest the element validation
		this.test = function () { return true; };

		// Validation failed
		this.onFailure = function () {
			this.switchSubmitButtons(false);

			if (typeof this.validationFailed === 'function') {
				this.validationFailed();
			}
		};

		// Validation succeeded
		this.onSuccess = function () {
			this.switchSubmitButtons(true);

			if (typeof this.validationSucceeded === 'function') {
				this.validationSucceeded();
			}
		};

		// Overwrite this to customize validation error actions
		this.validationFailed = function () {
			lattice.validation.displayErrorForField(this.el, this.errorMessage, this.ruleName + 'Error');
		};

		// Overwrite this to customize validation success actions
		this.validationSucceeded = function () {
			lattice.validation.removeErrorForField(this.el, this.ruleName + 'Error');
		};

		// Disables submit buttons if any form element fails validation
		this.switchSubmitButtons = function (bOnOff) {
			this.section.switchSubmitButtons(bOnOff);
		};

		// This allows to overwrite default functions and variables by the ones of the object passed in parameter
		var that = this;
		that = jQuery.extend(that, inherit);

		if (typeof this.initRule === 'function') {
			this.initRule();
		}

		that = null;
	}
};

// JavaScript Document
function swapActive(newLink,activeTableID) {
	var newActiveCell = jQuery(newLink).parents("td")[0];
	var newActiveTable = document.getElementById(activeTableID);
	
	jQuery(".docTypes").find("td.active").removeClass("active");
	jQuery(newActiveCell).addClass("active");
	
	uncheckAllDocs();
	jQuery(".activeDocList").removeClass("activeDocList");
	jQuery(newActiveTable).addClass("activeDocList");
	jQuery(newActiveTable).tablesorter();
	
	jQuery(".docTypes").find("a.activeLink").removeClass("activeLink");
	jQuery(newLink).addClass("activeLink");
	
	return false;
}

function swapCheckedDocs(curState) {
	if(! curState) { uncheckAllDocs(); }
	else { checkAllDocs(); }
	
	return !curState;
}

function uncheckAllDocs() {
	jQuery(".activeDocList").find("input[type=checkbox]").each( function() { this.checked=false; } );
	
	return true;
}

function checkAllDocs() {
	jQuery(".activeDocList").find("input[type=checkbox]").each( function() { this.checked=true; } );

	return true;
}

//Separating the "SelectAll or unSelectAll functionality for Documents and Subscriptions

//For Documents download "Select All" functionality 
function swapCheckedDocsProd(curState) {
    if (!curState) { uncheckAllDocsProd(); }
    else { checkAllDocsProd(); }

    return !curState;
}

function uncheckAllDocsProd() {
    jQuery(".activeDocList").find("input:checkbox[id*='docCheckbox_']").each(function () { this.checked = false; });

    return true;
}

function checkAllDocsProd() {
    jQuery(".activeDocList").find("input:checkbox[id*='docCheckbox_']").each(function () { this.checked = true; });

    return true;
}

//For Subscription document "Select All" functionality

function swapCheckedSubProd(curState) {
    if (!curState) { uncheckAllSubProd(); }
    else { checkAllSubProd(); }

    return !curState;
}

function uncheckAllSubProd() {
    jQuery(".activeDocList").find("input:checkbox[id*='SubCheckbox_']").each(function () { this.checked = false; });

    return true;
}

function checkAllSubProd() {
    jQuery(".activeDocList").find("input:checkbox[id*='SubCheckbox_']").each(function () { this.checked = true; });

    return true;
}



function normalizeHeaders() {
	var maxWidth = new Array();
	var numCols = jQuery("thead.parameters-head tr").first().children().length;
	
	// TODO - this needs to be adjusted as it will push the table size too wide
	jQuery("thead.parameters-head tr").each(function() {
		for(var i=0;i < numCols;i++) {
			var myWidth = jQuery(this).children().eq(i).width();
			
			if(maxWidth.length < (i + 1)) { maxWidth[i] = 0; }
			if(myWidth > maxWidth[i]) { maxWidth[i] = myWidth; }
		}
	});
	
	jQuery("thead.parameters-head tr").each(function() {
		for(var i=0;i < maxWidth.length;i++) {
			jQuery(this).children().eq(i).css('width',maxWidth[i] + 'px');
		}
	});
}
/*
* jQuery Cycle2; v20130525
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
(function (e) { "use strict"; function t(e) { return (e || "").toLowerCase() } var i = "20130409"; e.fn.cycle = function (i) { var n; return 0 !== this.length || e.isReady ? this.each(function () { var n, s, o, c, r = e(this), l = e.fn.cycle.log; if (!r.data("cycle.opts")) { (r.data("cycle-log") === !1 || i && i.log === !1 || s && s.log === !1) && (l = e.noop), l("--c2 init--"), n = r.data(); for (var a in n) n.hasOwnProperty(a) && /^cycle[A-Z]+/.test(a) && (c = n[a], o = a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), l(o + ":", c, "(" + typeof c + ")"), n[o] = c); s = e.extend({}, e.fn.cycle.defaults, n, i || {}), s.timeoutId = 0, s.paused = s.paused || !1, s.container = r, s._maxZ = s.maxZ, s.API = e.extend({ _container: r }, e.fn.cycle.API), s.API.log = l, s.API.trigger = function (e, t) { return s.container.trigger(e, t), s.API }, r.data("cycle.opts", s), r.data("cycle.API", s.API), s.API.trigger("cycle-bootstrap", [s, s.API]), s.API.addInitialSlides(), s.API.preInitSlideshow(), s.slides.length && s.API.initSlideshow() } }) : (n = { s: this.selector, c: this.context }, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function () { e(n.s, n.c).cycle(i) }), this) }, e.fn.cycle.API = { opts: function () { return this._container.data("cycle.opts") }, addInitialSlides: function () { var t = this.opts(), i = t.slides; t.slideCount = 0, t.slides = e(), i = i.jquery ? i : t.container.find(i), t.random && i.sort(function () { return Math.random() - .5 }), t.API.add(i) }, preInitSlideshow: function () { var t = this.opts(); t.API.trigger("cycle-pre-initialize", [t]); var i = e.fn.cycle.transitions[t.fx]; i && e.isFunction(i.preInit) && i.preInit(t), t._preInitialized = !0 }, postInitSlideshow: function () { var t = this.opts(); t.API.trigger("cycle-post-initialize", [t]); var i = e.fn.cycle.transitions[t.fx]; i && e.isFunction(i.postInit) && i.postInit(t) }, initSlideshow: function () { var t, i = this.opts(), n = i.container; i.API.calcFirstSlide(), "static" == i.container.css("position") && i.container.css("position", "relative"), e(i.slides[i.currSlide]).css("opacity", 1).show(), i.API.stackSlides(i.slides[i.currSlide], i.slides[i.nextSlide], !i.reverse), i.pauseOnHover && (i.pauseOnHover !== !0 && (n = e(i.pauseOnHover)), n.hover(function () { i.API.pause(!0) }, function () { i.API.resume(!0) })), i.timeout && (t = i.API.getSlideOpts(i.nextSlide), i.API.queueTransition(t, t.timeout + i.delay)), i._initialized = !0, i.API.updateView(!0), i.API.trigger("cycle-initialized", [i]), i.API.postInitSlideshow() }, pause: function (t) { var i = this.opts(), n = i.API.getSlideOpts(), s = i.hoverPaused || i.paused; t ? i.hoverPaused = !0 : i.paused = !0, s || (i.container.addClass("cycle-paused"), i.API.trigger("cycle-paused", [i]).log("cycle-paused"), n.timeout && (clearTimeout(i.timeoutId), i.timeoutId = 0, i._remainingTimeout -= e.now() - i._lastQueue, (0 > i._remainingTimeout || isNaN(i._remainingTimeout)) && (i._remainingTimeout = void 0))) }, resume: function (e) { var t = this.opts(), i = !t.hoverPaused && !t.paused; e ? t.hoverPaused = !1 : t.paused = !1, i || (t.container.removeClass("cycle-paused"), t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed")) }, add: function (t, i) { var n, s = this.opts(), o = s.slideCount, c = !1; "string" == e.type(t) && (t = e.trim(t)), e(t).each(function () { var t, n = e(this); i ? s.container.prepend(n) : s.container.append(n), s.slideCount++, t = s.API.buildSlideOpts(n), s.slides = i ? e(n).add(s.slides) : s.slides.add(n), s.API.initSlide(t, n, --s._maxZ), n.data("cycle.opts", t), s.API.trigger("cycle-slide-added", [s, t, n]) }), s.API.updateView(!0), c = s._preInitialized && 2 > o && s.slideCount >= 1, c && (s._initialized ? s.timeout && (n = s.slides.length, s.nextSlide = s.reverse ? n - 1 : 1, s.timeoutId || s.API.queueTransition(s)) : s.API.initSlideshow()) }, calcFirstSlide: function () { var e, t = this.opts(); e = parseInt(t.startingSlide || 0, 10), (e >= t.slides.length || 0 > e) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, 0 > t.nextSlide && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0)) }, calcNextSlide: function () { var e, t = this.opts(); t.reverse ? (e = 0 > t.nextSlide - 1, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1) }, calcTx: function (t, i) { var n, s = t; return i && s.manualFx && (n = e.fn.cycle.transitions[s.manualFx]), n || (n = e.fn.cycle.transitions[s.fx]), n || (n = e.fn.cycle.transitions.fade, s.API.log('Transition "' + s.fx + '" not found.  Using fade.')), n }, prepareTx: function (e, t) { var i, n, s, o, c, r = this.opts(); return 2 > r.slideCount ? (r.timeoutId = 0, void 0) : (!e || r.busy && !r.manualTrump || (r.API.stopTransition(), r.busy = !1, clearTimeout(r.timeoutId), r.timeoutId = 0), r.busy || (0 !== r.timeoutId || e) && (n = r.slides[r.currSlide], s = r.slides[r.nextSlide], o = r.API.getSlideOpts(r.nextSlide), c = r.API.calcTx(o, e), r._tx = c, e && void 0 !== o.manualSpeed && (o.speed = o.manualSpeed), r.nextSlide != r.currSlide && (e || !r.paused && !r.hoverPaused && r.timeout) ? (r.API.trigger("cycle-before", [o, n, s, t]), c.before && c.before(o, n, s, t), i = function () { r.busy = !1, r.container.data("cycle.opts") && (c.after && c.after(o, n, s, t), r.API.trigger("cycle-after", [o, n, s, t]), r.API.queueTransition(o), r.API.updateView(!0)) }, r.busy = !0, c.transition ? c.transition(o, n, s, t, i) : r.API.doTransition(o, n, s, t, i), r.API.calcNextSlide(), r.API.updateView()) : r.API.queueTransition(o)), void 0) }, doTransition: function (t, i, n, s, o) { var c = t, r = e(i), l = e(n), a = function () { l.animate(c.animIn || { opacity: 1 }, c.speed, c.easeIn || c.easing, o) }; l.css(c.cssBefore || {}), r.animate(c.animOut || {}, c.speed, c.easeOut || c.easing, function () { r.css(c.cssAfter || {}), c.sync || a() }), c.sync && a() }, queueTransition: function (t, i) { var n = this.opts(), s = void 0 !== i ? i : t.timeout; return 0 === n.nextSlide && 0 === --n.loop ? (n.API.log("terminating; loop=0"), n.timeout = 0, s ? setTimeout(function () { n.API.trigger("cycle-finished", [n]) }, s) : n.API.trigger("cycle-finished", [n]), n.nextSlide = n.currSlide, void 0) : (s && (n._lastQueue = e.now(), void 0 === i && (n._remainingTimeout = t.timeout), n.paused || n.hoverPaused || (n.timeoutId = setTimeout(function () { n.API.prepareTx(!1, !n.reverse) }, s))), void 0) }, stopTransition: function () { var e = this.opts(); e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e) }, advanceSlide: function (e) { var t = this.opts(); return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, 0 > t.nextSlide ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, e >= 0), !1 }, buildSlideOpts: function (i) { var n, s, o = this.opts(), c = i.data() || {}; for (var r in c) c.hasOwnProperty(r) && /^cycle[A-Z]+/.test(r) && (n = c[r], s = r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), o.API.log("[" + (o.slideCount - 1) + "]", s + ":", n, "(" + typeof n + ")"), c[s] = n); c = e.extend({}, e.fn.cycle.defaults, o, c), c.slideNum = o.slideCount; try { delete c.API, delete c.slideCount, delete c.currSlide, delete c.nextSlide, delete c.slides } catch (l) { } return c }, getSlideOpts: function (t) { var i = this.opts(); void 0 === t && (t = i.currSlide); var n = i.slides[t], s = e(n).data("cycle.opts"); return e.extend({}, i, s) }, initSlide: function (t, i, n) { var s = this.opts(); i.css(t.slideCss || {}), n > 0 && i.css("zIndex", n), isNaN(t.speed) && (t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default), t.sync || (t.speed = t.speed / 2), i.addClass(s.slideClass) }, updateView: function (e) { var t = this.opts(); if (t._initialized) { var i = t.API.getSlideOpts(), n = t.slides[t.currSlide]; !e && (t.API.trigger("cycle-update-view-before", [t, i, n]), 0 > t.updateView) || (t.slideActiveClass && t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass), e && t.hideNonActive && t.slides.filter(":not(." + t.slideActiveClass + ")").hide(), t.API.trigger("cycle-update-view", [t, i, n, e]), t.API.trigger("cycle-update-view-after", [t, i, n])) } }, getComponent: function (t) { var i = this.opts(), n = i[t]; return "string" == typeof n ? /^\s*[\>|\+|~]/.test(n) ? i.container.find(n) : e(n) : n.jquery ? n : e(n) }, stackSlides: function (t, i, n) { var s = this.opts(); t || (t = s.slides[s.currSlide], i = s.slides[s.nextSlide], n = !s.reverse), e(t).css("zIndex", s.maxZ); var o, c = s.maxZ - 2, r = s.slideCount; if (n) { for (o = s.currSlide + 1; r > o; o++) e(s.slides[o]).css("zIndex", c--); for (o = 0; s.currSlide > o; o++) e(s.slides[o]).css("zIndex", c--) } else { for (o = s.currSlide - 1; o >= 0; o--) e(s.slides[o]).css("zIndex", c--); for (o = r - 1; o > s.currSlide; o--) e(s.slides[o]).css("zIndex", c--) } e(i).css("zIndex", s.maxZ - 1) }, getSlideIndex: function (e) { return this.opts().slides.index(e) } }, e.fn.cycle.log = function () { window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " ")) }, e.fn.cycle.version = function () { return "Cycle2: " + i }, e.fn.cycle.transitions = { custom: {}, none: { before: function (e, t, i, n) { e.API.stackSlides(i, t, n), e.cssBefore = { opacity: 1, display: "block" } } }, fade: { before: function (t, i, n, s) { var o = t.API.getSlideOpts(t.nextSlide).slideCss || {}; t.API.stackSlides(i, n, s), t.cssBefore = e.extend(o, { opacity: 0, display: "block" }), t.animIn = { opacity: 1 }, t.animOut = { opacity: 0 } } }, fadeout: { before: function (t, i, n, s) { var o = t.API.getSlideOpts(t.nextSlide).slideCss || {}; t.API.stackSlides(i, n, s), t.cssBefore = e.extend(o, { opacity: 1, display: "block" }), t.animOut = { opacity: 0 } } }, scrollHorz: { before: function (e, t, i, n) { e.API.stackSlides(t, i, n); var s = e.container.css("overflow", "hidden").width(); e.cssBefore = { left: n ? s : -s, top: 0, opacity: 1, display: "block" }, e.cssAfter = { zIndex: e._maxZ - 2, left: 0 }, e.animIn = { left: 0 }, e.animOut = { left: n ? -s : s } } } }, e.fn.cycle.defaults = { allowWrap: !0, autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]", delay: 0, easing: null, fx: "fade", hideNonActive: !0, loop: 0, manualFx: void 0, manualSpeed: void 0, manualTrump: !0, maxZ: 100, pauseOnHover: !1, reverse: !1, slideActiveClass: "cycle-slide-active", slideClass: "cycle-slide", slideCss: { position: "absolute", top: 0, left: 0 }, slides: "> img", speed: 500, startingSlide: 0, sync: !0, timeout: 4e3, updateView: -1 }, e(document).ready(function () { e(e.fn.cycle.defaults.autoSelector).cycle() }) })(jQuery), function (e) { "use strict"; function t(t, n) { var s, o, c, r = n.autoHeight; if ("container" == r) o = e(n.slides[n.currSlide]).outerHeight(), n.container.height(o); else if (n._autoHeightRatio) n.container.height(n.container.width() / n._autoHeightRatio); else if ("calc" === r || "number" == e.type(r) && r >= 0) { if (c = "calc" === r ? i(t, n) : r >= n.slides.length ? 0 : r, c == n._sentinelIndex) return; n._sentinelIndex = c, n._sentinel && n._sentinel.remove(), s = e(n.slides[c].cloneNode(!0)), s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), s.css({ position: "static", visibility: "hidden", display: "block" }).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), s.find("*").css("visibility", "hidden"), n._sentinel = s } } function i(t, i) { var n = 0, s = -1; return i.slides.each(function (t) { var i = e(this).height(); i > s && (s = i, n = t) }), n } function n(t, i, n, s) { var o = e(s).outerHeight(), c = i.sync ? i.speed / 2 : i.speed; i.container.animate({ height: o }, c) } function s(i, o) { o._autoHeightOnResize && (e(window).off("resize orientationchange", o._autoHeightOnResize), o._autoHeightOnResize = null), o.container.off("cycle-slide-added cycle-slide-removed", t), o.container.off("cycle-destroyed", s), o.container.off("cycle-before", n), o._sentinel && (o._sentinel.remove(), o._sentinel = null) } e.extend(e.fn.cycle.defaults, { autoHeight: 0 }), e(document).on("cycle-initialized", function (i, o) { function c() { t(i, o) } var r, l = o.autoHeight, a = e.type(l), d = null; ("string" === a || "number" === a) && (o.container.on("cycle-slide-added cycle-slide-removed", t), o.container.on("cycle-destroyed", s), "container" == l ? o.container.on("cycle-before", n) : "string" === a && /\d+\:\d+/.test(l) && (r = l.match(/(\d+)\:(\d+)/), r = r[1] / r[2], o._autoHeightRatio = r), "number" !== a && (o._autoHeightOnResize = function () { clearTimeout(d), d = setTimeout(c, 50) }, e(window).on("resize orientationchange", o._autoHeightOnResize)), setTimeout(c, 30)) }) }(jQuery), function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { caption: "> .cycle-caption", captionTemplate: "{{slideNum}} / {{slideCount}}", overlay: "> .cycle-overlay", overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>", captionModule: "caption" }), e(document).on("cycle-update-view", function (t, i, n, s) { "caption" === i.captionModule && e.each(["caption", "overlay"], function () { var e = this, t = n[e + "Template"], o = i.API.getComponent(e); o.length && t ? (o.html(i.API.tmpl(t, n, i, s)), o.show()) : o.hide() }) }), e(document).on("cycle-destroyed", function (t, i) { var n; e.each(["caption", "overlay"], function () { var e = this, t = i[e + "Template"]; i[e] && t && (n = i.API.getComponent("caption"), n.empty()) }) }) }(jQuery), function (e) { "use strict"; var t = e.fn.cycle; e.fn.cycle = function (i) { var n, s, o, c = e.makeArray(arguments); return "number" == e.type(i) ? this.cycle("goto", i) : "string" == e.type(i) ? this.each(function () { var r; return n = i, o = e(this).data("cycle.opts"), void 0 === o ? (t.log('slideshow must be initialized before sending commands; "' + n + '" ignored'), void 0) : (n = "goto" == n ? "jump" : n, s = o.API[n], e.isFunction(s) ? (r = e.makeArray(c), r.shift(), s.apply(o.API, r)) : (t.log("unknown command: ", n), void 0)) }) : t.apply(this, arguments) }, e.extend(e.fn.cycle, t), e.extend(t.API, { next: function () { var e = this.opts(); if (!e.busy || e.manualTrump) { var t = e.reverse ? -1 : 1; e.allowWrap === !1 && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next")) } }, prev: function () { var e = this.opts(); if (!e.busy || e.manualTrump) { var t = e.reverse ? 1 : -1; e.allowWrap === !1 && 0 > e.currSlide + t || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev")) } }, destroy: function () { this.stop(); var t = this.opts(), i = e.isFunction(e._data) ? e._data : e.noop; clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), i(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass("cycle-slide-active")), t.slides.each(function () { e(this).removeData(), i(this, "parsedAttrs", !1) }) }, jump: function (e) { var t, i = this.opts(); if (!i.busy || i.manualTrump) { var n = parseInt(e, 10); if (isNaN(n) || 0 > n || n >= i.slides.length) return i.API.log("goto: invalid slide index: " + n), void 0; if (n == i.currSlide) return i.API.log("goto: skipping, already on slide", n), void 0; i.nextSlide = n, clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.log("goto: ", n, " (zero-index)"), t = i.currSlide < i.nextSlide, i.API.prepareTx(!0, t) } }, stop: function () { var t = this.opts(), i = t.container; clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stopTransition(), t.pauseOnHover && (t.pauseOnHover !== !0 && (i = e(t.pauseOnHover)), i.off("mouseenter mouseleave")), t.API.trigger("cycle-stopped", [t]).log("cycle-stopped") }, reinit: function () { var e = this.opts(); e.API.destroy(), e.container.cycle() }, remove: function (t) { for (var i, n, s = this.opts(), o = [], c = 1, r = 0; s.slides.length > r; r++) i = s.slides[r], r == t ? n = i : (o.push(i), e(i).data("cycle.opts").slideNum = c, c++); n && (s.slides = e(o), s.slideCount--, e(n).remove(), t == s.currSlide && s.API.advanceSlide(1), s.API.trigger("cycle-slide-removed", [s, t, n]).log("cycle-slide-removed"), s.API.updateView()) } }), e(document).on("click.cycle", "[data-cycle-cmd]", function (t) { t.preventDefault(); var i = e(this), n = i.data("cycle-cmd"), s = i.data("cycle-context") || ".cycle-slideshow"; e(s).cycle(n, i.data("cycle-arg")) }) }(jQuery), function (e) { "use strict"; function t(t, i) { var n; return t._hashFence ? (t._hashFence = !1, void 0) : (n = window.location.hash.substring(1), t.slides.each(function (s) { return e(this).data("cycle-hash") == n ? (i === !0 ? t.startingSlide = s : (t.nextSlide = s, t.API.prepareTx(!0, !1)), !1) : void 0 }), void 0) } e(document).on("cycle-pre-initialize", function (i, n) { t(n, !0), n._onHashChange = function () { t(n, !1) }, e(window).on("hashchange", n._onHashChange) }), e(document).on("cycle-update-view", function (e, t, i) { i.hash && (t._hashFence = !0, window.location.hash = i.hash) }), e(document).on("cycle-destroyed", function (t, i) { i._onHashChange && e(window).off("hashchange", i._onHashChange) }) }(jQuery), function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { loader: !1 }), e(document).on("cycle-bootstrap", function (t, i) { function n(t, n) { function o(t) { var o; "wait" == i.loader ? (r.push(t), 0 === a && (r.sort(c), s.apply(i.API, [r, n]), i.container.removeClass("cycle-loading"))) : (o = e(i.slides[i.currSlide]), s.apply(i.API, [t, n]), o.show(), i.container.removeClass("cycle-loading")) } function c(e, t) { return e.data("index") - t.data("index") } var r = []; if ("string" == e.type(t)) t = e.trim(t); else if ("array" === e.type(t)) for (var l = 0; t.length > l; l++) t[l] = e(t[l])[0]; t = e(t); var a = t.length; a && (t.hide().appendTo("body").each(function (t) { function c() { 0 === --l && (--a, o(d)) } var l = 0, d = e(this), u = d.is("img") ? d : d.find("img"); return d.data("index", t), u = u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), u.length ? (l = u.length, u.each(function () { this.complete ? c() : e(this).load(function () { c() }).error(function () { 0 === --l && (i.API.log("slide skipped; img not loaded:", this.src), 0 === --a && "wait" == i.loader && s.apply(i.API, [r, n])) }) }), void 0) : (--a, r.push(d), void 0) }), a && i.container.addClass("cycle-loading")) } var s; i.loader && (s = i.API.add, i.API.add = n) }) }(jQuery), function (e) { "use strict"; function t(t, i, n) { var s, o = t.API.getComponent("pager"); o.each(function () { var o = e(this); if (i.pagerTemplate) { var c = t.API.tmpl(i.pagerTemplate, i, t, n[0]); s = e(c).appendTo(o) } else s = o.children().eq(t.slideCount - 1); s.on(t.pagerEvent, function (e) { e.preventDefault(), t.API.page(o, e.currentTarget) }) }) } function i(e, t) { var i = this.opts(); if (!i.busy || i.manualTrump) { var n = e.children().index(t), s = n, o = s > i.currSlide; i.currSlide != s && (i.nextSlide = s, i.API.prepareTx(!0, o), i.API.trigger("cycle-pager-activated", [i, e, t])) } } e.extend(e.fn.cycle.defaults, { pager: "> .cycle-pager", pagerActiveClass: "cycle-pager-active", pagerEvent: "click.cycle", pagerTemplate: "<span>&bull;</span>" }), e(document).on("cycle-bootstrap", function (e, i, n) { n.buildPagerLink = t }), e(document).on("cycle-slide-added", function (e, t, n, s) { t.pager && (t.API.buildPagerLink(t, n, s), t.API.page = i) }), e(document).on("cycle-slide-removed", function (t, i, n) { if (i.pager) { var s = i.API.getComponent("pager"); s.each(function () { var t = e(this); e(t.children()[n]).remove() }) } }), e(document).on("cycle-update-view", function (t, i) { var n; i.pager && (n = i.API.getComponent("pager"), n.each(function () { e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass) })) }), e(document).on("cycle-destroyed", function (e, t) { var i = t.API.getComponent("pager"); i && (i.children().off(t.pagerEvent), t.pagerTemplate && i.empty()) }) }(jQuery), function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { next: "> .cycle-next", nextEvent: "click.cycle", disabledClass: "disabled", prev: "> .cycle-prev", prevEvent: "click.cycle", swipe: !1 }), e(document).on("cycle-initialized", function (e, t) { if (t.API.getComponent("next").on(t.nextEvent, function (e) { e.preventDefault(), t.API.next() }), t.API.getComponent("prev").on(t.prevEvent, function (e) { e.preventDefault(), t.API.prev() }), t.swipe) { var i = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle", n = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle"; t.container.on(i, function () { t.API.next() }), t.container.on(n, function () { t.API.prev() }) } }), e(document).on("cycle-update-view", function (e, t) { if (!t.allowWrap) { var i = t.disabledClass, n = t.API.getComponent("next"), s = t.API.getComponent("prev"), o = t._prevBoundry || 0, c = t._nextBoundry || t.slideCount - 1; t.currSlide == c ? n.addClass(i).prop("disabled", !0) : n.removeClass(i).prop("disabled", !1), t.currSlide === o ? s.addClass(i).prop("disabled", !0) : s.removeClass(i).prop("disabled", !1) } }), e(document).on("cycle-destroyed", function (e, t) { t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle") }) }(jQuery), function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { progressive: !1 }), e(document).on("cycle-pre-initialize", function (t, i) { if (i.progressive) { var n, s, o = i.API, c = o.next, r = o.prev, l = o.prepareTx, a = e.type(i.progressive); if ("array" == a) n = i.progressive; else if (e.isFunction(i.progressive)) n = i.progressive(i); else if ("string" == a) { if (s = e(i.progressive), n = e.trim(s.html()), !n) return; if (/^(\[)/.test(n)) try { n = e.parseJSON(n) } catch (d) { return o.log("error parsing progressive slides", d), void 0 } else n = n.split(RegExp(s.data("cycle-split") || "\n")), n[n.length - 1] || n.pop() } l && (o.prepareTx = function (e, t) { var s, o; return e || 0 === n.length ? (l.apply(i.API, [e, t]), void 0) : (t && i.currSlide == i.slideCount - 1 ? (o = n[0], n = n.slice(1), i.container.one("cycle-slide-added", function (e, t) { setTimeout(function () { t.API.advanceSlide(1) }, 50) }), i.API.add(o)) : t || 0 !== i.currSlide ? l.apply(i.API, [e, t]) : (s = n.length - 1, o = n[s], n = n.slice(0, s), i.container.one("cycle-slide-added", function (e, t) { setTimeout(function () { t.currSlide = 1, t.API.advanceSlide(-1) }, 50) }), i.API.add(o, !0)), void 0) }), c && (o.next = function () { var e = this.opts(); if (n.length && e.currSlide == e.slideCount - 1) { var t = n[0]; n = n.slice(1), e.container.one("cycle-slide-added", function (e, t) { c.apply(t.API), t.container.removeClass("cycle-loading") }), e.container.addClass("cycle-loading"), e.API.add(t) } else c.apply(e.API) }), r && (o.prev = function () { var e = this.opts(); if (n.length && 0 === e.currSlide) { var t = n.length - 1, i = n[t]; n = n.slice(0, t), e.container.one("cycle-slide-added", function (e, t) { t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading") }), e.container.addClass("cycle-loading"), e.API.add(i, !0) } else r.apply(e.API) }) } }) }(jQuery), function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { tmplRegex: "{{((.)?.*?)}}" }), e.extend(e.fn.cycle.API, { tmpl: function (t, i) { var n = RegExp(i.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"), s = e.makeArray(arguments); return s.shift(), t.replace(n, function (t, i) { var n, o, c, r, l = i.split("."); for (n = 0; s.length > n; n++) if (c = s[n]) { if (l.length > 1) for (r = c, o = 0; l.length > o; o++) c = r, r = r[l[o]] || i; else r = c[i]; if (e.isFunction(r)) return r.apply(c, s); if (void 0 !== r && null !== r && r != i) return r } return i }) } }) }(jQuery);
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20130528 */
(function(e){"use strict";e(document).on("cycle-bootstrap",function(e,i,t){"carousel"===i.fx&&(t.getSlideIndex=function(e){var i=this.opts()._carouselWrap.children(),t=i.index(e);return t%i.length},t.next=function(){var e=i.reverse?-1:1;i.allowWrap===!1&&i.currSlide+e>i.slideCount-i.carouselVisible||(i.API.advanceSlide(e),i.API.trigger("cycle-next",[i]).log("cycle-next"))})}),e.fn.cycle.transitions.carousel={preInit:function(i){i.hideNonActive=!1,i.container.on("cycle-destroyed",e.proxy(this.onDestroy,i.API)),i.API.stopTransition=this.stopTransition;for(var t=0;i.startingSlide>t;t++)i.container.append(i.slides[0])},postInit:function(i){var t,n,s,o,l=i.carouselVertical;i.carouselVisible&&i.carouselVisible>i.slideCount&&(i.carouselVisible=i.slideCount-1);var r=i.carouselVisible||i.slides.length,c={display:l?"block":"inline-block",position:"static"};if(i.container.css({position:"relative",overflow:"hidden"}),i.slides.css(c),i._currSlide=i.currSlide,o=e('<div class="cycle-carousel-wrap"></div>').prependTo(i.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(i.slides),i._carouselWrap=o,l||o.css("white-space","nowrap"),i.allowWrap!==!1){for(n=0;(void 0===i.carouselVisible?2:1)>n;n++){for(t=0;i.slideCount>t;t++)o.append(i.slides[t].cloneNode(!0));for(t=i.slideCount;t--;)o.prepend(i.slides[t].cloneNode(!0))}o.find(".cycle-slide-active").removeClass("cycle-slide-active"),i.slides.eq(i.startingSlide).addClass("cycle-slide-active")}i.pager&&i.allowWrap===!1&&(s=i.slideCount-r,e(i.pager).children().filter(":gt("+s+")").hide()),i._nextBoundry=i.slideCount-i.carouselVisible,this.prepareDimensions(i)},prepareDimensions:function(i){var t,n,s,o=i.carouselVertical,l=i.carouselVisible||i.slides.length;if(i.carouselFluid&&i.carouselVisible?i._carouselResizeThrottle||this.fluidSlides(i):i.carouselVisible&&i.carouselSlideDimension?(t=l*i.carouselSlideDimension,i.container[o?"height":"width"](t)):i.carouselVisible&&(t=l*e(i.slides[0])[o?"outerHeight":"outerWidth"](!0),i.container[o?"height":"width"](t)),n=i.carouselOffset||0,i.allowWrap!==!1)if(i.carouselSlideDimension)n-=(i.slideCount+i.currSlide)*i.carouselSlideDimension;else{s=i._carouselWrap.children();for(var r=0;i.slideCount+i.currSlide>r;r++)n-=e(s[r])[o?"outerHeight":"outerWidth"](!0)}i._carouselWrap.css(o?"top":"left",n)},fluidSlides:function(i){function t(){clearTimeout(s),s=setTimeout(n,20)}function n(){i._carouselWrap.stop(!1,!0);var e=i.container.width()/i.carouselVisible;e=Math.ceil(e-l),i._carouselWrap.children().width(e),i._sentinel&&i._sentinel.width(e),r(i)}var s,o=i.slides.eq(0),l=o.outerWidth()-o.width(),r=this.prepareDimensions;e(window).on("resize",t),i._carouselResizeThrottle=t,n()},transition:function(i,t,n,s,o){var l,r={},c=i.nextSlide-i.currSlide,a=i.carouselVertical,d=i.speed;if(i.allowWrap===!1){s=c>0;var u=i._currSlide,p=i.slideCount-i.carouselVisible;c>0&&i.nextSlide>p&&u==p?c=0:c>0&&i.nextSlide>p?c=i.nextSlide-u-(i.nextSlide-p):0>c&&i.currSlide>p&&i.nextSlide>p?c=0:0>c&&i.currSlide>p?c+=i.currSlide-p:u=i.currSlide,l=this.getScroll(i,a,u,c),i.API.opts()._currSlide=i.nextSlide>p?p:i.nextSlide}else s&&0===i.nextSlide?(l=this.getDim(i,i.currSlide,a),o=this.genCallback(i,s,a,o)):s||i.nextSlide!=i.slideCount-1?l=this.getScroll(i,a,i.currSlide,c):(l=this.getDim(i,i.currSlide,a),o=this.genCallback(i,s,a,o));r[a?"top":"left"]=s?"-="+l:"+="+l,i.throttleSpeed&&(d=l/e(i.slides[0])[a?"height":"width"]()*i.speed),i._carouselWrap.animate(r,d,i.easing,o)},getDim:function(i,t,n){var s=e(i.slides[t]);return s[n?"outerHeight":"outerWidth"](!0)},getScroll:function(e,i,t,n){var s,o=0;if(n>0)for(s=t;t+n>s;s++)o+=this.getDim(e,s,i);else for(s=t;s>t+n;s--)o+=this.getDim(e,s,i);return o},genCallback:function(i,t,n,s){return function(){var t=e(i.slides[i.nextSlide]).position(),o=0-t[n?"top":"left"]+(i.carouselOffset||0);i._carouselWrap.css(i.carouselVertical?"top":"left",o),s()}},stopTransition:function(){var e=this.opts();e.slides.stop(!1,!0),e._carouselWrap.stop(!1,!0)},onDestroy:function(){var i=this.opts();i._carouselResizeThrottle&&e(window).off("resize",i._carouselResizeThrottle),i.slides.prependTo(i.container),i._carouselWrap.remove()}}})(jQuery);

jQuery(document).ready( function() {
	jQuery(".packages-body").find("tr:even").css("background-color", "#f3f3f3");
	jQuery(".parameters-body").find("tr:even").css("background-color", "#f3f3f3");
	jQuery(".data tbody").find("tr:even").css("background-color", "#f3f3f3");
	
	normalizeHeaders();

	jQuery(".homeBody .line,.botButtons").each(function() {
		lattice.utils.makeSameHeight(jQuery(this),".unit");

		jQuery(".action-buttons li,.fullAction li,.readmorelink",this).each(function() {
			jQuery(this).css('left',jQuery(this).position().left);
			jQuery(this).css('bottom',0);
			jQuery(this).css('position','absolute');
		});
	});	
});

//Note: window.load waits for all the external content to be loaded (e.g. images and fonts), whereas document.ready only waits for the document to be ready. Since we are relying on the height of the images, we need window.load
jQuery(window).load(function () {
    jQuery(".vCenter").each(function () {
        var myLineHeight = jQuery(this).parent('.line').height();
        var myImgDiv = jQuery(this);
        if ((myLineHeight - myImgDiv.height()) > 2) {
            myImgDiv.css('top', Math.round((myLineHeight - myImgDiv.height()) / 2) + 'px');
            myImgDiv.find("span").first().css({ "margin-top": Math.round((myLineHeight - myImgDiv.height()) / 2) + 'px', "display": "inline-block" });
        }
    });

	jQuery(".tablesort").tablesorter();
	jQuery(".tablesort").bind("sortStart", function() {
		jQuery(this).find("tr").css("background-color","");
	}).bind("sortEnd", function() {
		jQuery(this).find("tbody tr:even").css("background-color", "#f3f3f3");
	});

});


