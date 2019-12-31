// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = h;
exports.Fragment = y;
exports.createRef = p;
exports.Component = d;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    f,
    r = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return v(n, o, l && l.key, l && l.ref);
}

function v(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function y(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, f, r;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, f = (o = (l = n).__v).__e, (r = l.__P) && (i = [], t = T(r, o, s({}, o), l.__n, void 0 !== r.ownerSVGElement, null, i, null == f ? m(o) : f), $(i, o), t != f && w(o)));
}

function _(n, l, u, i, t, o, f, c, s) {
  var h,
      v,
      p,
      y,
      d,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == r && (c = null != o ? o[0] : _ ? m(u, 0) : null), h = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
        if ((p = k[v]) && u.key == p.key && u.type === p.type) {
          k[v] = void 0;
          break;
        }

        p = null;
      }

      if (y = T(n, u, p = p || r, i, t, o, f, c, s), (v = u.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(v, u.__c || y, u)), null != y) {
        if (null == w && (w = y), null != u.__d) y = u.__d, u.__d = null;else if (o == p || y != c || null == y.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(y);else {
            for (d = c, v = 0; (d = d.nextSibling) && v < _; v += 2) if (d == y) break n;

            n.insertBefore(y, c);
          }

          "option" == l.type && (n.value = "");
        }
        c = y.nextSibling, "function" == typeof l.type && (l.__d = y);
      }
    }

    return h++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (h = o.length; h--;) null != o[h] && a(o[h]);

  for (h = _; h--;) null != k[h] && A(k[h], k[h]);

  if (g) for (h = 0; h < g.length; h++) z(g[h], g[++h], g[++h]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? v(null, n, null, null) : null != n.__e || null != n.__c ? v(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || P(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || P(n, o, l[o], u[o], i);
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function P(n, l, u, i, t) {
  var o, f, r, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (f in i) u && f in u || C(o, f, "");
      if (u) for (r in u) i && u[r] === i[r] || C(o, r, u[r]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function T(l, u, i, t, o, f, r, e, c) {
  var a,
      h,
      v,
      p,
      m,
      w,
      g,
      k,
      x,
      C,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, x = (a = P.contextType) && t[a.__c], C = a ? x ? x.props.value : a.__ : t, i.__c ? g = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new d(k, C), h.constructor = P, h.render = D), x && x.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, P.getDerivedStateFromProps(k, h.__s))), p = h.props, m = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {
          for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = i.__e, u.__k = i.__k, h.__h.length && r.push(h), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(p, m, w);
        });
      }
      h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = b(null != a && a.type == y && null == a.key ? a.props.children : a), null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, f, r, e, c), h.base = u.__e, h.__h.length && r.push(h), g && (h.__E = h.__ = null), h.__e = null;
    } else u.__e = j(i.__e, u, i, t, o, f, r, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, f, c) {
  var s,
      a,
      h,
      v,
      p,
      y = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), y !== d && (n.data = d);else if (l !== u) {
    if (null != o && (o = e.slice.call(n.childNodes)), h = (y = u.props || r).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !c) {
      if (y === r) for (y = {}, p = 0; p < n.attributes.length; p++) y[n.attributes[p].name] = n.attributes[p].value;
      (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || ""));
    }

    x(n, d, y, t, c), l.__k = l.props.children, v || _(n, l, u, i, "foreignObject" !== l.type && t, o, f, r, c), c || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked));
  }
  return n;
}

