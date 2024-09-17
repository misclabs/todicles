"use strict";(()=>{var z=globalThis,W=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),Tt=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(W&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Tt.set(e,t))}return t}toString(){return this.cssText}},Mt=r=>new O(typeof r=="string"?r:r+"",void 0,yt),S=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new O(e,r,yt)},vt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},F=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Mt(e)})(r):r;var{is:Xt,defineProperty:Yt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:se,getPrototypeOf:ie}=Object,K=globalThis,Ut=K.trustedTypes,re=Ut?Ut.emptyScript:"",oe=K.reactiveElementPolyfillSupport,H=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?re:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},G=(r,t)=>!Xt(r,t),kt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=kt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=te(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i?.call(this)},set(n){let l=i?.call(this);o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??kt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=ie(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,s=[...ee(e),...se(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(F(i))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=i,this[i]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??G)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[H("elementProperties")]=new Map,$[H("finalized")]=new Map,oe?.({ReactiveElement:$}),(K.reactiveElementVersions??=[]).push("2.0.4");var bt=globalThis,J=bt.trustedTypes,It=J?J.createPolicy("lit-html",{createHTML:r=>r}):void 0,Et="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,wt="?"+y,ne=`<${wt}>`,T=document,L=()=>T.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",xt=Array.isArray,Lt=r=>xt(r)||typeof r?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Ot=/>/g,C=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ht=/'/g,Nt=/"/g,Dt=/^(?:script|style|textarea|title)$/i,St=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),E=St(1),ge=St(2),$e=St(3),v=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Bt=new WeakMap,P=T.createTreeWalker(T,129);function jt(r,t){if(!xt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return It!==void 0?It.createHTML(t):t}var qt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=B;for(let l=0;l<e;l++){let a=r[l],d,u,h=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===B?u[1]==="!--"?n=Rt:u[1]!==void 0?n=Ot:u[2]!==void 0?(Dt.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=C):u[3]!==void 0&&(n=C):n===C?u[0]===">"?(n=i??B,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?C:u[3]==='"'?Nt:Ht):n===Nt||n===Ht?n=C:n===Rt||n===Ot?n=B:(n=C,i=void 0);let c=n===C&&r[l+1].startsWith("/>")?" ":"";o+=n===B?a+ne:h>=0?(s.push(d),a.slice(0,h)+Et+a.slice(h)+y+c):a+y+(h===-2?l:c)}return[jt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},j=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[d,u]=qt(t,e);if(this.el=r.createElement(d,s),P.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=P.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Et)){let p=u[n++],c=i.getAttribute(h).split(y),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:m[2],strings:c,ctor:m[1]==="."?Z:m[1]==="?"?X:m[1]==="@"?Y:U}),i.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(Dt.test(i.tagName)){let h=i.textContent.split(y),p=h.length-1;if(p>0){i.textContent=J?J.emptyScript:"";for(let c=0;c<p;c++)i.append(h[c],L()),P.nextNode(),a.push({type:2,index:++o});i.append(h[p],L())}}}else if(i.nodeType===8)if(i.data===wt)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}};function M(r,t,e=r,s){if(t===v)return t;let i=s!==void 0?e.o?.[s]:e.l,o=D(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e.o??=[])[s]=i:e.l=i),i!==void 0&&(t=M(r,i._$AS(r,t.values),i,s)),t}var Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);P.currentNode=i;let o=P.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new I(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new tt(o,this,t)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(o=P.nextNode(),n++)}return P.currentNode=T,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},I=class r{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),D(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=j.createElement(jt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new Q(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Bt.get(t.strings);return e===void 0&&Bt.set(t.strings,e=new j(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(L()),this.O(L()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this.v=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=M(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{let l=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=M(this,l[s+a],e,a),d===v&&(d=this._$AH[a]),n||=!D(d)||d!==this._$AH[a],d===f?t=f:t!==f&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Z=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},X=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},Y=class extends U{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??f)===v)return;let s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}},Vt={M:Et,P:y,A:wt,C:1,L:qt,R:Q,D:Lt,V:M,I,H:U,N:X,U:Y,B:Z,F:tt},ae=bt.litHtmlPolyfillSupport;ae?.(j,I),(bt.litHtmlVersions??=[]).push("3.2.0");var zt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new I(t.insertBefore(L(),o),o,void 0,e??{})}return i._$AI(r),i};var _=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return v}};_._$litElement$=!0,_.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:_});var le=globalThis.litElementPolyfillSupport;le?.({LitElement:_});(globalThis.litElementVersions??=[]).push("4.1.0");var et=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var he={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:G},ce=(r=he,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function w(r){return(t,e)=>typeof e=="object"?ce(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}function Ct(r){return w({...r,state:!0,attribute:!1})}var k=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function st(r,t){return(e,s,i)=>{let o=n=>n.renderRoot?.querySelector(r)??null;if(t){let{get:n,set:l}=typeof s=="object"?e:i??(()=>{let a=Symbol();return{get(){return this[a]},set(d){this[a]=d}}})();return k(e,s,{get(){let a=n.call(this);return a===void 0&&(a=o(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return k(e,s,{get(){return o(this)}})}}var Wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ft=r=>(...t)=>({_$litDirective$:r,values:t}),it=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:de}=Vt;var Kt=()=>document.createComment(""),R=(r,t,e)=>{let s=r._$AA.parentNode,i=t===void 0?r._$AB:t._$AA;if(e===void 0){let o=s.insertBefore(Kt(),i),n=s.insertBefore(Kt(),i);e=new de(o,n,r,r.options)}else{let o=e._$AB.nextSibling,n=e._$AM,l=n!==r;if(l){let a;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(a=r._$AU)!==n._$AU&&e._$AP(a)}if(o!==i||l){let a=e._$AA;for(;a!==o;){let d=a.nextSibling;s.insertBefore(a,i),a=d}}}return e},x=(r,t,e=r)=>(r._$AI(t,e),r),pe={},Gt=(r,t=pe)=>r._$AH=t,Jt=r=>r._$AH,rt=r=>{r._$AP?.(!1,!0);let t=r._$AA,e=r._$AB.nextSibling;for(;t!==e;){let s=t.nextSibling;t.remove(),t=s}};var Qt=(r,t,e)=>{let s=new Map;for(let i=t;i<=e;i++)s.set(r[i],i);return s},Zt=Ft(class extends it{constructor(r){if(super(r),r.type!==Wt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let i=[],o=[],n=0;for(let l of r)i[n]=s?s(l,n):n,o[n]=e(l,n),n++;return{values:o,keys:i}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,s]){let i=Jt(r),{values:o,keys:n}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=n,o;let l=this.ut??=[],a=[],d,u,h=0,p=i.length-1,c=0,m=o.length-1;for(;h<=p&&c<=m;)if(i[h]===null)h++;else if(i[p]===null)p--;else if(l[h]===n[c])a[c]=x(i[h],o[c]),h++,c++;else if(l[p]===n[m])a[m]=x(i[p],o[m]),p--,m--;else if(l[h]===n[m])a[m]=x(i[h],o[m]),R(r,a[m+1],i[h]),h++,m--;else if(l[p]===n[c])a[c]=x(i[p],o[c]),R(r,i[h],i[p]),p--,c++;else if(d===void 0&&(d=Qt(n,c,m),u=Qt(l,h,p)),d.has(l[h]))if(d.has(l[p])){let g=u.get(n[c]),$t=g!==void 0?i[g]:null;if($t===null){let Pt=R(r,i[h]);x(Pt,o[c]),a[c]=Pt}else a[c]=x($t,o[c]),R(r,i[h],$t),i[g]=null;c++}else rt(i[p]),p--;else rt(i[h]),h++;for(;c<=m;){let g=R(r,a[m+1]);x(g,o[c]),a[c++]=g}for(;h<=p;){let g=i[h++];g!==null&&rt(g)}return this.ut=n,Gt(r,a),v}});var ot=S`
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
`;var q=function(r,t,e,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,s);else for(var l=r.length-1;l>=0;l--)(n=r[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},nt=function(r,t,e,s){if(e==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!s:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?s:e==="a"?s.call(r):s?s.value:t.get(r)},at=function(r,t,e,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?r!==t||!i:!t.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(r,e):i?i.value=e:t.set(r,e),e},lt,ht,ct,dt,A=class extends _{constructor(){super(...arguments),lt.set(this,[]),ht.set(this,!1),ct.set(this,!1),dt.set(this,void 0),this._nextId=1}get listItems(){return nt(this,lt,"f")}set listItems(t){at(this,lt,t,"f")}get addButtonEnabled(){return nt(this,ht,"f")}set addButtonEnabled(t){at(this,ht,t,"f")}get hideChecked(){return nt(this,ct,"f")}set hideChecked(t){at(this,ct,t,"f")}get _input(){return nt(this,dt,"f")}set _input(t){at(this,dt,t,"f")}render(){return E`
      <label>
        <input
          type="checkbox"
          @change=${t=>{this.hideChecked=t.target.checked}}
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
    `}_genItemListHtml(){let t=this.hideChecked?this.listItems.filter(i=>!i.checked):this.listItems;if(t.length===0)return E`<slot name="empty"></slot>`;let e=i=>i.id,s=i=>E`
      <li class=${i.checked?"checked":""}>
        <input
          type="checkbox"
          ?checked=${i.checked}
          @change=${o=>this._onItemCheckboxChange(i,o)}
        />

        <ml-text-edit
          @change=${o=>this._onItemTextChange(i,o)}
          text=${i.text}
        >
        </ml-text-edit>

        <button @mousedown=${()=>this._deleteItem(i.id)}>Delete</button>
      </li>
    `;return E`
      <ul @change=${this._onItemTextChange}>
        ${Zt(t,e,s)}
      </ul>
    `}_onAddInputKeyDown(t){t.code==="Enter"&&this.addButtonEnabled&&this._addItem()}_isAddInputValid(){let t=this._input.value.trim();return typeof t=="string"&&t.length>0}_onAddInputInput(){this.addButtonEnabled=this._isAddInputValid()}_onItemTextChange(t,e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{item:t}}))}_onItemCheckboxChange(t,e){t.checked=e.target.checked,e.stopPropagation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{item:t}})),this.requestUpdate()}_addItem(){let t={id:this._nextId++,text:this._input.value,checked:!1};this.listItems=[...this.listItems,t],this._input.value="",this.addButtonEnabled=!1,this.dispatchEvent(new CustomEvent("add",{bubbles:!0,composed:!0,detail:{item:t}}))}_deleteItem(t){let e=null;this.listItems=this.listItems.filter(s=>t===s.id?(e=s,!1):!0),this.dispatchEvent(new CustomEvent("delete",{bubbles:!0,composed:!0,detail:{item:e}}))}};lt=new WeakMap;ht=new WeakMap;ct=new WeakMap;dt=new WeakMap;A.styles=[ot,S`
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
    `];q([Ct()],A.prototype,"listItems",null);q([Ct()],A.prototype,"addButtonEnabled",null);q([w({type:Boolean})],A.prototype,"hideChecked",null);q([st("#newitem")],A.prototype,"_input",null);A=q([et("ml-checklist")],A);var V=function(r,t,e,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,s);else for(var l=r.length-1;l>=0;l--)(n=r[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},pt=function(r,t,e,s){if(e==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!s:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?s:e==="a"?s.call(r):s?s.value:t.get(r)},ut=function(r,t,e,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?r!==t||!i:!t.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(r,e):i?i.value=e:t.set(r,e),e},mt,ft,_t,gt,b=class extends _{constructor(){super(...arguments),mt.set(this,!1),ft.set(this,""),_t.set(this,!1),gt.set(this,void 0)}get editing(){return pt(this,mt,"f")}set editing(t){ut(this,mt,t,"f")}get text(){return pt(this,ft,"f")}set text(t){ut(this,ft,t,"f")}get disabled(){return pt(this,_t,"f")}set disabled(t){ut(this,_t,t,"f")}get _input(){return pt(this,gt,"f")}set _input(t){ut(this,gt,t,"f")}updated(t){super.updated(t),t.has("editing")&&this.editing&&this._input.select()}render(){return this.editing?E`
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
    `:E`
        <div class="grow textContainer" @click=${()=>this.editing=!0}>
          ${this.text}
        </div>
        <button @click=${()=>this.editing=!0}>Edit</button>
      `}_onInputChange(){this._finishEditing()}_onInputKeyDown(t){t.code==="Escape"&&this._finishEditing(!0)}async _finishEditing(t){if(!this.editing)return;let e=!1;!t&&this.text!==this._input.value&&(this.text=this._input.value,e=!0),this.editing=!1,e&&(await this.updateComplete,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}};mt=new WeakMap;ft=new WeakMap;_t=new WeakMap;gt=new WeakMap;b.styles=[ot,S`
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
    `];V([w({attribute:"editing",type:Boolean,reflect:!0})],b.prototype,"editing",null);V([w({attribute:"text"})],b.prototype,"text",null);V([w({type:Boolean})],b.prototype,"disabled",null);V([st("input")],b.prototype,"_input",null);b=V([et("ml-text-edit")],b);var Ts=A,Ms=b;})();
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
