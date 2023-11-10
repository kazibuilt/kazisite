!(function (n) {
  var i = {};
  function o(t) {
    var e;
    return (
      i[t] ||
      ((e = i[t] = { i: t, l: !1, exports: {} }),
      n[t].call(e.exports, e, e.exports, o),
      (e.l = !0),
      e)
    ).exports;
  }
  (o.m = n),
    (o.c = i),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          o.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/"),
    o((o.s = 4));
})([
  function (t, g, m) {
    "use strict";
    m.r(g),
      function (t, e) {
        m.d(g, "_gsScope", function () {
          return n;
        }),
          m.d(g, "TweenLite", function () {
            return i;
          }),
          m.d(g, "globals", function () {
            return o;
          }),
          m.d(g, "default", function () {
            return i;
          }),
          m.d(g, "SimpleTimeline", function () {
            return r;
          }),
          m.d(g, "Animation", function () {
            return s;
          }),
          m.d(g, "Ease", function () {
            return a;
          }),
          m.d(g, "Linear", function () {
            return l;
          }),
          m.d(g, "Power0", function () {
            return u;
          }),
          m.d(g, "Power1", function () {
            return c;
          }),
          m.d(g, "Power2", function () {
            return f;
          }),
          m.d(g, "Power3", function () {
            return h;
          }),
          m.d(g, "Power4", function () {
            return p;
          }),
          m.d(g, "TweenPlugin", function () {
            return d;
          }),
          m.d(g, "EventDispatcher", function () {
            return _;
          });
        var n =
            "undefined" != typeof window
              ? window
              : t.exports && void 0 !== e
              ? e
              : {},
          i = (function (_) {
            var j = {},
              d = _.document,
              f = (_.GreenSockGlobals = _.GreenSockGlobals || _);
            if (f.TweenLite) return f.TweenLite;
            function N(t) {
              for (var e = t.split("."), n = f, i = 0; i < e.length; i++)
                n[e[i]] = n = n[e[i]] || {};
              return n;
            }
            function B(t) {
              for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]));
              return e;
            }
            function F() {}
            function z(s, a, l, u) {
              (this.sc = p[s] ? p[s].sc : []),
                ((p[s] = this).gsClass = null),
                (this.func = l);
              var c = [];
              (this.check = function (t) {
                for (var e, n, i, o = a.length, r = o; -1 < --o; )
                  (e = p[a[o]] || new z(a[o], [])).gsClass
                    ? ((c[o] = e.gsClass), r--)
                    : t && e.sc.push(this);
                if (0 === r && l)
                  for (
                    n = (i = ("com.greensock." + s).split(".")).pop(),
                      i = N(i.join("."))[n] = this.gsClass = l.apply(l, c),
                      u && (f[n] = j[n] = i),
                      o = 0;
                    o < this.sc.length;
                    o++
                  )
                    this.sc[o].check();
              }),
                this.check(!0);
            }
            var g,
              e,
              H,
              h = N("com.greensock"),
              m = 1e-8,
              y =
                ((e = Object.prototype.toString),
                (H = e.call([])),
                function (t) {
                  return (
                    null != t &&
                    (t instanceof Array ||
                      ("object" == typeof t && !!t.push && e.call(t) === H))
                  );
                }),
              p = {},
              i = (_._gsDefine = function (t, e, n, i) {
                return new z(t, e, n, i);
              }),
              v = (h._class = function (t, e, n) {
                return (
                  (e = e || function () {}),
                  i(
                    t,
                    [],
                    function () {
                      return e;
                    },
                    n
                  ),
                  e
                );
              }),
              X = ((i.globals = f), [0, 0, 1, 1]),
              b = v(
                "easing.Ease",
                function (t, e, n, i) {
                  (this._func = t),
                    (this._type = n || 0),
                    (this._power = i || 0),
                    (this._params = e ? X.concat(e) : X);
                },
                !0
              ),
              w = (b.map = {}),
              t = (b.register = function (t, e, n, i) {
                for (
                  var o,
                    r,
                    s,
                    a,
                    l = e.split(","),
                    u = l.length,
                    c = (n || "easeIn,easeOut,easeInOut").split(",");
                  -1 < --u;

                )
                  for (
                    r = l[u],
                      o = i ? v("easing." + r, null, !0) : h.easing[r] || {},
                      s = c.length;
                    -1 < --s;

                  )
                    (a = c[s]),
                      (w[r + "." + a] =
                        w[a + r] =
                        o[a] =
                          t.getRatio ? t : t[a] || new t());
              }),
              n = b.prototype;
            for (
              n._calcEnd = !1,
                n.getRatio = function (t) {
                  var e, n, i;
                  return this._func
                    ? ((this._params[0] = t),
                      this._func.apply(null, this._params))
                    : ((i =
                        1 === (e = this._type)
                          ? 1 - t
                          : 2 === e
                          ? t
                          : t < 0.5
                          ? 2 * t
                          : 2 * (1 - t)),
                      1 === (n = this._power)
                        ? (i *= i)
                        : 2 === n
                        ? (i *= i * i)
                        : 3 === n
                        ? (i *= i * i * i)
                        : 4 === n && (i *= i * i * i * i),
                      1 === e
                        ? 1 - i
                        : 2 === e
                        ? i
                        : t < 0.5
                        ? i / 2
                        : 1 - i / 2);
                },
                r = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                  .length;
              -1 < --r;

            )
              (n = o[r] + ",Power" + r),
                t(new b(null, null, 1, r), n, "easeOut", !0),
                t(
                  new b(null, null, 2, r),
                  n,
                  "easeIn" + (0 === r ? ",easeNone" : "")
                ),
                t(new b(null, null, 3, r), n, "easeInOut");
            (w.linear = h.easing.Linear.easeIn),
              (w.swing = h.easing.Quad.easeInOut);
            for (
              var o,
                q = v("events.EventDispatcher", function (t) {
                  (this._listeners = {}), (this._eventTarget = t || this);
                }),
                x =
                  (((n = q.prototype).addEventListener = function (
                    t,
                    e,
                    n,
                    i,
                    o
                  ) {
                    o = o || 0;
                    var r,
                      s,
                      a = this._listeners[t],
                      l = 0;
                    for (
                      this !== S || g || S.wake(),
                        null == a && (this._listeners[t] = a = []),
                        s = a.length;
                      -1 < --s;

                    )
                      (r = a[s]).c === e && r.s === n
                        ? a.splice(s, 1)
                        : 0 === l && r.pr < o && (l = s + 1);
                    a.splice(l, 0, { c: e, s: n, up: i, pr: o });
                  }),
                  (n.removeEventListener = function (t, e) {
                    var n,
                      i = this._listeners[t];
                    if (i)
                      for (n = i.length; -1 < --n; )
                        if (i[n].c === e) return void i.splice(n, 1);
                  }),
                  (n.dispatchEvent = function (t) {
                    var e,
                      n,
                      i,
                      o = this._listeners[t];
                    if (o)
                      for (
                        1 < (e = o.length) && (o = o.slice(0)),
                          n = this._eventTarget;
                        -1 < --e;

                      )
                        (i = o[e]) &&
                          (i.up
                            ? i.c.call(i.s || n, { type: t, target: n })
                            : i.c.call(i.s || n));
                  }),
                  _.requestAnimationFrame),
                T = _.cancelAnimationFrame,
                O =
                  Date.now ||
                  function () {
                    return new Date().getTime();
                  },
                P = O(),
                r = (o = ["ms", "moz", "webkit", "o"]).length;
              -1 < --r && !x;

            )
              (x = _[o[r] + "RequestAnimationFrame"]),
                (T =
                  _[o[r] + "CancelAnimationFrame"] ||
                  _[o[r] + "CancelRequestAnimationFrame"]);
            v("Ticker", function (t, e) {
              var i,
                o,
                r,
                s,
                a,
                l = this,
                u = O(),
                n = !(!1 === e || !x) && "auto",
                c = 500,
                f = 33,
                h = "tick",
                p = function (t) {
                  var e,
                    n = O() - P;
                  c < n && (u += n - f),
                    (P += n),
                    (l.time = (P - u) / 1e3),
                    (n = l.time - a),
                    (!i || 0 < n || !0 === t) &&
                      (l.frame++,
                      (a += n + (s <= n ? 0.004 : s - n)),
                      (e = !0)),
                    !0 !== t && (r = o(p)),
                    e && l.dispatchEvent(h);
                };
              q.call(l),
                (l.time = l.frame = 0),
                (l.tick = function () {
                  p(!0);
                }),
                (l.lagSmoothing = function (t, e) {
                  if (!arguments.length) return c < 1e8;
                  (c = t || 1e8), (f = Math.min(e, c, 0));
                }),
                (l.sleep = function () {
                  null != r &&
                    ((n && T ? T : clearTimeout)(r),
                    (o = F),
                    (r = null),
                    l === S && (g = !1));
                }),
                (l.wake = function (t) {
                  null !== r
                    ? l.sleep()
                    : t
                    ? (u += -P + (P = O()))
                    : 10 < l.frame && (P = O() - c + 5),
                    (o =
                      0 === i
                        ? F
                        : n && x
                        ? x
                        : function (t) {
                            return setTimeout(t, (1e3 * (a - l.time) + 1) | 0);
                          }),
                    l === S && (g = !0),
                    p(2);
                }),
                (l.fps = function (t) {
                  if (!arguments.length) return i;
                  (s = 1 / ((i = t) || 60)), (a = this.time + s), l.wake();
                }),
                (l.useRAF = function (t) {
                  if (!arguments.length) return n;
                  l.sleep(), (n = t), l.fps(i);
                }),
                l.fps(t),
                setTimeout(function () {
                  "auto" === n &&
                    l.frame < 5 &&
                    "hidden" !== (d || {}).visibilityState &&
                    l.useRAF(!1);
                }, 1500);
            }),
              ((n = h.Ticker.prototype =
                new h.events.EventDispatcher()).constructor = h.Ticker);
            function V() {
              g &&
                2e3 < O() - P &&
                ("hidden" !== (d || {}).visibilityState || !S.lagSmoothing()) &&
                S.wake();
              var t = setTimeout(V, 2e3);
              t.unref && t.unref();
            }
            function C(t) {
              return (
                t &&
                t.length &&
                t !== _ &&
                t[0] &&
                (t[0] === _ || (t[0].nodeType && t[0].style && !t.nodeType))
              );
            }
            function U(t) {
              for (var e, n = this._firstPT; n; )
                (e = n.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join("")
                    : this.start
                  : n.c * t + n.s),
                  n.m
                    ? (e = n.m.call(
                        this._tween,
                        e,
                        this._target || n.t,
                        this._tween
                      ))
                    : e < 1e-6 && -1e-6 < e && !n.blob && (e = 0),
                  n.f
                    ? n.fp
                      ? n.t[n.p](n.fp, e)
                      : n.t[n.p](e)
                    : (n.t[n.p] = e),
                  (n = n._next);
            }
            function W(t) {
              return ((1e3 * t) | 0) / 1e3 + "";
            }
            function Y(t, e, n, i) {
              var o,
                r,
                s,
                a,
                l,
                u,
                c = [],
                f = 0,
                h = "",
                p = 0;
              for (
                c.start = t,
                  c.end = e,
                  t = c[0] = t + "",
                  e = c[1] = e + "",
                  n && (n(c), (t = c[0]), (e = c[1])),
                  c.length = 0,
                  o = t.match(K) || [],
                  r = e.match(K) || [],
                  i &&
                    ((i._next = null),
                    (i.blob = 1),
                    (c._firstPT = c._applyPT = i)),
                  a = r.length,
                  s = 0;
                s < a;
                s++
              )
                (u = r[s]),
                  (h += (l = e.substr(f, e.indexOf(u, f) - f)) || !s ? l : ","),
                  (f += l.length),
                  p ? (p = (p + 1) % 5) : "rgba(" === l.substr(-5) && (p = 1),
                  u === o[s] || o.length <= s
                    ? (h += u)
                    : (h && (c.push(h), (h = "")),
                      (l = parseFloat(o[s])),
                      c.push(l),
                      (c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: l,
                        c:
                          ("=" === u.charAt(1)
                            ? parseInt(u.charAt(0) + "1", 10) *
                              parseFloat(u.substr(2))
                            : parseFloat(u) - l) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : W,
                      })),
                  (f += u.length);
              return (
                (h += e.substr(f)) && c.push(h),
                (c.setRatio = U),
                $.test(e) && (c.end = null),
                c
              );
            }
            function G(t, e, n, i, o, r, s, a, l) {
              "function" == typeof i && (i = i(l || 0, t));
              var u =
                  "function" != (l = typeof t[e])
                    ? ""
                    : e.indexOf("set") ||
                      "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3),
                n = "get" !== n ? n : u ? (s ? t[u](s) : t[u]()) : t[e],
                u = "string" == typeof i && "=" === i.charAt(1),
                t = {
                  t: t,
                  p: e,
                  s: n,
                  f: "function" == l,
                  pg: 0,
                  n: o || e,
                  m: r ? ("function" == typeof r ? r : Math.round) : 0,
                  pr: 0,
                  c: u
                    ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2))
                    : parseFloat(i) - n || 0,
                };
              if (
                (("number" == typeof n && ("number" == typeof i || u)) ||
                  (s ||
                  isNaN(n) ||
                  (!u && isNaN(i)) ||
                  "boolean" == typeof n ||
                  "boolean" == typeof i
                    ? ((t.fp = s),
                      (t = {
                        t: Y(
                          n,
                          u
                            ? parseFloat(t.s) +
                                t.c +
                                (t.s + "").replace(/[0-9\-\.]/g, "")
                            : i,
                          a || E.defaultStringFilter,
                          t
                        ),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: o || e,
                        pr: 0,
                        m: 0,
                      }))
                    : ((t.s = parseFloat(n)),
                      u || (t.c = parseFloat(i) - t.s || 0))),
                t.c)
              )
                return (
                  (t._next = this._firstPT) && (t._next._prev = t),
                  (this._firstPT = t)
                );
            }
            function Z(t, e, n, i) {
              var o,
                r,
                s = t.vars.onOverwrite;
              return (
                s && (o = s(t, e, n, i)),
                (s = E.onOverwrite) && (r = s(t, e, n, i)),
                !1 !== o && !1 !== r
              );
            }
            var a = v("core.Animation", function (t, e) {
                (this.vars = e = e || {}),
                  (this._duration = this._totalDuration = t || 0),
                  (this._delay = Number(e.delay) || 0),
                  (this._timeScale = 1),
                  (this._active = !!e.immediateRender),
                  (this.data = e.data),
                  (this._reversed = !!e.reversed),
                  M &&
                    (g || S.wake(),
                    (t = this.vars.useFrames ? c : M).add(this, t._time),
                    this.vars.paused && this.paused(!0));
              }),
              S = (a.ticker = new h.Ticker()),
              s =
                (((n = a.prototype)._dirty =
                  n._gc =
                  n._initted =
                  n._paused =
                    !1),
                (n._totalTime = n._time = 0),
                (n._rawPrevTime = -1),
                (n._next =
                  n._last =
                  n._onUpdate =
                  n._timeline =
                  n.timeline =
                    null),
                (n._paused = !1),
                V(),
                (n.play = function (t, e) {
                  return (
                    null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                  );
                }),
                (n.pause = function (t, e) {
                  return null != t && this.seek(t, e), this.paused(!0);
                }),
                (n.resume = function (t, e) {
                  return null != t && this.seek(t, e), this.paused(!1);
                }),
                (n.seek = function (t, e) {
                  return this.totalTime(Number(t), !1 !== e);
                }),
                (n.restart = function (t, e) {
                  return this.reversed(!1)
                    .paused(!1)
                    .totalTime(t ? -this._delay : 0, !1 !== e, !0);
                }),
                (n.reverse = function (t, e) {
                  return (
                    null != t && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
                  );
                }),
                (n.render = function (t, e, n) {}),
                (n.invalidate = function () {
                  return (
                    (this._time = this._totalTime = 0),
                    (this._initted = this._gc = !1),
                    (this._rawPrevTime = -1),
                    (!this._gc && this.timeline) || this._enabled(!0),
                    this
                  );
                }),
                (n.isActive = function () {
                  var t = this._timeline,
                    e = this._startTime;
                  return (
                    !t ||
                    (!this._gc &&
                      !this._paused &&
                      t.isActive() &&
                      (t = t.rawTime(!0)) >= e &&
                      t < e + this.totalDuration() / this._timeScale - m)
                  );
                }),
                (n._enabled = function (t, e) {
                  return (
                    g || S.wake(),
                    (this._gc = !t),
                    (this._active = this.isActive()),
                    !0 !== e &&
                      (t && !this.timeline
                        ? this._timeline.add(
                            this,
                            this._startTime - this._delay
                          )
                        : !t &&
                          this.timeline &&
                          this._timeline._remove(this, !0)),
                    !1
                  );
                }),
                (n._kill = function (t, e) {
                  return this._enabled(!1, !1);
                }),
                (n.kill = function (t, e) {
                  return this._kill(t, e), this;
                }),
                (n._uncache = function (t) {
                  for (var e = t ? this : this.timeline; e; )
                    (e._dirty = !0), (e = e.timeline);
                  return this;
                }),
                (n._swapSelfInParams = function (t) {
                  for (var e = t.length, n = t.concat(); -1 < --e; )
                    "{self}" === t[e] && (n[e] = this);
                  return n;
                }),
                (n._callback = function (t) {
                  var e = this.vars,
                    n = e[t],
                    i = e[t + "Params"],
                    o = e[t + "Scope"] || e.callbackScope || this;
                  switch (i ? i.length : 0) {
                    case 0:
                      n.call(o);
                      break;
                    case 1:
                      n.call(o, i[0]);
                      break;
                    case 2:
                      n.call(o, i[0], i[1]);
                      break;
                    default:
                      n.apply(o, i);
                  }
                }),
                (n.eventCallback = function (t, e, n, i) {
                  if ("on" === (t || "").substr(0, 2)) {
                    var o = this.vars;
                    if (1 === arguments.length) return o[t];
                    null == e
                      ? delete o[t]
                      : ((o[t] = e),
                        (o[t + "Params"] =
                          y(n) && -1 !== n.join("").indexOf("{self}")
                            ? this._swapSelfInParams(n)
                            : n),
                        (o[t + "Scope"] = i)),
                      "onUpdate" === t && (this._onUpdate = e);
                  }
                  return this;
                }),
                (n.delay = function (t) {
                  return arguments.length
                    ? (this._timeline.smoothChildTiming &&
                        this.startTime(this._startTime + t - this._delay),
                      (this._delay = t),
                      this)
                    : this._delay;
                }),
                (n.duration = function (t) {
                  return arguments.length
                    ? ((this._duration = this._totalDuration = t),
                      this._uncache(!0),
                      this._timeline.smoothChildTiming &&
                        0 < this._time &&
                        this._time < this._duration &&
                        0 !== t &&
                        this.totalTime(
                          this._totalTime * (t / this._duration),
                          !0
                        ),
                      this)
                    : ((this._dirty = !1), this._duration);
                }),
                (n.totalDuration = function (t) {
                  return (
                    (this._dirty = !1),
                    arguments.length ? this.duration(t) : this._totalDuration
                  );
                }),
                (n.time = function (t, e) {
                  return arguments.length
                    ? (this._dirty && this.totalDuration(),
                      this.totalTime(
                        t > this._duration ? this._duration : t,
                        e
                      ))
                    : this._time;
                }),
                (n.totalTime = function (t, e, n) {
                  if ((g || S.wake(), !arguments.length))
                    return this._totalTime;
                  if (this._timeline) {
                    if (
                      (t < 0 && !n && (t += this.totalDuration()),
                      this._timeline.smoothChildTiming)
                    ) {
                      this._dirty && this.totalDuration();
                      var i = this._totalDuration,
                        o = this._timeline;
                      if (
                        (i < t && !n && (t = i),
                        (this._startTime =
                          (this._paused ? this._pauseTime : o._time) -
                          (this._reversed ? i - t : t) / this._timeScale),
                        o._dirty || this._uncache(!1),
                        o._timeline)
                      )
                        for (; o._timeline; )
                          o._timeline._time !==
                            (o._startTime + o._totalTime) / o._timeScale &&
                            o.totalTime(o._totalTime, !0),
                            (o = o._timeline);
                    }
                    this._gc && this._enabled(!0, !1),
                      (this._totalTime === t && 0 !== this._duration) ||
                        (k.length && L(),
                        this.render(t, e, !1),
                        k.length && L());
                  }
                  return this;
                }),
                (n.progress = n.totalProgress =
                  function (t, e) {
                    var n = this.duration();
                    return arguments.length
                      ? this.totalTime(n * t, e)
                      : n
                      ? this._time / n
                      : this.ratio;
                  }),
                (n.startTime = function (t) {
                  return arguments.length
                    ? (t !== this._startTime &&
                        ((this._startTime = t),
                        this.timeline &&
                          this.timeline._sortChildren &&
                          this.timeline.add(this, t - this._delay)),
                      this)
                    : this._startTime;
                }),
                (n.endTime = function (t) {
                  return (
                    this._startTime +
                    (0 != t ? this.totalDuration() : this.duration()) /
                      this._timeScale
                  );
                }),
                (n.timeScale = function (t) {
                  if (!arguments.length) return this._timeScale;
                  var e, n;
                  for (
                    t = t || m,
                      this._timeline &&
                        this._timeline.smoothChildTiming &&
                        ((n =
                          (e = this._pauseTime) || 0 === e
                            ? e
                            : this._timeline.totalTime()),
                        (this._startTime =
                          n - ((n - this._startTime) * this._timeScale) / t)),
                      this._timeScale = t,
                      n = this.timeline;
                    n && n.timeline;

                  )
                    (n._dirty = !0), n.totalDuration(), (n = n.timeline);
                  return this;
                }),
                (n.reversed = function (t) {
                  return arguments.length
                    ? (t != this._reversed &&
                        ((this._reversed = t),
                        this.totalTime(
                          this._timeline && !this._timeline.smoothChildTiming
                            ? this.totalDuration() - this._totalTime
                            : this._totalTime,
                          !0
                        )),
                      this)
                    : this._reversed;
                }),
                (n.paused = function (t) {
                  var e, n, i;
                  return arguments.length
                    ? ((e = this._timeline),
                      t != this._paused &&
                        e &&
                        (g || t || S.wake(),
                        (i = (n = e.rawTime()) - this._pauseTime),
                        !t &&
                          e.smoothChildTiming &&
                          ((this._startTime += i), this._uncache(!1)),
                        (this._pauseTime = t ? n : null),
                        (this._paused = t),
                        (this._active = this.isActive()),
                        !t &&
                          0 != i &&
                          this._initted &&
                          this.duration() &&
                          ((n = e.smoothChildTiming
                            ? this._totalTime
                            : (n - this._startTime) / this._timeScale),
                          this.render(n, n === this._totalTime, !0))),
                      this._gc && !t && this._enabled(!0, !1),
                      this)
                    : this._paused;
                }),
                v("core.SimpleTimeline", function (t) {
                  a.call(this, 0, t),
                    (this.autoRemoveChildren = this.smoothChildTiming = !0);
                })),
              E =
                (((n = s.prototype = new a()).constructor = s),
                (n.kill()._gc = !1),
                (n._first = n._last = n._recent = null),
                (n._sortChildren = !1),
                (n.add = n.insert =
                  function (t, e, n, i) {
                    var o, r;
                    if (
                      ((t._startTime = Number(e || 0) + t._delay),
                      t._paused &&
                        this !== t._timeline &&
                        (t._pauseTime =
                          this.rawTime() -
                          (t._timeline.rawTime() - t._pauseTime)),
                      t.timeline && t.timeline._remove(t, !0),
                      (t.timeline = t._timeline = this),
                      t._gc && t._enabled(!0, !0),
                      (o = this._last),
                      this._sortChildren)
                    )
                      for (r = t._startTime; o && o._startTime > r; )
                        o = o._prev;
                    return (
                      o
                        ? ((t._next = o._next), (o._next = t))
                        : ((t._next = this._first), (this._first = t)),
                      t._next ? (t._next._prev = t) : (this._last = t),
                      (t._prev = o),
                      (this._recent = t),
                      this._timeline && this._uncache(!0),
                      this
                    );
                  }),
                (n._remove = function (t, e) {
                  return (
                    t.timeline === this &&
                      (e || t._enabled(!1, !0),
                      t._prev
                        ? (t._prev._next = t._next)
                        : this._first === t && (this._first = t._next),
                      t._next
                        ? (t._next._prev = t._prev)
                        : this._last === t && (this._last = t._prev),
                      (t._next = t._prev = t.timeline = null),
                      t === this._recent && (this._recent = this._last),
                      this._timeline && this._uncache(!0)),
                    this
                  );
                }),
                (n.render = function (t, e, n) {
                  var i,
                    o = this._first;
                  for (
                    this._totalTime = this._time = this._rawPrevTime = t;
                    o;

                  )
                    (i = o._next),
                      (o._active ||
                        (t >= o._startTime && !o._paused && !o._gc)) &&
                        (o._reversed
                          ? o.render(
                              (o._dirty
                                ? o.totalDuration()
                                : o._totalDuration) -
                                (t - o._startTime) * o._timeScale,
                              e,
                              n
                            )
                          : o.render((t - o._startTime) * o._timeScale, e, n)),
                      (o = i);
                }),
                (n.rawTime = function () {
                  return g || S.wake(), this._totalTime;
                }),
                v(
                  "TweenLite",
                  function (t, e, n) {
                    if (
                      (a.call(this, e, n),
                      (this.render = E.prototype.render),
                      null == t)
                    )
                      throw "Cannot tween a null target.";
                    this.target = t =
                      ("string" == typeof t && E.selector(t)) || t;
                    var i,
                      o,
                      r,
                      n =
                        t.jquery ||
                        (t.length &&
                          t !== _ &&
                          t[0] &&
                          (t[0] === _ ||
                            (t[0].nodeType && t[0].style && !t.nodeType))),
                      s = this.vars.overwrite;
                    if (
                      ((this._overwrite = s =
                        null == s
                          ? tt[E.defaultOverwrite]
                          : "number" == typeof s
                          ? s >> 0
                          : tt[s]),
                      (n || t instanceof Array || (t.push && y(t))) &&
                        "number" != typeof t[0])
                    )
                      for (
                        this._targets = r = B(t),
                          this._propLookup = [],
                          this._siblings = [],
                          i = 0;
                        i < r.length;
                        i++
                      )
                        (o = r[i])
                          ? "string" == typeof o
                            ? "string" == typeof (o = r[i--] = E.selector(o)) &&
                              r.splice(i + 1, 1)
                            : o.length &&
                              o !== _ &&
                              o[0] &&
                              (o[0] === _ ||
                                (o[0].nodeType && o[0].style && !o.nodeType))
                            ? (r.splice(i--, 1),
                              (this._targets = r = r.concat(B(o))))
                            : ((this._siblings[i] = R(o, this, !1)),
                              1 === s &&
                                1 < this._siblings[i].length &&
                                nt(o, this, null, 1, this._siblings[i]))
                          : r.splice(i--, 1);
                    else
                      (this._propLookup = {}),
                        (this._siblings = R(t, this, !1)),
                        1 === s &&
                          1 < this._siblings.length &&
                          nt(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender ||
                      (0 === e &&
                        0 === this._delay &&
                        !1 !== this.vars.immediateRender)) &&
                      ((this._time = -m),
                      this.render(Math.min(0, -this._delay)));
                  },
                  !0
                )),
              k =
                (((n = E.prototype = new a()).constructor = E),
                (n.kill()._gc = !1),
                (n.ratio = 0),
                (n._firstPT =
                  n._targets =
                  n._overwrittenProps =
                  n._startAt =
                    null),
                (n._notifyPluginsOfEnabled = n._lazy = !1),
                (E.version = "2.1.3"),
                (E.defaultEase = n._ease = new b(null, null, 1, 1)),
                (E.defaultOverwrite = "auto"),
                (E.ticker = S),
                (E.autoSleep = 120),
                (E.lagSmoothing = function (t, e) {
                  S.lagSmoothing(t, e);
                }),
                (E.selector =
                  _.$ ||
                  _.jQuery ||
                  function (t) {
                    var e = _.$ || _.jQuery;
                    return e
                      ? (E.selector = e)(t)
                      : (d = d || _.document)
                      ? d.querySelectorAll
                        ? d.querySelectorAll(t)
                        : d.getElementById(
                            "#" === t.charAt(0) ? t.substr(1) : t
                          )
                      : t;
                  }),
                []),
              A = {},
              K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
              $ = /[\+-]=-?[\.\d]/,
              l = (E._internals = {
                isArray: y,
                isSelector: C,
                lazyTweens: k,
                blobDif: Y,
              }),
              I = (E._plugins = {}),
              u = (l.tweenLookup = {}),
              J = 0,
              Q = (l.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1,
              }),
              tt = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0,
              },
              c = (a._rootFramesTimeline = new s()),
              M = (a._rootTimeline = new s()),
              et = 30,
              L = (l.lazyRender = function () {
                var t,
                  e,
                  n = k.length;
                for (A = {}, t = 0; t < n; t++)
                  (e = k[t]) &&
                    !1 !== e._lazy &&
                    (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
                k.length = 0;
              }),
              R =
                ((M._startTime = S.time),
                (c._startTime = S.frame),
                (M._active = c._active = !0),
                setTimeout(L, 1),
                (a._updateRoot = E.render =
                  function () {
                    var t, e, n;
                    if (
                      (k.length && L(),
                      M.render((S.time - M._startTime) * M._timeScale, !1, !1),
                      c.render((S.frame - c._startTime) * c._timeScale, !1, !1),
                      k.length && L(),
                      S.frame >= et)
                    ) {
                      for (n in ((et =
                        S.frame + (parseInt(E.autoSleep, 10) || 120)),
                      u)) {
                        for (t = (e = u[n].tweens).length; -1 < --t; )
                          e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete u[n];
                      }
                      if (
                        (!(n = M._first) || n._paused) &&
                        E.autoSleep &&
                        !c._first &&
                        1 === S._listeners.tick.length
                      ) {
                        for (; n && n._paused; ) n = n._next;
                        n || S.sleep();
                      }
                    }
                  }),
                S.addEventListener("tick", a._updateRoot),
                function (t, e, n) {
                  var i,
                    o,
                    r = t._gsTweenID;
                  if (
                    (u[r || (t._gsTweenID = r = "t" + J++)] ||
                      (u[r] = { target: t, tweens: [] }),
                    e && (((i = u[r].tweens)[(o = i.length)] = e), n))
                  )
                    for (; -1 < --o; ) i[o] === e && i.splice(o, 1);
                  return u[r].tweens;
                }),
              nt = function (t, e, n, i, o) {
                var r, s, a;
                if (1 === i || 4 <= i) {
                  for (a = o.length, p = 0; p < a; p++)
                    if ((s = o[p]) !== e)
                      s._gc || (s._kill(null, t, e) && (r = !0));
                    else if (5 === i) break;
                } else {
                  for (
                    var l,
                      u = e._startTime + m,
                      c = [],
                      f = 0,
                      h = 0 === e._duration,
                      p = o.length;
                    -1 < --p;

                  )
                    (s = o[p]) === e ||
                      s._gc ||
                      s._paused ||
                      (s._timeline !== e._timeline
                        ? ((l = l || it(e, 0, h)),
                          0 === it(s, l, h) && (c[f++] = s))
                        : s._startTime <= u &&
                          s._startTime + s.totalDuration() / s._timeScale > u &&
                          (((h || !s._initted) && u - s._startTime <= 2 * m) ||
                            (c[f++] = s)));
                  for (p = f; -1 < --p; )
                    (a = (s = c[p])._firstPT),
                      2 === i && s._kill(n, t, e) && (r = !0),
                      (2 !== i || (!s._firstPT && s._initted && a)) &&
                        (2 === i || Z(s, e)) &&
                        s._enabled(!1, !1) &&
                        (r = !0);
                }
                return r;
              },
              it = function (t, e, n) {
                for (
                  var i = t._timeline, o = i._timeScale, r = t._startTime;
                  i._timeline;

                ) {
                  if (((r += i._startTime), (o *= i._timeScale), i._paused))
                    return -100;
                  i = i._timeline;
                }
                return e < (r /= o)
                  ? r - e
                  : (n && r === e) || (!t._initted && r - e < 2 * m)
                  ? m
                  : (r += t.totalDuration() / t._timeScale / o) > e + m
                  ? 0
                  : r - e - m;
              },
              D =
                ((n._init = function () {
                  var t,
                    e,
                    n,
                    i,
                    o,
                    r,
                    s = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    u = !!s.immediateRender,
                    c = s.ease,
                    f = this._startAt;
                  if (s.startAt) {
                    for (i in (f && (f.render(-1, !0), f.kill()),
                    (o = {}),
                    s.startAt))
                      o[i] = s.startAt[i];
                    if (
                      ((o.data = "isStart"),
                      (o.overwrite = !1),
                      (o.immediateRender = !0),
                      (o.lazy = u && !1 !== s.lazy),
                      (o.startAt = o.delay = null),
                      (o.onUpdate = s.onUpdate),
                      (o.onUpdateParams = s.onUpdateParams),
                      (o.onUpdateScope =
                        s.onUpdateScope || s.callbackScope || this),
                      (this._startAt = E.to(this.target || {}, 0, o)),
                      u)
                    )
                      if (0 < this._time) this._startAt = null;
                      else if (0 !== l) return;
                  } else if (s.runBackwards && 0 !== l)
                    if (f) f.render(-1, !0), f.kill(), (this._startAt = null);
                    else {
                      for (i in (0 !== this._time && (u = !1), (n = {}), s))
                        (Q[i] && "autoCSS" !== i) || (n[i] = s[i]);
                      if (
                        ((n.overwrite = 0),
                        (n.data = "isFromStart"),
                        (n.lazy = u && !1 !== s.lazy),
                        (n.immediateRender = u),
                        (this._startAt = E.to(this.target, 0, n)),
                        u)
                      ) {
                        if (0 === this._time) return;
                      } else
                        this._startAt._init(),
                          this._startAt._enabled(!1),
                          this.vars.immediateRender && (this._startAt = null);
                    }
                  if (
                    ((this._ease = c =
                      c
                        ? c instanceof b
                          ? c
                          : "function" == typeof c
                          ? new b(c, s.easeParams)
                          : w[c] || E.defaultEase
                        : E.defaultEase),
                    s.easeParams instanceof Array &&
                      c.config &&
                      (this._ease = c.config.apply(c, s.easeParams)),
                    (this._easeType = this._ease._type),
                    (this._easePower = this._ease._power),
                    (this._firstPT = null),
                    this._targets)
                  )
                    for (r = this._targets.length, t = 0; t < r; t++)
                      this._initProps(
                        this._targets[t],
                        (this._propLookup[t] = {}),
                        this._siblings[t],
                        a ? a[t] : null,
                        t
                      ) && (e = !0);
                  else
                    e = this._initProps(
                      this.target,
                      this._propLookup,
                      this._siblings,
                      a,
                      0
                    );
                  if (
                    (e && E._onPluginEvent("_onInitAllProps", this),
                    !a ||
                      this._firstPT ||
                      ("function" != typeof this.target &&
                        this._enabled(!1, !1)),
                    s.runBackwards)
                  )
                    for (n = this._firstPT; n; )
                      (n.s += n.c), (n.c = -n.c), (n = n._next);
                  (this._onUpdate = s.onUpdate), (this._initted = !0);
                }),
                (n._initProps = function (t, e, n, i, o) {
                  var r, s, a, l, u, c;
                  if (null == t) return !1;
                  if (
                    (A[t._gsTweenID] && L(),
                    !this.vars.css &&
                      t.style &&
                      t !== _ &&
                      t.nodeType &&
                      I.css &&
                      !1 !== this.vars.autoCSS)
                  ) {
                    var f,
                      h = this.vars,
                      p = t,
                      d = {};
                    for (f in h)
                      Q[f] ||
                        (f in p &&
                          "transform" !== f &&
                          "x" !== f &&
                          "y" !== f &&
                          "width" !== f &&
                          "height" !== f &&
                          "className" !== f &&
                          "border" !== f) ||
                        !(!I[f] || (I[f] && I[f]._autoCSS)) ||
                        ((d[f] = h[f]), delete h[f]);
                    h.css = d;
                  }
                  for (r in this.vars)
                    if (((c = this.vars[r]), Q[r]))
                      c &&
                        (c instanceof Array || (c.push && y(c))) &&
                        -1 !== c.join("").indexOf("{self}") &&
                        (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (
                      I[r] &&
                      (l = new I[r]())._onInitTween(t, this.vars[r], this, o)
                    ) {
                      for (
                        this._firstPT = u =
                          {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: l._priority,
                            m: 0,
                          },
                          s = l._overwriteProps.length;
                        -1 < --s;

                      )
                        e[l._overwriteProps[s]] = this._firstPT;
                      (l._priority || l._onInitAllProps) && (a = !0),
                        (l._onDisable || l._onEnable) &&
                          (this._notifyPluginsOfEnabled = !0),
                        u._next && (u._next._prev = u);
                    } else
                      e[r] = G.call(
                        this,
                        t,
                        r,
                        "get",
                        c,
                        r,
                        0,
                        null,
                        this.vars.stringFilter,
                        o
                      );
                  return i && this._kill(i, t)
                    ? this._initProps(t, e, n, i, o)
                    : 1 < this._overwrite &&
                      this._firstPT &&
                      1 < n.length &&
                      nt(t, this, e, this._overwrite, n)
                    ? (this._kill(e, t), this._initProps(t, e, n, i, o))
                    : (this._firstPT &&
                        ((!1 !== this.vars.lazy && this._duration) ||
                          (this.vars.lazy && !this._duration)) &&
                        (A[t._gsTweenID] = !0),
                      a);
                }),
                (n.render = function (t, e, n) {
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    u,
                    c = this,
                    f = c._time,
                    h = c._duration,
                    p = c._rawPrevTime;
                  if (
                    (h - m <= t && 0 <= t
                      ? ((c._totalTime = c._time = h),
                        (c.ratio = c._ease._calcEnd ? c._ease.getRatio(1) : 1),
                        c._reversed ||
                          ((i = !0),
                          (o = "onComplete"),
                          (n = n || c._timeline.autoRemoveChildren)),
                        0 !== h ||
                          (!c._initted && c.vars.lazy && !n) ||
                          (c._startTime === c._timeline._duration && (t = 0),
                          (p < 0 ||
                            (t <= 0 && -m <= t) ||
                            (p === m && "isPause" !== c.data)) &&
                            p !== t &&
                            ((n = !0), m < p && (o = "onReverseComplete")),
                          (c._rawPrevTime = s = !e || t || p === t ? t : m)))
                      : t < m
                      ? ((c._totalTime = c._time = 0),
                        (c.ratio = c._ease._calcEnd ? c._ease.getRatio(0) : 0),
                        (0 !== f || (0 === h && 0 < p)) &&
                          ((o = "onReverseComplete"), (i = c._reversed)),
                        -m < t
                          ? (t = 0)
                          : t < 0 &&
                            ((c._active = !1),
                            0 !== h ||
                              (!c._initted && c.vars.lazy && !n) ||
                              (0 <= p &&
                                (p !== m || "isPause" !== c.data) &&
                                (n = !0),
                              (c._rawPrevTime = s =
                                !e || t || p === t ? t : m))),
                        (!c._initted ||
                          (c._startAt && c._startAt.progress())) &&
                          (n = !0))
                      : ((c._totalTime = c._time = t),
                        c._easeType
                          ? ((a = t / h),
                            (1 === (l = c._easeType) ||
                              (3 === l && 0.5 <= a)) &&
                              (a = 1 - a),
                            3 === l && (a *= 2),
                            1 === (u = c._easePower)
                              ? (a *= a)
                              : 2 === u
                              ? (a *= a * a)
                              : 3 === u
                              ? (a *= a * a * a)
                              : 4 === u && (a *= a * a * a * a),
                            (c.ratio =
                              1 === l
                                ? 1 - a
                                : 2 === l
                                ? a
                                : t / h < 0.5
                                ? a / 2
                                : 1 - a / 2))
                          : (c.ratio = c._ease.getRatio(t / h))),
                    c._time !== f || n)
                  ) {
                    if (!c._initted) {
                      if ((c._init(), !c._initted || c._gc)) return;
                      if (
                        !n &&
                        c._firstPT &&
                        ((!1 !== c.vars.lazy && c._duration) ||
                          (c.vars.lazy && !c._duration))
                      )
                        return (
                          (c._time = c._totalTime = f),
                          (c._rawPrevTime = p),
                          k.push(c),
                          void (c._lazy = [t, e])
                        );
                      c._time && !i
                        ? (c.ratio = c._ease.getRatio(c._time / h))
                        : i &&
                          c._ease._calcEnd &&
                          (c.ratio = c._ease.getRatio(0 === c._time ? 0 : 1));
                    }
                    for (
                      !1 !== c._lazy && (c._lazy = !1),
                        c._active ||
                          (!c._paused &&
                            c._time !== f &&
                            0 <= t &&
                            (c._active = !0)),
                        0 === f &&
                          (c._startAt &&
                            (0 <= t
                              ? c._startAt.render(t, !0, n)
                              : (o = o || "_dummyGS")),
                          !c.vars.onStart ||
                            (0 === c._time && 0 !== h) ||
                            e ||
                            c._callback("onStart")),
                        r = c._firstPT;
                      r;

                    )
                      r.f
                        ? r.t[r.p](r.c * c.ratio + r.s)
                        : (r.t[r.p] = r.c * c.ratio + r.s),
                        (r = r._next);
                    c._onUpdate &&
                      (t < 0 &&
                        c._startAt &&
                        -1e-4 !== t &&
                        c._startAt.render(t, !0, n),
                      e ||
                        ((c._time !== f || i || n) && c._callback("onUpdate"))),
                      !o ||
                        (c._gc && !n) ||
                        (t < 0 &&
                          c._startAt &&
                          !c._onUpdate &&
                          -1e-4 !== t &&
                          c._startAt.render(t, !0, n),
                        i &&
                          (c._timeline.autoRemoveChildren && c._enabled(!1, !1),
                          (c._active = !1)),
                        !e && c.vars[o] && c._callback(o),
                        0 === h &&
                          c._rawPrevTime === m &&
                          s !== m &&
                          (c._rawPrevTime = 0));
                  }
                }),
                (n._kill = function (t, e, n) {
                  if (
                    null == (t = "all" === t ? null : t) &&
                    (null == e || e === this.target)
                  )
                    return (this._lazy = !1), this._enabled(!1, !1);
                  e =
                    "string" != typeof e
                      ? e || this._targets || this.target
                      : E.selector(e) || e;
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    u,
                    c,
                    f,
                    h =
                      n &&
                      this._time &&
                      n._startTime === this._startTime &&
                      this._timeline === n._timeline,
                    p = this._firstPT;
                  if ((y(e) || C(e)) && "number" != typeof e[0])
                    for (i = e.length; -1 < --i; )
                      this._kill(t, e[i], n) && (l = !0);
                  else {
                    if (this._targets) {
                      for (i = this._targets.length; -1 < --i; )
                        if (e === this._targets[i]) {
                          (a = this._propLookup[i] || {}),
                            (this._overwrittenProps =
                              this._overwrittenProps || []),
                            (o = this._overwrittenProps[i] =
                              t ? this._overwrittenProps[i] || {} : "all");
                          break;
                        }
                    } else {
                      if (e !== this.target) return !1;
                      (a = this._propLookup),
                        (o = this._overwrittenProps =
                          t ? this._overwrittenProps || {} : "all");
                    }
                    if (a) {
                      if (
                        ((u = t || a),
                        (c =
                          t !== o &&
                          "all" !== o &&
                          t !== a &&
                          ("object" != typeof t || !t._tempKill)),
                        n && (E.onOverwrite || this.vars.onOverwrite))
                      ) {
                        for (r in u) a[r] && (f = f || []).push(r);
                        if ((f || !t) && !Z(this, n, e, f)) return !1;
                      }
                      for (r in u)
                        (s = a[r]) &&
                          (h &&
                            (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)),
                          s.pg && s.t._kill(u) && (l = !0),
                          (s.pg && 0 !== s.t._overwriteProps.length) ||
                            (s._prev
                              ? (s._prev._next = s._next)
                              : s === this._firstPT &&
                                (this._firstPT = s._next),
                            s._next && (s._next._prev = s._prev),
                            (s._next = s._prev = null)),
                          delete a[r]),
                          c && (o[r] = 1);
                      !this._firstPT &&
                        this._initted &&
                        p &&
                        this._enabled(!1, !1);
                    }
                  }
                  return l;
                }),
                (n.invalidate = function () {
                  this._notifyPluginsOfEnabled &&
                    E._onPluginEvent("_onDisable", this);
                  var t = this._time;
                  return (
                    (this._firstPT =
                      this._overwrittenProps =
                      this._startAt =
                      this._onUpdate =
                        null),
                    (this._notifyPluginsOfEnabled =
                      this._active =
                      this._lazy =
                        !1),
                    (this._propLookup = this._targets ? {} : []),
                    a.prototype.invalidate.call(this),
                    this.vars.immediateRender &&
                      ((this._time = -m),
                      this.render(t, !1, !1 !== this.vars.lazy)),
                    this
                  );
                }),
                (n._enabled = function (t, e) {
                  if ((g || S.wake(), t && this._gc)) {
                    var n,
                      i = this._targets;
                    if (i)
                      for (n = i.length; -1 < --n; )
                        this._siblings[n] = R(i[n], this, !0);
                    else this._siblings = R(this.target, this, !0);
                  }
                  return (
                    a.prototype._enabled.call(this, t, e),
                    !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                      E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                  );
                }),
                (E.to = function (t, e, n) {
                  return new E(t, e, n);
                }),
                (E.from = function (t, e, n) {
                  return (
                    (n.runBackwards = !0),
                    (n.immediateRender = 0 != n.immediateRender),
                    new E(t, e, n)
                  );
                }),
                (E.fromTo = function (t, e, n, i) {
                  return (
                    (i.startAt = n),
                    (i.immediateRender =
                      0 != i.immediateRender && 0 != n.immediateRender),
                    new E(t, e, i)
                  );
                }),
                (E.delayedCall = function (t, e, n, i, o) {
                  return new E(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: o,
                    overwrite: 0,
                  });
                }),
                (E.set = function (t, e) {
                  return new E(t, 0, e);
                }),
                (E.getTweensOf = function (t, e) {
                  if (null == t) return [];
                  var n, i, o, r;
                  if (
                    ((t = ("string" == typeof t && E.selector(t)) || t),
                    (y(t) || C(t)) && "number" != typeof t[0])
                  ) {
                    for (n = t.length, i = []; -1 < --n; )
                      i = i.concat(E.getTweensOf(t[n], e));
                    for (n = i.length; -1 < --n; )
                      for (r = i[n], o = n; -1 < --o; )
                        r === i[o] && i.splice(n, 1);
                  } else if (t._gsTweenID)
                    for (n = (i = R(t).concat()).length; -1 < --n; )
                      (i[n]._gc || (e && !i[n].isActive())) && i.splice(n, 1);
                  return i || [];
                }),
                (E.killTweensOf = E.killDelayedCallsTo =
                  function (t, e, n) {
                    "object" == typeof e && ((n = e), (e = !1));
                    for (var i = E.getTweensOf(t, e), o = i.length; -1 < --o; )
                      i[o]._kill(n, t);
                  }),
                v(
                  "plugins.TweenPlugin",
                  function (t, e) {
                    (this._overwriteProps = (t || "").split(",")),
                      (this._propName = this._overwriteProps[0]),
                      (this._priority = e || 0),
                      (this._super = D.prototype);
                  },
                  !0
                ));
            if (
              ((n = D.prototype),
              (D.version = "1.19.0"),
              (D.API = 2),
              (n._firstPT = null),
              (n._addTween = G),
              (n.setRatio = U),
              (n._kill = function (t) {
                var e,
                  n = this._overwriteProps,
                  i = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                  for (e = n.length; -1 < --e; )
                    null != t[n[e]] && n.splice(e, 1);
                for (; i; )
                  null != t[i.n] &&
                    (i._next && (i._next._prev = i._prev),
                    i._prev
                      ? ((i._prev._next = i._next), (i._prev = null))
                      : this._firstPT === i && (this._firstPT = i._next)),
                    (i = i._next);
                return !1;
              }),
              (n._mod = n._roundProps =
                function (t) {
                  for (var e, n = this._firstPT; n; )
                    (e =
                      t[this._propName] ||
                      (null != n.n &&
                        t[n.n.split(this._propName + "_").join("")])) &&
                      "function" == typeof e &&
                      (2 === n.f ? (n.t._applyPT.m = e) : (n.m = e)),
                      (n = n._next);
                }),
              (E._onPluginEvent = function (t, e) {
                var n,
                  i,
                  o,
                  r,
                  s,
                  a = e._firstPT;
                if ("_onInitAllProps" === t) {
                  for (; a; ) {
                    for (s = a._next, i = o; i && i.pr > a.pr; ) i = i._next;
                    (a._prev = i ? i._prev : r) ? (a._prev._next = a) : (o = a),
                      (a._next = i) ? (i._prev = a) : (r = a),
                      (a = s);
                  }
                  a = e._firstPT = o;
                }
                for (; a; )
                  a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0),
                    (a = a._next);
                return n;
              }),
              (D.activate = function (t) {
                for (var e = t.length; -1 < --e; )
                  t[e].API === D.API && (I[new t[e]()._propName] = t[e]);
                return !0;
              }),
              (i.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))
                  throw "illegal plugin definition.";
                var e,
                  n = t.propName,
                  i = t.priority || 0,
                  o = t.overwriteProps,
                  r = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps",
                  },
                  s = v(
                    "plugins." +
                      n.charAt(0).toUpperCase() +
                      n.substr(1) +
                      "Plugin",
                    function () {
                      D.call(this, n, i), (this._overwriteProps = o || []);
                    },
                    !0 === t.global
                  ),
                  a = (s.prototype = new D(n));
                for (e in (((a.constructor = s).API = t.API), r))
                  "function" == typeof t[e] && (a[r[e]] = t[e]);
                return (s.version = t.version), D.activate([s]), s;
              }),
              (o = _._gsQueue))
            ) {
              for (r = 0; r < o.length; r++) o[r]();
              for (n in p)
                p[n].func ||
                  _.console.log("GSAP encountered missing dependency: " + n);
            }
            return (g = !1), E;
          })(n),
          o = n.GreenSockGlobals,
          t = o.com.greensock,
          r = t.core.SimpleTimeline,
          s = t.core.Animation,
          a = o.Ease,
          l = o.Linear,
          u = l,
          c = o.Power1,
          f = o.Power2,
          h = o.Power3,
          p = o.Power4,
          d = o.TweenPlugin,
          _ = t.events.EventDispatcher;
      }.call(this, m(64)(t), m(14));
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(63)),
      u = s(n(4)),
      c = s(n(17)),
      s =
        ((o = a.default),
        r(f, o),
        (f.prototype.__build = function () {
          (this.viewInfo = new l.default(this)), o.prototype.__build.call(this);
        }),
        (f.prototype.updateStaticClientRect = function () {
          var t;
          this.useStaticBounds &&
            ((t = this.getElement().getBoundingClientRect()),
            (this._staticBoundsOffset =
              t.top + u.default.SCROLL.getCurrentScroll().y),
            (this._staticBoundsRect = c.default.from(t)),
            this.viewInfo && this.viewInfo.updateRect(this._staticBoundsRect));
        }),
        (f.prototype.getBoundingClientRect = function () {
          return this.useStaticBounds
            ? (this._staticBoundsRect || this.updateStaticClientRect(),
              (this._staticBoundsRect.y =
                this._staticBoundsOffset -
                u.default.SCROLL.getCurrentScroll().y),
              this._staticBoundsRect)
            : o.prototype.getBoundingClientRect.call(this);
        }),
        f);
    function f() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (t._staticBoundsOffset = -1), (t.useStaticBounds = !1), t;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      h = (Object.defineProperty(e, "__esModule", { value: !0 }), n(29)),
      o = n(3),
      r = i(n(17)),
      p = i(n(13));
    function d(t, e, n) {
      var i = this;
      void 0 === e && (e = null),
        void 0 === n && (n = !1),
        (this.__componentTypeGuard = "COMPONENT"),
        (this._onLoad = new o.SignalDispatcher()),
        (this._onBuild = new o.SignalDispatcher()),
        (this._onAwake = new o.SignalDispatcher()),
        (this._onUnload = new o.SignalDispatcher()),
        (this._onSleep = new o.SignalDispatcher()),
        (this._onDestroy = new o.SignalDispatcher()),
        (this._node = null),
        (this._childComponentsLoaded = 0),
        (this._isBuild = !1),
        (this._isAwake = !1),
        (this._isLoaded = !1),
        (this._isCompLoading = !1),
        (this._isDestroyed = !1),
        (this.__autoAwake = !1),
        (this.setup = function () {
          i.node.onInitialized.unsub(i.setup),
            i.node.onElementRemove.sub(i.__kill),
            i.node.onDestroy.sub(i.__kill),
            i.node.onChildAdded.sub(i.childComponentAdded),
            i.node.onSiblingAdded.sub(i.siblingAdded),
            i.node.getChildComponents().forEach(function (t) {
              i.childComponentAdded(t);
            }),
            i.node.getComponents().forEach(function (t) {
              i.siblingAdded(t);
            }),
            (i.params = i.node.params);
        }),
        (this.siblingAdded = function (t) {
          t !== i && i.childComponentAdded(t);
        }),
        (this.childComponentAdded = function (t) {
          t.onLoad.one(i.onChildComponentLoaded),
            t.onBuild.one(i.onChildCompBuild),
            i._isLoaded && t.__tryLoad();
        }),
        (this.onChildCompBuild = function () {
          i.__autoAwake && i.__tryAwake();
        }),
        (this.onChildComponentLoaded = function () {
          i._childComponentsLoaded++, i.__tryBuild();
        }),
        (this.__kill = function () {
          i.node.isDestroyed() && i.__tryUnload(),
            i.__trySleep(),
            i.node.isDestroyed() && i.__tryDestroy();
        }),
        (this._qsMap = {}),
        (this._qsMapAll = {}),
        (this._node = t),
        (this._parentElement = e),
        (this.__autoAwake = n);
    }
    (d.prototype.load = function (t) {
      t();
    }),
      Object.defineProperty(d.prototype, "onLoad", {
        get: function () {
          return this._onLoad.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.build = function () {}),
      Object.defineProperty(d.prototype, "onBuild", {
        get: function () {
          return this._onBuild.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.awake = function () {}),
      Object.defineProperty(d.prototype, "onAwake", {
        get: function () {
          return this._onAwake.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.unload = function () {}),
      Object.defineProperty(d.prototype, "onUnload", {
        get: function () {
          return this._onUnload.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.sleep = function () {}),
      Object.defineProperty(d.prototype, "onSleep", {
        get: function () {
          return this._onSleep.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.destroy = function () {}),
      Object.defineProperty(d.prototype, "onDestroy", {
        get: function () {
          return this._onDestroy.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.__init = function () {
        d.ALL_ACTIVE_COMPONENTS.push(this),
          this.node.isInitialized()
            ? this.setup()
            : this.node.onInitialized.sub(this.setup);
      }),
      Object.defineProperty(d.prototype, "node", {
        get: function () {
          return this._node;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.removeThis = function (t) {
        this.node.removeThis((t = void 0 === t ? !0 : t));
      }),
      (d.prototype.killAllEvents = function () {
        this.onLoad.clear(),
          this.onBuild.clear(),
          this.onAwake.clear(),
          this.onUnload.clear(),
          this.onSleep.clear();
      }),
      (d.prototype.isAllChildrenAndSiblingsBuild = function () {
        for (
          var t = this.node.getChildComponents(!0), e = t.length, n = 0;
          n < e;
          n++
        )
          if (!t[n].isBuild()) return !1;
        return !0;
      }),
      (d.prototype.isAllChildrenAndSiblingsLoaded = function () {
        for (
          var t = this.node.getChildComponents(!0), e = t.length, n = 0;
          n < e;
          n++
        )
          if (!t[n].isLoaded()) return !1;
        return !0;
      }),
      (d.prototype.__tryLoad = function () {
        var t = this;
        this._isDestroyed ||
          this._isLoaded ||
          this._isCompLoading ||
          ((this._isCompLoading = !0),
          this.load.length,
          this.node.getChildComponents(!0).forEach(function (t) {
            return t.__tryLoad();
          }),
          this.load(function () {
            (t._isLoaded = !0),
              (t._isCompLoading = !1),
              t.__tryBuild(),
              t._onLoad.dispatch();
          }));
      }),
      (d.prototype.__tryBuild = function () {
        this._isBuild ||
          this._isDestroyed ||
          !this.isAllChildrenAndSiblingsLoaded() ||
          this.__build();
      }),
      (d.prototype.__build = function () {
        var e;
        (this._isBuild = !0),
          this.build(),
          this._onBuild.dispatch(),
          this.node.hasParentComponentNode()
            ? ((e = !0),
              this.node
                .getParent()
                .getComponents()
                .forEach(function (t) {
                  t.isAwake() || (e = !1);
                }),
              e && this.__tryAwake())
            : (null !== this._parentElement &&
              this._parentElement !== this.getElement().parentElement
                ? this._parentElement.appendChild(this.getElement())
                : (this._parentElement = this.getElement().parentElement),
              this.__autoAwake && this.__tryAwake());
      }),
      (d.prototype.__tryAwake = function () {
        this._isDestroyed ||
          this._isAwake ||
          !this.isAllChildrenAndSiblingsBuild() ||
          (this.node.getChildComponents().forEach(function (t) {
            t.__tryAwake();
          }),
          this.__awake());
      }),
      (d.prototype.__awake = function () {
        (this._isAwake = !0), this.awake(), this._onAwake.dispatch();
      }),
      (d.prototype.__tryUnload = function () {
        this._isLoaded && this.__unload();
      }),
      (d.prototype.__unload = function () {
        this.node.getChildComponents().forEach(function (t) {
          return t.__tryUnload();
        }),
          this.node.onChildAdded.unsub(this.childComponentAdded),
          this.node.onSiblingAdded.unsub(this.siblingAdded),
          (this._isLoaded = !1),
          this.unload(),
          this._onUnload.dispatch();
      }),
      (d.prototype.__trySleep = function () {
        this._isAwake && this.__sleep();
      }),
      (d.prototype.__tryDestroy = function () {
        this._isBuild && this.__destroy();
      }),
      (d.prototype.__destroy = function () {
        this.node.getChildComponents().forEach(function (t) {
          return t.__tryDestroy();
        }),
          (this._isDestroyed = !0),
          this.node.onElementRemove.unsub(this.__kill),
          this.node.onDestroy.unsub(this.__kill),
          this.destroy(),
          this._onDestroy.dispatch();
        var t = d.ALL_ACTIVE_COMPONENTS.indexOf(this);
        -1 !== t && d.ALL_ACTIVE_COMPONENTS.splice(t, 1);
      }),
      (d.prototype.__sleep = function () {
        this.node.getChildComponents().forEach(function (t) {
          return t.__trySleep();
        }),
          (this._isAwake = !1),
          this.sleep(),
          this._onSleep.dispatch(),
          this.killAllEvents();
      }),
      (d.prototype.isLoaded = function () {
        return this._isLoaded;
      }),
      (d.prototype.isBuild = function () {
        return this._isBuild;
      }),
      (d.prototype.isAwake = function () {
        return this._isAwake;
      }),
      (d.prototype.isDestroyed = function () {
        return this._isDestroyed;
      }),
      (d.prototype.getElement = function () {
        return this.node.getElement();
      }),
      (d.prototype.getParent = function () {
        return this.node.getParent();
      }),
      (d.prototype.getRoot = function () {
        return p.default.searchRootComponentNode(this.node);
      }),
      (d.prototype.getComponents = function (t, e) {
        void 0 === e && (e = !1);
        var n = this.node.getChildComponents((t = void 0 === t ? !1 : t));
        if ((!t || (-1 !== (t = n.indexOf(this)) && n.splice(t, 1)), e))
          for (var i = n.length, o = 0; o < i; o++)
            if (n[o] !== this)
              for (
                var r = n[o].getComponents(!1, !0), s = r.length, a = 0;
                a < s;
                a++
              )
                -1 === n.indexOf(r[a]) && n.push(r[a]);
        return n;
      }),
      (d.prototype.getComponentByType = function (i, t, e, o) {
        void 0 === e && (e = !0), void 0 === o && (o = []);
        for (
          var r = this.node.getChildComponents((t = void 0 === t ? !0 : t)),
            n = r.length,
            s = 0;
          s < n;
          s++
        ) {
          var a = r[s];
          if (a !== this && a instanceof i) return a;
        }
        if (e)
          for (var l = this, s = 0; s < n; s++) {
            var u = (function (t) {
              var e = r[t],
                n = !1;
              if (
                (o.forEach(function (t) {
                  e instanceof t && (n = !0);
                }),
                n)
              )
                return "continue";
              if (e !== l) {
                t = e.getComponentByType(i, !1, !0);
                if (t) return { value: t };
              }
            })(s);
            if ("object" == typeof u) return u.value;
          }
        return null;
      }),
      (d.prototype.getComponentsByType = function (a, t, e, l) {
        void 0 === e && (e = !0), void 0 === l && (l = []);
        for (
          var u = [],
            c = this.node.getChildComponents((t = void 0 === t ? !0 : t)),
            n = c.length,
            i = 0;
          i < n;
          i++
        ) {
          var o = c[i];
          o !== this && o instanceof a && u.push(o);
        }
        if (((n = (c = this.node.getChildComponents(!1)).length), e))
          for (i = 0; i < n; i++)
            !(function (t) {
              var e = c[t],
                n = !1;
              if (
                (l.forEach(function (t) {
                  e instanceof t && (n = !0);
                }),
                n)
              )
                return;
              for (
                var i = e.getComponentsByType(a, !0, !0), o = i.length, r = 0;
                r < o;
                r++
              ) {
                var s = i[r];
                -1 === u.indexOf(s) && u.push(s);
              }
            })(i);
        return u;
      }),
      (d.prototype.toString = function () {
        return (
          this.getElement().getAttribute(d.SEARCH_MODULE) ||
          d.__tagComponents[this.getElement().tagName.toUpperCase()]
        );
      }),
      (d.prototype.getBoundingClientRect = function () {
        return r.default.from(this.getElement().getBoundingClientRect());
      }),
      (d.prototype.qs = function (t, e) {
        return (
          (!(e = void 0 === e ? !1 : e) && this._qsMap[t]) ||
            (this._qsMap[t] = this.getElement().querySelector(t)),
          this._qsMap[t]
        );
      }),
      (d.prototype.qsAll = function (t, e) {
        return (
          (!(e = void 0 === e ? !1 : e) && this._qsMapAll[t]) ||
            (this._qsMapAll[t] = this.getElement().querySelectorAll(t)),
          this._qsMapAll[t]
        );
      }),
      (d.addComponent = function (t, e) {
        var n = t.getAttribute("data-module");
        t.setAttribute("data-module", n ? n + ", " + e : e);
        for (var i = d.create(t).getComponents(), o = 0; o < i.length; o++)
          if (i[o] instanceof h.Modules[e]) return i[o];
        return null;
      }),
      (d.create = function (t, e, n, i) {
        void 0 === e && (e = null),
          void 0 === n && (n = !0),
          void 0 === i && (i = []);
        var o = d.DOMComponents(t),
          r = o.length;
        if (0 !== r) {
          for (var s = 0; s < r; s++) {
            var a = (function (t) {
              var e = o[t],
                n = !1;
              if (
                (i.forEach(function (t) {
                  h.Modules[e] == t && (n = !0);
                }),
                n)
              )
                return { value: void 0 };
            })(s);
            if ("object" == typeof a) return a.value;
          }
          for (
            var l = p.default.searchActiveNodeFromElement(t),
              u = (l || (l = new p.default(t, e)).init(), []),
              s = 0;
            s < r;
            s++
          ) {
            var c = o[s],
              f = d.getActiveComponentFrom(t, h.Modules[c]);
            if (f) l.getComponents().indexOf(f);
            else {
              f = void 0;
              try {
                f = new h.Modules[c](l);
              } catch (t) {}
              f && ((f.__autoAwake = n), l.__addSibling(f), u.push(f));
            }
          }
          return (
            u.forEach(function (t) {
              t.__init();
            }),
            u.forEach(function (t) {
              null !== e ? e.__addComponent(t) : t.__tryLoad();
            }),
            l
          );
        }
        d.createSubComponents(t, e, n, i);
      }),
      (d.getActiveComponentsFrom = function (t) {
        for (
          var e = d.ALL_ACTIVE_COMPONENTS.length, n = [], i = 0;
          i < e;
          i++
        ) {
          var o = d.ALL_ACTIVE_COMPONENTS[i];
          o.getElement() === t && n.push(o);
        }
        return n;
      }),
      (d.getActiveComponentFrom = function (t, e) {
        for (
          var n = d.getActiveComponentsFrom(t), i = n.length, o = 0;
          o < i;
          o++
        ) {
          var r = n[o];
          if (r.getElement() === t && r instanceof e) return r;
        }
        return null;
      }),
      (d.DOMComponents = function (t) {
        var e = t.getAttribute(d.SEARCH_MODULE),
          n = [];
        return (
          e &&
            e
              .replace(/\s/g, ",")
              .split(",")
              .forEach(function (t) {
                0 < t.length && n.push(t);
              }),
          this.__tagComponents[t.tagName.toUpperCase()] &&
            n.push(this.__tagComponents[t.tagName.toUpperCase()]),
          n
        );
      }),
      (d.isComponent = function (t) {
        return void 0 !== t.__componentTypeGuard;
      }),
      (d.createSubComponents = function (t, e, n, i) {
        void 0 === e && (e = null),
          void 0 === n && (n = !1),
          void 0 === i && (i = []);
        for (
          var o = [], r = d.getAllChildComponentDivs(t, !0), s = 0;
          s < r.length;
          s++
        )
          o.push(d.create(r[s], e, n, i));
        return o;
      }),
      (d.getAllChildComponentDivs = function (t, e) {
        void 0 === e && (e = !0);
        var n = t.children;
        if (n) {
          for (var i = n.length, o = [], r = 0; r < i; r++) {
            var s = n[r];
            if (d.isElementOfComponentType(s)) o.push(s);
            else if (e) {
              var a = this.getAllChildComponentDivs(s);
              if (a)
                for (var l = a.length, u = 0; u < l; u++)
                  null !== a[u] && o.push(a[u]);
            }
          }
          return o;
        }
      }),
      (d.isElementOfComponentType = function (t) {
        return (
          t.hasAttribute(d.SEARCH_MODULE) ||
          void 0 !== this.__tagComponents[t.tagName.toUpperCase()]
        );
      }),
      (d.applyComponentToTag = function (t, e) {
        this.__tagComponents[t.toUpperCase()] = e;
      }),
      (d.JSXCreate = function (t, e) {
        for (var n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i];
        var o = document.createElement(t);
        return (
          Object.keys(this.nonNull(e, {})).forEach(function (t) {
            o.setAttribute(t, e[t]);
          }),
          this.DOMparseChildren(n).forEach(function (t) {
            o.appendChild(t);
          }),
          o
        );
      }),
      (d.nonNull = function (t, e) {
        return Boolean(t) ? t : e;
      }),
      (d.DOMparseChildren = function (t) {
        return t.map(function (t) {
          return "object" == typeof t
            ? t
            : document.createTextNode(t.toString());
        });
      }),
      (d.ALL_ACTIVE_COMPONENTS = []),
      (d.SEARCH_MODULE = "data-module"),
      (d.__tagComponents = {}),
      (e.default = d);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SignalList =
        e.SignalHandlingBase =
        e.SignalDispatcher =
        e.NonUniformSimpleEventList =
        e.SimpleEventList =
        e.SimpleEventHandlingBase =
        e.SimpleEventDispatcher =
        e.NonUniformEventList =
        e.EventList =
        e.EventHandlingBase =
        e.EventDispatcher =
        e.Subscription =
        e.EventListBase =
        e.DispatcherWrapper =
        e.DispatcherBase =
          void 0);
    var i = n(16),
      o =
        (Object.defineProperty(e, "DispatcherBase", {
          enumerable: !0,
          get: function () {
            return i.DispatcherBase;
          },
        }),
        Object.defineProperty(e, "DispatcherWrapper", {
          enumerable: !0,
          get: function () {
            return i.DispatcherWrapper;
          },
        }),
        Object.defineProperty(e, "EventListBase", {
          enumerable: !0,
          get: function () {
            return i.EventListBase;
          },
        }),
        Object.defineProperty(e, "Subscription", {
          enumerable: !0,
          get: function () {
            return i.Subscription;
          },
        }),
        n(56)),
      r =
        (Object.defineProperty(e, "EventDispatcher", {
          enumerable: !0,
          get: function () {
            return o.EventDispatcher;
          },
        }),
        Object.defineProperty(e, "EventHandlingBase", {
          enumerable: !0,
          get: function () {
            return o.EventHandlingBase;
          },
        }),
        Object.defineProperty(e, "EventList", {
          enumerable: !0,
          get: function () {
            return o.EventList;
          },
        }),
        Object.defineProperty(e, "NonUniformEventList", {
          enumerable: !0,
          get: function () {
            return o.NonUniformEventList;
          },
        }),
        n(58)),
      s =
        (Object.defineProperty(e, "SimpleEventDispatcher", {
          enumerable: !0,
          get: function () {
            return r.SimpleEventDispatcher;
          },
        }),
        Object.defineProperty(e, "SimpleEventHandlingBase", {
          enumerable: !0,
          get: function () {
            return r.SimpleEventHandlingBase;
          },
        }),
        Object.defineProperty(e, "SimpleEventList", {
          enumerable: !0,
          get: function () {
            return r.SimpleEventList;
          },
        }),
        Object.defineProperty(e, "NonUniformSimpleEventList", {
          enumerable: !0,
          get: function () {
            return r.NonUniformSimpleEventList;
          },
        }),
        n(60));
    Object.defineProperty(e, "SignalDispatcher", {
      enumerable: !0,
      get: function () {
        return s.SignalDispatcher;
      },
    }),
      Object.defineProperty(e, "SignalHandlingBase", {
        enumerable: !0,
        get: function () {
          return s.SignalHandlingBase;
        },
      }),
      Object.defineProperty(e, "SignalList", {
        enumerable: !0,
        get: function () {
          return s.SignalList;
        },
      });
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(49),
        i(n(50))),
      r = i(n(29)),
      s = i(n(2)),
      a = i(n(20)),
      l = n(179),
      u = i(n(11)),
      c = i(n(48)),
      f = i(n(33)),
      h =
        ((window.onload = function () {
          new h();
        }),
        (p.prototype.addTemplateManager = function () {
          (p.CONTENT = new a.default(
            document.getElementById("TemplateLayer"),
            new l.AnimateOnOut(!1)
          )),
            p.CONTENT.onLoadingStart.subscribe(this.onLoadingNewPage),
            p.CONTENT.onLoadingDone.subscribe(this.onLoadingNewPageDone);
        }),
        (p.prototype.setupDefaultModules = function () {
          (c.default.QUALITY = "80"),
            s.default.applyComponentToTag("IMG", "ImgixImage"),
            s.default.applyComponentToTag("a", "CursorTargetLink");
        }),
        (p.prototype.setupScroll = function () {
          f.default.Instance;
        }),
        (p.ENV = window.__SERVER),
        p);
    function p() {
      (this.onLoadingNewPage = function () {}),
        (this.onLoadingNewPageDone = function () {}),
        "prod" === p.ENV.env && (p.BUGSNAG = o.default(p.ENV.bugsnagKey)),
        new r.default(),
        (history.scrollRestoration = "manual"),
        (p.RESIZE = new u.default()),
        this.setupDefaultModules(),
        this.addTemplateManager(),
        this.setupScroll(),
        s.default.create(document.body, null, !0, []),
        p.CONTENT.createBodyTemplate();
    }
    e.default = h;
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function () {
        return x;
      }),
      n.d(e, "TweenLite", function () {
        return O.default;
      }),
      n.d(e, "TweenMax", function () {
        return x;
      }),
      n.d(e, "TimelineLite", function () {
        return i;
      }),
      n.d(e, "TimelineMax", function () {
        return o;
      }),
      n.d(e, "CSSPlugin", function () {
        return r.a;
      }),
      n.d(e, "AttrPlugin", function () {
        return s;
      }),
      n.d(e, "BezierPlugin", function () {
        return g;
      }),
      n.d(e, "RoundPropsPlugin", function () {
        return a;
      }),
      n.d(e, "DirectionalRotationPlugin", function () {
        return l;
      }),
      n.d(e, "TweenPlugin", function () {
        return O.TweenPlugin;
      }),
      n.d(e, "Ease", function () {
        return O.Ease;
      }),
      n.d(e, "Power0", function () {
        return O.Power0;
      }),
      n.d(e, "Power1", function () {
        return O.Power1;
      }),
      n.d(e, "Power2", function () {
        return O.Power2;
      }),
      n.d(e, "Power3", function () {
        return O.Power3;
      }),
      n.d(e, "Power4", function () {
        return O.Power4;
      }),
      n.d(e, "Linear", function () {
        return O.Linear;
      }),
      n.d(e, "Back", function () {
        return c;
      }),
      n.d(e, "Elastic", function () {
        return f;
      }),
      n.d(e, "Bounce", function () {
        return p;
      }),
      n.d(e, "RoughEase", function () {
        return d;
      }),
      n.d(e, "SlowMo", function () {
        return _;
      }),
      n.d(e, "SteppedEase", function () {
        return m;
      }),
      n.d(e, "Circ", function () {
        return y;
      }),
      n.d(e, "Expo", function () {
        return v;
      }),
      n.d(e, "Sine", function () {
        return b;
      }),
      n.d(e, "ExpoScaleEase", function () {
        return w;
      }),
      n.d(e, "_gsScope", function () {
        return O._gsScope;
      });
    function h(t, e, n, i, o, r) {
      var s,
        a,
        l,
        u,
        c,
        f,
        h,
        p,
        d = {},
        _ = [],
        g = r || t[0];
      for (a in ((o =
        "string" == typeof o
          ? "," + o + ","
          : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
      null == e && (e = 1),
      t[0]))
        _.push(a);
      if (1 < t.length) {
        for (p = t[t.length - 1], h = !0, s = _.length; -1 < --s; )
          if (((a = _[s]), 0.05 < Math.abs(g[a] - p[a]))) {
            h = !1;
            break;
          }
        h &&
          ((t = t.concat()),
          r && t.unshift(r),
          t.push(t[1]),
          (r = t[t.length - 3]));
      }
      for (D.length = j.length = N.length = 0, s = _.length; -1 < --s; )
        (a = _[s]),
          (B[a] = -1 !== o.indexOf("," + a + ",")),
          (d[a] = (function (t, e, n, i) {
            var o,
              r,
              s,
              a,
              l,
              u,
              c = [];
            if (i)
              for (r = (t = [i].concat(t)).length; -1 < --r; )
                "string" == typeof (u = t[r][e]) &&
                  "=" === u.charAt(1) &&
                  (t[r][e] = i[e] + Number(u.charAt(0) + u.substr(2)));
            if ((o = t.length - 2) < 0) c[0] = new F(t[0][e], 0, 0, t[0][e]);
            else {
              for (r = 0; r < o; r++)
                (s = t[r][e]),
                  (a = t[r + 1][e]),
                  (c[r] = new F(s, 0, 0, a)),
                  n &&
                    ((l = t[r + 2][e]),
                    (D[r] = (D[r] || 0) + (a - s) * (a - s)),
                    (j[r] = (j[r] || 0) + (l - a) * (l - a)));
              c[r] = new F(t[r][e], 0, 0, t[r + 1][e]);
            }
            return c;
          })(t, a, B[a], r));
      for (s = D.length; -1 < --s; )
        (D[s] = Math.sqrt(D[s])), (j[s] = Math.sqrt(j[s]));
      if (!i) {
        for (s = _.length; -1 < --s; )
          if (B[a])
            for (f = (l = d[_[s]]).length - 1, u = 0; u < f; u++)
              (c = l[u + 1].da / j[u] + l[u].da / D[u] || 0),
                (N[u] = (N[u] || 0) + c * c);
        for (s = N.length; -1 < --s; ) N[s] = Math.sqrt(N[s]);
      }
      for (s = _.length, u = n ? 4 : 1; -1 < --s; ) {
        (l = d[(a = _[s])]),
          (P =
            O =
            T =
            x =
            O =
            T =
            P =
            w =
            b =
            v =
            y =
            m =
            R =
            L =
            M =
            I =
              void 0);
        for (
          var m,
            y,
            v,
            b,
            w,
            x,
            T,
            O,
            P,
            C = l,
            S = e,
            E = n,
            k = i,
            A = B[a],
            I = C.length - 1,
            M = 0,
            L = C[0].a,
            R = 0;
          R < I;
          R++
        )
          (m = (b = C[M]).a),
            (y = b.d),
            (v = C[M + 1].d),
            (T = A
              ? ((T = D[R]),
                (P = (((O = j[R]) + T) * S * 0.25) / ((!k && N[R]) || 0.5)),
                y -
                  ((w = y - (y - m) * (k ? 0.5 * S : 0 !== T ? P / T : 0)) +
                    ((((P = y + (v - y) * (k ? 0.5 * S : 0 !== O ? P / O : 0)) -
                      w) *
                      ((3 * T) / (T + O) + 0.5)) /
                      4 || 0)))
              : y -
                ((w = y - (y - m) * S * 0.5) + (P = y + (v - y) * S * 0.5)) /
                  2),
            (P += T),
            (b.c = O = w += T),
            (b.b = 0 !== R ? L : (L = b.a + 0.6 * (b.c - b.a))),
            (b.da = y - m),
            (b.ca = O - m),
            (b.ba = L - m),
            E
              ? ((x = z(m, L, O, y)),
                C.splice(M, 1, x[0], x[1], x[2], x[3]),
                (M += 4))
              : M++,
            (L = P);
        ((b = C[M]).b = L),
          (b.c = L + 0.4 * (b.d - L)),
          (b.da = b.d - b.a),
          (b.ca = b.c - b.a),
          (b.ba = L - b.a),
          E &&
            ((x = z(b.a, L, b.c, b.d)), C.splice(M, 1, x[0], x[1], x[2], x[3])),
          h && (l.splice(0, u), l.splice(l.length - u, u));
      }
      return d;
    }
    var O = n(0),
      i =
        (O._gsScope._gsDefine(
          "TimelineLite",
          ["core.Animation", "core.SimpleTimeline", "TweenLite"],
          function () {
            function d(t) {
              O.SimpleTimeline.call(this, t);
              var e,
                n,
                i = this,
                o = i.vars;
              for (n in ((i._labels = {}),
              (i.autoRemoveChildren = !!o.autoRemoveChildren),
              (i.smoothChildTiming = !!o.smoothChildTiming),
              (i._sortChildren = !0),
              (i._onUpdate = o.onUpdate),
              o))
                (e = o[n]),
                  f(e) &&
                    -1 !== e.join("").indexOf("{self}") &&
                    (o[n] = i._swapSelfInParams(e));
              f(o.tweens) && i.add(o.tweens, 0, o.align, o.stagger);
            }
            function _(t) {
              var e,
                n = {};
              for (e in t) n[e] = t[e];
              return n;
            }
            function g(t, e, n) {
              var i,
                o,
                r = t.cycle;
              for (i in r)
                (o = r[i]),
                  (t[i] =
                    "function" == typeof o ? o(n, e[n], e) : o[n % o.length]);
              delete t.cycle;
            }
            function u(t, e, n, i) {
              var o = "immediateRender";
              return o in e || (e[o] = !((n && !1 === n[o]) || i)), e;
            }
            function m(t) {
              var p, d, _, g, m, y, v, b;
              return "function" == typeof t
                ? t
                : ((d = (p = "object" == typeof t ? t : { each: t }).ease),
                  (_ = p.from || 0),
                  (g = p.base || 0),
                  (m = {}),
                  (y = isNaN(_)),
                  (v = p.axis),
                  (b = { center: 0.5, end: 1 }[_] || 0),
                  function (t, e, n) {
                    var i,
                      o,
                      r,
                      s,
                      a,
                      l,
                      u,
                      c,
                      f = (n || p).length,
                      h = m[f];
                    if (!h) {
                      if (
                        !(c = "auto" === p.grid ? 0 : (p.grid || [1 / 0])[0])
                      ) {
                        for (
                          l = -1 / 0;
                          l < (l = n[c++].getBoundingClientRect().left) &&
                          c < f;

                        );
                        c--;
                      }
                      for (
                        h = m[f] = [],
                          i = y ? Math.min(c, f) * b - 0.5 : _ % c,
                          o = y ? (f * b) / c - 0.5 : (_ / c) | 0,
                          u = 1 / (l = 0),
                          a = 0;
                        a < f;
                        a++
                      )
                        (s = (a % c) - i),
                          (r = o - ((a / c) | 0)),
                          (h[a] = s =
                            v
                              ? Math.abs("y" === v ? r : s)
                              : Math.sqrt(s * s + r * r)),
                          l < s && (l = s),
                          s < u && (u = s);
                      (h.max = l - u),
                        (h.min = u),
                        (h.v = f =
                          p.amount ||
                          p.each *
                            (f < c
                              ? f - 1
                              : v
                              ? "y" === v
                                ? f / c
                                : c
                              : Math.max(c, f / c)) ||
                          0),
                        (h.b = f < 0 ? g - f : g);
                    }
                    return (
                      (f = (h[t] - h.min) / h.max),
                      h.b + (d ? d.getRatio(f) : f) * h.v
                    );
                  });
            }
            var y = 1e-8,
              t = O.default._internals,
              e = (d._internals = {}),
              v = t.isSelector,
              f = t.isArray,
              b = t.lazyTweens,
              w = t.lazyRender,
              s = O._gsScope._gsDefine.globals,
              o = (e.pauseCallback = function () {}),
              t = (d.prototype = new O.SimpleTimeline());
            return (
              (d.version = "2.1.3"),
              (d.distribute = m),
              (t.constructor = d),
              (t.kill()._gc = t._forcingPlayhead = t._hasPause = !1),
              (t.to = function (t, e, n, i) {
                var o = (n.repeat && s.TweenMax) || O.default;
                return e ? this.add(new o(t, e, n), i) : this.set(t, n, i);
              }),
              (t.from = function (t, e, n, i) {
                return this.add(
                  ((n.repeat && s.TweenMax) || O.default).from(t, e, u(0, n)),
                  i
                );
              }),
              (t.fromTo = function (t, e, n, i, o) {
                var r = (i.repeat && s.TweenMax) || O.default;
                return (
                  (i = u(0, i, n)),
                  e ? this.add(r.fromTo(t, e, n, i), o) : this.set(t, i, o)
                );
              }),
              (t.staggerTo = function (t, e, n, i, o, r, s, a) {
                var l,
                  u,
                  c = new d({
                    onComplete: r,
                    onCompleteParams: s,
                    callbackScope: a,
                    smoothChildTiming: this.smoothChildTiming,
                  }),
                  f = m(n.stagger || i),
                  h = n.startAt,
                  p = n.cycle;
                for (
                  "string" == typeof t && (t = O.default.selector(t) || t),
                    v((t = t || [])) &&
                      (t = (function (t) {
                        for (
                          var e = [], n = t.length, i = 0;
                          i !== n;
                          e.push(t[i++])
                        );
                        return e;
                      })(t)),
                    u = 0;
                  u < t.length;
                  u++
                )
                  (l = _(n)),
                    h && ((l.startAt = _(h)), h.cycle && g(l.startAt, t, u)),
                    p &&
                      (g(l, t, u),
                      null != l.duration &&
                        ((e = l.duration), delete l.duration)),
                    c.to(t[u], e, l, f(u, t[u], t));
                return this.add(c, o);
              }),
              (t.staggerFrom = function (t, e, n, i, o, r, s, a) {
                return (
                  (n.runBackwards = !0),
                  this.staggerTo(t, e, u(0, n), i, o, r, s, a)
                );
              }),
              (t.staggerFromTo = function (t, e, n, i, o, r, s, a, l) {
                return (
                  (i.startAt = n),
                  this.staggerTo(t, e, u(0, i, n), o, r, s, a, l)
                );
              }),
              (t.call = function (t, e, n, i) {
                return this.add(O.default.delayedCall(0, t, e, n), i);
              }),
              (t.set = function (t, e, n) {
                return this.add(new O.default(t, 0, u(0, e, null, !0)), n);
              }),
              (d.exportRoot = function (t, e) {
                null == (t = t || {}).smoothChildTiming &&
                  (t.smoothChildTiming = !0);
                var n,
                  i,
                  o,
                  r,
                  s = new d(t),
                  t = s._timeline;
                for (
                  null == e && (e = !0),
                    t._remove(s, !0),
                    s._startTime = 0,
                    s._rawPrevTime = s._time = s._totalTime = t._time,
                    o = t._first;
                  o;

                )
                  (r = o._next),
                    (e &&
                      o instanceof O.default &&
                      o.target === o.vars.onComplete) ||
                      ((i = o._startTime - o._delay) < 0 && (n = 1),
                      s.add(o, i)),
                    (o = r);
                return t.add(s, 0), n && s.totalDuration(), s;
              }),
              (t.add = function (t, e, n, i) {
                var o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c = this;
                if (
                  ("number" != typeof e &&
                    (e = c._parseTimeOrLabel(e, 0, !0, t)),
                  !(t instanceof O.Animation))
                ) {
                  if (t instanceof Array || (t && t.push && f(t))) {
                    for (
                      n = n || "normal", i = i || 0, o = e, r = t.length, s = 0;
                      s < r;
                      s++
                    )
                      f((a = t[s])) && (a = new d({ tweens: a })),
                        c.add(a, o),
                        "string" != typeof a &&
                          "function" != typeof a &&
                          ("sequence" === n
                            ? (o =
                                a._startTime + a.totalDuration() / a._timeScale)
                            : "start" === n && (a._startTime -= a.delay())),
                        (o += i);
                    return c._uncache(!0);
                  }
                  if ("string" == typeof t) return c.addLabel(t, e);
                  if ("function" != typeof t)
                    throw (
                      "Cannot add " +
                      t +
                      " into the timeline; it is not a tween, timeline, function, or string."
                    );
                  t = O.default.delayedCall(0, t);
                }
                if (
                  (O.SimpleTimeline.prototype.add.call(c, t, e),
                  (t._time || (!t._duration && t._initted)) &&
                    ((o = (c.rawTime() - t._startTime) * t._timeScale),
                    (!t._duration ||
                      1e-5 <
                        Math.abs(Math.max(0, Math.min(t.totalDuration(), o))) -
                          t._totalTime) &&
                      t.render(o, !1, !1)),
                  (c._gc || c._time === c._duration) &&
                    !c._paused &&
                    c._duration < c.duration())
                )
                  for (u = (l = c).rawTime() > t._startTime; l._timeline; )
                    u && l._timeline.smoothChildTiming
                      ? l.totalTime(l._totalTime, !0)
                      : l._gc && l._enabled(!0, !1),
                      (l = l._timeline);
                return c;
              }),
              (t.remove = function (t) {
                var e;
                if (t instanceof O.Animation)
                  return (
                    this._remove(t, !1),
                    (e = t._timeline =
                      t.vars.useFrames
                        ? O.Animation._rootFramesTimeline
                        : O.Animation._rootTimeline),
                    (t._startTime =
                      (t._paused ? t._pauseTime : e._time) -
                      (t._reversed
                        ? t.totalDuration() - t._totalTime
                        : t._totalTime) /
                        t._timeScale),
                    this
                  );
                if (t instanceof Array || (t && t.push && f(t))) {
                  for (var n = t.length; -1 < --n; ) this.remove(t[n]);
                  return this;
                }
                return "string" == typeof t
                  ? this.removeLabel(t)
                  : this.kill(null, t);
              }),
              (t._remove = function (t, e) {
                return (
                  O.SimpleTimeline.prototype._remove.call(this, t, e),
                  this._last
                    ? this._time > this.duration() &&
                      ((this._time = this._duration),
                      (this._totalTime = this._totalDuration))
                    : (this._time =
                        this._totalTime =
                        this._duration =
                        this._totalDuration =
                          0),
                  this
                );
              }),
              (t.append = function (t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
              }),
              (t.insert = t.insertMultiple =
                function (t, e, n, i) {
                  return this.add(t, e || 0, n, i);
                }),
              (t.appendMultiple = function (t, e, n, i) {
                return this.add(
                  t,
                  this._parseTimeOrLabel(null, e, !0, t),
                  n,
                  i
                );
              }),
              (t.addLabel = function (t, e) {
                return (this._labels[t] = this._parseTimeOrLabel(e)), this;
              }),
              (t.addPause = function (t, e, n, i) {
                n = O.default.delayedCall(0, o, n, i || this);
                return (
                  (n.vars.onComplete = n.vars.onReverseComplete = e),
                  (n.data = "isPause"),
                  (this._hasPause = !0),
                  this.add(n, t)
                );
              }),
              (t.removeLabel = function (t) {
                return delete this._labels[t], this;
              }),
              (t.getLabelTime = function (t) {
                return null != this._labels[t] ? this._labels[t] : -1;
              }),
              (t._parseTimeOrLabel = function (t, e, n, i) {
                var o, r;
                if (i instanceof O.Animation && i.timeline === this)
                  this.remove(i);
                else if (i && (i instanceof Array || (i.push && f(i))))
                  for (r = i.length; -1 < --r; )
                    i[r] instanceof O.Animation &&
                      i[r].timeline === this &&
                      this.remove(i[r]);
                if (
                  ((o =
                    "number" != typeof t || e
                      ? 99999999999 < this.duration()
                        ? this.recent().endTime(!1)
                        : this._duration
                      : 0),
                  "string" == typeof e)
                )
                  return this._parseTimeOrLabel(
                    e,
                    n && "number" == typeof t && null == this._labels[e]
                      ? t - o
                      : 0,
                    n
                  );
                if (
                  ((e = e || 0),
                  "string" != typeof t ||
                    (!isNaN(t) && null == this._labels[t]))
                )
                  null == t && (t = o);
                else {
                  if (-1 === (r = t.indexOf("=")))
                    return null == this._labels[t]
                      ? n
                        ? (this._labels[t] = o + e)
                        : e
                      : this._labels[t] + e;
                  (e =
                    parseInt(t.charAt(r - 1) + "1", 10) *
                    Number(t.substr(r + 1))),
                    (t =
                      1 < r
                        ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, n)
                        : o);
                }
                return Number(t) + e;
              }),
              (t.seek = function (t, e) {
                return this.totalTime(
                  "number" == typeof t ? t : this._parseTimeOrLabel(t),
                  !1 !== e
                );
              }),
              (t.stop = function () {
                return this.paused(!0);
              }),
              (t.gotoAndPlay = function (t, e) {
                return this.play(t, e);
              }),
              (t.gotoAndStop = function (t, e) {
                return this.pause(t, e);
              }),
              (t.render = function (t, e, n) {
                this._gc && this._enabled(!0, !1);
                var i,
                  o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f = this,
                  h = f._time,
                  p = f._dirty ? f.totalDuration() : f._totalDuration,
                  d = f._startTime,
                  _ = f._timeScale,
                  g = f._paused;
                if (
                  (h !== f._time && (t += f._time - h),
                  f._hasPause && !f._forcingPlayhead && !e)
                ) {
                  if (h < t)
                    for (i = f._first; i && i._startTime <= t && !l; )
                      i._duration ||
                        "isPause" !== i.data ||
                        i.ratio ||
                        (0 === i._startTime && 0 === f._rawPrevTime) ||
                        (l = i),
                        (i = i._next);
                  else
                    for (i = f._last; i && i._startTime >= t && !l; )
                      i._duration ||
                        ("isPause" === i.data && 0 < i._rawPrevTime && (l = i)),
                        (i = i._prev);
                  l &&
                    ((f._time = f._totalTime = t = l._startTime),
                    (c =
                      f._startTime +
                      (f._reversed ? f._duration - t : t) / f._timeScale));
                }
                if (p - y <= t && 0 <= t)
                  (f._totalTime = f._time = p),
                    f._reversed ||
                      f._hasPausedChild() ||
                      ((o = !0),
                      (s = "onComplete"),
                      (a = !!f._timeline.autoRemoveChildren),
                      0 === f._duration &&
                        ((t <= 0 && -y <= t) ||
                          f._rawPrevTime < 0 ||
                          f._rawPrevTime === y) &&
                        f._rawPrevTime !== t &&
                        f._first &&
                        ((a = !0),
                        f._rawPrevTime > y && (s = "onReverseComplete"))),
                    (f._rawPrevTime =
                      f._duration || !e || t || f._rawPrevTime === t ? t : y),
                    (t = p + 1e-4);
                else if (t < y)
                  if (
                    ((f._totalTime = f._time = 0),
                    -y < t && (t = 0),
                    (0 !== h ||
                      (0 === f._duration &&
                        f._rawPrevTime !== y &&
                        (0 < f._rawPrevTime ||
                          (t < 0 && 0 <= f._rawPrevTime)))) &&
                      ((s = "onReverseComplete"), (o = f._reversed)),
                    t < 0)
                  )
                    (f._active = !1),
                      f._timeline.autoRemoveChildren && f._reversed
                        ? ((a = o = !0), (s = "onReverseComplete"))
                        : 0 <= f._rawPrevTime && f._first && (a = !0),
                      (f._rawPrevTime = t);
                  else {
                    if (
                      ((f._rawPrevTime =
                        f._duration || !e || t || f._rawPrevTime === t ? t : y),
                      0 === t && o)
                    )
                      for (i = f._first; i && 0 === i._startTime; )
                        i._duration || (o = !1), (i = i._next);
                    (t = 0), f._initted || (a = !0);
                  }
                else f._totalTime = f._time = f._rawPrevTime = t;
                if ((f._time !== h && f._first) || n || a || l) {
                  if (
                    (f._initted || (f._initted = !0),
                    f._active ||
                      (!f._paused &&
                        f._time !== h &&
                        0 < t &&
                        (f._active = !0)),
                    0 !== h ||
                      !f.vars.onStart ||
                      (0 === f._time && f._duration) ||
                      e ||
                      f._callback("onStart"),
                    h <= (u = f._time))
                  )
                    for (
                      i = f._first;
                      i && ((r = i._next), u === f._time && (!f._paused || g));

                    )
                      (i._active ||
                        (i._startTime <= u && !i._paused && !i._gc)) &&
                        (l === i && (f.pause(), (f._pauseTime = c)),
                        i._reversed
                          ? i.render(
                              (i._dirty
                                ? i.totalDuration()
                                : i._totalDuration) -
                                (t - i._startTime) * i._timeScale,
                              e,
                              n
                            )
                          : i.render((t - i._startTime) * i._timeScale, e, n)),
                        (i = r);
                  else
                    for (
                      i = f._last;
                      i && ((r = i._prev), u === f._time && (!f._paused || g));

                    ) {
                      if (
                        i._active ||
                        (i._startTime <= h && !i._paused && !i._gc)
                      ) {
                        if (l === i) {
                          for (l = i._prev; l && l.endTime() > f._time; )
                            l.render(
                              l._reversed
                                ? l.totalDuration() -
                                    (t - l._startTime) * l._timeScale
                                : (t - l._startTime) * l._timeScale,
                              e,
                              n
                            ),
                              (l = l._prev);
                          (l = null), f.pause(), (f._pauseTime = c);
                        }
                        i._reversed
                          ? i.render(
                              (i._dirty
                                ? i.totalDuration()
                                : i._totalDuration) -
                                (t - i._startTime) * i._timeScale,
                              e,
                              n
                            )
                          : i.render((t - i._startTime) * i._timeScale, e, n);
                      }
                      i = r;
                    }
                  !f._onUpdate ||
                    e ||
                    (b.length && w(), f._callback("onUpdate")),
                    !s ||
                      f._gc ||
                      (d !== f._startTime && _ === f._timeScale) ||
                      ((0 === f._time || p >= f.totalDuration()) &&
                        (o &&
                          (b.length && w(),
                          f._timeline.autoRemoveChildren && f._enabled(!1, !1),
                          (f._active = !1)),
                        !e && f.vars[s] && f._callback(s)));
                }
              }),
              (t._hasPausedChild = function () {
                for (var t = this._first; t; ) {
                  if (t._paused || (t instanceof d && t._hasPausedChild()))
                    return !0;
                  t = t._next;
                }
                return !1;
              }),
              (t.getChildren = function (t, e, n, i) {
                i = i || -9999999999;
                for (var o = [], r = this._first, s = 0; r; )
                  r._startTime < i ||
                    (r instanceof O.default
                      ? !1 !== e && (o[s++] = r)
                      : (!1 !== n && (o[s++] = r),
                        !1 !== t &&
                          (s = (o = o.concat(r.getChildren(!0, e, n)))
                            .length))),
                    (r = r._next);
                return o;
              }),
              (t.getTweensOf = function (t, e) {
                var n,
                  i,
                  o = this._gc,
                  r = [],
                  s = 0;
                for (
                  o && this._enabled(!0, !0),
                    i = (n = O.default.getTweensOf(t)).length;
                  -1 < --i;

                )
                  (n[i].timeline === this || (e && this._contains(n[i]))) &&
                    (r[s++] = n[i]);
                return o && this._enabled(!1, !0), r;
              }),
              (t.recent = function () {
                return this._recent;
              }),
              (t._contains = function (t) {
                for (var e = t.timeline; e; ) {
                  if (e === this) return !0;
                  e = e.timeline;
                }
                return !1;
              }),
              (t.shiftChildren = function (t, e, n) {
                n = n || 0;
                for (var i, o = this._first, r = this._labels; o; )
                  o._startTime >= n && (o._startTime += t), (o = o._next);
                if (e) for (i in r) r[i] >= n && (r[i] += t);
                return this._uncache(!0);
              }),
              (t._kill = function (t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (
                  var n = e
                      ? this.getTweensOf(e)
                      : this.getChildren(!0, !0, !1),
                    i = n.length,
                    o = !1;
                  -1 < --i;

                )
                  n[i]._kill(t, e) && (o = !0);
                return o;
              }),
              (t.clear = function (t) {
                var e = this.getChildren(!1, !0, !0),
                  n = e.length;
                for (this._time = this._totalTime = 0; -1 < --n; )
                  e[n]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0);
              }),
              (t.invalidate = function () {
                for (var t = this._first; t; ) t.invalidate(), (t = t._next);
                return O.Animation.prototype.invalidate.call(this);
              }),
              (t._enabled = function (t, e) {
                if (t === this._gc)
                  for (var n = this._first; n; )
                    n._enabled(t, !0), (n = n._next);
                return O.SimpleTimeline.prototype._enabled.call(this, t, e);
              }),
              (t.totalTime = function (t, e, n) {
                this._forcingPlayhead = !0;
                var i = O.Animation.prototype.totalTime.apply(this, arguments);
                return (this._forcingPlayhead = !1), i;
              }),
              (t.duration = function (t) {
                return arguments.length
                  ? (0 !== this.duration() &&
                      0 !== t &&
                      this.timeScale(this._duration / t),
                    this)
                  : (this._dirty && this.totalDuration(), this._duration);
              }),
              (t.totalDuration = function (t) {
                if (arguments.length)
                  return t && this.totalDuration()
                    ? this.timeScale(this._totalDuration / t)
                    : this;
                if (this._dirty) {
                  for (
                    var e, n, i = 0, o = this, r = o._last, s = 999999999999;
                    r;

                  )
                    (e = r._prev),
                      r._dirty && r.totalDuration(),
                      r._startTime > s &&
                      o._sortChildren &&
                      !r._paused &&
                      !o._calculatingDuration
                        ? ((o._calculatingDuration = 1),
                          o.add(r, r._startTime - r._delay),
                          (o._calculatingDuration = 0))
                        : (s = r._startTime),
                      r._startTime < 0 &&
                        !r._paused &&
                        ((i -= r._startTime),
                        o._timeline.smoothChildTiming &&
                          ((o._startTime += r._startTime / o._timeScale),
                          (o._time -= r._startTime),
                          (o._totalTime -= r._startTime),
                          (o._rawPrevTime -= r._startTime)),
                        o.shiftChildren(-r._startTime, !1, -9999999999),
                        (s = 0)),
                      i <
                        (n = r._startTime + r._totalDuration / r._timeScale) &&
                        (i = n),
                      (r = e);
                  (o._duration = o._totalDuration = i), (o._dirty = !1);
                }
                return this._totalDuration;
              }),
              (t.paused = function (t) {
                if (!1 === t && this._paused)
                  for (var e = this._first; e; )
                    e._startTime === this._time &&
                      "isPause" === e.data &&
                      (e._rawPrevTime = 0),
                      (e = e._next);
                return O.Animation.prototype.paused.apply(this, arguments);
              }),
              (t.usesFrames = function () {
                for (var t = this._timeline; t._timeline; ) t = t._timeline;
                return t === O.Animation._rootFramesTimeline;
              }),
              (t.rawTime = function (t) {
                return t &&
                  (this._paused ||
                    (this._repeat &&
                      0 < this.time() &&
                      this.totalProgress() < 1))
                  ? this._totalTime % (this._duration + this._repeatDelay)
                  : this._paused
                  ? this._totalTime
                  : (this._timeline.rawTime(t) - this._startTime) *
                    this._timeScale;
              }),
              d
            );
          },
          !0
        ),
        O.globals.TimelineLite),
      o =
        (O._gsScope._gsDefine(
          "TimelineMax",
          ["TimelineLite", "TweenLite", "easing.Ease"],
          function () {
            function t(t) {
              i.call(this, t),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                (this._cycle = 0),
                (this._yoyo = !!this.vars.yoyo),
                (this._dirty = !0);
            }
            var S = 1e-8,
              e = O.default._internals,
              E = e.lazyTweens,
              k = e.lazyRender,
              a = O._gsScope._gsDefine.globals,
              l = new O.Ease(null, null, 1, 0),
              e = (t.prototype = new i());
            return (
              (e.constructor = t),
              (e.kill()._gc = !1),
              (t.version = "2.1.3"),
              (e.invalidate = function () {
                return (
                  (this._yoyo = !!this.vars.yoyo),
                  (this._repeat = this.vars.repeat || 0),
                  (this._repeatDelay = this.vars.repeatDelay || 0),
                  this._uncache(!0),
                  i.prototype.invalidate.call(this)
                );
              }),
              (e.addCallback = function (t, e, n, i) {
                return this.add(O.default.delayedCall(0, t, n, i), e);
              }),
              (e.removeCallback = function (t, e) {
                if (t)
                  if (null == e) this._kill(null, t);
                  else
                    for (
                      var n = this.getTweensOf(t, !1),
                        i = n.length,
                        o = this._parseTimeOrLabel(e);
                      -1 < --i;

                    )
                      n[i]._startTime === o && n[i]._enabled(!1, !1);
                return this;
              }),
              (e.removePause = function (t) {
                return this.removeCallback(i._internals.pauseCallback, t);
              }),
              (e.tweenTo = function (t, e) {
                e = e || {};
                var n,
                  i,
                  o,
                  r = {
                    ease: l,
                    useFrames: this.usesFrames(),
                    immediateRender: !1,
                    lazy: !1,
                  },
                  s = (e.repeat && a.TweenMax) || O.default;
                for (i in e) r[i] = e[i];
                return (
                  (r.time = this._parseTimeOrLabel(t)),
                  (n =
                    Math.abs(Number(r.time) - this._time) / this._timeScale ||
                    0.001),
                  (o = new s(this, n, r)),
                  (r.onStart = function () {
                    o.target.paused(!0),
                      o.vars.time === o.target.time() ||
                        n !== o.duration() ||
                        o.isFromTo ||
                        o
                          .duration(
                            Math.abs(o.vars.time - o.target.time()) /
                              o.target._timeScale
                          )
                          .render(o.time(), !0, !0),
                      e.onStart &&
                        e.onStart.apply(
                          e.onStartScope || e.callbackScope || o,
                          e.onStartParams || []
                        );
                  }),
                  o
                );
              }),
              (e.tweenFromTo = function (t, e, n) {
                (n = n || {}),
                  (t = this._parseTimeOrLabel(t)),
                  (n.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this,
                  }),
                  (n.immediateRender = !1 !== n.immediateRender);
                e = this.tweenTo(e, n);
                return (
                  (e.isFromTo = 1),
                  e.duration(
                    Math.abs(e.vars.time - t) / this._timeScale || 0.001
                  )
                );
              }),
              (e.render = function (t, e, n) {
                this._gc && this._enabled(!0, !1);
                var i,
                  o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f = this,
                  h = f._time,
                  p = f._dirty ? f.totalDuration() : f._totalDuration,
                  d = f._duration,
                  _ = f._totalTime,
                  g = f._startTime,
                  m = f._timeScale,
                  y = f._rawPrevTime,
                  v = f._paused,
                  b = f._cycle;
                if ((h !== f._time && (t += f._time - h), p - S <= t && 0 <= t))
                  f._locked || ((f._totalTime = p), (f._cycle = f._repeat)),
                    f._reversed ||
                      f._hasPausedChild() ||
                      ((o = !0),
                      (s = "onComplete"),
                      (a = !!f._timeline.autoRemoveChildren),
                      0 === f._duration &&
                        ((t <= 0 && -S <= t) || y < 0 || y === S) &&
                        y !== t &&
                        f._first &&
                        ((a = !0), S < y && (s = "onReverseComplete"))),
                    (f._rawPrevTime =
                      f._duration || !e || t || f._rawPrevTime === t ? t : S),
                    f._yoyo && 1 & f._cycle
                      ? (f._time = t = 0)
                      : (t = (f._time = d) + 1e-4);
                else if (t < S)
                  if (
                    (f._locked || (f._totalTime = f._cycle = 0),
                    (f._time = 0),
                    -S < t && (t = 0),
                    (0 !== h ||
                      (0 === d &&
                        y !== S &&
                        (0 < y || (t < 0 && 0 <= y)) &&
                        !f._locked)) &&
                      ((s = "onReverseComplete"), (o = f._reversed)),
                    t < 0)
                  )
                    (f._active = !1),
                      f._timeline.autoRemoveChildren && f._reversed
                        ? ((a = o = !0), (s = "onReverseComplete"))
                        : 0 <= y && f._first && (a = !0),
                      (f._rawPrevTime = t);
                  else {
                    if (
                      ((f._rawPrevTime =
                        d || !e || t || f._rawPrevTime === t ? t : S),
                      0 === t && o)
                    )
                      for (i = f._first; i && 0 === i._startTime; )
                        i._duration || (o = !1), (i = i._next);
                    (t = 0), f._initted || (a = !0);
                  }
                else
                  0 === d && y < 0 && (a = !0),
                    (f._time = f._rawPrevTime = t),
                    f._locked ||
                      ((f._totalTime = t),
                      0 !== f._repeat &&
                        ((w = d + f._repeatDelay),
                        (f._cycle = (f._totalTime / w) >> 0),
                        f._cycle &&
                          f._cycle === f._totalTime / w &&
                          _ <= t &&
                          f._cycle--,
                        (f._time = f._totalTime - f._cycle * w),
                        f._yoyo && 1 & f._cycle && (f._time = d - f._time),
                        f._time > d
                          ? (t = (f._time = d) + 1e-4)
                          : f._time < 0
                          ? (f._time = t = 0)
                          : (t = f._time)));
                if (f._hasPause && !f._forcingPlayhead && !e) {
                  if (h < (t = f._time) || (f._repeat && b !== f._cycle))
                    for (i = f._first; i && i._startTime <= t && !l; )
                      i._duration ||
                        "isPause" !== i.data ||
                        i.ratio ||
                        (0 === i._startTime && 0 === f._rawPrevTime) ||
                        (l = i),
                        (i = i._next);
                  else
                    for (i = f._last; i && i._startTime >= t && !l; )
                      i._duration ||
                        ("isPause" === i.data && 0 < i._rawPrevTime && (l = i)),
                        (i = i._prev);
                  l &&
                    ((c =
                      f._startTime +
                      (f._reversed
                        ? f._duration - l._startTime
                        : l._startTime) /
                        f._timeScale),
                    l._startTime < d &&
                      ((f._time = f._rawPrevTime = t = l._startTime),
                      (f._totalTime =
                        t + f._cycle * (f._totalDuration + f._repeatDelay))));
                }
                if (f._cycle !== b && !f._locked) {
                  var w = f._yoyo && 0 != (1 & b),
                    x = w === (f._yoyo && 0 != (1 & f._cycle)),
                    T = f._totalTime,
                    O = f._cycle,
                    P = f._rawPrevTime,
                    C = f._time;
                  if (
                    ((f._totalTime = b * d),
                    f._cycle < b ? (w = !w) : (f._totalTime += d),
                    (f._time = h),
                    (f._rawPrevTime = 0 === d ? y - 1e-4 : y),
                    (f._cycle = b),
                    (f._locked = !0),
                    f.render((h = w ? 0 : d), e, 0 === d),
                    e ||
                      f._gc ||
                      (f.vars.onRepeat &&
                        ((f._cycle = O),
                        (f._locked = !1),
                        f._callback("onRepeat"))),
                    h !== f._time)
                  )
                    return;
                  if (
                    (x &&
                      ((f._cycle = b),
                      (f._locked = !0),
                      f.render((h = w ? d + 1e-4 : -1e-4), !0, !1)),
                    (f._locked = !1),
                    f._paused && !v)
                  )
                    return;
                  (f._time = C),
                    (f._totalTime = T),
                    (f._cycle = O),
                    (f._rawPrevTime = P);
                }
                if ((f._time !== h && f._first) || n || a || l) {
                  if (
                    (f._initted || (f._initted = !0),
                    f._active ||
                      (!f._paused &&
                        f._totalTime !== _ &&
                        0 < t &&
                        (f._active = !0)),
                    0 !== _ ||
                      !f.vars.onStart ||
                      (0 === f._totalTime && f._totalDuration) ||
                      e ||
                      f._callback("onStart"),
                    h <= (u = f._time))
                  )
                    for (
                      i = f._first;
                      i && ((r = i._next), u === f._time && (!f._paused || v));

                    )
                      (i._active ||
                        (i._startTime <= f._time && !i._paused && !i._gc)) &&
                        (l === i && (f.pause(), (f._pauseTime = c)),
                        i._reversed
                          ? i.render(
                              (i._dirty
                                ? i.totalDuration()
                                : i._totalDuration) -
                                (t - i._startTime) * i._timeScale,
                              e,
                              n
                            )
                          : i.render((t - i._startTime) * i._timeScale, e, n)),
                        (i = r);
                  else
                    for (
                      i = f._last;
                      i && ((r = i._prev), u === f._time && (!f._paused || v));

                    ) {
                      if (
                        i._active ||
                        (i._startTime <= h && !i._paused && !i._gc)
                      ) {
                        if (l === i) {
                          for (l = i._prev; l && l.endTime() > f._time; )
                            l.render(
                              l._reversed
                                ? l.totalDuration() -
                                    (t - l._startTime) * l._timeScale
                                : (t - l._startTime) * l._timeScale,
                              e,
                              n
                            ),
                              (l = l._prev);
                          (l = null), f.pause(), (f._pauseTime = c);
                        }
                        i._reversed
                          ? i.render(
                              (i._dirty
                                ? i.totalDuration()
                                : i._totalDuration) -
                                (t - i._startTime) * i._timeScale,
                              e,
                              n
                            )
                          : i.render((t - i._startTime) * i._timeScale, e, n);
                      }
                      i = r;
                    }
                  !f._onUpdate ||
                    e ||
                    (E.length && k(), f._callback("onUpdate")),
                    !s ||
                      f._locked ||
                      f._gc ||
                      (g !== f._startTime && m === f._timeScale) ||
                      ((0 === f._time || p >= f.totalDuration()) &&
                        (o &&
                          (E.length && k(),
                          f._timeline.autoRemoveChildren && f._enabled(!1, !1),
                          (f._active = !1)),
                        !e && f.vars[s] && f._callback(s)));
                } else
                  _ !== f._totalTime &&
                    f._onUpdate &&
                    !e &&
                    f._callback("onUpdate");
              }),
              (e.getActive = function (t, e, n) {
                for (
                  var i,
                    o = [],
                    r = this.getChildren(t || null == t, e || null == t, !!n),
                    s = 0,
                    a = r.length,
                    l = 0;
                  l < a;
                  l++
                )
                  (i = r[l]).isActive() && (o[s++] = i);
                return o;
              }),
              (e.getLabelAfter = function (t) {
                t || (0 !== t && (t = this._time));
                for (
                  var e = this.getLabelsArray(), n = e.length, i = 0;
                  i < n;
                  i++
                )
                  if (e[i].time > t) return e[i].name;
                return null;
              }),
              (e.getLabelBefore = function (t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), n = e.length; -1 < --n; )
                  if (e[n].time < t) return e[n].name;
                return null;
              }),
              (e.getLabelsArray = function () {
                var t,
                  e = [],
                  n = 0;
                for (t in this._labels)
                  e[n++] = { time: this._labels[t], name: t };
                return (
                  e.sort(function (t, e) {
                    return t.time - e.time;
                  }),
                  e
                );
              }),
              (e.invalidate = function () {
                return (this._locked = !1), i.prototype.invalidate.call(this);
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                        this._cycle * (this._duration + this._repeatDelay),
                      e
                    )
                  : this._time / this.duration() || 0;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this._totalTime / this.totalDuration() || 0;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? -1 !== this._repeat && t
                    ? this.timeScale(this.totalDuration() / t)
                    : this
                  : (this._dirty &&
                      (i.prototype.totalDuration.call(this),
                      (this._totalDuration =
                        -1 === this._repeat
                          ? 999999999999
                          : this._duration * (this._repeat + 1) +
                            this._repeatDelay * this._repeat)),
                    this._totalDuration);
              }),
              (e.time = function (t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                  i = this._cycle,
                  o = i * (n + this._repeatDelay);
                return (
                  n < t && (t = n),
                  this.totalTime(
                    this._yoyo && 1 & i ? n - t + o : this._repeat ? t + o : t,
                    e
                  )
                );
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t), this._uncache(!0))
                  : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                return arguments.length
                  ? ((this._repeatDelay = t), this._uncache(!0))
                  : this._repeatDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              (e.currentLabel = function (t) {
                return arguments.length
                  ? this.seek(t, !0)
                  : this.getLabelBefore(this._time + S);
              }),
              t
            );
          },
          !0
        ),
        O.globals.TimelineMax),
      e =
        (O._gsScope._gsDefine(
          "TweenMax",
          ["core.Animation", "core.SimpleTimeline", "TweenLite"],
          function () {
            function _(t) {
              for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]));
              return e;
            }
            function g(t, e, n) {
              var i,
                o,
                r = t.cycle;
              for (i in r)
                (o = r[i]),
                  (t[i] =
                    "function" == typeof o ? o(n, e[n], e) : o[n % o.length]);
              delete t.cycle;
            }
            function m(t) {
              var p, d, _, g, m, y, v, b;
              return "function" == typeof t
                ? t
                : ((d = (p = "object" == typeof t ? t : { each: t }).ease),
                  (_ = p.from || 0),
                  (g = p.base || 0),
                  (m = {}),
                  (y = isNaN(_)),
                  (v = p.axis),
                  (b = { center: 0.5, end: 1 }[_] || 0),
                  function (t, e, n) {
                    var i,
                      o,
                      r,
                      s,
                      a,
                      l,
                      u,
                      c,
                      f = (n || p).length,
                      h = m[f];
                    if (!h) {
                      if (
                        !(c = "auto" === p.grid ? 0 : (p.grid || [1 / 0])[0])
                      ) {
                        for (
                          l = -1 / 0;
                          l < (l = n[c++].getBoundingClientRect().left) &&
                          c < f;

                        );
                        c--;
                      }
                      for (
                        h = m[f] = [],
                          i = y ? Math.min(c, f) * b - 0.5 : _ % c,
                          o = y ? (f * b) / c - 0.5 : (_ / c) | 0,
                          u = 1 / (l = 0),
                          a = 0;
                        a < f;
                        a++
                      )
                        (s = (a % c) - i),
                          (r = o - ((a / c) | 0)),
                          (h[a] = s =
                            v
                              ? Math.abs("y" === v ? r : s)
                              : Math.sqrt(s * s + r * r)),
                          l < s && (l = s),
                          s < u && (u = s);
                      (h.max = l - u),
                        (h.min = u),
                        (h.v = f =
                          p.amount ||
                          p.each *
                            (f < c
                              ? f - 1
                              : v
                              ? "y" === v
                                ? f / c
                                : c
                              : Math.max(c, f / c)) ||
                          0),
                        (h.b = f < 0 ? g - f : g);
                    }
                    return (
                      (f = (h[t] - h.min) / h.max),
                      h.b + (d ? d.getRatio(f) : f) * h.v
                    );
                  });
            }
            function y(t, e, n) {
              O.default.call(this, t, e, n),
                (this._cycle = 0),
                (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                this._repeat && this._uncache(!0),
                (this.render = y.prototype.render);
            }
            function r(t, e) {
              for (var n = [], i = 0, o = t._first; o; )
                o instanceof O.default
                  ? (n[i++] = o)
                  : (e && (n[i++] = o), (i = (n = n.concat(r(o, e))).length)),
                  (o = o._next);
              return n;
            }
            function i(t, e, n, i) {
              (e = !1 !== e), (n = !1 !== n);
              for (
                var o, r, s = c((i = !1 !== i)), a = e && n && i, l = s.length;
                -1 < --l;

              )
                (r = s[l]),
                  (a ||
                    r instanceof O.SimpleTimeline ||
                    ((o = r.target === r.vars.onComplete) && n) ||
                    (e && !o)) &&
                    r.paused(t);
            }
            var v = 1e-8,
              b = O.default._internals,
              w = b.isSelector,
              x = b.isArray,
              t = (y.prototype = O.default.to({}, 0.1, {})),
              T = [],
              c =
                ((y.version = "2.1.3"),
                (t.constructor = y),
                (t.kill()._gc = !1),
                (y.killTweensOf = y.killDelayedCallsTo =
                  O.default.killTweensOf),
                (y.getTweensOf = O.default.getTweensOf),
                (y.lagSmoothing = O.default.lagSmoothing),
                (y.ticker = O.default.ticker),
                (y.render = O.default.render),
                (y.distribute = m),
                (t.invalidate = function () {
                  return (
                    (this._yoyo =
                      !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                    (this._repeat = this.vars.repeat || 0),
                    (this._repeatDelay = this.vars.repeatDelay || 0),
                    (this._yoyoEase = null),
                    this._uncache(!0),
                    O.default.prototype.invalidate.call(this)
                  );
                }),
                (t.updateTo = function (t, e) {
                  var n,
                    i = this,
                    o = i.ratio,
                    r = i.vars.immediateRender || t.immediateRender;
                  for (n in (e &&
                    i._startTime < i._timeline._time &&
                    ((i._startTime = i._timeline._time),
                    i._uncache(!1),
                    i._gc
                      ? i._enabled(!0, !1)
                      : i._timeline.insert(i, i._startTime - i._delay)),
                  t))
                    i.vars[n] = t[n];
                  if (i._initted || r)
                    if (e) (i._initted = !1), r && i.render(0, !0, !0);
                    else if (
                      (i._gc && i._enabled(!0, !1),
                      i._notifyPluginsOfEnabled &&
                        i._firstPT &&
                        O.default._onPluginEvent("_onDisable", i),
                      0.998 < i._time / i._duration)
                    ) {
                      e = i._totalTime;
                      i.render(0, !0, !1),
                        (i._initted = !1),
                        i.render(e, !0, !1);
                    } else if (((i._initted = !1), i._init(), 0 < i._time || r))
                      for (var s, a = 1 / (1 - o), l = i._firstPT; l; )
                        (s = l.s + l.c),
                          (l.c *= a),
                          (l.s = s - l.c),
                          (l = l._next);
                  return i;
                }),
                (t.render = function (t, e, n) {
                  this._initted ||
                    (0 === this._duration &&
                      this.vars.repeat &&
                      this.invalidate());
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    u,
                    c = this,
                    f = c._dirty ? c.totalDuration() : c._totalDuration,
                    h = c._time,
                    p = c._totalTime,
                    d = c._cycle,
                    _ = c._duration,
                    g = c._rawPrevTime;
                  if (
                    (f - v <= t && 0 <= t
                      ? ((c._totalTime = f),
                        (c._cycle = c._repeat),
                        c._yoyo && 0 != (1 & c._cycle)
                          ? ((c._time = 0),
                            (c.ratio = c._ease._calcEnd
                              ? c._ease.getRatio(0)
                              : 0))
                          : ((c._time = _),
                            (c.ratio = c._ease._calcEnd
                              ? c._ease.getRatio(1)
                              : 1)),
                        c._reversed ||
                          ((i = !0),
                          (o = "onComplete"),
                          (n = n || c._timeline.autoRemoveChildren)),
                        0 !== _ ||
                          (!c._initted && c.vars.lazy && !n) ||
                          (c._startTime === c._timeline._duration && (t = 0),
                          (g < 0 ||
                            (t <= 0 && -v <= t) ||
                            (g === v && "isPause" !== c.data)) &&
                            g !== t &&
                            ((n = !0), v < g && (o = "onReverseComplete")),
                          (c._rawPrevTime = l = !e || t || g === t ? t : v)))
                      : t < v
                      ? ((c._totalTime = c._time = c._cycle = 0),
                        (c.ratio = c._ease._calcEnd ? c._ease.getRatio(0) : 0),
                        (0 !== p || (0 === _ && 0 < g)) &&
                          ((o = "onReverseComplete"), (i = c._reversed)),
                        -v < t
                          ? (t = 0)
                          : t < 0 &&
                            ((c._active = !1),
                            0 !== _ ||
                              (!c._initted && c.vars.lazy && !n) ||
                              (0 <= g && (n = !0),
                              (c._rawPrevTime = l =
                                !e || t || g === t ? t : v))),
                        c._initted || (n = !0))
                      : ((c._totalTime = c._time = t),
                        0 !== c._repeat &&
                          ((f = _ + c._repeatDelay),
                          (c._cycle = (c._totalTime / f) >> 0),
                          0 !== c._cycle &&
                            c._cycle === c._totalTime / f &&
                            p <= t &&
                            c._cycle--,
                          (c._time = c._totalTime - c._cycle * f),
                          c._yoyo &&
                            0 != (1 & c._cycle) &&
                            ((c._time = _ - c._time),
                            (u = c._yoyoEase || c.vars.yoyoEase) &&
                              (c._yoyoEase ||
                                (!0 !== u || c._initted
                                  ? (c._yoyoEase = u =
                                      !0 === u
                                        ? c._ease
                                        : u instanceof O.Ease
                                        ? u
                                        : O.Ease.map[u])
                                  : ((u = c.vars.ease),
                                    (c._yoyoEase = u =
                                      u
                                        ? u instanceof O.Ease
                                          ? u
                                          : "function" == typeof u
                                          ? new O.Ease(u, c.vars.easeParams)
                                          : O.Ease.map[u] ||
                                            O.default.defaultEase
                                        : O.default.defaultEase))),
                              (c.ratio = u
                                ? 1 - u.getRatio((_ - c._time) / _)
                                : 0))),
                          c._time > _
                            ? (c._time = _)
                            : c._time < 0 && (c._time = 0)),
                        c._easeType && !u
                          ? ((f = c._time / _),
                            (1 === (s = c._easeType) ||
                              (3 === s && 0.5 <= f)) &&
                              (f = 1 - f),
                            3 === s && (f *= 2),
                            1 === (a = c._easePower)
                              ? (f *= f)
                              : 2 === a
                              ? (f *= f * f)
                              : 3 === a
                              ? (f *= f * f * f)
                              : 4 === a && (f *= f * f * f * f),
                            (c.ratio =
                              1 === s
                                ? 1 - f
                                : 2 === s
                                ? f
                                : c._time / _ < 0.5
                                ? f / 2
                                : 1 - f / 2))
                          : u || (c.ratio = c._ease.getRatio(c._time / _))),
                    h !== c._time || n || d !== c._cycle)
                  ) {
                    if (!c._initted) {
                      if ((c._init(), !c._initted || c._gc)) return;
                      if (
                        !n &&
                        c._firstPT &&
                        ((!1 !== c.vars.lazy && c._duration) ||
                          (c.vars.lazy && !c._duration))
                      )
                        return (
                          (c._time = h),
                          (c._totalTime = p),
                          (c._rawPrevTime = g),
                          (c._cycle = d),
                          b.lazyTweens.push(c),
                          void (c._lazy = [t, e])
                        );
                      !c._time || i || u
                        ? i &&
                          this._ease._calcEnd &&
                          !u &&
                          (c.ratio = c._ease.getRatio(0 === c._time ? 0 : 1))
                        : (c.ratio = c._ease.getRatio(c._time / _));
                    }
                    for (
                      !1 !== c._lazy && (c._lazy = !1),
                        c._active ||
                          (!c._paused &&
                            c._time !== h &&
                            0 <= t &&
                            (c._active = !0)),
                        0 === p &&
                          (2 === c._initted && 0 < t && c._init(),
                          c._startAt &&
                            (0 <= t
                              ? c._startAt.render(t, !0, n)
                              : (o = o || "_dummyGS")),
                          !c.vars.onStart ||
                            (0 === c._totalTime && 0 !== _) ||
                            e ||
                            c._callback("onStart")),
                        r = c._firstPT;
                      r;

                    )
                      r.f
                        ? r.t[r.p](r.c * c.ratio + r.s)
                        : (r.t[r.p] = r.c * c.ratio + r.s),
                        (r = r._next);
                    c._onUpdate &&
                      (t < 0 &&
                        c._startAt &&
                        c._startTime &&
                        c._startAt.render(t, !0, n),
                      e ||
                        (c._totalTime === p && !o) ||
                        c._callback("onUpdate")),
                      c._cycle === d ||
                        e ||
                        c._gc ||
                        (c.vars.onRepeat && c._callback("onRepeat")),
                      !o ||
                        (c._gc && !n) ||
                        (t < 0 &&
                          c._startAt &&
                          !c._onUpdate &&
                          c._startTime &&
                          c._startAt.render(t, !0, n),
                        i &&
                          (c._timeline.autoRemoveChildren && c._enabled(!1, !1),
                          (c._active = !1)),
                        !e && c.vars[o] && c._callback(o),
                        0 === _ &&
                          c._rawPrevTime === v &&
                          l !== v &&
                          (c._rawPrevTime = 0));
                  } else
                    p !== c._totalTime &&
                      c._onUpdate &&
                      !e &&
                      c._callback("onUpdate");
                }),
                (y.to = function (t, e, n) {
                  return new y(t, e, n);
                }),
                (y.from = function (t, e, n) {
                  return (
                    (n.runBackwards = !0),
                    (n.immediateRender = 0 != n.immediateRender),
                    new y(t, e, n)
                  );
                }),
                (y.fromTo = function (t, e, n, i) {
                  return (
                    (i.startAt = n),
                    (i.immediateRender =
                      0 != i.immediateRender && 0 != n.immediateRender),
                    new y(t, e, i)
                  );
                }),
                (y.staggerTo = y.allTo =
                  function (t, e, n, i, o, r, s) {
                    var a,
                      l,
                      u,
                      c,
                      f = [],
                      h = m(n.stagger || i),
                      p = n.cycle,
                      d = (n.startAt || T).cycle;
                    for (
                      x(t) ||
                        ("string" == typeof t &&
                          (t = O.default.selector(t) || t),
                        w(t) && (t = _(t))),
                        a = (t = t || []).length - 1,
                        u = 0;
                      u <= a;
                      u++
                    ) {
                      for (c in ((l = {}), n)) l[c] = n[c];
                      if (
                        (p &&
                          (g(l, t, u),
                          null != l.duration &&
                            ((e = l.duration), delete l.duration)),
                        d)
                      ) {
                        for (c in ((d = l.startAt = {}), n.startAt))
                          d[c] = n.startAt[c];
                        g(l.startAt, t, u);
                      }
                      (l.delay = h(u, t[u], t) + (l.delay || 0)),
                        u === a &&
                          o &&
                          (l.onComplete = function () {
                            n.onComplete &&
                              n.onComplete.apply(
                                n.onCompleteScope || this,
                                arguments
                              ),
                              o.apply(s || n.callbackScope || this, r || T);
                          }),
                        (f[u] = new y(t[u], e, l));
                    }
                    return f;
                  }),
                (y.staggerFrom = y.allFrom =
                  function (t, e, n, i, o, r, s) {
                    return (
                      (n.runBackwards = !0),
                      (n.immediateRender = 0 != n.immediateRender),
                      y.staggerTo(t, e, n, i, o, r, s)
                    );
                  }),
                (y.staggerFromTo = y.allFromTo =
                  function (t, e, n, i, o, r, s, a) {
                    return (
                      (i.startAt = n),
                      (i.immediateRender =
                        0 != i.immediateRender && 0 != n.immediateRender),
                      y.staggerTo(t, e, i, o, r, s, a)
                    );
                  }),
                (y.delayedCall = function (t, e, n, i, o) {
                  return new y(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    useFrames: o,
                    overwrite: 0,
                  });
                }),
                (y.set = function (t, e) {
                  return new y(t, 0, e);
                }),
                (y.isTweening = function (t) {
                  return 0 < O.default.getTweensOf(t, !0).length;
                }),
                (y.getAllTweens = function (t) {
                  return r(O.Animation._rootTimeline, t).concat(
                    r(O.Animation._rootFramesTimeline, t)
                  );
                }));
            (y.killAll = function (t, e, n, i) {
              null == e && (e = !0), null == n && (n = !0);
              for (
                var o, r, s = c(0 != i), a = s.length, l = e && n && i, u = 0;
                u < a;
                u++
              )
                (r = s[u]),
                  (l ||
                    r instanceof O.SimpleTimeline ||
                    ((o = r.target === r.vars.onComplete) && n) ||
                    (e && !o)) &&
                    (t
                      ? r.totalTime(r._reversed ? 0 : r.totalDuration())
                      : r._enabled(!1, !1));
            }),
              (y.killChildTweensOf = function (t, e) {
                if (null != t) {
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a = b.tweenLookup;
                  if (
                    ("string" == typeof t && (t = O.default.selector(t) || t),
                    w(t) && (t = _(t)),
                    x(t))
                  )
                    for (r = t.length; -1 < --r; ) y.killChildTweensOf(t[r], e);
                  else {
                    for (o in ((n = []), a))
                      for (i = a[o].target.parentNode; i; )
                        i === t && (n = n.concat(a[o].tweens)),
                          (i = i.parentNode);
                    for (s = n.length, r = 0; r < s; r++)
                      e && n[r].totalTime(n[r].totalDuration()),
                        n[r]._enabled(!1, !1);
                  }
                }
              });
            return (
              (y.pauseAll = function (t, e, n) {
                i(!0, t, e, n);
              }),
              (y.resumeAll = function (t, e, n) {
                i(!1, t, e, n);
              }),
              (y.globalTimeScale = function (t) {
                var e = O.Animation._rootTimeline,
                  n = O.default.ticker.time;
                return arguments.length
                  ? ((e._startTime =
                      n - ((n - e._startTime) * e._timeScale) / (t = t || v)),
                    (e = O.Animation._rootFramesTimeline),
                    (n = O.default.ticker.frame),
                    (e._startTime =
                      n - ((n - e._startTime) * e._timeScale) / t),
                    (e._timeScale = O.Animation._rootTimeline._timeScale = t))
                  : e._timeScale;
              }),
              (t.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                        this._cycle * (this._duration + this._repeatDelay),
                      e
                    )
                  : this.duration()
                  ? this._time / this._duration
                  : this.ratio;
              }),
              (t.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this._totalTime / this.totalDuration();
              }),
              (t.time = function (t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                  i = this._cycle,
                  o = i * (n + this._repeatDelay);
                return (
                  n < t && (t = n),
                  this.totalTime(
                    this._yoyo && 1 & i ? n - t + o : this._repeat ? t + o : t,
                    e
                  )
                );
              }),
              (t.duration = function (t) {
                return arguments.length
                  ? O.Animation.prototype.duration.call(this, t)
                  : this._duration;
              }),
              (t.totalDuration = function (t) {
                return arguments.length
                  ? -1 === this._repeat
                    ? this
                    : this.duration(
                        (t - this._repeat * this._repeatDelay) /
                          (this._repeat + 1)
                      )
                  : (this._dirty &&
                      ((this._totalDuration =
                        -1 === this._repeat
                          ? 999999999999
                          : this._duration * (this._repeat + 1) +
                            this._repeatDelay * this._repeat),
                      (this._dirty = !1)),
                    this._totalDuration);
              }),
              (t.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t), this._uncache(!0))
                  : this._repeat;
              }),
              (t.repeatDelay = function (t) {
                return arguments.length
                  ? ((this._repeatDelay = t), this._uncache(!0))
                  : this._repeatDelay;
              }),
              (t.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              y
            );
          },
          !0
        ),
        O.globals.TweenMax),
      r = n(9),
      s = O._gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (t, e, n, i) {
          var o, r;
          if ("function" != typeof t.setAttribute) return !1;
          for (o in e)
            "function" == typeof (r = e[o]) && (r = r(i, t)),
              this._addTween(
                t,
                "setAttribute",
                t.getAttribute(o) + "",
                r + "",
                o,
                !1,
                o
              ),
              this._overwriteProps.push(o);
          return !0;
        },
      }),
      a = O._gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function (t, e, n) {
          return (this._tween = n), !0;
        },
      }),
      n = a.prototype,
      l =
        ((n._onInitAllProps = function () {
          var t,
            e,
            n,
            i,
            o = this._tween,
            r = o.vars.roundProps,
            s = {},
            a = o._propLookup.roundProps;
          if ("object" != typeof r || r.push)
            for (
              n = (r = "string" == typeof r ? r.split(",") : r).length;
              -1 < --n;

            )
              s[r[n]] = Math.round;
          else
            for (i in r)
              s[i] = (function (e) {
                var n = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                return function (t) {
                  return ((Math.round(t / e) * e * n) | 0) / n;
                };
              })(r[i]);
          for (i in s)
            for (t = o._firstPT; t; ) {
              if (((e = t._next), t.pg)) t.t._mod(s);
              else if (t.n === i)
                if (2 === t.f && t.t)
                  for (var l = t.t._firstPT, u = s[i]; l; )
                    l.f || l.blob || (l.m = u || Math.round), (l = l._next);
                else
                  this._add(t.t, i, t.s, t.c, s[i]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : o._firstPT === t && (o._firstPT = e),
                    (t._next = t._prev = null),
                    (o._propLookup[i] = a);
              t = e;
            }
          return !1;
        }),
        (n._add = function (t, e, n, i, o) {
          this._addTween(t, e, n, n + i, e, o || Math.round),
            this._overwriteProps.push(e);
        }),
        O._gsScope._gsDefine.plugin({
          propName: "directionalRotation",
          version: "0.3.1",
          API: 2,
          init: function (t, e, n, i) {
            "object" != typeof e && (e = { rotation: e }), (this.finals = {});
            var o,
              r,
              s,
              a,
              l,
              u = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (o in e)
              "useRadians" !== o &&
                ((r = (l = (
                  (a = "function" == typeof (a = e[o]) ? a(i, t) : a) + ""
                ).split("_"))[0]),
                (s = parseFloat(
                  "function" != typeof t[o]
                    ? t[o]
                    : t[
                        o.indexOf("set") ||
                        "function" != typeof t["get" + o.substr(3)]
                          ? o
                          : "get" + o.substr(3)
                      ]()
                )),
                (a =
                  (a = this.finals[o] =
                    "string" == typeof r && "=" === r.charAt(1)
                      ? s +
                        parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))
                      : Number(r) || 0) - s),
                l.length &&
                  (-1 !== (r = l.join("_")).indexOf("short") &&
                    (a %= u) !== a % (u / 2) &&
                    (a = a < 0 ? a + u : a - u),
                  -1 !== r.indexOf("_cw") && a < 0
                    ? (a = ((a + 9999999999 * u) % u) - ((a / u) | 0) * u)
                    : -1 !== r.indexOf("ccw") &&
                      0 < a &&
                      (a = ((a - 9999999999 * u) % u) - ((a / u) | 0) * u)),
                (1e-6 < a || a < -1e-6) &&
                  (this._addTween(t, o, s, s + a, o),
                  this._overwriteProps.push(o)));
            return !0;
          },
          set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else
              for (e = this._firstPT; e; )
                e.f
                  ? e.t[e.p](this.finals[e.p])
                  : (e.t[e.p] = this.finals[e.p]),
                  (e = e._next);
          },
        })),
      P = ((l._autoCSS = !0), 180 / Math.PI),
      D = [],
      j = [],
      N = [],
      B = {},
      u = O._gsScope._gsDefine.globals,
      F = function (t, e, n, i) {
        n === i && (n = i - (i - e) / 1e6),
          t === e && (e = t + (n - t) / 1e6),
          (this.a = t),
          (this.b = e),
          (this.c = n),
          (this.d = i),
          (this.da = i - t),
          (this.ca = n - t),
          (this.ba = e - t);
      },
      z = function (t, e, n, i) {
        var o = { a: t },
          r = {},
          s = {},
          a = { c: i },
          l = (t + e) / 2,
          e = (e + n) / 2,
          n = (n + i) / 2,
          u = (l + e) / 2,
          e = (e + n) / 2,
          c = (e - u) / 8;
        return (
          (o.b = l + (t - l) / 4),
          (r.b = u + c),
          (o.c = r.a = (o.b + r.b) / 2),
          (r.c = s.a = (u + e) / 2),
          (s.b = e - c),
          (a.b = n + (i - n) / 4),
          (s.c = a.a = (s.b + a.b) / 2),
          [o, r, s, a]
        );
      },
      g = O._gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.9",
        API: 2,
        global: !0,
        init: function (t, e, n) {
          (this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var i,
            o,
            r,
            s,
            a,
            l = e.values || [],
            u = {},
            c = l[0],
            f = e.autoRotate || n.vars.orientToBezier;
          for (i in ((this._autoRotate = f
            ? f instanceof Array
              ? f
              : [["x", "y", "rotation", (!0 !== f && Number(f)) || 0]]
            : null),
          c))
            this._props.push(i);
          for (r = this._props.length; -1 < --r; )
            (i = this._props[r]),
              this._overwriteProps.push(i),
              (o = this._func[i] = "function" == typeof t[i]),
              (u[i] = o
                ? t[
                    i.indexOf("set") ||
                    "function" != typeof t["get" + i.substr(3)]
                      ? i
                      : "get" + i.substr(3)
                  ]()
                : parseFloat(t[i])),
              a || (u[i] !== l[0][i] && (a = u));
          if (
            ((this._beziers =
              "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                ? h(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    "thruBasic" === e.type,
                    e.correlate,
                    a
                  )
                : (function (t, e, n) {
                    var i,
                      o,
                      r,
                      s,
                      a,
                      l,
                      u,
                      c,
                      f,
                      h,
                      p,
                      d = {},
                      _ = "cubic" === (e = e || "soft") ? 3 : 2,
                      g = "soft" === e,
                      m = [];
                    if (
                      null == (t = g && n ? [n].concat(t) : t) ||
                      t.length < 1 + _
                    )
                      throw "invalid Bezier data";
                    for (f in t[0]) m.push(f);
                    for (l = m.length; -1 < --l; ) {
                      for (
                        d[(f = m[l])] = a = [], c = t.length, u = h = 0;
                        u < c;
                        u++
                      )
                        (i =
                          null == n
                            ? t[u][f]
                            : "string" == typeof (p = t[u][f]) &&
                              "=" === p.charAt(1)
                            ? n[f] + Number(p.charAt(0) + p.substr(2))
                            : Number(p)),
                          g &&
                            1 < u &&
                            u < c - 1 &&
                            (a[h++] = (i + a[h - 2]) / 2),
                          (a[h++] = i);
                      for (c = h - _ + 1, u = h = 0; u < c; u += _)
                        (i = a[u]),
                          (o = a[u + 1]),
                          (r = a[u + 2]),
                          (s = 2 == _ ? 0 : a[u + 3]),
                          (a[h++] = p =
                            3 == _
                              ? new F(i, o, r, s)
                              : new F(i, (2 * o + i) / 3, (2 * o + r) / 3, r));
                      a.length = h;
                    }
                    return d;
                  })(l, e.type, u)),
            (this._segCount = this._beziers[i].length),
            this._timeRes &&
              ((c = (function (t, e) {
                var n,
                  i,
                  o,
                  r,
                  s = [],
                  a = [],
                  l = 0,
                  u = 0,
                  c = (e = e >> 0 || 6) - 1,
                  f = [],
                  h = [];
                for (n in t) {
                  w = b = v = y = w = m = g = _ = d = p = v = C = P = void 0;
                  for (
                    var p,
                      d,
                      _,
                      g,
                      m,
                      y,
                      v,
                      b,
                      w,
                      x = t[n],
                      T = s,
                      O = e,
                      P = 1 / O,
                      C = x.length;
                    -1 < --C;

                  )
                    for (
                      d = (b = x[C]).a,
                        _ = b.d - d,
                        g = b.c - d,
                        m = b.b - d,
                        p = 0,
                        y = 1;
                      y <= O;
                      y++
                    )
                      (v =
                        p -
                        (p =
                          ((w = P * y) * w * _ +
                            3 * (v = 1 - w) * (w * g + v * m)) *
                          w)),
                        (T[(w = C * O + y - 1)] = (T[w] || 0) + v * v);
                }
                for (o = s.length, i = 0; i < o; i++)
                  (l += Math.sqrt(s[i])),
                    (h[(r = i % e)] = l),
                    r == c &&
                      ((u += l),
                      (f[(r = (i / e) >> 0)] = h),
                      (a[r] = u),
                      (l = 0),
                      (h = []));
                return { length: u, lengths: a, segments: f };
              })(this._beziers, this._timeRes)),
              (this._length = c.length),
              (this._lengths = c.lengths),
              (this._segments = c.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length)),
            (f = this._autoRotate))
          )
            for (
              this._initialRotations = [],
                f[0] instanceof Array || (this._autoRotate = f = [f]),
                r = f.length;
              -1 < --r;

            ) {
              for (s = 0; s < 3; s++)
                (i = f[r][s]),
                  (this._func[i] =
                    "function" == typeof t[i] &&
                    t[
                      i.indexOf("set") ||
                      "function" != typeof t["get" + i.substr(3)]
                        ? i
                        : "get" + i.substr(3)
                    ]);
              (i = f[r][2]),
                (this._initialRotations[r] =
                  (this._func[i]
                    ? this._func[i].call(this._target)
                    : this._target[i]) || 0),
                this._overwriteProps.push(i);
            }
          return (this._startRatio = n.vars.runBackwards ? 1 : 0), !0;
        },
        set: function (t) {
          var e,
            n,
            i,
            o,
            r,
            s,
            a,
            l,
            u,
            c,
            f = this._segCount,
            h = this._func,
            p = this._target,
            d = t !== this._startRatio;
          if (this._timeRes) {
            if (
              ((l = this._lengths),
              (u = this._curSeg),
              (c = t * this._length),
              (T = this._li),
              c > this._l2 && T < f - 1)
            ) {
              for (a = f - 1; T < a && (this._l2 = l[++T]) <= c; );
              (this._l1 = l[T - 1]),
                (this._li = T),
                (this._curSeg = u = this._segments[T]),
                (this._s2 = u[(this._s1 = this._si = 0)]);
            } else if (c < this._l1 && 0 < T) {
              for (; 0 < T && (this._l1 = l[--T]) >= c; );
              0 === T && c < this._l1 ? (this._l1 = 0) : T++,
                (this._l2 = l[T]),
                (this._li = T),
                (this._curSeg = u = this._segments[T]),
                (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
                (this._s2 = u[this._si]);
            }
            if (
              ((e = T),
              (c -= this._l1),
              (T = this._si),
              c > this._s2 && T < u.length - 1)
            ) {
              for (a = u.length - 1; T < a && (this._s2 = u[++T]) <= c; );
              (this._s1 = u[T - 1]), (this._si = T);
            } else if (c < this._s1 && 0 < T) {
              for (; 0 < T && (this._s1 = u[--T]) >= c; );
              0 === T && c < this._s1 ? (this._s1 = 0) : T++,
                (this._s2 = u[T]),
                (this._si = T);
            }
            r =
              1 === t
                ? 1
                : (T + (c - this._s1) / (this._s2 - this._s1)) * this._prec ||
                  0;
          } else
            r =
              (t - (e = t < 0 ? 0 : 1 <= t ? f - 1 : (f * t) >> 0) * (1 / f)) *
              f;
          for (n = 1 - r, T = this._props.length; -1 < --T; )
            (i = this._props[T]),
              (s =
                (r * r * (o = this._beziers[i][e]).da +
                  3 * n * (r * o.ca + n * o.ba)) *
                  r +
                o.a),
              this._mod[i] && (s = this._mod[i](s, p)),
              h[i] ? p[i](s) : (p[i] = s);
          if (this._autoRotate)
            for (
              var _, g, m, y, v, b, w, x = this._autoRotate, T = x.length;
              -1 < --T;

            )
              (i = x[T][2]),
                (b = x[T][3] || 0),
                (w = !0 === x[T][4] ? 1 : P),
                (o = this._beziers[x[T][0]]),
                (_ = this._beziers[x[T][1]]),
                o &&
                  _ &&
                  ((o = o[e]),
                  (_ = _[e]),
                  (g = o.a + (o.b - o.a) * r),
                  (g += ((y = o.b + (o.c - o.b) * r) - g) * r),
                  (y += (o.c + (o.d - o.c) * r - y) * r),
                  (m = _.a + (_.b - _.a) * r),
                  (m += ((v = _.b + (_.c - _.b) * r) - m) * r),
                  (v += (_.c + (_.d - _.c) * r - v) * r),
                  (s = d
                    ? Math.atan2(v - m, y - g) * w + b
                    : this._initialRotations[T]),
                  this._mod[i] && (s = this._mod[i](s, p)),
                  h[i] ? p[i](s) : (p[i] = s));
        },
      }),
      n = g.prototype,
      c =
        ((g.bezierThrough = h),
        (g.cubicToQuadratic = z),
        (g._autoCSS = !0),
        (g.quadraticToCubic = function (t, e, n) {
          return new F(t, (2 * e + t) / 3, (2 * e + n) / 3, n);
        }),
        (g._cssRegister = function () {
          var p,
            d,
            _,
            t = u.CSSPlugin;
          t &&
            ((t = t._internals),
            (p = t._parseToProxy),
            (d = t._setPluginRatio),
            (_ = t.CSSPropTween),
            t._registerComplexSpecialProp("bezier", {
              parser: function (t, e, n, i, o, r) {
                e instanceof Array && (e = { values: e }), (r = new g());
                var s,
                  a,
                  l,
                  u = e.values,
                  c = u.length - 1,
                  f = [],
                  h = {};
                if (!(c < 0)) {
                  for (s = 0; s <= c; s++)
                    (l = p(t, u[s], i, o, r, c !== s)), (f[s] = l.end);
                  for (a in e) h[a] = e[a];
                  (h.values = f),
                    ((o = new _(t, "bezier", 0, 0, l.pt, 2)).data = l),
                    (o.plugin = r),
                    (o.setRatio = d),
                    0 === h.autoRotate && (h.autoRotate = !0),
                    !h.autoRotate ||
                      h.autoRotate instanceof Array ||
                      ((s = !0 === h.autoRotate ? 0 : Number(h.autoRotate)),
                      (h.autoRotate =
                        null != l.end.left
                          ? [["left", "top", "rotation", s, !1]]
                          : null != l.end.x && [
                              ["x", "y", "rotation", s, !1],
                            ])),
                    h.autoRotate &&
                      (i._transform || i._enableTransforms(!1),
                      (l.autoRotate = i._target._gsTransform),
                      (l.proxy.rotation = l.autoRotate.rotation || 0),
                      i._overwriteProps.push("rotation")),
                    r._onInitTween(l.proxy, h, i._tween);
                }
                return o;
              },
            }));
        }),
        (n._mod = function (t) {
          for (var e, n = this._overwriteProps, i = n.length; -1 < --i; )
            (e = t[n[i]]) && "function" == typeof e && (this._mod[n[i]] = e);
        }),
        (n._kill = function (t) {
          var e,
            n,
            i = this._props;
          for (e in this._beziers)
            if (e in t)
              for (
                delete this._beziers[e], delete this._func[e], n = i.length;
                -1 < --n;

              )
                i[n] === e && i.splice(n, 1);
          if ((i = this._autoRotate))
            for (n = i.length; -1 < --n; ) t[i[n][2]] && i.splice(n, 1);
          return this._super._kill.call(this, t);
        }),
        O._gsScope._gsDefine(
          "easing.Back",
          ["easing.Ease"],
          function () {
            function t(t, e) {
              var n = ((t = c("easing." + t, function () {}, !0)).prototype =
                new O.Ease());
              return (n.constructor = t), (n.getRatio = e), t;
            }
            function e(t, e, n, i, o) {
              return (
                (e = c(
                  "easing." + t,
                  { easeOut: new e(), easeIn: new n(), easeInOut: new i() },
                  !0
                )),
                f(e, t),
                e
              );
            }
            function g(t, e, n) {
              (this.t = t),
                (this.v = e),
                n &&
                  ((((this.next = n).prev = this).c = n.v - e),
                  (this.gap = n.t - t));
            }
            function n(t, e) {
              var n = c(
                "easing." + t,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              );
              return (
                ((t = n.prototype = new O.Ease()).constructor = n),
                (t.getRatio = e),
                (t.config = function (t) {
                  return new n(t);
                }),
                n
              );
            }
            var i,
              o,
              r,
              s = O._gsScope.GreenSockGlobals || O._gsScope,
              a = s.com.greensock,
              l = 2 * Math.PI,
              u = Math.PI / 2,
              c = a._class,
              f = O.Ease.register || function () {},
              a = e(
                "Back",
                n("BackOut", function (t) {
                  return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                }),
                n("BackIn", function (t) {
                  return t * t * ((this._p1 + 1) * t - this._p1);
                }),
                n("BackInOut", function (t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                    : 0.5 *
                        ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                })
              ),
              h = c(
                "easing.SlowMo",
                function (t, e, n) {
                  (e = e || 0 === e ? e : 0.7),
                    null == t ? (t = 0.7) : 1 < t && (t = 1),
                    (this._p = 1 !== t ? e : 0),
                    (this._p1 = (1 - t) / 2),
                    (this._p2 = t),
                    (this._p3 = this._p1 + this._p2),
                    (this._calcEnd = !0 === n);
                },
                !0
              ),
              p = (h.prototype = new O.Ease());
            return (
              (p.constructor = h),
              (p.getRatio = function (t) {
                var e = t + (0.5 - t) * this._p;
                return t < this._p1
                  ? this._calcEnd
                    ? 1 - (t = 1 - t / this._p1) * t
                    : e - (t = 1 - t / this._p1) * t * t * t * e
                  : t > this._p3
                  ? this._calcEnd
                    ? 1 === t
                      ? 0
                      : 1 - (t = (t - this._p3) / this._p1) * t
                    : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                  : this._calcEnd
                  ? 1
                  : e;
              }),
              (h.ease = new h(0.7, 0.7)),
              (p.config = h.config =
                function (t, e, n) {
                  return new h(t, e, n);
                }),
              ((p = (i = c(
                "easing.SteppedEase",
                function (t, e) {
                  (this._p1 = 1 / (t = t || 1)),
                    (this._p2 = t + (e ? 0 : 1)),
                    (this._p3 = e ? 1 : 0);
                },
                !0
              )).prototype =
                new O.Ease()).constructor = i),
              (p.getRatio = function (t) {
                return (
                  t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999),
                  (((this._p2 * t) | 0) + this._p3) * this._p1
                );
              }),
              (p.config = i.config =
                function (t, e) {
                  return new i(t, e);
                }),
              ((p = (o = c(
                "easing.ExpoScaleEase",
                function (t, e, n) {
                  (this._p1 = Math.log(e / t)),
                    (this._p2 = e - t),
                    (this._p3 = t),
                    (this._ease = n);
                },
                !0
              )).prototype =
                new O.Ease()).constructor = o),
              (p.getRatio = function (t) {
                return (
                  this._ease && (t = this._ease.getRatio(t)),
                  (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                );
              }),
              (p.config = o.config =
                function (t, e, n) {
                  return new o(t, e, n);
                }),
              ((p = (r = c(
                "easing.RoughEase",
                function (t) {
                  for (
                    var e,
                      n,
                      i,
                      o,
                      r,
                      s,
                      a = (t = t || {}).taper || "none",
                      l = [],
                      u = 0,
                      c = 0 | (t.points || 20),
                      f = c,
                      h = !1 !== t.randomize,
                      p = !0 === t.clamp,
                      d = t.template instanceof O.Ease ? t.template : null,
                      _ =
                        "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                    -1 < --f;

                  )
                    (e = h ? Math.random() : (1 / c) * f),
                      (n = d ? d.getRatio(e) : e),
                      (i =
                        "none" === a
                          ? _
                          : "out" === a
                          ? (o = 1 - e) * o * _
                          : "in" === a
                          ? e * e * _
                          : e < 0.5
                          ? (o = 2 * e) * o * 0.5 * _
                          : (o = 2 * (1 - e)) * o * 0.5 * _),
                      h
                        ? (n += Math.random() * i - 0.5 * i)
                        : f % 2
                        ? (n += 0.5 * i)
                        : (n -= 0.5 * i),
                      p && (1 < n ? (n = 1) : n < 0 && (n = 0)),
                      (l[u++] = { x: e, y: n });
                  for (
                    l.sort(function (t, e) {
                      return t.x - e.x;
                    }),
                      s = new g(1, 1, null),
                      f = c;
                    -1 < --f;

                  )
                    (r = l[f]), (s = new g(r.x, r.y, s));
                  this._prev = new g(0, 0, 0 !== s.t ? s : s.next);
                },
                !0
              )).prototype =
                new O.Ease()).constructor = r),
              (p.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                  for (; e.next && t >= e.t; ) e = e.next;
                  e = e.prev;
                } else for (; e.prev && t <= e.t; ) e = e.prev;
                return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
              }),
              (p.config = function (t) {
                return new r(t);
              }),
              (r.ease = new r()),
              e(
                "Bounce",
                t("BounceOut", function (t) {
                  return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                }),
                t("BounceIn", function (t) {
                  return (t = 1 - t) < 1 / 2.75
                    ? 1 - 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                    : t < 2.5 / 2.75
                    ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                    : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                }),
                t("BounceInOut", function (t) {
                  var e = t < 0.5;
                  return (
                    (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                      ? (t *= 7.5625 * t)
                      : (t =
                          t < 2 / 2.75
                            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                            : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                    e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                  );
                })
              ),
              e(
                "Circ",
                t("CircOut", function (t) {
                  return Math.sqrt(1 - (t -= 1) * t);
                }),
                t("CircIn", function (t) {
                  return -(Math.sqrt(1 - t * t) - 1);
                }),
                t("CircInOut", function (t) {
                  return (t *= 2) < 1
                    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                })
              ),
              e(
                "Elastic",
                (p = function (t, e, n) {
                  var i = c(
                      "easing." + t,
                      function (t, e) {
                        (this._p1 = 1 <= t ? t : 1),
                          (this._p2 = (e || n) / (t < 1 ? t : 1)),
                          (this._p3 =
                            (this._p2 / l) * (Math.asin(1 / this._p1) || 0)),
                          (this._p2 = l / this._p2);
                      },
                      !0
                    ),
                    t = (i.prototype = new O.Ease());
                  return (
                    (t.constructor = i),
                    (t.getRatio = e),
                    (t.config = function (t, e) {
                      return new i(t, e);
                    }),
                    i
                  );
                })(
                  "ElasticOut",
                  function (t) {
                    return (
                      this._p1 *
                        Math.pow(2, -10 * t) *
                        Math.sin((t - this._p3) * this._p2) +
                      1
                    );
                  },
                  0.3
                ),
                p(
                  "ElasticIn",
                  function (t) {
                    return -(
                      this._p1 *
                      Math.pow(2, 10 * --t) *
                      Math.sin((t - this._p3) * this._p2)
                    );
                  },
                  0.3
                ),
                p(
                  "ElasticInOut",
                  function (t) {
                    return (t *= 2) < 1
                      ? this._p1 *
                          Math.pow(2, 10 * --t) *
                          Math.sin((t - this._p3) * this._p2) *
                          -0.5
                      : this._p1 *
                          Math.pow(2, -10 * --t) *
                          Math.sin((t - this._p3) * this._p2) *
                          0.5 +
                          1;
                  },
                  0.45
                )
              ),
              e(
                "Expo",
                t("ExpoOut", function (t) {
                  return 1 - Math.pow(2, -10 * t);
                }),
                t("ExpoIn", function (t) {
                  return Math.pow(2, 10 * (t - 1)) - 0.001;
                }),
                t("ExpoInOut", function (t) {
                  return (t *= 2) < 1
                    ? 0.5 * Math.pow(2, 10 * (t - 1))
                    : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                })
              ),
              e(
                "Sine",
                t("SineOut", function (t) {
                  return Math.sin(t * u);
                }),
                t("SineIn", function (t) {
                  return 1 - Math.cos(t * u);
                }),
                t("SineInOut", function (t) {
                  return -0.5 * (Math.cos(Math.PI * t) - 1);
                })
              ),
              c(
                "easing.EaseLookup",
                {
                  find: function (t) {
                    return O.Ease.map[t];
                  },
                },
                !0
              ),
              f(s.SlowMo, "SlowMo", "ease,"),
              f(r, "RoughEase", "ease,"),
              f(i, "SteppedEase", "ease,"),
              a
            );
          },
          !0
        ),
        O.globals.Back),
      f = O.globals.Elastic,
      p = O.globals.Bounce,
      d = O.globals.RoughEase,
      _ = O.globals.SlowMo,
      m = O.globals.SteppedEase,
      y = O.globals.Circ,
      v = O.globals.Expo,
      b = O.globals.Sine,
      w = O.globals.ExpoScaleEase,
      x = e;
    x._autoActivated = [i, o, r.a, s, g, a, l, c, f, p, d, _, m, y, v, b, w];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(3);
    function o() {
      (this._backgroundColor = "#ffffff"),
        (this._foregroundColor = "#1E1E1E"),
        (this._backgroundColorChange = new i.SignalDispatcher()),
        (this._foregroundColorChange = new i.SignalDispatcher());
    }
    Object.defineProperty(o, "Instance", {
      get: function () {
        return (
          null == this._instance && (this._instance = new o()), this._instance
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(o.prototype, "onBackgroundColorChange", {
        get: function () {
          return this._backgroundColorChange.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "backgroundColor", {
        get: function () {
          return this._backgroundColor;
        },
        set: function (t) {
          t !== this._backgroundColor &&
            ((this._backgroundColor = t),
            this._backgroundColorChange.dispatch());
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "onForegroundColorChange", {
        get: function () {
          return this._foregroundColorChange.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "foregroundColor", {
        get: function () {
          return this._foregroundColor;
        },
        set: function (t) {
          t !== this._foregroundColor &&
            ((this._foregroundColor = t),
            this._foregroundColorChange.dispatch());
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.default = o);
  },
  function (t, e, n) {
    "use strict";
    function i() {
      var s = this;
      (this._lastRenderTime = 0),
        (this._totalTime = 0),
        (this._deltaTime = 0),
        (this._renderItems = []),
        (this._killItems = []),
        (this.render = function () {
          for (
            var t,
              e = Date.now(),
              n = (e - s._lastRenderTime) / 1e3,
              i =
                ((s._lastRenderTime = e),
                (s._totalTime += n),
                (s._deltaTime = n),
                s._renderItems.length),
              o = 0;
            o < i;
            o += 1
          )
            !0 !== (t = s._renderItems[o]).killed && t.render(s._deltaTime);
          for (; 0 < s._killItems.length; ) {
            var r = s._renderItems.indexOf(s._killItems[0]);
            -1 !== r && s._renderItems.splice(r, 1), s._killItems.shift();
          }
        }),
        (this._lastRenderTime = Date.now());
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.RenderItem = void 0),
      Object.defineProperty(i, "Instance", {
        get: function () {
          var t = this;
          return (
            null === this._instance &&
              ((this._instance = new i()),
              setInterval(function () {
                t._instance.render();
              }, 1e3 / 60)),
            this._instance
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.add = function (t, e) {
        t = new o(t, (e = void 0 === e ? 60 : e));
        return this._renderItems.push(t), t;
      }),
      (i.prototype.remove = function (t) {
        (t.killed = !0), this._killItems.push(t);
      }),
      (i._instance = null),
      (e.default = i);
    r.prototype.render = function (t) {
      (this.totalTime += t), (this.deltaTime += t);
      t = 1 / this._fps;
      this.deltaTime < t ||
        (this.renderFunction(this.deltaTime, this.totalTime),
        (this.deltaTime = 0));
    };
    var o = r;
    function r(t, e) {
      (this.totalTime = 0),
        (this.deltaTime = 0),
        (this.killed = !1),
        (this.renderFunction = t),
        (this._fps = e);
    }
    e.RenderItem = o;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(6)),
      u = s(n(154)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.awake = function () {
          l.default.Instance.onBackgroundColorChange.sub(
            this.onBackgroundChange
          ),
            l.default.Instance.onForegroundColorChange.sub(
              this.onForegroundChange
            ),
            this.backgroundChange(l.default.Instance.backgroundColor),
            this.foregroundChange(l.default.Instance.foregroundColor);
        }),
        (c.prototype.sleep = function () {
          l.default.Instance.onBackgroundColorChange.unsub(
            this.onBackgroundChange
          ),
            l.default.Instance.onForegroundColorChange.unsub(
              this.onForegroundChange
            );
        }),
        (c.prototype.backgroundChange = function (t) {}),
        (c.prototype.foregroundChange = function (t) {}),
        (c.prototype.getOpacityFromBorderStyle = function (t) {
          return -1 === t.indexOf("rgba")
            ? 1
            : ((t = (t = t.split("rgba")[1].split(","))[t.length - 1]),
              Number(u.default.getAlphaNumeric(t)));
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onBackgroundChange = function () {
          t.backgroundChange(l.default.Instance.backgroundColor);
        }),
        (t.onForegroundChange = function () {
          t.foregroundChange(l.default.Instance.foregroundColor);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var Qt = n(0),
      i =
        (Qt._gsScope._gsDefine(
          "plugins.CSSPlugin",
          ["plugins.TweenPlugin", "TweenLite"],
          function () {
            function A() {
              Qt.TweenPlugin.call(this, "css"),
                (this._overwriteProps.length = 0),
                (this.setRatio = A.prototype.setRatio);
            }
            function s(t, e) {
              return e.toUpperCase();
            }
            function a(t, e) {
              return (e = R.createElementNS
                ? R.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
                : R.createElement(t)).style
                ? e
                : R.createElement(t);
            }
            function l(t) {
              return nt.test(
                "string" == typeof t
                  ? t
                  : (t.currentStyle || t.style).filter || ""
              )
                ? parseFloat(RegExp.$1) / 100
                : 1;
            }
            function g(t) {
              Qt._gsScope.console;
            }
            function x(t, e) {
              var n,
                i,
                o = (e = e || j).style;
              if (void 0 !== o[t]) return t;
              for (
                t = t.charAt(0).toUpperCase() + t.substr(1),
                  n = ["O", "Moz", "ms", "Ms", "Webkit"],
                  i = 5;
                -1 < --i && void 0 === o[n[i] + t];

              );
              return 0 <= i
                ? ((gt =
                    "-" + (mt = 3 === i ? "ms" : n[i]).toLowerCase() + "-"),
                  mt + t)
                : null;
            }
            function d(t) {
              return yt.getComputedStyle(t);
            }
            function h(t, e) {
              var n,
                i,
                o = {};
              if ((e = e || d(t)))
                if ((n = e.length))
                  for (; -1 < --n; )
                    (-1 !== (i = e[n]).indexOf("-transform") && zt !== i) ||
                      (o[i.replace(at, s)] = e.getPropertyValue(i));
                else
                  for (n in e)
                    (-1 !== n.indexOf("Transform") && V !== n) || (o[n] = e[n]);
              else if ((e = t.currentStyle || t.style))
                for (n in e)
                  "string" == typeof n &&
                    void 0 === o[n] &&
                    (o[n.replace(at, s)] = e[n]);
              return (
                N || (o.opacity = l(t)),
                (t = Gt(t, e, !1)),
                (o.rotation = t.rotation),
                (o.skewX = t.skewX),
                (o.scaleX = t.scaleX),
                (o.scaleY = t.scaleY),
                (o.x = t.x),
                (o.y = t.y),
                U &&
                  ((o.z = t.z),
                  (o.rotationX = t.rotationX),
                  (o.rotationY = t.rotationY),
                  (o.scaleZ = t.scaleZ)),
                o.filters && delete o.filters,
                o
              );
            }
            function m(t, e, n, i, o) {
              var r,
                s,
                a,
                l = {},
                u = t.style;
              for (s in n)
                "cssText" === s ||
                  ("length" !== s &&
                    isNaN(s) &&
                    (e[s] !== (r = n[s]) || (o && o[s])) &&
                    -1 === s.indexOf("Origin") &&
                    ("number" == typeof r || "string" == typeof r) &&
                    ((l[s] =
                      "auto" !== r || ("left" !== s && "top" !== s)
                        ? ("" !== r && "auto" !== r && "none" !== r) ||
                          "string" != typeof e[s] ||
                          "" === e[s].replace(tt, "")
                          ? r
                          : 0
                        : vt(t, s)),
                    void 0 !== u[s] && (a = new Ct(u, s, u[s], a))));
              if (i) for (s in i) "className" !== s && (l[s] = i[s]);
              return { difs: l, firstMPT: a };
            }
            function C(t, e) {
              return "string" ==
                typeof (t = "function" == typeof t ? t(k, E) : t) &&
                "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0;
            }
            function O(t, e) {
              var n =
                "string" == typeof (t = "function" == typeof t ? t(k, E) : t) &&
                "=" === t.charAt(1);
              return null ==
                (t =
                  "string" == typeof t && "v" === t.charAt(t.length - 2)
                    ? (n ? t.substr(0, 2) : 0) +
                      window[
                        "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                      ] *
                        (parseFloat(n ? t.substr(2) : t) / 100)
                    : t)
                ? e
                : n
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0;
            }
            function P(t, e, n, i) {
              var o, r, s;
              return (r =
                (r =
                  null == (t = "function" == typeof t ? t(k, E) : t)
                    ? e
                    : "number" == typeof t
                    ? t
                    : ((o = 360),
                      (r = t.split("_")),
                      (s =
                        ((s = "=" === t.charAt(1))
                          ? parseInt(t.charAt(0) + "1", 10) *
                            parseFloat(r[0].substr(2))
                          : parseFloat(r[0])) *
                          (-1 === t.indexOf("rad") ? 1 : L) -
                        (s ? 0 : e)),
                      r.length &&
                        (i && (i[n] = e + s),
                        -1 !== t.indexOf("short") &&
                          (s %= o) !== s % 180 &&
                          (s = s < 0 ? s + o : s - o),
                        -1 !== t.indexOf("_cw") && s < 0
                          ? (s = ((s + 3599999999640) % o) - ((s / o) | 0) * o)
                          : -1 !== t.indexOf("ccw") &&
                            0 < s &&
                            (s =
                              ((s - 3599999999640) % o) - ((s / o) | 0) * o)),
                      e + s)) < 1e-6 && -1e-6 < r
                  ? 0
                  : r);
            }
            function c(t, e, n) {
              return (
                (255 *
                  (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
                    ? e + (n - e) * t * 6
                    : t < 0.5
                    ? n
                    : 3 * t < 2
                    ? e + (n - e) * (2 / 3 - t) * 6
                    : e) +
                  0.5) |
                0
              );
            }
            function u(t, e) {
              var n,
                i,
                o,
                r = t.match(z) || [],
                s = 0,
                a = "";
              if (!r.length) return t;
              for (n = 0; n < r.length; n++)
                (i = r[n]),
                  (s +=
                    (o = t.substr(s, t.indexOf(i, s) - s)).length + i.length),
                  3 === (i = Tt(i, e)).length && i.push(1),
                  (a +=
                    o +
                    (e
                      ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3]
                      : "rgba(" + i.join(",")) +
                    ")");
              return a + t.substr(s);
            }
            var p,
              W,
              S,
              y,
              Y,
              v,
              b,
              G,
              Z,
              w,
              E,
              k,
              K = Qt._gsScope._gsDefine.globals,
              _ = {},
              t = (A.prototype = new Qt.TweenPlugin("css")),
              I =
                (((t.constructor = A).version = "2.1.3"),
                (A.API = 2),
                (A.defaultTransformPerspective = 0),
                (A.defaultSkewType = "compensated"),
                (A.defaultSmoothOrigin = !0),
                (A.suffixMap = {
                  top: (t = "px"),
                  right: t,
                  bottom: t,
                  left: t,
                  width: t,
                  height: t,
                  fontSize: t,
                  padding: t,
                  margin: t,
                  perspective: t,
                  lineHeight: "",
                }),
                /(?:\-|\.|\b)(\d|\.|e\-)+/g),
              $ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
              J = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
              Q = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
              tt = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
              et = /(?:\d|\-|\+|=|#|\.)*/g,
              nt = /opacity *= *([^)]*)/i,
              it = /opacity:([^;]*)/i,
              ot = /alpha\(opacity *=.+?\)/i,
              rt = /^(rgb|hsl)/,
              st = /([A-Z])/g,
              at = /-([a-z])/gi,
              lt = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
              ut = /(?:Left|Right|Width)/i,
              ct = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
              ft = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
              M = /,(?=[^\)]*(?:\(|$))/gi,
              ht = /[\s,\(]/i,
              D = Math.PI / 180,
              L = 180 / Math.PI,
              pt = {},
              dt = { style: {} },
              R = Qt._gsScope.document || {
                createElement: function () {
                  return dt;
                },
              },
              j = a("div"),
              _t = a("img"),
              e = (A._internals = { _specialProps: _ }),
              n = (Qt._gsScope.navigator || {}).userAgent || "",
              N =
                ((o = n.indexOf("Android")),
                (i = a("a")),
                (b =
                  -1 !== n.indexOf("Safari") &&
                  -1 === n.indexOf("Chrome") &&
                  (-1 === o || 3 < parseFloat(n.substr(o + 8, 2)))),
                (Z =
                  b && parseFloat(n.substr(n.indexOf("Version/") + 8, 2)) < 6),
                (G = -1 !== n.indexOf("Firefox")),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(n) ||
                  /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(n)) &&
                  (w = parseFloat(RegExp.$1)),
                !!i &&
                  ((i.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(i.style.opacity))),
              gt = "",
              mt = "",
              yt =
                "undefined" != typeof window
                  ? window
                  : R.defaultView || { getComputedStyle: function () {} },
              B = (A.getStyle = function (t, e, n, i, o) {
                var r;
                return N || "opacity" !== e
                  ? (!i && t.style[e]
                      ? (r = t.style[e])
                      : (n = n || d(t))
                      ? (r =
                          n[e] ||
                          n.getPropertyValue(e) ||
                          n.getPropertyValue(
                            e.replace(st, "-$1").toLowerCase()
                          ))
                      : t.currentStyle && (r = t.currentStyle[e]),
                    null == o ||
                    (r && "none" !== r && "auto" !== r && "auto auto" !== r)
                      ? r
                      : o)
                  : l(t);
              }),
              T = (e.convertToPixels = function (t, e, n, i, o) {
                if ("px" === i || (!i && "lineHeight" !== e)) return n;
                if ("auto" === i || !n) return 0;
                var r,
                  s,
                  a,
                  l = ut.test(e),
                  u = t,
                  c = j.style,
                  f = n < 0,
                  h = 1 === n;
                if ((f && (n = -n), h && (n *= 100), "lineHeight" !== e || i))
                  if ("%" === i && -1 !== e.indexOf("border"))
                    r = (n / 100) * (l ? t.clientWidth : t.clientHeight);
                  else {
                    if (
                      ((c.cssText =
                        "border:0 solid red;position:" +
                        B(t, "position") +
                        ";line-height:0;"),
                      "%" !== i &&
                        u.appendChild &&
                        "v" !== i.charAt(0) &&
                        "rem" !== i)
                    )
                      c[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                    else {
                      if (
                        ((u = t.parentNode || R.body),
                        -1 !== B(u, "display").indexOf("flex") &&
                          (c.position = "absolute"),
                        (s = u._gsCache),
                        (a = Qt.default.ticker.frame),
                        s && l && s.time === a)
                      )
                        return (s.width * n) / 100;
                      c[l ? "width" : "height"] = n + i;
                    }
                    u.appendChild(j),
                      (r = parseFloat(j[l ? "offsetWidth" : "offsetHeight"])),
                      u.removeChild(j),
                      l &&
                        "%" === i &&
                        !1 !== A.cacheWidths &&
                        (((s = u._gsCache = u._gsCache || {}).time = a),
                        (s.width = (r / n) * 100)),
                      0 !== r || o || (r = T(t, e, n, i, !0));
                  }
                else
                  (s = d(t).lineHeight),
                    (t.style.lineHeight = n),
                    (r = parseFloat(d(t).lineHeight)),
                    (t.style.lineHeight = s);
                return h && (r /= 100), f ? -r : r;
              }),
              vt = (e.calculateOffset = function (t, e, n) {
                var i;
                return "absolute" !== B(t, "position", n)
                  ? 0
                  : ((n = B(
                      t,
                      "margin" + (i = "left" === e ? "Left" : "Top"),
                      n
                    )),
                    t["offset" + i] -
                      (T(t, e, parseFloat(n), n.replace(et, "")) || 0));
              }),
              bt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
              wt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
              F = function (t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t)
                  return t + " ";
                var n,
                  i = (t = null != t && "" !== t ? t : "0 0").split(" "),
                  o =
                    -1 !== t.indexOf("left")
                      ? "0%"
                      : -1 !== t.indexOf("right")
                      ? "100%"
                      : i[0],
                  r =
                    -1 !== t.indexOf("top")
                      ? "0%"
                      : -1 !== t.indexOf("bottom")
                      ? "100%"
                      : i[1];
                if (3 < i.length && !e) {
                  for (
                    i = t.split(", ").join(",").split(","), t = [], n = 0;
                    n < i.length;
                    n++
                  )
                    t.push(F(i[n]));
                  return t.join(",");
                }
                return (
                  null == r
                    ? (r = "center" === o ? "50%" : "0")
                    : "center" === r && (r = "50%"),
                  (t =
                    (o =
                      "center" === o ||
                      (isNaN(parseFloat(o)) && -1 === (o + "").indexOf("="))
                        ? "50%"
                        : o) +
                    " " +
                    r +
                    (2 < i.length ? " " + i[2] : "")),
                  e &&
                    ((e.oxp = -1 !== o.indexOf("%")),
                    (e.oyp = -1 !== r.indexOf("%")),
                    (e.oxr = "=" === o.charAt(1)),
                    (e.oyr = "=" === r.charAt(1)),
                    (e.ox = parseFloat(o.replace(tt, ""))),
                    (e.oy = parseFloat(r.replace(tt, ""))),
                    (e.v = t)),
                  e || t
                );
              },
              xt = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0],
              },
              Tt = (A.parseColor = function (t, e) {
                var n, i, o, r, s, a, l, u;
                if (t)
                  if ("number" == typeof t)
                    n = [t >> 16, (t >> 8) & 255, 255 & t];
                  else {
                    if (
                      ("," === t.charAt(t.length - 1) &&
                        (t = t.substr(0, t.length - 1)),
                      xt[t])
                    )
                      n = xt[t];
                    else if ("#" === t.charAt(0))
                      4 === t.length &&
                        (t =
                          "#" +
                          (i = t.charAt(1)) +
                          i +
                          (o = t.charAt(2)) +
                          o +
                          (r = t.charAt(3)) +
                          r),
                        (n = [
                          (t = parseInt(t.substr(1), 16)) >> 16,
                          (t >> 8) & 255,
                          255 & t,
                        ]);
                    else if ("hsl" === t.substr(0, 3))
                      if (((n = u = t.match(I)), e)) {
                        if (-1 !== t.indexOf("=")) return t.match($);
                      } else
                        (s = (Number(n[0]) % 360) / 360),
                          (a = Number(n[1]) / 100),
                          (i =
                            2 * (l = Number(n[2]) / 100) -
                            (o = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                          3 < n.length && (n[3] = Number(n[3])),
                          (n[0] = c(s + 1 / 3, i, o)),
                          (n[1] = c(s, i, o)),
                          (n[2] = c(s - 1 / 3, i, o));
                    else n = t.match(I) || xt.transparent;
                    (n[0] = Number(n[0])),
                      (n[1] = Number(n[1])),
                      (n[2] = Number(n[2])),
                      3 < n.length && (n[3] = Number(n[3]));
                  }
                else n = xt.black;
                return (
                  e &&
                    !u &&
                    ((i = n[0] / 255),
                    (o = n[1] / 255),
                    (r = n[2] / 255),
                    (l =
                      ((t = Math.max(i, o, r)) + (e = Math.min(i, o, r))) / 2),
                    t === e
                      ? (s = a = 0)
                      : ((u = t - e),
                        (a = 0.5 < l ? u / (2 - t - e) : u / (t + e)),
                        (s =
                          t === i
                            ? (o - r) / u + (o < r ? 6 : 0)
                            : t === o
                            ? (r - i) / u + 2
                            : (i - o) / u + 4),
                        (s *= 60)),
                    (n[0] = (s + 0.5) | 0),
                    (n[1] = (100 * a + 0.5) | 0),
                    (n[2] = (100 * l + 0.5) | 0)),
                  n
                );
              }),
              z =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in xt) z += "|" + t + "\\b";
            (z = new RegExp(z + ")", "gi")),
              (A.colorStringFilter = function (t) {
                var e = t[0] + " " + t[1];
                z.test(e) &&
                  ((e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla(")),
                  (t[0] = u(t[0], e)),
                  (t[1] = u(t[1], e))),
                  (z.lastIndex = 0);
              }),
              Qt.default.defaultStringFilter ||
                (Qt.default.defaultStringFilter = A.colorStringFilter);
            function Ot(t, e, r, s) {
              var a, l, u, c, f, h, p, d;
              return null == t
                ? function (t) {
                    return t;
                  }
                : ((a = e ? (t.match(z) || [""])[0] : ""),
                  (l = t.split(a).join("").match(J) || []),
                  (u = t.substr(0, t.indexOf(l[0]))),
                  (c = ")" === t.charAt(t.length - 1) ? ")" : ""),
                  (f = -1 !== t.indexOf(" ") ? " " : ","),
                  (h = l.length),
                  (p = 0 < h ? l[0].replace(I, "") : ""),
                  h
                    ? (d = e
                        ? function (t) {
                            var e, n, i, o;
                            if ("number" == typeof t) t += p;
                            else if (s && M.test(t)) {
                              for (
                                o = t.replace(M, "|").split("|"), i = 0;
                                i < o.length;
                                i++
                              )
                                o[i] = d(o[i]);
                              return o.join(",");
                            }
                            if (
                              ((e = (t.match(z) || [a])[0]),
                              (i = (n = t.split(e).join("").match(J) || [])
                                .length),
                              h > i--)
                            )
                              for (; ++i < h; )
                                n[i] = r ? n[((i - 1) / 2) | 0] : l[i];
                            return (
                              u +
                              n.join(f) +
                              f +
                              e +
                              c +
                              (-1 !== t.indexOf("inset") ? " inset" : "")
                            );
                          }
                        : function (t) {
                            var e, n, i;
                            if ("number" == typeof t) t += p;
                            else if (s && M.test(t)) {
                              for (
                                n = t.replace(M, "|").split("|"), i = 0;
                                i < n.length;
                                i++
                              )
                                n[i] = d(n[i]);
                              return n.join(",");
                            }
                            if (
                              ((i = (e = t.match("," == f ? J : Q) || [])
                                .length),
                              h > i--)
                            )
                              for (; ++i < h; )
                                e[i] = r ? e[((i - 1) / 2) | 0] : l[i];
                            return (
                              ((u &&
                                "none" !== t &&
                                t.substr(0, t.indexOf(e[0]))) ||
                                u) +
                              e.join(f) +
                              c
                            );
                          })
                    : function (t) {
                        return t;
                      });
            }
            function Pt(u) {
              return (
                (u = u.split(",")),
                function (t, e, n, i, o, r, s) {
                  var a,
                    l = (e + "").split(" ");
                  for (s = {}, a = 0; a < 4; a++)
                    s[u[a]] = l[a] = l[a] || l[((a - 1) / 2) >> 0];
                  return i.parse(t, s, o, r);
                }
              );
            }
            function Ct(t, e, n, i, o) {
              (this.t = t),
                (this.p = e),
                (this.v = n),
                (this.r = o),
                i && ((i._prev = this)._next = i);
            }
            (e._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, n, i, o, r, s = this.data, a = s.proxy, l = s.firstMPT;
                l;

              )
                (e = a[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (s.autoRotate &&
                  (s.autoRotate.rotation = s.mod
                    ? s.mod.call(this._tween, a.rotation, this.t, this._tween)
                    : a.rotation),
                1 === t || 0 === t)
              )
                for (l = s.firstMPT, r = 1 === t ? "e" : "b"; l; ) {
                  if ((n = l.t).type) {
                    if (1 === n.type) {
                      for (o = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++)
                        o += n["xn" + i] + n["xs" + (i + 1)];
                      n[r] = o;
                    }
                  } else n[r] = n.s + n.xs0;
                  l = l._next;
                }
            }),
              (e._parseToProxy = function (t, e, n, i, o, r) {
                var s,
                  a,
                  l,
                  u,
                  c = i,
                  f = {},
                  h = {},
                  p = n._transform,
                  d = pt;
                for (
                  n._transform = null,
                    pt = e,
                    i = t = n.parse(t, e, i, o),
                    pt = d,
                    r &&
                      ((n._transform = p),
                      c &&
                        ((c._prev = null), c._prev && (c._prev._next = null)));
                  i && i !== c;

                ) {
                  if (
                    i.type <= 1 &&
                    ((h[(a = i.p)] = i.s + i.c),
                    (f[a] = i.s),
                    r || ((u = new Ct(i, "s", a, u, i.r)), (i.c = 0)),
                    1 === i.type)
                  )
                    for (s = i.l; 0 < --s; )
                      (h[(a = i.p + "_" + (l = "xn" + s))] = i.data[l]),
                        (f[a] = i[l]),
                        r || (u = new Ct(i, l, a, u, i.rxp[l]));
                  i = i._next;
                }
                return { proxy: f, end: h, firstMPT: u, pt: t };
              });
            function St(t, e, n, i, o, r) {
              return (
                ((t = new H(t, e, n, i - n, o, -1, r)).b = n),
                (t.e = t.xs0 = i),
                t
              );
            }
            var H = (e.CSSPropTween = function (
                t,
                e,
                n,
                i,
                o,
                r,
                s,
                a,
                l,
                u,
                c
              ) {
                (this.t = t),
                  (this.p = e),
                  (this.s = n),
                  (this.c = i),
                  (this.n = s || e),
                  t instanceof H || y.push(this.n),
                  (this.r = a && ("function" == typeof a ? a : Math.round)),
                  (this.type = r || 0),
                  l && ((this.pr = l), (p = !0)),
                  (this.b = void 0 === u ? n : u),
                  (this.e = void 0 === c ? n + i : c),
                  o && ((this._next = o)._prev = this);
              }),
              Et = (A.parseComplex = function (t, e, n, i, o, r, s, a, l, u) {
                (n = n || r || ""),
                  "function" == typeof i && (i = i(k, E)),
                  (s = new H(t, e, 0, 0, s, u ? 2 : 1, null, !1, a, n, i)),
                  (i += ""),
                  o &&
                    z.test(i + n) &&
                    (A.colorStringFilter((i = [n, i])), (n = i[0]), (i = i[1]));
                var c,
                  f,
                  h,
                  p,
                  d,
                  _,
                  g,
                  m,
                  y,
                  v,
                  b,
                  w,
                  x = n.split(", ").join(",").split(" "),
                  T = i.split(", ").join(",").split(" "),
                  O = x.length,
                  P = !1 !== Y;
                for (
                  (-1 === i.indexOf(",") && -1 === n.indexOf(",")) ||
                    ((T = (
                      -1 !== (i + n).indexOf("rgb") ||
                      -1 !== (i + n).indexOf("hsl")
                        ? ((x = x.join(" ").replace(M, ", ").split(" ")),
                          T.join(" ").replace(M, ", "))
                        : ((x = x.join(" ").split(",").join(", ").split(" ")),
                          T.join(" ").split(",").join(", "))
                    ).split(" ")),
                    (O = x.length)),
                    O !== T.length && (O = (x = (r || "").split(" ")).length),
                    s.plugin = l,
                    s.setRatio = u,
                    c = z.lastIndex = 0;
                  c < O;
                  c++
                )
                  if (
                    ((p = x[c]),
                    (d = T[c] + ""),
                    (w = parseFloat(p)) || 0 === w)
                  )
                    s.appendXtra(
                      "",
                      w,
                      C(d, w),
                      d.replace($, ""),
                      P && -1 !== d.indexOf("px") && Math.round,
                      !0
                    );
                  else if (o && z.test(p))
                    (b = ")" + ((b = d.indexOf(")") + 1) ? d.substr(b) : "")),
                      (w = -1 !== d.indexOf("hsl") && N),
                      (y = d),
                      (p = Tt(p, w)),
                      (d = Tt(d, w)),
                      (m = 6 < p.length + d.length) && !N && 0 === d[3]
                        ? ((s["xs" + s.l] += s.l
                            ? " transparent"
                            : "transparent"),
                          (s.e = s.e.split(T[c]).join("transparent")))
                        : (N || (m = !1),
                          w
                            ? s
                                .appendXtra(
                                  y.substr(0, y.indexOf("hsl")) +
                                    (m ? "hsla(" : "hsl("),
                                  p[0],
                                  C(d[0], p[0]),
                                  ",",
                                  !1,
                                  !0
                                )
                                .appendXtra("", p[1], C(d[1], p[1]), "%,", !1)
                                .appendXtra(
                                  "",
                                  p[2],
                                  C(d[2], p[2]),
                                  m ? "%," : "%" + b,
                                  !1
                                )
                            : s
                                .appendXtra(
                                  y.substr(0, y.indexOf("rgb")) +
                                    (m ? "rgba(" : "rgb("),
                                  p[0],
                                  d[0] - p[0],
                                  ",",
                                  Math.round,
                                  !0
                                )
                                .appendXtra(
                                  "",
                                  p[1],
                                  d[1] - p[1],
                                  ",",
                                  Math.round
                                )
                                .appendXtra(
                                  "",
                                  p[2],
                                  d[2] - p[2],
                                  m ? "," : b,
                                  Math.round
                                ),
                          m &&
                            ((p = p.length < 4 ? 1 : p[3]),
                            s.appendXtra(
                              "",
                              p,
                              (d.length < 4 ? 1 : d[3]) - p,
                              b,
                              !1
                            ))),
                      (z.lastIndex = 0);
                  else if ((_ = p.match(I))) {
                    if (!(g = d.match($)) || g.length !== _.length) return s;
                    for (f = h = 0; f < _.length; f++)
                      (v = _[f]),
                        (y = p.indexOf(v, h)),
                        s.appendXtra(
                          p.substr(h, y - h),
                          Number(v),
                          C(g[f], v),
                          "",
                          P && "px" === p.substr(y + v.length, 2) && Math.round,
                          0 === f
                        ),
                        (h = y + v.length);
                    s["xs" + s.l] += p.substr(h);
                  } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + d : d;
                if (-1 !== i.indexOf("=") && s.data) {
                  for (b = s.xs0 + s.data.s, c = 1; c < s.l; c++)
                    b += s["xs" + c] + s.data["xn" + c];
                  s.e = b + s["xs" + c];
                }
                return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
              }),
              X = 9;
            for ((t = H.prototype).l = t.pr = 0; 0 < --X; )
              (t["xn" + X] = 0), (t["xs" + X] = "");
            (t.xs0 = ""),
              (t._next =
                t._prev =
                t.xfirst =
                t.data =
                t.plugin =
                t.setRatio =
                t.rxp =
                  null),
              (t.appendXtra = function (t, e, n, i, o, r) {
                var s = this,
                  a = s.l;
                return (
                  (s["xs" + a] += r && (a || s["xs" + a]) ? " " + t : t || ""),
                  n || 0 === a || s.plugin
                    ? (s.l++,
                      (s.type = s.setRatio ? 2 : 1),
                      (s["xs" + s.l] = i || ""),
                      0 < a
                        ? ((s.data["xn" + a] = e + n),
                          (s.rxp["xn" + a] = o),
                          (s["xn" + a] = e),
                          s.plugin ||
                            ((s.xfirst = new H(
                              s,
                              "xn" + a,
                              e,
                              n,
                              s.xfirst || s,
                              0,
                              s.n,
                              o,
                              s.pr
                            )),
                            (s.xfirst.xs0 = 0)))
                        : ((s.data = { s: e + n }),
                          (s.rxp = {}),
                          (s.s = e),
                          (s.c = n),
                          (s.r = o)))
                    : (s["xs" + a] += e + (i || "")),
                  s
                );
              });
            function kt(t, e) {
              (this.p = ((e = e || {}).prefix && x(t)) || t),
                ((_[t] = _[this.p] = this).format =
                  e.formatter ||
                  Ot(e.defaultValue, e.color, e.collapsible, e.multi)),
                e.parser && (this.parse = e.parser),
                (this.clrs = e.color),
                (this.multi = e.multi),
                (this.keyword = e.keyword),
                (this.dflt = e.defaultValue),
                (this.allowFunc = e.allowFunc),
                (this.pr = e.priority || 0);
            }
            function At(t, e, n) {
              var i,
                o = R.createElementNS("http://www.w3.org/2000/svg", t),
                r = /([a-z])([A-Z])/g;
              for (i in n)
                o.setAttributeNS(
                  null,
                  i.replace(r, "$1-$2").toLowerCase(),
                  n[i]
                );
              return e.appendChild(o), o;
            }
            function It(t, e, n, i, o, r) {
              var s,
                a,
                l,
                u,
                c,
                f,
                h,
                p,
                d,
                _,
                g,
                m,
                y = t._gsTransform,
                v = Mt(t, !0);
              y && ((g = y.xOrigin), (m = y.yOrigin)),
                (!i || (s = i.split(" ")).length < 2) &&
                  (0 === (c = t.getBBox()).x &&
                    0 === c.y &&
                    c.width + c.height === 0 &&
                    (c = {
                      x:
                        parseFloat(
                          t.hasAttribute("x")
                            ? t.getAttribute("x")
                            : t.hasAttribute("cx")
                            ? t.getAttribute("cx")
                            : 0
                        ) || 0,
                      y:
                        parseFloat(
                          t.hasAttribute("y")
                            ? t.getAttribute("y")
                            : t.hasAttribute("cy")
                            ? t.getAttribute("cy")
                            : 0
                        ) || 0,
                      width: 0,
                      height: 0,
                    }),
                  (s = [
                    (-1 !== (e = F(e).split(" "))[0].indexOf("%")
                      ? (parseFloat(e[0]) / 100) * c.width
                      : parseFloat(e[0])) + c.x,
                    (-1 !== e[1].indexOf("%")
                      ? (parseFloat(e[1]) / 100) * c.height
                      : parseFloat(e[1])) + c.y,
                  ])),
                (n.xOrigin = e = parseFloat(s[0])),
                (n.yOrigin = u = parseFloat(s[1])),
                i &&
                  v !== Yt &&
                  ((i = v[0]),
                  (c = v[1]),
                  (f = v[2]),
                  (h = v[3]),
                  (p = v[4]),
                  (d = v[5]),
                  (_ = i * h - c * f) &&
                    ((l = e * (-c / _) + u * (i / _) - (i * d - c * p) / _),
                    (e =
                      n.xOrigin =
                      s[0] =
                      a =
                        e * (h / _) + u * (-f / _) + (f * d - h * p) / _),
                    (u = n.yOrigin = s[1] = l))),
                y &&
                  (r &&
                    ((n.xOffset = y.xOffset), (n.yOffset = y.yOffset), (y = n)),
                  o || (!1 !== o && !1 !== A.defaultSmoothOrigin)
                    ? ((y.xOffset +=
                        (a = e - g) * v[0] + (l = u - m) * v[2] - a),
                      (y.yOffset += a * v[1] + l * v[3] - l))
                    : (y.xOffset = y.yOffset = 0)),
                r || t.setAttribute("data-svg-origin", s.join(" "));
            }
            function Mt(t, e) {
              var n,
                i,
                o,
                r,
                s,
                a,
                l,
                u = t._gsTransform || new Xt(),
                c = t.style;
              if (
                (V
                  ? (i = B(t, zt, null, !0))
                  : t.currentStyle &&
                    (i =
                      (i = t.currentStyle.filter.match(ct)) && 4 === i.length
                        ? [
                            i[0].substr(4),
                            Number(i[2].substr(4)),
                            Number(i[1].substr(4)),
                            i[3].substr(4),
                            u.x || 0,
                            u.y || 0,
                          ].join(",")
                        : ""),
                (n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                V &&
                  n &&
                  !t.offsetParent &&
                  t !== f &&
                  ((r = c.display),
                  (c.display = "block"),
                  ((l = t.parentNode) && t.offsetParent) ||
                    ((s = 1), (a = t.nextSibling), f.appendChild(t)),
                  (n =
                    !(i = B(t, zt, null, !0)) ||
                    "none" === i ||
                    "matrix(1, 0, 0, 1, 0, 0)" === i),
                  r ? (c.display = r) : Kt(c, "display"),
                  s &&
                    (a
                      ? l.insertBefore(t, a)
                      : l
                      ? l.appendChild(t)
                      : f.removeChild(t))),
                (u.svg || (t.getCTM && Wt(t))) &&
                  (n &&
                    -1 !== (c[V] + "").indexOf("matrix") &&
                    ((i = c[V]), (n = 0)),
                  (o = t.getAttribute("transform")),
                  n &&
                    o &&
                    ((i =
                      "matrix(" +
                      (o = t.transform.baseVal.consolidate().matrix).a +
                      "," +
                      o.b +
                      "," +
                      o.c +
                      "," +
                      o.d +
                      "," +
                      o.e +
                      "," +
                      o.f +
                      ")"),
                    (n = 0))),
                n)
              )
                return Yt;
              for (o = (i || "").match(I) || [], X = o.length; -1 < --X; )
                (r = Number(o[X])),
                  (o[X] = (s = r - (r |= 0))
                    ? ((1e5 * s + (s < 0 ? -0.5 : 0.5)) | 0) / 1e5 + r
                    : r);
              return e && 6 < o.length
                ? [o[0], o[1], o[4], o[5], o[12], o[13]]
                : o;
            }
            function Lt(t) {
              var e,
                n = this.data,
                i = (s = -n.rotation * D) + n.skewX * D,
                o = 1e5,
                r = ((Math.cos(s) * n.scaleX * o) | 0) / o,
                s = ((Math.sin(s) * n.scaleX * o) | 0) / o,
                a = ((Math.sin(i) * -n.scaleY * o) | 0) / o,
                i = ((Math.cos(i) * n.scaleY * o) | 0) / o,
                l = this.t.style,
                u = this.t.currentStyle;
              if (u) {
                (e = s), (s = -a), (a = -e), (o = u.filter), (l.filter = "");
                var c = this.t.offsetWidth,
                  f = this.t.offsetHeight,
                  h = "absolute" !== u.position,
                  p =
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    r +
                    ", M12=" +
                    s +
                    ", M21=" +
                    a +
                    ", M22=" +
                    i,
                  d = n.x + (c * n.xPercent) / 100,
                  _ = n.y + (f * n.yPercent) / 100;
                if (
                  (null != n.ox &&
                    ((d +=
                      (v = (n.oxp ? c * n.ox * 0.01 : n.ox) - c / 2) -
                      (v * r +
                        (b = (n.oyp ? f * n.oy * 0.01 : n.oy) - f / 2) * s)),
                    (_ += b - (v * a + b * i))),
                  (p += h
                    ? ", Dx=" +
                      ((v = c / 2) - (v * r + (b = f / 2) * s) + d) +
                      ", Dy=" +
                      (b - (v * a + b * i) + _) +
                      ")"
                    : ", sizingMethod='auto expand')"),
                  -1 !== o.indexOf("DXImageTransform.Microsoft.Matrix(")
                    ? (l.filter = o.replace(ft, p))
                    : (l.filter = p + " " + o),
                  (0 !== t && 1 !== t) ||
                    1 != r ||
                    0 != s ||
                    0 != a ||
                    1 != i ||
                    (h && -1 === p.indexOf("Dx=0, Dy=0")) ||
                    (nt.test(o) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === o.indexOf(o.indexOf("Alpha")) &&
                      l.removeAttribute("filter")),
                  !h)
                ) {
                  var g,
                    m,
                    y = w < 8 ? 1 : -1,
                    v = n.ieOffsetX || 0,
                    b = n.ieOffsetY || 0;
                  for (
                    n.ieOffsetX = Math.round(
                      (c - ((r < 0 ? -r : r) * c + (s < 0 ? -s : s) * f)) / 2 +
                        d
                    ),
                      n.ieOffsetY = Math.round(
                        (f - ((i < 0 ? -i : i) * f + (a < 0 ? -a : a) * c)) /
                          2 +
                          _
                      ),
                      X = 0;
                    X < 4;
                    X++
                  )
                    (m =
                      (e =
                        -1 !== (m = u[(g = wt[X])]).indexOf("px")
                          ? parseFloat(m)
                          : T(this.t, g, parseFloat(m), m.replace(et, "")) ||
                            0) !== n[g]
                        ? X < 2
                          ? -n.ieOffsetX
                          : -n.ieOffsetY
                        : X < 2
                        ? v - n.ieOffsetX
                        : b - n.ieOffsetY),
                      (l[g] =
                        (n[g] = Math.round(
                          e - m * (0 === X || 2 === X ? 1 : y)
                        )) + "px");
                }
              }
            }
            function Rt(t) {
              var e,
                n = this.t,
                i = n.filter || B(this.data, "filter") || "",
                t = (this.s + this.c * t) | 0;
              (e =
                100 == t
                  ? -1 === i.indexOf("atrix(") &&
                    -1 === i.indexOf("radient(") &&
                    -1 === i.indexOf("oader(")
                    ? (n.removeAttribute("filter"), !B(this.data, "filter"))
                    : ((n.filter = i.replace(ot, "")), !0)
                  : e) ||
                (this.xn1 && (n.filter = i = i || "alpha(opacity=" + t + ")"),
                -1 === i.indexOf("pacity")
                  ? (0 == t && this.xn1) ||
                    (n.filter = i + " alpha(opacity=" + t + ")")
                  : (n.filter = i.replace(nt, "opacity=" + t)));
            }
            function Dt(t) {
              if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, n = this.t.style; e; )
                  e.v ? (n[e.p] = e.v) : Kt(n, e.p), (e = e._next);
                1 === t &&
                  this.t._gsClassPT === this &&
                  (this.t._gsClassPT = null);
              } else
                this.t.getAttribute("class") !== this.e &&
                  this.t.setAttribute("class", this.e);
            }
            function jt(t) {
              if (
                (1 === t || 0 === t) &&
                this.data._totalTime === this.data._totalDuration &&
                "isFromStart" !== this.data.data
              ) {
                var e,
                  n,
                  i,
                  o,
                  r = this.t.style,
                  s = _.transform.parse;
                if ("all" === this.e) o = !(r.cssText = "");
                else
                  for (
                    i = (e = this.e.split(" ").join("").split(",")).length;
                    -1 < --i;

                  )
                    (n = e[i]),
                      _[n] &&
                        (_[n].parse === s
                          ? (o = !0)
                          : (n = "transformOrigin" === n ? Ht : _[n].p)),
                      Kt(r, n);
                o &&
                  (Kt(r, V),
                  (t = this.t._gsTransform) &&
                    (t.svg &&
                      (this.t.removeAttribute("data-svg-origin"),
                      this.t.removeAttribute("transform")),
                    delete this.t._gsTransform));
              }
            }
            var q,
              i,
              Nt,
              o,
              r = (e._registerComplexSpecialProp = function (t, e, n) {
                "object" != typeof e && (e = { parser: n });
                var i,
                  o = t.split(","),
                  r = e.defaultValue;
                for (n = n || [r], i = 0; i < o.length; i++)
                  (e.prefix = 0 === i && e.prefix),
                    (e.defaultValue = n[i] || r),
                    new kt(o[i], e);
              }),
              Bt = (e._registerPluginProp = function (t) {
                var l;
                _[t] ||
                  ((l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin"),
                  r(t, {
                    parser: function (t, e, n, i, o, r, s) {
                      var a = K.com.greensock.plugins[l];
                      return a
                        ? (a._cssRegister(), _[n].parse(t, e, n, i, o, r, s))
                        : (g(), o);
                    },
                  }));
              }),
              Ft =
                (((t = kt.prototype).parseComplex = function (
                  t,
                  e,
                  n,
                  i,
                  o,
                  r
                ) {
                  var s,
                    a,
                    l,
                    u,
                    c,
                    f,
                    h = this.keyword;
                  if (
                    (this.multi &&
                      (M.test(n) || M.test(e)
                        ? ((a = e.replace(M, "|").split("|")),
                          (l = n.replace(M, "|").split("|")))
                        : h && ((a = [e]), (l = [n]))),
                    l)
                  ) {
                    for (
                      u = (l.length > a.length ? l : a).length, s = 0;
                      s < u;
                      s++
                    )
                      (e = a[s] = a[s] || this.dflt),
                        (n = l[s] = l[s] || this.dflt),
                        h &&
                          (c = e.indexOf(h)) !== (f = n.indexOf(h)) &&
                          (-1 === f
                            ? (a[s] = a[s].split(h).join(""))
                            : -1 === c && (a[s] += " " + h));
                    (e = a.join(", ")), (n = l.join(", "));
                  }
                  return Et(
                    t,
                    this.p,
                    e,
                    n,
                    this.clrs,
                    this.dflt,
                    i,
                    this.pr,
                    o,
                    r
                  );
                }),
                (t.parse = function (t, e, n, i, o, r, s) {
                  return this.parseComplex(
                    t.style,
                    this.format(B(t, this.p, S, !1, this.dflt)),
                    this.format(e),
                    o,
                    r
                  );
                }),
                (A.registerSpecialProp = function (t, a, l) {
                  r(t, {
                    parser: function (t, e, n, i, o, r, s) {
                      o = new H(t, n, 0, 0, o, 2, n, !1, l);
                      return (
                        (o.plugin = r), (o.setRatio = a(t, e, i._tween, n)), o
                      );
                    },
                    priority: l,
                  });
                }),
                (A.useSVGTransformAttr = !0),
                "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                  ","
                )),
              V = x("transform"),
              zt = gt + "transform",
              Ht = x("transformOrigin"),
              U = null !== x("perspective"),
              Xt = (e.Transform = function () {
                (this.perspective =
                  parseFloat(A.defaultTransformPerspective) || 0),
                  (this.force3D =
                    !1 !== A.defaultForce3D &&
                    U &&
                    (A.defaultForce3D || "auto"));
              }),
              qt = Qt._gsScope.SVGElement,
              f = R.documentElement || {},
              Vt =
                ((o = w || (/Android/i.test(n) && !Qt._gsScope.chrome)),
                R.createElementNS &&
                  f.appendChild &&
                  !o &&
                  ((i = At("svg", f)),
                  (Nt = (n = At("rect", i, {
                    width: 100,
                    height: 50,
                    x: 100,
                  })).getBoundingClientRect().width),
                  (n.style[Ht] = "50% 50%"),
                  (n.style[V] = "scaleX(0.5)"),
                  (o = Nt === n.getBoundingClientRect().width && !(G && U)),
                  f.removeChild(i)),
                o),
              Ut = function (t) {
                var e,
                  n = a(
                    "svg",
                    (this.ownerSVGElement &&
                      this.ownerSVGElement.getAttribute("xmlns")) ||
                      "http://www.w3.org/2000/svg"
                  ),
                  i = this.parentNode,
                  o = this.nextSibling,
                  r = this.style.cssText;
                if (
                  (f.appendChild(n),
                  n.appendChild(this),
                  (this.style.display = "block"),
                  t)
                )
                  try {
                    (e = this.getBBox()),
                      (this._originalGetBBox = this.getBBox),
                      (this.getBBox = Ut);
                  } catch (t) {}
                else this._originalGetBBox && (e = this._originalGetBBox());
                return (
                  o ? i.insertBefore(this, o) : i.appendChild(this),
                  f.removeChild(n),
                  (this.style.cssText = r),
                  e
                );
              },
              Wt = function (t) {
                return !(
                  !qt ||
                  !t.getCTM ||
                  (t.parentNode && !t.ownerSVGElement) ||
                  !(function (e) {
                    try {
                      return e.getBBox();
                    } catch (t) {
                      return Ut.call(e, !0);
                    }
                  })(t)
                );
              },
              Yt = [1, 0, 0, 1, 0, 0],
              Gt = (e.getTransform = function (t, e, n, i) {
                if (t._gsTransform && n && !i) return t._gsTransform;
                var o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f,
                  h,
                  p,
                  d,
                  _,
                  g,
                  m,
                  y,
                  v,
                  b,
                  w,
                  x,
                  T,
                  O,
                  P,
                  C = (n && t._gsTransform) || new Xt(),
                  S = C.scaleX < 0,
                  E =
                    (U &&
                      (parseFloat(B(t, Ht, e, !1, "0 0 0").split(" ")[2]) ||
                        C.zOrigin)) ||
                    0,
                  k = parseFloat(A.defaultTransformPerspective) || 0;
                if (
                  ((C.svg = !(!t.getCTM || !Wt(t))),
                  C.svg &&
                    (It(
                      t,
                      B(t, Ht, e, !1, "50% 50%") + "",
                      C,
                      t.getAttribute("data-svg-origin")
                    ),
                    (q = A.useSVGTransformAttr || Vt)),
                  (e = Mt(t)) !== Yt)
                )
                  for (o in (16 === e.length
                    ? ((r = e[0]),
                      (s = e[1]),
                      (a = e[2]),
                      (x = e[3]),
                      (l = e[4]),
                      (u = e[5]),
                      (c = e[6]),
                      (w = e[7]),
                      (f = e[8]),
                      (h = e[9]),
                      (p = e[10]),
                      (d = e[12]),
                      (_ = e[13]),
                      (g = e[14]),
                      (m = e[11]),
                      (y = Math.atan2(c, p)),
                      C.zOrigin &&
                        ((d = f * (g = -C.zOrigin) - e[12]),
                        (_ = h * g - e[13]),
                        (g = p * g + C.zOrigin - e[14])),
                      (C.rotationX = y * L),
                      y &&
                        ((P = l * (T = Math.cos(-y)) + f * (O = Math.sin(-y))),
                        (v = u * T + h * O),
                        (b = c * T + p * O),
                        (f = l * -O + f * T),
                        (h = u * -O + h * T),
                        (p = c * -O + p * T),
                        (m = w * -O + m * T),
                        (l = P),
                        (u = v),
                        (c = b)),
                      (y = Math.atan2(-a, p)),
                      (C.rotationY = y * L),
                      y &&
                        ((v = s * (T = Math.cos(-y)) - h * (O = Math.sin(-y))),
                        (b = a * T - p * O),
                        (h = s * O + h * T),
                        (p = a * O + p * T),
                        (m = x * O + m * T),
                        (r = P = r * T - f * O),
                        (s = v),
                        (a = b)),
                      (y = Math.atan2(s, r)),
                      (C.rotation = y * L),
                      y &&
                        ((P = r * (T = Math.cos(y)) + s * (O = Math.sin(y))),
                        (v = l * T + u * O),
                        (b = f * T + h * O),
                        (s = s * T - r * O),
                        (u = u * T - l * O),
                        (h = h * T - f * O),
                        (r = P),
                        (l = v),
                        (f = b)),
                      C.rotationX &&
                        359.9 < Math.abs(C.rotationX) + Math.abs(C.rotation) &&
                        ((C.rotationX = C.rotation = 0),
                        (C.rotationY = 180 - C.rotationY)),
                      (y = Math.atan2(l, u)),
                      (C.scaleX =
                        ((1e5 * Math.sqrt(r * r + s * s + a * a) + 0.5) | 0) /
                        1e5),
                      (C.scaleY =
                        ((1e5 * Math.sqrt(u * u + c * c) + 0.5) | 0) / 1e5),
                      (C.scaleZ =
                        ((1e5 * Math.sqrt(f * f + h * h + p * p) + 0.5) | 0) /
                        1e5),
                      (r /= C.scaleX),
                      (l /= C.scaleY),
                      (s /= C.scaleX),
                      (u /= C.scaleY),
                      2e-5 < Math.abs(y)
                        ? ((C.skewX = y * L),
                          (l = 0),
                          "simple" !== C.skewType &&
                            (C.scaleY *= 1 / Math.cos(y)))
                        : (C.skewX = 0),
                      (C.perspective = m ? 1 / (m < 0 ? -m : m) : 0),
                      (C.x = d),
                      (C.y = _),
                      (C.z = g),
                      C.svg &&
                        ((C.x -= C.xOrigin - (C.xOrigin * r - C.yOrigin * l)),
                        (C.y -= C.yOrigin - (C.yOrigin * s - C.xOrigin * u))))
                    : (U &&
                        !i &&
                        e.length &&
                        C.x === e[4] &&
                        C.y === e[5] &&
                        (C.rotationX || C.rotationY)) ||
                      ((x = (w = 6 <= e.length) ? e[0] : 1),
                      (T = e[1] || 0),
                      (O = e[2] || 0),
                      (P = w ? e[3] : 1),
                      (C.x = e[4] || 0),
                      (C.y = e[5] || 0),
                      (v = Math.sqrt(x * x + T * T)),
                      (b = Math.sqrt(P * P + O * O)),
                      (a = x || T ? Math.atan2(T, x) * L : C.rotation || 0),
                      (c = O || P ? Math.atan2(O, P) * L + a : C.skewX || 0),
                      (C.scaleX = v),
                      (C.scaleY = b),
                      (C.rotation = a),
                      (C.skewX = c),
                      U &&
                        ((C.rotationX = C.rotationY = C.z = 0),
                        (C.perspective = k),
                        (C.scaleZ = 1)),
                      C.svg &&
                        ((C.x -= C.xOrigin - (C.xOrigin * x + C.yOrigin * O)),
                        (C.y -= C.yOrigin - (C.xOrigin * T + C.yOrigin * P)))),
                  90 < Math.abs(C.skewX) &&
                    Math.abs(C.skewX) < 270 &&
                    (S
                      ? ((C.scaleX *= -1),
                        (C.skewX += C.rotation <= 0 ? 180 : -180),
                        (C.rotation += C.rotation <= 0 ? 180 : -180))
                      : ((C.scaleY *= -1),
                        (C.skewX += C.skewX <= 0 ? 180 : -180))),
                  (C.zOrigin = E),
                  C))
                    C[o] < 2e-5 && -2e-5 < C[o] && (C[o] = 0);
                return (
                  n &&
                    (t._gsTransform = C).svg &&
                    (q && t.style[V]
                      ? Qt.default.delayedCall(0.001, function () {
                          Kt(t.style, V);
                        })
                      : !q &&
                        t.getAttribute("transform") &&
                        Qt.default.delayedCall(0.001, function () {
                          t.removeAttribute("transform");
                        })),
                  C
                );
              }),
              Zt =
                (e.set3DTransformRatio =
                e.setTransformRatio =
                  function (t) {
                    var e,
                      n,
                      i,
                      o,
                      r,
                      s,
                      a,
                      l,
                      u,
                      c,
                      f,
                      h,
                      p,
                      d,
                      _,
                      g,
                      m,
                      y,
                      v = this.data,
                      b = this.t.style,
                      w = v.rotation,
                      x = v.rotationX,
                      T = v.rotationY,
                      O = v.scaleX,
                      P = v.scaleY,
                      C = v.scaleZ,
                      S = v.x,
                      E = v.y,
                      k = v.z,
                      A = v.svg,
                      I = v.perspective,
                      M = v.force3D,
                      L = v.skewY,
                      R = v.skewX;
                    if (
                      (L && ((R += L), (w += L)),
                      ((((1 !== t && 0 !== t) ||
                        "auto" !== M ||
                        (this.tween._totalTime !== this.tween._totalDuration &&
                          this.tween._totalTime)) &&
                        M) ||
                        k ||
                        I ||
                        T ||
                        x ||
                        1 !== C) &&
                        (!q || !A) &&
                        U)
                    ) {
                      if (
                        (G &&
                          (O < (p = 1e-4) && -p < O && (O = C = 2e-5),
                          P < p && -p < P && (P = C = 2e-5),
                          !I || v.z || v.rotationX || v.rotationY || (I = 0)),
                        w || R)
                      )
                        (w *= D),
                          (m = n = Math.cos(w)),
                          (d = r = Math.sin(w)),
                          R &&
                            ((w -= R * D),
                            (m = Math.cos(w)),
                            (d = Math.sin(w)),
                            "simple" === v.skewType &&
                              ((e = Math.tan((R - L) * D)),
                              (m *= e = Math.sqrt(1 + e * e)),
                              (d *= e),
                              v.skewY &&
                                ((e = Math.tan(L * D)),
                                (n *= e = Math.sqrt(1 + e * e)),
                                (r *= e)))),
                          (i = -d),
                          (s = m);
                      else {
                        if (!(T || x || 1 !== C || I || A))
                          return void (b[V] =
                            (v.xPercent || v.yPercent
                              ? "translate(" +
                                v.xPercent +
                                "%," +
                                v.yPercent +
                                "%) translate3d("
                              : "translate3d(") +
                            S +
                            "px," +
                            E +
                            "px," +
                            k +
                            "px)" +
                            (1 !== O || 1 !== P
                              ? " scale(" + O + "," + P + ")"
                              : ""));
                        (n = s = 1), (i = r = 0);
                      }
                      (t = 1),
                        (o = a = l = u = c = M = 0),
                        (f = I ? -1 / I : 0),
                        (h = v.zOrigin),
                        (p = 1e-6),
                        (_ = ","),
                        (g = "0"),
                        (w = T * D) &&
                          ((m = Math.cos(w)),
                          (c = f * (l = -(d = Math.sin(w)))),
                          (o = n * d),
                          (a = r * d),
                          (f *= t = m),
                          (n *= m),
                          (r *= m)),
                        (w = x * D) &&
                          ((e = i * (m = Math.cos(w)) + o * (d = Math.sin(w))),
                          (y = s * m + a * d),
                          (u = t * d),
                          (M = f * d),
                          (o = i * -d + o * m),
                          (a = s * -d + a * m),
                          (t *= m),
                          (f *= m),
                          (i = e),
                          (s = y)),
                        1 !== C && ((o *= C), (a *= C), (t *= C), (f *= C)),
                        1 !== P && ((i *= P), (s *= P), (u *= P), (M *= P)),
                        1 !== O && ((n *= O), (r *= O), (l *= O), (c *= O)),
                        (h || A) &&
                          (h &&
                            ((S += o * -h), (E += a * -h), (k += t * -h + h)),
                          A &&
                            ((S +=
                              v.xOrigin -
                              (v.xOrigin * n + v.yOrigin * i) +
                              v.xOffset),
                            (E +=
                              v.yOrigin -
                              (v.xOrigin * r + v.yOrigin * s) +
                              v.yOffset)),
                          S < p && -p < S && (S = g),
                          E < p && -p < E && (E = g),
                          k < p && -p < k && (k = 0)),
                        (d =
                          (d =
                            v.xPercent || v.yPercent
                              ? "translate(" +
                                v.xPercent +
                                "%," +
                                v.yPercent +
                                "%) matrix3d("
                              : "matrix3d(") +
                          ((n < p && -p < n ? g : n) +
                            _ +
                            (r < p && -p < r ? g : r) +
                            _ +
                            (l < p && -p < l ? g : l)) +
                          (_ +
                            (c < p && -p < c ? g : c) +
                            _ +
                            (i < p && -p < i ? g : i) +
                            _ +
                            (s < p && -p < s ? g : s))),
                        x || T || 1 !== C
                          ? (d =
                              d +
                              _ +
                              (u < p && -p < u ? g : u) +
                              _ +
                              (M < p && -p < M ? g : M) +
                              _ +
                              (o < p && -p < o ? g : o) +
                              _ +
                              (a < p && -p < a ? g : a) +
                              _ +
                              (t < p && -p < t ? g : t) +
                              _ +
                              (f < p && -p < f ? g : f) +
                              _)
                          : (d += ",0,0,0,0,1,0,"),
                        (b[V] = d +=
                          S + _ + E + _ + k + _ + (I ? 1 + -k / I : 1) + ")");
                    } else
                      w || R || A
                        ? ((w *= D),
                          (m = R * D),
                          (y = 1e5),
                          (n = Math.cos(w) * O),
                          (r = Math.sin(w) * O),
                          (i = Math.sin(w - m) * -P),
                          (s = Math.cos(w - m) * P),
                          m &&
                            "simple" === v.skewType &&
                            ((e = Math.tan(m - L * D)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (s *= e),
                            L &&
                              ((e = Math.tan(L * D)),
                              (n *= e = Math.sqrt(1 + e * e)),
                              (r *= e))),
                          A &&
                            ((S +=
                              v.xOrigin -
                              (v.xOrigin * n + v.yOrigin * i) +
                              v.xOffset),
                            (E +=
                              v.yOrigin -
                              (v.xOrigin * r + v.yOrigin * s) +
                              v.yOffset),
                            q &&
                              (v.xPercent || v.yPercent) &&
                              ((p = this.t.getBBox()),
                              (S += 0.01 * v.xPercent * p.width),
                              (E += 0.01 * v.yPercent * p.height)),
                            S < (p = 1e-6) && -p < S && (S = 0),
                            E < p && -p < E && (E = 0)),
                          (d =
                            ((n * y) | 0) / y +
                            "," +
                            ((r * y) | 0) / y +
                            "," +
                            ((i * y) | 0) / y +
                            "," +
                            ((s * y) | 0) / y +
                            "," +
                            S +
                            "," +
                            E +
                            ")"),
                          A && q
                            ? this.t.setAttribute("transform", "matrix(" + d)
                            : (b[V] =
                                (v.xPercent || v.yPercent
                                  ? "translate(" +
                                    v.xPercent +
                                    "%," +
                                    v.yPercent +
                                    "%) matrix("
                                  : "matrix(") + d))
                        : (b[V] =
                            (v.xPercent || v.yPercent
                              ? "translate(" +
                                v.xPercent +
                                "%," +
                                v.yPercent +
                                "%) matrix("
                              : "matrix(") +
                            O +
                            ",0,0," +
                            P +
                            "," +
                            S +
                            "," +
                            E +
                            ")");
                  }),
              Kt =
                (((t = Xt.prototype).x =
                  t.y =
                  t.z =
                  t.skewX =
                  t.skewY =
                  t.rotation =
                  t.rotationX =
                  t.rotationY =
                  t.zOrigin =
                  t.xPercent =
                  t.yPercent =
                  t.xOffset =
                  t.yOffset =
                    0),
                (t.scaleX = t.scaleY = t.scaleZ = 1),
                r(
                  "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                  {
                    parser: function (t, e, n, i, o, r, s) {
                      if (i._lastParsedTransform !== s) {
                        var a,
                          l,
                          u,
                          c,
                          f,
                          h,
                          p,
                          d,
                          _ =
                            (i._lastParsedTransform = s).scale &&
                            "function" == typeof s.scale
                              ? s.scale
                              : 0,
                          g = (_ && (s.scale = _(k, t)), t._gsTransform),
                          m = t.style,
                          y = Ft.length,
                          v = s,
                          b = {},
                          w = "transformOrigin",
                          x = Gt(t, S, !0, v.parseTransform),
                          T =
                            v.transform &&
                            ("function" == typeof v.transform
                              ? v.transform(k, E)
                              : v.transform);
                        if (
                          ((x.skewType =
                            v.skewType || x.skewType || A.defaultSkewType),
                          (i._transform = x),
                          "rotationZ" in v && (v.rotation = v.rotationZ),
                          T && "string" == typeof T && V)
                        )
                          ((l = j.style)[V] = T),
                            (l.display = "block"),
                            (l.position = "absolute"),
                            -1 !== T.indexOf("%") &&
                              ((l.width = B(t, "width")),
                              (l.height = B(t, "height"))),
                            R.body.appendChild(j),
                            (a = Gt(j, null, !1)),
                            "simple" === x.skewType &&
                              (a.scaleY *= Math.cos(a.skewX * D)),
                            x.svg &&
                              ((f = x.xOrigin),
                              (h = x.yOrigin),
                              (a.x -= x.xOffset),
                              (a.y -= x.yOffset),
                              (v.transformOrigin || v.svgOrigin) &&
                                ((T = {}),
                                It(
                                  t,
                                  F(v.transformOrigin),
                                  T,
                                  v.svgOrigin,
                                  v.smoothOrigin,
                                  !0
                                ),
                                (f = T.xOrigin),
                                (h = T.yOrigin),
                                (a.x -= T.xOffset - x.xOffset),
                                (a.y -= T.yOffset - x.yOffset)),
                              (f || h) &&
                                ((p = Mt(j, !0)),
                                (a.x -= f - (f * p[0] + h * p[2])),
                                (a.y -= h - (f * p[1] + h * p[3])))),
                            R.body.removeChild(j),
                            a.perspective || (a.perspective = x.perspective),
                            null != v.xPercent &&
                              (a.xPercent = O(v.xPercent, x.xPercent)),
                            null != v.yPercent &&
                              (a.yPercent = O(v.yPercent, x.yPercent));
                        else if ("object" == typeof v) {
                          if (
                            ((a = {
                              scaleX: O(
                                null != v.scaleX ? v.scaleX : v.scale,
                                x.scaleX
                              ),
                              scaleY: O(
                                null != v.scaleY ? v.scaleY : v.scale,
                                x.scaleY
                              ),
                              scaleZ: O(v.scaleZ, x.scaleZ),
                              x: O(v.x, x.x),
                              y: O(v.y, x.y),
                              z: O(v.z, x.z),
                              xPercent: O(v.xPercent, x.xPercent),
                              yPercent: O(v.yPercent, x.yPercent),
                              perspective: O(
                                v.transformPerspective,
                                x.perspective
                              ),
                            }),
                            null != (c = v.directionalRotation))
                          )
                            if ("object" == typeof c) for (l in c) v[l] = c[l];
                            else v.rotation = c;
                          "string" == typeof v.x &&
                            -1 !== v.x.indexOf("%") &&
                            ((a.x = 0), (a.xPercent = O(v.x, x.xPercent))),
                            "string" == typeof v.y &&
                              -1 !== v.y.indexOf("%") &&
                              ((a.y = 0), (a.yPercent = O(v.y, x.yPercent))),
                            (a.rotation = P(
                              "rotation" in v
                                ? v.rotation
                                : "shortRotation" in v
                                ? v.shortRotation + "_short"
                                : x.rotation,
                              x.rotation,
                              "rotation",
                              b
                            )),
                            U &&
                              ((a.rotationX = P(
                                "rotationX" in v
                                  ? v.rotationX
                                  : "shortRotationX" in v
                                  ? v.shortRotationX + "_short"
                                  : x.rotationX || 0,
                                x.rotationX,
                                "rotationX",
                                b
                              )),
                              (a.rotationY = P(
                                "rotationY" in v
                                  ? v.rotationY
                                  : "shortRotationY" in v
                                  ? v.shortRotationY + "_short"
                                  : x.rotationY || 0,
                                x.rotationY,
                                "rotationY",
                                b
                              ))),
                            (a.skewX = P(v.skewX, x.skewX)),
                            (a.skewY = P(v.skewY, x.skewY));
                        }
                        for (
                          U &&
                            null != v.force3D &&
                            ((x.force3D = v.force3D), (u = !0)),
                            (p =
                              x.force3D ||
                              x.z ||
                              x.rotationX ||
                              x.rotationY ||
                              a.z ||
                              a.rotationX ||
                              a.rotationY ||
                              a.perspective) ||
                              null == v.scale ||
                              (a.scaleZ = 1);
                          -1 < --y;

                        )
                          (1e-6 < (T = a[(d = Ft[y])] - x[d]) ||
                            T < -1e-6 ||
                            null != v[d] ||
                            null != pt[d]) &&
                            ((u = !0),
                            (o = new H(x, d, x[d], T, o)),
                            d in b && (o.e = b[d]),
                            (o.xs0 = 0),
                            (o.plugin = r),
                            i._overwriteProps.push(o.n));
                        (T =
                          "function" == typeof v.transformOrigin
                            ? v.transformOrigin(k, E)
                            : v.transformOrigin),
                          x.svg &&
                            (T || v.svgOrigin) &&
                            ((f = x.xOffset),
                            (h = x.yOffset),
                            It(t, F(T), a, v.svgOrigin, v.smoothOrigin),
                            (o = St(
                              x,
                              "xOrigin",
                              (g ? x : a).xOrigin,
                              a.xOrigin,
                              o,
                              w
                            )),
                            (o = St(
                              x,
                              "yOrigin",
                              (g ? x : a).yOrigin,
                              a.yOrigin,
                              o,
                              w
                            )),
                            (f === x.xOffset && h === x.yOffset) ||
                              ((o = St(
                                x,
                                "xOffset",
                                g ? f : x.xOffset,
                                x.xOffset,
                                o,
                                w
                              )),
                              (o = St(
                                x,
                                "yOffset",
                                g ? h : x.yOffset,
                                x.yOffset,
                                o,
                                w
                              ))),
                            (T = "0px 0px")),
                          (T || (U && p && x.zOrigin)) &&
                            (V
                              ? ((u = !0),
                                (d = Ht),
                                (T =
                                  T ||
                                  (T = (B(t, d, S, !1, "50% 50%") + "").split(
                                    " "
                                  ))[0] +
                                    " " +
                                    T[1] +
                                    " " +
                                    x.zOrigin +
                                    "px"),
                                (T += ""),
                                ((o = new H(m, d, 0, 0, o, -1, w)).b = m[d]),
                                (o.plugin = r),
                                U
                                  ? ((l = x.zOrigin),
                                    (T = T.split(" ")),
                                    (x.zOrigin =
                                      (2 < T.length ? parseFloat(T[2]) : l) ||
                                      0),
                                    (o.xs0 = o.e =
                                      T[0] + " " + (T[1] || "50%") + " 0px"),
                                    ((o = new H(
                                      x,
                                      "zOrigin",
                                      0,
                                      0,
                                      o,
                                      -1,
                                      o.n
                                    )).b = l),
                                    (o.xs0 = o.e = x.zOrigin))
                                  : (o.xs0 = o.e = T))
                              : F(T + "", x)),
                          u &&
                            (i._transformType =
                              (x.svg && q) || (!p && 3 !== this._transformType)
                                ? 2
                                : 3),
                          _ && (s.scale = _);
                      }
                      return o;
                    },
                    allowFunc: !0,
                    prefix: !0,
                  }
                ),
                r("boxShadow", {
                  defaultValue: "0px 0px 0px 0px #999",
                  prefix: !0,
                  color: !0,
                  multi: !0,
                  keyword: "inset",
                }),
                r("clipPath", {
                  defaultValue: "inset(0%)",
                  prefix: !0,
                  multi: !0,
                  formatter: Ot("inset(0% 0% 0% 0%)", !1, !0),
                }),
                r("borderRadius", {
                  defaultValue: "0px",
                  parser: function (t, e, n, i, o, r) {
                    e = this.format(e);
                    for (
                      var s,
                        a,
                        l,
                        u,
                        c,
                        f,
                        h,
                        p,
                        d,
                        _,
                        g = [
                          "borderTopLeftRadius",
                          "borderTopRightRadius",
                          "borderBottomRightRadius",
                          "borderBottomLeftRadius",
                        ],
                        m = t.style,
                        y = parseFloat(t.offsetWidth),
                        v = parseFloat(t.offsetHeight),
                        b = e.split(" "),
                        w = 0;
                      w < g.length;
                      w++
                    )
                      this.p.indexOf("border") && (g[w] = x(g[w])),
                        -1 !==
                          (l = a = B(t, g[w], S, !1, "0px")).indexOf(" ") &&
                          ((l = (a = l.split(" "))[0]), (a = a[1])),
                        (u = s = b[w]),
                        (d = parseFloat(l)),
                        (_ = l.substr((d + "").length)),
                        (f =
                          "" ===
                          (f = (h = "=" === u.charAt(1))
                            ? ((c = parseInt(u.charAt(0) + "1", 10)),
                              (u = u.substr(2)),
                              (c *= parseFloat(u)),
                              u.substr((c + "").length - (c < 0 ? 1 : 0)) || "")
                            : ((c = parseFloat(u)), u.substr((c + "").length)))
                            ? W[n] || _
                            : f) !== _ &&
                          ((p = T(t, "borderLeft", d, _)),
                          (d = T(t, "borderTop", d, _)),
                          (a =
                            "%" === f
                              ? ((l = (p / y) * 100 + "%"), (d / v) * 100 + "%")
                              : "em" === f
                              ? ((l =
                                  p / (_ = T(t, "borderLeft", 1, "em")) + "em"),
                                d / _ + "em")
                              : ((l = p + "px"), d + "px")),
                          h &&
                            ((u = parseFloat(l) + c + f),
                            (s = parseFloat(a) + c + f))),
                        (o = Et(
                          m,
                          g[w],
                          l + " " + a,
                          u + " " + s,
                          !1,
                          "0px",
                          o
                        ));
                    return o;
                  },
                  prefix: !0,
                  formatter: Ot("0px 0px 0px 0px", !1, !0),
                }),
                r(
                  "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
                  {
                    defaultValue: "0px",
                    parser: function (t, e, n, i, o, r) {
                      return Et(
                        t.style,
                        n,
                        this.format(B(t, n, S, !1, "0px 0px")),
                        this.format(e),
                        !1,
                        "0px",
                        o
                      );
                    },
                    prefix: !0,
                    formatter: Ot("0px 0px", !1, !0),
                  }
                ),
                r("backgroundPosition", {
                  defaultValue: "0 0",
                  parser: function (t, e, n, i, o, r) {
                    var s,
                      a,
                      l,
                      u,
                      c,
                      f = "background-position",
                      h = S || d(t),
                      p = this.format(
                        (h
                          ? w
                            ? h.getPropertyValue(f + "-x") +
                              " " +
                              h.getPropertyValue(f + "-y")
                            : h.getPropertyValue(f)
                          : t.currentStyle.backgroundPositionX +
                            " " +
                            t.currentStyle.backgroundPositionY) || "0 0"
                      ),
                      h = this.format(e);
                    if (
                      (-1 !== p.indexOf("%")) != (-1 !== h.indexOf("%")) &&
                      h.split(",").length < 2 &&
                      (f = B(t, "backgroundImage").replace(lt, "")) &&
                      "none" !== f
                    ) {
                      for (
                        s = p.split(" "),
                          a = h.split(" "),
                          _t.setAttribute("src", f),
                          l = 2;
                        -1 < --l;

                      )
                        (u = -1 !== (p = s[l]).indexOf("%")) !=
                          (-1 !== a[l].indexOf("%")) &&
                          ((c =
                            0 === l
                              ? t.offsetWidth - _t.width
                              : t.offsetHeight - _t.height),
                          (s[l] = u
                            ? (parseFloat(p) / 100) * c + "px"
                            : (parseFloat(p) / c) * 100 + "%"));
                      p = s.join(" ");
                    }
                    return this.parseComplex(t.style, p, h, o, r);
                  },
                  formatter: F,
                }),
                r("backgroundSize", {
                  defaultValue: "0 0",
                  formatter: function (t) {
                    return "co" === (t += "").substr(0, 2)
                      ? t
                      : F(-1 === t.indexOf(" ") ? t + " " + t : t);
                  },
                }),
                r("perspective", { defaultValue: "0px", prefix: !0 }),
                r("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                r("transformStyle", { prefix: !0 }),
                r("backfaceVisibility", { prefix: !0 }),
                r("userSelect", { prefix: !0 }),
                r("margin", {
                  parser: Pt("marginTop,marginRight,marginBottom,marginLeft"),
                }),
                r("padding", {
                  parser: Pt(
                    "paddingTop,paddingRight,paddingBottom,paddingLeft"
                  ),
                }),
                r("clip", {
                  defaultValue: "rect(0px,0px,0px,0px)",
                  parser: function (t, e, n, i, o, r) {
                    var s, a;
                    return (
                      (e =
                        w < 9
                          ? ((s = t.currentStyle),
                            (a = w < 8 ? " " : ","),
                            (s =
                              "rect(" +
                              s.clipTop +
                              a +
                              s.clipRight +
                              a +
                              s.clipBottom +
                              a +
                              s.clipLeft +
                              ")"),
                            this.format(e).split(",").join(a))
                          : ((s = this.format(B(t, this.p, S, !1, this.dflt))),
                            this.format(e))),
                      this.parseComplex(t.style, s, e, o, r)
                    );
                  },
                }),
                r("textShadow", {
                  defaultValue: "0px 0px 0px #999",
                  color: !0,
                  multi: !0,
                }),
                r("autoRound,strictUnits", {
                  parser: function (t, e, n, i, o) {
                    return o;
                  },
                }),
                r("border", {
                  defaultValue: "0px solid #000",
                  parser: function (t, e, n, i, o, r) {
                    var s = B(t, "borderTopWidth", S, !1, "0px"),
                      e = this.format(e).split(" "),
                      a = e[0].replace(et, "");
                    return (
                      "px" !== a &&
                        (s = parseFloat(s) / T(t, "borderTopWidth", 1, a) + a),
                      this.parseComplex(
                        t.style,
                        this.format(
                          s +
                            " " +
                            B(t, "borderTopStyle", S, !1, "solid") +
                            " " +
                            B(t, "borderTopColor", S, !1, "#000")
                        ),
                        e.join(" "),
                        o,
                        r
                      )
                    );
                  },
                  color: !0,
                  formatter: function (t) {
                    var e = t.split(" ");
                    return (
                      e[0] +
                      " " +
                      (e[1] || "solid") +
                      " " +
                      (t.match(z) || ["#000"])[0]
                    );
                  },
                }),
                r("borderWidth", {
                  parser: Pt(
                    "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
                  ),
                }),
                r("float,cssFloat,styleFloat", {
                  parser: function (t, e, n, i, o, r) {
                    var t = t.style,
                      s = "cssFloat" in t ? "cssFloat" : "styleFloat";
                    return new H(t, s, 0, 0, o, -1, n, !1, 0, t[s], e);
                  },
                }),
                r("opacity,alpha,autoAlpha", {
                  defaultValue: "1",
                  parser: function (t, e, n, i, o, r) {
                    var s = parseFloat(B(t, "opacity", S, !1, "1")),
                      a = t.style,
                      l = "autoAlpha" === n;
                    return (
                      "string" == typeof e &&
                        "=" === e.charAt(1) &&
                        (e =
                          ("-" === e.charAt(0) ? -1 : 1) *
                            parseFloat(e.substr(2)) +
                          s),
                      l &&
                        1 === s &&
                        "hidden" === B(t, "visibility", S) &&
                        0 !== e &&
                        (s = 0),
                      N
                        ? (o = new H(a, "opacity", s, e - s, o))
                        : (((o = new H(
                            a,
                            "opacity",
                            100 * s,
                            100 * (e - s),
                            o
                          )).xn1 = l ? 1 : 0),
                          (a.zoom = 1),
                          (o.type = 2),
                          (o.b = "alpha(opacity=" + o.s + ")"),
                          (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                          (o.data = t),
                          (o.plugin = r),
                          (o.setRatio = Rt)),
                      l &&
                        (((o = new H(
                          a,
                          "visibility",
                          0,
                          0,
                          o,
                          -1,
                          null,
                          !1,
                          0,
                          0 !== s ? "inherit" : "hidden",
                          0 === e ? "hidden" : "inherit"
                        )).xs0 = "inherit"),
                        i._overwriteProps.push(o.n),
                        i._overwriteProps.push(n)),
                      o
                    );
                  },
                }),
                function (t, e) {
                  e &&
                    (t.removeProperty
                      ? (("ms" !== e.substr(0, 2) &&
                          "webkit" !== e.substr(0, 6)) ||
                          (e = "-" + e),
                        t.removeProperty(e.replace(st, "-$1").toLowerCase()))
                      : t.removeAttribute(e));
                });
            r("className", {
              parser: function (t, e, n, i, o, r, s) {
                var a,
                  l,
                  u,
                  c = t.getAttribute("class") || "",
                  f = t.style.cssText;
                if (
                  (((o = i._classNamePT = new H(t, n, 0, 0, o, 2)).setRatio =
                    Dt),
                  (o.pr = -11),
                  (p = !0),
                  (o.b = c),
                  (n = h(t, S)),
                  (a = t._gsClassPT))
                ) {
                  for (l = {}, u = a.data; u; ) (l[u.p] = 1), (u = u._next);
                  a.setRatio(1);
                }
                return (
                  ((t._gsClassPT = o).e =
                    "=" !== e.charAt(1)
                      ? e
                      : c.replace(
                          new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
                          ""
                        ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                  t.setAttribute("class", o.e),
                  (a = m(t, n, h(t), s, l)),
                  t.setAttribute("class", c),
                  (o.data = a.firstMPT),
                  t.style.cssText !== f && (t.style.cssText = f),
                  (o = o.xfirst = i.parse(t, a.difs, o, r))
                );
              },
            });
            for (
              r("clearProps", {
                parser: function (t, e, n, i, o) {
                  return (
                    ((o = new H(t, n, 0, 0, o, 2)).setRatio = jt),
                    (o.e = e),
                    (o.pr = -10),
                    (o.data = i._tween),
                    (p = !0),
                    o
                  );
                },
              }),
                t = "bezier,throwProps,physicsProps,physics2D".split(","),
                X = t.length;
              X--;

            )
              Bt(t[X]);
            ((t = A.prototype)._firstPT =
              t._lastParsedTransform =
              t._transform =
                null),
              (t._onInitTween = function (t, e, n, i) {
                if (!t.nodeType) return !1;
                (this._target = E = t),
                  (this._tween = n),
                  (this._vars = e),
                  (k = i),
                  (Y = e.autoRound),
                  (p = !1),
                  (W = e.suffixMap || A.suffixMap),
                  (S = d(t)),
                  (y = this._overwriteProps);
                var o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  i = t.style;
                if (
                  (!v ||
                    "" !== i.zIndex ||
                    ("auto" !== (u = B(t, "zIndex", S)) && "" !== u) ||
                    this._addLazySet(i, "zIndex", 0),
                  "string" == typeof e &&
                    ((s = i.cssText),
                    (u = h(t, S)),
                    (i.cssText = s + ";" + e),
                    (u = m(t, u, h(t)).difs),
                    !N && it.test(e) && (u.opacity = parseFloat(RegExp.$1)),
                    (e = u),
                    (i.cssText = s)),
                  e.className
                    ? (this._firstPT = o =
                        _.className.parse(
                          t,
                          e.className,
                          "className",
                          this,
                          null,
                          null,
                          e
                        ))
                    : (this._firstPT = o = this.parse(t, e, null)),
                  this._transformType)
                ) {
                  for (
                    u = 3 === this._transformType,
                      V
                        ? b &&
                          ((v = !0),
                          "" !== i.zIndex ||
                            ("auto" !== (e = B(t, "zIndex", S)) && "" !== e) ||
                            this._addLazySet(i, "zIndex", 0),
                          Z &&
                            this._addLazySet(
                              i,
                              "WebkitBackfaceVisibility",
                              this._vars.WebkitBackfaceVisibility ||
                                (u ? "visible" : "hidden")
                            ))
                        : (i.zoom = 1),
                      r = o;
                    r && r._next;

                  )
                    r = r._next;
                  (e = new H(t, "transform", 0, 0, null, 2)),
                    this._linkCSSP(e, null, r),
                    (e.setRatio = V ? Zt : Lt),
                    (e.data = this._transform || Gt(t, S, !0)),
                    (e.tween = n),
                    (e.pr = -1),
                    y.pop();
                }
                if (p) {
                  for (; o; ) {
                    for (l = o._next, r = s; r && r.pr > o.pr; ) r = r._next;
                    (o._prev = r ? r._prev : a) ? (o._prev._next = o) : (s = o),
                      (o._next = r) ? (r._prev = o) : (a = o),
                      (o = l);
                  }
                  this._firstPT = s;
                }
                return !0;
              }),
              (t.parse = function (t, e, n, i) {
                var o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f,
                  h = t.style;
                for (o in e) {
                  if (
                    ((l = e[o]),
                    (a = _[o]),
                    "function" != typeof l ||
                      (a && a.allowFunc) ||
                      (l = l(k, E)),
                    a)
                  )
                    n = a.parse(t, l, o, this, n, i, e);
                  else {
                    if ("--" === o.substr(0, 2)) {
                      this._tween._propLookup[o] = this._addTween.call(
                        this._tween,
                        t.style,
                        "setProperty",
                        d(t).getPropertyValue(o) + "",
                        l + "",
                        o,
                        !1,
                        o
                      );
                      continue;
                    }
                    (a = B(t, o, S) + ""),
                      (c = "string" == typeof l),
                      "color" === o ||
                      "fill" === o ||
                      "stroke" === o ||
                      -1 !== o.indexOf("Color") ||
                      (c && rt.test(l))
                        ? (c ||
                            (l =
                              (3 < (l = Tt(l)).length ? "rgba(" : "rgb(") +
                              l.join(",") +
                              ")"),
                          (n = Et(h, o, a, l, !0, "transparent", n, 0, i)))
                        : c && ht.test(l)
                        ? (n = Et(h, o, a, l, !0, null, n, 0, i))
                        : ((u =
                            (r = parseFloat(a)) || 0 === r
                              ? a.substr((r + "").length)
                              : ""),
                          ("" !== a && "auto" !== a) ||
                            (u =
                              "width" === o || "height" === o
                                ? ((r = (function (t, e, n) {
                                    if (
                                      "svg" === (t.nodeName + "").toLowerCase()
                                    )
                                      return (n || d(t))[e] || 0;
                                    if (t.getCTM && Wt(t))
                                      return t.getBBox()[e] || 0;
                                    var i = parseFloat(
                                        "width" === e
                                          ? t.offsetWidth
                                          : t.offsetHeight
                                      ),
                                      o = bt[e],
                                      r = o.length;
                                    for (n = n || d(t); -1 < --r; )
                                      i =
                                        (i -=
                                          parseFloat(
                                            B(t, "padding" + o[r], n, !0)
                                          ) || 0) -
                                        (parseFloat(
                                          B(t, "border" + o[r] + "Width", n, !0)
                                        ) || 0);
                                    return i;
                                  })(t, o, S)),
                                  "px")
                                : "left" === o || "top" === o
                                ? ((r = vt(t, o, S)), "px")
                                : ((r = "opacity" !== o ? 0 : 1), "")),
                          "" ===
                            (c = (f = c && "=" === l.charAt(1))
                              ? ((s = parseInt(l.charAt(0) + "1", 10)),
                                (l = l.substr(2)),
                                (s *= parseFloat(l)),
                                l.replace(et, ""))
                              : ((s = parseFloat(l)),
                                c ? l.replace(et, "") : "")) &&
                            (c = o in W ? W[o] : u),
                          (l = s || 0 === s ? (f ? s + r : s) + c : e[o]),
                          u === c ||
                            ("" === c && "lineHeight" !== o) ||
                            ((s || 0 === s) &&
                              r &&
                              ((r = T(t, o, r, u)),
                              "%" === c
                                ? ((r /= T(t, o, 100, "%") / 100),
                                  !0 !== e.strictUnits && (a = r + "%"))
                                : "em" === c ||
                                  "rem" === c ||
                                  "vw" === c ||
                                  "vh" === c
                                ? (r /= T(t, o, 1, c))
                                : "px" !== c &&
                                  ((s = T(t, o, s, c)), (c = "px")),
                              f && (s || 0 === s) && (l = s + r + c))),
                          f && (s += r),
                          (!r && 0 !== r) || (!s && 0 !== s)
                            ? void 0 !== h[o] &&
                              (l || (l + "" != "NaN" && null != l))
                              ? ((n = new H(
                                  h,
                                  o,
                                  s || r || 0,
                                  0,
                                  n,
                                  -1,
                                  o,
                                  !1,
                                  0,
                                  a,
                                  l
                                )).xs0 =
                                  "none" !== l ||
                                  ("display" !== o && -1 === o.indexOf("Style"))
                                    ? l
                                    : a)
                              : g(e[o])
                            : ((n = new H(
                                h,
                                o,
                                r,
                                s - r,
                                n,
                                0,
                                o,
                                !1 !== Y && ("px" === c || "zIndex" === o),
                                0,
                                a,
                                l
                              )).xs0 = c));
                  }
                  i && n && !n.plugin && (n.plugin = i);
                }
                return n;
              }),
              (t.setRatio = function (t) {
                var e,
                  n,
                  i,
                  o = this._firstPT;
                if (
                  1 !== t ||
                  (this._tween._time !== this._tween._duration &&
                    0 !== this._tween._time)
                )
                  if (
                    t ||
                    (this._tween._time !== this._tween._duration &&
                      0 !== this._tween._time) ||
                    -1e-6 === this._tween._rawPrevTime
                  )
                    for (; o; ) {
                      if (
                        ((e = o.c * t + o.s),
                        o.r ? (e = o.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                        o.type)
                      )
                        if (1 === o.type)
                          if (2 === (i = o.l))
                            o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2;
                          else if (3 === i)
                            o.t[o.p] =
                              o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                          else if (4 === i)
                            o.t[o.p] =
                              o.xs0 +
                              e +
                              o.xs1 +
                              o.xn1 +
                              o.xs2 +
                              o.xn2 +
                              o.xs3 +
                              o.xn3 +
                              o.xs4;
                          else if (5 === i)
                            o.t[o.p] =
                              o.xs0 +
                              e +
                              o.xs1 +
                              o.xn1 +
                              o.xs2 +
                              o.xn2 +
                              o.xs3 +
                              o.xn3 +
                              o.xs4 +
                              o.xn4 +
                              o.xs5;
                          else {
                            for (n = o.xs0 + e + o.xs1, i = 1; i < o.l; i++)
                              n += o["xn" + i] + o["xs" + (i + 1)];
                            o.t[o.p] = n;
                          }
                        else
                          -1 === o.type
                            ? (o.t[o.p] = o.xs0)
                            : o.setRatio && o.setRatio(t);
                      else o.t[o.p] = e + o.xs0;
                      o = o._next;
                    }
                  else
                    for (; o; )
                      2 !== o.type ? (o.t[o.p] = o.b) : o.setRatio(t),
                        (o = o._next);
                else
                  for (; o; ) {
                    if (2 !== o.type)
                      if (o.r && -1 !== o.type)
                        if (((e = o.r(o.s + o.c)), o.type)) {
                          if (1 === o.type) {
                            for (
                              i = o.l, n = o.xs0 + e + o.xs1, i = 1;
                              i < o.l;
                              i++
                            )
                              n += o["xn" + i] + o["xs" + (i + 1)];
                            o.t[o.p] = n;
                          }
                        } else o.t[o.p] = e + o.xs0;
                      else o.t[o.p] = o.e;
                    else o.setRatio(t);
                    o = o._next;
                  }
              }),
              (t._enableTransforms = function (t) {
                (this._transform = this._transform || Gt(this._target, S, !0)),
                  (this._transformType =
                    (this._transform.svg && q) ||
                    (!t && 3 !== this._transformType)
                      ? 2
                      : 3);
              });
            function $t(t) {
              (this.t[this.p] = this.e),
                this.data._linkCSSP(this, this._next, null, !0);
            }
            function Jt(t, e, n) {
              var i, o, r, s;
              if (t.slice) for (o = t.length; -1 < --o; ) Jt(t[o], e, n);
              else
                for (o = (i = t.childNodes).length; -1 < --o; )
                  (s = (r = i[o]).type),
                    r.style && (e.push(h(r)), n && n.push(r)),
                    (1 !== s && 9 !== s && 11 !== s) ||
                      !r.childNodes.length ||
                      Jt(r, e, n);
            }
            (t._addLazySet = function (t, e, n) {
              t = this._firstPT = new H(t, e, 0, 0, this._firstPT, 2);
              (t.e = n), (t.setRatio = $t), (t.data = this);
            }),
              (t._linkCSSP = function (t, e, n, i) {
                return (
                  t &&
                    (e && (e._prev = t),
                    t._next && (t._next._prev = t._prev),
                    t._prev
                      ? (t._prev._next = t._next)
                      : this._firstPT === t &&
                        ((this._firstPT = t._next), (i = !0)),
                    n
                      ? (n._next = t)
                      : i || null !== this._firstPT || (this._firstPT = t),
                    (t._next = e),
                    (t._prev = n)),
                  t
                );
              }),
              (t._mod = function (t) {
                for (var e = this._firstPT; e; )
                  "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
              }),
              (t._kill = function (t) {
                var e,
                  n,
                  i,
                  o = t;
                if (t.autoAlpha || t.alpha) {
                  for (n in ((o = {}), t)) o[n] = t[n];
                  (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
                }
                for (
                  t.className &&
                    (e = this._classNamePT) &&
                    ((i = e.xfirst) && i._prev
                      ? this._linkCSSP(i._prev, e._next, i._prev._prev)
                      : i === this._firstPT && (this._firstPT = e._next),
                    e._next && this._linkCSSP(e._next, e._next._next, i._prev),
                    (this._classNamePT = null)),
                    e = this._firstPT;
                  e;

                )
                  e.plugin &&
                    e.plugin !== n &&
                    e.plugin._kill &&
                    (e.plugin._kill(t), (n = e.plugin)),
                    (e = e._next);
                return Qt.TweenPlugin.prototype._kill.call(this, o);
              });
            return (
              (A.cascadeTo = function (t, e, n) {
                var i,
                  o,
                  r,
                  s,
                  a = Qt.default.to(t, e, n),
                  l = [a],
                  u = [],
                  c = [],
                  f = [],
                  h = Qt.default._internals.reservedProps;
                for (
                  t = a._targets || a.target,
                    Jt(t, u, f),
                    a.render(e, !0, !0),
                    Jt(t, c),
                    a.render(0, !0, !0),
                    a._enabled(!0),
                    i = f.length;
                  -1 < --i;

                )
                  if ((o = m(f[i], u[i], c[i])).firstMPT) {
                    for (r in ((o = o.difs), n)) h[r] && (o[r] = n[r]);
                    for (r in ((s = {}), o)) s[r] = u[i][r];
                    l.push(Qt.default.fromTo(f[i], e, s, o));
                  }
                return l;
              }),
              Qt.TweenPlugin.activate([A]),
              A
            );
          },
          !0
        ),
        Qt.globals.CSSPlugin);
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), i(n(7))),
      r = i(n(6));
    function s(t) {
      var n = this;
      (this._renderItem = null),
        (this.onForegroundColorChange = function () {
          n.render(0, 0);
        }),
        (this.renderCallback = function (t, e) {
          n.render(t, e);
        }),
        (this.cursorName = t),
        r.default.Instance.onForegroundColorChange.sub(
          this.onForegroundColorChange
        );
    }
    (s.prototype.activate = function (t) {}),
      (s.prototype.deactivate = function () {
        this.stopRender();
      }),
      (s.prototype.getElement = function () {
        return null;
      }),
      (s.prototype.startRender = function () {
        this.render(0, 0),
          null === this._renderItem &&
            (this._renderItem = o.default.Instance.add(
              this.renderCallback,
              60
            ));
      }),
      (s.prototype.stopRender = function () {
        null !== this._renderItem &&
          (o.default.Instance.remove(this._renderItem),
          (this._renderItem = null));
      }),
      (s.prototype.render = function (t, e) {}),
      (e.default = s);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(3);
    function o() {
      var t = this;
      (this._windowHeight = 0),
        (this._windowWidth = 0),
        (this._bodyHeight = 0),
        (this._bodyWidth = 0),
        (this._triggerResize = new i.SignalDispatcher()),
        (this._triggerBeforeResize = new i.SignalDispatcher()),
        (this._triggerAfterResize = new i.SignalDispatcher()),
        (this.internalResize = function () {
          t._triggerBeforeResize.dispatch(),
            (t._windowWidth = window.innerWidth),
            (t._windowHeight = window.innerHeight),
            (t._windowHeight = t._heightCalc.offsetHeight),
            (t._bodyWidth = document.body.offsetWidth),
            (t._bodyHeight = document.body.offsetHeight),
            t._triggerResize.dispatch(),
            t._triggerAfterResize.dispatch();
        }),
        ((o._instance = this)._heightCalc = document.createElement("div")),
        (this._heightCalc.style.position = "absolute"),
        (this._heightCalc.style.height = "100vh"),
        document.body.appendChild(this._heightCalc),
        (this._windowHeight = this._heightCalc.offsetHeight),
        window.addEventListener("resize", this.internalResize),
        this.internalResize();
    }
    Object.defineProperty(o, "Instance", {
      get: function () {
        return this._instance;
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(o.prototype, "windowHeight", {
        get: function () {
          return this._windowHeight;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "windowWidth", {
        get: function () {
          return this._windowWidth;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "bodyHeight", {
        get: function () {
          return this._bodyHeight;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "bodyWidth", {
        get: function () {
          return this._bodyWidth;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "onResize", {
        get: function () {
          return this._triggerResize.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "onBeforeResize", {
        get: function () {
          return this._triggerBeforeResize.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "onAfterResize", {
        get: function () {
          return this._triggerAfterResize.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.default = o);
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), n(3)),
      r = i(n(20)),
      s = i(n(21));
    function a() {
      var e = this;
      (this._links = []),
        (this._activeKeyCodes = []),
        (this.onFocus = function (t) {
          e._activeKeyCodes = [];
        }),
        (this.onKeyDown = function (t) {
          -1 === e._activeKeyCodes.indexOf(t.keyCode) &&
            e._activeKeyCodes.push(t.keyCode);
        }),
        (this.onKeyUp = function (t) {
          t = e._activeKeyCodes.indexOf(t.keyCode);
          -1 !== t && e._activeKeyCodes.splice(t, 1);
        }),
        (this.onLinkClick = function (t) {
          e.handleLinkClick(t.link, t.getTarget());
        }),
        window.addEventListener("keydown", this.onKeyDown),
        window.addEventListener("keyup", this.onKeyUp),
        window.addEventListener("focus", this.onFocus);
    }
    Object.defineProperty(a, "Instance", {
      get: function () {
        return (
          null == this._instance && (this._instance = new a()), this._instance
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      (a.prototype.add = function (t) {
        t = new l(t);
        t.onClick.subscribe(this.onLinkClick), this._links.push(t);
      }),
      (a.prototype.addAllAtags = function (t) {
        var e = this;
        t.querySelectorAll("a").forEach(function (t) {
          return e.add(t);
        });
      }),
      (a.prototype.remove = function (t) {
        for (var e = this._links.length, n = 0; n < e; n++)
          if (this._links[n].target === t)
            return this._links[n].dispose(), void this._links.splice(n, 1);
      }),
      (a.prototype.removeAllAtags = function (t) {
        var e = this;
        t.querySelectorAll("a").forEach(function (t) {
          return e.remove(t);
        });
      }),
      (a.prototype.handleLinkClick = function (t, e) {
        void 0 === e && (e = null);
        var n = s.default.getBaseUrl();
        this.useTemplate(t)
          ? ((n = t.replace(n, "")),
            -1 === this._activeKeyCodes.indexOf(91)
              ? r.default.Instance.goto(n)
              : window.open(n, "_blank"))
          : -1 !== t.indexOf("mailto:")
          ? (window.location.href = t)
          : ((n =
              -1 !== this._activeKeyCodes.indexOf(91)
                ? "_blank"
                : null === e
                ? "_self"
                : e),
            window.open(t, n));
      }),
      (a.prototype.useTemplate = function (t) {
        return (
          s.default.isInternal(t) &&
          !s.default.isSubdomain(t) &&
          !s.default.isEmail(t) &&
          !s.default.isFile(t)
        );
      }),
      (e.default = a);
    Object.defineProperty(u.prototype, "onClick", {
      get: function () {
        return this._onClick.asEvent();
      },
      enumerable: !1,
      configurable: !0,
    }),
      (u.prototype.getTarget = function () {
        return this.target instanceof HTMLAnchorElement
          ? this.target.target
          : null;
      }),
      (u.prototype.dispose = function () {
        this.onClick.clear(),
          this.target.removeEventListener("click", this.handleClickEvent);
      });
    var l = u;
    function u(t) {
      var e = this;
      (this._onClick = new o.SimpleEventDispatcher()),
        (this.link = ""),
        (this.handleClickEvent = function (t) {
          t.preventDefault(), t.stopPropagation(), e._onClick.dispatch(e);
        }),
        (this.target = t),
        (this.link = this.target.toString()),
        this.target.addEventListener("click", this.handleClickEvent);
    }
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      l = (Object.defineProperty(e, "__esModule", { value: !0 }), i(n(2))),
      o = n(3),
      r = n(62);
    function u(t, e) {
      var n = this;
      void 0 === e && (e = null),
        (this.__componentNodeTypeGuard = "COMPONENT_NODE"),
        (this._onChildAdded = new o.SimpleEventDispatcher()),
        (this._onChildRemove = new o.SimpleEventDispatcher()),
        (this._onSiblingAdded = new o.SimpleEventDispatcher()),
        (this._onInitialized = new o.SignalDispatcher()),
        (this._isInitialized = !1),
        (this._onElementRemove = new o.SignalDispatcher()),
        (this._onElementRemoved = new o.SignalDispatcher()),
        (this._onDestroy = new o.SignalDispatcher()),
        (this._onAnyChildAdded = new o.SimpleEventDispatcher()),
        (this._onAnyChildRemoved = new o.SimpleEventDispatcher()),
        (this._childComponents = []),
        (this._siblingComponents = []),
        (this._isDestroyed = !1),
        (this._parentNode = null),
        (this.dispatchChildRemoved = function (t) {
          n._onChildRemove.dispatch(t), n._onAnyChildRemoved.dispatch(t);
        }),
        (this.dispatchChildAdded = function (t) {
          n._onChildAdded.dispatch(t), n._onAnyChildAdded.dispatch(t);
        }),
        (this._content = t),
        (this._parentNode = e);
    }
    Object.defineProperty(u.prototype, "onInitialized", {
      get: function () {
        return this._onInitialized.asEvent();
      },
      enumerable: !1,
      configurable: !0,
    }),
      (u.prototype.isInitialized = function () {
        return this._isInitialized;
      }),
      Object.defineProperty(u.prototype, "onElementRemove", {
        get: function () {
          return this._onElementRemove.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onElementRemoved", {
        get: function () {
          return this._onElementRemoved.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onChildAdded", {
        get: function () {
          return this._onChildAdded.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onSiblingAdded", {
        get: function () {
          return this._onSiblingAdded.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onChildRemoved", {
        get: function () {
          return this._onChildRemove.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onDestroy", {
        get: function () {
          return this._onDestroy.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onAnyChildAdded", {
        get: function () {
          return this._onAnyChildAdded.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "onAnyChildRemoved", {
        get: function () {
          return this._onAnyChildRemoved.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (u.prototype.init = function () {
        this.__activateNode(),
          (this.params = new r.DOMParameters(this._content)),
          l.default.createSubComponents(this.getElement(), this),
          (this._isInitialized = !0),
          this._onInitialized.dispatch();
      }),
      (u.prototype.__setParentNode = function (e) {
        var n = this;
        this._parentNode !== e &&
          (null !== this._parentNode &&
            this.getComponents().forEach(function (t) {
              n._parentNode.removeComponent(t);
            }),
          null !== (this._parentNode = e) &&
            this.getComponents().forEach(function (t) {
              e.__addComponent(t);
            }));
      }),
      (u.prototype.hasParentComponentNode = function () {
        return null !== this._parentNode;
      }),
      (u.prototype.getElement = function () {
        return this._content;
      }),
      (u.prototype.__activateNode = function () {
        -1 === u.ALL_ACTIVE_NODES.indexOf(this) &&
          u.ALL_ACTIVE_NODES.push(this);
      }),
      (u.prototype.__deactivateNode = function () {
        var t = u.ALL_ACTIVE_NODES.indexOf(this);
        -1 !== t && u.ALL_ACTIVE_NODES.splice(t, 1);
      }),
      (u.prototype.removeThis = function (t) {
        u.removeChild(this, (t = void 0 === t ? !0 : t));
      }),
      (u.prototype.__removeFromDOM = function (t) {
        void 0 === t && (t = !0),
          this.__setParentNode(null),
          this.__dispatchElementRemove(),
          this.getElement().parentElement &&
            this.getElement().parentElement.removeChild(this.getElement()),
          this.__dispatchElementRemoved(),
          t && this.__destroy();
      }),
      (u.prototype.isDestroyed = function () {
        return this._isDestroyed;
      }),
      (u.prototype.__destroy = function () {
        this.hasParentComponentNode()
          ? this.__removeFromDOM(!0)
          : (this.__deactivateNode(),
            this.getChildComponentNodes().forEach(function (t) {
              t.__destroy();
            }),
            (this._isDestroyed = !0),
            this._onDestroy.dispatch());
      }),
      (u.prototype.__dispatchElementRemove = function () {
        this.getChildComponentNodes().forEach(function (t) {
          t.__dispatchElementRemove();
        }),
          this._onElementRemove.dispatch();
      }),
      (u.prototype.__dispatchElementRemoved = function () {
        this.getChildComponentNodes().forEach(function (t) {
          t.__dispatchElementRemoved();
        }),
          this._onElementRemoved.dispatch();
      }),
      (u.prototype.__addComponent = function (t) {
        -1 === this._childComponents.indexOf(t) &&
          (this._childComponents.push(t),
          t.node.onChildRemoved.sub(this.dispatchChildRemoved),
          t.node.onChildAdded.sub(this.dispatchChildAdded),
          this.dispatchChildAdded(t));
      }),
      (u.prototype.removeComponent = function (t) {
        var e = this._childComponents.indexOf(t);
        -1 !== e &&
          (this._childComponents.splice(e, 1),
          t.node.onChildRemoved.unsub(this.dispatchChildRemoved),
          t.node.onChildAdded.unsub(this.dispatchChildAdded),
          this.dispatchChildRemoved(t));
      }),
      (u.prototype.__addSibling = function (t) {
        this._siblingComponents.push(t), this._onSiblingAdded.dispatch(t);
      }),
      (u.prototype.getComponents = function () {
        return this._siblingComponents;
      }),
      (u.prototype.getComponentByType = function (e) {
        var n = null;
        return (
          this.getComponents().forEach(function (t) {
            t instanceof e && (n = t);
          }),
          n
        );
      }),
      (u.prototype.getParent = function () {
        return this._parentNode;
      }),
      (u.prototype.getChildComponents = function (t) {
        var e = [];
        return (
          (t = void 0 === t ? !1 : t) &&
            this._siblingComponents.forEach(function (t) {
              e.push(t);
            }),
          this._childComponents.forEach(function (t) {
            e.push(t);
          }),
          e
        );
      }),
      (u.prototype.getChildComponentNodes = function () {
        for (
          var t = this.getChildComponents(), e = [], n = t.length, i = 0;
          i < n;
          i++
        )
          -1 === e.indexOf(t[i].node) && e.push(t[i].node);
        return e;
      }),
      (u.addChild = function (t, e, n) {
        void 0 === n && (n = !0);
        var i = u.searchFirstActiveParentNodeFromElement(e),
          e = u.getElement(e),
          o = u.getElement(t);
        l.default.isComponent(t) && t.isDestroyed(),
          o.parentElement !== e &&
            (u.searchFirstActiveNestedNodesFromElement(o).forEach(function (t) {
              t.__activateNode();
            }),
            e.appendChild(o),
            u.searchFirstActiveNestedNodesFromElement(o).forEach(function (t) {
              t.__setParentNode(i);
            }),
            l.default.isElementOfComponentType(o)
              ? (t = u.searchActiveNodeFromElement(o))
                ? n &&
                  t.getComponents().forEach(function (t) {
                    t.__tryAwake();
                  })
                : l.default.create(o, i, n)
              : ((e = u.searchFirstActiveNestedNodesFromElement(o)),
                n && 0 < e.length
                  ? e.forEach(function (t) {
                      t.getComponents().forEach(function (t) {
                        t.__tryAwake();
                      });
                    })
                  : l.default.createSubComponents(o, i, !1)));
      }),
      (u.removeChild = function (t, e) {
        void 0 === e && (e = !0),
          t &&
            ((t = u.getElement(t)),
            u.searchFirstActiveNestedNodesFromElement(t).forEach(function (t) {
              t.__removeFromDOM(e);
            }));
      }),
      (u.replaceChild = function (t, e, n, i) {
        void 0 === n && (n = !0), void 0 === i && (i = !0);
        var o = u.getElement(e);
        o.parentElement &&
          (u.addChild(t, o.parentElement, n),
          o.parentElement.replaceChild(u.getElement(t), o),
          u.removeChild(e, i));
      }),
      (u.isComponentNode = function (t) {
        return void 0 !== t.__componentNodeTypeGuard;
      }),
      (u.getElement = function (t) {
        return l.default.isComponent(t) || u.isComponentNode(t)
          ? t.getElement()
          : t;
      }),
      (u.searchFirstActiveParentNodeFromElement = function (t) {
        if (l.default.isComponent(t)) return t.node;
        if (u.isComponentNode(t)) return t;
        for (var e = t; e && !e.getAttribute(l.default.SEARCH_MODULE); )
          e = e.parentElement;
        return e ? u.searchActiveNodeFromElement(e) : null;
      }),
      (u.searchActiveNodeFromElement = function (t) {
        for (var e = u.ALL_ACTIVE_NODES.length, n = 0; n < e; n++) {
          var i = u.ALL_ACTIVE_NODES[n];
          if (i.getElement() === t) return i;
        }
        return null;
      }),
      (u.searchFirstActiveNestedNodesFromElement = function (t) {
        var e,
          n = u.searchActiveNodeFromElement(t);
        return n
          ? [n]
          : ((n = l.default.getAllChildComponentDivs(t, !0)),
            (e = []),
            n.forEach(function (t) {
              t = u.searchActiveNodeFromElement(t);
              t && e.push(t);
            }),
            e);
      }),
      (u.searchForParentComponentNode = function (t, e) {
        for (
          var n = 0, i = e;
          !l.default.isElementOfComponentType(i) &&
          (n++, (i = i.parentElement).parentElement && n < 200);

        );
        if (t.getElement() === i) return t;
        for (
          var o = t.getChildComponentNodes(), r = o.length, s = null, a = 0;
          a < r && !(s = u.searchForParentComponentNode(o[a], i));
          a++
        );
        return s;
      }),
      (u.searchRootComponentNode = function (t) {
        for (var e = t; e.getParent(); ) e = e.getParent();
        return e;
      }),
      (u.ALL_ACTIVE_NODES = []),
      (e.default = u);
  },
  function (t, e) {
    var n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (i.getRandomHex = function (t) {
        return (
          ((t = void 0 === t ? !0 : t) ? "#" : "") +
          Math.floor(16777215 * Math.random()).toString(16)
        );
      }),
      (i.hexToRGB = function (t, e) {
        var n = parseInt(t.slice(1, 3), 16),
          i = parseInt(t.slice(3, 5), 16),
          t = parseInt(t.slice(5, 7), 16);
        return e
          ? "rgba(" + n + ", " + i + ", " + t + ", " + e + ")"
          : "rgb(" + n + ", " + i + ", " + t + ")";
      }),
      (i.rgbToHex = function (t, e, n) {
        return (
          "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
        );
      }),
      (e.default = i);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Subscription =
        e.EventListBase =
        e.DispatcherWrapper =
        e.DispatcherBase =
          void 0);
    var i = n(54),
      o =
        (Object.defineProperty(e, "DispatcherBase", {
          enumerable: !0,
          get: function () {
            return i.DispatcherBase;
          },
        }),
        Object.defineProperty(e, "DispatcherWrapper", {
          enumerable: !0,
          get: function () {
            return i.DispatcherWrapper;
          },
        }),
        Object.defineProperty(e, "EventListBase", {
          enumerable: !0,
          get: function () {
            return i.EventListBase;
          },
        }),
        n(31));
    Object.defineProperty(e, "Subscription", {
      enumerable: !0,
      get: function () {
        return o.Subscription;
      },
    });
  },
  function (t, e, n) {
    "use strict";
    function i(t, e, n, i) {
      void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        void 0 === n && (n = 0),
        void 0 === i && (i = 0),
        (this.x = 0),
        (this.y = 0),
        (this.width = 0),
        (this.height = 0),
        (this.x = t),
        (this.y = e),
        (this.width = n),
        (this.height = i);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (i.prototype.apply = function (t) {
        (this.x += t.x),
          (this.y += t.y),
          (this.width += t.width),
          (this.height += t.height);
      }),
      (i.prototype.convertFrom = function (t) {
        (this.x = t.left),
          (this.y = t.top),
          (this.width = t.width),
          (this.height = t.height);
      }),
      (i.from = function (t) {
        return new i(t.left, t.top, t.width, t.height);
      }),
      (e.default = i);
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.SetSlideshow = function (t) {
          this.slideshow = t;
        }),
        (a.prototype.awake = function () {
          this.slideshow.onUpdateEvent.sub(this.onSlideshowUpdate),
            o.prototype.awake.call(this);
        }),
        (a.prototype.sleep = function () {
          this.slideshow.onUpdateEvent.unsub(this.onSlideshowUpdate),
            o.prototype.sleep.call(this);
        }),
        (a.prototype.updateToPage = function () {}),
        a);
    function a() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onSlideshowUpdate = function () {
          t.updateToPage();
        }),
        t
      );
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = n(5),
      u = n(3),
      c = s(n(20)),
      f = s(n(33)),
      s =
        ((o = a.default),
        r(h, o),
        Object.defineProperty(h.prototype, "onPageHeightChange", {
          get: function () {
            return this._onPageHeightChange.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (h.prototype.__init = function () {
          o.prototype.__init.call(this),
            (this.scrollContent = this.getElement());
        }),
        (h.prototype.__awake = function () {
          var t = this;
          o.prototype.__awake.call(this),
            (this._savedPageHeight = this.getPageHeight()),
            this.dispatchNewPageHeight(),
            this.autoUpdatePageHeight &&
              (this._interval = setInterval(function () {
                t._savedPageHeight !== t.getPageHeight() &&
                  t.dispatchNewPageHeight();
              }, 200)),
            (this._marginTop = Number.parseFloat(
              window.getComputedStyle(this.getElement()).marginTop
            ));
        }),
        (h.prototype.__sleep = function () {
          o.prototype.__sleep.call(this), clearInterval(this._interval);
        }),
        (h.prototype.transitionIn = function (t) {
          t.done(),
            "replace" === c.default.Instance.getUrlChangeMode() &&
              f.default.Instance.restoreScroll();
        }),
        (h.prototype.transitionOut = function (t) {
          t.done();
        }),
        (h.prototype.startScrollAt = function () {
          return 0;
        }),
        (h.prototype.scrollTo = function (t) {
          l.TweenLite.set(this.scrollContent, { y: t });
        }),
        (h.prototype.getPageHeight = function () {
          return this.getElement().offsetHeight + this._marginTop;
        }),
        h);
    function h() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t._onPageHeightChange = new u.SignalDispatcher()),
        (t._savedPageHeight = -1),
        (t.autoUpdatePageHeight = !0),
        (t._marginTop = 0),
        (t.path = ""),
        (t.dispatchNewPageHeight = function () {
          (t._savedPageHeight = t.getPageHeight()),
            t._onPageHeightChange.dispatch();
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Route = void 0),
        i(n(19))),
      r = i(n(32)),
      s = n(3),
      a = i(n(2)),
      l = i(n(13)),
      u = i(n(21));
    function c(t, e) {
      var n = this;
      (this._onNewTemplate = new s.SimpleEventDispatcher()),
        (this._onLoadingStart = new s.SignalDispatcher()),
        (this._onLoadingDone = new s.SignalDispatcher()),
        (this._onNewPath = new s.SignalDispatcher()),
        (this._pageLoader = new XMLHttpRequest()),
        (this._isLoading = !1),
        (this._queuedLoadLinks = []),
        (this._urlChangeMode = ""),
        (this._routes = []),
        (this.overrideQueuedTemplate = !0),
        (this.onHashChanged = function () {
          n.goto(window.location.href, "replace");
        }),
        (this.onPageLoaded = function () {
          var t;
          4 === n._pageLoader.readyState &&
            200 === n._pageLoader.status &&
            (((t = document.createElement("html")).innerHTML =
              n._pageLoader.responseText),
            n.saveLocally(
              n._pageLoader.responseURL,
              n._pageLoader.responseText
            ),
            n.createNewTemplate(
              t,
              u.default.getWellFormatedPath(n._pageLoader.responseURL)
            ));
        }),
        (this.onNewTemplateReady = function () {
          n._switcher.addNewTemplate(n._latestLoadedTemplate),
            n.isLoadingTemplate() &&
              n._queuedLoadLinks.length <= 0 &&
              (n._onLoadingDone.dispatch(), (n._isLoading = !1)),
            n.loadNextQueued();
        }),
        (this.onOutAnimationDone = function (t) {
          t.rootModule.removeThis();
        }),
        this.setSwitcher(e),
        (this._currentUrl = window.location.href),
        ((c._instance = this)._pageLoader = new XMLHttpRequest()),
        (window.onpopstate = this.onHashChanged),
        (this._templateLayer = t);
    }
    Object.defineProperty(c, "Instance", {
      get: function () {
        return this._instance;
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(c.prototype, "onNewTemplate", {
        get: function () {
          return this._onNewTemplate.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(c.prototype, "onLoadingStart", {
        get: function () {
          return this._onLoadingStart.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(c.prototype, "onLoadingDone", {
        get: function () {
          return this._onLoadingDone.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(c.prototype, "onNewPath", {
        get: function () {
          return this._onNewPath.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (c.prototype.createBodyTemplate = function () {
        var t,
          e = this.getRoute(
            window.location.href.replace(u.default.getBaseUrl(), "")
          );
        e
          ? ((t =
              document.body.querySelector(
                ".template"
              )).parentElement.removeChild(t),
            this.goto(e.url, "replace"))
          : this.createNewTemplate(
              document.body,
              u.default.getWellFormatedPath(window.location.href),
              !1
            );
      }),
      (c.prototype.addRoute = function (t) {
        this._routes.push(t);
      }),
      (c.prototype.getCurrentTemplate = function () {
        return this._currentTemplate;
      }),
      (c.prototype.setSwitcher = function (t) {
        this._switcher && this._switcher.kill(),
          (this._switcher = t),
          this._switcher.setManager(this);
      }),
      (c.prototype.goto = function (t, e) {
        this._urlChangeMode = e = void 0 === e ? "push" : e;
        e = this.getRoute(t);
        e && e.hardRedirect && (t = e.pointer),
          this._currentUrl !== t &&
            ((this._currentUrl = t),
            "push" === this._urlChangeMode
              ? history.pushState(t, t, t)
              : "replace" === this._urlChangeMode &&
                history.replaceState(t, t, t),
            e && (t = e.pointer),
            this._onNewPath.dispatch(),
            this._switcher.urlChange(),
            this._isLoading
              ? this.queueUrl(t, this.overrideQueuedTemplate)
              : this.loadPage(t));
      }),
      (c.prototype.getRoute = function (t) {
        for (var e = this._routes.length, n = 0; n < e; n++)
          if (this._routes[n].url.replace("/", "") === t.replace("/", ""))
            return this._routes[n];
        return null;
      }),
      (c.prototype.loadNextQueued = function () {
        0 < this._queuedLoadLinks.length &&
          this.loadPage(this._queuedLoadLinks.shift());
      }),
      (c.prototype.queueUrl = function (t, e) {
        (e = void 0 === e ? !0 : e) && (this._queuedLoadLinks = []),
          this._queuedLoadLinks.push(t);
      }),
      (c.prototype.getUrlChangeMode = function () {
        return this._urlChangeMode;
      }),
      (c.prototype.loadPage = function (t) {
        this.isLoadingTemplate() || this._onLoadingStart.dispatch(),
          (this._isLoading = !0);
        var e,
          n = this.getLocally(t);
        n
          ? (((e = document.createElement("html")).innerHTML = n),
            this.createNewTemplate(e, u.default.getWellFormatedPath(t)))
          : ((this._pageLoader.onreadystatechange = this.onPageLoaded),
            this._pageLoader.open("POST", t, !0),
            this._pageLoader.setRequestHeader("Content-type", "text/html"),
            this._pageLoader.send());
      }),
      (c.prototype.createNewTemplate = function (t, e, n) {
        void 0 === n && (n = !0);
        t = t.querySelector(".template");
        if (n)
          try {
            t = t.cloneNode(!0);
          } catch (t) {
            return;
          }
        this.isLoadingTemplate() || this._onLoadingStart.dispatch(),
          (this._isLoading = !0),
          (this._latestLoadedNode = a.default.create(t, null, !1)),
          (this._latestLoadedTemplate =
            this._latestLoadedNode.getComponentByType(o.default)),
          (this._latestLoadedTemplate.path = e),
          this._latestLoadedTemplate.isBuild()
            ? this.onNewTemplateReady()
            : this._latestLoadedTemplate.onBuild.one(this.onNewTemplateReady);
      }),
      (c.prototype.saveLocally = function (t, e) {
        c.localCacheHash &&
          ((t = c.localCacheHash + "_" + u.default.getWellFormatedPath(t)),
          localStorage.setItem(t, e));
      }),
      (c.prototype.getLocally = function (t) {
        return c.localCacheHash
          ? ((t = c.localCacheHash + "_" + u.default.getWellFormatedPath(t)),
            localStorage.getItem(t))
          : null;
      }),
      (c.prototype.isLoadingTemplate = function () {
        return this._isLoading;
      }),
      (c.prototype.setTemplate = function (t) {
        var e = new r.default(t);
        return (
          (this._currentTemplate = t),
          this._onNewTemplate.dispatch(t),
          (this._templateLayer.style.visibility = "visible"),
          (document.body.style.visibility = "visible"),
          l.default.addChild(this._currentTemplate, this._templateLayer, !1),
          this._latestLoadedNode.getComponents().forEach(function (t) {
            t.__tryAwake();
          }),
          e
        );
      }),
      (c.prototype.removeTemplate = function (t) {
        t.__tryUnload();
        t = new r.default(t);
        return t.onAllComplete.one(this.onOutAnimationDone), t;
      }),
      (c.localCacheHash = null),
      (e.default = c),
      (e.Route = function (t, e, n) {
        void 0 === n && (n = !1),
          (this.hardRedirect = !1),
          (this.url = t),
          (this.pointer = e),
          (this.hardRedirect = n);
      });
  },
  function (t, e, n) {
    "use strict";
    function o() {}
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (o.getBaseUrl = function () {
        return document.location.protocol + "//" + window.location.host;
      }),
      (o.genFullUrl = function (t) {
        return 0 === t.length
          ? window.location.href
          : "/" === t.substring(0, 1)
          ? this.getBaseUrl() + t
          : t;
      }),
      (o.isSubdomain = function (t) {
        for (var e = o.IGNORE_DOMAINS.length, n = 0; n < e; n++) {
          var i = t.indexOf(o.IGNORE_DOMAINS[n].replace("www.", ""));
          if (-1 !== i && 1 <= i && "." === t.substr(i - 1, 1)) {
            if (i < 4) return !0;
            if (4 <= i && "www." !== t.substr(i - 4, 4)) return !0;
          }
        }
        return !1;
      }),
      (o.isLocal = function (t) {
        for (var e = o.LOCAL_DOMAINS.length, n = 0; n < e; n++)
          if (-1 !== t.indexOf(o.LOCAL_DOMAINS[n])) return !0;
        return !1;
      }),
      (o.isInternal = function (t) {
        for (var e = o.IGNORE_DOMAINS.length, n = 0; n < e; n++)
          if (-1 !== t.indexOf(o.IGNORE_DOMAINS[n].replace("www.", "")))
            return !0;
        return !1;
      }),
      (o.isFile = function (t) {
        return 1 < t.split("/").pop().split(".").length;
      }),
      (o.isEmail = function (t) {
        t = t.replace("mailto:", "");
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          t.toLowerCase()
        );
      }),
      (o.getCurrentInternalPathFull = function () {
        return this.getWellFormatedPath(window.location.pathname);
      }),
      (o.getWellFormatedPath = function (t) {
        for (
          var e = (t = t.replace(o.getBaseUrl(), "")).split("/"),
            n = e.length,
            i = 0;
          i < n;
          i += 1
        )
          "" === e[0] && (e.splice(i, 1), --n, --i);
        return e.join("/");
      }),
      (o.getCurrentInternalPathAtLevel = function (t) {
        var e = this.getCurrentInternalPathFull().split("/");
        return t > e.length ? null : e[t];
      }),
      (o.IGNORE_DOMAINS = [window.location.hostname]),
      (o.LOCAL_DOMAINS = ["snailtemplate:3000"]),
      (e.default = o);
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(1))),
      l = n(5),
      u = n(65),
      c = (n(66), s(n(4))),
      f = n(3),
      h = s(n(18)),
      p = n(23),
      d = s(n(7)),
      s =
        ((o = a.default),
        r(_, o),
        Object.defineProperty(_.prototype, "onUpdateEvent", {
          get: function () {
            return this._onUpdate.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (_.prototype.build = function () {
          var e = this;
          this.getComponentsByType(h.default, !1).forEach(function (t) {
            t.SetSlideshow(e);
          }),
            (this._slidesClass = this.params.plain.slideclass
              ? "." + this.params.plain.slideclass
              : ".Module"),
            (this._autoTime = this.params.plain.autotime
              ? Number.parseFloat(this.params.plain.autotime)
              : -1),
            (this._slideContainer = this.qs(".container")),
            (this._slideTrigger = this.qs(".trigger")),
            (this._slides = this.getSlides()),
            (this._numOfSlides = this._slides.length),
            (this._staticWrapper = new p.StaticWrapper(this));
        }),
        (_.prototype.getSlides = function () {
          for (
            var t = new Array(),
              e = this._slideContainer.querySelectorAll(this._slidesClass),
              n = e.length,
              i = 0;
            i < n;
            i += 1
          ) {
            var o = e[i];
            o.parentNode === this._slideContainer && t.push(o);
          }
          return t;
        }),
        (_.prototype.awake = function () {
          c.default.RESIZE.onResize.sub(this.updateDragger),
            this.updateDragger();
          for (var t = 0; t < this._numOfSlides; t++)
            this._slides[t].addEventListener("click", this.onSlideClick);
          o.prototype.awake.call(this),
            this.params.plain["start-index"] &&
              this.gotoIndex(parseInt(this.params.plain["start-index"]), 0),
            (this._renderItem = d.default.Instance.add(this.render, 2));
        }),
        (_.prototype.becameVisible = function () {
          !0 !== this._isInView &&
            !(this._isInView = !0) === this._hasInteracted &&
            -1 != this._autoTime &&
            (this._autoTimeInterval = setInterval(
              this.gotoNext,
              this._autoTime
            ));
        }),
        (_.prototype.becameNotVisible = function () {
          !1 !== this._isInView &&
            ((this._isInView = !1), this.stopAutoPaganation());
        }),
        (_.prototype.sleep = function () {
          for (var t = 0; t < this._numOfSlides; t++)
            this._slides[t].removeEventListener("click", this.onSlideClick);
          null !== this._renderItem &&
            (d.default.Instance.remove(this._renderItem),
            (this._renderItem = null)),
            c.default.RESIZE.onResize.unsub(this.updateDragger),
            o.prototype.sleep.call(this);
        }),
        (_.prototype.getCurrentSlide = function () {
          return this._slides[this.getCurrentIndex()];
        }),
        (_.prototype.getNumOfSlides = function () {
          return this._numOfSlides;
        }),
        (_.prototype.getRatio = function () {
          var t = -this.getX() / -this._totalWidth;
          return 1 < t ? (t = 1) : t < 0 && (t = 0), t;
        }),
        (_.prototype.offsetItems = function (t) {
          for (var e = 0; e < this._numOfSlides; e++)
            l.TweenLite.set(this._slides[e], { x: t * e }),
              (this.offsetItem = t * e);
          this.updateDragger();
        }),
        (_.prototype.onUpdate = function () {
          this._onUpdate.dispatch();
        }),
        (_.prototype.onDragStart = function () {
          (this._hasInteracted = !0), this.stopAutoPaganation();
        }),
        (_.prototype.stopAutoPaganation = function () {
          null !== this._autoTimeInterval &&
            (clearInterval(this._autoTimeInterval),
            (this._autoTimeInterval = null));
        }),
        (_.prototype.getX = function () {
          return this._slideContainer && this._slideContainer._gsTransform
            ? this._slideContainer._gsTransform.x
            : 0;
        }),
        (_.prototype.gotoIndex = function (t, e) {
          this.gotoItem(this._slides[t], (e = void 0 === e ? 0.8 : e));
        }),
        (_.prototype.gotoItem = function (t, e) {
          for (
            var n = this,
              i =
                (void 0 === e && (e = 0.8),
                parseInt(window.getComputedStyle(this._slides[0]).marginRight),
                this._itemWidth * -this._slides.indexOf(t)),
              o = 0;
            o < this._numOfSlides && this._slides[o] !== t;
            o++
          )
            i += -this.offsetItem / (this._numOfSlides - 1);
          l.TweenLite.to(this._slideContainer, e, {
            x: i,
            onUpdate: function () {
              n.onUpdate();
            },
            ease: l.Expo.easeOut,
          });
        }),
        _);
    function _() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n.offsetItem = 0),
        (n._onUpdate = new f.SignalDispatcher()),
        (n._autoTimeInterval = null),
        (n._renderItem = null),
        (n._isInView = !1),
        (n._hasInteracted = !1),
        (n.render = function (t, e) {
          n.viewInfo.updateRect(),
            !0 === n.viewInfo.isInView()
              ? n.becameVisible()
              : n.becameNotVisible();
        }),
        (n.onSlideClick = function (t) {
          n.gotoItem(t.currentTarget);
        }),
        (n.getCurrentIndex = function () {
          var t = n._itemWidth * (n._numOfSlides - 1),
            t = Math.round((-n.getX() / t) * (n._numOfSlides - 1));
          return (
            t > n._numOfSlides - 1
              ? (t = n._numOfSlides - 1)
              : t < 0 && (t = 0),
            (t = isNaN(t) ? 0 : t)
          );
        }),
        (n.gotoNext = function () {
          var t = n.getCurrentIndex() + 1;
          t > n._numOfSlides - 1 && (t = 0), n.gotoItem(n._slides[t]);
        }),
        (n.gotoPrev = function () {
          var t = n.getCurrentIndex() - 1;
          t < 0 && (t = n.getNumOfSlides() - 1), n.gotoItem(n._slides[t]);
        }),
        (n.updateDragger = function () {
          var t, e;
          n._numOfSlides <= 1 ||
            (n._staticWrapper.requestRender(function () {
              var t = parseInt(
                window.getComputedStyle(n._slides[0]).marginRight
              );
              isNaN(t) && (t = 0),
                (n._itemWidth = n._slides[0].offsetWidth + t);
            }),
            (n.offsetSize =
              0.5 *
              parseInt(window.getComputedStyle(n._slides[0]).marginRight)),
            isNaN(n.offsetSize) && (n.offsetSize = 0),
            (t = -n.offsetItem - n.offsetSize),
            (e = -n._itemWidth * (n._numOfSlides - 1) + n.offsetSize + t),
            (n._totalWidth =
              -n._itemWidth * (n._numOfSlides - 1) + n.offsetSize + t),
            l.TweenLite.set(n._slideContainer, {
              x: -n._itemWidth * n.getCurrentIndex(),
            }),
            (n._dragger = u.Draggable.create(n._slideContainer, {
              type: "x",
              edgeResistance: 0.85,
              bounds: { minX: e, maxX: 0 },
              trigger: n._slideTrigger,
              minDuration: 0.2,
              maxDuration: 0.5,
              dragResistance: -1,
              zIndexBoost: !1,
              onDragStart: function () {
                n.onDragStart();
              },
              onDrag: function () {
                n.onUpdate();
              },
              onThrowUpdate: function () {
                n.onUpdate();
              },
              snap: function (t) {
                return (
                  (e / (n._numOfSlides - 1)) *
                  Math.round((t / e) * (n._numOfSlides - 1))
                );
              },
              cursor: "inherit",
              lockAxis: !0,
              throwProps: !0,
            })),
            n.onUpdate());
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StaticWrapper = void 0),
        i(n(4))),
      r = i(n(24));
    function s(t, e) {
      void 0 === e && (e = !0),
        (this.cacheRoot = !1),
        (this.cacheRoot = e),
        (this._comp = t),
        (this._cachedRoot = this._comp.getRoot().getComponentByType(r.default));
    }
    Object.defineProperty(s.prototype, "template", {
      get: function () {
        return this.cacheRoot
          ? this._cachedRoot
          : this._comp.getRoot().getComponentByType(r.default);
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(s.prototype, "onPageRecalculate", {
        get: function () {
          return this.template
            ? this.template.onPageRecalculate
            : o.default.RESIZE.onResize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (s.prototype.requestRender = function (t) {
        this.template ? this.template.requestRender(t) : t();
      }),
      (s.prototype.calculatePageHeight = function () {
        this.template && this.template.calculatePageHeight();
      }),
      (e.StaticWrapper = s);
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(19))),
      l = s(n(4)),
      u = s(n(67)),
      c = s(n(34)),
      f = s(n(17)),
      h = n(3),
      s =
        ((o = a.default),
        r(p, o),
        Object.defineProperty(p.prototype, "onPageRecalculate", {
          get: function () {
            return this._onPageRecalculate.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (p.prototype.__build = function () {
          (this.autoUpdatePageHeight = !1), o.prototype.__build.call(this);
        }),
        (p.prototype.__init = function () {
          (this._boundingBox = new f.default()),
            (this._staticFilter = new c.default(this, u.default)),
            this._staticFilter.onRemoved.sub(this.onStaticRemoved),
            o.prototype.__init.call(this);
        }),
        (p.prototype.__awake = function () {
          l.default.RESIZE.onBeforeResize.sub(this.enterAllElements),
            l.default.RESIZE.onResize.sub(this.calculatePageHeight),
            l.default.RESIZE.onAfterResize.sub(this.exitAllElements),
            o.prototype.__awake.call(this),
            this.node.onAnyChildAdded.sub(this.onAnyChildAdded),
            this.node.onAnyChildRemoved.sub(this.onAnyChildRemoved),
            this.calculatePageHeight(),
            this.updateScroll(),
            l.default.SCROLL ||
              window.addEventListener("scroll", this.updateScroll);
        }),
        (p.prototype.__sleep = function () {
          l.default.RESIZE.onBeforeResize.unsub(this.enterAllElements),
            l.default.RESIZE.onResize.unsub(this.calculatePageHeight),
            l.default.RESIZE.onAfterResize.unsub(this.exitAllElements),
            this.node.onAnyChildAdded.unsub(this.onAnyChildAdded),
            this.node.onAnyChildRemoved.unsub(this.onAnyChildRemoved),
            l.default.SCROLL ||
              window.removeEventListener("scroll", this.updateScroll),
            o.prototype.__sleep.call(this);
        }),
        (p.prototype.scrollTo = function (t) {
          l.default.SCROLL && o.prototype.scrollTo.call(this, t),
            (this._boundingBox.y = -1 * t),
            (this._boundingBox.height = l.default.RESIZE.windowHeight);
          for (var e = this._staticFilter.children.length, n = 0; n < e; n++)
            this._staticFilter.children[n].updateViewBounds(this._boundingBox);
        }),
        (p.prototype.getPageHeight = function () {
          return this.getElement().offsetHeight;
        }),
        (p.prototype.requestRender = function (t) {
          this._isRenderReady
            ? t()
            : (this.enterAllElements(), t(), this.exitAllElements());
        }),
        p);
    function p() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._onPageRecalculate = new h.SignalDispatcher()),
        (n._pageHeight = 0),
        (n._isRenderReady = !1),
        (n._isRecalculating = !1),
        (n.onAnyChildAdded = function (t) {
          n.calculatePageHeight();
        }),
        (n.onAnyChildRemoved = function (t) {
          n.calculatePageHeight();
        }),
        (n.onStaticRemoved = function (t) {
          t.node.onElementRemoved.one(n.calculatePageHeight);
        }),
        (n.updateScroll = function () {
          l.default.SCROLL
            ? n.scrollTo(-l.default.SCROLL.getCurrentScroll().y)
            : n.scrollTo(-window.pageYOffset);
        }),
        (n.enterAllElements = function () {
          n._isRenderReady ||
            (n._staticFilter.children.forEach(function (t) {
              t.isEntered() || t.showElementContainer();
            }),
            (n._isRenderReady = !0));
        }),
        (n.exitAllElements = function () {
          n._isRenderReady &&
            (n._staticFilter.children.forEach(function (t) {
              t.isEntered() || t.hideElementContainer();
            }),
            (n._isRenderReady = !1));
        }),
        (n.calculatePageHeight = function () {
          !n.isAwake() ||
            n._isRecalculating ||
            ((n._isRecalculating = !0),
            n.requestRender(function () {
              (n._boundingBox.width = l.default.RESIZE.windowWidth),
                (n._boundingBox.x = 0);
              for (
                var t = n._staticFilter.children.length,
                  e = (n._pageHeight = 0);
                e < t;
                e++
              )
                n._staticFilter.children[e].__updateStaticSize();
              n._onPageRecalculate.dispatch();
              for (e = 0; e < t; e++)
                n._staticFilter.children[e].__updateStaticPageY();
            }),
            n.dispatchNewPageHeight(),
            n.updateScroll(),
            (n._isRecalculating = !1));
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), n(3)),
      l = s(n(2)),
      u = n(23),
      c = s(n(11)),
      s =
        ((o = l.default),
        r(f, o),
        Object.defineProperty(f.prototype, "onImgLoaded", {
          get: function () {
            return this._onImgLoaded.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(f.prototype, "origWidth", {
          get: function () {
            return this._origWidth;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(f.prototype, "origHeight", {
          get: function () {
            return this._origHeight;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (f.prototype.load = function (t) {
          (this._static = new u.StaticWrapper(this)),
            this.params.plain.loadbeforeshow
              ? (this.onImgLoaded.one(function () {
                  t();
                }),
                this.loadAppropriateImage())
              : t();
        }),
        (f.prototype.awake = function () {
          (this.getElement().style.opacity = "0"),
            c.default.Instance.onResize.sub(this.onResize),
            this.onResize();
        }),
        (f.prototype.sleep = function () {
          c.default.Instance.onResize.unsub(this.onResize),
            this._fakeLoader.removeEventListener(
              "load",
              this.onImageDataLoaded,
              !0
            ),
            this.getElement().removeEventListener(
              "load",
              this.onImageLoadedAndAdded
            );
        }),
        (f.prototype.getWidthToLoad = function () {
          return (
            this.roundToLoadSize(this.getElement().offsetWidth) *
            this.getDevicePixelRatio()
          );
        }),
        (f.prototype.getHeightToLoad = function () {
          return Math.round(this.getWidthToLoad() * this.getAspectRatio());
        }),
        (f.prototype.getAspectRatio = function () {
          var t = (this.params.plain.aspectratio || "1x1").split("x");
          return parseFloat(t[1]) / parseFloat(t[0]);
        }),
        (f.prototype.roundToLoadSize = function (t) {
          for (var e = f.BASIC_LOAD_SIZES.length, n = 0; n < e; n++) {
            var i = f.BASIC_LOAD_SIZES[n];
            if (t < i && i >= this._lastLoadedSize) {
              this._lastLoadedSize = i;
              break;
            }
          }
          return (
            0 === this._lastLoadedSize &&
              (this._lastLoadedSize = f.BASIC_LOAD_SIZES[e - 1]),
            this._lastLoadedSize
          );
        }),
        (f.prototype.getDevicePixelRatio = function () {
          var t = 1;
          return (t = window.devicePixelRatio ? window.devicePixelRatio : t);
        }),
        (f.prototype.isImgLoaded = function () {
          return !this._isLoading && this._isImgLoaded;
        }),
        (f.prototype.getLoadUrl = function () {
          return this.params.plain.src;
        }),
        (f.BASIC_LOAD_SIZES = [
          1, 25, 50, 100, 200, 400, 600, 800, 1200, 1500, 1800, 2600, 3600,
        ]),
        f);
    function f() {
      var e = (null !== o && o.apply(this, arguments)) || this;
      return (
        (e._onImgLoaded = new a.SignalDispatcher()),
        (e._origWidth = 0),
        (e._origHeight = 0),
        (e._isImgLoaded = !1),
        (e._isLoading = !1),
        (e._currentUrl = ""),
        (e._fakeLoader = new Image()),
        (e._lastLoadedSize = 0),
        (e.onResize = function () {
          var t = e.getElement().parentElement.offsetWidth * e.getAspectRatio();
          (e.getElement().style.height = t + "px"), e.loadAppropriateImage();
        }),
        (e.loadAppropriateImage = function () {
          var t;
          e._isLoading ||
            ((t = e.getLoadUrl()),
            e._currentUrl !== t &&
              ((e._currentUrl = t),
              (e._isLoading = !0),
              e._fakeLoader.addEventListener("load", e.onImageDataLoaded, !0),
              (e._fakeLoader.src = e._currentUrl)));
        }),
        (e.onImageDataLoaded = function () {
          e._fakeLoader.removeEventListener("load", e.onImageDataLoaded, !0),
            e.getElement().addEventListener("load", e.onImageLoadedAndAdded),
            e.getElement().setAttribute("src", e._currentUrl);
        }),
        (e.onImageLoadedAndAdded = function () {
          e.getElement().removeEventListener("load", e.onImageLoadedAndAdded),
            (e._origWidth = e._fakeLoader.naturalWidth),
            (e._origHeight = e._fakeLoader.naturalHeight),
            e
              .getElement()
              .parentNode.insertBefore(e.getElement(), e.getElement()),
            (e.getElement().style.opacity = "inherit"),
            (e._isLoading = !1),
            (e._isImgLoaded = !0),
            e._onImgLoaded.dispatch(),
            e._static.calculatePageHeight(),
            e.onResize();
        }),
        e
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), n(3)),
      r = i(n(11)),
      s = i(n(4)),
      a = i(n(72));
    function l() {
      var e = this;
      (this.mobile = new a.default("mobile", 0)),
        (this.desktop = new a.default("desktop", 850)),
        (this._breakpoints = new Array(this.mobile, this.desktop)),
        (this._currentBreakpointIndex = 0),
        (this._currentBreakpointItem = null),
        (this._onNewBreakpoint = new o.SignalDispatcher()),
        (this.onResize = function () {
          var t = e.getBreakPointIndexByWidth(s.default.RESIZE.windowWidth);
          t !== e._currentBreakpointIndex &&
            ((e._currentBreakpointIndex = t),
            (e._currentBreakpointItem =
              e._breakpoints[e._currentBreakpointIndex]),
            e._onNewBreakpoint.dispatch());
        }),
        (this._currentBreakpointIndex = this.getBreakPointIndexByWidth(
          s.default.RESIZE.windowWidth
        )),
        (this._currentBreakpointItem =
          this._breakpoints[this._currentBreakpointIndex]),
        r.default.Instance.onResize.sub(this.onResize),
        this.onResize();
    }
    Object.defineProperty(l, "Instance", {
      get: function () {
        return (
          null == this._instance && (this._instance = new l()), this._instance
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(l.prototype, "onNewBreakpoint", {
        get: function () {
          return this._onNewBreakpoint.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (l.prototype.getBreakPointIndexByWidth = function (t) {
        if (t <= -1) return 0;
        for (var e = this._breakpoints.length, n = 0; n < e; n++)
          if (t < this._breakpoints[n].getWidth()) return n - 1;
        return e - 1;
      }),
      (l.prototype.getBreakPointIndex = function () {
        return this._currentBreakpointIndex;
      }),
      (l.prototype.getBreakpointName = function () {
        return this._breakpoints[this.getBreakPointIndex()].getName();
      }),
      (e.default = l);
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), i(n(28))),
      r = i(n(2));
    function s(t, e, n) {
      var i = this;
      (this._warnings = []),
        (this.hover = function (t) {
          t.stopPropagation(), i._button.classList.add("hovered");
        }),
        (this.hide = function (t) {
          i._button.classList.remove("hovered");
        }),
        (this.copy = function (t) {
          t.stopImmediatePropagation(),
            t.stopPropagation(),
            i.copyToClipboard(i.path);
        }),
        (this._container = r.default.JSXCreate("div", { class: "item" })),
        (this._name = t),
        (this._path = e),
        (this._parentArray = n),
        this._container.addEventListener("mouseover", this.hover),
        this._container.addEventListener("mouseout", this.hide),
        (this._button = r.default.JSXCreate("button", { class: "copy-btn" })),
        this._container.appendChild(this._button),
        this._button.addEventListener("mouseup", this.copy);
    }
    Object.defineProperty(s.prototype, "name", {
      get: function () {
        return this._name;
      },
      enumerable: !1,
      configurable: !0,
    }),
      (s.prototype.getContainer = function () {
        return this._container;
      }),
      (s.prototype.addWarning = function (t, e) {
        this._warnings.push(new o.default(t, e));
      }),
      (s.prototype.findLength = function (t) {
        return null == t
          ? 0
          : "number" == typeof t
          ? t
          : "string" == typeof t
          ? t.length
          : "object" == typeof t
          ? Object.keys(t).length
          : void 0;
      }),
      (s.prototype.copyToClipboard = function (t) {
        t = t.substring(1, t.length);
        var e = document.createElement("textarea");
        (e.value = t),
          this.getContainer().appendChild(e),
          e.focus(),
          e.select();
        try {
          document.execCommand("copy");
        } catch (t) {}
        this.getContainer().removeChild(e);
      }),
      Object.defineProperty(s.prototype, "pathAddition", {
        get: function () {
          return this._parentArray && this._parentArray.isNumericArray
            ? "[" + this.name + "]"
            : "." + this.name;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "path", {
        get: function () {
          return this._path + this.pathAddition;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.default = s);
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Severity = void 0),
        i(n(2))),
      n =
        (((i = e.Severity || (e.Severity = {}))[(i.trivial = 0)] = "trivial"),
        (i[(i.severe = 1)] = "severe"),
        (r.prototype.getElement = function () {
          var t = o.default.JSXCreate(
            "p",
            { class: "dump-warning" },
            this._message
          );
          return t.classList.add(this._severity.toString()), t;
        }),
        r);
    function r(t, e) {
      (this._message = t), (this._severity = e);
    }
    e.default = n;
  },
  function (j, t, e) {
    "use strict";
    function n() {}
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Modules = void 0),
        i(e(52))),
      r = i(e(69)),
      s = i(e(73)),
      a = i(e(74)),
      l = i(e(76)),
      u = i(e(78)),
      c = i(e(80)),
      f = i(e(84)),
      h = i(e(86)),
      p = i(e(88)),
      d = i(e(30)),
      _ = i(e(90)),
      g = i(e(92)),
      m = i(e(94)),
      y = i(e(96)),
      v = i(e(98)),
      b = i(e(41)),
      w = i(e(101)),
      x = i(e(103)),
      T = i(e(105)),
      O = i(e(107)),
      P = i(e(109)),
      C = i(e(111)),
      S = i(e(113)),
      E = i(e(115)),
      k = i(e(117)),
      A = i(e(119)),
      I = i(e(121)),
      M = i(e(123)),
      L = i(e(125)),
      R = i(e(127)),
      D = i(e(22)),
      N = i(e(129)),
      B = i(e(131)),
      F = i(e(133)),
      z = i(e(44)),
      H = i(e(136)),
      X = i(e(137)),
      q = i(e(139)),
      V = i(e(140)),
      U = i(e(142)),
      W = i(e(144)),
      Y = i(e(45)),
      G = i(e(25)),
      Z = i(e(149)),
      K = i(e(151)),
      $ = i(e(153)),
      J = i(e(18)),
      Q = i(e(8)),
      tt = i(e(155)),
      et = i(e(156)),
      nt = i(e(157)),
      it = i(e(158)),
      ot = i(e(159)),
      rt = i(e(160)),
      st = i(e(161)),
      at = i(e(162)),
      lt = i(e(42)),
      ut = i(e(163)),
      ct = i(e(164)),
      ft = i(e(165)),
      ht = i(e(166)),
      pt = i(e(167)),
      dt = i(e(47)),
      _t = i(e(169)),
      gt = i(e(171)),
      mt = i(e(48)),
      yt = i(e(43)),
      vt = i(e(172)),
      bt = i(e(10)),
      wt = i(e(173)),
      i = i(e(174));
    t.Modules = {
      ImageGridSlideshow: o.default,
      MediaGrid: r.default,
      RemoveIfEmpty: s.default,
      LineModule: a.default,
      HideWhenNotInView: l.default,
      ErrorModule: u.default,
      DefaultSlideshowModule: _t.default,
      Preloader: c.default,
      PreloaderIcon: ht.default,
      FormingEssentialsModule: f.default,
      FeaturedSlideshowImage: h.default,
      MainMenuButton: p.default,
      FeaturedSlideshowModule: d.default,
      ManifestModule: _.default,
      TextLayout5Module: g.default,
      FoundedByModule: m.default,
      Contact1Module: v.default,
      Contact2Module: y.default,
      CoreCollapseModule: b.default,
      RecognitionModule: w.default,
      ClientListModule: x.default,
      TextLayout4Module: T.default,
      TextLayout3Module: O.default,
      TextWithImageLayout1Module: P.default,
      DefaultHeaderModule: C.default,
      NewsModule: S.default,
      MenuModule: E.default,
      FooterModule: k.default,
      HighlightedWorkModule: A.default,
      ImageModule: I.default,
      ImageWithTextRightModule: M.default,
      TextLayout2Module: L.default,
      DoubleImageModule: R.default,
      CoreSlideshowModule: D.default,
      SlideshowComponent: J.default,
      SlideshowPageInfo: $.default,
      CopySlideInfo: ct.default,
      VideoModule: N.default,
      CoreVideoModule: yt.default,
      ImageWithTextLeftModule: B.default,
      TextLayout1Module: F.default,
      CaseHeroModule: z.default,
      RootModule: H.default,
      CursorTarget: dt.default,
      DebugGridModule: Z.default,
      DebugOverlayModule: K.default,
      LazyLoadImage: G.default,
      Pixelate: gt.default,
      ScaleFontToParentWidth: pt.default,
      LinkHit: at.default,
      ColorItem: Q.default,
      ColorItemBackgroundBackground: tt.default,
      ColorItemBackgroundToForeground: it.default,
      ColorItemTextToForeground: et.default,
      ColorItemBorderTopToForeground: ot.default,
      ColorItemBorderBottomToForeground: nt.default,
      ColorItemFillToForeground: rt.default,
      ColorItemStrokeToForeground: st.default,
      ColorItemCanvasStrokeToForeground: ft.default,
      ImageLoadingModule: X.default,
      ChildTransition: q.default,
      PageTransitionModule: V.default,
      MissingModule: U.default,
      CrazyLines: lt.default,
      ErrorTemplate: ut.default,
      VarDump: W.default,
      DefaultTemplate: Y.default,
      ImgixImage: mt.default,
      WindowInnerHeight: vt.default,
      Cursor: bt.default,
      CursorTargetLink: wt.default,
      VimeoComponent: i.default,
    };
    t.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(53),
        s(n(22))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.awake = function () {
          o.prototype.awake.call(this);
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    function i(t, e) {
      (this.handler = t), (this.isOnce = e), (this.isExecuted = !1);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Subscription = void 0),
      (i.prototype.execute = function (t, e, n) {
        var i;
        (this.isOnce && this.isExecuted) ||
          ((this.isExecuted = !0),
          (i = this.handler),
          t
            ? setTimeout(function () {
                i.apply(e, n);
              }, 1)
            : i.apply(e, n));
      }),
      (e.Subscription = i);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.RecursiveAnimations = e.Transition = e.MODE = void 0);
    var i,
      o = n(3),
      n =
        (((n = i = e.MODE || (e.MODE = {}))[(n.IN = 0)] = "IN"),
        (n[(n.OUT = 1)] = "OUT"),
        Object.defineProperty(r.prototype, "onAllComplete", {
          get: function () {
            return this._onAllComplete.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "rootModule", {
          get: function () {
            return this._rootModule;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "mode", {
          get: function () {
            return this._mode;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.start = function (t, e) {
          void 0 === e && (e = t === i.OUT),
            (this._startedAt = Date.now()),
            (this._isAnimating = !0),
            (this._mode = t),
            (this._reverseAnimation = e),
            (this._useTree = !0),
            !this._reverseAnimation &&
              this._recursiveInInstant &&
              this._mode === i.IN &&
              (this._useTree = !1),
            this._useTree && 0 < this._aniTree.deepestDepth()
              ? (this._reverseAnimation
                  ? (this._nextDepth = this._aniTree.deepestDepth() - 1)
                  : (this._nextDepth = -1),
                (this._queuedAnimations = 0),
                (this._animationsInProgress = 0),
                this.animateNewTree())
              : this.animateElement(this.rootModule);
        }),
        Object.defineProperty(r.prototype, "numOfAnimationLevels", {
          get: function () {
            return this._aniTree.deepestDepth();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.isDone = function () {
          return this._isDone;
        }),
        (r.prototype.isAnimating = function () {
          return 0 < this._animationsInProgress;
        }),
        Object.defineProperty(r.prototype, "timeElapsed", {
          get: function () {
            return Date.now() - this._startedAt;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.dispatchIfDone = function () {
          var t,
            e = this;
          this.isAnimating() ||
            ((t = this.timeElapsed),
            this.waitAtLeast - t < 0
              ? ((this._isDone = !0), this._onAllComplete.dispatch(this))
              : setTimeout(function () {
                  (e._isDone = !0), e._onAllComplete.dispatch(e);
                }, this.waitAtLeast - t));
        }),
        (r.prototype.animateNewTree = function () {
          for (
            var t = this._aniTree.getAtDepth(this._nextDepth),
              e =
                (this._reverseAnimation ? this._nextDepth-- : this._nextDepth++,
                t.length),
              n = 0;
            n < e;
            n++
          )
            this._queuedAnimations++, this.animateElement(t[n].module);
        }),
        (r.prototype.animateRecursive = function (t) {
          for (var e = t.getComponents(!1, !1), n = e.length, i = 0; i < n; i++)
            "transitionIn" in e[i] && "transitionOut" in e[i]
              ? (this._queuedAnimations++, this.animateElement(e[i]))
              : this.animateRecursive(e[i]);
        }),
        (r.prototype.animateElement = function (t) {
          var e = new s(t, this, this._nextDepth);
          e.onComplete.one(this.done),
            e.onContinue.one(this.continue),
            this._animationsInProgress++,
            this._mode === i.IN ? t.transitionIn(e) : t.transitionOut(e);
        }),
        r);
    function r(t, e) {
      var n = this;
      void 0 === e && (e = !1),
        (this._onAllComplete = new o.SimpleEventDispatcher()),
        (this.waitAtLeast = 0),
        (this.queuedAnimations = 0),
        (this._nextDepth = 0),
        (this._queuedAnimations = 1),
        (this._animationsInProgress = 0),
        (this._isAnimating = !1),
        (this._isDone = !1),
        (this._mode = i.IN),
        (this._useTree = !0),
        (this.done = function (t) {
          n._animationsInProgress--,
            0 === n._animationsInProgress &&
              ((n._isAnimating = !1), n.dispatchIfDone());
        }),
        (this.continue = function (t) {
          n._useTree
            ? (n._queuedAnimations--,
              0 === n._queuedAnimations && n.animateNewTree())
            : (n.animateRecursive(t), n._queuedAnimations--);
        }),
        (this._queuedAnimations = 1),
        (this._rootModule = t),
        (this._recursiveInInstant = e),
        (this._aniTree = new l(t));
    }
    e.default = n;
    Object.defineProperty(a.prototype, "onComplete", {
      get: function () {
        return this._onComplete.asEvent();
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(a.prototype, "onContinue", {
        get: function () {
          return this._onContinue.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(a.prototype, "numOfAnimationLevels", {
        get: function () {
          return this._controller.numOfAnimationLevels;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(a.prototype, "animationLevel", {
        get: function () {
          return this._animationLevel;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(a.prototype, "totalTimeElapsed", {
        get: function () {
          return this._controller.timeElapsed;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (a.prototype.continue = function () {
        (this._isContinued = !0), this._onContinue.dispatch(this._module);
      }),
      (a.prototype.done = function () {
        this._isContinued || this.continue(),
          this._onComplete.dispatch(this._module);
      });
    var s = a;
    function a(t, e, n) {
      (this._onComplete = new o.SimpleEventDispatcher()),
        (this._onContinue = new o.SimpleEventDispatcher()),
        (this._isContinued = !1),
        (this._animationLevel = n),
        (this._module = t),
        (this._controller = e);
    }
    e.Transition = s;
    (u.prototype.searchForNestedAnimations = function (t) {
      for (var e = t.getComponents(!1, !1), n = e.length, i = 0; i < n; i++) {
        var o = e[i];
        "transitionIn" in o && "transitionOut" in o
          ? this._tree.push(new u(o, this._depth + 1))
          : this.searchForNestedAnimations(o);
      }
    }),
      (u.prototype.depth = function () {
        return this._depth;
      }),
      (u.prototype.deepestDepth = function () {
        if (0 !== this._depth && 0 === this._tree.length) return this.depth();
        for (var t = this.depth(), e = this._tree.length, n = 0; n < e; n++) {
          var i = this._tree[n].deepestDepth();
          t < i && (t = i);
        }
        return t;
      }),
      (u.prototype.getAtDepth = function (e) {
        var n = [];
        return -1 === e
          ? [this]
          : e < this._depth
          ? []
          : this._depth === e
          ? this._tree
          : (this._tree.forEach(function (t) {
              n = n.concat(t.getAtDepth(e));
            }),
            n);
      });
    var l = u;
    function u(t, e) {
      void 0 === e && (e = 0),
        (this._tree = []),
        (this._depth = 0),
        (this.module = t),
        (this._depth = e),
        this.searchForNestedAnimations(t);
    }
    e.RecursiveAnimations = l;
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), n(5)),
      r = i(n(20));
    function s() {
      var t = this;
      (this._currentScroll = { x: 0, y: 0 }),
        (this._scrollData = []),
        (this._pageHeight = -1),
        (this._template = null),
        (this.onScrollWheel = function () {
          o.TweenLite.killTweensOf(t._currentScroll),
            (t._currentScroll.y = window.scrollY),
            t.saveScroll();
        }),
        (this.updateWindowScroll = function () {
          window.scrollTo(0, t._currentScroll.y), t.saveScroll();
        }),
        (history.scrollRestoration = "manual"),
        window.addEventListener("wheel", this.onScrollWheel);
    }
    Object.defineProperty(s, "Instance", {
      get: function () {
        return (
          null == this._instance && (this._instance = new s()), this._instance
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      (s.prototype.scrollTo = function (t, e, n, i) {
        void 0 === n && (n = -1),
          void 0 === i && (i = o.Expo.easeOut),
          o.TweenLite.killTweensOf(this._currentScroll),
          (this._currentScroll.x = window.scrollX),
          (this._currentScroll.y = window.scrollY),
          n <= 0
            ? ((this._currentScroll.x = t),
              (this._currentScroll.y = e),
              this.updateWindowScroll())
            : o.TweenLite.to(this._currentScroll, 1, {
                x: t,
                y: e,
                roundProps: ["x", "y"],
                ease: i,
                onUpdate: this.updateWindowScroll,
              });
      }),
      (s.prototype.getCurrentY = function () {
        return this._currentScroll.y;
      }),
      (s.prototype.saveScroll = function () {
        var t = r.default.Instance.getCurrentTemplate();
        this._scrollData[t.path] = this._currentScroll.y;
      }),
      (s.prototype.restoreScroll = function () {
        var t = r.default.Instance.getCurrentTemplate(),
          t = this._scrollData[t.path];
        this.scrollTo(0, t);
      }),
      (e.default = s);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(3);
    function o(t, e) {
      var n = this;
      (this._onAdded = new i.SimpleEventDispatcher()),
        (this._onRemoved = new i.SimpleEventDispatcher()),
        (this.children = []),
        (this.onChildAdded = function (t) {
          t instanceof n._filterClass &&
            n.isParentThis(t) &&
            (n.children.push(t), n._onAdded.dispatch(t));
        }),
        (this.onChildRemoved = function (t) {
          var e;
          t instanceof n._filterClass &&
            -1 !== (e = n.children.indexOf(t)) &&
            (n.children.splice(e, 1), n._onRemoved.dispatch(t));
        }),
        (this._comp = t),
        (this._filterClass = e),
        this._comp.getComponents(!1, !0).forEach(function (t) {
          n.onChildAdded(t);
        }),
        this._comp.node.onAnyChildAdded.sub(this.onChildAdded),
        this._comp.node.onAnyChildRemoved.sub(this.onChildRemoved);
    }
    Object.defineProperty(o.prototype, "onAdded", {
      get: function () {
        return this._onAdded.asEvent();
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(o.prototype, "onRemoved", {
        get: function () {
          return this._onRemoved.asEvent();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (o.prototype.kill = function () {
        this._onRemoved.clear(),
          this._onAdded.clear(),
          this._comp.node.onAnyChildAdded.unsub(this.onChildAdded),
          this._comp.node.onAnyChildRemoved.unsub(this.onChildRemoved);
      }),
      (o.prototype.isParentThis = function (t) {
        if (null !== t.getParent()) {
          for (
            var e = t.getParent().getComponents(), n = e.length, i = 0;
            i < n;
            i++
          )
            if (e[i] === this._comp) return !0;
          for (i = 0; i < n; i++)
            if (e[i] instanceof this._filterClass) return !1;
          for (i = 0; i < n; i++) if (this.isParentThis(e[i])) return !0;
        }
        return !1;
      }),
      (e.default = o);
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), n(5)),
      r = i(n(37)),
      s = i(n(38)),
      a = i(n(81)),
      l = i(n(39)),
      u = i(n(82)),
      c = i(n(40)),
      f = i(n(83));
    function h() {
      var n = this;
      (this._xPos = 0),
        (this._yPos = 0),
        (this._cursors = [
          new l.default("default"),
          new s.default("arrow"),
          new a.default("link"),
          new u.default("slideshow"),
          new f.default("enlarge"),
          new c.default("preloader"),
        ]),
        (this._defaultCursor = "default"),
        (this._activeCursor = null),
        (this._activeCursorName = null),
        (this._forceCursor = null),
        (this.onMouseMove = function (t) {
          (n._xPos = t.clientX),
            (n._yPos = t.clientY),
            o.TweenLite.set(n._container, { left: n._xPos, top: n._yPos });
        }),
        (this.render = function (t, e) {
          (n._container.style.left = n._xPos + "px"),
            (n._container.style.top = n._yPos + "px");
        }),
        this.isSupported() &&
          (window.addEventListener("mousemove", this.onMouseMove),
          document.addEventListener("mouseenter", this.onMouseMove),
          (this._container = document.createElement("div")),
          this._container.classList.add("cursor-container"),
          (this._container.style.pointerEvents = "none"),
          document.body.appendChild(this._container),
          (this._container.style.position = "fixed"),
          this.setDefaultCursor(),
          (document.body.style.cursor = "none"));
    }
    Object.defineProperty(h, "Instance", {
      get: function () {
        return (
          null == this._instance && (this._instance = new h()), this._instance
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      (h.prototype.setCursor = function (t) {
        this.isSupported() &&
          ((this._activeCursorName = t),
          null === this._forceCursor && this.updateCursor());
      }),
      (h.prototype.setDefaultCursor = function () {
        this.isSupported() && this.setCursor(this._defaultCursor);
      }),
      (h.prototype.setForcedCursor = function (t) {
        this.isSupported() && ((this._forceCursor = t), this.updateCursor());
      }),
      (h.prototype.updateCursor = function () {
        var t,
          e =
            null !== this._forceCursor
              ? this._forceCursor
              : this._activeCursorName;
        (null !== this._activeCursor && this._activeCursor.cursorName === e) ||
          ((t = this._activeCursor),
          null !== this._activeCursor &&
            (this._activeCursor.deactivate(),
            null !== this._activeCursor.getElement() &&
              this._container.removeChild(this._activeCursor.getElement()),
            (this._activeCursor = null)),
          null !== (e = this.getCursorByName(e)).getElement() &&
            this._container.appendChild(e.getElement()),
          e.activate(t),
          (this._activeCursor = e));
      }),
      (h.prototype.getCursorByName = function (t) {
        for (var e = this._cursors.length, n = 0; n < e; n += 1) {
          var i = this._cursors[n];
          if (i.cursorName === t) return i;
        }
        return null;
      }),
      (h.prototype.xPos = function () {
        return this._xPos;
      }),
      (h.prototype.yPos = function () {
        return this._yPos;
      }),
      (h.prototype.isSupported = function () {
        return !(r.default.isMobile() && r.default.isTablet());
      }),
      (e.default = h);
  },
  function (t, e, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (i.isTranslite3DSupported = function () {
        return "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix();
      }),
      (i.isMobile = function () {
        return /iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(
          navigator.userAgent.toLowerCase()
        );
      }),
      (i.isTablet = function () {
        return /ipad|sch-i800|playbook|xoom|gt-p1000|gt-p7510|sgh-t849|nexus 7|nexus 10|shw-m180s|a100|dell streak|silk/i.test(
          navigator.userAgent.toLowerCase()
        );
      }),
      (e.default = i);
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(10))),
      l = n(5),
      u = s(n(39)),
      c = s(n(6)),
      s =
        ((o = a.default),
        r(f, o),
        (f.prototype.getElement = function () {
          return (
            (this._element.style.position = "absolute"),
            (this._element.style.left = "-50px"),
            (this._element.style.top = "-50px"),
            this._element.classList.add("cursor"),
            this._element
          );
        }),
        (f.prototype.activate = function (t) {
          void 0 === t && (t = null),
            l.TweenLite.killTweensOf([
              this.pt1,
              this.pt2,
              this.pt3,
              this.pt4,
              this.pt5,
              this.pt6,
            ]);
          (this.pt1.x = 50),
            (this.pt1.y = 50),
            (this.pt2.x = 50),
            (this.pt2.y = 50),
            (this.pt3.x = 50.5),
            (this.pt3.y = 67),
            (this.pt4.x = 50.5),
            (this.pt4.y = 51),
            (this.pt5.x = 49.5),
            (this.pt5.y = 67),
            (this.pt6.x = 49.5),
            (this.pt6.y = 51),
            null !== t &&
              t instanceof u.default &&
              ((this.pt1.y = t.pt1.y), (this.pt2.y = t.pt2.y)),
            l.TweenLite.to(this.pt1, 0.4, { y: 34, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt2, 0.4, { y: 66, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt4, 0.4, {
              x: 37.5,
              y: 54,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt6, 0.4, {
              x: 62.5,
              y: 54,
              ease: l.Expo.easeOut,
              delay: 0.1,
              onComplete: this.animationDone,
            }),
            this.startRender();
        }),
        (f.prototype.render = function (t, e) {
          o.prototype.render.call(this, t, e);
          t =
            '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' +
            this.pt1.x +
            '" y1="' +
            this.pt1.y +
            '" x2="' +
            this.pt2.x +
            '" y2="' +
            this.pt2.y +
            '" style="stroke:' +
            c.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt3.x +
            '" y1="' +
            this.pt3.y +
            '" x2="' +
            this.pt4.x +
            '" y2="' +
            this.pt4.y +
            '" style="stroke:' +
            c.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt5.x +
            '" y1="' +
            this.pt5.y +
            '" x2="' +
            this.pt6.x +
            '" y2="' +
            this.pt6.y +
            '" style="stroke:' +
            c.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t'</svg>";
          this._element.innerHTML = t;
        }),
        f);
    function f() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.pt1 = { x: 50, y: 50 }),
        (t.pt2 = { x: 50, y: 50 }),
        (t.pt3 = { x: 50, y: 50 }),
        (t.pt4 = { x: 50, y: 50 }),
        (t.pt5 = { x: 50, y: 50 }),
        (t.pt6 = { x: 50, y: 50 }),
        (t._element = document.createElement("div")),
        (t.animationDone = function () {
          o.prototype.stopRender.call(t);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(10))),
      l = n(5),
      u = s(n(38)),
      c = s(n(6)),
      s =
        ((o = a.default),
        r(f, o),
        (f.prototype.getElement = function () {
          return (
            (this._element.style.position = "absolute"),
            (this._element.style.left = "-50px"),
            (this._element.style.top = "-50px"),
            this._element.classList.add("cursor"),
            this._element
          );
        }),
        (f.prototype.activate = function (t) {
          void 0 === t && (t = null),
            l.TweenLite.killTweensOf([
              this.pt1,
              this.pt2,
              this.pt3,
              this.pt4,
              this.pt5,
              this.pt6,
            ]);
          (this.pt1.x = 50),
            (this.pt1.y = 50),
            (this.pt2.x = 50),
            (this.pt2.y = 50),
            (this.pt3.x = 50.5),
            (this.pt3.y = 67),
            (this.pt4.x = 50.5),
            (this.pt4.y = 67),
            (this.pt5.x = 49.5),
            (this.pt5.y = 67),
            (this.pt6.x = 49.5),
            (this.pt6.y = 67),
            null !== t &&
              t instanceof u.default &&
              ((this.pt1.y = t.pt1.y),
              (this.pt2.y = t.pt2.y),
              (this.pt4.x = t.pt4.x),
              (this.pt4.y = t.pt4.y),
              (this.pt6.x = t.pt6.x),
              (this.pt6.y = t.pt6.y)),
            l.TweenLite.to(this.pt1, 0.4, { y: 34, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt2, 0.4, { y: 66, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt4, 0.4, {
              x: 50.5,
              y: 67,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt6, 0.4, {
              x: 49.5,
              y: 67,
              ease: l.Expo.easeOut,
              delay: 0.1,
              onComplete: this.animationDone,
            }),
            this.startRender();
        }),
        (f.prototype.render = function (t, e) {
          o.prototype.render.call(this, t, e);
          t =
            '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' +
            this.pt1.x +
            '" y1="' +
            this.pt1.y +
            '" x2="' +
            this.pt2.x +
            '" y2="' +
            this.pt2.y +
            '" style="stroke:' +
            c.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt3.x +
            '" y1="' +
            this.pt3.y +
            '" x2="' +
            this.pt4.x +
            '" y2="' +
            this.pt4.y +
            '" style="stroke:' +
            c.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt5.x +
            '" y1="' +
            this.pt5.y +
            '" x2="' +
            this.pt6.x +
            '" y2="' +
            this.pt6.y +
            '" style="stroke:' +
            c.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t'</svg>";
          this._element.innerHTML = t;
        }),
        f);
    function f() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.pt1 = { x: 50, y: 50 }),
        (t.pt2 = { x: 50, y: 50 }),
        (t.pt3 = { x: 50, y: 50 }),
        (t.pt4 = { x: 50, y: 50 }),
        (t.pt5 = { x: 50, y: 50 }),
        (t.pt6 = { x: 50, y: 50 }),
        (t._element = document.createElement("div")),
        (t.animationDone = function () {
          o.prototype.stopRender.call(t);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      u,
      o =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), r(n(10))),
      a = n(5),
      l = r(n(15)),
      c = r(n(6)),
      r =
        ((u = s.default),
        o(f, u),
        (f.prototype.getElement = function () {
          return (
            (this._element.style.position = "absolute"),
            (this._element.style.left = "-50px"),
            (this._element.style.top = "-50px"),
            this._element.classList.add("cursor"),
            this._element
          );
        }),
        (f.prototype.setColor = function (t) {
          (this._color = l.default.hexToRGB(t, 1)), this.render(0, 0);
        }),
        (f.prototype.activate = function (t) {
          void 0 === t && (t = null),
            a.TweenLite.killTweensOf(this.points),
            null !== this._timeout1 && clearTimeout(this._timeout1),
            null !== this._timeout2 && clearTimeout(this._timeout2);
          for (var e = 0; e < this._numberOfLines; e += 1)
            this.points[e].size = 0;
          this.startRender(), this.firstStep();
        }),
        (f.prototype.deactivate = function () {
          u.prototype.stopRender.call(this), u.prototype.deactivate.call(this);
        }),
        (f.prototype.render = function (t, e) {
          u.prototype.render.call(this, t, e);
          for (
            var n = '<svg height="100" width="100">', i = 0;
            i < this._numberOfLines;
            i += 1
          )
            for (
              var o = this.points[i],
                r = (360 / this._numberOfLines) * i,
                s = 50 + Math.cos(r * (Math.PI / 180)) * o.size,
                a = 50 + Math.sin(r * (Math.PI / 180)) * o.size,
                l = 0;
              l < this._numberOfLines / 2;
              l += 1
            )
              n +=
                '<line x1="50" y1="50" x2="' +
                s +
                '" y2="' +
                a +
                '" style="stroke:' +
                c.default.Instance.foregroundColor +
                ';stroke-width:2" />';
          this._element.innerHTML = n += "</svg>";
        }),
        f);
    function f(t) {
      var e = u.call(this, t) || this;
      (e.points = new Array()),
        (e._numberOfLines = 12),
        (e._halfSize = 16),
        (e._timeout1 = null),
        (e._timeout2 = null),
        (e._step = null),
        (e._element = document.createElement("div")),
        (e._color = "rgb(255,255,255)"),
        (e.firstStep = function () {
          e._step = "firstStep";
          for (var t = 0; t < e._numberOfLines / 2; t += 1)
            a.TweenLite.to(e.points[t], 0, {
              size: e._halfSize,
              ease: a.Expo.easeOut,
              delay: 0.05 * t,
            }),
              a.TweenLite.to(e.points[t + 6], 0, {
                size: e._halfSize,
                ease: a.Expo.easeOut,
                delay: 0.05 * t,
              });
          e._timeout1 = setTimeout(e.secondStep, 1e3);
        }),
        (e.secondStep = function () {
          e._step = "secondStep";
          for (var t = 0; t < e._numberOfLines / 2; t += 1)
            a.TweenLite.to(e.points[t], 0, {
              size: 0,
              ease: a.Expo.easeOut,
              delay: 0.05 * t,
            }),
              a.TweenLite.to(e.points[t + 6], 0, {
                size: 0,
                ease: a.Expo.easeOut,
                delay: 0.05 * t,
              });
          e._timeout2 = setTimeout(e.firstStep, 1e3);
        });
      for (var n = 0; n < e._numberOfLines; n += 1) e.points.push({ size: 0 });
      return e;
    }
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(100),
        s(n(1))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.build = function () {
          (this._collapseButton = this.qs(".collapse-button")),
            (this._collapseItems = this.qsAll(".collapse-item")),
            (this._collapseIcon = this.qs(".collapse-icon")),
            (this._expandIcon = this.qs(".expand-icon")),
            (this._collapseText = this.qs(".collapse-text")),
            (this._expandText = this.qs(".expand-text")),
            this.showOrHide(!1);
        }),
        (a.prototype.awake = function () {
          this._collapseButton.addEventListener("click", this.onCollapse);
        }),
        (a.prototype.sleep = function () {
          this._collapseButton.removeEventListener("click", this.onCollapse);
        }),
        (a.prototype.showOrHide = function (e) {
          this._collapseItems.forEach(function (t) {
            t instanceof HTMLElement &&
              (!0 === e ? t.classList.add("open") : t.classList.remove("open"));
          });
        }),
        a);
    function a() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t._isOpen = !1),
        (t.onCollapse = function () {
          (t._isOpen = !t._isOpen),
            t.showOrHide(t._isOpen),
            !0 === t._isOpen
              ? ((t._collapseIcon.style.display = "block"),
                (t._expandIcon.style.display = "none"),
                t._collapseText && (t._collapseText.style.display = "block"),
                t._expandText && (t._expandText.style.display = "none"))
              : ((t._collapseIcon.style.display = "none"),
                (t._expandIcon.style.display = "block"),
                t._collapseText && (t._collapseText.style.display = "none"),
                t._expandText && (t._expandText.style.display = "block"));
        }),
        t
      );
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      r,
      o =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(11)),
      u = n(23),
      c = s(n(6)),
      f = s(n(7)),
      s =
        ((r = a.default),
        o(h, r),
        (h.prototype.build = function () {
          this.getElement() instanceof HTMLCanvasElement
            ? (this._canvas = this.getElement())
            : ((this._canvas = this.getElement().querySelector("canvas")),
              this._canvas ||
                ((this._canvas = document.createElement("canvas")),
                this.getElement().appendChild(this._canvas))),
            (this._ctx = this._canvas.getContext("2d")),
            (this._ctx.imageSmoothingQuality = "low"),
            (this._ctx.imageSmoothingEnabled = !1),
            (this._staticWrapper = new u.StaticWrapper(this));
        }),
        (h.prototype.awake = function () {
          l.default.Instance.onResize.sub(this.onResize), this.onResize();
        }),
        (h.prototype.sleep = function () {
          l.default.Instance.onResize.unsub(this.onResize), this.stopRender();
        }),
        (h.prototype.resetLinePositions = function () {
          for (var t = 0; t < this._numOfLines; t++)
            (this._lines[t].x = t % 2 ? 7 : 1), (this._lines[t].velocityX = 0);
          this.render(0, 0);
        }),
        (h.prototype.updateLineCount = function () {
          this._numOfLines = Math.ceil(this._height / 90);
          var t = this._numOfLines;
          for (
            this._numOfLines < 5
              ? (this._numOfLines = 5)
              : 16 < this._numOfLines && (this._numOfLines = 16);
            this._lines.length > this._numOfLines;

          )
            this._lines.pop();
          for (; this._lines.length < this._numOfLines; ) {
            t++;
            var e = new p(this._ctx);
            (e.x = t % 2 ? 8 : 0),
              e.setSize(this._width, this._height / this._numOfLines),
              this._lines.push(e);
          }
          this.render(0, 0);
        }),
        h);
    function h() {
      var o = (null !== r && r.apply(this, arguments)) || this;
      return (
        (o._lines = []),
        (o._width = 0),
        (o._height = 0),
        (o._numOfLines = 0),
        (o._lastMouseX = Number.MAX_VALUE),
        (o._renderItem = null),
        (o._sampleAmount = 1),
        (o.startRender = function () {
          null === o._renderItem &&
            ((o._renderItem = f.default.Instance.add(o.render, 60)),
            o.getElement().addEventListener("mousemove", o.onMouseMove),
            o.render(0, 0));
        }),
        (o.stopRender = function () {
          null !== o._renderItem &&
            (f.default.Instance.remove(o._renderItem), (o._renderItem = null)),
            o.getElement().removeEventListener("mousemove", o.onMouseMove);
        }),
        (o.onResize = function () {
          var t = Number.parseFloat(
            window.getComputedStyle(o.getElement()).paddingTop
          );
          o._staticWrapper.requestRender(function () {
            (o._width = o.getElement().offsetWidth),
              (o._height = o.getElement().offsetHeight - t);
          }),
            (o._canvas.width = o._width * o._sampleAmount),
            (o._canvas.height = o._height * o._sampleAmount),
            (o._canvas.style.width = o._width + "px"),
            (o._canvas.style.height = o._height + "px"),
            o.updateLineCount();
        }),
        (o.onMouseMove = function (t) {
          var e,
            n = t.offsetX,
            t = t.offsetY,
            i = 0,
            t =
              (o._lastMouseX != Number.MAX_VALUE && (i = n - o._lastMouseX),
              t / o._height),
            t = Math.floor(o._numOfLines * t),
            t =
              (t < 0
                ? (t = 0)
                : t > o._numOfLines - 1 && (t = o._numOfLines - 1),
              o._lines[t]);
          i < 0
            ? (e = 0.1 * i) < t.velocityX && (t.velocityX = e)
            : 0 < i && (e = 0.1 * i) > t.velocityX && (t.velocityX = e),
            (o._lastMouseX = n);
        }),
        (o.render = function (t, e) {
          o._ctx.clearRect(0, 0, o._canvas.width, o._canvas.height),
            (o._ctx.strokeStyle = c.default.Instance.foregroundColor);
          for (
            var n = (o._height / o._numOfLines) * o._sampleAmount, i = 0;
            i < o._numOfLines;
            i++
          )
            (o._lines[i].y = n * i),
              (o._lines[i].thickness = 2 + (i / o._numOfLines) * 10),
              o._lines[i].setSize(o._width * o._sampleAmount, n),
              o._lines[i].render();
        }),
        o
      );
    }
    e.default = s;
    (d.prototype.setSize = function (t, e) {
      (this._width = t), (this._height = e);
    }),
      (d.prototype.render = function () {
        var t = this.spacing,
          e = Math.ceil(this._width / t) + 1;
        for (
          this.x += this.velocityX, this.velocityX = this.velocityX * this.drag;
          this.x < 0;

        )
          this.x += this._width;
        for (var n = this.x, i = 0; i < e; i++) {
          var o = (n % (t * e)) - 0.5 * this.thickness;
          (this._context.lineWidth = this.thickness),
            this._context.beginPath(),
            this._context.moveTo(o, this.y),
            this._context.lineTo(o, this.y + this._height),
            this._context.closePath(),
            this._context.stroke(),
            (n += t);
        }
      });
    var p = d;
    function d(t) {
      (this.spacing = 17),
        (this.thickness = 2),
        (this.x = 0),
        (this.y = 0),
        (this.drag = 0.98),
        (this.velocityX = 0),
        (this._width = 0),
        (this._height = 0),
        (this._context = t);
    }
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(1))),
      l = s(n(7)),
      u = n(5),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.build = function () {
          (this._playButton = this.qs(".play-button")),
            (this._playIcon = this.qs(".play-icon")),
            (this._pauseIcon = this.qs(".pause-icon")),
            (this._placeholder = this.qs(".placeholder")),
            (this._playbackTime = this.qs(".playback-time")),
            (this._video = this.qs("video")),
            (this._videoUI = this.params.plain.videoui),
            this._videoUI || (this._videoUI = "default");
        }),
        (c.prototype.awake = function () {
          this._video,
            this._video.autoplay &&
              ((this._autoPlay = !0), (this._video.autoplay = !1)),
            (this._videoReadyForPlay = !1),
            (this._videoContainer = this._video.parentElement),
            (this._video.style.display = "none"),
            this.hideAllUI(),
            (this._renderItem = l.default.Instance.add(this.render, 5));
        }),
        (c.prototype.videoReadyForPlay = function () {
          (this._videoReadyForPlay = !0),
            "none" !== this._videoUI &&
              this._playButton.addEventListener("click", this.onPlay),
            this.updateUIToState();
        }),
        (c.prototype.sleep = function () {
          null !== this._renderItem &&
            (l.default.Instance.remove(this._renderItem),
            (this._renderItem = null)),
            null !== this._video &&
              (this.unloadVideo(!0), (this._video = null));
        }),
        (c.prototype.isReadyForPlay = function () {
          return !0;
        }),
        (c.prototype.Play = function () {
          var t,
            e = this;
          4 === this._video.readyState &&
            !0 !== this._isPlaying &&
            ((this._isPlaying = !0),
            (t = this._video.play()),
            0 !== this._restoreTime &&
              ((this._video.currentTime = this._restoreTime),
              (this._restoreTime = 0)),
            void 0 !== t &&
              t
                .then(function (t) {
                  u.TweenLite.to(e._video, 0, {
                    opacity: 1,
                    ease: u.Linear.easeOut,
                  });
                })
                .catch(function (t) {}),
            this.updateUIToState());
        }),
        (c.prototype.Pause = function () {
          !1 !== this._isPlaying &&
            ((this._isPlaying = !1),
            this._video.pause(),
            this.updateUIToState());
        }),
        (c.prototype.loadVideo = function () {
          !0 !== this._isVideoLoaded &&
            ((this._isVideoLoaded = !0),
            this._video.setAttribute(
              "src",
              this._video.getAttribute("data-src")
            ),
            this._video.load());
        }),
        (c.prototype.unloadVideo = function (t) {
          (!0 !== (t = void 0 === t ? !1 : t) && !1 === this._isVideoLoaded) ||
            (!0 === this._isPlaying &&
              (this._restoreTime = this._video.currentTime),
            (this._isVideoLoaded = !1),
            (this._isPlaying = !1),
            this._video.pause(),
            this._video.removeAttribute("src"),
            this._video.load(),
            (this._video.style.display = "none") !== this._videoUI &&
              this._playButton.removeEventListener("click", this.onPlay),
            this.updateUIToState());
        }),
        (c.prototype.updateUIToState = function () {
          !0 === this._isPlaying
            ? "default" === this._videoUI
              ? ((this._pauseIcon.style.display = "block"),
                (this._playIcon.style.display = "none"),
                (this._playbackTime.style.display = "block"))
              : "default" === this._videoUI && this.hideAllUI()
            : (u.TweenLite.killTweensOf(this._video),
              u.TweenLite.set(this._video, { opacity: 0 }),
              "default" === this._videoUI
                ? ((this._pauseIcon.style.display = "none"),
                  (this._playIcon.style.display = "block"),
                  (this._playbackTime.style.display = "block"))
                : "default" === this._videoUI && this.hideAllUI());
        }),
        (c.prototype.hideAllUI = function () {
          (this._pauseIcon.style.display = "none"),
            (this._playIcon.style.display = "none"),
            (this._playbackTime.style.display = "none"),
            u.TweenLite.killTweensOf(this._video),
            u.TweenLite.set(this._video, { opacity: 0 });
        }),
        c);
    function c() {
      var i = (null !== o && o.apply(this, arguments)) || this;
      return (
        (i._isPlaying = !1),
        (i._wasInteractedWith = !1),
        (i._renderItem = null),
        (i._videoReadyForPlay = !1),
        (i._autoPlay = !1),
        (i._isVideoLoaded = !1),
        (i._restoreTime = 0),
        (i._timeInView = 0),
        (i.render = function (t, e) {
          var n;
          i.viewInfo.updateRect(),
            null != i._video &&
              (!0 === i.viewInfo.isInView() &&
              null !== i.getElement().offsetParent
                ? ((i._timeInView += t),
                  1 < i._timeInView &&
                    (i.loadVideo(),
                    (i._video.style.display = null),
                    !1 === i._videoReadyForPlay &&
                      4 === i._video.readyState &&
                      i.isReadyForPlay() &&
                      i.videoReadyForPlay(),
                    !0 === i._videoReadyForPlay &&
                      !1 === i._wasInteractedWith &&
                      !0 === i._autoPlay &&
                      i.Play()))
                : ((i._timeInView = 0), i.unloadVideo()),
              (t = i._video.duration - i._video.currentTime),
              isNaN(t) && (t = 0),
              (n = new Date(null)).setSeconds(t),
              (i._playbackTime.innerText = n.toISOString().substr(14, 5)));
        }),
        (i.onPlay = function () {
          (i._wasInteractedWith = !0), i._isPlaying ? i.Pause() : i.Play();
        }),
        i
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(135),
        s(n(1))),
      l = s(n(12)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.build = function () {
          o.prototype.build.call(this);
          var t = this.qs(".case-header");
          t.innerHTML = t.innerHTML.replace(
            "®",
            '<span class="super">®</span>'
          );
        }),
        (u.prototype.awake = function () {
          l.default.Instance.addAllAtags(this.getElement());
        }),
        (u.prototype.sleep = function () {
          l.default.Instance.removeAllAtags(this.getElement());
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(19))),
      l = s(n(6)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          window.scrollTo(0, 0),
            (l.default.Instance.backgroundColor =
              this.params.plain.backgroundcolor),
            (l.default.Instance.foregroundColor =
              this.params.plain.foregroundcolor);
        }),
        (u.prototype.showTestMargin = function () {
          for (
            var t = this.getElement().childNodes.length, e = 0;
            e < t;
            e += 1
          ) {
            var n,
              i = this.getElement().childNodes[e];
            "SECTION" === i.tagName &&
              ((n = document.createElement("div")).classList.add("test"),
              i.prepend(n));
          }
        }),
        (u.prototype.getRandomColor = function () {
          for (var t = "", e = 0; e < 3; e++) {
            var n = Math.floor(256 * Math.random()).toString(16);
            t += 1 == n.length ? "0" + n : n;
          }
          return "#" + t;
        }),
        (u.prototype.scrollTo = function (t) {
          this._isAnimatingOut || o.prototype.scrollTo.call(this, t);
        }),
        u);
    function u() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (t._isAnimatingOut = !1), t;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(27))),
      l = s(n(2)),
      s =
        ((o = a.default),
        r(u, o),
        Object.defineProperty(u.prototype, "length", {
          get: function () {
            return this._length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "type", {
          get: function () {
            return this._type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "value", {
          get: function () {
            return this._value;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (u.decodeHTML = function (t) {
          return (t = (t = (t = t.replace(/&gt;/g, ">")).replace(
            /&lt;/g,
            "<"
          )).replace(/&amp;/g, "&"));
        }),
        (u.prototype.createElement = function () {
          this.getContainer().classList.add("dump-variable-element");
          var t = l.default.JSXCreate(
            "div",
            { class: "dump-item" },
            l.default.JSXCreate(
              "div",
              { class: "value" },
              l.default.JSXCreate(
                "p",
                null,
                u.decodeHTML(this._value.toString())
              )
            ),
            l.default.JSXCreate("div", { class: "name" }, this.name),
            l.default.JSXCreate(
              "div",
              { class: "type" },
              l.default.JSXCreate("p", null, this.type),
              l.default.JSXCreate(
                "div",
                { class: "length" },
                this.length.toString()
              )
            )
          );
          return (
            this.getContainer().appendChild(t),
            t.classList.add("dump-" + this.type),
            this.getContainer()
          );
        }),
        u);
    function u(t, e, n, i) {
      e = o.call(this, e, n, i) || this;
      return (
        (e._type = typeof t), (e._length = e.findLength(t)), (e._value = t), e
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(36)),
      u = s(n(168)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.awake = function () {
          o.prototype.awake.call(this),
            u.default.Instance.add(
              this.getElement(),
              this.onMouseOver,
              this.onMouseOut,
              this.getSortIndex()
            );
        }),
        (c.prototype.sleep = function () {
          o.prototype.sleep.call(this),
            u.default.Instance.remove(this.getElement());
        }),
        (c.prototype.getSortIndex = function () {
          return this.params.plain.sortindex
            ? parseInt(this.params.plain.sortindex)
            : 0;
        }),
        (c.prototype.getCursorName = function () {
          return this.params.plain.cursorname;
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onMouseOver = function () {
          l.default.Instance.setCursor(t.getCursorName());
        }),
        (t.onMouseOut = function () {
          l.default.Instance.setDefaultCursor();
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(25))),
      l = s(n(21)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.getLoadUrl = function () {
          var t,
            e = l.default.genFullUrl(this.params.plain.src);
          return l.default.isLocal(e)
            ? this.params.plain.src
            : ((t = ""),
              (t = e.endsWith(".gif")
                ? ""
                : "w=" +
                  this.getWidthToLoad() +
                  "&h=" +
                  this.getHeightToLoad() +
                  "&q=" +
                  u.QUALITY +
                  "&auto=format"),
              e + ("" !== t ? "?" + t : ""));
        }),
        (u.QUALITY = "75"),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    t.exports = n(51);
  },
  function (t, e, n) {
    t.exports = (function () {
      var n,
        j,
        N,
        e = function (t, e, n) {
          var i = n;
          for (var o = 0, r = t.length; o < r; o++) i = e(i, t[o], o, t);
          return i;
        },
        B = function (t, o) {
          return e(
            t,
            function (t, e, n, i) {
              return !o(e, n, i) ? t : t.concat(e);
            },
            []
          );
        },
        F = function (t, o) {
          return e(
            t,
            function (t, e, n, i) {
              return t.concat(o(e, n, i));
            },
            []
          );
        },
        z = function (t, o) {
          return e(
            t,
            function (t, e, n, i) {
              return t === true || e === o;
            },
            false
          );
        },
        H = !{ toString: null }.propertyIsEnumerable("toString"),
        r = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor",
        ],
        X,
        q,
        i = function (t) {
          return t < 10 ? "0" + t : t;
        },
        V,
        t = {
          map: F,
          reduce: e,
          filter: B,
          includes: z,
          keys: function (t) {
            var e = [];
            var n;
            for (n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) e.push(n);
            if (!H) return e;
            for (var i = 0, o = r.length; i < o; i++)
              if (Object.prototype.hasOwnProperty.call(t, r[i])) e.push(r[i]);
            return e;
          },
          isArray: function (t) {
            return Object.prototype.toString.call(t) === "[object Array]";
          },
          isoDate: function () {
            var t = new Date();
            return (
              t.getUTCFullYear() +
              "-" +
              i(t.getUTCMonth() + 1) +
              "-" +
              i(t.getUTCDate()) +
              "T" +
              i(t.getUTCHours()) +
              ":" +
              i(t.getUTCMinutes()) +
              ":" +
              i(t.getUTCSeconds()) +
              "." +
              (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
              "Z"
            );
          },
        },
        o = {
          intRange: function (e, n) {
            if (e === void 0) e = 1;
            if (n === void 0) n = Infinity;
            return function (t) {
              return (
                typeof t === "number" &&
                parseInt("" + t, 10) === t &&
                t >= e &&
                t <= n
              );
            };
          },
          stringWithLength: function (t) {
            return typeof t === "string" && !!t.length;
          },
        },
        s = {},
        a = t.filter,
        l = t.reduce,
        u = t.keys,
        c = t.isArray,
        U = t.includes,
        W = o.intRange,
        f = o.stringWithLength;
      function h() {
        h =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return h.apply(this, arguments);
      }
      (s.schema = {
        apiKey: {
          defaultValue: function () {
            return null;
          },
          message: "is required",
          validate: f,
        },
        appVersion: {
          defaultValue: function () {
            return null;
          },
          message: "should be a string",
          validate: function (t) {
            return t === null || f(t);
          },
        },
        appType: {
          defaultValue: function () {
            return null;
          },
          message: "should be a string",
          validate: function (t) {
            return t === null || f(t);
          },
        },
        autoNotify: {
          defaultValue: function () {
            return true;
          },
          message: "should be true|false",
          validate: function (t) {
            return t === true || t === false;
          },
        },
        beforeSend: {
          defaultValue: function () {
            return [];
          },
          message: "should be a function or array of functions",
          validate: function (t) {
            return (
              typeof t === "function" ||
              (c(t) &&
                a(t, function (t) {
                  return typeof t === "function";
                }).length === t.length)
            );
          },
        },
        endpoints: {
          defaultValue: function () {
            return {
              notify: "https://notify.bugsnag.com",
              sessions: "https://sessions.bugsnag.com",
            };
          },
          message:
            "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
          validate: function (t, e) {
            return (
              t &&
              typeof t === "object" &&
              f(t.notify) &&
              (e.autoCaptureSessions === false || f(t.sessions)) &&
              a(u(t), function (t) {
                return !U(["notify", "sessions"], t);
              }).length === 0
            );
          },
        },
        autoCaptureSessions: {
          defaultValue: function (t, e) {
            return (
              e.endpoints === undefined ||
              (!!e.endpoints && !!e.endpoints.sessions)
            );
          },
          message: "should be true|false",
          validate: function (t) {
            return t === true || t === false;
          },
        },
        notifyReleaseStages: {
          defaultValue: function () {
            return null;
          },
          message: "should be an array of strings",
          validate: function (t) {
            return (
              t === null ||
              (c(t) &&
                a(t, function (t) {
                  return typeof t === "string";
                }).length === t.length)
            );
          },
        },
        releaseStage: {
          defaultValue: function () {
            return "production";
          },
          message: "should be a string",
          validate: function (t) {
            return typeof t === "string" && t.length;
          },
        },
        maxBreadcrumbs: {
          defaultValue: function () {
            return 20;
          },
          message: "should be a number ≤40",
          validate: function (t) {
            return W(0, 40)(t);
          },
        },
        autoBreadcrumbs: {
          defaultValue: function () {
            return true;
          },
          message: "should be true|false",
          validate: function (t) {
            return typeof t === "boolean";
          },
        },
        user: {
          defaultValue: function () {
            return null;
          },
          message: "(object) user should be an object",
          validate: function (t) {
            return typeof t === "object";
          },
        },
        metaData: {
          defaultValue: function () {
            return null;
          },
          message: "should be an object",
          validate: function (t) {
            return typeof t === "object";
          },
        },
        logger: {
          defaultValue: function () {
            return undefined;
          },
          message:
            "should be null or an object with methods { debug, info, warn, error }",
          validate: function (n) {
            return (
              !n ||
              (n &&
                l(
                  ["debug", "info", "warn", "error"],
                  function (t, e) {
                    return t && typeof n[e] === "function";
                  },
                  true
                ))
            );
          },
        },
        filters: {
          defaultValue: function () {
            return ["password"];
          },
          message: "should be an array of strings|regexes",
          validate: function (t) {
            return (
              c(t) &&
              t.length ===
                a(t, function (t) {
                  return (
                    typeof t === "string" || (t && typeof t.test === "function")
                  );
                }).length
            );
          },
        },
      }),
        (s.mergeDefaults = function (n, i) {
          if (!n || !i) throw new Error("opts and schema objects are required");
          return l(
            u(i),
            function (t, e) {
              t[e] = n[e] !== undefined ? n[e] : i[e].defaultValue(n[e], n);
              return t;
            },
            {}
          );
        }),
        (s.validate = function (n, i) {
          if (!n || !i) throw new Error("opts and schema objects are required");
          var t = l(
            u(i),
            function (t, e) {
              if (i[e].validate(n[e], n)) return t;
              return t.concat({ key: e, message: i[e].message, value: n[e] });
            },
            []
          );
          return { valid: !t.length, errors: t };
        });
      var Y = s.schema,
        G = t.map,
        Z,
        K = {
          releaseStage: {
            defaultValue: function () {
              if (/^localhost(:\d+)?$/.test(window.location.host))
                return "development";
              return "production";
            },
            message: "should be set",
            validate: o.stringWithLength,
          },
          logger: h({}, Y.logger, {
            defaultValue: function () {
              return typeof console !== "undefined" &&
                typeof console.debug === "function"
                ? $()
                : undefined;
            },
          }),
        },
        $ = function () {
          var n = {};
          var i = console["log"];
          G(["debug", "info", "warn", "error"], function (t) {
            var e = console[t];
            n[t] =
              typeof e === "function"
                ? e.bind(console, "[bugsnag]")
                : i.bind(console, "[bugsnag]");
          });
          return n;
        },
        J = t.isoDate,
        Q,
        p = (function () {
          function t(t, e, n, i) {
            if (t === void 0) t = "[anonymous]";
            if (e === void 0) e = {};
            if (n === void 0) n = "manual";
            if (i === void 0) i = J();
            this.type = n;
            this.name = t;
            this.metaData = e;
            this.timestamp = i;
          }
          var e = t.prototype;
          e.toJSON = function t() {
            return {
              type: this.type,
              name: this.name,
              timestamp: this.timestamp,
              metaData: this.metaData,
            };
          };
          return t;
        })(),
        tt = function (t, e, n) {
          var i = t.length;
          var o = 0;
          var r = function () {
            if (o >= i) return n(null, false);
            e(t[o], function (t, e) {
              if (t) return n(t, false);
              if (e === true) return n(null, true);
              o++;
              r();
            });
          };
          r();
        },
        et = function (t) {
          return t.app && typeof t.app.releaseStage === "string"
            ? t.app.releaseStage
            : t.config.releaseStage;
        },
        nt;
      function it(t) {
        switch (Object.prototype.toString.call(t)) {
          case "[object Error]":
            return true;
          case "[object Exception]":
            return true;
          case "[object DOMException]":
            return true;
          default:
            return t instanceof Error;
        }
      }
      var ot = it,
        rt = function (i, o) {
          return function (t, n) {
            if (typeof t !== "function") return n(null, false);
            try {
              if (t.length !== 2) {
                var e = t(i);
                if (e && typeof e.then === "function")
                  return e.then(
                    function (t) {
                      return setTimeout(function () {
                        return n(null, d(i, t));
                      }, 0);
                    },
                    function (t) {
                      setTimeout(function () {
                        o(t);
                        return n(null, false);
                      });
                    }
                  );
                return n(null, d(i, e));
              }
              t(i, function (t, e) {
                if (t) {
                  o(t);
                  return n(null, false);
                }
                n(null, d(i, e));
              });
            } catch (t) {
              o(t);
              n(null, false);
            }
          };
        },
        d = function (t, e) {
          return t.isIgnored() || e === false;
        },
        _ = {},
        g =
          ((function (t, e) {
            "use strict";
            if (typeof n === "function" && n.amd) n("stackframe", [], e);
            else if (typeof _ === "object") _ = e();
            else t.StackFrame = e();
          })(this, function () {
            "use strict";
            function r(t) {
              return !isNaN(parseFloat(t)) && isFinite(t);
            }
            function n(t) {
              return t.charAt(0).toUpperCase() + t.substring(1);
            }
            function t(t) {
              return function () {
                return this[t];
              };
            }
            var e = ["isConstructor", "isEval", "isNative", "isToplevel"];
            var i = ["columnNumber", "lineNumber"];
            var o = ["fileName", "functionName", "source"];
            var s = ["args"];
            var a = e.concat(i, o, s);
            function l(t) {
              if (t instanceof Object)
                for (var e = 0; e < a.length; e++)
                  if (t.hasOwnProperty(a[e]) && t[a[e]] !== undefined)
                    this["set" + n(a[e])](t[a[e]]);
            }
            l.prototype = {
              getArgs: function () {
                return this.args;
              },
              setArgs: function (t) {
                if (Object.prototype.toString.call(t) !== "[object Array]")
                  throw new TypeError("Args must be an Array");
                this.args = t;
              },
              getEvalOrigin: function () {
                return this.evalOrigin;
              },
              setEvalOrigin: function (t) {
                if (t instanceof l) this.evalOrigin = t;
                else if (t instanceof Object) this.evalOrigin = new l(t);
                else
                  throw new TypeError(
                    "Eval Origin must be an Object or StackFrame"
                  );
              },
              toString: function () {
                var t = this.getFunctionName() || "{anonymous}";
                var e = "(" + (this.getArgs() || []).join(",") + ")";
                var n = this.getFileName() ? "@" + this.getFileName() : "";
                var i = r(this.getLineNumber())
                  ? ":" + this.getLineNumber()
                  : "";
                var o = r(this.getColumnNumber())
                  ? ":" + this.getColumnNumber()
                  : "";
                return t + e + n + i + o;
              },
            };
            for (var u = 0; u < e.length; u++) {
              l.prototype["get" + n(e[u])] = t(e[u]);
              l.prototype["set" + n(e[u])] = (function (e) {
                return function (t) {
                  this[e] = Boolean(t);
                };
              })(e[u]);
            }
            for (var c = 0; c < i.length; c++) {
              l.prototype["get" + n(i[c])] = t(i[c]);
              l.prototype["set" + n(i[c])] = (function (e) {
                return function (t) {
                  if (!r(t)) throw new TypeError(e + " must be a Number");
                  this[e] = Number(t);
                };
              })(i[c]);
            }
            for (var f = 0; f < o.length; f++) {
              l.prototype["get" + n(o[f])] = t(o[f]);
              l.prototype["set" + n(o[f])] = (function (e) {
                return function (t) {
                  this[e] = String(t);
                };
              })(o[f]);
            }
            return l;
          }),
          {}),
        m =
          ((function (t, e) {
            "use strict";
            if (typeof n === "function" && n.amd)
              n("error-stack-parser", ["stackframe"], e);
            else if (typeof g === "object") g = e(_);
            else t.ErrorStackParser = e(t.StackFrame);
          })(this, function t(l) {
            "use strict";
            var i = /(^|@)\S+\:\d+/;
            var o = /^\s*at .*(\S+\:\d+|\(native\))/m;
            var r = /^(eval@)?(\[native code\])?$/;
            return {
              parse: function t(e) {
                if (
                  typeof e.stacktrace !== "undefined" ||
                  typeof e["opera#sourceloc"] !== "undefined"
                )
                  return this.parseOpera(e);
                else if (e.stack && e.stack.match(o))
                  return this.parseV8OrIE(e);
                else if (e.stack) return this.parseFFOrSafari(e);
                else throw new Error("Cannot parse given Error object");
              },
              extractLocation: function t(e) {
                if (e.indexOf(":") === -1) return [e];
                var n = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
                var i = n.exec(e.replace(/[\(\)]/g, ""));
                return [i[1], i[2] || undefined, i[3] || undefined];
              },
              parseV8OrIE: function t(e) {
                var n = e.stack.split("\n").filter(function (t) {
                  return !!t.match(o);
                }, this);
                return n.map(function (t) {
                  if (t.indexOf("(eval ") > -1)
                    t = t
                      .replace(/eval code/g, "eval")
                      .replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
                  var e = t.replace(/^\s+/, "").replace(/\(eval code/g, "(");
                  var n = e.match(/ (\((.+):(\d+):(\d+)\)$)/);
                  e = n ? e.replace(n[0], "") : e;
                  var i = e.split(/\s+/).slice(1);
                  var o = this.extractLocation(n ? n[1] : i.pop());
                  var r = i.join(" ") || undefined;
                  var s =
                    ["eval", "<anonymous>"].indexOf(o[0]) > -1
                      ? undefined
                      : o[0];
                  return new l({
                    functionName: r,
                    fileName: s,
                    lineNumber: o[1],
                    columnNumber: o[2],
                    source: t,
                  });
                }, this);
              },
              parseFFOrSafari: function t(e) {
                var n = e.stack.split("\n").filter(function (t) {
                  return !t.match(r);
                }, this);
                return n.map(function (t) {
                  if (t.indexOf(" > eval") > -1)
                    t = t.replace(
                      / line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,
                      ":$1"
                    );
                  if (t.indexOf("@") === -1 && t.indexOf(":") === -1)
                    return new l({ functionName: t });
                  else {
                    var e = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                    var n = t.match(e);
                    var i = n && n[1] ? n[1] : undefined;
                    var o = this.extractLocation(t.replace(e, ""));
                    return new l({
                      functionName: i,
                      fileName: o[0],
                      lineNumber: o[1],
                      columnNumber: o[2],
                      source: t,
                    });
                  }
                }, this);
              },
              parseOpera: function t(e) {
                if (
                  !e.stacktrace ||
                  (e.message.indexOf("\n") > -1 &&
                    e.message.split("\n").length >
                      e.stacktrace.split("\n").length)
                )
                  return this.parseOpera9(e);
                else if (!e.stack) return this.parseOpera10(e);
                else return this.parseOpera11(e);
              },
              parseOpera9: function t(e) {
                var n = /Line (\d+).*script (?:in )?(\S+)/i;
                var i = e.message.split("\n");
                var o = [];
                for (var r = 2, s = i.length; r < s; r += 2) {
                  var a = n.exec(i[r]);
                  if (a)
                    o.push(
                      new l({ fileName: a[2], lineNumber: a[1], source: i[r] })
                    );
                }
                return o;
              },
              parseOpera10: function t(e) {
                var n =
                  /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
                var i = e.stacktrace.split("\n");
                var o = [];
                for (var r = 0, s = i.length; r < s; r += 2) {
                  var a = n.exec(i[r]);
                  if (a)
                    o.push(
                      new l({
                        functionName: a[3] || undefined,
                        fileName: a[2],
                        lineNumber: a[1],
                        source: i[r],
                      })
                    );
                }
                return o;
              },
              parseOpera11: function t(e) {
                var n = e.stack.split("\n").filter(function (t) {
                  return !!t.match(i) && !t.match(/^Error created at/);
                }, this);
                return n.map(function (t) {
                  var e = t.split("@");
                  var n = this.extractLocation(e.pop());
                  var i = e.shift() || "";
                  var o =
                    i
                      .replace(/<anonymous function(: (\w+))?>/, "$2")
                      .replace(/\([^\)]*\)/g, "") || undefined;
                  var r;
                  if (i.match(/\(([^\)]*)\)/))
                    r = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
                  var s =
                    r === undefined || r === "[arguments not available]"
                      ? undefined
                      : r.split(",");
                  return new l({
                    functionName: o,
                    args: s,
                    fileName: n[0],
                    lineNumber: n[1],
                    columnNumber: n[2],
                    source: t,
                  });
                }, this);
              },
            };
          }),
          g),
        y = function (t) {
          return (
            !!t &&
            (!!t.stack || !!t.stacktrace || !!t["opera#sourceloc"]) &&
            typeof (t.stack || t.stacktrace || t["opera#sourceloc"]) ===
              "string" &&
            t.stack !== t.name + ": " + t.message
          );
        },
        st = "yes" ? "browserjs" : undefined,
        v = {};
      function b() {
        b =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return b.apply(this, arguments);
      }
      (function (t, e) {
        "use strict";
        if (typeof n === "function" && n.amd)
          n("stack-generator", ["stackframe"], e);
        else if (typeof v === "object") v = e(_);
        else t.StackGenerator = e(t.StackFrame);
      })(this, function (a) {
        return {
          backtrace: function t(e) {
            var n = [];
            var i = 10;
            if (typeof e === "object" && typeof e.maxStackSize === "number")
              i = e.maxStackSize;
            var o = arguments.callee;
            while (o && n.length < i && o["arguments"]) {
              var r = new Array(o["arguments"].length);
              for (var s = 0; s < r.length; ++s) r[s] = o["arguments"][s];
              if (/function(?:\s+([\w$]+))+\s*\(/.test(o.toString()))
                n.push(
                  new a({ functionName: RegExp.$1 || undefined, args: r })
                );
              else n.push(new a({ args: r }));
              try {
                o = o.caller;
              } catch (t) {
                break;
              }
            }
            return n;
          },
        };
      });
      var at = t.reduce,
        lt = t.filter,
        w = (function () {
          function t(t, e, n, i, o) {
            if (n === void 0) n = [];
            if (i === void 0) i = ft();
            this.__isBugsnagReport = true;
            this._ignored = false;
            this._handledState = i;
            this.app = undefined;
            this.apiKey = undefined;
            this.breadcrumbs = [];
            this.context = undefined;
            this.device = undefined;
            this.errorClass = ht(t, "[no error class]");
            this.errorMessage = ht(e, "[no error message]");
            this.groupingHash = undefined;
            this.metaData = {};
            this.request = undefined;
            this.severity = this._handledState.severity;
            this.stacktrace = at(
              n,
              function (e, t) {
                var n = ut(t);
                try {
                  if (JSON.stringify(n) === "{}") return e;
                  return e.concat(n);
                } catch (t) {
                  return e;
                }
              },
              []
            );
            this.user = undefined;
            this.session = undefined;
            this.originalError = o;
          }
          var e = t.prototype;
          e.ignore = function t() {
            this._ignored = true;
          };
          e.isIgnored = function t() {
            return this._ignored;
          };
          e.updateMetaData = function t(e) {
            var n;
            if (!e) return this;
            var i;
            if ((arguments.length <= 1 ? undefined : arguments[1]) === null)
              return this.removeMetaData(e);
            if ((arguments.length <= 2 ? undefined : arguments[2]) === null)
              return this.removeMetaData(
                e,
                arguments.length <= 1 ? undefined : arguments[1],
                arguments.length <= 2 ? undefined : arguments[2]
              );
            if (
              typeof (arguments.length <= 1 ? undefined : arguments[1]) ===
              "object"
            )
              i = arguments.length <= 1 ? undefined : arguments[1];
            if (
              typeof (arguments.length <= 1 ? undefined : arguments[1]) ===
              "string"
            )
              i =
                ((n = {}),
                (n[arguments.length <= 1 ? undefined : arguments[1]] =
                  arguments.length <= 2 ? undefined : arguments[2]),
                n);
            if (!i) return this;
            if (!this.metaData[e]) this.metaData[e] = {};
            this.metaData[e] = b({}, this.metaData[e], i);
            return this;
          };
          e.removeMetaData = function t(e, n) {
            if (typeof e !== "string") return this;
            if (!n) {
              delete this.metaData[e];
              return this;
            }
            if (this.metaData[e]) {
              delete this.metaData[e][n];
              return this;
            }
            return this;
          };
          e.toJSON = function t() {
            return {
              payloadVersion: "4",
              exceptions: [
                {
                  errorClass: this.errorClass,
                  message: this.errorMessage,
                  stacktrace: this.stacktrace,
                  type: st,
                },
              ],
              severity: this.severity,
              unhandled: this._handledState.unhandled,
              severityReason: this._handledState.severityReason,
              app: this.app,
              device: this.device,
              breadcrumbs: this.breadcrumbs,
              context: this.context,
              user: this.user,
              metaData: this.metaData,
              groupingHash: this.groupingHash,
              request: this.request,
              session: this.session,
            };
          };
          return t;
        })(),
        ut = function (t) {
          var e = {
            file: t.fileName,
            method: ct(t.functionName),
            lineNumber: t.lineNumber,
            columnNumber: t.columnNumber,
            code: undefined,
            inProject: undefined,
          };
          if (e.lineNumber > -1 && !e.file && !e.method) e.file = "global code";
          return e;
        },
        ct = function (t) {
          return /^global code$/i.test(t) ? "global code" : t;
        },
        ft = function () {
          return {
            unhandled: false,
            severity: "warning",
            severityReason: { type: "handledException" },
          };
        },
        ht = function (t, e) {
          return typeof t === "string" && t ? t : e;
        },
        x =
          ((w.getStacktrace = function (e, t, n) {
            if (t === void 0) t = 0;
            if (n === void 0) n = 0;
            if (y(e)) return m.parse(e).slice(t);
            try {
              throw e;
            } catch (t) {
              if (y(t)) return m.parse(e).slice(1 + n);
              try {
                return lt(v.backtrace(), function (t) {
                  return (
                    (t.functionName || "").indexOf("StackGenerator$$") === -1
                  );
                }).slice(1 + n);
              } catch (t) {
                return [];
              }
            }
          }),
          (w.ensureReport = function (e, t, n) {
            if (t === void 0) t = 0;
            if (n === void 0) n = 0;
            if (e.__isBugsnagReport) return e;
            try {
              var i = w.getStacktrace(e, t, 1 + n);
              return new w(e.name, e.message, i, undefined, e);
            } catch (t) {
              return new w(e.name, e.message, [], undefined, e);
            }
          }),
          w),
        pt = function t(e, n) {
          var i = "000000000" + e;
          return i.substr(i.length - n);
        },
        dt = typeof window === "object" ? window : self,
        _t = 0,
        gt;
      for (gt in dt) if (Object.hasOwnProperty.call(dt, gt)) _t++;
      var mt = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        yt = pt(
          (mt + navigator.userAgent.length).toString(36) + _t.toString(36),
          4
        ),
        vt = function t() {
          return yt;
        },
        T = 0,
        bt = 4,
        O = 36,
        wt = Math.pow(O, bt);
      function xt() {
        return pt(((Math.random() * wt) << 0).toString(O), bt);
      }
      function Tt() {
        T = T < wt ? T : 0;
        T++;
        return T - 1;
      }
      function Ot() {
        var t = "c",
          e = new Date().getTime().toString(O),
          n = pt(Tt().toString(O), bt),
          i = vt(),
          o = xt() + xt();
        return t + e + n + i + o;
      }
      Ot.fingerprint = vt;
      var Pt = Ot,
        Ct = t.isoDate,
        St,
        Et = (function () {
          function t() {
            this.id = Pt();
            this.startedAt = Ct();
            this._handled = 0;
            this._unhandled = 0;
          }
          var e = t.prototype;
          e.toJSON = function t() {
            return {
              id: this.id,
              startedAt: this.startedAt,
              events: { handled: this._handled, unhandled: this._unhandled },
            };
          };
          e.trackError = function t(e) {
            this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
          };
          return t;
        })();
      function P() {
        P =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return P.apply(this, arguments);
      }
      var kt = t.map,
        At = t.includes,
        It = t.isArray,
        Mt = "Usage error.",
        Lt = "Bugsnag usage error.",
        Rt = (function () {
          function i(t) {
            if (!t || !t.name || !t.version || !t.url)
              throw new Error("`notifier` argument is required");
            this.notifier = t;
            this._configured = false;
            this._opts = {};
            this.config = {};
            this._delivery = {
              sendSession: function () {},
              sendReport: function () {},
            };
            this._logger = {
              debug: function () {},
              info: function () {},
              warn: function () {},
              error: function () {},
            };
            this._plugins = {};
            this._session = null;
            this.breadcrumbs = [];
            this.app = {};
            this.context = undefined;
            this.device = undefined;
            this.metaData = undefined;
            this.request = undefined;
            this.user = {};
            this.BugsnagClient = i;
            this.BugsnagReport = x;
            this.BugsnagBreadcrumb = p;
            this.BugsnagSession = Et;
            var e = this;
            var n = this.notify;
            this.notify = function () {
              return n.apply(e, arguments);
            };
          }
          var t = i.prototype;
          t.setOptions = function t(e) {
            this._opts = P({}, this._opts, e);
          };
          t.configure = function t(e) {
            if (e === void 0) e = s.schema;
            var n = s.mergeDefaults(this._opts, e);
            var i = s.validate(n, e);
            if (!i.valid === true) throw new Error(Nt(i.errors));
            if (typeof n.beforeSend === "function")
              n.beforeSend = [n.beforeSend];
            if (n.appVersion) this.app.version = n.appVersion;
            if (n.appType) this.app.type = n.appType;
            if (n.metaData) this.metaData = n.metaData;
            if (n.user) this.user = n.user;
            if (n.logger) this.logger(n.logger);
            this.config = P({}, this.config, n);
            this._configured = true;
            return this;
          };
          t.use = function t(e) {
            if (!this._configured) throw new Error("client not configured");
            if (e.configSchema) this.configure(e.configSchema);
            for (
              var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              i[o - 1] = arguments[o];
            var r = e.init.apply(e, [this].concat(i));
            if (e.name) this._plugins["~" + e.name + "~"] = r;
            return this;
          };
          t.getPlugin = function t(e) {
            return this._plugins["~" + e + "~"];
          };
          t.delivery = function t(e) {
            this._delivery = e(this);
            return this;
          };
          t.logger = function t(e, n) {
            this._logger = e;
            return this;
          };
          t.sessionDelegate = function t(e) {
            this._sessionDelegate = e;
            return this;
          };
          t.startSession = function t() {
            if (!this._sessionDelegate) {
              this._logger.warn("No session implementation is installed");
              return this;
            }
            return this._sessionDelegate.startSession(this);
          };
          t.leaveBreadcrumb = function t(e, n, i, o) {
            if (!this._configured) throw new Error("client not configured");
            e = e || undefined;
            i = typeof i === "string" ? i : undefined;
            o = typeof o === "string" ? o : undefined;
            n = typeof n === "object" && n !== null ? n : undefined;
            if (typeof e !== "string" && !n) return;
            var r = new p(e, n, i, o);
            this.breadcrumbs.push(r);
            if (this.breadcrumbs.length > this.config.maxBreadcrumbs)
              this.breadcrumbs = this.breadcrumbs.slice(
                this.breadcrumbs.length - this.config.maxBreadcrumbs
              );
            return this;
          };
          t.notify = function t(e, n, i) {
            var o = this;
            if (n === void 0) n = {};
            if (i === void 0) i = function () {};
            if (!this._configured) throw new Error("client not configured");
            var r = et(this);
            var s = Dt(e, n, this._logger),
              a = s.err,
              l = s.errorFramesToSkip,
              u = s._opts;
            if (u) n = u;
            if (typeof n !== "object" || n === null) n = {};
            var c = x.ensureReport(a, l, 2);
            c.app = P({}, { releaseStage: r }, c.app, this.app);
            c.context = c.context || n.context || this.context || undefined;
            c.device = P({}, c.device, this.device, n.device);
            c.request = P({}, c.request, this.request, n.request);
            c.user = P({}, c.user, this.user, n.user);
            c.metaData = P({}, c.metaData, this.metaData, n.metaData);
            c.breadcrumbs = this.breadcrumbs.slice(0);
            if (this._session) {
              this._session.trackError(c);
              c.session = this._session;
            }
            if (n.severity !== undefined) {
              c.severity = n.severity;
              c._handledState.severityReason = {
                type: "userSpecifiedSeverity",
              };
            }
            if (
              It(this.config.notifyReleaseStages) &&
              !At(this.config.notifyReleaseStages, r)
            ) {
              this._logger.warn(
                "Report not sent due to releaseStage/notifyReleaseStages configuration"
              );
              return i(null, c);
            }
            var f = c.severity;
            var h = [].concat(n.beforeSend).concat(this.config.beforeSend);
            var p = function (t) {
              o._logger.error(
                "Error occurred in beforeSend callback, continuing anyway…"
              );
              o._logger.error(t);
            };
            tt(h, rt(c, p), function (t, e) {
              if (t) p(t);
              if (e) {
                o._logger.debug("Report not sent due to beforeSend callback");
                return i(null, c);
              }
              if (o.config.autoBreadcrumbs)
                o.leaveBreadcrumb(
                  c.errorClass,
                  {
                    errorClass: c.errorClass,
                    errorMessage: c.errorMessage,
                    severity: c.severity,
                  },
                  "error"
                );
              if (f !== c.severity)
                c._handledState.severityReason = {
                  type: "userCallbackSetSeverity",
                };
              o._delivery.sendReport(
                {
                  apiKey: c.apiKey || o.config.apiKey,
                  notifier: o.notifier,
                  events: [c],
                },
                function (t) {
                  return i(t, c);
                }
              );
            });
          };
          return i;
        })(),
        Dt = function (t, e, n) {
          var i = 3;
          var o = function (t) {
            var e = Bt(t);
            n.warn(Mt + " " + e);
            return new Error(Lt + " " + e);
          };
          var r;
          var s = 0;
          var a;
          switch (typeof t) {
            case "string":
              if (typeof e === "string") {
                r = o("string/string");
                a = { metaData: { notifier: { notifyArgs: [t, e] } } };
              } else {
                r = new Error(String(t));
                s = i;
              }
              break;
            case "number":
            case "boolean":
              r = new Error(String(t));
              break;
            case "function":
              r = o("function");
              break;
            case "object":
              if (t !== null && (ot(t) || t.__isBugsnagReport)) r = t;
              else if (t !== null && jt(t)) {
                r = new Error(t.message || t.errorMessage);
                r.name = t.name || t.errorClass;
                s = i;
              } else r = o(t === null ? "null" : "unsupported object");
              break;
            default:
              r = o("nothing");
          }
          return { err: r, errorFramesToSkip: s, _opts: a };
        },
        jt = function (t) {
          return (
            (typeof t.name === "string" || typeof t.errorClass === "string") &&
            (typeof t.message === "string" ||
              typeof t.errorMessage === "string")
          );
        },
        Nt = function (t) {
          return (
            "Bugsnag configuration error\n" +
            kt(t, function (t) {
              return (
                '"' + t.key + '" ' + t.message + " \n    got " + Ft(t.value)
              );
            }).join("\n\n")
          );
        },
        Bt = function (t) {
          return "notify() expected error/opts parameters, got " + t;
        },
        Ft = function (t) {
          return typeof t === "object" ? JSON.stringify(t) : String(t);
        },
        zt = Rt,
        Ht = function (t, e, n, i) {
          var o = i && i.filterKeys ? i.filterKeys : [];
          var r = i && i.filterPaths ? i.filterPaths : [];
          return JSON.stringify(Jt(t, o, r), e, n);
        },
        Xt = 20,
        qt = 25e3,
        Vt = 8,
        C = "...";
      function Ut(t) {
        return (
          t instanceof Error ||
          /^\[object (Error|(Dom)?Exception)\]$/.test(
            Object.prototype.toString.call(t)
          )
        );
      }
      function Wt(t) {
        return "[Throws: " + (t ? t.message : "?") + "]";
      }
      function Yt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return true;
        return false;
      }
      function Gt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          if (e.indexOf(t[n]) === 0) return true;
        return false;
      }
      function Zt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) {
          if (typeof t[n] === "string" && t[n] === e) return true;
          if (t[n] && typeof t[n].test === "function" && t[n].test(e))
            return true;
        }
        return false;
      }
      function Kt(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      }
      function $t(t, e) {
        try {
          return t[e];
        } catch (t) {
          return Wt(t);
        }
      }
      function Jt(t, f, h) {
        var p = [];
        var d = 0;
        function _(t, e) {
          function n() {
            return e.length > Vt && d > qt;
          }
          d++;
          if (e.length > Xt) return C;
          if (n()) return C;
          if (t === null || typeof t !== "object") return t;
          if (Yt(p, t)) return "[Circular]";
          p.push(t);
          if (typeof t.toJSON === "function")
            try {
              d--;
              var i = _(t.toJSON(), e);
              p.pop();
              return i;
            } catch (t) {
              return Wt(t);
            }
          var o = Ut(t);
          if (o) {
            d--;
            var r = _({ name: t.name, message: t.message }, e);
            p.pop();
            return r;
          }
          if (Kt(t)) {
            var s = [];
            for (var a = 0, l = t.length; a < l; a++) {
              if (n()) {
                s.push(C);
                break;
              }
              s.push(_(t[a], e.concat("[]")));
            }
            p.pop();
            return s;
          }
          var u = {};
          try {
            for (var c in t) {
              if (!Object.prototype.hasOwnProperty.call(t, c)) continue;
              if (Gt(h, e.join(".")) && Zt(f, c)) {
                u[c] = "[Filtered]";
                continue;
              }
              if (n()) {
                u[c] = C;
                break;
              }
              u[c] = _($t(t, c), e.concat(c));
            }
          } catch (t) {}
          p.pop();
          return u;
        }
        return _(t, []);
      }
      var S = {},
        Qt = [
          "events.[].app",
          "events.[].metaData",
          "events.[].user",
          "events.[].breadcrumbs",
          "events.[].request",
          "events.[].device",
        ],
        te = ["device", "app", "user"],
        ee =
          ((S.report = function (t, e) {
            var n = Ht(t, null, null, { filterPaths: Qt, filterKeys: e });
            if (n.length > 1e6) {
              delete t.events[0].metaData;
              t.events[0].metaData = {
                notifier:
                  "WARNING!\nSerialized payload was " +
                  n.length / 1e6 +
                  "MB (limit = 1MB)\nmetaData was removed",
              };
              n = Ht(t, null, null, { filterPaths: Qt, filterKeys: e });
              if (n.length > 1e6) throw new Error("payload exceeded 1MB limit");
            }
            return n;
          }),
          (S.session = function (t, e) {
            var n = Ht(t, null, null, { filterPaths: te, filterKeys: e });
            if (n.length > 1e6) throw new Error("payload exceeded 1MB limit");
            return n;
          }),
          {}),
        ne = t.isoDate,
        ee,
        ie = function (t, e, n, i) {
          return (
            oe(t.endpoints[e], i.location.protocol) +
            "?apiKey=" +
            encodeURIComponent(t.apiKey) +
            "&payloadVersion=" +
            n +
            "&sentAt=" +
            encodeURIComponent(ne())
          );
        },
        oe = ((ee = function (o, r) {
          if (r === void 0) r = window;
          return {
            sendReport: function (t, e) {
              if (e === void 0) e = function () {};
              var n = ie(o.config, "notify", "4", r);
              var i = new r.XDomainRequest();
              i.onload = function () {
                e(null);
              };
              i.open("POST", n);
              setTimeout(function () {
                try {
                  i.send(S.report(t, o.config.filters));
                } catch (t) {
                  o._logger.error(t);
                  e(t);
                }
              }, 0);
            },
            sendSession: function (t, e) {
              if (e === void 0) e = function () {};
              var n = ie(o.config, "sessions", "1", r);
              var i = new r.XDomainRequest();
              i.onload = function () {
                e(null);
              };
              i.open("POST", n);
              setTimeout(function () {
                try {
                  i.send(S.session(t, o.config.filters));
                } catch (t) {
                  o._logger.error(t);
                  e(t);
                }
              }, 0);
            },
          };
        })._matchPageProtocol = function (t, e) {
          return e === "http:" ? t.replace(/^https:/, "http:") : t;
        }),
        re = t.isoDate,
        se = function (o, r) {
          if (r === void 0) r = window;
          return {
            sendReport: function (t, e) {
              if (e === void 0) e = function () {};
              try {
                var n = o.config.endpoints.notify;
                var i = new r.XMLHttpRequest();
                i.onreadystatechange = function () {
                  if (i.readyState === r.XMLHttpRequest.DONE) e(null);
                };
                i.open("POST", n);
                i.setRequestHeader("Content-Type", "application/json");
                i.setRequestHeader(
                  "Bugsnag-Api-Key",
                  t.apiKey || o.config.apiKey
                );
                i.setRequestHeader("Bugsnag-Payload-Version", "4");
                i.setRequestHeader("Bugsnag-Sent-At", re());
                i.send(S.report(t, o.config.filters));
              } catch (t) {
                o._logger.error(t);
              }
            },
            sendSession: function (t, e) {
              if (e === void 0) e = function () {};
              try {
                var n = o.config.endpoints.sessions;
                var i = new r.XMLHttpRequest();
                i.onreadystatechange = function () {
                  if (i.readyState === r.XMLHttpRequest.DONE) e(null);
                };
                i.open("POST", n);
                i.setRequestHeader("Content-Type", "application/json");
                i.setRequestHeader("Bugsnag-Api-Key", o.config.apiKey);
                i.setRequestHeader("Bugsnag-Payload-Version", "1");
                i.setRequestHeader("Bugsnag-Sent-At", re());
                i.send(S.session(t, o.config.filters));
              } catch (t) {
                o._logger.error(t);
              }
            },
          };
        },
        ae = {
          init: function (t, e) {
            if (e === void 0) e = window;
            t.config.beforeSend.unshift(function (t) {
              if (t.context) return;
              t.context = e.location.pathname;
            });
          },
        };
      function E() {
        E =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return E.apply(this, arguments);
      }
      var le = t.isoDate,
        ue = {
          init: function (t, e) {
            if (e === void 0) e = navigator;
            var n = {
              locale:
                e.browserLanguage ||
                e.systemLanguage ||
                e.userLanguage ||
                e.language,
              userAgent: e.userAgent,
            };
            t.device = E({}, n, t.device);
            t.config.beforeSend.unshift(function (t) {
              t.device = E({}, t.device, { time: le() });
            });
          },
        };
      function ce() {
        ce =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return ce.apply(this, arguments);
      }
      var fe = {
        init: function (t, e) {
          if (e === void 0) e = window;
          t.config.beforeSend.unshift(function (t) {
            if (t.request && t.request.url) return;
            t.request = ce({}, t.request, { url: e.location.href });
          });
        },
      };
      function he() {
        he =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return he.apply(this, arguments);
      }
      var pe = t.isArray,
        de = t.includes,
        _e = {
          init: function (t) {
            return t.sessionDelegate(ge);
          },
        },
        ge = {
          startSession: function (t) {
            var e = t;
            e._session = new t.BugsnagSession();
            var n = et(e);
            if (
              pe(e.config.notifyReleaseStages) &&
              !de(e.config.notifyReleaseStages, n)
            ) {
              e._logger.warn(
                "Session not sent due to releaseStage/notifyReleaseStages configuration"
              );
              return e;
            }
            if (!e.config.endpoints.sessions) {
              e._logger.warn(
                "Session not sent due to missing endpoints.sessions configuration"
              );
              return e;
            }
            e._delivery.sendSession({
              notifier: e.notifier,
              device: e.device,
              app: he({}, { releaseStage: n }, e.app),
              sessions: [
                {
                  id: e._session.id,
                  startedAt: e._session.startedAt,
                  user: e.user,
                },
              ],
            });
            return e;
          },
        };
      function k() {
        k =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return k.apply(this, arguments);
      }
      var me = {
          init: function (t) {
            if (t.config.collectUserIp) return;
            t.config.beforeSend.push(function (t) {
              if (t.user && typeof t.user.id === "undefined") delete t.user.id;
              t.user = k({ id: "[NOT COLLECTED]" }, t.user);
              t.request = k({ clientIp: "[NOT COLLECTED]" }, t.request);
            });
          },
          configSchema: {
            collectUserIp: {
              defaultValue: function () {
                return true;
              },
              message: "should be true|false",
              validate: function (t) {
                return t === true || t === false;
              },
            },
          },
        },
        ye = {},
        ve = t.map,
        be = t.reduce,
        we = t.filter;
      if (
        ((ye.init = function (r) {
          var t = /^dev(elopment)?$/.test(r.config.releaseStage);
          var e = r.config.consoleBreadcrumbsEnabled === false;
          var n =
            (r.config.autoBreadcrumbs === false || t) &&
            r.config.consoleBreadcrumbsEnabled !== true;
          if (e || n) return;
          ve(xe, function (i) {
            var o = console[i];
            console[i] = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              r.leaveBreadcrumb(
                "Console output",
                be(
                  e,
                  function (t, e, n) {
                    var i = "[Unknown value]";
                    try {
                      i = String(e);
                    } catch (t) {}
                    if (i === "[object Object]")
                      try {
                        i = JSON.stringify(e);
                      } catch (t) {}
                    t["[" + n + "]"] = i;
                    return t;
                  },
                  { severity: i.indexOf("group") === 0 ? "log" : i }
                ),
                "log"
              );
              o.apply(console, e);
            };
            console[i]._restore = function () {
              console[i] = o;
            };
          });
        }),
        (ye.configSchema = {
          consoleBreadcrumbsEnabled: {
            defaultValue: function () {
              return undefined;
            },
            validate: function (t) {
              return t === true || t === false || t === undefined;
            },
            message: "should be true|false",
          },
        }),
        false)
      );
      var xe = we(["log", "debug", "info", "warn", "error"], function (t) {
          return (
            typeof console !== "undefined" && typeof console[t] === "function"
          );
        }),
        Te = t.map,
        Oe = t.reduce,
        Pe = t.filter,
        Ce = 200,
        Se = 5e5,
        Ee = {
          init: function (t, n, e) {
            if (n === void 0) n = document;
            if (e === void 0) e = window;
            if (!t.config.trackInlineScripts) return;
            var o = e.location.href;
            var r = "";
            var s = false;
            var a = function () {
              return n.documentElement.outerHTML;
            };
            r = a();
            var i = n.onreadystatechange;
            n.onreadystatechange = function () {
              if (n.readyState === "interactive") {
                r = a();
                s = true;
              }
              try {
                i.apply(this, arguments);
              } catch (t) {}
            };
            var l = null;
            var u = function (t) {
              l = t;
            };
            var c = function () {
              var t = n.currentScript || l;
              if (!t && !s) {
                var e = n.scripts || n.getElementsByTagName("script");
                t = e[e.length - 1];
              }
              return t;
            };
            var f = function (t) {
              if (!s || !r) r = a();
              var e = ["\x3c!-- DOC START --\x3e"].concat(r.split("\n"));
              var n = t - 1;
              var i = Math.max(n - 3, 0);
              var o = Math.min(n + 3, e.length);
              return Oe(
                e.slice(i, o),
                function (t, e, n) {
                  t[i + 1 + n] = e.length <= Ce ? e : e.substr(0, Ce);
                  return t;
                },
                {}
              );
            };
            t.config.beforeSend.unshift(function (t) {
              t.stacktrace = Pe(t.stacktrace, function (t) {
                return !/__trace__$/.test(t.method);
              });
              var e = t.stacktrace[0];
              if (
                e &&
                e.file &&
                e.file.replace(/#.*$/, "") !== o.replace(/#.*$/, "")
              )
                return;
              var n = c();
              if (n) {
                var i = n.innerHTML;
                t.updateMetaData(
                  "script",
                  "content",
                  i.length <= Se ? i : i.substr(0, Se)
                );
              }
              if (!e || !e.lineNumber) return;
              e.code = f(e.lineNumber);
            });
            var h = Te(
                [
                  "setTimeout",
                  "setInterval",
                  "setImmediate",
                  "requestAnimationFrame",
                ],
                function (t) {
                  return ke(e, t, function (t) {
                    return d(t, function (e) {
                      return {
                        get: function () {
                          return e[0];
                        },
                        replace: function (t) {
                          e[0] = t;
                        },
                      };
                    });
                  });
                }
              ),
              p = h[0];
            Te(
              [
                "EventTarget",
                "Window",
                "Node",
                "ApplicationCache",
                "AudioTrackList",
                "ChannelMergerNode",
                "CryptoOperation",
                "EventSource",
                "FileReader",
                "HTMLUnknownElement",
                "IDBDatabase",
                "IDBRequest",
                "IDBTransaction",
                "KeyOperation",
                "MediaController",
                "MessagePort",
                "ModalWindow",
                "Notification",
                "SVGElementInstance",
                "Screen",
                "TextTrack",
                "TextTrackCue",
                "TextTrackList",
                "WebSocket",
                "WebSocketWorker",
                "Worker",
                "XMLHttpRequest",
                "XMLHttpRequestEventTarget",
                "XMLHttpRequestUpload",
              ],
              function (t) {
                if (
                  !e[t] ||
                  !e[t].prototype ||
                  !e[t].prototype.hasOwnProperty ||
                  !e[t].prototype.hasOwnProperty("addEventListener")
                )
                  return;
                ke(e[t].prototype, "addEventListener", function (t) {
                  return d(t, Ae);
                });
                ke(e[t].prototype, "removeEventListener", function (t) {
                  return d(t, Ae, true);
                });
              }
            );
            function d(o, r, s) {
              if (s === void 0) s = false;
              return function () {
                var t = Array.prototype.slice.call(arguments);
                try {
                  var e = r(t);
                  var n = e.get();
                  if (s) o.apply(this, t);
                  if (typeof n !== "function") return o.apply(this, t);
                  if (n.__trace__) e.replace(n.__trace__);
                  else {
                    var i = c();
                    n.__trace__ = function t() {
                      u(i);
                      p(function () {
                        u(null);
                      }, 0);
                      var e = n.apply(this, arguments);
                      u(null);
                      return e;
                    };
                    n.__trace__.__trace__ = n.__trace__;
                    e.replace(n.__trace__);
                  }
                } catch (t) {}
                if (o.apply) return o.apply(this, t);
                switch (t.length) {
                  case 1:
                    return o(t[0]);
                  case 2:
                    return o(t[0], t[1]);
                  default:
                    return o();
                }
              };
            }
          },
          configSchema: {
            trackInlineScripts: {
              validate: function (t) {
                return t === true || t === false;
              },
              defaultValue: function () {
                return true;
              },
              message: "should be true|false",
            },
          },
        };
      function ke(t, e, n) {
        var i = t[e];
        if (!i) return i;
        var o = n(i);
        t[e] = o;
        return i;
      }
      function Ae(e) {
        var n = !!e[1] && typeof e[1].handleEvent === "function";
        return {
          get: function () {
            return n ? e[1].handleEvent : e[1];
          },
          replace: function (t) {
            if (n) e[1].handleEvent = t;
            else e[1] = t;
          },
        };
      }
      var Ie = {
          init: function (i, o) {
            if (o === void 0) o = window;
            if (!("addEventListener" in o)) return;
            var t = i.config.interactionBreadcrumbsEnabled === false;
            var e =
              i.config.autoBreadcrumbs === false &&
              i.config.interactionBreadcrumbsEnabled !== true;
            if (t || e) return;
            o.addEventListener(
              "click",
              function (t) {
                var e, n;
                try {
                  e = Me(t.target);
                  n = Le(t.target, o);
                } catch (t) {
                  e = "[hidden]";
                  n = "[hidden]";
                  i._logger.error(
                    "Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z"
                  );
                }
                i.leaveBreadcrumb(
                  "UI click",
                  { targetText: e, targetSelector: n },
                  "user"
                );
              },
              true
            );
          },
          configSchema: {
            interactionBreadcrumbsEnabled: {
              defaultValue: function () {
                return undefined;
              },
              validate: function (t) {
                return t === true || t === false || t === undefined;
              },
              message: "should be true|false",
            },
          },
        },
        Me = function (t) {
          var e = t.textContent || t.innerText || "";
          if (!e && (t.type === "submit" || t.type === "button")) e = t.value;
          e = e.replace(/^\s+|\s+$/g, "");
          return Re(e, 140);
        };
      function Le(t, e) {
        var n = [t.tagName];
        if (t.id) n.push("#" + t.id);
        if (t.className && t.className.length)
          n.push("." + t.className.split(" ").join("."));
        if (!e.document.querySelectorAll || !Array.prototype.indexOf)
          return n.join("");
        try {
          if (e.document.querySelectorAll(n.join("")).length === 1)
            return n.join("");
        } catch (t) {
          return n.join("");
        }
        if (t.parentNode.childNodes.length > 1) {
          var i = Array.prototype.indexOf.call(t.parentNode.childNodes, t) + 1;
          n.push(":nth-child(" + i + ")");
        }
        if (e.document.querySelectorAll(n.join("")).length === 1)
          return n.join("");
        if (t.parentNode) return Le(t.parentNode, e) + " > " + n.join("");
        return n.join("");
      }
      function Re(t, e) {
        var n = "(...)";
        if (t && t.length <= e) return t;
        return t.slice(0, e - n.length) + n;
      }
      var De = {
        init: function (n, i) {
          if (i === void 0) i = window;
          if (!("addEventListener" in i)) return;
          var t = n.config.navigationBreadcrumbsEnabled === false;
          var e =
            n.config.autoBreadcrumbs === false &&
            n.config.navigationBreadcrumbsEnabled !== true;
          if (t || e) return;
          var o = function (t) {
            return function () {
              return n.leaveBreadcrumb(t, {}, "navigation");
            };
          };
          i.addEventListener("pagehide", o("Page hidden"), true);
          i.addEventListener("pageshow", o("Page shown"), true);
          i.addEventListener("load", o("Page loaded"), true);
          i.document.addEventListener(
            "DOMContentLoaded",
            o("DOMContentLoaded"),
            true
          );
          i.addEventListener("load", function () {
            return i.addEventListener("popstate", o("Navigated back"), true);
          });
          i.addEventListener(
            "hashchange",
            function (t) {
              var e = t.oldURL
                ? { from: A(t.oldURL, i), to: A(t.newURL, i), state: Be(i) }
                : { to: A(i.location.href, i) };
              n.leaveBreadcrumb("Hash changed", e, "navigation");
            },
            true
          );
          if (i.history.replaceState) Ne(n, i.history, "replaceState", i);
          if (i.history.pushState) Ne(n, i.history, "pushState", i);
          n.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
        },
        configSchema: {
          navigationBreadcrumbsEnabled: {
            defaultValue: function () {
              return undefined;
            },
            validate: function (t) {
              return t === true || t === false || t === undefined;
            },
            message: "should be true|false",
          },
        },
      };
      if (false);
      var A = function (t, e) {
          var n = e.document.createElement("A");
          n.href = t;
          return "" + n.pathname + n.search + n.hash;
        },
        je = function (t, e, n, i) {
          var o = A(t.location.href, t);
          return { title: n, state: e, prevState: Be(t), to: i || o, from: o };
        },
        Ne = function (i, o, r, s) {
          var a = o[r];
          o[r] = function (t, e, n) {
            i.leaveBreadcrumb("History " + r, je(s, t, e, n), "navigation");
            if (typeof i.refresh === "function") i.refresh();
            if (i.config.autoCaptureSessions) i.startSession();
            a.apply(o, [t, e].concat(n !== undefined ? n : []));
          };
          if (false);
        },
        Be = function (t) {
          try {
            return t.history.state;
          } catch (t) {}
        },
        I = {},
        M = "request",
        Fe = "BS~~S",
        L = "BS~~U",
        ze = "BS~~M",
        He = t.includes,
        Xe = [],
        R,
        D,
        qe,
        Ve = function () {
          return [R.config.endpoints.notify, R.config.endpoints.sessions];
        };
      if (
        ((I.name = "networkBreadcrumbs"),
        (I.init = function (t, e, n) {
          if (e === void 0) e = Ve;
          if (n === void 0) n = window;
          var i = t.config.networkBreadcrumbsEnabled === false;
          var o =
            t.config.autoBreadcrumbs === false &&
            t.config.networkBreadcrumbsEnabled !== true;
          if (i || o) return;
          R = t;
          D = n;
          qe = e;
          Ue();
          Ge();
        }),
        (I.configSchema = {
          networkBreadcrumbsEnabled: {
            defaultValue: function () {
              return undefined;
            },
            validate: function (t) {
              return t === true || t === false || t === undefined;
            },
            message: "should be true|false",
          },
        }),
        false)
      );
      var Ue = function () {
        if (!("addEventListener" in D.XMLHttpRequest.prototype)) return;
        var i = D.XMLHttpRequest.prototype.open;
        D.XMLHttpRequest.prototype.open = function t(e, n) {
          this[L] = n;
          this[ze] = e;
          if (this[Fe]) {
            this.removeEventListener("load", We);
            this.removeEventListener("error", Ye);
          }
          this.addEventListener("load", We);
          this.addEventListener("error", Ye);
          this[Fe] = true;
          i.apply(this, arguments);
        };
        if (false);
      };
      function We() {
        if (He(qe(), this[L])) return;
        var t = { status: this.status, request: this[ze] + " " + this[L] };
        if (this.status >= 400)
          R.leaveBreadcrumb("XMLHttpRequest failed", t, M);
        else R.leaveBreadcrumb("XMLHttpRequest succeeded", t, M);
      }
      function Ye() {
        if (He(qe, this[L])) return;
        R.leaveBreadcrumb(
          "XMLHttpRequest error",
          { request: this[ze] + " " + this[L] },
          M
        );
      }
      var Ge = function () {
          if (!("fetch" in D) || D.fetch.polyfill) return;
          var s = D.fetch;
          D.fetch = function t() {
            var i = arguments;
            var e = arguments[0];
            var n = arguments[1];
            var o;
            var r = null;
            if (e && typeof e === "object") {
              r = e.url;
              if (n && "method" in n) o = n.method;
              else if (e && "method" in e) o = e.method;
            } else {
              r = e;
              if (n && "method" in n) o = n.method;
            }
            if (o === undefined) o = "GET";
            return new Promise(function (e, n) {
              s.apply(void 0, i)
                .then(function (t) {
                  Ze(t, o, r);
                  e(t);
                })
                ["catch"](function (t) {
                  Ke(o, r);
                  n(t);
                });
            });
          };
          if (false);
        },
        Ze = function (t, e, n) {
          var i = { status: t.status, request: e + " " + n };
          if (t.status >= 400) R.leaveBreadcrumb("fetch() failed", i, M);
          else R.leaveBreadcrumb("fetch() succeeded", i, M);
        },
        Ke = function (t, e) {
          R.leaveBreadcrumb("fetch() error", { request: t + " " + e }, M);
        },
        $e = o.intRange,
        Je = {
          init: function (e) {
            var n = 0;
            e.config.beforeSend.push(function (t) {
              if (n >= e.config.maxEvents) return t.ignore();
              n++;
            });
            e.refresh = function () {
              n = 0;
            };
          },
          configSchema: {
            maxEvents: {
              defaultValue: function () {
                return 10;
              },
              message: "should be a positive integer ≤100",
              validate: function (t) {
                return $e(1, 100)(t);
              },
            },
          },
        },
        Qe = {};
      function tn() {
        tn =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return tn.apply(this, arguments);
      }
      var en = t.map,
        Qe,
        nn = ((Qe = {
          init: function (t) {
            t.config.beforeSend.push(function (t) {
              t.stacktrace = en(t.stacktrace, function (t) {
                return tn({}, t, { file: nn(t.file) });
              });
            });
          },
        })._strip = function (t) {
          return typeof t === "string"
            ? t.replace(/\?.*$/, "").replace(/#.*$/, "")
            : t;
        }),
        on = {
          init: function (u, t) {
            if (t === void 0) t = window;
            function e(t, e, n, i, o) {
              if (n === 0 && /Script error\.?/.test(t))
                u._logger.warn(
                  "Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z"
                );
              else {
                var r = {
                  severity: "error",
                  unhandled: true,
                  severityReason: { type: "unhandledException" },
                };
                var s;
                if (o)
                  if (o.name && o.message)
                    s = new u.BugsnagReport(
                      o.name,
                      o.message,
                      rn(u.BugsnagReport.getStacktrace(o), e, n, i),
                      r,
                      o
                    );
                  else {
                    s = new u.BugsnagReport(
                      "window.onerror",
                      String(o),
                      rn(u.BugsnagReport.getStacktrace(o, 1), e, n, i),
                      r,
                      o
                    );
                    s.updateMetaData("window onerror", { error: o });
                  }
                else if (
                  typeof t === "object" &&
                  t !== null &&
                  (!e || typeof e !== "string") &&
                  !n &&
                  !i &&
                  !o
                ) {
                  var a = t.type ? "Event: " + t.type : "window.onerror";
                  var l = t.message || t.detail || "";
                  s = new u.BugsnagReport(
                    a,
                    l,
                    u.BugsnagReport.getStacktrace(new Error(), 1).slice(1),
                    r,
                    t
                  );
                  s.updateMetaData("window onerror", {
                    event: t,
                    extraParameters: e,
                  });
                } else {
                  s = new u.BugsnagReport(
                    "window.onerror",
                    String(t),
                    rn(u.BugsnagReport.getStacktrace(o, 1), e, n, i),
                    r,
                    t
                  );
                  s.updateMetaData("window onerror", { event: t });
                }
                u.notify(s);
              }
              if (typeof c === "function") c.apply(this, arguments);
            }
            var c = t.onerror;
            t.onerror = e;
          },
        },
        rn = function (t, e, n, i) {
          var o = t[0];
          if (!o) return t;
          if (!o.fileName && typeof e === "string") o.setFileName(e);
          if (!o.lineNumber && sn(n)) o.setLineNumber(n);
          if (!o.columnNumber)
            if (sn(i)) o.setColumnNumber(i);
            else if (window.event && sn(window.event.errorCharacter))
              o.setColumnNumber(window.event.errorCharacter);
          return t;
        },
        sn = function (t) {
          return typeof t === "number" && String.call(t) !== "NaN";
        },
        an = {},
        ln = t.reduce,
        un;
      if (
        ((an.init = function (s, t) {
          if (t === void 0) t = window;
          var n = function (t) {
            var e = t.reason;
            var n = false;
            try {
              if (t.detail && t.detail.reason) {
                e = t.detail.reason;
                n = true;
              }
            } catch (t) {}
            var i = {
              severity: "error",
              unhandled: true,
              severityReason: { type: "unhandledPromiseRejection" },
            };
            var o;
            if (e && y(e)) {
              o = new s.BugsnagReport(e.name, e.message, m.parse(e), i, e);
              if (n) o.stacktrace = ln(o.stacktrace, fn(e), []);
            } else {
              var r =
                'Rejection reason was not an Error. See "Promise" tab for more detail.';
              o = new s.BugsnagReport(
                e && e.name ? e.name : "UnhandledRejection",
                e && e.message ? e.message : r,
                [],
                i,
                e
              );
              o.updateMetaData("promise", "rejection reason", cn(e));
            }
            s.notify(o);
          };
          if ("addEventListener" in t)
            t.addEventListener("unhandledrejection", n);
          else
            t.onunhandledrejection = function (t, e) {
              n({ detail: { reason: t, promise: e } });
            };
          un = n;
        }),
        false)
      );
      var cn = function (t) {
          if (t === null || t === undefined) return "undefined (or null)";
          else if (ot(t)) {
            var e;
            return (
              (e = {}),
              (e[Object.prototype.toString.call(t)] = {
                name: t.name,
                message: t.message,
                code: t.code,
                stack: t.stack,
              }),
              e
            );
          } else return t;
        },
        fn = function (n) {
          return function (t, e) {
            if (e.file === n.toString()) return t;
            if (e.method) e.method = e.method.replace(/^\s+/, "");
            return t.concat(e);
          };
        },
        hn = {};
      function pn() {
        pn =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i];
            }
            return t;
          };
        return pn.apply(this, arguments);
      }
      var dn = "Bugsnag JavaScript",
        _n = "6.5.2",
        gn = "https://github.com/bugsnag/bugsnag-js",
        mn = pn({}, s.schema, K),
        hn;
      return (
        ((hn = function (t) {
          if (typeof t === "string") t = { apiKey: t };
          var e = "";
          if (t.endpoints && t.endpoints.notify && !t.endpoints.sessions)
            e +=
              "notify endpoint is set but sessions endpoint is not. No sessions will be sent.";
          var n = new zt({ name: dn, version: _n, url: gn });
          n.setOptions(t);
          n.delivery(window.XDomainRequest ? ee : se);
          n.configure(mn);
          if (e) n._logger.warn(e);
          n.use(ue);
          n.use(ae);
          n.use(fe);
          n.use(Je);
          n.use(_e);
          n.use(me);
          n.use(Qe);
          if (n.config.autoNotify !== false) {
            n.use(on);
            n.use(an);
          }
          n.use(De);
          n.use(Ie);
          n.use(I);
          n.use(ye);
          n.use(Ee);
          n._logger.debug("Loaded!");
          return n.config.autoCaptureSessions ? n.startSession() : n;
        }).Bugsnag = { Client: zt, Report: x, Session: Et, Breadcrumb: p }),
        (hn["default"] = hn)
      );
    })();
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(30))),
      l = (n(68), s(n(13))),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.build = function () {
          o.prototype.build.call(this),
            this.qs(".close-button").addEventListener(
              "click",
              this.onCloseClick
            );
        }),
        (u.prototype.awake = function () {
          o.prototype.awake.call(this);
        }),
        (u.prototype.destroy = function () {
          o.prototype.destroy.call(this),
            this.qs(".close-button").removeEventListener(
              "click",
              this.onCloseClick
            );
        }),
        u);
    function u() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onCloseClick = function () {
          l.default.removeChild(t, !0);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var l =
        (this && this.__spreadArrays) ||
        function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
          for (var i = Array(t), o = 0, e = 0; e < n; e++)
            for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++)
              i[o] = r[s];
          return i;
        },
      u =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DispatcherWrapper = e.EventListBase = e.DispatcherBase = void 0),
        n(55)),
      i = n(31);
    function o() {
      (this._wrap = new s(this)), (this._subscriptions = new Array());
    }
    function r() {
      this._events = {};
    }
    Object.defineProperty(o.prototype, "count", {
      get: function () {
        return this._subscriptions.length;
      },
      enumerable: !1,
      configurable: !0,
    }),
      (o.prototype.subscribe = function (t) {
        var e = this;
        return (
          t && this._subscriptions.push(new i.Subscription(t, !1)),
          function () {
            e.unsubscribe(t);
          }
        );
      }),
      (o.prototype.sub = function (t) {
        return this.subscribe(t);
      }),
      (o.prototype.one = function (t) {
        var e = this;
        return (
          t && this._subscriptions.push(new i.Subscription(t, !0)),
          function () {
            e.unsubscribe(t);
          }
        );
      }),
      (o.prototype.has = function (e) {
        return (
          !!e &&
          this._subscriptions.some(function (t) {
            return t.handler == e;
          })
        );
      }),
      (o.prototype.unsubscribe = function (t) {
        if (t)
          for (var e = 0; e < this._subscriptions.length; e++)
            if (this._subscriptions[e].handler == t) {
              this._subscriptions.splice(e, 1);
              break;
            }
      }),
      (o.prototype.unsub = function (t) {
        this.unsubscribe(t);
      }),
      (o.prototype._dispatch = function (i, o, r) {
        for (
          var s = this, a = this, t = 0, e = l(this._subscriptions);
          t < e.length &&
          "break" !==
            (function (t) {
              var e = new u.EventManagement(function () {
                  return s.unsub(t.handler);
                }),
                n = Array.prototype.slice.call(r);
              if (
                (n.push(e),
                t.execute(i, o, n),
                a.cleanup(t),
                !i && e.propagationStopped)
              )
                return "break";
            })(e[t]);
          t++
        );
      }),
      (o.prototype.cleanup = function (t) {
        t.isOnce &&
          t.isExecuted &&
          -1 < (t = this._subscriptions.indexOf(t)) &&
          this._subscriptions.splice(t, 1);
      }),
      (o.prototype.asEvent = function () {
        return this._wrap;
      }),
      (o.prototype.clear = function () {
        this._subscriptions.splice(0, this._subscriptions.length);
      }),
      (e.DispatcherBase = o),
      (r.prototype.get = function (t) {
        var e = this._events[t];
        return e || ((e = this.createDispatcher()), (this._events[t] = e)), e;
      }),
      (r.prototype.remove = function (t) {
        delete this._events[t];
      }),
      (e.EventListBase = r);
    Object.defineProperty(a.prototype, "count", {
      get: function () {
        return this._count();
      },
      enumerable: !1,
      configurable: !0,
    }),
      (a.prototype.subscribe = function (t) {
        return this._subscribe(t);
      }),
      (a.prototype.sub = function (t) {
        return this.subscribe(t);
      }),
      (a.prototype.unsubscribe = function (t) {
        this._unsubscribe(t);
      }),
      (a.prototype.unsub = function (t) {
        this.unsubscribe(t);
      }),
      (a.prototype.one = function (t) {
        return this._one(t);
      }),
      (a.prototype.has = function (t) {
        return this._has(t);
      }),
      (a.prototype.clear = function () {
        this._clear();
      });
    var s = a;
    function a(e) {
      (this._subscribe = function (t) {
        return e.subscribe(t);
      }),
        (this._unsubscribe = function (t) {
          return e.unsubscribe(t);
        }),
        (this._one = function (t) {
          return e.one(t);
        }),
        (this._has = function (t) {
          return e.has(t);
        }),
        (this._clear = function () {
          return e.clear();
        }),
        (this._count = function () {
          return e.count;
        });
    }
    e.DispatcherWrapper = s;
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      (this.unsub = t), (this.propagationStopped = !1);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EventManagement = void 0),
      (i.prototype.stopPropagation = function () {
        this.propagationStopped = !0;
      }),
      (e.EventManagement = i);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NonUniformEventList =
        e.EventList =
        e.EventHandlingBase =
        e.EventDispatcher =
          void 0);
    var i = n(57);
    Object.defineProperty(e, "EventDispatcher", {
      enumerable: !0,
      get: function () {
        return i.EventDispatcher;
      },
    }),
      Object.defineProperty(e, "EventHandlingBase", {
        enumerable: !0,
        get: function () {
          return i.EventHandlingBase;
        },
      }),
      Object.defineProperty(e, "EventList", {
        enumerable: !0,
        get: function () {
          return i.EventList;
        },
      }),
      Object.defineProperty(e, "NonUniformEventList", {
        enumerable: !0,
        get: function () {
          return i.NonUniformEventList;
        },
      });
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      n =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EventHandlingBase =
          e.EventList =
          e.NonUniformEventList =
          e.EventDispatcher =
            void 0),
        n(16)),
      s =
        ((o = n.DispatcherBase),
        r(a, o),
        (a.prototype.dispatch = function (t, e) {
          this._dispatch(!1, this, arguments);
        }),
        (a.prototype.dispatchAsync = function (t, e) {
          this._dispatch(!0, this, arguments);
        }),
        (a.prototype.asEvent = function () {
          return o.prototype.asEvent.call(this);
        }),
        a);
    function a() {
      return o.call(this) || this;
    }
    function l() {
      this._events = {};
    }
    (e.EventDispatcher = s),
      (l.prototype.get = function (t) {
        var e;
        return (
          this._events[t] ||
          ((e = this.createDispatcher()), (this._events[t] = e))
        );
      }),
      (l.prototype.remove = function (t) {
        delete this._events[t];
      }),
      (l.prototype.createDispatcher = function () {
        return new s();
      }),
      (e.NonUniformEventList = l);
    (u = n.EventListBase),
      r(f, u),
      (f.prototype.createDispatcher = function () {
        return new s();
      });
    var u,
      c = f;
    function f() {
      return u.call(this) || this;
    }
    function h() {
      this._events = new c();
    }
    (e.EventList = c),
      Object.defineProperty(h.prototype, "events", {
        get: function () {
          return this._events;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (h.prototype.subscribe = function (t, e) {
        this._events.get(t).subscribe(e);
      }),
      (h.prototype.sub = function (t, e) {
        this.subscribe(t, e);
      }),
      (h.prototype.unsubscribe = function (t, e) {
        this._events.get(t).unsubscribe(e);
      }),
      (h.prototype.unsub = function (t, e) {
        this.unsubscribe(t, e);
      }),
      (h.prototype.one = function (t, e) {
        this._events.get(t).one(e);
      }),
      (h.prototype.has = function (t, e) {
        return this._events.get(t).has(e);
      }),
      (e.EventHandlingBase = h);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NonUniformSimpleEventList =
        e.SimpleEventList =
        e.SimpleEventHandlingBase =
        e.SimpleEventDispatcher =
          void 0);
    var i = n(59);
    Object.defineProperty(e, "SimpleEventDispatcher", {
      enumerable: !0,
      get: function () {
        return i.SimpleEventDispatcher;
      },
    }),
      Object.defineProperty(e, "SimpleEventHandlingBase", {
        enumerable: !0,
        get: function () {
          return i.SimpleEventHandlingBase;
        },
      }),
      Object.defineProperty(e, "SimpleEventList", {
        enumerable: !0,
        get: function () {
          return i.SimpleEventList;
        },
      }),
      Object.defineProperty(e, "NonUniformSimpleEventList", {
        enumerable: !0,
        get: function () {
          return i.NonUniformSimpleEventList;
        },
      });
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      n =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SimpleEventHandlingBase =
          e.SimpleEventList =
          e.NonUniformSimpleEventList =
          e.SimpleEventDispatcher =
            void 0),
        n(16)),
      s =
        ((o = n.DispatcherBase),
        r(a, o),
        (a.prototype.dispatch = function (t) {
          this._dispatch(!1, this, arguments);
        }),
        (a.prototype.dispatchAsync = function (t) {
          this._dispatch(!0, this, arguments);
        }),
        (a.prototype.asEvent = function () {
          return o.prototype.asEvent.call(this);
        }),
        a);
    function a() {
      return o.call(this) || this;
    }
    function l() {
      this._events = {};
    }
    (e.SimpleEventDispatcher = s),
      (l.prototype.get = function (t) {
        var e;
        return (
          this._events[t] ||
          ((e = this.createDispatcher()), (this._events[t] = e))
        );
      }),
      (l.prototype.remove = function (t) {
        delete this._events[t];
      }),
      (l.prototype.createDispatcher = function () {
        return new s();
      }),
      (e.NonUniformSimpleEventList = l);
    (u = n.EventListBase),
      r(f, u),
      (f.prototype.createDispatcher = function () {
        return new s();
      });
    var u,
      c = f;
    function f() {
      return u.call(this) || this;
    }
    function h() {
      this._events = new c();
    }
    (e.SimpleEventList = c),
      Object.defineProperty(h.prototype, "events", {
        get: function () {
          return this._events;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (h.prototype.subscribe = function (t, e) {
        this._events.get(t).subscribe(e);
      }),
      (h.prototype.sub = function (t, e) {
        this.subscribe(t, e);
      }),
      (h.prototype.one = function (t, e) {
        this._events.get(t).one(e);
      }),
      (h.prototype.has = function (t, e) {
        return this._events.get(t).has(e);
      }),
      (h.prototype.unsubscribe = function (t, e) {
        this._events.get(t).unsubscribe(e);
      }),
      (h.prototype.unsub = function (t, e) {
        this.unsubscribe(t, e);
      }),
      (e.SimpleEventHandlingBase = h);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SignalList = e.SignalHandlingBase = e.SignalDispatcher = void 0);
    var i = n(61);
    Object.defineProperty(e, "SignalDispatcher", {
      enumerable: !0,
      get: function () {
        return i.SignalDispatcher;
      },
    }),
      Object.defineProperty(e, "SignalHandlingBase", {
        enumerable: !0,
        get: function () {
          return i.SignalHandlingBase;
        },
      }),
      Object.defineProperty(e, "SignalList", {
        enumerable: !0,
        get: function () {
          return i.SignalList;
        },
      });
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      n =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SignalHandlingBase = e.SignalList = e.SignalDispatcher = void 0),
        n(16)),
      s =
        ((o = n.DispatcherBase),
        r(a, o),
        (a.prototype.dispatch = function () {
          this._dispatch(!1, this, arguments);
        }),
        (a.prototype.dispatchAsync = function () {
          this._dispatch(!0, this, arguments);
        }),
        (a.prototype.asEvent = function () {
          return o.prototype.asEvent.call(this);
        }),
        a);
    function a() {
      return o.call(this) || this;
    }
    e.SignalDispatcher = s;
    (l = n.EventListBase),
      r(c, l),
      (c.prototype.createDispatcher = function () {
        return new s();
      });
    var l,
      u = c;
    function c() {
      return l.call(this) || this;
    }
    function f() {
      this._events = new u();
    }
    (e.SignalList = u),
      Object.defineProperty(f.prototype, "events", {
        get: function () {
          return this._events;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (f.prototype.one = function (t, e) {
        this._events.get(t).one(e);
      }),
      (f.prototype.has = function (t, e) {
        return this._events.get(t).has(e);
      }),
      (f.prototype.subscribe = function (t, e) {
        this._events.get(t).subscribe(e);
      }),
      (f.prototype.sub = function (t, e) {
        this.subscribe(t, e);
      }),
      (f.prototype.unsubscribe = function (t, e) {
        this._events.get(t).unsubscribe(e);
      }),
      (f.prototype.unsub = function (t, e) {
        this.unsubscribe(t, e);
      }),
      (e.SignalHandlingBase = f);
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      (this.plain = i.getParsedPlain(t)),
        (this.arr = i.getParsedArr(t)),
        (this.refs = i.getParsedRefs(t)),
        (this.ref = i.getParsedRef(t));
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DOMParameters = void 0),
      (i.getParsedPlain = function (t) {
        var n = {};
        return (
          this.loopParams(t, function (t, e) {
            "@" === t[0] ||
              ("[" === t[0] && "]" === t[1]) ||
              (n[t] = "" === e ? "true" : e);
          }),
          n
        );
      }),
      (i.getParsedArr = function (t) {
        var n = {};
        return (
          this.loopParams(t, function (t, e) {
            ("[" !== t[0] && "]" !== t[1]) ||
              ((t = t.substring(2, t.length)),
              (n[t] = e.replace(" ", "").split(",")));
          }),
          n
        );
      }),
      (i.getParsedRefs = function (o) {
        var r = {};
        return (
          this.loopParams(o, function (t, e) {
            if ("@" === t[0] && ("[" === t[1] || "]" === t[2])) {
              t = t.substring(3, t.length);
              for (
                var n = e, i = o;
                0 < n.length && "<" === n.substring(0, 1);

              )
                o.parentElement && (i = o.parentElement),
                  (n = n.substring(1, e.length));
              r[t] = i.querySelectorAll(n);
            }
          }),
          r
        );
      }),
      (i.getParsedRef = function (o) {
        var r = {};
        return (
          this.loopParams(o, function (t, e) {
            if ("@" === t[0] && ("[" !== t[1] || "]" !== t[2])) {
              t = t.substring(1, t.length);
              for (
                var n = e, i = o;
                0 < n.length && "<" === n.substring(0, 1);

              )
                o.parentElement && (i = o.parentElement),
                  (n = n.substring(1, e.length));
              r[t] = i.querySelector(n);
            }
          }),
          r
        );
      }),
      (i.loopParams = function (t, e) {
        for (
          var n, i, o = [], r = t.attributes, s = r.length, a = 0;
          a < s;
          a++
        )
          -1 !== r.item(a).name.indexOf("data-") &&
            ((n = r.item(a).name.replace("data-", "").toLowerCase()),
            (i = t.getAttribute(r.item(a).name)),
            -1 === o.indexOf(n) && (e(n, i), o.push(n)));
      }),
      (e.DOMParameters = i);
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), i(n(4))),
      r = i(n(17));
    function s(t) {
      void 0 === t && (t = null),
        (this.offsetRect = new r.default()),
        (this._element = t),
        this.updateRect();
    }
    Object.defineProperty(s.prototype, "rect", {
      get: function () {
        return this._rect;
      },
      enumerable: !1,
      configurable: !0,
    }),
      (s.prototype.updateRect = function (t) {
        (this._rect =
          (t = void 0 === t ? null : t) ||
          this._element.getBoundingClientRect()),
          this._rect.apply(this.offsetRect);
      }),
      Object.defineProperty(s.prototype, "screenX", {
        get: function () {
          return (
            (1 / this._rect.width) *
              (-1 * this._rect.x +
                0.5 * o.default.RESIZE.windowWidth +
                0.5 * this._rect.width) -
            1
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "screenY", {
        get: function () {
          return (
            (1 / this._rect.height) *
              (-1 * this._rect.y +
                0.5 * o.default.RESIZE.windowHeight +
                0.5 * this._rect.height) -
            1
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "contentX", {
        get: function () {
          var t = (1 / this._rect.width) * this._rect.x * -1,
            e =
              (1 / this._rect.width) *
                (-1 * this._rect.x + o.default.RESIZE.windowWidth) -
              1;
          return e < 0 ? (e < -1 ? -1 : e) : 0 < t ? (1 < t ? 1 : t) : 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "contentY", {
        get: function () {
          var t = (1 / this._rect.height) * this._rect.y * -1,
            e =
              (1 / this._rect.height) *
                (-1 * this._rect.y + o.default.RESIZE.windowHeight) -
              1;
          return e < 0 ? (e < -1 ? -1 : e) : 0 < t ? (1 < t ? 1 : t) : 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "visualX", {
        get: function () {
          var t = 1 - (1 / this._rect.width) * this._rect.x * -1,
            e =
              (1 / this._rect.width) *
              (-1 * this._rect.x + o.default.RESIZE.windowWidth);
          return e < 1 ? (e < 0 ? 0 : e) : t < 1 ? (t < 0 ? 0 : t) : 1;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "visualY", {
        get: function () {
          var t = 1 - (1 / this._rect.height) * this._rect.y * -1,
            e =
              (1 / this._rect.height) *
              (-1 * this._rect.y + o.default.RESIZE.windowHeight);
          return e < 1 ? (e < 0 ? 0 : e) : t < 1 ? (t < 0 ? 0 : t) : 1;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "scrollInsideY", {
        get: function () {
          var t = o.default.RESIZE.windowHeight - this._rect.height,
            t = this._rect.y / t;
          return 1 < t ? 1 : t < 0 ? 0 : t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "scrollOutsideY", {
        get: function () {
          var t = o.default.RESIZE.windowHeight + this._rect.height,
            t = (this._rect.y + this._rect.height) / t;
          return 1 < t ? 1 : t < 0 ? 0 : t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "amountInside", {
        get: function () {
          return o.default.RESIZE.windowHeight - this._rect.height;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "scrollOffset", {
        get: function () {
          var t =
            (o.default.RESIZE.windowHeight - this._rect.height) *
            this.scrollInsideY;
          return t < 0 ? t : 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (s.prototype.isAllInView = function () {
        return 1 <= this.visual;
      }),
      (s.prototype.isAllInViewY = function () {
        return 1 <= this.visualY;
      }),
      (s.prototype.isAllInViewX = function () {
        return 1 <= this.visualX;
      }),
      (s.prototype.isInView = function () {
        return 0 < this.visual;
      }),
      Object.defineProperty(s.prototype, "visual", {
        get: function () {
          return this.visualY * this.visualX;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.default = s);
  },
  function (t, e) {
    t.exports = function (t) {
      var e;
      return (
        t.webpackPolyfill ||
          ((e = Object.create(t)).children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Draggable", function () {
        return i;
      }),
      n.d(e, "default", function () {
        return i;
      });
    var _e = n(0),
      ge = n(9),
      i =
        (_e._gsScope._gsDefine(
          "utils.Draggable",
          ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"],
          function () {
            function a(t) {
              return xt.createElementNS
                ? xt.createElementNS("http://www.w3.org/1999/xhtml", t)
                : xt.createElement(t);
            }
            function qt(t) {
              for (var e = Et.length; -1 < --e; )
                Et[e] === t && Et.splice(e, 1);
              _e.default.to(S, 0, {
                overwrite: "all",
                delay: 15,
                onComplete: S,
                data: "_draggable",
              });
            }
            function g() {
              return null != window.pageYOffset
                ? window.pageYOffset
                : null != xt.scrollTop
                ? xt.scrollTop
                : Tt.scrollTop || xt.body.scrollTop || 0;
            }
            function m() {
              return null != window.pageXOffset
                ? window.pageXOffset
                : null != xt.scrollLeft
                ? xt.scrollLeft
                : Tt.scrollLeft || xt.body.scrollLeft || 0;
            }
            function Vt(t, e) {
              return (
                (t = t || window.event),
                (l.pageX = t.clientX + xt.body.scrollLeft + Tt.scrollLeft),
                (l.pageY = t.clientY + xt.body.scrollTop + Tt.scrollTop),
                e && (t.returnValue = !1),
                l
              );
            }
            function f(t, e, n, i, o) {
              var r, s, a, l, u;
              return "px" !== i && i
                ? "auto" !== i && n
                  ? ((r = I.test(e)),
                    (s = t),
                    (a = c.style),
                    (l = n < 0) && (n = -n),
                    "%" === i && -1 !== e.indexOf("border")
                      ? (u = (n / 100) * (r ? t.clientWidth : t.clientHeight))
                      : ((a.cssText =
                          "border:0 solid red;position:" +
                          Nt(t, "position", !0) +
                          ";line-height:0;"),
                        "%" !== i && s.appendChild
                          ? (a[r ? "borderLeftWidth" : "borderTopWidth"] =
                              n + i)
                          : ((s = t.parentNode || xt.body),
                            (a[r ? "width" : "height"] = n + i)),
                        s.appendChild(c),
                        (u = parseFloat(c[r ? "offsetWidth" : "offsetHeight"])),
                        s.removeChild(c),
                        0 !== u || o || (u = f(t, e, n, i, !0))),
                    l ? -u : u)
                  : 0
                : n;
            }
            function vt(t, e, n) {
              var i = t.vars,
                o = i[n],
                r = t._listeners[e];
              "function" == typeof o &&
                o.apply(
                  i[n + "Scope"] || i.callbackScope || t,
                  i[n + "Params"] || [t.pointerEvent]
                ),
                r && t.dispatchEvent(e);
            }
            function Ut(t, e) {
              var n = Dt(t);
              return n
                ? V(n, e)
                : void 0 !== t.left
                ? ((n = Bt(e)),
                  {
                    left: t.left - n.x,
                    top: t.top - n.y,
                    width: t.width,
                    height: t.height,
                  })
                : {
                    left: (e = t.min || t.minX || t.minRotation || 0),
                    top: (n = t.min || t.minY || 0),
                    width: (t.max || t.maxX || t.maxRotation || 0) - e,
                    height: (t.max || t.maxY || 0) - n,
                  };
            }
            function T() {
              var t, e, n, i, o, r, s;
              xt.createElementNS
                ? ((t = a("div")),
                  (e = xt.createElementNS("http://www.w3.org/2000/svg", "svg")),
                  (r = a("div")),
                  (n = t.style),
                  (i = xt.body || Tt),
                  (o = "flex" === Nt(i, "display", !0)),
                  xt.body &&
                    x &&
                    ((n.position = "absolute"),
                    i.appendChild(r),
                    r.appendChild(t),
                    (s = t.offsetParent),
                    (r.style[x] = "rotate(1deg)"),
                    (C = t.offsetParent === s),
                    (r.style.position = "absolute"),
                    (n.height = "10px"),
                    (s = t.offsetTop),
                    (r.style.border = "5px solid red"),
                    (P = s !== t.offsetTop),
                    i.removeChild(r)),
                  (n = e.style),
                  e.setAttributeNS(null, "width", "400px"),
                  e.setAttributeNS(null, "height", "400px"),
                  e.setAttributeNS(null, "viewBox", "0 0 400 400"),
                  (n.display = "block"),
                  (n.boxSizing = "border-box"),
                  (n.border = "0px solid red"),
                  (n.transform = "none"),
                  (t.style.cssText =
                    "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;"),
                  i.appendChild(t),
                  t.appendChild(e),
                  (r = (s = e
                    .createSVGPoint()
                    .matrixTransform(e.getScreenCTM())).y),
                  (t.scrollTop = 100),
                  (s.x = s.y = 0),
                  (s = s.matrixTransform(e.getScreenCTM())),
                  (d = r - s.y < 100.1 ? 0 : r - s.y - 150),
                  t.removeChild(e),
                  i.removeChild(t),
                  i.appendChild(e),
                  o && (i.style.display = "block"),
                  (r = e.getScreenCTM().e),
                  (n.border = "50px solid red"),
                  (s = e.getScreenCTM()),
                  (p =
                    0 === r && 0 === s.e && 0 === s.f && 1 === s.a
                      ? ((b = 1), !0)
                      : ((b = r !== s.e ? 1 : 0), 1 !== s.a)),
                  o && (i.style.display = "flex"),
                  i.removeChild(e))
                : ((b = 0), (p = !1));
            }
            function y(t) {
              if (!t.getBoundingClientRect || !t.parentNode || !x)
                return {
                  offsetTop: 0,
                  offsetLeft: 0,
                  scaleX: 1,
                  scaleY: 1,
                  offsetParent: Tt,
                };
              if (
                !1 !== Ht.cacheSVGData &&
                t._dCache &&
                t._dCache.lastUpdate === _e.default.ticker.frame
              )
                return t._dCache;
              var e,
                n,
                i,
                o,
                r,
                s,
                a,
                l,
                u,
                c,
                f = t,
                h = O(t);
              if (
                ((h.lastUpdate = _e.default.ticker.frame),
                t.getBBox && !h.isSVGRoot)
              ) {
                for (
                  f = t.parentNode, e = t.getBBox();
                  f && "svg" !== (f.nodeName + "").toLowerCase();

                )
                  f = f.parentNode;
                (c = y(f)),
                  (h.offsetTop = e.y * c.scaleY),
                  (h.offsetLeft = e.x * c.scaleX),
                  (h.scaleX = c.scaleX),
                  (h.scaleY = c.scaleY),
                  (h.offsetParent = f || Tt);
              } else {
                for (
                  (i = h.offsetParent) === xt.body && (i = Tt),
                    X.length = H.length = 0;
                  f && f.parentNode;

                )
                  "matrix(1, 0, 0, 1, 0, 0)" !== (o = Nt(f, x, !0)) &&
                    "none" !== o &&
                    "translate3d(0px, 0px, 0px)" !== o &&
                    (X.push(f), H.push(f.style[x]), (f.style[x] = "none")),
                    (f = f.parentNode);
                for (
                  n = i.getBoundingClientRect(),
                    o = t.getScreenCTM(),
                    s = t.createSVGPoint().matrixTransform(o),
                    h.scaleX = Math.sqrt(o.a * o.a + o.b * o.b),
                    h.scaleY = Math.sqrt(o.d * o.d + o.c * o.c),
                    void 0 === b && T(),
                    h.borderBox &&
                      !p &&
                      t.getAttribute("width") &&
                      ((c = w(t) || {}),
                      (a =
                        parseFloat(c.borderLeftWidth) +
                          parseFloat(c.borderRightWidth) || 0),
                      (l =
                        parseFloat(c.borderTopWidth) +
                          parseFloat(c.borderBottomWidth) || 0),
                      (u = parseFloat(c.width) || 0),
                      (c = parseFloat(c.height) || 0),
                      (h.scaleX *= (u - a) / u),
                      (h.scaleY *= (c - l) / c)),
                    d
                      ? ((e = t.getBoundingClientRect()),
                        (h.offsetLeft = e.left - n.left),
                        (h.offsetTop = e.top - n.top))
                      : ((h.offsetLeft = s.x - n.left),
                        (h.offsetTop = s.y - n.top)),
                    h.offsetParent = i,
                    r = X.length;
                  -1 < --r;

                )
                  X[r].style[x] = H[r];
              }
              return h;
            }
            function O(t) {
              if (
                !1 !== Ht.cacheSVGData &&
                t._dCache &&
                t._dCache.lastUpdate === _e.default.ticker.frame
              )
                return t._dCache;
              var e,
                n = (t._dCache = t._dCache || {}),
                i = w(t),
                o = t.getBBox && ce(t),
                r = "svg" === (t.nodeName + "").toLowerCase();
              if (
                ((n.isSVG = o),
                (n.isSVGRoot = r),
                (n.borderBox = "border-box" === i.boxSizing),
                (n.computedStyle = i),
                r)
              )
                (e = t.parentNode || Tt).insertBefore(c, t),
                  (n.offsetParent = c.offsetParent || Tt),
                  e.removeChild(c);
              else if (o) {
                for (
                  e = t.parentNode;
                  e && "svg" !== (e.nodeName + "").toLowerCase();

                )
                  e = e.parentNode;
                n.offsetParent = e;
              } else n.offsetParent = t.offsetParent;
              return n;
            }
            function v(t, e, n) {
              var i = t.x * e[0] + t.y * e[2] + e[4],
                e = t.x * e[1] + t.y * e[3] + e[5];
              return (
                (t.x = i * n[0] + e * n[2] + n[4]),
                (t.y = i * n[1] + e * n[3] + n[5]),
                t
              );
            }
            function s(t) {
              return !!(
                t &&
                t.length &&
                t[0] &&
                ((t[0].nodeType && t[0].style && !t.nodeType) ||
                  (t[0].length && t[0][0]))
              );
            }
            function Wt(t) {
              (Zt = t.touches && At < t.touches.length),
                Ft(t.target, "touchend", U);
            }
            function Yt(o, r, t, e, s, n) {
              var i,
                a,
                l,
                u = {};
              if (r)
                if (1 !== s && r instanceof Array) {
                  if (
                    ((u.end = i = []), (l = r.length), "object" == typeof r[0])
                  )
                    for (a = 0; a < l; a++) i[a] = re(r[a], s);
                  else for (a = 0; a < l; a++) i[a] = r[a] * s;
                  (t += 1.1), (e -= 1.1);
                } else
                  u.end =
                    "function" == typeof r
                      ? function (t) {
                          var e,
                            n,
                            i = r.call(o, t);
                          if (1 !== s)
                            if ("object" == typeof i) {
                              for (n in ((e = {}), i)) e[n] = i[n] * s;
                              i = e;
                            } else i *= s;
                          return i;
                        }
                      : r;
              return (
                (!t && 0 !== t) || (u.max = t),
                (!e && 0 !== e) || (u.min = e),
                n && (u.velocity = 0),
                u
              );
            }
            function bt(t, e) {
              for (var n, i = t.length; -1 < --i; )
                ((n = t[i]).ondragstart = n.onselectstart = e ? null : u),
                  jt(n, "userSelect", e ? "text" : "none");
            }
            function Gt(o, r) {
              (o = Dt(o)), (r = r || {});
              var s,
                a,
                l,
                t,
                u,
                c,
                f = xt.createElement("div"),
                h = f.style,
                e = o.firstChild,
                p = 0,
                d = 0,
                _ = o.scrollTop,
                g = o.scrollLeft,
                m = o.scrollWidth,
                y = o.scrollHeight,
                v = 0,
                b = 0,
                w = 0;
              R && !1 !== r.force3D
                ? ((u = "translate3d("), (c = "px,0px)"))
                : x && ((u = "translate("), (c = "px)")),
                (this.scrollTop = function (t, e) {
                  if (!arguments.length) return -this.top();
                  this.top(-t, e);
                }),
                (this.scrollLeft = function (t, e) {
                  if (!arguments.length) return -this.left();
                  this.left(-t, e);
                }),
                (this.left = function (t, e) {
                  if (!arguments.length) return -(o.scrollLeft + d);
                  var n = o.scrollLeft - g,
                    i = d;
                  (2 < n || n < -2) && !e
                    ? ((g = o.scrollLeft),
                      _e.default.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1,
                      }),
                      this.left(-g),
                      r.onKill && r.onKill())
                    : ((t = -t) < 0
                        ? ((d = (t - 0.5) | 0), (t = 0))
                        : b < t
                        ? ((d = (t - b) | 0), (t = b))
                        : (d = 0),
                      (d || i) &&
                        (u
                          ? this._suspendTransforms ||
                            (h[x] = u + -d + "px," + -p + c)
                          : (h.left = -d + "px"),
                        0 <= d + v && (h.paddingRight = d + v + "px")),
                      (o.scrollLeft = 0 | t),
                      (g = o.scrollLeft));
                }),
                (this.top = function (t, e) {
                  if (!arguments.length) return -(o.scrollTop + p);
                  var n = o.scrollTop - _,
                    i = p;
                  (2 < n || n < -2) && !e
                    ? ((_ = o.scrollTop),
                      _e.default.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1,
                      }),
                      this.top(-_),
                      r.onKill && r.onKill())
                    : ((t = -t) < 0
                        ? ((p = (t - 0.5) | 0), (t = 0))
                        : w < t
                        ? ((p = (t - w) | 0), (t = w))
                        : (p = 0),
                      (p || i) &&
                        (u
                          ? this._suspendTransforms ||
                            (h[x] = u + -d + "px," + -p + c)
                          : (h.top = -p + "px")),
                      (o.scrollTop = 0 | t),
                      (_ = o.scrollTop));
                }),
                (this.maxScrollTop = function () {
                  return w;
                }),
                (this.maxScrollLeft = function () {
                  return b;
                }),
                (this.disable = function () {
                  for (e = f.firstChild; e; )
                    (t = e.nextSibling), o.appendChild(e), (e = t);
                  o === f.parentNode && o.removeChild(f);
                }),
                (this.enable = function () {
                  if ((e = o.firstChild) !== f) {
                    for (; e; ) (t = e.nextSibling), f.appendChild(e), (e = t);
                    o.appendChild(f), this.calibrate();
                  }
                }),
                (this.calibrate = function (t) {
                  var e,
                    n,
                    i = o.clientWidth === s;
                  (_ = o.scrollTop),
                    (g = o.scrollLeft),
                    (i &&
                      o.clientHeight === a &&
                      f.offsetHeight === l &&
                      m === o.scrollWidth &&
                      y === o.scrollHeight &&
                      !t) ||
                      ((p || d) &&
                        ((e = this.left()),
                        (n = this.top()),
                        this.left(-o.scrollLeft),
                        this.top(-o.scrollTop)),
                      (i && !t) ||
                        ((h.display = "block"),
                        (h.width = "auto"),
                        (h.paddingRight = "0px"),
                        (v = Math.max(0, o.scrollWidth - o.clientWidth)) &&
                          (v +=
                            Nt(o, "paddingLeft") +
                            (W ? Nt(o, "paddingRight") : 0))),
                      (h.display = "inline-block"),
                      (h.position = "relative"),
                      (h.overflow = "visible"),
                      (h.verticalAlign = "top"),
                      (h.width = "100%"),
                      (h.paddingRight = v + "px"),
                      W && (h.paddingBottom = Nt(o, "paddingBottom", !0)),
                      Ct && (h.zoom = "1"),
                      (s = o.clientWidth),
                      (a = o.clientHeight),
                      (m = o.scrollWidth),
                      (y = o.scrollHeight),
                      (b = o.scrollWidth - s),
                      (w = o.scrollHeight - a),
                      (l = f.offsetHeight),
                      (h.display = "block"),
                      (e || n) && (this.left(e), this.top(n)));
                }),
                (this.content = f),
                (this.element = o),
                (this._suspendTransforms = !1),
                this.enable();
            }
            var Zt,
              r,
              wt,
              b,
              p,
              d,
              P,
              C,
              t,
              e,
              o,
              Kt = { css: {}, data: "_draggable" },
              $t = { css: {}, data: "_draggable" },
              Jt = { css: {}, data: "_draggable" },
              Qt = { css: {} },
              te = _e._gsScope._gsDefine.globals,
              l = {},
              u = function () {
                return !1;
              },
              h = { style: {}, appendChild: u, removeChild: u },
              xt = _e._gsScope.document || {
                createElement: function () {
                  return h;
                },
              },
              Tt = xt.documentElement || {},
              c = a("div"),
              ee = [],
              ne = 180 / Math.PI,
              Ot = 999999999999999,
              Pt =
                Date.now ||
                function () {
                  return new Date().getTime();
                },
              Ct = !(xt.addEventListener || !xt.all),
              St = xt.createElement("div"),
              Et = [],
              kt = {},
              ie = 0,
              _ = /^(?:a|input|textarea|button|select)$/i,
              At = 0,
              It =
                _e._gsScope.navigator &&
                -1 !==
                  _e._gsScope.navigator.userAgent
                    .toLowerCase()
                    .indexOf("android"),
              oe = 0,
              Mt = {},
              Lt = {},
              re = function (t, e) {
                var n,
                  i = {};
                if (e) for (n in t) i[n] = t[n] * e;
                else for (n in t) i[n] = t[n];
                return i;
              },
              se = function () {
                for (var t = Et.length; -1 < --t; ) Et[t]();
              },
              S = function () {
                Et.length || _e.default.ticker.removeEventListener("tick", se);
              },
              ae = function (t, e) {
                Ft(t, "scroll", e), Rt(t.parentNode) || ae(t.parentNode, e);
              },
              le = function (t, e) {
                zt(t, "scroll", e), Rt(t.parentNode) || le(t.parentNode, e);
              },
              Rt = function (t) {
                return !(
                  t &&
                  t !== Tt &&
                  t !== xt &&
                  t !== xt.body &&
                  t !== window &&
                  t.nodeType &&
                  t.parentNode
                );
              },
              E = function (t, e) {
                var e = "x" === e ? "Width" : "Height",
                  n = "scroll" + e,
                  i = "client" + e,
                  o = xt.body;
                return Math.max(
                  0,
                  Rt(t)
                    ? Math.max(Tt[n], o[n]) -
                        (window["inner" + e] || Tt[i] || o[i])
                    : t[n] - t[i]
                );
              },
              ue = function (t) {
                var e = Rt(t),
                  n = E(t, "x"),
                  i = E(t, "y");
                e ? (t = Lt) : ue(t.parentNode),
                  (t._gsMaxScrollX = n),
                  (t._gsMaxScrollY = i),
                  (t._gsScrollX = t.scrollLeft || 0),
                  (t._gsScrollY = t.scrollTop || 0);
              },
              Dt = function (t) {
                return (
                  t &&
                  ((t =
                    (t = "string" == typeof t ? _e.default.selector(t) : t)
                      .length &&
                    t !== window &&
                    t[0] &&
                    t[0].style &&
                    !t.nodeType
                      ? t[0]
                      : t) === window ||
                  (t.nodeType && t.style)
                    ? t
                    : null)
                );
              },
              k = function (t, e) {
                var n,
                  i,
                  o,
                  r = t.style;
                if (void 0 === r[e]) {
                  for (
                    o = ["O", "Moz", "ms", "Ms", "Webkit"],
                      i = 5,
                      n = e.charAt(0).toUpperCase() + e.substr(1);
                    -1 < --i && void 0 === r[o[i] + n];

                  );
                  if (i < 0) return "";
                  e = (3 === i ? "ms" : o[i]) + n;
                }
                return e;
              },
              jt = function (t, e, n) {
                var i = t.style;
                i &&
                  (void 0 === i[e] && (e = k(t, e)),
                  null == n
                    ? i.removeProperty
                      ? i.removeProperty(
                          e.replace(/([A-Z])/g, "-$1").toLowerCase()
                        )
                      : i.removeAttribute(e)
                    : void 0 !== i[e] && (i[e] = n));
              },
              A =
                "undefined" != typeof window
                  ? window
                  : xt.defaultView || { getComputedStyle: function () {} },
              w = function (t, e) {
                return A.getComputedStyle(
                  (!(t instanceof Element) &&
                    (t.host || (t.parentNode || {}).host)) ||
                    t,
                  e
                );
              },
              I = /(?:Left|Right|Width)/i,
              M = /(?:\d|\-|\+|=|#|\.)*/g,
              L = function (t, e) {
                var n, i;
                return "absolute" !== Nt(t, "position", !0)
                  ? 0
                  : ((i = Nt(
                      t,
                      "margin" + (n = "left" === e ? "Left" : "Top"),
                      !0
                    )),
                    t["offset" + n] -
                      (f(t, e, parseFloat(i), (i + "").replace(M, "")) || 0));
              },
              Nt = function (t, e, n) {
                var i,
                  o = (t._gsTransform || {})[e];
                return o ||
                  0 === o ||
                  (t.style && t.style[e]
                    ? (o = t.style[e])
                    : (i = w(t))
                    ? (o =
                        (o = i.getPropertyValue(
                          e.replace(/([A-Z])/g, "-$1").toLowerCase()
                        )) || i.length
                          ? o
                          : i[e])
                    : t.currentStyle && (o = t.currentStyle[e]),
                  "auto" !== o ||
                    ("top" !== e && "left" !== e) ||
                    (o = L(t, e)),
                  n)
                  ? o
                  : parseFloat(o) || 0;
              },
              R = "" !== k(c, "perspective"),
              D = k(c, "transformOrigin")
                .replace(/^ms/g, "Ms")
                .replace(/([A-Z])/g, "-$1")
                .toLowerCase(),
              x = k(c, "transform"),
              j = x
                .replace(/^ms/g, "Ms")
                .replace(/([A-Z])/g, "-$1")
                .toLowerCase(),
              N = {},
              B = {},
              F = _e._gsScope.SVGElement,
              ce = function (t) {
                return !!(
                  F &&
                  "function" == typeof t.getBBox &&
                  t.getCTM &&
                  (!t.parentNode ||
                    (t.parentNode.getBBox && t.parentNode.getCTM))
                );
              },
              z =
                _e._gsScope.navigator &&
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                  _e._gsScope.navigator.userAgent
                ) ||
                  /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                    _e._gsScope.navigator.userAgent
                  )) &&
                parseFloat(RegExp.$1) < 11,
              H = [],
              X = [],
              Bt = function (t, e) {
                var n, i, o;
                return (
                  (e = e || {}),
                  t && t !== Tt && t.parentNode && t !== window
                    ? ((n = w(t)),
                      (o = (n =
                        D && n ? n.getPropertyValue(D) : "50% 50%").split(" ")),
                      (i =
                        -1 !== n.indexOf("left")
                          ? "0%"
                          : -1 !== n.indexOf("right")
                          ? "100%"
                          : o[0]),
                      ("center" !==
                        (o =
                          -1 !== n.indexOf("top")
                            ? "0%"
                            : -1 !== n.indexOf("bottom")
                            ? "100%"
                            : o[1]) &&
                        null != o) ||
                        (o = "50%"),
                      ("center" !== i && !isNaN(parseFloat(i))) || (i = "50%"),
                      t.getBBox && ce(t)
                        ? (t._gsTransform ||
                            (_e.default.set(t, { x: "+=0", overwrite: !1 }),
                            t._gsTransform.xOrigin),
                          (n = t.getBBox()),
                          (e.x = t._gsTransform.xOrigin - n.x),
                          (e.y = t._gsTransform.yOrigin - n.y))
                        : (t.getBBox &&
                            -1 !== (i + o).indexOf("%") &&
                            (t = {
                              offsetWidth: (t = t.getBBox()).width,
                              offsetHeight: t.height,
                            }),
                          (e.x =
                            -1 !== i.indexOf("%")
                              ? (t.offsetWidth * parseFloat(i)) / 100
                              : parseFloat(i)),
                          (e.y =
                            -1 !== o.indexOf("%")
                              ? (t.offsetHeight * parseFloat(o)) / 100
                              : parseFloat(o))),
                      e)
                    : { x: 0, y: 0 }
                );
              },
              q = function (t, e, n, i, o) {
                if (t === window || !t || !t.style || !t.parentNode)
                  return [1, 0, 0, 1, 0, 0];
                var r,
                  s,
                  a,
                  l,
                  u,
                  c = t._dCache || O(t),
                  f = t.parentNode,
                  h = f._dCache || O(f),
                  p = c.computedStyle,
                  d = (c.isSVG ? h : f).offsetParent,
                  _ =
                    c.isSVG && -1 !== (t.style[x] + "").indexOf("matrix")
                      ? t.style[x]
                      : p
                      ? p.getPropertyValue(j)
                      : t.currentStyle
                      ? t.currentStyle[x]
                      : "1,0,0,1,0,0";
                if (
                  (6 <
                    (_ = (
                      (_ =
                        t.getBBox &&
                        -1 !==
                          (t.getAttribute("transform") + "").indexOf("matrix")
                          ? t.getAttribute("transform")
                          : _) + ""
                    ).match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0])
                      .length && (_ = [_[0], _[1], _[4], _[5], _[12], _[13]]),
                  i
                    ? (_[4] = _[5] = 0)
                    : c.isSVG &&
                      (i = t._gsTransform) &&
                      (i.xOrigin || i.yOrigin) &&
                      ((_[0] = parseFloat(_[0])),
                      (_[1] = parseFloat(_[1])),
                      (_[2] = parseFloat(_[2])),
                      (_[3] = parseFloat(_[3])),
                      (_[4] =
                        parseFloat(_[4]) -
                        (i.xOrigin - (i.xOrigin * _[0] + i.yOrigin * _[2]))),
                      (_[5] =
                        parseFloat(_[5]) -
                        (i.yOrigin - (i.xOrigin * _[1] + i.yOrigin * _[3])))),
                  e)
                )
                  if (
                    (void 0 === b && T(),
                    (i = c.isSVG || c.isSVGRoot ? y(t) : t),
                    c.isSVG
                      ? ((l = t.getBBox()),
                        (u = h.isSVGRoot ? { x: 0, y: 0 } : f.getBBox()),
                        (i = {
                          offsetLeft: l.x - u.x,
                          offsetTop: l.y - u.y,
                          offsetParent: c.offsetParent,
                        }))
                      : c.isSVGRoot
                      ? ((l = parseInt(p.borderTopWidth, 10) || 0),
                        (u = parseInt(p.borderLeftWidth, 10) || 0),
                        (p = (_[0] - b) * u + _[2] * l),
                        (u = _[1] * u + (_[3] - b) * l),
                        (l = e.x),
                        (r = e.y),
                        (s = l - (l * _[0] + r * _[2])),
                        (a = r - (l * _[1] + r * _[3])),
                        (_[4] = parseFloat(_[4]) + s),
                        (_[5] = parseFloat(_[5]) + a),
                        (e.x -= s),
                        (e.y -= a),
                        (l = i.scaleX),
                        (r = i.scaleY),
                        o || ((e.x *= l), (e.y *= r)),
                        (_[0] *= l),
                        (_[1] *= r),
                        (_[2] *= l),
                        (_[3] *= r),
                        z || ((e.x += p), (e.y += u)),
                        d === xt.body && i.offsetParent === Tt && (d = Tt))
                      : !P &&
                        t.offsetParent &&
                        ((e.x +=
                          parseInt(Nt(t.offsetParent, "borderLeftWidth"), 10) ||
                          0),
                        (e.y +=
                          parseInt(Nt(t.offsetParent, "borderTopWidth"), 10) ||
                          0)),
                    (s = f === Tt || f === xt.body),
                    (_[4] =
                      Number(_[4]) +
                      e.x +
                      (i.offsetLeft || 0) -
                      n.x -
                      ((!s && f.scrollLeft) || 0)),
                    (_[5] =
                      Number(_[5]) +
                      e.y +
                      (i.offsetTop || 0) -
                      n.y -
                      ((!s && f.scrollTop) || 0)),
                    f && "fixed" === Nt(t, "position", !0))
                  )
                    for (_[4] += m(), _[5] += g(), f = f.offsetParent; f; )
                      (_[4] -= f.offsetLeft),
                        (_[5] -= f.offsetTop),
                        (f = f.offsetParent);
                  else
                    !f ||
                      f === Tt ||
                      d !== i.offsetParent ||
                      h.isSVG ||
                      (C && "100100" !== q(f).join("")) ||
                      ((i = h.isSVGRoot ? y(f) : f),
                      (_[4] -= i.offsetLeft || 0),
                      (_[5] -= i.offsetTop || 0),
                      P ||
                        !h.offsetParent ||
                        c.isSVG ||
                        c.isSVGRoot ||
                        ((_[4] -=
                          parseInt(Nt(h.offsetParent, "borderLeftWidth"), 10) ||
                          0),
                        (_[5] -=
                          parseInt(Nt(h.offsetParent, "borderTopWidth"), 10) ||
                          0)));
                return _;
              },
              fe = function (t, e) {
                if (!t || t === window || !t.parentNode)
                  return [1, 0, 0, 1, 0, 0];
                for (
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    u = Bt(t, N),
                    c = Bt(t.parentNode, B),
                    f = q(t, u, c, !1, !e);
                  (t = t.parentNode) && t.parentNode && t !== Tt;

                )
                  (u = c),
                    (c = Bt(t.parentNode, u === N ? B : N)),
                    (l = q(t, u, c)),
                    (n = f[0]),
                    (i = f[1]),
                    (o = f[2]),
                    (r = f[3]),
                    (s = f[4]),
                    (a = f[5]),
                    (f[0] = n * l[0] + i * l[2]),
                    (f[1] = n * l[1] + i * l[3]),
                    (f[2] = o * l[0] + r * l[2]),
                    (f[3] = o * l[1] + r * l[3]),
                    (f[4] = s * l[0] + a * l[2] + l[4]),
                    (f[5] = s * l[1] + a * l[3] + l[5]);
                return (
                  e &&
                    ((n = f[0]),
                    (i = f[1]),
                    (o = f[2]),
                    (r = f[3]),
                    (s = f[4]),
                    (a = f[5]),
                    (f[0] = r / (e = n * r - i * o)),
                    (f[1] = -i / e),
                    (f[2] = -o / e),
                    (f[3] = n / e),
                    (f[4] = (o * a - r * s) / e),
                    (f[5] = -(n * a - i * s) / e)),
                  f
                );
              },
              V = function (t, e, n) {
                if (!(t = Dt(t))) return null;
                e = Dt(e);
                var i,
                  o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f,
                  h,
                  p,
                  d,
                  _ = t.getBBox && ce(t);
                if (t === window)
                  (r = g()),
                    (o =
                      (i = m()) +
                      (Tt.clientWidth ||
                        t.innerWidth ||
                        xt.body.clientWidth ||
                        0)),
                    (s =
                      r +
                      ((t.innerHeight || 0) - 20 < Tt.clientHeight
                        ? Tt.clientHeight
                        : t.innerHeight || xt.body.clientHeight || 0));
                else {
                  if (void 0 === e || e === window)
                    return t.getBoundingClientRect();
                  (i = -(l = Bt(t)).x),
                    (r = -l.y),
                    (_ = _
                      ? ((a = (l = t.getBBox()).width), l.height)
                      : "svg" !== (t.nodeName + "").toLowerCase() &&
                        t.offsetWidth
                      ? ((a = t.offsetWidth), t.offsetHeight)
                      : ((p = w(t)),
                        (a = parseFloat(p.width)),
                        parseFloat(p.height))),
                    (o = i + a),
                    (s = r + _),
                    "svg" !== t.nodeName.toLowerCase() ||
                      Ct ||
                      ((d = (l = y(t)).computedStyle || {}),
                      (h = (t.getAttribute("viewBox") || "0 0").split(" ")),
                      (f = parseFloat(h[0])),
                      (h = parseFloat(h[1])),
                      (u = parseFloat(d.borderLeftWidth) || 0),
                      (c = parseFloat(d.borderTopWidth) || 0),
                      (i /= l.scaleX),
                      (r /= l.scaleY),
                      (o = i + a - (a - (a - u) / l.scaleX - f)),
                      (s = r + _ - (_ - (_ - c) / l.scaleY - h)),
                      (i -= u / l.scaleX - f),
                      (r -= c / l.scaleY - h),
                      p &&
                        ((o += (parseFloat(d.borderRightWidth) + u) / l.scaleX),
                        (s +=
                          (c + parseFloat(d.borderBottomWidth)) / l.scaleY)));
                }
                return t === e
                  ? { left: i, top: r, width: o - i, height: s - r }
                  : ((a = fe(t)),
                    (_ = fe(e, !0)),
                    (f = v({ x: i, y: r }, a, _)),
                    (h = v({ x: o, y: r }, a, _)),
                    (p = v({ x: o, y: s }, a, _)),
                    (u = v({ x: i, y: s }, a, _)),
                    (i = Math.min(f.x, h.x, p.x, u.x)),
                    (r = Math.min(f.y, h.y, p.y, u.y)),
                    (Mt.x = Mt.y = 0),
                    n && Bt(e, Mt),
                    {
                      left: i + Mt.x,
                      top: r + Mt.y,
                      width: Math.max(f.x, h.x, p.x, u.x) - i,
                      height: Math.max(f.y, h.y, p.y, u.y) - r,
                    });
              },
              he =
                "undefined" != typeof window &&
                "ontouchstart" in Tt &&
                "orientation" in window,
              pe = (function (t) {
                for (
                  var e = t.split(","),
                    n = (
                      void 0 !== c.onpointerdown
                        ? "pointerdown,pointermove,pointerup,pointercancel"
                        : void 0 !== c.onmspointerdown
                        ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                        : t
                    ).split(","),
                    i = {},
                    o = 4;
                  -1 < --o;

                )
                  (i[e[o]] = n[o]), (i[n[o]] = e[o]);
                try {
                  Tt.addEventListener(
                    "test",
                    null,
                    Object.defineProperty({}, "passive", {
                      get: function () {
                        r = 1;
                      },
                    })
                  );
                } catch (t) {}
                return i;
              })("touchstart,touchmove,touchend,touchcancel"),
              Ft = function (t, e, n, i) {
                var o;
                t.addEventListener
                  ? ((o = pe[e]),
                    (i = i || (r ? { passive: !1 } : null)),
                    t.addEventListener(o || e, n, i),
                    o && e !== o && t.addEventListener(e, n, i))
                  : t.attachEvent && t.attachEvent("on" + e, n);
              },
              zt = function (t, e, n) {
                var i;
                t.removeEventListener
                  ? ((i = pe[e]),
                    t.removeEventListener(i || e, n),
                    i && e !== i && t.removeEventListener(e, n))
                  : t.detachEvent && t.detachEvent("on" + e, n);
              },
              U = function (t) {
                (Zt = t.touches && At < t.touches.length),
                  zt(t.target, "touchend", U);
              },
              de = function (t) {
                var e;
                return (
                  !(!t || !t.getAttribute || "BODY" === t.nodeName) &&
                  (!(
                    "true" !== (e = t.getAttribute("data-clickable")) &&
                    ("false" === e ||
                      (!t.onclick &&
                        !_.test(t.nodeName + "") &&
                        "true" !== t.getAttribute("contentEditable")))
                  ) ||
                    de(t.parentNode))
                );
              },
              W =
                ((t = xt.createElement("div")),
                (n = xt.createElement("div")),
                (e = n.style),
                (o = xt.body || c),
                (e.display = "inline-block"),
                (e.position = "relative"),
                (t.style.cssText = n.innerHTML =
                  "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden"),
                t.appendChild(n),
                o.appendChild(t),
                (e = n.offsetHeight + 18 > t.scrollHeight),
                o.removeChild(t),
                e),
              Ht = function (p, u) {
                _e.EventDispatcher.call(this, p),
                  (p = Dt(p)),
                  (wt = wt || te.com.greensock.plugins.ThrowPropsPlugin),
                  (this.vars = u = re(u || {})),
                  (this.target = p),
                  (this.x = this.y = this.rotation = 0),
                  (this.dragResistance = parseFloat(u.dragResistance) || 0),
                  (this.edgeResistance = isNaN(u.edgeResistance)
                    ? 1
                    : parseFloat(u.edgeResistance) || 0),
                  (this.lockAxis = u.lockAxis),
                  (this.autoScroll = u.autoScroll || 0),
                  (this.lockedAxis = null),
                  (this.allowEventDefault = !!u.allowEventDefault);
                function o(t) {
                  if (!(R.isPressed && t.which < 2))
                    return t.preventDefault(), t.stopPropagation(), !1;
                  R.endDrag();
                }
                function r(t, e) {
                  var n;
                  if (
                    q &&
                    !R.isPressed &&
                    t &&
                    (("mousedown" !== t.type && "pointerdown" !== t.type) ||
                      e ||
                      !(Pt() - N < 30) ||
                      !pe[R.pointerEvent.type])
                  )
                    if (
                      ((Z = dt()),
                      (R.pointerEvent = t),
                      pe[t.type]
                        ? ((O =
                            -1 !== t.type.indexOf("touch")
                              ? t.currentTarget || t.target
                              : xt),
                          Ft(O, "touchend", H),
                          Ft(O, "touchmove", z),
                          Ft(O, "touchcancel", H),
                          Ft(xt, "touchstart", Wt))
                        : ((O = null), Ft(xt, "mousemove", z)),
                      (E = null),
                      Ft(xt, "mouseup", H),
                      t && t.target && Ft(t.target, "mouseup", H),
                      (G =
                        at.call(R, t.target) && !1 === u.dragClickables && !e))
                    )
                      Ft(t.target, "change", H),
                        vt(R, "pressInit", "onPressInit"),
                        vt(R, "press", "onPress"),
                        bt(D, !0);
                    else {
                      if (
                        ((S =
                          !(
                            !O ||
                            I === M ||
                            !1 === R.vars.allowNativeTouchScrolling ||
                            (R.vars.allowContextMenu &&
                              t &&
                              (t.ctrlKey || 2 < t.which))
                          ) && (I ? "y" : "x")),
                        Ct
                          ? (t = Vt(t, !0))
                          : S ||
                            R.allowEventDefault ||
                            (t.preventDefault(),
                            t.preventManipulation && t.preventManipulation()),
                        t.changedTouches
                          ? ((t = W = t.changedTouches[0]), (b = t.identifier))
                          : t.pointerId
                          ? (b = t.pointerId)
                          : (W = b = null),
                        At++,
                        !(function (t) {
                          Et.push(t),
                            1 === Et.length &&
                              _e.default.ticker.addEventListener(
                                "tick",
                                se,
                                this,
                                !1,
                                1
                              );
                        })(B),
                        (c = R.pointerY = t.pageY),
                        (l = R.pointerX = t.pageX),
                        vt(R, "pressInit", "onPressInit"),
                        (S || R.autoScroll) && ue(p.parentNode),
                        !p.parentNode ||
                          !R.autoScroll ||
                          d ||
                          A ||
                          !p.parentNode._gsMaxScrollX ||
                          St.parentNode ||
                          p.getBBox ||
                          ((St.style.width = p.parentNode.scrollWidth + "px"),
                          p.parentNode.appendChild(St)),
                        pt(),
                        R.tween && R.tween.kill(),
                        (R.isThrowing = !1),
                        _e.default.killTweensOf(d || p, !0, et),
                        d && _e.default.killTweensOf(p, !0, { scrollTo: 1 }),
                        (R.tween = R.lockedAxis = null),
                        (!u.zIndexBoost && (A || d || !1 === u.zIndexBoost)) ||
                          (p.style.zIndex = Ht.zIndex++),
                        (R.isPressed = !0),
                        (V = !(!u.onDrag && !R._listeners.drag)),
                        !A && (!1 !== u.cursor || u.activeCursor))
                      )
                        for (n = D.length; -1 < --n; )
                          jt(
                            D[n],
                            "cursor",
                            u.activeCursor || u.cursor || "move"
                          );
                      vt(R, "press", "onPress");
                    }
                }
                function s(t) {
                  var e, n;
                  t &&
                    R.isDragging &&
                    !d &&
                    ((e =
                      (t = t.target || t.srcElement || p.parentNode)
                        .scrollLeft - t._gsScrollX),
                    (n = t.scrollTop - t._gsScrollY),
                    (e || n) &&
                      (P
                        ? ((l -= e * P[0] + n * P[2]),
                          (c -= n * P[3] + e * P[1]))
                        : ((l -= e), (c -= n)),
                      (t._gsScrollX += e),
                      (t._gsScrollY += n),
                      yt(R.pointerX, R.pointerY)));
                }
                function X(t) {
                  var e = (n = Pt()) - N < 40,
                    n = n - nt < 40,
                    i = e && $ === N,
                    o = !!t.preventDefault,
                    r = R.pointerEvent && R.pointerEvent.defaultPrevented,
                    s = e && J === N,
                    a = t.isTrusted || (null == t.isTrusted && e && i);
                  o &&
                    (i || (n && !1 !== R.vars.suppressClickOnDrag)) &&
                    t.stopImmediatePropagation(),
                    !e ||
                    (R.pointerEvent && R.pointerEvent.defaultPrevented) ||
                    (i && a === s)
                      ? (R.isPressed || n || e) &&
                        (o
                          ? (a && t.detail && e && !r) ||
                            (t.preventDefault(),
                            t.preventManipulation && t.preventManipulation())
                          : (t.returnValue = !1))
                      : (a && i && (J = N), ($ = N));
                }
                function n(t) {
                  return P
                    ? {
                        x: t.x * P[0] + t.y * P[2] + P[4],
                        y: t.x * P[1] + t.y * P[3] + P[5],
                      }
                    : { x: t.x, y: t.y };
                }
                var q,
                  d,
                  l,
                  c,
                  f,
                  h,
                  _,
                  V,
                  g,
                  m,
                  y,
                  v,
                  i,
                  U,
                  W,
                  b,
                  Y,
                  w,
                  a,
                  x,
                  T,
                  G,
                  O,
                  P,
                  Z,
                  C,
                  S,
                  E,
                  K,
                  $,
                  J,
                  t = (u.type || (Ct ? "top,left" : "x,y")).toLowerCase(),
                  k = -1 !== t.indexOf("x") || -1 !== t.indexOf("y"),
                  A = -1 !== t.indexOf("rotation"),
                  Q = A ? "rotation" : k ? "x" : "left",
                  tt = k ? "y" : "top",
                  I =
                    -1 !== t.indexOf("x") ||
                    -1 !== t.indexOf("left") ||
                    "scroll" === t,
                  M =
                    -1 !== t.indexOf("y") ||
                    -1 !== t.indexOf("top") ||
                    "scroll" === t,
                  L = u.minimumMovement || 2,
                  R = this,
                  D = (function (t) {
                    if (
                      !(t =
                        "string" == typeof t ? _e.default.selector(t) : t) ||
                      t.nodeType
                    )
                      return [t];
                    for (
                      var e = [], n = t.length, i = 0;
                      i !== n;
                      e.push(t[i++])
                    );
                    return e;
                  })(u.trigger || u.handle || p),
                  et = {},
                  nt = 0,
                  j = !1,
                  it = u.autoScrollMarginTop || 40,
                  ot = u.autoScrollMarginRight || 40,
                  rt = u.autoScrollMarginBottom || 40,
                  st = u.autoScrollMarginLeft || 40,
                  at = u.clickableTest || de,
                  N = 0,
                  B = function (t) {
                    if (R.autoScroll && R.isDragging && (j || w)) {
                      var e,
                        n,
                        i,
                        o,
                        r,
                        s,
                        a,
                        l,
                        u = p,
                        c = 15 * R.autoScroll;
                      for (
                        j = !1,
                          Lt.scrollTop =
                            null != window.pageYOffset
                              ? window.pageYOffset
                              : (null != Tt.scrollTop ? Tt : xt.body).scrollTop,
                          Lt.scrollLeft =
                            null != window.pageXOffset
                              ? window.pageXOffset
                              : (null != Tt.scrollLeft ? Tt : xt.body)
                                  .scrollLeft,
                          o = R.pointerX - Lt.scrollLeft,
                          r = R.pointerY - Lt.scrollTop;
                        u && !n;

                      )
                        (e = (n = Rt(u.parentNode)) ? Lt : u.parentNode),
                          (i = n
                            ? {
                                bottom: Math.max(
                                  Tt.clientHeight,
                                  window.innerHeight || 0
                                ),
                                right: Math.max(
                                  Tt.clientWidth,
                                  window.innerWidth || 0
                                ),
                                left: 0,
                                top: 0,
                              }
                            : e.getBoundingClientRect()),
                          (s = a = 0),
                          M &&
                            ((l = e._gsMaxScrollY - e.scrollTop) < 0
                              ? (a = l)
                              : r > i.bottom - rt && l
                              ? ((j = !0),
                                (a = Math.min(
                                  l,
                                  (c * (1 - Math.max(0, i.bottom - r) / rt)) | 0
                                )))
                              : r < i.top + it &&
                                e.scrollTop &&
                                ((j = !0),
                                (a = -Math.min(
                                  e.scrollTop,
                                  (c * (1 - Math.max(0, r - i.top) / it)) | 0
                                ))),
                            a && (e.scrollTop += a)),
                          I &&
                            ((l = e._gsMaxScrollX - e.scrollLeft) < 0
                              ? (s = l)
                              : o > i.right - ot && l
                              ? ((j = !0),
                                (s = Math.min(
                                  l,
                                  (c * (1 - Math.max(0, i.right - o) / ot)) | 0
                                )))
                              : o < i.left + st &&
                                e.scrollLeft &&
                                ((j = !0),
                                (s = -Math.min(
                                  e.scrollLeft,
                                  (c * (1 - Math.max(0, o - i.left) / st)) | 0
                                ))),
                            s && (e.scrollLeft += s)),
                          n &&
                            (s || a) &&
                            (window.scrollTo(e.scrollLeft, e.scrollTop),
                            yt(R.pointerX + s, R.pointerY + a)),
                          (u = e);
                    }
                    var f, h;
                    w &&
                      ((f = R.x) < 1e-6 && -1e-6 < f && (f = 0),
                      (h = R.y) < 1e-6 && -1e-6 < h && (h = 0),
                      A
                        ? ((R.deltaX = f - C.data.rotation),
                          (C.data.rotation = R.rotation = f),
                          C.setRatio(1))
                        : d
                        ? (M && ((R.deltaY = h - d.top()), d.top(h)),
                          I && ((R.deltaX = f - d.left()), d.left(f)))
                        : k
                        ? (M && ((R.deltaY = h - C.data.y), (C.data.y = h)),
                          I && ((R.deltaX = f - C.data.x), (C.data.x = f)),
                          C.setRatio(1))
                        : (M &&
                            ((R.deltaY = h - parseFloat(p.style.top || 0)),
                            (p.style.top = h + "px")),
                          I &&
                            ((R.deltaY = f - parseFloat(p.style.left || 0)),
                            (p.style.left = f + "px"))),
                      !V ||
                        t ||
                        K ||
                        ((K = !0), vt(R, "drag", "onDrag"), (K = !1))),
                      (w = !1);
                  },
                  F = function (t, e) {
                    var n,
                      i = R.x,
                      o = R.y;
                    p._gsTransform ||
                      (!k && !A) ||
                      _e.default.set(p, {
                        x: "+=0",
                        overwrite: !1,
                        data: "_draggable",
                      }),
                      k
                        ? ((R.y = p._gsTransform.y), (R.x = p._gsTransform.x))
                        : A
                        ? (R.x = R.rotation = p._gsTransform.rotation)
                        : d
                        ? ((R.y = d.top()), (R.x = d.left()))
                        : ((R.y = parseInt(p.style.top, 10) || 0),
                          (R.x = parseInt(p.style.left, 10) || 0)),
                      (a || x || T) &&
                        !e &&
                        (R.isDragging || R.isThrowing) &&
                        (T &&
                          ((Mt.x = R.x),
                          (Mt.y = R.y),
                          (n = T(Mt)).x !== R.x && ((R.x = n.x), (w = !0)),
                          n.y !== R.y && ((R.y = n.y), (w = !0))),
                        a &&
                          (n = a(R.x)) !== R.x &&
                          ((R.x = n), A && (R.rotation = n), (w = !0)),
                        x && ((n = x(R.y)) !== R.y && (R.y = n), (w = !0))),
                      w && B(!0),
                      t ||
                        ((R.deltaX = R.x - i),
                        (R.deltaY = R.y - o),
                        vt(R, "throwupdate", "onThrowUpdate"));
                  },
                  lt = function () {
                    var t, e;
                    (_ = !1),
                      d
                        ? (d.calibrate(),
                          (R.minX = m = -d.maxScrollLeft()),
                          (R.minY = v = -d.maxScrollTop()),
                          (R.maxX = g = R.maxY = y = 0),
                          (_ = !0))
                        : u.bounds &&
                          ((t = Ut(u.bounds, p.parentNode)),
                          A
                            ? ((R.minX = m = t.left),
                              (R.maxX = g = t.left + t.width),
                              (R.minY = v = R.maxY = y = 0))
                            : void 0 !== u.bounds.maxX ||
                              void 0 !== u.bounds.maxY
                            ? ((t = u.bounds),
                              (R.minX = m = t.minX),
                              (R.minY = v = t.minY),
                              (R.maxX = g = t.maxX),
                              (R.maxY = y = t.maxY))
                            : ((e = Ut(p, p.parentNode)),
                              (R.minX = m = Nt(p, Q) + t.left - e.left),
                              (R.minY = v = Nt(p, tt) + t.top - e.top),
                              (R.maxX = g = m + (t.width - e.width)),
                              (R.maxY = y = v + (t.height - e.height))),
                          g < m &&
                            ((R.minX = g), (R.maxX = g = m), (m = R.minX)),
                          y < v &&
                            ((R.minY = y), (R.maxY = y = v), (v = R.minY)),
                          A && ((R.minRotation = m), (R.maxRotation = g)),
                          (_ = !0)),
                      u.liveSnap &&
                        ((e =
                          (t =
                            !0 === u.liveSnap
                              ? u.snap || {}
                              : u.liveSnap) instanceof Array ||
                          "function" == typeof t),
                        A
                          ? ((a = gt(e ? t : t.rotation, m, g, 1)), (x = null))
                          : t.points
                          ? (T = mt(
                              e ? t : t.points,
                              m,
                              g,
                              v,
                              y,
                              t.radius,
                              d ? -1 : 1
                            ))
                          : (I &&
                              (a = gt(
                                e ? t : t.x || t.left || t.scrollLeft,
                                m,
                                g,
                                d ? -1 : 1
                              )),
                            M &&
                              (x = gt(
                                e ? t : t.y || t.top || t.scrollTop,
                                v,
                                y,
                                d ? -1 : 1
                              ))));
                  },
                  ut = function () {
                    (R.isThrowing = !1),
                      vt(R, "throwcomplete", "onThrowComplete");
                  },
                  ct = function () {
                    R.isThrowing = !1;
                  },
                  ft = function (t, e) {
                    var n, i;
                    t && wt
                      ? (!0 === t &&
                          ((i =
                            (n = u.snap || u.liveSnap || {}) instanceof Array ||
                            "function" == typeof n),
                          (t = {
                            resistance:
                              (u.throwResistance || u.resistance || 1e3) /
                              (A ? 10 : 1),
                          }),
                          A
                            ? (t.rotation = Yt(
                                R,
                                i ? n : n.rotation,
                                g,
                                m,
                                1,
                                e
                              ))
                            : (I &&
                                (t[Q] = Yt(
                                  R,
                                  i
                                    ? n
                                    : n.points || n.x || n.left || n.scrollLeft,
                                  g,
                                  m,
                                  d ? -1 : 1,
                                  e || "x" === R.lockedAxis
                                )),
                              M &&
                                (t[tt] = Yt(
                                  R,
                                  i
                                    ? n
                                    : n.points || n.y || n.top || n.scrollTop,
                                  y,
                                  v,
                                  d ? -1 : 1,
                                  e || "y" === R.lockedAxis
                                )),
                              (n.points ||
                                (n instanceof Array &&
                                  "object" == typeof n[0])) &&
                                ((t.linkedProps = Q + "," + tt),
                                (t.radius = n.radius)))),
                        (R.isThrowing = !0),
                        (i = isNaN(u.overshootTolerance)
                          ? 1 === u.edgeResistance
                            ? 0
                            : 1 - R.edgeResistance + 0.2
                          : u.overshootTolerance),
                        (R.tween = e =
                          wt.to(
                            d || p,
                            {
                              throwProps: t,
                              data: "_draggable",
                              ease: u.ease || te.Power3.easeOut,
                              onComplete: ut,
                              onOverwrite: ct,
                              onUpdate: u.fastMode ? vt : F,
                              onUpdateParams: u.fastMode
                                ? [R, "onthrowupdate", "onThrowUpdate"]
                                : n && n.radius
                                ? [!1, !0]
                                : ee,
                            },
                            Math.max(u.minDuration || 0, u.maxDuration || 0) ||
                              2,
                            isNaN(u.minDuration)
                              ? 0 === i ||
                                ("object" == typeof t && 1e3 < t.resistance)
                                ? 0
                                : 0.5
                              : u.minDuration,
                            i
                          )),
                        u.fastMode ||
                          (d && (d._suspendTransforms = !0),
                          e.render(e.duration(), !0, !0),
                          F(!0, !0),
                          (R.endX = R.x),
                          (R.endY = R.y),
                          A && (R.endRotation = R.x),
                          e.play(0),
                          F(!0, !0),
                          d && (d._suspendTransforms = !1)))
                      : _ && R.applyBounds();
                  },
                  ht = function (t) {
                    var e,
                      n,
                      i,
                      o,
                      r,
                      s = P || [1, 0, 0, 1, 0, 0];
                    (P = fe(p.parentNode, !0)),
                      t &&
                        R.isPressed &&
                        s.join(",") !== P.join(",") &&
                        ((t = s[0]),
                        (r = s[1]),
                        (e = s[2]),
                        (n = s[3]),
                        (i = s[4]),
                        (s = s[5]),
                        (t =
                          l * (-r / (o = t * n - r * e)) +
                          c * (t / o) +
                          -(t * s - r * i) / o),
                        (c =
                          (r =
                            l * (n / o) + c * (-e / o) + (e * s - n * i) / o) *
                            P[1] +
                          t * P[3] +
                          P[5]),
                        (l = r * P[0] + t * P[2] + P[4])),
                      P[1] ||
                        P[2] ||
                        1 != P[0] ||
                        1 != P[3] ||
                        0 != P[4] ||
                        0 != P[5] ||
                        (P = null);
                  },
                  pt = function () {
                    var t,
                      e,
                      n,
                      i,
                      o,
                      r,
                      s,
                      a = 1 - R.edgeResistance;
                    ht(!1),
                      P &&
                        ((l = R.pointerX * P[0] + R.pointerY * P[2] + P[4]),
                        (c = R.pointerX * P[1] + R.pointerY * P[3] + P[5])),
                      w && (yt(R.pointerX, R.pointerY), B(!0)),
                      d
                        ? (lt(), (h = d.top()), (f = d.left()))
                        : (dt() ? (F(!0, !0), lt()) : R.applyBounds(),
                          A
                            ? ((Y = R.rotationOrigin =
                                ((e = { x: 0, y: 0 }),
                                (t = Dt((t = p))),
                                (o = fe(t, !1)),
                                (r = e.x),
                                (s = e.y),
                                n && (Bt(t, e), (r -= e.x), (s -= e.y)),
                                ((i = !0 === i ? e : i || {}).x =
                                  r * o[0] + s * o[2] + o[4]),
                                (i.y = r * o[1] + s * o[3] + o[5]),
                                i)),
                              F(!0, !0),
                              (f = R.x),
                              (h = R.y =
                                Math.atan2(Y.y - R.pointerY, R.pointerX - Y.x) *
                                ne))
                            : (p.parentNode && p.parentNode.scrollTop,
                              p.parentNode && p.parentNode.scrollLeft,
                              (h = Nt(p, tt)),
                              (f = Nt(p, Q)))),
                      _ &&
                        a &&
                        (g < f
                          ? (f = g + (f - g) / a)
                          : f < m && (f = m - (m - f) / a),
                        A ||
                          (y < h
                            ? (h = y + (h - y) / a)
                            : h < v && (h = v - (v - h) / a))),
                      (R.startX = f),
                      (R.startY = h);
                  },
                  dt = function () {
                    return R.tween && R.tween.isActive();
                  },
                  _t = function () {
                    !St.parentNode ||
                      dt() ||
                      R.isDragging ||
                      St.parentNode.removeChild(St);
                  },
                  gt = function (s, a, l, n) {
                    return (
                      null == a && (a = -Ot),
                      null == l && (l = Ot),
                      "function" == typeof s
                        ? function (t) {
                            var e = R.isPressed ? 1 - R.edgeResistance : 1;
                            return (
                              s.call(
                                R,
                                l < t
                                  ? l + (t - l) * e
                                  : t < a
                                  ? a + (t - a) * e
                                  : t
                              ) * n
                            );
                          }
                        : s instanceof Array
                        ? function (t) {
                            for (
                              var e, n, i = s.length, o = 0, r = Ot;
                              -1 < --i;

                            )
                              (n = (n = (e = s[i]) - t) < 0 ? -n : n) < r &&
                                a <= e &&
                                e <= l &&
                                ((o = i), (r = n));
                            return s[o];
                          }
                        : isNaN(s)
                        ? function (t) {
                            return t;
                          }
                        : function () {
                            return s * n;
                          }
                    );
                  },
                  mt = function (s, r, a, l, u, c, f) {
                    return (
                      (c = c && c < Ot ? c * c : Ot),
                      "function" == typeof s
                        ? function (t) {
                            var e,
                              n = R.isPressed ? 1 - R.edgeResistance : 1,
                              i = t.x,
                              o = t.y;
                            return (
                              (t.x = i =
                                a < i
                                  ? a + (i - a) * n
                                  : i < r
                                  ? r + (i - r) * n
                                  : i),
                              (t.y = o =
                                u < o
                                  ? u + (o - u) * n
                                  : o < l
                                  ? l + (o - l) * n
                                  : o),
                              (n = s.call(R, t)) !== t &&
                                ((t.x = n.x), (t.y = n.y)),
                              1 !== f && ((t.x *= f), (t.y *= f)),
                              c < Ot &&
                                ((n = t.x - i),
                                (e = t.y - o),
                                c < n * n + e * e && ((t.x = i), (t.y = o))),
                              t
                            );
                          }
                        : s instanceof Array
                        ? function (t) {
                            for (
                              var e, n, i = s.length, o = 0, r = Ot;
                              -1 < --i;

                            )
                              (n =
                                (e = (n = s[i]).x - t.x) * e +
                                (e = n.y - t.y) * e) < r && ((o = i), (r = n));
                            return r <= c ? s[o] : t;
                          }
                        : function (t) {
                            return t;
                          }
                    );
                  },
                  z = function (t) {
                    var e,
                      n,
                      i,
                      o,
                      r = t;
                    if (q && !Zt && R.isPressed && t) {
                      if ((e = (R.pointerEvent = t).changedTouches)) {
                        if ((t = e[0]) !== W && t.identifier !== b) {
                          for (
                            n = e.length;
                            -1 < --n && (t = e[n]).identifier !== b;

                          );
                          if (n < 0) return;
                        }
                      } else if (t.pointerId && b && t.pointerId !== b) return;
                      if (Ct) t = Vt(t, !0);
                      else {
                        if (
                          O &&
                          S &&
                          !E &&
                          ((i = t.pageX),
                          (o = t.pageY),
                          P &&
                            ((n = i * P[0] + o * P[2] + P[4]),
                            (o = i * P[1] + o * P[3] + P[5]),
                            (i = n)),
                          (((i = Math.abs(i - l)) !== (o = Math.abs(o - c)) &&
                            (L < i || L < o)) ||
                            (It && S === E)) &&
                            ((E = o < i && I ? "x" : "y"),
                            !1 !== R.vars.lockAxisOnTouchScroll &&
                              ((R.lockedAxis = "x" === E ? "y" : "x"),
                              "function" == typeof R.vars.onLockAxis &&
                                R.vars.onLockAxis.call(R, r)),
                            It && S === E))
                        )
                          return void H(r);
                        R.allowEventDefault ||
                          (S && (!E || S === E)) ||
                          !1 === r.cancelable ||
                          (r.preventDefault(),
                          r.preventManipulation && r.preventManipulation());
                      }
                      R.autoScroll && (j = !0), yt(t.pageX, t.pageY);
                    }
                  },
                  yt = function (t, e) {
                    var n,
                      i,
                      o,
                      r = 1 - R.dragResistance,
                      s = 1 - R.edgeResistance;
                    (R.pointerX = t),
                      (R.pointerY = e),
                      A
                        ? ((n = Math.atan2(Y.y - e, t - Y.x) * ne),
                          180 < (i = R.y - n)
                            ? ((h -= 360), (R.y = n))
                            : i < -180 && ((h += 360), (R.y = n)),
                          (i =
                            R.x !== f || Math.abs(h - n) > L
                              ? ((R.y = n), f + (h - n) * r)
                              : f))
                        : (P &&
                            ((o = t * P[0] + e * P[2] + P[4]),
                            (e = t * P[1] + e * P[3] + P[5]),
                            (t = o)),
                          (e = e - c) < L && -L < e && (e = 0),
                          (t = t - l) < L && -L < t && (t = 0),
                          (R.lockAxis || R.lockedAxis) &&
                            (t || e) &&
                            ((o = R.lockedAxis) ||
                              ((R.lockedAxis = o =
                                I && Math.abs(t) > Math.abs(e)
                                  ? "y"
                                  : M
                                  ? "x"
                                  : null),
                              o &&
                                "function" == typeof R.vars.onLockAxis &&
                                R.vars.onLockAxis.call(R, R.pointerEvent)),
                            "y" === o ? (e = 0) : "x" === o && (t = 0)),
                          (i = f + t * r),
                          (n = h + e * r)),
                      (a || x || T) && (R.x !== i || (R.y !== n && !A))
                        ? (T &&
                            ((Mt.x = i),
                            (Mt.y = n),
                            (i = (o = T(Mt)).x),
                            (n = o.y)),
                          a && (i = a(i)),
                          x && (n = x(n)))
                        : _ &&
                          (g < i
                            ? (i = g + (i - g) * s)
                            : i < m && (i = m + (i - m) * s),
                          A ||
                            (y < n
                              ? (n = y + (n - y) * s)
                              : n < v && (n = v + (n - v) * s))),
                      A || P || ((i = Math.round(i)), (n = Math.round(n))),
                      (R.x === i && (R.y === n || A)) ||
                        (A
                          ? ((R.endRotation = R.x = R.endX = i), (w = !0))
                          : (M && ((R.y = R.endY = n), (w = !0)),
                            I && ((R.x = R.endX = i), (w = !0))),
                        !R.isDragging &&
                          R.isPressed &&
                          ((R.isDragging = !0),
                          vt(R, "dragstart", "onDragStart")));
                  },
                  H = function (t, e) {
                    if (
                      q &&
                      R.isPressed &&
                      (!t ||
                        null == b ||
                        e ||
                        !(
                          (t.pointerId && t.pointerId !== b) ||
                          (t.changedTouches &&
                            !(function (t, e) {
                              for (var n = t.length; -1 < --n; )
                                if (t[n].identifier === e) return !0;
                              return !1;
                            })(t.changedTouches, b))
                        ))
                    ) {
                      R.isPressed = !1;
                      var n,
                        i,
                        o,
                        r,
                        e = t,
                        s = R.isDragging,
                        a =
                          R.vars.allowContextMenu &&
                          t &&
                          (t.ctrlKey || 2 < t.which),
                        l = _e.default.delayedCall(0.001, _t);
                      if (
                        (O
                          ? (zt(O, "touchend", H),
                            zt(O, "touchmove", z),
                            zt(O, "touchcancel", H),
                            zt(xt, "touchstart", Wt))
                          : zt(xt, "mousemove", z),
                        zt(xt, "mouseup", H),
                        t && t.target && zt(t.target, "mouseup", H),
                        (w = !1),
                        !G || a)
                      ) {
                        if ((qt(B), !A))
                          for (i = D.length; -1 < --i; )
                            jt(
                              D[i],
                              "cursor",
                              u.cursor || (!1 !== u.cursor ? "move" : null)
                            );
                        if (
                          (s && ((nt = oe = Pt()), (R.isDragging = !1)),
                          At--,
                          t)
                        ) {
                          if (
                            (n = (t = Ct ? Vt(t, !1) : t).changedTouches) &&
                            (t = n[0]) !== W &&
                            t.identifier !== b
                          ) {
                            for (
                              i = n.length;
                              -1 < --i && (t = n[i]).identifier !== b;

                            );
                            if (i < 0) return;
                          }
                          (R.pointerEvent = e),
                            (R.pointerX = t.pageX),
                            (R.pointerY = t.pageY);
                        }
                        return (
                          a && e
                            ? (e.preventDefault(),
                              e.preventManipulation && e.preventManipulation(),
                              vt(R, "release", "onRelease"))
                            : e && !s
                            ? (Z && (u.snap || u.bounds) && ft(u.throwProps),
                              vt(R, "release", "onRelease"),
                              (It && "touchmove" === e.type) ||
                                -1 !== e.type.indexOf("cancel") ||
                                (vt(R, "click", "onClick"),
                                Pt() - N < 300 &&
                                  vt(R, "doubleclick", "onDoubleClick"),
                                (r = e.target || e.srcElement || p),
                                (N = Pt()),
                                It ||
                                  e.defaultPrevented ||
                                  _e.default.delayedCall(1e-5, function () {
                                    N !== $ &&
                                      R.enabled() &&
                                      !R.isPressed &&
                                      (r.click
                                        ? r.click()
                                        : xt.createEvent &&
                                          ((o =
                                            xt.createEvent(
                                              "MouseEvents"
                                            )).initMouseEvent(
                                            "click",
                                            !0,
                                            !0,
                                            window,
                                            1,
                                            R.pointerEvent.screenX,
                                            R.pointerEvent.screenY,
                                            R.pointerX,
                                            R.pointerY,
                                            !1,
                                            !1,
                                            !1,
                                            !1,
                                            0,
                                            null
                                          ),
                                          r.dispatchEvent(o)));
                                  })))
                            : (ft(u.throwProps),
                              Ct ||
                                R.allowEventDefault ||
                                !e ||
                                (!1 === u.dragClickables &&
                                  at.call(R, e.target)) ||
                                !s ||
                                (S && (!E || S !== E)) ||
                                !1 === e.cancelable ||
                                (e.preventDefault(),
                                e.preventManipulation &&
                                  e.preventManipulation()),
                              vt(R, "release", "onRelease")),
                          dt() && l.duration(R.tween.duration()),
                          s && vt(R, "dragend", "onDragEnd"),
                          !0
                        );
                      }
                      t && (zt(t.target, "change", H), (R.pointerEvent = e)),
                        bt(D, !1),
                        vt(R, "release", "onRelease"),
                        vt(R, "click", "onClick"),
                        (G = !1);
                    }
                  },
                  e = Ht.get(this.target);
                e && e.kill(),
                  (this.startDrag = function (t, e) {
                    r(t || R.pointerEvent, !0),
                      e &&
                        !R.hitTest(t || R.pointerEvent) &&
                        ((e = Xt(t || R.pointerEvent)),
                        (t = Xt(p)),
                        (e = n({
                          x: e.left + e.width / 2,
                          y: e.top + e.height / 2,
                        })),
                        (t = n({
                          x: t.left + t.width / 2,
                          y: t.top + t.height / 2,
                        })),
                        (l -= e.x - t.x),
                        (c -= e.y - t.y)),
                      R.isDragging ||
                        ((R.isDragging = !0),
                        vt(R, "dragstart", "onDragStart"));
                  }),
                  (this.drag = z),
                  (this.endDrag = function (t) {
                    H(t || R.pointerEvent, !0);
                  }),
                  (this.timeSinceDrag = function () {
                    return R.isDragging ? 0 : (Pt() - nt) / 1e3;
                  }),
                  (this.timeSinceClick = function () {
                    return (Pt() - N) / 1e3;
                  }),
                  (this.hitTest = function (t, e) {
                    return Ht.hitTest(R.target, t, e);
                  }),
                  (this.getDirection = function (t, e) {
                    var n,
                      i,
                      o =
                        "velocity" === t && wt
                          ? t
                          : "object" != typeof t || A
                          ? "start"
                          : "element";
                    return (
                      "element" === o && ((n = Xt(R.target)), (i = Xt(t))),
                      (t =
                        "start" === o
                          ? R.x - f
                          : "velocity" === o
                          ? wt.getVelocity(this.target, Q)
                          : n.left + n.width / 2 - (i.left + i.width / 2)),
                      A
                        ? t < 0
                          ? "counter-clockwise"
                          : "clockwise"
                        : ((e = e || 2),
                          (o =
                            "start" === o
                              ? R.y - h
                              : "velocity" === o
                              ? wt.getVelocity(this.target, tt)
                              : n.top + n.height / 2 - (i.top + i.height / 2)),
                          (i =
                            (n = Math.abs(t / o)) < 1 / e
                              ? ""
                              : t < 0
                              ? "left"
                              : "right"),
                          n < e &&
                            ("" !== i && (i += "-"),
                            (i += o < 0 ? "up" : "down")),
                          i)
                    );
                  }),
                  (this.applyBounds = function (t) {
                    var e, n, i, o, r;
                    if (t && u.bounds !== t)
                      return (u.bounds = t), R.update(!0);
                    if ((F(!0), lt(), _)) {
                      if (
                        ((t = R.x),
                        (e = R.y),
                        g < t ? (t = g) : t < m && (t = m),
                        y < e ? (e = y) : e < v && (e = v),
                        (R.x !== t || R.y !== e) &&
                          ((n = !0),
                          (R.x = R.endX = t),
                          A ? (R.endRotation = t) : (R.y = R.endY = e),
                          B((w = !0)),
                          R.autoScroll && !R.isDragging))
                      )
                        for (
                          ue(p.parentNode),
                            i = p,
                            Lt.scrollTop =
                              null != window.pageYOffset
                                ? window.pageYOffset
                                : (null != Tt.scrollTop ? Tt : xt.body)
                                    .scrollTop,
                            Lt.scrollLeft =
                              null != window.pageXOffset
                                ? window.pageXOffset
                                : (null != Tt.scrollLeft ? Tt : xt.body)
                                    .scrollLeft;
                          i && !r;

                        )
                          (o = (r = Rt(i.parentNode)) ? Lt : i.parentNode),
                            M &&
                              o.scrollTop > o._gsMaxScrollY &&
                              (o.scrollTop = o._gsMaxScrollY),
                            I &&
                              o.scrollLeft > o._gsMaxScrollX &&
                              (o.scrollLeft = o._gsMaxScrollX),
                            (i = o);
                      R.isThrowing &&
                        (n ||
                          R.endX > g ||
                          R.endX < m ||
                          R.endY > y ||
                          R.endY < v) &&
                        ft(u.throwProps, n);
                    }
                    return R;
                  }),
                  (this.update = function (t, e, n) {
                    var i = R.x,
                      o = R.y;
                    return (
                      ht(!e),
                      t ? R.applyBounds() : (w && n && B(!0), F(!0)),
                      e && (yt(R.pointerX, R.pointerY), w && B(!0)),
                      R.isPressed &&
                        !e &&
                        ((I && 0.01 < Math.abs(i - R.x)) ||
                          (M && 0.01 < Math.abs(o - R.y) && !A)) &&
                        pt(),
                      R.autoScroll &&
                        (ue(p.parentNode), (j = R.isDragging), B(!0)),
                      R.autoScroll && (le(p, s), ae(p, s)),
                      R
                    );
                  }),
                  (this.enable = function (t) {
                    var e, n;
                    if ("soft" !== t) {
                      for (e = D.length; -1 < --e; )
                        (n = D[e]),
                          Ft(n, "mousedown", r),
                          Ft(n, "touchstart", r),
                          Ft(n, "click", X, !0),
                          A ||
                            !1 === u.cursor ||
                            jt(n, "cursor", u.cursor || "move"),
                          jt(n, "touchCallout", "none"),
                          jt(
                            n,
                            "touchAction",
                            I === M ? "none" : I ? "pan-y" : "pan-x"
                          ),
                          ce(n) &&
                            jt(
                              n.ownerSVGElement || n,
                              "touchAction",
                              I === M ? "none" : I ? "pan-y" : "pan-x"
                            ),
                          this.vars.allowContextMenu || Ft(n, "contextmenu", o);
                      bt(D, !1);
                    }
                    return (
                      ae(p, s),
                      (q = !0),
                      wt &&
                        "soft" !== t &&
                        wt.track(
                          d || p,
                          k ? "x,y" : A ? "rotation" : "top,left"
                        ),
                      d && d.enable(),
                      (p._gsDragID = t = "d" + ie++),
                      (kt[t] = this),
                      d && (d.element._gsDragID = t),
                      _e.default.set(p, {
                        x: "+=0",
                        overwrite: !1,
                        data: "_draggable",
                      }),
                      (C = {
                        t: p,
                        data: Ct ? U : p._gsTransform,
                        tween: {},
                        setRatio: Ct
                          ? function () {
                              _e.default.set(p, i);
                            }
                          : ge.a._internals.setTransformRatio ||
                            ge.a._internals.set3DTransformRatio,
                      }),
                      pt(),
                      R.update(!0),
                      R
                    );
                  }),
                  (this.disable = function (t) {
                    var e,
                      n,
                      i = R.isDragging;
                    if (!A)
                      for (e = D.length; -1 < --e; ) jt(D[e], "cursor", null);
                    if ("soft" !== t) {
                      for (e = D.length; -1 < --e; )
                        (n = D[e]),
                          jt(n, "touchCallout", null),
                          jt(n, "touchAction", null),
                          zt(n, "mousedown", r),
                          zt(n, "touchstart", r),
                          zt(n, "click", X),
                          zt(n, "contextmenu", o);
                      bt(D, !0),
                        O &&
                          (zt(O, "touchcancel", H),
                          zt(O, "touchend", H),
                          zt(O, "touchmove", z)),
                        zt(xt, "mouseup", H),
                        zt(xt, "mousemove", z);
                    }
                    return (
                      le(p, s),
                      (q = !1),
                      wt &&
                        "soft" !== t &&
                        wt.untrack(
                          d || p,
                          k ? "x,y" : A ? "rotation" : "top,left"
                        ),
                      d && d.disable(),
                      qt(B),
                      (R.isDragging = R.isPressed = G = !1),
                      i && vt(R, "dragend", "onDragEnd"),
                      R
                    );
                  }),
                  (this.enabled = function (t, e) {
                    return arguments.length
                      ? t
                        ? R.enable(e)
                        : R.disable(e)
                      : q;
                  }),
                  (this.kill = function () {
                    return (
                      (R.isThrowing = !1),
                      _e.default.killTweensOf(d || p, !0, et),
                      R.disable(),
                      _e.default.set(D, { clearProps: "userSelect" }),
                      delete kt[p._gsDragID],
                      R
                    );
                  }),
                  -1 !== t.indexOf("scroll") &&
                    ((d = this.scrollProxy =
                      new Gt(
                        p,
                        (function (t, e) {
                          for (var n in e) void 0 === t[n] && (t[n] = e[n]);
                          return t;
                        })(
                          {
                            onKill: function () {
                              R.isPressed && H(null);
                            },
                          },
                          u
                        )
                      )),
                    (p.style.overflowY = M && !he ? "auto" : "hidden"),
                    (p.style.overflowX = I && !he ? "auto" : "hidden"),
                    (p = d.content)),
                  !1 !== u.force3D && _e.default.set(p, { force3D: !0 }),
                  A ? (et.rotation = 1) : (I && (et[Q] = 1), M && (et[tt] = 1)),
                  A
                    ? ((U = (i = Qt).css), (i.overwrite = !1))
                    : k &&
                      ((U = (i = I && M ? Kt : I ? $t : Jt).css),
                      (i.overwrite = !1)),
                  this.enable();
              },
              n = (Ht.prototype = new _e.EventDispatcher()),
              i =
                ((n.constructor = Ht),
                (n.pointerX =
                  n.pointerY =
                  n.startX =
                  n.startY =
                  n.deltaX =
                  n.deltaY =
                    0),
                (n.isDragging = n.isPressed = !1),
                (Ht.version = "0.17.1"),
                (Ht.zIndex = 1e3),
                Ft(xt, "touchcancel", function () {}),
                Ft(xt, "contextmenu", function (t) {
                  for (var e in kt) kt[e].isPressed && kt[e].endDrag();
                }),
                (Ht.create = function (t, e) {
                  for (
                    var n =
                        (t =
                          "string" == typeof t ? _e.default.selector(t) : t) &&
                        0 !== t.length
                          ? s(t)
                            ? (function (t) {
                                for (
                                  var e, n, i = [], o = t.length, r = 0;
                                  r < o;
                                  r++
                                )
                                  if (((e = t[r]), s(e)))
                                    for (n = e.length, n = 0; n < e.length; n++)
                                      i.push(e[n]);
                                  else e && 0 !== e.length && i.push(e);
                                return i;
                              })(t)
                            : [t]
                          : [],
                      i = n.length;
                    -1 < --i;

                  )
                    n[i] = new Ht(n[i], e);
                  return n;
                }),
                (Ht.get = function (t) {
                  return kt[(Dt(t) || {})._gsDragID];
                }),
                (Ht.timeSinceDrag = function () {
                  return (Pt() - oe) / 1e3;
                }),
                {}),
              Xt = function (t, e) {
                return t === window
                  ? ((i.left = i.top = 0),
                    (i.width = i.right =
                      Tt.clientWidth ||
                      t.innerWidth ||
                      xt.body.clientWidth ||
                      0),
                    (i.height = i.bottom =
                      (t.innerHeight || 0) - 20 < Tt.clientHeight
                        ? Tt.clientHeight
                        : t.innerHeight || xt.body.clientHeight || 0),
                    i)
                  : ((t =
                      t.pageX !== e
                        ? {
                            left: t.pageX - m(),
                            top: t.pageY - g(),
                            right: t.pageX - m() + 1,
                            bottom: t.pageY - g() + 1,
                          }
                        : t.nodeType || t.left === e || t.top === e
                        ? Ct
                          ? (function (t) {
                              for (
                                var e = 0,
                                  n = 0,
                                  i = (t = Dt(t)).offsetWidth,
                                  o = t.offsetHeight;
                                t;

                              )
                                (e += t.offsetTop),
                                  (n += t.offsetLeft),
                                  (t = t.offsetParent);
                              return { top: e, left: n, width: i, height: o };
                            })(t)
                          : Dt(t).getBoundingClientRect()
                        : t).right === e && t.width !== e
                      ? ((t.right = t.left + t.width),
                        (t.bottom = t.top + t.height))
                      : t.width === e &&
                        (t = {
                          width: t.right - t.left,
                          height: t.bottom - t.top,
                          right: t.right,
                          left: t.left,
                          bottom: t.bottom,
                          top: t.top,
                        }),
                    t);
              };
            return (
              (Ht.hitTest = function (t, e, n) {
                var i, o;
                return (
                  t !== e &&
                  ((t = Xt(t)),
                  (o =
                    (e = Xt(e)).left > t.right ||
                    e.right < t.left ||
                    e.top > t.bottom ||
                    e.bottom < t.top) || !n
                    ? !o
                    : ((o = -1 !== (n + "").indexOf("%")),
                      (n = parseFloat(n) || 0),
                      ((i = {
                        left: Math.max(t.left, e.left),
                        top: Math.max(t.top, e.top),
                      }).width = Math.min(t.right, e.right) - i.left),
                      (i.height = Math.min(t.bottom, e.bottom) - i.top),
                      !(i.width < 0 || i.height < 0) &&
                        (o
                          ? (o = i.width * i.height) >=
                              t.width * t.height * (n *= 0.01) ||
                            o >= e.width * e.height * n
                          : i.width > n && i.height > n)))
                );
              }),
              (St.style.cssText =
                "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;"),
              Ht
            );
          },
          !0
        ),
        _e.globals.Draggable);
  },
  function (o, r, s) {
    !function (t) {
      var e,
        n,
        i = o.exports && void 0 !== t ? t : this || window;
      (i._gsQueue || (i._gsQueue = [])).push(function () {
        "use strict";
        i._gsDefine(
          "plugins.ThrowPropsPlugin",
          [
            "plugins.TweenPlugin",
            "TweenLite",
            "easing.Ease",
            "utils.VelocityTracker",
          ],
          function (n, P, C, S) {
            function E(t, e) {
              n.call(this, "throwProps"), (this._overwriteProps.length = 0);
            }
            function u(t, e, n, i, o) {
              var r,
                s,
                a,
                l,
                u = e.length,
                c = 0,
                f = h;
              if ("object" == typeof t) {
                for (; -1 < --u; ) {
                  for (a in ((r = e[u]), (s = 0), t))
                    s += (l = r[a] - t[a]) * l;
                  s < f && ((c = u), (f = s));
                }
                if ((o || h) < h && o < Math.sqrt(f)) return t;
              } else
                for (; -1 < --u; )
                  (s = (s = (r = e[u]) - t) < 0 ? -s : s) < f &&
                    i <= r &&
                    r <= n &&
                    ((c = u), (f = s));
              return e[c];
            }
            function k(t, e, n, i, o, r) {
              if ("auto" === t.end) return t;
              var s,
                a,
                l = t.end;
              if (
                ((n = isNaN(n) ? h : n),
                (i = isNaN(i) ? -h : i),
                "object" == typeof e)
              ) {
                if (
                  ((s =
                    (!e.calculated &&
                      ("function" == typeof l ? l(e) : u(e, l, n, i, r))) ||
                    e),
                  !e.calculated)
                ) {
                  for (a in s) e[a] = s[a];
                  e.calculated = !0;
                }
                s = s[o];
              } else
                s =
                  "function" == typeof l
                    ? l(e)
                    : l instanceof Array
                    ? u(e, l, n, i, r)
                    : Number(l);
              return (
                n < s ? (s = n) : s < i && (s = i),
                { max: s, min: s, unitFactor: t.unitFactor }
              );
            }
            function A(t, e, n) {
              for (var i in e) void 0 === t[i] && i !== n && (t[i] = e[i]);
              return t;
            }
            var v,
              b,
              w,
              x,
              h = 999999999999999,
              e = i._gsDefine.globals,
              I = !1,
              T = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1,
                xPercent: 1,
                yPercent: 1,
              },
              M = (E.calculateChange = function (t, e, n, i) {
                return (
                  (n * (i = null == i ? 0.05 : i) * t) /
                  (e instanceof C ? e : e ? new C(e) : P.defaultEase).getRatio(
                    i
                  )
                );
              }),
              L = (E.calculateDuration = function (t, e, n, i, o) {
                o = o || 0.05;
                i = i instanceof C ? i : i ? new C(i) : P.defaultEase;
                return Math.abs(((e - t) * i.getRatio(o)) / n / o);
              }),
              s = (E.calculateTweenDuration = function (t, e, n, i, o, r) {
                if (!(t = "string" == typeof t ? P.selector(t) : t)) return 0;
                null == n && (n = 10),
                  null == i && (i = 0.2),
                  null == o && (o = 1),
                  t.length && (t = t[0] || t);
                var s,
                  a,
                  l,
                  u,
                  c,
                  f,
                  h,
                  p,
                  d,
                  _,
                  g,
                  m,
                  y,
                  v = 0,
                  b = 9999999999,
                  w = e.throwProps || e,
                  x =
                    e.ease instanceof C
                      ? e.ease
                      : e.ease
                      ? new C(e.ease)
                      : P.defaultEase,
                  T = isNaN(w.checkpoint) ? 0.05 : Number(w.checkpoint),
                  O = isNaN(w.resistance)
                    ? E.defaultResistance
                    : Number(w.resistance);
                if (w.linkedProps)
                  for (
                    m = w.linkedProps.split(","), g = {}, y = 0;
                    y < m.length;
                    y++
                  )
                    (a = w[(s = m[y])]) &&
                      ((l =
                        0 <
                        (u =
                          void 0 !== a.velocity && "number" == typeof a.velocity
                            ? Number(a.velocity) || 0
                            : (d = d || S.getByTarget(t)) && d.isTrackingProp(s)
                            ? d.getVelocity(s)
                            : 0) *
                          (c = isNaN(a.resistance) ? O : Number(a.resistance))
                          ? u / c
                          : u / -c),
                      (f =
                        "function" == typeof t[s]
                          ? t[
                              s.indexOf("set") ||
                              "function" != typeof t["get" + s.substr(3)]
                                ? s
                                : "get" + s.substr(3)
                            ]()
                          : t[s] || 0),
                      (g[s] = f + M(u, x, l, T)));
                for (s in w)
                  "resistance" !== s &&
                    "checkpoint" !== s &&
                    "preventOvershoot" !== s &&
                    "linkedProps" !== s &&
                    "radius" !== s &&
                    ("object" != typeof (a = w[s]) &&
                      ((d = d || S.getByTarget(t)) && d.isTrackingProp(s)
                        ? (a =
                            "number" == typeof a
                              ? { velocity: a }
                              : { velocity: d.getVelocity(s) })
                        : (l = 0 < (u = Number(a) || 0) * O ? u / O : u / -O)),
                    "object" == typeof a &&
                      ((l =
                        0 <
                        (u =
                          void 0 !== a.velocity && "number" == typeof a.velocity
                            ? Number(a.velocity) || 0
                            : (d = d || S.getByTarget(t)) && d.isTrackingProp(s)
                            ? d.getVelocity(s)
                            : 0) *
                          (c = isNaN(a.resistance) ? O : Number(a.resistance))
                          ? u / c
                          : u / -c),
                      (h =
                        (f =
                          "function" == typeof t[s]
                            ? t[
                                s.indexOf("set") ||
                                "function" != typeof t["get" + s.substr(3)]
                                  ? s
                                  : "get" + s.substr(3)
                              ]()
                            : t[s] || 0) + M(u, x, l, T)),
                      void 0 !== a.end &&
                        ((a = k(
                          a,
                          g && s in g ? g : h,
                          a.max,
                          a.min,
                          s,
                          w.radius
                        )),
                        (r || I) && (w[s] = A(a, w[s], "end"))),
                      void 0 !== a.max && h > Number(a.max) + 1e-10
                        ? ((_ = a.unitFactor || E.defaultUnitFactors[s] || 1),
                          (p =
                            (f > a.max && a.min !== a.max) ||
                            (-15 < u * _ && u * _ < 45)
                              ? i + 0.1 * (n - i)
                              : L(f, a.max, u, x, T)) +
                            o <
                            b && (b = p + o))
                        : void 0 !== a.min &&
                          h < Number(a.min) - 1e-10 &&
                          ((_ = a.unitFactor || E.defaultUnitFactors[s] || 1),
                          (p =
                            (f < a.min && a.min !== a.max) ||
                            (-45 < u * _ && u * _ < 15)
                              ? i + 0.1 * (n - i)
                              : L(f, a.min, u, x, T)) +
                            o <
                            b && (b = p + o)),
                      v < p && (v = p)),
                    v < l && (v = l));
                return n < (v = b < v ? b : v) ? n : v < i ? i : v;
              }),
              t = (E.prototype = new n("throwProps"));
            return (
              ((t.constructor = E).version = "0.11.1"),
              (E.API = 2),
              (E._autoCSS = !0),
              (E.defaultResistance = 100),
              (E.defaultUnitFactors = { time: 1e3, totalTime: 1e3 }),
              (E.track = function (t, e, n) {
                return S.track(t, e, n);
              }),
              (E.untrack = function (t, e) {
                S.untrack(t, e);
              }),
              (E.isTracking = function (t, e) {
                return S.isTracking(t, e);
              }),
              (E.getVelocity = function (t, e) {
                t = S.getByTarget(t);
                return t ? t.getVelocity(e) : NaN;
              }),
              (E._cssRegister = function () {
                var g,
                  m,
                  y,
                  t = e.com.greensock.plugins.CSSPlugin;
                t &&
                  ((t = t._internals),
                  (g = t._parseToProxy),
                  (m = t._setPluginRatio),
                  (y = t.CSSPropTween),
                  t._registerComplexSpecialProp("throwProps", {
                    parser: function (t, e, n, i, o, r) {
                      r = new E();
                      var s,
                        a,
                        l,
                        u,
                        c = {},
                        f = {},
                        h = {},
                        p = {},
                        d = {},
                        _ = {};
                      for (a in ((b = {}), e))
                        "resistance" !== a &&
                          "preventOvershoot" !== a &&
                          "linkedProps" !== a &&
                          "radius" !== a &&
                          ("object" == typeof (s = e[a])
                            ? (void 0 !== s.velocity &&
                              "number" == typeof s.velocity
                                ? (c[a] = Number(s.velocity) || 0)
                                : ((u = u || S.getByTarget(t)),
                                  (c[a] =
                                    u && u.isTrackingProp(a)
                                      ? u.getVelocity(a)
                                      : 0)),
                              void 0 !== s.end && (p[a] = s.end),
                              void 0 !== s.min && (f[a] = s.min),
                              void 0 !== s.max && (h[a] = s.max),
                              s.preventOvershoot && (_[a] = !0),
                              void 0 !== s.resistance && (d[a] = s.resistance))
                            : "number" == typeof s
                            ? (c[a] = s)
                            : (u = u || S.getByTarget(t)) && u.isTrackingProp(a)
                            ? (c[a] = u.getVelocity(a))
                            : (c[a] = s || 0),
                          T[a] && i._enableTransforms(2 === T[a]));
                      for (a in ((l = g(t, c, i, o, r)),
                      (v = l.proxy),
                      (c = l.end),
                      v))
                        b[a] = {
                          velocity: c[a],
                          min: f[a],
                          max: h[a],
                          end: p[a],
                          resistance: d[a],
                          preventOvershoot: _[a],
                        };
                      return (
                        null != e.resistance && (b.resistance = e.resistance),
                        null != e.linkedProps &&
                          (b.linkedProps = e.linkedProps),
                        null != e.radius && (b.radius = e.radius),
                        e.preventOvershoot && (b.preventOvershoot = !0),
                        (o = new y(t, "throwProps", 0, 0, l.pt, 2)),
                        i._overwriteProps.pop(),
                        (o.plugin = r),
                        (o.setRatio = m),
                        (o.data = l),
                        r._onInitTween(v, b, i._tween),
                        o
                      );
                    },
                  }));
              }),
              (E.to = function (t, e, n, i, o) {
                e.throwProps || (e = { throwProps: e }),
                  0 === o && (e.throwProps.preventOvershoot = !0),
                  (I = !0);
                var r = new P(t, i || 1, e);
                return (
                  r.render(0, !0, !0),
                  (I =
                    (r.vars.css
                      ? (r.duration(
                          s(v, { throwProps: b, ease: e.ease }, n, i, o)
                        ),
                        r._delay && !r.vars.immediateRender
                          ? r.invalidate()
                          : w._onInitTween(v, x, r))
                      : (r.kill(), (r = new P(t, s(t, e, n, i, o), e))),
                    !1)),
                  r
                );
              }),
              (t._onInitTween = function (t, e, n, i) {
                (this.target = t), (this._props = []), (w = this), (x = e);
                var o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f,
                  h,
                  p,
                  d,
                  _,
                  g = n._ease,
                  m = isNaN(e.checkpoint) ? 0.05 : Number(e.checkpoint),
                  y = n._duration,
                  v = e.preventOvershoot,
                  b = 0;
                if (e.linkedProps)
                  for (
                    d = e.linkedProps.split(","), p = {}, _ = 0;
                    _ < d.length;
                    _++
                  )
                    (r = e[(o = d[_])]) &&
                      ((l =
                        void 0 !== r.velocity && "number" == typeof r.velocity
                          ? Number(r.velocity) || 0
                          : (h = h || S.getByTarget(t)) && h.isTrackingProp(o)
                          ? h.getVelocity(o)
                          : 0),
                      (s =
                        "function" == typeof t[o]
                          ? t[
                              o.indexOf("set") ||
                              "function" != typeof t["get" + o.substr(3)]
                                ? o
                                : "get" + o.substr(3)
                            ]()
                          : t[o] || 0),
                      (p[o] = s + M(l, g, y, m)));
                for (o in e)
                  if (
                    "resistance" !== o &&
                    "checkpoint" !== o &&
                    "preventOvershoot" !== o &&
                    "linkedProps" !== o &&
                    "radius" !== o
                  ) {
                    if (
                      "number" ==
                      typeof (r = "function" == typeof (r = e[o]) ? r(i, t) : r)
                    )
                      l = Number(r) || 0;
                    else if ("object" != typeof r || isNaN(r.velocity)) {
                      if (!(h = h || S.getByTarget(t)) || !h.isTrackingProp(o))
                        throw (
                          "ERROR: No velocity was defined in the throwProps tween of " +
                          t +
                          " property: " +
                          o
                        );
                      l = h.getVelocity(o);
                    } else l = Number(r.velocity);
                    (u = M(l, g, y, m)),
                      (f = 0),
                      (s = (a = "function" == typeof t[o])
                        ? t[
                            o.indexOf("set") ||
                            "function" != typeof t["get" + o.substr(3)]
                              ? o
                              : "get" + o.substr(3)
                          ]()
                        : t[o]),
                      "object" == typeof r &&
                        ((c = s + u),
                        void 0 !== r.end &&
                          ((r = k(
                            r,
                            p && o in p ? p : c,
                            r.max,
                            r.min,
                            o,
                            e.radius
                          )),
                          I && (e[o] = A(r, e[o], "end"))),
                        void 0 !== r.max && Number(r.max) < c
                          ? v || r.preventOvershoot
                            ? (u = r.max - s)
                            : (f = r.max - s - u)
                          : void 0 !== r.min &&
                            Number(r.min) > c &&
                            (v || r.preventOvershoot
                              ? (u = r.min - s)
                              : (f = r.min - s - u))),
                      (this._overwriteProps[b] = o),
                      (this._props[b++] = {
                        p: o,
                        s: s,
                        c1: u,
                        c2: f,
                        f: a,
                        r: !1,
                      });
                  }
                return !0;
              }),
              (t._kill = function (t) {
                for (var e = this._props.length; -1 < --e; )
                  null != t[this._props[e].p] && this._props.splice(e, 1);
                return n.prototype._kill.call(this, t);
              }),
              (t._mod = function (t) {
                for (var e, n = this._props, i = n.length; -1 < --i; )
                  "function" == typeof (e = t[n[i].p] || t.throwProps) &&
                    (n[i].m = e);
              }),
              (t.setRatio = function (t) {
                for (var e, n, i = this._props.length; -1 < --i; )
                  (n = (e = this._props[i]).s + e.c1 * t + e.c2 * t * t),
                    e.m
                      ? (n = e.m(n, this.target))
                      : 1 === t &&
                        (n = ((1e4 * n + (n < 0 ? -0.5 : 0.5)) | 0) / 1e4),
                    e.f ? this.target[e.p](n) : (this.target[e.p] = n);
              }),
              n.activate([E]),
              E
            );
          },
          !0
        ),
          i._gsDefine(
            "utils.VelocityTracker",
            ["TweenLite"],
            function (s) {
              function a(t, e, n) {
                (this.p = t),
                  (this.f = e),
                  (this.v1 = this.v2 = 0),
                  (this.t1 = this.t2 = d.time),
                  (this.css = !1),
                  (this.type = ""),
                  (this._prev = null),
                  n && ((this._next = n)._prev = this);
              }
              function e() {
                var t,
                  e,
                  n = r,
                  i = d.time;
                if (0.03 <= i - o)
                  for (o = i; n; ) {
                    for (e = n._firstVP; e; )
                      ((t = e.css
                        ? p(n.target, e.p)
                        : e.f
                        ? n.target[e.p]()
                        : n.target[e.p]) !== e.v1 ||
                        0.15 < i - e.t1) &&
                        ((e.v2 = e.v1), (e.v1 = t), (e.t2 = e.t1), (e.t1 = i)),
                        (e = e._next);
                    n = n._next;
                  }
              }
              function l(t) {
                (this._lookup = {}),
                  (this.target = t),
                  (this.elem = !(!t.style || !t.nodeType)),
                  n ||
                    (d.addEventListener("tick", e, null, !1, -100),
                    (o = d.time),
                    (n = !0)),
                  r && ((this._next = r)._prev = this),
                  (r = this);
              }
              var r,
                n,
                o,
                u = /([A-Z])/g,
                c = {},
                t = i.document,
                f = {
                  x: 1,
                  y: 1,
                  z: 2,
                  scale: 1,
                  scaleX: 1,
                  scaleY: 1,
                  rotation: 1,
                  rotationZ: 1,
                  rotationX: 2,
                  rotationY: 2,
                  skewX: 1,
                  skewY: 1,
                  xPercent: 1,
                  yPercent: 1,
                },
                h = t.defaultView
                  ? t.defaultView.getComputedStyle
                  : function () {},
                p = function (t, e, n) {
                  var i = (t._gsTransform || c)[e];
                  return i || 0 === i
                    ? i
                    : (t.style[e]
                        ? (i = t.style[e])
                        : (n = n || h(t, null))
                        ? (i =
                            n[e] ||
                            n.getPropertyValue(e) ||
                            n.getPropertyValue(
                              e.replace(u, "-$1").toLowerCase()
                            ))
                        : t.currentStyle && (i = t.currentStyle[e]),
                      parseFloat(i) || 0);
                },
                d = s.ticker,
                _ = (l.getByTarget = function (t) {
                  for (var e = r; e; ) {
                    if (e.target === t) return e;
                    e = e._next;
                  }
                }),
                t = l.prototype;
              return (
                (t.addProp = function (t, e) {
                  var n, i, o, r;
                  this._lookup[t] ||
                    ((o = (i = "function" == typeof (n = this.target)[t])
                      ? this._altProp(t)
                      : t),
                    (r = this._firstVP),
                    (this._firstVP =
                      this._lookup[t] =
                      this._lookup[o] =
                      r =
                        new a(o !== t && 0 === t.indexOf("set") ? o : t, i, r)),
                    (r.css =
                      this.elem &&
                      (void 0 !== this.target.style[r.p] || f[r.p])),
                    r.css &&
                      f[r.p] &&
                      !n._gsTransform &&
                      s.set(n, { x: "+=0", overwrite: !1 }),
                    (r.type =
                      e || (r.css && 0 === t.indexOf("rotation")) ? "deg" : ""),
                    (r.v1 = r.v2 = r.css ? p(n, r.p) : i ? n[r.p]() : n[r.p]));
                }),
                (t.removeProp = function (t) {
                  var e = this._lookup[t];
                  e &&
                    (e._prev
                      ? (e._prev._next = e._next)
                      : e === this._firstVP && (this._firstVP = e._next),
                    e._next && (e._next._prev = e._prev),
                    (this._lookup[t] = 0),
                    e.f && (this._lookup[this._altProp(t)] = 0));
                }),
                (t.isTrackingProp = function (t) {
                  return this._lookup[t] instanceof a;
                }),
                (t.getVelocity = function (t) {
                  var e,
                    n = this._lookup[t],
                    i = this.target;
                  if (n)
                    return (
                      (i =
                        (n.css ? p(i, n.p) : n.f ? i[n.p]() : i[n.p]) - n.v2),
                      ("rad" !== n.type && "deg" !== n.type) ||
                        ((i %= e = "rad" === n.type ? 2 * Math.PI : 360) !==
                          i % (e / 2) &&
                          (i = i < 0 ? i + e : i - e)),
                      i / (d.time - n.t2)
                    );
                  throw "The velocity of " + t + " is not being tracked.";
                }),
                (t._altProp = function (t) {
                  var e = t.substr(0, 3),
                    e =
                      ("get" === e ? "set" : "set" === e ? "get" : e) +
                      t.substr(3);
                  return "function" == typeof this.target[e] ? e : t;
                }),
                (l.getByTarget = function (t) {
                  var e = r;
                  for (
                    (t = "string" == typeof t ? s.selector(t) : t).length &&
                    t !== window &&
                    t[0] &&
                    t[0].style &&
                    !t.nodeType &&
                    (t = t[0]);
                    e;

                  ) {
                    if (e.target === t) return e;
                    e = e._next;
                  }
                }),
                (l.track = function (t, e, n) {
                  var i = _(t),
                    o = e.split(","),
                    r = o.length;
                  for (n = (n || "").split(","), i = i || new l(t); -1 < --r; )
                    i.addProp(o[r], n[r] || n[0]);
                  return i;
                }),
                (l.untrack = function (t, e) {
                  var n = _(t),
                    i = (e || "").split(","),
                    o = i.length;
                  if (n) {
                    for (; -1 < --o; ) n.removeProp(i[o]);
                    (n._firstVP && e) ||
                      (n._prev
                        ? (n._prev._next = n._next)
                        : n === r && (r = n._next),
                      n._next && (n._next._prev = n._prev));
                  }
                }),
                (l.isTracking = function (t, e) {
                  t = _(t);
                  return !!t && (!(e || !t._firstVP) || t.isTrackingProp(e));
                }),
                l
              );
            },
            !0
          );
      }),
        i._gsDefine && i._gsQueue.pop()(),
        (function () {
          "use strict";
          function t() {
            return (i.GreenSockGlobals || i).ThrowPropsPlugin;
          }
          o.exports
            ? (s(0), (o.exports = t()))
            : ((n = [s(0)]),
              void 0 !==
                (n = "function" == typeof (e = t) ? e.apply(r, n) : e) &&
                (o.exports = n));
        })();
    }.call(this, s(14));
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = n(5),
      u = s(n(34)),
      c = s(n(24)),
      f = n(3),
      s =
        ((o = a.default),
        r(h, o),
        Object.defineProperty(h.prototype, "onEnter", {
          get: function () {
            return this._onEnter.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "onExit", {
          get: function () {
            return this._onExit.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (h.prototype.__init = function () {
          (this._isInitiating = !0),
            (this._filterNodes = new u.default(this, h)),
            this._filterNodes.onAdded.sub(this.onNewAdded),
            this._filterNodes.onRemoved.sub(this.onRemoved),
            this.setupContainer(),
            o.prototype.__init.call(this),
            (this._isInitiating = !1);
        }),
        (h.prototype.setupContainer = function () {
          (this._fakeHeight = document.createElement("div")),
            this._fakeHeight.classList.add("static-fake-height"),
            (this._container = document.createElement("div")),
            this._container.classList.add("static-module"),
            (this._fakeHeight.style.position = "relative"),
            (this._fakeHeight.style.pointerEvents = "none"),
            (this._container.style.position = "absolute"),
            (this._container.style.width = "100%"),
            (this._container.style.height = "auto"),
            l.TweenLite.set(this._fakeHeight, {
              height: this.getElement().offsetHeight,
            }),
            this.getElement().parentElement.insertBefore(
              this._container,
              this.getElement()
            ),
            this.getElement().parentElement.insertBefore(
              this._fakeHeight,
              this.getElement()
            ),
            this._container.appendChild(this.getElement());
        }),
        (h.prototype.__updateStaticPageY = function () {
          this.updateStaticPageY(),
            this._filterNodes.children.forEach(function (t) {
              t.__updateStaticPageY();
            });
        }),
        (h.prototype.updateViewBounds = function (e) {
          this.staticPageY < e.y + e.height &&
          this.staticPageY + this.getHeight() > e.y
            ? (this.isEntered() || this.__enter(),
              this._filterNodes.children.forEach(function (t) {
                t.updateViewBounds(e);
              }))
            : this.isEntered() &&
              (this.__exit(),
              this._filterNodes.children.forEach(function (t) {
                t.__exit();
              }));
        }),
        (h.prototype.updateStaticPageY = function () {
          this.staticPageY = 0;
          for (var t = this.getElement(); t; )
            (this.staticPageY += t.offsetTop), (t = t.parentElement);
        }),
        (h.prototype.getHeight = function () {
          return this._height;
        }),
        (h.prototype.getWidth = function () {
          return this._width;
        }),
        (h.prototype.isEntered = function () {
          return this._isEntered;
        }),
        (h.prototype.__enter = function () {
          (this._isEntered = !0),
            this.showElementContainer(!1),
            this.enter(),
            this._onEnter.dispatch();
        }),
        (h.prototype.__exit = function () {
          (this._isEntered = !1),
            this.hideElementContainer(!1),
            this.exit(),
            this._onExit.dispatch();
        }),
        (h.prototype.enter = function () {}),
        (h.prototype.exit = function () {}),
        (h.prototype.__updateStaticSize = function () {
          this._filterNodes.children.forEach(function (t) {
            t.__updateStaticSize();
          }),
            this.updateStaticSize();
        }),
        (h.prototype.updateStaticSize = function () {
          var t = window.getComputedStyle(this.getElement());
          (this._height =
            this.getElement().offsetHeight +
            parseInt(t.marginTop) +
            parseInt(t.marginBottom)),
            (this._width =
              this.getElement().offsetWidth +
              parseInt(t.marginLeft) +
              parseInt(t.marginRight)),
            l.TweenLite.set(this._fakeHeight, {
              height: this._height,
              width: this._width,
            });
        }),
        (h.prototype.__sleep = function () {
          this._container.parentElement.appendChild(
            this._container.children[0]
          ),
            this._container.parentElement.removeChild(this._container),
            this._fakeHeight.parentElement &&
              this._fakeHeight.parentElement.removeChild(this._fakeHeight),
            o.prototype.__sleep.call(this),
            this._filterNodes.kill();
        }),
        (h.prototype.showElementContainer = function (t) {
          void 0 === t && (t = !0),
            this._container &&
              ((this._container.style.display = null),
              t &&
                this._filterNodes.children.forEach(function (t) {
                  t.showElementContainer();
                }));
        }),
        (h.prototype.hideElementContainer = function (t) {
          void 0 === t && (t = !0),
            this._container &&
              ((this._container.style.display = "none"),
              t &&
                this._filterNodes.children.forEach(function (t) {
                  t.hideElementContainer();
                }));
        }),
        h);
    function h() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._onEnter = new f.SignalDispatcher()),
        (n._onExit = new f.SignalDispatcher()),
        (n._isInitiating = !1),
        (n.staticPageY = 0),
        (n._isEntered = !1),
        (n._height = -1),
        (n._width = -1),
        (n.onNewAdded = function (t) {
          var e = n.getRoot().getComponentByType(c.default);
          e && e.calculatePageHeight();
        }),
        (n.onRemoved = function (t) {
          var e = n.getRoot().getComponentByType(c.default);
          e && e.calculatePageHeight();
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(11))),
      l = (n(70), s(n(1))),
      u = n(71),
      c = s(n(25)),
      f = s(n(26)),
      h = s(n(13)),
      p = s(n(2)),
      s =
        ((o = l.default),
        r(d, o),
        (d.prototype.build = function () {}),
        (d.prototype.awake = function () {
          var e = this;
          (this._grid = new u.Grid()),
            (this._gridContainer = this.qs(".items")),
            (this._gridItems = this.qsAll(".item")),
            this._gridItems.forEach(function (t) {
              e._grid.addItem(t), t.addEventListener("click", e.onItemClick);
            }),
            (this._images = this.getComponentsByType(c.default, !1, !0));
          for (var t = 0, n = this._images; t < n.length; t++)
            n[t].onImgLoaded.sub(this.onImageLoaded);
          a.default.Instance.onResize.sub(this.onResize), this.onResize();
        }),
        (d.prototype.getIndex = function (e) {
          var n = 0,
            i = -1;
          return (
            this._gridItems.forEach(function (t) {
              e === t ? (i = n) : (n += 1);
            }),
            i
          );
        }),
        (d.prototype.destroy = function () {
          var e = this;
          o.prototype.destroy.call(this);
          for (var t = 0, n = this._images; t < n.length; t++)
            n[t].onImgLoaded.unsub(this.onImageLoaded);
          this._gridItems.forEach(function (t) {
            t.removeEventListener("click", e.onItemClick);
          }),
            a.default.Instance.onResize.unsub(this.onResize);
        }),
        d);
    function d() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._grid = null),
        (n._gridItems = null),
        (n._images = null),
        (n._gridContainer = null),
        (n.onItemClick = function (t) {
          var e, o;
          "mobile" !== f.default.Instance.getBreakpointName() &&
            ((t = t.currentTarget),
            -1 !== (t = n.getIndex(t)) &&
              ((e = p.default.JSXCreate(
                "section",
                {
                  class: "Module ImageGridSlideshow",
                  "data-module":
                    "ImageGridSlideshow, ColorItemBackgroundBackground, CursorTarget",
                  "data-cursorName": "default",
                  "data-sortIndex": "1",
                },
                p.default.JSXCreate(
                  "div",
                  { class: "outer-container" },
                  p.default.JSXCreate(
                    "section",
                    { class: "container-with-padding top" },
                    p.default.JSXCreate("div", {
                      class: "font-style-6 column-1 title",
                      "data-module": "ColorItemTextToForeground",
                    }),
                    p.default.JSXCreate(
                      "div",
                      { class: "column-2" },
                      p.default.JSXCreate("p", {
                        class: "font-style-6 description",
                        "data-module": "ColorItemTextToForeground",
                      }),
                      p.default.JSXCreate("p", {
                        class: "font-style-6 platform",
                        "data-module": "ColorItemTextToForeground",
                      })
                    ),
                    p.default.JSXCreate(
                      "div",
                      { class: "column-3 buttons" },
                      p.default.JSXCreate(
                        "a",
                        {
                          class: "basic-button font-style-6 close-button",
                          "data-module": "ColorItemTextToForeground",
                        },
                        "Close"
                      )
                    ),
                    p.default.JSXCreate(
                      "div",
                      { class: "column-4" },
                      p.default.JSXCreate("div", {
                        class: "font-style-8 page-info",
                        "data-module":
                          "SlideshowPageInfo, ColorItemTextToForeground",
                        "data-format": "[CURRENT].[TOTAL]",
                      })
                    )
                  ),
                  p.default.JSXCreate(
                    "div",
                    {
                      class: "mask trigger",
                      "data-module": "CursorTarget",
                      "data-cursorName": "slideshow",
                      "data-sortIndex": "1",
                    },
                    p.default.JSXCreate("div", { class: "container" })
                  )
                )
              )).setAttribute("data-start-index", t.toString()),
              (e.querySelector(".title").innerText = n.params.plain.gridname),
              (e.querySelector(".description").innerText =
                n.params.plain.title),
              (e.querySelector(".platform").innerText =
                n.params.plain.category),
              (o = e.querySelector(".container")),
              n._gridItems.forEach(function (t) {
                var e,
                  n,
                  i = t.querySelector("img"),
                  t = t.querySelector(".Module");
                t.classList.contains("ImageModule")
                  ? ((n = (e = t.cloneNode(!0)).querySelector(
                      "img"
                    )).setAttribute("data-src", i.getAttribute("data-src")),
                    n.setAttribute("src", ""),
                    n.setAttribute(
                      "data-aspectratio",
                      i.getAttribute("data-aspectratio")
                    ),
                    (n.style.width = null),
                    (n.style.height = null),
                    (n.style.objectFit = null),
                    o.appendChild(e))
                  : t.classList.contains("VideoModule") &&
                    ((e = t.cloneNode(!0)).setAttribute(
                      "data-autoplay",
                      "true"
                    ),
                    (t = e.querySelector("video")) && (t.autoplay = !0),
                    (n = e.querySelector("img")).setAttribute(
                      "data-src",
                      i.getAttribute("data-src")
                    ),
                    n.setAttribute("src", ""),
                    n.setAttribute(
                      "data-aspectratio",
                      i.getAttribute("data-aspectratio")
                    ),
                    (n.style.width = null),
                    (n.style.height = null),
                    (n.style.objectFit = null),
                    o.appendChild(e));
              }),
              h.default.addChild(e, n.getParent())));
        }),
        (n.onImageLoaded = function () {
          n.onResize();
        }),
        (n.onResize = function () {
          n._grid.resize({
            width: n._gridContainer.offsetWidth,
            numberOfColumns:
              "mobile" === f.default.Instance.getBreakpointName() ? 1 : 4,
            gutter: 15,
            closeSmallerGapsTreshold:
              "mobile" === f.default.Instance.getBreakpointName()
                ? void 0
                : 0.2,
            fixMisalignmentsTreshold:
              "mobile" === f.default.Instance.getBreakpointName() ? void 0 : 15,
          }),
            (n._gridContainer.style.height = n._grid.getHeight() + "px");
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    function i() {
      (this._columns = []), (this._settings = void 0), (this._items = []);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Grid = void 0),
      (i.prototype.addItem = function (t) {
        this._items.push(t), void 0 !== this._settings && this.positionItem(t);
      }),
      (i.prototype.resize = function (t) {
        var e = this,
          t =
            ((this._settings = t),
            void 0 === this._settings.ySpacing &&
              (this._settings.ySpacing = this._settings.gutter),
            this._settings.gutter * (this._settings.numberOfColumns - 1));
        (this._columnWidth =
          (this._settings.width - t) / this._settings.numberOfColumns),
          (this._columns = []);
        for (var n = 0; n < this._settings.numberOfColumns; n += 1)
          this._columns[n] = {
            height: 0,
            index: n,
            blocked: this.isColumnBlocked(n),
          };
        this.preResize(),
          this._items.forEach(function (t) {
            e.positionItem(t);
          }),
          this.postResize();
      }),
      (i.prototype.preResize = function () {
        for (var t = this._items.length, e = 0; e < t; e += 1) {
          var n = this._items[e];
          (n.style.height = null),
            (n.style.border = null),
            n.querySelector("img");
        }
      }),
      (i.prototype.postResize = function () {
        if (
          !(this._settings.numberOfColumns <= 1) &&
          this._settings.fixMisalignmentsTreshold &&
          0 < this._settings.fixMisalignmentsTreshold
        )
          for (var t = this._items.length, e = 0; e < t; e += 1) {
            var n,
              i = this._items[e],
              o = this.getTheClosestItemOnYAxis(i, 15);
            void 0 !== o &&
              ((n = i.offsetTop + i.offsetHeight),
              (o = o.offsetTop + o.offsetHeight),
              (i.style.height = i.offsetHeight + (o - n) + "px"),
              (o = i.querySelector(".grid-image")) &&
                ((o.style.objectFit = "cover"),
                (o.style.width = "100%"),
                (o.style.height = "100%")));
          }
      }),
      (i.prototype.getTheClosestItemOnYAxis = function (t, e) {
        void 0 === e && (e = 10);
        for (
          var n = this._items.length,
            i = t.offsetTop + t.offsetHeight,
            o = void 0,
            r = 0,
            s = 0;
          s < n;
          s += 1
        ) {
          var a,
            l = this._items[s];
          l !== t &&
            ((a = l.offsetTop + l.offsetHeight - i) < 0 ||
              e < a ||
              a < r ||
              ((o = l), (r = a)));
        }
        return o;
      }),
      (i.prototype.positionItem = function (t) {
        t.classList.contains("first") && t.classList.remove("first");
        var e = t.offsetWidth,
          n = t.offsetHeight,
          i = Math.round(e / (this._columnWidth + this._settings.gutter)),
          e = this.getAllPossibleComlumns(i),
          o = (e = e.sort(function (t, e) {
            return t.startY - e.startY;
          }))[0].startXIndex,
          e = e[0].startY,
          r = this.getHighestColumnInSpan(0, this._settings.numberOfColumns);
        if (!0 === this._settings.alignWithNewLine && 0 === o)
          for (var s = 0; s < this._settings.numberOfColumns; s += 1)
            this._columns[s].height = r;
        if (
          !0 === this._settings.closeSmallGapsIfOverlappingToTheLeft &&
          0 !== o &&
          r < e + n
        )
          for (o = 0, e = r, s = 0; s < this._settings.numberOfColumns; s += 1)
            this._columns[s].height = r;
        if (
          void 0 !== this._settings.closeSmallerGapsTreshold &&
          2 < this._settings.numberOfColumns
        ) {
          for (var a = 0, s = 0; s < this._settings.numberOfColumns; s += 1)
            s !== o && (a += this._columns[s].height);
          var l =
            a / (this._settings.numberOfColumns - 1) - this._columns[o].height;
          if (
            0 < l &&
            l < this._columnWidth * this._settings.closeSmallerGapsTreshold
          ) {
            e = r;
            for (s = 0; s < this._settings.numberOfColumns; s += 1)
              this._columns[s].height = r;
          }
        }
        for (
          var l = this._columns[o],
            u = 0,
            u =
              (0 !== o && (u = this._settings.gutter * o),
              o * this._columnWidth + u),
            c = !1,
            f =
              (0 === l.height && (t.classList.add("first"), (c = !0)),
              c || (e += this._settings.ySpacing),
              (t.style.position = "absolute"),
              (t.style.left = u + "px"),
              (t.style.top = e + "px"),
              e + n),
            h = 0;
          h < i;
          h += 1
        ) {
          s = o + h;
          this._columns[s].height = f;
        }
      }),
      (i.prototype.isColumnBlocked = function (t) {
        return (
          !!this._settings.blockedColumns &&
          !!this._settings.blockedColumns &&
          !(t >= this._settings.blockedColumns.length) &&
          !0 === this._settings.blockedColumns[t]
        );
      }),
      (i.prototype.getAllPossibleComlumns = function (t) {
        for (
          var e = !0, n = this.getColumnHeightClone(), i = new Array(), o = 0;
          o < this._settings.numberOfColumns;
          o += 1
        ) {
          var r = n[o],
            s = r.index,
            e = (r.height, !0);
          if (!0 === (e = s + t > this._settings.numberOfColumns ? !1 : e))
            for (var a = 0; a < t; a += 1)
              !0 === this._columns[s + a].blocked && (e = !1);
          1 == e &&
            i.push({
              startXIndex: s,
              startY: this.getHighestColumnInSpan(s, t),
            });
        }
        return i;
      }),
      (i.prototype.getHighestColumnInSpan = function (t, e) {
        for (var n = t + e, i = 0, o = t; o < n; o += 1) {
          var r = this._columns[o].height;
          i < r && (i = r);
        }
        return i;
      }),
      (i.prototype.getHeight = function () {
        return this.getColumnHeightClone()[this._settings.numberOfColumns - 1]
          .height;
      }),
      (i.prototype.getColumnHeightClone = function () {
        var e = new Array();
        return (
          this._columns.forEach(function (t) {
            e.push({ height: t.height, index: t.index });
          }),
          e.sort(function (t, e) {
            return t.height - e.height;
          })
        );
      }),
      (e.Grid = i);
  },
  function (t, e, n) {
    "use strict";
    function i(t, e) {
      (this._name = t), (this._width = e);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (i.prototype.getName = function () {
        return this._name;
      }),
      (i.prototype.getWidth = function () {
        return this._width;
      }),
      (e.default = i);
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(1))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.build = function () {
          o.prototype.build.call(this),
            "" === this.getElement().innerHTML &&
              (this.getElement().style.display = "none");
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(75), s(n(1))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.build = function () {
          for (
            var t = this.getElement().nextElementSibling,
              e = t.classList.length,
              n = 0;
            n < e;
            n += 1
          ) {
            var i = t.classList[n];
            "Module" !== i &&
              this.getElement().setAttribute(
                "data-next-" + i.toLowerCase(),
                ""
              );
          }
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(77), s(n(1))),
      l = s(n(7)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          this._renderItem = l.default.Instance.add(this.checkinView, 5);
        }),
        (u.prototype.sleep = function () {
          null !== this._renderItem &&
            (l.default.Instance.remove(this._renderItem),
            (this._renderItem = null));
        }),
        u);
    function u() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._renderItem = null),
        (n.checkinView = function (t, e) {
          n.viewInfo.updateRect(),
            n.viewInfo.isInView()
              ? (n.getElement().style.display = "block")
              : (n.getElement().style.display = "none");
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(79), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(35), s(n(4))),
      l = s(n(2)),
      u = s(n(36)),
      s =
        ((o = l.default),
        r(c, o),
        (c.prototype.build = function () {
          (this._preloaderMobileGfx = this.qs(".preloader-mobile")),
            (this._preloaderMobileGfx.style.display = "none"),
            a.default.CONTENT.onLoadingStart.sub(this.onLoadStart),
            a.default.CONTENT.onLoadingDone.sub(this.onLoadDone);
        }),
        (c.prototype.awake = function () {
          o.prototype.awake.call(this);
        }),
        (c.prototype.show = function () {
          null !== this._showTimeout &&
            (clearTimeout(this._showTimeout), (this._showTimeout = null)),
            (this._showTimeout = setTimeout(this.showDelayed, 200));
        }),
        (c.prototype.hide = function () {
          null !== this._showTimeout &&
            (clearTimeout(this._showTimeout), (this._showTimeout = null)),
            this.hideDelayed();
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t._isLoading = !1),
        (t._showTimeout = null),
        (t.onLoadStart = function () {
          (t._isLoading = !0), t.show();
        }),
        (t.onLoadDone = function () {
          (t._isLoading = !1), t.hide();
        }),
        (t.showDelayed = function () {
          u.default.Instance.setForcedCursor("preloader"),
            (t._preloaderMobileGfx.style.display = "block");
        }),
        (t.hideDelayed = function () {
          u.default.Instance.setForcedCursor(null),
            (t._preloaderMobileGfx.style.display = "none");
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(10))),
      l = n(5),
      u = s(n(6)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.getElement = function () {
          return (
            (this._element.style.position = "absolute"),
            (this._element.style.left = "-50px"),
            (this._element.style.top = "-50px"),
            this._element
          );
        }),
        (c.prototype.activate = function (t) {
          void 0 === t && (t = null),
            l.TweenLite.killTweensOf([this.pt1, this.pt2]),
            (this.pt1.x = 50),
            (this.pt1.y = 50),
            (this.pt2.x = 50),
            (this.pt2.y = 50);
          l.TweenLite.to(this.pt1, 0.4, { x: 34, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt2, 0.4, {
              x: 66,
              ease: l.Expo.easeOut,
              onComplete: this.animationDone,
            }),
            this.startRender();
        }),
        (c.prototype.render = function (t, e) {
          o.prototype.render.call(this, t, e);
          t =
            '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' +
            this.pt1.x +
            '" y1="' +
            this.pt1.y +
            '" x2="' +
            this.pt2.x +
            '" y2="' +
            this.pt2.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t'</svg>";
          this._element.innerHTML = t;
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.pt1 = { x: 50, y: 50 }),
        (t.pt2 = { x: 50, y: 50 }),
        (t._element = document.createElement("div")),
        (t.animationDone = function () {
          o.prototype.stopRender.call(t);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(10))),
      l = n(5),
      u = s(n(6)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.getElement = function () {
          return (
            (this._element.style.position = "absolute"),
            (this._element.style.left = "-50px"),
            (this._element.style.top = "-50px"),
            this._element.classList.add("cursor"),
            this._element
          );
        }),
        (c.prototype.activate = function (t) {
          void 0 === t && (t = null),
            l.TweenLite.killTweensOf([
              this.pt1,
              this.pt2,
              this.pt3,
              this.pt4,
              this.pt5,
              this.pt6,
              this.pt7,
              this.pt8,
              this.pt9,
              this.pt10,
            ]),
            (this.pt1.x = 50),
            (this.pt1.y = 50),
            (this.pt2.x = 50),
            (this.pt2.y = 50);
          (this.pt3.x = 24),
            (this.pt3.y = 50.5),
            (this.pt4.x = 50),
            (this.pt4.y = 50.5),
            (this.pt5.x = 24),
            (this.pt5.y = 49.5),
            (this.pt6.x = 50),
            (this.pt6.y = 49.5),
            (this.pt7.x = 76),
            (this.pt7.y = 50.5),
            (this.pt8.x = 50),
            (this.pt8.y = 50.5),
            (this.pt9.x = 76),
            (this.pt9.y = 49.5),
            (this.pt10.x = 50),
            (this.pt10.y = 49.5),
            l.TweenLite.to(this.pt1, 0.4, { x: 24, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt2, 0.4, { x: 76, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt4, 0.4, {
              x: 36,
              y: 38.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt6, 0.4, {
              x: 36,
              y: 61.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt8, 0.4, {
              x: 64,
              y: 38.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt10, 0.4, {
              x: 64,
              y: 61.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
              onComplete: this.animationDone,
            }),
            this.startRender();
        }),
        (c.prototype.render = function (t, e) {
          o.prototype.render.call(this, t, e);
          t =
            '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' +
            this.pt1.x +
            '" y1="' +
            this.pt1.y +
            '" x2="' +
            this.pt2.x +
            '" y2="' +
            this.pt2.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt3.x +
            '" y1="' +
            this.pt3.y +
            '" x2="' +
            this.pt4.x +
            '" y2="' +
            this.pt4.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt5.x +
            '" y1="' +
            this.pt5.y +
            '" x2="' +
            this.pt6.x +
            '" y2="' +
            this.pt6.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt7.x +
            '" y1="' +
            this.pt7.y +
            '" x2="' +
            this.pt8.x +
            '" y2="' +
            this.pt8.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt9.x +
            '" y1="' +
            this.pt9.y +
            '" x2="' +
            this.pt10.x +
            '" y2="' +
            this.pt10.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t'</svg>";
          this._element.innerHTML = t;
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.pt1 = { x: 50, y: 50 }),
        (t.pt2 = { x: 50, y: 50 }),
        (t.pt3 = { x: 50, y: 50 }),
        (t.pt4 = { x: 50, y: 50 }),
        (t.pt5 = { x: 50, y: 50 }),
        (t.pt6 = { x: 50, y: 50 }),
        (t.pt7 = { x: 50, y: 50 }),
        (t.pt8 = { x: 50, y: 50 }),
        (t.pt9 = { x: 50, y: 50 }),
        (t.pt10 = { x: 50, y: 50 }),
        (t._element = document.createElement("div")),
        (t.animationDone = function () {
          o.prototype.stopRender.call(t);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(10))),
      l = n(5),
      u = s(n(6)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.getElement = function () {
          return (
            (this._element.style.position = "absolute"),
            (this._element.style.left = "-50px"),
            (this._element.style.top = "-50px"),
            this._element.classList.add("cursor"),
            l.TweenLite.set(this._element, { rotation: -45 }),
            this._element
          );
        }),
        (c.prototype.activate = function (t) {
          void 0 === t && (t = null),
            l.TweenLite.killTweensOf([
              this.pt1,
              this.pt2,
              this.pt3,
              this.pt4,
              this.pt5,
              this.pt6,
              this.pt7,
              this.pt8,
              this.pt9,
              this.pt10,
            ]),
            (this.pt1.x = 50),
            (this.pt1.y = 50),
            (this.pt2.x = 50),
            (this.pt2.y = 50);
          (this.pt3.x = 24),
            (this.pt3.y = 50.5),
            (this.pt4.x = 50),
            (this.pt4.y = 50.5),
            (this.pt5.x = 24),
            (this.pt5.y = 49.5),
            (this.pt6.x = 50),
            (this.pt6.y = 49.5),
            (this.pt7.x = 76),
            (this.pt7.y = 50.5),
            (this.pt8.x = 50),
            (this.pt8.y = 50.5),
            (this.pt9.x = 76),
            (this.pt9.y = 49.5),
            (this.pt10.x = 50),
            (this.pt10.y = 49.5),
            l.TweenLite.to(this.pt1, 0.4, { x: 24, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt2, 0.4, { x: 76, ease: l.Expo.easeOut }),
            l.TweenLite.to(this.pt4, 0.4, {
              x: 36,
              y: 38.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt6, 0.4, {
              x: 36,
              y: 61.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt8, 0.4, {
              x: 64,
              y: 38.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
            }),
            l.TweenLite.to(this.pt10, 0.4, {
              x: 64,
              y: 61.5,
              ease: l.Expo.easeOut,
              delay: 0.1,
              onComplete: this.animationDone,
            }),
            this.startRender();
        }),
        (c.prototype.render = function (t, e) {
          o.prototype.render.call(this, t, e);
          t =
            '<svg height="100" width="100">\' +\n\t\t\t\'<line x1="' +
            this.pt1.x +
            '" y1="' +
            this.pt1.y +
            '" x2="' +
            this.pt2.x +
            '" y2="' +
            this.pt2.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt3.x +
            '" y1="' +
            this.pt3.y +
            '" x2="' +
            this.pt4.x +
            '" y2="' +
            this.pt4.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt5.x +
            '" y1="' +
            this.pt5.y +
            '" x2="' +
            this.pt6.x +
            '" y2="' +
            this.pt6.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt7.x +
            '" y1="' +
            this.pt7.y +
            '" x2="' +
            this.pt8.x +
            '" y2="' +
            this.pt8.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t\t'<line x1=\"" +
            this.pt9.x +
            '" y1="' +
            this.pt9.y +
            '" x2="' +
            this.pt10.x +
            '" y2="' +
            this.pt10.y +
            '" style="stroke:' +
            u.default.Instance.foregroundColor +
            ";stroke-width:2\" />' +\n\t\t'</svg>";
          this._element.innerHTML = t;
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.pt1 = { x: 50, y: 50 }),
        (t.pt2 = { x: 50, y: 50 }),
        (t.pt3 = { x: 50, y: 50 }),
        (t.pt4 = { x: 50, y: 50 }),
        (t.pt5 = { x: 50, y: 50 }),
        (t.pt6 = { x: 50, y: 50 }),
        (t.pt7 = { x: 50, y: 50 }),
        (t.pt8 = { x: 50, y: 50 }),
        (t.pt9 = { x: 50, y: 50 }),
        (t.pt10 = { x: 50, y: 50 }),
        (t._element = document.createElement("div")),
        (t.animationDone = function () {
          o.prototype.stopRender.call(t);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(85), s(n(1))),
      l = s(n(12)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          l.default.Instance.addAllAtags(this.getElement());
        }),
        (u.prototype.sleep = function () {
          l.default.Instance.removeAllAtags(this.getElement());
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(87), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(89), s(n(2))),
      l = s(n(4)),
      u = s(n(21)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.build = function () {
          (this.getElement().style.textDecoration = "none"),
            (this._thisPath = u.default.getWellFormatedPath(
              this.getElement().getAttribute("href")
            )),
            this.onNewTemplate();
        }),
        (c.prototype.awake = function () {
          l.default.CONTENT.onNewPath.sub(this.onNewTemplate);
        }),
        (c.prototype.sleep = function () {
          l.default.CONTENT.onNewPath.unsub(this.onNewTemplate);
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t._isSelected = !1),
        (t.onNewTemplate = function () {
          u.default.getCurrentInternalPathAtLevel(0) === t._thisPath
            ? ((t._isSelected = !0), t.onMouseOver())
            : ((t._isSelected = !1), t.onMouseOut());
        }),
        (t.onMouseOver = function () {
          t.getElement().style.textDecoration = "underline";
        }),
        (t.onMouseOut = function () {
          t._isSelected || (t.getElement().style.textDecoration = "none");
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(91), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(93), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(95), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(97), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(99), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(102),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(104),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(106),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(108),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(110),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(112),
        s(n(1))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.build = function () {
          o.prototype.build.call(this);
          var t = this.qs(".case-header");
          t.innerHTML = t.innerHTML.replace(
            "®",
            '<span class="super">®</span>'
          );
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(114),
        s(n(1))),
      l = s(n(12)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          o.prototype.awake.call(this),
            l.default.Instance.addAllAtags(this.getElement());
          var t = this.qs(".view-all"),
            e = this.qs(".total-cases");
          null !== t && e.classList.add("hide-on-mobile");
        }),
        (u.prototype.sleep = function () {
          l.default.Instance.removeAllAtags(this.getElement());
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(116),
        s(n(1))),
      l = s(n(12)),
      u = s(n(4)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.build = function () {
          (this._toogleButton = this.qs(".open-menu-button")),
            (this._content = this.qs(".content")),
            (this._openIcon = this.qs(".open-icon")),
            (this._closeIcon = this.qs(".close-icon")),
            (this._logoOpen = this.qs(".logo-open")),
            (this._logoClosed = this.qs(".logo-closed")),
            (this._content.style.pointerEvents = "none");
        }),
        (c.prototype.awake = function () {
          this._toogleButton.addEventListener("click", this.onToggleMenu),
            l.default.Instance.addAllAtags(this.getElement()),
            u.default.CONTENT.onNewPath.sub(this.onNewPath);
        }),
        (c.prototype.sleep = function () {
          this._toogleButton.removeEventListener("click", this.onToggleMenu),
            l.default.Instance.removeAllAtags(this.getElement()),
            u.default.CONTENT.onNewPath.unsub(this.onNewPath);
        }),
        (c.prototype.showMenu = function () {
          (this._content.style.display = "block"),
            (this._openIcon.style.display = "none"),
            (this._closeIcon.style.display = "block"),
            (this._content.style.pointerEvents = "auto"),
            (this._logoClosed.style.display = "none"),
            (this._logoOpen.style.display = "block");
        }),
        (c.prototype.hideMenu = function () {
          (this._content.style.display = "none"),
            (this._openIcon.style.display = "block"),
            (this._closeIcon.style.display = "none"),
            (this._content.style.pointerEvents = "none"),
            (this._logoClosed.style.display = "block"),
            (this._logoOpen.style.display = "none");
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onNewPath = function () {
          t.hideMenu();
        }),
        (t.onToggleMenu = function () {
          "none" == window.getComputedStyle(t._content).display
            ? t.showMenu()
            : t.hideMenu();
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(118),
        s(n(1))),
      l = s(n(42)),
      u = s(n(7)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.build = function () {
          this._crazyLines = this.getComponentByType(l.default);
        }),
        (c.prototype.awake = function () {
          this._renderItem = u.default.Instance.add(this.checkinView, 5);
        }),
        (c.prototype.sleep = function () {
          null !== this._renderItem &&
            (u.default.Instance.remove(this._renderItem),
            (this._renderItem = null)),
            this._crazyLines.stopRender();
        }),
        c);
    function c() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._renderItem = null),
        (n.checkinView = function (t, e) {
          n.viewInfo.updateRect(),
            n.viewInfo.isInView()
              ? n._crazyLines.startRender()
              : n._crazyLines.stopRender();
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(120),
        s(n(1))),
      l = s(n(12)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          o.prototype.awake.call(this),
            l.default.Instance.addAllAtags(this.getElement());
          var t = this.qs(".view-all"),
            e = this.qs(".total-cases");
          null !== t && e.classList.add("hide-on-mobile");
        }),
        (u.prototype.sleep = function () {
          l.default.Instance.removeAllAtags(this.getElement());
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(122),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(124),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(126),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(128),
        s(n(1))),
      l = s(n(26)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.build = function () {
          o.prototype.build.call(this),
            (this._container1 = this.qs(".container-1")),
            (this._container2 = this.qs(".container-2")),
            this.onNewBreakpoint();
        }),
        (u.prototype.awake = function () {
          o.prototype.awake.call(this),
            l.default.Instance.onNewBreakpoint.sub(this.onNewBreakpoint);
        }),
        (u.prototype.sleep = function () {
          l.default.Instance.onNewBreakpoint.unsub(this.onNewBreakpoint);
        }),
        u);
    function u() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t._container1 = null),
        (t._container2 = null),
        (t.onNewBreakpoint = function () {
          l.default.Instance.getBreakpointName() ===
          l.default.Instance.mobile.getName()
            ? ("" === t._container1.innerHTML &&
                (t._container2.style.marginTop = "0px"),
              "" === t._container2.innerHTML &&
                (t._container1.style.marginTop = "0px"),
              "" === t._container1.innerHTML &&
                (t._container1.style.display = "none"),
              "" === t._container2.innerHTML &&
                (t._container2.style.display = "none"))
            : ((t._container1.style.marginTop = null),
              (t._container2.style.marginTop = null),
              (t._container1.style.display = "block"),
              (t._container2.style.display = "block"));
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(130),
        s(n(43))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(132),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(134),
        s(n(44))),
      l = s(n(45)),
      u = s(n(13)),
      s = s(n(41)),
      n =
        ((o = s.default),
        r(c, o),
        (c.prototype.build = function () {
          this.moveCaseInfo(), o.prototype.build.call(this);
        }),
        (c.prototype.moveCaseInfo = function () {
          var t,
            e = this.getParent().getComponentByType(l.default);
          null != e &&
            null != (e = e.getComponentByType(a.default)) &&
            ((t = this.qs(".info")),
            (e = e.getElement().querySelector(".info").cloneNode(!0)),
            u.default.replaceChild(e, t));
        }),
        c);
    function c() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(138),
        s(n(1))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.load = function () {}),
        (a.prototype.build = function () {}),
        (a.prototype.awake = function () {}),
        a);
    function a() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (t.awakeCount = 0), t;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = n(5),
      u = s(n(15)),
      c = s(n(4)),
      s =
        ((o = a.default),
        r(f, o),
        (f.prototype.awake = function () {
          l.TweenMax.set(this.getElement(), {
            width: 0,
            backgroundColor: u.default.getRandomHex(!0),
          });
        }),
        (f.prototype.transitionIn = function (t) {
          l.TweenMax.to(this.getElement(), 0.5 + Math.random(), {
            width: 0.5 * c.default.RESIZE.windowWidth,
            ease: l.Expo.easeInOut,
            onComplete: function () {
              t.done();
            },
          });
        }),
        (f.prototype.transitionOut = function (t) {
          t.done();
        }),
        f);
    function f() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(141),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(143),
        s(n(1))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(145),
        s(n(146))),
      l = s(n(2)),
      u = s(n(24)),
      s =
        ((o = l.default),
        r(c, o),
        (c.prototype.awake = function () {
          this.getElement().classList.add("ready"),
            (this._rawText = this.getElement().innerHTML),
            (this._json = JSON.parse(this._rawText)),
            this.createSegments(),
            this.draw(),
            this.dispatchSizeUpdate();
        }),
        (c.prototype.sleep = function () {
          this._mainSegment.onToggle.unsub(this.dispatchSizeUpdate);
        }),
        (c.prototype.createSegments = function () {
          (this._mainSegment = new a.default(this._json, "data", 0, "")),
            this._mainSegment.onToggle.sub(this.dispatchSizeUpdate);
        }),
        (c.prototype.draw = function () {
          (this.getElement().innerHTML = ""),
            this.getElement().appendChild(this._mainSegment.createElement());
        }),
        c);
    function c() {
      var e = (null !== o && o.apply(this, arguments)) || this;
      return (
        (e.dispatchSizeUpdate = function () {
          var t = e.getRoot().getComponentByType(u.default);
          t && t.calculatePageHeight();
        }),
        e
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      s,
      o =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), r(n(27))),
      l = r(n(46)),
      u = r(n(147)),
      c = r(n(2)),
      f = n(3),
      h = r(n(148)),
      r =
        ((s = a.default),
        o(p, s),
        Object.defineProperty(p.prototype, "onToggle", {
          get: function () {
            return this._onToggle.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(p.prototype, "isNumericArray", {
          get: function () {
            return this._numericArray;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (p.checkIfNumericArray = function (t) {
          return Array.isArray(t);
        }),
        Object.defineProperty(p.prototype, "length", {
          get: function () {
            return this._length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(p.prototype, "type", {
          get: function () {
            return this._numericArray ? "array" : "object";
          },
          enumerable: !1,
          configurable: !0,
        }),
        (p.prototype.loopThroughObject = function (t) {
          for (var e in t) {
            var n;
            t.hasOwnProperty(e) &&
              (null == (n = t[(e = e)])
                ? this._children.push(new h.default(e, this.path, this))
                : "object" == typeof n
                ? this._children.push(
                    new p(n, e, this._indentationLevel + 1, this.path, this)
                  )
                : "string" == typeof n
                ? this._children.push(new u.default(n, e, this.path, this))
                : this._children.push(new l.default(n, e, this.path, this)));
          }
        }),
        (p.prototype.createElement = function () {
          var e = this,
            t = this.getContainer(),
            n =
              (t.classList.add("dump-array-element"),
              c.default.JSXCreate(
                "div",
                { class: "dump-item dump-array" },
                c.default.JSXCreate("div", { class: "name" }, this.name),
                c.default.JSXCreate(
                  "div",
                  { class: "type" },
                  c.default.JSXCreate("p", null, this.type),
                  c.default.JSXCreate(
                    "div",
                    { class: "length" },
                    this.length.toString()
                  )
                )
              )),
            n =
              (n.addEventListener("mouseup", this.toggleFold),
              t.appendChild(n),
              (this._childContainer = c.default.JSXCreate("div", {
                class: "children-container",
              })),
              (this._childContainer.style.marginLeft =
                this._indentationLevel + 10 + "px"),
              t.appendChild(this._childContainer),
              c.default.JSXCreate("div", { class: "array-indent-line" }));
          return (
            this._childContainer.appendChild(n),
            this._children.forEach(function (t) {
              e._childContainer.appendChild(t.createElement());
            }),
            t
          );
        }),
        p);
    function p(t, e, n, i, o) {
      void 0 === n && (n = 0);
      var r = s.call(this, e, i, o) || this;
      return (
        (r._onToggle = new f.SignalDispatcher()),
        (r._children = Array()),
        (r._indentationLevel = 0),
        (r._open = !0),
        (r._numericArray = !0),
        (r.toggleFold = function () {
          (r._open = !r._open),
            r.copyToClipboard(r.path),
            r._open
              ? r._childContainer.classList.remove("closed")
              : r._childContainer.classList.add("closed"),
            r._onToggle.dispatch();
        }),
        (r._length = r.findLength(t)),
        (r._indentationLevel = n),
        (r._numericArray = p.checkIfNumericArray(t)),
        r.loopThroughObject(t),
        r
      );
    }
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(46))),
      a = n(28),
      n =
        ((o = s.default),
        r(l, o),
        (l.prototype.checkIfHasTrailingWhitespace = function (t) {
          return null !== t.match(/\s+$/);
        }),
        (l.prototype.createElement = function () {
          return (
            this.checkIfHasTrailingWhitespace(this.value) &&
              this.addWarning("Trailing whitespace", a.Severity.severe),
            o.prototype.createElement.call(this)
          );
        }),
        l);
    function l() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(27))),
      l = n(28),
      u = s(n(2)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.createElement = function () {
          this.getContainer().classList.add("dump-variable-element");
          var t = u.default.JSXCreate(
            "div",
            { class: "dump-item dump-item--null" },
            u.default.JSXCreate("div", { class: "name" }, this.name),
            u.default.JSXCreate(
              "div",
              { class: "type" },
              u.default.JSXCreate("p", null, "null")
            )
          );
          return (
            this.getContainer().appendChild(t),
            t.classList.add("dump-" + this.type),
            this.addWarning("null", l.Severity.severe),
            this.getContainer()
          );
        }),
        c);
    function c(t, e, n) {
      t = o.call(this, t, e, n) || this;
      return (t.length = 0), (t.type = "null"), t;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(150),
        s(n(2))),
      l = s(n(4)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          document.addEventListener("keyup", this.onKeyUp),
            document.addEventListener("keydown", this.onKeyDown),
            (this._columns = [].slice.call(
              this.getElement().querySelectorAll(".columns")
            )),
            "true" == window.localStorage.getItem("DebugGridModule_visible") &&
              ((this._visible = !0), this.updateVisibility());
        }),
        (u.sortBreakpoints = function (t, e) {
          return parseInt(t.dataset.size) < parseInt(e.dataset.size)
            ? 1
            : parseInt(t.dataset.size) > parseInt(e.dataset.size)
            ? -1
            : 0;
        }),
        (u.prototype.updateVisibility = function () {
          this._visible
            ? (this.getElement().classList.add("DebugGridModule--visible"),
              this.onResize(),
              document.addEventListener("mousemove", this.mouseMove),
              l.default.RESIZE.onResize.sub(this.onResize))
            : (this.getElement().classList.remove("DebugGridModule--visible"),
              this.contract(),
              document.removeEventListener("mousemove", this.mouseMove),
              l.default.RESIZE.onResize.unsub(this.onResize));
        }),
        (u.prototype.expand = function () {}),
        (u.prototype.contract = function () {}),
        (u.prototype.sleep = function () {
          document.removeEventListener("keyup", this.onKeyUp),
            document.removeEventListener("keydown", this.onKeyDown),
            document.removeEventListener("mousemove", this.mouseMove),
            l.default.RESIZE.onResize.unsub(this.onResize);
        }),
        u);
    function u() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._visible = !1),
        (n._mousePos = { x: 0, y: 0 }),
        (n.onResize = function () {
          n._columns.forEach(function (t) {
            t.classList.add("columns--hidden");
          });
          for (
            var t = (t = n._columns.filter(function (t) {
                return parseInt(t.dataset.size) <= l.default.RESIZE.windowWidth;
              })).sort(u.sortBreakpoints),
              e = 0;
            e < t.length;
            e++
          )
            0 === e
              ? t[e].classList.remove("columns--hidden")
              : t[e].classList.add("columns--hidden");
          n._activeLayout = t[0];
        }),
        (n.onKeyDown = function (t) {
          "f" === t.key && n._visible && n.expand();
        }),
        (n.onKeyUp = function (t) {
          "g" === t.key
            ? ((n._visible = !n._visible),
              window.localStorage.setItem(
                "DebugGridModule_visible",
                1 == n._visible ? "true" : "false"
              ),
              n.updateVisibility())
            : "f" === t.key && n._visible && n.contract();
        }),
        (n.mouseMove = function (t) {
          (n._mousePos.x = t.screenX), (n._mousePos.y = t.screenY);
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(152),
        s(n(2))),
      l = s(n(4)),
      u = s(n(1)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.awake = function () {
          document.addEventListener("keydown", this.onKeyDown),
            l.default.RESIZE.onResize.sub(this.onResize),
            (this._currentTemplate = l.default.CONTENT.getCurrentTemplate()),
            l.default.CONTENT.onNewTemplate.sub(this.onNewTemplate),
            "true" ==
              window.localStorage.getItem("DebugOverlayModule_visible") &&
              this.showPreviews();
        }),
        (c.prototype.sleep = function () {
          document.removeEventListener("keydown", this.onKeyDown),
            l.default.RESIZE.onResize.unsub(this.onResize),
            l.default.CONTENT.onNewTemplate.unsub(this.onNewTemplate);
        }),
        (c.prototype.getActiveBreakpoint = function () {
          var e = 0,
            t =
              (this._layouts.forEach(function (t) {
                l.default.RESIZE.windowWidth - 100 >= t && (e += 1);
              }),
              this._layouts.length - 1);
          return t < e && (e = t), this._layouts[e];
        }),
        (c.prototype.showPreviews = function () {
          if (this._currentTemplate) {
            this._visible = !0;
            var t = this.getActiveBreakpoint();
            if (t != this._activeBreakpoint) {
              (this._activeBreakpoint = t),
                this.revertToOriginalSize(),
                this.removePreviews(),
                (this._images = []),
                (this._htmlElements = []),
                (this._components = []);
              for (
                var e = this._currentTemplate.getComponentsByType(
                    u.default,
                    !1
                  ),
                  n = e.length,
                  i = 0;
                i < n;
                i += 1
              ) {
                var o = e[i],
                  r = (this._components.push(o), document.createElement("img"));
                (r.src =
                  "core/modules/DebugOverlayModule/Previews/" +
                  o.toString().split(", ")[0] +
                  "_" +
                  this._activeBreakpoint +
                  "px.png?u=" +
                  Math.random()),
                  (r.style.zIndex = "999999"),
                  (r.style.position = "absolute"),
                  (r.style.top = "0px"),
                  (r.style.pointerEvents = "none"),
                  (r.width = this._activeBreakpoint),
                  (r.style.left = "0px"),
                  (r.style.opacity = ".5"),
                  (r.style.borderBottom = "1px dashed red"),
                  (r.onerror = this.onError),
                  o.getElement().appendChild(r),
                  this._images.push(r),
                  this._htmlElements.push(o.getElement()),
                  (o.getElement().style.maxHeight = "none"),
                  o
                    .getElement()
                    .querySelectorAll("*")
                    .forEach(function (t) {
                      t instanceof HTMLElement && (t.style.maxHeight = "none");
                    });
              }
              this._resizeItems = [];
              for (
                var s = this._currentTemplate.getElement().children,
                  a = s.length,
                  i = 0;
                i < a;
                i += 1
              ) {
                var l = s[i];
                this._resizeItems.push(l),
                  (l.style.width = this._activeBreakpoint + "px");
              }
              t = document.body.querySelector(".DebugGridModule");
              t && (t.style.width = this._activeBreakpoint + "px");
            }
          }
        }),
        (c.prototype.hidePreviews = function () {
          (this._visible = !1),
            this.revertToOriginalSize(),
            this.removePreviews(),
            (this._activeBreakpoint = -1);
        }),
        (c.prototype.revertToOriginalSize = function () {
          if (null != this._resizeItems) {
            for (var t = this._resizeItems.length, e = 0; e < t; e += 1)
              (n = this._resizeItems[e]).style.width = null;
            this._resizeItems = null;
            for (var n, i = this._htmlElements.length, e = 0; e < i; e += 1)
              ((n = this._htmlElements[e]).style.maxHeight = null),
                n.querySelectorAll("*").forEach(function (t) {
                  t instanceof HTMLElement && (t.style.maxHeight = null);
                });
            var o = document.body.querySelector(".DebugGridModule");
            o && (o.style.width = null), (this._htmlElements = null);
          }
        }),
        (c.prototype.removePreviews = function () {
          if (null != this._images) {
            for (var t = this._images.length, e = 0; e < t; e += 1) {
              var n = this._images[e];
              n.parentNode.removeChild(n);
            }
            this._images = null;
          }
        }),
        c);
    function c() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._visible = !1),
        (n._images = null),
        (n._layouts = [375, 1600]),
        (n.onResize = function () {
          n._visible && n.showPreviews();
        }),
        (n.onKeyDown = function (t) {
          "p" === t.key &&
            (n._visible ? n.hidePreviews() : n.showPreviews(),
            window.localStorage.setItem(
              "DebugOverlayModule_visible",
              1 == n._visible ? "true" : "false"
            ));
        }),
        (n.onNewTemplate = function (t) {
          var e = !1;
          n._currentTemplate || (e = !0),
            (n._currentTemplate = t),
            e &&
              "true" ==
                window.localStorage.getItem("DebugOverlayModule_visible") &&
              n.showPreviews();
        }),
        (n.onError = function (t) {
          t.currentTarget;
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(18))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.build = function () {
          (this._format = this.params.plain.format),
            (null != this._format && "" != this._format) ||
              (this._format = "[CURRENT]/[TOTAL]"),
            o.prototype.build.call(this);
        }),
        (a.prototype.updateToPage = function () {
          o.prototype.updateToPage.call(this);
          var t = (t = this._format.replace(
            "[CURRENT]",
            (this.slideshow.getCurrentIndex() + 1).toString()
          )).replace("[TOTAL]", this.slideshow.getNumOfSlides().toString());
          this.getElement().innerText = t;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (i.isEmail = function (t) {
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
          t
        );
      }),
      (i.URLDecode = function (t) {
        for (var e = t.split("&"), n = e.length, i = 0; i < n; i += 1) {
          var o = e[i].split("=");
          (void 0)[o[0]] = o[1];
        }
      }),
      (i.URLEncode = function (t) {
        var e,
          n = [];
        for (e in t) n.push(e + "=" + t[e]);
        return n.join("&");
      }),
      (i.getAlphaNumeric = function (t) {
        return t.replace(/[^0-9A-Z,.]+/gi, "");
      }),
      (e.default = i);
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.backgroundChange = function (t) {
          this.getElement().style.backgroundColor = t;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.foregroundChange = function (t) {
          this.getElement().style.color = t;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      l = s(n(15)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.foregroundChange = function (t) {
          var e = window.getComputedStyle(this.getElement());
          this.getElement().style.borderBottom =
            "1px solid " +
            l.default.hexToRGB(
              t,
              this.getOpacityFromBorderStyle(e.borderBottom)
            );
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      l = s(n(15)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.foregroundChange = function (t) {
          var e = window.getComputedStyle(this.getElement());
          this.getElement().style.backgroundColor = l.default.hexToRGB(
            t,
            this.getOpacityFromBorderStyle(e.backgroundColor)
          );
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      l = s(n(15)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.foregroundChange = function (t) {
          var e = window.getComputedStyle(this.getElement());
          this.getElement().style.borderTop =
            "1px solid " +
            l.default.hexToRGB(t, this.getOpacityFromBorderStyle(e.borderTop));
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.foregroundChange = function (t) {
          this.getElement().style.fill = t;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.foregroundChange = function (t) {
          this.getElement().style.stroke = t;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(12)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          o.prototype.awake.call(this),
            this.findTarget(),
            null !== this._linkTarget &&
              this.getElement().addEventListener("click", this.onClick);
        }),
        (u.prototype.findTarget = function () {
          for (
            var t = this.getElement(),
              e = "a",
              n = (e = this.params.plain.linkpath
                ? this.params.plain.linkpath
                : e).split("/");
            0 < n.length;

          )
            (t = ".." === n[0] ? t.parentElement : t.querySelector(n[0])),
              n.splice(0, 1);
          this._linkTarget = t;
        }),
        (u.prototype.getHref = function () {
          return this._linkTarget instanceof HTMLAnchorElement
            ? this._linkTarget.href
            : this._linkTarget instanceof HTMLElement
            ? this._linkTarget.innerText
            : null;
        }),
        (u.prototype.sleep = function () {
          o.prototype.sleep.call(this),
            this.getElement().removeEventListener("click", this.onClick);
        }),
        u);
    function u() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t._linkTarget = null),
        (t._href = null),
        (t.onClick = function () {
          l.default.Instance.handleLinkClick(t.getHref());
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(19))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(18))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.build = function () {
          o.prototype.build.call(this);
        }),
        (a.prototype.updateToPage = function () {
          o.prototype.updateToPage.call(this);
          var t = this.slideshow
            .getCurrentSlide()
            .querySelector("." + this.params.plain.copytargetclass);
          this.params.plain.copytargetattribute
            ? "href" === this.params.plain.copytargetattribute
              ? (this.getElement().innerText = t.href)
              : (this.getElement().innerText = t.getAttribute(
                  this.params.plain.copytargetattribute
                ))
            : (this.getElement().innerText = t.innerText);
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(8))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.foregroundChange = function (t) {
          this.getElement().getContext("2d").strokeStyle = t;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(6)),
      u = s(n(40)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.build = function () {
          o.prototype.build.call(this),
            (this._animation = new u.default("preloader")),
            this.getElement().appendChild(this._animation.getElement());
        }),
        (c.prototype.awake = function () {
          o.prototype.awake.call(this),
            l.default.Instance.onForegroundColorChange.sub(
              this.onForegroundChange
            ),
            this.onForegroundChange(),
            this._animation.activate(null);
        }),
        (c.prototype.sleep = function () {
          l.default.Instance.onForegroundColorChange.unsub(
            this.onForegroundChange
          ),
            this._animation.deactivate(),
            o.prototype.sleep.call(this);
        }),
        c);
    function c() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onForegroundChange = function () {
          t._animation.setColor(l.default.Instance.foregroundColor);
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(4)),
      s =
        ((o = a.default),
        r(u, o),
        (u.prototype.awake = function () {
          o.prototype.awake.call(this),
            (this.getElement().style.width = "100%"),
            this.resizeText(),
            l.default.RESIZE.onResize.sub(this.onResize);
        }),
        (u.prototype.sleep = function () {
          o.prototype.sleep.call(this),
            l.default.RESIZE.onResize.unsub(this.onResize);
        }),
        (u.prototype.resizeText = function () {
          this.getElement().style.fontSize = "0px";
          for (var t = 1; t < 500; )
            if (
              ((t += 1),
              (this.getElement().style.fontSize = t + "px"),
              1 < this.getNumberOfLines(this.getElement()))
            ) {
              --t, (this.getElement().style.fontSize = t + "px");
              break;
            }
        }),
        (u.prototype.getNumberOfLines = function (t) {
          var e = t.offsetHeight,
            t = Number.parseFloat(window.getComputedStyle(t).lineHeight);
          return Math.round(e / t);
        }),
        u);
    function u() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.onResize = function () {
          t.resizeText();
        }),
        t
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      o = (Object.defineProperty(e, "__esModule", { value: !0 }), i(n(37))),
      r = i(n(7));
    function s() {
      var h = this;
      (this._xPos = 0),
        (this._yPos = 0),
        (this._targets = []),
        (this._targetsRaw = []),
        (this._target = null),
        (this._renderItem = null),
        (this.onMouseMove = function (t) {
          (h._xPos = t.clientX), (h._yPos = t.clientY);
        }),
        (this.render = function (t, e) {
          for (
            var n = [], i = h._targets.length, o = null, r = h._target, s = 0;
            s < i;
            s += 1
          ) {
            var a,
              l,
              u,
              c = h._targets[s],
              f = c.target;
            f &&
              ((a = f.getBoundingClientRect()),
              (l = h._xPos - a.left),
              (u = h._yPos - a.top),
              0 < l &&
                0 < u &&
                l < a.width &&
                u < a.height &&
                window.getComputedStyle(f).display &&
                n.push(c));
          }
          0 < (i = n.length) &&
            (o = (n =
              1 < i
                ? n.sort(function (t, e) {
                    return e.customSortIndex - t.customSortIndex;
                  })
                : n)[0]),
            (h._target = o),
            h._target !== r &&
              (null !== r && r.mouseOutCallback(),
              null !== h._target && h._target.mouseOverCallback());
        }),
        o.default.isMobile() ||
          o.default.isTablet() ||
          (document.addEventListener("mousemove", this.onMouseMove),
          document.addEventListener("mouseenter", this.onMouseMove),
          (this._renderItem = r.default.Instance.add(this.render, 10)),
          this.render(0, 0));
    }
    Object.defineProperty(s, "Instance", {
      get: function () {
        return (
          null == this._instance && (this._instance = new s()), this._instance
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      (s.prototype.add = function (t, e, n, i) {
        this._targetsRaw.push(t), this._targets.push(new a(t, e, n, i));
      }),
      (s.prototype.remove = function (t) {
        t = this._targetsRaw.indexOf(t);
        -1 !== t && (this._targetsRaw.splice(t, 1), this._targets.splice(t, 1));
      }),
      (e.default = s);
    var a = function (t, e, n, i) {
      (this.target = t),
        (this.mouseOverCallback = e),
        (this.mouseOutCallback = n),
        (this.customSortIndex = i);
    };
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(170),
        s(n(22))),
      n = ((o = s.default), r(a, o), a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i,
      r,
      o =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a =
        (Object.defineProperty(e, "__esModule", { value: !0 }), n(35), s(n(7))),
      s = s(n(1)),
      l = n(3),
      n =
        ((r = s.default),
        o(u, r),
        Object.defineProperty(u.prototype, "onEffectDone", {
          get: function () {
            return this._onEffectDone.asEvent();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (u.prototype.build = function () {
          (this._img = this.getElement()),
            (this._container = document.createElement("div")),
            (this._container.style.position = "absolute"),
            (this._container.style.top = "0px"),
            this._img.parentNode.appendChild(this._container);
        }),
        (u.prototype.awake = function () {
          r.prototype.awake.call(this),
            this._img.addEventListener("load", this.onImageLoaded);
        }),
        (u.prototype.sleep = function () {
          this._img.removeEventListener("load", this.onImageLoaded),
            null !== this._animateInDelay &&
              (clearTimeout(this._animateInDelay),
              (this._animateInDelay = null)),
            null !== this._renderItem &&
              (a.default.Instance.remove(this._renderItem),
              (this._renderItem = null)),
            null !== this._renderItemCheckInView &&
              (a.default.Instance.remove(this._renderItemCheckInView),
              (this._renderItemCheckInView = null));
        }),
        Object.defineProperty(u.prototype, "blockSizeX", {
          get: function () {
            return this._blockSizeX;
          },
          set: function (t) {
            this._blockSizeX = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "blockSizeY", {
          get: function () {
            return this._blockSizeY;
          },
          set: function (t) {
            this._blockSizeY = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (u.prototype.pixelate = function () {
          var t = Math.round(this._canvas.width / this.blockSizeX),
            e = Math.round(this._canvas.height / this.blockSizeY);
          this._ctx.drawImage(this._img, 0, 0, t, e),
            this._ctx.drawImage(
              this._canvas,
              0,
              0,
              t,
              e,
              0,
              0,
              this._canvas.width,
              this._canvas.height
            );
        }),
        (u.prototype.isEffectDone = function () {
          return this._effectDone;
        }),
        u);
    function u() {
      var o = (null !== r && r.apply(this, arguments)) || this;
      return (
        (o._blockSizeX = 1),
        (o._blockSizeY = 1),
        (o._renderItem = null),
        (o._renderItemCheckInView = null),
        (o._animateInDelay = null),
        (o._effectDone = !1),
        (o._onEffectDone = new l.SignalDispatcher()),
        (o.onImageLoaded = function () {
          o._img.removeEventListener("load", o.onImageLoaded),
            (o._img.style.opacity = "1");
        }),
        (o.shouldAnimateIn = function (t, e) {
          o.viewInfo.updateRect(),
            o.viewInfo.isInView() &&
              ((o._img.style.opacity = "1"),
              a.default.Instance.remove(o._renderItemCheckInView),
              (o._renderItemCheckInView = null),
              (o._animateInDelay = setTimeout(
                o.startAnimation,
                50 * Math.random()
              )));
        }),
        (o.startAnimation = function () {
          o._renderItem = a.default.Instance.add(o.render, 8);
        }),
        (o.render = function (t, e) {
          var n, i;
          (o._canvas.width = o._img.width),
            (o._canvas.height = o._img.height),
            (o._ctx.imageSmoothingEnabled = !1),
            1 < o.blockSizeX || 1 < o.blockSizeY
              ? ((n = 0.5 * o.blockSizeX),
                (o.blockSizeX = n = n < 1 ? 1 : n),
                (i = 0.5 * o.blockSizeY) < 1 && (i = 1),
                (o.blockSizeX = n),
                (o.blockSizeY = i),
                o.pixelate())
              : (a.default.Instance.remove(o._renderItem),
                (o._canvas.style.display = "none"),
                o._onEffectDone.dispatch(),
                (o._effectDone = !0));
        }),
        (o.onComplete = function () {
          o._canvas.style.display = "none";
        }),
        o
      );
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(2))),
      l = s(n(26)),
      u = s(n(11)),
      s =
        ((o = a.default),
        r(c, o),
        (c.prototype.awake = function () {
          o.prototype.awake.call(this),
            u.default.Instance.onResize.sub(this.onResize),
            l.default.Instance.onNewBreakpoint.sub(this.onResize);
          var t = l.default.Instance.getBreakPointIndex(),
            t = this.getOffset(t);
          this.resize(t);
        }),
        (c.prototype.sleep = function () {
          o.prototype.sleep.call(this),
            u.default.Instance.onResize.unsub(this.onResize),
            l.default.Instance.onNewBreakpoint.unsub(this.onResize);
        }),
        (c.prototype.resize = function (t) {
          this.getElement().style.height = window.innerHeight - t + "px";
        }),
        (c.prototype.shouldResize = function (t) {
          if (null === this._parsedShouldResize) {
            this._parsedShouldResize = new Array();
            var e = this.params.plain.shouldresize;
            if (e)
              for (var n = e.split(","), i = n.length, o = 0; o < i; o += 1)
                this._parsedShouldResize[o] = "true" === n[o];
          }
          e = this._parsedShouldResize.length;
          return (
            0 === e ||
            (1 === e
              ? this._parsedShouldResize[0]
              : !(t < e) || this._parsedShouldResize[t])
          );
        }),
        (c.prototype.getOffset = function (t) {
          if (null === this._parsedInnerHeightOffset) {
            this._parsedInnerHeightOffset = new Array();
            var e = this.params.plain.innerheightoffset;
            if (e)
              for (var n = e.split(","), i = n.length, o = 0; o < i; o += 1)
                this._parsedInnerHeightOffset[o] = parseFloat(n[o]);
          }
          e = this._parsedInnerHeightOffset.length;
          return 0 === e
            ? 0
            : 1 === e
            ? this._parsedInnerHeightOffset[0]
            : t < e
            ? this._parsedInnerHeightOffset[t]
            : 0;
        }),
        c);
    function c() {
      var e = (null !== o && o.apply(this, arguments)) || this;
      return (
        (e._parsedInnerHeightOffset = null),
        (e._parsedShouldResize = null),
        (e.onResize = function () {
          var t = l.default.Instance.getBreakPointIndex();
          e.shouldResize(t) && ((t = e.getOffset(t)), e.resize(t));
        }),
        e
      );
    }
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      s = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(47))),
      n =
        ((o = s.default),
        r(a, o),
        (a.prototype.getCursorName = function () {
          return "link";
        }),
        (a.prototype.getSortIndex = function () {
          return 1;
        }),
        a);
    function a() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.default = n;
  },
  function (t, e, n) {
    "use strict";
    var i,
      o,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        },
      a = (Object.defineProperty(e, "__esModule", { value: !0 }), s(n(1))),
      l = s(n(7)),
      u = s(n(175)),
      s =
        ((o = a.default),
        r(c, o),
        (c.setLayerEnabled = function (t, e) {
          this._videoLayers.set(t, e);
        }),
        (c.getLayerEnabled = function (t) {
          return !1 !== this._videoLayers.get(t);
        }),
        (c.prototype.build = function () {
          (this._playButton = this.qs(".play-button")),
            (this._playIcon = this.qs(".play-icon")),
            (this._pauseIcon = this.qs(".pause-icon")),
            (this._placeholder = this.qs(".placeholder")),
            (this._playbackTime = this.qs(".playback-time")),
            (this._videoContainer = this.qs(".container")),
            (this._layer = this.params.plain.layer || "default"),
            (this._videoUI = this.params.plain.videoui),
            this._videoUI || (this._videoUI = "default"),
            (this._autoPlay = "true" === this.params.plain.autoplay),
            (this._id = this.params.plain.id);
        }),
        (c.prototype.awake = function () {
          (this._videoReadyForPlay = !1),
            this.hideAllUI(),
            (this._renderItem = l.default.Instance.add(this.render, 5));
        }),
        (c.prototype.videoReadyForPlay = function () {
          (this._videoReadyForPlay = !0),
            0 !== this._restoreTime &&
              (this._video.setCurrentTime(this._restoreTime),
              (this._restoreTime = 0)),
            "none" !== this._videoUI &&
              this._playButton.addEventListener("click", this.onPlay),
            this.updateUIToState();
        }),
        (c.prototype.sleep = function () {
          null !== this._renderItem &&
            (l.default.Instance.remove(this._renderItem),
            (this._renderItem = null)),
            null !== this._video &&
              (this.unloadVideo(!0), (this._video = null));
        }),
        (c.prototype.isReadyForPlay = function () {
          return !0;
        }),
        (c.prototype.Play = function () {
          var e = this;
          !0 !== this._isPlaying &&
            ((this._isPlaying = !0),
            0 !== this._restoreTime &&
              (this._video.setCurrentTime(this._restoreTime),
              (this._restoreTime = 0)),
            this._video
              .play()
              .then(function (t) {
                e.updateUIToState();
              })
              .catch(function (t) {
                e._isPlaying = !1;
              }));
        }),
        (c.prototype.Pause = function () {
          !1 !== this._isPlaying &&
            ((this._isPlaying = !1),
            this._video.pause(),
            this.updateUIToState());
        }),
        (c.prototype.loadVideo = function () {
          var e = this;
          !0 !== this._isVideoLoaded &&
            ((this._isVideoLoaded = !0),
            (this._video = new u.default(this._videoContainer, {
              url: "https://vimeo.com/video/" + this._id,
              controls: !1,
              width: 200,
              height: 200,
              background: this._autoPlay,
              autopause: !1,
              dnt: !0,
              title: !1,
            })),
            this._video
              .getDuration()
              .then(function (t) {
                e._duration = t;
              })
              .catch(function (t) {}),
            this._video
              .ready()
              .then(function (t) {
                e.videoReadyForPlay();
              })
              .catch(function (t) {}));
        }),
        (c.prototype.unloadVideo = function (t) {
          (!0 !== (t = void 0 === t ? !1 : t) && !1 === this._isVideoLoaded) ||
            (!0 === this._isPlaying && (this._restoreTime = this._currentTime),
            (this._video = null),
            (this._isVideoLoaded = !1),
            (this._isPlaying = !1),
            (this._videoReadyForPlay = !1),
            "none" !== this._videoUI &&
              this._playButton.removeEventListener("click", this.onPlay),
            this.hideAllUI());
        }),
        (c.prototype.updateUIToState = function () {
          null !== this._hideTimeout &&
            (clearTimeout(this._hideTimeout), (this._hideTimeout = null)),
            !0 === this._isPlaying
              ? (this.hidePlaceholder(),
                this._videoContainer.querySelector("iframe"),
                "default" === this._videoUI
                  ? ((this._pauseIcon.style.display = "block"),
                    (this._playIcon.style.display = "none"),
                    (this._playbackTime.style.display = "block"))
                  : "default" === this._videoUI && this.hideAllUI())
              : (null !== this._placeholder &&
                  (this._placeholder.style.visibility = "visible"),
                this._videoContainer.querySelector("iframe"),
                "default" === this._videoUI
                  ? ((this._pauseIcon.style.display = "none"),
                    (this._playIcon.style.display = "block"),
                    (this._playbackTime.style.display = "block"))
                  : "default" === this._videoUI && this.hideAllUI());
        }),
        (c.prototype.hideAllUI = function () {
          (this._pauseIcon.style.display = "none"),
            (this._playIcon.style.display = "none"),
            (this._playbackTime.style.display = "none");
        }),
        (c._videoLayers = new Map()),
        c);
    function c() {
      var n = (null !== o && o.apply(this, arguments)) || this;
      return (
        (n._video = null),
        (n._isPlaying = !1),
        (n._wasInteractedWith = !1),
        (n._renderItem = null),
        (n._videoReadyForPlay = !1),
        (n._autoPlay = !0),
        (n._isVideoLoaded = !1),
        (n._restoreTime = 0),
        (n._timeInView = 0),
        (n._currentTime = 0),
        (n._duration = 0),
        (n._hideTimeout = null),
        (n.render = function (t, e) {
          n.viewInfo.updateRect(),
            !0 === n.viewInfo.isInView() &&
            null !== n.getElement().offsetParent &&
            !0 === c.getLayerEnabled(n._layer)
              ? ((n._timeInView += t),
                0.1 < n._timeInView &&
                  (n.loadVideo(),
                  !0 === n._videoReadyForPlay &&
                    !1 === n._wasInteractedWith &&
                    !0 === n._autoPlay &&
                    n.Play()))
              : ((n._timeInView = 0), n.unloadVideo()),
            n._video &&
              (n._video
                .getCurrentTime()
                .then(function (t) {
                  n._currentTime = t;
                  var t = n._duration - n._currentTime,
                    e = (isNaN(t) && (t = 0), new Date(null));
                  e.setSeconds(t),
                    (n._playbackTime.innerText = e.toISOString().substr(14, 5));
                })
                .catch(function (t) {}),
              n._video
                .getEnded()
                .then(function (t) {
                  !0 === t && ((n._isPlaying = !1), n.updateUIToState());
                })
                .catch(function (t) {}));
        }),
        (n.onPlay = function () {
          (n._wasInteractedWith = !0), n._isPlaying ? n.Pause() : n.Play();
        }),
        (n.hidePlaceholder = function () {
          n._placeholder.style.visibility = "hidden";
        }),
        n
      );
    }
    e.default = s;
  },
  function (t, N, e) {
    "use strict";
    e.r(N),
      function (t, v) {
        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var e = void 0 !== t && "[object global]" === {}.toString.call(t);
        function r(t, e) {
          return 0 === t.indexOf(e.toLowerCase())
            ? t
            : ""
                .concat(e.toLowerCase())
                .concat(t.substr(0, 1).toUpperCase())
                .concat(t.substr(1));
        }
        function l(t) {
          return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t);
        }
        function a(t) {
          var e,
            t = 0 < arguments.length && void 0 !== t ? t : {},
            n = t.id,
            t = t.url,
            t = n || t;
          if (!t)
            throw new Error(
              "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
            );
          if (
            ((e = t),
            !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e)
          )
            return "https://vimeo.com/".concat(t);
          if (l(t)) return t.replace("http:", "https:");
          if (n)
            throw new TypeError("“".concat(n, "” is not a valid video id."));
          throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
        }
        var n = void 0 !== Array.prototype.indexOf,
          o = "undefined" != typeof window && void 0 !== window.postMessage;
        if (!(e || (n && o)))
          throw new Error(
            "Sorry, the Vimeo Player API is not available in this browser."
          );
        var s,
          u,
          c,
          f =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : {};
        function h() {
          if (void 0 === this)
            throw new TypeError("Constructor WeakMap requires 'new'");
          if (
            (c(this, "_id", "_WeakMap_" + d() + "." + d()),
            0 < arguments.length)
          )
            throw new TypeError("WeakMap iterable is not supported");
        }
        function p(t, e) {
          if (!_(t) || !s.call(t, "_id"))
            throw new TypeError(
              e + " method called on incompatible receiver " + typeof t
            );
        }
        function d() {
          return Math.random().toString().substring(2);
        }
        function _(t) {
          return Object(t) === t;
        }
        (n =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : f).WeakMap ||
          ((s = Object.prototype.hasOwnProperty),
          (u =
            Object.defineProperty &&
            (function () {
              try {
                return 1 === Object.defineProperty({}, "x", { value: 1 }).x;
              } catch (t) {}
            })()),
          (n.WeakMap =
            ((c = function (t, e, n) {
              u
                ? Object.defineProperty(t, e, {
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (t[e] = n);
            })(h.prototype, "delete", function (t) {
              var e;
              return (
                p(this, "delete"),
                !!_(t) &&
                  !(!(e = t[this._id]) || e[0] !== t) &&
                  (delete t[this._id], !0)
              );
            }),
            c(h.prototype, "get", function (t) {
              var e;
              return (
                p(this, "get"),
                _(t) && (e = t[this._id]) && e[0] === t ? e[1] : void 0
              );
            }),
            c(h.prototype, "has", function (t) {
              var e;
              return (
                p(this, "has"), !!_(t) && !(!(e = t[this._id]) || e[0] !== t)
              );
            }),
            c(h.prototype, "set", function (t, e) {
              var n;
              if ((p(this, "set"), _(t)))
                return (
                  (n = t[this._id]) && n[0] === t
                    ? (n[1] = e)
                    : c(t, this._id, [t, e]),
                  this
                );
              throw new TypeError("Invalid value used as weak map key");
            }),
            c(h, "_polyfill", !0),
            h)));
        (function (t) {
          var e, n, i;
          (i = function () {
            var e,
              n,
              i,
              o,
              r,
              t = Object.prototype.toString,
              s =
                void 0 !== v
                  ? function (t) {
                      return v(t);
                    }
                  : setTimeout;
            try {
              Object.defineProperty({}, "x", {}),
                (e = function (t, e, n, i) {
                  return Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !1 !== i,
                  });
                });
            } catch (t) {
              e = function (t, e, n) {
                return (t[e] = n), t;
              };
            }
            function a(t, e) {
              (this.fn = t), (this.self = e), (this.next = void 0);
            }
            function l(t, e) {
              m.add(t, e), (n = n || s(m.drain));
            }
            function u(t) {
              var e,
                n = typeof t;
              return (
                "function" ==
                  typeof (e =
                    null == t || ("object" != n && "function" != n)
                      ? e
                      : t.then) && e
              );
            }
            function c() {
              for (var t = 0; t < this.chain.length; t++) {
                n = e = r = o = i = void 0;
                var e,
                  n,
                  i = this,
                  o =
                    1 === this.state
                      ? this.chain[t].success
                      : this.chain[t].failure,
                  r = this.chain[t];
                try {
                  !1 === o
                    ? r.reject(i.msg)
                    : (e = !0 === o ? i.msg : o.call(void 0, i.msg)) ===
                      r.promise
                    ? r.reject(TypeError("Promise-chain cycle"))
                    : (n = u(e))
                    ? n.call(e, r.resolve, r.reject)
                    : r.resolve(e);
                } catch (t) {
                  r.reject(t);
                }
              }
              this.chain.length = 0;
            }
            function f(t) {
              var n,
                i = this;
              if (!i.triggered) {
                (i.triggered = !0), i.def && (i = i.def);
                try {
                  (n = u(t))
                    ? l(function () {
                        var e = new d(i);
                        try {
                          n.call(
                            t,
                            function () {
                              f.apply(e, arguments);
                            },
                            function () {
                              h.apply(e, arguments);
                            }
                          );
                        } catch (t) {
                          h.call(e, t);
                        }
                      })
                    : ((i.msg = t),
                      (i.state = 1),
                      0 < i.chain.length && l(c, i));
                } catch (t) {
                  h.call(new d(i), t);
                }
              }
            }
            function h(t) {
              var e = this;
              e.triggered ||
                ((e.triggered = !0),
                ((e = e.def ? e.def : e).msg = t),
                (e.state = 2),
                0 < e.chain.length && l(c, e));
            }
            function p(t, n, i, o) {
              for (var e = 0; e < n.length; e++)
                !(function (e) {
                  t.resolve(n[e]).then(function (t) {
                    i(e, t);
                  }, o);
                })(e);
            }
            function d(t) {
              (this.def = t), (this.triggered = !1);
            }
            function _(t) {
              (this.promise = t),
                (this.state = 0),
                (this.triggered = !1),
                (this.chain = []),
                (this.msg = void 0);
            }
            function g(t) {
              if ("function" != typeof t) throw TypeError("Not a function");
              if (0 !== this.__NPO__) throw TypeError("Not a promise");
              this.__NPO__ = 1;
              var i = new _(this);
              (this.then = function (t, e) {
                var n = {
                  success: "function" != typeof t || t,
                  failure: "function" == typeof e && e,
                };
                return (
                  (n.promise = new this.constructor(function (t, e) {
                    if ("function" != typeof t || "function" != typeof e)
                      throw TypeError("Not a function");
                    (n.resolve = t), (n.reject = e);
                  })),
                  i.chain.push(n),
                  0 !== i.state && l(c, i),
                  n.promise
                );
              }),
                (this.catch = function (t) {
                  return this.then(void 0, t);
                });
              try {
                t.call(
                  void 0,
                  function (t) {
                    f.call(i, t);
                  },
                  function (t) {
                    h.call(i, t);
                  }
                );
              } catch (t) {
                h.call(i, t);
              }
            }
            var m = {
                add: function (t, e) {
                  (r = new a(t, e)),
                    o ? (o.next = r) : (i = r),
                    (o = r),
                    (r = void 0);
                },
                drain: function () {
                  var t = i;
                  for (i = o = n = void 0; t; ) t.fn.call(t.self), (t = t.next);
                },
              },
              y = e({}, "constructor", g, !1);
            return (
              e((g.prototype = y), "__NPO__", 0, !1),
              e(g, "resolve", function (n) {
                return n && "object" == typeof n && 1 === n.__NPO__
                  ? n
                  : new this(function (t, e) {
                      if ("function" != typeof t || "function" != typeof e)
                        throw TypeError("Not a function");
                      t(n);
                    });
              }),
              e(g, "reject", function (n) {
                return new this(function (t, e) {
                  if ("function" != typeof t || "function" != typeof e)
                    throw TypeError("Not a function");
                  e(n);
                });
              }),
              e(g, "all", function (e) {
                var s = this;
                return "[object Array]" != t.call(e)
                  ? s.reject(TypeError("Not an array"))
                  : 0 === e.length
                  ? s.resolve([])
                  : new s(function (n, t) {
                      if ("function" != typeof n || "function" != typeof t)
                        throw TypeError("Not a function");
                      var i = e.length,
                        o = Array(i),
                        r = 0;
                      p(
                        s,
                        e,
                        function (t, e) {
                          (o[t] = e), ++r === i && n(o);
                        },
                        t
                      );
                    });
              }),
              e(g, "race", function (e) {
                var i = this;
                return "[object Array]" != t.call(e)
                  ? i.reject(TypeError("Not an array"))
                  : new i(function (n, t) {
                      if ("function" != typeof n || "function" != typeof t)
                        throw TypeError("Not a function");
                      p(
                        i,
                        e,
                        function (t, e) {
                          n(e);
                        },
                        t
                      );
                    });
              }),
              g
            );
          }),
            ((n = f)[(e = "Promise")] = n[e] || i()),
            t.exports && (t.exports = n[e]);
        })((o = { exports: {} }));
        var g = o.exports,
          m = new WeakMap();
        function y(t, e, n) {
          var i = m.get(t.element) || {};
          e in i || (i[e] = []), i[e].push(n), m.set(t.element, i);
        }
        function b(t, e) {
          return (m.get(t.element) || {})[e] || [];
        }
        function w(t, e, n) {
          var i = m.get(t.element) || {};
          return (
            !i[e] ||
            (n
              ? (-1 !== (n = i[e].indexOf(n)) && i[e].splice(n, 1),
                m.set(t.element, i),
                i[e] && 0 === i[e].length)
              : ((i[e] = []), m.set(t.element, i), !0))
          );
        }
        function x(t) {
          if ("string" == typeof t)
            try {
              t = JSON.parse(t);
            } catch (t) {
              return {};
            }
          return t;
        }
        function T(t, e, n) {
          t.element.contentWindow &&
            t.element.contentWindow.postMessage &&
            ((e = { method: e }),
            void 0 !== n && (e.value = n),
            8 <=
              (n = parseFloat(
                navigator.userAgent
                  .toLowerCase()
                  .replace(/^.*msie (\d+).*$/, "$1")
              )) &&
              n < 10 &&
              (e = JSON.stringify(e)),
            t.element.contentWindow.postMessage(e, t.origin));
        }
        function O(n, i) {
          var e,
            t,
            o,
            r,
            s = [];
          (i = x(i)).event
            ? ("error" === i.event &&
                b(n, i.data.method).forEach(function (t) {
                  var e = new Error(i.data.message);
                  (e.name = i.data.name), t.reject(e), w(n, i.data.method, t);
                }),
              (s = b(n, "event:".concat(i.event))),
              (e = i.data))
            : i.method &&
              ((t = n),
              (o = i.method),
              (o =
                !((r = b(t, o)).length < 1) && (w(t, o, (t = r.shift())), t)) &&
                (s.push(o), (e = i.value))),
            s.forEach(function (t) {
              try {
                "function" == typeof t ? t.call(n, e) : t.resolve(e);
              } catch (t) {}
            });
        }
        var P = [
          "autopause",
          "autoplay",
          "background",
          "byline",
          "color",
          "controls",
          "dnt",
          "height",
          "id",
          "interactive_params",
          "keyboard",
          "loop",
          "maxheight",
          "maxwidth",
          "muted",
          "playsinline",
          "portrait",
          "responsive",
          "speed",
          "texttrack",
          "title",
          "transparent",
          "url",
          "width",
        ];
        function C(i, t) {
          return P.reduce(
            function (t, e) {
              var n = i.getAttribute("data-vimeo-".concat(e));
              return (!n && "" !== n) || (t[e] = "" === n ? 1 : n), t;
            },
            1 < arguments.length && void 0 !== t ? t : {}
          );
        }
        function S(t, e) {
          var n,
            t = t.html;
          if (e)
            return (
              null === e.getAttribute("data-vimeo-initialized") &&
                (((n = document.createElement("div")).innerHTML = t),
                e.appendChild(n.firstChild),
                e.setAttribute("data-vimeo-initialized", "true")),
              e.querySelector("iframe")
            );
          throw new TypeError("An element must be provided");
        }
        function E(r, t, e) {
          var s = 1 < arguments.length && void 0 !== t ? t : {},
            a = 2 < arguments.length ? e : void 0;
          return new Promise(function (e, n) {
            if (!l(r))
              throw new TypeError("“".concat(r, "” is not a vimeo.com url."));
            var t,
              i = "https://vimeo.com/api/oembed.json?url=".concat(
                encodeURIComponent(r)
              );
            for (t in s)
              s.hasOwnProperty(t) &&
                (i += "&".concat(t, "=").concat(encodeURIComponent(s[t])));
            var o = new (
              "XDomainRequest" in window ? XDomainRequest : XMLHttpRequest
            )();
            o.open("GET", i, !0),
              (o.onload = function () {
                if (404 === o.status)
                  n(new Error("“".concat(r, "” was not found.")));
                else if (403 === o.status)
                  n(new Error("“".concat(r, "” is not embeddable.")));
                else
                  try {
                    var t = JSON.parse(o.responseText);
                    403 === t.domain_status_code
                      ? (S(t, a),
                        n(new Error("“".concat(r, "” is not embeddable."))))
                      : e(t);
                  } catch (t) {
                    n(t);
                  }
              }),
              (o.onerror = function () {
                var t = o.status ? " (".concat(o.status, ")") : "";
                n(
                  new Error(
                    "There was an error fetching the embed code from Vimeo".concat(
                      t,
                      "."
                    )
                  )
                );
              }),
              o.send();
          });
        }
        function j(t) {
          var a = 0 < arguments.length && void 0 !== t ? t : document;
          window.VimeoSeoMetadataAppended ||
            ((window.VimeoSeoMetadataAppended = !0),
            window.addEventListener("message", function (t) {
              if (l(t.origin)) {
                var e = x(t.data);
                if (e && "ready" === e.event)
                  for (
                    var n, i = a.querySelectorAll("iframe"), o = 0;
                    o < i.length;
                    o++
                  ) {
                    var r = i[o],
                      s = r.contentWindow === t.source;
                    (n = r.src),
                      /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(n) &&
                        s &&
                        new D(r).callMethod(
                          "appendVideoMetadata",
                          window.location.href
                        );
                  }
              }
            }));
        }
        var k,
          A,
          I,
          M = new WeakMap(),
          L = new WeakMap(),
          R = {},
          D = (function () {
            function o(r) {
              var s = this,
                e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = this,
                n = o;
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
              if (
                (window.jQuery &&
                  r instanceof jQuery &&
                  (1 < r.length && window.console && console.warn, (r = r[0])),
                "undefined" != typeof document &&
                  "string" == typeof r &&
                  (r = document.getElementById(r)),
                (t = r),
                !Boolean(
                  t &&
                    1 === t.nodeType &&
                    "nodeName" in t &&
                    t.ownerDocument &&
                    t.ownerDocument.defaultView
                ))
              )
                throw new TypeError(
                  "You must pass either a valid element or a valid id."
                );
              if (
                ("IFRAME" === r.nodeName ||
                  ((n = r.querySelector("iframe")) && (r = n)),
                "IFRAME" === r.nodeName && !l(r.getAttribute("src") || ""))
              )
                throw new Error(
                  "The player element passed isn’t a Vimeo embed."
                );
              if (M.has(r)) return M.get(r);
              (this._window = r.ownerDocument.defaultView),
                (this.element = r),
                (this.origin = "*");
              var i,
                t = new g(function (i, o) {
                  var t;
                  (s._onMessage = function (t) {
                    var e, n;
                    l(t.origin) &&
                      s.element.contentWindow === t.source &&
                      ("*" === s.origin && (s.origin = t.origin),
                      (t = x(t.data)) &&
                      "error" === t.event &&
                      t.data &&
                      "ready" === t.data.method
                        ? (((e = new Error(t.data.message)).name = t.data.name),
                          o(e))
                        : ((e = t && "ready" === t.event),
                          (n = t && "ping" === t.method),
                          e || n
                            ? (s.element.setAttribute("data-ready", "true"),
                              i())
                            : O(s, t)));
                  }),
                    s._window.addEventListener("message", s._onMessage),
                    "IFRAME" !== s.element.nodeName &&
                      E(a((t = C(r, e))), t, r)
                        .then(function (t) {
                          var e,
                            n,
                            i = S(t, r);
                          return (
                            (s.element = i),
                            (s._originalElement = r),
                            (e = r),
                            (i = i),
                            (n = m.get(e)),
                            m.set(i, n),
                            m.delete(e),
                            M.set(s.element, s),
                            t
                          );
                        })
                        .catch(o);
                });
              return (
                L.set(this, t),
                M.set(this.element, this),
                "IFRAME" === this.element.nodeName && T(this, "ping"),
                R.isEnabled &&
                  ((i = function () {
                    return R.exit();
                  }),
                  (this.fullscreenchangeHandler = function () {
                    (R.isFullscreen ? y : w)(s, "event:exitFullscreen", i),
                      s.ready().then(function () {
                        T(s, "fullscreenchange", R.isFullscreen);
                      });
                  }),
                  R.on("fullscreenchange", this.fullscreenchangeHandler)),
                this
              );
            }
            var t, e, n;
            return (
              (t = o),
              (e = [
                {
                  key: "callMethod",
                  value: function (n) {
                    var i = this,
                      o =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return new g(function (t, e) {
                      return i
                        .ready()
                        .then(function () {
                          y(i, n, { resolve: t, reject: e }), T(i, n, o);
                        })
                        .catch(e);
                    });
                  },
                },
                {
                  key: "get",
                  value: function (n) {
                    var i = this;
                    return new g(function (t, e) {
                      return (
                        (n = r(n, "get")),
                        i
                          .ready()
                          .then(function () {
                            y(i, n, { resolve: t, reject: e }), T(i, n);
                          })
                          .catch(e)
                      );
                    });
                  },
                },
                {
                  key: "set",
                  value: function (n, i) {
                    var o = this;
                    return new g(function (t, e) {
                      if (((n = r(n, "set")), null == i))
                        throw new TypeError("There must be a value to set.");
                      return o
                        .ready()
                        .then(function () {
                          y(o, n, { resolve: t, reject: e }), T(o, n, i);
                        })
                        .catch(e);
                    });
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    if (!t) throw new TypeError("You must pass an event name.");
                    if (!e)
                      throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof e)
                      throw new TypeError("The callback must be a function.");
                    0 === b(this, "event:".concat(t)).length &&
                      this.callMethod("addEventListener", t).catch(
                        function () {}
                      ),
                      y(this, "event:".concat(t), e);
                  },
                },
                {
                  key: "off",
                  value: function (t, e) {
                    if (!t) throw new TypeError("You must pass an event name.");
                    if (e && "function" != typeof e)
                      throw new TypeError("The callback must be a function.");
                    w(this, "event:".concat(t), e) &&
                      this.callMethod("removeEventListener", t).catch(function (
                        t
                      ) {});
                  },
                },
                {
                  key: "loadVideo",
                  value: function (t) {
                    return this.callMethod("loadVideo", t);
                  },
                },
                {
                  key: "ready",
                  value: function () {
                    var t =
                      L.get(this) ||
                      new g(function (t, e) {
                        e(new Error("Unknown player. Probably unloaded."));
                      });
                    return g.resolve(t);
                  },
                },
                {
                  key: "addCuePoint",
                  value: function (t) {
                    return this.callMethod("addCuePoint", {
                      time: t,
                      data:
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                    });
                  },
                },
                {
                  key: "removeCuePoint",
                  value: function (t) {
                    return this.callMethod("removeCuePoint", t);
                  },
                },
                {
                  key: "enableTextTrack",
                  value: function (t, e) {
                    if (t)
                      return this.callMethod("enableTextTrack", {
                        language: t,
                        kind: e,
                      });
                    throw new TypeError("You must pass a language.");
                  },
                },
                {
                  key: "disableTextTrack",
                  value: function () {
                    return this.callMethod("disableTextTrack");
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    return this.callMethod("pause");
                  },
                },
                {
                  key: "play",
                  value: function () {
                    return this.callMethod("play");
                  },
                },
                {
                  key: "requestFullscreen",
                  value: function () {
                    return R.isEnabled
                      ? R.request(this.element)
                      : this.callMethod("requestFullscreen");
                  },
                },
                {
                  key: "exitFullscreen",
                  value: function () {
                    return R.isEnabled
                      ? R.exit()
                      : this.callMethod("exitFullscreen");
                  },
                },
                {
                  key: "getFullscreen",
                  value: function () {
                    return R.isEnabled
                      ? g.resolve(R.isFullscreen)
                      : this.get("fullscreen");
                  },
                },
                {
                  key: "requestPictureInPicture",
                  value: function () {
                    return this.callMethod("requestPictureInPicture");
                  },
                },
                {
                  key: "exitPictureInPicture",
                  value: function () {
                    return this.callMethod("exitPictureInPicture");
                  },
                },
                {
                  key: "getPictureInPicture",
                  value: function () {
                    return this.get("pictureInPicture");
                  },
                },
                {
                  key: "unload",
                  value: function () {
                    return this.callMethod("unload");
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var n = this;
                    return new g(function (t) {
                      var e;
                      L.delete(n),
                        M.delete(n.element),
                        n._originalElement &&
                          (M.delete(n._originalElement),
                          n._originalElement.removeAttribute(
                            "data-vimeo-initialized"
                          )),
                        n.element &&
                          "IFRAME" === n.element.nodeName &&
                          n.element.parentNode &&
                          (n.element.parentNode.parentNode &&
                          n._originalElement &&
                          n._originalElement !== n.element.parentNode
                            ? n.element.parentNode.parentNode.removeChild(
                                n.element.parentNode
                              )
                            : n.element.parentNode.removeChild(n.element)),
                        n.element &&
                          "DIV" === n.element.nodeName &&
                          n.element.parentNode &&
                          (n.element.removeAttribute("data-vimeo-initialized"),
                          (e = n.element.querySelector("iframe")) &&
                            e.parentNode &&
                            (e.parentNode.parentNode &&
                            n._originalElement &&
                            n._originalElement !== e.parentNode
                              ? e.parentNode.parentNode.removeChild(
                                  e.parentNode
                                )
                              : e.parentNode.removeChild(e))),
                        n._window.removeEventListener("message", n._onMessage),
                        R.isEnabled &&
                          R.off("fullscreenchange", n.fullscreenchangeHandler),
                        t();
                    });
                  },
                },
                {
                  key: "getAutopause",
                  value: function () {
                    return this.get("autopause");
                  },
                },
                {
                  key: "setAutopause",
                  value: function (t) {
                    return this.set("autopause", t);
                  },
                },
                {
                  key: "getBuffered",
                  value: function () {
                    return this.get("buffered");
                  },
                },
                {
                  key: "getCameraProps",
                  value: function () {
                    return this.get("cameraProps");
                  },
                },
                {
                  key: "setCameraProps",
                  value: function (t) {
                    return this.set("cameraProps", t);
                  },
                },
                {
                  key: "getChapters",
                  value: function () {
                    return this.get("chapters");
                  },
                },
                {
                  key: "getCurrentChapter",
                  value: function () {
                    return this.get("currentChapter");
                  },
                },
                {
                  key: "getColor",
                  value: function () {
                    return this.get("color");
                  },
                },
                {
                  key: "setColor",
                  value: function (t) {
                    return this.set("color", t);
                  },
                },
                {
                  key: "getCuePoints",
                  value: function () {
                    return this.get("cuePoints");
                  },
                },
                {
                  key: "getCurrentTime",
                  value: function () {
                    return this.get("currentTime");
                  },
                },
                {
                  key: "setCurrentTime",
                  value: function (t) {
                    return this.set("currentTime", t);
                  },
                },
                {
                  key: "getDuration",
                  value: function () {
                    return this.get("duration");
                  },
                },
                {
                  key: "getEnded",
                  value: function () {
                    return this.get("ended");
                  },
                },
                {
                  key: "getLoop",
                  value: function () {
                    return this.get("loop");
                  },
                },
                {
                  key: "setLoop",
                  value: function (t) {
                    return this.set("loop", t);
                  },
                },
                {
                  key: "setMuted",
                  value: function (t) {
                    return this.set("muted", t);
                  },
                },
                {
                  key: "getMuted",
                  value: function () {
                    return this.get("muted");
                  },
                },
                {
                  key: "getPaused",
                  value: function () {
                    return this.get("paused");
                  },
                },
                {
                  key: "getPlaybackRate",
                  value: function () {
                    return this.get("playbackRate");
                  },
                },
                {
                  key: "setPlaybackRate",
                  value: function (t) {
                    return this.set("playbackRate", t);
                  },
                },
                {
                  key: "getPlayed",
                  value: function () {
                    return this.get("played");
                  },
                },
                {
                  key: "getQualities",
                  value: function () {
                    return this.get("qualities");
                  },
                },
                {
                  key: "getQuality",
                  value: function () {
                    return this.get("quality");
                  },
                },
                {
                  key: "setQuality",
                  value: function (t) {
                    return this.set("quality", t);
                  },
                },
                {
                  key: "getSeekable",
                  value: function () {
                    return this.get("seekable");
                  },
                },
                {
                  key: "getSeeking",
                  value: function () {
                    return this.get("seeking");
                  },
                },
                {
                  key: "getTextTracks",
                  value: function () {
                    return this.get("textTracks");
                  },
                },
                {
                  key: "getVideoEmbedCode",
                  value: function () {
                    return this.get("videoEmbedCode");
                  },
                },
                {
                  key: "getVideoId",
                  value: function () {
                    return this.get("videoId");
                  },
                },
                {
                  key: "getVideoTitle",
                  value: function () {
                    return this.get("videoTitle");
                  },
                },
                {
                  key: "getVideoWidth",
                  value: function () {
                    return this.get("videoWidth");
                  },
                },
                {
                  key: "getVideoHeight",
                  value: function () {
                    return this.get("videoHeight");
                  },
                },
                {
                  key: "getVideoUrl",
                  value: function () {
                    return this.get("videoUrl");
                  },
                },
                {
                  key: "getVolume",
                  value: function () {
                    return this.get("volume");
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    return this.set("volume", t);
                  },
                },
              ]) && i(t.prototype, e),
              n && i(t, n),
              o
            );
          })();
        e ||
          ((k = (function () {
            for (
              var t,
                e = [
                  [
                    "requestFullscreen",
                    "exitFullscreen",
                    "fullscreenElement",
                    "fullscreenEnabled",
                    "fullscreenchange",
                    "fullscreenerror",
                  ],
                  [
                    "webkitRequestFullscreen",
                    "webkitExitFullscreen",
                    "webkitFullscreenElement",
                    "webkitFullscreenEnabled",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "webkitRequestFullScreen",
                    "webkitCancelFullScreen",
                    "webkitCurrentFullScreenElement",
                    "webkitCancelFullScreen",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "mozRequestFullScreen",
                    "mozCancelFullScreen",
                    "mozFullScreenElement",
                    "mozFullScreenEnabled",
                    "mozfullscreenchange",
                    "mozfullscreenerror",
                  ],
                  [
                    "msRequestFullscreen",
                    "msExitFullscreen",
                    "msFullscreenElement",
                    "msFullscreenEnabled",
                    "MSFullscreenChange",
                    "MSFullscreenError",
                  ],
                ],
                n = 0,
                i = e.length,
                o = {};
              n < i;
              n++
            )
              if ((t = e[n]) && t[1] in document) {
                for (n = 0; n < t.length; n++) o[e[0][n]] = t[n];
                return o;
              }
            return !1;
          })()),
          (A = {
            fullscreenchange: k.fullscreenchange,
            fullscreenerror: k.fullscreenerror,
          }),
          (I = {
            request: function (o) {
              return new Promise(function (t, e) {
                function n() {
                  I.off("fullscreenchange", n), t();
                }
                I.on("fullscreenchange", n);
                var i = (o = o || document.documentElement)[
                  k.requestFullscreen
                ]();
                i instanceof Promise && i.then(n).catch(e);
              });
            },
            exit: function () {
              return new Promise(function (e, t) {
                var n, i;
                I.isFullscreen
                  ? (I.on(
                      "fullscreenchange",
                      (n = function t() {
                        I.off("fullscreenchange", t), e();
                      })
                    ),
                    (i = document[k.exitFullscreen]()) instanceof Promise &&
                      i.then(n).catch(t))
                  : e();
              });
            },
            on: function (t, e) {
              t = A[t];
              t && document.addEventListener(t, e);
            },
            off: function (t, e) {
              t = A[t];
              t && document.removeEventListener(t, e);
            },
          }),
          Object.defineProperties(I, {
            isFullscreen: {
              get: function () {
                return Boolean(document[k.fullscreenElement]);
              },
            },
            element: {
              enumerable: !0,
              get: function () {
                return document[k.fullscreenElement];
              },
            },
            isEnabled: {
              enumerable: !0,
              get: function () {
                return Boolean(document[k.fullscreenEnabled]);
              },
            },
          }),
          (R = I),
          (function (t) {
            function n(t) {
              "console" in window && console.error;
            }
            (t = 0 < arguments.length && void 0 !== t ? t : document),
              (t = [].slice.call(
                t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
              )).forEach(function (e) {
                try {
                  var t;
                  null === e.getAttribute("data-vimeo-defer") &&
                    E(a((t = C(e))), t, e)
                      .then(function (t) {
                        return S(t, e);
                      })
                      .catch(n);
                } catch (t) {
                  n();
                }
              });
          })(),
          (function (t) {
            var i = 0 < arguments.length && void 0 !== t ? t : document;
            window.VimeoPlayerResizeEmbeds_ ||
              ((window.VimeoPlayerResizeEmbeds_ = !0),
              window.addEventListener("message", function (t) {
                if (l(t.origin) && t.data && "spacechange" === t.data.event)
                  for (
                    var e = i.querySelectorAll("iframe"), n = 0;
                    n < e.length;
                    n++
                  )
                    if (e[n].contentWindow === t.source) {
                      e[n].parentElement.style.paddingBottom = "".concat(
                        t.data.data[0].bottom,
                        "px"
                      );
                      break;
                    }
              }));
          })(),
          j()),
          (N.default = D);
      }.call(this, e(14), e(176).setImmediate);
  },
  function (t, o, r) {
    !function (t) {
      var e =
          (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
        n = Function.prototype.apply;
      function i(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      (o.setTimeout = function () {
        return new i(n.call(setTimeout, e, arguments), clearTimeout);
      }),
        (o.setInterval = function () {
          return new i(n.call(setInterval, e, arguments), clearInterval);
        }),
        (o.clearTimeout = o.clearInterval =
          function (t) {
            t && t.close();
          }),
        (i.prototype.unref = i.prototype.ref = function () {}),
        (i.prototype.close = function () {
          this._clearFn.call(e, this._id);
        }),
        (o.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (o.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (o._unrefActive = o.active =
          function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            0 <= e &&
              (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
        r(177),
        (o.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== t && t.setImmediate) ||
          (this && this.setImmediate)),
        (o.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== t && t.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, r(14));
  },
  function (t, e, n) {
    !function (t, p) {
      !(function (n, r) {
        "use strict";
        var i, s, a, o, l, u, e, t;
        function c(t) {
          delete s[t];
        }
        function f(t) {
          if (a) setTimeout(f, 0, t);
          else {
            var e = s[t];
            if (e) {
              a = !0;
              try {
                var n = e,
                  i = n.callback,
                  o = n.args;
                switch (o.length) {
                  case 0:
                    i();
                    break;
                  case 1:
                    i(o[0]);
                    break;
                  case 2:
                    i(o[0], o[1]);
                    break;
                  case 3:
                    i(o[0], o[1], o[2]);
                    break;
                  default:
                    i.apply(r, o);
                }
              } finally {
                c(t), (a = !1);
              }
            }
          }
        }
        function h() {
          function t(t) {
            t.source === n &&
              "string" == typeof t.data &&
              0 === t.data.indexOf(e) &&
              f(+t.data.slice(e.length));
          }
          var e = "setImmediate$" + Math.random() + "$";
          n.addEventListener
            ? n.addEventListener("message", t, !1)
            : n.attachEvent("onmessage", t),
            (l = function (t) {
              n.postMessage(e + t, "*");
            });
        }
        n.setImmediate ||
          ((i = 1),
          (a = !(s = {})),
          (o = n.document),
          (t =
            (t = Object.getPrototypeOf && Object.getPrototypeOf(n)) &&
            t.setTimeout
              ? t
              : n),
          "[object process]" === {}.toString.call(n.process)
            ? (l = function (t) {
                p.nextTick(function () {
                  f(t);
                });
              })
            : !(function () {
                var t, e;
                if (n.postMessage && !n.importScripts)
                  return (
                    (t = !0),
                    (e = n.onmessage),
                    (n.onmessage = function () {
                      t = !1;
                    }),
                    n.postMessage("", "*"),
                    (n.onmessage = e),
                    t
                  );
              })()
            ? (l = n.MessageChannel
                ? (((e = new MessageChannel()).port1.onmessage = function (t) {
                    f(t.data);
                  }),
                  function (t) {
                    e.port2.postMessage(t);
                  })
                : o && "onreadystatechange" in o.createElement("script")
                ? ((u = o.documentElement),
                  function (t) {
                    var e = o.createElement("script");
                    (e.onreadystatechange = function () {
                      f(t),
                        (e.onreadystatechange = null),
                        u.removeChild(e),
                        (e = null);
                    }),
                      u.appendChild(e);
                  })
                : function (t) {
                    setTimeout(f, 0, t);
                  })
            : h(),
          (t.setImmediate = function (t) {
            "function" != typeof t && (t = new Function("" + t));
            for (
              var e = new Array(arguments.length - 1), n = 0;
              n < e.length;
              n++
            )
              e[n] = arguments[n + 1];
            return (s[i] = { callback: t, args: e }), l(i), i++;
          }),
          (t.clearImmediate = c));
      })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
    }.call(this, n(14), n(178));
  },
  function (t, e) {
    var n,
      i,
      t = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (t) {
      n = o;
    }
    try {
      i = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (t) {
      i = r;
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return (n = setTimeout)(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    var a,
      l = [],
      u = !1,
      c = -1;
    function f() {
      u &&
        a &&
        ((u = !1), a.length ? (l = a.concat(l)) : (c = -1), l.length && h());
    }
    function h() {
      if (!u) {
        for (var t = s(f), e = ((u = !0), l.length); e; ) {
          for (a = l, l = []; ++c < e; ) a && a[c].run();
          (c = -1), (e = l.length);
        }
        (a = null),
          (u = !1),
          !(function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === r || !i) && clearTimeout) return (i = clearTimeout)(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(t);
      }
    }
    function p(t, e) {
      (this.fun = t), (this.array = e);
    }
    function d() {}
    (t.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      l.push(new p(t, e)), 1 !== l.length || u || s(h);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (t.title = "browser"),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.version = ""),
      (t.versions = {}),
      (t.on = d),
      (t.addListener = d),
      (t.once = d),
      (t.off = d),
      (t.removeListener = d),
      (t.removeAllListeners = d),
      (t.emit = d),
      (t.prependListener = d),
      (t.prependOnceListener = d),
      (t.listeners = function (t) {
        return [];
      }),
      (t.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (t.cwd = function () {
        return "/";
      }),
      (t.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (t.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    "use strict";
    var i,
      o =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      r =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AnimateOnOut =
          e.AnimateInstant =
          e.AnimateOnLoad =
          e.TemplateSwitcher =
            void 0),
        n(32)),
      n =
        ((s.prototype.addNewTemplate = function (t) {
          if (!this._queueTemplates)
            for (; 0 < this._activeTemplates.length; )
              this._activeTemplates.pop().__kill();
          this._activeTemplates.push(t);
        }),
        (s.prototype.shiftNewTemplate = function () {
          return this.queuedAnimations <= 0
            ? null
            : ((this._preTemplate = this._currentTemplate),
              (this._currentTemplate = this._activeTemplates.shift()),
              this._currentTemplate);
        }),
        (s.prototype.animateIn = function (t) {
          var e = this,
            t = ((this._isAnimatingIn = !0), this.manager.setTemplate(t));
          return (
            (t.preTemplate = this._preTemplate),
            (t.queuedAnimations = this.queuedAnimations),
            t.onAllComplete.one(function (t) {
              e.onInComplete(t);
            }),
            t.start(r.MODE.IN),
            t
          );
        }),
        (s.prototype.animateOut = function (t) {
          var e = this,
            t = ((this._isAnimatingOut = !0), this.manager.removeTemplate(t));
          return (
            (t.queuedAnimations = this.queuedAnimations),
            (t.nextTemplate = this._currentTemplate),
            t.onAllComplete.one(function (t) {
              e.onOutComplete(t);
            }),
            t.start(r.MODE.OUT),
            t
          );
        }),
        (s.prototype.onInComplete = function (t) {
          this._isAnimatingIn = !1;
        }),
        (s.prototype.onOutComplete = function (t) {
          this._isAnimatingOut = !1;
        }),
        Object.defineProperty(s.prototype, "queuedAnimations", {
          get: function () {
            return this._activeTemplates.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (s.prototype.setManager = function (t) {
          this.manager = t;
        }),
        (s.prototype.urlChange = function () {}),
        (s.prototype.kill = function () {}),
        s);
    function s(t) {
      void 0 === t && (t = !0),
        (this._activeTemplates = []),
        (this._queueTemplates = !0),
        (this._isAnimatingIn = !1),
        (this._isAnimatingOut = !1),
        (this._queueTemplates = t);
    }
    e.TemplateSwitcher = n;
    o(u, (a = n)),
      (u.prototype.addNewTemplate = function (t) {
        a.prototype.addNewTemplate.call(this, t), this.startAnimationSequence();
      }),
      (u.prototype.startAnimationSequence = function () {
        !this._isAnimatingIn &&
          !this._isAnimatingOut &&
          0 < this.queuedAnimations &&
          ((this.templateIn = this.shiftNewTemplate()),
          this._currentInController &&
            ((this.templateOut = this._currentInController.rootModule),
            this.animateOut(this.templateOut)),
          (this._currentInController = this.animateIn(this.templateIn)));
      }),
      (u.prototype.onInComplete = function (t) {
        a.prototype.onInComplete.call(this, t), this.startAnimationSequence();
      }),
      (u.prototype.onOutComplete = function (t) {
        a.prototype.onOutComplete.call(this, t), this.startAnimationSequence();
      });
    var a,
      l = u;
    function u() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    e.AnimateOnLoad = l;
    o(f, (c = n)),
      (f.prototype.urlChange = function () {
        c.prototype.urlChange.call(this),
          this._outOnUrlChange && this.startAnimationSequence();
      }),
      (f.prototype.addNewTemplate = function (t) {
        c.prototype.addNewTemplate.call(this, t), this.startAnimationSequence();
      }),
      (f.prototype.startAnimationSequence = function () {
        this._currentInController &&
          this._currentInController.isDone() &&
          this.animateOut(this._currentInController.rootModule),
          0 < this.queuedAnimations &&
            (this._currentInController = this.animateIn(
              this.shiftNewTemplate()
            ));
      }),
      (f.prototype.onInComplete = function (t) {
        c.prototype.onInComplete.call(this, t),
          (this._currentInController === t &&
            !this.manager.isLoadingTemplate()) ||
            this.animateOut(t.rootModule);
      });
    var c,
      l = f;
    function f(t, e) {
      void 0 === t && (t = !0);
      e = c.call(this, (e = void 0 === e ? !1 : e)) || this;
      return (e._outOnUrlChange = !1), (e._outOnUrlChange = t), e;
    }
    e.AnimateInstant = l;
    o(p, (h = n)),
      (p.prototype.addNewTemplate = function (t) {
        h.prototype.addNewTemplate.call(this, t), this.startAnimationSequence();
      }),
      (p.prototype.startAnimationSequence = function () {
        !this._isAnimatingIn &&
          !this._isAnimatingOut &&
          0 < this.queuedAnimations &&
          ((this.templateIn = this.shiftNewTemplate()),
          this._currentInController
            ? ((this.templateOut = this._currentInController.rootModule),
              this.animateOut(this.templateOut))
            : (this._currentInController = this.animateIn(this.templateIn)));
      }),
      (p.prototype.onInComplete = function (t) {
        h.prototype.onInComplete.call(this, t), this.startAnimationSequence();
      }),
      (p.prototype.onOutComplete = function (t) {
        h.prototype.onOutComplete.call(this, t),
          (this._currentInController = this.animateIn(this.templateIn));
      });
    var h,
      l = p;
    function p() {
      return (null !== h && h.apply(this, arguments)) || this;
    }
    e.AnimateOnOut = l;
  },
]);
//# sourceMappingURL=main.0e00186c86d7cbfcc5bd.js.map
