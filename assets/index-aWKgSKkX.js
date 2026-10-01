var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var ee=x.prototype=new b;ee.constructor=x,_(ee,y.prototype),ee.isPureReactComponent=!0;var te=Array.isArray;function ne(){}var S={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return C(e.type,t,e.props)}function ae(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function w(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?w(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ne,ne):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,te(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(ae(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(te(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function fe(e){var t=S.T,n={};n.types=t===null?null:t.types,S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ne,de)}catch(e){de(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}}function pe(e){var t=S.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else fe(pe.bind(null,e))}var me={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=me,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.addTransitionType=pe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!re.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)re.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ae,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=fe,e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}}var ee=!1,te=-1,ne=5,S=-1;function re(){return g?!0:!(e.unstable_now()-S<ne)}function C(){if(g=!1,ee){var t=e.unstable_now();S=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(C)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,w=ae.port2;ae.port1.onmessage=C,ie=function(){w.postMessage(null)}}else ie=function(){_(C,0)};function T(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ne=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,ee=null;function te(e,t,n){return e===n||e===t&&(x=e,!0)}function ne(e,t,n){return e===n?(ee=e,!1):e===t&&(ee!==null&&(x=e),!0)}function S(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function re(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var C=Object.assign,ie=Symbol.for(`react.element`),ae=Symbol.for(`react.transitional.element`),w=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),oe=Symbol.for(`react.strict_mode`),se=Symbol.for(`react.profiler`),ce=Symbol.for(`react.consumer`),le=Symbol.for(`react.context`),ue=Symbol.for(`react.forward_ref`),de=Symbol.for(`react.suspense`),fe=Symbol.for(`react.suspense_list`),pe=Symbol.for(`react.memo`),me=Symbol.for(`react.lazy`),he=Symbol.for(`react.activity`),ge=Symbol.for(`react.legacy_hidden`),_e=Symbol.for(`react.memo_cache_sentinel`),ve=Symbol.for(`react.view_transition`),ye=Symbol.for(`react.recoverable`),be=Symbol.iterator;function xe(e){return typeof e!=`object`||!e?null:(e=be&&e[be]||e[`@@iterator`],typeof e==`function`?e:null)}var Se=Symbol.for(`react.client.reference`);function Ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case se:return`Profiler`;case oe:return`StrictMode`;case de:return`Suspense`;case fe:return`SuspenseList`;case he:return`Activity`;case ve:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case w:return`Portal`;case le:return e.displayName||`Context`;case ce:return(e._context.displayName||`Context`)+`.Consumer`;case ue:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case pe:return t=e.displayName||null,t===null?Ce(e.type)||`Memo`:t;case me:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var we=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Ee=[],De=-1;function Oe(e){return{current:e}}function ke(e){0>De||(e.current=Ee[De],Ee[De]=null,De--)}function O(e,t){De++,Ee[De]=e.current,e.current=t}var Ae=Oe(null),je=Oe(null),Me=Oe(null),Ne=Oe(null);function Pe(e,t){switch(O(Me,t),O(je,e),O(Ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ke(Ae),O(Ae,e)}function Fe(){ke(Ae),ke(je),ke(Me)}function Ie(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,O(Ne,e)),t=Ae.current;var n=dp(t,e.type);t!==n&&(O(je,e),O(Ae,n))}function Le(e){je.current===e&&(ke(Ae),ke(je)),Ne.current===e&&(ke(Ne),sh._currentValue=Te)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var Ve=!1;function He(e,t){if(!e||Ve)return``;Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function We(e){try{var t=``,n=null;do t+=Ue(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ge=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,Qe=t.unstable_ImmediatePriority,$e=t.unstable_UserBlockingPriority,et=t.unstable_NormalPriority,tt=t.unstable_LowPriority,nt=t.unstable_IdlePriority,rt=t.log,it=t.unstable_setDisableYieldValue,at=null,ot=null;function st(e){if(typeof rt==`function`&&it(e),ot&&typeof ot.setStrictMode==`function`)try{ot.setStrictMode(at,e)}catch{}}var ct=Math.clz32?Math.clz32:dt,lt=Math.log,ut=Math.LN2;function dt(e){return e>>>=0,e===0?32:31-(lt(e)/ut|0)|0}var ft=256,pt=262144,mt=4194304;function ht(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ht(n))):i=ht(o):i=ht(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ht(n))):i=ht(o)):i=ht(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function _t(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ct(n),i=1<<r;t|=e[r],n&=~i}return t}function yt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=mt;return mt<<=1,!(mt&62914560)&&(mt=4194304),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function St(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ct(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&wt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function wt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ct(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Et(e,t){var n=t&-t;return n=n&42?1:Dt(n),(n&(e.suspendedLanes|t))===0?n:0}function Dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function kt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function At(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var jt=Math.random().toString(36).slice(2),Mt=`__reactFiber$`+jt,Nt=`__reactProps$`+jt,Pt=`__reactContainer$`+jt,Ft=`__reactEvents$`+jt,It=`__reactListeners$`+jt,Lt=`__reactHandles$`+jt,Rt=`__reactResources$`+jt,zt=`__reactMarker$`+jt,Bt=`__reactLoad$`+jt;function Vt(e){delete e[Mt],delete e[Nt],delete e[It],delete e[Lt]}function Ht(e){var t;if(t=e[Mt])return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Mt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ut(e){if(e=e[Mt]||e[Pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Gt(e){var t=e[Rt];return t||=e[Rt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Kt(e){e[zt]=!0}function qt(e){e[Bt]=void 0}var Jt=new Set,Yt={};function Xt(e,t){Zt(e,t),Zt(e+`Capture`,t)}function Zt(e,t){for(Yt[e]=t,e=0;e<t.length;e++)Jt.add(t[e])}var Qt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),$t={},en={};function tn(e){return Ge.call(en,e)?!0:Ge.call($t,e)?!1:Qt.test(e)?en[e]=!0:($t[e]=!0,!1)}var k=!1;function nn(){var e=k;return k=!1,e}function rn(e,t,n){if(tn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function an(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function on(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function sn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function cn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ln(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function un(e){if(!e._valueTracker){var t=cn(e)?`checked`:`value`;e._valueTracker=ln(e,t,``+e[t])}}function dn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=cn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var fn=/[\n"\\]/g;function pn(e){return e.replace(fn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function mn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+sn(t)):e.value!==``+sn(t)&&(e.value=``+sn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):gn(e,sn(n)):o===`number`&&e.value==t?gn(e,sn(e.value)):gn(e,sn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+sn(s):e.removeAttribute(`name`)}function hn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){un(e);return}n=n==null?``:``+sn(n),t=t==null?n:``+sn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),un(e)}function gn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function _n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vn(e,t,n){if(t!=null&&(t=``+sn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+sn(n)}function yn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(we(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=sn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),un(e)}function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Sn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||xn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Cn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,k=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(Sn(e,a,r),k=!0)}else for(var o in t)t.hasOwnProperty(o)&&Sn(e,o,t[o])}function wn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),En=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(e){return En.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function On(){}var kn=null;function An(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,Mn=null;function Nn(e){var t=Ut(e);if(t&&(e=t.stateNode)){var n=e[Nt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(mn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+pn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Nt]||null;if(!a)throw Error(i(90));mn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&dn(r)}break a;case`textarea`:vn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}}}var Pn=!1;function Fn(e,t,n){if(Pn)return e(t,n);Pn=!0;try{return e(t)}finally{if(Pn=!1,(jn!==null||Mn!==null)&&(zd(),jn&&(t=jn,e=Mn,Mn=jn=null,Nn(t),e)))for(t=0;t<e.length;t++)Nn(e[t])}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Nt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Ln=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Rn=!1;if(Ln)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Rn=!0}}),window.addEventListener(`test`,zn,zn),window.removeEventListener(`test`,zn,zn)}catch{Rn=!1}var Bn=null,Vn=null,Hn=null;function Un(){if(Hn)return Hn;var e,t=Vn,n=t.length,r,i=`value`in Bn?Bn.value:Bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Hn=i.slice(e,1<r?1-r:void 0)}function Wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gn(){return!0}function Kn(){return!1}function qn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Gn:Kn,this.isPropagationStopped=Kn,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=qn(Jn),Xn=C({},Jn,{view:0,detail:0}),Zn=qn(Xn),Qn,$n,er,tr=C({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==er&&(er&&e.type===`mousemove`?(Qn=e.screenX-er.screenX,$n=e.screenY-er.screenY):$n=Qn=0,er=e),Qn)},movementY:function(e){return`movementY`in e?e.movementY:$n}}),nr=qn(tr),rr=qn(C({},tr,{dataTransfer:0})),ir=qn(C({},Xn,{relatedTarget:0})),ar=qn(C({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0})),or=qn(C({},Jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),sr=qn(C({},Jn,{data:0})),cr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},lr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ur={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function dr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ur[e])?!!t[e]:!1}function fr(){return dr}var pr=qn(C({},Xn,{key:function(e){if(e.key){var t=cr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?lr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(e){return e.type===`keypress`?Wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),mr=qn(C({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),hr=qn(C({},Jn,{submitter:0})),gr=qn(C({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr})),_r=qn(C({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),vr=qn(C({},tr,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),yr=qn(C({},Jn,{newState:0,oldState:0,source:0})),br=[9,13,27,32],xr=Ln&&`CompositionEvent`in window,Sr=null;Ln&&`documentMode`in document&&(Sr=document.documentMode);var Cr=Ln&&`TextEvent`in window&&!Sr,wr=Ln&&(!xr||Sr&&8<Sr&&11>=Sr),Tr=` `,Er=!1;function Dr(e,t){switch(e){case`keyup`:return br.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var kr=!1;function A(e,t){switch(e){case`compositionend`:return Or(t);case`keypress`:return t.which===32?(Er=!0,Tr):null;case`textInput`:return e=t.data,e===Tr&&Er?null:e;default:return null}}function j(e,t){if(kr)return e===`compositionend`||!xr&&Dr(e,t)?(e=Un(),Hn=Vn=Bn=null,kr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return wr&&t.locale!==`ko`?null:t.data;default:return null}}var Ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Ar[e.type]:t===`textarea`}function jr(e,t,n,r){jn?Mn?Mn.push(r):Mn=[r]:jn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Yn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Mr=null,N=null;function Nr(e){Vf(e,0)}function Pr(e){if(dn(Wt(e)))return e}function Fr(e,t){if(e===`change`)return t}var Ir=!1;if(Ln){var Lr;if(Ln){var Rr=`oninput`in document;if(!Rr){var zr=document.createElement(`div`);zr.setAttribute(`oninput`,`return;`),Rr=typeof zr.oninput==`function`}Lr=Rr}else Lr=!1;Ir=Lr&&(!document.documentMode||9<document.documentMode)}function Br(){Mr&&(Mr.detachEvent(`onpropertychange`,Vr),N=Mr=null)}function Vr(e){if(e.propertyName===`value`&&Pr(N)){var t=[];jr(t,N,e,An(e)),Fn(Nr,t)}}function Hr(e,t,n){e===`focusin`?(Br(),Mr=t,N=n,Mr.attachEvent(`onpropertychange`,Vr)):e===`focusout`&&Br()}function Ur(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Pr(N)}function Wr(e,t){if(e===`click`)return Pr(t)}function P(e,t){if(e===`input`||e===`change`)return Pr(t)}function Gr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var F=typeof Object.is==`function`?Object.is:Gr;function Kr(e,t){if(F(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ge.call(t,i)||!F(e[i],t[i]))return!1}return!0}function qr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yr(e,t){var n=Jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Jr(n)}}function Xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var $r=Ln&&`documentMode`in document&&11>=document.documentMode,ei=null,ti=null,ni=null,ri=!1;function ii(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ri||ei==null||ei!==qr(r)||(r=ei,`selectionStart`in r&&Qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&Kr(ni,r)||(ni=r,r=Jf(ti,`onSelect`),0<r.length&&(t=new Yn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var oi={animationend:ai(`Animation`,`AnimationEnd`),animationiteration:ai(`Animation`,`AnimationIteration`),animationstart:ai(`Animation`,`AnimationStart`),transitionrun:ai(`Transition`,`TransitionRun`),transitionstart:ai(`Transition`,`TransitionStart`),transitioncancel:ai(`Transition`,`TransitionCancel`),transitionend:ai(`Transition`,`TransitionEnd`)},si={},ci={};Ln&&(ci=document.createElement(`div`).style,`AnimationEvent`in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),`TransitionEvent`in window||delete oi.transitionend.transition);function li(e){if(si[e])return si[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ci)return si[e]=t[n];return e}var ui=li(`animationend`),di=li(`animationiteration`),fi=li(`animationstart`),pi=li(`transitionrun`),mi=li(`transitionstart`),I=li(`transitioncancel`),hi=li(`transitionend`),gi=new Map,_i=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);_i.push(`scrollEnd`);function vi(e,t){gi.set(e,t),Xt(t,[e])}var yi=0;function bi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=yi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function xi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Si(e,t){return e=xi(e),t=xi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Ci=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},wi=[],Ti=0,Ei=0;function Di(){for(var e=Ti,t=Ei=Ti=0;t<e;){var n=wi[t];wi[t++]=null;var r=wi[t];wi[t++]=null;var i=wi[t];wi[t++]=null;var a=wi[t];if(wi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ji(n,i,a)}}function Oi(e,t,n,r){wi[Ti++]=e,wi[Ti++]=t,wi[Ti++]=n,wi[Ti++]=r,Ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ki(e,t,n,r){return Oi(e,t,n,r),Mi(e)}function Ai(e,t){return Oi(e,null,null,t),Mi(e)}function ji(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ct(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Mi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ni={};function Pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(e,t,n,r){return new Pi(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,t){var n=e.alternate;return n===null?(n=Fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ri(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ii(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case he:return e=Fi(31,n,t,a),e.elementType=he,e.lanes=o,e;case T:return Bi(n.children,a,o,t);case oe:s=8,a|=24;break;case se:return e=Fi(12,n,t,a|2),e.elementType=se,e.lanes=o,e;case de:return e=Fi(13,n,t,a),e.elementType=de,e.lanes=o,e;case fe:return e=Fi(19,n,t,a),e.elementType=fe,e.lanes=o,e;case ge:case ve:return e=a|32,e=Fi(30,n,t,e),e.elementType=ve,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case le:s=10;break a;case ce:s=9;break a;case ue:s=11;break a;case pe:s=14;break a;case me:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Bi(e,t,n,r){return e=Fi(7,e,r,t),e.lanes=n,e}function Vi(e,t,n){return e=Fi(6,e,null,t),e.lanes=n,e}function Hi(e){var t=Fi(18,null,null,0);return t.stateNode=e,t}function Ui(e,t,n){return t=Fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wi=new WeakMap;function Gi(e,t){if(typeof e==`object`&&e){var n=Wi.get(e);return n===void 0?(t={value:e,source:t,stack:We(t)},Wi.set(e,t),t):n}return{value:e,source:t,stack:We(t)}}var Ki=[],qi=0,Ji=null,Yi=0,Xi=[],Zi=0,Qi=null,$i=1,ea=``;function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Ji,Ji=e,Yi=t}function na(e,t,n){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,Qi=e;var r=$i;e=ea;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var a=32-ct(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$i=1<<32-ct(t)+i|n<<i|r,ea=a+e}else $i=1<<a|n<<i|r,ea=e}function ra(e){e.return!==null&&(ta(e,1),na(e,1,0))}function ia(e){for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null;for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,ea=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null}function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,$i=t.id,ea=t.overflow,Qi=e}var oa=null,L=null,R=!1,sa=null,ca=!1,la=Error(i(519));function ua(e){throw ga(Gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),la}function da(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Mt]=e,t[Nt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),hn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),yn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=On),t=!0):t=!1,t||ua(e,!0)}function fa(e){for(oa=e.return;oa;)switch(oa.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:oa=oa.return}}function pa(e){if(e!==oa)return!1;if(!R)return fa(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&L&&ua(e),fa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=dm(e)}else t===27?(t=L,Sp(e.type)?(e=um,um=null,L=e):L=t):L=oa?lm(e.stateNode.nextSibling):null;return!0}function ma(){L=oa=null,R=!1}function ha(){var e=sa;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),sa=null),e}function ga(e){sa===null?sa=[e]:sa.push(e)}var _a=Oe(null),va=null,ya=null;function ba(e,t,n){O(_a,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=_a.current,ke(_a)}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ca(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Sa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Sa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function wa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;F(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ne.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Ca(t,e,n,r),t.flags|=262144,e!==null}function Ta(e){for(e=e.firstContext;e!==null;){if(!F(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){va=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Da(e){return ka(va,e)}function Oa(e,t){return va===null&&Ea(e),ka(e,t)}function ka(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ya===null){if(e===null)throw Error(i(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return n}var Aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ja=t.unstable_scheduleCallback,Ma=t.unstable_NormalPriority,Na={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pa(){return{controller:new Aa,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&ja(Ma,function(){e.controller.abort()})}function Ia(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var La=null;function Ra(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var za=null,Ba=0,Va=0,Ha=null;function Ua(e,t){if(za===null){var n=za=[];Ba=0,Va=Pf(),Ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ba++,t.then(Wa,Wa),t}function Wa(){if(--Ba===0&&(La=null,za!==null)){Ha!==null&&(Ha.status=`fulfilled`);var e=za;za=null,Va=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ka=E.S;E.S=function(e,t){if(gd=Xe(),typeof t==`object`&&t&&typeof t.then==`function`&&Ua(e,t),La!==null)for(var n=bf;n!==null;)Ia(n,La),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ia(r,n),r=r.next;if(Va!==0){r=La,r===null&&(r=La=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ka!==null&&Ka(e,t)};var qa=Oe(null);function Ja(){var e=qa.current;return e===null?K.pooledCache:e}function Ya(e,t){t===null?O(qa,qa.current):O(qa,t.pool)}function Xa(){var e=Ja();return e===null?null:{parent:Na._currentValue,pool:e}}var Za=Error(i(460)),Qa=Error(i(474)),$a=Error(i(542)),eo={then:function(){}};function to(e){return e=e.status,e===`fulfilled`||e===`rejected`}function no(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(On,On),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(On,On);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e}throw io=t,Za}}function ro(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(io=e,Za):e}}var io=null;function ao(){if(io===null)throw Error(i(459));var e=io;return io=null,e}function oo(e){if(e===Za||e===$a)throw Error(i(483))}var so=null,co=0;function lo(e){var t=co;return co+=1,so===null&&(so=[]),no(so,e,t)}function uo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function fo(e,t){throw t.$$typeof===ie?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function po(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?(e=d(e,t,n.props.children,r,n.key),uo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===me&&ro(i)===t.type)?(t=a(t,n.props),uo(t,n),t.return=e,t):(t=zi(n.type,n.key,n.props,null,e.mode,r),uo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ae:return n=zi(t.type,t.key,t.props,null,e.mode,n),uo(n,t),n.return=e,n;case w:return t=Ui(t,e.mode,n),t.return=e,t;case me:return t=ro(t),f(e,t,n)}if(we(t)||xe(t))return t=Bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,lo(t),n);if(t.$$typeof===le)return f(e,Oa(e,t),n);fo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ae:return n.key===i?l(e,t,n,r):null;case w:return n.key===i?u(e,t,n,r):null;case me:return n=ro(n),p(e,t,n,r)}if(we(n)||xe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,lo(n),r);if(n.$$typeof===le)return p(e,t,Oa(e,n),r);fo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ae:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case w:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case me:return r=ro(r),m(e,t,n,r,i)}if(we(r)||xe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,lo(r),i);if(r.$$typeof===le)return m(e,t,n,Oa(t,r),i);fo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ta(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&ta(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ta(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&ta(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&ta(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&ta(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===T&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ae:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===T){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),uo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===me&&ro(l)===r.type){n(e,r.sibling),c=a(r,o.props),uo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===T?(c=Bi(o.props.children,e.mode,c,o.key),uo(c,o),c.return=e,e=c):(c=zi(o.type,o.key,o.props,null,e.mode,c),uo(c,o),c.return=e,e=c)}return s(e);case w:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ui(o,e.mode,c),c.return=e,e=c}return s(e);case me:return o=ro(o),_(e,r,o,c)}if(we(o))return h(e,r,o,c);if(xe(o)){if(l=xe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,lo(o),c);if(o.$$typeof===le)return _(e,r,Oa(e,o),c);fo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{co=0;var i=_(e,t,n,r);return so=null,i}catch(t){if(t===Za||t===$a)throw t;var a=Fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var mo=po(!0),ho=po(!1),go=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Mi(e),ji(e,null,n),t}return Oi(e,r,t,n),Mi(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tt(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Co=!1;function wo(){if(Co){var e=Ha;if(e!==null)throw e}}function To(e,t,n,r){Co=!1;var i=e.updateQueue;go=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===Va&&(Co=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=C({},d,f);break a;case 2:go=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function Eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Do(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Eo(n[e],t)}var Oo=Oe(null),ko=Oe(0);function Ao(e,t){e=ad,O(ko,e),O(Oo,t),ad=e|t.baseLanes}function jo(){O(ko,ad),O(Oo,Oo.current)}function Mo(){ad=ko.current,ke(Oo),ke(ko)}var No=Oe(null),Po=null;function Fo(e){var t=e.alternate;O(Bo,Bo.current&1),O(No,e),Po===null&&(t===null||Oo.current!==null||t.memoizedState!==null)&&(Po=e)}function Io(e){O(Bo,Bo.current),O(No,e),Po===null&&(Po=e)}function Lo(e){e.tag===22?(O(Bo,Bo.current),O(No,e),Po===null&&(Po=e)):Ro()}function Ro(){O(Bo,Bo.current),O(No,No.current)}function zo(e){ke(No),Po===e&&(Po=null),ke(Bo)}var Bo=Oe(0);function Vo(e,t){O(No,No.current),O(Bo,t)}function Ho(e){ke(Bo),ke(No),Po===e&&(Po=null)}function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,z=null,B=null,Go=null,Ko=!1,qo=!1,Jo=!1,Yo=0,Xo=0,Zo=null,Qo=0;function V(){throw Error(i(321))}function $o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!F(e[n],t[n]))return!1;return!0}function es(e,t,n,r,i,a){return Wo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?_c:vc,Jo=!1,a=n(r,i),Jo=!1,qo&&(a=ns(t,n,r,i)),ts(e),a}function ts(e){E.H=gc;var t=B!==null&&B.next!==null;if(Wo=0,Go=B=z=null,Ko=!1,Xo=0,Zo=null,t)throw Error(i(300));e===null||Fc||(e=e.dependencies,e!==null&&Ta(e)&&(Fc=!0))}function ns(e,t,n,r){z=e;var a=0;do{if(qo&&(Zo=null),Xo=0,qo=!1,25<=a)throw Error(i(301));if(a+=1,Go=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=yc,o=t(n,r)}while(qo);return o}function rs(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?us(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function is(){var e=Yo!==0;return Yo=0,e}function as(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function os(e){if(Ko){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ko=!1}Wo=0,Go=B=z=null,qo=!1,Xo=Yo=0,Zo=null}function ss(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Go===null?z.memoizedState=Go=e:Go=Go.next=e,Go}function cs(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=Go===null?z.memoizedState:Go.next;if(t!==null)Go=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},Go===null?z.memoizedState=Go=e:Go=Go.next=e}return Go}function ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(e){var t=Xo;return Xo+=1,Zo===null&&(Zo=[]),e=no(Zo,e,t),t=z,(Go===null?t.memoizedState:Go.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?_c:vc),e}function ds(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return us(e);if(e.$$typeof===ye)return;if(e.$$typeof===le)return Da(e)}throw Error(i(438,String(e)))}function fs(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ls(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_e;return t.index++,n}function ps(e,t){return typeof t==`function`?t(e):t}function ms(e){return hs(cs(),B,e)}function hs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Wo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Va&&(d=!0);else if((Wo&p)===p){u=u.next,p===Va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,sd|=p;f=u.action,Jo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!F(o,e.memoizedState)&&(Fc=!0,d&&(n=Ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gs(e){var t=cs(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);F(o,t.memoizedState)||(Fc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _s(e,t,n){var r=z,a=cs(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!F((B||a).memoizedState,n);if(s&&(a.memoizedState=n,Fc=!0),a=a.queue,Hs(bs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Go!==null&&!!(Go.memoizedState.tag&1),Ls(e?9:8,{destroy:void 0},ys.bind(null,r,a,n,t),null),e){if(r.flags|=2048,K===null)throw Error(i(349));o||Wo&127||vs(r,t,n)}return n}function vs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=ls(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ys(e,t,n,r){t.value=n,t.getSnapshot=r,xs(t)&&Ss(e)}function bs(e,t,n){return n(function(){xs(t)&&Ss(e)})}function xs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!F(e,n)}catch{return!0}}function Ss(e){var t=Ai(e,2);t!==null&&Pd(t,e,2)}function Cs(e){var t=ss();if(typeof e==`function`){var n=e;if(e=n(),Jo){st(!0);try{n()}finally{st(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},t}function ws(e,t,n,r){return e.baseState=n,hs(e,B,typeof r==`function`?r:ps)}function Ts(e,t,n,r,a){if(pc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Es(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Es(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};o.types=a===null?null:a.types,E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Ds(e,t,s)}catch(n){ks(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Ds(e,t,a)}catch(n){ks(e,t,n)}}function Ds(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Os(e,t,n)},function(n){return ks(e,t,n)}):Os(e,t,n)}function Os(e,t,n){t.status=`fulfilled`,t.value=n,As(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Es(e,n)))}function ks(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,As(t),t=t.next;while(t!==r)}e.action=null}function As(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function js(e,t){return t}function Ms(e,t){if(R){var n=K.formState;if(n!==null){a:{var r=z;if(R){if(L){b:{for(var i=L,a=ca;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=lm(i.nextSibling),r=i.data===`F!`;break a}}ua(r)}r=!1}r&&(t=n[0])}}return n=ss(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},n.queue=r,n=uc.bind(null,z,r),r.dispatch=n,r=Cs(!1),a=fc.bind(null,z,!1,r.queue),r=ss(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ts.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ns(e){return Ps(cs(),B,e)}function Ps(e,t,n){if(t=hs(e,t,js)[0],e=ms(ps)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=us(t)}catch(e){throw e===Za?$a:e}else r=t;t=cs();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,Ls(9,{destroy:void 0},Fs.bind(null,i,n),null)),[r,a,e]}function Fs(e,t){e.action=t}function Is(e){var t=cs(),n=B;if(n!==null)return Ps(t,n,e);cs(),t=t.memoizedState,n=cs();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=ls(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Rs(){return cs().memoizedState}function zs(e,t,n,r){var i=ss();z.flags|=e,i.memoizedState=Ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function Bs(e,t,n,r){var i=cs();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&$o(r,B.memoizedState.deps)?i.memoizedState=Ls(t,a,n,r):(z.flags|=e,i.memoizedState=Ls(1|t,a,n,r))}function Vs(e,t){zs(8390656,8,e,t)}function Hs(e,t){Bs(2048,8,e,t)}function Us(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=ls(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ws(e){var t=cs().memoizedState;return Us({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Gs(e,t){return Bs(4,2,e,t)}function Ks(e,t){return Bs(4,4,e,t)}function qs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Js(e,t,n){n=n==null?null:n.concat([e]),Bs(4,4,qs.bind(null,t,e),n)}function Ys(){}function Xs(e,t){var n=cs();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&$o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zs(e,t){var n=cs();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&$o(t,r[1]))return r[0];if(r=e(),Jo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r}function Qs(e,t,n){return n===void 0||Wo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),z.lanes|=e,sd|=e,n)}function $s(e,t,n,r){return F(n,t)?n:Oo.current===null?!(Wo&106)||Wo&1073741824&&!(J&261930)?(Fc=!0,e.memoizedState=n):(e=Md(),z.lanes|=e,sd|=e,t):(e=Qs(e,n,r),F(e,t)||(Fc=!0),e)}function ec(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};s.types=o===null?null:o.types,E.T=s,fc(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?dc(e,t,Ga(c,r),jd(e)):dc(e,t,r,jd(e))}catch(n){dc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function tc(){}function nc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=rc(e).queue;ec(e,a,t,Te,n===null?tc:function(){return ic(e),n(r)})}function rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:Te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ic(e){var t=rc(e);t.next===null&&(t=e.alternate.memoizedState),dc(e,t.next.queue,{},jd())}function ac(){return Da(sh)}function oc(){return cs().memoizedState}function sc(){return cs().memoizedState}function cc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=yo(n);var r=bo(t,e,n);r!==null&&(Pd(r,t,n),xo(r,t,n)),t={cache:Pa()},e.payload=t;return}t=t.return}}function lc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pc(e)?mc(t,n):(n=ki(e,t,n,r),n!==null&&(Pd(n,e,r),hc(n,t,r)))}function uc(e,t,n){dc(e,t,n,jd())}function dc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pc(e))mc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,F(s,o))return Oi(e,t,i,0),K===null&&Di(),!1}catch{}if(n=ki(e,t,i,r),n!==null)return Pd(n,e,r),hc(n,t,r),!0}return!1}function fc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pc(e)){if(t)throw Error(i(479))}else t=ki(e,n,r,2),t!==null&&Pd(t,e,2)}function pc(e){var t=e.alternate;return e===z||t!==null&&t===z}function mc(e,t){qo=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tt(e,n)}}var gc={readContext:Da,use:ds,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V,useEffectEvent:V},_c={readContext:Da,use:ds,useCallback:function(e,t){return ss().memoizedState=[e,t===void 0?null:t],e},useContext:Da,useEffect:Vs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),zs(4194308,4,qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){zs(4,2,e,t)},useMemo:function(e,t){var n=ss();t=t===void 0?null:t;var r=e();if(Jo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ss();if(n!==void 0){var i=n(t);if(Jo){st(!0);try{n(t)}finally{st(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=lc.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=ss();return e={current:e},t.memoizedState=e},useState:function(e){e=Cs(e);var t=e.queue,n=uc.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ys,useDeferredValue:function(e,t){return Qs(ss(),e,t)},useTransition:function(){var e=Cs(!1);return e=ec.bind(null,z,e.queue,!0,!1),ss().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=ss();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||vs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Vs(bs.bind(null,r,o,e),[e]),r.flags|=2048,Ls(9,{destroy:void 0},ys.bind(null,r,o,n,t),null),n},useId:function(){var e=ss(),t=K.identifierPrefix;if(R){var n=ea,r=$i;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:Ms,useActionState:Ms,useOptimistic:function(e){var t=ss();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fc.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:fs,useCacheRefresh:function(){return ss().memoizedState=cc.bind(null,z)},useEffectEvent:function(e){var t=ss(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},vc={readContext:Da,use:ds,useCallback:Xs,useContext:Da,useEffect:Hs,useImperativeHandle:Js,useInsertionEffect:Gs,useLayoutEffect:Ks,useMemo:Zs,useReducer:ms,useRef:Rs,useState:function(){return ms(ps)},useDebugValue:Ys,useDeferredValue:function(e,t){return $s(cs(),B.memoizedState,e,t)},useTransition:function(){var e=ms(ps)[0],t=cs().memoizedState;return[typeof e==`boolean`?e:us(e),t]},useSyncExternalStore:_s,useId:oc,useHostTransitionStatus:ac,useFormState:Ns,useActionState:Ns,useOptimistic:function(e,t){return ws(cs(),B,e,t)},useMemoCache:fs,useCacheRefresh:sc,useEffectEvent:Ws},yc={readContext:Da,use:ds,useCallback:Xs,useContext:Da,useEffect:Hs,useImperativeHandle:Js,useInsertionEffect:Gs,useLayoutEffect:Ks,useMemo:Zs,useReducer:gs,useRef:Rs,useState:function(){return gs(ps)},useDebugValue:Ys,useDeferredValue:function(e,t){var n=cs();return B===null?Qs(n,e,t):$s(n,B.memoizedState,e,t)},useTransition:function(){var e=gs(ps)[0],t=cs().memoizedState;return[typeof e==`boolean`?e:us(e),t]},useSyncExternalStore:_s,useId:oc,useHostTransitionStatus:ac,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){var n=cs();return B===null?(n.baseState=e,[e,n.queue.dispatch]):ws(n,B,e,t)},useMemoCache:fs,useCacheRefresh:sc,useEffectEvent:Ws};function bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=yo(n);r.tag=2,t!=null&&(r.callback=t),t=bo(e,r,n),t!==null&&(Pd(t,e,n),xo(t,e,n))}};function Sc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,a):!0}function Cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function wc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=C({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Tc(e){Ci(e)}function Ec(e){console.error(e)}function Dc(e){Ci(e)}function Oc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){return n=yo(n),n.tag=3,n.payload={element:null},n.callback=function(){Oc(e,t)},n}function jc(e){return e=yo(e),e.tag=3,e}function Mc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){kc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){kc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&wa(t,n,a,!0),n=No.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Po===null?Kd():n.alternate===null&&od===0&&(od=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(R)return t=No.current,t===null?(r!==la&&(t=Error(i(423),{cause:r}),ga(Gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Gi(r,n),a=Ac(e.stateNode,r,a),So(e,a),od!==4&&(od=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==la&&(e=Error(i(422),{cause:r}),ga(Gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Gi(o,n),fd===null?fd=[o]:fd.push(o),od!==4&&(od=2),t===null)return!0;r=Gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ac(n.stateNode,r,e),So(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=jc(a),Mc(a,e,n,r),So(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Pc=Error(i(461)),Fc=!1;function Ic(e,t,n,r){t.child=e===null?ho(t,null,n,r):mo(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ea(t),r=es(e,t,n,o,a,i),s=is(),e!==null&&!Fc?(as(e,t,i),dl(e,t,i)):(R&&s&&ra(t),t.flags|=1,Ic(e,t,r,i),t.child)}function Rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,zc(e,t,a,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!fl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Kr:n,n(o,r)&&e.ref===t.ref)return dl(e,t,i)}return t.flags|=1,e=Li(a,r),e.ref=t.ref,e.return=t,t.child=e}function zc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Kr(a,r)&&e.ref===t.ref){if(Fc=!1,t.pendingProps=r=a,fl(e,i))e.flags&131072&&(Fc=!0);else return t.lanes=e.lanes,dl(e,t,i)}}return qc(e,t,n,r,i)}function Bc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ya(t,a===null?null:a.cachePool),a===null?jo():Ao(t,a),Lo(t);else return r=t.lanes=536870912,Hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ya(t,null),jo(),Ro()):(Ya(t,a.cachePool),Ao(t,a),Ro(),t.memoizedState=null);return Ic(e,t,i,n),t.child}function Vc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hc(e,t,n,r,i){var a=Ja();return a=a===null?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ya(t,null),jo(),Lo(t),e!==null&&wa(e,t,r,!0),t.childLanes=i,null}function Uc(e,t){return t=nl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wc(e,t,n){return mo(t,e.child,null,n),e=Uc(t,t.pendingProps),e.flags|=2,zo(t),t.memoizedState=null,e}function Gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=Uc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Vc(null,e);if(Io(t),(e=L)?(e=am(e,ca),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return Uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Io(t),a){if(t.flags&256)t.flags&=-257,t=Wc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Fc||wa(e,t,n,!1),a=(n&e.childLanes)!==0,Fc||a){if(Oo.current===null){if(r=K,r!==null&&(s=Et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ai(e,s),Pd(r,e,s),Pc;Kd()}t=Wc(e,t,n)}else e=o.treeContext,L=lm(s.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=Uc(t,r),t.flags|=134221824;return t}return e=Li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qc(e,t,n,r,i){return Ea(t),n=es(e,t,n,r,void 0,i),r=is(),e!==null&&!Fc?(as(e,t,i),dl(e,t,i)):(R&&r&&ra(t),t.flags|=1,Ic(e,t,n,i),t.child)}function Jc(e,t,n,r,i,a){return Ea(t),t.updateQueue=null,n=ns(t,r,n,i),ts(e),r=is(),e!==null&&!Fc?(as(e,t,a),dl(e,t,a)):(R&&r&&ra(t),t.flags|=1,Ic(e,t,n,a),t.child)}function Yc(e,t,n,r,i){if(Ea(t),t.stateNode===null){var a=Ni,o=n.contextType;typeof o==`object`&&o&&(a=Da(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},_o(t),o=n.contextType,a.context=typeof o==`object`&&o?Da(o):Ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(bc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&xc.enqueueReplaceState(a,a.state,null),To(t,r,a,i),wo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=wc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ni,typeof u==`object`&&u&&(o=Da(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Cc(t,a,r,o),go=!1;var f=t.memoizedState;a.state=f,To(t,r,a,i),wo(),l=t.memoizedState,s||f!==l||go?(typeof d==`function`&&(bc(t,n,d,r),l=t.memoizedState),(c=go||Sc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vo(e,t),o=t.memoizedProps,u=wc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ni,typeof l==`object`&&l&&(c=Da(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Cc(t,a,r,c),go=!1,f=t.memoizedState,a.state=f,To(t,r,a,i),wo();var p=t.memoizedState;o!==d||f!==p||go||e!==null&&e.dependencies!==null&&Ta(e.dependencies)?(typeof s==`function`&&(bc(t,n,s,r),p=t.memoizedState),(u=go||Sc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Kc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=mo(t,e.child,null,i),t.child=mo(t,null,n,i)):Ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=dl(e,t,i),e}function Xc(e,t,n,r){return ma(),t.flags|=256,Ic(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:Xa()}}function $c(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function el(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Bo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(R){if(i?Fo(t):Ro(),(e=L)?(e=am(e,ca),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ro(),i=t.mode,a=nl({mode:`hidden`,children:a},i),r=Bi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Qc(n),r.childLanes=$c(e,o,n),t.memoizedState=Zc,Vc(null,r)):(Fo(t),tl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return il(e,t,a,o,r,c,s,n)}return i?(Ro(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Li(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Bi(i,a,n,null),i.flags|=2):i=Li(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Vc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Qc(n):(a=i.cachePool,a===null?a=Xa():(s=Na._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=$c(e,o,n),t.memoizedState=Zc,Vc(e.child,r)):(Fo(t),n=e.child,e=n.sibling,n=Li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function tl(e,t){return t=nl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function nl(e,t){return e=Fi(22,e,null,t),e.lanes=0,e}function rl(e,t,n){return mo(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function il(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Fo(t),t.flags&=-257,rl(e,t,c)):t.memoizedState===null?(Ro(),o=a.fallback,s=t.mode,a=nl({mode:`visible`,children:a.children},s),o=Bi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,mo(t,e.child,null,c),a=t.child,a.memoizedState=Qc(c),a.childLanes=$c(e,r,c),t.memoizedState=Zc,Vc(null,a)):(Ro(),t.child=e.child,t.flags|=128,null);if(Fo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ga({value:a,source:null,stack:null})),rl(e,t,c)}if(Fc||wa(e,t,c,!1),r=(c&e.childLanes)!==0,Fc||r){if(Oo.current!==null)return rl(e,t,c);if(r=K,r!==null&&(a=Et(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ai(e,a),Pd(r,e,a),Pc;return om(o)||Kd(),rl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,L=lm(o.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=tl(t,a.children),t.flags|=134221824,t)}function al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function ol(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uo(n)===null&&(t=e),e=e.sibling}return t}function sl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function cl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ll(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Bo.current;if(t.flags&128)return Vo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Vo(t,o),i===`backwards`&&e!==null?(cl(e),Ic(e,t,r,n),cl(e)):Ic(e,t,r,n),r=R?Yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&al(e,n,t);else if(e.tag===19)al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,cl(t)),sl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,a,r);break;case`together`:sl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,a,r)}return t.child}function ul(e,t,n){var r=t.pendingProps;return ba(t,t.type,r.value),Ic(e,t,r.children,n),t.child}function dl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(wa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ta(e)))}function pl(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),ba(t,Na,e.memoizedState.cache),ma();break;case 27:case 5:Ie(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fo(t),t.flags|=128,null;r=wa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?el(e,t,n):(Fo(t),e=dl(e,t,n),e===null?null:e.sibling)}Fo(t);break;case 19:if(t.flags&128)return ll(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(wa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ll(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vo(t,Bo.current),r)break;return null;case 22:return t.lanes=0,Bc(e,t,n,t.pendingProps);case 24:ba(t,Na,e.memoizedState.cache)}return dl(e,t,n)}function ml(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Fc=!0;else{if(!fl(e,n)&&!(t.flags&128))return Fc=!1,pl(e,t,n);Fc=!!(e.flags&131072)}}else Fc=!1,R&&t.flags&1048576&&na(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ro(t.elementType),t.type=e,typeof e==`function`)Ii(e)?(r=wc(e,r),t.tag=1,t=Yc(null,t,e,r,n)):(t.tag=0,t=qc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ue){t.tag=11,t=Lc(null,t,e,r,n);break a}if(a===pe){t.tag=14,t=Rc(null,t,e,r,n);break a}if(a===le){t.tag=10,t.type=e,t=ul(null,t,n);break a}}throw t=Ce(e)||e,Error(i(306,t,``))}}return t;case 0:return qc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=wc(r,t.pendingProps),Yc(e,t,r,a,n);case 3:a:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,vo(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ba(t,Na,r),r!==o.cache&&Ca(t,[Na],n,!0),wo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Xc(e,t,r,n);break a}if(r!==a){a=Gi(Error(i(424)),t),ga(a),t=Xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=lm(e.firstChild),oa=t,R=!0,sa=null,ca=!0,n=ho(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ma(),r===a){t=dl(e,t,n);break a}Ic(e,t,r,n)}t=t.child}return t;case 26:return Kc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(t.stateNode=fp(t.type,t.pendingProps,Me.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&R&&(r=t.stateNode=hm(t.type,t.pendingProps,Me.current),oa=t,ca=!0,a=L,Sp(t.type)?(um=a,L=lm(r.firstChild)):L=a),Ic(e,t,t.pendingProps.children,n),Kc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=rm(r,t.type,t.pendingProps,ca),r===null?a=!1:(t.stateNode=r,oa=t,L=lm(r.firstChild),ca=!1,a=!0)),a||ua(t)),Ie(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=es(e,t,rs,null,null,n),sh._currentValue=a),Kc(e,t),Ic(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=im(n,t.pendingProps,ca),n===null?e=!1:(t.stateNode=n,oa=t,L=null,e=!0)),e||ua(t)),null;case 13:return el(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mo(t,null,r,n):Ic(e,t,r,n),t.child;case 11:return Lc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Kc(e,t),Ic(e,t,r,n),t.child;case 8:return Ic(e,t,t.pendingProps.children,n),t.child;case 12:return Ic(e,t,t.pendingProps.children,n),t.child;case 10:return ul(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ea(t),a=Da(a),r=r(a),t.flags|=1,Ic(e,t,r,n),t.child;case 14:return Rc(e,t,t.type,t.pendingProps,n);case 15:return zc(e,t,t.type,t.pendingProps,n);case 19:return ll(e,t,n);case 31:return Gc(e,t,n);case 22:return Bc(e,t,n,t.pendingProps);case 24:return Ea(t),r=Da(Na),e===null?(a=Ja(),a===null&&(a=K,o=Pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},_o(t),ba(t,Na,a)):((e.lanes&n)!==0&&(vo(e,t),To(t,null,null,n),wo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ba(t,Na,r),r!==a.cache&&Ca(t,[Na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ba(t,Na,r))),Ic(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:R&&ra(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Kc(e,t),Ic(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function hl(e){e.flags|=4}function gl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw io=eo,Qa}}else e.flags&=-16777217}function _l(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw io=eo,Qa}}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:bt(),e.lanes|=t,dd|=t)}function yl(e,t){if(!R)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bl(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Na),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?hl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ha())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(hl(t),o===null?(H(t),gl(t,a,null,r,n)):(H(t),_l(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(hl(t),H(t),_l(t,o)):(e=e.memoizedProps,e!==r&&hl(t),H(t),gl(t,a,e,r,n)),null;case 27:if(Le(t),n=Me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),t.subtreeFlags&=-33554433,null}e=Ae.current,pa(t)?da(t,e):(e=hm(a,r,n),t.stateNode=e,hl(t))}return H(t),t.subtreeFlags&=-33554433,null;case 5:if(Le(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),t.subtreeFlags&=-33554433,null}if(o=Ae.current,pa(t))da(t,o);else{var s=lp(Me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Mt]=t,o[Nt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&hl(t)}}return H(t),t.subtreeFlags&=-33554433,gl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Me.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=oa,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ua(t,!0)}else e=lp(e).createTextNode(r),e[Mt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=pa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Mt]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zo(t),t):(zo(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Mt]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(zo(t),t):(zo(t),null)}return zo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),H(t),null);case 4:return Fe(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,H(t),null;case 10:return xa(t.type),H(t),null;case 19:if(Ho(t),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)yl(r,!1);else{if(od!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Uo(e),o!==null){for(t.flags|=128,yl(r,!1),e=o.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ri(n,e),n=n.sibling;return Vo(t,Bo.current&1|2),R&&ta(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Xe()>_d&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),yl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!R)return H(t),null}else 2*Xe()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,o=Bo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||R?Vo(t,o):(n=o,O(No,t),O(Bo,n),Po===null&&(Po=t)),R&&ta(t,r.treeForkCount),e}return H(t),null;case 22:case 23:return zo(t),Mo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ke(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Na),H(t),null;case 25:return null;case 30:return t.flags|=33554432,H(t),null}throw Error(i(156,t.tag))}function xl(e,t){switch(ia(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xa(Na),Fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Le(t),null;case 31:if(t.memoizedState!==null){if(zo(t),t.alternate===null)throw Error(i(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ho(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Fe(),null;case 10:return xa(t.type),null;case 22:case 23:return zo(t),Mo(),e!==null&&ke(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xa(Na),null;case 25:return null;default:return null}}function Sl(e,t){switch(ia(t),t.tag){case 3:xa(Na),Fe();break;case 26:case 27:case 5:Le(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&zo(t);break;case 13:zo(t);break;case 19:Ho(t);break;case 10:xa(t.type);break;case 22:case 23:zo(t),Mo(),e!==null&&ke(qa);break;case 24:xa(Na)}}function Cl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function wl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Tl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Do(t,n)}catch(t){Z(e,e.return,t)}}}function El(e,t,n){n.props=wc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Dl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=bi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Ol(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function kl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Al(e){for(var t=e.return;t!==null&&(Nl(t)&&em(e.stateNode,t.stateNode),!Ml(t));)t=t.return}function jl(e){for(var t=e.return;t!==null&&(Nl(t)&&tm(e.stateNode,t.stateNode),!Ml(t));)t=t.return}function Ml(e){return e.tag===5||e.tag===3||e.tag===27}function Nl(e){return e&&e.tag===7&&e.stateNode!==null}function Pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Fl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Nt]=t}catch(t){Z(e,e.return,t)}}function Il(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Ll(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=On)),kl(e,r),k=!0;else if(i!==4&&(i===27&&(kl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),kl(e,r),k=!0;else if(i!==4&&(i===27&&(kl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Mt]=e,t[Nt]=n}catch(t){Z(e,e.return,t)}}var Vl=!1,Hl=null;function Ul(e){(e.tag===30||e.subtreeFlags&33554432)&&(Vl=!0)}var Wl=null;function Gl(){var e=Wl;return Wl=null,e}var Kl=0;function ql(e,t,n,r,i){return Kl=0,Jl(e.child,t,n,r,i)}function Jl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Vl=!0,Tp(o,Kl===0?t:t+`_`+Kl,n),Kl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Jl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Yl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Yl(e.child,t)),e=e.sibling}function Xl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Xl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Si(t.default,t.share),t!==`none`&&(ql(e,n,t,null,!1)||Yl(e.child,!1))}e=e.sibling}}function Zl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=bi(r,n),a=Si(r.default,n.paired?r.share:r.enter);a===`none`?Xl(e):ql(e,i,a,null,!1)?(Xl(e),n.paired||t||Nd(e,r.onEnter)):Yl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e,t),e=e.sibling;else Xl(e)}function Ql(e){if(Hl!==null&&Hl.size!==0){var t=Hl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Si(n.default,n.share);if(a!==`none`&&(ql(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Yl(e.child,!1)),t.delete(r),t.size===0)break}}}Ql(e)}e=e.sibling}}}function $l(e){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode),r=Hl===null?void 0:Hl.get(n),i=Si(t.default,r===void 0?t.exit:t.share);i!==`none`&&(ql(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Hl.delete(n),Nd(e,t.onShare)):Yl(e.child,!1)),Hl!==null&&Ql(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$l(e),e=e.sibling;else Hl!==null&&Ql(e)}function eu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode);t=Si(t.default,t.update),e.flags&=-5,t!==`none`&&ql(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&eu(e);e=e.sibling}}function tu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Yl(e.child,!1))}tu(e)}e=e.sibling}}function nu(e){if(e.tag===30)e.stateNode.paired=null,Yl(e.child,!1),tu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else tu(e)}function ru(e){for(e=e.child;e!==null;)e.tag===30?Yl(e.child,!1):e.subtreeFlags&33554432&&ru(e),e=e.sibling}function iu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Kl<a.length){var l=a[Kl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Kl===0?n:n+`_`+Kl,i),s&&e.flags&4||(Wl===null&&(Wl=[]),Wl.push(c,Kl===0?r:r+`_`+Kl,t.memoizedProps)),Kl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:iu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function au(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=bi(n,r),a=Si(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Kl=0,i=iu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&au(e,t);e=e.sibling}}var ou=!1,U=!1,su=!1,cu=!1,lu=typeof WeakSet==`function`?WeakSet:Set,uu=null,du=!1,fu=!1,pu=!1,mu=!1;function hu(e,t,n){if(e=e.containerInfo,sp=gh,e=Zr(e),Qr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,uu=t,t=n?9270:1024;uu!==null;){if(e=uu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&$l(r[a]);if(e.alternate===null&&e.flags&2)n&&Ul(e),gu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&$l(r),gu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Ul(e),gu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,uu=r):(n&&eu(e),gu(n))}}Hl=null}function gu(e){for(;uu!==null;){var t=uu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=wc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=bi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Si(a.default,a.update),a!==`none`&&ql(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,uu=r;break}uu=t.return}}function _u(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Iu(e,n),r&4&&Cl(5,n);break;case 1:if(Iu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=wc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Tl(n),r&512&&Dl(n,n.return);break;case 3:if(Iu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Do(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Bl(n);case 26:case 5:Iu(e,n),t===null&&r&4&&Pl(n),r&512&&Dl(n,n.return);break;case 12:Iu(e,n);break;case 31:Iu(e,n),r&4&&Tu(e,n);break;case 13:Iu(e,n),r&4&&Eu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||ou,!r){var a=t!==null&&t.memoizedState!==null||U;t=ou,i=U,ou=r,(U=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Ru(e,n,r)):Iu(e,n),ou=t,U=i}break;case 30:Iu(e,n),r&512&&Dl(n,n.return);break;case 7:r&512&&Dl(n,n.return);default:Iu(e,n)}}function vu(e,t){for(e=e.child;e!==null;)yu(e,t),e=e.sibling}function yu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}bu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,k=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&vu(e,t);break;default:vu(e,t)}}function bu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:yu(n,r);break a;case 22:n.memoizedState===null&&bu(n,r);break a;default:bu(n,r)}}e=e.sibling}}function xu(e){var t=e.alternate;t!==null&&(e.alternate=null,xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,Su=!1;function Cu(e,t,n){for(n=n.child;n!==null;)wu(e,t,n),n=n.sibling}function wu(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount==`function`)try{ot.onCommitFiberUnmount(at,n)}catch{}switch(n.tag){case 26:U||Ol(n,t),Cu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!U&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Ol(n,t),jl(n);var r=W,i=Su;Sp(n.type)&&(W=n.stateNode,Su=!1),Cu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),W=r,Su=i;break;case 5:U||Ol(n,t),jl(n);case 6:if(n.tag===6&&jl(n),r=W,i=Su,W=null,Cu(e,t,n),W=r,Su=i,W!==null){if(Su)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode),k=!0}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode),k=!0}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(Su?(e=W,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(W,n.stateNode));break;case 4:r=W,i=Su,W=n.stateNode.containerInfo,Su=!0,Cu(e,t,n),W=r,Su=i;break;case 0:case 11:case 14:case 15:wl(2,n,t),U||wl(4,n,t),Cu(e,t,n);break;case 1:U||(Ol(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&El(n,t,r)),Cu(e,t,n);break;case 21:Cu(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,Cu(e,t,n),U=r;break;case 30:Ol(n,t),Cu(e,t,n);break;case 7:U||Ol(n,t),Cu(e,t,n);break;default:Cu(e,t,n)}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Du(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lu),t;default:throw Error(i(435,e.tag))}}function Ou(e,t){var n=Du(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function ku(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){W=l.stateNode,Su=!1;break a}break;case 5:W=l.stateNode,Su=!1;break a;case 3:case 4:W=l.stateNode.containerInfo,Su=!0;break a}l=l.return}if(W===null)throw Error(i(160));wu(s,c,o),W=null,Su=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ju(t,e,n),t=t.sibling}var Au=null;function ju(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}ku(t,e,n),Mu(e),a&4&&(wl(3,e,e.return),Cl(3,e),wl(5,e,e.return));break;case 1:ku(t,e,n),Mu(e),a&512&&(U||r===null||Ol(r,r.return)),a&64&&ou&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Au,ku(t,e,n),Mu(e),a&512&&(U||r===null||Ol(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(ou)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[zt]||r[Mt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Mt]=e,Kt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Mt]=e,Kt(r),t=r}e.stateNode=t}}else ou||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Fl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||U||t.parentNode.removeChild(t)):a.count--,n===null?ou||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:ku(t,e,n),Mu(e),a&512&&(U||r===null||Ol(r,r.return)),r!==null&&a&4&&Fl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=su,su=!1,ku(t,e,n),su=o,Mu(e),a&512&&(U||r===null||Ol(r,r.return)),e.flags&32){t=e.stateNode;try{bn(t,``),k=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Fl(e,t,r===null?t:r.memoizedProps)),a&1024&&(cu=!0);break;case 6:if(ku(t,e,n),Mu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,k=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(k=!1,Wm=null,o=Au,Au=bm(t.containerInfo),ku(t,e,n),Au=o,Mu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}cu&&(cu=!1,Nu(e)),k=!1;break;case 4:a=su,su=ou,r=nn(),o=Au,Au=bm(e.stateNode.containerInfo),ku(t,e,n),Mu(e),Au=o,k&&fu&&(pu=!0),k=r,su=a;break;case 12:ku(t,e,n),Mu(e);break;case 31:ku(t,e,n),Mu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ou(e,t)));break;case 13:ku(t,e,n),Mu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=Xe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ou(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=ou,l=U,u=su;ou=c||o,su=u||o,U=l||s,ku(t,e,n),U=l,su=u,ou=c,Mu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||ou||U||(t=s||U,n=ou,r=U,ou=o||ou,U=t,Lu(e,2),ou=n,U=r),!o&&su||vu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Ou(e,n))));break;case 19:ku(t,e,n),Mu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ou(e,t)));break;case 30:a&512&&(U||r===null||Ol(r,r.return)),a=nn(),o=fu,s=(n&335544064)===n,c=e.memoizedProps,fu=s&&Si(c.default,c.update)!==`none`,ku(t,e,n),Mu(e),s&&r!==null&&k&&(e.flags|=4),fu=o,k=a;break;case 21:break;case 7:a&512&&(U||r===null||Ol(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:ku(t,e,n),Mu(e)}}function Mu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Il(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Nl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Ml(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;zl(e,Ll(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(bn(l,``),n.flags&=-33),zl(e,Ll(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Rl(e,Ll(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Pu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Fu(t,e),t=t.sibling;else au(t,!1)}function Fu(e,t){var n=e.alternate;if(n===null)Zl(e,!1);else switch(e.tag){case 3:if(mu=du=!1,Gl(),Pu(t,e),!du&&!pu){if(e=Wl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),mu=!0}Wl=null;break;case 5:Pu(t,e);break;case 4:r=du,du=!1,Pu(t,e),du&&(pu=!0),du=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Pu(t,e):Zl(e,!1));break;case 30:r=du,i=Gl(),du=!1,Pu(t,e),du&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=bi(a,o),o=bi(n.memoizedProps,o);var s=Si(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Kl=0,t=iu(e,n,t,o,s,a,!0),Kl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Wl=i):i!==null&&(i.push.apply(i,Wl),Wl=i),du=e.flags&32?!0:r;break;default:Pu(t,e)}}function Iu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_u(e,t.alternate,t),t=t.sibling}function Lu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:wl(4,n,n.return),Lu(n,r);break;case 1:Ol(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&El(n,n.return,i),Lu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Ol(n,n.return),n.tag!==5&&n.tag!==27||jl(n),Lu(n,r);break;case 6:jl(n);break;case 26:Ol(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||U||i.parentNode.removeChild(i),Lu(n,r);break;case 22:n.memoizedState===null&&Lu(n,r);break;case 30:Ol(n,n.return),Lu(n,r);break;case 7:Ol(n,n.return);default:Lu(n,r)}e=e.sibling}}function Ru(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Ru(i,a,n),Cl(4,a);break;case 1:if(Ru(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Eo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Tl(a),Dl(a,a.return);break;case 27:n&2&&Bl(a);case 5:a.tag!==5&&a.tag!==27||Al(a),Ru(i,a,n),s&&r===null&&o&4&&Pl(a),Dl(a,a.return);break;case 6:Al(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||ou||Km(bm(c.ownerDocument),a.type,c),Ru(i,a,n),s&&r===null&&o&4&&Pl(a),Dl(a,a.return);break;case 12:Ru(i,a,n);break;case 31:Ru(i,a,n),s&&o&4&&Tu(i,a);break;case 13:Ru(i,a,n),s&&o&4&&Eu(i,a);break;case 22:a.memoizedState===null&&Ru(i,a,n),Dl(a,a.return);break;case 30:Ru(i,a,n),Dl(a,a.return);break;case 7:Dl(a,a.return);default:Ru(i,a,n)}t=t.sibling}}function zu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fa(n))}function Bu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e))}function Vu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Hu(e,t,n,r),t=t.sibling;else i&&ru(t)}function Hu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&nu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Vu(e,t,n,r),a&2048&&Cl(9,t);break;case 1:Vu(e,t,n,r);break;case 3:Vu(e,t,n,r),i&&mu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Fa(a)));break;case 12:if(a&2048){Vu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Vu(e,t,n,r);break;case 31:Vu(e,t,n,r);break;case 13:Vu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&nu(t),o._visibility&2?Vu(e,t,n,r):(o._visibility|=2,Uu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&nu(s),o._visibility&2?Vu(e,t,n,r):Wu(e,t)),a&2048&&zu(s,t);break;case 24:Vu(e,t,n,r),a&2048&&Bu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Yl(a.child,!0),Yl(t.child,!0))),Vu(e,t,n,r);break;default:Vu(e,t,n,r)}}function Uu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Uu(a,o,s,c,i),Cl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Uu(a,o,s,c,i)):u._visibility&2?Uu(a,o,s,c,i):Wu(a,o),i&&l&2048&&zu(o.alternate,o);break;case 24:Uu(a,o,s,c,i),i&&l&2048&&Bu(o.alternate,o);break;default:Uu(a,o,s,c,i)}t=t.sibling}}function Wu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Wu(n,r),i&2048&&zu(r.alternate,r);break;case 24:Wu(n,r),i&2048&&Bu(r.alternate,r);break;default:Wu(n,r)}t=t.sibling}}var Gu=8192;function Ku(e,t,n){if(e.subtreeFlags&Gu)for(e=e.child;e!==null;)qu(e,t,n),e=e.sibling}function qu(e,t,n){switch(e.tag){case 26:Ku(e,t,n),e.flags&Gu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Au,e.memoizedState,e.memoizedProps));break;case 5:Ku(e,t,n),e.flags&Gu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Au;Au=bm(e.stateNode.containerInfo),Ku(e,t,n),Au=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Gu,Gu=16777216,Ku(e,t,n),Gu=r):Ku(e,t,n));break;case 30:if((e.flags&Gu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Hl===null&&(Hl=new Map),Hl.set(r,i)}Ku(e,t,n);break;default:Ku(e,t,n)}}function Ju(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];uu=r,Qu(r,e)}Ju(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xu(e),e=e.sibling}function Xu(e){switch(e.tag){case 0:case 11:case 15:Yu(e),e.flags&2048&&wl(9,e,e.return);break;case 3:Yu(e);break;case 12:Yu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zu(e)):Yu(e);break;default:Yu(e)}}function Zu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];uu=r,Qu(r,e)}Ju(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wl(8,t,t.return),Zu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zu(t));break;default:Zu(t)}e=e.sibling}}function Qu(e,t){for(;uu!==null;){var n=uu;switch(n.tag){case 0:case 11:case 15:wl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,uu=r;else a:for(n=e;uu!==null;){r=uu;var i=r.sibling,a=r.return;if(xu(r),r===n){uu=null;break a}if(i!==null){i.return=a,uu=i;break a}uu=a}}}var $u={getCacheForType:function(e){var t=Da(Na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Da(Na).controller.signal}},ed=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,td=null,nd=!1,rd=!1,id=!1,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return G&2&&J!==0?J&-J:E.T===null?kt():Pf()}function Md(){if(ud===0){if(!(J&536870912)||R){var e=pt;pt<<=1,!(pt&3932160)&&(pt=262144),ud=e}else ud=536870912}return e=No.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(bi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,J,ud,!1)),St(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(cd|=n),od===4&&Rd(e,J,ud,!1)),Ef(e))}function Fd(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||_t(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){rd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(id&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!nd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-Xe(),10<a)){if(Rd(r,t,ud,!nd),gt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,nd,o,`Throttled`,-0,0),a);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,nd,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:On},Hl=null,qu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-Xe():(a&4194048)===a?gd-Xe():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!F(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=vt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ct(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&wt(e,n,t)}function zd(){return G&6?!0:(Df(0,!1),!1)}function Bd(){if(q!==null){if(Y===0)var e=q.return;else e=q,ya=va=null,os(e),so=null,co=0,e=q;for(;e!==null;)Sl(e.alternate,e),e=e.return;q=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),K=e,q=n=Li(e.current,null),J=t,Y=0,td=null,nd=!1,rd=_t(e,t),id=!1,dd=ud=ld=cd=sd=od=0,pd=fd=null,md=!1,ad=vt(e,t),Di(),n}function Hd(e,t){z=null,E.H=gc,t===Za||t===$a?(t=ao(),Y=3):t===Qa?(t=ao(),Y=4):Y=t===Pc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,td=t,q===null&&(od=1,Oc(e,Gi(t,e.current)))}function Ud(){var e=No.current;return e===null?!0:(J&4194048)===J?Po===null:(J&62914560)===J||J&536870912?e===Po:!1}function Wd(){var e=E.H;return E.H=gc,e===null?gc:e}function Gd(){var e=E.A;return E.A=$u,e}function Kd(){od=4,nd||(J&4194048)!==J&&No.current!==null||(rd=!0),!(sd&134217727)&&!(cd&134217727)||K===null||Rd(K,J,ud,!1)}function qd(e,t,n){var r=G;G|=2;var i=Wd(),a=Gd();(K!==e||J!==t)&&(vd=null,Vd(e,t)),t=!1;var o=od;a:do try{if(Y!==0&&q!==null){var s=q,c=td;switch(Y){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:No.current===null&&(t=!0);var l=Y;if(Y=0,td=null,$d(e,s,c,l),n&&rd){o=0;break a}break;default:l=Y,Y=0,td=null,$d(e,s,c,l)}}Jd(),o=od;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ya=va=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,Di()),o}function Jd(){for(;q!==null;)Zd(q)}function Yd(e,t){var n=G;G|=2;var r=Wd(),a=Gd();K!==e||J!==t?(vd=null,_d=Xe()+500,Vd(e,t)):rd=_t(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=td;b:switch(Y){case 1:Y=0,td=null,$d(e,t,o,1);break;case 2:case 9:if(to(o)){Y=0,td=null,Qd(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),Ef(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:to(o)?(Y=0,td=null,Qd(t)):(Y=0,td=null,$d(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Ym(s):c.stateNode.complete){Y=0,td=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,ef(u))}break b}}Y=0,td=null,$d(e,t,o,5);break;case 6:Y=0,td=null,$d(e,t,o,6);break;case 8:Bd(),od=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ya=va=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,Di(),od):0}function Xd(){for(;q!==null&&!Je();)Zd(q)}function Zd(e){var t=ml(e.alternate,e,ad);e.memoizedProps=e.pendingProps,t===null?ef(e):q=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Jc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:os(t);var r=t;r===oa&&(R?(fa(r),r.tag===5&&r.stateNode!=null&&(L=r.stateNode)):(fa(r),R=!0));default:Sl(n,t),t=q=Ri(t,ad),t=ml(n,t,ad)}e.memoizedProps=e.pendingProps,t===null?ef(e):q=t}function $d(e,t,n,r){ya=va=null,os(t),so=null,co=0;var i=t.return;try{if(Nc(e,i,t,n,J)){od=1,Oc(e,Gi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;od=1,Oc(e,Gi(n,e.current)),q=null;return}t.flags&32768?(R||r===1?e=!0:rd||J&536870912?e=!1:(nd=e=!0,(r===2||r===9||r===3||r===6)&&(r=No.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,nd);return}e=t.return;var n=bl(t.alternate,t,ad);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);od===0&&(od=5)}function tf(e,t){do{var n=xl(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);od=6,q=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===K&&(q=K=null,J=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ei,Ct(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ra(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(et,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Vl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,a=G,G|=4;try{hu(e,t,n)}finally{G=a,D.p=i,E.T=r}}X=1,Vl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Fu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=E.T,E.T=null;var i=D.p;D.p=2;var a=G;G|=4;try{fu=pu=!1,ju(t,e,n),n=cp;var o=Zr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Xr(s.ownerDocument.documentElement,s)){if(c!==null&&Qr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Yr(s,h),v=Yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{G=a,D.p=i,E.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{_u(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Ye();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),Ot(r),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot==`function`)try{ot.onCommitFiberRoot(at,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=E.T,a=D.p,D.p=2,E.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{E.T=n,D.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Ot(Sd),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=wd,wd=null;var o=bd,s=Sd;if(X=0,xd=bd=null,Sd=0,G&6)throw Error(i(331));var c=G;if(G|=4,Xu(o.current),Hu(o,o.current,s,n),G=c,Df(0,!1),ot&&typeof ot.onPostCommitFiberRoot==`function`)try{ot.onPostCommitFiberRoot(at,o)}catch{}return!0}finally{D.p=a,E.T=r,uf(e,t)}}function pf(e,t,n){t=Gi(n,t),t=Ac(e.stateNode,t,2),e=bo(e,t,2),e!==null&&(St(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=Gi(n,e),n=jc(2),r=bo(t,n,2),r!==null&&(Mc(n,r,t,e),St(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ed;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(id=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(od===4||od===3&&(J&62914560)===J&&300>Xe()-hd?G&2?ld|=n:Vd(e,0):ld|=n,dd===J&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=bt()),e=Ai(e,t),e!==null&&(St(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ke(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ct(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=J,a=gt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||_t(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Xe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ct(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=yt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=gt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||_t(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Ot(n)){case 2:case 8:n=$e;break;case 32:n=et;break;case 268435456:n=nt;break;default:n=et}return r=jf.bind(null,e),n=Ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=J;return r=gt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){G&6?Ke(Qe,Of):kf()})}function Pf(){if(Tf===0){var e=Va;e===0&&(e=ft,ft<<=1,!(ft&261888)&&(ft=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Dn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Nt]||null).action),o=r.submitter;o&&(t=(t=o[Nt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Yn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);nc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),nc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<_i.length;Lf++){var Rf=_i[Lf];vi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}vi(ui,`onAnimationEnd`),vi(di,`onAnimationIteration`),vi(fi,`onAnimationStart`),vi(`dblclick`,`onDoubleClick`),vi(`focusin`,`onFocus`),vi(`focusout`,`onBlur`),vi(pi,`onTransitionRun`),vi(mi,`onTransitionStart`),vi(I,`onTransitionCancel`),vi(hi,`onTransitionEnd`),Zt(`onMouseEnter`,[`mouseout`,`mouseover`]),Zt(`onMouseLeave`,[`mouseout`,`mouseover`]),Zt(`onPointerEnter`,[`pointerout`,`pointerover`]),Zt(`onPointerLeave`,[`pointerout`,`pointerover`]),Xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Ft];n===void 0&&(n=t[Ft]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Jt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Fn(function(){var r=a,i=An(n),s=[];a:{var c=gi.get(e);if(c!==void 0){var l=Yn,u=e;switch(e){case`keypress`:if(Wn(n)===0)break a;case`keydown`:case`keyup`:l=pr;break;case`focusin`:u=`focus`,l=ir;break;case`focusout`:u=`blur`,l=ir;break;case`beforeblur`:case`afterblur`:l=ir;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=nr;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=rr;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=gr;break;case ui:case di:case fi:l=ar;break;case hi:l=_r;break;case`scroll`:case`scrollend`:l=Zn;break;case`wheel`:l=vr;break;case`copy`:case`cut`:case`paste`:l=or;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=mr;break;case`submit`:l=hr;break;case`toggle`:case`beforetoggle`:l=yr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=In(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==kn&&(u=n.relatedTarget||n.fromElement)&&(Ht(u)||u[Pt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ht(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=nr,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=mr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Wt(c),h=l==null?u:Wt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Ht(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?re(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Fr;else if(M(c)){if(Ir)_=P;else{_=Ur;var v=Hr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&wn(r.elementType)&&(_=Fr):_=Wr;if(_&&=_(e,r)){jr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Wt(r):window,e){case`focusin`:(M(v)||v.contentEditable===`true`)&&(ei=v,ti=r,ni=null);break;case`focusout`:ni=ti=ei=null;break;case`mousedown`:ri=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ri=!1,ii(s,n,i);break;case`selectionchange`:if($r)break;case`keydown`:case`keyup`:ii(s,n,i)}var y;if(xr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else kr?Dr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(wr&&n.locale!==`ko`&&(kr||b!==`onCompositionStart`?b===`onCompositionEnd`&&kr&&(y=Un()):(Bn=i,Vn=`value`in Bn?Bn.value:Bn.textContent,kr=!0)),v=Jf(r,b),0<v.length&&(b=new sr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Or(n),y!==null&&(b.data=y)))),(y=Cr?A(e,n):j(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new sr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=In(e,n),i!=null&&r.unshift(qf(e,i,a)),i=In(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=In(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=In(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||bn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&bn(e,``+r);else return;break;case`className`:an(e,`class`,r);break;case`tabIndex`:an(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:an(e,n,r);break;case`style`:Cn(e,r,o);return;case`data`:if(t!==`object`){an(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Dn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Dn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=On);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Dn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),rn(e,`popover`,r);break;case`xlinkActuate`:on(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:on(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:on(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:on(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:on(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:on(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:rn(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Tn.get(n)||n,rn(e,n,r);else return}k=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:Cn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)bn(e,r);else if(typeof r==`number`||typeof r==`bigint`)bn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=On);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Yt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Nt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}k=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):rn(e,n,r)}return}k=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}hn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&_n(e,!!r,n,!0):_n(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}yn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(wn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(k=!0),o=m;break;case`name`:m!==f&&(k=!0),a=m;break;case`checked`:m!==f&&(k=!0),u=m;break;case`defaultChecked`:m!==f&&(k=!0),d=m;break;case`value`:m!==f&&(k=!0),s=m;break;case`defaultValue`:m!==f&&(k=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}mn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(k=!0),p=o;break;case`defaultValue`:o!==l&&(k=!0),c=o;break;case`multiple`:o!==l&&(k=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?_n(e,!!n,n?[]:``,!1):_n(e,!!n,t,!0)):_n(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(k=!0),p=a;break;case`defaultValue`:a!==o&&(k=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}vn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(k=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(wn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Mt]=r,n[Nt]=t,np(n,e,t),Kt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[zt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:C({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Ht(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=re(n,a,S),t===null?t=!1:(h(t,!0,te,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=re(r,a,S),t===null?t=!1:(h(t,!0,ne,a,r),a=x,ee=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Vt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[zt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===On&&(e.onclick=null),Vt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=D.d;D.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ut(e);t!==null&&t.tag===5&&t.type===`form`?ic(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=pn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Kt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+pn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+pn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+pn(n.imageSizes)+`"]`)):i+=`[href="`+pn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=C({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Bt]=!0,o.onload=o.onerror=function(){qt(o)}),Kt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+pn(r)+`"][href="`+pn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=C({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Kt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Gt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=C({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Kt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Gt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Kt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Gt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Kt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Me.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Gt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Gt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Gt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+pn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Bt]){r.loading=1;return}}else t=e.createElement(`link`),t[Bt]=!0,t.onload=t.onerror=qt.bind(null,t),np(t,`link`,n),Kt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+pn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+pn(n.href)+`"]`);if(r)return t.instance=r,Kt(r),r;var a=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Kt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Kt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Kt(a),a):(r=n,(a=vm.get(o))&&(r=C({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Kt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[zt]||a[Mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Kt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:le,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Fi(3,null,null,t),e.current=a,a.stateNode=e,t=Pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},_o(a),e}function uh(e){return e?(e=Ni,e):Ni}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=yo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=bo(e,r,t),n!==null&&(Pd(n,e,t),xo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ai(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Dt(t);var n=Ai(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,yh(e,t,n,r)}finally{D.p=a,E.T=i}}function vh(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,yh(e,t,n,r)}finally{D.p=a,E.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ut(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ht(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ct(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(G&6)&&(_d=Xe()+500,Df(0,!1))}}break;case 31:case 13:s=Ai(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=An(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ze()){case Qe:return 2;case $e:return 8;case et:case tt:return 32;case nt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ut(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,At(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,At(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kn=r,n.target.dispatchEvent(r),kn=null}else return t=Ut(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ut(n);a!==null&&(e.splice(t,3),t-=3,nc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Nt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Nt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Pt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{at=Jh.inject(qh),ot=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Tc,s=Ec,c=Dc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Pt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e,t){return new URL(e,t).href},x={},ee=function(e){return e.pathname.endsWith(`.css`)},te=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=b(t,n);let r=s(t);if(r.href in x)return;x[r.href]=!0;let i=ee(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:y,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ne=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function re(e,t){return t+e.replace(/\\/g,`/`)}var C=`popstate`;function ie(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ae(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ue(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ce(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:le(t))}function r(e,t){T(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return de(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function oe(){return Math.random().toString(36).substring(2,10)}function se(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ce(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ue(t):t,state:n,key:t&&t.key||r||oe(),mask:i}}function le({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ue(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function de(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ie(e)?e:ce(h.location,e,t);n&&n(r,e),l=u()+1;let d=se(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ie(e)?e:ce(h.location,e,t);n&&n(r,e),l=u();let i=se(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return fe(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function fe(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:le(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function pe(e,t,n=`/`){return me(e,t,n,!1)}function me(e,t,n,r,i){let a=Ae((typeof t==`string`?ue(t):t).pathname||`/`,n);if(a==null)return null;let o=i??he(e),s=null,c=O(a);for(let e=0;s==null&&e<o.length;++e)s=Ee(o[e],c,r);return s}function he(e){let t=ge(e);return ve(t),t}function ge(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Re([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ge(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:D(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=ke(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of _e(e.path))a(e,t,!0,n)}),t}function _e(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=_e(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ve(e){e.sort((e,t)=>e.score===t.score?Te(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ye=/^:[\w-]+$/,be=3,xe=2,Se=1,Ce=10,we=-2,E=e=>e===`*`;function D(e,t){let n=e.split(`/`),r=n.length;return n.some(E)&&(r+=we),t&&(r+=xe),n.filter(e=>!E(e)).reduce((e,t)=>e+(ye.test(t)?be:t===``?Se:Ce),r)}function Te(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ee(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Oe(u,l,s.matcher,s.compiledParams):De(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=De({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Re([a,d.pathname]),pathnameBase:Be(Re([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Re([a,d.pathnameBase]))}return o}function De(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ke(e.path,e.caseSensitive,e.end);return Oe(e,t,n,r)}function Oe(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=ze(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=ze(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ke(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function O(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ae(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function je(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ue(e):e,a;return n?(n=Le(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Me(n.substring(1),`/`):Me(n,t)):a=t,{pathname:a,search:Ve(r),hash:He(i)}}function Me(e,t){let n=ze(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ne(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fe(e){let t=Pe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ie(e,t,n,r=!1){let i;typeof e==`string`?i=ue(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Ne(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Ne(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Ne(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=je(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Le=e=>e.replace(/[\\/]{2,}/g,`/`),Re=e=>Le(e.join(`/`));function ze(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Be=e=>ze(e).replace(/^\/*/,`/`),Ve=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,He=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ue=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function We(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ge(e){return Re(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ke=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function qe(e,t){let n=e;if(typeof n!=`string`||!ne.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ke)try{let e=new URL(window.location.href),r=S.test(n)?new URL(re(n,e.protocol)):new URL(n),a=Ae(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Je=new URL(`http://localhost`);function Ye(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),Je)}catch{return Je}}function Xe(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Ze(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Qe(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Xe(i,n),s=!Xe(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Ze(e,i)||!Xe(i,a)))throw Error(`External navigation is not allowed`)}var $e=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set($e);var et=[`GET`,...$e];new Set(et);var tt=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function nt(e){try{return tt.includes(new URL(e).protocol)}catch{return!1}}var rt=_.createContext(null);rt.displayName=`DataRouter`;var it=_.createContext(null);it.displayName=`DataRouterState`;var at=_.createContext(!1);function ot(){return _.useContext(at)}var st=_.createContext({isTransitioning:!1});st.displayName=`ViewTransition`;var ct=_.createContext(new Map);ct.displayName=`Fetchers`;var lt=_.createContext(null);lt.displayName=`Await`;var ut=_.createContext(null);ut.displayName=`Navigation`;var dt=_.createContext(null);dt.displayName=`Location`;var ft=_.createContext({outlet:null,matches:[],isDataRoute:!1});ft.displayName=`Route`;var pt=_.createContext(null);pt.displayName=`RouteError`;var mt=`REACT_ROUTER_ERROR`,ht=`REDIRECT`,gt=`ROUTE_ERROR_RESPONSE`;function _t(e){if(e.startsWith(`${mt}:${ht}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function vt(e){if(e.startsWith(`${mt}:${gt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ue(t.status,t.statusText,t.data)}catch{}}function yt(e,{relative:t}={}){w(bt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(ut),{hash:i,pathname:a,search:o}=Dt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Re([n,a])),r.createHref({pathname:s,search:o,hash:i})}function bt(){return _.useContext(dt)!=null}function xt(){return w(bt(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(dt).location}var St=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Ct(e){_.useContext(ut).static||_.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=_.useContext(ft);return e?Wt():Tt()}function Tt(){w(bt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(rt),{basename:t,navigator:n}=_.useContext(ut),{matches:r}=_.useContext(ft),{pathname:i}=xt(),a=JSON.stringify(Fe(r)),o=_.useRef(!1);return Ct(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(T(o.current,St),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ie(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Re([t,c.pathname])),Qe(typeof r==`string`?r:le(r),n.createHref(c),Ye(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function Et(){let{matches:e}=_.useContext(ft);return e[e.length-1]?.params??{}}function Dt(e,{relative:t}={}){let{matches:n}=_.useContext(ft),{pathname:r}=xt(),i=JSON.stringify(Fe(n));return _.useMemo(()=>Ie(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ot(e,t){return kt(e,t)}function kt(e,t,n){w(bt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(ut),{matches:i}=_.useContext(ft),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Kt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=xt(),d;if(t){let e=typeof t==`string`?ue(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):pe(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=It(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Re([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Re([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(dt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function At(){let e=Ut(),t=We(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var jt=_.createElement(At,null),Mt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=vt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(ft.Provider,{value:this.props.routeContext},_.createElement(pt.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(Pt,{error:e},t):t}};Mt.contextType=at;var Nt=new WeakMap;function Pt({children:e,error:t}){let{basename:n,navigator:r}=_.useContext(ut);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=_t(t.digest);if(e){let i=Nt.get(t);if(i)throw i;let a=qe(e.location,n),o=a.absoluteURL||a.to;if(Qe(e.location,o,Ye(r),`allow-explicit`),nt(o))throw Error(`Invalid redirect location`);if(Ke&&!Nt.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Nt.set(t,n),n}}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function Ft({routeContext:e,match:t,children:n}){let r=_.useContext(rt);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(ft.Provider,{value:e},n)}function It(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ge(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||jt,o&&(s<0&&c===0?(Kt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Ft,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(Mt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Lt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rt(e){let t=_.useContext(rt);return w(t,Lt(e)),t}function zt(e){let t=_.useContext(it);return w(t,Lt(e)),t}function Bt(e){let t=_.useContext(ft);return w(t,Lt(e)),t}function Vt(e){let t=Bt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ht(){return Vt(`useRouteId`)}function Ut(){let e=_.useContext(pt),t=zt(`useRouteError`),n=Vt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Wt(){let{router:e}=Rt(`useNavigate`),t=Vt(`useNavigate`),n=_.useRef(!1);return Ct(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{T(n.current,St),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Gt={};function Kt(e,t,n){!t&&!Gt[e]&&(Gt[e]=!0,T(!1,n))}_.memo(qt);function qt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return kt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Jt({to:e,replace:t,state:n,relative:r}){w(bt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=_.useContext(ut);T(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=_.useContext(ft),{pathname:s}=xt(),c=wt(),l=Ie(e,Fe(o),s,r===`path`);Qe(typeof e==`string`?e:le(e),a.createHref(l),Ye(a),`reject`);let u=JSON.stringify(l);return _.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function Yt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Xt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!bt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ue(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Ae(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(ut.Provider,{value:c},_.createElement(dt.Provider,{children:t,value:h}))}function Zt({children:e,location:t}){return Ot(Qt(e),t)}_.Component;function Qt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Qt(e.props.children,i));return}w(e.type===Yt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Qt(e.props.children,i)),n.push(a)}),n}var $t=`get`,en=`application/x-www-form-urlencoded`;function tn(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function k(e){return tn(e)&&e.tagName.toLowerCase()===`button`}function nn(e){return tn(e)&&e.tagName.toLowerCase()===`form`}function rn(e){return tn(e)&&e.tagName.toLowerCase()===`input`}function an(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function on(e,t){return e.button===0&&(!t||t===`_self`)&&!an(e)}var sn=null;function cn(){if(sn===null)try{new FormData(document.createElement(`form`),0),sn=!1}catch{sn=!0}return sn}var ln=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function un(e){return e!=null&&!ln.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${en}"`),null):e}function dn(e,t){let n,r,i,a,o;if(nn(e)){let o=e.getAttribute(`action`);r=o?Ae(o,t):null,n=e.getAttribute(`method`)||$t,i=un(e.getAttribute(`enctype`))||en,a=new FormData(e)}else if(k(e)||rn(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ae(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||$t,i=un(e.getAttribute(`formenctype`))||un(o.getAttribute(`enctype`))||en,a=new FormData(o,e),!cn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(tn(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=$t,r=null,i=en,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function fn(e,t){if(e===!1||e==null)throw Error(t)}function pn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Ae(i.pathname,t)===`/`?`${ze(t)}/_root.${r}`:`${ze(i.pathname)}.${r}`,i}async function mn(e,t){if(e.id in t)return t[e.id];try{let n=await te(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hn(e){return e!=null&&typeof e.page==`string`}function gn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function _n(e,t,n){return Sn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await mn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(gn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function vn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function yn(e,t,{includeHydrateFallback:n}={}){return bn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function bn(e){return[...new Set(e)]}function xn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!hn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(xn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Cn(){let e=_.useContext(rt);return fn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function wn(){let e=_.useContext(it);return fn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Tn=_.createContext(void 0);Tn.displayName=`FrameworkContext`;function En(){let e=_.useContext(Tn);return fn(e,`You must render this element inside a <HydratedRouter> element`),e}function Dn(e,t){let n=_.useContext(Tn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:On(s,p),onBlur:On(c,m),onMouseEnter:On(l,p),onMouseLeave:On(u,m),onTouchStart:On(d,p)}]:[a,f,{}]:[!1,f,{}]}function On(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function kn({page:e,...t}){let n=ot(),{nonce:r}=En(),{router:i}=Cn(),a=_.useMemo(()=>pe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(jn,{page:e,matches:a,...t}):_.createElement(Mn,{page:e,matches:a,...t})):null}function An(e){let{manifest:t,routeModules:n}=En(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return _n(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function jn({page:e,matches:t,...n}){let r=xt(),{future:i}=En(),{basename:a}=Cn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=pn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Mn({page:e,matches:t,...n}){let r=xt(),{future:i,manifest:a,routeModules:o}=En(),{basename:s}=Cn(),{loaderData:c,matches:l}=wn(),u=_.useMemo(()=>vn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>vn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=pn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>yn(d,a),[d,a]),m=An(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Nn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var Pn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Pn&&(window.__reactRouterVersion=`7.18.4`)}catch{}function Fn({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=ae({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Xt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var In=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(ut),y=typeof l==`string`&&ne.test(l),b=qe(l,h);l=b.to;let x=yt(l,{relative:r}),ee=xt(),te=null;if(o){let e=Ie(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Re([h,e.pathname])),te=g.createHref(e)}let[S,re,C]=Dn(n,p),ie=Vn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function ae(t){e&&e(t),t.defaultPrevented||ie(t)}let w=!(b.isExternal||i),T=_.createElement(`a`,{...p,...C,href:(w?te:void 0)||b.absoluteURL||x,onClick:w?ae:e,ref:Nn(m,re),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return S&&!y?_.createElement(_.Fragment,null,T,_.createElement(kn,{page:x})):T});In.displayName=`Link`;var Ln=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Dt(a,{relative:c.relative}),d=xt(),f=_.useContext(it),{navigator:p,basename:m}=_.useContext(ut),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ae(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),te={isActive:x,isPending:ee,isTransitioning:h},ne=x?e:void 0,S;S=typeof n==`function`?n(te):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let re=typeof i==`function`?i(te):i;return _.createElement(In,{...c,"aria-current":ne,className:S,ref:l,style:re,to:a,viewTransition:o},typeof s==`function`?s(te):s)});Ln.displayName=`NavLink`;var Rn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=$t,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(ut),g=Wn(),v=Gn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&ne.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Rn.displayName=`Form`;function zn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bn(e){let t=_.useContext(rt);return w(t,zn(e)),t}function Vn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=wt(),d=xt(),f=Dt(e,{relative:o});return _.useCallback(p=>{if(on(p,t)){p.preventDefault();let t=n===void 0?le(d)===le(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Hn=0,Un=()=>`__${String(++Hn)}__`;function Wn(){let{router:e}=Bn(`useSubmit`),{basename:t}=_.useContext(ut),n=Ht(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=dn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Un();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Gn(e,{relative:t}={}){let{basename:n}=_.useContext(ut),r=_.useContext(ft);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Dt(e||`.`,{relative:t})},o=xt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Re([n,a.pathname])),le(a)}function Kn(e,{relative:t}={}){let n=_.useContext(st);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bn(`useViewTransitionState`),i=Dt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ae(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ae(n.nextLocation.pathname,r)||n.nextLocation.pathname;return De(i.pathname,o)!=null||De(i.pathname,a)!=null}async function qn(){let e=await te(()=>import(`./bundle-CkSGyUr4.js`),[],import.meta.url);return e.default??e}var Jn=new class{map=new Map;register(e){if(this.map.has(e.sport.id))throw Error(`adapter already registered: ${e.sport.id}`);let t=Object.values(e.spiWeights).reduce((e,t)=>e+t,0);if(Math.abs(t-1)>1e-9)throw Error(`SPI weights of ${e.sport.id} must sum to 1 (got ${t})`);this.map.set(e.sport.id,e)}get(e){let t=this.map.get(e);if(!t)throw Error(`no adapter for sport: ${e}`);return t}all(){return[...this.map.values()]}enabled(){return this.all().filter(e=>e.sport.enabled)}};function Yn(e,t){let n=e.length;if(n===0)return NaN;if(n===1)return e[0];let r=(n-1)*t,i=Math.floor(r),a=Math.ceil(r);return i===a?e[i]:e[i]+(e[a]-e[i])*(r-i)}function Xn(e){if(!e.length)return null;let t=[...e].sort((e,t)=>e-t),n=t.reduce((e,t)=>e+t,0)/t.length;return{n:t.length,mean:nr(n),median:nr(Yn(t,.5)),p25:nr(Yn(t,.25)),p75:nr(Yn(t,.75)),min:t[0],max:t[t.length-1]}}function Zn(e,t){let n=t.length,r=Xn(t);if(n<12)return{percentile:null,n,reasonKey:`bench.tooFewAthletes`,stats:r};let i=0,a=0;for(let n of t)n<e-1e-9?i++:Math.abs(n-e)<=1e-9&&a++;return{percentile:tr((i+.5*a)/n*100),n,stats:r}}function Qn(e,t){let n=[...e].sort((e,t)=>t-e);if(!n.length)return null;switch(t.kind){case`topN`:return n.length>=t.n?n[t.n-1]:null;case`podium`:return n.length>=3?nr((n[0]+n[1]+n[2])/3):null;default:{let e=Xn(n);return e?e.median:null}}}function $n(e){let t=Xn(e);return!t||t.n<4?null:{lo:t.p25,mid:t.median,hi:t.p75,n:t.n}}function er(e){let t=[];for(let n of e.values())n.length&&t.push(Math.max(...n));return t}var tr=e=>Math.round(e*10)/10,nr=e=>Math.round(e*100)/100,rr=[{id:`artistic.kuer`,sportId:`artistic`,nameKey:`dis.artistic.kuer`},{id:`artistic.solotanz`,sportId:`artistic`,nameKey:`dis.artistic.solotanz`},{id:`artistic.rolltanz`,sportId:`artistic`,nameKey:`dis.artistic.rolltanz`},{id:`artistic.paarlauf`,sportId:`artistic`,nameKey:`dis.artistic.paarlauf`}],ir=[`senioren`,`junioren`,`youth`,`cadets`,`espoir`,`minis`,`tots`],ar={"artistic.kuer":!0,"artistic.solotanz":!0,"artistic.rolltanz":!1,"artistic.paarlauf":!1};function or(e,t,n){return n?`${e}.${t}.${n}`:`${e}.${t}`}function sr(){let e=[],t=0;for(let n of rr)for(let r of ir)if(ar[n.id]){for(let i of[`damen`,`herren`])e.push({id:or(n.id,r,i),disciplineId:n.id,nameKey:`klasse.${r}`,ageGroupId:r,genderId:i,order:t++});n.id===`artistic.solotanz`&&(r===`espoir`||r===`minis`)&&e.push({id:or(n.id,r),disciplineId:n.id,nameKey:`klasse.${r}`,ageGroupId:r,order:t++})}else e.push({id:or(n.id,r),disciplineId:n.id,nameKey:`klasse.${r}`,ageGroupId:r,order:t++});return e}var cr=sr(),lr=(e,t)=>e.metrics.find(e=>e.key===t)?.value??null,ur={sport:{id:`artistic`,nameKey:`sport.artistic`,enabled:!0},disciplines:rr,categories:cr,metrics:[{key:`total`,nameKey:`metric.total`,unitKey:`metric.unit.points`,higherIsBetter:!0,decimals:2,isPrimary:!0},{key:`tes`,nameKey:`metric.tes`,unitKey:`metric.unit.points`,higherIsBetter:!0,decimals:2},{key:`pcs`,nameKey:`metric.pcs`,unitKey:`metric.unit.points`,higherIsBetter:!0,decimals:2},{key:`deductions`,nameKey:`metric.deductions`,unitKey:`metric.unit.points`,higherIsBetter:!1,decimals:2}],rankingValue:e=>e.status===`ok`?lr(e,`total`):null,primaryValue:e=>e.status===`ok`?lr(e,`total`):null,gapToTarget(e,t,n){if(t==null)return null;let r=nr(n-t),i={metricKey:`total`,current:t,target:nr(n),gap:r};if(e){let a=lr(e,`tes`),o=lr(e,`pcs`);if(a!=null&&o!=null&&t>0&&r>0){let e=a/t,r=o/t,s=nr(n*e-a),c=nr(n*r-o);i.breakdown=[{metricKey:`tes`,gap:s},{metricKey:`pcs`,gap:c}],i.largestOpportunityKey=c>=s?`pcs`:`tes`}}return i},spiWeights:{internationalCompetitiveness:.3,performanceLevel:.2,consistency:.15,recentForm:.1,developmentRate:.15,competitionStrength:.1},deriveProfileMetrics(e){let t=e.map(e=>lr(e,`total`)).filter(e=>e!=null);if(!t.length)return[];let n=t.reduce((e,t)=>e+t,0)/t.length,r=Math.sqrt(t.reduce((e,t)=>e+(t-n)**2,0)/t.length);return[{key:`pb`,value:nr(Math.max(...t))},{key:`consistency`,value:nr(n>0?Math.max(0,100*(1-r/n/.25)):0)}]},compareMetricKeys:[`total`,`tes`,`pcs`,`deductions`],normalizeRaw(e){let t=Number(e.total),n=Number(e.tes),r=Number(e.pcs);if(!Number.isFinite(t))return null;let i=[{key:`total`,value:t}];Number.isFinite(n)&&i.push({key:`tes`,value:n}),Number.isFinite(r)&&i.push({key:`pcs`,value:r});let a=Number(e.deductions);return Number.isFinite(a)&&i.push({key:`deductions`,value:a}),Number.isFinite(n)&&Number.isFinite(r)&&Math.abs(n+r-t)>.05?null:i}},dr={ARTISTIC_ENABLED:!0,SPEED_ENABLED:!1,SKATEBOARDING_ENABLED:!1,HOCKEY_ENABLED:!1,SKATE_AI_ENABLED:!1,TALENT_RADAR_ENABLED:!0,FEDERATION_INTELLIGENCE_ENABLED:!0,SHARE_CARDS_ENABLED:!0,ALERTS_ENABLED:!1},fr=new Map;function pr(e){return fr.get(e)??dr[e]}var mr=(e,t)=>e.metrics.find(e=>e.key===t)?.value??null;function hr(e){let t=e/1e3;if(t<60)return t.toFixed(3)+` s`;let n=Math.floor(t/60);return`${n}:${(t-n*60).toFixed(3).padStart(6,`0`)}`}var gr={sport:{id:`speed`,nameKey:`sport.speed`,enabled:pr(`SPEED_ENABLED`)},disciplines:[{id:`speed.track`,sportId:`speed`,nameKey:`dis.speed.track`}],categories:[{id:`speed.track.sw`,disciplineId:`speed.track`,nameKey:`cat.senior.w`,ageGroupId:`senior`,genderId:`w`,order:1},{id:`speed.track.sm`,disciplineId:`speed.track`,nameKey:`cat.senior.m`,ageGroupId:`senior`,genderId:`m`,order:2},{id:`speed.track.jw`,disciplineId:`speed.track`,nameKey:`cat.junior.w`,ageGroupId:`junior`,genderId:`w`,order:3},{id:`speed.track.jm`,disciplineId:`speed.track`,nameKey:`cat.junior.m`,ageGroupId:`junior`,genderId:`m`,order:4}],metrics:[{key:`timeMs`,nameKey:`metric.timeMs`,unitKey:`metric.unit.seconds`,higherIsBetter:!1,decimals:3,isPrimary:!0,format:e=>hr(e)},{key:`points`,nameKey:`metric.points`,unitKey:`metric.unit.points`,higherIsBetter:!0,decimals:0}],rankingValue:e=>{let t=mr(e,`timeMs`);return e.status===`ok`&&t!=null?-t:null},primaryValue:e=>{let t=mr(e,`timeMs`);return e.status===`ok`&&t!=null?-t:null},gapToTarget(e,t,n){if(t==null)return null;let r=nr((n-t)/1);return{metricKey:`timeMs`,current:t,target:n,gap:r,breakdown:[{metricKey:`timeMs`,gap:r}],largestOpportunityKey:`timeMs`}},spiWeights:{internationalCompetitiveness:.35,performanceLevel:.25,consistency:.1,recentForm:.1,developmentRate:.15,competitionStrength:.05},deriveProfileMetrics(e){let t=e.map(e=>mr(e,`timeMs`)).filter(e=>e!=null);return t.length?[{key:`bestLap`,value:Math.min(...t)}]:[]},compareMetricKeys:[`timeMs`,`points`],normalizeRaw(e){let t=Number(e.timeMs);if(!Number.isFinite(t)||t<=0)return null;let n=[{key:`timeMs`,value:t}],r=Number(e.points);return Number.isFinite(r)&&n.push({key:`points`,value:r}),n}},_r=`cs-1.0.0`,vr={world:100,continental:85,international:70,national:45,regional:25};function yr(e){let t=Math.min(100,e.rankedAthletes/25*100),n=Math.max(1,e.rankedAthletes),r=Math.min(100,(e.top10Entrants*2+e.top25Entrants)/n*100),i=vr[e.level],a=tr(.3*t+.4*r+.3*i),o=[{key:`fieldDepth`,value:tr(t)},{key:`topDensity`,value:tr(r)},{key:`levelBase`,value:i},{key:`rankedAthletes`,value:e.rankedAthletes},{key:`top10Entrants`,value:e.top10Entrants},{key:`top25Entrants`,value:e.top25Entrants}];return{id:`cs_${e.competitionId}`,competitionId:e.competitionId,index:a,factors:o,computedAt:e.today,modelVersion:_r}}var br=`spi-1.0.0`,xr=(e,t=0,n=100)=>Math.min(n,Math.max(t,e));function Sr(e,t){let n=e.seasonValues.map(e=>e.value),r=n.length?Math.max(...n):null,i=n.length?n.reduce((e,t)=>e+t,0)/n.length:null,a=[],o=(e,n,r,i)=>{a.push({dimension:e,weight:t[e]??0,score:n==null?50:tr(xr(n)),explainKey:n==null?`spi.explain.neutralNoData`:i,inputs:r})};o(`internationalCompetitiveness`,(r==null?null:Zn(r,e.worldGroupValues))?.percentile??null,[{key:`best`,value:r??0},{key:`groupN`,value:e.worldGroupValues.length}],`spi.explain.intl`);let s=e.worldGroupValues.length?Math.max(...e.worldGroupValues):null;o(`performanceLevel`,r!=null&&s?r/s*100:null,[{key:`best`,value:r??0},{key:`worldBest`,value:s??0}],`spi.explain.level`);let c=.25,l=null,u=0;n.length>=3&&i&&i>0&&(u=Math.sqrt(n.reduce((e,t)=>e+(t-i)**2,0)/n.length)/i,l=(1-Math.min(u,c)/c)*100),o(`consistency`,l,[{key:`n`,value:n.length},{key:`cv`,value:nr(u)}],`spi.explain.consistency`);let d=null,f=0;if(i&&n.length>=3){let t=new Date(e.today).getTime()-7776e6,n=e.seasonValues.filter(e=>new Date(e.date).getTime()>=t).map(e=>e.value);n.length&&(f=n.reduce((e,t)=>e+t,0)/n.length,d=50+xr((f-i)/i*250,-50,50))}o(`recentForm`,d,[{key:`recentMean`,value:nr(f)},{key:`seasonMean`,value:nr(i??0)}],`spi.explain.recent`);let p=null;r!=null&&e.prevSeasonBest&&e.prevSeasonBest>0&&(p=50+xr((r-e.prevSeasonBest)/e.prevSeasonBest*250,-50,50)),o(`developmentRate`,p,[{key:`best`,value:r??0},{key:`prevBest`,value:e.prevSeasonBest??0}],`spi.explain.development`);let m=e.competitionStrengths.length?e.competitionStrengths.reduce((e,t)=>e+t,0)/e.competitionStrengths.length:null;o(`competitionStrength`,m,[{key:`meanStrength`,value:tr(m??0)},{key:`competitions`,value:e.competitionStrengths.length}],`spi.explain.strength`);let h=tr(a.reduce((e,t)=>e+t.weight*t.score,0)),g=n.length>=6&&e.worldGroupValues.length>=12?`high`:n.length>=3&&e.worldGroupValues.length>=8?`medium`:`low`;return{id:`spi_${e.athleteId}_${e.today}`,athleteId:e.athleteId,sportId:e.sportId,categoryId:e.categoryId,value:h,confidence:g,computedAt:e.today,modelVersion:br,contributions:a}}Jn.all().length||(Jn.register(ur),Jn.register(gr));var Cr=class{b;cache=new Map;today;constructor(e,t){this.b=e,this.today=t??e.generatedAt.slice(0,10)}memo(e,t){return this.cache.has(e)||this.cache.set(e,t()),this.cache.get(e)}athlete(e){return this.memo(`athMap`,()=>new Map(this.b.athletes.map(e=>[e.id,e]))).get(e)}competition(e){return this.memo(`cmpMap`,()=>new Map(this.b.competitions.map(e=>[e.id,e]))).get(e)}event(e){return this.memo(`evMap`,()=>new Map(this.b.events.map(e=>[e.id,e]))).get(e)}country(e){return this.b.countries.find(t=>t.code===e)}club(e){return e?this.b.clubs.find(t=>t.id===e):void 0}seasonOf(e){return this.b.seasons.find(t=>e>=t.start&&e<=t.end)?.id??this.b.seasons[this.b.seasons.length-1].id}currentSeason(){return this.seasonOf(this.today)}categoryOf(e){for(let t of Jn.all()){let n=t.categories.find(t=>t.id===e);if(n)return{cat:n,adapter:t}}return null}sportOfCategory(e){return this.categoryOf(e)?.adapter.sport.id??null}perfsIn(e,t){return this.memo(`perfs_${e}_${t}`,()=>{let n=[];for(let r of this.b.performances){let i=this.event(r.eventId);if(!i||i.categoryId!==e)continue;let a=this.competition(i.competitionId);a&&a.seasonId===t&&n.push({p:r,ev:i,cmp:a})}return n})}athletePerfs(e){return this.memo(`athPerfs_${e}`,()=>this.b.performances.filter(t=>t.athleteId===e).map(e=>({p:e,ev:this.event(e.eventId),cmp:this.competition(this.event(e.eventId).competitionId)})).sort((e,t)=>e.cmp.startDate.localeCompare(t.cmp.startDate)))}comparable(e){let t=e.filter(e=>e.cmp.level!==`national`&&e.cmp.level!==`regional`);return t.length?t:e}valuesByAthlete(e,t){return this.memo(`vba_${e}_${t}`,()=>{let n=this.categoryOf(e),r=new Map;if(!n)return r;for(let{p:i,cmp:a}of this.comparable(this.perfsIn(e,t))){let e=n.adapter.primaryValue(i);e!=null&&(r.has(i.athleteId)||r.set(i.athleteId,[]),r.get(i.athleteId).push(e))}return r})}ranking(e,t,n){return this.memo(`rank_${e}_${t}_${n?.kind??`w`}_${n?.key??``}`,()=>{let r=this.valuesByAthlete(e,t),i=er(r),a=[];for(let[e,t]of r){let r=this.athlete(e);r&&(n?.kind!==`country`||r.countryCode===n.key)&&(n?.kind!==`continent`||this.country(r.countryCode)?.continent===n.key)&&a.push({athlete:r,value:Math.max(...t)})}return a.sort((e,t)=>t.value-e.value),a.map((e,t)=>({...e,position:t+1,of:a.length,percentile:Zn(e.value,i).percentile}))})}positionOf(e,t,n,r){return this.ranking(t,n,r).find(t=>t.athlete.id===e)??null}percentile(e,t,n){let r=this.valuesByAthlete(t,n),i=r.get(e);return i?.length?Zn(Math.max(...i),er(r)):null}benchmarkTarget(e,t,n){let r;return r=n.kind===`country`?this.ranking(e,t,{kind:`country`,key:n.countryCode}).map(e=>e.value):n.kind===`continent`?this.ranking(e,t,{kind:`continent`,key:n.continent}).map(e=>e.value):n.kind===`athletes`?this.ranking(e,t).filter(e=>n.athleteIds.includes(e.athlete.id)).map(e=>e.value):er(this.valuesByAthlete(e,t)),Qn(r,n)}corridorFor(e,t,n){return $n(n.kind===`topN`?er(this.valuesByAthlete(e,t)).sort((e,t)=>t-e).slice(0,n.n):er(this.valuesByAthlete(e,t)))}competitionStrength(e){return this.memo(`cs_${e}`,()=>{let t=this.competition(e),n=this.b.events.filter(t=>t.competitionId===e),r=0,i=0,a=0;for(let e of n){let n=t.seasonId,o=this.ranking(e.categoryId,n),s=new Set(this.b.performances.filter(t=>t.eventId===e.id).map(e=>e.athleteId));r+=s.size;for(let e of o)s.has(e.athlete.id)&&(e.position<=10?i++:e.position<=25&&a++)}return yr({competitionId:e,level:t.level,rankedAthletes:r,top10Entrants:i,top25Entrants:a,today:this.today})})}spi(e,t){return this.memo(`spi_${e}_${t}`,()=>{let n=this.categoryOf(t);if(!n)return null;let r=this.currentSeason(),i=this.b.seasons[this.b.seasons.findIndex(e=>e.id===r)-1]?.id??null,a=this.athletePerfs(e).filter(e=>e.ev.categoryId===t),o=this.comparable(a.filter(e=>e.cmp.seasonId===r)),s=o.map(e=>({date:e.cmp.startDate,value:n.adapter.primaryValue(e.p)})).filter(e=>e.value!=null);if(!s.length)return null;let c=i?this.comparable(a.filter(e=>e.cmp.seasonId===i)).map(e=>n.adapter.primaryValue(e.p)).filter(e=>e!=null):[];return Sr({athleteId:e,sportId:n.adapter.sport.id,categoryId:t,seasonValues:s,prevSeasonBest:c.length?Math.max(...c):null,worldGroupValues:er(this.valuesByAthlete(t,r)),competitionStrengths:[...new Set(o.map(e=>e.cmp.id))].map(e=>this.competitionStrength(e).index),today:this.today},n.adapter.spiWeights)})}talentRadar(e,t){return this.memo(`talent_${e??`all`}_${t??`all`}`,()=>{let n=this.currentSeason(),r=[];for(let i of Jn.enabled())if(!(e&&i.sport.id!==e))for(let e of i.categories){let i=this.ranking(e.id,n);for(let n of i){if(t&&n.athlete.countryCode!==t)continue;let i=this.spi(n.athlete.id,e.id),a=i?.contributions.find(e=>e.dimension===`developmentRate`)?.score??50,o=n.percentile??0,s=[{key:`worldPosition`,value:n.position},{key:`percentile`,value:o},{key:`developmentScore`,value:a},{key:`spi`,value:i?.value??0}],c=null;n.position<=3||i&&i.value>=85?c=`ELITE`:n.position<=25||o>=90?c=`INTERNATIONAL`:a>=65&&n.position<=50?c=`BREAKTHROUGH`:a>=60?c=`RISING`:e.ageGroupId===`junior`&&o>=75&&(c=`HIGH_POTENTIAL`),c&&r.push({athlete:n.athlete,categoryId:e.id,tier:c,evidence:s})}}let i=[`ELITE`,`INTERNATIONAL`,`BREAKTHROUGH`,`RISING`,`HIGH_POTENTIAL`];return r.sort((e,t)=>i.indexOf(e.tier)-i.indexOf(t.tier))})}federationStats(e,t){return this.memo(`fed_${e}_${t??`all`}`,()=>{let n=this.currentSeason(),r=0,i=0,a=0,o=0,s=0,c=[],l=[],u=[];for(let s of Jn.enabled())if(!(t&&s.sport.id!==t))for(let t of s.categories)for(let s of this.ranking(t.id,n)){if(s.athlete.countryCode!==e)continue;r++,s.position<=10&&i++,s.position<=25&&a++,s.position<=50&&o++,s.percentile!=null&&c.push(s.percentile);let n=this.spi(s.athlete.id,t.id);if(n){l.push(n.value);let e=n.contributions.find(e=>e.dimension===`developmentRate`);e&&u.push(e.score)}}for(let{p:t,ev:r}of this.b.performances.map(e=>({p:e,ev:this.event(e.eventId)}))){let i=this.competition(r.competitionId);i.seasonId===n&&i.level!==`national`&&i.level!==`regional`&&this.athlete(t.athleteId)?.countryCode===e&&t.placement!=null&&t.placement<=3&&s++}let d=e=>e.length?tr(e.reduce((e,t)=>e+t,0)/e.length):null,f=this.talentRadar(t,e).filter(e=>e.tier===`BREAKTHROUGH`||e.tier===`RISING`||e.tier===`HIGH_POTENTIAL`).length;return{athletes:r,top10:i,top25:a,top50:o,podiums:s,avgPercentile:d(c),avgSpi:d(l),development:d(u),emerging:f}})}countryMatrix(e){return this.b.countries.map(t=>({country:t,s:this.federationStats(t.code,e)})).filter(e=>e.s.athletes>0).sort((e,t)=>(t.s.avgSpi??0)-(e.s.avgSpi??0))}devSeries(e,t){let n=this.categoryOf(t);if(!n)return[];let r=[];for(let i of this.athletePerfs(e)){if(i.ev.categoryId!==t)continue;let e=n.adapter.primaryValue(i.p);e!=null&&r.push({date:i.cmp.startDate,value:e,competition:i.cmp.name,level:i.cmp.level})}return r}pb(e,t){let n=this.devSeries(e,t);return n.length?nr(Math.max(...n.map(e=>e.value))):null}seasonBest(e,t){let n=this.currentSeason(),r=this.categoryOf(t);if(!r)return null;let i=this.athletePerfs(e).filter(e=>e.ev.categoryId===t&&e.cmp.seasonId===n).map(e=>r.adapter.primaryValue(e.p)).filter(e=>e!=null);return i.length?nr(Math.max(...i)):null}trend12(e,t){let n=this.devSeries(e,t);if(n.length<2)return null;let r=new Date(new Date(this.today).getTime()-31536e6).toISOString().slice(0,10),i=n.filter(e=>e.date>=r).map(e=>e.value),a=n.filter(e=>e.date<r).map(e=>e.value);return!i.length||!a.length?null:nr(Math.max(...i)-Math.max(...a))}categoriesOfAthlete(e){return[...new Set(this.athletePerfs(e).map(e=>e.ev.categoryId))]}},wr={en:{"brand.name":`SKATE IQ`,"brand.tagline":`Performance Intelligence for World Skate Sports`,"brand.independent":`Independent analytics product. Not affiliated with or endorsed by World Skate or any federation.`,"nav.home":`Dashboard`,"nav.athletes":`Athletes`,"nav.compare":`Compare`,"nav.leaderboard":`Leaderboards`,"nav.federation":`Federation`,"nav.countries":`Countries`,"nav.talent":`Talent Radar`,"nav.competitions":`Competitions`,"nav.pricing":`Pricing`,"nav.admin":`Data Quality`,"nav.demo":`Demo mode`,"nav.landing":`Start`,"nav.method":`Methodology`,"nav.search.placeholder":`Search athletes, clubs, countries, competitions…`,"landing.h1a":`KNOW WHERE YOU STAND.`,"landing.h1b":`KNOW WHAT COMES NEXT.`,"landing.sub":`SKATE IQ turns official competition results into clear performance intelligence — for athletes, coaches and federations across roller sports.`,"landing.ctaExplore":`Explore athletes`,"landing.ctaFree":`Start free`,"landing.ctaFed":`For federations`,"landing.results":`Results`,"landing.q1":`Where do I stand?`,"landing.q2":`What do I need to reach the next level?`,"landing.feat.bench.h":`International benchmarking`,"landing.feat.bench.p":`Percentiles against world, continent, country and Top-N groups — only where statistically meaningful, always with the group size shown.`,"landing.feat.athlete.h":`Athlete intelligence`,"landing.feat.athlete.p":`SPI, personal bests, development and consistency in one profile that reads in five seconds.`,"landing.feat.fed.h":`Federation intelligence`,"landing.feat.fed.p":`Elite depth, talent pipeline and country gaps as decision support for performance directors.`,"landing.feat.talent.h":`Talent intelligence`,"landing.feat.talent.p":`Fastest improvers and athletes approaching international thresholds — every classification explainable from data.`,"landing.feat.comp.h":`Competition intelligence`,"landing.feat.comp.p":`Field strength, expected benchmarks and movement — before and after every event.`,"landing.feat.multi.h":`Built for all roller sports`,"landing.feat.multi.p":`A sport-adapter architecture: Artistic first, Speed next, the World Skate ecosystem as the target.`,"landing.demoNote":`Preview uses synthetic demo data. Real federation data is imported only under an access agreement.`,"nav.calc":`RollArt Calculator`,"calc.title":`RollArt Calculator`,"calc.addon":`Add-on`,"calc.price":`€4.99/month`,"calc.activate":`Activate add-on (demo)`,"calc.pitch":`Calculate content sheets with the official World Skate 2026 values – elements, per-judge QOE, bonuses, components and PDF export.`,"calc.f1":`All official 2026 element values (verified against the World Skate tables)`,"calc.f2":`Free skating, pairs, solo dance – short program and free per class`,"calc.f3":`Bonuses, under-rotations, deductions and components with correct factors`,"calc.f4":`Export content sheets as PDF`,"calc.included":`Included in FED PRO and FED ENTERPRISE`,"calc.verified":`Value tables verified against World Skate 2026 (July-2025 update) · downgrade rule and component caps corrected`,"gloss.title":`Methodology & terms`,"gloss.sub":`Every number in SKATE IQ is a documented formula over official results. This page explains the terms in plain language.`,"gloss.principle.t":`Core principle: "analytical standing"`,"gloss.principle.d":`SKATE IQ never produces official rankings – those always come from federations. Everything here is an analytical standing: it describes how official results relate to each other. It predicts nothing and recommends no nominations.`,"gloss.value.t":`Total · Technical score (TES) · Components score (PCS) · Deductions`,"gloss.value.d":`Straight from the official RollArt protocols: the total is the competition score. TES measures the technical elements (jumps, spins, steps), PCS the skating quality (composition, performance). TES + PCS = total always holds; deductions (e.g. falls) are already included in TES and shown separately.`,"gloss.pb.t":`Personal best vs. season best`,"gloss.pb.d":`Personal best (PB) = highest total of the whole career in the dataset. Season best (SB) = highest total of the current season. Rankings and benchmarks use the season best so old peaks do not distort the current picture.`,"gloss.position.t":`World / continental / national position`,"gloss.position.d":`All athletes of a category ordered by season best – worldwide, within the continent, or within the country. Exactly one value counts per athlete (their best), so nobody gains from many starts. Internationally achieved values take precedence over purely national ones ("comparable context").`,"gloss.percentile.t":`Global percentile`,"gloss.percentile.d":`Says what share of the comparison group you outperform: percentile 97 means better than 97% of the category worldwide. Important: with fewer than 12 athletes we deliberately show NO percentile, because it would not be statistically robust – the group size (n) is shown instead.`,"gloss.spi.t":`SPI – Skate Performance Index (0–100)`,"gloss.spi.d":`One number bundling six views: international competitiveness (world percentile, 30%), performance level (distance to the world best, 20%), consistency (15%), recent form (last 90 days, 10%), development rate (vs. previous season, 15%) and competition strength (level of competitions entered, 10%). Each dimension is broken down under "Why this SPI?" – the SPI is never a black box. A dimension lacking data is set to a neutral 50 and the data-basis rating drops.`,"gloss.confidence.t":`Data basis (low / medium / high)`,"gloss.confidence.d":`Shows how many results an evaluation rests on. "Low data basis" means few starts – read values with caution. More competitions in the dataset → higher rating.`,"gloss.consistency.t":`Consistency score (0–100)`,"gloss.consistency.d":`Measures how closely the season values sit together. 100 = every result almost equally strong; low values = big swings between starts. Computed from the spread of season values relative to their average.`,"gloss.trend.t":`12-month development`,"gloss.trend.d":`Difference between the best value of the last 12 months and the best of the 12 months before – in points. Green (+) means improved, red (−) means fallen back.`,"gloss.benchmark.t":`Benchmark, target benchmark & top-10 gap`,"gloss.benchmark.d":`A benchmark is a reference mark from the world elite: "Top 10" = the season best of the currently tenth-best athlete, "podium benchmark" = average of the best three. The top-10 gap is the difference between your own best and that mark; a ✓ means the mark is reached. "What does it take?" additionally splits the gap into technical and components share and names the "largest opportunity".`,"gloss.corridor.t":`Benchmark corridor (p25–p75)`,"gloss.corridor.d":`The blue band in the development chart: the range holding the middle half of top-10 values (25th to 75th percentile). If your curve sits inside the band, you are moving at top-10 level.`,"gloss.strength.t":`Field strength (competition strength index)`,"gloss.strength.d":`Rates how strongly a competition was cast (0–100): how many internationally ranked athletes, how many top-10/top-25 entrants? A win at field strength 90 weighs differently than one at 40 – which is why it also feeds the SPI.`,"gloss.talent.t":`Talent radar tiers`,"gloss.talent.d":`Five tiers, derived purely from data and explained per athlete: Elite (world top), International level (established in the top groups), Breakthrough (just broke into the international top), Rising (clear improvement over 12 months), High potential (close to international thresholds). No tier is a judgement about a person – it describes the current result situation.`,"gloss.fed.t":`Federation page: category status & talent pipeline`,"gloss.fed.d":`The category status shows per category how many athletes a country has and where the best one stands – strengths and gaps at a glance. The talent pipeline lists athletes close to top 10/25 and the fastest improvers; "athletes needing attention" flags performance declines.`,"gloss.minors.t":`Minor protection`,"gloss.minors.d":`SKATE IQ stores no birth dates. Age is only roughly implied by the competition class. Real athlete data appears exclusively behind the login; the public demo shows fictional athletes only.`,"gloss.demo.t":`DEMO DATA vs. real-data edition`,"gloss.demo.d":`The yellow "DEMO DATA" badge means: everything fictional, safe to show. The real-data edition instead shows its data date discreetly; it is based entirely on publicly available official result lists and is reached via the login page.`,"feat.athlete.basic":`Basic profiles & results`,"feat.athlete.history":`Full history & development curves`,"feat.athlete.benchmarks":`International benchmarks`,"feat.athlete.spi":`SPI with explanation`,"feat.athlete.whatItTakes":`"What does it take?" analysis`,"feat.athlete.compare":`Athlete comparison`,"feat.athlete.reports":`Performance reports`,"feat.athlete.cards":`Share cards`,"feat.coach.portfolio":`Coach portfolio (multiple athletes)`,"feat.coach.alerts":`Alerts & watchlist`,"feat.club.dashboard":`Club dashboard`,"feat.club.talentRadar":`Talent radar`,"feat.club.exports":`Exports (CSV/XLSX)`,"feat.federation.intelligence":`Federation intelligence`,"feat.federation.cockpit":`National team cockpit`,"feat.federation.talent":`Talent pipeline`,"feat.federation.countryCompare":`Country comparison`,"feat.federation.reports":`Federation reports`,"feat.federation.api":`Data API`,"feat.federation.whiteLabel":`White label`,"feat.admin.dataQuality":`Data-quality console`,"feat.admin.console":`Admin console`,"home.greet.morning":`Good morning`,"home.greet.day":`Good afternoon`,"home.greet.evening":`Good evening`,"home.pbsSub":`in recent weeks`,"home.spotlight":`Global Spotlight`,"home.spotlightH":`{name} – strongest development`,"home.spotlightP":`+{delta} points over 12 months – currently world position {pos} in the analytical standing.`,"home.viewAthlete":`View athlete profile`,"home.sportsOverview":`Disciplines overview`,"home.ranked":`ranked athletes`,"home.talentH":`Discover the fastest improvers`,"home.talentP":`Every tier explainable – straight from real competition data.`,"home.viewTalent":`Open Talent Radar`,"athlete.tab.overview":`Overview`,"athlete.tab.development":`Development`,"athlete.tab.benchmarks":`Benchmarks`,"athlete.tab.results":`Results`,"athlete.range.3m":`3M`,"athlete.range.6m":`6M`,"athlete.range.12m":`12M`,"athlete.range.24m":`24M`,"athlete.range.career":`Career`,"athlete.rangeEmpty":`Not enough results in the selected range.`,"landing.sport.skateboarding":`Skateboarding`,"landing.sport.inlineHockey":`Inline Hockey`,"landing.sport.rinkHockey":`Rink Hockey`,"landing.sport.freestyle":`Freestyle`,"landing.sport.derby":`Roller Derby`,"landing.sport.scootering":`Scootering`,"landing.sport.live":`live`,"landing.sport.soon":`soon`,"landing.moreLabel":`More than results`,"landing.moreH":`More than results. Real progress.`,"landing.moreP":`SKATE IQ transforms competition data into meaningful performance intelligence – so you can see where you stand, understand your potential and make better decisions.`,"landing.featH":`Powerful features for every level`,"pricing.h1a":`Simple plans.`,"pricing.h1b":`Real impact.`,"pricing.monthly":`Monthly`,"pricing.yearly":`Yearly −20%`,"pricing.yearlyNote":`billed yearly`,"pricing.popular":`Popular`,"pricing.tryPlan":`Try plan (demo)`,"pricing.demoDisclaimer":`Demo pricing page – no payment is wired up.`,"home.greeting":`Good morning, {name}`,"home.sub":`Your world of skating`,"home.followed":`Athletes followed`,"home.latest":`Latest results`,"home.movers":`Biggest improvements`,"home.pbs":`New personal bests`,"home.week":`Competitions this season`,"home.insights":`Recommended insights`,"kpi.world":`World position`,"kpi.continent":`Continent position`,"kpi.national":`National position`,"kpi.percentile":`Global percentile`,"kpi.spi":`SPI`,"kpi.pb":`Personal best`,"kpi.sb":`Season best`,"kpi.trend12":`12-month development`,"kpi.consistency":`Consistency score`,"kpi.gapTop10":`Top-10 gap`,"kpi.athletes":`Athletes`,"kpi.top10":`World Top 10`,"kpi.top25":`World Top 25`,"kpi.top50":`World Top 50`,"kpi.medals":`International podiums`,"kpi.avgSpi":`Average SPI`,"kpi.avgPercentile":`Avg. intl. percentile`,"kpi.emerging":`Emerging talents`,"kpi.development":`12-month development`,"athlete.about":`Profile`,"athlete.development":`Performance development`,"athlete.benchmarks":`International benchmarks`,"athlete.results":`Competition results`,"athlete.spi.why":`Why this SPI?`,"athlete.spi.explain":`Every dimension below is a documented formula over the shown inputs. Weights are sport-specific.`,"athlete.whatittakes":`What does it take?`,"athlete.target":`Your target`,"athlete.current":`Current best`,"athlete.benchmark":`Target benchmark`,"athlete.gap":`Gap`,"athlete.largestOpportunity":`Largest opportunity`,"athlete.breakdown":`Breakdown`,"athlete.corridor":`Benchmark corridor (p25–p75 of {group}, n={n})`,"athlete.share":`Share card`,"athlete.follow":`Follow`,"athlete.confidence.low":`low data confidence`,"athlete.confidence.medium":`medium data confidence`,"athlete.confidence.high":`high data confidence`,"athlete.privacyNote":`Minor-protection rules apply: no birthdates, category-based age display only.`,"spi.dim.internationalCompetitiveness":`International competitiveness`,"spi.dim.performanceLevel":`Performance level`,"spi.dim.consistency":`Consistency`,"spi.dim.recentForm":`Recent form`,"spi.dim.developmentRate":`Development rate`,"spi.dim.competitionStrength":`Competition strength`,"spi.explain.intl":`Percentile of the season best within the world comparison group ({groupN} athletes).`,"spi.explain.level":`Season best relative to the current world-best value.`,"spi.explain.consistency":`Spread of this season’s values (coefficient of variation {cv}).`,"spi.explain.recent":`Average of the last 90 days versus the season average.`,"spi.explain.development":`Season best versus previous season best.`,"spi.explain.strength":`Average strength index of competitions entered.`,"spi.explain.neutralNoData":`Not enough data — neutral 50 applied, reflected in the confidence level.`,"bench.group.world":`World`,"bench.group.continent":`Continent`,"bench.group.country":`Country`,"bench.group.top10":`Top 10`,"bench.group.top25":`Top 25`,"bench.group.top50":`Top 50`,"bench.group.podium":`Podium benchmark`,"bench.group.athletes":`Selected athletes`,"bench.group.countries":`Selected countries`,"bench.tooFewAthletes":`Group too small for a meaningful percentile (n={n}, minimum 12).`,"bench.officialNote":`Official rankings come from federations. SKATE IQ analytical values are computed classifications and never official rankings.`,"compare.title":`Athlete compare`,"compare.add":`Add athlete`,"compare.metric":`Metric`,"compare.h2h":`Head-to-head`,"compare.card":`Create comparison card`,"board.title":`Leaderboards`,"board.official":`OFFICIAL RANKING`,"board.analytical":`SKATE IQ ANALYTICAL`,"board.analyticalNote":`Analytical ranking by {metric} — a computed classification, not an official federation ranking.`,"board.rank":`Rank`,"board.athlete":`Athlete`,"board.value":`Value`,"fed.title":`{country} — Performance Intelligence`,"fed.categoryHealth":`Category status`,"fed.pipeline":`Talent pipeline`,"fed.attention":`Athletes requiring attention`,"fed.breakthrough":`Breakthrough athletes`,"fed.improvers":`Fastest improvers`,"fed.topPerformers":`Top international performers`,"fed.nearTop10":`Approaching Top 10`,"fed.nearTop25":`Approaching Top 25`,"fed.decline":`Performance decline`,"countries.title":`Country performance matrix`,"countries.gap":`Country gap analysis`,"countries.col.athletes":`Athletes`,"countries.col.dev":`Development`,"countries.vs":`vs.`,"countries.eliteDepth":`Elite depth`,"countries.juniorPipeline":`Junior pipeline`,"countries.seniorPerf":`Senior performance`,"countries.medalPerf":`Podium performance`,"countries.representation":`International representation`,"talent.title":`Talent intelligence`,"talent.sub":`Every classification is derived from the displayed data — no opaque talent verdicts.`,"talent.BREAKTHROUGH":`Breakthrough`,"talent.RISING":`Rising`,"talent.HIGH_POTENTIAL":`High potential`,"talent.INTERNATIONAL":`International level`,"talent.ELITE":`Elite`,"talent.why":`Why this classification?`,"comp.title":`Competitions`,"comp.strength":`Field strength`,"comp.before":`Preview`,"comp.after":`Review`,"comp.participants":`Participants`,"comp.expected":`Benchmark context`,"comp.results":`Results`,"pricing.title":`Plans`,"pricing.free":`Free`,"pricing.athletePro":`€9.99/month or €99/year`,"pricing.coachPro":`€299/year`,"pricing.clubPro":`€990/year`,"pricing.fedStarter":`€2,900/year`,"pricing.fedPro":`€5,900/year`,"pricing.fedEnterprise":`from €9,900/year`,"pricing.note":`Preview build: subscriptions are shown for product validation only — no payment is processed.`,"pricing.sell.FREE":`Public results and basic profiles.`,"pricing.sell.ATHLETE_PRO":`Understand your international position.`,"pricing.sell.COACH_PRO":`Know what your athletes need next.`,"pricing.sell.CLUB_PRO":`Benchmark your entire performance program.`,"pricing.sell.FED_STARTER":`Turn international results into performance strategy.`,"pricing.sell.FED_PRO":`Full talent and cockpit intelligence.`,"pricing.sell.FED_ENTERPRISE":`API, white label, custom KPIs, SSO.`,"pricing.upgrade":`Requires {plan}`,"pricing.currentPlan":`Choose demo plan`,"pricing.activePlan":`Active plan`,"admin.title":`Data quality`,"admin.sources":`Data sources`,"admin.checks":`Automated checks`,"admin.identity":`Identity resolution queue`,"insight.percentileUp":`International percentile improved from {from} to {to}.`,"insight.percentileDown":`International percentile decreased from {from} to {to}.`,"insight.gapTop10":`Currently {gap} {metric} below the Top-10 benchmark.`,"insight.top10Reached":`Top-10 benchmark reached.`,"insight.stable4":`Performance has been stable across the last four competitions.`,"insight.developing":`Developing faster than the previous season (development score {score}).`,"insight.countryTop25":`{country} has {n} athletes in the international Top 25 in {category}.`,"common.season":`Season`,"common.sport":`Sport`,"common.discipline":`Discipline`,"common.category":`Category`,"common.country":`Country`,"common.club":`Club`,"common.all":`All`,"common.na":`–`,"common.n":`n`,"common.date":`Date`,"common.competition":`Competition`,"common.placement":`Placement`,"common.level":`Level`,"common.loading":`Loading…`,"common.notFound":`Not found`,"common.back":`Back`,"common.computedNote":`All values are computed classifications from official results — descriptive, no predictions, no recommendations.`,"common.demoBadge":`DEMO DATA — fictional athletes`,"common.dataAsOf":`Data as of {date}`,"common.lang":`Language`,"metric.unit.points":`pts`,"metric.unit.seconds":`s`,"sport.artistic":`Artistic Skating`,"sport.speed":`Speed Skating`,"dis.artistic.kuer":`Free Skating`,"dis.artistic.solotanz":`Solo Dance`,"dis.artistic.rolltanz":`Couple Dance`,"dis.artistic.paarlauf":`Pairs`,"klasse.senioren":`Seniors`,"klasse.junioren":`Juniors`,"klasse.youth":`Youth`,"klasse.cadets":`Cadets`,"klasse.espoir":`Espoir`,"klasse.minis":`Minis`,"klasse.tots":`Tots`,"gender.damen":`Women`,"gender.herren":`Men`,"dis.speed.track":`Track`,"dis.speed.road":`Road`,"cat.senior.w":`Senior Women`,"cat.senior.m":`Senior Men`,"cat.junior.w":`Junior Women`,"cat.junior.m":`Junior Men`,"age.senior":`Senior`,"age.junior":`Junior`,"gender.w":`Women`,"gender.m":`Men`,"metric.total":`Total score`,"metric.tes":`Technical score (TES)`,"metric.pcs":`Components score (PCS)`,"metric.deductions":`Deductions`,"metric.timeMs":`Time`,"metric.speed":`Avg. speed`,"metric.points":`Points`,"metric.consistency":`Consistency`,"metric.bestLap":`Best lap`,"country.GER":`Germany`,"country.ITA":`Italy`,"country.ESP":`Spain`,"country.POR":`Portugal`,"country.FRA":`France`,"country.USA":`United States`,"country.BRA":`Brazil`,"country.ARG":`Argentina`,"country.AUS":`Australia`,"country.AIN":`Neutral Athletes`,"country.AND":`Andorra`,"country.BEL":`Belgium`,"country.BOL":`Bolivia`,"country.CAN":`Canada`,"country.CHI":`Chile`,"country.CHN":`China`,"country.CIV":`Ivory Coast`,"country.COL":`Colombia`,"country.CRO":`Croatia`,"country.CZE":`Czechia`,"country.DEN":`Denmark`,"country.ECU":`Ecuador`,"country.EGY":`Egypt`,"country.ESA":`El Salvador`,"country.EST":`Estonia`,"country.GBR":`Great Britain`,"country.HAI":`Haiti`,"country.ISR":`Israel`,"country.JPN":`Japan`,"country.KOR":`South Korea`,"country.MAR":`Morocco`,"country.MEX":`Mexico`,"country.NED":`Netherlands`,"country.NZL":`New Zealand`,"country.PAN":`Panama`,"country.PAR":`Paraguay`,"country.ROM":`Romania`,"country.ROU":`Romania`,"country.SLO":`Slovenia`,"country.SLV":`El Salvador`,"country.SMR":`San Marino`,"country.SUI":`Switzerland`,"country.THA":`Thailand`,"country.TPE":`Chinese Taipei`,"country.UKR":`Ukraine`,"country.URU":`Uruguay`,"country.VEN":`Venezuela`},de:{"brand.name":`SKATE IQ`,"brand.tagline":`Performance Intelligence für World-Skate-Sportarten`,"brand.independent":`Unabhängiges Analyseprodukt. Keine Verbindung zu und keine Billigung durch World Skate oder einen Verband.`,"nav.home":`Dashboard`,"nav.athletes":`Athleten`,"nav.compare":`Vergleich`,"nav.leaderboard":`Ranglisten`,"nav.federation":`Verband`,"nav.countries":`Länder`,"nav.talent":`Talent-Radar`,"nav.competitions":`Wettbewerbe`,"nav.pricing":`Preise`,"nav.admin":`Datenqualität`,"nav.demo":`Demo-Modus`,"nav.landing":`Start`,"nav.method":`Methodik`,"nav.search.placeholder":`Athleten, Vereine, Länder, Wettbewerbe suchen…`,"landing.h1a":`WISSE, WO DU STEHST.`,"landing.h1b":`WISSE, WAS ALS NÄCHSTES KOMMT.`,"landing.sub":`SKATE IQ macht aus offiziellen Wettkampfergebnissen klare Leistungs-Intelligenz – für Athleten, Trainer und Verbände im Rollsport.`,"landing.ctaExplore":`Athleten entdecken`,"landing.ctaFree":`Kostenlos starten`,"landing.ctaFed":`Für Verbände`,"landing.results":`Ergebnisse`,"landing.q1":`Wo stehe ich?`,"landing.q2":`Was brauche ich für das nächste Level?`,"landing.feat.bench.h":`Internationales Benchmarking`,"landing.feat.bench.p":`Perzentile gegen Welt, Kontinent, Land und Top-N-Gruppen – nur wo statistisch belastbar, immer mit Gruppengröße.`,"landing.feat.athlete.h":`Athlete Intelligence`,"landing.feat.athlete.p":`SPI, Bestleistungen, Entwicklung und Konstanz in einem Profil, das sich in fünf Sekunden erschließt.`,"landing.feat.fed.h":`Federation Intelligence`,"landing.feat.fed.p":`Spitzen-Tiefe, Talent-Pipeline und Länder-Lücken als Entscheidungsunterstützung für Sportdirektoren.`,"landing.feat.talent.h":`Talent Intelligence`,"landing.feat.talent.p":`Schnellste Aufsteiger und Athleten nahe internationaler Schwellen – jede Einstufung aus Daten erklärbar.`,"landing.feat.comp.h":`Competition Intelligence`,"landing.feat.comp.p":`Feldstärke, Benchmark-Kontext und Bewegungen – vor und nach jedem Wettbewerb.`,"landing.feat.multi.h":`Gebaut für alle Rollsport-Arten`,"landing.feat.multi.p":`Sport-Adapter-Architektur: Artistic zuerst, Speed als Nächstes, das World-Skate-Ökosystem als Ziel.`,"landing.demoNote":`Vorschau mit synthetischen Demo-Daten. Echte Verbandsdaten werden nur im Rahmen einer Zugangs-Vereinbarung importiert.`,"nav.calc":`RollArt-Rechner`,"calc.title":`RollArt-Rechner`,"calc.addon":`Add-on`,"calc.price":`4,99 €/Monat`,"calc.activate":`Add-on aktivieren (Demo)`,"calc.pitch":`Content Sheets nach den offiziellen World-Skate-Werten 2026 kalkulieren – Elemente, QOE je Kampfrichter, Boni, Komponenten und PDF-Export.`,"calc.f1":`Alle offiziellen Elementwerte 2026 (gegen die World-Skate-Tabellen verifiziert)`,"calc.f2":`Kür, Paarlauf, Solotanz – Kurzprogramm und Kür je Klasse`,"calc.f3":`Boni, Unterrotationen, Abzüge und Komponenten mit korrekten Faktoren`,"calc.f4":`Content Sheets als PDF exportieren`,"calc.included":`In FED PRO und FED ENTERPRISE enthalten`,"calc.verified":`Wertetabellen verifiziert gegen World Skate 2026 (Stand Juli-2025-Update) · Downgrade-Regel und Komponenten-Obergrenzen korrigiert`,"gloss.title":`Methodik & Begriffe`,"gloss.sub":`Jede Zahl in SKATE IQ ist eine dokumentierte Formel über offizielle Ergebnisse. Hier steht, was die Begriffe bedeuten – ohne Statistik-Vorwissen lesbar.`,"gloss.principle.t":`Grundprinzip: „rechnerische Einordnung"`,"gloss.principle.d":`SKATE IQ erstellt keine offiziellen Ranglisten – die kommen immer vom Verband. Alle Werte hier sind rechnerische Einordnungen: Sie beschreiben, wie sich offizielle Ergebnisse zueinander verhalten. Sie sagen nichts voraus und empfehlen keine Nominierungen.`,"gloss.value.t":`Gesamtwertung · Technik-Score (TES) · Komponenten-Score (PCS) · Abzüge`,"gloss.value.d":`Direkt aus den offiziellen RollArt-Protokollen: Die Gesamtwertung ist die Punktzahl des Wettbewerbs. TES misst die technischen Elemente (Sprünge, Pirouetten, Schritte), PCS die läuferische Qualität (Komposition, Performance). Es gilt immer TES + PCS = Gesamt; Abzüge (z. B. Stürze) sind im TES bereits verrechnet und werden separat ausgewiesen.`,"gloss.pb.t":`Bestleistung vs. Saison-Bestwert`,"gloss.pb.d":`Bestleistung (PB) = höchste Gesamtwertung der gesamten Karriere im Datenbestand. Saison-Bestwert (SB) = höchste Gesamtwertung der laufenden Saison. Ranglisten und Benchmarks nutzen den Saison-Bestwert, damit alte Topwerte das aktuelle Bild nicht verzerren.`,"gloss.position.t":`Welt- / Kontinent- / Nationale Position`,"gloss.position.d":`Reihung aller Athleten einer Kategorie nach ihrem Saison-Bestwert – weltweit, innerhalb des Kontinents oder innerhalb des Landes. Je Athlet zählt genau ein Wert (der beste), damit niemand durch viele Starts bevorzugt wird. International erzielte Werte haben Vorrang vor rein nationalen („vergleichbarer Kontext").`,"gloss.percentile.t":`Globales Perzentil`,"gloss.percentile.d":`Sagt in Prozent, wie viele der Vergleichsgruppe man hinter sich lässt: Perzentil 97 heißt besser als 97 % der Kategorie weltweit. Wichtig: Bei weniger als 12 Athleten in der Gruppe zeigen wir bewusst KEIN Perzentil, weil es statistisch nicht belastbar wäre – stattdessen steht dort die Gruppengröße (n).`,"gloss.spi.t":`SPI – Skate Performance Index (0–100)`,"gloss.spi.d":`Eine Zahl, die sechs Blickwinkel bündelt: Internationale Wettbewerbsfähigkeit (Welt-Perzentil, 30 %), Leistungsniveau (Abstand zum Welt-Bestwert, 20 %), Konstanz (15 %), Aktuelle Form (letzte 90 Tage, 10 %), Entwicklungsrate (Vergleich zur Vorsaison, 15 %) und Wettbewerbsstärke (Niveau der bestrittenen Wettbewerbe, 10 %). Jede Dimension ist im Profil unter „Warum dieser SPI?" einzeln aufgeschlüsselt – der SPI ist nie eine Blackbox. Fehlt eine Dimension mangels Daten, wird sie neutral mit 50 angesetzt und die Datenbasis-Einstufung sinkt.`,"gloss.confidence.t":`Datenbasis (gering / mittel / hoch)`,"gloss.confidence.d":`Zeigt, auf wie vielen Ergebnissen eine Auswertung steht. „Geringe Datenbasis" heißt: wenige Starts, Werte vorsichtig lesen. Mehr Wettkämpfe im Datenbestand → höhere Einstufung.`,"gloss.consistency.t":`Konstanz-Score (0–100)`,"gloss.consistency.d":`Misst, wie stabil die Saisonwerte beieinander liegen. 100 = jedes Ergebnis fast gleich stark; niedrige Werte = große Schwankungen zwischen den Starts. Berechnet aus der Streuung der Saisonwerte relativ zu ihrem Durchschnitt.`,"gloss.trend.t":`12-Monats-Entwicklung`,"gloss.trend.d":`Differenz zwischen dem besten Wert der letzten 12 Monate und dem besten Wert der 12 Monate davor – in Punkten. Grün (+) heißt verbessert, rot (−) heißt zurückgefallen.`,"gloss.benchmark.t":`Benchmark, Ziel-Benchmark & Top-10-Rückstand`,"gloss.benchmark.d":`Ein Benchmark ist eine Referenzmarke aus der Weltspitze: „Top 10" = der Saison-Bestwert des aktuell zehntbesten Athleten der Kategorie, „Podiums-Benchmark" = Durchschnitt der besten drei. Der Top-10-Rückstand ist die Differenz zwischen dem eigenen Bestwert und dieser Marke; ein ✓ heißt: Marke erreicht. Die Seite „Was fehlt zum Ziel?" teilt den Rückstand zusätzlich in Technik- und Komponenten-Anteil auf und nennt den „größten Hebel" – den Bereich mit dem meisten Aufholpotenzial.`,"gloss.corridor.t":`Benchmark-Korridor (p25–p75)`,"gloss.corridor.d":`Das blaue Band im Entwicklungs-Chart: der Bereich, in dem die mittlere Hälfte der Top-10-Werte liegt (vom 25.- bis zum 75.-Perzentil). Liegt die eigene Kurve im Band, bewegt man sich auf Top-10-Niveau.`,"gloss.strength.t":`Feldstärke (Wettbewerbs-Stärke-Index)`,"gloss.strength.d":`Bewertet, wie stark ein Wettbewerb besetzt war (0–100): Wie viele international eingeordnete Athleten, wie viele Top-10/Top-25-Starter? Ein Sieg bei Feldstärke 90 wiegt anders als einer bei Feldstärke 40 – deshalb fließt sie auch in den SPI ein.`,"gloss.talent.t":`Talent-Radar-Stufen`,"gloss.talent.d":`Fünf Stufen, rein aus Daten abgeleitet und je Athlet mit Begründung: Elite (Weltspitze), Internationales Niveau (etabliert in den Top-Gruppen), Durchbruch (gerade in die internationale Spitze vorgestoßen), Im Aufstieg (deutliche Verbesserung über 12 Monate), Hohes Potenzial (nahe an internationalen Schwellen). Keine Stufe ist ein Urteil über eine Person – sie beschreibt die aktuelle Ergebnislage.`,"gloss.fed.t":`Verbands-Seite: Kategorien-Status & Talent-Pipeline`,"gloss.fed.d":`Der Kategorien-Status zeigt je Kategorie, wie viele Athleten ein Land hat und wo der beste steht – auf einen Blick sichtbar, wo es stark besetzt ist und wo Lücken sind. Die Talent-Pipeline listet Athleten nahe Top 10/Top 25 und die schnellsten Aufsteiger; „Athleten mit Handlungsbedarf" markiert Leistungsrückgänge.`,"gloss.minors.t":`Minderjährigen-Schutz`,"gloss.minors.d":`SKATE IQ speichert keine Geburtsdaten. Das Alter ergibt sich nur grob aus der Wettkampf-Klasse. Echte Athletendaten erscheinen ausschließlich hinter dem Login; die öffentliche Demo zeigt nur fiktive Athleten.`,"gloss.demo.t":`DEMO-DATEN vs. Echtdaten-Version`,"gloss.demo.d":`Der gelbe Hinweis „DEMO-DATEN" bedeutet: alles fiktiv, frei herzeigbar. Die Echtdaten-Version zeigt stattdessen dezent ihren Datenstand; sie beruht vollständig auf öffentlich zugänglichen offiziellen Ergebnislisten und ist über die Login-Seite erreichbar.`,"feat.athlete.basic":`Basis-Profile & Ergebnisse`,"feat.athlete.history":`Volle Historie & Entwicklungskurven`,"feat.athlete.benchmarks":`Internationale Benchmarks`,"feat.athlete.spi":`SPI mit Erklärung`,"feat.athlete.whatItTakes":`„Was fehlt zum Ziel?"-Analyse`,"feat.athlete.compare":`Athleten-Vergleich`,"feat.athlete.reports":`Leistungsberichte`,"feat.athlete.cards":`Share-Cards`,"feat.coach.portfolio":`Trainer-Portfolio (mehrere Athleten)`,"feat.coach.alerts":`Alerts & Beobachtung`,"feat.club.dashboard":`Vereins-Dashboard`,"feat.club.talentRadar":`Talent-Radar`,"feat.club.exports":`Exporte (CSV/XLSX)`,"feat.federation.intelligence":`Federation Intelligence`,"feat.federation.cockpit":`Nationalteam-Cockpit`,"feat.federation.talent":`Talent-Pipeline`,"feat.federation.countryCompare":`Länder-Vergleich`,"feat.federation.reports":`Verbands-Reports`,"feat.federation.api":`Daten-API`,"feat.federation.whiteLabel":`White-Label`,"feat.admin.dataQuality":`Datenqualitäts-Konsole`,"feat.admin.console":`Admin-Konsole`,"home.greet.morning":`Guten Morgen`,"home.greet.day":`Guten Tag`,"home.greet.evening":`Guten Abend`,"home.pbsSub":`in den letzten Wochen`,"home.spotlight":`Im Spotlight`,"home.spotlightH":`{name} mit der stärksten Entwicklung`,"home.spotlightP":`+{delta} Punkte über 12 Monate – aktuell Weltposition {pos} in der rechnerischen Einordnung.`,"home.viewAthlete":`Athletenprofil ansehen`,"home.sportsOverview":`Disziplinen im Überblick`,"home.ranked":`eingeordnete Athleten`,"home.talentH":`Die schnellsten Aufsteiger entdecken`,"home.talentP":`Jede Einstufung erklärbar – direkt aus echten Wettkampfdaten.`,"home.viewTalent":`Talent-Radar öffnen`,"athlete.tab.overview":`Überblick`,"athlete.tab.development":`Entwicklung`,"athlete.tab.benchmarks":`Benchmarks`,"athlete.tab.results":`Ergebnisse`,"athlete.range.3m":`3M`,"athlete.range.6m":`6M`,"athlete.range.12m":`12M`,"athlete.range.24m":`24M`,"athlete.range.career":`Karriere`,"athlete.rangeEmpty":`Zu wenige Ergebnisse im gewählten Zeitraum.`,"landing.sport.skateboarding":`Skateboarding`,"landing.sport.inlineHockey":`Inline-Hockey`,"landing.sport.rinkHockey":`Rollhockey`,"landing.sport.freestyle":`Freestyle`,"landing.sport.derby":`Roller Derby`,"landing.sport.scootering":`Scootering`,"landing.sport.live":`live`,"landing.sport.soon":`bald`,"landing.moreLabel":`Mehr als Ergebnisse`,"landing.moreH":`Mehr als Ergebnisse. Echter Fortschritt.`,"landing.moreP":`SKATE IQ verwandelt Wettkampfdaten in verständliche Leistungs-Intelligenz – damit du siehst, wo du stehst, dein Potenzial verstehst und bessere Entscheidungen triffst.`,"landing.featH":`Starke Funktionen für jedes Level`,"pricing.h1a":`Klare Pläne.`,"pricing.h1b":`Echter Mehrwert.`,"pricing.monthly":`Monatlich`,"pricing.yearly":`Jährlich −20 %`,"pricing.yearlyNote":`bei jährlicher Zahlung`,"pricing.popular":`Beliebt`,"pricing.tryPlan":`Plan testen (Demo)`,"pricing.demoDisclaimer":`Demo-Preisseite – es ist keine Zahlung hinterlegt.`,"home.greeting":`Guten Morgen, {name}`,"home.sub":`Was sich gerade im Rollsport bewegt`,"home.followed":`Beobachtete Athleten`,"home.latest":`Neueste Ergebnisse`,"home.movers":`Größte Verbesserungen`,"home.pbs":`Neue Bestleistungen`,"home.week":`Wettbewerbe dieser Saison`,"home.insights":`Empfohlene Erkenntnisse`,"kpi.world":`Welt-Position`,"kpi.continent":`Kontinent-Position`,"kpi.national":`Nationale Position`,"kpi.percentile":`Globales Perzentil`,"kpi.spi":`SPI`,"kpi.pb":`Bestleistung`,"kpi.sb":`Saison-Bestwert`,"kpi.trend12":`12-Monats-Entwicklung`,"kpi.consistency":`Konstanz-Score`,"kpi.gapTop10":`Top-10-Rückstand`,"kpi.athletes":`Athleten`,"kpi.top10":`Welt Top 10`,"kpi.top25":`Welt Top 25`,"kpi.top50":`Welt Top 50`,"kpi.medals":`Internationale Podien`,"kpi.avgSpi":`Ø SPI`,"kpi.avgPercentile":`Ø int. Perzentil`,"kpi.emerging":`Aufstrebende Talente`,"kpi.development":`12-Monats-Entwicklung`,"athlete.about":`Profil`,"athlete.development":`Leistungsentwicklung`,"athlete.benchmarks":`Internationale Benchmarks`,"athlete.results":`Wettkampfergebnisse`,"athlete.spi.why":`Warum dieser SPI?`,"athlete.spi.explain":`Jede Dimension ist eine dokumentierte Formel über die angezeigten Eingangswerte. Gewichte sind sportartspezifisch.`,"athlete.whatittakes":`Was fehlt zum Ziel?`,"athlete.target":`Dein Ziel`,"athlete.current":`Aktueller Bestwert`,"athlete.benchmark":`Ziel-Benchmark`,"athlete.gap":`Rückstand`,"athlete.largestOpportunity":`Größter Hebel`,"athlete.breakdown":`Aufschlüsselung`,"athlete.corridor":`Benchmark-Korridor (p25–p75 von {group}, n={n})`,"athlete.share":`Share-Card`,"athlete.follow":`Folgen`,"athlete.confidence.low":`geringe Datenbasis`,"athlete.confidence.medium":`mittlere Datenbasis`,"athlete.confidence.high":`hohe Datenbasis`,"athlete.privacyNote":`Minderjährigen-Schutz: keine Geburtsdaten, Altersangabe nur über Kategorie.`,"spi.dim.internationalCompetitiveness":`Internationale Wettbewerbsfähigkeit`,"spi.dim.performanceLevel":`Leistungsniveau`,"spi.dim.consistency":`Konstanz`,"spi.dim.recentForm":`Aktuelle Form`,"spi.dim.developmentRate":`Entwicklungsrate`,"spi.dim.competitionStrength":`Wettbewerbsstärke`,"spi.explain.intl":`Perzentil des Saison-Bestwerts in der Welt-Vergleichsgruppe ({groupN} Athleten).`,"spi.explain.level":`Saison-Bestwert relativ zum aktuellen Welt-Bestwert.`,"spi.explain.consistency":`Streuung der Saisonwerte (Variationskoeffizient {cv}).`,"spi.explain.recent":`Durchschnitt der letzten 90 Tage gegenüber dem Saisonschnitt.`,"spi.explain.development":`Saison-Bestwert gegenüber dem Vorsaison-Bestwert.`,"spi.explain.strength":`Durchschnittlicher Stärke-Index der bestrittenen Wettbewerbe.`,"spi.explain.neutralNoData":`Zu wenig Daten – neutral mit 50 angesetzt und in der Datenbasis-Einstufung berücksichtigt.`,"bench.group.world":`Welt`,"bench.group.continent":`Kontinent`,"bench.group.country":`Land`,"bench.group.top10":`Top 10`,"bench.group.top25":`Top 25`,"bench.group.top50":`Top 50`,"bench.group.podium":`Podiums-Benchmark`,"bench.group.athletes":`Ausgewählte Athleten`,"bench.group.countries":`Ausgewählte Länder`,"bench.tooFewAthletes":`Gruppe zu klein für ein belastbares Perzentil (n={n}, Minimum 12).`,"bench.officialNote":`Offizielle Ranglisten kommen von Verbänden. SKATE-IQ-Analysewerte sind rechnerische Einordnungen und nie offizielle Ranglisten.`,"compare.title":`Athleten-Vergleich`,"compare.add":`Athlet hinzufügen`,"compare.metric":`Kennzahl`,"compare.h2h":`Direktvergleich`,"compare.card":`Vergleichs-Card erstellen`,"board.title":`Ranglisten`,"board.official":`OFFIZIELLE RANGLISTE`,"board.analytical":`SKATE-IQ-ANALYSE`,"board.analyticalNote":`Analytische Reihung nach {metric} – eine rechnerische Einordnung, keine offizielle Verbands-Rangliste.`,"board.rank":`Rang`,"board.athlete":`Athlet/in`,"board.value":`Wert`,"fed.title":`{country} – Performance Intelligence`,"fed.categoryHealth":`Kategorien-Status`,"fed.pipeline":`Talent-Pipeline`,"fed.attention":`Athleten mit Handlungsbedarf`,"fed.breakthrough":`Durchbruch-Athleten`,"fed.improvers":`Schnellste Aufsteiger`,"fed.topPerformers":`Top-Performer international`,"fed.nearTop10":`Nahe Top 10`,"fed.nearTop25":`Nahe Top 25`,"fed.decline":`Leistungsrückgang`,"countries.title":`Länder-Leistungsmatrix`,"countries.gap":`Länder-Lückenanalyse`,"countries.col.athletes":`Athleten`,"countries.col.dev":`Entwicklung`,"countries.vs":`vs.`,"countries.eliteDepth":`Breite in der Weltspitze`,"countries.juniorPipeline":`Junioren-Pipeline`,"countries.seniorPerf":`Senioren-Leistung`,"countries.medalPerf":`Podiums-Bilanz`,"countries.representation":`Internationale Präsenz`,"talent.title":`Talent Intelligence`,"talent.sub":`Jede Einstufung ist aus den angezeigten Daten abgeleitet – keine undurchsichtigen Talent-Urteile.`,"talent.BREAKTHROUGH":`Durchbruch`,"talent.RISING":`Im Aufstieg`,"talent.HIGH_POTENTIAL":`Hohes Potenzial`,"talent.INTERNATIONAL":`Internationales Niveau`,"talent.ELITE":`Elite`,"talent.why":`Warum diese Einstufung?`,"comp.title":`Wettbewerbe`,"comp.strength":`Feldstärke`,"comp.before":`Vorschau`,"comp.after":`Rückblick`,"comp.participants":`Teilnehmer`,"comp.expected":`Benchmark-Kontext`,"comp.results":`Ergebnisse`,"pricing.title":`Pläne`,"pricing.free":`Kostenlos`,"pricing.athletePro":`9,99 €/Monat oder 99 €/Jahr`,"pricing.coachPro":`299 €/Jahr`,"pricing.clubPro":`990 €/Jahr`,"pricing.fedStarter":`2.900 €/Jahr`,"pricing.fedPro":`5.900 €/Jahr`,"pricing.fedEnterprise":`ab 9.900 €/Jahr`,"pricing.note":`Vorschau-Build: Pläne dienen der Produkt-Validierung – es wird nichts bezahlt oder abgebucht.`,"pricing.sell.FREE":`Öffentliche Ergebnisse und Basis-Profile.`,"pricing.sell.ATHLETE_PRO":`Verstehe deine internationale Position.`,"pricing.sell.COACH_PRO":`Wisse, was deine Athleten als Nächstes brauchen.`,"pricing.sell.CLUB_PRO":`Vergleiche dein gesamtes Leistungsprogramm international.`,"pricing.sell.FED_STARTER":`Mache aus internationalen Ergebnissen Leistungsstrategie.`,"pricing.sell.FED_PRO":`Talent-Radar, Nationalteam-Cockpit und Länderanalysen in vollem Umfang.`,"pricing.sell.FED_ENTERPRISE":`API, White Label, eigene KPIs, SSO.`,"pricing.upgrade":`Benötigt {plan}`,"pricing.currentPlan":`Demo-Plan wählen`,"pricing.activePlan":`Aktiver Plan`,"admin.title":`Datenqualität`,"admin.sources":`Datenquellen`,"admin.checks":`Automatische Prüfungen`,"admin.identity":`Identitäts-Prüfliste`,"insight.percentileUp":`Internationales Perzentil von {from} auf {to} verbessert.`,"insight.percentileDown":`Internationales Perzentil von {from} auf {to} gesunken.`,"insight.gapTop10":`Aktuell {gap} {metric} unter dem Top-10-Benchmark.`,"insight.top10Reached":`Top-10-Benchmark erreicht.`,"insight.stable4":`Leistung über die letzten vier Wettbewerbe stabil.`,"insight.developing":`Schnellere Entwicklung als in der Vorsaison (Entwicklungsrate {score}).`,"insight.countryTop25":`{country} hat {n} Athleten in den internationalen Top 25 in {category}.`,"common.season":`Saison`,"common.sport":`Sportart`,"common.discipline":`Disziplin`,"common.category":`Kategorie`,"common.country":`Land`,"common.club":`Verein`,"common.all":`Alle`,"common.na":`–`,"common.n":`n`,"common.date":`Datum`,"common.competition":`Wettbewerb`,"common.placement":`Platz`,"common.level":`Level`,"common.loading":`Lädt…`,"common.notFound":`Nicht gefunden`,"common.back":`Zurück`,"common.computedNote":`Alle Werte sind rechnerische Einordnungen aus offiziellen Ergebnissen – deskriptiv, keine Vorhersagen, keine Empfehlungen.`,"common.demoBadge":`DEMO-DATEN – fiktive Athleten`,"common.dataAsOf":`Datenstand {date}`,"common.lang":`Sprache`,"metric.unit.points":`Pkt.`,"metric.unit.seconds":`s`,"sport.artistic":`Rollkunstlauf`,"sport.speed":`Speedskating`,"dis.artistic.kuer":`Kürlaufen`,"dis.artistic.solotanz":`Solotanz`,"dis.artistic.rolltanz":`Rolltanz`,"dis.artistic.paarlauf":`Paarlauf`,"klasse.senioren":`Senioren`,"klasse.junioren":`Junioren`,"klasse.youth":`Jugend`,"klasse.cadets":`Cadets`,"klasse.espoir":`Espoir`,"klasse.minis":`Minis`,"klasse.tots":`Tots`,"gender.damen":`Damen`,"gender.herren":`Herren`,"dis.speed.track":`Bahn`,"dis.speed.road":`Straße`,"cat.senior.w":`Seniorinnen`,"cat.senior.m":`Senioren`,"cat.junior.w":`Juniorinnen`,"cat.junior.m":`Junioren`,"age.senior":`Senior`,"age.junior":`Junior`,"gender.w":`Damen`,"gender.m":`Herren`,"metric.total":`Gesamtwertung`,"metric.tes":`Technik-Score (TES)`,"metric.pcs":`Komponenten-Score (PCS)`,"metric.deductions":`Abzüge`,"metric.timeMs":`Zeit`,"metric.speed":`Ø Geschwindigkeit`,"metric.points":`Punkte`,"metric.consistency":`Konstanz`,"metric.bestLap":`Beste Runde`,"country.GER":`Deutschland`,"country.ITA":`Italien`,"country.ESP":`Spanien`,"country.POR":`Portugal`,"country.FRA":`Frankreich`,"country.USA":`USA`,"country.BRA":`Brasilien`,"country.ARG":`Argentinien`,"country.AUS":`Australien`,"country.AIN":`Neutrale Athleten`,"country.AND":`Andorra`,"country.BEL":`Belgien`,"country.BOL":`Bolivien`,"country.CAN":`Kanada`,"country.CHI":`Chile`,"country.CHN":`China`,"country.CIV":`Elfenbeinküste`,"country.COL":`Kolumbien`,"country.CRO":`Kroatien`,"country.CZE":`Tschechien`,"country.DEN":`Dänemark`,"country.ECU":`Ecuador`,"country.EGY":`Ägypten`,"country.ESA":`El Salvador`,"country.EST":`Estland`,"country.GBR":`Großbritannien`,"country.HAI":`Haiti`,"country.ISR":`Israel`,"country.JPN":`Japan`,"country.KOR":`Südkorea`,"country.MAR":`Marokko`,"country.MEX":`Mexiko`,"country.NED":`Niederlande`,"country.NZL":`Neuseeland`,"country.PAN":`Panama`,"country.PAR":`Paraguay`,"country.ROM":`Rumänien`,"country.ROU":`Rumänien`,"country.SLO":`Slowenien`,"country.SLV":`El Salvador`,"country.SMR":`San Marino`,"country.SUI":`Schweiz`,"country.THA":`Thailand`,"country.TPE":`Chinesisch Taipeh`,"country.UKR":`Ukraine`,"country.URU":`Uruguay`,"country.VEN":`Venezuela`}},Tr=`de`,Er=new Set;function Dr(e){Tr=e,Er.forEach(e=>e())}function Or(){return Tr}function kr(e){return Er.add(e),()=>Er.delete(e)}function A(e,t){let n=wr[Tr][e]??wr.en[e]??e;if(t)for(let[e,r]of Object.entries(t)){let t=typeof r==`number`?r.toLocaleString(Tr===`de`?`de-DE`:`en-US`,{useGrouping:!1,maximumFractionDigits:3}):r;n=n.replaceAll(`{${e}}`,t)}return n}function j(e,t=2){return e.toLocaleString(Tr===`de`?`de-DE`:`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}var Ar=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=Ar()}))(),jr=(0,_.createContext)(null);function Mr({children:e}){let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(Or()),[s,c]=(0,_.useState)(`FED_PRO`),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(`dark`);(0,_.useEffect)(()=>{qn().then(n,e=>i(String(e)))},[]),(0,_.useEffect)(()=>kr(()=>o(Or())),[]),(0,_.useEffect)(()=>{let e=document.documentElement;d===`auto`?e.removeAttribute(`data-theme`):e.setAttribute(`data-theme`,d)},[d]);let p=(0,_.useMemo)(()=>t?new Cr(t,t.synthetic?`2026-10-01`:t.generatedAt):null,[t]),m=(0,_.useMemo)(()=>p?{store:p,locale:a,switchLocale:e=>Dr(e),plan:s,setPlan:c,addonCalc:l,setAddonCalc:u,theme:d,setTheme:f}:null,[p,a,s,l,d]);return r?(0,M.jsx)(`div`,{className:`p-8 text-sm`,style:{color:`var(--critical)`},children:r}):m?(0,M.jsx)(jr.Provider,{value:m,children:e}):(0,M.jsx)(`div`,{className:`p-8 text-sm ink-3`,children:A(`common.loading`)})}function N(){let e=(0,_.useContext)(jr);if(!e)throw Error(`AppProvider missing`);return e}var Nr=[`athlete.basic`],Pr=[...Nr,`athlete.history`,`athlete.benchmarks`,`athlete.spi`,`athlete.whatItTakes`,`athlete.compare`,`athlete.reports`,`athlete.cards`],Fr=[...Pr,`coach.portfolio`,`coach.alerts`],Ir=[...Fr,`club.dashboard`,`club.talentRadar`,`club.exports`],Lr=[...Ir,`federation.intelligence`,`federation.countryCompare`],Rr=[...Lr,`federation.talent`,`federation.cockpit`,`federation.reports`,`tools.calculator`],zr=[...Rr,`federation.api`,`federation.whiteLabel`],Br=[...zr,`admin.dataQuality`,`admin.console`],Vr={FREE:new Set(Nr),ATHLETE_PRO:new Set(Pr),COACH_PRO:new Set(Fr),CLUB_PRO:new Set(Ir),FED_STARTER:new Set(Lr),FED_PRO:new Set(Rr),FED_ENTERPRISE:new Set(zr),ADMIN:new Set(Br)},Hr={FREE:{priceKey:`pricing.free`},ATHLETE_PRO:{priceKey:`pricing.athletePro`},COACH_PRO:{priceKey:`pricing.coachPro`},CLUB_PRO:{priceKey:`pricing.clubPro`},FED_STARTER:{priceKey:`pricing.fedStarter`},FED_PRO:{priceKey:`pricing.fedPro`},FED_ENTERPRISE:{priceKey:`pricing.fedEnterprise`}};function Ur(e,t){return Vr[e].has(t)}function Wr(e){for(let t of[`FREE`,`ATHLETE_PRO`,`COACH_PRO`,`CLUB_PRO`,`FED_STARTER`,`FED_PRO`,`FED_ENTERPRISE`,`ADMIN`])if(Vr[t].has(e))return t;return`ADMIN`}function P({children:e,className:t=``}){return(0,M.jsx)(`div`,{className:`card p-4 sm:p-5 ${t}`,children:e})}function Gr({children:e,sub:t}){return(0,M.jsxs)(`div`,{className:`mb-3`,children:[(0,M.jsx)(`h2`,{className:`text-base font-bold tracking-tight`,children:e}),t&&(0,M.jsx)(`p`,{className:`text-xs ink-3 mt-0.5`,children:t})]})}function F({label:e,value:t,sub:n,tone:r,delta:i}){return(0,M.jsxs)(`div`,{className:`card p-3 sm:p-4 min-w-0`,children:[(0,M.jsx)(`div`,{className:`text-[11px] uppercase tracking-wider ink-3 truncate`,children:e}),(0,M.jsxs)(`div`,{className:`flex items-baseline gap-2 mt-1 min-w-0`,children:[(0,M.jsx)(`div`,{className:`hero-num text-2xl sm:text-3xl font-extrabold truncate`,style:r?{color:r===`good`?`var(--good)`:`var(--critical)`}:void 0,children:t}),i&&(0,M.jsx)(`span`,{className:`delta ${i.dir}`,children:i.text})]}),n&&(0,M.jsx)(`div`,{className:`text-xs ink-3 mt-0.5 truncate`,children:n})]})}function Kr({children:e}){return(0,M.jsx)(`div`,{className:`seclabel mb-2`,children:e})}function qr({children:e,color:t}){return(0,M.jsx)(`span`,{className:`chip`,style:t?{borderColor:t,color:t}:void 0,children:e})}function Jr(){let{store:e}=N();if(!e.b.synthetic){let t=new Date(e.b.generatedAt).toLocaleDateString(`de-DE`);return(0,M.jsx)(`span`,{className:`chip`,children:A(`common.dataAsOf`,{date:t})})}return(0,M.jsxs)(`span`,{className:`chip`,style:{borderColor:`var(--warning)`,color:`var(--ink-2)`,background:`color-mix(in srgb, var(--warning) 12%, var(--surface-1))`},children:[`⚠ `,A(`common.demoBadge`)]})}var Yr={ELITE:`var(--series-7)`,INTERNATIONAL:`var(--series-1)`,BREAKTHROUGH:`var(--series-3)`,RISING:`var(--series-2)`,HIGH_POTENTIAL:`var(--series-5)`};function Xr({tier:e}){return(0,M.jsx)(qr,{color:Yr[e],children:A(`talent.${e}`)})}function Zr({feature:e,children:t}){let{plan:n}=N();if(Ur(n,e))return(0,M.jsx)(M.Fragment,{children:t});let r=Wr(e);return(0,M.jsxs)(`div`,{className:`card p-5 text-center`,style:{borderStyle:`dashed`},children:[(0,M.jsx)(`div`,{className:`text-sm font-semibold`,children:A(`pricing.upgrade`,{plan:r.replace(`_`,` `)})}),(0,M.jsx)(`div`,{className:`text-xs ink-3 mt-1`,children:A(`pricing.sell.${r}`)}),(0,M.jsx)(In,{to:`/pricing`,className:`btn btn-primary inline-block mt-3 text-sm`,children:A(`nav.pricing`)})]})}function Qr({id:e,name:t,flag:n}){return(0,M.jsxs)(In,{to:`/athlete/${e}`,className:`font-semibold hover:underline whitespace-nowrap`,children:[n&&(0,M.jsx)(`span`,{className:`mr-1`,children:n}),t]})}function $r(){return(0,M.jsxs)(`p`,{className:`text-[11px] ink-3 mt-3`,children:[A(`common.computedNote`),` · `,A(`bench.officialNote`)]})}function ei(e,t){if(e==null)return A(`common.na`);let n=Math.abs(e);return t===`speed`?j(n/1e3,3)+` s`:j(n,2)}function ti(e,t,n=2){if(e==null)return A(`common.na`);if(t===`speed`){let t=-e/1e3;if(t<60)return j(t,3)+` s`;let n=Math.floor(t/60);return`${n}:${(t-n*60).toFixed(3).padStart(6,`0`)}`}return j(e,n)}var ni=[`FREE`,`ATHLETE_PRO`,`COACH_PRO`,`CLUB_PRO`,`FED_STARTER`,`FED_PRO`,`FED_ENTERPRISE`,`ADMIN`],ri={home:(0,M.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5`}),board:(0,M.jsx)(`path`,{d:`M4 20V10m5.5 10V4m5.5 16v-7M20.5 20V7`}),compare:(0,M.jsx)(`path`,{d:`M8 3v18M16 3v18M3 8h5m8 0h5M3 16h5m8 0h5`}),talent:(0,M.jsx)(`path`,{d:`M12 3l2.5 6 6.5.5-5 4.3 1.6 6.2-5.6-3.6-5.6 3.6L8 13.8 3 9.5l6.5-.5z`}),fed:(0,M.jsx)(`path`,{d:`M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6`}),globe:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,M.jsx)(`path`,{d:`M3 12h18M12 3c3 3.5 3 14 0 18-3-4-3-14.5 0-18z`})]}),comp:(0,M.jsx)(`path`,{d:`M8 21h8m-4-4v4M6 3h12v5a6 6 0 0 1-12 0zM6 5H3v2a4 4 0 0 0 3 3.9M18 5h3v2a4 4 0 0 1-3 3.9`}),price:(0,M.jsx)(`path`,{d:`M12 2v20M17 6.5C17 4.6 14.8 4 12 4s-5 .9-5 2.8 1.8 2.6 5 3.2 5 1.3 5 3.2-2.2 2.8-5 2.8-5-.6-5-2.5`}),calc:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{x:`4`,y:`3`,width:`16`,height:`18`,rx:`2`}),(0,M.jsx)(`path`,{d:`M8 7h8M8 12h2m3 0h2M8 16h2m3 0h2`})]}),book:(0,M.jsx)(`path`,{d:`M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5A2.5 2.5 0 0 0 4 21.5v-2zm0 0A2.5 2.5 0 0 1 6.5 17H20`}),data:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`ellipse`,{cx:`12`,cy:`5`,rx:`8`,ry:`2.6`}),(0,M.jsx)(`path`,{d:`M4 5v14c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6V5M4 12c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6`})]})};function ii({k:e}){return(0,M.jsx)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:ri[e]})}function ai({compact:e=!1}){let{store:t}=N(),n=wt(),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null),c=(0,_.useMemo)(()=>{let e=r.trim().toLowerCase();if(e.length<2)return null;let n=t=>t.toLowerCase().includes(e);return{athletes:t.b.athletes.filter(e=>n(e.displayName)).slice(0,6),clubs:t.b.clubs.filter(e=>n(e.name)).slice(0,3),countries:t.b.countries.filter(e=>n(e.code)||n(A(e.nameKey))).slice(0,3),competitions:t.b.competitions.filter(e=>n(e.name)).slice(0,4)}},[r,t]),l=e=>{o(!1),i(``),n(e)};return(0,M.jsxs)(`div`,{className:`relative ${e?`flex-1`:`flex-1 max-w-md`}`,ref:s,children:[(0,M.jsx)(`input`,{value:r,onChange:e=>{i(e.target.value),o(!0)},onFocus:()=>o(!0),onBlur:()=>setTimeout(()=>o(!1),150),placeholder:A(`nav.search.placeholder`),className:`w-full rounded-xl border px-3 py-1.5 text-sm`,style:{borderColor:`var(--border)`,background:`var(--surface-1)`},"aria-label":A(`nav.search.placeholder`)}),a&&c&&(0,M.jsxs)(`div`,{className:`absolute z-50 mt-1 w-full card p-2 max-h-96 overflow-auto shadow-lg`,children:[c.athletes.length>0&&(0,M.jsx)(`div`,{className:`px-2 pt-1 text-[10px] uppercase tracking-wider ink-3`,children:A(`nav.athletes`)}),c.athletes.map(e=>(0,M.jsxs)(`button`,{className:`block w-full text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] text-sm`,onMouseDown:()=>l(`/athlete/${e.id}`),children:[t.country(e.countryCode)?.flag,` `,e.displayName,` `,(0,M.jsx)(`span`,{className:`ink-3 text-xs`,children:e.countryCode})]},e.id)),c.countries.length>0&&(0,M.jsx)(`div`,{className:`px-2 pt-1 text-[10px] uppercase tracking-wider ink-3`,children:A(`nav.countries`)}),c.countries.map(e=>(0,M.jsxs)(`button`,{className:`block w-full text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] text-sm`,onMouseDown:()=>l(`/federation/${e.code}`),children:[e.flag,` `,A(e.nameKey)]},e.code)),c.competitions.length>0&&(0,M.jsx)(`div`,{className:`px-2 pt-1 text-[10px] uppercase tracking-wider ink-3`,children:A(`nav.competitions`)}),c.competitions.map(e=>(0,M.jsx)(`button`,{className:`block w-full text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] text-sm`,onMouseDown:()=>l(`/competition/${e.id}`),children:e.name},e.id)),c.clubs.length>0&&(0,M.jsx)(`div`,{className:`px-2 pt-1 text-[10px] uppercase tracking-wider ink-3`,children:A(`common.club`)}),c.clubs.map(e=>(0,M.jsxs)(`div`,{className:`px-2 py-1.5 text-sm ink-2`,children:[e.name,` · `,e.countryCode]},e.id))]})]})}function oi(){return(0,M.jsxs)(In,{to:`/`,className:`flex items-center gap-2 font-black tracking-tight text-lg whitespace-nowrap`,children:[(0,M.jsx)(`span`,{className:`logo-mark`,"aria-hidden":!0,children:`S`}),(0,M.jsxs)(`span`,{children:[`SKATE `,(0,M.jsx)(`span`,{className:`text-grad`,children:`IQ`})]})]})}var si=[[`/home`,`nav.home`,`home`],[`/leaderboard`,`nav.leaderboard`,`board`],[`/compare`,`nav.compare`,`compare`],[`/talent`,`nav.talent`,`talent`],[`/federation/GER`,`nav.federation`,`fed`],[`/countries`,`nav.countries`,`globe`],[`/competitions`,`nav.competitions`,`comp`],[`/rechner`,`nav.calc`,`calc`],[`/methodik`,`nav.method`,`book`],[`/pricing`,`nav.pricing`,`price`],[`/admin`,`nav.admin`,`data`]];function ci({children:e}){let{locale:t,switchLocale:n,plan:r,setPlan:i,theme:a,setTheme:o}=N(),s=(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`select`,{value:r,onChange:e=>i(e.target.value),className:`text-xs rounded-lg border px-1.5 py-1 hidden sm:block`,style:{borderColor:`var(--border)`,background:`var(--surface-1)`},"aria-label":A(`pricing.currentPlan`),title:A(`pricing.currentPlan`),children:ni.map(e=>(0,M.jsx)(`option`,{value:e,children:e.replace(`_`,` `)},e))}),(0,M.jsx)(`button`,{className:`text-xs navlink`,onClick:()=>n(t===`en`?`de`:`en`),"aria-label":A(`common.lang`),children:t.toUpperCase()}),(0,M.jsx)(`button`,{className:`text-xs navlink`,onClick:()=>o(a===`dark`?`light`:`dark`),"aria-label":`Theme`,children:a===`dark`?`☀️`:`🌙`})]});return(0,M.jsxs)(`div`,{className:`min-h-screen lg:flex`,children:[(0,M.jsxs)(`aside`,{className:`hidden lg:flex flex-col w-56 flex-none sticky top-0 h-screen border-r px-3 py-4 gap-1`,style:{borderColor:`var(--border)`,background:`color-mix(in srgb, var(--surface-1) 72%, transparent)`},children:[(0,M.jsx)(`div`,{className:`px-2 pb-4`,children:(0,M.jsx)(oi,{})}),si.map(([e,t,n])=>(0,M.jsxs)(Ln,{to:e,className:({isActive:e})=>`sidelink ${e?`on`:``}`,children:[(0,M.jsx)(ii,{k:n}),A(t)]},e)),(0,M.jsxs)(`div`,{className:`mt-auto px-2 pt-4 text-[11px] ink-3`,children:[(0,M.jsx)(`div`,{className:`mb-2`,children:(0,M.jsx)(Jr,{})}),A(`brand.name`),` · `,A(`brand.tagline`)]})]}),(0,M.jsxs)(`div`,{className:`flex-1 min-w-0 flex flex-col`,children:[(0,M.jsx)(`header`,{className:`sticky top-0 z-40 border-b`,style:{background:`color-mix(in srgb, var(--surface-0) 88%, transparent)`,backdropFilter:`blur(10px)`,borderColor:`var(--border)`},children:(0,M.jsxs)(`div`,{className:`max-w-7xl mx-auto px-3 sm:px-5`,children:[(0,M.jsxs)(`div`,{className:`flex items-center gap-3 py-2.5`,children:[(0,M.jsx)(`span`,{className:`lg:hidden`,children:(0,M.jsx)(oi,{})}),(0,M.jsx)(ai,{compact:!0}),s]}),(0,M.jsx)(`nav`,{className:`lg:hidden flex gap-1 overflow-x-auto scrollbar-none -mx-1 pb-1`,children:si.map(([e,t])=>(0,M.jsx)(Ln,{to:e,className:({isActive:e})=>`navlink ${e?`on`:``}`,children:A(t)},e))})]})}),(0,M.jsx)(`main`,{className:`flex-1 max-w-7xl mx-auto w-full px-3 sm:px-5 py-5`,children:e}),(0,M.jsx)(`footer`,{className:`border-t py-5 mt-8`,style:{borderColor:`var(--border)`},children:(0,M.jsxs)(`div`,{className:`max-w-7xl mx-auto px-3 sm:px-5 flex flex-wrap items-center gap-3 text-xs ink-3`,children:[(0,M.jsx)(`span`,{className:`lg:hidden`,children:(0,M.jsx)(Jr,{})}),(0,M.jsx)(`span`,{children:A(`brand.independent`)}),(0,M.jsxs)(`span`,{className:`ml-auto`,children:[A(`brand.name`),` · `,A(`brand.tagline`)]})]})})]})]})}function li(){let{store:e}=N(),t=e.b.quality,n=e=>e===`error`?`var(--critical)`:e===`warn`?`var(--serious)`:`var(--good)`;return(0,M.jsxs)(`div`,{className:`space-y-4`,children:[(0,M.jsx)(Gr,{children:A(`admin.title`)}),(0,M.jsxs)(Zr,{feature:`admin.dataQuality`,children:[(0,M.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-2.5`,children:[(0,M.jsx)(F,{label:A(`admin.sources`),value:e.b.sources.length}),(0,M.jsx)(F,{label:`Performances`,value:e.b.performances.length}),(0,M.jsx)(F,{label:A(`admin.checks`),value:t.length}),(0,M.jsx)(F,{label:A(`admin.identity`),value:t.filter(e=>!e.resolvedAt).length})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`admin.sources`)}),(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:`Organization`}),(0,M.jsx)(`th`,{children:`Type`}),(0,M.jsx)(`th`,{children:`Parser`}),(0,M.jsx)(`th`,{children:`Confidence`}),(0,M.jsx)(`th`,{children:`Status`}),(0,M.jsx)(`th`,{children:`Licensed`})]})}),(0,M.jsx)(`tbody`,{children:e.b.sources.map(e=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`font-semibold`,children:e.organization}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`span`,{className:`chip`,children:e.type})}),(0,M.jsx)(`td`,{className:`tnum`,children:e.parserVersion}),(0,M.jsxs)(`td`,{className:`tnum`,children:[(e.confidence*100).toFixed(0),` %`]}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`span`,{className:`chip`,style:{color:`var(--good)`,borderColor:`var(--good)`},children:e.validationStatus})}),(0,M.jsx)(`td`,{children:e.licensed?`✓`:`✗`})]},e.id))})]})})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`admin.checks`)}),(0,M.jsx)(`div`,{className:`space-y-2`,children:t.map(e=>(0,M.jsxs)(`div`,{className:`flex items-start gap-2 text-sm`,children:[(0,M.jsx)(`span`,{className:`mt-1 w-2 h-2 rounded-full shrink-0`,style:{background:n(e.severity)}}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`b`,{children:e.check}),` `,(0,M.jsx)(`span`,{className:`chip ml-1`,children:e.entity}),!e.resolvedAt&&(0,M.jsx)(`span`,{className:`chip ml-1`,style:{borderColor:`var(--serious)`,color:`var(--serious)`},children:`review`}),(0,M.jsx)(`div`,{className:`ink-2 text-xs mt-0.5`,children:e.detail})]})]},e.id))})]})]})]})}var ui=[`principle`,`value`,`pb`,`position`,`percentile`,`spi`,`confidence`,`consistency`,`trend`,`benchmark`,`corridor`,`strength`,`talent`,`fed`,`minors`,`demo`];function di(){return(0,M.jsxs)(`div`,{className:`space-y-5 max-w-3xl`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h1`,{className:`text-2xl sm:text-3xl font-black tracking-tight`,children:A(`gloss.title`)}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-1`,children:A(`gloss.sub`)})]}),(0,M.jsx)(`div`,{className:`space-y-3`,children:ui.map((e,t)=>(0,M.jsxs)(P,{children:[(0,M.jsx)(Kr,{children:String(t+1).padStart(2,`0`)}),(0,M.jsx)(`h2`,{className:`font-bold text-base`,children:A(`gloss.${e}.t`)}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-1.5 leading-relaxed`,children:A(`gloss.${e}.d`)})]},e))}),(0,M.jsx)($r,{})]})}var fi=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RollArt DRIV — Artistic Roller Skating 2026</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2322221C'/%3E%3Ctext x='32' y='44' text-anchor='middle' font-family='Open+Sans,sans-serif' font-weight='800' font-size='32' fill='white'%3ERA%3C/text%3E%3C/svg%3E">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #ffffff; }
    select, input, button { font-family: inherit; }
    /* Hide default number input spinners */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
    input[type="number"] { -moz-appearance: textfield; }
    /* Responsive: scrollable tables */
    .r-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    /* Responsive: horizontal scroll nav */
    .r-nav-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none; }
    .r-nav-scroll::-webkit-scrollbar { display: none; }
    /* Responsive: hide on mobile */
    @media (max-width: 640px) {
      .r-hide-mobile { display: none !important; }
      .r-col-mobile { flex-direction: column !important; }
      .r-grid1-mobile { grid-template-columns: 1fr !important; }
      .r-grid2-mobile { grid-template-columns: 1fr 1fr !important; }
      .r-pad-mobile { padding: 10px 12px !important; }
      .r-text-sm-mobile { font-size: 10px !important; }
      .r-full-mobile { width: 100% !important; min-width: unset !important; }
      .r-stack-mobile { flex-direction: column !important; height: auto !important; }
      .r-sidebar-mobile { width: 100% !important; max-height: 200px !important; border-right: none !important; border-bottom: 1px solid #e5e7eb !important; }
      /* Better touch targets on mobile */
      select, input[type="text"], input[type="email"], input[type="password"], input[type="number"] {
        min-height: 36px !important; font-size: 14px !important;
      }
      input[type="date"] { min-height: 36px !important; font-size: 14px !important; }
      button { min-height: 32px; }
      /* Table cells more compact on mobile */
      .r-table-wrap table th, .r-table-wrap table td { padding: 4px 3px !important; font-size: 11px !important; }
      .r-table-wrap select { font-size: 11px !important; min-height: 30px !important; padding: 2px 1px !important; }
      /* Competition/diary cards */
      .r-compact-mobile { padding: 10px !important; }
    }
    @media (max-width: 900px) {
      .r-hide-tablet { display: none !important; }
      .r-col-tablet { flex-direction: column !important; }
      .r-grid1-tablet { grid-template-columns: 1fr !important; }
      .r-grid2-tablet { grid-template-columns: 1fr 1fr !important; }
      .r-stack-tablet { flex-direction: column !important; height: auto !important; }
      .r-sidebar-tablet { width: 100% !important; max-height: 220px !important; border-right: none !important; border-bottom: 1px solid #e5e7eb !important; }
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"><\/script>
  <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.9/babel.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"><\/script>
  <script>pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";<\/script>

  <script type="text/babel">
  const { useState, useMemo, useCallback, useEffect, createContext, useContext, useRef } = React;

  // ============================================================
  //  RESPONSIVE HOOK
  // ============================================================
  function useScreen() {
    const [w, setW] = useState(window.innerWidth);
    useEffect(() => {
      const onResize = () => setW(window.innerWidth);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);
    return { w, mobile: w <= 640, tablet: w <= 900, desktop: w > 900 };
  }

  // ============================================================
  //  ELEMENT DATA — Official World Skate 2026 Values
  // ============================================================

  const JUMPS = [
    { name:"Waltz",code:"1W",base:0.4,lt:0,ltlt:0,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3},combo:0.41,comboLt:0,comboLtLt:0},
    { name:"Toeloop",code:"1T",base:0.6,lt:0.42,ltlt:0.3,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3},combo:0.61,comboLt:0.43,comboLtLt:0.31},
    { name:"Salchow",code:"1S",base:0.6,lt:0.42,ltlt:0.3,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3},combo:0.61,comboLt:0.43,comboLtLt:0.31},
    { name:"Flip",code:"1F",base:0.8,lt:0.56,ltlt:0.4,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4},combo:0.86,comboLt:0.6,comboLtLt:0.43},
    { name:"Lutz",code:"1Lz",base:0.9,lt:0.63,ltlt:0.45,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4},combo:0.96,comboLt:0.67,comboLtLt:0.48},
    { name:"Loop",code:"1Lo",base:0.9,lt:0.63,ltlt:0.45,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4},combo:0.96,comboLt:0.67,comboLtLt:0.48},
    { name:"Thoren",code:"1Th",base:0.9,lt:0.63,ltlt:0.45,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4},combo:0.96,comboLt:0.67,comboLtLt:0.48},
    { name:"Axel",code:"1A",base:1.3,lt:0.91,ltlt:0.65,goe:{3:0.4,2:0.3,1:0.2,m1:-0.2,m2:-0.3,m3:-0.4},combo:1.4,comboLt:0.98,comboLtLt:0.7},
    { name:"2 Toeloop",code:"2T",base:1.7,lt:1.19,ltlt:0.85,goe:{3:0.4,2:0.3,1:0.2,m1:-0.2,m2:-0.3,m3:-0.4},combo:1.85,comboLt:1.3,comboLtLt:0.93},
    { name:"2 Salchow",code:"2S",base:1.7,lt:1.19,ltlt:0.85,goe:{3:0.4,2:0.3,1:0.2,m1:-0.2,m2:-0.3,m3:-0.4},combo:1.85,comboLt:1.3,comboLtLt:0.93},
    { name:"2 Flip",code:"2F",base:2,lt:1.4,ltlt:1,goe:{3:0.5,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.5},combo:2.28,comboLt:1.6,comboLtLt:1.14},
    { name:"2 Lutz",code:"2Lz",base:2.2,lt:1.54,ltlt:1.1,goe:{3:0.5,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.5},combo:2.51,comboLt:1.76,comboLtLt:1.25},
    { name:"2 Loop",code:"2Lo",base:2.2,lt:1.54,ltlt:1.1,goe:{3:0.5,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.5},combo:2.51,comboLt:1.76,comboLtLt:1.25},
    { name:"2 Thoren",code:"2Th",base:2.2,lt:1.54,ltlt:1.1,goe:{3:0.5,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.5},combo:2.51,comboLt:1.76,comboLtLt:1.25},
    { name:"2 Axel",code:"2A",base:6.1,lt:4.88,ltlt:3.66,goe:{3:1.5,2:1.3,1:0.8,m1:-0.8,m2:-1.3,m3:-1.5},combo:7.02,comboLt:5.61,comboLtLt:4.21},
    { name:"3 Toeloop",code:"3T",base:7,lt:5.6,ltlt:4.2,goe:{3:1.9,2:1.4,1:0.9,m1:-0.9,m2:-1.4,m3:-1.9},combo:8.12,comboLt:6.5,comboLtLt:4.87},
    { name:"3 Salchow",code:"3S",base:7,lt:5.6,ltlt:4.2,goe:{3:1.9,2:1.4,1:0.9,m1:-0.9,m2:-1.4,m3:-1.9},combo:8.12,comboLt:6.5,comboLtLt:4.87},
    { name:"3 Flip",code:"3F",base:8.3,lt:6.64,ltlt:4.98,goe:{3:2.3,2:1.6,1:1.0,m1:-1.0,m2:-1.5,m3:-2.0},combo:10.04,comboLt:8.03,comboLtLt:6.03},
    { name:"3 Lutz",code:"3Lz",base:8.8,lt:7.04,ltlt:5.28,goe:{3:2.3,2:1.6,1:1.0,m1:-1.0,m2:-1.5,m3:-2.0},combo:10.65,comboLt:8.52,comboLtLt:6.39},
    { name:"3 Loop",code:"3Lo",base:8.8,lt:7.04,ltlt:5.28,goe:{3:2.3,2:1.6,1:1.0,m1:-1.0,m2:-1.5,m3:-2.0},combo:10.65,comboLt:8.52,comboLtLt:6.39},
    { name:"3 Thoren",code:"3Th",base:8.8,lt:7.04,ltlt:5.28,goe:{3:2.3,2:1.6,1:1.0,m1:-1.0,m2:-1.5,m3:-2.0},combo:10.65,comboLt:8.52,comboLtLt:6.39},
    { name:"3 Axel",code:"3A",base:11.8,lt:9.44,ltlt:8.26,goe:{3:2.8,2:2.1,1:1.4,m1:-1.0,m2:-1.5,m3:-2.0},combo:14.4,comboLt:11.52,comboLtLt:10.08},
    { name:"4 Salchow",code:"4S",base:13.4,lt:10.72,ltlt:9.38,goe:{3:2.8,2:2.1,1:1.4,m1:-1.4,m2:-2.1,m3:-2.8},combo:16.48,comboLt:13.19,comboLtLt:11.54},
    { name:"4 Toeloop",code:"4T",base:13.4,lt:10.72,ltlt:9.38,goe:{3:2.8,2:2.1,1:1.4,m1:-1.4,m2:-2.1,m3:-2.8},combo:16.48,comboLt:13.19,comboLtLt:11.54},
    { name:"4 Flip",code:"4F",base:15.8,lt:12.64,ltlt:11.06,goe:{3:3.0,2:2.3,1:1.6,m1:-1.6,m2:-2.3,m3:-3.0},combo:20.22,comboLt:16.18,comboLtLt:14.16},
    { name:"4 Loop",code:"4Lo",base:16.4,lt:13.12,ltlt:11.48,goe:{3:3.0,2:2.3,1:1.6,m1:-1.6,m2:-2.3,m3:-3.0},combo:20.99,comboLt:16.79,comboLtLt:14.69},
    { name:"4 Lutz",code:"4Lz",base:16.4,lt:13.12,ltlt:11.48,goe:{3:3.5,2:2.8,1:2.1,m1:-2.1,m2:-2.8,m3:-3.5},combo:20.99,comboLt:16.79,comboLtLt:14.69},
    { name:"4 Thoren",code:"4Th",base:16.4,lt:13.12,ltlt:11.48,goe:{3:2.3,2:1.6,1:0.9,m1:-0.9,m2:-1.6,m3:-2.3},combo:20.99,comboLt:16.79,comboLtLt:14.69},
    { name:"4 Axel",code:"4A",base:18.8,lt:15.04,ltlt:13.16,goe:{3:3.5,2:2.8,1:2.1,m1:-2.1,m2:-2.8,m3:-3.5},combo:24.44,comboLt:19.55,comboLtLt:17.11},
  ];

  // Individual spins (for SSp - Solo Spin)
  const SOLO_SPINS = [
    { name:"Upright Spin",code:"U",base:0.5,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Sit Spin",code:"S",base:0.8,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Camel Spin BD",code:"CBD",base:1.0,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-1}},
    { name:"Camel Spin FD",code:"CFD",base:1.2,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Broken Spin",code:"Br",base:1.8,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-1}},
    { name:"Heel Spin Back",code:"HBD",base:2.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Heel Spin Fwd",code:"HFD",base:2.5,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Inverted Spin",code:"In",base:2.8,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Upright Spin B",code:"USpB",base:1.0,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Upright Spin 1",code:"USp1",base:1.5,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Upright Spin 2",code:"USp2",base:2.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Upright Spin 3",code:"USp3",base:2.4,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Upright Spin 4",code:"USp4",base:2.9,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Sit Spin B",code:"SSpB",base:1.3,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Sit Spin 1",code:"SSp1",base:1.8,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Sit Spin 2",code:"SSp2",base:2.3,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Sit Spin 3",code:"SSp3",base:2.8,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Sit Spin 4",code:"SSp4",base:3.3,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Camel Spin B",code:"CaSpB",base:1.5,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Camel Spin 1",code:"CaSp1",base:2.0,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Camel Spin 2",code:"CaSp2",base:2.5,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Camel Spin 3",code:"CaSp3",base:3.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Camel Spin 4",code:"CaSp4",base:3.5,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
  ];

  // Combination spins (for CSp)
  const COMBO_SPINS = [
    { name:"Combo Spin B",code:"CSpB",base:1.7,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Combo Spin 1",code:"CSp1",base:2.3,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Combo Spin 2",code:"CSp2",base:2.8,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Combo Spin 3",code:"CSp3",base:3.4,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Combo Spin 4",code:"CSp4",base:4.0,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
  ];

  const STEP_SEQUENCES = [
    { name:"Step Seq. Base",code:"StB",base:1.8,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Step Seq. 1",code:"St1",base:2.3,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Step Seq. 2",code:"St2",base:3.3,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Step Seq. 3",code:"St3",base:3.9,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-1}},
    { name:"Step Seq. 4",code:"St4",base:4.4,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1}},
  ];

  const CHOREO_STEPS_FREE = [
    { name:"Choreo Step B",code:"ChStB",base:2.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Choreo Step 1",code:"ChSt1",base:3.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
  ];
  const CHOREO_STEPS_PAIRS = [
    { name:"Choreo Step B",code:"ChStB",base:2.0,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Choreo Step 1",code:"ChSt1",base:3.0,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
  ];

  // === PAIRS-ONLY ELEMENTS ===
  // CLi = Combination Lift, SLi = Solo Lift
  const ALL_LIFTS = [
    { name:"Lift No Level",code:"NL",base:0,goe:{3:0,2:0,1:0,m1:0,m2:0,m3:0}},
    // Low Militano Lift
    { name:"Low Militano B",code:"LMB",base:1.2,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Militano 1",code:"LM1",base:1.5,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Militano 2",code:"LM2",base:1.7,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Militano 3",code:"LM3",base:1.9,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Militano 4",code:"LM4",base:2.1,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    // Axel Lift
    { name:"Axel Lift B",code:"AxB",base:0.8,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Axel Lift 1",code:"Ax1",base:1.0,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Axel Lift 2",code:"Ax2",base:1.2,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Axel Lift 3",code:"Ax3",base:1.4,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Axel Lift 4",code:"Ax4",base:1.6,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    // Flip Lift
    { name:"Flip Lift B",code:"FlB",base:0.9,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Flip Lift 1",code:"Fl1",base:1.2,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Flip Lift 2",code:"Fl2",base:1.4,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Flip Lift 3",code:"Fl3",base:1.6,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Flip Lift 4",code:"Fl4",base:1.8,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    // Low Press Lift
    { name:"Low Press Lift B",code:"LPB",base:1.2,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Press Lift 1",code:"LP1",base:1.3,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Press Lift 2",code:"LP2",base:1.5,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Press Lift 3",code:"LP3",base:1.7,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Press Lift 4",code:"LP4",base:2.0,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    // Low Kennedy Lift
    { name:"Low Kennedy Lift B",code:"LKB",base:1.1,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Kennedy Lift 1",code:"LK1",base:1.4,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Kennedy Lift 2",code:"LK2",base:1.6,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Kennedy Lift 3",code:"LK3",base:1.8,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Low Kennedy Lift 4",code:"LK4",base:2.0,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    // Airplane Lift
    { name:"Airplane Lift B",code:"AirB",base:1.8,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Airplane Lift 1",code:"Air1",base:2.1,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Airplane Lift 2",code:"Air2",base:2.4,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Airplane Lift 3",code:"Air3",base:2.7,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Airplane Lift 4",code:"Air4",base:3.1,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    // Pancake Lift
    { name:"Pancake Lift B",code:"PanB",base:2.3,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Pancake Lift 1",code:"Pan1",base:2.6,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Pancake Lift 2",code:"Pan2",base:2.9,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Pancake Lift 3",code:"Pan3",base:3.2,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Pancake Lift 4",code:"Pan4",base:3.6,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    // Press Lift
    { name:"Press Lift B",code:"PrB",base:2.7,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Press Lift 1",code:"Pr1",base:3.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Press Lift 2",code:"Pr2",base:3.3,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Press Lift 3",code:"Pr3",base:3.6,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Press Lift 4",code:"Pr4",base:4.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    // Cartwheel Lift
    { name:"Cartwheel Lift B",code:"CarB",base:4.1,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Cartwheel Lift 1",code:"Car1",base:4.4,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Cartwheel Lift 2",code:"Car2",base:4.8,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Cartwheel Lift 3",code:"Car3",base:5.2,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Cartwheel Lift 4",code:"Car4",base:5.7,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    // Reversed Loop
    { name:"Reversed Loop B",code:"RLoB",base:2.7,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Reversed Loop 1",code:"RLo1",base:3.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Reversed Loop 2",code:"RLo2",base:3.3,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Reversed Loop 3",code:"RLo3",base:3.6,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Reversed Loop 4",code:"RLo4",base:4.0,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    // Pancake Twist Lift
    { name:"Pancake Twist B",code:"PanTB",base:3.7,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Pancake Twist 1",code:"PanT1",base:4.0,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Pancake Twist 2",code:"PanT2",base:4.3,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Pancake Twist 3",code:"PanT3",base:4.6,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Pancake Twist 4",code:"PanT4",base:5.0,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    // Kennedy Lift
    { name:"Kennedy Lift B",code:"KenB",base:5.1,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Kennedy Lift 1",code:"Ken1",base:5.4,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Kennedy Lift 2",code:"Ken2",base:5.7,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Kennedy Lift 3",code:"Ken3",base:6.0,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Kennedy Lift 4",code:"Ken4",base:6.4,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    // Militano Lift
    { name:"Militano Lift B",code:"MilB",base:5.5,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Militano Lift 1",code:"Mil1",base:5.8,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Militano Lift 2",code:"Mil2",base:6.1,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Militano Lift 3",code:"Mil3",base:6.4,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Militano Lift 4",code:"Mil4",base:6.8,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    // Reverse Militano Lift
    { name:"Rev. Militano B",code:"RMilB",base:6.5,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Rev. Militano 1",code:"RMil1",base:6.8,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Rev. Militano 2",code:"RMil2",base:7.1,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Rev. Militano 3",code:"RMil3",base:7.4,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Rev. Militano 4",code:"RMil4",base:7.8,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    // Reverse Cartwheel Lift
    { name:"Rev. Cartwheel B",code:"RevCB",base:6.3,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Rev. Cartwheel 1",code:"RevC1",base:6.6,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Rev. Cartwheel 2",code:"RevC2",base:7.0,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Rev. Cartwheel 3",code:"RevC3",base:7.4,goe:{3:1.9,2:1.4,1:0.9,m1:-0.9,m2:-1.4,m3:-1.9}},
    { name:"Rev. Cartwheel 4",code:"RevC4",base:7.9,goe:{3:1.9,2:1.4,1:0.9,m1:-0.9,m2:-1.4,m3:-1.9}},
    // Spin Pancake Lift
    { name:"Spin Pancake B",code:"SpPanB",base:6.6,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Spin Pancake 1",code:"SpPan1",base:6.9,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Spin Pancake 2",code:"SpPan2",base:7.3,goe:{3:1.9,2:1.4,1:0.9,m1:-0.9,m2:-1.4,m3:-1.9}},
    { name:"Spin Pancake 3",code:"SpPan3",base:7.7,goe:{3:1.9,2:1.4,1:0.9,m1:-0.9,m2:-1.4,m3:-1.9}},
    { name:"Spin Pancake 4",code:"SpPan4",base:8.1,goe:{3:2.1,2:1.6,1:1.1,m1:-1.1,m2:-1.6,m3:-2.1}},
  ];

  const THROW_JUMPS = [
    { name:"Throw Waltz",code:"1TW",base:0.4,lt:0,ltlt:0,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Throw Toeloop",code:"1TT",base:0.9,lt:0.63,ltlt:0.36,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Throw Salchow",code:"1TS",base:0.8,lt:0.56,ltlt:0.32,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Throw Loop",code:"1TL",base:1.1,lt:0.77,ltlt:0.44,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Throw Flip",code:"1TF",base:1.0,lt:0.7,ltlt:0.4,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Throw Axel",code:"1TAx",base:1.4,lt:0.98,ltlt:0.56,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4}},
    { name:"Throw 2 Toeloop",code:"2TT",base:2.1,lt:1.47,ltlt:1.05,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Throw 2 Salchow",code:"2TS",base:2.0,lt:1.4,ltlt:1,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Throw 2 Loop",code:"2TL",base:2.5,lt:1.75,ltlt:1.25,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Throw 2 Flip",code:"2TF",base:2.3,lt:1.61,ltlt:1.15,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Throw 2 Axel",code:"2TAx",base:6.7,lt:5.36,ltlt:4.02,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Throw 3 Toeloop",code:"3TT",base:6.9,lt:5.52,ltlt:4.14,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Throw 3 Salchow",code:"3TS",base:6.7,lt:5.36,ltlt:4.02,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"Throw 3 Loop",code:"3TL",base:8.5,lt:6.8,ltlt:5.1,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    { name:"Throw 3 Flip",code:"3TF",base:8.2,lt:6.56,ltlt:4.92,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    { name:"Throw 3 Axel",code:"3TAx",base:11.9,lt:9.52,ltlt:8.33,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
    { name:"Throw 4 Toeloop",code:"4TT",base:13.9,lt:11.12,ltlt:9.73,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
    { name:"Throw 4 Salchow",code:"4TS",base:13.7,lt:10.96,ltlt:9.59,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
    { name:"Throw 4 Loop",code:"4TL",base:16.5,lt:13.2,ltlt:11.55,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
    { name:"Throw 4 Flip",code:"4TF",base:15.6,lt:12.48,ltlt:10.92,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
  ];

  const CONTACT_SPINS = [
    { name:"Upr Back-Out",code:"UBO",base:0.6,goe:{3:0.3,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.3}},
    { name:"Catch at Waist",code:"CW",base:1.4,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"FtF Sit Back In",code:"SBI",base:1.1,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"FtF Sit Back Out",code:"SBO",base:1.1,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Sit Hazel Camel",code:"SHC",base:1.0,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Sit Hazel",code:"SH",base:1.2,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Camel Kilian",code:"CK",base:1.5,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Camel Tango",code:"CT",base:1.8,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"Impossible Sit",code:"SIMP",base:5.5,goe:{3:1.5,2:1.0,1:0.5,m1:-0.5,m2:-1.0,m3:-1.5}},
    { name:"Reverse Lay Over",code:"RLO",base:5.0,goe:{3:1.2,2:0.8,1:0.4,m1:-0.4,m2:-0.8,m3:-1.2}},
    { name:"Impossible",code:"CIMP",base:3.5,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Lay Over Camel",code:"LOC",base:2.5,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
  ];

  const DEATH_SPIRALS = [
    { name:"Death Spiral B",code:"DSB",base:3.6,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Death Spiral 1",code:"DS1",base:4.1,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"Death Spiral 2",code:"DS2",base:5.1,goe:{3:1.5,2:1,1:0.5,m1:-0.5,m2:-1,m3:-1.5}},
    { name:"Death Spiral 3",code:"DS3",base:5.7,goe:{3:1.5,2:1,1:0.5,m1:-0.5,m2:-1,m3:-1.5}},
    { name:"Death Spiral 4",code:"DS4",base:6.3,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
  ];

  const CAMEL_SPIRALS = [
    { name:"Camel Spiral",code:"CS",base:1.5,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
  ];

  const TWIST_LUTZ = [
    { name:"1 Twist B",code:"1TwB",base:1.4,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4}},
    { name:"1 Twist 1",code:"1Tw1",base:1.7,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"1 Twist 2",code:"1Tw2",base:2.1,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    { name:"1 Twist 3",code:"1Tw3",base:2.6,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"1 Twist 4",code:"1Tw4",base:3.1,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"2 Twist B",code:"2TwB",base:2.8,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"2 Twist 1",code:"2Tw1",base:3.1,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"2 Twist 2",code:"2Tw2",base:3.4,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"2 Twist 3",code:"2Tw3",base:3.8,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"2 Twist 4",code:"2Tw4",base:4.2,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    { name:"3 Twist B",code:"3TwB",base:7,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"3 Twist 1",code:"3Tw1",base:7.3,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"3 Twist 2",code:"3Tw2",base:7.6,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"3 Twist 3",code:"3Tw3",base:8,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"3 Twist 4",code:"3Tw4",base:8.4,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    { name:"4 Twist B",code:"4TwB",base:8.2,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    { name:"4 Twist 1",code:"4Tw1",base:8.5,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    { name:"4 Twist 2",code:"4Tw2",base:8.8,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    { name:"4 Twist 3",code:"4Tw3",base:9.1,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
    { name:"4 Twist 4",code:"4Tw4",base:9.6,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
  ];

  // ============================================================
  //  2027 SEASON DATA
  // ============================================================
  const _zg={3:0,2:0,1:0,m1:0,m2:0,m3:0};

  const JUMPS_2027 = [
    {name:"No Jump",code:"NJ",base:0,lt:0,ltlt:0,goe:_zg,combo:0,comboLt:0,comboLtLt:0},
    ...JUMPS.filter(j=>!["2Th","3Th","4Th"].includes(j.code))
  ];

  const SOLO_SPINS_2027 = [
    {name:"No Spin",code:"NS",base:0,goe:_zg},
    ...SOLO_SPINS.filter(s=>["U","S","CBD","CFD","Br","HBD","HFD","In"].includes(s.code))
  ];

  // 2027: no separate combo spin category — use same basic spins
  const COMBO_SPINS_2027 = SOLO_SPINS_2027;

  const STEP_SEQUENCES_2027 = [
    {name:"No Step Seq",code:"NSt",base:0,goe:_zg},
    ...STEP_SEQUENCES
  ];

  const CHOREO_STEPS_FREE_2027 = [
    {name:"No Choreo",code:"NChSt",base:0,goe:_zg},
    ...CHOREO_STEPS_FREE
  ];
  const CHOREO_STEPS_PAIRS_2027 = [
    {name:"No Choreo",code:"NChSt",base:0,goe:_zg},
    ...CHOREO_STEPS_PAIRS
  ];

  // Lifts 2027 — identical to 2026
  const ALL_LIFTS_2027 = ALL_LIFTS;

  const THROW_JUMPS_2027 = [
    {name:"No Throw Jump",code:"NTJ",base:0,lt:0,ltlt:0,goe:_zg},
    ...THROW_JUMPS
  ];

  const CONTACT_SPINS_2027 = [
    {name:"No Contact Spin",code:"NCS",base:0,goe:_zg},
    {name:"NL Upr Back-Out",code:"NLUbo",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(0,1), // UBO
    {name:"NL Catch at Waist",code:"NLCw",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(1,2), // CW
    {name:"NL Sit Back In",code:"NLSbi",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(2,3), // SBI
    {name:"NL Sit Back Out",code:"NLSbo",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(3,4), // SBO
    {name:"NL Sit Hazel Camel",code:"NLShC",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(4,5), // SHC
    {name:"NL Sit Hazel",code:"NLSh",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(5,6), // SH
    {name:"NL Camel Kilian",code:"NLCk",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(6,7), // CK
    {name:"NL Camel Tango",code:"NLCt",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(7,8), // CT
    {name:"NL Impossible Sit",code:"NLSim",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(8,9), // SIMP
    {name:"NL Reverse Lay Over",code:"NLRlo",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(9,10), // RLO
    {name:"NL Impossible",code:"NLImp",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(10,11), // CIMP
    {name:"NL Lay Over Camel",code:"NLLoc",base:0,goe:_zg},
    ...CONTACT_SPINS.slice(11), // LOC
  ];

  const DEATH_SPIRALS_2027 = [
    {name:"No Death Spiral",code:"NDS",base:0,goe:_zg},
    ...DEATH_SPIRALS
  ];

  const CAMEL_SPIRALS_2027 = CAMEL_SPIRALS;

  // Twist Lutz 2027: lt/ltlt columns added
  const TWIST_LUTZ_2027 = [
    {name:"No Twist",code:"NT",base:0,lt:0,ltlt:0,goe:_zg},
    // 1 Twist
    {name:"NL 1 Twist",code:"NL1Tw",base:0,lt:0,ltlt:0,goe:_zg},
    {name:"1 Twist B",code:"1TwB",base:1.4,lt:0.98,ltlt:0.56,goe:{3:0.4,2:0.2,1:0.1,m1:-0.1,m2:-0.2,m3:-0.4}},
    {name:"1 Twist 1",code:"1Tw1",base:1.7,lt:1.19,ltlt:0.68,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    {name:"1 Twist 2",code:"1Tw2",base:2.1,lt:1.47,ltlt:0.84,goe:{3:0.6,2:0.4,1:0.2,m1:-0.2,m2:-0.4,m3:-0.6}},
    {name:"1 Twist 3",code:"1Tw3",base:2.6,lt:1.82,ltlt:1.04,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    {name:"1 Twist 4",code:"1Tw4",base:3.1,lt:2.17,ltlt:1.24,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    // 2 Twist
    {name:"NL 2 Twist",code:"NL2Tw",base:0,lt:0,ltlt:0,goe:_zg},
    {name:"2 Twist B",code:"2TwB",base:2.8,lt:1.96,ltlt:1.4,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    {name:"2 Twist 1",code:"2Tw1",base:3.1,lt:2.17,ltlt:1.55,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    {name:"2 Twist 2",code:"2Tw2",base:3.4,lt:2.38,ltlt:1.7,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    {name:"2 Twist 3",code:"2Tw3",base:3.8,lt:2.66,ltlt:1.9,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    {name:"2 Twist 4",code:"2Tw4",base:4.2,lt:2.94,ltlt:2.1,goe:{3:0.9,2:0.6,1:0.3,m1:-0.3,m2:-0.6,m3:-0.9}},
    // 3 Twist
    {name:"NL 3 Twist",code:"NL3Tw",base:0,lt:0,ltlt:0,goe:_zg},
    {name:"3 Twist B",code:"3TwB",base:7,lt:4.9,ltlt:4.2,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    {name:"3 Twist 1",code:"3Tw1",base:7.3,lt:5.11,ltlt:4.38,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    {name:"3 Twist 2",code:"3Tw2",base:7.6,lt:5.32,ltlt:4.56,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    {name:"3 Twist 3",code:"3Tw3",base:8,lt:5.6,ltlt:4.8,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    {name:"3 Twist 4",code:"3Tw4",base:8.4,lt:5.88,ltlt:5,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    // NL 4 Twist (has real values per PDF)
    {name:"NL 4 Twist",code:"NL4Tw",base:8.4,lt:5.6,ltlt:4.8,goe:{3:1.7,2:1.2,1:0.7,m1:-0.7,m2:-1.2,m3:-1.7}},
    // 4 Twist
    {name:"4 Twist B",code:"4TwB",base:8.2,lt:6.56,ltlt:4.92,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    {name:"4 Twist 1",code:"4Tw1",base:8.5,lt:6.8,ltlt:5.1,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    {name:"4 Twist 2",code:"4Tw2",base:8.8,lt:7.04,ltlt:5.28,goe:{3:2.1,2:1.4,1:0.7,m1:-0.7,m2:-1.4,m3:-2.1}},
    {name:"4 Twist 3",code:"4Tw3",base:9.1,lt:7.28,ltlt:5.46,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
    {name:"4 Twist 4",code:"4Tw4",base:9.6,lt:7.68,ltlt:5.76,goe:{3:3,2:2,1:1,m1:-1,m2:-2,m3:-3}},
  ];

  // ============================================================
  //  ELEMENT TYPE DEFINITIONS 2027
  // ============================================================
  const ELEMENT_TYPES_FREE_2027 = [
    { code:"CoJ", label:"Combination Jump", data:JUMPS_2027, isCombo:true, hasRotation:true },
    { code:"SJu", label:"Solo Jump",        data:JUMPS_2027, isCombo:false, hasRotation:true },
    { code:"CSp", label:"Combination Spin",  data:COMBO_SPINS_2027, isCombo:true, hasRotation:false },
    { code:"SSp", label:"Solo Spin",         data:SOLO_SPINS_2027, isCombo:false, hasRotation:false },
    { code:"FoSq",label:"Footwork Sequence", data:STEP_SEQUENCES_2027, isCombo:false, hasRotation:false },
    { code:"ChSt",label:"Choreo Step Seq.",  data:CHOREO_STEPS_FREE_2027, isCombo:false, hasRotation:false },
  ];

  const ELEMENT_TYPES_PAIRS_2027 = [
    { code:"CoJ", label:"Combination Jump",  data:JUMPS_2027, isCombo:true, hasRotation:true },
    { code:"SJu", label:"Solo Jump",         data:JUMPS_2027, isCombo:false, hasRotation:true },
    { code:"CSp", label:"Combination Spin",   data:COMBO_SPINS_2027, isCombo:true, hasRotation:false },
    { code:"SSp", label:"Solo Spin",          data:SOLO_SPINS_2027, isCombo:false, hasRotation:false },
    { code:"FoSq",label:"Footwork Sequence",  data:STEP_SEQUENCES_2027, isCombo:false, hasRotation:false },
    { code:"ChSt",label:"Choreo Step Seq.",   data:CHOREO_STEPS_PAIRS_2027, isCombo:false, hasRotation:false },
    { code:"CLi", label:"Combination Lift",   data:ALL_LIFTS_2027, isCombo:true, hasRotation:false },
    { code:"SLi", label:"Solo Lift",          data:ALL_LIFTS_2027, isCombo:false, hasRotation:false },
    { code:"CtSp",label:"Contact Spin",       data:CONTACT_SPINS_2027, isCombo:true, hasRotation:false },
    { code:"DS",  label:"Death Spiral",       data:DEATH_SPIRALS_2027, isCombo:false, hasRotation:false },
    { code:"CS",  label:"Camel Spiral",       data:CAMEL_SPIRALS_2027, isCombo:false, hasRotation:false },
    { code:"Tw",  label:"Twist",              data:TWIST_LUTZ_2027, isCombo:false, hasRotation:true },
    { code:"Tj",  label:"Throw Jump",         data:THROW_JUMPS_2027, isCombo:false, hasRotation:true },
  ];

  // Season helper: get correct types array for a given season
  function getSeasonTypes(season, isPairs) {
    if (season === "2027") return isPairs ? ELEMENT_TYPES_PAIRS_2027 : ELEMENT_TYPES_FREE_2027;
    return isPairs ? ELEMENT_TYPES_PAIRS : ELEMENT_TYPES_FREE;
  }

  // ============================================================
  //  ELEMENT TYPE DEFINITIONS (match official Content Sheet)
  // ============================================================
  const ELEMENT_TYPES_FREE = [
    { code:"CoJ", label:"Combination Jump", data:JUMPS, isCombo:true, hasRotation:true },
    { code:"SJu", label:"Solo Jump",        data:JUMPS, isCombo:false, hasRotation:true },
    { code:"CSp", label:"Combination Spin",  data:COMBO_SPINS, isCombo:true, hasRotation:false },
    { code:"SSp", label:"Solo Spin",         data:SOLO_SPINS, isCombo:false, hasRotation:false },
    { code:"FoSq",label:"Footwork Sequence", data:STEP_SEQUENCES, isCombo:false, hasRotation:false },
    { code:"ChSt",label:"Choreo Step Seq.",  data:CHOREO_STEPS_FREE, isCombo:false, hasRotation:false },
  ];

  const ELEMENT_TYPES_PAIRS = [
    { code:"CoJ", label:"Combination Jump",  data:JUMPS, isCombo:true, hasRotation:true },
    { code:"SJu", label:"Solo Jump",         data:JUMPS, isCombo:false, hasRotation:true },
    { code:"CSp", label:"Combination Spin",   data:COMBO_SPINS, isCombo:true, hasRotation:false },
    { code:"SSp", label:"Solo Spin",          data:SOLO_SPINS, isCombo:false, hasRotation:false },
    { code:"FoSq",label:"Footwork Sequence",  data:STEP_SEQUENCES, isCombo:false, hasRotation:false },
    { code:"ChSt",label:"Choreo Step Seq.",   data:CHOREO_STEPS_PAIRS, isCombo:false, hasRotation:false },
    { code:"CLi", label:"Combination Lift",   data:ALL_LIFTS, isCombo:true, hasRotation:false },
    { code:"SLi", label:"Solo Lift",          data:ALL_LIFTS, isCombo:false, hasRotation:false },
    { code:"CtSp",label:"Contact Spin",       data:CONTACT_SPINS, isCombo:true, hasRotation:false },
    { code:"DS",  label:"Death Spiral",       data:DEATH_SPIRALS, isCombo:false, hasRotation:false },
    { code:"CS",  label:"Camel Spiral",       data:CAMEL_SPIRALS, isCombo:false, hasRotation:false },
    { code:"Tw",  label:"Twist",              data:TWIST_LUTZ, isCombo:false, hasRotation:false },
    { code:"Tj",  label:"Throw Jump",         data:THROW_JUMPS, isCombo:false, hasRotation:true },
  ];

  // ============================================================
  //  KATEGORIE-DEFINITIONEN (World Skate 2026)
  // ============================================================
  const CATEGORY_DEFS = {
    "tots":     { label:"Tots (8-9)",     age:"8-9",   segments:["tots_fp"],                    time:"2:30" },
    "minis":    { label:"Minis (10-11)",   age:"10-11", segments:["minis_fp"],                   time:"2:45" },
    "espoirs":  { label:"Espoirs (12-13)", age:"12-13", segments:["espoirs_sp","espoirs_fp"],     time:"SP 2:00 / FP 3:15" },
    "cadets":   { label:"Cadets (14-15)",  age:"14-15", segments:["cadets_sp","cadets_fp"],      time:"SP 2:30 / FP 3:30" },
    "jeunesse": { label:"Jeunesse (16-17)",age:"16-17", segments:["jeunesse_sp","jeunesse_fp"],  time:"SP 2:30 / FP 4:00" },
    "junior":   { label:"Junior (18-19)",  age:"18-19", segments:["junior_sp","junior_fp"],      time:"SP 2:45 / FP 4:00" },
    "senior":   { label:"Senior (20+)",    age:"20+",   segments:["senior_sp","senior_fp"],      time:"SP 2:45 / FP 4:00" },
    "pairs_tots":     { label:"Pairs Tots (8-9)",      age:"8-9",   segments:["pairs_tots_fp"],                              time:"FP 2:00" },
    "pairs_minis":    { label:"Pairs Minis (10-11)",    age:"10-11", segments:["pairs_minis_fp"],                             time:"FP 2:30" },
    "pairs_espoirs":  { label:"Pairs Espoirs (12-13)",  age:"12-13", segments:["pairs_espoirs_sp","pairs_espoirs_fp"],        time:"SP 2:15 / FP 3:00" },
    "pairs_cadets":   { label:"Pairs Cadets (14-15)",   age:"14-15", segments:["pairs_cadets_sp","pairs_cadets_fp"],         time:"SP 2:30 / FP 3:45" },
    "pairs_youth":    { label:"Pairs Youth (16-17)",    age:"16-17", segments:["pairs_youth_sp","pairs_youth_fp"],           time:"SP 2:30 / FP 4:00" },
    "pairs_junior":   { label:"Pairs Junior (18-19)",   age:"18-19", segments:["pairs_junior_sp","pairs_junior_fp"],         time:"SP 3:00 / FP 4:30" },
    "pairs_senior":   { label:"Pairs Senior (20+)",     age:"20+",   segments:["pairs_senior_sp","pairs_senior_fp"],         time:"SP 3:00 / FP 4:30" },
  };

  const SEGMENT_DEFS = {
    // --- Tots ---
    "tots_fp":      { label:"Tots - Kür", rows:16, category:"tots" },
    // --- Minis ---
    "minis_fp":     { label:"Minis - Kür", rows:16, category:"minis" },
    // --- Espoirs ---
    "espoirs_sp":   { label:"Espoirs - Short Program", rows:5, category:"espoirs" },
    "espoirs_fp":   { label:"Espoirs - Kür", rows:12, category:"espoirs" },
    // --- Cadets ---
    "cadets_sp":    { label:"Cadets - Short Program", rows:5, category:"cadets" },
    "cadets_fp":    { label:"Cadets - Kür", rows:12, category:"cadets" },
    // --- Jeunesse ---
    "jeunesse_sp":  { label:"Youth - Short Program", rows:5, category:"jeunesse" },
    "jeunesse_fp":  { label:"Youth - Kür", rows:13, category:"jeunesse" },
    // --- Junior ---
    "junior_sp":    { label:"Junior - Short Program", rows:7, category:"junior" },
    "junior_fp":    { label:"Junior - Kür", rows:13, category:"junior" },
    // --- Senior ---
    "senior_sp":    { label:"Senior - Short Program", rows:7, category:"senior" },
    "senior_fp":    { label:"Senior - Kür", rows:13, category:"senior" },
    // --- Pairs Tots ---
    "pairs_tots_fp":      { label:"Pairs Tots - Kür", rows:7, category:"pairs_tots" },
    // --- Pairs Minis ---
    "pairs_minis_fp":     { label:"Pairs Minis - Kür", rows:8, category:"pairs_minis" },
    // --- Pairs Espoirs ---
    "pairs_espoirs_sp":   { label:"Pairs Espoirs - Short Program", rows:7, category:"pairs_espoirs" },
    "pairs_espoirs_fp":   { label:"Pairs Espoirs - Kür", rows:9, category:"pairs_espoirs" },
    // --- Pairs Cadets ---
    "pairs_cadets_sp":    { label:"Pairs Cadets - Short Program", rows:7, category:"pairs_cadets" },
    "pairs_cadets_fp":    { label:"Pairs Cadets - Kür", rows:10, category:"pairs_cadets" },
    // --- Pairs Youth ---
    "pairs_youth_sp":     { label:"Pairs Youth - Short Program", rows:7, category:"pairs_youth" },
    "pairs_youth_fp":     { label:"Pairs Youth - Kür", rows:10, category:"pairs_youth" },
    // --- Pairs Junior ---
    "pairs_junior_sp":    { label:"Pairs Junior - Short Program", rows:8, category:"pairs_junior" },
    "pairs_junior_fp":    { label:"Pairs Junior - Kür", rows:11, category:"pairs_junior" },
    // --- Pairs Senior ---
    "pairs_senior_sp":    { label:"Pairs Senior - Short Program", rows:8, category:"pairs_senior" },
    "pairs_senior_fp":    { label:"Pairs Senior - Kür", rows:11, category:"pairs_senior" },
  };

  // ============================================================
  //  BONUS DEFINITIONS (Training Simulator)
  // ============================================================
  const JUMP_BONUSES = [
    {id:"halfProg",label:"Nach halber Programmlänge",pct:0.10,cat:"jump"},
    {id:"lutzNoEdge",label:"Lutz No Edge (70%)",pct:-0.30,cat:"jump",isOverride:true},
    {id:"saved",label:"Gerettete Kombi (50%)",pct:-0.50,cat:"jump",isOverride:true},
  ];
  const COMBO_JUMP_BONUSES = [
    {id:"dd",label:"Doppel+Doppel (+10%)",pct:0.10,cat:"combo"},
    {id:"dt",label:"Doppel+Dreifach (+20%)",pct:0.20,cat:"combo"},
    {id:"tt",label:"Dreifach+Dreifach (+30%)",pct:0.30,cat:"combo"},
  ];
  const SPIN_POS_BONUSES = [
    {id:"UB",label:"Biellmann (+80%)",pct:0.80},{id:"UBH",label:"Biellmann Heel (+40%)",pct:0.40},
    {id:"US",label:"Split (+40%)",pct:0.40},{id:"UT",label:"Torso (+50%)",pct:0.50},
    {id:"UL",label:"Layback (+30%)",pct:0.30},{id:"UF",label:"Forward (+20%)",pct:0.20},
    {id:"UH",label:"Heel (+20%)",pct:0.20},{id:"SS_pos",label:"Sit Sideways (+60%)",pct:0.60},
    {id:"ST",label:"Sit Twist (+40%)",pct:0.40},{id:"SF",label:"Sit Forward (+50%)",pct:0.50},
    {id:"SB_pos",label:"Sit Behind (+20%)",pct:0.20},{id:"CF_pos",label:"Camel Forward (+40%)",pct:0.40},
    {id:"CS_pos",label:"Camel Sideways (+60%)",pct:0.60},{id:"CL",label:"Camel Layover (+20%)",pct:0.20},
    {id:"BF",label:"Broken Forward (+40%)",pct:0.40},{id:"BS",label:"Broken Sideways (+60%)",pct:0.60},
    {id:"HF",label:"Heel Forward (+40%)",pct:0.40},{id:"HS",label:"Heel Sideways (+60%)",pct:0.60},
    {id:"HL",label:"Heel Layover (+20%)",pct:0.20},{id:"IB",label:"Inverted Bryant (+25%)",pct:0.25},
    {id:"SV",label:"Standard Variation (+20%)",pct:0.20},
  ];
  const SPIN_VAR_BONUSES = [
    {id:"DE",label:"Difficult Entry (+15%)",pct:0.15},{id:"DC",label:"Difficult Change (+15%)",pct:0.15},
    {id:"SBC",label:"Sit Betw. Camel (+15%)",pct:0.15},{id:"R6",label:"Revolutions 6+ (+20%)",pct:0.20},
    {id:"R4",label:"Rev. 4+ inv. (+20%)",pct:0.20},{id:"BD",label:"Both Directions (+15%)",pct:0.15},
    {id:"DF_var",label:"Different Feet (+20%)",pct:0.20},
  ];
  const ALL_BONUSES = [...JUMP_BONUSES,...COMBO_JUMP_BONUSES,...SPIN_POS_BONUSES,...SPIN_VAR_BONUSES];

  // ============================================================
  //  HELPERS
  // ============================================================
  const GOE_KEYS=["3","2","1","m1","m2","m3"];
  const GOE_LABELS=["+3","+2","+1","-1","-2","-3"];
  const GOE_COLORS=["#16a34a","#22c55e","#DEE2E6","#fca5a5","#ef4444","#dc2626"];

  const getBase = (el, isCombo, rotation) => {
    if (!el) return 0;
    if (isCombo && el.combo !== undefined) {
      if (rotation==="lt") return el.comboLt||0;
      if (rotation==="ltlt") return el.comboLtLt||0;
      return el.combo;
    }
    if (el.lt !== undefined) {
      if (rotation==="lt") return el.lt||0;
      if (rotation==="ltlt") return el.ltlt||0;
    }
    return el.base;
  };
  const getGoe = (el, gi) => {
    if (!el||gi===null||gi===undefined) return 0;
    return Object.values(el.goe)[gi]||0;
  };

  // Per-judge GOE: convert integer GOE (-3..+3) to point value
  const getGoePoints = (el, goeInt) => {
    if (!el || goeInt===0 || goeInt===null || goeInt===undefined) return 0;
    if (goeInt>0) return el.goe[goeInt]||0;
    return el.goe["m"+Math.abs(goeInt)]||0;
  };

  // Calculate averaged GOE from judge scores (trimmed mean for 5 judges)
  const calcJudgeGoe = (el, judgeScores, jCount) => {
    if (!el || !Array.isArray(judgeScores) || !jCount || jCount <= 0) return 0;
    const scores = judgeScores.slice(0, jCount).map(g => (typeof g === 'number' && !isNaN(g)) ? g : 0);
    if (scores.every(g=>g===0)) return 0;
    const points = scores.map(g => getGoePoints(el, g));
    if (jCount===5) {
      const sorted = [...points].sort((a,b)=>a-b);
      const trimmed = sorted.slice(1,4);
      return Math.round((trimmed.reduce((s,v)=>s+v,0)/3)*100)/100;
    }
    return Math.round((points.reduce((s,v)=>s+v,0)/jCount)*100)/100;
  };

  // Calculate averaged PCS from judge scores (trimmed mean for 5)
  const calcPcsAvg = (scores, jCount) => {
    if (!Array.isArray(scores) || !jCount || jCount <= 0) return 0;
    // Sanitize: must be number, not NaN, and in valid PCS range 0-10
    const s = scores.slice(0, jCount).map(v => {
      if (typeof v !== 'number' || isNaN(v) || v < 0 || v > 10) return 0;
      return v;
    });
    if (s.every(v=>v===0)) return 0;
    if (jCount===5) {
      const sorted = [...s].sort((a,b)=>a-b);
      const avg = sorted.slice(1,4).reduce((a,v)=>a+v,0)/3;
      return isNaN(avg) ? 0 : Math.round(avg*100)/100;
    }
    const avg = s.reduce((a,v)=>a+v,0)/jCount;
    return isNaN(avg) ? 0 : Math.round(avg*100)/100;
  };

  // Program Component definitions
  const PCS_COMPONENTS = [
    { key:"skating", label:"Skating Skills" },
    { key:"transitions", label:"Transitions/Linking Footwork" },
    { key:"performance", label:"Performance/Execution" },
    { key:"choreography", label:"Choreography/Composition" },
  ];

  // PCS factor per segment
  // PCS factor per segment + gender (World Skate 2026 Artistic Impression regulation pp.3-4)
  // geschlecht: "damen" | "herren" (only matters for Cadet+ FP singles)
  // Offizielle Bewertungs-Obergrenzen (Artistic Impression 2026): Senior 10.0, Junior 9.0,
  // Youth 8.0, Cadet/Espoir/Minis/Tots 7.0
  const getPcsMax = (segment) => {
    if (!segment) return 10;
    if (segment.includes("senior")) return 10;
    if (segment.includes("junior")) return 9;
    if (segment.includes("youth") || segment.includes("jeunesse")) return 8;
    return 7;
  };
  const getPcsFactor = (segment, geschlecht) => {
    // Pairs: own factors (same for ladies & men pairs)
    if (segment.startsWith("pairs_")) {
      const f = {"pairs_tots_fp":0.8,"pairs_minis_fp":0.8,
        "pairs_espoirs_sp":0.8,"pairs_espoirs_fp":1.0,
        "pairs_cadets_sp":1.0,"pairs_cadets_fp":1.4,
        "pairs_youth_sp":1.0,"pairs_youth_fp":1.4,
        "pairs_junior_sp":1.0,"pairs_junior_fp":1.8,
        "pairs_senior_sp":1.0,"pairs_senior_fp":1.8};
      return f[segment] || 0.8;
    }
    // Tots & Minis: always 0.8 (no SP, FP only)
    if (segment==="tots_fp"||segment==="minis_fp") return 0.8;
    // Espoir: SP 0.8, FP 1.0 (same for ladies & men)
    if (segment==="espoirs_sp") return 0.8;
    if (segment==="espoirs_fp") return 1.0;
    // Cadet through Senior: SP always 1.0, FP differs by gender
    if (segment.endsWith("_sp")) return 1.0;
    const h = geschlecht==="herren";
    const fpFactors = {
      "cadets_fp": h?1.4:1.2,     // Herren 1.4, Damen 1.2
      "jeunesse_fp": h?1.6:1.4,   // Herren 1.6, Damen 1.4
      "junior_fp": h?1.8:1.6,     // Herren 1.8, Damen 1.6
      "senior_fp": h?1.8:1.6,     // Herren 1.8, Damen 1.6
    };
    return fpFactors[segment] || 0.8;
  };

  // ============================================================
  //  COMPUTE ROW SCORE (handles combos)
  // ============================================================
  const computeRow = (row, types, jCount) => {
    const typeDef = types.find(t=>t.code===row.typeCode);
    if (!typeDef) return { base:0, goeVal:0, score:0, mainEl:null, typeDef:null };

    // No Value → everything is 0
    if (row.nv) {
      if (typeDef.isCombo) {
        const subs = row.comboEls || [];
        const bestEl = subs.reduce((best, sub) => {
          const el = typeDef.data.find(e=>e.code===sub.code);
          return el && (!best || el.base > best.base) ? el : best;
        }, null);
        return { base:0, goeVal:0, score:0, mainEl:bestEl, typeDef };
      }
      const el = typeDef.data.find(e=>e.code===row.elCode);
      return { base:0, goeVal:0, score:0, mainEl:el||null, typeDef };
    }

    // Downgrade (<<<) – offizielle Regel 2026 (Free Skating Rules, "Downgraded jump"):
    // Wert des Sprungs mit EINER Rotation weniger (z. B. 3S<<< = Wert 2S); kein Bonus.
    // Für Nicht-Sprung-Elemente bleibt das bisherige 50%-Verhalten.
    const dgBase = (el2, inCombo, rotation) => {
      const m2 = el2 && el2.code ? el2.code.match(/^(\\d)([A-Za-z]+)$/) : null;
      if (m2 && el2.lt !== undefined) {
        const n2 = parseInt(m2[1], 10);
        if (n2 <= 1) return 0;
        const lower = (typeDef.data || []).find(x => x.code === (n2 - 1) + m2[2]);
        return lower ? getBase(lower, inCombo, rotation || "normal") : 0;
      }
      return getBase(el2, inCombo, rotation || "normal") * 0.5;
    };
    const dgFactor = 1; // Reduktion erfolgt elementgenau über dgBase (s. o.)

    if (typeDef.isCombo) {
      const subs = row.comboEls || [];
      const hasComboValues = typeDef.data.some(e=>e.combo!==undefined);
      let totalBase = 0;
      let totalGoe = 0;
      let bestEl = null;
      let bestBase = 0;
      subs.forEach(sub => {
        const el = typeDef.data.find(e=>e.code===sub.code);
        if (!el) return;
        if (!sub.nv) {
          const b = row.dg ? dgBase(el, hasComboValues, sub.rotation) : (hasComboValues ? getBase(el, true, sub.rotation) : el.base);
          totalBase += b;
          // Per-element GOE
          const subGoe = calcJudgeGoe(el, sub.judgeGoe||[0,0,0,0,0], jCount);
          totalGoe += subGoe;
        }
        const refBase = hasComboValues ? getBase(el, true, "normal") : el.base;
        if (!sub.nv && (!bestEl || refBase > bestBase)) { bestEl = el; bestBase = refBase; }
      });
      totalBase = Math.round(totalBase * dgFactor * 100) / 100;
      totalGoe = Math.round(totalGoe * 100) / 100;
      const score = (isNaN(totalBase)?0:totalBase) + (isNaN(totalGoe)?0:totalGoe);
      return { base:isNaN(totalBase)?0:totalBase, goeVal:isNaN(totalGoe)?0:totalGoe, score, mainEl:bestEl, typeDef };
    } else {
      const el = typeDef.data.find(e=>e.code===row.elCode);
      if (!el) return { base:0, goeVal:0, score:0, mainEl:null, typeDef };
      const base = Math.round((row.dg ? dgBase(el, false, row.rotation) : getBase(el, false, row.rotation)) * 100) / 100;
      const goeVal = calcJudgeGoe(el, row.judgeGoe, jCount);
      const safeBase = isNaN(base)?0:base, safeGoe = isNaN(goeVal)?0:goeVal;
      return { base:safeBase, goeVal:safeGoe, score:safeBase+safeGoe, mainEl:el, typeDef };
    }
  };

  // ============================================================
  //  ELEMENT ROW
  // ============================================================
  const SEL = { padding:"5px 6px", borderRadius:5, border:"1px solid #d1d5db", fontSize:12, background:"white", cursor:"pointer" };
  const BTN = (active, color) => ({
    padding:"2px 7px", borderRadius:4, border:active?\`2px solid \${color}\`:"1px solid #d1d5db",
    background:active?color:"#f9fafb", color:active?"white":"#9ca3af",
    fontSize:10, fontWeight:600, cursor:"pointer", lineHeight:1.3,
  });

  // Sub-row for a single element inside a combo (jumps or lifts)
  function ComboSubRow({ idx, sub, data, hasComboValues, hasRotation, onChange, onRemove, judgeCount }) {
    const el = data.find(e=>e.code===sub.code);
    const isJumpCombo = hasComboValues && el && el.combo !== undefined;
    const rawBase = el ? (isJumpCombo ? getBase(el, true, sub.rotation) : el.base) : 0;
    const base = sub.nv ? 0 : rawBase;
    const showRot = hasRotation && el && (el.comboLt>0 || el.lt>0);
    const subGoe = el && !sub.nv ? calcJudgeGoe(el, sub.judgeGoe||[0,0,0,0,0], judgeCount) : 0;

    return (
      <div style={{ display:"flex", gap:4, alignItems:"center", padding:"3px 0", opacity:sub.nv?0.5:1, flexWrap:"wrap" }}>
        <span style={{ fontSize:10, color:"#6b7280", width:18, textAlign:"right" }}>{idx+1}.</span>
        <select value={sub.code} onChange={e=>onChange({...sub,code:e.target.value,rotation:"normal",judgeGoe:[0,0,0,0,0]})} style={{...SEL, flex:1, minWidth:120, fontSize:11}}>
          <option value="">-- Element --</option>
          {data.map(e=><option key={e.code} value={e.code}>{e.code} - {e.name} ({isJumpCombo && e.combo !== undefined ? "C:"+e.combo : e.base})</option>)}
        </select>
        {showRot ? (
          <div style={{display:"flex",gap:1}}>
            <button onClick={()=>onChange({...sub,rotation:"normal"})} style={BTN(sub.rotation==="normal","#6b7280")}>N</button>
            <button onClick={()=>onChange({...sub,rotation:"lt"})} style={BTN(sub.rotation==="lt","#f59e0b")}>&lt;</button>
            <button onClick={()=>onChange({...sub,rotation:"ltlt"})} style={BTN(sub.rotation==="ltlt","#ef4444")}>&lt;&lt;</button>
          </div>
        ) : null}
        {el && <button onClick={()=>onChange({...sub, nv:!sub.nv})} style={{...BTN(sub.nv,"#dc2626"), fontSize:9, minWidth:22, padding:"2px 3px"}}>NV</button>}
        <span style={{ fontSize:11, fontWeight:700, color:sub.nv?"#dc2626":"#059669", minWidth:40, textAlign:"right",
          textDecoration:sub.nv?"line-through":"none" }}>{el?base.toFixed(2):"-"}</span>
        {/* Per-judge GOE for this sub-element */}
        {el && !sub.nv && (
          <div style={{display:"flex",gap:2,alignItems:"center",marginLeft:4}}>
            <span style={{fontSize:9,color:"#9ca3af",fontWeight:600}}>QOE:</span>
            {Array.from({length:judgeCount}).map((_,ji)=>{
              const jg = sub.judgeGoe||[0,0,0,0,0];
              return <select key={ji} value={jg[ji]||0} onChange={e=>{
                const ng=[...(sub.judgeGoe||[0,0,0,0,0])];
                ng[ji]=parseInt(e.target.value);
                onChange({...sub,judgeGoe:ng});
              }} style={{...SEL,width:36,fontSize:10,padding:"2px 0",textAlign:"center",
                color:jg[ji]>0?"#059669":jg[ji]<0?"#dc2626":"#6b7280",fontWeight:600}}>
                {[-3,-2,-1,0,1,2,3].map(v=><option key={v} value={v}>{v>0?"+"+v:v}</option>)}
              </select>;
            })}
            <span style={{fontSize:10,fontWeight:700,color:subGoe>=0?"#059669":"#dc2626",minWidth:35,textAlign:"right"}}>
              {(subGoe>=0?"+":"")+subGoe.toFixed(2)}
            </span>
          </div>
        )}
        <button onClick={onRemove} style={{ background:"#fee2e2", color:"#dc2626", border:"none", borderRadius:3, padding:"1px 5px", fontSize:10, fontWeight:700, cursor:"pointer" }}>x</button>
      </div>
    );
  }

  function ElementRow({ num, row, types, onChange, judgeCount, totalRows, segment }) {
    const { base, goeVal, score, mainEl, typeDef } = computeRow(row, types, judgeCount);
    const isCombo = typeDef?.isCombo;
    const [showBonus,setShowBonus]=React.useState(false);

    // Bonus calculation (mirrors useMemo in Calculator but per-row)
    const bonuses=row.bonuses||[];
    let bonusPct=0,hasOverride=false,overrideFactor=1;
    bonuses.forEach(bid=>{const b=ALL_BONUSES.find(x=>x.id===bid);if(!b)return;if(b.isOverride){hasOverride=true;overrideFactor=1+b.pct;}else bonusPct+=b.pct;});
    const adjBase=row.nv?0:row.dg?base:hasOverride?Math.round(base*overrideFactor*100)/100:bonusPct!==0?Math.round(base*(1+bonusPct)*100)/100:base;
    const bonusPoints=Math.round((adjBase-base)*100)/100;
    const adjScore=row.nv?0:Math.round((adjBase+goeVal)*100)/100;

    // Determine applicable bonuses — split into categories for UI
    const isJump=typeDef&&["SJu","CoJ"].includes(typeDef.code);
    const isSpin=typeDef&&["CSp","SSp","CtSp"].includes(typeDef.code);
    let applicableBonuses=[];
    if(isJump){applicableBonuses=[...JUMP_BONUSES];if(isCombo)applicableBonuses=[...applicableBonuses,...COMBO_JUMP_BONUSES];}
    if(isSpin)applicableBonuses=[...SPIN_POS_BONUSES,...SPIN_VAR_BONUSES];
    const hasApplicable=applicableBonuses.length>0;

    // For non-combo: rotation display (moved up so bonusExpanded can reference hasElements)
    const el = !isCombo && typeDef ? typeDef.data.find(e=>e.code===row.elCode) : null;
    const showRotation = !isCombo && typeDef?.hasRotation && el && (el.lt!==undefined && el.lt>0);
    const hasElements = isCombo ? (row.comboEls||[]).some(s=>s.code) : !!el;
    const hasScore = isCombo ? !!typeDef : !!el;

    // Spins: auto-show bonus row when element is selected (positions are essential)
    const bonusExpanded=isSpin?(hasElements&&!row.nv):showBonus;

    // Auto-detect hints
    const halfPoint=Math.ceil((totalRows||13)/2);
    const isSecondHalf=num>halfPoint;
    const hasHalfBonus=bonuses.includes("halfProg");
    // Detect double-double combo
    const hasDDCombo=isCombo&&(row.comboEls||[]).filter(s=>{
      const elc=typeDef?.data?.find(e=>e.code===s.code);
      return elc&&/^2/.test(elc.code);
    }).length>=2;
    const hasDDBonus=bonuses.includes("dd");

    const toggleBonus=(bid)=>{
      const cur=row.bonuses||[];
      if(cur.includes(bid)){onChange({...row,bonuses:cur.filter(x=>x!==bid)});}
      else{
        const b=ALL_BONUSES.find(x=>x.id===bid);
        const nb=b&&b.isOverride?cur.filter(id=>{const o=ALL_BONUSES.find(x=>x.id===id);return !o||!o.isOverride;}):[...cur];
        nb.push(bid);onChange({...row,bonuses:nb});
      }
    };

    // Add/update combo sub-elements
    const updateSub = (i, sub) => {
      const subs = [...(row.comboEls||[])];
      subs[i] = sub;
      onChange({...row, comboEls:subs});
    };
    const addSub = () => {
      const subs = [...(row.comboEls||[])];
      if (subs.length < 5) { subs.push({code:"",rotation:"normal",nv:false,judgeGoe:[0,0,0,0,0],_id:Math.random().toString(36).slice(2)}); onChange({...row, comboEls:subs}); }
    };
    const removeSub = (i) => {
      const subs = (row.comboEls||[]).filter((_,j)=>j!==i);
      onChange({...row, comboEls:subs});
    };

    return (<>
      <tr style={{ borderBottom:bonusExpanded?"none":"1px solid #e5e7eb", background: bonuses.length>0?"#f0f7ff":hasScore?"white":"#fafafa", verticalAlign:"top" }}>
        <td style={{ padding:"8px 6px", fontWeight:700, color:"#059669", fontSize:15, textAlign:"center", width:32 }}>{num}</td>

        {/* Type Code */}
        <td style={{ padding:"8px 4px" }}>
          <select value={row.typeCode} onChange={e=>{
            const newType = types.find(t=>t.code===e.target.value);
            const nr = { typeCode:e.target.value, elCode:"", judgeGoe:[0,0,0,0,0], rotation:"normal", comboEls:[], nv:false, dg:false };
            if (newType?.isCombo) nr.comboEls = [{code:"",rotation:"normal",nv:false,judgeGoe:[0,0,0,0,0],_id:Math.random().toString(36).slice(2)},{code:"",rotation:"normal",nv:false,judgeGoe:[0,0,0,0,0],_id:Math.random().toString(36).slice(2)}];
            onChange(nr);
          }} style={{...SEL, width:"100%", minWidth:90, fontWeight:600}}>
            <option value="">---</option>
            {types.map(t=><option key={t.code} value={t.code}>{t.code} - {t.label}</option>)}
          </select>
        </td>

        {/* Element / Combo sub-elements */}
        <td style={{ padding:"8px 4px" }} colSpan={isCombo ? 2 : 1}>
          {isCombo ? (
            <div>
              {(row.comboEls||[]).map((sub,i) => (
                <ComboSubRow key={sub._id||i} idx={i} sub={sub} data={typeDef.data}
                  hasComboValues={typeDef.data.some(e=>e.combo!==undefined)}
                  hasRotation={!!typeDef.hasRotation}
                  onChange={s=>updateSub(i,s)} onRemove={()=>removeSub(i)}
                  judgeCount={judgeCount} />
              ))}
              {(row.comboEls||[]).length < 5 && (
                <button onClick={addSub} style={{ marginTop:2, padding:"2px 8px", borderRadius:3, border:"1px dashed #059669", background:"#f0f1f2", color:"#059669", fontSize:10, fontWeight:600, cursor:"pointer" }}>
                  + Element hinzufügen
                </button>
              )}
            </div>
          ) : (
            <select value={row.elCode} onChange={e=>onChange({...row, elCode:e.target.value, judgeGoe:[0,0,0,0,0]})} disabled={!typeDef} style={{...SEL, width:"100%", minWidth:150}}>
              <option value="">-- Element --</option>
              {typeDef && typeDef.data.map(e=><option key={e.code} value={e.code}>{e.code} - {e.name} ({e.base})</option>)}
            </select>
          )}
        </td>

        {/* Rotation (non-combo only) */}
        {!isCombo && (
          <td style={{ padding:"8px 4px", textAlign:"center", whiteSpace:"nowrap" }}>
            {showRotation ? (
              <div style={{ display:"flex", gap:2, justifyContent:"center" }}>
                <button onClick={()=>onChange({...row, rotation:"normal"})} style={BTN(row.rotation==="normal","#6b7280")}>N</button>
                <button onClick={()=>onChange({...row, rotation:"lt"})} style={BTN(row.rotation==="lt","#f59e0b")}>&lt;</button>
                <button onClick={()=>onChange({...row, rotation:"ltlt"})} style={BTN(row.rotation==="ltlt","#ef4444")}>&lt;&lt;</button>
              </div>
            ) : <span style={{color:"#d1d5db",fontSize:11}}>-</span>}
          </td>
        )}

        {/* Base */}
        {/* Base — shows adjusted value if bonus active */}
        <td style={{ padding:"8px 6px", fontWeight:700, fontSize:13, color:"#059669", textAlign:"right", width:60 }}>
          {hasElements ? (
            bonusPoints!==0 ? (
              <div>
                <div style={{textDecoration:"line-through",fontSize:10,color:"#9ca3af",lineHeight:1}}>{base.toFixed(2)}</div>
                <div>{adjBase.toFixed(2)}</div>
              </div>
            ) : base.toFixed(2)
          ) : "-"}
        </td>

        {/* Per-judge GOE */}
        {Array.from({length:judgeCount}).map((_,ji)=>(
          <td key={ji} style={{ padding:"8px 2px", textAlign:"center", width:38 }}>
            {isCombo && hasScore ? (
              <span style={{color:"#9ca3af",fontSize:8,lineHeight:1}}>&#8593;</span>
            ) : hasScore ? (
              <select value={(row.judgeGoe||[])[ji]||0} onChange={e=>{
                const jg=[...(row.judgeGoe||[0,0,0,0,0])];
                jg[ji]=parseInt(e.target.value);
                onChange({...row, judgeGoe:jg});
              }} style={{...SEL, width:42, fontSize:11, padding:"3px 1px", textAlign:"center",
                color:(row.judgeGoe||[])[ji]>0?"#059669":(row.judgeGoe||[])[ji]<0?"#dc2626":"#6b7280",
                fontWeight:600}}>
                {[-3,-2,-1,0,1,2,3].map(v=><option key={v} value={v}>{v>0?"+"+v:v}</option>)}
              </select>
            ) : <span style={{color:"#d1d5db",fontSize:10}}>-</span>}
          </td>
        ))}

        {/* GOE value (averaged) */}
        <td style={{ padding:"8px 4px", fontSize:11, color:goeVal>=0?"#059669":"#dc2626", fontWeight:700, textAlign:"right", width:50 }}>
          {hasElements ? (goeVal>=0?"+":"")+goeVal.toFixed(2) : ""}
        </td>

        {/* NV / DG / Bonus toggle */}
        <td style={{ padding:"8px 4px", textAlign:"center", whiteSpace:"nowrap" }}>
          {hasScore ? (
            <div style={{ display:"flex", gap:2, justifyContent:"center", flexWrap:"wrap" }}>
              <button onClick={()=>onChange({...row, nv:!row.nv, dg:row.nv?row.dg:false})}
                style={{...BTN(row.nv,"#dc2626"), fontSize:9, minWidth:24, padding:"2px 4px"}}>NV</button>
              <button onClick={()=>onChange({...row, dg:!row.dg, nv:row.dg?row.nv:false})}
                style={{...BTN(row.dg,"#f59e0b"), fontSize:9, minWidth:24, padding:"2px 4px"}}>DG</button>
              {isJump&&hasApplicable&&!row.nv&&(
                <button onClick={()=>setShowBonus(!showBonus)}
                  style={{...BTN(bonuses.length>0||showBonus,"#3b82f6"), fontSize:9, minWidth:24, padding:"2px 4px",
                    position:"relative"}}>
                  %{bonuses.length>0&&<span style={{position:"absolute",top:-4,right:-4,background:"#3b82f6",color:"white",
                    borderRadius:8,fontSize:7,width:12,height:12,display:"flex",alignItems:"center",justifyContent:"center",
                    fontWeight:800}}>{bonuses.length}</span>}
                </button>
              )}
            </div>
          ) : <span style={{color:"#d1d5db",fontSize:10}}>-</span>}
        </td>

        {/* Score — uses bonus-adjusted value */}
        <td style={{ padding:"8px 8px", fontWeight:800, fontSize:15,
          color:row.nv?"#dc2626":hasElements?(adjScore>=0?"#059669":"#dc2626"):"#d1d5db",
          textAlign:"right", width:65,
          textDecoration:row.nv?"line-through":"none", opacity:row.nv?0.5:1 }}>
          {hasElements ? adjScore.toFixed(2) : "-"}
          {bonusPoints!==0&&!row.nv&&(
            <div style={{fontSize:9,color:bonusPoints>0?"#3b82f6":"#dc2626",fontWeight:600}}>
              {bonusPoints>0?"+":""}{bonusPoints.toFixed(2)}
            </div>
          )}
        </td>
      </tr>
      {/* Bonus/Position expansion row */}
      {bonusExpanded&&hasApplicable&&!row.nv&&(
        <tr style={{background:isSpin?"#fafbff":"#f8fafc",borderBottom:"1px solid #e5e7eb"}}>
          <td colSpan={7+judgeCount} style={{padding:"4px 10px 6px 40px"}}>
            {isSpin ? (
              /* Spin: Positionen + Variationen als zwei Gruppen */
              <div>
                <div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center",marginBottom:4}}>
                  <span style={{fontSize:10,fontWeight:700,color:"#1d4ed8",marginRight:2,minWidth:70}}>Positionen:</span>
                  {SPIN_POS_BONUSES.map(b=>(
                    <button key={b.id} onClick={()=>toggleBonus(b.id)}
                      style={{padding:"2px 7px",borderRadius:10,border:bonuses.includes(b.id)?"2px solid #3b82f6":"1px solid #d1d5db",
                        background:bonuses.includes(b.id)?"#dbeafe":"white",color:bonuses.includes(b.id)?"#1d4ed8":"#6b7280",
                        fontSize:9,fontWeight:600,cursor:"pointer",lineHeight:1.3}}>
                      {b.label}
                    </button>
                  ))}
                </div>
                <div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center"}}>
                  <span style={{fontSize:10,fontWeight:700,color:"#7c3aed",marginRight:2,minWidth:70}}>Variationen:</span>
                  {SPIN_VAR_BONUSES.map(b=>(
                    <button key={b.id} onClick={()=>toggleBonus(b.id)}
                      style={{padding:"2px 7px",borderRadius:10,border:bonuses.includes(b.id)?"2px solid #7c3aed":"1px solid #d1d5db",
                        background:bonuses.includes(b.id)?"#ede9fe":"white",color:bonuses.includes(b.id)?"#5b21b6":"#6b7280",
                        fontSize:9,fontWeight:600,cursor:"pointer",lineHeight:1.3}}>
                      {b.label}
                    </button>
                  ))}
                </div>
                {bonusPoints!==0&&(
                  <div style={{marginTop:3,fontSize:10,fontWeight:700,color:"#059669"}}>
                    Gesamt-Bonus: +{(bonusPct*100).toFixed(0)}% = {bonusPoints>0?"+":""}{bonusPoints.toFixed(2)} Punkte
                  </div>
                )}
              </div>
            ) : (
              /* Jumps: flat list */
              <div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center"}}>
                <span style={{fontSize:10,fontWeight:700,color:"#374151",marginRight:4}}>Bonus:</span>
                {applicableBonuses.map(b=>(
                  <button key={b.id} onClick={()=>toggleBonus(b.id)}
                    style={{padding:"2px 8px",borderRadius:10,border:bonuses.includes(b.id)?"2px solid #3b82f6":"1px solid #d1d5db",
                      background:bonuses.includes(b.id)?"#dbeafe":"white",color:bonuses.includes(b.id)?"#1d4ed8":"#6b7280",
                      fontSize:10,fontWeight:600,cursor:"pointer",lineHeight:1.4}}>
                    {b.label}
                  </button>
                ))}
                {isSecondHalf&&!hasHalfBonus&&(
                  <span style={{fontSize:9,color:"#f59e0b",fontWeight:600,marginLeft:4}}>
                    Tipp: Element {num} ist in der 2. Hälfte +10%
                  </span>
                )}
                {isCombo&&hasDDCombo&&!hasDDBonus&&(
                  <span style={{fontSize:9,color:"#f59e0b",fontWeight:600,marginLeft:4}}>
                    Tipp: Doppel+Doppel erkannt +10%
                  </span>
                )}
              </div>
            )}
          </td>
        </tr>
      )}
      </>
    );
  }

  // ============================================================
  //  OFFICIAL CONTENT SHEETS (World Skate 2026)
  // ============================================================
  const FREE_CODES=["CoJ","SJu","CSp","SSp","FoSq","ChSt"];
  const PAIRS_CODES=["CoJ","SJu","CSp","SSp","FoSq","ChSt","CLi","SLi","CtSp","DS","CS","Tw","Tj"];
  const SHEET_TYPES = {
    "sp_fp": { title:"FREESKATE SHORT & FREE CONTENT 2026", short:"SP+FP", sections:[
      {label:"SHORT PROGRAM",music:true,rows:7,codes:FREE_CODES},
      {label:"FREE PROGRAM",music:true,rows:9,codes:FREE_CODES},
    ]},
    "sp": { title:"SHORT PROGRAM CONTENT SHEET 2026", short:"SP", sections:[
      {label:"SHORT PROGRAM",music:true,rows:7,codes:FREE_CODES},
    ]},
    "fp9": { title:"FREE PROGRAM CONTENT SHEET 2026", short:"FP 9", sections:[
      {label:"FREE PROGRAM (9 Elements)",music:true,rows:9,codes:FREE_CODES},
    ]},
    "fp12": { title:"FREE PROGRAM CONTENT SHEET 2026", short:"FP 12", sections:[
      {label:"FREE PROGRAM (12 Elements)",music:true,rows:12,codes:FREE_CODES},
    ]},
    "pairs_sp_fp": { title:"PAIRS SHORT & FREE CONTENT 2026", short:"Pairs SP+FP", sections:[
      {label:"SHORT PROGRAM (Pairs)",music:true,rows:8,codes:PAIRS_CODES},
      {label:"FREE PROGRAM (Pairs)",music:true,rows:13,codes:PAIRS_CODES},
    ]},
    "pairs_sp": { title:"PAIRS SHORT PROGRAM CONTENT SHEET 2026", short:"Pairs SP", sections:[
      {label:"SHORT PROGRAM (Pairs)",music:true,rows:8,codes:PAIRS_CODES},
    ]},
    "pairs_fp": { title:"PAIRS FREE PROGRAM CONTENT SHEET 2026", short:"Pairs FP", sections:[
      {label:"FREE PROGRAM (Pairs)",music:true,rows:13,codes:PAIRS_CODES},
    ]},
  };

  // World Skate logo — loaded dynamically from logo.png (exact sk8info.org.au pattern)
  // Source: https://sk8info.org.au/content/logo.png (196x72px, white on transparent)
  let wsLogoData = null, wsLogoType = 'PNG', wsLogoAspect = 2.7222;
  (function(){
    const img = new Image();
    img.onload = function(){
      wsLogoAspect = img.naturalWidth / img.naturalHeight;
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      c.getContext('2d').drawImage(img, 0, 0);
      wsLogoData = c.toDataURL('image/png');
    };
    img.src = 'logo.png';
  })();

  // ============================================================
  //  SHARED World Skate PDF Utility — exact sk8info.org.au logic
  //  Used by both Content Sheets tab and Calculator exports
  // ============================================================
  const buildWorldSkatePDF = (opts) => {
    // opts: { title, name, category, fedLabel, clubName, music, sections:[{label,music,elements:[{time,code,performed,notes}]}] }
    // sections: array of {label:"SHORT PROGRAM"|"FREE PROGRAM", music:"...", elements:[...]}
    const {jsPDF}=window.jspdf;
    const doc=new jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:true});
    const W=210,ph=297;
    const isMulti=opts.sections.length>1;
    const m=isMulti?6:10;
    const cW=W-m*2;
    const san=(s)=>String(s).replace(/—/g,'-').replace(/–/g,'-').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/…/g,'...').replace(/•/g,'*').replace(/[^\\x20-\\x7E\\xA0-\\xFF]/g,'?');

    const NAVY=[21,101,192];
    const BLUE2=[25,118,210];

    // hdrBand — exact sk8info
    const hdrBand=(txt,y)=>{
      doc.setFillColor(...NAVY);
      doc.roundedRect(m,y,cW,11,2,2,"F");
      let tx=m+4;
      if(wsLogoData){try{const lh=9,lw=lh*wsLogoAspect;doc.addImage(wsLogoData,wsLogoType,m+2,y+1,lw,lh);tx=m+lw+4;}catch(e){}}
      doc.setFont("helvetica","bold");doc.setFontSize(13);
      doc.setTextColor(255,255,255);
      doc.text(san(txt),tx,y+7.5);
      doc.setTextColor(0,0,0);
      return y+13;
    };

    // bandRow — exact sk8info SP+FP separator
    const bandRow=(txt,y)=>{
      doc.setFillColor(...BLUE2);
      doc.rect(m,y,cW,7,"F");
      doc.setFont("helvetica","bold");doc.setFontSize(10);
      doc.setTextColor(255,255,255);
      doc.text(san(txt),W/2,y+5,{align:"center"});
      doc.setTextColor(0,0,0);
      return y+9;
    };

    // elemTable — exact sk8info autoTable
    const elemTable=(startY,elems,minH)=>{
      const bodyData=elems.map((el,i)=>[
        String(i+1),el.time||"",el.code||"",el.performed||"",el.notes||""
      ]);
      doc.autoTable({
        startY,margin:{left:m,right:m},tableWidth:cW,
        head:[[
          {content:"#",styles:{halign:"center",fontStyle:"bold",fillColor:BLUE2,textColor:255}},
          {content:"Time",styles:{fontStyle:"bold",fillColor:BLUE2,textColor:255}},
          {content:"Code",styles:{fontStyle:"bold",fillColor:BLUE2,textColor:255}},
          {content:"(Tech Panel)",styles:{fontStyle:"bold",fillColor:BLUE2,textColor:255}},
          {content:"Notes",styles:{fontStyle:"bold",fillColor:BLUE2,textColor:255}},
        ]],
        body:bodyData,theme:"grid",
        headStyles:{fontSize:9},
        bodyStyles:{fontSize:12,minCellHeight:minH,valign:"middle"},
        alternateRowStyles:{fillColor:[248,250,252]},
        columnStyles:{0:{cellWidth:12,halign:"center"},1:{cellWidth:22},2:{cellWidth:24},4:{cellWidth:52}},
      });
      return doc.lastAutoTable.finalY+5;
    };

    let y=isMulti?6:10;
    y=hdrBand(san(opts.title),y);

    // Info: NAME + CATEGORY
    doc.setFont("helvetica","bold");doc.setFontSize(9);
    doc.text("NAME:",m,y+4);
    doc.setFont("helvetica","normal");doc.text(san(opts.name||""),m+13,y+4);
    doc.setDrawColor(180);doc.line(m+13,y+4.5,m+90,y+4.5);
    doc.setFont("helvetica","bold");doc.text("CATEGORY:",m+95,y+4);
    doc.setFont("helvetica","normal");doc.text(san(opts.category||""),m+118,y+4);
    doc.line(m+118,y+4.5,W-m,y+4.5);
    doc.setDrawColor(0);
    y+=8;

    // Info: REPRESENTING/FEDERATION/CLUB
    doc.setFont("helvetica","bold");doc.setFontSize(9);
    doc.text(san((opts.fedLabel||"REPRESENTING").toUpperCase())+":",m,y+4);
    doc.setFont("helvetica","normal");doc.text(san(opts.clubName||""),m+26,y+4);
    doc.setDrawColor(180);doc.line(m+26,y+4.5,m+100,y+4.5);
    doc.setDrawColor(0);
    y+=isMulti?10:8;

    if(isMulti){
      // SP+FP: bandRow separators + per-section MUSIC
      opts.sections.forEach((sec)=>{
        y=bandRow(sec.label,y);
        doc.setFont("helvetica","bold");doc.setFontSize(9);
        doc.text("MUSIC:",m,y+4);
        doc.setFont("helvetica","normal");doc.text(san(sec.music||""),m+16,y+4);
        doc.setDrawColor(180);doc.line(m+16,y+4.5,W-m,y+4.5);
        doc.setDrawColor(0);
        y+=8;
        y=elemTable(y,sec.elements||[],12);
      });
    } else {
      // Single section: MUSIC + elemTable directly
      const sec=opts.sections[0];
      doc.setFont("helvetica","bold");doc.setFontSize(9);
      doc.text("MUSIC:",m,y+4);
      doc.setFont("helvetica","normal");doc.text(san(sec.music||opts.music||""),m+16,y+4);
      doc.setDrawColor(180);doc.line(m+16,y+4.5,W-m,y+4.5);
      doc.setDrawColor(0);
      y+=8;
      elemTable(y,sec.elements||[],22);
    }

    // Footer on all pages
    const totalPages=doc.internal.getNumberOfPages();
    for(let p=1;p<=totalPages;p++){
      doc.setPage(p);
      doc.setFontSize(7);doc.setTextColor(150,150,150);doc.setFont("helvetica","normal");
      doc.text("Generated by RollArt 2026 - World Skate Official Format",W/2,ph-8,{align:"center"});
    }

    return doc;
  };

  const CODE_LABELS = {CoJ:"Combination Jump",SJu:"Solo Jump",CSp:"Combination Spin",SSp:"Solo Spin",
    FoSq:"Footwork Sequence",ChSt:"Choreo Step Seq.",CLi:"Combination Lift",SLi:"Solo Lift",
    CtSp:"Contact Spin",DS:"Death Spiral",CS:"Camel Spiral",Tw:"Twist",Tj:"Throw Jump"};

  function OfficialSheetSection({section,sIdx,data,onChange}){
    const sec=data[sIdx]||{music:"",elements:Array.from({length:section.rows},()=>({time:"",code:"",notes:"",performed:""}))};
    const updateEl=(i,field,val)=>{
      const nSec={...sec,elements:sec.elements.map((el,j)=>j===i?{...el,[field]:val}:el)};
      onChange(sIdx,nSec);
    };
    const B="1px solid #000";
    const inputS={border:"none",outline:"none",width:"100%",fontSize:14,fontFamily:"Arial,sans-serif",padding:"2px 4px",background:"transparent"};
    const selS={border:"none",outline:"none",fontSize:14,fontFamily:"Arial,sans-serif",background:"transparent",cursor:"pointer",width:"100%",padding:"2px",fontWeight:700};

    return(
      <div style={{marginBottom:16}}>
        {/* Section header — gradient band matching sk8info original exactly */}
        <div style={{background:"linear-gradient(90deg,#1565c0,#1976d2)",padding:"7px 8px",textAlign:"center",fontWeight:700,fontSize:12,fontFamily:"Arial,sans-serif",letterSpacing:1.4,color:"white",textTransform:"uppercase"}}>
          ELEMENTS — {section.label.toUpperCase()}
        </div>
        {/* Column headers: # | TIME | CODE | (Tech Panel) | NOTES — 5 columns like original */}
        <table style={{width:"100%",borderCollapse:"collapse",tableLayout:"fixed"}}>
          <colgroup><col style={{width:36}}/><col style={{width:64}}/><col style={{width:80}}/><col/><col style={{width:140}}/></colgroup>
          <thead>
            <tr style={{background:"linear-gradient(90deg,#1565c0,#1976d2)"}}>
              <th style={{border:B,padding:"7px 8px",fontSize:11,fontWeight:700,fontFamily:"Arial,sans-serif",color:"white",textAlign:"center",letterSpacing:0.7,textTransform:"uppercase"}}>#</th>
              <th style={{border:B,padding:"7px 8px",fontSize:11,fontWeight:700,fontFamily:"Arial,sans-serif",color:"white",textAlign:"left",letterSpacing:0.7,textTransform:"uppercase"}}>Time</th>
              <th style={{border:B,padding:"7px 8px",fontSize:11,fontWeight:700,fontFamily:"Arial,sans-serif",color:"white",textAlign:"left",letterSpacing:0.7,textTransform:"uppercase"}}>Code</th>
              <th style={{border:B,padding:"7px 8px",fontSize:11,fontWeight:700,fontFamily:"Arial,sans-serif",color:"white",textAlign:"left",letterSpacing:0.7,textTransform:"uppercase"}}>(Tech Panel)</th>
              <th style={{border:B,padding:"7px 8px",fontSize:11,fontWeight:700,fontFamily:"Arial,sans-serif",color:"white",textAlign:"left",letterSpacing:0.7,textTransform:"uppercase"}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {sec.elements.map((el,i)=>(
              <tr key={i} style={{background:i%2===0?"#eceff1":"#f8fafc"}}>
                <td style={{border:B,padding:"10px 6px",textAlign:"center",fontWeight:700,fontSize:15,fontFamily:"Arial,sans-serif",background:i%2===0?"#eceff1":"#f8fafc"}}>{i+1}</td>
                <td style={{border:B,padding:"10px 6px",textAlign:"center",fontFamily:"Arial,sans-serif"}}>
                  <input value={el.time||""} onChange={e=>updateEl(i,"time",e.target.value)}
                    placeholder="0:00" maxLength={5} style={{...inputS,textAlign:"center",fontWeight:700}}/>
                </td>
                <td style={{border:B,padding:"10px 6px",fontFamily:"Arial,sans-serif"}}>
                  <select value={el.code||""} onChange={e=>updateEl(i,"code",e.target.value)} style={selS}>
                    <option value="">----</option>
                    {section.codes.map(c=><option key={c} value={c}>{c}</option>)}
                  </select>
                </td>
                <td style={{border:B,padding:"10px 6px",fontFamily:"Arial,sans-serif",color:"#9e9e9e",fontSize:12,fontStyle:"italic"}}>
                  <input value={el.performed||""} onChange={e=>updateEl(i,"performed",e.target.value)} placeholder="" style={{...inputS,color:"#9e9e9e",fontStyle:"italic"}}/>
                </td>
                <td style={{border:B,padding:"10px 6px",fontFamily:"Arial,sans-serif"}}>
                  <input value={el.notes||""} onChange={e=>updateEl(i,"notes",e.target.value)} placeholder="Optional notes..." style={inputS}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function OfficialSheets({onSendToContent,importFromContent}){
    const [sheetType,setSheetType]=useState("sp_fp");
    const [name,setName]=useState("");
    const [kategorie,setKategorie]=useState("senior");
    const [federation,setFederation]=useState("");
    const [clubName,setClubName]=useState("");
    const [choreography,setChoreography]=useState("");
    const sheet=SHEET_TYPES[sheetType];
    const [showLoadModal,setShowLoadModal]=useState(false);
    const [savedMsg,setSavedMsg]=useState("");

    // Per-section data
    const initSections=useCallback((st)=>{
      return SHEET_TYPES[st].sections.map(sec=>({music:"",elements:Array.from({length:sec.rows},()=>({time:"",code:"",notes:"",performed:""}))}));
    },[]);
    const [sections,setSections]=useState(initSections("sp_fp"));

    const changeSheet=(st)=>{setSheetType(st);setSections(initSections(st));};
    const updateSection=(sIdx,data)=>{setSections(prev=>prev.map((s,i)=>i===sIdx?data:s));};

    // ---- Content Sheet Save/Load (localStorage) ----
    const CS_STORAGE_KEY = "rollart_content_sheets";
    const getSavedSheets = () => {
      try { return JSON.parse(localStorage.getItem(CS_STORAGE_KEY) || "[]"); } catch { return []; }
    };
    const saveContentSheet = () => {
      const label = name.trim() || "Unbenannt";
      const catLabel = CATEGORY_DEFS[kategorie]?.label || kategorie;
      const entry = {
        id: Date.now(),
        label: label + " - " + catLabel + " (" + (SHEET_TYPES[sheetType]?.short||sheetType) + ")",
        name, kategorie, sheetType, federation, clubName, choreography, sections,
        savedAt: new Date().toISOString(),
      };
      const all = getSavedSheets();
      all.unshift(entry);
      localStorage.setItem(CS_STORAGE_KEY, JSON.stringify(all.slice(0, 50)));
      setSavedMsg("Gespeichert!");
      setTimeout(() => setSavedMsg(""), 2000);
    };
    const loadContentSheet = (entry) => {
      setName(entry.name || "");
      if (entry.kategorie && CATEGORY_DEFS[entry.kategorie]) {
        setKategorie(entry.kategorie);
      }
      setFederation(entry.federation || "");
      setClubName(entry.clubName || "");
      setChoreography(entry.choreography || "");
      if (entry.sheetType && SHEET_TYPES[entry.sheetType]) {
        setSheetType(entry.sheetType);
        if (entry.sections) {
          setSections(entry.sections);
        } else {
          setSections(initSections(entry.sheetType));
        }
      }
      setShowLoadModal(false);
    };
    const deleteContentSheet = (id) => {
      const all = getSavedSheets().filter(s => s.id !== id);
      localStorage.setItem(CS_STORAGE_KEY, JSON.stringify(all));
      setShowLoadModal(false);
      setTimeout(() => setShowLoadModal(true), 50);
    };

    // Auto-update sheetType when kategorie changes
    const changeKategorie=(k)=>{
      setKategorie(k);
      const catDef=CATEGORY_DEFS[k];
      if(catDef){
        const segs=catDef.segments||[];
        const isPairsKat=segs.some(s=>s.startsWith("pairs_"));
        const hasSP=segs.some(s=>s.endsWith("_sp"));
        const hasFP=segs.some(s=>s.endsWith("_fp"));
        let newSheetType;
        if(isPairsKat){
          if(hasSP&&hasFP) newSheetType="pairs_sp_fp";
          else if(hasSP) newSheetType="pairs_sp";
          else newSheetType="pairs_fp";
        } else {
          if(hasSP&&hasFP) newSheetType="sp_fp";
          else if(hasSP) newSheetType="sp";
          else {
            const fpSeg=segs.find(s=>s.endsWith("_fp"));
            const fpRows=SEGMENT_DEFS[fpSeg]?.rows||12;
            newSheetType=fpRows<=9?"fp9":"fp12";
          }
        }
        setSheetType(newSheetType);
        setSections(initSections(newSheetType));
      }
    };

    const handleSendToContent=()=>{
      if(onSendToContent){
        onSendToContent({name,kategorie,federation,choreography,sections});
      }
    };

    // Import from Content Sheet
    React.useEffect(()=>{
      if(!importFromContent)return;
      const d=importFromContent;
      // Set header fields
      if(d.skater)setName(d.skater);
      if(d.cat)setFederation(d.cat);
      if(d.music)setChoreography(d.music);

      // Determine sheet type and target section
      const seg=d.segment||"";
      const isPairs=seg.startsWith("pairs_");
      const isSP=seg.endsWith("_sp");
      const isFP=seg.endsWith("_fp");
      const kat=d.kategorie||"senior";
      setKategorie(kat);

      const catDef=CATEGORY_DEFS[kat];
      const segs=catDef?.segments||[];
      const hasSP=segs.some(s=>s.endsWith("_sp"));
      const hasFP=segs.some(s=>s.endsWith("_fp"));

      // Pick the right sheet type
      let newSt;
      if(isPairs){
        if(hasSP&&hasFP) newSt="pairs_sp_fp";
        else if(hasSP) newSt="pairs_sp";
        else newSt="pairs_fp";
      } else {
        if(hasSP&&hasFP) newSt="sp_fp";
        else if(hasSP) newSt="sp";
        else{
          // FP only — pick correct row count
          const fpSeg=segs.find(s=>s.endsWith("_fp"));
          const fpRows=SEGMENT_DEFS[fpSeg]?.rows||12;
          newSt=fpRows<=9?"fp9":"fp12";
        }
      }
      setSheetType(newSt);
      const newSections=initSections(newSt);

      // Determine which section index to fill (0=SP or only section, 1=FP if sp_fp)
      let targetIdx=0;
      if(newSt==="sp_fp"||newSt==="pairs_sp_fp"){
        targetIdx=isFP?1:0; // section 0=SP, section 1=FP
      }

      // Map rows: typeCode → code select, elCode → notes for reference
      if(d.rows&&newSections[targetIdx]){
        const filledRows=d.rows.filter(r=>r.typeCode||r.elCode);
        filledRows.forEach((r,i)=>{
          if(i<newSections[targetIdx].elements.length){
            newSections[targetIdx].elements[i]={
              time:"",
              code:r.typeCode||"", // Official Sheet uses type codes (CoJ, SJu, CSp, etc.)
              notes:r.elCode||"",  // Put specific element code in notes for reference
              performed:"",
            };
          }
        });
      }

      // Set music on the target section
      if(d.music&&newSections[targetIdx]) newSections[targetIdx].music=d.music;

      setSections(newSections);
    },[importFromContent,initSections]);

    // PDF export — uses shared buildWorldSkatePDF utility (exact sk8info.org.au logic)
    const exportPDF=()=>{
      const catLabel=CATEGORY_DEFS[kategorie]?.label||kategorie;
      const fedType=(federation&&federation!=="Representing")?federation:"REPRESENTING";
      const pdfSections=sheet.sections.map((sec,si)=>{
        const d=sections[si];
        const secLabel=sec.label.toUpperCase().includes("SHORT")?"SHORT PROGRAM":"FREE PROGRAM";
        return {label:secLabel,music:d?.music||choreography||"",elements:d?.elements||[]};
      });
      const doc=buildWorldSkatePDF({
        title:sheet.title.toUpperCase(),
        name:name||"",
        category:catLabel,
        fedLabel:fedType,
        clubName:clubName||"",
        music:choreography||"",
        sections:pdfSections,
      });
      doc.save(\`\${(name||"content").replace(/\\s+/g,"_")}_\${sheetType}_content.pdf\`);
    };

    // Save as TXT
    const saveTxt=()=>{
      const lines=[sheet.title,"",\`Name: \${name}\`,\`Category: \${CATEGORY_DEFS[kategorie]?.label||kategorie}\`,\`Federation: \${federation}\`,\`Club: \${clubName}\`,\`Choreography: \${choreography}\`,""];
      sheet.sections.forEach((sec,si)=>{
        const d=sections[si];
        lines.push(\`=== \${sec.label} ===\`);
        if(d?.music)lines.push(\`Music: \${d.music}\`);
        lines.push("Nr | Time  | Code | Notes");
        lines.push("-".repeat(50));
        (d?.elements||[]).forEach((el,i)=>{
          lines.push(\`\${String(i+1).padStart(2)} | \${(el.time||"").padEnd(5)} | \${(el.code||"").padEnd(4)} | \${el.notes||""}\`);
        });
        lines.push("");
      });
      const blob=new Blob([lines.join("\\n")],{type:"text/plain"});
      const a=document.createElement("a");a.href=URL.createObjectURL(blob);
      a.download=\`\${name||"content"}_\${sheetType}.txt\`;a.click();
    };

    // Restore from TXT
    const restoreTxt=(text)=>{
        const nm=text.match(/Name:\\s*(.+)/);if(nm)setName(nm[1].trim());
        const ct=text.match(/Category:\\s*(.+)/);if(ct){
          const catVal=ct[1].trim();
          const found=Object.entries(CATEGORY_DEFS).find(([k,v])=>v.label===catVal||k===catVal.toLowerCase());
          if(found)setKategorie(found[0]); else setKategorie(catVal);
        }
        const fd=text.match(/Federation:\\s*(.+)/);if(fd)setFederation(fd[1].trim());
        const cn=text.match(/Club:\\s*(.+)/);if(cn)setClubName(cn[1].trim());
        const ch=text.match(/Choreography:\\s*(.+)/);if(ch)setChoreography(ch[1].trim());
        // Parse sections
        const secBlocks=text.split(/===\\s*(.+?)\\s*===/);
        const newSections=[...sections];
        let secIdx=0;
        for(let b=1;b<secBlocks.length;b+=2){
          if(secIdx>=newSections.length)break;
          const block=secBlocks[b+1]||"";
          const mm=block.match(/Music:\\s*(.+)/);
          if(mm)newSections[secIdx]={...newSections[secIdx],music:mm[1].trim()};
          const lines=block.split("\\n").filter(l=>l.match(/^\\s*\\d+\\s*\\|/));
          const els=[...newSections[secIdx].elements];
          lines.forEach((line,i)=>{
            if(i>=els.length)return;
            const parts=line.split("|").map(p=>p.trim());
            if(parts.length>=3){
              els[i]={...els[i],time:parts[1]||"",code:parts[2]||"",notes:parts[3]||""};
            }
          });
          newSections[secIdx]={...newSections[secIdx],elements:els};
          secIdx++;
        }
        setSections(newSections);
    };

    // Import file (PDF or TXT)
    const importFile=async(e)=>{
      const file=e.target.files?.[0];if(!file)return;e.target.value="";
      if(file.name.toLowerCase().endsWith('.pdf')){
        // PDF import using pdf.js — reconstruct lines from text item positions
        try{
          const buf=await file.arrayBuffer();
          const pdf=await pdfjsLib.getDocument({data:buf}).promise;
          // Extract text with Y-positions to reconstruct lines
          const allLines=[];
          for(let p=1;p<=pdf.numPages;p++){
            const pg=await pdf.getPage(p);
            const tc=await pg.getTextContent();
            // Group items by Y position (rounded to nearest 2px) to form lines
            const yMap={};
            tc.items.forEach(it=>{
              if(!it.str.trim())return;
              const yKey=Math.round(it.transform[5]/2)*2; // Y pos, grouped
              if(!yMap[yKey])yMap[yKey]=[];
              yMap[yKey].push({x:it.transform[4],text:it.str});
            });
            // Sort by Y descending (PDF Y goes bottom-up), then X ascending within line
            const sortedYs=Object.keys(yMap).map(Number).sort((a,b)=>b-a);
            sortedYs.forEach(yy=>{
              const items=yMap[yy].sort((a,b)=>a.x-b.x);
              allLines.push(items.map(it=>it.text).join(" ").trim());
            });
          }
          const fullText=allLines.join("\\n");

          // Detect title — "FREE PROGRAM CONTENT SHEET" or "SHORT PROGRAM CONTENT SHEET"
          const titleLine=allLines.find(l=>/CONTENT\\s*SHEET/i.test(l))||"";
          const isFP=/FREE\\s*PROGRAM/i.test(titleLine);
          const isSP=/SHORT\\s*PROGRAM/i.test(titleLine);
          const isPairsTitle=/PAIR/i.test(titleLine);

          // Extract NAME
          const nmLine=allLines.find(l=>/^NAME:/i.test(l.trim()))||"";
          const nmMatch=nmLine.match(/NAME:\\s*(.+?)(?:\\s{2,}|CATEGORY|$)/i);
          if(nmMatch)setName(nmMatch[1].trim());

          // Extract CATEGORY and compute correct sheet type + sections
          const catLine=allLines.find(l=>/CATEGORY:/i.test(l))||nmLine;
          const ctMatch=catLine.match(/CATEGORY:\\s*(.+)/i);
          let detectedKat=null;
          if(ctMatch){
            let catVal=ctMatch[1].trim();
            // Remove gender suffix for matching
            const catBase=catVal.replace(/\\s*(Ladies|Men|Boys|Girls|Damen|Herren)$/i,"").trim().toLowerCase();
            // Also try with "pairs_" prefix if title says PAIRS but category doesn't
            // Put pairs variant FIRST when title indicates pairs (more specific)
            const candidates=[];
            if(isPairsTitle&&!catBase.startsWith("pairs"))candidates.push("pairs "+catBase);
            candidates.push(catBase);
            for(const cb of candidates){
              const cbKey=cb.replace(/\\s+/g,"_");
              // 1) Exact key match first (most reliable)
              if(CATEGORY_DEFS[cbKey]){detectedKat=cbKey;break;}
              // 2) Score-based match: prefer longest/most-specific match
              let bestMatch=null,bestScore=0;
              Object.entries(CATEGORY_DEFS).forEach(([k,v])=>{
                const lbl=v.label.toLowerCase();
                // Check if label starts with catBase or catBase starts with key
                if(lbl.startsWith(cb)||cb.startsWith(k.replace(/_/g," "))){
                  const score=k.length; // longer keys = more specific (pairs_minis > minis)
                  if(score>bestScore){bestScore=score;bestMatch=k;}
                }
              });
              if(bestMatch){detectedKat=bestMatch;break;}
            }
          }

          // Compute the correct sheetType based on detected category + SP/FP
          let newKat=detectedKat||kategorie;
          const catDef=CATEGORY_DEFS[newKat];
          const segs=catDef?.segments||[];
          const isPairsKat=segs.some(s=>s.startsWith("pairs_"));
          const hasSP=segs.some(s=>s.endsWith("_sp"));
          const hasFP=segs.some(s=>s.endsWith("_fp"));
          let newSt;
          if(isPairsKat){
            if(hasSP&&hasFP) newSt="pairs_sp_fp";
            else if(hasSP) newSt="pairs_sp";
            else newSt="pairs_fp";
          } else {
            if(hasSP&&hasFP) newSt="sp_fp";
            else if(hasSP) newSt="sp";
            else {
              const fpSeg=segs.find(s=>s.endsWith("_fp"));
              const fpRows=SEGMENT_DEFS[fpSeg]?.rows||12;
              newSt=fpRows<=9?"fp9":"fp12";
            }
          }

          // Apply category and sheet type synchronously
          setKategorie(newKat);
          setSheetType(newSt);
          // Build fresh sections for the NEW sheet type (not stale state!)
          const freshSections=initSections(newSt);

          // Extract FEDERATION
          const fdLine=allLines.find(l=>/^FEDERATION:/i.test(l.trim()))||"";
          const fdMatch=fdLine.match(/FEDERATION:\\s*(.+)/i);
          if(fdMatch)setFederation(fdMatch[1].trim());

          // Extract MUSIC (Content Sheets use "MUSIC:" not "CHOREOGRAPHY:")
          const muLine=allLines.find(l=>/^(?:MUSIC|CHOREOGRAPHY|Choreography):/i.test(l.trim()))||"";
          const muMatch=muLine.match(/(?:MUSIC|CHOREOGRAPHY|Choreography):\\s*(.+)/i);
          if(muMatch)setChoreography(muMatch[1].trim());

          // Extract elements: find lines that start with a number (1-20) followed by optional time + code
          // Known element type codes for artistic roller skating (singles + pairs)
          const validCodes=new Set(["CoJ","SJu","CSp","CSSp","FoSq","ChSt","TFSq","SLSt","CiSt","SeSt","DiSt",
            "USp","SSp","CaSp","CCoSp","FCCoSp","FCSp","FSSp","FCaSp","FUSp",
            "CoJ1","CoJ2","CoJ3","CoJ4","SJu1","SJu2","SJu3","SJu4",
            "CSpB","CSp1","CSp2","CSp3","CSp4","USpB","USp1","USp2","USp3","USp4",
            "SSpB","SSp1","SSp2","SSp3","SSp4","CaSpB","CaSp1","CaSp2","CaSp3","CaSp4",
            "FoSqB","FoSq1","FoSq2","FoSq3","FoSq4","ChStB","ChSt1","ChSt2","ChSt3","ChSt4",
            "TFSqB","TFSq1","TFSq2","TFSq3","TFSq4",
            "StB","St1","St2","St3","St4","SpB","Sp1","Sp2","Sp3","Sp4",
            // Pairs-specific codes
            "PCoJ","PSJu","PLi","PCSp","PTw","PDSp","PSoSp",
            "PLiB","PLi1","PLi2","PLi3","PLi4",
            "PTwB","PTw1","PTw2","PTw3","PTw4",
            "PDSpB","PDSp1","PDSp2","PDSp3","PDSp4",
            "PSoSpB","PSoSp1","PSoSp2","PSoSp3","PSoSp4"]);
          const parsedElements=[];
          for(const line of allLines){
            // Match: row number, optional time (m:ss), element code
            const rowMatch=line.match(/^\\s*(\\d{1,2})\\s+((\\d:\\d{2})\\s+)?([A-Z][A-Za-z]{1,6}\\d?)\\b/);
            if(rowMatch){
              const num=parseInt(rowMatch[1]);
              if(num>=1&&num<=20){
                const time=rowMatch[3]||"";
                const code=rowMatch[4]||"";
                const isValid=validCodes.has(code)||/^(CoJ|SJu|CSp|USp|SSp|CaSp|FoSq|ChSt|TFSq|PLi|PTw|PDSp|PSoSp|PCoJ|PSJu|PCSp|St|Sp|CSSp|CCoSp|FCCoSp|FCSp|FSSp|FCaSp|FUSp)/.test(code);
                if(isValid){
                  parsedElements.push({num,time,code,notes:""});
                }
              }
            }
          }

          // Fill into freshSections (correct size for detected category)
          if(parsedElements.length>0){
            // Determine target section: for sp_fp sheets, FP=section 1, SP=section 0
            let targetIdx=0;
            if((newSt==="sp_fp"||newSt==="pairs_sp_fp")&&isFP) targetIdx=1;
            if(targetIdx<freshSections.length){
              const els=freshSections[targetIdx].elements;
              parsedElements.forEach((pe,i)=>{
                if(i<els.length){
                  els[i]={...els[i],time:pe.time,code:pe.code,notes:pe.notes};
                }
              });
              if(muMatch) freshSections[targetIdx].music=muMatch[1].trim();
            }
          }
          setSections(freshSections);
          alert('PDF erfolgreich importiert!');
        }catch(err){
          alert('Fehler beim PDF-Import: '+err.message);
        }
      } else {
        // TXT import
        const reader=new FileReader();
        reader.onload=ev=>restoreTxt(ev.target.result);
        reader.readAsText(file);
      }
    };

    const codes=sheet.sections[0].codes;

    return(
      <div style={{padding:"16px 20px",maxWidth:900,margin:"0 auto"}}>
        {/* Sheet type selector */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          {Object.entries(SHEET_TYPES).map(([k,v])=>(
            <button key={k} onClick={()=>changeSheet(k)} style={{padding:"7px 16px",borderRadius:6,border:"none",fontSize:12,fontWeight:700,cursor:"pointer",
              background:sheetType===k?"#22221C":"#e5e7eb",color:sheetType===k?"white":"#374151"}}>{v.short||v.title.replace(" 2026","")}</button>
          ))}
        </div>

        {/* Kategorie selector */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          <label style={{fontWeight:600,fontSize:12}}>Kategorie:</label>
          <select value={kategorie} onChange={e=>changeKategorie(e.target.value)} style={{padding:"6px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12,background:"white",cursor:"pointer"}}>
            {Object.entries(CATEGORY_DEFS).map(([k,v])=>(
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        {/* Actions — grouped */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          {/* Save/Load Group */}
          <button onClick={saveContentSheet} style={{padding:"6px 14px",borderRadius:5,border:"none",background:"#3b82f6",color:"white",fontWeight:600,fontSize:11,cursor:"pointer"}}>Speichern</button>
          <button onClick={()=>setShowLoadModal(true)} style={{padding:"6px 14px",borderRadius:5,border:"none",background:"#10b981",color:"white",fontWeight:600,fontSize:11,cursor:"pointer"}}>Laden</button>
          {savedMsg && <span style={{fontSize:11,color:"#10b981",fontWeight:600}}>{savedMsg}</span>}
          <div style={{width:1,height:24,background:"#e5e7eb",margin:"0 2px",flexShrink:0}} />
          {/* Export Group */}
          <button onClick={()=>{if(!name.trim()){alert("Bitte Competitors Name eingeben!");return;}exportPDF();}} style={{padding:"6px 14px",borderRadius:5,border:"none",background:"#dc2626",color:"white",fontWeight:600,fontSize:11,cursor:"pointer"}}>PDF exportieren</button>
          <button onClick={saveTxt} style={{padding:"6px 14px",borderRadius:5,border:"none",background:"#22221C",color:"white",fontWeight:600,fontSize:11,cursor:"pointer"}}>TXT exportieren</button>
          <label style={{padding:"6px 14px",borderRadius:5,border:"1px solid #22221C",background:"#f0f1f2",color:"#22221C",fontWeight:600,fontSize:11,cursor:"pointer"}}>
            Importieren (PDF/TXT)
            <input type="file" accept=".pdf,.txt" onChange={importFile} style={{display:"none"}}/>
          </label>
          <div style={{width:1,height:24,background:"#e5e7eb",margin:"0 2px",flexShrink:0}} />
          <button onClick={handleSendToContent} style={{padding:"6px 14px",borderRadius:5,border:"none",background:"#22221C",color:"white",fontWeight:600,fontSize:11,cursor:"pointer"}}>
            An Calculator senden &#9654;
          </button>
          <button onClick={()=>{setName("");setKategorie("senior");setFederation("");setClubName("");setChoreography("");setSections(initSections(sheetType));}} style={{padding:"6px 14px",borderRadius:5,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontWeight:600,fontSize:11,cursor:"pointer"}}>Neu</button>
        </div>

        {/* Load Content Sheet Modal */}
        {showLoadModal && (()=>{
          const saved = getSavedSheets();
          return (
            <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,.5)",zIndex:10000,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setShowLoadModal(false)}>
              <div style={{background:"white",borderRadius:12,padding:24,maxWidth:560,width:"90%",maxHeight:"70vh",overflow:"auto",boxShadow:"0 20px 60px rgba(0,0,0,.3)"}} onClick={e=>e.stopPropagation()}>
                <h3 style={{margin:"0 0 16px",fontSize:18,fontWeight:700,color:"#22221C"}}>Gespeicherte Content Sheets</h3>
                {saved.length === 0 ? (
                  <p style={{color:"#6C757D",fontSize:13}}>Noch keine Content Sheets gespeichert.</p>
                ) : (
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {saved.map(entry => (
                      <div key={entry.id} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",border:"1px solid #e5e7eb",borderRadius:8,background:"#f8f9fa"}}>
                        <div style={{flex:1,cursor:"pointer"}} onClick={()=>loadContentSheet(entry)}>
                          <div style={{fontWeight:600,fontSize:13,color:"#22221C"}}>{entry.label}</div>
                          <div style={{fontSize:11,color:"#6C757D"}}>{new Date(entry.savedAt).toLocaleString("de-DE")}</div>
                        </div>
                        <button onClick={()=>deleteContentSheet(entry.id)} style={{padding:"4px 10px",borderRadius:4,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontSize:10,fontWeight:600,cursor:"pointer"}}>X</button>
                      </div>
                    ))}
                  </div>
                )}
                <button onClick={()=>setShowLoadModal(false)} style={{marginTop:16,padding:"8px 20px",borderRadius:6,border:"1px solid #DEE2E6",background:"white",fontWeight:600,fontSize:12,cursor:"pointer"}}>Schliessen</button>
              </div>
            </div>
          );
        })()}

        {/* Official Sheet — matching original sk8info.org.au World Skate template exactly */}
        <div id="official-sheet-print" className="r-table-wrap" style={{background:"white",border:"1px solid #ccc",overflow:"auto",boxShadow:"0 2px 8px rgba(0,0,0,.12)",maxWidth:820,margin:"0 auto"}}>
          {/* Header: gradient banner with World Skate logo + Title — exact sk8info style */}
          <div style={{background:"linear-gradient(135deg,#1565c0 0%,#1976d2 55%,#42a5f5 100%)",borderRadius:"8px 8px 0 0",padding:"10px 20px",display:"flex",alignItems:"center",gap:10}}>
            <img src="logo.png" alt="World Skate" style={{height:36,width:"auto",flexShrink:0}} />
            <h2 style={{margin:0,fontSize:"clamp(14px,3vw,20px)",fontWeight:800,fontFamily:"Arial,sans-serif",color:"white",flex:1,letterSpacing:0.5,textTransform:"uppercase"}}>
              {sheet.title}
            </h2>
          </div>

          {/* Competitor Info — matching sk8info original layout */}
          <div style={{padding:"12px 16px",fontFamily:"Arial,sans-serif"}}>
            {/* Row 1: NAME | CATEGORY */}
            <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:12,marginBottom:10}}>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:"#455a64",marginBottom:3,textTransform:"uppercase"}}>Competitors Name</div>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter name..."
                  style={{width:"100%",padding:"7px 10px",border:"1px solid #b0bec5",borderRadius:4,fontSize:14,fontFamily:"Arial,sans-serif",background:"white",boxSizing:"border-box",cursor:"text"}}/>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:"#455a64",marginBottom:3,textTransform:"uppercase"}}>Category</div>
                <input value={CATEGORY_DEFS[kategorie]?.label||kategorie} readOnly placeholder="Select or type..."
                  style={{width:"100%",padding:"7px 10px",border:"1px solid #b0bec5",borderRadius:4,fontSize:14,fontFamily:"Arial,sans-serif",background:"#f8fafc",outline:"none",boxSizing:"border-box",color:"#2d3748"}}/>
              </div>
            </div>
            {/* Row 2: REPRESENTING | FEDERATION / CLUB */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:10}}>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:"#455a64",marginBottom:3,textTransform:"uppercase"}}>Representing</div>
                <select value={federation||"Representing"} onChange={e=>setFederation(e.target.value)}
                  style={{width:"100%",padding:"7px 10px",border:"1px solid #b0bec5",borderRadius:4,fontSize:14,fontFamily:"Arial,sans-serif",background:"white",boxSizing:"border-box",cursor:"pointer"}}>
                  <option value="Representing">Representing</option>
                  <option value="Federation">Federation</option>
                  <option value="Region">Region</option>
                  <option value="State">State</option>
                  <option value="Club">Club</option>
                </select>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:"#455a64",marginBottom:3,textTransform:"uppercase"}}>Federation / Club</div>
                <input type="text" value={clubName} onChange={e=>setClubName(e.target.value)} placeholder="Federation or club..."
                  style={{width:"100%",padding:"7px 10px",border:"1px solid #b0bec5",borderRadius:4,fontSize:14,fontFamily:"Arial,sans-serif",background:"white",boxSizing:"border-box",cursor:"text"}}/>
              </div>
            </div>
            {/* Row 3: Choreography / Music — full width */}
            <div style={{marginBottom:4}}>
              <div style={{fontSize:11,fontWeight:700,color:"#455a64",marginBottom:3}}>
                {sheet.sections[0]?.label?.toUpperCase().includes("SHORT")?"Short":"Free"} — Choreography / Music
              </div>
              <input type="text" value={choreography} onChange={e=>setChoreography(e.target.value)} placeholder="Music title..."
                style={{width:"100%",padding:"7px 10px",border:"1px solid #b0bec5",borderRadius:4,fontSize:14,fontFamily:"Arial,sans-serif",background:"white",boxSizing:"border-box",cursor:"text"}}/>
            </div>
          </div>

          {/* Sections */}
          <div style={{padding:"4px 0 0"}}>
            {sheet.sections.map((sec,si)=>(
              <OfficialSheetSection key={si} section={sec} sIdx={si} data={sections} onChange={updateSection}/>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  //  KI-COACH — Automated Analysis & Optimization
  // ============================================================

  // Rule requirements per segment
  // ============================================================
  //  REGELWERK PRO KATEGORIE + SEGMENT (World Skate 2026)
  //  Quelle: Official Regulation Artistic Free Skating 2026 (Update July 2025)
  // ============================================================
  const SEGMENT_RULES = {
    // ─── TOTS (8-9) ─── Nur Kür ───
    "tots_fp": {
      label:"Tots – Kür",
      info:"Alter 8-9 | 2:30 ±10s | Max 12 Sprünge (1-Rotation inkl. Waltz) | Toeloop+Salchow Pflicht | Max 2 Kombis (max 4 Sprünge) | 2 Spins (nur Aufrecht+Sitz, kein Biellmann) | FoSq max Lv1 30s",
      required:[
        {type:"SJu",min:1,max:12,desc:"Solo-Sprünge (max 12 Einzel-Rotation inkl. Waltz, Toeloop+Salchow Pflicht)"},
        {type:"CoJ",min:0,max:2,desc:"0-2 Kombinationen (max 4 Sprünge pro Kombi)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin (nur Aufrecht+Sitz, kein Biellmann)"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (max 4 Pos., nur Aufrecht+Sitz, kein Biellmann)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Level 1, max 30s)"},
      ],
      maxTotal:16, maxJumps:14, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"single", axelRequired:false, toeloopRequired:true, salchowRequired:true, maxCombos:2, maxJumpsPerCombo:4, sameJumpMaxRepeat:3 },
      spinRestrictions:{ allowedPositions:["upright","sit"], maxComboPositions:4, noBiellmann:true, noBroken:true, noHeel:true, noInverted:true },
      footworkMaxLevel:1, footworkMaxSeconds:30,
    },
    // ─── MINIS (10-11) ─── Nur Kür ───
    "minis_fp": {
      label:"Minis – Kür",
      info:"Alter 10-11 | 2:45 ±10s | Max 12 Sprünge (1-Rot., Doppel-Toeloop+Doppel-Salchow erlaubt) | Axel+Toeloop Pflicht | Max 2 Kombis (max 5) | 2 Spins (1 MUSS Combo mit Sitz sein, 2. frei wählbar, kein Broken/Heel/Inverted) | FoSq max Lv2 30s",
      required:[
        {type:"SJu",min:1,max:12,desc:"Solo-Sprünge (max 12, 1-Rot + Doppel-Toeloop/Salchow erlaubt, Axel+Toeloop Pflicht)"},
        {type:"CoJ",min:0,max:2,desc:"0-2 Kombinationen (max 5 Sprünge pro Kombi)"},
        {type:"SSp",min:0,max:2,desc:"0-2 Spin-Elemente (Solo oder Combo, kein Broken/Heel/Inverted)"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin PFLICHT (muss Sitz enthalten, max 4 Pos., kein Broken/Heel/Inverted)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Level 2, max 30s)"},
      ],
      maxTotal:16, maxJumps:14, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"single+doubleTL/S", axelRequired:true, toeloopRequired:true, maxCombos:2, maxJumpsPerCombo:5, sameJumpMaxRepeat:3 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4, noBroken:true, noHeel:true, noInverted:true, noSoloSpinRequired:true },
      footworkMaxLevel:2, footworkMaxSeconds:30,
    },
    // ─── ESPOIRS (12-13) ─── SP + Kür ───
    "espoirs_sp": {
      label:"Espoirs – Short Program",
      info:"Alter 12-13 | 2:00 ±5s | Axel (einfach!) | Kombi 2-3 Sprünge (keine Doppel-Axel/Dreifach) | Solo-Sprung (einf./dopp., kein Axel) | Combo-Spin (2 Pos.: Sitz+Kamel) | Solo-Spin (Kamel) | FoSq max Lv3 30s",
      required:[
        {type:"SJu",min:1,max:1,desc:"1 Solo-Sprung (einfach/doppel, kein Axel)"},
        {type:"CoJ",min:1,max:1,desc:"1 Kombination (2-3 Sprünge, keine Doppel-Axel/Dreifach)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin (muss Kamel sein)"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (max 2 Pos.: Sitz+Kamel)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Level 3, max 30s)"},
      ],
      maxTotal:5, maxJumps:2, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"double", axelRequired:true, axelMaxRotation:"single", noTriples:true, maxCombos:1, maxJumpsPerCombo:3 },
      spinRestrictions:{ mustIncludeSit:true, mustIncludeCamel:true, maxComboPositions:2, soloMustBeCamel:true },
      footworkMaxLevel:3, footworkMaxSeconds:30,
    },
    "espoirs_fp": {
      label:"Espoirs – Kür",
      info:"Alter 12-13 | 3:15 ±10s | Max 8 Sprünge (keine Doppel-Axel/Dreifach) | Axel Pflicht | Max 2 Kombis (max 5, max 3 Doppel) | 2 Spins (Combo muss Sitz, max 4 Pos.) | Choreo max Lv1 30s",
      required:[
        {type:"SJu",min:1,max:8,desc:"Solo-Sprünge (max 8, einfach/doppel, keine Doppel-Axel/Dreifach, Axel Pflicht)"},
        {type:"CoJ",min:0,max:2,desc:"0-2 Kombinationen (max 5 Sprünge, max 3 Doppel/Axel)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max Level 1, max 30s)"},
      ],
      maxTotal:12, maxJumps:10, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"double", axelRequired:true, axelMaxRotation:"single", noTriples:true, maxCombos:2, maxJumpsPerCombo:5, maxDoublesPerCombo:3 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4, noBroken:true },
      footworkMaxLevel:1, footworkMaxSeconds:30, hasChoreoSeq:true,
    },
    // ─── CADETS (14-15) ─── SP + Kür ───
    "cadets_sp": {
      label:"Cadets – Short Program",
      info:"Alter 14-15 | 2:30 ±5s | Axel (1/2/3) | Kombi 2-3 Sprünge (max 2 Dreifach) | Solo-Sprung (kein Axel) | 1 Solo-Spin | 1 Combo-Spin (muss Sitz, max 4 Pos.) | FoSq max Lv3 30s",
      required:[
        {type:"SJu",min:1,max:1,desc:"1 Solo-Sprung (einfach/doppel/dreifach, kein Axel)"},
        {type:"CoJ",min:1,max:1,desc:"1 Kombination (2-3 Sprünge inkl. Connecting, max 2 Dreifach)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Level 3, max 30s)"},
      ],
      maxTotal:5, maxJumps:2, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:1, maxJumpsPerCombo:3, maxTriples:2 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:3, footworkMaxSeconds:30,
    },
    "cadets_fp": {
      label:"Cadets – Kür",
      info:"Alter 14-15 | 3:30 ±10s | Max 8 Sprünge | Axel Pflicht | Max 2 Kombis (max 5) | 2 Spins (Combo muss Sitz, max 4 Pos., kein Broken) | Choreo max Lv1 30s",
      required:[
        {type:"SJu",min:1,max:8,desc:"Solo-Sprünge (max 8 exkl. Connecting, Axel Pflicht)"},
        {type:"CoJ",min:0,max:2,desc:"0-2 Kombinationen (max 5 Sprünge pro Kombi)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos., kein Broken)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max Level 1, max 30s)"},
      ],
      maxTotal:12, maxJumps:10, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:2, maxJumpsPerCombo:5 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4, noBroken:true },
      footworkMaxLevel:1, footworkMaxSeconds:30, hasChoreoSeq:true,
    },
    // ─── JEUNESSE/YOUTH (16-17) ─── SP + Kür ───
    "jeunesse_sp": {
      label:"Youth – Short Program",
      info:"Alter 16-17 | 2:30 ±5s | Axel (1/2/3) | Kombi 2-3 Sprünge (max 2 Dreifach) | Solo-Sprung (kein Axel) | 1 Solo-Spin | 1 Combo-Spin (muss Sitz, max 4 Pos.) | FoSq max Lv4 40s",
      required:[
        {type:"SJu",min:1,max:1,desc:"1 Solo-Sprung (einfach/doppel/dreifach, kein Axel)"},
        {type:"CoJ",min:1,max:1,desc:"1 Kombination (2-3 Sprünge inkl. Connecting, max 2 Dreifach)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Level 4, max 40s)"},
      ],
      maxTotal:5, maxJumps:2, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:1, maxJumpsPerCombo:3, maxTriples:2 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:4, footworkMaxSeconds:40,
    },
    "jeunesse_fp": {
      label:"Youth – Kür",
      info:"Alter 16-17 | 4:00 ±10s | Max 8 Sprünge | Axel Pflicht | Max 3 Kombis (max 5) | 2 Spins (Combo muss Sitz, max 4 Pos.) | Choreo max Lv1 30s | FoSq max Lv4 40s",
      required:[
        {type:"SJu",min:1,max:8,desc:"Solo-Sprünge (max 8 exkl. Connecting, Axel Pflicht)"},
        {type:"CoJ",min:0,max:3,desc:"0-3 Kombinationen (max 5 Sprünge pro Kombi)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:0,max:1,desc:"0-1 Schrittfolge (max Level 4, max 40s)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max Level 1, max 30s)"},
      ],
      maxTotal:13, maxJumps:11, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:3, maxJumpsPerCombo:5 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:4, footworkMaxSeconds:40, hasChoreoSeq:true,
    },
    // ─── JUNIOR (18-19) ─── SP + Kür ───
    "junior_sp": {
      label:"Junior – Short Program",
      info:"Alter 18-19 | 2:45 ±5s | Axel (1/2/3) | Kombi 2-3 Sprünge (max 2 Dreifach) | Solo-Sprung (kein Axel) | 1 Solo-Spin | 1 Combo-Spin (muss Sitz, max 4 Pos.) | FoSq max 40s",
      required:[
        {type:"SJu",min:1,max:1,desc:"1 Solo-Sprung (einfach/doppel/dreifach, kein Axel)"},
        {type:"CoJ",min:1,max:1,desc:"1 Kombination (2-3 Sprünge inkl. Connecting, max 2 Dreifach)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max 40s)"},
      ],
      maxTotal:5, maxJumps:2, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:1, maxJumpsPerCombo:3, maxTriples:2 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:4, footworkMaxSeconds:40,
    },
    "junior_fp": {
      label:"Junior – Kür",
      info:"Alter 18-19 | 4:00 ±10s | Max 8 Sprünge | Axel Pflicht | Max 3 Kombis (max 5) | 2 Spins (Combo muss Sitz, max 4 Pos.) | Choreo max Lv1 30s | Doppel-Axel = Dreifach",
      required:[
        {type:"SJu",min:1,max:8,desc:"Solo-Sprünge (max 8 exkl. Connecting, Axel Pflicht)"},
        {type:"CoJ",min:0,max:3,desc:"0-3 Kombinationen (max 5 Sprünge pro Kombi)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:0,max:1,desc:"0-1 Schrittfolge (max Level 4, max 40s)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max Level 1, max 30s)"},
      ],
      maxTotal:13, maxJumps:11, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:3, maxJumpsPerCombo:5, doubleAxelCountsAsTriple:true },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:4, footworkMaxSeconds:40, hasChoreoSeq:true,
    },
    // ─── SENIOR (20+) ─── SP + Kür ───
    "senior_sp": {
      label:"Senior – Short Program",
      info:"Alter 20+ | 2:45 ±5s | Axel (1/2/3) | Kombi 2-3 Sprünge (max 2 Dreifach) | Solo-Sprung (kein Axel) | 1 Solo-Spin | 1 Combo-Spin (muss Sitz, max 4 Pos.) | FoSq max 40s",
      required:[
        {type:"SJu",min:1,max:1,desc:"1 Solo-Sprung (einfach/doppel/dreifach, kein Axel)"},
        {type:"CoJ",min:1,max:1,desc:"1 Kombination (2-3 Sprünge inkl. Connecting, max 2 Dreifach)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max 40s)"},
      ],
      maxTotal:5, maxJumps:2, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:1, maxJumpsPerCombo:3, maxTriples:2 },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:4, footworkMaxSeconds:40,
    },
    "senior_fp": {
      label:"Senior – Kür",
      info:"Alter 20+ | 4:00 ±10s | Max 8 Sprünge | Axel Pflicht | Max 3 Kombis (max 5) | 2 Spins (Combo muss Sitz, max 4 Pos.) | Choreo max Lv1 30s | Doppel-Axel = Dreifach",
      required:[
        {type:"SJu",min:1,max:8,desc:"Solo-Sprünge (max 8 exkl. Connecting, Axel Pflicht)"},
        {type:"CoJ",min:0,max:3,desc:"0-3 Kombinationen (max 5 Sprünge pro Kombi)"},
        {type:"SSp",min:1,max:1,desc:"1 Solo-Spin"},
        {type:"CSp",min:1,max:1,desc:"1 Kombinations-Spin (muss Sitz enthalten, max 4 Pos.)"},
        {type:"FoSq",min:0,max:1,desc:"0-1 Schrittfolge (max Level 4, max 40s)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max Level 1, max 30s)"},
      ],
      maxTotal:13, maxJumps:11, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"triple", axelRequired:true, maxCombos:3, maxJumpsPerCombo:5, doubleAxelCountsAsTriple:true },
      spinRestrictions:{ mustIncludeSit:true, maxComboPositions:4 },
      footworkMaxLevel:4, footworkMaxSeconds:40, hasChoreoSeq:true,
    },
    // ─── PAIRS TOTS (8-9) ─── Nur Kür ───
    "pairs_tots_fp": {
      label:"Pairs Tots – Kür",
      info:"Alter 8-9 | 2:00 ±10s | 1 SBS-Sprung (1 Rotation) | 1 SBS-Kombi (max 3 Sprünge, 1 Rotation) | 1 SBS-Spin (max 2 Pos., nur Aufrecht) | 1 Contact Spin (1 Pos., Aufrecht) | FoSq max Lv1 30s | KEINE HEBUNGEN",
      required:[
        {type:"SJu",min:1,max:1,desc:"1 Side by Side Sprung (max 1 Rotation)"},
        {type:"CoJ",min:1,max:1,desc:"1 SBS-Kombi (max 3 Sprünge, 1 Rotation)"},
        {type:"SSp",min:1,max:1,desc:"1 SBS-Spin (1 Pos. oder Combo max 2 Pos., nur Aufrecht)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (1 Pos., nur Aufrecht)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv1, max 30s)"},
      ],
      maxTotal:7, maxJumps:2, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"single", maxCombos:1, maxJumpsPerCombo:3 },
      spinRestrictions:{ allowedPositions:["upright"], maxComboPositions:2 },
      footworkMaxLevel:1, footworkMaxSeconds:30,
      pairsRestrictions:{ noLifts:true, noThrows:true, noTwist:true, noDeathSpiral:true },
    },
    // ─── PAIRS MINIS (10-11) ─── Nur Kür ───
    "pairs_minis_fp": {
      label:"Pairs Minis – Kür",
      info:"Alter 10-11 | 2:30 ±10s | Max 2 SBS-Sprünge (nicht in Kombi, max Axel/Doppel-TL/Doppel-S) | 1 SBS-Spin (max 2 Pos., Aufrecht+Sitz) | Max 2 Wurfsprünge (einfach/Axel) | 1 Contact Spin (1 Pos.) | 1 Spiral (Kamel BO) | FoSq max Lv2 30s | KEINE HEBUNGEN",
      required:[
        {type:"SJu",min:1,max:2,desc:"1-2 SBS-Sprünge (nicht in Kombi, max Axel/Doppel-TL/Doppel-S)"},
        {type:"SSp",min:1,max:1,desc:"1 SBS-Spin (1 Pos. oder Combo max 2 Pos., Aufrecht+Sitz)"},
        {type:"Tj",min:0,max:2,desc:"0-2 Wurfsprünge (einfach oder Axel)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (1 Pos., Aufrecht/Sitz/Hazel)"},
        {type:"CS",min:1,max:1,desc:"1 Spiral (Kamel BO)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv2, max 30s)"},
      ],
      maxTotal:8, maxJumps:4, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"double", allowedJumps:["1W","1T","1S","1F","1Lz","1Lo","1Th","1A","2T","2S"], noCombos:true },
      spinRestrictions:{ allowedPositions:["upright","sit"], maxComboPositions:2 },
      footworkMaxLevel:2, footworkMaxSeconds:30,
      pairsRestrictions:{ noLifts:true, noTwist:true, noDeathSpiral:true, maxThrowRotation:"single+axel" },
    },
    // ─── PAIRS ESPOIRS (12-13) ─── SP + Kür ───
    "pairs_espoirs_sp": {
      label:"Pairs Espoirs – Short Program",
      info:"Alter 12-13 | 2:15 ±5s | 1 Pos.-Hebung (Axel, max Lv2) | 1 SBS-Sprung (Axel) | 1 SBS-Spin (Sitz BI) | 1 Wurfsprung (einfach, kein Axel) | 1 Contact Spin (Sitz Face-to-Face) | 1 Spiral (Kamel BO) | FoSq max Lv3 30s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Positions-Hebung (Axel, max Lv2)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (Axel)"},
        {type:"SSp",min:1,max:1,desc:"1 SBS-Spin (Sitz BI)"},
        {type:"Tj",min:1,max:1,desc:"1 Wurfsprung (einfach, kein Axel)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (Sitz Face-to-Face)"},
        {type:"CS",min:1,max:1,desc:"1 Spiral (Kamel BO)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv3, max 30s)"},
      ],
      maxTotal:7, maxJumps:2, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"single", axelRequired:true },
      spinRestrictions:{ soloMustBeSit:true },
      footworkMaxLevel:3, footworkMaxSeconds:30,
      pairsRestrictions:{ liftMaxLevel:2, liftType:"axel", maxThrowRotation:"single_no_axel", noTwist:true, noDeathSpiral:true },
    },
    "pairs_espoirs_fp": {
      label:"Pairs Espoirs – Kür",
      info:"Alter 12-13 | 3:00 ±10s | 2 Hebungen (1 Combo+1 Solo, max Lv2, kein Overhead/Low Militano) | Max 2 SBS-Sprünge (max 2 Rot., kein Doppel-Loop/2A/Dreifach) | 1 SBS-Combo-Spin (max 2 Pos.) | Max 2 Wurfsprünge (Axel/Doppel-TL/Doppel-S) | 1 Combo Contact Spin (max 2 Pos.) | 1 Spiral (Kamel BO) | Choreo max 30s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Solo-Hebung (max Lv2, kein Overhead/Low Militano)"},
        {type:"CLi",min:1,max:1,desc:"1 Combo-Hebung (max Lv2, kein Overhead/Low Militano)"},
        {type:"SJu",min:1,max:2,desc:"1-2 SBS-Sprünge (max 2 Rot., kein Doppel-Loop/2A/Dreifach)"},
        {type:"CSp",min:1,max:1,desc:"1 SBS-Combo-Spin (max 2 Pos.)"},
        {type:"Tj",min:0,max:2,desc:"0-2 Wurfsprünge (Axel/Doppel-TL/Doppel-S)"},
        {type:"CtSp",min:1,max:1,desc:"1 Combo Contact Spin (max 2 Pos.)"},
        {type:"CS",min:1,max:1,desc:"1 Spiral (Kamel BO)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max 30s)"},
      ],
      maxTotal:9, maxJumps:4, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"double", noDoubleLoop:true, noDoubleAxel:true, noTriples:true },
      spinRestrictions:{ maxComboPositions:2 },
      footworkMaxLevel:0, footworkMaxSeconds:0, hasChoreoSeq:true,
      pairsRestrictions:{ liftMaxLevel:2, noOverhead:true, noLowMilitano:true, maxThrows:2, allowedThrows:["1A","2T","2S"] },
    },
    // ─── PAIRS CADETS (14-15) ─── SP + Kür ───
    "pairs_cadets_sp": {
      label:"Pairs Cadets – Short Program",
      info:"Alter 14-15 | 2:30 ±5s | 1 Pos.-Hebung (Flip Reversed Split, max Lv2) | 1 SBS-Sprung (2026: Doppel-Salchow) | 1 SBS-Spin (Sitz/Kamel BO) | 1 Wurfsprung (Doppel-TL/Doppel-S) | Contact Spin (Hazel) | Death Spiral (BO, max Lv2) | FoSq max Lv4 40s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Pos.-Hebung (Flip Reversed Split, max Lv2)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (2026: Doppel-Salchow)"},
        {type:"SSp",min:1,max:1,desc:"1 SBS-Spin (Sitz/Kamel BO)"},
        {type:"Tj",min:1,max:1,desc:"1 Wurfsprung (Doppel-Toeloop oder Doppel-Salchow)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (Hazel)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (BO, max Lv2)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv4, max 40s)"},
      ],
      maxTotal:7, maxJumps:2, maxSpins:2, maxSequences:2,
      jumpRestrictions:{ maxRotation:"double", requiredJump:"2S" },
      spinRestrictions:{ soloMustBeSitOrCamel:true },
      footworkMaxLevel:4, footworkMaxSeconds:40,
      pairsRestrictions:{ liftMaxLevel:2, liftType:"flip_reversed_split", deathSpiralMaxLevel:2, deathSpiralEdge:"BO" },
    },
    "pairs_cadets_fp": {
      label:"Pairs Cadets – Kür",
      info:"Alter 14-15 | 3:45 ±10s | 2 Hebungen (1 Combo+1 Solo, max Lv3, kein Overhead) | 1 SBS-Sprung (kein 2A/Dreifach) | 1 Kombi max 2 Sprünge (kein 2A/Dreifach) | Max 2 Wurfsprünge (max 2 Rot.) | 1 Twist (max 2 Rot.) | 1 Contact Spin (Solo/Combo max 3 Pos.) | 1 Death Spiral (max Lv2) | Choreo max 30s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Solo-Hebung (max Lv3, kein Overhead)"},
        {type:"CLi",min:1,max:1,desc:"1 Combo-Hebung (max Lv3, kein Overhead)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (kein 2A/Dreifach)"},
        {type:"CoJ",min:0,max:1,desc:"0-1 SBS-Kombi (max 2 Sprünge, kein 2A/Dreifach)"},
        {type:"Tj",min:0,max:2,desc:"0-2 Wurfsprünge (max 2 Rotationen)"},
        {type:"Tw",min:1,max:1,desc:"1 Twist (max 2 Rotationen)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (Solo/Combo max 3 Pos.)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (max Lv2)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max 30s)"},
      ],
      maxTotal:10, maxJumps:4, maxSpins:1, maxSequences:1,
      jumpRestrictions:{ maxRotation:"double", noDoubleAxel:true, noTriples:true, maxCombos:1, maxJumpsPerCombo:2 },
      footworkMaxLevel:0, footworkMaxSeconds:0, hasChoreoSeq:true,
      pairsRestrictions:{ liftMaxLevel:3, noOverhead:true, maxThrowRotation:"double", twistMaxRotation:2, deathSpiralMaxLevel:2, contactSpinMaxPositions:3 },
    },
    // ─── PAIRS YOUTH (16-17) ─── SP + Kür ───
    "pairs_youth_sp": {
      label:"Pairs Youth – Short Program",
      info:"Alter 16-17 | 2:30 ±5s | 1 Pos.-Hebung (Press, max 3 Rot., max Lv2) | 1 SBS-Sprung (kein 2A/Dreifach) | 1 Contact Spin (Einzel-Pos.) | 1 Wurfsprung (Doppel inkl. 2A) | 1 Death Spiral (max Lv3, Inside) | FoSq max Lv4 40s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Pos.-Hebung (Press, max 3 Rot., max Lv2)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (kein 2A/Dreifach)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (Einzel-Position)"},
        {type:"Tj",min:1,max:1,desc:"1 Wurfsprung (Doppel inkl. 2A)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (max Lv3, Inside)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv4, max 40s)"},
      ],
      maxTotal:7, maxJumps:2, maxSpins:1, maxSequences:2,
      jumpRestrictions:{ maxRotation:"double", noDoubleAxel:true, noTriples:true },
      footworkMaxLevel:4, footworkMaxSeconds:40,
      pairsRestrictions:{ liftMaxLevel:2, liftType:"press", liftMaxRotations:3, deathSpiralMaxLevel:3, deathSpiralEdge:"Inside", maxThrowRotation:"double_incl_2A" },
    },
    "pairs_youth_fp": {
      label:"Pairs Youth – Kür",
      info:"Alter 16-17 | 4:00 ±10s | 2 Hebungen (1 Combo+1 Solo, max Kennedy, max Lv3) | 1 SBS-Sprung (kein 2A/Dreifach) | 1 Kombi max 2 Sprünge | Max 2 Wurfsprünge (max Doppel inkl. 2A) | 1 Twist (max 2 Rot.) | 1 Contact Spin (Combo max 3 Pos.) | 1 Death Spiral (max Lv3) | Choreo max 30s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Solo-Hebung (max Kennedy, max Lv3)"},
        {type:"CLi",min:1,max:1,desc:"1 Combo-Hebung (max Kennedy, max Lv3)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (kein 2A/Dreifach)"},
        {type:"CoJ",min:0,max:1,desc:"0-1 SBS-Kombi (max 2 Sprünge)"},
        {type:"Tj",min:0,max:2,desc:"0-2 Wurfsprünge (max Doppel inkl. 2A)"},
        {type:"Tw",min:1,max:1,desc:"1 Twist (max 2 Rotationen)"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (Combo max 3 Pos.)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (max Lv3)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max 30s)"},
      ],
      maxTotal:10, maxJumps:4, maxSpins:1, maxSequences:1,
      jumpRestrictions:{ maxRotation:"double", noDoubleAxel:true, noTriples:true, maxCombos:1, maxJumpsPerCombo:2 },
      footworkMaxLevel:0, footworkMaxSeconds:0, hasChoreoSeq:true,
      pairsRestrictions:{ liftMaxLevel:3, liftMaxType:"kennedy", maxThrowRotation:"double_incl_2A", twistMaxRotation:2, deathSpiralMaxLevel:3, contactSpinMaxPositions:3 },
    },
    // ─── PAIRS JUNIOR (18-19) ─── SP + Kür ───
    "pairs_junior_sp": {
      label:"Pairs Junior – Short Program",
      info:"Alter 18-19 | 3:00 ±5s | 2 Pos.-Hebungen (max 4 Rot., max Militano) | 1 SBS-Sprung (kein 2A/Dreifach) | Wurfsprung (2026: Doppel) | 1 Combo Contact Spin (max 3 Pos.) | 1 Death Spiral (Outside) | FoSq max Lv4 40s",
      required:[
        {type:"SLi",min:2,max:2,desc:"2 Positions-Hebungen (max 4 Rot., max Militano)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (kein 2A/Dreifach)"},
        {type:"Tj",min:1,max:1,desc:"1 Wurfsprung (2026: Doppel)"},
        {type:"CtSp",min:1,max:1,desc:"1 Combo Contact Spin (max 3 Pos.)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (Outside)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv4, max 40s)"},
      ],
      maxTotal:8, maxJumps:2, maxSpins:1, maxSequences:2,
      jumpRestrictions:{ maxRotation:"double", noDoubleAxel:true, noTriples:true },
      footworkMaxLevel:4, footworkMaxSeconds:40,
      pairsRestrictions:{ liftMaxRotations:4, liftMaxType:"militano", deathSpiralEdge:"Outside", maxThrowRotation:"double" },
    },
    "pairs_junior_fp": {
      label:"Pairs Junior – Kür",
      info:"Alter 18-19 | 4:30 ±10s | 2 Hebungen (1 Combo+1 Solo, max Militano) | Max 2 SBS-Sprung-Elemente (1 Solo+1 Kombi max 4) | Max 2 Wurfsprünge (max Doppel) | 1 Twist | 1 Contact Spin (Solo/Combo max 3 Pos.) | 1 Death Spiral (max Lv2) | Choreo max 30s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Solo-Hebung (max Militano)"},
        {type:"CLi",min:1,max:1,desc:"1 Combo-Hebung (max Militano)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (Solo)"},
        {type:"CoJ",min:0,max:1,desc:"0-1 SBS-Kombi (max 4 Sprünge)"},
        {type:"Tj",min:0,max:2,desc:"0-2 Wurfsprünge (max Doppel, müssen verschieden sein)"},
        {type:"Tw",min:1,max:1,desc:"1 Twist"},
        {type:"CtSp",min:1,max:1,desc:"1 Contact Spin (Solo/Combo max 3 Pos.)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (max Lv2)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max 30s)"},
      ],
      maxTotal:11, maxJumps:5, maxSpins:1, maxSequences:1,
      jumpRestrictions:{ maxRotation:"double", maxCombos:1, maxJumpsPerCombo:4 },
      footworkMaxLevel:0, footworkMaxSeconds:0, hasChoreoSeq:true,
      pairsRestrictions:{ liftMaxType:"militano", maxThrowRotation:"double", throwsMustBeDifferent:true, deathSpiralMaxLevel:2, contactSpinMaxPositions:3 },
    },
    // ─── PAIRS SENIOR (20+) ─── SP + Kür ───
    "pairs_senior_sp": {
      label:"Pairs Senior – Short Program",
      info:"Alter 20+ | 3:00 ±5s | 1 Pos.-Hebung (max 4 Rot.) | 1 Combo-Hebung (max 8 Rot., 3 Pos. Dame) | 1 SBS-Sprung (kein Kombi) | Wurfsprung (2026) | 1 Combo Contact Spin (max 3 Pos.) | 1 Death Spiral (Outside) | FoSq max Lv4 40s",
      required:[
        {type:"SLi",min:1,max:1,desc:"1 Pos.-Hebung (max 4 Rotationen)"},
        {type:"CLi",min:1,max:1,desc:"1 Combo-Hebung (max 8 Rot., 3 Pos. Dame)"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (kein Kombi)"},
        {type:"Tj",min:1,max:1,desc:"1 Wurfsprung (2026)"},
        {type:"CtSp",min:1,max:1,desc:"1 Combo Contact Spin (max 3 Pos.)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (Outside)"},
        {type:"FoSq",min:1,max:1,desc:"1 Schrittfolge (max Lv4, max 40s)"},
      ],
      maxTotal:8, maxJumps:2, maxSpins:1, maxSequences:2,
      jumpRestrictions:{ noCombos:true },
      footworkMaxLevel:4, footworkMaxSeconds:40,
      pairsRestrictions:{ soloLiftMaxRotations:4, comboLiftMaxRotations:8, comboLiftMaxPositions:3, deathSpiralEdge:"Outside", contactSpinMaxPositions:3 },
    },
    "pairs_senior_fp": {
      label:"Pairs Senior – Kür",
      info:"Alter 20+ | 4:30 ±10s | 3 Hebungen (mind. 1 Pos.+1 Combo) | Max 2 SBS-Sprung-Elemente (1 Solo+1 Kombi max 4) | Max 2 Wurfsprünge (max 1 Dreifach/2A, müssen verschieden sein) | 1 Twist | 1 Combo Contact Spin ODER 1 SBS-Combo-Spin (max 3 Pos.) | 1 Death Spiral (Inside) | Choreo max 30s",
      required:[
        {type:"SLi",min:1,max:2,desc:"1-2 Solo-Hebungen"},
        {type:"CLi",min:1,max:2,desc:"1-2 Combo-Hebungen"},
        {type:"SJu",min:1,max:1,desc:"1 SBS-Sprung (Solo)"},
        {type:"CoJ",min:0,max:1,desc:"0-1 SBS-Kombi (max 4 Sprünge)"},
        {type:"Tj",min:0,max:2,desc:"0-2 Wurfsprünge (max 1 Dreifach/2A, müssen verschieden sein)"},
        {type:"Tw",min:1,max:1,desc:"1 Twist"},
        {type:"CtSp",min:0,max:1,desc:"0-1 Combo Contact Spin (max 3 Pos.) ODER SBS-Combo-Spin"},
        {type:"CSp",min:0,max:1,desc:"0-1 SBS-Combo-Spin (alternativ zu Contact Spin)"},
        {type:"DS",min:1,max:1,desc:"1 Death Spiral (Inside)"},
        {type:"ChSt",min:1,max:1,desc:"1 Choreo-Sequenz (max 30s)"},
      ],
      maxTotal:11, maxJumps:5, maxSpins:2, maxSequences:1,
      jumpRestrictions:{ maxRotation:"triple", maxCombos:1, maxJumpsPerCombo:4, maxTripleOrDoubleAxelThrows:1 },
      footworkMaxLevel:0, footworkMaxSeconds:0, hasChoreoSeq:true,
      pairsRestrictions:{ totalLifts:3, minPositionLifts:1, minComboLifts:1, maxThrows:2, throwsMustBeDifferent:true, deathSpiralEdge:"Inside", contactSpinMaxPositions:3 },
    },
  };

  function KiCoach({rows,types,segment,judgeCount,elements,tes,pcsTotal,bonusTotal,pcs,kategorie,deductions,extraPoints,geschlecht}){
    const [open,setOpen]=useState(true);
    const [tab,setTab]=useState("rules"); // rules, optimize, training, ki
    const [kiMsg,setKiMsg]=useState("");
    const [kiHistory,setKiHistory]=useState([]);
    const [kiLoading,setKiLoading]=useState(false);
    const kiAbortRef=useRef(null);

    const sendToKI=async(msg)=>{
      if(!msg.trim()||kiLoading)return;
      const userMsg={role:"user",text:msg};
      setKiHistory(h=>[...h,userMsg]);
      setKiMsg("");
      setKiLoading(true);
      if(kiAbortRef.current)kiAbortRef.current.abort();
      const ctrl=new AbortController();
      kiAbortRef.current=ctrl;
      try{
        const token=localStorage.getItem('rollart_token');
        const total=tes+pcsTotal-deductions+extraPoints;
        const context={
          kategorie:kategorie||"senior",
          segment,
          rows:rows.map(r=>({typeCode:r.typeCode,elCode:r.elCode,rotation:r.rotation,nv:r.nv,dg:r.dg,bonuses:r.bonuses,comboEls:r.comboEls})),
          scores:{tes:Math.round(tes*100)/100,pcs:Math.round(pcsTotal*100)/100,deductions,total:Math.round(total*100)/100},
        };
        const res=await fetch('/api/ki-coach',{
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
          body:JSON.stringify({message:msg,context}),
          signal:ctrl.signal,
        });
        const data=await res.json();
        if(res.ok){
          setKiHistory(h=>[...h,{role:"assistant",text:data.reply}]);
        }else{
          setKiHistory(h=>[...h,{role:"error",text:data.error||'Fehler bei der KI-Analyse'}]);
        }
      }catch(err){
        if(err.name==='AbortError')return;
        setKiHistory(h=>[...h,{role:"error",text:'Verbindungsfehler: '+err.message}]);
      }
      setKiLoading(false);
    };

    const quickAnalysis=()=>sendToKI("Analysiere mein aktuelles Programm. Prüfe die Regelkonformität, finde Optimierungspotenzial und gib konkrete Trainingstipps.");

    const rules=SEGMENT_RULES[segment]||SEGMENT_RULES["senior_fp"];
    const isPairs=segment.startsWith("pairs_");
    const pcsFactor=getPcsFactor(segment,geschlecht||"damen");
    const catKey=SEGMENT_DEFS[segment]?.category||"senior";
    const catDef=CATEGORY_DEFS[catKey]||CATEGORY_DEFS["senior"];

    // ---- RULE COMPLIANCE ----
    const ruleChecks=useMemo(()=>{
      // Count elements by type (computed inside memo to avoid deps instability)
      const typeCounts={};
      rows.forEach(r=>{if(r.typeCode)typeCounts[r.typeCode]=(typeCounts[r.typeCode]||0)+1;});
      const checks=[];
      // Check each required element type
      (rules.required||[]).forEach(req=>{
        const count=typeCounts[req.type]||0;
        if(count<req.min){
          checks.push({type:"error",msg:\`\${req.desc}: nur \${count} vorhanden (min. \${req.min})\`,icon:"\\u274C"});
        }else if(count>req.max){
          checks.push({type:"warning",msg:\`\${req.desc}: \${count} vorhanden (max. \${req.max} erlaubt)\`,icon:"\\u26A0\\uFE0F"});
        }else{
          checks.push({type:"ok",msg:\`\${req.desc}: \${count} \\u2714\`,icon:"\\u2705"});
        }
      });
      // Total elements
      const total=Object.values(typeCounts).reduce((s,v)=>s+v,0);
      if(total>rules.maxTotal){
        checks.push({type:"error",msg:\`Zu viele Elemente: \${total}/\${rules.maxTotal}\`,icon:"\\u274C"});
      }
      // Check for NV elements
      const nvCount=rows.filter(r=>r.nv).length;
      if(nvCount>0)checks.push({type:"warning",msg:\`\${nvCount} Element(e) als NV markiert (0 Punkte)\`,icon:"\\u26A0\\uFE0F"});
      // Check for empty slots
      const emptySlots=rows.filter(r=>!r.typeCode).length;
      if(emptySlots>0)checks.push({type:"warning",msg:\`\${emptySlots} leere Slots \\u2014 Punkte verschenkt!\`,icon:"\\u26A0\\uFE0F"});
      // Check for DG
      const dgCount=rows.filter(r=>r.dg).length;
      if(dgCount>0)checks.push({type:"warning",msg:\`\${dgCount} Element(e) als DG (downgrade) markiert\`,icon:"\\u26A0\\uFE0F"});
      return checks;
    },[rows,rules]);

    const errorCount=ruleChecks.filter(c=>c.type==="error").length;
    const warnCount=ruleChecks.filter(c=>c.type==="warning").length;
    const isCompliant=errorCount===0;

    // ---- SCORE OPTIMIZATION ----
    const optimizations=useMemo(()=>{
      const tips=[];

      // 1. Check for missing bonuses on eligible elements
      rows.forEach((r,i)=>{
        if(r.nv||!r.typeCode)return;
        const td=types.find(t=>t.code===r.typeCode);
        if(!td)return;
        const isJump=r.typeCode==="CoJ"||r.typeCode==="SJu";
        const isSpin=r.typeCode==="CSp"||r.typeCode==="SSp";
        const bonuses=r.bonuses||[];
        const el=elements[i];
        if(!el||el.rawBase===0)return;

        if(isJump&&bonuses.length===0){
          tips.push({priority:2,msg:\`Element \${i+1} (\${r.typeCode}): Kein Bonus aktiv \\u2014 Pr\\u00fcfe ob "Nach halber Programml\\u00e4nge" (+10%) anwendbar\`,points:Math.round(el.rawBase*0.10*100)/100});
        }
        if(r.typeCode==="CoJ"&&bonuses.length===0){
          // Check if combo qualifies for combo bonus
          const subs=r.comboEls||[];
          const hasDouble=subs.some(s=>s.code&&s.code.startsWith("2"));
          const hasTriple=subs.some(s=>s.code&&s.code.startsWith("3"));
          if(hasDouble&&!hasTriple){
            tips.push({priority:1,msg:\`Element \${i+1} (CoJ): Doppel+Doppel-Bonus (+10%) m\\u00F6glich\`,points:Math.round(el.rawBase*0.10*100)/100});
          }
          if(hasTriple){
            tips.push({priority:1,msg:\`Element \${i+1} (CoJ): Dreifach-Kombi-Bonus (+20-30%) verf\\u00FCgbar!\`,points:Math.round(el.rawBase*0.20*100)/100});
          }
        }
        if(isSpin&&bonuses.length===0){
          tips.push({priority:2,msg:\`Element \${i+1} (\${r.typeCode}): Keine schwierigen Positionen/Variationen ausgew\\u00E4hlt \\u2014 bis zu +80% m\\u00F6glich\`,points:Math.round(el.rawBase*0.40*100)/100});
        }
      });

      // 2. Check for under-rotated elements
      rows.forEach((r,i)=>{
        if(r.rotation==="lt"||r.rotation==="ltlt"){
          const el=elements[i];
          if(!el)return;
          const td=types.find(t=>t.code===r.typeCode);
          const elDef=td?.data.find(e=>e.code===r.elCode);
          if(elDef){
            const fullBase=getBase(elDef,false,"normal");
            const loss=Math.round((fullBase-el.rawBase)*100)/100;
            tips.push({priority:1,msg:\`Element \${i+1}: Unterrotiert (\${r.rotation==="lt"?"<":r.rotation==="ltlt"?"<<":"?"}) \\u2014 \${loss.toFixed(2)} Punkte Verlust\`,points:loss});
          }
        }
      });

      // 3. Check for low-value elements that could be upgraded
      rows.forEach((r,i)=>{
        if(!r.elCode||r.nv)return;
        const td=types.find(t=>t.code===r.typeCode);
        if(!td||td.isCombo)return;
        const el=td.data.find(e=>e.code===r.elCode);
        if(!el)return;
        const idx=td.data.indexOf(el);
        if(idx<td.data.length-1){
          const next=td.data[idx+1];
          const diff=Math.round((next.base-el.base)*100)/100;
          if(diff>=0.3){
            tips.push({priority:3,msg:\`Element \${i+1}: Upgrade \${el.code}\\u2192\${next.code} bringt +\${diff.toFixed(2)} Basispunkte\`,points:diff});
          }
        }
      });

      // 4. Check element placement (after half program for bonus)
      const halfIdx=Math.floor(rows.length/2);
      const jumpsBefore=rows.slice(0,halfIdx).filter(r=>r.typeCode==="CoJ"||r.typeCode==="SJu").length;
      const jumpsAfter=rows.slice(halfIdx).filter(r=>r.typeCode==="CoJ"||r.typeCode==="SJu").length;
      if(jumpsBefore>jumpsAfter+1&&jumpsAfter>0){
        tips.push({priority:2,msg:\`Tipp: Mehr Spr\\u00FCnge in die 2. Programmh\\u00E4lfte legen f\\u00FCr den +10% Bonus\`,points:0});
      }

      // 5. Check negative GOE elements
      const negGoeEls=elements.filter((el,i)=>el&&el.goeVal<-0.3&&!rows[i].nv);
      if(negGoeEls.length>0){
        const totalNeg=Math.round(negGoeEls.reduce((s,e)=>s+e.goeVal,0)*100)/100;
        tips.push({priority:1,msg:\`\${negGoeEls.length} Element(e) mit negativem QOE \\u2014 insgesamt \${totalNeg.toFixed(2)} Punkte Verlust durch Ausf\\u00FChrung\`,points:Math.abs(totalNeg)});
      }

      // 6. PCS potential
      const pcsComps=PCS_COMPONENTS.map(comp=>{
        const avg=calcPcsAvg(pcs[comp.key],judgeCount);
        return{key:comp.key,label:comp.label,avg};
      });
      const lowest=pcsComps.reduce((min,c)=>c.avg<min.avg?c:min,pcsComps[0]);
      if(lowest&&lowest.avg<pcsComps.reduce((sum,c)=>sum+c.avg,0)/pcsComps.length-0.5){
        tips.push({priority:2,msg:\`PCS: "\${lowest.label}" ist am schw\\u00E4chsten (\${lowest.avg.toFixed(2)}) \\u2014 gezieltes Training empfohlen\`,points:Math.round((1-lowest.avg/10)*pcsFactor*100)/100});
      }

      // Sort by points desc
      tips.sort((a,b)=>b.points-a.points);
      return tips;
    },[rows,types,elements,pcs,judgeCount]);

    const totalPotential=optimizations.reduce((s,t)=>s+t.points,0);

    // ---- TRAINING TIPS ----
    const trainingTips=useMemo(()=>{
      const tips=[];
      // Compute filledRows inside memo to avoid deps instability
      const filledRows=rows.filter(r=>{
        const td=types.find(t=>t.code===r.typeCode);
        if(td?.isCombo)return(r.comboEls||[]).some(s=>s.code);
        return!!r.elCode;
      });
      if(filledRows.length===0)return tips;

      // Categorize elements
      const jumpEls=[], spinEls=[], seqEls=[];
      rows.forEach((r,i)=>{
        if(!r.typeCode||r.nv)return;
        const el=elements[i];
        if(!el||el.rawBase===0)return;
        if(r.typeCode==="CoJ"||r.typeCode==="SJu")jumpEls.push({row:r,el,idx:i});
        else if(r.typeCode==="CSp"||r.typeCode==="SSp")spinEls.push({row:r,el,idx:i});
        else seqEls.push({row:r,el,idx:i});
      });

      // Jump analysis
      if(jumpEls.length>0){
        const avgJumpGoe=jumpEls.reduce((s,j)=>s+j.el.goeVal,0)/jumpEls.length;
        const avgJumpPct=jumpEls.reduce((s,j)=>s+(j.el.rawBase>0?j.el.finalScore/j.el.rawBase:0),0)/jumpEls.length*100;
        if(avgJumpGoe<0)tips.push({cat:"jump",icon:"\\u26F8\\uFE0F",title:"Spr\\u00FCnge: Qualit\\u00E4t verbessern",
          desc:\`Durchschnittliches QOE: \${avgJumpGoe.toFixed(2)}. Fokus auf saubere Landungen und H\\u00F6he.\`,
          pct:Math.round(avgJumpPct)});
        else if(avgJumpGoe>=0&&avgJumpGoe<0.5)tips.push({cat:"jump",icon:"\\u26F8\\uFE0F",title:"Spr\\u00FCnge: Gutes Niveau",
          desc:\`QOE \\u00F8 \${avgJumpGoe.toFixed(2)} \\u2014 Arbeite an Auslauf-Positionen und kreativen Ein-/Ausg\\u00E4ngen f\\u00FCr h\\u00F6heres QOE.\`,
          pct:Math.round(avgJumpPct)});
        else tips.push({cat:"jump",icon:"\\u26F8\\uFE0F",title:"Spr\\u00FCnge: Exzellent!",
          desc:\`QOE \\u00F8 \${avgJumpGoe.toFixed(2)} \\u2014 Top-Niveau! N\\u00E4chster Schritt: h\\u00F6here Schwierigkeit oder mehr Boni.\`,
          pct:Math.round(avgJumpPct)});

        // Under-rotation focus
        const underRot=jumpEls.filter(j=>j.row.rotation==="lt"||j.row.rotation==="ltlt");
        if(underRot.length>0){
          tips.push({cat:"jump",icon:"\\uD83D\\uDD04",title:"Rotations-Training",
            desc:\`\${underRot.length} Sprung/Spr\\u00FCnge unterrotiert. Fokus auf vollst\\u00E4ndige Rotation vor dem Landen.\`,
            pct:Math.round((1-underRot.length/jumpEls.length)*100)});
        }
      }

      // Spin analysis
      if(spinEls.length>0){
        const avgSpinGoe=spinEls.reduce((s,j)=>s+j.el.goeVal,0)/spinEls.length;
        const hasBonuses=spinEls.some(s=>(s.row.bonuses||[]).length>0);
        const bonusCount=spinEls.reduce((s,j)=>s+(j.row.bonuses||[]).length,0);
        tips.push({cat:"spin",icon:"\\uD83C\\uDF00",title:\`Spins: QOE \\u00F8 \${avgSpinGoe.toFixed(2)}\`,
          desc:avgSpinGoe<0
            ?\`Negative QOE \\u2014 arbeite an Zentrierung, Geschwindigkeit und klaren Positionen.\`
            :\`\${hasBonuses?bonusCount+" Boni aktiv":"Keine schwierigen Positionen"} \\u2014 \${hasBonuses?"Pr\\u00FCfe ob weitere Variationen m\\u00F6glich":"F\\u00FCge schwierige Positionen hinzu (+20-80%)!"}.\`,
          pct:Math.round((avgSpinGoe+1.5)/3*100)});
      }

      // Overall score distribution
      const tesShare=tes/(tes+pcsTotal||1)*100;
      if(tesShare>70){
        tips.push({cat:"balance",icon:"\\u2696\\uFE0F",title:"Programmbalance: TES-lastig",
          desc:\`TES \${Math.round(tesShare)}% vs PCS \${Math.round(100-tesShare)}% \\u2014 Arbeite mehr an Skating Skills und Interpretation.\`,
          pct:Math.round(100-tesShare)});
      }else if(tesShare<40&&filledRows.length>=3){
        tips.push({cat:"balance",icon:"\\u2696\\uFE0F",title:"Programmbalance: PCS-lastig",
          desc:\`TES nur \${Math.round(tesShare)}% \\u2014 Erh\\u00F6he die technische Schwierigkeit f\\u00FCr mehr Punkte.\`,
          pct:Math.round(tesShare)});
      }

      // Fall/deduction awareness
      const nvEls=rows.filter(r=>r.nv).length;
      if(nvEls>0){
        tips.push({cat:"focus",icon:"\\uD83C\\uDFAF",title:"Fokus: NV-Elemente eliminieren",
          desc:\`\${nvEls} Element(e) als NV \\u2014 jedes NV-Element bedeutet 0 Punkte. Durch saubere Ausf\\u00FChrung ersetzen.\`,
          pct:0});
      }

      return tips;
    },[rows,elements,tes,pcsTotal,types,pcs,judgeCount]);

    const tabStyle=(t)=>({padding:"5px 12px",borderRadius:"6px 6px 0 0",border:"none",fontSize:11,fontWeight:700,cursor:"pointer",
      background:tab===t?"white":"transparent",color:tab===t?"#22221C":"#9ca3af",
      borderBottom:tab===t?"2px solid #22221C":"2px solid transparent"});

    const statusColor=errorCount>0?"#dc2626":warnCount>0?"#f59e0b":"#059669";
    const statusText=errorCount>0?\`\${errorCount} Fehler\`:warnCount>0?\`\${warnCount} Hinweise\`:"Alles OK";

    return(
      <div style={{background:"white",borderRadius:12,border:"2px solid #DEE2E6",overflow:"hidden",marginTop:12}}>
        {/* Header */}
        <div onClick={()=>setOpen(!open)} style={{background:"#22221C",padding:"10px 14px",cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:18}}>{"\\uD83E\\uDD16"}</span>
          <span style={{color:"white",fontWeight:800,fontSize:14,flex:1}}>KI-Coach</span>
          <span style={{background:statusColor,color:"white",borderRadius:10,padding:"2px 8px",fontSize:10,fontWeight:700}}>{statusText}</span>
          <span style={{color:"white",fontSize:12}}>{open?"\\u25B2":"\\u25BC"}</span>
        </div>

        {open&&(
          <div>
            {/* Tabs */}
            <div style={{display:"flex",gap:0,borderBottom:"1px solid #e5e7eb",padding:"0 8px",background:"#f0f1f2"}}>
              <button onClick={()=>setTab("rules")} style={tabStyle("rules")}>
                Regelcheck {errorCount>0&&<span style={{background:"#dc2626",color:"white",borderRadius:8,padding:"0 5px",fontSize:9,marginLeft:3}}>{errorCount}</span>}
              </button>
              <button onClick={()=>setTab("optimize")} style={tabStyle("optimize")}>
                Optimierung {optimizations.length>0&&<span style={{background:"#f59e0b",color:"white",borderRadius:8,padding:"0 5px",fontSize:9,marginLeft:3}}>{optimizations.length}</span>}
              </button>
              <button onClick={()=>setTab("training")} style={tabStyle("training")}>
                Training
              </button>
              <button onClick={()=>setTab("ki")} style={tabStyle("ki")}>
                {"\\uD83E\\uDDE0"} KI-Coach
              </button>
            </div>

            {/* Category Info Banner */}
            <div style={{padding:"6px 12px",background:"#f0f1f2",borderBottom:"1px solid #e5e7eb",display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
              <span style={{fontSize:10,fontWeight:700,color:"#22221C",textTransform:"uppercase",letterSpacing:1}}>Kategorie:</span>
              <span style={{fontSize:12,fontWeight:700,color:"#22221C"}}>{catDef.label}</span>
              <span style={{fontSize:10,color:"#6b7280"}}>{rules.info||rules.label}</span>
            </div>

            <div style={{padding:12,maxHeight:tab==="ki"?700:400,overflowY:"auto"}}>
              {/* RULES TAB */}
              {tab==="rules"&&(
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:"#6b7280",marginBottom:8}}>Regelkonformit\\u00E4t \\u2014 {rules.label}</div>
                  {ruleChecks.map((c,i)=>(
                    <div key={i} style={{display:"flex",gap:6,alignItems:"flex-start",padding:"4px 0",borderBottom:"1px solid #f3f4f6",fontSize:11}}>
                      <span style={{fontSize:13,lineHeight:1}}>{c.icon}</span>
                      <span style={{color:c.type==="error"?"#dc2626":c.type==="warning"?"#92400e":"#22221C",fontWeight:c.type==="ok"?400:600}}>{c.msg}</span>
                    </div>
                  ))}
                  {isCompliant&&<div style={{marginTop:8,padding:"6px 10px",background:"#f0f1f2",borderRadius:6,fontSize:11,color:"#22221C",fontWeight:600}}>
                    {"\\u2705"} Programm ist regelkonform!
                  </div>}
                </div>
              )}

              {/* OPTIMIZATION TAB */}
              {tab==="optimize"&&(
                <div>
                  {optimizations.length===0?(
                    <div style={{fontSize:11,color:"#9ca3af",fontStyle:"italic",padding:8}}>Keine Optimierungsvorschl\\u00E4ge \\u2014 alle Elemente sind gut konfiguriert!</div>
                  ):(
                    <div>
                      <div style={{fontSize:11,fontWeight:700,color:"#92400e",marginBottom:8}}>
                        {optimizations.length} Vorschl\\u00E4ge \\u2014 Potenzial: +{totalPotential.toFixed(2)} Punkte
                      </div>
                      {optimizations.map((tip,i)=>(
                        <div key={i} style={{padding:"6px 8px",marginBottom:4,borderRadius:6,
                          background:tip.priority===1?"#fef2f2":tip.priority===2?"#fffbeb":"#f0f1f2",
                          border:\`1px solid \${tip.priority===1?"#fca5a5":tip.priority===2?"#fde68a":"#DEE2E6"}\`,fontSize:11}}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <span style={{color:"#374151",flex:1}}>{tip.msg}</span>
                            {tip.points>0&&<span style={{fontWeight:800,color:"#059669",fontSize:12,whiteSpace:"nowrap",marginLeft:6}}>+{tip.points.toFixed(2)}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TRAINING TAB */}
              {tab==="training"&&(
                <div>
                  {trainingTips.length===0?(
                    <div style={{fontSize:11,color:"#9ca3af",fontStyle:"italic",padding:8}}>Fülle Elemente aus, um Trainingstipps zu erhalten.</div>
                  ):trainingTips.map((tip,i)=>(
                    <div key={i} style={{padding:"8px 10px",marginBottom:6,borderRadius:8,background:"#f0f1f2",border:"1px solid #ddd6fe"}}>
                      <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:3}}>
                        <span style={{fontSize:15}}>{tip.icon}</span>
                        <span style={{fontWeight:700,fontSize:12,color:"#374151"}}>{tip.title}</span>
                        {tip.pct!==undefined&&(
                          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:4}}>
                            <div style={{width:40,height:6,background:"#e5e7eb",borderRadius:3,overflow:"hidden"}}>
                              <div style={{width:\`\${Math.max(0,Math.min(tip.pct,100))}%\`,height:"100%",
                                background:tip.pct>=80?"#059669":tip.pct>=50?"#f59e0b":"#dc2626",borderRadius:3}}/>
                            </div>
                            <span style={{fontSize:9,fontWeight:700,color:"#6b7280"}}>{tip.pct}%</span>
                          </div>
                        )}
                      </div>
                      <div style={{fontSize:11,color:"#6b7280",lineHeight:1.4}}>{tip.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* KI-COACH TAB */}
              {tab==="ki"&&(
                <div>
                  {/* Quick actions */}
                  <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}>
                    <button onClick={quickAnalysis} disabled={kiLoading} style={{padding:"5px 10px",borderRadius:6,border:"1px solid #22221C",background:"#f0f1f2",color:"#22221C",fontSize:10,fontWeight:700,cursor:"pointer"}}>
                      {"\\uD83D\\uDD0D"} Komplett-Analyse
                    </button>
                    <button onClick={()=>sendToKI("Prüfe ob mein Programm regelkonform ist und liste alle Regelverstöße auf.")} disabled={kiLoading} style={{padding:"5px 10px",borderRadius:6,border:"1px solid #dc2626",background:"#fef2f2",color:"#dc2626",fontSize:10,fontWeight:700,cursor:"pointer"}}>
                      {"\\u2696\\uFE0F"} Regelprüfung
                    </button>
                    <button onClick={()=>sendToKI("Welche Elemente sollte ich upgraden oder tauschen für maximale Punkte? Gib konkrete Vorschläge.")} disabled={kiLoading} style={{padding:"5px 10px",borderRadius:6,border:"1px solid #22221C",background:"#f0f1f2",color:"#22221C",fontSize:10,fontWeight:700,cursor:"pointer"}}>
                      {"\\uD83D\\uDCC8"} Optimieren
                    </button>
                    <button onClick={()=>sendToKI("Erstelle einen Trainingsplan für die nächsten 4 Wochen basierend auf meinem aktuellen Programm.")} disabled={kiLoading} style={{padding:"5px 10px",borderRadius:6,border:"1px solid #f59e0b",background:"#fffbeb",color:"#92400e",fontSize:10,fontWeight:700,cursor:"pointer"}}>
                      {"\\uD83C\\uDFCB\\uFE0F"} Trainingsplan
                    </button>
                  </div>

                  {/* Chat history */}
                  <div style={{minHeight:300,maxHeight:550,overflowY:"auto",marginBottom:10,border:"1px solid #e5e7eb",borderRadius:10,background:"#fafafa"}}>
                    {kiHistory.length===0&&!kiLoading&&(
                      <div style={{padding:24,textAlign:"center",color:"#9ca3af",fontSize:12}}>
                        <div style={{fontSize:36,marginBottom:8}}>{"\\uD83E\\uDDE0"}</div>
                        <div style={{fontWeight:700,color:"#22221C",fontSize:14,marginBottom:4}}>KI-Coach bereit</div>
                        Frage den KI-Coach! Er kennt alle World Skate 2026 Regeln und analysiert dein Programm.
                      </div>
                    )}
                    {kiHistory.map((m,i)=>(
                      <div key={i} style={{padding:"10px 14px",borderBottom:"1px solid #f3f4f6",
                        background:m.role==="user"?"#ede9fe":m.role==="error"?"#fef2f2":"white"}}>
                        <div style={{fontSize:10,fontWeight:700,color:m.role==="user"?"#22221C":m.role==="error"?"#dc2626":"#059669",marginBottom:3}}>
                          {m.role==="user"?"Du":m.role==="error"?"Fehler":"KI-Coach"}
                        </div>
                        <div style={{fontSize:12,color:"#374151",lineHeight:1.6,whiteSpace:"pre-wrap"}}>{m.text}</div>
                      </div>
                    ))}
                    {kiLoading&&(
                      <div style={{padding:"16px",textAlign:"center",color:"#22221C",fontSize:12,fontWeight:600}}>
                        {"\\uD83E\\uDDE0"} KI analysiert... <span style={{animation:"pulse 1.5s infinite"}}>{"●●●"}</span>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div style={{display:"flex",gap:6}}>
                    <input value={kiMsg} onChange={e=>setKiMsg(e.target.value)}
                      onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendToKI(kiMsg);}}}
                      placeholder="Frage an den KI-Coach..." disabled={kiLoading}
                      style={{flex:1,padding:"10px 12px",borderRadius:8,border:"1px solid #d1d5db",fontSize:12,outline:"none"}}/>
                    <button onClick={()=>sendToKI(kiMsg)} disabled={kiLoading||!kiMsg.trim()}
                      style={{padding:"10px 18px",borderRadius:8,border:"none",background:kiLoading?"#d1d5db":"#22221C",color:"white",fontWeight:700,fontSize:12,cursor:kiLoading?"wait":"pointer"}}>
                      Senden
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ============================================================
  //  TRAINING SIMULATOR
  // ============================================================
  function SimBonusPill({active,label,onClick}){
    return <button onClick={onClick} style={{padding:"3px 8px",borderRadius:10,border:active?"2px solid #22221C":"1px solid #d1d5db",
      background:active?"#22221C":"white",color:active?"white":"#374151",fontSize:10,fontWeight:600,cursor:"pointer",lineHeight:1.4,
      transition:"all .15s"}}>{label}</button>;
  }

  function SimElementCard({num,row,types,judgeCount,onChange,onRemove,totalRows}){
    const typeDef=types.find(t=>t.code===row.typeCode);
    const isCombo=typeDef?.isCombo;
    const isSpin=row.typeCode==="CSp"||row.typeCode==="SSp";
    const isJump=row.typeCode==="CoJ"||row.typeCode==="SJu";

    // Compute base score (reuse computeRow)
    const computed=computeRow(row,types,judgeCount);
    const rawBase=computed.base;

    // Calculate bonus multiplier
    const bonuses=row.bonuses||[];
    let bonusPct=0;
    let hasOverride=false;
    let overrideFactor=1;
    bonuses.forEach(bid=>{
      const b=ALL_BONUSES.find(x=>x.id===bid);
      if(!b)return;
      if(b.isOverride){hasOverride=true;overrideFactor=1+b.pct;}
      else bonusPct+=b.pct;
    });
    // NV = 0 base, DG = no bonus applied (per rules: "Downgraded-Sprünge erhalten keinen Bonus")
    const adjBase=row.nv?0:(row.dg||(!hasOverride&&bonusPct===0))?rawBase:hasOverride?Math.round(rawBase*overrideFactor*100)/100:Math.round(rawBase*(1+bonusPct)*100)/100;
    const bonusPoints=Math.round((adjBase-rawBase)*100)/100;
    const finalScore=Math.round((adjBase+computed.goeVal)*100)/100;

    // Which bonuses are applicable?
    let applicableBonuses=[];
    if(isJump){
      applicableBonuses=[...JUMP_BONUSES];
      if(isCombo)applicableBonuses=[...applicableBonuses,...COMBO_JUMP_BONUSES];
    }
    if(isSpin)applicableBonuses=[...SPIN_POS_BONUSES,...SPIN_VAR_BONUSES];

    const toggleBonus=(bid)=>{
      const cur=row.bonuses||[];
      if(cur.includes(bid)){
        onChange({...row,bonuses:cur.filter(x=>x!==bid)});
      } else {
        // If selecting an override bonus, remove any existing overrides first
        const b=ALL_BONUSES.find(x=>x.id===bid);
        const nb=b&&b.isOverride ? cur.filter(id=>{const o=ALL_BONUSES.find(x=>x.id===id);return !o||!o.isOverride;}) : [...cur];
        nb.push(bid);
        onChange({...row,bonuses:nb});
      }
    };

    // combo sub-element handlers
    const updateSub=(i,sub)=>{const subs=[...(row.comboEls||[])];subs[i]=sub;onChange({...row,comboEls:subs});};
    const addSub=()=>{const subs=[...(row.comboEls||[])];if(subs.length<5){subs.push({code:"",rotation:"normal",nv:false,judgeGoe:[0,0,0,0,0],_id:Math.random().toString(36).slice(2)});onChange({...row,comboEls:subs});}};
    const removeSub=(i)=>{onChange({...row,comboEls:(row.comboEls||[]).filter((_,j)=>j!==i)});};

    const el=!isCombo&&typeDef?typeDef.data.find(e=>e.code===row.elCode):null;
    const showRot=!isCombo&&typeDef?.hasRotation&&el&&(el.lt!==undefined&&el.lt>0);
    const hasElements=isCombo?(row.comboEls||[]).some(s=>s.code):!!el;

    const cardBg=row.nv?"#fef2f2":bonuses.length>0?"#f0f1f2":"white";
    const borderColor=row.nv?"#fca5a5":bonuses.length>0?"#DEE2E6":"#e5e7eb";

    return(
      <div style={{background:cardBg,borderRadius:10,border:\`2px solid \${borderColor}\`,padding:12,marginBottom:8,
        boxShadow:"0 1px 3px rgba(0,0,0,.06)",opacity:row.nv?0.6:1}}>
        {/* Header row */}
        <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:8,flexWrap:"wrap"}}>
          <span style={{background:"#22221C",color:"white",borderRadius:6,padding:"2px 8px",fontSize:13,fontWeight:800,minWidth:28,textAlign:"center"}}>{num}</span>
          <select value={row.typeCode} onChange={e=>{
            const newType=types.find(t=>t.code===e.target.value);
            const nr={typeCode:e.target.value,elCode:"",judgeGoe:[0,0,0,0,0],rotation:"normal",comboEls:[],nv:false,dg:false,bonuses:[]};
            if(newType?.isCombo)nr.comboEls=[{code:"",rotation:"normal",nv:false,judgeGoe:[0,0,0,0,0],_id:Math.random().toString(36).slice(2)},{code:"",rotation:"normal",nv:false,judgeGoe:[0,0,0,0,0],_id:Math.random().toString(36).slice(2)}];
            onChange(nr);
          }} style={{...SEL,fontWeight:700,minWidth:100}}>
            <option value="">-- Typ --</option>
            {types.map(t=><option key={t.code} value={t.code}>{t.code} - {t.label}</option>)}
          </select>

          {!isCombo&&typeDef&&(
            <select value={row.elCode} onChange={e=>onChange({...row,elCode:e.target.value,judgeGoe:[0,0,0,0,0]})} style={{...SEL,flex:1,minWidth:160}}>
              <option value="">-- Element --</option>
              {typeDef.data.map(e=><option key={e.code} value={e.code}>{e.code} - {e.name} ({e.base})</option>)}
            </select>
          )}

          {showRot&&(
            <div style={{display:"flex",gap:2}}>
              <button onClick={()=>onChange({...row,rotation:"normal"})} style={BTN(row.rotation==="normal","#6b7280")}>N</button>
              <button onClick={()=>onChange({...row,rotation:"lt"})} style={BTN(row.rotation==="lt","#f59e0b")}>&lt;</button>
              <button onClick={()=>onChange({...row,rotation:"ltlt"})} style={BTN(row.rotation==="ltlt","#ef4444")}>&lt;&lt;</button>
            </div>
          )}

          <div style={{display:"flex",gap:2,marginLeft:"auto"}}>
            <button onClick={()=>onChange({...row,nv:!row.nv})} style={{...BTN(row.nv,"#dc2626"),fontSize:10,padding:"2px 6px"}}>NV</button>
            <button onClick={()=>onChange({...row,dg:!row.dg})} style={{...BTN(row.dg,"#f59e0b"),fontSize:10,padding:"2px 6px"}}>DG</button>
            {totalRows>1&&<button onClick={onRemove} style={{background:"#fee2e2",color:"#dc2626",border:"none",borderRadius:4,padding:"2px 6px",fontSize:10,fontWeight:700,cursor:"pointer"}}>x</button>}
          </div>
        </div>

        {/* Combo sub-elements */}
        {isCombo&&typeDef&&(
          <div style={{marginBottom:8,paddingLeft:10,borderLeft:"3px solid #DEE2E6"}}>
            {(row.comboEls||[]).map((sub,i)=>(
              <ComboSubRow key={sub._id||i} idx={i} sub={sub} data={typeDef.data}
                hasComboValues={typeDef.data.some(e=>e.combo!==undefined)}
                hasRotation={!!typeDef.hasRotation}
                onChange={s=>updateSub(i,s)} onRemove={()=>removeSub(i)}
                judgeCount={judgeCount}/>
            ))}
            {(row.comboEls||[]).length<5&&(
              <button onClick={addSub} style={{marginTop:2,padding:"2px 8px",borderRadius:3,border:"1px dashed #22221C",background:"#f0f1f2",color:"#22221C",fontSize:10,fontWeight:600,cursor:"pointer"}}>+ Element</button>
            )}
          </div>
        )}

        {/* Non-combo judge GOE */}
        {!isCombo&&hasElements&&!row.nv&&(
          <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:8,flexWrap:"wrap"}}>
            <span style={{fontSize:10,fontWeight:700,color:"#6b7280"}}>QOE:</span>
            {Array.from({length:judgeCount}).map((_,ji)=>{
              const jg=row.judgeGoe||[0,0,0,0,0];
              return <select key={ji} value={jg[ji]||0} onChange={e=>{
                const ng=[...(row.judgeGoe||[0,0,0,0,0])];ng[ji]=parseInt(e.target.value);
                onChange({...row,judgeGoe:ng});
              }} style={{...SEL,width:40,fontSize:11,padding:"3px 1px",textAlign:"center",
                color:jg[ji]>0?"#059669":jg[ji]<0?"#dc2626":"#6b7280",fontWeight:600}}>
                {[-3,-2,-1,0,1,2,3].map(v=><option key={v} value={v}>{v>0?"+"+v:v}</option>)}
              </select>;
            })}
            <span style={{fontSize:11,fontWeight:700,color:computed.goeVal>=0?"#059669":"#dc2626"}}>
              {(computed.goeVal>=0?"+":"")+computed.goeVal.toFixed(2)}
            </span>
          </div>
        )}

        {/* Bonus pills */}
        {applicableBonuses.length>0&&hasElements&&!row.nv&&(
          <div style={{marginBottom:8}}>
            <div style={{fontSize:10,fontWeight:700,color:"#22221C",marginBottom:3}}>
              {isSpin?"Positionen & Variationen:":"Bonus:"}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:3}}>
              {applicableBonuses.map(b=>(
                <SimBonusPill key={b.id} active={bonuses.includes(b.id)} label={b.label} onClick={()=>toggleBonus(b.id)}/>
              ))}
            </div>
          </div>
        )}

        {/* Score line */}
        {hasElements&&(
          <div style={{display:"flex",gap:8,alignItems:"center",padding:"6px 8px",background:"#f8f9fa",borderRadius:6,flexWrap:"wrap"}}>
            <span style={{fontSize:11,color:"#6b7280"}}>Base: <strong style={{color:"#374151"}}>{rawBase.toFixed(2)}</strong></span>
            {bonusPoints!==0&&<span style={{fontSize:11,color:bonusPoints>0?"#059669":"#dc2626",fontWeight:700}}>
              Bonus: {bonusPoints>0?"+":""}{bonusPoints.toFixed(2)}
            </span>}
            {bonusPoints!==0&&<span style={{fontSize:11,color:"#374151"}}>Adj: <strong>{adjBase.toFixed(2)}</strong></span>}
            <span style={{fontSize:11,color:"#6b7280"}}>QOE: <strong style={{color:computed.goeVal>=0?"#059669":"#dc2626"}}>{(computed.goeVal>=0?"+":"")+computed.goeVal.toFixed(2)}</strong></span>
            <span style={{marginLeft:"auto",fontSize:16,fontWeight:800,color:row.nv?"#dc2626":"#059669"}}>
              {row.nv?"0.00":finalScore.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    );
  }

  function TrainingSimulator({importData,onImportDone,disziplin,season}){
    const screen=useScreen();
    const [kategorie,setKategorie]=useState("senior");
    const [segment,setSegment]=useState("senior_fp");
    const [geschlecht,setGeschlecht]=useState("damen");
    const [skater,setSkater]=useState("");
    const [cat,setCat]=useState("");
    const [music,setMusic]=useState("");
    const [judgeCount,setJudgeCount]=useState(3);
    const [importMsg,setImportMsg]=useState("");

    const isPairs=segment.startsWith("pairs_");
    const segDef=SEGMENT_DEFS[segment];
    const types=getSeasonTypes(season||"2026",isPairs);
    const pcsFactor=getPcsFactor(segment,geschlecht);

    const emptyRow=()=>({typeCode:"",elCode:"",judgeGoe:[0,0,0,0,0],rotation:"normal",comboEls:[],nv:false,dg:false,bonuses:[],_id:Math.random().toString(36).slice(2)});
    const emptyPcs=()=>({skating:[0,0,0,0,0],transitions:[0,0,0,0,0],performance:[0,0,0,0,0],choreography:[0,0,0,0,0]});
    const [rows,setRows]=useState(Array.from({length:segDef.rows},emptyRow));
    const [pcs,setPcs]=useState(emptyPcs());
    const [deductions,setDeductions]=useState(0);
    const [extraPoints,setExtraPoints]=useState(0);

    // Import from Content Sheet
    React.useEffect(()=>{
      if(!importData)return;
      if(importData.kategorie)setKategorie(importData.kategorie);
      setSegment(importData.segment);
      if(importData.geschlecht)setGeschlecht(importData.geschlecht);
      // Clean name from any "CATEGORY:" suffix
      let simName = (importData.skater||"");
      const simCatM = simName.match(/\\s+CATEGORY:\\s+(.+)$/i);
      simName = simName.replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
      setSkater(simName);
      setCat(importData.cat || (simCatM ? simCatM[1].trim() : ""));
      setMusic(importData.music||"");
      setJudgeCount(importData.judgeCount||3);
      // Convert rows: add bonuses:[] field
      const imported=importData.rows.map(r=>({...r,bonuses:r.bonuses||[],
        comboEls:(r.comboEls||[]).map(s=>({...s,judgeGoe:s.judgeGoe||[0,0,0,0,0]}))}));
      setRows(imported);
      if(importData.pcs){
        const rawPcs=importData.pcs;const safePcs={};
        for(const key of["skating","transitions","performance","choreography"]){
          const arr=Array.isArray(rawPcs[key])?rawPcs[key]:[0,0,0,0,0];
          safePcs[key]=arr.map(v=>{
            const n=(typeof v==='number'&&!isNaN(v))?v:0;
            return(n<0||n>10)?0:n;
          });
          while(safePcs[key].length<5)safePcs[key].push(0);
        }
        setPcs(safePcs);
      }
      if(importData.deductions!==undefined)setDeductions(importData.deductions);
      if(importData.extraPoints!==undefined)setExtraPoints(importData.extraPoints);
      const filled=imported.filter(r=>{
        const td=getSeasonTypes(season||"2026",importData.segment.startsWith("pairs_")).find(t=>t.code===r.typeCode);
        if(td?.isCombo)return(r.comboEls||[]).some(s=>s.code);
        return!!r.elCode;
      }).length;
      setImportMsg(\`\${filled} Elemente aus Content Sheet geladen\`);
      if(onImportDone)onImportDone();
      setTimeout(()=>setImportMsg(""),4000);
    },[importData,onImportDone]);

    const changeKategorie=(k)=>{setKategorie(k);const segs=CATEGORY_DEFS[k]?.segments||[];const first=segs[0]||"senior_fp";setSegment(first);setRows(Array.from({length:SEGMENT_DEFS[first].rows},emptyRow));setPcs(emptyPcs());setDeductions(0);setExtraPoints(0);};
    const changeSegment=(s)=>{setSegment(s);setRows(Array.from({length:SEGMENT_DEFS[s].rows},emptyRow));setPcs(emptyPcs());setDeductions(0);setExtraPoints(0);};
    const updateRow=useCallback((i,data)=>{setRows(prev=>prev.map((r,j)=>j===i?data:r));},[]);
    const addRow=()=>setRows(prev=>[...prev,emptyRow()]);
    const removeRow=(i)=>setRows(prev=>prev.filter((_,j)=>j!==i));
    const clearAll=()=>{setRows(Array.from({length:segDef.rows},emptyRow));setPcs(emptyPcs());setDeductions(0);setExtraPoints(0);};

    // Compute TES with bonuses
    const {tes,bonusTotal,elements}=useMemo(()=>{
      let tes=0,bonusTotal=0;
      const elements=rows.map(row=>{
        const computed=computeRow(row,types,judgeCount);
        const rawBase=computed.base;
        const bonuses=row.bonuses||[];
        let bonusPct=0,hasOverride=false,overrideFactor=1;
        bonuses.forEach(bid=>{const b=ALL_BONUSES.find(x=>x.id===bid);if(!b)return;if(b.isOverride){hasOverride=true;overrideFactor=1+b.pct;}else bonusPct+=b.pct;});
        const adjBase=row.nv?0:row.dg?rawBase:hasOverride?Math.round(rawBase*overrideFactor*100)/100:Math.round(rawBase*(1+bonusPct)*100)/100;
        const bp=Math.round((adjBase-rawBase)*100)/100;
        const finalScore=row.nv?0:Math.round((adjBase+computed.goeVal)*100)/100;
        bonusTotal+=bp;
        tes+=finalScore;
        return{rawBase,adjBase,bp,goeVal:computed.goeVal,finalScore,typeDef:computed.typeDef};
      });
      return{tes:Math.round(tes*100)/100,bonusTotal:Math.round(bonusTotal*100)/100,elements};
    },[rows,types,judgeCount]);

    // PCS
    const pcsTotal=useMemo(()=>{
      return PCS_COMPONENTS.reduce((sum,comp)=>{
        const avg=calcPcsAvg(pcs[comp.key],judgeCount);
        const sc=Math.round(avg*pcsFactor*100)/100;
        return sum+(isNaN(sc)?0:sc);
      },0);
    },[pcs,judgeCount,pcsFactor]);

    const totalScore=Math.round(((isNaN(tes)?0:tes)+(isNaN(pcsTotal)?0:pcsTotal)-(isNaN(deductions)?0:deductions)+(isNaN(extraPoints)?0:extraPoints))*100)/100;

    // Bonus summary
    const bonusSummary=useMemo(()=>{
      const map={};
      rows.forEach(r=>(r.bonuses||[]).forEach(bid=>{
        const b=ALL_BONUSES.find(x=>x.id===bid);
        if(b){if(!map[bid])map[bid]={...b,count:0,total:0};map[bid].count++;}
      }));
      // Calculate totals from elements — distribute proportionally by |pct|
      rows.forEach((r,i)=>{
        const el=elements[i];
        if(!el||!el.bp)return;
        const bids=(r.bonuses||[]);
        const totalPct=bids.reduce((s,id)=>{const b=ALL_BONUSES.find(x=>x.id===id);return s+(b?Math.abs(b.pct):0);},0);
        bids.forEach(bid=>{
          const b=ALL_BONUSES.find(x=>x.id===bid);
          if(map[bid]&&b&&totalPct>0) map[bid].total+=el.bp*(Math.abs(b.pct)/totalPct);
          else if(map[bid]) map[bid].total+=el.bp/bids.length;
        });
      });
      return Object.values(map);
    },[rows,elements]);

    const filled=rows.filter(r=>{
      const td=types.find(t=>t.code===r.typeCode);
      if(td?.isCombo)return(r.comboEls||[]).some(s=>s.code);
      return!!r.elCode;
    }).length;

    // Was-wäre-wenn Snapshot
    const [snapshot,setSnapshot]=useState(null);
    const takeSnapshot=()=>setSnapshot({tes,pcsTotal,bonusTotal,totalScore,deductions,extraPoints,label:"Aktuell",_ts:Date.now()});
    const diff=snapshot?{tes:tes-snapshot.tes,pcs:pcsTotal-snapshot.pcsTotal,total:totalScore-snapshot.totalScore}:null;

    return(
      <div style={{padding:"16px 20px",maxWidth:1200,margin:"0 auto"}}>
        {/* Was-wäre-wenn Banner */}
        {snapshot&&<div style={{background:"#f0f1f2",border:"1px solid #DEE2E6",borderRadius:10,padding:12,marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:"#4338ca"}}>Was-wäre-wenn Vergleich</div>
            <div style={{fontSize:11,color:"#6b7280",marginTop:2}}>Snapshot: TES {snapshot.tes.toFixed(2)} + PCS {snapshot.pcsTotal.toFixed(2)} = {snapshot.totalScore.toFixed(2)}</div>
          </div>
          <div style={{display:"flex",gap:12,alignItems:"center"}}>
            <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#6b7280"}}>TES</div><div style={{fontSize:16,fontWeight:800,color:diff.tes>=0?"#059669":"#dc2626"}}>{diff.tes>=0?"+":""}{diff.tes.toFixed(2)}</div></div>
            <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#6b7280"}}>PCS</div><div style={{fontSize:16,fontWeight:800,color:diff.pcs>=0?"#059669":"#dc2626"}}>{diff.pcs>=0?"+":""}{diff.pcs.toFixed(2)}</div></div>
            <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#6b7280"}}>Total</div><div style={{fontSize:20,fontWeight:800,color:diff.total>=0?"#059669":"#dc2626"}}>{diff.total>=0?"+":""}{diff.total.toFixed(2)}</div></div>
            <button onClick={()=>setSnapshot(null)} style={{padding:"5px 10px",borderRadius:5,border:"1px solid #DEE2E6",background:"white",fontSize:11,cursor:"pointer"}}>× Schließen</button>
          </div>
        </div>}

        {/* Category + Segment + Judges */}
        <div style={{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
          <select value={kategorie} onChange={e=>changeKategorie(e.target.value)} style={{
            padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:12,fontWeight:700,cursor:"pointer",
          }}>
            {(disziplin==="pairs"?PAIRS_CATEGORIES:disziplin==="einzel"?SINGLES_CATEGORIES:Object.entries(CATEGORY_DEFS)).map(([k,v])=>(
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          {(CATEGORY_DEFS[kategorie]?.segments||[]).map(seg=>(
            <button key={seg} onClick={()=>changeSegment(seg)} style={{padding:"6px 14px",borderRadius:6,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",
              background:segment===seg?"#22221C":"#e5e7eb",color:segment===seg?"white":"#374151"}}>{SEGMENT_DEFS[seg]?.label}</button>
          ))}
          {!isPairs&&<>
            <span style={{fontSize:11,color:"#6b7280"}}>Geschlecht:</span>
            {[{k:"damen",l:"Damen"},{k:"herren",l:"Herren"}].map(g=>(
              <button key={g.k} onClick={()=>setGeschlecht(g.k)} style={{padding:"5px 12px",borderRadius:5,border:"none",fontSize:12,fontWeight:700,cursor:"pointer",
                background:geschlecht===g.k?"#22221C":"#e5e7eb",color:geschlecht===g.k?"white":"#374151"}}>{g.l}</button>
            ))}
          </>}
          <span style={{marginLeft:"auto",fontSize:11,color:"#6b7280"}}>Judges:</span>
          {[3,5].map(n=>(
            <button key={n} onClick={()=>setJudgeCount(n)} style={{padding:"5px 12px",borderRadius:5,border:"none",fontSize:12,fontWeight:700,cursor:"pointer",
              background:judgeCount===n?"#22221C":"#e5e7eb",color:judgeCount===n?"white":"#374151"}}>{n}</button>
          ))}
        </div>

        {/* Info */}
        <div className="r-grid1-mobile" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:12}}>
          <input placeholder="Name" value={skater} onChange={e=>setSkater(e.target.value)} style={{padding:"7px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:13}}/>
          <input placeholder="Kategorie" value={cat} onChange={e=>setCat(e.target.value)} style={{padding:"7px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:13}}/>
          <input placeholder="Musik" value={music} onChange={e=>setMusic(e.target.value)} style={{padding:"7px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:13}}/>
        </div>

        {/* Actions */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          <label style={{padding:"6px 12px",borderRadius:5,border:"1px solid #22221C",background:"#f8f9fa",color:"#22221C",fontWeight:600,fontSize:11,cursor:"pointer"}}>
            Content Sheet laden (PDF/TXT)
            <input type="file" accept=".pdf,.txt" onChange={e=>{
              // Reuse the same upload logic by simulating through a hidden content sheet
              const file=e.target.files?.[0];if(!file)return;e.target.value="";
              const typeMap={};const curTypes=getSeasonTypes(season||"2026",isPairs);
              curTypes.forEach(t=>{typeMap[t.code.toLowerCase()]=t.code;});
              const fuzzy={...typeMap,col:"CoJ",c0j:"CoJ",siu:"SJu",fosg:"FoSq",fos:"FoSq",cli:"CLi",sli:"SLi",ctsp:"CtSp",tlj:"Tj",twlz:"Tw"};
              if(file.name.toLowerCase().endsWith(".pdf")){
                setImportMsg("PDF wird geladen...");
                (async()=>{try{
                  const ab=await file.arrayBuffer();
                  const pdf=await pdfjsLib.getDocument({data:ab}).promise;
                  let text="";let textItems=0;
                  for(let p=1;p<=pdf.numPages;p++){
                    const page=await pdf.getPage(p);const content=await page.getTextContent();textItems+=content.items.length;
                    const byY={};content.items.forEach(it=>{const y=Math.round(it.transform[5]);if(!byY[y])byY[y]=[];byY[y].push({t:it.str,x:it.transform[4]});});
                    Object.keys(byY).sort((a,b)=>b-a).forEach(y=>{text+=byY[y].sort((a,b)=>a.x-b.x).map(i=>i.t).join(" ")+"\\n";});
                  }
                  if(textItems<5){
                    setImportMsg("Bild-PDF erkannt, OCR läuft...");text="";
                    for(let p=1;p<=pdf.numPages;p++){
                      const pg=await pdf.getPage(p);const vp=pg.getViewport({scale:3});
                      const canvas=document.createElement("canvas");canvas.width=vp.width;canvas.height=vp.height;
                      const ctx=canvas.getContext("2d");await pg.render({canvasContext:ctx,viewport:vp}).promise;
                      const res=await Tesseract.recognize(canvas,"eng",{logger:m=>{if(m.status==="recognizing text")setImportMsg(\`OCR: \${Math.round((m.progress||0)*100)}%\`);}});
                      text+=res.data.text+"\\n";
                    }
                  }
                  const nm=text.match(/(?:COMPETITORS?\\s*NAME|NAME)\\s*[=_|]*\\s*(.+?)(?:\\n|$)/im);
                  const cm=text.match(/CATEGORY\\s+(.+?)(?:\\n|$)/im);
                  if(nm)setSkater(nm[1].trim().replace(/^[=_|]+\\s*/,''));
                  if(cm)setCat(cm[1].trim());
                  const newRows=[];
                  text.split("\\n").forEach(line=>{
                    const t=line.trim();if(!t)return;
                    if(/ELEMENT|DECLARED|PERFORMED|Filled|Panel|Notes|Time|Code|PROGRAM|CONTENT|SHEET|WORLD|SKATE|COMPETITOR|CATEGORY/i.test(t))return;
                    const rm=t.match(/^(\\d{1,2})\\b/);if(!rm)return;
                    const words=t.substring(rm[0].length).trim().split(/\\s+/);
                    for(const w of words){const c=w.replace(/[^A-Za-z0-9]/g,'');if(c.length<2||c.length>6)continue;
                      const tc=fuzzy[c.toLowerCase()];if(tc){newRows.push({...emptyRow(),typeCode:tc});break;}}
                  });
                  if(newRows.length>0){while(newRows.length<segDef.rows)newRows.push(emptyRow());setRows(newRows);
                    setImportMsg(\`\${newRows.filter(r=>r.typeCode).length} Elemente aus PDF geladen\`);
                  }else{setImportMsg("Keine Elemente erkannt");}
                  setTimeout(()=>setImportMsg(""),5000);
                }catch(err){setImportMsg("Fehler: "+err.message);}})();
              }else{
                const reader=new FileReader();
                reader.onload=ev=>{
                  const codes=ev.target.result.split("\\n").map(l=>l.trim()).filter(l=>l);
                  const newRows=[];const allData=curTypes.flatMap(t=>t.data.map(e=>({...e,typeCode:t.code})));
                  codes.forEach(code=>{const found=allData.find(e=>e.code===code);
                    if(found)newRows.push({...emptyRow(),typeCode:found.typeCode,elCode:found.code});});
                  while(newRows.length<segDef.rows)newRows.push(emptyRow());setRows(newRows);
                  setImportMsg(\`\${newRows.filter(r=>r.elCode).length} Elemente geladen\`);
                  setTimeout(()=>setImportMsg(""),5000);
                };reader.readAsText(file);
              }
            }} style={{display:"none"}}/>
          </label>
          <button onClick={addRow} style={{padding:"6px 12px",borderRadius:5,border:"1px solid #22221C",background:"#f0f1f2",color:"#22221C",fontWeight:600,fontSize:11,cursor:"pointer"}}>+ Element</button>
          <button onClick={clearAll} style={{padding:"6px 12px",borderRadius:5,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontWeight:600,fontSize:11,cursor:"pointer"}}>Alles löschen</button>
          <button onClick={takeSnapshot} style={{padding:"6px 12px",borderRadius:5,border:"1px solid #22221C",background:snapshot?"#22221C":"#f8f9fa",color:snapshot?"white":"#22221C",fontWeight:600,fontSize:11,cursor:"pointer"}}>{snapshot?"↻ Neuer Snapshot":"📸 Was-wäre-wenn"}</button>
          {importMsg&&<span style={{fontSize:11,color:"#22221C",fontWeight:600,background:"#f0f1f2",padding:"4px 10px",borderRadius:5,border:"1px solid #DEE2E6"}}>{importMsg}</span>}
          <div style={{marginLeft:"auto",fontSize:11,color:"#6b7280"}}>{filled} / {rows.length} Elemente</div>
        </div>

        <div className="r-grid1-mobile" style={{display:"grid",gridTemplateColumns:screen.mobile?"1fr":"1fr 300px",gap:screen.mobile?10:16,alignItems:"start"}}>
          {/* Element cards */}
          <div>
            <h3 style={{margin:"0 0 10px",fontSize:14,fontWeight:800,color:"#22221C"}}>Programm-Elemente</h3>
            {rows.map((r,i)=>(
              <SimElementCard key={r._id||i} num={i+1} row={r} types={types} judgeCount={judgeCount}
                onChange={d=>updateRow(i,d)} onRemove={()=>removeRow(i)} totalRows={rows.length}/>
            ))}

            {/* PCS — Official DRIV Layout */}
            <div style={{background:"white",borderRadius:10,border:"1px solid #d1d5db",marginTop:16,overflow:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:420}}>
                <thead>
                  <tr style={{background:"#e5e7eb"}}>
                    <th colSpan={4+judgeCount} style={{padding:"5px 8px",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"center",borderBottom:"1px solid #9ca3af"}}>
                      Program Components
                    </th>
                  </tr>
                  <tr style={{background:"#f9fafb",borderBottom:"2px solid #374151"}}>
                    <th style={{padding:"4px 8px",fontSize:9,fontWeight:700,textAlign:"left"}}>Component</th>
                    <th style={{padding:"4px 4px",fontSize:9,fontWeight:700,textAlign:"center",width:42}}>Factor</th>
                    {Array.from({length:judgeCount}).map((_,i)=>(
                      <th key={i} style={{padding:"4px 2px",fontSize:9,fontWeight:700,textAlign:"center",width:50}}>J{i+1}</th>
                    ))}
                    <th style={{padding:"4px 4px",fontSize:9,fontWeight:700,textAlign:"center",width:42}}>Avg</th>
                    <th style={{padding:"4px 6px",fontSize:9,fontWeight:700,textAlign:"right",width:50}}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {PCS_COMPONENTS.map(comp=>{
                    const avg=calcPcsAvg(pcs[comp.key],judgeCount);
                    const sc=Math.round(avg*pcsFactor*100)/100;
                    return(
                      <tr key={comp.key} style={{borderBottom:"1px solid #d1d5db"}}>
                        <td style={{padding:"4px 8px",fontSize:10,fontWeight:600,borderRight:"1px solid #e5e7eb"}}>{comp.label}</td>
                        <td style={{padding:"4px 2px",fontSize:10,textAlign:"center",color:"#6b7280",fontWeight:600,borderRight:"1px solid #e5e7eb"}}>{pcsFactor.toFixed(1)}</td>
                        {Array.from({length:judgeCount}).map((_,ji)=>{
                          const v=pcs[comp.key][ji];
                          const setV=(raw)=>{const np={...pcs};np[comp.key]=[...np[comp.key]];np[comp.key][ji]=raw;setPcs(np);};
                          const pcsMax=getPcsMax(segment);const clampV=()=>{const c=Math.max(0,Math.min(pcsMax,Math.round(v*4)/4));if(c!==v)setV(c);};
                          return(
                            <td key={ji} style={{padding:"3px 1px",textAlign:"center",borderRight:"1px solid #e5e7eb"}}>
                              <input type="number" min="0" max={pcsMax} step="0.25" value={v}
                                onChange={e=>setV(parseFloat(e.target.value)||0)}
                                onBlur={clampV}
                                style={{width:42,height:22,border:"1px solid #9ca3af",borderRadius:2,fontSize:11,fontWeight:700,textAlign:"center",padding:0,color:"#111827",background:"#fafafa",
                                  MozAppearance:"textfield",WebkitAppearance:"none"}}/>
                            </td>
                          );
                        })}
                        <td style={{padding:"4px 2px",fontSize:11,fontWeight:700,textAlign:"center",borderRight:"1px solid #e5e7eb"}}>{avg.toFixed(2)}</td>
                        <td style={{padding:"4px 6px",fontSize:12,fontWeight:800,textAlign:"right"}}>{sc.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{borderTop:"2px solid #374151",background:"#f9fafb"}}>
                    <td colSpan={2+judgeCount} style={{padding:"6px 8px",textAlign:"right",fontWeight:700,fontSize:11}}>
                      Program Component Score (PCS)
                    </td>
                    <td colSpan={2} style={{padding:"6px 6px",textAlign:"right",fontWeight:800,fontSize:14}}>
                      {pcsTotal.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Deductions */}
            <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:12,marginTop:12}}>
              <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:12,fontWeight:700,color:"#dc2626"}}>Abzüge:</span>
                  <button onClick={()=>setDeductions(d=>Math.round((d+0.5)*100)/100)} style={{padding:"2px 6px",borderRadius:3,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontWeight:700,fontSize:11,cursor:"pointer"}}>+0.5</button>
                  <input type="number" min="0" step="0.1" value={deductions} onChange={e=>setDeductions(Math.max(0,parseFloat(e.target.value)||0))}
                    style={{width:50,padding:"4px",borderRadius:4,border:"2px solid #fca5a5",fontSize:13,fontWeight:800,textAlign:"center",color:"#dc2626"}}/>
                  <button onClick={()=>setDeductions(0)} style={{padding:"2px 6px",borderRadius:3,border:"1px solid #d1d5db",background:"#f9fafb",color:"#6b7280",fontWeight:600,fontSize:10,cursor:"pointer"}}>Reset</button>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:12,fontWeight:700,color:"#22221C"}}>Extra:</span>
                  <button onClick={()=>setExtraPoints(d=>Math.round((d+0.5)*100)/100)} style={{padding:"2px 6px",borderRadius:3,border:"1px solid #DEE2E6",background:"#f0f1f2",color:"#22221C",fontWeight:700,fontSize:11,cursor:"pointer"}}>+0.5</button>
                  <input type="number" min="0" step="0.1" value={extraPoints} onChange={e=>setExtraPoints(Math.max(0,parseFloat(e.target.value)||0))}
                    style={{width:50,padding:"4px",borderRadius:4,border:"2px solid #DEE2E6",fontSize:13,fontWeight:800,textAlign:"center",color:"#22221C"}}/>
                  <button onClick={()=>setExtraPoints(0)} style={{padding:"2px 6px",borderRadius:3,border:"1px solid #d1d5db",background:"#f9fafb",color:"#6b7280",fontWeight:600,fontSize:10,cursor:"pointer"}}>Reset</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar summary */}
          <div style={{position:"sticky",top:16}}>
            {/* Score card */}
            <div style={{background:"#22221C",borderRadius:12,padding:16,color:"white",marginBottom:12}}>
              <div style={{fontSize:10,fontWeight:600,opacity:.8,letterSpacing:1,textTransform:"uppercase"}}>Total Score</div>
              <div style={{fontSize:38,fontWeight:800,lineHeight:1.1}}>{totalScore.toFixed(2)}</div>
              <div style={{fontSize:10,opacity:.75,marginTop:4}}>TES {tes.toFixed(2)} + PCS {pcsTotal.toFixed(2)}</div>
              {deductions>0&&<div style={{fontSize:10,opacity:.75}}>- Abzüge {deductions.toFixed(2)}</div>}
              {extraPoints>0&&<div style={{fontSize:10,opacity:.75}}>+ Extra {extraPoints.toFixed(2)}</div>}
            </div>

            {/* TES breakdown */}
            <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:12,marginBottom:12}}>
              <div style={{fontSize:12,fontWeight:700,color:"#22221C",marginBottom:6}}>TES Aufschlüsselung</div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}}>
                <span style={{color:"#6b7280"}}>Basiswerte:</span>
                <span style={{fontWeight:700}}>{(tes-bonusTotal-elements.reduce((s,e)=>s+e.goeVal,0)).toFixed(2)}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}}>
                <span style={{color:"#059669"}}>Bonus-Punkte:</span>
                <span style={{fontWeight:700,color:"#059669"}}>{bonusTotal>0?"+":""}{bonusTotal.toFixed(2)}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}}>
                <span style={{color:elements.reduce((s,e)=>s+e.goeVal,0)>=0?"#059669":"#dc2626"}}>QOE gesamt:</span>
                <span style={{fontWeight:700,color:elements.reduce((s,e)=>s+e.goeVal,0)>=0?"#059669":"#dc2626"}}>
                  {elements.reduce((s,e)=>s+e.goeVal,0)>=0?"+":""}{elements.reduce((s,e)=>s+e.goeVal,0).toFixed(2)}
                </span>
              </div>
              <div style={{borderTop:"2px solid #22221C",paddingTop:4,display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:800,color:"#22221C"}}>
                <span>TES:</span><span>{tes.toFixed(2)}</span>
              </div>
            </div>

            {/* Bonus summary */}
            <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:12}}>
              <div style={{fontSize:12,fontWeight:700,color:"#22221C",marginBottom:6}}>Aktive Boni</div>
              {bonusSummary.length===0?(
                <div style={{fontSize:11,color:"#9ca3af",fontStyle:"italic"}}>Keine Boni ausgewählt</div>
              ):bonusSummary.map((b,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:10,padding:"3px 0",borderBottom:"1px solid #f3f4f6"}}>
                  <span style={{color:"#374151"}}>{b.label}</span>
                  <span style={{fontWeight:700,color:"#059669"}}>{b.count}x</span>
                </div>
              ))}
            </div>

            {/* Element quality */}
            <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:12,marginTop:12}}>
              <div style={{fontSize:12,fontWeight:700,color:"#22221C",marginBottom:6}}>Element-Qualität</div>
              {elements.map((el,i)=>{
                if(!el.typeDef)return null;
                const pct=el.rawBase>0?Math.round((el.finalScore/el.rawBase)*100):0;
                const color=pct>=120?"#059669":pct>=100?"#22c55e":pct>=80?"#f59e0b":"#dc2626";
                return(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:4,marginBottom:3}}>
                    <span style={{fontSize:9,color:"#6b7280",width:14,textAlign:"right"}}>{i+1}</span>
                    <div style={{flex:1,background:"#f3f4f6",borderRadius:3,height:8,overflow:"hidden"}}>
                      <div style={{width:\`\${Math.min(pct,150)}%\`,height:"100%",background:color,borderRadius:3,transition:"width .3s"}}/>
                    </div>
                    <span style={{fontSize:9,fontWeight:700,color,minWidth:28,textAlign:"right"}}>{pct}%</span>
                  </div>
                );
              })}
            </div>

            {/* KI-Coach */}
            <KiCoach rows={rows} types={types} segment={segment} judgeCount={judgeCount}
              elements={elements} tes={tes} pcsTotal={pcsTotal} bonusTotal={bonusTotal} pcs={pcs}
              kategorie={kategorie} deductions={deductions} extraPoints={extraPoints} geschlecht={geschlecht}/>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  //  AUTH SYSTEM
  // ============================================================
  const API_BASE = window.location.origin;

  const api = async (endpoint, opts = {}) => {
    const token = localStorage.getItem('rollart_token');
    const headers = { 'Content-Type': 'application/json', ...opts.headers };
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res = await fetch(API_BASE + endpoint, { ...opts, headers });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Fehler');
    return data;
  };

  const AuthContext = createContext(null);
  const useAuth = () => useContext(AuthContext);

  function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('rollart_token');
      if (!token) { setLoading(false); return; }
      api('/api/me').then(d => setUser(d.user)).catch(() => {
        localStorage.removeItem('rollart_token');
      }).finally(() => setLoading(false));
    }, []);

    const login = async (email, password) => {
      const d = await api('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      localStorage.setItem('rollart_token', d.token);
      setUser(d.user);
      return d.user;
    };

    const register = async (data) => {
      const d = await api('/api/register', { method: 'POST', body: JSON.stringify(data) });
      localStorage.setItem('rollart_token', d.token);
      setUser(d.user);
      return d.user;
    };

    const logout = () => {
      localStorage.removeItem('rollart_token');
      setUser(null);
    };

    const updateProfile = async (data) => {
      const d = await api('/api/me', { method: 'PUT', body: JSON.stringify(data) });
      setUser(d.user);
      return d.user;
    };

    const changePassword = async (currentPassword, newPassword) => {
      await api('/api/me/password', { method: 'PUT', body: JSON.stringify({ currentPassword, newPassword }) });
    };

    if (loading) return React.createElement('div', {
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',
        background: '#22221C', color: 'white', fontSize: 18, fontWeight: 600 }
    }, 'RollArt wird geladen...');

    // Helper: License-Status berechnen
    const getLicenseStatus = () => {
      if (!user || !user.license) return { valid: true, plan: 'full' };
      const lic = user.license;
      if (!lic.active) return { valid: false, reason: 'inactive', plan: lic.plan };
      if (lic.expiresAt) {
        const now = new Date().toISOString().split('T')[0];
        if (now > lic.expiresAt) return { valid: false, reason: 'expired', expiresAt: lic.expiresAt, plan: lic.plan };
      }
      return { valid: true, plan: lic.plan || 'full', expiresAt: lic.expiresAt };
    };

    return React.createElement(AuthContext.Provider, { value: { user, login, register, logout, updateProfile, changePassword, getLicenseStatus } }, children);
  }

  // ============================================================
  //  LOGIN / REGISTER SCREEN
  // ============================================================
  function LoginScreen() {
    const { login, register } = useAuth();
    const [mode, setMode] = useState("login"); // login | register
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [verein, setVerein] = useState("");
    const [kategorie, setKategorie] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
        if (mode === "login") {
          await login(email, password);
        } else {
          await register({ email, password, name, verein, kategorie });
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    const inputStyle = {
      width: "100%", padding: "10px 14px", borderRadius: 8, border: "2px solid #d1d5db",
      fontSize: 14, fontFamily: "inherit", outline: "none", transition: "border .2s",
    };
    const labelStyle = { display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 4 };

    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "#22221C", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 16, padding: 32, width: "100%", maxWidth: 420,
          boxShadow: "0 20px 60px rgba(0,0,0,.2)" }}>
          {/* DRIV Logo */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <img src="DRIV-Logo.svg" alt="DRIV" style={{ height: 60, marginBottom: 8 }} />
            <h1 style={{ margin: "4px 0", fontSize: 28, fontWeight: 800, color: "#22221C" }}>RollArt 2026</h1>
            <p style={{ fontSize: 12, color: "#6b7280" }}>Artistic Roller Skating — DRIV</p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", marginBottom: 20, borderRadius: 8, overflow: "hidden", border: "2px solid #22221C" }}>
            <button onClick={() => { setMode("login"); setError(""); }}
              style={{ flex: 1, padding: "10px", border: "none", fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: mode === "login" ? "#22221C" : "white", color: mode === "login" ? "white" : "#22221C" }}>
              Anmelden
            </button>
            <button onClick={() => { setMode("register"); setError(""); }}
              style={{ flex: 1, padding: "10px", border: "none", fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: mode === "register" ? "#22221C" : "white", color: mode === "register" ? "white" : "#22221C" }}>
              Registrieren
            </button>
          </div>

          {error && (
            <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 8, padding: "8px 12px",
              marginBottom: 16, fontSize: 12, color: "#dc2626", fontWeight: 600 }}>{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            {mode === "register" && (
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Name *</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Vor- und Nachname"
                  required style={inputStyle} />
              </div>
            )}

            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Email *</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="deine@email.de"
                required style={inputStyle} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Passwort *</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder={mode === "register" ? "Mind. 6 Zeichen" : "Passwort"}
                required minLength={mode === "register" ? 6 : 1} style={inputStyle} />
            </div>

            {mode === "register" && (
              <>
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Verein / Club</label>
                  <input value={verein} onChange={e => setVerein(e.target.value)} placeholder="z.B. RRV Eppingen"
                    style={inputStyle} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Kategorie</label>
                  <input value={kategorie} onChange={e => setKategorie(e.target.value)} placeholder="z.B. Cadet, Junior, Senior..."
                    style={inputStyle} />
                </div>
              </>
            )}

            <button type="submit" disabled={loading}
              style={{ width: "100%", padding: "12px", borderRadius: 8, border: "none",
                background: loading ? "#9ca3af" : "#22221C",
                color: "white", fontSize: 15, fontWeight: 700, cursor: loading ? "wait" : "pointer",
                marginTop: 8, transition: "all .2s" }}>
              {loading ? "Bitte warten..." : mode === "login" ? "Anmelden" : "Konto erstellen"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 16, fontSize: 11, color: "#9ca3af" }}>
            {mode === "login" ? "Noch kein Konto?" : "Bereits registriert?"}
            {" "}
            <span onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }}
              style={{ color: "#E10716", fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}>
              {mode === "login" ? "Jetzt registrieren" : "Jetzt anmelden"}
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  //  WERTETABELLE PAGE
  // ============================================================
  function WertetabellePage({season}) {
    const s=season||"2026";
    const is27=s==="2027";
    const [wTab,setWTab]=React.useState("einzel");
    const [search,setSearch]=React.useState("");
    const [openCat,setOpenCat]=React.useState(null);

    const cardS={background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",padding:16,marginBottom:16};
    const thS={padding:"6px 10px",textAlign:"left",fontSize:11,fontWeight:700,color:"#666",borderBottom:"2px solid #e5e7eb",whiteSpace:"nowrap"};
    const tdS={padding:"5px 10px",fontSize:12,borderBottom:"1px solid #f3f4f6"};
    const tdN={...tdS,fontVariantNumeric:"tabular-nums",textAlign:"right"};
    const pillAct={padding:"6px 16px",borderRadius:20,fontSize:13,fontWeight:700,cursor:"pointer",border:"none",transition:"all .2s"};

    const fmtV=v=>v===0?"–":v===undefined?"–":v.toFixed(2);
    const q=search.trim().toLowerCase();

    const jumpsData=is27?JUMPS_2027:JUMPS;
    const soloData=is27?SOLO_SPINS_2027:SOLO_SPINS;
    const comboData=is27?COMBO_SPINS_2027:COMBO_SPINS;
    const stepsData=is27?STEP_SEQUENCES_2027:STEP_SEQUENCES;
    const choreoFree=is27?CHOREO_STEPS_FREE_2027:CHOREO_STEPS_FREE;
    const choreoPairs=is27?CHOREO_STEPS_PAIRS_2027:CHOREO_STEPS_PAIRS;
    const liftsData=is27?ALL_LIFTS_2027:ALL_LIFTS;
    const throwsData=is27?THROW_JUMPS_2027:THROW_JUMPS;
    const contactData=is27?CONTACT_SPINS_2027:CONTACT_SPINS;
    const deathData=is27?DEATH_SPIRALS_2027:DEATH_SPIRALS;
    const camelData=is27?CAMEL_SPIRALS_2027:CAMEL_SPIRALS;
    const twistData=is27?TWIST_LUTZ_2027:TWIST_LUTZ;

    const sharedCats=[
      {key:"jumps",label:"Sprünge (Solo)",data:jumpsData,cols:["base","lt","ltlt","combo","comboLt","comboLtLt"],heads:["Base","LT","LTLT","Combo","Combo LT","Combo LTLT"]},
      {key:"solo_spins",label:"Solo Spins (SSp)",data:soloData,cols:["base"],heads:["Base"]},
      {key:"combo_spins",label:is27?"Combo Spins (CSp) — nur Basis-Pirouetten":"Combo Spins (CSp)",data:comboData,cols:["base"],heads:["Base"]},
      {key:"steps",label:"Schrittfolgen (FoSq)",data:stepsData,cols:["base"],heads:["Base"]},
      {key:"choreo",label:"Choreographische Schritte (ChSt)",data:wTab==="einzel"?choreoFree:choreoPairs,cols:["base"],heads:["Base"]},
    ];
    const pairsCats=[
      {key:"lifts",label:"Hebungen (CLi / SLi)",data:liftsData,cols:["base"],heads:["Base"]},
      {key:"throws",label:"Wurfsprünge (Tj)",data:throwsData,cols:["base","lt","ltlt"],heads:["Base","LT","LTLT"]},
      {key:"contact",label:"Kontaktpirouetten (CtSp)",data:contactData,cols:["base"],heads:["Base"]},
      {key:"death",label:"Todesspirale (DS)",data:deathData,cols:["base"],heads:["Base"]},
      {key:"camel",label:"Kamelspirale (CS)",data:camelData,cols:["base"],heads:["Base"]},
      {key:"twist",label:"Twist (Tw)",data:twistData,cols:is27?["base","lt","ltlt"]:["base"],heads:is27?["Base","LT","LTLT"]:["Base"]},
    ];
    const bonusCats=[
      {key:"b_jump",label:"Sprung-Boni",data:JUMP_BONUSES},
      {key:"b_combo",label:"Kombinations-Boni",data:COMBO_JUMP_BONUSES},
      {key:"b_spinpos",label:"Pirouetten-Positionen",data:SPIN_POS_BONUSES},
      {key:"b_spinvar",label:"Pirouetten-Variationen",data:SPIN_VAR_BONUSES},
    ];
    const cats=wTab==="einzel"?sharedCats:sharedCats.concat(pairsCats);

    const renderTable=(cat)=>{
      const filtered=q?cat.data.filter(e=>(e.name+e.code).toLowerCase().includes(q)):cat.data;
      if(filtered.length===0) return <div style={{padding:8,fontSize:12,color:"#999"}}>Keine Treffer</div>;
      return (
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr>
              <th style={thS}>Name</th>
              <th style={{...thS,width:60}}>Code</th>
              {cat.heads.map((h,i)=><th key={i} style={{...thS,textAlign:"right",width:80}}>{h}</th>)}
              <th style={{...thS,textAlign:"right"}}>GOE +3</th>
              <th style={{...thS,textAlign:"right"}}>GOE +2</th>
              <th style={{...thS,textAlign:"right"}}>GOE +1</th>
              <th style={{...thS,textAlign:"right"}}>GOE -1</th>
              <th style={{...thS,textAlign:"right"}}>GOE -2</th>
              <th style={{...thS,textAlign:"right"}}>GOE -3</th>
            </tr></thead>
            <tbody>{filtered.map((el,i)=>(
              <tr key={i} style={{background:i%2===0?"#fafafa":"white"}}>
                <td style={{...tdS,fontWeight:600}}>{el.name}</td>
                <td style={{...tdS,fontFamily:"monospace",color:"#E10716"}}>{el.code}</td>
                {cat.cols.map((c,ci)=><td key={ci} style={tdN}>{fmtV(el[c])}</td>)}
                <td style={{...tdN,color:"#16a34a"}}>{fmtV(el.goe?.["3"])}</td>
                <td style={{...tdN,color:"#22c55e"}}>{fmtV(el.goe?.["2"])}</td>
                <td style={{...tdN,color:"#65a30d"}}>{fmtV(el.goe?.["1"])}</td>
                <td style={{...tdN,color:"#f59e0b"}}>{fmtV(el.goe?.m1)}</td>
                <td style={{...tdN,color:"#ef4444"}}>{fmtV(el.goe?.m2)}</td>
                <td style={{...tdN,color:"#dc2626"}}>{fmtV(el.goe?.m3)}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      );
    };

    const renderBonusTable=(bcat)=>{
      return (
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr>
              <th style={thS}>Bezeichnung</th>
              <th style={{...thS,width:80}}>ID</th>
              <th style={{...thS,textAlign:"right",width:100}}>Bonus</th>
            </tr></thead>
            <tbody>{bcat.data.map((b,i)=>(
              <tr key={i} style={{background:i%2===0?"#fafafa":"white"}}>
                <td style={{...tdS,fontWeight:600}}>{b.label}</td>
                <td style={{...tdS,fontFamily:"monospace",color:"#E10716"}}>{b.id}</td>
                <td style={{...tdN,color:b.pct>=0?"#16a34a":"#ef4444",fontWeight:700}}>
                  {b.pct>=0?"+":""}{(b.pct*100).toFixed(0)}%
                  {b.isOverride?" (Override)":""}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      );
    };

    return (
      <div style={{padding:"16px 20px",maxWidth:1400,margin:"0 auto"}}>
        {/* Header */}
        <div style={{...cardS,display:"flex",flexWrap:"wrap",alignItems:"center",gap:12}}>
          <h3 style={{margin:0,fontSize:18,fontWeight:800,color:"#22221C",flex:"1 1 auto"}}>
            Wertetabelle – World Skate {s}
            {is27&&<span style={{fontSize:11,fontWeight:600,color:"white",background:"#E10716",padding:"2px 8px",borderRadius:10,marginLeft:8,verticalAlign:"middle"}}>NEU</span>}
          </h3>
          <div style={{display:"flex",gap:4,background:"#f3f4f6",borderRadius:20,padding:3}}>
            {[{k:"einzel",l:"Einzel"},{k:"paarlauf",l:"Paarlauf"}].map(t=>(
              <button key={t.k} onClick={()=>{setWTab(t.k);setOpenCat(null);}}
                style={{...pillAct,
                  background:wTab===t.k?"#E10716":"transparent",
                  color:wTab===t.k?"white":"#22221C",
                }}>{t.l}</button>
            ))}
          </div>
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Suche nach Name oder Code…"
            style={{padding:"7px 14px",borderRadius:8,border:"1px solid #d1d5db",fontSize:13,width:220,background:"white"}}/>
        </div>

        {/* Element-Kategorien */}
        {cats.map(cat=>{
          const isOpen=openCat===cat.key||openCat===null;
          const matchCount=q?cat.data.filter(e=>(e.name+e.code).toLowerCase().includes(q)).length:cat.data.length;
          if(q&&matchCount===0) return null;
          return (
            <div key={cat.key} style={cardS}>
              <div onClick={()=>setOpenCat(openCat===cat.key?null:cat.key)}
                style={{display:"flex",alignItems:"center",cursor:"pointer",gap:8}}>
                <span style={{fontSize:14,transform:isOpen?"rotate(90deg)":"rotate(0deg)",transition:"transform .2s"}}>▶</span>
                <h4 style={{margin:0,fontSize:14,fontWeight:700,color:"#22221C",flex:1}}>{cat.label}</h4>
                <span style={{fontSize:11,color:"#999",background:"#f3f4f6",padding:"2px 8px",borderRadius:10}}>
                  {matchCount} Element{matchCount!==1?"e":""}
                </span>
              </div>
              {isOpen&&<div style={{marginTop:12}}>{renderTable(cat)}</div>}
            </div>
          );
        })}

        {/* Bonus-Referenz */}
        <div style={{...cardS,borderTop:"3px solid #E10716"}}>
          <h4 style={{margin:"0 0 12px",fontSize:15,fontWeight:800,color:"#22221C"}}>Bonus-Referenz</h4>
          <div className="r-grid1-mobile" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {bonusCats.map(bc=>(
              <div key={bc.key}>
                <h5 style={{margin:"0 0 8px",fontSize:13,fontWeight:700,color:"#555"}}>{bc.label}</h5>
                {renderBonusTable(bc)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  //  PROFILE SCREEN
  // ============================================================
  function ProfileScreen({ onClose }) {
    const { user, updateProfile, changePassword, logout } = useAuth();
    const [name, setName] = useState(user?.name || "");
    const [verein, setVerein] = useState(user?.verein || "");
    const [kategorie, setKategorie] = useState(user?.kategorie || "");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const [saving, setSaving] = useState(false);

    // Password change
    const [showPwChange, setShowPwChange] = useState(false);
    const [curPw, setCurPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [pwMsg, setPwMsg] = useState("");
    const [pwError, setPwError] = useState("");

    const handleSave = async () => {
      setMsg(""); setError(""); setSaving(true);
      try {
        await updateProfile({ name, verein, kategorie });
        setMsg("Profil gespeichert!");
        setTimeout(() => setMsg(""), 3000);
      } catch (err) { setError(err.message); }
      setSaving(false);
    };

    const handlePwChange = async () => {
      setPwMsg(""); setPwError("");
      try {
        await changePassword(curPw, newPw);
        setPwMsg("Passwort geaendert!");
        setCurPw(""); setNewPw(""); setShowPwChange(false);
        setTimeout(() => setPwMsg(""), 3000);
      } catch (err) { setPwError(err.message); }
    };

    const inputStyle = {
      width: "100%", padding: "8px 12px", borderRadius: 6, border: "2px solid #d1d5db",
      fontSize: 13, fontFamily: "inherit", outline: "none",
    };
    const labelStyle = { display: "block", fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 3 };

    return (
      <div style={{ padding: "20px", maxWidth: 500, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#22221C" }}>Mein Profil</h2>
          <button onClick={onClose} style={{ padding: "5px 12px", borderRadius: 6, border: "none",
            background: "#e5e7eb", color: "#374151", fontWeight: 600, fontSize: 12, cursor: "pointer" }}>Zurueck</button>
        </div>

        {/* User info badge */}
        <div style={{ background: "white", borderRadius: 12, padding: 16,
          color: "#22221C", marginBottom: 20, display: "flex", alignItems: "center", gap: 12, border:"1px solid #DEE2E6" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#E9ECEF",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color:"#22221C" }}>
            {(user?.name || "?")[0].toUpperCase()}
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color:"#22221C" }}>{user?.name}</div>
            <div style={{ fontSize: 11, color:"#6C757D" }}>{user?.email}</div>
            <div style={{ fontSize: 10, color:"#6C757D" }}>Mitglied seit {new Date(user?.created_at).toLocaleDateString("de-DE")}</div>
          </div>
        </div>

        {/* Profile form */}
        <div style={{ background: "white", borderRadius: 12, border: "1px solid #e5e7eb", padding: 20, marginBottom: 16 }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: "#374151" }}>Profildaten</h3>

          {error && <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 6,
            padding: "6px 10px", marginBottom: 12, fontSize: 11, color: "#dc2626" }}>{error}</div>}
          {msg && <div style={{ background: "#f0f1f2", border: "1px solid #DEE2E6", borderRadius: 6,
            padding: "6px 10px", marginBottom: 12, fontSize: 11, color: "#22221C", fontWeight: 600 }}>{msg}</div>}

          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Name</label>
            <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Email</label>
            <input value={user?.email || ""} disabled style={{ ...inputStyle, background: "#f3f4f6", color: "#9ca3af" }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Verein / Club</label>
            <input value={verein} onChange={e => setVerein(e.target.value)} placeholder="z.B. RRV Eppingen" style={inputStyle} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Kategorie</label>
            <input value={kategorie} onChange={e => setKategorie(e.target.value)} placeholder="z.B. Cadet, Junior, Senior..." style={inputStyle} />
          </div>
          <button onClick={handleSave} disabled={saving}
            style={{ padding: "8px 20px", borderRadius: 6, border: "none", background: "#22221C",
              color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            {saving ? "Speichern..." : "Profil speichern"}
          </button>
        </div>

        {/* Password change */}
        <div style={{ background: "white", borderRadius: 12, border: "1px solid #e5e7eb", padding: 20, marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#374151" }}>Passwort</h3>
            <button onClick={() => setShowPwChange(!showPwChange)}
              style={{ padding: "4px 10px", borderRadius: 5, border: "1px solid #d1d5db", background: "#f9fafb",
                color: "#374151", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
              {showPwChange ? "Abbrechen" : "Passwort aendern"}
            </button>
          </div>
          {pwMsg && <div style={{ background: "#f0f1f2", border: "1px solid #DEE2E6", borderRadius: 6,
            padding: "6px 10px", marginTop: 10, fontSize: 11, color: "#22221C", fontWeight: 600 }}>{pwMsg}</div>}
          {showPwChange && (
            <div style={{ marginTop: 12 }}>
              {pwError && <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 6,
                padding: "6px 10px", marginBottom: 10, fontSize: 11, color: "#dc2626" }}>{pwError}</div>}
              <div style={{ marginBottom: 10 }}>
                <label style={labelStyle}>Aktuelles Passwort</label>
                <input type="password" value={curPw} onChange={e => setCurPw(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={labelStyle}>Neues Passwort (min. 6 Zeichen)</label>
                <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} minLength={6} style={inputStyle} />
              </div>
              <button onClick={handlePwChange}
                style={{ padding: "6px 14px", borderRadius: 5, border: "none", background: "#f59e0b",
                  color: "white", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>Passwort aendern</button>
            </div>
          )}
        </div>

        {/* Logout / Danger zone */}
        <div style={{ background: "#fef2f2", borderRadius: 12, border: "1px solid #fca5a5", padding: 16 }}>
          <button onClick={logout}
            style={{ padding: "8px 20px", borderRadius: 6, border: "none", background: "#dc2626",
              color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Abmelden</button>
        </div>
      </div>
    );
  }

  // ============================================================
  //  ADMIN DASHBOARD
  // ============================================================
  function AdminDashboard({ onClose }) {
    const { user } = useAuth();
    const [tab, setTab] = useState("stats");
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState("");
    const [editUser, setEditUser] = useState(null);
    const [resetPw, setResetPw] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [newUserForm, setNewUserForm] = useState({email:"",name:"",verein:"",kategorie:"",plan:"full",expiresAt:"",sendEmail:true});
    const [createdPw, setCreatedPw] = useState(null); // nach Erstellung angezeigtes PW
    const [creating, setCreating] = useState(false);
    const abortRef = useRef(null);

    const load = async () => {
      if(abortRef.current)abortRef.current.abort();
      const ctrl=new AbortController();
      abortRef.current=ctrl;
      setLoading(true);
      try {
        const sig={signal:ctrl.signal};
        const [s, u, st] = await Promise.all([api('/api/admin/stats',sig), api('/api/admin/users',sig), api('/api/admin/settings',sig)]);
        setStats(s); setUsers(u.users); setSettings(st.settings);
      } catch (e) { if(e.name==='AbortError')return; setMsg("Fehler: " + e.message); }
      setLoading(false);
    };
    useEffect(() => { load(); return()=>{if(abortRef.current)abortRef.current.abort();}; }, []);
    const showMsg = (m) => { setMsg(m); setTimeout(() => setMsg(""), 4000); };

    const updateUserRole = async (id, role) => {
      try { await api('/api/admin/users/' + id, { method: 'PUT', body: JSON.stringify({ role }) }); showMsg("Rolle geaendert"); load(); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };
    const deleteUser = async (id, name) => {
      if (!confirm("User '" + name + "' wirklich loeschen?")) return;
      try { await api('/api/admin/users/' + id, { method: 'DELETE' }); showMsg("User geloescht"); load(); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };
    const doResetPassword = async (id) => {
      const pw = resetPw[id];
      if (!pw || pw.length < 6) { showMsg("Min. 6 Zeichen"); return; }
      try { await api('/api/admin/users/' + id + '/reset-password', { method: 'POST', body: JSON.stringify({ newPassword: pw }) });
        showMsg("Passwort zurueckgesetzt"); setResetPw(p => ({ ...p, [id]: "" })); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };
    const sendCredentials = async (id) => {
      try { const d = await api('/api/admin/users/' + id + '/send-credentials', { method: 'POST' });
        showMsg(d.emailSent ? "Zugangsdaten per E-Mail gesendet" : "Neues PW: " + d.generatedPassword + " (E-Mail nicht konfiguriert)"); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };
    const saveSettings = async () => {
      try { const d = await api('/api/admin/settings', { method: 'PUT', body: JSON.stringify(settings) });
        setSettings(d.settings); showMsg("Einstellungen gespeichert"); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };
    const saveUserEdit = async () => {
      if (!editUser) return;
      const body = { name: editUser.name, verein: editUser.verein, kategorie: editUser.kategorie, role: editUser.role,
        license: { plan: editUser._licPlan || 'full', expiresAt: editUser._licExpires || null, active: editUser._licActive !== false } };
      try { await api('/api/admin/users/' + editUser.id, { method: 'PUT', body: JSON.stringify(body) });
        showMsg("User aktualisiert"); setEditUser(null); load(); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };
    const createUser = async () => {
      setCreating(true);
      try {
        const d = await api('/api/admin/users', { method: 'POST', body: JSON.stringify(newUserForm) });
        setCreatedPw(d.generatedPassword);
        showMsg(d.emailSent ? "Benutzer erstellt und E-Mail gesendet" : "Benutzer erstellt (E-Mail nicht gesendet)");
        load();
      } catch (e) { showMsg("Fehler: " + e.message); }
      setCreating(false);
    };
    const updateLicense = async (id, licUpdate) => {
      try { await api('/api/admin/users/' + id, { method: 'PUT', body: JSON.stringify({ license: licUpdate }) });
        showMsg("Lizenz aktualisiert"); load(); }
      catch (e) { showMsg("Fehler: " + e.message); }
    };

    const filteredUsers = users.filter(u => !searchTerm ||
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.verein?.toLowerCase().includes(searchTerm.toLowerCase()));

    // License status helper
    const licStatus = (u) => {
      const lic = u.license || { plan:'full', active:true, expiresAt:null };
      if (!lic.active) return { label:"Gesperrt", color:"#6b7280", bg:"#f3f4f6" };
      if (lic.expiresAt && lic.expiresAt < new Date().toISOString().split('T')[0]) return { label:"Abgelaufen", color:"#dc2626", bg:"#fef2f2" };
      return { label:"Aktiv", color:"#22221C", bg:"#f0f1f2" };
    };
    const planLabel = (p) => p==='einzel'?'Einzellauf':p==='pairs'?'Paarlauf':'Voll';

    const tabS = (t) => ({ padding:"8px 16px", borderRadius:"8px 8px 0 0", border:"none", fontSize:12, fontWeight:700,
      cursor:"pointer", background:tab===t?"white":"transparent", color:tab===t?"#22221C":"#9ca3af",
      borderBottom:tab===t?"3px solid #22221C":"3px solid transparent" });
    const cS = { background:"white", borderRadius:12, border:"1px solid #e5e7eb", padding:16, marginBottom:12 };
    const iS = { padding:"6px 10px", borderRadius:6, border:"2px solid #d1d5db", fontSize:13, width:"100%", fontFamily:"inherit" };

    if (loading) return <div style={{ padding:40, textAlign:"center", color:"#6b7280" }}>Laden...</div>;

    return (
      <div style={{ padding:"16px 20px", maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <div>
            <h2 style={{ margin:0, fontSize:22, fontWeight:800, color:"#22221C" }}>Admin Dashboard</h2>
            <p style={{ margin:0, fontSize:12, color:"#6b7280" }}>{user?.name} ({user?.email})</p>
          </div>
          <button onClick={onClose} style={{ padding:"6px 14px", borderRadius:6, border:"none", background:"#e5e7eb", color:"#374151", fontWeight:600, fontSize:12, cursor:"pointer" }}>Zurueck</button>
        </div>
        {msg && <div style={{ background:"#f0f1f2", border:"1px solid #DEE2E6", borderRadius:8, padding:"8px 14px", marginBottom:12, fontSize:12, color:"#22221C", fontWeight:600 }}>{msg}</div>}
        <div style={{ display:"flex", gap:0, borderBottom:"1px solid #e5e7eb", marginBottom:16 }}>
          <button onClick={()=>setTab("stats")} style={tabS("stats")}>Statistiken</button>
          <button onClick={()=>setTab("users")} style={tabS("users")}>Benutzer ({users.length})</button>
          <button onClick={()=>setTab("settings")} style={tabS("settings")}>Einstellungen</button>
        </div>

        {/* === STATS === */}
        {tab==="stats"&&stats&&(<div>
          <div className="r-grid2-mobile" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:16 }}>
            {[{l:"Gesamt",v:stats.total,c:"#22221C",b:"#f8f9fa"},{l:"Heute",v:stats.todayCount,c:"#22221C",b:"#f0f1f2"},
              {l:"Diese Woche",v:stats.weekCount,c:"#2563eb",b:"#eff6ff"},{l:"Dieser Monat",v:stats.monthCount,c:"#f59e0b",b:"#fffbeb"}
            ].map((k,i)=>(
              <div key={i} style={{ background:k.b, borderRadius:12, padding:16, border:"1px solid "+k.c+"33" }}>
                <div style={{ fontSize:10, fontWeight:600, color:"#6b7280", textTransform:"uppercase", letterSpacing:1 }}>{k.l}</div>
                <div style={{ fontSize:32, fontWeight:800, color:k.c }}>{k.v}</div>
              </div>
            ))}
          </div>
          {/* License Stats */}
          {stats.licenseStats&&(<div style={{ ...cS, marginBottom:16 }}>
            <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#374151" }}>Lizenzen</h3>
            <div className="r-grid2-mobile" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:12 }}>
              <div style={{ background:"#f0f1f2", borderRadius:8, padding:12, textAlign:"center", border:"1px solid #DEE2E633" }}>
                <div style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Aktiv</div>
                <div style={{ fontSize:24, fontWeight:800, color:"#22221C" }}>{stats.licenseStats.active}</div>
              </div>
              <div style={{ background:"#fef2f2", borderRadius:8, padding:12, textAlign:"center", border:"1px solid #fca5a533" }}>
                <div style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Abgelaufen</div>
                <div style={{ fontSize:24, fontWeight:800, color:"#dc2626" }}>{stats.licenseStats.expired}</div>
              </div>
              <div style={{ background:"#f3f4f6", borderRadius:8, padding:12, textAlign:"center", border:"1px solid #d1d5db33" }}>
                <div style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Gesperrt</div>
                <div style={{ fontSize:24, fontWeight:800, color:"#6b7280" }}>{stats.licenseStats.inactive}</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"#6b7280" }}>
              <span>Voll: <strong style={{color:"#22221C"}}>{stats.licenseStats.planFull}</strong></span>
              <span>Einzellauf: <strong style={{color:"#22221C"}}>{stats.licenseStats.planEinzel}</strong></span>
              <span>Paarlauf: <strong style={{color:"#22221C"}}>{stats.licenseStats.planPairs}</strong></span>
            </div>
          </div>)}
          <div style={cS}>
            <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#374151" }}>Registrierungen (14 Tage)</h3>
            <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:100 }}>
              {(stats.daily||[]).map((d,i)=>{
                const mx=Math.max(...stats.daily.map(x=>x.count),1);
                return(<div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
                  <span style={{ fontSize:8, fontWeight:700, color:"#6b7280" }}>{d.count||""}</span>
                  <div style={{ width:"100%", height:Math.max(d.count/mx*80,2), background:d.count>0?"#22221C":"#e5e7eb", borderRadius:3 }}/>
                  <span style={{ fontSize:7, color:"#9ca3af" }}>{d.date.slice(5)}</span>
                </div>);
              })}
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div style={cS}>
              <h3 style={{ margin:"0 0 8px", fontSize:13, fontWeight:700 }}>Top Vereine</h3>
              {(stats.topVereine||[]).length===0?<span style={{ fontSize:11, color:"#9ca3af" }}>Keine Daten</span>:
                stats.topVereine.map((v,i)=>(<div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"3px 0", fontSize:12, borderBottom:"1px solid #f3f4f6" }}>
                  <span>{v.name}</span><span style={{ fontWeight:700, color:"#22221C" }}>{v.count}</span></div>))}
            </div>
            <div style={cS}>
              <h3 style={{ margin:"0 0 8px", fontSize:13, fontWeight:700 }}>Top Kategorien</h3>
              {(stats.topKategorien||[]).length===0?<span style={{ fontSize:11, color:"#9ca3af" }}>Keine Daten</span>:
                stats.topKategorien.map((k,i)=>(<div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"3px 0", fontSize:12, borderBottom:"1px solid #f3f4f6" }}>
                  <span>{k.name}</span><span style={{ fontWeight:700, color:"#2563eb" }}>{k.count}</span></div>))}
            </div>
          </div>
        </div>)}

        {/* === USERS === */}
        {tab==="users"&&(<div>
          <div style={{ display:"flex", gap:8, marginBottom:12, flexWrap:"wrap", alignItems:"center" }}>
            <input placeholder="Suche Name, Email, Verein..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}
              style={{ ...iS, maxWidth:400, flex:1 }}/>
            <button onClick={()=>{setShowCreateUser(true);setCreatedPw(null);setNewUserForm({email:"",name:"",verein:"",kategorie:"",plan:"full",expiresAt:"",sendEmail:true});}}
              style={{ padding:"8px 16px", borderRadius:6, border:"none", background:"#22221C", color:"white", fontWeight:700, fontSize:12, cursor:"pointer", whiteSpace:"nowrap" }}>
              + Neuer Benutzer
            </button>
          </div>

          {/* CREATE USER FORM */}
          {showCreateUser&&(<div style={{ ...cS, border:"2px solid #22221C", marginBottom:16 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
              <h3 style={{ margin:0, fontSize:14, fontWeight:700, color:"#22221C" }}>Neuen Benutzer anlegen</h3>
              <button onClick={()=>{setShowCreateUser(false);setCreatedPw(null);}} style={{ padding:"4px 10px", borderRadius:4, border:"1px solid #d1d5db", background:"white", fontSize:11, cursor:"pointer" }}>X</button>
            </div>
            {createdPw ? (
              <div>
                <div style={{ background:"#f0f1f2", border:"1px solid #DEE2E6", borderRadius:8, padding:16, marginBottom:12 }}>
                  <div style={{ fontSize:13, fontWeight:700, color:"#22221C", marginBottom:8 }}>Benutzer erfolgreich erstellt!</div>
                  <div style={{ fontSize:12, marginBottom:4 }}>Email: <strong>{newUserForm.email}</strong></div>
                  <div style={{ fontSize:12, marginBottom:8 }}>Generiertes Passwort: <code style={{ background:"#e5e7eb", padding:"2px 8px", borderRadius:4, fontSize:14, fontWeight:700, letterSpacing:1 }}>{createdPw}</code></div>
                  <button onClick={()=>{navigator.clipboard.writeText(createdPw);showMsg("Passwort kopiert!");}} style={{ padding:"4px 12px", borderRadius:4, border:"1px solid #22221C", background:"white", color:"#22221C", fontSize:11, fontWeight:600, cursor:"pointer" }}>Passwort kopieren</button>
                </div>
                <button onClick={()=>{setShowCreateUser(false);setCreatedPw(null);}} style={{ padding:"6px 14px", borderRadius:6, border:"none", background:"#e5e7eb", color:"#374151", fontWeight:600, fontSize:12, cursor:"pointer" }}>Schliessen</button>
              </div>
            ) : (
              <div>
                <div className="r-grid1-mobile" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:10 }}>
                  <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Name *</label>
                    <input value={newUserForm.name} onChange={e=>setNewUserForm({...newUserForm,name:e.target.value})} placeholder="Vor- und Nachname" style={iS}/></div>
                  <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Email *</label>
                    <input type="email" value={newUserForm.email} onChange={e=>setNewUserForm({...newUserForm,email:e.target.value})} placeholder="coach@verein.de" style={iS}/></div>
                  <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Verein</label>
                    <input value={newUserForm.verein} onChange={e=>setNewUserForm({...newUserForm,verein:e.target.value})} placeholder="z.B. RRV Eppingen" style={iS}/></div>
                  <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Kategorie</label>
                    <input value={newUserForm.kategorie} onChange={e=>setNewUserForm({...newUserForm,kategorie:e.target.value})} placeholder="z.B. Senior" style={iS}/></div>
                  <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Plan</label>
                    <select value={newUserForm.plan} onChange={e=>setNewUserForm({...newUserForm,plan:e.target.value})} style={{ ...iS, cursor:"pointer" }}>
                      <option value="full">Voll (Einzel + Paar)</option><option value="einzel">Nur Einzellauf</option><option value="pairs">Nur Paarlauf</option></select></div>
                  <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Gueltig bis</label>
                    <input type="date" value={newUserForm.expiresAt} onChange={e=>setNewUserForm({...newUserForm,expiresAt:e.target.value})} style={iS}/></div>
                </div>
                <label style={{ display:"flex", alignItems:"center", gap:6, cursor:"pointer", marginBottom:12, fontSize:12 }}>
                  <input type="checkbox" checked={newUserForm.sendEmail} onChange={e=>setNewUserForm({...newUserForm,sendEmail:e.target.checked})} style={{ width:16, height:16 }}/>
                  Zugangsdaten per E-Mail senden
                </label>
                <div style={{ display:"flex", gap:6 }}>
                  <button onClick={createUser} disabled={creating||!newUserForm.email||!newUserForm.name}
                    style={{ padding:"8px 18px", borderRadius:6, border:"none", background:creating?"#9ca3af":"#22221C", color:"white", fontWeight:700, fontSize:12, cursor:creating?"wait":"pointer" }}>
                    {creating?"Erstelle...":"Benutzer erstellen"}
                  </button>
                  <button onClick={()=>setShowCreateUser(false)} style={{ padding:"8px 14px", borderRadius:6, border:"1px solid #d1d5db", background:"white", color:"#374151", fontWeight:600, fontSize:12, cursor:"pointer" }}>Abbrechen</button>
                </div>
              </div>
            )}
          </div>)}

          {/* EDIT USER */}
          {editUser&&(<div style={{ ...cS, border:"2px solid #22221C" }}>
            <h3 style={{ margin:"0 0 10px", fontSize:14, fontWeight:700, color:"#22221C" }}>Bearbeiten: {editUser.email}</h3>
            <div className="r-grid1-mobile r-grid2-tablet" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:8, marginBottom:10 }}>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Name</label>
                <input value={editUser.name||""} onChange={e=>setEditUser({...editUser,name:e.target.value})} style={iS}/></div>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Verein</label>
                <input value={editUser.verein||""} onChange={e=>setEditUser({...editUser,verein:e.target.value})} style={iS}/></div>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Kategorie</label>
                <input value={editUser.kategorie||""} onChange={e=>setEditUser({...editUser,kategorie:e.target.value})} style={iS}/></div>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Rolle</label>
                <select value={editUser.role||"user"} onChange={e=>setEditUser({...editUser,role:e.target.value})} style={{ ...iS, cursor:"pointer" }}>
                  <option value="user">User</option><option value="admin">Admin</option></select></div>
            </div>
            <div className="r-grid1-mobile" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:10 }}>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Plan</label>
                <select value={editUser._licPlan||(editUser.license||{}).plan||"full"} onChange={e=>setEditUser({...editUser,_licPlan:e.target.value})} style={{ ...iS, cursor:"pointer" }}>
                  <option value="full">Voll (Einzel + Paar)</option><option value="einzel">Nur Einzellauf</option><option value="pairs">Nur Paarlauf</option></select></div>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Gueltig bis</label>
                <input type="date" value={editUser._licExpires!=null?editUser._licExpires:(editUser.license||{}).expiresAt||""} onChange={e=>setEditUser({...editUser,_licExpires:e.target.value})} style={iS}/></div>
              <div><label style={{ fontSize:10, fontWeight:600, color:"#6b7280" }}>Status</label>
                <select value={editUser._licActive!=null?editUser._licActive:(editUser.license||{}).active!==false?"true":"false"} onChange={e=>setEditUser({...editUser,_licActive:e.target.value==="true"})} style={{ ...iS, cursor:"pointer" }}>
                  <option value="true">Aktiv</option><option value="false">Gesperrt</option></select></div>
            </div>
            <div style={{ display:"flex", gap:6 }}>
              <button onClick={saveUserEdit} style={{ padding:"6px 14px", borderRadius:6, border:"none", background:"#22221C", color:"white", fontWeight:700, fontSize:12, cursor:"pointer" }}>Speichern</button>
              <button onClick={()=>setEditUser(null)} style={{ padding:"6px 14px", borderRadius:6, border:"1px solid #d1d5db", background:"white", color:"#374151", fontWeight:600, fontSize:12, cursor:"pointer" }}>Abbrechen</button>
            </div>
          </div>)}
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12, minWidth:800 }}>
              <thead><tr style={{ background:"#f3f4f6" }}>
                {["ID","Name","Email","Verein","Rolle","Plan","Status","Gueltig bis","Aktionen"].map(h=>
                  <th key={h} style={{ padding:"8px 8px", textAlign:"left", fontWeight:700, color:"#374151", borderBottom:"2px solid #e5e7eb", fontSize:11 }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {filteredUsers.map(u=>{
                  const ls=licStatus(u);
                  const lic=u.license||{};
                  return(
                  <tr key={u.id} style={{ borderBottom:"1px solid #f3f4f6" }}>
                    <td style={{ padding:"6px 8px", color:"#6b7280" }}>{u.id}</td>
                    <td style={{ padding:"6px 8px", fontWeight:600 }}>{u.name}</td>
                    <td style={{ padding:"6px 8px", fontSize:11 }}>{u.email}</td>
                    <td style={{ padding:"6px 8px" }}>{u.verein}</td>
                    <td style={{ padding:"6px 8px" }}>
                      <span style={{ padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:700,
                        background:u.role==="admin"?"#f8f9fa":"#f0f1f2", color:u.role==="admin"?"#22221C":"#22221C" }}>{u.role}</span></td>
                    <td style={{ padding:"6px 8px" }}>
                      <span style={{ padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:700,
                        background:lic.plan==="einzel"?"#f0f1f2":lic.plan==="pairs"?"#f8f9fa":"#eff6ff",
                        color:lic.plan==="einzel"?"#059669":lic.plan==="pairs"?"#22221C":"#2563eb" }}>
                        {planLabel(lic.plan)}</span></td>
                    <td style={{ padding:"6px 8px" }}>
                      <span style={{ padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:700, background:ls.bg, color:ls.color }}>{ls.label}</span></td>
                    <td style={{ padding:"6px 8px", fontSize:11, color:"#6b7280" }}>{lic.expiresAt||"Unbegrenzt"}</td>
                    <td style={{ padding:"6px 8px" }}>
                      <div style={{ display:"flex", gap:3, flexWrap:"wrap" }}>
                        <button onClick={()=>{const e={...u};e._licPlan=(u.license||{}).plan||'full';e._licExpires=(u.license||{}).expiresAt||'';e._licActive=(u.license||{}).active!==false;setEditUser(e);}} style={{ padding:"2px 7px", borderRadius:4, border:"1px solid #22221C", background:"#f8f9fa", color:"#22221C", fontSize:10, fontWeight:600, cursor:"pointer" }}>Edit</button>
                        <button onClick={()=>sendCredentials(u.id)} title="Neues PW generieren & per E-Mail senden" style={{ padding:"2px 7px", borderRadius:4, border:"1px solid #2563eb", background:"#eff6ff", color:"#2563eb", fontSize:10, fontWeight:600, cursor:"pointer" }}>Senden</button>
                        {u.id!==user?.id&&<button onClick={()=>deleteUser(u.id,u.name)} style={{ padding:"2px 7px", borderRadius:4, border:"1px solid #fca5a5", background:"#fef2f2", color:"#dc2626", fontSize:10, fontWeight:600, cursor:"pointer" }}>Del</button>}
                      </div>
                      <div style={{ display:"flex", gap:3, marginTop:3 }}>
                        <input placeholder="Neues PW" value={resetPw[u.id]||""} onChange={e=>setResetPw(p=>({...p,[u.id]:e.target.value}))}
                          type="password" style={{ padding:"2px 5px", borderRadius:3, border:"1px solid #d1d5db", fontSize:10, width:80 }}/>
                        <button onClick={()=>doResetPassword(u.id)} style={{ padding:"2px 5px", borderRadius:3, border:"1px solid #f59e0b", background:"#fffbeb", color:"#92400e", fontSize:9, fontWeight:600, cursor:"pointer" }}>Reset</button>
                      </div>
                    </td>
                  </tr>);
                })}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop:8, fontSize:11, color:"#6b7280" }}>{filteredUsers.length} / {users.length} Benutzer</div>
        </div>)}

        {/* === SETTINGS === */}
        {tab==="settings"&&(<div>
          <div style={cS}>
            <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#374151" }}>App-Einstellungen</h3>
            <div style={{ marginBottom:14 }}>
              <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }}>
                <input type="checkbox" checked={settings.registrationOpen!==false} onChange={e=>setSettings({...settings,registrationOpen:e.target.checked})}
                  style={{ width:18, height:18 }}/>
                <div><div style={{ fontSize:13, fontWeight:600 }}>Registrierung offen</div>
                  <div style={{ fontSize:11, color:"#6b7280" }}>Neue Benutzer koennen sich registrieren</div></div>
              </label>
            </div>
            <div style={{ marginBottom:14 }}>
              <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }}>
                <input type="checkbox" checked={settings.maintenanceMode===true} onChange={e=>setSettings({...settings,maintenanceMode:e.target.checked})}
                  style={{ width:18, height:18 }}/>
                <div><div style={{ fontSize:13, fontWeight:600, color:settings.maintenanceMode?"#dc2626":"#374151" }}>Wartungsmodus</div>
                  <div style={{ fontSize:11, color:"#6b7280" }}>App fuer normale User sperren</div></div>
              </label>
            </div>
            <div style={{ marginBottom:14 }}>
              <label style={{ fontSize:11, fontWeight:600, color:"#374151", display:"block", marginBottom:3 }}>Willkommensnachricht</label>
              <input value={settings.welcomeMessage||""} onChange={e=>setSettings({...settings,welcomeMessage:e.target.value})} style={iS} placeholder="Login-Seite"/>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
              <div>
                <label style={{ fontSize:11, fontWeight:600, color:"#374151", display:"block", marginBottom:3 }}>Saison-Jahr</label>
                <input type="number" value={settings.seasonYear||2026} onChange={e=>setSettings({...settings,seasonYear:parseInt(e.target.value)||2026})} style={{ ...iS, width:100 }}/>
              </div>
              <div>
                <label style={{ fontSize:11, fontWeight:600, color:"#374151", display:"block", marginBottom:3 }}>Max. User/Verein</label>
                <input type="number" value={settings.maxUsersPerVerein||50} onChange={e=>setSettings({...settings,maxUsersPerVerein:parseInt(e.target.value)||50})} style={{ ...iS, width:100 }}/>
              </div>
            </div>
            <button onClick={saveSettings} style={{ padding:"8px 20px", borderRadius:6, border:"none", background:"#22221C", color:"white", fontWeight:700, fontSize:13, cursor:"pointer" }}>Einstellungen speichern</button>
          </div>
        </div>)}
      </div>
    );
  }

  // ============================================================
  //  COMPETITIONS PAGE
  // ============================================================
  function CompetitionPage({ onLoadSkater }) {
    const [competitions, setCompetitions] = useState([]);
    const [selectedCompIdx, setSelectedCompIdx] = useState(null);
    const [selectedSkaterIdx, setSelectedSkaterIdx] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadMsg, setUploadMsg] = useState("");

    useEffect(() => {
      const stored = localStorage.getItem("rollart_competitions");
      if (stored) { try { setCompetitions(JSON.parse(stored)); } catch(e){} }
    }, []);
    useEffect(() => {
      localStorage.setItem("rollart_competitions", JSON.stringify(competitions));
    }, [competitions]);

    // --- PDF TEXT EXTRACTION ---
    const extractPageText = async (pdfPage) => {
      const content = await pdfPage.getTextContent();
      const byY = {};
      content.items.forEach(it => {
        const y = Math.round(it.transform[5]);
        if (!byY[y]) byY[y] = [];
        byY[y].push({ t: it.str.trim(), x: Math.round(it.transform[4]) });
      });
      return Object.keys(byY).sort((a, b) => b - a).map(y =>
        byY[y].sort((a, b) => a.x - b.x).map(i => i.t).filter(t => t).join(" ")
      ).join("\\n");
    };

    // --- CATEGORY MAPPING ---
    const parseCategory = (text) => {
      // Normalize Unicode (decomposed → precomposed) and uppercase
      const t = (text || "").normalize("NFC").toUpperCase();
      const sp = t.includes("SHORT");
      const isPairs = t.includes("PAIRS") || t.includes("PAARLAUF");
      const px = isPairs ? "pairs_" : "";
      if (t.includes("TOTS") || t.includes("SCHÜLER D") || t.includes("SCHULER D") || t.includes("SCH\\u00DCLER D")) return { kategorie:px+"tots", segment: px+"tots_fp" };
      if (t.includes("MINIS") || t.includes("SCHÜLER C") || t.includes("SCHULER C") || t.includes("SCH\\u00DCLER C") || /JAHRGANG\\s+201[45]/.test(t)) return { kategorie:px+"minis", segment: px+"minis_fp" };
      if (t.includes("ESPOIRS") || t.includes("SCHÜLER B") || t.includes("SCHULER B") || t.includes("SCH\\u00DCLER B")) return { kategorie:px+"espoirs", segment: sp?px+"espoirs_sp":px+"espoirs_fp" };
      if (t.includes("CADETS") || t.includes("KADETT")) return { kategorie:px+"cadets", segment: sp?px+"cadets_sp":px+"cadets_fp" };
      if (t.includes("YOUTH") || t.includes("JUGEND") || t.includes("JEUNESSE")) { const k=isPairs?"youth":"jeunesse"; return { kategorie:px+k, segment: sp?px+k+"_sp":px+k+"_fp" }; }
      if (t.includes("JUNIOR") || t.includes("JUNIOREN")) return { kategorie:px+"junior", segment: sp?px+"junior_sp":px+"junior_fp" };
      return { kategorie:px+"senior", segment: sp?px+"senior_sp":px+"senior_fp" };
    };

    // --- SKATER NAME DETECTION ---
    const isSkaterName = (line) => {
      const t = line.trim();
      if (t.length < 4) return false;
      const words = t.split(/\\s+/).filter(w => w.length > 0);
      if (words.length < 2) return false;
      const noise = ["JUDGES","DETAILS","SKATER","TECHNICAL","PANEL","RESULTS","FINAL","RESULT",
        "WORLDSKATE","ROLLART","PROGRAM","COMPONENT","ELEMENT","SEGMENT","RANK","VERIFIED",
        "FREE","SKATING","SHORT","LADIES","MEN","PAIRS","EXECUTED","BASE","SCORES","INFO",
        "VALUE","FACTOR","DEDUCTIONS","TOTAL","REFEREE","JUDGE","SPECIALIST","DATA","OPERATOR",
        "CONTROLLER","ASSISTANT","EVENT","MANAGER","GER","FREIBURG","RANGLISTENWETTBEWERB",
        "KÜRLAUFEN","FOOTWORK","SEQUENCE","COMPOSITION","CHOREOGRAPHY","PERFORMANCE","EXECUTION",
        "TRANSITIONS","LINKING","MOVEMENT","CREDIT","DISTRIBUTION","BONUS","EDGE","BREAK","HALF"];
      // Filter out trailing "-" used in Pairs names (e.g. "GIACOMO TIBERIO SERAFINI -")
      const cleanWords = words.map(w => w.replace(/^-+$/, '')).filter(w => w.length > 0);
      if (cleanWords.length < 2) return false;
      const allUpper = cleanWords.every(w => w === w.toUpperCase() && /[A-ZÄÖÜÉÈÀÁÂ]/.test(w));
      if (!allUpper) return false;
      if (cleanWords.some(w => noise.includes(w))) return false;
      return true;
    };

    // --- PARSE ONE JUDGES DETAILS PAGE ---
    const parseJudgesDetailsPage = (pageText) => {
      const lines = pageText.split("\\n").map(l => l.trim()).filter(l => l);
      let name = "", rank = 0, tes = 0, pcsTotal = 0, ded = 0, total = 0;
      const elements = [];
      const components = { skating:[0,0,0,0,0], transitions:[0,0,0,0,0], performance:[0,0,0,0,0], choreography:[0,0,0,0,0] };

      // Order matters: multi-word keywords first, then longer single words before shorter ones
      const typeKeywords = ["ComboJump","ComboSpin","ComboLift","Death Spiral","Throw Jump","Contact Spin","Step Sequence","Jump","Spin","Twist","Lift","Spiral"];
      const tcMap = { "ComboSpin":"CSp", "Spin":"SSp", "Step Sequence":"FoSq", "Jump":"SJu", "ComboJump":"CoJ", "Lift":"SLi", "ComboLift":"CLi", "Spiral":"CS", "Death Spiral":"DS", "Twist":"Tw", "Throw Jump":"Tj", "Contact Spin":"CtSp" };

      // --- FIND RANK + NAME ---
      // Pairs pdfjs format: "1 GIACOMO SERAFINI - ITA score score (factored) Deductions score"
      //                     "ANGELICA RONDELLI 32.68 32.07 0.00 64.75"
      // Singles format:     "1 JOHN SMITH score ..." or separate lines
      // NOTE: pdfjs groups text by baseline Y-coordinate (Math.round). The rank number
      // uses a larger font (10.6pt vs 7.4/8.9pt), shifting its baseline slightly.
      // On some pages the rounding boundary falls between rank and name+score,
      // putting them on SEPARATE lines. This typically affects rank 1 (first page
      // of each section has different vertical offset). So we need 3 patterns:
      // Pattern A: rank+name+score all on one line (works for most ranks)
      // Pattern B: name+score on one line, rank on adjacent line (rank 1 fix)
      // Pattern C: fallback via isSkaterName
      // Pattern D: standalone rank number near skater name (widened search)
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Pattern A: line with "score" keyword + rank at start
        const mScore = line.match(/^(\\d+)\\s+(.+?)\\s+(?:[A-Z]{2,3}\\s+)?score\\b/i);
        if (mScore && parseInt(mScore[1]) <= 50) {
          rank = parseInt(mScore[1]);
          let rawName = mScore[2].trim();
          rawName = rawName.replace(/-\\s*$/, "").trim();
          if (i + 1 < lines.length) {
            const nextLine = lines[i+1].trim();
            const nameFromNext = nextLine.replace(/\\s*[-+]?\\d+\\.\\d+.*/,"").replace(/-\\s*$/,"").trim();
            if (nameFromNext && /^[A-ZÄÖÜÉÈÀÁÂ\\s]+$/.test(nameFromNext) && nameFromNext.length >= 3) {
              rawName += (rawName.includes(" - ") ? " " : " - ") + nameFromNext;
            }
          }
          name = rawName;
          break;
        }
        // Pattern B: name+score line WITHOUT rank digit at start (rank on adjacent line)
        // Widened: search first 20 lines, search ±6 lines for standalone rank
        if (i < 20 && /^[A-ZÄÖÜÉÈÀÁÂ]/.test(line)) {
          const scorePosLC = line.toLowerCase().indexOf(" score");
          if (scorePosLC > 0) {
            let rawName = line.substring(0, scorePosLC).trim();
            rawName = rawName.replace(/\\s+[A-Z]{2,3}$/, "").replace(/-\\s*$/, "").trim();
            if (rawName.length >= 3) {
              // Search nearby lines for standalone rank number (widened to ±6)
              for (let j = Math.max(0, i - 6); j < Math.min(lines.length, i + 6); j++) {
                if (j === i) continue;
                const rm = lines[j].match(/^(\\d{1,2})$/);
                if (rm && parseInt(rm[1]) > 0 && parseInt(rm[1]) <= 50) {
                  rank = parseInt(rm[1]);
                  break;
                }
              }
              if (rank > 0) {
                for (let k = i + 1; k <= i + 4 && k < lines.length; k++) {
                  if (/^\\d{1,2}$/.test(lines[k])) continue;
                  const nextLine = lines[k].trim();
                  const nameFromNext = nextLine.replace(/\\s*[-+]?\\d+\\.\\d+.*/,"").replace(/-\\s*$/,"").trim();
                  if (nameFromNext && /^[A-ZÄÖÜÉÈÀÁÂ\\s]+$/.test(nameFromNext) && nameFromNext.length >= 3) {
                    rawName += (rawName.includes(" - ") ? " " : " - ") + nameFromNext;
                  }
                  break;
                }
                name = rawName;
                break;
              }
            }
          }
        }
        // Pattern C: Fallback — standalone skater name near top
        if (i > 0 && i < 15 && isSkaterName(line)) {
          let pairName = line.trim().replace(/-\\s*$/, "").trim();
          if (i + 1 < lines.length && isSkaterName(lines[i+1])) {
            pairName += " - " + lines[i+1].trim().replace(/-\\s*$/, "").trim();
          }
          for (let j = Math.max(0, i - 4); j < Math.min(lines.length, i + 6); j++) {
            const rm = lines[j].match(/^(\\d+)\\s+score\\b/i);
            if (rm) { rank = parseInt(rm[1]); break; }
          }
          if (!rank) {
            for (let j = Math.max(0, i - 6); j < Math.min(lines.length, i + 6); j++) {
              const rm = lines[j].match(/^(\\d{1,2})$/);
              if (rm && parseInt(rm[1]) > 0 && parseInt(rm[1]) <= 50) { rank = parseInt(rm[1]); break; }
            }
          }
          if (!rank) {
            for (const sl of lines) {
              const rm = sl.match(/^\\s*(\\d+)\\s+[A-Z]{2,3}\\s+\\d+\\.\\d+/);
              if (rm && parseInt(rm[1]) <= 50) { rank = parseInt(rm[1]); break; }
            }
          }
          name = pairName;
          break;
        }
      }
      // Pattern D: If name found but no rank, search ALL lines for standalone rank number
      if (name && !rank) {
        for (let j = 0; j < Math.min(lines.length, 25); j++) {
          const rm = lines[j].match(/^(\\d{1,2})$/);
          if (rm && parseInt(rm[1]) > 0 && parseInt(rm[1]) <= 50) { rank = parseInt(rm[1]); break; }
        }
      }

      // --- FIND SUMMARY SCORES ---
      // Look for line with 4 decimals where total ≈ tes + pcs - ded
      // Also handle 3-decimal lines (ded=0 omitted)
      const summaryCandidate = (n) => {
        if (n.length >= 4) {
          const t=n[0], p=n[1], d=Math.abs(n[2]), tot=n[3];
          return Math.abs(tot - (t + p - d)) < 0.5;
        }
        if (n.length === 3) {
          const t=n[0], p=n[1], tot=n[2];
          return Math.abs(tot - (t + p)) < 0.5;
        }
        return false;
      };
      for (const line of lines) {
        // Skip PCS/element lines (contain component names or element keywords)
        if (/Skating|Transition|Performance|Choreography|Executed|Program|Factor|Judges|Panel|Deduction/i.test(line)) continue;
        const nums = line.match(/-?\\d+\\.\\d+/g);
        if (nums && nums.length >= 3 && nums.length <= 6) {
          const f = nums.map(n => parseFloat(n));
          if (summaryCandidate(f)) {
            if (f.length >= 4) { tes = f[0]; pcsTotal = f[1]; ded = Math.abs(f[2]); total = f[3]; }
            else { tes = f[0]; pcsTotal = f[1]; total = f[2]; }
            break;
          }
        }
      }

      // --- FIND ELEMENT SECTION ---
      let elemStart = -1, elemEnd = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("Executed Element")) elemStart = i + 1;
        if (elemStart > 0 && elemEnd < 0 && (lines[i].includes("Program Components") || (lines[i].includes("Skating Skills") && !lines[i].includes("Element")))) elemEnd = i;
      }
      if (elemStart > 0 && elemEnd < 0) {
        for (let i = elemStart; i < lines.length; i++) {
          if (lines[i].includes("Factor") && !lines[i].includes("Element")) { elemEnd = i; break; }
        }
        if (elemEnd < 0) elemEnd = lines.length;
      }

      if (elemStart > 0 && elemEnd > elemStart) {
        const eLines = lines.slice(elemStart, elemEnd);
        let curEl = null, curType = null, curFmt = 0;
        let elCounter = 0;
        const saveEl = () => { if (curEl && (curEl.subElements.length > 0 || curEl.elCode)) elements.push(curEl); };
        const mkEl = (num, type, tc) => ({ num, type, typeCode:tc, elCode:"", subElements:[], totalBase:0, totalPanel:0, judges:[0,0,0,0,0] });

        // Detect type keyword as SECOND token: "CODE TYPE ..." or "# TYPE ..."
        // Prevents matching "Spin" inside descriptive names like "Heel Forward Spin"
        const detectType = (line) => {
          for (const tk of typeKeywords) {
            const regex = new RegExp("^(\\\\S+)\\\\s+" + tk.replace(/\\s+/g, "\\\\s+") + "\\\\b");
            if (regex.test(line)) {
              const idx = line.indexOf(tk);
              return { type: tk, idx };
            }
          }
          return null;
        };

        // Extract all numbers from a string
        const extractNums = (s) => {
          const m = s.match(/([-+]?\\d+\\.?\\d*)/g);
          return m ? m.map(n => parseFloat(n)) : [];
        };

        for (let i = 0; i < eLines.length; i++) {
          const line = eLines[i];
          const td = detectType(line);

          if (td) {
            // Line contains a TYPE keyword → new element
            saveEl();
            elCounter++;
            const type = td.type;
            const tc = tcMap[type] || type;
            const beforeType = line.substring(0, td.idx).trim();
            const afterType = line.substring(td.idx + type.length).trim();

            // Format 1: "# TYPE ..." (starts with element number)
            const fmt1 = beforeType.match(/^(\\d+)$/);
            // Format 2: "CODE TYPE ..." (starts with element code)
            const code = fmt1 ? "" : beforeType.split(/\\s+/)[0] || "";
            const num = fmt1 ? parseInt(fmt1[1]) : elCounter;

            curEl = mkEl(num, type, tc);
            curType = type;
            if (code) {
              curEl.elCode = code;
              if (code.startsWith("ChSt") && tc === "FoSq") curEl.typeCode = "ChSt";
            }

            const afterNums = extractNums(afterType);

            if (fmt1) {
              // === FORMAT 1 (Singles): "# TYPE CODE Name BASE [%] QOE J1 J2 J3 J4 J5 PANEL" ===
              curFmt = 1;
              // General code match: any alphanumeric token starting with optional digit + uppercase letter
              // Handles ALL codes: 2TL, 2TF, 2Tw1, DS2, NDS, LOC, NLLoc, LK3, LM3, Fl3, ChStB, HFD, etc.
              const cm = afterType.match(/^(\\d?[A-Z][A-Za-z]*\\d*[A-Za-z]*)\\s/);
              if (cm) {
                curEl.elCode = cm[1];
                const codeAfter = afterType.substring(cm[0].length);
                // Match numeric tail: BASE [%+markers] QOE J1 J2 J3 [J4 J5] PANEL
                const inl = codeAfter.match(/([\\d.]+)\\s*[%+!*]*\\s*([-+]?[\\d.]+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)(?:\\s+([-+]?\\d+)\\s+([-+]?\\d+))?\\s+([\\d.]+)\\s*$/);
                if (inl) {
                  const base = parseFloat(inl[1]);
                  const j1=parseInt(inl[3]), j2=parseInt(inl[4]), j3=parseInt(inl[5]);
                  const j4 = inl[6] != null ? parseInt(inl[6]) : 0, j5 = inl[7] != null ? parseInt(inl[7]) : 0;
                  const panel = parseFloat(inl[8]);
                  curEl.subElements.push({ code:cm[1], base, j1, j2, j3, j4, j5, panel });
                  curEl.totalBase += base; curEl.totalPanel += panel;
                }
              } else if (afterNums.length >= 5 && (type === "ComboSpin" || type === "ComboJump" || type === "ComboLift")) {
                curEl.judges = afterNums.slice(0,5).map(n => Math.round(n));
              }
            } else {
              // === FORMAT 2 (Pairs): "CODE TYPE J1 J2 J3 J4 J5 PANEL # NAME GOE BASE" ===
              curFmt = 2;
              if (afterNums.length >= 6) {
                const j1=Math.round(afterNums[0]), j2=Math.round(afterNums[1]), j3=Math.round(afterNums[2]);
                const j4=Math.round(afterNums[3]), j5=Math.round(afterNums[4]);
                const panel = afterNums[5];
                const base = afterNums.length >= 8 ? afterNums[afterNums.length-1] : 0;
                curEl.subElements.push({ code: code || curEl.elCode, base, j1, j2, j3, j4, j5, panel });
                curEl.totalBase += base; curEl.totalPanel += panel;
              } else if (afterNums.length >= 5 && (type === "ComboSpin" || type === "ComboJump" || type === "ComboLift")) {
                curEl.judges = afterNums.slice(0,5).map(n => Math.round(n));
              } else if (afterNums.length >= 3) {
                const j1=Math.round(afterNums[0]), j2=Math.round(afterNums[1]), j3=Math.round(afterNums[2]);
                const panel = afterNums.length >= 4 ? afterNums[3] : 0;
                const base = afterNums.length >= 6 ? afterNums[afterNums.length-1] : 0;
                curEl.subElements.push({ code: code || curEl.elCode, base, j1, j2, j3, j4:0, j5:0, panel });
                curEl.totalBase += base; curEl.totalPanel += panel;
              }
            }
            continue;
          }

          if (!curEl) continue;

          // --- SUB-ELEMENT LINES (no TYPE keyword) ---

          // Format 2 sub: "CODE J1 J2 J3 J4 J5 PANEL ..." (code then 5 signed judges then panel)
          const f2sub = line.match(/^(\\S+?)(?:\\s*<<<|\\s*<<|\\s*<)?\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([\\d.]+)/);
          if (f2sub && !/^[\\d.]+$/.test(f2sub[1])) {
            const code = f2sub[1].replace(/[<>\\s]/g, "");
            const j1=parseInt(f2sub[2]), j2=parseInt(f2sub[3]), j3=parseInt(f2sub[4]), j4=parseInt(f2sub[5]), j5=parseInt(f2sub[6]);
            const panel = parseFloat(f2sub[7]);
            // Base is typically the last number on the line
            const allNums = extractNums(line);
            const base = allNums.length > 0 ? allNums[allNums.length-1] : 0;
            curEl.subElements.push({ code, base, j1, j2, j3, j4, j5, panel }); curEl.totalBase += base; curEl.totalPanel += panel;
            if (!curEl.elCode) curEl.elCode = code;
            continue;
          }

          // Format 1 sub: "1Lo 0.90 0 0 0 0.90" (code base j1 j2 j3 panel) or with 5 judges
          const cl = line.match(/^([1-4][A-Z][a-z]*(?:\\s*<?<?<?))\\s+([\\d.]+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)(?:\\s+([-+]?\\d+)\\s+([-+]?\\d+))?\\s+([\\d.]+)/);
          if (cl) {
            const code = cl[1].replace(/[<>\\s]/g, ""), base = parseFloat(cl[2]);
            const j1=parseInt(cl[3]), j2=parseInt(cl[4]), j3=parseInt(cl[5]);
            const j4 = cl[6] != null ? parseInt(cl[6]) : 0, j5 = cl[7] != null ? parseInt(cl[7]) : 0;
            const panel = parseFloat(cl[8]);
            curEl.subElements.push({ code, base, j1, j2, j3, j4, j5, panel }); curEl.totalBase += base; curEl.totalPanel += panel;
            if (!curEl.elCode) curEl.elCode = code;
            continue;
          }

          // Format 1 sub with float GOE (no name): "1F 0.86 0.00 0 0 0 0.86" or "2S 0.78 -0.15 -1 0 -1 0.63"
          const clg = line.match(/^([1-4][A-Z][a-z]*(?:\\s*<?<?<?))\\s+([\\d.]+)\\s+([-+]?\\d+\\.\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)(?:\\s+([-+]?\\d+)\\s+([-+]?\\d+))?\\s+([\\d.]+)/);
          if (clg) {
            const code = clg[1].replace(/[<>\\s]/g, ""), base = parseFloat(clg[2]);
            // clg[3] = GOE (skipped)
            const j1=parseInt(clg[4]), j2=parseInt(clg[5]), j3=parseInt(clg[6]);
            const j4 = clg[7] != null ? parseInt(clg[7]) : 0, j5 = clg[8] != null ? parseInt(clg[8]) : 0;
            const panel = parseFloat(clg[9]);
            curEl.subElements.push({ code, base, j1, j2, j3, j4, j5, panel }); curEl.totalBase += base; curEl.totalPanel += panel;
            if (!curEl.elCode) curEl.elCode = code;
            continue;
          }

          // ComboJump sub with name: "1F Flip 0.86 0.00 0 0 0 0.86" or "2S 2 Salchow 1.85 0.13 +2 0 0 +1 +1 1.98" or "2T 2 Toeloop 2.03 % 0.13 +2 +1 0 0 +1 2.16"
          const cs = line.match(/^([1-4][A-Z][a-z]*(?:\\s*<?<?<?)?)\\s+(?:\\d+\\s+)?[A-Z][a-z]+(?:\\s+[A-Za-z]*)?\\s+([\\d.]+)\\s*[%+!*]*\\s*([-+]?[\\d.]+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)(?:\\s+([-+]?\\d+)\\s+([-+]?\\d+))?\\s+([\\d.]+)/);
          if (cs) {
            const code = cs[1].replace(/[<>\\s]/g, ""), base = parseFloat(cs[2]);
            const j1=parseInt(cs[4]), j2=parseInt(cs[5]), j3=parseInt(cs[6]);
            const j4 = cs[7] != null ? parseInt(cs[7]) : 0, j5 = cs[8] != null ? parseInt(cs[8]) : 0;
            const panel = parseFloat(cs[9]);
            curEl.subElements.push({ code, base, j1, j2, j3, j4, j5, panel }); curEl.totalBase += base; curEl.totalPanel += panel;
            if (!curEl.elCode) curEl.elCode = code;
            continue;
          }

          // Step/Lift/Spiral codes: "St1 2.30 -1 -1 -1 2.00" or "ChStB 2.00 +1 0 0 2.20"
          const sl = line.match(/^(St[B1-4]|FoSq\\d?|ChSt\\w?|Li\\d?|SyDs\\d?|ChLi\\d?|DS\\d?|LK\\d?|LM\\d?|Fl\\d?)\\s+([\\d.]+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)\\s+([-+]?\\d+)(?:\\s+([-+]?\\d+)\\s+([-+]?\\d+))?\\s+([\\d.]+)/);
          if (sl) {
            const code = sl[1], base = parseFloat(sl[2]);
            const j1=parseInt(sl[3]), j2=parseInt(sl[4]), j3=parseInt(sl[5]);
            const j4 = sl[6] != null ? parseInt(sl[6]) : 0, j5 = sl[7] != null ? parseInt(sl[7]) : 0;
            const panel = parseFloat(sl[8]);
            curEl.subElements.push({ code, base, j1, j2, j3, j4, j5, panel }); curEl.totalBase += base; curEl.totalPanel += panel;
            if (!curEl.elCode) curEl.elCode = code;
            if (code.startsWith("ChSt") && curEl.typeCode === "FoSq") curEl.typeCode = "ChSt";
            continue;
          }

          // Spin/Combo sub-elements
          // Format 1 (Singles): "CFD Camel Forward Spin 1.44 % 0.27 1.71" → CODE NAME BASE [%+] QOE PANEL
          // Format 2 (Pairs): "CBD 2.65 Camel Beside -0.30 2.95" → CODE PANEL NAME GOE BASE
          if (curType === "ComboSpin" || curType === "Spin") {
            const spinCode = line.match(/^([A-Za-z][A-Za-z]*\\d?)\\s/);
            if (spinCode) {
              const code = spinCode[1];
              const nums = extractNums(line.substring(spinCode[0].length));
              if (nums.length >= 2) {
                let base, panel;
                if (curFmt === 1) {
                  // Format 1: first = base, last = panel
                  base = nums[0]; panel = nums[nums.length - 1];
                } else {
                  // Format 2: first = panel, last = base
                  panel = nums[0]; base = nums[nums.length - 1];
                }
                curEl.subElements.push({ code, base, j1:0, j2:0, j3:0, j4:0, j5:0, panel });
                curEl.totalBase += base; curEl.totalPanel += panel;
                continue;
              }
            }
            // NL codes: "NLCFD 0.00 ... 0.00 0.00"
            const nls = line.match(/^(NL[A-Za-z]+)/);
            if (nls) {
              const code = nls[1];
              const nums = extractNums(line.substring(nls[0].length));
              let base, panel;
              if (curFmt === 1) { base = nums.length >= 1 ? nums[0] : 0; panel = nums.length >= 2 ? nums[nums.length-1] : 0; }
              else { panel = nums.length >= 1 ? nums[0] : 0; base = nums.length >= 2 ? nums[nums.length-1] : 0; }
              curEl.subElements.push({ code, base, j1:0, j2:0, j3:0, j4:0, j5:0, panel });
              curEl.totalBase += base; curEl.totalPanel += panel;
              continue;
            }
          }

          // Standalone typed sub with judges: "NLLoc Spin -2 -2 -1 -1 -3 0.00 ..." or "LOC Spin 0 0 0 +1 +1 3.10 ..."
          // These contain a TYPE keyword but were already caught by the detectType block above.
          // If not, try extracting code with judges from any remaining line with enough numbers
          if (curType === "Spin" || curType === "Lift" || curType === "ComboLift" || curType === "Spiral") {
            const codeM = line.match(/^(NL[A-Za-z]+|[CS]Sp\\d?|Li\\d?|SyDs\\d?|ChLi\\d?|DS\\d?|LK\\d?|LM\\d?|Fl\\d?|LOC|HFD?|CBD?)/);
            if (codeM) {
              const code = codeM[1];
              const nums = extractNums(line.substring(codeM[0].length));
              if (nums.length >= 7) {
                // Has base + goe + j1-j5 + panel (8 nums) or base + j1-j5 + panel (7 nums)
                const base = nums[0];
                const panel = nums[nums.length-1];
                const jStart = nums.length >= 8 ? 2 : 1; // skip goe if present
                curEl.subElements.push({ code, base, j1:Math.round(nums[jStart]), j2:Math.round(nums[jStart+1]), j3:Math.round(nums[jStart+2]), j4:Math.round(nums[jStart+3]), j5:Math.round(nums[jStart+4]), panel });
                curEl.totalBase += base; curEl.totalPanel += panel;
              } else if (nums.length === 6) {
                // j1-j5 + panel only (no base on this line)
                const panel = nums[5];
                curEl.subElements.push({ code, base:0, j1:Math.round(nums[0]), j2:Math.round(nums[1]), j3:Math.round(nums[2]), j4:Math.round(nums[3]), j5:Math.round(nums[4]), panel });
                curEl.totalPanel += panel;
                if (!curEl.elCode) curEl.elCode = code;
                continue;
              }
            }
          }
        }
        saveEl();
      }

      // PCS components: robust parsing for all PDF text extraction patterns
      // Patterns seen across real PDFs (text items grouped by Y-coordinate):
      //   A) "Transitions/Linking Footwork/Movement 0.8 2.00 2.50 2.50 2.33" (name+factor+j1+j2+j3+avg on one line)
      //   B) "Transitions/Linking Footwork/Movement" then "0.8 2.25 2.25 2.25 2.25" (name alone, nums next line)
      //   C) "Transitions/Linking Footwork/Movement 1.00 1.25 1.50 1.25" then "0.8" (judges on name line, factor separate!)
      //   D) "Skating Skills 1.50 1.50 1.25 1.42" then "0.8" (same as C)
      //   E) "Skating Skills" then "0.8" then "2.50 2.25 2.50 2.42" (factor on middle line)
      const clampJ = (v) => (isNaN(v) || v < 0 || v > 10) ? 0 : v;
      const isPcsFactor = (v) => [0.8, 1.0, 1.2, 1.4, 1.6, 1.8].some(f => Math.abs(v - f) < 0.01);
      const compPatterns = [
        { regex: /Skating\\s+Skills/i, key: "skating" },
        { regex: /Transition/i, key: "transitions" },
        { regex: /Performance/i, key: "performance" },
        { regex: /Choreography/i, key: "choreography" },
      ];
      // Extract judge scores from a number array, skipping factor/avg
      // Supports both 3-judge (Singles) and 5-judge (Pairs) formats
      const extractJudges = (f) => {
        if (f.length >= 7) {
          // 7+ nums (Pairs): factor + j1-j5 + avg → skip factor, take 5 judges
          if (isPcsFactor(f[0])) return [f[1], f[2], f[3], f[4], f[5]];
          // Could be j1-j5 + avg + extra
          return [f[0], f[1], f[2], f[3], f[4]];
        }
        if (f.length === 6) {
          // 6 nums: "factor j1 j2 j3 j4 j5" or "j1 j2 j3 j4 j5 avg"
          if (isPcsFactor(f[0])) return [f[1], f[2], f[3], f[4], f[5]];
          // j1-j5 + avg
          return [f[0], f[1], f[2], f[3], f[4]];
        }
        if (f.length === 5) {
          // 5 nums: could be "factor j1 j2 j3 avg" (3j) or "j1 j2 j3 j4 j5" (5j)
          if (isPcsFactor(f[0])) return [f[1], f[2], f[3]];
          // Assume 5 judges
          return [f[0], f[1], f[2], f[3], f[4]];
        }
        if (f.length === 4) {
          // 4 nums: "factor j1 j2 j3" or "j1 j2 j3 avg"
          const mean012 = Math.round(((f[0]+f[1]+f[2])/3)*100)/100;
          if (Math.abs(f[3] - mean012) <= 0.02) return [f[0], f[1], f[2]];
          if (isPcsFactor(f[0])) return [f[1], f[2], f[3]];
          return [f[0], f[1], f[2]];
        }
        if (f.length === 3) return [f[0], f[1], f[2]];
        return null;
      };
      let lastComp = "";
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Detect component name in this line
        let compKey = "";
        for (const cp of compPatterns) {
          if (cp.regex.test(line) && !line.includes("JUDGES") && !/^Program\\s+Component/i.test(line.trim())) {
            compKey = cp.key; break;
          }
        }
        const nums = line.match(/[\\d.]+/g);
        const f = nums ? nums.map(n => parseFloat(n)) : [];
        if (compKey && f.length >= 3) {
          // Component name line with enough numbers → extract judges
          const judges = extractJudges(f);
          if (judges) {
            components[compKey] = judges.length >= 5
              ? [clampJ(judges[0]), clampJ(judges[1]), clampJ(judges[2]), clampJ(judges[3]), clampJ(judges[4])]
              : [clampJ(judges[0]), clampJ(judges[1]), clampJ(judges[2]), 0, 0];
            // Skip next line if it's just the factor (Pattern C/D)
            if (i + 1 < lines.length) {
              const nextTrimmed = lines[i+1].trim();
              if (/^[\\d.]+$/.test(nextTrimmed) && isPcsFactor(parseFloat(nextTrimmed))) i++;
            }
            lastComp = ""; continue;
          }
        }
        if (compKey) {
          // Component name with 0-2 numbers → set lastComp for split-line parsing
          lastComp = compKey; continue;
        }
        // Continuation line: numbers after component name (Pattern B/E)
        if (lastComp && f.length >= 3) {
          const judges = extractJudges(f);
          if (judges) {
            components[lastComp] = judges.length >= 5
              ? [clampJ(judges[0]), clampJ(judges[1]), clampJ(judges[2]), clampJ(judges[3]), clampJ(judges[4])]
              : [clampJ(judges[0]), clampJ(judges[1]), clampJ(judges[2]), 0, 0];
            lastComp = ""; continue;
          }
        }
      }

      // Deductions
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        const fm = line.match(/Falls:\\s*([-+]?[\\d.]+)/);
        if (fm) ded = Math.max(ded, Math.abs(parseFloat(fm[1])));
        const cm = line.match(/Costume Violation:\\s*([-+]?[\\d.]+)/);
        if (cm) ded += Math.abs(parseFloat(cm[1]));
      }

      return { name, rank, tes, pcs: pcsTotal, ded, total, elements, components };
    };

    // --- CLUB EXTRACTION FROM RESULTS DETAILS ---
    const parseClubsFromResults = (pageText) => {
      const clubs = {};
      const lines = pageText.split("\\n").map(l => l.trim()).filter(l => l);
      const clubLines = [], nameLines = [];
      for (let i = 0; i < lines.length; i++) {
        const cm = lines[i].match(/(.+?\\([A-ZÄÖÜ]+\\))/);
        if (cm) clubLines.push({ idx: i, club: cm[1].trim().replace(/^\\d+\\s*/, "") });
        if (isSkaterName(lines[i])) nameLines.push({ idx: i, name: lines[i].trim() });
      }
      for (const nl of nameLines) {
        let bestDist = 999, bestClub = "";
        for (const cl of clubLines) {
          const d = Math.abs(cl.idx - nl.idx);
          if (d < bestDist) { bestDist = d; bestClub = cl.club; }
        }
        if (bestClub && bestDist <= 3) clubs[nl.name] = bestClub;
      }
      return clubs;
    };

    // --- MAIN PDF PARSER ---
    const parsePDF = async (file) => {
      try {
        const ab = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: ab }).promise;
        const pageTexts = [];
        for (let p = 1; p <= pdf.numPages; p++) {
          const page = await pdf.getPage(p);
          pageTexts.push(await extractPageText(page));
        }

        // Page 1: competition info
        const p1 = pageTexts[0] || "";
        let compName = "", compDate = "", categoryText = "";
        for (const line of p1.split("\\n")) {
          if (line.includes("Ranglistenwettbewerb") || line.includes("Championship") || line.includes("Meisterschaft")) compName = line.trim();
          if (/\\d{2}\\/\\d{2}\\/\\d{4}/.test(line)) compDate = line.match(/\\d{2}\\/\\d{2}\\/\\d{4}/)?.[0] || "";
          if ((line.includes("Free Skating") || line.includes("Short Program") || line.includes("Pairs")) && !line.includes("FINAL")) categoryText = line.trim();
        }
        // Also check JUDGES pages for category if page 1 didn't have it
        if (!categoryText) {
          for (const pt of pageTexts) {
            const firstLine = (pt || "").split("\\n")[0] || "";
            if (firstLine.includes("Free Skating") || firstLine.includes("Short Program") || firstLine.includes("Pairs")) {
              categoryText = firstLine.trim();
              break;
            }
          }
        }
        if (!compName && categoryText) compName = categoryText;
        if (compDate) compName += " - " + compDate;
        const { kategorie, segment } = parseCategory(categoryText + " " + p1);

        // Clubs from RESULTS DETAILS
        const rIdx = pageTexts.findIndex(p => p.includes("RESULTS DETAILS"));
        const clubs = rIdx >= 0 ? parseClubsFromResults(pageTexts[rIdx]) : {};

        // Parse each JUDGES DETAILS page
        const skaters = [];
        let pageOrder = 0;
        for (let idx = 0; idx < pageTexts.length; idx++) {
          const text = pageTexts[idx];
          // Relaxed filter: case-insensitive check for JUDGES DETAILS
          const textUpper = text.toUpperCase();
          if (!textUpper.includes("JUDGES DETAILS") || (!textUpper.includes("RANK") && !textUpper.includes("SEGMENT"))) continue;
          // Must have summary scores line
          const hasScores = text.split("\\n").some(l => {
            const nums = l.match(/-?\\d+\\.\\d+/g);
            return nums && nums.length >= 3 && l.replace(/-?\\d+\\.\\d+/g, "").replace(/\\s+/g, "").length < 3;
          });
          if (!hasScores) continue;
          pageOrder++;

          const parsed = parseJudgesDetailsPage(text);
          // Accept skaters even with rank=0 — we'll fix rank via page order below
          if (parsed.name) {
            skaters.push({
              name: parsed.name, club: clubs[parsed.name] || "",
              kategorie, segment, place: parsed.rank || 0,
              total: parsed.total, tes: parsed.tes, pcs: parsed.pcs, deductions: parsed.ded,
              _pageOrder: pageOrder,
              elements: parsed.elements.map(el => ({
                typeCode: el.typeCode, elCode: el.elCode, type: el.type,
                base: el.totalBase,
                qoe: Math.round((el.totalPanel - el.totalBase) * 100) / 100,
                judges: el.subElements.length > 0 ? [el.subElements[0].j1, el.subElements[0].j2, el.subElements[0].j3, el.subElements[0].j4||0, el.subElements[0].j5||0] : [0,0,0,0,0],
                panel: el.totalPanel,
                subElements: (el.subElements || []).map(s => ({ code: s.code, base: s.base, j1: s.j1||0, j2: s.j2||0, j3: s.j3||0, j4: s.j4||0, j5: s.j5||0 })),
              })),
              components: parsed.components,
            });
          }
        }
        // Fix missing ranks: assign rank from page order (JUDGES pages appear in rank order)
        const usedRanks = new Set(skaters.filter(s=>s.place>0).map(s=>s.place));
        skaters.forEach(s => {
          if (s.place === 0) {
            // Try page order first
            if (!usedRanks.has(s._pageOrder)) {
              s.place = s._pageOrder;
              usedRanks.add(s._pageOrder);
            } else {
              // Find first unused rank
              for (let r = 1; r <= skaters.length + 1; r++) {
                if (!usedRanks.has(r)) { s.place = r; usedRanks.add(r); break; }
              }
            }
          }
          delete s._pageOrder;
        });
        skaters.sort((a, b) => a.place - b.place);
        return { name: compName, category: categoryText, skaters };
      } catch (err) {
        throw new Error("PDF-Parsing fehlgeschlagen: " + err.message);
      }
    };

    const emptyPcs = () => ({ skating:[0,0,0,0,0], transitions:[0,0,0,0,0], performance:[0,0,0,0,0], choreography:[0,0,0,0,0] });
    const emptyRow = () => ({ typeCode:"", elCode:"", judgeGoe:[0,0,0,0,0], rotation:"normal", comboEls:[], nv:false, dg:false, bonuses:[], _id:Math.random().toString(36).slice(2) });

    const handleUpload = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      e.target.value = "";
      setUploading(true); setUploadMsg("PDF wird analysiert...");
      try {
        const comp = await parsePDF(file);
        if (comp.skaters.length === 0) throw new Error("Keine Läufer im PDF gefunden");
        setCompetitions(prev => [...prev, { ...comp, id: Date.now() }]);
        setUploadMsg(comp.skaters.length + " Läufer erfolgreich importiert!");
        setTimeout(() => setUploadMsg(""), 3000);
      } catch (err) { setUploadMsg("Fehler: " + err.message); }
      setUploading(false);
    };

    const handleDeleteComp = (idx) => {
      setCompetitions(prev => prev.filter((_, i) => i !== idx));
      if (selectedCompIdx === idx) { setSelectedCompIdx(null); setSelectedSkaterIdx(null); }
      else if (selectedCompIdx > idx) setSelectedCompIdx(prev => prev - 1);
    };

    const handleLoadSkater = (skater) => {
      if (!onLoadSkater) return;

      // Helper: find best matching CSp level code from base value
      const matchCSpLevel = (totalBase) => {
        // COMBO_SPINS: CSpB=1.7, CSp1=2.3, CSp2=2.8, CSp3=3.4, CSp4=4.0
        const levels = [
          {code:"CSpB",base:1.7},{code:"CSp1",base:2.3},{code:"CSp2",base:2.8},
          {code:"CSp3",base:3.4},{code:"CSp4",base:4.0}
        ];
        let best = levels[0];
        let bestDiff = 999;
        for (const lv of levels) {
          const d = Math.abs(lv.base - totalBase);
          if (d < bestDiff) { bestDiff = d; best = lv; }
        }
        return best.code;
      };

      // Helper: find best matching Solo Spin code from base value
      const matchSSpLevel = (totalBase) => {
        // Match against ALL solo spins (Upright, Sit, Camel with levels)
        let best = null;
        let bestDiff = 999;
        for (const sp of SOLO_SPINS) {
          const d = Math.abs(sp.base - totalBase);
          if (d < bestDiff) { bestDiff = d; best = sp; }
        }
        return best ? best.code : "SSpB";
      };

      // Helper: find best matching step sequence code
      const matchStepLevel = (totalBase) => {
        const levels = [
          {code:"StB",base:1.8},{code:"St1",base:2.3},{code:"St2",base:3.3},
          {code:"St3",base:3.9},{code:"St4",base:4.4}
        ];
        let best = levels[0];
        let bestDiff = 999;
        for (const lv of levels) {
          const d = Math.abs(lv.base - totalBase);
          if (d < bestDiff) { bestDiff = d; best = lv; }
        }
        return best.code;
      };

      // Pad judge array to 5 elements (PDF has 3, simulator expects up to 5)
      const padJudges = (arr) => {
        const a = arr || [0,0,0,0,0];
        while (a.length < 5) a.push(0);
        return a.slice(0, 5);
      };

      // Map elements to simulator rows
      const rows = (skater.elements || []).map(el => {
        const jGoe = padJudges(el.judges);
        const isComboJump = el.type === "ComboJump" && el.subElements && el.subElements.length > 0;
        const isComboSpin = el.type === "ComboSpin" && el.typeCode === "CSp";
        const isSoloSpin = el.type === "Spin" && el.typeCode === "SSp";
        const isStep = el.type === "Step Sequence" && (el.typeCode === "FoSq" || el.typeCode === "ChSt");

        if (isComboJump) {
          // ComboJump: each sub-element is a jump code (1Lo, 1F, etc.)
          return {
            typeCode: "CoJ", elCode: "",
            judgeGoe: jGoe,
            rotation: "normal",
            comboEls: el.subElements.map(s => ({
              code: s.code || "", rotation: "normal", nv: false,
              judgeGoe: padJudges([s.j1||0, s.j2||0, s.j3||0, s.j4||0, s.j5||0]),
              _id: Math.random().toString(36).slice(2),
            })),
            nv: false, dg: false, bonuses: [], _id: Math.random().toString(36).slice(2),
          };
        }

        if (isComboSpin) {
          // ComboSpin: PDF sub-elements are positions (S, C, U) - we need overall CSp level
          const cspCode = matchCSpLevel(el.base || 0);
          return {
            typeCode: "CSp", elCode: "",
            judgeGoe: jGoe,
            rotation: "normal",
            comboEls: [{
              code: cspCode, rotation: "normal", nv: false,
              judgeGoe: jGoe,
              _id: Math.random().toString(36).slice(2),
            }],
            nv: false, dg: false, bonuses: [], _id: Math.random().toString(36).slice(2),
          };
        }

        if (isSoloSpin) {
          // Solo Spin: find matching code from base value
          const sspCode = matchSSpLevel(el.base || 0);
          return {
            typeCode: "SSp", elCode: sspCode,
            judgeGoe: jGoe,
            rotation: "normal", comboEls: [],
            nv: false, dg: false, bonuses: [], _id: Math.random().toString(36).slice(2),
          };
        }

        if (isStep) {
          // Step Sequence / ChSt: find matching level from base value or use parsed code
          let stepCode = el.elCode || "";
          if (el.typeCode === "ChSt") {
            stepCode = stepCode.match(/^ChSt[B1]?$/) ? stepCode : (el.base >= 2.5 ? "ChSt1" : "ChStB");
          } else {
            stepCode = stepCode.match(/^St[B1-4]$/) ? stepCode : matchStepLevel(el.base || 0);
          }
          return {
            typeCode: el.typeCode, elCode: stepCode,
            judgeGoe: jGoe,
            rotation: "normal", comboEls: [],
            nv: false, dg: false, bonuses: [], _id: Math.random().toString(36).slice(2),
          };
        }

        // Default: Solo Jump or other non-combo element
        return {
          typeCode: el.typeCode || "SJu",
          elCode: el.elCode || "",
          judgeGoe: jGoe,
          rotation: "normal", comboEls: [],
          nv: false, dg: false, bonuses: [], _id: Math.random().toString(36).slice(2),
        };
      });

      // Ensure minimum rows for segment
      const seg = skater.segment || "senior_fp";
      const minRows = SEGMENT_DEFS[seg]?.rows || 10;
      while (rows.length < minRows) rows.push(emptyRow());

      // Map PCS components from parsed data (clamp to valid 0-10 range)
      const clampPcs = (arr) => (arr || [0,0,0,0,0]).map(v => {
        const n = typeof v === 'number' && !isNaN(v) ? v : 0;
        return n < 0 ? 0 : n > 10 ? 0 : n;
      });
      const pcs = emptyPcs();
      if (skater.components) {
        if (Array.isArray(skater.components.skating)) {
          pcs.skating = clampPcs(skater.components.skating);
          pcs.transitions = clampPcs(skater.components.transitions || pcs.transitions);
          pcs.performance = clampPcs(skater.components.performance || pcs.performance);
          pcs.choreography = clampPcs(skater.components.choreography || pcs.choreography);
        } else {
          // Components might be numeric values from PDF → fill all judge slots
          const compMap = {"skating":"skating", "transitions":"transitions", "performance":"performance", "choreography":"choreography",
                          "Skating Skills":"skating", "Transitions":"transitions", "Performance":"performance", "Choreography":"choreography"};
          Object.entries(skater.components).forEach(([key, val]) => {
            const target = compMap[key];
            if (target && typeof val === "number" && val > 0) {
              pcs[target] = [val, val, val, val, val];
            }
          });
        }
      }

      onLoadSkater({
        name: skater.name, verein: skater.club || "",
        kategorie: skater.kategorie || "tots", segment: seg,
        rows, pcs,
        deductions: skater.deductions || 0, extraPoints: 0, judgeCount: 3,
      });
    };

    const selectedComp = selectedCompIdx !== null ? competitions[selectedCompIdx] : null;
    const selectedSkater = selectedSkaterIdx !== null && selectedComp ? selectedComp.skaters[selectedSkaterIdx] : null;

    return (
      <div className="r-stack-mobile r-stack-tablet" style={{ display:"flex", height:"calc(100vh - 150px)" }}>
        {/* Left: competitions */}
        <div className="r-sidebar-mobile r-sidebar-tablet" style={{ width:"280px", background:"#fff", borderRight:"1px solid #e5e7eb", overflowY:"auto", padding:"12px" }}>
          <div style={{ marginBottom:"12px" }}>
            <label style={{ display:"flex", alignItems:"center", gap:"6px", padding:"8px 10px", borderRadius:"6px", border:"1px solid #22221C", background:"#f0f1f2", color:"#22221C", fontWeight:"600", fontSize:"11px", cursor:"pointer" }}>
              + Endergebnis-PDF hochladen
              <input type="file" accept=".pdf" onChange={handleUpload} disabled={uploading} style={{ display:"none" }} />
            </label>
          </div>
          {uploadMsg && <div style={{ fontSize:"10px", color: uploadMsg.includes("Fehler") ? "#dc2626" : "#22221C", marginBottom:"8px", padding:"4px" }}>{uploadMsg}</div>}
          <div style={{ fontSize:"10px", fontWeight:"600", color:"#6b7280", textTransform:"uppercase", marginBottom:"8px" }}>Wettbewerbe ({competitions.length})</div>
          {competitions.map((comp, idx) => (
            <div key={comp.id} style={{ padding:"8px 10px", borderRadius:"6px", background: selectedCompIdx===idx ? "#f0f1f2" : "white", border: selectedCompIdx===idx ? "2px solid #22221C" : "1px solid #e5e7eb", marginBottom:"6px", fontSize:"12px" }}>
              <div onClick={() => { setSelectedCompIdx(idx); setSelectedSkaterIdx(null); }} style={{ cursor:"pointer" }}>
                <div style={{ fontWeight:"600", color:"#22221C" }}>{comp.name}</div>
                <div style={{ fontSize:"10px", color:"#6b7280", marginTop:"2px" }}>{comp.category} — {comp.skaters?.length || 0} Läufer</div>
              </div>
              <button onClick={() => handleDeleteComp(idx)} style={{ marginTop:"4px", padding:"3px 8px", borderRadius:"4px", border:"1px solid #fca5a5", background:"#fef2f2", color:"#dc2626", fontWeight:"600", fontSize:"9px", cursor:"pointer", width:"100%" }}>Löschen</button>
            </div>
          ))}
        </div>

        {/* Right: details */}
        <div style={{ flex:1, overflowY:"auto", padding:"20px" }}>
          {!selectedComp ? (
            <div style={{ textAlign:"center", color:"#6b7280", paddingTop:"40px" }}>
              <div style={{ fontSize:"40px", marginBottom:"12px" }}>🏆</div>
              <div style={{ fontSize:"14px", fontWeight:"600" }}>Wettbewerb auswählen oder Endergebnis-PDF hochladen</div>
              <div style={{ fontSize:"11px", color:"#9ca3af", marginTop:"4px" }}>RollArt Endergebnis-PDFs werden automatisch ausgewertet</div>
            </div>
          ) : !selectedSkater ? (
            <div>
              <h2 style={{ fontSize:"18px", fontWeight:"700", color:"#22221C", marginBottom:"4px" }}>{selectedComp.name}</h2>
              <p style={{ fontSize:"12px", color:"#6b7280", marginBottom:"16px" }}>{selectedComp.category}</p>
              <div className="r-table-wrap">
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"12px", minWidth:500 }}>
                <thead>
                  <tr style={{ background:"#f3f4f6", borderBottom:"2px solid #e5e7eb" }}>
                    {["Pl.","Name","Verein","TES","PCS","DED","Total"].map(h => (
                      <th key={h} style={{ padding:"8px", textAlign: h==="Name"||h==="Verein" ? "left" : "right", fontWeight:"700", color:"#374151" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(selectedComp.skaters || []).map((sk, idx) => (
                    <tr key={idx} onClick={() => setSelectedSkaterIdx(idx)} style={{ borderBottom:"1px solid #f3f4f6", cursor:"pointer", background: selectedSkaterIdx===idx ? "#f0f1f2" : "white" }}>
                      <td style={{ padding:"8px", fontWeight:"700", color:"#22221C", textAlign:"right" }}>{sk.place}</td>
                      <td style={{ padding:"8px", fontWeight:"600" }}>{sk.name}</td>
                      <td style={{ padding:"8px", color:"#6b7280", fontSize:"11px" }}>{sk.club}</td>
                      <td style={{ padding:"8px", textAlign:"right" }}>{(sk.tes||0).toFixed(2)}</td>
                      <td style={{ padding:"8px", textAlign:"right" }}>{(sk.pcs||0).toFixed(2)}</td>
                      <td style={{ padding:"8px", textAlign:"right", color: sk.deductions > 0 ? "#dc2626" : undefined }}>{sk.deductions > 0 ? "-"+(sk.deductions||0).toFixed(2) : "0.00"}</td>
                      <td style={{ padding:"8px", textAlign:"right", fontWeight:"700", color:"#059669" }}>{(sk.total||0).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => setSelectedSkaterIdx(null)} style={{ padding:"5px 10px", borderRadius:"5px", border:"1px solid #d1d5db", background:"white", fontSize:"11px", fontWeight:"600", cursor:"pointer", marginBottom:"12px" }}>← Zurück</button>
              <div style={{ display:"flex", alignItems:"baseline", gap:"12px", marginBottom:"6px" }}>
                <h2 style={{ fontSize:"16px", fontWeight:"700", color:"#22221C" }}>{selectedSkater.name}</h2>
                <span style={{ fontSize:"12px", color:"#059669", fontWeight:"700" }}>Platz {selectedSkater.place}</span>
              </div>
              {selectedSkater.club && <p style={{ fontSize:"11px", color:"#6b7280", marginBottom:"12px" }}>{selectedSkater.club}</p>}
              <div className="r-grid2-mobile" style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"8px", marginBottom:"16px" }}>
                {[["TES", selectedSkater.tes], ["PCS", selectedSkater.pcs], ["DED", selectedSkater.deductions], ["Total", selectedSkater.total]].map(([label, val]) => (
                  <div key={label} style={{ padding:"10px", background:"#f0f1f2", borderRadius:"8px", borderLeft:"3px solid " + (label==="DED" && val > 0 ? "#dc2626" : "#059669") }}>
                    <div style={{ fontSize:"10px", color:"#6b7280", fontWeight:"600" }}>{label}</div>
                    <div style={{ fontSize:"18px", fontWeight:"700", color: label==="Total" ? "#059669" : label==="DED" && val > 0 ? "#dc2626" : "#22221C" }}>
                      {label==="DED" && val > 0 ? "-" : ""}{(val||0).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              {(selectedSkater.elements || []).length > 0 && (
                <div style={{ marginBottom:"16px" }}>
                  <h3 style={{ fontSize:"13px", fontWeight:"700", color:"#374151", marginBottom:"8px" }}>Elemente ({selectedSkater.elements.length})</h3>
                  <div className="r-table-wrap">
                  <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"11px", minWidth:400 }}>
                    <thead>
                      <tr style={{ background:"#f3f4f6", borderBottom:"1px solid #e5e7eb" }}>
                        {["#","Typ","Code","Basis","QOE","Panel"].map(h => (
                          <th key={h} style={{ padding:"6px", textAlign: h==="#"||h==="Typ"||h==="Code" ? "left" : "right", fontWeight:"600", color:"#374151" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedSkater.elements.map((el, idx) => (
                        <tr key={idx} style={{ borderBottom:"1px solid #f3f4f6" }}>
                          <td style={{ padding:"6px", color:"#6b7280" }}>{idx+1}</td>
                          <td style={{ padding:"6px", fontSize:"10px", color:"#6b7280" }}>
                            {el.type === "ComboJump" ? "Kombi" : el.type === "ComboSpin" ? "KSpin" : el.type === "Step Sequence" ? "Step" : el.type === "Spin" ? "Spin" : "Jump"}
                          </td>
                          <td style={{ padding:"6px", fontWeight:"600" }}>
                            {el.type === "ComboJump" && el.subElements?.length > 1
                              ? el.subElements.map(s => s.code).join("+")
                              : el.elCode || "—"}
                          </td>
                          <td style={{ padding:"6px", textAlign:"right" }}>{(el.base||0).toFixed(2)}</td>
                          <td style={{ padding:"6px", textAlign:"right", color: el.qoe > 0 ? "#059669" : el.qoe < 0 ? "#dc2626" : "#6b7280" }}>{el.qoe > 0 ? "+" : ""}{(el.qoe||0).toFixed(2)}</td>
                          <td style={{ padding:"6px", textAlign:"right", fontWeight:"600" }}>{(el.panel||0).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </div>
              )}
              {/* PCS Components */}
              <div style={{ marginBottom:"16px" }}>
                <h3 style={{ fontSize:"13px", fontWeight:"700", color:"#374151", marginBottom:"8px" }}>Program Components</h3>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"11px" }}>
                  <thead><tr style={{ background:"#f3f4f6" }}><th style={{ padding:"6px", textAlign:"left" }}>Komponente</th><th style={{ padding:"6px" }}>J1</th><th style={{ padding:"6px" }}>J2</th><th style={{ padding:"6px" }}>J3</th></tr></thead>
                  <tbody>
                    {[["Skating Skills", "skating"], ["Transitions", "transitions"], ["Performance", "performance"], ["Choreography", "choreography"]].map(([label, key]) => (
                      <tr key={key} style={{ borderBottom:"1px solid #f3f4f6" }}>
                        <td style={{ padding:"6px" }}>{label}</td>
                        <td style={{ padding:"6px", textAlign:"center" }}>{(selectedSkater.components?.[key]?.[0]||0).toFixed(2)}</td>
                        <td style={{ padding:"6px", textAlign:"center" }}>{(selectedSkater.components?.[key]?.[1]||0).toFixed(2)}</td>
                        <td style={{ padding:"6px", textAlign:"center" }}>{(selectedSkater.components?.[key]?.[2]||0).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={() => handleLoadSkater(selectedSkater)} style={{ padding:"10px 20px", borderRadius:"6px", border:"none", background:"#22221C", color:"white", fontWeight:"700", fontSize:"13px", cursor:"pointer" }}>
                ▶ Ins Content Sheet laden
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ============================================================
  //  DASHBOARD — Score-Verlauf, Läufer-Vergleich, Element-Erfolgsquote
  // ============================================================
  function DashboardPage(){
    const [scoreHistory,setScoreHistory]=useState([]);
    const [trainingLogs,setTrainingLogs]=useState([]);
    const [skaters,setSkaters]=useState([]);
    const [loading,setLoading]=useState(true);
    const [selectedSkater,setSelectedSkater]=useState("all");
    const [tab,setTab]=useState("verlauf"); // verlauf, vergleich, elemente

    const token=localStorage.getItem('rollart_token');
    const headers={'Authorization':'Bearer '+token,'Content-Type':'application/json'};

    useEffect(()=>{
      const ctrl=new AbortController();
      const safeJson=r=>{if(!r.ok)return {};return r.json().catch(()=>({}));};
      Promise.all([
        fetch('/api/score-history',{headers,signal:ctrl.signal}).then(safeJson),
        fetch('/api/training',{headers,signal:ctrl.signal}).then(safeJson),
        fetch('/api/skaters',{headers,signal:ctrl.signal}).then(safeJson),
      ]).then(([sh,tl,sk])=>{
        setScoreHistory(sh.history||[]);
        setTrainingLogs(tl.logs||[]);
        setSkaters(sk.skaters||[]);
        setLoading(false);
      }).catch(e=>{if(e.name!=='AbortError')setLoading(false);});
      return()=>ctrl.abort();
    },[]);

    // Filtered history
    const filtered=selectedSkater==="all"?scoreHistory:scoreHistory.filter(h=>h.skaterName===selectedSkater);
    const skaterNames=[...new Set(scoreHistory.map(h=>h.skaterName).filter(Boolean))];

    // SVG Line Chart
    const ScoreChart=({data,width=700,height=220})=>{
      if(!data.length)return (
        <div style={{textAlign:"center",padding:"40px 20px"}}>
          <svg viewBox="0 0 120 80" style={{width:120,height:80,margin:"0 auto 12px",display:"block",opacity:.6}}>
            <rect x="10" y="55" width="12" height="20" rx="2" fill="#d1d5db"/><rect x="30" y="40" width="12" height="35" rx="2" fill="#d1d5db"/>
            <rect x="50" y="25" width="12" height="50" rx="2" fill="#d1d5db"/><rect x="70" y="35" width="12" height="40" rx="2" fill="#d1d5db"/>
            <rect x="90" y="15" width="12" height="60" rx="2" fill="#d1d5db"/><path d="M16 52 L36 37 L56 22 L76 32 L96 12" fill="none" stroke="#22221C" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4"/>
          </svg>
          <p style={{color:"#374151",fontSize:14,fontWeight:600,margin:"0 0 4px"}}>Noch keine Scores vorhanden</p>
          <p style={{color:"#9ca3af",fontSize:12,margin:0}}>Gehe zum Content Sheet und klicke "Score speichern", um deine Entwicklung zu verfolgen.</p>
        </div>
      );
      const sorted=[...data].sort((a,b)=>a.date.localeCompare(b.date));
      const maxT=Math.max(...sorted.map(d=>d.total),1);
      const minT=Math.min(...sorted.map(d=>d.total),0);
      const range=maxT-minT||1;
      const pad={t:20,r:20,b:35,l:50};
      const cw=width-pad.l-pad.r,ch=height-pad.t-pad.b;
      const pts=sorted.map((d,i)=>({
        x:pad.l+(sorted.length>1?i/(sorted.length-1):0.5)*cw,
        y:pad.t+ch-(d.total-minT)/range*ch,
        ...d
      }));
      const tesP=sorted.map((d,i)=>({x:pad.l+(sorted.length>1?i/(sorted.length-1):0.5)*cw,y:pad.t+ch-(d.tes-minT)/range*ch}));
      const pcsP=sorted.map((d,i)=>({x:pad.l+(sorted.length>1?i/(sorted.length-1):0.5)*cw,y:pad.t+ch-(d.pcs-minT)/range*ch}));
      const line=p=>p.map((pt,i)=>\`\${i===0?'M':'L'}\${pt.x},\${pt.y}\`).join(' ');
      return(
        <svg viewBox={\`0 0 \${width} \${height}\`} style={{width:"100%",maxWidth:width,background:"white",borderRadius:8}}>
          {[0,.25,.5,.75,1].map(f=>{const y=pad.t+ch*(1-f);return <g key={f}><line x1={pad.l} y1={y} x2={width-pad.r} y2={y} stroke="#f3f4f6" strokeWidth={1}/><text x={pad.l-6} y={y+4} textAnchor="end" fontSize={9} fill="#9ca3af">{(minT+range*f).toFixed(1)}</text></g>})}
          {pts.map((pt,i)=><text key={i} x={pt.x} y={height-5} textAnchor="middle" fontSize={8} fill="#9ca3af" transform={\`rotate(-30,\${pt.x},\${height-5})\`}>{pt.date.slice(5)}</text>)}
          <path d={line(tesP)} fill="none" stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6}/>
          <path d={line(pcsP)} fill="none" stroke="#8b5cf6" strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6}/>
          <path d={line(pts)} fill="none" stroke="#22221C" strokeWidth={2.5}/>
          {pts.map((pt,i)=><circle key={i} cx={pt.x} cy={pt.y} r={4} fill="#22221C" stroke="white" strokeWidth={2}><title>{pt.date}: Total {pt.total.toFixed(2)} (TES {pt.tes.toFixed(2)} + PCS {pt.pcs.toFixed(2)})</title></circle>)}
          <g transform={\`translate(\${pad.l+10},\${pad.t})\`}>
            <rect x={0} y={0} width={10} height={3} fill="#22221C"/><text x={14} y={4} fontSize={9} fill="#374151">Total</text>
            <rect x={60} y={0} width={10} height={3} fill="#3b82f6" opacity={0.6}/><text x={74} y={4} fontSize={9} fill="#374151">TES</text>
            <rect x={105} y={0} width={10} height={3} fill="#8b5cf6" opacity={0.6}/><text x={119} y={4} fontSize={9} fill="#374151">PCS</text>
          </g>
        </svg>
      );
    };

    // Skater comparison table
    const SkaterComparison=()=>{
      if(!skaters.length)return (
        <div style={{textAlign:"center",padding:"40px 20px"}}>
          <svg viewBox="0 0 100 80" style={{width:100,height:80,margin:"0 auto 12px",display:"block",opacity:.6}}>
            <circle cx="50" cy="28" r="16" fill="#d1d5db"/><rect x="32" y="48" width="36" height="24" rx="6" fill="#d1d5db"/>
            <circle cx="74" cy="32" r="10" fill="#e5e7eb"/><rect x="62" y="45" width="24" height="16" rx="4" fill="#e5e7eb"/>
          </svg>
          <p style={{color:"#374151",fontSize:14,fontWeight:600,margin:"0 0 4px"}}>Keine Läufer gespeichert</p>
          <p style={{color:"#9ca3af",fontSize:12,margin:0}}>Speichere Läufer im Content Sheet, um sie hier vergleichen zu können.</p>
        </div>
      );
      // Get latest score per skater from history
      const latestScores={};
      scoreHistory.forEach(h=>{
        if(!latestScores[h.skaterName]||h.date>latestScores[h.skaterName].date) latestScores[h.skaterName]=h;
      });
      return(
        <div className="r-table-wrap" style={{overflow:"auto",WebkitOverflowScrolling:"touch"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:500}}>
            <thead><tr style={{background:"#f0f1f2",borderBottom:"2px solid #22221C"}}>
              <th style={{padding:"8px 10px",textAlign:"left",fontWeight:700}}>Läufer</th>
              <th style={{padding:"8px 10px",textAlign:"left"}}>Kategorie</th>
              <th style={{padding:"8px 10px",textAlign:"right"}}>TES</th>
              <th style={{padding:"8px 10px",textAlign:"right"}}>PCS</th>
              <th style={{padding:"8px 10px",textAlign:"right"}}>Ded</th>
              <th style={{padding:"8px 10px",textAlign:"right",fontWeight:700}}>Total</th>
              <th style={{padding:"8px 10px",textAlign:"right"}}>Letzter Score</th>
            </tr></thead>
            <tbody>
              {[...skaters].sort((a,b)=>(latestScores[b.name]?.total||0)-(latestScores[a.name]?.total||0)).map(sk=>{
                const ls=latestScores[sk.name];
                return <tr key={sk.id} style={{borderBottom:"1px solid #f3f4f6"}}>
                  <td style={{padding:"6px 10px",fontWeight:600}}>{sk.name}</td>
                  <td style={{padding:"6px 10px",color:"#6b7280"}}>{CATEGORY_DEFS[sk.kategorie]?.label||sk.kategorie}</td>
                  <td style={{padding:"6px 10px",textAlign:"right",color:"#3b82f6"}}>{ls?ls.tes.toFixed(2):"—"}</td>
                  <td style={{padding:"6px 10px",textAlign:"right",color:"#8b5cf6"}}>{ls?ls.pcs.toFixed(2):"—"}</td>
                  <td style={{padding:"6px 10px",textAlign:"right",color:"#dc2626"}}>{ls?ls.deductions.toFixed(2):"—"}</td>
                  <td style={{padding:"6px 10px",textAlign:"right",fontWeight:700,color:"#059669"}}>{ls?ls.total.toFixed(2):"—"}</td>
                  <td style={{padding:"6px 10px",textAlign:"right",color:"#9ca3af",fontSize:11}}>{ls?ls.date:"—"}</td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      );
    };

    // Element success rates from training logs
    const ElementStats=()=>{
      const elMap={};
      trainingLogs.forEach(log=>{
        (log.elements||[]).forEach(el=>{
          if(!el.code)return;
          if(!elMap[el.code])elMap[el.code]={code:el.code,attempts:0,landed:0};
          elMap[el.code].attempts+=(el.attempts||0);
          elMap[el.code].landed+=(el.landed||0);
        });
      });
      const els=Object.values(elMap).filter(e=>e.attempts>0).sort((a,b)=>b.attempts-a.attempts);
      if(!els.length)return (
        <div style={{textAlign:"center",padding:"40px 20px"}}>
          <svg viewBox="0 0 100 80" style={{width:100,height:80,margin:"0 auto 12px",display:"block",opacity:.6}}>
            <rect x="15" y="10" width="70" height="55" rx="6" fill="#d1d5db"/><rect x="25" y="22" width="40" height="4" rx="2" fill="#f3f4f6"/>
            <rect x="25" y="32" width="50" height="4" rx="2" fill="#f3f4f6"/><rect x="25" y="42" width="30" height="4" rx="2" fill="#f3f4f6"/>
            <circle cx="72" cy="52" r="14" fill="#22221C" opacity=".3"/><text x="72" y="57" textAnchor="middle" fontSize="16" fill="#22221C" fontWeight="bold">+</text>
          </svg>
          <p style={{color:"#374151",fontSize:14,fontWeight:600,margin:"0 0 4px"}}>Keine Element-Daten vorhanden</p>
          <p style={{color:"#9ca3af",fontSize:12,margin:0}}>Trage Trainingseinheiten im Tagebuch ein, um Erfolgsquoten zu sehen.</p>
        </div>
      );
      return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:8}}>
          {els.map(el=>{
            const pct=Math.round(el.landed/el.attempts*100);
            const color=pct>=80?"#059669":pct>=60?"#f59e0b":"#dc2626";
            return <div key={el.code} style={{background:"white",border:"1px solid #e5e7eb",borderRadius:8,padding:10}}>
              <div style={{fontWeight:700,fontSize:13,color:"#22221C"}}>{el.code}</div>
              <div style={{margin:"6px 0",background:"#f3f4f6",borderRadius:4,height:8,overflow:"hidden"}}>
                <div style={{width:pct+"%",height:"100%",background:color,borderRadius:4,transition:"width 0.3s"}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11}}>
                <span style={{color:"#6b7280"}}>{el.landed}/{el.attempts}</span>
                <span style={{fontWeight:700,color}}>{pct}%</span>
              </div>
            </div>;
          })}
        </div>
      );
    };

    if(loading)return <div style={{padding:40,textAlign:"center",color:"#6b7280"}}>Lade Dashboard...</div>;

    return(
      <div style={{padding:"16px 20px",maxWidth:1200,margin:"0 auto"}}>
        {/* Tabs */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          {[{k:"verlauf",l:"Score-Verlauf"},{k:"vergleich",l:"Läufer-Vergleich"},{k:"elemente",l:"Element-Erfolgsquote"}].map(t=>(
            <button key={t.k} onClick={()=>setTab(t.k)} style={{padding:"7px 16px",borderRadius:6,border:"none",fontSize:12,fontWeight:700,cursor:"pointer",
              background:tab===t.k?"#22221C":"#e5e7eb",color:tab===t.k?"white":"#374151"}}>{t.l}</button>
          ))}
          {tab==="verlauf"&&<>
            <span style={{marginLeft:"auto",fontSize:11,color:"#6b7280"}}>Läufer:</span>
            <select value={selectedSkater} onChange={e=>setSelectedSkater(e.target.value)} style={{padding:"5px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}>
              <option value="all">Alle</option>
              {skaterNames.map(n=><option key={n} value={n}>{n}</option>)}
            </select>
          </>}
        </div>

        {tab==="verlauf"&&<div style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",padding:16}}>
          <h3 style={{margin:"0 0 12px",fontSize:15,fontWeight:800,color:"#22221C"}}>Score-Verlauf {selectedSkater!=="all"&&\`— \${selectedSkater}\`}</h3>
          <ScoreChart data={filtered}/>
          {filtered.length>0&&<div style={{marginTop:12,overflow:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
            <thead><tr style={{borderBottom:"1px solid #e5e7eb"}}><th style={{padding:"4px 8px",textAlign:"left"}}>Datum</th><th style={{padding:"4px 8px",textAlign:"left"}}>Läufer</th><th style={{padding:"4px 8px",textAlign:"left"}}>Label</th><th style={{padding:"4px 8px",textAlign:"right"}}>TES</th><th style={{padding:"4px 8px",textAlign:"right"}}>PCS</th><th style={{padding:"4px 8px",textAlign:"right",fontWeight:700}}>Total</th></tr></thead>
            <tbody>{[...filtered].reverse().map(h=><tr key={h.id} style={{borderBottom:"1px solid #f3f4f6"}}><td style={{padding:"3px 8px"}}>{h.date}</td><td style={{padding:"3px 8px"}}>{h.skaterName}</td><td style={{padding:"3px 8px",color:"#6b7280"}}>{h.label||"—"}</td><td style={{padding:"3px 8px",textAlign:"right",color:"#3b82f6"}}>{h.tes.toFixed(2)}</td><td style={{padding:"3px 8px",textAlign:"right",color:"#8b5cf6"}}>{h.pcs.toFixed(2)}</td><td style={{padding:"3px 8px",textAlign:"right",fontWeight:700,color:"#059669"}}>{h.total.toFixed(2)}</td></tr>)}</tbody>
          </table></div>}
        </div>}

        {tab==="vergleich"&&<div style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",padding:16}}>
          <h3 style={{margin:"0 0 12px",fontSize:15,fontWeight:800,color:"#22221C"}}>Läufer-Vergleich</h3>
          <SkaterComparison/>
        </div>}

        {tab==="elemente"&&<div style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",padding:16}}>
          <h3 style={{margin:"0 0 12px",fontSize:15,fontWeight:800,color:"#22221C"}}>Element-Erfolgsquote</h3>
          <p style={{fontSize:11,color:"#6b7280",marginBottom:12}}>Basierend auf allen Trainingseinheiten im Tagebuch</p>
          <ElementStats/>
        </div>}
      </div>
    );
  }

  // ============================================================
  //  TRAINING DIARY — EntryForm (extracted to avoid remount)
  // ============================================================
  function TrainingEntryForm({initial,onSave,onCancel,skaters}){
    const [form,setForm]=useState(initial);
    useEffect(()=>{setForm(initial);},[initial]);
    const addEl=()=>setForm({...form,elements:[...form.elements,{code:'',attempts:0,landed:0,_id:Math.random().toString(36).slice(2)}]});
    const rmEl=(i)=>setForm({...form,elements:form.elements.filter((_,j)=>j!==i)});
    const setEl=(i,k,v)=>{const els=[...form.elements];els[i]={...els[i],[k]:v};setForm({...form,elements:els});};
    return(
      <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:16,marginBottom:12}}>
        <div className="r-grid2-mobile" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:10}}>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Datum</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/></div>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Dauer (Min)</label><input type="number" min="0" value={form.duration} onChange={e=>setForm({...form,duration:Math.max(0,parseInt(e.target.value)||0)})} style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/></div>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Läufer</label><select value={form.skaterName} onChange={e=>setForm({...form,skaterName:e.target.value})} style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}>
            <option value="">— Kein Läufer —</option>
            {skaters.map(s=><option key={s.id} value={s.name}>{s.name}</option>)}
          </select></div>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Ziel</label><input value={form.goals} onChange={e=>setForm({...form,goals:e.target.value})} placeholder="z.B. 2A konsistent landen" style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/></div>
        </div>
        <label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Geübte Elemente</label>
        <div style={{marginTop:4,marginBottom:8}}>
          {form.elements.map((el,i)=>(
            <div key={el._id||i} style={{display:"flex",gap:6,marginBottom:4,alignItems:"center"}}>
              <input value={el.code} onChange={e=>setEl(i,'code',e.target.value)} placeholder="Element (z.B. 2A, 3Lo)" style={{flex:2,padding:"5px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/>
              <input type="number" min="0" value={el.attempts} onChange={e=>setEl(i,'attempts',Math.max(0,parseInt(e.target.value)||0))} placeholder="Versuche" style={{flex:1,padding:"5px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/>
              <input type="number" min="0" value={el.landed} onChange={e=>{const v=Math.max(0,parseInt(e.target.value)||0);setEl(i,'landed',Math.min(v,el.attempts));}} placeholder="Gelandet" style={{flex:1,padding:"5px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/>
              <span style={{fontSize:11,color:el.attempts>0?(el.landed/el.attempts>=0.8?"#059669":"#dc2626"):"#9ca3af",fontWeight:700,minWidth:35,textAlign:"right"}}>{el.attempts>0?Math.round(el.landed/el.attempts*100)+"%":"—"}</span>
              <button onClick={()=>rmEl(i)} style={{background:"none",border:"none",color:"#dc2626",cursor:"pointer",fontSize:14}}>×</button>
            </div>
          ))}
          <button onClick={addEl} style={{fontSize:11,color:"#E10716",background:"none",border:"none",cursor:"pointer",fontWeight:600}}>+ Element</button>
        </div>
        <label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Notizen</label>
        <textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} rows={2} placeholder="Wie lief das Training?" style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12,marginTop:4,resize:"vertical"}}/>
        <div style={{display:"flex",gap:6,marginTop:10}}>
          <button onClick={()=>onSave(form)} style={{padding:"7px 16px",borderRadius:5,border:"none",background:"#22221C",color:"white",fontWeight:700,fontSize:12,cursor:"pointer"}}>Speichern</button>
          <button onClick={onCancel} style={{padding:"7px 16px",borderRadius:5,border:"1px solid #d1d5db",background:"white",fontSize:12,cursor:"pointer"}}>Abbrechen</button>
        </div>
      </div>
    );
  }

  // ============================================================
  //  TRAINING DIARY (Trainings-Tagebuch)
  // ============================================================
  function TrainingDiary(){
    const [logs,setLogs]=useState([]);
    const [skaters,setSkaters]=useState([]);
    const [loading,setLoading]=useState(true);
    const [editing,setEditing]=useState(null); // null or entry object
    const [showForm,setShowForm]=useState(false);

    const token=localStorage.getItem('rollart_token');
    const headers={'Authorization':'Bearer '+token,'Content-Type':'application/json'};
    const abortRef=useRef(null);

    const emptyEntry=()=>({date:new Date().toISOString().slice(0,10),duration:60,notes:'',elements:[{code:'',attempts:0,landed:0,_id:Math.random().toString(36).slice(2)}],goals:'',skaterId:null,skaterName:''});

    const load=()=>{
      if(abortRef.current)abortRef.current.abort();
      const ctrl=new AbortController();
      abortRef.current=ctrl;
      const safeJson=r=>{if(!r.ok)return {};return r.json().catch(()=>({}));};
      Promise.all([
        fetch('/api/training',{headers,signal:ctrl.signal}).then(safeJson),
        fetch('/api/skaters',{headers,signal:ctrl.signal}).then(safeJson),
      ]).then(([tl,sk])=>{
        setLogs(tl.logs||[]);
        setSkaters(sk.skaters||[]);
        setLoading(false);
      }).catch(e=>{if(e.name!=='AbortError')setLoading(false);});
    };
    useEffect(()=>{load();return()=>{if(abortRef.current)abortRef.current.abort();};},[]);

    const save=async(entry)=>{
      try{
        const method=entry.id?'PUT':'POST';
        const url=entry.id?\`/api/training/\${entry.id}\`:'/api/training';
        const resp=await fetch(url,{method,headers,body:JSON.stringify(entry)});
        if(!resp.ok){const t=await resp.text().catch(()=>'');throw new Error(t||\`HTTP \${resp.status}\`);}
        setShowForm(false);setEditing(null);load();
      }catch(e){alert('Fehler beim Speichern des Eintrags: '+(e.message||'Unbekannter Fehler'));}
    };
    const remove=async(id)=>{
      if(!confirm('Eintrag löschen?'))return;
      try{
        const resp=await fetch(\`/api/training/\${id}\`,{method:'DELETE',headers});
        if(!resp.ok){const t=await resp.text().catch(()=>'');throw new Error(t||\`HTTP \${resp.status}\`);}
        load();
      }catch(e){alert('Fehler beim Löschen des Eintrags: '+(e.message||'Unbekannter Fehler'));}
    };

    if(loading)return <div style={{padding:40,textAlign:"center",color:"#6b7280"}}>Lade Tagebuch...</div>;

    return(
      <div style={{padding:"16px 20px",maxWidth:1000,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <h2 style={{margin:0,fontSize:18,fontWeight:800,color:"#22221C"}}>Trainings-Tagebuch</h2>
          <button onClick={()=>{setEditing(emptyEntry());setShowForm(true);}} style={{padding:"7px 16px",borderRadius:6,border:"none",background:"#22221C",color:"white",fontWeight:700,fontSize:12,cursor:"pointer"}}>+ Neuer Eintrag</button>
        </div>

        {showForm&&<TrainingEntryForm initial={editing} onSave={save} onCancel={()=>{setShowForm(false);setEditing(null);}} skaters={skaters}/>}

        {logs.length===0?
          <div style={{textAlign:"center",padding:"40px 20px"}}>
            <svg viewBox="0 0 100 80" style={{width:100,height:80,margin:"0 auto 12px",display:"block",opacity:.6}}>
              <rect x="20" y="5" width="60" height="70" rx="6" fill="#d1d5db"/><rect x="28" y="16" width="44" height="3" rx="1.5" fill="#f3f4f6"/>
              <rect x="28" y="24" width="36" height="3" rx="1.5" fill="#f3f4f6"/><rect x="28" y="32" width="44" height="3" rx="1.5" fill="#f3f4f6"/>
              <rect x="28" y="40" width="28" height="3" rx="1.5" fill="#f3f4f6"/><rect x="28" y="48" width="40" height="3" rx="1.5" fill="#f3f4f6"/>
              <circle cx="28" cy="61" r="3" fill="#22221C" opacity=".5"/><rect x="34" y="59.5" width="20" height="3" rx="1.5" fill="#22221C" opacity=".3"/>
            </svg>
            <p style={{color:"#374151",fontSize:14,fontWeight:600,margin:"0 0 4px"}}>Noch keine Trainingseinheiten</p>
            <p style={{color:"#9ca3af",fontSize:12,margin:0}}>Klicke "Neuer Eintrag", um dein erstes Training zu dokumentieren.</p>
          </div>:
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {logs.map(log=>(
              <div key={log.id} style={{background:"white",borderRadius:8,border:"1px solid #e5e7eb",padding:12}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:14,color:"#22221C"}}>{log.date} {log.skaterName&&<span style={{fontWeight:400,color:"#6b7280"}}>— {log.skaterName}</span>}</div>
                    <div style={{fontSize:11,color:"#6b7280",marginTop:2}}>{log.duration} Min {log.goals&&<span>• Ziel: {log.goals}</span>}</div>
                  </div>
                  <div style={{display:"flex",gap:4}}>
                    <button onClick={()=>{setEditing(log);setShowForm(true);}} style={{padding:"4px 10px",borderRadius:4,border:"1px solid #d1d5db",background:"white",fontSize:11,cursor:"pointer"}}>Bearbeiten</button>
                    <button onClick={()=>remove(log.id)} style={{padding:"4px 10px",borderRadius:4,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontSize:11,cursor:"pointer"}}>Löschen</button>
                  </div>
                </div>
                {log.elements?.length>0&&log.elements.some(e=>e.code)&&(
                  <div style={{marginTop:8,display:"flex",flexWrap:"wrap",gap:4}}>
                    {log.elements.filter(e=>e.code).map((el,i)=>{
                      const pct=el.attempts>0?Math.round(el.landed/el.attempts*100):0;
                      const color=pct>=80?"#059669":pct>=60?"#f59e0b":"#dc2626";
                      return <span key={i} style={{display:"inline-flex",gap:4,alignItems:"center",padding:"3px 8px",borderRadius:4,background:"#f0f1f2",border:"1px solid #DEE2E6",fontSize:11}}>
                        <strong>{el.code}</strong> <span style={{color}}>{el.landed}/{el.attempts} ({pct}%)</span>
                      </span>;
                    })}
                  </div>
                )}
                {log.notes&&<p style={{margin:"6px 0 0",fontSize:12,color:"#374151"}}>{log.notes}</p>}
              </div>
            ))}
          </div>
        }
      </div>
    );
  }

  // ============================================================
  //  COMPETITION CALENDAR — CompForm (extracted to avoid remount)
  // ============================================================
  function CompetitionCompForm({initial,onSave,onCancel}){
    const empty={name:'',date:'',location:'',kategorie:'',notes:''};
    const [form,setForm]=useState(initial||empty);
    useEffect(()=>{setForm(initial||empty);},[initial]);
    return(
      <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:16,marginBottom:12}}>
        <div className="r-grid1-mobile" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:10}}>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Wettkampf-Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="z.B. Landesmeisterschaft NRW" style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/></div>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Datum</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/></div>
          <div><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Ort</label><input value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="z.B. Düsseldorf" style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12}}/></div>
        </div>
        <div style={{marginBottom:10}}><label style={{fontSize:10,fontWeight:600,color:"#6b7280"}}>Notizen</label><textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} rows={2} style={{width:"100%",padding:"6px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:12,resize:"vertical"}}/></div>
        <div style={{display:"flex",gap:6}}>
          <button onClick={()=>onSave(form)} style={{padding:"7px 16px",borderRadius:5,border:"none",background:"#22221C",color:"white",fontWeight:700,fontSize:12,cursor:"pointer"}}>Speichern</button>
          <button onClick={onCancel} style={{padding:"7px 16px",borderRadius:5,border:"1px solid #d1d5db",background:"white",fontSize:12,cursor:"pointer"}}>Abbrechen</button>
        </div>
      </div>
    );
  }

  // ============================================================
  //  COMPETITION CALENDAR (Wettkampf-Kalender)
  // ============================================================
  function CompetitionCalendar(){
    const [competitions,setCompetitions]=useState([]);
    const [loading,setLoading]=useState(true);
    const [showForm,setShowForm]=useState(false);
    const [editing,setEditing]=useState(null);

    const token=localStorage.getItem('rollart_token');
    const headers={'Authorization':'Bearer '+token,'Content-Type':'application/json'};
    const abortRef=useRef(null);

    const load=()=>{
      if(abortRef.current)abortRef.current.abort();
      const ctrl=new AbortController();
      abortRef.current=ctrl;
      const safeJson=r=>{if(!r.ok)return {};return r.json().catch(()=>({}));};
      fetch('/api/competitions',{headers,signal:ctrl.signal}).then(safeJson).then(d=>{
        setCompetitions(d.competitions||[]);setLoading(false);
      }).catch(e=>{if(e.name!=='AbortError')setLoading(false);});
    };
    useEffect(()=>{load();return()=>{if(abortRef.current)abortRef.current.abort();};},[]);

    const save=async(entry)=>{
      try{
        const method=entry.id?'PUT':'POST';
        const url=entry.id?\`/api/competitions/\${entry.id}\`:'/api/competitions';
        const resp=await fetch(url,{method,headers,body:JSON.stringify(entry)});
        if(!resp.ok){const t=await resp.text().catch(()=>'');throw new Error(t||\`HTTP \${resp.status}\`);}
        setShowForm(false);setEditing(null);load();
      }catch(e){alert('Fehler beim Speichern des Wettkampfs: '+(e.message||'Unbekannter Fehler'));}
    };
    const remove=async(id)=>{
      if(!confirm('Wettkampf löschen?'))return;
      try{
        const resp=await fetch(\`/api/competitions/\${id}\`,{method:'DELETE',headers});
        if(!resp.ok){const t=await resp.text().catch(()=>'');throw new Error(t||\`HTTP \${resp.status}\`);}
        load();
      }catch(e){alert('Fehler beim Löschen des Wettkampfs: '+(e.message||'Unbekannter Fehler'));}
    };
    const toggleCheck=async(comp,idx)=>{
      try{
        const cl=[...comp.checklist];cl[idx]={...cl[idx],done:!cl[idx].done};
        const resp=await fetch(\`/api/competitions/\${comp.id}\`,{method:'PUT',headers,body:JSON.stringify({checklist:cl})});
        if(!resp.ok){const t=await resp.text().catch(()=>'');throw new Error(t||\`HTTP \${resp.status}\`);}
        load();
      }catch(e){alert('Fehler beim Aktualisieren der Checkliste: '+(e.message||'Unbekannter Fehler'));}
    };
    const addCheckItem=async(comp,item)=>{
      try{
        const cl=[...comp.checklist,{item,done:false}];
        const resp=await fetch(\`/api/competitions/\${comp.id}\`,{method:'PUT',headers,body:JSON.stringify({checklist:cl})});
        if(!resp.ok){const t=await resp.text().catch(()=>'');throw new Error(t||\`HTTP \${resp.status}\`);}
        load();
      }catch(e){alert('Fehler beim Hinzufügen des Checklist-Eintrags: '+(e.message||'Unbekannter Fehler'));}
    };

    const daysUntil=(dateStr)=>{
      const d=new Date(dateStr);const now=new Date();now.setHours(0,0,0,0);d.setHours(0,0,0,0);
      return Math.ceil((d-now)/(1000*60*60*24));
    };

    if(loading)return <div style={{padding:40,textAlign:"center",color:"#6b7280"}}>Lade Wettkämpfe...</div>;

    const upcoming=competitions.filter(c=>daysUntil(c.date)>=0).sort((a,b)=>a.date.localeCompare(b.date));
    const past=competitions.filter(c=>daysUntil(c.date)<0).sort((a,b)=>b.date.localeCompare(a.date));

    return(
      <div style={{padding:"16px 20px",maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <h2 style={{margin:0,fontSize:18,fontWeight:800,color:"#22221C"}}>Wettkampf-Kalender</h2>
          <button onClick={()=>{setEditing(null);setShowForm(true);}} style={{padding:"7px 16px",borderRadius:6,border:"none",background:"#22221C",color:"white",fontWeight:700,fontSize:12,cursor:"pointer"}}>+ Wettkampf</button>
        </div>

        {showForm&&<CompetitionCompForm initial={editing} onSave={save} onCancel={()=>{setShowForm(false);setEditing(null);}}/>}

        {upcoming.length>0&&<>
          <h3 style={{fontSize:14,fontWeight:700,color:"#22221C",margin:"16px 0 8px"}}>Anstehende Wettkämpfe</h3>
          {upcoming.map(comp=>{
            const days=daysUntil(comp.date);
            const checkDone=(comp.checklist||[]).filter(c=>c.done).length;
            const checkTotal=(comp.checklist||[]).length;
            return <div key={comp.id} style={{background:"white",borderRadius:10,border:days<=7?"2px solid #f59e0b":"1px solid #e5e7eb",padding:16,marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div>
                  <div style={{fontWeight:800,fontSize:16,color:"#22221C"}}>{comp.name}</div>
                  <div style={{fontSize:12,color:"#6b7280",marginTop:2}}>{comp.date} • {comp.location||"Ort offen"}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:28,fontWeight:800,lineHeight:1,color:days<=3?"#dc2626":days<=7?"#f59e0b":"#059669"}}>{days}</div>
                  <div style={{fontSize:10,color:"#6b7280"}}>Tage</div>
                </div>
              </div>
              {comp.notes&&<p style={{margin:"8px 0 0",fontSize:12,color:"#374151"}}>{comp.notes}</p>}
              {/* Checklist */}
              <div style={{marginTop:10}}>
                <div style={{fontSize:11,fontWeight:700,color:"#6b7280",marginBottom:4}}>Vorbereitung ({checkDone}/{checkTotal})</div>
                <div style={{background:"#f3f4f6",borderRadius:4,height:6,marginBottom:8,overflow:"hidden"}}>
                  <div style={{width:(checkTotal>0?checkDone/checkTotal*100:0)+"%",height:"100%",background:checkDone===checkTotal?"#059669":"#f59e0b",transition:"width 0.3s"}}/>
                </div>
                {(comp.checklist||[]).map((c,i)=>(
                  <label key={i} style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontSize:12,cursor:"pointer"}}>
                    <input type="checkbox" checked={c.done} onChange={()=>toggleCheck(comp,i)} style={{cursor:"pointer"}}/>
                    <span style={{textDecoration:c.done?"line-through":"none",color:c.done?"#9ca3af":"#374151"}}>{c.item}</span>
                  </label>
                ))}
                <button onClick={()=>{const item=prompt('Neuer Checklisten-Punkt:');if(item)addCheckItem(comp,item);}} style={{fontSize:11,color:"#E10716",background:"none",border:"none",cursor:"pointer",fontWeight:600,marginTop:4}}>+ Punkt hinzufügen</button>
              </div>
              <div style={{display:"flex",gap:4,marginTop:8}}>
                <button onClick={()=>{setEditing(comp);setShowForm(true);}} style={{padding:"4px 10px",borderRadius:4,border:"1px solid #d1d5db",background:"white",fontSize:11,cursor:"pointer"}}>Bearbeiten</button>
                <button onClick={()=>remove(comp.id)} style={{padding:"4px 10px",borderRadius:4,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontSize:11,cursor:"pointer"}}>Löschen</button>
              </div>
            </div>;
          })}
        </>}

        {past.length>0&&<>
          <h3 style={{fontSize:14,fontWeight:700,color:"#9ca3af",margin:"16px 0 8px"}}>Vergangene Wettkämpfe</h3>
          {past.slice(0,5).map(comp=>(
            <div key={comp.id} style={{background:"#f9fafb",borderRadius:8,border:"1px solid #e5e7eb",padding:10,marginBottom:6,opacity:0.7}}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <div><span style={{fontWeight:600,fontSize:13}}>{comp.name}</span> <span style={{fontSize:11,color:"#9ca3af"}}>{comp.date} • {comp.location}</span></div>
                <button onClick={()=>remove(comp.id)} style={{padding:"2px 8px",borderRadius:4,border:"none",background:"none",color:"#dc2626",fontSize:11,cursor:"pointer"}}>×</button>
              </div>
            </div>
          ))}
        </>}

        {competitions.length===0&&!showForm&&
          <div style={{textAlign:"center",padding:"40px 20px"}}>
            <svg viewBox="0 0 120 80" style={{width:120,height:80,margin:"0 auto 12px",display:"block",opacity:.6}}>
              <path d="M35 20 L25 40 h20 Z" fill="#d1d5db"/><path d="M85 20 L75 40 h20 Z" fill="#d1d5db"/>
              <rect x="38" y="40" width="44" height="5" rx="2" fill="#d1d5db"/><rect x="55" y="45" width="10" height="15" rx="2" fill="#d1d5db"/>
              <rect x="45" y="60" width="30" height="6" rx="3" fill="#d1d5db"/><circle cx="60" cy="28" r="6" fill="#f59e0b" opacity=".4"/>
            </svg>
            <p style={{color:"#374151",fontSize:14,fontWeight:600,margin:"0 0 4px"}}>Keine Wettkämpfe geplant</p>
            <p style={{color:"#9ca3af",fontSize:12,margin:0}}>Klicke "+ Wettkampf" um deinen ersten Wettkampf hinzuzufügen.</p>
          </div>
        }
      </div>
    );
  }

  // ============================================================
  //  ANLEITUNG (User Guide)
  // ============================================================
  function AnleitungPage(){
    const scr=useScreen();
    const Section=({icon,title,children})=>(
      <div style={{background:"white",borderRadius:10,border:"1px solid #e5e7eb",padding:scr.mobile?12:20,marginBottom:12}}>
        <h3 style={{margin:"0 0 10px",fontSize:scr.mobile?14:16,fontWeight:800,color:"#22221C"}}>{icon} {title}</h3>
        <div style={{fontSize:scr.mobile?12:13,color:"#374151",lineHeight:1.7}}>{children}</div>
      </div>
    );
    const Tip=({children})=><div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"8px 12px",margin:"8px 0",fontSize:12,color:"#92400e"}}><strong>Tipp:</strong> {children}</div>;
    const Key=({children})=><span style={{display:"inline-block",background:"#f0f1f2",border:"1px solid #DEE2E6",borderRadius:4,padding:"1px 8px",fontSize:11,fontWeight:700,color:"#22221C"}}>{children}</span>;

    return(
      <div style={{padding:scr.mobile?"10px 12px":"16px 20px",maxWidth:900,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:20}}>
          <h2 style={{margin:0,fontSize:scr.mobile?20:24,fontWeight:800,color:"#22221C"}}>Anleitung — RollArt 2026</h2>
          <p style={{margin:"6px 0 0",fontSize:13,color:"#6b7280"}}>Alles, was du wissen musst, um das Beste aus deinem Trainings-Tool herauszuholen.</p>
        </div>

        <Section icon="1." title="Content Sheet — Score berechnen">
          <p>Das <strong>Content Sheet</strong> ist das Herzstück der App. Hier gibst du ein komplettes Programm ein und berechnest den Score nach offiziellen World Skate 2026 Regeln.</p>
          <p style={{marginTop:8}}><strong>So gehst du vor:</strong></p>
          <p style={{marginTop:4}}>Wähle zunächst oben die <Key>Kategorie</Key> (z.B. Cadets, Junior, Senior) und das <Key>Segment</Key> (Short Program oder Free Program). Bei Einzel-Programmen kannst du zusätzlich das <Key>Geschlecht</Key> (D/H) einstellen — das beeinflusst den PCS-Faktor bei Cadets+ im Free Program.</p>
          <p style={{marginTop:4}}>Trage den Namen, Verein/Kategorie und Musik ein. Dann wähle für jede Zeile den <Key>Typ</Key> (SJu = Sprung, CSp = Spin, etc.) und das <Key>Element</Key> (z.B. 2A, 3Lo). Die Rotation und der Basiswert werden automatisch berechnet.</p>
          <p style={{marginTop:4}}>Jeder Judge vergibt einen <Key>QOE</Key>-Wert von -3 bis +3. Stelle die Anzahl der Judges auf 3 oder 5 ein. Bei NV (No Value) wird das Element nicht gewertet, bei DG (Downgrade) auf halben Basiswert herabgestuft.</p>
          <p style={{marginTop:4}}>Unter der Tabelle findest du die <Key>Program Components</Key> (PCS): Skating Skills, Transitions, Performance und Choreography. Jeder Judge bewertet auf einer Skala von 0.00 bis 10.00.</p>
          <Tip>Nutze "Score speichern" um deinen aktuellen Score im Dashboard zu tracken. So siehst du deinen Fortschritt über die Zeit!</Tip>
        </Section>

        <Section icon="2." title="Simulator — Programm optimieren">
          <p>Der <strong>Simulator</strong> lässt dich ein Programm aus dem Content Sheet oder einem Wettkampf importieren und mit verschiedenen Element-Kombinationen experimentieren.</p>
          <p style={{marginTop:4}}>Du siehst alle verfügbaren Elemente (Sprünge, Spins, Schritte, etc.) und kannst diese per Drag & Drop oder Auswahl dem Programm hinzufügen.</p>
          <p style={{marginTop:8}}><strong>Was-wäre-wenn-Modus:</strong> Klicke auf <Key>Snapshot erstellen</Key>, um den aktuellen Stand zu speichern. Ändere dann Elemente und sieh sofort die Differenz zum Original — ideal um verschiedene Programm-Varianten zu vergleichen.</p>
          <Tip>Nutze "An Simulator" im Content Sheet, um dein aktuelles Programm direkt in den Simulator zu übertragen.</Tip>
        </Section>

        <Section icon="3." title="Dashboard — Fortschritt verfolgen">
          <p>Das <strong>Dashboard</strong> zeigt dir drei Ansichten:</p>
          <p style={{marginTop:4}}><strong>Score-Verlauf:</strong> Ein Diagramm deiner gespeicherten Scores über die Zeit. Du siehst Total, TES und PCS als separate Linien — so erkennst du Trends und Verbesserungen.</p>
          <p style={{marginTop:4}}><strong>Läufer-Vergleich:</strong> Vergleiche alle gespeicherten Läufer nebeneinander mit ihren besten Scores, Kategorien und letztem Training.</p>
          <p style={{marginTop:4}}><strong>Element-Erfolgsquote:</strong> Basierend auf deinem Trainings-Tagebuch siehst du, welche Elemente du wie oft landest — z.B. "2A: 75% Erfolgsquote".</p>
        </Section>

        <Section icon="4." title="Trainings-Tagebuch — Elemente tracken">
          <p>Im <strong>Tagebuch</strong> dokumentierst du jede Trainingseinheit. Für jedes Element (z.B. 2A, 3Lo, CCSp) trägst du ein, wie viele Versuche du hattest und wie viele gelandet sind.</p>
          <p style={{marginTop:4}}>Die App berechnet automatisch die Erfolgsquote pro Element. So siehst du schwarz auf weiß, welche Elemente gut sitzen und woran du noch arbeiten musst.</p>
          <Tip>Diese Daten fließen in die Element-Erfolgsquote im Dashboard ein — je mehr du einträgst, desto aussagekräftiger!</Tip>
        </Section>

        <Section icon="5." title="Wettkampf-Kalender — Vorbereitung planen">
          <p>Trage im <strong>Kalender</strong> deine kommenden Wettkämpfe ein mit Datum und Ort. Die App zeigt dir einen Countdown und du kannst eine Checkliste anlegen.</p>
          <p style={{marginTop:4}}>Typische Checklisten-Punkte: Musik auf USB, Kostüm geprüft, Startgeld bezahlt, Anreise geplant, etc. So vergisst du nichts!</p>
        </Section>

        <Section icon="6." title="Wettbewerbe — PDF importieren">
          <p>Unter <strong>Wettbewerbe</strong> kannst du offizielle Ergebnis-PDFs von World Skate Turnieren hochladen. Die App erkennt automatisch die Elemente, Scores und PCS-Werte und importiert sie.</p>
          <p style={{marginTop:4}}>Du kannst importierte Daten direkt ins Content Sheet oder den Simulator laden, um sie zu analysieren oder zu vergleichen.</p>
        </Section>

        <Section icon="7." title="Official Sheet — Wettkampfprotokoll">
          <p>Das <strong>Official Sheet</strong> entspricht dem offiziellen Wettkampfprotokoll für Chief of Judges, Substitute Judges und Content Specialists.</p>
          <p style={{marginTop:4}}>Nutze "An Official Sheet" im Content Sheet, um dein Programm dorthin zu übertragen. Du kannst auch Daten vom Official Sheet ins Content Sheet zurückschicken.</p>
        </Section>

        <Section icon="8." title="Glossar & Regeln">
          <p>Im <strong>Glossar</strong> findest du alle wichtigen Abkürzungen und Begriffe erklärt: QOE, TES, PCS, PE, NV, DG und mehr. Außerdem eine Übersicht aller Elemente mit ihren Codes und Basiswerten — praktisch zum Nachschlagen.</p>
        </Section>

        <Section icon="9." title="Läufer speichern & laden">
          <p>Im Content Sheet kannst du über <Key>Läufer speichern</Key> das komplette Programm (inkl. aller Elemente, PCS-Werte, Abzüge) auf dem Server sichern. Über <Key>Läufer laden</Key> holst du es jederzeit zurück.</p>
          <p style={{marginTop:4}}>Jeder Trainer kann beliebig viele Läufer-Profile anlegen — ideal um mehrere Schützlinge zu betreuen.</p>
        </Section>

        <div style={{background:"#f0f1f2",border:"2px solid #22221C",borderRadius:10,padding:scr.mobile?12:20,textAlign:"center"}}>
          <div style={{fontSize:scr.mobile?16:18,fontWeight:800,color:"#22221C",marginBottom:6}}>Viel Erfolg beim Training!</div>
          <p style={{fontSize:12,color:"#6b7280",margin:0}}>RollArt 2026 — Dein Werkzeug für den perfekten Score. Basierend auf den offiziellen World Skate Artistic Impression Regeln 2026.</p>
        </div>
      </div>
    );
  }

  // ============================================================
  //  SINGLES vs PAIRS CATEGORY HELPERS
  // ============================================================
  const SINGLES_CATEGORIES = Object.entries(CATEGORY_DEFS).filter(([k])=>!k.startsWith("pairs_"));
  const PAIRS_CATEGORIES = Object.entries(CATEGORY_DEFS).filter(([k])=>k.startsWith("pairs_"));

  // ============================================================
  //  ÜBERSICHTSSEITE (Landing Page mit Disziplin-Kacheln)
  // ============================================================
  function UebersichtPage({onSelect, license}){
    const scr=useScreen();
    const plan = license?.plan || 'full';
    const Kachel=({icon,title,subtitle,desc,categories,color,onClick,locked})=>(
      <div onClick={locked?undefined:onClick} style={{
        flex:1,minWidth:scr.mobile?0:280,cursor:locked?"default":"pointer",background:locked?"#f9fafb":"white",borderRadius:16,
        border:locked?"2px dashed #d1d5db":"2px solid #e5e7eb",padding:scr.mobile?20:32,textAlign:"center",
        transition:"all .2s",boxShadow:"0 2px 8px rgba(0,0,0,.06)",opacity:locked?0.6:1,position:"relative",
      }} onMouseEnter={locked?undefined:e=>{e.currentTarget.style.borderColor=color;e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,.12)";}}
         onMouseLeave={locked?undefined:e=>{e.currentTarget.style.borderColor="#e5e7eb";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,.06)";}}>
        {locked&&<div style={{position:"absolute",top:12,right:12,background:"#f3f4f6",borderRadius:8,padding:"4px 10px",fontSize:10,fontWeight:700,color:"#6b7280",border:"1px solid #d1d5db"}}>Nicht im Plan</div>}
        <div style={{fontSize:scr.mobile?48:64,marginBottom:12,lineHeight:1,filter:locked?"grayscale(1)":"none"}}>{icon}</div>
        <h2 style={{margin:"0 0 4px",fontSize:scr.mobile?18:22,fontWeight:800,color:locked?"#9ca3af":"#22221C"}}>{title}</h2>
        <div style={{fontSize:12,fontWeight:600,color:locked?"#9ca3af":color,marginBottom:10}}>{subtitle}</div>
        <p style={{fontSize:13,color:"#6b7280",lineHeight:1.6,marginBottom:14}}>{desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:4,justifyContent:"center"}}>
          {categories.map(c=><span key={c} style={{background:locked?"#f3f4f6":"#f0f1f2",border:locked?"1px solid #d1d5db":"1px solid #DEE2E6",borderRadius:4,padding:"2px 8px",fontSize:10,fontWeight:600,color:locked?"#9ca3af":"#22221C"}}>{c}</span>)}
        </div>
        {locked ? (
          <div style={{marginTop:16,padding:"10px 24px",borderRadius:8,background:"#e5e7eb",color:"#6b7280",fontWeight:700,fontSize:13,display:"inline-block"}}>
            Gesperrt
          </div>
        ) : (
          <div style={{marginTop:16,padding:"10px 24px",borderRadius:8,background:color,color:"white",fontWeight:700,fontSize:14,display:"inline-block"}}>
            Auswählen
          </div>
        )}
      </div>
    );

    return(
      <div style={{padding:scr.mobile?"16px 12px":"40px 20px",maxWidth:900,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:scr.mobile?20:36}}>
          <div style={{fontSize:10,fontWeight:600,opacity:.6,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>World Skate 2026</div>
          <h1 style={{margin:"0 0 8px",fontSize:scr.mobile?22:32,fontWeight:800,color:"#22221C"}}>RollArt Dashboard</h1>
          <p style={{fontSize:14,color:"#6b7280",margin:0}}>Wähle deine Disziplin, um loszulegen.</p>
        </div>

        <div style={{display:"flex",gap:scr.mobile?12:20,flexDirection:scr.mobile?"column":"row",marginBottom:24}}>
          <Kachel
            icon={<svg viewBox="0 0 100 100" width={scr.mobile?56:72} height={scr.mobile?56:72} style={{margin:"0 auto",display:"block"}}><circle cx="50" cy="22" r="12" fill="#22221C"/><path d="M35 38 Q50 34 65 38 L62 70 Q55 85 50 92 Q45 85 38 70 Z" fill="#22221C" opacity=".85"/><path d="M38 70 L30 90 Q34 92 38 88" fill="#22221C"/><path d="M62 70 L70 90 Q66 92 62 88" fill="#22221C"/></svg>}
            title="Einzellauf"
            subtitle="Free Skating Singles"
            desc="Short Program & Free Program für alle Altersklassen von Tots bis Senior."
            categories={["Tots","Minis","Espoirs","Cadets","Jeunesse","Junior","Senior"]}
            color="#22221C"
            onClick={()=>onSelect("einzel")}
            locked={plan==="pairs"}
          />
          <Kachel
            icon={<svg viewBox="0 0 120 100" width={scr.mobile?56:72} height={scr.mobile?48:60} style={{margin:"0 auto",display:"block"}}><circle cx="40" cy="22" r="10" fill="#22221C"/><path d="M28 36 Q40 32 52 36 L50 62 Q44 75 40 82 Q36 75 30 62 Z" fill="#22221C" opacity=".85"/><circle cx="80" cy="22" r="10" fill="#22221C"/><path d="M68 36 Q80 32 92 36 L90 62 Q84 75 80 82 Q76 75 70 62 Z" fill="#22221C" opacity=".85"/><path d="M52 45 L68 45" stroke="#22221C" strokeWidth="2" strokeDasharray="3,2"/></svg>}
            title="Paarlauf"
            subtitle="Free Skating Pairs"
            desc="Lifts, Twists, Death Spirals, Throw Jumps — alle Pair-Elemente für Tots bis Senior."
            categories={["Pairs Tots","Pairs Minis","Pairs Espoirs","Pairs Cadets","Pairs Youth","Pairs Junior","Pairs Senior"]}
            color="#22221C"
            onClick={()=>onSelect("pairs")}
            locked={plan==="einzel"}
          />
        </div>

        <div style={{textAlign:"center",padding:"16px 20px",background:"#f9fafb",borderRadius:10,border:"1px dashed #d1d5db"}}>
          <div style={{fontSize:13,fontWeight:600,color:"#9ca3af"}}>Weitere Disziplinen — Coming Soon</div>
          <div style={{fontSize:11,color:"#d1d5db",marginTop:4}}>Solo Dance • Couple Dance • Show • Gruppen</div>
        </div>
      </div>
    );
  }

  // ============================================================
  //  MAIN DASHBOARD
  // ============================================================
  function LicenseExpiredScreen({ reason, expiresAt, onLogout }) {
    return (
      <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
        background:"linear-gradient(135deg,#1f2937 0%,#374151 100%)", padding:20 }}>
        <div style={{ background:"white", borderRadius:16, padding:32, maxWidth:440, width:"100%", textAlign:"center",
          boxShadow:"0 20px 60px rgba(0,0,0,.3)" }}>
          <div style={{ fontSize:48, marginBottom:16 }}>&#128274;</div>
          <h2 style={{ margin:"0 0 8px", fontSize:22, fontWeight:800, color:"#dc2626" }}>
            {reason==='expired' ? 'Lizenz abgelaufen' : 'Konto deaktiviert'}
          </h2>
          <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.6, marginBottom:16 }}>
            {reason==='expired'
              ? \`Deine Lizenz ist am \${expiresAt ? new Date(expiresAt).toLocaleDateString('de-DE') : '—'} abgelaufen.\`
              : 'Dein Konto wurde vom Administrator deaktiviert.'}
          </p>
          <p style={{ fontSize:13, color:"#6b7280", marginBottom:24 }}>
            Bitte kontaktiere deinen Administrator, um dein Konto zu verlängern oder freizuschalten.
          </p>
          <button onClick={onLogout} style={{ padding:"10px 24px", borderRadius:8, border:"none",
            background:"#e5e7eb", color:"#374151", fontWeight:700, fontSize:14, cursor:"pointer" }}>
            Abmelden
          </button>
        </div>
      </div>
    );
  }

  function App() {
    const authCtx = useAuth();
    const screen = useScreen();
    const [disziplin, setDisziplin] = useState(null); // null = Übersicht, "einzel" | "pairs"
    const [page, setPage] = useState("content");
    const [simImport, setSimImport] = useState(null);
    const handleSimImportDone=useCallback(()=>setSimImport(null),[]);
    const [officialImport, setOfficialImport] = useState(null);
    const [officialExport, setOfficialExport] = useState(null);
    const [compImport, setCompImport] = useState(null);
    const [kategorie, setKategorie] = useState("senior");
    const [segment, setSegment] = useState("senior_fp");
    const [skater, setSkater] = useState("");
    const [cat, setCat] = useState("");
    const [music, setMusic] = useState("");
    const [uploadMsg, setUploadMsg] = useState("");
    const [judgeCount, setJudgeCount] = useState(3);
    const [geschlecht, setGeschlecht] = useState("damen");
    const [season, setSeason] = useState("2026");

    // Program Components: each component has scores for up to 5 judges
    const emptyPcs = () => ({
      skating:[0,0,0,0,0], transitions:[0,0,0,0,0],
      performance:[0,0,0,0,0], choreography:[0,0,0,0,0],
    });
    const [pcs, setPcs] = useState(emptyPcs());
    const [deductions, setDeductions] = useState(0);
    const [extraPoints, setExtraPoints] = useState(0);
    const [skaters, setSkaters] = useState([]);
    const [showSkaterModal, setShowSkaterModal] = useState(false);
    const [savingSkater, setSavingSkater] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const moreMenuRef = useRef(null);

    // Close "Mehr" menu when clicking outside
    useEffect(() => {
      if (!showMoreMenu) return;
      const close = (e) => { if (moreMenuRef.current && !moreMenuRef.current.contains(e.target)) setShowMoreMenu(false); };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, [showMoreMenu]);

    // Auto-clean skater name: strip ": " prefix and "CATEGORY: xxx" suffix from any source
    useEffect(() => {
      if (skater && (/^:\\s/.test(skater) || /\\s+CATEGORY:/i.test(skater))) {
        const catM = skater.match(/\\s+CATEGORY:\\s+(.+)$/i);
        const clean = skater.replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
        setSkater(clean);
        if (catM && !cat) setCat(catM[1].trim());
      }
    }, [skater]);

    const isPairs = segment.startsWith("pairs_");
    const segDef = SEGMENT_DEFS[segment];
    const types = getSeasonTypes(season, isPairs);

    // Filtered categories based on selected disziplin
    const filteredCategories = disziplin==="pairs" ? PAIRS_CATEGORIES : disziplin==="einzel" ? SINGLES_CATEGORIES : Object.entries(CATEGORY_DEFS);

    const emptyRow = () => ({ typeCode:"", elCode:"", judgeGoe:[0,0,0,0,0], rotation:"normal", comboEls:[], nv:false, dg:false, bonuses:[], _id:Math.random().toString(36).slice(2) });
    const [rows, setRows] = useState(Array.from({length:segDef.rows}, emptyRow));

    // Handle disziplin selection from Übersicht
    const selectDisziplin = (d) => {
      // Prevent selecting a locked discipline
      const ls = authCtx?.getLicenseStatus ? authCtx.getLicenseStatus() : { valid: true, plan: 'full' };
      if (ls.plan === 'einzel' && d === 'pairs') return;
      if (ls.plan === 'pairs' && d === 'einzel') return;
      setDisziplin(d);
      if(d==="pairs"){
        setKategorie("pairs_senior");
        const firstSeg=CATEGORY_DEFS["pairs_senior"]?.segments[0]||"pairs_senior_fp";
        setSegment(firstSeg);
        setRows(Array.from({length:SEGMENT_DEFS[firstSeg].rows}, emptyRow));
      } else {
        setKategorie("senior");
        setSegment("senior_fp");
        setRows(Array.from({length:SEGMENT_DEFS["senior_fp"].rows}, emptyRow));
      }
      setPcs(emptyPcs());setDeductions(0);setExtraPoints(0);
      setSkater("");setCat("");setMusic("");
      setPage("content");
    };

    const changeKategorie = (k) => {
      setKategorie(k);
      const segs = CATEGORY_DEFS[k]?.segments || [];
      const firstSeg = segs[0] || "senior_fp";
      setSegment(firstSeg);
      setRows(Array.from({length:SEGMENT_DEFS[firstSeg].rows}, emptyRow));
      setPcs(emptyPcs());
      setDeductions(0);
      setExtraPoints(0);
    };
    const changeSegment = (s) => {
      setSegment(s);
      setRows(Array.from({length:SEGMENT_DEFS[s].rows}, emptyRow));
      setPcs(emptyPcs());
      setDeductions(0);
      setExtraPoints(0);
    };

    // Handle official import
    useEffect(() => {
      if (officialImport) {
        // Clean name
        let oName = (officialImport.name || "");
        oName = oName.replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
        setSkater(oName);
        setCat(officialImport.federation || CATEGORY_DEFS[officialImport.kategorie]?.label || "");
        setMusic(officialImport.choreography || "");

        // Set kategorie and segment
        if (officialImport.kategorie) {
          setKategorie(officialImport.kategorie);
          const catDef = CATEGORY_DEFS[officialImport.kategorie];
          if (catDef) {
            const segs = catDef.segments || [];
            // Detect SP vs FP: pick the section with more filled elements
            let secIdx = 0;
            if (officialImport.sections && officialImport.sections.length > 1) {
              const filledCount = (sec) => (sec?.elements || []).filter(e => e.code).length;
              if (filledCount(officialImport.sections[1]) > filledCount(officialImport.sections[0])) secIdx = 1;
            }
            // Match segment: secIdx 0 = first segment (SP), secIdx 1 = second (FP)
            const targetSeg = segs[Math.min(secIdx, segs.length - 1)] || "senior_fp";
            setSegment(targetSeg);

            // Map element codes from official sheet sections to rows
            const newRows = Array.from({length: SEGMENT_DEFS[targetSeg].rows}, emptyRow);
            // Compute correct types locally to avoid stale closure (types depends on previous segment)
            const importIsPairs = targetSeg.startsWith("pairs_");
            const importTypes = getSeasonTypes(season, importIsPairs);
            if (officialImport.sections && officialImport.sections.length > 0) {
              const elementsFromSection = officialImport.sections[secIdx]?.elements || [];
              // Known type codes sorted by length (longest first for matching)
              const knownTypes = importTypes.map(t=>t.code).sort((a,b)=>b.length-a.length);
              elementsFromSection.forEach((el, idx) => {
                if (idx < newRows.length && el.code) {
                  // Find matching type code by prefix (handles CSp3, FoSq2, ChSt1, CtSp2 etc.)
                  let matchedType = "";
                  for (const tc of knownTypes) {
                    if (el.code.startsWith(tc)) { matchedType = tc; break; }
                  }
                  if (!matchedType) matchedType = el.code.substring(0, 3); // fallback
                  // Find if exact elCode exists in data
                  const typeDef = importTypes.find(t=>t.code===matchedType);
                  const elExists = typeDef?.data?.find(e=>e.code===el.code);
                  newRows[idx] = {...newRows[idx], typeCode: matchedType, elCode: elExists ? el.code : ""};
                }
              });
            }
            setRows(newRows);
          }
        }
        setOfficialImport(null);
      }
    }, [officialImport]);

    // Handle competition import
    useEffect(() => {
      if (compImport) {
        // Clean name: strip leading ": " and trailing "CATEGORY: xxx"
        let cName = (compImport.name || "");
        const cCatMatch = cName.match(/\\s+CATEGORY:\\s+(.+)$/i);
        cName = cName.replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
        setSkater(cName);
        setCat(compImport.verein || (cCatMatch ? cCatMatch[1].trim() : CATEGORY_DEFS[compImport.kategorie]?.label || ""));
        setMusic(compImport.music || "");
        setKategorie(compImport.kategorie || "senior");
        setSegment(compImport.segment || "senior_fp");
        if(compImport.geschlecht)setGeschlecht(compImport.geschlecht);
        setRows(compImport.rows || Array.from({length: SEGMENT_DEFS[compImport.segment || "senior_fp"].rows}, emptyRow));
        // Sanitize PCS: ensure all values are valid numbers in 0-10 range
        const rawPcs = compImport.pcs || emptyPcs();
        const safePcs = {};
        for (const key of ["skating","transitions","performance","choreography"]) {
          const arr = Array.isArray(rawPcs[key]) ? rawPcs[key] : [0,0,0,0,0];
          safePcs[key] = arr.map(v => {
            const n = (typeof v === 'number' && !isNaN(v)) ? v : 0;
            return (n < 0 || n > 10) ? 0 : n;
          });
          while (safePcs[key].length < 5) safePcs[key].push(0);
        }
        setPcs(safePcs);
        setDeductions(compImport.deductions || 0);
        setExtraPoints(compImport.extraPoints || 0);
        setJudgeCount(compImport.judgeCount || 3);
        setPage("content");
        setCompImport(null);
      }
    }, [compImport]);

    const updateRow = useCallback((i, data) => {
      setRows(prev => prev.map((r,j)=>j===i?data:r));
    }, []);

    const addRow = () => setRows(prev=>[...prev, emptyRow()]);
    const removeRow = () => rows.length>1 && setRows(prev=>prev.slice(0,-1));
    const clearAll = () => { setRows(Array.from({length:segDef.rows}, emptyRow)); setPcs(emptyPcs()); setDeductions(0); setExtraPoints(0); };

    // Compute TES using computeRow + bonus adjustments (must match ElementRow display)
    const {tes,calcBonusTotal} = useMemo(() => {
      let tes=0,calcBonusTotal=0;
      rows.forEach(row => {
        const { base, goeVal, score } = computeRow(row, types, judgeCount);
        const bonuses=row.bonuses||[];
        let bonusPct=0,hasOverride=false,overrideFactor=1;
        bonuses.forEach(bid=>{const b=ALL_BONUSES.find(x=>x.id===bid);if(!b)return;if(b.isOverride){hasOverride=true;overrideFactor=1+b.pct;}else bonusPct+=b.pct;});
        const adjBase=row.nv?0:row.dg?base:hasOverride?Math.round(base*overrideFactor*100)/100:bonusPct!==0?Math.round(base*(1+bonusPct)*100)/100:base;
        const adjScore=row.nv?0:Math.round((adjBase+goeVal)*100)/100;
        calcBonusTotal+=Math.round((adjBase-base)*100)/100;
        tes+=adjScore;
      });
      return {tes:Math.round(tes*100)/100,calcBonusTotal:Math.round(calcBonusTotal*100)/100};
    }, [rows, types, judgeCount]);

    const filled = rows.filter(r => {
      const td = types.find(t=>t.code===r.typeCode);
      if (td?.isCombo) return (r.comboEls||[]).some(s=>s.code);
      return !!r.elCode;
    }).length;

    // Compute PCS
    const pcsFactor = getPcsFactor(segment, geschlecht);
    const pcsTotal = useMemo(() => {
      return PCS_COMPONENTS.reduce((sum, comp) => {
        const avg = calcPcsAvg(pcs[comp.key], judgeCount);
        const sc = Math.round(avg * pcsFactor * 100) / 100;
        return sum + (isNaN(sc) ? 0 : sc);
      }, 0);
    }, [pcs, judgeCount, pcsFactor]);

    // Total Score (safe against NaN)
    const totalScore = Math.round(((isNaN(tes)?0:tes) + (isNaN(pcsTotal)?0:pcsTotal) - (isNaN(deductions)?0:deductions) + (isNaN(extraPoints)?0:extraPoints)) * 100) / 100;

    // === PDF Content Sheet Upload with OCR ===
    const handleUpload = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      e.target.value = "";

      const typeMap = {};
      types.forEach(t => { typeMap[t.code.toLowerCase()] = t.code; });
      // fuzzy OCR variants
      const fuzzy = {...typeMap, col:"CoJ",c0j:"CoJ",siu:"SJu",fosg:"FoSq",fos:"FoSq",
        cli:"CLi",sli:"SLi",ctsp:"CtSp",tlj:"Tj",twlz:"Tw",
        casp:"CSp",cosp:"CSp",cssp:"CSp",comb:"CoJ"};
      // All known element codes for matching codes WITH level (CSp3, SSp2, FoSqB etc.)
      const allElData = types.flatMap(t=>t.data.map(e=>({code:e.code, typeCode:t.code})));
      // Helper: resolve a word to {typeCode, elCode}
      const resolveCode = (raw) => {
        const c = raw.replace(/[^A-Za-z0-9]/g,'');
        if(c.length<2||c.length>8) return null;
        // 1. Exact element code match (e.g. "CSp3", "SSp2", "FoSq1")
        const exactEl = allElData.find(e=>e.code.toLowerCase()===c.toLowerCase());
        if(exactEl) return {typeCode:exactEl.typeCode, elCode:exactEl.code};
        // 2. Exact type code match (e.g. "CSp", "SSp", "CoJ")
        const tc = fuzzy[c.toLowerCase()];
        if(tc) return {typeCode:tc, elCode:""};
        // 3. Prefix match: try removing last char(s) to find type (e.g. "CSp3" -> "CSp")
        for(let len=c.length-1;len>=2;len--){
          const prefix=c.substring(0,len).toLowerCase();
          const ptc=fuzzy[prefix];
          if(ptc){
            const fullEl=allElData.find(e=>e.code.toLowerCase()===c.toLowerCase()&&e.typeCode===ptc);
            return {typeCode:ptc, elCode:fullEl?fullEl.code:""};
          }
        }
        return null;
      };

      if (file.name.toLowerCase().endsWith(".pdf")) {
        setUploadMsg("PDF wird geladen...");
        try {
          const ab = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({data:ab}).promise;
          let text = "";
          let textItems = 0;
          for (let p=1;p<=pdf.numPages;p++) {
            const page = await pdf.getPage(p);
            const content = await page.getTextContent();
            textItems += content.items.length;
            const byY={};
            content.items.forEach(it=>{const y=Math.round(it.transform[5]);if(!byY[y])byY[y]=[];byY[y].push({t:it.str,x:it.transform[4]});});
            Object.keys(byY).sort((a,b)=>b-a).forEach(y=>{
              text += byY[y].sort((a,b)=>a.x-b.x).map(i=>i.t).join(" ")+"\\n";
            });
          }
          // If image PDF, use OCR
          if (textItems < 5) {
            setUploadMsg("Bild-PDF erkannt, OCR läuft...");
            text = "";
            for (let p=1;p<=pdf.numPages;p++) {
              const page = await pdf.getPage(p);
              const vp = page.getViewport({scale:3});
              const canvas = document.createElement("canvas");
              canvas.width=vp.width; canvas.height=vp.height;
              const ctx=canvas.getContext("2d");
              await page.render({canvasContext:ctx,viewport:vp}).promise;
              // Remove table lines
              const id=ctx.getImageData(0,0,canvas.width,canvas.height);
              const d=id.data; const w=canvas.width; const h=canvas.height;
              const g=new Uint8Array(w*h);
              for(let i=0;i<w*h;i++) g[i]=Math.round(.299*d[i*4]+.587*d[i*4+1]+.114*d[i*4+2]);
              const mask=new Uint8Array(w*h);
              const minH=Math.floor(w*.15), minV=Math.floor(h*.05);
              for(let y=0;y<h;y++){let s=-1;for(let x=0;x<=w;x++){const dk=x<w&&g[y*w+x]<120;if(dk&&s===-1)s=x;if(!dk&&s!==-1){if(x-s>minH)for(let r=s;r<x;r++)mask[y*w+r]=1;s=-1;}}}
              for(let x=0;x<w;x++){let s=-1;for(let y=0;y<=h;y++){const dk=y<h&&g[y*w+x]<120;if(dk&&s===-1)s=y;if(!dk&&s!==-1){if(y-s>minV)for(let r=s;r<y;r++)mask[r*w+x]=1;s=-1;}}}
              for(let i=0;i<w*h;i++)if(mask[i]){d[i*4]=255;d[i*4+1]=255;d[i*4+2]=255;}
              ctx.putImageData(id,0,0);
              const res = await Tesseract.recognize(canvas,"eng",{
                logger:m=>{if(m.status==="recognizing text")setUploadMsg(\`OCR: \${Math.round((m.progress||0)*100)}%\`);}
              });
              text += res.data.text+"\\n";
            }
          }
          // Parse
          const nm=text.match(/(?:COMPETITORS?\\s*NAME|NAME)\\s*[=_|]*\\s*(.+?)(?:\\n|$)/im);
          const cm=text.match(/CATEGORY\\s+(.+?)(?:\\n|$)/im);
          if(nm)setSkater(nm[1].trim().replace(/^[=_|]+\\s*/,''));
          if(cm)setCat(cm[1].trim());

          const newRows=[];
          text.split("\\n").forEach(line=>{
            const t=line.trim();
            if(!t)return;
            if(/ELEMENT|DECLARED|PERFORMED|Filled|Panel|Notes|Time|Code|PROGRAM|CONTENT|SHEET|WORLD|SKATE|COMPETITOR|CATEGORY|Representing|CHOREOGRAPHY/i.test(t))return;
            const rm=t.match(/^(\\d{1,2})\\b/);
            if(!rm)return;
            const words=t.substring(rm[0].length).trim().split(/\\s+/);
            for(const w of words){
              const resolved = resolveCode(w);
              if(resolved){
                newRows.push({...emptyRow(), typeCode:resolved.typeCode, elCode:resolved.elCode||""});
                break;
              }
            }
          });
          if(newRows.length>0){
            while(newRows.length<segDef.rows)newRows.push(emptyRow());
            setRows(newRows);
            setUploadMsg(\`\${newRows.filter(r=>r.typeCode).length} Elemente geladen\`);
          } else { setUploadMsg("Keine Elemente erkannt"); }
        } catch(err) { setUploadMsg("Fehler: "+err.message); }
      } else {
        // TXT: direct element codes
        const reader = new FileReader();
        reader.onload = ev => {
          const codes = ev.target.result.split("\\n").map(l=>l.trim()).filter(l=>l);
          const newRows = [];
          const allData = types.flatMap(t=>t.data.map(e=>({...e,typeCode:t.code})));
          codes.forEach(code => {
            const found = allData.find(e=>e.code===code);
            if(found) newRows.push({typeCode:found.typeCode, elCode:found.code, judgeGoe:[0,0,0,0,0], rotation:"normal", comboEls:[], nv:false, dg:false});
          });
          while(newRows.length<segDef.rows)newRows.push(emptyRow());
          setRows(newRows);
          setUploadMsg(\`\${newRows.filter(r=>r.elCode).length} Elemente geladen\`);
        };
        reader.readAsText(file);
      }
    };

    // Export
    const exportTxt = () => {
      const jCols = Array.from({length:judgeCount},(_,i)=>"J"+(i+1)).join("  ");
      const lines = [\`Skater: \${skater||"-"}\`,\`Kategorie: \${cat||"-"}\`,\`Segment: \${segDef.label}\`,
        \`Musik: \${music||"-"}\`,\`Judges: \${judgeCount}\`,\`Datum: \${new Date().toLocaleDateString("de-DE")}\`,"",
        "=== TECHNICAL ELEMENT SCORE ===","",
        \`Nr | Typ  | Element              | Base  | \${jCols} | QOE   | NV/DG | Score\`,"-".repeat(85)];
      rows.forEach((r,i)=>{
        const { base:b, goeVal:g, score:s, typeDef:td } = computeRow(r, types, judgeCount);
        if (!td) return;
        const flag = r.nv?"NV":r.dg?"DG":"  ";
        let jScores;
        if (td.isCombo) {
          jScores = "per El.";
        } else {
          jScores = (r.judgeGoe||[]).slice(0,judgeCount).map(v=>(v>=0?"+"+v:""+v).padStart(3)).join(" ");
        }
        let elName = "";
        if (td.isCombo) {
          elName = (r.comboEls||[]).filter(sub=>sub.code).map(sub=>{
            const el=td.data.find(e=>e.code===sub.code);
            const subJ = (sub.judgeGoe||[]).slice(0,judgeCount).map(v=>(v>=0?"+"+v:""+v)).join(",");
            return el ? el.code+(sub.nv?"(NV)":"")+(sub.rotation!=="normal"?\`(\${sub.rotation})\`:"")+\`[\${subJ}]\` : "";
          }).join("+");
        } else {
          const el = td.data.find(e=>e.code===r.elCode);
          if (el) elName = el.code+" "+el.name;
        }
        if (elName) lines.push(\`\${String(i+1).padStart(2)} | \${(r.typeCode||"").padEnd(4)} | \${elName.padEnd(20)} | \${b.toFixed(2).padStart(5)} | \${jScores} | \${(g>=0?"+":"")+g.toFixed(2).padStart(5)} | \${flag.padEnd(5)} | \${s.toFixed(2).padStart(6)}\`);
      });
      lines.push("-".repeat(85));
      lines.push(\`TES: \${tes.toFixed(2)}\`);
      lines.push("");
      lines.push("=== PROGRAM COMPONENT SCORE ===");
      lines.push(\`Faktor: \${pcsFactor.toFixed(1)}\`);
      PCS_COMPONENTS.forEach(comp=>{
        const avg = calcPcsAvg(pcs[comp.key], judgeCount);
        const sc = Math.round(avg*pcsFactor*100)/100;
        const jScores = pcs[comp.key].slice(0,judgeCount).map(v=>(v||0).toFixed(2).padStart(5)).join(" ");
        lines.push(\`\${comp.label.padEnd(30)} | \${jScores} | Avg: \${avg.toFixed(2)} | Score: \${sc.toFixed(2)}\`);
      });
      lines.push(\`PCS: \${pcsTotal.toFixed(2)}\`);
      lines.push("");
      if (deductions>0) lines.push(\`Abzüge: -\${deductions.toFixed(2)}\`);
      if (extraPoints>0) lines.push(\`Extra: +\${extraPoints.toFixed(2)}\`);
      lines.push(\`\\nTOTAL SCORE: \${totalScore.toFixed(2)}\`);
      const blob = new Blob([lines.join("\\n")],{type:"text/plain"});
      const a = document.createElement("a"); a.href=URL.createObjectURL(blob);
      a.download=\`\${skater||"programm"}_\${segDef.label.replace(/\\s/g,"_")}.txt\`; a.click();
    };

    // ============================================================
    //  OFFICIAL WORLD SKATE CONTENT SHEET — PDF EXPORT
    //  Uses shared buildWorldSkatePDF utility (exact sk8info.org.au logic)
    // ============================================================
    const exportOfficialPDF = () => {
      const isSP = segment.endsWith("_sp");
      const titleText = isPairs
        ? (isSP ? "PAIRS SHORT PROGRAM CONTENT SHEET 2026" : "PAIRS FREE PROGRAM CONTENT SHEET 2026")
        : (isSP ? "SHORT PROGRAM CONTENT SHEET 2026" : "FREE PROGRAM CONTENT SHEET 2026");
      const stdRowCount = isSP ? (isPairs ? 8 : 7) : (isPairs ? 13 : 9);

      // Map calculator element rows to content sheet format
      const mappedElements = rows.map((r,i) => {
        const typeDef = types.find(t=>t.code===r.typeCode);
        let code="",notes="";
        if(typeDef){
          if(typeDef.isCombo){
            code=typeDef.code;
            notes=(r.comboEls||[]).filter(sub=>sub.code).map(sub=>{
              const el=typeDef.data.find(e=>e.code===sub.code);return el?el.code:sub.code;
            }).join(" + ");
          } else {
            const el=typeDef.data.find(e=>e.code===r.elCode);
            code=el?el.code:r.elCode||r.typeCode;notes=el?el.name:"";
          }
        }
        return {time:"",code,performed:"",notes};
      });
      // Pad to standard row count
      while(mappedElements.length<stdRowCount) mappedElements.push({time:"",code:"",performed:"",notes:""});

      const catLabel = CATEGORY_DEFS[kategorie]?.label || kategorie;
      const pdfName = (skater||"").replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
      const fedLabel = (cat&&cat!=="Representing")?cat.toUpperCase():"REPRESENTING";

      const doc = buildWorldSkatePDF({
        title: titleText,
        name: pdfName,
        category: catLabel,
        fedLabel: fedLabel,
        clubName: "",
        music: music||"",
        sections: [{label: isSP?"SHORT PROGRAM":"FREE PROGRAM", music: music||"", elements: mappedElements}],
      });
      doc.save(\`\${(pdfName||"content_sheet").replace(/\\s+/g,"_")}_\${segDef.label.replace(/\\s+/g,"_")}_WorldSkate.pdf\`);
    };

    // ============================================================
    //  DETAIL PDF EXPORT — 1:1 Screen Layout (Landscape A4)
    // ============================================================
    const exportDetailPDF = () => {
      const {jsPDF} = window.jspdf;
      const doc = new jsPDF({orientation:"landscape", unit:"mm", format:"a4"});
      const pw=297, ph=210, mx=10, cw=pw-2*mx, lw=0.3;
      let y=10, cx;

      // Helpers
      const sanitize=(s)=>String(s).replace(/—/g,'-').replace(/–/g,'-').replace(/'|'/g,"'").replace(/"|"/g,'"').replace(/…/g,'...').replace(/•/g,'*').replace(/[^\\x20-\\x7E\\xA0-\\xFF]/g,'?');
      const setLine=()=>{doc.setDrawColor(0,0,0);doc.setLineWidth(lw);};
      const rectF=(x,yy,w,h,fill)=>{if(fill){doc.setFillColor(fill);doc.rect(x,yy,w,h,"F");}setLine();doc.rect(x,yy,w,h);};
      const txt=(str,x,yy,opts={})=>{
        doc.setFont("helvetica",opts.bold?"bold":"normal");
        doc.setFontSize(opts.size||9);doc.setTextColor(opts.color||"#000000");
        doc.text(sanitize(str),x,yy,{align:opts.align||"left"});
      };
      const pageBreak=(need)=>{if(y+need>ph-12){doc.addPage();y=10;return true;}return false;};

      // Title bar
      rectF(mx,y,cw,10,"#f0f1f2");
      txt(skater||"—", mx+4, y+7, {bold:true, size:13, color:"#22221C"});
      txt(segDef.label, mx+cw-4, y+7, {bold:true, size:11, align:"right", color:"#22221C"});
      y+=10;
      rectF(mx,y,cw,6,"#f9fafb");
      txt(\`Kategorie: \${cat||"-"}  |  Musik: \${music||"-"}  |  Judges: \${judgeCount}  |  \${new Date().toLocaleDateString("de-DE")}\`, mx+4, y+4.5, {size:7, color:"#555555"});
      y+=8;

      // Column widths — dynamic for judge count
      const colNum=8, colTyp=25, colRot=11, colBase=16, colJ=14, colQoe=16, colNvDg=13, colScore=18;
      const colEl = cw - colNum - colTyp - colRot - colBase - judgeCount*colJ - colQoe - colNvDg - colScore;

      // Header row
      const hh=7;
      const hdrs = [
        {w:colNum,label:"#",a:"center"},{w:colTyp,label:"TYP",a:"left"},{w:colEl,label:"ELEMENT",a:"left"},
        {w:colRot,label:"ROT.",a:"center"},{w:colBase,label:"BASE",a:"right"},
      ];
      for(let i=0;i<judgeCount;i++) hdrs.push({w:colJ,label:"J"+(i+1),a:"center"});
      hdrs.push({w:colQoe,label:"QOE",a:"right"},{w:colNvDg,label:"NV/DG",a:"center"},{w:colScore,label:"SCORE",a:"right"});

      // Reusable: draw element table header
      const drawElHeader=()=>{
        let hx=mx;
        hdrs.forEach(c=>{
          rectF(hx,y,c.w,hh,"#f0f1f2");
          const tx=c.a==="center"?hx+c.w/2:c.a==="right"?hx+c.w-2:hx+2;
          txt(c.label,tx,y+5,{bold:true,size:8,align:c.a,color:"#22221C"});
          hx+=c.w;
        });
        y+=hh;
        doc.setDrawColor("#059669");doc.setLineWidth(0.6);doc.line(mx,y,mx+cw,y);
        doc.setDrawColor(0,0,0);doc.setLineWidth(lw);
      };
      drawElHeader();

      // Element rows
      rows.forEach((r,i)=>{
        const {base,goeVal,score,typeDef:td} = computeRow(r, types, judgeCount);
        if(!td) return;

        // Apply bonus adjustments (must match ElementRow display)
        const rBonuses=r.bonuses||[];
        let rBonusPct=0,rHasOverride=false,rOverrideFactor=1;
        rBonuses.forEach(bid=>{const b=ALL_BONUSES.find(x=>x.id===bid);if(!b)return;if(b.isOverride){rHasOverride=true;rOverrideFactor=1+b.pct;}else rBonusPct+=b.pct;});
        const adjBase=r.nv?0:r.dg?base:rHasOverride?Math.round(base*rOverrideFactor*100)/100:rBonusPct!==0?Math.round(base*(1+rBonusPct)*100)/100:base;
        const adjScore=r.nv?0:Math.round((adjBase+goeVal)*100)/100;

        const rh=7;
        const comboExtra = td.isCombo?(r.comboEls||[]).filter(s=>s.code).length*5.5:0;
        if(pageBreak(rh + comboExtra + hh)) drawElHeader();

        cx=mx;
        const bg = i%2===0?"#ffffff":"#f9fafb";

        // #
        rectF(cx,y,colNum,rh,bg);
        txt(String(i+1),cx+colNum/2,y+5,{bold:true,size:9,align:"center"});cx+=colNum;
        // TYP
        rectF(cx,y,colTyp,rh,bg);
        const tLabel=(td.label||r.typeCode||"").length>14?(td.label||r.typeCode).substring(0,13)+"…":(td.label||r.typeCode);
        txt(tLabel,cx+2,y+5,{size:7,bold:true});cx+=colTyp;
        // ELEMENT
        rectF(cx,y,colEl,rh,bg);
        if(td.isCombo){
          const subCodes=(r.comboEls||[]).filter(s=>s.code).map(s=>{const el=td.data.find(e=>e.code===s.code);return el?el.code:"";}).filter(Boolean).join(" + ");
          txt(subCodes||"(Kombination)",cx+2,y+5,{size:8,color:"#374151"});
        } else {
          const el=td.data.find(e=>e.code===r.elCode);
          if(el){
            const eName=\`\${el.code} - \${el.name}\`;
            const maxLen=Math.floor(colEl/1.8);
            txt(eName.length>maxLen?eName.substring(0,maxLen-1)+"…":eName,cx+2,y+5,{size:8});
          }
        }
        cx+=colEl;
        // ROT.
        rectF(cx,y,colRot,rh,bg);
        if(!td.isCombo && r.rotation && r.rotation!=="normal"){
          const rl=r.rotation==="lt"?"<":r.rotation==="ltlt"?"<<":"?";
          txt(rl,cx+colRot/2,y+5,{size:9,align:"center",bold:true,color:"#dc2626"});
        } else if(!td.isCombo){
          txt("N",cx+colRot/2,y+5,{size:7,align:"center",color:"#9ca3af"});
        }
        cx+=colRot;
        // BASE (with bonus)
        rectF(cx,y,colBase,rh,bg);
        txt(adjBase.toFixed(2),cx+colBase-2,y+5,{size:9,bold:true,align:"right",color:adjBase!==base?"#7c3aed":"#000000"});cx+=colBase;
        // J1-Jn
        for(let ji=0;ji<judgeCount;ji++){
          rectF(cx,y,colJ,rh,bg);
          if(!td.isCombo){
            const g=(r.judgeGoe||[])[ji]||0;
            txt(g>0?"+"+g:String(g),cx+colJ/2,y+5,{size:8,align:"center",color:g>0?"#059669":g<0?"#dc2626":"#6b7280"});
          } else {
            txt("-",cx+colJ/2,y+5,{size:7,align:"center",color:"#9ca3af"});
          }
          cx+=colJ;
        }
        // QOE
        rectF(cx,y,colQoe,rh,bg);
        txt((goeVal>=0?"+":"")+goeVal.toFixed(2),cx+colQoe-2,y+5,{size:8,bold:true,align:"right",color:goeVal>0?"#059669":goeVal<0?"#dc2626":"#6b7280"});cx+=colQoe;
        // NV/DG
        rectF(cx,y,colNvDg,rh,bg);
        if(r.nv) txt("NV",cx+colNvDg/2,y+5,{size:7,bold:true,align:"center",color:"#dc2626"});
        else if(r.dg) txt("DG",cx+colNvDg/2,y+5,{size:7,bold:true,align:"center",color:"#f59e0b"});
        cx+=colNvDg;
        // SCORE
        rectF(cx,y,colScore,rh,bg);
        txt(adjScore.toFixed(2),cx+colScore-2,y+5,{size:10,bold:true,align:"right",color:adjBase!==base?"#7c3aed":"#059669"});
        y+=rh;

        // Combo sub-elements
        if(td.isCombo){
          const hasCV=td.data.some(e=>e.combo!==undefined);
          (r.comboEls||[]).forEach((sub,si)=>{
            if(!sub.code)return;
            const el=td.data.find(e=>e.code===sub.code);
            if(!el)return;
            const srh=5.5;
            pageBreak(srh);
            const isJC=hasCV&&el.combo!==undefined;
            const sBase=sub.nv?0:(isJC?getBase(el,true,sub.rotation):el.base);
            const sGoe=el&&!sub.nv?calcJudgeGoe(el,sub.judgeGoe||[0,0,0,0,0],judgeCount):0;
            const sbg="#f5f5f5";
            cx=mx;
            rectF(cx,y,colNum,srh,sbg);cx+=colNum;
            rectF(cx,y,colTyp,srh,sbg);
            txt(\`  \${si+1}.\`,cx+2,y+4,{size:7,color:"#6b7280"});cx+=colTyp;
            rectF(cx,y,colEl,srh,sbg);
            const bv=isJC?el.combo:el.base;
            txt(\`\${el.code} - \${el.name} (\${typeof bv==="number"?bv.toFixed(1):bv})\`,cx+4,y+4,{size:7,color:"#374151"});cx+=colEl;
            rectF(cx,y,colRot,srh,sbg);
            if(sub.nv) txt("NV",cx+colRot/2,y+4,{size:6,align:"center",bold:true,color:"#dc2626"});
            cx+=colRot;
            rectF(cx,y,colBase,srh,sbg);
            txt(sBase.toFixed(2),cx+colBase-2,y+4,{size:7,align:"right"});cx+=colBase;
            for(let ji=0;ji<judgeCount;ji++){
              rectF(cx,y,colJ,srh,sbg);
              const g=(sub.judgeGoe||[])[ji]||0;
              txt(g>0?"+"+g:String(g),cx+colJ/2,y+4,{size:7,align:"center",color:g>0?"#059669":g<0?"#dc2626":"#9ca3af"});
              cx+=colJ;
            }
            rectF(cx,y,colQoe,srh,sbg);
            txt((sGoe>=0?"+":"")+sGoe.toFixed(2),cx+colQoe-2,y+4,{size:7,align:"right",color:sGoe>0?"#059669":sGoe<0?"#dc2626":"#9ca3af"});cx+=colQoe;
            rectF(cx,y,colNvDg,srh,sbg);cx+=colNvDg;
            rectF(cx,y,colScore,srh,sbg);
            y+=srh;
          });
        }
      });

      // TES total
      pageBreak(9);
      const tesH=8;
      doc.setDrawColor("#059669");doc.setLineWidth(0.6);doc.line(mx,y,mx+cw,y);doc.setDrawColor(0,0,0);doc.setLineWidth(lw);
      rectF(mx,y,cw-colScore,tesH,"#f0f1f2");
      txt("Technical Element Score (TES)",mx+cw-colScore-4,y+6,{bold:true,size:10,align:"right",color:"#22221C"});
      rectF(mx+cw-colScore,y,colScore,tesH,"#f0f1f2");
      txt(tes.toFixed(2),mx+cw-2,y+6,{bold:true,size:13,align:"right",color:"#059669"});
      y+=tesH+6;

      // PCS table — DRIV Layout
      pageBreak(45);
      const pColFact=16, pColJ=16, pColAvg=16, pColSc=20;
      const pColComp=cw-pColFact-judgeCount*pColJ-pColAvg-pColSc;

      // PCS header bar
      rectF(mx,y,cw,7,"#e5e7eb");
      txt("PROGRAM COMPONENTS",mx+cw/2,y+5,{bold:true,size:9,align:"center"});y+=7;

      // PCS column headers
      const pHdrs=[{w:pColComp,label:"Component",a:"left"},{w:pColFact,label:"Factor",a:"center"}];
      for(let i=0;i<judgeCount;i++) pHdrs.push({w:pColJ,label:"J"+(i+1),a:"center"});
      pHdrs.push({w:pColAvg,label:"Avg",a:"center"},{w:pColSc,label:"Score",a:"right"});
      cx=mx;
      pHdrs.forEach(c=>{
        rectF(cx,y,c.w,6,"#f9fafb");
        const tx=c.a==="center"?cx+c.w/2:c.a==="right"?cx+c.w-2:cx+2;
        txt(c.label,tx,y+4.5,{bold:true,size:7,align:c.a});cx+=c.w;
      });
      y+=6;
      doc.setDrawColor("#374151");doc.setLineWidth(0.5);doc.line(mx,y,mx+cw,y);doc.setDrawColor(0,0,0);doc.setLineWidth(lw);

      // PCS rows
      PCS_COMPONENTS.forEach(comp=>{
        const avg=calcPcsAvg(pcs[comp.key],judgeCount);
        const sc=Math.round(avg*pcsFactor*100)/100;
        const prh=6;cx=mx;
        rectF(cx,y,pColComp,prh);txt(comp.label,cx+2,y+4.5,{size:8,bold:true});cx+=pColComp;
        rectF(cx,y,pColFact,prh);txt(pcsFactor.toFixed(1),cx+pColFact/2,y+4.5,{size:8,align:"center",color:"#6b7280"});cx+=pColFact;
        for(let ji=0;ji<judgeCount;ji++){
          rectF(cx,y,pColJ,prh);txt(pcs[comp.key][ji].toFixed(2),cx+pColJ/2,y+4.5,{size:8,align:"center",bold:true});cx+=pColJ;
        }
        rectF(cx,y,pColAvg,prh);txt(avg.toFixed(2),cx+pColAvg/2,y+4.5,{size:8,bold:true,align:"center"});cx+=pColAvg;
        rectF(cx,y,pColSc,prh);txt(sc.toFixed(2),cx+pColSc-2,y+4.5,{size:9,bold:true,align:"right"});
        y+=prh;
      });
      // PCS total
      doc.setDrawColor("#374151");doc.setLineWidth(0.5);doc.line(mx,y,mx+cw,y);doc.setDrawColor(0,0,0);doc.setLineWidth(lw);
      rectF(mx,y,cw-pColSc,7,"#f9fafb");
      txt("Program Component Score (PCS)",mx+cw-pColSc-4,y+5,{bold:true,size:9,align:"right"});
      rectF(mx+cw-pColSc,y,pColSc,7,"#f9fafb");
      txt(pcsTotal.toFixed(2),mx+cw-2,y+5,{bold:true,size:12,align:"right"});
      y+=11;

      // Deductions / Extra / Total — bottom right
      pageBreak(25);
      const sumW=100, sumX=mx+cw-sumW, sH=7;
      if(deductions>0){
        rectF(sumX,y,sumW*0.65,sH);txt("Abzüge (PE)",sumX+4,y+5,{bold:true,size:8});
        rectF(sumX+sumW*0.65,y,sumW*0.35,sH);txt("-"+deductions.toFixed(2),sumX+sumW-4,y+5,{bold:true,size:9,align:"right",color:"#dc2626"});y+=sH;
      }
      if(extraPoints>0){
        rectF(sumX,y,sumW*0.65,sH);txt("Extra Punkte",sumX+4,y+5,{bold:true,size:8});
        rectF(sumX+sumW*0.65,y,sumW*0.35,sH);txt("+"+extraPoints.toFixed(2),sumX+sumW-4,y+5,{bold:true,size:9,align:"right",color:"#059669"});y+=sH;
      }
      const tH=9;
      rectF(sumX,y,sumW*0.65,tH,"#f0f1f2");txt("TOTAL SCORE",sumX+4,y+6.5,{bold:true,size:10});
      rectF(sumX+sumW*0.65,y,sumW*0.35,tH,"#f0f1f2");txt(totalScore.toFixed(2),sumX+sumW-4,y+6.5,{bold:true,size:13,align:"right",color:"#059669"});
      y+=tH+8;

      // Footer
      doc.setFont("helvetica","normal");doc.setFontSize(6);doc.setTextColor("#9ca3af");
      doc.text("Generated by RollArt 2026 - Artistic Roller Skating Dashboard - Detail Export",pw/2,Math.min(y,ph-5),{align:"center"});

      const fn=\`\${(skater||"detail").replace(/\\s+/g,"_")}_\${segDef.label.replace(/\\s+/g,"_")}_Detail.pdf\`;
      doc.save(fn);
    };

    // ============================================================
    //  LOCAL STORAGE BACKUP — reliable persistence for sheet data
    //  Server may not persist rows/pcs, so we keep a local copy.
    // ============================================================
    const LS_SKATERS_KEY = 'rollart_skaters_data';
    const lsGetAll = () => { try { return JSON.parse(localStorage.getItem(LS_SKATERS_KEY)||'{}'); } catch { return {}; } };
    const lsSave = (id, data) => { const all=lsGetAll(); all[String(id)]=data; try{localStorage.setItem(LS_SKATERS_KEY,JSON.stringify(all));}catch(e){console.warn('localStorage full',e);} };
    const lsGet = (id) => lsGetAll()[String(id)] || null;
    const lsDelete = (id) => { const all=lsGetAll(); delete all[String(id)]; localStorage.setItem(LS_SKATERS_KEY,JSON.stringify(all)); };

    // Skater save/load functions
    const loadSkaters = async (signal) => {
      let serverSkaters = [];
      try {
        const token = localStorage.getItem('rollart_token');
        const opts = { headers: { 'Authorization': \`Bearer \${token}\` } };
        if (signal) opts.signal = signal;
        const res = await fetch('/api/skaters', opts);
        if (res.ok) {
          const data = await res.json();
          serverSkaters = data.skaters || [];
        }
      } catch (err) { if (err.name !== 'AbortError') console.error('Error loading skaters:', err); }
      // Merge with localStorage — add any local-only skaters (saved when server was down)
      const localAll = lsGetAll();
      const serverIds = new Set(serverSkaters.map(s=>String(s.id)));
      const serverNames = new Set(serverSkaters.map(s=>(s.name||"").trim().toLowerCase()));
      // Only add local entries that don't exist on server (by id OR by name)
      const localOnly = Object.values(localAll).filter(ls =>
        !serverIds.has(String(ls.id)) && !serverNames.has((ls.name||"").trim().toLowerCase())
      );
      const merged = [...serverSkaters, ...localOnly];
      setSkaters(merged);
    };

    const saveSkater = async () => {
      if (!skater.trim()) {
        alert('Bitte Läufer-Namen eingeben');
        return;
      }
      setSavingSkater(true);
      // Clean name before saving
      const saveName = skater.replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
      const payload = { name: saveName, kategorie, geschlecht, disziplin: disziplin||"einzel", verein: cat || "", music, segment, rows: rows.map(r=>({...r, bonuses:r.bonuses||[]})), pcs, deductions, extraPoints, judgeCount, officialSheet: null };
      try {
        const token = localStorage.getItem('rollart_token');
        const res = await fetch('/api/skaters', {
          method: 'POST',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const result = await res.json().catch(()=>({}));
          // Save full data to localStorage as backup (server may not persist rows/pcs)
          const skaterId = result.id || result.skater?.id || Date.now();
          lsSave(skaterId, {...payload, id:skaterId, updatedAt:new Date().toISOString()});
          // Clean up any local_* entries for same skater name
          const localAll = lsGetAll();
          Object.keys(localAll).forEach(k => {
            if (k.startsWith('local_') && (localAll[k].name||"").trim().toLowerCase() === (skater||"").trim().toLowerCase()) lsDelete(k);
          });
          setUploadMsg(\`"\${skater}" gespeichert\`);
          await loadSkaters();
        } else {
          // Server failed — save locally anyway so data isn't lost
          const localId = 'local_'+Date.now();
          lsSave(localId, {...payload, id:localId, updatedAt:new Date().toISOString()});
          setUploadMsg('Server-Fehler, lokal gespeichert');
          await loadSkaters();
        }
      } catch (err) {
        // Network error — save locally
        const localId = 'local_'+Date.now();
        lsSave(localId, {...payload, id:localId, updatedAt:new Date().toISOString()});
        setUploadMsg('Offline gespeichert (lokal)');
        await loadSkaters();
      }
      setSavingSkater(false);
    };

    const loadSkaterData = (sk) => {
      // Merge with localStorage backup — prefer local data for rows/pcs if server has empty data
      const local = lsGet(sk.id);
      const merged = {...sk};
      if (local) {
        // If server returned empty rows but localStorage has data, use localStorage
        if ((!sk.rows || sk.rows.length===0) && local.rows && local.rows.length>0) merged.rows = local.rows;
        if ((!sk.pcs || Object.keys(sk.pcs).length===0) && local.pcs && Object.keys(local.pcs).length>0) merged.pcs = local.pcs;
        if (sk.deductions == null && local.deductions != null) merged.deductions = local.deductions;
        if (sk.extraPoints == null && local.extraPoints != null) merged.extraPoints = local.extraPoints;
        if (sk.judgeCount == null && local.judgeCount != null) merged.judgeCount = local.judgeCount;
        if (!sk.music && local.music) merged.music = local.music;
        if (!sk.verein && local.verein) merged.verein = local.verein;
      }
      // Clean name: strip leading ": " and trailing "CATEGORY: xxx"
      let cleanName = (merged.name || "");
      const catFromName = cleanName.match(/\\s+CATEGORY:\\s+(.+)$/i);
      cleanName = cleanName.replace(/^:\\s*/, "").replace(/\\s+CATEGORY:\\s+.+$/i, "").trim();
      setSkater(cleanName);
      // Use verein if available, otherwise extract category from name
      setCat(merged.verein || (catFromName ? catFromName[1].trim() : CATEGORY_DEFS[merged.kategorie]?.label || ""));
      setMusic(merged.music || "");
      setKategorie(merged.kategorie || "senior");
      setSegment(merged.segment || "senior_fp");
      if(merged.geschlecht)setGeschlecht(merged.geschlecht);
      // Auto-detect disziplin from skater data
      if(merged.disziplin)setDisziplin(merged.disziplin);
      else if((merged.segment||"").startsWith("pairs_"))setDisziplin("pairs");
      else setDisziplin("einzel");
      // Rows mit bonuses-Feld sicherstellen
      const loadedRows = (merged.rows || []).map(r => ({...r, bonuses: r.bonuses || [], comboEls: r.comboEls || [], _id: r._id || Math.random().toString(36).slice(2)}));
      const neededRows = SEGMENT_DEFS[merged.segment || "senior_fp"]?.rows || 16;
      while (loadedRows.length < neededRows) loadedRows.push(emptyRow());
      setRows(loadedRows);
      // Sanitize PCS arrays — ensure each has exactly 5 entries
      const rawPcs = merged.pcs || emptyPcs();
      const sanPcs = {};
      for (const key of ['skating','transitions','performance','choreography']) {
        const arr = rawPcs[key] || [];
        sanPcs[key] = Array.from({length:5}, (_,i) => typeof arr[i]==='number' ? arr[i] : 0);
      }
      setPcs(sanPcs);
      setDeductions(merged.deductions ?? 0);
      setExtraPoints(merged.extraPoints ?? 0);
      setJudgeCount(merged.judgeCount || 3);
      setShowSkaterModal(false);
      setUploadMsg(\`"\${merged.name}" geladen\`);
    };

    // Load skaters on mount
    useEffect(() => { const ac = new AbortController(); loadSkaters(ac.signal); return () => ac.abort(); }, []);

    // ============================================================
    //  RENDER
    // ============================================================
    const hdr = { padding:"8px 4px", fontSize:10, fontWeight:700, color:"#22221C", textTransform:"uppercase", letterSpacing:0.5 };

    // License check — show blocked screen if expired/inactive (except admins)
    const licenseStatus = authCtx?.getLicenseStatus ? authCtx.getLicenseStatus() : { valid: true, plan: 'full' };
    if (authCtx?.user?.role !== 'admin' && !licenseStatus.valid) {
      return <LicenseExpiredScreen reason={licenseStatus.reason} expiresAt={licenseStatus.expiresAt} onLogout={authCtx.logout} />;
    }

    // If no disziplin selected, show Übersichtsseite
    if(!disziplin){
      return(
        <div style={{ background:"#f8f9fa", minHeight:"100vh" }}>
          <div style={{ background:"white", padding:screen.mobile?"12px 10px":"16px 20px", color:"#22221C", borderBottom:"1px solid #DEE2E6" }}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <img src="DRIV-Logo.svg" alt="DRIV" style={{height:screen.mobile?32:42}} />
                <div>
                  <h1 style={{margin:0,fontSize:screen.mobile?20:26,fontWeight:800,color:"#22221C"}}>RollArt 2026</h1>
                  <div style={{fontSize:9,fontWeight:600,color:"#6C757D",letterSpacing:1}}>DRIV Rollkunstlauf</div>
                </div>
              </div>
              {authCtx?.user && (
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <button onClick={()=>{if(!disziplin)setDisziplin("einzel");setPage("profile");}} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",
                    borderRadius:8,border:"1px solid #DEE2E6",background:"#f8f9fa",color:"#22221C",
                    cursor:"pointer",fontSize:12,fontWeight:600}}>
                    <span style={{width:24,height:24,borderRadius:"50%",background:"#E9ECEF",display:"flex",
                      alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800}}>
                      {(authCtx.user.name||"?")[0].toUpperCase()}
                    </span>
                    <span className="r-hide-mobile">{authCtx.user.name}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <UebersichtPage onSelect={selectDisziplin} license={licenseStatus}/>
        </div>
      );
    }

    return (
      <div style={{ background:"#f8f9fa", minHeight:"100vh" }}>
        {/* HEADER */}
        <div style={{ background:"white", padding:screen.mobile?"10px 10px 8px":"12px 16px 10px", color:"#22221C", borderBottom:"1px solid #DEE2E6" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:6 }}>
            <div style={{minWidth:0,flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <button onClick={()=>setDisziplin(null)} style={{padding:"4px 10px",borderRadius:6,border:"1px solid #DEE2E6",background:"#f8f9fa",color:"#22221C",fontSize:11,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>
                  ← Übersicht
                </button>
                <div>
                  <img src="DRIV-Logo.svg" alt="DRIV" style={{height:screen.mobile?24:32,flexShrink:0}} />
                  <div>
                  <h1 style={{margin:0,fontSize:screen.mobile?16:20,fontWeight:800,color:"#22221C"}}>
                    RollArt 2026 <span style={{fontSize:screen.mobile?11:13,fontWeight:600,color:"#495057",background:"#E9ECEF",padding:"2px 8px",borderRadius:4,marginLeft:4}}>
                      {disziplin==="pairs"?"Paarlauf":"Einzellauf"}
                    </span>
                  </h1>
                  <div style={{fontSize:9,fontWeight:600,color:"#6C757D",letterSpacing:1}}>DRIV Rollkunstlauf</div>
                  </div>
                </div>
              </div>
              {/* PAGE TABS */}
              {(()=>{
                const primaryTabs = [
                  {key:"dashboard",label:"Dashboard"},
                  {key:"content",label:"Content Sheet"},
                  {key:"training",label:"Simulator"},
                  {key:"tagebuch",label:"Tagebuch"},
                  {key:"kalender",label:"Kalender"},
                  {key:"wettbewerbe",label:"Wettbewerbe"},
                  {key:"official",label:"Content Sheets"},
                ];
                const moreTabs = [
                  {key:"werte",label:"Wertetabelle"},
                  {key:"glossar",label:"Glossar & Regeln"},
                  {key:"anleitung",label:"Anleitung"},
                ];
                const isMoreActive = moreTabs.some(t => t.key === page);
                const tabStyle = (active) => ({
                  padding: screen.mobile ? "5px 9px" : "6px 14px",
                  borderRadius: "6px 6px 0 0",
                  border: "none",
                  borderBottom: active ? "3px solid #E10716" : "3px solid transparent",
                  fontSize: screen.mobile ? 10 : 12,
                  fontWeight: active ? 700 : 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  background: active ? "#f8f9fa" : "transparent",
                  color: active ? "#22221C" : "#495057",
                  transition: "all .15s",
                });
                return (
                  <div className="r-nav-scroll" style={{display:"flex",gap:2,marginTop:6,alignItems:"flex-end"}}>
                    {primaryTabs.map(t => (
                      <button key={t.key} onClick={() => setPage(t.key)} style={tabStyle(page === t.key)}>{t.label}</button>
                    ))}
                    {/* Mehr-Dropdown */}
                    <div ref={moreMenuRef} style={{position:"relative",flexShrink:0}}>
                      <button onClick={() => setShowMoreMenu(!showMoreMenu)} style={{
                        ...tabStyle(isMoreActive),
                        display: "flex", alignItems: "center", gap: 4,
                      }}>
                        {isMoreActive ? moreTabs.find(t => t.key === page)?.label : "Mehr ▾"}
                      </button>
                      {showMoreMenu && (
                        <div style={{position:"absolute",top:"100%",right:0,marginTop:4,background:"white",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,.18)",border:"1px solid #e5e7eb",minWidth:180,zIndex:100,overflow:"hidden"}}>
                          {moreTabs.map(t => (
                            <button key={t.key} onClick={() => { setPage(t.key); setShowMoreMenu(false); }} style={{
                              display:"block",width:"100%",padding:"10px 16px",border:"none",background:page===t.key?"#f0f1f2":"white",
                              color:page===t.key?"#22221C":"#374151",fontWeight:page===t.key?700:500,fontSize:13,cursor:"pointer",textAlign:"left",
                              borderLeft:page===t.key?"3px solid #22221C":"3px solid transparent",
                            }}
                              onMouseEnter={e => { if (page !== t.key) e.currentTarget.style.background = "#f9fafb"; }}
                              onMouseLeave={e => { if (page !== t.key) e.currentTarget.style.background = "white"; }}
                            >{t.label}</button>
                          ))}
                        </div>
                      )}
                    </div>
                    {authCtx?.user?.role==="admin"&&<button onClick={()=>setPage("admin")} style={tabStyle(page==="admin")}>⚙ Admin</button>}
                    {/* Season Toggle */}
                    <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:0,background:"#f3f4f6",borderRadius:16,padding:2,flexShrink:0}}>
                      {["2026","2027"].map(s=>(
                        <button key={s} onClick={()=>setSeason(s)} style={{
                          padding:"3px 10px",borderRadius:14,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",
                          background:season===s?"#22221C":"transparent",color:season===s?"#fff":"#6B7280",transition:"all .2s",
                        }}>{s}</button>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
            {/* User menu */}
            {authCtx?.user && (
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <button onClick={()=>setPage("profile")} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",
                  borderRadius:8,border:"1px solid #DEE2E6",background:"#f8f9fa",color:"#22221C",
                  cursor:"pointer",fontSize:12,fontWeight:600}}>
                  <span style={{width:24,height:24,borderRadius:"50%",background:"#E9ECEF",display:"flex",
                    alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800}}>
                    {(authCtx.user.name||"?")[0].toUpperCase()}
                  </span>
                  <span className="r-hide-mobile">{authCtx.user.name}</span>
                </button>
              </div>
            )}
            {page==="content"&&<div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:10,color:"#6C757D"}}>Total Score</div>
              <div style={{fontSize:screen.mobile?22:34,fontWeight:800,lineHeight:1,color:"#22221C"}}>{totalScore.toFixed(2)}</div>
              <div className="r-hide-mobile" style={{fontSize:10,color:"#6C757D"}}>TES {tes.toFixed(2)} + PCS {pcsTotal.toFixed(2)}{deductions>0?" - Ded "+deductions.toFixed(2):""}{extraPoints>0?" + Extra "+extraPoints.toFixed(2):""}</div>
            </div>}
          </div>

          {/* Category + Segment selector + Judge count */}
          {page==="content"&&<div style={{display:"flex",gap:screen.mobile?4:6,marginTop:screen.mobile?6:10,flexWrap:"wrap",alignItems:"center"}}>
            <select value={kategorie} onChange={e=>changeKategorie(e.target.value)} style={{
              padding:"6px 10px",borderRadius:6,border:"1px solid #DEE2E6",fontSize:12,fontWeight:700,
              background:"white",color:"#22221C",cursor:"pointer",
            }}>
              {filteredCategories.map(([k,v])=>(
                <option key={k} value={k} style={{color:"#333",background:"white"}}>{v.label}</option>
              ))}
            </select>
            {(CATEGORY_DEFS[kategorie]?.segments||[]).map(seg=>(
              <button key={seg} onClick={()=>changeSegment(seg)} style={{
                padding:"6px 14px",borderRadius:6,border:"1px solid #DEE2E6",fontSize:12,fontWeight:600,cursor:"pointer",
                background:segment===seg?"#22221C":"white",
                color:segment===seg?"white":"#22221C",
              }}>{SEGMENT_DEFS[seg]?.label} ({SEGMENT_DEFS[seg]?.rows})</button>
            ))}
            {!segment.startsWith("pairs_")&&<>
              <span style={{fontSize:11,color:"#6C757D"}}>Geschlecht:</span>
              {[{k:"damen",l:"D"},{k:"herren",l:"H"}].map(g=>(
                <button key={g.k} onClick={()=>setGeschlecht(g.k)} style={{
                  padding:"5px 10px",borderRadius:5,border:"1px solid #DEE2E6",fontSize:12,fontWeight:700,cursor:"pointer",
                  background:geschlecht===g.k?"#22221C":"white",
                  color:geschlecht===g.k?"white":"#22221C",
                }}>{g.l}</button>
              ))}
            </>}
            <span style={{marginLeft:"auto",fontSize:11,color:"#6C757D"}}>Judges:</span>
            {[3,5].map(n=>(
              <button key={n} onClick={()=>setJudgeCount(n)} style={{
                padding:"5px 12px",borderRadius:5,border:"1px solid #DEE2E6",fontSize:12,fontWeight:700,cursor:"pointer",
                background:judgeCount===n?"#22221C":"white",
                color:judgeCount===n?"white":"#22221C",
              }}>{n}</button>
            ))}
          </div>}
        </div>

        {/* TRAINING SIMULATOR PAGE */}
        {page==="anleitung"&&<AnleitungPage/>}
        {page==="dashboard"&&<DashboardPage/>}
        {page==="training"&&<TrainingSimulator importData={simImport} onImportDone={handleSimImportDone} disziplin={disziplin} season={season}/>}
        {page==="tagebuch"&&<TrainingDiary/>}
        {page==="kalender"&&<CompetitionCalendar/>}

        {/* COMPETITIONS PAGE */}
        {page==="wettbewerbe"&&<CompetitionPage onLoadSkater={(data)=>setCompImport(data)}/>}

        {/* ADMIN PAGE */}
        {page==="admin"&&authCtx?.user?.role==="admin"&&<AdminDashboard onClose={()=>setPage("content")}/>}

        {/* PROFILE PAGE */}
        {page==="profile"&&<ProfileScreen onClose={()=>setPage("content")}/>}

        {/* WERTETABELLE PAGE */}
        {page==="werte"&&<WertetabellePage season={season}/>}

        {/* GLOSSAR & REGELN PAGE */}
        {page==="glossar"&&<div style={{padding:"16px 20px",maxWidth:1200,margin:"0 auto"}}>
  <div style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",padding:16,marginBottom:16}}>
    <h3 style={{margin:"0 0 12px",fontSize:16,fontWeight:800,color:"#22221C"}}>Glossar & Regeln (RollArt 2026)</h3>
    <div className="r-grid1-mobile" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,fontSize:12}}>
      <div>
        <h4 style={{margin:"0 0 6px",fontSize:13,fontWeight:700,color:"#22221C"}}>Bewertungssystem</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["QOE","Quality of the Element – Qualitätsbewertung pro Element durch jeden Judge (+3 bis -3)"],
              ["TE","Technical Value of Element – Basiswert des technischen Elements"],
              ["TES / TC","Technical Element Score – Summe aller Elementwerte inkl. QOE"],
              ["TVP","Technical Value of Program – Gesamttechnischer Wert (TC + AI - PE)"],
              ["AI / PCS","Artistic Impression / Program Components – Skating Skills, Transitions, Performance, Choreography"],
              ["PE","Penalization – Abzüge die vom TVP abgezogen werden"],
              ["NV","No Value – Element erhält keinen Wert"],
              ["DG","Downgrade – Element wird herabgestuft (halber Basiswert)"],
            ].map(([k,v])=>(
              <tr key={k} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"4px 6px",fontWeight:700,color:"#22221C",whiteSpace:"nowrap",verticalAlign:"top"}}>{k}</td>
                <td style={{padding:"4px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#22221C"}}>QOE Richtlinien</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["0","Grundeigenschaften des Elements erreicht"],
              ["+1","1–2 Features erfüllt"],
              ["+2","3–4 Features erfüllt"],
              ["+3","5–6 Features erfüllt"],
              ["-1 bis -3","Fehler bei der Ausführung (siehe Neg. QOE Tabelle)"],
            ].map(([k,v])=>(
              <tr key={k} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"3px 6px",fontWeight:700,color:k.startsWith("-")?"#dc2626":"#059669",whiteSpace:"nowrap",width:70}}>{k}</td>
                <td style={{padding:"3px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{fontSize:10,color:"#6b7280",margin:"6px 0 0"}}>Bei mehr als 3 Judges: höchste & niedrigste QOE werden gestrichen (Trimmed Mean). Bei 3 oder weniger: einfacher Durchschnitt. Ergebnis auf 2 Dezimalstellen gerundet.</p>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#22221C"}}>Rotation (Sprünge)</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["N (Normal)","Volle Rotation – voller Basiswert"],
              ["< (Under-rotated)","Weniger als ¼ Rotation fehlt – 30% Abzug (1er/2er), 20% (3er/4er)"],
              ["<< (Half-rotated)","¼ bis ½ Rotation fehlt – 50% Abzug (1er/2er), 40% (3er), 30% (4er)"],
              ["<<< (Downgraded)","Mehr als ½ Rotation fehlt – Wert der nächsttieferen Rotation"],
            ].map(([k,v])=>(
              <tr key={k} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"3px 6px",fontWeight:700,color:"#f59e0b",whiteSpace:"nowrap",verticalAlign:"top",width:130}}>{k}</td>
                <td style={{padding:"3px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h4 style={{margin:"0 0 6px",fontSize:13,fontWeight:700,color:"#dc2626"}}>Penalisierungen (Referee)</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["1.0","Knien/Liegen > 1x oder > 5 Sek."],
              ["1.0","Kostümverstoß (mit Meinung der Judges)"],
              ["0.5/10s","Zeitverstoß (unter Minimum / über Maximum)"],
              ["0.5","Start > 10 Sek. nach Musik"],
              ["1.0","Unangemessene Musik/Texte"],
              ["0.5","Verlassen der Fläche / Bande berühren"],
              ["0.5","Ein-/Austritt nicht in erlaubter Zeit"],
              ["1.0 + 1.0","Stürze: 1.0 für 1. und 2. Sturz"],
              ["+0.5/+0.3","Weitere Stürze: +0.5 (Espoir-Senior) / +0.3 (Tots/Minis)"],
            ].map(([k,v],i)=>(
              <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"3px 6px",fontWeight:700,color:"#dc2626",whiteSpace:"nowrap",verticalAlign:"top",width:70}}>{k}</td>
                <td style={{padding:"3px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#dc2626"}}>Penalisierungen (Technical Panel)</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["1.0","Sprung > 1 Rotation in Footwork Sequence"],
              ["1.0","Fehlendes Pflichtelement (Mandatory Element)"],
              ["1.0","Illegales Element"],
              ["1.0","Pflichtposition in Pirouette nicht versucht"],
            ].map(([k,v],i)=>(
              <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"3px 6px",fontWeight:700,color:"#dc2626",whiteSpace:"nowrap",width:40}}>{k}</td>
                <td style={{padding:"3px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#22221C"}}>Bonus-Prozente (Sprungwert-Erhöhung)</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["+10%","Sprung nach halber Programmlänge (Cadet, Youth, Junior, Senior)"],
              ["+10%","Axel-Doppel Toeloop Kombi ohne Verbindungssprung (nur Minis)"],
              ["+10%","Doppel-Doppel Kombi (Minis, Espoir, Cadet LP)"],
              ["+20%","Doppel-Dreifach / Dreifach-Doppel Kombi"],
              ["+30%","Dreifach-Dreifach Kombi"],
            ].map(([k,v],i)=>(
              <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"3px 6px",fontWeight:700,color:"#059669",whiteSpace:"nowrap",verticalAlign:"top",width:50}}>{k}</td>
                <td style={{padding:"3px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{fontSize:10,color:"#6b7280",margin:"6px 0 0"}}>Hinweis: Doppel-Axel zählt als Dreifach für Bonus. Downgraded-Sprünge erhalten keinen Bonus.</p>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#22221C"}}>Schwierige Pirouetten-Positionen (Bonus auf Basisposition)</h4>
        <p style={{fontSize:10,color:"#6b7280",margin:"0 0 4px"}}>Der Prozentwert wird auf den Grundwert der Basisposition addiert.</p>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <thead><tr style={{background:"#f0f1f2",borderBottom:"2px solid #DEE2E6"}}><th style={{padding:"3px 6px",textAlign:"left",fontWeight:700,width:45}}>Code</th><th style={{padding:"3px 6px",textAlign:"left",fontWeight:700}}>Position</th><th style={{padding:"3px 6px",textAlign:"right",fontWeight:700,width:50}}>Bonus</th></tr></thead>
          <tbody>
            {[
              ["UB","Biellmann","+80%"],["UBH","Biellmann Heel","+40%"],["US","Split (Spagat)","+40%"],["UT","Torso","+50%"],
              ["UL","Layback","+30%"],["UF","Forward","+20%"],["UH","Heel","+20%"],
              ["SS","Sit Sideways","+60%"],["ST","Sit Twist","+40%"],["SF","Sit Forward","+50%"],["SB","Sit Behind","+20%"],
              ["CF","Camel Forward","+40%"],["CS","Camel Sideways","+60%"],["CL","Camel Layover","+20%"],
              ["BF","Broken Forward","+40%"],["BS","Broken Sideways","+60%"],
              ["HF","Heel Forward","+40%"],["HS","Heel Sideways","+60%"],["HL","Heel Layover","+20%"],
              ["IB","Inverted Bryant","+25%"],["SV","Standard Variation","+20%"],
            ].map(([code,n,bonus],i)=>(
              <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"2px 6px",fontWeight:700,color:"#22221C"}}>{code}</td>
                <td style={{padding:"2px 6px",color:"#374151"}}>{n}</td>
                <td style={{padding:"2px 6px",textAlign:"right",fontWeight:700,color:"#059669"}}>{bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#22221C"}}>Schwierige Pirouetten-Variationen (Bonus auf Elementwert)</h4>
        <p style={{fontSize:10,color:"#6b7280",margin:"0 0 4px"}}>Der Prozentwert wird als zusätzlicher Bonus auf den Wert des Elements addiert.</p>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <thead><tr style={{background:"#f0f1f2",borderBottom:"2px solid #DEE2E6"}}><th style={{padding:"3px 6px",textAlign:"left",fontWeight:700,width:45}}>Code</th><th style={{padding:"3px 6px",textAlign:"left",fontWeight:700}}>Variation</th><th style={{padding:"3px 6px",textAlign:"right",fontWeight:700,width:50}}>Bonus</th></tr></thead>
          <tbody>
            {[
              ["DE","Difficult Entry – Schwieriger Einstieg","+15%"],["DC","Difficult Change – Schwieriger Wechsel","+15%"],
              ["SBC","Sit Between Camel – Sitz zwischen Waage","+15%"],["R6","Revolutions 6+ – Mind. 6 Umdrehungen","+20%"],
              ["R4","Revolutions 4+ – Mind. 4 Umdr. (invertiert)","+20%"],["BD","Both Directions – Beide Richtungen","+15%"],
              ["DF","Different Feet – Verschiedene Füße","+20%"],
            ].map(([code,n,bonus],i)=>(
              <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"2px 6px",fontWeight:700,color:"#22221C"}}>{code}</td>
                <td style={{padding:"2px 6px",color:"#374151"}}>{n}</td>
                <td style={{padding:"2px 6px",textAlign:"right",fontWeight:700,color:"#059669"}}>{bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#f59e0b"}}>Sonderregeln Wertung</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[
              ["70%","Lutz No Edge – Lutz ohne korrekte Kante: nur 70% des Elementwerts"],
              ["50%","Saved Combination – Gerettete Kombi: Verbindungssprung zählt 50% Basiswert"],
              ["-50%","Fall / Sturz – Einzelsprung: -0.5 Abzug pro Sturz auf Gesamtpunktzahl"],
              ["NV","No Value – Element wird nicht gewertet (z.B. bei illegalem Element oder fehlendem Kriterium)"],
              ["DG","Downgrade – Herabstufung: Element wird als niedrigere Rotation gewertet, kein Bonus"],
            ].map(([k,v],i)=>(
              <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                <td style={{padding:"3px 6px",fontWeight:700,color:"#d97706",whiteSpace:"nowrap",verticalAlign:"top",width:50}}>{k}</td>
                <td style={{padding:"3px 6px",color:"#374151"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{fontSize:10,color:"#6b7280",margin:"6px 0 0"}}>Alle Bonus-Prozente beziehen sich auf den Basiswert des Elements gem. offizieller World Skate Wertungstabellen 2026.</p>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#3b82f6"}}>Alterskategorien</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[["Tots","8–9 Jahre"],["Minis","10–11 Jahre"],["Espoir","12–13 Jahre"],["Cadet","14–15 Jahre"],["Youth","16 Jahre"],["Junior","17–18 Jahre"],["Senior","ab 19 Jahre"]].map(([k,v])=>(
              <tr key={k} style={{borderBottom:"1px solid #f3f4f6"}}><td style={{padding:"2px 6px",fontWeight:600,width:60}}>{k}</td><td style={{padding:"2px 6px",color:"#374151"}}>{v}</td></tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#3b82f6"}}>Elementtypen</h4>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
          <tbody>
            {[["CoJ","Combination Jump – Sprungkombination (bis 5 Sprünge)"],["SJu","Solo Jump – Einzelsprung"],["CSp","Combination Spin – Kombinationspirouette"],["SSp","Solo Spin – Einzelpirouette"],["FoSq","Footwork Sequence – Schrittfolge"],["ChSt","Choreo Step Sequence – Choreographische Schrittfolge"],["CLi","Combination Lift – Hebungskombination (Pairs)"],["SLi","Solo Lift – Einzelhebung (Pairs)"],["CtSp","Contact Spin – Kontaktpirouette (Pairs)"],["DS","Death Spiral – Todesspirale (Pairs)"],["Tw","Twist – Twist Lutz (Pairs)"],["Tj","Throw Jump – Wurfsprung (Pairs)"]].map(([k,v])=>(
              <tr key={k} style={{borderBottom:"1px solid #f3f4f6"}}><td style={{padding:"2px 6px",fontWeight:700,color:"#22221C",width:45}}>{k}</td><td style={{padding:"2px 6px",color:"#374151"}}>{v}</td></tr>
            ))}
          </tbody>
        </table>
        <h4 style={{margin:"12px 0 6px",fontSize:13,fontWeight:700,color:"#1d4ed8"}}>Offizielle Regelwerke (World Skate 2026) — Download</h4>
        <p style={{fontSize:10,color:"#6b7280",margin:"0 0 6px"}}>Klicke auf ein Dokument, um es herunterzuladen:</p>
        <div style={{display:"flex",flexDirection:"column",gap:4}}>
          {[
            {name:"Free Skating 2026 – Official Regulation", desc:"Einzellauf-Regeln für alle Altersklassen", file:"Free_2026.pdf"},
            {name:"Pairs 2026 – Official Regulation", desc:"Paarlauf-Regeln für alle Altersklassen", file:"Pairs_2026.pdf"},
            {name:"General 2026 – Official Regulation", desc:"Allgemeine Wettkampf- und Bewertungsregeln", file:"General_2026.pdf"},
            {name:"Artistic Impression 2026", desc:"Artistic Impression / Program Components Bewertung", file:"Artistic_Impression_2026.pdf"},
            {name:"Content Sheets 2026", desc:"Offizielle Content Sheets für alle Kategorien", file:"Content_Sheets_2026.pdf"},
            {name:"RollArt – Free Skating Values 2026", desc:"Basiswerte aller Einzellauf-Elemente", file:"Free_Values_2026.pdf"},
            {name:"RollArt – Pairs Values 2026", desc:"Basiswerte aller Paarlauf-Elemente", file:"Pairs_Values_2026.pdf"},
          ].map((doc,i)=>(
            <a key={i} href={\`/docs/\${doc.file}\`} download={doc.file} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",display:"block",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:6,padding:"8px 12px",fontSize:11,cursor:"pointer",transition:"all 0.2s"}}>
              <span style={{fontWeight:700,color:"#1d4ed8"}}>📥 {doc.name}</span>
              <span style={{color:"#6b7280",marginLeft:8,fontSize:10}}> – {doc.desc}</span>
            </a>
          ))}
        </div>
        <p style={{fontSize:10,color:"#6b7280",margin:"6px 0 0"}}>Die Regeln sind im KI-Coach hinterlegt und werden für Regelprüfungen verwendet.</p>
      </div>
    </div>
  </div>
</div>}

        {/* OFFICIAL SHEETS PAGE */}
        {page==="official"&&<OfficialSheets onSendToContent={(data)=>{setOfficialImport(data);setPage("content");}} importFromContent={officialExport}/>}

        {/* CONTENT SHEET PAGE */}
        {page==="content"&&<div style={{padding:screen.mobile?"8px 8px":"12px 16px",maxWidth:1150,margin:"0 auto"}}>

          {/* Info fields */}
          <div className="r-grid1-mobile" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:12}}>
            <input placeholder="Name" value={skater} onChange={e=>setSkater(e.target.value)} style={{padding:"7px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:13}}/>
            <input placeholder="Kategorie" value={cat} onChange={e=>setCat(e.target.value)} style={{padding:"7px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:13}}/>
            <input placeholder="Musik / Choreographie" value={music} onChange={e=>setMusic(e.target.value)} style={{padding:"7px 10px",borderRadius:5,border:"1px solid #d1d5db",fontSize:13}}/>
          </div>

          {/* Actions — grouped */}
          {(()=>{
            const btnBase = {padding:"6px 12px",borderRadius:5,fontWeight:600,fontSize:11,cursor:"pointer",border:"none"};
            const divider = <div style={{width:1,height:24,background:"#e5e7eb",margin:"0 2px",flexShrink:0}} />;
            return (
              <div style={{display:"flex",gap:screen.mobile?3:5,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
                {/* I/O Group */}
                <label style={{...btnBase,border:"1px solid #22221C",background:"#f0f1f2",color:"#22221C"}}>
                  Import (PDF/TXT)
                  <input type="file" accept=".pdf,.txt" onChange={handleUpload} style={{display:"none"}}/>
                </label>
                <button onClick={exportTxt} style={{...btnBase,background:"#22221C",color:"white"}}>TXT Export</button>
                <button onClick={()=>{if(!skater.trim()){alert("Bitte Läufer-Name eingeben!");return;}exportOfficialPDF();}} style={{...btnBase,background:"#dc2626",color:"white"}}>PDF (World Skate)</button>
                <button onClick={()=>{if(!skater.trim()){alert("Bitte Läufer-Name eingeben!");return;}exportDetailPDF();}} style={{...btnBase,background:"#22221C",color:"white"}}>PDF (Detail)</button>
                {divider}
                {/* Läufer Group */}
                <button onClick={saveSkater} disabled={savingSkater} style={{...btnBase,background:"#3b82f6",color:"white",opacity:savingSkater?0.6:1}}>Speichern</button>
                <button onClick={()=>setShowSkaterModal(true)} style={{...btnBase,background:"#10b981",color:"white"}}>Laden</button>
                {divider}
                {/* Navigation Group */}
                <button onClick={()=>{
                  setSimImport({kategorie,segment,geschlecht,skater,cat,music,judgeCount,rows:rows.map(r=>({...r})),pcs:{...pcs,skating:[...pcs.skating],transitions:[...pcs.transitions],performance:[...pcs.performance],choreography:[...pcs.choreography]},deductions,extraPoints,_ts:Date.now()});
                  setPage("training");
                }} style={{...btnBase,background:"#22221C",color:"white"}}>
                  Simulator &#9654;
                </button>
                <button onClick={()=>{
                  setOfficialExport({skater,cat,music,kategorie,segment,rows:rows.map(r=>({...r})),_ts:Date.now()});
                  setPage("official");
                }} style={{...btnBase,background:"#1d4ed8",color:"white"}}>
                  Official &#9654;
                </button>
                <button onClick={async()=>{
                  const token=localStorage.getItem('rollart_token');
                  const label=prompt('Label für diesen Score (z.B. "Training", "Wettkampf"):','Training');
                  if(label===null)return;
                  try{
                    const resp=await fetch('/api/score-history',{method:'POST',headers:{'Authorization':'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({
                      skaterName:skater||'Unbenannt',kategorie,segment,tes:Math.round(tes*100)/100,pcs:Math.round(pcsTotal*100)/100,
                      deductions,extraPoints,total:totalScore,date:new Date().toISOString().slice(0,10),label
                    })});
                    if(!resp.ok)throw new Error('Server error');
                    setUploadMsg('Score gespeichert!');
                  }catch(e){setUploadMsg('Fehler beim Speichern!');}
                  setTimeout(()=>setUploadMsg(''),3000);
                }} style={{...btnBase,background:"#f59e0b",color:"white"}}>
                  Score speichern
                </button>
                {divider}
                {/* Table editing Group */}
                <button onClick={addRow} style={{...btnBase,border:"1px solid #d1d5db",background:"white",color:"#374151"}}>+ Zeile</button>
                <button onClick={removeRow} style={{...btnBase,border:"1px solid #d1d5db",background:"white",color:"#374151"}}>- Zeile</button>
                <button onClick={clearAll} style={{...btnBase,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626"}}>Löschen</button>
                {uploadMsg && <span style={{fontSize:11,color:"#22221C",fontWeight:500,marginLeft:4}}>{uploadMsg}</span>}
              </div>
            );
          })()}

          {/* Skater Load Modal */}
          {showSkaterModal && (
            <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999}}>
              <div style={{background:"white",borderRadius:10,padding:20,maxWidth:400,width:"90%",maxHeight:"80vh",overflow:"auto"}}>
                <h3 style={{margin:"0 0 16px",fontSize:16,fontWeight:800}}>Gespeicherte Läufer laden</h3>
                {skaters.length===0?(
                  <p style={{color:"#6b7280",fontSize:13,textAlign:"center",padding:"16px 0"}}>Noch keine Läufer gespeichert. Nutze "Speichern" im Content Sheet.</p>
                ):(
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {skaters.map((sk)=>(
                      <div key={sk.id} style={{border:"1px solid #e5e7eb",borderRadius:6,padding:10,cursor:"pointer",transition:"background .15s"}}
                        onMouseEnter={e=>{e.currentTarget.style.background="#f0f1f2";e.currentTarget.style.borderColor="#DEE2E6";}}
                        onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.borderColor="#e5e7eb";}}
                        onClick={()=>loadSkaterData(sk)}>
                        <div style={{fontWeight:600,fontSize:13}}>{sk.name}</div>
                        <div style={{fontSize:11,color:"#6b7280"}}>
                          {CATEGORY_DEFS[sk.kategorie]?.label||sk.kategorie} • {SEGMENT_DEFS[sk.segment]?.label||sk.segment}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <button onClick={()=>setShowSkaterModal(false)} style={{marginTop:16,padding:"6px 12px",borderRadius:5,border:"none",background:"#6b7280",color:"white",fontWeight:600,fontSize:11,cursor:"pointer",width:"100%"}}>Schließen</button>
              </div>
            </div>
          )}



          {/* TABLE */}
          <div className="r-table-wrap" style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",overflow:"auto",WebkitOverflowScrolling:"touch"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:680}}>
              <thead>
                <tr style={{background:"#f0f1f2",borderBottom:"2px solid #22221C"}}>
                  <th style={{...hdr,textAlign:"center",width:32}}>#</th>
                  <th style={{...hdr,textAlign:"left"}}>Typ</th>
                  <th style={{...hdr,textAlign:"left"}}>Element</th>
                  <th style={{...hdr,textAlign:"center"}}>Rot.</th>
                  <th style={{...hdr,textAlign:"right",width:55}}>Base</th>
                  {Array.from({length:judgeCount}).map((_,i)=>(
                    <th key={i} style={{...hdr,textAlign:"center",width:38}}>J{i+1}</th>
                  ))}
                  <th style={{...hdr,textAlign:"right",width:50}}>QOE</th>
                  <th style={{...hdr,textAlign:"center",width:52}}>NV/DG</th>
                  <th style={{...hdr,textAlign:"right",width:60}}>Score</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r,i)=>(
                  <ElementRow key={r._id||i} num={i+1} row={r} types={types} judgeCount={judgeCount} onChange={d=>updateRow(i,d)} totalRows={rows.length} segment={segment}/>
                ))}
              </tbody>
              <tfoot>
                <tr style={{borderTop:"2px solid #22221C",background:"#f0f1f2"}}>
                  <td colSpan={7+judgeCount} style={{padding:"12px 10px",textAlign:"right",fontWeight:700,fontSize:13,color:"#22221C"}}>
                    Technical Element Score (TES)
                  </td>
                  <td style={{padding:"12px 8px",textAlign:"right",fontWeight:800,fontSize:20,color:"#22221C"}}>
                    {tes.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* PROGRAM COMPONENTS — Official DRIV / World Skate Layout */}
          <div className="r-table-wrap" style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #d1d5db",overflow:"auto",marginTop:16,WebkitOverflowScrolling:"touch"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:480}}>
              <thead>
                <tr style={{background:"#e5e7eb"}}>
                  <th colSpan={4+judgeCount} style={{padding:"6px 10px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"center",borderBottom:"1px solid #9ca3af"}}>
                    Program Components
                  </th>
                </tr>
                <tr style={{background:"#f9fafb",borderBottom:"2px solid #374151"}}>
                  <th style={{...hdr,textAlign:"left",padding:"5px 10px",fontSize:10}}>Component</th>
                  <th style={{...hdr,textAlign:"center",width:50,fontSize:10}}>Factor</th>
                  {Array.from({length:judgeCount}).map((_,i)=>(
                    <th key={i} style={{...hdr,textAlign:"center",width:56,fontSize:10}}>J{i+1}</th>
                  ))}
                  <th style={{...hdr,textAlign:"center",width:50,fontSize:10}}>Avg</th>
                  <th style={{...hdr,textAlign:"right",width:60,fontSize:10,paddingRight:8}}>Score</th>
                </tr>
              </thead>
              <tbody>
                {PCS_COMPONENTS.map(comp => {
                  const avg = calcPcsAvg(pcs[comp.key], judgeCount);
                  const compScore = Math.round(avg * pcsFactor * 100) / 100;
                  return (
                    <tr key={comp.key} style={{borderBottom:"1px solid #d1d5db"}}>
                      <td style={{padding:"5px 10px",fontSize:11,fontWeight:600,borderRight:"1px solid #e5e7eb"}}>{comp.label}</td>
                      <td style={{padding:"5px 4px",fontSize:11,textAlign:"center",color:"#6b7280",fontWeight:600,borderRight:"1px solid #e5e7eb"}}>{pcsFactor.toFixed(1)}</td>
                      {Array.from({length:judgeCount}).map((_,ji)=>{
                        const val = pcs[comp.key][ji];
                        const setPcsVal = (raw) => {
                          const np={...pcs}; np[comp.key]=[...np[comp.key]]; np[comp.key][ji]=raw; setPcs(np);
                        };
                        const pcsMax2 = getPcsMax(segment);
                        const clampPcs = () => {
                          const clamped = Math.max(0, Math.min(pcsMax2, Math.round(val * 4) / 4));
                          if (clamped !== val) setPcsVal(clamped);
                        };
                        return (
                          <td key={ji} style={{padding:"3px 2px",textAlign:"center",borderRight:"1px solid #e5e7eb"}}>
                            <input type="number" min="0" max={pcsMax2} step="0.25" value={val}
                              onChange={e => setPcsVal(parseFloat(e.target.value)||0)}
                              onBlur={clampPcs}
                              style={{width:46,height:24,border:"1px solid #9ca3af",borderRadius:2,fontSize:12,fontWeight:700,textAlign:"center",padding:0,color:"#111827",background:"#fafafa",
                                MozAppearance:"textfield",WebkitAppearance:"none"}}/>
                          </td>
                        );
                      })}
                      <td style={{padding:"5px 4px",fontSize:12,fontWeight:700,textAlign:"center",borderRight:"1px solid #e5e7eb"}}>{avg.toFixed(2)}</td>
                      <td style={{padding:"5px 8px",fontSize:13,fontWeight:800,textAlign:"right"}}>{compScore.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr style={{borderTop:"2px solid #374151",background:"#f9fafb"}}>
                  <td colSpan={2+judgeCount} style={{padding:"8px 10px",textAlign:"right",fontWeight:700,fontSize:12}}>
                    Program Component Score (PCS)
                  </td>
                  <td colSpan={2} style={{padding:"8px 8px",textAlign:"right",fontWeight:800,fontSize:16}}>
                    {pcsTotal.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* DEDUCTIONS & EXTRA */}
          <div style={{background:"white",borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,.1)",border:"1px solid #e5e7eb",padding:screen.mobile?10:16,marginTop:16}}>
  <div style={{display:"flex",gap:screen.mobile?8:12,flexWrap:"wrap",alignItems:"center"}}>
    <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
      <span style={{fontSize:screen.mobile?11:13,fontWeight:700,color:"#dc2626"}}>Abzüge (PE):</span>
      <button onClick={()=>setDeductions(d=>Math.round((d+0.5)*100)/100)} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontWeight:700,fontSize:12,cursor:"pointer"}}>+0.5</button>
      <button onClick={()=>setDeductions(d=>Math.round((d+1.0)*100)/100)} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #fca5a5",background:"#fef2f2",color:"#dc2626",fontWeight:700,fontSize:12,cursor:"pointer"}}>+1.0</button>
      <input type="number" min="0" step="0.1" value={deductions} onChange={e=>setDeductions(Math.max(0,parseFloat(e.target.value)||0))}
        style={{width:60,padding:"5px 6px",borderRadius:4,border:"2px solid #fca5a5",fontSize:14,fontWeight:800,textAlign:"center",color:"#dc2626"}}/>
      <button onClick={()=>setDeductions(d=>Math.max(0,Math.round((d-0.5)*100)/100))} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #d1d5db",background:"#f9fafb",color:"#6b7280",fontWeight:700,fontSize:12,cursor:"pointer"}}>-0.5</button>
      <button onClick={()=>setDeductions(0)} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #d1d5db",background:"#f9fafb",color:"#6b7280",fontWeight:600,fontSize:10,cursor:"pointer"}}>Reset</button>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
      <span style={{fontSize:screen.mobile?11:13,fontWeight:700,color:"#22221C"}}>Extra Punkte:</span>
      <button onClick={()=>setExtraPoints(d=>Math.round((d+0.5)*100)/100)} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #DEE2E6",background:"#f0f1f2",color:"#22221C",fontWeight:700,fontSize:12,cursor:"pointer"}}>+0.5</button>
      <button onClick={()=>setExtraPoints(d=>Math.round((d+1.0)*100)/100)} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #DEE2E6",background:"#f0f1f2",color:"#22221C",fontWeight:700,fontSize:12,cursor:"pointer"}}>+1.0</button>
      <input type="number" min="0" step="0.1" value={extraPoints} onChange={e=>setExtraPoints(Math.max(0,parseFloat(e.target.value)||0))}
        style={{width:60,padding:"5px 6px",borderRadius:4,border:"2px solid #DEE2E6",fontSize:14,fontWeight:800,textAlign:"center",color:"#22221C"}}/>
      <button onClick={()=>setExtraPoints(d=>Math.max(0,Math.round((d-0.5)*100)/100))} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #d1d5db",background:"#f9fafb",color:"#6b7280",fontWeight:700,fontSize:12,cursor:"pointer"}}>-0.5</button>
      <button onClick={()=>setExtraPoints(0)} style={{padding:"3px 8px",borderRadius:4,border:"1px solid #d1d5db",background:"#f9fafb",color:"#6b7280",fontWeight:600,fontSize:10,cursor:"pointer"}}>Reset</button>
    </div>
    <div style={{background:"#f0f1f2",borderRadius:8,border:"2px solid #22221C",padding:"8px 16px",marginLeft:screen.mobile?0:"auto",width:screen.mobile?"100%":"auto",textAlign:"center"}}>
      <div style={{fontSize:11,color:"#22221C",fontWeight:500,lineHeight:1.8}}>
        <span style={{color:"#059669",fontWeight:700}}>{tes.toFixed(2)}</span>
        <span> + </span>
        <span style={{color:"#3b82f6",fontWeight:700}}>{pcsTotal.toFixed(2)}</span>
        {deductions>0&&<><span> - </span><span style={{color:"#dc2626",fontWeight:700}}>{deductions.toFixed(2)}</span></>}
        {extraPoints>0&&<><span> + </span><span style={{color:"#059669",fontWeight:700}}>{extraPoints.toFixed(2)}</span></>}
        <span> = </span>
      </div>
      <span style={{fontSize:22,fontWeight:800,color:"#059669"}}>{totalScore.toFixed(2)}</span>
    </div>
  </div>
</div>

          {/* Legend */}
          <div style={{marginTop:12,display:"flex",gap:12,flexWrap:"wrap",fontSize:10,color:"#6b7280"}}>
            {types.map(t=><span key={t.code}><strong>{t.code}</strong> = {t.label}</span>)}
          </div>

          <div style={{marginTop:10,textAlign:"center",color:"#9ca3af",fontSize:10}}>
            RollArt Content Sheet 2026 — Offizielle World Skate Werte — Artistic Roller Skating
          </div>
        </div>}
      </div>
    );
  }

  // SKATE-IQ-Integration: der Rechner läuft hier vollständig im Browser ohne
  // eigenen Server. Der Kern (Content Sheets, Werte, PDF-Export) braucht kein
  // Konto – Speichern/Verlauf/KI-Coach bleiben Konto-Funktionen.
  const STATIC_EMBED = true;
  function Root() {
    const auth = useAuth();
    if (!auth?.user && !STATIC_EMBED) return <LoginScreen />;
    return <App />;
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AuthProvider><Root/></AuthProvider>);
  <\/script>
</body>
</html>
`;function pi(){let{plan:e,addonCalc:t,setAddonCalc:n}=N();return Ur(e,`tools.calculator`)||t?(0,M.jsxs)(`div`,{className:`space-y-3 -mx-3 sm:mx-0`,children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 px-3 sm:px-0`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h1`,{className:`text-xl font-extrabold`,children:A(`calc.title`)}),(0,M.jsx)(`p`,{className:`text-xs ink-3`,children:A(`calc.verified`)})]}),(0,M.jsx)(`span`,{className:`chip`,children:A(`calc.addon`)})]}),(0,M.jsx)(`iframe`,{srcDoc:fi,title:A(`calc.title`),className:`w-full rounded-xl border`,style:{borderColor:`var(--border)`,height:`calc(100vh - 160px)`,minHeight:560,background:`#fff`},sandbox:`allow-scripts allow-same-origin allow-downloads allow-modals allow-popups`})]}):(0,M.jsx)(`div`,{className:`max-w-xl mx-auto mt-10`,children:(0,M.jsxs)(`div`,{className:`price-card featured text-center`,children:[(0,M.jsx)(Kr,{children:A(`calc.addon`)}),(0,M.jsx)(`h1`,{className:`text-2xl font-black`,children:A(`calc.title`)}),(0,M.jsx)(`div`,{className:`price-num text-grad mt-2`,children:A(`calc.price`)}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-3`,children:A(`calc.pitch`)}),(0,M.jsxs)(`ul`,{className:`plist text-left mx-auto`,children:[(0,M.jsx)(`li`,{children:A(`calc.f1`)}),(0,M.jsx)(`li`,{children:A(`calc.f2`)}),(0,M.jsx)(`li`,{children:A(`calc.f3`)}),(0,M.jsx)(`li`,{children:A(`calc.f4`)})]}),(0,M.jsx)(`button`,{className:`btn btn-primary w-full mt-5`,onClick:()=>n(!0),children:A(`calc.activate`)}),(0,M.jsxs)(`p`,{className:`text-[11px] ink-3 mt-2`,children:[A(`calc.included`),` · `,A(`pricing.demoDisclaimer`)]})]})})}function mi(e){let t=[];if(e.percentileNow!=null&&e.percentilePrev!=null&&Math.abs(e.percentileNow-e.percentilePrev)>=3){let n=e.percentileNow>e.percentilePrev;t.push({key:n?`insight.percentileUp`:`insight.percentileDown`,params:{from:e.percentilePrev,to:e.percentileNow},tone:n?`positive`:`attention`,evidence:{from:e.percentilePrev,to:e.percentileNow}})}if(e.gapToTop10!=null&&t.push(e.gapToTop10>0?{key:`insight.gapTop10`,params:{gap:tr(e.gapToTop10),metric:e.metricLabel},tone:`neutral`,evidence:{gap:e.gapToTop10}}:{key:`insight.top10Reached`,params:{},tone:`positive`,evidence:{gap:e.gapToTop10}}),e.lastValues.length>=4){let n=e.lastValues.slice(-4),r=n.reduce((e,t)=>e+t,0)/4,i=Math.sqrt(n.reduce((e,t)=>e+(t-r)**2,0)/4)/(r||1);i<=.05&&t.push({key:`insight.stable4`,params:{},tone:`positive`,evidence:{cv:tr(i*100)}})}if(e.spi&&e.spi.confidence!==`low`){let n=e.spi.contributions.find(e=>e.dimension===`developmentRate`);n&&n.score>=60&&t.push({key:`insight.developing`,params:{score:n.score},tone:`positive`,evidence:{score:n.score}})}return e.countryTop25Count!=null&&e.countryLabel&&e.categoryLabel&&t.push({key:`insight.countryTop25`,params:{n:e.countryTop25Count,country:e.countryLabel,category:e.categoryLabel},tone:`neutral`,evidence:{n:e.countryTop25Count}}),t}var I={l:44,r:12,t:10,b:22};function hi({series:e,corridor:t,height:n=240,fmtY:r,fmtX:i}){let a=n,o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null),{xs:l,ys:u}=(0,_.useMemo)(()=>{let n=e.flatMap(e=>e.pts.map(e=>e.x)),r=e.flatMap(e=>e.pts.map(e=>e.y));t&&r.push(t.lo,t.hi);let i=Math.min(...n),o=Math.max(...n),s=Math.min(...r),c=Math.max(...r),l=(c-s)*.08||1;return{xs:e=>I.l+(e-i)/Math.max(1,o-i)*(720-I.l-I.r),ys:e=>I.t+(1-(e-(s-l))/(c+l-(s-l)))*(a-I.t-I.b)}},[e,t,a]);if(!e.length||e.every(e=>!e.pts.length))return null;let d=e.flatMap(e=>e.pts.map(t=>({s:e,pt:t}))),f=(0,_.useMemo)(()=>{let n=e.flatMap(e=>e.pts.map(e=>e.y));t&&n.push(t.lo,t.hi);let r=Math.min(...n),i=Math.max(...n);return Array.from({length:5},(e,t)=>r+t*(i-r)/4)},[e,t]);return(0,M.jsxs)(`div`,{children:[e.length>=2&&(0,M.jsx)(`div`,{className:`flex flex-wrap gap-3 mb-1 text-xs ink-2`,children:e.map(e=>(0,M.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,M.jsx)(`span`,{style:{width:14,height:0,borderTop:`2px ${e.dash?`dashed`:`solid`} ${e.color}`}}),e.name]},e.name))}),(0,M.jsxs)(`svg`,{ref:o,viewBox:`0 0 720 ${a}`,className:`w-full select-none`,role:`img`,onMouseMove:e=>{let t=o.current;if(!t)return;let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/n.width*720,i=(e.clientY-n.top)/n.height*a,s=null;for(let{s:e,pt:t}of d){let n=Math.hypot(l(t.x)-r,u(t.y)-i);(!s||n<s.d)&&(s={d:n,s:e,pt:t})}s&&s.d<40?c({sx:l(s.pt.x),sy:u(s.pt.y),pt:s.pt,s:s.s}):c(null)},onMouseLeave:()=>c(null),children:[f.map((e,t)=>(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`line`,{x1:I.l,x2:720-I.r,y1:u(e),y2:u(e),stroke:`var(--grid)`,strokeWidth:1}),(0,M.jsx)(`text`,{x:I.l-6,y:u(e)+3.5,textAnchor:`end`,fontSize:10,fill:`var(--ink-3)`,children:r(e)})]},t)),t&&(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`rect`,{x:I.l,width:720-I.l-I.r,y:u(t.hi),height:Math.max(2,u(t.lo)-u(t.hi)),fill:`var(--seq-200)`,opacity:.35}),(0,M.jsx)(`line`,{x1:I.l,x2:720-I.r,y1:u(t.mid),y2:u(t.mid),stroke:`var(--seq-600)`,strokeWidth:1,strokeDasharray:`4 4`,opacity:.7}),(0,M.jsx)(`text`,{x:720-I.r,y:u(t.hi)-4,textAnchor:`end`,fontSize:10,fill:`var(--ink-3)`,children:t.label})]}),e.map(e=>(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`polyline`,{fill:`none`,stroke:e.color,strokeWidth:2,strokeDasharray:e.dash?`5 4`:void 0,points:e.pts.map(e=>`${l(e.x)},${u(e.y)}`).join(` `)}),e.pts.map((t,n)=>(0,M.jsx)(`circle`,{cx:l(t.x),cy:u(t.y),r:t.emphasis?5:3.2,fill:t.emphasis?e.color:`var(--surface-1)`,stroke:e.color,strokeWidth:2},n))]},e.name)),e[0].pts.length>1&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`text`,{x:I.l,y:a-6,fontSize:10,fill:`var(--ink-3)`,children:i(Math.min(...e.flatMap(e=>e.pts.map(e=>e.x))))}),(0,M.jsx)(`text`,{x:720-I.r,y:a-6,textAnchor:`end`,fontSize:10,fill:`var(--ink-3)`,children:i(Math.max(...e.flatMap(e=>e.pts.map(e=>e.x))))})]}),s&&(0,M.jsxs)(`g`,{pointerEvents:`none`,children:[(0,M.jsx)(`line`,{x1:s.sx,x2:s.sx,y1:I.t,y2:a-I.b,stroke:`var(--ink-3)`,strokeWidth:1,strokeDasharray:`3 3`}),(0,M.jsx)(`circle`,{cx:s.sx,cy:s.sy,r:5,fill:s.s.color,stroke:`var(--surface-1)`,strokeWidth:2}),(()=>{let e=s.pt.label??``,t=`${i(s.pt.x)} · ${r(s.pt.y)}`,n=Math.max(e.length,t.length)*5.6+16,a=Math.min(Math.max(s.sx-n/2,I.l),720-I.r-n),o=s.sy-44<I.t?s.sy+12:s.sy-44;return(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`rect`,{x:a,y:o,width:n,height:34,rx:6,fill:`var(--surface-1)`,stroke:`var(--border)`}),(0,M.jsx)(`text`,{x:a+8,y:o+14,fontSize:10.5,fontWeight:600,fill:`var(--ink-1)`,children:e}),(0,M.jsx)(`text`,{x:a+8,y:o+27,fontSize:10.5,fill:`var(--ink-2)`,children:t})]})})()]})]})]})}function gi({rows:e,fmt:t,max:n}){let r=n??Math.max(...e.map(e=>Math.abs(e.value)),1e-9);return(0,M.jsx)(`div`,{className:`space-y-2`,children:e.map((e,n)=>(0,M.jsxs)(`div`,{className:`grid grid-cols-[minmax(90px,160px)_1fr_auto] items-center gap-2 text-sm`,children:[(0,M.jsx)(`span`,{className:`truncate ink-2`,children:e.name}),(0,M.jsx)(`div`,{className:`h-3 rounded bg-[var(--surface-2)] overflow-hidden`,children:(0,M.jsx)(`div`,{className:`h-full rounded`,style:{width:`${Math.max(2,Math.abs(e.value)/r*100)}%`,background:e.color}})}),(0,M.jsxs)(`span`,{className:`tnum font-semibold whitespace-nowrap`,children:[t(e.value),e.note&&(0,M.jsxs)(`span`,{className:`ink-3 font-normal text-xs`,children:[` `,e.note]})]})]},n))})}function _i({rows:e}){return(0,M.jsx)(`div`,{className:`space-y-3`,children:e.map((e,t)=>(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,M.jsxs)(`span`,{className:`font-medium`,children:[e.label,` `,(0,M.jsxs)(`span`,{className:`ink-3 text-xs`,children:[`× `,e.weight.toFixed(2)]})]}),(0,M.jsx)(`span`,{className:`tnum font-semibold`,children:e.score.toFixed(0)})]}),(0,M.jsx)(`div`,{className:`h-2 mt-1 rounded bg-[var(--surface-2)]`,children:(0,M.jsx)(`div`,{className:`h-full rounded`,style:{width:`${e.score}%`,background:`var(--seq-400)`}})}),(0,M.jsx)(`div`,{className:`text-xs ink-3 mt-0.5`,children:e.explain})]},t))})}function vi(e,t){let n=e.categoryOf(t);if(!n)return{sport:``,discipline:``,category:t};let r=n.adapter.disciplines.find(e=>e.id===n.cat.disciplineId),i=n.cat.genderId?` `+A(`gender.${n.cat.genderId}`):``;return{sport:A(n.adapter.sport.nameKey),discipline:r?A(r.nameKey):``,category:A(n.cat.nameKey)+i}}function yi(e,t){let n=vi(e,t);return[n.discipline,n.category].filter(Boolean).join(` · `)}function bi(e){for(let t of Jn.all())if(t.categories.some(t=>t.id===e))return t.sport.id;return`artistic`}function xi(e){return new Date(e).toLocaleDateString(Or()===`de`?`de-DE`:`en-US`,{month:`short`,year:`numeric`})}function Si(){let e=[],t=Jn.enabled().length>1;for(let n of Jn.enabled())for(let r of n.categories){let i=n.disciplines.find(e=>e.id===r.disciplineId),a=r.genderId?` `+A(`gender.${r.genderId}`):``;e.push({id:r.id,disciplineId:r.disciplineId,label:()=>`${t?A(n.sport.nameKey)+` · `:``}${i?A(i.nameKey)+` · `:``}${A(r.nameKey)}${a}`})}return e}var Ci={"1:1":[1080,1080],"4:5":[1080,1350],"9:16":[1080,1920],"16:9":[1600,900]};function wi(e,t,n,r=`1:1`){let[i,a]=Ci[r],o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`),c=e.currentSeason(),l=e.positionOf(t.id,n,c),u=e.percentile(t.id,n,c),d=e.spi(t.id,n),f=e.pb(t.id,n),p=vi(e,n),m=e.country(t.countryCode),h=bi(n),g=e=>e==null?`–`:h===`speed`?(-e/1e3).toFixed(3)+` s`:j(e,2),_=s.createLinearGradient(0,0,i,a);_.addColorStop(0,`#101418`),_.addColorStop(1,`#1c2b3a`),s.fillStyle=_,s.fillRect(0,0,i,a),s.fillStyle=`#2a78d6`,s.fillRect(0,0,i,14);let v=i/2,y=a*.14;s.textAlign=`center`,s.fillStyle=`#9fb3c8`,s.font=`600 ${i*.026}px system-ui`,s.fillText(`${p.sport.toUpperCase()} · ${p.category.toUpperCase()}`,v,y),y+=i*.065,s.fillStyle=`#ffffff`,s.font=`900 ${i*.062}px system-ui`,s.fillText(t.displayName,v,y),y+=i*.05,s.fillStyle=`#c9d6e2`,s.font=`600 ${i*.034}px system-ui`,s.fillText(`${m?.flag??``}  ${m?A(m.nameKey):t.countryCode}`,v,y),y=a*.42;let b=(e,t,n=!1)=>{s.fillStyle=`#8ca2b8`,s.font=`600 ${i*.024}px system-ui`,s.fillText(e.toUpperCase(),v,y),y+=n?i*.085:i*.06,s.fillStyle=n?`#4ea1ff`:`#ffffff`,s.font=`900 ${n?i*.085:i*.052}px system-ui`,s.fillText(t,v,y),y+=i*.075};l&&b(A(`kpi.world`),`#${l.position}`,!0),u?.percentile!=null&&b(A(`kpi.percentile`),j(u.percentile,1)),d&&b(`SPI`,j(d.value,1)),f!=null&&b(A(`kpi.pb`),g(f)),s.fillStyle=`#6b7f93`,s.font=`600 ${i*.022}px system-ui`,s.fillText(A(`common.demoBadge`),v,a-i*.09),s.fillStyle=`#ffffff`,s.font=`900 ${i*.03}px system-ui`,s.fillText(`SKATE IQ`,v,a-i*.045);let x=document.createElement(`a`);x.download=`skateiq_${t.displayName.replace(/\s+/g,`_`)}_${r.replace(`:`,`x`)}.png`,x.href=o.toDataURL(`image/png`),x.click()}var Ti=[{key:`bench.group.top50`,group:{kind:`topN`,n:50}},{key:`bench.group.top25`,group:{kind:`topN`,n:25}},{key:`bench.group.top10`,group:{kind:`topN`,n:10}},{key:`bench.group.podium`,group:{kind:`podium`}}],Ei=[{key:`athlete.range.3m`,months:3},{key:`athlete.range.6m`,months:6},{key:`athlete.range.12m`,months:12},{key:`athlete.range.24m`,months:24},{key:`athlete.range.career`,months:null}];function Di(){let{id:e}=Et(),{store:t}=N(),n=e?t.athlete(e):void 0,r=n?t.categoriesOfAthlete(n.id):[],[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(2),[c,l]=(0,_.useState)(4),u=i??r[0],d=t.currentSeason(),f=(0,_.useMemo)(()=>{if(!n||!u)return null;let e=bi(u),r=t.positionOf(n.id,u,d),i=t.country(n.countryCode)?.continent,a=i?t.positionOf(n.id,u,d,{kind:`continent`,key:i}):null,s=t.positionOf(n.id,u,d,{kind:`country`,key:n.countryCode}),c=t.percentile(n.id,u,d),l=t.spi(n.id,u),f=t.devSeries(n.id,u),p=t.pb(n.id,u),m=t.seasonBest(n.id,u),h=t.trend12(n.id,u),g=t.corridorFor(u,d,{kind:`topN`,n:10}),_=t.benchmarkTarget(u,d,Ti[o].group),v=t.categoryOf(u),y=t.athletePerfs(n.id).filter(e=>e.ev.categoryId===u).at(-1)?.p??null,b=_==null?null:v.adapter.gapToTarget(y,m??p,_),x=t.benchmarkTarget(u,d,{kind:`topN`,n:10}),ee=t.athletePerfs(n.id).filter(e=>e.ev.categoryId===u).reverse(),te=v.adapter.deriveProfileMetrics(ee.map(e=>e.p)).find(e=>e.key===`consistency`)?.value??null,ne=t.b.seasons[t.b.seasons.findIndex(e=>e.id===d)-1]?.id,S=ne?t.percentile(n.id,u,ne):null,re=mi({percentileNow:c?.percentile??null,percentilePrev:S?.percentile??null,gapToTop10:x!=null&&m!=null?Math.max(0,+(x-m).toFixed(2)):null,metricLabel:A(e===`speed`?`metric.unit.seconds`:`metric.unit.points`),lastValues:f.map(e=>e.value),spi:l});return{sportId:e,world:r,contPos:a,natPos:s,pct:c,spi:l,series:f,pb:p,sb:m,trend:h,corridorT10:g,tgt:_,gap:b,gapT10:x!=null&&(m??p)!=null?+(x-(m??p)).toFixed(2):null,results:ee,consistency:te,insights:re,info:v}},[n,u,d,t,o]);if(!n||!f)return(0,M.jsx)(P,{children:A(`common.notFound`)});let p=t.country(n.countryCode),m=vi(t,u),h=e=>ti(e,f.sportId);return(0,M.jsxs)(`div`,{className:`space-y-5`,children:[(0,M.jsxs)(`div`,{className:`hero-band p-5 sm:p-7`,id:`sec-overview`,children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,M.jsx)(`div`,{className:`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-none`,style:{background:`color-mix(in srgb, var(--surface-2) 70%, transparent)`,border:`1px solid var(--border)`},children:p?.flag}),(0,M.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,M.jsx)(`h1`,{className:`text-3xl sm:text-4xl font-black tracking-tight`,children:n.displayName}),(0,M.jsxs)(`div`,{className:`text-sm ink-2 mt-1`,children:[p&&A(p.nameKey),` · `,m.sport,` · `,m.discipline,` · `,(0,M.jsx)(`b`,{className:`ink-2`,children:m.category}),n.clubId&&(0,M.jsxs)(M.Fragment,{children:[` · `,t.club(n.clubId)?.name]})]}),r.length>1&&(0,M.jsx)(`div`,{className:`flex gap-1.5 mt-2.5 flex-wrap`,children:r.map(e=>(0,M.jsx)(`button`,{className:`chip ${e===u?`font-bold`:``}`,style:e===u?{borderColor:`var(--accent)`,color:`var(--seq-600)`}:void 0,onClick:()=>a(e),children:yi(t,e)},e))})]}),(0,M.jsxs)(`button`,{className:`btn btn-primary text-sm`,onClick:()=>wi(t,n,u),children:[A(`athlete.share`),` ⬇`]})]}),(0,M.jsx)(`div`,{className:`tabbar mt-5 -mb-1`,children:[[`sec-overview`,`athlete.tab.overview`],[`sec-development`,`athlete.tab.development`],[`sec-benchmarks`,`athlete.tab.benchmarks`],[`sec-results`,`athlete.tab.results`]].map(([e,t],r)=>(0,M.jsx)(`a`,{href:`#/athlete/${n.id}`,className:`tab ${r===0?`on`:``}`,onClick:t=>{t.preventDefault(),document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})},children:A(t)},e))})]}),(0,M.jsxs)(P,{children:[(0,M.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5`,children:[(0,M.jsx)(F,{label:A(`kpi.world`),value:f.world?`#${f.world.position}`:A(`common.na`),sub:f.world?`/ ${f.world.of}`:void 0}),(0,M.jsx)(F,{label:A(`kpi.percentile`),value:f.pct?.percentile==null?A(`common.na`):j(f.pct.percentile,1),sub:f.pct?.percentile==null&&f.pct?A(`bench.tooFewAthletes`,{n:f.pct.n}):`${A(`common.n`)}=${f.pct?.n??0}`}),(0,M.jsx)(F,{label:A(`kpi.spi`),value:f.spi?j(f.spi.value,1):A(`common.na`),sub:f.spi?A(`athlete.confidence.${f.spi.confidence}`):void 0}),(0,M.jsx)(F,{label:A(`kpi.pb`),value:h(f.pb)}),(0,M.jsx)(F,{label:A(`kpi.trend12`),value:f.trend==null?A(`common.na`):(f.trend>=0?`+`:`−`)+ei(f.trend,f.sportId),tone:f.trend==null?void 0:f.trend>=0?`good`:`bad`}),(0,M.jsx)(F,{label:A(`kpi.continent`),value:f.contPos?`#${f.contPos.position}`:A(`common.na`)}),(0,M.jsx)(F,{label:A(`kpi.national`),value:f.natPos?`#${f.natPos.position}`:A(`common.na`)}),(0,M.jsx)(F,{label:A(`kpi.sb`),value:h(f.sb)}),(0,M.jsx)(F,{label:A(`kpi.consistency`),value:f.consistency==null?A(`common.na`):j(f.consistency,0)}),(0,M.jsx)(F,{label:A(`kpi.gapTop10`),value:f.gapT10==null?A(`common.na`):f.gapT10<=0?`✓`:ei(f.gapT10,f.sportId),tone:f.gapT10!=null&&f.gapT10<=0?`good`:void 0})]}),n.profileVisibility!==`public`&&(0,M.jsx)(`p`,{className:`text-xs ink-3 mt-2`,children:A(`athlete.privacyNote`)})]}),f.insights.length>0&&(0,M.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5`,children:f.insights.map((e,t)=>(0,M.jsxs)(P,{className:`!p-3 text-sm flex items-start gap-2`,children:[(0,M.jsx)(`span`,{style:{color:e.tone===`positive`?`var(--good)`:e.tone===`attention`?`var(--serious)`:`var(--ink-3)`},children:e.tone===`positive`?`▲`:e.tone===`attention`?`●`:`◆`}),(0,M.jsx)(`span`,{children:A(e.key,e.params)})]},t))}),(0,M.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-5`,id:`sec-development`,children:[(0,M.jsxs)(P,{children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-2 mb-3`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h2`,{className:`text-base font-bold tracking-tight`,children:A(`athlete.development`)}),f.corridorT10&&(0,M.jsx)(`p`,{className:`text-xs ink-3 mt-0.5`,children:A(`athlete.corridor`,{group:A(`bench.group.top10`),n:f.corridorT10.n})})]}),(0,M.jsx)(`div`,{className:`tabbar`,children:Ei.map((e,t)=>(0,M.jsx)(`button`,{className:`tab !px-2.5 !py-1 !text-xs ${t===c?`on`:``}`,onClick:()=>l(t),children:A(e.key)},e.key))})]}),(0,M.jsx)(Zr,{feature:`athlete.history`,children:(()=>{let e=Ei[c].months,n=e==null?null:new Date(new Date(t.today).getTime()-e*30.44*864e5).toISOString().slice(0,10),r=f.series.filter(e=>n==null||e.date>=n);return r.length>=2?(0,M.jsx)(hi,{series:[{name:A(f.info.adapter.metrics.find(e=>e.isPrimary).nameKey),color:`var(--series-1)`,pts:r.map(e=>({x:new Date(e.date).getTime(),y:e.value,label:e.competition,emphasis:e.level===`world`||e.level===`continental`}))}],corridor:f.corridorT10?{...f.corridorT10,label:A(`bench.group.top10`)}:null,fmtY:e=>h(e),fmtX:e=>xi(new Date(e).toISOString())}):(0,M.jsx)(`p`,{className:`ink-3 text-sm py-8 text-center`,children:A(`athlete.rangeEmpty`)})})()})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{sub:A(`athlete.spi.explain`),children:A(`athlete.spi.why`)}),(0,M.jsx)(Zr,{feature:`athlete.spi`,children:f.spi?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`hero-num text-5xl font-black mb-3`,style:{color:`var(--accent)`},children:[j(f.spi.value,1),(0,M.jsxs)(`span`,{className:`text-sm font-semibold ink-3 ml-2`,children:[`/ 100 · `,A(`athlete.confidence.${f.spi.confidence}`)]})]}),(0,M.jsx)(_i,{rows:f.spi.contributions.map(e=>({label:A(`spi.dim.${e.dimension}`),score:e.score,weight:e.weight,explain:A(e.explainKey,Object.fromEntries(e.inputs.map(e=>[e.key,j(e.value,2)])))}))})]}):(0,M.jsx)(`p`,{className:`ink-3 text-sm`,children:A(`common.na`)})})]})]}),(0,M.jsxs)(P,{className:`scroll-mt-20`,children:[(0,M.jsx)(`div`,{id:`sec-benchmarks`}),(0,M.jsx)(Gr,{children:A(`athlete.whatittakes`)}),(0,M.jsxs)(Zr,{feature:`athlete.whatItTakes`,children:[(0,M.jsx)(`div`,{className:`flex gap-1.5 flex-wrap mb-4`,children:Ti.map((e,t)=>(0,M.jsx)(`button`,{className:`chip`,onClick:()=>s(t),style:t===o?{borderColor:`var(--accent)`,color:`var(--accent)`,fontWeight:700}:void 0,children:A(e.key)},e.key))}),f.gap&&f.tgt!=null?(0,M.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-2.5`,children:[(0,M.jsx)(F,{label:A(`athlete.current`),value:h(f.gap.current)}),(0,M.jsx)(F,{label:`${A(`athlete.benchmark`)} · ${A(Ti[o].key)}`,value:h(f.gap.target)}),(0,M.jsx)(F,{label:A(`athlete.gap`),value:f.gap.gap<=0?`✓`:ei(f.gap.gap,f.sportId),tone:f.gap.gap<=0?`good`:void 0}),f.gap.breakdown&&f.gap.gap>0&&(0,M.jsxs)(`div`,{className:`sm:col-span-3 card p-4`,children:[(0,M.jsx)(`div`,{className:`seclabel mb-3`,children:A(`athlete.breakdown`)}),(0,M.jsxs)(`div`,{className:`flex items-center justify-between text-sm mb-1`,children:[(0,M.jsxs)(`span`,{className:`ink-2`,children:[A(`athlete.current`),` `,(0,M.jsx)(`b`,{className:`tnum ink-1`,children:h(f.gap.current)})]}),(0,M.jsxs)(`span`,{className:`ink-2`,children:[A(`athlete.benchmark`),` `,(0,M.jsx)(`b`,{className:`tnum ink-1`,children:h(f.gap.target)})]})]}),(0,M.jsx)(`div`,{className:`meter mb-4`,children:(0,M.jsx)(`i`,{style:{width:`${Math.max(4,Math.min(100,f.gap.current/f.gap.target*100))}%`}})}),f.gap.breakdown.map(e=>{let t=Math.max(0,Math.min(100,100-e.gap/Math.max(f.gap.gap,1e-9)*100));return(0,M.jsxs)(`div`,{className:`py-1.5`,children:[(0,M.jsxs)(`div`,{className:`flex justify-between text-sm mb-1`,children:[(0,M.jsx)(`span`,{className:`ink-2`,children:A(`metric.${e.metricKey===`timeMs`?`timeMs`:e.metricKey}`)}),(0,M.jsx)(`span`,{className:`tnum font-semibold`,children:e.gap>0?ei(e.gap,f.sportId):`✓`})]}),(0,M.jsx)(`div`,{className:`meter`,children:(0,M.jsx)(`i`,{style:{width:`${e.gap>0?t:100}%`}})})]},e.metricKey)}),f.gap.largestOpportunityKey&&(0,M.jsxs)(`div`,{className:`text-sm mt-2.5 font-semibold`,style:{color:`var(--seq-600)`},children:[A(`athlete.largestOpportunity`),`: `,A(`metric.${f.gap.largestOpportunityKey}`)]})]})]}):(0,M.jsx)(`p`,{className:`ink-3 text-sm`,children:A(`common.na`)})]})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(`div`,{id:`sec-results`}),(0,M.jsx)(Gr,{children:A(`athlete.results`)}),(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:A(`common.date`)}),(0,M.jsx)(`th`,{children:A(`common.competition`)}),(0,M.jsx)(`th`,{children:A(`common.level`)}),(0,M.jsx)(`th`,{children:A(`common.placement`)}),(0,M.jsx)(`th`,{children:A(`board.value`)})]})}),(0,M.jsx)(`tbody`,{children:f.results.map(({p:e,ev:t,cmp:n})=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`whitespace-nowrap`,children:xi(n.startDate)}),(0,M.jsx)(`td`,{children:n.name}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`span`,{className:`chip`,children:n.level})}),(0,M.jsxs)(`td`,{className:`tnum`,children:[e.placement??A(`common.na`),` / `,t.fieldSize]}),(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:h(f.info.adapter.primaryValue(e))})]},e.id))})]})}),(0,M.jsx)($r,{})]}),f.natPos&&(0,M.jsxs)(P,{children:[(0,M.jsxs)(Gr,{children:[p?.flag,` `,A(`kpi.national`)]}),(0,M.jsx)(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:t.ranking(u,d,{kind:`country`,key:n.countryCode}).slice(0,8).map(e=>(0,M.jsxs)(`span`,{className:`chip`,children:[`#`,e.position,` `,(0,M.jsx)(Qr,{id:e.athlete.id,name:e.athlete.displayName})]},e.athlete.id))})]})]})}var Oi=[`var(--series-1)`,`var(--series-2)`,`var(--series-3)`,`var(--series-4)`,`var(--series-5)`];function ki(){let{store:e}=N(),t=Si(),[n,r]=(0,_.useState)(t[0].id),i=e.currentSeason(),a=e.ranking(n,i),[o,s]=(0,_.useState)(()=>a.slice(0,2).map(e=>e.athlete.id)),c=bi(n),l=(0,_.useMemo)(()=>o.map(t=>{let r=e.athlete(t);return{a:r,world:e.positionOf(t,n,i),nat:e.positionOf(t,n,i,{kind:`country`,key:r.countryCode}),spi:e.spi(t,n),pb:e.pb(t,n),sb:e.seasonBest(t,n),trend:e.trend12(t,n),series:e.devSeries(t,n)}}),[o,n,i,e]),u=(0,_.useMemo)(()=>{if(o.length!==2)return null;let[t,r]=o,i=0,a=0,s=new Map;for(let t of e.b.performances)o.includes(t.athleteId)&&t.placement!=null&&e.event(t.eventId).categoryId===n&&(s.has(t.eventId)||s.set(t.eventId,new Map),s.get(t.eventId).set(t.athleteId,t.placement));for(let e of s.values())e.size===2&&(e.get(t)<e.get(r)?i++:a++);return{xw:i,yw:a,meetings:i+a}},[o,n,e]),d=`rounded-lg border px-2 py-1.5 text-sm`,f={borderColor:`var(--border)`,background:`var(--surface-1)`},p=[[A(`kpi.world`),e=>e.world?`#${e.world.position} / ${e.world.of}`:A(`common.na`)],[A(`kpi.national`),e=>e.nat?`#${e.nat.position}`:A(`common.na`)],[`SPI`,e=>e.spi?j(e.spi.value,1):A(`common.na`)],[A(`kpi.pb`),e=>ti(e.pb,c)],[A(`kpi.sb`),e=>ti(e.sb,c)],[A(`kpi.trend12`),e=>e.trend==null?A(`common.na`):(e.trend>=0?`+`:`−`)+ei(e.trend,c)],[A(`kpi.percentile`),e=>e.world?.percentile==null?A(`common.na`):j(e.world.percentile,1)]];return(0,M.jsxs)(`div`,{className:`space-y-4`,children:[(0,M.jsx)(Gr,{children:A(`compare.title`)}),(0,M.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,M.jsx)(`select`,{className:d,style:f,value:n,onChange:t=>{r(t.target.value),s(e.ranking(t.target.value,i).slice(0,2).map(e=>e.athlete.id))},children:t.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label()},e.id))}),o.map((e,t)=>(0,M.jsx)(`select`,{className:d,style:{...f,borderColor:Oi[t]},value:e,onChange:e=>s(o.map((n,r)=>r===t?e.target.value:n)),children:a.map(e=>(0,M.jsx)(`option`,{value:e.athlete.id,children:e.athlete.displayName},e.athlete.id))},t)),o.length<5&&(0,M.jsxs)(`button`,{className:`btn text-sm`,onClick:()=>{let e=a.find(e=>!o.includes(e.athlete.id));e&&s([...o,e.athlete.id])},children:[`+ `,A(`compare.add`)]}),o.length>2&&(0,M.jsx)(`button`,{className:`btn text-sm`,onClick:()=>s(o.slice(0,-1)),children:`−`})]}),(0,M.jsx)(Zr,{feature:`athlete.compare`,children:(0,M.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-5`,children:[(0,M.jsxs)(P,{children:[(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:A(`compare.metric`)}),l.map((t,n)=>(0,M.jsxs)(`th`,{children:[(0,M.jsx)(`span`,{className:`inline-block w-2.5 h-2.5 rounded-full mr-1.5`,style:{background:Oi[n]}}),(0,M.jsx)(Qr,{id:t.a.id,name:t.a.displayName,flag:e.country(t.a.countryCode)?.flag})]},t.a.id))]})}),(0,M.jsxs)(`tbody`,{children:[p.map(([e,t])=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`ink-2`,children:e}),l.map(e=>(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:t(e)},e.a.id))]},e)),u&&(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`ink-2`,children:A(`compare.h2h`)}),(0,M.jsx)(`td`,{className:`tnum font-bold`,children:u.xw}),(0,M.jsx)(`td`,{className:`tnum font-bold`,children:u.yw})]})]})]})}),(0,M.jsx)($r,{})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`athlete.development`)}),(0,M.jsx)(hi,{series:l.map((e,t)=>({name:e.a.displayName,color:Oi[t],pts:e.series.map(e=>({x:new Date(e.date).getTime(),y:e.value,label:e.competition,emphasis:e.level===`world`}))})),fmtY:e=>ti(e,c),fmtX:e=>xi(new Date(e).toISOString())})]})]})})]})}function Ai(){let{store:e}=N(),t=(0,_.useMemo)(()=>[...e.b.competitions].sort((e,t)=>t.startDate.localeCompare(e.startDate)).map(t=>({c:t,s:e.competitionStrength(t.id)})),[e]);return(0,M.jsxs)(`div`,{className:`space-y-4`,children:[(0,M.jsx)(Gr,{children:A(`comp.title`)}),(0,M.jsxs)(P,{children:[(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:A(`common.date`)}),(0,M.jsx)(`th`,{children:A(`common.competition`)}),(0,M.jsx)(`th`,{children:A(`common.level`)}),(0,M.jsx)(`th`,{children:A(`comp.strength`)})]})}),(0,M.jsx)(`tbody`,{children:t.map(({c:e,s:t})=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`whitespace-nowrap`,children:xi(e.startDate)}),(0,M.jsx)(`td`,{children:(0,M.jsx)(In,{to:`/competition/${e.id}`,className:`font-semibold hover:underline`,children:e.name})}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`span`,{className:`chip`,children:e.level})}),(0,M.jsx)(`td`,{children:(0,M.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,M.jsx)(`div`,{className:`w-24 h-2 rounded bg-[var(--surface-2)]`,children:(0,M.jsx)(`div`,{className:`h-full rounded`,style:{width:`${t.index}%`,background:`var(--seq-400)`}})}),(0,M.jsx)(`span`,{className:`tnum text-sm font-semibold`,children:j(t.index,0)})]})})]},e.id))})]})}),(0,M.jsx)($r,{})]})]})}function ji(){let{id:e}=Et(),{store:t}=N(),n=e?t.competition(e):void 0,r=(0,_.useMemo)(()=>{if(!n)return null;let e=t.competitionStrength(n.id),r=n.startDate<=t.today;return{strength:e,past:r,sections:t.b.events.filter(e=>e.competitionId===n.id).map(e=>{let i=t.b.performances.filter(t=>t.eventId===e.id).sort((e,t)=>(e.placement??999)-(t.placement??999)),a=bi(e.categoryId),o=t.categoryOf(e.categoryId),s=t.ranking(e.categoryId,n.seasonId);return{ev:e,sportId:a,rows:i.map(n=>{let i=t.devSeries(n.athleteId,e.categoryId),a=o.adapter.primaryValue(n);return{p:n,v:a,isPB:r&&a!=null&&i.length>0&&a>=Math.max(...i.map(e=>e.value))-1e-9,worldPos:s.find(e=>e.athlete.id===n.athleteId)?.position??null}})}})}},[n,t]);return!n||!r?(0,M.jsx)(P,{children:A(`common.notFound`)}):(0,M.jsxs)(`div`,{className:`space-y-5`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h1`,{className:`text-2xl font-extrabold`,children:n.name}),(0,M.jsxs)(`p`,{className:`ink-3 text-sm`,children:[xi(n.startDate),` · `,(0,M.jsx)(`span`,{className:`chip`,children:n.level}),` · `,r.past?A(`comp.after`):A(`comp.before`)]})]}),(0,M.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-2.5`,children:[(0,M.jsx)(F,{label:A(`comp.strength`),value:j(r.strength.index,0),sub:`/ 100`}),r.strength.factors.filter(e=>[`rankedAthletes`,`top10Entrants`,`top25Entrants`].includes(e.key)).map(e=>(0,M.jsx)(F,{label:e.key===`rankedAthletes`?A(`comp.participants`):e.key===`top10Entrants`?A(`kpi.top10`):A(`kpi.top25`),value:e.value},e.key))]}),r.sections.map(({ev:e,sportId:n,rows:i})=>(0,M.jsxs)(P,{children:[(0,M.jsxs)(Gr,{children:[yi(t,e.categoryId),` `,(0,M.jsxs)(`span`,{className:`chip ml-2`,children:[i.length,` `,A(`comp.participants`)]})]}),(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:r.past?A(`common.placement`):``}),(0,M.jsx)(`th`,{children:A(`board.athlete`)}),(0,M.jsx)(`th`,{children:A(`common.country`)}),(0,M.jsx)(`th`,{children:A(`kpi.world`)}),(0,M.jsx)(`th`,{children:r.past?A(`board.value`):A(`kpi.sb`)}),(0,M.jsx)(`th`,{})]})}),(0,M.jsx)(`tbody`,{children:i.slice(0,20).map(({p:i,v:a,isPB:o,worldPos:s})=>{let c=t.athlete(i.athleteId);return(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`tnum font-bold w-10`,children:r.past?i.placement&&i.placement<=3?[`🥇`,`🥈`,`🥉`][i.placement-1]:i.placement:``}),(0,M.jsx)(`td`,{children:(0,M.jsx)(Qr,{id:c.id,name:c.displayName})}),(0,M.jsxs)(`td`,{children:[t.country(c.countryCode)?.flag,` `,c.countryCode]}),(0,M.jsx)(`td`,{className:`tnum ink-2`,children:s?`#${s}`:A(`common.na`)}),(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:r.past?ti(a,n):ti(t.seasonBest(c.id,e.categoryId),n)}),(0,M.jsx)(`td`,{children:o&&(0,M.jsx)(`span`,{className:`chip`,style:{borderColor:`var(--good)`,color:`var(--good)`},children:`PB`})})]},i.id)})})]})})]},e.id)),(0,M.jsx)($r,{})]})}function Mi(){let{store:e}=N(),[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)(`GER`),[a,o]=(0,_.useState)(`ITA`),s=e.countryMatrix(t||void 0),c=e.federationStats(r,t||void 0),l=e.federationStats(a,t||void 0),u=`rounded-lg border px-2 py-1.5 text-sm`,d={borderColor:`var(--border)`,background:`var(--surface-1)`},f=[{label:A(`countries.eliteDepth`),va:c.top25,vb:l.top25},{label:A(`kpi.top10`),va:c.top10,vb:l.top10},{label:A(`kpi.medals`),va:c.podiums,vb:l.podiums},{label:A(`kpi.avgSpi`),va:c.avgSpi??0,vb:l.avgSpi??0},{label:A(`countries.col.dev`),va:c.development??0,vb:l.development??0},{label:A(`countries.representation`),va:c.athletes,vb:l.athletes},{label:A(`fed.pipeline`),va:c.emerging,vb:l.emerging}];return(0,M.jsxs)(`div`,{className:`space-y-5`,children:[(0,M.jsx)(Gr,{children:A(`countries.title`)}),(0,M.jsx)(`div`,{className:`flex gap-2 flex-wrap`,children:(0,M.jsxs)(`select`,{className:u,style:d,value:t,onChange:e=>n(e.target.value),children:[(0,M.jsxs)(`option`,{value:``,children:[A(`common.all`),` `,A(`common.sport`)]}),(0,M.jsx)(`option`,{value:`artistic`,children:A(`sport.artistic`)}),(0,M.jsx)(`option`,{value:`speed`,children:A(`sport.speed`)})]})}),(0,M.jsxs)(Zr,{feature:`federation.countryCompare`,children:[(0,M.jsxs)(P,{children:[(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:A(`common.country`)}),(0,M.jsx)(`th`,{children:A(`countries.col.athletes`)}),(0,M.jsx)(`th`,{children:A(`kpi.top10`)}),(0,M.jsx)(`th`,{children:A(`kpi.top25`)}),(0,M.jsx)(`th`,{children:A(`kpi.medals`)}),(0,M.jsx)(`th`,{children:A(`kpi.avgSpi`)}),(0,M.jsx)(`th`,{children:A(`countries.col.dev`)})]})}),(0,M.jsx)(`tbody`,{children:s.map(e=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`font-semibold whitespace-nowrap`,children:(0,M.jsxs)(`a`,{href:`#/federation/${e.country.code}`,className:`hover:underline`,children:[e.country.flag,` `,A(e.country.nameKey)]})}),(0,M.jsx)(`td`,{className:`tnum`,children:e.s.athletes}),(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:e.s.top10}),(0,M.jsx)(`td`,{className:`tnum`,children:e.s.top25}),(0,M.jsx)(`td`,{className:`tnum`,children:e.s.podiums}),(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:e.s.avgSpi==null?A(`common.na`):j(e.s.avgSpi,1)}),(0,M.jsx)(`td`,{className:`tnum`,style:{color:(e.s.development??50)>=50?`var(--good)`:`var(--critical)`},children:e.s.development==null?A(`common.na`):j(e.s.development,0)})]},e.country.code))})]})}),(0,M.jsx)($r,{})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`countries.gap`)}),(0,M.jsxs)(`div`,{className:`flex gap-2 items-center mb-4 flex-wrap`,children:[(0,M.jsx)(`select`,{className:u,style:d,value:r,onChange:e=>i(e.target.value),children:e.b.countries.map(e=>(0,M.jsxs)(`option`,{value:e.code,children:[e.flag,` `,A(e.nameKey)]},e.code))}),(0,M.jsx)(`span`,{className:`font-bold ink-3`,children:A(`countries.vs`)}),(0,M.jsx)(`select`,{className:u,style:d,value:a,onChange:e=>o(e.target.value),children:e.b.countries.map(e=>(0,M.jsxs)(`option`,{value:e.code,children:[e.flag,` `,A(e.nameKey)]},e.code))})]}),(0,M.jsx)(`div`,{className:`space-y-4`,children:f.map(t=>(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{className:`text-xs uppercase tracking-wider ink-3 mb-1`,children:t.label}),(0,M.jsx)(gi,{rows:[{name:`${e.country(r)?.flag} ${r}`,value:t.va,color:`var(--series-1)`},{name:`${e.country(a)?.flag} ${a}`,value:t.vb,color:`var(--series-2)`}],fmt:e=>j(e,+!Number.isInteger(e)),max:Math.max(t.va,t.vb,1e-9)})]},t.label))})]})]})]})}function Ni(){let{code:e=`GER`}=Et(),t=wt(),{store:n}=N(),r=n.currentSeason(),i=n.country(e),a=n.federationStats(e),o=n.talentRadar(void 0,e),s=(0,_.useMemo)(()=>{let t=[],i=[],a=[],o=[],s=[],c=[];for(let l of Si()){let u=n.ranking(l.id,r),d=bi(l.id);for(let r of u){if(r.athlete.countryCode!==e)continue;let u=yi(n,l.id);r.position<=10?c.push({id:r.athlete.id,name:r.athlete.displayName,cat:u,pos:r.position}):r.position<=14?i.push({id:r.athlete.id,name:r.athlete.displayName,cat:u,why:`#${r.position}`}):r.position>25&&r.position<=30&&a.push({id:r.athlete.id,name:r.athlete.displayName,cat:u,why:`#${r.position}`});let f=n.trend12(r.athlete.id,l.id);if(f!=null&&f!==0){let e=Math.abs(f)/Math.max(Math.abs(r.value),1e-9),n={id:r.athlete.id,name:r.athlete.displayName,cat:u,v:f,sport:d,rel:e};f>0?o.push(n):(s.push(n),t.push({id:r.athlete.id,name:r.athlete.displayName,cat:u,why:`${A(`kpi.trend12`)}: −${ei(f,d)}`}))}}}return o.sort((e,t)=>t.rel-e.rel),s.sort((e,t)=>t.rel-e.rel),c.sort((e,t)=>e.pos-t.pos),{attention:t.slice(0,6),near10:i,near25:a,improvers:o.slice(0,6),decline:s.slice(0,6),top:c.slice(0,8)}},[n,r,e]),c=(0,_.useMemo)(()=>Si().map(t=>{let i=n.ranking(t.id,r).filter(t=>t.athlete.countryCode===e),a=i[0];return{id:t.id,label:t.label(),n:i.length,best:a?a.position:null,top25:i.filter(e=>e.position<=25).length}}).filter(e=>e.n>0),[n,r,e]);if(!i)return(0,M.jsx)(P,{children:A(`common.notFound`)});let l=({title:e,items:t})=>(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:e}),t.length===0?(0,M.jsx)(`p`,{className:`text-sm ink-3`,children:A(`common.na`)}):(0,M.jsx)(`div`,{className:`space-y-1.5 text-sm`,children:t.map((e,t)=>(0,M.jsxs)(`div`,{className:`flex justify-between gap-2`,children:[(0,M.jsx)(Qr,{id:e.id,name:e.name}),(0,M.jsx)(`span`,{className:`ink-3 truncate text-xs pt-0.5`,children:e.cat}),(0,M.jsx)(`span`,{className:`tnum font-semibold whitespace-nowrap`,children:e.pos?`#${e.pos}`:e.why??``})]},e.id+t))})]});return(0,M.jsxs)(`div`,{className:`space-y-5`,children:[(0,M.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,M.jsx)(`span`,{className:`text-4xl`,children:i.flag}),(0,M.jsx)(`h1`,{className:`text-2xl font-extrabold`,children:A(`fed.title`,{country:A(i.nameKey)})}),(0,M.jsx)(`select`,{className:`rounded-lg border px-2 py-1.5 text-sm ml-auto`,style:{borderColor:`var(--border)`,background:`var(--surface-1)`},value:e,onChange:e=>t(`/federation/${e.target.value}`),children:n.b.countries.map(e=>(0,M.jsxs)(`option`,{value:e.code,children:[e.flag,` `,A(e.nameKey)]},e.code))})]}),(0,M.jsxs)(Zr,{feature:`federation.intelligence`,children:[(0,M.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5`,children:[(0,M.jsx)(F,{label:A(`kpi.athletes`),value:a.athletes}),(0,M.jsx)(F,{label:A(`kpi.top10`),value:a.top10}),(0,M.jsx)(F,{label:A(`kpi.top25`),value:a.top25}),(0,M.jsx)(F,{label:A(`kpi.top50`),value:a.top50}),(0,M.jsx)(F,{label:A(`kpi.medals`),value:a.podiums}),(0,M.jsx)(F,{label:A(`kpi.avgPercentile`),value:a.avgPercentile==null?A(`common.na`):j(a.avgPercentile,1)}),(0,M.jsx)(F,{label:A(`kpi.avgSpi`),value:a.avgSpi==null?A(`common.na`):j(a.avgSpi,1)}),(0,M.jsx)(F,{label:A(`kpi.emerging`),value:a.emerging})]}),(0,M.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4`,children:[(0,M.jsx)(l,{title:`🏅 ${A(`fed.topPerformers`)}`,items:s.top}),(0,M.jsx)(l,{title:`🚀 ${A(`fed.improvers`)}`,items:s.improvers.map(e=>({...e,why:`+`+ei(e.v,e.sport)}))}),(0,M.jsx)(l,{title:`🎯 ${A(`fed.nearTop10`)}`,items:s.near10}),(0,M.jsx)(l,{title:`📈 ${A(`fed.nearTop25`)}`,items:s.near25}),(0,M.jsx)(l,{title:`⚠️ ${A(`fed.attention`)}`,items:s.attention}),(0,M.jsx)(l,{title:`📉 ${A(`fed.decline`)}`,items:s.decline.map(e=>({...e,why:`−`+ei(e.v,e.sport)}))})]}),(0,M.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4`,children:[(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`fed.categoryHealth`)}),(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:A(`common.category`)}),(0,M.jsx)(`th`,{children:A(`kpi.athletes`)}),(0,M.jsx)(`th`,{children:`Best`}),(0,M.jsx)(`th`,{children:A(`kpi.top25`)})]})}),(0,M.jsx)(`tbody`,{children:c.map(e=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{children:e.label}),(0,M.jsx)(`td`,{className:`tnum`,children:e.n}),(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:e.best?`#${e.best}`:A(`common.na`)}),(0,M.jsx)(`td`,{className:`tnum`,children:e.top25})]},e.id))})]})})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{sub:A(`talent.sub`),children:A(`fed.pipeline`)}),(0,M.jsx)(Zr,{feature:`federation.talent`,children:(0,M.jsx)(`div`,{className:`space-y-2 text-sm`,children:o.slice(0,10).map((e,t)=>(0,M.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,M.jsx)(Qr,{id:e.athlete.id,name:e.athlete.displayName}),(0,M.jsx)(`span`,{className:`ink-3 text-xs truncate`,children:yi(n,e.categoryId)}),(0,M.jsx)(Xr,{tier:e.tier})]},e.athlete.id+t))})})]})]})]})]})}var Pi=[`linear-gradient(135deg, #3b82f6, #8b5cf6)`,`linear-gradient(135deg, #38cfff, #3b82f6)`,`linear-gradient(135deg, #27b584, #38cfff)`,`linear-gradient(135deg, #e06a3a, #d9a022)`];function Fi(){let{store:e}=N(),t=e.currentSeason(),n=(0,_.useMemo)(()=>[...e.b.competitions].filter(n=>n.seasonId===t&&n.startDate<=e.today).sort((e,t)=>t.startDate.localeCompare(e.startDate)).slice(0,5).map(t=>({c:t,strength:e.competitionStrength(t.id).index})),[e,t]),r=(0,_.useMemo)(()=>{let n=[];for(let r of Si())for(let i of e.ranking(r.id,t).slice(0,40)){let t=e.trend12(i.athlete.id,r.id);t!=null&&n.push({id:i.athlete.id,name:i.athlete.displayName,cat:r.id,delta:t})}return n.sort((e,t)=>t.delta-e.delta).slice(0,6)},[e,t]),i=(0,_.useMemo)(()=>{let n=[];for(let r of Si())for(let i of e.ranking(r.id,t).slice(0,30)){let t=e.devSeries(i.athlete.id,r.id);if(t.length<2)continue;let a=t.at(-1);a.value>=Math.max(...t.map(e=>e.value))-1e-9&&a.date>=`2026-07-01`&&n.push({id:i.athlete.id,name:i.athlete.displayName,cat:r.id,v:a.value,date:a.date})}return n.sort((e,t)=>t.date.localeCompare(e.date)).slice(0,6)},[e,t]),a=(0,_.useMemo)(()=>{let n=new Map;for(let r of Si()){let i=r.disciplineId,a=n.get(i)??new Set;for(let n of e.ranking(r.id,t))a.add(n.athlete.id);n.set(i,a)}return[...n.entries()].map(([e,t])=>({dis:e,n:t.size})).filter(e=>e.n>0)},[e,t]),o=r[0]?(()=>{let n=r[0],i=e.positionOf(n.id,n.cat,t),a=e.seasonBest(n.id,n.cat);return{...n,pos:i,sb:a}})():null,s=new Date().getHours(),c=A(s<11?`home.greet.morning`:s<18?`home.greet.day`:`home.greet.evening`),l=new Date().toLocaleDateString(Or()===`de`?`de-DE`:`en-US`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),u=e.federationStats(`GER`);return(0,M.jsxs)(`div`,{className:`space-y-5`,children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-2`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`h1`,{className:`text-2xl font-extrabold`,children:[c,` 👋`]}),(0,M.jsx)(`p`,{className:`ink-3 text-sm`,children:A(`home.sub`)})]}),(0,M.jsx)(`span`,{className:`ink-3 text-sm`,children:l})]}),(0,M.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-2.5`,children:[(0,M.jsx)(F,{label:A(`kpi.athletes`),value:e.b.athletes.length}),(0,M.jsx)(F,{label:A(`home.pbs`),value:i.length,delta:i.length?{text:`+${i.length}`,dir:`up`}:void 0,sub:A(`home.pbsSub`)}),(0,M.jsx)(F,{label:`🇩🇪 ${A(`kpi.top25`)}`,value:u.top25}),(0,M.jsx)(F,{label:`🇩🇪 ${A(`kpi.avgSpi`)}`,value:u.avgSpi==null?A(`common.na`):j(u.avgSpi,1)})]}),(0,M.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-5`,children:[(0,M.jsxs)(`div`,{className:`lg:col-span-2 space-y-5 min-w-0`,children:[o&&(0,M.jsxs)(`div`,{className:`hero-band p-5 sm:p-6`,children:[(0,M.jsx)(Kr,{children:A(`home.spotlight`)}),(0,M.jsx)(`h2`,{className:`text-xl sm:text-2xl font-extrabold max-w-lg`,children:A(`home.spotlightH`,{name:o.name})}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-1 max-w-md`,children:A(`home.spotlightP`,{delta:ei(o.delta,bi(o.cat)),pos:o.pos?`#${o.pos.position}`:`–`})}),(0,M.jsxs)(In,{to:`/athlete/${o.id}`,className:`btn btn-primary inline-block mt-4 text-sm`,children:[A(`home.viewAthlete`),` →`]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(Kr,{children:A(`home.sportsOverview`)}),(0,M.jsx)(`div`,{className:`grid grid-cols-2 lg:grid-cols-4 gap-2.5`,children:a.map((e,t)=>(0,M.jsxs)(In,{to:`/leaderboard`,className:`tile block`,style:{"--tile-grad":Pi[t%Pi.length]},children:[(0,M.jsx)(`div`,{className:`text-[11px] uppercase tracking-wider ink-3`,children:A(`dis.${e.dis}`)}),(0,M.jsx)(`div`,{className:`hero-num text-2xl font-extrabold mt-1`,children:e.n}),(0,M.jsx)(`div`,{className:`text-xs ink-3`,children:A(`home.ranked`)})]},e.dis))})]}),(0,M.jsxs)(`div`,{className:`hero-band p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(Kr,{children:A(`nav.talent`)}),(0,M.jsx)(`h2`,{className:`text-lg sm:text-xl font-extrabold`,children:A(`home.talentH`)}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-0.5`,children:A(`home.talentP`)})]}),(0,M.jsxs)(In,{to:`/talent`,className:`btn btn-primary text-sm`,children:[A(`home.viewTalent`),` →`]})]})]}),(0,M.jsxs)(`div`,{className:`space-y-5 min-w-0`,children:[(0,M.jsxs)(P,{children:[(0,M.jsx)(Kr,{children:A(`home.latest`)}),(0,M.jsx)(`div`,{className:`space-y-2.5 text-sm`,children:n.map(({c:e,strength:t})=>(0,M.jsxs)(`div`,{className:`flex justify-between items-center gap-2`,children:[(0,M.jsx)(`a`,{href:`#/competition/${e.id}`,className:`font-semibold hover:underline truncate min-w-0`,children:e.name}),(0,M.jsxs)(`span`,{className:`chip whitespace-nowrap`,children:[A(`comp.strength`),` `,j(t,0)]})]},e.id))})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`home.movers`)}),(0,M.jsx)(`div`,{className:`space-y-2 text-sm`,children:r.map(t=>(0,M.jsxs)(`div`,{className:`flex justify-between items-center gap-2`,children:[(0,M.jsx)(Qr,{id:t.id,name:t.name,flag:e.country(e.athlete(t.id).countryCode)?.flag}),(0,M.jsxs)(`span`,{className:`delta up`,children:[`+`,ei(t.delta,bi(t.cat))]})]},t.id+t.cat))})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(Gr,{children:A(`home.pbs`)}),(0,M.jsx)(`div`,{className:`space-y-2 text-sm`,children:i.map(t=>(0,M.jsxs)(`div`,{className:`flex justify-between items-center gap-2`,children:[(0,M.jsx)(Qr,{id:t.id,name:t.name,flag:e.country(e.athlete(t.id).countryCode)?.flag}),(0,M.jsx)(`span`,{className:`ink-3`,children:xi(t.date)}),(0,M.jsx)(`span`,{className:`tnum font-semibold`,children:ti(t.v,bi(t.cat))})]},t.id+t.cat))})]})]})]})]})}var Ii=[[`⛸️`,`sport.artistic`,!0],[`⚡`,`sport.speed`,!1],[`🛹`,`landing.sport.skateboarding`,!1],[`🏒`,`landing.sport.inlineHockey`,!1],[`🥅`,`landing.sport.rinkHockey`,!1],[`🎿`,`landing.sport.freestyle`,!1],[`💥`,`landing.sport.derby`,!1],[`🛴`,`landing.sport.scootering`,!1]];function Li(){let{store:e}=N(),t=[[`landing.feat.bench`,`📊`],[`landing.feat.athlete`,`🏅`],[`landing.feat.fed`,`🏛️`],[`landing.feat.talent`,`🚀`],[`landing.feat.comp`,`🏟️`],[`landing.feat.multi`,`🛼`]],n=e.b.athletes.length,r=e.b.performances.length,i=e.b.competitions.length;return(0,M.jsxs)(`div`,{className:`space-y-10`,children:[(0,M.jsxs)(`section`,{className:`text-center pt-10 pb-4`,children:[(0,M.jsx)(`div`,{className:`mb-4`,children:(0,M.jsx)(Jr,{})}),(0,M.jsxs)(`h1`,{className:`text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase`,children:[A(`landing.h1a`),(0,M.jsx)(`br`,{}),(0,M.jsx)(`span`,{className:`text-grad`,children:A(`landing.h1b`)})]}),(0,M.jsx)(`p`,{className:`max-w-2xl mx-auto mt-5 text-base sm:text-lg ink-2`,children:A(`landing.sub`)}),(0,M.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-3 mt-7`,children:[(0,M.jsxs)(In,{to:`/leaderboard`,className:`btn btn-primary`,children:[A(`landing.ctaExplore`),` →`]}),(0,M.jsx)(In,{to:`/home`,className:`btn`,children:A(`landing.ctaFree`)}),(0,M.jsx)(In,{to:`/federation/GER`,className:`btn`,children:A(`landing.ctaFed`)})]}),(0,M.jsx)(`div`,{className:`grid grid-cols-3 gap-3 max-w-xl mx-auto mt-10`,children:[[n,A(`kpi.athletes`)],[r,A(`landing.results`)],[i,A(`nav.competitions`)]].map(([e,t])=>(0,M.jsxs)(`div`,{className:`card px-3 py-4`,children:[(0,M.jsx)(`div`,{className:`hero-num text-2xl sm:text-3xl font-extrabold text-grad`,children:e}),(0,M.jsx)(`div`,{className:`text-[11px] uppercase tracking-wider ink-3 mt-1`,children:t})]},String(t)))}),(0,M.jsx)(`div`,{className:`flex gap-2 overflow-x-auto scrollbar-none justify-start sm:justify-center mt-10 pb-1 -mx-3 px-3`,children:Ii.map(([e,t,n])=>(0,M.jsxs)(`div`,{className:`card flex-none px-4 py-2.5 text-center`,style:n?{borderColor:`color-mix(in srgb, var(--accent) 55%, var(--border))`,boxShadow:`var(--glow)`}:{opacity:.55},children:[(0,M.jsx)(`div`,{className:`text-xl`,children:e}),(0,M.jsx)(`div`,{className:`text-[11px] font-bold mt-0.5 whitespace-nowrap`,children:A(t)}),(0,M.jsx)(`div`,{className:`text-[10px] ink-3`,children:A(n?`landing.sport.live`:`landing.sport.soon`)})]},t))})]}),(0,M.jsxs)(`section`,{className:`hero-band p-6 sm:p-10`,children:[(0,M.jsx)(Kr,{children:A(`landing.moreLabel`)}),(0,M.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-black uppercase tracking-tight max-w-lg`,children:A(`landing.moreH`)}),(0,M.jsx)(`p`,{className:`text-sm sm:text-base ink-2 mt-2 max-w-xl`,children:A(`landing.moreP`)})]}),(0,M.jsxs)(`section`,{children:[(0,M.jsx)(`div`,{className:`flex items-end justify-between mb-4`,children:(0,M.jsx)(`h2`,{className:`text-xl sm:text-2xl font-black uppercase tracking-tight`,children:A(`landing.featH`)})}),(0,M.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,children:t.map(([e,t])=>(0,M.jsxs)(P,{children:[(0,M.jsx)(`div`,{className:`text-2xl mb-2`,children:t}),(0,M.jsx)(`h3`,{className:`font-bold`,children:A(`${e}.h`)}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-1`,children:A(`${e}.p`)})]},e))})]}),(0,M.jsxs)(`section`,{className:`text-center`,children:[(0,M.jsxs)(`div`,{className:`inline-flex flex-wrap justify-center gap-6 text-xl font-extrabold ink-2`,children:[(0,M.jsx)(`span`,{children:A(`landing.q1`)}),(0,M.jsx)(`span`,{className:`text-grad`,children:`→`}),(0,M.jsx)(`span`,{children:A(`landing.q2`)})]}),(0,M.jsxs)(`p`,{className:`text-xs ink-3 mt-6 max-w-xl mx-auto`,children:[A(`landing.demoNote`),` `,A(`brand.independent`)]})]})]})}function Ri(){let{store:e}=N(),t=Si(),[n,r]=(0,_.useState)(t[0].id),[i,a]=(0,_.useState)(e.currentSeason()),[o,s]=(0,_.useState)(`world`),[c,l]=(0,_.useState)(`GER`),[u,d]=(0,_.useState)(`value`),f=(0,_.useMemo)(()=>{let t=o===`world`?void 0:o===`EU`?{kind:`continent`,key:`EU`}:{kind:`country`,key:c},r=e.ranking(n,i,t);return u===`value`?r.map(e=>({...e,metric:e.value})):r.map(t=>({...t,metric:e.spi(t.athlete.id,n)?.value??-1})).filter(e=>e.metric>=0).sort((e,t)=>t.metric-e.metric).map((e,t)=>({...e,position:t+1}))},[e,n,i,o,c,u]),p=bi(n),m=`rounded-lg border px-2 py-1.5 text-sm`,h={borderColor:`var(--border)`,background:`var(--surface-1)`};return(0,M.jsxs)(`div`,{className:`space-y-4`,children:[(0,M.jsxs)(Gr,{sub:A(`board.analyticalNote`,{metric:u===`spi`?`SPI`:A(`metric.`+(p===`speed`?`timeMs`:`total`))}),children:[A(`board.title`),` `,(0,M.jsx)(`span`,{className:`chip ml-2`,children:A(`board.analytical`)})]}),(0,M.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,M.jsx)(`select`,{className:m,style:h,value:n,onChange:e=>r(e.target.value),children:t.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label()},e.id))}),(0,M.jsx)(`select`,{className:m,style:h,value:i,onChange:e=>a(e.target.value),children:e.b.seasons.map(e=>(0,M.jsxs)(`option`,{value:e.id,children:[A(`common.season`),` `,e.label]},e.id))}),(0,M.jsxs)(`select`,{className:m,style:h,value:o,onChange:e=>s(e.target.value),children:[(0,M.jsx)(`option`,{value:`world`,children:A(`bench.group.world`)}),(0,M.jsxs)(`option`,{value:`EU`,children:[A(`bench.group.continent`),` (EU)`]}),(0,M.jsx)(`option`,{value:`country`,children:A(`bench.group.country`)})]}),o===`country`&&(0,M.jsx)(`select`,{className:m,style:h,value:c,onChange:e=>l(e.target.value),children:e.b.countries.map(e=>(0,M.jsxs)(`option`,{value:e.code,children:[e.flag,` `,e.code]},e.code))}),(0,M.jsxs)(`select`,{className:m,style:h,value:u,onChange:e=>d(e.target.value),children:[(0,M.jsx)(`option`,{value:`value`,children:A(`metric.`+(p===`speed`?`timeMs`:`total`))}),(0,M.jsx)(`option`,{value:`spi`,children:`SPI`})]})]}),(0,M.jsxs)(P,{children:[(0,M.jsx)(`div`,{className:`overflow-x-auto`,children:(0,M.jsxs)(`table`,{className:`tbl w-full`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:A(`board.rank`)}),(0,M.jsx)(`th`,{children:A(`board.athlete`)}),(0,M.jsx)(`th`,{children:A(`common.country`)}),(0,M.jsx)(`th`,{children:A(`board.value`)}),(0,M.jsx)(`th`,{children:A(`kpi.percentile`)})]})}),(0,M.jsx)(`tbody`,{children:f.slice(0,50).map(t=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`tnum font-bold w-12`,children:t.position<=3?[`🥇`,`🥈`,`🥉`][t.position-1]:t.position}),(0,M.jsx)(`td`,{children:(0,M.jsx)(Qr,{id:t.athlete.id,name:t.athlete.displayName})}),(0,M.jsxs)(`td`,{children:[e.country(t.athlete.countryCode)?.flag,` `,t.athlete.countryCode]}),(0,M.jsx)(`td`,{className:`tnum font-semibold`,children:u===`spi`?j(t.metric,1):ti(t.metric,p)}),(0,M.jsx)(`td`,{className:`tnum ink-2`,children:t.percentile==null?A(`common.na`):j(t.percentile,1)})]},t.athlete.id))})]})}),(0,M.jsx)($r,{})]})]})}var zi=[`FREE`,`ATHLETE_PRO`,`COACH_PRO`,`CLUB_PRO`,`FED_STARTER`,`FED_PRO`,`FED_ENTERPRISE`];function Bi(){let{plan:e,setPlan:t}=N(),[n,r]=(0,_.useState)(!0);return(0,M.jsxs)(`div`,{className:`space-y-6`,children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-3`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`h1`,{className:`text-2xl sm:text-3xl font-black uppercase tracking-tight`,children:[A(`pricing.h1a`),(0,M.jsx)(`br`,{}),(0,M.jsx)(`span`,{className:`text-grad`,children:A(`pricing.h1b`)})]}),(0,M.jsx)(`p`,{className:`text-sm ink-3 mt-1 max-w-xl`,children:A(`pricing.note`)})]}),(0,M.jsxs)(`div`,{className:`tabbar card !rounded-full p-1`,children:[(0,M.jsx)(`button`,{className:`tab !py-1 ${n?``:`on`}`,onClick:()=>r(!1),children:A(`pricing.monthly`)}),(0,M.jsx)(`button`,{className:`tab !py-1 ${n?`on`:``}`,onClick:()=>r(!0),children:A(`pricing.yearly`)})]})]}),(0,M.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`,children:zi.map(r=>{let i=[...Vr[r]],a=e===r,o=r===`FED_PRO`;return(0,M.jsxs)(`div`,{className:`price-card ${o?`featured`:``}`,children:[(0,M.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,M.jsxs)(`h3`,{className:`font-extrabold text-sm`,children:[r.startsWith(`FED`)?`🏛️ `:``,r.replace(`_`,` `)]}),o&&(0,M.jsx)(`span`,{className:`chip`,style:{borderColor:`var(--accent)`,color:`var(--seq-600)`},children:A(`pricing.popular`)})]}),(0,M.jsx)(`div`,{className:`price-num text-grad mt-2`,children:A(Hr[r].priceKey)}),n&&r!==`FREE`&&(0,M.jsx)(`div`,{className:`text-[11px] ink-3`,children:A(`pricing.yearlyNote`)}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-2`,children:A(`pricing.sell.${r}`)}),(0,M.jsxs)(`ul`,{className:`plist`,children:[i.slice(0,7).map(e=>(0,M.jsx)(`li`,{children:A(`feat.${e}`)},e)),i.length>7&&(0,M.jsxs)(`li`,{children:[`… +`,i.length-7]})]}),(0,M.jsx)(`button`,{className:`mt-auto pt-4 w-full ${a?`btn`:`btn btn-primary`}`,onClick:()=>t(r),children:a?`✓ `+A(`pricing.activePlan`):A(`pricing.tryPlan`)})]},r)})}),(0,M.jsxs)(`div`,{className:`price-card sm:flex-row sm:items-center gap-4`,children:[(0,M.jsxs)(`div`,{className:`flex-1`,children:[(0,M.jsxs)(`h3`,{className:`font-extrabold text-sm`,children:[`🧮 `,A(`calc.title`),` `,(0,M.jsx)(`span`,{className:`chip ml-1`,children:A(`calc.addon`)})]}),(0,M.jsx)(`p`,{className:`text-sm ink-2 mt-1`,children:A(`calc.pitch`)}),(0,M.jsx)(`p`,{className:`text-[11px] ink-3 mt-1`,children:A(`calc.included`)})]}),(0,M.jsxs)(`div`,{className:`text-right`,children:[(0,M.jsx)(`div`,{className:`price-num text-grad`,children:A(`calc.price`)}),(0,M.jsxs)(In,{to:`/rechner`,className:`btn btn-primary inline-block mt-2 text-sm`,children:[A(`calc.title`),` →`]})]})]}),(0,M.jsxs)(`p`,{className:`text-xs ink-3`,children:[A(`pricing.demoDisclaimer`),` `,A(`brand.independent`)]})]})}var Vi=[`ELITE`,`INTERNATIONAL`,`BREAKTHROUGH`,`RISING`,`HIGH_POTENTIAL`];function Hi(){let{store:e}=N(),[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(null),s=e.talentRadar(t||void 0,r||void 0),c=`rounded-lg border px-2 py-1.5 text-sm`,l={borderColor:`var(--border)`,background:`var(--surface-1)`};return(0,M.jsxs)(`div`,{className:`space-y-4`,children:[(0,M.jsx)(Gr,{sub:A(`talent.sub`),children:A(`talent.title`)}),(0,M.jsxs)(`div`,{className:`flex gap-2 flex-wrap`,children:[(0,M.jsxs)(`select`,{className:c,style:l,value:t,onChange:e=>n(e.target.value),children:[(0,M.jsxs)(`option`,{value:``,children:[A(`common.all`),` `,A(`common.sport`)]}),(0,M.jsx)(`option`,{value:`artistic`,children:A(`sport.artistic`)}),(0,M.jsx)(`option`,{value:`speed`,children:A(`sport.speed`)})]}),(0,M.jsxs)(`select`,{className:c,style:l,value:r,onChange:e=>i(e.target.value),children:[(0,M.jsxs)(`option`,{value:``,children:[A(`common.all`),` `,A(`common.country`)]}),e.b.countries.map(e=>(0,M.jsxs)(`option`,{value:e.code,children:[e.flag,` `,A(e.nameKey)]},e.code))]})]}),(0,M.jsx)(Zr,{feature:`club.talentRadar`,children:(0,M.jsx)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-4`,children:Vi.map(t=>{let n=s.filter(e=>e.tier===t);return n.length?(0,M.jsxs)(P,{children:[(0,M.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,M.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full`,style:{background:Yr[t]}}),(0,M.jsx)(`h2`,{className:`font-bold`,children:A(`talent.${t}`)}),(0,M.jsx)(`span`,{className:`chip ml-auto`,children:n.length})]}),(0,M.jsx)(`div`,{className:`space-y-2`,children:n.slice(0,10).map((t,n)=>{let r=t.athlete.id+t.categoryId;return(0,M.jsxs)(`div`,{className:`text-sm`,children:[(0,M.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,M.jsx)(Qr,{id:t.athlete.id,name:t.athlete.displayName,flag:e.country(t.athlete.countryCode)?.flag}),(0,M.jsx)(`span`,{className:`ink-3 text-xs truncate`,children:yi(e,t.categoryId)}),(0,M.jsx)(`button`,{className:`chip`,onClick:()=>o(a===r?null:r),children:A(`talent.why`)})]}),a===r&&(0,M.jsx)(`div`,{className:`flex gap-2 flex-wrap mt-1.5 pl-1`,children:t.evidence.map(e=>(0,M.jsxs)(`span`,{className:`chip tnum`,children:[A(`kpi.${e.key===`worldPosition`?`world`:e.key===`percentile`?`percentile`:e.key===`spi`?`spi`:`development`}`),`: `,(0,M.jsxs)(`b`,{children:[e.key===`worldPosition`?`#`:``,j(e.value,e.key===`worldPosition`?0:1)]})]},e.key))})]},r+n)})})]},t):null})})})]})}function Ui(){return(0,M.jsx)(Mr,{children:(0,M.jsx)(Fn,{children:(0,M.jsx)(ci,{children:(0,M.jsxs)(Zt,{children:[(0,M.jsx)(Yt,{path:`/`,element:(0,M.jsx)(Li,{})}),(0,M.jsx)(Yt,{path:`/home`,element:(0,M.jsx)(Fi,{})}),(0,M.jsx)(Yt,{path:`/athlete/:id`,element:(0,M.jsx)(Di,{})}),(0,M.jsx)(Yt,{path:`/compare`,element:(0,M.jsx)(ki,{})}),(0,M.jsx)(Yt,{path:`/leaderboard`,element:(0,M.jsx)(Ri,{})}),(0,M.jsx)(Yt,{path:`/federation/:code`,element:(0,M.jsx)(Ni,{})}),(0,M.jsx)(Yt,{path:`/countries`,element:(0,M.jsx)(Mi,{})}),(0,M.jsx)(Yt,{path:`/talent`,element:(0,M.jsx)(Hi,{})}),(0,M.jsx)(Yt,{path:`/methodik`,element:(0,M.jsx)(di,{})}),(0,M.jsx)(Yt,{path:`/rechner`,element:(0,M.jsx)(pi,{})}),(0,M.jsx)(Yt,{path:`/competitions`,element:(0,M.jsx)(Ai,{})}),(0,M.jsx)(Yt,{path:`/competition/:id`,element:(0,M.jsx)(ji,{})}),(0,M.jsx)(Yt,{path:`/pricing`,element:(0,M.jsx)(Bi,{})}),(0,M.jsx)(Yt,{path:`/admin`,element:(0,M.jsx)(li,{})}),(0,M.jsx)(Yt,{path:`/demo/federation`,element:(0,M.jsx)(Jt,{to:`/federation/GER`,replace:!0})}),(0,M.jsx)(Yt,{path:`*`,element:(0,M.jsx)(Jt,{to:`/`,replace:!0})})]})})})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(_.StrictMode,{children:(0,M.jsx)(Ui,{})}));