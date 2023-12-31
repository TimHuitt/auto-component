"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactJsxParser = _interopRequireDefault(require("react-jsx-parser"));
var _jsBeautify = _interopRequireDefault(require("js-beautify"));
require("./auto-component.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // AutoComponent
// Built By:
//   https://github.com/SamPatt
//   https://github.com/TimHuitt
// Copyright (C) 2023 Tim Huitt, Sam Patterson
// 
//   This program is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Affero General Public License as
//   published by the Free Software Foundation, either version 3 of the
//   License, or (at your option) any later version.
// 
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU Affero General Public License for more details.
// 
//   You should have received a copy of the GNU Affero General Public License
//   along with this program.  If not, see <https://www.gnu.org/licenses/>.
// Babel transpile resource: https://github.com/receter/my-components
var AutoComponent = function AutoComponent() {
  //**-----------**/
  // ** State ** //
  //**---------**/
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    currentHtml = _useState2[0],
    setHtml = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    currentRequest = _useState4[0],
    setRequest = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    user = _useState6[0],
    setUser = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    responseData = _useState8[0],
    setResponseData = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    requestData = _useState10[0],
    setRequestData = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    activeTab = _useState12[0],
    setActiveTab = _useState12[1];
  var _useState13 = (0, _react.useState)(["No History"]),
    _useState14 = _slicedToArray(_useState13, 2),
    history = _useState14[0],
    setHistory = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isRequesting = _useState16[0],
    setIsRequesting = _useState16[1];

  //**-------------------------**/
  // ** HTML/CSS Formatting ** //
  //**-----------------------**/

  // format html for display (breaks/indentation)
  var formatHtml = function formatHtml(html) {
    return _jsBeautify["default"].html(html, {
      indent_size: 2,
      wrap_line_length: 80,
      max_preserve_newlines: 1
    });
  };

  // ** Clean HTML of Exclusions **
  // if an element className includes 'exclude'
  // (partial) the element wrapper remains, but contents removed
  // OR, (full) the element and it's content are excluded from output
  // thanks gpt for these clever exclusion tools

  // partial exclusion
  var cleanExclusions = function cleanExclusions(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var elementsToClean = doc.querySelectorAll('.exclude');
    var removeAllChildNodes = function removeAllChildNodes(element) {
      Array.from(element.childNodes).forEach(function (child) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          removeAllChildNodes(child);
        } else {
          element.removeChild(child);
        }
      });
    };
    elementsToClean.forEach(function (element) {
      removeAllChildNodes(element);
    });
    return doc.documentElement.outerHTML;
  };

  // generate a random 5 digit user id
  var randomUser = function randomUser() {
    setUser(Math.floor(Math.random() * 100000));
  };

  // set initial load data
  (0, _react.useEffect)(function () {
    randomUser();
  }, []);

  //**---------------------------**/
  // ** API Requests/Response ** //
  //**-------------------------**/

  // handle sending the user request to the auto-component API
  // API sends packaged request to GPT for a code based response
  var sendRequest = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, res, jsonData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsRequesting(true);
            url = "https://server-auto-component-46830ff262f8.herokuapp.com/api";
            _context.prev = 2;
            _context.next = 5;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestData)
            });
          case 5:
            res = _context.sent;
            if (!res.ok) {
              _context.next = 13;
              break;
            }
            _context.next = 9;
            return res.json();
          case 9:
            jsonData = _context.sent;
            return _context.abrupt("return", jsonData);
          case 13:
            throw new Error("Invalid request!");
          case 14:
            _context.next = 19;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.message);
          case 19:
            setIsRequesting(false);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 16]]);
    }));
    return function sendRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  // handle request initialization and state updates
  var handleRequest = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var resData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return sendRequest();
          case 3:
            resData = _context2.sent;
            if (resData) {
              setHistory(resData.history);
              setResponseData(formatHtml(resData.response.content));
              activeTab !== '' && setActiveTab('response');
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 10:
            _context2.prev = 10;
            setIsRequesting(false); // Set isRequesting to false after processing response
            return _context2.finish(10);
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7, 10, 13]]);
    }));
    return function handleRequest() {
      return _ref2.apply(this, arguments);
    };
  }();

  //**------------------------**/
  // ** UI/Button Handling ** //
  //**----------------------**/

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setRequest(e.target.value);
  };
  var handleGenerate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return setRequestData({
              "userId": user,
              "request": currentRequest
            });
          case 2:
            setRequest('');
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleGenerate(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (requestData !== null) {
      handleRequest();
    }
  }, [requestData]);
  var handleReset = function handleReset() {
    setRequest('');
    setResponseData('');
    randomUser();
    setHistory([]);
    setIsRequesting(false);
  };
  var handleRequestTab = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return setActiveTab(activeTab === 'response' || activeTab === '' ? 'request' : '');
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleRequestTab() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleResponseTab = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return setActiveTab(activeTab === 'request' || activeTab === '' ? 'response' : '');
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function handleResponseTab() {
      return _ref5.apply(this, arguments);
    };
  }();
  var copyToClipboard = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var text;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            text = activeTab === 'response' ? responseData : requestData;
            _context6.next = 3;
            return navigator.clipboard.writeText(text);
          case 3:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function copyToClipboard() {
      return _ref6.apply(this, arguments);
    };
  }();

  //**---------------**/
  // ** Rendering ** //
  //**-------------**/

  // get request history log and format for display
  var getLog = function getLog() {
    return history.map(function (entry, index) {
      return index !== 0 ? entry.content.split('HTML Context:')[0] + (entry.content.includes("User Request") ? '\n\n' : '\n\n\n') : '';
    });
  };

  // build request tab content
  var requestHTML = getLog() && getLog().join('') + "\nClick Generate to send a request and receive the auto component AI generated code.\n\nExample: \"Create a full width container, center a box inside, and place a circle inside the box\"\n\nUser ID:\n" + user + "\n\nUser Request:\n" + currentRequest;
  var responseHtml = responseData ? responseData : 'No response has been generated';
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGenerate();
    }
  };

  //**------------**/
  // ** Return ** //
  //**----------**/

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "auto-component exclude"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "placeholder-top-left"
  }, "auto-component"), /*#__PURE__*/_react["default"].createElement("hr", null), responseData ? /*#__PURE__*/_react["default"].createElement(_reactJsxParser["default"], {
    jsx: responseData
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "auto-component-placeholder ".concat(isRequesting ? 'animate' : '')
  }), /*#__PURE__*/_react["default"].createElement("hr", null)), /*#__PURE__*/_react["default"].createElement("div", {
    id: "auto-component-ui"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "auto-component-code-container",
    className: "".concat(!activeTab ? 'auto-component-hidden' : '', " auto-component-code")
  }, /*#__PURE__*/_react["default"].createElement("pre", {
    id: "auto-component-code"
  }, activeTab === 'request' ? requestHTML : responseHtml), /*#__PURE__*/_react["default"].createElement("div", {
    className: "auto-component-copy",
    onClick: copyToClipboard,
    style: activeTab !== 'response' ? {
      display: 'none'
    } : null
  }, "copy")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "auto-component-entry"
  }, isRequesting ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-indicator"
  }) : /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: currentRequest,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    placeholder: "Enter a request"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGenerate
  }, "Generate"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleReset
  }, "X")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "auto-component-tabs"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(activeTab === 'request' ? 'auto-component-selected' : '', " tab"),
    onClick: handleRequestTab
  }, "Request"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(activeTab === 'response' ? 'auto-component-selected' : '', " tab"),
    onClick: handleResponseTab
  }, "Response")))));
};
var _default = exports["default"] = AutoComponent;