(() => {
  function t(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  var r,
    n,
    i,
    s,
    o,
    a,
    u,
    l,
    c,
    f,
    h,
    p,
    d,
    g,
    m,
    v,
    _,
    y,
    x,
    b,
    w,
    T,
    k,
    S,
    M,
    C,
    O = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    E = { duration: 0.5, overwrite: !1, delay: 0 },
    P = 1e8,
    A = 1e-8,
    D = 2 * Math.PI,
    R = D / 4,
    L = 0,
    B = Math.sqrt,
    z = Math.cos,
    I = Math.sin,
    Y = function (t) {
      return "string" == typeof t;
    },
    X = function (t) {
      return "function" == typeof t;
    },
    F = function (t) {
      return "number" == typeof t;
    },
    N = function (t) {
      return typeof t > "u";
    },
    V = function (t) {
      return "object" == typeof t;
    },
    q = function (t) {
      return !1 !== t;
    },
    U = function () {
      return typeof window < "u";
    },
    W = function (t) {
      return X(t) || Y(t);
    },
    H =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    j = Array.isArray,
    G = /(?:-?\.?\d|\.)+/gi,
    K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    $ = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Q = /[+-]=-?[.\d]+/,
    J = /[^,'"\[\]\s]+/gi,
    tt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    et = {},
    rt = {},
    nt = function (t) {
      return (rt = Dt(t, et)) && Ar;
    },
    it = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    st = function (t, e) {
      return !e && console.warn(t);
    },
    ot = function (t, e) {
      return (t && (et[t] = e) && rt && (rt[t] = e)) || et;
    },
    at = function () {
      return 0;
    },
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    lt = { suppressEvents: !0, kill: !1 },
    ct = { suppressEvents: !0 },
    ft = {},
    ht = [],
    pt = {},
    dt = {},
    gt = {},
    mt = 30,
    vt = [],
    _t = "",
    yt = function (t) {
      var e,
        r,
        n = t[0];
      if ((V(n) || X(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
        for (r = vt.length; r-- && !vt[r].targetTest(n); );
        e = vt[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new He(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    xt = function (t) {
      return t._gsap || yt(le(t))[0]._gsap;
    },
    bt = function (t, e, r) {
      return (r = t[e]) && X(r)
        ? t[e]()
        : (N(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    wt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    Tt = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    kt = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    St = function (t, e) {
      var r = e.charAt(0),
        n = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
      );
    },
    Mt = function (t, e) {
      for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
      return n < r;
    },
    Ct = function () {
      var t,
        e,
        r = ht.length,
        n = ht.slice(0);
      for (pt = {}, ht.length = 0, t = 0; t < r; t++)
        (e = n[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    Ot = function (t, e, r, i) {
      ht.length && !n && Ct(),
        t.render(e, r, i || (n && e < 0 && (t._initted || t._startAt))),
        ht.length && !n && Ct();
    },
    Et = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(J).length < 2
        ? e
        : Y(t)
        ? t.trim()
        : t;
    },
    Pt = function (t) {
      return t;
    },
    At = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Dt = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Rt = function t(e, r) {
      for (var n in r)
        "__proto__" !== n &&
          "constructor" !== n &&
          "prototype" !== n &&
          (e[n] = V(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
      return e;
    },
    Lt = function (t, e) {
      var r,
        n = {};
      for (r in t) r in e || (n[r] = t[r]);
      return n;
    },
    Bt = function (t) {
      var e = t.parent || s,
        r = t.keyframes
          ? (function (t) {
              return function (e, r) {
                for (var n in r)
                  n in e ||
                    ("duration" === n && t) ||
                    "ease" === n ||
                    (e[n] = r[n]);
              };
            })(j(t.keyframes))
          : At;
      if (q(t.inherit))
        for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    zt = function (t, e, r, n, i) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var s,
        o = t[n];
      if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[n] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    It = function (t, e, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var i = e._prev,
        s = e._next;
      i ? (i._next = s) : t[r] === e && (t[r] = s),
        s ? (s._prev = i) : t[n] === e && (t[n] = i),
        (e._next = e._prev = e.parent = null);
    },
    Yt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    Xt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Ft = function (t, e, r, i) {
      return (
        t._startAt &&
        (n
          ? t._startAt.revert(lt)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, i))
      );
    },
    Nt = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Vt = function (t) {
      return t._repeat ? qt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    qt = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    Ut = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Wt = function (t) {
      return (t._end = kt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0)
      ));
    },
    Ht = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = kt(
            r._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Wt(t),
          r._dirty || Xt(r, t)),
        t
      );
    },
    jt = function (t, e) {
      var r;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((r = Ut(t.rawTime(), e)),
          (!e._dur || se(0, e.totalDuration(), r) - e._tTime > A) &&
            e.render(r, !0)),
        Xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -A;
      }
    },
    Gt = function (t, e, r, n) {
      return (
        e.parent && Yt(e),
        (e._start = kt(
          (F(r) ? r : r || t !== s ? re(t, r, e) : t._time) + e._delay
        )),
        (e._end = kt(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        zt(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Qt(e) || (t._recent = e),
        n || jt(t, e),
        t._ts < 0 && Ht(t, t._tTime),
        t
      );
    },
    Kt = function (t, e) {
      return (
        (et.ScrollTrigger || it("scrollTrigger", e)) &&
        et.ScrollTrigger.create(e, t)
      );
    },
    Zt = function (t, e, r, i, s) {
      return (
        tr(t, e, s),
        t._initted
          ? !r &&
            t._pt &&
            !n &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            c !== Re.frame
            ? (ht.push(t), (t._lazy = [s, i]), 1)
            : void 0
          : 1
      );
    },
    $t = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    Qt = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    Jt = function (t, e, r, n) {
      var i = t._repeat,
        s = kt(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !n && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = i ? (i < 0 ? 1e10 : kt(s * (i + 1) + t._rDelay * i)) : s),
        o > 0 && !n && Ht(t, (t._tTime = t._tDur * o)),
        t.parent && Wt(t),
        r || Xt(t.parent, t),
        t
      );
    },
    te = function (t) {
      return t instanceof Ge ? Xt(t) : Jt(t, t._dur);
    },
    ee = { _start: 0, endTime: at, totalDuration: at },
    re = function t(e, r, n) {
      var i,
        s,
        o,
        a = e.labels,
        u = e._recent || ee,
        l = e.duration() >= P ? u.endTime(!1) : e._dur;
      return Y(r) && (isNaN(r) || r in a)
        ? ((s = r.charAt(0)),
          (o = "%" === r.substr(-1)),
          (i = r.indexOf("=")),
          "<" === s || ">" === s
            ? (i >= 0 && (r = r.replace(/=/, "")),
              ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
            : i < 0
            ? (r in a || (a[r] = l), a[r])
            : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
              o && n && (s = (s / 100) * (j(n) ? n[0] : n).totalDuration()),
              i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s))
        : null == r
        ? l
        : +r;
    },
    ne = function (t, e, r) {
      var n,
        i,
        s = F(e[1]),
        o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[o];
      if ((s && (a.duration = e[1]), (a.parent = r), t)) {
        for (n = a, i = r; i && !("immediateRender" in n); )
          (n = i.vars.defaults || {}), (i = q(i.vars.inherit) && i.parent);
        (a.immediateRender = q(n.immediateRender)),
          t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
      }
      return new sr(e[0], a, e[o + 1]);
    },
    ie = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    se = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    oe = function (t, e) {
      return Y(t) && (e = tt.exec(t)) ? e[1] : "";
    },
    ae = [].slice,
    ue = function (t, e) {
      return (
        t &&
        V(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && V(t[0]))) &&
        !t.nodeType &&
        t !== o
      );
    },
    le = function (t, e, r) {
      return i && !e && i.selector
        ? i.selector(t)
        : !Y(t) || r || (!a && Le())
        ? j(t)
          ? (function (t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  var n;
                  return (Y(t) && !e) || ue(t, 1)
                    ? (n = r).push.apply(n, le(t))
                    : r.push(t);
                }) || r
              );
            })(t, r)
          : ue(t)
          ? ae.call(t, 0)
          : t
          ? [t]
          : []
        : ae.call((e || u).querySelectorAll(t), 0);
    },
    ce = function (t) {
      return (
        (t = le(t)[0] || st("Invalid scope") || {}),
        function (e) {
          var r = t.current || t.nativeElement || t;
          return le(
            e,
            r.querySelectorAll
              ? r
              : r === t
              ? st("Invalid scope") || u.createElement("div")
              : t
          );
        }
      );
    },
    fe = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    he = function (t) {
      if (X(t)) return t;
      var e = V(t) ? t : { each: t },
        r = Ne(e.ease),
        n = e.from || 0,
        i = parseFloat(e.base) || 0,
        s = {},
        o = n > 0 && n < 1,
        a = isNaN(n) || o,
        u = e.axis,
        l = n,
        c = n;
      return (
        Y(n)
          ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
          : !o && a && ((l = n[0]), (c = n[1])),
        function (t, o, f) {
          var h,
            p,
            d,
            g,
            m,
            v,
            _,
            y,
            x,
            b = (f || e).length,
            w = s[b];
          if (!w) {
            if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, P])[1])) {
              for (
                _ = -P;
                _ < (_ = f[x++].getBoundingClientRect().left) && x < b;

              );
              x--;
            }
            for (
              w = s[b] = [],
                h = a ? Math.min(x, b) * l - 0.5 : n % x,
                p = x === P ? 0 : a ? (b * c) / x - 0.5 : (n / x) | 0,
                _ = 0,
                y = P,
                v = 0;
              v < b;
              v++
            )
              (d = (v % x) - h),
                (g = p - ((v / x) | 0)),
                (w[v] = m = u ? Math.abs("y" === u ? g : d) : B(d * d + g * g)),
                m > _ && (_ = m),
                m < y && (y = m);
            "random" === n && fe(w),
              (w.max = _ - y),
              (w.min = y),
              (w.v = b =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (x > b
                      ? b - 1
                      : u
                      ? "y" === u
                        ? b / x
                        : x
                      : Math.max(x, b / x)) ||
                  0) * ("edges" === n ? -1 : 1)),
              (w.b = b < 0 ? i - b : i),
              (w.u = oe(e.amount || e.each) || 0),
              (r = r && b < 0 ? Xe(r) : r);
          }
          return (
            (b = (w[t] - w.min) / w.max || 0),
            kt(w.b + (r ? r(b) : b) * w.v) + w.u
          );
        }
      );
    },
    pe = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var n = kt(Math.round(parseFloat(r) / t) * t * e);
        return (n - (n % 1)) / e + (F(r) ? 0 : oe(r));
      };
    },
    de = function (t, e) {
      var r,
        n,
        i = j(t);
      return (
        !i &&
          V(t) &&
          ((r = i = t.radius || P),
          t.values
            ? ((t = le(t.values)), (n = !F(t[0])) && (r *= r))
            : (t = pe(t.increment))),
        ie(
          e,
          i
            ? X(t)
              ? function (e) {
                  return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                }
              : function (e) {
                  for (
                    var i,
                      s,
                      o = parseFloat(n ? e.x : e),
                      a = parseFloat(n ? e.y : 0),
                      u = P,
                      l = 0,
                      c = t.length;
                    c--;

                  )
                    n
                      ? (i = (i = t[c].x - o) * i + (s = t[c].y - a) * s)
                      : (i = Math.abs(t[c] - o)),
                      i < u && ((u = i), (l = c));
                  return (
                    (l = !r || u <= r ? t[l] : e),
                    n || l === e || F(e) ? l : l + oe(e)
                  );
                }
            : pe(t)
        )
      );
    },
    ge = function (t, e, r, n) {
      return ie(j(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
        return j(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                ) *
                  r *
                  n
              ) / n;
      });
    },
    me = function (t, e, r) {
      return ie(r, function (r) {
        return t[~~e(r)];
      });
    },
    ve = function (t) {
      for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (n = t.indexOf(")", e)),
          (i = "[" === t.charAt(e + 7)),
          (r = t.substr(e + 7, n - e - 7).match(i ? J : G)),
          (o +=
            t.substr(s, e - s) +
            ge(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
          (s = n + 1);
      return o + t.substr(s, t.length - s);
    },
    _e = function (t, e, r, n, i) {
      var s = e - t,
        o = n - r;
      return ie(i, function (e) {
        return r + (((e - t) / s) * o || 0);
      });
    },
    ye = function (t, e, r) {
      var n,
        i,
        s,
        o = t.labels,
        a = P;
      for (n in o)
        (i = o[n] - e) < 0 == !!r &&
          i &&
          a > (i = Math.abs(i)) &&
          ((s = n), (a = i));
      return s;
    },
    xe = function (t, e, r) {
      var n,
        s,
        o,
        a = t.vars,
        u = a[e],
        l = i,
        c = t._ctx;
      if (u)
        return (
          (n = a[e + "Params"]),
          (s = a.callbackScope || t),
          r && ht.length && Ct(),
          c && (i = c),
          (o = n ? u.apply(s, n) : u.call(s)),
          (i = l),
          o
        );
    },
    be = function (t) {
      return (
        Yt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!n),
        t.progress() < 1 && xe(t, "onInterrupt"),
        t
      );
    },
    we = [],
    Te = function (t) {
      if (U()) {
        var e = (t = (!t.name && t.default) || t).name,
          r = X(t),
          n =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: at,
            render: dr,
            add: Qe,
            kill: mr,
            modifier: gr,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: cr,
            aliases: {},
            register: 0,
          };
        if ((Le(), t !== n)) {
          if (dt[e]) return;
          At(n, At(Lt(t, i), s)),
            Dt(n.prototype, Dt(i, Lt(t, s))),
            (dt[(n.prop = e)] = n),
            t.targetTest && (vt.push(n), (ft[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        ot(e, n), t.register && t.register(Ar, n, yr);
      } else we.push(t);
    },
    ke = 255,
    Se = {
      aqua: [0, ke, ke],
      lime: [0, ke, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ke],
      navy: [0, 0, 128],
      white: [ke, ke, ke],
      olive: [128, 128, 0],
      yellow: [ke, ke, 0],
      orange: [ke, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ke, 0, 0],
      pink: [ke, 192, 203],
      cyan: [0, ke, ke],
      transparent: [ke, ke, ke, 0],
    },
    Me = function (t, e, r) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : 3 * t < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) *
          ke +
          0.5) |
        0
      );
    },
    Ce = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        p = t ? (F(t) ? [t >> 16, (t >> 8) & ke, t & ke] : 0) : Se.black;
      if (!p) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Se[t]))
          p = Se[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (i = t.charAt(2)),
              (s = t.charAt(3)),
              (t =
                "#" +
                n +
                n +
                i +
                i +
                s +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (p = parseInt(t.substr(1, 6), 16)) >> 16,
              (p >> 8) & ke,
              p & ke,
              parseInt(t.substr(7), 16) / 255,
            ];
          p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ke, t & ke];
        } else if ("hsl" === t.substr(0, 3))
          if (((p = h = t.match(G)), e)) {
            if (~t.indexOf("="))
              return (p = t.match(K)), r && p.length < 4 && (p[3] = 1), p;
          } else
            (o = (+p[0] % 360) / 360),
              (a = +p[1] / 100),
              (n =
                2 * (u = +p[2] / 100) -
                (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
              p.length > 3 && (p[3] *= 1),
              (p[0] = Me(o + 1 / 3, n, i)),
              (p[1] = Me(o, n, i)),
              (p[2] = Me(o - 1 / 3, n, i));
        else p = t.match(G) || Se.transparent;
        p = p.map(Number);
      }
      return (
        e &&
          !h &&
          ((n = p[0] / ke),
          (i = p[1] / ke),
          (s = p[2] / ke),
          (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
          l === c
            ? (o = a = 0)
            : ((f = l - c),
              (a = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
              (o =
                l === n
                  ? (i - s) / f + (i < s ? 6 : 0)
                  : l === i
                  ? (s - n) / f + 2
                  : (n - i) / f + 4),
              (o *= 60)),
          (p[0] = ~~(o + 0.5)),
          (p[1] = ~~(100 * a + 0.5)),
          (p[2] = ~~(100 * u + 0.5))),
        r && p.length < 4 && (p[3] = 1),
        p
      );
    },
    Oe = function (t) {
      var e = [],
        r = [],
        n = -1;
      return (
        t.split(Pe).forEach(function (t) {
          var i = t.match(Z) || [];
          e.push.apply(e, i), r.push((n += i.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    Ee = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a = "",
        u = (t + a).match(Pe),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = Ce(t, e, 1)) &&
            l +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        r && ((s = Oe(t)), (n = r.c).join(a) !== s.c.join(a)))
      )
        for (o = (i = t.replace(Pe, "1").split(Z)).length - 1; c < o; c++)
          a +=
            i[c] +
            (~n.indexOf(c)
              ? u.shift() || l + "0,0,0,0)"
              : (s.length ? s : u.length ? u : r).shift());
      if (!i)
        for (o = (i = t.split(Pe)).length - 1; c < o; c++) a += i[c] + u[c];
      return a + i[o];
    },
    Pe = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Se) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ae = /hsl[a]?\(/,
    De = function (t) {
      var e,
        r = t.join(" ");
      if (((Pe.lastIndex = 0), Pe.test(r)))
        return (
          (e = Ae.test(r)),
          (t[1] = Ee(t[1], e)),
          (t[0] = Ee(t[0], e, Oe(t[1]))),
          !0
        );
    },
    Re =
      ((y = Date.now),
      (x = 500),
      (b = 33),
      (w = y()),
      (T = w),
      (S = k = 1e3 / 240),
      (C = function t(e) {
        var r,
          n,
          i,
          s,
          o = y() - T,
          a = !0 === e;
        if (
          (o > x && (w += o - b),
          ((r = (i = (T += o) - w) - S) > 0 || a) &&
            ((s = ++m.frame),
            (v = i - 1e3 * m.time),
            (m.time = i /= 1e3),
            (S += r + (r >= k ? 4 : k - r)),
            (n = 1)),
          a || (p = d(t)),
          n)
        )
          for (_ = 0; _ < M.length; _++) M[_](i, v, s, e);
      }),
      (m = {
        time: 0,
        frame: 0,
        tick: function () {
          C(!0);
        },
        deltaRatio: function (t) {
          return v / (1e3 / (t || 60));
        },
        wake: function () {
          l &&
            (!a &&
              U() &&
              ((o = a = window),
              (u = o.document || {}),
              (et.gsap = Ar),
              (o.gsapVersions || (o.gsapVersions = [])).push(Ar.version),
              nt(rt || o.GreenSockGlobals || (!o.gsap && o) || {}),
              (g = o.requestAnimationFrame),
              we.forEach(Te)),
            p && m.sleep(),
            (d =
              g ||
              function (t) {
                return setTimeout(t, (S - 1e3 * m.time + 1) | 0);
              }),
            (h = 1),
            C(2));
        },
        sleep: function () {
          (g ? o.cancelAnimationFrame : clearTimeout)(p), (h = 0), (d = at);
        },
        lagSmoothing: function (t, e) {
          (x = t || 1 / 0), (b = Math.min(e || 33, x));
        },
        fps: function (t) {
          (k = 1e3 / (t || 240)), (S = 1e3 * m.time + k);
        },
        add: function (t, e, r) {
          var n = e
            ? function (e, r, i, s) {
                t(e, r, i, s), m.remove(n);
              }
            : t;
          return m.remove(t), M[r ? "unshift" : "push"](n), Le(), n;
        },
        remove: function (t, e) {
          ~(e = M.indexOf(t)) && M.splice(e, 1) && _ >= e && _--;
        },
        _listeners: (M = []),
      })),
    Le = function () {
      return !h && Re.wake();
    },
    Be = {},
    ze = /^[\d.\-M][\d.\-,\s]/,
    Ie = /["']/g,
    Ye = function (t) {
      for (
        var e,
          r,
          n,
          i = {},
          s = t.substr(1, t.length - 3).split(":"),
          o = s[0],
          a = 1,
          u = s.length;
        a < u;
        a++
      )
        (r = s[a]),
          (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
          (n = r.substr(0, e)),
          (i[o] = isNaN(n) ? n.replace(Ie, "").trim() : +n),
          (o = r.substr(e + 1).trim());
      return i;
    },
    Xe = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Fe = function t(e, r) {
      for (var n, i = e._first; i; )
        i instanceof Ge
          ? t(i, r)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== r &&
            (i.timeline
              ? t(i.timeline, r)
              : ((n = i._ease),
                (i._ease = i._yEase),
                (i._yEase = n),
                (i._yoyo = r))),
          (i = i._next);
    },
    Ne = function (t, e) {
      return (
        (t &&
          (X(t)
            ? t
            : Be[t] ||
              (function (t) {
                var e = (t + "").split("("),
                  r = Be[e[0]];
                return r && e.length > 1 && r.config
                  ? r.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [Ye(e[1])]
                        : (function (t) {
                            var e = t.indexOf("(") + 1,
                              r = t.indexOf(")"),
                              n = t.indexOf("(", e);
                            return t.substring(
                              e,
                              ~n && n < r ? t.indexOf(")", r + 1) : r
                            );
                          })(t)
                            .split(",")
                            .map(Et)
                    )
                  : Be._CE && ze.test(t)
                  ? Be._CE("", t)
                  : r;
              })(t))) ||
        e
      );
    },
    Ve = function (t, e, r, n) {
      void 0 === r &&
        (r = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === n &&
          (n = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var i,
        s = { easeIn: e, easeOut: r, easeInOut: n };
      return (
        wt(t, function (t) {
          for (var e in ((Be[t] = et[t] = s),
          (Be[(i = t.toLowerCase())] = r),
          s))
            Be[
              i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Be[t + "." + e] = s[e];
        }),
        s
      );
    },
    qe = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Ue = function t(e, r, n) {
      var i = r >= 1 ? r : 1,
        s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        o = (s / D) * (Math.asin(1 / i) || 0),
        a = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * I((t - o) * s) + 1;
        },
        u =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : qe(a);
      return (
        (s = D / s),
        (u.config = function (r, n) {
          return t(e, r, n);
        }),
        u
      );
    },
    We = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var n = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        },
        i =
          "out" === e
            ? n
            : "in" === e
            ? function (t) {
                return 1 - n(1 - t);
              }
            : qe(n);
      return (
        (i.config = function (r) {
          return t(e, r);
        }),
        i
      );
    };
  wt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Ve(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Be.Linear.easeNone = Be.none = Be.Linear.easeIn),
    Ve("Elastic", Ue("in"), Ue("out"), Ue()),
    (function (t, e) {
      var r = 1 / e,
        n = function (n) {
          return n < r
            ? t * n * n
            : n < 0.7272727272727273
            ? t * Math.pow(n - 1.5 / e, 2) + 0.75
            : n < 0.9090909090909092
            ? t * (n -= 2.25 / e) * n + 0.9375
            : t * Math.pow(n - 2.625 / e, 2) + 0.984375;
        };
      Ve(
        "Bounce",
        function (t) {
          return 1 - n(1 - t);
        },
        n
      );
    })(7.5625, 2.75),
    Ve("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Ve("Circ", function (t) {
      return -(B(1 - t * t) - 1);
    }),
    Ve("Sine", function (t) {
      return 1 === t ? 1 : 1 - z(t * R);
    }),
    Ve("Back", We("in"), We("out"), We()),
    (Be.SteppedEase =
      Be.steps =
      et.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              n = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((n * se(0, 0.99999999, t)) | 0) + i) * r;
            };
          },
        }),
    (E.ease = Be["quad.out"]),
    wt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (_t += t + "," + t + "Params,");
      }
    );
  var He = function (t, e) {
      (this.id = L++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : bt),
        (this.set = e ? e.getSetter : cr);
    },
    je = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Jt(this, +t.duration, 1, 1),
          (this.data = t.data),
          i && ((this._ctx = i), i.data.push(this)),
          h || Re.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              Jt(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((Le(), !arguments.length)) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (
              Ht(this, t), !r._dp || r.parent || jt(r, this);
              r && r.parent;

            )
              r.parent._time !==
                r._start +
                  (r._ts >= 0
                    ? r._tTime / r._ts
                    : (r.totalDuration() - r._tTime) / -r._ts) &&
                r.totalTime(r._tTime, !0),
                (r = r.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              Gt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === A) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), Ot(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Vt(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Vt(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var r = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * r, e)
            : this._repeat
            ? qt(this._tTime, r) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return this._rts === -A ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Ut(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || t === -A ? 0 : this._rts),
            this.totalTime(se(-Math.abs(this._delay), this._tDur, e), !0),
            Wt(this),
            (function (t) {
              for (var e = t.parent; e && e.parent; )
                (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
            })(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Le(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== A &&
                        (this._tTime -= A)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && Gt(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (q(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Ut(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (t) {
          void 0 === t && (t = ct);
          var e = n;
          return (
            (n = t),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
              this.totalTime(-0.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            (n = e),
            this
          );
        }),
        (e.globalTime = function (t) {
          for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            (r = e._start + r / (e._ts || 1)), (e = e._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1
              : this._sat.globalTime(t)
            : r;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), te(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), te(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(re(this, t), q(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, q(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -A : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -A), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            r = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= r &&
              t < this.endTime(!0) - A
            )
          );
        }),
        (e.eventCallback = function (t, e, r) {
          var n = this.vars;
          return arguments.length > 1
            ? (e
                ? ((n[t] = e),
                  r && (n[t + "Params"] = r),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete n[t],
              this)
            : n[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (r) {
            var n = X(t) ? t : Pt,
              i = function () {
                var t = e.then;
                (e.then = null),
                  X(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                  r(n),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? i()
              : (e._prom = i);
          });
        }),
        (e.kill = function () {
          be(this);
        }),
        t
      );
    })();
  At(je.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -A,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ge = (function (r) {
    function i(e, n) {
      var i;
      return (
        void 0 === e && (e = {}),
        ((i = r.call(this, e) || this).labels = {}),
        (i.smoothChildTiming = !!e.smoothChildTiming),
        (i.autoRemoveChildren = !!e.autoRemoveChildren),
        (i._sort = q(e.sortChildren)),
        s && Gt(e.parent || s, t(i), n),
        e.reversed && i.reverse(),
        e.paused && i.paused(!0),
        e.scrollTrigger && Kt(t(i), e.scrollTrigger),
        i
      );
    }
    e(i, r);
    var o = i.prototype;
    return (
      (o.to = function (t, e, r) {
        return ne(0, arguments, this), this;
      }),
      (o.from = function (t, e, r) {
        return ne(1, arguments, this), this;
      }),
      (o.fromTo = function (t, e, r, n) {
        return ne(2, arguments, this), this;
      }),
      (o.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          Bt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new sr(t, e, re(this, r), 1),
          this
        );
      }),
      (o.call = function (t, e, r) {
        return Gt(this, sr.delayedCall(0, t, e), r);
      }),
      (o.staggerTo = function (t, e, r, n, i, s, o) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || n),
          (r.onComplete = s),
          (r.onCompleteParams = o),
          (r.parent = this),
          new sr(t, r, re(this, i)),
          this
        );
      }),
      (o.staggerFrom = function (t, e, r, n, i, s, o) {
        return (
          (r.runBackwards = 1),
          (Bt(r).immediateRender = q(r.immediateRender)),
          this.staggerTo(t, e, r, n, i, s, o)
        );
      }),
      (o.staggerFromTo = function (t, e, r, n, i, s, o, a) {
        return (
          (n.startAt = r),
          (Bt(n).immediateRender = q(n.immediateRender)),
          this.staggerTo(t, e, n, i, s, o, a)
        );
      }),
      (o.render = function (t, e, r) {
        var i,
          o,
          a,
          u,
          l,
          c,
          f,
          h,
          p,
          d,
          g,
          m,
          v = this._time,
          _ = this._dirty ? this.totalDuration() : this._tDur,
          y = this._dur,
          x = t <= 0 ? 0 : kt(t),
          b = this._zTime < 0 != t < 0 && (this._initted || !y);
        if (
          (this !== s && x > _ && t >= 0 && (x = _),
          x !== this._tTime || r || b)
        ) {
          if (
            (v !== this._time &&
              y &&
              ((x += this._time - v), (t += this._time - v)),
            (i = x),
            (p = this._start),
            (c = !(h = this._ts)),
            b && (y || (v = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((g = this._yoyo),
              (l = y + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * l + t, e, r);
            if (
              ((i = kt(x % l)),
              x === _
                ? ((u = this._repeat), (i = y))
                : ((u = ~~(x / l)) && u === x / l && ((i = y), u--),
                  i > y && (i = y)),
              (d = qt(this._tTime, l)),
              !v &&
                this._tTime &&
                d !== u &&
                this._tTime - d * l - this._dur <= 0 &&
                (d = u),
              g && 1 & u && ((i = y - i), (m = 1)),
              u !== d && !this._lock)
            ) {
              var w = g && 1 & d,
                T = w === (g && 1 & u);
              if (
                (u < d && (w = !w),
                (v = w ? 0 : y),
                (this._lock = 1),
                (this.render(v || (m ? 0 : kt(u * l)), e, !y)._lock = 0),
                (this._tTime = x),
                !e && this.parent && xe(this, "onRepeat"),
                this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                (v && v !== this._time) ||
                  c !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((y = this._dur),
                (_ = this._tDur),
                T &&
                  ((this._lock = 2),
                  (v = w ? y : -1e-4),
                  this.render(v, !0),
                  this.vars.repeatRefresh && !m && this.invalidate()),
                (this._lock = 0),
                !this._ts && !c)
              )
                return this;
              Fe(this, m);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((f = (function (t, e, r) {
                var n;
                if (r > e)
                  for (n = t._first; n && n._start <= r; ) {
                    if ("isPause" === n.data && n._start > e) return n;
                    n = n._next;
                  }
                else
                  for (n = t._last; n && n._start >= r; ) {
                    if ("isPause" === n.data && n._start < e) return n;
                    n = n._prev;
                  }
              })(this, kt(v), kt(i))),
              f && (x -= i - (i = f._start))),
            (this._tTime = x),
            (this._time = i),
            (this._act = !h),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (v = 0)),
            !v && i && !e && !u && (xe(this, "onStart"), this._tTime !== x))
          )
            return this;
          if (i >= v && t >= 0)
            for (o = this._first; o; ) {
              if (
                ((a = o._next), (o._act || i >= o._start) && o._ts && f !== o)
              ) {
                if (o.parent !== this) return this.render(t, e, r);
                if (
                  (o.render(
                    o._ts > 0
                      ? (i - o._start) * o._ts
                      : (o._dirty ? o.totalDuration() : o._tDur) +
                          (i - o._start) * o._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !c))
                ) {
                  (f = 0), a && (x += this._zTime = -A);
                  break;
                }
              }
              o = a;
            }
          else {
            o = this._last;
            for (var k = t < 0 ? t : i; o; ) {
              if (
                ((a = o._prev), (o._act || k <= o._end) && o._ts && f !== o)
              ) {
                if (o.parent !== this) return this.render(t, e, r);
                if (
                  (o.render(
                    o._ts > 0
                      ? (k - o._start) * o._ts
                      : (o._dirty ? o.totalDuration() : o._tDur) +
                          (k - o._start) * o._ts,
                    e,
                    r || (n && (o._initted || o._startAt))
                  ),
                  i !== this._time || (!this._ts && !c))
                ) {
                  (f = 0), a && (x += this._zTime = k ? -A : A);
                  break;
                }
              }
              o = a;
            }
          }
          if (
            f &&
            !e &&
            (this.pause(),
            (f.render(i >= v ? 0 : -A)._zTime = i >= v ? 1 : -1),
            this._ts)
          )
            return (this._start = p), Wt(this), this.render(t, e, r);
          this._onUpdate && !e && xe(this, "onUpdate", !0),
            ((x === _ && this._tTime >= this.totalDuration()) || (!x && v)) &&
              (p === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((t || !y) &&
                  ((x === _ && this._ts > 0) || (!x && this._ts < 0)) &&
                  Yt(this, 1),
                !e &&
                  (!(t < 0) || v) &&
                  (x || v || !_) &&
                  (xe(
                    this,
                    x === _ && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(x < _ && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (o.add = function (t, e) {
        var r = this;
        if ((F(e) || (e = re(this, e, t)), !(t instanceof je))) {
          if (j(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (Y(t)) return this.addLabel(t, e);
          if (!X(t)) return this;
          t = sr.delayedCall(0, t);
        }
        return this !== t ? Gt(this, t, e) : this;
      }),
      (o.getChildren = function (t, e, r, n) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = -P);
        for (var i = [], s = this._first; s; )
          s._start >= n &&
            (s instanceof sr
              ? e && i.push(s)
              : (r && i.push(s),
                t && i.push.apply(i, s.getChildren(!0, e, r)))),
            (s = s._next);
        return i;
      }),
      (o.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (o.remove = function (t) {
        return Y(t)
          ? this.removeLabel(t)
          : X(t)
          ? this.killTweensOf(t)
          : (It(this, t),
            t === this._recent && (this._recent = this._last),
            Xt(this));
      }),
      (o.totalTime = function (t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = kt(
                Re.time -
                  (this._ts > 0
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            r.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (o.addLabel = function (t, e) {
        return (this.labels[t] = re(this, e)), this;
      }),
      (o.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (o.addPause = function (t, e, r) {
        var n = sr.delayedCall(0, e || at, r);
        return (
          (n.data = "isPause"), (this._hasPause = 1), Gt(this, n, re(this, t))
        );
      }),
      (o.removePause = function (t) {
        var e = this._first;
        for (t = re(this, t); e; )
          e._start === t && "isPause" === e.data && Yt(e), (e = e._next);
      }),
      (o.killTweensOf = function (t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
          Ke !== n[i] && n[i].kill(t, e);
        return this;
      }),
      (o.getTweensOf = function (t, e) {
        for (var r, n = [], i = le(t), s = this._first, o = F(e); s; )
          s instanceof sr
            ? Mt(s._targets, i) &&
              (o
                ? (!Ke || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              n.push(s)
            : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
            (s = s._next);
        return n;
      }),
      (o.tweenTo = function (t, e) {
        e = e || {};
        var r,
          n = this,
          i = re(n, t),
          s = e,
          o = s.startAt,
          a = s.onStart,
          u = s.onStartParams,
          l = s.immediateRender,
          c = sr.to(
            n,
            At(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (i - (o && "time" in o ? o.time : n._time)) / n.timeScale()
                  ) ||
                  A,
                onStart: function () {
                  if ((n.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : n._time)) /
                          n.timeScale()
                      );
                    c._dur !== t && Jt(c, t, 0, 1).render(c._time, !0, !0),
                      (r = 1);
                  }
                  a && a.apply(c, u || []);
                },
              },
              e
            )
          );
        return l ? c.render(0) : c;
      }),
      (o.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, At({ startAt: { time: re(this, t) } }, r));
      }),
      (o.recent = function () {
        return this._recent;
      }),
      (o.nextLabel = function (t) {
        return void 0 === t && (t = this._time), ye(this, re(this, t));
      }),
      (o.previousLabel = function (t) {
        return void 0 === t && (t = this._time), ye(this, re(this, t), 1);
      }),
      (o.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + A);
      }),
      (o.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, s = this.labels; i; )
          i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
        if (e) for (n in s) s[n] >= r && (s[n] += t);
        return Xt(this);
      }),
      (o.invalidate = function (t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return r.prototype.invalidate.call(this, t);
      }),
      (o.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          Xt(this)
        );
      }),
      (o.totalDuration = function (t) {
        var e,
          r,
          n,
          i = 0,
          o = this,
          a = o._last,
          u = P;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -t : t)
          );
        if (o._dirty) {
          for (n = o.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              (r = a._start) > u && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (Gt(o, a, r - a._delay, 1)._lock = 0))
                : (u = r),
              r < 0 &&
                a._ts &&
                ((i -= r),
                ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                  ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
                o.shiftChildren(-r, !1, -1 / 0),
                (u = 0)),
              a._end > i && a._ts && (i = a._end),
              (a = e);
          Jt(o, o === s && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (i.updateRoot = function (t) {
        if ((s._ts && (Ot(s, Ut(t, s)), (c = Re.frame)), Re.frame >= mt)) {
          mt += O.autoSleep || 120;
          var e = s._first;
          if ((!e || !e._ts) && O.autoSleep && Re._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Re.sleep();
          }
        }
      }),
      i
    );
  })(je);
  At(Ge.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ke,
    Ze,
    $e = function (t, e, r, n, i, s, o) {
      var a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g = new yr(this._pt, t, e, 0, 1, pr, null, i),
        m = 0,
        v = 0;
      for (
        g.b = r,
          g.e = n,
          r += "",
          (p = ~(n += "").indexOf("random(")) && (n = ve(n)),
          s && (s((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
          u = r.match($) || [];
        (a = $.exec(n));

      )
        (c = a[0]),
          (f = n.substring(m, a.index)),
          l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
          c !== u[v++] &&
            ((h = parseFloat(u[v - 1]) || 0),
            (g._pt = {
              _next: g._pt,
              p: f || 1 === v ? f : ",",
              s: h,
              c: "=" === c.charAt(1) ? St(h, c) - h : parseFloat(c) - h,
              m: l && l < 4 ? Math.round : 0,
            }),
            (m = $.lastIndex));
      return (
        (g.c = m < n.length ? n.substring(m, n.length) : ""),
        (g.fp = o),
        (Q.test(n) || p) && (g.e = 0),
        (this._pt = g),
        g
      );
    },
    Qe = function (t, e, r, n, i, s, o, a, u, l) {
      X(n) && (n = n(i || 0, t, s));
      var c,
        f = t[e],
        h =
          "get" !== r
            ? r
            : X(f)
            ? u
              ? t[
                  e.indexOf("set") || !X(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : f,
        p = X(f) ? (u ? ur : ar) : or;
      if (
        (Y(n) &&
          (~n.indexOf("random(") && (n = ve(n)),
          "=" === n.charAt(1) &&
            ((c = St(h, n) + (oe(h) || 0)) || 0 === c) &&
            (n = c)),
        !l || h !== n || Ze)
      )
        return isNaN(h * n) || "" === n
          ? (!f && !(e in t) && it(e, n),
            $e.call(this, t, e, h, n, p, a || O.stringFilter, u))
          : ((c = new yr(
              this._pt,
              t,
              e,
              +h || 0,
              n - (h || 0),
              "boolean" == typeof f ? hr : fr,
              0,
              p
            )),
            u && (c.fp = u),
            o && c.modifier(o, this, t),
            (this._pt = c));
    },
    Je = function (t, e, r, n, i, s) {
      var o, a, u, l;
      if (
        dt[t] &&
        !1 !==
          (o = new dt[t]()).init(
            i,
            o.rawVars
              ? e[t]
              : (function (t, e, r, n, i) {
                  if (
                    (X(t) && (t = rr(t, i, e, r, n)),
                    !V(t) || (t.style && t.nodeType) || j(t) || H(t))
                  )
                    return Y(t) ? rr(t, i, e, r, n) : t;
                  var s,
                    o = {};
                  for (s in t) o[s] = rr(t[s], i, e, r, n);
                  return o;
                })(e[t], n, i, s, r),
            r,
            n,
            s
          ) &&
        ((r._pt = a = new yr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
        r !== f)
      )
        for (u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length; l--; )
          u[o._props[l]] = a;
      return o;
    },
    tr = function t(e, i, o) {
      var a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        v,
        _,
        y,
        x = e.vars,
        b = x.ease,
        w = x.startAt,
        T = x.immediateRender,
        k = x.lazy,
        S = x.onUpdate,
        M = x.onUpdateParams,
        C = x.callbackScope,
        O = x.runBackwards,
        D = x.yoyoEase,
        R = x.keyframes,
        L = x.autoRevert,
        B = e._dur,
        z = e._startAt,
        I = e._targets,
        Y = e.parent,
        X = Y && "nested" === Y.data ? Y.vars.targets : I,
        F = "auto" === e._overwrite && !r,
        N = e.timeline;
      if (
        (N && (!R || !b) && (b = "none"),
        (e._ease = Ne(b, E.ease)),
        (e._yEase = D ? Xe(Ne(!0 === D ? b : D, E.ease)) : 0),
        D &&
          e._yoyo &&
          !e._repeat &&
          ((D = e._yEase), (e._yEase = e._ease), (e._ease = D)),
        (e._from = !N && !!x.runBackwards),
        !N || (R && !x.stagger))
      ) {
        if (
          ((_ = (d = I[0] ? xt(I[0]).harness : 0) && x[d.prop]),
          (a = Lt(x, ft)),
          z &&
            (z._zTime < 0 && z.progress(1),
            i < 0 && O && T && !L
              ? z.render(-1, !0)
              : z.revert(O && B ? lt : ut),
            (z._lazy = 0)),
          w)
        ) {
          if (
            (Yt(
              (e._startAt = sr.set(
                I,
                At(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: Y,
                    immediateRender: !0,
                    lazy: !z && q(k),
                    startAt: null,
                    delay: 0,
                    onUpdate: S,
                    onUpdateParams: M,
                    callbackScope: C,
                    stagger: 0,
                  },
                  w
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            i < 0 && (n || (!T && !L)) && e._startAt.revert(lt),
            T && B && i <= 0 && o <= 0)
          )
            return void (i && (e._zTime = i));
        } else if (O && B && !z)
          if (
            (i && (T = !1),
            (l = At(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: T && !z && q(k),
                immediateRender: T,
                stagger: 0,
                parent: Y,
              },
              a
            )),
            _ && (l[d.prop] = _),
            Yt((e._startAt = sr.set(I, l))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            i < 0 && (n ? e._startAt.revert(lt) : e._startAt.render(-1, !0)),
            (e._zTime = i),
            T)
          ) {
            if (!i) return;
          } else t(e._startAt, A, A);
        for (
          e._pt = e._ptCache = 0, k = (B && q(k)) || (k && !B), u = 0;
          u < I.length;
          u++
        ) {
          if (
            ((p = (f = I[u])._gsap || yt(I)[u]._gsap),
            (e._ptLookup[u] = m = {}),
            pt[p.id] && ht.length && Ct(),
            (v = X === I ? u : X.indexOf(f)),
            d &&
              !1 !== (g = new d()).init(f, _ || a, e, v, X) &&
              ((e._pt = c =
                new yr(e._pt, f, g.name, 0, 1, g.render, g, 0, g.priority)),
              g._props.forEach(function (t) {
                m[t] = c;
              }),
              g.priority && (h = 1)),
            !d || _)
          )
            for (l in a)
              dt[l] && (g = Je(l, a, e, v, f, X))
                ? g.priority && (h = 1)
                : (m[l] = c =
                    Qe.call(e, f, l, "get", a[l], v, X, 0, x.stringFilter));
          e._op && e._op[u] && e.kill(f, e._op[u]),
            F &&
              e._pt &&
              ((Ke = e),
              s.killTweensOf(f, m, e.globalTime(i)),
              (y = !e.parent),
              (Ke = 0)),
            e._pt && k && (pt[p.id] = 1);
        }
        h && _r(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = S),
        (e._initted = (!e._op || e._pt) && !y),
        R && i <= 0 && N.render(P, !0, !0);
    },
    er = function (t, e, r, n) {
      var i,
        s,
        o = e.ease || n || "power1.inOut";
      if (j(e))
        (s = r[t] || (r[t] = [])),
          e.forEach(function (t, r) {
            return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
          });
      else
        for (i in e)
          (s = r[i] || (r[i] = [])),
            "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
    },
    rr = function (t, e, r, n, i) {
      return X(t)
        ? t.call(e, r, n, i)
        : Y(t) && ~t.indexOf("random(")
        ? ve(t)
        : t;
    },
    nr = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    ir = {};
  wt(nr + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (ir[t] = 1);
  });
  var sr = (function (i) {
    function o(e, n, o, a) {
      var u;
      "number" == typeof n && ((o.duration = n), (n = o), (o = null));
      var l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        v = (u = i.call(this, a ? n : Bt(n)) || this).vars,
        _ = v.duration,
        y = v.delay,
        x = v.immediateRender,
        b = v.stagger,
        w = v.overwrite,
        T = v.keyframes,
        k = v.defaults,
        S = v.scrollTrigger,
        M = v.yoyoEase,
        C = n.parent || s,
        E = (j(e) || H(e) ? F(e[0]) : "length" in n) ? [e] : le(e);
      if (
        ((u._targets = E.length
          ? yt(E)
          : st(
              "GSAP target " + e + " not found. https://greensock.com",
              !O.nullTargetWarn
            ) || []),
        (u._ptLookup = []),
        (u._overwrite = w),
        T || b || W(_) || W(y))
      ) {
        if (
          ((n = u.vars),
          (l = u.timeline =
            new Ge({
              data: "nested",
              defaults: k || {},
              targets: C && "nested" === C.data ? C.vars.targets : E,
            })).kill(),
          (l.parent = l._dp = t(u)),
          (l._start = 0),
          b || W(_) || W(y))
        ) {
          if (((h = E.length), (g = b && he(b)), V(b)))
            for (p in b) ~nr.indexOf(p) && (m || (m = {}), (m[p] = b[p]));
          for (c = 0; c < h; c++)
            ((f = Lt(n, ir)).stagger = 0),
              M && (f.yoyoEase = M),
              m && Dt(f, m),
              (d = E[c]),
              (f.duration = +rr(_, t(u), c, d, E)),
              (f.delay = (+rr(y, t(u), c, d, E) || 0) - u._delay),
              !b &&
                1 === h &&
                f.delay &&
                ((u._delay = y = f.delay), (u._start += y), (f.delay = 0)),
              l.to(d, f, g ? g(c, d, E) : 0),
              (l._ease = Be.none);
          l.duration() ? (_ = y = 0) : (u.timeline = 0);
        } else if (T) {
          Bt(At(l.vars.defaults, { ease: "none" })),
            (l._ease = Ne(T.ease || n.ease || "none"));
          var P,
            D,
            R,
            L = 0;
          if (j(T))
            T.forEach(function (t) {
              return l.to(E, t, ">");
            }),
              l.duration();
          else {
            for (p in ((f = {}), T))
              "ease" === p || "easeEach" === p || er(p, T[p], f, T.easeEach);
            for (p in f)
              for (
                P = f[p].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  L = 0,
                  c = 0;
                c < P.length;
                c++
              )
                ((R = {
                  ease: (D = P[c]).e,
                  duration: ((D.t - (c ? P[c - 1].t : 0)) / 100) * _,
                })[p] = D.v),
                  l.to(E, R, L),
                  (L += R.duration);
            l.duration() < _ && l.to({}, { duration: _ - l.duration() });
          }
        }
        _ || u.duration((_ = l.duration()));
      } else u.timeline = 0;
      return (
        !0 === w && !r && ((Ke = t(u)), s.killTweensOf(E), (Ke = 0)),
        Gt(C, t(u), o),
        n.reversed && u.reverse(),
        n.paused && u.paused(!0),
        (x ||
          (!_ &&
            !T &&
            u._start === kt(C._time) &&
            q(x) &&
            Nt(t(u)) &&
            "nested" !== C.data)) &&
          ((u._tTime = -A), u.render(Math.max(0, -y) || 0)),
        S && Kt(t(u), S),
        u
      );
    }
    e(o, i);
    var a = o.prototype;
    return (
      (a.render = function (t, e, r) {
        var i,
          s,
          o,
          a,
          u,
          l,
          c,
          f,
          h,
          p = this._time,
          d = this._tDur,
          g = this._dur,
          m = t < 0,
          v = t > d - A && !m ? d : t < A ? 0 : t;
        if (g) {
          if (
            v !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== m)
          ) {
            if (((i = v), (f = this.timeline), this._repeat)) {
              if (((a = g + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + t, e, r);
              if (
                ((i = kt(v % a)),
                v === d
                  ? ((o = this._repeat), (i = g))
                  : ((o = ~~(v / a)) && o === v / a && ((i = g), o--),
                    i > g && (i = g)),
                (l = this._yoyo && 1 & o) && ((h = this._yEase), (i = g - i)),
                (u = qt(this._tTime, a)),
                i === p && !r && this._initted)
              )
                return (this._tTime = v), this;
              o !== u &&
                (f && this._yEase && Fe(f, l),
                this.vars.repeatRefresh &&
                  !l &&
                  !this._lock &&
                  ((this._lock = r = 1),
                  (this.render(kt(a * o), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Zt(this, m ? t : i, r, e, v)) return (this._tTime = 0), this;
              if (p !== this._time) return this;
              if (g !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = v),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = c = (h || this._ease)(i / g)),
              this._from && (this.ratio = c = 1 - c),
              i && !p && !e && !o && (xe(this, "onStart"), this._tTime !== v))
            )
              return this;
            for (s = this._pt; s; ) s.r(c, s.d), (s = s._next);
            (f &&
              f.render(
                t < 0 ? t : !i && l ? -A : f._dur * f._ease(i / this._dur),
                e,
                r
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (m && Ft(this, t, 0, r), xe(this, "onUpdate")),
              this._repeat &&
                o !== u &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                xe(this, "onRepeat"),
              (v === this._tDur || !v) &&
                this._tTime === v &&
                (m && !this._onUpdate && Ft(this, t, 0, !0),
                (t || !g) &&
                  ((v === this._tDur && this._ts > 0) ||
                    (!v && this._ts < 0)) &&
                  Yt(this, 1),
                !e &&
                  (!m || p) &&
                  (v || p || l) &&
                  (xe(this, v === d ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(v < d && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, r, i) {
            var s,
              o,
              a,
              u = t.ratio,
              l =
                e < 0 ||
                (!e &&
                  ((!t._start && $t(t) && (t._initted || !Qt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !Qt(t))))
                  ? 0
                  : 1,
              c = t._rDelay,
              f = 0;
            if (
              (c &&
                t._repeat &&
                ((f = se(0, t._tDur, e)),
                (o = qt(f, c)),
                t._yoyo && 1 & o && (l = 1 - l),
                o !== qt(t._tTime, c) &&
                  ((u = 1 - l),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              l !== u || n || i || t._zTime === A || (!e && t._zTime))
            ) {
              if (!t._initted && Zt(t, e, i, r, f)) return;
              for (
                a = t._zTime,
                  t._zTime = e || (r ? A : 0),
                  r || (r = e && !a),
                  t.ratio = l,
                  t._from && (l = 1 - l),
                  t._time = 0,
                  t._tTime = f,
                  s = t._pt;
                s;

              )
                s.r(l, s.d), (s = s._next);
              e < 0 && Ft(t, e, 0, !0),
                t._onUpdate && !r && xe(t, "onUpdate"),
                f && t._repeat && !r && t.parent && xe(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === l &&
                  (l && Yt(t, 1),
                  !r &&
                    !n &&
                    (xe(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (a.targets = function () {
        return this._targets;
      }),
      (a.invalidate = function (t) {
        return (
          (!t || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          i.prototype.invalidate.call(this, t)
        );
      }),
      (a.resetTo = function (t, e, r, n) {
        h || Re.wake(), this._ts || this.play();
        var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || tr(this, i),
          (function (t, e, r, n, i, s, o) {
            var a,
              u,
              l,
              c,
              f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!f)
              for (
                f = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length;
                c--;

              ) {
                if ((a = l[c][e]) && a.d && a.d._pt)
                  for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
                if (!a)
                  return (Ze = 1), (t.vars[e] = "+=0"), tr(t, o), (Ze = 0), 1;
                f.push(a);
              }
            for (c = f.length; c--; )
              ((a = (u = f[c])._pt || u).s =
                (!n && 0 !== n) || i ? a.s + (n || 0) + s * a.c : n),
                (a.c = r - a.s),
                u.e && (u.e = Tt(r) + oe(u.e)),
                u.b && (u.b = a.s + oe(u.b));
          })(this, t, e, r, n, this._ease(i / this._dur), i)
            ? this.resetTo(t, e, r, n)
            : (Ht(this, 0),
              this.parent ||
                zt(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (a.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? be(this) : this;
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Ke && !0 !== Ke.vars.overwrite)
              ._first || be(this),
            this.parent &&
              r !== this.timeline.totalDuration() &&
              Jt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        var n,
          i,
          s,
          o,
          a,
          u,
          l,
          c = this._targets,
          f = t ? le(t) : c,
          h = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var r = t.length, n = r === e.length;
              n && r-- && t[r] === e[r];

            );
            return r < 0;
          })(c, f)
        )
          return "all" === e && (this._pt = 0), be(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (Y(e) &&
                ((a = {}),
                wt(e, function (t) {
                  return (a[t] = 1);
                }),
                (e = a)),
              (e = (function (t, e) {
                var r,
                  n,
                  i,
                  s,
                  o = t[0] ? xt(t[0]).harness : 0,
                  a = o && o.aliases;
                if (!a) return e;
                for (n in ((r = Dt({}, e)), a))
                  if ((n in r))
                    for (i = (s = a[n].split(",")).length; i--; )
                      r[s[i]] = r[n];
                return r;
              })(c, e))),
            l = c.length;
          l--;

        )
          if (~f.indexOf(c[l]))
            for (a in ((i = h[l]),
            "all" === e
              ? ((n[l] = e), (o = i), (s = {}))
              : ((s = n[l] = n[l] || {}), (o = e)),
            o))
              (u = i && i[a]) &&
                ((!("kill" in u.d) || !0 === u.d.kill(a)) && It(this, u, "_pt"),
                delete i[a]),
                "all" !== s && (s[a] = 1);
        return this._initted && !this._pt && p && be(this), this;
      }),
      (o.to = function (t, e) {
        return new o(t, e, arguments[2]);
      }),
      (o.from = function (t, e) {
        return ne(1, arguments);
      }),
      (o.delayedCall = function (t, e, r, n) {
        return new o(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: n,
        });
      }),
      (o.fromTo = function (t, e, r) {
        return ne(2, arguments);
      }),
      (o.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new o(t, e);
      }),
      (o.killTweensOf = function (t, e, r) {
        return s.killTweensOf(t, e, r);
      }),
      o
    );
  })(je);
  At(sr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    wt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      sr[t] = function () {
        var e = new Ge(),
          r = ae.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var or = function (t, e, r) {
      return (t[e] = r);
    },
    ar = function (t, e, r) {
      return t[e](r);
    },
    ur = function (t, e, r, n) {
      return t[e](n.fp, r);
    },
    lr = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    cr = function (t, e) {
      return X(t[e]) ? ar : N(t[e]) && t.setAttribute ? lr : or;
    },
    fr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    hr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    pr = function (t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;
      else if (1 === t && e.e) n = e.e;
      else {
        for (; r; )
          (n =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            n),
            (r = r._next);
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    dr = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    gr = function (t, e, r, n) {
      for (var i, s = this._pt; s; )
        (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
    },
    mr = function (t) {
      for (var e, r, n = this._pt; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? It(this, n, "_pt")
            : n.dep || (e = 1),
          (n = r);
      return !e;
    },
    vr = function (t, e, r, n) {
      n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
    },
    _r = function (t) {
      for (var e, r, n, i, s = t._pt; s; ) {
        for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
          (s._next = r) ? (r._prev = s) : (i = s),
          (s = e);
      }
      t._pt = n;
    },
    yr = (function () {
      function t(t, e, r, n, i, s, o, a, u) {
        (this.t = e),
          (this.s = n),
          (this.c = i),
          (this.p = r),
          (this.r = s || fr),
          (this.d = o || this),
          (this.set = a || or),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, r) {
          (this.mSet = this.mSet || this.set),
            (this.set = vr),
            (this.m = t),
            (this.mt = r),
            (this.tween = e);
        }),
        t
      );
    })();
  wt(
    _t +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (et.TweenMax = et.TweenLite = sr),
    (et.TimelineLite = et.TimelineMax = Ge),
    (s = new Ge({
      sortChildren: !1,
      defaults: E,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (O.stringFilter = De);
  var xr = [],
    br = {},
    wr = [],
    Tr = 0,
    kr = function (t) {
      return (br[t] || wr).map(function (t) {
        return t();
      });
    },
    Sr = function () {
      var t = Date.now(),
        e = [];
      t - Tr > 2 &&
        (kr("matchMediaInit"),
        xr.forEach(function (t) {
          var r,
            n,
            i,
            s,
            a = t.queries,
            u = t.conditions;
          for (n in a)
            (r = o.matchMedia(a[n]).matches) && (i = 1),
              r !== u[n] && ((u[n] = r), (s = 1));
          s && (t.revert(), i && e.push(t));
        }),
        kr("matchMediaRevert"),
        e.forEach(function (t) {
          return t.onMatch(t);
        }),
        (Tr = t),
        kr("matchMedia"));
    },
    Mr = (function () {
      function t(t, e) {
        (this.selector = e && ce(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          t && this.add(t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, r) {
          X(t) && ((r = e), (e = t), (t = X));
          var n = this,
            s = function () {
              var t,
                s = i,
                o = n.selector;
              return (
                s && s !== n && s.data.push(n),
                r && (n.selector = ce(r)),
                (i = n),
                (t = e.apply(n, arguments)),
                X(t) && n._r.push(t),
                (i = s),
                (n.selector = o),
                (n.isReverted = !1),
                t
              );
            };
          return (n.last = s), t === X ? s(n) : t ? (n[t] = s) : s;
        }),
        (e.ignore = function (t) {
          var e = i;
          (i = null), t(this), (i = e);
        }),
        (e.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof t
                ? e.push.apply(e, r.getTweens())
                : r instanceof sr &&
                    !(r.parent && "nested" === r.parent.data) &&
                    e.push(r);
            }),
            e
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (t, e) {
          var r = this;
          if (t) {
            var n = this.getTweens();
            this.data.forEach(function (t) {
              "isFlip" === t.data &&
                (t.revert(),
                t.getChildren(!0, !0, !1).forEach(function (t) {
                  return n.splice(n.indexOf(t), 1);
                }));
            }),
              n
                .map(function (t) {
                  return { g: t.globalTime(0), t: t };
                })
                .sort(function (t, e) {
                  return e.g - t.g || -1;
                })
                .forEach(function (e) {
                  return e.t.revert(t);
                }),
              this.data.forEach(function (e) {
                return !(e instanceof je) && e.revert && e.revert(t);
              }),
              this._r.forEach(function (e) {
                return e(t, r);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (t) {
              return t.kill && t.kill();
            });
          if ((this.clear(), e)) {
            var i = xr.indexOf(this);
            ~i && xr.splice(i, 1);
          }
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        t
      );
    })(),
    Cr = (function () {
      function t(t) {
        (this.contexts = []), (this.scope = t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, r) {
          V(t) || (t = { matches: t });
          var n,
            i,
            s,
            a = new Mr(0, r || this.scope),
            u = (a.conditions = {});
          for (i in (this.contexts.push(a),
          (e = a.add("onMatch", e)),
          (a.queries = t),
          t))
            "all" === i
              ? (s = 1)
              : (n = o.matchMedia(t[i])) &&
                (xr.indexOf(a) < 0 && xr.push(a),
                (u[i] = n.matches) && (s = 1),
                n.addListener
                  ? n.addListener(Sr)
                  : n.addEventListener("change", Sr));
          return s && e(a), this;
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        (e.kill = function (t) {
          this.contexts.forEach(function (e) {
            return e.kill(t, !0);
          });
        }),
        t
      );
    })(),
    Or = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (t) {
          return Te(t);
        });
      },
      timeline: function (t) {
        return new Ge(t);
      },
      getTweensOf: function (t, e) {
        return s.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, n) {
        Y(t) && (t = le(t)[0]);
        var i = xt(t || {}).get,
          s = r ? Pt : Et;
        return (
          "native" === r && (r = ""),
          t &&
            (e
              ? s(((dt[e] && dt[e].get) || i)(t, e, r, n))
              : function (e, r, n) {
                  return s(((dt[e] && dt[e].get) || i)(t, e, r, n));
                })
        );
      },
      quickSetter: function (t, e, r) {
        if ((t = le(t)).length > 1) {
          var n = t.map(function (t) {
              return Ar.quickSetter(t, e, r);
            }),
            i = n.length;
          return function (t) {
            for (var e = i; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var s = dt[e],
          o = xt(t),
          a = (o.harness && (o.harness.aliases || {})[e]) || e,
          u = s
            ? function (e) {
                var n = new s();
                (f._pt = 0),
                  n.init(t, r ? e + r : e, f, 0, [t]),
                  n.render(1, n),
                  f._pt && dr(1, f);
              }
            : o.set(t, a);
        return s
          ? u
          : function (e) {
              return u(t, a, r ? e + r : e, o, 1);
            };
      },
      quickTo: function (t, e, r) {
        var n,
          i = Ar.to(
            t,
            Dt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
          ),
          s = function (t, r, n) {
            return i.resetTo(e, t, r, n);
          };
        return (s.tween = i), s;
      },
      isTweening: function (t) {
        return s.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ne(t.ease, E.ease)), Rt(E, t || {});
      },
      config: function (t) {
        return Rt(O, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          n = t.plugins,
          i = t.defaults,
          s = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return (
            t &&
            !dt[t] &&
            !et[t] &&
            st(e + " effect requires " + t + " plugin.")
          );
        }),
          (gt[e] = function (t, e, n) {
            return r(le(t), At(e || {}, i), n);
          }),
          s &&
            (Ge.prototype[e] = function (t, r, n) {
              return this.add(gt[e](t, V(r) ? r : (n = r) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        Be[t] = Ne(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Ne(t, e) : Be;
      },
      getById: function (t) {
        return s.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
          n,
          i = new Ge(t);
        for (
          i.smoothChildTiming = q(t.smoothChildTiming),
            s.remove(i),
            i._dp = 0,
            i._time = i._tTime = s._time,
            r = s._first;
          r;

        )
          (n = r._next),
            (e ||
              !(
                !r._dur &&
                r instanceof sr &&
                r.vars.onComplete === r._targets[0]
              )) &&
              Gt(i, r, r._start - r._delay),
            (r = n);
        return Gt(s, i, 0), i;
      },
      context: function (t, e) {
        return t ? new Mr(t, e) : i;
      },
      matchMedia: function (t) {
        return new Cr(t);
      },
      matchMediaRefresh: function () {
        return (
          xr.forEach(function (t) {
            var e,
              r,
              n = t.conditions;
            for (r in n) n[r] && ((n[r] = !1), (e = 1));
            e && t.revert();
          }) || Sr()
        );
      },
      addEventListener: function (t, e) {
        var r = br[t] || (br[t] = []);
        ~r.indexOf(e) || r.push(e);
      },
      removeEventListener: function (t, e) {
        var r = br[t],
          n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1);
      },
      utils: {
        wrap: function t(e, r, n) {
          var i = r - e;
          return j(e)
            ? me(e, t(0, e.length), r)
            : ie(n, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, r, n) {
          var i = r - e,
            s = 2 * i;
          return j(e)
            ? me(e, t(0, e.length - 1), r)
            : ie(n, function (t) {
                return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t);
              });
        },
        distribute: he,
        random: ge,
        snap: de,
        normalize: function (t, e, r) {
          return _e(t, e, 0, 1, r);
        },
        getUnit: oe,
        clamp: function (t, e, r) {
          return ie(r, function (r) {
            return se(t, e, r);
          });
        },
        splitColor: Ce,
        toArray: le,
        selector: ce,
        mapRange: _e,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || oe(r));
          };
        },
        interpolate: function t(e, r, n, i) {
          var s = isNaN(e + r)
            ? 0
            : function (t) {
                return (1 - t) * e + t * r;
              };
          if (!s) {
            var o,
              a,
              u,
              l,
              c,
              f = Y(e),
              h = {};
            if ((!0 === n && (i = 1) && (n = null), f))
              (e = { p: e }), (r = { p: r });
            else if (j(e) && !j(r)) {
              for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++)
                u.push(t(e[a - 1], e[a]));
              l--,
                (s = function (t) {
                  t *= l;
                  var e = Math.min(c, ~~t);
                  return u[e](t - e);
                }),
                (n = r);
            } else i || (e = Dt(j(e) ? [] : {}, e));
            if (!u) {
              for (o in r) Qe.call(h, e, o, "get", r[o]);
              s = function (t) {
                return dr(t, h) || (f ? e.p : e);
              };
            }
          }
          return ie(n, s);
        },
        shuffle: fe,
      },
      install: nt,
      effects: gt,
      ticker: Re,
      updateRoot: Ge.updateRoot,
      plugins: dt,
      globalTimeline: s,
      core: {
        PropTween: yr,
        globals: ot,
        Tween: sr,
        Timeline: Ge,
        Animation: je,
        getCache: xt,
        _removeLinkedListItem: It,
        reverting: function () {
          return n;
        },
        context: function (t) {
          return t && i && (i.data.push(t), (t._ctx = i)), i;
        },
        suppressOverwrites: function (t) {
          return (r = t);
        },
      },
    };
  wt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Or[t] = sr[t]);
  }),
    Re.add(Ge.updateRoot),
    (f = Or.to({}, { duration: 0 }));
  var Er = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
      return r;
    },
    Pr = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, n) {
          n._onInit = function (t) {
            var n, i;
            if (
              (Y(r) &&
                ((n = {}),
                wt(r, function (t) {
                  return (n[t] = 1);
                }),
                (r = n)),
              e)
            ) {
              for (i in ((n = {}), r)) n[i] = e(r[i]);
              r = n;
            }
            !(function (t, e) {
              var r,
                n,
                i,
                s = t._targets;
              for (r in e)
                for (n = s.length; n--; )
                  (i = t._ptLookup[n][r]) &&
                    (i = i.d) &&
                    (i._pt && (i = Er(i, r)),
                    i && i.modifier && i.modifier(e[r], t, s[n], r));
            })(t, r);
          };
        },
      };
    },
    Ar =
      Or.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, n, i) {
            var s, o, a;
            for (s in ((this.tween = r), e))
              (a = t.getAttribute(s) || ""),
                ((o = this.add(
                  t,
                  "setAttribute",
                  (a || 0) + "",
                  e[s],
                  n,
                  i,
                  0,
                  0,
                  s
                )).op = s),
                (o.b = a),
                this._props.push(s);
          },
          render: function (t, e) {
            for (var r = e._pt; r; )
              n ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--; )
              this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
          },
        },
        Pr("roundProps", pe),
        Pr("modifiers"),
        Pr("snap", de)
      ) || Or;
  (sr.version = Ge.version = Ar.version = "3.11.5"), (l = 1), U() && Le();
  Be.Power0,
    Be.Power1,
    Be.Power2,
    Be.Power3,
    Be.Power4,
    Be.Linear,
    Be.Quad,
    Be.Cubic,
    Be.Quart,
    Be.Quint,
    Be.Strong,
    Be.Elastic,
    Be.Back,
    Be.SteppedEase,
    Be.Bounce,
    Be.Sine,
    Be.Expo,
    Be.Circ;
  var Dr,
    Rr,
    Lr,
    Br,
    zr,
    Ir,
    Yr,
    Xr,
    Fr = {},
    Nr = 180 / Math.PI,
    Vr = Math.PI / 180,
    qr = Math.atan2,
    Ur = 1e8,
    Wr = /([A-Z])/g,
    Hr = /(left|right|width|margin|padding|x)/i,
    jr = /[\s,\(]\S/,
    Gr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Kr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Zr = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    $r = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    Qr = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Jr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    tn = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    en = function (t, e, r) {
      return (t.style[e] = r);
    },
    rn = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    nn = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    sn = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    on = function (t, e, r, n, i) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
    },
    an = function (t, e, r, n, i) {
      var s = t._gsap;
      (s[e] = r), s.renderTransform(i, s);
    },
    un = "transform",
    ln = un + "Origin",
    cn = function t(e, r) {
      var n = this,
        i = this.target,
        s = i.style;
      if (e in Fr) {
        if (((this.tfm = this.tfm || {}), "transform" === e))
          return Gr.transform.split(",").forEach(function (e) {
            return t.call(n, e, r);
          });
        if (
          (~(e = Gr[e] || e).indexOf(",")
            ? e.split(",").forEach(function (t) {
                return (n.tfm[t] = On(i, t));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : On(i, e)),
          this.props.indexOf(un) >= 0)
        )
          return;
        i._gsap.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(ln, r, "")),
          (e = un);
      }
      (s || r) && this.props.push(e, r, s[e]);
    },
    fn = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    hn = function () {
      var t,
        e,
        r = this.props,
        n = this.target,
        i = n.style,
        s = n._gsap;
      for (t = 0; t < r.length; t += 3)
        r[t + 1]
          ? (n[r[t]] = r[t + 2])
          : r[t + 2]
          ? (i[r[t]] = r[t + 2])
          : i.removeProperty(
              "--" === r[t].substr(0, 2)
                ? r[t]
                : r[t].replace(Wr, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg &&
          (s.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          (!(t = Yr()) || !t.isStart) && !i[un] && (fn(i), (s.uncache = 1));
      }
    },
    pn = function (t, e) {
      var r = { target: t, props: [], revert: hn, save: cn };
      return (
        t._gsap || Ar.core.getCache(t),
        e &&
          e.split(",").forEach(function (t) {
            return r.save(t);
          }),
        r
      );
    },
    dn = function (t, e) {
      var r = Rr.createElementNS
        ? Rr.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Rr.createElement(t);
      return r.style ? r : Rr.createElement(t);
    },
    gn = function t(e, r, n) {
      var i = getComputedStyle(e);
      return (
        i[r] ||
        i.getPropertyValue(r.replace(Wr, "-$1").toLowerCase()) ||
        i.getPropertyValue(r) ||
        (!n && t(e, vn(r) || r, 1)) ||
        ""
      );
    },
    mn = "O,Moz,ms,Ms,Webkit".split(","),
    vn = function (t, e, r) {
      var n = (e || zr).style,
        i = 5;
      if (t in n && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(mn[i] + t in n);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? mn[i] : "") + t;
    },
    _n = function () {
      typeof window < "u" &&
        window.document &&
        ((Dr = window),
        (Rr = Dr.document),
        (Lr = Rr.documentElement),
        (zr = dn("div") || { style: {} }),
        dn("div"),
        (un = vn(un)),
        (ln = un + "Origin"),
        (zr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Xr = !!vn("perspective")),
        (Yr = Ar.core.reverting),
        (Br = 1));
    },
    yn = function t(e) {
      var r,
        n = dn(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (Lr.appendChild(n),
        n.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
        Lr.removeChild(n),
        (this.style.cssText = o),
        r
      );
    },
    xn = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    bn = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = yn.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === yn ||
          (e = yn.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +xn(t, ["x", "cx", "x1"]) || 0,
              y: +xn(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    wn = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !bn(t));
    },
    Tn = function (t, e) {
      if (e) {
        var r = t.style;
        e in Fr && e !== ln && (e = un),
          r.removeProperty
            ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                (e = "-" + e),
              r.removeProperty(e.replace(Wr, "-$1").toLowerCase()))
            : r.removeAttribute(e);
      }
    },
    kn = function (t, e, r, n, i, s) {
      var o = new yr(t._pt, e, r, 0, 1, s ? tn : Jr);
      return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
    },
    Sn = { deg: 1, rad: 1, turn: 1 },
    Mn = { grid: 1, flex: 1 },
    Cn = function t(e, r, n, i) {
      var s,
        o,
        a,
        u,
        l = parseFloat(n) || 0,
        c = (n + "").trim().substr((l + "").length) || "px",
        f = zr.style,
        h = Hr.test(r),
        p = "svg" === e.tagName.toLowerCase(),
        d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
        g = 100,
        m = "px" === i,
        v = "%" === i;
      return i === c || !l || Sn[i] || Sn[c]
        ? l
        : ("px" !== c && !m && (l = t(e, r, n, "px")),
          (u = e.getCTM && wn(e)),
          (!v && "%" !== c) || (!Fr[r] && !~r.indexOf("adius"))
            ? ((f[h ? "width" : "height"] = g + (m ? c : i)),
              (o =
                ~r.indexOf("adius") || ("em" === i && e.appendChild && !p)
                  ? e
                  : e.parentNode),
              u && (o = (e.ownerSVGElement || {}).parentNode),
              (!o || o === Rr || !o.appendChild) && (o = Rr.body),
              (a = o._gsap) &&
              v &&
              a.width &&
              h &&
              a.time === Re.time &&
              !a.uncache
                ? Tt((l / a.width) * g)
                : ((v || "%" === c) &&
                    !Mn[gn(o, "display")] &&
                    (f.position = gn(e, "position")),
                  o === e && (f.position = "static"),
                  o.appendChild(zr),
                  (s = zr[d]),
                  o.removeChild(zr),
                  (f.position = "absolute"),
                  h && v && (((a = xt(o)).time = Re.time), (a.width = o[d])),
                  Tt(m ? (s * l) / g : s && l ? (g / s) * l : 0)))
            : ((s = u ? e.getBBox()[h ? "width" : "height"] : e[d]),
              Tt(v ? (l / s) * g : (l / 100) * s)));
    },
    On = function (t, e, r, n) {
      var i;
      return (
        Br || _n(),
        e in Gr &&
          "transform" !== e &&
          ~(e = Gr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Fr[e] && "transform" !== e
          ? ((i = Fn(t, n)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : i.svg
                ? i.origin
                : Nn(gn(t, ln)) + " " + i.zOrigin + "px"))
          : (!(i = t.style[e]) ||
              "auto" === i ||
              n ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (Rn[e] && Rn[e](t, e, r)) ||
              gn(t, e) ||
              bt(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(i + "").trim().indexOf(" ") ? Cn(t, e, i, r) + r : i
      );
    },
    En = function (t, e, r, n) {
      if (!r || "none" === r) {
        var i = vn(e, t, 1),
          s = i && gn(t, i, 1);
        s && s !== r
          ? ((e = i), (r = s))
          : "borderColor" === e && (r = gn(t, "borderTopColor"));
      }
      var o,
        a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        v = new yr(this._pt, t.style, e, 0, 1, pr),
        _ = 0,
        y = 0;
      if (
        ((v.b = r),
        (v.e = n),
        (r += ""),
        "auto" === (n += "") &&
          ((t.style[e] = n), (n = gn(t, e) || n), (t.style[e] = r)),
        De((o = [r, n])),
        (n = o[1]),
        (u = (r = o[0]).match(Z) || []),
        (n.match(Z) || []).length)
      ) {
        for (; (a = Z.exec(n)); )
          (h = a[0]),
            (d = n.substring(_, a.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) &&
                (c = 1),
            h !== (f = u[y++] || "") &&
              ((l = parseFloat(f) || 0),
              (m = f.substr((l + "").length)),
              "=" === h.charAt(1) && (h = St(l, h) + m),
              (p = parseFloat(h)),
              (g = h.substr((p + "").length)),
              (_ = Z.lastIndex - g.length),
              g ||
                ((g = g || O.units[e] || m),
                _ === n.length && ((n += g), (v.e += g))),
              m !== g && (l = Cn(t, e, f, g) || 0),
              (v._pt = {
                _next: v._pt,
                p: d || 1 === y ? d : ",",
                s: l,
                c: p - l,
                m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
              }));
        v.c = _ < n.length ? n.substring(_, n.length) : "";
      } else v.r = "display" === e && "none" === n ? tn : Jr;
      return Q.test(n) && (v.e = 0), (this._pt = v), v;
    },
    Pn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    An = function (t) {
      var e = t.split(" "),
        r = e[0],
        n = e[1] || "50%";
      return (
        ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
          ((t = r), (r = n), (n = t)),
        (e[0] = Pn[r] || r),
        (e[1] = Pn[n] || n),
        e.join(" ")
      );
    },
    Dn = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          n,
          i,
          s = e.t,
          o = s.style,
          a = e.u,
          u = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
        else
          for (i = (a = a.split(",")).length; --i > -1; )
            (r = a[i]),
              Fr[r] && ((n = 1), (r = "transformOrigin" === r ? ln : un)),
              Tn(s, r);
        n &&
          (Tn(s, un),
          u &&
            (u.svg && s.removeAttribute("transform"),
            Fn(s, 1),
            (u.uncache = 1),
            fn(o)));
      }
    },
    Rn = {
      clearProps: function (t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var s = (t._pt = new yr(t._pt, e, r, 0, 0, Dn));
          return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
        }
      },
    },
    Ln = [1, 0, 0, 1, 0, 0],
    Bn = {},
    zn = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    In = function (t) {
      var e = gn(t, un);
      return zn(e) ? Ln : e.substr(7).match(K).map(Tt);
    },
    Yn = function (t, e) {
      var r,
        n,
        i,
        s,
        o = t._gsap || xt(t),
        a = t.style,
        u = In(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (i = t.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? Ln
          : u
        : (u === Ln &&
            !t.offsetParent &&
            t !== Lr &&
            !o.svg &&
            ((i = a.display),
            (a.display = "block"),
            (!(r = t.parentNode) || !t.offsetParent) &&
              ((s = 1), (n = t.nextElementSibling), Lr.appendChild(t)),
            (u = In(t)),
            i ? (a.display = i) : Tn(t, "display"),
            s &&
              (n
                ? r.insertBefore(t, n)
                : r
                ? r.appendChild(t)
                : Lr.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    Xn = function (t, e, r, n, i, s) {
      var o,
        a,
        u,
        l = t._gsap,
        c = i || Yn(t, !0),
        f = l.xOrigin || 0,
        h = l.yOrigin || 0,
        p = l.xOffset || 0,
        d = l.yOffset || 0,
        g = c[0],
        m = c[1],
        v = c[2],
        _ = c[3],
        y = c[4],
        x = c[5],
        b = e.split(" "),
        w = parseFloat(b[0]) || 0,
        T = parseFloat(b[1]) || 0;
      r
        ? c !== Ln &&
          (a = g * _ - m * v) &&
          ((u = w * (-m / a) + T * (g / a) - (g * x - m * y) / a),
          (w = w * (_ / a) + T * (-v / a) + (v * x - _ * y) / a),
          (T = u))
        : ((w = (o = bn(t)).x + (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
          (T =
            o.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
        n || (!1 !== n && l.smooth)
          ? ((y = w - f),
            (x = T - h),
            (l.xOffset = p + (y * g + x * v) - y),
            (l.yOffset = d + (y * m + x * _) - x))
          : (l.xOffset = l.yOffset = 0),
        (l.xOrigin = w),
        (l.yOrigin = T),
        (l.smooth = !!n),
        (l.origin = e),
        (l.originIsAbsolute = !!r),
        (t.style[ln] = "0px 0px"),
        s &&
          (kn(s, l, "xOrigin", f, w),
          kn(s, l, "yOrigin", h, T),
          kn(s, l, "xOffset", p, l.xOffset),
          kn(s, l, "yOffset", d, l.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + T);
    },
    Fn = function (t, e) {
      var r = t._gsap || new He(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        v,
        _,
        y,
        x,
        b,
        w,
        T,
        k,
        S,
        M,
        C,
        E,
        P,
        A,
        D,
        R,
        L,
        B,
        z = t.style,
        I = r.scaleX < 0,
        Y = "px",
        X = "deg",
        F = getComputedStyle(t),
        N = gn(t, ln) || "0";
      return (
        (n = i = s = u = l = c = f = h = p = 0),
        (o = a = 1),
        (r.svg = !(!t.getCTM || !wn(t))),
        F.translate &&
          (("none" !== F.translate ||
            "none" !== F.scale ||
            "none" !== F.rotate) &&
            (z[un] =
              ("none" !== F.translate
                ? "translate3d(" +
                  (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
              ("none" !== F.scale
                ? "scale(" + F.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== F[un] ? F[un] : "")),
          (z.scale = z.rotate = z.translate = "none")),
        (m = Yn(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((C = t.getBBox()),
              (N = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px"),
              (M = ""))
            : (M = !e && t.getAttribute("data-svg-origin")),
          Xn(t, M || N, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (d = r.xOrigin || 0),
        (g = r.yOrigin || 0),
        m !== Ln &&
          ((x = m[0]),
          (b = m[1]),
          (w = m[2]),
          (T = m[3]),
          (n = k = m[4]),
          (i = S = m[5]),
          6 === m.length
            ? ((o = Math.sqrt(x * x + b * b)),
              (a = Math.sqrt(T * T + w * w)),
              (u = x || b ? qr(b, x) * Nr : 0),
              (f = w || T ? qr(w, T) * Nr + u : 0) &&
                (a *= Math.abs(Math.cos(f * Vr))),
              r.svg && ((n -= d - (d * x + g * w)), (i -= g - (d * b + g * T))))
            : ((B = m[6]),
              (R = m[7]),
              (P = m[8]),
              (A = m[9]),
              (D = m[10]),
              (L = m[11]),
              (n = m[12]),
              (i = m[13]),
              (s = m[14]),
              (l = (v = qr(B, D)) * Nr),
              v &&
                ((M = k * (_ = Math.cos(-v)) + P * (y = Math.sin(-v))),
                (C = S * _ + A * y),
                (E = B * _ + D * y),
                (P = k * -y + P * _),
                (A = S * -y + A * _),
                (D = B * -y + D * _),
                (L = R * -y + L * _),
                (k = M),
                (S = C),
                (B = E)),
              (c = (v = qr(-w, D)) * Nr),
              v &&
                ((_ = Math.cos(-v)),
                (L = T * (y = Math.sin(-v)) + L * _),
                (x = M = x * _ - P * y),
                (b = C = b * _ - A * y),
                (w = E = w * _ - D * y)),
              (u = (v = qr(b, x)) * Nr),
              v &&
                ((M = x * (_ = Math.cos(v)) + b * (y = Math.sin(v))),
                (C = k * _ + S * y),
                (b = b * _ - x * y),
                (S = S * _ - k * y),
                (x = M),
                (k = C)),
              l &&
                Math.abs(l) + Math.abs(u) > 359.9 &&
                ((l = u = 0), (c = 180 - c)),
              (o = Tt(Math.sqrt(x * x + b * b + w * w))),
              (a = Tt(Math.sqrt(S * S + B * B))),
              (v = qr(k, S)),
              (f = Math.abs(v) > 2e-4 ? v * Nr : 0),
              (p = L ? 1 / (L < 0 ? -L : L) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !zn(gn(t, un))),
            M && t.setAttribute("transform", M))),
        Math.abs(f) > 90 &&
          Math.abs(f) < 270 &&
          (I
            ? ((o *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((a *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          n -
          ((r.xPercent =
            n &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          Y),
        (r.y =
          i -
          ((r.yPercent =
            i &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          Y),
        (r.z = s + Y),
        (r.scaleX = Tt(o)),
        (r.scaleY = Tt(a)),
        (r.rotation = Tt(u) + X),
        (r.rotationX = Tt(l) + X),
        (r.rotationY = Tt(c) + X),
        (r.skewX = f + X),
        (r.skewY = h + X),
        (r.transformPerspective = p + Y),
        (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (z[ln] = Nn(N)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = O.force3D),
        (r.renderTransform = r.svg ? Gn : Xr ? jn : qn),
        (r.uncache = 0),
        r
      );
    },
    Nn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Vn = function (t, e, r) {
      var n = oe(e);
      return Tt(parseFloat(e) + parseFloat(Cn(t, "x", r + "px", n))) + n;
    },
    qn = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        jn(t, e);
    },
    Un = "0deg",
    Wn = "0px",
    Hn = ") ",
    jn = function (t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        s = r.x,
        o = r.y,
        a = r.z,
        u = r.rotation,
        l = r.rotationY,
        c = r.rotationX,
        f = r.skewX,
        h = r.skewY,
        p = r.scaleX,
        d = r.scaleY,
        g = r.transformPerspective,
        m = r.force3D,
        v = r.target,
        _ = r.zOrigin,
        y = "",
        x = ("auto" === m && t && 1 !== t) || !0 === m;
      if (_ && (c !== Un || l !== Un)) {
        var b,
          w = parseFloat(l) * Vr,
          T = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(c) * Vr),
          (b = Math.cos(w)),
          (s = Vn(v, s, T * b * -_)),
          (o = Vn(v, o, -Math.sin(w) * -_)),
          (a = Vn(v, a, k * b * -_ + _));
      }
      g !== Wn && (y += "perspective(" + g + Hn),
        (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
        (x || s !== Wn || o !== Wn || a !== Wn) &&
          (y +=
            a !== Wn || x
              ? "translate3d(" + s + ", " + o + ", " + a + ") "
              : "translate(" + s + ", " + o + Hn),
        u !== Un && (y += "rotate(" + u + Hn),
        l !== Un && (y += "rotateY(" + l + Hn),
        c !== Un && (y += "rotateX(" + c + Hn),
        (f !== Un || h !== Un) && (y += "skew(" + f + ", " + h + Hn),
        (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + Hn),
        (v.style[un] = y || "translate(0, 0)");
    },
    Gn = function (t, e) {
      var r,
        n,
        i,
        s,
        o,
        a = e || this,
        u = a.xPercent,
        l = a.yPercent,
        c = a.x,
        f = a.y,
        h = a.rotation,
        p = a.skewX,
        d = a.skewY,
        g = a.scaleX,
        m = a.scaleY,
        v = a.target,
        _ = a.xOrigin,
        y = a.yOrigin,
        x = a.xOffset,
        b = a.yOffset,
        w = a.forceCSS,
        T = parseFloat(c),
        k = parseFloat(f);
      (h = parseFloat(h)),
        (p = parseFloat(p)),
        (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
        h || p
          ? ((h *= Vr),
            (p *= Vr),
            (r = Math.cos(h) * g),
            (n = Math.sin(h) * g),
            (i = Math.sin(h - p) * -m),
            (s = Math.cos(h - p) * m),
            p &&
              ((d *= Vr),
              (o = Math.tan(p - d)),
              (i *= o = Math.sqrt(1 + o * o)),
              (s *= o),
              d &&
                ((o = Math.tan(d)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
            (r = Tt(r)),
            (n = Tt(n)),
            (i = Tt(i)),
            (s = Tt(s)))
          : ((r = g), (s = m), (n = i = 0)),
        ((T && !~(c + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) &&
          ((T = Cn(v, "x", c, "px")), (k = Cn(v, "y", f, "px"))),
        (_ || y || x || b) &&
          ((T = Tt(T + _ - (_ * r + y * i) + x)),
          (k = Tt(k + y - (_ * n + y * s) + b))),
        (u || l) &&
          ((o = v.getBBox()),
          (T = Tt(T + (u / 100) * o.width)),
          (k = Tt(k + (l / 100) * o.height))),
        (o =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          s +
          "," +
          T +
          "," +
          k +
          ")"),
        v.setAttribute("transform", o),
        w && (v.style[un] = o);
    },
    Kn = function (t, e, r, n, i) {
      var s,
        o,
        a = 360,
        u = Y(i),
        l = parseFloat(i) * (u && ~i.indexOf("rad") ? Nr : 1) - n,
        c = n + l + "deg";
      return (
        u &&
          ("short" === (s = i.split("_")[1]) &&
            (l %= a) !== l % 180 &&
            (l += l < 0 ? a : -a),
          "cw" === s && l < 0
            ? (l = ((l + a * Ur) % a) - ~~(l / a) * a)
            : "ccw" === s && l > 0 && (l = ((l - a * Ur) % a) - ~~(l / a) * a)),
        (t._pt = o = new yr(t._pt, e, r, n, l, Zr)),
        (o.e = c),
        (o.u = "deg"),
        t._props.push(r),
        o
      );
    },
    Zn = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    $n = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c = Zn({}, r._gsap),
        f = r.style;
      for (i in (c.svg
        ? ((s = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (f[un] = e),
          (n = Fn(r, 1)),
          Tn(r, un),
          r.setAttribute("transform", s))
        : ((s = getComputedStyle(r)[un]),
          (f[un] = e),
          (n = Fn(r, 1)),
          (f[un] = s)),
      Fr))
        (s = c[i]) !== (o = n[i]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
          ((a = oe(s) !== (l = oe(o)) ? Cn(r, i, s, l) : parseFloat(s)),
          (u = parseFloat(o)),
          (t._pt = new yr(t._pt, n, i, a, u - a, Kr)),
          (t._pt.u = l || 0),
          t._props.push(i));
      Zn(n, c);
    };
  wt("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      n = "Right",
      i = "Bottom",
      s = "Left",
      o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (
        r
      ) {
        return e < 2 ? t + r : "border" + r + t;
      });
    Rn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
      var s, a;
      if (arguments.length < 4)
        return (
          (s = o.map(function (e) {
            return On(t, e, r);
          })),
          5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
        );
      (s = (n + "").split(" ")),
        (a = {}),
        o.forEach(function (t, e) {
          return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, i);
    };
  });
  var Qn = {
    name: "css",
    register: _n,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, n, i) {
      var s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        v,
        _,
        y,
        x,
        b = this._props,
        w = t.style,
        T = r.vars.startAt;
      for (f in (Br || _n(),
      (this.styles = this.styles || pn(t)),
      (x = this.styles.props),
      (this.tween = r),
      e))
        if ("autoRound" !== f && ((o = e[f]), !dt[f] || !Je(f, e, r, n, t, i)))
          if (
            ((l = typeof o),
            (c = Rn[f]),
            "function" === l && (l = typeof (o = o.call(r, n, t, i))),
            "string" === l && ~o.indexOf("random(") && (o = ve(o)),
            c)
          )
            c(this, t, f, o, r) && (y = 1);
          else if ("--" === f.substr(0, 2))
            (s = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
              (o += ""),
              (Pe.lastIndex = 0),
              Pe.test(s) || ((h = oe(s)), (p = oe(o))),
              p ? h !== p && (s = Cn(t, f, s, p) + p) : h && (o += h),
              this.add(w, "setProperty", s, o, n, i, 0, 0, f),
              b.push(f),
              x.push(f, 0, w[f]);
          else if ("undefined" !== l) {
            if (
              (T && f in T
                ? ((s =
                    "function" == typeof T[f] ? T[f].call(r, n, t, i) : T[f]),
                  Y(s) && ~s.indexOf("random(") && (s = ve(s)),
                  oe(s + "") || (s += O.units[f] || oe(On(t, f)) || ""),
                  "=" === (s + "").charAt(1) && (s = On(t, f)))
                : (s = On(t, f)),
              (u = parseFloat(s)),
              (d = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) &&
                (o = o.substr(2)),
              (a = parseFloat(o)),
              f in Gr &&
                ("autoAlpha" === f &&
                  (1 === u && "hidden" === On(t, "visibility") && a && (u = 0),
                  x.push("visibility", 0, w.visibility),
                  kn(
                    this,
                    w,
                    "visibility",
                    u ? "inherit" : "hidden",
                    a ? "inherit" : "hidden",
                    !a
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = Gr[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (g = f in Fr))
            )
              if (
                (this.styles.save(f),
                m ||
                  (((v = t._gsap).renderTransform && !e.parseTransform) ||
                    Fn(t, e.parseTransform),
                  (_ = !1 !== e.smoothOrigin && v.smooth),
                  ((m = this._pt =
                    new yr(
                      this._pt,
                      w,
                      un,
                      0,
                      1,
                      v.renderTransform,
                      v,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new yr(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (d ? St(v.scaleY, d + a) : a) - v.scaleY || 0,
                  Kr
                )),
                  (this._pt.u = 0),
                  b.push("scaleY", f),
                  (f += "X");
              else {
                if ("transformOrigin" === f) {
                  x.push(ln, 0, w[ln]),
                    (o = An(o)),
                    v.svg
                      ? Xn(t, o, 0, _, 0, this)
                      : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin &&
                          kn(this, v, "zOrigin", v.zOrigin, p),
                        kn(this, w, f, Nn(s), Nn(o)));
                  continue;
                }
                if ("svgOrigin" === f) {
                  Xn(t, o, 1, _, 0, this);
                  continue;
                }
                if (f in Bn) {
                  Kn(this, v, f, u, d ? St(u, d + o) : o);
                  continue;
                }
                if ("smoothOrigin" === f) {
                  kn(this, v, "smooth", v.smooth, o);
                  continue;
                }
                if ("force3D" === f) {
                  v[f] = o;
                  continue;
                }
                if ("transform" === f) {
                  $n(this, o, t);
                  continue;
                }
              }
            else f in w || (f = vn(f) || f);
            if (
              g ||
              ((a || 0 === a) && (u || 0 === u) && !jr.test(o) && f in w)
            )
              a || (a = 0),
                (h = (s + "").substr((u + "").length)) !==
                  (p = oe(o) || (f in O.units ? O.units[f] : h)) &&
                  (u = Cn(t, f, s, p)),
                (this._pt = new yr(
                  this._pt,
                  g ? v : w,
                  f,
                  u,
                  (d ? St(u, d + a) : a) - u,
                  g || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                    ? Kr
                    : Qr
                )),
                (this._pt.u = p || 0),
                h !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = $r));
            else if (f in w) En.call(this, t, f, s, d ? d + o : o);
            else if (f in t) this.add(t, f, s || t[f], d ? d + o : o, n, i);
            else if ("parseTransform" !== f) {
              it(f, o);
              continue;
            }
            g || (f in w ? x.push(f, 0, w[f]) : x.push(f, 1, s || t[f])),
              b.push(f);
          }
      y && _r(this);
    },
    render: function (t, e) {
      if (e.tween._time || !Yr())
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      else e.styles.revert();
    },
    get: On,
    aliases: Gr,
    getSetter: function (t, e, r) {
      var n = Gr[e];
      return (
        n && n.indexOf(",") < 0 && (e = n),
        e in Fr && e !== ln && (t._gsap.x || On(t, "x"))
          ? r && Ir === r
            ? "scale" === e
              ? sn
              : nn
            : (Ir = r || {}) && ("scale" === e ? on : an)
          : t.style && !N(t.style[e])
          ? en
          : ~e.indexOf("-")
          ? rn
          : cr(t, e)
      );
    },
    core: { _removeProperty: Tn, _getMatrix: Yn },
  };
  (Ar.utils.checkPrefix = vn),
    (Ar.core.getStyleSaver = pn),
    (function (t, e, r, n) {
      var i = wt(
        t +
          "," +
          e +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Fr[t] = 1;
        }
      );
      wt(e, function (t) {
        (O.units[t] = "deg"), (Bn[t] = 1);
      }),
        (Gr[i[13]] = t + "," + e),
        wt(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            Gr[e[1]] = i[e[0]];
          }
        );
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY"
    ),
    wt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        O.units[t] = "px";
      }
    ),
    Ar.registerPlugin(Qn);
  var Jn = Ar.registerPlugin(Qn) || Ar;
  Jn.core.Tween;
  function ti(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  var ei,
    ri,
    ni,
    ii,
    si,
    oi,
    ai,
    ui,
    li,
    ci,
    fi,
    hi,
    pi,
    di = function () {
      return (
        ei ||
        (typeof window < "u" && (ei = window.gsap) && ei.registerPlugin && ei)
      );
    },
    gi = 1,
    mi = [],
    vi = [],
    _i = [],
    yi = Date.now,
    xi = function (t, e) {
      return e;
    },
    bi = function (t, e) {
      return ~_i.indexOf(t) && _i[_i.indexOf(t) + 1][e];
    },
    wi = function (t) {
      return !!~ci.indexOf(t);
    },
    Ti = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !n, capture: !!i });
    },
    ki = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    Si = "scrollLeft",
    Mi = "scrollTop",
    Ci = function () {
      return (fi && fi.isPressed) || vi.cache++;
    },
    Oi = function (t, e) {
      var r = function r(n) {
        if (n || 0 === n) {
          gi && (ni.history.scrollRestoration = "manual");
          var i = fi && fi.isPressed;
          (n = r.v = Math.round(n) || (fi && fi.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = vi.cache),
            i && xi("ss", n);
        } else
          (e || vi.cache !== r.cacheID || xi("ref")) &&
            ((r.cacheID = vi.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (r.offset = 0), t && r;
    },
    Ei = {
      s: Si,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Oi(function (t) {
        return arguments.length
          ? ni.scrollTo(t, Pi.sc())
          : ni.pageXOffset || ii[Si] || si[Si] || oi[Si] || 0;
      }),
    },
    Pi = {
      s: Mi,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ei,
      sc: Oi(function (t) {
        return arguments.length
          ? ni.scrollTo(Ei.sc(), t)
          : ni.pageYOffset || ii[Mi] || si[Mi] || oi[Mi] || 0;
      }),
    },
    Ai = function (t) {
      return (
        ei.utils.toArray(t)[0] ||
        ("string" == typeof t && !1 !== ei.config().nullTargetWarn
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    Di = function (t, e) {
      var r = e.s,
        n = e.sc;
      wi(t) && (t = ii.scrollingElement || si);
      var i = vi.indexOf(t),
        s = n === Pi.sc ? 1 : 2;
      !~i && (i = vi.push(t) - 1),
        vi[i + s] || t.addEventListener("scroll", Ci);
      var o = vi[i + s],
        a =
          o ||
          (vi[i + s] =
            Oi(bi(t, r), !0) ||
            (wi(t)
              ? n
              : Oi(function (e) {
                  return arguments.length ? (t[r] = e) : t[r];
                })));
      return (
        (a.target = t),
        o || (a.smooth = "smooth" === ei.getProperty(t, "scrollBehavior")),
        a
      );
    },
    Ri = function (t, e, r) {
      var n = t,
        i = t,
        s = yi(),
        o = s,
        a = e || 50,
        u = Math.max(500, 3 * a),
        l = function (t, e) {
          var u = yi();
          e || u - s > a
            ? ((i = n), (n = t), (o = s), (s = u))
            : r
            ? (n += t)
            : (n = i + ((t - i) / (u - o)) * (s - o));
        };
      return {
        update: l,
        reset: function () {
          (i = n = r ? 0 : n), (o = s = 0);
        },
        getVelocity: function (t) {
          var e = o,
            a = i,
            c = yi();
          return (
            (t || 0 === t) && t !== n && l(t),
            s === o || c - o > u
              ? 0
              : ((n + (r ? a : -a)) / ((r ? c : s) - e)) * 1e3
          );
        },
      };
    },
    Li = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Bi = function (t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r;
    },
    zi = function () {
      (li = ei.core.globals().ScrollTrigger) &&
        li.core &&
        (function () {
          var t = li.core,
            e = t.bridge || {},
            r = t._scrollers,
            n = t._proxies;
          r.push.apply(r, vi),
            n.push.apply(n, _i),
            (vi = r),
            (_i = n),
            (xi = function (t, r) {
              return e[t](r);
            });
        })();
    },
    Ii = function (t) {
      return (
        (ei = t || di()) &&
          typeof document < "u" &&
          document.body &&
          ((ni = window),
          (ii = document),
          (si = ii.documentElement),
          (oi = ii.body),
          (ci = [ni, ii, si, oi]),
          ei.utils.clamp,
          (pi = ei.core.context || function () {}),
          (ui = "onpointerenter" in oi ? "pointer" : "mouse"),
          (ai = Yi.isTouch =
            ni.matchMedia &&
            ni.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in ni ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (hi = Yi.eventTypes =
            (
              "ontouchstart" in si
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in si
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (gi = 0);
          }, 500),
          zi(),
          (ri = 1)),
        ri
      );
    };
  (Ei.op = Pi), (vi.cache = 0);
  var Yi = (function () {
    function t(t) {
      this.init(t);
    }
    return (
      (t.prototype.init = function (t) {
        ri || Ii(ei) || console.warn("Please gsap.registerPlugin(Observer)"),
          li || zi();
        var e = t.tolerance,
          r = t.dragMinimum,
          n = t.type,
          i = t.target,
          s = t.lineHeight,
          o = t.debounce,
          a = t.preventDefault,
          u = t.onStop,
          l = t.onStopDelay,
          c = t.ignore,
          f = t.wheelSpeed,
          h = t.event,
          p = t.onDragStart,
          d = t.onDragEnd,
          g = t.onDrag,
          m = t.onPress,
          v = t.onRelease,
          _ = t.onRight,
          y = t.onLeft,
          x = t.onUp,
          b = t.onDown,
          w = t.onChangeX,
          T = t.onChangeY,
          k = t.onChange,
          S = t.onToggleX,
          M = t.onToggleY,
          C = t.onHover,
          O = t.onHoverEnd,
          E = t.onMove,
          P = t.ignoreCheck,
          A = t.isNormalizer,
          D = t.onGestureStart,
          R = t.onGestureEnd,
          L = t.onWheel,
          B = t.onEnable,
          z = t.onDisable,
          I = t.onClick,
          Y = t.scrollSpeed,
          X = t.capture,
          F = t.allowClicks,
          N = t.lockAxis,
          V = t.onLockAxis;
        (this.target = i = Ai(i) || si),
          (this.vars = t),
          c && (c = ei.utils.toArray(c)),
          (e = e || 1e-9),
          (r = r || 0),
          (f = f || 1),
          (Y = Y || 1),
          (n = n || "wheel,touch,pointer"),
          (o = !1 !== o),
          s || (s = parseFloat(ni.getComputedStyle(oi).lineHeight) || 22);
        var q,
          U,
          W,
          H,
          j,
          G,
          K,
          Z = this,
          $ = 0,
          Q = 0,
          J = Di(i, Ei),
          tt = Di(i, Pi),
          et = J(),
          rt = tt(),
          nt =
            ~n.indexOf("touch") &&
            !~n.indexOf("pointer") &&
            "pointerdown" === hi[0],
          it = wi(i),
          st = i.ownerDocument || ii,
          ot = [0, 0, 0],
          at = [0, 0, 0],
          ut = 0,
          lt = function () {
            return (ut = yi());
          },
          ct = function (t, e) {
            return (
              ((Z.event = t) && c && ~c.indexOf(t.target)) ||
              (e && nt && "touch" !== t.pointerType) ||
              (P && P(t, e))
            );
          },
          ft = function () {
            var t = (Z.deltaX = Bi(ot)),
              r = (Z.deltaY = Bi(at)),
              n = Math.abs(t) >= e,
              i = Math.abs(r) >= e;
            k && (n || i) && k(Z, t, r, ot, at),
              n &&
                (_ && Z.deltaX > 0 && _(Z),
                y && Z.deltaX < 0 && y(Z),
                w && w(Z),
                S && Z.deltaX < 0 != $ < 0 && S(Z),
                ($ = Z.deltaX),
                (ot[0] = ot[1] = ot[2] = 0)),
              i &&
                (b && Z.deltaY > 0 && b(Z),
                x && Z.deltaY < 0 && x(Z),
                T && T(Z),
                M && Z.deltaY < 0 != Q < 0 && M(Z),
                (Q = Z.deltaY),
                (at[0] = at[1] = at[2] = 0)),
              (H || W) && (E && E(Z), W && (g(Z), (W = !1)), (H = !1)),
              G && !(G = !1) && V && V(Z),
              j && (L(Z), (j = !1)),
              (q = 0);
          },
          ht = function (t, e, r) {
            (ot[r] += t),
              (at[r] += e),
              Z._vx.update(t),
              Z._vy.update(e),
              o ? q || (q = requestAnimationFrame(ft)) : ft();
          },
          pt = function (t, e) {
            N &&
              !K &&
              ((Z.axis = K = Math.abs(t) > Math.abs(e) ? "x" : "y"), (G = !0)),
              "y" !== K && ((ot[2] += t), Z._vx.update(t, !0)),
              "x" !== K && ((at[2] += e), Z._vy.update(e, !0)),
              o ? q || (q = requestAnimationFrame(ft)) : ft();
          },
          dt = function (t) {
            if (!ct(t, 1)) {
              var e = (t = Li(t, a)).clientX,
                n = t.clientY,
                i = e - Z.x,
                s = n - Z.y,
                o = Z.isDragging;
              (Z.x = e),
                (Z.y = n),
                (o ||
                  Math.abs(Z.startX - e) >= r ||
                  Math.abs(Z.startY - n) >= r) &&
                  (g && (W = !0),
                  o || (Z.isDragging = !0),
                  pt(i, s),
                  o || (p && p(Z)));
            }
          },
          gt = (Z.onPress = function (t) {
            ct(t, 1) ||
              (t && t.button) ||
              ((Z.axis = K = null),
              U.pause(),
              (Z.isPressed = !0),
              (t = Li(t)),
              ($ = Q = 0),
              (Z.startX = Z.x = t.clientX),
              (Z.startY = Z.y = t.clientY),
              Z._vx.reset(),
              Z._vy.reset(),
              Ti(A ? i : st, hi[1], dt, a, !0),
              (Z.deltaX = Z.deltaY = 0),
              m && m(Z));
          }),
          mt = (Z.onRelease = function (t) {
            if (!ct(t, 1)) {
              ki(A ? i : st, hi[1], dt, !0);
              var e = !isNaN(Z.y - Z.startY),
                r =
                  Z.isDragging &&
                  (Math.abs(Z.x - Z.startX) > 3 ||
                    Math.abs(Z.y - Z.startY) > 3),
                n = Li(t);
              !r &&
                e &&
                (Z._vx.reset(),
                Z._vy.reset(),
                a &&
                  F &&
                  ei.delayedCall(0.08, function () {
                    if (yi() - ut > 300 && !t.defaultPrevented)
                      if (t.target.click) t.target.click();
                      else if (st.createEvent) {
                        var e = st.createEvent("MouseEvents");
                        e.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          ni,
                          1,
                          n.screenX,
                          n.screenY,
                          n.clientX,
                          n.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          t.target.dispatchEvent(e);
                      }
                  })),
                (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
                u && !A && U.restart(!0),
                d && r && d(Z),
                v && v(Z, r);
            }
          }),
          vt = function (t) {
            return (
              t.touches &&
              t.touches.length > 1 &&
              (Z.isGesturing = !0) &&
              D(t, Z.isDragging)
            );
          },
          _t = function () {
            return (Z.isGesturing = !1) || R(Z);
          },
          yt = function (t) {
            if (!ct(t)) {
              var e = J(),
                r = tt();
              ht((e - et) * Y, (r - rt) * Y, 1),
                (et = e),
                (rt = r),
                u && U.restart(!0);
            }
          },
          xt = function (t) {
            if (!ct(t)) {
              (t = Li(t, a)), L && (j = !0);
              var e =
                (1 === t.deltaMode
                  ? s
                  : 2 === t.deltaMode
                  ? ni.innerHeight
                  : 1) * f;
              ht(t.deltaX * e, t.deltaY * e, 0), u && !A && U.restart(!0);
            }
          },
          bt = function (t) {
            if (!ct(t)) {
              var e = t.clientX,
                r = t.clientY,
                n = e - Z.x,
                i = r - Z.y;
              (Z.x = e), (Z.y = r), (H = !0), (n || i) && pt(n, i);
            }
          },
          wt = function (t) {
            (Z.event = t), C(Z);
          },
          Tt = function (t) {
            (Z.event = t), O(Z);
          },
          kt = function (t) {
            return ct(t) || (Li(t, a) && I(Z));
          };
        (U = Z._dc =
          ei
            .delayedCall(l || 0.25, function () {
              Z._vx.reset(), Z._vy.reset(), U.pause(), u && u(Z);
            })
            .pause()),
          (Z.deltaX = Z.deltaY = 0),
          (Z._vx = Ri(0, 50, !0)),
          (Z._vy = Ri(0, 50, !0)),
          (Z.scrollX = J),
          (Z.scrollY = tt),
          (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
          pi(this),
          (Z.enable = function (t) {
            return (
              Z.isEnabled ||
                (Ti(it ? st : i, "scroll", Ci),
                n.indexOf("scroll") >= 0 && Ti(it ? st : i, "scroll", yt, a, X),
                n.indexOf("wheel") >= 0 && Ti(i, "wheel", xt, a, X),
                ((n.indexOf("touch") >= 0 && ai) ||
                  n.indexOf("pointer") >= 0) &&
                  (Ti(i, hi[0], gt, a, X),
                  Ti(st, hi[2], mt),
                  Ti(st, hi[3], mt),
                  F && Ti(i, "click", lt, !1, !0),
                  I && Ti(i, "click", kt),
                  D && Ti(st, "gesturestart", vt),
                  R && Ti(st, "gestureend", _t),
                  C && Ti(i, ui + "enter", wt),
                  O && Ti(i, ui + "leave", Tt),
                  E && Ti(i, ui + "move", bt)),
                (Z.isEnabled = !0),
                t && t.type && gt(t),
                B && B(Z)),
              Z
            );
          }),
          (Z.disable = function () {
            Z.isEnabled &&
              (mi.filter(function (t) {
                return t !== Z && wi(t.target);
              }).length || ki(it ? st : i, "scroll", Ci),
              Z.isPressed &&
                (Z._vx.reset(), Z._vy.reset(), ki(A ? i : st, hi[1], dt, !0)),
              ki(it ? st : i, "scroll", yt, X),
              ki(i, "wheel", xt, X),
              ki(i, hi[0], gt, X),
              ki(st, hi[2], mt),
              ki(st, hi[3], mt),
              ki(i, "click", lt, !0),
              ki(i, "click", kt),
              ki(st, "gesturestart", vt),
              ki(st, "gestureend", _t),
              ki(i, ui + "enter", wt),
              ki(i, ui + "leave", Tt),
              ki(i, ui + "move", bt),
              (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
              z && z(Z));
          }),
          (Z.kill = Z.revert =
            function () {
              Z.disable();
              var t = mi.indexOf(Z);
              t >= 0 && mi.splice(t, 1), fi === Z && (fi = 0);
            }),
          mi.push(Z),
          A && wi(i) && (fi = Z),
          Z.enable(h);
      }),
      (function (t, e, r) {
        e && ti(t.prototype, e), r && ti(t, r);
      })(t, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      t
    );
  })();
  (Yi.version = "3.11.5"),
    (Yi.create = function (t) {
      return new Yi(t);
    }),
    (Yi.register = Ii),
    (Yi.getAll = function () {
      return mi.slice();
    }),
    (Yi.getById = function (t) {
      return mi.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    di() && ei.registerPlugin(Yi);
  var Xi,
    Fi,
    Ni,
    Vi,
    qi,
    Ui,
    Wi,
    Hi,
    ji,
    Gi,
    Ki,
    Zi,
    $i,
    Qi,
    Ji,
    ts,
    es,
    rs,
    ns,
    is,
    ss,
    os,
    as,
    us,
    ls,
    cs,
    fs,
    hs,
    ps,
    ds,
    gs,
    ms,
    vs,
    _s,
    ys = 1,
    xs = Date.now,
    bs = xs(),
    ws = 0,
    Ts = 0,
    ks = function t() {
      return Ts && requestAnimationFrame(t);
    },
    Ss = function () {
      return (Qi = 1);
    },
    Ms = function () {
      return (Qi = 0);
    },
    Cs = function (t) {
      return t;
    },
    Os = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Es = function () {
      return typeof window < "u";
    },
    Ps = function () {
      return Xi || (Es() && (Xi = window.gsap) && Xi.registerPlugin && Xi);
    },
    As = function (t) {
      return !!~Wi.indexOf(t);
    },
    Ds = function (t) {
      return (
        bi(t, "getBoundingClientRect") ||
        (As(t)
          ? function () {
              return (
                (Uo.width = Ni.innerWidth), (Uo.height = Ni.innerHeight), Uo
              );
            }
          : function () {
              return io(t);
            })
      );
    },
    Rs = function (t, e) {
      var r = e.s,
        n = e.d2,
        i = e.d,
        s = e.a;
      return Math.max(
        0,
        (r = "scroll" + n) && (s = bi(t, r))
          ? s() - Ds(t)()[i]
          : As(t)
          ? (qi[r] || Ui[r]) -
            (Ni["inner" + n] || qi["client" + n] || Ui["client" + n])
          : t[r] - t["offset" + n]
      );
    },
    Ls = function (t, e) {
      for (var r = 0; r < ns.length; r += 3)
        (!e || ~e.indexOf(ns[r + 1])) && t(ns[r], ns[r + 1], ns[r + 2]);
    },
    Bs = function (t) {
      return "string" == typeof t;
    },
    zs = function (t) {
      return "function" == typeof t;
    },
    Is = function (t) {
      return "number" == typeof t;
    },
    Ys = function (t) {
      return "object" == typeof t;
    },
    Xs = function (t, e, r) {
      return t && t.progress(e ? 0 : 1) && r && t.pause();
    },
    Fs = function (t, e) {
      if (t.enabled) {
        var r = e(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    Ns = Math.abs,
    Vs = "left",
    qs = "right",
    Us = "bottom",
    Ws = "width",
    Hs = "height",
    js = "Right",
    Gs = "Left",
    Ks = "Top",
    Zs = "Bottom",
    $s = "padding",
    Qs = "margin",
    Js = "Width",
    to = "Height",
    eo = "px",
    ro = function (t) {
      return Ni.getComputedStyle(t);
    },
    no = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    io = function (t, e) {
      var r =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== ro(t)[Ji] &&
          Xi.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = t.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    so = function (t, e) {
      var r = e.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    oo = function (t) {
      var e,
        r = [],
        n = t.labels,
        i = t.duration();
      for (e in n) r.push(n[e] / i);
      return r;
    },
    ao = function (t) {
      var e = Xi.utils.snap(t),
        r =
          Array.isArray(t) &&
          t.slice(0).sort(function (t, e) {
            return t - e;
          });
      return r
        ? function (t, n, i) {
            var s;
            if ((void 0 === i && (i = 0.001), !n)) return e(t);
            if (n > 0) {
              for (t -= i, s = 0; s < r.length; s++) if (r[s] >= t) return r[s];
              return r[s - 1];
            }
            for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s];
            return r[0];
          }
        : function (r, n, i) {
            void 0 === i && (i = 0.001);
            var s = e(r);
            return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
              ? s
              : e(n < 0 ? r - t : r + t);
          };
    },
    uo = function (t, e, r, n) {
      return r.split(",").forEach(function (r) {
        return t(e, r, n);
      });
    },
    lo = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !n, capture: !!i });
    },
    co = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    fo = function (t, e, r) {
      (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
    },
    ho = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    po = { toggleActions: "play", anticipatePin: 0 },
    go = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    mo = function (t, e) {
      if (Bs(t)) {
        var r = t.indexOf("="),
          n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
          (t =
            n +
            (t in go
              ? go[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    vo = function (t, e, r, n, i, s, o, a) {
      var u = i.startColor,
        l = i.endColor,
        c = i.fontSize,
        f = i.indent,
        h = i.fontWeight,
        p = Vi.createElement("div"),
        d = As(r) || "fixed" === bi(r, "pinType"),
        g = -1 !== t.indexOf("scroller"),
        m = d ? Ui : r,
        v = -1 !== t.indexOf("start"),
        _ = v ? u : l,
        y =
          "border-color:" +
          _ +
          ";font-size:" +
          c +
          ";color:" +
          _ +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((g || a) && d ? "fixed;" : "absolute;")),
        (g || a || !d) &&
          (y += (n === Pi ? qs : Us) + ":" + (s + parseFloat(f)) + "px;"),
        o &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (p._isStart = v),
        p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (p.style.cssText = y),
        (p.innerText = e || 0 === e ? t + "-" + e : t),
        m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
        (p._offset = p["offset" + n.op.d2]),
        _o(p, 0, n, v),
        p
      );
    },
    _o = function (t, e, r, n) {
      var i = { display: "block" },
        s = r[n ? "os2" : "p2"],
        o = r[n ? "p2" : "os2"];
      (t._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + s + Js] = 1),
        (i["border" + o + Js] = 0),
        (i[r.p] = e + "px"),
        Xi.set(t, i);
    },
    yo = [],
    xo = {},
    bo = function () {
      return xs() - ws > 34 && (gs || (gs = requestAnimationFrame(Io)));
    },
    wo = function () {
      (!as || !as.isPressed || as.startX > Ui.clientWidth) &&
        (vi.cache++,
        as ? gs || (gs = requestAnimationFrame(Io)) : Io(),
        ws || Oo("scrollStart"),
        (ws = xs()));
    },
    To = function () {
      (cs = Ni.innerWidth), (ls = Ni.innerHeight);
    },
    ko = function () {
      vi.cache++,
        !$i &&
          !os &&
          !Vi.fullscreenElement &&
          !Vi.webkitFullscreenElement &&
          (!us ||
            cs !== Ni.innerWidth ||
            Math.abs(Ni.innerHeight - ls) > 0.25 * Ni.innerHeight) &&
          Hi.restart(!0);
    },
    So = {},
    Mo = [],
    Co = function t() {
      return co(Zo, "scrollEnd", t) || Lo(!0);
    },
    Oo = function (t) {
      return (
        (So[t] &&
          So[t].map(function (t) {
            return t();
          })) ||
        Mo
      );
    },
    Eo = [],
    Po = function (t) {
      for (var e = 0; e < Eo.length; e += 5)
        (!t || (Eo[e + 4] && Eo[e + 4].query === t)) &&
          ((Eo[e].style.cssText = Eo[e + 1]),
          Eo[e].getBBox && Eo[e].setAttribute("transform", Eo[e + 2] || ""),
          (Eo[e + 3].uncache = 1));
    },
    Ao = function (t, e) {
      var r;
      for (ts = 0; ts < yo.length; ts++)
        (r = yo[ts]) &&
          (!e || r._ctx === e) &&
          (t ? r.kill(1) : r.revert(!0, !0));
      e && Po(e), e || Oo("revert");
    },
    Do = function (t, e) {
      vi.cache++,
        (e || !ms) &&
          vi.forEach(function (t) {
            return zs(t) && t.cacheID++ && (t.rec = 0);
          }),
        Bs(t) && (Ni.history.scrollRestoration = ps = t);
    },
    Ro = 0,
    Lo = function (t, e) {
      if (!ws || t) {
        (ms = Zo.isRefreshing = !0),
          vi.forEach(function (t) {
            return zs(t) && t.cacheID++ && (t.rec = t());
          });
        var r = Oo("refreshInit");
        is && Zo.sort(),
          e || Ao(),
          vi.forEach(function (t) {
            zs(t) &&
              (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
          }),
          yo.slice(0).forEach(function (t) {
            return t.refresh();
          }),
          yo.forEach(function (t, e) {
            if (t._subPinOffset && t.pin) {
              var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = t.pin[r];
              t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - n), t.refresh();
            }
          }),
          yo.forEach(function (t) {
            return (
              "max" === t.vars.end &&
              t.setPositions(
                t.start,
                Math.max(t.start + 1, Rs(t.scroller, t._dir))
              )
            );
          }),
          r.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
          vi.forEach(function (t) {
            zs(t) &&
              (t.smooth &&
                requestAnimationFrame(function () {
                  return (t.target.style.scrollBehavior = "smooth");
                }),
              t.rec && t(t.rec));
          }),
          Do(ps, 1),
          Hi.pause(),
          Ro++,
          (ms = 2),
          Io(2),
          yo.forEach(function (t) {
            return zs(t.vars.onRefresh) && t.vars.onRefresh(t);
          }),
          (ms = Zo.isRefreshing = !1),
          Oo("refresh");
      } else lo(Zo, "scrollEnd", Co);
    },
    Bo = 0,
    zo = 1,
    Io = function (t) {
      if (!ms || 2 === t) {
        (Zo.isUpdating = !0), _s && _s.update(0);
        var e = yo.length,
          r = xs(),
          n = r - bs >= 50,
          i = e && yo[0].scroll();
        if (
          ((zo = Bo > i ? -1 : 1),
          ms || (Bo = i),
          n &&
            (ws && !Qi && r - ws > 200 && ((ws = 0), Oo("scrollEnd")),
            (Ki = bs),
            (bs = r)),
          zo < 0)
        ) {
          for (ts = e; ts-- > 0; ) yo[ts] && yo[ts].update(0, n);
          zo = 1;
        } else for (ts = 0; ts < e; ts++) yo[ts] && yo[ts].update(0, n);
        Zo.isUpdating = !1;
      }
      gs = 0;
    },
    Yo = [
      Vs,
      "top",
      Us,
      qs,
      Qs + Zs,
      Qs + js,
      Qs + Ks,
      Qs + Gs,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Xo = Yo.concat([
      Ws,
      Hs,
      "boxSizing",
      "max" + Js,
      "max" + to,
      "position",
      Qs,
      $s,
      $s + Ks,
      $s + js,
      $s + Zs,
      $s + Gs,
    ]),
    Fo = function (t, e, r, n) {
      if (!t._gsap.swappedIn) {
        for (var i, s = Yo.length, o = e.style, a = t.style; s--; )
          o[(i = Yo[s])] = r[i];
        (o.position = "absolute" === r.position ? "absolute" : "relative"),
          "inline" === r.display && (o.display = "inline-block"),
          (a[Us] = a[qs] = "auto"),
          (o.flexBasis = r.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Ws] = so(t, Ei) + eo),
          (o[Hs] = so(t, Pi) + eo),
          (o[$s] = a[Qs] = a.top = a[Vs] = "0"),
          Vo(n),
          (a[Ws] = a["max" + Js] = r[Ws]),
          (a[Hs] = a["max" + to] = r[Hs]),
          (a[$s] = r[$s]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    No = /([A-Z])/g,
    Vo = function (t) {
      if (t) {
        var e,
          r,
          n = t.t.style,
          i = t.length,
          s = 0;
        for ((t.t._gsap || Xi.core.getCache(t.t)).uncache = 1; s < i; s += 2)
          (r = t[s + 1]),
            (e = t[s]),
            r
              ? (n[e] = r)
              : n[e] && n.removeProperty(e.replace(No, "-$1").toLowerCase());
      }
    },
    qo = function (t) {
      for (var e = Xo.length, r = t.style, n = [], i = 0; i < e; i++)
        n.push(Xo[i], r[Xo[i]]);
      return (n.t = t), n;
    },
    Uo = { left: 0, top: 0 },
    Wo = function (t, e, r, n, i, s, o, a, u, l, c, f, h) {
      zs(t) && (t = t(a)),
        Bs(t) &&
          "max" === t.substr(0, 3) &&
          (t = f + ("=" === t.charAt(4) ? mo("0" + t.substr(3), r) : 0));
      var p,
        d,
        g,
        m = h ? h.time() : 0;
      if ((h && h.seek(0), Is(t)))
        h &&
          (t = Xi.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            f,
            t
          )),
          o && _o(o, r, n, !0);
      else {
        zs(e) && (e = e(a));
        var v,
          _,
          y,
          x,
          b = (t || "0").split(" ");
        (g = Ai(e) || Ui),
          (!(v = io(g) || {}) || (!v.left && !v.top)) &&
            "none" === ro(g).display &&
            ((x = g.style.display),
            (g.style.display = "block"),
            (v = io(g)),
            x ? (g.style.display = x) : g.style.removeProperty("display")),
          (_ = mo(b[0], v[n.d])),
          (y = mo(b[1] || "0", r)),
          (t = v[n.p] - u[n.p] - l + _ + i - y),
          o && _o(o, y, n, r - y < 20 || (o._isStart && y > 20)),
          (r -= r - y);
      }
      if (s) {
        var w = t + r,
          T = s._isStart;
        (p = "scroll" + n.d2),
          _o(
            s,
            w,
            n,
            (T && w > 20) ||
              (!T && (c ? Math.max(Ui[p], qi[p]) : s.parentNode[p]) <= w + 1)
          ),
          c &&
            ((u = io(o)),
            c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + eo));
      }
      return (
        h &&
          g &&
          ((p = io(g)),
          h.seek(f),
          (d = io(g)),
          (h._caScrollDist = p[n.p] - d[n.p]),
          (t = (t / h._caScrollDist) * f)),
        h && h.seek(m),
        h ? t : Math.round(t)
      );
    },
    Ho = /(webkit|moz|length|cssText|inset)/i,
    jo = function (t, e, r, n) {
      if (t.parentNode !== e) {
        var i,
          s,
          o = t.style;
        if (e === Ui) {
          for (i in ((t._stOrig = o.cssText), (s = ro(t))))
            !+i &&
              !Ho.test(i) &&
              s[i] &&
              "string" == typeof o[i] &&
              "0" !== i &&
              (o[i] = s[i]);
          (o.top = r), (o.left = n);
        } else o.cssText = t._stOrig;
        (Xi.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    Go = function (t, e, r) {
      var n = e,
        i = n;
      return function (e) {
        var s = Math.round(t());
        return (
          s !== n &&
            s !== i &&
            Math.abs(s - n) > 3 &&
            Math.abs(s - i) > 3 &&
            ((e = s), r && r()),
          (i = n),
          (n = e),
          e
        );
      };
    },
    Ko = function (t, e) {
      var r = Di(t, e),
        n = "_scroll" + e.p2,
        i = function e(i, s, o, a, u) {
          var l = e.tween,
            c = s.onComplete,
            f = {};
          o = o || r();
          var h = Go(r, o, function () {
            l.kill(), (e.tween = 0);
          });
          return (
            (u = (a && u) || 0),
            (a = a || i - o),
            l && l.kill(),
            Math.round(o),
            (s[n] = i),
            (s.modifiers = f),
            (f[n] = function () {
              return h(o + a * l.ratio + u * l.ratio * l.ratio);
            }),
            (s.onUpdate = function () {
              vi.cache++, Io();
            }),
            (s.onComplete = function () {
              (e.tween = 0), c && c.call(l);
            }),
            (l = e.tween = Xi.to(t, s))
          );
        };
      return (
        (t[n] = r),
        (r.wheelHandler = function () {
          return i.tween && i.tween.kill() && (i.tween = 0);
        }),
        lo(t, "wheel", r.wheelHandler),
        Zo.isTouch && lo(t, "touchmove", r.wheelHandler),
        i
      );
    },
    Zo = (function () {
      function t(e, r) {
        Fi ||
          t.register(Xi) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, r);
      }
      return (
        (t.prototype.init = function (e, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            Ts)
          ) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              f,
              h,
              p,
              d,
              g,
              m,
              v,
              _,
              y,
              x,
              b,
              w,
              T,
              k,
              S,
              M,
              C,
              O,
              E,
              P,
              A,
              D,
              R,
              L,
              B,
              z,
              I,
              Y,
              X,
              F,
              N,
              V = (e = no(
                Bs(e) || Is(e) || e.nodeType ? { trigger: e } : e,
                po
              )),
              q = V.onUpdate,
              U = V.toggleClass,
              W = V.id,
              H = V.onToggle,
              j = V.onRefresh,
              G = V.scrub,
              K = V.trigger,
              Z = V.pin,
              $ = V.pinSpacing,
              Q = V.invalidateOnRefresh,
              J = V.anticipatePin,
              tt = V.onScrubComplete,
              et = V.onSnapComplete,
              rt = V.once,
              nt = V.snap,
              it = V.pinReparent,
              st = V.pinSpacer,
              ot = V.containerAnimation,
              at = V.fastScrollEnd,
              ut = V.preventOverlaps,
              lt =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? Ei
                  : Pi,
              ct = !G && 0 !== G,
              ft = Ai(e.scroller || Ni),
              ht = Xi.core.getCache(ft),
              pt = As(ft),
              dt =
                "fixed" ===
                ("pinType" in e
                  ? e.pinType
                  : bi(ft, "pinType") || (pt && "fixed")),
              gt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              mt = ct && e.toggleActions.split(" "),
              vt = "markers" in e ? e.markers : po.markers,
              _t = pt ? 0 : parseFloat(ro(ft)["border" + lt.p2 + Js]) || 0,
              yt = this,
              xt =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(yt);
                },
              bt = (function (t, e, r) {
                var n = r.d,
                  i = r.d2,
                  s = r.a;
                return (s = bi(t, "getBoundingClientRect"))
                  ? function () {
                      return s()[n];
                    }
                  : function () {
                      return (e ? Ni["inner" + i] : t["client" + i]) || 0;
                    };
              })(ft, pt, lt),
              wt = (function (t, e) {
                return !e || ~_i.indexOf(t)
                  ? Ds(t)
                  : function () {
                      return Uo;
                    };
              })(ft, pt),
              Tt = 0,
              kt = 0,
              St = Di(ft, lt);
            if (
              (hs(yt),
              (yt._dir = lt),
              (J *= 45),
              (yt.scroller = ft),
              (yt.scroll = ot ? ot.time.bind(ot) : St),
              (o = St()),
              (yt.vars = e),
              (r = r || e.animation),
              "refreshPriority" in e &&
                ((is = 1), -9999 === e.refreshPriority && (_s = yt)),
              (ht.tweenScroll = ht.tweenScroll || {
                top: Ko(ft, Pi),
                left: Ko(ft, Ei),
              }),
              (yt.tweenTo = n = ht.tweenScroll[lt.p]),
              (yt.scrubDuration = function (t) {
                (L = Is(t) && t)
                  ? R
                    ? R.duration(t)
                    : (R = Xi.to(r, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: L,
                        paused: !0,
                        onComplete: function () {
                          return tt && tt(yt);
                        },
                      }))
                  : (R && R.progress(1).kill(), (R = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                r._initted ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (yt.animation = r.pause()),
                (r.scrollTrigger = yt),
                yt.scrubDuration(G),
                R && R.resetTo && R.resetTo("totalProgress", 0),
                (A = 0),
                W || (W = r.vars.id)),
              yo.push(yt),
              nt &&
                ((!Ys(nt) || nt.push) && (nt = { snapTo: nt }),
                "scrollBehavior" in Ui.style &&
                  Xi.set(pt ? [Ui, qi] : ft, { scrollBehavior: "auto" }),
                vi.forEach(function (t) {
                  return (
                    zs(t) &&
                    t.target === (pt ? Vi.scrollingElement || qi : ft) &&
                    (t.smooth = !1)
                  );
                }),
                (s = zs(nt.snapTo)
                  ? nt.snapTo
                  : "labels" === nt.snapTo
                  ? (function (t) {
                      return function (e) {
                        return Xi.utils.snap(oo(t), e);
                      };
                    })(r)
                  : "labelsDirectional" === nt.snapTo
                  ? (function (t) {
                      return function (e, r) {
                        return ao(oo(t))(e, r.direction);
                      };
                    })(r)
                  : !1 !== nt.directional
                  ? function (t, e) {
                      return ao(nt.snapTo)(
                        t,
                        xs() - kt < 500 ? 0 : e.direction
                      );
                    }
                  : Xi.utils.snap(nt.snapTo)),
                (B = nt.duration || { min: 0.1, max: 2 }),
                (B = Ys(B) ? Gi(B.min, B.max) : Gi(B, B)),
                (z = Xi.delayedCall(nt.delay || L / 2 || 0.1, function () {
                  var t = St(),
                    e = xs() - kt < 500,
                    i = n.tween;
                  if (
                    !(e || Math.abs(yt.getVelocity()) < 10) ||
                    i ||
                    Qi ||
                    Tt === t
                  )
                    yt.isActive && Tt !== t && z.restart(!0);
                  else {
                    var o = (t - u) / g,
                      a = r && !ct ? r.totalProgress() : o,
                      c = e ? 0 : ((a - D) / (xs() - Ki)) * 1e3 || 0,
                      f = Xi.utils.clamp(-o, 1 - o, (Ns(c / 2) * c) / 0.185),
                      h = o + (!1 === nt.inertia ? 0 : f),
                      p = Gi(0, 1, s(h, yt)),
                      d = Math.round(u + p * g),
                      m = nt,
                      v = m.onStart,
                      _ = m.onInterrupt,
                      y = m.onComplete;
                    if (t <= l && t >= u && d !== t) {
                      if (i && !i._initted && i.data <= Ns(d - t)) return;
                      !1 === nt.inertia && (f = p - o),
                        n(
                          d,
                          {
                            duration: B(
                              Ns(
                                (0.185 * Math.max(Ns(h - a), Ns(p - a))) /
                                  c /
                                  0.05 || 0
                              )
                            ),
                            ease: nt.ease || "power3",
                            data: Ns(d - t),
                            onInterrupt: function () {
                              return z.restart(!0) && _ && _(yt);
                            },
                            onComplete: function () {
                              yt.update(),
                                (Tt = St()),
                                (A = D =
                                  r && !ct ? r.totalProgress() : yt.progress),
                                et && et(yt),
                                y && y(yt);
                            },
                          },
                          t,
                          f * g,
                          d - t - f * g
                        ),
                        v && v(yt, n.tween);
                    }
                  }
                }).pause())),
              W && (xo[W] = yt),
              (N =
                (K = yt.trigger = Ai(K || Z)) && K._gsap && K._gsap.stRevert) &&
                (N = N(yt)),
              (Z = !0 === Z ? K : Ai(Z)),
              Bs(U) && (U = { targets: K, className: U }),
              Z &&
                (!1 === $ ||
                  $ === Qs ||
                  ($ =
                    !(
                      !$ &&
                      Z.parentNode &&
                      Z.parentNode.style &&
                      "flex" === ro(Z.parentNode).display
                    ) && $s),
                (yt.pin = Z),
                (i = Xi.core.getCache(Z)).spacer
                  ? (m = i.pinState)
                  : (st &&
                      ((st = Ai(st)) &&
                        !st.nodeType &&
                        (st = st.current || st.nativeElement),
                      (i.spacerIsNative = !!st),
                      st && (i.spacerState = qo(st))),
                    (i.spacer = y = st || Vi.createElement("div")),
                    y.classList.add("pin-spacer"),
                    W && y.classList.add("pin-spacer-" + W),
                    (i.pinState = m = qo(Z))),
                !1 !== e.force3D && Xi.set(Z, { force3D: !0 }),
                (yt.spacer = y = i.spacer),
                (P = ro(Z)),
                (S = P[$ + lt.os2]),
                (b = Xi.getProperty(Z)),
                (w = Xi.quickSetter(Z, lt.a, eo)),
                Fo(Z, y, P),
                (_ = qo(Z))),
              vt)
            ) {
              (d = Ys(vt) ? no(vt, ho) : ho),
                (h = vo("scroller-start", W, ft, lt, d, 0)),
                (p = vo("scroller-end", W, ft, lt, d, 0, h)),
                (x = h["offset" + lt.op.d2]);
              var Mt = Ai(bi(ft, "content") || ft);
              (c = this.markerStart = vo("start", W, Mt, lt, d, x, 0, ot)),
                (f = this.markerEnd = vo("end", W, Mt, lt, d, x, 0, ot)),
                ot && (F = Xi.quickSetter([c, f], lt.a, eo)),
                !dt &&
                  (!_i.length || !0 !== bi(ft, "fixedMarkers")) &&
                  ((function (t) {
                    var e = ro(t).position;
                    t.style.position =
                      "absolute" === e || "fixed" === e ? e : "relative";
                  })(pt ? Ui : ft),
                  Xi.set([h, p], { force3D: !0 }),
                  (C = Xi.quickSetter(h, lt.a, eo)),
                  (E = Xi.quickSetter(p, lt.a, eo)));
            }
            if (ot) {
              var Ct = ot.vars.onUpdate,
                Ot = ot.vars.onUpdateParams;
              ot.eventCallback("onUpdate", function () {
                yt.update(0, 0, 1), Ct && Ct.apply(ot, Ot || []);
              });
            }
            (yt.previous = function () {
              return yo[yo.indexOf(yt) - 1];
            }),
              (yt.next = function () {
                return yo[yo.indexOf(yt) + 1];
              }),
              (yt.revert = function (t, e) {
                if (!e) return yt.kill(!0);
                var n = !1 !== t || !yt.enabled,
                  i = $i;
                n !== yt.isReverted &&
                  (n &&
                    ((Y = Math.max(St(), yt.scroll.rec || 0)),
                    (I = yt.progress),
                    (X = r && r.progress())),
                  c &&
                    [c, f, h, p].forEach(function (t) {
                      return (t.style.display = n ? "none" : "block");
                    }),
                  n && (($i = yt), yt.update(n)),
                  Z &&
                    (!it || !yt.isActive) &&
                    (n
                      ? (function (t, e, r) {
                          Vo(r);
                          var n = t._gsap;
                          if (n.spacerIsNative) Vo(n.spacerState);
                          else if (t._gsap.swappedIn) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e), i.removeChild(e));
                          }
                          t._gsap.swappedIn = !1;
                        })(Z, y, m)
                      : Fo(Z, y, ro(Z), M)),
                  n || yt.update(n),
                  ($i = i),
                  (yt.isReverted = n));
              }),
              (yt.refresh = function (i, s) {
                if ((!$i && yt.enabled) || s) {
                  if (Z && i && ws) return void lo(t, "scrollEnd", Co);
                  !ms && xt && xt(yt),
                    ($i = yt),
                    (kt = xs()),
                    n.tween && (n.tween.kill(), (n.tween = 0)),
                    R && R.pause(),
                    Q && r && r.revert({ kill: !1 }).invalidate(),
                    yt.isReverted || yt.revert(!0, !0),
                    (yt._subPinOffset = !1);
                  for (
                    var d,
                      x,
                      w,
                      S,
                      C,
                      E,
                      P,
                      A,
                      D,
                      L,
                      B,
                      F = bt(),
                      N = wt(),
                      V = ot ? ot.duration() : Rs(ft, lt),
                      q = g <= 0.01,
                      U = 0,
                      W = 0,
                      H = e.end,
                      G = e.endTrigger || K,
                      J =
                        e.start ||
                        (0 !== e.start && K ? (Z ? "0 0" : "0 100%") : 0),
                      tt = (yt.pinnedContainer =
                        e.pinnedContainer && Ai(e.pinnedContainer)),
                      et = (K && Math.max(0, yo.indexOf(yt))) || 0,
                      rt = et;
                    rt--;

                  )
                    (E = yo[rt]).end || E.refresh(0, 1) || ($i = yt),
                      (P = E.pin) &&
                        (P === K || P === Z || P === tt) &&
                        !E.isReverted &&
                        (L || (L = []), L.unshift(E), E.revert(!0, !0)),
                      E !== yo[rt] && (et--, rt--);
                  for (
                    zs(J) && (J = J(yt)),
                      u =
                        Wo(J, K, F, lt, St(), c, h, yt, N, _t, dt, V, ot) ||
                        (Z ? -0.001 : 0),
                      zs(H) && (H = H(yt)),
                      Bs(H) &&
                        !H.indexOf("+=") &&
                        (~H.indexOf(" ")
                          ? (H = (Bs(J) ? J.split(" ")[0] : "") + H)
                          : ((U = mo(H.substr(2), F)),
                            (H = Bs(J)
                              ? J
                              : (ot
                                  ? Xi.utils.mapRange(
                                      0,
                                      ot.duration(),
                                      ot.scrollTrigger.start,
                                      ot.scrollTrigger.end,
                                      u
                                    )
                                  : u) + U),
                            (G = K))),
                      l =
                        Math.max(
                          u,
                          Wo(
                            H || (G ? "100% 0" : V),
                            G,
                            F,
                            lt,
                            St() + U,
                            f,
                            p,
                            yt,
                            N,
                            _t,
                            dt,
                            V,
                            ot
                          )
                        ) || -0.001,
                      g = l - u || ((u -= 0.01) && 0.001),
                      U = 0,
                      rt = et;
                    rt--;

                  )
                    (P = (E = yo[rt]).pin) &&
                      E.start - E._pinPush <= u &&
                      !ot &&
                      E.end > 0 &&
                      ((d = E.end - E.start),
                      ((P === K && E.start - E._pinPush < u) || P === tt) &&
                        !Is(J) &&
                        (U += d * (1 - E.progress)),
                      P === Z && (W += d));
                  if (
                    ((u += U),
                    (l += U),
                    q &&
                      (I = Xi.utils.clamp(0, 1, Xi.utils.normalize(u, l, Y))),
                    (yt._pinPush = W),
                    c &&
                      U &&
                      (((d = {})[lt.a] = "+=" + U),
                      tt && (d[lt.p] = "-=" + St()),
                      Xi.set([c, f], d)),
                    Z)
                  )
                    (d = ro(Z)),
                      (S = lt === Pi),
                      (w = St()),
                      (T = parseFloat(b(lt.a)) + W),
                      !V &&
                        l > 1 &&
                        ((B = {
                          style: (B = (pt ? Vi.scrollingElement || qi : ft)
                            .style),
                          value: B["overflow" + lt.a.toUpperCase()],
                        }).style["overflow" + lt.a.toUpperCase()] = "scroll"),
                      Fo(Z, y, d),
                      (_ = qo(Z)),
                      (x = io(Z, !0)),
                      (A = dt && Di(ft, S ? Ei : Pi)()),
                      $ &&
                        (((M = [$ + lt.os2, g + W + eo]).t = y),
                        (rt = $ === $s ? so(Z, lt) + g + W : 0) &&
                          M.push(lt.d, rt + eo),
                        Vo(M),
                        tt &&
                          yo.forEach(function (t) {
                            t.pin === tt &&
                              !1 !== t.vars.pinSpacing &&
                              (t._subPinOffset = !0);
                          }),
                        dt && St(Y)),
                      dt &&
                        (((C = {
                          top: x.top + (S ? w - u : A) + eo,
                          left: x.left + (S ? A : w - u) + eo,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[Ws] = C["max" + Js] =
                          Math.ceil(x.width) + eo),
                        (C[Hs] = C["max" + to] = Math.ceil(x.height) + eo),
                        (C[Qs] =
                          C[Qs + Ks] =
                          C[Qs + js] =
                          C[Qs + Zs] =
                          C[Qs + Gs] =
                            "0"),
                        (C[$s] = d[$s]),
                        (C[$s + Ks] = d[$s + Ks]),
                        (C[$s + js] = d[$s + js]),
                        (C[$s + Zs] = d[$s + Zs]),
                        (C[$s + Gs] = d[$s + Gs]),
                        (v = (function (t, e, r) {
                          for (
                            var n, i = [], s = t.length, o = r ? 8 : 0;
                            o < s;
                            o += 2
                          )
                            (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1]);
                          return (i.t = t.t), i;
                        })(m, C, it)),
                        ms && St(0)),
                      r
                        ? ((D = r._initted),
                          ss(1),
                          r.render(r.duration(), !0, !0),
                          (k = b(lt.a) - T + g + W),
                          (O = Math.abs(g - k) > 1),
                          dt && O && v.splice(v.length - 2, 2),
                          r.render(0, !0, !0),
                          D || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          ss(0))
                        : (k = g),
                      B &&
                        (B.value
                          ? (B.style["overflow" + lt.a.toUpperCase()] = B.value)
                          : B.style.removeProperty("overflow-" + lt.a));
                  else if (K && St() && !ot)
                    for (x = K.parentNode; x && x !== Ui; )
                      x._pinOffset &&
                        ((u -= x._pinOffset), (l -= x._pinOffset)),
                        (x = x.parentNode);
                  L &&
                    L.forEach(function (t) {
                      return t.revert(!1, !0);
                    }),
                    (yt.start = u),
                    (yt.end = l),
                    (o = a = ms ? Y : St()),
                    !ot && !ms && (o < Y && St(Y), (yt.scroll.rec = 0)),
                    yt.revert(!1, !0),
                    z &&
                      ((Tt = -1), yt.isActive && St(u + g * I), z.restart(!0)),
                    ($i = 0),
                    r &&
                      ct &&
                      (r._initted || X) &&
                      r.progress() !== X &&
                      r.progress(X, !0).render(r.time(), !0, !0),
                    (q || I !== yt.progress || ot) &&
                      (r &&
                        !ct &&
                        r.totalProgress(
                          ot && u < -0.001 && !I
                            ? Xi.utils.normalize(u, l, 0)
                            : I,
                          !0
                        ),
                      (yt.progress = (o - u) / g === I ? 0 : I)),
                    Z && $ && (y._pinOffset = Math.round(yt.progress * k)),
                    R && R.invalidate(),
                    j && !ms && j(yt);
                }
              }),
              (yt.getVelocity = function () {
                return ((St() - a) / (xs() - Ki)) * 1e3 || 0;
              }),
              (yt.endAnimation = function () {
                Xs(yt.callbackAnimation),
                  r &&
                    (R
                      ? R.progress(1)
                      : r.paused()
                      ? ct || Xs(r, yt.direction < 0, 1)
                      : Xs(r, r.reversed()));
              }),
              (yt.labelToScroll = function (t) {
                return (
                  (r &&
                    r.labels &&
                    (u || yt.refresh() || u) +
                      (r.labels[t] / r.duration()) * g) ||
                  0
                );
              }),
              (yt.getTrailing = function (t) {
                var e = yo.indexOf(yt),
                  r =
                    yt.direction > 0
                      ? yo.slice(0, e).reverse()
                      : yo.slice(e + 1);
                return (
                  Bs(t)
                    ? r.filter(function (e) {
                        return e.vars.preventOverlaps === t;
                      })
                    : r
                ).filter(function (t) {
                  return yt.direction > 0 ? t.end <= u : t.start >= l;
                });
              }),
              (yt.update = function (t, e, i) {
                if (!ot || i || t) {
                  var s,
                    c,
                    f,
                    p,
                    d,
                    m,
                    x,
                    b = !0 === ms ? Y : yt.scroll(),
                    M = t ? 0 : (b - u) / g,
                    P = M < 0 ? 0 : M > 1 ? 1 : M || 0,
                    L = yt.progress;
                  if (
                    (e &&
                      ((a = o),
                      (o = ot ? St() : b),
                      nt && ((D = A), (A = r && !ct ? r.totalProgress() : P))),
                    J &&
                      !P &&
                      Z &&
                      !$i &&
                      !ys &&
                      ws &&
                      u < b + ((b - a) / (xs() - Ki)) * J &&
                      (P = 1e-4),
                    P !== L && yt.enabled)
                  ) {
                    if (
                      ((p =
                        (d =
                          (s = yt.isActive = !!P && P < 1) !==
                          (!!L && L < 1)) || !!P != !!L),
                      (yt.direction = P > L ? 1 : -1),
                      (yt.progress = P),
                      p &&
                        !$i &&
                        ((c = P && !L ? 0 : 1 === P ? 1 : 1 === L ? 2 : 3),
                        ct &&
                          ((f =
                            (!d && "none" !== mt[c + 1] && mt[c + 1]) || mt[c]),
                          (x =
                            r &&
                            ("complete" === f || "reset" === f || f in r)))),
                      ut &&
                        (d || x) &&
                        (x || G || !r) &&
                        (zs(ut)
                          ? ut(yt)
                          : yt.getTrailing(ut).forEach(function (t) {
                              return t.endAnimation();
                            })),
                      ct ||
                        (!R || $i || ys
                          ? r && r.totalProgress(P, !!$i)
                          : (R._dp._time - R._start !== R._time &&
                              R.render(R._dp._time - R._start),
                            R.resetTo
                              ? R.resetTo(
                                  "totalProgress",
                                  P,
                                  r._tTime / r._tDur
                                )
                              : ((R.vars.totalProgress = P),
                                R.invalidate().restart()))),
                      Z)
                    )
                      if ((t && $ && (y.style[$ + lt.os2] = S), dt)) {
                        if (p) {
                          if (
                            ((m =
                              !t && P > L && l + 1 > b && b + 1 >= Rs(ft, lt)),
                            it)
                          )
                            if (t || (!s && !m)) jo(Z, y);
                            else {
                              var B = io(Z, !0),
                                I = b - u;
                              jo(
                                Z,
                                Ui,
                                B.top + (lt === Pi ? I : 0) + eo,
                                B.left + (lt === Pi ? 0 : I) + eo
                              );
                            }
                          Vo(s || m ? v : _),
                            (O && P < 1 && s) || w(T + (1 !== P || m ? 0 : k));
                        }
                      } else w(Os(T + k * P));
                    nt && !n.tween && !$i && !ys && z.restart(!0),
                      U &&
                        (d || (rt && P && (P < 1 || !ds))) &&
                        ji(U.targets).forEach(function (t) {
                          return t.classList[s || rt ? "add" : "remove"](
                            U.className
                          );
                        }),
                      q && !ct && !t && q(yt),
                      p && !$i
                        ? (ct &&
                            (x &&
                              ("complete" === f
                                ? r.pause().totalProgress(1)
                                : "reset" === f
                                ? r.restart(!0).pause()
                                : "restart" === f
                                ? r.restart(!0)
                                : r[f]()),
                            q && q(yt)),
                          (d || !ds) &&
                            (H && d && Fs(yt, H),
                            gt[c] && Fs(yt, gt[c]),
                            rt && (1 === P ? yt.kill(!1, 1) : (gt[c] = 0)),
                            d || (gt[(c = 1 === P ? 1 : 3)] && Fs(yt, gt[c]))),
                          at &&
                            !s &&
                            Math.abs(yt.getVelocity()) > (Is(at) ? at : 2500) &&
                            (Xs(yt.callbackAnimation),
                            R
                              ? R.progress(1)
                              : Xs(r, "reverse" === f ? 1 : !P, 1)))
                        : ct && q && !$i && q(yt);
                  }
                  if (E) {
                    var X = ot
                      ? (b / ot.duration()) * (ot._caScrollDist || 0)
                      : b;
                    C(X + (h._isFlipped ? 1 : 0)), E(X);
                  }
                  F && F((-b / ot.duration()) * (ot._caScrollDist || 0));
                }
              }),
              (yt.enable = function (e, r) {
                yt.enabled ||
                  ((yt.enabled = !0),
                  lo(ft, "resize", ko),
                  lo(pt ? Vi : ft, "scroll", wo),
                  xt && lo(t, "refreshInit", xt),
                  !1 !== e && ((yt.progress = I = 0), (o = a = Tt = St())),
                  !1 !== r && yt.refresh());
              }),
              (yt.getTween = function (t) {
                return t && n ? n.tween : R;
              }),
              (yt.setPositions = function (t, e) {
                Z &&
                  ((T += t - u),
                  (k += e - t - g),
                  $ === $s && yt.adjustPinSpacing(e - t - g)),
                  (yt.start = u = t),
                  (yt.end = l = e),
                  (g = e - t),
                  yt.update();
              }),
              (yt.adjustPinSpacing = function (t) {
                if (M && t) {
                  var e = M.indexOf(lt.d) + 1;
                  (M[e] = parseFloat(M[e]) + t + eo),
                    (M[1] = parseFloat(M[1]) + t + eo),
                    Vo(M);
                }
              }),
              (yt.disable = function (e, r) {
                if (
                  yt.enabled &&
                  (!1 !== e && yt.revert(!0, !0),
                  (yt.enabled = yt.isActive = !1),
                  r || (R && R.pause()),
                  (Y = 0),
                  i && (i.uncache = 1),
                  xt && co(t, "refreshInit", xt),
                  z && (z.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                  !pt)
                ) {
                  for (var s = yo.length; s--; )
                    if (yo[s].scroller === ft && yo[s] !== yt) return;
                  co(ft, "resize", ko), co(ft, "scroll", wo);
                }
              }),
              (yt.kill = function (t, n) {
                yt.disable(t, n), R && !n && R.kill(), W && delete xo[W];
                var s = yo.indexOf(yt);
                s >= 0 && yo.splice(s, 1),
                  s === ts && zo > 0 && ts--,
                  (s = 0),
                  yo.forEach(function (t) {
                    return t.scroller === yt.scroller && (s = 1);
                  }),
                  s || ms || (yt.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    t && r.revert({ kill: !1 }),
                    n || r.kill()),
                  c &&
                    [c, f, h, p].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  _s === yt && (_s = 0),
                  Z &&
                    (i && (i.uncache = 1),
                    (s = 0),
                    yo.forEach(function (t) {
                      return t.pin === Z && s++;
                    }),
                    s || (i.spacer = 0)),
                  e.onKill && e.onKill(yt);
              }),
              yt.enable(!1, !1),
              N && N(yt),
              r && r.add && !g
                ? Xi.delayedCall(0.01, function () {
                    return u || l || yt.refresh();
                  }) &&
                  (g = 0.01) &&
                  (u = l = 0)
                : yt.refresh(),
              Z &&
                (function () {
                  if (vs !== Ro) {
                    var t = (vs = Ro);
                    requestAnimationFrame(function () {
                      return t === Ro && Lo(!0);
                    });
                  }
                })();
          } else this.update = this.refresh = this.kill = Cs;
        }),
        (t.register = function (e) {
          return (
            Fi ||
              ((Xi = e || Ps()),
              Es() && window.document && t.enable(),
              (Fi = Ts)),
            Fi
          );
        }),
        (t.defaults = function (t) {
          if (t) for (var e in t) po[e] = t[e];
          return po;
        }),
        (t.disable = function (t, e) {
          (Ts = 0),
            yo.forEach(function (r) {
              return r[e ? "kill" : "disable"](t);
            }),
            co(Ni, "wheel", wo),
            co(Vi, "scroll", wo),
            clearInterval(Zi),
            co(Vi, "touchcancel", Cs),
            co(Ui, "touchstart", Cs),
            uo(co, Vi, "pointerdown,touchstart,mousedown", Ss),
            uo(co, Vi, "pointerup,touchend,mouseup", Ms),
            Hi.kill(),
            Ls(co);
          for (var r = 0; r < vi.length; r += 3)
            fo(co, vi[r], vi[r + 1]), fo(co, vi[r], vi[r + 2]);
        }),
        (t.enable = function () {
          if (
            ((Ni = window),
            (Vi = document),
            (qi = Vi.documentElement),
            (Ui = Vi.body),
            Xi &&
              ((ji = Xi.utils.toArray),
              (Gi = Xi.utils.clamp),
              (hs = Xi.core.context || Cs),
              (ss = Xi.core.suppressOverwrites || Cs),
              (ps = Ni.history.scrollRestoration || "auto"),
              (Bo = Ni.pageYOffset),
              Xi.core.globals("ScrollTrigger", t),
              Ui))
          ) {
            (Ts = 1),
              ks(),
              Yi.register(Xi),
              (t.isTouch = Yi.isTouch),
              (fs =
                Yi.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              lo(Ni, "wheel", wo),
              (Wi = [Ni, Vi, qi, Ui]),
              Xi.matchMedia
                ? ((t.matchMedia = function (t) {
                    var e,
                      r = Xi.matchMedia();
                    for (e in t) r.add(e, t[e]);
                    return r;
                  }),
                  Xi.addEventListener("matchMediaInit", function () {
                    return Ao();
                  }),
                  Xi.addEventListener("matchMediaRevert", function () {
                    return Po();
                  }),
                  Xi.addEventListener("matchMedia", function () {
                    Lo(0, 1), Oo("matchMedia");
                  }),
                  Xi.matchMedia("(orientation: portrait)", function () {
                    return To(), To;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              To(),
              lo(Vi, "scroll", wo);
            var e,
              r,
              n = Ui.style,
              i = n.borderTopStyle,
              s = Xi.core.Animation.prototype;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = "solid",
                e = io(Ui),
                Pi.m = Math.round(e.top + Pi.sc()) || 0,
                Ei.m = Math.round(e.left + Ei.sc()) || 0,
                i
                  ? (n.borderTopStyle = i)
                  : n.removeProperty("border-top-style"),
                Zi = setInterval(bo, 250),
                Xi.delayedCall(0.5, function () {
                  return (ys = 0);
                }),
                lo(Vi, "touchcancel", Cs),
                lo(Ui, "touchstart", Cs),
                uo(lo, Vi, "pointerdown,touchstart,mousedown", Ss),
                uo(lo, Vi, "pointerup,touchend,mouseup", Ms),
                Ji = Xi.utils.checkPrefix("transform"),
                Xo.push(Ji),
                Fi = xs(),
                Hi = Xi.delayedCall(0.2, Lo).pause(),
                ns = [
                  Vi,
                  "visibilitychange",
                  function () {
                    var t = Ni.innerWidth,
                      e = Ni.innerHeight;
                    Vi.hidden
                      ? ((es = t), (rs = e))
                      : (es !== t || rs !== e) && ko();
                  },
                  Vi,
                  "DOMContentLoaded",
                  Lo,
                  Ni,
                  "load",
                  Lo,
                  Ni,
                  "resize",
                  ko,
                ],
                Ls(lo),
                yo.forEach(function (t) {
                  return t.enable(0, 1);
                }),
                r = 0;
              r < vi.length;
              r += 3
            )
              fo(co, vi[r], vi[r + 1]), fo(co, vi[r], vi[r + 2]);
          }
        }),
        (t.config = function (e) {
          "limitCallbacks" in e && (ds = !!e.limitCallbacks);
          var r = e.syncInterval;
          (r && clearInterval(Zi)) || ((Zi = r) && setInterval(bo, r)),
            "ignoreMobileResize" in e &&
              (us = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (Ls(co) || Ls(lo, e.autoRefreshEvents || "none"),
              (os = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (t.scrollerProxy = function (t, e) {
          var r = Ai(t),
            n = vi.indexOf(r),
            i = As(r);
          ~n && vi.splice(n, i ? 6 : 2),
            e && (i ? _i.unshift(Ni, e, Ui, e, qi, e) : _i.unshift(r, e));
        }),
        (t.clearMatchMedia = function (t) {
          yo.forEach(function (e) {
            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
          });
        }),
        (t.isInViewport = function (t, e, r) {
          var n = (Bs(t) ? Ai(t) : t).getBoundingClientRect(),
            i = n[r ? Ws : Hs] * e || 0;
          return r
            ? n.right - i > 0 && n.left + i < Ni.innerWidth
            : n.bottom - i > 0 && n.top + i < Ni.innerHeight;
        }),
        (t.positionInViewport = function (t, e, r) {
          Bs(t) && (t = Ai(t));
          var n = t.getBoundingClientRect(),
            i = n[r ? Ws : Hs],
            s =
              null == e
                ? i / 2
                : e in go
                ? go[e] * i
                : ~e.indexOf("%")
                ? (parseFloat(e) * i) / 100
                : parseFloat(e) || 0;
          return r
            ? (n.left + s) / Ni.innerWidth
            : (n.top + s) / Ni.innerHeight;
        }),
        (t.killAll = function (t) {
          if (
            (yo.slice(0).forEach(function (t) {
              return "ScrollSmoother" !== t.vars.id && t.kill();
            }),
            !0 !== t)
          ) {
            var e = So.killAll || [];
            (So = {}),
              e.forEach(function (t) {
                return t();
              });
          }
        }),
        t
      );
    })();
  (Zo.version = "3.11.5"),
    (Zo.saveStyles = function (t) {
      return t
        ? ji(t).forEach(function (t) {
            if (t && t.style) {
              var e = Eo.indexOf(t);
              e >= 0 && Eo.splice(e, 5),
                Eo.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  Xi.core.getCache(t),
                  hs()
                );
            }
          })
        : Eo;
    }),
    (Zo.revert = function (t, e) {
      return Ao(!t, e);
    }),
    (Zo.create = function (t, e) {
      return new Zo(t, e);
    }),
    (Zo.refresh = function (t) {
      return t ? ko() : (Fi || Zo.register()) && Lo(!0);
    }),
    (Zo.update = function (t) {
      return ++vi.cache && Io(!0 === t ? 2 : 0);
    }),
    (Zo.clearScrollMemory = Do),
    (Zo.maxScroll = function (t, e) {
      return Rs(t, e ? Ei : Pi);
    }),
    (Zo.getScrollFunc = function (t, e) {
      return Di(Ai(t), e ? Ei : Pi);
    }),
    (Zo.getById = function (t) {
      return xo[t];
    }),
    (Zo.getAll = function () {
      return yo.filter(function (t) {
        return "ScrollSmoother" !== t.vars.id;
      });
    }),
    (Zo.isScrolling = function () {
      return !!ws;
    }),
    (Zo.snapDirectional = ao),
    (Zo.addEventListener = function (t, e) {
      var r = So[t] || (So[t] = []);
      ~r.indexOf(e) || r.push(e);
    }),
    (Zo.removeEventListener = function (t, e) {
      var r = So[t],
        n = r && r.indexOf(e);
      n >= 0 && r.splice(n, 1);
    }),
    (Zo.batch = function (t, e) {
      var r,
        n = [],
        i = {},
        s = e.interval || 0.016,
        o = e.batchMax || 1e9,
        a = function (t, e) {
          var r = [],
            n = [],
            i = Xi.delayedCall(s, function () {
              e(r, n), (r = []), (n = []);
            }).pause();
          return function (t) {
            r.length || i.restart(!0),
              r.push(t.trigger),
              n.push(t),
              o <= r.length && i.progress(1);
          };
        };
      for (r in e)
        i[r] =
          "on" === r.substr(0, 2) && zs(e[r]) && "onRefreshInit" !== r
            ? a(0, e[r])
            : e[r];
      return (
        zs(o) &&
          ((o = o()),
          lo(Zo, "refresh", function () {
            return (o = e.batchMax());
          })),
        ji(t).forEach(function (t) {
          var e = {};
          for (r in i) e[r] = i[r];
          (e.trigger = t), n.push(Zo.create(e));
        }),
        n
      );
    });
  var $o,
    Qo = function (t, e, r, n) {
      return (
        e > n ? t(n) : e < 0 && t(0),
        r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
      );
    },
    Jo = function t(e, r) {
      !0 === r
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            !0 === r
              ? "auto"
              : r
              ? "pan-" + r + (Yi.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === qi && t(Ui, r);
    },
    ta = { auto: 1, scroll: 1 },
    ea = function (t) {
      var e,
        r = t.event,
        n = t.target,
        i = t.axis,
        s = (r.changedTouches ? r.changedTouches[0] : r).target,
        o = s._gsap || Xi.core.getCache(s),
        a = xs();
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== Ui &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            (!ta[(e = ro(s)).overflowY] && !ta[e.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== n &&
          !As(s) &&
          (ta[(e = ro(s)).overflowY] || ta[e.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || "x" === i) && (r.stopPropagation(), (r._gsapAllow = !0));
    },
    ra = function (t, e, r, n) {
      return Yi.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (n = n && ea),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return r && lo(Vi, Yi.eventTypes[0], ia, !1, !0);
        },
        onDisable: function () {
          return co(Vi, Yi.eventTypes[0], ia, !0);
        },
      });
    },
    na = /(input|label|select|textarea)/i,
    ia = function (t) {
      var e = na.test(t.target.tagName);
      (e || $o) && ((t._gsapAllow = !0), ($o = e));
    },
    sa = function (t) {
      Ys(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e,
        r,
        n,
        i,
        s,
        o,
        a,
        u,
        l = t,
        c = l.normalizeScrollX,
        f = l.momentum,
        h = l.allowNestedScroll,
        p = l.onRelease,
        d = Ai(t.target) || qi,
        g = Xi.core.globals().ScrollSmoother,
        m = g && g.get(),
        v =
          fs &&
          ((t.content && Ai(t.content)) ||
            (m && !1 !== t.content && !m.smooth() && m.content())),
        _ = Di(d, Pi),
        y = Di(d, Ei),
        x = 1,
        b =
          (Yi.isTouch && Ni.visualViewport
            ? Ni.visualViewport.scale * Ni.visualViewport.width
            : Ni.outerWidth) / Ni.innerWidth,
        w = 0,
        T = zs(f)
          ? function () {
              return f(e);
            }
          : function () {
              return f || 2.8;
            },
        k = ra(d, t.type, !0, h),
        S = function () {
          return (i = !1);
        },
        M = Cs,
        C = Cs,
        O = function () {
          (r = Rs(d, Pi)),
            (C = Gi(fs ? 1 : 0, r)),
            c && (M = Gi(0, Rs(d, Ei))),
            (n = Ro);
        },
        E = function () {
          (v._gsap.y = Os(parseFloat(v._gsap.y) + _.offset) + "px"),
            (v.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(v._gsap.y) +
              ", 0, 1)"),
            (_.offset = _.cacheID = 0);
        },
        P = function () {
          O(),
            s.isActive() &&
              s.vars.scrollY > r &&
              (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r));
        };
      return (
        v && Xi.set(v, { y: "+=0" }),
        (t.ignoreCheck = function (t) {
          return (
            (fs &&
              "touchmove" === t.type &&
              (function () {
                if (i) {
                  requestAnimationFrame(S);
                  var t = Os(e.deltaY / 2),
                    r = C(_.v - t);
                  if (v && r !== _.v + _.offset) {
                    _.offset = r - _.v;
                    var n = Os((parseFloat(v && v._gsap.y) || 0) - _.offset);
                    (v.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (v._gsap.y = n + "px"),
                      (_.cacheID = vi.cache),
                      Io();
                  }
                  return !0;
                }
                _.offset && E(), (i = !0);
              })()) ||
            (x > 1.05 && "touchstart" !== t.type) ||
            e.isGesturing ||
            (t.touches && t.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          i = !1;
          var t = x;
          (x = Os(((Ni.visualViewport && Ni.visualViewport.scale) || 1) / b)),
            s.pause(),
            t !== x && Jo(d, x > 1.01 || (!c && "x")),
            (o = y()),
            (a = _()),
            O(),
            (n = Ro);
        }),
        (t.onRelease = t.onGestureStart =
          function (t, e) {
            if ((_.offset && E(), e)) {
              vi.cache++;
              var n,
                i,
                o = T();
              c &&
                ((i = (n = y()) + (0.05 * o * -t.velocityX) / 0.227),
                (o *= Qo(y, n, i, Rs(d, Ei))),
                (s.vars.scrollX = M(i))),
                (i = (n = _()) + (0.05 * o * -t.velocityY) / 0.227),
                (o *= Qo(_, n, i, Rs(d, Pi))),
                (s.vars.scrollY = C(i)),
                s.invalidate().duration(o).play(0.01),
                ((fs && s.vars.scrollY >= r) || n >= r - 1) &&
                  Xi.to({}, { onUpdate: P, duration: o });
            } else u.restart(!0);
            p && p(t);
          }),
        (t.onWheel = function () {
          s._ts && s.pause(), xs() - w > 1e3 && ((n = 0), (w = xs()));
        }),
        (t.onChange = function (t, e, r, i, s) {
          if (
            (Ro !== n && O(),
            e && c && y(M(i[2] === e ? o + (t.startX - t.x) : y() + e - i[1])),
            r)
          ) {
            _.offset && E();
            var u = s[2] === r,
              l = u ? a + t.startY - t.y : _() + r - s[1],
              f = C(l);
            u && l !== f && (a += f - l), _(f);
          }
          (r || e) && Io();
        }),
        (t.onEnable = function () {
          Jo(d, !c && "x"),
            Zo.addEventListener("refresh", P),
            lo(Ni, "resize", P),
            _.smooth &&
              ((_.target.style.scrollBehavior = "auto"),
              (_.smooth = y.smooth = !1)),
            k.enable();
        }),
        (t.onDisable = function () {
          Jo(d, !0),
            co(Ni, "resize", P),
            Zo.removeEventListener("refresh", P),
            k.kill();
        }),
        (t.lockAxis = !1 !== t.lockAxis),
        ((e = new Yi(t)).iOS = fs),
        fs && !_() && _(1),
        fs && Xi.ticker.add(Cs),
        (u = e._dc),
        (s = Xi.to(e, {
          ease: "power4",
          paused: !0,
          scrollX: c ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Go(_, _(), function () {
              return s.pause();
            }),
          },
          onUpdate: Io,
          onComplete: u.vars.onComplete,
        })),
        e
      );
    };
  (Zo.sort = function (t) {
    return yo.sort(
      t ||
        function (t, e) {
          return (
            -1e6 * (t.vars.refreshPriority || 0) +
            t.start -
            (e.start + -1e6 * (e.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (Zo.observe = function (t) {
      return new Yi(t);
    }),
    (Zo.normalizeScroll = function (t) {
      if (typeof t > "u") return as;
      if (!0 === t && as) return as.enable();
      if (!1 === t) return as && as.kill();
      var e = t instanceof Yi ? t : sa(t);
      return (
        as && as.target === e.target && as.kill(), As(e.target) && (as = e), e
      );
    }),
    (Zo.core = {
      _getVelocityProp: Ri,
      _inputObserver: ra,
      _scrollers: vi,
      _proxies: _i,
      bridge: {
        ss: function () {
          ws || Oo("scrollStart"), (ws = xs());
        },
        ref: function () {
          return $i;
        },
      },
    }),
    Ps() && Xi.registerPlugin(Zo);
  var oa,
    aa,
    ua,
    la,
    ca,
    fa,
    ha,
    pa,
    da = function () {
      return typeof window < "u";
    },
    ga = function () {
      return oa || (da() && (oa = window.gsap) && oa.registerPlugin && oa);
    },
    ma = function (t) {
      return "string" == typeof t;
    },
    va = function (t) {
      return "function" == typeof t;
    },
    _a = function (t, e) {
      var r = "x" === e ? "Width" : "Height",
        n = "scroll" + r,
        i = "client" + r;
      return t === ua || t === la || t === ca
        ? Math.max(la[n], ca[n]) - (ua["inner" + r] || la[i] || ca[i])
        : t[n] - t["offset" + r];
    },
    ya = function (t, e) {
      var r = "scroll" + ("x" === e ? "Left" : "Top");
      return (
        t === ua &&
          (null != t.pageXOffset
            ? (r = "page" + e.toUpperCase() + "Offset")
            : (t = null != la[r] ? la : ca)),
        function () {
          return t[r];
        }
      );
    },
    xa = function (t, e) {
      if (!(t = fa(t)[0]) || !t.getBoundingClientRect)
        return (
          console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0,
          }
        );
      var r = t.getBoundingClientRect(),
        n = !e || e === ua || e === ca,
        i = n
          ? {
              top:
                la.clientTop -
                (ua.pageYOffset || la.scrollTop || ca.scrollTop || 0),
              left:
                la.clientLeft -
                (ua.pageXOffset || la.scrollLeft || ca.scrollLeft || 0),
            }
          : e.getBoundingClientRect(),
        s = { x: r.left - i.left, y: r.top - i.top };
      return !n && e && ((s.x += ya(e, "x")()), (s.y += ya(e, "y")())), s;
    },
    ba = function (t, e, r, n, i) {
      return isNaN(t) || "object" == typeof t
        ? ma(t) && "=" === t.charAt(1)
          ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + n - i
          : "max" === t
          ? _a(e, r) - i
          : Math.min(_a(e, r), xa(t, e)[r] - i)
        : parseFloat(t) - i;
    },
    wa = function () {
      (oa = ga()),
        da() &&
          oa &&
          typeof document < "u" &&
          document.body &&
          ((ua = window),
          (ca = document.body),
          (la = document.documentElement),
          (fa = oa.utils.toArray),
          oa.config({ autoKillThreshold: 7 }),
          (ha = oa.config()),
          (aa = 1));
    },
    Ta = {
      version: "3.11.5",
      name: "scrollTo",
      rawVars: 1,
      register: function (t) {
        (oa = t), wa();
      },
      init: function (t, e, r, n, i) {
        aa || wa();
        var s = this,
          o = oa.getProperty(t, "scrollSnapType");
        (s.isWin = t === ua),
          (s.target = t),
          (s.tween = r),
          (e = (function (t, e, r, n) {
            if ((va(t) && (t = t(e, r, n)), "object" != typeof t))
              return ma(t) && "max" !== t && "=" !== t.charAt(1)
                ? { x: t, y: t }
                : { y: t };
            if (t.nodeType) return { y: t, x: t };
            var i,
              s = {};
            for (i in t)
              s[i] = "onAutoKill" !== i && va(t[i]) ? t[i](e, r, n) : t[i];
            return s;
          })(e, n, t, i)),
          (s.vars = e),
          (s.autoKill = !!e.autoKill),
          (s.getX = ya(t, "x")),
          (s.getY = ya(t, "y")),
          (s.x = s.xPrev = s.getX()),
          (s.y = s.yPrev = s.getY()),
          pa || (pa = oa.core.globals().ScrollTrigger),
          "smooth" === oa.getProperty(t, "scrollBehavior") &&
            oa.set(t, { scrollBehavior: "auto" }),
          o &&
            "none" !== o &&
            ((s.snap = 1),
            (s.snapInline = t.style.scrollSnapType),
            (t.style.scrollSnapType = "none")),
          null != e.x
            ? (s.add(s, "x", s.x, ba(e.x, t, "x", s.x, e.offsetX || 0), n, i),
              s._props.push("scrollTo_x"))
            : (s.skipX = 1),
          null != e.y
            ? (s.add(s, "y", s.y, ba(e.y, t, "y", s.y, e.offsetY || 0), n, i),
              s._props.push("scrollTo_y"))
            : (s.skipY = 1);
      },
      render: function (t, e) {
        for (
          var r,
            n,
            i,
            s,
            o,
            a = e._pt,
            u = e.target,
            l = e.tween,
            c = e.autoKill,
            f = e.xPrev,
            h = e.yPrev,
            p = e.isWin,
            d = e.snap,
            g = e.snapInline;
          a;

        )
          a.r(t, a.d), (a = a._next);
        (r = p || !e.skipX ? e.getX() : f),
          (i = (n = p || !e.skipY ? e.getY() : h) - h),
          (s = r - f),
          (o = ha.autoKillThreshold),
          e.x < 0 && (e.x = 0),
          e.y < 0 && (e.y = 0),
          c &&
            (!e.skipX && (s > o || s < -o) && r < _a(u, "x") && (e.skipX = 1),
            !e.skipY && (i > o || i < -o) && n < _a(u, "y") && (e.skipY = 1),
            e.skipX &&
              e.skipY &&
              (l.kill(),
              e.vars.onAutoKill &&
                e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))),
          p
            ? ua.scrollTo(e.skipX ? r : e.x, e.skipY ? n : e.y)
            : (e.skipY || (u.scrollTop = e.y), e.skipX || (u.scrollLeft = e.x)),
          d &&
            (1 === t || 0 === t) &&
            ((n = u.scrollTop),
            (r = u.scrollLeft),
            g
              ? (u.style.scrollSnapType = g)
              : u.style.removeProperty("scroll-snap-type"),
            (u.scrollTop = n + 1),
            (u.scrollLeft = r + 1),
            (u.scrollTop = n),
            (u.scrollLeft = r)),
          (e.xPrev = e.x),
          (e.yPrev = e.y),
          pa && pa.update();
      },
      kill: function (t) {
        var e = "scrollTo" === t;
        (e || "scrollTo_x" === t) && (this.skipX = 1),
          (e || "scrollTo_y" === t) && (this.skipY = 1);
      },
    };
  (Ta.max = _a),
    (Ta.getOffset = xa),
    (Ta.buildGetter = ya),
    ga() && oa.registerPlugin(Ta);
  var ka,
    Sa,
    Ma,
    Ca,
    Oa,
    Ea,
    Pa,
    Aa,
    Da,
    Ra = "transform",
    La = Ra + "Origin",
    Ba = function (t) {
      var e = t.ownerDocument || t;
      for (
        !(Ra in t.style) &&
        ("msTransform" in t.style) &&
        (La = (Ra = "msTransform") + "Origin");
        e.parentNode && (e = e.parentNode);

      );
      if (((Sa = window), (Pa = new Ha()), e)) {
        (ka = e),
          (Ma = e.documentElement),
          (Ca = e.body),
          ((Aa = ka.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
          )).style.transform = "none");
        var r = e.createElement("div"),
          n = e.createElement("div");
        Ca.appendChild(r),
          r.appendChild(n),
          (r.style.position = "static"),
          (r.style[Ra] = "translate3d(0,0,1px)"),
          (Da = n.offsetParent !== r),
          Ca.removeChild(r);
      }
      return e;
    },
    za = [],
    Ia = [],
    Ya = function () {
      return (
        Sa.pageYOffset || ka.scrollTop || Ma.scrollTop || Ca.scrollTop || 0
      );
    },
    Xa = function () {
      return (
        Sa.pageXOffset || ka.scrollLeft || Ma.scrollLeft || Ca.scrollLeft || 0
      );
    },
    Fa = function (t) {
      return (
        t.ownerSVGElement ||
        ("svg" === (t.tagName + "").toLowerCase() ? t : null)
      );
    },
    Na = function t(e) {
      return (
        "fixed" === Sa.getComputedStyle(e).position ||
        ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
      );
    },
    Va = function t(e, r) {
      if (e.parentNode && (ka || Ba(e))) {
        var n = Fa(e),
          i = n
            ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          s = n ? (r ? "rect" : "g") : "div",
          o = 2 !== r ? 0 : 100,
          a = 3 === r ? 100 : 0,
          u =
            "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          l = ka.createElementNS
            ? ka.createElementNS(i.replace(/^https/, "http"), s)
            : ka.createElement(s);
        return (
          r &&
            (n
              ? (Ea || (Ea = t(e)),
                l.setAttribute("width", 0.01),
                l.setAttribute("height", 0.01),
                l.setAttribute("transform", "translate(" + o + "," + a + ")"),
                Ea.appendChild(l))
              : (Oa || ((Oa = t(e)).style.cssText = u),
                (l.style.cssText =
                  u +
                  "width:0.1px;height:0.1px;top:" +
                  a +
                  "px;left:" +
                  o +
                  "px"),
                Oa.appendChild(l))),
          l
        );
      }
      throw "Need document and parent.";
    },
    qa = function (t) {
      var e,
        r = t.getCTM();
      return (
        r ||
          ((e = t.style[Ra]),
          (t.style[Ra] = "none"),
          t.appendChild(Aa),
          (r = Aa.getCTM()),
          t.removeChild(Aa),
          e
            ? (t.style[Ra] = e)
            : t.style.removeProperty(
                Ra.replace(/([A-Z])/g, "-$1").toLowerCase()
              )),
        r || Pa.clone()
      );
    },
    Ua = function (t, e) {
      var r,
        n,
        i,
        s,
        o,
        a,
        u = Fa(t),
        l = t === u,
        c = u ? za : Ia,
        f = t.parentNode;
      if (t === Sa) return t;
      if (
        (c.length || c.push(Va(t, 1), Va(t, 2), Va(t, 3)), (r = u ? Ea : Oa), u)
      )
        l
          ? ((s = -(i = qa(t)).e / i.a), (o = -i.f / i.d), (n = Pa))
          : t.getBBox
          ? ((i = t.getBBox()),
            (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
              ? n.numberOfItems > 1
                ? (function (t) {
                    for (var e = new Ha(), r = 0; r < t.numberOfItems; r++)
                      e.multiply(t.getItem(r).matrix);
                    return e;
                  })(n)
                : n.getItem(0).matrix
              : Pa),
            (s = n.a * i.x + n.c * i.y),
            (o = n.b * i.x + n.d * i.y))
          : ((n = new Ha()), (s = o = 0)),
          e && "g" === t.tagName.toLowerCase() && (s = o = 0),
          (l ? u : f).appendChild(r),
          r.setAttribute(
            "transform",
            "matrix(" +
              n.a +
              "," +
              n.b +
              "," +
              n.c +
              "," +
              n.d +
              "," +
              (n.e + s) +
              "," +
              (n.f + o) +
              ")"
          );
      else {
        if (((s = o = 0), Da))
          for (
            n = t.offsetParent, i = t;
            i && (i = i.parentNode) && i !== n && i.parentNode;

          )
            (Sa.getComputedStyle(i)[Ra] + "").length > 4 &&
              ((s = i.offsetLeft), (o = i.offsetTop), (i = 0));
        if (
          "absolute" !== (a = Sa.getComputedStyle(t)).position &&
          "fixed" !== a.position
        )
          for (n = t.offsetParent; f && f !== n; )
            (s += f.scrollLeft || 0),
              (o += f.scrollTop || 0),
              (f = f.parentNode);
        ((i = r.style).top = t.offsetTop - o + "px"),
          (i.left = t.offsetLeft - s + "px"),
          (i[Ra] = a[Ra]),
          (i[La] = a[La]),
          (i.position = "fixed" === a.position ? "fixed" : "absolute"),
          t.parentNode.appendChild(r);
      }
      return r;
    },
    Wa = function (t, e, r, n, i, s, o) {
      return (
        (t.a = e), (t.b = r), (t.c = n), (t.d = i), (t.e = s), (t.f = o), t
      );
    },
    Ha = (function () {
      function t(t, e, r, n, i, s) {
        void 0 === t && (t = 1),
          void 0 === e && (e = 0),
          void 0 === r && (r = 0),
          void 0 === n && (n = 1),
          void 0 === i && (i = 0),
          void 0 === s && (s = 0),
          Wa(this, t, e, r, n, i, s);
      }
      var e = t.prototype;
      return (
        (e.inverse = function () {
          var t = this.a,
            e = this.b,
            r = this.c,
            n = this.d,
            i = this.e,
            s = this.f,
            o = t * n - e * r || 1e-10;
          return Wa(
            this,
            n / o,
            -e / o,
            -r / o,
            t / o,
            (r * s - n * i) / o,
            -(t * s - e * i) / o
          );
        }),
        (e.multiply = function (t) {
          var e = this.a,
            r = this.b,
            n = this.c,
            i = this.d,
            s = this.e,
            o = this.f,
            a = t.a,
            u = t.c,
            l = t.b,
            c = t.d,
            f = t.e,
            h = t.f;
          return Wa(
            this,
            a * e + l * n,
            a * r + l * i,
            u * e + c * n,
            u * r + c * i,
            s + f * e + h * n,
            o + f * r + h * i
          );
        }),
        (e.clone = function () {
          return new t(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (e.equals = function (t) {
          var e = this.a,
            r = this.b,
            n = this.c,
            i = this.d,
            s = this.e,
            o = this.f;
          return (
            e === t.a &&
            r === t.b &&
            n === t.c &&
            i === t.d &&
            s === t.e &&
            o === t.f
          );
        }),
        (e.apply = function (t, e) {
          void 0 === e && (e = {});
          var r = t.x,
            n = t.y,
            i = this.a,
            s = this.b,
            o = this.c,
            a = this.d,
            u = this.e,
            l = this.f;
          return (
            (e.x = r * i + n * o + u || 0), (e.y = r * s + n * a + l || 0), e
          );
        }),
        t
      );
    })();
  function ja(t, e, r, n) {
    if (!t || !t.parentNode || (ka || Ba(t)).documentElement === t)
      return new Ha();
    var i = (function (t) {
        for (var e, r; t && t !== Ca; )
          (r = t._gsap) && r.uncache && r.get(t, "x"),
            r &&
              !r.scaleX &&
              !r.scaleY &&
              r.renderTransform &&
              ((r.scaleX = r.scaleY = 1e-4),
              r.renderTransform(1, r),
              e ? e.push(r) : (e = [r])),
            (t = t.parentNode);
        return e;
      })(t),
      s = Fa(t) ? za : Ia,
      o = Ua(t, r),
      a = s[0].getBoundingClientRect(),
      u = s[1].getBoundingClientRect(),
      l = s[2].getBoundingClientRect(),
      c = o.parentNode,
      f = !n && Na(t),
      h = new Ha(
        (u.left - a.left) / 100,
        (u.top - a.top) / 100,
        (l.left - a.left) / 100,
        (l.top - a.top) / 100,
        a.left + (f ? 0 : Xa()),
        a.top + (f ? 0 : Ya())
      );
    if ((c.removeChild(o), i))
      for (a = i.length; a--; )
        ((u = i[a]).scaleX = u.scaleY = 0), u.renderTransform(1, u);
    return e ? h.inverse() : h;
  }
  var Ga,
    Ka,
    Za,
    $a,
    Qa,
    Ja,
    tu,
    eu,
    ru = 1,
    nu = function (t, e) {
      return t.actions.forEach(function (t) {
        return t.vars[e] && t.vars[e](t);
      });
    },
    iu = {},
    su = 180 / Math.PI,
    ou = Math.PI / 180,
    au = {},
    uu = {},
    lu = {},
    cu = function (t) {
      return "string" == typeof t ? t.split(" ").join("").split(",") : t;
    },
    fu = cu("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    hu = cu(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    pu = function (t) {
      return Ga(t)[0] || console.warn("Element not found:", t);
    },
    du = function (t) {
      return Math.round(1e4 * t) / 1e4 || 0;
    },
    gu = function (t, e, r) {
      return t.forEach(function (t) {
        return t.classList[r](e);
      });
    },
    mu = {
      zIndex: 1,
      kill: 1,
      simple: 1,
      spin: 1,
      clearProps: 1,
      targets: 1,
      toggleClass: 1,
      onComplete: 1,
      onUpdate: 1,
      onInterrupt: 1,
      onStart: 1,
      delay: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: 1,
      scale: 1,
      fade: 1,
      absolute: 1,
      props: 1,
      onEnter: 1,
      onLeave: 1,
      custom: 1,
      paused: 1,
      nested: 1,
      prune: 1,
      absoluteOnLeave: 1,
    },
    vu = {
      zIndex: 1,
      simple: 1,
      clearProps: 1,
      scale: 1,
      absolute: 1,
      fitChild: 1,
      getVars: 1,
      props: 1,
    },
    _u = function (t) {
      return t.replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    yu = function (t, e) {
      var r,
        n = {};
      for (r in t) e[r] || (n[r] = t[r]);
      return n;
    },
    xu = {},
    bu = function (t) {
      var e = (xu[t] = cu(t));
      return (lu[t] = e.concat(hu)), e;
    },
    wu = function t(e, r, n) {
      void 0 === n && (n = 0);
      for (
        var i = e.parentNode,
          s = 1e3 * Math.pow(10, n) * (r ? -1 : 1),
          o = r ? 900 * -s : 0;
        e;

      )
        (o += s), (e = e.previousSibling);
      return i ? o + t(i, r, n + 1) : o;
    },
    Tu = function (t, e, r) {
      return (
        t.forEach(function (t) {
          return (t.d = wu(r ? t.element : t.t, e));
        }),
        t.sort(function (t, e) {
          return t.d - e.d;
        }),
        t
      );
    },
    ku = function (t, e) {
      for (
        var r, n, i = t.element.style, s = (t.css = t.css || []), o = e.length;
        o--;

      )
        (n = i[(r = e[o])] || i.getPropertyValue(r)),
          s.push(n ? r : uu[r] || (uu[r] = _u(r)), n);
      return i;
    },
    Su = function (t) {
      var e = t.css,
        r = t.element.style,
        n = 0;
      for (t.cache.uncache = 1; n < e.length; n += 2)
        e[n + 1] ? (r[e[n]] = e[n + 1]) : r.removeProperty(e[n]);
      !e[e.indexOf("transform") + 1] &&
        r.translate &&
        (r.removeProperty("translate"),
        r.removeProperty("scale"),
        r.removeProperty("rotate"));
    },
    Mu = function (t, e) {
      t.forEach(function (t) {
        return (t.a.cache.uncache = 1);
      }),
        e || t.finalStates.forEach(Su);
    },
    Cu =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    Ou = function (t, e, r) {
      var n,
        i,
        s,
        o = t.element,
        a = t.width,
        u = t.height,
        l = t.uncache,
        c = t.getProp,
        f = o.style,
        h = 4;
      if (("object" != typeof e && (e = t), Za && 1 !== r))
        return (
          Za._abs.push({ t: o, b: t, a: t, sd: 0 }),
          Za._final.push(function () {
            return (t.cache.uncache = 1) && Su(t);
          }),
          o
        );
      for (
        i = "none" === c("display"),
          (!t.isVisible || i) &&
            (i && (ku(t, ["display"]).display = e.display),
            (t.matrix = e.matrix),
            (t.width = a = t.width || e.width),
            (t.height = u = t.height || e.height)),
          ku(t, Cu),
          s = window.getComputedStyle(o);
        h--;

      )
        f[Cu[h]] = s[Cu[h]];
      if (
        ((f.gridArea = "1 / 1 / 1 / 1"),
        (f.transition = "none"),
        (f.position = "absolute"),
        (f.width = a + "px"),
        (f.height = u + "px"),
        f.top || (f.top = "0px"),
        f.left || (f.left = "0px"),
        l)
      )
        n = new Hu(o);
      else if ((((n = yu(t, au)).position = "absolute"), t.simple)) {
        var p = o.getBoundingClientRect();
        n.matrix = new Ha(1, 0, 0, 1, p.left + Xa(), p.top + Ya());
      } else n.matrix = ja(o, !1, !1, !0);
      return (
        (n = Bu(n, t, !0)), (t.x = Ja(n.x, 0.01)), (t.y = Ja(n.y, 0.01)), o
      );
    },
    Eu = function (t, e) {
      return (
        !0 !== e &&
          ((e = Ga(e)),
          (t = t.filter(function (t) {
            if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
            t.t._gsap.renderTransform(1),
              t.b.isVisible &&
                ((t.t.style.width = t.b.width + "px"),
                (t.t.style.height = t.b.height + "px"));
          }))),
        t
      );
    },
    Pu = function (t) {
      return Tu(t, !0).forEach(function (t) {
        return (
          (t.a.isVisible || t.b.isVisible) && Ou(t.sd < 0 ? t.b : t.a, t.b, 1)
        );
      });
    },
    Au = function (t, e, r, n) {
      return t instanceof Hu
        ? t
        : t instanceof Wu
        ? (function (t, e) {
            return (e && t.idLookup[Au(e).id]) || t.elementStates[0];
          })(t, n)
        : new Hu(
            "string" == typeof t ? pu(t) || console.warn(t + " not found") : t,
            e,
            r
          );
    },
    Du = function (t, e) {
      var r,
        n = t.style || t;
      for (r in e) n[r] = e[r];
    },
    Ru = function (t) {
      return t.map(function (t) {
        return t.element;
      });
    },
    Lu = function (t, e, r) {
      return t && e.length && r.add(t(Ru(e), r, new Wu(e, 0, !0)), 0);
    },
    Bu = function (t, e, r, n, i, s) {
      var o,
        a,
        u,
        l,
        c,
        f,
        h,
        p = t.element,
        d = t.cache,
        g = t.parent,
        m = t.x,
        v = t.y,
        _ = e.width,
        y = e.height,
        x = e.scaleX,
        b = e.scaleY,
        w = e.rotation,
        T = e.bounds,
        k = s && tu && tu(p, "transform"),
        S = t,
        M = e.matrix,
        C = M.e,
        O = M.f,
        E =
          t.bounds.width !== T.width ||
          t.bounds.height !== T.height ||
          t.scaleX !== x ||
          t.scaleY !== b ||
          t.rotation !== w,
        P = !E && t.simple && e.simple && !i;
      return (
        P || !g
          ? ((x = b = 1), (w = o = 0))
          : ((c = (function (t) {
              var e = t._gsap || Ka.core.getCache(t);
              return e.gmCache === Ka.ticker.frame
                ? e.gMatrix
                : ((e.gmCache = Ka.ticker.frame),
                  (e.gMatrix = ja(t, !0, !1, !0)));
            })(g)),
            (f = c
              .clone()
              .multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix)),
            (w = du(Math.atan2(f.b, f.a) * su)),
            (o = du(Math.atan2(f.c, f.d) * su + w) % 360),
            (x = Math.sqrt(Math.pow(f.a, 2) + Math.pow(f.b, 2))),
            (b =
              Math.sqrt(Math.pow(f.c, 2) + Math.pow(f.d, 2)) *
              Math.cos(o * ou)),
            i &&
              ((i = Ga(i)[0]),
              (l = Ka.getProperty(i)),
              (h = i.getBBox && "function" == typeof i.getBBox && i.getBBox()),
              (S = {
                scaleX: l("scaleX"),
                scaleY: l("scaleY"),
                width: h ? h.width : Math.ceil(parseFloat(l("width", "px"))),
                height: h ? h.height : parseFloat(l("height", "px")),
              })),
            (d.rotation = w + "deg"),
            (d.skewX = o + "deg")),
        r
          ? ((x *= _ !== S.width && S.width ? _ / S.width : 1),
            (b *= y !== S.height && S.height ? y / S.height : 1),
            (d.scaleX = x),
            (d.scaleY = b))
          : ((_ = Ja((_ * x) / S.scaleX, 0)),
            (y = Ja((y * b) / S.scaleY, 0)),
            (p.style.width = _ + "px"),
            (p.style.height = y + "px")),
        n && Du(p, e.props),
        P || !g
          ? ((m += C - t.matrix.e), (v += O - t.matrix.f))
          : E || g !== e.parent
          ? (d.renderTransform(1, d),
            (f = ja(i || p, !1, !1, !0)),
            (a = c.apply({ x: f.e, y: f.f })),
            (m += (u = c.apply({ x: C, y: O })).x - a.x),
            (v += u.y - a.y))
          : ((c.e = c.f = 0),
            (m += (u = c.apply({ x: C - t.matrix.e, y: O - t.matrix.f })).x),
            (v += u.y)),
        (m = Ja(m, 0.02)),
        (v = Ja(v, 0.02)),
        !s || s instanceof Hu
          ? ((d.x = m + "px"), (d.y = v + "px"), d.renderTransform(1, d))
          : k && k.revert(),
        s &&
          ((s.x = m),
          (s.y = v),
          (s.rotation = w),
          (s.skewX = o),
          r
            ? ((s.scaleX = x), (s.scaleY = b))
            : ((s.width = _), (s.height = y))),
        s || d
      );
    },
    zu = function (t, e) {
      return t instanceof Wu ? t : new Wu(t, e);
    },
    Iu = function (t, e, r) {
      var n = t.idLookup[r],
        i = t.alt[r];
      return !i.isVisible ||
        ((e.getElementState(i.element) || i).isVisible && n.isVisible)
        ? n
        : i;
    },
    Yu = [],
    Xu = "width,height,overflowX,overflowY".split(","),
    Fu = function (t) {
      if (t !== eu) {
        var e = Qa.style,
          r = Qa.clientWidth === window.outerWidth,
          n = Qa.clientHeight === window.outerHeight,
          i = 4;
        if (t && (r || n)) {
          for (; i--; ) Yu[i] = e[Xu[i]];
          r && ((e.width = Qa.clientWidth + "px"), (e.overflowY = "hidden")),
            n &&
              ((e.height = Qa.clientHeight + "px"), (e.overflowX = "hidden")),
            (eu = t);
        } else if (eu) {
          for (; i--; )
            Yu[i] ? (e[Xu[i]] = Yu[i]) : e.removeProperty(_u(Xu[i]));
          eu = t;
        }
      }
    },
    Nu = function (t, e, r, n) {
      (t instanceof Wu && e instanceof Wu) ||
        console.warn("Not a valid state object.");
      var i,
        s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        v,
        _,
        y = (r = r || {}),
        x = y.clearProps,
        b = y.onEnter,
        w = y.onLeave,
        T = y.absolute,
        k = y.absoluteOnLeave,
        S = y.custom,
        M = y.delay,
        C = y.paused,
        O = y.repeat,
        E = y.repeatDelay,
        P = y.yoyo,
        A = y.toggleClass,
        D = y.nested,
        R = y.zIndex,
        L = y.scale,
        B = y.fade,
        z = y.stagger,
        I = y.spin,
        Y = y.prune,
        X = ("props" in r ? r : t).props,
        F = yu(r, mu),
        N = Ka.timeline({
          delay: M,
          paused: C,
          repeat: O,
          repeatDelay: E,
          yoyo: P,
          data: "isFlip",
        }),
        V = F,
        q = [],
        U = [],
        W = [],
        H = [],
        j = !0 === I ? 1 : I || 0,
        G =
          "function" == typeof I
            ? I
            : function () {
                return j;
              },
        K = t.interrupted || e.interrupted,
        Z = N[1 !== n ? "to" : "from"];
      for (s in e.idLookup)
        (d = e.alt[s] ? Iu(e, t, s) : e.idLookup[s]),
          (u = d.element),
          (p = t.idLookup[s]),
          t.alt[s] &&
            u === p.element &&
            (t.alt[s].isVisible || !d.isVisible) &&
            (p = t.alt[s]),
          p
            ? ((l = {
                t: u,
                b: p,
                a: d,
                sd: p.element === u ? 0 : d.isVisible ? 1 : -1,
              }),
              W.push(l),
              l.sd &&
                (l.sd < 0 && ((l.b = d), (l.a = p)),
                K && ku(l.b, X ? lu[X] : hu),
                B &&
                  W.push(
                    (l.swap = {
                      t: p.element,
                      b: l.b,
                      a: l.a,
                      sd: -l.sd,
                      swap: l,
                    })
                  )),
              (u._flip = p.element._flip = Za ? Za.timeline : N))
            : d.isVisible &&
              (W.push({
                t: u,
                b: yu(d, { isVisible: 1 }),
                a: d,
                sd: 0,
                entering: 1,
              }),
              (u._flip = Za ? Za.timeline : N));
      (X &&
        (xu[X] || bu(X)).forEach(function (t) {
          return (F[t] = function (e) {
            return W[e].a.props[t];
          });
        }),
      (W.finalStates = h = []),
      (g = function () {
        for (Tu(W), Fu(!0), a = 0; a < W.length; a++)
          (l = W[a]),
            (m = l.a),
            (v = l.b),
            !Y || m.isDifferent(v) || l.entering
              ? ((u = l.t),
                D && !(l.sd < 0) && a && (m.matrix = ja(u, !1, !1, !0)),
                v.isVisible && m.isVisible
                  ? (l.sd < 0
                      ? ((c = new Hu(u, X, t.simple)),
                        Bu(c, m, L, 0, 0, c),
                        (c.matrix = ja(u, !1, !1, !0)),
                        (c.css = l.b.css),
                        (l.a = m = c),
                        B && (u.style.opacity = K ? v.opacity : m.opacity),
                        z && H.push(u))
                      : l.sd > 0 &&
                        B &&
                        (u.style.opacity = K ? m.opacity - v.opacity : "0"),
                    Bu(m, v, L, X))
                  : v.isVisible !== m.isVisible &&
                    (v.isVisible
                      ? m.isVisible ||
                        ((v.css = m.css),
                        U.push(v),
                        W.splice(a--, 1),
                        T && D && Bu(m, v, L, X))
                      : (m.isVisible && q.push(m), W.splice(a--, 1))),
                L ||
                  ((u.style.maxWidth = Math.max(m.width, v.width) + "px"),
                  (u.style.maxHeight = Math.max(m.height, v.height) + "px"),
                  (u.style.minWidth = Math.min(m.width, v.width) + "px"),
                  (u.style.minHeight = Math.min(m.height, v.height) + "px")),
                D && A && u.classList.add(A))
              : W.splice(a--, 1),
            h.push(m);
        var e;
        if (
          (A &&
            ((e = h.map(function (t) {
              return t.element;
            })),
            D &&
              e.forEach(function (t) {
                return t.classList.remove(A);
              })),
          Fu(!1),
          L
            ? ((F.scaleX = function (t) {
                return W[t].a.scaleX;
              }),
              (F.scaleY = function (t) {
                return W[t].a.scaleY;
              }))
            : ((F.width = function (t) {
                return W[t].a.width + "px";
              }),
              (F.height = function (t) {
                return W[t].a.height + "px";
              }),
              (F.autoRound = r.autoRound || !1)),
          (F.x = function (t) {
            return W[t].a.x + "px";
          }),
          (F.y = function (t) {
            return W[t].a.y + "px";
          }),
          (F.rotation = function (t) {
            return W[t].a.rotation + (I ? 360 * G(t, f[t], f) : 0);
          }),
          (F.skewX = function (t) {
            return W[t].a.skewX;
          }),
          (f = W.map(function (t) {
            return t.t;
          })),
          (R || 0 === R) &&
            ((F.modifiers = {
              zIndex: function () {
                return R;
              },
            }),
            (F.zIndex = R),
            (F.immediateRender = !1 !== r.immediateRender)),
          B &&
            (F.opacity = function (t) {
              return W[t].sd < 0 ? 0 : W[t].sd > 0 ? W[t].a.opacity : "+=0";
            }),
          H.length)
        ) {
          z = Ka.utils.distribute(z);
          var n = f.slice(H.length);
          F.stagger = function (t, e) {
            return z(~H.indexOf(e) ? f.indexOf(W[t].swap.t) : t, e, n);
          };
        }
        if (
          (fu.forEach(function (t) {
            return r[t] && N.eventCallback(t, r[t], r[t + "Params"]);
          }),
          S && f.length)
        )
          for (s in ((V = yu(F, mu)),
          "scale" in S && ((S.scaleX = S.scaleY = S.scale), delete S.scale),
          S))
            ((i = yu(S[s], vu))[s] = F[s]),
              !("duration" in i) &&
                "duration" in F &&
                (i.duration = F.duration),
              (i.stagger = F.stagger),
              Z.call(N, f, i, 0),
              delete V[s];
        (f.length || U.length || q.length) &&
          (A &&
            N.add(function () {
              return gu(e, A, N._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !C &&
            gu(e, A, "add"),
          f.length && Z.call(N, f, V, 0)),
          Lu(b, q, N),
          Lu(w, U, N);
        var p = Za && Za.timeline;
        p &&
          (p.add(N, 0),
          Za._final.push(function () {
            return Mu(W, !x);
          })),
          (o = N.duration()),
          N.call(function () {
            var t = N.time() >= o;
            t && !p && Mu(W, !x), A && gu(e, A, t ? "remove" : "add");
          });
      }),
      k &&
        (T = W.filter(function (t) {
          return !t.sd && !t.a.isVisible && t.b.isVisible;
        }).map(function (t) {
          return t.a.element;
        })),
      Za)
        ? (T && (_ = Za._abs).push.apply(_, Eu(W, T)), Za._run.push(g))
        : (T && Pu(Eu(W, T)), g());
      var $ = Za ? Za.timeline : N;
      return (
        ($.revert = function () {
          return qu($, 1);
        }),
        $
      );
    },
    Vu = function t(e) {
      e.vars.onInterrupt &&
        e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
        e.getChildren(!0, !1, !0).forEach(t);
    },
    qu = function (t, e) {
      if (t && t.progress() < 1 && !t.paused())
        return e && (Vu(t), e < 2 && t.progress(1), t.kill()), !0;
    },
    Uu = function (t) {
      for (
        var e,
          r = (t.idLookup = {}),
          n = (t.alt = {}),
          i = t.elementStates,
          s = i.length;
        s--;

      )
        r[(e = i[s]).id] ? (n[e.id] = e) : (r[e.id] = e);
    },
    Wu = (function () {
      function t(t, e, r) {
        if (
          ((this.props = e && e.props), (this.simple = !(!e || !e.simple)), r)
        )
          (this.targets = Ru(t)), (this.elementStates = t), Uu(this);
        else {
          this.targets = Ga(t);
          var n = e && (!1 === e.kill || (e.batch && !e.kill));
          Za && !n && Za._kill.push(this), this.update(n || !!Za);
        }
      }
      var e = t.prototype;
      return (
        (e.update = function (t) {
          var e = this;
          return (
            (this.elementStates = this.targets.map(function (t) {
              return new Hu(t, e.props, e.simple);
            })),
            Uu(this),
            this.interrupt(t),
            this.recordInlineStyles(),
            this
          );
        }),
        (e.clear = function () {
          return (
            (this.targets.length = this.elementStates.length = 0),
            Uu(this),
            this
          );
        }),
        (e.fit = function (t, e, r) {
          for (
            var n,
              i,
              s = Tu(this.elementStates.slice(0), !1, !0),
              o = (t || this).idLookup,
              a = 0;
            a < s.length;
            a++
          )
            (n = s[a]),
              r && (n.matrix = ja(n.element, !1, !1, !0)),
              (i = o[n.id]) && Bu(n, i, e, !0, 0, n),
              (n.matrix = ja(n.element, !1, !1, !0));
          return this;
        }),
        (e.getProperty = function (t, e) {
          var r = this.getElementState(t) || au;
          return (e in r ? r : r.props || au)[e];
        }),
        (e.add = function (t) {
          for (
            var e, r, n, i = t.targets.length, s = this.idLookup, o = this.alt;
            i--;

          )
            (n = s[(r = t.elementStates[i]).id]) &&
            (r.element === n.element ||
              (o[r.id] && o[r.id].element === r.element))
              ? ((e = this.elementStates.indexOf(
                  r.element === n.element ? n : o[r.id]
                )),
                this.targets.splice(e, 1, t.targets[i]),
                this.elementStates.splice(e, 1, r))
              : (this.targets.push(t.targets[i]), this.elementStates.push(r));
          return (
            t.interrupted && (this.interrupted = !0),
            t.simple || (this.simple = !1),
            Uu(this),
            this
          );
        }),
        (e.compare = function (t) {
          var e,
            r,
            n,
            i,
            s,
            o,
            a,
            u,
            l = t.idLookup,
            c = this.idLookup,
            f = [],
            h = [],
            p = [],
            d = [],
            g = [],
            m = t.alt,
            v = this.alt,
            _ = function (t, e, r) {
              return (
                (t.isVisible !== e.isVisible
                  ? t.isVisible
                    ? p
                    : d
                  : t.isVisible
                  ? h
                  : f
                ).push(r) && g.push(r)
              );
            },
            y = function (t, e, r) {
              return g.indexOf(r) < 0 && _(t, e, r);
            };
          for (n in l)
            (s = m[n]),
              (o = v[n]),
              (i = (e = s ? Iu(t, this, n) : l[n]).element),
              (r = c[n]),
              o
                ? ((u =
                    r.isVisible || (!o.isVisible && i === r.element) ? r : o),
                  (a =
                    !s || e.isVisible || s.isVisible || u.element !== s.element
                      ? e
                      : s).isVisible &&
                  u.isVisible &&
                  a.element !== u.element
                    ? ((a.isDifferent(u) ? h : f).push(a.element, u.element),
                      g.push(a.element, u.element))
                    : _(a, u, a.element),
                  s && a.element === s.element && (s = l[n]),
                  y(a.element !== r.element && s ? s : a, r, r.element),
                  y(s && s.element === o.element ? s : a, o, o.element),
                  s && y(s, o.element === s.element ? o : r, s.element))
                : (r ? (r.isDifferent(e) ? _(e, r, i) : f.push(i)) : p.push(i),
                  s && y(s, r, s.element));
          for (n in c)
            l[n] || (d.push(c[n].element), v[n] && d.push(v[n].element));
          return { changed: h, unchanged: f, enter: p, leave: d };
        }),
        (e.recordInlineStyles = function () {
          for (
            var t = lu[this.props] || hu, e = this.elementStates.length;
            e--;

          )
            ku(this.elementStates[e], t);
        }),
        (e.interrupt = function (t) {
          var e = this,
            r = [];
          this.targets.forEach(function (n) {
            var i = n._flip,
              s = qu(i, t ? 0 : 1);
            t &&
              s &&
              r.indexOf(i) < 0 &&
              i.add(function () {
                return e.updateVisibility();
              }),
              s && r.push(i);
          }),
            !t && r.length && this.updateVisibility(),
            this.interrupted || (this.interrupted = !!r.length);
        }),
        (e.updateVisibility = function () {
          this.elementStates.forEach(function (t) {
            var e = t.element.getBoundingClientRect();
            (t.isVisible = !!(e.width || e.height || e.top || e.left)),
              (t.uncache = 1);
          });
        }),
        (e.getElementState = function (t) {
          return this.elementStates[this.targets.indexOf(pu(t))];
        }),
        (e.makeAbsolute = function () {
          return Tu(this.elementStates.slice(0), !0, !0).map(Ou);
        }),
        t
      );
    })(),
    Hu = (function () {
      function t(t, e, r) {
        (this.element = t), this.update(e, r);
      }
      var e = t.prototype;
      return (
        (e.isDifferent = function (t) {
          var e = this.bounds,
            r = t.bounds;
          return (
            e.top !== r.top ||
            e.left !== r.left ||
            e.width !== r.width ||
            e.height !== r.height ||
            !this.matrix.equals(t.matrix) ||
            this.opacity !== t.opacity ||
            (this.props &&
              t.props &&
              JSON.stringify(this.props) !== JSON.stringify(t.props))
          );
        }),
        (e.update = function (t, e) {
          var r = this,
            n = r.element,
            i = Ka.getProperty(n),
            s = Ka.core.getCache(n),
            o = n.getBoundingClientRect(),
            a =
              n.getBBox &&
              "function" == typeof n.getBBox &&
              "svg" !== n.nodeName.toLowerCase() &&
              n.getBBox(),
            u = e
              ? new Ha(1, 0, 0, 1, o.left + Xa(), o.top + Ya())
              : ja(n, !1, !1, !0);
          (r.getProp = i),
            (r.element = n),
            (r.id = (function (t) {
              var e = t.getAttribute("data-flip-id");
              return (
                e || t.setAttribute("data-flip-id", (e = "auto-" + ru++)), e
              );
            })(n)),
            (r.matrix = u),
            (r.cache = s),
            (r.bounds = o),
            (r.isVisible = !!(o.width || o.height || o.left || o.top)),
            (r.display = i("display")),
            (r.position = i("position")),
            (r.parent = n.parentNode),
            (r.x = i("x")),
            (r.y = i("y")),
            (r.scaleX = s.scaleX),
            (r.scaleY = s.scaleY),
            (r.rotation = i("rotation")),
            (r.skewX = i("skewX")),
            (r.opacity = i("opacity")),
            (r.width = a ? a.width : Ja(i("width", "px"), 0.04)),
            (r.height = a ? a.height : Ja(i("height", "px"), 0.04)),
            t &&
              (function (t, e) {
                for (
                  var r = Ka.getProperty(t.element, null, "native"),
                    n = (t.props = {}),
                    i = e.length;
                  i--;

                )
                  n[e[i]] = (r(e[i]) + "").trim();
                n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
              })(r, xu[t] || bu(t)),
            (r.ctm =
              n.getCTM &&
              "svg" === n.nodeName.toLowerCase() &&
              qa(n).inverse()),
            (r.simple =
              e || (1 === du(u.a) && !du(u.b) && !du(u.c) && 1 === du(u.d))),
            (r.uncache = 0);
        }),
        t
      );
    })(),
    ju = (function () {
      function t(t, e) {
        (this.vars = t),
          (this.batch = e),
          (this.states = []),
          (this.timeline = e.timeline);
      }
      var e = t.prototype;
      return (
        (e.getStateById = function (t) {
          for (var e = this.states.length; e--; )
            if (this.states[e].idLookup[t]) return this.states[e];
        }),
        (e.kill = function () {
          this.batch.remove(this);
        }),
        t
      );
    })(),
    Gu = (function () {
      function t(t) {
        (this.id = t),
          (this.actions = []),
          (this._kill = []),
          (this._final = []),
          (this._abs = []),
          (this._run = []),
          (this.data = {}),
          (this.state = new Wu()),
          (this.timeline = Ka.timeline());
      }
      var e = t.prototype;
      return (
        (e.add = function (t) {
          var e = this.actions.filter(function (e) {
            return e.vars === t;
          });
          return e.length
            ? e[0]
            : ((e = new ju("function" == typeof t ? { animate: t } : t, this)),
              this.actions.push(e),
              e);
        }),
        (e.remove = function (t) {
          var e = this.actions.indexOf(t);
          return e >= 0 && this.actions.splice(e, 1), this;
        }),
        (e.getState = function (t) {
          var e = this,
            r = Za,
            n = $a;
          return (
            (Za = this),
            this.state.clear(),
            (this._kill.length = 0),
            this.actions.forEach(function (r) {
              r.vars.getState &&
                ((r.states.length = 0),
                ($a = r),
                (r.state = r.vars.getState(r))),
                t &&
                  r.states.forEach(function (t) {
                    return e.state.add(t);
                  });
            }),
            ($a = n),
            (Za = r),
            this.killConflicts(),
            this
          );
        }),
        (e.animate = function () {
          var t,
            e,
            r = this,
            n = Za,
            i = this.timeline,
            s = this.actions.length;
          for (
            Za = this,
              i.clear(),
              this._abs.length = this._final.length = this._run.length = 0,
              this.actions.forEach(function (t) {
                t.vars.animate && t.vars.animate(t);
                var e,
                  r,
                  n = t.vars.onEnter,
                  i = t.vars.onLeave,
                  s = t.targets;
                s &&
                  s.length &&
                  (n || i) &&
                  ((e = new Wu()),
                  t.states.forEach(function (t) {
                    return e.add(t);
                  }),
                  (r = e.compare(Ku.getState(s))).enter.length &&
                    n &&
                    n(r.enter),
                  r.leave.length && i && i(r.leave));
              }),
              Pu(this._abs),
              this._run.forEach(function (t) {
                return t();
              }),
              e = i.duration(),
              t = this._final.slice(0),
              i.add(function () {
                e <= i.time() &&
                  (t.forEach(function (t) {
                    return t();
                  }),
                  nu(r, "onComplete"));
              }),
              Za = n;
            s--;

          )
            this.actions[s].vars.once && this.actions[s].kill();
          return nu(this, "onStart"), i.restart(), this;
        }),
        (e.loadState = function (t) {
          t ||
            (t = function () {
              return 0;
            });
          var e = [];
          return (
            this.actions.forEach(function (r) {
              if (r.vars.loadState) {
                var n,
                  i = function i(s) {
                    s && (r.targets = s),
                      ~(n = e.indexOf(i)) && (e.splice(n, 1), e.length || t());
                  };
                e.push(i), r.vars.loadState(i);
              }
            }),
            e.length || t(),
            this
          );
        }),
        (e.setState = function () {
          return (
            this.actions.forEach(function (t) {
              return (t.targets = t.vars.setState && t.vars.setState(t));
            }),
            this
          );
        }),
        (e.killConflicts = function (t) {
          return (
            this.state.interrupt(t),
            this._kill.forEach(function (e) {
              return e.interrupt(t);
            }),
            this
          );
        }),
        (e.run = function (t, e) {
          var r = this;
          return (
            this !== Za &&
              (t || this.getState(e),
              this.loadState(function () {
                r._killed || (r.setState(), r.animate());
              })),
            this
          );
        }),
        (e.clear = function (t) {
          this.state.clear(), t || (this.actions.length = 0);
        }),
        (e.getStateById = function (t) {
          for (var e, r = this.actions.length; r--; )
            if ((e = this.actions[r].getStateById(t))) return e;
          return this.state.idLookup[t] && this.state;
        }),
        (e.kill = function () {
          (this._killed = 1), this.clear(), delete iu[this.id];
        }),
        t
      );
    })(),
    Ku = (function () {
      function t() {}
      return (
        (t.getState = function (e, r) {
          var n = zu(e, r);
          return (
            $a && $a.states.push(n),
            r && r.batch && t.batch(r.batch).state.add(n),
            n
          );
        }),
        (t.from = function (t, e) {
          return (
            "clearProps" in (e = e || {}) || (e.clearProps = !0),
            Nu(
              t,
              zu(e.targets || t.targets, {
                props: e.props || t.props,
                simple: e.simple,
                kill: !!e.kill,
              }),
              e,
              -1
            )
          );
        }),
        (t.to = function (t, e) {
          return Nu(
            t,
            zu(e.targets || t.targets, {
              props: e.props || t.props,
              simple: e.simple,
              kill: !!e.kill,
            }),
            e,
            1
          );
        }),
        (t.fromTo = function (t, e, r) {
          return Nu(t, e, r);
        }),
        (t.fit = function (t, e, r) {
          var n = r ? yu(r, vu) : {},
            i = r || n,
            s = i.absolute,
            o = i.scale,
            a = i.getVars,
            u = i.props,
            l = i.runBackwards,
            c = i.onComplete,
            f = i.simple,
            h = r && r.fitChild && pu(r.fitChild),
            p = Au(e, u, f, t),
            d = Au(t, 0, f, p),
            g = u ? lu[u] : hu;
          return (
            u && Du(n, p.props),
            l &&
              (ku(d, g),
              "immediateRender" in n || (n.immediateRender = !0),
              (n.onComplete = function () {
                Su(d), c && c.apply(this, arguments);
              })),
            s && Ou(d, p),
            (n = Bu(d, p, o || h, u, h, n.duration || a ? n : 0)),
            a ? n : n.duration ? Ka.to(d.element, n) : null
          );
        }),
        (t.makeAbsolute = function (t, e) {
          return (t instanceof Wu ? t : new Wu(t, e)).makeAbsolute();
        }),
        (t.batch = function (t) {
          return t || (t = "default"), iu[t] || (iu[t] = new Gu(t));
        }),
        (t.killFlipsOf = function (t, e) {
          (t instanceof Wu ? t.targets : Ga(t)).forEach(function (t) {
            return t && qu(t._flip, !1 !== e ? 1 : 2);
          });
        }),
        (t.isFlipping = function (e) {
          var r = t.getByTarget(e);
          return !!r && r.isActive();
        }),
        (t.getByTarget = function (t) {
          return (pu(t) || au)._flip;
        }),
        (t.getElementState = function (t, e) {
          return new Hu(pu(t), e);
        }),
        (t.convertCoordinates = function (t, e, r) {
          var n = ja(e, !0, !0).multiply(ja(t));
          return r ? n.apply(r) : n;
        }),
        (t.register = function (t) {
          if ((Qa = typeof document < "u" && document.body)) {
            (Ka = t),
              Ba(Qa),
              (Ga = Ka.utils.toArray),
              (tu = Ka.core.getStyleSaver);
            var e = Ka.utils.snap(0.1);
            Ja = function (t, r) {
              return e(parseFloat(t) + r);
            };
          }
        }),
        t
      );
    })();
  (Ku.version = "3.11.5"),
    typeof window < "u" && window.gsap && window.gsap.registerPlugin(Ku),
    Jn.registerPlugin(Zo, Ta, Ku);
  var Zu = document.querySelector(".js-hero");
  Zu &&
    ((t) => {
      let e = t.nextElementSibling,
        r = t.querySelectorAll("video"),
        n = document.querySelector(".js-header");
      n.classList.add("light"),
        Zo.create({
          startTrigger: e || t.getBoundingClientRect().bottom,
          start: "top top",
          endTrigger: "body",
          end: "bottom top",
          invalidateOnRefresh: !0,
          onUpdate: (e) => {
            e.isActive
              ? (t.classList.add("hero-hide"),
                n.classList.remove("light"),
                r.forEach((t) => {
                  t.paused || t.pause();
                }))
              : (t.classList.remove("hero-hide"),
                n.classList.add("light"),
                r.forEach((t) => {
                  t.paused && t.play();
                }));
          },
        });
    })(Zu);
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.5
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollToPlugin.js:
  (*!
   * ScrollToPlugin 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.11.5
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
