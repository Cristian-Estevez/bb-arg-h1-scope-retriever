var xr = (t) => {
  throw TypeError(t);
};
var qt = (t, r, n) => r.has(t) || xr("Cannot " + n);
var h = (t, r, n) => (qt(t, r, "read from private field"), n ? n.call(t) : r.get(t)), he = (t, r, n) => r.has(t) ? xr("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, n), J = (t, r, n, a) => (qt(t, r, "write to private field"), a ? a.call(t, n) : r.set(t, n), n), ve = (t, r, n) => (qt(t, r, "access private method"), n);
function dn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ot = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function gn() {
  if (Er) return bt;
  Er = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(a, c, d) {
    var l = null;
    if (d !== void 0 && (l = "" + d), c.key !== void 0 && (l = "" + c.key), "key" in c) {
      d = {};
      for (var p in c)
        p !== "key" && (d[p] = c[p]);
    } else d = c;
    return c = d.ref, {
      $$typeof: t,
      type: a,
      key: l,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return bt.Fragment = r, bt.jsx = n, bt.jsxs = n, bt;
}
var vt = {}, Nt = { exports: {} }, B = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function hn() {
  if (Cr) return B;
  Cr = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), P = Symbol.iterator;
  function ue(s) {
    return s === null || typeof s != "object" ? null : (s = P && s[P] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, K = {};
  function D(s, g, N) {
    this.props = s, this.context = g, this.refs = K, this.updater = N || q;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(s, g) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, g, "setState");
  }, D.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function le() {
  }
  le.prototype = D.prototype;
  function W(s, g, N) {
    this.props = s, this.context = g, this.refs = K, this.updater = N || q;
  }
  var fe = W.prototype = new le();
  fe.constructor = W, X(fe, D.prototype), fe.isPureReactComponent = !0;
  var me = Array.isArray, U = { H: null, A: null, T: null, S: null }, u = Object.prototype.hasOwnProperty;
  function b(s, g, N, O, z, te) {
    return N = te.ref, {
      $$typeof: t,
      type: s,
      key: g,
      ref: N !== void 0 ? N : null,
      props: te
    };
  }
  function $(s, g) {
    return b(
      s.type,
      g,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function C(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }
  function Q(s) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(N) {
      return g[N];
    });
  }
  var re = /\/+/g;
  function ne(s, g) {
    return typeof s == "object" && s !== null && s.key != null ? Q("" + s.key) : g.toString(36);
  }
  function j() {
  }
  function oe(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(j, j) : (s.status = "pending", s.then(
          function(g) {
            s.status === "pending" && (s.status = "fulfilled", s.value = g);
          },
          function(g) {
            s.status === "pending" && (s.status = "rejected", s.reason = g);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Y(s, g, N, O, z) {
    var te = typeof s;
    (te === "undefined" || te === "boolean") && (s = null);
    var H = !1;
    if (s === null) H = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          H = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case t:
            case r:
              H = !0;
              break;
            case R:
              return H = s._init, Y(
                H(s._payload),
                g,
                N,
                O,
                z
              );
          }
      }
    if (H)
      return z = z(s), H = O === "" ? "." + ne(s, 0) : O, me(z) ? (N = "", H != null && (N = H.replace(re, "$&/") + "/"), Y(z, g, N, "", function(Ie) {
        return Ie;
      })) : z != null && (C(z) && (z = $(
        z,
        N + (z.key == null || s && s.key === z.key ? "" : ("" + z.key).replace(
          re,
          "$&/"
        ) + "/") + H
      )), g.push(z)), 1;
    H = 0;
    var we = O === "" ? "." : O + ":";
    if (me(s))
      for (var de = 0; de < s.length; de++)
        O = s[de], te = we + ne(O, de), H += Y(
          O,
          g,
          N,
          te,
          z
        );
    else if (de = ue(s), typeof de == "function")
      for (s = de.call(s), de = 0; !(O = s.next()).done; )
        O = O.value, te = we + ne(O, de++), H += Y(
          O,
          g,
          N,
          te,
          z
        );
    else if (te === "object") {
      if (typeof s.then == "function")
        return Y(
          oe(s),
          g,
          N,
          O,
          z
        );
      throw g = String(s), Error(
        "Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return H;
  }
  function L(s, g, N) {
    if (s == null) return s;
    var O = [], z = 0;
    return Y(s, O, "", "", function(te) {
      return g.call(N, te, z++);
    }), O;
  }
  function ye(s) {
    if (s._status === -1) {
      var g = s._result;
      g = g(), g.then(
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = N);
        },
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = N);
        }
      ), s._status === -1 && (s._status = 0, s._result = g);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var ee = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var g = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(g)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function I() {
  }
  return B.Children = {
    map: L,
    forEach: function(s, g, N) {
      L(
        s,
        function() {
          g.apply(this, arguments);
        },
        N
      );
    },
    count: function(s) {
      var g = 0;
      return L(s, function() {
        g++;
      }), g;
    },
    toArray: function(s) {
      return L(s, function(g) {
        return g;
      }) || [];
    },
    only: function(s) {
      if (!C(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, B.Component = D, B.Fragment = n, B.Profiler = c, B.PureComponent = W, B.StrictMode = a, B.Suspense = m, B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, B.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, B.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, B.cloneElement = function(s, g, N) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = X({}, s.props), z = s.key, te = void 0;
    if (g != null)
      for (H in g.ref !== void 0 && (te = void 0), g.key !== void 0 && (z = "" + g.key), g)
        !u.call(g, H) || H === "key" || H === "__self" || H === "__source" || H === "ref" && g.ref === void 0 || (O[H] = g[H]);
    var H = arguments.length - 2;
    if (H === 1) O.children = N;
    else if (1 < H) {
      for (var we = Array(H), de = 0; de < H; de++)
        we[de] = arguments[de + 2];
      O.children = we;
    }
    return b(s.type, z, void 0, void 0, te, O);
  }, B.createContext = function(s) {
    return s = {
      $$typeof: l,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: d,
      _context: s
    }, s;
  }, B.createElement = function(s, g, N) {
    var O, z = {}, te = null;
    if (g != null)
      for (O in g.key !== void 0 && (te = "" + g.key), g)
        u.call(g, O) && O !== "key" && O !== "__self" && O !== "__source" && (z[O] = g[O]);
    var H = arguments.length - 2;
    if (H === 1) z.children = N;
    else if (1 < H) {
      for (var we = Array(H), de = 0; de < H; de++)
        we[de] = arguments[de + 2];
      z.children = we;
    }
    if (s && s.defaultProps)
      for (O in H = s.defaultProps, H)
        z[O] === void 0 && (z[O] = H[O]);
    return b(s, te, void 0, void 0, null, z);
  }, B.createRef = function() {
    return { current: null };
  }, B.forwardRef = function(s) {
    return { $$typeof: p, render: s };
  }, B.isValidElement = C, B.lazy = function(s) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: s },
      _init: ye
    };
  }, B.memo = function(s, g) {
    return {
      $$typeof: T,
      type: s,
      compare: g === void 0 ? null : g
    };
  }, B.startTransition = function(s) {
    var g = U.T, N = {};
    U.T = N;
    try {
      var O = s(), z = U.S;
      z !== null && z(N, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(I, ee);
    } catch (te) {
      ee(te);
    } finally {
      U.T = g;
    }
  }, B.unstable_useCacheRefresh = function() {
    return U.H.useCacheRefresh();
  }, B.use = function(s) {
    return U.H.use(s);
  }, B.useActionState = function(s, g, N) {
    return U.H.useActionState(s, g, N);
  }, B.useCallback = function(s, g) {
    return U.H.useCallback(s, g);
  }, B.useContext = function(s) {
    return U.H.useContext(s);
  }, B.useDebugValue = function() {
  }, B.useDeferredValue = function(s, g) {
    return U.H.useDeferredValue(s, g);
  }, B.useEffect = function(s, g) {
    return U.H.useEffect(s, g);
  }, B.useId = function() {
    return U.H.useId();
  }, B.useImperativeHandle = function(s, g, N) {
    return U.H.useImperativeHandle(s, g, N);
  }, B.useInsertionEffect = function(s, g) {
    return U.H.useInsertionEffect(s, g);
  }, B.useLayoutEffect = function(s, g) {
    return U.H.useLayoutEffect(s, g);
  }, B.useMemo = function(s, g) {
    return U.H.useMemo(s, g);
  }, B.useOptimistic = function(s, g) {
    return U.H.useOptimistic(s, g);
  }, B.useReducer = function(s, g, N) {
    return U.H.useReducer(s, g, N);
  }, B.useRef = function(s) {
    return U.H.useRef(s);
  }, B.useState = function(s) {
    return U.H.useState(s);
  }, B.useSyncExternalStore = function(s, g, N) {
    return U.H.useSyncExternalStore(
      s,
      g,
      N
    );
  }, B.useTransition = function() {
    return U.H.useTransition();
  }, B.version = "19.0.0", B;
}
var yt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yt.exports;
var kr;
function mn() {
  return kr || (kr = 1, function(t, r) {
    process.env.NODE_ENV !== "production" && function() {
      function n(e, i) {
        Object.defineProperty(d.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              i[0],
              i[1]
            );
          }
        });
      }
      function a(e) {
        return e === null || typeof e != "object" ? null : (e = mt && e[mt] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function c(e, i) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var f = e + "." + i;
        pt[f] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          i,
          e
        ), pt[f] = !0);
      }
      function d(e, i, f) {
        this.props = e, this.context = i, this.refs = w, this.updater = f || o;
      }
      function l() {
      }
      function p(e, i, f) {
        this.props = e, this.context = i, this.refs = w, this.updater = f || o;
      }
      function m(e) {
        return "" + e;
      }
      function T(e) {
        try {
          m(e);
          var i = !1;
        } catch {
          i = !0;
        }
        if (i) {
          i = console;
          var f = i.error, v = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return f.call(
            i,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            v
          ), m(e);
        }
      }
      function R(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === F ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case de:
            return "Fragment";
          case we:
            return "Portal";
          case ot:
            return "Profiler";
          case Ie:
            return "StrictMode";
          case ze:
            return "Suspense";
          case Qe:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case Ge:
              return (e.displayName || "Context") + ".Provider";
            case Ye:
              return (e._context.displayName || "Context") + ".Consumer";
            case De:
              var i = e.render;
              return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Ke:
              return i = e.displayName || null, i !== null ? i : R(e.type) || "Memo";
            case He:
              i = e._payload, e = e._init;
              try {
                return R(e(i));
              } catch {
              }
          }
        return null;
      }
      function P(e) {
        return typeof e == "string" || typeof e == "function" || e === de || e === ot || e === Ie || e === ze || e === Qe || e === _t || typeof e == "object" && e !== null && (e.$$typeof === He || e.$$typeof === Ke || e.$$typeof === Ge || e.$$typeof === Ye || e.$$typeof === De || e.$$typeof === xe || e.getModuleId !== void 0);
      }
      function ue() {
      }
      function q() {
        if (Re === 0) {
          $e = console.log, je = console.info, Ve = console.warn, Se = console.error, cr = console.group, ur = console.groupCollapsed, fr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Re++;
      }
      function X() {
        if (Re--, Re === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: y({}, e, { value: $e }),
            info: y({}, e, { value: je }),
            warn: y({}, e, { value: Ve }),
            error: y({}, e, { value: Se }),
            group: y({}, e, { value: cr }),
            groupCollapsed: y({}, e, { value: ur }),
            groupEnd: y({}, e, { value: fr })
          });
        }
        0 > Re && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function K(e) {
        if (Ht === void 0)
          try {
            throw Error();
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
            Ht = i && i[1] || "", dr = -1 < f.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < f.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Ht + e + dr;
      }
      function D(e, i) {
        if (!e || $t) return "";
        var f = Ut.get(e);
        if (f !== void 0) return f;
        $t = !0, f = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var v = null;
        v = M.H, M.H = null, q();
        try {
          var A = {
            DetermineComponentFrameRoot: function() {
              try {
                if (i) {
                  var Oe = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Oe.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Oe, []);
                    } catch (Le) {
                      var jt = Le;
                    }
                    Reflect.construct(e, [], Oe);
                  } else {
                    try {
                      Oe.call();
                    } catch (Le) {
                      jt = Le;
                    }
                    e.call(Oe.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Le) {
                    jt = Le;
                  }
                  (Oe = e()) && typeof Oe.catch == "function" && Oe.catch(function() {
                  });
                }
              } catch (Le) {
                if (Le && jt && typeof Le.stack == "string")
                  return [Le.stack, jt.stack];
              }
              return [null, null];
            }
          };
          A.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var S = Object.getOwnPropertyDescriptor(
            A.DetermineComponentFrameRoot,
            "name"
          );
          S && S.configurable && Object.defineProperty(
            A.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var k = A.DetermineComponentFrameRoot(), ae = k[0], se = k[1];
          if (ae && se) {
            var pe = ae.split(`
`), Ce = se.split(`
`);
            for (k = S = 0; S < pe.length && !pe[S].includes(
              "DetermineComponentFrameRoot"
            ); )
              S++;
            for (; k < Ce.length && !Ce[k].includes(
              "DetermineComponentFrameRoot"
            ); )
              k++;
            if (S === pe.length || k === Ce.length)
              for (S = pe.length - 1, k = Ce.length - 1; 1 <= S && 0 <= k && pe[S] !== Ce[k]; )
                k--;
            for (; 1 <= S && 0 <= k; S--, k--)
              if (pe[S] !== Ce[k]) {
                if (S !== 1 || k !== 1)
                  do
                    if (S--, k--, 0 > k || pe[S] !== Ce[k]) {
                      var Xe = `
` + pe[S].replace(
                        " at new ",
                        " at "
                      );
                      return e.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", e.displayName)), typeof e == "function" && Ut.set(e, Xe), Xe;
                    }
                  while (1 <= S && 0 <= k);
                break;
              }
          }
        } finally {
          $t = !1, M.H = v, X(), Error.prepareStackTrace = f;
        }
        return pe = (pe = e ? e.displayName || e.name : "") ? K(pe) : "", typeof e == "function" && Ut.set(e, pe), pe;
      }
      function le(e) {
        if (e == null) return "";
        if (typeof e == "function") {
          var i = e.prototype;
          return D(
            e,
            !(!i || !i.isReactComponent)
          );
        }
        if (typeof e == "string") return K(e);
        switch (e) {
          case ze:
            return K("Suspense");
          case Qe:
            return K("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case De:
              return e = D(e.render, !1), e;
            case Ke:
              return le(e.type);
            case He:
              i = e._payload, e = e._init;
              try {
                return le(e(i));
              } catch {
              }
          }
        return "";
      }
      function W() {
        var e = M.A;
        return e === null ? null : e.getOwner();
      }
      function fe(e) {
        if (Te.call(e, "key")) {
          var i = Object.getOwnPropertyDescriptor(e, "key").get;
          if (i && i.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function me(e, i) {
        function f() {
          gr || (gr = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            i
          ));
        }
        f.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: f,
          configurable: !0
        });
      }
      function U() {
        var e = R(this.type);
        return mr[e] || (mr[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function u(e, i, f, v, A, S) {
        return f = S.ref, e = {
          $$typeof: H,
          type: e,
          key: i,
          props: S,
          _owner: A
        }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: U
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function b(e, i) {
        return i = u(
          e.type,
          i,
          void 0,
          void 0,
          e._owner,
          e.props
        ), i._store.validated = e._store.validated, i;
      }
      function $(e, i) {
        if (typeof e == "object" && e && e.$$typeof !== fn) {
          if (ce(e))
            for (var f = 0; f < e.length; f++) {
              var v = e[f];
              C(v) && Q(v, i);
            }
          else if (C(e))
            e._store && (e._store.validated = 1);
          else if (f = a(e), typeof f == "function" && f !== e.entries && (f = f.call(e), f !== e))
            for (; !(e = f.next()).done; )
              C(e.value) && Q(e.value, i);
        }
      }
      function C(e) {
        return typeof e == "object" && e !== null && e.$$typeof === H;
      }
      function Q(e, i) {
        if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, i = re(i), !pr[i])) {
          pr[i] = !0;
          var f = "";
          e && e._owner != null && e._owner !== W() && (f = null, typeof e._owner.tag == "number" ? f = R(e._owner.type) : typeof e._owner.name == "string" && (f = e._owner.name), f = " It was passed a child from " + f + ".");
          var v = M.getCurrentStack;
          M.getCurrentStack = function() {
            var A = le(e.type);
            return v && (A += v() || ""), A;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            i,
            f
          ), M.getCurrentStack = v;
        }
      }
      function re(e) {
        var i = "", f = W();
        return f && (f = R(f.type)) && (i = `

Check the render method of \`` + f + "`."), i || (e = R(e)) && (i = `

Check the top-level render call using <` + e + ">."), i;
      }
      function ne(e) {
        var i = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(f) {
          return i[f];
        });
      }
      function j(e, i) {
        return typeof e == "object" && e !== null && e.key != null ? (T(e.key), ne("" + e.key)) : i.toString(36);
      }
      function oe() {
      }
      function Y(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(oe, oe) : (e.status = "pending", e.then(
              function(i) {
                e.status === "pending" && (e.status = "fulfilled", e.value = i);
              },
              function(i) {
                e.status === "pending" && (e.status = "rejected", e.reason = i);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function L(e, i, f, v, A) {
        var S = typeof e;
        (S === "undefined" || S === "boolean") && (e = null);
        var k = !1;
        if (e === null) k = !0;
        else
          switch (S) {
            case "bigint":
            case "string":
            case "number":
              k = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case H:
                case we:
                  k = !0;
                  break;
                case He:
                  return k = e._init, L(
                    k(e._payload),
                    i,
                    f,
                    v,
                    A
                  );
              }
          }
        if (k) {
          k = e, A = A(k);
          var ae = v === "" ? "." + j(k, 0) : v;
          return ce(A) ? (f = "", ae != null && (f = ae.replace(vr, "$&/") + "/"), L(A, i, f, "", function(pe) {
            return pe;
          })) : A != null && (C(A) && (A.key != null && (k && k.key === A.key || T(A.key)), f = b(
            A,
            f + (A.key == null || k && k.key === A.key ? "" : ("" + A.key).replace(
              vr,
              "$&/"
            ) + "/") + ae
          ), v !== "" && k != null && C(k) && k.key == null && k._store && !k._store.validated && (f._store.validated = 2), A = f), i.push(A)), 1;
        }
        if (k = 0, ae = v === "" ? "." : v + ":", ce(e))
          for (var se = 0; se < e.length; se++)
            v = e[se], S = ae + j(v, se), k += L(
              v,
              i,
              f,
              S,
              A
            );
        else if (se = a(e), typeof se == "function")
          for (se === e.entries && (br || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), br = !0), e = se.call(e), se = 0; !(v = e.next()).done; )
            v = v.value, S = ae + j(v, se++), k += L(
              v,
              i,
              f,
              S,
              A
            );
        else if (S === "object") {
          if (typeof e.then == "function")
            return L(
              Y(e),
              i,
              f,
              v,
              A
            );
          throw i = String(e), Error(
            "Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return k;
      }
      function ye(e, i, f) {
        if (e == null) return e;
        var v = [], A = 0;
        return L(e, v, "", "", function(S) {
          return i.call(f, S, A++);
        }), v;
      }
      function ee(e) {
        if (e._status === -1) {
          var i = e._result;
          i = i(), i.then(
            function(f) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = f);
            },
            function(f) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = f);
            }
          ), e._status === -1 && (e._status = 0, e._result = i);
        }
        if (e._status === 1)
          return i = e._result, i === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            i
          ), "default" in i || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            i
          ), i.default;
        throw e._result;
      }
      function I() {
        var e = M.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function s() {
      }
      function g(e) {
        if (Rt === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7);
            Rt = (t && t[i]).call(
              t,
              "timers"
            ).setImmediate;
          } catch {
            Rt = function(v) {
              wr === !1 && (wr = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var A = new MessageChannel();
              A.port1.onmessage = v, A.port2.postMessage(void 0);
            };
          }
        return Rt(e);
      }
      function N(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function O(e, i) {
        i !== St - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), St = i;
      }
      function z(e, i, f) {
        var v = M.actQueue;
        if (v !== null)
          if (v.length !== 0)
            try {
              te(v), g(function() {
                return z(e, i, f);
              });
              return;
            } catch (A) {
              M.thrownErrors.push(A);
            }
          else M.actQueue = null;
        0 < M.thrownErrors.length ? (v = N(M.thrownErrors), M.thrownErrors.length = 0, f(v)) : i(e);
      }
      function te(e) {
        if (!Ft) {
          Ft = !0;
          var i = 0;
          try {
            for (; i < e.length; i++) {
              var f = e[i];
              do {
                M.didUsePromise = !1;
                var v = f(!1);
                if (v !== null) {
                  if (M.didUsePromise) {
                    e[i] = f, e.splice(0, i);
                    return;
                  }
                  f = v;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (A) {
            e.splice(0, i + 1), M.thrownErrors.push(A);
          } finally {
            Ft = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var H = Symbol.for("react.transitional.element"), we = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), ot = Symbol.for("react.profiler"), Ye = Symbol.for("react.consumer"), Ge = Symbol.for("react.context"), De = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), Ke = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), _t = Symbol.for("react.offscreen"), mt = Symbol.iterator, pt = {}, o = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          c(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          c(e, "replaceState");
        },
        enqueueSetState: function(e) {
          c(e, "setState");
        }
      }, y = Object.assign, w = {};
      Object.freeze(w), d.prototype.isReactComponent = {}, d.prototype.setState = function(e, i) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, i, "setState");
      }, d.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var G = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, be;
      for (be in G)
        G.hasOwnProperty(be) && n(be, G[be]);
      l.prototype = d.prototype, G = p.prototype = new l(), G.constructor = p, y(G, d.prototype), G.isPureReactComponent = !0;
      var ce = Array.isArray, F = Symbol.for("react.client.reference"), M = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, Te = Object.prototype.hasOwnProperty, xe = Symbol.for("react.client.reference"), Re = 0, $e, je, Ve, Se, cr, ur, fr;
      ue.__reactDisabledLog = !0;
      var Ht, dr, $t = !1, Ut = new (typeof WeakMap == "function" ? WeakMap : Map)(), fn = Symbol.for("react.client.reference"), gr, hr, mr = {}, pr = {}, br = !1, vr = /\/+/g, yr = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var i = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(i)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, wr = !1, Rt = null, St = 0, Tt = !1, Ft = !1, Ar = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : g;
      r.Children = {
        map: ye,
        forEach: function(e, i, f) {
          ye(
            e,
            function() {
              i.apply(this, arguments);
            },
            f
          );
        },
        count: function(e) {
          var i = 0;
          return ye(e, function() {
            i++;
          }), i;
        },
        toArray: function(e) {
          return ye(e, function(i) {
            return i;
          }) || [];
        },
        only: function(e) {
          if (!C(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, r.Component = d, r.Fragment = de, r.Profiler = ot, r.PureComponent = p, r.StrictMode = Ie, r.Suspense = ze, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, r.act = function(e) {
        var i = M.actQueue, f = St;
        St++;
        var v = M.actQueue = i !== null ? i : [], A = !1;
        try {
          var S = e();
        } catch (se) {
          M.thrownErrors.push(se);
        }
        if (0 < M.thrownErrors.length)
          throw O(i, f), e = N(M.thrownErrors), M.thrownErrors.length = 0, e;
        if (S !== null && typeof S == "object" && typeof S.then == "function") {
          var k = S;
          return Ar(function() {
            A || Tt || (Tt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(se, pe) {
              A = !0, k.then(
                function(Ce) {
                  if (O(i, f), f === 0) {
                    try {
                      te(v), g(function() {
                        return z(
                          Ce,
                          se,
                          pe
                        );
                      });
                    } catch (Oe) {
                      M.thrownErrors.push(Oe);
                    }
                    if (0 < M.thrownErrors.length) {
                      var Xe = N(
                        M.thrownErrors
                      );
                      M.thrownErrors.length = 0, pe(Xe);
                    }
                  } else se(Ce);
                },
                function(Ce) {
                  O(i, f), 0 < M.thrownErrors.length && (Ce = N(
                    M.thrownErrors
                  ), M.thrownErrors.length = 0), pe(Ce);
                }
              );
            }
          };
        }
        var ae = S;
        if (O(i, f), f === 0 && (te(v), v.length !== 0 && Ar(function() {
          A || Tt || (Tt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), M.actQueue = null), 0 < M.thrownErrors.length)
          throw e = N(M.thrownErrors), M.thrownErrors.length = 0, e;
        return {
          then: function(se, pe) {
            A = !0, f === 0 ? (M.actQueue = v, g(function() {
              return z(
                ae,
                se,
                pe
              );
            })) : se(ae);
          }
        };
      }, r.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, r.cloneElement = function(e, i, f) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var v = y({}, e.props), A = e.key, S = e._owner;
        if (i != null) {
          var k;
          e: {
            if (Te.call(i, "ref") && (k = Object.getOwnPropertyDescriptor(
              i,
              "ref"
            ).get) && k.isReactWarning) {
              k = !1;
              break e;
            }
            k = i.ref !== void 0;
          }
          k && (S = W()), fe(i) && (T(i.key), A = "" + i.key);
          for (ae in i)
            !Te.call(i, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && i.ref === void 0 || (v[ae] = i[ae]);
        }
        var ae = arguments.length - 2;
        if (ae === 1) v.children = f;
        else if (1 < ae) {
          k = Array(ae);
          for (var se = 0; se < ae; se++)
            k[se] = arguments[se + 2];
          v.children = k;
        }
        for (v = u(e.type, A, void 0, void 0, S, v), A = 2; A < arguments.length; A++)
          $(arguments[A], v.type);
        return v;
      }, r.createContext = function(e) {
        return e = {
          $$typeof: Ge,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: Ye,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, r.createElement = function(e, i, f) {
        if (P(e))
          for (var v = 2; v < arguments.length; v++)
            $(arguments[v], e);
        else {
          if (v = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null) var A = "null";
          else
            ce(e) ? A = "array" : e !== void 0 && e.$$typeof === H ? (A = "<" + (R(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            A,
            v
          );
        }
        var S;
        if (v = {}, A = null, i != null)
          for (S in hr || !("__self" in i) || "key" in i || (hr = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), fe(i) && (T(i.key), A = "" + i.key), i)
            Te.call(i, S) && S !== "key" && S !== "__self" && S !== "__source" && (v[S] = i[S]);
        var k = arguments.length - 2;
        if (k === 1) v.children = f;
        else if (1 < k) {
          for (var ae = Array(k), se = 0; se < k; se++)
            ae[se] = arguments[se + 2];
          Object.freeze && Object.freeze(ae), v.children = ae;
        }
        if (e && e.defaultProps)
          for (S in k = e.defaultProps, k)
            v[S] === void 0 && (v[S] = k[S]);
        return A && me(
          v,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        ), u(e, A, void 0, void 0, W(), v);
      }, r.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, r.forwardRef = function(e) {
        e != null && e.$$typeof === Ke ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var i = { $$typeof: De, render: e }, f;
        return Object.defineProperty(i, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return f;
          },
          set: function(v) {
            f = v, e.name || e.displayName || (Object.defineProperty(e, "name", { value: v }), e.displayName = v);
          }
        }), i;
      }, r.isValidElement = C, r.lazy = function(e) {
        return {
          $$typeof: He,
          _payload: { _status: -1, _result: e },
          _init: ee
        };
      }, r.memo = function(e, i) {
        P(e) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), i = {
          $$typeof: Ke,
          type: e,
          compare: i === void 0 ? null : i
        };
        var f;
        return Object.defineProperty(i, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return f;
          },
          set: function(v) {
            f = v, e.name || e.displayName || (Object.defineProperty(e, "name", { value: v }), e.displayName = v);
          }
        }), i;
      }, r.startTransition = function(e) {
        var i = M.T, f = {};
        M.T = f, f._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var v = e(), A = M.S;
          A !== null && A(f, v), typeof v == "object" && v !== null && typeof v.then == "function" && v.then(s, yr);
        } catch (S) {
          yr(S);
        } finally {
          i === null && f._updatedFibers && (e = f._updatedFibers.size, f._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M.T = i;
        }
      }, r.unstable_useCacheRefresh = function() {
        return I().useCacheRefresh();
      }, r.use = function(e) {
        return I().use(e);
      }, r.useActionState = function(e, i, f) {
        return I().useActionState(
          e,
          i,
          f
        );
      }, r.useCallback = function(e, i) {
        return I().useCallback(e, i);
      }, r.useContext = function(e) {
        var i = I();
        return e.$$typeof === Ye && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), i.useContext(e);
      }, r.useDebugValue = function(e, i) {
        return I().useDebugValue(e, i);
      }, r.useDeferredValue = function(e, i) {
        return I().useDeferredValue(e, i);
      }, r.useEffect = function(e, i) {
        return I().useEffect(e, i);
      }, r.useId = function() {
        return I().useId();
      }, r.useImperativeHandle = function(e, i, f) {
        return I().useImperativeHandle(e, i, f);
      }, r.useInsertionEffect = function(e, i) {
        return I().useInsertionEffect(e, i);
      }, r.useLayoutEffect = function(e, i) {
        return I().useLayoutEffect(e, i);
      }, r.useMemo = function(e, i) {
        return I().useMemo(e, i);
      }, r.useOptimistic = function(e, i) {
        return I().useOptimistic(e, i);
      }, r.useReducer = function(e, i, f) {
        return I().useReducer(e, i, f);
      }, r.useRef = function(e) {
        return I().useRef(e);
      }, r.useState = function(e) {
        return I().useState(e);
      }, r.useSyncExternalStore = function(e, i, f) {
        return I().useSyncExternalStore(
          e,
          i,
          f
        );
      }, r.useTransition = function() {
        return I().useTransition();
      }, r.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(yt, yt.exports)), yt.exports;
}
var _r;
function Qr() {
  return _r || (_r = 1, process.env.NODE_ENV === "production" ? Nt.exports = hn() : Nt.exports = mn()), Nt.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function pn() {
  return Rr || (Rr = 1, process.env.NODE_ENV !== "production" && function() {
    function t(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === ee ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case u:
          return "Fragment";
        case U:
          return "Portal";
        case $:
          return "Profiler";
        case b:
          return "StrictMode";
        case ne:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case Q:
            return (o.displayName || "Context") + ".Provider";
          case C:
            return (o._context.displayName || "Context") + ".Consumer";
          case re:
            var y = o.render;
            return o = o.displayName, o || (o = y.displayName || y.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case oe:
            return y = o.displayName || null, y !== null ? y : t(o.type) || "Memo";
          case Y:
            y = o._payload, o = o._init;
            try {
              return t(o(y));
            } catch {
            }
        }
      return null;
    }
    function r(o) {
      return "" + o;
    }
    function n(o) {
      try {
        r(o);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var w = y.error, G = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), r(o);
      }
    }
    function a() {
    }
    function c() {
      if (z === 0) {
        te = console.log, H = console.info, we = console.warn, de = console.error, Ie = console.group, ot = console.groupCollapsed, Ye = console.groupEnd;
        var o = {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        };
        Object.defineProperties(console, {
          info: o,
          log: o,
          warn: o,
          error: o,
          group: o,
          groupCollapsed: o,
          groupEnd: o
        });
      }
      z++;
    }
    function d() {
      if (z--, z === 0) {
        var o = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: g({}, o, { value: te }),
          info: g({}, o, { value: H }),
          warn: g({}, o, { value: we }),
          error: g({}, o, { value: de }),
          group: g({}, o, { value: Ie }),
          groupCollapsed: g({}, o, { value: ot }),
          groupEnd: g({}, o, { value: Ye })
        });
      }
      0 > z && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(o) {
      if (Ge === void 0)
        try {
          throw Error();
        } catch (w) {
          var y = w.stack.trim().match(/\n( *(at )?)/);
          Ge = y && y[1] || "", De = -1 < w.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < w.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Ge + o + De;
    }
    function p(o, y) {
      if (!o || ze) return "";
      var w = Qe.get(o);
      if (w !== void 0) return w;
      ze = !0, w = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var G = null;
      G = I.H, I.H = null, c();
      try {
        var be = {
          DetermineComponentFrameRoot: function() {
            try {
              if (y) {
                var je = function() {
                  throw Error();
                };
                if (Object.defineProperty(je.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(je, []);
                  } catch (Se) {
                    var Ve = Se;
                  }
                  Reflect.construct(o, [], je);
                } else {
                  try {
                    je.call();
                  } catch (Se) {
                    Ve = Se;
                  }
                  o.call(je.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Se) {
                  Ve = Se;
                }
                (je = o()) && typeof je.catch == "function" && je.catch(function() {
                });
              }
            } catch (Se) {
              if (Se && Ve && typeof Se.stack == "string")
                return [Se.stack, Ve.stack];
            }
            return [null, null];
          }
        };
        be.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ce = Object.getOwnPropertyDescriptor(
          be.DetermineComponentFrameRoot,
          "name"
        );
        ce && ce.configurable && Object.defineProperty(
          be.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var F = be.DetermineComponentFrameRoot(), M = F[0], Te = F[1];
        if (M && Te) {
          var xe = M.split(`
`), Re = Te.split(`
`);
          for (F = ce = 0; ce < xe.length && !xe[ce].includes(
            "DetermineComponentFrameRoot"
          ); )
            ce++;
          for (; F < Re.length && !Re[F].includes(
            "DetermineComponentFrameRoot"
          ); )
            F++;
          if (ce === xe.length || F === Re.length)
            for (ce = xe.length - 1, F = Re.length - 1; 1 <= ce && 0 <= F && xe[ce] !== Re[F]; )
              F--;
          for (; 1 <= ce && 0 <= F; ce--, F--)
            if (xe[ce] !== Re[F]) {
              if (ce !== 1 || F !== 1)
                do
                  if (ce--, F--, 0 > F || xe[ce] !== Re[F]) {
                    var $e = `
` + xe[ce].replace(
                      " at new ",
                      " at "
                    );
                    return o.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", o.displayName)), typeof o == "function" && Qe.set(o, $e), $e;
                  }
                while (1 <= ce && 0 <= F);
              break;
            }
        }
      } finally {
        ze = !1, I.H = G, d(), Error.prepareStackTrace = w;
      }
      return xe = (xe = o ? o.displayName || o.name : "") ? l(xe) : "", typeof o == "function" && Qe.set(o, xe), xe;
    }
    function m(o) {
      if (o == null) return "";
      if (typeof o == "function") {
        var y = o.prototype;
        return p(
          o,
          !(!y || !y.isReactComponent)
        );
      }
      if (typeof o == "string") return l(o);
      switch (o) {
        case ne:
          return l("Suspense");
        case j:
          return l("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case re:
            return o = p(o.render, !1), o;
          case oe:
            return m(o.type);
          case Y:
            y = o._payload, o = o._init;
            try {
              return m(o(y));
            } catch {
            }
        }
      return "";
    }
    function T() {
      var o = I.A;
      return o === null ? null : o.getOwner();
    }
    function R(o) {
      if (s.call(o, "key")) {
        var y = Object.getOwnPropertyDescriptor(o, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function P(o, y) {
      function w() {
        He || (He = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: w,
        configurable: !0
      });
    }
    function ue() {
      var o = t(this.type);
      return _t[o] || (_t[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function q(o, y, w, G, be, ce) {
      return w = ce.ref, o = {
        $$typeof: me,
        type: o,
        key: y,
        props: ce,
        _owner: be
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: ue
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function X(o, y, w, G, be, ce) {
      if (typeof o == "string" || typeof o == "function" || o === u || o === $ || o === b || o === ne || o === j || o === L || typeof o == "object" && o !== null && (o.$$typeof === Y || o.$$typeof === oe || o.$$typeof === Q || o.$$typeof === C || o.$$typeof === re || o.$$typeof === N || o.getModuleId !== void 0)) {
        var F = y.children;
        if (F !== void 0)
          if (G)
            if (O(F)) {
              for (G = 0; G < F.length; G++)
                K(F[G], o);
              Object.freeze && Object.freeze(F);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else K(F, o);
      } else
        F = "", (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), o === null ? G = "null" : O(o) ? G = "array" : o !== void 0 && o.$$typeof === me ? (G = "<" + (t(o.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : G = typeof o, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          G,
          F
        );
      if (s.call(y, "key")) {
        F = t(o);
        var M = Object.keys(y).filter(function(xe) {
          return xe !== "key";
        });
        G = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", mt[F + G] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          F,
          M,
          F
        ), mt[F + G] = !0);
      }
      if (F = null, w !== void 0 && (n(w), F = "" + w), R(y) && (n(y.key), F = "" + y.key), "key" in y) {
        w = {};
        for (var Te in y)
          Te !== "key" && (w[Te] = y[Te]);
      } else w = y;
      return F && P(
        w,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), q(o, F, ce, be, T(), w);
    }
    function K(o, y) {
      if (typeof o == "object" && o && o.$$typeof !== Ke) {
        if (O(o))
          for (var w = 0; w < o.length; w++) {
            var G = o[w];
            D(G) && le(G, y);
          }
        else if (D(o))
          o._store && (o._store.validated = 1);
        else if (o === null || typeof o != "object" ? w = null : (w = ye && o[ye] || o["@@iterator"], w = typeof w == "function" ? w : null), typeof w == "function" && w !== o.entries && (w = w.call(o), w !== o))
          for (; !(o = w.next()).done; )
            D(o.value) && le(o.value, y);
      }
    }
    function D(o) {
      return typeof o == "object" && o !== null && o.$$typeof === me;
    }
    function le(o, y) {
      if (o._store && !o._store.validated && o.key == null && (o._store.validated = 1, y = W(y), !pt[y])) {
        pt[y] = !0;
        var w = "";
        o && o._owner != null && o._owner !== T() && (w = null, typeof o._owner.tag == "number" ? w = t(o._owner.type) : typeof o._owner.name == "string" && (w = o._owner.name), w = " It was passed a child from " + w + ".");
        var G = I.getCurrentStack;
        I.getCurrentStack = function() {
          var be = m(o.type);
          return G && (be += G() || ""), be;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          y,
          w
        ), I.getCurrentStack = G;
      }
    }
    function W(o) {
      var y = "", w = T();
      return w && (w = t(w.type)) && (y = `

Check the render method of \`` + w + "`."), y || (o = t(o)) && (y = `

Check the top-level render call using <` + o + ">."), y;
    }
    var fe = Qr(), me = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), ye = Symbol.iterator, ee = Symbol.for("react.client.reference"), I = fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, s = Object.prototype.hasOwnProperty, g = Object.assign, N = Symbol.for("react.client.reference"), O = Array.isArray, z = 0, te, H, we, de, Ie, ot, Ye;
    a.__reactDisabledLog = !0;
    var Ge, De, ze = !1, Qe = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ke = Symbol.for("react.client.reference"), He, _t = {}, mt = {}, pt = {};
    vt.Fragment = u, vt.jsx = function(o, y, w, G, be) {
      return X(o, y, w, !1, G, be);
    }, vt.jsxs = function(o, y, w, G, be) {
      return X(o, y, w, !0, G, be);
    };
  }()), vt;
}
var Sr;
function bn() {
  return Sr || (Sr = 1, process.env.NODE_ENV === "production" ? Ot.exports = gn() : Ot.exports = pn()), Ot.exports;
}
var _ = bn(), ge = Qr(), Lt = { exports: {} }, vn = Lt.exports, Tr;
function yn() {
  return Tr || (Tr = 1, function(t, r) {
    (function(n, a) {
      a(t);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : vn, function(n) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        n.exports = globalThis.browser;
      else {
        const a = "The message port closed before a response was received.", c = (d) => {
          const l = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(l).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class p extends WeakMap {
            constructor(b, $ = void 0) {
              super($), this.createItem = b;
            }
            get(b) {
              return this.has(b) || this.set(b, this.createItem(b)), super.get(b);
            }
          }
          const m = (u) => u && typeof u == "object" && typeof u.then == "function", T = (u, b) => (...$) => {
            d.runtime.lastError ? u.reject(new Error(d.runtime.lastError.message)) : b.singleCallbackArg || $.length <= 1 && b.singleCallbackArg !== !1 ? u.resolve($[0]) : u.resolve($);
          }, R = (u) => u == 1 ? "argument" : "arguments", P = (u, b) => function(C, ...Q) {
            if (Q.length < b.minArgs)
              throw new Error(`Expected at least ${b.minArgs} ${R(b.minArgs)} for ${u}(), got ${Q.length}`);
            if (Q.length > b.maxArgs)
              throw new Error(`Expected at most ${b.maxArgs} ${R(b.maxArgs)} for ${u}(), got ${Q.length}`);
            return new Promise((re, ne) => {
              if (b.fallbackToNoCallback)
                try {
                  C[u](...Q, T({
                    resolve: re,
                    reject: ne
                  }, b));
                } catch (j) {
                  console.warn(`${u} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, j), C[u](...Q), b.fallbackToNoCallback = !1, b.noCallback = !0, re();
                }
              else b.noCallback ? (C[u](...Q), re()) : C[u](...Q, T({
                resolve: re,
                reject: ne
              }, b));
            });
          }, ue = (u, b, $) => new Proxy(b, {
            apply(C, Q, re) {
              return $.call(Q, u, ...re);
            }
          });
          let q = Function.call.bind(Object.prototype.hasOwnProperty);
          const X = (u, b = {}, $ = {}) => {
            let C = /* @__PURE__ */ Object.create(null), Q = {
              has(ne, j) {
                return j in u || j in C;
              },
              get(ne, j, oe) {
                if (j in C)
                  return C[j];
                if (!(j in u))
                  return;
                let Y = u[j];
                if (typeof Y == "function")
                  if (typeof b[j] == "function")
                    Y = ue(u, u[j], b[j]);
                  else if (q($, j)) {
                    let L = P(j, $[j]);
                    Y = ue(u, u[j], L);
                  } else
                    Y = Y.bind(u);
                else if (typeof Y == "object" && Y !== null && (q(b, j) || q($, j)))
                  Y = X(Y, b[j], $[j]);
                else if (q($, "*"))
                  Y = X(Y, b[j], $["*"]);
                else
                  return Object.defineProperty(C, j, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return u[j];
                    },
                    set(L) {
                      u[j] = L;
                    }
                  }), Y;
                return C[j] = Y, Y;
              },
              set(ne, j, oe, Y) {
                return j in C ? C[j] = oe : u[j] = oe, !0;
              },
              defineProperty(ne, j, oe) {
                return Reflect.defineProperty(C, j, oe);
              },
              deleteProperty(ne, j) {
                return Reflect.deleteProperty(C, j);
              }
            }, re = Object.create(u);
            return new Proxy(re, Q);
          }, K = (u) => ({
            addListener(b, $, ...C) {
              b.addListener(u.get($), ...C);
            },
            hasListener(b, $) {
              return b.hasListener(u.get($));
            },
            removeListener(b, $) {
              b.removeListener(u.get($));
            }
          }), D = new p((u) => typeof u != "function" ? u : function($) {
            const C = X($, {}, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            u(C);
          }), le = new p((u) => typeof u != "function" ? u : function($, C, Q) {
            let re = !1, ne, j = new Promise((ye) => {
              ne = function(ee) {
                re = !0, ye(ee);
              };
            }), oe;
            try {
              oe = u($, C, ne);
            } catch (ye) {
              oe = Promise.reject(ye);
            }
            const Y = oe !== !0 && m(oe);
            if (oe !== !0 && !Y && !re)
              return !1;
            const L = (ye) => {
              ye.then((ee) => {
                Q(ee);
              }, (ee) => {
                let I;
                ee && (ee instanceof Error || typeof ee.message == "string") ? I = ee.message : I = "An unexpected error occurred", Q({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: I
                });
              }).catch((ee) => {
                console.error("Failed to send onMessage rejected reply", ee);
              });
            };
            return L(Y ? oe : j), !0;
          }), W = ({
            reject: u,
            resolve: b
          }, $) => {
            d.runtime.lastError ? d.runtime.lastError.message === a ? b() : u(new Error(d.runtime.lastError.message)) : $ && $.__mozWebExtensionPolyfillReject__ ? u(new Error($.message)) : b($);
          }, fe = (u, b, $, ...C) => {
            if (C.length < b.minArgs)
              throw new Error(`Expected at least ${b.minArgs} ${R(b.minArgs)} for ${u}(), got ${C.length}`);
            if (C.length > b.maxArgs)
              throw new Error(`Expected at most ${b.maxArgs} ${R(b.maxArgs)} for ${u}(), got ${C.length}`);
            return new Promise((Q, re) => {
              const ne = W.bind(null, {
                resolve: Q,
                reject: re
              });
              C.push(ne), $.sendMessage(...C);
            });
          }, me = {
            devtools: {
              network: {
                onRequestFinished: K(D)
              }
            },
            runtime: {
              onMessage: K(le),
              onMessageExternal: K(le),
              sendMessage: fe.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: fe.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, U = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return l.privacy = {
            network: {
              "*": U
            },
            services: {
              "*": U
            },
            websites: {
              "*": U
            }
          }, X(d, me, l);
        };
        n.exports = c(chrome);
      }
    });
  }(Lt)), Lt.exports;
}
var wn = yn();
const _e = /* @__PURE__ */ dn(wn), An = (t) => btoa(t), jr = (t) => {
  try {
    return atob(t);
  } catch (r) {
    return console.error("Decryption error:", r), "";
  }
}, xn = async (t) => {
  const r = An(t);
  typeof _e < "u" ? await _e.storage.local.set({ apiKey: r }) : typeof chrome < "u" && chrome.storage.local.set({ apiKey: r });
}, Kr = async () => new Promise((t, r) => {
  typeof _e < "u" ? _e.storage.local.get("apiKey").then(
    (n) => {
      const a = n.apiKey ? jr(n.apiKey) : null;
      t(a);
    },
    (n) => {
      console.error("Error retrieving API key:", n), r(n);
    }
  ) : typeof chrome < "u" && chrome.storage.local.get("apiKey", (n) => {
    const a = n.apiKey ? jr(n.apiKey) : null;
    t(a);
  });
}), En = async () => {
  typeof _e < "u" ? await _e.storage.local.remove("apiKey") : typeof chrome < "u" && chrome.storage.local.remove("apiKey");
};
var or = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, xt = typeof window > "u" || "Deno" in globalThis;
function Cn() {
}
function Or(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function kn(t, r) {
  return Math.max(t + (r || 0) - Date.now(), 0);
}
function It(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function Pe(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function Yt(t, r) {
  if (t === r)
    return t;
  const n = Nr(t) && Nr(r);
  if (n || Pr(t) && Pr(r)) {
    const a = n ? t : Object.keys(t), c = a.length, d = n ? r : Object.keys(r), l = d.length, p = n ? [] : {};
    let m = 0;
    for (let T = 0; T < l; T++) {
      const R = n ? T : d[T];
      (!n && a.includes(R) || n) && t[R] === void 0 && r[R] === void 0 ? (p[R] = void 0, m++) : (p[R] = Yt(t[R], r[R]), p[R] === t[R] && t[R] !== void 0 && m++);
    }
    return c === l && m === c ? t : p;
  }
  return r;
}
function Gt(t, r) {
  if (!r || Object.keys(t).length !== Object.keys(r).length)
    return !1;
  for (const n in t)
    if (t[n] !== r[n])
      return !1;
  return !0;
}
function Nr(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Pr(t) {
  if (!Mr(t))
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const n = r.prototype;
  return !(!Mr(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Mr(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Lr(t, r, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(t, r);
  if (n.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Yt(t, r);
      } catch (a) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${a}`
        );
      }
    return Yt(t, r);
  }
  return r;
}
var et, Fe, it, Yr, _n = (Yr = class extends or {
  constructor() {
    super();
    he(this, et);
    he(this, Fe);
    he(this, it);
    J(this, it, (r) => {
      if (!xt && window.addEventListener) {
        const n = () => r();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    h(this, Fe) || this.setEventListener(h(this, it));
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || ((r = h(this, Fe)) == null || r.call(this), J(this, Fe, void 0));
  }
  setEventListener(r) {
    var n;
    J(this, it, r), (n = h(this, Fe)) == null || n.call(this), J(this, Fe, r((a) => {
      typeof a == "boolean" ? this.setFocused(a) : this.onFocus();
    }));
  }
  setFocused(r) {
    h(this, et) !== r && (J(this, et, r), this.onFocus());
  }
  onFocus() {
    const r = this.isFocused();
    this.listeners.forEach((n) => {
      n(r);
    });
  }
  isFocused() {
    var r;
    return typeof h(this, et) == "boolean" ? h(this, et) : ((r = globalThis.document) == null ? void 0 : r.visibilityState) !== "hidden";
  }
}, et = new WeakMap(), Fe = new WeakMap(), it = new WeakMap(), Yr), Rn = new _n(), at, qe, lt, Gr, Sn = (Gr = class extends or {
  constructor() {
    super();
    he(this, at, !0);
    he(this, qe);
    he(this, lt);
    J(this, lt, (r) => {
      if (!xt && window.addEventListener) {
        const n = () => r(!0), a = () => r(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", a, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", a);
        };
      }
    });
  }
  onSubscribe() {
    h(this, qe) || this.setEventListener(h(this, lt));
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || ((r = h(this, qe)) == null || r.call(this), J(this, qe, void 0));
  }
  setEventListener(r) {
    var n;
    J(this, lt, r), (n = h(this, qe)) == null || n.call(this), J(this, qe, r(this.setOnline.bind(this)));
  }
  setOnline(r) {
    h(this, at) !== r && (J(this, at, r), this.listeners.forEach((a) => {
      a(r);
    }));
  }
  isOnline() {
    return h(this, at);
  }
}, at = new WeakMap(), qe = new WeakMap(), lt = new WeakMap(), Gr), Tn = new Sn();
function Ir() {
  let t, r;
  const n = new Promise((c, d) => {
    t = c, r = d;
  });
  n.status = "pending", n.catch(() => {
  });
  function a(c) {
    Object.assign(n, c), delete n.resolve, delete n.reject;
  }
  return n.resolve = (c) => {
    a({
      status: "fulfilled",
      value: c
    }), t(c);
  }, n.reject = (c) => {
    a({
      status: "rejected",
      reason: c
    }), r(c);
  }, n;
}
function jn(t) {
  return (t ?? "online") === "online" ? Tn.isOnline() : !0;
}
function On() {
  let t = [], r = 0, n = (p) => {
    p();
  }, a = (p) => {
    p();
  }, c = (p) => setTimeout(p, 0);
  const d = (p) => {
    r ? t.push(p) : c(() => {
      n(p);
    });
  }, l = () => {
    const p = t;
    t = [], p.length && c(() => {
      a(() => {
        p.forEach((m) => {
          n(m);
        });
      });
    });
  };
  return {
    batch: (p) => {
      let m;
      r++;
      try {
        m = p();
      } finally {
        r--, r || l();
      }
      return m;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (p) => (...m) => {
      d(() => {
        p(...m);
      });
    },
    schedule: d,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (p) => {
      n = p;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (p) => {
      a = p;
    },
    setScheduler: (p) => {
      c = p;
    }
  };
}
var Vr = On();
function Nn(t, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: jn(r.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var ke, Z, Ct, Ee, tt, ct, Be, Ne, kt, ut, ft, rt, nt, We, dt, ie, wt, Dt, Qt, Kt, Vt, Xt, Jt, Zt, Xr, Dr, Pn = (Dr = class extends or {
  constructor(r, n) {
    super();
    he(this, ie);
    he(this, ke);
    he(this, Z);
    he(this, Ct);
    he(this, Ee);
    he(this, tt);
    he(this, ct);
    he(this, Be);
    he(this, Ne);
    he(this, kt);
    he(this, ut);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    he(this, ft);
    he(this, rt);
    he(this, nt);
    he(this, We);
    he(this, dt, /* @__PURE__ */ new Set());
    this.options = n, J(this, ke, r), J(this, Ne, null), J(this, Be, Ir()), this.options.experimental_prefetchInRender || h(this, Be).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (h(this, Z).addObserver(this), zr(h(this, Z), this.options) ? ve(this, ie, wt).call(this) : this.updateResult(), ve(this, ie, Vt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return er(
      h(this, Z),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return er(
      h(this, Z),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ve(this, ie, Xt).call(this), ve(this, ie, Jt).call(this), h(this, Z).removeObserver(this);
  }
  setOptions(r, n) {
    const a = this.options, c = h(this, Z);
    if (this.options = h(this, ke).defaultQueryOptions(r), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Pe(this.options.enabled, h(this, Z)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ve(this, ie, Zt).call(this), h(this, Z).setOptions(this.options), a._defaulted && !Gt(this.options, a) && h(this, ke).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: h(this, Z),
      observer: this
    });
    const d = this.hasListeners();
    d && Hr(
      h(this, Z),
      c,
      this.options,
      a
    ) && ve(this, ie, wt).call(this), this.updateResult(n), d && (h(this, Z) !== c || Pe(this.options.enabled, h(this, Z)) !== Pe(a.enabled, h(this, Z)) || It(this.options.staleTime, h(this, Z)) !== It(a.staleTime, h(this, Z))) && ve(this, ie, Dt).call(this);
    const l = ve(this, ie, Qt).call(this);
    d && (h(this, Z) !== c || Pe(this.options.enabled, h(this, Z)) !== Pe(a.enabled, h(this, Z)) || l !== h(this, We)) && ve(this, ie, Kt).call(this, l);
  }
  getOptimisticResult(r) {
    const n = h(this, ke).getQueryCache().build(h(this, ke), r), a = this.createResult(n, r);
    return Ln(this, a) && (J(this, Ee, a), J(this, ct, this.options), J(this, tt, h(this, Z).state)), a;
  }
  getCurrentResult() {
    return h(this, Ee);
  }
  trackResult(r, n) {
    const a = {};
    return Object.keys(r).forEach((c) => {
      Object.defineProperty(a, c, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(c), n == null || n(c), r[c])
      });
    }), a;
  }
  trackProp(r) {
    h(this, dt).add(r);
  }
  getCurrentQuery() {
    return h(this, Z);
  }
  refetch({ ...r } = {}) {
    return this.fetch({
      ...r
    });
  }
  fetchOptimistic(r) {
    const n = h(this, ke).defaultQueryOptions(r), a = h(this, ke).getQueryCache().build(h(this, ke), n);
    return a.fetch().then(() => this.createResult(a, n));
  }
  fetch(r) {
    return ve(this, ie, wt).call(this, {
      ...r,
      cancelRefetch: r.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), h(this, Ee)));
  }
  createResult(r, n) {
    var $;
    const a = h(this, Z), c = this.options, d = h(this, Ee), l = h(this, tt), p = h(this, ct), T = r !== a ? r.state : h(this, Ct), { state: R } = r;
    let P = { ...R }, ue = !1, q;
    if (n._optimisticResults) {
      const C = this.hasListeners(), Q = !C && zr(r, n), re = C && Hr(r, a, n, c);
      (Q || re) && (P = {
        ...P,
        ...Nn(R.data, r.options)
      }), n._optimisticResults === "isRestoring" && (P.fetchStatus = "idle");
    }
    let { error: X, errorUpdatedAt: K, status: D } = P;
    if (n.select && P.data !== void 0)
      if (d && P.data === (l == null ? void 0 : l.data) && n.select === h(this, kt))
        q = h(this, ut);
      else
        try {
          J(this, kt, n.select), q = n.select(P.data), q = Lr(d == null ? void 0 : d.data, q, n), J(this, ut, q), J(this, Ne, null);
        } catch (C) {
          J(this, Ne, C);
        }
    else
      q = P.data;
    if (n.placeholderData !== void 0 && q === void 0 && D === "pending") {
      let C;
      if (d != null && d.isPlaceholderData && n.placeholderData === (p == null ? void 0 : p.placeholderData))
        C = d.data;
      else if (C = typeof n.placeholderData == "function" ? n.placeholderData(
        ($ = h(this, ft)) == null ? void 0 : $.state.data,
        h(this, ft)
      ) : n.placeholderData, n.select && C !== void 0)
        try {
          C = n.select(C), J(this, Ne, null);
        } catch (Q) {
          J(this, Ne, Q);
        }
      C !== void 0 && (D = "success", q = Lr(
        d == null ? void 0 : d.data,
        C,
        n
      ), ue = !0);
    }
    h(this, Ne) && (X = h(this, Ne), q = h(this, ut), K = Date.now(), D = "error");
    const le = P.fetchStatus === "fetching", W = D === "pending", fe = D === "error", me = W && le, U = q !== void 0, b = {
      status: D,
      fetchStatus: P.fetchStatus,
      isPending: W,
      isSuccess: D === "success",
      isError: fe,
      isInitialLoading: me,
      isLoading: me,
      data: q,
      dataUpdatedAt: P.dataUpdatedAt,
      error: X,
      errorUpdatedAt: K,
      failureCount: P.fetchFailureCount,
      failureReason: P.fetchFailureReason,
      errorUpdateCount: P.errorUpdateCount,
      isFetched: P.dataUpdateCount > 0 || P.errorUpdateCount > 0,
      isFetchedAfterMount: P.dataUpdateCount > T.dataUpdateCount || P.errorUpdateCount > T.errorUpdateCount,
      isFetching: le,
      isRefetching: le && !W,
      isLoadingError: fe && !U,
      isPaused: P.fetchStatus === "paused",
      isPlaceholderData: ue,
      isRefetchError: fe && U,
      isStale: sr(r, n),
      refetch: this.refetch,
      promise: h(this, Be)
    };
    if (this.options.experimental_prefetchInRender) {
      const C = (ne) => {
        b.status === "error" ? ne.reject(b.error) : b.data !== void 0 && ne.resolve(b.data);
      }, Q = () => {
        const ne = J(this, Be, b.promise = Ir());
        C(ne);
      }, re = h(this, Be);
      switch (re.status) {
        case "pending":
          r.queryHash === a.queryHash && C(re);
          break;
        case "fulfilled":
          (b.status === "error" || b.data !== re.value) && Q();
          break;
        case "rejected":
          (b.status !== "error" || b.error !== re.reason) && Q();
          break;
      }
    }
    return b;
  }
  updateResult(r) {
    const n = h(this, Ee), a = this.createResult(h(this, Z), this.options);
    if (J(this, tt, h(this, Z).state), J(this, ct, this.options), h(this, tt).data !== void 0 && J(this, ft, h(this, Z)), Gt(a, n))
      return;
    J(this, Ee, a);
    const c = {}, d = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: l } = this.options, p = typeof l == "function" ? l() : l;
      if (p === "all" || !p && !h(this, dt).size)
        return !0;
      const m = new Set(
        p ?? h(this, dt)
      );
      return this.options.throwOnError && m.add("error"), Object.keys(h(this, Ee)).some((T) => {
        const R = T;
        return h(this, Ee)[R] !== n[R] && m.has(R);
      });
    };
    (r == null ? void 0 : r.listeners) !== !1 && d() && (c.listeners = !0), ve(this, ie, Xr).call(this, { ...c, ...r });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ve(this, ie, Vt).call(this);
  }
}, ke = new WeakMap(), Z = new WeakMap(), Ct = new WeakMap(), Ee = new WeakMap(), tt = new WeakMap(), ct = new WeakMap(), Be = new WeakMap(), Ne = new WeakMap(), kt = new WeakMap(), ut = new WeakMap(), ft = new WeakMap(), rt = new WeakMap(), nt = new WeakMap(), We = new WeakMap(), dt = new WeakMap(), ie = new WeakSet(), wt = function(r) {
  ve(this, ie, Zt).call(this);
  let n = h(this, Z).fetch(
    this.options,
    r
  );
  return r != null && r.throwOnError || (n = n.catch(Cn)), n;
}, Dt = function() {
  ve(this, ie, Xt).call(this);
  const r = It(
    this.options.staleTime,
    h(this, Z)
  );
  if (xt || h(this, Ee).isStale || !Or(r))
    return;
  const a = kn(h(this, Ee).dataUpdatedAt, r) + 1;
  J(this, rt, setTimeout(() => {
    h(this, Ee).isStale || this.updateResult();
  }, a));
}, Qt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(h(this, Z)) : this.options.refetchInterval) ?? !1;
}, Kt = function(r) {
  ve(this, ie, Jt).call(this), J(this, We, r), !(xt || Pe(this.options.enabled, h(this, Z)) === !1 || !Or(h(this, We)) || h(this, We) === 0) && J(this, nt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Rn.isFocused()) && ve(this, ie, wt).call(this);
  }, h(this, We)));
}, Vt = function() {
  ve(this, ie, Dt).call(this), ve(this, ie, Kt).call(this, ve(this, ie, Qt).call(this));
}, Xt = function() {
  h(this, rt) && (clearTimeout(h(this, rt)), J(this, rt, void 0));
}, Jt = function() {
  h(this, nt) && (clearInterval(h(this, nt)), J(this, nt, void 0));
}, Zt = function() {
  const r = h(this, ke).getQueryCache().build(h(this, ke), this.options);
  if (r === h(this, Z))
    return;
  const n = h(this, Z);
  J(this, Z, r), J(this, Ct, r.state), this.hasListeners() && (n == null || n.removeObserver(this), r.addObserver(this));
}, Xr = function(r) {
  Vr.batch(() => {
    r.listeners && this.listeners.forEach((n) => {
      n(h(this, Ee));
    }), h(this, ke).getQueryCache().notify({
      query: h(this, Z),
      type: "observerResultsUpdated"
    });
  });
}, Dr);
function Mn(t, r) {
  return Pe(r.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && r.retryOnMount === !1);
}
function zr(t, r) {
  return Mn(t, r) || t.state.data !== void 0 && er(t, r, r.refetchOnMount);
}
function er(t, r, n) {
  if (Pe(r.enabled, t) !== !1) {
    const a = typeof n == "function" ? n(t) : n;
    return a === "always" || a !== !1 && sr(t, r);
  }
  return !1;
}
function Hr(t, r, n, a) {
  return (t !== r || Pe(a.enabled, t) === !1) && (!n.suspense || t.state.status !== "error") && sr(t, n);
}
function sr(t, r) {
  return Pe(r.enabled, t) !== !1 && t.isStaleByTime(It(r.staleTime, t));
}
function Ln(t, r) {
  return !Gt(t.getCurrentResult(), r);
}
var In = ge.createContext(
  void 0
), zn = (t) => {
  const r = ge.useContext(In);
  if (!r)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return r;
}, Jr = ge.createContext(!1), Hn = () => ge.useContext(Jr);
Jr.Provider;
function $n() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var Un = ge.createContext($n()), Fn = () => ge.useContext(Un);
function qn(t, r) {
  return typeof t == "function" ? t(...r) : !!t;
}
function $r() {
}
var Bn = (t, r) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (r.isReset() || (t.retryOnMount = !1));
}, Wn = (t) => {
  ge.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Yn = ({
  result: t,
  errorResetBoundary: r,
  throwOnError: n,
  query: a,
  suspense: c
}) => t.isError && !r.isReset() && !t.isFetching && a && (c && t.data === void 0 || qn(n, [t.error, a])), Gn = (t) => {
  const r = t.staleTime;
  t.suspense && (t.staleTime = typeof r == "function" ? (...n) => Math.max(r(...n), 1e3) : Math.max(r ?? 1e3, 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Dn = (t, r) => t.isLoading && t.isFetching && !r, Qn = (t, r) => (t == null ? void 0 : t.suspense) && r.isPending, Ur = (t, r, n) => r.fetchOptimistic(t).catch(() => {
  n.clearReset();
});
function Kn(t, r, n) {
  var P, ue, q, X, K;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const a = zn(), c = Hn(), d = Fn(), l = a.defaultQueryOptions(t);
  (ue = (P = a.getDefaultOptions().queries) == null ? void 0 : P._experimental_beforeQuery) == null || ue.call(
    P,
    l
  ), process.env.NODE_ENV !== "production" && (l.queryFn || console.error(
    `[${l.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), l._optimisticResults = c ? "isRestoring" : "optimistic", Gn(l), Bn(l, d), Wn(d);
  const p = !a.getQueryCache().get(l.queryHash), [m] = ge.useState(
    () => new r(
      a,
      l
    )
  ), T = m.getOptimisticResult(l), R = !c && t.subscribed !== !1;
  if (ge.useSyncExternalStore(
    ge.useCallback(
      (D) => {
        const le = R ? m.subscribe(Vr.batchCalls(D)) : $r;
        return m.updateResult(), le;
      },
      [m, R]
    ),
    () => m.getCurrentResult(),
    () => m.getCurrentResult()
  ), ge.useEffect(() => {
    m.setOptions(l, { listeners: !1 });
  }, [l, m]), Qn(l, T))
    throw Ur(l, m, d);
  if (Yn({
    result: T,
    errorResetBoundary: d,
    throwOnError: l.throwOnError,
    query: a.getQueryCache().get(l.queryHash),
    suspense: l.suspense
  }))
    throw T.error;
  if ((X = (q = a.getDefaultOptions().queries) == null ? void 0 : q._experimental_afterQuery) == null || X.call(
    q,
    l,
    T
  ), l.experimental_prefetchInRender && !xt && Dn(T, c)) {
    const D = p ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ur(l, m, d)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (K = a.getQueryCache().get(l.queryHash)) == null ? void 0 : K.promise
    );
    D == null || D.catch($r).finally(() => {
      m.updateResult();
    });
  }
  return l.notifyOnChangeProps ? T : m.trackResult(T);
}
function Vn(t, r) {
  return Kn(t, Pn);
}
const ir = "-", Xn = (t) => {
  const r = Zn(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = t;
  return {
    getClassGroupId: (l) => {
      const p = l.split(ir);
      return p[0] === "" && p.length !== 1 && p.shift(), Zr(p, r) || Jn(l);
    },
    getConflictingClassGroupIds: (l, p) => {
      const m = n[l] || [];
      return p && a[l] ? [...m, ...a[l]] : m;
    }
  };
}, Zr = (t, r) => {
  var l;
  if (t.length === 0)
    return r.classGroupId;
  const n = t[0], a = r.nextPart.get(n), c = a ? Zr(t.slice(1), a) : void 0;
  if (c)
    return c;
  if (r.validators.length === 0)
    return;
  const d = t.join(ir);
  return (l = r.validators.find(({
    validator: p
  }) => p(d))) == null ? void 0 : l.classGroupId;
}, Fr = /^\[(.+)\]$/, Jn = (t) => {
  if (Fr.test(t)) {
    const r = Fr.exec(t)[1], n = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Zn = (t) => {
  const {
    theme: r,
    classGroups: n
  } = t, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const c in n)
    tr(n[c], a, c, r);
  return a;
}, tr = (t, r, n, a) => {
  t.forEach((c) => {
    if (typeof c == "string") {
      const d = c === "" ? r : qr(r, c);
      d.classGroupId = n;
      return;
    }
    if (typeof c == "function") {
      if (eo(c)) {
        tr(c(a), r, n, a);
        return;
      }
      r.validators.push({
        validator: c,
        classGroupId: n
      });
      return;
    }
    Object.entries(c).forEach(([d, l]) => {
      tr(l, qr(r, d), n, a);
    });
  });
}, qr = (t, r) => {
  let n = t;
  return r.split(ir).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, eo = (t) => t.isThemeGetter, to = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const c = (d, l) => {
    n.set(d, l), r++, r > t && (r = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(d) {
      let l = n.get(d);
      if (l !== void 0)
        return l;
      if ((l = a.get(d)) !== void 0)
        return c(d, l), l;
    },
    set(d, l) {
      n.has(d) ? n.set(d, l) : c(d, l);
    }
  };
}, rr = "!", nr = ":", ro = nr.length, no = (t) => {
  const {
    prefix: r,
    experimentalParseClassName: n
  } = t;
  let a = (c) => {
    const d = [];
    let l = 0, p = 0, m = 0, T;
    for (let X = 0; X < c.length; X++) {
      let K = c[X];
      if (l === 0 && p === 0) {
        if (K === nr) {
          d.push(c.slice(m, X)), m = X + ro;
          continue;
        }
        if (K === "/") {
          T = X;
          continue;
        }
      }
      K === "[" ? l++ : K === "]" ? l-- : K === "(" ? p++ : K === ")" && p--;
    }
    const R = d.length === 0 ? c : c.substring(m), P = oo(R), ue = P !== R, q = T && T > m ? T - m : void 0;
    return {
      modifiers: d,
      hasImportantModifier: ue,
      baseClassName: P,
      maybePostfixModifierPosition: q
    };
  };
  if (r) {
    const c = r + nr, d = a;
    a = (l) => l.startsWith(c) ? d(l.substring(c.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const c = a;
    a = (d) => n({
      className: d,
      parseClassName: c
    });
  }
  return a;
}, oo = (t) => t.endsWith(rr) ? t.substring(0, t.length - 1) : t.startsWith(rr) ? t.substring(1) : t, so = (t) => {
  const r = Object.fromEntries(t.orderSensitiveModifiers.map((a) => [a, !0]));
  return (a) => {
    if (a.length <= 1)
      return a;
    const c = [];
    let d = [];
    return a.forEach((l) => {
      l[0] === "[" || r[l] ? (c.push(...d.sort(), l), d = []) : d.push(l);
    }), c.push(...d.sort()), c;
  };
}, io = (t) => ({
  cache: to(t.cacheSize),
  parseClassName: no(t),
  sortModifiers: so(t),
  ...Xn(t)
}), ao = /\s+/, lo = (t, r) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: c,
    sortModifiers: d
  } = r, l = [], p = t.trim().split(ao);
  let m = "";
  for (let T = p.length - 1; T >= 0; T -= 1) {
    const R = p[T], {
      isExternal: P,
      modifiers: ue,
      hasImportantModifier: q,
      baseClassName: X,
      maybePostfixModifierPosition: K
    } = n(R);
    if (P) {
      m = R + (m.length > 0 ? " " + m : m);
      continue;
    }
    let D = !!K, le = a(D ? X.substring(0, K) : X);
    if (!le) {
      if (!D) {
        m = R + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (le = a(X), !le) {
        m = R + (m.length > 0 ? " " + m : m);
        continue;
      }
      D = !1;
    }
    const W = d(ue).join(":"), fe = q ? W + rr : W, me = fe + le;
    if (l.includes(me))
      continue;
    l.push(me);
    const U = c(le, D);
    for (let u = 0; u < U.length; ++u) {
      const b = U[u];
      l.push(fe + b);
    }
    m = R + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function co() {
  let t = 0, r, n, a = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (n = en(r)) && (a && (a += " "), a += n);
  return a;
}
const en = (t) => {
  if (typeof t == "string")
    return t;
  let r, n = "";
  for (let a = 0; a < t.length; a++)
    t[a] && (r = en(t[a])) && (n && (n += " "), n += r);
  return n;
};
function uo(t, ...r) {
  let n, a, c, d = l;
  function l(m) {
    const T = r.reduce((R, P) => P(R), t());
    return n = io(T), a = n.cache.get, c = n.cache.set, d = p, p(m);
  }
  function p(m) {
    const T = a(m);
    if (T)
      return T;
    const R = lo(m, n);
    return c(m, R), R;
  }
  return function() {
    return d(co.apply(null, arguments));
  };
}
const Ae = (t) => {
  const r = (n) => n[t] || [];
  return r.isThemeGetter = !0, r;
}, tn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fo = /^\d+\/\d+$/, go = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ho = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, mo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, po = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, st = (t) => fo.test(t), V = (t) => !!t && !Number.isNaN(Number(t)), Je = (t) => !!t && Number.isInteger(Number(t)), Br = (t) => t.endsWith("%") && V(t.slice(0, -1)), Ue = (t) => go.test(t), vo = () => !0, yo = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ho.test(t) && !mo.test(t)
), ar = () => !1, wo = (t) => po.test(t), Ao = (t) => bo.test(t), xo = (t) => !x(t) && !E(t), Eo = (t) => gt(t, sn, ar), x = (t) => tn.test(t), Ze = (t) => gt(t, an, yo), Bt = (t) => gt(t, Mo, V), Co = (t) => gt(t, nn, ar), ko = (t) => gt(t, on, Ao), _o = (t) => gt(t, ar, wo), E = (t) => rn.test(t), Pt = (t) => ht(t, an), Ro = (t) => ht(t, Lo), So = (t) => ht(t, nn), To = (t) => ht(t, sn), jo = (t) => ht(t, on), Oo = (t) => ht(t, Io, !0), gt = (t, r, n) => {
  const a = tn.exec(t);
  return a ? a[1] ? r(a[1]) : n(a[2]) : !1;
}, ht = (t, r, n = !1) => {
  const a = rn.exec(t);
  return a ? a[1] ? r(a[1]) : n : !1;
}, nn = (t) => t === "position", No = /* @__PURE__ */ new Set(["image", "url"]), on = (t) => No.has(t), Po = /* @__PURE__ */ new Set(["length", "size", "percentage"]), sn = (t) => Po.has(t), an = (t) => t === "length", Mo = (t) => t === "number", Lo = (t) => t === "family-name", Io = (t) => t === "shadow", zo = () => {
  const t = Ae("color"), r = Ae("font"), n = Ae("text"), a = Ae("font-weight"), c = Ae("tracking"), d = Ae("leading"), l = Ae("breakpoint"), p = Ae("container"), m = Ae("spacing"), T = Ae("radius"), R = Ae("shadow"), P = Ae("inset-shadow"), ue = Ae("drop-shadow"), q = Ae("blur"), X = Ae("perspective"), K = Ae("aspect"), D = Ae("ease"), le = Ae("animate"), W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], fe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], me = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", "contain", "none"], u = () => [E, x, m], b = () => [st, "full", "auto", ...u()], $ = () => [Je, "none", "subgrid", E, x], C = () => ["auto", {
    span: ["full", Je, E, x]
  }, E, x], Q = () => [Je, "auto", E, x], re = () => ["auto", "min", "max", "fr", E, x], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], j = () => ["start", "end", "center", "stretch"], oe = () => ["auto", ...u()], Y = () => [st, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...u()], L = () => [t, E, x], ye = () => [Br, Ze], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    T,
    E,
    x
  ], I = () => ["", V, Pt, Ze], s = () => ["solid", "dashed", "dotted", "double"], g = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    q,
    E,
    x
  ], O = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E, x], z = () => ["none", V, E, x], te = () => ["none", V, E, x], H = () => [V, E, x], we = () => [st, "full", ...u()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ue],
      breakpoint: [Ue],
      color: [vo],
      container: [Ue],
      "drop-shadow": [Ue],
      ease: ["in", "out", "in-out"],
      font: [xo],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ue],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ue],
      shadow: [Ue],
      spacing: ["px", V],
      text: [Ue],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", st, x, E, K]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [V, x, E, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...fe(), x, E]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: me()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": me()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": me()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: U()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": U()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": U()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: b()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": b()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": b()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: b()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: b()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: b()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: b()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: b()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: b()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Je, "auto", E, x]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [st, "full", "auto", p, ...u()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [V, st, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", V, E, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", V, E, x]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Je, "first", "last", "none", E, x]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: C()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": $()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: C()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": re()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": re()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: u()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": u()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": u()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...j(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...j()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...j(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...j(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...j(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...j()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: u()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: u()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: u()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: u()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: u()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: u()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: u()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: u()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: u()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: oe()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: oe()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: oe()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: oe()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: oe()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: oe()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: oe()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: oe()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: oe()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": u()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": u()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Pt, Ze]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [a, E, Bt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Br, x]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ro, x, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, E, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [V, "none", E, Bt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          d,
          ...u()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E, x]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", E, x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...s(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [V, "from-font", "auto", E, Ze]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [V, "auto", E, x]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: u()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E, x]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", E, x]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...fe(), So, Co]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", To, Eo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Je, E, x],
          radial: ["", E, x],
          conic: [Je, E, x]
        }, jo, ko]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ye()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ye()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ye()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ee()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ee()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ee()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ee()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ee()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ee()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ee()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ee()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ee()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ee()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ee()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ee()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ee()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ee()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ee()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: I()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": I()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": I()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": I()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": I()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": I()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": I()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": I()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": I()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": I()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": I()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...s(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...s(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...s(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, E, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", V, Pt, Ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          R,
          Oo,
          _o
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", E, x, P]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [V, Ze]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": I()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [V, E, x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...g(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": g()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          E,
          x
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: N()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [V, E, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [V, E, x]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          ue,
          E,
          x
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", V, E, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [V, E, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", V, E, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [V, E, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", V, E, x]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          E,
          x
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": N()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [V, E, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [V, E, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", V, E, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [V, E, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", V, E, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V, E, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V, E, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", V, E, x]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": u()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": u()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": u()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", E, x]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [V, "initial", E, x]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, E, x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [V, E, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", le, E, x]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [X, E, x]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": O()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: z()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": z()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": z()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": z()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: H()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": H()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": H()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [E, x, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: O()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: we()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": we()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": we()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": we()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: L()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E, x]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": u()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": u()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": u()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": u()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": u()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": u()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": u()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": u()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": u()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": u()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": u()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": u()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": u()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": u()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": u()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": u()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": u()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": u()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", E, x]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, Pt, Ze, Bt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, Me = /* @__PURE__ */ uo(zo);
function Ho({ className: t }) {
  return /* @__PURE__ */ _.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: Me("size-6", t),
      children: /* @__PURE__ */ _.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
        }
      )
    }
  );
}
function Wr({ className: t }) {
  return /* @__PURE__ */ _.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: Me("size-6", t),
      children: /* @__PURE__ */ _.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        }
      )
    }
  );
}
function At(t) {
  const { children: r, className: n, title: a, ...c } = t;
  return /* @__PURE__ */ _.jsx(
    "span",
    {
      className: Me(
        "hover:cursor-pointer hover:text-sky-500 text-a",
        n
      ),
      ...c,
      title: a,
      children: r
    }
  );
}
function $o({ className: t }) {
  return /* @__PURE__ */ _.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: Me("size-6", t),
      children: /* @__PURE__ */ _.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        }
      )
    }
  );
}
function ln({ children: t }) {
  const r = () => {
    (_e.windows || chrome.windows).create({
      url: _e.runtime.getURL("index.html"),
      type: "popup",
      width: 600,
      height: 400
    });
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "flex justify-between w-full p-2", children: [
    /* @__PURE__ */ _.jsx(
      "img",
      {
        src: "/bbarg_logo.jpg",
        alt: "HackerOne Scope Retriever Logo",
        width: 134,
        height: 70,
        className: "rounded"
      }
    ),
    t,
    /* @__PURE__ */ _.jsx(At, { onClick: r, children: /* @__PURE__ */ _.jsx($o, {}) })
  ] });
}
function Uo({ className: t }) {
  return /* @__PURE__ */ _.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: Me("size-6", t),
      children: [
        /* @__PURE__ */ _.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          }
        ),
        /* @__PURE__ */ _.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          }
        )
      ]
    }
  );
}
const zt = {
  theme: {
    inputBaseClassName: "shadow shadow-sky-500 w-72 border border-1 border-solid border-transparent outline-1 outline-transparent hover:outline-sky-500 rounded-md hover:border-sky-500 p-2 transition-colors duration-250 focus:outline-sky-500"
  },
  h1Endpoints: {
    getPrograms: "https://api.hackerone.com/v1/hackers/programs?page[number]={page}&page[size]=100",
    fetchScope: "https://api.hackerone.com/v1/hackers/programs/{handle}/structured_scopes"
  }
};
function Et(t) {
  const { className: r, ...n } = t;
  return /* @__PURE__ */ _.jsx(
    "input",
    {
      className: Me(zt.theme.inputBaseClassName, r),
      ...n
    }
  );
}
const Fo = async (t) => {
  typeof _e < "u" ? await _e.storage.local.set({ hackerHandle: t }) : typeof chrome < "u" && chrome.storage.local.set({ hackerHandle: t });
}, qo = async () => {
  typeof _e < "u" ? await _e.storage.local.remove("hackerHandle") : typeof chrome < "u" && chrome.storage.local.remove("hackerHandle");
}, cn = async () => new Promise((t, r) => {
  typeof _e < "u" ? _e.storage.local.get("hackerHandle").then(
    (n) => {
      const a = n.hackerHandle;
      t(a ?? null);
    },
    (n) => {
      console.error("Error retrieving Hacker handle:", n), r(n);
    }
  ) : typeof chrome < "u" ? chrome.storage.local.get("hackerHandle", (n) => {
    if (chrome.runtime.lastError)
      console.error(
        "Error retrieving Hacker handle:",
        chrome.runtime.lastError
      ), r(chrome.runtime.lastError);
    else {
      const a = n.hackerHandle;
      t(a ?? null);
    }
  }) : t(null);
}), un = async () => {
  const t = await Kr(), r = await cn();
  if (t && r)
    return {
      Authorization: `Basic ${btoa(`${r}:${t}`)}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  throw new Error("Missing API key or HackerOne username");
}, Bo = async () => {
  let t = 1;
  const r = /* @__PURE__ */ new Set();
  for (; ; ) {
    const a = zt.h1Endpoints.getPrograms.replace("{page}", t.toString()), c = await un(), d = await fetch(a, { headers: c });
    if (!d.ok)
      throw console.error("Failed to fetch programs", { page: t }), new Error("Failed to fetch programs");
    const l = await d.json();
    if (!l.data || l.data.length === 0)
      break;
    l.data.map(
      (m) => m.attributes.handle
    ).forEach((m) => r.add(m)), t++;
  }
  return Array.from(r);
};
async function Wo(t) {
  const r = zt.h1Endpoints.fetchScope.replace("{handle}", t), n = await un(), a = await fetch(r, { headers: n });
  if (!a.ok)
    throw console.error("Failed to fetch scope", { programHandle: t }), new Error("Failed to fetch scope");
  return (await a.json()).data.filter(
    (l) => l.attributes.eligible_for_submission && l.attributes.eligible_for_bounty
  ).map(
    (l) => l.attributes.asset_identifier
  );
}
function Yo({ className: t }) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      className: Me(
        "h-10 w-full bg-gray-400 animate-pulse rounded-md",
        t
      )
    }
  );
}
function Go({ className: t }) {
  return /* @__PURE__ */ _.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      className: Me("size-6", t),
      children: /* @__PURE__ */ _.jsx(
        "path",
        {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        }
      )
    }
  );
}
const lr = "programHandles";
function Do(t) {
  localStorage.setItem(lr, JSON.stringify(t));
}
function Wt() {
  return localStorage.getItem(lr);
}
function Qo() {
  localStorage.removeItem(lr);
}
function Ko({ className: t }) {
  return /* @__PURE__ */ _.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      className: Me("size-6", t),
      children: /* @__PURE__ */ _.jsx(
        "path",
        {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        }
      )
    }
  );
}
function Vo({
  apiKey: t,
  setApiKey: r,
  hackerHandle: n,
  setHackerHandle: a
}) {
  const [c, d] = ge.useState(null), [l, p] = ge.useState(""), [m, T] = ge.useState([]), R = Wt(), { data: P, error: ue, isLoading: q, isFetching: X, refetch: K } = Vn({
    queryKey: ["scopes", `${t}:${n}`],
    queryFn: Bo,
    enabled: !!t && !!n && !R,
    initialData: () => {
      const W = Wt();
      return W ? JSON.parse(W) : void 0;
    },
    staleTime: 1e3 * 60 * 60 * 24
  });
  ge.useEffect(() => {
    P && (d(P), Do(P));
  }, [P]), ge.useEffect(() => {
    const W = Wt();
    W && d(JSON.parse(W));
  }, []), ge.useEffect(() => {
    T(
      (c == null ? void 0 : c.filter(
        (W) => W.toLowerCase().includes(l.toLowerCase())
      )) ?? []
    );
  }, [l, c]);
  const D = () => {
    Qo(), K();
  }, le = async (W) => {
    try {
      const fe = await Wo(W);
      if (fe.length === 0) {
        alert("No hay dominios elegibles en el scope.");
        return;
      }
      const me = fe.join(`
`), U = new Blob([me], { type: "text/plain" }), u = URL.createObjectURL(U), b = document.createElement("a");
      b.href = u, b.download = `${W}_scopes.txt`, document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(u);
    } catch (fe) {
      console.error("Error descargando scope:", fe);
    }
  };
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(ln, {}),
    ue && /* @__PURE__ */ _.jsx("p", { className: "text-red-700 font-semibold", children: ue.message }),
    q || X ? /* @__PURE__ */ _.jsx(Yo, {}) : /* @__PURE__ */ _.jsxs("div", { className: "relative w-full mx-auto", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ _.jsx(
          Et,
          {
            type: "text",
            value: l,
            onChange: (W) => p(W.target.value),
            placeholder: "Search for a handle...",
            className: "w-full"
          }
        ),
        /* @__PURE__ */ _.jsx(
          At,
          {
            title: "refrescar program handles",
            onClick: D,
            children: /* @__PURE__ */ _.jsx(Ko, { className: "size-5" })
          }
        )
      ] }),
      l && m.length > 0 && /* @__PURE__ */ _.jsx("ul", { className: "absolute left-0 w-full top-10 bg-black rounded-md shadow-md max-h-36 overflow-y-auto", children: m.map((W) => /* @__PURE__ */ _.jsxs(
        "li",
        {
          onClick: () => le(W),
          className: "p-2 cursor-pointer bg-black hover:text-sky-500 flex justify-between",
          children: [
            W,
            " ",
            /* @__PURE__ */ _.jsx(Go, { className: "size-4" })
          ]
        },
        W
      )) }),
      l && m.length === 0 && /* @__PURE__ */ _.jsx("p", { className: "text-sm text-center mt-1", children: "No se encontraron resultados" })
    ] }),
    /* @__PURE__ */ _.jsx(
      Xo,
      {
        apiKey: t,
        setApiKey: r,
        hackerHandle: n,
        setHackerHandle: a
      }
    )
  ] });
}
const Mt = "size-5";
function Xo({
  apiKey: t,
  setApiKey: r,
  hackerHandle: n,
  setHackerHandle: a
}) {
  const [c, d] = ge.useState("password"), l = () => {
    r(null), En();
  }, p = () => {
    a(null), qo();
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-2 absolute bottom-2 right-2", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "flex gap-4 items-center", children: [
      "Api key:",
      /* @__PURE__ */ _.jsx(
        Et,
        {
          type: "text",
          value: n,
          disabled: !0,
          className: "w-auto"
        }
      ),
      /* @__PURE__ */ _.jsx(
        At,
        {
          onClick: p,
          title: "eliminar hacker handle",
          className: "hover:text-red-600",
          children: /* @__PURE__ */ _.jsx(Wr, { className: Mt })
        }
      )
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "flex gap-4 items-center", children: [
      "Api key:",
      /* @__PURE__ */ _.jsx(
        Et,
        {
          type: c,
          value: t,
          disabled: !0,
          className: "w-auto"
        }
      ),
      /* @__PURE__ */ _.jsx(
        At,
        {
          onClick: () => d((m) => m === "password" ? "text" : "password"),
          title: c === "password" ? "mostrar" : "esconder",
          children: c === "password" ? /* @__PURE__ */ _.jsx(Uo, { className: Mt }) : /* @__PURE__ */ _.jsx(Ho, { className: Mt })
        }
      ),
      /* @__PURE__ */ _.jsx(
        At,
        {
          onClick: l,
          title: "eliminar api key",
          className: "hover:text-red-600",
          children: /* @__PURE__ */ _.jsx(Wr, { className: Mt })
        }
      )
    ] })
  ] });
}
function Jo(t) {
  const { className: r, children: n, ...a } = t;
  return /* @__PURE__ */ _.jsx(
    "button",
    {
      className: Me(
        "hover:cursor-pointer",
        zt.theme.inputBaseClassName,
        r
      ),
      ...a,
      children: n
    }
  );
}
function es() {
  const [t, r] = ge.useState(
    null
  ), [n, a] = ge.useState(null), [c, d] = ge.useState(
    null
  ), [l, p] = ge.useState(null), [m, T] = ge.useState(null);
  ge.useEffect(() => {
    (async () => {
      const X = await Kr();
      p(X);
      const K = await cn();
      T(K);
    })();
  }, [l, m]);
  const R = async () => {
    r(null), n && c ? (await xn(n), p(n), await Fo(c), T(c)) : r("* Debe completar ambos campos.");
  }, P = (q) => {
    a(q.target.value);
  }, ue = (q) => {
    d(q.target.value);
  };
  return l && m ? /* @__PURE__ */ _.jsx(
    Vo,
    {
      apiKey: l,
      setApiKey: p,
      hackerHandle: m,
      setHackerHandle: T
    }
  ) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(ln, {}),
    /* @__PURE__ */ _.jsxs("h1", { className: "text-xl", children: [
      "¡BB-Arg",
      " ",
      /* @__PURE__ */ _.jsx(
        "a",
        {
          href: "https://hackerone.com/opportunities/all",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Hacker One"
        }
      ),
      " ",
      "Scope Retriever!"
    ] }),
    /* @__PURE__ */ _.jsx("p", { children: "Para comenzar, necesitamos que ingreses tu API Key de HackerOne." }),
    /* @__PURE__ */ _.jsx(
      Et,
      {
        type: "text",
        value: c ?? void 0,
        onChange: ue,
        placeholder: "Introduce tu hacker handle",
        className: "w-72"
      }
    ),
    /* @__PURE__ */ _.jsx(
      Et,
      {
        type: "text",
        value: n ?? void 0,
        onChange: P,
        placeholder: "Introduce tu API Key",
        className: "w-72"
      }
    ),
    t && /* @__PURE__ */ _.jsx("p", { className: "text-red-700 font-semibold", children: t }),
    /* @__PURE__ */ _.jsx(
      Jo,
      {
        type: "button",
        className: "w-72",
        onClick: R,
        children: "Guardar"
      }
    ),
    /* @__PURE__ */ _.jsxs("p", { className: "text-center", children: [
      "¿No tienes una API Key? Puedes obtenerla en la",
      " ",
      /* @__PURE__ */ _.jsx(
        "a",
        {
          href: "https://docs.hackerone.com/en/articles/8410331-api-token",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "documentación de HackerOne"
        }
      ),
      "."
    ] })
  ] });
}
export {
  es as default
};
