"use strict";(()=>{var Tt=Object.defineProperty,me=Object.defineProperties,fe=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors;var wt=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var Pt=r=>{throw TypeError(r)};var Ct=(r,t,e)=>t in r?Tt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,J=(r,t)=>{for(var e in t||(t={}))$e.call(t,e)&&Ct(r,e,t[e]);if(wt)for(var e of wt(t))_e.call(t,e)&&Ct(r,e,t[e]);return r},Q=(r,t)=>me(r,ge(t));var $=(r,t,e,s)=>{for(var i=s>1?void 0:s?fe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Tt(t,e,i),i};var It=(r,t,e)=>t.has(r)||Pt("Cannot "+e);var v=(r,t,e)=>(It(r,t,"read from private field"),e?e.call(r):t.get(r)),y=(r,t,e)=>t.has(r)?Pt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),A=(r,t,e,s)=>(It(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);var H=(r,t,e)=>new Promise((s,i)=>{var o=a=>{try{l(e.next(a))}catch(c){i(c)}},n=a=>{try{l(e.throw(a))}catch(c){i(c)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,n);l((e=e.apply(r,t)).next())});var Z=globalThis,X=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),Ht=new WeakMap,V=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(X&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ht.set(e,t))}return t}toString(){return this.cssText}},Ut=r=>new V(typeof r=="string"?r:r+"",void 0,ut),U=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new V(e,r,ut)},mt=(r,t)=>{if(X)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=Z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Y=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Ut(e)})(r):r;var{is:ve,defineProperty:ye,getOwnPropertyDescriptor:Ae,getOwnPropertyNames:be,getOwnPropertySymbols:Ee,getPrototypeOf:xe}=Object,C=globalThis,Rt=C.trustedTypes,Se=Rt?Rt.emptyScript:"",ft=C.reactiveElementPolyfillSupport,j=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Se:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},tt=(r,t)=>!ve(r,t),kt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:tt},Nt,Ot;(Nt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ot=C.litPropertyMetadata)!=null||(C.litPropertyMetadata=new WeakMap);var x=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=kt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ye(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var n;let{get:i,set:o}=(n=Ae(this.prototype,t))!=null?n:{get(){return this[e]},set(l){this[e]=l}};return{get(){return i==null?void 0:i.call(this)},set(l){let a=i==null?void 0:i.call(this);o.call(this,l),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:kt}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=xe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,s=[...be(e),...Ee(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Y(i))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:q;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:tt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){var i;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(t)}_$ET(){return H(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,l]of o)l.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],l)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}},Lt;x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[j("elementProperties")]=new Map,x[j("finalized")]=new Map,ft==null||ft({ReactiveElement:x}),((Lt=C.reactiveElementVersions)!=null?Lt:C.reactiveElementVersions=[]).push("2.0.4");var K=globalThis,et=K.trustedTypes,Dt=et?et.createPolicy("lit-html",{createHTML:r=>r}):void 0,_t="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+S,we=`<${vt}>`,N=document,W=()=>N.createComment(""),G=r=>r===null||typeof r!="object"&&typeof r!="function",yt=Array.isArray,Kt=r=>yt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Mt=/>/g,R=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,jt=/"/g,Wt=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),T=At(1),Le=At(2),De=At(3),w=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),qt=new WeakMap,k=N.createTreeWalker(N,129);function Gt(r,t){if(!yt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}var Ft=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=z;for(let l=0;l<e;l++){let a=r[l],c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===z?p[1]==="!--"?n=Bt:p[1]!==void 0?n=Mt:p[2]!==void 0?(Wt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=R):p[3]!==void 0&&(n=R):n===R?p[0]===">"?(n=i!=null?i:z,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?R:p[3]==='"'?jt:Vt):n===jt||n===Vt?n=R:n===Bt||n===Mt?n=z:(n=R,i=void 0);let d=n===R&&r[l+1].startsWith("/>")?" ":"";o+=n===z?a+we:h>=0?(s.push(c),a.slice(0,h)+_t+a.slice(h)+S+d):a+S+(h===-2?l:d)}return[Gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},F=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[c,p]=Ft(t,e);if(this.el=r.createElement(c,s),k.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=k.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(_t)){let u=p[n++],d=i.getAttribute(h).split(S),f=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:f[2],strings:d,ctor:f[1]==="."?it:f[1]==="?"?rt:f[1]==="@"?nt:L}),i.removeAttribute(h)}else h.startsWith(S)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(Wt.test(i.tagName)){let h=i.textContent.split(S),u=h.length-1;if(u>0){i.textContent=et?et.emptyScript:"";for(let d=0;d<u;d++)i.append(h[d],W()),k.nextNode(),a.push({type:2,index:++o});i.append(h[u],W())}}}else if(i.nodeType===8)if(i.data===vt)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(S,h+1))!==-1;)a.push({type:7,index:o}),h+=S.length-1}o++}}static createElement(t,e){let s=N.createElement("template");return s.innerHTML=t,s}};function O(r,t,e=r,s){var n,l,a;if(t===w)return t;let i=s!==void 0?(n=e.o)==null?void 0:n[s]:e.l,o=G(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?((a=e.o)!=null?a:e.o=[])[s]=i:e.l=i),i!==void 0&&(t=O(r,i._$AS(r,t.values),i,s)),t}var st=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,i=((c=t==null?void 0:t.creationScope)!=null?c:N).importNode(e,!0);k.currentNode=i;let o=k.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new B(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new ot(o,this,t)),this._$AV.push(p),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=k.nextNode(),n++)}return k.currentNode=N,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class r{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this.v}constructor(t,e,s,i){var o;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=(o=i==null?void 0:i.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),G(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=F.createElement(Gt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{let n=new st(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=qt.get(t.strings);return e===void 0&&qt.set(t.strings,e=new F(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(W()),this.O(W()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=O(this,t,e,0),n=!G(t)||t!==this._$AH&&t!==w,n&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=O(this,l[s+a],e,a),c===w&&(c=this._$AH[a]),n||(n=!G(c)||c!==this._$AH[a]),c===g?t=g:t!==g&&(t+=(c!=null?c:"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},it=class extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},rt=class extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},nt=class extends L{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=O(this,t,e,0))!=null?n:g)===w)return;let s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}},Jt={M:_t,P:S,A:vt,C:1,L:Ft,R:st,D:Kt,V:O,I:B,H:L,N:rt,U:nt,B:it,F:ot},$t=K.litHtmlPolyfillSupport,zt;$t==null||$t(F,B),((zt=K.litHtmlVersions)!=null?zt:K.litHtmlVersions=[]).push("3.2.0");var Qt=(r,t,e)=>{var o,n;let s=(o=e==null?void 0:e.renderBefore)!=null?o:t,i=s._$litPart$;if(i===void 0){let l=(n=e==null?void 0:e.renderBefore)!=null?n:null;s._$litPart$=i=new B(t.insertBefore(W(),l),l,void 0,e!=null?e:{})}return i._$AI(r),i};var b=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return w}},Zt;b._$litElement$=!0,b.finalized=!0,(Zt=globalThis.litElementHydrateSupport)==null||Zt.call(globalThis,{LitElement:b});var bt=globalThis.litElementPolyfillSupport;bt==null||bt({LitElement:b});var Xt;((Xt=globalThis.litElementVersions)!=null?Xt:globalThis.litElementVersions=[]).push("4.1.0");var at=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Ce={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:tt},Te=(r=Ce,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function P(r){return(t,e)=>typeof e=="object"?Te(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?Q(J({},s),{wrapped:!0}):s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}function Et(r){return P(Q(J({},r),{state:!0,attribute:!1}))}var D=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function lt(r,t){return(e,s,i)=>{let o=n=>{var l,a;return(a=(l=n.renderRoot)==null?void 0:l.querySelector(r))!=null?a:null};if(t){let{get:n,set:l}=typeof s=="object"?e:i!=null?i:(()=>{let a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return D(e,s,{get(){let a=n.call(this);return a===void 0&&(a=o(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return D(e,s,{get(){return o(this)}})}}var Yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},te=r=>(...t)=>({_$litDirective$:r,values:t}),ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Pe}=Jt;var ee=()=>document.createComment(""),M=(r,t,e)=>{var o;let s=r._$AA.parentNode,i=t===void 0?r._$AB:t._$AA;if(e===void 0){let n=s.insertBefore(ee(),i),l=s.insertBefore(ee(),i);e=new Pe(n,l,r,r.options)}else{let n=e._$AB.nextSibling,l=e._$AM,a=l!==r;if(a){let c;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(c=r._$AU)!==l._$AU&&e._$AP(c)}if(n!==i||a){let c=e._$AA;for(;c!==n;){let p=c.nextSibling;s.insertBefore(c,i),c=p}}}return e},I=(r,t,e=r)=>(r._$AI(t,e),r),Ie={},se=(r,t=Ie)=>r._$AH=t,ie=r=>r._$AH,ct=r=>{var s;(s=r._$AP)==null||s.call(r,!1,!0);let t=r._$AA,e=r._$AB.nextSibling;for(;t!==e;){let i=t.nextSibling;t.remove(),t=i}};var re=(r,t,e)=>{let s=new Map;for(let i=t;i<=e;i++)s.set(r[i],i);return s},ne=te(class extends ht{constructor(r){if(super(r),r.type!==Yt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let i=[],o=[],n=0;for(let l of r)i[n]=s?s(l,n):n,o[n]=e(l,n),n++;return{values:o,keys:i}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,s]){var xt;let i=ie(r),{values:o,keys:n}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=n,o;let l=(xt=this.ut)!=null?xt:this.ut=[],a=[],c,p,h=0,u=i.length-1,d=0,f=o.length-1;for(;h<=u&&d<=f;)if(i[h]===null)h++;else if(i[u]===null)u--;else if(l[h]===n[d])a[d]=I(i[h],o[d]),h++,d++;else if(l[u]===n[f])a[f]=I(i[u],o[f]),u--,f--;else if(l[h]===n[f])a[f]=I(i[h],o[f]),M(r,a[f+1],i[h]),h++,f--;else if(l[u]===n[d])a[d]=I(i[u],o[d]),M(r,i[h],i[u]),u--,d++;else if(c===void 0&&(c=re(n,d,f),p=re(l,h,u)),c.has(l[h]))if(c.has(l[u])){let E=p.get(n[d]),pt=E!==void 0?i[E]:null;if(pt===null){let St=M(r,i[h]);I(St,o[d]),a[d]=St}else a[d]=I(pt,o[d]),M(r,i[h],pt),i[E]=null;d++}else ct(i[u]),u--;else ct(i[h]),h++;for(;d<=f;){let E=M(r,a[f+1]);I(E,o[d]),a[d++]=E}for(;h<=u;){let E=i[h++];E!==null&&ct(E)}return this.ut=n,se(r,a),w}});var dt=U`
  fieldset {
    padding: 0.35rem 0.75rem 0.625rem;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.19;
    /* margin: 0; */
    margin: 0.25rem;
    color: var(--ml-color);
  }
  button,
  input {
    overflow: visible; /* Show overflow in Edge. */
  }
  input[type="text"],
  input:not([type]),
  input[type="password"] {
    min-width: 2.75rem;
    min-height: calc(2.75rem - 6px); /* text has 2px border and 1px padding */
  }
  button,
  select {
    text-transform: none; /* Remove inheritance of text transform in Edge. */
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* Allow styling these types in iOS and Safari. */
  }
  button {
    border: 1px solid var(--ml-color);
    border-radius: 0.25rem;

    background: var(--ml-background-color);
    color: var(--ml-color);

    cursor: pointer;

    padding: 0.25rem 0.5rem;

    text-decoration: none;
    --webkit-appearance: button;
    white-space: nowrap;
    /* min-width: 2.75rem; */
    min-width: 6ch;
    min-height: 2.75rem;

    outline: 3px solid var(blue);
  }
  button[disabled] {
    /* opacity: 0.75; */
    border-color: var(--ml-disabled-color);
    color: var(--ml-disabled-color);
    pointer-events: none;
  }
  button:hover {
    border-color: var(--ml-highlight-color);
    color: var(--ml-highlight-color);
  }
  button:active {
    /* pressed */
    background-color: var(--ml-light-bg-color);
    border-color: var(--ml-highlight-color);
    color: var(--ml-highlight-color);
  }
`;var oe,ae,le,he,m=class extends b{constructor(){super(...arguments);y(this,oe,!1);y(this,ae,[]);y(this,le,!1);y(this,he);this._nextId=1}get hideChecked(){return v(this,oe)}set hideChecked(e){A(this,oe,e)}get listItems(){return v(this,ae)}set listItems(e){A(this,ae,e)}get addButtonEnabled(){return v(this,le)}set addButtonEnabled(e){A(this,le,e)}get _input(){return v(this,he)}set _input(e){A(this,he,e)}render(){return T`
      <label>
        <input
          type="checkbox"
          @change=${this._onHideCheckedCheckboxChange}
          ?checked=${this.hideChecked}
        />
        Hide Checked Items
      </label>
      <hr />
      ${this._genItemListHtml()}
      <hr />
      <div class="bottomBar">
        <input
          id="newitem"
          class="grow"
          @keydown=${this._onAddInputKeyDown}
          @input=${this._onAddInputInput}
        />
        <button
          part="add-button"
          @mousedown=${this._addItem}
          ?disabled=${!this.addButtonEnabled}
        >
          Add
        </button>
      </div>
    `}_genItemListHtml(){let e=this.hideChecked?this.listItems.filter(o=>!o.checked):this.listItems;if(e.length===0)return T`<slot name="empty"></slot>`;let s=o=>o.id,i=o=>T`
      <li class=${o.checked?"checked":""}>
        <input
          type="checkbox"
          ?checked=${o.checked}
          @change=${n=>this._onItemCheckboxChange(o,n)}
        />

        <ml-text-edit
          @change=${n=>this._onItemTextChange(o,n)}
          text=${o.text}
        >
        </ml-text-edit>

        <button @mousedown=${()=>this._deleteItem(o.id)}>Delete</button>
      </li>
    `;return T`
      <ul @change=${this._onItemTextChange}>
        ${ne(e,s,i)}
      </ul>
    `}_onHideCheckedCheckboxChange(e){return H(this,null,function*(){this.hideChecked=e.target.checked,yield this.updateComplete,this.dispatchEvent(new CustomEvent(m.HIDE_CHECKED_CHANGE,{bubbles:!0,composed:!0,detail:{hideChecked:this.hideChecked}}))})}_onAddInputKeyDown(e){e.code==="Enter"&&this.addButtonEnabled&&this._addItem()}_isAddInputValid(){let e=this._input.value.trim();return typeof e=="string"&&e.length>0}_onAddInputInput(){this.addButtonEnabled=this._isAddInputValid()}_onItemTextChange(e,s){e.text=s.target.text,s.stopPropagation(),this.dispatchEvent(new CustomEvent(m.ITEM_CHANGE,{bubbles:!0,composed:!0,detail:{item:e}}))}_onItemCheckboxChange(e,s){e.checked=s.target.checked,s.stopPropagation(),this.dispatchEvent(new CustomEvent(m.ITEM_CHANGE,{bubbles:!0,composed:!0,detail:{item:e}})),this.requestUpdate()}_addItem(){let e={id:this._nextId++,text:this._input.value,checked:!1};this.listItems=[...this.listItems,e],this._input.value="",this.addButtonEnabled=!1,this.dispatchEvent(new CustomEvent(m.ITEM_ADD,{bubbles:!0,composed:!0,detail:{item:e}}))}_deleteItem(e){let s=null;this.listItems=this.listItems.filter(i=>e===i.id?(s=i,!1):!0),this.dispatchEvent(new CustomEvent(m.ITEM_DELETE,{bubbles:!0,composed:!0,detail:{item:s}}))}};oe=new WeakMap,ae=new WeakMap,le=new WeakMap,he=new WeakMap,m.HIDE_CHECKED_CHANGE="hideCheckedChange",m.ITEM_ADD="itemAdd",m.ITEM_CHANGE="itemChange",m.ITEM_DELETE="itemDelete",m.styles=[dt,U`
      ul {
        padding: 0;
        list-style-type: none;
      }
      li {
        display: flex;
        align-content: center;
      }
      input[type="checkbox"] {
        margin-right: 1rem;
      }
      li > ml-text-edit {
        flex-grow: 1;
      }
      .checked {
        color: #777;
      }
      .bottomBar {
        display: flex;
        align-content: center;
      }
      .grow {
        flex-grow: 1;
      }
    `],$([P({type:Boolean,reflect:!0})],m.prototype,"hideChecked",1),$([Et()],m.prototype,"listItems",1),$([Et()],m.prototype,"addButtonEnabled",1),$([lt("#newitem")],m.prototype,"_input",1),m=$([at("ml-checklist")],m);var ce,de,pe,ue,_=class extends b{constructor(){super(...arguments);y(this,ce,!1);y(this,de,"");y(this,pe,!1);y(this,ue)}get editing(){return v(this,ce)}set editing(e){A(this,ce,e)}get text(){return v(this,de)}set text(e){A(this,de,e)}get disabled(){return v(this,pe)}set disabled(e){A(this,pe,e)}get _input(){return v(this,ue)}set _input(e){A(this,ue,e)}updated(e){super.updated(e),e.has("editing")&&this.editing&&this._input.select()}render(){return this.editing?T`
      <input
        class="grow"
        type="text"
        value="${this.text}"
        autofocus
        @change=${this._onInputChange}
        @keydown=${this._onInputKeyDown}
      />
      <button
        @mousedown=${()=>this._finishEditing()}
        style="text-decoration-line: none;"
      >
        Save
      </button>
    `:T`
        <div class="grow textContainer" @click=${()=>this.editing=!0}>
          ${this.text}
        </div>
        <button @click=${()=>this.editing=!0}>Edit</button>
      `}_onInputChange(){this._finishEditing()}_onInputKeyDown(e){e.code==="Escape"&&this._finishEditing(!0)}_finishEditing(e){return H(this,null,function*(){if(!this.editing)return;let s=!1;!e&&this.text!==this._input.value&&(this.text=this._input.value,s=!0),this.editing=!1,s&&(yield this.updateComplete,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))})}};ce=new WeakMap,de=new WeakMap,pe=new WeakMap,ue=new WeakMap,_.styles=[dt,U`
      :host {
        display: flex;
        align-content: center;
      }
      .grow {
        flex-grow: 1;
      }
      .textContainer {
        display: flex;
        align-items: center;
        align-content: center;
        margin-left: 0.5rem;
      }
      button {
        min-width: 6ch;
      }
    `],$([P({attribute:"editing",type:Boolean,reflect:!0})],_.prototype,"editing",1),$([P({attribute:"text"})],_.prototype,"text",1),$([P({type:Boolean})],_.prototype,"disabled",1),$([lt("input")],_.prototype,"_input",1),_=$([at("ml-text-edit")],_);var ti=m,ei=_;})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
