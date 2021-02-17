/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {\n     true ? // AMD. Register as an anonymous module unless amdModuleId is set\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n        return root.svg4everybody = factory();\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(this, function() {\n    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */\n    function embed(parent, svg, target) {\n        // if the target exists\n        if (target) {\n            // create a document fragment to hold the contents of the target\n            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute(\"viewBox\") && target.getAttribute(\"viewBox\");\n            // conditionally set the viewBox on the svg\n            viewBox && svg.setAttribute(\"viewBox\", viewBox);\n            // copy the contents of the clone into the fragment\n            for (// clone the target\n            var clone = target.cloneNode(!0); clone.childNodes.length; ) {\n                fragment.appendChild(clone.firstChild);\n            }\n            // append the fragment into the svg\n            parent.appendChild(fragment);\n        }\n    }\n    function loadreadystatechange(xhr) {\n        // listen to changes in the request\n        xhr.onreadystatechange = function() {\n            // if the request is ready\n            if (4 === xhr.readyState) {\n                // get the cached html document\n                var cachedDocument = xhr._cachedDocument;\n                // ensure the cached html document based on the xhr response\n                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(\"\"), \n                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item\n                xhr._embeds.splice(0).map(function(item) {\n                    // get the cached target\n                    var target = xhr._cachedTarget[item.id];\n                    // ensure the cached target\n                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), \n                    // embed the target into the svg\n                    embed(item.parent, item.svg, target);\n                });\n            }\n        }, // test the ready state change immediately\n        xhr.onreadystatechange();\n    }\n    function svg4everybody(rawopts) {\n        function oninterval() {\n            // while the index exists in the live <use> collection\n            for (// get the cached <use> index\n            var index = 0; index < uses.length; ) {\n                // get the current <use>\n                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute(\"xlink:href\") || use.getAttribute(\"href\");\n                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), \n                svg && src) {\n                    if (polyfill) {\n                        if (!opts.validate || opts.validate(src, svg, use)) {\n                            // remove the <use> element\n                            parent.removeChild(use);\n                            // parse the src and get the url and id\n                            var srcSplit = src.split(\"#\"), url = srcSplit.shift(), id = srcSplit.join(\"#\");\n                            // if the link is external\n                            if (url.length) {\n                                // get the cached xhr request\n                                var xhr = requests[url];\n                                // ensure the xhr request exists\n                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open(\"GET\", url), xhr.send(), \n                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list\n                                xhr._embeds.push({\n                                    parent: parent,\n                                    svg: svg,\n                                    id: id\n                                }), // prepare the xhr ready state change event\n                                loadreadystatechange(xhr);\n                            } else {\n                                // embed the local id into the svg\n                                embed(parent, svg, document.getElementById(id));\n                            }\n                        } else {\n                            // increase the index when the previous value was not \"valid\"\n                            ++index, ++numberOfSvgUseElementsToBypass;\n                        }\n                    }\n                } else {\n                    // increase the index when the previous value was not \"valid\"\n                    ++index;\n                }\n            }\n            // continue the interval\n            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);\n        }\n        var polyfill, opts = Object(rawopts), newerIEUA = /\\bTrident\\/[567]\\b|\\bMSIE (?:9|10)\\.0\\b/, webkitUA = /\\bAppleWebKit\\/(\\d+)\\b/, olderEdgeUA = /\\bEdge\\/12\\.(\\d+)\\b/, edgeUA = /\\bEdge\\/.(\\d+)\\b/, inIframe = window.top !== window.self;\n        polyfill = \"polyfill\" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;\n        // create xhr requests object\n        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName(\"use\"), numberOfSvgUseElementsToBypass = 0;\n        // conditionally start the interval if the polyfill is active\n        polyfill && oninterval();\n    }\n    function getSVGAncestor(node) {\n        for (var svg = node; \"svg\" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}\n        return svg;\n    }\n    return svg4everybody;\n});\n\n//# sourceURL=webpack:///./node_modules/svg4everybody/dist/svg4everybody.js?");

/***/ }),

/***/ "./src/blocks/burger/burger.js":
/*!*************************************!*\
  !*** ./src/blocks/burger/burger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {\n  var burgers = document.querySelectorAll('.burger');\n\n  for (var i = 0; i < burgers.length; i++) {\n    var burger = burgers[i];\n    burger.addEventListener('click', showBurgerTarget);\n  }\n\n  function showBurgerTarget() {\n    var targetId = this.getAttribute('data-target-id');\n    var targetClassToggle = this.getAttribute('data-target-class-toggle');\n\n    if (targetId && targetClassToggle) {\n      this.classList.toggle('burger--close');\n      document.getElementById(targetId).classList.toggle(targetClassToggle);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/blocks/burger/burger.js?");

/***/ }),