function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function A(l, u, i) {
  var t, o, f;

  if (n.unmount && n.unmount(l), (t = l.ref) && z(t, null, u), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = null, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (f = 0; f < t.length; f++) t[f] && A(t[f], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, f, c;
  n.__ && n.__(l, u), f = (t = i === o) ? null : i && i.__k || u.__k, l = h(y, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, f || r, r, void 0 !== u.ownerSVGElement, i && !t ? [i] : f ? null : e.slice.call(u.childNodes), c, i || r, t), $(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError) u.setState(u.constructor.getDerivedStateFromError(n));else {
        if (null == u.componentDidCatch) continue;
        u.componentDidCatch(n);
      }
      return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (this.__e = !1, l && this.__h.push(l), g(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, d.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = r, f = 0;
},{}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = v;
exports.useReducer = m;
exports.useEffect = p;
exports.useLayoutEffect = l;
exports.useRef = d;
exports.useImperativeHandle = s;
exports.useMemo = y;
exports.useCallback = T;
exports.useContext = w;
exports.useDebugValue = A;

var _preact = require("preact");

var t,
    u,
    r,
    i = [],
    o = _preact.options.__r,
    f = _preact.options.diffed,
    c = _preact.options.__c,
    e = _preact.options.unmount;

function a(t) {
  _preact.options.__h && _preact.options.__h(u);
  var r = u.__H || (u.__H = {
    t: [],
    u: []
  });
  return t >= r.t.length && r.t.push({}), r.t[t];
}

function v(n) {
  return m(x, n);
}

function m(n, r, i) {
  var o = a(t++);
  return o.__c || (o.__c = u, o.i = [i ? i(r) : x(void 0, r), function (t) {
    var u = n(o.i[0], t);
    o.i[0] !== u && (o.i[0] = u, o.__c.setState({}));
  }]), o.i;
}

function p(n, r) {
  var i = a(t++);
  q(i.o, r) && (i.i = n, i.o = r, u.__H.u.push(i));
}

function l(n, r) {
  var i = a(t++);
  q(i.o, r) && (i.i = n, i.o = r, u.__h.push(i));
}

function d(n) {
  return y(function () {
    return {
      current: n
    };
  }, []);
}

function s(n, t, u) {
  l(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function y(n, u) {
  var r = a(t++);
  return q(r.o, u) ? (r.o = u, r.v = n, r.i = n()) : r.i;
}

function T(n, t) {
  return y(function () {
    return n;
  }, t);
}

function w(n) {
  var r = u.context[n.__c];
  if (!r) return n.__;
  var i = a(t++);
  return null == i.i && (i.i = !0, r.sub(u)), r.props.value;
}

function A(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function F() {
  i.some(function (n) {
    n.__P && (n.__H.u.forEach(_), n.__H.u.forEach(g), n.__H.u = []);
  }), i = [];
}

function _(n) {
  n.m && n.m();
}

function g(n) {
  var t = n.i();
  "function" == typeof t && (n.m = t);
}

function q(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function x(n, t) {
  return "function" == typeof t ? t(n) : t;
}

_preact.options.__r = function (n) {
  o && o(n), t = 0, (u = n.__c).__H && (u.__H.u.forEach(_), u.__H.u.forEach(g), u.__H.u = []);
}, _preact.options.diffed = function (t) {
  f && f(t);
  var u = t.__c;

  if (u) {
    var o = u.__H;
    o && o.u.length && (1 !== i.push(u) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
      var t,
          u = function () {
        clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
      },
          r = setTimeout(u, 100);

      "undefined" != typeof window && (t = requestAnimationFrame(u));
    })(F));
  }
}, _preact.options.__c = function (n, t) {
  t.some(function (n) {
    n.__h.forEach(_), n.__h = n.__h.filter(function (n) {
      return !n.i || g(n);
    });
  }), c && c(n, t);
}, _preact.options.unmount = function (n) {
  e && e(n);
  var t = n.__c;

  if (t) {
    var u = t.__H;
    u && u.t.forEach(function (n) {
      return n.m && n.m();
    });
  }
};
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/compat/dist/compat.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  Children: true,
  render: true,
  hydrate: true,
  unmountComponentAtNode: true,
  createPortal: true,
  createFactory: true,
  cloneElement: true,
  isValidElement: true,
  findDOMNode: true,
  PureComponent: true,
  memo: true,
  forwardRef: true,
  unstable_batchedUpdates: true,
  Suspense: true,
  SuspenseList: true,
  lazy: true,
  createElement: true,
  createContext: true,
  createRef: true,
  Fragment: true,
  Component: true
};
exports.hydrate = exports.render = V;
exports.unmountComponentAtNode = K;
exports.createPortal = W;
exports.createFactory = B;
exports.cloneElement = J;
exports.isValidElement = G;
exports.findDOMNode = Q;
exports.memo = _;
exports.forwardRef = S;
exports.Suspense = M;
exports.SuspenseList = j;
exports.lazy = O;
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _preact.createElement;
  }
});
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _preact.createContext;
  }
});
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _preact.createRef;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.unstable_batchedUpdates = exports.PureComponent = exports.Children = exports.version = exports.default = void 0;

