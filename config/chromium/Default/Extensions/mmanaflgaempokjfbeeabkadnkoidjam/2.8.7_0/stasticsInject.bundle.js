!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=28)}({28:function(e,n,t){"use strict";t.r(n),n.default='\n// console.log(11111);\n!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)n[r]=t[r];return n.target=n.currentTarget=e,n}function o(t){function e(e){return function(){var n=this.hasOwnProperty(e+"_")?this[e+"_"]:this.xhr[e],r=(t[e]||{}).getter;return r&&r(n,this)||n}}function n(e){return function(n){var o=this.xhr,i=this,u=t[e];if("on"===e.substring(0,2))i[e+"_"]=n,o[e]=function(u){u=r(u,i),t[e]&&t[e].call(i,o,u)||n.call(i,u)};else{var s=(u||{}).setter;n=s&&s(n,i)||n,this[e+"_"]=n;try{o[e]=n}catch(t){}}}}function o(e){return function(){var n=[].slice.call(arguments);if(t[e]){var r=t[e].call(this,n,this.xhr);if(r)return r}return this.xhr[e].apply(this.xhr,n)}}return window[s]=window[s]||XMLHttpRequest,XMLHttpRequest=function(){var t=new window[s];for(var r in t){var i="";try{i=u(t[r])}catch(t){}"function"===i?this[r]=o(r):Object.defineProperty(this,r,{get:e(r),set:n(r),enumerable:!0})}var a=this;t.getProxy=function(){return a},this.xhr=t},window[s]}function i(){window[s]&&(XMLHttpRequest=window[s]),window[s]=void 0}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.configEvent=r,e.hook=o,e.unHook=i;var s="_rxhr"},function(t,e,n){"use strict";function r(t){if(h)throw"Proxy already exists";return h=new f(t)}function o(){h=null,(0,d.unHook)()}function i(t){return t.replace(/^s+|s+$/g,"")}function u(t){return t.watcher||(t.watcher=document.createElement("a"))}function s(t,e){var n=t.getProxy(),r="on"+e+"_",o=(0,d.configEvent)({type:e},n);n[r]&&n[r](o);var i;"function"==typeof Event?i=new Event(e,{bubbles:!1}):(i=document.createEvent("Event"),i.initEvent(e,!1,!0)),u(t).dispatchEvent(i)}function a(t){this.xhr=t,this.xhrProxy=t.getProxy()}function c(t){function e(t){a.call(this,t)}return e[b]=Object.create(a[b]),e[b].next=t,e}function f(t){function e(t,e){var n=new P(t);if(!f)return n.resolve();var r={response:e.response,status:e.status,statusText:e.statusText,config:t.config,headers:t.resHeader||t.getAllResponseHeaders().split("\\r\\n").reduce(function(t,e){if(""===e)return t;var n=e.split(":");return t[n.shift()]=i(n.join(":")),t},{})};f(r,n)}function n(t,e,n){var r=new H(t),o={config:t.config,error:n};h?h(o,r):r.next(o)}function r(){return!0}function o(t,e){return n(t,this,e),!0}function a(t,n){return 4===t.readyState&&0!==t.status?e(t,n):4!==t.readyState&&s(t,w),!0}var c=t.onRequest,f=t.onResponse,h=t.onError;return(0,d.hook)({onload:r,onloadend:r,onerror:o,ontimeout:o,onabort:o,onreadystatechange:function(t){return a(t,this)},open:function(t,e){var r=this,o=e.config={headers:{}};o.method=t[0],o.url=t[1],o.async=t[2],o.user=t[3],o.password=t[4],o.xhr=e;var i="on"+w;e[i]||(e[i]=function(){return a(e,r)});var u=function(t){n(e,r,(0,d.configEvent)(t,r))};if([x,y,g].forEach(function(t){var n="on"+t;e[n]||(e[n]=u)}),c)return!0},send:function(t,e){var n=e.config;if(n.withCredentials=e.withCredentials,n.body=t[0],c){var r=function(){c(n,new m(e))};return!1===n.async?r():setTimeout(r),!0}},setRequestHeader:function(t,e){return e.config.headers[t[0].toLowerCase()]=t[1],!0},addEventListener:function(t,e){var n=this;if(-1!==l.indexOf(t[0])){var r=t[1];return u(e).addEventListener(t[0],function(e){var o=(0,d.configEvent)(e,n);o.type=t[0],o.isTrusted=!0,r.call(n,o)}),!0}},getAllResponseHeaders:function(t,e){var n=e.resHeader;if(n){var r="";for(var o in n)r+=o+": "+n[o]+"\\r\\n";return r}},getResponseHeader:function(t,e){var n=e.resHeader;if(n)return n[(t[0]||"").toLowerCase()]}})}Object.defineProperty(e,"__esModule",{value:!0}),e.proxy=r,e.unProxy=o;var h,d=n(0),l=["load","loadend","timeout","error","readystatechange","abort"],v=l[0],p=l[1],y=l[2],x=l[3],w=l[4],g=l[5],b="prototype";a[b]=Object.create({resolve:function(t){var e=this.xhrProxy,n=this.xhr;e.readyState=4,n.resHeader=t.headers,e.response=e.responseText=t.response,e.statusText=t.statusText,e.status=t.status,s(n,w),s(n,v),s(n,p)},reject:function(t){this.xhrProxy.status=0,s(this.xhr,t.type),s(this.xhr,p)}});var m=c(function(t){var e=this.xhr;t=t||e.config,e.withCredentials=t.withCredentials,e.open(t.method,t.url,!1!==t.async,t.user,t.password);for(var n in t.headers)e.setRequestHeader(n,t.headers[n]);e.send(t.body)}),P=c(function(t){this.resolve(t)}),H=c(function(t){this.reject(t)})},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ah=void 0;var r=n(0),o=n(1);e.ah={proxy:o.proxy,unProxy:o.unProxy,hook:r.hook,unHook:r.unHook}}]));\n\n\n;(()=>{"use strict";const e=function(e,t,n,i){i||(i="*");const s=n||!1,o=Object.freeze({extension:"extension",content:"content",page:"page",iframe:"iframe",iframe_shim:"iframe_shim",test:"test"}),r=Object.freeze({extension:4,content:3,page:2,iframe_shim:1,iframe:0,test:-1}),a=t;let l={},m=null,c=e,f=null,d=null,g={},u={},p=null;function _(e){let t=e.split(".");return{type:t.splice(0,1)[0],namespace:t.length>0?t.join("."):null}}function h(e,t){if(e in g)for(let n=g[e].length-1;n>=0;n--)g[e][n].ns===t&&g[e].splice(n,1)}function y(e,t,n,i,s){s||(s={});let o="msg_id"in s?s.msg_id:"".concat(t, ":").concat(e, ":").concat(new Date().getTime());s.msg_id=o;let r={msg_type:e,msg_from:a,source_level:n,msg_destination:t,msg_up:i,msg_namespace:c,msg_data:s,msg_id:o,msg_tab_id:null},l=b(t);return l.tab_id&&(r.msg_destination=l.level,r.msg_tab_id=l.tab_id),r}function $(e){!function(e,t){if(e===o.extension)if(t.msg_tab_id)u[t.msg_tab_id]=u[t.msg_tab_id]||[],u[t.msg_tab_id].push(t);else for(var n in u)u[n].push(t);else if(e===o.content&&t.msg_destination===o.extension||e===o.extension)p.postMessage(t);else if(e===o.iframe||e===o.iframe_shim)window.parent.postMessage(t,i);else if(e!==o.page&&e!==o.content||![o.iframe,o.iframe_shim].includes(t.msg_destination))window.postMessage(t,"*");else{if(e===o.page)return;let n=document.getElementsByTagName("iframe");for(let e=0;e<n.length;e++){let i="chrome-extension://"+chrome.runtime.id;n[e].src.startsWith(i)&&n[e].contentWindow.postMessage(t,i)}}}(a,e)}function v(e,t){let{msg_data:n,msg_from:i,source_level:s,msg_up:o,msg_destination:m,msg_type:c,msg_id:u}=JSON.parse(JSON.stringify(e));t&&(f=t),d=c;let p="".concat(u, ":").concat(m);if(i===a||p in l)return!1;m===a?(x(\'\'),l[p]=0,function(e,t,n){if(!(e in g))return;g[e].forEach(e=>{let i=e.limit_from_levels;i&&!i.includes(n)||e.fn.call(e,t)})}(c,n,s)):(e.msg_from=a,o&&r[a]>r[i]?($(e),x("")):!o&&r[a]<r[i]&&($(e),x("")))}function b(e){let t=e.split("@");return{level:t[0],tab_id:t.length>0?parseInt(t[1],10):null}}function x(e){s&&console.log("")}function E(e,t){let n=y(e,a,a,!0,t);n.msg_from="mock",v(n,{tabId:999})}function M(){for(let e in l)0===l[e]?l[e]=1:delete l[e]}function O(){clearInterval(m)}function w(e){this.name="ChromeExtensionMessageRelayError",this.message=e||"Error in chrome extension message relay",this.stack=(new Error).stack}if(m=setInterval(M,1e3*120),w.prototype=Object.create(Error.prototype),w.prototype.constructor=w,!(a!==o.content&&a!==o.extension||chrome&&chrome.runtime&&chrome.runtime.id)){throw new w("")}return a!==o.test&&([o.page,o.content,o.iframe,o.iframe_shim].includes(a)&&window.addEventListener("message",e=>{"object"==typeof e.data&&"msg_namespace"in e.data&&e.data.msg_namespace===c&&v(e.data)}),a===o.content&&(x("Alerting extension of ready"),(p=chrome.runtime.connect({name:e})).onMessage.addListener(e=>{v(e)})),a===o.extension&&chrome.runtime.onConnect.addListener(t=>{t.name===e&&t.sender.id===chrome.runtime.id&&function(e){let t=e.sender.tab.id,n=Array.isArray(u[t])?u[t].slice():[];e.onDisconnect.addListener(e=>{delete u[e.sender.tab.id],O()}),e.onMessage.addListener(t=>{e.sender.id===chrome.runtime.id&&v(t,e.sender)}),u[t]={push:t=>{e.postMessage(t)}},n.forEach(e=>u[t].push(e))}(t)})),{levels:o,on:function(e,t,n=null){"string"==typeof e&&(e=[e]),n&&!Array.isArray(n)&&(n=[n]),e.forEach(e=>{let i=_(e);i.type in g||(g[i.type]=[]),g[i.type].push({fn:t,ns:i.namespace,limit_from_levels:n})})},off:function(e){"string"==typeof e&&(e=[e]),e.forEach(e=>{let t=_(e);t.type in g&&(t.namespace?h(t.type,t.namespace):delete g[t.type])})},offAll:function(e){if(e)for(let t in g)h(t,e);else g={}},send:function(e,t,n){"string"==typeof t&&(t=[t]),t.forEach(t=>{if(!((t=t)&&b(t).level in o))return x("");let i=b(t).level;r[i]<r[a]?function(e,t,n){let i=y(e,t,a,!1,n);x(""),$(i)}(e,t,n):function(e,t,n){let i=y(e,t,a,!0,n);x(""),$(i)}(e,t,n)});var i},levelViaTabId:function(e,t){return "".concat(e, "@").concat(t)},getLastMsgSenderInfo:()=>f,getLastMsgType:()=>d,mockSend:E,localSend:E,clearTMO:O}};"undefined"!=typeof module&&module.exports?module.exports=e:window.chrome_extension_message_relay=e;window.chrome_extension_message_relay=e})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nvar pg_relay = window.chrome_extension_message_relay("dsers.stastics", "page", false);\nvar stasticPageIdEl = document.documentElement.querySelector(\'[stasticPageId]\');\n\nif (stasticPageIdEl) {\n  window.stasticPageId = stasticPageIdEl.getAttribute(\'stasticPageId\');\n}\n\nvar loadTime = +new Date();\nwindow.bridgeCallbacks = {\n  bridgeRequestId: 1\n};\n\nvar getRequestId = function getRequestId() {\n  return loadTime + \'_\' + window.bridgeCallbacks.bridgeRequestId++;\n};\n\nfunction messageResult(_ref) {\n  var data = _ref.data,\n      bridgeRequestId = _ref.bridgeRequestId;\n  // console.log(data);\n\n  if (bridgeRequestId && window.bridgeCallbacks[bridgeRequestId]) {\n    window.bridgeCallbacks[bridgeRequestId](data);\n    delete window.bridgeCallbacks[bridgeRequestId];\n    return false;\n  }\n}\n\nfunction createMessage(_ref2) {\n  var params = _ref2.params,\n      key = _ref2.key;\n  return new Promise(function (resolve, reject) {\n    var resolved = false;\n\n    var callback = function callback(result) {\n      resolved = true;\n      resolve(result);\n    };\n\n    var bridgeRequestId = getRequestId();\n    window.bridgeCallbacks[bridgeRequestId] = callback;\n    setTimeout(function () {\n      if (!resolved) {\n        delete window.bridgeCallbacks[bridgeRequestId];\n        resolve({\n          error: \'timeout\'\n        });\n      }\n    }, 10000);\n    pg_relay.send(key, pg_relay.levels.content, {\n      params: params,\n      bridgeRequestId: bridgeRequestId,\n      pageId: window.stasticPageId\n    });\n  });\n}\n\npg_relay.on("getStorage.response", messageResult);\n\nvar getStorage = function getStorage(params) {\n  return createMessage({\n    params: params,\n    key: \'getStorage\'\n  });\n};\n\npg_relay.on("setStorage.response", messageResult);\n\nvar setStorage = function setStorage(params) {\n  // console.log(params);\n  return createMessage({\n    params: params,\n    key: \'setStorage\'\n  });\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nfunction decode(qs, sep, eq, options) {\n  sep = sep || \'&\';\n  eq = eq || \'=\';\n  var obj = {};\n\n  if (typeof qs !== \'string\' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n  var maxKeys = 1000;\n\n  if (options && typeof options.maxKeys === \'number\') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, \'%20\'),\n        idx = x.indexOf(eq),\n        kstr,\n        vstr,\n        k,\n        v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = \'\';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n}\n\n;\n\nvar stringifyPrimitive = function stringifyPrimitive(v) {\n  switch (_typeof(v)) {\n    case \'string\':\n      return v;\n\n    case \'boolean\':\n      return v ? \'true\' : \'false\';\n\n    case \'number\':\n      return isFinite(v) ? v : \'\';\n\n    default:\n      return \'\';\n  }\n};\n\nfunction encode(obj, sep, eq, name) {\n  sep = sep || \'&\';\n  eq = eq || \'=\';\n\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (_typeof(obj) === \'object\') {\n    return map(objectKeys(obj), function (k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n\n      if (isArray(obj[k])) {\n        return map(obj[k], function (v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n  }\n\n  if (!name) return \'\';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));\n}\n\n;\n\nfunction map(xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n\n  return res;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === \'[object Array]\';\n};\n\nvar qs = {\n  stringify: encode,\n  parse: decode\n};\nvar _window$ah = window.ah,\n    proxy = _window$ah.proxy,\n    unProxy = _window$ah.unProxy;\nvar stasticsDataEl = document.getElementById(\'stasticsData\');\nvar stasticsData = {\n  stasticsStores: {},\n  stasticsProducts: {}\n};\n\nif (stasticsDataEl) {\n  stasticsData = JSON.parse(stasticsDataEl.innerText);\n}\n\nvar _stasticsData = stasticsData,\n    stasticsStores = _stasticsData.stasticsStores,\n    stasticsProducts = _stasticsData.stasticsProducts;\n\nvar randomOrder = function randomOrder() {\n  return parseInt(Math.random() * 2000) + 1000;\n};\n\nvar randomReviews = function randomReviews(orderNum) {\n  var total = parseInt(orderNum * (Math.random() * 0.3 + 0.1));\n  var five = parseInt(total * (Math.random() * 0.02 + 0.94));\n  var remain = total - five;\n  var four = parseInt(remain * (Math.random() * 0.1 + 0.67));\n  remain = remain - four;\n  var three = parseInt(remain * (Math.random() * 0.1 + 0.67));\n  remain = remain - three;\n  var two = parseInt(remain * (Math.random() * 0.1 + 0.67));\n  var one = remain - two;\n  var evarage = ((one + two * 2 + three * 3 + four * 4 + five * 5) / total).toFixed(1);\n  var fiveRate = Math.ceil(five / total * 100);\n  var fourRate = Math.ceil(four / total * 100);\n  var threeRate = Math.ceil(three / total * 100);\n  var twoRate = Math.ceil(two / total * 100);\n  var oneRate = Math.ceil(one / total * 100);\n  return {\n    "averageStar": evarage + \'\',\n    "averageStarRage": "94.3",\n    "display": false,\n    "evarageStar": evarage + \'\',\n    "evarageStarRage": "94.3",\n    "fiveStarNum": five,\n    "fiveStarRate": fiveRate + \'\',\n    "fourStarNum": four,\n    "fourStarRate": fourRate + \'\',\n    "oneStarNum": one,\n    "oneStarRate": oneRate + \'\',\n    "positiveRate": fiveRate + \'\',\n    "threeStarNum": three,\n    "threeStarRate": threeRate + \'\',\n    "totalValidNum": total,\n    "trialReviewNum": 0,\n    "twoStarNum": two,\n    "twoStarRate": twoRate + \'\'\n  };\n};\n\nfunction catchStoreData(storeId) {\n  var jsonpSrc = /evaluationDsrAjaxService/;\n  var jsonpSrc1 = /evaluationAjaxService/;\n  var jsonpSrc2 = /componentKey=pcShopHead/;\n  var storeDataObj = perfectStoreDataMap[storeId];\n  // console.log(storeDataObj);\n  document.head.addEventListener(\'DOMNodeInserted\', function (e) {\n    var element = e.target;\n\n    if (element.nodeName == \'SCRIPT\') {\n      var src = element.src;\n      var query = src.split(\'?\')[1];\n\n      if (query) {\n        var queryObj = qs.parse(query);\n\n        if (queryObj.callback) {\n          if (jsonpSrc.test(element.src)) {\n            var tempFun = window[queryObj.callback];\n\n            window[queryObj.callback] = function (data) {\n              var myData = storeDataObj.rates\n              tempFun(myData);\n            };\n          }\n\n          if (jsonpSrc1.test(element.src)) {\n            var _tempFun = window[queryObj.callback];\n\n            window[queryObj.callback] = function (data) {\n              var myData = "12," + storeDataObj.positiveRate + ",12-s,10";\n\n              _tempFun(myData);\n            };\n          }\n\n          if(jsonpSrc2.test(element.src)){\n            var tempFun2 = window[queryObj.callback];\n            window[queryObj.callback] = function (data) {\n              if(data.result){\n                data.result.data.shopInfo.followNum = storeDataObj.followingNumber\n              }\n              tempFun2(data);\n            };\n          }\n        }\n      }\n    }\n  });\n}\n\nvar perfectStores = [5596350, 5595226, 5599314, 910358409, 911194094];\nvar perfectStoreDataMap = {\n  5596350: {\n    followingNumber: 12097,\n    positiveNum: 3000,\n    positiveRate: \'97.9\',\n    rates: {\n      "desc": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "6.15"\n      },\n      "seller": {\n        "score": "4.9",\n        "ratings": "12541",\n        "percent": "5.34"\n      },\n      "shipping": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "1.91"\n      }\n    }\n  },\n  5595226: {\n    followingNumber: 10046,\n    positiveNum: 3000,\n    positiveRate: \'98.4\',\n    rates: {\n      "desc": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "6.15"\n      },\n      "seller": {\n        "score": "4.9",\n        "ratings": "12541",\n        "percent": "5.34"\n      },\n      "shipping": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "1.91"\n      }\n    }\n  },\n  5599314: {\n    followingNumber: 20231,\n    positiveNum: 3000,\n    positiveRate: \'98.8\',\n    rates: {\n      "desc": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "6.15"\n      },\n      "seller": {\n        "score": "4.9",\n        "ratings": "12541",\n        "percent": "5.34"\n      },\n      "shipping": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "1.91"\n      }\n    }\n  },\n  910358409: {\n    followingNumber: 11249,\n    positiveNum: 3000,\n    positiveRate: \'98.7\',\n    rates: {\n      "desc": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "6.15"\n      },\n      "seller": {\n        "score": "4.9",\n        "ratings": "12541",\n        "percent": "5.34"\n      },\n      "shipping": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "1.91"\n      }\n    }\n  },\n  911194094: {\n    followingNumber: 4000,\n    positiveNum: 2000,\n    positiveRate: \'99.2\',\n    rates: {\n      "desc": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "6.15"\n      },\n      "seller": {\n        "score": "4.9",\n        "ratings": "12541",\n        "percent": "5.34"\n      },\n      "shipping": {\n        "score": "5.0",\n        "ratings": "12541",\n        "percent": "1.91"\n      }\n    }\n  }\n}\n\n\nvar proxyRunParams;\n\nfunction catchItemPage() {\n  // console.log(\'define\', window.runParams);\n  var flag = false;\n\n  if (window.runParams) {}\n\n  Object.defineProperty(window, \'runParams\', {\n    get: function get() {\n      // console.log(\'get\');\n      return proxyRunParams;\n    },\n    set: function set(newValue) {\n      proxyRunParams = newValue;\n      // console.log(\'catch you！ runParams\', newValue);\n      var _newValue$data = newValue.data,\n          storeModule = _newValue$data.storeModule,\n          titleModule = _newValue$data.titleModule,\n          middleBannerModule = _newValue$data.middleBannerModule,\n          shippingModule = _newValue$data.shippingModule,\n          pageModule = _newValue$data.pageModule;\n      var storeId = storeModule.storeNum;\n\n      if (perfectStores.includes(storeId)) {\n        var productId = pageModule.productId;\n        catchStoreData(storeId);\n        // catchAjax();\n        var orderCount = randomOrder();\n        // var feedbackRating = randomReviews(orderCount);\n        var feedbackRating = randomReviews(0);\n        if (stasticsProducts[productId]) {\n          orderCount = stasticsProducts[productId].orderCount;\n          // feedbackRating = stasticsProducts[productId].feedbackRating;\n        } else {\n          setStorage({\n            stasticsProducts: Object.assign(stasticsProducts, _defineProperty({}, productId, {\n              orderCount: orderCount,\n              feedbackRating: feedbackRating\n            }))\n          });\n        }\n        var storeDataObj = perfectStoreDataMap[storeId];\n        storeModule.followingNumber = storeDataObj.followingNumber;\n        storeModule.positiveNum = storeDataObj.positiveNum;\n        storeModule.positiveRate = storeDataObj.positiveRate +\'%\';\n        titleModule.feedbackRating = feedbackRating;\n        titleModule.tradeCount = orderCount;\n        titleModule.formatTradeCount = orderCount + \'\';\n        // shippingModule.i18nMap.ESTIMATED_DELIVERT_ON_DAYS = \'Estimated Delivery: {0} days Delivered\';\n        // shippingModule.i18nMap.DAYS = \'days Delivered\';\n        // middleBannerModule.marketingMiddleBanner = {\n        //   bigsaleEndTimestamp: 0,\n        //   bigsaleStartTimestamp: 0,\n        //   firstImage: {\n        //     url: "//ae01.alicdn.com/kf/H4ca5d2c0044245c182e77e3de5c2258fJ.jpg"\n        //   },\n        //   icon: {\n        //     height: 20,\n        //     url: "//ae01.alicdn.com/kf/H8cf5b7827b6b4d539aaef068c216e25eF.png",\n        //     width: 1\n        //   },\n        //   remainingTime: null,\n        //   secondImage: {\n        //     url: "//ae01.alicdn.com/kf/Hc252706d95c344a0b1b7c8f4c8c48d11b.png"\n        //   },\n        //   style: "FY18BigSale",\n        //   title: {\n        //     color: "#FFFFFF",\n        //     content: "US 10 Days Delivered - Seller\'s Shipping method"\n        //   }\n        // };\n        var injectStyle = document.createElement(\'style\');\n        injectStyle.innerText = \'#product-evaluation{visibility: hidden!important;background:white;}\';\n        document.documentElement.appendChild(injectStyle);\n      }\n\n      return newValue;\n    }\n  });\n\n  if (flag) {\n    window.runParams = flag;\n  }\n}\n\nfunction catchAjax() {\n  proxy({\n    onRequest: function onRequest(config, handler) {\n      handler.next(config);\n    },\n    onError: function onError(err, handler) {\n      handler.next(err);\n    },\n    onResponse: function onResponse(responseObj, handler) {\n      if (/\\/logistics\\/freight/.test(responseObj.config.url)) {\n        var response = responseObj.response;\n\n        if (response.success) {\n          response.body.freightResult.forEach(function (item) {\n            if (item.serviceName === \'Other\') {\n              item.displayType = \'deliveryTime\';\n              item.tracking = true;\n              item.time = \'10\';\n              item.company = "Seller\'s Shipping Method (DSers Shipping)";\n              item.freightLayout.layout[2] = {\n                text: "10 days Delivered",\n                type: "subtitle"\n              };\n            }\n          });\n        }\n      }\n\n      if (/\\/store\\/header/.test(responseObj.config.url)) {\n        var _response = responseObj.response;\n\n        if (_response.freight && _response.freight.serviceName === \'Other\') {\n          _response.freight.tracking = true;\n          _response.freight.company = "Seller\'s Shipping Method (DSers Shipping)";\n          _response.freight.displayType = \'deliveryTime\';\n          _response.freight.time = \'10\';\n          _response.freight.freightLayout.layout[2] = {\n            text: "10 days Delivered",\n            type: "subtitle"\n          };\n        }\n      }\n\n      handler.next(responseObj);\n    }\n  });\n}\n\nfunction cacthStorePage(storeId) {\n  catchStoreData(storeId);\n}\n\nfunction changeFeedbackDetail() {\n  // document.documentElement.style = \'display:none\';\n}\n\nfunction changeFeedbackList() {\n  // document.documentElement.style = \'display:none\';\n}\nfunction hideFeedbackPage(){\n    var injectStyle = document.createElement(\'style\');\n    injectStyle.innerText = "#node-feedback{visibility: hidden!important;background:white;}"\n    document.documentElement.appendChild(injectStyle);\n}\n// console.log(location.href);\n\nif (/\\/item\\/[0-9]*\\.htm.*/.test(location.href)) {\n  // console.log(\'catched\');\n  catchItemPage();\n}\nvar myStoreConfig;\nif (/\\/store/.test(location.href)) {\n  // console.log(window.pageConfig)\n  if(window.pageConfig){\n    if( perfectStoreDataMap[window.pageConfig.storeId]){\n      cacthStorePage(window.pageConfig.storeId);\n      hideFeedbackPage()\n    }\n  }else{\n    Object.defineProperty(window, \'pageConfig\', {\n      set: function(newValue){\n        myStoreConfig = newValue;\n        if( perfectStoreDataMap[newValue.storeId]){\n          cacthStorePage(newValue.storeId);\n          hideFeedbackPage()\n        }\n      },\n      get: function(){\n        return myStoreConfig\n      }\n    })\n  }\n  \n}\n\n// if (/\\/display\\/evaluationDetail.htm/.test(location.href)) {\n//   changeFeedbackDetail();\n// }\n\n// if (/\\/display\\/evaluationList.htm/.test(location.href)) {\n//   changeFeedbackList();\n// }\n'}});