/***/ "./src/blocks/carousel/carousel.js":
/*!*****************************************!*\
  !*** ./src/blocks/carousel/carousel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var carousel = function carousel(options) {\n  var items = document.querySelectorAll(\"\".concat(options.cls, \" .carousel__item\"));\n  var togglers = document.querySelectorAll(\"\".concat(options.cls, \" .carousel__toggler\"));\n  var i = 0;\n  if (!items.length) return;\n  items[0].classList.add('carousel__item--active');\n  togglers[0].classList.add('carousel__toggler--active');\n\n  var showNextSlide = function showNextSlide() {\n    i++;\n    if (i >= items.length) i = 0;\n    items.forEach(function (item) {\n      item.classList.remove('carousel__item--active');\n    });\n    items[i].classList.add('carousel__item--active');\n    togglers.forEach(function (toggle) {\n      toggle.classList.remove('carousel__toggler--active');\n    });\n    togglers[i].classList.add('carousel__toggler--active');\n  };\n\n  var showPrevSlide = function showPrevSlide() {\n    i--;\n    if (i < 0) i = items.length - 1;\n    items.forEach(function (item) {\n      item.classList.remove('carousel__item--active');\n    });\n    items[i].classList.add('carousel__item--active');\n  };\n\n  var clickHandler = function clickHandler(e) {\n    if (e.target.closest(\"\".concat(options.cls, \" .carousel__toggler\"))) {\n      if (e.target.classList.contains('carousel__toggler--active')) return;\n\n      var togglersHandler = function togglersHandler() {\n        e.target.classList.add('carousel__toggler--active');\n        togglers.forEach(function (toggle, i) {\n          if (toggle.classList.contains('carousel__toggler--active')) {\n            items[i].classList.add('carousel__item--active');\n          }\n        });\n      };\n\n      togglers.forEach(function (toggle) {\n        toggle.classList.remove('carousel__toggler--active');\n      });\n      items.forEach(function (item) {\n        item.classList.remove('carousel__item--active');\n      });\n      togglersHandler();\n    }\n\n    if (e.target.closest(\"\".concat(options.cls, \" .carousel__item\"))) showNextSlide();\n    if (e.target.closest(\"\".concat(options.cls, \" .carousel__next\"))) showNextSlide();\n    if (e.target.closest(\"\".concat(options.cls, \" .carousel__prev\"))) showPrevSlide();\n  };\n\n  if (options.autoSlide) {\n    setInterval(function () {\n      showNextSlide();\n    }, 4000);\n  }\n\n  document.addEventListener('click', clickHandler);\n};\n\nvar reviewSliderOptions = {\n  'cls': '.review',\n  'autoSlide': false\n};\ncarousel(reviewSliderOptions);\nvar priceSliderOptions = {\n  'cls': '.price'\n};\ncarousel(priceSliderOptions);\n\n//# sourceURL=webpack:///./src/blocks/carousel/carousel.js?");

/***/ }),

/***/ "./src/blocks/contest/contest.js":
/*!***************************************!*\
  !*** ./src/blocks/contest/contest.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/popup */ \"./src/blocks/popup/popup.js\");\n\n\n(function () {\n  var form = document.querySelector('.contest .form');\n  if (!form) return;\n  var popupFail = new _popup_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    // eslint-disable-line\n    mod: 'fail',\n    title: 'Что-то пошло не так!',\n    descr: 'Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить',\n    submit: 'OK'\n  });\n  var popupSuccess = new _popup_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    mod: 'success',\n    title: 'Ваша заявка отправлена',\n    descr: 'Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и оповестим вас.',\n    submit: 'ЗАКРЫТЬ ОКНО'\n  });\n  form.addEventListener('submit', function () {\n    setTimeout(function () {\n      // document.body.appendChild(popupFail.getElem());\n      document.body.appendChild(popupSuccess.getElem());\n    }, 1000);\n  });\n})();\n\n//# sourceURL=webpack:///./src/blocks/contest/contest.js?");

/***/ }),

