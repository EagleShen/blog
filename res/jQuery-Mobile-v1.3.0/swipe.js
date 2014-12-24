!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,t),o.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n){!function(e,t,n,o){function i(e){for(;e&&"undefined"!=typeof e.originalEvent;)e=e.originalEvent;return e}function a(t,n){var a,r,s,u,c,l,d,h,p,f=t.type;if(t=e.Event(t),t.type=n,a=t.originalEvent,r=e.event.props,f.search(/^(mouse|click)/)>-1&&(r=S),a)for(d=r.length,u;d;)u=r[--d],t[u]=a[u];if(f.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==f.search(/^touch/)&&(s=i(a),f=s.touches,c=s.changedTouches,l=f&&f.length?f[0]:c&&c.length?c[0]:o,l))for(h=0,p=y.length;p>h;h++)u=y[h],t[u]=l[u];return t}function r(t){for(var n,o,i={};t;){n=e.data(t,N);for(o in n)n[o]&&(i[o]=i.hasVirtualBinding=!0);t=t.parentNode}return i}function s(t,n){for(var o;t;){if(o=e.data(t,N),o&&(!n||o[n]))return t;t=t.parentNode}return null}function u(){U=!1}function c(){U=!0}function l(){R=0,x.length=0,O=!1,c()}function d(){u()}function h(){p(),k=setTimeout(function(){k=0,l()},e.vmouse.resetTimerDuration)}function p(){k&&(clearTimeout(k),k=0)}function f(t,n,o){var i;return(o&&o[t]||!o&&s(n.target,t))&&(i=a(n,t),e(n.target).trigger(i)),i}function v(t){var n=e.data(t.target,M);if(!(O||R&&R===n)){var o=f("v"+t.type,t);o&&(o.isDefaultPrevented()&&t.preventDefault(),o.isPropagationStopped()&&t.stopPropagation(),o.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function m(t){var n,o,a=i(t).touches;if(a&&1===a.length&&(n=t.target,o=r(n),o.hasVirtualBinding)){R=H++,e.data(n,M,R),p(),d(),q=!1;var s=i(t).touches[0];I=s.pageX,L=s.pageY,f("vmouseover",t,o),f("vmousedown",t,o)}}function g(e){U||(q||f("vmousecancel",e,r(e.target)),q=!0,h())}function b(t){if(!U){var n=i(t).touches[0],o=q,a=e.vmouse.moveDistanceThreshold,s=r(t.target);q=q||Math.abs(n.pageX-I)>a||Math.abs(n.pageY-L)>a,q&&!o&&f("vmousecancel",t,s),f("vmousemove",t,s),h()}}function D(e){if(!U){c();var t,n=r(e.target);if(f("vmouseup",e,n),!q){var o=f("vclick",e,n);o&&o.isDefaultPrevented()&&(t=i(e).changedTouches[0],x.push({touchID:R,x:t.clientX,y:t.clientY}),O=!0)}f("vmouseout",e,n),q=!1,h()}}function T(t){var n,o=e.data(t,N);if(o)for(n in o)if(o[n])return!0;return!1}function E(){}function w(t){var n=t.substr(1);return{setup:function(){T(this)||e.data(this,N,{});var o=e.data(this,N);o[t]=!0,j[t]=(j[t]||0)+1,1===j[t]&&z.bind(n,v),e(this).bind(n,E),_&&(j.touchstart=(j.touchstart||0)+1,1===j.touchstart&&z.bind("touchstart",m).bind("touchend",D).bind("touchmove",b).bind("scroll",g))},teardown:function(){--j[t],j[t]||z.unbind(n,v),_&&(--j.touchstart,j.touchstart||z.unbind("touchstart",m).unbind("touchmove",b).unbind("touchend",D).unbind("scroll",g));var o=e(this),i=e.data(this,N);i&&(i[t]=!1),o.unbind(n,E),T(this)||o.removeData(N)}}}var P,N="virtualMouseBindings",M="virtualTouchID",A="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),y="clientX clientY pageX pageY screenX screenY".split(" "),C=e.event.mouseHooks?e.event.mouseHooks.props:[],S=e.event.props.concat(C),j={},k=0,I=0,L=0,q=!1,x=[],O=!1,U=!1,_="addEventListener"in n,z=e(n),H=1,R=0;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var Y=0;Y<A.length;Y++)e.event.special[A[Y]]=w(A[Y]);_&&n.addEventListener("click",function(t){var n,o,i,a,r,s,u=x.length,c=t.target;if(u)for(n=t.clientX,o=t.clientY,P=e.vmouse.clickDistanceThreshold,i=c;i;){for(a=0;u>a;a++)if(r=x[a],s=0,i===c&&Math.abs(r.x-n)<P&&Math.abs(r.y-o)<P||e.data(i,M)===r.touchID)return t.preventDefault(),t.stopPropagation(),void 0;i=i.parentNode}},!0)}(e,t,n),function(e){e.mobile={}}(e),function(e){var t={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t)}(e),function(e,t,o){function i(t,n,o){var i=o.type;o.type=n,e.event.dispatch.call(t,o),o.type=i}var a=e(n);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var r=e.mobile.support.touch,s="touchmove scroll",u=r?"touchstart":"mousedown",c=r?"touchend":"mouseup",l=r?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){n=t,i(a,n?"scrollstart":"scrollstop",e)}var n,o,a=this,r=e(a);r.bind(s,function(i){e.event.special.scrollstart.enabled&&(n||t(i,!0),clearTimeout(o),o=setTimeout(function(){t(i,!1)},50))})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(o){function r(){clearTimeout(c)}function s(){r(),n.unbind("vclick",u).unbind("vmouseup",r),a.unbind("vmousecancel",s)}function u(e){s(),l===e.target&&i(t,"tap",e)}if(o.which&&1!==o.which)return!1;{var c,l=o.target;o.originalEvent}n.bind("vmouseup",r).bind("vclick",u),a.bind("vmousecancel",s),c=setTimeout(function(){i(t,"taphold",e.Event("taphold",{target:l}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,n){n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=this,n=e(t);n.bind(u,function(t){function i(t){r&&(a=e.event.special.swipe.stop(t),Math.abs(r.coords[0]-a.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())}var a,r=e.event.special.swipe.start(t);n.bind(l,i).one(c,function(){n.unbind(l,i),r&&a&&e.event.special.swipe.handleSwipe(r,a),r=a=o})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this),function(e,t,o){var i={};e.mobile=e.extend(e.mobile,{version:"1.3.0",ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"e",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,orientationChangeEnabled:!0,buttonMarkup:{hoverDelay:200},window:e(t),document:e(n),keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},behaviors:{},silentScroll:function(n){"number"!==e.type(n)&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:i,nsNormalize:function(t){return t?i[t]||(i[t]=e.camelCase(e.mobile.ns+t)):void 0},getInheritedTheme:function(e,t){for(var n,o,i=e[0],a="",r=/ui-(bar|body|overlay)-([a-z])\b/;i&&(n=i.className||"",!(n&&(o=r.exec(n))&&(a=o[2])));)i=i.parentNode;return a||t||"a"},closestPageData:function(e){return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;for(var o,i,a,r=t.length,s=e(),u=0;r>u;u++){for(i=t.eq(u),a=!1,o=t[u];o;){var c=o.getAttribute?o.getAttribute("data-"+e.mobile.ns+n):"";if("false"===c){a=!0;break}o=o.parentNode}a||(s=s.add(i))}return s},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()}},e.mobile),e.fn.jqmData=function(t,n){var i;return"undefined"!=typeof t&&(t&&(t=e.mobile.nsNormalize(t)),i=arguments.length<2||n===o?this.data(t):this.data(t,n)),i},e.jqmData=function(t,n,o){var i;return"undefined"!=typeof n&&(i=e.data(t,n?e.mobile.nsNormalize(n):n,o)),i},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.fn.removeWithDependents=function(){e.removeWithDependents(this)},e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.fn.addDependents=function(t){e.addDependents(e(this),t)},e.addDependents=function(t,n){var o=e(t).jqmData("dependents")||e();e(t).jqmData("dependents",e.merge(o,n))},e.fn.getEncodedText=function(){return e("<div/>").text(e(this).text()).html()},e.fn.jqmEnhanceable=function(){return e.mobile.enhanceable(this)},e.fn.jqmHijackable=function(){return e.mobile.hijackable(this)};var a=e.find,r=/:jqmData\(([^)]*)\)/g;e.find=function(t,n,o,i){return t=t.replace(r,"[data-"+(e.mobile.ns||"")+"$1]"),a.call(this,t,n,o,i)},e.extend(e.find,a),e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(e,this)});