(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8723],
  {
    50710: function (e, t, r) {
      "use strict";
      var n = r(51597),
        o = r(65775),
        i = o(n("String.prototype.indexOf"));
      e.exports = function (e, t) {
        var r = n(e, !!t);
        return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r;
      };
    },
    65775: function (e, t, r) {
      "use strict";
      var n = r(24316),
        o = r(51597),
        i = r(91475),
        u = o("%TypeError%"),
        a = o("%Function.prototype.apply%"),
        f = o("%Function.prototype.call%"),
        c = o("%Reflect.apply%", !0) || n.call(f, a),
        l = o("%Object.defineProperty%", !0),
        s = o("%Math.max%");
      if (l)
        try {
          l({}, "a", { value: 1 });
        } catch (e) {
          l = null;
        }
      e.exports = function (e) {
        if ("function" != typeof e) throw new u("a function is required");
        var t = c(n, f, arguments);
        return i(t, 1 + s(0, e.length - (arguments.length - 1)), !0);
      };
      var p = function () {
        return c(n, a, arguments);
      };
      l ? l(e.exports, "apply", { value: p }) : (e.exports.apply = p);
    },
    9122: function (e, t, r) {
      "use strict";
      var n = r(59972)(),
        o = r(51597),
        i = n && o("%Object.defineProperty%", !0);
      if (i)
        try {
          i({}, "a", { value: 1 });
        } catch (e) {
          i = !1;
        }
      var u = o("%SyntaxError%"),
        a = o("%TypeError%"),
        f = r(67526);
      e.exports = function (e, t, r) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new a("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t)
          throw new a("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" != typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new a(
            "`nonEnumerable`, if provided, must be a boolean or null"
          );
        if (
          arguments.length > 4 &&
          "boolean" != typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new a("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" != typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new a(
            "`nonConfigurable`, if provided, must be a boolean or null"
          );
        if (arguments.length > 6 && "boolean" != typeof arguments[6])
          throw new a("`loose`, if provided, must be a boolean");
        var n = arguments.length > 3 ? arguments[3] : null,
          o = arguments.length > 4 ? arguments[4] : null,
          c = arguments.length > 5 ? arguments[5] : null,
          l = arguments.length > 6 && arguments[6],
          s = !!f && f(e, t);
        if (i)
          i(e, t, {
            configurable: null === c && s ? s.configurable : !c,
            enumerable: null === n && s ? s.enumerable : !n,
            value: r,
            writable: null === o && s ? s.writable : !o,
          });
        else if (!l && (n || o || c))
          throw new u(
            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
          );
        else e[t] = r;
      };
    },
    11549: function (e, t, r) {
      "use strict";
      var n = r(18339),
        o = Object.prototype.toString,
        i = Object.prototype.hasOwnProperty,
        u = function (e, t, r) {
          for (var n = 0, o = e.length; n < o; n++)
            i.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
        },
        a = function (e, t, r) {
          for (var n = 0, o = e.length; n < o; n++)
            null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e);
        },
        f = function (e, t, r) {
          for (var n in e)
            i.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
        };
      e.exports = function (e, t, r) {
        var i;
        if (!n(t)) throw TypeError("iterator must be a function");
        arguments.length >= 3 && (i = r),
          "[object Array]" === o.call(e)
            ? u(e, t, i)
            : "string" == typeof e
            ? a(e, t, i)
            : f(e, t, i);
      };
    },
    50164: function (e) {
      "use strict";
      var t = Object.prototype.toString,
        r = Math.max,
        n = function (e, t) {
          for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
          for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
          return r;
        },
        o = function (e, t) {
          for (var r = [], n = t || 0, o = 0; n < e.length; n += 1, o += 1)
            r[o] = e[n];
          return r;
        },
        i = function (e, t) {
          for (var r = "", n = 0; n < e.length; n += 1)
            (r += e[n]), n + 1 < e.length && (r += t);
          return r;
        };
      e.exports = function (e) {
        var u,
          a = this;
        if ("function" != typeof a || "[object Function]" !== t.apply(a))
          throw TypeError(
            "Function.prototype.bind called on incompatible " + a
          );
        for (
          var f = o(arguments, 1), c = r(0, a.length - f.length), l = [], s = 0;
          s < c;
          s++
        )
          l[s] = "$" + s;
        if (
          ((u = Function(
            "binder",
            "return function (" +
              i(l, ",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof u) {
              var t = a.apply(this, n(f, arguments));
              return Object(t) === t ? t : this;
            }
            return a.apply(e, n(f, arguments));
          })),
          a.prototype)
        ) {
          var p = function () {};
          (p.prototype = a.prototype),
            (u.prototype = new p()),
            (p.prototype = null);
        }
        return u;
      };
    },
    24316: function (e, t, r) {
      "use strict";
      var n = r(50164);
      e.exports = Function.prototype.bind || n;
    },
    51597: function (e, t, r) {
      "use strict";
      var n,
        o = SyntaxError,
        i = Function,
        u = TypeError,
        a = function (e) {
          try {
            return i('"use strict"; return (' + e + ").constructor;")();
          } catch (e) {}
        },
        f = Object.getOwnPropertyDescriptor;
      if (f)
        try {
          f({}, "");
        } catch (e) {
          f = null;
        }
      var c = function () {
          throw new u();
        },
        l = f
          ? (function () {
              try {
                return arguments.callee, c;
              } catch (e) {
                try {
                  return f(arguments, "callee").get;
                } catch (e) {
                  return c;
                }
              }
            })()
          : c,
        s = r(79633)(),
        p = r(85118)(),
        y =
          Object.getPrototypeOf ||
          (p
            ? function (e) {
                return e.__proto__;
              }
            : null),
        h = {},
        g = "undefined" != typeof Uint8Array && y ? y(Uint8Array) : n,
        d = {
          "%AggregateError%":
            "undefined" == typeof AggregateError ? n : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
          "%ArrayIteratorPrototype%": s && y ? y([][Symbol.iterator]()) : n,
          "%AsyncFromSyncIteratorPrototype%": n,
          "%AsyncFunction%": h,
          "%AsyncGenerator%": h,
          "%AsyncGeneratorFunction%": h,
          "%AsyncIteratorPrototype%": h,
          "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
          "%BigInt64Array%":
            "undefined" == typeof BigInt64Array ? n : BigInt64Array,
          "%BigUint64Array%":
            "undefined" == typeof BigUint64Array ? n : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? n : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? n : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? n : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? n
              : FinalizationRegistry,
          "%Function%": i,
          "%GeneratorFunction%": h,
          "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": s && y ? y(y([][Symbol.iterator]())) : n,
          "%JSON%": "object" == typeof JSON ? JSON : n,
          "%Map%": "undefined" == typeof Map ? n : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && s && y
              ? y(new Map()[Symbol.iterator]())
              : n,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? n : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? n : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && s && y
              ? y(new Set()[Symbol.iterator]())
              : n,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": s && y ? y(""[Symbol.iterator]()) : n,
          "%Symbol%": s ? Symbol : n,
          "%SyntaxError%": o,
          "%ThrowTypeError%": l,
          "%TypedArray%": g,
          "%TypeError%": u,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
        };
      if (y)
        try {
          null.error;
        } catch (e) {
          var b = y(y(e));
          d["%Error.prototype%"] = b;
        }
      var m = function e(t) {
          var r;
          if ("%AsyncFunction%" === t) r = a("async function () {}");
          else if ("%GeneratorFunction%" === t) r = a("function* () {}");
          else if ("%AsyncGeneratorFunction%" === t)
            r = a("async function* () {}");
          else if ("%AsyncGenerator%" === t) {
            var n = e("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
          } else if ("%AsyncIteratorPrototype%" === t) {
            var o = e("%AsyncGenerator%");
            o && y && (r = y(o.prototype));
          }
          return (d[t] = r), r;
        },
        v = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        w = r(24316),
        A = r(73335),
        O = w.call(Function.call, Array.prototype.concat),
        S = w.call(Function.apply, Array.prototype.splice),
        j = w.call(Function.call, String.prototype.replace),
        P = w.call(Function.call, String.prototype.slice),
        E = w.call(Function.call, RegExp.prototype.exec),
        x =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        N = /\\(\\)?/g,
        I = function (e) {
          var t = P(e, 0, 1),
            r = P(e, -1);
          if ("%" === t && "%" !== r)
            throw new o("invalid intrinsic syntax, expected closing `%`");
          if ("%" === r && "%" !== t)
            throw new o("invalid intrinsic syntax, expected opening `%`");
          var n = [];
          return (
            j(e, x, function (e, t, r, o) {
              n[n.length] = r ? j(o, N, "$1") : t || e;
            }),
            n
          );
        },
        F = function (e, t) {
          var r,
            n = e;
          if ((A(v, n) && (n = "%" + (r = v[n])[0] + "%"), A(d, n))) {
            var i = d[n];
            if ((i === h && (i = m(n)), void 0 === i && !t))
              throw new u(
                "intrinsic " +
                  e +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: r, name: n, value: i };
          }
          throw new o("intrinsic " + e + " does not exist!");
        };
      e.exports = function (e, t) {
        if ("string" != typeof e || 0 === e.length)
          throw new u("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t)
          throw new u('"allowMissing" argument must be a boolean');
        if (null === E(/^%?[^%]*%?$/, e))
          throw new o(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var r = I(e),
          n = r.length > 0 ? r[0] : "",
          i = F("%" + n + "%", t),
          a = i.name,
          c = i.value,
          l = !1,
          s = i.alias;
        s && ((n = s[0]), S(r, O([0, 1], s)));
        for (var p = 1, y = !0; p < r.length; p += 1) {
          var h = r[p],
            g = P(h, 0, 1),
            b = P(h, -1);
          if (
            ('"' === g ||
              "'" === g ||
              "`" === g ||
              '"' === b ||
              "'" === b ||
              "`" === b) &&
            g !== b
          )
            throw new o("property names with quotes must have matching quotes");
          if (
            (("constructor" !== h && y) || (l = !0),
            (n += "." + h),
            A(d, (a = "%" + n + "%")))
          )
            c = d[a];
          else if (null != c) {
            if (!(h in c)) {
              if (!t)
                throw new u(
                  "base intrinsic for " +
                    e +
                    " exists, but the property is not available."
                );
              return;
            }
            if (f && p + 1 >= r.length) {
              var m = f(c, h);
              c =
                (y = !!m) && "get" in m && !("originalValue" in m.get)
                  ? m.get
                  : c[h];
            } else (y = A(c, h)), (c = c[h]);
            y && !l && (d[a] = c);
          }
        }
        return c;
      };
    },
    67526: function (e, t, r) {
      "use strict";
      var n = r(51597)("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (e) {
          n = null;
        }
      e.exports = n;
    },
    59972: function (e, t, r) {
      "use strict";
      var n = r(51597)("%Object.defineProperty%", !0),
        o = function () {
          if (n)
            try {
              return n({}, "a", { value: 1 }), !0;
            } catch (e) {}
          return !1;
        };
      (o.hasArrayLengthDefineBug = function () {
        if (!o()) return null;
        try {
          return 1 !== n([], "length", { value: 1 }).length;
        } catch (e) {
          return !0;
        }
      }),
        (e.exports = o);
    },
    85118: function (e) {
      "use strict";
      var t = { foo: {} },
        r = Object;
      e.exports = function () {
        return (
          { __proto__: t }.foo === t.foo && !({ __proto__: null } instanceof r)
        );
      };
    },
    79633: function (e, t, r) {
      "use strict";
      var n = "undefined" != typeof Symbol && Symbol,
        o = r(76500);
      e.exports = function () {
        return (
          "function" == typeof n &&
          "function" == typeof Symbol &&
          "symbol" == typeof n("foo") &&
          "symbol" == typeof Symbol("bar") &&
          o()
        );
      };
    },
    76500: function (e) {
      "use strict";
      e.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          r = Object(t);
        if (
          "string" == typeof t ||
          "[object Symbol]" !== Object.prototype.toString.call(t) ||
          "[object Symbol]" !== Object.prototype.toString.call(r)
        )
          return !1;
        for (t in ((e[t] = 42), e)) return !1;
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length)
        )
          return !1;
        var n = Object.getOwnPropertySymbols(e);
        if (
          1 !== n.length ||
          n[0] !== t ||
          !Object.prototype.propertyIsEnumerable.call(e, t)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    86273: function (e, t, r) {
      "use strict";
      var n = r(76500);
      e.exports = function () {
        return n() && !!Symbol.toStringTag;
      };
    },
    73335: function (e, t, r) {
      "use strict";
      var n = Function.prototype.call,
        o = Object.prototype.hasOwnProperty,
        i = r(24316);
      e.exports = i.call(n, o);
    },
    75335: function (e) {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    7924: function (e, t, r) {
      "use strict";
      var n = r(86273)(),
        o = r(50710)("Object.prototype.toString"),
        i = function (e) {
          return (
            (!n || !e || "object" != typeof e || !(Symbol.toStringTag in e)) &&
            "[object Arguments]" === o(e)
          );
        },
        u = function (e) {
          return (
            !!i(e) ||
            (null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              "[object Array]" !== o(e) &&
              "[object Function]" === o(e.callee))
          );
        },
        a = (function () {
          return i(arguments);
        })();
      (i.isLegacyArguments = u), (e.exports = a ? i : u);
    },
    18339: function (e) {
      "use strict";
      var t,
        r,
        n = Function.prototype.toString,
        o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof o && "function" == typeof Object.defineProperty)
        try {
          (t = Object.defineProperty({}, "length", {
            get: function () {
              throw r;
            },
          })),
            (r = {}),
            o(
              function () {
                throw 42;
              },
              null,
              t
            );
        } catch (e) {
          e !== r && (o = null);
        }
      else o = null;
      var i = /^\s*class\b/,
        u = function (e) {
          try {
            var t = n.call(e);
            return i.test(t);
          } catch (e) {
            return !1;
          }
        },
        a = function (e) {
          try {
            if (u(e)) return !1;
            return n.call(e), !0;
          } catch (e) {
            return !1;
          }
        },
        f = Object.prototype.toString,
        c = "function" == typeof Symbol && !!Symbol.toStringTag,
        l = !(0 in [,]),
        s = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var p = document.all;
        f.call(p) === f.call(document.all) &&
          (s = function (e) {
            if ((l || !e) && (void 0 === e || "object" == typeof e))
              try {
                var t = f.call(e);
                return (
                  ("[object HTMLAllCollection]" === t ||
                    "[object HTML document.all class]" === t ||
                    "[object HTMLCollection]" === t ||
                    "[object Object]" === t) &&
                  null == e("")
                );
              } catch (e) {}
            return !1;
          });
      }
      e.exports = o
        ? function (e) {
            if (s(e)) return !0;
            if (!e || ("function" != typeof e && "object" != typeof e))
              return !1;
            try {
              o(e, null, t);
            } catch (e) {
              if (e !== r) return !1;
            }
            return !u(e) && a(e);
          }
        : function (e) {
            if (s(e)) return !0;
            if (!e || ("function" != typeof e && "object" != typeof e))
              return !1;
            if (c) return a(e);
            if (u(e)) return !1;
            var t = f.call(e);
            return (
              !!(
                "[object Function]" === t ||
                "[object GeneratorFunction]" === t ||
                /^\[object HTML/.test(t)
              ) && a(e)
            );
          };
    },
    12310: function (e, t, r) {
      "use strict";
      var n,
        o = Object.prototype.toString,
        i = Function.prototype.toString,
        u = /^\s*(?:function)?\*/,
        a = r(86273)(),
        f = Object.getPrototypeOf,
        c = function () {
          if (!a) return !1;
          try {
            return Function("return function*() {}")();
          } catch (e) {}
        };
      e.exports = function (e) {
        if ("function" != typeof e) return !1;
        if (u.test(i.call(e))) return !0;
        if (!a) return "[object GeneratorFunction]" === o.call(e);
        if (!f) return !1;
        if (void 0 === n) {
          var t = c();
          n = !!t && f(t);
        }
        return f(e) === n;
      };
    },
    59354: function (e, t, r) {
      "use strict";
      var n = r(78266);
      e.exports = function (e) {
        return !!n(e);
      };
    },
    91475: function (e, t, r) {
      "use strict";
      var n = r(51597),
        o = r(9122),
        i = r(59972)(),
        u = r(67526),
        a = n("%TypeError%"),
        f = n("%Math.floor%");
      e.exports = function (e, t) {
        if ("function" != typeof e) throw new a("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || f(t) !== t)
          throw new a("`length` must be a positive 32-bit integer");
        var r = arguments.length > 2 && !!arguments[2],
          n = !0,
          c = !0;
        if ("length" in e && u) {
          var l = u(e, "length");
          l && !l.configurable && (n = !1), l && !l.writable && (c = !1);
        }
        return (
          (n || c || !r) && (i ? o(e, "length", t, !0, !0) : o(e, "length", t)),
          e
        );
      };
    },
    39617: function (e) {
      e.exports = function (e) {
        return (
          e &&
          "object" == typeof e &&
          "function" == typeof e.copy &&
          "function" == typeof e.fill &&
          "function" == typeof e.readUInt8
        );
      };
    },
    52961: function (e, t, r) {
      "use strict";
      var n = r(7924),
        o = r(12310),
        i = r(78266),
        u = r(59354);
      function a(e) {
        return e.call.bind(e);
      }
      var f = "undefined" != typeof BigInt,
        c = "undefined" != typeof Symbol,
        l = a(Object.prototype.toString),
        s = a(Number.prototype.valueOf),
        p = a(String.prototype.valueOf),
        y = a(Boolean.prototype.valueOf);
      if (f) var h = a(BigInt.prototype.valueOf);
      if (c) var g = a(Symbol.prototype.valueOf);
      function d(e, t) {
        if ("object" != typeof e) return !1;
        try {
          return t(e), !0;
        } catch (e) {
          return !1;
        }
      }
      function b(e) {
        return "[object Map]" === l(e);
      }
      function m(e) {
        return "[object Set]" === l(e);
      }
      function v(e) {
        return "[object WeakMap]" === l(e);
      }
      function w(e) {
        return "[object WeakSet]" === l(e);
      }
      function A(e) {
        return "[object ArrayBuffer]" === l(e);
      }
      function O(e) {
        return (
          "undefined" != typeof ArrayBuffer &&
          (A.working ? A(e) : e instanceof ArrayBuffer)
        );
      }
      function S(e) {
        return "[object DataView]" === l(e);
      }
      function j(e) {
        return (
          "undefined" != typeof DataView &&
          (S.working ? S(e) : e instanceof DataView)
        );
      }
      (t.isArgumentsObject = n),
        (t.isGeneratorFunction = o),
        (t.isTypedArray = u),
        (t.isPromise = function (e) {
          return (
            ("undefined" != typeof Promise && e instanceof Promise) ||
            (null !== e &&
              "object" == typeof e &&
              "function" == typeof e.then &&
              "function" == typeof e.catch)
          );
        }),
        (t.isArrayBufferView = function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : u(e) || j(e);
        }),
        (t.isUint8Array = function (e) {
          return "Uint8Array" === i(e);
        }),
        (t.isUint8ClampedArray = function (e) {
          return "Uint8ClampedArray" === i(e);
        }),
        (t.isUint16Array = function (e) {
          return "Uint16Array" === i(e);
        }),
        (t.isUint32Array = function (e) {
          return "Uint32Array" === i(e);
        }),
        (t.isInt8Array = function (e) {
          return "Int8Array" === i(e);
        }),
        (t.isInt16Array = function (e) {
          return "Int16Array" === i(e);
        }),
        (t.isInt32Array = function (e) {
          return "Int32Array" === i(e);
        }),
        (t.isFloat32Array = function (e) {
          return "Float32Array" === i(e);
        }),
        (t.isFloat64Array = function (e) {
          return "Float64Array" === i(e);
        }),
        (t.isBigInt64Array = function (e) {
          return "BigInt64Array" === i(e);
        }),
        (t.isBigUint64Array = function (e) {
          return "BigUint64Array" === i(e);
        }),
        (b.working = "undefined" != typeof Map && b(new Map())),
        (t.isMap = function (e) {
          return (
            "undefined" != typeof Map && (b.working ? b(e) : e instanceof Map)
          );
        }),
        (m.working = "undefined" != typeof Set && m(new Set())),
        (t.isSet = function (e) {
          return (
            "undefined" != typeof Set && (m.working ? m(e) : e instanceof Set)
          );
        }),
        (v.working = "undefined" != typeof WeakMap && v(new WeakMap())),
        (t.isWeakMap = function (e) {
          return (
            "undefined" != typeof WeakMap &&
            (v.working ? v(e) : e instanceof WeakMap)
          );
        }),
        (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
        (t.isWeakSet = function (e) {
          return w(e);
        }),
        (A.working = "undefined" != typeof ArrayBuffer && A(new ArrayBuffer())),
        (t.isArrayBuffer = O),
        (S.working =
          "undefined" != typeof ArrayBuffer &&
          "undefined" != typeof DataView &&
          S(new DataView(new ArrayBuffer(1), 0, 1))),
        (t.isDataView = j);
      var P =
        "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function E(e) {
        return "[object SharedArrayBuffer]" === l(e);
      }
      function x(e) {
        return (
          void 0 !== P &&
          (void 0 === E.working && (E.working = E(new P())),
          E.working ? E(e) : e instanceof P)
        );
      }
      function N(e) {
        return d(e, s);
      }
      function I(e) {
        return d(e, p);
      }
      function F(e) {
        return d(e, y);
      }
      function U(e) {
        return f && d(e, h);
      }
      function B(e) {
        return c && d(e, g);
      }
      (t.isSharedArrayBuffer = x),
        (t.isAsyncFunction = function (e) {
          return "[object AsyncFunction]" === l(e);
        }),
        (t.isMapIterator = function (e) {
          return "[object Map Iterator]" === l(e);
        }),
        (t.isSetIterator = function (e) {
          return "[object Set Iterator]" === l(e);
        }),
        (t.isGeneratorObject = function (e) {
          return "[object Generator]" === l(e);
        }),
        (t.isWebAssemblyCompiledModule = function (e) {
          return "[object WebAssembly.Module]" === l(e);
        }),
        (t.isNumberObject = N),
        (t.isStringObject = I),
        (t.isBooleanObject = F),
        (t.isBigIntObject = U),
        (t.isSymbolObject = B),
        (t.isBoxedPrimitive = function (e) {
          return N(e) || I(e) || F(e) || U(e) || B(e);
        }),
        (t.isAnyArrayBuffer = function (e) {
          return "undefined" != typeof Uint8Array && (O(e) || x(e));
        }),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (
          e
        ) {
          Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
              throw Error(e + " is not supported in userland");
            },
          });
        });
    },
    40942: function (e, t, r) {
      var n = r(25566),
        o =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
              r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
            return r;
          },
        i = /%[sdj%]/g;
      (t.format = function (e) {
        if (!v(e)) {
          for (var t = [], r = 0; r < arguments.length; r++)
            t.push(c(arguments[r]));
          return t.join(" ");
        }
        for (
          var r = 1,
            n = arguments,
            o = n.length,
            u = String(e).replace(i, function (e) {
              if ("%%" === e) return "%";
              if (r >= o) return e;
              switch (e) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            a = n[r];
          r < o;
          a = n[++r]
        )
          b(a) || !O(a) ? (u += " " + a) : (u += " " + c(a));
        return u;
      }),
        (t.deprecate = function (e, r) {
          if (void 0 !== n && !0 === n.noDeprecation) return e;
          if (void 0 === n)
            return function () {
              return t.deprecate(e, r).apply(this, arguments);
            };
          var o = !1;
          return function () {
            if (!o) {
              if (n.throwDeprecation) throw Error(r);
              n.traceDeprecation ? console.trace(r) : console.error(r),
                (o = !0);
            }
            return e.apply(this, arguments);
          };
        });
      var u = {},
        a = /^$/;
      if (n.env.NODE_DEBUG) {
        var f = n.env.NODE_DEBUG;
        a = RegExp(
          "^" +
            (f = f
              .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
              .replace(/\*/g, ".*")
              .replace(/,/g, "$|^")
              .toUpperCase()) +
            "$",
          "i"
        );
      }
      function c(e, r) {
        var n = { seen: [], stylize: s };
        return (
          arguments.length >= 3 && (n.depth = arguments[2]),
          arguments.length >= 4 && (n.colors = arguments[3]),
          d(r) ? (n.showHidden = r) : r && t._extend(n, r),
          w(n.showHidden) && (n.showHidden = !1),
          w(n.depth) && (n.depth = 2),
          w(n.colors) && (n.colors = !1),
          w(n.customInspect) && (n.customInspect = !0),
          n.colors && (n.stylize = l),
          p(n, e, n.depth)
        );
      }
      function l(e, t) {
        var r = c.styles[t];
        return r
          ? "\x1b[" + c.colors[r][0] + "m" + e + "\x1b[" + c.colors[r][1] + "m"
          : e;
      }
      function s(e, t) {
        return e;
      }
      function p(e, r, n) {
        if (
          e.customInspect &&
          r &&
          P(r.inspect) &&
          r.inspect !== t.inspect &&
          !(r.constructor && r.constructor.prototype === r)
        ) {
          var o,
            i,
            u,
            a,
            f,
            c = r.inspect(n, e);
          return v(c) || (c = p(e, c, n)), c;
        }
        var l = (function (e, t) {
          if (w(t)) return e.stylize("undefined", "undefined");
          if (v(t)) {
            var r =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(r, "string");
          }
          return m(t)
            ? e.stylize("" + t, "number")
            : d(t)
            ? e.stylize("" + t, "boolean")
            : b(t)
            ? e.stylize("null", "null")
            : void 0;
        })(e, r);
        if (l) return l;
        var s = Object.keys(r),
          O =
            ((a = {}),
            s.forEach(function (e, t) {
              a[e] = !0;
            }),
            a);
        if (
          (e.showHidden && (s = Object.getOwnPropertyNames(r)),
          j(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
        )
          return y(r);
        if (0 === s.length) {
          if (P(r)) {
            var E = r.name ? ": " + r.name : "";
            return e.stylize("[Function" + E + "]", "special");
          }
          if (A(r))
            return e.stylize(RegExp.prototype.toString.call(r), "regexp");
          if (S(r)) return e.stylize(Date.prototype.toString.call(r), "date");
          if (j(r)) return y(r);
        }
        var x = "",
          N = !1,
          F = ["{", "}"];
        return (g(r) && ((N = !0), (F = ["[", "]"])),
        P(r) && (x = " [Function" + (r.name ? ": " + r.name : "") + "]"),
        A(r) && (x = " " + RegExp.prototype.toString.call(r)),
        S(r) && (x = " " + Date.prototype.toUTCString.call(r)),
        j(r) && (x = " " + y(r)),
        0 !== s.length || (N && 0 != r.length))
          ? n < 0
            ? A(r)
              ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
              : e.stylize("[Object]", "special")
            : (e.seen.push(r),
              (f = N
                ? (function (e, t, r, n, o) {
                    for (var i = [], u = 0, a = t.length; u < a; ++u)
                      I(t, String(u))
                        ? i.push(h(e, t, r, n, String(u), !0))
                        : i.push("");
                    return (
                      o.forEach(function (o) {
                        o.match(/^\d+$/) || i.push(h(e, t, r, n, o, !0));
                      }),
                      i
                    );
                  })(e, r, n, O, s)
                : s.map(function (t) {
                    return h(e, r, n, O, t, N);
                  })),
              e.seen.pop(),
              (o = x),
              (i = F),
              (u = 0),
              f.reduce(function (e, t) {
                return (
                  u++,
                  t.indexOf("\n") >= 0 && u++,
                  e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                );
              }, 0) > 60
                ? i[0] +
                  ("" === o ? "" : o + "\n ") +
                  " " +
                  f.join(",\n  ") +
                  " " +
                  i[1]
                : i[0] + o + " " + f.join(", ") + " " + i[1])
          : F[0] + x + F[1];
      }
      function y(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function h(e, t, r, n, o, i) {
        var u, a, f;
        if (
          ((f = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }).get
            ? (a = f.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : f.set && (a = e.stylize("[Setter]", "special")),
          I(n, o) || (u = "[" + o + "]"),
          !a &&
            (0 > e.seen.indexOf(f.value)
              ? (a = b(r) ? p(e, f.value, null) : p(e, f.value, r - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (a = i
                  ? a
                      .split("\n")
                      .map(function (e) {
                        return "  " + e;
                      })
                      .join("\n")
                      .slice(2)
                  : "\n" +
                    a
                      .split("\n")
                      .map(function (e) {
                        return "   " + e;
                      })
                      .join("\n"))
              : (a = e.stylize("[Circular]", "special"))),
          w(u))
        ) {
          if (i && o.match(/^\d+$/)) return a;
          (u = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((u = u.slice(1, -1)), (u = e.stylize(u, "name")))
            : ((u = u
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (u = e.stylize(u, "string")));
        }
        return u + ": " + a;
      }
      function g(e) {
        return Array.isArray(e);
      }
      function d(e) {
        return "boolean" == typeof e;
      }
      function b(e) {
        return null === e;
      }
      function m(e) {
        return "number" == typeof e;
      }
      function v(e) {
        return "string" == typeof e;
      }
      function w(e) {
        return void 0 === e;
      }
      function A(e) {
        return O(e) && "[object RegExp]" === E(e);
      }
      function O(e) {
        return "object" == typeof e && null !== e;
      }
      function S(e) {
        return O(e) && "[object Date]" === E(e);
      }
      function j(e) {
        return O(e) && ("[object Error]" === E(e) || e instanceof Error);
      }
      function P(e) {
        return "function" == typeof e;
      }
      function E(e) {
        return Object.prototype.toString.call(e);
      }
      function x(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function (e) {
        if (!u[(e = e.toUpperCase())]) {
          if (a.test(e)) {
            var r = n.pid;
            u[e] = function () {
              var n = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, r, n);
            };
          } else u[e] = function () {};
        }
        return u[e];
      }),
        (t.inspect = c),
        (c.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (c.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (t.types = r(52961)),
        (t.isArray = g),
        (t.isBoolean = d),
        (t.isNull = b),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = m),
        (t.isString = v),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = w),
        (t.isRegExp = A),
        (t.types.isRegExp = A),
        (t.isObject = O),
        (t.isDate = S),
        (t.types.isDate = S),
        (t.isError = j),
        (t.types.isNativeError = j),
        (t.isFunction = P),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = r(39617));
      var N = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function I(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function () {
        var e, r;
        console.log(
          "%s - %s",
          ((r = [
            x((e = new Date()).getHours()),
            x(e.getMinutes()),
            x(e.getSeconds()),
          ].join(":")),
          [e.getDate(), N[e.getMonth()], r].join(" ")),
          t.format.apply(t, arguments)
        );
      }),
        (t.inherits = r(75335)),
        (t._extend = function (e, t) {
          if (!t || !O(t)) return e;
          for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
          return e;
        });
      var F =
        "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
      function U(e, t) {
        if (!e) {
          var r = Error("Promise was rejected with a falsy value");
          (r.reason = e), (e = r);
        }
        return t(e);
      }
      (t.promisify = function (e) {
        if ("function" != typeof e)
          throw TypeError('The "original" argument must be of type Function');
        if (F && e[F]) {
          var t = e[F];
          if ("function" != typeof t)
            throw TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(t, F, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        function t() {
          for (
            var t,
              r,
              n = new Promise(function (e, n) {
                (t = e), (r = n);
              }),
              o = [],
              i = 0;
            i < arguments.length;
            i++
          )
            o.push(arguments[i]);
          o.push(function (e, n) {
            e ? r(e) : t(n);
          });
          try {
            e.apply(this, o);
          } catch (e) {
            r(e);
          }
          return n;
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          F &&
            Object.defineProperty(t, F, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, o(e))
        );
      }),
        (t.promisify.custom = F),
        (t.callbackify = function (e) {
          if ("function" != typeof e)
            throw TypeError('The "original" argument must be of type Function');
          function t() {
            for (var t = [], r = 0; r < arguments.length; r++)
              t.push(arguments[r]);
            var o = t.pop();
            if ("function" != typeof o)
              throw TypeError("The last argument must be of type Function");
            var i = this,
              u = function () {
                return o.apply(i, arguments);
              };
            e.apply(this, t).then(
              function (e) {
                n.nextTick(u.bind(null, null, e));
              },
              function (e) {
                n.nextTick(U.bind(null, e, u));
              }
            );
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            Object.defineProperties(t, o(e)),
            t
          );
        });
    },
    78266: function (e, t, r) {
      "use strict";
      var n = r(11549),
        o = r(32432),
        i = r(65775),
        u = r(50710),
        a = r(67526),
        f = u("Object.prototype.toString"),
        c = r(86273)(),
        l = "undefined" == typeof globalThis ? r.g : globalThis,
        s = o(),
        p = u("String.prototype.slice"),
        y = Object.getPrototypeOf,
        h =
          u("Array.prototype.indexOf", !0) ||
          function (e, t) {
            for (var r = 0; r < e.length; r += 1) if (e[r] === t) return r;
            return -1;
          },
        g = { __proto__: null };
      c && a && y
        ? n(s, function (e) {
            var t = new l[e]();
            if (Symbol.toStringTag in t) {
              var r = y(t),
                n = a(r, Symbol.toStringTag);
              n || (n = a(y(r), Symbol.toStringTag)), (g["$" + e] = i(n.get));
            }
          })
        : n(s, function (e) {
            var t = new l[e](),
              r = t.slice || t.set;
            r && (g["$" + e] = i(r));
          });
      var d = function (e) {
          var t = !1;
          return (
            n(g, function (r, n) {
              if (!t)
                try {
                  "$" + r(e) === n && (t = p(n, 1));
                } catch (e) {}
            }),
            t
          );
        },
        b = function (e) {
          var t = !1;
          return (
            n(g, function (r, n) {
              if (!t)
                try {
                  r(e), (t = p(n, 1));
                } catch (e) {}
            }),
            t
          );
        };
      e.exports = function (e) {
        if (!e || "object" != typeof e) return !1;
        if (!c) {
          var t = p(f(e), 8, -1);
          return h(s, t) > -1 ? t : "Object" === t && b(e);
        }
        return a ? d(e) : null;
      };
    },
    32432: function (e, t, r) {
      "use strict";
      var n = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        o = "undefined" == typeof globalThis ? r.g : globalThis;
      e.exports = function () {
        for (var e = [], t = 0; t < n.length; t++)
          "function" == typeof o[n[t]] && (e[e.length] = n[t]);
        return e;
      };
    },
    77778: function (e, t, r) {
      "use strict";
      var n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        o = Math.ceil,
        i = Math.floor,
        u = "[BigNumber Error] ",
        a = u + "Number primitive has more than 15 significant digits: ",
        f = [
          1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
        ];
      function c(e) {
        var t = 0 | e;
        return e > 0 || e === t ? t : t - 1;
      }
      function l(e) {
        for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o; ) {
          for (r = 14 - (t = e[n++] + "").length; r--; t = "0" + t);
          i += t;
        }
        for (o = i.length; 48 === i.charCodeAt(--o); );
        return i.slice(0, o + 1 || 1);
      }
      function s(e, t) {
        var r,
          n,
          o = e.c,
          i = t.c,
          u = e.s,
          a = t.s,
          f = e.e,
          c = t.e;
        if (!u || !a) return null;
        if (((r = o && !o[0]), (n = i && !i[0]), r || n))
          return r ? (n ? 0 : -a) : u;
        if (u != a) return u;
        if (((r = u < 0), (n = f == c), !o || !i))
          return n ? 0 : !o ^ r ? 1 : -1;
        if (!n) return (f > c) ^ r ? 1 : -1;
        for (u = 0, a = (f = o.length) < (c = i.length) ? f : c; u < a; u++)
          if (o[u] != i[u]) return (o[u] > i[u]) ^ r ? 1 : -1;
        return f == c ? 0 : (f > c) ^ r ? 1 : -1;
      }
      function p(e, t, r, n) {
        if (e < t || e > r || e !== i(e))
          throw Error(
            u +
              (n || "Argument") +
              ("number" == typeof e
                ? e < t || e > r
                  ? " out of range: "
                  : " not an integer: "
                : " not a primitive number: ") +
              String(e)
          );
      }
      function y(e) {
        var t = e.c.length - 1;
        return c(e.e / 14) == t && e.c[t] % 2 != 0;
      }
      function h(e, t) {
        return (
          (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
          (t < 0 ? "e" : "e+") +
          t
        );
      }
      function g(e, t, r) {
        var n, o;
        if (t < 0) {
          for (o = r + "."; ++t; o += r);
          e = o + e;
        } else if (((n = e.length), ++t > n)) {
          for (o = r, t -= n; --t; o += r);
          e += o;
        } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
        return e;
      }
      var d = (function e(t) {
        var r,
          d,
          b,
          m,
          v,
          w,
          A,
          O,
          S,
          j = (T.prototype = { constructor: T, toString: null, valueOf: null }),
          P = new T(1),
          E = 20,
          x = 4,
          N = -7,
          I = 21,
          F = -1e7,
          U = 1e7,
          B = !1,
          R = 1,
          k = 0,
          _ = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: "",
          },
          D = "0123456789abcdefghijklmnopqrstuvwxyz",
          M = !0;
        function T(e, t) {
          var r,
            o,
            u,
            f,
            c,
            l,
            s,
            y,
            h = this;
          if (!(h instanceof T)) return new T(e, t);
          if (null == t) {
            if (e && !0 === e._isBigNumber) {
              (h.s = e.s),
                !e.c || e.e > U
                  ? (h.c = h.e = null)
                  : e.e < F
                  ? (h.c = [(h.e = 0)])
                  : ((h.e = e.e), (h.c = e.c.slice()));
              return;
            }
            if ((l = "number" == typeof e) && 0 * e == 0) {
              if (((h.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                for (f = 0, c = e; c >= 10; c /= 10, f++);
                f > U ? (h.c = h.e = null) : ((h.e = f), (h.c = [e]));
                return;
              }
              y = String(e);
            } else {
              if (!n.test((y = String(e)))) return S(h, y, l);
              h.s = 45 == y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
            }
            (f = y.indexOf(".")) > -1 && (y = y.replace(".", "")),
              (c = y.search(/e/i)) > 0
                ? (f < 0 && (f = c),
                  (f += +y.slice(c + 1)),
                  (y = y.substring(0, c)))
                : f < 0 && (f = y.length);
          } else {
            if ((p(t, 2, D.length, "Base"), 10 == t && M))
              return L((h = new T(e)), E + h.e + 1, x);
            if (((y = String(e)), (l = "number" == typeof e))) {
              if (0 * e != 0) return S(h, y, l, t);
              if (
                ((h.s = 1 / e < 0 ? ((y = y.slice(1)), -1) : 1),
                T.DEBUG && y.replace(/^0\.0*|\./, "").length > 15)
              )
                throw Error(a + e);
            } else h.s = 45 === y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
            for (r = D.slice(0, t), f = c = 0, s = y.length; c < s; c++)
              if (0 > r.indexOf((o = y.charAt(c)))) {
                if ("." == o) {
                  if (c > f) {
                    f = s;
                    continue;
                  }
                } else if (
                  !u &&
                  ((y == y.toUpperCase() && (y = y.toLowerCase())) ||
                    (y == y.toLowerCase() && (y = y.toUpperCase())))
                ) {
                  (u = !0), (c = -1), (f = 0);
                  continue;
                }
                return S(h, String(e), l, t);
              }
            (l = !1),
              (f = (y = O(y, t, 10, h.s)).indexOf(".")) > -1
                ? (y = y.replace(".", ""))
                : (f = y.length);
          }
          for (c = 0; 48 === y.charCodeAt(c); c++);
          for (s = y.length; 48 === y.charCodeAt(--s); );
          if ((y = y.slice(c, ++s))) {
            if (
              ((s -= c),
              l && T.DEBUG && s > 15 && (e > 9007199254740991 || e !== i(e)))
            )
              throw Error(a + h.s * e);
            if ((f = f - c - 1) > U) h.c = h.e = null;
            else if (f < F) h.c = [(h.e = 0)];
            else {
              if (
                ((h.e = f),
                (h.c = []),
                (c = (f + 1) % 14),
                f < 0 && (c += 14),
                c < s)
              ) {
                for (c && h.c.push(+y.slice(0, c)), s -= 14; c < s; )
                  h.c.push(+y.slice(c, (c += 14)));
                c = 14 - (y = y.slice(c)).length;
              } else c -= s;
              for (; c--; y += "0");
              h.c.push(+y);
            }
          } else h.c = [(h.e = 0)];
        }
        function C(e, t, r, n) {
          var o, i, u, a, f;
          if ((null == r ? (r = x) : p(r, 0, 8), !e.c)) return e.toString();
          if (((o = e.c[0]), (u = e.e), null == t))
            (f = l(e.c)),
              (f =
                1 == n || (2 == n && (u <= N || u >= I))
                  ? h(f, u)
                  : g(f, u, "0"));
          else if (
            ((i = (e = L(new T(e), t, r)).e),
            (a = (f = l(e.c)).length),
            1 == n || (2 == n && (t <= i || i <= N)))
          ) {
            for (; a < t; f += "0", a++);
            f = h(f, i);
          } else if (((t -= u), (f = g(f, i, "0")), i + 1 > a)) {
            if (--t > 0) for (f += "."; t--; f += "0");
          } else if ((t += i - a) > 0)
            for (i + 1 == a && (f += "."); t--; f += "0");
          return e.s < 0 && o ? "-" + f : f;
        }
        function G(e, t) {
          for (var r, n, o = 1, i = new T(e[0]); o < e.length; o++)
            ((n = new T(e[o])).s &&
              (r = s(i, n)) !== t &&
              (0 !== r || i.s !== t)) ||
              (i = n);
          return i;
        }
        function z(e, t, r) {
          for (var n = 1, o = t.length; !t[--o]; t.pop());
          for (o = t[0]; o >= 10; o /= 10, n++);
          return (
            (r = n + 14 * r - 1) > U
              ? (e.c = e.e = null)
              : r < F
              ? (e.c = [(e.e = 0)])
              : ((e.e = r), (e.c = t)),
            e
          );
        }
        function L(e, t, r, n) {
          var u,
            a,
            c,
            l,
            s,
            p,
            y,
            h = e.c;
          if (h) {
            e: {
              for (u = 1, l = h[0]; l >= 10; l /= 10, u++);
              if ((a = t - u) < 0)
                (a += 14),
                  (c = t),
                  (y = i(((s = h[(p = 0)]) / f[u - c - 1]) % 10));
              else if ((p = o((a + 1) / 14)) >= h.length) {
                if (n) {
                  for (; h.length <= p; h.push(0));
                  (s = y = 0), (u = 1), (a %= 14), (c = a - 14 + 1);
                } else break e;
              } else {
                for (u = 1, s = l = h[p]; l >= 10; l /= 10, u++);
                (a %= 14),
                  (y = (c = a - 14 + u) < 0 ? 0 : i((s / f[u - c - 1]) % 10));
              }
              if (
                ((n =
                  n ||
                  t < 0 ||
                  null != h[p + 1] ||
                  (c < 0 ? s : s % f[u - c - 1])),
                (n =
                  r < 4
                    ? (y || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                    : y > 5 ||
                      (5 == y &&
                        (4 == r ||
                          n ||
                          (6 == r &&
                            (a > 0 ? (c > 0 ? s / f[u - c] : 0) : h[p - 1]) %
                              10 &
                              1) ||
                          r == (e.s < 0 ? 8 : 7)))),
                t < 1 || !h[0])
              )
                return (
                  (h.length = 0),
                  n
                    ? ((t -= e.e + 1),
                      (h[0] = f[(14 - (t % 14)) % 14]),
                      (e.e = -t || 0))
                    : (h[0] = e.e = 0),
                  e
                );
              if (
                (0 == a
                  ? ((h.length = p), (l = 1), p--)
                  : ((h.length = p + 1),
                    (l = f[14 - a]),
                    (h[p] = c > 0 ? i((s / f[u - c]) % f[c]) * l : 0)),
                n)
              )
                for (;;) {
                  if (0 == p) {
                    for (a = 1, c = h[0]; c >= 10; c /= 10, a++);
                    for (c = h[0] += l, l = 1; c >= 10; c /= 10, l++);
                    a != l && (e.e++, 1e14 == h[0] && (h[0] = 1));
                    break;
                  }
                  if (((h[p] += l), 1e14 != h[p])) break;
                  (h[p--] = 0), (l = 1);
                }
              for (a = h.length; 0 === h[--a]; h.pop());
            }
            e.e > U ? (e.c = e.e = null) : e.e < F && (e.c = [(e.e = 0)]);
          }
          return e;
        }
        function W(e) {
          var t,
            r = e.e;
          return null === r
            ? e.toString()
            : ((t = l(e.c)),
              (t = r <= N || r >= I ? h(t, r) : g(t, r, "0")),
              e.s < 0 ? "-" + t : t);
        }
        return (
          (T.clone = e),
          (T.ROUND_UP = 0),
          (T.ROUND_DOWN = 1),
          (T.ROUND_CEIL = 2),
          (T.ROUND_FLOOR = 3),
          (T.ROUND_HALF_UP = 4),
          (T.ROUND_HALF_DOWN = 5),
          (T.ROUND_HALF_EVEN = 6),
          (T.ROUND_HALF_CEIL = 7),
          (T.ROUND_HALF_FLOOR = 8),
          (T.EUCLID = 9),
          (T.config = T.set =
            function (e) {
              var t, r;
              if (null != e) {
                if ("object" == typeof e) {
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      (p((r = e[t]), 0, 1e9, t), (E = r)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      (p((r = e[t]), 0, 8, t), (x = r)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((r = e[t]) && r.pop
                        ? (p(r[0], -1e9, 0, t),
                          p(r[1], 0, 1e9, t),
                          (N = r[0]),
                          (I = r[1]))
                        : (p(r, -1e9, 1e9, t), (N = -(I = r < 0 ? -r : r)))),
                    e.hasOwnProperty((t = "RANGE")))
                  ) {
                    if ((r = e[t]) && r.pop)
                      p(r[0], -1e9, -1, t),
                        p(r[1], 1, 1e9, t),
                        (F = r[0]),
                        (U = r[1]);
                    else if ((p(r, -1e9, 1e9, t), r)) F = -(U = r < 0 ? -r : r);
                    else throw Error(u + t + " cannot be zero: " + r);
                  }
                  if (e.hasOwnProperty((t = "CRYPTO"))) {
                    if (!!(r = e[t]) === r) {
                      if (r) {
                        if (
                          "undefined" != typeof crypto &&
                          crypto &&
                          (crypto.getRandomValues || crypto.randomBytes)
                        )
                          B = r;
                        else throw ((B = !r), Error(u + "crypto unavailable"));
                      } else B = r;
                    } else throw Error(u + t + " not true or false: " + r);
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      (p((r = e[t]), 0, 9, t), (R = r)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      (p((r = e[t]), 0, 1e9, t), (k = r)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if ("object" == typeof (r = e[t])) _ = r;
                    else throw Error(u + t + " not an object: " + r);
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      "string" != typeof (r = e[t]) ||
                      /^.?$|[+\-.\s]|(.).*\1/.test(r)
                    )
                      throw Error(u + t + " invalid: " + r);
                    (M = "0123456789" == r.slice(0, 10)), (D = r);
                  }
                } else throw Error(u + "Object expected: " + e);
              }
              return {
                DECIMAL_PLACES: E,
                ROUNDING_MODE: x,
                EXPONENTIAL_AT: [N, I],
                RANGE: [F, U],
                CRYPTO: B,
                MODULO_MODE: R,
                POW_PRECISION: k,
                FORMAT: _,
                ALPHABET: D,
              };
            }),
          (T.isBigNumber = function (e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!T.DEBUG) return !0;
            var t,
              r,
              n = e.c,
              o = e.e,
              a = e.s;
            e: if ("[object Array]" == {}.toString.call(n)) {
              if (
                (1 === a || -1 === a) &&
                o >= -1e9 &&
                o <= 1e9 &&
                o === i(o)
              ) {
                if (0 === n[0]) {
                  if (0 === o && 1 === n.length) return !0;
                  break e;
                }
                if (
                  ((t = (o + 1) % 14) < 1 && (t += 14),
                  String(n[0]).length == t)
                ) {
                  for (t = 0; t < n.length; t++)
                    if ((r = n[t]) < 0 || r >= 1e14 || r !== i(r)) break e;
                  if (0 !== r) return !0;
                }
              }
            } else if (
              null === n &&
              null === o &&
              (null === a || 1 === a || -1 === a)
            )
              return !0;
            throw Error(u + "Invalid BigNumber: " + e);
          }),
          (T.maximum = T.max =
            function () {
              return G(arguments, -1);
            }),
          (T.minimum = T.min =
            function () {
              return G(arguments, 1);
            }),
          (T.random =
            ((r =
              (9007199254740992 * Math.random()) & 2097151
                ? function () {
                    return i(9007199254740992 * Math.random());
                  }
                : function () {
                    return (
                      ((1073741824 * Math.random()) | 0) * 8388608 +
                      ((8388608 * Math.random()) | 0)
                    );
                  }),
            function (e) {
              var t,
                n,
                a,
                c,
                l,
                s = 0,
                y = [],
                h = new T(P);
              if ((null == e ? (e = E) : p(e, 0, 1e9), (c = o(e / 14)), B)) {
                if (crypto.getRandomValues) {
                  for (
                    t = crypto.getRandomValues(new Uint32Array((c *= 2)));
                    s < c;

                  )
                    (l = 131072 * t[s] + (t[s + 1] >>> 11)) >= 9e15
                      ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                        (t[s] = n[0]),
                        (t[s + 1] = n[1]))
                      : (y.push(l % 1e14), (s += 2));
                  s = c / 2;
                } else if (crypto.randomBytes) {
                  for (t = crypto.randomBytes((c *= 7)); s < c; )
                    (l =
                      (31 & t[s]) * 281474976710656 +
                      1099511627776 * t[s + 1] +
                      4294967296 * t[s + 2] +
                      16777216 * t[s + 3] +
                      (t[s + 4] << 16) +
                      (t[s + 5] << 8) +
                      t[s + 6]) >= 9e15
                      ? crypto.randomBytes(7).copy(t, s)
                      : (y.push(l % 1e14), (s += 7));
                  s = c / 7;
                } else throw ((B = !1), Error(u + "crypto unavailable"));
              }
              if (!B) for (; s < c; ) (l = r()) < 9e15 && (y[s++] = l % 1e14);
              for (
                c = y[--s],
                  e %= 14,
                  c && e && ((l = f[14 - e]), (y[s] = i(c / l) * l));
                0 === y[s];
                y.pop(), s--
              );
              if (s < 0) y = [(a = 0)];
              else {
                for (a = -1; 0 === y[0]; y.splice(0, 1), a -= 14);
                for (s = 1, l = y[0]; l >= 10; l /= 10, s++);
                s < 14 && (a -= 14 - s);
              }
              return (h.e = a), (h.c = y), h;
            })),
          (T.sum = function () {
            for (var e = 1, t = arguments, r = new T(t[0]); e < t.length; )
              r = r.plus(t[e++]);
            return r;
          }),
          (O = (function () {
            var e = "0123456789";
            function t(e, t, r, n) {
              for (var o, i, u = [0], a = 0, f = e.length; a < f; ) {
                for (i = u.length; i--; u[i] *= t);
                for (u[0] += n.indexOf(e.charAt(a++)), o = 0; o < u.length; o++)
                  u[o] > r - 1 &&
                    (null == u[o + 1] && (u[o + 1] = 0),
                    (u[o + 1] += (u[o] / r) | 0),
                    (u[o] %= r));
              }
              return u.reverse();
            }
            return function (r, n, o, i, u) {
              var a,
                f,
                c,
                s,
                p,
                y,
                h,
                d,
                b = r.indexOf("."),
                m = E,
                v = x;
              for (
                b >= 0 &&
                  ((s = k),
                  (k = 0),
                  (r = r.replace(".", "")),
                  (y = (d = new T(n)).pow(r.length - b)),
                  (k = s),
                  (d.c = t(g(l(y.c), y.e, "0"), 10, o, e)),
                  (d.e = d.c.length)),
                  c = s =
                    (h = t(r, n, o, u ? ((a = D), e) : ((a = e), D))).length;
                0 == h[--s];
                h.pop()
              );
              if (!h[0]) return a.charAt(0);
              if (
                (b < 0
                  ? --c
                  : ((y.c = h),
                    (y.e = c),
                    (y.s = i),
                    (h = (y = A(y, d, m, v, o)).c),
                    (p = y.r),
                    (c = y.e)),
                (b = h[(f = c + m + 1)]),
                (s = o / 2),
                (p = p || f < 0 || null != h[f + 1]),
                (p =
                  v < 4
                    ? (null != b || p) && (0 == v || v == (y.s < 0 ? 3 : 2))
                    : b > s ||
                      (b == s &&
                        (4 == v ||
                          p ||
                          (6 == v && 1 & h[f - 1]) ||
                          v == (y.s < 0 ? 8 : 7)))),
                f < 1 || !h[0])
              )
                r = p ? g(a.charAt(1), -m, a.charAt(0)) : a.charAt(0);
              else {
                if (((h.length = f), p))
                  for (--o; ++h[--f] > o; )
                    (h[f] = 0), f || (++c, (h = [1].concat(h)));
                for (s = h.length; !h[--s]; );
                for (b = 0, r = ""; b <= s; r += a.charAt(h[b++]));
                r = g(r, c, a.charAt(0));
              }
              return r;
            };
          })()),
          (A = (function () {
            function e(e, t, r) {
              var n,
                o,
                i,
                u,
                a = 0,
                f = e.length,
                c = t % 1e7,
                l = (t / 1e7) | 0;
              for (e = e.slice(); f--; )
                (n = l * (i = e[f] % 1e7) + (u = (e[f] / 1e7) | 0) * c),
                  (a =
                    (((o = c * i + (n % 1e7) * 1e7 + a) / r) | 0) +
                    ((n / 1e7) | 0) +
                    l * u),
                  (e[f] = o % r);
              return a && (e = [a].concat(e)), e;
            }
            function t(e, t, r, n) {
              var o, i;
              if (r != n) i = r > n ? 1 : -1;
              else
                for (o = i = 0; o < r; o++)
                  if (e[o] != t[o]) {
                    i = e[o] > t[o] ? 1 : -1;
                    break;
                  }
              return i;
            }
            function r(e, t, r, n) {
              for (var o = 0; r--; )
                (e[r] -= o),
                  (o = e[r] < t[r] ? 1 : 0),
                  (e[r] = o * n + e[r] - t[r]);
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function (n, o, u, a, f) {
              var l,
                s,
                p,
                y,
                h,
                g,
                d,
                b,
                m,
                v,
                w,
                A,
                O,
                S,
                j,
                P,
                E,
                x = n.s == o.s ? 1 : -1,
                N = n.c,
                I = o.c;
              if (!N || !N[0] || !I || !I[0])
                return new T(
                  n.s && o.s && (N ? !I || N[0] != I[0] : I)
                    ? (N && 0 == N[0]) || !I
                      ? 0 * x
                      : x / 0
                    : NaN
                );
              for (
                m = (b = new T(x)).c = [],
                  x = u + (s = n.e - o.e) + 1,
                  f ||
                    ((f = 1e14),
                    (s = c(n.e / 14) - c(o.e / 14)),
                    (x = (x / 14) | 0)),
                  p = 0;
                I[p] == (N[p] || 0);
                p++
              );
              if ((I[p] > (N[p] || 0) && s--, x < 0)) m.push(1), (y = !0);
              else {
                for (
                  S = N.length,
                    P = I.length,
                    p = 0,
                    x += 2,
                    (h = i(f / (I[0] + 1))) > 1 &&
                      ((I = e(I, h, f)),
                      (N = e(N, h, f)),
                      (P = I.length),
                      (S = N.length)),
                    O = P,
                    w = (v = N.slice(0, P)).length;
                  w < P;
                  v[w++] = 0
                );
                (E = [0].concat((E = I.slice()))),
                  (j = I[0]),
                  I[1] >= f / 2 && j++;
                do {
                  if (((h = 0), (l = t(I, v, P, w)) < 0)) {
                    if (
                      ((A = v[0]),
                      P != w && (A = A * f + (v[1] || 0)),
                      (h = i(A / j)) > 1)
                    )
                      for (
                        h >= f && (h = f - 1),
                          d = (g = e(I, h, f)).length,
                          w = v.length;
                        1 == t(g, v, d, w);

                      )
                        h--, r(g, P < d ? E : I, d, f), (d = g.length), (l = 1);
                    else 0 == h && (l = h = 1), (d = (g = I.slice()).length);
                    if (
                      (d < w && (g = [0].concat(g)),
                      r(v, g, w, f),
                      (w = v.length),
                      -1 == l)
                    )
                      for (; 1 > t(I, v, P, w); )
                        h++, r(v, P < w ? E : I, w, f), (w = v.length);
                  } else 0 === l && (h++, (v = [0]));
                  (m[p++] = h),
                    v[0] ? (v[w++] = N[O] || 0) : ((v = [N[O]]), (w = 1));
                } while ((O++ < S || null != v[0]) && x--);
                (y = null != v[0]), m[0] || m.splice(0, 1);
              }
              if (1e14 == f) {
                for (p = 1, x = m[0]; x >= 10; x /= 10, p++);
                L(b, u + (b.e = p + 14 * s - 1) + 1, a, y);
              } else (b.e = s), (b.r = +y);
              return b;
            };
          })()),
          (d = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
          (b = /^([^.]+)\.$/),
          (m = /^\.([^.]+)$/),
          (v = /^-?(Infinity|NaN)$/),
          (w = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
          (S = function (e, t, r, n) {
            var o,
              i = r ? t : t.replace(w, "");
            if (v.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
            else {
              if (
                !r &&
                ((i = i.replace(d, function (e, t, r) {
                  return (
                    (o = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                    n && n != o ? e : t
                  );
                })),
                n && ((o = n), (i = i.replace(b, "$1").replace(m, "0.$1"))),
                t != i)
              )
                return new T(i, o);
              if (T.DEBUG)
                throw Error(
                  u + "Not a" + (n ? " base " + n : "") + " number: " + t
                );
              e.s = null;
            }
            e.c = e.e = null;
          }),
          (j.absoluteValue = j.abs =
            function () {
              var e = new T(this);
              return e.s < 0 && (e.s = 1), e;
            }),
          (j.comparedTo = function (e, t) {
            return s(this, new T(e, t));
          }),
          (j.decimalPlaces = j.dp =
            function (e, t) {
              var r, n, o;
              if (null != e)
                return (
                  p(e, 0, 1e9),
                  null == t ? (t = x) : p(t, 0, 8),
                  L(new T(this), e + this.e + 1, t)
                );
              if (!(r = this.c)) return null;
              if (
                ((n = ((o = r.length - 1) - c(this.e / 14)) * 14), (o = r[o]))
              )
                for (; o % 10 == 0; o /= 10, n--);
              return n < 0 && (n = 0), n;
            }),
          (j.dividedBy = j.div =
            function (e, t) {
              return A(this, new T(e, t), E, x);
            }),
          (j.dividedToIntegerBy = j.idiv =
            function (e, t) {
              return A(this, new T(e, t), 0, 1);
            }),
          (j.exponentiatedBy = j.pow =
            function (e, t) {
              var r,
                n,
                a,
                f,
                c,
                l,
                s,
                p,
                h,
                g = this;
              if ((e = new T(e)).c && !e.isInteger())
                throw Error(u + "Exponent not an integer: " + W(e));
              if (
                (null != t && (t = new T(t)),
                (l = e.e > 14),
                !g.c ||
                  !g.c[0] ||
                  (1 == g.c[0] && !g.e && 1 == g.c.length) ||
                  !e.c ||
                  !e.c[0])
              )
                return (
                  (h = new T(Math.pow(+W(g), l ? e.s * (2 - y(e)) : +W(e)))),
                  t ? h.mod(t) : h
                );
              if (((s = e.s < 0), t)) {
                if (t.c ? !t.c[0] : !t.s) return new T(NaN);
                (n = !s && g.isInteger() && t.isInteger()) && (g = g.mod(t));
              } else {
                if (
                  e.e > 9 &&
                  (g.e > 0 ||
                    g.e < -1 ||
                    (0 == g.e
                      ? g.c[0] > 1 || (l && g.c[1] >= 24e7)
                      : g.c[0] < 8e13 || (l && g.c[0] <= 9999975e7)))
                )
                  return (
                    (f = g.s < 0 && y(e) ? -0 : 0),
                    g.e > -1 && (f = 1 / f),
                    new T(s ? 1 / f : f)
                  );
                k && (f = o(k / 14 + 2));
              }
              for (
                l
                  ? ((r = new T(0.5)), s && (e.s = 1), (p = y(e)))
                  : (p = (a = Math.abs(+W(e))) % 2),
                  h = new T(P);
                ;

              ) {
                if (p) {
                  if (!(h = h.times(g)).c) break;
                  f ? h.c.length > f && (h.c.length = f) : n && (h = h.mod(t));
                }
                if (a) {
                  if (0 === (a = i(a / 2))) break;
                  p = a % 2;
                } else if ((L((e = e.times(r)), e.e + 1, 1), e.e > 14))
                  p = y(e);
                else {
                  if (0 == (a = +W(e))) break;
                  p = a % 2;
                }
                (g = g.times(g)),
                  f
                    ? g.c && g.c.length > f && (g.c.length = f)
                    : n && (g = g.mod(t));
              }
              return n
                ? h
                : (s && (h = P.div(h)), t ? h.mod(t) : f ? L(h, k, x, c) : h);
            }),
          (j.integerValue = function (e) {
            var t = new T(this);
            return null == e ? (e = x) : p(e, 0, 8), L(t, t.e + 1, e);
          }),
          (j.isEqualTo = j.eq =
            function (e, t) {
              return 0 === s(this, new T(e, t));
            }),
          (j.isFinite = function () {
            return !!this.c;
          }),
          (j.isGreaterThan = j.gt =
            function (e, t) {
              return s(this, new T(e, t)) > 0;
            }),
          (j.isGreaterThanOrEqualTo = j.gte =
            function (e, t) {
              return 1 === (t = s(this, new T(e, t))) || 0 === t;
            }),
          (j.isInteger = function () {
            return !!this.c && c(this.e / 14) > this.c.length - 2;
          }),
          (j.isLessThan = j.lt =
            function (e, t) {
              return 0 > s(this, new T(e, t));
            }),
          (j.isLessThanOrEqualTo = j.lte =
            function (e, t) {
              return -1 === (t = s(this, new T(e, t))) || 0 === t;
            }),
          (j.isNaN = function () {
            return !this.s;
          }),
          (j.isNegative = function () {
            return this.s < 0;
          }),
          (j.isPositive = function () {
            return this.s > 0;
          }),
          (j.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }),
          (j.minus = function (e, t) {
            var r,
              n,
              o,
              i,
              u = this.s;
            if (((t = (e = new T(e, t)).s), !u || !t)) return new T(NaN);
            if (u != t) return (e.s = -t), this.plus(e);
            var a = this.e / 14,
              f = e.e / 14,
              l = this.c,
              s = e.c;
            if (!a || !f) {
              if (!l || !s) return l ? ((e.s = -t), e) : new T(s ? this : NaN);
              if (!l[0] || !s[0])
                return s[0]
                  ? ((e.s = -t), e)
                  : new T(l[0] ? this : 3 == x ? -0 : 0);
            }
            if (((a = c(a)), (f = c(f)), (l = l.slice()), (u = a - f))) {
              for (
                (i = u < 0) ? ((u = -u), (o = l)) : ((f = a), (o = s)),
                  o.reverse(),
                  t = u;
                t--;
                o.push(0)
              );
              o.reverse();
            } else
              for (
                n = (i = (u = l.length) < (t = s.length)) ? u : t, u = t = 0;
                t < n;
                t++
              )
                if (l[t] != s[t]) {
                  i = l[t] < s[t];
                  break;
                }
            if (
              (i && ((o = l), (l = s), (s = o), (e.s = -e.s)),
              (t = (n = s.length) - (r = l.length)) > 0)
            )
              for (; t--; l[r++] = 0);
            for (t = 1e14 - 1; n > u; ) {
              if (l[--n] < s[n]) {
                for (r = n; r && !l[--r]; l[r] = t);
                --l[r], (l[n] += 1e14);
              }
              l[n] -= s[n];
            }
            for (; 0 == l[0]; l.splice(0, 1), --f);
            return l[0]
              ? z(e, l, f)
              : ((e.s = 3 == x ? -1 : 1), (e.c = [(e.e = 0)]), e);
          }),
          (j.modulo = j.mod =
            function (e, t) {
              var r, n;
              return ((e = new T(e, t)), this.c && e.s && (!e.c || e.c[0]))
                ? e.c && (!this.c || this.c[0])
                  ? (9 == R
                      ? ((n = e.s),
                        (e.s = 1),
                        (r = A(this, e, 0, 3)),
                        (e.s = n),
                        (r.s *= n))
                      : (r = A(this, e, 0, R)),
                    (e = this.minus(r.times(e))).c[0] ||
                      1 != R ||
                      (e.s = this.s),
                    e)
                  : new T(this)
                : new T(NaN);
            }),
          (j.multipliedBy = j.times =
            function (e, t) {
              var r,
                n,
                o,
                i,
                u,
                a,
                f,
                l,
                s,
                p,
                y,
                h,
                g,
                d = this.c,
                b = (e = new T(e, t)).c;
              if (!d || !b || !d[0] || !b[0])
                return (
                  this.s && e.s && (!d || d[0] || b) && (!b || b[0] || d)
                    ? ((e.s *= this.s),
                      d && b ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null))
                    : (e.c = e.e = e.s = null),
                  e
                );
              for (
                n = c(this.e / 14) + c(e.e / 14),
                  e.s *= this.s,
                  (f = d.length) < (p = b.length) &&
                    ((g = d), (d = b), (b = g), (o = f), (f = p), (p = o)),
                  o = f + p,
                  g = [];
                o--;
                g.push(0)
              );
              for (o = p; --o >= 0; ) {
                for (
                  r = 0, y = b[o] % 1e7, h = (b[o] / 1e7) | 0, i = o + (u = f);
                  i > o;

                )
                  (a = h * (l = d[--u] % 1e7) + (s = (d[u] / 1e7) | 0) * y),
                    (r =
                      (((l = y * l + (a % 1e7) * 1e7 + g[i] + r) / 1e14) | 0) +
                      ((a / 1e7) | 0) +
                      h * s),
                    (g[i--] = l % 1e14);
                g[i] = r;
              }
              return r ? ++n : g.splice(0, 1), z(e, g, n);
            }),
          (j.negated = function () {
            var e = new T(this);
            return (e.s = -e.s || null), e;
          }),
          (j.plus = function (e, t) {
            var r,
              n = this.s;
            if (((t = (e = new T(e, t)).s), !n || !t)) return new T(NaN);
            if (n != t) return (e.s = -t), this.minus(e);
            var o = this.e / 14,
              i = e.e / 14,
              u = this.c,
              a = e.c;
            if (!o || !i) {
              if (!u || !a) return new T(n / 0);
              if (!u[0] || !a[0]) return a[0] ? e : new T(u[0] ? this : 0 * n);
            }
            if (((o = c(o)), (i = c(i)), (u = u.slice()), (n = o - i))) {
              for (
                n > 0 ? ((i = o), (r = a)) : ((n = -n), (r = u)), r.reverse();
                n--;
                r.push(0)
              );
              r.reverse();
            }
            for (
              (n = u.length) - (t = a.length) < 0 &&
                ((r = a), (a = u), (u = r), (t = n)),
                n = 0;
              t;

            )
              (n = ((u[--t] = u[t] + a[t] + n) / 1e14) | 0),
                (u[t] = 1e14 === u[t] ? 0 : u[t] % 1e14);
            return n && ((u = [n].concat(u)), ++i), z(e, u, i);
          }),
          (j.precision = j.sd =
            function (e, t) {
              var r, n, o;
              if (null != e && !!e !== e)
                return (
                  p(e, 1, 1e9),
                  null == t ? (t = x) : p(t, 0, 8),
                  L(new T(this), e, t)
                );
              if (!(r = this.c)) return null;
              if (((n = 14 * (o = r.length - 1) + 1), (o = r[o]))) {
                for (; o % 10 == 0; o /= 10, n--);
                for (o = r[0]; o >= 10; o /= 10, n++);
              }
              return e && this.e + 1 > n && (n = this.e + 1), n;
            }),
          (j.shiftedBy = function (e) {
            return (
              p(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
            );
          }),
          (j.squareRoot = j.sqrt =
            function () {
              var e,
                t,
                r,
                n,
                o,
                i = this.c,
                u = this.s,
                a = this.e,
                f = E + 4,
                s = new T("0.5");
              if (1 !== u || !i || !i[0])
                return new T(
                  !u || (u < 0 && (!i || i[0])) ? NaN : i ? this : 1 / 0
                );
              if (
                (0 == (u = Math.sqrt(+W(this))) || u == 1 / 0
                  ? (((t = l(i)).length + a) % 2 == 0 && (t += "0"),
                    (u = Math.sqrt(+t)),
                    (a = c((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new T(
                      (t =
                        u == 1 / 0
                          ? "5e" + a
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1
                            ) + a)
                    )))
                  : (r = new T(u + "")),
                r.c[0])
              ) {
                for ((u = (a = r.e) + f) < 3 && (u = 0); ; )
                  if (
                    ((o = r),
                    (r = s.times(o.plus(A(this, o, f, 1)))),
                    l(o.c).slice(0, u) === (t = l(r.c)).slice(0, u))
                  ) {
                    if (
                      (r.e < a && --u,
                      "9999" != (t = t.slice(u - 3, u + 1)) &&
                        (n || "4999" != t))
                    ) {
                      (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                        (L(r, r.e + E + 2, 1), (e = !r.times(r).eq(this)));
                      break;
                    }
                    if (!n && (L(o, o.e + E + 2, 0), o.times(o).eq(this))) {
                      r = o;
                      break;
                    }
                    (f += 4), (u += 4), (n = 1);
                  }
              }
              return L(r, r.e + E + 1, x, e);
            }),
          (j.toExponential = function (e, t) {
            return null != e && (p(e, 0, 1e9), e++), C(this, e, t, 1);
          }),
          (j.toFixed = function (e, t) {
            return (
              null != e && (p(e, 0, 1e9), (e = e + this.e + 1)), C(this, e, t)
            );
          }),
          (j.toFormat = function (e, t, r) {
            var n;
            if (null == r)
              null != e && t && "object" == typeof t
                ? ((r = t), (t = null))
                : e && "object" == typeof e
                ? ((r = e), (e = t = null))
                : (r = _);
            else if ("object" != typeof r)
              throw Error(u + "Argument not an object: " + r);
            if (((n = this.toFixed(e, t)), this.c)) {
              var o,
                i = n.split("."),
                a = +r.groupSize,
                f = +r.secondaryGroupSize,
                c = r.groupSeparator || "",
                l = i[0],
                s = i[1],
                p = this.s < 0,
                y = p ? l.slice(1) : l,
                h = y.length;
              if (
                (f && ((o = a), (a = f), (f = o), (h -= o)), a > 0 && h > 0)
              ) {
                for (o = h % a || a, l = y.substr(0, o); o < h; o += a)
                  l += c + y.substr(o, a);
                f > 0 && (l += c + y.slice(o)), p && (l = "-" + l);
              }
              n = s
                ? l +
                  (r.decimalSeparator || "") +
                  ((f = +r.fractionGroupSize)
                    ? s.replace(
                        RegExp("\\d{" + f + "}\\B", "g"),
                        "$&" + (r.fractionGroupSeparator || "")
                      )
                    : s)
                : l;
            }
            return (r.prefix || "") + n + (r.suffix || "");
          }),
          (j.toFraction = function (e) {
            var t,
              r,
              n,
              o,
              i,
              a,
              c,
              s,
              p,
              y,
              h,
              g,
              d = this.c;
            if (
              null != e &&
              ((!(c = new T(e)).isInteger() && (c.c || 1 !== c.s)) || c.lt(P))
            )
              throw Error(
                u +
                  "Argument " +
                  (c.isInteger() ? "out of range: " : "not an integer: ") +
                  W(c)
              );
            if (!d) return new T(this);
            for (
              t = new T(P),
                p = r = new T(P),
                n = s = new T(P),
                g = l(d),
                i = t.e = g.length - this.e - 1,
                t.c[0] = f[(a = i % 14) < 0 ? 14 + a : a],
                e = !e || c.comparedTo(t) > 0 ? (i > 0 ? t : p) : c,
                a = U,
                U = 1 / 0,
                c = new T(g),
                s.c[0] = 0;
              (y = A(c, t, 0, 1)), 1 != (o = r.plus(y.times(n))).comparedTo(e);

            )
              (r = n),
                (n = o),
                (p = s.plus(y.times((o = p)))),
                (s = o),
                (t = c.minus(y.times((o = t)))),
                (c = o);
            return (
              (o = A(e.minus(r), n, 0, 1)),
              (s = s.plus(o.times(p))),
              (r = r.plus(o.times(n))),
              (s.s = p.s = this.s),
              (i *= 2),
              (h =
                1 >
                A(p, n, i, x)
                  .minus(this)
                  .abs()
                  .comparedTo(A(s, r, i, x).minus(this).abs())
                  ? [p, n]
                  : [s, r]),
              (U = a),
              h
            );
          }),
          (j.toNumber = function () {
            return +W(this);
          }),
          (j.toPrecision = function (e, t) {
            return null != e && p(e, 1, 1e9), C(this, e, t, 2);
          }),
          (j.toString = function (e) {
            var t,
              r = this,
              n = r.s,
              o = r.e;
            return (
              null === o
                ? n
                  ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                  : (t = "NaN")
                : (null == e
                    ? (t = o <= N || o >= I ? h(l(r.c), o) : g(l(r.c), o, "0"))
                    : 10 === e && M
                    ? (t = g(l((r = L(new T(r), E + o + 1, x)).c), r.e, "0"))
                    : (p(e, 2, D.length, "Base"),
                      (t = O(g(l(r.c), o, "0"), 10, e, n, !0))),
                  n < 0 && r.c[0] && (t = "-" + t)),
              t
            );
          }),
          (j.valueOf = j.toJSON =
            function () {
              return W(this);
            }),
          (j._isBigNumber = !0),
          (j[Symbol.toStringTag] = "BigNumber"),
          (j[Symbol.for("nodejs.util.inspect.custom")] = j.valueOf),
          null != t && T.set(t),
          T
        );
      })();
      t.Z = d;
    },
  },
]);