/***/ "./src/blocks/field-text/field-text.js":
/*!*********************************************!*\
  !*** ./src/blocks/field-text/field-text.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const autosize = require('autosize');\nvar ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {// autosize(document.querySelectorAll('textarea'));\n});\n\n//# sourceURL=webpack:///./src/blocks/field-text/field-text.js?");

/***/ }),

/***/ "./src/blocks/main-nav/main-nav.js":
/*!*****************************************!*\
  !*** ./src/blocks/main-nav/main-nav.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {\n  // Добавление/удаление модификаторов при фокусировке на ссылочном элементе\n  var linkClassName = 'main-nav__link';\n  var linkClassNameShowChild = 'main-nav__item--show-child';\n  var findLinkClassName = new RegExp(linkClassName); // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)\n\n  document.addEventListener('focus', function (event) {\n    // Если событие всплыло от одной из ссылок гл. меню\n    if (findLinkClassName.test(event.target.className)) {\n      // Добавим классы, показывающие списки вложенных уровней, на всех родителей\n      var parents = getParents(event.target, '.main-nav__item');\n\n      for (var i = 0; i < parents.length; i++) {\n        parents[i].classList.add(linkClassNameShowChild);\n      }\n    }\n  }, true); // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)\n\n  document.addEventListener('blur', function (event) {\n    // Если событие всплыло от одной из ссылок гл. меню\n    if (findLinkClassName.test(event.target.className)) {\n      // Уберем все классы, показывающие списки 2+ уровней\n      var parents = document.querySelectorAll('.' + linkClassNameShowChild);\n\n      for (var i = 0; i < parents.length; i++) {\n        parents[i].classList.remove(linkClassNameShowChild);\n      }\n    }\n  }, true); // eslint-disable\n\n  /*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */\n\n  /**\n   * Get all of an element's parent elements up the DOM tree\n   * @param  {Node}   elem     The element\n   * @param  {String} selector Selector to match against [optional]\n   * @return {Array}           The parent elements\n   */\n\n  var getParents = function getParents(elem, selector) {\n    // Element.matches() polyfill\n    if (!Element.prototype.matches) {\n      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {\n        var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n            i = matches.length;\n\n        while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line\n\n\n        return i > -1;\n      };\n    } // Setup parents array\n\n\n    var parents = []; // Get matching parent elements\n\n    for (; elem && elem !== document; elem = elem.parentNode) {\n      // Add matching parents to array\n      if (selector) {\n        if (elem.matches(selector)) {\n          parents.push(elem);\n        }\n      } else {\n        parents.push(elem);\n      }\n    }\n\n    return parents;\n  };\n});\n\n//# sourceURL=webpack:///./src/blocks/main-nav/main-nav.js?");

/***/ }),