var _hooks = require("preact/hooks");

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});

var _preact = require("preact");

function E(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function w(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

var C = function (n) {
  var t, e;

  function r(t) {
    var e;
    return (e = n.call(this, t) || this).isPureReactComponent = !0, e;
  }

  return e = n, (t = r).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, r.prototype.shouldComponentUpdate = function (n, t) {
    return w(this.props, n) || w(this.state, t);
  }, r;
}(_preact.Component);

exports.PureComponent = C;

function _(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : w(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, (0, _preact.createElement)(n, E({}, t));
  }

  return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.t = !0, r;
}

var A = _preact.options.vnode;

function S(n) {
  function t(t) {
    var e = E({}, t);
    return delete e.ref, n(e, t.ref);
  }

  return t.prototype.isReactComponent = !0, t.t = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

_preact.options.vnode = function (n) {
  n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), A && A(n);
};

var k = function (n, t) {
  return n ? (0, _preact.toChildArray)(n).map(t) : null;
},
    F = {
  map: k,
  forEach: k,
  count: function (n) {
    return n ? (0, _preact.toChildArray)(n).length : 0;
  },
  only: function (n) {
    if (1 !== (n = (0, _preact.toChildArray)(n)).length) throw new Error("Children.only() expects only one child.");
    return n[0];
  },
  toArray: _preact.toChildArray
},
    N = _preact.options.__e;

exports.Children = F;

function R(n) {
  return n && ((n = E({}, n)).__c = null, n.__k = n.__k && n.__k.map(R)), n;
}

function M(n) {
  this.__u = 0, this.__b = null;
}

function U(n) {
  var t = n.__.__c;
  return t && t.o && t.o(n);
}

function O(n) {
  var t, e, r;

  function o(o) {
    if (t || (t = n()).then(function (n) {
      e = n.default;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return (0, _preact.createElement)(e, o);
  }

  return o.displayName = "Lazy", o.t = !0, o;
}

function j() {
  this.u = null, this.i = null;
}

_preact.options.__e = function (n, t, e) {
  if (n.then) for (var r, o = t; o = o.__;) if ((r = o.__c) && r.l) return r.l(n, t.__c);
  N(n, t, e);
}, (M.prototype = new _preact.Component()).l = function (n, t) {
  var e = this,
      r = U(e.__v),
      o = !1,
      u = function () {
    o || (o = !0, r ? r(i) : i());
  };

  t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
    u(), t.__c && t.__c();
  };

  var i = function () {
    --e.__u || (e.__v.__k[0] = e.state.o, e.setState({
      o: e.__b = null
    }));
  };

  e.__u++ || e.setState({
    o: e.__b = e.__v.__k[0]
  }), n.then(u, u);
}, M.prototype.render = function (n, t) {
  return this.__b && (this.__v.__k[0] = R(this.__b), this.__b = null), [(0, _preact.createElement)(_preact.Component, null, t.o ? null : n.children), t.o && n.fallback];
};

var z = function (n, t, e) {
  if (++e[1] === e[0] && n.i.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.i.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};

(j.prototype = new _preact.Component()).o = function (n) {
  var t = this,
      e = U(t.__v),
      r = t.i.get(n);
  return r[0]++, function (o) {
    var u = function () {
      t.props.revealOrder ? (r.push(o), z(t, n, r)) : o();
    };

    e ? e(u) : u();
  };
}, j.prototype.render = function (n) {
  this.u = null, this.i = new Map();
  var t = (0, _preact.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.i.set(t[e], this.u = [1, 0, this.u]);

  return n.children;
}, j.prototype.componentDidUpdate = j.prototype.componentDidMount = function () {
  var n = this;
  n.i.forEach(function (t, e) {
    z(n, e, t);
  });
};

var L = function () {
  function n() {}

  var t = n.prototype;
  return t.getChildContext = function () {
    return this.props.context;
  }, t.render = function (n) {
    return n.children;
  }, n;
}();

function P(n) {
  var t = this,
      e = n.container,
      r = (0, _preact.createElement)(L, {
    context: t.context
  }, n.vnode);
  return t.s && t.s !== e && (t.h.parentNode && t.s.removeChild(t.h), (0, _preact._unmount)(t.v), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, (0, _preact.render)(r, e), t.__k = e.__k) : (t.h = document.createTextNode(""), (0, _preact.hydrate)("", e), e.appendChild(t.h), t.p = !0, t.s = e, (0, _preact.render)(r, e, t.h), t.__k = this.h.__k) : t.p && (t.h.parentNode && t.s.removeChild(t.h), (0, _preact._unmount)(t.v)), t.v = r, t.componentWillUnmount = function () {
    t.h.parentNode && t.s.removeChild(t.h), (0, _preact._unmount)(t.v);
  }, null;
}

function W(n, t) {
  return (0, _preact.createElement)(P, {
    vnode: n,
    container: t
  });
}

var D = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;
_preact.Component.prototype.isReactComponent = {};
var T = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

function V(n, t, e) {
  if (null == t.__k) for (; t.firstChild;) t.removeChild(t.firstChild);
  return (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

var Z = _preact.options.event;

function H(n, t) {
  n["UNSAFE_" + t] && !n[t] && Object.defineProperty(n, t, {
    configurable: !1,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      this["UNSAFE_" + t] = n;
    }
  });
}

_preact.options.event = function (n) {
  return Z && (n = Z(n)), n.persist = function () {}, n.nativeEvent = n;
};

var I = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    $ = _preact.options.vnode;

_preact.options.vnode = function (n) {
  n.$$typeof = T;
  var t = n.type,
      e = n.props;

  if ("function" != typeof t) {
    var r, o, u;

    for (u in e.defaultValue && (e.value || 0 === e.value || (e.value = e.defaultValue), delete e.defaultValue), Array.isArray(e.value) && e.multiple && "select" === t && ((0, _preact.toChildArray)(e.children).forEach(function (n) {
      -1 != e.value.indexOf(n.props.value) && (n.props.selected = !0);
    }), delete e.value), e) if (r = D.test(u)) break;

    if (r) for (u in o = n.props = {}, e) o[D.test(u) ? u.replace(/([A-Z0-9])/, "-$1").toLowerCase() : u] = e[u];
  }

  (e.class || e.className) && (I.enumerable = "className" in e, e.className && (e.class = e.className), Object.defineProperty(e, "className", I)), function (t) {
    var e = n.type,
        r = n.props;

    if (r && "string" == typeof e) {
      var o = {};

      for (var u in r) /^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;

      if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
        var i = o.oninput || "oninput";
        r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
      }
    }
  }(), "function" == typeof t && !t.m && t.prototype && (H(t.prototype, "componentWillMount"), H(t.prototype, "componentWillReceiveProps"), H(t.prototype, "componentWillUpdate"), t.m = !0), $ && $(n);
};

var q = "16.8.0";
exports.version = q;

function B(n) {
  return _preact.createElement.bind(null, n);
}

function G(n) {
  return !!n && n.$$typeof === T;
}

function J(n) {
  return G(n) ? _preact.cloneElement.apply(null, arguments) : n;
}

function K(n) {
  return !!n.__k && ((0, _preact.render)(null, n), !0);
}

function Q(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var X = function (n, t) {
  return n(t);
};

exports.unstable_batchedUpdates = X;
var _default = {
  useState: _hooks.useState,
  useReducer: _hooks.useReducer,
  useEffect: _hooks.useEffect,
  useLayoutEffect: _hooks.useLayoutEffect,
  useRef: _hooks.useRef,
  useImperativeHandle: _hooks.useImperativeHandle,
  useMemo: _hooks.useMemo,
  useCallback: _hooks.useCallback,
  useContext: _hooks.useContext,
  useDebugValue: _hooks.useDebugValue,
  version: "16.8.0",
  Children: F,
  render: V,
  hydrate: V,
  unmountComponentAtNode: K,
  createPortal: W,
  createElement: _preact.createElement,
  createContext: _preact.createContext,
  createFactory: B,
  cloneElement: J,
  createRef: _preact.createRef,
  Fragment: _preact.Fragment,
  isValidElement: G,
  findDOMNode: Q,
  Component: _preact.Component,
  PureComponent: C,
  memo: _,
  forwardRef: S,
  unstable_batchedUpdates: X,
  Suspense: M,
  SuspenseList: j,
  lazy: O
};
exports.default = _default;
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","preact":"../node_modules/preact/dist/preact.module.js"}],"../src/useObjectState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useObjectState = useObjectState;

var _compat = require("preact/compat");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useObjectState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = (0, _compat.useState)(function () {
    return initialState;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var ref = (0, _compat.useRef)();
  ref.current = state;
  return [function () {
    return ref.current;
  }, function (merge) {
    return setState(ref.current = _objectSpread({}, ref.current, {}, merge));
  }, function (state) {
    return setState(state);
  }];
}
},{"preact/compat":"../node_modules/preact/compat/dist/compat.module.js"}],"../src/preact-custom-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;

var _preact = require("preact");

function register(Component, tagName, propNames) {
  function PreactElement() {
    var inst = Reflect.construct(HTMLElement, [], PreactElement);
    inst._vdomComponent = Component;
    return inst;
  }

  PreactElement.prototype = Object.create(HTMLElement.prototype);
  PreactElement.prototype.constructor = PreactElement;
  PreactElement.prototype.connectedCallback = connectedCallback;
  PreactElement.prototype.attributeChangedCallback = attributeChangedCallback;
  PreactElement.prototype.detachedCallback = detachedCallback;
  PreactElement.observedAttributes = propNames || Component.observedAttributes || Object.keys(Component.propTypes || {});
  return customElements.define(tagName || Component.tagName || Component.displayName || Component.name, PreactElement);
}

function connectedCallback() {
  this._vdom = toVdom(this, this._vdomComponent);
  (0, _preact.render)(this._vdom, this);
}

function attributeChangedCallback(name, oldValue, newValue) {
  if (!this._vdom) return;
  var props = {};
  props[name] = newValue;
  this._vdom = (0, _preact.cloneElement)(this._vdom, props);
  (0, _preact.render)(this._vdom, this);
}

function detachedCallback() {
  (0, _preact.render)(this._vdom = null, this);
}

function toVdom(element, nodeName) {
  if (element.nodeType === 3) return element.data;
  if (element.nodeType !== 1) return null;
  var children = [],
      props = {},
      i = 0,
      a = element.attributes,
      cn = element.childNodes;

  for (i = a.length; i--;) {
    props[a[i].name] = a[i].value;
  }

  for (i = cn.length; i--;) {
    children[i] = toVdom(cn[i]);
  }

  ;
  props.nativeElement = element;
  return (0, _preact.h)(nodeName || element.nodeName.toLowerCase(), props, children);
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../src/utils/logActivity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logActivity = logActivity;

/**
 * 
 * @param {string} state 
 * @param {string} color 
 * @param  {...any} rest 
 */
function logActivity() {
  var _console;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "info";
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#1E90FF';
  var submitLogStyle = "\n        background-color: ".concat(color, ";\n        color: #000;\n        text-transform: uppercase;\n        padding: 2px 4px;\n        font-weight: bold;\n        border-radius: 2px");

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  (_console = console).log.apply(_console, ["%c".concat(state), submitLogStyle].concat(rest));
}
},{}],"../src/FormContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContainer = FormContainer;

var _preact = require("preact");

var _compat = require("preact/compat");

var _useObjectState3 = require("./useObjectState");

var _preactCustomElement = _interopRequireDefault(require("./preact-custom-element"));

var _logActivity = require("./utils/logActivity");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FormContainer(_ref) {
  var formEl = _ref.nativeElement;

  var _useObjectState = (0, _useObjectState3.useObjectState)(formEl.state || {}),
      _useObjectState2 = _slicedToArray(_useObjectState, 3),
      getForm = _useObjectState2[0],
      setForm = _useObjectState2[1],
      updateForm = _useObjectState2[2];

  formEl.state = formEl.state || {};
  (0, _compat.useEffect)(function () {
    Object.assign(formEl, {
      __bootstrapped: true,
      update: function update(payload) {
        setForm(payload);
      }
    });
    formEl.addEventListener("input", function (event) {
      var _event$target = event.target,
          _event$target$name = _event$target.name,
          name = _event$target$name === void 0 ? event.target.getAttribute('name') : _event$target$name,
          value = _event$target.value;
      setForm(_defineProperty({}, name, value));
    });
    formEl.addEventListener("submit", function () {
      (0, _logActivity.logActivity)("submit", void 0, formEl.state);
    });
    updateForm(formEl.state);
  }, []);
  (0, _compat.useEffect)(function () {
    formEl.state = getForm();
    formEl.dispatchEvent(new CustomEvent("formupdate", {
      detail: getForm()
    }));
  }, [getForm()]);
  return null;
}

(0, _preactCustomElement.default)(FormContainer, "form-container", []);
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/compat":"../node_modules/preact/compat/dist/compat.module.js","./useObjectState":"../src/useObjectState.js","./preact-custom-element":"../src/preact-custom-element.js","./utils/logActivity":"../src/utils/logActivity.js"}],"../src/getFormContainerElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormContainerElement = getFormContainerElement;

function getFormContainerElement(el) {
  while (el.parentNode && el.parentNode.nodeName.toLowerCase() !== 'form-container') {
    el = el.parentNode;
  }

  return el.parentNode;
}
},{}],"../src/useFormContainerContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormContainerContext = useFormContainerContext;

var _compat = require("preact/compat");

var _getFormContainerElement = require("./getFormContainerElement");

var _useObjectState3 = require("./useObjectState");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useFormContainerContext(nativeElement) {
  var _useObjectState = (0, _useObjectState3.useObjectState)({
    values: {}
  }),
      _useObjectState2 = _slicedToArray(_useObjectState, 2),
      getState = _useObjectState2[0],
      setState = _useObjectState2[1];

  var formContainerElement = (0, _getFormContainerElement.getFormContainerElement)(nativeElement);
  var updateListener = (0, _compat.useCallback)(function (event) {
    setState({
      values: event.detail
    });
  }, []);
  (0, _compat.useEffect)(function () {
    formContainerElement.addEventListener('formupdate', updateListener);
    return function () {
      return formContainerElement.removeEventListener('formupdate', updateListener);
    };
  }, []);
  return getState;
}
},{"preact/compat":"../node_modules/preact/compat/dist/compat.module.js","./getFormContainerElement":"../src/getFormContainerElement.js","./useObjectState":"../src/useObjectState.js"}],"../src/DebugForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebugForm = DebugForm;

var _preact = require("preact");

var _preactCustomElement = _interopRequireDefault(require("./preact-custom-element"));

var _useFormContainerContext = require("./useFormContainerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DebugForm(_ref) {
  var nativeElement = _ref.nativeElement;
  var getContext = (0, _useFormContainerContext.useFormContainerContext)(nativeElement);
  return (0, _preact.h)("pre", null, JSON.stringify(getContext().values, null, 4));
}

(0, _preactCustomElement.default)(DebugForm, 'debug-form', []);
},{"preact":"../node_modules/preact/dist/preact.module.js","./preact-custom-element":"../src/preact-custom-element.js","./useFormContainerContext":"../src/useFormContainerContext.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormContainer", {
  enumerable: true,
  get: function () {
    return _FormContainer.FormContainer;
  }
});
Object.defineProperty(exports, "DebugForm", {
  enumerable: true,
  get: function () {
    return _DebugForm.DebugForm;
  }
});

var _FormContainer = require("./FormContainer");

var _DebugForm = require("./DebugForm");
},{"./FormContainer":"../src/FormContainer.js","./DebugForm":"../src/DebugForm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58618" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map