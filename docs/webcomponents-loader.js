(()=>{(function(){"use strict";var c=!1,l=[],m=!1,a;function u(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function w(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback(function(e){a=e,m&&a()})}function h(){w(),r()}function r(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),c=!0,p().then(u)}function p(){m=!1;var e=l.map(function(t){return t instanceof Function?t():t});return l=[],Promise.all(e).then(function(){m=!0,a&&a()}).catch(function(t){console.error(t)})}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(l.push(e),c&&p())},window.WebComponents._batchCustomElements=w;var f="webcomponents-loader.js",d=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&d.push("sd"),(!window.customElements||window.customElements.forcePolyfill)&&d.push("ce");var v=function(){var e=document.createElement("template");if(!("content"in e)||!(e.content.cloneNode()instanceof DocumentFragment))return!0;var t=document.createElement("template");t.content.appendChild(document.createElement("div")),e.content.appendChild(t);var s=e.cloneNode(!0);return s.content.childNodes.length===0||s.content.firstChild.content.childNodes.length===0}();if((!window.Promise||!Array.from||!window.URL||!window.Symbol||v)&&(d=["sd-ce-pf"]),d.length){var i=function(){var e=function(y){return y},t={createHTML:e,createScript:e,createScriptURL:e},s=window.trustedTypes&&window.trustedTypes.createPolicy("webcomponents-loader",t);return s||t}(),n,b="bundles/webcomponents-"+d.join("-")+".js";if(window.WebComponents.root)n=window.WebComponents.root+b,window.trustedTypes&&window.trustedTypes.isScriptURL(window.WebComponents.root)&&(n=i.createScriptURL(n));else{var E=document.querySelector('script[src*="'+f+'"]');n=i.createScriptURL(E.src.replace(f,b))}var o=document.createElement("script");o.src=n,document.readyState==="loading"?(o.setAttribute("onload",i.createScript("window.WebComponents._batchCustomElements()")),document.write(i.createHTML(o.outerHTML)),document.addEventListener("DOMContentLoaded",r)):(o.addEventListener("load",function(){h()}),o.addEventListener("error",function(){throw new Error("Could not load polyfill bundle"+n)}),document.head.appendChild(o))}else document.readyState==="complete"?(c=!0,u()):(window.addEventListener("load",r),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",r),r()}))})();})();
/*! Bundled license information:

@webcomponents/webcomponentsjs/webcomponents-loader.js:
  (**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   *)
*/