/***/ "./src/blocks/modernizr/modernizr.js":
/*!*******************************************!*\
  !*** ./src/blocks/modernizr/modernizr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*! modernizr 3.6.0 (Custom Build) | MIT *\n * https://modernizr.com/download/?webpalpha&q=webp !*/\n!function (n, e, o) {\n  function t(n, e) {\n    return _typeof(n) === e;\n  }\n\n  function s() {\n    var n, e, o, s, a, i, l;\n\n    for (var f in r) {\n      if (r.hasOwnProperty(f)) {\n        if (n = [], e = r[f], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (o = 0; o < e.options.aliases.length; o++) {\n          n.push(e.options.aliases[o].toLowerCase());\n        }\n\n        for (s = t(e.fn, \"function\") ? e.fn() : e.fn, a = 0; a < n.length; a++) {\n          i = n[a], l = i.split(\".\"), 1 === l.length ? Modernizr[l[0]] = s : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = s), c.push((s ? \"\" : \"no-\") + l.join(\"-\"));\n        }\n      }\n    }\n  }\n\n  function a(n) {\n    var e = u.className,\n        o = Modernizr._config.classPrefix || \"\";\n\n    if (A && (e = e.baseVal), Modernizr._config.enableJSClass) {\n      var t = new RegExp(\"(^|\\\\s)\" + o + \"no-js(\\\\s|$)\");\n      e = e.replace(t, \"$1\" + o + \"js$2\");\n    }\n\n    Modernizr._config.enableClasses && (e += \" \" + o + n.join(\" \" + o), A ? u.className.baseVal = e : u.className = e);\n  }\n\n  function i(n, e) {\n    if (\"object\" == _typeof(n)) for (var o in n) {\n      f(n, o) && i(o, n[o]);\n    } else {\n      n = n.toLowerCase();\n      var t = n.split(\".\"),\n          s = Modernizr[t[0]];\n      if (2 == t.length && (s = s[t[1]]), \"undefined\" != typeof s) return Modernizr;\n      e = \"function\" == typeof e ? e() : e, 1 == t.length ? Modernizr[t[0]] = e : (!Modernizr[t[0]] || Modernizr[t[0]] instanceof Boolean || (Modernizr[t[0]] = new Boolean(Modernizr[t[0]])), Modernizr[t[0]][t[1]] = e), a([(e && 0 != e ? \"\" : \"no-\") + t.join(\"-\")]), Modernizr._trigger(n, e);\n    }\n    return Modernizr;\n  }\n\n  var r = [],\n      l = {\n    _version: \"3.6.0\",\n    _config: {\n      classPrefix: \"\",\n      enableClasses: !0,\n      enableJSClass: !0,\n      usePrefixes: !0\n    },\n    _q: [],\n    on: function on(n, e) {\n      var o = this;\n      setTimeout(function () {\n        e(o[n]);\n      }, 0);\n    },\n    addTest: function addTest(n, e, o) {\n      r.push({\n        name: n,\n        fn: e,\n        options: o\n      });\n    },\n    addAsyncTest: function addAsyncTest(n) {\n      r.push({\n        name: null,\n        fn: n\n      });\n    }\n  },\n      Modernizr = function Modernizr() {};\n\n  Modernizr.prototype = l, Modernizr = new Modernizr();\n  var f,\n      c = [];\n  !function () {\n    var n = {}.hasOwnProperty;\n    f = t(n, \"undefined\") || t(n.call, \"undefined\") ? function (n, e) {\n      return e in n && t(n.constructor.prototype[e], \"undefined\");\n    } : function (e, o) {\n      return n.call(e, o);\n    };\n  }();\n  var u = e.documentElement,\n      A = \"svg\" === u.nodeName.toLowerCase();\n  l._l = {}, l.on = function (n, e) {\n    this._l[n] || (this._l[n] = []), this._l[n].push(e), Modernizr.hasOwnProperty(n) && setTimeout(function () {\n      Modernizr._trigger(n, Modernizr[n]);\n    }, 0);\n  }, l._trigger = function (n, e) {\n    if (this._l[n]) {\n      var o = this._l[n];\n      setTimeout(function () {\n        var n, t;\n\n        for (n = 0; n < o.length; n++) {\n          (t = o[n])(e);\n        }\n      }, 0), delete this._l[n];\n    }\n  }, Modernizr._q.push(function () {\n    l.addTest = i;\n  }), Modernizr.addAsyncTest(function () {\n    var n = new Image();\n    n.onerror = function () {\n      i(\"webpalpha\", !1, {\n        aliases: [\"webp-alpha\"]\n      });\n    }, n.onload = function () {\n      i(\"webpalpha\", 1 == n.width, {\n        aliases: [\"webp-alpha\"]\n      });\n    }, n.src = \"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\";\n  }), s(), delete l.addTest, delete l.addAsyncTest;\n\n  for (var p = 0; p < Modernizr._q.length; p++) {\n    Modernizr._q[p]();\n  }\n\n  n.Modernizr = Modernizr;\n}(window, document);\n\n//# sourceURL=webpack:///./src/blocks/modernizr/modernizr.js?");

/***/ }),

/***/ "./src/blocks/popup/popup.js":
/*!***********************************!*\
  !*** ./src/blocks/popup/popup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Popup(options) {\n  var _this = this;\n\n  var elem;\n\n  var getElem = function getElem() {\n    if (!elem) render();\n    return elem;\n  };\n\n  var render = function render() {\n    elem = document.createElement('div');\n    elem.classList.add(\"popup\");\n    elem.classList.add(\"popup--\".concat(options.mod));\n\n    if (options.title) {\n      var title = document.createElement('h2');\n      title.classList.add('popup__title');\n      title.textContent = options.title;\n      elem.appendChild(title);\n    }\n\n    if (options.descr) {\n      var descr = document.createElement('p');\n      descr.classList.add('popup__descr');\n      descr.textContent = options.descr;\n      elem.appendChild(descr);\n    }\n\n    if (options.submit) {\n      var submitWrap = document.createElement('div');\n      submitWrap.classList.add('popup__submit-wrap');\n      var submit = document.createElement('button');\n      submit.classList.add('popup__submit');\n      submit.classList.add('btn--success');\n      submit.textContent = options.submit;\n      submit.type = 'button';\n      submit.addEventListener('click', hide);\n      submitWrap.appendChild(submit);\n      elem.appendChild(submitWrap);\n    }\n  };\n\n  var hide = function hide() {\n    _this.getElem().remove();\n  };\n\n  this.getElem = getElem;\n  this.hide = hide;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popup);\n\n//# sourceURL=webpack:///./src/blocks/popup/popup.js?");

/***/ }),

/***/ "./src/blocks/sprite-svg/sprite-svg.js":
/*!*********************************************!*\
  !*** ./src/blocks/sprite-svg/sprite-svg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var svg4everybody = __webpack_require__(/*! svg4everybody */ \"./node_modules/svg4everybody/dist/svg4everybody.js\");\n\nsvg4everybody();\n\n//# sourceURL=webpack:///./src/blocks/sprite-svg/sprite-svg.js?");

/***/ }),

