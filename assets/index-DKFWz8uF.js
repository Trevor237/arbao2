(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Hd={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function hw(){if(z_)return wl;z_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return wl.Fragment=e,wl.jsx=n,wl.jsxs=n,wl}var B_;function fw(){return B_||(B_=1,Hd.exports=hw()),Hd.exports}var Ee=fw(),qd={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function dw(){if(H_)return Re;H_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,$={};function q(O,J,ce){this.props=O,this.context=J,this.refs=$,this.updater=ce||M}q.prototype.isReactComponent={},q.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Y(){}Y.prototype=q.prototype;function te(O,J,ce){this.props=O,this.context=J,this.refs=$,this.updater=ce||M}var ee=te.prototype=new Y;ee.constructor=te,B(ee,q.prototype),ee.isPureReactComponent=!0;var pe=Array.isArray,le={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function V(O,J,ce,re,se,Ie){return ce=Ie.ref,{$$typeof:r,type:O,key:J,ref:ce!==void 0?ce:null,props:Ie}}function b(O,J){return V(O.type,J,void 0,void 0,void 0,O.props)}function S(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function I(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ce){return J[ce]})}var P=/\/+/g;function U(O,J){return typeof O=="object"&&O!==null&&O.key!=null?I(""+O.key):J.toString(36)}function C(){}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(C,C):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ft(O,J,ce,re,se){var Ie=typeof O;(Ie==="undefined"||Ie==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0;break;case E:return be=O._init,ft(be(O._payload),J,ce,re,se)}}if(be)return se=se(O),be=re===""?"."+U(O,0):re,pe(se)?(ce="",be!=null&&(ce=be.replace(P,"$&/")+"/"),ft(se,J,ce,"",function(rt){return rt})):se!=null&&(S(se)&&(se=b(se,ce+(se.key==null||O&&O.key===se.key?"":(""+se.key).replace(P,"$&/")+"/")+be)),J.push(se)),1;be=0;var dt=re===""?".":re+":";if(pe(O))for(var ze=0;ze<O.length;ze++)re=O[ze],Ie=dt+U(re,ze),be+=ft(re,J,ce,Ie,se);else if(ze=D(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(re=O.next()).done;)re=re.value,Ie=dt+U(re,ze++),be+=ft(re,J,ce,Ie,se);else if(Ie==="object"){if(typeof O.then=="function")return ft(_t(O),J,ce,re,se);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return be}function ie(O,J,ce){if(O==null)return O;var re=[],se=0;return ft(O,re,"","",function(Ie){return J.call(ce,Ie,se++)}),re}function ye(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce)},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var fe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function je(){}return Re.Children={map:ie,forEach:function(O,J,ce){ie(O,function(){J.apply(this,arguments)},ce)},count:function(O){var J=0;return ie(O,function(){J++}),J},toArray:function(O){return ie(O,function(J){return J})||[]},only:function(O){if(!S(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=q,Re.Fragment=n,Re.Profiler=o,Re.PureComponent=te,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Re.act=function(){throw Error("act(...) is not supported in production builds of React.")},Re.cache=function(O){return function(){return O.apply(null,arguments)}},Re.cloneElement=function(O,J,ce){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var re=B({},O.props),se=O.key,Ie=void 0;if(J!=null)for(be in J.ref!==void 0&&(Ie=void 0),J.key!==void 0&&(se=""+J.key),J)!we.call(J,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&J.ref===void 0||(re[be]=J[be]);var be=arguments.length-2;if(be===1)re.children=ce;else if(1<be){for(var dt=Array(be),ze=0;ze<be;ze++)dt[ze]=arguments[ze+2];re.children=dt}return V(O.type,se,void 0,void 0,Ie,re)},Re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Re.createElement=function(O,J,ce){var re,se={},Ie=null;if(J!=null)for(re in J.key!==void 0&&(Ie=""+J.key),J)we.call(J,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(se[re]=J[re]);var be=arguments.length-2;if(be===1)se.children=ce;else if(1<be){for(var dt=Array(be),ze=0;ze<be;ze++)dt[ze]=arguments[ze+2];se.children=dt}if(O&&O.defaultProps)for(re in be=O.defaultProps,be)se[re]===void 0&&(se[re]=be[re]);return V(O,Ie,void 0,void 0,null,se)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=S,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ye}},Re.memo=function(O,J){return{$$typeof:y,type:O,compare:J===void 0?null:J}},Re.startTransition=function(O){var J=le.T,ce={};le.T=ce;try{var re=O(),se=le.S;se!==null&&se(ce,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(je,fe)}catch(Ie){fe(Ie)}finally{le.T=J}},Re.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Re.use=function(O){return le.H.use(O)},Re.useActionState=function(O,J,ce){return le.H.useActionState(O,J,ce)},Re.useCallback=function(O,J){return le.H.useCallback(O,J)},Re.useContext=function(O){return le.H.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O,J){return le.H.useDeferredValue(O,J)},Re.useEffect=function(O,J){return le.H.useEffect(O,J)},Re.useId=function(){return le.H.useId()},Re.useImperativeHandle=function(O,J,ce){return le.H.useImperativeHandle(O,J,ce)},Re.useInsertionEffect=function(O,J){return le.H.useInsertionEffect(O,J)},Re.useLayoutEffect=function(O,J){return le.H.useLayoutEffect(O,J)},Re.useMemo=function(O,J){return le.H.useMemo(O,J)},Re.useOptimistic=function(O,J){return le.H.useOptimistic(O,J)},Re.useReducer=function(O,J,ce){return le.H.useReducer(O,J,ce)},Re.useRef=function(O){return le.H.useRef(O)},Re.useState=function(O){return le.H.useState(O)},Re.useSyncExternalStore=function(O,J,ce){return le.H.useSyncExternalStore(O,J,ce)},Re.useTransition=function(){return le.H.useTransition()},Re.version="19.0.0",Re}var q_;function Lm(){return q_||(q_=1,qd.exports=dw()),qd.exports}var G=Lm(),jd={exports:{}},bl={},Fd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function mw(){return j_||(j_=1,function(r){function e(ie,ye){var fe=ie.length;ie.push(ye);e:for(;0<fe;){var je=fe-1>>>1,O=ie[je];if(0<o(O,ye))ie[je]=ye,ie[fe]=O,fe=je;else break e}}function n(ie){return ie.length===0?null:ie[0]}function s(ie){if(ie.length===0)return null;var ye=ie[0],fe=ie.pop();if(fe!==ye){ie[0]=fe;e:for(var je=0,O=ie.length,J=O>>>1;je<J;){var ce=2*(je+1)-1,re=ie[ce],se=ce+1,Ie=ie[se];if(0>o(re,fe))se<O&&0>o(Ie,re)?(ie[je]=Ie,ie[se]=fe,je=se):(ie[je]=re,ie[ce]=fe,je=ce);else if(se<O&&0>o(Ie,fe))ie[je]=Ie,ie[se]=fe,je=se;else break e}}return ye}function o(ie,ye){var fe=ie.sortIndex-ye.sortIndex;return fe!==0?fe:ie.id-ye.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,w=null,D=3,M=!1,B=!1,$=!1,q=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ee(ie){for(var ye=n(y);ye!==null;){if(ye.callback===null)s(y);else if(ye.startTime<=ie)s(y),ye.sortIndex=ye.expirationTime,e(p,ye);else break;ye=n(y)}}function pe(ie){if($=!1,ee(ie),!B)if(n(p)!==null)B=!0,_t();else{var ye=n(y);ye!==null&&ft(pe,ye.startTime-ie)}}var le=!1,we=-1,V=5,b=-1;function S(){return!(r.unstable_now()-b<V)}function I(){if(le){var ie=r.unstable_now();b=ie;var ye=!0;try{e:{B=!1,$&&($=!1,Y(we),we=-1),M=!0;var fe=D;try{t:{for(ee(ie),w=n(p);w!==null&&!(w.expirationTime>ie&&S());){var je=w.callback;if(typeof je=="function"){w.callback=null,D=w.priorityLevel;var O=je(w.expirationTime<=ie);if(ie=r.unstable_now(),typeof O=="function"){w.callback=O,ee(ie),ye=!0;break t}w===n(p)&&s(p),ee(ie)}else s(p);w=n(p)}if(w!==null)ye=!0;else{var J=n(y);J!==null&&ft(pe,J.startTime-ie),ye=!1}}break e}finally{w=null,D=fe,M=!1}ye=void 0}}finally{ye?P():le=!1}}}var P;if(typeof te=="function")P=function(){te(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,C=U.port2;U.port1.onmessage=I,P=function(){C.postMessage(null)}}else P=function(){q(I,0)};function _t(){le||(le=!0,P())}function ft(ie,ye){we=q(function(){ie(r.unstable_now())},ye)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ie){ie.callback=null},r.unstable_continueExecution=function(){B||M||(B=!0,_t())},r.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<ie?Math.floor(1e3/ie):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(ie){switch(D){case 1:case 2:case 3:var ye=3;break;default:ye=D}var fe=D;D=ye;try{return ie()}finally{D=fe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ie,ye){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var fe=D;D=ie;try{return ye()}finally{D=fe}},r.unstable_scheduleCallback=function(ie,ye,fe){var je=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?je+fe:je):fe=je,ie){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=fe+O,ie={id:E++,callback:ye,priorityLevel:ie,startTime:fe,expirationTime:O,sortIndex:-1},fe>je?(ie.sortIndex=fe,e(y,ie),n(p)===null&&ie===n(y)&&($?(Y(we),we=-1):$=!0,ft(pe,fe-je))):(ie.sortIndex=O,e(p,ie),B||M||(B=!0,_t())),ie},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(ie){var ye=D;return function(){var fe=D;D=ye;try{return ie.apply(this,arguments)}finally{D=fe}}}}(Gd)),Gd}var F_;function pw(){return F_||(F_=1,Fd.exports=mw()),Fd.exports}var Kd={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function gw(){if(G_)return Gt;G_=1;var r=Lm();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Gt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Gt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Gt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Gt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,w=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,M=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:M}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:D,fetchPriority:M,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Gt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,w=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Gt.requestFormReset=function(p){s.d.r(p)},Gt.unstable_batchedUpdates=function(p,y){return p(y)},Gt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Gt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Gt.version="19.0.0",Gt}var K_;function yw(){if(K_)return Kd.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Kd.exports=gw(),Kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function _w(){if($_)return bl;$_=1;var r=pw(),e=Lm(),n=yw();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),M=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),pe=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function we(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var V=Symbol.for("react.client.reference");function b(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===V?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case y:return"StrictMode";case $:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case B:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return i=t.displayName||null,i!==null?i:b(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return b(t(i))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,P,U;function C(t){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P+t+U}var _t=!1;function ft(t,i){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(F){var H=F}Reflect.construct(t,[],W)}else{try{W.call()}catch(F){H=F}t.call(W.prototype)}}else{try{throw Error()}catch(F){H=F}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(F){if(F&&H&&typeof F.stack=="string")return[F.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),k=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<k.length&&!k[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===k.length)for(l=R.length-1,h=k.length-1;1<=l&&0<=h&&R[l]!==k[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==k[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==k[h]){var K=`
`+R[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?C(a):""}function ie(t){switch(t.tag){case 26:case 27:case 5:return C(t.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 15:return t=ft(t.type,!1),t;case 11:return t=ft(t.type.render,!1),t;case 1:return t=ft(t.type,!0),t;default:return""}}function ye(t){try{var i="";do i+=ie(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function je(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function O(t){if(fe(t)!==t)throw Error(s(188))}function J(t){var i=t.alternate;if(!i){if(i=fe(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),t;if(d===l)return O(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function ce(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=ce(t),i!==null)return i;t=t.sibling}return null}var re=Array.isArray,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},be=[],dt=-1;function ze(t){return{current:t}}function rt(t){0>dt||(t.current=be[dt],be[dt]=null,dt--)}function Ke(t,i){dt++,be[dt]=t.current,t.current=i}var Xt=ze(null),Ti=ze(null),yn=ze(null),sr=ze(null);function ar(t,i){switch(Ke(yn,i),Ke(Ti,t),Ke(Xt,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?m_(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=m_(t),i=p_(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}rt(Xt),Ke(Xt,i)}function Ai(){rt(Xt),rt(Ti),rt(yn)}function vo(t){t.memoizedState!==null&&Ke(sr,t);var i=Xt.current,a=p_(i,t.type);i!==a&&(Ke(Ti,t),Ke(Xt,a))}function na(t){Ti.current===t&&(rt(Xt),rt(Ti)),sr.current===t&&(rt(sr),vl._currentValue=Ie)}var ia=Object.prototype.hasOwnProperty,ls=r.unstable_scheduleCallback,ra=r.unstable_cancelCallback,qh=r.unstable_shouldYield,Eo=r.unstable_requestPaint,nn=r.unstable_now,lu=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Ct=r.unstable_UserBlockingPriority,Si=r.unstable_NormalPriority,uu=r.unstable_LowPriority,To=r.unstable_IdlePriority,jh=r.log,us=r.unstable_setDisableYieldValue,or=null,jt=null;function Ao(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(or,t,void 0,(t.current.flags&128)===128)}catch{}}function Xn(t){if(typeof jh=="function"&&us(t),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(or,t)}catch{}}var Wt=Math.clz32?Math.clz32:hu,So=Math.log,cu=Math.LN2;function hu(t){return t>>>=0,t===0?32:31-(So(t)/cu|0)|0}var Wn=128,lr=4194304;function Ln(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _n(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=Ln(a):(d&=T,d!==0?l=Ln(d):t||(v=T&~v,v!==0&&(l=Ln(v))))):(T=a&~h,T!==0?l=Ln(T):d!==0?l=Ln(d):t||(v=a&~v,v!==0&&(l=Ln(v)))),l===0?0:i!==0&&i!==l&&!(i&h)&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function ur(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function sa(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wo(){var t=Wn;return Wn<<=1,!(Wn&4194176)&&(Wn=128),t}function cr(){var t=lr;return lr<<=1,!(lr&62914560)&&(lr=4194304),t}function aa(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ut(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fu(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,R=t.expirationTimes,k=t.hiddenUpdates;for(a=v&~a;0<a;){var K=31-Wt(a),W=1<<K;T[K]=0,R[K]=-1;var H=k[K];if(H!==null)for(k[K]=null,K=0;K<H.length;K++){var F=H[K];F!==null&&(F.lane&=-536870913)}a&=~W}l!==0&&hr(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function hr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Wt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function fr(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Wt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function du(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function mu(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:V_(t.type))}function dr(t,i){var a=se.p;try{return se.p=t,i()}finally{se.p=a}}var Zn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Zn,Et="__reactProps$"+Zn,wi="__reactContainer$"+Zn,cs="__reactEvents$"+Zn,oa="__reactListeners$"+Zn,Jn="__reactHandles$"+Zn,bo="__reactResources$"+Zn,mr="__reactMarker$"+Zn;function hs(t){delete t[Dt],delete t[Et],delete t[cs],delete t[oa],delete t[Jn]}function Un(t){var i=t[Dt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wi]||a[Dt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=__(t);t!==null;){if(a=t[Dt])return a;t=__(t)}return i}t=a,a=t.parentNode}return null}function bi(t){if(t=t[Dt]||t[wi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function pr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function gr(t){var i=t[bo];return i||(i=t[bo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function et(t){t[mr]=!0}var Ro=new Set,la={};function un(t,i){rn(t,i),rn(t+"Capture",i)}function rn(t,i){for(la[t]=i,t=0;t<i.length;t++)Ro.add(i[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Io={},Co={};function pu(t){return ia.call(Co,t)?!0:ia.call(Io,t)?!1:Fh.test(t)?Co[t]=!0:(Io[t]=!0,!1)}function yr(t,i,a){if(pu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function _r(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function vn(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gu(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Gh(t){var i=gu(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function fs(t){t._valueTracker||(t._valueTracker=Gh(t))}function Do(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=gu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ri=/[\n"\\]/g;function st(t){return t.replace(Ri,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function vr(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Zt(i)):t.value!==""+Zt(i)&&(t.value=""+Zt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?ca(t,v,Zt(i)):a!=null?ca(t,v,Zt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Zt(T):t.removeAttribute("name")}function ds(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Zt(a):"",i=i!=null?""+Zt(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function ca(t,i,a){i==="number"&&ua(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Be(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function ms(t,i,a){if(i!=null&&(i=""+Zt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Zt(a):""}function Er(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(re(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Zt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function En(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Kh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oo(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Kh.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function yu(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Oo(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Oo(t,d,i[d])}function No(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ei(t){return Qh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tn=null;function ha(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ii=null,Ci=null;function Di(t){var i=bi(t);if(i&&(t=i.stateNode)){var a=t[Et]||null;e:switch(t=i.stateNode,i.type){case"input":if(vr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(s(90));vr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Do(l)}break e;case"textarea":ms(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Be(t,!!a.multiple,i,!1)}}}var Mo=!1;function _u(t,i,a){if(Mo)return t(i,a);Mo=!0;try{var l=t(i);return l}finally{if(Mo=!1,(Ii!==null||Ci!==null)&&(uc(),Ii&&(i=Ii,t=Ci,Ci=Ii=null,Di(i),t)))for(i=0;i<t.length;i++)Di(t[i])}}function ps(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var An=!1;if(cn)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){An=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{An=!1}var ti=null,Tr=null,Oi=null;function Vo(){if(Oi)return Oi;var t,i=Tr,a=i.length,l,h="value"in ti?ti.value:ti.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Oi=h.slice(t,1<l?1-l:void 0)}function ni(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ii(){return!0}function Po(){return!1}function Ot(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:Po,this.isPropagationStopped=Po,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=Ot(Fe),ys=I({},Fe,{view:0,detail:0}),vu=Ot(ys),da,ma,ri,_s=I({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(da=t.screenX-ri.screenX,ma=t.screenY-ri.screenY):ma=da=0,ri=t),da)},movementY:function(t){return"movementY"in t?t.movementY:ma}}),Sn=Ot(_s),Eu=I({},_s,{dataTransfer:0}),Yh=Ot(Eu),vs=I({},ys,{relatedTarget:0}),pa=Ot(vs),ko=I({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),ga=Ot(ko),Tu=I({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ya=Ot(Tu),Xh=I({},Fe,{data:0}),xo=Ot(Xh),Es={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Au={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Su[t])?!!i[t]:!1}function Ts(){return Lo}var wu=I({},ys,{key:function(t){if(t.key){var i=Es[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ni(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Au[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(t){return t.type==="keypress"?ni(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ni(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_a=Ot(wu),bu=I({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uo=Ot(bu),Ni=I({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),Ru=Ot(Ni),Iu=I({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cu=Ot(Iu),Du=I({},_s,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),va=Ot(Du),Jt=I({},Fe,{newState:0,oldState:0}),Ou=Ot(Jt),Nu=[9,13,27,32],si=cn&&"CompositionEvent"in window,c=null;cn&&"documentMode"in document&&(c=document.documentMode);var g=cn&&"TextEvent"in window&&!c,_=cn&&(!si||c&&8<c&&11>=c),A=" ",L=!1;function j(t,i){switch(t){case"keyup":return Nu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function Tt(t,i){switch(t){case"compositionend":return ne(i);case"keypress":return i.which!==32?null:(L=!0,A);case"textInput":return t=i.data,t===A&&L?null:t;default:return null}}function xe(t,i){if(ke)return t==="compositionend"||!si&&j(t,i)?(t=Vo(),Oi=Tr=ti=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Nt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function At(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Nt[t.type]:i==="textarea"}function Mi(t,i,a,l){Ii?Ci?Ci.push(l):Ci=[l]:Ii=l,i=mc(i,"onChange"),0<i.length&&(a=new fa("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var xt=null,ai=null;function zo(t){u_(t,0)}function Mu(t){var i=pr(t);if(Do(i))return t}function Up(t,i){if(t==="change")return i}var zp=!1;if(cn){var Wh;if(cn){var Zh="oninput"in document;if(!Zh){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Zh=typeof Bp.oninput=="function"}Wh=Zh}else Wh=!1;zp=Wh&&(!document.documentMode||9<document.documentMode)}function Hp(){xt&&(xt.detachEvent("onpropertychange",qp),ai=xt=null)}function qp(t){if(t.propertyName==="value"&&Mu(ai)){var i=[];Mi(i,ai,t,ha(t)),_u(zo,i)}}function HA(t,i,a){t==="focusin"?(Hp(),xt=i,ai=a,xt.attachEvent("onpropertychange",qp)):t==="focusout"&&Hp()}function qA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(ai)}function jA(t,i){if(t==="click")return Mu(i)}function FA(t,i){if(t==="input"||t==="change")return Mu(i)}function GA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hn=typeof Object.is=="function"?Object.is:GA;function Bo(t,i){if(hn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ia.call(i,h)||!hn(t[h],i[h]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,i){var a=jp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Gp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Gp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ua(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ua(t.document)}return i}function Jh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function KA(t,i){var a=Kp(i);i=t.focusedElem;var l=t.selectionRange;if(a!==i&&i&&i.ownerDocument&&Gp(i.ownerDocument.documentElement,i)){if(l!==null&&Jh(i)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(a,i.value.length);else if(a=(t=i.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=Fp(i,d);var v=Fp(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=i;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)a=t[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var $A=cn&&"documentMode"in document&&11>=document.documentMode,Ea=null,ef=null,Ho=null,tf=!1;function $p(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tf||Ea==null||Ea!==ua(l)||(l=Ea,"selectionStart"in l&&Jh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ho&&Bo(Ho,l)||(Ho=l,l=mc(ef,"onSelect"),0<l.length&&(i=new fa("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Ea)))}function As(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ta={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},nf={},Qp={};cn&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Ss(t){if(nf[t])return nf[t];if(!Ta[t])return t;var i=Ta[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Qp)return nf[t]=i[a];return t}var Yp=Ss("animationend"),Xp=Ss("animationiteration"),Wp=Ss("animationstart"),QA=Ss("transitionrun"),YA=Ss("transitionstart"),XA=Ss("transitioncancel"),Zp=Ss("transitionend"),Jp=new Map,eg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function zn(t,i){Jp.set(t,i),un(i,[t])}var wn=[],Aa=0,rf=0;function Vu(){for(var t=Aa,i=rf=Aa=0;i<t;){var a=wn[i];wn[i++]=null;var l=wn[i];wn[i++]=null;var h=wn[i];wn[i++]=null;var d=wn[i];if(wn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&tg(a,h,d)}}function Pu(t,i,a,l){wn[Aa++]=t,wn[Aa++]=i,wn[Aa++]=a,wn[Aa++]=l,rf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function sf(t,i,a,l){return Pu(t,i,a,l),ku(t)}function Ar(t,i){return Pu(t,null,null,i),ku(t)}function tg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&i!==null&&t.tag===3&&(d=t.stateNode,h=31-Wt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[i]:t.push(i),i.lane=a|536870912)}function ku(t){if(50<fl)throw fl=0,hd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Sa={},ng=new WeakMap;function bn(t,i){if(typeof t=="object"&&t!==null){var a=ng.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ye(i)},ng.set(t,i),i)}return{value:t,source:i,stack:ye(i)}}var wa=[],ba=0,xu=null,Lu=0,Rn=[],In=0,ws=null,Vi=1,Pi="";function bs(t,i){wa[ba++]=Lu,wa[ba++]=xu,xu=t,Lu=i}function ig(t,i,a){Rn[In++]=Vi,Rn[In++]=Pi,Rn[In++]=ws,ws=t;var l=Vi;t=Pi;var h=32-Wt(l)-1;l&=~(1<<h),a+=1;var d=32-Wt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Vi=1<<32-Wt(i)+h|a<<h|l,Pi=d+t}else Vi=1<<d|a<<h|l,Pi=t}function af(t){t.return!==null&&(bs(t,1),ig(t,1,0))}function of(t){for(;t===xu;)xu=wa[--ba],wa[ba]=null,Lu=wa[--ba],wa[ba]=null;for(;t===ws;)ws=Rn[--In],Rn[In]=null,Pi=Rn[--In],Rn[In]=null,Vi=Rn[--In],Rn[In]=null}var en=null,Lt=null,He=!1,Bn=null,oi=!1,lf=Error(s(519));function Rs(t){var i=Error(s(418,""));throw Fo(bn(i,t)),lf}function rg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Dt]=t,i[Et]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<ml.length;a++)Ve(ml[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),ds(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),fs(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),Er(i,l.value,l.defaultValue,l.children),fs(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||d_(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=pc),i=!0):i=!1,i||Rs(t)}function sg(t){for(en=t.return;en;)switch(en.tag){case 3:case 27:oi=!0;return;case 5:case 13:oi=!1;return;default:en=en.return}}function qo(t){if(t!==en)return!1;if(!He)return sg(t),He=!0,!1;var i=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cd(t.type,t.memoizedProps)),a=!a),a&&(i=!0),i&&Lt&&Rs(t),sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Lt=qn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Lt=null}}else Lt=en?qn(t.stateNode.nextSibling):null;return!0}function jo(){Lt=en=null,He=!1}function Fo(t){Bn===null?Bn=[t]:Bn.push(t)}var Go=Error(s(460)),ag=Error(s(474)),uf={then:function(){}};function og(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Uu(){}function lg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Uu,Uu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Go?Error(s(483)):t;default:if(typeof i.status=="string")i.then(Uu,Uu);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Go?Error(s(483)):t}throw Ko=i,Go}}var Ko=null;function ug(){if(Ko===null)throw Error(s(459));var t=Ko;return Ko=null,t}var Ra=null,$o=0;function zu(t){var i=$o;return $o+=1,Ra===null&&(Ra=[]),lg(Ra,t,i)}function Qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Bu(t,i){throw i.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function cg(t){var i=t._init;return i(t._payload)}function hg(t){function i(x,N){if(t){var z=x.deletions;z===null?(x.deletions=[N],x.flags|=16):z.push(N)}}function a(x,N){if(!t)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=Pr(x,N),x.index=0,x.sibling=null,x}function d(x,N,z){return x.index=z,t?(z=x.alternate,z!==null?(z=z.index,z<N?(x.flags|=33554434,N):z):(x.flags|=33554434,N)):(x.flags|=1048576,N)}function v(x){return t&&x.alternate===null&&(x.flags|=33554434),x}function T(x,N,z,Q){return N===null||N.tag!==6?(N=id(z,x.mode,Q),N.return=x,N):(N=h(N,z),N.return=x,N)}function R(x,N,z,Q){var oe=z.type;return oe===p?K(x,N,z.props.children,Q,z.key):N!==null&&(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===te&&cg(oe)===N.type)?(N=h(N,z.props),Qo(N,z),N.return=x,N):(N=rc(z.type,z.key,z.props,null,x.mode,Q),Qo(N,z),N.return=x,N)}function k(x,N,z,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==z.containerInfo||N.stateNode.implementation!==z.implementation?(N=rd(z,x.mode,Q),N.return=x,N):(N=h(N,z.children||[]),N.return=x,N)}function K(x,N,z,Q,oe){return N===null||N.tag!==7?(N=xs(z,x.mode,Q,oe),N.return=x,N):(N=h(N,z),N.return=x,N)}function W(x,N,z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=id(""+N,x.mode,z),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return z=rc(N.type,N.key,N.props,null,x.mode,z),Qo(z,N),z.return=x,z;case m:return N=rd(N,x.mode,z),N.return=x,N;case te:var Q=N._init;return N=Q(N._payload),W(x,N,z)}if(re(N)||we(N))return N=xs(N,x.mode,z,null),N.return=x,N;if(typeof N.then=="function")return W(x,zu(N),z);if(N.$$typeof===M)return W(x,tc(x,N),z);Bu(x,N)}return null}function H(x,N,z,Q){var oe=N!==null?N.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return oe!==null?null:T(x,N,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case f:return z.key===oe?R(x,N,z,Q):null;case m:return z.key===oe?k(x,N,z,Q):null;case te:return oe=z._init,z=oe(z._payload),H(x,N,z,Q)}if(re(z)||we(z))return oe!==null?null:K(x,N,z,Q,null);if(typeof z.then=="function")return H(x,N,zu(z),Q);if(z.$$typeof===M)return H(x,N,tc(x,z),Q);Bu(x,z)}return null}function F(x,N,z,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return x=x.get(z)||null,T(N,x,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case f:return x=x.get(Q.key===null?z:Q.key)||null,R(N,x,Q,oe);case m:return x=x.get(Q.key===null?z:Q.key)||null,k(N,x,Q,oe);case te:var De=Q._init;return Q=De(Q._payload),F(x,N,z,Q,oe)}if(re(Q)||we(Q))return x=x.get(z)||null,K(N,x,Q,oe,null);if(typeof Q.then=="function")return F(x,N,z,zu(Q),oe);if(Q.$$typeof===M)return F(x,N,z,tc(N,Q),oe);Bu(N,Q)}return null}function ue(x,N,z,Q){for(var oe=null,De=null,he=N,ge=N=0,Pt=null;he!==null&&ge<z.length;ge++){he.index>ge?(Pt=he,he=null):Pt=he.sibling;var qe=H(x,he,z[ge],Q);if(qe===null){he===null&&(he=Pt);break}t&&he&&qe.alternate===null&&i(x,he),N=d(qe,N,ge),De===null?oe=qe:De.sibling=qe,De=qe,he=Pt}if(ge===z.length)return a(x,he),He&&bs(x,ge),oe;if(he===null){for(;ge<z.length;ge++)he=W(x,z[ge],Q),he!==null&&(N=d(he,N,ge),De===null?oe=he:De.sibling=he,De=he);return He&&bs(x,ge),oe}for(he=l(he);ge<z.length;ge++)Pt=F(he,x,ge,z[ge],Q),Pt!==null&&(t&&Pt.alternate!==null&&he.delete(Pt.key===null?ge:Pt.key),N=d(Pt,N,ge),De===null?oe=Pt:De.sibling=Pt,De=Pt);return t&&he.forEach(function(Hr){return i(x,Hr)}),He&&bs(x,ge),oe}function Ae(x,N,z,Q){if(z==null)throw Error(s(151));for(var oe=null,De=null,he=N,ge=N=0,Pt=null,qe=z.next();he!==null&&!qe.done;ge++,qe=z.next()){he.index>ge?(Pt=he,he=null):Pt=he.sibling;var Hr=H(x,he,qe.value,Q);if(Hr===null){he===null&&(he=Pt);break}t&&he&&Hr.alternate===null&&i(x,he),N=d(Hr,N,ge),De===null?oe=Hr:De.sibling=Hr,De=Hr,he=Pt}if(qe.done)return a(x,he),He&&bs(x,ge),oe;if(he===null){for(;!qe.done;ge++,qe=z.next())qe=W(x,qe.value,Q),qe!==null&&(N=d(qe,N,ge),De===null?oe=qe:De.sibling=qe,De=qe);return He&&bs(x,ge),oe}for(he=l(he);!qe.done;ge++,qe=z.next())qe=F(he,x,ge,qe.value,Q),qe!==null&&(t&&qe.alternate!==null&&he.delete(qe.key===null?ge:qe.key),N=d(qe,N,ge),De===null?oe=qe:De.sibling=qe,De=qe);return t&&he.forEach(function(cw){return i(x,cw)}),He&&bs(x,ge),oe}function lt(x,N,z,Q){if(typeof z=="object"&&z!==null&&z.type===p&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case f:e:{for(var oe=z.key;N!==null;){if(N.key===oe){if(oe=z.type,oe===p){if(N.tag===7){a(x,N.sibling),Q=h(N,z.props.children),Q.return=x,x=Q;break e}}else if(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===te&&cg(oe)===N.type){a(x,N.sibling),Q=h(N,z.props),Qo(Q,z),Q.return=x,x=Q;break e}a(x,N);break}else i(x,N);N=N.sibling}z.type===p?(Q=xs(z.props.children,x.mode,Q,z.key),Q.return=x,x=Q):(Q=rc(z.type,z.key,z.props,null,x.mode,Q),Qo(Q,z),Q.return=x,x=Q)}return v(x);case m:e:{for(oe=z.key;N!==null;){if(N.key===oe)if(N.tag===4&&N.stateNode.containerInfo===z.containerInfo&&N.stateNode.implementation===z.implementation){a(x,N.sibling),Q=h(N,z.children||[]),Q.return=x,x=Q;break e}else{a(x,N);break}else i(x,N);N=N.sibling}Q=rd(z,x.mode,Q),Q.return=x,x=Q}return v(x);case te:return oe=z._init,z=oe(z._payload),lt(x,N,z,Q)}if(re(z))return ue(x,N,z,Q);if(we(z)){if(oe=we(z),typeof oe!="function")throw Error(s(150));return z=oe.call(z),Ae(x,N,z,Q)}if(typeof z.then=="function")return lt(x,N,zu(z),Q);if(z.$$typeof===M)return lt(x,N,tc(x,z),Q);Bu(x,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,N!==null&&N.tag===6?(a(x,N.sibling),Q=h(N,z),Q.return=x,x=Q):(a(x,N),Q=id(z,x.mode,Q),Q.return=x,x=Q),v(x)):a(x,N)}return function(x,N,z,Q){try{$o=0;var oe=lt(x,N,z,Q);return Ra=null,oe}catch(he){if(he===Go)throw he;var De=Nn(29,he,null,x.mode);return De.lanes=Q,De.return=x,De}finally{}}}var Is=hg(!0),fg=hg(!1),Ia=ze(null),Hu=ze(0);function dg(t,i){t=Gi,Ke(Hu,t),Ke(Ia,i),Gi=t|i.baseLanes}function cf(){Ke(Hu,Gi),Ke(Ia,Ia.current)}function hf(){Gi=Hu.current,rt(Ia),rt(Hu)}var Cn=ze(null),li=null;function Sr(t){var i=t.alternate;Ke(St,St.current&1),Ke(Cn,t),li===null&&(i===null||Ia.current!==null||i.memoizedState!==null)&&(li=t)}function mg(t){if(t.tag===22){if(Ke(St,St.current),Ke(Cn,t),li===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(li=t)}}else wr()}function wr(){Ke(St,St.current),Ke(Cn,Cn.current)}function ki(t){rt(Cn),li===t&&(li=null),rt(St)}var St=ze(0);function qu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var WA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},ZA=r.unstable_scheduleCallback,JA=r.unstable_NormalPriority,wt={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new WA,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&ZA(JA,function(){t.controller.abort()})}var Xo=null,df=0,Ca=0,Da=null;function eS(t,i){if(Xo===null){var a=Xo=[];df=0,Ca=vd(),Da={status:"pending",value:void 0,then:function(l){a.push(l)}}}return df++,i.then(pg,pg),i}function pg(){if(--df===0&&Xo!==null){Da!==null&&(Da.status="fulfilled");var t=Xo;Xo=null,Ca=0,Da=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function tS(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var gg=S.S;S.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eS(t,i),gg!==null&&gg(t,i)};var Cs=ze(null);function mf(){var t=Cs.current;return t!==null?t:Xe.pooledCache}function ju(t,i){i===null?Ke(Cs,Cs.current):Ke(Cs,i.pool)}function yg(){var t=mf();return t===null?null:{parent:wt._currentValue,pool:t}}var br=0,Ce=null,$e=null,mt=null,Fu=!1,Oa=!1,Ds=!1,Gu=0,Wo=0,Na=null,nS=0;function ct(){throw Error(s(321))}function pf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!hn(t[a],i[a]))return!1;return!0}function gf(t,i,a,l,h,d){return br=d,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=t===null||t.memoizedState===null?Os:Rr,Ds=!1,d=a(l,h),Ds=!1,Oa&&(d=vg(i,a,l,h)),_g(t),d}function _g(t){S.H=ui;var i=$e!==null&&$e.next!==null;if(br=0,mt=$e=Ce=null,Fu=!1,Wo=0,Na=null,i)throw Error(s(300));t===null||Mt||(t=t.dependencies,t!==null&&ec(t)&&(Mt=!0))}function vg(t,i,a,l){Ce=t;var h=0;do{if(Oa&&(Na=null),Wo=0,Oa=!1,25<=h)throw Error(s(301));if(h+=1,mt=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Ns,d=i(a,l)}while(Oa);return d}function iS(){var t=S.H,i=t.useState()[0];return i=typeof i.then=="function"?Zo(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Ce.flags|=1024),i}function yf(){var t=Gu!==0;return Gu=0,t}function _f(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function vf(t){if(Fu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Fu=!1}br=0,mt=$e=Ce=null,Oa=!1,Wo=Gu=0,Na=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ce.memoizedState=mt=t:mt=mt.next=t,mt}function pt(){if($e===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=mt===null?Ce.memoizedState:mt.next;if(i!==null)mt=i,$e=t;else{if(t===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},mt===null?Ce.memoizedState=mt=t:mt=mt.next=t}return mt}var Ku;Ku=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Zo(t){var i=Wo;return Wo+=1,Na===null&&(Na=[]),t=lg(Na,t,i),i=Ce,(mt===null?i.memoizedState:mt.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?Os:Rr),t}function $u(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zo(t);if(t.$$typeof===M)return Ft(t)}throw Error(s(438,String(t)))}function Ef(t){var i=null,a=Ce.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ku(),Ce.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=pe;return i.index++,a}function xi(t,i){return typeof i=="function"?i(t):i}function Qu(t){var i=pt();return Tf(i,$e,t)}function Tf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,R=null,k=i,K=!1;do{var W=k.lane&-536870913;if(W!==k.lane?(Le&W)===W:(br&W)===W){var H=k.revertLane;if(H===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),W===Ca&&(K=!0);else if((br&H)===H){k=k.next,H===Ca&&(K=!0);continue}else W={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},R===null?(T=R=W,v=d):R=R.next=W,Ce.lanes|=H,kr|=H;W=k.action,Ds&&a(d,W),d=k.hasEagerState?k.eagerState:a(d,W)}else H={lane:W,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},R===null?(T=R=H,v=d):R=R.next=H,Ce.lanes|=W,kr|=W;k=k.next}while(k!==null&&k!==i);if(R===null?v=d:R.next=T,!hn(d,t.memoizedState)&&(Mt=!0,K&&(a=Da,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Af(t){var i=pt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Mt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Eg(t,i,a){var l=Ce,h=pt(),d=He;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn(($e||h).memoizedState,a);if(v&&(h.memoizedState=a,Mt=!0),h=h.queue,bf(Sg.bind(null,l,h,t),[t]),h.getSnapshot!==i||v||mt!==null&&mt.memoizedState.tag&1){if(l.flags|=2048,Ma(9,Ag.bind(null,l,h,a,i),{destroy:void 0},null),Xe===null)throw Error(s(349));d||br&60||Tg(l,i,a)}return a}function Tg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ce.updateQueue,i===null?(i=Ku(),Ce.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ag(t,i,a,l){i.value=a,i.getSnapshot=l,wg(i)&&bg(t)}function Sg(t,i,a){return a(function(){wg(i)&&bg(t)})}function wg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!hn(t,a)}catch{return!0}}function bg(t){var i=Ar(t,2);i!==null&&tn(i,t,2)}function Sf(t){var i=sn();if(typeof t=="function"){var a=t;if(t=a(),Ds){Xn(!0);try{a()}finally{Xn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:t},i}function Rg(t,i,a,l){return t.baseState=a,Tf(t,$e,typeof l=="function"?l:xi)}function rS(t,i,a,l,h){if(Wu(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Ig(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Ig(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var T=a(h,l),R=S.S;R!==null&&R(v,T),Cg(t,i,T)}catch(k){wf(t,i,k)}finally{S.T=d}}else try{d=a(h,l),Cg(t,i,d)}catch(k){wf(t,i,k)}}function Cg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Dg(t,i,l)},function(l){return wf(t,i,l)}):Dg(t,i,a)}function Dg(t,i,a){i.status="fulfilled",i.value=a,Og(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Ig(t,a)))}function wf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Og(i),i=i.next;while(i!==l)}t.action=null}function Og(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Ng(t,i){return i}function Mg(t,i){if(He){var a=Xe.formState;if(a!==null){e:{var l=Ce;if(He){if(Lt){t:{for(var h=Lt,d=oi;h.nodeType!==8;){if(!d){h=null;break t}if(h=qn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Lt=qn(h.nextSibling),l=h.data==="F!";break e}}Rs(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ng,lastRenderedState:i},a.queue=l,a=Xg.bind(null,Ce,l),l.dispatch=a,l=Sf(!1),d=Of.bind(null,Ce,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=rS.bind(null,Ce,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Vg(t){var i=pt();return Pg(i,$e,t)}function Pg(t,i,a){i=Tf(t,i,Ng)[0],t=Qu(xi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Zo(i):i;var l=pt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Ce.flags|=2048,Ma(9,sS.bind(null,h,a),{destroy:void 0},null)),[i,d,t]}function sS(t,i){t.action=i}function kg(t){var i=pt(),a=$e;if(a!==null)return Pg(i,a,t);pt(),i=i.memoizedState,a=pt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ma(t,i,a,l){return t={tag:t,create:i,inst:a,deps:l,next:null},i=Ce.updateQueue,i===null&&(i=Ku(),Ce.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function xg(){return pt().memoizedState}function Yu(t,i,a,l){var h=sn();Ce.flags|=t,h.memoizedState=Ma(1|i,a,{destroy:void 0},l===void 0?null:l)}function Xu(t,i,a,l){var h=pt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&pf(l,$e.memoizedState.deps)?h.memoizedState=Ma(i,a,d,l):(Ce.flags|=t,h.memoizedState=Ma(1|i,a,d,l))}function Lg(t,i){Yu(8390656,8,t,i)}function bf(t,i){Xu(2048,8,t,i)}function Ug(t,i){return Xu(4,2,t,i)}function zg(t,i){return Xu(4,4,t,i)}function Bg(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hg(t,i,a){a=a!=null?a.concat([t]):null,Xu(4,4,Bg.bind(null,i,t),a)}function Rf(){}function qg(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&pf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function jg(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&pf(i,l[1]))return l[0];if(l=t(),Ds){Xn(!0);try{t()}finally{Xn(!1)}}return a.memoizedState=[l,i],l}function If(t,i,a){return a===void 0||br&1073741824?t.memoizedState=i:(t.memoizedState=a,t=Gy(),Ce.lanes|=t,kr|=t,a)}function Fg(t,i,a,l){return hn(a,i)?a:Ia.current!==null?(t=If(t,a,l),hn(t,i)||(Mt=!0),t):br&42?(t=Gy(),Ce.lanes|=t,kr|=t,i):(Mt=!0,t.memoizedState=a)}function Gg(t,i,a,l,h){var d=se.p;se.p=d!==0&&8>d?d:8;var v=S.T,T={};S.T=T,Of(t,!1,i,a);try{var R=h(),k=S.S;if(k!==null&&k(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=tS(R,l);Jo(t,i,K,pn(t))}else Jo(t,i,l,pn(t))}catch(W){Jo(t,i,{then:function(){},status:"rejected",reason:W},pn())}finally{se.p=d,S.T=v}}function aS(){}function Cf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Kg(t).queue;Gg(t,h,i,Ie,a===null?aS:function(){return $g(t),a(l)})}function Kg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:Ie},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function $g(t){var i=Kg(t).next.queue;Jo(t,i,{},pn())}function Df(){return Ft(vl)}function Qg(){return pt().memoizedState}function Yg(){return pt().memoizedState}function oS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();t=Dr(a);var l=Or(i,t,a);l!==null&&(tn(l,i,a),nl(l,i,a)),i={cache:ff()},t.payload=i;return}i=i.return}}function lS(t,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Wu(t)?Wg(i,a):(a=sf(t,i,a,l),a!==null&&(tn(a,t,l),Zg(a,i,l)))}function Xg(t,i,a){var l=pn();Jo(t,i,a,l)}function Jo(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wu(t))Wg(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,hn(T,v))return Pu(t,i,h,0),Xe===null&&Vu(),!1}catch{}finally{}if(a=sf(t,i,h,l),a!==null)return tn(a,t,l),Zg(a,i,l),!0}return!1}function Of(t,i,a,l){if(l={lane:2,revertLane:vd(),action:l,hasEagerState:!1,eagerState:null,next:null},Wu(t)){if(i)throw Error(s(479))}else i=sf(t,a,l,2),i!==null&&tn(i,t,2)}function Wu(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function Wg(t,i){Oa=Fu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Zg(t,i,a){if(a&4194176){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,fr(t,a)}}var ui={readContext:Ft,use:$u,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};ui.useCacheRefresh=ct,ui.useMemoCache=ct,ui.useHostTransitionStatus=ct,ui.useFormState=ct,ui.useActionState=ct,ui.useOptimistic=ct;var Os={readContext:Ft,use:$u,useCallback:function(t,i){return sn().memoizedState=[t,i===void 0?null:i],t},useContext:Ft,useEffect:Lg,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Yu(4194308,4,Bg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Yu(4194308,4,t,i)},useInsertionEffect:function(t,i){Yu(4,2,t,i)},useMemo:function(t,i){var a=sn();i=i===void 0?null:i;var l=t();if(Ds){Xn(!0);try{t()}finally{Xn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Ds){Xn(!0);try{a(i)}finally{Xn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=lS.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var i=sn();return t={current:t},i.memoizedState=t},useState:function(t){t=Sf(t);var i=t.queue,a=Xg.bind(null,Ce,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(t,i){var a=sn();return If(a,t,i)},useTransition:function(){var t=Sf(!1);return t=Gg.bind(null,Ce,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ce,h=sn();if(He){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xe===null)throw Error(s(349));Le&60||Tg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Lg(Sg.bind(null,l,d,t),[t]),l.flags|=2048,Ma(9,Ag.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var t=sn(),i=Xe.identifierPrefix;if(He){var a=Pi,l=Vi;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Gu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=nS++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return sn().memoizedState=oS.bind(null,Ce)}};Os.useMemoCache=Ef,Os.useHostTransitionStatus=Df,Os.useFormState=Mg,Os.useActionState=Mg,Os.useOptimistic=function(t){var i=sn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Of.bind(null,Ce,!0,a),a.dispatch=i,[t,i]};var Rr={readContext:Ft,use:$u,useCallback:qg,useContext:Ft,useEffect:bf,useImperativeHandle:Hg,useInsertionEffect:Ug,useLayoutEffect:zg,useMemo:jg,useReducer:Qu,useRef:xg,useState:function(){return Qu(xi)},useDebugValue:Rf,useDeferredValue:function(t,i){var a=pt();return Fg(a,$e.memoizedState,t,i)},useTransition:function(){var t=Qu(xi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:Zo(t),i]},useSyncExternalStore:Eg,useId:Qg};Rr.useCacheRefresh=Yg,Rr.useMemoCache=Ef,Rr.useHostTransitionStatus=Df,Rr.useFormState=Vg,Rr.useActionState=Vg,Rr.useOptimistic=function(t,i){var a=pt();return Rg(a,$e,t,i)};var Ns={readContext:Ft,use:$u,useCallback:qg,useContext:Ft,useEffect:bf,useImperativeHandle:Hg,useInsertionEffect:Ug,useLayoutEffect:zg,useMemo:jg,useReducer:Af,useRef:xg,useState:function(){return Af(xi)},useDebugValue:Rf,useDeferredValue:function(t,i){var a=pt();return $e===null?If(a,t,i):Fg(a,$e.memoizedState,t,i)},useTransition:function(){var t=Af(xi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:Zo(t),i]},useSyncExternalStore:Eg,useId:Qg};Ns.useCacheRefresh=Yg,Ns.useMemoCache=Ef,Ns.useHostTransitionStatus=Df,Ns.useFormState=kg,Ns.useActionState=kg,Ns.useOptimistic=function(t,i){var a=pt();return $e!==null?Rg(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])};function Nf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:I({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={isMounted:function(t){return(t=t._reactInternals)?fe(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=pn(),h=Dr(l);h.payload=i,a!=null&&(h.callback=a),i=Or(t,h,l),i!==null&&(tn(i,t,l),nl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=pn(),h=Dr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Or(t,h,l),i!==null&&(tn(i,t,l),nl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=pn(),l=Dr(a);l.tag=2,i!=null&&(l.callback=i),i=Or(t,l,a),i!==null&&(tn(i,t,a),nl(i,t,a))}};function Jg(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Bo(a,l)||!Bo(h,d):!0}function ey(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Mf.enqueueReplaceState(i,i.state,null)}function Ms(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=I({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ty(t){Zu(t)}function ny(t){console.error(t)}function iy(t){Zu(t)}function Ju(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ry(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Vf(t,i,a){return a=Dr(a),a.tag=3,a.payload={element:null},a.callback=function(){Ju(t,i)},a}function sy(t){return t=Dr(t),t.tag=3,t}function ay(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){ry(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){ry(i,a,l),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function uS(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&tl(i,a,h,!0),a=Cn.current,a!==null){switch(a.tag){case 13:return li===null?md():a.alternate===null&&ot===0&&(ot=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),gd(t,l,h)),!1;case 22:return a.flags|=65536,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),gd(t,l,h)),!1}throw Error(s(435,a.tag))}return gd(t,l,h),md(),!1}if(He)return i=Cn.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==lf&&(t=Error(s(422),{cause:l}),Fo(bn(t,a)))):(l!==lf&&(i=Error(s(423),{cause:l}),Fo(bn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=bn(l,a),h=Vf(t.stateNode,l,h),Qf(t,h),ot!==4&&(ot=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),cl===null?cl=[d]:cl.push(d),ot!==4&&(ot=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Vf(a.stateNode,l,t),Qf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=sy(h),ay(h,t,a,l),Qf(a,h),!1}a=a.return}while(a!==null);return!1}var oy=Error(s(461)),Mt=!1;function Ut(t,i,a,l){i.child=t===null?fg(i,null,a,l):Is(i,t.child,a,l)}function ly(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ps(i),l=gf(t,i,a,v,d,h),T=yf(),t!==null&&!Mt?(_f(t,i,h),Li(t,i,h)):(He&&T&&af(i),i.flags|=1,Ut(t,i,l,h),i.child)}function uy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!nd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,cy(t,i,d,l,h)):(t=rc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!qf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(v,l)&&t.ref===i.ref)return Li(t,i,h)}return i.flags|=1,t=Pr(d,l),t.ref=i.ref,t.return=i,i.child=t}function cy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Bo(d,l)&&t.ref===i.ref)if(Mt=!1,i.pendingProps=l=d,qf(t,h))t.flags&131072&&(Mt=!0);else return i.lanes=t.lanes,Li(t,i,h)}return Pf(t,i,a,l,h)}function hy(t,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(el(t,i),l.mode==="hidden"||d){if(i.flags&128){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return fy(t,i,l,a)}if(a&536870912)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ju(i,v!==null?v.cachePool:null),v!==null?dg(i,v):cf(),mg(i);else return i.lanes=i.childLanes=536870912,fy(t,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(ju(i,v.cachePool),dg(i,v),wr(),i.memoizedState=null):(t!==null&&ju(i,null),cf(),wr());return Ut(t,i,h,a),i.child}function fy(t,i,a,l){var h=mf();return h=h===null?null:{parent:wt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&ju(i,null),cf(),mg(i),t!==null&&tl(t,i,l,!0),null}function el(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=2097664)}}function Pf(t,i,a,l,h){return Ps(i),a=gf(t,i,a,l,void 0,h),l=yf(),t!==null&&!Mt?(_f(t,i,h),Li(t,i,h)):(He&&l&&af(i),i.flags|=1,Ut(t,i,a,h),i.child)}function dy(t,i,a,l,h,d){return Ps(i),i.updateQueue=null,a=vg(i,l,a,h),_g(t),l=yf(),t!==null&&!Mt?(_f(t,i,d),Li(t,i,d)):(He&&l&&af(i),i.flags|=1,Ut(t,i,a,d),i.child)}function my(t,i,a,l,h){if(Ps(i),i.stateNode===null){var d=Sa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ft(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Kf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ft(v):Sa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Nf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Mf.enqueueReplaceState(d,d.state,null),rl(i,l,d,h),il(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,R=Ms(a,T);d.props=R;var k=d.context,K=a.contextType;v=Sa,typeof K=="object"&&K!==null&&(v=Ft(K));var W=a.getDerivedStateFromProps;K=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||k!==v)&&ey(i,d,l,v),Cr=!1;var H=i.memoizedState;d.state=H,rl(i,l,d,h),il(),k=i.memoizedState,T||H!==k||Cr?(typeof W=="function"&&(Nf(i,a,W,l),k=i.memoizedState),(R=Cr||Jg(i,a,R,l,H,k,v))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),d.props=l,d.state=k,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,$f(t,i),v=i.memoizedProps,K=Ms(a,v),d.props=K,W=i.pendingProps,H=d.context,k=a.contextType,R=Sa,typeof k=="object"&&k!==null&&(R=Ft(k)),T=a.getDerivedStateFromProps,(k=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==W||H!==R)&&ey(i,d,l,R),Cr=!1,H=i.memoizedState,d.state=H,rl(i,l,d,h),il();var F=i.memoizedState;v!==W||H!==F||Cr||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof T=="function"&&(Nf(i,a,T,l),F=i.memoizedState),(K=Cr||Jg(i,a,K,l,H,F,R)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=R,l=K):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,el(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Is(i,t.child,null,h),i.child=Is(i,null,a,h)):Ut(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Li(t,i,h),t}function py(t,i,a,l){return jo(),i.flags|=256,Ut(t,i,a,l),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:yg()}}function Lf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Mn),t}function gy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(He){if(h?Sr(i):wr(),He){var T=Lt,R;if(R=T){e:{for(R=T,T=oi;R.nodeType!==8;){if(!T){T=null;break e}if(R=qn(R.nextSibling),R===null){T=null;break e}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:ws!==null?{id:Vi,overflow:Pi}:null,retryLane:536870912},R=Nn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,en=i,Lt=null,R=!0):R=!1}R||Rs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;ki(i)}return T=l.children,l=l.fallback,h?(wr(),h=i.mode,T=zf({mode:"hidden",children:T},h),l=xs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=xf(a),h.childLanes=Lf(t,v,a),i.memoizedState=kf,l):(Sr(i),Uf(i,T))}if(R=t.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(Sr(i),i.flags&=-257,i=Bf(t,i,a)):i.memoizedState!==null?(wr(),i.child=t.child,i.flags|=128,i=null):(wr(),h=l.fallback,T=i.mode,l=zf({mode:"visible",children:l.children},T),h=xs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Is(i,t.child,null,a),l=i.child,l.memoizedState=xf(a),l.childLanes=Lf(t,v,a),i.memoizedState=kf,i=h);else if(Sr(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var k=v.dgst;v=k,l=Error(s(419)),l.stack="",l.digest=v,Fo({value:l,source:null,stack:null}),i=Bf(t,i,a)}else if(Mt||tl(t,i,a,!1),v=(a&t.childLanes)!==0,Mt||v){if(v=Xe,v!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(v.suspendedLanes|a)?0:l,l!==0&&l!==R.retryLane)throw R.retryLane=l,Ar(t,l),tn(v,t,l),oy}T.data==="$?"||md(),i=Bf(t,i,a)}else T.data==="$?"?(i.flags|=128,i.child=t.child,i=wS.bind(null,t),T._reactRetry=i,i=null):(t=R.treeContext,Lt=qn(T.nextSibling),en=i,He=!0,Bn=null,oi=!1,t!==null&&(Rn[In++]=Vi,Rn[In++]=Pi,Rn[In++]=ws,Vi=t.id,Pi=t.overflow,ws=i),i=Uf(i,l.children),i.flags|=4096);return i}return h?(wr(),h=l.fallback,T=i.mode,R=t.child,k=R.sibling,l=Pr(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&31457280,k!==null?h=Pr(k,h):(h=xs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=xf(a):(R=T.cachePool,R!==null?(k=wt._currentValue,R=R.parent!==k?{parent:k,pool:k}:R):R=yg(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=Lf(t,v,a),i.memoizedState=kf,l):(Sr(i),a=t.child,t=a.sibling,a=Pr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function Uf(t,i){return i=zf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function zf(t,i){return qy(t,i,0,null)}function Bf(t,i,a){return Is(i,t.child,null,a),t=Uf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function yy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ff(t.return,i,a)}function Hf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function _y(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ut(t,i,l.children,a),l=St.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yy(t,a,i);else if(t.tag===19)yy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ke(St,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&qu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Hf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&qu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Hf(i,!0,a,null,d);break;case"together":Hf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Li(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),kr|=i.lanes,!(a&i.childLanes))if(t!==null){if(tl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Pr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Pr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function qf(t,i){return t.lanes&i?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function cS(t,i,a){switch(i.tag){case 3:ar(i,i.stateNode.containerInfo),Ir(i,wt,t.memoizedState.cache),jo();break;case 27:case 5:vo(i);break;case 4:ar(i,i.stateNode.containerInfo);break;case 10:Ir(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Sr(i),i.flags|=128,null):a&i.child.childLanes?gy(t,i,a):(Sr(i),t=Li(t,i,a),t!==null?t.sibling:null);Sr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(tl(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return _y(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ke(St,St.current),l)break;return null;case 22:case 23:return i.lanes=0,hy(t,i,a);case 24:Ir(i,wt,t.memoizedState.cache)}return Li(t,i,a)}function vy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mt=!0;else{if(!qf(t,a)&&!(i.flags&128))return Mt=!1,cS(t,i,a);Mt=!!(t.flags&131072)}else Mt=!1,He&&i.flags&1048576&&ig(i,Lu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")nd(l)?(t=Ms(l,t),i.tag=1,i=my(null,i,l,t,a)):(i.tag=0,i=Pf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===B){i.tag=11,i=ly(null,i,l,t,a);break e}else if(h===Y){i.tag=14,i=uy(null,i,l,t,a);break e}}throw i=b(l)||l,Error(s(306,i,""))}}return i;case 0:return Pf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ms(l,i.pendingProps),my(t,i,l,h,a);case 3:e:{if(ar(i,i.stateNode.containerInfo),t===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,$f(t,i),rl(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Ir(i,wt,d),d!==h.cache&&Gf(i,[wt],a,!0),il(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=py(t,i,d,a);break e}else if(d!==l){l=bn(Error(s(424)),i),Fo(l),i=py(t,i,d,a);break e}else for(Lt=qn(i.stateNode.containerInfo.firstChild),en=i,He=!0,Bn=null,oi=!0,a=fg(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(jo(),d===l){i=Li(t,i,a);break e}Ut(t,i,d,a)}i=i.child}return i;case 26:return el(t,i),t===null?(a=A_(i.type,null,i.pendingProps,null))?i.memoizedState=a:He||(a=i.type,t=i.pendingProps,l=gc(yn.current).createElement(a),l[Dt]=i,l[Et]=t,zt(l,a,t),et(l),i.stateNode=l):i.memoizedState=A_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return vo(i),t===null&&He&&(l=i.stateNode=v_(i.type,i.pendingProps,yn.current),en=i,oi=!0,Lt=qn(l.firstChild)),l=i.pendingProps.children,t!==null||He?Ut(t,i,l,a):i.child=Is(i,null,l,a),el(t,i),i.child;case 5:return t===null&&He&&((h=l=Lt)&&(l=BS(l,i.type,i.pendingProps,oi),l!==null?(i.stateNode=l,en=i,Lt=qn(l.firstChild),oi=!1,h=!0):h=!1),h||Rs(i)),vo(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,Cd(h,d)?l=null:v!==null&&Cd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=gf(t,i,iS,null,null,a),vl._currentValue=h),el(t,i),Ut(t,i,l,a),i.child;case 6:return t===null&&He&&((t=a=Lt)&&(a=HS(a,i.pendingProps,oi),a!==null?(i.stateNode=a,en=i,Lt=null,t=!0):t=!1),t||Rs(i)),null;case 13:return gy(t,i,a);case 4:return ar(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Is(i,null,l,a):Ut(t,i,l,a),i.child;case 11:return ly(t,i,i.type,i.pendingProps,a);case 7:return Ut(t,i,i.pendingProps,a),i.child;case 8:return Ut(t,i,i.pendingProps.children,a),i.child;case 12:return Ut(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ir(i,i.type,l.value),Ut(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ps(i),h=Ft(h),l=l(h),i.flags|=1,Ut(t,i,l,a),i.child;case 14:return uy(t,i,i.type,i.pendingProps,a);case 15:return cy(t,i,i.type,i.pendingProps,a);case 19:return _y(t,i,a);case 22:return hy(t,i,a);case 24:return Ps(i),l=Ft(wt),t===null?(h=mf(),h===null&&(h=Xe,d=ff(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Kf(i),Ir(i,wt,h)):(t.lanes&a&&($f(t,i),rl(i,null,null,a),il()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ir(i,wt,l)):(l=d.cache,Ir(i,wt,l),l!==h.cache&&Gf(i,[wt],a,!0))),Ut(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var jf=ze(null),Vs=null,Ui=null;function Ir(t,i,a){Ke(jf,i._currentValue),i._currentValue=a}function zi(t){t._currentValue=jf.current,rt(jf)}function Ff(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Gf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Ff(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Ff(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function tl(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if(h.flags&524288)d=!0;else if(h.flags&262144)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;hn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===sr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(vl):t=[vl])}h=h.return}t!==null&&Gf(i,t,a,l),i.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ps(t){Vs=t,Ui=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Ey(Vs,t)}function tc(t,i){return Vs===null&&Ps(t),Ey(t,i)}function Ey(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(t===null)throw Error(s(308));Ui=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ui=Ui.next=i;return a}var Cr=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Dr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Or(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,nt&2){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=ku(t),tg(t,null,a),i}return Pu(t,l,i,a),ku(t)}function nl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,fr(t,a)}}function Qf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Yf=!1;function il(){if(Yf){var t=Da;if(t!==null)throw t}}function rl(t,i,a,l){Yf=!1;var h=t.updateQueue;Cr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,k=R.next;R.next=null,v===null?d=k:v.next=k,v=R;var K=t.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=k:T.next=k,K.lastBaseUpdate=R))}if(d!==null){var W=h.baseState;v=0,K=k=R=null,T=d;do{var H=T.lane&-536870913,F=H!==T.lane;if(F?(Le&H)===H:(l&H)===H){H!==0&&H===Ca&&(Yf=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ue=t,Ae=T;H=i;var lt=a;switch(Ae.tag){case 1:if(ue=Ae.payload,typeof ue=="function"){W=ue.call(lt,W,H);break e}W=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=Ae.payload,H=typeof ue=="function"?ue.call(lt,W,H):ue,H==null)break e;W=I({},W,H);break e;case 2:Cr=!0}}H=T.callback,H!==null&&(t.flags|=64,F&&(t.flags|=8192),F=h.callbacks,F===null?h.callbacks=[H]:F.push(H))}else F={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(k=K=F,R=W):K=K.next=F,v|=H;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;F=T,T=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);K===null&&(R=W),h.baseState=R,h.firstBaseUpdate=k,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),kr|=v,t.lanes=v,t.memoizedState=W}}function Ty(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Ay(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ty(a[t],i)}function sl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Ye(i,i.return,T)}}function Nr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var R=a;try{T()}catch(k){Ye(h,R,k)}}}l=l.next}while(l!==d)}}catch(k){Ye(i,i.return,k)}}function Sy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Ay(i,a)}catch(l){Ye(t,t.return,l)}}}function wy(t,i,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,i,l)}}function ks(t,i){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){Ye(t,i,d)}}function fn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,i,h)}else a.current=null}function by(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function Ry(t,i,a){try{var l=t.stateNode;kS(l,t.type,a,i),l[Et]=i}catch(h){Ye(t,t.return,h)}}function Iy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=pc));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Wf(t,i,a),t=t.sibling;t!==null;)Wf(t,i,a),t=t.sibling}function nc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(nc(t,i,a),t=t.sibling;t!==null;)nc(t,i,a),t=t.sibling}var Bi=!1,at=!1,Zf=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,Vt=null,Dy=!1;function hS(t,i){if(t=t.containerInfo,Rd=Ac,t=Kp(t),Jh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,R=-1,k=0,K=0,W=t,H=null;t:for(;;){for(var F;W!==a||h!==0&&W.nodeType!==3||(T=v+h),W!==d||l!==0&&W.nodeType!==3||(R=v+l),W.nodeType===3&&(v+=W.nodeValue.length),(F=W.firstChild)!==null;)H=W,W=F;for(;;){if(W===t)break t;if(H===a&&++k===h&&(T=v),H===d&&++K===l&&(R=v),(F=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=F}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Id={focusedElem:t,selectionRange:a},Ac=!1,Vt=i;Vt!==null;)if(i=Vt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Vt=t;else for(;Vt!==null;){switch(i=Vt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ue=Ms(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ue,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ae){Ye(a,a.return,Ae)}}break;case 3:if(t&1024){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Nd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Vt=t;break}Vt=i.return}return ue=Dy,Dy=!1,ue}function Oy(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),l&4&&sl(5,a);break;case 1:if(qi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(T){Ye(a,a.return,T)}else{var h=Ms(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Ye(a,a.return,T)}}l&64&&Sy(a),l&512&&ks(a,a.return);break;case 3:if(qi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ay(l,t)}catch(T){Ye(a,a.return,T)}}break;case 26:qi(t,a),l&512&&ks(a,a.return);break;case 27:case 5:qi(t,a),i===null&&l&4&&by(a),l&512&&ks(a,a.return);break;case 12:qi(t,a);break;case 13:qi(t,a),l&4&&Vy(t,a);break;case 22:if(h=a.memoizedState!==null||Bi,!h){i=i!==null&&i.memoizedState!==null||at;var d=Bi,v=at;Bi=h,(at=i)&&!v?Mr(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),Bi=d,at=v}l&512&&(a.memoizedProps.mode==="manual"?ks(a,a.return):fn(a,a.return));break;default:qi(t,a)}}function Ny(t){var i=t.alternate;i!==null&&(t.alternate=null,Ny(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&hs(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,dn=!1;function Hi(t,i,a){for(a=a.child;a!==null;)My(t,i,a),a=a.sibling}function My(t,i,a){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(or,a)}catch{}switch(a.tag){case 26:at||fn(a,i),Hi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||fn(a,i);var l=gt,h=dn;for(gt=a.stateNode,Hi(t,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);hs(a),gt=l,dn=h;break;case 5:at||fn(a,i);case 6:h=gt;var d=dn;if(gt=null,Hi(t,i,a),gt=h,dn=d,gt!==null)if(dn)try{t=gt,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){Ye(a,i,v)}else try{gt.removeChild(a.stateNode)}catch(v){Ye(a,i,v)}break;case 18:gt!==null&&(dn?(i=gt,a=a.stateNode,i.nodeType===8?Od(i.parentNode,a):i.nodeType===1&&Od(i,a),Sl(i)):Od(gt,a.stateNode));break;case 4:l=gt,h=dn,gt=a.stateNode.containerInfo,dn=!0,Hi(t,i,a),gt=l,dn=h;break;case 0:case 11:case 14:case 15:at||Nr(2,a,i),at||Nr(4,a,i),Hi(t,i,a);break;case 1:at||(fn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wy(a,i,l)),Hi(t,i,a);break;case 21:Hi(t,i,a);break;case 22:at||fn(a,i),at=(l=at)||a.memoizedState!==null,Hi(t,i,a),at=l;break;default:Hi(t,i,a)}}function Vy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Sl(t)}catch(a){Ye(i,i.return,a)}}function fS(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Cy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Cy),i;default:throw Error(s(435,t.tag))}}function Jf(t,i){var a=fS(t);i.forEach(function(l){var h=bS.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Dn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:gt=T.stateNode,dn=!1;break e;case 3:gt=T.stateNode.containerInfo,dn=!0;break e;case 4:gt=T.stateNode.containerInfo,dn=!0;break e}T=T.return}if(gt===null)throw Error(s(160));My(d,v,h),gt=null,dn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Py(i,t),i=i.sibling}var Hn=null;function Py(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Dn(i,t),On(t),l&4&&(Nr(3,t,t.return),sl(3,t),Nr(5,t,t.return));break;case 1:Dn(i,t),On(t),l&512&&(at||a===null||fn(a,a.return)),l&64&&Bi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Hn;if(Dn(i,t),On(t),l&512&&(at||a===null||fn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[mr]||d[Dt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),zt(d,l,a),d[Dt]=t,et(d),l=d;break e;case"link":var v=b_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=b_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Dt]=t,et(d),l=d}t.stateNode=l}else R_(h,t.type,t.stateNode);else t.stateNode=w_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?R_(h,t.type,t.stateNode):w_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ry(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var R=h.firstChild;R;){var k=R.nextSibling,K=R.nodeName;R[mr]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&R.rel.toLowerCase()==="stylesheet"||h.removeChild(R),R=k}for(var W=t.type,H=h.attributes;H.length;)h.removeAttributeNode(H[0]);zt(h,W,d),h[Dt]=t,h[Et]=d}catch(ue){Ye(t,t.return,ue)}}case 5:if(Dn(i,t),On(t),l&512&&(at||a===null||fn(a,a.return)),t.flags&32){h=t.stateNode;try{En(h,"")}catch(ue){Ye(t,t.return,ue)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Ry(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Zf=!0);break;case 6:if(Dn(i,t),On(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ue){Ye(t,t.return,ue)}}break;case 3:if(vc=null,h=Hn,Hn=yc(i.containerInfo),Dn(i,t),Hn=h,On(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Sl(i.containerInfo)}catch(ue){Ye(t,t.return,ue)}Zf&&(Zf=!1,ky(t));break;case 4:l=Hn,Hn=yc(t.stateNode.containerInfo),Dn(i,t),On(t),Hn=l;break;case 12:Dn(i,t),On(t);break;case 13:Dn(i,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ld=nn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Jf(t,l)));break;case 22:if(l&512&&(at||a===null||fn(a,a.return)),R=t.memoizedState!==null,k=a!==null&&a.memoizedState!==null,K=Bi,W=at,Bi=K||R,at=W||k,Dn(i,t),at=W,Bi=K,On(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=R?i._visibility&-2:i._visibility|1,R&&(i=Bi||at,a===null||k||i||Va(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){k=a=i;try{if(h=k.stateNode,R)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=k.stateNode,T=k.memoizedProps.style;var F=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(ue){Ye(k,k.return,ue)}}}else if(i.tag===6){if(a===null){k=i;try{k.stateNode.nodeValue=R?"":k.memoizedProps}catch(ue){Ye(k,k.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Jf(t,a))));break;case 19:Dn(i,t),On(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Jf(t,l)));break;case 21:break;default:Dn(i,t),On(t)}}function On(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Iy(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=Xf(t);nc(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(En(v,""),l.flags&=-33);var T=Xf(t);nc(t,T,v);break;case 3:case 4:var R=l.stateNode.containerInfo,k=Xf(t);Wf(t,k,R);break;default:throw Error(s(161))}}}catch(K){Ye(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ky(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;ky(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function qi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Oy(t,i.alternate,i),i=i.sibling}function Va(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Nr(4,i,i.return),Va(i);break;case 1:fn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&wy(i,i.return,a),Va(i);break;case 26:case 27:case 5:fn(i,i.return),Va(i);break;case 22:fn(i,i.return),i.memoizedState===null&&Va(i);break;default:Va(i)}t=t.sibling}}function Mr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Mr(h,d,a),sl(4,d);break;case 1:if(Mr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(k){Ye(l,l.return,k)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)Ty(R[h],T)}catch(k){Ye(l,l.return,k)}}a&&v&64&&Sy(d),ks(d,d.return);break;case 26:case 27:case 5:Mr(h,d,a),a&&l===null&&v&4&&by(d),ks(d,d.return);break;case 12:Mr(h,d,a);break;case 13:Mr(h,d,a),a&&v&4&&Vy(h,d);break;case 22:d.memoizedState===null&&Mr(h,d,a),ks(d,d.return);break;default:Mr(h,d,a)}i=i.sibling}}function ed(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yo(a))}function td(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t))}function Vr(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)xy(t,i,a,l),i=i.sibling}function xy(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Vr(t,i,a,l),h&2048&&sl(9,i);break;case 3:Vr(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t)));break;case 12:if(h&2048){Vr(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){Ye(i,i.return,R)}}else Vr(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Vr(t,i,a,l):al(t,i):d._visibility&4?Vr(t,i,a,l):(d._visibility|=4,Pa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&ed(i.alternate,i);break;case 24:Vr(t,i,a,l),h&2048&&td(i.alternate,i);break;default:Vr(t,i,a,l)}}function Pa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,R=l,k=v.flags;switch(v.tag){case 0:case 11:case 15:Pa(d,v,T,R,h),sl(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&4?Pa(d,v,T,R,h):al(d,v):(K._visibility|=4,Pa(d,v,T,R,h)),h&&k&2048&&ed(v.alternate,v);break;case 24:Pa(d,v,T,R,h),h&&k&2048&&td(v.alternate,v);break;default:Pa(d,v,T,R,h)}i=i.sibling}}function al(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:al(a,l),h&2048&&ed(l.alternate,l);break;case 24:al(a,l),h&2048&&td(l.alternate,l);break;default:al(a,l)}i=i.sibling}}var ol=8192;function ka(t){if(t.subtreeFlags&ol)for(t=t.child;t!==null;)Ly(t),t=t.sibling}function Ly(t){switch(t.tag){case 26:ka(t),t.flags&ol&&t.memoizedState!==null&&ew(Hn,t.memoizedState,t.memoizedProps);break;case 5:ka(t);break;case 3:case 4:var i=Hn;Hn=yc(t.stateNode.containerInfo),ka(t),Hn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ol,ol=16777216,ka(t),ol=i):ka(t));break;default:ka(t)}}function Uy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ll(t){var i=t.deletions;if(t.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,By(l,t)}Uy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zy(t),t=t.sibling}function zy(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&Nr(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,ic(t)):ll(t);break;default:ll(t)}}function ic(t){var i=t.deletions;if(t.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,By(l,t)}Uy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Nr(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,ic(i));break;default:ic(i)}t=t.sibling}}function By(t,i){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:Nr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Vt=l;else e:for(a=t;Vt!==null;){l=Vt;var h=l.sibling,d=l.return;if(Ny(l),l===a){Vt=null;break e}if(h!==null){h.return=d,Vt=h;break e}Vt=d}}}function dS(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,i,a,l){return new dS(t,i,a,l)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pr(t,i){var a=t.alternate;return a===null?(a=Nn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hy(t,i){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function rc(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")nd(t)&&(v=1);else if(typeof t=="string")v=ZS(t,a,Xt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return xs(a.children,h,d,i);case y:v=8,h|=24;break;case E:return t=Nn(12,a,i,h|2),t.elementType=E,t.lanes=d,t;case $:return t=Nn(13,a,i,h),t.elementType=$,t.lanes=d,t;case q:return t=Nn(19,a,i,h),t.elementType=q,t.lanes=d,t;case ee:return qy(a,h,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case M:v=10;break e;case D:v=9;break e;case B:v=11;break e;case Y:v=14;break e;case te:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=Nn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function xs(t,i,a,l){return t=Nn(7,t,l,i),t.lanes=a,t}function qy(t,i,a,l){t=Nn(22,t,l,i),t.elementType=ee,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if(!(h._pendingVisibility&2)){var v=Ar(d,2);v!==null&&(h._pendingVisibility|=2,tn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if(h._pendingVisibility&2){var v=Ar(d,2);v!==null&&(h._pendingVisibility&=-3,tn(v,d,2))}}};return t.stateNode=h,t}function id(t,i,a){return t=Nn(6,t,null,i),t.lanes=a,t}function rd(t,i,a){return i=Nn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function ji(t){t.flags|=4}function jy(t,i){if(i.type!=="stylesheet"||i.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!I_(i)){if(i=Cn.current,i!==null&&((Le&4194176)===Le?li!==null:(Le&62914560)!==Le&&!(Le&536870912)||i!==li))throw Ko=uf,ag;t.flags|=8192}}function sc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?cr():536870912,t.lanes|=i,La|=i)}function ul(t,i){if(!He)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function tt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function mS(t,i,a){var l=i.pendingProps;switch(of(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return tt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),zi(wt),Ai(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qo(i)?ji(i):t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Bn!==null&&(fd(Bn),Bn=null))),tt(i),null;case 26:return a=i.memoizedState,t===null?(ji(i),a!==null?(tt(i),jy(i,a)):(tt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(ji(i),tt(i),jy(i,a)):(tt(i),i.flags&=-16777217):(t.memoizedProps!==l&&ji(i),tt(i),i.flags&=-16777217),null;case 27:na(i),a=yn.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return tt(i),null}t=Xt.current,qo(i)?rg(i):(t=v_(h,l,a),i.stateNode=t,ji(i))}return tt(i),null;case 5:if(na(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return tt(i),null}if(t=Xt.current,qo(i))rg(i);else{switch(h=gc(yn.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Dt]=i,t[Et]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(zt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(i)}}return tt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=yn.current,qo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Dt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||d_(t.nodeValue,a)),t||Rs(i)}else t=gc(t).createTextNode(l),t[Dt]=i,i.stateNode=t}return tt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=qo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Dt]=i}else jo(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;tt(i),h=!1}else Bn!==null&&(fd(Bn),Bn=null),h=!0;if(!h)return i.flags&256?(ki(i),i):(ki(i),null)}if(ki(i),i.flags&128)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),sc(i,i.updateQueue),tt(i),null;case 4:return Ai(),t===null&&Sd(i.stateNode.containerInfo),tt(i),null;case 10:return zi(i.type),tt(i),null;case 19:if(rt(St),h=i.memoizedState,h===null)return tt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)ul(h,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(d=qu(t),d!==null){for(i.flags|=128,ul(h,!1),t=d.updateQueue,i.updateQueue=t,sc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Hy(a,t),a=a.sibling;return Ke(St,St.current&1|2),i.child}t=t.sibling}h.tail!==null&&nn()>ac&&(i.flags|=128,l=!0,ul(h,!1),i.lanes=4194304)}else{if(!l)if(t=qu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,sc(i,t),ul(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!He)return tt(i),null}else 2*nn()-h.renderingStartTime>ac&&a!==536870912&&(i.flags|=128,l=!0,ul(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=nn(),i.sibling=null,t=St.current,Ke(St,l?t&1|2:t&1),i):(tt(i),null);case 22:case 23:return ki(i),hf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?a&536870912&&!(i.flags&128)&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),a=i.updateQueue,a!==null&&sc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&rt(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),zi(wt),tt(i),null;case 25:return null}throw Error(s(156,i.tag))}function pS(t,i){switch(of(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return zi(wt),Ai(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return na(i),null;case 13:if(ki(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));jo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return rt(St),null;case 4:return Ai(),null;case 10:return zi(i.type),null;case 22:case 23:return ki(i),hf(),t!==null&&rt(Cs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return zi(wt),null;case 25:return null;default:return null}}function Fy(t,i){switch(of(i),i.tag){case 3:zi(wt),Ai();break;case 26:case 27:case 5:na(i);break;case 4:Ai();break;case 13:ki(i);break;case 19:rt(St);break;case 10:zi(i.type);break;case 22:case 23:ki(i),hf(),t!==null&&rt(Cs);break;case 24:zi(wt)}}var gS={getCacheForType:function(t){var i=Ft(wt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},yS=typeof WeakMap=="function"?WeakMap:Map,nt=0,Xe=null,Oe=null,Le=0,We=0,mn=null,Fi=!1,xa=!1,sd=!1,Gi=0,ot=0,kr=0,Ls=0,ad=0,Mn=0,La=0,cl=null,ci=null,od=!1,ld=0,ac=1/0,oc=null,xr=null,lc=!1,Us=null,hl=0,ud=0,cd=null,fl=0,hd=null;function pn(){if(nt&2&&Le!==0)return Le&-Le;if(S.T!==null){var t=Ca;return t!==0?t:vd()}return mu()}function Gy(){Mn===0&&(Mn=!(Le&536870912)||He?wo():536870912);var t=Cn.current;return t!==null&&(t.flags|=32),Mn}function tn(t,i,a){(t===Xe&&We===2||t.cancelPendingCommit!==null)&&(Ua(t,0),Ki(t,Le,Mn,!1)),ut(t,a),(!(nt&2)||t!==Xe)&&(t===Xe&&(!(nt&2)&&(Ls|=a),ot===4&&Ki(t,Le,Mn,!1)),hi(t))}function Ky(t,i,a){if(nt&6)throw Error(s(327));var l=!a&&(i&60)===0&&(i&t.expiredLanes)===0||ur(t,i),h=l?ES(t,i):pd(t,i,!0),d=l;do{if(h===0){xa&&!l&&Ki(t,i,0,!1);break}else if(h===6)Ki(t,i,0,!Fi);else{if(a=t.current.alternate,d&&!_S(a)){h=pd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=cl;var R=T.current.memoizedState.isDehydrated;if(R&&(Ua(T,v).flags|=256),v=pd(T,v,!1),v!==2){if(sd&&!R){T.errorRecoveryDisabledLanes|=d,Ls|=d,h=4;break e}d=ci,ci=h,d!==null&&fd(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Ua(t,0),Ki(t,i,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){Ki(l,i,Mn,!Fi);break e}break;case 2:ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=ld+300-nn(),10<d)){if(Ki(l,i,Mn,!Fi),_n(l,0)!==0)break e;l.timeoutHandle=g_($y.bind(null,l,a,ci,oc,od,i,Mn,Ls,La,Fi,2,-0,0),d);break e}$y(l,a,ci,oc,od,i,Mn,Ls,La,Fi,0,-0,0)}}break}while(!0);hi(t)}function fd(t){ci===null?ci=t:ci.push.apply(ci,t)}function $y(t,i,a,l,h,d,v,T,R,k,K,W,H){var F=i.subtreeFlags;if((F&8192||(F&16785408)===16785408)&&(_l={stylesheets:null,count:0,unsuspend:JS},Ly(i),i=tw(),i!==null)){t.cancelPendingCommit=i(e_.bind(null,t,a,l,h,v,T,R,1,W,H)),Ki(t,d,v,!k);return}e_(t,a,l,h,v,T,R,K,W,H)}function _S(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ki(t,i,a,l){i&=~ad,i&=~Ls,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Wt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&hr(t,a,i)}function uc(){return nt&6?!0:(dl(0),!1)}function dd(){if(Oe!==null){if(We===0)var t=Oe.return;else t=Oe,Ui=Vs=null,vf(t),Ra=null,$o=0,t=Oe;for(;t!==null;)Fy(t.alternate,t),t=t.return;Oe=null}}function Ua(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,LS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),dd(),Xe=t,Oe=a=Pr(t.current,null),Le=i,We=0,mn=null,Fi=!1,xa=ur(t,i),sd=!1,La=Mn=ad=Ls=kr=ot=0,ci=cl=null,od=!1,i&8&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Wt(l),d=1<<h;i|=t[h],l&=~d}return Gi=i,Vu(),a}function Qy(t,i){Ce=null,S.H=ui,i===Go?(i=ug(),We=3):i===ag?(i=ug(),We=4):We=i===oy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Oe===null&&(ot=1,Ju(t,bn(i,t.current)))}function Yy(){var t=S.H;return S.H=ui,t===null?ui:t}function Xy(){var t=S.A;return S.A=gS,t}function md(){ot=4,Fi||(Le&4194176)!==Le&&Cn.current!==null||(xa=!0),!(kr&134217727)&&!(Ls&134217727)||Xe===null||Ki(Xe,Le,Mn,!1)}function pd(t,i,a){var l=nt;nt|=2;var h=Yy(),d=Xy();(Xe!==t||Le!==i)&&(oc=null,Ua(t,i)),i=!1;var v=ot;e:do try{if(We!==0&&Oe!==null){var T=Oe,R=mn;switch(We){case 8:dd(),v=6;break e;case 3:case 2:case 6:Cn.current===null&&(i=!0);var k=We;if(We=0,mn=null,za(t,T,R,k),a&&xa){v=0;break e}break;default:k=We,We=0,mn=null,za(t,T,R,k)}}vS(),v=ot;break}catch(K){Qy(t,K)}while(!0);return i&&t.shellSuspendCounter++,Ui=Vs=null,nt=l,S.H=h,S.A=d,Oe===null&&(Xe=null,Le=0,Vu()),v}function vS(){for(;Oe!==null;)Wy(Oe)}function ES(t,i){var a=nt;nt|=2;var l=Yy(),h=Xy();Xe!==t||Le!==i?(oc=null,ac=nn()+500,Ua(t,i)):xa=ur(t,i);e:do try{if(We!==0&&Oe!==null){i=Oe;var d=mn;t:switch(We){case 1:We=0,mn=null,za(t,i,d,1);break;case 2:if(og(d)){We=0,mn=null,Zy(i);break}i=function(){We===2&&Xe===t&&(We=7),hi(t)},d.then(i,i);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:og(d)?(We=0,mn=null,Zy(i)):(We=0,mn=null,za(t,i,d,7));break;case 5:var v=null;switch(Oe.tag){case 26:v=Oe.memoizedState;case 5:case 27:var T=Oe;if(!v||I_(v)){We=0,mn=null;var R=T.sibling;if(R!==null)Oe=R;else{var k=T.return;k!==null?(Oe=k,cc(k)):Oe=null}break t}}We=0,mn=null,za(t,i,d,5);break;case 6:We=0,mn=null,za(t,i,d,6);break;case 8:dd(),ot=6;break e;default:throw Error(s(462))}}TS();break}catch(K){Qy(t,K)}while(!0);return Ui=Vs=null,S.H=l,S.A=h,nt=a,Oe!==null?0:(Xe=null,Le=0,Vu(),ot)}function TS(){for(;Oe!==null&&!qh();)Wy(Oe)}function Wy(t){var i=vy(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,i===null?cc(t):Oe=i}function Zy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=dy(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=dy(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:vf(i);default:Fy(a,i),i=Oe=Hy(i,Gi),i=vy(a,i,Gi)}t.memoizedProps=t.pendingProps,i===null?cc(t):Oe=i}function za(t,i,a,l){Ui=Vs=null,vf(i),Ra=null,$o=0;var h=i.return;try{if(uS(t,h,i,a,Le)){ot=1,Ju(t,bn(a,t.current)),Oe=null;return}}catch(d){if(h!==null)throw Oe=h,d;ot=1,Ju(t,bn(a,t.current)),Oe=null;return}i.flags&32768?(He||l===1?t=!0:xa||Le&536870912?t=!1:(Fi=t=!0,(l===2||l===3||l===6)&&(l=Cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jy(i,t)):cc(i)}function cc(t){var i=t;do{if(i.flags&32768){Jy(i,Fi);return}t=i.return;var a=mS(i.alternate,i,Gi);if(a!==null){Oe=a;return}if(i=i.sibling,i!==null){Oe=i;return}Oe=i=t}while(i!==null);ot===0&&(ot=5)}function Jy(t,i){do{var a=pS(t.alternate,t);if(a!==null){a.flags&=32767,Oe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Oe=t;return}Oe=t=a}while(t!==null);ot=6,Oe=null}function e_(t,i,a,l,h,d,v,T,R,k){var K=S.T,W=se.p;try{se.p=2,S.T=null,AS(t,i,a,l,W,h,d,v,T,R,k)}finally{S.T=K,se.p=W}}function AS(t,i,a,l,h,d,v,T){do Ba();while(Us!==null);if(nt&6)throw Error(s(327));var R=t.finishedWork;if(l=t.finishedLanes,R===null)return null;if(t.finishedWork=null,t.finishedLanes=0,R===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var k=R.lanes|R.childLanes;if(k|=rf,fu(t,l,k,d,v,T),t===Xe&&(Oe=Xe=null,Le=0),!(R.subtreeFlags&10256)&&!(R.flags&10256)||lc||(lc=!0,ud=k,cd=a,RS(Si,function(){return Ba(),null})),a=(R.flags&15990)!==0,R.subtreeFlags&15990||a?(a=S.T,S.T=null,d=se.p,se.p=2,v=nt,nt|=4,hS(t,R),Py(R,t),KA(Id,t.containerInfo),Ac=!!Rd,Id=Rd=null,t.current=R,Oy(t,R.alternate,R),Eo(),nt=v,se.p=d,S.T=a):t.current=R,lc?(lc=!1,Us=t,hl=l):t_(t,k),k=t.pendingLanes,k===0&&(xr=null),Ao(R.stateNode),hi(t),i!==null)for(h=t.onRecoverableError,R=0;R<i.length;R++)k=i[R],h(k.value,{componentStack:k.stack});return hl&3&&Ba(),k=t.pendingLanes,l&4194218&&k&42?t===hd?fl++:(fl=0,hd=t):fl=0,dl(0),null}function t_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Yo(i)))}function Ba(){if(Us!==null){var t=Us,i=ud;ud=0;var a=du(hl),l=S.T,h=se.p;try{if(se.p=32>a?32:a,S.T=null,Us===null)var d=!1;else{a=cd,cd=null;var v=Us,T=hl;if(Us=null,hl=0,nt&6)throw Error(s(331));var R=nt;if(nt|=4,zy(v.current),xy(v,v.current,T,a),nt=R,dl(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(or,v)}catch{}d=!0}return d}finally{se.p=h,S.T=l,t_(t,i)}}return!1}function n_(t,i,a){i=bn(a,i),i=Vf(t.stateNode,i,2),t=Or(t,i,2),t!==null&&(ut(t,2),hi(t))}function Ye(t,i,a){if(t.tag===3)n_(t,t,a);else for(;i!==null;){if(i.tag===3){n_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){t=bn(a,t),a=sy(2),l=Or(i,a,2),l!==null&&(ay(a,l,i,t),ut(l,2),hi(l));break}}i=i.return}}function gd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new yS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(sd=!0,h.add(a),t=SS.bind(null,t,i,a),i.then(t,t))}function SS(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Le&a)===a&&(ot===4||ot===3&&(Le&62914560)===Le&&300>nn()-ld?!(nt&2)&&Ua(t,0):ad|=a,La===Le&&(La=0)),hi(t)}function i_(t,i){i===0&&(i=cr()),t=Ar(t,i),t!==null&&(ut(t,i),hi(t))}function wS(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),i_(t,a)}function bS(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),i_(t,a)}function RS(t,i){return ls(t,i)}var hc=null,Ha=null,yd=!1,fc=!1,_d=!1,zs=0;function hi(t){t!==Ha&&t.next===null&&(Ha===null?hc=Ha=t:Ha=Ha.next=t),fc=!0,yd||(yd=!0,CS(IS))}function dl(t,i){if(!_d&&fc){_d=!0;do for(var a=!1,l=hc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Wt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,a_(l,d))}else d=Le,d=_n(l,l===Xe?d:0),!(d&3)||ur(l,d)||(a=!0,a_(l,d));l=l.next}while(a);_d=!1}}function IS(){fc=yd=!1;var t=0;zs!==0&&(xS()&&(t=zs),zs=0);for(var i=nn(),a=null,l=hc;l!==null;){var h=l.next,d=r_(l,i);d===0?(l.next=null,a===null?hc=h:a.next=h,h===null&&(Ha=a)):(a=l,(t!==0||d&3)&&(fc=!0)),l=h}dl(t)}function r_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Wt(d),T=1<<v,R=h[v];R===-1?(!(T&a)||T&l)&&(h[v]=sa(T,i)):R<=i&&(t.expiredLanes|=T),d&=~T}if(i=Xe,a=Le,a=_n(t,t===i?a:0),l=t.callbackNode,a===0||t===i&&We===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ra(l),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||ur(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ra(l),du(a)){case 2:case 8:a=Ct;break;case 32:a=Si;break;case 268435456:a=To;break;default:a=Si}return l=s_.bind(null,t),a=ls(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ra(l),t.callbackPriority=2,t.callbackNode=null,2}function s_(t,i){var a=t.callbackNode;if(Ba()&&t.callbackNode!==a)return null;var l=Le;return l=_n(t,t===Xe?l:0),l===0?null:(Ky(t,l,i),r_(t,nn()),t.callbackNode!=null&&t.callbackNode===a?s_.bind(null,t):null)}function a_(t,i){if(Ba())return null;Ky(t,i,!0)}function CS(t){US(function(){nt&6?ls(vt,t):t()})}function vd(){return zs===0&&(zs=wo()),zs}function o_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ei(""+t)}function l_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function DS(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=o_((h[Et]||null).action),v=l.submitter;v&&(i=(i=v[Et]||null)?o_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new fa("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zs!==0){var R=v?l_(h,v):new FormData(h);Cf(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?l_(h,v):new FormData(h),Cf(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Ed=0;Ed<eg.length;Ed++){var Td=eg[Ed],OS=Td.toLowerCase(),NS=Td[0].toUpperCase()+Td.slice(1);zn(OS,"on"+NS)}zn(Yp,"onAnimationEnd"),zn(Xp,"onAnimationIteration"),zn(Wp,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(QA,"onTransitionRun"),zn(YA,"onTransitionStart"),zn(XA,"onTransitionCancel"),zn(Zp,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function u_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],R=T.instance,k=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=k;try{d(h)}catch(K){Zu(K)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(T=l[v],R=T.instance,k=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=k;try{d(h)}catch(K){Zu(K)}h.currentTarget=null,d=R}}}}function Ve(t,i){var a=i[cs];a===void 0&&(a=i[cs]=new Set);var l=t+"__bubble";a.has(l)||(c_(i,t,2,!1),a.add(l))}function Ad(t,i,a){var l=0;i&&(l|=4),c_(a,t,l,i)}var dc="_reactListening"+Math.random().toString(36).slice(2);function Sd(t){if(!t[dc]){t[dc]=!0,Ro.forEach(function(a){a!=="selectionchange"&&(MS.has(a)||Ad(a,!1,t),Ad(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[dc]||(i[dc]=!0,Ad("selectionchange",!1,i))}}function c_(t,i,a,l){switch(V_(i)){case 2:var h=rw;break;case 8:h=sw;break;default:h=xd}a=h.bind(null,i,a,t),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function wd(t,i,a,l,h){var d=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;v=v.return}for(;T!==null;){if(v=Un(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue e}T=T.parentNode}}l=l.return}_u(function(){var k=d,K=ha(a),W=[];e:{var H=Jp.get(t);if(H!==void 0){var F=fa,ue=t;switch(t){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":F=_a;break;case"focusin":ue="focus",F=pa;break;case"focusout":ue="blur",F=pa;break;case"beforeblur":case"afterblur":F=pa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Ru;break;case Yp:case Xp:case Wp:F=ga;break;case Zp:F=Cu;break;case"scroll":case"scrollend":F=vu;break;case"wheel":F=va;break;case"copy":case"cut":case"paste":F=ya;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Uo;break;case"toggle":case"beforetoggle":F=Ou}var Ae=(i&4)!==0,lt=!Ae&&(t==="scroll"||t==="scrollend"),x=Ae?H!==null?H+"Capture":null:H;Ae=[];for(var N=k,z;N!==null;){var Q=N;if(z=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||z===null||x===null||(Q=ps(N,x),Q!=null&&Ae.push(pl(N,Q,z))),lt)break;N=N.return}0<Ae.length&&(H=new F(H,ue,null,a,K),W.push({event:H,listeners:Ae}))}}if(!(i&7)){e:{if(H=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",H&&a!==Tn&&(ue=a.relatedTarget||a.fromElement)&&(Un(ue)||ue[wi]))break e;if((F||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,F?(ue=a.relatedTarget||a.toElement,F=k,ue=ue?Un(ue):null,ue!==null&&(lt=fe(ue),Ae=ue.tag,ue!==lt||Ae!==5&&Ae!==27&&Ae!==6)&&(ue=null)):(F=null,ue=k),F!==ue)){if(Ae=Sn,Q="onMouseLeave",x="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(Ae=Uo,Q="onPointerLeave",x="onPointerEnter",N="pointer"),lt=F==null?H:pr(F),z=ue==null?H:pr(ue),H=new Ae(Q,N+"leave",F,a,K),H.target=lt,H.relatedTarget=z,Q=null,Un(K)===k&&(Ae=new Ae(x,N+"enter",ue,a,K),Ae.target=z,Ae.relatedTarget=lt,Q=Ae),lt=Q,F&&ue)t:{for(Ae=F,x=ue,N=0,z=Ae;z;z=qa(z))N++;for(z=0,Q=x;Q;Q=qa(Q))z++;for(;0<N-z;)Ae=qa(Ae),N--;for(;0<z-N;)x=qa(x),z--;for(;N--;){if(Ae===x||x!==null&&Ae===x.alternate)break t;Ae=qa(Ae),x=qa(x)}Ae=null}else Ae=null;F!==null&&h_(W,H,F,Ae,!1),ue!==null&&lt!==null&&h_(W,lt,ue,Ae,!0)}}e:{if(H=k?pr(k):window,F=H.nodeName&&H.nodeName.toLowerCase(),F==="select"||F==="input"&&H.type==="file")var oe=Up;else if(At(H))if(zp)oe=FA;else{oe=qA;var De=HA}else F=H.nodeName,!F||F.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?k&&No(k.elementType)&&(oe=Up):oe=jA;if(oe&&(oe=oe(t,k))){Mi(W,oe,a,K);break e}De&&De(t,H,k),t==="focusout"&&k&&H.type==="number"&&k.memoizedProps.value!=null&&ca(H,"number",H.value)}switch(De=k?pr(k):window,t){case"focusin":(At(De)||De.contentEditable==="true")&&(Ea=De,ef=k,Ho=null);break;case"focusout":Ho=ef=Ea=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,$p(W,a,K);break;case"selectionchange":if($A)break;case"keydown":case"keyup":$p(W,a,K)}var he;if(si)e:{switch(t){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ke?j(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(_&&a.locale!=="ko"&&(ke||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ke&&(he=Vo()):(ti=K,Tr="value"in ti?ti.value:ti.textContent,ke=!0)),De=mc(k,ge),0<De.length&&(ge=new xo(ge,t,null,a,K),W.push({event:ge,listeners:De}),he?ge.data=he:(he=ne(a),he!==null&&(ge.data=he)))),(he=g?Tt(t,a):xe(t,a))&&(ge=mc(k,"onBeforeInput"),0<ge.length&&(De=new xo("onBeforeInput","beforeinput",null,a,K),W.push({event:De,listeners:ge}),De.data=he)),DS(W,t,k,a,K)}u_(W,i)})}function pl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function mc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ps(t,a),h!=null&&l.unshift(pl(t,h,d)),h=ps(t,i),h!=null&&l.push(pl(t,h,d))),t=t.return}return l}function qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function h_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,R=T.alternate,k=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||k===null||(R=k,h?(k=ps(a,d),k!=null&&v.unshift(pl(a,k,R))):h||(k=ps(a,d),k!=null&&v.push(pl(a,k,R)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var VS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function f_(t){return(typeof t=="string"?t:""+t).replace(VS,`
`).replace(PS,"")}function d_(t,i){return i=f_(i),f_(t)===i}function pc(){}function Qe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(t,""+l);break;case"className":_r(t,"class",l);break;case"tabIndex":_r(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_r(t,a,l);break;case"style":yu(t,l,d);break;case"data":if(i!=="object"){_r(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ei(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qe(t,i,"name",h.name,h,null),Qe(t,i,"formEncType",h.formEncType,h,null),Qe(t,i,"formMethod",h.formMethod,h,null),Qe(t,i,"formTarget",h.formTarget,h,null)):(Qe(t,i,"encType",h.encType,h,null),Qe(t,i,"method",h.method,h,null),Qe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ei(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=pc);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ei(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),yr(t,"popover",l);break;case"xlinkActuate":vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":vn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":vn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":vn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":vn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$h.get(a)||a,yr(t,a,l))}}function bd(t,i,a,l,h,d){switch(a){case"style":yu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?En(t,l):(typeof l=="number"||typeof l=="bigint")&&En(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!la.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):yr(t,a,l)}}}function zt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,d,v,a,null)}}h&&Qe(t,i,"srcSet",a.srcSet,a,null),l&&Qe(t,i,"src",a.src,a,null);return;case"input":Ve("invalid",t);var T=d=v=h=null,R=null,k=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":v=K;break;case"checked":R=K;break;case"defaultChecked":k=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Qe(t,i,l,K,a,null)}}ds(t,d,T,R,k,v,h,!1),fs(t);return;case"select":Ve("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Qe(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Be(t,!!l,i,!1):a!=null&&Be(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Qe(t,i,v,T,a,null)}Er(t,l,h,d),fs(t);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(t,i,R,l,a,null)}return;case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<ml.length;l++)Ve(ml[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(l=a[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,k,l,a,null)}return;default:if(No(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&bd(t,i,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Qe(t,i,T,l,a,null))}function kS(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,R=null,k=null,K=null;for(F in a){var W=a[F];if(a.hasOwnProperty(F)&&W!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=W;default:l.hasOwnProperty(F)||Qe(t,i,F,null,l,W)}}for(var H in l){var F=l[H];if(W=a[H],l.hasOwnProperty(H)&&(F!=null||W!=null))switch(H){case"type":d=F;break;case"name":h=F;break;case"checked":k=F;break;case"defaultChecked":K=F;break;case"value":v=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:F!==W&&Qe(t,i,H,F,l,W)}}vr(t,v,T,R,k,K,d,h);return;case"select":F=v=T=H=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":F=R;default:l.hasOwnProperty(d)||Qe(t,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Qe(t,i,h,d,l,R)}i=T,a=v,l=F,H!=null?Be(t,!!a,H,!1):!!l!=!!a&&(i!=null?Be(t,!!a,i,!0):Be(t,!!a,a?[]:"",!1));return;case"textarea":F=H=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qe(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":H=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qe(t,i,v,h,l,d)}ms(t,H,F);return;case"option":for(var ue in a)if(H=a[ue],a.hasOwnProperty(ue)&&H!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Qe(t,i,ue,null,l,H)}for(R in l)if(H=l[R],F=a[R],l.hasOwnProperty(R)&&H!==F&&(H!=null||F!=null))switch(R){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Qe(t,i,R,H,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)H=a[Ae],a.hasOwnProperty(Ae)&&H!=null&&!l.hasOwnProperty(Ae)&&Qe(t,i,Ae,null,l,H);for(k in l)if(H=l[k],F=a[k],l.hasOwnProperty(k)&&H!==F&&(H!=null||F!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Qe(t,i,k,H,l,F)}return;default:if(No(i)){for(var lt in a)H=a[lt],a.hasOwnProperty(lt)&&H!==void 0&&!l.hasOwnProperty(lt)&&bd(t,i,lt,void 0,l,H);for(K in l)H=l[K],F=a[K],!l.hasOwnProperty(K)||H===F||H===void 0&&F===void 0||bd(t,i,K,H,l,F);return}}for(var x in a)H=a[x],a.hasOwnProperty(x)&&H!=null&&!l.hasOwnProperty(x)&&Qe(t,i,x,null,l,H);for(W in l)H=l[W],F=a[W],!l.hasOwnProperty(W)||H===F||H==null&&F==null||Qe(t,i,W,H,l,F)}var Rd=null,Id=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function m_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Cd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dd=null;function xS(){var t=window.event;return t&&t.type==="popstate"?t===Dd?!1:(Dd=t,!0):(Dd=null,!1)}var g_=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,y_=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof y_<"u"?function(t){return y_.resolve(null).then(t).catch(zS)}:g_;function zS(t){setTimeout(function(){throw t})}function Od(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),Sl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);Sl(i)}function Nd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nd(a),hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function BS(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[mr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=qn(t.nextSibling),t===null)break}return null}function HS(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=qn(t.nextSibling),t===null))return null;return t}function qn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function __(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function v_(t,i,a){switch(i=gc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var Vn=new Map,E_=new Set;function yc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var $i=se.d;se.d={f:qS,r:jS,D:FS,C:GS,L:KS,m:$S,X:YS,S:QS,M:XS};function qS(){var t=$i.f(),i=uc();return t||i}function jS(t){var i=bi(t);i!==null&&i.tag===5&&i.type==="form"?$g(i):$i.r(t)}var ja=typeof document>"u"?null:document;function T_(t,i,a){var l=ja;if(l&&typeof i=="string"&&i){var h=st(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),E_.has(h)||(E_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zt(i,"link",t),et(i),l.head.appendChild(i)))}}function FS(t){$i.D(t),T_("dns-prefetch",t,null)}function GS(t,i){$i.C(t,i),T_("preconnect",t,i)}function KS(t,i,a){$i.L(t,i,a);var l=ja;if(l&&t&&i){var h='link[rel="preload"][as="'+st(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+st(a.imageSizes)+'"]')):h+='[href="'+st(t)+'"]';var d=h;switch(i){case"style":d=Fa(t);break;case"script":d=Ga(t)}Vn.has(d)||(t=I({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Vn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(gl(d))||i==="script"&&l.querySelector(yl(d))||(i=l.createElement("link"),zt(i,"link",t),et(i),l.head.appendChild(i)))}}function $S(t,i){$i.m(t,i);var a=ja;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ga(t)}if(!Vn.has(d)&&(t=I({rel:"modulepreload",href:t},i),Vn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(d)))return}l=a.createElement("link"),zt(l,"link",t),et(l),a.head.appendChild(l)}}}function QS(t,i,a){$i.S(t,i,a);var l=ja;if(l&&t){var h=gr(l).hoistableStyles,d=Fa(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(gl(d)))T.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Vn.get(d))&&Md(t,a);var R=v=l.createElement("link");et(R),zt(R,"link",t),R._p=new Promise(function(k,K){R.onload=k,R.onerror=K}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,_c(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function YS(t,i){$i.X(t,i);var a=ja;if(a&&t){var l=gr(a).hoistableScripts,h=Ga(t),d=l.get(h);d||(d=a.querySelector(yl(h)),d||(t=I({src:t,async:!0},i),(i=Vn.get(h))&&Vd(t,i),d=a.createElement("script"),et(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function XS(t,i){$i.M(t,i);var a=ja;if(a&&t){var l=gr(a).hoistableScripts,h=Ga(t),d=l.get(h);d||(d=a.querySelector(yl(h)),d||(t=I({src:t,async:!0,type:"module"},i),(i=Vn.get(h))&&Vd(t,i),d=a.createElement("script"),et(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function A_(t,i,a,l){var h=(h=yn.current)?yc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Fa(a.href),a=gr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fa(a.href);var d=gr(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(gl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Vn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(t,a),d||WS(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ga(a),a=gr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fa(t){return'href="'+st(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function S_(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function WS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zt(i,"link",a),et(i),t.head.appendChild(i))}function Ga(t){return'[src="'+st(t)+'"]'}function yl(t){return"script[async]"+t}function w_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return i.instance=l,et(l),l;var h=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),et(l),zt(l,"style",h),_c(l,a.precedence,t),i.instance=l;case"stylesheet":h=Fa(a.href);var d=t.querySelector(gl(h));if(d)return i.state.loading|=4,i.instance=d,et(d),d;l=S_(a),(h=Vn.get(h))&&Md(l,h),d=(t.ownerDocument||t).createElement("link"),et(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),zt(d,"link",l),i.state.loading|=4,_c(d,a.precedence,t),i.instance=d;case"script":return d=Ga(a.src),(h=t.querySelector(yl(d)))?(i.instance=h,et(h),h):(l=a,(h=Vn.get(d))&&(l=I({},a),Vd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),et(h),zt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(l=i.instance,i.state.loading|=4,_c(l,a.precedence,t));return i.instance}function _c(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Md(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Vd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var vc=null;function b_(t,i,a){if(vc===null){var l=new Map,h=vc=new Map;h.set(a,l)}else h=vc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[mr]||d[Dt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function R_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function ZS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I_(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var _l=null;function JS(){}function ew(t,i,a){if(_l===null)throw Error(s(475));var l=_l;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var h=Fa(a.href),d=t.querySelector(gl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Ec.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,et(d);return}d=t.ownerDocument||t,a=S_(a),(h=Vn.get(h))&&Md(a,h),d=d.createElement("link"),et(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),zt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&!(i.state.loading&3)&&(l.count++,i=Ec.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function tw(){if(_l===null)throw Error(s(475));var t=_l;return t.stylesheets&&t.count===0&&Pd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Pd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ec(){if(this.count--,this.count===0){if(this.stylesheets)Pd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Tc=null;function Pd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Tc=new Map,i.forEach(nw,t),Tc=null,Ec.call(t))}function nw(t,i){if(!(i.state.loading&4)){var a=Tc.get(t);if(a)var l=a.get(null);else{a=new Map,Tc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Ec.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var vl={$$typeof:M,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function iw(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=aa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.hiddenUpdates=aa(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function C_(t,i,a,l,h,d,v,T,R,k,K,W){return t=new iw(t,i,a,v,T,R,k,W),i=1,d===!0&&(i|=24),d=Nn(3,null,null,i),t.current=d,d.stateNode=t,i=ff(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Kf(d),t}function D_(t){return t?(t=Sa,t):Sa}function O_(t,i,a,l,h,d){h=D_(h),l.context===null?l.context=h:l.pendingContext=h,l=Dr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Or(t,l,i),a!==null&&(tn(a,t,i),nl(a,t,i))}function N_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function kd(t,i){N_(t,i),(t=t.alternate)&&N_(t,i)}function M_(t){if(t.tag===13){var i=Ar(t,67108864);i!==null&&tn(i,t,67108864),kd(t,67108864)}}var Ac=!0;function rw(t,i,a,l){var h=S.T;S.T=null;var d=se.p;try{se.p=2,xd(t,i,a,l)}finally{se.p=d,S.T=h}}function sw(t,i,a,l){var h=S.T;S.T=null;var d=se.p;try{se.p=8,xd(t,i,a,l)}finally{se.p=d,S.T=h}}function xd(t,i,a,l){if(Ac){var h=Ld(l);if(h===null)wd(t,i,l,Sc,a),P_(t,l);else if(ow(h,t,i,a,l))l.stopPropagation();else if(P_(t,l),i&4&&-1<aw.indexOf(t)){for(;h!==null;){var d=bi(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Ln(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-Wt(v);T.entanglements[1]|=R,v&=~R}hi(d),!(nt&6)&&(ac=nn()+500,dl(0))}}break;case 13:T=Ar(d,2),T!==null&&tn(T,d,2),uc(),kd(d,2)}if(d=Ld(l),d===null&&wd(t,i,l,Sc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else wd(t,i,l,null,a)}}function Ld(t){return t=ha(t),Ud(t)}var Sc=null;function Ud(t){if(Sc=null,t=Un(t),t!==null){var i=fe(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=je(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Sc=t,null}function V_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lu()){case vt:return 2;case Ct:return 8;case Si:case uu:return 32;case To:return 268435456;default:return 32}default:return 32}}var zd=!1,Lr=null,Ur=null,zr=null,El=new Map,Tl=new Map,Br=[],aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(t,i){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":El.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(i.pointerId)}}function Al(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=bi(i),i!==null&&M_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function ow(t,i,a,l,h){switch(i){case"focusin":return Lr=Al(Lr,t,i,a,l,h),!0;case"dragenter":return Ur=Al(Ur,t,i,a,l,h),!0;case"mouseover":return zr=Al(zr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return El.set(d,Al(El.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Tl.set(d,Al(Tl.get(d)||null,t,i,a,l,h)),!0}return!1}function k_(t){var i=Un(t.target);if(i!==null){var a=fe(i);if(a!==null){if(i=a.tag,i===13){if(i=je(a),i!==null){t.blockedOn=i,dr(t.priority,function(){if(a.tag===13){var l=pn(),h=Ar(a,l);h!==null&&tn(h,a,l),kd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Tn=l,a.target.dispatchEvent(l),Tn=null}else return i=bi(a),i!==null&&M_(i),t.blockedOn=a,!1;i.shift()}return!0}function x_(t,i,a){wc(t)&&a.delete(i)}function lw(){zd=!1,Lr!==null&&wc(Lr)&&(Lr=null),Ur!==null&&wc(Ur)&&(Ur=null),zr!==null&&wc(zr)&&(zr=null),El.forEach(x_),Tl.forEach(x_)}function bc(t,i){t.blockedOn===i&&(t.blockedOn=null,zd||(zd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,lw)))}var Rc=null;function L_(t){Rc!==t&&(Rc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===t&&(Rc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Ud(l||a)===null)continue;break}var d=bi(a);d!==null&&(t.splice(i,3),i-=3,Cf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Sl(t){function i(R){return bc(R,t)}Lr!==null&&bc(Lr,t),Ur!==null&&bc(Ur,t),zr!==null&&bc(zr,t),El.forEach(i),Tl.forEach(i);for(var a=0;a<Br.length;a++){var l=Br[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Br.length&&(a=Br[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&Br.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Et]||null;if(typeof d=="function")v||L_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Et]||null)T=v.formAction;else if(Ud(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),L_(a)}}}function Bd(t){this._internalRoot=t}Ic.prototype.render=Bd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();O_(a,l,t,i,null,null)},Ic.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&Ba(),O_(t.current,2,null,t,null,null),uc(),i[wi]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var i=mu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Br.length&&i!==0&&i<Br[a].priority;a++);Br.splice(a,0,t),a===0&&k_(t)}};var U_=e.version;if(U_!=="19.0.0")throw Error(s(527,U_,"19.0.0"));se.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=J(i),t=t!==null?ce(t):null,t=t===null?null:t.stateNode,t};var uw={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Un,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{or=Cc.inject(uw),jt=Cc}catch{}}return bl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=ty,d=ny,v=iy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=C_(t,1,!1,null,null,a,l,h,d,v,T,null),t[wi]=i.current,Sd(t.nodeType===8?t.parentNode:t),new Bd(i)},bl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=ty,v=ny,T=iy,R=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),i=C_(t,1,!0,i,a??null,l,h,d,v,T,R,k),i.context=D_(null),a=i.current,l=pn(),h=Dr(l),h.callback=null,Or(a,h,l),i.current.lanes=l,ut(i,l),hi(i),t[wi]=i.current,Sd(t),new Ic(i)},bl.version="19.0.0",bl}var Q_;function vw(){if(Q_)return jd.exports;Q_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jd.exports=_w(),jd.exports}var Ew=vw(),Rl={},Y_;function Tw(){if(Y_)return Rl;Y_=1,Object.defineProperty(Rl,"__esModule",{value:!0}),Rl.parse=f,Rl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function f(D,M){const B=new u,$=D.length;if($<2)return B;const q=(M==null?void 0:M.decode)||E;let Y=0;do{const te=D.indexOf("=",Y);if(te===-1)break;const ee=D.indexOf(";",Y),pe=ee===-1?$:ee;if(te>pe){Y=D.lastIndexOf(";",te-1)+1;continue}const le=m(D,Y,te),we=p(D,te,le),V=D.slice(le,we);if(B[V]===void 0){let b=m(D,te+1,pe),S=p(D,pe,b);const I=q(D.slice(b,S));B[V]=I}Y=pe+1}while(Y<$);return B}function m(D,M,B){do{const $=D.charCodeAt(M);if($!==32&&$!==9)return M}while(++M<B);return B}function p(D,M,B){for(;M>B;){const $=D.charCodeAt(--M);if($!==32&&$!==9)return M+1}return B}function y(D,M,B){const $=(B==null?void 0:B.encode)||encodeURIComponent;if(!r.test(D))throw new TypeError(`argument name is invalid: ${D}`);const q=$(M);if(!e.test(q))throw new TypeError(`argument val is invalid: ${M}`);let Y=D+"="+q;if(!B)return Y;if(B.maxAge!==void 0){if(!Number.isInteger(B.maxAge))throw new TypeError(`option maxAge is invalid: ${B.maxAge}`);Y+="; Max-Age="+B.maxAge}if(B.domain){if(!n.test(B.domain))throw new TypeError(`option domain is invalid: ${B.domain}`);Y+="; Domain="+B.domain}if(B.path){if(!s.test(B.path))throw new TypeError(`option path is invalid: ${B.path}`);Y+="; Path="+B.path}if(B.expires){if(!w(B.expires)||!Number.isFinite(B.expires.valueOf()))throw new TypeError(`option expires is invalid: ${B.expires}`);Y+="; Expires="+B.expires.toUTCString()}if(B.httpOnly&&(Y+="; HttpOnly"),B.secure&&(Y+="; Secure"),B.partitioned&&(Y+="; Partitioned"),B.priority)switch(typeof B.priority=="string"?B.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${B.priority}`)}if(B.sameSite)switch(typeof B.sameSite=="string"?B.sameSite.toLowerCase():B.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${B.sameSite}`)}return Y}function E(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function w(D){return o.call(D)==="[object Date]"}return Rl}Tw();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var X_="popstate";function Aw(r={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return cm("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Bl(o)}return ww(e,n,null,r)}function Je(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Gn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sw(){return Math.random().toString(36).substring(2,10)}function W_(r,e){return{usr:r.state,key:r.key,idx:e}}function cm(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?uo(e):e,state:n,key:e&&e.key||s||Sw()}}function Bl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function uo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function ww(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function w(){m="POP";let q=E(),Y=q==null?null:q-y;y=q,p&&p({action:m,location:$.location,delta:Y})}function D(q,Y){m="PUSH";let te=cm($.location,q,Y);y=E()+1;let ee=W_(te,y),pe=$.createHref(te);try{f.pushState(ee,"",pe)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(pe)}u&&p&&p({action:m,location:$.location,delta:1})}function M(q,Y){m="REPLACE";let te=cm($.location,q,Y);y=E();let ee=W_(te,y),pe=$.createHref(te);f.replaceState(ee,"",pe),u&&p&&p({action:m,location:$.location,delta:0})}function B(q){let Y=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof q=="string"?q:Bl(q);return te=te.replace(/ $/,"%20"),Je(Y,`No window.location.(origin|href) available to create URL for href: ${te}`),new URL(te,Y)}let $={get action(){return m},get location(){return r(o,f)},listen(q){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(X_,w),p=q,()=>{o.removeEventListener(X_,w),p=null}},createHref(q){return e(o,q)},createURL:B,encodeLocation(q){let Y=B(q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:D,replace:M,go(q){return f.go(q)}};return $}function xE(r,e,n="/"){return bw(r,e,n,!1)}function bw(r,e,n,s){let o=typeof e=="string"?uo(e):e,u=Zr(o.pathname||"/",n);if(u==null)return null;let f=LE(r);Rw(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=Lw(u);m=kw(f[p],y,s)}return m}function LE(r,e=[],n=[],s=""){let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Zi([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),LE(u.children,e,E,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:Vw(y,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of UE(u.path))o(u,f,p)}),e}function UE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=UE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Rw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Pw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Iw=/^:[\w-]+$/,Cw=3,Dw=2,Ow=1,Nw=10,Mw=-2,Z_=r=>r==="*";function Vw(r,e){let n=r.split("/"),s=n.length;return n.some(Z_)&&(s+=Mw),e&&(s+=Dw),n.filter(o=>!Z_(o)).reduce((o,u)=>o+(Iw.test(u)?Cw:u===""?Ow:Nw),s)}function Pw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function kw(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=Yc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),D=p.route;if(!w&&y&&n&&!s[s.length-1].route.index&&(w=Yc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:Zi([u,w.pathname]),pathnameBase:Hw(Zi([u,w.pathnameBase])),route:D}),w.pathnameBase!=="/"&&(u=Zi([u,w.pathnameBase]))}return f}function Yc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=xw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:w},D)=>{if(E==="*"){let B=m[D]||"";f=u.slice(0,u.length-B.length).replace(/(.)\/+$/,"$1")}const M=m[D];return w&&!M?y[E]=void 0:y[E]=(M||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function xw(r,e=!1,n=!0){Gn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Lw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Zr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function Uw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?uo(r):r;return{pathname:n?n.startsWith("/")?n:zw(n,e):e,search:qw(s),hash:jw(o)}}function zw(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function $d(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Um(r){let e=Bw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function zm(r,e,n,s=!1){let o;typeof r=="string"?o=uo(r):(o={...r},Je(!o.pathname||!o.pathname.includes("?"),$d("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),$d("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),$d("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let w=e.length-1;if(!s&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),w-=1;o.pathname=D.join("/")}m=w>=0?e[w]:"/"}let p=Uw(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Zi=r=>r.join("/").replace(/\/\/+/g,"/"),Hw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),qw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,jw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Fw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var zE=["POST","PUT","PATCH","DELETE"];new Set(zE);var Gw=["GET",...zE];new Set(Gw);var co=G.createContext(null);co.displayName="DataRouter";var _h=G.createContext(null);_h.displayName="DataRouterState";var BE=G.createContext({isTransitioning:!1});BE.displayName="ViewTransition";var Kw=G.createContext(new Map);Kw.displayName="Fetchers";var $w=G.createContext(null);$w.displayName="Await";var Qn=G.createContext(null);Qn.displayName="Navigation";var Wl=G.createContext(null);Wl.displayName="Location";var Ei=G.createContext({outlet:null,matches:[],isDataRoute:!1});Ei.displayName="Route";var Bm=G.createContext(null);Bm.displayName="RouteError";function Qw(r,{relative:e}={}){Je(ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=G.useContext(Qn),{hash:o,pathname:u,search:f}=Zl(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:Zi([n,u])),s.createHref({pathname:m,search:f,hash:o})}function ho(){return G.useContext(Wl)!=null}function ss(){return Je(ho(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Wl).location}var HE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qE(r){G.useContext(Qn).static||G.useLayoutEffect(r)}function vh(){let{isDataRoute:r}=G.useContext(Ei);return r?ob():Yw()}function Yw(){Je(ho(),"useNavigate() may be used only in the context of a <Router> component.");let r=G.useContext(co),{basename:e,navigator:n}=G.useContext(Qn),{matches:s}=G.useContext(Ei),{pathname:o}=ss(),u=JSON.stringify(Um(s)),f=G.useRef(!1);return qE(()=>{f.current=!0}),G.useCallback((p,y={})=>{if(Gn(f.current,HE),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=zm(p,JSON.parse(u),o,y.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Zi([e,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[e,n,u,o,r])}G.createContext(null);function Zl(r,{relative:e}={}){let{matches:n}=G.useContext(Ei),{pathname:s}=ss(),o=JSON.stringify(Um(n));return G.useMemo(()=>zm(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Xw(r,e){return jE(r,e)}function jE(r,e,n,s){var te;Je(ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=G.useContext(Qn),{matches:f}=G.useContext(Ei),m=f[f.length-1],p=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",w=m&&m.route;{let ee=w&&w.path||"";FE(y,!w||ee.endsWith("*")||ee.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${ee}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ee}"> to <Route path="${ee==="/"?"*":`${ee}/*`}">.`)}let D=ss(),M;if(e){let ee=typeof e=="string"?uo(e):e;Je(E==="/"||((te=ee.pathname)==null?void 0:te.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${ee.pathname}" was given in the \`location\` prop.`),M=ee}else M=D;let B=M.pathname||"/",$=B;if(E!=="/"){let ee=E.replace(/^\//,"").split("/");$="/"+B.replace(/^\//,"").split("/").slice(ee.length).join("/")}let q=!u&&n&&n.matches&&n.matches.length>0?n.matches:xE(r,{pathname:$});Gn(w||q!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Gn(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=tb(q&&q.map(ee=>Object.assign({},ee,{params:Object.assign({},p,ee.params),pathname:Zi([E,o.encodeLocation?o.encodeLocation(ee.pathname).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?E:Zi([E,o.encodeLocation?o.encodeLocation(ee.pathnameBase).pathname:ee.pathnameBase])})),f,n,s);return e&&Y?G.createElement(Wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},Y):Y}function Ww(){let r=ab(),e=Fw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:u},"ErrorBoundary")," or"," ",G.createElement("code",{style:u},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),n?G.createElement("pre",{style:o},n):null,f)}var Zw=G.createElement(Ww,null),Jw=class extends G.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?G.createElement(Ei.Provider,{value:this.props.routeContext},G.createElement(Bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function eb({routeContext:r,match:e,children:n}){let s=G.useContext(co);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(Ei.Provider,{value:r},n)}function tb(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:E,errors:w}=n,D=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!w||w[y.route.id]===void 0);if(y.route.lazy||D){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let w,D=!1,M=null,B=null;n&&(w=u&&y.route.id?u[y.route.id]:void 0,M=y.route.errorElement||Zw,f&&(m<0&&E===0?(FE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,B=null):m===E&&(D=!0,B=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,E+1)),q=()=>{let Y;return w?Y=M:D?Y=B:y.route.Component?Y=G.createElement(y.route.Component,null):y.route.element?Y=y.route.element:Y=p,G.createElement(eb,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:n!=null},children:Y})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?G.createElement(Jw,{location:n.location,revalidation:n.revalidation,component:M,error:w,children:q(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):q()},null)}function Hm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nb(r){let e=G.useContext(co);return Je(e,Hm(r)),e}function ib(r){let e=G.useContext(_h);return Je(e,Hm(r)),e}function rb(r){let e=G.useContext(Ei);return Je(e,Hm(r)),e}function qm(r){let e=rb(r),n=e.matches[e.matches.length-1];return Je(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function sb(){return qm("useRouteId")}function ab(){var s;let r=G.useContext(Bm),e=ib("useRouteError"),n=qm("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function ob(){let{router:r}=nb("useNavigate"),e=qm("useNavigate"),n=G.useRef(!1);return qE(()=>{n.current=!0}),G.useCallback(async(o,u={})=>{Gn(n.current,HE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var J_={};function FE(r,e,n){!e&&!J_[r]&&(J_[r]=!0,Gn(!1,n))}G.memo(lb);function lb({routes:r,future:e,state:n}){return jE(r,void 0,n,e)}function Qd({to:r,replace:e,state:n,relative:s}){Je(ho(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=G.useContext(Qn);Gn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=G.useContext(Ei),{pathname:f}=ss(),m=vh(),p=zm(r,Um(u),f,s==="path"),y=JSON.stringify(p);return G.useEffect(()=>{m(JSON.parse(y),{replace:e,state:n,relative:s})},[m,y,s,e,n]),null}function Cl(r){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ub({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){Je(!ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=G.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=uo(n));let{pathname:p="/",search:y="",hash:E="",state:w=null,key:D="default"}=n,M=G.useMemo(()=>{let B=Zr(p,f);return B==null?null:{location:{pathname:B,search:y,hash:E,state:w,key:D},navigationType:s}},[f,p,y,E,w,D,s]);return Gn(M!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:G.createElement(Qn.Provider,{value:m},G.createElement(Wl.Provider,{children:e,value:M}))}function cb({children:r,location:e}){return Xw(hm(r),e)}function hm(r,e=[]){let n=[];return G.Children.forEach(r,(s,o)=>{if(!G.isValidElement(s))return;let u=[...e,o];if(s.type===G.Fragment){n.push.apply(n,hm(s.props.children,u));return}Je(s.type===Cl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=hm(s.props.children,u)),n.push(f)}),n}var Lc="get",Uc="application/x-www-form-urlencoded";function Eh(r){return r!=null&&typeof r.tagName=="string"}function hb(r){return Eh(r)&&r.tagName.toLowerCase()==="button"}function fb(r){return Eh(r)&&r.tagName.toLowerCase()==="form"}function db(r){return Eh(r)&&r.tagName.toLowerCase()==="input"}function mb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function pb(r,e){return r.button===0&&(!e||e==="_self")&&!mb(r)}var Dc=null;function gb(){if(Dc===null)try{new FormData(document.createElement("form"),0),Dc=!1}catch{Dc=!0}return Dc}var yb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yd(r){return r!=null&&!yb.has(r)?(Gn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uc}"`),null):r}function _b(r,e){let n,s,o,u,f;if(fb(r)){let m=r.getAttribute("action");s=m?Zr(m,e):null,n=r.getAttribute("method")||Lc,o=Yd(r.getAttribute("enctype"))||Uc,u=new FormData(r)}else if(hb(r)||db(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?Zr(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||Lc,o=Yd(r.getAttribute("formenctype"))||Yd(m.getAttribute("enctype"))||Uc,u=new FormData(m,r),!gb()){let{name:y,type:E,value:w}=r;if(E==="image"){let D=y?`${y}.`:"";u.append(`${D}x`,"0"),u.append(`${D}y`,"0")}else y&&u.append(y,w)}}else{if(Eh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Lc,s=null,o=Uc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}function jm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function vb(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Eb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Tb(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await vb(u,n);return f.links?f.links():[]}return[]}));return bb(s.flat(1).filter(Eb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ev(r,e,n,s,o,u){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,y)=>f(p,y)||m(p,y)):u==="data"?e.filter((p,y)=>{var w;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let D=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Ab(r,e){return Sb(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function Sb(r){return[...new Set(r)]}function wb(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function bb(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(wb(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function Rb(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Ib(){let r=G.useContext(co);return jm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Cb(){let r=G.useContext(_h);return jm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Fm=G.createContext(void 0);Fm.displayName="FrameworkContext";function GE(){let r=G.useContext(Fm);return jm(r,"You must render this element inside a <HydratedRouter> element"),r}function Db(r,e){let n=G.useContext(Fm),[s,o]=G.useState(!1),[u,f]=G.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:w}=e,D=G.useRef(null);G.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let $=Y=>{Y.forEach(te=>{f(te.isIntersecting)})},q=new IntersectionObserver($,{threshold:.5});return D.current&&q.observe(D.current),()=>{q.disconnect()}}},[r]),G.useEffect(()=>{if(s){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[s]);let M=()=>{o(!0)},B=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,D,{}]:[u,D,{onFocus:Il(m,M),onBlur:Il(p,B),onMouseEnter:Il(y,M),onMouseLeave:Il(E,B),onTouchStart:Il(w,M)}]:[!1,D,{}]}function Il(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function Ob({page:r,...e}){let{router:n}=Ib(),s=G.useMemo(()=>xE(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?G.createElement(Mb,{page:r,matches:s,...e}):null}function Nb(r){let{manifest:e,routeModules:n}=GE(),[s,o]=G.useState([]);return G.useEffect(()=>{let u=!1;return Tb(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function Mb({page:r,matches:e,...n}){let s=ss(),{manifest:o,routeModules:u}=GE(),{loaderData:f,matches:m}=Cb(),p=G.useMemo(()=>ev(r,e,m,o,s,"data"),[r,e,m,o,s]),y=G.useMemo(()=>ev(r,e,m,o,s,"assets"),[r,e,m,o,s]),E=G.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,B=!1;if(e.forEach(q=>{var te;let Y=o.routes[q.route.id];!Y||!Y.hasLoader||(!p.some(ee=>ee.route.id===q.route.id)&&q.route.id in f&&((te=u[q.route.id])!=null&&te.shouldRevalidate)||Y.hasClientLoader?B=!0:M.add(q.route.id))}),M.size===0)return[];let $=Rb(r);return B&&M.size>0&&$.searchParams.set("_routes",e.filter(q=>M.has(q.route.id)).map(q=>q.route.id).join(",")),[$.pathname+$.search]},[f,s,o,p,e,r,u]),w=G.useMemo(()=>Ab(y,o),[y,o]),D=Nb(y);return G.createElement(G.Fragment,null,E.map(M=>G.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),w.map(M=>G.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),D.map(({key:M,link:B})=>G.createElement("link",{key:M,...B})))}function Vb(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var KE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{KE&&(window.__reactRouterVersion="7.1.5")}catch{}function Pb({basename:r,children:e,window:n}){let s=G.useRef();s.current==null&&(s.current=Aw({window:n,v5Compat:!0}));let o=s.current,[u,f]=G.useState({action:o.action,location:o.location}),m=G.useCallback(p=>{G.startTransition(()=>f(p))},[f]);return G.useLayoutEffect(()=>o.listen(m),[o,m]),G.createElement(ub,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var $E=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,to=G.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:y,preventScrollReset:E,viewTransition:w,...D},M){let{basename:B}=G.useContext(Qn),$=typeof y=="string"&&$E.test(y),q,Y=!1;if(typeof y=="string"&&$&&(q=y,KE))try{let S=new URL(window.location.href),I=y.startsWith("//")?new URL(S.protocol+y):new URL(y),P=Zr(I.pathname,B);I.origin===S.origin&&P!=null?y=P+I.search+I.hash:Y=!0}catch{Gn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=Qw(y,{relative:o}),[ee,pe,le]=Db(s,D),we=Ub(y,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:w});function V(S){e&&e(S),S.defaultPrevented||we(S)}let b=G.createElement("a",{...D,...le,href:q||te,onClick:Y||u?e:V,ref:Vb(M,pe),target:p,"data-discover":!$&&n==="render"?"true":void 0});return ee&&!$?G.createElement(G.Fragment,null,b,G.createElement(Ob,{page:te})):b});to.displayName="Link";var kb=G.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...y},E){let w=Zl(f,{relative:y.relative}),D=ss(),M=G.useContext(_h),{navigator:B,basename:$}=G.useContext(Qn),q=M!=null&&jb(w)&&m===!0,Y=B.encodeLocation?B.encodeLocation(w).pathname:w.pathname,te=D.pathname,ee=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;n||(te=te.toLowerCase(),ee=ee?ee.toLowerCase():null,Y=Y.toLowerCase()),ee&&$&&(ee=Zr(ee,$)||ee);const pe=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let le=te===Y||!o&&te.startsWith(Y)&&te.charAt(pe)==="/",we=ee!=null&&(ee===Y||!o&&ee.startsWith(Y)&&ee.charAt(Y.length)==="/"),V={isActive:le,isPending:we,isTransitioning:q},b=le?e:void 0,S;typeof s=="function"?S=s(V):S=[s,le?"active":null,we?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let I=typeof u=="function"?u(V):u;return G.createElement(to,{...y,"aria-current":b,className:S,ref:E,style:I,to:f,viewTransition:m},typeof p=="function"?p(V):p)});kb.displayName="NavLink";var xb=G.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=Lc,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:w,...D},M)=>{let B=Hb(),$=qb(m,{relative:y}),q=f.toLowerCase()==="get"?"get":"post",Y=typeof m=="string"&&$E.test(m),te=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let pe=ee.nativeEvent.submitter,le=(pe==null?void 0:pe.getAttribute("formmethod"))||f;B(pe||ee.currentTarget,{fetcherKey:e,method:le,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:w})};return G.createElement("form",{ref:M,method:q,action:$,onSubmit:s?p:te,...D,"data-discover":!Y&&r==="render"?"true":void 0})});xb.displayName="Form";function Lb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QE(r){let e=G.useContext(co);return Je(e,Lb(r)),e}function Ub(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=vh(),p=ss(),y=Zl(r,{relative:u});return G.useCallback(E=>{if(pb(E,e)){E.preventDefault();let w=n!==void 0?n:Bl(p)===Bl(y);m(r,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,y,n,s,e,r,o,u,f])}var zb=0,Bb=()=>`__${String(++zb)}__`;function Hb(){let{router:r}=QE("useSubmit"),{basename:e}=G.useContext(Qn),n=sb();return G.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:p,body:y}=_b(s,e);if(o.navigate===!1){let E=o.fetcherKey||Bb();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function qb(r,{relative:e}={}){let{basename:n}=G.useContext(Qn),s=G.useContext(Ei);Je(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Zl(r||".",{relative:e})},f=ss();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(w=>w).forEach(w=>m.append("index",w));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Zi([n,u.pathname])),Bl(u)}function jb(r,e={}){let n=G.useContext(BE);Je(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=QE("useViewTransitionState"),o=Zl(r,{relative:e.relative});if(!n.isTransitioning)return!1;let u=Zr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=Zr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Yc(o.pathname,f)!=null||Yc(o.pathname,u)!=null}new TextEncoder;var tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Fb=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},XE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,w=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,M=y&63;p||(M=64,f||(D=64)),s.push(n[E],n[w],n[D],n[M])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(YE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Fb(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||w==null)throw new Gb;const D=u<<2|m>>4;if(s.push(D),y!==64){const M=m<<4&240|y>>2;if(s.push(M),w!==64){const B=y<<6&192|w;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kb=function(r){const e=YE(r);return XE.encodeByteArray(e,!0)},Xc=function(r){return Kb(r).replace(/\./g,"")},WE=function(r){try{return XE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=()=>$b().__FIREBASE_DEFAULTS__,Yb=()=>{if(typeof process>"u"||typeof tv>"u")return;const r=tv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Xb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&WE(r[1]);return e&&JSON.parse(e)},Th=()=>{try{return Qb()||Yb()||Xb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ZE=r=>{var e,n;return(n=(e=Th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Wb=r=>{const e=ZE(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},JE=()=>{var r;return(r=Th())===null||r===void 0?void 0:r.config},eT=r=>{var e;return(e=Th())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Xc(JSON.stringify(n)),Xc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function tR(){var r;const e=(r=Th())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function iR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rR(){const r=Yt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function sR(){return!tR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nT(){try{return typeof indexedDB=="object"}catch{return!1}}function iT(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function aR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="FirebaseError";class Yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=oR,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?lR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Yn(o,m,s)}}function lR(r,e){return r.replace(uR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const uR=/\{\$([^}]+)}/g;function cR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Hl(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(nv(u)&&nv(f)){if(!Hl(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function nv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Dl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ol(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function hR(r,e){const n=new fR(r,e);return n.subscribe.bind(n)}class fR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");dR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Xd),o.error===void 0&&(o.error=Xd),o.complete===void 0&&(o.complete=Xd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dR(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Xd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=1e3,pR=2,gR=4*60*60*1e3,yR=.5;function iv(r,e=mR,n=pR){const s=e*Math.pow(n,r),o=Math.round(yR*s*(Math.random()-.5)*2);return Math.min(gR,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(r){return r&&r._delegate?r._delegate:r}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Zb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ER(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vR(r){return r===Bs?void 0:r}function ER(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _R(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const AR={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},SR=Ne.INFO,wR={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},bR=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=wR[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ah{constructor(e){this.name=e,this._logLevel=SR,this._logHandler=bR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const RR=(r,e)=>e.some(n=>r instanceof n);let rv,sv;function IR(){return rv||(rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CR(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,fm=new WeakMap,sT=new WeakMap,Wd=new WeakMap,Gm=new WeakMap;function DR(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n($r(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&rT.set(n,r)}).catch(()=>{}),Gm.set(e,r),e}function OR(r){if(fm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});fm.set(r,e)}let dm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return fm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||sT.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function NR(r){dm=r(dm)}function MR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Zd(this),e,...n);return sT.set(s,e.sort?e.sort():[e]),$r(s)}:CR().includes(r)?function(...e){return r.apply(Zd(this),e),$r(rT.get(this))}:function(...e){return $r(r.apply(Zd(this),e))}}function VR(r){return typeof r=="function"?MR(r):(r instanceof IDBTransaction&&OR(r),RR(r,IR())?new Proxy(r,dm):r)}function $r(r){if(r instanceof IDBRequest)return DR(r);if(Wd.has(r))return Wd.get(r);const e=VR(r);return e!==r&&(Wd.set(r,e),Gm.set(e,r)),e}const Zd=r=>Gm.get(r);function aT(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=$r(f);return s&&f.addEventListener("upgradeneeded",p=>{s($r(f.result),p.oldVersion,p.newVersion,$r(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const PR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],Jd=new Map;function av(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=kR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||PR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Jd.set(e,u),u}NR(r=>({...r,get:(e,n,s)=>av(e,n)||r.get(e,n,s),has:(e,n)=>!!av(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function LR(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mm="@firebase/app",ov="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Ah("@firebase/app"),UR="@firebase/app-compat",zR="@firebase/analytics-compat",BR="@firebase/analytics",HR="@firebase/app-check-compat",qR="@firebase/app-check",jR="@firebase/auth",FR="@firebase/auth-compat",GR="@firebase/database",KR="@firebase/data-connect",$R="@firebase/database-compat",QR="@firebase/functions",YR="@firebase/functions-compat",XR="@firebase/installations",WR="@firebase/installations-compat",ZR="@firebase/messaging",JR="@firebase/messaging-compat",eI="@firebase/performance",tI="@firebase/performance-compat",nI="@firebase/remote-config",iI="@firebase/remote-config-compat",rI="@firebase/storage",sI="@firebase/storage-compat",aI="@firebase/firestore",oI="@firebase/vertexai",lI="@firebase/firestore-compat",uI="firebase",cI="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="[DEFAULT]",hI={[mm]:"fire-core",[UR]:"fire-core-compat",[BR]:"fire-analytics",[zR]:"fire-analytics-compat",[qR]:"fire-app-check",[HR]:"fire-app-check-compat",[jR]:"fire-auth",[FR]:"fire-auth-compat",[GR]:"fire-rtdb",[KR]:"fire-data-connect",[$R]:"fire-rtdb-compat",[QR]:"fire-fn",[YR]:"fire-fn-compat",[XR]:"fire-iid",[WR]:"fire-iid-compat",[ZR]:"fire-fcm",[JR]:"fire-fcm-compat",[eI]:"fire-perf",[tI]:"fire-perf-compat",[nI]:"fire-rc",[iI]:"fire-rc-compat",[rI]:"fire-gcs",[sI]:"fire-gcs-compat",[aI]:"fire-fst",[lI]:"fire-fst-compat",[oI]:"fire-vertex","fire-js":"fire-js",[uI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Map,fI=new Map,gm=new Map;function lv(r,e){try{r.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function yi(r){const e=r.name;if(gm.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;gm.set(e,r);for(const n of Wc.values())lv(n,r);for(const n of fI.values())lv(n,r);return!0}function Xs(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Pn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Ys("app","Firebase",dI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=cI;function oT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pm,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Qr.create("bad-app-name",{appName:String(o)});if(n||(n=JE()),!n)throw Qr.create("no-options");const u=Wc.get(o);if(u){if(Hl(n,u.options)&&Hl(s,u.config))return u;throw Qr.create("duplicate-app",{appName:o})}const f=new TR(o);for(const p of gm.values())f.addComponent(p);const m=new mI(n,s,f);return Wc.set(o,m),m}function Km(r=pm){const e=Wc.get(r);if(!e&&r===pm&&JE())return oT();if(!e)throw Qr.create("no-app",{appName:r});return e}function xn(r,e,n){var s;let o=(s=hI[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(m.join(" "));return}yi(new Kn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="firebase-heartbeat-database",gI=1,ql="firebase-heartbeat-store";let em=null;function lT(){return em||(em=aT(pI,gI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qr.create("idb-open",{originalErrorMessage:r.message})})),em}async function yI(r){try{const n=(await lT()).transaction(ql),s=await n.objectStore(ql).get(uT(r));return await n.done,s}catch(e){if(e instanceof Yn)tr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function uv(r,e){try{const s=(await lT()).transaction(ql,"readwrite");await s.objectStore(ql).put(e,uT(r)),await s.done}catch(n){if(n instanceof Yn)tr.warn(n.message);else{const s=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(s.message)}}}function uT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1024,vI=30;class EI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=cv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>vI){const f=SI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cv(),{heartbeatsToSend:s,unsentEntries:o}=TI(this._heartbeatsCache.heartbeats),u=Xc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return tr.warn(n),""}}}function cv(){return new Date().toISOString().substring(0,10)}function TI(r,e=_I){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),hv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),hv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nT()?iT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function hv(r){return Xc(JSON.stringify({version:2,heartbeats:r})).length}function SI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(r){yi(new Kn("platform-logger",e=>new xR(e),"PRIVATE")),yi(new Kn("heartbeat",e=>new EI(e),"PRIVATE")),xn(mm,ov,r),xn(mm,ov,"esm2017"),xn("fire-js","")}wI("");var bI="firebase",RI="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(bI,RI,"app");const cT="@firebase/installations",$m="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=1e4,fT=`w:${$m}`,dT="FIS_v2",II="https://firebaseinstallations.googleapis.com/v1",CI=60*60*1e3,DI="installations",OI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},js=new Ys(DI,OI,NI);function mT(r){return r instanceof Yn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT({projectId:r}){return`${II}/projects/${r}/installations`}function gT(r){return{token:r.token,requestStatus:2,expiresIn:VI(r.expiresIn),creationTime:Date.now()}}async function yT(r,e){const s=(await e.json()).error;return js.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function _T({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function MI(r,{refreshToken:e}){const n=_T(r);return n.append("Authorization",PI(e)),n}async function vT(r){const e=await r();return e.status>=500&&e.status<600?r():e}function VI(r){return Number(r.replace("s","000"))}function PI(r){return`${dT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=pT(r),o=_T(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:dT,appId:r.appId,sdkVersion:fT},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await vT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:gT(y.authToken)}}else throw await yT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^[cdef][\w-]{21}$/,ym="";function UI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=zI(r);return LI.test(n)?n:ym}catch{return ym}}function zI(r){return xI(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Map;function AT(r,e){const n=Sh(r);ST(n,e),BI(n,e)}function ST(r,e){const n=TT.get(r);if(n)for(const s of n)s(e)}function BI(r,e){const n=HI();n&&n.postMessage({key:r,fid:e}),qI()}let Hs=null;function HI(){return!Hs&&"BroadcastChannel"in self&&(Hs=new BroadcastChannel("[Firebase] FID Change"),Hs.onmessage=r=>{ST(r.data.key,r.data.fid)}),Hs}function qI(){TT.size===0&&Hs&&(Hs.close(),Hs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="firebase-installations-database",FI=1,Fs="firebase-installations-store";let tm=null;function Qm(){return tm||(tm=aT(jI,FI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Fs)}}})),tm}async function Zc(r,e){const n=Sh(r),o=(await Qm()).transaction(Fs,"readwrite"),u=o.objectStore(Fs),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&AT(r,e.fid),e}async function wT(r){const e=Sh(r),s=(await Qm()).transaction(Fs,"readwrite");await s.objectStore(Fs).delete(e),await s.done}async function wh(r,e){const n=Sh(r),o=(await Qm()).transaction(Fs,"readwrite"),u=o.objectStore(Fs),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&AT(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(r){let e;const n=await wh(r.appConfig,s=>{const o=GI(s),u=KI(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===ym?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GI(r){const e=r||{fid:UI(),registrationStatus:0};return bT(e)}function KI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(js.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=$I(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QI(r)}:{installationEntry:e}}async function $I(r,e){try{const n=await kI(r,e);return Zc(r.appConfig,n)}catch(n){throw mT(n)&&n.customData.serverCode===409?await wT(r.appConfig):await Zc(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QI(r){let e=await fv(r.appConfig);for(;e.registrationStatus===1;)await ET(100),e=await fv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ym(r);return s||n}return e}function fv(r){return wh(r,e=>{if(!e)throw js.create("installation-not-found");return bT(e)})}function bT(r){return YI(r)?{fid:r.fid,registrationStatus:0}:r}function YI(r){return r.registrationStatus===1&&r.registrationTime+hT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI({appConfig:r,heartbeatServiceProvider:e},n){const s=WI(r,n),o=MI(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:fT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await vT(()=>fetch(s,m));if(p.ok){const y=await p.json();return gT(y)}else throw await yT("Generate Auth Token",p)}function WI(r,{fid:e}){return`${pT(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(r,e=!1){let n;const s=await wh(r.appConfig,u=>{if(!RT(u))throw js.create("not-registered");const f=u.authToken;if(!e&&eC(f))return u;if(f.requestStatus===1)return n=ZI(r,e),u;{if(!navigator.onLine)throw js.create("app-offline");const m=nC(u);return n=JI(r,m),m}});return n?await n:s.authToken}async function ZI(r,e){let n=await dv(r.appConfig);for(;n.authToken.requestStatus===1;)await ET(100),n=await dv(r.appConfig);const s=n.authToken;return s.requestStatus===0?Xm(r,e):s}function dv(r){return wh(r,e=>{if(!RT(e))throw js.create("not-registered");const n=e.authToken;return iC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JI(r,e){try{const n=await XI(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Zc(r.appConfig,s),n}catch(n){if(mT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wT(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zc(r.appConfig,s)}throw n}}function RT(r){return r!==void 0&&r.registrationStatus===2}function eC(r){return r.requestStatus===2&&!tC(r)}function tC(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+CI}function nC(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function iC(r){return r.requestStatus===1&&r.requestTime+hT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(r){const e=r,{installationEntry:n,registrationPromise:s}=await Ym(e);return s?s.catch(console.error):Xm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(r,e=!1){const n=r;return await aC(n),(await Xm(n,e)).token}async function aC(r){const{registrationPromise:e}=await Ym(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(r){if(!r||!r.options)throw nm("App Configuration");if(!r.name)throw nm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw nm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function nm(r){return js.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="installations",lC="installations-internal",uC=r=>{const e=r.getProvider("app").getImmediate(),n=oC(e),s=Xs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},cC=r=>{const e=r.getProvider("app").getImmediate(),n=Xs(e,IT).getImmediate();return{getId:()=>rC(n),getToken:o=>sC(n,o)}};function hC(){yi(new Kn(IT,uC,"PUBLIC")),yi(new Kn(lC,cC,"PRIVATE"))}hC();xn(cT,$m);xn(cT,$m,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="analytics",fC="firebase_id",dC="origin",mC=60*1e3,pC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Ah("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new Ys("analytics","Analytics",gC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(r){if(!r.startsWith(Wm)){const e=gn.create("invalid-gtag-resource",{gtagURL:r});return on.warn(e.message),""}return r}function CT(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function _C(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function vC(r,e){const n=_C("firebase-js-sdk-policy",{createScriptURL:yC}),s=document.createElement("script"),o=`${Wm}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function EC(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function TC(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await CT(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){on.error(m)}r("config",o,u)}async function AC(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await CT(n);for(const p of f){const y=m.find(w=>w.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){on.error(u)}}function SC(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await AC(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await TC(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){on.error(m)}}return o}function wC(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=SC(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function bC(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=30,IC=1e3;class CC{constructor(e={},n=IC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const DT=new CC;function DC(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function OC(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:DC(s)},u=pC.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function NC(r,e=DT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw gn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw gn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new PC;return setTimeout(async()=>{m.abort()},mC),OT({appId:s,apiKey:o,measurementId:u},f,m,e)}async function OT(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=DT){var u;const{appId:f,measurementId:m}=r;try{await MC(s,e)}catch(p){if(m)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await OC(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!VC(y)){if(o.deleteThrottleMetadata(f),m)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?iv(n,o.intervalMillis,RC):iv(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,w),on.debug(`Calling attemptFetch again in ${E} millis`),OT(r,w,s,o)}}function MC(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function VC(r){if(!(r instanceof Yn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class PC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kC(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(){if(nT())try{await iT()}catch(r){return on.warn(gn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return on.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LC(r,e,n,s,o,u,f){var m;const p=NC(r);p.then(M=>{n[M.measurementId]=M.appId,r.options.measurementId&&M.measurementId!==r.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${M.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(M=>on.error(M)),e.push(p);const y=xC().then(M=>{if(M)return s.getId()}),[E,w]=await Promise.all([p,y]);bC(u)||vC(u,E.measurementId),o("js",new Date);const D=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return D[dC]="firebase",D.update=!0,w!=null&&(D[fC]=w),o("config",E.measurementId,D),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.app=e}_delete(){return delete Pl[this.app.options.appId],Promise.resolve()}}let Pl={},mv=[];const pv={};let im="dataLayer",zC="gtag",gv,NT,yv=!1;function BC(){const r=[];if(tT()&&r.push("This is a browser extension environment."),aR()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:e});on.warn(n.message)}}function HC(r,e,n){BC();const s=r.options.appId;if(!s)throw gn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(Pl[s]!=null)throw gn.create("already-exists",{id:s});if(!yv){EC(im);const{wrappedGtag:u,gtagCore:f}=wC(Pl,mv,pv,im,zC);NT=u,gv=f,yv=!0}return Pl[s]=LC(r,mv,pv,e,gv,im,n),new UC(r)}function qC(r=Km()){r=ln(r);const e=Xs(r,Jc);return e.isInitialized()?e.getImmediate():jC(r)}function jC(r,e={}){const n=Xs(r,Jc);if(n.isInitialized()){const o=n.getImmediate();if(Hl(e,n.getOptions()))return o;throw gn.create("already-initialized")}return n.initialize({options:e})}function FC(r,e,n,s){r=ln(r),kC(NT,Pl[r.app.options.appId],e,n,s).catch(o=>on.error(o))}const _v="@firebase/analytics",vv="0.10.11";function GC(){yi(new Kn(Jc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return HC(s,o,n)},"PUBLIC")),yi(new Kn("analytics-internal",r,"PRIVATE")),xn(_v,vv),xn(_v,vv,"esm2017");function r(e){try{const n=e.getProvider(Jc).getImmediate();return{logEvent:(s,o,u)=>FC(n,s,o,u)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}GC();function Zm(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function MT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KC=MT,VT=new Ys("auth","Firebase",MT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Ah("@firebase/auth");function $C(r,...e){eh.logLevel<=Ne.WARN&&eh.warn(`Auth (${fo}): ${r}`,...e)}function zc(r,...e){eh.logLevel<=Ne.ERROR&&eh.error(`Auth (${fo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r,...e){throw Jm(r,...e)}function di(r,...e){return Jm(r,...e)}function PT(r,e,n){const s=Object.assign(Object.assign({},KC()),{[e]:n});return new Ys("auth","Firebase",s).create(e,{appName:r.name})}function Ji(r){return PT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return VT.create(r,...e)}function _e(r,e,...n){if(!r)throw Jm(e,...n)}function Yi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw zc(e),new Error(e)}function nr(r,e){r||Yi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function QC(){return Ev()==="http:"||Ev()==="https:"}function Ev(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QC()||tT()||"connection"in navigator)?navigator.onLine:!0}function XC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=eR()||iR()}get(){return YC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(r,e){nr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new eu(3e4,6e4);function as(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function os(r,e,n,s,o={}){return xT(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=Jl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},u);return nR()||(y.referrerPolicy="no-referrer"),kT.fetch()(LT(r,r.config.apiHost,n,m),y)})}async function xT(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},WC),e);try{const o=new e1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Oc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Oc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Oc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw PT(r,E,y);$n(r,E)}}catch(o){if(o instanceof Yn)throw o;$n(r,"network-request-failed",{message:String(o)})}}async function tu(r,e,n,s,o={}){const u=await os(r,e,n,s,o);return"mfaPendingCredential"in u&&$n(r,"multi-factor-auth-required",{_serverResponse:u}),u}function LT(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?ep(r.config,o):`${r.config.apiScheme}://${o}`}function JC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(di(this.auth,"network-request-failed")),ZC.get())})}}function Oc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=di(r,e,s);return o.customData._tokenResponse=n,o}function Tv(r){return r!==void 0&&r.enterprise!==void 0}class t1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function n1(r,e){return os(r,"GET","/v2/recaptchaConfig",as(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(r,e){return os(r,"POST","/v1/accounts:delete",e)}async function UT(r,e){return os(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(r,e=!1){const n=ln(r),s=await n.getIdToken(e),o=tp(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:kl(rm(o.auth_time)),issuedAtTime:kl(rm(o.iat)),expirationTime:kl(rm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rm(r){return Number(r)*1e3}function tp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return zc("JWT malformed, contained fewer than 3 sections"),null;try{const o=WE(n);return o?JSON.parse(o):(zc("Failed to decode base64 JWT payload"),null)}catch(o){return zc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Av(r){const e=tp(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yn&&s1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function s1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(r){var e;const n=r.auth,s=await r.getIdToken(),o=await jl(r,UT(n,{idToken:s}));_e(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?zT(u.providerUserInfo):[],m=l1(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new vm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,w)}async function o1(r){const e=ln(r);await th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function zT(r){return r.map(e=>{var{providerId:n}=e,s=Zm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(r,e){const n=await xT(r,{},async()=>{const s=Jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=LT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",kT.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c1(r,e){return os(r,"POST","/v2/accounts:revokeToken",as(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Av(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await u1(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Wa;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wa,this.toJSON())}_performRefresh(){return Yi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Xi{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=Zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new vm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await jl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await th(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await jl(this,i1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,y,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,M=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,B=(f=n.photoURL)!==null&&f!==void 0?f:void 0,$=(m=n.tenantId)!==null&&m!==void 0?m:void 0,q=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(y=n.createdAt)!==null&&y!==void 0?y:void 0,te=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:pe,isAnonymous:le,providerData:we,stsTokenManager:V}=n;_e(ee&&V,e,"internal-error");const b=Wa.fromJSON(this.name,V);_e(typeof ee=="string",e,"internal-error"),qr(w,e.name),qr(D,e.name),_e(typeof pe=="boolean",e,"internal-error"),_e(typeof le=="boolean",e,"internal-error"),qr(M,e.name),qr(B,e.name),qr($,e.name),qr(q,e.name),qr(Y,e.name),qr(te,e.name);const S=new Xi({uid:ee,auth:e,email:D,emailVerified:pe,displayName:w,isAnonymous:le,photoURL:B,phoneNumber:M,tenantId:$,stsTokenManager:b,createdAt:Y,lastLoginAt:te});return we&&Array.isArray(we)&&(S.providerData=we.map(I=>Object.assign({},I))),q&&(S._redirectEventId=q),S}static async _fromIdTokenResponse(e,n,s=!1){const o=new Wa;o.updateFromServerResponse(n);const u=new Xi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await th(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?zT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Wa;m.updateFromIdToken(s);const p=new Xi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new vm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;function Wi(r){nr(r instanceof Function,"Expected a class definition");let e=Sv.get(r);return e?(nr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Sv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BT.type="NONE";const wv=BT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r,e,n){return`firebase:${r}:${e}:${n}`}class Za{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Bc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Bc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Za(Wi(wv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Wi(wv);const f=Bc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){const w=Xi._fromJSON(e,E);y!==u&&(m=w),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Za(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Za(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KT(e))return"Blackberry";if($T(e))return"Webos";if(qT(e))return"Safari";if((e.includes("chrome/")||jT(e))&&!e.includes("edge/"))return"Chrome";if(GT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function HT(r=Yt()){return/firefox\//i.test(r)}function qT(r=Yt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jT(r=Yt()){return/crios\//i.test(r)}function FT(r=Yt()){return/iemobile/i.test(r)}function GT(r=Yt()){return/android/i.test(r)}function KT(r=Yt()){return/blackberry/i.test(r)}function $T(r=Yt()){return/webos/i.test(r)}function np(r=Yt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function h1(r=Yt()){var e;return np(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f1(){return rR()&&document.documentMode===10}function QT(r=Yt()){return np(r)||GT(r)||$T(r)||KT(r)||/windows phone/i.test(r)||FT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(r,e=[]){let n;switch(r){case"Browser":n=bv(Yt());break;case"Worker":n=`${bv(Yt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(r,e={}){return os(r,"GET","/v2/passwordPolicy",as(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=6;class g1{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:p1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wi(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Za.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await UT(this,{idToken:e}),s=await Xi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await th(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Ji(this));const n=e?ln(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await m1(this),n=new g1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await c1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wi(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Za.create(this,[Wi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$C(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ws(r){return ln(r)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=hR(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _1(r){bh=r}function XT(r){return bh.loadJS(r)}function v1(){return bh.recaptchaEnterpriseScript}function E1(){return bh.gapiScript}function T1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class A1{constructor(){this.enterprise=new S1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class S1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const w1="recaptcha-enterprise",WT="NO_RECAPTCHA";class b1{constructor(e){this.type=w1,this.auth=Ws(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{n1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new t1(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Tv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(WT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new A1().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Tv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=v1();p.length!==0&&(p+=m),XT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Iv(r,e,n,s=!1,o=!1){const u=new b1(r);let f;if(o)f=WT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Em(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Iv(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Iv(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(r,e){const n=Xs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Hl(u,e??{}))return o;$n(o,"already-initialized")}return n.initialize({options:e})}function I1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function C1(r,e,n){const s=Ws(r);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=ZT(e),{host:f,port:m}=D1(e),p=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${f}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),O1()}function ZT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function D1(r){const e=ZT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Cv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Cv(f)}}}function Cv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function O1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yi("not implemented")}_getIdTokenResponse(e){return Yi("not implemented")}_linkToIdToken(e,n){return Yi("not implemented")}_getReauthenticationResolver(e){return Yi("not implemented")}}async function N1(r,e){return os(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(r,e){return tu(r,"POST","/v1/accounts:signInWithPassword",as(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(r,e){return tu(r,"POST","/v1/accounts:signInWithEmailLink",as(r,e))}async function P1(r,e){return tu(r,"POST","/v1/accounts:signInWithEmailLink",as(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends ip{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Fl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Fl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Em(e,n,"signInWithPassword",M1);case"emailLink":return V1(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Em(e,s,"signUpPassword",N1);case"emailLink":return P1(e,{idToken:n,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(r,e){return tu(r,"POST","/v1/accounts:signInWithIdp",as(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="http://localhost";class Gs extends ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=Zm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Gs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Ja(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ja(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ja(e,n)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L1(r){const e=Dl(Ol(r)).link,n=e?Dl(Ol(e)).deep_link_id:null,s=Dl(Ol(r)).deep_link_id;return(s?Dl(Ol(s)).link:null)||s||n||e||r}class rp{constructor(e){var n,s,o,u,f,m;const p=Dl(Ol(e)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,w=x1((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=L1(e);try{return new rp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,n){return Fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=rp.parseLink(n);return _e(s,"argument-error"),Fl._fromEmailAndCode(e,s.code,s.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends JT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends nu{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qi.credential(n,s)}catch{return null}}}Qi.GOOGLE_SIGN_IN_METHOD="google.com";Qi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends nu{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com";Fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends nu{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gr.credential(n,s)}catch{return null}}}Gr.TWITTER_SIGN_IN_METHOD="twitter.com";Gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(r,e){return tu(r,"POST","/v1/accounts:signUp",as(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Xi._fromIdTokenResponse(e,s,o),f=Dv(s);return new Ks({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Dv(s);return new Ks({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Dv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends Yn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,nh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new nh(e,n,s,o)}}function e0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?nh._fromErrorAndOperation(r,u,e,s):u})}async function z1(r,e,n=!1){const s=await jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ks._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(r,e,n=!1){const{auth:s}=r;if(Pn(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const u=await jl(r,e0(s,o,e,r),n);_e(u.idToken,s,"internal-error");const f=tp(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(r.uid===m,s,"user-mismatch"),Ks._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&$n(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(r,e,n=!1){if(Pn(r.app))return Promise.reject(Ji(r));const s="signIn",o=await e0(r,s,e),u=await Ks._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function H1(r,e){return t0(Ws(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(r){const e=Ws(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q1(r,e,n){if(Pn(r.app))return Promise.reject(Ji(r));const s=Ws(r),f=await Em(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",U1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&n0(r),p}),m=await Ks._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function j1(r,e,n){return Pn(r.app)?Promise.reject(Ji(r)):H1(ln(r),mo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&n0(r),s})}function F1(r,e,n,s){return ln(r).onIdTokenChanged(e,n,s)}function G1(r,e,n){return ln(r).beforeAuthStateChanged(e,n)}const ih="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ih,"1"),this.storage.removeItem(ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=1e3,$1=10;class r0 extends i0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=QT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);f1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$1):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r0.type="LOCAL";const Q1=r0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0 extends i0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s0.type="SESSION";const a0=s0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Rh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await Y1(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=sp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const D=w;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return window}function W1(r){mi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function Z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function eD(){return o0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="firebaseLocalStorageDb",tD=1,rh="firebaseLocalStorage",u0="fbase_key";class iu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ih(r,e){return r.transaction([rh],e?"readwrite":"readonly").objectStore(rh)}function nD(){const r=indexedDB.deleteDatabase(l0);return new iu(r).toPromise()}function Tm(){const r=indexedDB.open(l0,tD);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(rh,{keyPath:u0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(rh)?e(s):(s.close(),await nD(),e(await Tm()))})})}async function Ov(r,e,n){const s=Ih(r,!0).put({[u0]:e,value:n});return new iu(s).toPromise()}async function iD(r,e){const n=Ih(r,!1).get(e),s=await new iu(n).toPromise();return s===void 0?null:s.value}function Nv(r,e){const n=Ih(r,!0).delete(e);return new iu(n).toPromise()}const rD=800,sD=3;class c0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance(eD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Z1(),!this.activeServiceWorker)return;this.sender=new X1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tm();return await Ov(e,ih,"1"),await Nv(e,ih),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ov(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>iD(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ih(o,!1).getAll();return new iu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c0.type="LOCAL";const aD=c0;new eu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(r,e){return e?Wi(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ja(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ja(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ja(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lD(r){return t0(r.auth,new ap(r),r.bypassAuthState)}function uD(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),B1(n,new ap(r),r.bypassAuthState)}async function cD(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),z1(n,new ap(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lD;case"linkViaPopup":case"linkViaRedirect":return cD;case"reauthViaPopup":case"reauthViaRedirect":return uD;default:$n(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new eu(2e3,1e4);class Xa extends h0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xa.currentPopupAction&&Xa.currentPopupAction.cancel(),Xa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hD.get())};e()}}Xa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="pendingRedirect",Hc=new Map;class dD extends h0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hc.get(this.auth._key());if(!e){try{const s=await mD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hc.set(this.auth._key(),e)}return this.bypassAuthState||Hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mD(r,e){const n=yD(e),s=gD(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function pD(r,e){Hc.set(r._key(),e)}function gD(r){return Wi(r._redirectPersistence)}function yD(r){return Bc(fD,r.config.apiKey,r.name)}async function _D(r,e,n=!1){if(Pn(r.app))return Promise.reject(Ji(r));const s=Ws(r),o=oD(s,e),f=await new dD(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=10*60*1e3;class ED{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!f0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(di(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mv(e))}saveEventToCache(e){this.cachedEventUids.add(Mv(e)),this.lastProcessedEventTime=Date.now()}}function Mv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function f0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(r,e={}){return os(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wD=/^https?/;async function bD(r){if(r.config.emulator)return;const{authorizedDomains:e}=await AD(r);for(const n of e)try{if(RD(n))return}catch{}$n(r,"unauthorized-domain")}function RD(r){const e=_m(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!wD.test(n))return!1;if(SD.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=new eu(3e4,6e4);function Vv(){const r=mi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function CD(r){return new Promise((e,n)=>{var s,o,u;function f(){Vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vv(),n(di(r,"network-request-failed"))},timeout:ID.get()})}if(!((o=(s=mi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=mi().gapi)===null||u===void 0)&&u.load)f();else{const m=T1("iframefcb");return mi()[m]=()=>{gapi.load?f():n(di(r,"network-request-failed"))},XT(`${E1()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw qc=null,e})}let qc=null;function DD(r){return qc=qc||CD(r),qc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new eu(5e3,15e3),ND="__/auth/iframe",MD="emulator/auth/iframe",VD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kD(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?ep(e,MD):`https://${r.config.authDomain}/${ND}`,s={apiKey:e.apiKey,appName:r.name,v:fo},o=PD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Jl(s).slice(1)}`}async function xD(r){const e=await DD(r),n=mi().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:kD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=di(r,"network-request-failed"),m=mi().setTimeout(()=>{u(f)},OD.get());function p(){mi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UD=500,zD=600,BD="_blank",HD="http://localhost";class Pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qD(r,e,n,s=UD,o=zD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},LD),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Yt().toLowerCase();n&&(m=jT(y)?BD:n),HT(y)&&(e=e||HD,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[M,B])=>`${D}${M}=${B},`,"");if(h1(y)&&m!=="_self")return jD(e||"",m),new Pv(null);const w=window.open(e||"",m,E);_e(w,r,"popup-blocked");try{w.focus()}catch{}return new Pv(w)}function jD(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="__/auth/handler",GD="emulator/auth/handler",KD=encodeURIComponent("fac");async function kv(r,e,n,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:fo,eventId:o};if(e instanceof JT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",cR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(e instanceof nu){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${KD}=${encodeURIComponent(p)}`:"";return`${$D(r)}?${Jl(m).slice(1)}${y}`}function $D({config:r}){return r.emulator?ep(r,GD):`https://${r.authDomain}/${FD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="webStorageSupport";class QD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a0,this._completeRedirectFn=_D,this._overrideRedirectResult=pD}async _openPopup(e,n,s,o){var u;nr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await kv(e,n,s,_m(),o);return qD(e,f,sp())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await kv(e,n,s,_m(),o);return W1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xD(e),s=new ED(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sm,{type:sm},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[sm];f!==void 0&&n(!!f),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QT()||qT()||np()}}const YD=QD;var xv="@firebase/auth",Lv="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZD(r){yi(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YT(r)},y=new y1(s,o,u,p);return I1(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yi(new Kn("auth-internal",e=>{const n=Ws(e.getProvider("auth").getImmediate());return(s=>new XD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(xv,Lv,WD(r)),xn(xv,Lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=5*60,eO=eT("authIdTokenMaxAge")||JD;let Uv=null;const tO=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>eO)return;const o=n==null?void 0:n.token;Uv!==o&&(Uv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function nO(r=Km()){const e=Xs(r,"auth");if(e.isInitialized())return e.getImmediate();const n=R1(r,{popupRedirectResolver:YD,persistence:[aD,Q1,a0]}),s=eT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=tO(u.toString());G1(n,f,()=>f(n.currentUser)),F1(n,m=>f(m))}}const o=ZE("auth");return o&&C1(n,`http://${o}`),n}function iO(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}_1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=di("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",iO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZD("Browser");var zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,d0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,b){function S(){}S.prototype=b.prototype,V.D=b.prototype,V.prototype=new S,V.prototype.constructor=V,V.C=function(I,P,U){for(var C=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)C[_t-2]=arguments[_t];return b.prototype[P].apply(I,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,b,S){S||(S=0);var I=Array(16);if(typeof b=="string")for(var P=0;16>P;++P)I[P]=b.charCodeAt(S++)|b.charCodeAt(S++)<<8|b.charCodeAt(S++)<<16|b.charCodeAt(S++)<<24;else for(P=0;16>P;++P)I[P]=b[S++]|b[S++]<<8|b[S++]<<16|b[S++]<<24;b=V.g[0],S=V.g[1],P=V.g[2];var U=V.g[3],C=b+(U^S&(P^U))+I[0]+3614090360&4294967295;b=S+(C<<7&4294967295|C>>>25),C=U+(P^b&(S^P))+I[1]+3905402710&4294967295,U=b+(C<<12&4294967295|C>>>20),C=P+(S^U&(b^S))+I[2]+606105819&4294967295,P=U+(C<<17&4294967295|C>>>15),C=S+(b^P&(U^b))+I[3]+3250441966&4294967295,S=P+(C<<22&4294967295|C>>>10),C=b+(U^S&(P^U))+I[4]+4118548399&4294967295,b=S+(C<<7&4294967295|C>>>25),C=U+(P^b&(S^P))+I[5]+1200080426&4294967295,U=b+(C<<12&4294967295|C>>>20),C=P+(S^U&(b^S))+I[6]+2821735955&4294967295,P=U+(C<<17&4294967295|C>>>15),C=S+(b^P&(U^b))+I[7]+4249261313&4294967295,S=P+(C<<22&4294967295|C>>>10),C=b+(U^S&(P^U))+I[8]+1770035416&4294967295,b=S+(C<<7&4294967295|C>>>25),C=U+(P^b&(S^P))+I[9]+2336552879&4294967295,U=b+(C<<12&4294967295|C>>>20),C=P+(S^U&(b^S))+I[10]+4294925233&4294967295,P=U+(C<<17&4294967295|C>>>15),C=S+(b^P&(U^b))+I[11]+2304563134&4294967295,S=P+(C<<22&4294967295|C>>>10),C=b+(U^S&(P^U))+I[12]+1804603682&4294967295,b=S+(C<<7&4294967295|C>>>25),C=U+(P^b&(S^P))+I[13]+4254626195&4294967295,U=b+(C<<12&4294967295|C>>>20),C=P+(S^U&(b^S))+I[14]+2792965006&4294967295,P=U+(C<<17&4294967295|C>>>15),C=S+(b^P&(U^b))+I[15]+1236535329&4294967295,S=P+(C<<22&4294967295|C>>>10),C=b+(P^U&(S^P))+I[1]+4129170786&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^P&(b^S))+I[6]+3225465664&4294967295,U=b+(C<<9&4294967295|C>>>23),C=P+(b^S&(U^b))+I[11]+643717713&4294967295,P=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(P^U))+I[0]+3921069994&4294967295,S=P+(C<<20&4294967295|C>>>12),C=b+(P^U&(S^P))+I[5]+3593408605&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^P&(b^S))+I[10]+38016083&4294967295,U=b+(C<<9&4294967295|C>>>23),C=P+(b^S&(U^b))+I[15]+3634488961&4294967295,P=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(P^U))+I[4]+3889429448&4294967295,S=P+(C<<20&4294967295|C>>>12),C=b+(P^U&(S^P))+I[9]+568446438&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^P&(b^S))+I[14]+3275163606&4294967295,U=b+(C<<9&4294967295|C>>>23),C=P+(b^S&(U^b))+I[3]+4107603335&4294967295,P=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(P^U))+I[8]+1163531501&4294967295,S=P+(C<<20&4294967295|C>>>12),C=b+(P^U&(S^P))+I[13]+2850285829&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^P&(b^S))+I[2]+4243563512&4294967295,U=b+(C<<9&4294967295|C>>>23),C=P+(b^S&(U^b))+I[7]+1735328473&4294967295,P=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(P^U))+I[12]+2368359562&4294967295,S=P+(C<<20&4294967295|C>>>12),C=b+(S^P^U)+I[5]+4294588738&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^P)+I[8]+2272392833&4294967295,U=b+(C<<11&4294967295|C>>>21),C=P+(U^b^S)+I[11]+1839030562&4294967295,P=U+(C<<16&4294967295|C>>>16),C=S+(P^U^b)+I[14]+4259657740&4294967295,S=P+(C<<23&4294967295|C>>>9),C=b+(S^P^U)+I[1]+2763975236&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^P)+I[4]+1272893353&4294967295,U=b+(C<<11&4294967295|C>>>21),C=P+(U^b^S)+I[7]+4139469664&4294967295,P=U+(C<<16&4294967295|C>>>16),C=S+(P^U^b)+I[10]+3200236656&4294967295,S=P+(C<<23&4294967295|C>>>9),C=b+(S^P^U)+I[13]+681279174&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^P)+I[0]+3936430074&4294967295,U=b+(C<<11&4294967295|C>>>21),C=P+(U^b^S)+I[3]+3572445317&4294967295,P=U+(C<<16&4294967295|C>>>16),C=S+(P^U^b)+I[6]+76029189&4294967295,S=P+(C<<23&4294967295|C>>>9),C=b+(S^P^U)+I[9]+3654602809&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^P)+I[12]+3873151461&4294967295,U=b+(C<<11&4294967295|C>>>21),C=P+(U^b^S)+I[15]+530742520&4294967295,P=U+(C<<16&4294967295|C>>>16),C=S+(P^U^b)+I[2]+3299628645&4294967295,S=P+(C<<23&4294967295|C>>>9),C=b+(P^(S|~U))+I[0]+4096336452&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~P))+I[7]+1126891415&4294967295,U=b+(C<<10&4294967295|C>>>22),C=P+(b^(U|~S))+I[14]+2878612391&4294967295,P=U+(C<<15&4294967295|C>>>17),C=S+(U^(P|~b))+I[5]+4237533241&4294967295,S=P+(C<<21&4294967295|C>>>11),C=b+(P^(S|~U))+I[12]+1700485571&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~P))+I[3]+2399980690&4294967295,U=b+(C<<10&4294967295|C>>>22),C=P+(b^(U|~S))+I[10]+4293915773&4294967295,P=U+(C<<15&4294967295|C>>>17),C=S+(U^(P|~b))+I[1]+2240044497&4294967295,S=P+(C<<21&4294967295|C>>>11),C=b+(P^(S|~U))+I[8]+1873313359&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~P))+I[15]+4264355552&4294967295,U=b+(C<<10&4294967295|C>>>22),C=P+(b^(U|~S))+I[6]+2734768916&4294967295,P=U+(C<<15&4294967295|C>>>17),C=S+(U^(P|~b))+I[13]+1309151649&4294967295,S=P+(C<<21&4294967295|C>>>11),C=b+(P^(S|~U))+I[4]+4149444226&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~P))+I[11]+3174756917&4294967295,U=b+(C<<10&4294967295|C>>>22),C=P+(b^(U|~S))+I[2]+718787259&4294967295,P=U+(C<<15&4294967295|C>>>17),C=S+(U^(P|~b))+I[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,V.g[2]=V.g[2]+P&4294967295,V.g[3]=V.g[3]+U&4294967295}s.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var S=b-this.blockSize,I=this.B,P=this.h,U=0;U<b;){if(P==0)for(;U<=S;)o(this,V,U),U+=this.blockSize;if(typeof V=="string"){for(;U<b;)if(I[P++]=V.charCodeAt(U++),P==this.blockSize){o(this,I),P=0;break}}else for(;U<b;)if(I[P++]=V[U++],P==this.blockSize){o(this,I),P=0;break}}this.h=P,this.o+=b},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var S=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=S&255,S/=256;for(this.u(V),V=Array(16),b=S=0;4>b;++b)for(var I=0;32>I;I+=8)V[S++]=this.g[b]>>>I&255;return V};function u(V,b){var S=m;return Object.prototype.hasOwnProperty.call(S,V)?S[V]:S[V]=b(V)}function f(V,b){this.h=b;for(var S=[],I=!0,P=V.length-1;0<=P;P--){var U=V[P]|0;I&&U==b||(S[P]=U,I=!1)}this.g=S}var m={};function p(V){return-128<=V&&128>V?u(V,function(b){return new f([b|0],0>b?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return w;if(0>V)return q(y(-V));for(var b=[],S=1,I=0;V>=S;I++)b[I]=V/S|0,S*=4294967296;return new f(b,0)}function E(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return q(E(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(b,8)),I=w,P=0;P<V.length;P+=8){var U=Math.min(8,V.length-P),C=parseInt(V.substring(P,P+U),b);8>U?(U=y(Math.pow(b,U)),I=I.j(U).add(y(C))):(I=I.j(S),I=I.add(y(C)))}return I}var w=p(0),D=p(1),M=p(16777216);r=f.prototype,r.m=function(){if($(this))return-q(this).m();for(var V=0,b=1,S=0;S<this.g.length;S++){var I=this.i(S);V+=(0<=I?I:4294967296+I)*b,b*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(B(this))return"0";if($(this))return"-"+q(this).toString(V);for(var b=y(Math.pow(V,6)),S=this,I="";;){var P=pe(S,b).g;S=Y(S,P.j(b));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(V);if(S=P,B(S))return U+I;for(;6>U.length;)U="0"+U;I=U+I}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function B(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function $(V){return V.h==-1}r.l=function(V){return V=Y(this,V),$(V)?-1:B(V)?0:1};function q(V){for(var b=V.g.length,S=[],I=0;I<b;I++)S[I]=~V.g[I];return new f(S,~V.h).add(D)}r.abs=function(){return $(this)?q(this):this},r.add=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0,P=0;P<=b;P++){var U=I+(this.i(P)&65535)+(V.i(P)&65535),C=(U>>>16)+(this.i(P)>>>16)+(V.i(P)>>>16);I=C>>>16,U&=65535,C&=65535,S[P]=C<<16|U}return new f(S,S[S.length-1]&-2147483648?-1:0)};function Y(V,b){return V.add(q(b))}r.j=function(V){if(B(this)||B(V))return w;if($(this))return $(V)?q(this).j(q(V)):q(q(this).j(V));if($(V))return q(this.j(q(V)));if(0>this.l(M)&&0>V.l(M))return y(this.m()*V.m());for(var b=this.g.length+V.g.length,S=[],I=0;I<2*b;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<V.g.length;P++){var U=this.i(I)>>>16,C=this.i(I)&65535,_t=V.i(P)>>>16,ft=V.i(P)&65535;S[2*I+2*P]+=C*ft,te(S,2*I+2*P),S[2*I+2*P+1]+=U*ft,te(S,2*I+2*P+1),S[2*I+2*P+1]+=C*_t,te(S,2*I+2*P+1),S[2*I+2*P+2]+=U*_t,te(S,2*I+2*P+2)}for(I=0;I<b;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=b;I<2*b;I++)S[I]=0;return new f(S,0)};function te(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function ee(V,b){this.g=V,this.h=b}function pe(V,b){if(B(b))throw Error("division by zero");if(B(V))return new ee(w,w);if($(V))return b=pe(q(V),b),new ee(q(b.g),q(b.h));if($(b))return b=pe(V,q(b)),new ee(q(b.g),b.h);if(30<V.g.length){if($(V)||$(b))throw Error("slowDivide_ only works with positive integers.");for(var S=D,I=b;0>=I.l(V);)S=le(S),I=le(I);var P=we(S,1),U=we(I,1);for(I=we(I,2),S=we(S,2);!B(I);){var C=U.add(I);0>=C.l(V)&&(P=P.add(S),U=C),I=we(I,1),S=we(S,1)}return b=Y(V,P.j(b)),new ee(P,b)}for(P=w;0<=V.l(b);){for(S=Math.max(1,Math.floor(V.m()/b.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),U=y(S),C=U.j(b);$(C)||0<C.l(V);)S-=I,U=y(S),C=U.j(b);B(U)&&(U=D),P=P.add(U),V=Y(V,C)}return new ee(P,V)}r.A=function(V){return pe(this,V).h},r.and=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)&V.i(I);return new f(S,this.h&V.h)},r.or=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)|V.i(I);return new f(S,this.h|V.h)},r.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)^V.i(I);return new f(S,this.h^V.h)};function le(V){for(var b=V.g.length+1,S=[],I=0;I<b;I++)S[I]=V.i(I)<<1|V.i(I-1)>>>31;return new f(S,V.h)}function we(V,b){var S=b>>5;b%=32;for(var I=V.g.length-S,P=[],U=0;U<I;U++)P[U]=0<b?V.i(U+S)>>>b|V.i(U+S+1)<<32-b:V.i(U+S);return new f(P,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Yr=f}).apply(typeof zv<"u"?zv:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,Nl,p0,jc,Am,g0,y0,_0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in _))break e;_=_[L]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,L={next:function(){if(!A&&_<c.length){var j=_++;return{value:g(j,c[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function w(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),c.apply(g,L)}}return function(){return c.apply(g,arguments)}}function D(c,g,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,D.apply(null,arguments)}function M(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function B(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,L,j){for(var ne=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)ne[ke-2]=arguments[ke];return g.prototype[L].apply(A,ne)}}function $(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function q(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const L=c.length||0,j=A.length||0;c.length=L+j;for(let ne=0;ne<j;ne++)c[L+ne]=A[ne]}else c.push(A)}}class Y{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function te(c){return/^[\s\xa0]*$/.test(c)}function ee(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function pe(c){return pe[" "](c),c}pe[" "]=function(){};var le=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function we(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function V(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function b(c){const g={};for(const _ in c)g[_]=c[_];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,g){let _,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(_ in A)c[_]=A[_];for(let j=0;j<S.length;j++)_=S[j],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function P(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function U(c){m.setTimeout(()=>{throw c},0)}function C(){var c=je;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class _t{constructor(){this.h=this.g=null}add(g,_){const A=ft.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ft=new Y(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,fe=!1,je=new _t,O=()=>{const c=m.Promise.resolve(void 0);ye=()=>{c.then(J)}};var J=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){U(_)}var g=ft;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}fe=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var se=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function Ie(c,g){if(re.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(le){e:{try{pe(g.nodeName);var L=!0;break e}catch{}L=!1}L||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}B(Ie,re);var be={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),ze=0;function rt(c,g,_,A,L){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=L,this.key=++ze,this.da=this.fa=!1}function Ke(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Xt(c){this.src=c,this.g={},this.h=0}Xt.prototype.add=function(c,g,_,A,L){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var ne=yn(c,g,A,L);return-1<ne?(g=c[ne],_||(g.fa=!1)):(g=new rt(g,this.src,j,!!A,L),g.fa=_,c.push(g)),g};function Ti(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],L=Array.prototype.indexOf.call(A,g,void 0),j;(j=0<=L)&&Array.prototype.splice.call(A,L,1),j&&(Ke(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function yn(c,g,_,A){for(var L=0;L<c.length;++L){var j=c[L];if(!j.da&&j.listener==g&&j.capture==!!_&&j.ha==A)return L}return-1}var sr="closure_lm_"+(1e6*Math.random()|0),ar={};function Ai(c,g,_,A,L){if(Array.isArray(g)){for(var j=0;j<g.length;j++)Ai(c,g[j],_,A,L);return null}return _=lu(_),c&&c[dt]?c.K(g,_,y(A)?!!A.capture:!1,L):vo(c,g,_,!1,A,L)}function vo(c,g,_,A,L,j){if(!g)throw Error("Invalid event type");var ne=y(L)?!!L.capture:!!L,ke=Eo(c);if(ke||(c[sr]=ke=new Xt(c)),_=ke.add(g,_,A,ne,j),_.proxy)return _;if(A=na(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)se||(L=ne),L===void 0&&(L=!1),c.addEventListener(g.toString(),A,L);else if(c.attachEvent)c.attachEvent(ra(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function na(){function c(_){return g.call(c.src,c.listener,_)}const g=qh;return c}function ia(c,g,_,A,L){if(Array.isArray(g))for(var j=0;j<g.length;j++)ia(c,g[j],_,A,L);else A=y(A)?!!A.capture:!!A,_=lu(_),c&&c[dt]?(c=c.i,g=String(g).toString(),g in c.g&&(j=c.g[g],_=yn(j,_,A,L),-1<_&&(Ke(j[_]),Array.prototype.splice.call(j,_,1),j.length==0&&(delete c.g[g],c.h--)))):c&&(c=Eo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=yn(g,_,A,L)),(_=-1<c?g[c]:null)&&ls(_))}function ls(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[dt])Ti(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(ra(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Eo(g))?(Ti(_,c),_.h==0&&(_.src=null,g[sr]=null)):Ke(c)}}}function ra(c){return c in ar?ar[c]:ar[c]="on"+c}function qh(c,g){if(c.da)c=!0;else{g=new Ie(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&ls(c),c=_.call(A,g)}return c}function Eo(c){return c=c[sr],c instanceof Xt?c:null}var nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(c){return typeof c=="function"?c:(c[nn]||(c[nn]=function(g){return c.handleEvent(g)}),c[nn])}function vt(){ce.call(this),this.i=new Xt(this),this.M=this,this.F=null}B(vt,ce),vt.prototype[dt]=!0,vt.prototype.removeEventListener=function(c,g,_,A){ia(this,c,g,_,A)};function Ct(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new re(g,c);else if(g instanceof re)g.target=g.target||c;else{var L=g;g=new re(A,c),I(g,L)}if(L=!0,_)for(var j=_.length-1;0<=j;j--){var ne=g.g=_[j];L=Si(ne,A,!0,g)&&L}if(ne=g.g=c,L=Si(ne,A,!0,g)&&L,L=Si(ne,A,!1,g)&&L,_)for(j=0;j<_.length;j++)ne=g.g=_[j],L=Si(ne,A,!1,g)&&L}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ke(_[A]);delete c.g[g],c.h--}}this.F=null},vt.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},vt.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function Si(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var L=!0,j=0;j<g.length;++j){var ne=g[j];if(ne&&!ne.da&&ne.capture==_){var ke=ne.listener,Tt=ne.ha||ne.src;ne.fa&&Ti(c.i,ne),L=ke.call(Tt,A)!==!1&&L}}return L&&!A.defaultPrevented}function uu(c,g,_){if(typeof c=="function")_&&(c=D(c,_));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function To(c){c.g=uu(()=>{c.g=null,c.i&&(c.i=!1,To(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class jh extends ce{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(c){ce.call(this),this.h=c,this.g={}}B(us,ce);var or=[];function jt(c){we(c.g,function(g,_){this.g.hasOwnProperty(_)&&ls(g)},c),c.g={}}us.prototype.N=function(){us.aa.N.call(this),jt(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ao=m.JSON.stringify,Xn=m.JSON.parse,Wt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function So(){}So.prototype.h=null;function cu(c){return c.h||(c.h=c.i())}function hu(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){re.call(this,"d")}B(lr,re);function Ln(){re.call(this,"c")}B(Ln,re);var _n={},ur=null;function sa(){return ur=ur||new vt}_n.La="serverreachability";function wo(c){re.call(this,_n.La,c)}B(wo,re);function cr(c){const g=sa();Ct(g,new wo(g))}_n.STAT_EVENT="statevent";function aa(c,g){re.call(this,_n.STAT_EVENT,c),this.stat=g}B(aa,re);function ut(c){const g=sa();Ct(g,new aa(g,c))}_n.Ma="timingevent";function fu(c,g){re.call(this,_n.Ma,c),this.size=g}B(fu,re);function hr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function fr(){this.g=!0}fr.prototype.xa=function(){this.g=!1};function du(c,g,_,A,L,j){c.info(function(){if(c.g)if(j)for(var ne="",ke=j.split("&"),Tt=0;Tt<ke.length;Tt++){var xe=ke[Tt].split("=");if(1<xe.length){var Nt=xe[0];xe=xe[1];var At=Nt.split("_");ne=2<=At.length&&At[1]=="type"?ne+(Nt+"="+xe+"&"):ne+(Nt+"=redacted&")}}else ne=null;else ne=j;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+g+`
`+_+`
`+ne})}function mu(c,g,_,A,L,j,ne){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+g+`
`+_+`
`+j+" "+ne})}function dr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Dt(c,_)+(A?" "+A:"")})}function Zn(c,g){c.info(function(){return"TIMEOUT: "+g})}fr.prototype.info=function(){};function Dt(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return Ao(_)}catch{return g}}var Et={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cs;function oa(){}B(oa,So),oa.prototype.g=function(){return new XMLHttpRequest},oa.prototype.i=function(){return{}},cs=new oa;function Jn(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bo}function bo(){this.i=null,this.g="",this.h=!1}var mr={},hs={};function Un(c,g,_){c.L=1,c.v=ms(st(g)),c.m=_,c.P=!0,bi(c,null)}function bi(c,g){c.F=Date.now(),et(c),c.A=st(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Ci(_.i,"t",A),c.C=0,_=c.j.J,c.h=new bo,c.g=Cu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new jh(D(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(or[0]=L.toString()),L=or);for(var j=0;j<L.length;j++){var ne=Ai(_,L[j],A||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),cr(),du(c.i,c.u,c.A,c.l,c.R,c.m)}Jn.prototype.ca=function(c){c=c.target;const g=this.M;g&&Sn(c)==3?g.j():this.Y(c)},Jn.prototype.Y=function(c){try{if(c==this.g)e:{const At=Sn(this.g);var g=this.g.Ba();const Mi=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Eu(this.g)))){this.J||At!=4||g==7||(g==8||0>=Mi?cr(3):cr(2)),la(this);var _=this.g.Z();this.X=_;t:if(pr(this)){var A=Eu(this.g);c="";var L=A.length,j=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),un(this);var ne="";break t}this.h.i=new m.TextDecoder}for(g=0;g<L;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(j&&g==L-1)});A.length=0,this.h.g+=c,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,mu(this.i,this.u,this.A,this.l,this.R,At,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Tt=this.g;if((ke=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(ke)){var xe=ke;break t}}xe=null}if(_=xe)dr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cn(this,_);else{this.o=!1,this.s=3,ut(12),rn(this),un(this);break e}}if(this.P){_=!0;let xt;for(;!this.J&&this.C<ne.length;)if(xt=gr(this,ne),xt==hs){At==4&&(this.s=4,ut(14),_=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==mr){this.s=4,ut(15),dr(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else dr(this.i,this.l,xt,null),cn(this,xt);if(pr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||ne.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)dr(this.i,this.l,ne,"[Invalid Chunked Response]"),rn(this),un(this);else if(0<ne.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Ts(Nt),Nt.M=!0,ut(11))}}else dr(this.i,this.l,ne,null),cn(this,ne);At==4&&rn(this),this.o&&!this.J&&(At==4?bu(this.j,this):(this.o=!1,et(this)))}else Yh(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),rn(this),un(this)}}}catch{}finally{}};function pr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function gr(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?hs:(_=Number(g.substring(_,A)),isNaN(_)?mr:(A+=1,A+_>g.length?hs:(g=g.slice(A,A+_),c.C=A+_,g)))}Jn.prototype.cancel=function(){this.J=!0,rn(this)};function et(c){c.S=Date.now()+c.I,Ro(c,c.I)}function Ro(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=hr(D(c.ba,c),g)}function la(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Jn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Zn(this.i,this.A),this.L!=2&&(cr(),ut(17)),rn(this),this.s=2,un(this)):Ro(this,this.S-c)};function un(c){c.j.G==0||c.J||bu(c.j,c)}function rn(c){la(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,jt(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function cn(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||yr(_.h,c))){if(!c.K&&yr(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)_a(_),ga(_);else break e;Lo(_),ut(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=hr(D(_.Za,_),6e3));if(1>=pu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ni(_,11)}else if((c.K||_.g==c)&&_a(_),!te(g))for(L=_.Da.g.parse(g),g=0;g<L.length;g++){let xe=L[g];if(_.T=xe[0],xe=xe[1],_.G==2)if(xe[0]=="c"){_.K=xe[1],_.ia=xe[2];const Nt=xe[3];Nt!=null&&(_.la=Nt,_.j.info("VER="+_.la));const At=xe[4];At!=null&&(_.Aa=At,_.j.info("SVER="+_.Aa));const Mi=xe[5];Mi!=null&&typeof Mi=="number"&&0<Mi&&(A=1.5*Mi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const xt=c.g;if(xt){const ai=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var j=A.h;j.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(_r(j,j.h),j.h=null))}if(A.D){const zo=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(A.ya=zo,Be(A.I,A.D,zo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ne=c;if(A.qa=Iu(A,A.J?A.ia:null,A.W),ne.K){vn(A.h,ne);var ke=ne,Tt=A.L;Tt&&(ke.I=Tt),ke.B&&(la(ke),et(ke)),A.g=ne}else Su(A);0<_.i.length&&ya(_)}else xe[0]!="stop"&&xe[0]!="close"||Ni(_,7);else _.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Ni(_,7):ko(_):xe[0]!="noop"&&_.l&&_.l.ta(xe),_.v=0)}}cr(4)}catch{}}var Fh=class{constructor(c,g){this.g=c,this.map=g}};function Io(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Co(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pu(c){return c.h?1:c.g?c.g.size:0}function yr(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function _r(c,g){c.g?c.g.add(g):c.h=g}function vn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Io.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return $(c.i)}function gu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function Gh(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function fs(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=Gh(c),A=gu(c),L=A.length,j=0;j<L;j++)g.call(void 0,A[j],_&&_[j],c)}var Do=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ua(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),L=null;if(0<=A){var j=c[_].substring(0,A);L=c[_].substring(A+1)}else j=c[_];g(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ri(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ri){this.h=c.h,vr(this,c.j),this.o=c.o,this.g=c.g,ds(this,c.s),this.l=c.l;var g=c.i,_=new ei;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),ca(this,_),this.m=c.m}else c&&(g=String(c).match(Do))?(this.h=!1,vr(this,g[1]||"",!0),this.o=Er(g[2]||""),this.g=Er(g[3]||"",!0),ds(this,g[4]),this.l=Er(g[5]||"",!0),ca(this,g[6]||"",!0),this.m=Er(g[7]||"")):(this.h=!1,this.i=new ei(null,this.h))}Ri.prototype.toString=function(){var c=[],g=this.j;g&&c.push(En(g,Oo,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(En(g,Oo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(En(_,_.charAt(0)=="/"?No:yu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",En(_,Qh)),c.join("")};function st(c){return new Ri(c)}function vr(c,g,_){c.j=_?Er(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ds(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function ca(c,g,_){g instanceof ei?(c.i=g,Mo(c.i,c.h)):(_||(g=En(g,$h)),c.i=new ei(g,c.h))}function Be(c,g,_){c.i.set(g,_)}function ms(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Er(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function En(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Kh),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Kh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Oo=/[#\/\?@]/g,yu=/[#\?:]/g,No=/[#\?]/g,$h=/[#\?@]/g,Qh=/#/g;function ei(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Tn(c){c.g||(c.g=new Map,c.h=0,c.i&&ua(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=ei.prototype,r.add=function(c,g){Tn(this),this.i=null,c=Di(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function ha(c,g){Tn(c),g=Di(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ii(c,g){return Tn(c),g=Di(c,g),c.g.has(g)}r.forEach=function(c,g){Tn(this),this.g.forEach(function(_,A){_.forEach(function(L){c.call(g,L,A,this)},this)},this)},r.na=function(){Tn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const L=c[A];for(let j=0;j<L.length;j++)_.push(g[A])}return _},r.V=function(c){Tn(this);let g=[];if(typeof c=="string")Ii(this,c)&&(g=g.concat(this.g.get(Di(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Tn(this),this.i=null,c=Di(this,c),Ii(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ci(c,g,_){ha(c,g),0<_.length&&(c.i=null,c.g.set(Di(c,g),$(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const j=encodeURIComponent(String(A)),ne=this.V(A);for(A=0;A<ne.length;A++){var L=j;ne[A]!==""&&(L+="="+encodeURIComponent(String(ne[A]))),c.push(L)}}return this.i=c.join("&")};function Di(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Mo(c,g){g&&!c.j&&(Tn(c),c.i=null,c.g.forEach(function(_,A){var L=A.toLowerCase();A!=L&&(ha(this,A),Ci(this,L,_))},c)),c.j=g}function _u(c,g){const _=new fr;if(m.Image){const A=new Image;A.onload=M(An,_,"TestLoadImage: loaded",!0,g,A),A.onerror=M(An,_,"TestLoadImage: error",!1,g,A),A.onabort=M(An,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=M(An,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function ps(c,g){const _=new fr,A=new AbortController,L=setTimeout(()=>{A.abort(),An(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(L),j.ok?An(_,"TestPingServer: ok",!0,g):An(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),An(_,"TestPingServer: error",!1,g)})}function An(c,g,_,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(_)}catch{}}function gs(){this.g=new Wt}function ti(c,g,_){const A=_||"";try{fs(c,function(L,j){let ne=L;y(L)&&(ne=Ao(L)),g.push(A+j+"="+encodeURIComponent(ne))})}catch(L){throw g.push(A+"type="+encodeURIComponent("_badmap")),L}}function Tr(c){this.l=c.Ub||null,this.j=c.eb||!1}B(Tr,So),Tr.prototype.g=function(){return new Oi(this.l,this.j)},Tr.prototype.i=function(c){return function(){return c}}({});function Oi(c,g){vt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Oi,vt),r=Oi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ii(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ni(this):ii(this),this.readyState==3&&Vo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ni(this))},r.Qa=function(c){this.g&&(this.response=c,ni(this))},r.ga=function(){this.g&&ni(this)};function ni(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ii(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ii(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Po(c){let g="";return we(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Ot(c,g,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=Po(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Be(c,g,_))}function Fe(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Fe,vt);var fa=/^https?$/i,ys=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cs.g(),this.v=this.o?cu(this.o):cu(cs),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){vu(this,j);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)_.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())_.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ys,g,void 0))||A||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ne]of _)this.g.setRequestHeader(j,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){vu(this,j)}};function vu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,da(c),ri(c)}function da(c){c.A||(c.A=!0,Ct(c,"complete"),Ct(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ct(this,"complete"),Ct(this,"abort"),ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ma(this):this.bb())},r.bb=function(){ma(this)};function ma(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)uu(c.Ea,0,c);else if(Ct(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const ne=c.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var A;if(A=ne===0){var L=String(c.D).match(Do)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!fa.test(L?L.toLowerCase():"")}_=A}if(_)Ct(c,"complete"),Ct(c,"success");else{c.m=6;try{var j=2<Sn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",da(c)}}finally{ri(c)}}}}function ri(c,g){if(c.g){_s(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ct(c,"ready");try{_.onreadystatechange=A}catch{}}}function _s(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Xn(g)}};function Eu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Yh(c){const g={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(te(c[A]))continue;var _=P(c[A]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=g[L]||[];g[L]=j,j.push(_)}V(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function pa(c){this.Aa=0,this.i=[],this.j=new fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,c),this.cb=vs("retryDelaySeedMs",1e4,c),this.Wa=vs("forwardChannelMaxRetries",2,c),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Io(c&&c.concurrentRequestLimit),this.Da=new gs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=pa.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ut(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Iu(this,null,this.W),ya(this)};function ko(c){if(Tu(c),c.G==3){var g=c.U++,_=st(c.I);if(Be(_,"SID",c.K),Be(_,"RID",g),Be(_,"TYPE","terminate"),Es(c,_),g=new Jn(c,c.j,g),g.L=2,g.v=ms(st(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Cu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),et(g)}Ru(c)}function ga(c){c.g&&(Ts(c),c.g.cancel(),c.g=null)}function Tu(c){ga(c),c.u&&(m.clearTimeout(c.u),c.u=null),_a(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ya(c){if(!Co(c.h)&&!c.s){c.s=!0;var g=c.Ga;ye||O(),fe||(ye(),fe=!0),je.add(g,c),c.B=0}}function Xh(c,g){return pu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=hr(D(c.Ga,c,g),Uo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new Jn(this,this.j,c);let j=this.o;if(this.S&&(j?(j=b(j),I(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=Au(this,L,g),_=st(this.I),Be(_,"RID",c),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Es(this,_),j&&(this.O?g="headers="+encodeURIComponent(String(Po(j)))+"&"+g:this.m&&Ot(_,this.m,j)),_r(this.h,L),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",g),Be(_,"SID","null"),L.T=!0,Un(L,_,null)):Un(L,_,g),this.G=2}}else this.G==3&&(c?xo(this,c):this.i.length==0||Co(this.h)||xo(this))};function xo(c,g){var _;g?_=g.l:_=c.U++;const A=st(c.I);Be(A,"SID",c.K),Be(A,"RID",_),Be(A,"AID",c.T),Es(c,A),c.m&&c.o&&Ot(A,c.m,c.o),_=new Jn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Au(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),_r(c.h,_),Un(_,A,g)}function Es(c,g){c.H&&we(c.H,function(_,A){Be(g,A,_)}),c.l&&fs({},function(_,A){Be(g,A,_)})}function Au(c,g,_){_=Math.min(c.i.length,_);var A=c.l?D(c.l.Na,c.l,c):null;e:{var L=c.i;let j=-1;for(;;){const ne=["count="+_];j==-1?0<_?(j=L[0].g,ne.push("ofs="+j)):j=0:ne.push("ofs="+j);let ke=!0;for(let Tt=0;Tt<_;Tt++){let xe=L[Tt].g;const Nt=L[Tt].map;if(xe-=j,0>xe)j=Math.max(0,L[Tt].g-100),ke=!1;else try{ti(Nt,ne,"req"+xe+"_")}catch{A&&A(Nt)}}if(ke){A=ne.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,A}function Su(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ye||O(),fe||(ye(),fe=!0),je.add(g,c),c.v=0}}function Lo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=hr(D(c.Fa,c),Uo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=hr(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),ga(this),wu(this))};function Ts(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function wu(c){c.g=new Jn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=st(c.qa);Be(g,"RID","rpc"),Be(g,"SID",c.K),Be(g,"AID",c.T),Be(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(g,"TO",c.ja),Be(g,"TYPE","xmlhttp"),Es(c,g),c.m&&c.o&&Ot(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ms(st(g)),_.m=null,_.P=!0,bi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ga(this),Lo(this),ut(19))};function _a(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function bu(c,g){var _=null;if(c.g==g){_a(c),Ts(c),c.g=null;var A=2}else if(yr(c.h,g))_=g.D,vn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var L=c.B;A=sa(),Ct(A,new fu(A,_)),ya(c)}else Su(c);else if(L=g.s,L==3||L==0&&0<g.X||!(A==1&&Xh(c,g)||A==2&&Lo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),L){case 1:Ni(c,5);break;case 4:Ni(c,10);break;case 3:Ni(c,6);break;default:Ni(c,2)}}}function Uo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Ni(c,g){if(c.j.info("Error code "+g),g==2){var _=D(c.fb,c),A=c.Xa;const L=!A;A=new Ri(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||vr(A,"https"),ms(A),L?_u(A.toString(),_):ps(A.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(g),Ru(c),Tu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Ru(c){if(c.G=0,c.ka=[],c.l){const g=Zt(c.h);(g.length!=0||c.i.length!=0)&&(q(c.ka,g),q(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function Iu(c,g,_){var A=_ instanceof Ri?st(_):new Ri(_);if(A.g!="")g&&(A.g=g+"."+A.g),ds(A,A.s);else{var L=m.location;A=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;var j=new Ri(null);A&&vr(j,A),g&&(j.g=g),L&&ds(j,L),_&&(j.l=_),A=j}return _=c.D,g=c.ya,_&&g&&Be(A,_,g),Be(A,"VER",c.la),Es(c,A),A}function Cu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Fe(new Tr({eb:_})):new Fe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}r=Du.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function va(){}va.prototype.g=function(c,g){return new Jt(c,g)};function Jt(c,g){vt.call(this),this.g=new pa(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!te(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!te(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new si(this)}B(Jt,vt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){ko(this.g)},Jt.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Ao(c),c=_);g.i.push(new Fh(g.Ya++,c)),g.G==3&&ya(g)},Jt.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,Jt.aa.N.call(this)};function Ou(c){lr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}B(Ou,lr);function Nu(){Ln.call(this),this.status=1}B(Nu,Ln);function si(c){this.g=c}B(si,Du),si.prototype.ua=function(){Ct(this.g,"a")},si.prototype.ta=function(c){Ct(this.g,new Ou(c))},si.prototype.sa=function(c){Ct(this.g,new Nu)},si.prototype.ra=function(){Ct(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,_0=function(){return new va},y0=function(){return sa()},g0=_n,Am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Et.NO_ERROR=0,Et.TIMEOUT=8,Et.HTTP_ERROR=6,jc=Et,wi.COMPLETE="complete",p0=wi,hu.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Nl=hu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,m0=Fe}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});const Bv="@firebase/firestore",Hv="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Ah("@firebase/firestore");function Ka(){return $s.logLevel}function ae(r,...e){if($s.logLevel<=Ne.DEBUG){const n=e.map(op);$s.debug(`Firestore (${po}): ${r}`,...n)}}function ir(r,...e){if($s.logLevel<=Ne.ERROR){const n=e.map(op);$s.error(`Firestore (${po}): ${r}`,...n)}}function no(r,...e){if($s.logLevel<=Ne.WARN){const n=e.map(op);$s.warn(`Firestore (${po}): ${r}`,...n)}}function op(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r="Unexpected state"){const e=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+r;throw ir(e),new Error(e)}function Ge(r,e){r||ve()}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class sO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aO{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Xr,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Xr)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new v0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new $t(e)}}class oO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class lO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new oO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uO{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Pn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new qv(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new qv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=cO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function io(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=-62135596800,Fv=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Fv);return new Rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jv)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fv}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-jv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Rt(0,0))}static max(){return new Te(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="__name__";class fi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(),s===void 0?s=e.length-n:s>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=fi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=fi.isNumericId(e),o=fi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?fi.extractNumericId(e).compare(fi.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class Ze extends fi{construct(e,n,s){return new Ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const hO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends fi{construct(e,n,s){return new Ht(e,n,s)}static isValidIdentifier(e){return hO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gv}static keyField(){return new Ht([Gv])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new de(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ze.fromString(e))}static fromName(e){return new me(Ze.fromString(e).popFirst(5))}static empty(){return new me(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=-1;function fO(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Rt(n+1,0):new Rt(n,s));return new Jr(o,me.empty(),e)}function dO(r){return new Jr(r.readTime,r.key,Gl)}class Jr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Jr(Te.min(),me.empty(),Gl)}static max(){return new Jr(Te.max(),me.empty(),Gl)}}function mO(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(r.documentKey,e.documentKey),n!==0?n:Pe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==pO)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,s)=>{n(e)})}static reject(e){return new X((n,s)=>{s(e)})}static waitFor(e){return new X((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=X.resolve(!1);for(const s of e)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new X((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new X((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function yO(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ch.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=-1;function Dh(r){return r==null}function sh(r){return r===0&&1/r==-1/0}function _O(r){return typeof r=="number"&&Number.isInteger(r)&&!sh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="";function vO(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Kv(e)),e=EO(r.get(n),e);return Kv(e)}function EO(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case T0:n+="";break;default:n+=u}}return n}function Kv(r){return r+T0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function Zs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function A0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mc(this.root,e,this.comparator,!0)}}class Mc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Bt.RED,this.left=o??Bt.EMPTY,this.right=u??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Bt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,s,o,u){return this}insert(e,n,s){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qv(this.data.getIterator())}getIteratorFrom(e){return new Qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new jn([])}unionWith(e){let n=new It(Ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new S0("Invalid base64 string: "+u):u}}(e);return new qt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const TO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(r){if(Ge(!!r),typeof r=="string"){let e=0;const n=TO.exec(r);if(Ge(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ts(r){return typeof r=="string"?qt.fromBase64String(r):qt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="server_timestamp",b0="__type__",R0="__previous_value__",I0="__local_write_time__";function up(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[b0])===null||n===void 0?void 0:n.stringValue)===w0}function Oh(r){const e=r.mapValue.fields[R0];return up(e)?Oh(e):e}function Kl(r){const e=es(r.mapValue.fields[I0].timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,s,o,u,f,m,p,y){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const ah="(default)";class $l{constructor(e,n){this.projectId=e,this.database=n||ah}static empty(){return new $l("","")}get isDefaultDatabase(){return this.database===ah}isEqual(e){return e instanceof $l&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="__type__",SO="__max__",Vc={mapValue:{}},D0="__vector__",oh="value";function ns(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?up(r)?4:bO(r)?9007199254740991:wO(r)?10:11:ve()}function _i(r,e){if(r===e)return!0;const n=ns(r);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Kl(r).isEqual(Kl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=es(o.timestampValue),m=es(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return ts(o.bytesValue).isEqual(ts(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ht(o.geoPointValue.latitude)===ht(u.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ht(o.integerValue)===ht(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=ht(o.doubleValue),m=ht(u.doubleValue);return f===m?sh(f)===sh(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return io(r.arrayValue.values||[],e.arrayValue.values||[],_i);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if($v(f)!==$v(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!_i(f[p],m[p])))return!1;return!0}(r,e);default:return ve()}}function Ql(r,e){return(r.values||[]).find(n=>_i(n,e))!==void 0}function ro(r,e){if(r===e)return 0;const n=ns(r),s=ns(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=ht(u.integerValue||u.doubleValue),p=ht(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,e);case 3:return Yv(r.timestampValue,e.timestampValue);case 4:return Yv(Kl(r),Kl(e));case 5:return Pe(r.stringValue,e.stringValue);case 6:return function(u,f){const m=ts(u),p=ts(f);return m.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Pe(m[y],p[y]);if(E!==0)return E}return Pe(m.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Pe(ht(u.latitude),ht(f.latitude));return m!==0?m:Pe(ht(u.longitude),ht(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Xv(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,y,E;const w=u.fields||{},D=f.fields||{},M=(m=w[oh])===null||m===void 0?void 0:m.arrayValue,B=(p=D[oh])===null||p===void 0?void 0:p.arrayValue,$=Pe(((y=M==null?void 0:M.values)===null||y===void 0?void 0:y.length)||0,((E=B==null?void 0:B.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Xv(M,B)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===Vc.mapValue&&f===Vc.mapValue)return 0;if(u===Vc.mapValue)return 1;if(f===Vc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const D=Pe(p[w],E[w]);if(D!==0)return D;const M=ro(m[p[w]],y[E[w]]);if(M!==0)return M}return Pe(p.length,E.length)}(r.mapValue,e.mapValue);default:throw ve()}}function Yv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const n=es(r),s=es(e),o=Pe(n.seconds,s.seconds);return o!==0?o:Pe(n.nanos,s.nanos)}function Xv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ro(n[o],s[o]);if(u)return u}return Pe(n.length,s.length)}function so(r){return Sm(r)}function Sm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=es(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ts(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return me.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Sm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Sm(n.fields[f])}`;return o+"}"}(r.mapValue):ve()}function Fc(r){switch(ns(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oh(r);return e?16+Fc(e):16;case 5:return 2*r.stringValue.length;case 6:return ts(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Fc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Zs(s.fields,(u,f)=>{o+=u.length+Fc(f)}),o}(r.mapValue);default:throw ve()}}function wm(r){return!!r&&"integerValue"in r}function cp(r){return!!r&&"arrayValue"in r}function Wv(r){return!!r&&"nullValue"in r}function Zv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gc(r){return!!r&&"mapValue"in r}function wO(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[C0])===null||n===void 0?void 0:n.stringValue)===D0}function xl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Zs(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=xl(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xl(r.arrayValue.values[n]);return e}return Object.assign({},r)}function bO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===SO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xl(n)}setAll(e){let n=Ht.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=xl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _i(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Gc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){Zs(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new kn(xl(this.value))}}function O0(r){const e=[];return Zs(r.fields,(n,s)=>{const o=new Ht([n]);if(Gc(s)){const u=O0(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Qt(e,0,Te.min(),Te.min(),Te.min(),kn.empty(),0)}static newFoundDocument(e,n,s,o){return new Qt(e,1,n,Te.min(),s,o,0)}static newNoDocument(e,n){return new Qt(e,2,n,Te.min(),Te.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Te.min(),Te.min(),kn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.position=e,this.inclusive=n}}function Jv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(f.referenceValue),n.key):s=ro(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function eE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!_i(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n="asc"){this.field=e,this.dir=n}}function RO(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{}class bt extends N0{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new CO(e,n,s):n==="array-contains"?new NO(e,s):n==="in"?new MO(e,s):n==="not-in"?new VO(e,s):n==="array-contains-any"?new PO(e,s):new bt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new DO(e,s):new OO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ro(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vi extends N0{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new vi(e,n)}matches(e){return M0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function M0(r){return r.op==="and"}function V0(r){return IO(r)&&M0(r)}function IO(r){for(const e of r.filters)if(e instanceof vi)return!1;return!0}function bm(r){if(r instanceof bt)return r.field.canonicalString()+r.op.toString()+so(r.value);if(V0(r))return r.filters.map(e=>bm(e)).join(",");{const e=r.filters.map(n=>bm(n)).join(",");return`${r.op}(${e})`}}function P0(r,e){return r instanceof bt?function(s,o){return o instanceof bt&&s.op===o.op&&s.field.isEqual(o.field)&&_i(s.value,o.value)}(r,e):r instanceof vi?function(s,o){return o instanceof vi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&P0(f,o.filters[m]),!0):!1}(r,e):void ve()}function k0(r){return r instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`}(r):r instanceof vi?function(n){return n.op.toString()+" {"+n.getFilters().map(k0).join(" ,")+"}"}(r):"Filter"}class CO extends bt{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class DO extends bt{constructor(e,n){super(e,"in",n),this.keys=x0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OO extends bt{constructor(e,n){super(e,"not-in",n),this.keys=x0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x0(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>me.fromName(s.referenceValue))}class NO extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&Ql(n.arrayValue,this.value)}}class MO extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ql(this.value.arrayValue,n)}}class VO extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ql(this.value.arrayValue,n)}}class PO extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ql(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function tE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new kO(r,e,n,s,o,u,f)}function hp(r){const e=Se(r);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>bm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>so(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>so(s)).join(",")),e.le=n}return e.le}function fp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!RO(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!P0(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!eE(r.startAt,e.startAt)&&eE(r.endAt,e.endAt)}function Rm(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function xO(r,e,n,s,o,u,f,m){return new Nh(r,e,n,s,o,u,f,m)}function L0(r){return new Nh(r)}function nE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function LO(r){return r.collectionGroup!==null}function Ll(r){const e=Se(r);if(e.he===null){e.he=[];const n=new Set;for(const u of e.explicitOrderBy)e.he.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new It(Ht.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.he.push(new uh(u,s))}),n.has(Ht.keyField().canonicalString())||e.he.push(new uh(Ht.keyField(),s))}return e.he}function pi(r){const e=Se(r);return e.Pe||(e.Pe=UO(e,Ll(r))),e.Pe}function UO(r,e){if(r.limitType==="F")return tE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new uh(o.field,u)});const n=r.endAt?new lh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new lh(r.startAt.position,r.startAt.inclusive):null;return tE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Im(r,e,n){return new Nh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Mh(r,e){return fp(pi(r),pi(e))&&r.limitType===e.limitType}function U0(r){return`${hp(pi(r))}|lt:${r.limitType}`}function $a(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>k0(o)).join(", ")}]`),Dh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>so(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>so(o)).join(",")),`Target(${s})`}(pi(r))}; limitType=${r.limitType})`}function Vh(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ll(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=Jv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Ll(s),o)||s.endAt&&!function(f,m,p){const y=Jv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Ll(s),o))}(r,e)}function zO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function z0(r){return(e,n)=>{let s=!1;for(const o of Ll(r)){const u=BO(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function BO(r,e,n){const s=r.field.isKeyField()?me.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?ro(p,y):ve()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return A0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new it(me.comparator);function rr(){return HO}const B0=new it(me.comparator);function Ml(...r){let e=B0;for(const n of r)e=e.insert(n.key,n);return e}function H0(r){let e=B0;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qs(){return Ul()}function q0(){return Ul()}function Ul(){return new Js(r=>r.toString(),(r,e)=>r.isEqual(e))}const qO=new it(me.comparator),jO=new It(me.comparator);function Me(...r){let e=jO;for(const n of r)e=e.add(n);return e}const FO=new It(Pe);function GO(){return FO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sh(e)?"-0":e}}function j0(r){return{integerValue:""+r}}function KO(r,e){return _O(e)?j0(e):dp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function $O(r,e,n){return r instanceof ch?function(o,u){const f={fields:{[b0]:{stringValue:w0},[I0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&up(u)&&(u=Oh(u)),u&&(f.fields[R0]=u),{mapValue:f}}(n,e):r instanceof Yl?G0(r,e):r instanceof Xl?K0(r,e):function(o,u){const f=F0(o,u),m=iE(f)+iE(o.Ie);return wm(f)&&wm(o.Ie)?j0(m):dp(o.serializer,m)}(r,e)}function QO(r,e,n){return r instanceof Yl?G0(r,e):r instanceof Xl?K0(r,e):n}function F0(r,e){return r instanceof hh?function(s){return wm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class ch extends Ph{}class Yl extends Ph{constructor(e){super(),this.elements=e}}function G0(r,e){const n=$0(e);for(const s of r.elements)n.some(o=>_i(o,s))||n.push(s);return{arrayValue:{values:n}}}class Xl extends Ph{constructor(e){super(),this.elements=e}}function K0(r,e){let n=$0(e);for(const s of r.elements)n=n.filter(o=>!_i(o,s));return{arrayValue:{values:n}}}class hh extends Ph{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function iE(r){return ht(r.integerValue||r.doubleValue)}function $0(r){return cp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function YO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Yl&&o instanceof Yl||s instanceof Xl&&o instanceof Xl?io(s.elements,o.elements,_i):s instanceof hh&&o instanceof hh?_i(s.Ie,o.Ie):s instanceof ch&&o instanceof ch}(r.transform,e.transform)}class XO{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class kh{}function Q0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new X0(r.key,er.none()):new ru(r.key,r.data,er.none());{const n=r.data,s=kn.empty();let o=new It(Ht.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new ea(r.key,s,new jn(o.toArray()),er.none())}}function WO(r,e,n){r instanceof ru?function(o,u,f){const m=o.value.clone(),p=sE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof ea?function(o,u,f){if(!Kc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=sE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(Y0(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function zl(r,e,n,s){return r instanceof ru?function(u,f,m,p){if(!Kc(u.precondition,f))return m;const y=u.value.clone(),E=aE(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof ea?function(u,f,m,p){if(!Kc(u.precondition,f))return m;const y=aE(u.fieldTransforms,p,f),E=f.data;return E.setAll(Y0(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,e,n,s):function(u,f,m){return Kc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function ZO(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=F0(s.transform,o||null);u!=null&&(n===null&&(n=kn.empty()),n.set(s.field,u))}return n||null}function rE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&io(s,o,(u,f)=>YO(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ru extends kh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ea extends kh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Y0(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function sE(r,e,n){const s=new Map;Ge(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,QO(f,m,n[o]))}return s}function aE(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,$O(u,f,e))}return s}class X0 extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JO extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&WO(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=q0();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=Q0(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Me())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,s)=>rE(n,s))&&io(this.baseMutations,e.baseMutations,(n,s)=>rE(n,s))}}class mp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Ge(e.mutations.length===s.length);let o=function(){return qO}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new mp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Ue;function i2(r){switch(r){case Z.OK:return ve();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return ve()}}function W0(r){if(r===void 0)return ir("GRPC error has no .code"),Z.UNKNOWN;switch(r){case yt.OK:return Z.OK;case yt.CANCELLED:return Z.CANCELLED;case yt.UNKNOWN:return Z.UNKNOWN;case yt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case yt.INTERNAL:return Z.INTERNAL;case yt.UNAVAILABLE:return Z.UNAVAILABLE;case yt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case yt.NOT_FOUND:return Z.NOT_FOUND;case yt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case yt.ABORTED:return Z.ABORTED;case yt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case yt.DATA_LOSS:return Z.DATA_LOSS;default:return ve()}}(Ue=yt||(yt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new Yr([4294967295,4294967295],0);function oE(r){const e=r2().encode(r),n=new d0;return n.update(e),new Uint8Array(n.digest())}function lE(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Yr([n,s],0),new Yr([o,u],0)]}class pp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Vl(`Invalid padding: ${n}`);if(s<0)throw new Vl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Vl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Yr.fromNumber(this.Ee)}Ae(e,n,s){let o=e.add(n.multiply(Yr.fromNumber(s)));return o.compare(s2)===1&&(o=new Yr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=oE(e),[s,o]=lE(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new pp(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.Ee===0)return;const n=oE(e),[s,o]=lE(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,su.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new xh(Te.min(),o,new it(Pe),rr(),Me())}}class su{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new su(s,n,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,s,o){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=o}}class Z0{constructor(e,n){this.targetId=e,this.ge=n}}class J0{constructor(e,n,s=qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class uE{constructor(){this.pe=0,this.ye=cE(),this.we=qt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Me(),n=Me(),s=Me();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ve()}}),new su(this.we,this.Se,e,n,s)}Me(){this.be=!1,this.ye=cE()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class a2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=rr(),this.$e=Pc(),this.Ke=Pc(),this.Ue=new it(Pe)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(e){const n=e.targetId,s=e.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Rm(u))if(s===0){const f=new me(u.path);this.ze(n,f,Qt.newNoDocument(f,Te.min()))}else Ge(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(e),p=m?this.nt(m,e,f):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ts(s).toUint8Array()}catch(p){if(p instanceof S0)return no("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new pp(f,o,u)}catch(p){return no(p instanceof Vl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(e){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Rm(m.target)){const p=new me(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Qt.newNoDocument(p,e))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=Me();this.Ke.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(e));const o=new xh(e,n,this.Ue,this.Qe,s);return this.Qe=rr(),this.$e=Pc(),this.Ke=Pc(),this.Ue=new it(Pe),o}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new uE,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new It(Pe),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new It(Pe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new uE),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Pc(){return new it(me.comparator)}function cE(){return new it(me.comparator)}const o2={asc:"ASCENDING",desc:"DESCENDING"},l2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},u2={and:"AND",or:"OR"};class c2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cm(r,e){return r.useProto3Json||Dh(e)?e:{value:e}}function fh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function h2(r,e){return fh(r,e.toTimestamp())}function gi(r){return Ge(!!r),Te.fromTimestamp(function(n){const s=es(n);return new Rt(s.seconds,s.nanos)}(r))}function gp(r,e){return Dm(r,e).canonicalString()}function Dm(r,e){const n=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function tA(r){const e=Ze.fromString(r);return Ge(aA(e)),e}function Om(r,e){return gp(r.databaseId,e.path)}function am(r,e){const n=tA(e);if(n.get(1)!==r.databaseId.projectId)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new me(iA(n))}function nA(r,e){return gp(r.databaseId,e)}function f2(r){const e=tA(r);return e.length===4?Ze.emptyPath():iA(e)}function Nm(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function iA(r){return Ge(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function hE(r,e,n){return{name:Om(r,e),fields:n.value.mapValue.fields}}function d2(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ge(E===void 0||typeof E=="string"),qt.fromBase64String(E||"")):(Ge(E===void 0||E instanceof Buffer||E instanceof Uint8Array),qt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const E=y.code===void 0?Z.UNKNOWN:W0(y.code);return new de(E,y.message||"")}(f);n=new J0(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=am(r,s.document.name),u=gi(s.document.updateTime),f=s.document.createTime?gi(s.document.createTime):Te.min(),m=new kn({mapValue:{fields:s.document.fields}}),p=Qt.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new $c(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=am(r,s.document),u=s.readTime?gi(s.readTime):Te.min(),f=Qt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new $c([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=am(r,s.document),u=s.removedTargetIds||[];n=new $c([],u,o,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new n2(o,u),m=s.targetId;n=new Z0(m,f)}}return n}function m2(r,e){let n;if(e instanceof ru)n={update:hE(r,e.key,e.value)};else if(e instanceof X0)n={delete:Om(r,e.key)};else if(e instanceof ea)n={update:hE(r,e.key,e.data),updateMask:S2(e.fieldMask)};else{if(!(e instanceof JO))return ve();n={verify:Om(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof ch)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Yl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof hh)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw ve()}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:h2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve()}(r,e.precondition)),n}function p2(r,e){return r&&r.length>0?(Ge(e!==void 0),r.map(n=>function(o,u){let f=o.updateTime?gi(o.updateTime):gi(u);return f.isEqual(Te.min())&&(f=gi(u)),new XO(f,o.transformResults||[])}(n,e))):[]}function g2(r,e){return{documents:[nA(r,e.path)]}}function y2(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=nA(r,o);const u=function(y){if(y.length!==0)return sA(vi.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:Qa(D.field),direction:E2(D.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Cm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:n,parent:o}}function _2(r){let e=f2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ge(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(w){const D=rA(w);return D instanceof vi&&V0(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(D=>function(B){return new uh(Ya(B.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(D))}(n.orderBy));let m=null;n.limit&&(m=function(w){let D;return D=typeof w=="object"?w.value:w,Dh(D)?null:D}(n.limit));let p=null;n.startAt&&(p=function(w){const D=!!w.before,M=w.values||[];return new lh(M,D)}(n.startAt));let y=null;return n.endAt&&(y=function(w){const D=!w.before,M=w.values||[];return new lh(M,D)}(n.endAt)),xO(e,o,f,u,m,"F",p,y)}function v2(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rA(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ya(n.unaryFilter.field);return bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ya(n.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ya(n.unaryFilter.field);return bt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ya(n.unaryFilter.field);return bt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(r):r.fieldFilter!==void 0?function(n){return bt.create(Ya(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return vi.create(n.compositeFilter.filters.map(s=>rA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(r):ve()}function E2(r){return o2[r]}function T2(r){return l2[r]}function A2(r){return u2[r]}function Qa(r){return{fieldPath:r.canonicalString()}}function Ya(r){return Ht.fromServerFormat(r.fieldPath)}function sA(r){return r instanceof bt?function(n){if(n.op==="=="){if(Zv(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NAN"}};if(Wv(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zv(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NOT_NAN"}};if(Wv(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qa(n.field),op:T2(n.op),value:n.value}}}(r):r instanceof vi?function(n){const s=n.getFilters().map(o=>sA(o));return s.length===1?s[0]:{compositeFilter:{op:A2(n.op),filters:s}}}(r):ve()}function S2(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s,o,u=Te.min(),f=Te.min(),m=qt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.Tt=e}}function b2(r){const e=_2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Im(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.Tn=new I2}addToCollectionParentIndex(e,n){return this.Tn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(Jr.min())}updateCollectionGroup(e,n,s){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class I2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new It(Ze.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new It(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oA=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(oA,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ao(0)}static Un(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="LruGarbageCollector",C2=1048576;function mE([r,e],[n,s]){const o=Pe(r,n);return o===0?Pe(e,s):o}class D2{constructor(e){this.Hn=e,this.buffer=new It(mE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();mE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class O2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ae(dE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yo(n)?ae(dE,"Ignoring IndexedDB error during garbage collection: ",n):await go(n)}await this.er(3e5)})}}class N2{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return X.resolve(Ch.ae);const s=new D2(n);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(fE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fE):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(e,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(y=Date.now(),Ka()<=Ne.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function M2(r,e){return new N2(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&zl(s.mutation,o,jn.empty(),Rt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Me()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Me()){const o=qs();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Ml();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Me()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=rr();const f=Ul(),m=function(){return Ul()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ea)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),zl(E.mutation,y,E.mutation.getFieldMask(),Rt.now())):f.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var w;return m.set(y,new P2(E,(w=f.get(y))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(e,n){const s=Ul();let o=new it((f,m)=>f-m),u=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||jn.empty();E=m.applyToLocalView(y,E),s.set(p,E);const w=(o.get(m.batchId)||Me()).add(p);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,w=q0();E.forEach(D=>{if(!u.has(D)){const M=Q0(n.get(D),s.get(D));M!==null&&w.set(D,M),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,w))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return me.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):X.resolve(qs());let m=Gl,p=u;return f.next(y=>X.forEach(y,(E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(e,E).next(D=>{p=p.insert(E,D)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,p,y,Me())).next(E=>({batchId:m,changes:H0(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next(s=>{let o=Ml();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Ml();return this.indexManager.getCollectionParents(e,u).next(m=>X.forEach(m,p=>{const y=function(w,D){return new Nh(D,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((w,D)=>{f=f.insert(w,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Qt.newInvalidDocument(E)))});let m=Ml();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&zl(E.mutation,y,jn.empty(),Rt.now()),Vh(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return X.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}}(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:b2(o.bundledQuery),readTime:gi(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.overlays=new it(me.comparator),this.Rr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qs();return X.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.Et(e,n,u)}),X.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),X.resolve()}getOverlaysForCollection(e,n,s){const o=qs(),u=n.length+1,f=new me(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new it((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=qs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=qs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return X.resolve(m)}Et(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new t2(n,s));let u=this.Rr.get(n);u===void 0&&(u=Me(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.Vr=new It(kt.mr),this.gr=new It(kt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new kt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new kt(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new me(new Ze([])),s=new kt(n,e),o=new kt(n,e+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new me(new Ze([])),s=new kt(n,e),o=new kt(n,e+1);let u=Me();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new kt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return me.comparator(e.key,n.key)||Pe(e.Cr,n.Cr)}static pr(e,n){return Pe(e.Cr,n.Cr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new It(kt.mr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new e2(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new kt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,n){return X.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?lp:this.Fr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new kt(n,0),o=new kt(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(Pe);return n.forEach(o=>{const u=new kt(o,0),f=new kt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),X.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const f=new kt(new me(u),0);let m=new It(Pe);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Cr)),!0)},f),X.resolve(this.Br(m))}Br(e){const n=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ge(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return X.forEach(n.mutations,o=>{const u=new kt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new kt(n,0),o=this.Mr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.kr=e,this.docs=function(){return new it(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let s=rr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Qt.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=rr();const f=n.path,m=new me(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||mO(dO(E),s)<=0||(o.has(E.key)||Vh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(e,n,s,o){ve()}qr(e,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new H2(this)}getSize(e){return X.resolve(this.size)}}class H2 extends V2{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),X.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.persistence=e,this.Qr=new Js(n=>hp(n),fp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Kr=new yp,this.targetCount=0,this.Ur=ao.Kn()}forEachTarget(e,n){return this.Qr.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),X.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new ao(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.zn(n),X.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.br(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return X.resolve(s)}addMatchingKeys(e,n,s){return this.Kr.yr(n,s),X.resolve()}removeMatchingKeys(e,n,s){this.Kr.Sr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Kr.br(n),X.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Kr.vr(n);return X.resolve(s)}containsKey(e,n){return X.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ch(0),this.zr=!1,this.zr=!0,this.jr=new U2,this.referenceDelegate=e(this),this.Hr=new q2(this),this.indexManager=new R2,this.remoteDocumentCache=function(o){return new B2(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new w2(n),this.Yr=new x2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new L2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new z2(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){ae("MemoryPersistence","Starting transaction:",e);const o=new j2(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,n){return X.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class j2 extends gO{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.ti=new yp,this.ni=null}static ri(e){return new _p(e)}get ii(){if(this.ni)return this.ni;throw ve()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),X.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),X.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,s=>{const o=me.fromPath(s);return this.si(e,o).next(u=>{u||n.removeEntry(o,Te.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return X.or([()=>X.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class dh{constructor(e,n){this.persistence=e,this.oi=new Js(s=>vO(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=M2(this,n)}static ri(e,n){return new dh(e,n)}Zr(){}Xr(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return X.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Te.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fc(e.data.value)),n}ar(e,n,s){return X.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.oi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(e,n){let s=Me(),o=Me();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new vp(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return sR()?8:yO(Yt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.rs(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new F2;return this._s(e,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(e,n,f,m.size)})}).next(()=>u.result)}us(e,n,s,o){return s.documentReadCount<this.es?(Ka()<=Ne.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",$a(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(Ka()<=Ne.DEBUG&&ae("QueryEngine","Query:",$a(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Ka()<=Ne.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",$a(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pi(n))):X.resolve())}rs(e,n){if(nE(n))return X.resolve(null);let s=pi(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Im(n,null,"F"),s=pi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Me(...u);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.cs(n,m);return this.ls(n,y,f,p.readTime)?this.rs(e,Im(n,null,"F")):this.hs(e,y,n,p)}))})))}ss(e,n,s,o){return nE(n)||o.isEqual(Te.min())?X.resolve(null):this.ns.getDocuments(e,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?X.resolve(null):(Ka()<=Ne.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),$a(n)),this.hs(e,f,n,fO(o,Gl)).next(m=>m))})}cs(e,n){let s=new It(z0(e));return n.forEach((o,u)=>{Vh(e,u)&&(s=s.add(u))}),s}ls(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,n,s){return Ka()<=Ne.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",$a(n)),this.ns.getDocumentsMatchingQuery(e,n,Jr.min(),s)}hs(e,n,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="LocalStore",K2=3e8;class $2{constructor(e,n,s,o){this.persistence=e,this.Ps=n,this.serializer=o,this.Ts=new it(Pe),this.Is=new Js(u=>hp(u),fp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function Q2(r,e,n,s){return new $2(r,e,n,s)}async function uA(r,e){const n=Se(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Me();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function Y2(r,e){const n=Se(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const w=y.batch,D=w.keys();let M=X.resolve();return D.forEach(B=>{M=M.next(()=>E.getEntry(p,B)).next($=>{const q=y.docVersions.get(B);Ge(q!==null),$.version.compareTo(q)<0&&(w.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))})}),M.next(()=>m.mutationQueue.removeMutationBatch(p,w))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Me();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function cA(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function X2(r,e){const n=Se(r),s=e.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];e.targetChanges.forEach((E,w)=>{const D=o.get(w);if(!D)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,w).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,w)));let M=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?M=M.withResumeToken(qt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(E.resumeToken,s)),o=o.insert(w,M),function($,q,Y){return $.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=K2?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(D,M,E)&&m.push(n.Hr.updateTargetData(u,M))});let p=rr(),y=Me();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(W2(u,f,e.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!s.isEqual(Te.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(w=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ts=o,u))}function W2(r,e,n){let s=Me(),o=Me();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=rr();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):ae(Ep,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function Z2(r,e){const n=Se(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=lp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function J2(r,e){const n=Se(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,e).next(u=>u?(o=u,X.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new Kr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function Mm(r,e,n){const s=Se(r),o=s.Ts.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!yo(f))throw f;ae(Ep,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function pE(r,e,n){const s=Se(r);let o=Te.min(),u=Me();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const w=Se(p),D=w.Is.get(E);return D!==void 0?X.resolve(w.Ts.get(D)):w.Hr.getTargetData(y,E)}(s,f,pi(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,e,n?o:Te.min(),n?u:Me())).next(m=>(eN(s,zO(e),m),{documents:m,gs:u})))}function eN(r,e,n){let s=r.Es.get(e)||Te.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class gE{constructor(){this.activeTargetIds=GO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tN{constructor(){this.ho=new gE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new gE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="ConnectivityMonitor";class _E{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ae(yE,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ae(yE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc=null;function Vm(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="RestConnection",iN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===ah?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,n,s,o,u){const f=Vm(),m=this.bo(e,n.toUriEncodedString());ae(om,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,m,p,s).then(y=>(ae(om,`Received RPC '${e}' ${f}: `,y),y),y=>{throw no(om,`RPC '${e}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(e,n,s,o,u,f){return this.So(e,n,s,o,u)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,n){const s=iN[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class aN extends rN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,o){const u=Vm();return new Promise((f,m)=>{const p=new m0;p.setWithCredentials(!0),p.listenOnce(p0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case jc.NO_ERROR:const E=p.getResponseJson();ae(Kt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case jc.TIMEOUT:ae(Kt,`RPC '${e}' ${u} timed out`),m(new de(Z.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const w=p.getStatus();if(ae(Kt,`RPC '${e}' ${u} failed with status:`,w,"response text:",p.getResponseText()),w>0){let D=p.getResponseJson();Array.isArray(D)&&(D=D[0]);const M=D==null?void 0:D.error;if(M&&M.status&&M.message){const B=function(q){const Y=q.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(Y)>=0?Y:Z.UNKNOWN}(M.status);m(new de(B,M.message))}else m(new de(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new de(Z.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{ae(Kt,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(o);ae(Kt,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}Wo(e,n,s){const o=Vm(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=_0(),m=y0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");ae(Kt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=f.createWebChannel(E,p);let D=!1,M=!1;const B=new sN({Fo:q=>{M?ae(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(D||(ae(Kt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),D=!0),ae(Kt,`RPC '${e}' stream ${o} sending:`,q),w.send(q))},Mo:()=>w.close()}),$=(q,Y,te)=>{q.listen(Y,ee=>{try{te(ee)}catch(pe){setTimeout(()=>{throw pe},0)}})};return $(w,Nl.EventType.OPEN,()=>{M||(ae(Kt,`RPC '${e}' stream ${o} transport opened.`),B.Qo())}),$(w,Nl.EventType.CLOSE,()=>{M||(M=!0,ae(Kt,`RPC '${e}' stream ${o} transport closed`),B.Ko())}),$(w,Nl.EventType.ERROR,q=>{M||(M=!0,no(Kt,`RPC '${e}' stream ${o} transport errored:`,q),B.Ko(new de(Z.UNAVAILABLE,"The operation could not be completed")))}),$(w,Nl.EventType.MESSAGE,q=>{var Y;if(!M){const te=q.data[0];Ge(!!te);const ee=te,pe=(ee==null?void 0:ee.error)||((Y=ee[0])===null||Y===void 0?void 0:Y.error);if(pe){ae(Kt,`RPC '${e}' stream ${o} received error:`,pe);const le=pe.status;let we=function(S){const I=yt[S];if(I!==void 0)return W0(I)}(le),V=pe.message;we===void 0&&(we=Z.INTERNAL,V="Unknown error status: "+le+" with message "+pe.message),M=!0,B.Ko(new de(we,V)),w.close()}else ae(Kt,`RPC '${e}' stream ${o} received:`,te),B.Uo(te)}}),$(m,g0.STAT_EVENT,q=>{q.stat===Am.PROXY?ae(Kt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Am.NOPROXY&&ae(Kt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{B.$o()},0),B}}function lm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(r){return new c2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="PersistentStream";class fA{constructor(e,n,s,o,u,f,m,p){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new hA(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{e(()=>{const o=new de(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ae(vE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ae(vE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oN extends fA{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=d2(this.serializer,e),s=function(u){if(!("targetChange"in u))return Te.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Te.min():f.readTime?gi(f.readTime):Te.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=Nm(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=Rm(p)?{documents:g2(u,p)}:{query:y2(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=eA(u,f.resumeToken);const y=Cm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Te.min())>0){m.readTime=fh(u,f.snapshotVersion.toTimestamp());const y=Cm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=v2(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=Nm(this.serializer),n.removeTarget=e,this.I_(n)}}class lN extends fA{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=p2(e.writeResults,e.commitTime),s=gi(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=Nm(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>m2(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{}class cN extends uN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(e,Dm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(Z.UNKNOWN,u.toString())})}Co(e,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,Dm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de(Z.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class hN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ir(n),this.N_=!1):ae("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="RemoteStore";class fN{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{ta(this)&&(ae(Qs,"Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.W_.add(4),await au(y),y.j_.set("Unknown"),y.W_.delete(4),await Uh(y)}(this))})}),this.j_=new hN(s,o)}}async function Uh(r){if(ta(r))for(const e of r.G_)await e(!0)}async function au(r){for(const e of r.G_)await e(!1)}function dA(r,e){const n=Se(r);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),wp(n)?Sp(n):_o(n).c_()&&Ap(n,e))}function Tp(r,e){const n=Se(r),s=_o(n);n.U_.delete(e),s.c_()&&mA(n,e),n.U_.size===0&&(s.c_()?s.P_():ta(n)&&n.j_.set("Unknown"))}function Ap(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_o(r).y_(e)}function mA(r,e){r.H_.Ne(e),_o(r).w_(e)}function Sp(r){r.H_=new a2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),_o(r).start(),r.j_.B_()}function wp(r){return ta(r)&&!_o(r).u_()&&r.U_.size>0}function ta(r){return Se(r).W_.size===0}function pA(r){r.H_=void 0}async function dN(r){r.j_.set("Online")}async function mN(r){r.U_.forEach((e,n)=>{Ap(r,e)})}async function pN(r,e){pA(r),wp(r)?(r.j_.q_(e),Sp(r)):r.j_.set("Unknown")}async function gN(r,e,n){if(r.j_.set("Online"),e instanceof J0&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.U_.delete(m),o.H_.removeTarget(m))}(r,e)}catch(s){ae(Qs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mh(r,s)}else if(e instanceof $c?r.H_.We(e):e instanceof Z0?r.H_.Ze(e):r.H_.je(e),!n.isEqual(Te.min()))try{const s=await cA(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(y);E&&u.U_.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(qt.EMPTY_BYTE_STRING,E.snapshotVersion)),mA(u,p);const w=new Kr(E.target,p,y,E.sequenceNumber);Ap(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ae(Qs,"Failed to raise snapshot:",s),await mh(r,s)}}async function mh(r,e,n){if(!yo(e))throw e;r.W_.add(1),await au(r),r.j_.set("Offline"),n||(n=()=>cA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ae(Qs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await Uh(r)})}function gA(r,e){return e().catch(n=>mh(r,n,e))}async function zh(r){const e=Se(r),n=is(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:lp;for(;yN(e);)try{const o=await Z2(e.localStore,s);if(o===null){e.K_.length===0&&n.P_();break}s=o.batchId,_N(e,o)}catch(o){await mh(e,o)}yA(e)&&_A(e)}function yN(r){return ta(r)&&r.K_.length<10}function _N(r,e){r.K_.push(e);const n=is(r);n.c_()&&n.S_&&n.b_(e.mutations)}function yA(r){return ta(r)&&!is(r).u_()&&r.K_.length>0}function _A(r){is(r).start()}async function vN(r){is(r).C_()}async function EN(r){const e=is(r);for(const n of r.K_)e.b_(n.mutations)}async function TN(r,e,n){const s=r.K_.shift(),o=mp.from(s,e,n);await gA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await zh(r)}async function AN(r,e){e&&is(r).S_&&await async function(s,o){if(function(f){return i2(f)&&f!==Z.ABORTED}(o.code)){const u=s.K_.shift();is(s).h_(),await gA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await zh(s)}}(r,e),yA(r)&&_A(r)}async function EE(r,e){const n=Se(r);n.asyncQueue.verifyOperationInProgress(),ae(Qs,"RemoteStore received new credentials");const s=ta(n);n.W_.add(3),await au(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Uh(n)}async function SN(r,e){const n=Se(r);e?(n.W_.delete(2),await Uh(n)):e||(n.W_.add(2),await au(n),n.j_.set("Unknown"))}function _o(r){return r.J_||(r.J_=function(n,s,o){const u=Se(n);return u.M_(),new oN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:dN.bind(null,r),No:mN.bind(null,r),Lo:pN.bind(null,r),p_:gN.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),wp(r)?Sp(r):r.j_.set("Unknown")):(await r.J_.stop(),pA(r))})),r.J_}function is(r){return r.Y_||(r.Y_=function(n,s,o){const u=Se(n);return u.M_(),new lN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:vN.bind(null,r),Lo:AN.bind(null,r),D_:EN.bind(null,r),v_:TN.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await zh(r)):(await r.Y_.stop(),r.K_.length>0&&(ae(Qs,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new bp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rp(r,e){if(ir("AsyncQueue",`${e}: ${r}`),yo(r))return new de(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static emptySet(e){return new eo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=Ml(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new eo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.Z_=new it(me.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ve():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class oo{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new oo(e,n,eo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class bN{constructor(){this.queries=AE(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Se(n),u=o.queries;o.queries=AE(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new de(Z.ABORTED,"Firestore shutting down"))}}function AE(){return new Js(r=>U0(r),Mh)}async function RN(r,e){const n=Se(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new wN,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Rp(f,`Initialization of query '${$a(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.ta.push(e),e.sa(n.onlineState),u.ea&&e.oa(u.ea)&&Ip(n)}async function IN(r,e){const n=Se(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(e);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function CN(r,e){const n=Se(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&Ip(n)}function DN(r,e,n){const s=Se(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(e)}function Ip(r){r.ia.forEach(e=>{e.next()})}var Pm,SE;(SE=Pm||(Pm={}))._a="default",SE.Cache="cache";class ON{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Pm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.key=e}}class EA{constructor(e){this.key=e}}class NN{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Me(),this.mutatedKeys=Me(),this.ya=z0(e),this.wa=new eo(this.ya)}get Sa(){return this.fa}ba(e,n){const s=n?n.Da:new TE,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const D=o.get(E),M=Vh(this.query,w)?w:null,B=!!D&&this.mutatedKeys.has(D.key),$=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let q=!1;D&&M?D.data.isEqual(M.data)?B!==$&&(s.track({type:3,doc:M}),q=!0):this.va(D,M)||(s.track({type:2,doc:M}),q=!0,(p&&this.ya(M,p)>0||y&&this.ya(M,y)<0)&&(m=!0)):!D&&M?(s.track({type:0,doc:M}),q=!0):D&&!M&&(s.track({type:1,doc:D}),q=!0,(p||y)&&(m=!0)),q&&(M?(f=f.add(M),u=$?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort((E,w)=>function(M,B){const $=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return $(M)-$(B)}(E.type,w.type)||this.ya(E.doc,w.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new oo(this.query,e.wa,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new TE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Me(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new EA(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new vA(s))}),n}Oa(e){this.fa=e.gs,this.pa=Me();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return oo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cp="SyncEngine";class MN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class VN{constructor(e){this.key=e,this.Ba=!1}}class PN{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Js(m=>U0(m),Mh),this.qa=new Map,this.Qa=new Set,this.$a=new it(me.comparator),this.Ka=new Map,this.Ua=new yp,this.Wa={},this.Ga=new Map,this.za=ao.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function kN(r,e,n=!0){const s=RA(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await TA(s,e,n,!0),o}async function xN(r,e){const n=RA(r);await TA(n,e,!0,!1)}async function TA(r,e,n,s){const o=await J2(r.localStore,pi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await LN(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&dA(r.remoteStore,o),m}async function LN(r,e,n,s,o){r.Ha=(w,D,M)=>async function($,q,Y,te){let ee=q.view.ba(Y);ee.ls&&(ee=await pE($.localStore,q.query,!1).then(({documents:V})=>q.view.ba(V,ee)));const pe=te&&te.targetChanges.get(q.targetId),le=te&&te.targetMismatches.get(q.targetId)!=null,we=q.view.applyChanges(ee,$.isPrimaryClient,pe,le);return bE($,q.targetId,we.Ma),we.snapshot}(r,w,D,M);const u=await pE(r.localStore,e,!0),f=new NN(e,u.gs),m=f.ba(u.documents),p=su.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);bE(r,n,y.Ma);const E=new MN(e,n,f);return r.ka.set(e,E),r.qa.has(n)?r.qa.get(n).push(e):r.qa.set(n,[e]),y.snapshot}async function UN(r,e,n){const s=Se(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!Mh(f,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Mm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Tp(s.remoteStore,o.targetId),km(s,o.targetId)}).catch(go)):(km(s,o.targetId),await Mm(s.localStore,o.targetId,!0))}async function zN(r,e){const n=Se(r),s=n.ka.get(e),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Tp(n.remoteStore,s.targetId))}async function BN(r,e,n){const s=$N(r);try{const o=await function(f,m){const p=Se(f),y=Rt.now(),E=m.reduce((M,B)=>M.add(B.key),Me());let w,D;return p.persistence.runTransaction("Locally write mutations","readwrite",M=>{let B=rr(),$=Me();return p.ds.getEntries(M,E).next(q=>{B=q,B.forEach((Y,te)=>{te.isValidDocument()||($=$.add(Y))})}).next(()=>p.localDocuments.getOverlayedDocuments(M,B)).next(q=>{w=q;const Y=[];for(const te of m){const ee=ZO(te,w.get(te.key).overlayedDocument);ee!=null&&Y.push(new ea(te.key,ee,O0(ee.value.mapValue),er.exists(!0)))}return p.mutationQueue.addMutationBatch(M,y,Y,m)}).next(q=>{D=q;const Y=q.applyToLocalDocumentSet(w,$);return p.documentOverlayCache.saveOverlays(M,q.batchId,Y)})}).then(()=>({batchId:D.batchId,changes:H0(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new it(Pe)),y=y.insert(m,p),f.Wa[f.currentUser.toKey()]=y}(s,o.batchId,n),await ou(s,o.changes),await zh(s.remoteStore)}catch(o){const u=Rp(o,"Failed to persist write");n.reject(u)}}async function AA(r,e){const n=Se(r);try{const s=await X2(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Ka.get(u);f&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ge(f.Ba):o.removedDocuments.size>0&&(Ge(f.Ba),f.Ba=!1))}),await ou(n,s,e)}catch(s){await go(s)}}function wE(r,e,n){const s=Se(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Se(f);p.onlineState=m;let y=!1;p.queries.forEach((E,w)=>{for(const D of w.ta)D.sa(m)&&(y=!0)}),y&&Ip(p)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HN(r,e,n){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Ka.get(e),u=o&&o.key;if(u){let f=new it(me.comparator);f=f.insert(u,Qt.newNoDocument(u,Te.min()));const m=Me().add(u),p=new xh(Te.min(),new Map,new it(Pe),f,m);await AA(s,p),s.$a=s.$a.remove(u),s.Ka.delete(e),Dp(s)}else await Mm(s.localStore,e,!1).then(()=>km(s,e,n)).catch(go)}async function qN(r,e){const n=Se(r),s=e.batch.batchId;try{const o=await Y2(n.localStore,e);wA(n,s,null),SA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ou(n,o)}catch(o){await go(o)}}async function jN(r,e,n){const s=Se(r);try{const o=await function(f,m){const p=Se(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(w=>(Ge(w!==null),E=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,e);wA(s,e,n),SA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ou(s,o)}catch(o){await go(o)}}function SA(r,e){(r.Ga.get(e)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(e)}function wA(r,e,n){const s=Se(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function km(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(e),r.isPrimaryClient&&r.Ua.br(e).forEach(s=>{r.Ua.containsKey(s)||bA(r,s)})}function bA(r,e){r.Qa.delete(e.path.canonicalString());const n=r.$a.get(e);n!==null&&(Tp(r.remoteStore,n),r.$a=r.$a.remove(e),r.Ka.delete(n),Dp(r))}function bE(r,e,n){for(const s of n)s instanceof vA?(r.Ua.addReference(s.key,e),FN(r,s)):s instanceof EA?(ae(Cp,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,e),r.Ua.containsKey(s.key)||bA(r,s.key)):ve()}function FN(r,e){const n=e.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(ae(Cp,"New document in limbo: "+n),r.Qa.add(s),Dp(r))}function Dp(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const n=new me(Ze.fromString(e)),s=r.za.next();r.Ka.set(s,new VN(n)),r.$a=r.$a.insert(n,s),dA(r.remoteStore,new Kr(pi(L0(n.path)),s,"TargetPurposeLimboResolution",Ch.ae))}}async function ou(r,e,n){const s=Se(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,e,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const w=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(y){o.push(y);const w=vp.Yi(p.targetId,y);u.push(w)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>X.forEach(y,D=>X.forEach(D.Hi,M=>E.persistence.referenceDelegate.addReference(w,D.targetId,M)).next(()=>X.forEach(D.Ji,M=>E.persistence.referenceDelegate.removeReference(w,D.targetId,M)))))}catch(w){if(!yo(w))throw w;ae(Ep,"Failed to update sequence numbers: "+w)}for(const w of y){const D=w.targetId;if(!w.fromCache){const M=E.Ts.get(D),B=M.snapshotVersion,$=M.withLastLimboFreeSnapshotVersion(B);E.Ts=E.Ts.insert(D,$)}}}(s.localStore,u))}async function GN(r,e){const n=Se(r);if(!n.currentUser.isEqual(e)){ae(Cp,"User change. New user:",e.toKey());const s=await uA(n.localStore,e);n.currentUser=e,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new de(Z.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ou(n,s.Rs)}}function KN(r,e){const n=Se(r),s=n.Ka.get(e);if(s&&s.Ba)return Me().add(s.key);{let o=Me();const u=n.qa.get(e);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function RA(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=AA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HN.bind(null,e),e.La.p_=CN.bind(null,e.eventManager),e.La.Ja=DN.bind(null,e.eventManager),e}function $N(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jN.bind(null,e),e}class ph{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return Q2(this.persistence,new G2,e.initialUser,this.serializer)}Xa(e){return new lA(_p.ri,this.serializer)}Za(e){return new tN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ph.provider={build:()=>new ph};class QN extends ph{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ge(this.persistence.referenceDelegate instanceof dh);const s=this.persistence.referenceDelegate.garbageCollector;return new O2(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new lA(s=>dh.ri(s,n),this.serializer)}}class xm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GN.bind(null,this.syncEngine),await SN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bN}()}createDatastore(e){const n=Lh(e.databaseInfo.databaseId),s=function(u){return new aN(u)}(e.databaseInfo);return function(u,f,m,p){return new cN(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new fN(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>wE(this.syncEngine,n,0),function(){return _E.D()?new _E:new nN}())}createSyncEngine(e,n){return function(o,u,f,m,p,y,E){const w=new PN(o,u,f,m,p,y);return E&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Se(o);ae(Qs,"RemoteStore shutting down."),u.W_.add(5),await au(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xm.provider={build:()=>new xm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="FirestoreClient";class XN{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=E0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{ae(rs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ae(rs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Rp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function um(r,e){r.asyncQueue.verifyOperationInProgress(),ae(rs,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await uA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function RE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await WN(r);ae(rs,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>EE(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>EE(e.remoteStore,o)),r._onlineComponents=e}async function WN(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae(rs,"Using user provided OfflineComponentProvider");try{await um(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;no("Error using user provided cache. Falling back to memory cache: "+n),await um(r,new ph)}}else ae(rs,"Using default OfflineComponentProvider"),await um(r,new QN(void 0));return r._offlineComponents}async function IA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae(rs,"Using user provided OnlineComponentProvider"),await RE(r,r._uninitializedComponentsProvider._online)):(ae(rs,"Using default OnlineComponentProvider"),await RE(r,new xm))),r._onlineComponents}function ZN(r){return IA(r).then(e=>e.syncEngine)}async function JN(r){const e=await IA(r),n=e.eventManager;return n.onListen=kN.bind(null,e.syncEngine),n.onUnlisten=UN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zN.bind(null,e.syncEngine),n}function eM(r,e,n={}){const s=new Xr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new YN({next:D=>{E.su(),f.enqueueAndForget(()=>IN(u,w)),D.fromCache&&p.source==="server"?y.reject(new de(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(D)},error:D=>y.reject(D)}),w=new ON(m,E,{includeMetadataChanges:!0,Ta:!0});return RN(u,w)}(await JN(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(r,e,n){if(!n)throw new de(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function tM(r,e,n,s){if(e===!0&&s===!0)throw new de(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function CE(r){if(!me.isDocumentKey(r))throw new de(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function DE(r){if(me.isDocumentKey(r))throw new de(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Op(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve()}function gh(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Op(r);throw new de(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="firestore.googleapis.com",OE=!0;class NE{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=OA,this.ssl=OE}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:OE;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C2)throw new de(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new NE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new NE(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rO;switch(s.type){case"firstParty":return new lO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=IE.get(n);s&&(ae("ComponentProvider","Removing Datastore"),IE.delete(n),s.terminate())}(this),Promise.resolve()}}function nM(r,e,n,s={}){var o;const u=(r=gh(r,Bh))._getSettings(),f=`${e}:${n}`;if(u.host!==OA&&u.host!==f&&no("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:f,ssl:!1})),s.mockUserToken){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=$t.MOCK_USER;else{m=Jb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new de(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(y)}r._authCredentials=new sO(new v0(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hh(this.firestore,e,this._query)}}class Fn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class Wr extends Hh{constructor(e,n,s){super(e,n,L0(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new me(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function ME(r,e,...n){if(r=ln(r),DA("collection","path",e),r instanceof Bh){const s=Ze.fromString(e,...n);return DE(s),new Wr(r,null,s)}{if(!(r instanceof Fn||r instanceof Wr))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return DE(s),new Wr(r.firestore,null,s)}}function iM(r,e,...n){if(r=ln(r),arguments.length===1&&(e=E0.newId()),DA("doc","path",e),r instanceof Bh){const s=Ze.fromString(e,...n);return CE(s),new Fn(r,null,new me(s))}{if(!(r instanceof Fn||r instanceof Wr))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return CE(s),new Fn(r.firestore,r instanceof Wr?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="AsyncQueue";class PE{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new hA(this,"async_queue_retry"),this.Su=()=>{const s=lm();s&&ae(VE,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=lm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=lm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Xr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!yo(e))throw e;ae(VE,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw ir("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const o=bp.createAndSchedule(this,e,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Np extends Bh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new PE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new PE(e),this._firestoreClient=void 0,await e}}}function rM(r,e){const n=typeof r=="object"?r:Km(),s=typeof r=="string"?r:ah,o=Xs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Wb("firestore");u&&nM(o,...u)}return o}function NA(r){if(r._terminated)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||sM(r),r._firestoreClient}function sM(r){var e,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new AO(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,CA(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new XN(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lo(qt.fromBase64String(e))}catch(n){throw new de(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lo(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=/^__.*__$/;class oM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ea(e,this.data,this.fieldMask,n,this.fieldTransforms):new ru(e,this.data,n,this.fieldTransforms)}}function VA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class kp{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new kp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return yh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(VA(this.Lu)&&aM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class lM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Lh(e)}ju(e,n,s,o=!1){return new kp({Lu:e,methodName:n,zu:s,path:Ht.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uM(r){const e=r._freezeSettings(),n=Lh(r._databaseId);return new lM(r._databaseId,!!e.ignoreUndefinedProperties,n)}function cM(r,e,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,e,n,o);LA("Data must be an object, but it was:",f,s);const m=kA(s,f);let p,y;if(u.merge)p=new jn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const D=hM(e,w,n);if(!f.contains(D))throw new de(Z.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);dM(E,D)||E.push(D)}p=new jn(E),y=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=f.fieldTransforms;return new oM(new kn(m),p,y)}function PA(r,e){if(xA(r=ln(r)))return LA("Unsupported field value:",e,r),kA(r,e);if(r instanceof MA)return function(s,o){if(!VA(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=PA(m,o.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=ln(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return KO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Rt.fromDate(s);return{timestampValue:fh(o.serializer,u)}}if(s instanceof Rt){const u=new Rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fh(o.serializer,u)}}if(s instanceof Vp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof lo)return{bytesValue:eA(o.serializer,s._byteString)};if(s instanceof Fn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:gp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Pp)return function(f,m){return{mapValue:{fields:{[C0]:{stringValue:D0},[oh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return dp(m.serializer,y)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Op(s)}`)}(r,e)}function kA(r,e){const n={};return A0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(r,(s,o)=>{const u=PA(o,e.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function xA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Rt||r instanceof Vp||r instanceof lo||r instanceof Fn||r instanceof MA||r instanceof Pp)}function LA(r,e,n){if(!xA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Op(n);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function hM(r,e,n){if((e=ln(e))instanceof Mp)return e._internalPath;if(typeof e=="string")return UA(r,e);throw yh("Field path arguments must be of type string or ",r,!1,void 0,n)}const fM=new RegExp("[~\\*/\\[\\]]");function UA(r,e,n){if(e.search(fM)>=0)throw yh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Mp(...e.split("."))._internalPath}catch{throw yh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function yh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new de(Z.INVALID_ARGUMENT,m+r+p)}function dM(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(BA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mM extends zA{data(){return super.data()}}function BA(r,e){return typeof e=="string"?UA(r,e):e instanceof Mp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new de(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gM{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Zs(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[oh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>ht(f.doubleValue));return new Pp(u)}convertGeoPoint(e){return new Vp(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Oh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Kl(e));default:return null}}convertTimestamp(e){const n=es(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ze.fromString(e);Ge(aA(s));const o=new $l(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(n)||ir(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yM(r,e,n){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _M extends zA{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(BA("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qc extends _M{data(e={}){return super.data(e)}}class vM{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new xc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Qc(this._firestore,this._userDataWriter,s.key,s,new xc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new xc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new xc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:EM(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class TM extends gM{constructor(e){super(),this.firestore=e}convertBytes(e){return new lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,n)}}function AM(r){r=gh(r,Hh);const e=gh(r.firestore,Np),n=NA(e),s=new TM(e);return pM(r._query),eM(n,r._query).then(o=>new vM(e,s,r,o))}function SM(r,e){const n=gh(r.firestore,Np),s=iM(r),o=yM(r.converter,e);return wM(n,[cM(uM(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,er.exists(!1))]).then(()=>s)}function wM(r,e){return function(s,o){const u=new Xr;return s.asyncQueue.enqueueAndForget(async()=>BN(await ZN(s),o,u)),u.promise}(NA(r),e)}(function(e,n=!0){(function(o){po=o})(fo),yi(new Kn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Np(new aO(s.getProvider("auth-internal")),new uO(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new de(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),xn(Bv,Hv,e),xn(Bv,Hv,"esm2017")})();const bM={apiKey:"AIzaSyA41LBLtnkkv6zjfrENEVVZSv8pvwaFKJs",authDomain:"arbao-a0038.firebaseapp.com",projectId:"arbao-a0038",storageBucket:"arbao-a0038.firebasestorage.app",messagingSenderId:"930568793024",appId:"1:930568793024:web:b15f080a56aff7e16e7625",measurementId:"G-VPVBY4KV0X"},xp=oT(bM);qC(xp);const Lp=nO(xp),kE=rM(xp);new Qi;function RM(){const[r,e]=G.useState(""),[n,s]=G.useState(""),[o,u]=G.useState(""),f=vh(),m=async p=>{p.preventDefault();try{await j1(Lp,r,n),f("/dashboard")}catch{u("Email ou mot de passe incorrect.")}};return Ee.jsxs("div",{className:"login-container",children:[Ee.jsx("h2",{children:"Connexion"}),o&&Ee.jsx("p",{className:"error",children:o}),Ee.jsxs("form",{onSubmit:m,children:[Ee.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:p=>e(p.target.value),required:!0}),Ee.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:p=>s(p.target.value),required:!0}),Ee.jsx("button",{type:"submit",children:"Se connecter"})]}),Ee.jsxs("p",{children:["Pas de compte ? ",Ee.jsx(to,{to:"/signup",children:"S'inscrire"})]})]})}function IM(){const[r,e]=G.useState(""),[n,s]=G.useState(""),[o,u]=G.useState(""),[f,m]=G.useState(""),p=vh(),y=async E=>{if(E.preventDefault(),n!==o){m("Les mots de passe ne correspondent pas.");return}try{await q1(Lp,r,n),p("/dashboard")}catch{m("Erreur lors de la création du compte.")}};return Ee.jsxs("div",{className:"signup-container",children:[Ee.jsx("h2",{children:"Inscription"}),f&&Ee.jsx("p",{className:"error",children:f}),Ee.jsxs("form",{onSubmit:y,children:[Ee.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:E=>e(E.target.value),required:!0}),Ee.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:E=>s(E.target.value),required:!0}),Ee.jsx("input",{type:"password",placeholder:"Confirmer le mot de passe",value:o,onChange:E=>u(E.target.value),required:!0}),Ee.jsx("button",{type:"submit",children:"S'inscrire"})]}),Ee.jsxs("p",{children:["Déjà un compte ? ",Ee.jsx(to,{to:"/login",children:"Se connecter"})]})]})}function CM(){const[r,e]=G.useState([]),[n,s]=G.useState("");G.useEffect(()=>{(async()=>{const m=(await AM(ME(kE,"posts"))).docs.map(p=>({id:p.id,...p.data()}));e(m)})()},[]);const o=async u=>{u.preventDefault(),await SM(ME(kE,"posts"),{content:n,createdAt:new Date}),s("")};return Ee.jsxs("div",{children:[Ee.jsx("h1",{children:"Tableau de bord"}),Ee.jsxs("form",{onSubmit:o,children:[Ee.jsx("input",{type:"text",value:n,onChange:u=>s(u.target.value)}),Ee.jsx("button",{type:"submit",children:"Publier"})]}),Ee.jsx("div",{children:r.map(u=>Ee.jsx("div",{children:u.content},u.id))})]})}function DM(){return Ee.jsxs("div",{children:[Ee.jsx("h1",{children:"Bienvenue sur mon site"}),Ee.jsxs("nav",{children:[Ee.jsx(to,{to:"/login",children:"Connexion"})," |"," ",Ee.jsx(to,{to:"/signup",children:"Inscription"})]})]})}function OM(){const[r,e]=G.useState(null);return G.useEffect(()=>{const n=Lp.onAuthStateChanged(s=>e(s));return()=>n()},[]),Ee.jsx(Pb,{children:Ee.jsxs(cb,{children:[Ee.jsx(Cl,{path:"/",element:Ee.jsx(DM,{})}),Ee.jsx(Cl,{path:"/login",element:r?Ee.jsx(Qd,{to:"/dashboard"}):Ee.jsx(RM,{})}),Ee.jsx(Cl,{path:"/signup",element:r?Ee.jsx(Qd,{to:"/dashboard"}):Ee.jsx(IM,{})}),Ee.jsx(Cl,{path:"/dashboard",element:r?Ee.jsx(CM,{}):Ee.jsx(Qd,{to:"/login"})})]})})}Ew.createRoot(document.getElementById("root")).render(Ee.jsx(G.StrictMode,{children:Ee.jsx(OM,{})}));
