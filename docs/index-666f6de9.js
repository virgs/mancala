var Io=Object.defineProperty;var To=(e,t,n)=>t in e?Io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>(To(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},Et=[],Te=()=>{},Eo=()=>!1,Mo=/^on[^a-z]/,nr=e=>Mo.test(e),ua=e=>e.startsWith("onUpdate:"),oe=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},No=Object.prototype.hasOwnProperty,H=(e,t)=>No.call(e,t),N=Array.isArray,Mt=e=>ar(e)==="[object Map]",ts=e=>ar(e)==="[object Set]",j=e=>typeof e=="function",ae=e=>typeof e=="string",rr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",ns=e=>(Q(e)||j(e))&&j(e.then)&&j(e.catch),rs=Object.prototype.toString,ar=e=>rs.call(e),Ro=e=>ar(e).slice(8,-1),as=e=>ar(e)==="[object Object]",ma=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Lo=/-(\w)/g,De=ir(e=>e.replace(Lo,(t,n)=>n?n.toUpperCase():"")),Fo=/\B([A-Z])/g,Ht=ir(e=>e.replace(Fo,"-$1").toLowerCase()),sr=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=ir(e=>e?`on${sr(e)}`:""),xt=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Br=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qa;const jr=()=>qa||(qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pe(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?Do(r):Pe(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ae(e)||Q(e))return e}const Bo=/;(?![^(]*\))/g,jo=/:([^]+)/,zo=/\/\*[^]*?\*\//g;function Do(e){const t={};return e.replace(zo,"").split(Bo).forEach(n=>{if(n){const r=n.split(jo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function mn(e){let t="";if(ae(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=mn(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uo=fa(Ho);function is(e){return!!e||e===""}const bt=e=>ae(e)?e:e==null?"":N(e)||Q(e)&&(e.toString===rs||!j(e.toString))?JSON.stringify(e,ss,2):String(e),ss=(e,t)=>t&&t.__v_isRef?ss(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ts(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!N(t)&&!as(t)?String(t):t;let ke;class $o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Yo(e,t=ke){t&&t.active&&t.effects.push(e)}function Wo(){return ke}const ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},os=e=>(e.w&rt)>0,ls=e=>(e.n&rt)>0,Ko=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},Go=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];os(a)&&!ls(a)?a.delete(e):t[n++]=a,a.w&=~rt,a.n&=~rt}t.length=n}},zr=new WeakMap;let Vt=0,rt=1;const Dr=30;let Ae;const yt=Symbol(""),Hr=Symbol("");class pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yo(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,tt=!0,rt=1<<++Vt,Vt<=Dr?Ko(this):Xa(this),this.fn()}finally{Vt<=Dr&&Go(this),rt=1<<--Vt,Ae=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Xa(this),this.onStop&&this.onStop(),this.active=!1)}}function Xa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const cs=[];function Ut(){cs.push(tt),tt=!1}function $t(){const e=cs.pop();tt=e===void 0?!0:e}function ve(e,t,n){if(tt&&Ae){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ha()),fs(a)}}function fs(e,t){let n=!1;Vt<=Dr?ls(e)||(e.n|=rt,n=!os(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Ke(e,t,n,r,a,i){const s=zr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&N(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||!rr(d)&&d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":N(e)?ma(n)&&o.push(s.get("length")):(o.push(s.get(yt)),Mt(e)&&o.push(s.get(Hr)));break;case"delete":N(e)||(o.push(s.get(yt)),Mt(e)&&o.push(s.get(Hr)));break;case"set":Mt(e)&&o.push(s.get(yt));break}if(o.length===1)o[0]&&Ur(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ur(ha(l))}}function Ur(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Ja(r);for(const r of n)r.computed||Ja(r)}function Ja(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vo=fa("__proto__,__v_isRef,__isVue"),us=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rr)),Za=qo();function qo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let i=0,s=this.length;i<s;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map($)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=$(this)[t].apply(this,n);return $t(),r}}),e}function Xo(e){const t=$(this);return ve(t,"has",e),t.hasOwnProperty(e)}class ds{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?cl:gs:i?ps:hs).get(t))return t;const s=N(t);if(!a){if(s&&H(Za,n))return Reflect.get(Za,n,r);if(n==="hasOwnProperty")return Xo}const o=Reflect.get(t,n,r);return(rr(n)?us.has(n):Vo(n))||(a||ve(t,"get",n),i)?o:ue(o)?s&&ma(n)?o:o.value:Q(o)?a?vs(o):ba(o):o}}class ms extends ds{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Bt(i)&&ue(i)&&!ue(r))return!1;if(!this._shallow&&(!Kn(r)&&!Bt(r)&&(i=$(i),r=$(r)),!N(t)&&ue(i)&&!ue(r)))return i.value=r,!0;const s=N(t)&&ma(n)?Number(n)<t.length:H(t,n),o=Reflect.set(t,n,r,a);return t===$(a)&&(s?xt(r,i)&&Ke(t,"set",n,r):Ke(t,"add",n,r)),o}deleteProperty(t,n){const r=H(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ke(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!rr(n)||!us.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",N(t)?"length":yt),Reflect.ownKeys(t)}}class Jo extends ds{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zo=new ms,Qo=new Jo,el=new ms(!0),ga=e=>e,or=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const a=$(e),i=$(t);n||(xt(t,i)&&ve(a,"get",t),ve(a,"get",i));const{has:s}=or(a),o=r?ga:n?_a:nn;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function wn(e,t=!1){const n=this.__v_raw,r=$(n),a=$(e);return t||(xt(e,a)&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&ve($(e),"iterate",yt),Reflect.get(e,"size",e)}function Qa(e){e=$(e);const t=$(this);return or(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function ei(e,t){t=$(t);const n=$(this),{has:r,get:a}=or(n);let i=r.call(n,e);i||(e=$(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?xt(t,s)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function ti(e){const t=$(this),{has:n,get:r}=or(t);let a=n.call(t,e);a||(e=$(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ke(t,"delete",e,void 0),i}function ni(){const e=$(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=$(s),l=t?ga:e?_a:nn;return!e&&ve(o,"iterate",yt),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function On(e,t,n){return function(...r){const a=this.__v_raw,i=$(a),s=Mt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?ga:t?_a:nn;return!t&&ve(i,"iterate",l?Hr:yt),{next(){const{value:m,done:p}=c.next();return p?{value:m,done:p}:{value:o?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function tl(){const e={get(i){return xn(this,i)},get size(){return Pn(this)},has:wn,add:Qa,set:ei,delete:ti,clear:ni,forEach:Sn(!1,!1)},t={get(i){return xn(this,i,!1,!0)},get size(){return Pn(this)},has:wn,add:Qa,set:ei,delete:ti,clear:ni,forEach:Sn(!1,!0)},n={get(i){return xn(this,i,!0)},get size(){return Pn(this,!0)},has(i){return wn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Sn(!0,!1)},r={get(i){return xn(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return wn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=On(i,!1,!1),n[i]=On(i,!0,!1),t[i]=On(i,!1,!0),r[i]=On(i,!0,!0)}),[e,n,t,r]}const[nl,rl,al,il]=tl();function va(e,t){const n=t?e?il:al:e?rl:nl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const sl={get:va(!1,!1)},ol={get:va(!1,!0)},ll={get:va(!0,!1)},hs=new WeakMap,ps=new WeakMap,gs=new WeakMap,cl=new WeakMap;function fl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ul(e){return e.__v_skip||!Object.isExtensible(e)?0:fl(Ro(e))}function ba(e){return Bt(e)?e:ya(e,!1,Zo,sl,hs)}function dl(e){return ya(e,!1,el,ol,ps)}function vs(e){return ya(e,!0,Qo,ll,gs)}function ya(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=ul(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Nt(e){return Bt(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Kn(e){return!!(e&&e.__v_isShallow)}function bs(e){return Nt(e)||Bt(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function ys(e){return Wn(e,"__v_skip",!0),e}const nn=e=>Q(e)?ba(e):e,_a=e=>Q(e)?vs(e):e;function _s(e){tt&&Ae&&(e=$(e),fs(e.dep||(e.dep=ha())))}function xs(e,t){e=$(e);const n=e.dep;n&&Ur(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function Pr(e){return ml(e,!1)}function ml(e,t){return ue(e)?e:new hl(e,t)}class hl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:nn(t)}get value(){return _s(this),this._value}set value(t){const n=this.__v_isShallow||Kn(t)||Bt(t);t=n?t:$(t),xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),xs(this))}}function pl(e){return ue(e)?e.value:e}const gl={get:(e,t,n)=>pl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ws(e){return Nt(e)?e:new Proxy(e,gl)}class vl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pa(t,()=>{this._dirty||(this._dirty=!0,xs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=$(this);return _s(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function bl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new vl(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){lr(i,t,n)}return a}function Ee(e,t,n,r){if(j(e)){const i=nt(e,t,n,r);return i&&ns(i)&&i.catch(s=>{lr(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function lr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,s,o]);return}}yl(e,n,a,r)}function yl(e,t,n,r=!0){console.error(e)}let rn=!1,$r=!1;const fe=[];let Be=0;const Rt=[];let $e=null,dt=0;const Ps=Promise.resolve();let xa=null;function _l(e){const t=xa||Ps;return e?t.then(this?e.bind(this):e):t}function xl(e){let t=Be+1,n=fe.length;for(;t<n;){const r=t+n>>>1,a=fe[r],i=an(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function wa(e){(!fe.length||!fe.includes(e,rn&&e.allowRecurse?Be+1:Be))&&(e.id==null?fe.push(e):fe.splice(xl(e.id),0,e),Ss())}function Ss(){!rn&&!$r&&($r=!0,xa=Ps.then(ks))}function wl(e){const t=fe.indexOf(e);t>Be&&fe.splice(t,1)}function Pl(e){N(e)?Rt.push(...e):(!$e||!$e.includes(e,e.allowRecurse?dt+1:dt))&&Rt.push(e),Ss()}function ri(e,t=rn?Be+1:0){for(;t<fe.length;t++){const n=fe[t];n&&n.pre&&(fe.splice(t,1),t--,n())}}function Os(e){if(Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>an(n)-an(r)),dt=0;dt<$e.length;dt++)$e[dt]();$e=null,dt=0}}const an=e=>e.id==null?1/0:e.id,Sl=(e,t)=>{const n=an(e)-an(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ks(e){$r=!1,rn=!0,fe.sort(Sl);const t=Te;try{for(Be=0;Be<fe.length;Be++){const n=fe[Be];n&&n.active!==!1&&nt(n,null,14)}}finally{Be=0,fe.length=0,Os(),rn=!1,xa=null,(fe.length||Rt.length)&&ks()}}function Ol(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:p}=r[d]||q;p&&(a=n.map(x=>ae(x)?x.trim():x)),m&&(a=n.map(Br))}let o,l=r[o=wr(t)]||r[o=wr(De(t))];!l&&i&&(l=r[o=wr(Ht(t))]),l&&Ee(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(c,e,6,a)}}function As(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!j(e)){const l=c=>{const d=As(c,t,!0);d&&(o=!0,oe(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Q(e)&&r.set(e,null),null):(N(i)?i.forEach(l=>s[l]=null):oe(s,i),Q(e)&&r.set(e,s),s)}function cr(e,t){return!e||!nr(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Ht(t))||H(e,t))}let we=null,fr=null;function Gn(e){const t=we;return we=e,fr=e&&e.type.__scopeId||null,t}function Pa(e){fr=e}function Sa(){fr=null}function kl(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&hi(-1);const i=Gn(t);let s;try{s=e(...a)}finally{Gn(i),r._d&&hi(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:p,setupState:x,ctx:R,inheritAttrs:A}=e;let z,w;const O=Gn(e);try{if(n.shapeFlag&4){const T=a||r;z=Fe(d.call(T,T,m,i,x,p,R)),w=l}else{const T=t;z=Fe(T.length>1?T(i,{attrs:l,slots:o,emit:c}):T(i,null)),w=t.props?l:Al(l)}}catch(T){Zt.length=0,lr(T,e,1),z=U(wt)}let L=z;if(w&&A!==!1){const T=Object.keys(w),{shapeFlag:Y}=L;T.length&&Y&7&&(s&&T.some(ua)&&(w=Cl(w,s)),L=jt(L,w))}return n.dirs&&(L=jt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),z=L,Gn(O),z}const Al=e=>{let t;for(const n in e)(n==="class"||n==="style"||nr(n))&&((t||(t={}))[n]=e[n]);return t},Cl=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Il(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const p=d[m];if(s[p]!==r[p]&&!cr(c,p))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?ai(r,s,c):!0:!!s;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!cr(n,i))return!0}return!1}function Tl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cs="components";function je(e,t){return Ml(Cs,e,!0,t)||e}const El=Symbol.for("v-ndc");function Ml(e,t,n=!0,r=!1){const a=we||se;if(a){const i=a.type;if(e===Cs){const o=Cc(i,!1);if(o&&(o===t||o===De(t)||o===sr(De(t))))return i}const s=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!s&&r?i:s}}function ii(e,t){return e&&(e[t]||e[De(t)]||e[sr(De(t))])}const Nl=e=>e.__isSuspense;function Rl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Pl(e)}const kn={};function Lt(e,t,n){return Is(e,t,n)}function Is(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){var o;const l=Wo()===((o=se)==null?void 0:o.scope)?se:null;let c,d=!1,m=!1;if(ue(e)?(c=()=>e.value,d=Kn(e)):Nt(e)?(c=()=>e,r=!0):N(e)?(m=!0,d=e.some(T=>Nt(T)||Kn(T)),c=()=>e.map(T=>{if(ue(T))return T.value;if(Nt(T))return ht(T);if(j(T))return nt(T,l,2)})):j(e)?t?c=()=>nt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ee(e,l,3,[x])}:c=Te,t&&r){const T=c;c=()=>ht(T())}let p,x=T=>{p=O.onStop=()=>{nt(T,l,4)}},R;if(on)if(x=Te,t?n&&Ee(t,l,3,[c(),m?[]:void 0,x]):c(),a==="sync"){const T=Mc();R=T.__watcherHandles||(T.__watcherHandles=[])}else return Te;let A=m?new Array(e.length).fill(kn):kn;const z=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((Y,le)=>xt(Y,A[le])):xt(T,A)))&&(p&&p(),Ee(t,l,3,[T,A===kn?void 0:m&&A[0]===kn?[]:A,x]),A=T)}else O.run()};z.allowRecurse=!!t;let w;a==="sync"?w=z:a==="post"?w=()=>ge(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),w=()=>wa(z));const O=new pa(c,w);t?n?z():A=O.run():a==="post"?ge(O.run.bind(O),l&&l.suspense):O.run();const L=()=>{O.stop(),l&&l.scope&&da(l.scope.effects,O)};return R&&R.push(L),L}function Ll(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?Ts(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const s=se;zt(this);const o=Is(a,i.bind(r),n);return s?zt(s):_t(),o}function Ts(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))ht(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(ts(e)||Mt(e))e.forEach(n=>{ht(n,t)});else if(as(e))for(const n in e)ht(e[n],t);return e}function Fl(e,t){const n=we;if(n===null)return e;const r=hr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,c=q]=t[i];s&&(j(s)&&(s={mounted:s,updated:s}),s.deep&&ht(o),a.push({dir:s,instance:r,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Ut(),Ee(l,n,8,[e.el,o,e,t]),$t())}}/*! #__NO_SIDE_EFFECTS__ */function Es(e,t){return j(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const jn=e=>!!e.type.__asyncLoader,Ms=e=>e.type.__isKeepAlive;function Bl(e,t){Ns(e,"a",t)}function jl(e,t){Ns(e,"da",t)}function Ns(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ur(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ms(a.parent.vnode)&&zl(r,t,n,a),a=a.parent}}function zl(e,t,n,r){const a=ur(t,e,r,!0);Rs(()=>{da(r[t],a)},n)}function ur(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Ut(),zt(n);const o=Ee(t,n,e,s);return _t(),$t(),o});return r?a.unshift(i):a.push(i),i}}const Xe=e=>(t,n=se)=>(!on||e==="sp")&&ur(e,(...r)=>t(...r),n),Dl=Xe("bm"),Hl=Xe("m"),Ul=Xe("bu"),$l=Xe("u"),Yl=Xe("bum"),Rs=Xe("um"),Wl=Xe("sp"),Kl=Xe("rtg"),Gl=Xe("rtc");function Vl(e,t=se){ur("ec",e,t)}function Vn(e,t,n,r){let a;const i=n&&n[r];if(N(e)||ae(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const Yr=e=>e?Ws(e)?hr(e)||e.proxy:Yr(e.parent):null,Jt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yr(e.parent),$root:e=>Yr(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=_l.bind(e.proxy)),$watch:e=>Ll.bind(e)}),Or=(e,t)=>e!==q&&!e.__isScriptSetup&&H(e,t),ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const x=s[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return s[t]=1,r[t];if(a!==q&&H(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return s[t]=3,i[t];if(n!==q&&H(n,t))return s[t]=4,n[t];Wr&&(s[t]=0)}}const d=Jt[t];let m,p;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&H(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,H(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Or(a,t)?(a[t]=n,!0):r!==q&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&H(e,s)||Or(t,s)||(o=i[0])&&H(o,s)||H(r,s)||H(Jt,s)||H(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function si(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wr=!0;function Xl(e){const t=Oa(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:p,beforeUpdate:x,updated:R,activated:A,deactivated:z,beforeDestroy:w,beforeUnmount:O,destroyed:L,unmounted:T,render:Y,renderTracked:le,renderTriggered:ce,errorCaptured:Se,serverPrefetch:xe,expose:He,inheritAttrs:Wt,components:vn,directives:bn,filters:yr}=t;if(c&&Jl(c,r,null),s)for(const te in s){const G=s[te];j(G)&&(r[te]=G.bind(n))}if(a){const te=a.call(n,n);Q(te)&&(e.data=ba(te))}if(Wr=!0,i)for(const te in i){const G=i[te],lt=j(G)?G.bind(n,n):j(G.get)?G.get.bind(n,n):Te,yn=!j(G)&&j(G.set)?G.set.bind(n):Te,ct=Ye({get:lt,set:yn});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Ne=>ct.value=Ne})}if(o)for(const te in o)Ls(o[te],r,n,te);if(l){const te=j(l)?l.call(n):l;Reflect.ownKeys(te).forEach(G=>{rc(G,te[G])})}d&&oi(d,e,"c");function de(te,G){N(G)?G.forEach(lt=>te(lt.bind(n))):G&&te(G.bind(n))}if(de(Dl,m),de(Hl,p),de(Ul,x),de($l,R),de(Bl,A),de(jl,z),de(Vl,Se),de(Gl,le),de(Kl,ce),de(Yl,O),de(Rs,T),de(Wl,xe),N(He))if(He.length){const te=e.exposed||(e.exposed={});He.forEach(G=>{Object.defineProperty(te,G,{get:()=>n[G],set:lt=>n[G]=lt})})}else e.exposed||(e.exposed={});Y&&e.render===Te&&(e.render=Y),Wt!=null&&(e.inheritAttrs=Wt),vn&&(e.components=vn),bn&&(e.directives=bn)}function Jl(e,t,n=Te){N(e)&&(e=Kr(e));for(const r in e){const a=e[r];let i;Q(a)?"default"in a?i=zn(a.from||r,a.default,!0):i=zn(a.from||r):i=zn(a),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function oi(e,t,n){Ee(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ls(e,t,n,r){const a=r.includes(".")?Ts(n,r):()=>n[r];if(ae(e)){const i=t[e];j(i)&&Lt(a,i)}else if(j(e))Lt(a,e.bind(n));else if(Q(e))if(N(e))e.forEach(i=>Ls(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Lt(a,i,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>qn(l,c,s,!0)),qn(l,t,s)),Q(t)&&i.set(t,l),l}function qn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&qn(e,i,n,!0),a&&a.forEach(s=>qn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Zl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Zl={data:li,props:ci,emits:ci,methods:qt,computed:qt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:qt,directives:qt,watch:ec,provide:li,inject:Ql};function li(e,t){return t?e?function(){return oe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return qt(Kr(e),Kr(t))}function Kr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?oe(Object.create(null),e,t):t}function ci(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:oe(Object.create(null),si(e),si(t??{})):t}function ec(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Fs(){return{app:null,config:{isNativeTag:Eo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tc=0;function nc(e,t){return function(r,a=null){j(r)||(r=oe({},r)),a!=null&&!Q(a)&&(a=null);const i=Fs(),s=new WeakSet;let o=!1;const l=i.app={_uid:tc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Nc,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&j(c.install)?(s.add(c),c.install(l,...d)):j(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const p=U(r,a);return p.appContext=i,d&&t?t(p,c):e(p,c,m),o=!0,l._container=c,c.__vue_app__=l,hr(p.component)||p.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Xn=l;try{return c()}finally{Xn=null}}};return l}}let Xn=null;function rc(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=se||we;if(r||Xn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function ac(e,t,n,r=!1){const a={},i={};Wn(i,mr,1),e.propsDefaults=Object.create(null),Bs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:dl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ic(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=$(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let p=d[m];if(cr(e.emitsOptions,p))continue;const x=t[p];if(l)if(H(i,p))x!==i[p]&&(i[p]=x,c=!0);else{const R=De(p);a[R]=Gr(l,o,R,x,e,!1)}else x!==i[p]&&(i[p]=x,c=!0)}}}else{Bs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!H(t,m)&&((d=Ht(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Gr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!H(t,m))&&(delete i[m],c=!0)}c&&Ke(e,"set","$attrs")}function Bs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Fn(l))continue;const c=t[l];let d;a&&H(a,d=De(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:cr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=$(n),c=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Gr(a,l,m,c[m],e,!H(c,m))}}return s}function Gr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=H(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(zt(a),r=c[n]=l.call(null,t),_t())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function js(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[p,x]=js(m,t,!0);oe(s,p),x&&o.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Q(e)&&r.set(e,Et),Et;if(N(i))for(let d=0;d<i.length;d++){const m=De(i[d]);fi(m)&&(s[m]=q)}else if(i)for(const d in i){const m=De(d);if(fi(m)){const p=i[d],x=s[m]=N(p)||j(p)?{type:p}:oe({},p);if(x){const R=mi(Boolean,x.type),A=mi(String,x.type);x[0]=R>-1,x[1]=A<0||R<A,(R>-1||H(x,"default"))&&o.push(m)}}}const c=[s,o];return Q(e)&&r.set(e,c),c}function fi(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function di(e,t){return ui(e)===ui(t)}function mi(e,t){return N(t)?t.findIndex(n=>di(n,e)):j(t)&&di(t,e)?0:-1}const zs=e=>e[0]==="_"||e==="$stable",ka=e=>N(e)?e.map(Fe):[Fe(e)],sc=(e,t,n)=>{if(t._n)return t;const r=kl((...a)=>ka(t(...a)),n);return r._c=!1,r},Ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(zs(a))continue;const i=e[a];if(j(i))t[a]=sc(a,i,r);else if(i!=null){const s=ka(i);t[a]=()=>s}}},Hs=(e,t)=>{const n=ka(t);e.slots.default=()=>n},oc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),Wn(t,"_",n)):Ds(t,e.slots={})}else e.slots={},t&&Hs(e,t);Wn(e.slots,mr,1)},lc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(oe(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Ds(t,a)),s=t}else t&&(Hs(e,t),s={default:1});if(i)for(const o in a)!zs(o)&&s[o]==null&&delete a[o]};function Vr(e,t,n,r,a=!1){if(N(e)){e.forEach((p,x)=>Vr(p,t&&(N(t)?t[x]:t),n,r,a));return}if(jn(r)&&!a)return;const i=r.shapeFlag&4?hr(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(ae(c)?(d[c]=null,H(m,c)&&(m[c]=null)):ue(c)&&(c.value=null)),j(l))nt(l,o,12,[s,d]);else{const p=ae(l),x=ue(l);if(p||x){const R=()=>{if(e.f){const A=p?H(m,l)?m[l]:d[l]:l.value;a?N(A)&&da(A,i):N(A)?A.includes(i)||A.push(i):p?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=s,H(m,l)&&(m[l]=s)):x&&(l.value=s,e.k&&(d[e.k]=s))};s?(R.id=-1,ge(R,n)):R()}}}const ge=Rl;function cc(e){return fc(e)}function fc(e,t){const n=jr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:p,setScopeId:x=Te,insertStaticContent:R}=e,A=(f,u,h,g=null,v=null,_=null,S=!1,y=null,P=!!u.dynamicChildren)=>{if(f===u)return;f&&!Gt(f,u)&&(g=_n(f),Ne(f,v,_,!0),f=null),u.patchFlag===-2&&(P=!1,u.dynamicChildren=null);const{type:b,ref:E,shapeFlag:C}=u;switch(b){case dr:z(f,u,h,g);break;case wt:w(f,u,h,g);break;case Dn:f==null&&O(u,h,g,S);break;case ye:vn(f,u,h,g,v,_,S,y,P);break;default:C&1?Y(f,u,h,g,v,_,S,y,P):C&6?bn(f,u,h,g,v,_,S,y,P):(C&64||C&128)&&b.process(f,u,h,g,v,_,S,y,P,Ot)}E!=null&&v&&Vr(E,f&&f.ref,_,u||f,!u)},z=(f,u,h,g)=>{if(f==null)r(u.el=o(u.children),h,g);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},w=(f,u,h,g)=>{f==null?r(u.el=l(u.children||""),h,g):u.el=f.el},O=(f,u,h,g)=>{[f.el,f.anchor]=R(f.children,u,h,g,f.el,f.anchor)},L=({el:f,anchor:u},h,g)=>{let v;for(;f&&f!==u;)v=p(f),r(f,h,g),f=v;r(u,h,g)},T=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=p(f),a(f),f=h;a(u)},Y=(f,u,h,g,v,_,S,y,P)=>{S=S||u.type==="svg",f==null?le(u,h,g,v,_,S,y,P):xe(f,u,v,_,S,y,P)},le=(f,u,h,g,v,_,S,y)=>{let P,b;const{type:E,props:C,shapeFlag:M,transition:F,dirs:D}=f;if(P=f.el=s(f.type,_,C&&C.is,C),M&8?d(P,f.children):M&16&&Se(f.children,P,null,g,v,_&&E!=="foreignObject",S,y),D&&ft(f,null,g,"created"),ce(P,f,f.scopeId,S,g),C){for(const W in C)W!=="value"&&!Fn(W)&&i(P,W,null,C[W],_,f.children,g,v,Ue);"value"in C&&i(P,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Le(b,g,f)}D&&ft(f,null,g,"beforeMount");const V=uc(v,F);V&&F.beforeEnter(P),r(P,u,h),((b=C&&C.onVnodeMounted)||V||D)&&ge(()=>{b&&Le(b,g,f),V&&F.enter(P),D&&ft(f,null,g,"mounted")},v)},ce=(f,u,h,g,v)=>{if(h&&x(f,h),g)for(let _=0;_<g.length;_++)x(f,g[_]);if(v){let _=v.subTree;if(u===_){const S=v.vnode;ce(f,S,S.scopeId,S.slotScopeIds,v.parent)}}},Se=(f,u,h,g,v,_,S,y,P=0)=>{for(let b=P;b<f.length;b++){const E=f[b]=y?et(f[b]):Fe(f[b]);A(null,E,u,h,g,v,_,S,y)}},xe=(f,u,h,g,v,_,S)=>{const y=u.el=f.el;let{patchFlag:P,dynamicChildren:b,dirs:E}=u;P|=f.patchFlag&16;const C=f.props||q,M=u.props||q;let F;h&&ut(h,!1),(F=M.onVnodeBeforeUpdate)&&Le(F,h,u,f),E&&ft(u,f,h,"beforeUpdate"),h&&ut(h,!0);const D=v&&u.type!=="foreignObject";if(b?He(f.dynamicChildren,b,y,h,g,D,_):S||G(f,u,y,null,h,g,D,_,!1),P>0){if(P&16)Wt(y,u,C,M,h,g,v);else if(P&2&&C.class!==M.class&&i(y,"class",null,M.class,v),P&4&&i(y,"style",C.style,M.style,v),P&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const re=V[W],Oe=C[re],kt=M[re];(kt!==Oe||re==="value")&&i(y,re,Oe,kt,v,f.children,h,g,Ue)}}P&1&&f.children!==u.children&&d(y,u.children)}else!S&&b==null&&Wt(y,u,C,M,h,g,v);((F=M.onVnodeUpdated)||E)&&ge(()=>{F&&Le(F,h,u,f),E&&ft(u,f,h,"updated")},g)},He=(f,u,h,g,v,_,S)=>{for(let y=0;y<u.length;y++){const P=f[y],b=u[y],E=P.el&&(P.type===ye||!Gt(P,b)||P.shapeFlag&70)?m(P.el):h;A(P,b,E,null,g,v,_,S,!0)}},Wt=(f,u,h,g,v,_,S)=>{if(h!==g){if(h!==q)for(const y in h)!Fn(y)&&!(y in g)&&i(f,y,h[y],null,S,u.children,v,_,Ue);for(const y in g){if(Fn(y))continue;const P=g[y],b=h[y];P!==b&&y!=="value"&&i(f,y,b,P,S,u.children,v,_,Ue)}"value"in g&&i(f,"value",h.value,g.value)}},vn=(f,u,h,g,v,_,S,y,P)=>{const b=u.el=f?f.el:o(""),E=u.anchor=f?f.anchor:o("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,h,g),r(E,h,g),Se(u.children,h,E,v,_,S,y,P)):C>0&&C&64&&M&&f.dynamicChildren?(He(f.dynamicChildren,M,h,v,_,S,y),(u.key!=null||v&&u===v.subTree)&&Us(f,u,!0)):G(f,u,h,E,v,_,S,y,P)},bn=(f,u,h,g,v,_,S,y,P)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?v.ctx.activate(u,h,g,S,P):yr(u,h,g,v,_,S,P):$a(f,u,P)},yr=(f,u,h,g,v,_,S)=>{const y=f.component=Pc(f,g,v);if(Ms(f)&&(y.ctx.renderer=Ot),Sc(y),y.asyncDep){if(v&&v.registerDep(y,de),!f.el){const P=y.subTree=U(wt);w(null,P,u,h)}return}de(y,f,u,h,v,_,S)},$a=(f,u,h)=>{const g=u.component=f.component;if(Il(f,u,h))if(g.asyncDep&&!g.asyncResolved){te(g,u,h);return}else g.next=u,wl(g.update),g.update();else u.el=f.el,g.vnode=u},de=(f,u,h,g,v,_,S)=>{const y=()=>{if(f.isMounted){let{next:E,bu:C,u:M,parent:F,vnode:D}=f,V=E,W;ut(f,!1),E?(E.el=D.el,te(f,E,S)):E=D,C&&Bn(C),(W=E.props&&E.props.onVnodeBeforeUpdate)&&Le(W,F,E,D),ut(f,!0);const re=Sr(f),Oe=f.subTree;f.subTree=re,A(Oe,re,m(Oe.el),_n(Oe),f,v,_),E.el=re.el,V===null&&Tl(f,re.el),M&&ge(M,v),(W=E.props&&E.props.onVnodeUpdated)&&ge(()=>Le(W,F,E,D),v)}else{let E;const{el:C,props:M}=u,{bm:F,m:D,parent:V}=f,W=jn(u);if(ut(f,!1),F&&Bn(F),!W&&(E=M&&M.onVnodeBeforeMount)&&Le(E,V,u),ut(f,!0),C&&xr){const re=()=>{f.subTree=Sr(f),xr(C,f.subTree,f,v,null)};W?u.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=Sr(f);A(null,re,h,g,f,v,_),u.el=re.el}if(D&&ge(D,v),!W&&(E=M&&M.onVnodeMounted)){const re=u;ge(()=>Le(E,V,re),v)}(u.shapeFlag&256||V&&jn(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&ge(f.a,v),f.isMounted=!0,u=h=g=null}},P=f.effect=new pa(y,()=>wa(b),f.scope),b=f.update=()=>P.run();b.id=f.uid,ut(f,!0),b()},te=(f,u,h)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,ic(f,u.props,g,h),lc(f,u.children,h),Ut(),ri(),$t()},G=(f,u,h,g,v,_,S,y,P=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,C=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){yn(b,C,h,g,v,_,S,y,P);return}else if(M&256){lt(b,C,h,g,v,_,S,y,P);return}}F&8?(E&16&&Ue(b,v,_),C!==b&&d(h,C)):E&16?F&16?yn(b,C,h,g,v,_,S,y,P):Ue(b,v,_,!0):(E&8&&d(h,""),F&16&&Se(C,h,g,v,_,S,y,P))},lt=(f,u,h,g,v,_,S,y,P)=>{f=f||Et,u=u||Et;const b=f.length,E=u.length,C=Math.min(b,E);let M;for(M=0;M<C;M++){const F=u[M]=P?et(u[M]):Fe(u[M]);A(f[M],F,h,null,v,_,S,y,P)}b>E?Ue(f,v,_,!0,!1,C):Se(u,h,g,v,_,S,y,P,C)},yn=(f,u,h,g,v,_,S,y,P)=>{let b=0;const E=u.length;let C=f.length-1,M=E-1;for(;b<=C&&b<=M;){const F=f[b],D=u[b]=P?et(u[b]):Fe(u[b]);if(Gt(F,D))A(F,D,h,null,v,_,S,y,P);else break;b++}for(;b<=C&&b<=M;){const F=f[C],D=u[M]=P?et(u[M]):Fe(u[M]);if(Gt(F,D))A(F,D,h,null,v,_,S,y,P);else break;C--,M--}if(b>C){if(b<=M){const F=M+1,D=F<E?u[F].el:g;for(;b<=M;)A(null,u[b]=P?et(u[b]):Fe(u[b]),h,D,v,_,S,y,P),b++}}else if(b>M)for(;b<=C;)Ne(f[b],v,_,!0),b++;else{const F=b,D=b,V=new Map;for(b=D;b<=M;b++){const be=u[b]=P?et(u[b]):Fe(u[b]);be.key!=null&&V.set(be.key,b)}let W,re=0;const Oe=M-D+1;let kt=!1,Ka=0;const Kt=new Array(Oe);for(b=0;b<Oe;b++)Kt[b]=0;for(b=F;b<=C;b++){const be=f[b];if(re>=Oe){Ne(be,v,_,!0);continue}let Re;if(be.key!=null)Re=V.get(be.key);else for(W=D;W<=M;W++)if(Kt[W-D]===0&&Gt(be,u[W])){Re=W;break}Re===void 0?Ne(be,v,_,!0):(Kt[Re-D]=b+1,Re>=Ka?Ka=Re:kt=!0,A(be,u[Re],h,null,v,_,S,y,P),re++)}const Ga=kt?dc(Kt):Et;for(W=Ga.length-1,b=Oe-1;b>=0;b--){const be=D+b,Re=u[be],Va=be+1<E?u[be+1].el:g;Kt[b]===0?A(null,Re,h,Va,v,_,S,y,P):kt&&(W<0||b!==Ga[W]?ct(Re,h,Va,2):W--)}}},ct=(f,u,h,g,v=null)=>{const{el:_,type:S,transition:y,children:P,shapeFlag:b}=f;if(b&6){ct(f.component.subTree,u,h,g);return}if(b&128){f.suspense.move(u,h,g);return}if(b&64){S.move(f,u,h,Ot);return}if(S===ye){r(_,u,h);for(let C=0;C<P.length;C++)ct(P[C],u,h,g);r(f.anchor,u,h);return}if(S===Dn){L(f,u,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,u,h),ge(()=>y.enter(_),v);else{const{leave:C,delayLeave:M,afterLeave:F}=y,D=()=>r(_,u,h),V=()=>{C(_,()=>{D(),F&&F()})};M?M(_,D,V):V()}else r(_,u,h)},Ne=(f,u,h,g=!1,v=!1)=>{const{type:_,props:S,ref:y,children:P,dynamicChildren:b,shapeFlag:E,patchFlag:C,dirs:M}=f;if(y!=null&&Vr(y,null,h,f,!0),E&256){u.ctx.deactivate(f);return}const F=E&1&&M,D=!jn(f);let V;if(D&&(V=S&&S.onVnodeBeforeUnmount)&&Le(V,u,f),E&6)Co(f.component,h,g);else{if(E&128){f.suspense.unmount(h,g);return}F&&ft(f,null,u,"beforeUnmount"),E&64?f.type.remove(f,u,h,v,Ot,g):b&&(_!==ye||C>0&&C&64)?Ue(b,u,h,!1,!0):(_===ye&&C&384||!v&&E&16)&&Ue(P,u,h),g&&Ya(f)}(D&&(V=S&&S.onVnodeUnmounted)||F)&&ge(()=>{V&&Le(V,u,f),F&&ft(f,null,u,"unmounted")},h)},Ya=f=>{const{type:u,el:h,anchor:g,transition:v}=f;if(u===ye){Ao(h,g);return}if(u===Dn){T(f);return}const _=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:y}=v,P=()=>S(h,_);y?y(f.el,_,P):P()}else _()},Ao=(f,u)=>{let h;for(;f!==u;)h=p(f),a(f),f=h;a(u)},Co=(f,u,h)=>{const{bum:g,scope:v,update:_,subTree:S,um:y}=f;g&&Bn(g),v.stop(),_&&(_.active=!1,Ne(S,f,u,h)),y&&ge(y,u),ge(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ue=(f,u,h,g=!1,v=!1,_=0)=>{for(let S=_;S<f.length;S++)Ne(f[S],u,h,g,v)},_n=f=>f.shapeFlag&6?_n(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Wa=(f,u,h)=>{f==null?u._vnode&&Ne(u._vnode,null,null,!0):A(u._vnode||null,f,u,null,null,null,h),ri(),Os(),u._vnode=f},Ot={p:A,um:Ne,m:ct,r:Ya,mt:yr,mc:Se,pc:G,pbc:He,n:_n,o:e};let _r,xr;return t&&([_r,xr]=t(Ot)),{render:Wa,hydrate:_r,createApp:nc(Wa,_r)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Us(e,t,n=!1){const r=e.children,a=t.children;if(N(r)&&N(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=et(a[i]),o.el=s.el),n||Us(s,o)),o.type===dr&&(o.el=s.el)}}function dc(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const mc=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Zt=[];let Ce=null;function Z(e=!1){Zt.push(Ce=e?null:[])}function hc(){Zt.pop(),Ce=Zt[Zt.length-1]||null}let sn=1;function hi(e){sn+=e}function $s(e){return e.dynamicChildren=sn>0?Ce||Et:null,hc(),sn>0&&Ce&&Ce.push(e),e}function ee(e,t,n,r,a,i){return $s(B(e,t,n,r,a,i,!0))}function pc(e,t,n,r,a){return $s(U(e,t,n,r,a,!0))}function qr(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",Ys=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||ue(e)||j(e)?{i:we,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ys(t),ref:t&&Hn(t),scopeId:fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return o?(Aa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),sn>0&&!s&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const U=gc;function gc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===El)&&(e=wt),qr(e)){const o=jt(e,t,!0);return n&&Aa(o,n),sn>0&&!i&&Ce&&(o.shapeFlag&6?Ce[Ce.indexOf(e)]=o:Ce.push(o)),o.patchFlag|=-2,o}if(Ic(e)&&(e=e.__vccOpts),t){t=vc(t);let{class:o,style:l}=t;o&&!ae(o)&&(t.class=mn(o)),Q(l)&&(bs(l)&&!N(l)&&(l=oe({},l)),t.style=Pe(l))}const s=ae(e)?1:Nl(e)?128:mc(e)?64:Q(e)?4:j(e)?2:0;return B(e,t,n,r,a,s,i,!0)}function vc(e){return e?bs(e)||mr in e?oe({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?_c(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ys(o),ref:t&&t.ref?n&&a?N(a)?a.concat(Hn(t)):[a,Hn(t)]:Hn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function bc(e=" ",t=0){return U(dr,null,e,t)}function yc(e,t){const n=U(Dn,null,e);return n.staticCount=t,n}function Qt(e="",t=!1){return t?(Z(),pc(wt,null,e)):U(wt,null,e)}function Fe(e){return e==null||typeof e=="boolean"?U(wt):N(e)?U(ye,null,e.slice()):typeof e=="object"?et(e):U(dr,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Aa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Aa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(mr in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[bc(t)]):n=8);e.children=t,e.shapeFlag|=n}function _c(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=mn([t.class,r.class]));else if(a==="style")t.style=Pe([t.style,r.style]);else if(nr(a)){const i=t[a],s=r[a];s&&i!==s&&!(N(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Ee(e,t,7,[n,r])}const xc=Fs();let wc=0;function Pc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||xc,i={uid:wc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:js(r,a),emitsOptions:As(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ol.bind(null,i),e.ce&&e.ce(i),i}let se=null,Ca,At,pi="__VUE_INSTANCE_SETTERS__";(At=jr()[pi])||(At=jr()[pi]=[]),At.push(e=>se=e),Ca=e=>{At.length>1?At.forEach(t=>t(e)):At[0](e)};const zt=e=>{Ca(e),e.scope.on()},_t=()=>{se&&se.scope.off(),Ca(null)};function Ws(e){return e.vnode.shapeFlag&4}let on=!1;function Sc(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=Ws(e);ac(e,n,a,t),oc(e,r);const i=a?Oc(e,t):void 0;return on=!1,i}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ys(new Proxy(e.ctx,ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ac(e):null;zt(e),Ut();const i=nt(r,e,0,[e.props,a]);if($t(),_t(),ns(i)){if(i.then(_t,_t),t)return i.then(s=>{gi(e,s,t)}).catch(s=>{lr(s,e,0)});e.asyncDep=i}else gi(e,i,t)}else Ks(e,t)}function gi(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=ws(t)),Ks(e,n)}let vi;function Ks(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Oa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=oe(oe({isCustomElement:i,delimiters:o},s),l);r.render=vi(a,c)}}e.render=r.render||Te}{zt(e),Ut();try{Xl(e)}finally{$t(),_t()}}}function kc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function Ac(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return kc(e)},slots:e.slots,emit:e.emit,expose:t}}function hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ws(ys(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Cc(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Ic(e){return j(e)&&"__vccOpts"in e}const Ye=(e,t)=>bl(e,t,on);function Tc(e,t,n){const r=arguments.length;return r===2?Q(t)&&!N(t)?qr(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),U(e,t,n))}const Ec=Symbol.for("v-scx"),Mc=()=>zn(Ec),Nc="3.3.8",Rc="http://www.w3.org/2000/svg",mt=typeof document<"u"?document:null,bi=mt&&mt.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(Rc,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const o=bi.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fc=Symbol("_vtc");function Bc(e,t,n){const r=e[Fc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const jc=Symbol("_vod");function zc(e,t,n){const r=e.style,a=ae(n);if(n&&!a){if(t&&!ae(t))for(const i in t)n[i]==null&&Xr(r,i,"");for(const i in n)Xr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),jc in e&&(r.display=i)}}const yi=/\s*!important$/;function Xr(e,t,n){if(N(n))n.forEach(r=>Xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dc(e,t);yi.test(n)?e.setProperty(Ht(r),n.replace(yi,""),"important"):e[r]=n}}const _i=["Webkit","Moz","ms"],kr={};function Dc(e,t){const n=kr[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return kr[t]=r;r=sr(r);for(let a=0;a<_i.length;a++){const i=_i[a]+r;if(i in e)return kr[t]=i}return t}const xi="http://www.w3.org/1999/xlink";function Hc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xi,t.slice(6,t.length)):e.setAttributeNS(xi,t,n);else{const i=Uo(t);n==null||i&&!is(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Uc(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=is(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ct(e,t,n,r){e.addEventListener(t,n,r)}function $c(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function Yc(e,t,n,r,a=null){const i=e[wi]||(e[wi]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Wc(t);if(r){const c=i[t]=Vc(r,a);Ct(e,o,c,l)}else s&&($c(e,o,s,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function Wc(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Ar=0;const Kc=Promise.resolve(),Gc=()=>Ar||(Kc.then(()=>Ar=0),Ar=Date.now());function Vc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(qc(r,n.value),t,5,[r])};return n.value=e,n.attached=Gc(),n}function qc(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Si=/^on[a-z]/,Xc=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?Bc(e,r,a):t==="style"?zc(e,n,r):nr(t)?ua(t)||Yc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jc(e,t,r,a))?Uc(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hc(e,t,r,a))};function Jc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&ae(n)?!1:t in e}const Oi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>Bn(t,n):t};function Zc(e){e.target.composing=!0}function ki(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cr=Symbol("_assign"),Qc={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Cr]=Oi(a);const i=r||a.props&&a.props.type==="number";Ct(e,t?"change":"input",s=>{if(s.target.composing)return;let o=e.value;n&&(o=o.trim()),i&&(o=Br(o)),e[Cr](o)}),n&&Ct(e,"change",()=>{e.value=e.value.trim()}),t||(Ct(e,"compositionstart",Zc),Ct(e,"compositionend",ki),Ct(e,"change",ki))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Cr]=Oi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Br(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},ef=oe({patchProp:Xc},Lc);let Ai;function tf(){return Ai||(Ai=cc(ef))}const nf=(...e)=>{const t=tf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=rf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function rf(e){return ae(e)?document.querySelector(e):e}const ot=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},af={},sf={href:"https://github.com/virgs/mancala",class:"github-corner d-none d-lg-block","aria-label":"View source on GitHub"},of=yc('<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" data-v-2b9dbaf2><path style="transform:rotate(180deg) translate(-250px, -250px);" d="M0,0 L115,115 L250,250 L250,0 Z" data-v-2b9dbaf2></path><path style="transform:rotate(180deg) translate(-250px, -250px);" d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" data-v-2b9dbaf2></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" data-v-2b9dbaf2></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" data-v-2b9dbaf2></path></svg>',1),lf=[of];function cf(e,t){return Z(),ee("a",sf,lf)}const ff=ot(af,[["render",cf],["__scopeId","data-v-2b9dbaf2"]]),Ir=(e,t)=>{const n=[];return Array.from(Array(2).keys()).forEach(()=>{Array.from(Array(e)).forEach(()=>{n.push(t)}),n.push(0)}),n};class Tr{constructor(t){me(this,"board");me(this,"movesRecord");this.board=[...t],this.movesRecord=[]}getLastIncrementedPitId(){return this.movesRecord[this.movesRecord.length-1].pitId}getPitSeeds(t){return this.board[t]}setPitSeeds(t,n){const r=this.board[t];return this.board[t]=n,this.movesRecord.push({pitId:t,seeds:this.board[t]}),r}getBoard(){return this.board}transferSeeds(t,n){const r=this.board[t];this.setPitSeeds(t,0),this.incrementPitSeeds(n,r)}incrementPitSeeds(t,n=1){return this.setPitSeeds(t,n+this.board[t])}getMovesRecord(){return this.movesRecord}}var K=(e=>(e.TOP="TOP",e.BOTTOM="BOTTOM",e))(K||{});const Un=e=>e==="TOP"?"BOTTOM":"TOP";class pt{constructor(t){me(this,"boardLength");me(this,"totalStones");this.boardLength=t.length,this.totalStones=t.reduce((n,r)=>n+r,0)}getSideStorePitId(t){return t===K.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSideStorePitId(t){return t!==K.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSidePitId(t){return this.boardLength-2-t}isPitStore(t){return t===this.boardLength/2-1||t===this.boardLength-1}checkPitOwnership(t,n){return t===K.TOP&&n<this.boardLength/2||t===K.BOTTOM&&n>=this.boardLength/2}getNextPitId(t){return(t+1)%this.boardLength}}class Gs{constructor(t){me(this,"playerSide");this.playerSide=t}checkPlayerScore(t){return t[new pt(t).getSideStorePitId(this.playerSide)]}checkOppositePlayerScore(t){return t[new pt(t).getOppositeSideStorePitId(this.playerSide)]}getAvailableMovesForPlayer(t){const n=new pt(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(this.playerSide,i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}getAvailableMovesForOpponentPlayer(t){const n=new pt(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(Un(this.playerSide),i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}}class uf{constructor(t,n){me(this,"staticBoardAnalyser");me(this,"engineSettings");me(this,"movesHistory");this.staticBoardAnalyser=new pt(t),this.movesHistory=[],this.engineSettings=n||{}}makeMove(t,n){this.validateMove(t,n);const r=t.playerSide;this.movesHistory.push(t);const a=this.redistributeSeeds(t,n),i=a.getLastIncrementedPitId(),s=this.checkCapture(r,i,a.getBoard()),o=this.checkGameOver(r,s.getBoard());return o?{winningPlayer:o.winningPlayer,nextTurnPlayer:r,boardConfig:o.boardConfig,gameOver:!0,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(s.getMovesRecord()).concat(o.gameOverMovesRecord):void 0}:{nextTurnPlayer:this.checkNextPlayerTurn(r,i),boardConfig:s.getBoard(),gameOver:!1,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(s.getMovesRecord()):void 0}}redistributeSeeds(t,n){const r=new Tr(n);let a=t.pitId,i=r.setPitSeeds(a,0);for(;i>0;)a=this.staticBoardAnalyser.getNextPitId(a),!(this.staticBoardAnalyser.isPitStore(a)&&!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,a))&&(r.incrementPitSeeds(a),--i);return r}getMovesHistory(){return this.movesHistory}checkNextPlayerTurn(t,n){return this.staticBoardAnalyser.checkPitOwnership(t,n)&&this.staticBoardAnalyser.isPitStore(n)?t:Un(t)}checkCapture(t,n,r){const a=new Tr(r);if(this.staticBoardAnalyser.checkPitOwnership(t,n)&&a.getPitSeeds(n)===1&&!this.staticBoardAnalyser.isPitStore(n)){const i=this.staticBoardAnalyser.getOppositeSidePitId(n),s=a.getPitSeeds(i);if(s>0){this.movesHistory.push({playerSide:t,capturedSeeds:s,pitId:i});const o=this.staticBoardAnalyser.getSideStorePitId(t);a.transferSeeds(i,o),a.transferSeeds(n,o)}}return a}validateMove(t,n){if(!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,t.pitId))throw new Error(`Player '${t.playerSide}' cannot select an opponent's pit (${t.pitId})`);if(this.staticBoardAnalyser.isPitStore(t.pitId))throw new Error(`Player '${t.playerSide}' cannot select a store (${t.pitId})`);if(n[t.pitId]===0)throw new Error(`Player '${t.playerSide}' cannot select an empty pit (${t.pitId})`)}checkGameOver(t,n){const r=new Gs(t);if(r.getAvailableMovesForPlayer(n).length!==0&&r.getAvailableMovesForOpponentPlayer(n).length!==0)return;const a=r.checkPlayerScore(n),i=r.checkOppositePlayerScore(n),s=this.getGameOverMovesRecord(n,t);let o;return a>i?o=t:a<i&&(o=Un(t)),{gameOver:!0,boardConfig:s.getBoard(),gameOverMovesRecord:s.getMovesRecord(),winningPlayer:o}}getGameOverMovesRecord(t,n){const r=new Tr(t);if(this.engineSettings.gameOverCaptureVariation){const a=this.staticBoardAnalyser.getSideStorePitId(n);t.forEach(o=>{this.staticBoardAnalyser.checkPitOwnership(n,o)&&o!==a&&r.transferSeeds(o,a)});const i=Un(n),s=this.staticBoardAnalyser.getSideStorePitId(i);t.forEach(o=>{this.staticBoardAnalyser.checkPitOwnership(i,o)&&o!==s&&r.transferSeeds(o,s)})}return r}}class Jr{constructor(t,n){me(this,"side");me(this,"brain");this.side=t,this.brain=n}async selectNextMove(t){return this.brain.selectNextMove(this.side,t)}}var Me=(e=>(e[e.HUMAN=0]="HUMAN",e[e.AI=1]="AI",e))(Me||{});Object.keys(Me).filter(e=>isNaN(Number(e)));const df={style:{width:"100%",height:"100%",position:"relative"}},mf=Es({__name:"Pit",props:{index:{},store:{type:Boolean},side:{},seeds:{},ownerPlayerType:{},lastSelectedPitId:{},playingPlayerSide:{}},emits:["nextActionSelected"],setup(e,{emit:t}){const n=t,r=e,a=()=>Math.random()*25+25+"%",i={"border-bottom-left-radius":a(),"border-top-left-radius":a(),"border-bottom-right-radius":a(),"border-top-right-radius":a()},s=Pr(!1),o=Pr(!1),l=Pr(d());function c(){r.store||r.ownerPlayerType===Me.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&n("nextActionSelected",r.side,r.index)}Lt(()=>r.playingPlayerSide,()=>{l.value=d()}),Lt(()=>r.seeds,()=>{o.value=!0,setTimeout(()=>o.value=!1,200),l.value=d()});function d(){return r.ownerPlayerType===Me.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&!r.store}function m(){s.value=!0,l.value=d()}function p(){s.value=!1,l.value=d()}const x=Ye(()=>({"d-block":!0,hole:!0,number:!0,stonesNumberChangedAnimation:o.value,availableOption:l.value,lastSelectedPit:r.lastSelectedPitId===r.index,hovered:s.value&&l.value})),R=Ye(()=>{const A=r.side===K.BOTTOM?"var(--bottom-player-color)":"var(--top-player-color)";return{...i,"border-color":A,"box-shadow":"inset 7px 7px 0px var(--wooden-half-shade), 1px 1px 10px "+A,"padding-top":r.store?"20%":"5%"}});return(A,z)=>(Z(),ee("div",df,[B("span",{class:mn(x.value),style:Pe(R.value),onMouseenter:m,onMouseleave:p,onClick:c},bt(A.seeds),39)]))}});const hf=ot(mf,[["__scopeId","data-v-919f0070"]]),pf="/mancala/wooden-square-plank-bc8f16d6.png";let Er;const gf={name:"Board",props:{settings:Object,gameIsRunning:Boolean},components:{Pit:hf},emits:["animationIsRunning","gameOver","playingPlayerChanged"],setup(){return{PlayerSide:K}},data(){return{aiIsThinking:!1,accumulator:0,accumulatorColor:"",lastSelectedPitId:void 0,animationRunning:!1,board:Ir(6,4),playingPlayer:void 0,woodenPlank:pf}},watch:{settings(){this.settings&&(this.gameIsRunning||(this.board=Ir(this.settings.internalPockets,this.settings.seeds)))},gameIsRunning(){var e,t;this.gameIsRunning&&this.settings?(this.playingPlayer=(e=this.settings)==null?void 0:e.topPlayer,this.board=Ir(this.settings.internalPockets,this.settings.seeds),Er=new uf(this.board,{recordMoves:!0}),((t=this.playingPlayer)==null?void 0:t.brain.type)!==Me.HUMAN&&this.aiThinkAboutNextMove()):(this.lastSelectedPitId=void 0,this.animationRunning=!1,this.accumulator=0,this.playingPlayer=void 0)}},computed:{bottomSideStorePit(){return new pt(this.board).getSideStorePitId(K.BOTTOM)},topSideStorePit(){return new pt(this.board).getSideStorePitId(K.TOP)},spinningStyle(){var e;return{color:((e=this.playingPlayer)==null?void 0:e.side)===K.TOP?"var(--top-player-color)":"var(--bottom-player-color)"}},accumulatorClass(){return{"d-block":!0,number:!0,accumulator:!0,hole:!0,"accumulator-hole-showing":this.accumulator>=0}},accumulatorStyle(){return{color:this.accumulatorColor,"border-color":this.accumulatorColor}},topInternalPockets(){return this.board.filter((e,t)=>t<this.board.length/2-1).reverse()},bottomInternalPockets(){return this.board.filter((e,t)=>t>=this.board.length/2&&t<this.board.length-1)}},methods:{async aiThinkAboutNextMove(){this.aiIsThinking=!0;const e=await this.playingPlayer.selectNextMove(this.board);this.aiIsThinking=!1,this.updateBoard({playerSide:this.playingPlayer.side,pitId:e})},sleep(e){return new Promise(t=>setTimeout(()=>t(),e))},nextActionSelected(e,t){this.animationRunning||this.updateBoard({playerSide:e,pitId:t})},updateAnimationColor(e){switch(e){case K.TOP:this.accumulatorColor="var(--top-player-color)";break;case K.BOTTOM:this.accumulatorColor="var(--bottom-player-color)";break}},async updateBoard(e){var r;this.$emit("animationIsRunning",!0),this.lastSelectedPitId=e.pitId,this.updateAnimationColor(e.playerSide),this.animationRunning=!0,this.playingPlayer=void 0,this.accumulator=this.board[e.pitId];const t=Er.makeMove(e,this.board),n=[...t.movesRecord];for(let a of n){if(!this.gameIsRunning)return;this.board[a.pitId]=a.seeds,await this.sleep(((r=this.settings)==null?void 0:r.animationDelay)||100),--this.accumulator}this.finishUpdatingBoard(t)},finishUpdatingBoard(e){this.animationRunning=!1,this.$emit("animationIsRunning",!1),e.gameOver?this.$emit("gameOver",{winningPlayer:e.winningPlayer,movesHistory:Er.getMovesHistory(),board:this.board}):(this.playingPlayer=this.getBrainFromSide(e.nextTurnPlayer),this.$emit("playingPlayerChanged",this.playingPlayer),this.playingPlayer.brain.type!==Me.HUMAN&&this.aiThinkAboutNextMove())},getBrainFromSide(e){var t,n,r;return((t=this.settings)==null?void 0:t.topPlayer.side)===e?(n=this.settings)==null?void 0:n.topPlayer:(r=this.settings)==null?void 0:r.bottomPlayer}}};const vf=e=>(Pa("data-v-026af09c"),e=e(),Sa(),e),bf={class:"container-lg text-center",id:"boardContainer"},yf=["src"],_f={class:"accumulatorNumber number"},xf=vf(()=>B("span",{class:"visually-hidden"},"Loading...",-1)),wf=[xf],Pf={class:"container-fluid plank-board p-0"},Sf={class:"row g-2 h-100 mx-5 pl-3",style:{position:"relative",left:"1.125rem"}},Of={class:"col"},kf={class:"col-8"},Af={class:"row g-0 justify-content-center",style:{height:"50%"}},Cf={class:"col mx-auto"},If={class:"row g-0 justify-content-center",style:{height:"50%"}},Tf={class:"col mx-auto"},Ef={class:"col"};function Mf(e,t,n,r,a,i){var o,l,c,d,m,p;const s=je("Pit");return Z(),ee("div",bf,[B("img",{src:a.woodenPlank,class:"img-fluid w-100",alt:"wooden-square-plank"},null,8,yf),a.animationRunning&&a.accumulator>=0?(Z(),ee("span",{key:0,class:mn(i.accumulatorClass),style:Pe(i.accumulatorStyle)},[B("span",_f,bt(a.accumulator),1)],6)):Qt("",!0),a.aiIsThinking?(Z(),ee("div",{key:1,class:"spinner-border",style:Pe(i.spinningStyle),role:"status"},wf,4)):Qt("",!0),B("div",Pf,[B("div",Sf,[B("div",Of,[U(s,{seeds:a.board[i.topSideStorePit],index:i.topSideStorePit,playingPlayerSide:(o=a.playingPlayer)==null?void 0:o.side,store:!0,ownerPlayerType:(c=(l=n.settings)==null?void 0:l.topPlayer)==null?void 0:c.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.TOP},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])]),B("div",kf,[B("div",Af,[(Z(!0),ee(ye,null,Vn(i.topInternalPockets,(x,R)=>{var A,z,w;return Z(),ee("div",Cf,[U(s,{seeds:x,index:i.topInternalPockets.length-1-R,store:!1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(z=(A=n.settings)==null?void 0:A.topPlayer)==null?void 0:z.brain.type,onNextActionSelected:i.nextActionSelected,playingPlayerSide:(w=a.playingPlayer)==null?void 0:w.side,side:r.PlayerSide.TOP},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","onNextActionSelected","playingPlayerSide","side"])])}),256))]),B("div",If,[(Z(!0),ee(ye,null,Vn(i.bottomInternalPockets,(x,R)=>{var A,z,w;return Z(),ee("div",Tf,[U(s,{seeds:x,index:R+i.bottomInternalPockets.length+1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(z=(A=n.settings)==null?void 0:A.bottomPlayer)==null?void 0:z.brain.type,playingPlayerSide:(w=a.playingPlayer)==null?void 0:w.side,store:!1,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","playingPlayerSide","onNextActionSelected","side"])])}),256))])]),B("div",Ef,[U(s,{seeds:a.board[i.bottomSideStorePit],index:i.bottomSideStorePit,playingPlayerSide:(d=a.playingPlayer)==null?void 0:d.side,store:!0,ownerPlayerType:(p=(m=n.settings)==null?void 0:m.bottomPlayer)==null?void 0:p.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])])])])])}const Nf=ot(gf,[["render",Mf],["__scopeId","data-v-026af09c"]]),Rf=()=>{const e={moves:0,capture:0,capturedSeeds:0};return{[K.TOP]:{...e},[K.BOTTOM]:{...e}}},Lf={name:"GameOver",props:["result"],emits:["modalIsGone"],setup(){return{PlayerSide:K}},data(){return{rows:[]}},mounted(){const e=document.getElementById("myModal");e==null||e.addEventListener("hidden.bs.modal",t=>{console.log("timeout"),this.$emit("modalIsGone"),this.rows=[]})},watch:{result(){this.rows=this.createRows(),new bootstrap.Modal("#myModal",{}).show()}},computed:{rowStyle(){return e=>({color:e===K.TOP?"var(--top-player-color)":"var(--bottom-player-color)","text-shadow":"1px 1px black"})}},methods:{createRows(){const e=Rf(),t=this.result,n=new Gs(K.TOP),r=[];t.movesHistory.forEach(i=>{++e[i.playerSide].moves,i.capturedSeeds&&(++e[i.playerSide].capture,e[i.playerSide].capturedSeeds+=i.capturedSeeds)});const a=(i,s=2)=>i.toString().padStart(s);return r.push({title:"Score",topPlayer:a(n.checkPlayerScore(t.board)),bottomPlayer:a(n.checkOppositePlayerScore(t.board))}),r.push({title:"Moves",topPlayer:a(e[K.TOP].moves),bottomPlayer:a(e[K.BOTTOM].moves)}),r.push({title:"Captures (seeds)",topPlayer:a(e[K.TOP].capture)+` (${a(e[K.TOP].capturedSeeds,1)})`,bottomPlayer:a(e[K.BOTTOM].capture)+` (${a(e[K.BOTTOM].capturedSeeds,1)})`}),r}}};const Ff=e=>(Pa("data-v-d7b8a878"),e=e(),Sa(),e),Bf={class:"modal",tabindex:"-1",id:"myModal"},jf={class:"modal-dialog modal-dialog-centered modal-lg"},zf={class:"modal-content"},Df=Ff(()=>B("div",{class:"modal-header pb-1",style:{"border-width":"5px","border-color":"var(--vt-c-black)"}},[B("h1",{class:"fs-1 modal-title text",style:{"text-align":"center"}},"Game Stats")],-1)),Hf={class:"modal-body"},Uf={class:"table"},$f={class:"text fs-2",style:{"text-align":"center"}},Yf={scope:"row"};function Wf(e,t,n,r,a,i){return Z(),ee("div",Bf,[B("div",jf,[B("div",zf,[Df,B("div",Hf,[B("table",Uf,[B("tbody",null,[(Z(!0),ee(ye,null,Vn(a.rows,s=>(Z(),ee("tr",$f,[B("td",{style:Pe(i.rowStyle(r.PlayerSide.TOP))},bt(s.topPlayer),5),B("th",Yf,bt(s.title),1),B("td",{style:Pe(i.rowStyle(r.PlayerSide.BOTTOM))},bt(s.bottomPlayer),5)]))),256))])])])])])])}const Kf=ot(Lf,[["render",Wf],["__scopeId","data-v-d7b8a878"]]);class Jn{constructor(){me(this,"type",Me.HUMAN)}selectNextMove(t,n){throw new Error("Human brain should read next move from input")}getLabel(){return"Human"}}function Gf(){return new Worker("/mancala/AiWorker-d38bad70.js")}var Ia=(e=>(e[e.EASY=0]="EASY",e[e.MEDIUM=1]="MEDIUM",e[e.HARD=2]="HARD",e))(Ia||{});const Vf=Object.keys(Ia).filter(e=>isNaN(Number(e)));class qf{constructor(t){me(this,"brainLevel");me(this,"aiWorker",new Gf);me(this,"type",Me.AI);this.brainLevel=t}async selectNextMove(t,n){return new Promise(r=>{this.aiWorker.onmessage=async a=>r(a.data.bestPocketIdToPlay),this.aiWorker.postMessage({playingPlayer:t,brainLevel:this.brainLevel,boardConfig:JSON.stringify(n)})})}getLabel(){return Ia[this.brainLevel]}}const Xf={name:"BrainSelector",props:["gameIsRunning","side"],emits:["brainSelected"],setup(){return{PlayerType:Me}},data(){return{selectedBrain:new Jn}},mounted(){this.brainSelected()},computed:{currentBrainIcon(){return this.selectedBrain.type===Me.HUMAN?"fa-brain":"fa-robot"},currentBrainLabel(){return this.selectedBrain.type===Me.HUMAN?this.selectedBrain.getLabel():this.aiBrainLabel(this.selectedBrain.getLabel())},availableAiBrainsLabel(){return Vf.map(e=>this.aiBrainLabel(e))},labelText(){const e={color:"var(--top-player-color)",direction:"ltr",textAlign:"left",border:"none"};return this.side===K.BOTTOM&&(e.color="var(--bottom-player-color)",e.direction="rtl",e.textAlign="right"),e}},methods:{aiBrainLabel(e){return"AI - "+e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},brainSelected(e){e!==void 0?this.selectedBrain=new qf(e):this.selectedBrain=new Jn,this.$emit("brainSelected",{brain:this.selectedBrain,side:this.side})}}};const Vs=e=>(Pa("data-v-ae877cef"),e=e(),Sa(),e),Jf={class:"dropdown"},Zf=["disabled"],Qf={class:"dropdown-menu p-0"},eu=Vs(()=>B("span",null,"Human",-1)),tu=Vs(()=>B("li",null,[B("hr",{class:"dropdown-divider my-1"})],-1)),nu=["onClick"];function ru(e,t,n,r,a,i){const s=je("font-awesome-icon");return Z(),ee("span",Jf,[B("button",{disabled:n.gameIsRunning,class:"btn btn-sm dropdown-toggle text",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:Pe(i.labelText)},[U(s,{icon:"fa-solid "+i.currentBrainIcon,style:{margin:"0 7px",border:"none"}},null,8,["icon"]),B("span",null,bt(i.currentBrainLabel),1)],12,Zf),B("ul",Qf,[B("li",null,[B("button",{onClick:t[0]||(t[0]=o=>i.brainSelected()),class:"dropdown-item btn-sm text px-2",style:Pe(i.labelText)},[U(s,{icon:"fa-solid fa-brain",style:{margin:"0 7px"}}),eu],4)]),tu,(Z(!0),ee(ye,null,Vn(i.availableAiBrainsLabel,(o,l)=>(Z(),ee("li",null,[B("button",{onClick:c=>i.brainSelected(l),class:"dropdown-item btn-sm text px-2",style:Pe(i.labelText)},[U(s,{icon:"fa-solid fa-robot",style:{margin:"0 7px"}}),B("span",null,bt(o),1)],12,nu)]))),256))])])}const au=ot(Xf,[["render",ru],["__scopeId","data-v-ae877cef"]]),iu={name:"Counter",props:["value","disabled","icon","iconColor","config","flip"],emits:["input"],data(){return{counter:this.value}},mounted(){console.log("show")},computed:{style(){let e=this.iconColor||"var(--vt-c-black-soft)";return this.disabled&&(e="var(--disabled-color)"),{margin:"10px",color:e}}},watch:{counter(){this.$emit("input",Number(this.counter))}}};const su={class:"qty"},ou={class:"d-flex",style:{color:"var(--vt-c-black-mute)"}},lu=["disabled","min","step","max"];function cu(e,t,n,r,a,i){const s=je("font-awesome-icon");return Z(),ee("div",su,[B("div",ou,[Fl(B("input",{disabled:n.disabled,type:"range",class:"form-range range-cust",min:n.config.min,step:n.config.step!==void 0?n.config.step:1,max:n.config.max,"onUpdate:modelValue":t[0]||(t[0]=o=>a.counter=o),style:{margin:"5px"}},null,8,lu),[[Qc,a.counter]]),U(s,{icon:n.icon,style:Pe(i.style),flip:n.flip,class:"icon"},null,8,["icon","style","flip"])])])}const fu=ot(iu,[["render",cu]]),uu="/mancala/VS-95e5eab8.svg",du={max:2100,min:100,step:200},mu={max:7,min:3,step:1},hu={max:8,min:5,step:1},pu={internalPockets:6,seeds:4,animationSpeed:1e3,topPlayer:new Jr(K.TOP,new Jn),bottomPlayer:new Jr(K.BOTTOM,new Jn)},gu={name:"NavBar",components:{BrainSelector:au,Counter:fu},props:["gameIsRunning"],setup(){return{PlayerSide:K}},emits:["startGame","abortGame","settingsChanged"],data(){return{seedsCounter:mu,pitsCounter:hu,animationCounter:du,settings:pu,versusIcon:uu}},watch:{settings:{handler(){this.settingsChanged()},deep:!0}},methods:{startGame(){this.$emit("startGame")},stopGame(){this.$emit("abortGame")},brainSelected(e){const t=new Jr(e.side,e.brain);e.side===K.TOP?this.settings.topPlayer=t:this.settings.bottomPlayer=t},settingsChanged(){const e=this.animationCounter.max+this.animationCounter.min-this.settings.animationSpeed;this.$emit("settingsChanged",{topPlayer:this.settings.topPlayer,bottomPlayer:this.settings.bottomPlayer,animationDelay:e,internalPockets:this.settings.internalPockets,seeds:this.settings.seeds})}}},vu={class:"navbar w-100 border-bottom border-body",style:{"background-color":"var(--nav-bar-color)"}},bu={class:"container-fluid"},yu={class:"row w-100 g-1 justify-content-between"},_u={class:"col-12 col-sm-6 col-lg-5",style:{"text-align":"center"}},xu=["src"],wu={key:0,class:"col-6 col-sm-2 col-lg-2"},Pu={key:1,class:"col-6 col-sm-2 col-lg-2"},Su={key:2,class:"col-12 col-sm-4 col-lg-3"},Ou={class:"col-12 col-sm-2 col-lg-3 d-flex justify-content-end"},ku=B("span",{class:"text"}," Abort ",-1),Au=B("span",{class:"text"}," Start ",-1);function Cu(e,t,n,r,a,i){const s=je("BrainSelector"),o=je("Counter"),l=je("font-awesome-icon");return Z(),ee("nav",vu,[B("div",bu,[B("div",yu,[B("div",_u,[U(s,{side:r.PlayerSide.TOP,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"]),B("img",{src:a.versusIcon,class:"img-fluid",alt:"versus",style:{width:"2.5em !important"}},null,8,xu),U(s,{side:r.PlayerSide.BOTTOM,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"])]),n.gameIsRunning?Qt("",!0):(Z(),ee("div",wu,[U(o,{value:a.settings.seeds,icon:"fa-solid fa-egg",config:a.seedsCounter,iconColor:"var(--wooden-shade)",onInput:t[0]||(t[0]=c=>a.settings.seeds=c)},null,8,["value","config"])])),n.gameIsRunning?Qt("",!0):(Z(),ee("div",Pu,[U(o,{value:a.settings.internalPockets,icon:"fa-solid fa-rainbow",flip:"vertical",config:a.pitsCounter,iconColor:"var(--wooden-shade)",onInput:t[1]||(t[1]=c=>a.settings.internalPockets=c)},null,8,["value","config"])])),n.gameIsRunning?(Z(),ee("div",Su,[U(o,{value:a.settings.animationSpeed,icon:"fa-solid fa-bolt",config:a.animationCounter,iconColor:"var(--bolt-color)",onInput:t[2]||(t[2]=c=>a.settings.animationSpeed=c)},null,8,["value","config"])])):Qt("",!0),B("div",Ou,[n.gameIsRunning?(Z(),ee("button",{key:0,onClick:t[3]||(t[3]=(...c)=>i.stopGame&&i.stopGame(...c)),class:"btn btn-sm btn-danger"},[ku,U(l,{icon:"fa-solid fa-stop",style:{margin:"0 10px"}})])):(Z(),ee("button",{key:1,onClick:t[4]||(t[4]=(...c)=>i.startGame&&i.startGame(...c)),class:"btn btn-sm btn-success"},[Au,U(l,{icon:"fa-solid fa-play",style:{margin:"0 10px"}})]))])])])])}const Iu=ot(gu,[["render",Cu]]),Tu={name:"App",components:{NavBar:Iu,Board:Nf,GameOver:Kf,GithubCorner:ff},data(){return{gameOverResult:void 0,gameIsRunning:!1,settings:void 0}},methods:{gameOver(e){this.gameOverResult=e},gameOverModalIsGone(){this.gameIsRunning=!1},startGame(){this.gameIsRunning=!0},abortGame(){this.gameIsRunning=!1},settingsChanged(e){console.log(e),this.settings=e}}};function Eu(e,t,n,r,a,i){const s=je("NavBar"),o=je("Board"),l=je("GameOver"),c=je("GithubCorner");return Z(),ee("main",null,[U(s,{gameIsRunning:a.gameIsRunning,onStartGame:i.startGame,onAbortGame:i.abortGame,onSettingsChanged:i.settingsChanged},null,8,["gameIsRunning","onStartGame","onAbortGame","onSettingsChanged"]),U(o,{gameIsRunning:a.gameIsRunning,settings:a.settings,onGameOver:i.gameOver},null,8,["gameIsRunning","settings","onGameOver"]),U(l,{result:a.gameOverResult,onModalIsGone:i.gameOverModalIsGone},null,8,["result","onModalIsGone"]),U(c)])}const Mu=ot(Tu,[["render",Eu]]);function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){"@babel/helpers - typeof";return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function Nu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ru(e,t,n){return t&&Ii(e.prototype,t),n&&Ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e,t){return Fu(e)||ju(e,t)||qs(e,t)||Du()}function hn(e){return Lu(e)||Bu(e)||qs(e)||zu()}function Lu(e){if(Array.isArray(e))return Zr(e)}function Fu(e){if(Array.isArray(e))return e}function Bu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ju(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function qs(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Du(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ti=function(){},Ea={},Xs={},Js=null,Zs={mark:Ti,measure:Ti};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Xs=document),typeof MutationObserver<"u"&&(Js=MutationObserver),typeof performance<"u"&&(Zs=performance)}catch{}var Hu=Ea.navigator||{},Ei=Hu.userAgent,Mi=Ei===void 0?"":Ei,at=Ea,J=Xs,Ni=Js,An=Zs;at.document;var Je=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Qs=~Mi.indexOf("MSIE")||~Mi.indexOf("Trident/"),Cn,In,Tn,En,Mn,Ge="___FONT_AWESOME___",Qr=16,eo="fa",to="svg-inline--fa",Pt="data-fa-i2svg",ea="data-fa-pseudo-element",Uu="data-fa-pseudo-element-pending",Ma="data-prefix",Na="data-icon",Ri="fontawesome-i2svg",$u="async",Yu=["HTML","HEAD","STYLE","SCRIPT"],no=function(){try{return!0}catch{return!1}}(),X="classic",ne="sharp",Ra=[X,ne];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var ln=pn((Cn={},ie(Cn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(Cn,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Cn)),cn=pn((In={},ie(In,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(In,ne,{solid:"fass",regular:"fasr",light:"fasl"}),In)),fn=pn((Tn={},ie(Tn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Tn,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),Wu=pn((En={},ie(En,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(En,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),En)),Ku=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ro="fa-layers-text",Gu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vu=pn((Mn={},ie(Mn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Mn,ne,{900:"fass",400:"fasr",300:"fasl"}),Mn)),ao=[1,2,3,4,5,6,7,8,9,10],qu=ao.concat([11,12,13,14,15,16,17,18,19,20]),Xu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(cn[X]).map(un.add.bind(un));Object.keys(cn[ne]).map(un.add.bind(un));var Ju=[].concat(Ra,hn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY]).concat(ao.map(function(e){return"".concat(e,"x")})).concat(qu.map(function(e){return"w-".concat(e)})),en=at.FontAwesomeConfig||{};function Zu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var ed=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ed.forEach(function(e){var t=Ta(e,2),n=t[0],r=t[1],a=Qu(Zu(n));a!=null&&(en[r]=a)})}var io={styleDefault:"solid",familyDefault:"classic",cssPrefix:eo,replacementClass:to,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Dt=k(k({},io),en);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var I={};Object.keys(io).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Dt[e]=n,tn.forEach(function(r){return r(I)})},get:function(){return Dt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,tn.forEach(function(n){return n(I)})},get:function(){return Dt.cssPrefix}});at.FontAwesomeConfig=I;var tn=[];function td(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var Qe=Qr,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nd(e){if(!(!e||!Je)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var rd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=rd[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function La(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function so(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ad(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(so(e[n]),'" ')},"").trim()}function pr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function id(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function sd(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Qs?l+="translate(".concat(t.x/Qe-r/2,"em, ").concat(t.y/Qe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Qe,"em), calc(-50% + ").concat(t.y/Qe,"em)) "):l+="translate(".concat(t.x/Qe,"em, ").concat(t.y/Qe,"em) "),l+="scale(".concat(t.size/Qe*(t.flipX?-1:1),", ").concat(t.size/Qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var od=`:root, :host {
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
}`;function oo(){var e=eo,t=to,n=I.cssPrefix,r=I.replacementClass,a=od;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Li=!1;function Mr(){I.autoAddCss&&!Li&&(nd(oo()),Li=!0)}var ld={mixout:function(){return{dom:{css:oo,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Ve=at||{};Ve[Ge]||(Ve[Ge]={});Ve[Ge].styles||(Ve[Ge].styles={});Ve[Ge].hooks||(Ve[Ge].hooks={});Ve[Ge].shims||(Ve[Ge].shims=[]);var Ie=Ve[Ge],lo=[],cd=function e(){J.removeEventListener("DOMContentLoaded",e),Qn=1,lo.map(function(t){return t()})},Qn=!1;Je&&(Qn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Qn||J.addEventListener("DOMContentLoaded",cd));function fd(e){Je&&(Qn?setTimeout(e,0):lo.push(e))}function gn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?so(e):"<".concat(t," ").concat(ad(r),">").concat(i.map(gn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ud=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},Nr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?ud(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function dd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=dd(e);return t.length===1?t[0].toString(16):null}function md(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Bi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Bi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Bi(t)):Ie.styles[e]=k(k({},Ie.styles[e]||{}),i),e==="fas"&&na("fa",t)}var Nn,Rn,Ln,It=Ie.styles,hd=Ie.shims,pd=(Nn={},ie(Nn,X,Object.values(fn[X])),ie(Nn,ne,Object.values(fn[ne])),Nn),Ba=null,co={},fo={},uo={},mo={},ho={},gd=(Rn={},ie(Rn,X,Object.keys(ln[X])),ie(Rn,ne,Object.keys(ln[ne])),Rn);function vd(e){return~Ju.indexOf(e)}function bd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vd(a)?a:null}var po=function(){var t=function(i){return Nr(It,function(s,o,l){return s[l]=Nr(o,i,{}),s},{})};co=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),fo=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),ho=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in It||I.autoFetchSvg,r=Nr(hd,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});uo=r.names,mo=r.unicodes,Ba=gr(I.styleDefault,{family:I.familyDefault})};td(function(e){Ba=gr(e.styleDefault,{family:I.familyDefault})});po();function ja(e,t){return(co[e]||{})[t]}function yd(e,t){return(fo[e]||{})[t]}function vt(e,t){return(ho[e]||{})[t]}function go(e){return uo[e]||{prefix:null,iconName:null}}function _d(e){var t=mo[e],n=ja("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Ba}var za=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=ln[r][e],i=cn[r][e]||cn[r][a],s=e in Ie.styles?e:null;return i||s||null}var ji=(Ln={},ie(Ln,X,Object.keys(fn[X])),ie(Ln,ne,Object.keys(fn[ne])),Ln);function vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,X,"".concat(I.cssPrefix,"-").concat(X)),ie(t,ne,"".concat(I.cssPrefix,"-").concat(ne)),t),s=null,o=X;(e.includes(i[X])||e.some(function(c){return ji[X].includes(c)}))&&(o=X),(e.includes(i[ne])||e.some(function(c){return ji[ne].includes(c)}))&&(o=ne);var l=e.reduce(function(c,d){var m=bd(I.cssPrefix,d);if(It[d]?(d=pd[o].includes(d)?Wu[o][d]:d,s=d,c.prefix=d):gd[o].indexOf(d)>-1?(s=d,c.prefix=gr(d,{family:o})):m?c.iconName=m:d!==I.replacementClass&&d!==i[X]&&d!==i[ne]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var p=s==="fa"?go(c.iconName):{},x=vt(c.prefix,c.iconName);p.prefix&&(s=null),c.iconName=p.iconName||x||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!It.far&&It.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ne&&(It.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=vt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=it()||"fas"),l}var xd=function(){function e(){Nu(this,e),this.definitions={}}return Ru(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=k(k({},n.definitions[o]||{}),s[o]),na(o,s[o]);var l=fn[X][o];l&&na(l,s[o]),po()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),zi=[],Tt={},Ft={},wd=Object.keys(Ft);function Pd(e,t){var n=t.mixoutsTo;return zi=e,Tt={},Object.keys(Ft).forEach(function(r){wd.indexOf(r)===-1&&delete Ft[r]}),zi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Zn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Tt[s]||(Tt[s]=[]),Tt[s].push(i[s])})}r.provides&&r.provides(Ft)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function St(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(t)return t=vt(n,t)||t,Fi(vo.definitions,n,t)||Fi(Ie.styles,n,t)}var vo=new xd,Sd=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,St("noAuto")},Od={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Je?(St("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,fd(function(){Ad({autoReplaceSvgRoot:n}),St("watch",t)})}},kd={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:vt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Ku))){var a=vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:vt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:vt(i,t)||t}}}},_e={noAuto:Sd,config:I,dom:Od,parse:kd,library:vo,findIconDefinition:aa,toHtml:gn},Ad=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ie.styles).length>0||I.autoFetchSvg)&&Je&&I.autoReplaceSvg&&_e.dom.i2svg({node:r})};function br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return gn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Je){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Cd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(Fa(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=pr(k(k({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Id(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},a),{},{id:s}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,p=e.watchable,x=p===void 0?!1:p,R=r.found?r:n,A=R.width,z=R.height,w=a==="fak",O=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(xe){return m.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(m.classes).join(" "),L={children:[],attributes:k(k({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(z)})},T=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(A/z*16*.0625,"em")}:{};x&&(L.attributes[Pt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||dn())},children:[l]}),delete L.attributes.title);var Y=k(k({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:k(k({},T),m.styles)}),le=r.found&&n.found?qe("generateAbstractMask",Y)||{children:[],attributes:{}}:qe("generateAbstractIcon",Y)||{children:[],attributes:{}},ce=le.children,Se=le.attributes;return Y.children=ce,Y.attributes=Se,o?Id(Y):Cd(Y)}function Di(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=k(k(k({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[Pt]="");var d=k({},s.styles);Fa(a)&&(d.transform=sd({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=pr(d);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Td(e){var t=e.content,n=e.title,r=e.extra,a=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=pr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Rr=Ie.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Ta(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Ed={found:!1,width:512,height:512};function Md(e,t){!no&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function sa(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=go(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Rr[t]&&Rr[t][e]){var s=Rr[t][e];return r(ia(s))}Md(e,t),r(k(k({},Ed),{},{icon:I.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Hi=function(){},oa=I.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Hi,measure:Hi},Xt='FA "6.4.2"',Nd=function(t){return oa.mark("".concat(Xt," ").concat(t," begins")),function(){return bo(t)}},bo=function(t){oa.mark("".concat(Xt," ").concat(t," ends")),oa.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},Ha={begin:Nd,end:bo},$n=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(Pt):null;return typeof t=="string"}function Rd(e){var t=e.getAttribute?e.getAttribute(Ma):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function Ld(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Fd(){if(I.autoReplaceSvg===!0)return Yn.replace;var e=Yn[I.autoReplaceSvg];return e||Yn.replace}function Bd(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function jd(e){return J.createElement(e)}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Bd:jd:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(yo(s,{ceFn:r}))}),a}function zd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Yn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(yo(a),n)}),n.getAttribute(Pt)===null&&I.keepOriginalSource){var r=J.createComment(zd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~La(n).indexOf(I.replacementClass))return Yn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===I.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return gn(o)}).join(`
`);n.setAttribute(Pt,""),n.innerHTML=s}};function $i(e){e()}function _o(e,t){var n=typeof t=="function"?t:$n;if(e.length===0)n();else{var r=$i;I.mutateApproach===$u&&(r=at.requestAnimationFrame||$i),r(function(){var a=Fd(),i=Ha.begin("mutate");e.map(a),i(),n()})}}var Ua=!1;function xo(){Ua=!0}function la(){Ua=!1}var er=null;function Yi(e){if(Ni&&I.observeMutations){var t=e.treeCallback,n=t===void 0?$n:t,r=e.nodeCallback,a=r===void 0?$n:r,i=e.pseudoElementsCallback,s=i===void 0?$n:i,o=e.observeMutationsRoot,l=o===void 0?J:o;er=new Ni(function(c){if(!Ua){var d=it();Yt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ui(m.addedNodes[0])&&(I.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Ui(m.target)&&~Xu.indexOf(m.attributeName))if(m.attributeName==="class"&&Rd(m.target)){var p=vr(La(m.target)),x=p.prefix,R=p.iconName;m.target.setAttribute(Ma,x||d),R&&m.target.setAttribute(Na,R)}else Ld(m.target)&&a(m.target)})}}),Je&&er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Dd(){er&&er.disconnect()}function Hd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Ud(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vr(La(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yd(a.prefix,e.innerText)||ja(a.prefix,ta(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function $d(e){var t=Yt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ud(e),r=n.iconName,a=n.prefix,i=n.rest,s=$d(e),o=ra("parseNodeAttributes",{},e),l=t.styleParser?Hd(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Wd=Ie.styles;function wo(e){var t=I.autoReplaceSvg==="nest"?Wi(e,{styleParser:!1}):Wi(e);return~t.extra.classes.indexOf(ro)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}var st=new Set;Ra.map(function(e){st.add("fa-".concat(e))});Object.keys(ln[X]).map(st.add.bind(st));Object.keys(ln[ne]).map(st.add.bind(st));st=hn(st);function Ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Je)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Ri,"-").concat(m))},a=function(m){return n.remove("".concat(Ri,"-").concat(m))},i=I.autoFetchSvg?st:Ra.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Wd));i.includes("fa")||i.push("fa");var s=[".".concat(ro,":not([").concat(Pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(Pt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Yt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ha.begin("onTree"),c=o.reduce(function(d,m){try{var p=wo(m);p&&d.push(p)}catch(x){no||x.name==="MissingIcon"&&console.error(x)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(p){_o(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(p){l(),m(p)})})}function Kd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wo(e).then(function(n){n&&_o([n],t)})}function Gd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,k(k({},n),{},{mask:a}))}}var Vd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ze:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,p=m===void 0?null:m,x=n.titleId,R=x===void 0?null:x,A=n.classes,z=A===void 0?[]:A,w=n.attributes,O=w===void 0?{}:w,L=n.styles,T=L===void 0?{}:L;if(t){var Y=t.prefix,le=t.iconName,ce=t.icon;return br(k({type:"icon"},t),function(){return St("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(p?O["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||dn()):(O["aria-hidden"]="true",O.focusable="false")),Da({icons:{main:ia(ce),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:k(k({},ze),a),symbol:s,title:p,maskId:d,titleId:R,extra:{attributes:O,styles:T,classes:z}})})}},qd={mixout:function(){return{icon:Gd(Vd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ki,n.nodeCallback=Kd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,s=i===void 0?function(){}:i;return Ki(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,p=r.extra;return new Promise(function(x,R){Promise.all([sa(a,o),d.iconName?sa(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var z=Ta(A,2),w=z[0],O=z[1];x([n,Da({icons:{main:w,mask:O},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:p,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=pr(o);l.length>0&&(a.style=l);var c;return Fa(s)&&(c=qe("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Xd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return br({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(hn(i)).join(" ")},children:s}]})}}}},Jd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return br({type:"counter",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),Td({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(hn(o))}})})}}}},Zd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ze:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,p=r.styles,x=p===void 0?{}:p;return br({type:"text",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),Di({content:n,transform:k(k({},ze),i),title:o,extra:{attributes:m,styles:x,classes:["".concat(I.cssPrefix,"-layers-text")].concat(hn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Qs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Di({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Qd=new RegExp('"',"ug"),Gi=[1105920,1112319];function em(e){var t=e.replace(Qd,""),n=md(t,0),r=n>=Gi[0]&&n<=Gi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function Vi(e,t){var n="".concat(Uu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Yt(e.children),s=i.filter(function(ce){return ce.getAttribute(ea)===t})[0],o=at.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Gu),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ne:X,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[p][l[2].toLowerCase()]:Vu[p][c],R=em(m),A=R.value,z=R.isSecondary,w=l[0].startsWith("FontAwesome"),O=ja(x,A),L=O;if(w){var T=_d(A);T.iconName&&T.prefix&&(O=T.iconName,x=T.prefix)}if(O&&!z&&(!s||s.getAttribute(Ma)!==x||s.getAttribute(Na)!==L)){e.setAttribute(n,L),s&&e.removeChild(s);var Y=Yd(),le=Y.extra;le.attributes[ea]=t,sa(O,x).then(function(ce){var Se=Da(k(k({},Y),{},{icons:{main:ce,mask:za()},prefix:x,iconName:L,extra:le,watchable:!0})),xe=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=Se.map(function(He){return gn(He)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function tm(e){return Promise.all([Vi(e,"::before"),Vi(e,"::after")])}function nm(e){return e.parentNode!==document.head&&!~Yu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qi(e){if(Je)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(nm).map(tm),a=Ha.begin("searchPseudoElements");xo(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var rm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;I.searchPseudoElements&&qi(a)}}},Xi=!1,am={mixout:function(){return{dom:{unwatch:function(){xo(),Xi=!0}}}},hooks:function(){return{bootstrap:function(){Yi(ra("mutationObserverCallbacks",{}))},noAuto:function(){Dd()},watch:function(n){var r=n.observeMutationsRoot;Xi?la():Yi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},im={mixout:function(){return{parse:{transform:function(n){return Ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},p={transform:"translate(".concat(s/2*-1," -256)")},x={outer:o,inner:m,path:p};return{tag:"g",attributes:k({},x.outer),children:[{tag:"g",attributes:k({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),x.path)}]}]}}}},Lr={x:0,y:0,width:"100%",height:"100%"};function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function sm(e){return e.tag==="g"?e.children:[e]}var om={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(s){return s.trim()})):za();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,p=s.icon,x=id({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:k(k({},Lr),{},{fill:"white"})},A=d.children?{children:d.children.map(Zi)}:{},z={tag:"g",attributes:k({},x.inner),children:[Zi(k({tag:d.tag,attributes:k(k({},d.attributes),x.path)},A))]},w={tag:"g",attributes:k({},x.outer),children:[z]},O="mask-".concat(o||dn()),L="clip-".concat(o||dn()),T={tag:"mask",attributes:k(k({},Lr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,w]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:sm(p)},T]};return r.push(Y,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(O,")")},Lr)}),{children:r,attributes:a}}}},lm={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=k(k({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:k(k({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:k(k({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},cm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},fm=[ld,qd,Xd,Jd,Zd,rm,am,im,om,lm,cm];Pd(fm,{mixoutsTo:_e});_e.noAuto;_e.config;var um=_e.library;_e.dom;var ca=_e.parse;_e.findIconDefinition;_e.toHtml;var dm=_e.icon;_e.layer;_e.text;_e.counter;function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tr(e){"@babel/helpers - typeof";return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tr(e)}function pe(e,t,n){return t=gm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hm(e,t){if(e==null)return{};var n=mm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gm(e){var t=pm(e,"string");return typeof t=="symbol"?t:String(t)}var vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Po={exports:{}};(function(e){(function(t){var n=function(w,O,L){if(!c(O)||m(O)||p(O)||x(O)||l(O))return O;var T,Y=0,le=0;if(d(O))for(T=[],le=O.length;Y<le;Y++)T.push(n(w,O[Y],L));else{T={};for(var ce in O)Object.prototype.hasOwnProperty.call(O,ce)&&(T[w(ce,L)]=n(w,O[ce],L))}return T},r=function(w,O){O=O||{};var L=O.separator||"_",T=O.split||/(?=[A-Z])/;return w.split(T).join(L)},a=function(w){return R(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(O,L){return L?L.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var O=a(w);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(w,O){return r(w,O).toLowerCase()},o=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return o.call(w)=="[object Array]"},m=function(w){return o.call(w)=="[object Date]"},p=function(w){return o.call(w)=="[object RegExp]"},x=function(w){return o.call(w)=="[object Boolean]"},R=function(w){return w=w-0,w===w},A=function(w,O){var L=O&&"process"in O?O.process:O;return typeof L!="function"?w:function(T,Y){return L(T,w,Y)}},z={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(w,O){return n(A(a,O),w)},decamelizeKeys:function(w,O){return n(A(s,O),w,O)},pascalizeKeys:function(w,O){return n(A(i,O),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(vm)})(Po);var bm=Po.exports,ym=["class","style"];function _m(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=bm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function xm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return So(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=xm(d);break;case"style":l.style=_m(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=hm(n,ym);return Tc(e.tag,We(We(We({},t),{},{class:a.class,style:We(We({},a.style),s)},a.attrs),o),r)}var Oo=!1;try{Oo=!0}catch{}function wm(){if(!Oo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function Pm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function es(e){if(e&&tr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(tr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Sm=Es({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ye(function(){return es(t.icon)}),i=Ye(function(){return Fr("classes",Pm(t))}),s=Ye(function(){return Fr("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),o=Ye(function(){return Fr("mask",es(t.mask))}),l=Ye(function(){return dm(a.value,We(We(We(We({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Lt(l,function(d){if(!d)return wm("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=Ye(function(){return l.value?So(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Om={prefix:"fas",iconName:"rainbow",icon:[640,512,[127752],"f75b","M320 96C178.6 96 64 210.6 64 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C0 175.3 143.3 32 320 32s320 143.3 320 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-70.7 57.3-128 128-128s128 57.3 128 128v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-35.3-28.7-64-64-64zM160 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-88.4-71.6-160-160-160s-160 71.6-160 160z"]},km={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},Am={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Cm={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},Im={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},Tm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Em={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Mm={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"]},Nm={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]};um.add(Nm,Mm,Im,Tm,Cm,Em,Am,km,Om);const ko=nf(Mu);ko.component("font-awesome-icon",Sm);ko.mount("#app");
