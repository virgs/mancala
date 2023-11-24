var Ls=Object.defineProperty;var Fs=(e,t,n)=>t in e?Ls(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ie=(e,t,n)=>(Fs(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ca(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const G={},Et=[],Ee=()=>{},Bs=()=>!1,js=/^on[^a-z]/,er=e=>js.test(e),fa=e=>e.startsWith("onUpdate:"),oe=Object.assign,ua=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ds=Object.prototype.hasOwnProperty,z=(e,t)=>Ds.call(e,t),R=Array.isArray,Tt=e=>nr(e)==="[object Map]",to=e=>nr(e)==="[object Set]",B=e=>typeof e=="function",ne=e=>typeof e=="string",tr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",no=e=>(J(e)||B(e))&&B(e.then)&&B(e.catch),ro=Object.prototype.toString,nr=e=>ro.call(e),zs=e=>nr(e).slice(8,-1),ao=e=>nr(e)==="[object Object]",da=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Hs=/-(\w)/g,De=rr(e=>e.replace(Hs,(t,n)=>n?n.toUpperCase():"")),Us=/\B([A-Z])/g,zt=rr(e=>e.replace(Us,"-$1").toLowerCase()),ar=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=rr(e=>e?`on${ar(e)}`:""),yt=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ga;const Br=()=>Ga||(Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function We(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?Ks(r):We(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ne(e)||J(e))return e}const $s=/;(?![^(]*\))/g,Ws=/:([^]+)/,Ys=/\/\*[^]*?\*\//g;function Ks(e){const t={};return e.replace(Ys,"").split($s).forEach(n=>{if(n){const r=n.split(Ws);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ht(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Ht(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gs=ca(Vs);function io(e){return!!e||e===""}const tn=e=>ne(e)?e:e==null?"":R(e)||J(e)&&(e.toString===ro||!B(e.toString))?JSON.stringify(e,oo,2):String(e),oo=(e,t)=>t&&t.__v_isRef?oo(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:to(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!ao(t)?String(t):t;let ye;class qs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Xs(e,t=ye){t&&t.active&&t.effects.push(e)}function so(){return ye}function Js(e){ye&&ye.cleanups.push(e)}const ma=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lo=e=>(e.w&nt)>0,co=e=>(e.n&nt)>0,Zs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Qs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];lo(a)&&!co(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},jr=new WeakMap;let Gt=0,nt=1;const Dr=30;let Oe;const gt=Symbol(""),zr=Symbol("");class pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xs(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,et=!0,nt=1<<++Gt,Gt<=Dr?Zs(this):qa(this),this.fn()}finally{Gt<=Dr&&Qs(this),nt=1<<--Gt,Oe=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(qa(this),this.onStop&&this.onStop(),this.active=!1)}}function qa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const fo=[];function Ut(){fo.push(et),et=!1}function $t(){const e=fo.pop();et=e===void 0?!0:e}function ve(e,t,n){if(et&&Oe){let r=jr.get(e);r||jr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ma()),uo(a)}}function uo(e,t){let n=!1;Gt<=Dr?co(e)||(e.n|=nt,n=!lo(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function Ye(e,t,n,r,a,i){const o=jr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||!tr(u)&&u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?da(n)&&s.push(o.get("length")):(s.push(o.get(gt)),Tt(e)&&s.push(o.get(zr)));break;case"delete":R(e)||(s.push(o.get(gt)),Tt(e)&&s.push(o.get(zr)));break;case"set":Tt(e)&&s.push(o.get(gt));break}if(s.length===1)s[0]&&Hr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Hr(ma(l))}}function Hr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const el=ca("__proto__,__v_isRef,__isVue"),mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tr)),Ja=tl();function tl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=U(this)[t].apply(this,n);return $t(),r}}),e}function nl(e){const t=U(this);return ve(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?hl:bo:i?vo:go).get(t))return t;const o=R(t);if(!a){if(o&&z(Ja,n))return Reflect.get(Ja,n,r);if(n==="hasOwnProperty")return nl}const s=Reflect.get(t,n,r);return(tr(n)?mo.has(n):el(n))||(a||ve(t,"get",n),i)?s:ue(s)?o&&da(n)?s:s.value:J(s)?a?yo(s):va(s):s}}class ho extends po{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Lt(i)&&ue(i)&&!ue(r))return!1;if(!this._shallow&&(!Yn(r)&&!Lt(r)&&(i=U(i),r=U(r)),!R(t)&&ue(i)&&!ue(r)))return i.value=r,!0;const o=R(t)&&da(n)?Number(n)<t.length:z(t,n),s=Reflect.set(t,n,r,a);return t===U(a)&&(o?yt(r,i)&&Ye(t,"set",n,r):Ye(t,"add",n,r)),s}deleteProperty(t,n){const r=z(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ye(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!tr(n)||!mo.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",R(t)?"length":gt),Reflect.ownKeys(t)}}class rl extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const al=new ho,il=new rl,ol=new ho(!0),ha=e=>e,ir=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(yt(t,i)&&ve(a,"get",t),ve(a,"get",i));const{has:o}=ir(a),s=r?ha:n?ya:nn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(yt(e,a)&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&ve(U(e),"iterate",gt),Reflect.get(e,"size",e)}function Za(e){e=U(e);const t=U(this);return ir(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function Qa(e,t){t=U(t);const n=U(this),{has:r,get:a}=ir(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yt(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function ei(e){const t=U(this),{has:n,get:r}=ir(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function ti(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ha:e?ya:nn;return!e&&ve(s,"iterate",gt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function kn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Tt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ha:t?ya:nn;return!t&&ve(i,"iterate",l?zr:gt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return e==="delete"?!1:this}}function sl(){const e={get(i){return wn(this,i)},get size(){return Pn(this)},has:_n,add:Za,set:Qa,delete:ei,clear:ti,forEach:Sn(!1,!1)},t={get(i){return wn(this,i,!1,!0)},get size(){return Pn(this)},has:_n,add:Za,set:Qa,delete:ei,clear:ti,forEach:Sn(!1,!0)},n={get(i){return wn(this,i,!0)},get size(){return Pn(this,!0)},has(i){return _n.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Sn(!0,!1)},r={get(i){return wn(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return _n.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=kn(i,!1,!1),n[i]=kn(i,!0,!1),t[i]=kn(i,!1,!0),r[i]=kn(i,!0,!0)}),[e,n,t,r]}const[ll,cl,fl,ul]=sl();function ga(e,t){const n=t?e?ul:fl:e?cl:ll;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const dl={get:ga(!1,!1)},ml={get:ga(!1,!0)},pl={get:ga(!0,!1)},go=new WeakMap,vo=new WeakMap,bo=new WeakMap,hl=new WeakMap;function gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vl(e){return e.__v_skip||!Object.isExtensible(e)?0:gl(zs(e))}function va(e){return Lt(e)?e:ba(e,!1,al,dl,go)}function bl(e){return ba(e,!1,ol,ml,vo)}function yo(e){return ba(e,!0,il,pl,bo)}function ba(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=vl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ct(e){return Lt(e)?Ct(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function Yn(e){return!!(e&&e.__v_isShallow)}function xo(e){return Ct(e)||Lt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function wo(e){return Wn(e,"__v_skip",!0),e}const nn=e=>J(e)?va(e):e,ya=e=>J(e)?yo(e):e;function _o(e){et&&Oe&&(e=U(e),uo(e.dep||(e.dep=ma())))}function Po(e,t){e=U(e);const n=e.dep;n&&Hr(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function Mt(e){return yl(e,!1)}function yl(e,t){return ue(e)?e:new xl(e,t)}class xl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:nn(t)}get value(){return _o(this),this._value}set value(t){const n=this.__v_isShallow||Yn(t)||Lt(t);t=n?t:U(t),yt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),Po(this))}}function So(e){return ue(e)?e.value:e}const wl={get:(e,t,n)=>So(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ko(e){return Ct(e)?e:new Proxy(e,wl)}class _l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pa(t,()=>{this._dirty||(this._dirty=!0,Po(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return _o(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Pl(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new _l(r,a,i||!a,n)}function tt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){or(i,t,n)}return a}function Te(e,t,n,r){if(B(e)){const i=tt(e,t,n,r);return i&&no(i)&&i.catch(o=>{or(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Te(e[i],t,n,r));return a}function or(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}Sl(e,n,a,r)}function Sl(e,t,n,r=!0){console.error(e)}let rn=!1,Ur=!1;const fe=[];let Be=0;const Nt=[];let Ue=null,ft=0;const Oo=Promise.resolve();let xa=null;function kl(e){const t=xa||Oo;return e?t.then(this?e.bind(this):e):t}function Ol(e){let t=Be+1,n=fe.length;for(;t<n;){const r=t+n>>>1,a=fe[r],i=an(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function wa(e){(!fe.length||!fe.includes(e,rn&&e.allowRecurse?Be+1:Be))&&(e.id==null?fe.push(e):fe.splice(Ol(e.id),0,e),Ao())}function Ao(){!rn&&!Ur&&(Ur=!0,xa=Oo.then(Eo))}function Al(e){const t=fe.indexOf(e);t>Be&&fe.splice(t,1)}function Il(e){R(e)?Nt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ft+1:ft))&&Nt.push(e),Ao()}function ni(e,t=rn?Be+1:0){for(;t<fe.length;t++){const n=fe[t];n&&n.pre&&(fe.splice(t,1),t--,n())}}function Io(e){if(Nt.length){const t=[...new Set(Nt)];if(Nt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>an(n)-an(r)),ft=0;ft<Ue.length;ft++)Ue[ft]();Ue=null,ft=0}}const an=e=>e.id==null?1/0:e.id,El=(e,t)=>{const n=an(e)-an(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Eo(e){Ur=!1,rn=!0,fe.sort(El);const t=Ee;try{for(Be=0;Be<fe.length;Be++){const n=fe[Be];n&&n.active!==!1&&tt(n,null,14)}}finally{Be=0,fe.length=0,Io(),rn=!1,xa=null,(fe.length||Nt.length)&&Eo()}}function Tl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||G;h&&(a=n.map(y=>ne(y)?y.trim():y)),m&&(a=n.map(Fr))}let s,l=r[s=xr(t)]||r[s=xr(De(t))];!l&&i&&(l=r[s=xr(zt(t))]),l&&Te(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Te(f,e,6,a)}}function To(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const u=To(f,t,!0);u&&(s=!0,oe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):oe(o,i),J(e)&&r.set(e,o),o)}function sr(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,zt(t))||z(e,t))}let xe=null,lr=null;function Kn(e){const t=xe;return xe=e,lr=e&&e.type.__scopeId||null,t}function _a(e){lr=e}function Pa(){lr=null}function Cl(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&mi(-1);const i=Kn(t);let o;try{o=e(...a)}finally{Kn(i),r._d&&mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:y,ctx:N,inheritAttrs:T}=e;let D,P;const k=Kn(e);try{if(n.shapeFlag&4){const E=a||r;D=Le(u.call(E,E,m,i,y,h,N)),P=l}else{const E=t;D=Le(E.length>1?E(i,{attrs:l,slots:s,emit:f}):E(i,null)),P=t.props?l:Ml(l)}}catch(E){Zt.length=0,or(E,e,1),D=Y(xt)}let L=D;if(P&&T!==!1){const E=Object.keys(P),{shapeFlag:$}=L;E.length&&$&7&&(o&&E.some(fa)&&(P=Nl(P,o)),L=Bt(L,P))}return n.dirs&&(L=Bt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),D=L,Kn(k),D}const Ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},Nl=(e,t)=>{const n={};for(const r in e)(!fa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ri(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!sr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ri(r,o,f):!0:!!o;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!sr(n,i))return!0}return!1}function Ll({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Co="components";function Ft(e,t){return Bl(Co,e,!0,t)||e}const Fl=Symbol.for("v-ndc");function Bl(e,t,n=!0,r=!1){const a=xe||ae;if(a){const i=a.type;if(e===Co){const s=Mc(i,!1);if(s&&(s===t||s===De(t)||s===ar(De(t))))return i}const o=ai(a[e]||i[e],t)||ai(a.appContext[e],t);return!o&&r?i:o}}function ai(e,t){return e&&(e[t]||e[De(t)]||e[ar(De(t))])}const jl=e=>e.__isSuspense;function Dl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Il(e)}const On={};function vt(e,t,n){return Mo(e,t,n)}function Mo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=G){var s;const l=so()===((s=ae)==null?void 0:s.scope)?ae:null;let f,u=!1,m=!1;if(ue(e)?(f=()=>e.value,u=Yn(e)):Ct(e)?(f=()=>e,r=!0):R(e)?(m=!0,u=e.some(E=>Ct(E)||Yn(E)),f=()=>e.map(E=>{if(ue(E))return E.value;if(Ct(E))return dt(E);if(B(E))return tt(E,l,2)})):B(e)?t?f=()=>tt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),Te(e,l,3,[y])}:f=Ee,t&&r){const E=f;f=()=>dt(E())}let h,y=E=>{h=k.onStop=()=>{tt(E,l,4)}},N;if(sn)if(y=Ee,t?n&&Te(t,l,3,[f(),m?[]:void 0,y]):f(),a==="sync"){const E=Fc();N=E.__watcherHandles||(E.__watcherHandles=[])}else return Ee;let T=m?new Array(e.length).fill(On):On;const D=()=>{if(k.active)if(t){const E=k.run();(r||u||(m?E.some(($,se)=>yt($,T[se])):yt(E,T)))&&(h&&h(),Te(t,l,3,[E,T===On?void 0:m&&T[0]===On?[]:T,y]),T=E)}else k.run()};D.allowRecurse=!!t;let P;a==="sync"?P=D:a==="post"?P=()=>ge(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),P=()=>wa(D));const k=new pa(f,P);t?n?D():T=k.run():a==="post"?ge(k.run.bind(k),l&&l.suspense):k.run();const L=()=>{k.stop(),l&&l.scope&&ua(l.scope.effects,k)};return N&&N.push(L),L}function zl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?No(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=ae;jt(this);const s=Mo(a,i.bind(r),n);return o?jt(o):bt(),s}function No(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function dt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))dt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)dt(e[n],t);else if(to(e)||Tt(e))e.forEach(n=>{dt(n,t)});else if(ao(e))for(const n in e)dt(e[n],t);return e}function Hl(e,t){const n=xe;if(n===null)return e;const r=dr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=G]=t[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&dt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ut(),Te(l,n,8,[e.el,s,e,t]),$t())}}/*! #__NO_SIDE_EFFECTS__ */function Ro(e,t){return B(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const jn=e=>!!e.type.__asyncLoader,Lo=e=>e.type.__isKeepAlive;function Ul(e,t){Fo(e,"a",t)}function $l(e,t){Fo(e,"da",t)}function Fo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(cr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Lo(a.parent.vnode)&&Wl(r,t,n,a),a=a.parent}}function Wl(e,t,n,r){const a=cr(t,e,r,!0);jo(()=>{ua(r[t],a)},n)}function cr(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),jt(n);const s=Te(t,n,e,o);return bt(),$t(),s});return r?a.unshift(i):a.push(i),i}}const qe=e=>(t,n=ae)=>(!sn||e==="sp")&&cr(e,(...r)=>t(...r),n),Yl=qe("bm"),Bo=qe("m"),Kl=qe("bu"),Vl=qe("u"),Gl=qe("bum"),jo=qe("um"),ql=qe("sp"),Xl=qe("rtg"),Jl=qe("rtc");function Zl(e,t=ae){cr("ec",e,t)}function $r(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Wr=e=>e?qo(e)?dr(e)||e.proxy:Wr(e.parent):null,Jt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Sa(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>zl.bind(e)}),_r=(e,t)=>e!==G&&!e.__isScriptSetup&&z(e,t),Ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(_r(r,t))return o[t]=1,r[t];if(a!==G&&z(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&z(f,t))return o[t]=3,i[t];if(n!==G&&z(n,t))return o[t]=4,n[t];Yr&&(o[t]=0)}}const u=Jt[t];let m,h;if(u)return t==="$attrs"&&ve(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&z(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,z(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return _r(a,t)?(a[t]=n,!0):r!==G&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==G&&z(e,o)||_r(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(Jt,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ii(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Yr=!0;function ec(e){const t=Sa(e),n=e.proxy,r=e.ctx;Yr=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:y,updated:N,activated:T,deactivated:D,beforeDestroy:P,beforeUnmount:k,destroyed:L,unmounted:E,render:$,renderTracked:se,renderTriggered:le,errorCaptured:Se,serverPrefetch:_e,expose:ze,inheritAttrs:Yt,components:vn,directives:bn,filters:vr}=t;if(f&&tc(f,r,null),o)for(const Z in o){const K=o[Z];B(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);J(Z)&&(e.data=va(Z))}if(Yr=!0,i)for(const Z in i){const K=i[Z],ot=B(K)?K.bind(n,n):B(K.get)?K.get.bind(n,n):Ee,yn=!B(K)&&B(K.set)?K.set.bind(n):Ee,st=Fe({get:ot,set:yn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>st.value,set:Me=>st.value=Me})}if(s)for(const Z in s)Do(s[Z],r,n,Z);if(l){const Z=B(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{sc(K,Z[K])})}u&&oi(u,e,"c");function de(Z,K){R(K)?K.forEach(ot=>Z(ot.bind(n))):K&&Z(K.bind(n))}if(de(Yl,m),de(Bo,h),de(Kl,y),de(Vl,N),de(Ul,T),de($l,D),de(Zl,Se),de(Jl,se),de(Xl,le),de(Gl,k),de(jo,E),de(ql,_e),R(ze))if(ze.length){const Z=e.exposed||(e.exposed={});ze.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:ot=>n[K]=ot})})}else e.exposed||(e.exposed={});$&&e.render===Ee&&(e.render=$),Yt!=null&&(e.inheritAttrs=Yt),vn&&(e.components=vn),bn&&(e.directives=bn)}function tc(e,t,n=Ee){R(e)&&(e=Kr(e));for(const r in e){const a=e[r];let i;J(a)?"default"in a?i=Dn(a.from||r,a.default,!0):i=Dn(a.from||r):i=Dn(a),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function oi(e,t,n){Te(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Do(e,t,n,r){const a=r.includes(".")?No(n,r):()=>n[r];if(ne(e)){const i=t[e];B(i)&&vt(a,i)}else if(B(e))vt(a,e.bind(n));else if(J(e))if(R(e))e.forEach(i=>Do(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&vt(a,i,e)}}function Sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Vn(l,f,o,!0)),Vn(l,t,o)),J(t)&&i.set(t,l),l}function Vn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Vn(e,i,n,!0),a&&a.forEach(o=>Vn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=nc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const nc={data:si,props:li,emits:li,methods:qt,computed:qt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:qt,directives:qt,watch:ac,provide:si,inject:rc};function si(e,t){return t?e?function(){return oe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function rc(e,t){return qt(Kr(e),Kr(t))}function Kr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?oe(Object.create(null),e,t):t}function li(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:oe(Object.create(null),ii(e),ii(t??{})):t}function ac(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function zo(){return{app:null,config:{isNativeTag:Bs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ic=0;function oc(e,t){return function(r,a=null){B(r)||(r=oe({},r)),a!=null&&!J(a)&&(a=null);const i=zo(),o=new WeakSet;let s=!1;const l=i.app={_uid:ic++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Bc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...u)):B(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const h=Y(r,a);return h.appContext=i,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,dr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){Gn=l;try{return f()}finally{Gn=null}}};return l}}let Gn=null;function sc(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function Dn(e,t,n=!1){const r=ae||xe;if(r||Gn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function lc(e,t,n,r=!1){const a={},i={};Wn(i,ur,1),e.propsDefaults=Object.create(null),Ho(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:bl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function cc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(sr(e.emitsOptions,h))continue;const y=t[h];if(l)if(z(i,h))y!==i[h]&&(i[h]=y,f=!0);else{const N=De(h);a[N]=Vr(l,s,N,y,e,!1)}else y!==i[h]&&(i[h]=y,f=!0)}}}else{Ho(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!z(t,m)&&((u=zt(m))===m||!z(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Vr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],f=!0)}f&&Ye(e,"set","$attrs")}function Ho(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Fn(l))continue;const f=t[l];let u;a&&z(a,u=De(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:sr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=U(n),f=s||G;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Vr(a,l,m,f[m],e,!z(f,m))}}return o}function Vr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(jt(a),r=f[n]=l.call(null,t),bt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function Uo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const u=m=>{l=!0;const[h,y]=Uo(m,t,!0);oe(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return J(e)&&r.set(e,Et),Et;if(R(i))for(let u=0;u<i.length;u++){const m=De(i[u]);ci(m)&&(o[m]=G)}else if(i)for(const u in i){const m=De(u);if(ci(m)){const h=i[u],y=o[m]=R(h)||B(h)?{type:h}:oe({},h);if(y){const N=di(Boolean,y.type),T=di(String,y.type);y[0]=N>-1,y[1]=T<0||N<T,(N>-1||z(y,"default"))&&s.push(m)}}}const f=[o,s];return J(e)&&r.set(e,f),f}function ci(e){return e[0]!=="$"}function fi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ui(e,t){return fi(e)===fi(t)}function di(e,t){return R(t)?t.findIndex(n=>ui(n,e)):B(t)&&ui(t,e)?0:-1}const $o=e=>e[0]==="_"||e==="$stable",ka=e=>R(e)?e.map(Le):[Le(e)],fc=(e,t,n)=>{if(t._n)return t;const r=Cl((...a)=>ka(t(...a)),n);return r._c=!1,r},Wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if($o(a))continue;const i=e[a];if(B(i))t[a]=fc(a,i,r);else if(i!=null){const o=ka(i);t[a]=()=>o}}},Yo=(e,t)=>{const n=ka(t);e.slots.default=()=>n},uc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Wn(t,"_",n)):Wo(t,e.slots={})}else e.slots={},t&&Yo(e,t);Wn(e.slots,ur,1)},dc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Wo(t,a)),o=t}else t&&(Yo(e,t),o={default:1});if(i)for(const s in a)!$o(s)&&o[s]==null&&delete a[s]};function Gr(e,t,n,r,a=!1){if(R(e)){e.forEach((h,y)=>Gr(h,t&&(R(t)?t[y]:t),n,r,a));return}if(jn(r)&&!a)return;const i=r.shapeFlag&4?dr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ne(f)?(u[f]=null,z(m,f)&&(m[f]=null)):ue(f)&&(f.value=null)),B(l))tt(l,s,12,[o,u]);else{const h=ne(l),y=ue(l);if(h||y){const N=()=>{if(e.f){const T=h?z(m,l)?m[l]:u[l]:l.value;a?R(T)&&ua(T,i):R(T)?T.includes(i)||T.push(i):h?(u[l]=[i],z(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,z(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(N.id=-1,ge(N,n)):N()}}}const ge=Dl;function mc(e){return pc(e)}function pc(e,t){const n=Br();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:y=Ee,insertStaticContent:N}=e,T=(c,d,p,g=null,v=null,w=null,S=!1,x=null,_=!!d.dynamicChildren)=>{if(c===d)return;c&&!Vt(c,d)&&(g=xn(c),Me(c,v,w,!0),c=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:b,ref:C,shapeFlag:A}=d;switch(b){case fr:D(c,d,p,g);break;case xt:P(c,d,p,g);break;case Pr:c==null&&k(d,p,g,S);break;case Pe:vn(c,d,p,g,v,w,S,x,_);break;default:A&1?$(c,d,p,g,v,w,S,x,_):A&6?bn(c,d,p,g,v,w,S,x,_):(A&64||A&128)&&b.process(c,d,p,g,v,w,S,x,_,Pt)}C!=null&&v&&Gr(C,c&&c.ref,w,d||c,!d)},D=(c,d,p,g)=>{if(c==null)r(d.el=s(d.children),p,g);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},P=(c,d,p,g)=>{c==null?r(d.el=l(d.children||""),p,g):d.el=c.el},k=(c,d,p,g)=>{[c.el,c.anchor]=N(c.children,d,p,g,c.el,c.anchor)},L=({el:c,anchor:d},p,g)=>{let v;for(;c&&c!==d;)v=h(c),r(c,p,g),c=v;r(d,p,g)},E=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),a(c),c=p;a(d)},$=(c,d,p,g,v,w,S,x,_)=>{S=S||d.type==="svg",c==null?se(d,p,g,v,w,S,x,_):_e(c,d,v,w,S,x,_)},se=(c,d,p,g,v,w,S,x)=>{let _,b;const{type:C,props:A,shapeFlag:M,transition:F,dirs:j}=c;if(_=c.el=o(c.type,w,A&&A.is,A),M&8?u(_,c.children):M&16&&Se(c.children,_,null,g,v,w&&C!=="foreignObject",S,x),j&&lt(c,null,g,"created"),le(_,c,c.scopeId,S,g),A){for(const W in A)W!=="value"&&!Fn(W)&&i(_,W,null,A[W],w,c.children,g,v,He);"value"in A&&i(_,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Re(b,g,c)}j&&lt(c,null,g,"beforeMount");const V=hc(v,F);V&&F.beforeEnter(_),r(_,d,p),((b=A&&A.onVnodeMounted)||V||j)&&ge(()=>{b&&Re(b,g,c),V&&F.enter(_),j&&lt(c,null,g,"mounted")},v)},le=(c,d,p,g,v)=>{if(p&&y(c,p),g)for(let w=0;w<g.length;w++)y(c,g[w]);if(v){let w=v.subTree;if(d===w){const S=v.vnode;le(c,S,S.scopeId,S.slotScopeIds,v.parent)}}},Se=(c,d,p,g,v,w,S,x,_=0)=>{for(let b=_;b<c.length;b++){const C=c[b]=x?Qe(c[b]):Le(c[b]);T(null,C,d,p,g,v,w,S,x)}},_e=(c,d,p,g,v,w,S)=>{const x=d.el=c.el;let{patchFlag:_,dynamicChildren:b,dirs:C}=d;_|=c.patchFlag&16;const A=c.props||G,M=d.props||G;let F;p&&ct(p,!1),(F=M.onVnodeBeforeUpdate)&&Re(F,p,d,c),C&&lt(d,c,p,"beforeUpdate"),p&&ct(p,!0);const j=v&&d.type!=="foreignObject";if(b?ze(c.dynamicChildren,b,x,p,g,j,w):S||K(c,d,x,null,p,g,j,w,!1),_>0){if(_&16)Yt(x,d,A,M,p,g,v);else if(_&2&&A.class!==M.class&&i(x,"class",null,M.class,v),_&4&&i(x,"style",A.style,M.style,v),_&8){const V=d.dynamicProps;for(let W=0;W<V.length;W++){const ee=V[W],ke=A[ee],St=M[ee];(St!==ke||ee==="value")&&i(x,ee,ke,St,v,c.children,p,g,He)}}_&1&&c.children!==d.children&&u(x,d.children)}else!S&&b==null&&Yt(x,d,A,M,p,g,v);((F=M.onVnodeUpdated)||C)&&ge(()=>{F&&Re(F,p,d,c),C&&lt(d,c,p,"updated")},g)},ze=(c,d,p,g,v,w,S)=>{for(let x=0;x<d.length;x++){const _=c[x],b=d[x],C=_.el&&(_.type===Pe||!Vt(_,b)||_.shapeFlag&70)?m(_.el):p;T(_,b,C,null,g,v,w,S,!0)}},Yt=(c,d,p,g,v,w,S)=>{if(p!==g){if(p!==G)for(const x in p)!Fn(x)&&!(x in g)&&i(c,x,p[x],null,S,d.children,v,w,He);for(const x in g){if(Fn(x))continue;const _=g[x],b=p[x];_!==b&&x!=="value"&&i(c,x,b,_,S,d.children,v,w,He)}"value"in g&&i(c,"value",p.value,g.value)}},vn=(c,d,p,g,v,w,S,x,_)=>{const b=d.el=c?c.el:s(""),C=d.anchor=c?c.anchor:s("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:F}=d;F&&(x=x?x.concat(F):F),c==null?(r(b,p,g),r(C,p,g),Se(d.children,p,C,v,w,S,x,_)):A>0&&A&64&&M&&c.dynamicChildren?(ze(c.dynamicChildren,M,p,v,w,S,x),(d.key!=null||v&&d===v.subTree)&&Ko(c,d,!0)):K(c,d,p,C,v,w,S,x,_)},bn=(c,d,p,g,v,w,S,x,_)=>{d.slotScopeIds=x,c==null?d.shapeFlag&512?v.ctx.activate(d,p,g,S,_):vr(d,p,g,v,w,S,_):Ua(c,d,_)},vr=(c,d,p,g,v,w,S)=>{const x=c.component=Oc(c,g,v);if(Lo(c)&&(x.ctx.renderer=Pt),Ic(x),x.asyncDep){if(v&&v.registerDep(x,de),!c.el){const _=x.subTree=Y(xt);P(null,_,d,p)}return}de(x,c,d,p,v,w,S)},Ua=(c,d,p)=>{const g=d.component=c.component;if(Rl(c,d,p))if(g.asyncDep&&!g.asyncResolved){Z(g,d,p);return}else g.next=d,Al(g.update),g.update();else d.el=c.el,g.vnode=d},de=(c,d,p,g,v,w,S)=>{const x=()=>{if(c.isMounted){let{next:C,bu:A,u:M,parent:F,vnode:j}=c,V=C,W;ct(c,!1),C?(C.el=j.el,Z(c,C,S)):C=j,A&&Bn(A),(W=C.props&&C.props.onVnodeBeforeUpdate)&&Re(W,F,C,j),ct(c,!0);const ee=wr(c),ke=c.subTree;c.subTree=ee,T(ke,ee,m(ke.el),xn(ke),c,v,w),C.el=ee.el,V===null&&Ll(c,ee.el),M&&ge(M,v),(W=C.props&&C.props.onVnodeUpdated)&&ge(()=>Re(W,F,C,j),v)}else{let C;const{el:A,props:M}=d,{bm:F,m:j,parent:V}=c,W=jn(d);if(ct(c,!1),F&&Bn(F),!W&&(C=M&&M.onVnodeBeforeMount)&&Re(C,V,d),ct(c,!0),A&&yr){const ee=()=>{c.subTree=wr(c),yr(A,c.subTree,c,v,null)};W?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ee()):ee()}else{const ee=c.subTree=wr(c);T(null,ee,p,g,c,v,w),d.el=ee.el}if(j&&ge(j,v),!W&&(C=M&&M.onVnodeMounted)){const ee=d;ge(()=>Re(C,V,ee),v)}(d.shapeFlag&256||V&&jn(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&ge(c.a,v),c.isMounted=!0,d=p=g=null}},_=c.effect=new pa(x,()=>wa(b),c.scope),b=c.update=()=>_.run();b.id=c.uid,ct(c,!0),b()},Z=(c,d,p)=>{d.component=c;const g=c.vnode.props;c.vnode=d,c.next=null,cc(c,d.props,g,p),dc(c,d.children,p),Ut(),ni(),$t()},K=(c,d,p,g,v,w,S,x,_=!1)=>{const b=c&&c.children,C=c?c.shapeFlag:0,A=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){yn(b,A,p,g,v,w,S,x,_);return}else if(M&256){ot(b,A,p,g,v,w,S,x,_);return}}F&8?(C&16&&He(b,v,w),A!==b&&u(p,A)):C&16?F&16?yn(b,A,p,g,v,w,S,x,_):He(b,v,w,!0):(C&8&&u(p,""),F&16&&Se(A,p,g,v,w,S,x,_))},ot=(c,d,p,g,v,w,S,x,_)=>{c=c||Et,d=d||Et;const b=c.length,C=d.length,A=Math.min(b,C);let M;for(M=0;M<A;M++){const F=d[M]=_?Qe(d[M]):Le(d[M]);T(c[M],F,p,null,v,w,S,x,_)}b>C?He(c,v,w,!0,!1,A):Se(d,p,g,v,w,S,x,_,A)},yn=(c,d,p,g,v,w,S,x,_)=>{let b=0;const C=d.length;let A=c.length-1,M=C-1;for(;b<=A&&b<=M;){const F=c[b],j=d[b]=_?Qe(d[b]):Le(d[b]);if(Vt(F,j))T(F,j,p,null,v,w,S,x,_);else break;b++}for(;b<=A&&b<=M;){const F=c[A],j=d[M]=_?Qe(d[M]):Le(d[M]);if(Vt(F,j))T(F,j,p,null,v,w,S,x,_);else break;A--,M--}if(b>A){if(b<=M){const F=M+1,j=F<C?d[F].el:g;for(;b<=M;)T(null,d[b]=_?Qe(d[b]):Le(d[b]),p,j,v,w,S,x,_),b++}}else if(b>M)for(;b<=A;)Me(c[b],v,w,!0),b++;else{const F=b,j=b,V=new Map;for(b=j;b<=M;b++){const be=d[b]=_?Qe(d[b]):Le(d[b]);be.key!=null&&V.set(be.key,b)}let W,ee=0;const ke=M-j+1;let St=!1,Ya=0;const Kt=new Array(ke);for(b=0;b<ke;b++)Kt[b]=0;for(b=F;b<=A;b++){const be=c[b];if(ee>=ke){Me(be,v,w,!0);continue}let Ne;if(be.key!=null)Ne=V.get(be.key);else for(W=j;W<=M;W++)if(Kt[W-j]===0&&Vt(be,d[W])){Ne=W;break}Ne===void 0?Me(be,v,w,!0):(Kt[Ne-j]=b+1,Ne>=Ya?Ya=Ne:St=!0,T(be,d[Ne],p,null,v,w,S,x,_),ee++)}const Ka=St?gc(Kt):Et;for(W=Ka.length-1,b=ke-1;b>=0;b--){const be=j+b,Ne=d[be],Va=be+1<C?d[be+1].el:g;Kt[b]===0?T(null,Ne,p,Va,v,w,S,x,_):St&&(W<0||b!==Ka[W]?st(Ne,p,Va,2):W--)}}},st=(c,d,p,g,v=null)=>{const{el:w,type:S,transition:x,children:_,shapeFlag:b}=c;if(b&6){st(c.component.subTree,d,p,g);return}if(b&128){c.suspense.move(d,p,g);return}if(b&64){S.move(c,d,p,Pt);return}if(S===Pe){r(w,d,p);for(let A=0;A<_.length;A++)st(_[A],d,p,g);r(c.anchor,d,p);return}if(S===Pr){L(c,d,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,d,p),ge(()=>x.enter(w),v);else{const{leave:A,delayLeave:M,afterLeave:F}=x,j=()=>r(w,d,p),V=()=>{A(w,()=>{j(),F&&F()})};M?M(w,j,V):V()}else r(w,d,p)},Me=(c,d,p,g=!1,v=!1)=>{const{type:w,props:S,ref:x,children:_,dynamicChildren:b,shapeFlag:C,patchFlag:A,dirs:M}=c;if(x!=null&&Gr(x,null,p,c,!0),C&256){d.ctx.deactivate(c);return}const F=C&1&&M,j=!jn(c);let V;if(j&&(V=S&&S.onVnodeBeforeUnmount)&&Re(V,d,c),C&6)Rs(c.component,p,g);else{if(C&128){c.suspense.unmount(p,g);return}F&&lt(c,null,d,"beforeUnmount"),C&64?c.type.remove(c,d,p,v,Pt,g):b&&(w!==Pe||A>0&&A&64)?He(b,d,p,!1,!0):(w===Pe&&A&384||!v&&C&16)&&He(_,d,p),g&&$a(c)}(j&&(V=S&&S.onVnodeUnmounted)||F)&&ge(()=>{V&&Re(V,d,c),F&&lt(c,null,d,"unmounted")},p)},$a=c=>{const{type:d,el:p,anchor:g,transition:v}=c;if(d===Pe){Ns(p,g);return}if(d===Pr){E(c);return}const w=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:x}=v,_=()=>S(p,w);x?x(c.el,w,_):_()}else w()},Ns=(c,d)=>{let p;for(;c!==d;)p=h(c),a(c),c=p;a(d)},Rs=(c,d,p)=>{const{bum:g,scope:v,update:w,subTree:S,um:x}=c;g&&Bn(g),v.stop(),w&&(w.active=!1,Me(S,c,d,p)),x&&ge(x,d),ge(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},He=(c,d,p,g=!1,v=!1,w=0)=>{for(let S=w;S<c.length;S++)Me(c[S],d,p,g,v)},xn=c=>c.shapeFlag&6?xn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Wa=(c,d,p)=>{c==null?d._vnode&&Me(d._vnode,null,null,!0):T(d._vnode||null,c,d,null,null,null,p),ni(),Io(),d._vnode=c},Pt={p:T,um:Me,m:st,r:$a,mt:vr,mc:Se,pc:K,pbc:ze,n:xn,o:e};let br,yr;return t&&([br,yr]=t(Pt)),{render:Wa,hydrate:br,createApp:oc(Wa,br)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ko(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Ko(o,s)),s.type===fr&&(s.el=o.el)}}function gc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const vc=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),fr=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),Zt=[];let Ae=null;function ce(e=!1){Zt.push(Ae=e?null:[])}function bc(){Zt.pop(),Ae=Zt[Zt.length-1]||null}let on=1;function mi(e){on+=e}function Vo(e){return e.dynamicChildren=on>0?Ae||Et:null,bc(),on>0&&Ae&&Ae.push(e),e}function pe(e,t,n,r,a,i){return Vo(H(e,t,n,r,a,i,!0))}function yc(e,t,n,r,a){return Vo(Y(e,t,n,r,a,!0))}function qr(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",Go=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||ue(e)||B(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function H(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Go(t),ref:t&&zn(t),scopeId:lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),on>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const Y=xc;function xc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Fl)&&(e=xt),qr(e)){const s=Bt(e,t,!0);return n&&Oa(s,n),on>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(Nc(e)&&(e=e.__vccOpts),t){t=wc(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Ht(s)),J(l)&&(xo(l)&&!R(l)&&(l=oe({},l)),t.style=We(l))}const o=ne(e)?1:jl(e)?128:vc(e)?64:J(e)?4:B(e)?2:0;return H(e,t,n,r,a,o,i,!0)}function wc(e){return e?xo(e)||ur in e?oe({},e):e:null}function Bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Pc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Go(s),ref:t&&t.ref?n&&a?R(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function _c(e=" ",t=0){return Y(fr,null,e,t)}function pi(e="",t=!1){return t?(ce(),yc(xt,null,e)):Y(xt,null,e)}function Le(e){return e==null||typeof e=="boolean"?Y(xt):R(e)?Y(Pe,null,e.slice()):typeof e=="object"?Qe(e):Y(fr,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ur in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[_c(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ht([t.class,r.class]));else if(a==="style")t.style=We([t.style,r.style]);else if(er(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Re(e,t,n,r=null){Te(e,t,7,[n,r])}const Sc=zo();let kc=0;function Oc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Sc,i={uid:kc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new qs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(r,a),emitsOptions:To(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Tl.bind(null,i),e.ce&&e.ce(i),i}let ae=null;const Ac=()=>ae||xe;let Aa,kt,hi="__VUE_INSTANCE_SETTERS__";(kt=Br()[hi])||(kt=Br()[hi]=[]),kt.push(e=>ae=e),Aa=e=>{kt.length>1?kt.forEach(t=>t(e)):kt[0](e)};const jt=e=>{Aa(e),e.scope.on()},bt=()=>{ae&&ae.scope.off(),Aa(null)};function qo(e){return e.vnode.shapeFlag&4}let sn=!1;function Ic(e,t=!1){sn=t;const{props:n,children:r}=e.vnode,a=qo(e);lc(e,n,a,t),uc(e,r);const i=a?Ec(e,t):void 0;return sn=!1,i}function Ec(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=wo(new Proxy(e.ctx,Ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Cc(e):null;jt(e),Ut();const i=tt(r,e,0,[e.props,a]);if($t(),bt(),no(i)){if(i.then(bt,bt),t)return i.then(o=>{gi(e,o,t)}).catch(o=>{or(o,e,0)});e.asyncDep=i}else gi(e,i,t)}else Xo(e,t)}function gi(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=ko(t)),Xo(e,n)}let vi;function Xo(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=vi(a,f)}}e.render=r.render||Ee}{jt(e),Ut();try{ec(e)}finally{$t(),bt()}}}function Tc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function Cc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Tc(e)},slots:e.slots,emit:e.emit,expose:t}}function dr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ko(wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Mc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function Nc(e){return B(e)&&"__vccOpts"in e}const Fe=(e,t)=>Pl(e,t,sn);function Rc(e,t,n){const r=arguments.length;return r===2?J(t)&&!R(t)?qr(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),Y(e,t,n))}const Lc=Symbol.for("v-scx"),Fc=()=>Dn(Lc),Bc="3.3.8",jc="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,bi=ut&&ut.createElement("template"),Dc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ut.createElementNS(jc,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const s=bi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},zc=Symbol("_vtc");function Hc(e,t,n){const r=e[zc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Uc=Symbol("_vod");function $c(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&Xr(r,i,"");for(const i in n)Xr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Uc in e&&(r.display=i)}}const yi=/\s*!important$/;function Xr(e,t,n){if(R(n))n.forEach(r=>Xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Wc(e,t);yi.test(n)?e.setProperty(zt(r),n.replace(yi,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],Sr={};function Wc(e,t){const n=Sr[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return Sr[t]=r;r=ar(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return Sr[t]=i}return t}const wi="http://www.w3.org/1999/xlink";function Yc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,n);else{const i=Gs(t);n==null||i&&!io(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Kc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=io(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ot(e,t,n,r){e.addEventListener(t,n,r)}function Vc(e,t,n,r){e.removeEventListener(t,n,r)}const _i=Symbol("_vei");function Gc(e,t,n,r,a=null){const i=e[_i]||(e[_i]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=qc(t);if(r){const f=i[t]=Zc(r,a);Ot(e,s,f,l)}else o&&(Vc(e,s,o,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function qc(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let kr=0;const Xc=Promise.resolve(),Jc=()=>kr||(Xc.then(()=>kr=0),kr=Date.now());function Zc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Te(Qc(r,n.value),t,5,[r])};return n.value=e,n.attached=Jc(),n}function Qc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Si=/^on[a-z]/,ef=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Hc(e,r,a):t==="style"?$c(e,n,r):er(t)?fa(t)||Gc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tf(e,t,r,a))?Kc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Yc(e,t,r,a))};function tf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&ne(n)?!1:t in e}const ki=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Bn(t,n):t};function nf(e){e.target.composing=!0}function Oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Or=Symbol("_assign"),rf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Or]=ki(a);const i=r||a.props&&a.props.type==="number";Ot(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Fr(s)),e[Or](s)}),n&&Ot(e,"change",()=>{e.value=e.value.trim()}),t||(Ot(e,"compositionstart",nf),Ot(e,"compositionend",Oi),Ot(e,"change",Oi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Or]=ki(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Fr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},af=oe({patchProp:ef},Dc);let Ai;function of(){return Ai||(Ai=mc(af))}const sf=(...e)=>{const t=of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=lf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function lf(e){return ne(e)?document.querySelector(e):e}function cf(e){return so()?(Js(e),!0):!1}function Jo(e){return typeof e=="function"?e():So(e)}const ff=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const uf=Object.prototype.toString,df=e=>uf.call(e)==="[object Object]",mf=()=>{};function pf(e){var t;const n=Jo(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Zo=ff?window:void 0;function hf(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=Zo):[t,n,r,a]=e,!t)return mf;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},s=(u,m,h,y)=>(u.addEventListener(m,h,y),()=>u.removeEventListener(m,h,y)),l=vt(()=>[pf(t),Jo(a)],([u,m])=>{if(o(),!u)return;const h=df(m)?{...m}:m;i.push(...n.flatMap(y=>r.map(N=>s(u,y,N,h))))},{immediate:!0,flush:"post"}),f=()=>{l(),o()};return cf(f),f}function gf(){const e=Mt(!1);return Ac()&&Bo(()=>{e.value=!0}),e}function vf(e){const t=gf();return Fe(()=>(t.value,!!e()))}function bf(e={}){const{window:t=Zo}=e,n=vf(()=>t&&"screen"in t&&"orientation"in t.screen),r=n.value?t.screen.orientation:{},a=Mt(r.type),i=Mt(r.angle||0);return n.value&&hf(t,"orientationchange",()=>{a.value=r.type,i.value=r.angle}),{isSupported:n,orientation:a,angle:i,lockOrientation:l=>n.value?r.lock(l):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{n.value&&r.unlock()}}}const Ar=(e,t)=>{const n=[];return Array.from(Array(2).keys()).forEach(()=>{Array.from(Array(e)).forEach(()=>{n.push(t)}),n.push(0)}),n};class Ir{constructor(t){ie(this,"board");ie(this,"movesRecord");this.board=[...t],this.movesRecord=[]}getLastIncrementedPitId(){return this.movesRecord[this.movesRecord.length-1].pitId}getPitSeeds(t){return this.board[t]}setPitSeeds(t,n){const r=this.board[t];return this.board[t]=n,this.movesRecord.push({pitId:t,seeds:this.board[t]}),r}getBoard(){return this.board}transferSeeds(t,n){const r=this.board[t];this.setPitSeeds(t,0),this.incrementPitSeeds(n,r)}incrementPitSeeds(t,n=1){return this.setPitSeeds(t,n+this.board[t])}getMovesRecord(){return this.movesRecord}}var te=(e=>(e.TOP="TOP",e.BOTTOM="BOTTOM",e))(te||{});const Hn=e=>e==="TOP"?"BOTTOM":"TOP";class mt{constructor(t){ie(this,"boardLength");ie(this,"totalStones");this.boardLength=t.length,this.totalStones=t.reduce((n,r)=>n+r,0)}getSideStorePitId(t){return t===te.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSideStorePitId(t){return t!==te.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSidePitId(t){return this.boardLength-2-t}isPitStore(t){return t===this.boardLength/2-1||t===this.boardLength-1}checkPitOwnership(t,n){return t===te.TOP&&n<this.boardLength/2||t===te.BOTTOM&&n>=this.boardLength/2}getNextPitId(t){return(t+1)%this.boardLength}}class yf{constructor(t){ie(this,"playerSide");this.playerSide=t}checkPlayerScore(t){return t[new mt(t).getSideStorePitId(this.playerSide)]}checkOppositePlayerScore(t){return t[new mt(t).getOppositeSideStorePitId(this.playerSide)]}getAvailableMovesForPlayer(t){const n=new mt(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(this.playerSide,i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}getAvailableMovesForOpponentPlayer(t){const n=new mt(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(Hn(this.playerSide),i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}}class xf{constructor(t,n){ie(this,"staticBoardAnalyser");ie(this,"engineSettings");ie(this,"movesHistory");this.staticBoardAnalyser=new mt(t),this.movesHistory=[],this.engineSettings=n||{}}makeMove(t,n){this.validateMove(t,n);const r=t.playerSide;this.movesHistory.push(t);const a=this.redistributeSeeds(t,n),i=a.getLastIncrementedPitId(),o=this.checkCapture(r,i,a.getBoard()),s=this.checkGameOver(r,o.getBoard());return s?{winningPlayer:s.winningPlayer,nextTurnPlayer:r,boardConfig:s.boardConfig,gameOver:!0,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(o.getMovesRecord()).concat(s.gameOverMovesRecord):void 0}:{nextTurnPlayer:this.checkNextPlayerTurn(r,i),boardConfig:o.getBoard(),gameOver:!1,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(o.getMovesRecord()):void 0}}redistributeSeeds(t,n){const r=new Ir(n);let a=t.pitId,i=r.setPitSeeds(a,0);for(;i>0;)a=this.staticBoardAnalyser.getNextPitId(a),!(this.staticBoardAnalyser.isPitStore(a)&&!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,a))&&(r.incrementPitSeeds(a),--i);return r}getMovesHistory(){return this.movesHistory}checkNextPlayerTurn(t,n){return this.staticBoardAnalyser.checkPitOwnership(t,n)&&this.staticBoardAnalyser.isPitStore(n)?t:Hn(t)}checkCapture(t,n,r){const a=new Ir(r);if(this.staticBoardAnalyser.checkPitOwnership(t,n)&&a.getPitSeeds(n)===1&&!this.staticBoardAnalyser.isPitStore(n)){const i=this.staticBoardAnalyser.getOppositeSidePitId(n),o=a.getPitSeeds(i);if(o>0){this.movesHistory.push({playerSide:t,capturedSeeds:o,pitId:i});const s=this.staticBoardAnalyser.getSideStorePitId(t);a.transferSeeds(i,s),a.transferSeeds(n,s)}}return a}validateMove(t,n){if(!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,t.pitId))throw new Error(`Player '${t.playerSide}' cannot select an opponent's pit (${t.pitId})`);if(this.staticBoardAnalyser.isPitStore(t.pitId))throw new Error(`Player '${t.playerSide}' cannot select a store (${t.pitId})`);if(n[t.pitId]===0)throw new Error(`Player '${t.playerSide}' cannot select an empty pit (${t.pitId})`)}checkGameOver(t,n){const r=new yf(t);if(r.getAvailableMovesForPlayer(n).length!==0&&r.getAvailableMovesForOpponentPlayer(n).length!==0)return;const a=r.checkPlayerScore(n),i=r.checkOppositePlayerScore(n),o=this.getGameOverMovesRecord(n,t);let s;return a>i?s=t:a<i&&(s=Hn(t)),{gameOver:!0,boardConfig:o.getBoard(),gameOverMovesRecord:o.getMovesRecord(),winningPlayer:s}}getGameOverMovesRecord(t,n){const r=new Ir(t);if(this.engineSettings.gameOverCaptureVariation){const a=this.staticBoardAnalyser.getSideStorePitId(n);t.forEach(s=>{this.staticBoardAnalyser.checkPitOwnership(n,s)&&s!==a&&r.transferSeeds(s,a)});const i=Hn(n),o=this.staticBoardAnalyser.getSideStorePitId(i);t.forEach(s=>{this.staticBoardAnalyser.checkPitOwnership(i,s)&&s!==o&&r.transferSeeds(s,o)})}return r}}class Er{constructor(t,n){ie(this,"side");ie(this,"brain");this.side=t,this.brain=n}async selectNextMove(t){return this.brain.selectNextMove(this.side,t)}}var Ce=(e=>(e[e.HUMAN=0]="HUMAN",e[e.AI=1]="AI",e))(Ce||{});Object.keys(Ce).filter(e=>isNaN(Number(e)));const wf={style:{width:"100%",height:"100%",position:"relative"}},_f=Ro({__name:"Pit",props:{index:{},store:{type:Boolean},side:{},seeds:{},ownerPlayerType:{},lastSelectedPitId:{},playingPlayerSide:{}},emits:["nextActionSelected"],setup(e,{emit:t}){const n=t,r=e,a=()=>Math.random()*25+25+"%",i={"border-bottom-left-radius":a(),"border-top-left-radius":a(),"border-bottom-right-radius":a(),"border-top-right-radius":a()},o=Mt(!1),s=Mt(!1),l=Mt(u());function f(){r.store||r.ownerPlayerType===Ce.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&n("nextActionSelected",r.side,r.index)}vt(()=>r.playingPlayerSide,()=>{l.value=u()}),vt(()=>r.seeds,()=>{s.value=!0,setTimeout(()=>s.value=!1,200),l.value=u()});function u(){return r.ownerPlayerType===Ce.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&!r.store}function m(){o.value=!0,l.value=u()}function h(){o.value=!1,l.value=u()}const y=Fe(()=>({"d-block":!0,hole:!0,number:!0,stonesNumberChangedAnimation:s.value,availableOption:l.value,lastSelectedPit:r.lastSelectedPitId===r.index,hovered:o.value&&l.value})),N=Fe(()=>{const T=r.side===te.BOTTOM?"var(--bottom-player-color)":"var(--top-player-color)";return{...i,"border-color":T,"box-shadow":"inset 7px 7px 0px var(--wooden-half-shade), 1px 1px 10px "+T,"padding-top":r.store?"20%":"5%"}});return(T,D)=>(ce(),pe("div",wf,[H("span",{class:Ht(y.value),style:We(N.value),onMouseenter:m,onMouseleave:h,onClick:f},tn(T.seeds),39)]))}});const mn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Pf=mn(_f,[["__scopeId","data-v-919f0070"]]);class Sf{constructor(t){ie(this,"emptySpaceGap");ie(this,"showId");this.emptySpaceGap=(t==null?void 0:t.emptySpaceGap)||"  ",this.showId=(t==null?void 0:t.showId)||!1}print(t){const n=t.filter((o,s)=>s<t.length/2),r=n.filter((o,s)=>s<n.length-1),a=t.filter((o,s)=>s>=t.length/2),i=a.filter((o,s)=>s<a.length-1);console.log(this.emptySpaceGap+r.reverse().map((o,s)=>this.printPit(o,t.length-s-2)).join(this.emptySpaceGap)),console.log([n[n.length-1],a[a.length-1]].map((o,s)=>this.printPit(o,t.length-s*t.length/2-1)).join(Array.from(Array(r.length)).map(()=>this.emptySpaceGap).join(this.emptySpaceGap))),console.log(this.emptySpaceGap+i.map((o,s)=>this.printPit(o,s)).join(this.emptySpaceGap))}printPit(t,n){let r=t.toString().padStart(2);return this.showId&&(r+=`(${n})`.padStart(4)),r}}let Tr;const kf={name:"Mancala",props:["internalPockets","initialStones","topPlayer","bottomPlayer","animationSpeed","gameIsRunning"],components:{Pit:Pf},emits:["animationIsRunning","gameOver","playingPlayerChanged"],setup(){return{PlayerSide:te}},data(){return{aiIsThinking:!1,accumulator:0,accumulatorColor:"",lastSelectedPitId:void 0,animationRunning:!1,board:Ar(6,4),playingPlayer:void 0}},watch:{gameIsRunning(){var e;this.gameIsRunning?(this.playingPlayer=this.topPlayer,this.board=Ar(this.internalPockets,this.initialStones),Tr=new xf(this.board,{recordMoves:!0}),((e=this.playingPlayer)==null?void 0:e.brain.type)!==Ce.HUMAN&&this.aiThinkAboutNextMove()):(this.board=Ar(6,4),this.lastSelectedPitId=void 0,this.animationRunning=!1,this.accumulator=0,this.playingPlayer=void 0)}},computed:{bottomSideStorePit(){return new mt(this.board).getSideStorePitId(te.BOTTOM)},topSideStorePit(){return new mt(this.board).getSideStorePitId(te.TOP)},spinningStyle(){var e;return{color:((e=this.playingPlayer)==null?void 0:e.side)===te.TOP?"var(--top-player-color)":"var(--bottom-player-color)"}},accumulatorClass(){return{"d-block":!0,number:!0,accumulator:!0,hole:!0,"accumulator-hole-showing":this.accumulator>=0}},accumulatorStyle(){return{color:this.accumulatorColor,"border-color":this.accumulatorColor}},topInternalPockets(){return this.board.filter((e,t)=>t<this.board.length/2-1).reverse()},bottomInternalPockets(){return this.board.filter((e,t)=>t>=this.board.length/2&&t<this.board.length-1)}},methods:{async aiThinkAboutNextMove(){this.aiIsThinking=!0;const e=await this.playingPlayer.selectNextMove(this.board);this.aiIsThinking=!1,this.updateBoard({playerSide:this.playingPlayer.side,pitId:e})},sleep(e){return new Promise(t=>setTimeout(()=>t(),e))},nextActionSelected(e,t){this.animationRunning||this.updateBoard({playerSide:e,pitId:t})},updateAnimationColor(e){switch(e){case te.TOP:this.accumulatorColor="var(--top-player-color)";break;case te.BOTTOM:this.accumulatorColor="var(--bottom-player-color)";break}},async updateBoard(e){this.$emit("animationIsRunning",!0),this.lastSelectedPitId=e.pitId,this.updateAnimationColor(e.playerSide),this.animationRunning=!0,this.playingPlayer=void 0,this.accumulator=this.board[e.pitId];const t=Tr.makeMove(e,this.board),n=[...t.movesRecord];for(let r of n){if(!this.gameIsRunning)return;this.board[r.pitId]=r.seeds,await this.sleep(this.animationSpeed),--this.accumulator}this.finishUpdatingBoard(t)},finishUpdatingBoard(e){this.animationRunning=!1,this.$emit("animationIsRunning",!1),e.gameOver?(new Sf().print(this.board),this.$emit("gameOver",{winningPlayer:e.winningPlayer,movesHistory:Tr.getMovesHistory()})):(this.playingPlayer=this.getBrainFromSide(e.nextTurnPlayer),this.$emit("playingPlayerChanged",this.playingPlayer),this.playingPlayer.brain.type!==Ce.HUMAN&&this.aiThinkAboutNextMove())},getBrainFromSide(e){return this.topPlayer.side===e?this.topPlayer:this.bottomPlayer}}},Of="/mancala/wooden-square-plank-bc8f16d6.png";const Qo=e=>(_a("data-v-81de29ba"),e=e(),Pa(),e),Af={class:"container-lg text-center",id:"boardContainer"},If=Qo(()=>H("img",{src:Of,class:"img-fluid w-100",alt:"wooden-square-plank"},null,-1)),Ef={class:"accumulatorNumber number"},Tf=Qo(()=>H("span",{class:"visually-hidden"},"Loading...",-1)),Cf=[Tf],Mf={class:"container-fluid px-5 plank-board"},Nf={class:"row g-2 h-100"},Rf={class:"col"},Lf={class:"col-8"},Ff={class:"row g-0 justify-content-center",style:{height:"50%"}},Bf={class:"col mx-auto"},jf={class:"row g-0 justify-content-center",style:{height:"50%"}},Df={class:"col mx-auto"},zf={class:"col"};function Hf(e,t,n,r,a,i){var s,l,f,u;const o=Ft("Pit");return ce(),pe("div",Af,[If,a.animationRunning&&a.accumulator>=0?(ce(),pe("span",{key:0,class:Ht(i.accumulatorClass),style:We(i.accumulatorStyle)},[H("span",Ef,tn(a.accumulator),1)],6)):pi("",!0),a.aiIsThinking?(ce(),pe("div",{key:1,class:"spinner-border",style:We(i.spinningStyle),role:"status"},Cf,4)):pi("",!0),H("div",Mf,[H("div",Nf,[H("div",Rf,[Y(o,{seeds:a.board[i.topSideStorePit],index:i.topSideStorePit,playingPlayerSide:(s=a.playingPlayer)==null?void 0:s.side,store:!0,ownerPlayerType:(l=n.topPlayer)==null?void 0:l.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.TOP},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])]),H("div",Lf,[H("div",Ff,[(ce(!0),pe(Pe,null,$r(i.topInternalPockets,(m,h)=>{var y,N;return ce(),pe("div",Bf,[Y(o,{seeds:m,index:i.topInternalPockets.length-1-h,store:!1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(y=n.topPlayer)==null?void 0:y.brain.type,onNextActionSelected:i.nextActionSelected,playingPlayerSide:(N=a.playingPlayer)==null?void 0:N.side,side:r.PlayerSide.TOP},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","onNextActionSelected","playingPlayerSide","side"])])}),256))]),H("div",jf,[(ce(!0),pe(Pe,null,$r(i.bottomInternalPockets,(m,h)=>{var y,N;return ce(),pe("div",Df,[Y(o,{seeds:m,index:h+i.bottomInternalPockets.length+1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(y=n.bottomPlayer)==null?void 0:y.brain.type,playingPlayerSide:(N=a.playingPlayer)==null?void 0:N.side,store:!1,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","playingPlayerSide","onNextActionSelected","side"])])}),256))])]),H("div",zf,[Y(o,{seeds:a.board[i.bottomSideStorePit],index:i.bottomSideStorePit,playingPlayerSide:(f=a.playingPlayer)==null?void 0:f.side,store:!0,ownerPlayerType:(u=n.bottomPlayer)==null?void 0:u.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])])])])])}const Uf=mn(kf,[["render",Hf],["__scopeId","data-v-81de29ba"]]);class qn{constructor(){ie(this,"type",Ce.HUMAN)}selectNextMove(t,n){throw new Error("Human brain should read next move from input")}getLabel(){return"Human"}}function $f(){return new Worker("/mancala/AiWorker-4b716541.js")}var Ia=(e=>(e[e.BEGINNER=0]="BEGINNER",e[e.MEDIUM=1]="MEDIUM",e[e.HARD=2]="HARD",e[e.HARDCORE=3]="HARDCORE",e))(Ia||{});const Wf=Object.keys(Ia).filter(e=>isNaN(Number(e)));class Yf{constructor(t){ie(this,"brainLevel");ie(this,"aiWorker",new $f);ie(this,"type",Ce.AI);this.brainLevel=t}async selectNextMove(t,n){return new Promise(r=>{this.aiWorker.onmessage=async a=>r(a.data.bestPocketIdToPlay),this.aiWorker.postMessage({playingPlayer:t,brainLevel:this.brainLevel,boardConfig:JSON.stringify(n)})})}getLabel(){return Ia[this.brainLevel]}}const Kf={name:"BrainSelector",props:["gameIsRunning","side"],emits:["brainSelected"],setup(){return{PlayerType:Ce}},data(){return{selectedBrain:new qn}},mounted(){this.brainSelected()},computed:{currentBrainIcon(){return this.selectedBrain.type===Ce.HUMAN?"fa-brain":"fa-robot"},currentBrainLabel(){return this.selectedBrain.type===Ce.HUMAN?this.selectedBrain.getLabel():this.aiBrainLabel(this.selectedBrain.getLabel())},availableAiBrainsLabel(){return Wf.map(e=>this.aiBrainLabel(e))},labelText(){const e={color:"var(--top-player-color)",direction:"ltr",textAlign:"left",border:"none"};return this.side===te.TOP&&(e.color="var(--bottom-player-color)",e.direction="rtl",e.textAlign="right"),e}},methods:{aiBrainLabel(e){return"AI - "+e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},brainSelected(e){e!==void 0?this.selectedBrain=new Yf(e):this.selectedBrain=new qn,this.$emit("brainSelected",{brain:this.selectedBrain,side:this.side})}}};const es=e=>(_a("data-v-aebce814"),e=e(),Pa(),e),Vf={class:"dropdown"},Gf=["disabled"],qf={class:"dropdown-menu"},Xf=es(()=>H("span",null,"Human",-1)),Jf=es(()=>H("li",null,[H("hr",{class:"dropdown-divider"})],-1)),Zf=["onClick"];function Qf(e,t,n,r,a,i){const o=Ft("font-awesome-icon");return ce(),pe("span",Vf,[H("button",{disabled:n.gameIsRunning,class:"btn dropdown-toggle text",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:We(i.labelText)},[Y(o,{icon:"fa-solid "+i.currentBrainIcon,style:{margin:"0 10px",border:"none"}},null,8,["icon"]),H("span",null,tn(i.currentBrainLabel),1)],12,Gf),H("ul",qf,[H("li",null,[H("button",{onClick:t[0]||(t[0]=s=>i.brainSelected()),class:"dropdown-item text",style:We(i.labelText)},[Y(o,{icon:"fa-solid fa-brain",style:{margin:"0 10px"}}),Xf],4)]),Jf,(ce(!0),pe(Pe,null,$r(i.availableAiBrainsLabel,(s,l)=>(ce(),pe("li",null,[H("button",{onClick:f=>i.brainSelected(l),class:"dropdown-item text",style:We(i.labelText)},[Y(o,{icon:"fa-solid fa-robot",style:{margin:"0 10px"}}),H("span",null,tn(s),1)],12,Zf)]))),256))])])}const eu=mn(Kf,[["render",Qf],["__scopeId","data-v-aebce814"]]),tu={name:"NavBar",components:{BrainSelector:eu},props:["gameIsRunning"],setup(){return{PlayerSide:te}},emits:["startGame","abortGame","animationSpeedChanged"],data(){return{animationInterval:{max:2100,min:100},timerInterval:void 0,timer:0,players:{[te.TOP]:new Er(te.TOP,new qn),[te.BOTTOM]:new Er(te.BOTTOM,new qn)},animationSpeed:500}},computed:{timerLabel(){let e=Math.trunc(this.timer/60),t=this.timer%60;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")}},watch:{gameIsRunning(){this.gameIsRunning||(clearInterval(this.timerInterval),this.timerInterval=0)},animationSpeed(){const e=this.animationInterval.max+this.animationInterval.min-this.animationSpeed;console.log(e),this.$emit("animationSpeedChanged",e)}},methods:{startStopGame(){this.gameIsRunning?(clearInterval(this.timerInterval),this.timerInterval=0,this.$emit("abortGame")):(this.timer=0,this.timerInterval=setInterval(()=>this.timer+=1,1e3),this.$emit("startGame",{topPlayer:this.players[te.TOP],bottomPlayer:this.players[te.BOTTOM],animationSpeed:this.animationSpeed}))},brainSelected(e){this.players[e.side]=new Er(e.side,e.brain)}}};const ts=e=>(_a("data-v-0f79aed2"),e=e(),Pa(),e),nu={class:"navbar border-bottom border-body",style:{"background-color":"var(--nav-bar-color)"}},ru={class:"container"},au={style:{color:"var(--vt-c-black-mute)"}},iu=["min","max"],ou={key:0,class:"btn-success"},su=ts(()=>H("span",null," Stop ",-1)),lu={key:1,class:"btn-danger"},cu=ts(()=>H("span",null," Start ",-1)),fu={class:"text",style:{color:"var(--vt-c-black-mute)","text-align":"left",width:"10%"}};function uu(e,t,n,r,a,i){const o=Ft("BrainSelector"),s=Ft("font-awesome-icon");return ce(),pe("nav",nu,[H("div",ru,[H("div",null,[Y(o,{side:r.PlayerSide.TOP,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"]),Y(o,{side:r.PlayerSide.BOTTOM,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"])]),H("div",au,[Hl(H("input",{type:"range",class:"form-range range-cust",min:a.animationInterval.min,step:200,max:a.animationInterval.max,"onUpdate:modelValue":t[0]||(t[0]=l=>a.animationSpeed=l),id:"customRange2"},null,8,iu),[[rf,a.animationSpeed]]),Y(s,{icon:"fa-solid fa-bolt",style:{margin:"0 10px"}})]),H("button",{class:"btn text",onClick:t[1]||(t[1]=(...l)=>i.startStopGame&&i.startStopGame(...l))},[n.gameIsRunning?(ce(),pe("div",ou,[su,Y(s,{icon:"fa-regular fa-circle-stop"})])):(ce(),pe("div",lu,[cu,Y(s,{icon:"fa-solid fa-play",style:{margin:"0 10px"}})]))]),H("div",fu,[Y(s,{icon:"fa-solid fa-hourglass",class:Ht([n.gameIsRunning&&"hourglass-rotation"]),style:{margin:"0 10px"}},null,8,["class"]),H("span",null,tn(i.timerLabel),1)])])])}const du=mn(tu,[["render",uu],["__scopeId","data-v-0f79aed2"]]),mu={name:"App",components:{NavBar:du,Board:Uf},data(){return{gameIsRunning:!1,internalPockets:6,initialStones:4,animationSpeed:500,topPlayer:void 0,bottomPlayer:void 0}},methods:{gameOver(e){this.gameIsRunning=!1,e.winningPlayer?console.log("Player "+e.winningPlayer+" won"):console.log("It was a DRAW"),console.log("History",e.movesHistory)},startGame(e){this.gameIsRunning=!0,this.topPlayer=e.topPlayer,this.bottomPlayer=e.bottomPlayer,this.animationSpeed=e.animationSpeed},abortGame(){this.gameIsRunning=!1,this.topPlayer=void 0,this.bottomPlayer=void 0},animationSpeedChanged(e){this.animationSpeed=e}}};function pu(e,t,n,r,a,i){const o=Ft("NavBar"),s=Ft("Board");return ce(),pe("main",null,[Y(o,{gameIsRunning:a.gameIsRunning,onStartGame:i.startGame,onAbortGame:i.abortGame,onAnimationSpeedChanged:i.animationSpeedChanged},null,8,["gameIsRunning","onStartGame","onAbortGame","onAnimationSpeedChanged"]),Y(s,{gameIsRunning:a.gameIsRunning,internalPockets:a.internalPockets,initialStones:a.initialStones,topPlayer:a.topPlayer,bottomPlayer:a.bottomPlayer,animationSpeed:a.animationSpeed,onGameOver:i.gameOver},null,8,["gameIsRunning","internalPockets","initialStones","topPlayer","bottomPlayer","animationSpeed","onGameOver"])])}const hu=mn(mu,[["render",pu]]);function Ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function gu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ei(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vu(e,t,n){return t&&Ei(e.prototype,t),n&&Ei(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ea(e,t){return yu(e)||wu(e,t)||ns(e,t)||Pu()}function pn(e){return bu(e)||xu(e)||ns(e)||_u()}function bu(e){if(Array.isArray(e))return Jr(e)}function yu(e){if(Array.isArray(e))return e}function xu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ns(e,t){if(e){if(typeof e=="string")return Jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jr(e,t)}}function Jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ti=function(){},Ta={},rs={},as=null,is={mark:Ti,measure:Ti};try{typeof window<"u"&&(Ta=window),typeof document<"u"&&(rs=document),typeof MutationObserver<"u"&&(as=MutationObserver),typeof performance<"u"&&(is=performance)}catch{}var Su=Ta.navigator||{},Ci=Su.userAgent,Mi=Ci===void 0?"":Ci,rt=Ta,X=rs,Ni=as,An=is;rt.document;var Xe=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",os=~Mi.indexOf("MSIE")||~Mi.indexOf("Trident/"),In,En,Tn,Cn,Mn,Ke="___FONT_AWESOME___",Zr=16,ss="fa",ls="svg-inline--fa",wt="data-fa-i2svg",Qr="data-fa-pseudo-element",ku="data-fa-pseudo-element-pending",Ca="data-prefix",Ma="data-icon",Ri="fontawesome-i2svg",Ou="async",Au=["HTML","HEAD","STYLE","SCRIPT"],cs=function(){try{return!0}catch{return!1}}(),q="classic",Q="sharp",Na=[q,Q];function hn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var ln=hn((In={},re(In,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(In,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),In)),cn=hn((En={},re(En,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(En,Q,{solid:"fass",regular:"fasr",light:"fasl"}),En)),fn=hn((Tn={},re(Tn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(Tn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),Iu=hn((Cn={},re(Cn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(Cn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Cn)),Eu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,fs="fa-layers-text",Tu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Cu=hn((Mn={},re(Mn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(Mn,Q,{900:"fass",400:"fasr",300:"fasl"}),Mn)),us=[1,2,3,4,5,6,7,8,9,10],Mu=us.concat([11,12,13,14,15,16,17,18,19,20]),Nu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(cn[q]).map(un.add.bind(un));Object.keys(cn[Q]).map(un.add.bind(un));var Ru=[].concat(Na,pn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY]).concat(us.map(function(e){return"".concat(e,"x")})).concat(Mu.map(function(e){return"w-".concat(e)})),Qt=rt.FontAwesomeConfig||{};function Lu(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Bu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bu.forEach(function(e){var t=Ea(e,2),n=t[0],r=t[1],a=Fu(Lu(n));a!=null&&(Qt[r]=a)})}var ds={styleDefault:"solid",familyDefault:"classic",cssPrefix:ss,replacementClass:ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qt.familyPrefix&&(Qt.cssPrefix=Qt.familyPrefix);var Dt=O(O({},ds),Qt);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var I={};Object.keys(ds).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Dt[e]=n,en.forEach(function(r){return r(I)})},get:function(){return Dt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,en.forEach(function(n){return n(I)})},get:function(){return Dt.cssPrefix}});rt.FontAwesomeConfig=I;var en=[];function ju(e){return en.push(e),function(){en.splice(en.indexOf(e),1)}}var Ze=Zr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Du(e){if(!(!e||!Xe)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var zu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=zu[Math.random()*62|0];return t}function Wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ms(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ms(e[n]),'" ')},"").trim()}function mr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function La(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Uu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function $u(e){var t=e.transform,n=e.width,r=n===void 0?Zr:n,a=e.height,i=a===void 0?Zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&os?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wu=`:root, :host {
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
}`;function ps(){var e=ss,t=ls,n=I.cssPrefix,r=I.replacementClass,a=Wu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Li=!1;function Cr(){I.autoAddCss&&!Li&&(Du(ps()),Li=!0)}var Yu={mixout:function(){return{dom:{css:ps,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Ve=rt||{};Ve[Ke]||(Ve[Ke]={});Ve[Ke].styles||(Ve[Ke].styles={});Ve[Ke].hooks||(Ve[Ke].hooks={});Ve[Ke].shims||(Ve[Ke].shims=[]);var Ie=Ve[Ke],hs=[],Ku=function e(){X.removeEventListener("DOMContentLoaded",e),Jn=1,hs.map(function(t){return t()})},Jn=!1;Xe&&(Jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Jn||X.addEventListener("DOMContentLoaded",Ku));function Vu(e){Xe&&(Jn?setTimeout(e,0):hs.push(e))}function gn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ms(e):"<".concat(t," ").concat(Hu(r),">").concat(i.map(gn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Gu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Mr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Gu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function qu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ea(e){var t=qu(e);return t.length===1?t[0].toString(16):null}function Xu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Bi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Bi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Bi(t)):Ie.styles[e]=O(O({},Ie.styles[e]||{}),i),e==="fas"&&ta("fa",t)}var Nn,Rn,Ln,At=Ie.styles,Ju=Ie.shims,Zu=(Nn={},re(Nn,q,Object.values(fn[q])),re(Nn,Q,Object.values(fn[Q])),Nn),Fa=null,gs={},vs={},bs={},ys={},xs={},Qu=(Rn={},re(Rn,q,Object.keys(ln[q])),re(Rn,Q,Object.keys(ln[Q])),Rn);function ed(e){return~Ru.indexOf(e)}function td(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ed(a)?a:null}var ws=function(){var t=function(i){return Mr(At,function(o,s,l){return o[l]=Mr(s,i,{}),o},{})};gs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),vs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),xs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in At||I.autoFetchSvg,r=Mr(Ju,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});bs=r.names,ys=r.unicodes,Fa=pr(I.styleDefault,{family:I.familyDefault})};ju(function(e){Fa=pr(e.styleDefault,{family:I.familyDefault})});ws();function Ba(e,t){return(gs[e]||{})[t]}function nd(e,t){return(vs[e]||{})[t]}function ht(e,t){return(xs[e]||{})[t]}function _s(e){return bs[e]||{prefix:null,iconName:null}}function rd(e){var t=ys[e],n=Ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return Fa}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=ln[r][e],i=cn[r][e]||cn[r][a],o=e in Ie.styles?e:null;return i||o||null}var ji=(Ln={},re(Ln,q,Object.keys(fn[q])),re(Ln,Q,Object.keys(fn[Q])),Ln);function hr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},re(t,q,"".concat(I.cssPrefix,"-").concat(q)),re(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),t),o=null,s=q;(e.includes(i[q])||e.some(function(f){return ji[q].includes(f)}))&&(s=q),(e.includes(i[Q])||e.some(function(f){return ji[Q].includes(f)}))&&(s=Q);var l=e.reduce(function(f,u){var m=td(I.cssPrefix,u);if(At[u]?(u=Zu[s].includes(u)?Iu[s][u]:u,o=u,f.prefix=u):Qu[s].indexOf(u)>-1?(o=u,f.prefix=pr(u,{family:s})):m?f.iconName=m:u!==I.replacementClass&&u!==i[q]&&u!==i[Q]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?_s(f.iconName):{},y=ht(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||y||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!At.far&&At.fas&&!I.autoFetchSvg&&(f.prefix="fas")}return f},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(At.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ht(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=at()||"fas"),l}var ad=function(){function e(){gu(this,e),this.definitions={}}return vu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),ta(s,o[s]);var l=fn[q][s];l&&ta(l,o[s]),ws()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Di=[],It={},Rt={},id=Object.keys(Rt);function od(e,t){var n=t.mixoutsTo;return Di=e,It={},Object.keys(Rt).forEach(function(r){id.indexOf(r)===-1&&delete Rt[r]}),Di.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(Rt)}),n}function na(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function _t(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ge(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rt[e]?Rt[e].apply(null,t):void 0}function ra(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(t)return t=ht(n,t)||t,Fi(Ps.definitions,n,t)||Fi(Ie.styles,n,t)}var Ps=new ad,sd=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,_t("noAuto")},ld={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(_t("beforeI2svg",t),Ge("pseudoElements2svg",t),Ge("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Vu(function(){fd({autoReplaceSvgRoot:n}),_t("watch",t)})}},cd={icon:function(t){if(t===null)return null;if(Xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pr(t[0]);return{prefix:r,iconName:ht(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Eu))){var a=hr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||at(),iconName:ht(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=at();return{prefix:i,iconName:ht(i,t)||t}}}},we={noAuto:sd,config:I,dom:ld,parse:cd,library:Ps,findIconDefinition:ra,toHtml:gn},fd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ie.styles).length>0||I.autoFetchSvg)&&Xe&&I.autoReplaceSvg&&we.dom.i2svg({node:r})};function gr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return gn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Xe){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ud(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(La(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=mr(O(O({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function dd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,N=r.found?r:n,T=N.width,D=N.height,P=a==="fak",k=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),L={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(D)})},E=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/D*16*.0625,"em")}:{};y&&(L.attributes[wt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||dn())},children:[l]}),delete L.attributes.title);var $=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},E),m.styles)}),se=r.found&&n.found?Ge("generateAbstractMask",$)||{children:[],attributes:{}}:Ge("generateAbstractIcon",$)||{children:[],attributes:{}},le=se.children,Se=se.attributes;return $.children=le,$.attributes=Se,s?dd($):ud($)}function zi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[wt]="");var u=O({},o.styles);La(a)&&(u.transform=$u({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=mr(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function md(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=mr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Nr=Ie.styles;function aa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ea(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var pd={found:!1,width:512,height:512};function hd(e,t){!cs&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ia(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=at()),new Promise(function(r,a){if(Ge("missingIconAbstract"),n==="fa"){var i=_s(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Nr[t]&&Nr[t][e]){var o=Nr[t][e];return r(aa(o))}hd(e,t),r(O(O({},pd),{},{icon:I.showMissingIcons&&e?Ge("missingIconAbstract")||{}:{}}))})}var Hi=function(){},oa=I.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Hi,measure:Hi},Xt='FA "6.4.2"',gd=function(t){return oa.mark("".concat(Xt," ").concat(t," begins")),function(){return Ss(t)}},Ss=function(t){oa.mark("".concat(Xt," ").concat(t," ends")),oa.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},za={begin:gd,end:Ss},Un=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function vd(e){var t=e.getAttribute?e.getAttribute(Ca):null,n=e.getAttribute?e.getAttribute(Ma):null;return t&&n}function bd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function yd(){if(I.autoReplaceSvg===!0)return $n.replace;var e=$n[I.autoReplaceSvg];return e||$n.replace}function xd(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function wd(e){return X.createElement(e)}function ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?xd:wd:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ks(o,{ceFn:r}))}),a}function _d(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ks(a),n)}),n.getAttribute(wt)===null&&I.keepOriginalSource){var r=X.createComment(_d(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf(I.replacementClass))return $n.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return gn(s)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=o}};function $i(e){e()}function Os(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=$i;I.mutateApproach===Ou&&(r=rt.requestAnimationFrame||$i),r(function(){var a=yd(),i=za.begin("mutate");e.map(a),i(),n()})}}var Ha=!1;function As(){Ha=!0}function sa(){Ha=!1}var Zn=null;function Wi(e){if(Ni&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,o=i===void 0?Un:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Zn=new Ni(function(f){if(!Ha){var u=at();Wt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ui(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ui(m.target)&&~Nu.indexOf(m.attributeName))if(m.attributeName==="class"&&vd(m.target)){var h=hr(Ra(m.target)),y=h.prefix,N=h.iconName;m.target.setAttribute(Ca,y||u),N&&m.target.setAttribute(Ma,N)}else bd(m.target)&&a(m.target)})}}),Xe&&Zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pd(){Zn&&Zn.disconnect()}function Sd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function kd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=hr(Ra(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=nd(a.prefix,e.innerText)||Ba(a.prefix,ea(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Od(e){var t=Wt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ad(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=kd(e),r=n.iconName,a=n.prefix,i=n.rest,o=Od(e),s=na("parseNodeAttributes",{},e),l=t.styleParser?Sd(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Id=Ie.styles;function Is(e){var t=I.autoReplaceSvg==="nest"?Yi(e,{styleParser:!1}):Yi(e);return~t.extra.classes.indexOf(fs)?Ge("generateLayersText",e,t):Ge("generateSvgReplacementMutation",e,t)}var it=new Set;Na.map(function(e){it.add("fa-".concat(e))});Object.keys(ln[q]).map(it.add.bind(it));Object.keys(ln[Q]).map(it.add.bind(it));it=pn(it);function Ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ri,"-").concat(m))},a=function(m){return n.remove("".concat(Ri,"-").concat(m))},i=I.autoFetchSvg?it:Na.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Id));i.includes("fa")||i.push("fa");var o=[".".concat(fs,":not([").concat(wt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(wt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Wt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=za.begin("onTree"),f=s.reduce(function(u,m){try{var h=Is(m);h&&u.push(h)}catch(y){cs||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){Os(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Ed(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Is(e).then(function(n){n&&Os([n],t)})}function Td(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ra(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ra(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Cd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,y=n.titleId,N=y===void 0?null:y,T=n.classes,D=T===void 0?[]:T,P=n.attributes,k=P===void 0?{}:P,L=n.styles,E=L===void 0?{}:L;if(t){var $=t.prefix,se=t.iconName,le=t.icon;return gr(O({type:"icon"},t),function(){return _t("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?k["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(N||dn()):(k["aria-hidden"]="true",k.focusable="false")),Da({icons:{main:aa(le),mask:l?aa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:se,transform:O(O({},je),a),symbol:o,title:h,maskId:u,titleId:N,extra:{attributes:k,styles:E,classes:D}})})}},Md={mixout:function(){return{icon:Td(Cd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ki,n.nodeCallback=Ed,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ki(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,N){Promise.all([ia(a,s),u.iconName?ia(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var D=Ea(T,2),P=D[0],k=D[1];y([n,Da({icons:{main:P,mask:k},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=mr(s);l.length>0&&(a.style=l);var f;return La(o)&&(f=Ge("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Nd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return gr({type:"layer"},function(){_t("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(pn(i)).join(" ")},children:o}]})}}}},Rd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return gr({type:"counter",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),md({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(pn(s))}})})}}}},Ld={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return gr({type:"text",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),zi({content:n,transform:O(O({},je),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(I.cssPrefix,"-layers-text")].concat(pn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(os){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,zi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Fd=new RegExp('"',"ug"),Vi=[1105920,1112319];function Bd(e){var t=e.replace(Fd,""),n=Xu(t,0),r=n>=Vi[0]&&n<=Vi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ea(a?t[0]:t),isSecondary:r||a}}function Gi(e,t){var n="".concat(ku).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Wt(e.children),o=i.filter(function(le){return le.getAttribute(Qr)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Tu),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Q:q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[h][l[2].toLowerCase()]:Cu[h][f],N=Bd(m),T=N.value,D=N.isSecondary,P=l[0].startsWith("FontAwesome"),k=Ba(y,T),L=k;if(P){var E=rd(T);E.iconName&&E.prefix&&(k=E.iconName,y=E.prefix)}if(k&&!D&&(!o||o.getAttribute(Ca)!==y||o.getAttribute(Ma)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var $=Ad(),se=$.extra;se.attributes[Qr]=t,ia(k,y).then(function(le){var Se=Da(O(O({},$),{},{icons:{main:le,mask:ja()},prefix:y,iconName:L,extra:se,watchable:!0})),_e=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=Se.map(function(ze){return gn(ze)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function jd(e){return Promise.all([Gi(e,"::before"),Gi(e,"::after")])}function Dd(e){return e.parentNode!==document.head&&!~Au.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qi(e){if(Xe)return new Promise(function(t,n){var r=Wt(e.querySelectorAll("*")).filter(Dd).map(jd),a=za.begin("searchPseudoElements");As(),Promise.all(r).then(function(){a(),sa(),t()}).catch(function(){a(),sa(),n()})})}var zd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&qi(a)}}},Xi=!1,Hd={mixout:function(){return{dom:{unwatch:function(){As(),Xi=!0}}}},hooks:function(){return{bootstrap:function(){Wi(na("mutationObserverCallbacks",{}))},noAuto:function(){Pd()},watch:function(n){var r=n.observeMutationsRoot;Xi?sa():Wi(na("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ud={mixout:function(){return{parse:{transform:function(n){return Ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},y.outer),children:[{tag:"g",attributes:O({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),y.path)}]}]}}}},Rr={x:0,y:0,width:"100%",height:"100%"};function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $d(e){return e.tag==="g"?e.children:[e]}var Wd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?hr(a.split(" ").map(function(o){return o.trim()})):ja();return i.prefix||(i.prefix=at()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,h=o.icon,y=Uu({transform:l,containerWidth:m,iconWidth:f}),N={tag:"rect",attributes:O(O({},Rr),{},{fill:"white"})},T=u.children?{children:u.children.map(Zi)}:{},D={tag:"g",attributes:O({},y.inner),children:[Zi(O({tag:u.tag,attributes:O(O({},u.attributes),y.path)},T))]},P={tag:"g",attributes:O({},y.outer),children:[D]},k="mask-".concat(s||dn()),L="clip-".concat(s||dn()),E={tag:"mask",attributes:O(O({},Rr),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,P]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:$d(h)},E]};return r.push($,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(k,")")},Rr)}),{children:r,attributes:a}}}},Yd={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Kd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Vd=[Yu,Md,Nd,Rd,Ld,zd,Hd,Ud,Wd,Yd,Kd];od(Vd,{mixoutsTo:we});we.noAuto;we.config;var Gd=we.library;we.dom;var la=we.parse;we.findIconDefinition;we.toHtml;var qd=we.icon;we.layer;we.text;we.counter;function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qn(e){"@babel/helpers - typeof";return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(e)}function he(e,t,n){return t=Qd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jd(e,t){if(e==null)return{};var n=Xd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qd(e){var t=Zd(e,"string");return typeof t=="symbol"?t:String(t)}var em=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Es={exports:{}};(function(e){(function(t){var n=function(P,k,L){if(!f(k)||m(k)||h(k)||y(k)||l(k))return k;var E,$=0,se=0;if(u(k))for(E=[],se=k.length;$<se;$++)E.push(n(P,k[$],L));else{E={};for(var le in k)Object.prototype.hasOwnProperty.call(k,le)&&(E[P(le,L)]=n(P,k[le],L))}return E},r=function(P,k){k=k||{};var L=k.separator||"_",E=k.split||/(?=[A-Z])/;return P.split(E).join(L)},a=function(P){return N(P)?P:(P=P.replace(/[\-_\s]+(.)?/g,function(k,L){return L?L.toUpperCase():""}),P.substr(0,1).toLowerCase()+P.substr(1))},i=function(P){var k=a(P);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(P,k){return r(P,k).toLowerCase()},s=Object.prototype.toString,l=function(P){return typeof P=="function"},f=function(P){return P===Object(P)},u=function(P){return s.call(P)=="[object Array]"},m=function(P){return s.call(P)=="[object Date]"},h=function(P){return s.call(P)=="[object RegExp]"},y=function(P){return s.call(P)=="[object Boolean]"},N=function(P){return P=P-0,P===P},T=function(P,k){var L=k&&"process"in k?k.process:k;return typeof L!="function"?P:function(E,$){return L(E,P,$)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(P,k){return n(T(a,k),P)},decamelizeKeys:function(P,k){return n(T(o,k),P,k)},pascalizeKeys:function(P,k){return n(T(i,k),P)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(em)})(Es);var tm=Es.exports,nm=["class","style"];function rm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=tm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function am(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=am(u);break;case"style":l.style=rm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Jd(n,nm);return Rc(e.tag,$e($e($e({},t),{},{class:a.class,style:$e($e({},a.style),o)},a.attrs),s),r)}var Cs=!1;try{Cs=!0}catch{}function im(){if(!Cs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Lr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function om(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function eo(e){if(e&&Qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(la.icon)return la.icon(e);if(e===null)return null;if(Qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var sm=Ro({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Fe(function(){return eo(t.icon)}),i=Fe(function(){return Lr("classes",om(t))}),o=Fe(function(){return Lr("transform",typeof t.transform=="string"?la.transform(t.transform):t.transform)}),s=Fe(function(){return Lr("mask",eo(t.mask))}),l=Fe(function(){return qd(a.value,$e($e($e($e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});vt(l,function(u){if(!u)return im("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=Fe(function(){return l.value?Ts(l.value.abstract[0],{},r):null});return function(){return f.value}}}),lm={prefix:"fas",iconName:"hourglass",icon:[384,512,[9203,62032,"hourglass-empty"],"f254","M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z"]},cm={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},fm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},um={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"]},dm={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]},mm={prefix:"far",iconName:"circle-stop",icon:[512,512,[62094,"stop-circle"],"f28d","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"]};Gd.add(dm,um,cm,fm,mm,lm);const Ms=sf(hu);Ms.component("font-awesome-icon",sm);Ms.mount("#app");const{isSupported:pm,orientation:hm,angle:gm,lockOrientation:vm}=bf();console.log(pm.value,hm.value,gm.value);vm("landscape");