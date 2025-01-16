(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var gf={exports:{}},pa={},vf={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function G_(){if(Fm)return Ct;Fm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(F,le,Pe){this.props=F,this.context=le,this.refs=E,this.updater=Pe||_}S.prototype.isReactComponent={},S.prototype.setState=function(F,le){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,le,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(F,le,Pe){this.props=F,this.context=le,this.refs=E,this.updater=Pe||_}var C=I.prototype=new x;C.constructor=I,M(C,S.prototype),C.isPureReactComponent=!0;var A=Array.isArray,B=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function W(F,le,Pe){var re,pe={},Se=null,ve=null;if(le!=null)for(re in le.ref!==void 0&&(ve=le.ref),le.key!==void 0&&(Se=""+le.key),le)B.call(le,re)&&!O.hasOwnProperty(re)&&(pe[re]=le[re]);var Ae=arguments.length-2;if(Ae===1)pe.children=Pe;else if(1<Ae){for(var Ie=Array(Ae),Qe=0;Qe<Ae;Qe++)Ie[Qe]=arguments[Qe+2];pe.children=Ie}if(F&&F.defaultProps)for(re in Ae=F.defaultProps,Ae)pe[re]===void 0&&(pe[re]=Ae[re]);return{$$typeof:o,type:F,key:Se,ref:ve,props:pe,_owner:N.current}}function P(F,le){return{$$typeof:o,type:F.type,key:le,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function k(F){var le={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Pe){return le[Pe]})}var se=/\/+/g;function te(F,le){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):le.toString(36)}function fe(F,le,Pe,re,pe){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case o:case e:ve=!0}}if(ve)return ve=F,pe=pe(ve),F=re===""?"."+te(ve,0):re,A(pe)?(Pe="",F!=null&&(Pe=F.replace(se,"$&/")+"/"),fe(pe,le,Pe,"",function(Qe){return Qe})):pe!=null&&(R(pe)&&(pe=P(pe,Pe+(!pe.key||ve&&ve.key===pe.key?"":(""+pe.key).replace(se,"$&/")+"/")+F)),le.push(pe)),1;if(ve=0,re=re===""?".":re+":",A(F))for(var Ae=0;Ae<F.length;Ae++){Se=F[Ae];var Ie=re+te(Se,Ae);ve+=fe(Se,le,Pe,Ie,pe)}else if(Ie=v(F),typeof Ie=="function")for(F=Ie.call(F),Ae=0;!(Se=F.next()).done;)Se=Se.value,Ie=re+te(Se,Ae++),ve+=fe(Se,le,Pe,Ie,pe);else if(Se==="object")throw le=String(F),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return ve}function de(F,le,Pe){if(F==null)return F;var re=[],pe=0;return fe(F,re,"","",function(Se){return le.call(Pe,Se,pe++)}),re}function ce(F){if(F._status===-1){var le=F._result;le=le(),le.then(function(Pe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Pe)},function(Pe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Pe)}),F._status===-1&&(F._status=0,F._result=le)}if(F._status===1)return F._result.default;throw F._result}var he={current:null},H={transition:null},ue={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:de,forEach:function(F,le,Pe){de(F,function(){le.apply(this,arguments)},Pe)},count:function(F){var le=0;return de(F,function(){le++}),le},toArray:function(F){return de(F,function(le){return le})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Ct.Component=S,Ct.Fragment=t,Ct.Profiler=s,Ct.PureComponent=I,Ct.StrictMode=i,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ct.act=ee,Ct.cloneElement=function(F,le,Pe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var re=M({},F.props),pe=F.key,Se=F.ref,ve=F._owner;if(le!=null){if(le.ref!==void 0&&(Se=le.ref,ve=N.current),le.key!==void 0&&(pe=""+le.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Ie in le)B.call(le,Ie)&&!O.hasOwnProperty(Ie)&&(re[Ie]=le[Ie]===void 0&&Ae!==void 0?Ae[Ie]:le[Ie])}var Ie=arguments.length-2;if(Ie===1)re.children=Pe;else if(1<Ie){Ae=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)Ae[Qe]=arguments[Qe+2];re.children=Ae}return{$$typeof:o,type:F.type,key:pe,ref:Se,props:re,_owner:ve}},Ct.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Ct.createElement=W,Ct.createFactory=function(F){var le=W.bind(null,F);return le.type=F,le},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(F){return{$$typeof:u,render:F}},Ct.isValidElement=R,Ct.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ce}},Ct.memo=function(F,le){return{$$typeof:d,type:F,compare:le===void 0?null:le}},Ct.startTransition=function(F){var le=H.transition;H.transition={};try{F()}finally{H.transition=le}},Ct.unstable_act=ee,Ct.useCallback=function(F,le){return he.current.useCallback(F,le)},Ct.useContext=function(F){return he.current.useContext(F)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(F){return he.current.useDeferredValue(F)},Ct.useEffect=function(F,le){return he.current.useEffect(F,le)},Ct.useId=function(){return he.current.useId()},Ct.useImperativeHandle=function(F,le,Pe){return he.current.useImperativeHandle(F,le,Pe)},Ct.useInsertionEffect=function(F,le){return he.current.useInsertionEffect(F,le)},Ct.useLayoutEffect=function(F,le){return he.current.useLayoutEffect(F,le)},Ct.useMemo=function(F,le){return he.current.useMemo(F,le)},Ct.useReducer=function(F,le,Pe){return he.current.useReducer(F,le,Pe)},Ct.useRef=function(F){return he.current.useRef(F)},Ct.useState=function(F){return he.current.useState(F)},Ct.useSyncExternalStore=function(F,le,Pe){return he.current.useSyncExternalStore(F,le,Pe)},Ct.useTransition=function(){return he.current.useTransition()},Ct.version="18.3.1",Ct}var Om;function qh(){return Om||(Om=1,vf.exports=G_()),vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function W_(){if(km)return pa;km=1;var o=qh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var g,m={},v=null,_=null;d!==void 0&&(v=""+d),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(_=h.ref);for(g in h)i.call(h,g)&&!a.hasOwnProperty(g)&&(m[g]=h[g]);if(u&&u.defaultProps)for(g in h=u.defaultProps,h)m[g]===void 0&&(m[g]=h[g]);return{$$typeof:e,type:u,key:v,ref:_,props:m,_owner:s.current}}return pa.Fragment=t,pa.jsx=c,pa.jsxs=c,pa}var Bm;function X_(){return Bm||(Bm=1,gf.exports=W_()),gf.exports}var be=X_(),zl={},_f={exports:{}},oi={},yf={exports:{}},xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function j_(){return zm||(zm=1,function(o){function e(H,ue){var ee=H.length;H.push(ue);e:for(;0<ee;){var F=ee-1>>>1,le=H[F];if(0<s(le,ue))H[F]=ue,H[ee]=le,ee=F;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var ue=H[0],ee=H.pop();if(ee!==ue){H[0]=ee;e:for(var F=0,le=H.length,Pe=le>>>1;F<Pe;){var re=2*(F+1)-1,pe=H[re],Se=re+1,ve=H[Se];if(0>s(pe,ee))Se<le&&0>s(ve,pe)?(H[F]=ve,H[Se]=ee,F=Se):(H[F]=pe,H[re]=ee,F=re);else if(Se<le&&0>s(ve,ee))H[F]=ve,H[Se]=ee,F=Se;else break e}}return ue}function s(H,ue){var ee=H.sortIndex-ue.sortIndex;return ee!==0?ee:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var h=[],d=[],g=1,m=null,v=3,_=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var ue=t(d);ue!==null;){if(ue.callback===null)i(d);else if(ue.startTime<=H)i(d),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(d)}}function A(H){if(E=!1,C(H),!M)if(t(h)!==null)M=!0,ce(B);else{var ue=t(d);ue!==null&&he(A,ue.startTime-H)}}function B(H,ue){M=!1,E&&(E=!1,x(W),W=-1),_=!0;var ee=v;try{for(C(ue),m=t(h);m!==null&&(!(m.expirationTime>ue)||H&&!k());){var F=m.callback;if(typeof F=="function"){m.callback=null,v=m.priorityLevel;var le=F(m.expirationTime<=ue);ue=o.unstable_now(),typeof le=="function"?m.callback=le:m===t(h)&&i(h),C(ue)}else i(h);m=t(h)}if(m!==null)var Pe=!0;else{var re=t(d);re!==null&&he(A,re.startTime-ue),Pe=!1}return Pe}finally{m=null,v=ee,_=!1}}var N=!1,O=null,W=-1,P=5,R=-1;function k(){return!(o.unstable_now()-R<P)}function se(){if(O!==null){var H=o.unstable_now();R=H;var ue=!0;try{ue=O(!0,H)}finally{ue?te():(N=!1,O=null)}}else N=!1}var te;if(typeof I=="function")te=function(){I(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,de=fe.port2;fe.port1.onmessage=se,te=function(){de.postMessage(null)}}else te=function(){S(se,0)};function ce(H){O=H,N||(N=!0,te())}function he(H,ue){W=S(function(){H(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){M||_||(M=!0,ce(B))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(H){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var ee=v;v=ue;try{return H()}finally{v=ee}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ee=v;v=H;try{return ue()}finally{v=ee}},o.unstable_scheduleCallback=function(H,ue,ee){var F=o.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?F+ee:F):ee=F,H){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ee+le,H={id:g++,callback:ue,priorityLevel:H,startTime:ee,expirationTime:le,sortIndex:-1},ee>F?(H.sortIndex=ee,e(d,H),t(h)===null&&H===t(d)&&(E?(x(W),W=-1):E=!0,he(A,ee-F))):(H.sortIndex=le,e(h,H),M||_||(M=!0,ce(B))),H},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(H){var ue=v;return function(){var ee=v;v=ue;try{return H.apply(this,arguments)}finally{v=ee}}}}(xf)),xf}var Vm;function Y_(){return Vm||(Vm=1,yf.exports=j_()),yf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function q_(){if(Hm)return oi;Hm=1;var o=qh(),e=Y_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(n){return h.call(m,n)?!0:h.call(g,n)?!1:d.test(n)?m[n]=!0:(g[n]=!0,!1)}function _(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||_(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,f,p,y,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=y,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,I);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,I);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,I);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,f){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,f)&&(l=null),f||p===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,f=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,F;function le(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Pe=!1;function re(n,r){if(!n||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ae){var f=ae}Reflect.construct(n,[],r)}else{try{r.call()}catch(ae){f=ae}n.call(r.prototype)}else{try{throw Error()}catch(ae){f=ae}n()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var p=ae.stack.split(`
`),y=f.stack.split(`
`),T=p.length-1,U=y.length-1;1<=T&&0<=U&&p[T]!==y[U];)U--;for(;1<=T&&0<=U;T--,U--)if(p[T]!==y[U]){if(T!==1||U!==1)do if(T--,U--,0>U||p[T]!==y[U]){var V=`
`+p[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=U);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?le(n):""}function pe(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case N:return"Portal";case P:return"Profiler";case W:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case ce:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,y.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ft(n){n._valueTracker||(n._valueTracker=Qe(n))}function xt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ie(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,r){var l=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ln(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Ae(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function wt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function mt(n,r){wt(n,r);var l=Ae(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,l):r.hasOwnProperty("defaultValue")&&bt(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function He(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function bt(n,r,l){(r!=="number"||Gt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ke=Array.isArray;function L(n,r,l,f){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Ae(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ie(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ae(l)}}function ge(n,r){var l=Ae(r.value),f=Ae(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?me(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ne=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function gt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function nt(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,p=Je(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,p):n[l]=p}}var ze=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ut(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ot=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,D=null,K=null;function z(n){if(n=Jo(n)){if(typeof Re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=tl(r),Re(n.stateNode,n.type,r))}}function J(n){D?K?K.push(n):K=[n]:D=n}function Ue(){if(D){var n=D,r=K;if(K=D=null,z(n),r)for(n=0;n<r.length;n++)z(r[n])}}function rt(n,r){return n(r)}function Pt(){}var at=!1;function Wt(n,r,l){if(at)return n(r,l);at=!0;try{return rt(n,r,l)}finally{at=!1,(D!==null||K!==null)&&(Pt(),Ue())}}function Mt(n,r){var l=n.stateNode;if(l===null)return null;var f=tl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Nn=!1;if(u)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Nn=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Nn=!1}function dn(n,r,l,f,p,y,T,U,V){var ae=Array.prototype.slice.call(arguments,3);try{r.apply(l,ae)}catch(xe){this.onError(xe)}}var Tn=!1,un=null,Xn=!1,Fn=null,jn={onError:function(n){Tn=!0,un=n}};function pt(n,r,l,f,p,y,T,U,V){Tn=!1,un=null,dn.apply(jn,arguments)}function vt(n,r,l,f,p,y,T,U,V){if(pt.apply(this,arguments),Tn){if(Tn){var ae=un;Tn=!1,un=null}else throw Error(t(198));Xn||(Xn=!0,Fn=ae)}}function ht(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ve(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function dt(n){if(ht(n)!==n)throw Error(t(188))}function Xt(n){var r=n.alternate;if(!r){if(r=ht(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(f=p.return,f!==null){l=f;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return dt(p),n;if(y===f)return dt(p),r;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=p,f=y;else{for(var T=!1,U=p.child;U;){if(U===l){T=!0,l=p,f=y;break}if(U===f){T=!0,f=p,l=y;break}U=U.sibling}if(!T){for(U=y.child;U;){if(U===l){T=!0,l=y,f=p;break}if(U===f){T=!0,f=y,l=p;break}U=U.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function jt(n){return n=Xt(n),n!==null?Mr(n):null}function Mr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Mr(n);if(r!==null)return r;n=n.sibling}return null}var Fo=e.unstable_scheduleCallback,b=e.unstable_cancelCallback,q=e.unstable_shouldYield,oe=e.unstable_requestPaint,Q=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,We=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,Ye=null;function It(n){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Nt,an=Math.log,tn=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(an(n)/tn|0)|0}var Ze=64,ln=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function On(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,p=n.suspendedLanes,y=n.pingedLanes,T=l&268435455;if(T!==0){var U=T&~p;U!==0?f=Lt(U):(y&=T,y!==0&&(f=Lt(y)))}else T=l&~p,T!==0?f=Lt(T):y!==0&&(f=Lt(y));if(f===0)return 0;if(r!==0&&r!==f&&!(r&p)&&(p=f&-f,y=r&-r,p>=y||p===16&&(y&4194240)!==0))return r;if(f&4&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-_t(r),p=1<<l,f|=n[l],r&=~p;return f}function Er(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,y=n.pendingLanes;0<y;){var T=31-_t(y),U=1<<T,V=p[T];V===-1?(!(U&l)||U&f)&&(p[T]=Er(U,r)):V<=r&&(n.expiredLanes|=U),y&=~U}}function Qi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qt(){var n=Ze;return Ze<<=1,!(Ze&4194240)&&(Ze=64),n}function kn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function wn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-_t(r),n[r]=l}function Dn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-_t(l),y=1<<p;r[p]=0,f[p]=-1,n[p]=-1,l&=~y}}function An(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-_t(l),p=1<<f;p&r|n[f]&r&&(n[f]|=r),l&=~p}}var kt=0;function Gi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var md,Bc,gd,vd,_d,zc=!1,za=[],Tr=null,wr=null,Ar=null,Oo=new Map,ko=new Map,Cr=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(n,r){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Oo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(r.pointerId)}}function Bo(n,r,l,f,p,y){return n===null||n.nativeEvent!==y?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[p]},r!==null&&(r=Jo(r),r!==null&&Bc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function dv(n,r,l,f,p){switch(r){case"focusin":return Tr=Bo(Tr,n,r,l,f,p),!0;case"dragenter":return wr=Bo(wr,n,r,l,f,p),!0;case"mouseover":return Ar=Bo(Ar,n,r,l,f,p),!0;case"pointerover":var y=p.pointerId;return Oo.set(y,Bo(Oo.get(y)||null,n,r,l,f,p)),!0;case"gotpointercapture":return y=p.pointerId,ko.set(y,Bo(ko.get(y)||null,n,r,l,f,p)),!0}return!1}function xd(n){var r=is(n.target);if(r!==null){var l=ht(r);if(l!==null){if(r=l.tag,r===13){if(r=Ve(l),r!==null){n.blockedOn=r,_d(n.priority,function(){gd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Va(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Hc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Ot=f,l.target.dispatchEvent(f),Ot=null}else return r=Jo(l),r!==null&&Bc(r),n.blockedOn=l,!1;r.shift()}return!0}function Sd(n,r,l){Va(n)&&l.delete(r)}function pv(){zc=!1,Tr!==null&&Va(Tr)&&(Tr=null),wr!==null&&Va(wr)&&(wr=null),Ar!==null&&Va(Ar)&&(Ar=null),Oo.forEach(Sd),ko.forEach(Sd)}function zo(n,r){n.blockedOn===r&&(n.blockedOn=null,zc||(zc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pv)))}function Vo(n){function r(p){return zo(p,n)}if(0<za.length){zo(za[0],n);for(var l=1;l<za.length;l++){var f=za[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Tr!==null&&zo(Tr,n),wr!==null&&zo(wr,n),Ar!==null&&zo(Ar,n),Oo.forEach(r),ko.forEach(r),l=0;l<Cr.length;l++)f=Cr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Cr.length&&(l=Cr[0],l.blockedOn===null);)xd(l),l.blockedOn===null&&Cr.shift()}var bs=A.ReactCurrentBatchConfig,Ha=!0;function mv(n,r,l,f){var p=kt,y=bs.transition;bs.transition=null;try{kt=1,Vc(n,r,l,f)}finally{kt=p,bs.transition=y}}function gv(n,r,l,f){var p=kt,y=bs.transition;bs.transition=null;try{kt=4,Vc(n,r,l,f)}finally{kt=p,bs.transition=y}}function Vc(n,r,l,f){if(Ha){var p=Hc(n,r,l,f);if(p===null)su(n,r,f,Ga,l),yd(n,f);else if(dv(p,n,r,l,f))f.stopPropagation();else if(yd(n,f),r&4&&-1<hv.indexOf(n)){for(;p!==null;){var y=Jo(p);if(y!==null&&md(y),y=Hc(n,r,l,f),y===null&&su(n,r,f,Ga,l),y===p)break;p=y}p!==null&&f.stopPropagation()}else su(n,r,f,null,l)}}var Ga=null;function Hc(n,r,l,f){if(Ga=null,n=Y(f),n=is(n),n!==null)if(r=ht(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ve(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ga=n,null}function Md(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case Te:return 1;case Le:return 4;case Fe:case We:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Rr=null,Gc=null,Wa=null;function Ed(){if(Wa)return Wa;var n,r=Gc,l=r.length,f,p="value"in Rr?Rr.value:Rr.textContent,y=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===p[y-f];f++);return Wa=p.slice(n,1<f?1-f:void 0)}function Xa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ja(){return!0}function Td(){return!1}function ui(n){function r(l,f,p,y,T){this._reactName=l,this._targetInst=p,this.type=f,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(y):y[U]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?ja:Td,this.isPropagationStopped=Td,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),r}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=ui(Ps),Ho=ee({},Ps,{view:0,detail:0}),vv=ui(Ho),Xc,jc,Go,Ya=ee({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Go&&(Go&&n.type==="mousemove"?(Xc=n.screenX-Go.screenX,jc=n.screenY-Go.screenY):jc=Xc=0,Go=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),wd=ui(Ya),_v=ee({},Ya,{dataTransfer:0}),yv=ui(_v),xv=ee({},Ho,{relatedTarget:0}),Yc=ui(xv),Sv=ee({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=ui(Sv),Ev=ee({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tv=ui(Ev),wv=ee({},Ps,{data:0}),Ad=ui(wv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Rv[n])?!!r[n]:!1}function qc(){return bv}var Pv=ee({},Ho,{key:function(n){if(n.key){var r=Av[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Xa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(n){return n.type==="keypress"?Xa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Lv=ui(Pv),Dv=ee({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=ui(Dv),Iv=ee({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),Uv=ui(Iv),Nv=ee({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=ui(Nv),Ov=ee({},Ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=ui(Ov),Bv=[9,13,27,32],$c=u&&"CompositionEvent"in window,Wo=null;u&&"documentMode"in document&&(Wo=document.documentMode);var zv=u&&"TextEvent"in window&&!Wo,Rd=u&&(!$c||Wo&&8<Wo&&11>=Wo),bd=" ",Pd=!1;function Ld(n,r){switch(n){case"keyup":return Bv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Vv(n,r){switch(n){case"compositionend":return Dd(r);case"keypress":return r.which!==32?null:(Pd=!0,bd);case"textInput":return n=r.data,n===bd&&Pd?null:n;default:return null}}function Hv(n,r){if(Ls)return n==="compositionend"||!$c&&Ld(n,r)?(n=Ed(),Wa=Gc=Rr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Rd&&r.locale!=="ko"?null:r.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gv[n.type]:r==="textarea"}function Ud(n,r,l,f){J(f),r=Qa(r,"onChange"),0<r.length&&(l=new Wc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Xo=null,jo=null;function Wv(n){Qd(n,0)}function qa(n){var r=Fs(n);if(xt(r))return n}function Xv(n,r){if(n==="change")return r}var Nd=!1;if(u){var Kc;if(u){var Zc="oninput"in document;if(!Zc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),Zc=typeof Fd.oninput=="function"}Kc=Zc}else Kc=!1;Nd=Kc&&(!document.documentMode||9<document.documentMode)}function Od(){Xo&&(Xo.detachEvent("onpropertychange",kd),jo=Xo=null)}function kd(n){if(n.propertyName==="value"&&qa(jo)){var r=[];Ud(r,jo,n,Y(n)),Wt(Wv,r)}}function jv(n,r,l){n==="focusin"?(Od(),Xo=r,jo=l,Xo.attachEvent("onpropertychange",kd)):n==="focusout"&&Od()}function Yv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qa(jo)}function qv(n,r){if(n==="click")return qa(r)}function $v(n,r){if(n==="input"||n==="change")return qa(r)}function Kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var bi=typeof Object.is=="function"?Object.is:Kv;function Yo(n,r){if(bi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var p=l[f];if(!h.call(r,p)||!bi(n[p],r[p]))return!1}return!0}function Bd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zd(n,r){var l=Bd(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Bd(l)}}function Vd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Hd(){for(var n=window,r=Gt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Gt(n.document)}return r}function Qc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Zv(n){var r=Hd(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Vd(l.ownerDocument.documentElement,l)){if(f!==null&&Qc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,y=Math.min(f.start,p);f=f.end===void 0?y:Math.min(f.end,p),!n.extend&&y>f&&(p=f,f=y,y=p),p=zd(l,y);var T=zd(l,f);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),y>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qv=u&&"documentMode"in document&&11>=document.documentMode,Ds=null,Jc=null,qo=null,eu=!1;function Gd(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;eu||Ds==null||Ds!==Gt(f)||(f=Ds,"selectionStart"in f&&Qc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),qo&&Yo(qo,f)||(qo=f,f=Qa(Jc,"onSelect"),0<f.length&&(r=new Wc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Ds)))}function $a(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Is={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},tu={},Wd={};u&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Ka(n){if(tu[n])return tu[n];if(!Is[n])return n;var r=Is[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Wd)return tu[n]=r[l];return n}var Xd=Ka("animationend"),jd=Ka("animationiteration"),Yd=Ka("animationstart"),qd=Ka("transitionend"),$d=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(n,r){$d.set(n,r),a(r,[n])}for(var nu=0;nu<Kd.length;nu++){var iu=Kd[nu],Jv=iu.toLowerCase(),e_=iu[0].toUpperCase()+iu.slice(1);br(Jv,"on"+e_)}br(Xd,"onAnimationEnd"),br(jd,"onAnimationIteration"),br(Yd,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(qd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t_=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Zd(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,vt(f,r,void 0,n),n.currentTarget=null}function Qd(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],p=f.event;f=f.listeners;e:{var y=void 0;if(r)for(var T=f.length-1;0<=T;T--){var U=f[T],V=U.instance,ae=U.currentTarget;if(U=U.listener,V!==y&&p.isPropagationStopped())break e;Zd(p,U,ae),y=V}else for(T=0;T<f.length;T++){if(U=f[T],V=U.instance,ae=U.currentTarget,U=U.listener,V!==y&&p.isPropagationStopped())break e;Zd(p,U,ae),y=V}}}if(Xn)throw n=Fn,Xn=!1,Fn=null,n}function Kt(n,r){var l=r[fu];l===void 0&&(l=r[fu]=new Set);var f=n+"__bubble";l.has(f)||(Jd(r,n,2,!1),l.add(f))}function ru(n,r,l){var f=0;r&&(f|=4),Jd(l,n,f,r)}var Za="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[Za]){n[Za]=!0,i.forEach(function(l){l!=="selectionchange"&&(t_.has(l)||ru(l,!1,n),ru(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Za]||(r[Za]=!0,ru("selectionchange",!1,r))}}function Jd(n,r,l,f){switch(Md(r)){case 1:var p=mv;break;case 4:p=gv;break;default:p=Vc}l=p.bind(null,r,l,n),p=void 0,!Nn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function su(n,r,l,f,p){var y=f;if(!(r&1)&&!(r&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var U=f.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;T=T.return}for(;U!==null;){if(T=is(U),T===null)return;if(V=T.tag,V===5||V===6){f=y=T;continue e}U=U.parentNode}}f=f.return}Wt(function(){var ae=y,xe=Y(l),Me=[];e:{var ye=$d.get(n);if(ye!==void 0){var Oe=Wc,Xe=n;switch(n){case"keypress":if(Xa(l)===0)break e;case"keydown":case"keyup":Oe=Lv;break;case"focusin":Xe="focus",Oe=Yc;break;case"focusout":Xe="blur",Oe=Yc;break;case"beforeblur":case"afterblur":Oe=Yc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Uv;break;case Xd:case jd:case Yd:Oe=Mv;break;case qd:Oe=Fv;break;case"scroll":Oe=vv;break;case"wheel":Oe=kv;break;case"copy":case"cut":case"paste":Oe=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Cd}var qe=(r&4)!==0,fn=!qe&&n==="scroll",Z=qe?ye!==null?ye+"Capture":null:ye;qe=[];for(var X=ae,ne;X!==null;){ne=X;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,Z!==null&&(we=Mt(X,Z),we!=null&&qe.push(Zo(X,we,ne)))),fn)break;X=X.return}0<qe.length&&(ye=new Oe(ye,Xe,null,l,xe),Me.push({event:ye,listeners:qe}))}}if(!(r&7)){e:{if(ye=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ye&&l!==Ot&&(Xe=l.relatedTarget||l.fromElement)&&(is(Xe)||Xe[Ji]))break e;if((Oe||ye)&&(ye=xe.window===xe?xe:(ye=xe.ownerDocument)?ye.defaultView||ye.parentWindow:window,Oe?(Xe=l.relatedTarget||l.toElement,Oe=ae,Xe=Xe?is(Xe):null,Xe!==null&&(fn=ht(Xe),Xe!==fn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Oe=null,Xe=ae),Oe!==Xe)){if(qe=wd,we="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Cd,we="onPointerLeave",Z="onPointerEnter",X="pointer"),fn=Oe==null?ye:Fs(Oe),ne=Xe==null?ye:Fs(Xe),ye=new qe(we,X+"leave",Oe,l,xe),ye.target=fn,ye.relatedTarget=ne,we=null,is(xe)===ae&&(qe=new qe(Z,X+"enter",Xe,l,xe),qe.target=ne,qe.relatedTarget=fn,we=qe),fn=we,Oe&&Xe)t:{for(qe=Oe,Z=Xe,X=0,ne=qe;ne;ne=Us(ne))X++;for(ne=0,we=Z;we;we=Us(we))ne++;for(;0<X-ne;)qe=Us(qe),X--;for(;0<ne-X;)Z=Us(Z),ne--;for(;X--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=Us(qe),Z=Us(Z)}qe=null}else qe=null;Oe!==null&&ep(Me,ye,Oe,qe,!1),Xe!==null&&fn!==null&&ep(Me,fn,Xe,qe,!0)}}e:{if(ye=ae?Fs(ae):window,Oe=ye.nodeName&&ye.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ye.type==="file")var $e=Xv;else if(Id(ye))if(Nd)$e=$v;else{$e=Yv;var et=jv}else(Oe=ye.nodeName)&&Oe.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&($e=qv);if($e&&($e=$e(n,ae))){Ud(Me,$e,l,xe);break e}et&&et(n,ye,ae),n==="focusout"&&(et=ye._wrapperState)&&et.controlled&&ye.type==="number"&&bt(ye,"number",ye.value)}switch(et=ae?Fs(ae):window,n){case"focusin":(Id(et)||et.contentEditable==="true")&&(Ds=et,Jc=ae,qo=null);break;case"focusout":qo=Jc=Ds=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Gd(Me,l,xe);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":Gd(Me,l,xe)}var tt;if($c)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ls?Ld(n,l)&&(ft="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(Rd&&l.locale!=="ko"&&(Ls||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ls&&(tt=Ed()):(Rr=xe,Gc="value"in Rr?Rr.value:Rr.textContent,Ls=!0)),et=Qa(ae,ft),0<et.length&&(ft=new Ad(ft,n,null,l,xe),Me.push({event:ft,listeners:et}),tt?ft.data=tt:(tt=Dd(l),tt!==null&&(ft.data=tt)))),(tt=zv?Vv(n,l):Hv(n,l))&&(ae=Qa(ae,"onBeforeInput"),0<ae.length&&(xe=new Ad("onBeforeInput","beforeinput",null,l,xe),Me.push({event:xe,listeners:ae}),xe.data=tt))}Qd(Me,r)})}function Zo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Qa(n,r){for(var l=r+"Capture",f=[];n!==null;){var p=n,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=Mt(n,l),y!=null&&f.unshift(Zo(n,y,p)),y=Mt(n,r),y!=null&&f.push(Zo(n,y,p))),n=n.return}return f}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,r,l,f,p){for(var y=r._reactName,T=[];l!==null&&l!==f;){var U=l,V=U.alternate,ae=U.stateNode;if(V!==null&&V===f)break;U.tag===5&&ae!==null&&(U=ae,p?(V=Mt(l,y),V!=null&&T.unshift(Zo(l,V,U))):p||(V=Mt(l,y),V!=null&&T.push(Zo(l,V,U)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var n_=/\r\n?/g,i_=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(n_,`
`).replace(i_,"")}function Ja(n,r,l){if(r=tp(r),tp(n)!==r&&l)throw Error(t(425))}function el(){}var ou=null,au=null;function lu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,r_=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(o_)}:cu;function o_(n){setTimeout(function(){throw n})}function uu(n,r){var l=r,f=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(f===0){n.removeChild(p),Vo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=p}while(l);Vo(r)}function Pr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ip(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Ns,Qo="__reactProps$"+Ns,Ji="__reactContainer$"+Ns,fu="__reactEvents$"+Ns,a_="__reactListeners$"+Ns,l_="__reactHandles$"+Ns;function is(n){var r=n[Wi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ji]||l[Wi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=ip(n);n!==null;){if(l=n[Wi])return l;n=ip(n)}return r}n=l,l=n.parentNode}return null}function Jo(n){return n=n[Wi]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function tl(n){return n[Qo]||null}var hu=[],Os=-1;function Lr(n){return{current:n}}function Zt(n){0>Os||(n.current=hu[Os],hu[Os]=null,Os--)}function $t(n,r){Os++,hu[Os]=n.current,n.current=r}var Dr={},Bn=Lr(Dr),ti=Lr(!1),rs=Dr;function ks(n,r){var l=n.type.contextTypes;if(!l)return Dr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=r[y];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function ni(n){return n=n.childContextTypes,n!=null}function nl(){Zt(ti),Zt(Bn)}function rp(n,r,l){if(Bn.current!==Dr)throw Error(t(168));$t(Bn,r),$t(ti,l)}function sp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var p in f)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return ee({},l,f)}function il(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,rs=Bn.current,$t(Bn,n),$t(ti,ti.current),!0}function op(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=sp(n,r,rs),f.__reactInternalMemoizedMergedChildContext=n,Zt(ti),Zt(Bn),$t(Bn,n)):Zt(ti),$t(ti,l)}var er=null,rl=!1,du=!1;function ap(n){er===null?er=[n]:er.push(n)}function c_(n){rl=!0,ap(n)}function Ir(){if(!du&&er!==null){du=!0;var n=0,r=kt;try{var l=er;for(kt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}er=null,rl=!1}catch(p){throw er!==null&&(er=er.slice(n+1)),Fo(Te,Ir),p}finally{kt=r,du=!1}}return null}var Bs=[],zs=0,sl=null,ol=0,vi=[],_i=0,ss=null,tr=1,nr="";function os(n,r){Bs[zs++]=ol,Bs[zs++]=sl,sl=n,ol=r}function lp(n,r,l){vi[_i++]=tr,vi[_i++]=nr,vi[_i++]=ss,ss=n;var f=tr;n=nr;var p=32-_t(f)-1;f&=~(1<<p),l+=1;var y=32-_t(r)+p;if(30<y){var T=p-p%5;y=(f&(1<<T)-1).toString(32),f>>=T,p-=T,tr=1<<32-_t(r)+p|l<<p|f,nr=y+n}else tr=1<<y|l<<p|f,nr=n}function pu(n){n.return!==null&&(os(n,1),lp(n,1,0))}function mu(n){for(;n===sl;)sl=Bs[--zs],Bs[zs]=null,ol=Bs[--zs],Bs[zs]=null;for(;n===ss;)ss=vi[--_i],vi[_i]=null,nr=vi[--_i],vi[_i]=null,tr=vi[--_i],vi[_i]=null}var fi=null,hi=null,nn=!1,Pi=null;function cp(n,r){var l=Mi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function up(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,fi=n,hi=Pr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,fi=n,hi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ss!==null?{id:tr,overflow:nr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Mi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,fi=n,hi=null,!0):!1;default:return!1}}function gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vu(n){if(nn){var r=hi;if(r){var l=r;if(!up(n,r)){if(gu(n))throw Error(t(418));r=Pr(l.nextSibling);var f=fi;r&&up(n,r)?cp(f,l):(n.flags=n.flags&-4097|2,nn=!1,fi=n)}}else{if(gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,nn=!1,fi=n}}}function fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function al(n){if(n!==fi)return!1;if(!nn)return fp(n),nn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!lu(n.type,n.memoizedProps)),r&&(r=hi)){if(gu(n))throw hp(),Error(t(418));for(;r;)cp(n,r),r=Pr(r.nextSibling)}if(fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){hi=Pr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}hi=null}}else hi=fi?Pr(n.stateNode.nextSibling):null;return!0}function hp(){for(var n=hi;n;)n=Pr(n.nextSibling)}function Vs(){hi=fi=null,nn=!1}function _u(n){Pi===null?Pi=[n]:Pi.push(n)}var u_=A.ReactCurrentBatchConfig;function ea(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var p=f,y=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(T){var U=p.refs;T===null?delete U[y]:U[y]=T},r._stringRef=y,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ll(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function dp(n){var r=n._init;return r(n._payload)}function pp(n){function r(Z,X){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[X],Z.flags|=16):ne.push(X)}}function l(Z,X){if(!n)return null;for(;X!==null;)r(Z,X),X=X.sibling;return null}function f(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function p(Z,X){return Z=Vr(Z,X),Z.index=0,Z.sibling=null,Z}function y(Z,X,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<X?(Z.flags|=2,X):ne):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,X,ne,we){return X===null||X.tag!==6?(X=uf(ne,Z.mode,we),X.return=Z,X):(X=p(X,ne),X.return=Z,X)}function V(Z,X,ne,we){var $e=ne.type;return $e===O?xe(Z,X,ne.props.children,we,ne.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&dp($e)===X.type)?(we=p(X,ne.props),we.ref=ea(Z,X,ne),we.return=Z,we):(we=Dl(ne.type,ne.key,ne.props,null,Z.mode,we),we.ref=ea(Z,X,ne),we.return=Z,we)}function ae(Z,X,ne,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=ff(ne,Z.mode,we),X.return=Z,X):(X=p(X,ne.children||[]),X.return=Z,X)}function xe(Z,X,ne,we,$e){return X===null||X.tag!==7?(X=ps(ne,Z.mode,we,$e),X.return=Z,X):(X=p(X,ne),X.return=Z,X)}function Me(Z,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number")return X=uf(""+X,Z.mode,ne),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return ne=Dl(X.type,X.key,X.props,null,Z.mode,ne),ne.ref=ea(Z,null,X),ne.return=Z,ne;case N:return X=ff(X,Z.mode,ne),X.return=Z,X;case ce:var we=X._init;return Me(Z,we(X._payload),ne)}if(ke(X)||ue(X))return X=ps(X,Z.mode,ne,null),X.return=Z,X;ll(Z,X)}return null}function ye(Z,X,ne,we){var $e=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return $e!==null?null:U(Z,X,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case B:return ne.key===$e?V(Z,X,ne,we):null;case N:return ne.key===$e?ae(Z,X,ne,we):null;case ce:return $e=ne._init,ye(Z,X,$e(ne._payload),we)}if(ke(ne)||ue(ne))return $e!==null?null:xe(Z,X,ne,we,null);ll(Z,ne)}return null}function Oe(Z,X,ne,we,$e){if(typeof we=="string"&&we!==""||typeof we=="number")return Z=Z.get(ne)||null,U(X,Z,""+we,$e);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case B:return Z=Z.get(we.key===null?ne:we.key)||null,V(X,Z,we,$e);case N:return Z=Z.get(we.key===null?ne:we.key)||null,ae(X,Z,we,$e);case ce:var et=we._init;return Oe(Z,X,ne,et(we._payload),$e)}if(ke(we)||ue(we))return Z=Z.get(ne)||null,xe(X,Z,we,$e,null);ll(X,we)}return null}function Xe(Z,X,ne,we){for(var $e=null,et=null,tt=X,ft=X=0,bn=null;tt!==null&&ft<ne.length;ft++){tt.index>ft?(bn=tt,tt=null):bn=tt.sibling;var Vt=ye(Z,tt,ne[ft],we);if(Vt===null){tt===null&&(tt=bn);break}n&&tt&&Vt.alternate===null&&r(Z,tt),X=y(Vt,X,ft),et===null?$e=Vt:et.sibling=Vt,et=Vt,tt=bn}if(ft===ne.length)return l(Z,tt),nn&&os(Z,ft),$e;if(tt===null){for(;ft<ne.length;ft++)tt=Me(Z,ne[ft],we),tt!==null&&(X=y(tt,X,ft),et===null?$e=tt:et.sibling=tt,et=tt);return nn&&os(Z,ft),$e}for(tt=f(Z,tt);ft<ne.length;ft++)bn=Oe(tt,Z,ft,ne[ft],we),bn!==null&&(n&&bn.alternate!==null&&tt.delete(bn.key===null?ft:bn.key),X=y(bn,X,ft),et===null?$e=bn:et.sibling=bn,et=bn);return n&&tt.forEach(function(Hr){return r(Z,Hr)}),nn&&os(Z,ft),$e}function qe(Z,X,ne,we){var $e=ue(ne);if(typeof $e!="function")throw Error(t(150));if(ne=$e.call(ne),ne==null)throw Error(t(151));for(var et=$e=null,tt=X,ft=X=0,bn=null,Vt=ne.next();tt!==null&&!Vt.done;ft++,Vt=ne.next()){tt.index>ft?(bn=tt,tt=null):bn=tt.sibling;var Hr=ye(Z,tt,Vt.value,we);if(Hr===null){tt===null&&(tt=bn);break}n&&tt&&Hr.alternate===null&&r(Z,tt),X=y(Hr,X,ft),et===null?$e=Hr:et.sibling=Hr,et=Hr,tt=bn}if(Vt.done)return l(Z,tt),nn&&os(Z,ft),$e;if(tt===null){for(;!Vt.done;ft++,Vt=ne.next())Vt=Me(Z,Vt.value,we),Vt!==null&&(X=y(Vt,X,ft),et===null?$e=Vt:et.sibling=Vt,et=Vt);return nn&&os(Z,ft),$e}for(tt=f(Z,tt);!Vt.done;ft++,Vt=ne.next())Vt=Oe(tt,Z,ft,Vt.value,we),Vt!==null&&(n&&Vt.alternate!==null&&tt.delete(Vt.key===null?ft:Vt.key),X=y(Vt,X,ft),et===null?$e=Vt:et.sibling=Vt,et=Vt);return n&&tt.forEach(function(H_){return r(Z,H_)}),nn&&os(Z,ft),$e}function fn(Z,X,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case B:e:{for(var $e=ne.key,et=X;et!==null;){if(et.key===$e){if($e=ne.type,$e===O){if(et.tag===7){l(Z,et.sibling),X=p(et,ne.props.children),X.return=Z,Z=X;break e}}else if(et.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&dp($e)===et.type){l(Z,et.sibling),X=p(et,ne.props),X.ref=ea(Z,et,ne),X.return=Z,Z=X;break e}l(Z,et);break}else r(Z,et);et=et.sibling}ne.type===O?(X=ps(ne.props.children,Z.mode,we,ne.key),X.return=Z,Z=X):(we=Dl(ne.type,ne.key,ne.props,null,Z.mode,we),we.ref=ea(Z,X,ne),we.return=Z,Z=we)}return T(Z);case N:e:{for(et=ne.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){l(Z,X.sibling),X=p(X,ne.children||[]),X.return=Z,Z=X;break e}else{l(Z,X);break}else r(Z,X);X=X.sibling}X=ff(ne,Z.mode,we),X.return=Z,Z=X}return T(Z);case ce:return et=ne._init,fn(Z,X,et(ne._payload),we)}if(ke(ne))return Xe(Z,X,ne,we);if(ue(ne))return qe(Z,X,ne,we);ll(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,X!==null&&X.tag===6?(l(Z,X.sibling),X=p(X,ne),X.return=Z,Z=X):(l(Z,X),X=uf(ne,Z.mode,we),X.return=Z,Z=X),T(Z)):l(Z,X)}return fn}var Hs=pp(!0),mp=pp(!1),cl=Lr(null),ul=null,Gs=null,yu=null;function xu(){yu=Gs=ul=null}function Su(n){var r=cl.current;Zt(cl),n._currentValue=r}function Mu(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Ws(n,r){ul=n,yu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(ii=!0),n.firstContext=null)}function yi(n){var r=n._currentValue;if(yu!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(ul===null)throw Error(t(308));Gs=n,ul.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var as=null;function Eu(n){as===null?as=[n]:as.push(n)}function gp(n,r,l,f){var p=r.interleaved;return p===null?(l.next=l,Eu(r)):(l.next=p.next,p.next=l),r.interleaved=l,ir(n,f)}function ir(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ur=!1;function Tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Nr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,Bt&2){var p=f.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),f.pending=r,ir(n,l)}return p=f.interleaved,p===null?(r.next=r,Eu(f)):(r.next=p.next,p.next=r),f.interleaved=r,ir(n,l)}function fl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,An(n,l)}}function _p(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=T:y=y.next=T,l=l.next}while(l!==null);y===null?p=y=r:y=y.next=r}else p=y=r;l={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function hl(n,r,l,f){var p=n.updateQueue;Ur=!1;var y=p.firstBaseUpdate,T=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var V=U,ae=V.next;V.next=null,T===null?y=ae:T.next=ae,T=V;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==T&&(U===null?xe.firstBaseUpdate=ae:U.next=ae,xe.lastBaseUpdate=V))}if(y!==null){var Me=p.baseState;T=0,xe=ae=V=null,U=y;do{var ye=U.lane,Oe=U.eventTime;if((f&ye)===ye){xe!==null&&(xe=xe.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,qe=U;switch(ye=r,Oe=l,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Me=Xe.call(Oe,Me,ye);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ye=typeof Xe=="function"?Xe.call(Oe,Me,ye):Xe,ye==null)break e;Me=ee({},Me,ye);break e;case 2:Ur=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ye=p.effects,ye===null?p.effects=[U]:ye.push(U))}else Oe={eventTime:Oe,lane:ye,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ae=xe=Oe,V=Me):xe=xe.next=Oe,T|=ye;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;ye=U,U=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(xe===null&&(V=Me),p.baseState=V,p.firstBaseUpdate=ae,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else y===null&&(p.shared.lanes=0);us|=T,n.lanes=T,n.memoizedState=Me}}function yp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],p=f.callback;if(p!==null){if(f.callback=null,f=l,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var ta={},Xi=Lr(ta),na=Lr(ta),ia=Lr(ta);function ls(n){if(n===ta)throw Error(t(174));return n}function wu(n,r){switch($t(ia,r),$t(na,n),$t(Xi,ta),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:je(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=je(r,n)}Zt(Xi),$t(Xi,r)}function Xs(){Zt(Xi),Zt(na),Zt(ia)}function xp(n){ls(ia.current);var r=ls(Xi.current),l=je(r,n.type);r!==l&&($t(na,n),$t(Xi,l))}function Au(n){na.current===n&&(Zt(Xi),Zt(na))}var rn=Lr(0);function dl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cu=[];function Ru(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var pl=A.ReactCurrentDispatcher,bu=A.ReactCurrentBatchConfig,cs=0,sn=null,vn=null,Cn=null,ml=!1,ra=!1,sa=0,f_=0;function zn(){throw Error(t(321))}function Pu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!bi(n[l],r[l]))return!1;return!0}function Lu(n,r,l,f,p,y){if(cs=y,sn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,pl.current=n===null||n.memoizedState===null?m_:g_,n=l(f,p),ra){y=0;do{if(ra=!1,sa=0,25<=y)throw Error(t(301));y+=1,Cn=vn=null,r.updateQueue=null,pl.current=v_,n=l(f,p)}while(ra)}if(pl.current=_l,r=vn!==null&&vn.next!==null,cs=0,Cn=vn=sn=null,ml=!1,r)throw Error(t(300));return n}function Du(){var n=sa!==0;return sa=0,n}function ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?sn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function xi(){if(vn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var r=Cn===null?sn.memoizedState:Cn.next;if(r!==null)Cn=r,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Cn===null?sn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function oa(n,r){return typeof r=="function"?r(n):r}function Iu(n){var r=xi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=vn,p=f.baseQueue,y=l.pending;if(y!==null){if(p!==null){var T=p.next;p.next=y.next,y.next=T}f.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,f=f.baseState;var U=T=null,V=null,ae=y;do{var xe=ae.lane;if((cs&xe)===xe)V!==null&&(V=V.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:n(f,ae.action);else{var Me={lane:xe,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};V===null?(U=V=Me,T=f):V=V.next=Me,sn.lanes|=xe,us|=xe}ae=ae.next}while(ae!==null&&ae!==y);V===null?T=f:V.next=U,bi(f,r.memoizedState)||(ii=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=V,l.lastRenderedState=f}if(n=l.interleaved,n!==null){p=n;do y=p.lane,sn.lanes|=y,us|=y,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Uu(n){var r=xi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,p=l.pending,y=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do y=n(y,T.action),T=T.next;while(T!==p);bi(y,r.memoizedState)||(ii=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,f]}function Sp(){}function Mp(n,r){var l=sn,f=xi(),p=r(),y=!bi(f.memoizedState,p);if(y&&(f.memoizedState=p,ii=!0),f=f.queue,Nu(wp.bind(null,l,f,n),[n]),f.getSnapshot!==r||y||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,aa(9,Tp.bind(null,l,f,p,r),void 0,null),Rn===null)throw Error(t(349));cs&30||Ep(l,r,p)}return p}function Ep(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=sn.updateQueue,r===null?(r={lastEffect:null,stores:null},sn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Tp(n,r,l,f){r.value=l,r.getSnapshot=f,Ap(r)&&Cp(n)}function wp(n,r,l){return l(function(){Ap(r)&&Cp(n)})}function Ap(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!bi(n,l)}catch{return!0}}function Cp(n){var r=ir(n,1);r!==null&&Ui(r,n,1,-1)}function Rp(n){var r=ji();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},r.queue=n,n=n.dispatch=p_.bind(null,sn,n),[r.memoizedState,n]}function aa(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=sn.updateQueue,r===null?(r={lastEffect:null,stores:null},sn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function bp(){return xi().memoizedState}function gl(n,r,l,f){var p=ji();sn.flags|=n,p.memoizedState=aa(1|r,l,void 0,f===void 0?null:f)}function vl(n,r,l,f){var p=xi();f=f===void 0?null:f;var y=void 0;if(vn!==null){var T=vn.memoizedState;if(y=T.destroy,f!==null&&Pu(f,T.deps)){p.memoizedState=aa(r,l,y,f);return}}sn.flags|=n,p.memoizedState=aa(1|r,l,y,f)}function Pp(n,r){return gl(8390656,8,n,r)}function Nu(n,r){return vl(2048,8,n,r)}function Lp(n,r){return vl(4,2,n,r)}function Dp(n,r){return vl(4,4,n,r)}function Ip(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Up(n,r,l){return l=l!=null?l.concat([n]):null,vl(4,4,Ip.bind(null,r,n),l)}function Fu(){}function Np(n,r){var l=xi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Pu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function Fp(n,r){var l=xi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Pu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Op(n,r,l){return cs&21?(bi(l,r)||(l=qt(),sn.lanes|=l,us|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=l)}function h_(n,r){var l=kt;kt=l!==0&&4>l?l:4,n(!0);var f=bu.transition;bu.transition={};try{n(!1),r()}finally{kt=l,bu.transition=f}}function kp(){return xi().memoizedState}function d_(n,r,l){var f=Br(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Bp(n))zp(r,l);else if(l=gp(n,r,l,f),l!==null){var p=$n();Ui(l,n,f,p),Vp(l,r,f)}}function p_(n,r,l){var f=Br(n),p={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))zp(r,p);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var T=r.lastRenderedState,U=y(T,l);if(p.hasEagerState=!0,p.eagerState=U,bi(U,T)){var V=r.interleaved;V===null?(p.next=p,Eu(r)):(p.next=V.next,V.next=p),r.interleaved=p;return}}catch{}finally{}l=gp(n,r,p,f),l!==null&&(p=$n(),Ui(l,n,f,p),Vp(l,r,f))}}function Bp(n){var r=n.alternate;return n===sn||r!==null&&r===sn}function zp(n,r){ra=ml=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Vp(n,r,l){if(l&4194240){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,An(n,l)}}var _l={readContext:yi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},m_={readContext:yi,useCallback:function(n,r){return ji().memoizedState=[n,r===void 0?null:r],n},useContext:yi,useEffect:Pp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,gl(4194308,4,Ip.bind(null,r,n),l)},useLayoutEffect:function(n,r){return gl(4194308,4,n,r)},useInsertionEffect:function(n,r){return gl(4,2,n,r)},useMemo:function(n,r){var l=ji();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=ji();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=d_.bind(null,sn,n),[f.memoizedState,n]},useRef:function(n){var r=ji();return n={current:n},r.memoizedState=n},useState:Rp,useDebugValue:Fu,useDeferredValue:function(n){return ji().memoizedState=n},useTransition:function(){var n=Rp(!1),r=n[0];return n=h_.bind(null,n[1]),ji().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=sn,p=ji();if(nn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Rn===null)throw Error(t(349));cs&30||Ep(f,r,l)}p.memoizedState=l;var y={value:l,getSnapshot:r};return p.queue=y,Pp(wp.bind(null,f,y,n),[n]),f.flags|=2048,aa(9,Tp.bind(null,f,y,l,r),void 0,null),l},useId:function(){var n=ji(),r=Rn.identifierPrefix;if(nn){var l=nr,f=tr;l=(f&~(1<<32-_t(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=sa++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=f_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},g_={readContext:yi,useCallback:Np,useContext:yi,useEffect:Nu,useImperativeHandle:Up,useInsertionEffect:Lp,useLayoutEffect:Dp,useMemo:Fp,useReducer:Iu,useRef:bp,useState:function(){return Iu(oa)},useDebugValue:Fu,useDeferredValue:function(n){var r=xi();return Op(r,vn.memoizedState,n)},useTransition:function(){var n=Iu(oa)[0],r=xi().memoizedState;return[n,r]},useMutableSource:Sp,useSyncExternalStore:Mp,useId:kp,unstable_isNewReconciler:!1},v_={readContext:yi,useCallback:Np,useContext:yi,useEffect:Nu,useImperativeHandle:Up,useInsertionEffect:Lp,useLayoutEffect:Dp,useMemo:Fp,useReducer:Uu,useRef:bp,useState:function(){return Uu(oa)},useDebugValue:Fu,useDeferredValue:function(n){var r=xi();return vn===null?r.memoizedState=n:Op(r,vn.memoizedState,n)},useTransition:function(){var n=Uu(oa)[0],r=xi().memoizedState;return[n,r]},useMutableSource:Sp,useSyncExternalStore:Mp,useId:kp,unstable_isNewReconciler:!1};function Li(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ou(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:ee({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var yl={isMounted:function(n){return(n=n._reactInternals)?ht(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=$n(),p=Br(n),y=rr(f,p);y.payload=r,l!=null&&(y.callback=l),r=Nr(n,y,p),r!==null&&(Ui(r,n,p,f),fl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=$n(),p=Br(n),y=rr(f,p);y.tag=1,y.payload=r,l!=null&&(y.callback=l),r=Nr(n,y,p),r!==null&&(Ui(r,n,p,f),fl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=$n(),f=Br(n),p=rr(l,f);p.tag=2,r!=null&&(p.callback=r),r=Nr(n,p,f),r!==null&&(Ui(r,n,f,l),fl(r,n,f))}};function Hp(n,r,l,f,p,y,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,y,T):r.prototype&&r.prototype.isPureReactComponent?!Yo(l,f)||!Yo(p,y):!0}function Gp(n,r,l){var f=!1,p=Dr,y=r.contextType;return typeof y=="object"&&y!==null?y=yi(y):(p=ni(r)?rs:Bn.current,f=r.contextTypes,y=(f=f!=null)?ks(n,p):Dr),r=new r(l,y),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=y),r}function Wp(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&yl.enqueueReplaceState(r,r.state,null)}function ku(n,r,l,f){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Tu(n);var y=r.contextType;typeof y=="object"&&y!==null?p.context=yi(y):(y=ni(r)?rs:Bn.current,p.context=ks(n,y)),p.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Ou(n,r,y,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&yl.enqueueReplaceState(p,p.state,null),hl(n,l,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,r){try{var l="",f=r;do l+=pe(f),f=f.return;while(f);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:r,stack:p,digest:null}}function Bu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var __=typeof WeakMap=="function"?WeakMap:Map;function Xp(n,r,l){l=rr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Al||(Al=!0,tf=f),zu(n,r)},l}function jp(n,r,l){l=rr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=r.value;l.payload=function(){return f(p)},l.callback=function(){zu(n,r)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){zu(n,r),typeof f!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Yp(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new __;var p=new Set;f.set(r,p)}else p=f.get(r),p===void 0&&(p=new Set,f.set(r,p));p.has(l)||(p.add(l),n=D_.bind(null,n,r,l),r.then(n,n))}function qp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function $p(n,r,l,f,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=rr(-1,1),r.tag=2,Nr(l,r,1))),l.lanes|=1),n)}var y_=A.ReactCurrentOwner,ii=!1;function qn(n,r,l,f){r.child=n===null?mp(r,null,l,f):Hs(r,n.child,l,f)}function Kp(n,r,l,f,p){l=l.render;var y=r.ref;return Ws(r,p),f=Lu(n,r,l,f,y,p),l=Du(),n!==null&&!ii?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,sr(n,r,p)):(nn&&l&&pu(r),r.flags|=1,qn(n,r,f,p),r.child)}function Zp(n,r,l,f,p){if(n===null){var y=l.type;return typeof y=="function"&&!cf(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=y,Qp(n,r,y,f,p)):(n=Dl(l.type,null,f,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(y=n.child,!(n.lanes&p)){var T=y.memoizedProps;if(l=l.compare,l=l!==null?l:Yo,l(T,f)&&n.ref===r.ref)return sr(n,r,p)}return r.flags|=1,n=Vr(y,f),n.ref=r.ref,n.return=r,r.child=n}function Qp(n,r,l,f,p){if(n!==null){var y=n.memoizedProps;if(Yo(y,f)&&n.ref===r.ref)if(ii=!1,r.pendingProps=f=y,(n.lanes&p)!==0)n.flags&131072&&(ii=!0);else return r.lanes=n.lanes,sr(n,r,p)}return Vu(n,r,l,f,p)}function Jp(n,r,l){var f=r.pendingProps,p=f.children,y=n!==null?n.memoizedState:null;if(f.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(qs,di),di|=l;else{if(!(l&1073741824))return n=y!==null?y.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$t(qs,di),di|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,$t(qs,di),di|=f}else y!==null?(f=y.baseLanes|l,r.memoizedState=null):f=l,$t(qs,di),di|=f;return qn(n,r,p,l),r.child}function em(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Vu(n,r,l,f,p){var y=ni(l)?rs:Bn.current;return y=ks(r,y),Ws(r,p),l=Lu(n,r,l,f,y,p),f=Du(),n!==null&&!ii?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,sr(n,r,p)):(nn&&f&&pu(r),r.flags|=1,qn(n,r,l,p),r.child)}function tm(n,r,l,f,p){if(ni(l)){var y=!0;il(r)}else y=!1;if(Ws(r,p),r.stateNode===null)Sl(n,r),Gp(r,l,f),ku(r,l,f,p),f=!0;else if(n===null){var T=r.stateNode,U=r.memoizedProps;T.props=U;var V=T.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=yi(ae):(ae=ni(l)?rs:Bn.current,ae=ks(r,ae));var xe=l.getDerivedStateFromProps,Me=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==f||V!==ae)&&Wp(r,T,f,ae),Ur=!1;var ye=r.memoizedState;T.state=ye,hl(r,f,T,p),V=r.memoizedState,U!==f||ye!==V||ti.current||Ur?(typeof xe=="function"&&(Ou(r,l,xe,f),V=r.memoizedState),(U=Ur||Hp(r,l,U,f,ye,V,ae))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=V),T.props=f,T.state=V,T.context=ae,f=U):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,vp(n,r),U=r.memoizedProps,ae=r.type===r.elementType?U:Li(r.type,U),T.props=ae,Me=r.pendingProps,ye=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=yi(V):(V=ni(l)?rs:Bn.current,V=ks(r,V));var Oe=l.getDerivedStateFromProps;(xe=typeof Oe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Me||ye!==V)&&Wp(r,T,f,V),Ur=!1,ye=r.memoizedState,T.state=ye,hl(r,f,T,p);var Xe=r.memoizedState;U!==Me||ye!==Xe||ti.current||Ur?(typeof Oe=="function"&&(Ou(r,l,Oe,f),Xe=r.memoizedState),(ae=Ur||Hp(r,l,ae,f,ye,Xe,V)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Xe,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Xe,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Xe),T.props=f,T.state=Xe,T.context=V,f=ae):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),f=!1)}return Hu(n,r,l,f,y,p)}function Hu(n,r,l,f,p,y){em(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return p&&op(r,l,!1),sr(n,r,y);f=r.stateNode,y_.current=r;var U=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Hs(r,n.child,null,y),r.child=Hs(r,null,U,y)):qn(n,r,U,y),r.memoizedState=f.state,p&&op(r,l,!0),r.child}function nm(n){var r=n.stateNode;r.pendingContext?rp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&rp(n,r.context,!1),wu(n,r.containerInfo)}function im(n,r,l,f,p){return Vs(),_u(p),r.flags|=256,qn(n,r,l,f),r.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function rm(n,r,l){var f=r.pendingProps,p=rn.current,y=!1,T=(r.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(p&2)!==0),U?(y=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),$t(rn,p&1),n===null)return vu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(T=f.children,n=f.fallback,y?(f=r.mode,y=r.child,T={mode:"hidden",children:T},!(f&1)&&y!==null?(y.childLanes=0,y.pendingProps=T):y=Il(T,f,0,null),n=ps(n,f,l,null),y.return=r,n.return=r,y.sibling=n,r.child=y,r.child.memoizedState=Wu(l),r.memoizedState=Gu,n):Xu(r,T));if(p=n.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return x_(n,r,T,f,U,p,l);if(y){y=f.fallback,T=r.mode,p=n.child,U=p.sibling;var V={mode:"hidden",children:f.children};return!(T&1)&&r.child!==p?(f=r.child,f.childLanes=0,f.pendingProps=V,r.deletions=null):(f=Vr(p,V),f.subtreeFlags=p.subtreeFlags&14680064),U!==null?y=Vr(U,y):(y=ps(y,T,l,null),y.flags|=2),y.return=r,f.return=r,f.sibling=y,r.child=f,f=y,y=r.child,T=n.child.memoizedState,T=T===null?Wu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=n.childLanes&~l,r.memoizedState=Gu,f}return y=n.child,n=y.sibling,f=Vr(y,{mode:"visible",children:f.children}),!(r.mode&1)&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Xu(n,r){return r=Il({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function xl(n,r,l,f){return f!==null&&_u(f),Hs(r,n.child,null,l),n=Xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function x_(n,r,l,f,p,y,T){if(l)return r.flags&256?(r.flags&=-257,f=Bu(Error(t(422))),xl(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(y=f.fallback,p=r.mode,f=Il({mode:"visible",children:f.children},p,0,null),y=ps(y,p,T,null),y.flags|=2,f.return=r,y.return=r,f.sibling=y,r.child=f,r.mode&1&&Hs(r,n.child,null,T),r.child.memoizedState=Wu(T),r.memoizedState=Gu,y);if(!(r.mode&1))return xl(n,r,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var U=f.dgst;return f=U,y=Error(t(419)),f=Bu(y,f,void 0),xl(n,r,T,f)}if(U=(T&n.childLanes)!==0,ii||U){if(f=Rn,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(f.suspendedLanes|T)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,ir(n,p),Ui(f,n,p,-1))}return lf(),f=Bu(Error(t(421))),xl(n,r,T,f)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=I_.bind(null,n),p._reactRetry=r,null):(n=y.treeContext,hi=Pr(p.nextSibling),fi=r,nn=!0,Pi=null,n!==null&&(vi[_i++]=tr,vi[_i++]=nr,vi[_i++]=ss,tr=n.id,nr=n.overflow,ss=r),r=Xu(r,f.children),r.flags|=4096,r)}function sm(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Mu(n.return,r,l)}function ju(n,r,l,f,p){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:p}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=p)}function om(n,r,l){var f=r.pendingProps,p=f.revealOrder,y=f.tail;if(qn(n,r,f.children,l),f=rn.current,f&2)f=f&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,l,r);else if(n.tag===19)sm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if($t(rn,f),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&dl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),ju(r,!1,p,l,y);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&dl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}ju(r,!0,l,null,y);break;case"together":ju(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Sl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function sr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),us|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Vr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Vr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function S_(n,r,l){switch(r.tag){case 3:nm(r),Vs();break;case 5:xp(r);break;case 1:ni(r.type)&&il(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,p=r.memoizedProps.value;$t(cl,f._currentValue),f._currentValue=p;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?($t(rn,rn.current&1),r.flags|=128,null):l&r.child.childLanes?rm(n,r,l):($t(rn,rn.current&1),n=sr(n,r,l),n!==null?n.sibling:null);$t(rn,rn.current&1);break;case 19:if(f=(l&r.childLanes)!==0,n.flags&128){if(f)return om(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),$t(rn,rn.current),f)break;return null;case 22:case 23:return r.lanes=0,Jp(n,r,l)}return sr(n,r,l)}var am,Yu,lm,cm;am=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Yu=function(){},lm=function(n,r,l,f){var p=n.memoizedProps;if(p!==f){n=r.stateNode,ls(Xi.current);var y=null;switch(l){case"input":p=G(n,p),f=G(n,f),y=[];break;case"select":p=ee({},p,{value:void 0}),f=ee({},f,{value:void 0}),y=[];break;case"textarea":p=w(n,p),f=w(n,f),y=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=el)}St(l,f);var T;l=null;for(ae in p)if(!f.hasOwnProperty(ae)&&p.hasOwnProperty(ae)&&p[ae]!=null)if(ae==="style"){var U=p[ae];for(T in U)U.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(s.hasOwnProperty(ae)?y||(y=[]):(y=y||[]).push(ae,null));for(ae in f){var V=f[ae];if(U=p!=null?p[ae]:void 0,f.hasOwnProperty(ae)&&V!==U&&(V!=null||U!=null))if(ae==="style")if(U){for(T in U)!U.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&U[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(y||(y=[]),y.push(ae,l)),l=V;else ae==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(y=y||[]).push(ae,V)):ae==="children"?typeof V!="string"&&typeof V!="number"||(y=y||[]).push(ae,""+V):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(s.hasOwnProperty(ae)?(V!=null&&ae==="onScroll"&&Kt("scroll",n),y||U===V||(y=[])):(y=y||[]).push(ae,V))}l&&(y=y||[]).push("style",l);var ae=y;(r.updateQueue=ae)&&(r.flags|=4)}},cm=function(n,r,l,f){l!==f&&(r.flags|=4)};function la(n,r){if(!nn)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Vn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function M_(n,r,l){var f=r.pendingProps;switch(mu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(r),null;case 1:return ni(r.type)&&nl(),Vn(r),null;case 3:return f=r.stateNode,Xs(),Zt(ti),Zt(Bn),Ru(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(al(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Pi!==null&&(sf(Pi),Pi=null))),Yu(n,r),Vn(r),null;case 5:Au(r);var p=ls(ia.current);if(l=r.type,n!==null&&r.stateNode!=null)lm(n,r,l,f,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Vn(r),null}if(n=ls(Xi.current),al(r)){f=r.stateNode,l=r.type;var y=r.memoizedProps;switch(f[Wi]=r,f[Qo]=y,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",f),Kt("close",f);break;case"iframe":case"object":case"embed":Kt("load",f);break;case"video":case"audio":for(p=0;p<$o.length;p++)Kt($o[p],f);break;case"source":Kt("error",f);break;case"img":case"image":case"link":Kt("error",f),Kt("load",f);break;case"details":Kt("toggle",f);break;case"input":Ln(f,y),Kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Kt("invalid",f);break;case"textarea":ie(f,y),Kt("invalid",f)}St(l,y),p=null;for(var T in y)if(y.hasOwnProperty(T)){var U=y[T];T==="children"?typeof U=="string"?f.textContent!==U&&(y.suppressHydrationWarning!==!0&&Ja(f.textContent,U,n),p=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(y.suppressHydrationWarning!==!0&&Ja(f.textContent,U,n),p=["children",""+U]):s.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Kt("scroll",f)}switch(l){case"input":Ft(f),He(f,y,!0);break;case"textarea":Ft(f),_e(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=el)}f=p,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[Wi]=r,n[Qo]=f,am(n,r,!1,!1),r.stateNode=n;e:{switch(T=ut(l,f),l){case"dialog":Kt("cancel",n),Kt("close",n),p=f;break;case"iframe":case"object":case"embed":Kt("load",n),p=f;break;case"video":case"audio":for(p=0;p<$o.length;p++)Kt($o[p],n);p=f;break;case"source":Kt("error",n),p=f;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),p=f;break;case"details":Kt("toggle",n),p=f;break;case"input":Ln(n,f),p=G(n,f),Kt("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=ee({},f,{value:void 0}),Kt("invalid",n);break;case"textarea":ie(n,f),p=w(n,f),Kt("invalid",n);break;default:p=f}St(l,p),U=p;for(y in U)if(U.hasOwnProperty(y)){var V=U[y];y==="style"?nt(n,V):y==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ne(n,V)):y==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&gt(n,V):typeof V=="number"&&gt(n,""+V):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?V!=null&&y==="onScroll"&&Kt("scroll",n):V!=null&&C(n,y,V,T))}switch(l){case"input":Ft(n),He(n,f,!1);break;case"textarea":Ft(n),_e(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Ae(f.value));break;case"select":n.multiple=!!f.multiple,y=f.value,y!=null?L(n,!!f.multiple,y,!1):f.defaultValue!=null&&L(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=el)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vn(r),null;case 6:if(n&&r.stateNode!=null)cm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=ls(ia.current),ls(Xi.current),al(r)){if(f=r.stateNode,l=r.memoizedProps,f[Wi]=r,(y=f.nodeValue!==l)&&(n=fi,n!==null))switch(n.tag){case 3:Ja(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ja(f.nodeValue,l,(n.mode&1)!==0)}y&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Wi]=r,r.stateNode=f}return Vn(r),null;case 13:if(Zt(rn),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nn&&hi!==null&&r.mode&1&&!(r.flags&128))hp(),Vs(),r.flags|=98560,y=!1;else if(y=al(r),f!==null&&f.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Wi]=r}else Vs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vn(r),y=!1}else Pi!==null&&(sf(Pi),Pi=null),y=!0;if(!y)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,r.mode&1&&(n===null||rn.current&1?_n===0&&(_n=3):lf())),r.updateQueue!==null&&(r.flags|=4),Vn(r),null);case 4:return Xs(),Yu(n,r),n===null&&Ko(r.stateNode.containerInfo),Vn(r),null;case 10:return Su(r.type._context),Vn(r),null;case 17:return ni(r.type)&&nl(),Vn(r),null;case 19:if(Zt(rn),y=r.memoizedState,y===null)return Vn(r),null;if(f=(r.flags&128)!==0,T=y.rendering,T===null)if(f)la(y,!1);else{if(_n!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(T=dl(n),T!==null){for(r.flags|=128,la(y,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)y=l,n=f,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,n=T.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return $t(rn,rn.current&1|2),r.child}n=n.sibling}y.tail!==null&&Q()>$s&&(r.flags|=128,f=!0,la(y,!1),r.lanes=4194304)}else{if(!f)if(n=dl(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),la(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!nn)return Vn(r),null}else 2*Q()-y.renderingStartTime>$s&&l!==1073741824&&(r.flags|=128,f=!0,la(y,!1),r.lanes=4194304);y.isBackwards?(T.sibling=r.child,r.child=T):(l=y.last,l!==null?l.sibling=T:r.child=T,y.last=T)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=Q(),r.sibling=null,l=rn.current,$t(rn,f?l&1|2:l&1),r):(Vn(r),null);case 22:case 23:return af(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&r.mode&1?di&1073741824&&(Vn(r),r.subtreeFlags&6&&(r.flags|=8192)):Vn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function E_(n,r){switch(mu(r),r.tag){case 1:return ni(r.type)&&nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xs(),Zt(ti),Zt(Bn),Ru(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Au(r),null;case 13:if(Zt(rn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Vs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(rn),null;case 4:return Xs(),null;case 10:return Su(r.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Ml=!1,Hn=!1,T_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ys(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){cn(n,r,f)}else l.current=null}function qu(n,r,l){try{l()}catch(f){cn(n,r,f)}}var um=!1;function w_(n,r){if(ou=Ha,n=Hd(),Qc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var p=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var T=0,U=-1,V=-1,ae=0,xe=0,Me=n,ye=null;t:for(;;){for(var Oe;Me!==l||p!==0&&Me.nodeType!==3||(U=T+p),Me!==y||f!==0&&Me.nodeType!==3||(V=T+f),Me.nodeType===3&&(T+=Me.nodeValue.length),(Oe=Me.firstChild)!==null;)ye=Me,Me=Oe;for(;;){if(Me===n)break t;if(ye===l&&++ae===p&&(U=T),ye===y&&++xe===f&&(V=T),(Oe=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Oe}l=U===-1||V===-1?null:{start:U,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(au={focusedElem:n,selectionRange:l},Ha=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var Xe=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,fn=Xe.memoizedState,Z=r.stateNode,X=Z.getSnapshotBeforeUpdate(r.elementType===r.type?qe:Li(r.type,qe),fn);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){cn(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return Xe=um,um=!1,Xe}function ca(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var y=p.destroy;p.destroy=void 0,y!==void 0&&qu(r,l,y)}p=p.next}while(p!==f)}}function El(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function $u(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function fm(n){var r=n.alternate;r!==null&&(n.alternate=null,fm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wi],delete r[Qo],delete r[fu],delete r[a_],delete r[l_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hm(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ku(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=el));else if(f!==4&&(n=n.child,n!==null))for(Ku(n,r,l),n=n.sibling;n!==null;)Ku(n,r,l),n=n.sibling}function Zu(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Zu(n,r,l),n=n.sibling;n!==null;)Zu(n,r,l),n=n.sibling}var In=null,Di=!1;function Fr(n,r,l){for(l=l.child;l!==null;)pm(n,r,l),l=l.sibling}function pm(n,r,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ot,l)}catch{}switch(l.tag){case 5:Hn||Ys(l,r);case 6:var f=In,p=Di;In=null,Fr(n,r,l),In=f,Di=p,In!==null&&(Di?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Di?(n=In,l=l.stateNode,n.nodeType===8?uu(n.parentNode,l):n.nodeType===1&&uu(n,l),Vo(n)):uu(In,l.stateNode));break;case 4:f=In,p=Di,In=l.stateNode.containerInfo,Di=!0,Fr(n,r,l),In=f,Di=p;break;case 0:case 11:case 14:case 15:if(!Hn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var y=p,T=y.destroy;y=y.tag,T!==void 0&&(y&2||y&4)&&qu(l,r,T),p=p.next}while(p!==f)}Fr(n,r,l);break;case 1:if(!Hn&&(Ys(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){cn(l,r,U)}Fr(n,r,l);break;case 21:Fr(n,r,l);break;case 22:l.mode&1?(Hn=(f=Hn)||l.memoizedState!==null,Fr(n,r,l),Hn=f):Fr(n,r,l);break;default:Fr(n,r,l)}}function mm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new T_),r.forEach(function(f){var p=U_.bind(null,n,f);l.has(f)||(l.add(f),f.then(p,p))})}}function Ii(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var p=l[f];try{var y=n,T=r,U=T;e:for(;U!==null;){switch(U.tag){case 5:In=U.stateNode,Di=!1;break e;case 3:In=U.stateNode.containerInfo,Di=!0;break e;case 4:In=U.stateNode.containerInfo,Di=!0;break e}U=U.return}if(In===null)throw Error(t(160));pm(y,T,p),In=null,Di=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(ae){cn(p,r,ae)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)gm(r,n),r=r.sibling}function gm(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ii(r,n),Yi(n),f&4){try{ca(3,n,n.return),El(3,n)}catch(qe){cn(n,n.return,qe)}try{ca(5,n,n.return)}catch(qe){cn(n,n.return,qe)}}break;case 1:Ii(r,n),Yi(n),f&512&&l!==null&&Ys(l,l.return);break;case 5:if(Ii(r,n),Yi(n),f&512&&l!==null&&Ys(l,l.return),n.flags&32){var p=n.stateNode;try{gt(p,"")}catch(qe){cn(n,n.return,qe)}}if(f&4&&(p=n.stateNode,p!=null)){var y=n.memoizedProps,T=l!==null?l.memoizedProps:y,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&y.type==="radio"&&y.name!=null&&wt(p,y),ut(U,T);var ae=ut(U,y);for(T=0;T<V.length;T+=2){var xe=V[T],Me=V[T+1];xe==="style"?nt(p,Me):xe==="dangerouslySetInnerHTML"?Ne(p,Me):xe==="children"?gt(p,Me):C(p,xe,Me,ae)}switch(U){case"input":mt(p,y);break;case"textarea":ge(p,y);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var Oe=y.value;Oe!=null?L(p,!!y.multiple,Oe,!1):ye!==!!y.multiple&&(y.defaultValue!=null?L(p,!!y.multiple,y.defaultValue,!0):L(p,!!y.multiple,y.multiple?[]:"",!1))}p[Qo]=y}catch(qe){cn(n,n.return,qe)}}break;case 6:if(Ii(r,n),Yi(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,y=n.memoizedProps;try{p.nodeValue=y}catch(qe){cn(n,n.return,qe)}}break;case 3:if(Ii(r,n),Yi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Vo(r.containerInfo)}catch(qe){cn(n,n.return,qe)}break;case 4:Ii(r,n),Yi(n);break;case 13:Ii(r,n),Yi(n),p=n.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(ef=Q())),f&4&&mm(n);break;case 22:if(xe=l!==null&&l.memoizedState!==null,n.mode&1?(Hn=(ae=Hn)||xe,Ii(r,n),Hn=ae):Ii(r,n),Yi(n),f&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!xe&&n.mode&1)for(Ge=n,xe=n.child;xe!==null;){for(Me=Ge=xe;Ge!==null;){switch(ye=Ge,Oe=ye.child,ye.tag){case 0:case 11:case 14:case 15:ca(4,ye,ye.return);break;case 1:Ys(ye,ye.return);var Xe=ye.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=ye,l=ye.return;try{r=f,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch(qe){cn(f,l,qe)}}break;case 5:Ys(ye,ye.return);break;case 22:if(ye.memoizedState!==null){ym(Me);continue}}Oe!==null?(Oe.return=ye,Ge=Oe):ym(Me)}xe=xe.sibling}e:for(xe=null,Me=n;;){if(Me.tag===5){if(xe===null){xe=Me;try{p=Me.stateNode,ae?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(U=Me.stateNode,V=Me.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=Je("display",T))}catch(qe){cn(n,n.return,qe)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ae?"":Me.memoizedProps}catch(qe){cn(n,n.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ii(r,n),Yi(n),f&4&&mm(n);break;case 21:break;default:Ii(r,n),Yi(n)}}function Yi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(hm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(gt(p,""),f.flags&=-33);var y=dm(n);Zu(n,y,p);break;case 3:case 4:var T=f.stateNode.containerInfo,U=dm(n);Ku(n,U,T);break;default:throw Error(t(161))}}catch(V){cn(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function A_(n,r,l){Ge=n,vm(n)}function vm(n,r,l){for(var f=(n.mode&1)!==0;Ge!==null;){var p=Ge,y=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||Ml;if(!T){var U=p.alternate,V=U!==null&&U.memoizedState!==null||Hn;U=Ml;var ae=Hn;if(Ml=T,(Hn=V)&&!ae)for(Ge=p;Ge!==null;)T=Ge,V=T.child,T.tag===22&&T.memoizedState!==null?xm(p):V!==null?(V.return=T,Ge=V):xm(p);for(;y!==null;)Ge=y,vm(y),y=y.sibling;Ge=p,Ml=U,Hn=ae}_m(n)}else p.subtreeFlags&8772&&y!==null?(y.return=p,Ge=y):_m(n)}}function _m(n){for(;Ge!==null;){var r=Ge;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Hn||El(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Hn)if(l===null)f.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Li(r.type,l.memoizedProps);f.componentDidUpdate(p,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&yp(r,y,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}yp(r,T,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ae=r.alternate;if(ae!==null){var xe=ae.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&Vo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||r.flags&512&&$u(r)}catch(ye){cn(r,r.return,ye)}}if(r===n){Ge=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function ym(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function xm(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{El(4,r)}catch(V){cn(r,l,V)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var p=r.return;try{f.componentDidMount()}catch(V){cn(r,p,V)}}var y=r.return;try{$u(r)}catch(V){cn(r,y,V)}break;case 5:var T=r.return;try{$u(r)}catch(V){cn(r,T,V)}}}catch(V){cn(r,r.return,V)}if(r===n){Ge=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ge=U;break}Ge=r.return}}var C_=Math.ceil,Tl=A.ReactCurrentDispatcher,Qu=A.ReactCurrentOwner,Si=A.ReactCurrentBatchConfig,Bt=0,Rn=null,pn=null,Un=0,di=0,qs=Lr(0),_n=0,ua=null,us=0,wl=0,Ju=0,fa=null,ri=null,ef=0,$s=1/0,or=null,Al=!1,tf=null,Or=null,Cl=!1,kr=null,Rl=0,ha=0,nf=null,bl=-1,Pl=0;function $n(){return Bt&6?Q():bl!==-1?bl:bl=Q()}function Br(n){return n.mode&1?Bt&2&&Un!==0?Un&-Un:u_.transition!==null?(Pl===0&&(Pl=qt()),Pl):(n=kt,n!==0||(n=window.event,n=n===void 0?16:Md(n.type)),n):1}function Ui(n,r,l,f){if(50<ha)throw ha=0,nf=null,Error(t(185));wn(n,l,f),(!(Bt&2)||n!==Rn)&&(n===Rn&&(!(Bt&2)&&(wl|=l),_n===4&&zr(n,Un)),si(n,f),l===1&&Bt===0&&!(r.mode&1)&&($s=Q()+500,rl&&Ir()))}function si(n,r){var l=n.callbackNode;Yn(n,r);var f=On(n,n===Rn?Un:0);if(f===0)l!==null&&b(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&b(l),r===1)n.tag===0?c_(Mm.bind(null,n)):ap(Mm.bind(null,n)),s_(function(){!(Bt&6)&&Ir()}),l=null;else{switch(Gi(f)){case 1:l=Te;break;case 4:l=Le;break;case 16:l=Fe;break;case 536870912:l=lt;break;default:l=Fe}l=Pm(l,Sm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Sm(n,r){if(bl=-1,Pl=0,Bt&6)throw Error(t(327));var l=n.callbackNode;if(Ks()&&n.callbackNode!==l)return null;var f=On(n,n===Rn?Un:0);if(f===0)return null;if(f&30||f&n.expiredLanes||r)r=Ll(n,f);else{r=f;var p=Bt;Bt|=2;var y=Tm();(Rn!==n||Un!==r)&&(or=null,$s=Q()+500,hs(n,r));do try{P_();break}catch(U){Em(n,U)}while(!0);xu(),Tl.current=y,Bt=p,pn!==null?r=0:(Rn=null,Un=0,r=_n)}if(r!==0){if(r===2&&(p=Qi(n),p!==0&&(f=p,r=rf(n,p))),r===1)throw l=ua,hs(n,0),zr(n,f),si(n,Q()),l;if(r===6)zr(n,f);else{if(p=n.current.alternate,!(f&30)&&!R_(p)&&(r=Ll(n,f),r===2&&(y=Qi(n),y!==0&&(f=y,r=rf(n,y))),r===1))throw l=ua,hs(n,0),zr(n,f),si(n,Q()),l;switch(n.finishedWork=p,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:ds(n,ri,or);break;case 3:if(zr(n,f),(f&130023424)===f&&(r=ef+500-Q(),10<r)){if(On(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){$n(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=cu(ds.bind(null,n,ri,or),r);break}ds(n,ri,or);break;case 4:if(zr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,p=-1;0<f;){var T=31-_t(f);y=1<<T,T=r[T],T>p&&(p=T),f&=~y}if(f=p,f=Q()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*C_(f/1960))-f,10<f){n.timeoutHandle=cu(ds.bind(null,n,ri,or),f);break}ds(n,ri,or);break;case 5:ds(n,ri,or);break;default:throw Error(t(329))}}}return si(n,Q()),n.callbackNode===l?Sm.bind(null,n):null}function rf(n,r){var l=fa;return n.current.memoizedState.isDehydrated&&(hs(n,r).flags|=256),n=Ll(n,r),n!==2&&(r=ri,ri=l,r!==null&&sf(r)),n}function sf(n){ri===null?ri=n:ri.push.apply(ri,n)}function R_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var p=l[f],y=p.getSnapshot;p=p.value;try{if(!bi(y(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(n,r){for(r&=~Ju,r&=~wl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-_t(r),f=1<<l;n[l]=-1,r&=~f}}function Mm(n){if(Bt&6)throw Error(t(327));Ks();var r=On(n,0);if(!(r&1))return si(n,Q()),null;var l=Ll(n,r);if(n.tag!==0&&l===2){var f=Qi(n);f!==0&&(r=f,l=rf(n,f))}if(l===1)throw l=ua,hs(n,0),zr(n,r),si(n,Q()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ds(n,ri,or),si(n,Q()),null}function of(n,r){var l=Bt;Bt|=1;try{return n(r)}finally{Bt=l,Bt===0&&($s=Q()+500,rl&&Ir())}}function fs(n){kr!==null&&kr.tag===0&&!(Bt&6)&&Ks();var r=Bt;Bt|=1;var l=Si.transition,f=kt;try{if(Si.transition=null,kt=1,n)return n()}finally{kt=f,Si.transition=l,Bt=r,!(Bt&6)&&Ir()}}function af(){di=qs.current,Zt(qs)}function hs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,r_(l)),pn!==null)for(l=pn.return;l!==null;){var f=l;switch(mu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&nl();break;case 3:Xs(),Zt(ti),Zt(Bn),Ru();break;case 5:Au(f);break;case 4:Xs();break;case 13:Zt(rn);break;case 19:Zt(rn);break;case 10:Su(f.type._context);break;case 22:case 23:af()}l=l.return}if(Rn=n,pn=n=Vr(n.current,null),Un=di=r,_n=0,ua=null,Ju=wl=us=0,ri=fa=null,as!==null){for(r=0;r<as.length;r++)if(l=as[r],f=l.interleaved,f!==null){l.interleaved=null;var p=f.next,y=l.pending;if(y!==null){var T=y.next;y.next=p,f.next=T}l.pending=f}as=null}return n}function Em(n,r){do{var l=pn;try{if(xu(),pl.current=_l,ml){for(var f=sn.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}ml=!1}if(cs=0,Cn=vn=sn=null,ra=!1,sa=0,Qu.current=null,l===null||l.return===null){_n=1,ua=r,pn=null;break}e:{var y=n,T=l.return,U=l,V=r;if(r=Un,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ae=V,xe=U,Me=xe.tag;if(!(xe.mode&1)&&(Me===0||Me===11||Me===15)){var ye=xe.alternate;ye?(xe.updateQueue=ye.updateQueue,xe.memoizedState=ye.memoizedState,xe.lanes=ye.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Oe=qp(T);if(Oe!==null){Oe.flags&=-257,$p(Oe,T,U,y,r),Oe.mode&1&&Yp(y,ae,r),r=Oe,V=ae;var Xe=r.updateQueue;if(Xe===null){var qe=new Set;qe.add(V),r.updateQueue=qe}else Xe.add(V);break e}else{if(!(r&1)){Yp(y,ae,r),lf();break e}V=Error(t(426))}}else if(nn&&U.mode&1){var fn=qp(T);if(fn!==null){!(fn.flags&65536)&&(fn.flags|=256),$p(fn,T,U,y,r),_u(js(V,U));break e}}y=V=js(V,U),_n!==4&&(_n=2),fa===null?fa=[y]:fa.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var Z=Xp(y,V,r);_p(y,Z);break e;case 1:U=V;var X=y.type,ne=y.stateNode;if(!(y.flags&128)&&(typeof X.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Or===null||!Or.has(ne)))){y.flags|=65536,r&=-r,y.lanes|=r;var we=jp(y,U,r);_p(y,we);break e}}y=y.return}while(y!==null)}Am(l)}catch($e){r=$e,pn===l&&l!==null&&(pn=l=l.return);continue}break}while(!0)}function Tm(){var n=Tl.current;return Tl.current=_l,n===null?_l:n}function lf(){(_n===0||_n===3||_n===2)&&(_n=4),Rn===null||!(us&268435455)&&!(wl&268435455)||zr(Rn,Un)}function Ll(n,r){var l=Bt;Bt|=2;var f=Tm();(Rn!==n||Un!==r)&&(or=null,hs(n,r));do try{b_();break}catch(p){Em(n,p)}while(!0);if(xu(),Bt=l,Tl.current=f,pn!==null)throw Error(t(261));return Rn=null,Un=0,_n}function b_(){for(;pn!==null;)wm(pn)}function P_(){for(;pn!==null&&!q();)wm(pn)}function wm(n){var r=bm(n.alternate,n,di);n.memoizedProps=n.pendingProps,r===null?Am(n):pn=r,Qu.current=null}function Am(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=E_(l,r),l!==null){l.flags&=32767,pn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,pn=null;return}}else if(l=M_(l,r,di),l!==null){pn=l;return}if(r=r.sibling,r!==null){pn=r;return}pn=r=n}while(r!==null);_n===0&&(_n=5)}function ds(n,r,l){var f=kt,p=Si.transition;try{Si.transition=null,kt=1,L_(n,r,l,f)}finally{Si.transition=p,kt=f}return null}function L_(n,r,l,f){do Ks();while(kr!==null);if(Bt&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(Dn(n,y),n===Rn&&(pn=Rn=null,Un=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Cl||(Cl=!0,Pm(Fe,function(){return Ks(),null})),y=(l.flags&15990)!==0,l.subtreeFlags&15990||y){y=Si.transition,Si.transition=null;var T=kt;kt=1;var U=Bt;Bt|=4,Qu.current=null,w_(n,l),gm(l,n),Zv(au),Ha=!!ou,au=ou=null,n.current=l,A_(l),oe(),Bt=U,kt=T,Si.transition=y}else n.current=l;if(Cl&&(Cl=!1,kr=n,Rl=p),y=n.pendingLanes,y===0&&(Or=null),It(l.stateNode),si(n,Q()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],f(p.value,{componentStack:p.stack,digest:p.digest});if(Al)throw Al=!1,n=tf,tf=null,n;return Rl&1&&n.tag!==0&&Ks(),y=n.pendingLanes,y&1?n===nf?ha++:(ha=0,nf=n):ha=0,Ir(),null}function Ks(){if(kr!==null){var n=Gi(Rl),r=Si.transition,l=kt;try{if(Si.transition=null,kt=16>n?16:n,kr===null)var f=!1;else{if(n=kr,kr=null,Rl=0,Bt&6)throw Error(t(331));var p=Bt;for(Bt|=4,Ge=n.current;Ge!==null;){var y=Ge,T=y.child;if(Ge.flags&16){var U=y.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ae=U[V];for(Ge=ae;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:ca(8,xe,y)}var Me=xe.child;if(Me!==null)Me.return=xe,Ge=Me;else for(;Ge!==null;){xe=Ge;var ye=xe.sibling,Oe=xe.return;if(fm(xe),xe===ae){Ge=null;break}if(ye!==null){ye.return=Oe,Ge=ye;break}Ge=Oe}}}var Xe=y.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var fn=qe.sibling;qe.sibling=null,qe=fn}while(qe!==null)}}Ge=y}}if(y.subtreeFlags&2064&&T!==null)T.return=y,Ge=T;else e:for(;Ge!==null;){if(y=Ge,y.flags&2048)switch(y.tag){case 0:case 11:case 15:ca(9,y,y.return)}var Z=y.sibling;if(Z!==null){Z.return=y.return,Ge=Z;break e}Ge=y.return}}var X=n.current;for(Ge=X;Ge!==null;){T=Ge;var ne=T.child;if(T.subtreeFlags&2064&&ne!==null)ne.return=T,Ge=ne;else e:for(T=X;Ge!==null;){if(U=Ge,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:El(9,U)}}catch($e){cn(U,U.return,$e)}if(U===T){Ge=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Ge=we;break e}Ge=U.return}}if(Bt=p,Ir(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ot,n)}catch{}f=!0}return f}finally{kt=l,Si.transition=r}}return!1}function Cm(n,r,l){r=js(l,r),r=Xp(n,r,1),n=Nr(n,r,1),r=$n(),n!==null&&(wn(n,1,r),si(n,r))}function cn(n,r,l){if(n.tag===3)Cm(n,n,l);else for(;r!==null;){if(r.tag===3){Cm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Or===null||!Or.has(f))){n=js(l,n),n=jp(r,n,1),r=Nr(r,n,1),n=$n(),r!==null&&(wn(r,1,n),si(r,n));break}}r=r.return}}function D_(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=$n(),n.pingedLanes|=n.suspendedLanes&l,Rn===n&&(Un&l)===l&&(_n===4||_n===3&&(Un&130023424)===Un&&500>Q()-ef?hs(n,0):Ju|=l),si(n,r)}function Rm(n,r){r===0&&(n.mode&1?(r=ln,ln<<=1,!(ln&130023424)&&(ln=4194304)):r=1);var l=$n();n=ir(n,r),n!==null&&(wn(n,r,l),si(n,l))}function I_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Rm(n,l)}function U_(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Rm(n,l)}var bm;bm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||ti.current)ii=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return ii=!1,S_(n,r,l);ii=!!(n.flags&131072)}else ii=!1,nn&&r.flags&1048576&&lp(r,ol,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Sl(n,r),n=r.pendingProps;var p=ks(r,Bn.current);Ws(r,l),p=Lu(null,r,f,n,p,l);var y=Du();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ni(f)?(y=!0,il(r)):y=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Tu(r),p.updater=yl,r.stateNode=p,p._reactInternals=r,ku(r,f,n,l),r=Hu(null,r,f,!0,y,l)):(r.tag=0,nn&&y&&pu(r),qn(null,r,p,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Sl(n,r),n=r.pendingProps,p=f._init,f=p(f._payload),r.type=f,p=r.tag=F_(f),n=Li(f,n),p){case 0:r=Vu(null,r,f,n,l);break e;case 1:r=tm(null,r,f,n,l);break e;case 11:r=Kp(null,r,f,n,l);break e;case 14:r=Zp(null,r,f,Li(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:Li(f,p),Vu(n,r,f,p,l);case 1:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:Li(f,p),tm(n,r,f,p,l);case 3:e:{if(nm(r),n===null)throw Error(t(387));f=r.pendingProps,y=r.memoizedState,p=y.element,vp(n,r),hl(r,f,null,l);var T=r.memoizedState;if(f=T.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){p=js(Error(t(423)),r),r=im(n,r,f,l,p);break e}else if(f!==p){p=js(Error(t(424)),r),r=im(n,r,f,l,p);break e}else for(hi=Pr(r.stateNode.containerInfo.firstChild),fi=r,nn=!0,Pi=null,l=mp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Vs(),f===p){r=sr(n,r,l);break e}qn(n,r,f,l)}r=r.child}return r;case 5:return xp(r),n===null&&vu(r),f=r.type,p=r.pendingProps,y=n!==null?n.memoizedProps:null,T=p.children,lu(f,p)?T=null:y!==null&&lu(f,y)&&(r.flags|=32),em(n,r),qn(n,r,T,l),r.child;case 6:return n===null&&vu(r),null;case 13:return rm(n,r,l);case 4:return wu(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Hs(r,null,f,l):qn(n,r,f,l),r.child;case 11:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:Li(f,p),Kp(n,r,f,p,l);case 7:return qn(n,r,r.pendingProps,l),r.child;case 8:return qn(n,r,r.pendingProps.children,l),r.child;case 12:return qn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,p=r.pendingProps,y=r.memoizedProps,T=p.value,$t(cl,f._currentValue),f._currentValue=T,y!==null)if(bi(y.value,T)){if(y.children===p.children&&!ti.current){r=sr(n,r,l);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var U=y.dependencies;if(U!==null){T=y.child;for(var V=U.firstContext;V!==null;){if(V.context===f){if(y.tag===1){V=rr(-1,l&-l),V.tag=2;var ae=y.updateQueue;if(ae!==null){ae=ae.shared;var xe=ae.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),ae.pending=V}}y.lanes|=l,V=y.alternate,V!==null&&(V.lanes|=l),Mu(y.return,l,r),U.lanes|=l;break}V=V.next}}else if(y.tag===10)T=y.type===r.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=l,U=T.alternate,U!==null&&(U.lanes|=l),Mu(T,l,r),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===r){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}qn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,f=r.pendingProps.children,Ws(r,l),p=yi(p),f=f(p),r.flags|=1,qn(n,r,f,l),r.child;case 14:return f=r.type,p=Li(f,r.pendingProps),p=Li(f.type,p),Zp(n,r,f,p,l);case 15:return Qp(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:Li(f,p),Sl(n,r),r.tag=1,ni(f)?(n=!0,il(r)):n=!1,Ws(r,l),Gp(r,f,p),ku(r,f,p,l),Hu(null,r,f,!0,n,l);case 19:return om(n,r,l);case 22:return Jp(n,r,l)}throw Error(t(156,r.tag))};function Pm(n,r){return Fo(n,r)}function N_(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,r,l,f){return new N_(n,r,l,f)}function cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function F_(n){if(typeof n=="function")return cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===de)return 14}return 2}function Vr(n,r){var l=n.alternate;return l===null?(l=Mi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Dl(n,r,l,f,p,y){var T=2;if(f=n,typeof n=="function")cf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return ps(l.children,p,y,r);case W:T=8,p|=8;break;case P:return n=Mi(12,l,r,p|2),n.elementType=P,n.lanes=y,n;case te:return n=Mi(13,l,r,p),n.elementType=te,n.lanes=y,n;case fe:return n=Mi(19,l,r,p),n.elementType=fe,n.lanes=y,n;case he:return Il(l,p,y,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case k:T=9;break e;case se:T=11;break e;case de:T=14;break e;case ce:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Mi(T,l,r,p),r.elementType=n,r.type=f,r.lanes=y,r}function ps(n,r,l,f){return n=Mi(7,n,f,r),n.lanes=l,n}function Il(n,r,l,f){return n=Mi(22,n,f,r),n.elementType=he,n.lanes=l,n.stateNode={isHidden:!1},n}function uf(n,r,l){return n=Mi(6,n,null,r),n.lanes=l,n}function ff(n,r,l){return r=Mi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function O_(n,r,l,f,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function hf(n,r,l,f,p,y,T,U,V){return n=new O_(n,r,l,U,V),r===1?(r=1,y===!0&&(r|=8)):r=0,y=Mi(3,null,null,r),n.current=y,y.stateNode=n,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(y),n}function k_(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function Lm(n){if(!n)return Dr;n=n._reactInternals;e:{if(ht(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ni(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ni(l))return sp(n,l,r)}return r}function Dm(n,r,l,f,p,y,T,U,V){return n=hf(l,f,!0,n,p,y,T,U,V),n.context=Lm(null),l=n.current,f=$n(),p=Br(l),y=rr(f,p),y.callback=r??null,Nr(l,y,p),n.current.lanes=p,wn(n,p,f),si(n,f),n}function Ul(n,r,l,f){var p=r.current,y=$n(),T=Br(p);return l=Lm(l),r.context===null?r.context=l:r.pendingContext=l,r=rr(y,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Nr(p,r,T),n!==null&&(Ui(n,p,T,y),fl(n,p,T)),T}function Nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function df(n,r){Im(n,r),(n=n.alternate)&&Im(n,r)}var Um=typeof reportError=="function"?reportError:function(n){console.error(n)};function pf(n){this._internalRoot=n}Fl.prototype.render=pf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ul(n,r,null,null)},Fl.prototype.unmount=pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;fs(function(){Ul(null,n,null,null)}),r[Ji]=null}};function Fl(n){this._internalRoot=n}Fl.prototype.unstable_scheduleHydration=function(n){if(n){var r=vd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Cr.length&&r!==0&&r<Cr[l].priority;l++);Cr.splice(l,0,n),l===0&&xd(n)}};function mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function B_(n,r,l,f,p){if(p){if(typeof f=="function"){var y=f;f=function(){var ae=Nl(T);y.call(ae)}}var T=Dm(r,f,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=T,n[Ji]=T.current,Ko(n.nodeType===8?n.parentNode:n),fs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var U=f;f=function(){var ae=Nl(V);U.call(ae)}}var V=hf(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=V,n[Ji]=V.current,Ko(n.nodeType===8?n.parentNode:n),fs(function(){Ul(r,V,l,f)}),V}function kl(n,r,l,f,p){var y=l._reactRootContainer;if(y){var T=y;if(typeof p=="function"){var U=p;p=function(){var V=Nl(T);U.call(V)}}Ul(r,T,n,p)}else T=B_(l,r,n,p,f);return Nl(T)}md=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lt(r.pendingLanes);l!==0&&(An(r,l|1),si(r,Q()),!(Bt&6)&&($s=Q()+500,Ir()))}break;case 13:fs(function(){var f=ir(n,1);if(f!==null){var p=$n();Ui(f,n,1,p)}}),df(n,1)}},Bc=function(n){if(n.tag===13){var r=ir(n,134217728);if(r!==null){var l=$n();Ui(r,n,134217728,l)}df(n,134217728)}},gd=function(n){if(n.tag===13){var r=Br(n),l=ir(n,r);if(l!==null){var f=$n();Ui(l,n,r,f)}df(n,r)}},vd=function(){return kt},_d=function(n,r){var l=kt;try{return kt=n,r()}finally{kt=l}},Re=function(n,r,l){switch(r){case"input":if(mt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var p=tl(f);if(!p)throw Error(t(90));xt(f),mt(f,p)}}}break;case"textarea":ge(n,l);break;case"select":r=l.value,r!=null&&L(n,!!l.multiple,r,!1)}},rt=of,Pt=fs;var z_={usingClientEntryPoint:!1,Events:[Jo,Fs,tl,J,Ue,of]},da={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jt(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{ot=Bl.inject(V_),Ye=Bl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_,oi.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(r))throw Error(t(200));return k_(n,r,null,l)},oi.createRoot=function(n,r){if(!mf(n))throw Error(t(299));var l=!1,f="",p=Um;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=hf(n,1,!1,null,null,l,!1,f,p),n[Ji]=r.current,Ko(n.nodeType===8?n.parentNode:n),new pf(r)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jt(r),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return fs(n)},oi.hydrate=function(n,r,l){if(!Ol(r))throw Error(t(200));return kl(null,n,r,!0,l)},oi.hydrateRoot=function(n,r,l){if(!mf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,p=!1,y="",T=Um;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Dm(r,null,n,1,l??null,p,!1,y,T),n[Ji]=r.current,Ko(n),f)for(n=0;n<f.length;n++)l=f[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Fl(r)},oi.render=function(n,r,l){if(!Ol(r))throw Error(t(200));return kl(null,n,r,!1,l)},oi.unmountComponentAtNode=function(n){if(!Ol(n))throw Error(t(40));return n._reactRootContainer?(fs(function(){kl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},oi.unstable_batchedUpdates=of,oi.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Ol(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return kl(n,r,l,!1,f)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var Gm;function $_(){if(Gm)return _f.exports;Gm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_f.exports=q_(),_f.exports}var Wm;function K_(){if(Wm)return zl;Wm=1;var o=$_();return zl.createRoot=o.createRoot,zl.hydrateRoot=o.hydrateRoot,zl}var Z_=K_(),st=qh();const m0=st.createContext(void 0),Q_=({children:o})=>{const[e,t]=st.useState(!1),[i,s]=st.useState(0),a=st.useCallback(c=>{s(c)},[]);return be.jsx(m0.Provider,{value:{isPlaying:e,setIsPlaying:t,playAngle:i,handleStageRotationChange:a},children:o})};function J_(){const o=st.useContext(m0);if(!o)throw new Error("usePlay must be used within a <PlayProvider>");return o}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="172",ey=0,Xm=1,ty=2,g0=1,v0=2,dr=3,Jr=0,ci=1,pr=2,_r=0,yo=1,Mc=2,jm=3,Ym=4,ny=5,Es=100,iy=101,ry=102,sy=103,oy=104,ay=200,ly=201,cy=202,uy=203,sh=204,oh=205,fy=206,hy=207,dy=208,py=209,my=210,gy=211,vy=212,_y=213,yy=214,ah=0,lh=1,ch=2,Mo=3,uh=4,fh=5,hh=6,dh=7,Dc=0,xy=1,Sy=2,Qr=0,My=1,Ey=2,Ty=3,wy=4,Ay=5,Cy=6,Ry=7,qm="attached",by="detached",_0=300,Eo=301,To=302,Ec=303,ph=304,Ic=306,Ca=1e3,mr=1001,mh=1002,gi=1003,Py=1004,Vl=1005,$i=1006,Sf=1007,ws=1008,Sr=1009,y0=1010,x0=1011,Ra=1012,Kh=1013,As=1014,Vi=1015,yr=1016,Zh=1017,Qh=1018,wo=1020,S0=35902,M0=1021,E0=1022,Ai=1023,T0=1024,w0=1025,xo=1026,Ao=1027,Jh=1028,ed=1029,A0=1030,td=1031,nd=1033,gc=33776,vc=33777,_c=33778,yc=33779,gh=35840,vh=35841,_h=35842,yh=35843,xh=36196,Sh=37492,Mh=37496,Eh=37808,Th=37809,wh=37810,Ah=37811,Ch=37812,Rh=37813,bh=37814,Ph=37815,Lh=37816,Dh=37817,Ih=37818,Uh=37819,Nh=37820,Fh=37821,xc=36492,Oh=36494,kh=36495,C0=36283,Bh=36284,zh=36285,Vh=36286,Tc=2300,Hh=2301,Mf=2302,$m=2400,Km=2401,Zm=2402,Ly=2500,Dy=3200,Iy=3201,Uc=0,Uy=1,Kr="",Qt="srgb",Co="srgb-linear",wc="linear",Yt="srgb",Zs=7680,Qm=519,Ny=512,Fy=513,Oy=514,R0=515,ky=516,By=517,zy=518,Vy=519,Jm=35044,Hy=35048,eg="300 es",gr=2e3,Ac=2001;class Do{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tg=1234567;const Ta=Math.PI/180,Ro=180/Math.PI;function es(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function Rt(o,e,t){return Math.max(e,Math.min(t,o))}function id(o,e){return(o%e+e)%e}function Gy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Wy(o,e,t){return o!==e?(t-o)/(e-o):0}function wa(o,e,t){return(1-t)*o+t*e}function Xy(o,e,t,i){return wa(o,e,1-Math.exp(-t*i))}function jy(o,e=1){return e-Math.abs(id(o,e*2)-e)}function Yy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function qy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function $y(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ky(o,e){return o+Math.random()*(e-o)}function Zy(o){return o*(.5-Math.random())}function Qy(o){o!==void 0&&(tg=o);let e=tg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jy(o){return o*Ta}function ex(o){return o*Ro}function tx(o){return(o&o-1)===0&&o!==0}function nx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ix(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rx(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),h=c(t/2),d=a((e+i)/2),g=c((e+i)/2),m=a((e-i)/2),v=c((e-i)/2),_=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*g,h*m,h*v,u*d);break;case"YZY":o.set(h*v,u*g,h*m,u*d);break;case"ZXZ":o.set(h*m,h*v,u*g,u*d);break;case"XZX":o.set(u*g,h*M,h*_,u*d);break;case"YXY":o.set(h*_,u*g,h*M,u*d);break;case"ZYZ":o.set(h*M,h*_,u*g,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function po(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:Ta,RAD2DEG:Ro,generateUUID:es,clamp:Rt,euclideanModulo:id,mapLinear:Gy,inverseLerp:Wy,lerp:wa,damp:Xy,pingpong:jy,smoothstep:Yy,smootherstep:qy,randInt:$y,randFloat:Ky,randFloatSpread:Zy,seededRandom:Qy,degToRad:Jy,radToDeg:ex,isPowerOfTwo:tx,ceilPowerOfTwo:nx,floorPowerOfTwo:ix,setQuaternionFromProperEuler:rx,normalize:Kn,denormalize:po};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,t,i,s,a,c,u,h,d){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,d)}set(e,t,i,s,a,c,u,h,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=u,g[3]=t,g[4]=a,g[5]=h,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],g=i[4],m=i[7],v=i[2],_=i[5],M=i[8],E=s[0],S=s[3],x=s[6],I=s[1],C=s[4],A=s[7],B=s[2],N=s[5],O=s[8];return a[0]=c*E+u*I+h*B,a[3]=c*S+u*C+h*N,a[6]=c*x+u*A+h*O,a[1]=d*E+g*I+m*B,a[4]=d*S+g*C+m*N,a[7]=d*x+g*A+m*O,a[2]=v*E+_*I+M*B,a[5]=v*S+_*C+M*N,a[8]=v*x+_*A+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],g=e[8];return t*c*g-t*u*d-i*a*g+i*u*h+s*a*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],g=e[8],m=g*c-u*d,v=u*h-g*a,_=d*a-c*h,M=t*m+i*v+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(s*d-g*i)*E,e[2]=(u*i-s*c)*E,e[3]=v*E,e[4]=(g*t-s*h)*E,e[5]=(s*a-u*t)*E,e[6]=_*E,e[7]=(i*h-d*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-s*d,s*h,-s*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ef.makeScale(e,t)),this}rotate(e){return this.premultiply(Ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ef=new yt;function b0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ba(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sx(){const o=ba("canvas");return o.style.display="block",o}const ng={};function mo(o){o in ng||(ng[o]=!0,console.warn(o))}function ox(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function ax(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ig=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){const o={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Yt&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(s.r=So(s.r),s.g=So(s.g),s.b=So(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kr?wc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Co]:{primaries:e,whitePoint:i,transfer:wc,toXYZ:ig,fromXYZ:rg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:Yt,toXYZ:ig,fromXYZ:rg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),o}const Tt=cx();function xr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qs;class ux{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=ba("canvas")),Qs.width=e.width,Qs.height=e.height;const i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=xr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class P0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Tf(s[c].image)):a.push(Tf(s[c]))}else a=Tf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Tf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ux.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;class Sn extends Do{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=mr,s=mr,a=$i,c=ws,u=Ai,h=Sr,d=Sn.DEFAULT_ANISOTROPY,g=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=es(),this.name="",this.source=new P0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=_0;Sn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,d=h[0],g=h[4],m=h[8],v=h[1],_=h[5],M=h[9],E=h[2],S=h[6],x=h[10];if(Math.abs(g-v)<.01&&Math.abs(m-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,A=(_+1)/2,B=(x+1)/2,N=(g+v)/4,O=(m+E)/4,W=(M+S)/4;return C>A&&C>B?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=N/i,a=O/i):A>B?A<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),i=N/s,a=W/s):B<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(B),i=O/a,s=W/a),this.set(i,s,a,t),this}let I=Math.sqrt((S-M)*(S-M)+(m-E)*(m-E)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(m-E)/I,this.z=(v-g)/I,this.w=Math.acos((d+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends Do{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new P0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends dx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class L0 extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class px extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let h=i[s+0],d=i[s+1],g=i[s+2],m=i[s+3];const v=a[c+0],_=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u===1){e[t+0]=v,e[t+1]=_,e[t+2]=M,e[t+3]=E;return}if(m!==E||h!==v||d!==_||g!==M){let S=1-u;const x=h*v+d*_+g*M+m*E,I=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const B=Math.sqrt(C),N=Math.atan2(B,x*I);S=Math.sin(S*N)/B,u=Math.sin(u*N)/B}const A=u*I;if(h=h*S+v*A,d=d*S+_*A,g=g*S+M*A,m=m*S+E*A,S===1-u){const B=1/Math.sqrt(h*h+d*d+g*g+m*m);h*=B,d*=B,g*=B,m*=B}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],h=i[s+1],d=i[s+2],g=i[s+3],m=a[c],v=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+g*m+h*_-d*v,e[t+1]=h*M+g*v+d*m-u*_,e[t+2]=d*M+g*_+u*v-h*m,e[t+3]=g*M-u*m-h*v-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),g=u(s/2),m=u(a/2),v=h(i/2),_=h(s/2),M=h(a/2);switch(c){case"XYZ":this._x=v*g*m+d*_*M,this._y=d*_*m-v*g*M,this._z=d*g*M+v*_*m,this._w=d*g*m-v*_*M;break;case"YXZ":this._x=v*g*m+d*_*M,this._y=d*_*m-v*g*M,this._z=d*g*M-v*_*m,this._w=d*g*m+v*_*M;break;case"ZXY":this._x=v*g*m-d*_*M,this._y=d*_*m+v*g*M,this._z=d*g*M+v*_*m,this._w=d*g*m-v*_*M;break;case"ZYX":this._x=v*g*m-d*_*M,this._y=d*_*m+v*g*M,this._z=d*g*M-v*_*m,this._w=d*g*m+v*_*M;break;case"YZX":this._x=v*g*m+d*_*M,this._y=d*_*m+v*g*M,this._z=d*g*M-v*_*m,this._w=d*g*m-v*_*M;break;case"XZY":this._x=v*g*m-d*_*M,this._y=d*_*m-v*g*M,this._z=d*g*M+v*_*m,this._w=d*g*m+v*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],g=t[6],m=t[10],v=i+u+m;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(g-h)*_,this._y=(a-d)*_,this._z=(c-s)*_}else if(i>u&&i>m){const _=2*Math.sqrt(1+i-u-m);this._w=(g-h)/_,this._x=.25*_,this._y=(s+c)/_,this._z=(a+d)/_}else if(u>m){const _=2*Math.sqrt(1+u-i-m);this._w=(a-d)/_,this._x=(s+c)/_,this._y=.25*_,this._z=(h+g)/_}else{const _=2*Math.sqrt(1+m-i-u);this._w=(c-s)/_,this._x=(a+d)/_,this._y=(h+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,g=t._w;return this._x=i*g+c*u+s*d-a*h,this._y=s*g+c*h+a*u-i*d,this._z=a*g+c*d+i*h-s*u,this._w=c*g-i*u-s*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const _=1-t;return this._w=_*c+t*this._w,this._x=_*i+t*this._x,this._y=_*s+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),g=Math.atan2(d,u),m=Math.sin((1-t)*g)/d,v=Math.sin(t*g)/d;return this._w=c*m+this._w*v,this._x=i*m+this._x*v,this._y=s*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*s-u*i),g=2*(u*t-a*s),m=2*(a*i-c*t);return this.x=t+h*d+c*m-u*g,this.y=i+h*g+u*d-a*m,this.z=s+h*m+a*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-a*u,this.y=a*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wf.copy(this).projectOnVector(e),this.sub(wf)}reflect(e){return this.sub(wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wf=new j,sg=new ai;class ts{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ni):Ni.fromBufferAttribute(a,c),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Gl.subVectors(this.max,ma),Js.subVectors(e.a,ma),eo.subVectors(e.b,ma),to.subVectors(e.c,ma),Gr.subVectors(eo,Js),Wr.subVectors(to,eo),ms.subVectors(Js,to);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-ms.z,ms.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,ms.z,0,-ms.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-ms.y,ms.x,0];return!Af(t,Js,eo,to,Gl)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,Js,eo,to,Gl))?!1:(Wl.crossVectors(Gr,Wr),t=[Wl.x,Wl.y,Wl.z],Af(t,Js,eo,to,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new j,new j,new j,new j,new j,new j,new j,new j],Ni=new j,Hl=new ts,Js=new j,eo=new j,to=new j,Gr=new j,Wr=new j,ms=new j,ma=new j,Gl=new j,Wl=new j,gs=new j;function Af(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){gs.fromArray(o,a);const u=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),h=e.dot(gs),d=t.dot(gs),g=i.dot(gs);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>u)return!1}return!0}const mx=new ts,ga=new j,Cf=new j;class ns{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mx.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Cf)),this.expandByPoint(ga.copy(e.center).sub(Cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lr=new j,Rf=new j,Xl=new j,Xr=new j,bf=new j,jl=new j,Pf=new j;class rd{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Rf.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Rf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Xl),u=Xr.dot(this.direction),h=-Xr.dot(Xl),d=Xr.lengthSq(),g=Math.abs(1-c*c);let m,v,_,M;if(g>0)if(m=c*h-u,v=c*u-h,M=a*g,m>=0)if(v>=-M)if(v<=M){const E=1/g;m*=E,v*=E,_=m*(m+c*v+2*u)+v*(c*m+v+2*h)+d}else v=a,m=Math.max(0,-(c*v+u)),_=-m*m+v*(v+2*h)+d;else v=-a,m=Math.max(0,-(c*v+u)),_=-m*m+v*(v+2*h)+d;else v<=-M?(m=Math.max(0,-(-c*a+u)),v=m>0?-a:Math.min(Math.max(-a,-h),a),_=-m*m+v*(v+2*h)+d):v<=M?(m=0,v=Math.min(Math.max(-a,-h),a),_=v*(v+2*h)+d):(m=Math.max(0,-(c*a+u)),v=m>0?a:Math.min(Math.max(-a,-h),a),_=-m*m+v*(v+2*h)+d);else v=c>0?-a:a,m=Math.max(0,-(c*v+u)),_=-m*m+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Rf).addScaledVector(Xl,v),_}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),s=lr.dot(lr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,h;const d=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),g>=0?(a=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(a=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),m>=0?(u=(e.min.z-v.z)*m,h=(e.max.z-v.z)*m):(u=(e.max.z-v.z)*m,h=(e.min.z-v.z)*m),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,i,s,a){bf.subVectors(t,e),jl.subVectors(i,e),Pf.crossVectors(bf,jl);let c=this.direction.dot(Pf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Xr.subVectors(this.origin,e);const h=u*this.direction.dot(jl.crossVectors(Xr,jl));if(h<0)return null;const d=u*this.direction.dot(bf.cross(Xr));if(d<0||h+d>c)return null;const g=-u*Xr.dot(Pf);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,a,c,u,h,d,g,m,v,_,M,E,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,d,g,m,v,_,M,E,S)}set(e,t,i,s,a,c,u,h,d,g,m,v,_,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=h,x[2]=d,x[6]=g,x[10]=m,x[14]=v,x[3]=_,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/no.setFromMatrixColumn(e,0).length(),a=1/no.setFromMatrixColumn(e,1).length(),c=1/no.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),g=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=c*g,_=c*m,M=u*g,E=u*m;t[0]=h*g,t[4]=-h*m,t[8]=d,t[1]=_+M*d,t[5]=v-E*d,t[9]=-u*h,t[2]=E-v*d,t[6]=M+_*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*g,_=h*m,M=d*g,E=d*m;t[0]=v+E*u,t[4]=M*u-_,t[8]=c*d,t[1]=c*m,t[5]=c*g,t[9]=-u,t[2]=_*u-M,t[6]=E+v*u,t[10]=c*h}else if(e.order==="ZXY"){const v=h*g,_=h*m,M=d*g,E=d*m;t[0]=v-E*u,t[4]=-c*m,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*g,t[9]=E-v*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const v=c*g,_=c*m,M=u*g,E=u*m;t[0]=h*g,t[4]=M*d-_,t[8]=v*d+E,t[1]=h*m,t[5]=E*d+v,t[9]=_*d-M,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,_=c*d,M=u*h,E=u*d;t[0]=h*g,t[4]=E-v*m,t[8]=M*m+_,t[1]=m,t[5]=c*g,t[9]=-u*g,t[2]=-d*g,t[6]=_*m+M,t[10]=v-E*m}else if(e.order==="XZY"){const v=c*h,_=c*d,M=u*h,E=u*d;t[0]=h*g,t[4]=-m,t[8]=d*g,t[1]=v*m+E,t[5]=c*g,t[9]=_*m-M,t[2]=M*m-_,t[6]=u*g,t[10]=E*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,vx)}lookAt(e,t,i){const s=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),jr.crossVectors(i,pi),jr.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),jr.crossVectors(i,pi)),jr.normalize(),Yl.crossVectors(pi,jr),s[0]=jr.x,s[4]=Yl.x,s[8]=pi.x,s[1]=jr.y,s[5]=Yl.y,s[9]=pi.y,s[2]=jr.z,s[6]=Yl.z,s[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],g=i[1],m=i[5],v=i[9],_=i[13],M=i[2],E=i[6],S=i[10],x=i[14],I=i[3],C=i[7],A=i[11],B=i[15],N=s[0],O=s[4],W=s[8],P=s[12],R=s[1],k=s[5],se=s[9],te=s[13],fe=s[2],de=s[6],ce=s[10],he=s[14],H=s[3],ue=s[7],ee=s[11],F=s[15];return a[0]=c*N+u*R+h*fe+d*H,a[4]=c*O+u*k+h*de+d*ue,a[8]=c*W+u*se+h*ce+d*ee,a[12]=c*P+u*te+h*he+d*F,a[1]=g*N+m*R+v*fe+_*H,a[5]=g*O+m*k+v*de+_*ue,a[9]=g*W+m*se+v*ce+_*ee,a[13]=g*P+m*te+v*he+_*F,a[2]=M*N+E*R+S*fe+x*H,a[6]=M*O+E*k+S*de+x*ue,a[10]=M*W+E*se+S*ce+x*ee,a[14]=M*P+E*te+S*he+x*F,a[3]=I*N+C*R+A*fe+B*H,a[7]=I*O+C*k+A*de+B*ue,a[11]=I*W+C*se+A*ce+B*ee,a[15]=I*P+C*te+A*he+B*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],g=e[2],m=e[6],v=e[10],_=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*h*m-s*d*m-a*u*v+i*d*v+s*u*_-i*h*_)+E*(+t*h*_-t*d*v+a*c*v-s*c*_+s*d*g-a*h*g)+S*(+t*d*m-t*u*_-a*c*m+i*c*_+a*u*g-i*d*g)+x*(-s*u*g-t*h*m+t*u*v+s*c*m-i*c*v+i*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],g=e[8],m=e[9],v=e[10],_=e[11],M=e[12],E=e[13],S=e[14],x=e[15],I=m*S*d-E*v*d+E*h*_-u*S*_-m*h*x+u*v*x,C=M*v*d-g*S*d-M*h*_+c*S*_+g*h*x-c*v*x,A=g*E*d-M*m*d+M*u*_-c*E*_-g*u*x+c*m*x,B=M*m*h-g*E*h-M*u*v+c*E*v+g*u*S-c*m*S,N=t*I+i*C+s*A+a*B;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return e[0]=I*O,e[1]=(E*v*a-m*S*a-E*s*_+i*S*_+m*s*x-i*v*x)*O,e[2]=(u*S*a-E*h*a+E*s*d-i*S*d-u*s*x+i*h*x)*O,e[3]=(m*h*a-u*v*a-m*s*d+i*v*d+u*s*_-i*h*_)*O,e[4]=C*O,e[5]=(g*S*a-M*v*a+M*s*_-t*S*_-g*s*x+t*v*x)*O,e[6]=(M*h*a-c*S*a-M*s*d+t*S*d+c*s*x-t*h*x)*O,e[7]=(c*v*a-g*h*a+g*s*d-t*v*d-c*s*_+t*h*_)*O,e[8]=A*O,e[9]=(M*m*a-g*E*a-M*i*_+t*E*_+g*i*x-t*m*x)*O,e[10]=(c*E*a-M*u*a+M*i*d-t*E*d-c*i*x+t*u*x)*O,e[11]=(g*u*a-c*m*a-g*i*d+t*m*d+c*i*_-t*u*_)*O,e[12]=B*O,e[13]=(g*E*s-M*m*s+M*i*v-t*E*v-g*i*S+t*m*S)*O,e[14]=(M*u*s-c*E*s-M*i*h+t*E*h+c*i*S-t*u*S)*O,e[15]=(c*m*s-g*u*s+g*i*h-t*m*h-c*i*v+t*u*v)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,d=a*c,g=a*u;return this.set(d*c+i,d*u-s*h,d*h+s*u,0,d*u+s*h,g*u+i,g*h-s*c,0,d*h-s*u,g*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,g=c+c,m=u+u,v=a*d,_=a*g,M=a*m,E=c*g,S=c*m,x=u*m,I=h*d,C=h*g,A=h*m,B=i.x,N=i.y,O=i.z;return s[0]=(1-(E+x))*B,s[1]=(_+A)*B,s[2]=(M-C)*B,s[3]=0,s[4]=(_-A)*N,s[5]=(1-(v+x))*N,s[6]=(S+I)*N,s[7]=0,s[8]=(M+C)*O,s[9]=(S-I)*O,s[10]=(1-(v+E))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=no.set(s[0],s[1],s[2]).length();const c=no.set(s[4],s[5],s[6]).length(),u=no.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Fi.copy(this);const d=1/a,g=1/c,m=1/u;return Fi.elements[0]*=d,Fi.elements[1]*=d,Fi.elements[2]*=d,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=m,Fi.elements[9]*=m,Fi.elements[10]*=m,t.setFromRotationMatrix(Fi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=gr){const h=this.elements,d=2*a/(t-e),g=2*a/(i-s),m=(t+e)/(t-e),v=(i+s)/(i-s);let _,M;if(u===gr)_=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Ac)_=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=gr){const h=this.elements,d=1/(t-e),g=1/(i-s),m=1/(c-a),v=(t+e)*d,_=(i+s)*g;let M,E;if(u===gr)M=(c+a)*m,E=-2*m;else if(u===Ac)M=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-_,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const no=new j,Fi=new Ke,gx=new j(0,0,0),vx=new j(1,1,1),jr=new j,Yl=new j,pi=new j,og=new Ke,ag=new ai;class xn{constructor(e=0,t=0,i=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],h=s[1],d=s[5],g=s[9],m=s[2],v=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ag.setFromEuler(this),this.setFromQuaternion(ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const lg=new j,io=new ai,cr=new Ke,ql=new j,va=new j,yx=new j,xx=new ai,cg=new j(1,0,0),ug=new j(0,1,0),fg=new j(0,0,1),hg={type:"added"},Sx={type:"removed"},ro={type:"childadded",child:null},Lf={type:"childremoved",child:null};class zt extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new j,t=new xn,i=new ai,s=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new yt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(cg,e)}rotateY(e){return this.rotateOnAxis(ug,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,t){return lg.copy(e).applyQuaternion(this.quaternion),this.position.add(lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cg,e)}translateY(e){return this.translateOnAxis(ug,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ql.copy(e):ql.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(va,ql,this.up):cr.lookAt(ql,va,this.up),this.quaternion.setFromRotationMatrix(cr),s&&(cr.extractRotation(s.matrixWorld),io.setFromRotationMatrix(cr),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sx),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const m=h[d];a(e.shapes,m)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),g=c(e.images),m=c(e.shapes),v=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const h=[];for(const d in u){const g=u[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new j(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new j,ur=new j,Df=new j,fr=new j,so=new j,oo=new j,dg=new j,If=new j,Uf=new j,Nf=new j,Ff=new Dt,Of=new Dt,kf=new Dt;class zi{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Oi.subVectors(e,t),s.cross(Oi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Oi.subVectors(s,t),ur.subVectors(i,t),Df.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(ur),h=Oi.dot(Df),d=ur.dot(ur),g=ur.dot(Df),m=c*d-u*u;if(m===0)return a.set(0,0,0),null;const v=1/m,_=(d*h-u*g)*v,M=(c*g-u*h)*v;return a.set(1-_-M,M,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,i,s,a,c,u,h){return this.getBarycoord(e,t,i,s,fr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,fr.x),h.addScaledVector(c,fr.y),h.addScaledVector(u,fr.z),h)}static getInterpolatedAttribute(e,t,i,s,a,c){return Ff.setScalar(0),Of.setScalar(0),kf.setScalar(0),Ff.fromBufferAttribute(e,t),Of.fromBufferAttribute(e,i),kf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Ff,a.x),c.addScaledVector(Of,a.y),c.addScaledVector(kf,a.z),c}static isFrontFacing(e,t,i,s){return Oi.subVectors(i,t),ur.subVectors(e,t),Oi.cross(ur).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Oi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;so.subVectors(s,i),oo.subVectors(a,i),If.subVectors(e,i);const h=so.dot(If),d=oo.dot(If);if(h<=0&&d<=0)return t.copy(i);Uf.subVectors(e,s);const g=so.dot(Uf),m=oo.dot(Uf);if(g>=0&&m<=g)return t.copy(s);const v=h*m-g*d;if(v<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(i).addScaledVector(so,c);Nf.subVectors(e,a);const _=so.dot(Nf),M=oo.dot(Nf);if(M>=0&&_<=M)return t.copy(a);const E=_*d-h*M;if(E<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(oo,u);const S=g*M-_*m;if(S<=0&&m-g>=0&&_-M>=0)return dg.subVectors(a,s),u=(m-g)/(m-g+(_-M)),t.copy(s).addScaledVector(dg,u);const x=1/(S+E+v);return c=E*x,u=v*x,t.copy(i).addScaledVector(so,c).addScaledVector(oo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Bf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=id(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Bf(c,a,e+1/3),this.g=Bf(c,a,e),this.b=Bf(c,a,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Tt.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Rt(Wn.r*255,0,255))*65536+Math.round(Rt(Wn.g*255,0,255))*256+Math.round(Rt(Wn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,a=Wn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let h,d;const g=(u+c)/2;if(u===c)h=0,d=0;else{const m=c-u;switch(d=g<=.5?m/(c+u):m/(2-c-u),c){case i:h=(s-a)/m+(s<a?6:0);break;case s:h=(a-i)/m+2;break;case a:h=(i-s)/m+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Qt){Tt.fromWorkingColorSpace(Wn.copy(this),e);const t=Wn.r,i=Wn.g,s=Wn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL($l);const i=wa(Yr.h,$l.h,t),s=wa(Yr.s,$l.s,t),a=wa(Yr.l,$l.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new it;it.NAMES=I0;let Mx=0;class Ci extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=es(),this.name="",this.type="Material",this.blending=yo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Jr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sd extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new j,Kl=new ct;class Hi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),s=Kn(s,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),e}}class od extends Hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class U0 extends Hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jt extends Hi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ex=0;const Ei=new Ke,zf=new zt,ao=new j,mi=new ts,_a=new ts,Pn=new j;class ei extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?U0:od)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new yt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];mi.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];_a.setFromBufferAttribute(u),this.morphTargetsRelative?(Pn.addVectors(mi.min,_a.min),mi.expandByPoint(Pn),Pn.addVectors(mi.max,_a.max),mi.expandByPoint(Pn)):(mi.expandByPoint(_a.min),mi.expandByPoint(_a.max))}mi.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)Pn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Pn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)Pn.fromBufferAttribute(u,d),h&&(ao.fromBufferAttribute(e,d),Pn.add(ao)),s=Math.max(s,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let W=0;W<i.count;W++)u[W]=new j,h[W]=new j;const d=new j,g=new j,m=new j,v=new ct,_=new ct,M=new ct,E=new j,S=new j;function x(W,P,R){d.fromBufferAttribute(i,W),g.fromBufferAttribute(i,P),m.fromBufferAttribute(i,R),v.fromBufferAttribute(a,W),_.fromBufferAttribute(a,P),M.fromBufferAttribute(a,R),g.sub(d),m.sub(d),_.sub(v),M.sub(v);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(m,-_.y).multiplyScalar(k),S.copy(m).multiplyScalar(_.x).addScaledVector(g,-M.x).multiplyScalar(k),u[W].add(E),u[P].add(E),u[R].add(E),h[W].add(S),h[P].add(S),h[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let W=0,P=I.length;W<P;++W){const R=I[W],k=R.start,se=R.count;for(let te=k,fe=k+se;te<fe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const C=new j,A=new j,B=new j,N=new j;function O(W){B.fromBufferAttribute(s,W),N.copy(B);const P=u[W];C.copy(P),C.sub(B.multiplyScalar(B.dot(P))).normalize(),A.crossVectors(N,P);const k=A.dot(h[W])<0?-1:1;c.setXYZW(W,C.x,C.y,C.z,k)}for(let W=0,P=I.length;W<P;++W){const R=I[W],k=R.start,se=R.count;for(let te=k,fe=k+se;te<fe;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,_=i.count;v<_;v++)i.setXYZ(v,0,0,0);const s=new j,a=new j,c=new j,u=new j,h=new j,d=new j,g=new j,m=new j;if(e)for(let v=0,_=e.count;v<_;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),g.subVectors(c,a),m.subVectors(s,a),g.cross(m),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),u.add(g),h.add(g),d.add(g),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,_=t.count;v<_;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),g.subVectors(c,a),m.subVectors(s,a),g.cross(m),i.setXYZ(v+0,g.x,g.y,g.z),i.setXYZ(v+1,g.x,g.y,g.z),i.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(u,h){const d=u.array,g=u.itemSize,m=u.normalized,v=new d.constructor(h.length*g);let _=0,M=0;for(let E=0,S=h.length;E<S;E++){u.isInterleavedBufferAttribute?_=h[E]*u.data.stride+u.offset:_=h[E]*g;for(let x=0;x<g;x++)v[M++]=d[_++]}return new Hi(v,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],d=e(h,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let g=0,m=d.length;g<m;g++){const v=d[g],_=e(v,i);h.push(_)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let m=0,v=d.length;m<v;m++){const _=d[m];g.push(_.toJSON(e.data))}g.length>0&&(s[h]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const a=e.morphAttributes;for(const d in a){const g=[],m=a[d];for(let v=0,_=m.length;v<_;v++)g.push(m[v].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pg=new Ke,vs=new rd,Zl=new ns,mg=new j,Ql=new j,Jl=new j,ec=new j,Vf=new j,tc=new j,gg=new j,nc=new j;class Ut extends zt{constructor(e=new ei,t=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){tc.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const g=u[h],m=a[h];g!==0&&(Vf.fromBufferAttribute(m,e),c?tc.addScaledVector(Vf,g):tc.addScaledVector(Vf.sub(t),g))}t.add(tc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(a),vs.copy(e.ray).recast(e.near),!(Zl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Zl,mg)===null||vs.origin.distanceToSquared(mg)>(e.far-e.near)**2))&&(pg.copy(a).invert(),vs.copy(e.ray).applyMatrix4(pg),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,g=a.attributes.uv1,m=a.attributes.normal,v=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],I=Math.max(S.start,_.start),C=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let A=I,B=C;A<B;A+=3){const N=u.getX(A),O=u.getX(A+1),W=u.getX(A+2);s=ic(this,x,e,i,d,g,m,N,O,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let S=M,x=E;S<x;S+=3){const I=u.getX(S),C=u.getX(S+1),A=u.getX(S+2);s=ic(this,c,e,i,d,g,m,I,C,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],I=Math.max(S.start,_.start),C=Math.min(h.count,Math.min(S.start+S.count,_.start+_.count));for(let A=I,B=C;A<B;A+=3){const N=A,O=A+1,W=A+2;s=ic(this,x,e,i,d,g,m,N,O,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),E=Math.min(h.count,_.start+_.count);for(let S=M,x=E;S<x;S+=3){const I=S,C=S+1,A=S+2;s=ic(this,c,e,i,d,g,m,I,C,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Tx(o,e,t,i,s,a,c,u){let h;if(e.side===ci?h=i.intersectTriangle(c,a,s,!0,u):h=i.intersectTriangle(s,a,c,e.side===Jr,u),h===null)return null;nc.copy(u),nc.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(nc);return d<t.near||d>t.far?null:{distance:d,point:nc.clone(),object:o}}function ic(o,e,t,i,s,a,c,u,h,d){o.getVertexPosition(u,Ql),o.getVertexPosition(h,Jl),o.getVertexPosition(d,ec);const g=Tx(o,e,t,i,Ql,Jl,ec,gg);if(g){const m=new j;zi.getBarycoord(gg,Ql,Jl,ec,m),s&&(g.uv=zi.getInterpolatedAttribute(s,u,h,d,m,new ct)),a&&(g.uv1=zi.getInterpolatedAttribute(a,u,h,d,m,new ct)),c&&(g.normal=zi.getInterpolatedAttribute(c,u,h,d,m,new j),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const v={a:u,b:h,c:d,normal:new j,materialIndex:0};zi.getNormal(Ql,Jl,ec,v.normal),g.face=v,g.barycoord=m}return g}class Ki extends ei{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],g=[],m=[];let v=0,_=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2));function M(E,S,x,I,C,A,B,N,O,W,P){const R=A/O,k=B/W,se=A/2,te=B/2,fe=N/2,de=O+1,ce=W+1;let he=0,H=0;const ue=new j;for(let ee=0;ee<ce;ee++){const F=ee*k-te;for(let le=0;le<de;le++){const Pe=le*R-se;ue[E]=Pe*I,ue[S]=F*C,ue[x]=fe,d.push(ue.x,ue.y,ue.z),ue[E]=0,ue[S]=0,ue[x]=N>0?1:-1,g.push(ue.x,ue.y,ue.z),m.push(le/O),m.push(1-ee/W),he+=1}}for(let ee=0;ee<W;ee++)for(let F=0;F<O;F++){const le=v+F+de*ee,Pe=v+F+de*(ee+1),re=v+(F+1)+de*(ee+1),pe=v+(F+1)+de*ee;h.push(le,Pe,pe),h.push(Pe,re,pe),H+=6}u.addGroup(_,H,P),_+=H,v+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zn(o){const e={};for(let t=0;t<o.length;t++){const i=bo(o[t]);for(const s in i)e[s]=i[s]}return e}function wx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function N0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Cc={clone:bo,merge:Zn};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class F0 extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qr=new j,vg=new ct,_g=new ct;class li extends F0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,vg,_g),t.subVectors(_g,vg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,co=1;class Rx extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new li(lo,co,e,t);s.layers=this.layers,this.add(s);const a=new li(lo,co,e,t);a.layers=this.layers,this.add(a);const c=new li(lo,co,e,t);c.layers=this.layers,this.add(c);const u=new li(lo,co,e,t);u.layers=this.layers,this.add(u);const h=new li(lo,co,e,t);h.layers=this.layers,this.add(h);const d=new li(lo,co,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===gr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,g),e.setRenderTarget(m,v,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class O0 extends Sn{constructor(e,t,i,s,a,c,u,h,d,g){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,i,s,a,c,u,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bx extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new O0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ki(5,5,5),a=new Jn({name:"CubemapFromEquirect",uniforms:bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:_r});a.uniforms.tEquirect.value=t;const c=new Ut(s,a),u=t.minFilter;return t.minFilter===ws&&(t.minFilter=$i),new Rx(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class Px extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yg=new j,xg=new Dt,Sg=new Dt,Lx=new j,Mg=new Ke,rc=new j,Hf=new ns,Eg=new Ke,Gf=new rd;class Dx extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qm,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ts),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ns),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hf.copy(this.boundingSphere),Hf.applyMatrix4(s),e.ray.intersectsSphere(Hf)!==!1&&(Eg.copy(s).invert(),Gf.copy(e.ray).applyMatrix4(Eg),!(this.boundingBox!==null&&Gf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===by?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;xg.fromBufferAttribute(s.attributes.skinIndex,e),Sg.fromBufferAttribute(s.attributes.skinWeight,e),yg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Sg.getComponent(a);if(c!==0){const u=xg.getComponent(a);Mg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(Lx.copy(yg).applyMatrix4(Mg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gh extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class k0 extends Sn{constructor(e=null,t=1,i=1,s,a,c,u,h,d=gi,g=gi,m,v){super(null,c,u,h,d,g,s,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tg=new Ke,Ix=new Ke;class ad{constructor(e=[],t=[]){this.uuid=es(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:Ix;Tg.multiplyMatrices(u,t[a]),Tg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ad(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new k0(t,e,e,Ai,Vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Gh),this.bones.push(c),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class wg extends Hi{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const uo=new Ke,Ag=new Ke,sc=[],Cg=new ts,Ux=new Ke,ya=new Ut,xa=new ns;class Nx extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,uo),Cg.copy(e.boundingBox).applyMatrix4(uo),this.boundingBox.union(Cg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,uo),xa.copy(e.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,uo),Ag.multiplyMatrices(i,uo),ya.matrixWorld=Ag,ya.raycast(e,sc);for(let c=0,u=sc.length;c<u;c++){const h=sc[c];h.instanceId=a,h.object=this,t.push(h)}sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new k0(new Float32Array(s*this.count),s,this.count,Jh,Vi));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=u,a.set(i,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Wf=new j,Fx=new j,Ox=new yt;class Ss{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wf.subVectors(i,t).cross(Fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ox.getNormalMatrix(e),s=this.coplanarPoint(Wf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new ns,oc=new j;class ld{constructor(e=new Ss,t=new Ss,i=new Ss,s=new Ss,a=new Ss,c=new Ss){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],h=s[3],d=s[4],g=s[5],m=s[6],v=s[7],_=s[8],M=s[9],E=s[10],S=s[11],x=s[12],I=s[13],C=s[14],A=s[15];if(i[0].setComponents(h-a,v-d,S-_,A-x).normalize(),i[1].setComponents(h+a,v+d,S+_,A+x).normalize(),i[2].setComponents(h+c,v+g,S+M,A+I).normalize(),i[3].setComponents(h-c,v-g,S-M,A-I).normalize(),i[4].setComponents(h-u,v-m,S-E,A-C).normalize(),t===gr)i[5].setComponents(h+u,v+m,S+E,A+C).normalize();else if(t===Ac)i[5].setComponents(u,m,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B0 extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new j,bc=new j,Rg=new Ke,Sa=new rd,ac=new ns,Xf=new j,bg=new j;class kx extends zt{constructor(e=new ei,t=new B0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Rc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Rc.distanceTo(bc);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),ac.radius+=a,e.ray.intersectsSphere(ac)===!1)return;Rg.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(Rg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=this.isLineSegments?2:1,g=i.index,v=i.attributes.position;if(g!==null){const _=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=_,S=M-1;E<S;E+=d){const x=g.getX(E),I=g.getX(E+1),C=lc(this,e,Sa,h,x,I);C&&t.push(C)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(_),x=lc(this,e,Sa,h,E,S);x&&t.push(x)}}else{const _=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=_,S=M-1;E<S;E+=d){const x=lc(this,e,Sa,h,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=lc(this,e,Sa,h,M-1,_);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function lc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Rc.fromBufferAttribute(c,s),bc.fromBufferAttribute(c,a),t.distanceSqToSegment(Rc,bc,Xf,bg)>i)return;Xf.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Xf);if(!(h<e.near||h>e.far))return{distance:h,point:bg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}class vr extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class z0 extends Sn{constructor(e,t,i,s,a,c,u,h,d,g=xo){if(g!==xo&&g!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&g===xo&&(i=As),i===void 0&&g===Ao&&(i=wo),super(null,s,a,c,u,h,g,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:gi,this.minFilter=h!==void 0?h:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bx{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,h=a-1,d;for(;u<=h;)if(s=Math.floor(u+(h-u)/2),d=i[s]-c,d<0)u=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,i[s]===c)return s/(a-1);const g=i[s],v=i[s+1]-g,_=(c-g)/v;return(s+_)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),u=this.getPoint(a),h=t||(c.isVector2?new ct:new j);return h.copy(u).sub(c).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new j,s=[],a=[],c=[],u=new j,h=new Ke;for(let _=0;_<=e;_++){const M=_/e;s[_]=this.getTangentAt(M,new j)}a[0]=new j,c[0]=new j;let d=Number.MAX_VALUE;const g=Math.abs(s[0].x),m=Math.abs(s[0].y),v=Math.abs(s[0].z);g<=d&&(d=g,i.set(1,0,0)),m<=d&&(d=m,i.set(0,1,0)),v<=d&&i.set(0,0,1),u.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],u),c[0].crossVectors(s[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),c[_]=c[_-1].clone(),u.crossVectors(s[_-1],s[_]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(Rt(s[_-1].dot(s[_]),-1,1));a[_].applyMatrix4(h.makeRotationAxis(u,M))}c[_].crossVectors(s[_],a[_])}if(t===!0){let _=Math.acos(Rt(a[0].dot(a[e]),-1,1));_/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(_=-_);for(let M=1;M<=e;M++)a[M].applyMatrix4(h.makeRotationAxis(s[M],_*M)),c[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pc extends ei{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],c=[],u=[],h=[],d=new j,g=new ct;c.push(0,0,0),u.push(0,0,1),h.push(.5,.5);for(let m=0,v=3;m<=t;m++,v+=3){const _=i+m/t*s;d.x=e*Math.cos(_),d.y=e*Math.sin(_),c.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(c[v]/e+1)/2,g.y=(c[v+1]/e+1)/2,h.push(g.x,g.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zr extends ei{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const d=this;s=Math.floor(s),a=Math.floor(a);const g=[],m=[],v=[],_=[];let M=0;const E=[],S=i/2;let x=0;I(),c===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(_,2));function I(){const A=new j,B=new j;let N=0;const O=(t-e)/i;for(let W=0;W<=a;W++){const P=[],R=W/a,k=R*(t-e)+e;for(let se=0;se<=s;se++){const te=se/s,fe=te*h+u,de=Math.sin(fe),ce=Math.cos(fe);B.x=k*de,B.y=-R*i+S,B.z=k*ce,m.push(B.x,B.y,B.z),A.set(de,O,ce).normalize(),v.push(A.x,A.y,A.z),_.push(te,1-R),P.push(M++)}E.push(P)}for(let W=0;W<s;W++)for(let P=0;P<a;P++){const R=E[P][W],k=E[P+1][W],se=E[P+1][W+1],te=E[P][W+1];(e>0||P!==0)&&(g.push(R,k,te),N+=3),(t>0||P!==a-1)&&(g.push(k,se,te),N+=3)}d.addGroup(x,N,0),x+=N}function C(A){const B=M,N=new ct,O=new j;let W=0;const P=A===!0?e:t,R=A===!0?1:-1;for(let se=1;se<=s;se++)m.push(0,S*R,0),v.push(0,R,0),_.push(.5,.5),M++;const k=M;for(let se=0;se<=s;se++){const fe=se/s*h+u,de=Math.cos(fe),ce=Math.sin(fe);O.x=P*ce,O.y=S*R,O.z=P*de,m.push(O.x,O.y,O.z),v.push(0,R,0),N.x=de*.5+.5,N.y=ce*.5*R+.5,_.push(N.x,N.y),M++}for(let se=0;se<s;se++){const te=B+se,fe=k+se;A===!0?g.push(fe,fe+1,te):g.push(fe+1,fe,te),W+=3}d.addGroup(x,W,A===!0?1:2),x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const zx={triangulate:function(o,e,t=2){const i=e&&e.length,s=i?e[0]*t:o.length;let a=V0(o,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,h,d,g,m,v,_;if(i&&(a=Xx(o,e,a,t)),o.length>80*t){u=d=o[0],h=g=o[1];for(let M=t;M<s;M+=t)m=o[M],v=o[M+1],m<u&&(u=m),v<h&&(h=v),m>d&&(d=m),v>g&&(g=v);_=Math.max(d-u,g-h),_=_!==0?32767/_:0}return Pa(a,c,t,u,h,_,0),c}};function V0(o,e,t,i,s){let a,c;if(s===nS(o,e,t,i)>0)for(a=e;a<t;a+=i)c=Pg(a,o[a],o[a+1],c);else for(a=t-i;a>=e;a-=i)c=Pg(a,o[a],o[a+1],c);return c&&Nc(c,c.next)&&(Da(c),c=c.next),c}function Cs(o,e){if(!o)return o;e||(e=o);let t=o,i;do if(i=!1,!t.steiner&&(Nc(t,t.next)||on(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pa(o,e,t,i,s,a,c){if(!o)return;!c&&a&&Kx(o,i,s,a);let u=o,h,d;for(;o.prev!==o.next;){if(h=o.prev,d=o.next,a?Hx(o,i,s,a):Vx(o)){e.push(h.i/t|0),e.push(o.i/t|0),e.push(d.i/t|0),Da(o),o=d.next,u=d.next;continue}if(o=d,o===u){c?c===1?(o=Gx(Cs(o),e,t),Pa(o,e,t,i,s,a,2)):c===2&&Wx(o,e,t,i,s,a):Pa(Cs(o),e,t,i,s,a,1);break}}}function Vx(o){const e=o.prev,t=o,i=o.next;if(on(e,t,i)>=0)return!1;const s=e.x,a=t.x,c=i.x,u=e.y,h=t.y,d=i.y,g=s<a?s<c?s:c:a<c?a:c,m=u<h?u<d?u:d:h<d?h:d,v=s>a?s>c?s:c:a>c?a:c,_=u>h?u>d?u:d:h>d?h:d;let M=i.next;for(;M!==e;){if(M.x>=g&&M.x<=v&&M.y>=m&&M.y<=_&&go(s,u,a,h,c,d,M.x,M.y)&&on(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Hx(o,e,t,i){const s=o.prev,a=o,c=o.next;if(on(s,a,c)>=0)return!1;const u=s.x,h=a.x,d=c.x,g=s.y,m=a.y,v=c.y,_=u<h?u<d?u:d:h<d?h:d,M=g<m?g<v?g:v:m<v?m:v,E=u>h?u>d?u:d:h>d?h:d,S=g>m?g>v?g:v:m>v?m:v,x=Wh(_,M,e,t,i),I=Wh(E,S,e,t,i);let C=o.prevZ,A=o.nextZ;for(;C&&C.z>=x&&A&&A.z<=I;){if(C.x>=_&&C.x<=E&&C.y>=M&&C.y<=S&&C!==s&&C!==c&&go(u,g,h,m,d,v,C.x,C.y)&&on(C.prev,C,C.next)>=0||(C=C.prevZ,A.x>=_&&A.x<=E&&A.y>=M&&A.y<=S&&A!==s&&A!==c&&go(u,g,h,m,d,v,A.x,A.y)&&on(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;C&&C.z>=x;){if(C.x>=_&&C.x<=E&&C.y>=M&&C.y<=S&&C!==s&&C!==c&&go(u,g,h,m,d,v,C.x,C.y)&&on(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;A&&A.z<=I;){if(A.x>=_&&A.x<=E&&A.y>=M&&A.y<=S&&A!==s&&A!==c&&go(u,g,h,m,d,v,A.x,A.y)&&on(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Gx(o,e,t){let i=o;do{const s=i.prev,a=i.next.next;!Nc(s,a)&&H0(s,i,i.next,a)&&La(s,a)&&La(a,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Da(i),Da(i.next),i=o=a),i=i.next}while(i!==o);return Cs(i)}function Wx(o,e,t,i,s,a){let c=o;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&Jx(c,u)){let h=G0(c,u);c=Cs(c,c.next),h=Cs(h,h.next),Pa(c,e,t,i,s,a,0),Pa(h,e,t,i,s,a,0);return}u=u.next}c=c.next}while(c!==o)}function Xx(o,e,t,i){const s=[];let a,c,u,h,d;for(a=0,c=e.length;a<c;a++)u=e[a]*i,h=a<c-1?e[a+1]*i:o.length,d=V0(o,u,h,i,!1),d===d.next&&(d.steiner=!0),s.push(Qx(d));for(s.sort(jx),a=0;a<s.length;a++)t=Yx(s[a],t);return t}function jx(o,e){return o.x-e.x}function Yx(o,e){const t=qx(o,e);if(!t)return e;const i=G0(t,o);return Cs(i,i.next),Cs(t,t.next)}function qx(o,e){let t=e,i=-1/0,s;const a=o.x,c=o.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>i&&(i=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const u=s,h=s.x,d=s.y;let g=1/0,m;t=s;do a>=t.x&&t.x>=h&&a!==t.x&&go(c<d?a:i,c,h,d,c<d?i:a,c,t.x,t.y)&&(m=Math.abs(c-t.y)/(a-t.x),La(t,o)&&(m<g||m===g&&(t.x>s.x||t.x===s.x&&$x(s,t)))&&(s=t,g=m)),t=t.next;while(t!==u);return s}function $x(o,e){return on(o.prev,o,e.prev)<0&&on(e.next,o,o.next)<0}function Kx(o,e,t,i){let s=o;do s.z===0&&(s.z=Wh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,Zx(s)}function Zx(o){let e,t,i,s,a,c,u,h,d=1;do{for(t=o,o=null,a=null,c=0;t;){for(c++,i=t,u=0,e=0;e<d&&(u++,i=i.nextZ,!!i);e++);for(h=d;u>0||h>0&&i;)u!==0&&(h===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,u--):(s=i,i=i.nextZ,h--),a?a.nextZ=s:o=s,s.prevZ=a,a=s;t=i}a.nextZ=null,d*=2}while(c>1);return o}function Wh(o,e,t,i,s){return o=(o-t)*s|0,e=(e-i)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function Qx(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function go(o,e,t,i,s,a,c,u){return(s-c)*(e-u)>=(o-c)*(a-u)&&(o-c)*(i-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(s-c)*(i-u)}function Jx(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!eS(o,e)&&(La(o,e)&&La(e,o)&&tS(o,e)&&(on(o.prev,o,e.prev)||on(o,e.prev,e))||Nc(o,e)&&on(o.prev,o,o.next)>0&&on(e.prev,e,e.next)>0)}function on(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Nc(o,e){return o.x===e.x&&o.y===e.y}function H0(o,e,t,i){const s=uc(on(o,e,t)),a=uc(on(o,e,i)),c=uc(on(t,i,o)),u=uc(on(t,i,e));return!!(s!==a&&c!==u||s===0&&cc(o,t,e)||a===0&&cc(o,i,e)||c===0&&cc(t,o,i)||u===0&&cc(t,e,i))}function cc(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function uc(o){return o>0?1:o<0?-1:0}function eS(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&H0(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function La(o,e){return on(o.prev,o,o.next)<0?on(o,e,o.next)>=0&&on(o,o.prev,e)>=0:on(o,e,o.prev)<0||on(o,o.next,e)<0}function tS(o,e){let t=o,i=!1;const s=(o.x+e.x)/2,a=(o.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==o);return i}function G0(o,e){const t=new Xh(o.i,o.x,o.y),i=new Xh(e.i,e.x,e.y),s=o.next,a=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Pg(o,e,t,i){const s=new Xh(o,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Da(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Xh(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nS(o,e,t,i){let s=0;for(let a=e,c=t-i;a<t;a+=i)s+=(o[c]-o[a])*(o[a+1]+o[c+1]),c=a;return s}class cd{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return cd.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];Lg(e),Dg(i,e);let c=e.length;t.forEach(Lg);for(let h=0;h<t.length;h++)s.push(c),c+=t[h].length,Dg(i,t[h]);const u=zx.triangulate(i,s);for(let h=0;h<u.length;h+=3)a.push(u.slice(h,h+3));return a}}function Lg(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function Dg(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Oa extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),d=u+1,g=h+1,m=e/u,v=t/h,_=[],M=[],E=[],S=[];for(let x=0;x<g;x++){const I=x*v-c;for(let C=0;C<d;C++){const A=C*m-a;M.push(A,-I,0),E.push(0,0,1),S.push(C/u),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let I=0;I<u;I++){const C=I+d*x,A=I+d*(x+1),B=I+1+d*(x+1),N=I+1+d*x;_.push(C,A,N),_.push(A,B,N)}this.setIndex(_),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}class ud extends ei{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let d=0;const g=[],m=new j,v=new j,_=[],M=[],E=[],S=[];for(let x=0;x<=i;x++){const I=[],C=x/i;let A=0;x===0&&c===0?A=.5/t:x===i&&h===Math.PI&&(A=-.5/t);for(let B=0;B<=t;B++){const N=B/t;m.x=-e*Math.cos(s+N*a)*Math.sin(c+C*u),m.y=e*Math.cos(c+C*u),m.z=e*Math.sin(s+N*a)*Math.sin(c+C*u),M.push(m.x,m.y,m.z),v.copy(m).normalize(),E.push(v.x,v.y,v.z),S.push(N+A,1-C),I.push(d++)}g.push(I)}for(let x=0;x<i;x++)for(let I=0;I<t;I++){const C=g[x][I+1],A=g[x][I],B=g[x+1][I],N=g[x+1][I+1];(x!==0||c>0)&&_.push(C,A,N),(x!==i-1||h<Math.PI)&&_.push(A,B,N)}this.setIndex(_),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ig extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iS extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rS extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sS extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function oS(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function aS(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ug(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let h=0;h!==e;++h)s[c++]=o[u+h]}return s}function W0(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Fc{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lS extends Fc{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$m,endingEnd:$m}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],h=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case Km:a=e,u=2*t-i;break;case Zm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Km:c=e,h=2*i-t;break;case Zm:c=1,h=i+s[1]-s[0];break;default:c=e-1,h=t}const d=(i-t)*.5,g=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(h-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,g=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,_=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-v*S+2*v*E-v*M,I=(1+v)*S+(-1.5-2*v)*E+(-.5+v)*M+1,C=(-1-_)*S+(1.5+_)*E+.5*M,A=_*S-_*E;for(let B=0;B!==u;++B)a[B]=x*c[g+B]+I*c[d+B]+C*c[h+B]+A*c[m+B];return a}}class cS extends Fc{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,g=(i-t)/(s-t),m=1-g;for(let v=0;v!==u;++v)a[v]=c[d+v]*m+c[h+v]*g;return a}}class uS extends Fc{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tc:t=this.InterpolantFactoryMethodDiscrete;break;case Hh:t=this.InterpolantFactoryMethodLinear;break;case Mf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tc;case this.InterpolantFactoryMethodLinear:return Hh;case this.InterpolantFactoryMethodSmooth:return Mf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const h=i[u];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,h,c),e=!1;break}c=h}if(s!==void 0&&oS(s))for(let u=0,h=s.length;u!==h;++u){const d=s[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Mf,a=e.length-1;let c=1;for(let u=1;u<a;++u){let h=!1;const d=e[u],g=e[u+1];if(d!==g&&(u!==1||d!==e[0]))if(s)h=!0;else{const m=u*i,v=m-i,_=m+i;for(let M=0;M!==i;++M){const E=t[m+M];if(E!==t[v+M]||E!==t[_+M]){h=!0;break}}}if(h){if(u!==c){e[c]=e[u];const m=u*i,v=c*i;for(let _=0;_!==i;++_)t[v+_]=t[m+_]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,h=c*i,d=0;d!==i;++d)t[h+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=Hh;class Io extends Zi{constructor(e,t,i){super(e,t,i)}}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=Tc;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class X0 extends Zi{}X0.prototype.ValueTypeName="color";class Ia extends Zi{}Ia.prototype.ValueTypeName="number";class fS extends Fc{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=(i-t)/(s-t);let d=e*u;for(let g=d+u;d!==g;d+=4)ai.slerpFlat(a,0,c,d-u,c,d,h);return a}}class Po extends Zi{InterpolantFactoryMethodLinear(e){return new fS(this.times,this.values,this.getValueSize(),e)}}Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends Zi{constructor(e,t,i){super(e,t,i)}}Uo.prototype.ValueTypeName="string";Uo.prototype.ValueBufferType=Array;Uo.prototype.DefaultInterpolation=Tc;Uo.prototype.InterpolantFactoryMethodLinear=void 0;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ua extends Zi{}Ua.prototype.ValueTypeName="vector";class hS{constructor(e="",t=-1,i=[],s=Ly){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=es(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(pS(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Zi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let h=[],d=[];h.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const g=aS(h);h=Ug(h,1,g),d=Ug(d,1,g),!s&&h[0]===0&&(h.push(a),d.push(d[0])),c.push(new Ia(".morphTargetInfluences["+t[u].name+"]",h,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,h=e.length;u<h;u++){const d=e[u],g=d.name.match(a);if(g&&g.length>1){const m=g[1];let v=s[m];v||(s[m]=v=[]),v.push(d)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,v,_,M,E){if(_.length!==0){const S=[],x=[];W0(_,S,x,M),S.length!==0&&E.push(new m(v,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const v=d[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const _={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)_[v[M].morphTargets[E]]=-1;for(const E in _){const S=[],x=[];for(let I=0;I!==v[M].morphTargets.length;++I){const C=v[M];S.push(C.time),x.push(C.morphTarget===E?1:0)}s.push(new Ia(".morphTargetInfluence["+E+"]",S,x))}h=_.length*c}else{const _=".bones["+t[m].name+"]";i(Ua,_+".position",v,"pos",s),i(Po,_+".quaternion",v,"rot",s),i(Ua,_+".scale",v,"scl",s)}}return s.length===0?null:new this(a,h,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ia;case"vector":case"vector2":case"vector3":case"vector4":return Ua;case"color":return X0;case"quaternion":return Po;case"bool":case"boolean":return Io;case"string":return Uo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function pS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dS(o.type);if(o.times===void 0){const t=[],i=[];W0(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Lc={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class mS{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(g){u++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,m){return d.push(g,m),this},this.removeHandler=function(g){const m=d.indexOf(g);return m!==-1&&d.splice(m,2),this},this.getHandler=function(g){for(let m=0,v=d.length;m<v;m+=2){const _=d[m],M=d[m+1];if(_.global&&(_.lastIndex=0),_.test(g))return M}return null}}}const gS=new mS;class Rs{constructor(e){this.manager=e!==void 0?e:gS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const hr={};class vS extends Error{constructor(e,t){super(e),this.response=t}}class _S extends Rs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Lc.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(hr[e]!==void 0){hr[e].push({onLoad:t,onProgress:i,onError:s});return}hr[e]=[],hr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=hr[e],m=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),_=v?parseInt(v):0,M=_!==0;let E=0;const S=new ReadableStream({start(x){I();function I(){m.read().then(({done:C,value:A})=>{if(C)x.close();else{E+=A.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:_});for(let N=0,O=g.length;N<O;N++){const W=g[N];W.onProgress&&W.onProgress(B)}x.enqueue(A),I()}},C=>{x.error(C)})}}});return new Response(S)}else throw new vS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return d.json();default:if(u===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),v=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(v);return d.arrayBuffer().then(M=>_.decode(M))}}}).then(d=>{Lc.add(e,d);const g=hr[e];delete hr[e];for(let m=0,v=g.length;m<v;m++){const _=g[m];_.onLoad&&_.onLoad(d)}}).catch(d=>{const g=hr[e];if(g===void 0)throw this.manager.itemError(e),d;delete hr[e];for(let m=0,v=g.length;m<v;m++){const _=g[m];_.onError&&_.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yS extends Rs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Lc.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=ba("img");function h(){g(),Lc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(m){g(),s&&s(m),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){u.removeEventListener("load",h,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class xS extends Rs{constructor(e){super(e)}load(e,t,i,s){const a=new Sn,c=new yS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Oc extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jf=new Ke,Ng=new j,Fg=new j;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ng),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),jf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SS extends fd{constructor(){super(new li(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ro*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class MS extends Oc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new SS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Og=new Ke,Ma=new j,Yf=new j;class ES extends fd{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ma),Yf.copy(i.position),Yf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yf),i.updateMatrixWorld(),s.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Og.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Og)}}class kg extends Oc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ES}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Na extends F0{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=g*this.view.offsetY,h=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class TS extends fd{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j0 extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new TS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Y0 extends Oc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wS{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class AS extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bg(){return performance.now()}const hd="\\[\\]\\.:\\/",CS=new RegExp("["+hd+"]","g"),dd="[^"+hd+"]",RS="[^"+hd.replace("\\.","")+"]",bS=/((?:WC+[\/:])*)/.source.replace("WC",dd),PS=/(WCOD+)?/.source.replace("WCOD",RS),LS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),DS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),IS=new RegExp("^"+bS+PS+LS+DS+"$"),US=["material","materials","bones","map"];class NS{constructor(e,t,i){const s=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ht{constructor(e,t,i){this.path=t,this.parsedPath=i||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,t,i):new Ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CS,"")}static parseTrackName(e){const t=IS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);US.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const h=i(u.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=NS;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function zg(o,e,t,i){const s=FS(i);switch(t){case M0:return o*e;case T0:return o*e;case w0:return o*e*2;case Jh:return o*e/s.components*s.byteLength;case ed:return o*e/s.components*s.byteLength;case A0:return o*e*2/s.components*s.byteLength;case td:return o*e*2/s.components*s.byteLength;case E0:return o*e*3/s.components*s.byteLength;case Ai:return o*e*4/s.components*s.byteLength;case nd:return o*e*4/s.components*s.byteLength;case gc:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _c:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vh:case yh:return Math.max(o,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(o,8)*Math.max(e,8)/2;case xh:case Sh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xc:case Oh:case kh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case C0:case Bh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zh:case Vh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FS(o){switch(o){case Sr:case y0:return{byteLength:1,components:1};case Ra:case x0:case yr:return{byteLength:2,components:1};case Zh:case Qh:return{byteLength:2,components:4};case As:case Kh:case Vi:return{byteLength:4,components:1};case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function OS(o){const e=new WeakMap;function t(u,h){const d=u.array,g=u.usage,m=d.byteLength,v=o.createBuffer();o.bindBuffer(h,v),o.bufferData(h,d,g),u.onUploadCallback();let _;if(d instanceof Float32Array)_=o.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?_=o.HALF_FLOAT:_=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=o.SHORT;else if(d instanceof Uint32Array)_=o.UNSIGNED_INT;else if(d instanceof Int32Array)_=o.INT;else if(d instanceof Int8Array)_=o.BYTE;else if(d instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,h,d){const g=h.array,m=h.updateRanges;if(o.bindBuffer(d,u),m.length===0)o.bufferSubData(d,0,g);else{m.sort((_,M)=>_.start-M.start);let v=0;for(let _=1;_<m.length;_++){const M=m[v],E=m[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,m[v]=E)}m.length=v+1;for(let _=0,M=m.length;_<M;_++){const E=m[_];o.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(o.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:s,remove:a,update:c}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ME=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:kS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:VS,alphatest_fragment:HS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:XS,batching_pars_vertex:jS,batching_vertex:YS,begin_vertex:qS,beginnormal_vertex:$S,bsdfs:KS,iridescence_fragment:ZS,bumpmap_pars_fragment:QS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:aM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:hM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:_M,envmap_pars_vertex:yM,envmap_physical_pars_fragment:PM,envmap_vertex:xM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:AM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:RM,lights_pars_begin:bM,lights_toon_fragment:LM,lights_toon_pars_fragment:DM,lights_phong_fragment:IM,lights_phong_pars_fragment:UM,lights_physical_fragment:NM,lights_physical_pars_fragment:FM,lights_fragment_begin:OM,lights_fragment_maps:kM,lights_fragment_end:BM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:GM,map_fragment:WM,map_pars_fragment:XM,map_particle_fragment:jM,map_particle_pars_fragment:YM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:$M,morphinstance_vertex:KM,morphcolor_vertex:ZM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:hE,premultiplied_alpha_fragment:dE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:_E,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:xE,shadowmap_vertex:SE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:wE,skinnormal_vertex:AE,specularmap_fragment:CE,specularmap_pars_fragment:RE,tonemapping_fragment:bE,tonemapping_pars_fragment:PE,transmission_fragment:LE,transmission_pars_fragment:DE,uv_pars_fragment:IE,uv_pars_vertex:UE,uv_vertex:NE,worldpos_vertex:FE,background_vert:OE,background_frag:kE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:VE,cube_frag:HE,depth_vert:GE,depth_frag:WE,distanceRGBA_vert:XE,distanceRGBA_frag:jE,equirect_vert:YE,equirect_frag:qE,linedashed_vert:$E,linedashed_frag:KE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:e1,meshmatcap_vert:t1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:r1,meshphong_vert:s1,meshphong_frag:o1,meshphysical_vert:a1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:f1,points_frag:h1,shadow_vert:d1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},De={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},qi={basic:{uniforms:Zn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Zn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new it(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Zn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Zn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Zn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new it(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Zn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Zn([De.points,De.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Zn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Zn([De.common,De.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Zn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Zn([De.sprite,De.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Zn([De.common,De.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Zn([De.lights,De.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};qi.physical={uniforms:Zn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const hc={r:0,b:0,g:0},ys=new xn,v1=new Ke;function _1(o,e,t,i,s,a,c){const u=new it(0);let h=a===!0?0:1,d,g,m=null,v=0,_=null;function M(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A)),A}function E(C){let A=!1;const B=M(C);B===null?x(u,h):B&&B.isColor&&(x(B,1),A=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(C,A){const B=M(A);B&&(B.isCubeTexture||B.mapping===Ic)?(g===void 0&&(g=new Ut(new Ki(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:bo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),ys.copy(A.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(ys)),g.material.toneMapped=Tt.getTransfer(B.colorSpace)!==Yt,(m!==B||v!==B.version||_!==o.toneMapping)&&(g.material.needsUpdate=!0,m=B,v=B.version,_=o.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new Ut(new Oa(2,2),new Jn({name:"BackgroundMaterial",uniforms:bo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(B.colorSpace)!==Yt,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(m!==B||v!==B.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,m=B,v=B.version,_=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function x(C,A){C.getRGB(hc,N0(o)),i.buffers.color.setClear(hc.r,hc.g,hc.b,A,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(C,A=1){u.set(C),h=A,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,x(u,h)},render:E,addToRenderList:S,dispose:I}}function y1(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=v(null);let a=s,c=!1;function u(R,k,se,te,fe){let de=!1;const ce=m(te,se,k);a!==ce&&(a=ce,d(a.object)),de=_(R,te,se,fe),de&&M(R,te,se,fe),fe!==null&&e.update(fe,o.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,A(R,k,se,te),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function m(R,k,se){const te=se.wireframe===!0;let fe=i[R.id];fe===void 0&&(fe={},i[R.id]=fe);let de=fe[k.id];de===void 0&&(de={},fe[k.id]=de);let ce=de[te];return ce===void 0&&(ce=v(h()),de[te]=ce),ce}function v(R){const k=[],se=[],te=[];for(let fe=0;fe<t;fe++)k[fe]=0,se[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:te,object:R,attributes:{},index:null}}function _(R,k,se,te){const fe=a.attributes,de=k.attributes;let ce=0;const he=se.getAttributes();for(const H in he)if(he[H].location>=0){const ee=fe[H];let F=de[H];if(F===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),ee===void 0||ee.attribute!==F||F&&ee.data!==F.data)return!0;ce++}return a.attributesNum!==ce||a.index!==te}function M(R,k,se,te){const fe={},de=k.attributes;let ce=0;const he=se.getAttributes();for(const H in he)if(he[H].location>=0){let ee=de[H];ee===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));const F={};F.attribute=ee,ee&&ee.data&&(F.data=ee.data),fe[H]=F,ce++}a.attributes=fe,a.attributesNum=ce,a.index=te}function E(){const R=a.newAttributes;for(let k=0,se=R.length;k<se;k++)R[k]=0}function S(R){x(R,0)}function x(R,k){const se=a.newAttributes,te=a.enabledAttributes,fe=a.attributeDivisors;se[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),fe[R]!==k&&(o.vertexAttribDivisor(R,k),fe[R]=k)}function I(){const R=a.newAttributes,k=a.enabledAttributes;for(let se=0,te=k.length;se<te;se++)k[se]!==R[se]&&(o.disableVertexAttribArray(se),k[se]=0)}function C(R,k,se,te,fe,de,ce){ce===!0?o.vertexAttribIPointer(R,k,se,fe,de):o.vertexAttribPointer(R,k,se,te,fe,de)}function A(R,k,se,te){E();const fe=te.attributes,de=se.getAttributes(),ce=k.defaultAttributeValues;for(const he in de){const H=de[he];if(H.location>=0){let ue=fe[he];if(ue===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const ee=ue.normalized,F=ue.itemSize,le=e.get(ue);if(le===void 0)continue;const Pe=le.buffer,re=le.type,pe=le.bytesPerElement,Se=re===o.INT||re===o.UNSIGNED_INT||ue.gpuType===Kh;if(ue.isInterleavedBufferAttribute){const ve=ue.data,Ae=ve.stride,Ie=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<H.locationSize;Qe++)x(H.location+Qe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<H.locationSize;Qe++)S(H.location+Qe);o.bindBuffer(o.ARRAY_BUFFER,Pe);for(let Qe=0;Qe<H.locationSize;Qe++)C(H.location+Qe,F/H.locationSize,re,ee,Ae*pe,(Ie+F/H.locationSize*Qe)*pe,Se)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)x(H.location+ve,ue.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<H.locationSize;ve++)S(H.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Pe);for(let ve=0;ve<H.locationSize;ve++)C(H.location+ve,F/H.locationSize,re,ee,F*pe,F/H.locationSize*ve*pe,Se)}}else if(ce!==void 0){const ee=ce[he];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(H.location,ee);break;case 3:o.vertexAttrib3fv(H.location,ee);break;case 4:o.vertexAttrib4fv(H.location,ee);break;default:o.vertexAttrib1fv(H.location,ee)}}}}I()}function B(){W();for(const R in i){const k=i[R];for(const se in k){const te=k[se];for(const fe in te)g(te[fe].object),delete te[fe];delete k[se]}delete i[R]}}function N(R){if(i[R.id]===void 0)return;const k=i[R.id];for(const se in k){const te=k[se];for(const fe in te)g(te[fe].object),delete te[fe];delete k[se]}delete i[R.id]}function O(R){for(const k in i){const se=i[k];if(se[R.id]===void 0)continue;const te=se[R.id];for(const fe in te)g(te[fe].object),delete te[fe];delete se[R.id]}}function W(){P(),c=!0,a!==s&&(a=s,d(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:W,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:S,disableUnusedAttributes:I}}function x1(o,e,t){let i;function s(d){i=d}function a(d,g){o.drawArrays(i,d,g),t.update(g,i,1)}function c(d,g,m){m!==0&&(o.drawArraysInstanced(i,d,g,m),t.update(g,i,m))}function u(d,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,g,0,m);let _=0;for(let M=0;M<m;M++)_+=g[M];t.update(_,i,1)}function h(d,g,m,v){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<d.length;M++)c(d[M],g[M],v[M]);else{_.multiDrawArraysInstancedWEBGL(i,d,0,g,0,v,0,m);let M=0;for(let E=0;E<m;E++)M+=g[E]*v[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function S1(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Ai&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const W=O===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Sr&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!W)}function h(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:B,maxSamples:N}}function M1(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Ss,u=new yt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||s;return s=v,i=m.length,_},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,_){const M=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!s||M===null||M.length===0||a&&!S)a?g(null):d();else{const I=a?0:i,C=I*4;let A=x.clippingState||null;h.value=A,A=g(M,v,C,_);for(let B=0;B!==C;++B)A[B]=t[B];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(m,v,_,M){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const x=_+E*4,I=v.matrixWorldInverse;u.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,A=_;C!==E;++C,A+=4)c.copy(m[C]).applyMatrix4(I,u),c.normal.toArray(S,A),S[A+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function E1(o){let e=new WeakMap;function t(c,u){return u===Ec?c.mapping=Eo:u===ph&&(c.mapping=To),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Ec||u===ph)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new bx(h.height);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const vo=4,Vg=[.125,.215,.35,.446,.526,.582],Ts=20,qf=new Na,Hg=new it;let $f=null,Kf=0,Zf=0,Qf=!1;const Ms=(1+Math.sqrt(5))/2,fo=1/Ms,Gg=[new j(-Ms,fo,0),new j(Ms,fo,0),new j(-fo,0,Ms),new j(fo,0,Ms),new j(0,Ms,-fo),new j(0,Ms,fo),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:yr,format:Ai,colorSpace:Co,depthBuffer:!1},s=Xg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T1(a)),this._blurMaterial=w1(a,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,qf)}_sceneToCubeUV(e,t,i,s){const u=new li(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,v=g.toneMapping;g.getClearColor(Hg),g.toneMapping=Qr,g.autoClear=!1;const _=new sd({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),M=new Ut(new Ki,_);let E=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,E=!0):(_.color.copy(Hg),E=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(u.up.set(0,h[x],0),u.lookAt(d[x],0,0)):I===1?(u.up.set(0,0,h[x]),u.lookAt(0,d[x],0)):(u.up.set(0,h[x],0),u.lookAt(0,0,d[x]));const C=this._cubeSize;dc(s,I*C,x>2?C:0,C,C),g.setRenderTarget(s),E&&g.render(M,u),g.render(e,u)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=m,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Eo||e.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Ut(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;dc(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,qf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Gg[(s-a-1)%Gg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new Ut(this._lodPlanes[s],d),v=d.uniforms,_=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Ts-1),E=a/M,S=isFinite(a)?1+Math.floor(g*E):Ts;S>Ts&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ts}`);const x=[];let I=0;for(let O=0;O<Ts;++O){const W=O/E,P=Math.exp(-W*W/2);x.push(P),O===0?I+=P:O<S&&(I+=2*P)}for(let O=0;O<x.length;O++)x[O]=x[O]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-i;const A=this._sizeLods[s],B=3*A*(s>C-vo?s-C+vo:0),N=4*(this._cubeSize-A);dc(t,B,N,3*A,2*A),h.setRenderTarget(t),h.render(m,qf)}}function T1(o){const e=[],t=[],i=[];let s=o;const a=o-vo+1+Vg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let h=1/u;c>o-vo?h=Vg[c-o+vo-1]:c===0&&(h=0),i.push(h);const d=1/(u-2),g=-d,m=1+d,v=[g,g,m,g,m,m,g,g,m,m,g,m],_=6,M=6,E=3,S=2,x=1,I=new Float32Array(E*M*_),C=new Float32Array(S*M*_),A=new Float32Array(x*M*_);for(let N=0;N<_;N++){const O=N%3*2/3-1,W=N>2?0:-1,P=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];I.set(P,E*M*N),C.set(v,S*M*N);const R=[N,N,N,N,N,N];A.set(R,x*M*N)}const B=new ei;B.setAttribute("position",new Hi(I,E)),B.setAttribute("uv",new Hi(C,S)),B.setAttribute("faceIndex",new Hi(A,x)),e.push(B),s>vo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xg(o,e,t){const i=new Ri(o,e,t);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function w1(o,e,t){const i=new Float32Array(Ts),s=new j(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function jg(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Yg(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function pd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A1(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const h=u.mapping,d=h===Ec||h===ph,g=h===Eo||h===To;if(d||g){let m=e.get(u);const v=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new Wg(o)),m=d?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return d&&_&&_.height>0||g&&_&&s(_)?(t===null&&(t=new Wg(o)),m=d?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function s(u){let h=0;const d=6;for(let g=0;g<d;g++)u[g]!==void 0&&h++;return h===d}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function C1(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R1(o,e,t,i){const s={},a=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete s[v.id];const _=a.get(v);_&&(e.remove(_),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(m,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function h(m){const v=m.attributes;for(const _ in v)e.update(v[_],o.ARRAY_BUFFER)}function d(m){const v=[],_=m.index,M=m.attributes.position;let E=0;if(_!==null){const I=_.array;E=_.version;for(let C=0,A=I.length;C<A;C+=3){const B=I[C+0],N=I[C+1],O=I[C+2];v.push(B,N,N,O,O,B)}}else if(M!==void 0){const I=M.array;E=M.version;for(let C=0,A=I.length/3-1;C<A;C+=3){const B=C+0,N=C+1,O=C+2;v.push(B,N,N,O,O,B)}}else return;const S=new(b0(v)?U0:od)(v,1);S.version=E;const x=a.get(m);x&&e.remove(x),a.set(m,S)}function g(m){const v=a.get(m);if(v){const _=m.index;_!==null&&v.version<_.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:h,getWireframeAttribute:g}}function b1(o,e,t){let i;function s(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function h(v,_){o.drawElements(i,_,a,v*c),t.update(_,i,1)}function d(v,_,M){M!==0&&(o.drawElementsInstanced(i,_,a,v*c,M),t.update(_,i,M))}function g(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,v,0,M);let S=0;for(let x=0;x<M;x++)S+=_[x];t.update(S,i,1)}function m(v,_,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,_[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,_,0,a,v,0,E,0,M);let x=0;for(let I=0;I<M;I++)x+=_[I]*E[I];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function P1(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function L1(o,e,t){const i=new WeakMap,s=new Dt;function a(c,u,h){const d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let v=i.get(u);if(v===void 0||v.count!==m){let R=function(){W.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var _=R;v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),S===!0&&(A=3);let B=u.attributes.position.count*A,N=1;B>e.maxTextureSize&&(N=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*N*4*m),W=new L0(O,B,N,m);W.type=Vi,W.needsUpdate=!0;const P=A*4;for(let k=0;k<m;k++){const se=x[k],te=I[k],fe=C[k],de=B*N*4*k;for(let ce=0;ce<se.count;ce++){const he=ce*P;M===!0&&(s.fromBufferAttribute(se,ce),O[de+he+0]=s.x,O[de+he+1]=s.y,O[de+he+2]=s.z,O[de+he+3]=0),E===!0&&(s.fromBufferAttribute(te,ce),O[de+he+4]=s.x,O[de+he+5]=s.y,O[de+he+6]=s.z,O[de+he+7]=0),S===!0&&(s.fromBufferAttribute(fe,ce),O[de+he+8]=s.x,O[de+he+9]=s.y,O[de+he+10]=s.z,O[de+he+11]=fe.itemSize===4?s.w:1)}}v={count:m,texture:W,size:new ct(B,N)},i.set(u,v),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",E),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:a}}function D1(o,e,t,i){let s=new WeakMap;function a(h){const d=i.render.frame,g=h.geometry,m=e.get(h,g);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return m}function c(){s=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const K0=new Sn,qg=new z0(1,1),Z0=new L0,Q0=new px,J0=new O0,$g=[],Kg=[],Zg=new Float32Array(16),Qg=new Float32Array(9),Jg=new Float32Array(4);function No(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=$g[s];if(a===void 0&&(a=new Float32Array(s),$g[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function Mn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function En(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function kc(o,e){let t=Kg[e];t===void 0&&(t=new Int32Array(e),Kg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function I1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function U1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;o.uniform2fv(this.addr,e),En(t,e)}}function N1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;o.uniform3fv(this.addr,e),En(t,e)}}function F1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;o.uniform4fv(this.addr,e),En(t,e)}}function O1(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,i))return;Jg.set(i),o.uniformMatrix2fv(this.addr,!1,Jg),En(t,i)}}function k1(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,i))return;Qg.set(i),o.uniformMatrix3fv(this.addr,!1,Qg),En(t,i)}}function B1(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,i))return;Zg.set(i),o.uniformMatrix4fv(this.addr,!1,Zg),En(t,i)}}function z1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function V1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;o.uniform2iv(this.addr,e),En(t,e)}}function H1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;o.uniform3iv(this.addr,e),En(t,e)}}function G1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;o.uniform4iv(this.addr,e),En(t,e)}}function W1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function X1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;o.uniform2uiv(this.addr,e),En(t,e)}}function j1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;o.uniform3uiv(this.addr,e),En(t,e)}}function Y1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;o.uniform4uiv(this.addr,e),En(t,e)}}function q1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(qg.compareFunction=R0,a=qg):a=K0,t.setTexture2D(e||a,s)}function $1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Q0,s)}function K1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||J0,s)}function Z1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Z0,s)}function Q1(o){switch(o){case 5126:return I1;case 35664:return U1;case 35665:return N1;case 35666:return F1;case 35674:return O1;case 35675:return k1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return V1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return j1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}function J1(o,e){o.uniform1fv(this.addr,e)}function eT(o,e){const t=No(e,this.size,2);o.uniform2fv(this.addr,t)}function tT(o,e){const t=No(e,this.size,3);o.uniform3fv(this.addr,t)}function nT(o,e){const t=No(e,this.size,4);o.uniform4fv(this.addr,t)}function iT(o,e){const t=No(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function rT(o,e){const t=No(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function sT(o,e){const t=No(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function oT(o,e){o.uniform1iv(this.addr,e)}function aT(o,e){o.uniform2iv(this.addr,e)}function lT(o,e){o.uniform3iv(this.addr,e)}function cT(o,e){o.uniform4iv(this.addr,e)}function uT(o,e){o.uniform1uiv(this.addr,e)}function fT(o,e){o.uniform2uiv(this.addr,e)}function hT(o,e){o.uniform3uiv(this.addr,e)}function dT(o,e){o.uniform4uiv(this.addr,e)}function pT(o,e,t){const i=this.cache,s=e.length,a=kc(t,s);Mn(i,a)||(o.uniform1iv(this.addr,a),En(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||K0,a[c])}function mT(o,e,t){const i=this.cache,s=e.length,a=kc(t,s);Mn(i,a)||(o.uniform1iv(this.addr,a),En(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Q0,a[c])}function gT(o,e,t){const i=this.cache,s=e.length,a=kc(t,s);Mn(i,a)||(o.uniform1iv(this.addr,a),En(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||J0,a[c])}function vT(o,e,t){const i=this.cache,s=e.length,a=kc(t,s);Mn(i,a)||(o.uniform1iv(this.addr,a),En(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Z0,a[c])}function _T(o){switch(o){case 5126:return J1;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return rT;case 35676:return sT;case 5124:case 35670:return oT;case 35667:case 35671:return aT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return fT;case 36295:return hT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return vT}}class yT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}}class xT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_T(t.type)}}class ST{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function e0(o,e){o.seq.push(e),o.map[e.id]=e}function MT(o,e,t){const i=o.name,s=i.length;for(Jf.lastIndex=0;;){const a=Jf.exec(i),c=Jf.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===s){e0(t,d===void 0?new yT(u,o,e):new xT(u,o,e));break}else{let m=t.map[u];m===void 0&&(m=new ST(u),e0(t,m)),t=m}}}class Sc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);MT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function t0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const ET=37297;let TT=0;function wT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const n0=new yt;function AT(o){Tt._getMatrix(n0,Tt.workingColorSpace,o);const e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function i0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wT(o.getShaderSource(e),c)}else return s}function CT(o,e){const t=AT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RT(o,e){let t;switch(e){case My:t="Linear";break;case Ey:t="Reinhard";break;case Ty:t="Cineon";break;case wy:t="ACESFilmic";break;case Cy:t="AgX";break;case Ry:t="Neutral";break;case Ay:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pc=new j;function bT(){Tt.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function LT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Ea(o){return o!==""}function r0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(o){return o.replace(IT,NT)}const UT=new Map;function NT(o,e){let t=Et[e];if(t===void 0){const i=UT.get(e);if(i!==void 0)t=Et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}const FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(o){return o.replace(FT,OT)}function OT(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function a0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function BT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Eo:case To:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function VT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case xy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function HT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function GT(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=kT(t),d=BT(t),g=zT(t),m=VT(t),v=HT(t),_=PT(t),M=LT(a),E=s.createProgram();let S,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),x.length>0&&(x+=`
`)):(S=[a0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),x=[a0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qr?"#define TONE_MAPPING":"",t.toneMapping!==Qr?Et.tonemapping_pars_fragment:"",t.toneMapping!==Qr?RT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,CT("linearToOutputTexel",t.outputColorSpace),bT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),c=jh(c),c=r0(c,t),c=s0(c,t),u=jh(u),u=r0(u,t),u=s0(u,t),c=o0(c),u=o0(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=I+S+c,A=I+x+u,B=t0(s,s.VERTEX_SHADER,C),N=t0(s,s.FRAGMENT_SHADER,A);s.attachShader(E,B),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O(k){if(o.debug.checkShaderErrors){const se=s.getProgramInfoLog(E).trim(),te=s.getShaderInfoLog(B).trim(),fe=s.getShaderInfoLog(N).trim();let de=!0,ce=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,B,N);else{const he=i0(s,B,"vertex"),H=i0(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+he+`
`+H)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(te===""||fe==="")&&(ce=!1);ce&&(k.diagnostics={runnable:de,programLog:se,vertexShader:{log:te,prefix:S},fragmentShader:{log:fe,prefix:x}})}s.deleteShader(B),s.deleteShader(N),W=new Sc(s,E),P=DT(s,E)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,ET)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=B,this.fragmentShader=N,this}let WT=0;class XT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jT(e),t.set(e,i)),i}}class jT{constructor(e){this.id=WT++,this.code=e,this.usedTimes=0}}function YT(o,e,t,i,s,a,c){const u=new D0,h=new XT,d=new Set,g=[],m=s.logarithmicDepthBuffer,v=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return d.add(P),P===0?"uv":`uv${P}`}function S(P,R,k,se,te){const fe=se.fog,de=te.geometry,ce=P.isMeshStandardMaterial?se.environment:null,he=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),H=he&&he.mapping===Ic?he.image.height:null,ue=M[P.type];P.precision!==null&&(_=s.getMaxPrecision(P.precision),_!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",_,"instead."));const ee=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=ee!==void 0?ee.length:0;let le=0;de.morphAttributes.position!==void 0&&(le=1),de.morphAttributes.normal!==void 0&&(le=2),de.morphAttributes.color!==void 0&&(le=3);let Pe,re,pe,Se;if(ue){const at=qi[ue];Pe=at.vertexShader,re=at.fragmentShader}else Pe=P.vertexShader,re=P.fragmentShader,h.update(P),pe=h.getVertexShaderID(P),Se=h.getFragmentShaderID(P);const ve=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,Qe=te.isBatchedMesh===!0,Ft=!!P.map,xt=!!P.matcap,Gt=!!he,G=!!P.aoMap,Ln=!!P.lightMap,wt=!!P.bumpMap,mt=!!P.normalMap,He=!!P.displacementMap,bt=!!P.emissiveMap,ke=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,ie=P.clearcoat>0,ge=P.dispersion>0,_e=P.iridescence>0,me=P.sheen>0,je=P.transmission>0,Ce=w&&!!P.anisotropyMap,Ne=ie&&!!P.clearcoatMap,gt=ie&&!!P.clearcoatNormalMap,Ee=ie&&!!P.clearcoatRoughnessMap,Be=_e&&!!P.iridescenceMap,Je=_e&&!!P.iridescenceThicknessMap,nt=me&&!!P.sheenColorMap,ze=me&&!!P.sheenRoughnessMap,St=!!P.specularMap,ut=!!P.specularColorMap,Ot=!!P.specularIntensityMap,Y=je&&!!P.transmissionMap,Re=je&&!!P.thicknessMap,D=!!P.gradientMap,K=!!P.alphaMap,z=P.alphaTest>0,J=!!P.alphaHash,Ue=!!P.extensions;let rt=Qr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Pt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Pe,fragmentShader:re,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Co,alphaToCoverage:!!P.alphaToCoverage,map:Ft,matcap:xt,envMap:Gt,envMapMode:Gt&&he.mapping,envMapCubeUVHeight:H,aoMap:G,lightMap:Ln,bumpMap:wt,normalMap:mt,displacementMap:v&&He,emissiveMap:bt,normalMapObjectSpace:mt&&P.normalMapType===Uy,normalMapTangentSpace:mt&&P.normalMapType===Uc,metalnessMap:ke,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:ie,clearcoatMap:Ne,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:_e,iridescenceMap:Be,iridescenceThicknessMap:Je,sheen:me,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:St,specularColorMap:ut,specularIntensityMap:Ot,transmission:je,transmissionMap:Y,thicknessMap:Re,gradientMap:D,opaque:P.transparent===!1&&P.blending===yo&&P.alphaToCoverage===!1,alphaMap:K,alphaTest:z,alphaHash:J,combine:P.combine,mapUv:Ft&&E(P.map.channel),aoMapUv:G&&E(P.aoMap.channel),lightMapUv:Ln&&E(P.lightMap.channel),bumpMapUv:wt&&E(P.bumpMap.channel),normalMapUv:mt&&E(P.normalMap.channel),displacementMapUv:He&&E(P.displacementMap.channel),emissiveMapUv:bt&&E(P.emissiveMap.channel),metalnessMapUv:ke&&E(P.metalnessMap.channel),roughnessMapUv:L&&E(P.roughnessMap.channel),anisotropyMapUv:Ce&&E(P.anisotropyMap.channel),clearcoatMapUv:Ne&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:gt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(P.sheenRoughnessMap.channel),specularMapUv:St&&E(P.specularMap.channel),specularColorMapUv:ut&&E(P.specularColorMap.channel),specularIntensityMapUv:Ot&&E(P.specularIntensityMap.channel),transmissionMapUv:Y&&E(P.transmissionMap.channel),thicknessMapUv:Re&&E(P.thicknessMap.channel),alphaMapUv:K&&E(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(mt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&(Ft||K),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Ae,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ft&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Yt,decodeVideoTextureEmissive:bt&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Yt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===pr,flipSided:P.side===ci,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ue&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&P.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Pt.vertexUv1s=d.has(1),Pt.vertexUv2s=d.has(2),Pt.vertexUv3s=d.has(3),d.clear(),Pt}function x(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)R.push(k),R.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(I(R,P),C(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function I(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function C(P,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),P.push(u.mask)}function A(P){const R=M[P.type];let k;if(R){const se=qi[R];k=Cc.clone(se.uniforms)}else k=P.uniforms;return k}function B(P,R){let k;for(let se=0,te=g.length;se<te;se++){const fe=g[se];if(fe.cacheKey===R){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new GT(o,R,P,a),g.push(k)),k}function N(P){if(--P.usedTimes===0){const R=g.indexOf(P);g[R]=g[g.length-1],g.pop(),P.destroy()}}function O(P){h.remove(P)}function W(){h.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:B,releaseProgram:N,releaseShaderCache:O,programs:g,dispose:W}}function qT(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,h){o.get(c)[u]=h}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function $T(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function l0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function c0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m,v,_,M,E,S){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:v,material:_,groupOrder:M,renderOrder:m.renderOrder,z:E,group:S},o[e]=x):(x.id=m.id,x.object=m,x.geometry=v,x.material=_,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=E,x.group=S),e++,x}function u(m,v,_,M,E,S){const x=c(m,v,_,M,E,S);_.transmission>0?i.push(x):_.transparent===!0?s.push(x):t.push(x)}function h(m,v,_,M,E,S){const x=c(m,v,_,M,E,S);_.transmission>0?i.unshift(x):_.transparent===!0?s.unshift(x):t.unshift(x)}function d(m,v){t.length>1&&t.sort(m||$T),i.length>1&&i.sort(v||l0),s.length>1&&s.sort(v||l0)}function g(){for(let m=e,v=o.length;m<v;m++){const _=o[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:h,finish:g,sort:d}}function KT(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new c0,o.set(i,[c])):s>=a.length?(c=new c0,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function ZT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new it};break;case"SpotLight":t={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=t,t}}}function QT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let JT=0;function ew(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function tw(o){const e=new ZT,t=QT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new j);const s=new j,a=new Ke,c=new Ke;function u(d){let g=0,m=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let _=0,M=0,E=0,S=0,x=0,I=0,C=0,A=0,B=0,N=0,O=0;d.sort(ew);for(let P=0,R=d.length;P<R;P++){const k=d[P],se=k.color,te=k.intensity,fe=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=se.r*te,m+=se.g*te,v+=se.b*te;else if(k.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(k.sh.coefficients[ce],te);O++}else if(k.isDirectionalLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const he=k.shadow,H=t.get(k);H.shadowIntensity=he.intensity,H.shadowBias=he.bias,H.shadowNormalBias=he.normalBias,H.shadowRadius=he.radius,H.shadowMapSize=he.mapSize,i.directionalShadow[_]=H,i.directionalShadowMap[_]=de,i.directionalShadowMatrix[_]=k.shadow.matrix,I++}i.directional[_]=ce,_++}else if(k.isSpotLight){const ce=e.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(se).multiplyScalar(te),ce.distance=fe,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,i.spot[E]=ce;const he=k.shadow;if(k.map&&(i.spotLightMap[B]=k.map,B++,he.updateMatrices(k),k.castShadow&&N++),i.spotLightMatrix[E]=he.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=he.intensity,H.shadowBias=he.bias,H.shadowNormalBias=he.normalBias,H.shadowRadius=he.radius,H.shadowMapSize=he.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=de,A++}E++}else if(k.isRectAreaLight){const ce=e.get(k);ce.color.copy(se).multiplyScalar(te),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=ce,S++}else if(k.isPointLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const he=k.shadow,H=t.get(k);H.shadowIntensity=he.intensity,H.shadowBias=he.bias,H.shadowNormalBias=he.normalBias,H.shadowRadius=he.radius,H.shadowMapSize=he.mapSize,H.shadowCameraNear=he.camera.near,H.shadowCameraFar=he.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=k.shadow.matrix,C++}i.point[M]=ce,M++}else if(k.isHemisphereLight){const ce=e.get(k);ce.skyColor.copy(k.color).multiplyScalar(te),ce.groundColor.copy(k.groundColor).multiplyScalar(te),i.hemi[x]=ce,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=m,i.ambient[2]=v;const W=i.hash;(W.directionalLength!==_||W.pointLength!==M||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==x||W.numDirectionalShadows!==I||W.numPointShadows!==C||W.numSpotShadows!==A||W.numSpotMaps!==B||W.numLightProbes!==O)&&(i.directional.length=_,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+B-N,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,W.directionalLength=_,W.pointLength=M,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=x,W.numDirectionalShadows=I,W.numPointShadows=C,W.numSpotShadows=A,W.numSpotMaps=B,W.numLightProbes=O,i.version=JT++)}function h(d,g){let m=0,v=0,_=0,M=0,E=0;const S=g.matrixWorldInverse;for(let x=0,I=d.length;x<I;x++){const C=d[x];if(C.isDirectionalLight){const A=i.directional[m];A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),m++}else if(C.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),_++}else if(C.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),c.identity(),a.copy(C.matrixWorld),a.premultiply(S),c.extractRotation(a),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const A=i.point[v];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:u,setupView:h,state:i}}function u0(o){const e=new tw(o),t=[],i=[];function s(g){d.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function c(g){i.push(g)}function u(){e.setup(t)}function h(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function nw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new u0(o),e.set(s,[u])):a>=c.length?(u=new u0(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sw(o,e,t){let i=new ld;const s=new ct,a=new ct,c=new Dt,u=new rS({depthPacking:Iy}),h=new sS,d={},g=t.maxTextureSize,m={[Jr]:ci,[ci]:Jr,[pr]:pr},v=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:iw,fragmentShader:rw}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const M=new ei;M.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ut(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let x=this.type;this.render=function(N,O,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),se=o.state;se.setBlending(_r),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const te=x!==dr&&this.type===dr,fe=x===dr&&this.type!==dr;for(let de=0,ce=N.length;de<ce;de++){const he=N[de],H=he.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ue=H.getFrameExtents();if(s.multiply(ue),a.copy(H.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/ue.x),s.x=a.x*ue.x,H.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/ue.y),s.y=a.y*ue.y,H.mapSize.y=a.y)),H.map===null||te===!0||fe===!0){const F=this.type!==dr?{minFilter:gi,magFilter:gi}:{};H.map!==null&&H.map.dispose(),H.map=new Ri(s.x,s.y,F),H.map.texture.name=he.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const ee=H.getViewportCount();for(let F=0;F<ee;F++){const le=H.getViewport(F);c.set(a.x*le.x,a.y*le.y,a.x*le.z,a.y*le.w),se.viewport(c),H.updateMatrices(he,F),i=H.getFrustum(),A(O,W,H.camera,he,this.type)}H.isPointLightShadow!==!0&&this.type===dr&&I(H,W),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(P,R,k)};function I(N,O){const W=e.update(E);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ri(s.x,s.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,W,v,E,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,W,_,E,null)}function C(N,O,W,P){let R=null;const k=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)R=k;else if(R=W.isPointLight===!0?h:u,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const se=R.uuid,te=O.uuid;let fe=d[se];fe===void 0&&(fe={},d[se]=fe);let de=fe[te];de===void 0&&(de=R.clone(),fe[te]=de,O.addEventListener("dispose",B)),R=de}if(R.visible=O.visible,R.wireframe=O.wireframe,P===dr?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:m[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=o.properties.get(R);se.light=W}return R}function A(N,O,W,P,R){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===dr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const te=e.update(N),fe=N.material;if(Array.isArray(fe)){const de=te.groups;for(let ce=0,he=de.length;ce<he;ce++){const H=de[ce],ue=fe[H.materialIndex];if(ue&&ue.visible){const ee=C(N,ue,P,R);N.onBeforeShadow(o,N,O,W,te,ee,H),o.renderBufferDirect(W,null,te,ee,N,H),N.onAfterShadow(o,N,O,W,te,ee,H)}}}else if(fe.visible){const de=C(N,fe,P,R);N.onBeforeShadow(o,N,O,W,te,de,null),o.renderBufferDirect(W,null,te,de,N,null),N.onAfterShadow(o,N,O,W,te,de,null)}}const se=N.children;for(let te=0,fe=se.length;te<fe;te++)A(se[te],O,W,P,R)}function B(N){N.target.removeEventListener("dispose",B);for(const W in d){const P=d[W],R=N.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const ow={[ah]:lh,[ch]:hh,[uh]:dh,[Mo]:fh,[lh]:ah,[hh]:ch,[dh]:uh,[fh]:Mo};function aw(o,e){function t(){let Y=!1;const Re=new Dt;let D=null;const K=new Dt(0,0,0,0);return{setMask:function(z){D!==z&&!Y&&(o.colorMask(z,z,z,z),D=z)},setLocked:function(z){Y=z},setClear:function(z,J,Ue,rt,Pt){Pt===!0&&(z*=rt,J*=rt,Ue*=rt),Re.set(z,J,Ue,rt),K.equals(Re)===!1&&(o.clearColor(z,J,Ue,rt),K.copy(Re))},reset:function(){Y=!1,D=null,K.set(-1,0,0,0)}}}function i(){let Y=!1,Re=!1,D=null,K=null,z=null;return{setReversed:function(J){if(Re!==J){const Ue=e.get("EXT_clip_control");Re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const rt=z;z=null,this.setClear(rt)}Re=J},getReversed:function(){return Re},setTest:function(J){J?ve(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(J){D!==J&&!Y&&(o.depthMask(J),D=J)},setFunc:function(J){if(Re&&(J=ow[J]),K!==J){switch(J){case ah:o.depthFunc(o.NEVER);break;case lh:o.depthFunc(o.ALWAYS);break;case ch:o.depthFunc(o.LESS);break;case Mo:o.depthFunc(o.LEQUAL);break;case uh:o.depthFunc(o.EQUAL);break;case fh:o.depthFunc(o.GEQUAL);break;case hh:o.depthFunc(o.GREATER);break;case dh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}K=J}},setLocked:function(J){Y=J},setClear:function(J){z!==J&&(Re&&(J=1-J),o.clearDepth(J),z=J)},reset:function(){Y=!1,D=null,K=null,z=null,Re=!1}}}function s(){let Y=!1,Re=null,D=null,K=null,z=null,J=null,Ue=null,rt=null,Pt=null;return{setTest:function(at){Y||(at?ve(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(at){Re!==at&&!Y&&(o.stencilMask(at),Re=at)},setFunc:function(at,Wt,Mt){(D!==at||K!==Wt||z!==Mt)&&(o.stencilFunc(at,Wt,Mt),D=at,K=Wt,z=Mt)},setOp:function(at,Wt,Mt){(J!==at||Ue!==Wt||rt!==Mt)&&(o.stencilOp(at,Wt,Mt),J=at,Ue=Wt,rt=Mt)},setLocked:function(at){Y=at},setClear:function(at){Pt!==at&&(o.clearStencil(at),Pt=at)},reset:function(){Y=!1,Re=null,D=null,K=null,z=null,J=null,Ue=null,rt=null,Pt=null}}}const a=new t,c=new i,u=new s,h=new WeakMap,d=new WeakMap;let g={},m={},v=new WeakMap,_=[],M=null,E=!1,S=null,x=null,I=null,C=null,A=null,B=null,N=null,O=new it(0,0,0),W=0,P=!1,R=null,k=null,se=null,te=null,fe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,he=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(H)[1]),ce=he>=1):H.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ce=he>=2);let ue=null,ee={};const F=o.getParameter(o.SCISSOR_BOX),le=o.getParameter(o.VIEWPORT),Pe=new Dt().fromArray(F),re=new Dt().fromArray(le);function pe(Y,Re,D,K){const z=new Uint8Array(4),J=o.createTexture();o.bindTexture(Y,J),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ue=0;Ue<D;Ue++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,K,0,o.RGBA,o.UNSIGNED_BYTE,z):o.texImage2D(Re+Ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,z);return J}const Se={};Se[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(o.DEPTH_TEST),c.setFunc(Mo),wt(!1),mt(Xm),ve(o.CULL_FACE),G(_r);function ve(Y){g[Y]!==!0&&(o.enable(Y),g[Y]=!0)}function Ae(Y){g[Y]!==!1&&(o.disable(Y),g[Y]=!1)}function Ie(Y,Re){return m[Y]!==Re?(o.bindFramebuffer(Y,Re),m[Y]=Re,Y===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Re),Y===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(Y,Re){let D=_,K=!1;if(Y){D=v.get(Re),D===void 0&&(D=[],v.set(Re,D));const z=Y.textures;if(D.length!==z.length||D[0]!==o.COLOR_ATTACHMENT0){for(let J=0,Ue=z.length;J<Ue;J++)D[J]=o.COLOR_ATTACHMENT0+J;D.length=z.length,K=!0}}else D[0]!==o.BACK&&(D[0]=o.BACK,K=!0);K&&o.drawBuffers(D)}function Ft(Y){return M!==Y?(o.useProgram(Y),M=Y,!0):!1}const xt={[Es]:o.FUNC_ADD,[iy]:o.FUNC_SUBTRACT,[ry]:o.FUNC_REVERSE_SUBTRACT};xt[sy]=o.MIN,xt[oy]=o.MAX;const Gt={[ay]:o.ZERO,[ly]:o.ONE,[cy]:o.SRC_COLOR,[sh]:o.SRC_ALPHA,[my]:o.SRC_ALPHA_SATURATE,[dy]:o.DST_COLOR,[fy]:o.DST_ALPHA,[uy]:o.ONE_MINUS_SRC_COLOR,[oh]:o.ONE_MINUS_SRC_ALPHA,[py]:o.ONE_MINUS_DST_COLOR,[hy]:o.ONE_MINUS_DST_ALPHA,[gy]:o.CONSTANT_COLOR,[vy]:o.ONE_MINUS_CONSTANT_COLOR,[_y]:o.CONSTANT_ALPHA,[yy]:o.ONE_MINUS_CONSTANT_ALPHA};function G(Y,Re,D,K,z,J,Ue,rt,Pt,at){if(Y===_r){E===!0&&(Ae(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),Y!==ny){if(Y!==S||at!==P){if((x!==Es||A!==Es)&&(o.blendEquation(o.FUNC_ADD),x=Es,A=Es),at)switch(Y){case yo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mc:o.blendFunc(o.ONE,o.ONE);break;case jm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ym:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case yo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mc:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case jm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ym:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}I=null,C=null,B=null,N=null,O.set(0,0,0),W=0,S=Y,P=at}return}z=z||Re,J=J||D,Ue=Ue||K,(Re!==x||z!==A)&&(o.blendEquationSeparate(xt[Re],xt[z]),x=Re,A=z),(D!==I||K!==C||J!==B||Ue!==N)&&(o.blendFuncSeparate(Gt[D],Gt[K],Gt[J],Gt[Ue]),I=D,C=K,B=J,N=Ue),(rt.equals(O)===!1||Pt!==W)&&(o.blendColor(rt.r,rt.g,rt.b,Pt),O.copy(rt),W=Pt),S=Y,P=!1}function Ln(Y,Re){Y.side===pr?Ae(o.CULL_FACE):ve(o.CULL_FACE);let D=Y.side===ci;Re&&(D=!D),wt(D),Y.blending===yo&&Y.transparent===!1?G(_r):G(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),a.setMask(Y.colorWrite);const K=Y.stencilWrite;u.setTest(K),K&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function wt(Y){R!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),R=Y)}function mt(Y){Y!==ey?(ve(o.CULL_FACE),Y!==k&&(Y===Xm?o.cullFace(o.BACK):Y===ty?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),k=Y}function He(Y){Y!==se&&(ce&&o.lineWidth(Y),se=Y)}function bt(Y,Re,D){Y?(ve(o.POLYGON_OFFSET_FILL),(te!==Re||fe!==D)&&(o.polygonOffset(Re,D),te=Re,fe=D)):Ae(o.POLYGON_OFFSET_FILL)}function ke(Y){Y?ve(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=o.TEXTURE0+de-1),ue!==Y&&(o.activeTexture(Y),ue=Y)}function w(Y,Re,D){D===void 0&&(ue===null?D=o.TEXTURE0+de-1:D=ue);let K=ee[D];K===void 0&&(K={type:void 0,texture:void 0},ee[D]=K),(K.type!==Y||K.texture!==Re)&&(ue!==D&&(o.activeTexture(D),ue=D),o.bindTexture(Y,Re||Se[Y]),K.type=Y,K.texture=Re)}function ie(){const Y=ee[ue];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ge(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{o.texSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{o.texSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{o.texStorage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Be(){try{o.texImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Je(){try{o.texImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(Y){Pe.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),Pe.copy(Y))}function ze(Y){re.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),re.copy(Y))}function St(Y,Re){let D=d.get(Re);D===void 0&&(D=new WeakMap,d.set(Re,D));let K=D.get(Y);K===void 0&&(K=o.getUniformBlockIndex(Re,Y.name),D.set(Y,K))}function ut(Y,Re){const K=d.get(Re).get(Y);h.get(Re)!==K&&(o.uniformBlockBinding(Re,K,Y.__bindingPointIndex),h.set(Re,K))}function Ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ue=null,ee={},m={},v=new WeakMap,_=[],M=null,E=!1,S=null,x=null,I=null,C=null,A=null,B=null,N=null,O=new it(0,0,0),W=0,P=!1,R=null,k=null,se=null,te=null,fe=null,Pe.set(0,0,o.canvas.width,o.canvas.height),re.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Ae,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:Ft,setBlending:G,setMaterial:Ln,setFlipSided:wt,setCullFace:mt,setLineWidth:He,setPolygonOffset:bt,setScissorTest:ke,activeTexture:L,bindTexture:w,unbindTexture:ie,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:Be,texImage3D:Je,updateUBOMapping:St,uniformBlockBinding:ut,texStorage2D:gt,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:je,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:nt,viewport:ze,reset:Ot}}function lw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ct,g=new WeakMap;let m;const v=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return _?new OffscreenCanvas(L,w):ba("canvas")}function E(L,w,ie){let ge=1;const _e=ke(L);if((_e.width>ie||_e.height>ie)&&(ge=ie/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const me=Math.floor(ge*_e.width),je=Math.floor(ge*_e.height);m===void 0&&(m=M(me,je));const Ce=w?M(me,je):m;return Ce.width=me,Ce.height=je,Ce.getContext("2d").drawImage(L,0,0,me,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+je+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(L,w,ie,ge,_e=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=w;if(w===o.RED&&(ie===o.FLOAT&&(me=o.R32F),ie===o.HALF_FLOAT&&(me=o.R16F),ie===o.UNSIGNED_BYTE&&(me=o.R8)),w===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(me=o.R8UI),ie===o.UNSIGNED_SHORT&&(me=o.R16UI),ie===o.UNSIGNED_INT&&(me=o.R32UI),ie===o.BYTE&&(me=o.R8I),ie===o.SHORT&&(me=o.R16I),ie===o.INT&&(me=o.R32I)),w===o.RG&&(ie===o.FLOAT&&(me=o.RG32F),ie===o.HALF_FLOAT&&(me=o.RG16F),ie===o.UNSIGNED_BYTE&&(me=o.RG8)),w===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(me=o.RG8UI),ie===o.UNSIGNED_SHORT&&(me=o.RG16UI),ie===o.UNSIGNED_INT&&(me=o.RG32UI),ie===o.BYTE&&(me=o.RG8I),ie===o.SHORT&&(me=o.RG16I),ie===o.INT&&(me=o.RG32I)),w===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(me=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(me=o.RGB16UI),ie===o.UNSIGNED_INT&&(me=o.RGB32UI),ie===o.BYTE&&(me=o.RGB8I),ie===o.SHORT&&(me=o.RGB16I),ie===o.INT&&(me=o.RGB32I)),w===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(me=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(me=o.RGBA16UI),ie===o.UNSIGNED_INT&&(me=o.RGBA32UI),ie===o.BYTE&&(me=o.RGBA8I),ie===o.SHORT&&(me=o.RGBA16I),ie===o.INT&&(me=o.RGBA32I)),w===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(me=o.RGB9_E5),w===o.RGBA){const je=_e?wc:Tt.getTransfer(ge);ie===o.FLOAT&&(me=o.RGBA32F),ie===o.HALF_FLOAT&&(me=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(me=je===Yt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(me=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(me=o.RGB5_A1)}return(me===o.R16F||me===o.R32F||me===o.RG16F||me===o.RG32F||me===o.RGBA16F||me===o.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function A(L,w){let ie;return L?w===null||w===As||w===wo?ie=o.DEPTH24_STENCIL8:w===Vi?ie=o.DEPTH32F_STENCIL8:w===Ra&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===As||w===wo?ie=o.DEPTH_COMPONENT24:w===Vi?ie=o.DEPTH_COMPONENT32F:w===Ra&&(ie=o.DEPTH_COMPONENT16),ie}function B(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==$i?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){const w=L.target;w.removeEventListener("dispose",N),W(w),w.isVideoTexture&&g.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),R(w)}function W(L){const w=i.get(L);if(w.__webglInit===void 0)return;const ie=L.source,ge=v.get(ie);if(ge){const _e=ge[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(ge).length===0&&v.delete(ie)}i.remove(L)}function P(L){const w=i.get(L);o.deleteTexture(w.__webglTexture);const ie=L.source,ge=v.get(ie);delete ge[w.__cacheKey],c.memory.textures--}function R(L){const w=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let _e=0;_e<w.__webglFramebuffer[ge].length;_e++)o.deleteFramebuffer(w.__webglFramebuffer[ge][_e]);else o.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)o.deleteFramebuffer(w.__webglFramebuffer[ge]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=L.textures;for(let ge=0,_e=ie.length;ge<_e;ge++){const me=i.get(ie[ge]);me.__webglTexture&&(o.deleteTexture(me.__webglTexture),c.memory.textures--),i.remove(ie[ge])}i.remove(L)}let k=0;function se(){k=0}function te(){const L=k;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),k+=1,L}function fe(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function de(L,w){const ie=i.get(L);if(L.isVideoTexture&&He(L),L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ie,L,w);return}}t.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+w)}function ce(L,w){const ie=i.get(L);if(L.version>0&&ie.__version!==L.version){re(ie,L,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+w)}function he(L,w){const ie=i.get(L);if(L.version>0&&ie.__version!==L.version){re(ie,L,w);return}t.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+w)}function H(L,w){const ie=i.get(L);if(L.version>0&&ie.__version!==L.version){pe(ie,L,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+w)}const ue={[Ca]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[mh]:o.MIRRORED_REPEAT},ee={[gi]:o.NEAREST,[Py]:o.NEAREST_MIPMAP_NEAREST,[Vl]:o.NEAREST_MIPMAP_LINEAR,[$i]:o.LINEAR,[Sf]:o.LINEAR_MIPMAP_NEAREST,[ws]:o.LINEAR_MIPMAP_LINEAR},F={[Ny]:o.NEVER,[Vy]:o.ALWAYS,[Fy]:o.LESS,[R0]:o.LEQUAL,[Oy]:o.EQUAL,[zy]:o.GEQUAL,[ky]:o.GREATER,[By]:o.NOTEQUAL};function le(L,w){if(w.type===Vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===$i||w.magFilter===Sf||w.magFilter===Vl||w.magFilter===ws||w.minFilter===$i||w.minFilter===Sf||w.minFilter===Vl||w.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ue[w.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ue[w.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ue[w.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,ee[w.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gi||w.minFilter!==Vl&&w.minFilter!==ws||w.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Pe(L,w){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N));const ge=w.source;let _e=v.get(ge);_e===void 0&&(_e={},v.set(ge,_e));const me=fe(w);if(me!==L.__cacheKey){_e[me]===void 0&&(_e[me]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),_e[me].usedTimes++;const je=_e[L.__cacheKey];je!==void 0&&(_e[L.__cacheKey].usedTimes--,je.usedTimes===0&&P(w)),L.__cacheKey=me,L.__webglTexture=_e[me].texture}return ie}function re(L,w,ie){let ge=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=o.TEXTURE_3D);const _e=Pe(L,w),me=w.source;t.bindTexture(ge,L.__webglTexture,o.TEXTURE0+ie);const je=i.get(me);if(me.version!==je.__version||_e===!0){t.activeTexture(o.TEXTURE0+ie);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Ne=w.colorSpace===Kr?null:Tt.getPrimaries(w.colorSpace),gt=w.colorSpace===Kr||Ce===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ee=E(w.image,!1,s.maxTextureSize);Ee=bt(w,Ee);const Be=a.convert(w.format,w.colorSpace),Je=a.convert(w.type);let nt=C(w.internalFormat,Be,Je,w.colorSpace,w.isVideoTexture);le(ge,w);let ze;const St=w.mipmaps,ut=w.isVideoTexture!==!0,Ot=je.__version===void 0||_e===!0,Y=me.dataReady,Re=B(w,Ee);if(w.isDepthTexture)nt=A(w.format===Ao,w.type),Ot&&(ut?t.texStorage2D(o.TEXTURE_2D,1,nt,Ee.width,Ee.height):t.texImage2D(o.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Be,Je,null));else if(w.isDataTexture)if(St.length>0){ut&&Ot&&t.texStorage2D(o.TEXTURE_2D,Re,nt,St[0].width,St[0].height);for(let D=0,K=St.length;D<K;D++)ze=St[D],ut?Y&&t.texSubImage2D(o.TEXTURE_2D,D,0,0,ze.width,ze.height,Be,Je,ze.data):t.texImage2D(o.TEXTURE_2D,D,nt,ze.width,ze.height,0,Be,Je,ze.data);w.generateMipmaps=!1}else ut?(Ot&&t.texStorage2D(o.TEXTURE_2D,Re,nt,Ee.width,Ee.height),Y&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Je,Ee.data)):t.texImage2D(o.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Be,Je,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&Ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Re,nt,St[0].width,St[0].height,Ee.depth);for(let D=0,K=St.length;D<K;D++)if(ze=St[D],w.format!==Ai)if(Be!==null)if(ut){if(Y)if(w.layerUpdates.size>0){const z=zg(ze.width,ze.height,w.format,w.type);for(const J of w.layerUpdates){const Ue=ze.data.subarray(J*z/ze.data.BYTES_PER_ELEMENT,(J+1)*z/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,D,0,0,J,ze.width,ze.height,1,Be,Ue)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,D,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,D,nt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Y&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,D,0,0,0,ze.width,ze.height,Ee.depth,Be,Je,ze.data):t.texImage3D(o.TEXTURE_2D_ARRAY,D,nt,ze.width,ze.height,Ee.depth,0,Be,Je,ze.data)}else{ut&&Ot&&t.texStorage2D(o.TEXTURE_2D,Re,nt,St[0].width,St[0].height);for(let D=0,K=St.length;D<K;D++)ze=St[D],w.format!==Ai?Be!==null?ut?Y&&t.compressedTexSubImage2D(o.TEXTURE_2D,D,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(o.TEXTURE_2D,D,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Y&&t.texSubImage2D(o.TEXTURE_2D,D,0,0,ze.width,ze.height,Be,Je,ze.data):t.texImage2D(o.TEXTURE_2D,D,nt,ze.width,ze.height,0,Be,Je,ze.data)}else if(w.isDataArrayTexture)if(ut){if(Ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Re,nt,Ee.width,Ee.height,Ee.depth),Y)if(w.layerUpdates.size>0){const D=zg(Ee.width,Ee.height,w.format,w.type);for(const K of w.layerUpdates){const z=Ee.data.subarray(K*D/Ee.data.BYTES_PER_ELEMENT,(K+1)*D/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,K,Ee.width,Ee.height,1,Be,Je,z)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Je,Ee.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,Be,Je,Ee.data);else if(w.isData3DTexture)ut?(Ot&&t.texStorage3D(o.TEXTURE_3D,Re,nt,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Je,Ee.data)):t.texImage3D(o.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,Be,Je,Ee.data);else if(w.isFramebufferTexture){if(Ot)if(ut)t.texStorage2D(o.TEXTURE_2D,Re,nt,Ee.width,Ee.height);else{let D=Ee.width,K=Ee.height;for(let z=0;z<Re;z++)t.texImage2D(o.TEXTURE_2D,z,nt,D,K,0,Be,Je,null),D>>=1,K>>=1}}else if(St.length>0){if(ut&&Ot){const D=ke(St[0]);t.texStorage2D(o.TEXTURE_2D,Re,nt,D.width,D.height)}for(let D=0,K=St.length;D<K;D++)ze=St[D],ut?Y&&t.texSubImage2D(o.TEXTURE_2D,D,0,0,Be,Je,ze):t.texImage2D(o.TEXTURE_2D,D,nt,Be,Je,ze);w.generateMipmaps=!1}else if(ut){if(Ot){const D=ke(Ee);t.texStorage2D(o.TEXTURE_2D,Re,nt,D.width,D.height)}Y&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Be,Je,Ee)}else t.texImage2D(o.TEXTURE_2D,0,nt,Be,Je,Ee);S(w)&&x(ge),je.__version=me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function pe(L,w,ie){if(w.image.length!==6)return;const ge=Pe(L,w),_e=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ie);const me=i.get(_e);if(_e.version!==me.__version||ge===!0){t.activeTexture(o.TEXTURE0+ie);const je=Tt.getPrimaries(Tt.workingColorSpace),Ce=w.colorSpace===Kr?null:Tt.getPrimaries(w.colorSpace),Ne=w.colorSpace===Kr||je===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const gt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let K=0;K<6;K++)!gt&&!Ee?Be[K]=E(w.image[K],!0,s.maxCubemapSize):Be[K]=Ee?w.image[K].image:w.image[K],Be[K]=bt(w,Be[K]);const Je=Be[0],nt=a.convert(w.format,w.colorSpace),ze=a.convert(w.type),St=C(w.internalFormat,nt,ze,w.colorSpace),ut=w.isVideoTexture!==!0,Ot=me.__version===void 0||ge===!0,Y=_e.dataReady;let Re=B(w,Je);le(o.TEXTURE_CUBE_MAP,w);let D;if(gt){ut&&Ot&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Re,St,Je.width,Je.height);for(let K=0;K<6;K++){D=Be[K].mipmaps;for(let z=0;z<D.length;z++){const J=D[z];w.format!==Ai?nt!==null?ut?Y&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z,0,0,J.width,J.height,nt,J.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z,St,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z,0,0,J.width,J.height,nt,ze,J.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z,St,J.width,J.height,0,nt,ze,J.data)}}}else{if(D=w.mipmaps,ut&&Ot){D.length>0&&Re++;const K=ke(Be[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Re,St,K.width,K.height)}for(let K=0;K<6;K++)if(Ee){ut?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Be[K].width,Be[K].height,nt,ze,Be[K].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,St,Be[K].width,Be[K].height,0,nt,ze,Be[K].data);for(let z=0;z<D.length;z++){const Ue=D[z].image[K].image;ut?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z+1,0,0,Ue.width,Ue.height,nt,ze,Ue.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z+1,St,Ue.width,Ue.height,0,nt,ze,Ue.data)}}else{ut?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,nt,ze,Be[K]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,St,nt,ze,Be[K]);for(let z=0;z<D.length;z++){const J=D[z];ut?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z+1,0,0,nt,ze,J.image[K]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,z+1,St,nt,ze,J.image[K])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),me.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Se(L,w,ie,ge,_e,me){const je=a.convert(ie.format,ie.colorSpace),Ce=a.convert(ie.type),Ne=C(ie.internalFormat,je,Ce,ie.colorSpace),gt=i.get(w),Ee=i.get(ie);if(Ee.__renderTarget=w,!gt.__hasExternalTextures){const Be=Math.max(1,w.width>>me),Je=Math.max(1,w.height>>me);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,me,Ne,Be,Je,w.depth,0,je,Ce,null):t.texImage2D(_e,me,Ne,Be,Je,0,je,Ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),mt(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,_e,Ee.__webglTexture,0,wt(w)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,_e,Ee.__webglTexture,me),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(L,w,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,L),w.depthBuffer){const ge=w.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,me=A(w.stencilBuffer,_e),je=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=wt(w);mt(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,me,w.width,w.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,me,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,me,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,L)}else{const ge=w.textures;for(let _e=0;_e<ge.length;_e++){const me=ge[_e],je=a.convert(me.format,me.colorSpace),Ce=a.convert(me.type),Ne=C(me.internalFormat,je,Ce,me.colorSpace),gt=wt(w);ie&&mt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Ne,w.width,w.height):mt(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Ne,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(w.depthTexture);ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const _e=ge.__webglTexture,me=wt(w);if(w.depthTexture.format===xo)mt(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Ao)mt(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const w=i.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ge){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=ge}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(ie){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]===void 0)w.__webglDepthbuffer[ge]=o.createRenderbuffer(),ve(w.__webglDepthbuffer[ge],L,!1);else{const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,me),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,me)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ve(w.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(L,w,ie){const ge=i.get(L);w!==void 0&&Se(ge.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Ie(L)}function Ft(L){const w=L.texture,ie=i.get(L),ge=i.get(w);L.addEventListener("dispose",O);const _e=L.textures,me=L.isWebGLCubeRenderTarget===!0,je=_e.length>1;if(je||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=w.version,c.memory.textures++),me){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)ie.__webglFramebuffer[Ce][Ne]=o.createFramebuffer()}else ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(je)for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const gt=i.get(_e[Ce]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),c.memory.textures++)}if(L.samples>0&&mt(L)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];ie.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const gt=a.convert(Ne.format,Ne.colorSpace),Ee=a.convert(Ne.type),Be=C(Ne.internalFormat,gt,Ee,Ne.colorSpace,L.isXRRenderTarget===!0),Je=wt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Je,Be,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(ie.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){t.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),le(o.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)Se(ie.__webglFramebuffer[Ce][Ne],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else Se(ie.__webglFramebuffer[Ce],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const gt=_e[Ce],Ee=i.get(gt);t.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),le(o.TEXTURE_2D,gt),Se(ie.__webglFramebuffer,L,gt,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),S(gt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),le(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)Se(ie.__webglFramebuffer[Ne],L,w,o.COLOR_ATTACHMENT0,Ce,Ne);else Se(ie.__webglFramebuffer,L,w,o.COLOR_ATTACHMENT0,Ce,0);S(w)&&x(Ce),t.unbindTexture()}L.depthBuffer&&Ie(L)}function xt(L){const w=L.textures;for(let ie=0,ge=w.length;ie<ge;ie++){const _e=w[ie];if(S(_e)){const me=I(L),je=i.get(_e).__webglTexture;t.bindTexture(me,je),x(me),t.unbindTexture()}}}const Gt=[],G=[];function Ln(L){if(L.samples>0){if(mt(L)===!1){const w=L.textures,ie=L.width,ge=L.height;let _e=o.COLOR_BUFFER_BIT;const me=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=i.get(L),Ce=w.length>1;if(Ce)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[Ne]);const gt=i.get(w[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,ie,ge,0,0,ie,ge,_e,o.NEAREST),h===!0&&(Gt.length=0,G.length=0,Gt.push(o.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Gt.push(me),G.push(me),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,je.__webglColorRenderbuffer[Ne]);const gt=i.get(w[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,gt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function wt(L){return Math.min(s.maxSamples,L.samples)}function mt(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function He(L){const w=c.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function bt(L,w){const ie=L.colorSpace,ge=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==Co&&ie!==Kr&&(Tt.getTransfer(ie)===Yt?(ge!==Ai||_e!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=ce,this.setTexture3D=he,this.setTextureCube=H,this.rebindTextures=Qe,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=mt}function cw(o,e){function t(i,s=Kr){let a;const c=Tt.getTransfer(s);if(i===Sr)return o.UNSIGNED_BYTE;if(i===Zh)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return o.UNSIGNED_SHORT_5_5_5_1;if(i===S0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===y0)return o.BYTE;if(i===x0)return o.SHORT;if(i===Ra)return o.UNSIGNED_SHORT;if(i===Kh)return o.INT;if(i===As)return o.UNSIGNED_INT;if(i===Vi)return o.FLOAT;if(i===yr)return o.HALF_FLOAT;if(i===M0)return o.ALPHA;if(i===E0)return o.RGB;if(i===Ai)return o.RGBA;if(i===T0)return o.LUMINANCE;if(i===w0)return o.LUMINANCE_ALPHA;if(i===xo)return o.DEPTH_COMPONENT;if(i===Ao)return o.DEPTH_STENCIL;if(i===Jh)return o.RED;if(i===ed)return o.RED_INTEGER;if(i===A0)return o.RG;if(i===td)return o.RG_INTEGER;if(i===nd)return o.RGBA_INTEGER;if(i===gc||i===vc||i===_c||i===yc)if(c===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===vh||i===_h||i===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh||i===Sh||i===Mh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===xh||i===Sh)return c===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Mh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===bh||i===Ph||i===Lh||i===Dh||i===Ih||i===Uh||i===Nh||i===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Eh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Th)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ah)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===Oh||i===kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===xc)return c===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===C0||i===Bh||i===zh||i===Vh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===xc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const uw={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(d,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=g.position.distanceTo(m.position),_=.02,M=.005;d.inputState.pinching&&v>_+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=_-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(uw)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Sn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:fw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pw extends Do{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",h=1,d=null,g=null,m=null,v=null,_=null,M=null;const E=new dw,S=t.getContextAttributes();let x=null,I=null;const C=[],A=[],B=new ct;let N=null;const O=new li;O.viewport=new Dt;const W=new li;W.viewport=new Dt;const P=[O,W],R=new AS;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=C[re];return pe===void 0&&(pe=new eh,C[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=C[re];return pe===void 0&&(pe=new eh,C[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=C[re];return pe===void 0&&(pe=new eh,C[re]=pe),pe.getHandSpace()};function te(re){const pe=A.indexOf(re.inputSource);if(pe===-1)return;const Se=C[pe];Se!==void 0&&(Se.update(re.inputSource,re.frame,d||c),Se.dispatchEvent({type:re.type,data:re.inputSource}))}function fe(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",de);for(let re=0;re<C.length;re++){const pe=A[re];pe!==null&&(A[re]=null,C[re].disconnect(pe))}k=null,se=null,E.reset(),e.setRenderTarget(x),_=null,v=null,m=null,s=null,I=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(B),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Se=null,ve=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?Ao:xo,ve=S.stencil?wo:As);const Ie={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};m=new XRWebGLBinding(s,t),v=m.createProjectionLayer(Ie),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new Ri(v.textureWidth,v.textureHeight,{format:Ai,type:Sr,depthTexture:new z0(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),I=new Ri(_.framebufferWidth,_.framebufferHeight,{format:Ai,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(u),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function de(re){for(let pe=0;pe<re.removed.length;pe++){const Se=re.removed[pe],ve=A.indexOf(Se);ve>=0&&(A[ve]=null,C[ve].disconnect(Se))}for(let pe=0;pe<re.added.length;pe++){const Se=re.added[pe];let ve=A.indexOf(Se);if(ve===-1){for(let Ie=0;Ie<C.length;Ie++)if(Ie>=A.length){A.push(Se),ve=Ie;break}else if(A[Ie]===null){A[Ie]=Se,ve=Ie;break}if(ve===-1)break}const Ae=C[ve];Ae&&Ae.connect(Se)}}const ce=new j,he=new j;function H(re,pe,Se){ce.setFromMatrixPosition(pe.matrixWorld),he.setFromMatrixPosition(Se.matrixWorld);const ve=ce.distanceTo(he),Ae=pe.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Qe=Ae[14]/(Ae[10]-1),Ft=Ae[14]/(Ae[10]+1),xt=(Ae[9]+1)/Ae[5],Gt=(Ae[9]-1)/Ae[5],G=(Ae[8]-1)/Ae[0],Ln=(Ie[8]+1)/Ie[0],wt=Qe*G,mt=Qe*Ln,He=ve/(-G+Ln),bt=He*-G;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(bt),re.translateZ(He),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ae[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ke=Qe+He,L=Ft+He,w=wt-bt,ie=mt+(ve-bt),ge=xt*Ft/L*ke,_e=Gt*Ft/L*ke;re.projectionMatrix.makePerspective(w,ie,ge,_e,ke,L),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ue(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let pe=re.near,Se=re.far;E.texture!==null&&(E.depthNear>0&&(pe=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),R.near=W.near=O.near=pe,R.far=W.far=O.far=Se,(k!==R.near||se!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,se=R.far),O.layers.mask=re.layers.mask|2,W.layers.mask=re.layers.mask|4,R.layers.mask=O.layers.mask|W.layers.mask;const ve=re.parent,Ae=R.cameras;ue(R,ve);for(let Ie=0;Ie<Ae.length;Ie++)ue(Ae[Ie],ve);Ae.length===2?H(R,O,W):R.projectionMatrix.copy(O.projectionMatrix),ee(re,R,ve)};function ee(re,pe,Se){Se===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(Se.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ro*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&_===null))return h},this.setFoveation=function(re){h=re,v!==null&&(v.fixedFoveation=re),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=re)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let F=null;function le(re,pe){if(g=pe.getViewerPose(d||c),M=pe,g!==null){const Se=g.views;_!==null&&(e.setRenderTargetFramebuffer(I,_.framebuffer),e.setRenderTarget(I));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ie=0;Ie<Se.length;Ie++){const Qe=Se[Ie];let Ft=null;if(_!==null)Ft=_.getViewport(Qe);else{const Gt=m.getViewSubImage(v,Qe);Ft=Gt.viewport,Ie===0&&(e.setRenderTargetTextures(I,Gt.colorTexture,v.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(I))}let xt=P[Ie];xt===void 0&&(xt=new li,xt.layers.enable(Ie),xt.viewport=new Dt,P[Ie]=xt),xt.matrix.fromArray(Qe.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Qe.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Ie===0&&(R.matrix.copy(xt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(xt)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=m.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,s.renderState)}}for(let Se=0;Se<C.length;Se++){const ve=A[Se],Ae=C[Se];ve!==null&&Ae!==void 0&&Ae.update(ve,pe,d||c)}F&&F(re,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Pe=new $0;Pe.setAnimationLoop(le),this.setAnimationLoop=function(re){F=re},this.dispose=function(){}}}const xs=new xn,mw=new Ke;function gw(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,N0(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,I,C,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),m(S,x)):x.isMeshPhongMaterial?(a(S,x),g(S,x)):x.isMeshStandardMaterial?(a(S,x),v(S,x),x.isMeshPhysicalMaterial&&_(S,x,A)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?h(S,x,I,C):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ci&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ci&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),C=I.envMap,A=I.envMapRotation;C&&(S.envMap.value=C,xs.copy(A),xs.x*=-1,xs.y*=-1,xs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(mw.makeRotationFromEuler(xs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,I,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function _(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ci&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,C){const A=C.program;i.uniformBlockBinding(I,A)}function d(I,C){let A=s[I.id];A===void 0&&(M(I),A=g(I),s[I.id]=A,I.addEventListener("dispose",S));const B=C.program;i.updateUBOMapping(I,B);const N=e.render.frame;a[I.id]!==N&&(v(I),a[I.id]=N)}function g(I){const C=m();I.__bindingPointIndex=C;const A=o.createBuffer(),B=I.__size,N=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,B,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,A),A}function m(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const C=s[I.id],A=I.uniforms,B=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let N=0,O=A.length;N<O;N++){const W=Array.isArray(A[N])?A[N]:[A[N]];for(let P=0,R=W.length;P<R;P++){const k=W[P];if(_(k,N,P,B)===!0){const se=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let de=0;de<te.length;de++){const ce=te[de],he=E(ce);typeof ce=="number"||typeof ce=="boolean"?(k.__data[0]=ce,o.bufferSubData(o.UNIFORM_BUFFER,se+fe,k.__data)):ce.isMatrix3?(k.__data[0]=ce.elements[0],k.__data[1]=ce.elements[1],k.__data[2]=ce.elements[2],k.__data[3]=0,k.__data[4]=ce.elements[3],k.__data[5]=ce.elements[4],k.__data[6]=ce.elements[5],k.__data[7]=0,k.__data[8]=ce.elements[6],k.__data[9]=ce.elements[7],k.__data[10]=ce.elements[8],k.__data[11]=0):(ce.toArray(k.__data,fe),fe+=he.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(I,C,A,B){const N=I.value,O=C+"_"+A;if(B[O]===void 0)return typeof N=="number"||typeof N=="boolean"?B[O]=N:B[O]=N.clone(),!0;{const W=B[O];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return B[O]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function M(I){const C=I.uniforms;let A=0;const B=16;for(let O=0,W=C.length;O<W;O++){const P=Array.isArray(C[O])?C[O]:[C[O]];for(let R=0,k=P.length;R<k;R++){const se=P[R],te=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,de=te.length;fe<de;fe++){const ce=te[fe],he=E(ce),H=A%B,ue=H%he.boundary,ee=H+ue;A+=ue,ee!==0&&B-ee<he.storage&&(A+=B-ee),se.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=A,A+=he.storage}}}const N=A%B;return N>0&&(A+=B-N),I.__size=A,I.__cache={},this}function E(I){const C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function S(I){const C=I.target;C.removeEventListener("dispose",S);const A=c.indexOf(C.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function x(){for(const I in s)o.deleteBuffer(s[I]);c=[],s={},a={}}return{bind:h,update:d,dispose:x}}class _w{constructor(e={}){const{canvas:t=sx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const I=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Qr,this.toneMappingExposure=1;const A=this;let B=!1,N=0,O=0,W=null,P=-1,R=null;const k=new Dt,se=new Dt;let te=null;const fe=new it(0);let de=0,ce=t.width,he=t.height,H=1,ue=null,ee=null;const F=new Dt(0,0,ce,he),le=new Dt(0,0,ce,he);let Pe=!1;const re=new ld;let pe=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new Ke,Ae=new Ke,Ie=new j,Qe=new Dt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Gt(){return W===null?H:1}let G=i;function Ln(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$h}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",J,!1),G===null){const q="webgl2";if(G=Ln(q,b),G===null)throw Ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let wt,mt,He,bt,ke,L,w,ie,ge,_e,me,je,Ce,Ne,gt,Ee,Be,Je,nt,ze,St,ut,Ot,Y;function Re(){wt=new C1(G),wt.init(),ut=new cw(G,wt),mt=new S1(G,wt,e,ut),He=new aw(G,wt),mt.reverseDepthBuffer&&v&&He.buffers.depth.setReversed(!0),bt=new P1(G),ke=new qT,L=new lw(G,wt,He,ke,mt,ut,bt),w=new E1(A),ie=new A1(A),ge=new OS(G),Ot=new y1(G,ge),_e=new R1(G,ge,bt,Ot),me=new D1(G,_e,ge,bt),nt=new L1(G,mt,L),Ee=new M1(ke),je=new YT(A,w,ie,wt,mt,Ot,Ee),Ce=new gw(A,ke),Ne=new KT,gt=new nw(wt),Je=new _1(A,w,ie,He,me,_,h),Be=new sw(A,me,mt),Y=new vw(G,bt,mt,He),ze=new x1(G,wt,bt),St=new b1(G,wt,bt),bt.programs=je.programs,A.capabilities=mt,A.extensions=wt,A.properties=ke,A.renderLists=Ne,A.shadowMap=Be,A.state=He,A.info=bt}Re();const D=new pw(A,G);this.xr=D,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(ce,he,!1))},this.getSize=function(b){return b.set(ce,he)},this.setSize=function(b,q,oe=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=b,he=q,t.width=Math.floor(b*H),t.height=Math.floor(q*H),oe===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(ce*H,he*H).floor()},this.setDrawingBufferSize=function(b,q,oe){ce=b,he=q,H=oe,t.width=Math.floor(b*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,q,oe,Q){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,q,oe,Q),He.viewport(k.copy(F).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,q,oe,Q){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,q,oe,Q),He.scissor(se.copy(le).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){He.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,q=!0,oe=!0){let Q=0;if(b){let $=!1;if(W!==null){const Te=W.texture.format;$=Te===nd||Te===td||Te===ed}if($){const Te=W.texture.type,Le=Te===Sr||Te===As||Te===Ra||Te===wo||Te===Zh||Te===Qh,Fe=Je.getClearColor(),We=Je.getClearAlpha(),lt=Fe.r,ot=Fe.g,Ye=Fe.b;Le?(M[0]=lt,M[1]=ot,M[2]=Ye,M[3]=We,G.clearBufferuiv(G.COLOR,0,M)):(E[0]=lt,E[1]=ot,E[2]=Ye,E[3]=We,G.clearBufferiv(G.COLOR,0,E))}else Q|=G.COLOR_BUFFER_BIT}q&&(Q|=G.DEPTH_BUFFER_BIT),oe&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Je.dispose(),Ne.dispose(),gt.dispose(),ke.dispose(),w.dispose(),ie.dispose(),me.dispose(),Ot.dispose(),Y.dispose(),je.dispose(),D.dispose(),D.removeEventListener("sessionstart",Nn),D.removeEventListener("sessionend",gn),dn.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const b=bt.autoReset,q=Be.enabled,oe=Be.autoUpdate,Q=Be.needsUpdate,$=Be.type;Re(),bt.autoReset=b,Be.enabled=q,Be.autoUpdate=oe,Be.needsUpdate=Q,Be.type=$}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ue(b){const q=b.target;q.removeEventListener("dispose",Ue),rt(q)}function rt(b){Pt(b),ke.remove(b)}function Pt(b){const q=ke.get(b).programs;q!==void 0&&(q.forEach(function(oe){je.releaseProgram(oe)}),b.isShaderMaterial&&je.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,oe,Q,$,Te){q===null&&(q=Ft);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Fe=Ve(b,q,oe,Q,$);He.setMaterial(Q,Le);let We=oe.index,lt=1;if(Q.wireframe===!0){if(We=_e.getWireframeAttribute(oe),We===void 0)return;lt=2}const ot=oe.drawRange,Ye=oe.attributes.position;let It=ot.start*lt,_t=(ot.start+ot.count)*lt;Te!==null&&(It=Math.max(It,Te.start*lt),_t=Math.min(_t,(Te.start+Te.count)*lt)),We!==null?(It=Math.max(It,0),_t=Math.min(_t,We.count)):Ye!=null&&(It=Math.max(It,0),_t=Math.min(_t,Ye.count));const an=_t-It;if(an<0||an===1/0)return;Ot.setup($,Q,Fe,oe,We);let tn,Nt=ze;if(We!==null&&(tn=ge.get(We),Nt=St,Nt.setIndex(tn)),$.isMesh)Q.wireframe===!0?(He.setLineWidth(Q.wireframeLinewidth*Gt()),Nt.setMode(G.LINES)):Nt.setMode(G.TRIANGLES);else if($.isLine){let Ze=Q.linewidth;Ze===void 0&&(Ze=1),He.setLineWidth(Ze*Gt()),$.isLineSegments?Nt.setMode(G.LINES):$.isLineLoop?Nt.setMode(G.LINE_LOOP):Nt.setMode(G.LINE_STRIP)}else $.isPoints?Nt.setMode(G.POINTS):$.isSprite&&Nt.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Nt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ze=$._multiDrawStarts,ln=$._multiDrawCounts,Lt=$._multiDrawCount,On=We?ge.get(We).bytesPerElement:1,Er=ke.get(Q).currentProgram.getUniforms();for(let Yn=0;Yn<Lt;Yn++)Er.setValue(G,"_gl_DrawID",Yn),Nt.render(Ze[Yn]/On,ln[Yn])}else if($.isInstancedMesh)Nt.renderInstances(It,an,$.count);else if(oe.isInstancedBufferGeometry){const Ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ln=Math.min(oe.instanceCount,Ze);Nt.renderInstances(It,an,ln)}else Nt.render(It,an)};function at(b,q,oe){b.transparent===!0&&b.side===pr&&b.forceSinglePass===!1?(b.side=ci,b.needsUpdate=!0,pt(b,q,oe),b.side=Jr,b.needsUpdate=!0,pt(b,q,oe),b.side=pr):pt(b,q,oe)}this.compile=function(b,q,oe=null){oe===null&&(oe=b),x=gt.get(oe),x.init(q),C.push(x),oe.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),b!==oe&&b.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const Q=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Fe=Te[Le];at(Fe,oe,$),Q.add(Fe)}else at(Te,oe,$),Q.add(Te)}),C.pop(),x=null,Q},this.compileAsync=function(b,q,oe=null){const Q=this.compile(b,q,oe);return new Promise($=>{function Te(){if(Q.forEach(function(Le){ke.get(Le).currentProgram.isReady()&&Q.delete(Le)}),Q.size===0){$(b);return}setTimeout(Te,10)}wt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Wt=null;function Mt(b){Wt&&Wt(b)}function Nn(){dn.stop()}function gn(){dn.start()}const dn=new $0;dn.setAnimationLoop(Mt),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(b){Wt=b,D.setAnimationLoop(b),b===null?dn.stop():dn.start()},D.addEventListener("sessionstart",Nn),D.addEventListener("sessionend",gn),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(q),q=D.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,q,W),x=gt.get(b,C.length),x.init(q),C.push(x),Ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),re.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,Se),S=Ne.get(b,I.length),S.init(),I.push(S),D.enabled===!0&&D.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&Tn(Te,q,-1/0,A.sortObjects)}Tn(b,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ue,ee),xt=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,xt&&Je.addToRenderList(S,b),this.info.render.frame++,pe===!0&&Ee.beginShadows();const oe=x.state.shadowsArray;Be.render(oe,b,q),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,$=S.transmissive;if(x.setupLights(),q.isArrayCamera){const Te=q.cameras;if($.length>0)for(let Le=0,Fe=Te.length;Le<Fe;Le++){const We=Te[Le];Xn(Q,$,b,We)}xt&&Je.render(b);for(let Le=0,Fe=Te.length;Le<Fe;Le++){const We=Te[Le];un(S,b,We,We.viewport)}}else $.length>0&&Xn(Q,$,b,q),xt&&Je.render(b),un(S,b,q);W!==null&&O===0&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),b.isScene===!0&&b.onAfterRender(A,b,q),Ot.resetDefaultState(),P=-1,R=null,C.pop(),C.length>0?(x=C[C.length-1],pe===!0&&Ee.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Tn(b,q,oe,Q){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||re.intersectsSprite(b)){Q&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Le=me.update(b),Fe=b.material;Fe.visible&&S.push(b,Le,Fe,oe,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||re.intersectsObject(b))){const Le=me.update(b),Fe=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Qe.copy(Le.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Fe)){const We=Le.groups;for(let lt=0,ot=We.length;lt<ot;lt++){const Ye=We[lt],It=Fe[Ye.materialIndex];It&&It.visible&&S.push(b,Le,It,oe,Qe.z,Ye)}}else Fe.visible&&S.push(b,Le,Fe,oe,Qe.z,null)}}const Te=b.children;for(let Le=0,Fe=Te.length;Le<Fe;Le++)Tn(Te[Le],q,oe,Q)}function un(b,q,oe,Q){const $=b.opaque,Te=b.transmissive,Le=b.transparent;x.setupLightsView(oe),pe===!0&&Ee.setGlobalState(A.clippingPlanes,oe),Q&&He.viewport(k.copy(Q)),$.length>0&&Fn($,q,oe),Te.length>0&&Fn(Te,q,oe),Le.length>0&&Fn(Le,q,oe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Xn(b,q,oe,Q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Q.id]===void 0&&(x.state.transmissionRenderTarget[Q.id]=new Ri(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?yr:Sr,minFilter:ws,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[Q.id],Le=Q.viewport||k;Te.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);const Fe=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(fe),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),xt&&Je.render(oe);const We=A.toneMapping;A.toneMapping=Qr;const lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),x.setupLightsView(Q),pe===!0&&Ee.setGlobalState(A.clippingPlanes,Q),Fn(b,oe,Q),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),wt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ye=0,It=q.length;Ye<It;Ye++){const _t=q[Ye],an=_t.object,tn=_t.geometry,Nt=_t.material,Ze=_t.group;if(Nt.side===pr&&an.layers.test(Q.layers)){const ln=Nt.side;Nt.side=ci,Nt.needsUpdate=!0,jn(an,oe,Q,tn,Nt,Ze),Nt.side=ln,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}A.setRenderTarget(Fe),A.setClearColor(fe,de),lt!==void 0&&(Q.viewport=lt),A.toneMapping=We}function Fn(b,q,oe){const Q=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Te=b.length;$<Te;$++){const Le=b[$],Fe=Le.object,We=Le.geometry,lt=Q===null?Le.material:Q,ot=Le.group;Fe.layers.test(oe.layers)&&jn(Fe,q,oe,We,lt,ot)}}function jn(b,q,oe,Q,$,Te){b.onBeforeRender(A,q,oe,Q,$,Te),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(A,q,oe,Q,b,Te),$.transparent===!0&&$.side===pr&&$.forceSinglePass===!1?($.side=ci,$.needsUpdate=!0,A.renderBufferDirect(oe,q,Q,$,b,Te),$.side=Jr,$.needsUpdate=!0,A.renderBufferDirect(oe,q,Q,$,b,Te),$.side=pr):A.renderBufferDirect(oe,q,Q,$,b,Te),b.onAfterRender(A,q,oe,Q,$,Te)}function pt(b,q,oe){q.isScene!==!0&&(q=Ft);const Q=ke.get(b),$=x.state.lights,Te=x.state.shadowsArray,Le=$.state.version,Fe=je.getParameters(b,$.state,Te,q,oe),We=je.getProgramCacheKey(Fe);let lt=Q.programs;Q.environment=b.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(b.isMeshStandardMaterial?ie:w).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,lt===void 0&&(b.addEventListener("dispose",Ue),lt=new Map,Q.programs=lt);let ot=lt.get(We);if(ot!==void 0){if(Q.currentProgram===ot&&Q.lightsStateVersion===Le)return ht(b,Fe),ot}else Fe.uniforms=je.getUniforms(b),b.onBeforeCompile(Fe,A),ot=je.acquireProgram(Fe,We),lt.set(We,ot),Q.uniforms=Fe.uniforms;const Ye=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ye.clippingPlanes=Ee.uniform),ht(b,Fe),Q.needsLights=Xt(b),Q.lightsStateVersion=Le,Q.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=ot,Q.uniformsList=null,ot}function vt(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Sc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function ht(b,q){const oe=ke.get(b);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function Ve(b,q,oe,Q,$){q.isScene!==!0&&(q=Ft),L.resetTextureUnits();const Te=q.fog,Le=Q.isMeshStandardMaterial?q.environment:null,Fe=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Co,We=(Q.isMeshStandardMaterial?ie:w).get(Q.envMap||Le),lt=Q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!oe.morphAttributes.position,It=!!oe.morphAttributes.normal,_t=!!oe.morphAttributes.color;let an=Qr;Q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(an=A.toneMapping);const tn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Nt=tn!==void 0?tn.length:0,Ze=ke.get(Q),ln=x.state.lights;if(pe===!0&&(Se===!0||b!==R)){const Dn=b===R&&Q.id===P;Ee.setState(Q,b,Dn)}let Lt=!1;Q.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ln.state.version||Ze.outputColorSpace!==Fe||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isBatchedMesh&&Ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==We||Q.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==ot||Ze.morphTargets!==Ye||Ze.morphNormals!==It||Ze.morphColors!==_t||Ze.toneMapping!==an||Ze.morphTargetsCount!==Nt)&&(Lt=!0):(Lt=!0,Ze.__version=Q.version);let On=Ze.currentProgram;Lt===!0&&(On=pt(Q,q,$));let Er=!1,Yn=!1,Qi=!1;const qt=On.getUniforms(),kn=Ze.uniforms;if(He.useProgram(On.program)&&(Er=!0,Yn=!0,Qi=!0),Q.id!==P&&(P=Q.id,Yn=!0),Er||R!==b){He.buffers.depth.getReversed()?(ve.copy(b.projectionMatrix),ax(ve),lx(ve),qt.setValue(G,"projectionMatrix",ve)):qt.setValue(G,"projectionMatrix",b.projectionMatrix),qt.setValue(G,"viewMatrix",b.matrixWorldInverse);const An=qt.map.cameraPosition;An!==void 0&&An.setValue(G,Ie.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&qt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&qt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Yn=!0,Qi=!0)}if($.isSkinnedMesh){qt.setOptional(G,$,"bindMatrix"),qt.setOptional(G,$,"bindMatrixInverse");const Dn=$.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),qt.setValue(G,"boneTexture",Dn.boneTexture,L))}$.isBatchedMesh&&(qt.setOptional(G,$,"batchingTexture"),qt.setValue(G,"batchingTexture",$._matricesTexture,L),qt.setOptional(G,$,"batchingIdTexture"),qt.setValue(G,"batchingIdTexture",$._indirectTexture,L),qt.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&qt.setValue(G,"batchingColorTexture",$._colorsTexture,L));const wn=oe.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&nt.update($,oe,On),(Yn||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,qt.setValue(G,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(kn.envMap.value=We,kn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(kn.envMapIntensity.value=q.environmentIntensity),Yn&&(qt.setValue(G,"toneMappingExposure",A.toneMappingExposure),Ze.needsLights&&dt(kn,Qi),Te&&Q.fog===!0&&Ce.refreshFogUniforms(kn,Te),Ce.refreshMaterialUniforms(kn,Q,H,he,x.state.transmissionRenderTarget[b.id]),Sc.upload(G,vt(Ze),kn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Sc.upload(G,vt(Ze),kn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&qt.setValue(G,"center",$.center),qt.setValue(G,"modelViewMatrix",$.modelViewMatrix),qt.setValue(G,"normalMatrix",$.normalMatrix),qt.setValue(G,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Dn=Q.uniformsGroups;for(let An=0,kt=Dn.length;An<kt;An++){const Gi=Dn[An];Y.update(Gi,On),Y.bind(Gi,On)}}return On}function dt(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Xt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,q,oe){ke.get(b.texture).__webglTexture=q,ke.get(b.depthTexture).__webglTexture=oe;const Q=ke.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=oe===void 0,Q.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,q){const oe=ke.get(b);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const jt=G.createFramebuffer();this.setRenderTarget=function(b,q=0,oe=0){W=b,N=q,O=oe;let Q=!0,$=null,Te=!1,Le=!1;if(b){const We=ke.get(b);if(We.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(G.FRAMEBUFFER,null),Q=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(We.__hasExternalTextures)L.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ye=b.depthTexture;if(We.__boundDepthTexture!==Ye){if(Ye!==null&&ke.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const lt=b.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Le=!0);const ot=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?$=ot[q][oe]:$=ot[q],Te=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?$=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(ot)?$=ot[oe]:$=ot,k.copy(b.viewport),se.copy(b.scissor),te=b.scissorTest}else k.copy(F).multiplyScalar(H).floor(),se.copy(le).multiplyScalar(H).floor(),te=Pe;if(oe!==0&&($=jt),He.bindFramebuffer(G.FRAMEBUFFER,$)&&Q&&He.drawBuffers(b,$),He.viewport(k),He.scissor(se),He.setScissorTest(te),Te){const We=ke.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,oe)}else if(Le){const We=ke.get(b.texture),lt=q;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.__webglTexture,oe,lt)}else if(b!==null&&oe!==0){const We=ke.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,We.__webglTexture,oe)}P=-1},this.readRenderTargetPixels=function(b,q,oe,Q,$,Te,Le){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){He.bindFramebuffer(G.FRAMEBUFFER,Fe);try{const We=b.texture,lt=We.format,ot=We.type;if(!mt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-Q&&oe>=0&&oe<=b.height-$&&G.readPixels(q,oe,Q,$,ut.convert(lt),ut.convert(ot),Te)}finally{const We=W!==null?ke.get(W).__webglFramebuffer:null;He.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(b,q,oe,Q,$,Te,Le){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){const We=b.texture,lt=We.format,ot=We.type;if(!mt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=b.width-Q&&oe>=0&&oe<=b.height-$){He.bindFramebuffer(G.FRAMEBUFFER,Fe);const Ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.bufferData(G.PIXEL_PACK_BUFFER,Te.byteLength,G.STREAM_READ),G.readPixels(q,oe,Q,$,ut.convert(lt),ut.convert(ot),0);const It=W!==null?ke.get(W).__webglFramebuffer:null;He.bindFramebuffer(G.FRAMEBUFFER,It);const _t=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ox(G,_t,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Te),G.deleteBuffer(Ye),G.deleteSync(_t),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,q=null,oe=0){b.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-oe),$=Math.floor(b.image.width*Q),Te=Math.floor(b.image.height*Q),Le=q!==null?q.x:0,Fe=q!==null?q.y:0;L.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Le,Fe,$,Te),He.unbindTexture()};const Mr=G.createFramebuffer(),Fo=G.createFramebuffer();this.copyTextureToTexture=function(b,q,oe=null,Q=null,$=0,Te=null){b.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],q=arguments[2],Te=arguments[3]||0,oe=null),Te===null&&($!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Le,Fe,We,lt,ot,Ye,It,_t,an;const tn=b.isCompressedTexture?b.mipmaps[Te]:b.image;if(oe!==null)Le=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,lt=oe.min.x,ot=oe.min.y,Ye=oe.isBox3?oe.min.z:0;else{const wn=Math.pow(2,-$);Le=Math.floor(tn.width*wn),Fe=Math.floor(tn.height*wn),b.isDataArrayTexture?We=tn.depth:b.isData3DTexture?We=Math.floor(tn.depth*wn):We=1,lt=0,ot=0,Ye=0}Q!==null?(It=Q.x,_t=Q.y,an=Q.z):(It=0,_t=0,an=0);const Nt=ut.convert(q.format),Ze=ut.convert(q.type);let ln;q.isData3DTexture?(L.setTexture3D(q,0),ln=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),ln=G.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),ln=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Lt=G.getParameter(G.UNPACK_ROW_LENGTH),On=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Er=G.getParameter(G.UNPACK_SKIP_PIXELS),Yn=G.getParameter(G.UNPACK_SKIP_ROWS),Qi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,tn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,lt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ot),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye);const qt=b.isDataArrayTexture||b.isData3DTexture,kn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const wn=ke.get(b),Dn=ke.get(q),An=ke.get(wn.__renderTarget),kt=ke.get(Dn.__renderTarget);He.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Gi=0;Gi<We;Gi++)qt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(b).__webglTexture,$,Ye+Gi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(q).__webglTexture,Te,an+Gi)),G.blitFramebuffer(lt,ot,Le,Fe,It,_t,Le,Fe,G.DEPTH_BUFFER_BIT,G.NEAREST);He.bindFramebuffer(G.READ_FRAMEBUFFER,null),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||ke.has(b)){const wn=ke.get(b),Dn=ke.get(q);He.bindFramebuffer(G.READ_FRAMEBUFFER,Mr),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fo);for(let An=0;An<We;An++)qt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,$,Ye+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,$),kn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dn.__webglTexture,Te,an+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dn.__webglTexture,Te),$!==0?G.blitFramebuffer(lt,ot,Le,Fe,It,_t,Le,Fe,G.COLOR_BUFFER_BIT,G.NEAREST):kn?G.copyTexSubImage3D(ln,Te,It,_t,an+An,lt,ot,Le,Fe):G.copyTexSubImage2D(ln,Te,It,_t,lt,ot,Le,Fe);He.bindFramebuffer(G.READ_FRAMEBUFFER,null),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else kn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(ln,Te,It,_t,an,Le,Fe,We,Nt,Ze,tn.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(ln,Te,It,_t,an,Le,Fe,We,Nt,tn.data):G.texSubImage3D(ln,Te,It,_t,an,Le,Fe,We,Nt,Ze,tn):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Te,It,_t,Le,Fe,Nt,Ze,tn.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Te,It,_t,tn.width,tn.height,Nt,tn.data):G.texSubImage2D(G.TEXTURE_2D,Te,It,_t,Le,Fe,Nt,Ze,tn);G.pixelStorei(G.UNPACK_ROW_LENGTH,Lt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,On),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Er),G.pixelStorei(G.UNPACK_SKIP_ROWS,Yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qi),Te===0&&q.generateMipmaps&&G.generateMipmap(ln),He.unbindTexture()},this.copyTextureToTexture3D=function(b,q,oe=null,Q=null,$=0){return b.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],q=arguments[3],$=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,q,oe,Q,$)},this.initRenderTarget=function(b){ke.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),He.unbindTexture()},this.resetState=function(){N=0,O=0,W=null,He.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const ev={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ka{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yw=new Na(-1,1,1,-1,0,1);class xw extends ei{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Sw=new xw;class tv{constructor(e){this._mesh=new Ut(Sw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mw extends ka{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cc.clone(e.uniforms),this.material=new Jn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tv(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class f0 extends ka{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Ew extends ka{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ct);this._width=i.width,this._height=i.height,t=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mw(ev),this.copyPass.material.blending=_r,this.clock=new q0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}f0!==void 0&&(c instanceof f0?i=!0:c instanceof Ew&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ww extends ka{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const Aw={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Lo extends ka{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ct(e.x,e.y):new ct(256,256),this.clearColor=new it(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(a,c,{type:yr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const v=new Ri(a,c,{type:yr});v.texture.name="UnrealBloomPass.h"+m,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Ri(a,c,{type:yr});_.texture.name="UnrealBloomPass.v"+m,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),a=Math.round(a/2),c=Math.round(c/2)}const u=Aw;this.highPassUniforms=Cc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jn({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(h[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new ct(1/a,1/c),a=Math.round(a/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=ev;this.copyUniforms=Cc.clone(g.uniforms),this.blendMaterial=new Jn({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:Mc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new it,this.oldClearAlpha=1,this.basic=new sd,this.fsQuad=new tv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Lo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Lo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),u=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Jn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Jn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Lo.BlurDirectionX=new ct(1,0);Lo.BlurDirectionY=new ct(0,1);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var wi=Uint8Array,_o=Uint16Array,Cw=Int32Array,nv=new wi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),iv=new wi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rw=new wi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rv=function(o,e){for(var t=new _o(31),i=0;i<31;++i)t[i]=e+=1<<o[i-1];for(var s=new Cw(t[30]),i=1;i<30;++i)for(var a=t[i];a<t[i+1];++a)s[a]=a-t[i]<<5|i;return{b:t,r:s}},sv=rv(nv,2),ov=sv.b,bw=sv.r;ov[28]=258,bw[258]=28;var Pw=rv(iv,0),Lw=Pw.b,Yh=new _o(32768);for(var en=0;en<32768;++en){var $r=(en&43690)>>1|(en&21845)<<1;$r=($r&52428)>>2|($r&13107)<<2,$r=($r&61680)>>4|($r&3855)<<4,Yh[en]=(($r&65280)>>8|($r&255)<<8)>>1}var Aa=function(o,e,t){for(var i=o.length,s=0,a=new _o(e);s<i;++s)o[s]&&++a[o[s]-1];var c=new _o(e);for(s=1;s<e;++s)c[s]=c[s-1]+a[s-1]<<1;var u;if(t){u=new _o(1<<e);var h=15-e;for(s=0;s<i;++s)if(o[s])for(var d=s<<4|o[s],g=e-o[s],m=c[o[s]-1]++<<g,v=m|(1<<g)-1;m<=v;++m)u[Yh[m]>>h]=d}else for(u=new _o(i),s=0;s<i;++s)o[s]&&(u[s]=Yh[c[o[s]-1]++]>>15-o[s]);return u},Ba=new wi(288);for(var en=0;en<144;++en)Ba[en]=8;for(var en=144;en<256;++en)Ba[en]=9;for(var en=256;en<280;++en)Ba[en]=7;for(var en=280;en<288;++en)Ba[en]=8;var av=new wi(32);for(var en=0;en<32;++en)av[en]=5;var Dw=Aa(Ba,9,1),Iw=Aa(av,5,1),th=function(o){for(var e=o[0],t=1;t<o.length;++t)o[t]>e&&(e=o[t]);return e},ki=function(o,e,t){var i=e/8|0;return(o[i]|o[i+1]<<8)>>(e&7)&t},nh=function(o,e){var t=e/8|0;return(o[t]|o[t+1]<<8|o[t+2]<<16)>>(e&7)},Uw=function(o){return(o+7)/8|0},Nw=function(o,e,t){return(t==null||t>o.length)&&(t=o.length),new wi(o.subarray(e,t))},Fw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Bi=function(o,e,t){var i=new Error(e||Fw[o]);if(i.code=o,Error.captureStackTrace&&Error.captureStackTrace(i,Bi),!t)throw i;return i},Ow=function(o,e,t,i){var s=o.length,a=0;if(!s||e.f&&!e.l)return t||new wi(0);var c=!t,u=c||e.i!=2,h=e.i;c&&(t=new wi(s*3));var d=function(Ft){var xt=t.length;if(Ft>xt){var Gt=new wi(Math.max(xt*2,Ft));Gt.set(t),t=Gt}},g=e.f||0,m=e.p||0,v=e.b||0,_=e.l,M=e.d,E=e.m,S=e.n,x=s*8;do{if(!_){g=ki(o,m,1);var I=ki(o,m+1,3);if(m+=3,I)if(I==1)_=Dw,M=Iw,E=9,S=5;else if(I==2){var N=ki(o,m,31)+257,O=ki(o,m+10,15)+4,W=N+ki(o,m+5,31)+1;m+=14;for(var P=new wi(W),R=new wi(19),k=0;k<O;++k)R[Rw[k]]=ki(o,m+k*3,7);m+=O*3;for(var se=th(R),te=(1<<se)-1,fe=Aa(R,se,1),k=0;k<W;){var de=fe[ki(o,m,te)];m+=de&15;var C=de>>4;if(C<16)P[k++]=C;else{var ce=0,he=0;for(C==16?(he=3+ki(o,m,3),m+=2,ce=P[k-1]):C==17?(he=3+ki(o,m,7),m+=3):C==18&&(he=11+ki(o,m,127),m+=7);he--;)P[k++]=ce}}var H=P.subarray(0,N),ue=P.subarray(N);E=th(H),S=th(ue),_=Aa(H,E,1),M=Aa(ue,S,1)}else Bi(1);else{var C=Uw(m)+4,A=o[C-4]|o[C-3]<<8,B=C+A;if(B>s){h&&Bi(0);break}u&&d(v+A),t.set(o.subarray(C,B),v),e.b=v+=A,e.p=m=B*8,e.f=g;continue}if(m>x){h&&Bi(0);break}}u&&d(v+131072);for(var ee=(1<<E)-1,F=(1<<S)-1,le=m;;le=m){var ce=_[nh(o,m)&ee],Pe=ce>>4;if(m+=ce&15,m>x){h&&Bi(0);break}if(ce||Bi(2),Pe<256)t[v++]=Pe;else if(Pe==256){le=m,_=null;break}else{var re=Pe-254;if(Pe>264){var k=Pe-257,pe=nv[k];re=ki(o,m,(1<<pe)-1)+ov[k],m+=pe}var Se=M[nh(o,m)&F],ve=Se>>4;Se||Bi(3),m+=Se&15;var ue=Lw[ve];if(ve>3){var pe=iv[ve];ue+=nh(o,m)&(1<<pe)-1,m+=pe}if(m>x){h&&Bi(0);break}u&&d(v+131072);var Ae=v+re;if(v<ue){var Ie=a-ue,Qe=Math.min(ue,Ae);for(Ie+v<0&&Bi(3);v<Qe;++v)t[v]=i[Ie+v]}for(;v<Ae;++v)t[v]=t[v-ue]}}e.l=_,e.p=le,e.b=v,e.f=g,_&&(g=1,e.m=E,e.d=M,e.n=S)}while(!g);return v!=t.length&&c?Nw(t,0,v):t.subarray(0,v)},kw=new wi(0),Bw=function(o,e){return((o[0]&15)!=8||o[0]>>4>7||(o[0]<<8|o[1])%31)&&Bi(6,"invalid zlib data"),(o[1]>>5&1)==+!e&&Bi(6,"invalid zlib data: "+(o[1]&32?"need":"unexpected")+" dictionary"),(o[1]>>3&4)+2};function zw(o,e){return Ow(o.subarray(Bw(o,e),-4),{i:2},e,e)}var Vw=typeof TextDecoder<"u"&&new TextDecoder,Hw=0;try{Vw.decode(kw,{stream:!0}),Hw=1}catch{}function lv(o,e,t){const i=t.length-o-1;if(e>=t[i])return i-1;if(e<=t[o])return o;let s=o,a=i,c=Math.floor((s+a)/2);for(;e<t[c]||e>=t[c+1];)e<t[c]?a=c:s=c,c=Math.floor((s+a)/2);return c}function Gw(o,e,t,i){const s=[],a=[],c=[];s[0]=1;for(let u=1;u<=t;++u){a[u]=e-i[o+1-u],c[u]=i[o+u]-e;let h=0;for(let d=0;d<u;++d){const g=c[d+1],m=a[u-d],v=s[d]/(g+m);s[d]=h+g*v,h=m*v}s[u]=h}return s}function Ww(o,e,t,i){const s=lv(o,i,e),a=Gw(s,i,o,e),c=new Dt(0,0,0,0);for(let u=0;u<=o;++u){const h=t[s-o+u],d=a[u],g=h.w*d;c.x+=h.x*g,c.y+=h.y*g,c.z+=h.z*g,c.w+=h.w*d}return c}function Xw(o,e,t,i,s){const a=[];for(let m=0;m<=t;++m)a[m]=0;const c=[];for(let m=0;m<=i;++m)c[m]=a.slice(0);const u=[];for(let m=0;m<=t;++m)u[m]=a.slice(0);u[0][0]=1;const h=a.slice(0),d=a.slice(0);for(let m=1;m<=t;++m){h[m]=e-s[o+1-m],d[m]=s[o+m]-e;let v=0;for(let _=0;_<m;++_){const M=d[_+1],E=h[m-_];u[m][_]=M+E;const S=u[_][m-1]/u[m][_];u[_][m]=v+M*S,v=E*S}u[m][m]=v}for(let m=0;m<=t;++m)c[0][m]=u[m][t];for(let m=0;m<=t;++m){let v=0,_=1;const M=[];for(let E=0;E<=t;++E)M[E]=a.slice(0);M[0][0]=1;for(let E=1;E<=i;++E){let S=0;const x=m-E,I=t-E;m>=E&&(M[_][0]=M[v][0]/u[I+1][x],S=M[_][0]*u[x][I]);const C=x>=-1?1:-x,A=m-1<=I?E-1:t-m;for(let N=C;N<=A;++N)M[_][N]=(M[v][N]-M[v][N-1])/u[I+1][x+N],S+=M[_][N]*u[x+N][I];m<=I&&(M[_][E]=-M[v][E-1]/u[I+1][m],S+=M[_][E]*u[m][I]),c[E][m]=S;const B=v;v=_,_=B}}let g=t;for(let m=1;m<=i;++m){for(let v=0;v<=t;++v)c[m][v]*=g;g*=t-m}return c}function jw(o,e,t,i,s){const a=s<o?s:o,c=[],u=lv(o,i,e),h=Xw(u,i,o,a,e),d=[];for(let g=0;g<t.length;++g){const m=t[g].clone(),v=m.w;m.x*=v,m.y*=v,m.z*=v,d[g]=m}for(let g=0;g<=a;++g){const m=d[u-o].clone().multiplyScalar(h[g][0]);for(let v=1;v<=o;++v)m.add(d[u-o+v].clone().multiplyScalar(h[g][v]));c[g]=m}for(let g=a+1;g<=s+1;++g)c[g]=new Dt(0,0,0);return c}function Yw(o,e){let t=1;for(let s=2;s<=o;++s)t*=s;let i=1;for(let s=2;s<=e;++s)i*=s;for(let s=2;s<=o-e;++s)i*=s;return t/i}function qw(o){const e=o.length,t=[],i=[];for(let a=0;a<e;++a){const c=o[a];t[a]=new j(c.x,c.y,c.z),i[a]=c.w}const s=[];for(let a=0;a<e;++a){const c=t[a].clone();for(let u=1;u<=a;++u)c.sub(s[a-u].clone().multiplyScalar(Yw(a,u)*i[u]));s[a]=c.divideScalar(i[0])}return s}function $w(o,e,t,i,s){const a=jw(o,e,t,i,s);return qw(a)}class Kw extends Bx{constructor(e,t,i,s,a){super();const c=t?t.length-1:0,u=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=a||c;for(let h=0;h<u;++h){const d=i[h];this.controlPoints[h]=new Dt(d.x,d.y,d.z,d.w)}}getPoint(e,t=new j){const i=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=Ww(this.degree,this.knots,this.controlPoints,s);return a.w!==1&&a.divideScalar(a.w),i.set(a.x,a.y,a.z)}getTangent(e,t=new j){const i=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=$w(this.degree,this.knots,this.controlPoints,s,1);return i.copy(a[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Dt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let At,hn,Qn;class h0 extends Rs{constructor(e){super(e)}load(e,t,i,s){const a=this,c=a.path===""?wS.extractUrlBase(e):a.path,u=new _S(this.manager);u.setPath(a.path),u.setResponseType("arraybuffer"),u.setRequestHeader(a.requestHeader),u.setWithCredentials(a.withCredentials),u.load(e,function(h){try{t(a.parse(h,c))}catch(d){s?s(d):console.error(d),a.manager.itemError(e)}},i,s)}parse(e,t){if(nA(e))At=new tA().parse(e);else{const s=fv(e);if(!iA(s))throw new Error("THREE.FBXLoader: Unknown format.");if(p0(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+p0(s));At=new eA().parse(s)}const i=new xS(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Zw(i,this.manager).parse(At)}}class Zw{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){hn=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),s=this.parseDeformers(),a=new Qw().parse(s);return this.parseScene(s,a,i),Qn}parseConnections(){const e=new Map;return"Connections"in At&&At.Connections.connections.forEach(function(i){const s=i[0],a=i[1],c=i[2];e.has(s)||e.set(s,{parents:[],children:[]});const u={ID:a,relationship:c};e.get(s).parents.push(u),e.has(a)||e.set(a,{parents:[],children:[]});const h={ID:s,relationship:c};e.get(a).children.push(h)}),e}parseImages(){const e={},t={};if("Video"in At.Objects){const i=At.Objects.Video;for(const s in i){const a=i[s],c=parseInt(s);if(e[c]=a.RelativeFilename||a.Filename,"Content"in a){const u=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,h=typeof a.Content=="string"&&a.Content!=="";if(u||h){const d=this.parseImage(i[s]);t[a.RelativeFilename||a.Filename]=d}}}}for(const i in e){const s=e[i];t[s]!==void 0?e[i]=t[s]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,s=i.slice(i.lastIndexOf(".")+1).toLowerCase();let a;switch(s){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const c=new Uint8Array(t);return window.URL.createObjectURL(new Blob([c],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in At.Objects){const i=At.Objects.Texture;for(const s in i){const a=this.parseTexture(i[s],e);t.set(parseInt(s),a)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const s=e.WrapModeU,a=e.WrapModeV,c=s!==void 0?s.value:0,u=a!==void 0?a.value:0;if(i.wrapS=c===0?Ca:mr,i.wrapT=u===0?Ca:mr,"Scaling"in e){const h=e.Scaling.value;i.repeat.x=h[0],i.repeat.y=h[1]}if("Translation"in e){const h=e.Translation.value;i.offset.x=h[0],i.offset.y=h[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),s=e.FileName.split(".").pop().toLowerCase(),a=i.has(s)?this.manager.getHandler(`.${s}`):this.textureLoader;if(!a)return console.warn(`FBXLoader: ${s.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Sn;const c=a.path;c||a.setPath(this.textureLoader.path);const u=hn.get(e.id).children;let h;u!==void 0&&u.length>0&&t[u[0].ID]!==void 0&&(h=t[u[0].ID],(h.indexOf("blob:")===0||h.indexOf("data:")===0)&&a.setPath(void 0));const d=a.load(h);return a.setPath(c),d}parseMaterials(e){const t=new Map;if("Material"in At.Objects){const i=At.Objects.Material;for(const s in i){const a=this.parseMaterial(i[s],e);a!==null&&t.set(parseInt(s),a)}}return t}parseMaterial(e,t){const i=e.id,s=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!hn.has(i))return null;const c=this.parseParameters(e,t,i);let u;switch(a.toLowerCase()){case"phong":u=new Ti;break;case"lambert":u=new iS;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),u=new Ti;break}return u.setValues(c),u.name=s,u}parseParameters(e,t,i){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=Tt.toWorkingColorSpace(new it().fromArray(e.Diffuse.value),Qt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=Tt.toWorkingColorSpace(new it().fromArray(e.DiffuseColor.value),Qt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=Tt.toWorkingColorSpace(new it().fromArray(e.Emissive.value),Qt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=Tt.toWorkingColorSpace(new it().fromArray(e.EmissiveColor.value),Qt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=Tt.toWorkingColorSpace(new it().fromArray(e.Specular.value),Qt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=Tt.toWorkingColorSpace(new it().fromArray(e.SpecularColor.value),Qt));const a=this;return hn.get(i).children.forEach(function(c){const u=c.relationship;switch(u){case"Bump":s.bumpMap=a.getTexture(t,c.ID);break;case"Maya|TEX_ao_map":s.aoMap=a.getTexture(t,c.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=a.getTexture(t,c.ID),s.map!==void 0&&(s.map.colorSpace=Qt);break;case"DisplacementColor":s.displacementMap=a.getTexture(t,c.ID);break;case"EmissiveColor":s.emissiveMap=a.getTexture(t,c.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=Qt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=a.getTexture(t,c.ID);break;case"ReflectionColor":s.envMap=a.getTexture(t,c.ID),s.envMap!==void 0&&(s.envMap.mapping=Ec,s.envMap.colorSpace=Qt);break;case"SpecularColor":s.specularMap=a.getTexture(t,c.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=Qt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=a.getTexture(t,c.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",u);break}}),s}getTexture(e,t){return"LayeredTexture"in At.Objects&&t in At.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=hn.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in At.Objects){const i=At.Objects.Deformer;for(const s in i){const a=i[s],c=hn.get(parseInt(s));if(a.attrType==="Skin"){const u=this.parseSkeleton(c,i);u.ID=s,c.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),u.geometryID=c.parents[0].ID,e[s]=u}else if(a.attrType==="BlendShape"){const u={id:s};u.rawTargets=this.parseMorphTargets(c,i),u.id=s,c.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=u}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(s){const a=t[s.ID];if(a.attrType!=="Cluster")return;const c={ID:s.ID,indices:[],weights:[],transformLink:new Ke().fromArray(a.TransformLink.a)};"Indexes"in a&&(c.indices=a.Indexes.a,c.weights=a.Weights.a),i.push(c)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let s=0;s<e.children.length;s++){const a=e.children[s],c=t[a.ID],u={name:c.attrName,initialWeight:c.DeformPercent,id:c.id,fullWeights:c.FullWeights.a};if(c.attrType!=="BlendShapeChannel")return;u.geoID=hn.get(parseInt(a.ID)).children.filter(function(h){return h.relationship===void 0})[0].ID,i.push(u)}return i}parseScene(e,t,i){Qn=new vr;const s=this.parseModels(e.skeletons,t,i),a=At.Objects.Model,c=this;s.forEach(function(h){const d=a[h.ID];c.setLookAtProperties(h,d),hn.get(h.ID).parents.forEach(function(m){const v=s.get(m.ID);v!==void 0&&v.add(h)}),h.parent===null&&Qn.add(h)}),this.bindSkeleton(e.skeletons,t,s),this.addGlobalSceneSettings(),Qn.traverse(function(h){if(h.userData.transformData){h.parent&&(h.userData.transformData.parentMatrix=h.parent.matrix,h.userData.transformData.parentMatrixWorld=h.parent.matrixWorld);const d=uv(h.userData.transformData);h.applyMatrix4(d),h.updateWorldMatrix()}});const u=new Jw().parse();Qn.children.length===1&&Qn.children[0].isGroup&&(Qn.children[0].animations=u,Qn=Qn.children[0]),Qn.animations=u}parseModels(e,t,i){const s=new Map,a=At.Objects.Model;for(const c in a){const u=parseInt(c),h=a[c],d=hn.get(u);let g=this.buildSkeleton(d,e,u,h.attrName);if(!g){switch(h.attrType){case"Camera":g=this.createCamera(d);break;case"Light":g=this.createLight(d);break;case"Mesh":g=this.createMesh(d,t,i);break;case"NurbsCurve":g=this.createCurve(d,t);break;case"LimbNode":case"Root":g=new Gh;break;case"Null":default:g=new vr;break}g.name=h.attrName?Ht.sanitizeNodeName(h.attrName):"",g.userData.originalName=h.attrName,g.ID=u}this.getTransformData(g,h),s.set(u,g)}return s}buildSkeleton(e,t,i,s){let a=null;return e.parents.forEach(function(c){for(const u in t){const h=t[u];h.rawBones.forEach(function(d,g){if(d.ID===c.ID){const m=a;a=new Gh,a.matrixWorld.copy(d.transformLink),a.name=s?Ht.sanitizeNodeName(s):"",a.userData.originalName=s,a.ID=i,h.bones[g]=a,m!==null&&a.add(m)}})}}),a}createCamera(e){let t,i;if(e.children.forEach(function(s){const a=At.Objects.NodeAttribute[s.ID];a!==void 0&&(i=a)}),i===void 0)t=new zt;else{let s=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(s=1);let a=1;i.NearPlane!==void 0&&(a=i.NearPlane.value/1e3);let c=1e3;i.FarPlane!==void 0&&(c=i.FarPlane.value/1e3);let u=window.innerWidth,h=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(u=i.AspectWidth.value,h=i.AspectHeight.value);const d=u/h;let g=45;i.FieldOfView!==void 0&&(g=i.FieldOfView.value);const m=i.FocalLength?i.FocalLength.value:null;switch(s){case 0:t=new li(g,d,a,c),m!==null&&t.setFocalLength(m);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new zt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new zt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(s){const a=At.Objects.NodeAttribute[s.ID];a!==void 0&&(i=a)}),i===void 0)t=new zt;else{let s;i.LightType===void 0?s=0:s=i.LightType.value;let a=16777215;i.Color!==void 0&&(a=Tt.toWorkingColorSpace(new it().fromArray(i.Color.value),Qt));let c=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(c=0);let u=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?u=0:u=i.FarAttenuationEnd.value);const h=1;switch(s){case 0:t=new kg(a,c,u,h);break;case 1:t=new j0(a,c);break;case 2:let d=Math.PI/3;i.InnerAngle!==void 0&&(d=yn.degToRad(i.InnerAngle.value));let g=0;i.OuterAngle!==void 0&&(g=yn.degToRad(i.OuterAngle.value),g=Math.max(g,1)),t=new MS(a,c,u,d,g,h);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new kg(a,c);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let s,a=null,c=null;const u=[];return e.children.forEach(function(h){t.has(h.ID)&&(a=t.get(h.ID)),i.has(h.ID)&&u.push(i.get(h.ID))}),u.length>1?c=u:u.length>0?c=u[0]:(c=new Ti({name:Rs.DEFAULT_MATERIAL_NAME,color:13421772}),u.push(c)),"color"in a.attributes&&u.forEach(function(h){h.vertexColors=!0}),a.FBX_Deformer?(s=new Dx(a,c),s.normalizeSkinWeights()):s=new Ut(a,c),s}createCurve(e,t){const i=e.children.reduce(function(a,c){return t.has(c.ID)&&(a=t.get(c.ID)),a},null),s=new B0({name:Rs.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new kx(i,s)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=Fa(t.RotationOrder.value):i.eulerOrder=Fa(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&hn.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const a=At.Objects.Model[s.ID];if("Lcl_Translation"in a){const c=a.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(c),Qn.add(e.target)):e.lookAt(new j().fromArray(c))}}})}bindSkeleton(e,t,i){const s=this.parsePoseNodes();for(const a in e){const c=e[a];hn.get(parseInt(c.ID)).parents.forEach(function(h){if(t.has(h.ID)){const d=h.ID;hn.get(d).parents.forEach(function(m){i.has(m.ID)&&i.get(m.ID).bind(new ad(c.bones),s[m.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in At.Objects){const t=At.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const s=t[i].PoseNode;Array.isArray(s)?s.forEach(function(a){e[a.Node]=new Ke().fromArray(a.Matrix.a)}):e[s.Node]=new Ke().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in At){if("AmbientColor"in At.GlobalSettings){const e=At.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],s=e[2];if(t!==0||i!==0||s!==0){const a=new it().setRGB(t,i,s,Qt);Qn.add(new Y0(a,1))}}"UnitScaleFactor"in At.GlobalSettings&&(Qn.userData.unitScaleFactor=At.GlobalSettings.UnitScaleFactor.value)}}}class Qw{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in At.Objects){const i=At.Objects.Geometry;for(const s in i){const a=hn.get(parseInt(s)),c=this.parseGeometry(a,i[s],e);t.set(parseInt(s),c)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const s=i.skeletons,a=[],c=e.parents.map(function(m){return At.Objects.Model[m.ID]});if(c.length===0)return;const u=e.children.reduce(function(m,v){return s[v.ID]!==void 0&&(m=s[v.ID]),m},null);e.children.forEach(function(m){i.morphTargets[m.ID]!==void 0&&a.push(i.morphTargets[m.ID])});const h=c[0],d={};"RotationOrder"in h&&(d.eulerOrder=Fa(h.RotationOrder.value)),"InheritType"in h&&(d.inheritType=parseInt(h.InheritType.value)),"GeometricTranslation"in h&&(d.translation=h.GeometricTranslation.value),"GeometricRotation"in h&&(d.rotation=h.GeometricRotation.value),"GeometricScaling"in h&&(d.scale=h.GeometricScaling.value);const g=uv(d);return this.genGeometry(t,u,a,g)}genGeometry(e,t,i,s){const a=new ei;e.attrName&&(a.name=e.attrName);const c=this.parseGeoNode(e,t),u=this.genBuffers(c),h=new Jt(u.vertex,3);if(h.applyMatrix4(s),a.setAttribute("position",h),u.colors.length>0&&a.setAttribute("color",new Jt(u.colors,3)),t&&(a.setAttribute("skinIndex",new od(u.weightsIndices,4)),a.setAttribute("skinWeight",new Jt(u.vertexWeights,4)),a.FBX_Deformer=t),u.normal.length>0){const d=new yt().getNormalMatrix(s),g=new Jt(u.normal,3);g.applyNormalMatrix(d),a.setAttribute("normal",g)}if(u.uvs.forEach(function(d,g){const m=g===0?"uv":`uv${g}`;a.setAttribute(m,new Jt(u.uvs[g],2))}),c.material&&c.material.mappingType!=="AllSame"){let d=u.materialIndex[0],g=0;if(u.materialIndex.forEach(function(m,v){m!==d&&(a.addGroup(g,v-g,d),d=m,g=v)}),a.groups.length>0){const m=a.groups[a.groups.length-1],v=m.start+m.count;v!==u.materialIndex.length&&a.addGroup(v,u.materialIndex.length-v,d)}a.groups.length===0&&a.addGroup(0,u.materialIndex.length,u.materialIndex[0])}return this.addMorphTargets(a,e,i,s),a}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(s,a){s.indices.forEach(function(c,u){i.weightTable[c]===void 0&&(i.weightTable[c]=[]),i.weightTable[c].push({id:a,weight:s.weights[u]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,s=0,a=!1,c=[],u=[],h=[],d=[],g=[],m=[];const v=this;return e.vertexIndices.forEach(function(_,M){let E,S=!1;_<0&&(_=_^-1,S=!0);let x=[],I=[];if(c.push(_*3,_*3+1,_*3+2),e.color){const C=mc(M,i,_,e.color);h.push(C[0],C[1],C[2])}if(e.skeleton){if(e.weightTable[_]!==void 0&&e.weightTable[_].forEach(function(C){I.push(C.weight),x.push(C.id)}),I.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const C=[0,0,0,0],A=[0,0,0,0];I.forEach(function(B,N){let O=B,W=x[N];A.forEach(function(P,R,k){if(O>P){k[R]=O,O=P;const se=C[R];C[R]=W,W=se}})}),x=C,I=A}for(;I.length<4;)I.push(0),x.push(0);for(let C=0;C<4;++C)g.push(I[C]),m.push(x[C])}if(e.normal){const C=mc(M,i,_,e.normal);u.push(C[0],C[1],C[2])}e.material&&e.material.mappingType!=="AllSame"&&(E=mc(M,i,_,e.material)[0],E<0&&(v.negativeMaterialIndices=!0,E=0)),e.uv&&e.uv.forEach(function(C,A){const B=mc(M,i,_,C);d[A]===void 0&&(d[A]=[]),d[A].push(B[0]),d[A].push(B[1])}),s++,S&&(v.genFace(t,e,c,E,u,h,d,g,m,s),i++,s=0,c=[],u=[],h=[],d=[],g=[],m=[])}),t}getNormalNewell(e){const t=new j(0,0,0);for(let i=0;i<e.length;i++){const s=e[i],a=e[(i+1)%e.length];t.x+=(s.y-a.y)*(s.z+a.z),t.y+=(s.z-a.z)*(s.x+a.x),t.z+=(s.x-a.x)*(s.y+a.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new j(0,1,0):new j(0,0,1)).cross(t).normalize(),a=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:a}}flattenVertex(e,t,i){return new ct(e.dot(t),e.dot(i))}genFace(e,t,i,s,a,c,u,h,d,g){let m;if(g>3){const v=[],_=t.baseVertexPositions||t.vertexPositions;for(let x=0;x<i.length;x+=3)v.push(new j(_[i[x]],_[i[x+1]],_[i[x+2]]));const{tangent:M,bitangent:E}=this.getNormalTangentAndBitangent(v),S=[];for(const x of v)S.push(this.flattenVertex(x,M,E));m=cd.triangulateShape(S,[])}else m=[[0,1,2]];for(const[v,_,M]of m)e.vertex.push(t.vertexPositions[i[v*3]]),e.vertex.push(t.vertexPositions[i[v*3+1]]),e.vertex.push(t.vertexPositions[i[v*3+2]]),e.vertex.push(t.vertexPositions[i[_*3]]),e.vertex.push(t.vertexPositions[i[_*3+1]]),e.vertex.push(t.vertexPositions[i[_*3+2]]),e.vertex.push(t.vertexPositions[i[M*3]]),e.vertex.push(t.vertexPositions[i[M*3+1]]),e.vertex.push(t.vertexPositions[i[M*3+2]]),t.skeleton&&(e.vertexWeights.push(h[v*4]),e.vertexWeights.push(h[v*4+1]),e.vertexWeights.push(h[v*4+2]),e.vertexWeights.push(h[v*4+3]),e.vertexWeights.push(h[_*4]),e.vertexWeights.push(h[_*4+1]),e.vertexWeights.push(h[_*4+2]),e.vertexWeights.push(h[_*4+3]),e.vertexWeights.push(h[M*4]),e.vertexWeights.push(h[M*4+1]),e.vertexWeights.push(h[M*4+2]),e.vertexWeights.push(h[M*4+3]),e.weightsIndices.push(d[v*4]),e.weightsIndices.push(d[v*4+1]),e.weightsIndices.push(d[v*4+2]),e.weightsIndices.push(d[v*4+3]),e.weightsIndices.push(d[_*4]),e.weightsIndices.push(d[_*4+1]),e.weightsIndices.push(d[_*4+2]),e.weightsIndices.push(d[_*4+3]),e.weightsIndices.push(d[M*4]),e.weightsIndices.push(d[M*4+1]),e.weightsIndices.push(d[M*4+2]),e.weightsIndices.push(d[M*4+3])),t.color&&(e.colors.push(c[v*3]),e.colors.push(c[v*3+1]),e.colors.push(c[v*3+2]),e.colors.push(c[_*3]),e.colors.push(c[_*3+1]),e.colors.push(c[_*3+2]),e.colors.push(c[M*3]),e.colors.push(c[M*3+1]),e.colors.push(c[M*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(a[v*3]),e.normal.push(a[v*3+1]),e.normal.push(a[v*3+2]),e.normal.push(a[_*3]),e.normal.push(a[_*3+1]),e.normal.push(a[_*3+2]),e.normal.push(a[M*3]),e.normal.push(a[M*3+1]),e.normal.push(a[M*3+2])),t.uv&&t.uv.forEach(function(E,S){e.uvs[S]===void 0&&(e.uvs[S]=[]),e.uvs[S].push(u[S][v*2]),e.uvs[S].push(u[S][v*2+1]),e.uvs[S].push(u[S][_*2]),e.uvs[S].push(u[S][_*2+1]),e.uvs[S].push(u[S][M*2]),e.uvs[S].push(u[S][M*2+1])})}addMorphTargets(e,t,i,s){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;i.forEach(function(c){c.rawTargets.forEach(function(u){const h=At.Objects.Geometry[u.geoID];h!==void 0&&a.genMorphGeometry(e,t,h,s,u.name)})})}genMorphGeometry(e,t,i,s,a){const c=t.Vertices!==void 0?t.Vertices.a:[],u=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],h=i.Vertices!==void 0?i.Vertices.a:[],d=i.Indexes!==void 0?i.Indexes.a:[],g=e.attributes.position.count*3,m=new Float32Array(g);for(let E=0;E<d.length;E++){const S=d[E]*3;m[S]=h[E*3],m[S+1]=h[E*3+1],m[S+2]=h[E*3+2]}const v={vertexIndices:u,vertexPositions:m,baseVertexPositions:c},_=this.genBuffers(v),M=new Jt(_.vertex,3);M.name=a||i.attrName,M.applyMatrix4(s),e.morphAttributes.position.push(M)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.Normals.a;let a=[];return i==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:a,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.UV.a;let a=[];return i==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:s,indices:a,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.Colors.a;let a=[];i==="IndexToDirect"&&(a=e.ColorIndex.a);for(let c=0,u=new it;c<s.length;c+=4)u.fromArray(s,c),Tt.toWorkingColorSpace(u,Qt),u.toArray(s,c);return{dataSize:4,buffer:s,indices:a,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const s=e.Materials.a,a=[];for(let c=0;c<s.length;++c)a.push(c);return{dataSize:1,buffer:s,indices:a,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new ei;const i=t-1,s=e.KnotVector.a,a=[],c=e.Points.a;for(let m=0,v=c.length;m<v;m+=4)a.push(new Dt().fromArray(c,m));let u,h;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){u=i,h=s.length-1-u;for(let m=0;m<i;++m)a.push(a[m])}const g=new Kw(i,s,a,u,h).getPoints(a.length*12);return new ei().setFromPoints(g)}}class Jw{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const s=t[i],a=this.addClip(s);e.push(a)}return e}parseClips(){if(At.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=At.Objects.AnimationCurveNode,t=new Map;for(const i in e){const s=e[i];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:s.id,attr:s.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=At.Objects.AnimationCurve;for(const i in t){const s={id:t[i].id,times:t[i].KeyTime.a.map(rA),values:t[i].KeyValueFloat.a},a=hn.get(s.id);if(a!==void 0){const c=a.parents[0].ID,u=a.parents[0].relationship;u.match(/X/)?e.get(c).curves.x=s:u.match(/Y/)?e.get(c).curves.y=s:u.match(/Z/)?e.get(c).curves.z=s:u.match(/DeformPercent/)&&e.has(c)&&(e.get(c).curves.morph=s)}}}parseAnimationLayers(e){const t=At.Objects.AnimationLayer,i=new Map;for(const s in t){const a=[],c=hn.get(parseInt(s));c!==void 0&&(c.children.forEach(function(h,d){if(e.has(h.ID)){const g=e.get(h.ID);if(g.curves.x!==void 0||g.curves.y!==void 0||g.curves.z!==void 0){if(a[d]===void 0){const m=hn.get(h.ID).parents.filter(function(v){return v.relationship!==void 0})[0].ID;if(m!==void 0){const v=At.Objects.Model[m.toString()];if(v===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",h);return}const _={modelName:v.attrName?Ht.sanitizeNodeName(v.attrName):"",ID:v.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Qn.traverse(function(M){M.ID===v.id&&(_.transform=M.matrix,M.userData.transformData&&(_.eulerOrder=M.userData.transformData.eulerOrder))}),_.transform||(_.transform=new Ke),"PreRotation"in v&&(_.preRotation=v.PreRotation.value),"PostRotation"in v&&(_.postRotation=v.PostRotation.value),a[d]=_}}a[d]&&(a[d][g.attr]=g)}else if(g.curves.morph!==void 0){if(a[d]===void 0){const m=hn.get(h.ID).parents.filter(function(x){return x.relationship!==void 0})[0].ID,v=hn.get(m).parents[0].ID,_=hn.get(v).parents[0].ID,M=hn.get(_).parents[0].ID,E=At.Objects.Model[M],S={modelName:E.attrName?Ht.sanitizeNodeName(E.attrName):"",morphName:At.Objects.Deformer[m].attrName};a[d]=S}a[d][g.attr]=g}}}),i.set(parseInt(s),a))}return i}parseAnimStacks(e){const t=At.Objects.AnimationStack,i={};for(const s in t){const a=hn.get(parseInt(s)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const c=e.get(a[0].ID);i[s]={name:t[s].attrName,layer:c}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(s){t=t.concat(i.generateTracks(s))}),new hS(e.name,-1,t)}generateTracks(e){const t=[];let i=new j,s=new j;if(e.transform&&e.transform.decompose(i,new ai,s),i=i.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,i,s){const a=this.getTimesForAllAxes(t),c=this.getKeyframeTrackValues(a,t,i);return new Ua(e+"."+s,a,c)}generateRotationTrack(e,t,i,s,a){let c,u;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const v=this.interpolateRotations(t.x,t.y,t.z,a);c=v[0],u=v[1]}const h=Fa(0);i!==void 0&&(i=i.map(yn.degToRad),i.push(h),i=new xn().fromArray(i),i=new ai().setFromEuler(i)),s!==void 0&&(s=s.map(yn.degToRad),s.push(h),s=new xn().fromArray(s),s=new ai().setFromEuler(s).invert());const d=new ai,g=new xn,m=[];if(!u||!c)return new Po(e+".quaternion",[0],[0]);for(let v=0;v<u.length;v+=3)g.set(u[v],u[v+1],u[v+2],a),d.setFromEuler(g),i!==void 0&&d.premultiply(i),s!==void 0&&d.multiply(s),v>2&&new ai().fromArray(m,(v-3)/3*4).dot(d)<0&&d.set(-d.x,-d.y,-d.z,-d.w),d.toArray(m,v/3*4);return new Po(e+".quaternion",c,m)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(a){return a/100}),s=Qn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ia(e.modelName+".morphTargetInfluences["+s+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,s){return i-s}),t.length>1){let i=1,s=t[0];for(let a=1;a<t.length;a++){const c=t[a];c!==s&&(t[i]=c,s=c,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const s=i,a=[];let c=-1,u=-1,h=-1;return e.forEach(function(d){if(t.x&&(c=t.x.times.indexOf(d)),t.y&&(u=t.y.times.indexOf(d)),t.z&&(h=t.z.times.indexOf(d)),c!==-1){const g=t.x.values[c];a.push(g),s[0]=g}else a.push(s[0]);if(u!==-1){const g=t.y.values[u];a.push(g),s[1]=g}else a.push(s[1]);if(h!==-1){const g=t.z.values[h];a.push(g),s[2]=g}else a.push(s[2])}),a}interpolateRotations(e,t,i,s){const a=[],c=[];a.push(e.times[0]),c.push(yn.degToRad(e.values[0])),c.push(yn.degToRad(t.values[0])),c.push(yn.degToRad(i.values[0]));for(let u=1;u<e.values.length;u++){const h=[e.values[u-1],t.values[u-1],i.values[u-1]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const d=h.map(yn.degToRad),g=[e.values[u],t.values[u],i.values[u]];if(isNaN(g[0])||isNaN(g[1])||isNaN(g[2]))continue;const m=g.map(yn.degToRad),v=[g[0]-h[0],g[1]-h[1],g[2]-h[2]],_=[Math.abs(v[0]),Math.abs(v[1]),Math.abs(v[2])];if(_[0]>=180||_[1]>=180||_[2]>=180){const E=Math.max(..._)/180,S=new xn(...d,s),x=new xn(...m,s),I=new ai().setFromEuler(S),C=new ai().setFromEuler(x);I.dot(C)&&C.set(-C.x,-C.y,-C.z,-C.w);const A=e.times[u-1],B=e.times[u]-A,N=new ai,O=new xn;for(let W=0;W<1;W+=1/E)N.copy(I.clone().slerp(C.clone(),W)),a.push(A+W*B),O.setFromQuaternion(N,s),c.push(O.x),c.push(O.y),c.push(O.z)}else a.push(e.times[u]),c.push(yn.degToRad(e.values[u])),c.push(yn.degToRad(t.values[u])),c.push(yn.degToRad(i.values[u]))}return[a,c]}}class eA{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new cv,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(s,a){const c=s.match(/^[\s\t]*;/),u=s.match(/^[\s\t]*$/);if(c||u)return;const h=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),d=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),g=s.match("^\\t{"+(t.currentIndent-1)+"}}");h?t.parseNodeBegin(s,h):d?t.parseNodeProperty(s,d,i[++a]):g?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(h){return h.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:i},c=this.parseNodeAttr(s),u=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,a):i in u?(i==="PoseNode"?u.PoseNode.push(a):u[i].id!==void 0&&(u[i]={},u[i][u[i].id]=u[i]),c.id!==""&&(u[i][c.id]=a)):typeof c.id=="number"?(u[i]={},u[i][c.id]=a):i!=="Properties70"&&(i==="PoseNode"?u[i]=[a]:u[i]=a),typeof c.id=="number"&&(a.id=c.id),c.name!==""&&(a.attrName=c.name),c.type!==""&&(a.attrType=c.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",s="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:i,type:s}}parseNodeProperty(e,t,i){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&a===","&&(a=i.replace(/"/g,"").replace(/,$/,"").trim());const c=this.getCurrentNode();if(c.name==="Properties70"){this.parseNodeSpecialProperty(e,s,a);return}if(s==="C"){const h=a.split(",").slice(1),d=parseInt(h[0]),g=parseInt(h[1]);let m=a.split(",").slice(3);m=m.map(function(v){return v.trim().replace(/^"/,"")}),s="connections",a=[d,g],oA(a,m),c[s]===void 0&&(c[s]=[])}s==="Node"&&(c.id=a),s in c&&Array.isArray(c[s])?c[s].push(a):s!=="a"?c[s]=a:c.a=a,this.setCurrentProp(c,s),s==="a"&&a.slice(-1)!==","&&(c.a=rh(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=rh(t.a))}parseNodeSpecialProperty(e,t,i){const s=i.split('",').map(function(g){return g.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=s[0],c=s[1],u=s[2],h=s[3];let d=s[4];switch(c){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":d=parseFloat(d);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":d=rh(d);break}this.getPrevNode()[a]={type:c,type2:u,flag:h,value:d},this.setCurrentProp(this.getPrevNode(),a)}}class tA{parse(e){const t=new d0(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const s=new cv;for(;!this.endOfContent(t);){const a=this.parseNode(t,i);a!==null&&s.add(a.name,a)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},s=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const c=e.getUint8(),u=e.getString(c);if(s===0)return null;const h=[];for(let v=0;v<a;v++)h.push(this.parseProperty(e));const d=h.length>0?h[0]:"",g=h.length>1?h[1]:"",m=h.length>2?h[2]:"";for(i.singleProperty=a===1&&e.getOffset()===s;s>e.getOffset();){const v=this.parseNode(e,t);v!==null&&this.parseSubNode(u,i,v)}return i.propertyList=h,typeof d=="number"&&(i.id=d),g!==""&&(i.attrName=g),m!==""&&(i.attrType=m),u!==""&&(i.name=u),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const s=i.propertyList[0];Array.isArray(s)?(t[i.name]=i,i.a=s):t[i.name]=s}else if(e==="Connections"&&i.name==="C"){const s=[];i.propertyList.forEach(function(a,c){c!==0&&s.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(i.name==="Properties70")Object.keys(i).forEach(function(a){t[a]=i[a]});else if(e==="Properties70"&&i.name==="P"){let s=i.propertyList[0],a=i.propertyList[1];const c=i.propertyList[2],u=i.propertyList[3];let h;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?h=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:h=i.propertyList[4],t[s]={type:a,type2:c,flag:u,value:h}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),a=e.getUint32(),c=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const u=zw(new Uint8Array(e.getArrayBuffer(c))),h=new d0(u.buffer);switch(t){case"b":case"c":return h.getBooleanArray(s);case"d":return h.getFloat64Array(s);case"f":return h.getFloat32Array(s);case"i":return h.getInt32Array(s);case"l":return h.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class d0{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const s=i.indexOf(0);return s>=0&&(i=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(i)}}class cv{add(e,t){this[e]=t}}function nA(o){const e="Kaydara FBX Binary  \0";return o.byteLength>=e.length&&e===fv(o,0,e.length)}function iA(o){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(s){const a=o[s-1];return o=o.slice(t+s),t++,a}for(let s=0;s<e.length;++s)if(i(1)===e[s])return!1;return!0}function p0(o){const e=/FBXVersion: (\d+)/,t=o.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function rA(o){return o/46186158e3}const sA=[];function mc(o,e,t,i){let s;switch(i.mappingType){case"ByPolygonVertex":s=o;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(s=i.indices[s]);const a=s*i.dataSize,c=a+i.dataSize;return aA(sA,i.buffer,a,c)}const ih=new xn,ho=new j;function uv(o){const e=new Ke,t=new Ke,i=new Ke,s=new Ke,a=new Ke,c=new Ke,u=new Ke,h=new Ke,d=new Ke,g=new Ke,m=new Ke,v=new Ke,_=o.inheritType?o.inheritType:0;o.translation&&e.setPosition(ho.fromArray(o.translation));const M=Fa(0);if(o.preRotation){const k=o.preRotation.map(yn.degToRad);k.push(M),t.makeRotationFromEuler(ih.fromArray(k))}if(o.rotation){const k=o.rotation.map(yn.degToRad);k.push(o.eulerOrder||M),i.makeRotationFromEuler(ih.fromArray(k))}if(o.postRotation){const k=o.postRotation.map(yn.degToRad);k.push(M),s.makeRotationFromEuler(ih.fromArray(k)),s.invert()}o.scale&&a.scale(ho.fromArray(o.scale)),o.scalingOffset&&u.setPosition(ho.fromArray(o.scalingOffset)),o.scalingPivot&&c.setPosition(ho.fromArray(o.scalingPivot)),o.rotationOffset&&h.setPosition(ho.fromArray(o.rotationOffset)),o.rotationPivot&&d.setPosition(ho.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(m.copy(o.parentMatrix),g.copy(o.parentMatrixWorld));const E=t.clone().multiply(i).multiply(s),S=new Ke;S.extractRotation(g);const x=new Ke;x.copyPosition(g);const I=x.clone().invert().multiply(g),C=S.clone().invert().multiply(I),A=a,B=new Ke;if(_===0)B.copy(S).multiply(E).multiply(C).multiply(A);else if(_===1)B.copy(S).multiply(C).multiply(E).multiply(A);else{const se=new Ke().scale(new j().setFromMatrixScale(m)).clone().invert(),te=C.clone().multiply(se);B.copy(S).multiply(E).multiply(te).multiply(A)}const N=d.clone().invert(),O=c.clone().invert();let W=e.clone().multiply(h).multiply(d).multiply(t).multiply(i).multiply(s).multiply(N).multiply(u).multiply(c).multiply(a).multiply(O);const P=new Ke().copyPosition(W),R=g.clone().multiply(P);return v.copyPosition(R),W=v.clone().multiply(B),W.premultiply(g.invert()),W}function Fa(o){o=o||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[o]}function rh(o){return o.split(",").map(function(t){return parseFloat(t)})}function fv(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=o.byteLength),new TextDecoder().decode(new Uint8Array(o,e,t))}function oA(o,e){for(let t=0,i=o.length,s=e.length;t<s;t++,i++)o[i]=e[t]}function aA(o,e,t,i){for(let s=t,a=0;s<i;s++,a++)o[a]=e[s];return o}const lA={Xtal:"#BF83FC",Multilayer:"#00FF7F",WhiteLight:"#ffffff"},cA=[{id:"beam",type:"beam",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},geometry:{radius:.05,height:8},beamModes:["cylinder"],visible:!0,beamPower:25,beamMono:"Xtal"},{id:"stage",type:"stage",transform:{position:[0,-.6,0],rotation:[0,0,0],scale:[1,1,1]},geometry:{radius:.4,height:1},visible:!0},{id:"centeringMotor",type:"motor",parentId:"stage",transform:{position:[0,.6,0],rotation:[0,0,0],scale:[1,1,1]},visible:!0},{id:"sample",type:"sample",parentId:"centeringMotor",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},geometry:{radius:.2,height:.4},visible:!0,meshType:"cube"},{id:"detector",type:"detector",transform:{position:[4,0,0],rotation:[0,Math.PI/2,0],scale:[1,1,1]},geometry:{width:1,height:1,depth:.2},visible:!0},{id:"beamStop",type:"beamStop",parentId:"beam",transform:{position:[-2,0,0],rotation:[0,0,0],scale:[1,1,1]},visible:!0,shutterOpen:!1}],uA=(o=256)=>{const e=document.createElement("canvas");e.width=o,e.height=o;const t=e.getContext("2d");if(!t)throw new Error("No 2D context for radial texture.");t.fillStyle="#5FA6FA",t.fillRect(0,0,o,o),t.strokeStyle="#3B83F6",t.lineWidth=2;const i=16,s=o/2;for(let c=0;c<i;c++){const u=2*Math.PI*c/i,h=s+s*Math.cos(u),d=s+s*Math.sin(u);t.beginPath(),t.moveTo(s,s),t.lineTo(h,d),t.stroke()}const a=new Sn(e);return a.needsUpdate=!0,a},fA=(o=256)=>{const e=document.createElement("canvas");e.width=o,e.height=o;const t=e.getContext("2d");if(!t)throw new Error("No 2D context for vertical stripes.");t.fillStyle="#5FA6FA",t.fillRect(0,0,o,o),t.fillStyle="#3B83F6";const i=8,s=o/(i*2);for(let c=0;c<i;c++){const u=c*(s*2);t.fillRect(u,0,s,o)}const a=new Sn(e);return a.needsUpdate=!0,a},hA=uA(),dA=fA(),pA=(o,e,t,i)=>{const s=new zt,a=new Zr(o,o,e,32,1,!0),c=new Ti({map:i}),u=new Ut(a,c);u.castShadow=!0,u.receiveShadow=!0,s.add(u);const h=new Pc(o,32),d=new Ti({map:t}),g=new Ut(h,d);g.rotation.x=-Math.PI/2,g.position.y=e/2,g.castShadow=!0,g.receiveShadow=!0,s.add(g);const m=new Pc(o,32),v=new Ti({map:t}),_=new Ut(m,v);return _.rotation.x=Math.PI/2,_.position.y=-e/2,_.castShadow=!0,_.receiveShadow=!0,s.add(_),s},mA=(o,e,t,i,s)=>{const a=new zt;a.position.set(0,0,0);const c=new Ki(o,e,t);c.translate(-o*2,0,0);const u=new Ti({color:i,transparent:!0,opacity:s?.5:1}),h=new Ut(c,u);return h.castShadow=!0,h.receiveShadow=!0,h.name="beamStop-shutter",a.add(h),a},gA=()=>{var ie,ge,_e,me,je,Ce,Ne,gt,Ee,Be,Je,nt,ze,St,ut,Ot,Y,Re;const o=st.useRef(null),e=st.useRef(),t=st.useRef(),i=st.useRef(),s=st.useRef(),a=st.useRef(),c=st.useRef(0),u=st.useRef(null),h=st.useRef(),{isPlaying:d,playAngle:g,setIsPlaying:m,handleStageRotationChange:v}=J_(),[_,M]=st.useState(cA),E=st.useRef(null),S=st.useRef(null),x=st.useRef(0),I=500,C=st.useRef(null),A=st.useRef(Array.from({length:I},()=>({position:new j(-4,0,0),velocity:new j(1,0,0).multiplyScalar(.05),active:!1}))),B=st.useRef(0),[N,O]=st.useState(!0),W=st.useCallback(()=>O(D=>!D),[]),P=st.useRef({}),[R,k]=st.useState(-10),[se,te]=st.useState(0),[fe,de]=st.useState(0),[ce,he]=st.useState(0);st.useEffect(()=>{if(!o.current)return;const D=document.getElementById("three-canvas");if(!D){console.error("No <canvas id='three-canvas'> found!");return}const K=o.current.clientWidth,z=o.current.clientHeight,J=K/z,Ue=3,rt=new Px;rt.background=new it("#f0f0f0"),e.current=rt;const Pt=new Na(-Ue*J,Ue*J,Ue,-Ue,.1,100);Pt.position.set(R,10,10),Pt.lookAt(0,0,0),t.current=Pt;const at=.5,Wt=new Na(-at*J,at*J,at,-at,.1,100);Wt.position.set(-1,0,0),Wt.lookAt(4,0,0),Wt.layers.set(1),i.current=Wt;const Mt=new _w({canvas:D,antialias:!0});Mt.setSize(K,z),Mt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Mt.shadowMap.enabled=!0,Mt.shadowMap.type=v0,s.current=Mt;const Nn=new Tw(Mt);Nn.addPass(new ww(rt,Pt));const gn=new Lo(new ct(K,z),1.5,.4,.85);gn.threshold=.25,gn.strength=.3,gn.radius=.03,Nn.addPass(gn),a.current=Nn;const dn=new Ri(256,256);h.current=dn;const Tn=new Y0("#ffffff",.5);rt.add(Tn);const un=new j0("#ffffff",.8);un.position.set(-5,12,12),un.castShadow=!0,un.shadow.mapSize.width=1024,un.shadow.mapSize.height=1024,un.shadow.camera.near=.5,un.shadow.camera.far=50,rt.add(un);const Xn=new Oa(20,20),Fn=new Ti({color:"#64768D"}),jn=new Ut(Xn,Fn);jn.rotation.x=-Math.PI/2,jn.position.y=-.5,jn.receiveShadow=!0,rt.add(jn);const pt=new Nx(H.sphere,ee.photon,I);pt.instanceMatrix.setUsage(Hy),rt.add(pt),C.current=pt;const vt=()=>{if(!o.current)return;const ht=o.current.clientWidth,Ve=o.current.clientHeight,dt=ht/Ve;Pt.left=-Ue*dt,Pt.right=Ue*dt,Pt.top=Ue,Pt.bottom=-Ue,Pt.updateProjectionMatrix(),Wt.left=-at*dt,Wt.right=at*dt,Wt.top=at,Wt.bottom=-at,Wt.updateProjectionMatrix(),Mt.setSize(ht,Ve),dn.setSize(256,256),Nn.setSize(ht,Ve)};return window.addEventListener("resize",vt),()=>{window.removeEventListener("resize",vt),Mt.dispose(),dn.dispose(),pt.geometry.dispose(),pt.material.dispose()}},[]),st.useEffect(()=>{t.current&&(t.current.position.set(R,10,10),t.current.updateProjectionMatrix())},[R]);const H=st.useMemo(()=>({cylinder:new Zr(.05,.05,8,16),box:new Ki(.4,.4,.4),detector:new Ki(1,1,.2),sphere:new ud(.05,8,8),customCylinder:new Zr(.2,.2,.4,16)}),[]),[ue]=st.useState(()=>new Ig({color:"#BF83FC",transparent:!0,opacity:.8,emissive:"#BF83FC",emissiveIntensity:1,depthWrite:!0,blending:Mc})),ee=st.useMemo(()=>({beam:new Ig({color:"#BF83FC",transparent:!0,opacity:.6,emissive:"#BF83FC",emissiveIntensity:1}),sampleCube:new Ti({color:"#8c564b"}),sampleCylinder:new Ti({color:"#8c564b"}),detector:new Ti({color:"#1f77b4"}),beamStop:new Ti({color:"#DA2828",transparent:!0,opacity:1}),photon:ue}),[ue]),F=st.useMemo(()=>new Jn({uniforms:{xRayTexture:{value:null},shutterOpen:{value:0}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,fragmentShader:`
          uniform sampler2D xRayTexture;
          uniform float shutterOpen;
          varying vec2 vUv;
          void main() {
            vec4 color = texture2D(xRayTexture, vUv);
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            gray = 1.0 - gray;
            vec3 finalColor = vec3(gray);
            finalColor = mix(vec3(0.0), finalColor, shutterOpen);
            gl_FragColor = vec4(finalColor, color.a);
          }
        `}),[]);st.useEffect(()=>{const D=e.current;if(!D)return;const K=new Set(_.map(z=>z.id));Object.keys(P.current).forEach(z=>{const J=_.find(Ue=>Ue.id===z);if(!J||!J.visible){const Ue=P.current[z];Ue.parent&&Ue.parent.remove(Ue),Ue.traverse(rt=>{rt instanceof Ut&&(rt.geometry.dispose(),Array.isArray(rt.material)?rt.material.forEach(Pt=>Pt.dispose()):rt.material.dispose())}),delete P.current[z]}}),_.forEach(z=>{var Ue,rt,Pt,at,Wt,Mt,Nn,gn,dn,Tn,un,Xn,Fn,jn,pt;if(!z.visible)return;let J=P.current[z.id];if(J)switch(z.type){case"beam":{const vt=z.beamModes||[],ht=J,Ve=ht.getObjectByName("beam-cylinder");if(vt.includes("cylinder"))if(Ve)Ve.geometry.dispose(),Ve.geometry=new Zr(((Fn=z.geometry)==null?void 0:Fn.radius)??.05,((jn=z.geometry)==null?void 0:jn.radius)??.05,((pt=z.geometry)==null?void 0:pt.height)??8,16),Ve.geometry.rotateZ(Math.PI/2);else{const dt=new Zr(((Tn=z.geometry)==null?void 0:Tn.radius)??.05,((un=z.geometry)==null?void 0:un.radius)??.05,((Xn=z.geometry)==null?void 0:Xn.height)??8,16);dt.rotateZ(Math.PI/2);const Xt=ee.beam,jt=new Ut(dt,Xt);jt.name="beam-cylinder",jt.castShadow=!0,jt.receiveShadow=!0,ht.add(jt)}else Ve&&(ht.remove(Ve),Ve.geometry.dispose(),Array.isArray(Ve.material)?Ve.material.forEach(dt=>dt.dispose()):Ve.material.dispose());z.beamPower!==void 0&&(ee.beam.emissiveIntensity=z.beamPower/10,ee.beam.needsUpdate=!0);break}case"beamStop":{J instanceof zt&&J.getObjectByName("beamStop-shutter");break}case"sample":{const vt=z.meshType??"cube";let ht="cube";if(J instanceof Ut?ht=J.geometry instanceof Zr?"cylinder":J.geometry instanceof Ki?"cube":"unknown":J instanceof zt&&(ht="fbx"),vt!==ht){J.parent&&J.parent.remove(J),J instanceof Ut?(J.geometry.dispose(),Array.isArray(J.material)?J.material.forEach(dt=>dt.dispose()):J.material.dispose()):J instanceof zt&&J.traverse(dt=>{dt instanceof Ut&&(dt.geometry.dispose(),Array.isArray(dt.material)?dt.material.forEach(Xt=>Xt.dispose()):dt.material.dispose())});let Ve=null;if(vt==="cube"?(Ve=new Ut(H.box,ee.sampleCube),Ve.castShadow=!0,Ve.receiveShadow=!0):vt==="cylinder"?(Ve=new Ut(H.customCylinder,ee.sampleCylinder),Ve.castShadow=!1,Ve.receiveShadow=!1):vt==="fbx"&&(Ve=new zt,new h0().load(z.meshUrl||"/assets/bananas.fbx",Xt=>{Xt.scale.set(.02,.02,.02),Xt.position.set(0,.3,-.25),Xt.traverse(jt=>{jt instanceof Ut&&(jt.castShadow=!0,jt.receiveShadow=!0,jt.layers.enable(1),Array.isArray(jt.material)?jt.material=jt.material.map(Mr=>Mr instanceof Ci?Mr.clone():Mr):jt.material instanceof Ci&&(jt.material=jt.material.clone()))}),Ve==null||Ve.add(Xt),console.log("FBX model loaded and added to the sample.")},Xt=>{console.log(`FBX Loading Progress: ${Xt.loaded/Xt.total*100}%`)},Xt=>{console.error("Error loading FBX model:",Xt)})),Ve){Ve.position.fromArray(z.transform.position),Ve.rotation.set(...z.transform.rotation),z.transform.scale&&Ve.scale.fromArray(z.transform.scale);const dt=z.parentId;dt&&P.current[dt]?P.current[dt].add(Ve):D.add(Ve),Ve.layers.enable(1),S.current=Ve,Ve instanceof zt&&Ve.traverse(Xt=>{Xt instanceof Ut&&Xt.layers.enable(1)}),P.current[z.id]=Ve}}else J.position.fromArray(z.transform.position),J.rotation.set(...z.transform.rotation),z.transform.scale&&J.scale.fromArray(z.transform.scale);break}case"stage":{J instanceof zt&&(J.position.fromArray(z.transform.position),J.rotation.set(z.transform.rotation[0],z.transform.rotation[1],z.transform.rotation[2]),z.transform.scale&&J.scale.fromArray(z.transform.scale),J.castShadow=!0,J.receiveShadow=!0);break}case"motor":{J instanceof zt&&(J.position.fromArray(z.transform.position),J.rotation.set(z.transform.rotation[0],z.transform.rotation[1],z.transform.rotation[2]),z.transform.scale&&J.scale.fromArray(z.transform.scale));break}}else{switch(z.type){case"beam":{const vt=new vr;if(vt.name="beamGroup",(Ue=z.beamModes)!=null&&Ue.includes("cylinder")){const ht=H.cylinder.clone();ht.rotateZ(Math.PI/2);const Ve=new Ut(ht,ee.beam);Ve.name="beam-cylinder",vt.add(Ve)}D.add(vt),J=vt,P.current[z.id]=J;break}case"stage":{const vt=((rt=z.geometry)==null?void 0:rt.radius)??.4,ht=((Pt=z.geometry)==null?void 0:Pt.height)??1,Ve=pA(vt,ht,hA,dA);E.current=Ve,J=Ve,D.add(Ve),P.current[z.id]=J;break}case"motor":{J=new vr,D.add(J),P.current[z.id]=J;break}case"sample":{if(z.meshType==="cube")J=new Ut(H.box,ee.sampleCube),J.castShadow=!0,J.receiveShadow=!0;else if(z.meshType==="cylinder")J=new Ut(H.customCylinder,ee.sampleCylinder),J.castShadow=!0,J.receiveShadow=!0;else if(z.meshType==="fbx"){const vt=new vr;new h0().load(z.meshUrl||"/assets/bananas.fbx",Ve=>{Ve.scale.set(.02,.02,.02),Ve.position.set(0,.3,-.25),Ve.traverse(dt=>{dt instanceof Ut&&(dt.castShadow=!0,dt.receiveShadow=!0,dt.layers.enable(1),Array.isArray(dt.material)?dt.material=dt.material.map(Xt=>Xt instanceof Ci?Xt.clone():Xt):dt.material instanceof Ci&&(dt.material=dt.material.clone()))}),vt.add(Ve)},void 0,Ve=>console.error("Error loading FBX:",Ve)),J=vt}J&&(S.current=J);break}case"detector":{const vt=((at=z.geometry)==null?void 0:at.width)??1,ht=((Wt=z.geometry)==null?void 0:Wt.height)??1,Ve=((Mt=z.geometry)==null?void 0:Mt.depth)??.2,dt=new Ki(vt,ht,Ve),Xt=[ee.detector,ee.detector,ee.detector,ee.detector,ee.detector,F],jt=new Ut(dt,Xt);jt.name="detector",jt.castShadow=!0,jt.receiveShadow=!0,J=jt;break}case"beamStop":{const vt=mA(((Nn=z.geometry)==null?void 0:Nn.width)??.2,((gn=z.geometry)==null?void 0:gn.height)??1,((dn=z.geometry)==null?void 0:dn.depth)??1,"#DA2828",z.shutterOpen??!1);vt.name="beamStop-pivot";const ht=vt.getObjectByName("beamStop-shutter");ht&&(u.current=ht),J=vt;break}}if(J){z.type!=="beam"&&(J.position.fromArray(z.transform.position),J.rotation.set(...z.transform.rotation),z.transform.scale&&J.scale.fromArray(z.transform.scale));const vt=z.parentId?P.current[z.parentId]:null;vt?vt.add(J):D.add(J),z.type==="sample"&&J&&(J.layers.enable(1),J.traverse(ht=>{ht instanceof Ut&&ht.layers.enable(1)})),P.current[z.id]=J}}}),Object.keys(P.current).forEach(z=>{if(!K.has(z)){const J=P.current[z];J.parent&&J.parent.remove(J),J.traverse(Ue=>{Ue instanceof Ut&&(Ue.geometry.dispose(),Array.isArray(Ue.material)?Ue.material.forEach(rt=>rt.dispose()):Ue.material.dispose())}),delete P.current[z]}})},[_,H,ee,F]),st.useEffect(()=>{if(!e.current||!t.current||!s.current||!i.current||!h.current||!a.current||!C.current)return;const D=e.current,K=s.current,z=i.current,J=h.current,Ue=a.current,rt=C.current,Pt=new q0;F.uniforms.xRayTexture.value=J.texture;const at=()=>{var jn;c.current=requestAnimationFrame(at);const Wt=Pt.getDelta();if(K.setRenderTarget(J),K.render(D,z),K.setRenderTarget(null),d&&E.current){E.current.rotation.y+=Wt*.5;const pt=performance.now();if(pt-x.current>100){x.current=pt;const vt=yn.radToDeg(E.current.rotation.y)%360;v(vt)}}const Mt=_.find(pt=>pt.type==="beam");if(Mt&&(Mt.beamPower!==void 0&&(ee.beam.emissiveIntensity=Mt.beamPower/20,ee.beam.needsUpdate=!0,ee.photon.emissiveIntensity=Mt.beamPower/1,ee.photon.needsUpdate=!0),Mt.beamMono)){const pt=lA[Mt.beamMono];ee.beam.color.set(pt),ee.beam.emissive.set(pt),ee.beam.needsUpdate=!0,ee.photon.color.set(pt),ee.photon.emissive.set(pt),ee.photon.needsUpdate=!0}if((jn=Mt==null?void 0:Mt.beamModes)!=null&&jn.includes("photonStream")&&Mt.visible){const pt=performance.now(),vt=Math.max(50,200-(Mt.beamPower||25)*3);if(pt-B.current>vt){B.current=pt;const ht=A.current,Ve=ht.findIndex(dt=>!dt.active);if(Ve!==-1){ht[Ve].active=!0,ht[Ve].position.set(-4,0,0);const dt=.05,Xt=Mt.beamPower||25;ht[Ve].velocity.set(1,0,0).multiplyScalar(dt+Xt*.001);const jt=new Ke;jt.setPosition(ht[Ve].position),rt.setMatrixAt(Ve,jt),rt.instanceMatrix.needsUpdate=!0}}}const Nn=A.current,gn=new Ke;let dn=-1;Nn.forEach((pt,vt)=>{if(pt.active){pt.position.add(pt.velocity.clone().multiplyScalar(Wt*60));const ht=_.find(dt=>dt.type==="beamStop"),Ve=(ht==null?void 0:ht.shutterOpen)||!1;if(!Ve&&pt.position.x>=-2||Ve&&pt.position.x>=4){pt.active=!1;return}gn.setPosition(pt.position),rt.setMatrixAt(vt,gn),vt>dn&&(dn=vt)}}),rt.count=dn+1,rt.instanceMatrix.needsUpdate=!0;const Tn=_.find(pt=>pt.type==="beamStop"),un=(Tn==null?void 0:Tn.shutterOpen)||!1,Xn=D.getObjectByName("beamGroup");if(Xn){const pt=Xn.getObjectByName("beam-cylinder");pt&&(un?(pt.scale.x=1,pt.position.x=0):(pt.scale.x=.25,pt.position.x=-3))}const Fn=D.getObjectByName("beamStop-pivot");Fn&&(Fn.rotation.y=un?-Math.PI/2:0),Ue.render()};return at(),()=>{cancelAnimationFrame(c.current),Pt.stop()}},[_,d,ee.beam,ee.photon,F,v]),st.useEffect(()=>{M(D=>D.map(K=>K.type==="stage"?{...K,transform:{...K.transform,rotation:[0,yn.degToRad(g),0]}}:K))},[g]);const le=st.useCallback(()=>{m(D=>!D)},[m]),Pe=st.useCallback(D=>{v(D),E.current&&(E.current.rotation.y=yn.degToRad(D)),M(K=>K.map(z=>z.type==="stage"?{...z,transform:{...z.transform,rotation:[0,yn.degToRad(D),0]}}:z))},[v]),re=st.useCallback(D=>{M(K=>K.map(z=>z.id===D?{...z,visible:!z.visible}:z))},[]),pe=st.useCallback(D=>{M(K=>K.map(z=>{if(z.type==="beam"){const J=z.beamModes||[];return J.includes(D)?{...z,beamModes:J.filter(Ue=>Ue!==D)}:{...z,beamModes:[...J,D]}}return z}))},[]),Se=st.useCallback(D=>{M(K=>K.map(z=>z.type==="sample"?{...z,meshType:D,meshUrl:D==="fbx"?"/assets/bananas.fbx":void 0}:z))},[]),ve=st.useCallback(()=>{M(z=>z.map(J=>J.type==="beamStop"?{...J,shutterOpen:!J.shutterOpen}:J));const D=_.find(z=>z.type==="beamStop");if(!D)return;const K=!D.shutterOpen;F.uniforms.shutterOpen.value=K,S.current&&(K?S.current.layers.enable(1):S.current.layers.disable(1))},[_,F]),Ae=st.useCallback(D=>{M(K=>K.map(z=>z.type==="stage"?{...z,transform:{...z.transform,position:[D,z.transform.position[1],z.transform.position[2]]}}:z))},[]),Ie=st.useCallback(D=>{M(K=>K.map(z=>z.type==="stage"?{...z,transform:{...z.transform,position:[z.transform.position[0],z.transform.position[1],D]}}:z))},[]),Qe=st.useCallback(D=>{te(D),M(K=>K.map(z=>z.id==="centeringMotor"?{...z,transform:{...z.transform,position:[D,z.transform.position[1],z.transform.position[2]]}}:z))},[]),Ft=st.useCallback(D=>{de(D),M(K=>K.map(z=>z.id==="centeringMotor"?{...z,transform:{...z.transform,position:[z.transform.position[0],D,z.transform.position[2]]}}:z))},[]),xt=st.useCallback(D=>{he(D),M(K=>K.map(z=>z.id==="centeringMotor"?{...z,transform:{...z.transform,position:[z.transform.position[0],z.transform.position[1],D]}}:z))},[]);st.useEffect(()=>{const D=_.find(z=>z.type==="beamStop"),K=(D==null?void 0:D.shutterOpen)||!1;F.uniforms.shutterOpen.value=K,S.current&&(K?S.current.layers.enable(1):S.current.layers.disable(1))},[_,F]);const Gt={display:"flex",flexDirection:"row",width:"100vw",height:"100vh",overflow:"hidden",fontFamily:"Arial, sans-serif",backgroundColor:"#f5f5f5"},G={flex:1,position:"relative"},Ln={width:N?"320px":"0px",minWidth:N?"320px":"0px",maxWidth:N?"320px":"0px",overflowY:"auto",borderLeft:N?"1px solid #ccc":"none",backgroundColor:"#C1D3E3",transition:"width 0.3s ease",boxShadow:N?"2px 0 5px rgba(0,0,0,0.1)":"none",display:"flex",flexDirection:"column",position:"relative",color:"#464B53",flexShrink:0},wt={display:N?"flex":"none",flexDirection:"column",height:"100%",padding:N?"1.5rem":"0",transition:"opacity 0.3s ease",opacity:N?1:0},mt={padding:"0.6rem 1rem",margin:"0.5rem 0",backgroundColor:"#007bff",color:"#ffffff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center",transition:"background-color 0.2s ease"},He={marginBottom:"1.5rem"},bt={marginBottom:"0.5rem",fontWeight:"bold"},ke={width:"100%"},L={display:"flex",alignItems:"center",marginBottom:"0.5rem",cursor:"pointer"},w={display:"flex",alignItems:"center",marginBottom:"0.5rem",cursor:"pointer"};return be.jsxs("div",{style:Gt,children:[be.jsx("div",{style:Ln,children:N&&be.jsxs("div",{style:wt,children:[be.jsx("button",{onClick:W,style:{...mt,alignSelf:"flex-end",backgroundColor:"#dc3545"},onMouseOver:D=>D.currentTarget.style.backgroundColor="#c82333",onMouseOut:D=>D.currentTarget.style.backgroundColor="#dc3545",children:"Hide Panel"}),be.jsx("h2",{style:{marginTop:"1rem",marginBottom:"1rem",color:"#07304B"},children:"Controls"}),be.jsx("button",{onClick:le,style:mt,onMouseOver:D=>D.currentTarget.style.backgroundColor="#0056b3",onMouseOut:D=>D.currentTarget.style.backgroundColor="#007bff",children:d?"Pause":"Play"}),be.jsxs("div",{style:He,children:[be.jsxs("div",{style:bt,children:["Stage Rotation: ",g.toFixed(1),"°"]}),be.jsx("input",{type:"range",min:0,max:360,step:.1,value:g,onChange:D=>Pe(Number(D.target.value)),style:ke})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Stage Movement"}),be.jsxs("div",{style:{marginBottom:"1rem"},children:[be.jsxs("div",{style:bt,children:["Front-Back (X-axis):"," ",(ie=_.find(D=>D.type==="stage"))==null?void 0:ie.transform.position[0].toFixed(2)]}),be.jsx("input",{type:"range",min:-5,max:5,step:.1,value:((ge=_.find(D=>D.type==="stage"))==null?void 0:ge.transform.position[0])||0,onChange:D=>Ae(Number(D.target.value)),style:ke})]}),be.jsxs("div",{style:{marginBottom:"1rem"},children:[be.jsxs("div",{style:bt,children:["Left-Right (Z-axis):"," ",(_e=_.find(D=>D.type==="stage"))==null?void 0:_e.transform.position[2].toFixed(2)]}),be.jsx("input",{type:"range",min:-5,max:5,step:.1,value:((me=_.find(D=>D.type==="stage"))==null?void 0:me.transform.position[2])||0,onChange:D=>Ie(Number(D.target.value)),style:ke})]})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Centering Motor"}),be.jsxs("div",{style:{marginBottom:"1rem"},children:[be.jsxs("div",{style:bt,children:["X: ",se.toFixed(2)]}),be.jsx("input",{type:"range",min:-2,max:2,step:.01,value:se,onChange:D=>Qe(Number(D.target.value)),style:ke})]}),be.jsxs("div",{style:{marginBottom:"1rem"},children:[be.jsxs("div",{style:bt,children:["Y: ",fe.toFixed(2)]}),be.jsx("input",{type:"range",min:-1,max:2,step:.01,value:fe,onChange:D=>Ft(Number(D.target.value)),style:ke})]}),be.jsxs("div",{style:{marginBottom:"1rem"},children:[be.jsxs("div",{style:bt,children:["Z: ",ce.toFixed(2)]}),be.jsx("input",{type:"range",min:-2,max:2,step:.01,value:ce,onChange:D=>xt(Number(D.target.value)),style:ke})]})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Camera X Position"}),be.jsxs("div",{style:{marginBottom:"1rem"},children:[be.jsxs("div",{style:bt,children:["X: ",R.toFixed(2)]}),be.jsx("input",{type:"range",min:-20,max:10,step:.1,value:R,onChange:D=>k(Number(D.target.value)),style:ke})]})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Beam Mode"}),be.jsxs("label",{style:L,children:[be.jsx("input",{type:"checkbox",name:"beamMode",value:"cylinder",checked:((Ce=(je=_.find(D=>D.type==="beam"))==null?void 0:je.beamModes)==null?void 0:Ce.includes("cylinder"))||!1,onChange:()=>pe("cylinder"),style:{marginRight:"0.5rem"}}),"Cylinder"]}),be.jsxs("label",{style:L,children:[be.jsx("input",{type:"checkbox",name:"beamMode",value:"photonStream",checked:((gt=(Ne=_.find(D=>D.type==="beam"))==null?void 0:Ne.beamModes)==null?void 0:gt.includes("photonStream"))||!1,onChange:()=>pe("photonStream"),style:{marginRight:"0.5rem"}}),"Photon Stream"]})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Beam Energy (keV)"}),be.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[be.jsx("input",{type:"range",min:.001,max:50,step:.1,value:((Ee=_.find(D=>D.type==="beam"))==null?void 0:Ee.beamPower)||25,onChange:D=>{const K=Number(D.target.value);M(z=>z.map(J=>J.type==="beam"?{...J,beamPower:K}:J))},style:{flex:1,marginRight:"1rem"}}),be.jsxs("span",{children:[((Je=(Be=_.find(D=>D.type==="beam"))==null?void 0:Be.beamPower)==null?void 0:Je.toFixed(1))||25," keV"]})]})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Monochromator Setting"}),be.jsxs("label",{style:w,children:[be.jsx("input",{type:"radio",name:"beamMono",value:"Xtal",checked:((nt=_.find(D=>D.type==="beam"))==null?void 0:nt.beamMono)==="Xtal",onChange:()=>M(D=>D.map(K=>K.type==="beam"?{...K,beamMono:"Xtal"}:K)),style:{marginRight:"0.5rem"}}),"Xtal (Pink)"]}),be.jsxs("label",{style:w,children:[be.jsx("input",{type:"radio",name:"beamMono",value:"Multilayer",checked:((ze=_.find(D=>D.type==="beam"))==null?void 0:ze.beamMono)==="Multilayer",onChange:()=>M(D=>D.map(K=>K.type==="beam"?{...K,beamMono:"Multilayer"}:K)),style:{marginRight:"0.5rem"}}),"Multilayer (Green)"]}),be.jsxs("label",{style:w,children:[be.jsx("input",{type:"radio",name:"beamMono",value:"WhiteLight",checked:((St=_.find(D=>D.type==="beam"))==null?void 0:St.beamMono)==="WhiteLight",onChange:()=>M(D=>D.map(K=>K.type==="beam"?{...K,beamMono:"WhiteLight"}:K)),style:{marginRight:"0.5rem"}}),"WhiteLight (White)"]})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Beam Stop"}),be.jsx("button",{onClick:ve,style:{...mt,backgroundColor:"#28a745"},onMouseOver:D=>D.currentTarget.style.backgroundColor="#218838",onMouseOut:D=>D.currentTarget.style.backgroundColor="#28a745",children:(ut=_.find(D=>D.type==="beamStop"))!=null&&ut.shutterOpen?"Close Shutter":"Open Shutter"})]}),be.jsxs("div",{style:He,children:[be.jsx("h3",{style:{marginBottom:"0.5rem",color:"#555555"},children:"Sample Mesh"}),be.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[be.jsxs("label",{style:w,children:[be.jsx("input",{type:"radio",name:"sampleMesh",value:"cube",checked:((Ot=_.find(D=>D.type==="sample"))==null?void 0:Ot.meshType)==="cube",onChange:()=>Se("cube"),style:{marginRight:"0.5rem"}}),"Cube"]}),be.jsxs("label",{style:w,children:[be.jsx("input",{type:"radio",name:"sampleMesh",value:"cylinder",checked:((Y=_.find(D=>D.type==="sample"))==null?void 0:Y.meshType)==="cylinder",onChange:()=>Se("cylinder"),style:{marginRight:"0.5rem"}}),"Cylinder"]}),be.jsxs("label",{style:w,children:[be.jsx("input",{type:"radio",name:"sampleMesh",value:"fbx",checked:((Re=_.find(D=>D.type==="sample"))==null?void 0:Re.meshType)==="fbx",onChange:()=>Se("fbx"),style:{marginRight:"0.5rem"}}),"FBX Model"]})]})]}),be.jsx("h3",{children:"Visibility"}),_.map(D=>be.jsx("div",{children:be.jsxs("label",{children:[be.jsx("input",{type:"checkbox",checked:D.visible!==!1,onChange:()=>re(D.id)}),D.type.toUpperCase()," (",D.id,")"]})},D.id))]})}),!N&&be.jsx("button",{onClick:W,style:{position:"absolute",left:10,top:10,zIndex:999,padding:"0.6rem 1rem",backgroundColor:"#007bff",color:"#ffffff",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s ease"},onMouseOver:D=>D.currentTarget.style.backgroundColor="#0056b3",onMouseOut:D=>D.currentTarget.style.backgroundColor="#007bff",children:"Show Panel"}),be.jsx("div",{ref:o,style:G,children:be.jsx("canvas",{id:"three-canvas",style:{width:"100%",height:"100%"}})})]})},vA=()=>be.jsx(st.Suspense,{fallback:be.jsx("div",{children:"Loading..."}),children:be.jsx(gA,{})});Z_.createRoot(document.getElementById("root")).render(be.jsx(Q_,{children:be.jsx(vA,{})}));