/***/ "./src/blocks/top-nav/top-nav.js":
/*!***************************************!*\
  !*** ./src/blocks/top-nav/top-nav.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var menuLinks = document.querySelectorAll('.top-nav__link');\n\n  var clickHandler = function clickHandler(e) {\n    if (e.target.closest('.top-nav__link')) {\n      if (!menuLinks.length) return;\n      menuLinks.forEach(function (link) {\n        link.classList.remove('top-nav__link--active');\n      });\n      e.target.closest('.top-nav__link').classList.add('top-nav__link--active');\n    }\n  };\n\n  document.addEventListener('click', clickHandler);\n})();\n\n//# sourceURL=webpack:///./src/blocks/top-nav/top-nav.js?");

/***/ }),

/***/ "./src/blocks/upload/upload.js":
/*!*************************************!*\
  !*** ./src/blocks/upload/upload.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var uploadTabs = function uploadTabs() {\n    var tabs = document.querySelectorAll('.field-range');\n    if (!tabs.length) return;\n\n    var clickHandler = function clickHandler(e) {\n      var tab = e.target.closest('.field-range');\n\n      if (tab) {\n        tabs.forEach(function (tab) {\n          tab.classList.remove('field-range--active');\n        });\n        tab.classList.add('field-range--active');\n      }\n    };\n\n    document.addEventListener('click', clickHandler);\n    document.addEventListener('submit', function (e) {\n      e.preventDefault();\n    });\n  };\n\n  uploadTabs();\n})();\n\n//# sourceURL=webpack:///./src/blocks/upload/upload.js?");

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Любые изменения этого файла будут потеряны при следующей компиляции.\n * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n */\n__webpack_require__(/*! ../blocks/modernizr/modernizr.js */ \"./src/blocks/modernizr/modernizr.js\");\n\n__webpack_require__(/*! ../blocks/popup/popup.js */ \"./src/blocks/popup/popup.js\");\n\n__webpack_require__(/*! ../blocks/sprite-svg/sprite-svg.js */ \"./src/blocks/sprite-svg/sprite-svg.js\");\n\n__webpack_require__(/*! ../blocks/burger/burger.js */ \"./src/blocks/burger/burger.js\");\n\n__webpack_require__(/*! ../blocks/carousel/carousel.js */ \"./src/blocks/carousel/carousel.js\");\n\n__webpack_require__(/*! ../blocks/contest/contest.js */ \"./src/blocks/contest/contest.js\");\n\n__webpack_require__(/*! ../blocks/field-text/field-text.js */ \"./src/blocks/field-text/field-text.js\");\n\n__webpack_require__(/*! ../blocks/main-nav/main-nav.js */ \"./src/blocks/main-nav/main-nav.js\");\n\n__webpack_require__(/*! ../blocks/top-nav/top-nav.js */ \"./src/blocks/top-nav/top-nav.js\");\n\n__webpack_require__(/*! ../blocks/upload/upload.js */ \"./src/blocks/upload/upload.js\");\n\n__webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Любые изменения этого файла будут потеряны при следующей компиляции.\n * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n */\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const ready = require('./utils/documentReady.js');\n// ready(function(){\n//   console.log('DOM героически построен!');\n// });\n// const $ = require('jquery');\n// $( document ).ready(function() {});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/js/utils/documentReady.js":
/*!***************************************!*\
  !*** ./src/js/utils/documentReady.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ready = function ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\nmodule.exports = ready;\n\n//# sourceURL=webpack:///./src/js/utils/documentReady.js?");

/***/ })

/******/ });