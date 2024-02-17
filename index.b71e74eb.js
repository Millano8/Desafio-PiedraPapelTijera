// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aHFy6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _buttonEmpezar = require("./components/button-empezar");
var _buttonJugar = require("./components/button-jugar");
var _buttonVolverAJugar = require("./components/button-volver-a-jugar");
var _perdisteEl = require("./components/perdiste-el");
var _ganasteEl = require("./components/ganaste-el");
var _score = require("./components/score");
var _handsEl = require("./components/hands-el");
var _countDownComp = require("./components/countDown-comp");
var _computerPlay = require("./components/computer-play");
var _buttonReset = require("./components/button-reset");
var _router = require("./router");
function main() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
}
main();

},{"./components/button-empezar":"dyCyQ","./components/button-jugar":"k8qwJ","./components/perdiste-el":"lrymI","./components/ganaste-el":"9ABOr","./components/score":"5XKJp","./components/hands-el":"7852O","./router":"4QFWt","./components/countDown-comp":"5rHmk","./components/computer-play":"cHUN6","./components/button-volver-a-jugar":"5ZYut","./components/button-reset":"jTtDb"}],"dyCyQ":[function(require,module,exports) {
customElements.define("custom-button", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `

                .root{
                width: 322px;
                height: 87px;
                border: solid #001997 10px;
                border-radius: 10px;
                background-color: #006CFC;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                text-align: center;
            } 
            `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const button = document.createElement("button");
        button.textContent = this.textContent;
        button.className = "root";
        this.shadow.appendChild(button);
    }
});

},{}],"k8qwJ":[function(require,module,exports) {
customElements.define("jugar-buttom", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
                .root{
                    width: 322px;
                    height: 87px;
                    border: solid #001997 10px;
                    border-radius: 10px;
                    background-color: #006CFC;
                    font-family: 'Odibee Sans', sans-serif;
                    font-size: 45px;
                    text-align: center;
                }
              `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const button = document.createElement("button");
        button.textContent = this.textContent;
        button.className = "root";
        this.shadow.appendChild(button);
    }
});

},{}],"lrymI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
customElements.define("perdiste-el", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const containerImg = document.createElement("div");
        const imgPerdisteEl = document.createElement("img");
        const imgPerdiste = new URL(require("27e3c7468e1c35e"));
        imgPerdisteEl.src = imgPerdiste;
        containerImg.appendChild(imgPerdisteEl);
        this.shadow.appendChild(containerImg);
    }
});

},{"27e3c7468e1c35e":"6YHLx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YHLx":[function(require,module,exports) {
module.exports = require("bbd5b3363aa2f2d8").getBundleURL("7UhFu") + "perdiste.69f022f6.png" + "?" + Date.now();

},{"bbd5b3363aa2f2d8":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9ABOr":[function(require,module,exports) {
customElements.define("ganaste-el", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const containerImg = document.createElement("div");
        containerImg.className = "root";
        const imgGanasteEl = document.createElement("img");
        const imgGanaste = new URL(require("f0f7c92006119011"));
        imgGanasteEl.src = imgGanaste;
        containerImg.appendChild(imgGanasteEl);
        this.shadow.appendChild(containerImg);
    }
});

},{"f0f7c92006119011":"mwDOA"}],"mwDOA":[function(require,module,exports) {
module.exports = require("ad92a24cdc749a6b").getBundleURL("7UhFu") + "ganaste.5cc4050b.png" + "?" + Date.now();

},{"ad92a24cdc749a6b":"lgJ39"}],"5XKJp":[function(require,module,exports) {
var _state = require("../../state");
customElements.define("score-el", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
                .root{
                    width: 259px;
                    height: 217px;
                    border: solid #000000 10px;
                    border-radius: 10px;
                    background-color: #FFFFFF;
                    font-family: 'Odibee Sans', sans-serif;
                }
                .title{
                    font-size: 55px;
                    margin: 10px;
                }
                p{
                    font-size: 45px;
                    margin: 0;
                }
            `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const currentState = (0, _state.state).getState();
        const history = (0, _state.state).getHistory();
        const puntosJugador = history[0].myPoints;
        const puntosPc = history[0].computerPoints;
        const container = document.createElement("div");
        container.className = "root";
        container.innerHTML = `
                <h2 class="title">SCORE: </h2>
                <p class="player-uno">Vos: ${puntosJugador}</p>
                <p class="player-dos">Computer: ${puntosPc}</p>
            `;
        this.shadow.appendChild(container);
    }
});

},{"../../state":"1Yeju"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// state.pushToHistory({computerPlay:"piedra",myPlay:"papel"})
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
            resultado: ""
        },
        history: [
            {
                myPoints: 0,
                computerPoints: 0
            }
        ]
    },
    listeners: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const callback of this.listeners)callback();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
    },
    computerPlay () {
        const currentState = this.getState();
        const posibilidades = [
            "papel",
            "piedra",
            "tijeras"
        ];
        const jugadaAleatoria = posibilidades[Math.floor(Math.random() * posibilidades.length)];
        currentState.currentGame.computerPlay = jugadaAleatoria;
        return jugadaAleatoria;
    },
    pushToHistory (play) {
        const currentState = this.getState();
        currentState.history.push(play);
    },
    getHistory () {
        const currentState = this.getState();
        const history = localStorage.getItem("history");
        if (history) {
            const parsedHistory = JSON.parse(history);
            state.data.history = parsedHistory;
        }
        return currentState.history;
    },
    whoWins (myPlay, computerPlay) {
        const currentState = this.getState();
        let ganador = "";
        if (myPlay == "tijeras" && computerPlay == "papel") ganador = "ganaste";
        else if (myPlay == "papel" && computerPlay == "piedra") ganador = "ganaste";
        else if (myPlay == "piedra" && computerPlay == "tijeras") ganador = "ganaste";
        else if (myPlay == computerPlay) ganador = "empate";
        else ganador = "perdiste";
        currentState.currentGame.resultado = ganador;
        return ganador;
    },
    countPoints (resultado) {
        const currentState = this.getState();
        const history = this.getHistory();
        if (resultado == "ganaste") history[currentState.history.length - 1].myPoints++;
        else if (resultado == "perdiste") history[currentState.history.length - 1].computerPoints++;
        localStorage.setItem("history", JSON.stringify(currentState.history));
        return currentState.history;
    },
    restartGame () {
        const currentState = this.getState();
        const history = this.getHistory();
        history[currentState.history.length - 1].myPoints = 0;
        history[currentState.history.length - 1].computerPoints = 0;
        localStorage.setItem("history", JSON.stringify(currentState.history));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7852O":[function(require,module,exports) {
customElements.define("hands-el", class extends HTMLElement {
    constructor(){
        super();
        this.size = this.getAttribute("size");
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const containerImg = document.createElement("div");
        const imgPapelEl = document.createElement("img");
        const imgPiedraEl = document.createElement("img");
        const imgTijeraEl = document.createElement("img");
        const imgPapel = new URL(require("de6801db55b5de79"));
        imgPapelEl.src = imgPapel;
        const imgPiedra = new URL(require("909ca4edaf3d8bb3"));
        imgPiedraEl.src = imgPiedra;
        const imgTijera = new URL(require("4840d0f2b6c8b0fe"));
        imgTijeraEl.src = imgTijera;
        containerImg.className = "container";
        const style = document.createElement("style");
        style.textContent = `
                .container{
                    display: flex;
                    jusify-content: center;
                    width: 100%;
                }

                img:hover{
                    cursor: pointer;
                }
            `;
        containerImg.appendChild(imgPapelEl);
        containerImg.appendChild(imgPiedraEl);
        containerImg.appendChild(imgTijeraEl);
        this.shadow.appendChild(containerImg);
    }
});

},{"de6801db55b5de79":"kkb39","909ca4edaf3d8bb3":"dX8oP","4840d0f2b6c8b0fe":"bADXJ"}],"kkb39":[function(require,module,exports) {
module.exports = require("fb54e2d90c611ad4").getBundleURL("7UhFu") + "Papel.13b2b40d.png" + "?" + Date.now();

},{"fb54e2d90c611ad4":"lgJ39"}],"dX8oP":[function(require,module,exports) {
module.exports = require("8805e0d9a9134368").getBundleURL("7UhFu") + "Piedra.aed927af.png" + "?" + Date.now();

},{"8805e0d9a9134368":"lgJ39"}],"bADXJ":[function(require,module,exports) {
module.exports = require("a9e2572a623b8b54").getBundleURL("7UhFu") + "Tijera.4ffd1c02.png" + "?" + Date.now();

},{"a9e2572a623b8b54":"lgJ39"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _juego = require("./pages/juego");
var _instructions = require("./pages/instructions");
var _inicio = require("./pages/inicio");
var _ganaste = require("./pages/resultado/ganaste");
var _perdiste = require("./pages/resultado/perdiste");
var _pelea = require("./pages/pelea");
const routes = [
    {
        path: /\/juego/,
        component: (0, _juego.initJuego)
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.initInstructions)
    },
    {
        path: /\/inicio/,
        component: (0, _inicio.initInicio)
    },
    {
        path: /\/resultadoGanaste/,
        component: (0, _ganaste.initGanaste)
    },
    {
        path: /\/resultadoPerdiste/,
        component: (0, _perdiste.initPerdiste)
    },
    {
        path: /\/pelea/,
        component: (0, _pelea.initPelea)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibio una nueva ruta", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/inicio");
    else goTo(location.pathname);
}

},{"./pages/instructions":"c8fMJ","./pages/inicio":"eOBMs","./pages/resultado/ganaste":"gqGII","./pages/resultado/perdiste":"9tlvQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/juego":"kSEHS","./pages/pelea":"brxaK"}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions);
var _state = require("../../state");
function initInstructions(params) {
    const div = document.createElement("div");
    div.className = "init-instructions";
    div.innerHTML = `
        <div class="init-instructions__title">
            <h2>Presion\xe1 jugar y elegi: piedra, papel o tijeras antes de que pasen 5 segundos</h2>
        </div>
        <div class="init-instructions__button">
            <jugar-buttom>Jugar!</jugar-buttom>
        </div>
        <div class="init-instructions__reset-button">
            <reset-button>Reset Score</reset-button>
        </div>
        <div class="init-instructions__hands">
            <hands-el></hands-el>
        </div>   
    `;
    const button = div.querySelector(".init-instructions__button");
    button?.addEventListener("click", ()=>{
        params.goTo("/juego");
    });
    const reset = div.querySelector(".init-instructions__reset-button");
    reset?.addEventListener("click", ()=>{
        (0, _state.state).restartGame();
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"eOBMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInicio", ()=>initInicio);
function initInicio(params) {
    const div = document.createElement("div");
    div.className = "init-page";
    div.innerHTML = `
        <div class="init-page__title">
            <h1>Piedra Papel o Tijeras</h1>
        </div>
        <div class="init-page__button">
            <custom-button class="boton-inicio">Empezar</custom-button>
        </div>
        <div class="init-page__hands">
            <hands-el></hands-el>
        </div>
    `;
    const button = div.querySelector(".boton-inicio");
    button?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gqGII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGanaste", ()=>initGanaste);
function initGanaste(params) {
    const div = document.createElement("div");
    div.className = "res-ganaste";
    div.innerHTML = `
        <div class="res-ganaste__img">
            <ganaste-el></ganaste-el>
        </div>
        <div class="res-ganaste__score">
            <score-el></score-el>
        </div>
        <div class="res-ganaste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `;
    const button = div.querySelector("button-volver-jugar");
    button?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tlvQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPerdiste", ()=>initPerdiste);
function initPerdiste(params) {
    const div = document.createElement("div");
    div.className = "res-perdiste";
    div.innerHTML = `
        <div class="res-perdiste__img">
            <perdiste-el></perdiste-el>
        </div>
        <div class="res-perdiste__score">
            <score-el></score-el>
        </div>
        <div class="res-perdiste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `;
    const button = div.querySelector("button-volver-jugar");
    button?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSEHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initJuego", ()=>initJuego);
parcelHelpers.export(exports, "jugada", ()=>jugada);
var _computerPlay = require("../../components/computer-play");
let jugada = "";
function initJuego(params) {
    const div = document.createElement("div");
    div.className = "init-juego";
    const imgPapel = new URL(require("11c6389741d15715"));
    const imgPiedra = new URL(require("f60f1fd385eb74c1"));
    const imgTijera = new URL(require("7ed9faa4f4461a2c"));
    div.innerHTML = `
        <div class="pagina-juego">
            <div class="init-juego__rotadas">
                <div>
                    <img src="${imgPapel}"/>
                </div>
                <div>
                <img src="${imgPiedra}"/>
                </div>
                <div>
                    <img src="${imgTijera}"/>
                </div>
            </div>
            <div class="count-down">
                <count-down></count-down>
            </div>
            <div class="init-juego__hands">
                <div>
                    <img src="${imgPapel}" class="papel"/>
                </div>
                <div>
                    <img src="${imgPiedra}" class="piedra"/>
                </div>
                <div>
                    <img src="${imgTijera}"/ class="tijeras">
                </div>
            </div>
        </div>
    `;
    const elegiPapel = div.querySelector(".papel");
    const elegiPiedra = div.querySelector(".piedra");
    const elegiTijeras = div.querySelector(".tijeras");
    elegiPapel?.addEventListener("click", ()=>{
        clearTimeout(timeOutReturn);
        jugada = "papel";
        setTimeout(()=>{
            params.goTo("/pelea");
        }, 1000);
    });
    elegiPiedra?.addEventListener("click", ()=>{
        clearTimeout(timeOutReturn);
        jugada = "piedra";
        setTimeout(()=>{
            params.goTo("/pelea");
        }, 1000);
    });
    elegiTijeras?.addEventListener("click", ()=>{
        clearTimeout(timeOutReturn);
        jugada = "tijeras";
        setTimeout(()=>{
            params.goTo("/pelea");
        }, 1000);
    });
    const timeOutReturn = setTimeout(()=>{
        params.goTo("/instructions");
    }, 5000);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","11c6389741d15715":"kkb39","f60f1fd385eb74c1":"dX8oP","7ed9faa4f4461a2c":"bADXJ","../../components/computer-play":"cHUN6"}],"cHUN6":[function(require,module,exports) {
var _state = require("../../state");
const imgPapel = new URL(require("bd800e3d68ca8b66"));
const imgPiedra = new URL(require("3ba99100a3eabfda"));
const imgTijera = new URL(require("c02e6ea2d3b8a7b0"));
customElements.define("computer-play", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
        .root{
            heigth: 250px;
            width: 100px;
        }
    `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const currentState = (0, _state.state).getState();
        const jugadaPc = currentState.currentGame.computerPlay;
        const div = document.createElement("div");
        if (jugadaPc === "tijeras") div.innerHTML = `
            <img src="${imgTijera}" class="root"/>
        `;
        else if (jugadaPc === "papel") div.innerHTML = `
            <img src="${imgPapel}" class="root"/>
        `;
        else if (jugadaPc == "piedra") div.innerHTML = `
            <img src="${imgPiedra}" class="root"/>
        `;
        this.shadow.appendChild(div);
    }
});

},{"bd800e3d68ca8b66":"kkb39","c02e6ea2d3b8a7b0":"bADXJ","3ba99100a3eabfda":"dX8oP","../../state":"1Yeju"}],"brxaK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPelea", ()=>initPelea);
var _state = require("../../state");
var _juego = require("../juego");
function initPelea(params) {
    const div = document.createElement("div");
    div.className = "init-pelea";
    const imgPapel = new URL(require("2c9ad82471fd9095"));
    const imgPiedra = new URL(require("39bbdccfbdec1cc9"));
    const imgTijera = new URL(require("f192ce83aa07cd34"));
    const imgExplosion = new URL(require("ce4cdc416fa71cdf"));
    const currentState = (0, _state.state).getState();
    const jugadaJugador = (0, _juego.jugada);
    const jugadaPc = (0, _state.state).computerPlay();
    if (jugadaJugador == "tijeras") {
        (0, _state.state).setMove("tijeras");
        div.innerHTML = `
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${imgExplosion}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${imgTijera}" class="init-pelea__img"/>
                </div>
            </div>
            
        `;
    } else if (jugadaJugador == "papel") {
        (0, _state.state).setMove("papel");
        div.innerHTML = `
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${imgExplosion}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${imgPapel}" class="init-pelea__img"/>
                </div>
            </div>
        `;
    } else if (jugadaJugador == "piedra") {
        (0, _state.state).setMove("piedra");
        div.innerHTML = `
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${imgExplosion}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${imgPiedra}" class="init-pelea__img"/>
                </div>
            </div>
            `;
    }
    const ganador = (0, _state.state).whoWins(currentState.currentGame.myPlay, currentState.currentGame.computerPlay);
    const resultado = currentState.currentGame.resultado;
    (0, _state.state).countPoints(resultado);
    const history = (0, _state.state).getHistory();
    setTimeout(()=>{
        if (resultado == "ganaste") params.goTo("/resultadoGanaste");
        else if (resultado == "perdiste") params.goTo("/resultadoPerdiste");
        else params.goTo("/juego");
    }, 3000);
    return div;
}

},{"../../state":"1Yeju","2c9ad82471fd9095":"kkb39","39bbdccfbdec1cc9":"dX8oP","f192ce83aa07cd34":"bADXJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../juego":"kSEHS","ce4cdc416fa71cdf":"lBJ2e"}],"lBJ2e":[function(require,module,exports) {
module.exports = require("9445ce4dcd5b9b49").getBundleURL("7UhFu") + "img-explosion1.83b6ba17.jpg" + "?" + Date.now();

},{"9445ce4dcd5b9b49":"lgJ39"}],"5rHmk":[function(require,module,exports) {
customElements.define("count-down", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `
                .timer{
                    margin-top:-40px;
                    height:100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `;
        this.shadow.appendChild(style);
        const div = document.createElement("div");
        div.className = "timer";
        div.innerHTML = `
                <svg class="timer__svg" width="244" heigth="243" viewBox="0 0 244 243" fill="none" xmlns="http://www.w3.org/2000/svg">

                <circle cx="121.5" cy="121.5" r="110" stroke="black" stroke-width="23" fill="none">
                    <animate attributeName="stroke-desharray" from="1000 696" to="696 696" dur="5s" fill="freeze" begin="0s"/>
                    <animate attributeName="stroke-dashoffset" from="0" to="696" dur="3s" fill="freeze" begin="0s"/>
                </circle>
                
                <text class="timer__number" x="50%" y="50%" text-anchor="middle" dy=".3em" fill="black" font-size="124">5</text>
                </svg>
                </svg>

                
            `;
        const timerSvg = div.querySelector(".timer__svg");
        let count = 5;
        const countDownInterval = setInterval(()=>{
            count--;
            if (count < 0) clearInterval(countDownInterval);
            else {
                const text = div.querySelector(".timer__number");
                let result = text.textContent = count.toString();
            }
        }, 1000);
        this.shadow.appendChild(div);
    }
});

},{}],"5ZYut":[function(require,module,exports) {
customElements.define("button-volver-jugar", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `

                .root{
                width: 322px;
                height: 87px;
                border: solid #001997 10px;
                border-radius: 10px;
                background-color: #006CFC;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                text-align: center;
                color: white;
            } 
            `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const button = document.createElement("button");
        button.textContent = this.textContent;
        button.className = "root";
        this.shadow.appendChild(button);
    }
});

},{}],"jTtDb":[function(require,module,exports) {
customElements.define("reset-button", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
        .root{
            width: 322px;
            height: 87px;
            margin-top: 20px;
            border: solid #900C3F 10px;
            border-radius: 10px;
            background-color: #C70039;
            font-family: 'Odibee Sans', sans-serif;
            font-size: 45px;
            text-align: center;

        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const button = document.createElement("button");
        button.textContent = this.textContent;
        button.className = "root";
        this.shadow.appendChild(button);
    }
});

},{}]},["aHFy6","h7u1C"], "h7u1C", "parcelRequire9660")

//# sourceMappingURL=index.b71e74eb.js.map
