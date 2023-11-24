var Cs=Object.defineProperty;var Ms=(e,t,n)=>t in e?Cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>(Ms(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},Et=[],Te=()=>{},Ns=()=>!1,Rs=/^on[^a-z]/,er=e=>Rs.test(e),ua=e=>e.startsWith("onUpdate:"),se=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ls=Object.prototype.hasOwnProperty,H=(e,t)=>Ls.call(e,t),R=Array.isArray,Ct=e=>nr(e)==="[object Map]",no=e=>nr(e)==="[object Set]",j=e=>typeof e=="function",re=e=>typeof e=="string",tr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",ro=e=>(Z(e)||j(e))&&j(e.then)&&j(e.catch),ao=Object.prototype.toString,nr=e=>ao.call(e),Fs=e=>nr(e).slice(8,-1),io=e=>nr(e)==="[object Object]",ma=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ln=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bs=/-(\w)/g,De=rr(e=>e.replace(Bs,(t,n)=>n?n.toUpperCase():"")),js=/\B([A-Z])/g,zt=rr(e=>e.replace(js,"-$1").toLowerCase()),ar=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=rr(e=>e?`on${ar(e)}`:""),xt=(e,t)=>!Object.is(e,t),Fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Va;const Dr=()=>Va||(Va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ee(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?Us(r):Ee(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(re(e)||Z(e))return e}const Ds=/;(?![^(]*\))/g,zs=/:([^]+)/,Hs=/\/\*[^]*?\*\//g;function Us(e){const t={};return e.replace(Hs,"").split(Ds).forEach(n=>{if(n){const r=n.split(zs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function dn(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=dn(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ys=fa($s);function oo(e){return!!e||e===""}const gt=e=>re(e)?e:e==null?"":R(e)||Z(e)&&(e.toString===ao||!j(e.toString))?JSON.stringify(e,so,2):String(e),so=(e,t)=>t&&t.__v_isRef?so(e,t.value):Ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:no(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!R(t)&&!io(t)?String(t):t;let Oe;class Ws{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ks(e,t=Oe){t&&t.active&&t.effects.push(e)}function Gs(){return Oe}const pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lo=e=>(e.w&nt)>0,co=e=>(e.n&nt)>0,Vs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},qs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];lo(a)&&!co(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},zr=new WeakMap;let Vt=0,nt=1;const Hr=30;let ke;const vt=Symbol(""),Ur=Symbol("");class ha{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ks(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,et=!0,nt=1<<++Vt,Vt<=Hr?Vs(this):qa(this),this.fn()}finally{Vt<=Hr&&qs(this),nt=1<<--Vt,ke=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(qa(this),this.onStop&&this.onStop(),this.active=!1)}}function qa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const fo=[];function Ht(){fo.push(et),et=!1}function Ut(){const e=fo.pop();et=e===void 0?!0:e}function ve(e,t,n){if(et&&ke){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=pa()),uo(a)}}function uo(e,t){let n=!1;Vt<=Hr?co(e)||(e.n|=nt,n=!lo(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function We(e,t,n,r,a,i){const o=zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((f,d)=>{(d==="length"||!tr(d)&&d>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?ma(n)&&s.push(o.get("length")):(s.push(o.get(vt)),Ct(e)&&s.push(o.get(Ur)));break;case"delete":R(e)||(s.push(o.get(vt)),Ct(e)&&s.push(o.get(Ur)));break;case"set":Ct(e)&&s.push(o.get(vt));break}if(s.length===1)s[0]&&$r(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);$r(pa(l))}}function $r(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Xs=fa("__proto__,__v_isRef,__isVue"),mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tr)),Ja=Js();function Js(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map($)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ht();const r=$(this)[t].apply(this,n);return Ut(),r}}),e}function Zs(e){const t=$(this);return ve(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?ul:bo:i?vo:go).get(t))return t;const o=R(t);if(!a){if(o&&H(Ja,n))return Reflect.get(Ja,n,r);if(n==="hasOwnProperty")return Zs}const s=Reflect.get(t,n,r);return(tr(n)?mo.has(n):Xs(n))||(a||ve(t,"get",n),i)?s:ue(s)?o&&ma(n)?s:s.value:Z(s)?a?yo(s):ba(s):s}}class ho extends po{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Ft(i)&&ue(i)&&!ue(r))return!1;if(!this._shallow&&(!Yn(r)&&!Ft(r)&&(i=$(i),r=$(r)),!R(t)&&ue(i)&&!ue(r)))return i.value=r,!0;const o=R(t)&&ma(n)?Number(n)<t.length:H(t,n),s=Reflect.set(t,n,r,a);return t===$(a)&&(o?xt(r,i)&&We(t,"set",n,r):We(t,"add",n,r)),s}deleteProperty(t,n){const r=H(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&We(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!tr(n)||!mo.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",R(t)?"length":vt),Reflect.ownKeys(t)}}class Qs extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const el=new ho,tl=new Qs,nl=new ho(!0),ga=e=>e,ir=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const a=$(e),i=$(t);n||(xt(t,i)&&ve(a,"get",t),ve(a,"get",i));const{has:o}=ir(a),s=r?ga:n?xa:tn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=$(n),a=$(e);return t||(xt(e,a)&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function wn(e,t=!1){return e=e.__v_raw,!t&&ve($(e),"iterate",vt),Reflect.get(e,"size",e)}function Za(e){e=$(e);const t=$(this);return ir(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function Qa(e,t){t=$(t);const n=$(this),{has:r,get:a}=ir(n);let i=r.call(n,e);i||(e=$(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?xt(t,o)&&We(n,"set",e,t):We(n,"add",e,t),this}function ei(e){const t=$(this),{has:n,get:r}=ir(t);let a=n.call(t,e);a||(e=$(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&We(t,"delete",e,void 0),i}function ti(){const e=$(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function Pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=$(o),l=t?ga:e?xa:tn;return!e&&ve(s,"iterate",vt),o.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function Sn(e,t,n){return function(...r){const a=this.__v_raw,i=$(a),o=Ct(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),d=n?ga:t?xa:tn;return!t&&ve(i,"iterate",l?Ur:vt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(i){return xn(this,i)},get size(){return wn(this)},has:_n,add:Za,set:Qa,delete:ei,clear:ti,forEach:Pn(!1,!1)},t={get(i){return xn(this,i,!1,!0)},get size(){return wn(this)},has:_n,add:Za,set:Qa,delete:ei,clear:ti,forEach:Pn(!1,!0)},n={get(i){return xn(this,i,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Pn(!0,!1)},r={get(i){return xn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Sn(i,!1,!1),n[i]=Sn(i,!0,!1),t[i]=Sn(i,!1,!0),r[i]=Sn(i,!0,!0)}),[e,n,t,r]}const[al,il,ol,sl]=rl();function va(e,t){const n=t?e?sl:ol:e?il:al;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const ll={get:va(!1,!1)},cl={get:va(!1,!0)},fl={get:va(!0,!1)},go=new WeakMap,vo=new WeakMap,bo=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Fs(e))}function ba(e){return Ft(e)?e:ya(e,!1,el,ll,go)}function pl(e){return ya(e,!1,nl,cl,vo)}function yo(e){return ya(e,!0,tl,fl,bo)}function ya(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Mt(e){return Ft(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Yn(e){return!!(e&&e.__v_isShallow)}function xo(e){return Mt(e)||Ft(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function _o(e){return $n(e,"__v_skip",!0),e}const tn=e=>Z(e)?ba(e):e,xa=e=>Z(e)?yo(e):e;function wo(e){et&&ke&&(e=$(e),uo(e.dep||(e.dep=pa())))}function Po(e,t){e=$(e);const n=e.dep;n&&$r(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function Pr(e){return hl(e,!1)}function hl(e,t){return ue(e)?e:new gl(e,t)}class gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:tn(t)}get value(){return wo(this),this._value}set value(t){const n=this.__v_isShallow||Yn(t)||Ft(t);t=n?t:$(t),xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tn(t),Po(this))}}function vl(e){return ue(e)?e.value:e}const bl={get:(e,t,n)=>vl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function So(e){return Mt(e)?e:new Proxy(e,bl)}class yl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ha(t,()=>{this._dirty||(this._dirty=!0,Po(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=$(this);return wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new yl(r,a,i||!a,n)}function tt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){or(i,t,n)}return a}function Ce(e,t,n,r){if(j(e)){const i=tt(e,t,n,r);return i&&ro(i)&&i.catch(o=>{or(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function or(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}_l(e,n,a,r)}function _l(e,t,n,r=!0){console.error(e)}let nn=!1,Yr=!1;const fe=[];let Be=0;const Nt=[];let Ue=null,ft=0;const Oo=Promise.resolve();let _a=null;function wl(e){const t=_a||Oo;return e?t.then(this?e.bind(this):e):t}function Pl(e){let t=Be+1,n=fe.length;for(;t<n;){const r=t+n>>>1,a=fe[r],i=rn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function wa(e){(!fe.length||!fe.includes(e,nn&&e.allowRecurse?Be+1:Be))&&(e.id==null?fe.push(e):fe.splice(Pl(e.id),0,e),ko())}function ko(){!nn&&!Yr&&(Yr=!0,_a=Oo.then(Io))}function Sl(e){const t=fe.indexOf(e);t>Be&&fe.splice(t,1)}function Ol(e){R(e)?Nt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ft+1:ft))&&Nt.push(e),ko()}function ni(e,t=nn?Be+1:0){for(;t<fe.length;t++){const n=fe[t];n&&n.pre&&(fe.splice(t,1),t--,n())}}function Ao(e){if(Nt.length){const t=[...new Set(Nt)];if(Nt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>rn(n)-rn(r)),ft=0;ft<Ue.length;ft++)Ue[ft]();Ue=null,ft=0}}const rn=e=>e.id==null?1/0:e.id,kl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Io(e){Yr=!1,nn=!0,fe.sort(kl);const t=Te;try{for(Be=0;Be<fe.length;Be++){const n=fe[Be];n&&n.active!==!1&&tt(n,null,14)}}finally{Be=0,fe.length=0,Ao(),nn=!1,_a=null,(fe.length||Nt.length)&&Io()}}function Al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||q;h&&(a=n.map(_=>re(_)?_.trim():_)),m&&(a=n.map(jr))}let s,l=r[s=wr(t)]||r[s=wr(De(t))];!l&&i&&(l=r[s=wr(zt(t))]),l&&Ce(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(f,e,6,a)}}function To(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=f=>{const d=To(f,t,!0);d&&(s=!0,se(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Z(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):se(o,i),Z(e)&&r.set(e,o),o)}function sr(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,zt(t))||H(e,t))}let we=null,lr=null;function Wn(e){const t=we;return we=e,lr=e&&e.type.__scopeId||null,t}function cr(e){lr=e}function fr(){lr=null}function Il(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&mi(-1);const i=Wn(t);let o;try{o=e(...a)}finally{Wn(i),r._d&&mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:d,renderCache:m,data:h,setupState:_,ctx:N,inheritAttrs:E}=e;let z,P;const O=Wn(e);try{if(n.shapeFlag&4){const T=a||r;z=Fe(d.call(T,T,m,i,_,h,N)),P=l}else{const T=t;z=Fe(T.length>1?T(i,{attrs:l,slots:s,emit:f}):T(i,null)),P=t.props?l:Tl(l)}}catch(T){Zt.length=0,or(T,e,1),z=K(_t)}let L=z;if(P&&E!==!1){const T=Object.keys(P),{shapeFlag:Y}=L;T.length&&Y&7&&(o&&T.some(ua)&&(P=El(P,o)),L=Bt(L,P))}return n.dirs&&(L=Bt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),z=L,Wn(O),z}const Tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},El=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ri(r,o,f):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!sr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ri(r,o,f):!0:!!o;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!sr(n,i))return!0}return!1}function Ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Eo="components";function bt(e,t){return Rl(Eo,e,!0,t)||e}const Nl=Symbol.for("v-ndc");function Rl(e,t,n=!0,r=!1){const a=we||oe;if(a){const i=a.type;if(e===Eo){const s=Tc(i,!1);if(s&&(s===t||s===De(t)||s===ar(De(t))))return i}const o=ai(a[e]||i[e],t)||ai(a.appContext[e],t);return!o&&r?i:o}}function ai(e,t){return e&&(e[t]||e[De(t)]||e[ar(De(t))])}const Ll=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const On={};function Rt(e,t,n){return Co(e,t,n)}function Co(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){var s;const l=Gs()===((s=oe)==null?void 0:s.scope)?oe:null;let f,d=!1,m=!1;if(ue(e)?(f=()=>e.value,d=Yn(e)):Mt(e)?(f=()=>e,r=!0):R(e)?(m=!0,d=e.some(T=>Mt(T)||Yn(T)),f=()=>e.map(T=>{if(ue(T))return T.value;if(Mt(T))return dt(T);if(j(T))return tt(T,l,2)})):j(e)?t?f=()=>tt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ce(e,l,3,[_])}:f=Te,t&&r){const T=f;f=()=>dt(T())}let h,_=T=>{h=O.onStop=()=>{tt(T,l,4)}},N;if(on)if(_=Te,t?n&&Ce(t,l,3,[f(),m?[]:void 0,_]):f(),a==="sync"){const T=Nc();N=T.__watcherHandles||(T.__watcherHandles=[])}else return Te;let E=m?new Array(e.length).fill(On):On;const z=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((Y,le)=>xt(Y,E[le])):xt(T,E)))&&(h&&h(),Ce(t,l,3,[T,E===On?void 0:m&&E[0]===On?[]:E,_]),E=T)}else O.run()};z.allowRecurse=!!t;let P;a==="sync"?P=z:a==="post"?P=()=>ge(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),P=()=>wa(z));const O=new ha(f,P);t?n?z():E=O.run():a==="post"?ge(O.run.bind(O),l&&l.suspense):O.run();const L=()=>{O.stop(),l&&l.scope&&da(l.scope.effects,O)};return N&&N.push(L),L}function Bl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?Mo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=oe;jt(this);const s=Co(a,i.bind(r),n);return o?jt(o):yt(),s}function Mo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function dt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))dt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)dt(e[n],t);else if(no(e)||Ct(e))e.forEach(n=>{dt(n,t)});else if(io(e))for(const n in e)dt(e[n],t);return e}function jl(e,t){const n=we;if(n===null)return e;const r=pr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=q]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&dt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ht(),Ce(l,n,8,[e.el,s,e,t]),Ut())}}/*! #__NO_SIDE_EFFECTS__ */function No(e,t){return j(e)?(()=>se({name:e.name},t,{setup:e}))():e}const Bn=e=>!!e.type.__asyncLoader,Ro=e=>e.type.__isKeepAlive;function Dl(e,t){Lo(e,"a",t)}function zl(e,t){Lo(e,"da",t)}function Lo(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ur(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ro(a.parent.vnode)&&Hl(r,t,n,a),a=a.parent}}function Hl(e,t,n,r){const a=ur(t,e,r,!0);Fo(()=>{da(r[t],a)},n)}function ur(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ht(),jt(n);const s=Ce(t,n,e,o);return yt(),Ut(),s});return r?a.unshift(i):a.push(i),i}}const qe=e=>(t,n=oe)=>(!on||e==="sp")&&ur(e,(...r)=>t(...r),n),Ul=qe("bm"),$l=qe("m"),Yl=qe("bu"),Wl=qe("u"),Kl=qe("bum"),Fo=qe("um"),Gl=qe("sp"),Vl=qe("rtg"),ql=qe("rtc");function Xl(e,t=oe){ur("ec",e,t)}function Kn(e,t,n,r){let a;const i=n&&n[r];if(R(e)||re(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Wr=e=>e?Go(e)?pr(e)||e.proxy:Wr(e.parent):null,Jt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Pa(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=wl.bind(e.proxy)),$watch:e=>Bl.bind(e)}),Or=(e,t)=>e!==q&&!e.__isScriptSetup&&H(e,t),Jl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return o[t]=1,r[t];if(a!==q&&H(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&H(f,t))return o[t]=3,i[t];if(n!==q&&H(n,t))return o[t]=4,n[t];Kr&&(o[t]=0)}}const d=Jt[t];let m,h;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&H(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,H(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Or(a,t)?(a[t]=n,!0):r!==q&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&H(e,o)||Or(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Jt,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ii(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Kr=!0;function Zl(e){const t=Pa(e),n=e.proxy,r=e.ctx;Kr=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:d,beforeMount:m,mounted:h,beforeUpdate:_,updated:N,activated:E,deactivated:z,beforeDestroy:P,beforeUnmount:O,destroyed:L,unmounted:T,render:Y,renderTracked:le,renderTriggered:ce,errorCaptured:Pe,serverPrefetch:_e,expose:ze,inheritAttrs:Wt,components:gn,directives:vn,filters:yr}=t;if(f&&Ql(f,r,null),o)for(const Q in o){const G=o[Q];j(G)&&(r[Q]=G.bind(n))}if(a){const Q=a.call(n,n);Z(Q)&&(e.data=ba(Q))}if(Kr=!0,i)for(const Q in i){const G=i[Q],ot=j(G)?G.bind(n,n):j(G.get)?G.get.bind(n,n):Te,bn=!j(G)&&j(G.set)?G.set.bind(n):Te,st=$e({get:ot,set:bn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ne=>st.value=Ne})}if(s)for(const Q in s)Bo(s[Q],r,n,Q);if(l){const Q=j(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(G=>{ic(G,Q[G])})}d&&oi(d,e,"c");function de(Q,G){R(G)?G.forEach(ot=>Q(ot.bind(n))):G&&Q(G.bind(n))}if(de(Ul,m),de($l,h),de(Yl,_),de(Wl,N),de(Dl,E),de(zl,z),de(Xl,Pe),de(ql,le),de(Vl,ce),de(Kl,O),de(Fo,T),de(Gl,_e),R(ze))if(ze.length){const Q=e.exposed||(e.exposed={});ze.forEach(G=>{Object.defineProperty(Q,G,{get:()=>n[G],set:ot=>n[G]=ot})})}else e.exposed||(e.exposed={});Y&&e.render===Te&&(e.render=Y),Wt!=null&&(e.inheritAttrs=Wt),gn&&(e.components=gn),vn&&(e.directives=vn)}function Ql(e,t,n=Te){R(e)&&(e=Gr(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=jn(a.from||r,a.default,!0):i=jn(a.from||r):i=jn(a),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function oi(e,t,n){Ce(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bo(e,t,n,r){const a=r.includes(".")?Mo(n,r):()=>n[r];if(re(e)){const i=t[e];j(i)&&Rt(a,i)}else if(j(e))Rt(a,e.bind(n));else if(Z(e))if(R(e))e.forEach(i=>Bo(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Rt(a,i,e)}}function Pa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Gn(l,f,o,!0)),Gn(l,t,o)),Z(t)&&i.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Gn(e,i,n,!0),a&&a.forEach(o=>Gn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ec[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ec={data:si,props:li,emits:li,methods:qt,computed:qt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:qt,directives:qt,watch:nc,provide:si,inject:tc};function si(e,t){return t?e?function(){return se(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function tc(e,t){return qt(Gr(e),Gr(t))}function Gr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?se(Object.create(null),e,t):t}function li(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:se(Object.create(null),ii(e),ii(t??{})):t}function nc(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=pe(e[r],t[r]);return n}function jo(){return{app:null,config:{isNativeTag:Ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rc=0;function ac(e,t){return function(r,a=null){j(r)||(r=se({},r)),a!=null&&!Z(a)&&(a=null);const i=jo(),o=new WeakSet;let s=!1;const l=i.app={_uid:rc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Rc,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&j(f.install)?(o.add(f),f.install(l,...d)):j(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!s){const h=K(r,a);return h.appContext=i,d&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,pr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){Vn=l;try{return f()}finally{Vn=null}}};return l}}let Vn=null;function ic(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function jn(e,t,n=!1){const r=oe||we;if(r||Vn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Vn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function oc(e,t,n,r=!1){const a={},i={};$n(i,mr,1),e.propsDefaults=Object.create(null),Do(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:pl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function sc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=$(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(sr(e.emitsOptions,h))continue;const _=t[h];if(l)if(H(i,h))_!==i[h]&&(i[h]=_,f=!0);else{const N=De(h);a[N]=Vr(l,s,N,_,e,!1)}else _!==i[h]&&(i[h]=_,f=!0)}}}else{Do(e,t,a,i)&&(f=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=zt(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Vr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],f=!0)}f&&We(e,"set","$attrs")}function Do(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Ln(l))continue;const f=t[l];let d;a&&H(a,d=De(l))?!i||!i.includes(d)?n[d]=f:(s||(s={}))[d]=f:sr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=$(n),f=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Vr(a,l,m,f[m],e,!H(f,m))}}return o}function Vr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(jt(a),r=f[n]=l.call(null,t),yt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function zo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[h,_]=zo(m,t,!0);se(o,h),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Z(e)&&r.set(e,Et),Et;if(R(i))for(let d=0;d<i.length;d++){const m=De(i[d]);ci(m)&&(o[m]=q)}else if(i)for(const d in i){const m=De(d);if(ci(m)){const h=i[d],_=o[m]=R(h)||j(h)?{type:h}:se({},h);if(_){const N=di(Boolean,_.type),E=di(String,_.type);_[0]=N>-1,_[1]=E<0||N<E,(N>-1||H(_,"default"))&&s.push(m)}}}const f=[o,s];return Z(e)&&r.set(e,f),f}function ci(e){return e[0]!=="$"}function fi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ui(e,t){return fi(e)===fi(t)}function di(e,t){return R(t)?t.findIndex(n=>ui(n,e)):j(t)&&ui(t,e)?0:-1}const Ho=e=>e[0]==="_"||e==="$stable",Sa=e=>R(e)?e.map(Fe):[Fe(e)],lc=(e,t,n)=>{if(t._n)return t;const r=Il((...a)=>Sa(t(...a)),n);return r._c=!1,r},Uo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ho(a))continue;const i=e[a];if(j(i))t[a]=lc(a,i,r);else if(i!=null){const o=Sa(i);t[a]=()=>o}}},$o=(e,t)=>{const n=Sa(t);e.slots.default=()=>n},cc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),$n(t,"_",n)):Uo(t,e.slots={})}else e.slots={},t&&$o(e,t);$n(e.slots,mr,1)},fc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Uo(t,a)),o=t}else t&&($o(e,t),o={default:1});if(i)for(const s in a)!Ho(s)&&o[s]==null&&delete a[s]};function qr(e,t,n,r,a=!1){if(R(e)){e.forEach((h,_)=>qr(h,t&&(R(t)?t[_]:t),n,r,a));return}if(Bn(r)&&!a)return;const i=r.shapeFlag&4?pr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(re(f)?(d[f]=null,H(m,f)&&(m[f]=null)):ue(f)&&(f.value=null)),j(l))tt(l,s,12,[o,d]);else{const h=re(l),_=ue(l);if(h||_){const N=()=>{if(e.f){const E=h?H(m,l)?m[l]:d[l]:l.value;a?R(E)&&da(E,i):R(E)?E.includes(i)||E.push(i):h?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,H(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(N.id=-1,ge(N,n)):N()}}}const ge=Fl;function uc(e){return dc(e)}function dc(e,t){const n=Dr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:h,setScopeId:_=Te,insertStaticContent:N}=e,E=(c,u,p,g=null,v=null,x=null,S=!1,y=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!Gt(c,u)&&(g=yn(c),Ne(c,v,x,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:C,shapeFlag:A}=u;switch(b){case dr:z(c,u,p,g);break;case _t:P(c,u,p,g);break;case kr:c==null&&O(u,p,g,S);break;case ye:gn(c,u,p,g,v,x,S,y,w);break;default:A&1?Y(c,u,p,g,v,x,S,y,w):A&6?vn(c,u,p,g,v,x,S,y,w):(A&64||A&128)&&b.process(c,u,p,g,v,x,S,y,w,St)}C!=null&&v&&qr(C,c&&c.ref,x,u||c,!u)},z=(c,u,p,g)=>{if(c==null)r(u.el=s(u.children),p,g);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},P=(c,u,p,g)=>{c==null?r(u.el=l(u.children||""),p,g):u.el=c.el},O=(c,u,p,g)=>{[c.el,c.anchor]=N(c.children,u,p,g,c.el,c.anchor)},L=({el:c,anchor:u},p,g)=>{let v;for(;c&&c!==u;)v=h(c),r(c,p,g),c=v;r(u,p,g)},T=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=h(c),a(c),c=p;a(u)},Y=(c,u,p,g,v,x,S,y,w)=>{S=S||u.type==="svg",c==null?le(u,p,g,v,x,S,y,w):_e(c,u,v,x,S,y,w)},le=(c,u,p,g,v,x,S,y)=>{let w,b;const{type:C,props:A,shapeFlag:M,transition:F,dirs:D}=c;if(w=c.el=o(c.type,x,A&&A.is,A),M&8?d(w,c.children):M&16&&Pe(c.children,w,null,g,v,x&&C!=="foreignObject",S,y),D&&lt(c,null,g,"created"),ce(w,c,c.scopeId,S,g),A){for(const W in A)W!=="value"&&!Ln(W)&&i(w,W,null,A[W],x,c.children,g,v,He);"value"in A&&i(w,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Le(b,g,c)}D&&lt(c,null,g,"beforeMount");const V=mc(v,F);V&&F.beforeEnter(w),r(w,u,p),((b=A&&A.onVnodeMounted)||V||D)&&ge(()=>{b&&Le(b,g,c),V&&F.enter(w),D&&lt(c,null,g,"mounted")},v)},ce=(c,u,p,g,v)=>{if(p&&_(c,p),g)for(let x=0;x<g.length;x++)_(c,g[x]);if(v){let x=v.subTree;if(u===x){const S=v.vnode;ce(c,S,S.scopeId,S.slotScopeIds,v.parent)}}},Pe=(c,u,p,g,v,x,S,y,w=0)=>{for(let b=w;b<c.length;b++){const C=c[b]=y?Qe(c[b]):Fe(c[b]);E(null,C,u,p,g,v,x,S,y)}},_e=(c,u,p,g,v,x,S)=>{const y=u.el=c.el;let{patchFlag:w,dynamicChildren:b,dirs:C}=u;w|=c.patchFlag&16;const A=c.props||q,M=u.props||q;let F;p&&ct(p,!1),(F=M.onVnodeBeforeUpdate)&&Le(F,p,u,c),C&&lt(u,c,p,"beforeUpdate"),p&&ct(p,!0);const D=v&&u.type!=="foreignObject";if(b?ze(c.dynamicChildren,b,y,p,g,D,x):S||G(c,u,y,null,p,g,D,x,!1),w>0){if(w&16)Wt(y,u,A,M,p,g,v);else if(w&2&&A.class!==M.class&&i(y,"class",null,M.class,v),w&4&&i(y,"style",A.style,M.style,v),w&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const te=V[W],Se=A[te],Ot=M[te];(Ot!==Se||te==="value")&&i(y,te,Se,Ot,v,c.children,p,g,He)}}w&1&&c.children!==u.children&&d(y,u.children)}else!S&&b==null&&Wt(y,u,A,M,p,g,v);((F=M.onVnodeUpdated)||C)&&ge(()=>{F&&Le(F,p,u,c),C&&lt(u,c,p,"updated")},g)},ze=(c,u,p,g,v,x,S)=>{for(let y=0;y<u.length;y++){const w=c[y],b=u[y],C=w.el&&(w.type===ye||!Gt(w,b)||w.shapeFlag&70)?m(w.el):p;E(w,b,C,null,g,v,x,S,!0)}},Wt=(c,u,p,g,v,x,S)=>{if(p!==g){if(p!==q)for(const y in p)!Ln(y)&&!(y in g)&&i(c,y,p[y],null,S,u.children,v,x,He);for(const y in g){if(Ln(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(c,y,b,w,S,u.children,v,x,He)}"value"in g&&i(c,"value",p.value,g.value)}},gn=(c,u,p,g,v,x,S,y,w)=>{const b=u.el=c?c.el:s(""),C=u.anchor=c?c.anchor:s("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),c==null?(r(b,p,g),r(C,p,g),Pe(u.children,p,C,v,x,S,y,w)):A>0&&A&64&&M&&c.dynamicChildren?(ze(c.dynamicChildren,M,p,v,x,S,y),(u.key!=null||v&&u===v.subTree)&&Yo(c,u,!0)):G(c,u,p,C,v,x,S,y,w)},vn=(c,u,p,g,v,x,S,y,w)=>{u.slotScopeIds=y,c==null?u.shapeFlag&512?v.ctx.activate(u,p,g,S,w):yr(u,p,g,v,x,S,w):Ua(c,u,w)},yr=(c,u,p,g,v,x,S)=>{const y=c.component=Sc(c,g,v);if(Ro(c)&&(y.ctx.renderer=St),Oc(y),y.asyncDep){if(v&&v.registerDep(y,de),!c.el){const w=y.subTree=K(_t);P(null,w,u,p)}return}de(y,c,u,p,v,x,S)},Ua=(c,u,p)=>{const g=u.component=c.component;if(Cl(c,u,p))if(g.asyncDep&&!g.asyncResolved){Q(g,u,p);return}else g.next=u,Sl(g.update),g.update();else u.el=c.el,g.vnode=u},de=(c,u,p,g,v,x,S)=>{const y=()=>{if(c.isMounted){let{next:C,bu:A,u:M,parent:F,vnode:D}=c,V=C,W;ct(c,!1),C?(C.el=D.el,Q(c,C,S)):C=D,A&&Fn(A),(W=C.props&&C.props.onVnodeBeforeUpdate)&&Le(W,F,C,D),ct(c,!0);const te=Sr(c),Se=c.subTree;c.subTree=te,E(Se,te,m(Se.el),yn(Se),c,v,x),C.el=te.el,V===null&&Ml(c,te.el),M&&ge(M,v),(W=C.props&&C.props.onVnodeUpdated)&&ge(()=>Le(W,F,C,D),v)}else{let C;const{el:A,props:M}=u,{bm:F,m:D,parent:V}=c,W=Bn(u);if(ct(c,!1),F&&Fn(F),!W&&(C=M&&M.onVnodeBeforeMount)&&Le(C,V,u),ct(c,!0),A&&_r){const te=()=>{c.subTree=Sr(c),_r(A,c.subTree,c,v,null)};W?u.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=Sr(c);E(null,te,p,g,c,v,x),u.el=te.el}if(D&&ge(D,v),!W&&(C=M&&M.onVnodeMounted)){const te=u;ge(()=>Le(C,V,te),v)}(u.shapeFlag&256||V&&Bn(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&ge(c.a,v),c.isMounted=!0,u=p=g=null}},w=c.effect=new ha(y,()=>wa(b),c.scope),b=c.update=()=>w.run();b.id=c.uid,ct(c,!0),b()},Q=(c,u,p)=>{u.component=c;const g=c.vnode.props;c.vnode=u,c.next=null,sc(c,u.props,g,p),fc(c,u.children,p),Ht(),ni(),Ut()},G=(c,u,p,g,v,x,S,y,w=!1)=>{const b=c&&c.children,C=c?c.shapeFlag:0,A=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){bn(b,A,p,g,v,x,S,y,w);return}else if(M&256){ot(b,A,p,g,v,x,S,y,w);return}}F&8?(C&16&&He(b,v,x),A!==b&&d(p,A)):C&16?F&16?bn(b,A,p,g,v,x,S,y,w):He(b,v,x,!0):(C&8&&d(p,""),F&16&&Pe(A,p,g,v,x,S,y,w))},ot=(c,u,p,g,v,x,S,y,w)=>{c=c||Et,u=u||Et;const b=c.length,C=u.length,A=Math.min(b,C);let M;for(M=0;M<A;M++){const F=u[M]=w?Qe(u[M]):Fe(u[M]);E(c[M],F,p,null,v,x,S,y,w)}b>C?He(c,v,x,!0,!1,A):Pe(u,p,g,v,x,S,y,w,A)},bn=(c,u,p,g,v,x,S,y,w)=>{let b=0;const C=u.length;let A=c.length-1,M=C-1;for(;b<=A&&b<=M;){const F=c[b],D=u[b]=w?Qe(u[b]):Fe(u[b]);if(Gt(F,D))E(F,D,p,null,v,x,S,y,w);else break;b++}for(;b<=A&&b<=M;){const F=c[A],D=u[M]=w?Qe(u[M]):Fe(u[M]);if(Gt(F,D))E(F,D,p,null,v,x,S,y,w);else break;A--,M--}if(b>A){if(b<=M){const F=M+1,D=F<C?u[F].el:g;for(;b<=M;)E(null,u[b]=w?Qe(u[b]):Fe(u[b]),p,D,v,x,S,y,w),b++}}else if(b>M)for(;b<=A;)Ne(c[b],v,x,!0),b++;else{const F=b,D=b,V=new Map;for(b=D;b<=M;b++){const be=u[b]=w?Qe(u[b]):Fe(u[b]);be.key!=null&&V.set(be.key,b)}let W,te=0;const Se=M-D+1;let Ot=!1,Wa=0;const Kt=new Array(Se);for(b=0;b<Se;b++)Kt[b]=0;for(b=F;b<=A;b++){const be=c[b];if(te>=Se){Ne(be,v,x,!0);continue}let Re;if(be.key!=null)Re=V.get(be.key);else for(W=D;W<=M;W++)if(Kt[W-D]===0&&Gt(be,u[W])){Re=W;break}Re===void 0?Ne(be,v,x,!0):(Kt[Re-D]=b+1,Re>=Wa?Wa=Re:Ot=!0,E(be,u[Re],p,null,v,x,S,y,w),te++)}const Ka=Ot?pc(Kt):Et;for(W=Ka.length-1,b=Se-1;b>=0;b--){const be=D+b,Re=u[be],Ga=be+1<C?u[be+1].el:g;Kt[b]===0?E(null,Re,p,Ga,v,x,S,y,w):Ot&&(W<0||b!==Ka[W]?st(Re,p,Ga,2):W--)}}},st=(c,u,p,g,v=null)=>{const{el:x,type:S,transition:y,children:w,shapeFlag:b}=c;if(b&6){st(c.component.subTree,u,p,g);return}if(b&128){c.suspense.move(u,p,g);return}if(b&64){S.move(c,u,p,St);return}if(S===ye){r(x,u,p);for(let A=0;A<w.length;A++)st(w[A],u,p,g);r(c.anchor,u,p);return}if(S===kr){L(c,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ge(()=>y.enter(x),v);else{const{leave:A,delayLeave:M,afterLeave:F}=y,D=()=>r(x,u,p),V=()=>{A(x,()=>{D(),F&&F()})};M?M(x,D,V):V()}else r(x,u,p)},Ne=(c,u,p,g=!1,v=!1)=>{const{type:x,props:S,ref:y,children:w,dynamicChildren:b,shapeFlag:C,patchFlag:A,dirs:M}=c;if(y!=null&&qr(y,null,p,c,!0),C&256){u.ctx.deactivate(c);return}const F=C&1&&M,D=!Bn(c);let V;if(D&&(V=S&&S.onVnodeBeforeUnmount)&&Le(V,u,c),C&6)Es(c.component,p,g);else{if(C&128){c.suspense.unmount(p,g);return}F&&lt(c,null,u,"beforeUnmount"),C&64?c.type.remove(c,u,p,v,St,g):b&&(x!==ye||A>0&&A&64)?He(b,u,p,!1,!0):(x===ye&&A&384||!v&&C&16)&&He(w,u,p),g&&$a(c)}(D&&(V=S&&S.onVnodeUnmounted)||F)&&ge(()=>{V&&Le(V,u,c),F&&lt(c,null,u,"unmounted")},p)},$a=c=>{const{type:u,el:p,anchor:g,transition:v}=c;if(u===ye){Ts(p,g);return}if(u===kr){T(c);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:y}=v,w=()=>S(p,x);y?y(c.el,x,w):w()}else x()},Ts=(c,u)=>{let p;for(;c!==u;)p=h(c),a(c),c=p;a(u)},Es=(c,u,p)=>{const{bum:g,scope:v,update:x,subTree:S,um:y}=c;g&&Fn(g),v.stop(),x&&(x.active=!1,Ne(S,c,u,p)),y&&ge(y,u),ge(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},He=(c,u,p,g=!1,v=!1,x=0)=>{for(let S=x;S<c.length;S++)Ne(c[S],u,p,g,v)},yn=c=>c.shapeFlag&6?yn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Ya=(c,u,p)=>{c==null?u._vnode&&Ne(u._vnode,null,null,!0):E(u._vnode||null,c,u,null,null,null,p),ni(),Ao(),u._vnode=c},St={p:E,um:Ne,m:st,r:$a,mt:yr,mc:Pe,pc:G,pbc:ze,n:yn,o:e};let xr,_r;return t&&([xr,_r]=t(St)),{render:Ya,hydrate:xr,createApp:ac(Ya,xr)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function mc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Yo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Yo(o,s)),s.type===dr&&(s.el=o.el)}}function pc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const hc=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),Zt=[];let Ae=null;function ne(e=!1){Zt.push(Ae=e?null:[])}function gc(){Zt.pop(),Ae=Zt[Zt.length-1]||null}let an=1;function mi(e){an+=e}function Wo(e){return e.dynamicChildren=an>0?Ae||Et:null,gc(),an>0&&Ae&&Ae.push(e),e}function ie(e,t,n,r,a,i){return Wo(B(e,t,n,r,a,i,!0))}function vc(e,t,n,r,a){return Wo(K(e,t,n,r,a,!0))}function Xr(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",Ko=({key:e})=>e??null,Dn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ue(e)||j(e)?{i:we,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ko(t),ref:t&&Dn(t),scopeId:lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),an>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const K=bc;function bc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Nl)&&(e=_t),Xr(e)){const s=Bt(e,t,!0);return n&&Oa(s,n),an>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(Ec(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=dn(s)),Z(l)&&(xo(l)&&!R(l)&&(l=se({},l)),t.style=Ee(l))}const o=re(e)?1:Ll(e)?128:hc(e)?64:Z(e)?4:j(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function yc(e){return e?xo(e)||mr in e?se({},e):e:null}function Bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?_c(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ko(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Dn(t)):[a,Dn(t)]:Dn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xc(e=" ",t=0){return K(dr,null,e,t)}function pi(e="",t=!1){return t?(ne(),vc(_t,null,e)):K(_t,null,e)}function Fe(e){return e==null||typeof e=="boolean"?K(_t):R(e)?K(ye,null,e.slice()):typeof e=="object"?Qe(e):K(dr,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(mr in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[xc(t)]):n=8);e.children=t,e.shapeFlag|=n}function _c(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=dn([t.class,r.class]));else if(a==="style")t.style=Ee([t.style,r.style]);else if(er(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Ce(e,t,7,[n,r])}const wc=jo();let Pc=0;function Sc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wc,i={uid:Pc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zo(r,a),emitsOptions:To(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Al.bind(null,i),e.ce&&e.ce(i),i}let oe=null,ka,kt,hi="__VUE_INSTANCE_SETTERS__";(kt=Dr()[hi])||(kt=Dr()[hi]=[]),kt.push(e=>oe=e),ka=e=>{kt.length>1?kt.forEach(t=>t(e)):kt[0](e)};const jt=e=>{ka(e),e.scope.on()},yt=()=>{oe&&oe.scope.off(),ka(null)};function Go(e){return e.vnode.shapeFlag&4}let on=!1;function Oc(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=Go(e);oc(e,n,a,t),cc(e,r);const i=a?kc(e,t):void 0;return on=!1,i}function kc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_o(new Proxy(e.ctx,Jl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ic(e):null;jt(e),Ht();const i=tt(r,e,0,[e.props,a]);if(Ut(),yt(),ro(i)){if(i.then(yt,yt),t)return i.then(o=>{gi(e,o,t)}).catch(o=>{or(o,e,0)});e.asyncDep=i}else gi(e,i,t)}else Vo(e,t)}function gi(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=So(t)),Vo(e,n)}let vi;function Vo(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Pa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=se(se({isCustomElement:i,delimiters:s},o),l);r.render=vi(a,f)}}e.render=r.render||Te}{jt(e),Ht();try{Zl(e)}finally{Ut(),yt()}}}function Ac(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function Ic(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ac(e)},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(So(_o(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Tc(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Ec(e){return j(e)&&"__vccOpts"in e}const $e=(e,t)=>xl(e,t,on);function Cc(e,t,n){const r=arguments.length;return r===2?Z(t)&&!R(t)?Xr(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),K(e,t,n))}const Mc=Symbol.for("v-scx"),Nc=()=>jn(Mc),Rc="3.3.8",Lc="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,bi=ut&&ut.createElement("template"),Fc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ut.createElementNS(Lc,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const s=bi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Bc=Symbol("_vtc");function jc(e,t,n){const r=e[Bc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Dc=Symbol("_vod");function zc(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Jr(r,i,"");for(const i in n)Jr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Dc in e&&(r.display=i)}}const yi=/\s*!important$/;function Jr(e,t,n){if(R(n))n.forEach(r=>Jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Hc(e,t);yi.test(n)?e.setProperty(zt(r),n.replace(yi,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],Ar={};function Hc(e,t){const n=Ar[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return Ar[t]=r;r=ar(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return Ar[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function Uc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=Ys(t);n==null||i&&!oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function $c(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=oo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function At(e,t,n,r){e.addEventListener(t,n,r)}function Yc(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function Wc(e,t,n,r,a=null){const i=e[wi]||(e[wi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Kc(t);if(r){const f=i[t]=qc(r,a);At(e,s,f,l)}else o&&(Yc(e,s,o,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function Kc(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Ir=0;const Gc=Promise.resolve(),Vc=()=>Ir||(Gc.then(()=>Ir=0),Ir=Date.now());function qc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Xc(r,n.value),t,5,[r])};return n.value=e,n.attached=Vc(),n}function Xc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Si=/^on[a-z]/,Jc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?jc(e,r,a):t==="style"?zc(e,n,r):er(t)?ua(t)||Wc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zc(e,t,r,a))?$c(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uc(e,t,r,a))};function Zc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&re(n)?!1:t in e}const Oi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Fn(t,n):t};function Qc(e){e.target.composing=!0}function ki(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Tr=Symbol("_assign"),ef={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Tr]=Oi(a);const i=r||a.props&&a.props.type==="number";At(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=jr(s)),e[Tr](s)}),n&&At(e,"change",()=>{e.value=e.value.trim()}),t||(At(e,"compositionstart",Qc),At(e,"compositionend",ki),At(e,"change",ki))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Tr]=Oi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&jr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},tf=se({patchProp:Jc},Fc);let Ai;function nf(){return Ai||(Ai=uc(tf))}const rf=(...e)=>{const t=nf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=af(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function af(e){return re(e)?document.querySelector(e):e}const Ii=(e,t)=>{const n=[];return Array.from(Array(2).keys()).forEach(()=>{Array.from(Array(e)).forEach(()=>{n.push(t)}),n.push(0)}),n};class Er{constructor(t){me(this,"board");me(this,"movesRecord");this.board=[...t],this.movesRecord=[]}getLastIncrementedPitId(){return this.movesRecord[this.movesRecord.length-1].pitId}getPitSeeds(t){return this.board[t]}setPitSeeds(t,n){const r=this.board[t];return this.board[t]=n,this.movesRecord.push({pitId:t,seeds:this.board[t]}),r}getBoard(){return this.board}transferSeeds(t,n){const r=this.board[t];this.setPitSeeds(t,0),this.incrementPitSeeds(n,r)}incrementPitSeeds(t,n=1){return this.setPitSeeds(t,n+this.board[t])}getMovesRecord(){return this.movesRecord}}var U=(e=>(e.TOP="TOP",e.BOTTOM="BOTTOM",e))(U||{});const zn=e=>e==="TOP"?"BOTTOM":"TOP";class mt{constructor(t){me(this,"boardLength");me(this,"totalStones");this.boardLength=t.length,this.totalStones=t.reduce((n,r)=>n+r,0)}getSideStorePitId(t){return t===U.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSideStorePitId(t){return t!==U.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSidePitId(t){return this.boardLength-2-t}isPitStore(t){return t===this.boardLength/2-1||t===this.boardLength-1}checkPitOwnership(t,n){return t===U.TOP&&n<this.boardLength/2||t===U.BOTTOM&&n>=this.boardLength/2}getNextPitId(t){return(t+1)%this.boardLength}}class qo{constructor(t){me(this,"playerSide");this.playerSide=t}checkPlayerScore(t){return t[new mt(t).getSideStorePitId(this.playerSide)]}checkOppositePlayerScore(t){return t[new mt(t).getOppositeSideStorePitId(this.playerSide)]}getAvailableMovesForPlayer(t){const n=new mt(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(this.playerSide,i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}getAvailableMovesForOpponentPlayer(t){const n=new mt(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(zn(this.playerSide),i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}}class of{constructor(t,n){me(this,"staticBoardAnalyser");me(this,"engineSettings");me(this,"movesHistory");this.staticBoardAnalyser=new mt(t),this.movesHistory=[],this.engineSettings=n||{}}makeMove(t,n){this.validateMove(t,n);const r=t.playerSide;this.movesHistory.push(t);const a=this.redistributeSeeds(t,n),i=a.getLastIncrementedPitId(),o=this.checkCapture(r,i,a.getBoard()),s=this.checkGameOver(r,o.getBoard());return s?{winningPlayer:s.winningPlayer,nextTurnPlayer:r,boardConfig:s.boardConfig,gameOver:!0,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(o.getMovesRecord()).concat(s.gameOverMovesRecord):void 0}:{nextTurnPlayer:this.checkNextPlayerTurn(r,i),boardConfig:o.getBoard(),gameOver:!1,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(o.getMovesRecord()):void 0}}redistributeSeeds(t,n){const r=new Er(n);let a=t.pitId,i=r.setPitSeeds(a,0);for(;i>0;)a=this.staticBoardAnalyser.getNextPitId(a),!(this.staticBoardAnalyser.isPitStore(a)&&!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,a))&&(r.incrementPitSeeds(a),--i);return r}getMovesHistory(){return this.movesHistory}checkNextPlayerTurn(t,n){return this.staticBoardAnalyser.checkPitOwnership(t,n)&&this.staticBoardAnalyser.isPitStore(n)?t:zn(t)}checkCapture(t,n,r){const a=new Er(r);if(this.staticBoardAnalyser.checkPitOwnership(t,n)&&a.getPitSeeds(n)===1&&!this.staticBoardAnalyser.isPitStore(n)){const i=this.staticBoardAnalyser.getOppositeSidePitId(n),o=a.getPitSeeds(i);if(o>0){this.movesHistory.push({playerSide:t,capturedSeeds:o,pitId:i});const s=this.staticBoardAnalyser.getSideStorePitId(t);a.transferSeeds(i,s),a.transferSeeds(n,s)}}return a}validateMove(t,n){if(!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,t.pitId))throw new Error(`Player '${t.playerSide}' cannot select an opponent's pit (${t.pitId})`);if(this.staticBoardAnalyser.isPitStore(t.pitId))throw new Error(`Player '${t.playerSide}' cannot select a store (${t.pitId})`);if(n[t.pitId]===0)throw new Error(`Player '${t.playerSide}' cannot select an empty pit (${t.pitId})`)}checkGameOver(t,n){const r=new qo(t);if(r.getAvailableMovesForPlayer(n).length!==0&&r.getAvailableMovesForOpponentPlayer(n).length!==0)return;const a=r.checkPlayerScore(n),i=r.checkOppositePlayerScore(n),o=this.getGameOverMovesRecord(n,t);let s;return a>i?s=t:a<i&&(s=zn(t)),{gameOver:!0,boardConfig:o.getBoard(),gameOverMovesRecord:o.getMovesRecord(),winningPlayer:s}}getGameOverMovesRecord(t,n){const r=new Er(t);if(this.engineSettings.gameOverCaptureVariation){const a=this.staticBoardAnalyser.getSideStorePitId(n);t.forEach(s=>{this.staticBoardAnalyser.checkPitOwnership(n,s)&&s!==a&&r.transferSeeds(s,a)});const i=zn(n),o=this.staticBoardAnalyser.getSideStorePitId(i);t.forEach(s=>{this.staticBoardAnalyser.checkPitOwnership(i,s)&&s!==o&&r.transferSeeds(s,o)})}return r}}class Cr{constructor(t,n){me(this,"side");me(this,"brain");this.side=t,this.brain=n}async selectNextMove(t){return this.brain.selectNextMove(this.side,t)}}var Me=(e=>(e[e.HUMAN=0]="HUMAN",e[e.AI=1]="AI",e))(Me||{});Object.keys(Me).filter(e=>isNaN(Number(e)));const sf={style:{width:"100%",height:"100%",position:"relative"}},lf=No({__name:"Pit",props:{index:{},store:{type:Boolean},side:{},seeds:{},ownerPlayerType:{},lastSelectedPitId:{},playingPlayerSide:{}},emits:["nextActionSelected"],setup(e,{emit:t}){const n=t,r=e,a=()=>Math.random()*25+25+"%",i={"border-bottom-left-radius":a(),"border-top-left-radius":a(),"border-bottom-right-radius":a(),"border-top-right-radius":a()},o=Pr(!1),s=Pr(!1),l=Pr(d());function f(){r.store||r.ownerPlayerType===Me.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&n("nextActionSelected",r.side,r.index)}Rt(()=>r.playingPlayerSide,()=>{l.value=d()}),Rt(()=>r.seeds,()=>{s.value=!0,setTimeout(()=>s.value=!1,200),l.value=d()});function d(){return r.ownerPlayerType===Me.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&!r.store}function m(){o.value=!0,l.value=d()}function h(){o.value=!1,l.value=d()}const _=$e(()=>({"d-block":!0,hole:!0,number:!0,stonesNumberChangedAnimation:s.value,availableOption:l.value,lastSelectedPit:r.lastSelectedPitId===r.index,hovered:o.value&&l.value})),N=$e(()=>{const E=r.side===U.BOTTOM?"var(--bottom-player-color)":"var(--top-player-color)";return{...i,"border-color":E,"box-shadow":"inset 7px 7px 0px var(--wooden-half-shade), 1px 1px 10px "+E,"padding-top":r.store?"20%":"5%"}});return(E,z)=>(ne(),ie("div",sf,[B("span",{class:dn(_.value),style:Ee(N.value),onMouseenter:m,onMouseleave:h,onClick:f},gt(E.seeds),39)]))}});const $t=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},cf=$t(lf,[["__scopeId","data-v-919f0070"]]);let Mr;const ff={name:"Board",props:["internalPockets","initialStones","topPlayer","bottomPlayer","animationSpeed","gameIsRunning"],components:{Pit:cf},emits:["animationIsRunning","gameOver","playingPlayerChanged"],setup(){return{PlayerSide:U}},data(){return{aiIsThinking:!1,accumulator:0,accumulatorColor:"",lastSelectedPitId:void 0,animationRunning:!1,board:Ii(6,4),playingPlayer:void 0}},watch:{gameIsRunning(){var e;this.gameIsRunning?(this.playingPlayer=this.topPlayer,this.board=Ii(this.internalPockets,this.initialStones),Mr=new of(this.board,{recordMoves:!0}),((e=this.playingPlayer)==null?void 0:e.brain.type)!==Me.HUMAN&&this.aiThinkAboutNextMove()):(this.lastSelectedPitId=void 0,this.animationRunning=!1,this.accumulator=0,this.playingPlayer=void 0)}},computed:{bottomSideStorePit(){return new mt(this.board).getSideStorePitId(U.BOTTOM)},topSideStorePit(){return new mt(this.board).getSideStorePitId(U.TOP)},spinningStyle(){var e;return{color:((e=this.playingPlayer)==null?void 0:e.side)===U.TOP?"var(--top-player-color)":"var(--bottom-player-color)"}},accumulatorClass(){return{"d-block":!0,number:!0,accumulator:!0,hole:!0,"accumulator-hole-showing":this.accumulator>=0}},accumulatorStyle(){return{color:this.accumulatorColor,"border-color":this.accumulatorColor}},topInternalPockets(){return this.board.filter((e,t)=>t<this.board.length/2-1).reverse()},bottomInternalPockets(){return this.board.filter((e,t)=>t>=this.board.length/2&&t<this.board.length-1)}},methods:{async aiThinkAboutNextMove(){this.aiIsThinking=!0;const e=await this.playingPlayer.selectNextMove(this.board);this.aiIsThinking=!1,this.updateBoard({playerSide:this.playingPlayer.side,pitId:e})},sleep(e){return new Promise(t=>setTimeout(()=>t(),e))},nextActionSelected(e,t){this.animationRunning||this.updateBoard({playerSide:e,pitId:t})},updateAnimationColor(e){switch(e){case U.TOP:this.accumulatorColor="var(--top-player-color)";break;case U.BOTTOM:this.accumulatorColor="var(--bottom-player-color)";break}},async updateBoard(e){this.$emit("animationIsRunning",!0),this.lastSelectedPitId=e.pitId,this.updateAnimationColor(e.playerSide),this.animationRunning=!0,this.playingPlayer=void 0,this.accumulator=this.board[e.pitId];const t=Mr.makeMove(e,this.board),n=[...t.movesRecord];for(let r of n){if(!this.gameIsRunning)return;this.board[r.pitId]=r.seeds,await this.sleep(this.animationSpeed),--this.accumulator}this.finishUpdatingBoard(t)},finishUpdatingBoard(e){this.animationRunning=!1,this.$emit("animationIsRunning",!1),e.gameOver?this.$emit("gameOver",{winningPlayer:e.winningPlayer,movesHistory:Mr.getMovesHistory(),board:this.board}):(this.playingPlayer=this.getBrainFromSide(e.nextTurnPlayer),this.$emit("playingPlayerChanged",this.playingPlayer),this.playingPlayer.brain.type!==Me.HUMAN&&this.aiThinkAboutNextMove())},getBrainFromSide(e){return this.topPlayer.side===e?this.topPlayer:this.bottomPlayer}}},uf="/mancala/wooden-square-plank-bc8f16d6.png";const Xo=e=>(cr("data-v-e616f422"),e=e(),fr(),e),df={class:"container-lg text-center",id:"boardContainer"},mf=Xo(()=>B("img",{src:uf,class:"img-fluid w-100",alt:"wooden-square-plank"},null,-1)),pf={class:"accumulatorNumber number"},hf=Xo(()=>B("span",{class:"visually-hidden"},"Loading...",-1)),gf=[hf],vf={class:"container-fluid px-5 plank-board"},bf={class:"row g-2 h-100"},yf={class:"col"},xf={class:"col-8"},_f={class:"row g-0 justify-content-center",style:{height:"50%"}},wf={class:"col mx-auto"},Pf={class:"row g-0 justify-content-center",style:{height:"50%"}},Sf={class:"col mx-auto"},Of={class:"col"};function kf(e,t,n,r,a,i){var s,l,f,d;const o=bt("Pit");return ne(),ie("div",df,[mf,a.animationRunning&&a.accumulator>=0?(ne(),ie("span",{key:0,class:dn(i.accumulatorClass),style:Ee(i.accumulatorStyle)},[B("span",pf,gt(a.accumulator),1)],6)):pi("",!0),a.aiIsThinking?(ne(),ie("div",{key:1,class:"spinner-border",style:Ee(i.spinningStyle),role:"status"},gf,4)):pi("",!0),B("div",vf,[B("div",bf,[B("div",yf,[K(o,{seeds:a.board[i.topSideStorePit],index:i.topSideStorePit,playingPlayerSide:(s=a.playingPlayer)==null?void 0:s.side,store:!0,ownerPlayerType:(l=n.topPlayer)==null?void 0:l.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.TOP},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])]),B("div",xf,[B("div",_f,[(ne(!0),ie(ye,null,Kn(i.topInternalPockets,(m,h)=>{var _,N;return ne(),ie("div",wf,[K(o,{seeds:m,index:i.topInternalPockets.length-1-h,store:!1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(_=n.topPlayer)==null?void 0:_.brain.type,onNextActionSelected:i.nextActionSelected,playingPlayerSide:(N=a.playingPlayer)==null?void 0:N.side,side:r.PlayerSide.TOP},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","onNextActionSelected","playingPlayerSide","side"])])}),256))]),B("div",Pf,[(ne(!0),ie(ye,null,Kn(i.bottomInternalPockets,(m,h)=>{var _,N;return ne(),ie("div",Sf,[K(o,{seeds:m,index:h+i.bottomInternalPockets.length+1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(_=n.bottomPlayer)==null?void 0:_.brain.type,playingPlayerSide:(N=a.playingPlayer)==null?void 0:N.side,store:!1,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","playingPlayerSide","onNextActionSelected","side"])])}),256))])]),B("div",Of,[K(o,{seeds:a.board[i.bottomSideStorePit],index:i.bottomSideStorePit,playingPlayerSide:(f=a.playingPlayer)==null?void 0:f.side,store:!0,ownerPlayerType:(d=n.bottomPlayer)==null?void 0:d.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])])])])])}const Af=$t(ff,[["render",kf],["__scopeId","data-v-e616f422"]]),If=()=>{const e={moves:0,capture:0,capturedSeeds:0};return{[U.TOP]:{...e},[U.BOTTOM]:{...e}}},Tf={name:"GameOver",props:["result"],emits:["modalIsGone"],setup(){return{PlayerSide:U}},data(){return{rows:[]}},mounted(){const e=document.getElementById("myModal");e==null||e.addEventListener("hidden.bs.modal",t=>{console.log("timeout"),this.$emit("modalIsGone"),this.rows=[]})},watch:{result(){this.rows=this.createRows(),new bootstrap.Modal("#myModal",{}).show()}},computed:{rowStyle(){return e=>({color:e===U.TOP?"var(--top-player-color)":"var(--bottom-player-color)","text-shadow":"1px 1px black"})}},methods:{createRows(){const e=If(),t=this.result,n=new qo(U.TOP),r=[];t.movesHistory.forEach(i=>{++e[i.playerSide].moves,i.capturedSeeds&&(++e[i.playerSide].capture,e[i.playerSide].capturedSeeds+=i.capturedSeeds)});const a=(i,o)=>i.toString().padStart(o);return r.push({title:"Score",topPlayer:a(n.checkPlayerScore(t.board),2),bottomPlayer:a(n.checkOppositePlayerScore(t.board),2)}),r.push({title:"Moves",topPlayer:a(e[U.TOP].moves,2),bottomPlayer:a(e[U.BOTTOM].moves,2)}),r.push({title:"Captures (seeds)",topPlayer:a(e[U.TOP].capture,2)+` (${a(e[U.TOP].capturedSeeds,2)})`,bottomPlayer:a(e[U.BOTTOM].capture,2)+` (${a(e[U.BOTTOM].capturedSeeds,2)})`}),r}}};const Ef=e=>(cr("data-v-052a61e8"),e=e(),fr(),e),Cf={class:"modal",tabindex:"-1",id:"myModal"},Mf={class:"modal-dialog modal-dialog-centered modal-lg"},Nf={class:"modal-content"},Rf=Ef(()=>B("div",{class:"modal-header pb-1",style:{"border-width":"5px","border-color":"var(--vt-c-black)"}},[B("h1",{class:"fs-1 modal-title text",style:{"text-align":"center"}},"Game Stats")],-1)),Lf={class:"modal-body"},Ff={class:"table"},Bf={class:"text fs-2",style:{"text-align":"center"}},jf={scope:"row"};function Df(e,t,n,r,a,i){return ne(),ie("div",Cf,[B("div",Mf,[B("div",Nf,[Rf,B("div",Lf,[B("table",Ff,[B("tbody",null,[(ne(!0),ie(ye,null,Kn(a.rows,o=>(ne(),ie("tr",Bf,[B("td",{style:Ee(i.rowStyle(r.PlayerSide.TOP))},gt(o.topPlayer),5),B("th",jf,gt(o.title),1),B("td",{style:Ee(i.rowStyle(r.PlayerSide.BOTTOM))},gt(o.bottomPlayer),5)]))),256))])])])])])])}const zf=$t(Tf,[["render",Df],["__scopeId","data-v-052a61e8"]]);class qn{constructor(){me(this,"type",Me.HUMAN)}selectNextMove(t,n){throw new Error("Human brain should read next move from input")}getLabel(){return"Human"}}function Hf(){return new Worker("/mancala/AiWorker-fd2d4055.js")}var Aa=(e=>(e[e.EASY=0]="EASY",e[e.MEDIUM=1]="MEDIUM",e[e.HARD=2]="HARD",e))(Aa||{});const Uf=Object.keys(Aa).filter(e=>isNaN(Number(e)));class $f{constructor(t){me(this,"brainLevel");me(this,"aiWorker",new Hf);me(this,"type",Me.AI);this.brainLevel=t}async selectNextMove(t,n){return new Promise(r=>{this.aiWorker.onmessage=async a=>r(a.data.bestPocketIdToPlay),this.aiWorker.postMessage({playingPlayer:t,brainLevel:this.brainLevel,boardConfig:JSON.stringify(n)})})}getLabel(){return Aa[this.brainLevel]}}const Yf={name:"BrainSelector",props:["gameIsRunning","side"],emits:["brainSelected"],setup(){return{PlayerType:Me}},data(){return{selectedBrain:new qn}},mounted(){this.brainSelected()},computed:{currentBrainIcon(){return this.selectedBrain.type===Me.HUMAN?"fa-brain":"fa-robot"},currentBrainLabel(){return this.selectedBrain.type===Me.HUMAN?this.selectedBrain.getLabel():this.aiBrainLabel(this.selectedBrain.getLabel())},availableAiBrainsLabel(){return Uf.map(e=>this.aiBrainLabel(e))},labelText(){const e={color:"var(--top-player-color)",direction:"ltr",textAlign:"left",border:"none"};return this.side===U.BOTTOM&&(e.color="var(--bottom-player-color)",e.direction="rtl",e.textAlign="right"),e}},methods:{aiBrainLabel(e){return"AI - "+e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},brainSelected(e){e!==void 0?this.selectedBrain=new $f(e):this.selectedBrain=new qn,this.$emit("brainSelected",{brain:this.selectedBrain,side:this.side})}}};const Jo=e=>(cr("data-v-0b32b637"),e=e(),fr(),e),Wf={class:"dropdown"},Kf=["disabled"],Gf={class:"dropdown-menu p-0"},Vf=Jo(()=>B("span",null,"Human",-1)),qf=Jo(()=>B("li",null,[B("hr",{class:"dropdown-divider my-1"})],-1)),Xf=["onClick"];function Jf(e,t,n,r,a,i){const o=bt("font-awesome-icon");return ne(),ie("span",Wf,[B("button",{disabled:n.gameIsRunning,class:"btn btn-sm dropdown-toggle text",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:Ee(i.labelText)},[K(o,{icon:"fa-solid "+i.currentBrainIcon,style:{margin:"0 10px",border:"none"}},null,8,["icon"]),B("span",null,gt(i.currentBrainLabel),1)],12,Kf),B("ul",Gf,[B("li",null,[B("button",{onClick:t[0]||(t[0]=s=>i.brainSelected()),class:"dropdown-item btn-sm text px-2",style:Ee(i.labelText)},[K(o,{icon:"fa-solid fa-brain",style:{margin:"0 10px"}}),Vf],4)]),qf,(ne(!0),ie(ye,null,Kn(i.availableAiBrainsLabel,(s,l)=>(ne(),ie("li",null,[B("button",{onClick:f=>i.brainSelected(l),class:"dropdown-item btn-sm text px-2",style:Ee(i.labelText)},[K(o,{icon:"fa-solid fa-robot",style:{margin:"0 10px"}}),B("span",null,gt(s),1)],12,Xf)]))),256))])])}const Zf=$t(Yf,[["render",Jf],["__scopeId","data-v-0b32b637"]]),Qf={name:"NavBar",components:{BrainSelector:Zf},props:["gameIsRunning","animationSpeed"],setup(){return{PlayerSide:U}},emits:["startGame","abortGame","animationSpeedChanged"],data(){return{animationInterval:{max:2100,min:100},timerInterval:void 0,timer:0,players:{[U.TOP]:new Cr(U.TOP,new qn),[U.BOTTOM]:new Cr(U.BOTTOM,new qn)},animationDelay:this.animationSpeed}},computed:{timerLabel(){let e=Math.trunc(this.timer/60),t=this.timer%60;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")}},watch:{gameIsRunning(){this.gameIsRunning||(clearInterval(this.timerInterval),this.timerInterval=0)},animationDelay(){const e=this.animationInterval.max+this.animationInterval.min-this.animationDelay;this.$emit("animationSpeedChanged",e)}},methods:{startGame(){this.timer=0,this.timerInterval=setInterval(()=>this.timer+=1,1e3),this.$emit("startGame",{topPlayer:this.players[U.TOP],bottomPlayer:this.players[U.BOTTOM],animationSpeed:this.animationSpeed})},stopGame(){clearInterval(this.timerInterval),this.timerInterval=0,this.$emit("abortGame")},brainSelected(e){this.players[e.side]=new Cr(e.side,e.brain)}}},eu="/mancala/VS-95e5eab8.svg";const Ia=e=>(cr("data-v-1490567b"),e=e(),fr(),e),tu={class:"navbar w-100 border-bottom border-body",style:{"background-color":"var(--nav-bar-color)","max-height":"15vh"}},nu={class:"container-fluid"},ru={class:"row w-100 g-1 justify-content-between"},au={class:"col-12 col-sm-6 col-lg-4",style:{"text-align":"center"}},iu=Ia(()=>B("img",{src:eu,class:"img-fluid",alt:"versus",style:{width:"2.5em !important"}},null,-1)),ou={class:"col-6 col-sm-3 col-lg-4"},su={class:"d-flex",style:{color:"var(--vt-c-black-mute)"}},lu=["min","max"],cu={class:"col-6 col-sm-3 d-flex justify-content-end"},fu=Ia(()=>B("span",{class:"text"}," Stop ",-1)),uu=Ia(()=>B("span",{class:"text"}," Start ",-1));function du(e,t,n,r,a,i){const o=bt("BrainSelector"),s=bt("font-awesome-icon");return ne(),ie("nav",tu,[B("div",nu,[B("div",ru,[B("div",au,[K(o,{side:r.PlayerSide.TOP,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"]),iu,K(o,{side:r.PlayerSide.BOTTOM,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"])]),B("div",ou,[B("div",su,[jl(B("input",{type:"range",class:"form-range range-cust",min:a.animationInterval.min,step:200,max:a.animationInterval.max,"onUpdate:modelValue":t[0]||(t[0]=l=>a.animationDelay=l),style:{margin:"5px"}},null,8,lu),[[ef,a.animationDelay]]),K(s,{icon:"fa-solid fa-bolt",style:{margin:"10px"}})])]),B("div",cu,[n.gameIsRunning?(ne(),ie("button",{key:0,onClick:t[1]||(t[1]=(...l)=>i.stopGame&&i.stopGame(...l)),class:"btn btn-sm btn-danger"},[fu,K(s,{icon:"fa-solid fa-stop",style:{margin:"0 10px"}})])):(ne(),ie("button",{key:1,onClick:t[2]||(t[2]=(...l)=>i.startGame&&i.startGame(...l)),class:"btn btn-sm btn-success"},[uu,K(s,{icon:"fa-solid fa-play",style:{margin:"0 10px"}})]))])])])])}const mu=$t(Qf,[["render",du],["__scopeId","data-v-1490567b"]]),pu={name:"App",components:{NavBar:mu,Board:Af,GameOver:zf},data(){return{gameOverResult:void 0,gameIsRunning:!1,internalPockets:6,initialStones:4,animationSpeed:500,topPlayer:void 0,bottomPlayer:void 0}},methods:{gameOver(e){this.gameOverResult=e},gameOverModalIsGone(){this.gameIsRunning=!1},startGame(e){this.gameIsRunning=!0,this.topPlayer=e.topPlayer,this.bottomPlayer=e.bottomPlayer,this.animationSpeed=e.animationSpeed},abortGame(){this.gameIsRunning=!1,this.topPlayer=void 0,this.bottomPlayer=void 0},animationSpeedChanged(e){this.animationSpeed=e}}};function hu(e,t,n,r,a,i){const o=bt("NavBar"),s=bt("Board"),l=bt("GameOver");return ne(),ie("main",null,[K(o,{gameIsRunning:a.gameIsRunning,onStartGame:i.startGame,onAbortGame:i.abortGame,animationSpeed:a.animationSpeed,onAnimationSpeedChanged:i.animationSpeedChanged},null,8,["gameIsRunning","onStartGame","onAbortGame","animationSpeed","onAnimationSpeedChanged"]),K(s,{gameIsRunning:a.gameIsRunning,internalPockets:a.internalPockets,initialStones:a.initialStones,topPlayer:a.topPlayer,bottomPlayer:a.bottomPlayer,animationSpeed:a.animationSpeed,onGameOver:i.gameOver},null,8,["gameIsRunning","internalPockets","initialStones","topPlayer","bottomPlayer","animationSpeed","onGameOver"]),K(l,{result:a.gameOverResult,onModalIsGone:i.gameOverModalIsGone},null,8,["result","onModalIsGone"])])}const gu=$t(pu,[["render",hu]]);function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function vu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ei(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bu(e,t,n){return t&&Ei(e.prototype,t),n&&Ei(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e,t){return xu(e)||wu(e,t)||Zo(e,t)||Su()}function mn(e){return yu(e)||_u(e)||Zo(e)||Pu()}function yu(e){if(Array.isArray(e))return Zr(e)}function xu(e){if(Array.isArray(e))return e}function _u(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Zo(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Su(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ci=function(){},Ea={},Qo={},es=null,ts={mark:Ci,measure:Ci};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Qo=document),typeof MutationObserver<"u"&&(es=MutationObserver),typeof performance<"u"&&(ts=performance)}catch{}var Ou=Ea.navigator||{},Mi=Ou.userAgent,Ni=Mi===void 0?"":Mi,rt=Ea,J=Qo,Ri=es,kn=ts;rt.document;var Xe=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",ns=~Ni.indexOf("MSIE")||~Ni.indexOf("Trident/"),An,In,Tn,En,Cn,Ke="___FONT_AWESOME___",Qr=16,rs="fa",as="svg-inline--fa",wt="data-fa-i2svg",ea="data-fa-pseudo-element",ku="data-fa-pseudo-element-pending",Ca="data-prefix",Ma="data-icon",Li="fontawesome-i2svg",Au="async",Iu=["HTML","HEAD","STYLE","SCRIPT"],is=function(){try{return!0}catch{return!1}}(),X="classic",ee="sharp",Na=[X,ee];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var sn=pn((An={},ae(An,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(An,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),An)),ln=pn((In={},ae(In,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(In,ee,{solid:"fass",regular:"fasr",light:"fasl"}),In)),cn=pn((Tn={},ae(Tn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(Tn,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),Tu=pn((En={},ae(En,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(En,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),En)),Eu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,os="fa-layers-text",Cu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mu=pn((Cn={},ae(Cn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Cn,ee,{900:"fass",400:"fasr",300:"fasl"}),Cn)),ss=[1,2,3,4,5,6,7,8,9,10],Nu=ss.concat([11,12,13,14,15,16,17,18,19,20]),Ru=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fn=new Set;Object.keys(ln[X]).map(fn.add.bind(fn));Object.keys(ln[ee]).map(fn.add.bind(fn));var Lu=[].concat(Na,mn(fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY]).concat(ss.map(function(e){return"".concat(e,"x")})).concat(Nu.map(function(e){return"w-".concat(e)})),Qt=rt.FontAwesomeConfig||{};function Fu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var ju=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ju.forEach(function(e){var t=Ta(e,2),n=t[0],r=t[1],a=Bu(Fu(n));a!=null&&(Qt[r]=a)})}var ls={styleDefault:"solid",familyDefault:"classic",cssPrefix:rs,replacementClass:as,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qt.familyPrefix&&(Qt.cssPrefix=Qt.familyPrefix);var Dt=k(k({},ls),Qt);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var I={};Object.keys(ls).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Dt[e]=n,en.forEach(function(r){return r(I)})},get:function(){return Dt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,en.forEach(function(n){return n(I)})},get:function(){return Dt.cssPrefix}});rt.FontAwesomeConfig=I;var en=[];function Du(e){return en.push(e),function(){en.splice(en.indexOf(e),1)}}var Ze=Qr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zu(e){if(!(!e||!Xe)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Hu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function un(){for(var e=12,t="";e-- >0;)t+=Hu[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function cs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Uu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(cs(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function La(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function $u(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Yu(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ns?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function fs(){var e=rs,t=as,n=I.cssPrefix,r=I.replacementClass,a=Wu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Fi=!1;function Nr(){I.autoAddCss&&!Fi&&(zu(fs()),Fi=!0)}var Ku={mixout:function(){return{dom:{css:fs,insertCss:Nr}}},hooks:function(){return{beforeDOMElementCreation:function(){Nr()},beforeI2svg:function(){Nr()}}}},Ge=rt||{};Ge[Ke]||(Ge[Ke]={});Ge[Ke].styles||(Ge[Ke].styles={});Ge[Ke].hooks||(Ge[Ke].hooks={});Ge[Ke].shims||(Ge[Ke].shims=[]);var Ie=Ge[Ke],us=[],Gu=function e(){J.removeEventListener("DOMContentLoaded",e),Jn=1,us.map(function(t){return t()})},Jn=!1;Xe&&(Jn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Jn||J.addEventListener("DOMContentLoaded",Gu));function Vu(e){Xe&&(Jn?setTimeout(e,0):us.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?cs(e):"<".concat(t," ").concat(Uu(r),">").concat(i.map(hn).join(""),"</").concat(t,">")}function Bi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Rr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?qu(n,a):n,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=s(d,t[f],f,t);return d};function Xu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=Xu(e);return t.length===1?t[0].toString(16):null}function Ju(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ji(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ji(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,ji(t)):Ie.styles[e]=k(k({},Ie.styles[e]||{}),i),e==="fas"&&na("fa",t)}var Mn,Nn,Rn,It=Ie.styles,Zu=Ie.shims,Qu=(Mn={},ae(Mn,X,Object.values(cn[X])),ae(Mn,ee,Object.values(cn[ee])),Mn),Fa=null,ds={},ms={},ps={},hs={},gs={},ed=(Nn={},ae(Nn,X,Object.keys(sn[X])),ae(Nn,ee,Object.keys(sn[ee])),Nn);function td(e){return~Lu.indexOf(e)}function nd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!td(a)?a:null}var vs=function(){var t=function(i){return Rr(It,function(o,s,l){return o[l]=Rr(s,i,{}),o},{})};ds=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ms=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),gs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in It||I.autoFetchSvg,r=Rr(Zu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ps=r.names,hs=r.unicodes,Fa=gr(I.styleDefault,{family:I.familyDefault})};Du(function(e){Fa=gr(e.styleDefault,{family:I.familyDefault})});vs();function Ba(e,t){return(ds[e]||{})[t]}function rd(e,t){return(ms[e]||{})[t]}function ht(e,t){return(gs[e]||{})[t]}function bs(e){return ps[e]||{prefix:null,iconName:null}}function ad(e){var t=hs[e],n=Ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return Fa}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=sn[r][e],i=ln[r][e]||ln[r][a],o=e in Ie.styles?e:null;return i||o||null}var Di=(Rn={},ae(Rn,X,Object.keys(cn[X])),ae(Rn,ee,Object.keys(cn[ee])),Rn);function vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,X,"".concat(I.cssPrefix,"-").concat(X)),ae(t,ee,"".concat(I.cssPrefix,"-").concat(ee)),t),o=null,s=X;(e.includes(i[X])||e.some(function(f){return Di[X].includes(f)}))&&(s=X),(e.includes(i[ee])||e.some(function(f){return Di[ee].includes(f)}))&&(s=ee);var l=e.reduce(function(f,d){var m=nd(I.cssPrefix,d);if(It[d]?(d=Qu[s].includes(d)?Tu[s][d]:d,o=d,f.prefix=d):ed[s].indexOf(d)>-1?(o=d,f.prefix=gr(d,{family:s})):m?f.iconName=m:d!==I.replacementClass&&d!==i[X]&&d!==i[ee]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var h=o==="fa"?bs(f.iconName):{},_=ht(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||_||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!It.far&&It.fas&&!I.autoFetchSvg&&(f.prefix="fas")}return f},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(It.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ht(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=at()||"fas"),l}var id=function(){function e(){vu(this,e),this.definitions={}}return bu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=k(k({},n.definitions[s]||{}),o[s]),na(s,o[s]);var l=cn[X][s];l&&na(l,o[s]),vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),zi=[],Tt={},Lt={},od=Object.keys(Lt);function sd(e,t){var n=t.mixoutsTo;return zi=e,Tt={},Object.keys(Lt).forEach(function(r){od.indexOf(r)===-1&&delete Lt[r]}),zi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(t)return t=ht(n,t)||t,Bi(ys.definitions,n,t)||Bi(Ie.styles,n,t)}var ys=new id,ld=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,Pt("noAuto")},cd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(Pt("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Vu(function(){ud({autoReplaceSvgRoot:n}),Pt("watch",t)})}},fd={icon:function(t){if(t===null)return null;if(Xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:ht(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Eu))){var a=vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||at(),iconName:ht(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=at();return{prefix:i,iconName:ht(i,t)||t}}}},xe={noAuto:ld,config:I,dom:cd,parse:fd,library:ys,findIconDefinition:aa,toHtml:hn},ud=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ie.styles).length>0||I.autoFetchSvg)&&Xe&&I.autoReplaceSvg&&xe.dom.i2svg({node:r})};function br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Xe){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function dd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(La(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=hr(k(k({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function md(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},a),{},{id:o}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,_=h===void 0?!1:h,N=r.found?r:n,E=N.width,z=N.height,P=a==="fak",O=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),L={children:[],attributes:k(k({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(z)})},T=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/z*16*.0625,"em")}:{};_&&(L.attributes[wt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||un())},children:[l]}),delete L.attributes.title);var Y=k(k({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:k(k({},T),m.styles)}),le=r.found&&n.found?Ve("generateAbstractMask",Y)||{children:[],attributes:{}}:Ve("generateAbstractIcon",Y)||{children:[],attributes:{}},ce=le.children,Pe=le.attributes;return Y.children=ce,Y.attributes=Pe,s?md(Y):dd(Y)}function Hi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=k(k(k({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[wt]="");var d=k({},o.styles);La(a)&&(d.transform=Yu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=hr(d);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function pd(e){var t=e.content,n=e.title,r=e.extra,a=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lr=Ie.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Ta(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var hd={found:!1,width:512,height:512};function gd(e,t){!is&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=at()),new Promise(function(r,a){if(Ve("missingIconAbstract"),n==="fa"){var i=bs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lr[t]&&Lr[t][e]){var o=Lr[t][e];return r(ia(o))}gd(e,t),r(k(k({},hd),{},{icon:I.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}var Ui=function(){},sa=I.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Ui,measure:Ui},Xt='FA "6.4.2"',vd=function(t){return sa.mark("".concat(Xt," ").concat(t," begins")),function(){return xs(t)}},xs=function(t){sa.mark("".concat(Xt," ").concat(t," ends")),sa.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},za={begin:vd,end:xs},Hn=function(){};function $i(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function bd(e){var t=e.getAttribute?e.getAttribute(Ca):null,n=e.getAttribute?e.getAttribute(Ma):null;return t&&n}function yd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function xd(){if(I.autoReplaceSvg===!0)return Un.replace;var e=Un[I.autoReplaceSvg];return e||Un.replace}function _d(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function wd(e){return J.createElement(e)}function _s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?_d:wd:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(_s(o,{ceFn:r}))}),a}function Pd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(_s(a),n)}),n.getAttribute(wt)===null&&I.keepOriginalSource){var r=J.createComment(Pd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf(I.replacementClass))return Un.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=o}};function Yi(e){e()}function ws(e,t){var n=typeof t=="function"?t:Hn;if(e.length===0)n();else{var r=Yi;I.mutateApproach===Au&&(r=rt.requestAnimationFrame||Yi),r(function(){var a=xd(),i=za.begin("mutate");e.map(a),i(),n()})}}var Ha=!1;function Ps(){Ha=!0}function la(){Ha=!1}var Zn=null;function Wi(e){if(Ri&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Hn:t,r=e.nodeCallback,a=r===void 0?Hn:r,i=e.pseudoElementsCallback,o=i===void 0?Hn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Zn=new Ri(function(f){if(!Ha){var d=at();Yt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$i(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&$i(m.target)&&~Ru.indexOf(m.attributeName))if(m.attributeName==="class"&&bd(m.target)){var h=vr(Ra(m.target)),_=h.prefix,N=h.iconName;m.target.setAttribute(Ca,_||d),N&&m.target.setAttribute(Ma,N)}else yd(m.target)&&a(m.target)})}}),Xe&&Zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sd(){Zn&&Zn.disconnect()}function Od(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function kd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vr(Ra(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=rd(a.prefix,e.innerText)||Ba(a.prefix,ta(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ad(e){var t=Yt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||un()):(t["aria-hidden"]="true",t.focusable="false")),t}function Id(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=kd(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ad(e),s=ra("parseNodeAttributes",{},e),l=t.styleParser?Od(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Td=Ie.styles;function Ss(e){var t=I.autoReplaceSvg==="nest"?Ki(e,{styleParser:!1}):Ki(e);return~t.extra.classes.indexOf(os)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}var it=new Set;Na.map(function(e){it.add("fa-".concat(e))});Object.keys(sn[X]).map(it.add.bind(it));Object.keys(sn[ee]).map(it.add.bind(it));it=mn(it);function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Li,"-").concat(m))},a=function(m){return n.remove("".concat(Li,"-").concat(m))},i=I.autoFetchSvg?it:Na.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Td));i.includes("fa")||i.push("fa");var o=[".".concat(os,":not([").concat(wt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(wt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Yt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=za.begin("onTree"),f=s.reduce(function(d,m){try{var h=Ss(m);h&&d.push(h)}catch(_){is||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(h){ws(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function Ed(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ss(e).then(function(n){n&&ws([n],t)})}function Cd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,k(k({},n),{},{mask:a}))}}var Md=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,d=f===void 0?null:f,m=n.title,h=m===void 0?null:m,_=n.titleId,N=_===void 0?null:_,E=n.classes,z=E===void 0?[]:E,P=n.attributes,O=P===void 0?{}:P,L=n.styles,T=L===void 0?{}:L;if(t){var Y=t.prefix,le=t.iconName,ce=t.icon;return br(k({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?O["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(N||un()):(O["aria-hidden"]="true",O.focusable="false")),Da({icons:{main:ia(ce),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:k(k({},je),a),symbol:o,title:h,maskId:d,titleId:N,extra:{attributes:O,styles:T,classes:z}})})}},Nd={mixout:function(){return{icon:Cd(Md)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gi,n.nodeCallback=Ed,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Gi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(_,N){Promise.all([oa(a,s),d.iconName?oa(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var z=Ta(E,2),P=z[0],O=z[1];_([n,Da({icons:{main:P,mask:O},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=hr(s);l.length>0&&(a.style=l);var f;return La(o)&&(f=Ve("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Rd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return br({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:o}]})}}}},Ld={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return br({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),pd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},Fd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,_=h===void 0?{}:h;return br({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),Hi({content:n,transform:k(k({},je),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(I.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ns){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/f,l=d.height/f}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Bd=new RegExp('"',"ug"),Vi=[1105920,1112319];function jd(e){var t=e.replace(Bd,""),n=Ju(t,0),r=n>=Vi[0]&&n<=Vi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function qi(e,t){var n="".concat(ku).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Yt(e.children),o=i.filter(function(ce){return ce.getAttribute(ea)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cu),f=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ee:X,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ln[h][l[2].toLowerCase()]:Mu[h][f],N=jd(m),E=N.value,z=N.isSecondary,P=l[0].startsWith("FontAwesome"),O=Ba(_,E),L=O;if(P){var T=ad(E);T.iconName&&T.prefix&&(O=T.iconName,_=T.prefix)}if(O&&!z&&(!o||o.getAttribute(Ca)!==_||o.getAttribute(Ma)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var Y=Id(),le=Y.extra;le.attributes[ea]=t,oa(O,_).then(function(ce){var Pe=Da(k(k({},Y),{},{icons:{main:ce,mask:ja()},prefix:_,iconName:L,extra:le,watchable:!0})),_e=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=Pe.map(function(ze){return hn(ze)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Dd(e){return Promise.all([qi(e,"::before"),qi(e,"::after")])}function zd(e){return e.parentNode!==document.head&&!~Iu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xi(e){if(Xe)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(zd).map(Dd),a=za.begin("searchPseudoElements");Ps(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var Hd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;I.searchPseudoElements&&Xi(a)}}},Ji=!1,Ud={mixout:function(){return{dom:{unwatch:function(){Ps(),Ji=!0}}}},hooks:function(){return{bootstrap:function(){Wi(ra("mutationObserverCallbacks",{}))},noAuto:function(){Sd()},watch:function(n){var r=n.observeMutationsRoot;Ji?la():Wi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Zi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$d={mixout:function(){return{parse:{transform:function(n){return Zi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Zi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:h};return{tag:"g",attributes:k({},_.outer),children:[{tag:"g",attributes:k({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),_.path)}]}]}}}},Fr={x:0,y:0,width:"100%",height:"100%"};function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yd(e){return e.tag==="g"?e.children:[e]}var Wd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(o){return o.trim()})):ja();return i.prefix||(i.prefix=at()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,d=i.icon,m=o.width,h=o.icon,_=$u({transform:l,containerWidth:m,iconWidth:f}),N={tag:"rect",attributes:k(k({},Fr),{},{fill:"white"})},E=d.children?{children:d.children.map(Qi)}:{},z={tag:"g",attributes:k({},_.inner),children:[Qi(k({tag:d.tag,attributes:k(k({},d.attributes),_.path)},E))]},P={tag:"g",attributes:k({},_.outer),children:[z]},O="mask-".concat(s||un()),L="clip-".concat(s||un()),T={tag:"mask",attributes:k(k({},Fr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,P]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Yd(h)},T]};return r.push(Y,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(O,")")},Fr)}),{children:r,attributes:a}}}},Kd={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:k(k({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Vd=[Ku,Nd,Rd,Ld,Fd,Hd,Ud,$d,Wd,Kd,Gd];sd(Vd,{mixoutsTo:xe});xe.noAuto;xe.config;var qd=xe.library;xe.dom;var ca=xe.parse;xe.findIconDefinition;xe.toHtml;var Xd=xe.icon;xe.layer;xe.text;xe.counter;function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qn(e){"@babel/helpers - typeof";return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(e)}function he(e,t,n){return t=em(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Zd(e,t){if(e==null)return{};var n=Jd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function em(e){var t=Qd(e,"string");return typeof t=="symbol"?t:String(t)}var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Os={exports:{}};(function(e){(function(t){var n=function(P,O,L){if(!f(O)||m(O)||h(O)||_(O)||l(O))return O;var T,Y=0,le=0;if(d(O))for(T=[],le=O.length;Y<le;Y++)T.push(n(P,O[Y],L));else{T={};for(var ce in O)Object.prototype.hasOwnProperty.call(O,ce)&&(T[P(ce,L)]=n(P,O[ce],L))}return T},r=function(P,O){O=O||{};var L=O.separator||"_",T=O.split||/(?=[A-Z])/;return P.split(T).join(L)},a=function(P){return N(P)?P:(P=P.replace(/[\-_\s]+(.)?/g,function(O,L){return L?L.toUpperCase():""}),P.substr(0,1).toLowerCase()+P.substr(1))},i=function(P){var O=a(P);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(P,O){return r(P,O).toLowerCase()},s=Object.prototype.toString,l=function(P){return typeof P=="function"},f=function(P){return P===Object(P)},d=function(P){return s.call(P)=="[object Array]"},m=function(P){return s.call(P)=="[object Date]"},h=function(P){return s.call(P)=="[object RegExp]"},_=function(P){return s.call(P)=="[object Boolean]"},N=function(P){return P=P-0,P===P},E=function(P,O){var L=O&&"process"in O?O.process:O;return typeof L!="function"?P:function(T,Y){return L(T,P,Y)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(P,O){return n(E(a,O),P)},decamelizeKeys:function(P,O){return n(E(o,O),P,O)},pascalizeKeys:function(P,O){return n(E(i,O),P)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(tm)})(Os);var nm=Os.exports,rm=["class","style"];function am(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=nm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function im(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ks(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=im(d);break;case"style":l.style=am(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Zd(n,rm);return Cc(e.tag,Ye(Ye(Ye({},t),{},{class:a.class,style:Ye(Ye({},a.style),o)},a.attrs),s),r)}var As=!1;try{As=!0}catch{}function om(){if(!As&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function sm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function to(e){if(e&&Qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(Qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var lm=No({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=$e(function(){return to(t.icon)}),i=$e(function(){return Br("classes",sm(t))}),o=$e(function(){return Br("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),s=$e(function(){return Br("mask",to(t.mask))}),l=$e(function(){return Xd(a.value,Ye(Ye(Ye(Ye({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Rt(l,function(d){if(!d)return om("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=$e(function(){return l.value?ks(l.value.abstract[0],{},r):null});return function(){return f.value}}}),cm={prefix:"fas",iconName:"hourglass",icon:[384,512,[9203,62032,"hourglass-empty"],"f254","M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z"]},fm={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},um={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},dm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},mm={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"]},pm={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]};qd.add(pm,mm,um,dm,fm,cm);const Is=rf(gu);Is.component("font-awesome-icon",lm);Is.mount("#app");
