var app = (function () {
  "use strict"
  function e() {}
  function t(e, t) {
    for (const n in t) e[n] = t[n]
    return e
  }
  function n(e) {
    return e()
  }
  function r() {
    return Object.create(null)
  }
  function a(e) {
    e.forEach(n)
  }
  function i(e) {
    return "function" == typeof e
  }
  function o(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e
  }
  function s(e, n, r) {
    return e[1] ? t({}, t(n.$$scope.ctx, e[1](r ? r(n) : {}))) : n.$$scope.ctx
  }
  function l(e) {
    return null == e ? "" : e
  }
  function c(e, t) {
    e.appendChild(t)
  }
  function u(e, t, n) {
    e.insertBefore(t, n || null)
  }
  function d(e) {
    e.parentNode.removeChild(e)
  }
  function p(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
  }
  function h(e) {
    return document.createElement(e)
  }
  function g(e) {
    return document.createTextNode(e)
  }
  function f() {
    return g(" ")
  }
  function m() {
    return g("")
  }
  function b(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
  }
  function _(e, t, n) {
    null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
  }
  function v(e, t) {
    for (const n in t)
      "style" === n
        ? (e.style.cssText = t[n])
        : n in e
        ? (e[n] = t[n])
        : _(e, n, t[n])
  }
  function w(e, t, n) {
    t in e ? (e[t] = n) : _(e, t, n)
  }
  function y(e, t) {
    ;(t = "" + t), e.data !== t && (e.data = t)
  }
  function k(e, t) {
    ;(null != t || e.value) && (e.value = t)
  }
  function x(e, t, n, r) {
    e.style.setProperty(t, n, r ? "important" : "")
  }
  function E(e, t) {
    for (let n = 0; n < e.options.length; n += 1) {
      const r = e.options[n]
      if (r.__value === t) return void (r.selected = !0)
    }
  }
  function S(e, t, n) {
    e.classList[n ? "add" : "remove"](t)
  }
  class $ {
    constructor(e, t = null) {
      ;(this.e = h("div")), (this.a = t), this.u(e)
    }
    m(e, t = null) {
      for (let n = 0; n < this.n.length; n += 1) u(e, this.n[n], t)
      this.t = e
    }
    u(e) {
      ;(this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes))
    }
    p(e) {
      this.d(), this.u(e), this.m(this.t, this.a)
    }
    d() {
      this.n.forEach(d)
    }
  }
  let I
  function C(e) {
    I = e
  }
  function L() {
    if (!I) throw new Error("Function called outside component initialization")
    return I
  }
  function T(e) {
    L().$$.before_update.push(e)
  }
  function M(e) {
    L().$$.on_mount.push(e)
  }
  function j(e) {
    L().$$.on_destroy.push(e)
  }
  function O() {
    const e = I
    return (t, n) => {
      const r = e.$$.callbacks[t]
      if (r) {
        const a = (function (e, t) {
          const n = document.createEvent("CustomEvent")
          return n.initCustomEvent(e, !1, !1, t), n
        })(t, n)
        r.slice().forEach((t) => {
          t.call(e, a)
        })
      }
    }
  }
  const A = [],
    N = [],
    P = [],
    R = [],
    H = Promise.resolve()
  let z = !1
  function q() {
    z || ((z = !0), H.then(V))
  }
  function B() {
    return q(), H
  }
  function D(e) {
    P.push(e)
  }
  function V() {
    const e = new Set()
    do {
      for (; A.length; ) {
        const e = A.shift()
        C(e), U(e.$$)
      }
      for (; N.length; ) N.pop()()
      for (let t = 0; t < P.length; t += 1) {
        const n = P[t]
        e.has(n) || (n(), e.add(n))
      }
      P.length = 0
    } while (A.length)
    for (; R.length; ) R.pop()()
    z = !1
  }
  function U(e) {
    e.fragment &&
      (e.update(e.dirty),
      a(e.before_update),
      e.fragment.p(e.dirty, e.ctx),
      (e.dirty = null),
      e.after_update.forEach(D))
  }
  const F = new Set()
  let G, W
  function K() {
    G = { r: 0, c: [], p: G }
  }
  function J() {
    G.r || a(G.c), (G = G.p)
  }
  function Z(e, t) {
    e && e.i && (F.delete(e), e.i(t))
  }
  function Q(e, t, n, r) {
    if (e && e.o) {
      if (F.has(e)) return
      F.add(e),
        G.c.push(() => {
          F.delete(e), r && (n && e.d(1), r())
        }),
        e.o(t)
    }
  }
  function X(e, t) {
    Q(e, 1, 1, () => {
      t.delete(e.key)
    })
  }
  function Y(e, t) {
    const n = {},
      r = {},
      a = { $$scope: 1 }
    let i = e.length
    for (; i--; ) {
      const o = e[i],
        s = t[i]
      if (s) {
        for (const e in o) e in s || (r[e] = 1)
        for (const e in s) a[e] || ((n[e] = s[e]), (a[e] = 1))
        e[i] = s
      } else for (const e in o) a[e] = 1
    }
    for (const e in r) e in n || (n[e] = void 0)
    return n
  }
  function ee(e, t, r) {
    const { fragment: o, on_mount: s, on_destroy: l, after_update: c } = e.$$
    o.m(t, r),
      D(() => {
        const t = s.map(n).filter(i)
        l ? l.push(...t) : a(t), (e.$$.on_mount = [])
      }),
      c.forEach(D)
  }
  function te(e, t) {
    e.$$.fragment &&
      (a(e.$$.on_destroy),
      e.$$.fragment.d(t),
      (e.$$.on_destroy = e.$$.fragment = null),
      (e.$$.ctx = {}))
  }
  function ne(t, n, i, o, s, l) {
    const c = I
    C(t)
    const u = n.props || {},
      d = (t.$$ = {
        fragment: null,
        ctx: null,
        props: l,
        update: e,
        not_equal: s,
        bound: r(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(c ? c.$$.context : []),
        callbacks: r(),
        dirty: null,
      })
    let p = !1
    ;(d.ctx = i
      ? i(
          t,
          u,
          (e, n, a = n) => (
            d.ctx &&
              s(d.ctx[e], (d.ctx[e] = a)) &&
              (d.bound[e] && d.bound[e](a),
              p &&
                (function (e, t) {
                  e.$$.dirty || (A.push(e), q(), (e.$$.dirty = r())),
                    (e.$$.dirty[t] = !0)
                })(t, e)),
            n
          )
        )
      : u),
      d.update(),
      (p = !0),
      a(d.before_update),
      (d.fragment = o(d.ctx)),
      n.target &&
        (n.hydrate
          ? d.fragment.l(
              (function (e) {
                return Array.from(e.childNodes)
              })(n.target)
            )
          : d.fragment.c(),
        n.intro && Z(t.$$.fragment),
        ee(t, n.target, n.anchor),
        V()),
      C(c)
  }
  "undefined" != typeof HTMLElement &&
    (W = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: "open" })
      }
      connectedCallback() {
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
      }
      attributeChangedCallback(e, t, n) {
        this[e] = n
      }
      $destroy() {
        te(this, 1), (this.$destroy = e)
      }
      $on(e, t) {
        const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
        return (
          n.push(t),
          () => {
            const e = n.indexOf(t)
            ;-1 !== e && n.splice(e, 1)
          }
        )
      }
      $set() {}
    })
  class re {
    $destroy() {
      te(this, 1), (this.$destroy = e)
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t)
          ;-1 !== e && n.splice(e, 1)
        }
      )
    }
    $set() {}
  }
  function ae(t) {
    var n,
      r,
      a,
      i,
      o,
      s,
      l,
      p,
      m = t.request.method + "",
      b = t.request.name + ""
    return {
      c() {
        ;(n = h("a")),
          (r = h("strong")),
          (a = g(m)),
          (o = f()),
          (s = h("span")),
          (l = g(b)),
          _(r, "class", (i = t.request.method.toLowerCase())),
          _(n, "href", (p = "#" + t.request._id)),
          _(n, "class", "sidebar-list-link name")
      },
      m(e, t) {
        u(e, n, t), c(n, r), c(r, a), c(n, o), c(n, s), c(s, l)
      },
      p(e, t) {
        e.request && m !== (m = t.request.method + "") && y(a, m),
          e.request &&
            i !== (i = t.request.method.toLowerCase()) &&
            _(r, "class", i),
          e.request && b !== (b = t.request.name + "") && y(l, b),
          e.request && p !== (p = "#" + t.request._id) && _(n, "href", p)
      },
      i: e,
      o: e,
      d(e) {
        e && d(n)
      },
    }
  }
  function ie(e, t, n) {
    let { request: r } = t
    return (
      (e.$set = (e) => {
        "request" in e && n("request", (r = e.request))
      }),
      { request: r }
    )
  }
  class oe extends re {
    constructor(e) {
      super(), ne(this, e, ie, ae, o, ["request"])
    }
  }
  function se(e, t, n) {
    const r = Object.create(e)
    return (r.request = t[n]), r
  }
  function le(e, t, n) {
    const r = Object.create(e)
    return (r.child = t[n]), r
  }
  function ce(e) {
    var t, n, r, a
    return {
      c() {
        ;(t = h("a")),
          (n = h("span")),
          (r = g(e.name)),
          _(t, "href", "javascript:;"),
          _(t, "class", "sidebar-list-link name svelte-1banbqx"),
          S(t, "expanded", e.expanded),
          (a = b(t, "click", e.toggle))
      },
      m(e, a) {
        u(e, t, a), c(t, n), c(n, r)
      },
      p(e, n) {
        e.name && y(r, n.name), e.expanded && S(t, "expanded", n.expanded)
      },
      d(e) {
        e && d(t), a()
      },
    }
  }
  function ue(e) {
    var t, n, r
    let a = e.children,
      i = []
    for (let t = 0; t < a.length; t += 1) i[t] = de(le(e, a, t))
    const o = (e) =>
      Q(i[e], 1, 1, () => {
        i[e] = null
      })
    let s = e.requests,
      l = []
    for (let t = 0; t < s.length; t += 1) l[t] = pe(se(e, s, t))
    const g = (e) =>
      Q(l[e], 1, 1, () => {
        l[e] = null
      })
    return {
      c() {
        t = h("ul")
        for (let e = 0; e < i.length; e += 1) i[e].c()
        n = f()
        for (let e = 0; e < l.length; e += 1) l[e].c()
        _(t, "class", "svelte-1banbqx")
      },
      m(e, a) {
        u(e, t, a)
        for (let e = 0; e < i.length; e += 1) i[e].m(t, null)
        c(t, n)
        for (let e = 0; e < l.length; e += 1) l[e].m(t, null)
        r = !0
      },
      p(e, r) {
        if (e.children) {
          let s
          for (a = r.children, s = 0; s < a.length; s += 1) {
            const o = le(r, a, s)
            i[s]
              ? (i[s].p(e, o), Z(i[s], 1))
              : ((i[s] = de(o)), i[s].c(), Z(i[s], 1), i[s].m(t, n))
          }
          for (K(), s = a.length; s < i.length; s += 1) o(s)
          J()
        }
        if (e.requests) {
          let n
          for (s = r.requests, n = 0; n < s.length; n += 1) {
            const a = se(r, s, n)
            l[n]
              ? (l[n].p(e, a), Z(l[n], 1))
              : ((l[n] = pe(a)), l[n].c(), Z(l[n], 1), l[n].m(t, null))
          }
          for (K(), n = s.length; n < l.length; n += 1) g(n)
          J()
        }
      },
      i(e) {
        if (!r) {
          for (let e = 0; e < a.length; e += 1) Z(i[e])
          for (let e = 0; e < s.length; e += 1) Z(l[e])
          r = !0
        }
      },
      o(e) {
        i = i.filter(Boolean)
        for (let e = 0; e < i.length; e += 1) Q(i[e])
        l = l.filter(Boolean)
        for (let e = 0; e < l.length; e += 1) Q(l[e])
        r = !1
      },
      d(e) {
        e && d(t), p(i, e), p(l, e)
      },
    }
  }
  function de(e) {
    var n,
      r,
      a = [e.child]
    let i = {}
    for (var o = 0; o < a.length; o += 1) i = t(i, a[o])
    var s = new fe({ props: i })
    return {
      c() {
        ;(n = h("li")), s.$$.fragment.c(), _(n, "class", "folder")
      },
      m(e, t) {
        u(e, n, t), ee(s, n, null), (r = !0)
      },
      p(e, t) {
        var n,
          r = e.children
            ? Y(a, [
                ((n = t.child), "object" == typeof n && null !== n ? n : {}),
              ])
            : {}
        s.$set(r)
      },
      i(e) {
        r || (Z(s.$$.fragment, e), (r = !0))
      },
      o(e) {
        Q(s.$$.fragment, e), (r = !1)
      },
      d(e) {
        e && d(n), te(s)
      },
    }
  }
  function pe(e) {
    var t,
      n,
      r = new oe({ props: { request: e.request } })
    return {
      c() {
        ;(t = h("li")), r.$$.fragment.c(), _(t, "class", "request")
      },
      m(e, a) {
        u(e, t, a), ee(r, t, null), (n = !0)
      },
      p(e, t) {
        var n = {}
        e.requests && (n.request = t.request), r.$set(n)
      },
      i(e) {
        n || (Z(r.$$.fragment, e), (n = !0))
      },
      o(e) {
        Q(r.$$.fragment, e), (n = !1)
      },
      d(e) {
        e && d(t), te(r)
      },
    }
  }
  function he(e) {
    var t,
      n,
      r,
      a = !e.root && ce(e),
      i = e.expanded && ue(e)
    return {
      c() {
        a && a.c(), (t = f()), i && i.c(), (n = m())
      },
      m(e, o) {
        a && a.m(e, o), u(e, t, o), i && i.m(e, o), u(e, n, o), (r = !0)
      },
      p(e, r) {
        r.root
          ? a && (a.d(1), (a = null))
          : a
          ? a.p(e, r)
          : ((a = ce(r)).c(), a.m(t.parentNode, t)),
          r.expanded
            ? i
              ? (i.p(e, r), Z(i, 1))
              : ((i = ue(r)).c(), Z(i, 1), i.m(n.parentNode, n))
            : i &&
              (K(),
              Q(i, 1, 1, () => {
                i = null
              }),
              J())
      },
      i(e) {
        r || (Z(i), (r = !0))
      },
      o(e) {
        Q(i), (r = !1)
      },
      d(e) {
        a && a.d(e), e && d(t), i && i.d(e), e && d(n)
      },
    }
  }
  function ge(e, t, n) {
    let {
      root: r = !1,
      expanded: a = !1,
      name: i,
      children: o,
      requests: s,
    } = t
    return (
      (e.$set = (e) => {
        "root" in e && n("root", (r = e.root)),
          "expanded" in e && n("expanded", (a = e.expanded)),
          "name" in e && n("name", (i = e.name)),
          "children" in e && n("children", (o = e.children)),
          "requests" in e && n("requests", (s = e.requests))
      }),
      {
        root: r,
        expanded: a,
        name: i,
        children: o,
        requests: s,
        toggle: function () {
          n("expanded", (a = !a))
        },
      }
    )
  }
  class fe extends re {
    constructor(e) {
      super(),
        ne(this, e, ge, he, o, [
          "root",
          "expanded",
          "name",
          "children",
          "requests",
        ])
    }
  }
  function me(e) {
    var t,
      n,
      r = new fe({
        props: {
          name: e.workspace.name,
          children: e.groups,
          requests: e.requests,
          root: !0,
          expanded: !0,
        },
      })
    return {
      c() {
        ;(t = h("aside")),
          r.$$.fragment.c(),
          _(t, "class", "svelte-qjien1"),
          S(t, "visible", e.visible)
      },
      m(e, a) {
        u(e, t, a), ee(r, t, null), (n = !0)
      },
      p(e, n) {
        var a = {}
        e.workspace && (a.name = n.workspace.name),
          e.groups && (a.children = n.groups),
          e.requests && (a.requests = n.requests),
          r.$set(a),
          e.visible && S(t, "visible", n.visible)
      },
      i(e) {
        n || (Z(r.$$.fragment, e), (n = !0))
      },
      o(e) {
        Q(r.$$.fragment, e), (n = !1)
      },
      d(e) {
        e && d(t), te(r)
      },
    }
  }
  function be(e, t, n) {
    let { requests: r, groups: a, workspace: i, visible: o } = t
    return (
      (e.$set = (e) => {
        "requests" in e && n("requests", (r = e.requests)),
          "groups" in e && n("groups", (a = e.groups)),
          "workspace" in e && n("workspace", (i = e.workspace)),
          "visible" in e && n("visible", (o = e.visible))
      }),
      { requests: r, groups: a, workspace: i, visible: o }
    )
  }
  class _e extends re {
    constructor(e) {
      super(),
        ne(this, e, be, me, o, ["requests", "groups", "workspace", "visible"])
    }
  }
  function ve(e) {
    return (
      e instanceof Map
        ? (e.clear =
            e.delete =
            e.set =
              function () {
                throw new Error("map is read-only")
              })
        : e instanceof Set &&
          (e.add =
            e.clear =
            e.delete =
              function () {
                throw new Error("set is read-only")
              }),
      Object.freeze(e),
      Object.getOwnPropertyNames(e).forEach(function (t) {
        var n = e[t]
        "object" != typeof n || Object.isFrozen(n) || ve(n)
      }),
      e
    )
  }
  var we = ve,
    ye = ve
  we.default = ye
  class ke {
    constructor(e) {
      void 0 === e.data && (e.data = {}),
        (this.data = e.data),
        (this.isMatchIgnored = !1)
    }
    ignoreMatch() {
      this.isMatchIgnored = !0
    }
  }
  function xe(e) {
    return e
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
  }
  function Ee(e, ...t) {
    const n = Object.create(null)
    for (const t in e) n[t] = e[t]
    return (
      t.forEach(function (e) {
        for (const t in e) n[t] = e[t]
      }),
      n
    )
  }
  const Se = (e) => !!e.kind
  class $e {
    constructor(e, t) {
      ;(this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this)
    }
    addText(e) {
      this.buffer += xe(e)
    }
    openNode(e) {
      if (!Se(e)) return
      let t = e.kind
      e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t)
    }
    closeNode(e) {
      Se(e) && (this.buffer += "</span>")
    }
    value() {
      return this.buffer
    }
    span(e) {
      this.buffer += `<span class="${e}">`
    }
  }
  class Ie {
    constructor() {
      ;(this.rootNode = { children: [] }), (this.stack = [this.rootNode])
    }
    get top() {
      return this.stack[this.stack.length - 1]
    }
    get root() {
      return this.rootNode
    }
    add(e) {
      this.top.children.push(e)
    }
    openNode(e) {
      const t = { kind: e, children: [] }
      this.add(t), this.stack.push(t)
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop()
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4)
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode)
    }
    static _walk(e, t) {
      return (
        "string" == typeof t
          ? e.addText(t)
          : t.children &&
            (e.openNode(t),
            t.children.forEach((t) => this._walk(e, t)),
            e.closeNode(t)),
        e
      )
    }
    static _collapse(e) {
      "string" != typeof e &&
        e.children &&
        (e.children.every((e) => "string" == typeof e)
          ? (e.children = [e.children.join("")])
          : e.children.forEach((e) => {
              Ie._collapse(e)
            }))
    }
  }
  class Ce extends Ie {
    constructor(e) {
      super(), (this.options = e)
    }
    addKeyword(e, t) {
      "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
    }
    addText(e) {
      "" !== e && this.add(e)
    }
    addSublanguage(e, t) {
      const n = e.root
      ;(n.kind = t), (n.sublanguage = !0), this.add(n)
    }
    toHTML() {
      return new $e(this, this.options).value()
    }
    finalize() {
      return !0
    }
  }
  function Le(e) {
    return e ? ("string" == typeof e ? e : e.source) : null
  }
  const Te = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
  const Me =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    je = { begin: "\\\\[\\s\\S]", relevance: 0 },
    Oe = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [je],
    },
    Ae = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [je],
    },
    Ne = {
      begin:
        /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    Pe = function (e, t, n = {}) {
      const r = Ee({ className: "comment", begin: e, end: t, contains: [] }, n)
      return (
        r.contains.push(Ne),
        r.contains.push({
          className: "doctag",
          begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
          relevance: 0,
        }),
        r
      )
    },
    Re = Pe("//", "$"),
    He = Pe("/\\*", "\\*/"),
    ze = Pe("#", "$"),
    qe = { className: "number", begin: "\\b\\d+(\\.\\d+)?", relevance: 0 },
    Be = { className: "number", begin: Me, relevance: 0 },
    De = { className: "number", begin: "\\b(0b[01]+)", relevance: 0 },
    Ve = {
      className: "number",
      begin:
        "\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0,
    },
    Ue = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [
        {
          className: "regexp",
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [
            je,
            { begin: /\[/, end: /\]/, relevance: 0, contains: [je] },
          ],
        },
      ],
    },
    Fe = { className: "title", begin: "[a-zA-Z]\\w*", relevance: 0 },
    Ge = { className: "title", begin: "[a-zA-Z_]\\w*", relevance: 0 },
    We = { begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0 }
  var Ke = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: "[a-zA-Z]\\w*",
    UNDERSCORE_IDENT_RE: "[a-zA-Z_]\\w*",
    NUMBER_RE: "\\b\\d+(\\.\\d+)?",
    C_NUMBER_RE: Me,
    BINARY_NUMBER_RE: "\\b(0b[01]+)",
    RE_STARTERS_RE:
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      const t = /^#![ ]*\//
      return (
        e.binary &&
          (e.begin = (function (...e) {
            return e.map((e) => Le(e)).join("")
          })(t, /.*\b/, e.binary, /\b.*/)),
        Ee(
          {
            className: "meta",
            begin: t,
            end: /$/,
            relevance: 0,
            "on:begin": (e, t) => {
              0 !== e.index && t.ignoreMatch()
            },
          },
          e
        )
      )
    },
    BACKSLASH_ESCAPE: je,
    APOS_STRING_MODE: Oe,
    QUOTE_STRING_MODE: Ae,
    PHRASAL_WORDS_MODE: Ne,
    COMMENT: Pe,
    C_LINE_COMMENT_MODE: Re,
    C_BLOCK_COMMENT_MODE: He,
    HASH_COMMENT_MODE: ze,
    NUMBER_MODE: qe,
    C_NUMBER_MODE: Be,
    BINARY_NUMBER_MODE: De,
    CSS_NUMBER_MODE: Ve,
    REGEXP_MODE: Ue,
    TITLE_MODE: Fe,
    UNDERSCORE_TITLE_MODE: Ge,
    METHOD_GUARD: We,
    END_SAME_AS_BEGIN: function (e) {
      return Object.assign(e, {
        "on:begin": (e, t) => {
          t.data._beginMatch = e[1]
        },
        "on:end": (e, t) => {
          t.data._beginMatch !== e[1] && t.ignoreMatch()
        },
      })
    },
  })
  function Je(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch()
  }
  function Ze(e, t) {
    t &&
      e.beginKeywords &&
      ((e.begin =
        "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
      (e.__beforeBegin = Je),
      (e.keywords = e.keywords || e.beginKeywords),
      delete e.beginKeywords,
      void 0 === e.relevance && (e.relevance = 0))
  }
  function Qe(e, t) {
    Array.isArray(e.illegal) &&
      (e.illegal = (function (...e) {
        return "(" + e.map((e) => Le(e)).join("|") + ")"
      })(...e.illegal))
  }
  function Xe(e, t) {
    if (e.match) {
      if (e.begin || e.end)
        throw new Error("begin & end are not supported with match")
      ;(e.begin = e.match), delete e.match
    }
  }
  function Ye(e, t) {
    void 0 === e.relevance && (e.relevance = 1)
  }
  const et = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value",
  ]
  function tt(e, t) {
    return t
      ? Number(t)
      : (function (e) {
          return et.includes(e.toLowerCase())
        })(e)
      ? 0
      : 1
  }
  function nt(e, { plugins: t }) {
    function n(t, n) {
      return new RegExp(
        Le(t),
        "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : "")
      )
    }
    class r {
      constructor() {
        ;(this.matchIndexes = {}),
          (this.regexes = []),
          (this.matchAt = 1),
          (this.position = 0)
      }
      addRule(e, t) {
        ;(t.position = this.position++),
          (this.matchIndexes[this.matchAt] = t),
          this.regexes.push([t, e]),
          (this.matchAt +=
            (function (e) {
              return new RegExp(e.toString() + "|").exec("").length - 1
            })(e) + 1)
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null)
        const e = this.regexes.map((e) => e[1])
        ;(this.matcherRe = n(
          (function (e, t = "|") {
            let n = 0
            return e
              .map((e) => {
                n += 1
                const t = n
                let r = Le(e),
                  a = ""
                for (; r.length > 0; ) {
                  const e = Te.exec(r)
                  if (!e) {
                    a += r
                    break
                  }
                  ;(a += r.substring(0, e.index)),
                    (r = r.substring(e.index + e[0].length)),
                    "\\" === e[0][0] && e[1]
                      ? (a += "\\" + String(Number(e[1]) + t))
                      : ((a += e[0]), "(" === e[0] && n++)
                }
                return a
              })
              .map((e) => `(${e})`)
              .join(t)
          })(e),
          !0
        )),
          (this.lastIndex = 0)
      }
      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex
        const t = this.matcherRe.exec(e)
        if (!t) return null
        const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
          r = this.matchIndexes[n]
        return t.splice(0, n), Object.assign(t, r)
      }
    }
    class a {
      constructor() {
        ;(this.rules = []),
          (this.multiRegexes = []),
          (this.count = 0),
          (this.lastIndex = 0),
          (this.regexIndex = 0)
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e]
        const t = new r()
        return (
          this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
          t.compile(),
          (this.multiRegexes[e] = t),
          t
        )
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex
      }
      considerAll() {
        this.regexIndex = 0
      }
      addRule(e, t) {
        this.rules.push([e, t]), "begin" === t.type && this.count++
      }
      exec(e) {
        const t = this.getMatcher(this.regexIndex)
        t.lastIndex = this.lastIndex
        let n = t.exec(e)
        if (this.resumingScanAtSamePosition())
          if (n && n.index === this.lastIndex);
          else {
            const t = this.getMatcher(0)
            ;(t.lastIndex = this.lastIndex + 1), (n = t.exec(e))
          }
        return (
          n &&
            ((this.regexIndex += n.position + 1),
            this.regexIndex === this.count && this.considerAll()),
          n
        )
      }
    }
    if (
      (e.compilerExtensions || (e.compilerExtensions = []),
      e.contains && e.contains.includes("self"))
    )
      throw new Error(
        "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
      )
    return (
      (e.classNameAliases = Ee(e.classNameAliases || {})),
      (function t(r, i) {
        const o = r
        if (r.isCompiled) return o
        ;[Xe].forEach((e) => e(r, i)),
          e.compilerExtensions.forEach((e) => e(r, i)),
          (r.__beforeBegin = null),
          [Ze, Qe, Ye].forEach((e) => e(r, i)),
          (r.isCompiled = !0)
        let s = null
        if (
          ("object" == typeof r.keywords &&
            ((s = r.keywords.$pattern), delete r.keywords.$pattern),
          r.keywords &&
            (r.keywords = (function e(t, n, r = "keyword") {
              const a = {}
              return (
                "string" == typeof t
                  ? i(r, t.split(" "))
                  : Array.isArray(t)
                  ? i(r, t)
                  : Object.keys(t).forEach(function (r) {
                      Object.assign(a, e(t[r], n, r))
                    }),
                a
              )
              function i(e, t) {
                n && (t = t.map((e) => e.toLowerCase())),
                  t.forEach(function (t) {
                    const n = t.split("|")
                    a[n[0]] = [e, tt(n[0], n[1])]
                  })
              }
            })(r.keywords, e.case_insensitive)),
          r.lexemes && s)
        )
          throw new Error(
            "ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) "
          )
        return (
          (s = s || r.lexemes || /\w+/),
          (o.keywordPatternRe = n(s, !0)),
          i &&
            (r.begin || (r.begin = /\B|\b/),
            (o.beginRe = n(r.begin)),
            r.endSameAsBegin && (r.end = r.begin),
            r.end || r.endsWithParent || (r.end = /\B|\b/),
            r.end && (o.endRe = n(r.end)),
            (o.terminatorEnd = Le(r.end) || ""),
            r.endsWithParent &&
              i.terminatorEnd &&
              (o.terminatorEnd += (r.end ? "|" : "") + i.terminatorEnd)),
          r.illegal && (o.illegalRe = n(r.illegal)),
          r.contains || (r.contains = []),
          (r.contains = [].concat(
            ...r.contains.map(function (e) {
              return (function (e) {
                e.variants &&
                  !e.cachedVariants &&
                  (e.cachedVariants = e.variants.map(function (t) {
                    return Ee(e, { variants: null }, t)
                  }))
                if (e.cachedVariants) return e.cachedVariants
                if (
                  (function e(t) {
                    return !!t && (t.endsWithParent || e(t.starts))
                  })(e)
                )
                  return Ee(e, { starts: e.starts ? Ee(e.starts) : null })
                if (Object.isFrozen(e)) return Ee(e)
                return e
              })("self" === e ? r : e)
            })
          )),
          r.contains.forEach(function (e) {
            t(e, o)
          }),
          r.starts && t(r.starts, i),
          (o.matcher = (function (e) {
            const t = new a()
            return (
              e.contains.forEach((e) =>
                t.addRule(e.begin, { rule: e, type: "begin" })
              ),
              e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }),
              e.illegal && t.addRule(e.illegal, { type: "illegal" }),
              t
            )
          })(o)),
          o
        )
      })(e)
    )
  }
  function rt(e) {
    const t = {
      props: ["language", "code", "autodetect"],
      data: function () {
        return { detectedLanguage: "", unknownLanguage: !1 }
      },
      computed: {
        className() {
          return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
        },
        highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language))
            return (
              console.warn(
                `The language "${this.language}" you specified could not be found.`
              ),
              (this.unknownLanguage = !0),
              xe(this.code)
            )
          let t = {}
          return (
            this.autoDetect
              ? ((t = e.highlightAuto(this.code)),
                (this.detectedLanguage = t.language))
              : ((t = e.highlight(
                  this.language,
                  this.code,
                  this.ignoreIllegals
                )),
                (this.detectedLanguage = this.language)),
            t.value
          )
        },
        autoDetect() {
          return (
            !this.language || ((e = this.autodetect), Boolean(e || "" === e))
          )
          var e
        },
        ignoreIllegals: () => !0,
      },
      render(e) {
        return e("pre", {}, [
          e("code", {
            class: this.className,
            domProps: { innerHTML: this.highlighted },
          }),
        ])
      },
    }
    return {
      Component: t,
      VuePlugin: {
        install(e) {
          e.component("highlightjs", t)
        },
      },
    }
  }
  const at = {
    "after:highlightElement": ({ el: e, result: t, text: n }) => {
      const r = ot(e)
      if (!r.length) return
      const a = document.createElement("div")
      ;(a.innerHTML = t.value),
        (t.value = (function (e, t, n) {
          let r = 0,
            a = ""
          const i = []
          function o() {
            return e.length && t.length
              ? e[0].offset !== t[0].offset
                ? e[0].offset < t[0].offset
                  ? e
                  : t
                : "start" === t[0].event
                ? e
                : t
              : e.length
              ? e
              : t
          }
          function s(e) {
            a +=
              "<" +
              it(e) +
              [].map
                .call(e.attributes, function (e) {
                  return " " + e.nodeName + '="' + xe(e.value) + '"'
                })
                .join("") +
              ">"
          }
          function l(e) {
            a += "</" + it(e) + ">"
          }
          function c(e) {
            ;("start" === e.event ? s : l)(e.node)
          }
          for (; e.length || t.length; ) {
            let t = o()
            if (
              ((a += xe(n.substring(r, t[0].offset))),
              (r = t[0].offset),
              t === e)
            ) {
              i.reverse().forEach(l)
              do {
                c(t.splice(0, 1)[0]), (t = o())
              } while (t === e && t.length && t[0].offset === r)
              i.reverse().forEach(s)
            } else
              "start" === t[0].event ? i.push(t[0].node) : i.pop(),
                c(t.splice(0, 1)[0])
          }
          return a + xe(n.substr(r))
        })(r, ot(a), n))
    },
  }
  function it(e) {
    return e.nodeName.toLowerCase()
  }
  function ot(e) {
    const t = []
    return (
      (function e(n, r) {
        for (let a = n.firstChild; a; a = a.nextSibling)
          3 === a.nodeType
            ? (r += a.nodeValue.length)
            : 1 === a.nodeType &&
              (t.push({ event: "start", offset: r, node: a }),
              (r = e(a, r)),
              it(a).match(/br|hr|img|input/) ||
                t.push({ event: "stop", offset: r, node: a }))
        return r
      })(e, 0),
      t
    )
  }
  const st = {},
    lt = (e) => {
      console.error(e)
    },
    ct = (e, ...t) => {
      console.log("WARN: " + e, ...t)
    },
    ut = (e, t) => {
      st[`${e}/${t}`] ||
        (console.log(`Deprecated as of ${e}. ${t}`), (st[`${e}/${t}`] = !0))
    },
    dt = xe,
    pt = Ee,
    ht = Symbol("nomatch")
  var gt = (function (e) {
    const t = Object.create(null),
      n = Object.create(null),
      r = []
    let a = !0
    const i = /(^(<[^>]+>|\t|)+|\n)/gm,
      o =
        "Could not find the language '{}', did you forget to load/include a language module?",
      s = { disableAutodetect: !0, name: "Plain text", contains: [] }
    let l = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: Ce,
    }
    function c(e) {
      return l.noHighlightRe.test(e)
    }
    function u(e, t, n, r) {
      let a = "",
        i = ""
      "object" == typeof t
        ? ((a = e), (n = t.ignoreIllegals), (i = t.language), (r = void 0))
        : (ut("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
          ut(
            "10.7.0",
            "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
          ),
          (i = e),
          (a = t))
      const o = { code: a, language: i }
      x("before:highlight", o)
      const s = o.result ? o.result : d(o.language, o.code, n, r)
      return (s.code = o.code), x("after:highlight", s), s
    }
    function d(e, n, i, s) {
      function c(e, t) {
        const n = v.case_insensitive ? t[0].toLowerCase() : t[0]
        return (
          Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
        )
      }
      function u() {
        null != x.subLanguage
          ? (function () {
              if ("" === $) return
              let e = null
              if ("string" == typeof x.subLanguage) {
                if (!t[x.subLanguage]) return void S.addText($)
                ;(e = d(x.subLanguage, $, !0, E[x.subLanguage])),
                  (E[x.subLanguage] = e.top)
              } else e = p($, x.subLanguage.length ? x.subLanguage : null)
              x.relevance > 0 && (I += e.relevance),
                S.addSublanguage(e.emitter, e.language)
            })()
          : (function () {
              if (!x.keywords) return void S.addText($)
              let e = 0
              x.keywordPatternRe.lastIndex = 0
              let t = x.keywordPatternRe.exec($),
                n = ""
              for (; t; ) {
                n += $.substring(e, t.index)
                const r = c(x, t)
                if (r) {
                  const [e, a] = r
                  if ((S.addText(n), (n = ""), (I += a), e.startsWith("_")))
                    n += t[0]
                  else {
                    const n = v.classNameAliases[e] || e
                    S.addKeyword(t[0], n)
                  }
                } else n += t[0]
                ;(e = x.keywordPatternRe.lastIndex),
                  (t = x.keywordPatternRe.exec($))
              }
              ;(n += $.substr(e)), S.addText(n)
            })(),
          ($ = "")
      }
      function h(e) {
        return (
          e.className &&
            S.openNode(v.classNameAliases[e.className] || e.className),
          (x = Object.create(e, { parent: { value: x } })),
          x
        )
      }
      function g(e) {
        return 0 === x.matcher.regexIndex ? (($ += e[0]), 1) : ((T = !0), 0)
      }
      function f(e) {
        const t = e[0],
          n = e.rule,
          r = new ke(n),
          a = [n.__beforeBegin, n["on:begin"]]
        for (const n of a) if (n && (n(e, r), r.isMatchIgnored)) return g(t)
        return (
          n &&
            n.endSameAsBegin &&
            (n.endRe = new RegExp(
              t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
              "m"
            )),
          n.skip
            ? ($ += t)
            : (n.excludeBegin && ($ += t),
              u(),
              n.returnBegin || n.excludeBegin || ($ = t)),
          h(n),
          n.returnBegin ? 0 : t.length
        )
      }
      function m(e) {
        const t = e[0],
          r = n.substr(e.index),
          a = (function e(t, n, r) {
            let a = (function (e, t) {
              const n = e && e.exec(t)
              return n && 0 === n.index
            })(t.endRe, r)
            if (a) {
              if (t["on:end"]) {
                const e = new ke(t)
                t["on:end"](n, e), e.isMatchIgnored && (a = !1)
              }
              if (a) {
                for (; t.endsParent && t.parent; ) t = t.parent
                return t
              }
            }
            if (t.endsWithParent) return e(t.parent, n, r)
          })(x, e, r)
        if (!a) return ht
        const i = x
        i.skip
          ? ($ += t)
          : (i.returnEnd || i.excludeEnd || ($ += t),
            u(),
            i.excludeEnd && ($ = t))
        do {
          x.className && S.closeNode(),
            x.skip || x.subLanguage || (I += x.relevance),
            (x = x.parent)
        } while (x !== a.parent)
        return (
          a.starts &&
            (a.endSameAsBegin && (a.starts.endRe = a.endRe), h(a.starts)),
          i.returnEnd ? 0 : t.length
        )
      }
      let b = {}
      function _(t, r) {
        const o = r && r[0]
        if ((($ += t), null == o)) return u(), 0
        if (
          "begin" === b.type &&
          "end" === r.type &&
          b.index === r.index &&
          "" === o
        ) {
          if ((($ += n.slice(r.index, r.index + 1)), !a)) {
            const t = new Error("0 width match regex")
            throw ((t.languageName = e), (t.badRule = b.rule), t)
          }
          return 1
        }
        if (((b = r), "begin" === r.type)) return f(r)
        if ("illegal" === r.type && !i) {
          const e = new Error(
            'Illegal lexeme "' +
              o +
              '" for mode "' +
              (x.className || "<unnamed>") +
              '"'
          )
          throw ((e.mode = x), e)
        }
        if ("end" === r.type) {
          const e = m(r)
          if (e !== ht) return e
        }
        if ("illegal" === r.type && "" === o) return 1
        if (L > 1e5 && L > 3 * r.index) {
          throw new Error(
            "potential infinite loop, way more iterations than matches"
          )
        }
        return ($ += o), o.length
      }
      const v = w(e)
      if (!v)
        throw (
          (lt(o.replace("{}", e)), new Error('Unknown language: "' + e + '"'))
        )
      const y = nt(v, { plugins: r })
      let k = "",
        x = s || y
      const E = {},
        S = new l.__emitter(l)
      !(function () {
        const e = []
        for (let t = x; t !== v; t = t.parent)
          t.className && e.unshift(t.className)
        e.forEach((e) => S.openNode(e))
      })()
      let $ = "",
        I = 0,
        C = 0,
        L = 0,
        T = !1
      try {
        for (x.matcher.considerAll(); ; ) {
          L++, T ? (T = !1) : x.matcher.considerAll(), (x.matcher.lastIndex = C)
          const e = x.matcher.exec(n)
          if (!e) break
          const t = _(n.substring(C, e.index), e)
          C = e.index + t
        }
        return (
          _(n.substr(C)),
          S.closeAllNodes(),
          S.finalize(),
          (k = S.toHTML()),
          {
            relevance: Math.floor(I),
            value: k,
            language: e,
            illegal: !1,
            emitter: S,
            top: x,
          }
        )
      } catch (t) {
        if (t.message && t.message.includes("Illegal"))
          return {
            illegal: !0,
            illegalBy: {
              msg: t.message,
              context: n.slice(C - 100, C + 100),
              mode: t.mode,
            },
            sofar: k,
            relevance: 0,
            value: dt(n),
            emitter: S,
          }
        if (a)
          return {
            illegal: !1,
            relevance: 0,
            value: dt(n),
            emitter: S,
            language: e,
            top: x,
            errorRaised: t,
          }
        throw t
      }
    }
    function p(e, n) {
      n = n || l.languages || Object.keys(t)
      const r = (function (e) {
          const t = {
            relevance: 0,
            emitter: new l.__emitter(l),
            value: dt(e),
            illegal: !1,
            top: s,
          }
          return t.emitter.addText(e), t
        })(e),
        a = n
          .filter(w)
          .filter(k)
          .map((t) => d(t, e, !1))
      a.unshift(r)
      const i = a.sort((e, t) => {
          if (e.relevance !== t.relevance) return t.relevance - e.relevance
          if (e.language && t.language) {
            if (w(e.language).supersetOf === t.language) return 1
            if (w(t.language).supersetOf === e.language) return -1
          }
          return 0
        }),
        [o, c] = i,
        u = o
      return (u.second_best = c), u
    }
    const h = {
        "before:highlightElement": ({ el: e }) => {
          l.useBR &&
            (e.innerHTML = e.innerHTML
              .replace(/\n/g, "")
              .replace(/<br[ /]*>/g, "\n"))
        },
        "after:highlightElement": ({ result: e }) => {
          l.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
        },
      },
      g = /^(<[^>]+>|\t)+/gm,
      f = {
        "after:highlightElement": ({ result: e }) => {
          l.tabReplace &&
            (e.value = e.value.replace(g, (e) =>
              e.replace(/\t/g, l.tabReplace)
            ))
        },
      }
    function m(e) {
      let t = null
      const r = (function (e) {
        let t = e.className + " "
        t += e.parentNode ? e.parentNode.className : ""
        const n = l.languageDetectRe.exec(t)
        if (n) {
          const t = w(n[1])
          return (
            t ||
              (ct(o.replace("{}", n[1])),
              ct("Falling back to no-highlight mode for this block.", e)),
            t ? n[1] : "no-highlight"
          )
        }
        return t.split(/\s+/).find((e) => c(e) || w(e))
      })(e)
      if (c(r)) return
      x("before:highlightElement", { el: e, language: r }), (t = e)
      const a = t.textContent,
        i = r ? u(a, { language: r, ignoreIllegals: !0 }) : p(a)
      x("after:highlightElement", { el: e, result: i, text: a }),
        (e.innerHTML = i.value),
        (function (e, t, r) {
          const a = t ? n[t] : r
          e.classList.add("hljs"), a && e.classList.add(a)
        })(e, r, i.language),
        (e.result = {
          language: i.language,
          re: i.relevance,
          relavance: i.relevance,
        }),
        i.second_best &&
          (e.second_best = {
            language: i.second_best.language,
            re: i.second_best.relevance,
            relavance: i.second_best.relevance,
          })
    }
    const b = () => {
      if (b.called) return
      ;(b.called = !0),
        ut(
          "10.6.0",
          "initHighlighting() is deprecated.  Use highlightAll() instead."
        )
      document.querySelectorAll("pre code").forEach(m)
    }
    let _ = !1
    function v() {
      if ("loading" === document.readyState) return void (_ = !0)
      document.querySelectorAll("pre code").forEach(m)
    }
    function w(e) {
      return (e = (e || "").toLowerCase()), t[e] || t[n[e]]
    }
    function y(e, { languageName: t }) {
      "string" == typeof e && (e = [e]),
        e.forEach((e) => {
          n[e.toLowerCase()] = t
        })
    }
    function k(e) {
      const t = w(e)
      return t && !t.disableAutodetect
    }
    function x(e, t) {
      const n = e
      r.forEach(function (e) {
        e[n] && e[n](t)
      })
    }
    "undefined" != typeof window &&
      window.addEventListener &&
      window.addEventListener(
        "DOMContentLoaded",
        function () {
          _ && v()
        },
        !1
      ),
      Object.assign(e, {
        highlight: u,
        highlightAuto: p,
        highlightAll: v,
        fixMarkup: function (e) {
          return (
            ut("10.2.0", "fixMarkup will be removed entirely in v11.0"),
            ut(
              "10.2.0",
              "Please see https://github.com/highlightjs/highlight.js/issues/2534"
            ),
            (t = e),
            l.tabReplace || l.useBR
              ? t.replace(i, (e) =>
                  "\n" === e
                    ? l.useBR
                      ? "<br>"
                      : e
                    : l.tabReplace
                    ? e.replace(/\t/g, l.tabReplace)
                    : e
                )
              : t
          )
          var t
        },
        highlightElement: m,
        highlightBlock: function (e) {
          return (
            ut("10.7.0", "highlightBlock will be removed entirely in v12.0"),
            ut("10.7.0", "Please use highlightElement now."),
            m(e)
          )
        },
        configure: function (e) {
          e.useBR &&
            (ut("10.3.0", "'useBR' will be removed entirely in v11.0"),
            ut(
              "10.3.0",
              "Please see https://github.com/highlightjs/highlight.js/issues/2559"
            )),
            (l = pt(l, e))
        },
        initHighlighting: b,
        initHighlightingOnLoad: function () {
          ut(
            "10.6.0",
            "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."
          ),
            (_ = !0)
        },
        registerLanguage: function (n, r) {
          let i = null
          try {
            i = r(e)
          } catch (e) {
            if (
              (lt(
                "Language definition for '{}' could not be registered.".replace(
                  "{}",
                  n
                )
              ),
              !a)
            )
              throw e
            lt(e), (i = s)
          }
          i.name || (i.name = n),
            (t[n] = i),
            (i.rawDefinition = r.bind(null, e)),
            i.aliases && y(i.aliases, { languageName: n })
        },
        unregisterLanguage: function (e) {
          delete t[e]
          for (const t of Object.keys(n)) n[t] === e && delete n[t]
        },
        listLanguages: function () {
          return Object.keys(t)
        },
        getLanguage: w,
        registerAliases: y,
        requireLanguage: function (e) {
          ut("10.4.0", "requireLanguage will be removed entirely in v11."),
            ut(
              "10.4.0",
              "Please see https://github.com/highlightjs/highlight.js/pull/2844"
            )
          const t = w(e)
          if (t) return t
          throw new Error(
            "The '{}' language is required, but not loaded.".replace("{}", e)
          )
        },
        autoDetection: k,
        inherit: pt,
        addPlugin: function (e) {
          !(function (e) {
            e["before:highlightBlock"] &&
              !e["before:highlightElement"] &&
              (e["before:highlightElement"] = (t) => {
                e["before:highlightBlock"](Object.assign({ block: t.el }, t))
              }),
              e["after:highlightBlock"] &&
                !e["after:highlightElement"] &&
                (e["after:highlightElement"] = (t) => {
                  e["after:highlightBlock"](Object.assign({ block: t.el }, t))
                })
          })(e),
            r.push(e)
        },
        vuePlugin: rt(e).VuePlugin,
      }),
      (e.debugMode = function () {
        a = !1
      }),
      (e.safeMode = function () {
        a = !0
      }),
      (e.versionString = "10.7.2")
    for (const e in Ke) "object" == typeof Ke[e] && we(Ke[e])
    return (
      Object.assign(e, Ke), e.addPlugin(h), e.addPlugin(at), e.addPlugin(f), e
    )
  })({})
  const ft = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends",
    ],
    mt = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    bt = [].concat(
      [
        "setInterval",
        "setTimeout",
        "clearInterval",
        "clearTimeout",
        "require",
        "exports",
        "eval",
        "isFinite",
        "isNaN",
        "parseFloat",
        "parseInt",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "unescape",
      ],
      [
        "arguments",
        "this",
        "super",
        "console",
        "window",
        "document",
        "localStorage",
        "module",
        "global",
      ],
      [
        "Intl",
        "DataView",
        "Number",
        "Math",
        "Date",
        "String",
        "RegExp",
        "Object",
        "Function",
        "Boolean",
        "Error",
        "Symbol",
        "Set",
        "Map",
        "WeakSet",
        "WeakMap",
        "Proxy",
        "Reflect",
        "JSON",
        "Promise",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Float32Array",
        "Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "ArrayBuffer",
        "BigInt64Array",
        "BigUint64Array",
        "BigInt",
      ],
      [
        "EvalError",
        "InternalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError",
      ]
    )
  function _t(e) {
    return vt("(?=", e, ")")
  }
  function vt(...e) {
    return e
      .map((e) => {
        return (t = e) ? ("string" == typeof t ? t : t.source) : null
        var t
      })
      .join("")
  }
  var wt = function (e) {
    const t = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = "<>",
      r = "</>",
      a = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (e, t) => {
          const n = e[0].length + e.index,
            r = e.input[n]
          "<" !== r
            ? ">" === r &&
              (((e, { after: t }) => {
                const n = "</" + e[0].slice(1)
                return -1 !== e.input.indexOf(n, t)
              })(e, { after: n }) ||
                t.ignoreMatch())
            : t.ignoreMatch()
        },
      },
      i = {
        $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
        keyword: ft,
        literal: mt,
        built_in: bt,
      },
      o = "\\.([0-9](_?[0-9])*)",
      s = {
        className: "number",
        variants: [
          {
            begin: `(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((${o})|\\.)?|(${o}))[eE][+-]?([0-9](_?[0-9])*)\\b`,
          },
          {
            begin: `\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((${o})\\b|\\.)?|(${o})\\b`,
          },
          { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" },
        ],
        relevance: 0,
      },
      l = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: i,
        contains: [],
      },
      c = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, l],
          subLanguage: "xml",
        },
      },
      u = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, l],
          subLanguage: "css",
        },
      },
      d = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, l],
      },
      p = {
        className: "comment",
        variants: [
          e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+",
                contains: [
                  { className: "type", begin: "\\{", end: "\\}", relevance: 0 },
                  {
                    className: "variable",
                    begin: t + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
        ],
      },
      h = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, c, u, d, s, e.REGEXP_MODE]
    l.contains = h.concat({
      begin: /\{/,
      end: /\}/,
      keywords: i,
      contains: ["self"].concat(h),
    })
    const g = [].concat(p, l.contains),
      f = g.concat([
        { begin: /\(/, end: /\)/, keywords: i, contains: ["self"].concat(g) },
      ]),
      m = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: i,
        contains: f,
      }
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: i,
      exports: { PARAMS_CONTAINS: f },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
        {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/,
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        c,
        u,
        d,
        p,
        s,
        {
          begin: vt(
            /[{,\n]\s*/,
            _t(vt(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, t + "\\s*:"))
          ),
          relevance: 0,
          contains: [
            { className: "attr", begin: t + _t("\\s*:"), relevance: 0 },
          ],
        },
        {
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          contains: [
            p,
            e.REGEXP_MODE,
            {
              className: "function",
              begin:
                "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                e.UNDERSCORE_IDENT_RE +
                ")\\s*=>",
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: i,
                      contains: f,
                    },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { className: "", begin: /\s/, end: /\s*/, skip: !0 },
            {
              variants: [
                { begin: n, end: r },
                { begin: a.begin, "on:begin": a.isTrulyOpeningTag, end: a.end },
              ],
              subLanguage: "xml",
              contains: [
                { begin: a.begin, end: a.end, skip: !0, contains: ["self"] },
              ],
            },
          ],
          relevance: 0,
        },
        {
          className: "function",
          beginKeywords: "function",
          end: /[{;]/,
          excludeEnd: !0,
          keywords: i,
          contains: ["self", e.inherit(e.TITLE_MODE, { begin: t }), m],
          illegal: /%/,
        },
        { beginKeywords: "while if switch catch for" },
        {
          className: "function",
          begin:
            e.UNDERSCORE_IDENT_RE +
            "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          contains: [m, e.inherit(e.TITLE_MODE, { begin: t })],
        },
        {
          variants: [{ begin: "\\." + t }, { begin: "\\$" + t }],
          relevance: 0,
        },
        {
          className: "class",
          beginKeywords: "class",
          end: /[{;=]/,
          excludeEnd: !0,
          illegal: /[:"[\]]/,
          contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE],
        },
        {
          begin: /\b(?=constructor)/,
          end: /[{;]/,
          excludeEnd: !0,
          contains: [e.inherit(e.TITLE_MODE, { begin: t }), "self", m],
        },
        {
          begin: "(get|set)\\s+(?=" + t + "\\()",
          end: /\{/,
          keywords: "get set",
          contains: [
            e.inherit(e.TITLE_MODE, { begin: t }),
            { begin: /\(\)/ },
            m,
          ],
        },
        { begin: /\$[(.]/ },
      ],
    }
  }
  function yt(e) {
    return (function (...e) {
      return e
        .map((e) => {
          return (t = e) ? ("string" == typeof t ? t : t.source) : null
          var t
        })
        .join("")
    })("(?=", e, ")")
  }
  var kt = function (e) {
    const t = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: [
          "and",
          "as",
          "assert",
          "async",
          "await",
          "break",
          "class",
          "continue",
          "def",
          "del",
          "elif",
          "else",
          "except",
          "finally",
          "for",
          "from",
          "global",
          "if",
          "import",
          "in",
          "is",
          "lambda",
          "nonlocal|10",
          "not",
          "or",
          "pass",
          "raise",
          "return",
          "try",
          "while",
          "with",
          "yield",
        ],
        built_in: [
          "__import__",
          "abs",
          "all",
          "any",
          "ascii",
          "bin",
          "bool",
          "breakpoint",
          "bytearray",
          "bytes",
          "callable",
          "chr",
          "classmethod",
          "compile",
          "complex",
          "delattr",
          "dict",
          "dir",
          "divmod",
          "enumerate",
          "eval",
          "exec",
          "filter",
          "float",
          "format",
          "frozenset",
          "getattr",
          "globals",
          "hasattr",
          "hash",
          "help",
          "hex",
          "id",
          "input",
          "int",
          "isinstance",
          "issubclass",
          "iter",
          "len",
          "list",
          "locals",
          "map",
          "max",
          "memoryview",
          "min",
          "next",
          "object",
          "oct",
          "open",
          "ord",
          "pow",
          "print",
          "property",
          "range",
          "repr",
          "reversed",
          "round",
          "set",
          "setattr",
          "slice",
          "sorted",
          "staticmethod",
          "str",
          "sum",
          "super",
          "tuple",
          "type",
          "vars",
          "zip",
        ],
        literal: [
          "__debug__",
          "Ellipsis",
          "False",
          "None",
          "NotImplemented",
          "True",
        ],
        type: [
          "Any",
          "Callable",
          "Coroutine",
          "Dict",
          "List",
          "Literal",
          "Generic",
          "Optional",
          "Sequence",
          "Set",
          "Tuple",
          "Type",
          "Union",
        ],
      },
      n = { className: "meta", begin: /^(>>>|\.\.\.) / },
      r = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: t,
        illegal: /#/,
      },
      a = { begin: /\{\{/, relevance: 0 },
      i = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE, n],
            relevance: 10,
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [e.BACKSLASH_ESCAPE, n],
            relevance: 10,
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE, n, a, r],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
            end: /"""/,
            contains: [e.BACKSLASH_ESCAPE, n, a, r],
          },
          { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
          { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
          { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
          { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'/,
            end: /'/,
            contains: [e.BACKSLASH_ESCAPE, a, r],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, a, r],
          },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
        ],
      },
      o = "[0-9](_?[0-9])*",
      s = `(\\b(${o}))?\\.(${o})|\\b(${o})\\.`,
      l = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: `(\\b(${o})|(${s}))[eE][+-]?(${o})[jJ]?\\b` },
          { begin: `(${s})[jJ]?` },
          { begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b" },
          { begin: "\\b0[bB](_?[01])+[lL]?\\b" },
          { begin: "\\b0[oO](_?[0-7])+[lL]?\\b" },
          { begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b" },
          { begin: `\\b(${o})[jJ]\\b` },
        ],
      },
      c = {
        className: "comment",
        begin: yt(/# type:/),
        end: /$/,
        keywords: t,
        contains: [
          { begin: /# type:/ },
          { begin: /#/, end: /\b\B/, endsWithParent: !0 },
        ],
      },
      u = {
        className: "params",
        variants: [
          { className: "", begin: /\(\s*\)/, skip: !0 },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: t,
            contains: ["self", n, l, i, e.HASH_COMMENT_MODE],
          },
        ],
      }
    return (
      (r.contains = [i, l, n]),
      {
        name: "Python",
        aliases: ["py", "gyp", "ipython"],
        keywords: t,
        illegal: /(<\/|->|\?)|=>/,
        contains: [
          n,
          l,
          { begin: /\bself\b/ },
          { beginKeywords: "if", relevance: 0 },
          i,
          c,
          e.HASH_COMMENT_MODE,
          {
            variants: [
              { className: "function", beginKeywords: "def" },
              { className: "class", beginKeywords: "class" },
            ],
            end: /:/,
            illegal: /[${=;\n,]/,
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              u,
              { begin: /->/, endsWithParent: !0, keywords: t },
            ],
          },
          {
            className: "meta",
            begin: /^[\t ]*@/,
            end: /(?=#)|$/,
            contains: [l, u, i],
          },
        ],
      }
    )
  }
  function xt(...e) {
    return e
      .map((e) => {
        return (t = e) ? ("string" == typeof t ? t : t.source) : null
        var t
      })
      .join("")
  }
  var Et = function (e) {
    const t = {},
      n = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", { begin: /:-/, contains: [t] }],
      }
    Object.assign(t, {
      className: "variable",
      variants: [{ begin: xt(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") }, n],
    })
    const r = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [e.BACKSLASH_ESCAPE],
      },
      a = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string",
            }),
          ],
        },
      },
      i = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, t, r],
      }
    r.contains.push(i)
    const o = {
        begin: /\$\(\(/,
        end: /\)\)/,
        contains: [
          { begin: /\d+#[0-9a-f]+/, className: "number" },
          e.NUMBER_MODE,
          t,
        ],
      },
      s = e.SHEBANG({
        binary: `(${[
          "fish",
          "bash",
          "zsh",
          "sh",
          "csh",
          "ksh",
          "tcsh",
          "dash",
          "scsh",
        ].join("|")})`,
        relevance: 10,
      }),
      l = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0,
      }
    return {
      name: "Bash",
      aliases: ["sh", "zsh"],
      keywords: {
        $pattern: /\b[a-z._-]+\b/,
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in:
          "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      },
      contains: [
        s,
        e.SHEBANG(),
        l,
        o,
        e.HASH_COMMENT_MODE,
        a,
        i,
        { className: "", begin: /\\"/ },
        { className: "string", begin: /'/, end: /'/ },
        t,
      ],
    }
  }
  function St(...e) {
    return e
      .map((e) => {
        return (t = e) ? ("string" == typeof t ? t : t.source) : null
        var t
      })
      .join("")
  }
  var $t = function (e) {
    const t =
        "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
      n = {
        keyword:
          "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
        built_in: "proc lambda",
        literal: "true false nil",
      },
      r = { className: "doctag", begin: "@[A-Za-z]+" },
      a = { begin: "#<", end: ">" },
      i = [
        e.COMMENT("#", "$", { contains: [r] }),
        e.COMMENT("^=begin", "^=end", { contains: [r], relevance: 10 }),
        e.COMMENT("^__END__", "\\n$"),
      ],
      o = { className: "subst", begin: /#\{/, end: /\}/, keywords: n },
      s = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, o],
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /`/, end: /`/ },
          { begin: /%[qQwWx]?\(/, end: /\)/ },
          { begin: /%[qQwWx]?\[/, end: /\]/ },
          { begin: /%[qQwWx]?\{/, end: /\}/ },
          { begin: /%[qQwWx]?</, end: />/ },
          { begin: /%[qQwWx]?\//, end: /\// },
          { begin: /%[qQwWx]?%/, end: /%/ },
          { begin: /%[qQwWx]?-/, end: /-/ },
          { begin: /%[qQwWx]?\|/, end: /\|/ },
          { begin: /\B\?(\\\d{1,3})/ },
          { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
          { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
          { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
          { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
          { begin: /\B\?\\?\S/ },
          {
            begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
            returnBegin: !0,
            contains: [
              { begin: /<<[-~]?'?/ },
              e.END_SAME_AS_BEGIN({
                begin: /(\w+)/,
                end: /(\w+)/,
                contains: [e.BACKSLASH_ESCAPE, o],
              }),
            ],
          },
        ],
      },
      l = {
        className: "number",
        relevance: 0,
        variants: [
          {
            begin:
              "\\b([1-9](_?[0-9])*|0)(\\.([0-9](_?[0-9])*))?([eE][+-]?([0-9](_?[0-9])*)|r)?i?\\b",
          },
          { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
          { begin: "\\b0(_?[0-7])+r?i?\\b" },
        ],
      },
      c = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        endsParent: !0,
        keywords: n,
      },
      u = [
        s,
        {
          className: "class",
          beginKeywords: "class module",
          end: "$|;",
          illegal: /=/,
          contains: [
            e.inherit(e.TITLE_MODE, {
              begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",
            }),
            {
              begin: "<\\s*",
              contains: [
                { begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE, relevance: 0 },
              ],
            },
          ].concat(i),
        },
        {
          className: "function",
          begin: St(/def\s+/, ((d = t + "\\s*(\\(|;|$)"), St("(?=", d, ")"))),
          relevance: 0,
          keywords: "def",
          end: "$|;",
          contains: [e.inherit(e.TITLE_MODE, { begin: t }), c].concat(i),
        },
        { begin: e.IDENT_RE + "::" },
        {
          className: "symbol",
          begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
          relevance: 0,
        },
        {
          className: "symbol",
          begin: ":(?!\\s)",
          contains: [s, { begin: t }],
          relevance: 0,
        },
        l,
        {
          className: "variable",
          begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
        },
        {
          className: "params",
          begin: /\|/,
          end: /\|/,
          relevance: 0,
          keywords: n,
        },
        {
          begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
          keywords: "unless",
          contains: [
            {
              className: "regexp",
              contains: [e.BACKSLASH_ESCAPE, o],
              illegal: /\n/,
              variants: [
                { begin: "/", end: "/[a-z]*" },
                { begin: /%r\{/, end: /\}[a-z]*/ },
                { begin: "%r\\(", end: "\\)[a-z]*" },
                { begin: "%r!", end: "![a-z]*" },
                { begin: "%r\\[", end: "\\][a-z]*" },
              ],
            },
          ].concat(a, i),
          relevance: 0,
        },
      ].concat(a, i)
    var d
    ;(o.contains = u), (c.contains = u)
    const p = [
      { begin: /^\s*=>/, starts: { end: "$", contains: u } },
      {
        className: "meta",
        begin:
          "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
        starts: { end: "$", contains: u },
      },
    ]
    return (
      i.unshift(a),
      {
        name: "Ruby",
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        keywords: n,
        illegal: /\/\*/,
        contains: [e.SHEBANG({ binary: "ruby" })].concat(p).concat(i).concat(u),
      }
    )
  }
  var It = function (e) {
    const t = {
      keyword:
        "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
      literal: "true false iota nil",
      built_in:
        "append cap close complex copy imag len make new panic print println real recover delete",
    }
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: t,
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            { begin: "`", end: "`" },
          ],
        },
        {
          className: "number",
          variants: [
            { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
            e.C_NUMBER_MODE,
          ],
        },
        { begin: /:=/ },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            e.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: t,
              illegal: /["']/,
            },
          ],
        },
      ],
    }
  }
  var Ct = function (e) {
    const t = {
        className: "variable",
        begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*(?![A-Za-z0-9])(?![$])",
      },
      n = {
        className: "meta",
        variants: [
          { begin: /<\?php/, relevance: 10 },
          { begin: /<\?[=]?/ },
          { begin: /\?>/ },
        ],
      },
      r = {
        className: "subst",
        variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
      },
      a = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
      i = e.inherit(e.QUOTE_STRING_MODE, {
        illegal: null,
        contains: e.QUOTE_STRING_MODE.contains.concat(r),
      }),
      o = e.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: e.QUOTE_STRING_MODE.contains.concat(r),
      }),
      s = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, n],
        variants: [
          e.inherit(a, { begin: "b'", end: "'" }),
          e.inherit(i, { begin: 'b"', end: '"' }),
          i,
          a,
          o,
        ],
      },
      l = {
        className: "number",
        variants: [
          { begin: "\\b0b[01]+(?:_[01]+)*\\b" },
          { begin: "\\b0o[0-7]+(?:_[0-7]+)*\\b" },
          { begin: "\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b" },
          {
            begin:
              "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?",
          },
        ],
        relevance: 0,
      },
      c = {
        keyword:
          "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield",
        literal: "false null true",
        built_in:
          "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass",
      }
    return {
      aliases: ["php3", "php4", "php5", "php6", "php7", "php8"],
      case_insensitive: !0,
      keywords: c,
      contains: [
        e.HASH_COMMENT_MODE,
        e.COMMENT("//", "$", { contains: [n] }),
        e.COMMENT("/\\*", "\\*/", {
          contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
        }),
        e.COMMENT("__halt_compiler.+?;", !1, {
          endsWithParent: !0,
          keywords: "__halt_compiler",
        }),
        n,
        { className: "keyword", begin: /\$this\b/ },
        t,
        { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
        {
          className: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            e.UNDERSCORE_TITLE_MODE,
            { begin: "=>", endsParent: !0 },
            {
              className: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: c,
              contains: ["self", t, e.C_BLOCK_COMMENT_MODE, s, l],
            },
          ],
        },
        {
          className: "class",
          variants: [
            { beginKeywords: "enum", illegal: /[($"]/ },
            { beginKeywords: "class interface trait", illegal: /[:($"]/ },
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE,
          ],
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [e.UNDERSCORE_TITLE_MODE],
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [e.UNDERSCORE_TITLE_MODE],
        },
        s,
        l,
      ],
    }
  }
  gt.registerLanguage("javascript", wt),
    gt.registerLanguage("node", wt),
    gt.registerLanguage("python", kt),
    gt.registerLanguage("curl", Et),
    gt.registerLanguage("ruby", $t),
    gt.registerLanguage("go", It),
    gt.registerLanguage("php", Ct)
  var Lt =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {}
  function Tt(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports
  }
  var Mt,
    jt = Tt(function (e, t) {
      /*!
       * clipboard.js v2.0.4
       * https://zenorocha.github.io/clipboard.js
       *
       * Licensed MIT © Zeno Rocha
       */
      var n
      ;(n = function () {
        return (function (e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var a = (t[r] = { i: r, l: !1, exports: {} })
            return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r })
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 })
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e
              if (4 & t && "object" == typeof e && e && e.__esModule) return e
              var r = Object.create(null)
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var a in e)
                  n.d(
                    r,
                    a,
                    function (t) {
                      return e[t]
                    }.bind(null, a)
                  )
              return r
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default
                    }
                  : function () {
                      return e
                    }
              return n.d(t, "a", t), t
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (n.p = ""),
            n((n.s = 0))
          )
        })([
          function (e, t, n) {
            var r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e
                    },
              a = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                    ;(r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r)
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t
                }
              })(),
              i = l(n(1)),
              o = l(n(3)),
              s = l(n(4))
            function l(e) {
              return e && e.__esModule ? e : { default: e }
            }
            var c = (function (e) {
              function t(e, n) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
                })(this, t)
                var r = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                return r.resolveOptions(n), r.listenClick(e), r
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    )
                  ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t))
                })(t, e),
                a(
                  t,
                  [
                    {
                      key: "resolveOptions",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                        ;(this.action =
                          "function" == typeof e.action
                            ? e.action
                            : this.defaultAction),
                          (this.target =
                            "function" == typeof e.target
                              ? e.target
                              : this.defaultTarget),
                          (this.text =
                            "function" == typeof e.text
                              ? e.text
                              : this.defaultText),
                          (this.container =
                            "object" === r(e.container)
                              ? e.container
                              : document.body)
                      },
                    },
                    {
                      key: "listenClick",
                      value: function (e) {
                        var t = this
                        this.listener = (0, s.default)(
                          e,
                          "click",
                          function (e) {
                            return t.onClick(e)
                          }
                        )
                      },
                    },
                    {
                      key: "onClick",
                      value: function (e) {
                        var t = e.delegateTarget || e.currentTarget
                        this.clipboardAction && (this.clipboardAction = null),
                          (this.clipboardAction = new i.default({
                            action: this.action(t),
                            target: this.target(t),
                            text: this.text(t),
                            container: this.container,
                            trigger: t,
                            emitter: this,
                          }))
                      },
                    },
                    {
                      key: "defaultAction",
                      value: function (e) {
                        return u("action", e)
                      },
                    },
                    {
                      key: "defaultTarget",
                      value: function (e) {
                        var t = u("target", e)
                        if (t) return document.querySelector(t)
                      },
                    },
                    {
                      key: "defaultText",
                      value: function (e) {
                        return u("text", e)
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.listener.destroy(),
                          this.clipboardAction &&
                            (this.clipboardAction.destroy(),
                            (this.clipboardAction = null))
                      },
                    },
                  ],
                  [
                    {
                      key: "isSupported",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : ["copy", "cut"],
                          t = "string" == typeof e ? [e] : e,
                          n = !!document.queryCommandSupported
                        return (
                          t.forEach(function (e) {
                            n = n && !!document.queryCommandSupported(e)
                          }),
                          n
                        )
                      },
                    },
                  ]
                ),
                t
              )
            })(o.default)
            function u(e, t) {
              var n = "data-clipboard-" + e
              if (t.hasAttribute(n)) return t.getAttribute(n)
            }
            e.exports = c
          },
          function (e, t, n) {
            var r,
              a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e
                    },
              i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                    ;(r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r)
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t
                }
              })(),
              o = n(2),
              s = (r = o) && r.__esModule ? r : { default: r },
              l = (function () {
                function e(t) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
                  })(this, e),
                    this.resolveOptions(t),
                    this.initSelection()
                }
                return (
                  i(e, [
                    {
                      key: "resolveOptions",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                        ;(this.action = e.action),
                          (this.container = e.container),
                          (this.emitter = e.emitter),
                          (this.target = e.target),
                          (this.text = e.text),
                          (this.trigger = e.trigger),
                          (this.selectedText = "")
                      },
                    },
                    {
                      key: "initSelection",
                      value: function () {
                        this.text
                          ? this.selectFake()
                          : this.target && this.selectTarget()
                      },
                    },
                    {
                      key: "selectFake",
                      value: function () {
                        var e = this,
                          t =
                            "rtl" ==
                            document.documentElement.getAttribute("dir")
                        this.removeFake(),
                          (this.fakeHandlerCallback = function () {
                            return e.removeFake()
                          }),
                          (this.fakeHandler =
                            this.container.addEventListener(
                              "click",
                              this.fakeHandlerCallback
                            ) || !0),
                          (this.fakeElem = document.createElement("textarea")),
                          (this.fakeElem.style.fontSize = "12pt"),
                          (this.fakeElem.style.border = "0"),
                          (this.fakeElem.style.padding = "0"),
                          (this.fakeElem.style.margin = "0"),
                          (this.fakeElem.style.position = "absolute"),
                          (this.fakeElem.style[t ? "right" : "left"] =
                            "-9999px")
                        var n =
                          window.pageYOffset ||
                          document.documentElement.scrollTop
                        ;(this.fakeElem.style.top = n + "px"),
                          this.fakeElem.setAttribute("readonly", ""),
                          (this.fakeElem.value = this.text),
                          this.container.appendChild(this.fakeElem),
                          (this.selectedText = (0, s.default)(this.fakeElem)),
                          this.copyText()
                      },
                    },
                    {
                      key: "removeFake",
                      value: function () {
                        this.fakeHandler &&
                          (this.container.removeEventListener(
                            "click",
                            this.fakeHandlerCallback
                          ),
                          (this.fakeHandler = null),
                          (this.fakeHandlerCallback = null)),
                          this.fakeElem &&
                            (this.container.removeChild(this.fakeElem),
                            (this.fakeElem = null))
                      },
                    },
                    {
                      key: "selectTarget",
                      value: function () {
                        ;(this.selectedText = (0, s.default)(this.target)),
                          this.copyText()
                      },
                    },
                    {
                      key: "copyText",
                      value: function () {
                        var e = void 0
                        try {
                          e = document.execCommand(this.action)
                        } catch (t) {
                          e = !1
                        }
                        this.handleResult(e)
                      },
                    },
                    {
                      key: "handleResult",
                      value: function (e) {
                        this.emitter.emit(e ? "success" : "error", {
                          action: this.action,
                          text: this.selectedText,
                          trigger: this.trigger,
                          clearSelection: this.clearSelection.bind(this),
                        })
                      },
                    },
                    {
                      key: "clearSelection",
                      value: function () {
                        this.trigger && this.trigger.focus(),
                          window.getSelection().removeAllRanges()
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.removeFake()
                      },
                    },
                    {
                      key: "action",
                      set: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "copy"
                        if (
                          ((this._action = e),
                          "copy" !== this._action && "cut" !== this._action)
                        )
                          throw new Error(
                            'Invalid "action" value, use either "copy" or "cut"'
                          )
                      },
                      get: function () {
                        return this._action
                      },
                    },
                    {
                      key: "target",
                      set: function (e) {
                        if (void 0 !== e) {
                          if (
                            !e ||
                            "object" !== (void 0 === e ? "undefined" : a(e)) ||
                            1 !== e.nodeType
                          )
                            throw new Error(
                              'Invalid "target" value, use a valid Element'
                            )
                          if (
                            "copy" === this.action &&
                            e.hasAttribute("disabled")
                          )
                            throw new Error(
                              'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                            )
                          if (
                            "cut" === this.action &&
                            (e.hasAttribute("readonly") ||
                              e.hasAttribute("disabled"))
                          )
                            throw new Error(
                              'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                            )
                          this._target = e
                        }
                      },
                      get: function () {
                        return this._target
                      },
                    },
                  ]),
                  e
                )
              })()
            e.exports = l
          },
          function (e, t) {
            e.exports = function (e) {
              var t
              if ("SELECT" === e.nodeName) e.focus(), (t = e.value)
              else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly")
                n || e.setAttribute("readonly", ""),
                  e.select(),
                  e.setSelectionRange(0, e.value.length),
                  n || e.removeAttribute("readonly"),
                  (t = e.value)
              } else {
                e.hasAttribute("contenteditable") && e.focus()
                var r = window.getSelection(),
                  a = document.createRange()
                a.selectNodeContents(e),
                  r.removeAllRanges(),
                  r.addRange(a),
                  (t = r.toString())
              }
              return t
            }
          },
          function (e, t) {
            function n() {}
            ;(n.prototype = {
              on: function (e, t, n) {
                var r = this.e || (this.e = {})
                return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this
              },
              once: function (e, t, n) {
                var r = this
                function a() {
                  r.off(e, a), t.apply(n, arguments)
                }
                return (a._ = t), this.on(e, a, n)
              },
              emit: function (e) {
                for (
                  var t = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[e] || []).slice(),
                    r = 0,
                    a = n.length;
                  r < a;
                  r++
                )
                  n[r].fn.apply(n[r].ctx, t)
                return this
              },
              off: function (e, t) {
                var n = this.e || (this.e = {}),
                  r = n[e],
                  a = []
                if (r && t)
                  for (var i = 0, o = r.length; i < o; i++)
                    r[i].fn !== t && r[i].fn._ !== t && a.push(r[i])
                return a.length ? (n[e] = a) : delete n[e], this
              },
            }),
              (e.exports = n)
          },
          function (e, t, n) {
            var r = n(5),
              a = n(6)
            e.exports = function (e, t, n) {
              if (!e && !t && !n) throw new Error("Missing required arguments")
              if (!r.string(t))
                throw new TypeError("Second argument must be a String")
              if (!r.fn(n))
                throw new TypeError("Third argument must be a Function")
              if (r.node(e))
                return (function (e, t, n) {
                  return (
                    e.addEventListener(t, n),
                    {
                      destroy: function () {
                        e.removeEventListener(t, n)
                      },
                    }
                  )
                })(e, t, n)
              if (r.nodeList(e))
                return (function (e, t, n) {
                  return (
                    Array.prototype.forEach.call(e, function (e) {
                      e.addEventListener(t, n)
                    }),
                    {
                      destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                          e.removeEventListener(t, n)
                        })
                      },
                    }
                  )
                })(e, t, n)
              if (r.string(e))
                return (function (e, t, n) {
                  return a(document.body, e, t, n)
                })(e, t, n)
              throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
              )
            }
          },
          function (e, t) {
            ;(t.node = function (e) {
              return (
                void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
              )
            }),
              (t.nodeList = function (e) {
                var n = Object.prototype.toString.call(e)
                return (
                  void 0 !== e &&
                  ("[object NodeList]" === n ||
                    "[object HTMLCollection]" === n) &&
                  "length" in e &&
                  (0 === e.length || t.node(e[0]))
                )
              }),
              (t.string = function (e) {
                return "string" == typeof e || e instanceof String
              }),
              (t.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
              })
          },
          function (e, t, n) {
            var r = n(7)
            function a(e, t, n, r, a) {
              var o = i.apply(this, arguments)
              return (
                e.addEventListener(n, o, a),
                {
                  destroy: function () {
                    e.removeEventListener(n, o, a)
                  },
                }
              )
            }
            function i(e, t, n, a) {
              return function (n) {
                ;(n.delegateTarget = r(n.target, t)),
                  n.delegateTarget && a.call(e, n)
              }
            }
            e.exports = function (e, t, n, r, i) {
              return "function" == typeof e.addEventListener
                ? a.apply(null, arguments)
                : "function" == typeof n
                ? a.bind(null, document).apply(null, arguments)
                : ("string" == typeof e && (e = document.querySelectorAll(e)),
                  Array.prototype.map.call(e, function (e) {
                    return a(e, t, n, r, i)
                  }))
            }
          },
          function (e, t) {
            if ("undefined" != typeof Element && !Element.prototype.matches) {
              var n = Element.prototype
              n.matches =
                n.matchesSelector ||
                n.mozMatchesSelector ||
                n.msMatchesSelector ||
                n.oMatchesSelector ||
                n.webkitMatchesSelector
            }
            e.exports = function (e, t) {
              for (; e && 9 !== e.nodeType; ) {
                if ("function" == typeof e.matches && e.matches(t)) return e
                e = e.parentNode
              }
            }
          },
        ])
      }),
        (e.exports = n())
    }),
    Ot =
      (Mt = jt) &&
      Mt.__esModule &&
      Object.prototype.hasOwnProperty.call(Mt, "default")
        ? Mt.default
        : Mt,
    At = Tt(function (e) {
      ;(function () {
        function t(e) {
          var t = {
            omitExtraWLInCodeBlocks: {
              defaultValue: !1,
              describe: "Omit the default extra whiteline added to code blocks",
              type: "boolean",
            },
            noHeaderId: {
              defaultValue: !1,
              describe: "Turn on/off generated header id",
              type: "boolean",
            },
            prefixHeaderId: {
              defaultValue: !1,
              describe:
                "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
              type: "string",
            },
            rawPrefixHeaderId: {
              defaultValue: !1,
              describe:
                'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
              type: "boolean",
            },
            ghCompatibleHeaderId: {
              defaultValue: !1,
              describe:
                "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
              type: "boolean",
            },
            rawHeaderId: {
              defaultValue: !1,
              describe:
                "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
              type: "boolean",
            },
            headerLevelStart: {
              defaultValue: !1,
              describe: "The header blocks level start",
              type: "integer",
            },
            parseImgDimensions: {
              defaultValue: !1,
              describe: "Turn on/off image dimension parsing",
              type: "boolean",
            },
            simplifiedAutoLink: {
              defaultValue: !1,
              describe: "Turn on/off GFM autolink style",
              type: "boolean",
            },
            excludeTrailingPunctuationFromURLs: {
              defaultValue: !1,
              describe:
                "Excludes trailing punctuation from links generated with autoLinking",
              type: "boolean",
            },
            literalMidWordUnderscores: {
              defaultValue: !1,
              describe: "Parse midword underscores as literal underscores",
              type: "boolean",
            },
            literalMidWordAsterisks: {
              defaultValue: !1,
              describe: "Parse midword asterisks as literal asterisks",
              type: "boolean",
            },
            strikethrough: {
              defaultValue: !1,
              describe: "Turn on/off strikethrough support",
              type: "boolean",
            },
            tables: {
              defaultValue: !1,
              describe: "Turn on/off tables support",
              type: "boolean",
            },
            tablesHeaderId: {
              defaultValue: !1,
              describe: "Add an id to table headers",
              type: "boolean",
            },
            ghCodeBlocks: {
              defaultValue: !0,
              describe: "Turn on/off GFM fenced code blocks support",
              type: "boolean",
            },
            tasklists: {
              defaultValue: !1,
              describe: "Turn on/off GFM tasklist support",
              type: "boolean",
            },
            smoothLivePreview: {
              defaultValue: !1,
              describe:
                "Prevents weird effects in live previews due to incomplete input",
              type: "boolean",
            },
            smartIndentationFix: {
              defaultValue: !1,
              description: "Tries to smartly fix indentation in es6 strings",
              type: "boolean",
            },
            disableForced4SpacesIndentedSublists: {
              defaultValue: !1,
              description:
                "Disables the requirement of indenting nested sublists by 4 spaces",
              type: "boolean",
            },
            simpleLineBreaks: {
              defaultValue: !1,
              description: "Parses simple line breaks as <br> (GFM Style)",
              type: "boolean",
            },
            requireSpaceBeforeHeadingText: {
              defaultValue: !1,
              description:
                "Makes adding a space between `#` and the header text mandatory (GFM Style)",
              type: "boolean",
            },
            ghMentions: {
              defaultValue: !1,
              description: "Enables github @mentions",
              type: "boolean",
            },
            ghMentionsLink: {
              defaultValue: "https://github.com/{u}",
              description:
                "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
              type: "string",
            },
            encodeEmails: {
              defaultValue: !0,
              description:
                "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
              type: "boolean",
            },
            openLinksInNewWindow: {
              defaultValue: !1,
              description: "Open all links in new windows",
              type: "boolean",
            },
            backslashEscapesHTMLTags: {
              defaultValue: !1,
              description: "Support for HTML Tag escaping. ex: <div>foo</div>",
              type: "boolean",
            },
            emoji: {
              defaultValue: !1,
              description:
                "Enable emoji support. Ex: `this is a :smile: emoji`",
              type: "boolean",
            },
            underline: {
              defaultValue: !1,
              description:
                "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
              type: "boolean",
            },
            completeHTMLDocument: {
              defaultValue: !1,
              description:
                "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
              type: "boolean",
            },
            metadata: {
              defaultValue: !1,
              description:
                "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
              type: "boolean",
            },
            splitAdjacentBlockquotes: {
              defaultValue: !1,
              description: "Split adjacent blockquote blocks",
              type: "boolean",
            },
          }
          if (!1 === e) return JSON.parse(JSON.stringify(t))
          var n = {}
          for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r].defaultValue)
          return n
        }
        var n = {},
          r = {},
          a = {},
          i = t(!0),
          o = "vanilla",
          s = {
            github: {
              omitExtraWLInCodeBlocks: !0,
              simplifiedAutoLink: !0,
              excludeTrailingPunctuationFromURLs: !0,
              literalMidWordUnderscores: !0,
              strikethrough: !0,
              tables: !0,
              tablesHeaderId: !0,
              ghCodeBlocks: !0,
              tasklists: !0,
              disableForced4SpacesIndentedSublists: !0,
              simpleLineBreaks: !0,
              requireSpaceBeforeHeadingText: !0,
              ghCompatibleHeaderId: !0,
              ghMentions: !0,
              backslashEscapesHTMLTags: !0,
              emoji: !0,
              splitAdjacentBlockquotes: !0,
            },
            original: { noHeaderId: !0, ghCodeBlocks: !1 },
            ghost: {
              omitExtraWLInCodeBlocks: !0,
              parseImgDimensions: !0,
              simplifiedAutoLink: !0,
              excludeTrailingPunctuationFromURLs: !0,
              literalMidWordUnderscores: !0,
              strikethrough: !0,
              tables: !0,
              tablesHeaderId: !0,
              ghCodeBlocks: !0,
              tasklists: !0,
              smoothLivePreview: !0,
              simpleLineBreaks: !0,
              requireSpaceBeforeHeadingText: !0,
              ghMentions: !1,
              encodeEmails: !0,
            },
            vanilla: t(!0),
            allOn: (function () {
              var e = t(!0),
                n = {}
              for (var r in e) e.hasOwnProperty(r) && (n[r] = !0)
              return n
            })(),
          }
        function l(e, t) {
          var r = t
              ? "Error in " + t + " extension->"
              : "Error in unnamed extension",
            a = { valid: !0, error: "" }
          n.helper.isArray(e) || (e = [e])
          for (var i = 0; i < e.length; ++i) {
            var o = r + " sub-extension " + i + ": ",
              s = e[i]
            if ("object" != typeof s)
              return (
                (a.valid = !1),
                (a.error = o + "must be an object, but " + typeof s + " given"),
                a
              )
            if (!n.helper.isString(s.type))
              return (
                (a.valid = !1),
                (a.error =
                  o +
                  'property "type" must be a string, but ' +
                  typeof s.type +
                  " given"),
                a
              )
            var l = (s.type = s.type.toLowerCase())
            if (
              ("language" === l && (l = s.type = "lang"),
              "html" === l && (l = s.type = "output"),
              "lang" !== l && "output" !== l && "listener" !== l)
            )
              return (
                (a.valid = !1),
                (a.error =
                  o +
                  "type " +
                  l +
                  ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
                a
              )
            if ("listener" === l) {
              if (n.helper.isUndefined(s.listeners))
                return (
                  (a.valid = !1),
                  (a.error =
                    o +
                    '. Extensions of type "listener" must have a property called "listeners"'),
                  a
                )
            } else if (
              n.helper.isUndefined(s.filter) &&
              n.helper.isUndefined(s.regex)
            )
              return (
                (a.valid = !1),
                (a.error =
                  o +
                  l +
                  ' extensions must define either a "regex" property or a "filter" method'),
                a
              )
            if (s.listeners) {
              if ("object" != typeof s.listeners)
                return (
                  (a.valid = !1),
                  (a.error =
                    o +
                    '"listeners" property must be an object but ' +
                    typeof s.listeners +
                    " given"),
                  a
                )
              for (var c in s.listeners)
                if (
                  s.listeners.hasOwnProperty(c) &&
                  "function" != typeof s.listeners[c]
                )
                  return (
                    (a.valid = !1),
                    (a.error =
                      o +
                      '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                      c +
                      " must be a function but " +
                      typeof s.listeners[c] +
                      " given"),
                    a
                  )
            }
            if (s.filter) {
              if ("function" != typeof s.filter)
                return (
                  (a.valid = !1),
                  (a.error =
                    o +
                    '"filter" must be a function, but ' +
                    typeof s.filter +
                    " given"),
                  a
                )
            } else if (s.regex) {
              if (
                (n.helper.isString(s.regex) &&
                  (s.regex = new RegExp(s.regex, "g")),
                !(s.regex instanceof RegExp))
              )
                return (
                  (a.valid = !1),
                  (a.error =
                    o +
                    '"regex" property must either be a string or a RegExp object, but ' +
                    typeof s.regex +
                    " given"),
                  a
                )
              if (n.helper.isUndefined(s.replace))
                return (
                  (a.valid = !1),
                  (a.error =
                    o +
                    '"regex" extensions must implement a replace string or function'),
                  a
                )
            }
          }
          return a
        }
        function c(e, t) {
          return "¨E" + t.charCodeAt(0) + "E"
        }
        ;(n.helper = {}),
          (n.extensions = {}),
          (n.setOption = function (e, t) {
            return (i[e] = t), this
          }),
          (n.getOption = function (e) {
            return i[e]
          }),
          (n.getOptions = function () {
            return i
          }),
          (n.resetOptions = function () {
            i = t(!0)
          }),
          (n.setFlavor = function (e) {
            if (!s.hasOwnProperty(e)) throw Error(e + " flavor was not found")
            n.resetOptions()
            var t = s[e]
            for (var r in ((o = e), t)) t.hasOwnProperty(r) && (i[r] = t[r])
          }),
          (n.getFlavor = function () {
            return o
          }),
          (n.getFlavorOptions = function (e) {
            if (s.hasOwnProperty(e)) return s[e]
          }),
          (n.getDefaultOptions = function (e) {
            return t(e)
          }),
          (n.subParser = function (e, t) {
            if (n.helper.isString(e)) {
              if (void 0 === t) {
                if (r.hasOwnProperty(e)) return r[e]
                throw Error("SubParser named " + e + " not registered!")
              }
              r[e] = t
            }
          }),
          (n.extension = function (e, t) {
            if (!n.helper.isString(e))
              throw Error("Extension 'name' must be a string")
            if (((e = n.helper.stdExtName(e)), n.helper.isUndefined(t))) {
              if (!a.hasOwnProperty(e))
                throw Error("Extension named " + e + " is not registered!")
              return a[e]
            }
            "function" == typeof t && (t = t()),
              n.helper.isArray(t) || (t = [t])
            var r = l(t, e)
            if (!r.valid) throw Error(r.error)
            a[e] = t
          }),
          (n.getAllExtensions = function () {
            return a
          }),
          (n.removeExtension = function (e) {
            delete a[e]
          }),
          (n.resetExtensions = function () {
            a = {}
          }),
          (n.validateExtension = function (e) {
            var t = l(e, null)
            return !!t.valid || (console.warn(t.error), !1)
          }),
          n.hasOwnProperty("helper") || (n.helper = {}),
          (n.helper.isString = function (e) {
            return "string" == typeof e || e instanceof String
          }),
          (n.helper.isFunction = function (e) {
            return e && "[object Function]" === {}.toString.call(e)
          }),
          (n.helper.isArray = function (e) {
            return Array.isArray(e)
          }),
          (n.helper.isUndefined = function (e) {
            return void 0 === e
          }),
          (n.helper.forEach = function (e, t) {
            if (n.helper.isUndefined(e))
              throw new Error("obj param is required")
            if (n.helper.isUndefined(t))
              throw new Error("callback param is required")
            if (!n.helper.isFunction(t))
              throw new Error("callback param must be a function/closure")
            if ("function" == typeof e.forEach) e.forEach(t)
            else if (n.helper.isArray(e))
              for (var r = 0; r < e.length; r++) t(e[r], r, e)
            else {
              if ("object" != typeof e)
                throw new Error(
                  "obj does not seem to be an array or an iterable object"
                )
              for (var a in e) e.hasOwnProperty(a) && t(e[a], a, e)
            }
          }),
          (n.helper.stdExtName = function (e) {
            return e
              .replace(/[_?*+\/\\.^-]/g, "")
              .replace(/\s/g, "")
              .toLowerCase()
          }),
          (n.helper.escapeCharactersCallback = c),
          (n.helper.escapeCharacters = function (e, t, n) {
            var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])"
            n && (r = "\\\\" + r)
            var a = new RegExp(r, "g")
            return (e = e.replace(a, c))
          }),
          (n.helper.unescapeHTMLEntities = function (e) {
            return e
              .replace(/&quot;/g, '"')
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&amp;/g, "&")
          })
        var u = function (e, t, n, r) {
          var a,
            i,
            o,
            s,
            l,
            c = r || "",
            u = c.indexOf("g") > -1,
            d = new RegExp(t + "|" + n, "g" + c.replace(/g/g, "")),
            p = new RegExp(t, c.replace(/g/g, "")),
            h = []
          do {
            for (a = 0; (o = d.exec(e)); )
              if (p.test(o[0])) a++ || (s = (i = d.lastIndex) - o[0].length)
              else if (a && !--a) {
                l = o.index + o[0].length
                var g = {
                  left: { start: s, end: i },
                  match: { start: i, end: o.index },
                  right: { start: o.index, end: l },
                  wholeMatch: { start: s, end: l },
                }
                if ((h.push(g), !u)) return h
              }
          } while (a && (d.lastIndex = i))
          return h
        }
        ;(n.helper.matchRecursiveRegExp = function (e, t, n, r) {
          for (var a = u(e, t, n, r), i = [], o = 0; o < a.length; ++o)
            i.push([
              e.slice(a[o].wholeMatch.start, a[o].wholeMatch.end),
              e.slice(a[o].match.start, a[o].match.end),
              e.slice(a[o].left.start, a[o].left.end),
              e.slice(a[o].right.start, a[o].right.end),
            ])
          return i
        }),
          (n.helper.replaceRecursiveRegExp = function (e, t, r, a, i) {
            if (!n.helper.isFunction(t)) {
              var o = t
              t = function () {
                return o
              }
            }
            var s = u(e, r, a, i),
              l = e,
              c = s.length
            if (c > 0) {
              var d = []
              0 !== s[0].wholeMatch.start &&
                d.push(e.slice(0, s[0].wholeMatch.start))
              for (var p = 0; p < c; ++p)
                d.push(
                  t(
                    e.slice(s[p].wholeMatch.start, s[p].wholeMatch.end),
                    e.slice(s[p].match.start, s[p].match.end),
                    e.slice(s[p].left.start, s[p].left.end),
                    e.slice(s[p].right.start, s[p].right.end)
                  )
                ),
                  p < c - 1 &&
                    d.push(
                      e.slice(s[p].wholeMatch.end, s[p + 1].wholeMatch.start)
                    )
              s[c - 1].wholeMatch.end < e.length &&
                d.push(e.slice(s[c - 1].wholeMatch.end)),
                (l = d.join(""))
            }
            return l
          }),
          (n.helper.regexIndexOf = function (e, t, r) {
            if (!n.helper.isString(e))
              throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"
            if (t instanceof RegExp == !1)
              throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp"
            var a = e.substring(r || 0).search(t)
            return a >= 0 ? a + (r || 0) : a
          }),
          (n.helper.splitAtIndex = function (e, t) {
            if (!n.helper.isString(e))
              throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"
            return [e.substring(0, t), e.substring(t)]
          }),
          (n.helper.encodeEmailAddress = function (e) {
            var t = [
              function (e) {
                return "&#" + e.charCodeAt(0) + ";"
              },
              function (e) {
                return "&#x" + e.charCodeAt(0).toString(16) + ";"
              },
              function (e) {
                return e
              },
            ]
            return (e = e.replace(/./g, function (e) {
              if ("@" === e) e = t[Math.floor(2 * Math.random())](e)
              else {
                var n = Math.random()
                e = n > 0.9 ? t[2](e) : n > 0.45 ? t[1](e) : t[0](e)
              }
              return e
            }))
          }),
          (n.helper.padEnd = function (e, t, n) {
            return (
              (t >>= 0),
              (n = String(n || " ")),
              e.length > t
                ? String(e)
                : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)),
                  String(e) + n.slice(0, t))
            )
          }),
          "undefined" == typeof console &&
            (console = {
              warn: function (e) {
                alert(e)
              },
              log: function (e) {
                alert(e)
              },
              error: function (e) {
                throw e
              },
            }),
          (n.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
          (n.helper.emojis = {
            "+1": "👍",
            "-1": "👎",
            100: "💯",
            1234: "🔢",
            "1st_place_medal": "🥇",
            "2nd_place_medal": "🥈",
            "3rd_place_medal": "🥉",
            "8ball": "🎱",
            a: "🅰️",
            ab: "🆎",
            abc: "🔤",
            abcd: "🔡",
            accept: "🉑",
            aerial_tramway: "🚡",
            airplane: "✈️",
            alarm_clock: "⏰",
            alembic: "⚗️",
            alien: "👽",
            ambulance: "🚑",
            amphora: "🏺",
            anchor: "⚓️",
            angel: "👼",
            anger: "💢",
            angry: "😠",
            anguished: "😧",
            ant: "🐜",
            apple: "🍎",
            aquarius: "♒️",
            aries: "♈️",
            arrow_backward: "◀️",
            arrow_double_down: "⏬",
            arrow_double_up: "⏫",
            arrow_down: "⬇️",
            arrow_down_small: "🔽",
            arrow_forward: "▶️",
            arrow_heading_down: "⤵️",
            arrow_heading_up: "⤴️",
            arrow_left: "⬅️",
            arrow_lower_left: "↙️",
            arrow_lower_right: "↘️",
            arrow_right: "➡️",
            arrow_right_hook: "↪️",
            arrow_up: "⬆️",
            arrow_up_down: "↕️",
            arrow_up_small: "🔼",
            arrow_upper_left: "↖️",
            arrow_upper_right: "↗️",
            arrows_clockwise: "🔃",
            arrows_counterclockwise: "🔄",
            art: "🎨",
            articulated_lorry: "🚛",
            artificial_satellite: "🛰",
            astonished: "😲",
            athletic_shoe: "👟",
            atm: "🏧",
            atom_symbol: "⚛️",
            avocado: "🥑",
            b: "🅱️",
            baby: "👶",
            baby_bottle: "🍼",
            baby_chick: "🐤",
            baby_symbol: "🚼",
            back: "🔙",
            bacon: "🥓",
            badminton: "🏸",
            baggage_claim: "🛄",
            baguette_bread: "🥖",
            balance_scale: "⚖️",
            balloon: "🎈",
            ballot_box: "🗳",
            ballot_box_with_check: "☑️",
            bamboo: "🎍",
            banana: "🍌",
            bangbang: "‼️",
            bank: "🏦",
            bar_chart: "📊",
            barber: "💈",
            baseball: "⚾️",
            basketball: "🏀",
            basketball_man: "⛹️",
            basketball_woman: "⛹️&zwj;♀️",
            bat: "🦇",
            bath: "🛀",
            bathtub: "🛁",
            battery: "🔋",
            beach_umbrella: "🏖",
            bear: "🐻",
            bed: "🛏",
            bee: "🐝",
            beer: "🍺",
            beers: "🍻",
            beetle: "🐞",
            beginner: "🔰",
            bell: "🔔",
            bellhop_bell: "🛎",
            bento: "🍱",
            biking_man: "🚴",
            bike: "🚲",
            biking_woman: "🚴&zwj;♀️",
            bikini: "👙",
            biohazard: "☣️",
            bird: "🐦",
            birthday: "🎂",
            black_circle: "⚫️",
            black_flag: "🏴",
            black_heart: "🖤",
            black_joker: "🃏",
            black_large_square: "⬛️",
            black_medium_small_square: "◾️",
            black_medium_square: "◼️",
            black_nib: "✒️",
            black_small_square: "▪️",
            black_square_button: "🔲",
            blonde_man: "👱",
            blonde_woman: "👱&zwj;♀️",
            blossom: "🌼",
            blowfish: "🐡",
            blue_book: "📘",
            blue_car: "🚙",
            blue_heart: "💙",
            blush: "😊",
            boar: "🐗",
            boat: "⛵️",
            bomb: "💣",
            book: "📖",
            bookmark: "🔖",
            bookmark_tabs: "📑",
            books: "📚",
            boom: "💥",
            boot: "👢",
            bouquet: "💐",
            bowing_man: "🙇",
            bow_and_arrow: "🏹",
            bowing_woman: "🙇&zwj;♀️",
            bowling: "🎳",
            boxing_glove: "🥊",
            boy: "👦",
            bread: "🍞",
            bride_with_veil: "👰",
            bridge_at_night: "🌉",
            briefcase: "💼",
            broken_heart: "💔",
            bug: "🐛",
            building_construction: "🏗",
            bulb: "💡",
            bullettrain_front: "🚅",
            bullettrain_side: "🚄",
            burrito: "🌯",
            bus: "🚌",
            business_suit_levitating: "🕴",
            busstop: "🚏",
            bust_in_silhouette: "👤",
            busts_in_silhouette: "👥",
            butterfly: "🦋",
            cactus: "🌵",
            cake: "🍰",
            calendar: "📆",
            call_me_hand: "🤙",
            calling: "📲",
            camel: "🐫",
            camera: "📷",
            camera_flash: "📸",
            camping: "🏕",
            cancer: "♋️",
            candle: "🕯",
            candy: "🍬",
            canoe: "🛶",
            capital_abcd: "🔠",
            capricorn: "♑️",
            car: "🚗",
            card_file_box: "🗃",
            card_index: "📇",
            card_index_dividers: "🗂",
            carousel_horse: "🎠",
            carrot: "🥕",
            cat: "🐱",
            cat2: "🐈",
            cd: "💿",
            chains: "⛓",
            champagne: "🍾",
            chart: "💹",
            chart_with_downwards_trend: "📉",
            chart_with_upwards_trend: "📈",
            checkered_flag: "🏁",
            cheese: "🧀",
            cherries: "🍒",
            cherry_blossom: "🌸",
            chestnut: "🌰",
            chicken: "🐔",
            children_crossing: "🚸",
            chipmunk: "🐿",
            chocolate_bar: "🍫",
            christmas_tree: "🎄",
            church: "⛪️",
            cinema: "🎦",
            circus_tent: "🎪",
            city_sunrise: "🌇",
            city_sunset: "🌆",
            cityscape: "🏙",
            cl: "🆑",
            clamp: "🗜",
            clap: "👏",
            clapper: "🎬",
            classical_building: "🏛",
            clinking_glasses: "🥂",
            clipboard: "📋",
            clock1: "🕐",
            clock10: "🕙",
            clock1030: "🕥",
            clock11: "🕚",
            clock1130: "🕦",
            clock12: "🕛",
            clock1230: "🕧",
            clock130: "🕜",
            clock2: "🕑",
            clock230: "🕝",
            clock3: "🕒",
            clock330: "🕞",
            clock4: "🕓",
            clock430: "🕟",
            clock5: "🕔",
            clock530: "🕠",
            clock6: "🕕",
            clock630: "🕡",
            clock7: "🕖",
            clock730: "🕢",
            clock8: "🕗",
            clock830: "🕣",
            clock9: "🕘",
            clock930: "🕤",
            closed_book: "📕",
            closed_lock_with_key: "🔐",
            closed_umbrella: "🌂",
            cloud: "☁️",
            cloud_with_lightning: "🌩",
            cloud_with_lightning_and_rain: "⛈",
            cloud_with_rain: "🌧",
            cloud_with_snow: "🌨",
            clown_face: "🤡",
            clubs: "♣️",
            cocktail: "🍸",
            coffee: "☕️",
            coffin: "⚰️",
            cold_sweat: "😰",
            comet: "☄️",
            computer: "💻",
            computer_mouse: "🖱",
            confetti_ball: "🎊",
            confounded: "😖",
            confused: "😕",
            congratulations: "㊗️",
            construction: "🚧",
            construction_worker_man: "👷",
            construction_worker_woman: "👷&zwj;♀️",
            control_knobs: "🎛",
            convenience_store: "🏪",
            cookie: "🍪",
            cool: "🆒",
            policeman: "👮",
            copyright: "©️",
            corn: "🌽",
            couch_and_lamp: "🛋",
            couple: "👫",
            couple_with_heart_woman_man: "💑",
            couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
            couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
            couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
            couplekiss_man_woman: "💏",
            couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
            cow: "🐮",
            cow2: "🐄",
            cowboy_hat_face: "🤠",
            crab: "🦀",
            crayon: "🖍",
            credit_card: "💳",
            crescent_moon: "🌙",
            cricket: "🏏",
            crocodile: "🐊",
            croissant: "🥐",
            crossed_fingers: "🤞",
            crossed_flags: "🎌",
            crossed_swords: "⚔️",
            crown: "👑",
            cry: "😢",
            crying_cat_face: "😿",
            crystal_ball: "🔮",
            cucumber: "🥒",
            cupid: "💘",
            curly_loop: "➰",
            currency_exchange: "💱",
            curry: "🍛",
            custard: "🍮",
            customs: "🛃",
            cyclone: "🌀",
            dagger: "🗡",
            dancer: "💃",
            dancing_women: "👯",
            dancing_men: "👯&zwj;♂️",
            dango: "🍡",
            dark_sunglasses: "🕶",
            dart: "🎯",
            dash: "💨",
            date: "📅",
            deciduous_tree: "🌳",
            deer: "🦌",
            department_store: "🏬",
            derelict_house: "🏚",
            desert: "🏜",
            desert_island: "🏝",
            desktop_computer: "🖥",
            male_detective: "🕵️",
            diamond_shape_with_a_dot_inside: "💠",
            diamonds: "♦️",
            disappointed: "😞",
            disappointed_relieved: "😥",
            dizzy: "💫",
            dizzy_face: "😵",
            do_not_litter: "🚯",
            dog: "🐶",
            dog2: "🐕",
            dollar: "💵",
            dolls: "🎎",
            dolphin: "🐬",
            door: "🚪",
            doughnut: "🍩",
            dove: "🕊",
            dragon: "🐉",
            dragon_face: "🐲",
            dress: "👗",
            dromedary_camel: "🐪",
            drooling_face: "🤤",
            droplet: "💧",
            drum: "🥁",
            duck: "🦆",
            dvd: "📀",
            "e-mail": "📧",
            eagle: "🦅",
            ear: "👂",
            ear_of_rice: "🌾",
            earth_africa: "🌍",
            earth_americas: "🌎",
            earth_asia: "🌏",
            egg: "🥚",
            eggplant: "🍆",
            eight_pointed_black_star: "✴️",
            eight_spoked_asterisk: "✳️",
            electric_plug: "🔌",
            elephant: "🐘",
            email: "✉️",
            end: "🔚",
            envelope_with_arrow: "📩",
            euro: "💶",
            european_castle: "🏰",
            european_post_office: "🏤",
            evergreen_tree: "🌲",
            exclamation: "❗️",
            expressionless: "😑",
            eye: "👁",
            eye_speech_bubble: "👁&zwj;🗨",
            eyeglasses: "👓",
            eyes: "👀",
            face_with_head_bandage: "🤕",
            face_with_thermometer: "🤒",
            fist_oncoming: "👊",
            factory: "🏭",
            fallen_leaf: "🍂",
            family_man_woman_boy: "👪",
            family_man_boy: "👨&zwj;👦",
            family_man_boy_boy: "👨&zwj;👦&zwj;👦",
            family_man_girl: "👨&zwj;👧",
            family_man_girl_boy: "👨&zwj;👧&zwj;👦",
            family_man_girl_girl: "👨&zwj;👧&zwj;👧",
            family_man_man_boy: "👨&zwj;👨&zwj;👦",
            family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
            family_man_man_girl: "👨&zwj;👨&zwj;👧",
            family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
            family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
            family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
            family_man_woman_girl: "👨&zwj;👩&zwj;👧",
            family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
            family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
            family_woman_boy: "👩&zwj;👦",
            family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
            family_woman_girl: "👩&zwj;👧",
            family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
            family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
            family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
            family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
            family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
            family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
            family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
            fast_forward: "⏩",
            fax: "📠",
            fearful: "😨",
            feet: "🐾",
            female_detective: "🕵️&zwj;♀️",
            ferris_wheel: "🎡",
            ferry: "⛴",
            field_hockey: "🏑",
            file_cabinet: "🗄",
            file_folder: "📁",
            film_projector: "📽",
            film_strip: "🎞",
            fire: "🔥",
            fire_engine: "🚒",
            fireworks: "🎆",
            first_quarter_moon: "🌓",
            first_quarter_moon_with_face: "🌛",
            fish: "🐟",
            fish_cake: "🍥",
            fishing_pole_and_fish: "🎣",
            fist_raised: "✊",
            fist_left: "🤛",
            fist_right: "🤜",
            flags: "🎏",
            flashlight: "🔦",
            fleur_de_lis: "⚜️",
            flight_arrival: "🛬",
            flight_departure: "🛫",
            floppy_disk: "💾",
            flower_playing_cards: "🎴",
            flushed: "😳",
            fog: "🌫",
            foggy: "🌁",
            football: "🏈",
            footprints: "👣",
            fork_and_knife: "🍴",
            fountain: "⛲️",
            fountain_pen: "🖋",
            four_leaf_clover: "🍀",
            fox_face: "🦊",
            framed_picture: "🖼",
            free: "🆓",
            fried_egg: "🍳",
            fried_shrimp: "🍤",
            fries: "🍟",
            frog: "🐸",
            frowning: "😦",
            frowning_face: "☹️",
            frowning_man: "🙍&zwj;♂️",
            frowning_woman: "🙍",
            middle_finger: "🖕",
            fuelpump: "⛽️",
            full_moon: "🌕",
            full_moon_with_face: "🌝",
            funeral_urn: "⚱️",
            game_die: "🎲",
            gear: "⚙️",
            gem: "💎",
            gemini: "♊️",
            ghost: "👻",
            gift: "🎁",
            gift_heart: "💝",
            girl: "👧",
            globe_with_meridians: "🌐",
            goal_net: "🥅",
            goat: "🐐",
            golf: "⛳️",
            golfing_man: "🏌️",
            golfing_woman: "🏌️&zwj;♀️",
            gorilla: "🦍",
            grapes: "🍇",
            green_apple: "🍏",
            green_book: "📗",
            green_heart: "💚",
            green_salad: "🥗",
            grey_exclamation: "❕",
            grey_question: "❔",
            grimacing: "😬",
            grin: "😁",
            grinning: "😀",
            guardsman: "💂",
            guardswoman: "💂&zwj;♀️",
            guitar: "🎸",
            gun: "🔫",
            haircut_woman: "💇",
            haircut_man: "💇&zwj;♂️",
            hamburger: "🍔",
            hammer: "🔨",
            hammer_and_pick: "⚒",
            hammer_and_wrench: "🛠",
            hamster: "🐹",
            hand: "✋",
            handbag: "👜",
            handshake: "🤝",
            hankey: "💩",
            hatched_chick: "🐥",
            hatching_chick: "🐣",
            headphones: "🎧",
            hear_no_evil: "🙉",
            heart: "❤️",
            heart_decoration: "💟",
            heart_eyes: "😍",
            heart_eyes_cat: "😻",
            heartbeat: "💓",
            heartpulse: "💗",
            hearts: "♥️",
            heavy_check_mark: "✔️",
            heavy_division_sign: "➗",
            heavy_dollar_sign: "💲",
            heavy_heart_exclamation: "❣️",
            heavy_minus_sign: "➖",
            heavy_multiplication_x: "✖️",
            heavy_plus_sign: "➕",
            helicopter: "🚁",
            herb: "🌿",
            hibiscus: "🌺",
            high_brightness: "🔆",
            high_heel: "👠",
            hocho: "🔪",
            hole: "🕳",
            honey_pot: "🍯",
            horse: "🐴",
            horse_racing: "🏇",
            hospital: "🏥",
            hot_pepper: "🌶",
            hotdog: "🌭",
            hotel: "🏨",
            hotsprings: "♨️",
            hourglass: "⌛️",
            hourglass_flowing_sand: "⏳",
            house: "🏠",
            house_with_garden: "🏡",
            houses: "🏘",
            hugs: "🤗",
            hushed: "😯",
            ice_cream: "🍨",
            ice_hockey: "🏒",
            ice_skate: "⛸",
            icecream: "🍦",
            id: "🆔",
            ideograph_advantage: "🉐",
            imp: "👿",
            inbox_tray: "📥",
            incoming_envelope: "📨",
            tipping_hand_woman: "💁",
            information_source: "ℹ️",
            innocent: "😇",
            interrobang: "⁉️",
            iphone: "📱",
            izakaya_lantern: "🏮",
            jack_o_lantern: "🎃",
            japan: "🗾",
            japanese_castle: "🏯",
            japanese_goblin: "👺",
            japanese_ogre: "👹",
            jeans: "👖",
            joy: "😂",
            joy_cat: "😹",
            joystick: "🕹",
            kaaba: "🕋",
            key: "🔑",
            keyboard: "⌨️",
            keycap_ten: "🔟",
            kick_scooter: "🛴",
            kimono: "👘",
            kiss: "💋",
            kissing: "😗",
            kissing_cat: "😽",
            kissing_closed_eyes: "😚",
            kissing_heart: "😘",
            kissing_smiling_eyes: "😙",
            kiwi_fruit: "🥝",
            koala: "🐨",
            koko: "🈁",
            label: "🏷",
            large_blue_circle: "🔵",
            large_blue_diamond: "🔷",
            large_orange_diamond: "🔶",
            last_quarter_moon: "🌗",
            last_quarter_moon_with_face: "🌜",
            latin_cross: "✝️",
            laughing: "😆",
            leaves: "🍃",
            ledger: "📒",
            left_luggage: "🛅",
            left_right_arrow: "↔️",
            leftwards_arrow_with_hook: "↩️",
            lemon: "🍋",
            leo: "♌️",
            leopard: "🐆",
            level_slider: "🎚",
            libra: "♎️",
            light_rail: "🚈",
            link: "🔗",
            lion: "🦁",
            lips: "👄",
            lipstick: "💄",
            lizard: "🦎",
            lock: "🔒",
            lock_with_ink_pen: "🔏",
            lollipop: "🍭",
            loop: "➿",
            loud_sound: "🔊",
            loudspeaker: "📢",
            love_hotel: "🏩",
            love_letter: "💌",
            low_brightness: "🔅",
            lying_face: "🤥",
            m: "Ⓜ️",
            mag: "🔍",
            mag_right: "🔎",
            mahjong: "🀄️",
            mailbox: "📫",
            mailbox_closed: "📪",
            mailbox_with_mail: "📬",
            mailbox_with_no_mail: "📭",
            man: "👨",
            man_artist: "👨&zwj;🎨",
            man_astronaut: "👨&zwj;🚀",
            man_cartwheeling: "🤸&zwj;♂️",
            man_cook: "👨&zwj;🍳",
            man_dancing: "🕺",
            man_facepalming: "🤦&zwj;♂️",
            man_factory_worker: "👨&zwj;🏭",
            man_farmer: "👨&zwj;🌾",
            man_firefighter: "👨&zwj;🚒",
            man_health_worker: "👨&zwj;⚕️",
            man_in_tuxedo: "🤵",
            man_judge: "👨&zwj;⚖️",
            man_juggling: "🤹&zwj;♂️",
            man_mechanic: "👨&zwj;🔧",
            man_office_worker: "👨&zwj;💼",
            man_pilot: "👨&zwj;✈️",
            man_playing_handball: "🤾&zwj;♂️",
            man_playing_water_polo: "🤽&zwj;♂️",
            man_scientist: "👨&zwj;🔬",
            man_shrugging: "🤷&zwj;♂️",
            man_singer: "👨&zwj;🎤",
            man_student: "👨&zwj;🎓",
            man_teacher: "👨&zwj;🏫",
            man_technologist: "👨&zwj;💻",
            man_with_gua_pi_mao: "👲",
            man_with_turban: "👳",
            tangerine: "🍊",
            mans_shoe: "👞",
            mantelpiece_clock: "🕰",
            maple_leaf: "🍁",
            martial_arts_uniform: "🥋",
            mask: "😷",
            massage_woman: "💆",
            massage_man: "💆&zwj;♂️",
            meat_on_bone: "🍖",
            medal_military: "🎖",
            medal_sports: "🏅",
            mega: "📣",
            melon: "🍈",
            memo: "📝",
            men_wrestling: "🤼&zwj;♂️",
            menorah: "🕎",
            mens: "🚹",
            metal: "🤘",
            metro: "🚇",
            microphone: "🎤",
            microscope: "🔬",
            milk_glass: "🥛",
            milky_way: "🌌",
            minibus: "🚐",
            minidisc: "💽",
            mobile_phone_off: "📴",
            money_mouth_face: "🤑",
            money_with_wings: "💸",
            moneybag: "💰",
            monkey: "🐒",
            monkey_face: "🐵",
            monorail: "🚝",
            moon: "🌔",
            mortar_board: "🎓",
            mosque: "🕌",
            motor_boat: "🛥",
            motor_scooter: "🛵",
            motorcycle: "🏍",
            motorway: "🛣",
            mount_fuji: "🗻",
            mountain: "⛰",
            mountain_biking_man: "🚵",
            mountain_biking_woman: "🚵&zwj;♀️",
            mountain_cableway: "🚠",
            mountain_railway: "🚞",
            mountain_snow: "🏔",
            mouse: "🐭",
            mouse2: "🐁",
            movie_camera: "🎥",
            moyai: "🗿",
            mrs_claus: "🤶",
            muscle: "💪",
            mushroom: "🍄",
            musical_keyboard: "🎹",
            musical_note: "🎵",
            musical_score: "🎼",
            mute: "🔇",
            nail_care: "💅",
            name_badge: "📛",
            national_park: "🏞",
            nauseated_face: "🤢",
            necktie: "👔",
            negative_squared_cross_mark: "❎",
            nerd_face: "🤓",
            neutral_face: "😐",
            new: "🆕",
            new_moon: "🌑",
            new_moon_with_face: "🌚",
            newspaper: "📰",
            newspaper_roll: "🗞",
            next_track_button: "⏭",
            ng: "🆖",
            no_good_man: "🙅&zwj;♂️",
            no_good_woman: "🙅",
            night_with_stars: "🌃",
            no_bell: "🔕",
            no_bicycles: "🚳",
            no_entry: "⛔️",
            no_entry_sign: "🚫",
            no_mobile_phones: "📵",
            no_mouth: "😶",
            no_pedestrians: "🚷",
            no_smoking: "🚭",
            "non-potable_water": "🚱",
            nose: "👃",
            notebook: "📓",
            notebook_with_decorative_cover: "📔",
            notes: "🎶",
            nut_and_bolt: "🔩",
            o: "⭕️",
            o2: "🅾️",
            ocean: "🌊",
            octopus: "🐙",
            oden: "🍢",
            office: "🏢",
            oil_drum: "🛢",
            ok: "🆗",
            ok_hand: "👌",
            ok_man: "🙆&zwj;♂️",
            ok_woman: "🙆",
            old_key: "🗝",
            older_man: "👴",
            older_woman: "👵",
            om: "🕉",
            on: "🔛",
            oncoming_automobile: "🚘",
            oncoming_bus: "🚍",
            oncoming_police_car: "🚔",
            oncoming_taxi: "🚖",
            open_file_folder: "📂",
            open_hands: "👐",
            open_mouth: "😮",
            open_umbrella: "☂️",
            ophiuchus: "⛎",
            orange_book: "📙",
            orthodox_cross: "☦️",
            outbox_tray: "📤",
            owl: "🦉",
            ox: "🐂",
            package: "📦",
            page_facing_up: "📄",
            page_with_curl: "📃",
            pager: "📟",
            paintbrush: "🖌",
            palm_tree: "🌴",
            pancakes: "🥞",
            panda_face: "🐼",
            paperclip: "📎",
            paperclips: "🖇",
            parasol_on_ground: "⛱",
            parking: "🅿️",
            part_alternation_mark: "〽️",
            partly_sunny: "⛅️",
            passenger_ship: "🛳",
            passport_control: "🛂",
            pause_button: "⏸",
            peace_symbol: "☮️",
            peach: "🍑",
            peanuts: "🥜",
            pear: "🍐",
            pen: "🖊",
            pencil2: "✏️",
            penguin: "🐧",
            pensive: "😔",
            performing_arts: "🎭",
            persevere: "😣",
            person_fencing: "🤺",
            pouting_woman: "🙎",
            phone: "☎️",
            pick: "⛏",
            pig: "🐷",
            pig2: "🐖",
            pig_nose: "🐽",
            pill: "💊",
            pineapple: "🍍",
            ping_pong: "🏓",
            pisces: "♓️",
            pizza: "🍕",
            place_of_worship: "🛐",
            plate_with_cutlery: "🍽",
            play_or_pause_button: "⏯",
            point_down: "👇",
            point_left: "👈",
            point_right: "👉",
            point_up: "☝️",
            point_up_2: "👆",
            police_car: "🚓",
            policewoman: "👮&zwj;♀️",
            poodle: "🐩",
            popcorn: "🍿",
            post_office: "🏣",
            postal_horn: "📯",
            postbox: "📮",
            potable_water: "🚰",
            potato: "🥔",
            pouch: "👝",
            poultry_leg: "🍗",
            pound: "💷",
            rage: "😡",
            pouting_cat: "😾",
            pouting_man: "🙎&zwj;♂️",
            pray: "🙏",
            prayer_beads: "📿",
            pregnant_woman: "🤰",
            previous_track_button: "⏮",
            prince: "🤴",
            princess: "👸",
            printer: "🖨",
            purple_heart: "💜",
            purse: "👛",
            pushpin: "📌",
            put_litter_in_its_place: "🚮",
            question: "❓",
            rabbit: "🐰",
            rabbit2: "🐇",
            racehorse: "🐎",
            racing_car: "🏎",
            radio: "📻",
            radio_button: "🔘",
            radioactive: "☢️",
            railway_car: "🚃",
            railway_track: "🛤",
            rainbow: "🌈",
            rainbow_flag: "🏳️&zwj;🌈",
            raised_back_of_hand: "🤚",
            raised_hand_with_fingers_splayed: "🖐",
            raised_hands: "🙌",
            raising_hand_woman: "🙋",
            raising_hand_man: "🙋&zwj;♂️",
            ram: "🐏",
            ramen: "🍜",
            rat: "🐀",
            record_button: "⏺",
            recycle: "♻️",
            red_circle: "🔴",
            registered: "®️",
            relaxed: "☺️",
            relieved: "😌",
            reminder_ribbon: "🎗",
            repeat: "🔁",
            repeat_one: "🔂",
            rescue_worker_helmet: "⛑",
            restroom: "🚻",
            revolving_hearts: "💞",
            rewind: "⏪",
            rhinoceros: "🦏",
            ribbon: "🎀",
            rice: "🍚",
            rice_ball: "🍙",
            rice_cracker: "🍘",
            rice_scene: "🎑",
            right_anger_bubble: "🗯",
            ring: "💍",
            robot: "🤖",
            rocket: "🚀",
            rofl: "🤣",
            roll_eyes: "🙄",
            roller_coaster: "🎢",
            rooster: "🐓",
            rose: "🌹",
            rosette: "🏵",
            rotating_light: "🚨",
            round_pushpin: "📍",
            rowing_man: "🚣",
            rowing_woman: "🚣&zwj;♀️",
            rugby_football: "🏉",
            running_man: "🏃",
            running_shirt_with_sash: "🎽",
            running_woman: "🏃&zwj;♀️",
            sa: "🈂️",
            sagittarius: "♐️",
            sake: "🍶",
            sandal: "👡",
            santa: "🎅",
            satellite: "📡",
            saxophone: "🎷",
            school: "🏫",
            school_satchel: "🎒",
            scissors: "✂️",
            scorpion: "🦂",
            scorpius: "♏️",
            scream: "😱",
            scream_cat: "🙀",
            scroll: "📜",
            seat: "💺",
            secret: "㊙️",
            see_no_evil: "🙈",
            seedling: "🌱",
            selfie: "🤳",
            shallow_pan_of_food: "🥘",
            shamrock: "☘️",
            shark: "🦈",
            shaved_ice: "🍧",
            sheep: "🐑",
            shell: "🐚",
            shield: "🛡",
            shinto_shrine: "⛩",
            ship: "🚢",
            shirt: "👕",
            shopping: "🛍",
            shopping_cart: "🛒",
            shower: "🚿",
            shrimp: "🦐",
            signal_strength: "📶",
            six_pointed_star: "🔯",
            ski: "🎿",
            skier: "⛷",
            skull: "💀",
            skull_and_crossbones: "☠️",
            sleeping: "😴",
            sleeping_bed: "🛌",
            sleepy: "😪",
            slightly_frowning_face: "🙁",
            slightly_smiling_face: "🙂",
            slot_machine: "🎰",
            small_airplane: "🛩",
            small_blue_diamond: "🔹",
            small_orange_diamond: "🔸",
            small_red_triangle: "🔺",
            small_red_triangle_down: "🔻",
            smile: "😄",
            smile_cat: "😸",
            smiley: "😃",
            smiley_cat: "😺",
            smiling_imp: "😈",
            smirk: "😏",
            smirk_cat: "😼",
            smoking: "🚬",
            snail: "🐌",
            snake: "🐍",
            sneezing_face: "🤧",
            snowboarder: "🏂",
            snowflake: "❄️",
            snowman: "⛄️",
            snowman_with_snow: "☃️",
            sob: "😭",
            soccer: "⚽️",
            soon: "🔜",
            sos: "🆘",
            sound: "🔉",
            space_invader: "👾",
            spades: "♠️",
            spaghetti: "🍝",
            sparkle: "❇️",
            sparkler: "🎇",
            sparkles: "✨",
            sparkling_heart: "💖",
            speak_no_evil: "🙊",
            speaker: "🔈",
            speaking_head: "🗣",
            speech_balloon: "💬",
            speedboat: "🚤",
            spider: "🕷",
            spider_web: "🕸",
            spiral_calendar: "🗓",
            spiral_notepad: "🗒",
            spoon: "🥄",
            squid: "🦑",
            stadium: "🏟",
            star: "⭐️",
            star2: "🌟",
            star_and_crescent: "☪️",
            star_of_david: "✡️",
            stars: "🌠",
            station: "🚉",
            statue_of_liberty: "🗽",
            steam_locomotive: "🚂",
            stew: "🍲",
            stop_button: "⏹",
            stop_sign: "🛑",
            stopwatch: "⏱",
            straight_ruler: "📏",
            strawberry: "🍓",
            stuck_out_tongue: "😛",
            stuck_out_tongue_closed_eyes: "😝",
            stuck_out_tongue_winking_eye: "😜",
            studio_microphone: "🎙",
            stuffed_flatbread: "🥙",
            sun_behind_large_cloud: "🌥",
            sun_behind_rain_cloud: "🌦",
            sun_behind_small_cloud: "🌤",
            sun_with_face: "🌞",
            sunflower: "🌻",
            sunglasses: "😎",
            sunny: "☀️",
            sunrise: "🌅",
            sunrise_over_mountains: "🌄",
            surfing_man: "🏄",
            surfing_woman: "🏄&zwj;♀️",
            sushi: "🍣",
            suspension_railway: "🚟",
            sweat: "😓",
            sweat_drops: "💦",
            sweat_smile: "😅",
            sweet_potato: "🍠",
            swimming_man: "🏊",
            swimming_woman: "🏊&zwj;♀️",
            symbols: "🔣",
            synagogue: "🕍",
            syringe: "💉",
            taco: "🌮",
            tada: "🎉",
            tanabata_tree: "🎋",
            taurus: "♉️",
            taxi: "🚕",
            tea: "🍵",
            telephone_receiver: "📞",
            telescope: "🔭",
            tennis: "🎾",
            tent: "⛺️",
            thermometer: "🌡",
            thinking: "🤔",
            thought_balloon: "💭",
            ticket: "🎫",
            tickets: "🎟",
            tiger: "🐯",
            tiger2: "🐅",
            timer_clock: "⏲",
            tipping_hand_man: "💁&zwj;♂️",
            tired_face: "😫",
            tm: "™️",
            toilet: "🚽",
            tokyo_tower: "🗼",
            tomato: "🍅",
            tongue: "👅",
            top: "🔝",
            tophat: "🎩",
            tornado: "🌪",
            trackball: "🖲",
            tractor: "🚜",
            traffic_light: "🚥",
            train: "🚋",
            train2: "🚆",
            tram: "🚊",
            triangular_flag_on_post: "🚩",
            triangular_ruler: "📐",
            trident: "🔱",
            triumph: "😤",
            trolleybus: "🚎",
            trophy: "🏆",
            tropical_drink: "🍹",
            tropical_fish: "🐠",
            truck: "🚚",
            trumpet: "🎺",
            tulip: "🌷",
            tumbler_glass: "🥃",
            turkey: "🦃",
            turtle: "🐢",
            tv: "📺",
            twisted_rightwards_arrows: "🔀",
            two_hearts: "💕",
            two_men_holding_hands: "👬",
            two_women_holding_hands: "👭",
            u5272: "🈹",
            u5408: "🈴",
            u55b6: "🈺",
            u6307: "🈯️",
            u6708: "🈷️",
            u6709: "🈶",
            u6e80: "🈵",
            u7121: "🈚️",
            u7533: "🈸",
            u7981: "🈲",
            u7a7a: "🈳",
            umbrella: "☔️",
            unamused: "😒",
            underage: "🔞",
            unicorn: "🦄",
            unlock: "🔓",
            up: "🆙",
            upside_down_face: "🙃",
            v: "✌️",
            vertical_traffic_light: "🚦",
            vhs: "📼",
            vibration_mode: "📳",
            video_camera: "📹",
            video_game: "🎮",
            violin: "🎻",
            virgo: "♍️",
            volcano: "🌋",
            volleyball: "🏐",
            vs: "🆚",
            vulcan_salute: "🖖",
            walking_man: "🚶",
            walking_woman: "🚶&zwj;♀️",
            waning_crescent_moon: "🌘",
            waning_gibbous_moon: "🌖",
            warning: "⚠️",
            wastebasket: "🗑",
            watch: "⌚️",
            water_buffalo: "🐃",
            watermelon: "🍉",
            wave: "👋",
            wavy_dash: "〰️",
            waxing_crescent_moon: "🌒",
            wc: "🚾",
            weary: "😩",
            wedding: "💒",
            weight_lifting_man: "🏋️",
            weight_lifting_woman: "🏋️&zwj;♀️",
            whale: "🐳",
            whale2: "🐋",
            wheel_of_dharma: "☸️",
            wheelchair: "♿️",
            white_check_mark: "✅",
            white_circle: "⚪️",
            white_flag: "🏳️",
            white_flower: "💮",
            white_large_square: "⬜️",
            white_medium_small_square: "◽️",
            white_medium_square: "◻️",
            white_small_square: "▫️",
            white_square_button: "🔳",
            wilted_flower: "🥀",
            wind_chime: "🎐",
            wind_face: "🌬",
            wine_glass: "🍷",
            wink: "😉",
            wolf: "🐺",
            woman: "👩",
            woman_artist: "👩&zwj;🎨",
            woman_astronaut: "👩&zwj;🚀",
            woman_cartwheeling: "🤸&zwj;♀️",
            woman_cook: "👩&zwj;🍳",
            woman_facepalming: "🤦&zwj;♀️",
            woman_factory_worker: "👩&zwj;🏭",
            woman_farmer: "👩&zwj;🌾",
            woman_firefighter: "👩&zwj;🚒",
            woman_health_worker: "👩&zwj;⚕️",
            woman_judge: "👩&zwj;⚖️",
            woman_juggling: "🤹&zwj;♀️",
            woman_mechanic: "👩&zwj;🔧",
            woman_office_worker: "👩&zwj;💼",
            woman_pilot: "👩&zwj;✈️",
            woman_playing_handball: "🤾&zwj;♀️",
            woman_playing_water_polo: "🤽&zwj;♀️",
            woman_scientist: "👩&zwj;🔬",
            woman_shrugging: "🤷&zwj;♀️",
            woman_singer: "👩&zwj;🎤",
            woman_student: "👩&zwj;🎓",
            woman_teacher: "👩&zwj;🏫",
            woman_technologist: "👩&zwj;💻",
            woman_with_turban: "👳&zwj;♀️",
            womans_clothes: "👚",
            womans_hat: "👒",
            women_wrestling: "🤼&zwj;♀️",
            womens: "🚺",
            world_map: "🗺",
            worried: "😟",
            wrench: "🔧",
            writing_hand: "✍️",
            x: "❌",
            yellow_heart: "💛",
            yen: "💴",
            yin_yang: "☯️",
            yum: "😋",
            zap: "⚡️",
            zipper_mouth_face: "🤐",
            zzz: "💤",
            octocat:
              '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
            showdown:
              "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>",
          }),
          (n.Converter = function (e) {
            var t = {},
              r = [],
              c = [],
              u = {},
              d = o,
              p = { parsed: {}, raw: "", format: "" }
            function h(e, t) {
              if (((t = t || null), n.helper.isString(e))) {
                if (((t = e = n.helper.stdExtName(e)), n.extensions[e]))
                  return (
                    console.warn(
                      "DEPRECATION WARNING: " +
                        e +
                        " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"
                    ),
                    void (function (e, t) {
                      "function" == typeof e && (e = e(new n.Converter()))
                      n.helper.isArray(e) || (e = [e])
                      var a = l(e, t)
                      if (!a.valid) throw Error(a.error)
                      for (var i = 0; i < e.length; ++i)
                        switch (e[i].type) {
                          case "lang":
                            r.push(e[i])
                            break
                          case "output":
                            c.push(e[i])
                            break
                          default:
                            throw Error(
                              "Extension loader error: Type unrecognized!!!"
                            )
                        }
                    })(n.extensions[e], e)
                  )
                if (n.helper.isUndefined(a[e]))
                  throw Error(
                    'Extension "' +
                      e +
                      '" could not be loaded. It was either not found or is not a valid extension.'
                  )
                e = a[e]
              }
              "function" == typeof e && (e = e()),
                n.helper.isArray(e) || (e = [e])
              var i = l(e, t)
              if (!i.valid) throw Error(i.error)
              for (var o = 0; o < e.length; ++o) {
                switch (e[o].type) {
                  case "lang":
                    r.push(e[o])
                    break
                  case "output":
                    c.push(e[o])
                }
                if (e[o].hasOwnProperty("listeners"))
                  for (var s in e[o].listeners)
                    e[o].listeners.hasOwnProperty(s) && g(s, e[o].listeners[s])
              }
            }
            function g(e, t) {
              if (!n.helper.isString(e))
                throw Error(
                  "Invalid argument in converter.listen() method: name must be a string, but " +
                    typeof e +
                    " given"
                )
              if ("function" != typeof t)
                throw Error(
                  "Invalid argument in converter.listen() method: callback must be a function, but " +
                    typeof t +
                    " given"
                )
              u.hasOwnProperty(e) || (u[e] = []), u[e].push(t)
            }
            !(function () {
              for (var r in ((e = e || {}), i))
                i.hasOwnProperty(r) && (t[r] = i[r])
              if ("object" != typeof e)
                throw Error(
                  "Converter expects the passed parameter to be an object, but " +
                    typeof e +
                    " was passed instead."
                )
              for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a])
              t.extensions && n.helper.forEach(t.extensions, h)
            })(),
              (this._dispatch = function (e, t, n, r) {
                if (u.hasOwnProperty(e))
                  for (var a = 0; a < u[e].length; ++a) {
                    var i = u[e][a](e, t, this, n, r)
                    i && void 0 !== i && (t = i)
                  }
                return t
              }),
              (this.listen = function (e, t) {
                return g(e, t), this
              }),
              (this.makeHtml = function (e) {
                if (!e) return e
                var a = {
                  gHtmlBlocks: [],
                  gHtmlMdBlocks: [],
                  gHtmlSpans: [],
                  gUrls: {},
                  gTitles: {},
                  gDimensions: {},
                  gListLevel: 0,
                  hashLinkCounts: {},
                  langExtensions: r,
                  outputModifiers: c,
                  converter: this,
                  ghCodeBlocks: [],
                  metadata: { parsed: {}, raw: "", format: "" },
                }
                return (
                  (e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(
                    /\$/g,
                    "¨D"
                  )).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(
                    /\u00A0/g,
                    "&nbsp;"
                  )),
                  t.smartIndentationFix &&
                    (e = (function (e) {
                      var t = e.match(/^\s*/)[0].length,
                        n = new RegExp("^\\s{0," + t + "}", "gm")
                      return e.replace(n, "")
                    })(e)),
                  (e = "\n\n" + e + "\n\n"),
                  (e = (e = n.subParser("detab")(e, t, a)).replace(
                    /^[ \t]+$/gm,
                    ""
                  )),
                  n.helper.forEach(r, function (r) {
                    e = n.subParser("runExtension")(r, e, t, a)
                  }),
                  (e = n.subParser("metadata")(e, t, a)),
                  (e = n.subParser("hashPreCodeTags")(e, t, a)),
                  (e = n.subParser("githubCodeBlocks")(e, t, a)),
                  (e = n.subParser("hashHTMLBlocks")(e, t, a)),
                  (e = n.subParser("hashCodeTags")(e, t, a)),
                  (e = n.subParser("stripLinkDefinitions")(e, t, a)),
                  (e = n.subParser("blockGamut")(e, t, a)),
                  (e = n.subParser("unhashHTMLSpans")(e, t, a)),
                  (e = (e = (e = n.subParser("unescapeSpecialChars")(
                    e,
                    t,
                    a
                  )).replace(/¨D/g, "$$")).replace(/¨T/g, "¨")),
                  (e = n.subParser("completeHTMLDocument")(e, t, a)),
                  n.helper.forEach(c, function (r) {
                    e = n.subParser("runExtension")(r, e, t, a)
                  }),
                  (p = a.metadata),
                  e
                )
              }),
              (this.makeMarkdown = this.makeMd =
                function (e, t) {
                  if (
                    ((e = (e = (e = e.replace(/\r\n/g, "\n")).replace(
                      /\r/g,
                      "\n"
                    )).replace(/>[ \t]+</, ">¨NBSP;<")),
                    !t)
                  ) {
                    if (!window || !window.document)
                      throw new Error(
                        "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM"
                      )
                    t = window.document
                  }
                  var r = t.createElement("div")
                  r.innerHTML = e
                  var a = {
                    preList: (function (e) {
                      for (
                        var t = e.querySelectorAll("pre"), r = [], a = 0;
                        a < t.length;
                        ++a
                      )
                        if (
                          1 === t[a].childElementCount &&
                          "code" === t[a].firstChild.tagName.toLowerCase()
                        ) {
                          var i = t[a].firstChild.innerHTML.trim(),
                            o =
                              t[a].firstChild.getAttribute("data-language") ||
                              ""
                          if ("" === o)
                            for (
                              var s = t[a].firstChild.className.split(" "),
                                l = 0;
                              l < s.length;
                              ++l
                            ) {
                              var c = s[l].match(/^language-(.+)$/)
                              if (null !== c) {
                                o = c[1]
                                break
                              }
                            }
                          ;(i = n.helper.unescapeHTMLEntities(i)),
                            r.push(i),
                            (t[a].outerHTML =
                              '<precode language="' +
                              o +
                              '" precodenum="' +
                              a.toString() +
                              '"></precode>')
                        } else
                          r.push(t[a].innerHTML),
                            (t[a].innerHTML = ""),
                            t[a].setAttribute("prenum", a.toString())
                      return r
                    })(r),
                  }
                  !(function e(t) {
                    for (var n = 0; n < t.childNodes.length; ++n) {
                      var r = t.childNodes[n]
                      3 === r.nodeType
                        ? /\S/.test(r.nodeValue)
                          ? ((r.nodeValue = r.nodeValue.split("\n").join(" ")),
                            (r.nodeValue = r.nodeValue.replace(/(\s)+/g, "$1")))
                          : (t.removeChild(r), --n)
                        : 1 === r.nodeType && e(r)
                    }
                  })(r)
                  for (var i = r.childNodes, o = "", s = 0; s < i.length; s++)
                    o += n.subParser("makeMarkdown.node")(i[s], a)
                  return o
                }),
              (this.setOption = function (e, n) {
                t[e] = n
              }),
              (this.getOption = function (e) {
                return t[e]
              }),
              (this.getOptions = function () {
                return t
              }),
              (this.addExtension = function (e, t) {
                h(e, (t = t || null))
              }),
              (this.useExtension = function (e) {
                h(e)
              }),
              (this.setFlavor = function (e) {
                if (!s.hasOwnProperty(e))
                  throw Error(e + " flavor was not found")
                var n = s[e]
                for (var r in ((d = e), n)) n.hasOwnProperty(r) && (t[r] = n[r])
              }),
              (this.getFlavor = function () {
                return d
              }),
              (this.removeExtension = function (e) {
                n.helper.isArray(e) || (e = [e])
                for (var t = 0; t < e.length; ++t) {
                  for (var a = e[t], i = 0; i < r.length; ++i)
                    r[i] === a && r[i].splice(i, 1)
                  for (; 0 < c.length; ++i) c[0] === a && c[0].splice(i, 1)
                }
              }),
              (this.getAllExtensions = function () {
                return { language: r, output: c }
              }),
              (this.getMetadata = function (e) {
                return e ? p.raw : p.parsed
              }),
              (this.getMetadataFormat = function () {
                return p.format
              }),
              (this._setMetadataPair = function (e, t) {
                p.parsed[e] = t
              }),
              (this._setMetadataFormat = function (e) {
                p.format = e
              }),
              (this._setMetadataRaw = function (e) {
                p.raw = e
              })
          }),
          n.subParser("anchors", function (e, t, r) {
            var a = function (e, a, i, o, s, l, c) {
              if (
                (n.helper.isUndefined(c) && (c = ""),
                (i = i.toLowerCase()),
                e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
              )
                o = ""
              else if (!o) {
                if (
                  (i || (i = a.toLowerCase().replace(/ ?\n/g, " ")),
                  (o = "#" + i),
                  n.helper.isUndefined(r.gUrls[i]))
                )
                  return e
                ;(o = r.gUrls[i]),
                  n.helper.isUndefined(r.gTitles[i]) || (c = r.gTitles[i])
              }
              var u =
                '<a href="' +
                (o = o.replace(
                  n.helper.regexes.asteriskDashAndColon,
                  n.helper.escapeCharactersCallback
                )) +
                '"'
              return (
                "" !== c &&
                  null !== c &&
                  (u +=
                    ' title="' +
                    (c = (c = c.replace(/"/g, "&quot;")).replace(
                      n.helper.regexes.asteriskDashAndColon,
                      n.helper.escapeCharactersCallback
                    )) +
                    '"'),
                t.openLinksInNewWindow &&
                  !/^#/.test(o) &&
                  (u += ' rel="noopener noreferrer" target="¨E95Eblank"'),
                (u += ">" + a + "</a>")
              )
            }
            return (
              (e = (e = (e = (e = (e = r.converter._dispatch(
                "anchors.before",
                e,
                t,
                r
              )).replace(
                /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
                a
              )).replace(
                /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                a
              )).replace(
                /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                a
              )).replace(/\[([^\[\]]+)]()()()()()/g, a)),
              t.ghMentions &&
                (e = e.replace(
                  /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
                  function (e, r, a, i, o) {
                    if ("\\" === a) return r + i
                    if (!n.helper.isString(t.ghMentionsLink))
                      throw new Error("ghMentionsLink option must be a string")
                    var s = t.ghMentionsLink.replace(/\{u}/g, o),
                      l = ""
                    return (
                      t.openLinksInNewWindow &&
                        (l = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                      r + '<a href="' + s + '"' + l + ">" + i + "</a>"
                    )
                  }
                )),
              (e = r.converter._dispatch("anchors.after", e, t, r))
            )
          })
        var d =
            /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
          p =
            /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
          h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
          g =
            /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
          f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
          m = function (e) {
            return function (t, r, a, i, o, s, l) {
              var c = (a = a.replace(
                  n.helper.regexes.asteriskDashAndColon,
                  n.helper.escapeCharactersCallback
                )),
                u = "",
                d = "",
                p = r || "",
                h = l || ""
              return (
                /^www\./i.test(a) && (a = a.replace(/^www\./i, "http://www.")),
                e.excludeTrailingPunctuationFromURLs && s && (u = s),
                e.openLinksInNewWindow &&
                  (d = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                p + '<a href="' + a + '"' + d + ">" + c + "</a>" + u + h
              )
            }
          },
          b = function (e, t) {
            return function (r, a, i) {
              var o = "mailto:"
              return (
                (a = a || ""),
                (i = n.subParser("unescapeSpecialChars")(i, e, t)),
                e.encodeEmails
                  ? ((o = n.helper.encodeEmailAddress(o + i)),
                    (i = n.helper.encodeEmailAddress(i)))
                  : (o += i),
                a + '<a href="' + o + '">' + i + "</a>"
              )
            }
          }
        n.subParser("autoLinks", function (e, t, n) {
          return (
            (e = (e = (e = n.converter._dispatch(
              "autoLinks.before",
              e,
              t,
              n
            )).replace(h, m(t))).replace(f, b(t, n))),
            (e = n.converter._dispatch("autoLinks.after", e, t, n))
          )
        }),
          n.subParser("simplifiedAutoLinks", function (e, t, n) {
            return t.simplifiedAutoLink
              ? ((e = n.converter._dispatch(
                  "simplifiedAutoLinks.before",
                  e,
                  t,
                  n
                )),
                (e = (e = t.excludeTrailingPunctuationFromURLs
                  ? e.replace(p, m(t))
                  : e.replace(d, m(t))).replace(g, b(t, n))),
                (e = n.converter._dispatch(
                  "simplifiedAutoLinks.after",
                  e,
                  t,
                  n
                )))
              : e
          }),
          n.subParser("blockGamut", function (e, t, r) {
            return (
              (e = r.converter._dispatch("blockGamut.before", e, t, r)),
              (e = n.subParser("blockQuotes")(e, t, r)),
              (e = n.subParser("headers")(e, t, r)),
              (e = n.subParser("horizontalRule")(e, t, r)),
              (e = n.subParser("lists")(e, t, r)),
              (e = n.subParser("codeBlocks")(e, t, r)),
              (e = n.subParser("tables")(e, t, r)),
              (e = n.subParser("hashHTMLBlocks")(e, t, r)),
              (e = n.subParser("paragraphs")(e, t, r)),
              (e = r.converter._dispatch("blockGamut.after", e, t, r))
            )
          }),
          n.subParser("blockQuotes", function (e, t, r) {
            ;(e = r.converter._dispatch("blockQuotes.before", e, t, r)),
              (e += "\n\n")
            var a = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm
            return (
              t.splitAdjacentBlockquotes && (a = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
              (e = e.replace(a, function (e) {
                return (
                  (e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(
                    /¨0/g,
                    ""
                  )).replace(/^[ \t]+$/gm, "")),
                  (e = n.subParser("githubCodeBlocks")(e, t, r)),
                  (e = (e = (e = n.subParser("blockGamut")(e, t, r)).replace(
                    /(^|\n)/g,
                    "$1  "
                  )).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
                    var n = t
                    return (n = (n = n.replace(/^  /gm, "¨0")).replace(
                      /¨0/g,
                      ""
                    ))
                  })),
                  n.subParser("hashBlock")(
                    "<blockquote>\n" + e + "\n</blockquote>",
                    t,
                    r
                  )
                )
              })),
              (e = r.converter._dispatch("blockQuotes.after", e, t, r))
            )
          }),
          n.subParser("codeBlocks", function (e, t, r) {
            e = r.converter._dispatch("codeBlocks.before", e, t, r)
            return (
              (e = (e = (e += "¨0").replace(
                /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,
                function (e, a, i) {
                  var o = a,
                    s = i,
                    l = "\n"
                  return (
                    (o = n.subParser("outdent")(o, t, r)),
                    (o = n.subParser("encodeCode")(o, t, r)),
                    (o = (o = (o = n.subParser("detab")(o, t, r)).replace(
                      /^\n+/g,
                      ""
                    )).replace(/\n+$/g, "")),
                    t.omitExtraWLInCodeBlocks && (l = ""),
                    (o = "<pre><code>" + o + l + "</code></pre>"),
                    n.subParser("hashBlock")(o, t, r) + s
                  )
                }
              )).replace(/¨0/, "")),
              (e = r.converter._dispatch("codeBlocks.after", e, t, r))
            )
          }),
          n.subParser("codeSpans", function (e, t, r) {
            return (
              void 0 ===
                (e = r.converter._dispatch("codeSpans.before", e, t, r)) &&
                (e = ""),
              (e = e.replace(
                /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
                function (e, a, i, o) {
                  var s = o
                  return (
                    (s = (s = s.replace(/^([ \t]*)/g, "")).replace(
                      /[ \t]*$/g,
                      ""
                    )),
                    (s =
                      a +
                      "<code>" +
                      (s = n.subParser("encodeCode")(s, t, r)) +
                      "</code>"),
                    (s = n.subParser("hashHTMLSpans")(s, t, r))
                  )
                }
              )),
              (e = r.converter._dispatch("codeSpans.after", e, t, r))
            )
          }),
          n.subParser("completeHTMLDocument", function (e, t, n) {
            if (!t.completeHTMLDocument) return e
            e = n.converter._dispatch("completeHTMLDocument.before", e, t, n)
            var r = "html",
              a = "<!DOCTYPE HTML>\n",
              i = "",
              o = '<meta charset="utf-8">\n',
              s = "",
              l = ""
            for (var c in (void 0 !== n.metadata.parsed.doctype &&
              ((a = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n"),
              ("html" !==
                (r = n.metadata.parsed.doctype.toString().toLowerCase()) &&
                "html5" !== r) ||
                (o = '<meta charset="utf-8">')),
            n.metadata.parsed))
              if (n.metadata.parsed.hasOwnProperty(c))
                switch (c.toLowerCase()) {
                  case "doctype":
                    break
                  case "title":
                    i = "<title>" + n.metadata.parsed.title + "</title>\n"
                    break
                  case "charset":
                    o =
                      "html" === r || "html5" === r
                        ? '<meta charset="' + n.metadata.parsed.charset + '">\n'
                        : '<meta name="charset" content="' +
                          n.metadata.parsed.charset +
                          '">\n'
                    break
                  case "language":
                  case "lang":
                    ;(s = ' lang="' + n.metadata.parsed[c] + '"'),
                      (l +=
                        '<meta name="' +
                        c +
                        '" content="' +
                        n.metadata.parsed[c] +
                        '">\n')
                    break
                  default:
                    l +=
                      '<meta name="' +
                      c +
                      '" content="' +
                      n.metadata.parsed[c] +
                      '">\n'
                }
            return (
              (e =
                a +
                "<html" +
                s +
                ">\n<head>\n" +
                i +
                o +
                l +
                "</head>\n<body>\n" +
                e.trim() +
                "\n</body>\n</html>"),
              (e = n.converter._dispatch("completeHTMLDocument.after", e, t, n))
            )
          }),
          n.subParser("detab", function (e, t, n) {
            return (
              (e = (e = (e = (e = (e = (e = n.converter._dispatch(
                "detab.before",
                e,
                t,
                n
              )).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(
                /¨B(.+?)¨A/g,
                function (e, t) {
                  for (var n = t, r = 4 - (n.length % 4), a = 0; a < r; a++)
                    n += " "
                  return n
                }
              )).replace(/¨A/g, "    ")).replace(/¨B/g, "")),
              (e = n.converter._dispatch("detab.after", e, t, n))
            )
          }),
          n.subParser("ellipsis", function (e, t, n) {
            return (
              (e = (e = n.converter._dispatch(
                "ellipsis.before",
                e,
                t,
                n
              )).replace(/\.\.\./g, "…")),
              (e = n.converter._dispatch("ellipsis.after", e, t, n))
            )
          }),
          n.subParser("emoji", function (e, t, r) {
            if (!t.emoji) return e
            return (
              (e = (e = r.converter._dispatch("emoji.before", e, t, r)).replace(
                /:([\S]+?):/g,
                function (e, t) {
                  return n.helper.emojis.hasOwnProperty(t)
                    ? n.helper.emojis[t]
                    : e
                }
              )),
              (e = r.converter._dispatch("emoji.after", e, t, r))
            )
          }),
          n.subParser("encodeAmpsAndAngles", function (e, t, n) {
            return (
              (e = (e = (e = (e = (e = n.converter._dispatch(
                "encodeAmpsAndAngles.before",
                e,
                t,
                n
              )).replace(
                /&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,
                "&amp;"
              )).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(
                /</g,
                "&lt;"
              )).replace(/>/g, "&gt;")),
              (e = n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n))
            )
          }),
          n.subParser("encodeBackslashEscapes", function (e, t, r) {
            return (
              (e = (e = (e = r.converter._dispatch(
                "encodeBackslashEscapes.before",
                e,
                t,
                r
              )).replace(/\\(\\)/g, n.helper.escapeCharactersCallback)).replace(
                /\\([`*_{}\[\]()>#+.!~=|-])/g,
                n.helper.escapeCharactersCallback
              )),
              (e = r.converter._dispatch(
                "encodeBackslashEscapes.after",
                e,
                t,
                r
              ))
            )
          }),
          n.subParser("encodeCode", function (e, t, r) {
            return (
              (e = (e = r.converter._dispatch("encodeCode.before", e, t, r))
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(
                  /([*_{}\[\]\\=~-])/g,
                  n.helper.escapeCharactersCallback
                )),
              (e = r.converter._dispatch("encodeCode.after", e, t, r))
            )
          }),
          n.subParser(
            "escapeSpecialCharsWithinTagAttributes",
            function (e, t, r) {
              return (
                (e = (e = (e = r.converter._dispatch(
                  "escapeSpecialCharsWithinTagAttributes.before",
                  e,
                  t,
                  r
                )).replace(
                  /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
                  function (e) {
                    return e
                      .replace(/(.)<\/?code>(?=.)/g, "$1`")
                      .replace(
                        /([\\`*_~=|])/g,
                        n.helper.escapeCharactersCallback
                      )
                  }
                )).replace(
                  /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,
                  function (e) {
                    return e.replace(
                      /([\\`*_~=|])/g,
                      n.helper.escapeCharactersCallback
                    )
                  }
                )),
                (e = r.converter._dispatch(
                  "escapeSpecialCharsWithinTagAttributes.after",
                  e,
                  t,
                  r
                ))
              )
            }
          ),
          n.subParser("githubCodeBlocks", function (e, t, r) {
            return t.ghCodeBlocks
              ? ((e = r.converter._dispatch(
                  "githubCodeBlocks.before",
                  e,
                  t,
                  r
                )),
                (e = (e = (e += "¨0").replace(
                  /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
                  function (e, a, i, o) {
                    var s = t.omitExtraWLInCodeBlocks ? "" : "\n"
                    return (
                      (o = n.subParser("encodeCode")(o, t, r)),
                      (o =
                        "<pre><code" +
                        (i ? ' class="' + i + " language-" + i + '"' : "") +
                        ">" +
                        (o = (o = (o = n.subParser("detab")(o, t, r)).replace(
                          /^\n+/g,
                          ""
                        )).replace(/\n+$/g, "")) +
                        s +
                        "</code></pre>"),
                      (o = n.subParser("hashBlock")(o, t, r)),
                      "\n\n¨G" +
                        (r.ghCodeBlocks.push({ text: e, codeblock: o }) - 1) +
                        "G\n\n"
                    )
                  }
                )).replace(/¨0/, "")),
                r.converter._dispatch("githubCodeBlocks.after", e, t, r))
              : e
          }),
          n.subParser("hashBlock", function (e, t, n) {
            return (
              (e = (e = n.converter._dispatch(
                "hashBlock.before",
                e,
                t,
                n
              )).replace(/(^\n+|\n+$)/g, "")),
              (e = "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"),
              (e = n.converter._dispatch("hashBlock.after", e, t, n))
            )
          }),
          n.subParser("hashCodeTags", function (e, t, r) {
            e = r.converter._dispatch("hashCodeTags.before", e, t, r)
            return (
              (e = n.helper.replaceRecursiveRegExp(
                e,
                function (e, a, i, o) {
                  var s = i + n.subParser("encodeCode")(a, t, r) + o
                  return "¨C" + (r.gHtmlSpans.push(s) - 1) + "C"
                },
                "<code\\b[^>]*>",
                "</code>",
                "gim"
              )),
              (e = r.converter._dispatch("hashCodeTags.after", e, t, r))
            )
          }),
          n.subParser("hashElement", function (e, t, n) {
            return function (e, t) {
              var r = t
              return (
                (r = (r = (r = r.replace(/\n\n/g, "\n")).replace(
                  /^\n/,
                  ""
                )).replace(/\n+$/g, "")),
                (r = "\n\n¨K" + (n.gHtmlBlocks.push(r) - 1) + "K\n\n")
              )
            }
          }),
          n.subParser("hashHTMLBlocks", function (e, t, r) {
            e = r.converter._dispatch("hashHTMLBlocks.before", e, t, r)
            var a = [
                "pre",
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "blockquote",
                "table",
                "dl",
                "ol",
                "ul",
                "script",
                "noscript",
                "form",
                "fieldset",
                "iframe",
                "math",
                "style",
                "section",
                "header",
                "footer",
                "nav",
                "article",
                "aside",
                "address",
                "audio",
                "canvas",
                "figure",
                "hgroup",
                "output",
                "video",
                "p",
              ],
              i = function (e, t, n, a) {
                var i = e
                return (
                  -1 !== n.search(/\bmarkdown\b/) &&
                    (i = n + r.converter.makeHtml(t) + a),
                  "\n\n¨K" + (r.gHtmlBlocks.push(i) - 1) + "K\n\n"
                )
              }
            t.backslashEscapesHTMLTags &&
              (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, t) {
                return "&lt;" + t + "&gt;"
              }))
            for (var o = 0; o < a.length; ++o)
              for (
                var s,
                  l = new RegExp("^ {0,3}(<" + a[o] + "\\b[^>]*>)", "im"),
                  c = "<" + a[o] + "\\b[^>]*>",
                  u = "</" + a[o] + ">";
                -1 !== (s = n.helper.regexIndexOf(e, l));

              ) {
                var d = n.helper.splitAtIndex(e, s),
                  p = n.helper.replaceRecursiveRegExp(d[1], i, c, u, "im")
                if (p === d[1]) break
                e = d[0].concat(p)
              }
            return (
              (e = e.replace(
                /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
                n.subParser("hashElement")(e, t, r)
              )),
              (e = (e = n.helper.replaceRecursiveRegExp(
                e,
                function (e) {
                  return "\n\n¨K" + (r.gHtmlBlocks.push(e) - 1) + "K\n\n"
                },
                "^ {0,3}\x3c!--",
                "--\x3e",
                "gm"
              )).replace(
                /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
                n.subParser("hashElement")(e, t, r)
              )),
              (e = r.converter._dispatch("hashHTMLBlocks.after", e, t, r))
            )
          }),
          n.subParser("hashHTMLSpans", function (e, t, n) {
            function r(e) {
              return "¨C" + (n.gHtmlSpans.push(e) - 1) + "C"
            }
            return (
              (e = (e = (e = (e = (e = n.converter._dispatch(
                "hashHTMLSpans.before",
                e,
                t,
                n
              )).replace(/<[^>]+?\/>/gi, function (e) {
                return r(e)
              })).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
                return r(e)
              })).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
                return r(e)
              })).replace(/<[^>]+?>/gi, function (e) {
                return r(e)
              })),
              (e = n.converter._dispatch("hashHTMLSpans.after", e, t, n))
            )
          }),
          n.subParser("unhashHTMLSpans", function (e, t, n) {
            e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n)
            for (var r = 0; r < n.gHtmlSpans.length; ++r) {
              for (var a = n.gHtmlSpans[r], i = 0; /¨C(\d+)C/.test(a); ) {
                var o = RegExp.$1
                if (
                  ((a = a.replace("¨C" + o + "C", n.gHtmlSpans[o])), 10 === i)
                ) {
                  console.error("maximum nesting of 10 spans reached!!!")
                  break
                }
                ++i
              }
              e = e.replace("¨C" + r + "C", a)
            }
            return (e = n.converter._dispatch("unhashHTMLSpans.after", e, t, n))
          }),
          n.subParser("hashPreCodeTags", function (e, t, r) {
            e = r.converter._dispatch("hashPreCodeTags.before", e, t, r)
            return (
              (e = n.helper.replaceRecursiveRegExp(
                e,
                function (e, a, i, o) {
                  var s = i + n.subParser("encodeCode")(a, t, r) + o
                  return (
                    "\n\n¨G" +
                    (r.ghCodeBlocks.push({ text: e, codeblock: s }) - 1) +
                    "G\n\n"
                  )
                },
                "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
                "^ {0,3}</code>\\s*</pre>",
                "gim"
              )),
              (e = r.converter._dispatch("hashPreCodeTags.after", e, t, r))
            )
          }),
          n.subParser("headers", function (e, t, r) {
            e = r.converter._dispatch("headers.before", e, t, r)
            var a = isNaN(parseInt(t.headerLevelStart))
                ? 1
                : parseInt(t.headerLevelStart),
              i = t.smoothLivePreview
                ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
                : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
              o = t.smoothLivePreview
                ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
                : /^(.+)[ \t]*\n-+[ \t]*\n+/gm
            e = (e = e.replace(i, function (e, i) {
              var o = n.subParser("spanGamut")(i, t, r),
                s = t.noHeaderId ? "" : ' id="' + l(i) + '"',
                c = "<h" + a + s + ">" + o + "</h" + a + ">"
              return n.subParser("hashBlock")(c, t, r)
            })).replace(o, function (e, i) {
              var o = n.subParser("spanGamut")(i, t, r),
                s = t.noHeaderId ? "" : ' id="' + l(i) + '"',
                c = a + 1,
                u = "<h" + c + s + ">" + o + "</h" + c + ">"
              return n.subParser("hashBlock")(u, t, r)
            })
            var s = t.requireSpaceBeforeHeadingText
              ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
              : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm
            function l(e) {
              var a, i
              if (t.customizedHeaderId) {
                var o = e.match(/\{([^{]+?)}\s*$/)
                o && o[1] && (e = o[1])
              }
              return (
                (a = e),
                (i = n.helper.isString(t.prefixHeaderId)
                  ? t.prefixHeaderId
                  : !0 === t.prefixHeaderId
                  ? "section-"
                  : ""),
                t.rawPrefixHeaderId || (a = i + a),
                (a = t.ghCompatibleHeaderId
                  ? a
                      .replace(/ /g, "-")
                      .replace(/&amp;/g, "")
                      .replace(/¨T/g, "")
                      .replace(/¨D/g, "")
                      .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "")
                      .toLowerCase()
                  : t.rawHeaderId
                  ? a
                      .replace(/ /g, "-")
                      .replace(/&amp;/g, "&")
                      .replace(/¨T/g, "¨")
                      .replace(/¨D/g, "$")
                      .replace(/["']/g, "-")
                      .toLowerCase()
                  : a.replace(/[^\w]/g, "").toLowerCase()),
                t.rawPrefixHeaderId && (a = i + a),
                r.hashLinkCounts[a]
                  ? (a = a + "-" + r.hashLinkCounts[a]++)
                  : (r.hashLinkCounts[a] = 1),
                a
              )
            }
            return (
              (e = e.replace(s, function (e, i, o) {
                var s = o
                t.customizedHeaderId &&
                  (s = o.replace(/\s?\{([^{]+?)}\s*$/, ""))
                var c = n.subParser("spanGamut")(s, t, r),
                  u = t.noHeaderId ? "" : ' id="' + l(o) + '"',
                  d = a - 1 + i.length,
                  p = "<h" + d + u + ">" + c + "</h" + d + ">"
                return n.subParser("hashBlock")(p, t, r)
              })),
              (e = r.converter._dispatch("headers.after", e, t, r))
            )
          }),
          n.subParser("horizontalRule", function (e, t, r) {
            e = r.converter._dispatch("horizontalRule.before", e, t, r)
            var a = n.subParser("hashBlock")("<hr />", t, r)
            return (
              (e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, a)).replace(
                /^ {0,2}( ?\*){3,}[ \t]*$/gm,
                a
              )).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, a)),
              (e = r.converter._dispatch("horizontalRule.after", e, t, r))
            )
          }),
          n.subParser("images", function (e, t, r) {
            function a(e, t, a, i, o, s, l, c) {
              var u = r.gUrls,
                d = r.gTitles,
                p = r.gDimensions
              if (
                ((a = a.toLowerCase()),
                c || (c = ""),
                e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
              )
                i = ""
              else if ("" === i || null === i) {
                if (
                  (("" !== a && null !== a) ||
                    (a = t.toLowerCase().replace(/ ?\n/g, " ")),
                  (i = "#" + a),
                  n.helper.isUndefined(u[a]))
                )
                  return e
                ;(i = u[a]),
                  n.helper.isUndefined(d[a]) || (c = d[a]),
                  n.helper.isUndefined(p[a]) ||
                    ((o = p[a].width), (s = p[a].height))
              }
              t = t
                .replace(/"/g, "&quot;")
                .replace(
                  n.helper.regexes.asteriskDashAndColon,
                  n.helper.escapeCharactersCallback
                )
              var h =
                '<img src="' +
                (i = i.replace(
                  n.helper.regexes.asteriskDashAndColon,
                  n.helper.escapeCharactersCallback
                )) +
                '" alt="' +
                t +
                '"'
              return (
                c &&
                  n.helper.isString(c) &&
                  (h +=
                    ' title="' +
                    (c = c
                      .replace(/"/g, "&quot;")
                      .replace(
                        n.helper.regexes.asteriskDashAndColon,
                        n.helper.escapeCharactersCallback
                      )) +
                    '"'),
                o &&
                  s &&
                  ((h += ' width="' + (o = "*" === o ? "auto" : o) + '"'),
                  (h += ' height="' + (s = "*" === s ? "auto" : s) + '"')),
                (h += " />")
              )
            }
            return (
              (e = (e = (e = (e = (e = (e = r.converter._dispatch(
                "images.before",
                e,
                t,
                r
              )).replace(
                /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
                a
              )).replace(
                /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                function (e, t, n, r, i, o, s, l) {
                  return a(e, t, n, (r = r.replace(/\s/g, "")), i, o, s, l)
                }
              )).replace(
                /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
                a
              )).replace(
                /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                a
              )).replace(/!\[([^\[\]]+)]()()()()()/g, a)),
              (e = r.converter._dispatch("images.after", e, t, r))
            )
          }),
          n.subParser("italicsAndBold", function (e, t, n) {
            function r(e, t, n) {
              return t + e + n
            }
            return (
              (e = n.converter._dispatch("italicsAndBold.before", e, t, n)),
              (e = t.literalMidWordUnderscores
                ? (e = (e = e.replace(
                    /\b___(\S[\s\S]*?)___\b/g,
                    function (e, t) {
                      return r(t, "<strong><em>", "</em></strong>")
                    }
                  )).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                    return r(t, "<strong>", "</strong>")
                  })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, t) {
                    return r(t, "<em>", "</em>")
                  })
                : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                    return /\S$/.test(t)
                      ? r(t, "<strong><em>", "</em></strong>")
                      : e
                  })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e
                  })).replace(/_([^\s_][\s\S]*?)_/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<em>", "</em>") : e
                  })),
              (e = t.literalMidWordAsterisks
                ? (e = (e = e.replace(
                    /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                    function (e, t, n) {
                      return r(n, t + "<strong><em>", "</em></strong>")
                    }
                  )).replace(
                    /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                    function (e, t, n) {
                      return r(n, t + "<strong>", "</strong>")
                    }
                  )).replace(
                    /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                    function (e, t, n) {
                      return r(n, t + "<em>", "</em>")
                    }
                  )
                : (e = (e = e.replace(
                    /\*\*\*(\S[\s\S]*?)\*\*\*/g,
                    function (e, t) {
                      return /\S$/.test(t)
                        ? r(t, "<strong><em>", "</em></strong>")
                        : e
                    }
                  )).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e
                  })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<em>", "</em>") : e
                  })),
              (e = n.converter._dispatch("italicsAndBold.after", e, t, n))
            )
          }),
          n.subParser("lists", function (e, t, r) {
            function a(e, a) {
              r.gListLevel++, (e = e.replace(/\n{2,}$/, "\n"))
              var i =
                  /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                o = /\n[ \t]*\n(?!¨0)/.test((e += "¨0"))
              return (
                t.disableForced4SpacesIndentedSublists &&
                  (i =
                    /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
                (e = (e = e.replace(i, function (e, a, i, s, l, c, u) {
                  u = u && "" !== u.trim()
                  var d = n.subParser("outdent")(l, t, r),
                    p = ""
                  return (
                    c &&
                      t.tasklists &&
                      ((p =
                        ' class="task-list-item" style="list-style-type: none;"'),
                      (d = d.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                        var e =
                          '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"'
                        return u && (e += " checked"), (e += ">")
                      }))),
                    (d = d.replace(
                      /^([-*+]|\d\.)[ \t]+[\S\n ]*/g,
                      function (e) {
                        return "¨A" + e
                      }
                    )),
                    a || d.search(/\n{2,}/) > -1
                      ? ((d = n.subParser("githubCodeBlocks")(d, t, r)),
                        (d = n.subParser("blockGamut")(d, t, r)))
                      : ((d = (d = n.subParser("lists")(d, t, r)).replace(
                          /\n$/,
                          ""
                        )),
                        (d = (d = n.subParser("hashHTMLBlocks")(
                          d,
                          t,
                          r
                        )).replace(/\n\n+/g, "\n\n")),
                        (d = o
                          ? n.subParser("paragraphs")(d, t, r)
                          : n.subParser("spanGamut")(d, t, r))),
                    (d =
                      "<li" + p + ">" + (d = d.replace("¨A", "")) + "</li>\n")
                  )
                })).replace(/¨0/g, "")),
                r.gListLevel--,
                a && (e = e.replace(/\s+$/, "")),
                e
              )
            }
            function i(e, t) {
              if ("ol" === t) {
                var n = e.match(/^ *(\d+)\./)
                if (n && "1" !== n[1]) return ' start="' + n[1] + '"'
              }
              return ""
            }
            function o(e, n, r) {
              var o = t.disableForced4SpacesIndentedSublists
                  ? /^ ?\d+\.[ \t]/gm
                  : /^ {0,3}\d+\.[ \t]/gm,
                s = t.disableForced4SpacesIndentedSublists
                  ? /^ ?[*+-][ \t]/gm
                  : /^ {0,3}[*+-][ \t]/gm,
                l = "ul" === n ? o : s,
                c = ""
              if (-1 !== e.search(l))
                !(function t(u) {
                  var d = u.search(l),
                    p = i(e, n)
                  ;-1 !== d
                    ? ((c +=
                        "\n\n<" +
                        n +
                        p +
                        ">\n" +
                        a(u.slice(0, d), !!r) +
                        "</" +
                        n +
                        ">\n"),
                      (l = "ul" === (n = "ul" === n ? "ol" : "ul") ? o : s),
                      t(u.slice(d)))
                    : (c +=
                        "\n\n<" + n + p + ">\n" + a(u, !!r) + "</" + n + ">\n")
                })(e)
              else {
                var u = i(e, n)
                c = "\n\n<" + n + u + ">\n" + a(e, !!r) + "</" + n + ">\n"
              }
              return c
            }
            return (
              (e = r.converter._dispatch("lists.before", e, t, r)),
              (e += "¨0"),
              (e = (e = r.gListLevel
                ? e.replace(
                    /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                    function (e, t, n) {
                      return o(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
                    }
                  )
                : e.replace(
                    /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                    function (e, t, n, r) {
                      return o(n, r.search(/[*+-]/g) > -1 ? "ul" : "ol", !1)
                    }
                  )).replace(/¨0/, "")),
              (e = r.converter._dispatch("lists.after", e, t, r))
            )
          }),
          n.subParser("metadata", function (e, t, n) {
            if (!t.metadata) return e
            function r(e) {
              ;(n.metadata.raw = e),
                (e = (e = e
                  .replace(/&/g, "&amp;")
                  .replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(
                  /^([\S ]+): +([\s\S]+?)$/gm,
                  function (e, t, r) {
                    return (n.metadata.parsed[t] = r), ""
                  }
                )
            }
            return (
              (e = (e = (e = (e = n.converter._dispatch(
                "metadata.before",
                e,
                t,
                n
              )).replace(
                /^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,
                function (e, t, n) {
                  return r(n), "¨M"
                }
              )).replace(
                /^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,
                function (e, t, a) {
                  return t && (n.metadata.format = t), r(a), "¨M"
                }
              )).replace(/¨M/g, "")),
              (e = n.converter._dispatch("metadata.after", e, t, n))
            )
          }),
          n.subParser("outdent", function (e, t, n) {
            return (
              (e = (e = (e = n.converter._dispatch(
                "outdent.before",
                e,
                t,
                n
              )).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, "")),
              (e = n.converter._dispatch("outdent.after", e, t, n))
            )
          }),
          n.subParser("paragraphs", function (e, t, r) {
            for (
              var a = (e = (e = (e = r.converter._dispatch(
                  "paragraphs.before",
                  e,
                  t,
                  r
                )).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g),
                i = [],
                o = a.length,
                s = 0;
              s < o;
              s++
            ) {
              var l = a[s]
              l.search(/¨(K|G)(\d+)\1/g) >= 0
                ? i.push(l)
                : l.search(/\S/) >= 0 &&
                  ((l = (l = n.subParser("spanGamut")(l, t, r)).replace(
                    /^([ \t]*)/g,
                    "<p>"
                  )),
                  (l += "</p>"),
                  i.push(l))
            }
            for (o = i.length, s = 0; s < o; s++) {
              for (var c = "", u = i[s], d = !1; /¨(K|G)(\d+)\1/.test(u); ) {
                var p = RegExp.$1,
                  h = RegExp.$2
                ;(c = (c =
                  "K" === p
                    ? r.gHtmlBlocks[h]
                    : d
                    ? n.subParser("encodeCode")(r.ghCodeBlocks[h].text, t, r)
                    : r.ghCodeBlocks[h].codeblock).replace(/\$/g, "$$$$")),
                  (u = u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c)),
                  /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (d = !0)
              }
              i[s] = u
            }
            return (
              (e = (e = (e = i.join("\n")).replace(/^\n+/g, "")).replace(
                /\n+$/g,
                ""
              )),
              r.converter._dispatch("paragraphs.after", e, t, r)
            )
          }),
          n.subParser("runExtension", function (e, t, n, r) {
            if (e.filter) t = e.filter(t, r.converter, n)
            else if (e.regex) {
              var a = e.regex
              a instanceof RegExp || (a = new RegExp(a, "g")),
                (t = t.replace(a, e.replace))
            }
            return t
          }),
          n.subParser("spanGamut", function (e, t, r) {
            return (
              (e = r.converter._dispatch("spanGamut.before", e, t, r)),
              (e = n.subParser("codeSpans")(e, t, r)),
              (e = n.subParser("escapeSpecialCharsWithinTagAttributes")(
                e,
                t,
                r
              )),
              (e = n.subParser("encodeBackslashEscapes")(e, t, r)),
              (e = n.subParser("images")(e, t, r)),
              (e = n.subParser("anchors")(e, t, r)),
              (e = n.subParser("autoLinks")(e, t, r)),
              (e = n.subParser("simplifiedAutoLinks")(e, t, r)),
              (e = n.subParser("emoji")(e, t, r)),
              (e = n.subParser("underline")(e, t, r)),
              (e = n.subParser("italicsAndBold")(e, t, r)),
              (e = n.subParser("strikethrough")(e, t, r)),
              (e = n.subParser("ellipsis")(e, t, r)),
              (e = n.subParser("hashHTMLSpans")(e, t, r)),
              (e = n.subParser("encodeAmpsAndAngles")(e, t, r)),
              t.simpleLineBreaks
                ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n"))
                : (e = e.replace(/  +\n/g, "<br />\n")),
              (e = r.converter._dispatch("spanGamut.after", e, t, r))
            )
          }),
          n.subParser("strikethrough", function (e, t, r) {
            return (
              t.strikethrough &&
                ((e = (e = r.converter._dispatch(
                  "strikethrough.before",
                  e,
                  t,
                  r
                )).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, a) {
                  return (function (e) {
                    return (
                      t.simplifiedAutoLink &&
                        (e = n.subParser("simplifiedAutoLinks")(e, t, r)),
                      "<del>" + e + "</del>"
                    )
                  })(a)
                })),
                (e = r.converter._dispatch("strikethrough.after", e, t, r))),
              e
            )
          }),
          n.subParser("stripLinkDefinitions", function (e, t, r) {
            var a = function (e, a, i, o, s, l, c) {
              return (
                (a = a.toLowerCase()),
                i.match(/^data:.+?\/.+?;base64,/)
                  ? (r.gUrls[a] = i.replace(/\s/g, ""))
                  : (r.gUrls[a] = n.subParser("encodeAmpsAndAngles")(i, t, r)),
                l
                  ? l + c
                  : (c && (r.gTitles[a] = c.replace(/"|'/g, "&quot;")),
                    t.parseImgDimensions &&
                      o &&
                      s &&
                      (r.gDimensions[a] = { width: o, height: s }),
                    "")
              )
            }
            return (e = (e = (e = (e += "¨0").replace(
              /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,
              a
            )).replace(
              /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
              a
            )).replace(/¨0/, ""))
          }),
          n.subParser("tables", function (e, t, r) {
            if (!t.tables) return e
            function a(e, a) {
              return (
                "<td" + a + ">" + n.subParser("spanGamut")(e, t, r) + "</td>\n"
              )
            }
            function i(e) {
              var i,
                o = e.split("\n")
              for (i = 0; i < o.length; ++i)
                /^ {0,3}\|/.test(o[i]) &&
                  (o[i] = o[i].replace(/^ {0,3}\|/, "")),
                  /\|[ \t]*$/.test(o[i]) &&
                    (o[i] = o[i].replace(/\|[ \t]*$/, "")),
                  (o[i] = n.subParser("codeSpans")(o[i], t, r))
              var s,
                l,
                c,
                u,
                d = o[0].split("|").map(function (e) {
                  return e.trim()
                }),
                p = o[1].split("|").map(function (e) {
                  return e.trim()
                }),
                h = [],
                g = [],
                f = [],
                m = []
              for (o.shift(), o.shift(), i = 0; i < o.length; ++i)
                "" !== o[i].trim() &&
                  h.push(
                    o[i].split("|").map(function (e) {
                      return e.trim()
                    })
                  )
              if (d.length < p.length) return e
              for (i = 0; i < p.length; ++i)
                f.push(
                  ((s = p[i]),
                  /^:[ \t]*--*$/.test(s)
                    ? ' style="text-align:left;"'
                    : /^--*[ \t]*:[ \t]*$/.test(s)
                    ? ' style="text-align:right;"'
                    : /^:[ \t]*--*[ \t]*:$/.test(s)
                    ? ' style="text-align:center;"'
                    : "")
                )
              for (i = 0; i < d.length; ++i)
                n.helper.isUndefined(f[i]) && (f[i] = ""),
                  g.push(
                    ((l = d[i]),
                    (c = f[i]),
                    (u = void 0),
                    (u = ""),
                    (l = l.trim()),
                    (t.tablesHeaderId || t.tableHeaderId) &&
                      (u = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'),
                    "<th" +
                      u +
                      c +
                      ">" +
                      (l = n.subParser("spanGamut")(l, t, r)) +
                      "</th>\n")
                  )
              for (i = 0; i < h.length; ++i) {
                for (var b = [], _ = 0; _ < g.length; ++_)
                  n.helper.isUndefined(h[i][_]), b.push(a(h[i][_], f[_]))
                m.push(b)
              }
              return (function (e, t) {
                for (
                  var n = "<table>\n<thead>\n<tr>\n", r = e.length, a = 0;
                  a < r;
                  ++a
                )
                  n += e[a]
                for (
                  n += "</tr>\n</thead>\n<tbody>\n", a = 0;
                  a < t.length;
                  ++a
                ) {
                  n += "<tr>\n"
                  for (var i = 0; i < r; ++i) n += t[a][i]
                  n += "</tr>\n"
                }
                return (n += "</tbody>\n</table>\n")
              })(g, m)
            }
            return (
              (e = (e = (e = (e = r.converter._dispatch(
                "tables.before",
                e,
                t,
                r
              )).replace(/\\(\|)/g, n.helper.escapeCharactersCallback)).replace(
                /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
                i
              )).replace(
                /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,
                i
              )),
              (e = r.converter._dispatch("tables.after", e, t, r))
            )
          }),
          n.subParser("underline", function (e, t, r) {
            return t.underline
              ? ((e = r.converter._dispatch("underline.before", e, t, r)),
                (e = (e = t.literalMidWordUnderscores
                  ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                      return "<u>" + t + "</u>"
                    })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                      return "<u>" + t + "</u>"
                    })
                  : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                      return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                    })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                      return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                    })).replace(/(_)/g, n.helper.escapeCharactersCallback)),
                (e = r.converter._dispatch("underline.after", e, t, r)))
              : e
          }),
          n.subParser("unescapeSpecialChars", function (e, t, n) {
            return (
              (e = (e = n.converter._dispatch(
                "unescapeSpecialChars.before",
                e,
                t,
                n
              )).replace(/¨E(\d+)E/g, function (e, t) {
                var n = parseInt(t)
                return String.fromCharCode(n)
              })),
              (e = n.converter._dispatch("unescapeSpecialChars.after", e, t, n))
            )
          }),
          n.subParser("makeMarkdown.blockquote", function (e, t) {
            var r = ""
            if (e.hasChildNodes())
              for (var a = e.childNodes, i = a.length, o = 0; o < i; ++o) {
                var s = n.subParser("makeMarkdown.node")(a[o], t)
                "" !== s && (r += s)
              }
            return (r = "> " + (r = r.trim()).split("\n").join("\n> "))
          }),
          n.subParser("makeMarkdown.codeBlock", function (e, t) {
            var n = e.getAttribute("language"),
              r = e.getAttribute("precodenum")
            return "```" + n + "\n" + t.preList[r] + "\n```"
          }),
          n.subParser("makeMarkdown.codeSpan", function (e) {
            return "`" + e.innerHTML + "`"
          }),
          n.subParser("makeMarkdown.emphasis", function (e, t) {
            var r = ""
            if (e.hasChildNodes()) {
              r += "*"
              for (var a = e.childNodes, i = a.length, o = 0; o < i; ++o)
                r += n.subParser("makeMarkdown.node")(a[o], t)
              r += "*"
            }
            return r
          }),
          n.subParser("makeMarkdown.header", function (e, t, r) {
            var a = new Array(r + 1).join("#"),
              i = ""
            if (e.hasChildNodes()) {
              i = a + " "
              for (var o = e.childNodes, s = o.length, l = 0; l < s; ++l)
                i += n.subParser("makeMarkdown.node")(o[l], t)
            }
            return i
          }),
          n.subParser("makeMarkdown.hr", function () {
            return "---"
          }),
          n.subParser("makeMarkdown.image", function (e) {
            var t = ""
            return (
              e.hasAttribute("src") &&
                ((t += "![" + e.getAttribute("alt") + "]("),
                (t += "<" + e.getAttribute("src") + ">"),
                e.hasAttribute("width") &&
                  e.hasAttribute("height") &&
                  (t +=
                    " =" +
                    e.getAttribute("width") +
                    "x" +
                    e.getAttribute("height")),
                e.hasAttribute("title") &&
                  (t += ' "' + e.getAttribute("title") + '"'),
                (t += ")")),
              t
            )
          }),
          n.subParser("makeMarkdown.links", function (e, t) {
            var r = ""
            if (e.hasChildNodes() && e.hasAttribute("href")) {
              var a = e.childNodes,
                i = a.length
              r = "["
              for (var o = 0; o < i; ++o)
                r += n.subParser("makeMarkdown.node")(a[o], t)
              ;(r += "]("),
                (r += "<" + e.getAttribute("href") + ">"),
                e.hasAttribute("title") &&
                  (r += ' "' + e.getAttribute("title") + '"'),
                (r += ")")
            }
            return r
          }),
          n.subParser("makeMarkdown.list", function (e, t, r) {
            var a = ""
            if (!e.hasChildNodes()) return ""
            for (
              var i = e.childNodes,
                o = i.length,
                s = e.getAttribute("start") || 1,
                l = 0;
              l < o;
              ++l
            )
              if (
                void 0 !== i[l].tagName &&
                "li" === i[l].tagName.toLowerCase()
              ) {
                ;(a +=
                  ("ol" === r ? s.toString() + ". " : "- ") +
                  n.subParser("makeMarkdown.listItem")(i[l], t)),
                  ++s
              }
            return (a += "\n\x3c!-- --\x3e\n").trim()
          }),
          n.subParser("makeMarkdown.listItem", function (e, t) {
            for (var r = "", a = e.childNodes, i = a.length, o = 0; o < i; ++o)
              r += n.subParser("makeMarkdown.node")(a[o], t)
            return (
              /\n$/.test(r)
                ? (r = r
                    .split("\n")
                    .join("\n    ")
                    .replace(/^ {4}$/gm, "")
                    .replace(/\n\n+/g, "\n\n"))
                : (r += "\n"),
              r
            )
          }),
          n.subParser("makeMarkdown.node", function (e, t, r) {
            r = r || !1
            var a = ""
            if (3 === e.nodeType) return n.subParser("makeMarkdown.txt")(e, t)
            if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n"
            if (1 !== e.nodeType) return ""
            switch (e.tagName.toLowerCase()) {
              case "h1":
                r || (a = n.subParser("makeMarkdown.header")(e, t, 1) + "\n\n")
                break
              case "h2":
                r || (a = n.subParser("makeMarkdown.header")(e, t, 2) + "\n\n")
                break
              case "h3":
                r || (a = n.subParser("makeMarkdown.header")(e, t, 3) + "\n\n")
                break
              case "h4":
                r || (a = n.subParser("makeMarkdown.header")(e, t, 4) + "\n\n")
                break
              case "h5":
                r || (a = n.subParser("makeMarkdown.header")(e, t, 5) + "\n\n")
                break
              case "h6":
                r || (a = n.subParser("makeMarkdown.header")(e, t, 6) + "\n\n")
                break
              case "p":
                r || (a = n.subParser("makeMarkdown.paragraph")(e, t) + "\n\n")
                break
              case "blockquote":
                r || (a = n.subParser("makeMarkdown.blockquote")(e, t) + "\n\n")
                break
              case "hr":
                r || (a = n.subParser("makeMarkdown.hr")(e, t) + "\n\n")
                break
              case "ol":
                r || (a = n.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n")
                break
              case "ul":
                r || (a = n.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n")
                break
              case "precode":
                r || (a = n.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n")
                break
              case "pre":
                r || (a = n.subParser("makeMarkdown.pre")(e, t) + "\n\n")
                break
              case "table":
                r || (a = n.subParser("makeMarkdown.table")(e, t) + "\n\n")
                break
              case "code":
                a = n.subParser("makeMarkdown.codeSpan")(e, t)
                break
              case "em":
              case "i":
                a = n.subParser("makeMarkdown.emphasis")(e, t)
                break
              case "strong":
              case "b":
                a = n.subParser("makeMarkdown.strong")(e, t)
                break
              case "del":
                a = n.subParser("makeMarkdown.strikethrough")(e, t)
                break
              case "a":
                a = n.subParser("makeMarkdown.links")(e, t)
                break
              case "img":
                a = n.subParser("makeMarkdown.image")(e, t)
                break
              default:
                a = e.outerHTML + "\n\n"
            }
            return a
          }),
          n.subParser("makeMarkdown.paragraph", function (e, t) {
            var r = ""
            if (e.hasChildNodes())
              for (var a = e.childNodes, i = a.length, o = 0; o < i; ++o)
                r += n.subParser("makeMarkdown.node")(a[o], t)
            return (r = r.trim())
          }),
          n.subParser("makeMarkdown.pre", function (e, t) {
            var n = e.getAttribute("prenum")
            return "<pre>" + t.preList[n] + "</pre>"
          }),
          n.subParser("makeMarkdown.strikethrough", function (e, t) {
            var r = ""
            if (e.hasChildNodes()) {
              r += "~~"
              for (var a = e.childNodes, i = a.length, o = 0; o < i; ++o)
                r += n.subParser("makeMarkdown.node")(a[o], t)
              r += "~~"
            }
            return r
          }),
          n.subParser("makeMarkdown.strong", function (e, t) {
            var r = ""
            if (e.hasChildNodes()) {
              r += "**"
              for (var a = e.childNodes, i = a.length, o = 0; o < i; ++o)
                r += n.subParser("makeMarkdown.node")(a[o], t)
              r += "**"
            }
            return r
          }),
          n.subParser("makeMarkdown.table", function (e, t) {
            var r,
              a,
              i = "",
              o = [[], []],
              s = e.querySelectorAll("thead>tr>th"),
              l = e.querySelectorAll("tbody>tr")
            for (r = 0; r < s.length; ++r) {
              var c = n.subParser("makeMarkdown.tableCell")(s[r], t),
                u = "---"
              if (s[r].hasAttribute("style"))
                switch (
                  s[r].getAttribute("style").toLowerCase().replace(/\s/g, "")
                ) {
                  case "text-align:left;":
                    u = ":---"
                    break
                  case "text-align:right;":
                    u = "---:"
                    break
                  case "text-align:center;":
                    u = ":---:"
                }
              ;(o[0][r] = c.trim()), (o[1][r] = u)
            }
            for (r = 0; r < l.length; ++r) {
              var d = o.push([]) - 1,
                p = l[r].getElementsByTagName("td")
              for (a = 0; a < s.length; ++a) {
                var h = " "
                void 0 !== p[a] &&
                  (h = n.subParser("makeMarkdown.tableCell")(p[a], t)),
                  o[d].push(h)
              }
            }
            var g = 3
            for (r = 0; r < o.length; ++r)
              for (a = 0; a < o[r].length; ++a) {
                var f = o[r][a].length
                f > g && (g = f)
              }
            for (r = 0; r < o.length; ++r) {
              for (a = 0; a < o[r].length; ++a)
                1 === r
                  ? ":" === o[r][a].slice(-1)
                    ? (o[r][a] =
                        n.helper.padEnd(o[r][a].slice(-1), g - 1, "-") + ":")
                    : (o[r][a] = n.helper.padEnd(o[r][a], g, "-"))
                  : (o[r][a] = n.helper.padEnd(o[r][a], g))
              i += "| " + o[r].join(" | ") + " |\n"
            }
            return i.trim()
          }),
          n.subParser("makeMarkdown.tableCell", function (e, t) {
            var r = ""
            if (!e.hasChildNodes()) return ""
            for (var a = e.childNodes, i = a.length, o = 0; o < i; ++o)
              r += n.subParser("makeMarkdown.node")(a[o], t, !0)
            return r.trim()
          }),
          n.subParser("makeMarkdown.txt", function (e) {
            var t = e.nodeValue
            return (
              (t = (t = t.replace(/ +/g, " ")).replace(/¨NBSP;/g, " ")),
              (t = (t = (t = (t = (t = (t = (t = (t = (t =
                n.helper.unescapeHTMLEntities(t)).replace(
                /([*_~|`])/g,
                "\\$1"
              )).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(
                /^(\s*)([-=]{3,})(\s*)$/,
                "$1\\$2$3"
              )).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(
                /^( {0,3})([+-])/gm,
                "$1\\$2"
              )).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(
                /^ {0,3}\[([\S \t]*?)]:/gm,
                "\\[$1]:"
              ))
            )
          })
        e.exports ? (e.exports = n) : (this.showdown = n)
      }.call(Lt))
    })
  function Nt(e) {
    switch (e.type) {
      case "basic":
        return (function (e = null, t = null) {
          return {
            name: "Authorization",
            value: "Basic " + btoa(`${e || ""}:${t || ""}`),
          }
        })(e.username, e.password)
      case "bearer":
        return (
          (t = e.token),
          { name: "Authorization", value: `${e.prefix || "Bearer"} ${t}` }
        )
      case "oauth1":
        return (function (e) {
          const {
            callback: t,
            consumerKey: n,
            nonce: r,
            signatureMethod: a,
            timestamp: i,
            tokenKey: o,
          } = e
          return {
            name: "Authorization",
            value:
              `OAuth oauth_callback="${t}",\noauth_consumer_key="${n}",\noauth_nonce="${
                r || "{{oauth_nonce}}"
              }",\noauth_signature="{{oauth_signature}}",\noauth_signature_method="${a}",\noauth_timestamp="${
                i || 1103493600
              }",\noauth_token="${o}",\noauth_version="1.0"`
                .split("\n")
                .join(" "),
          }
        })(e)
      case "oauth2":
        return {
          name: "Authorization",
          value: 'OAuth {{params}}, oauth_version="2.0"',
        }
      case "hawk":
        return {
          name: "Authorization",
          value: `Hawk id="${e.id}", ts="1103493600", nonce="{{hawk_nonce}}", mac="{{hawk_mac}}"`,
        }
      case "ntlm":
        return { name: "Authorization", value: "NTLM {{ntlm_token}}" }
      case "asap":
        return { name: "Authorization", value: "Bearer {{jwt_token}}" }
      default:
        return { name: "Authorization", value: "{{authorization}}" }
    }
    var t
  }
  function Pt(e, t) {
    const n = t.parameters
    return n && n.length
      ? ((e += "?"),
        (e += n
          .map(
            (e) =>
              `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
          )
          .join("&")))
      : e
  }
  function Rt(e) {
    return JSON.stringify(e).slice(1, -1)
  }
  function Ht(e, t) {
    let n = `curl "${Pt(e, t)}" \\\n`
    return (
      t.headers.forEach((e) => {
        n += `  -H '${e.name}: ${e.value || ""}' \\\n`
      }),
      t.authHeader &&
        (n += `  -H '${t.authHeader.name}: ${Rt(
          t.authHeader.value || ""
        )}' \\\n`),
      (n += `  -X ${t.method} \\\n`),
      t.cookies &&
        t.cookies.length &&
        t.cookies.forEach((e) => {
          n += `  -b '${e.key}'='${e.value}' \\\n`
        }),
      t.body &&
        t.body.params &&
        t.body.params.length &&
        t.body.params.forEach((e) => {
          if (null === e.value) return !1
          e.value.indexOf("'") >= 0 && e.value.indexOf('"') >= 0
            ? (n += `  -F "${e.name}=${e.value.replace('"', '\\"')}"`)
            : e.value.indexOf("'") >= 0
            ? (n += `  -F "${e.name}=${e.value}"`)
            : (e.value.indexOf('"'), (n += `  -F '${e.name}=${e.value}'`)),
            (n += " \\\n")
        }),
      t.body &&
        t.body.text &&
        (n += `  -d '${t.body.text.replace(/\t/g, "  ")}' \\\n`),
      n.slice(0, -2)
    )
  }
  function zt(e, t) {
    let n = "",
      r = !1
    t.body &&
      "multipart/form-data" === t.body.mimeType &&
      ((r = !0),
      (n += "const form = new FormData();\n"),
      t.body.params.forEach((e) => {
        n += `form.append("${e.name}", "${e.value}");\n`
      }),
      (n += "\n")),
      (n += `fetch("${Pt(e, t)}", `)
    const a = { method: t.method }
    var i, o
    return (
      t.headers &&
        t.headers.length &&
        ((a.headers = {}),
        t.headers.forEach((e) => {
          a.headers[e.name] = e.value
        })),
      t.authHeader &&
        (a.headers || (a.headers = {}),
        (a.headers[t.authHeader.name] = t.authHeader.value)),
      t.cookies &&
        t.cookies.length &&
        (a.headers || (a.headers = {}),
        (a.headers.cookie = t.cookies
          .map(
            (e) => `${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`
          )
          .join("; "))),
      !r &&
        t.body &&
        "multipart/form-data" !== t.body.mimeType &&
        (a.body =
          ((i = t.body.mimeType),
          (o = t.body),
          "application/json" === i && o.text
            ? JSON.parse(o.text)
            : "application/x-www-form-urlencoded" === i
            ? o.params
                .map(
                  (e) =>
                    `${encodeURIComponent(e.name)}=${encodeURIComponent(
                      e.value
                    )}`
                )
                .join("&")
            : o.text)),
      r && (a.body = "{{formVariable}}"),
      (n += JSON.stringify(a, null, 2)),
      r && (n = n.replace('"{{formVariable}}"', "form")),
      (n += ")\n  .then(response => console.log(response))\n"),
      (n += "  .catch(err => console.error(err));"),
      n
    )
  }
  function qt(e, t) {
    let n = "import requests\n\n"
    if (((n += `url = '${e}'\n`), t.parameters && t.parameters.length)) {
      const e = {}
      t.parameters.forEach((t) => {
        e[t.name] = t.value
      }),
        (n += `querystring = ${JSON.stringify(e)}\n`)
    }
    const r = {}
    t.authHeader && (r[t.authHeader.name] = t.authHeader.value),
      t.headers &&
        t.headers.length &&
        t.headers.forEach((e) => {
          r[e.name] = e.value
        }),
      t.cookies &&
        t.cookies.length &&
        (r.cookie = t.cookies
          .map(
            (e) => `${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`
          )
          .join("; ")),
      r && (n += `headers = ${JSON.stringify(r, null, 2)}\n`)
    const a = (function (e) {
      const t = e.mimeType
      if ("application/x-www-form-urlencoded" === t)
        return (
          "payload = " +
          e.params
            .map(
              (e) =>
                `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
            )
            .join("&")
        )
      if ("multipart/form-data" === t) {
        const t = {},
          n = {}
        return (
          e.params.forEach((e) => {
            "file" === e.type ? (n[e.name] = e.value) : (t[e.name] = e.value)
          }),
          `payload = ${JSON.stringify(t, null, 2)}\n\nfiles = ${JSON.stringify(
            n,
            null,
            2
          )}`
        )
      }
      return "application/json" === t && e.text
        ? "payload = " + JSON.stringify(JSON.parse(e.text), null, 2)
        : "payload = " + e.text
    })(t.body)
    return (
      a && (n += a + "\n"),
      (n += `\nresponse = requests.request('${t.method}', url, data=payload, headers=headers, files=files)\n`),
      (n += "print(response.text)"),
      n
    )
  }
  function Bt(e) {
    const t = e.mimeType
    if ("application/x-www-form-urlencoded" === t)
      return e.params
        .map(
          (e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
        )
        .join("&")
    if ("multipart/form-data" === t) {
      const t = "-----011000010111000001101001"
      return `"${Rt(
        e.params
          .map(
            (e) =>
              `${t}\nContent-Disposition: form-data; name="${e.name}"\n\n${e.value}`
          )
          .join("\n")
      )}\n${t}--"`
    }
    return JSON.stringify(e.text)
  }
  function Dt(e, t) {
    const n = (e = Pt(e, t)).startsWith("https://")
    let r = "require 'uri'\nrequire 'net/http'\n"
    if (
      (n && (r += "require 'openssl'\n"),
      (r += `\nurl = URI("${e}")\n\nhttp = Net::HTTP.new(url.host, url.port)\n`),
      n &&
        (r +=
          "http.use_ssl = true\nhttp.verify_mode = OpenSSL::SSL::VERIFY_NONE\n"),
      (r += `\nrequest = Net::HTTP::${(function (e) {
        switch (e) {
          case "GET":
            return "Get"
          case "POST":
            return "Post"
          case "PATCH":
            return "Patch"
          case "PUT":
            return "Put"
          case "DELETE":
            return "Delete"
          default:
            return "{{METHOD}}"
        }
      })(t.method)}.new(url)\n`),
      t.cookies && t.cookies.length)
    ) {
      const e = []
      t.cookies.forEach((t) =>
        e.push(`${encodeURIComponent(t.key)}=${encodeURIComponent(t.value)}`)
      ),
        (r += `request["cookie"] = '${e.join("; ")}'\n`)
    }
    if (
      (t.headers &&
        t.headers.length &&
        t.headers.forEach((e) => {
          r += `request["${e.name}"] = ${JSON.stringify(e.value)}\n`
        }),
      t.authHeader &&
        (r += `request["${t.authHeader.name}"] = ${JSON.stringify(
          t.authHeader.value
        )}\n`),
      t.body)
    ) {
      const e = Bt(t.body)
      e && (r += `request.body = ${e}\n`)
    }
    return (
      (r += "\nresponse = http.request(request)\nputs response.read_body"), r
    )
  }
  function Vt(e, t) {
    let n =
      "<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  "
    const r = [
        `CURLOPT_URL => "${Pt(e, t)}"`,
        "CURLOPT_RETURNTRANSFER => true",
        'CURLOPT_ENCODING => ""',
        "CURLOPT_MAXREDIRS => 10",
        "CURLOPT_TIMEOUT => 30",
        "CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1",
        `CURLOPT_CUSTOMREQUEST => "${t.method}"`,
      ],
      a = Bt(t.body)
    if (
      (a && r.push("CURLOPT_POSTFIELDS => " + a), t.cookies && t.cookies.length)
    ) {
      const e = []
      t.cookies.forEach((t) =>
        e.push(`${encodeURIComponent(t.key)}=${encodeURIComponent(t.value)}`)
      ),
        r.push(`CURLOPT_COOKIE => '${e.join("; ")}'`)
    }
    const i = []
    return (
      t.headers &&
        t.headers.length &&
        t.headers.forEach((e) => i.push(`${e.name}: ${Rt(e.value)}`)),
      t.authHeader && i.push(`${t.authHeader.name}: ${t.authHeader.value}`),
      i.length &&
        r.push(`CURLOPTS_HTTPHEADER => array(\n    ${i.join(",\n    ")}\n  )`),
      (n +=
        r.join(",\n  ") +
        '\n));\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}'),
      n
    )
  }
  function Ut(e, t) {
    const n =
      t.body &&
      (function (e) {
        const t = e.mimeType
        if ("application/x-www-form-urlencoded" === t)
          return (
            '"' +
            e.params
              .map(
                (e) =>
                  `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
              )
              .join("&") +
            '"'
          )
        if ("multipart/form-data" === t) {
          const t = "-----011000010111000001101001",
            n = e.params
              .map(
                (e) =>
                  `${t}\nContent-Disposition: form-data; name="${e.name}"\n\n${e.value}`
              )
              .join("\n")
          return `"${escape(n)}\n${t}--"`
        }
        return JSON.stringify(e.text)
      })(t.body)
    let r = `package main\n\nimport (\n  "fmt"${
      n ? '\n"strings"' : ""
    }\n  "net/http"\n  "io/ioutil"\n)\n\nfunc main() {\n\n  `
    if (
      ((r += `url := "${Pt(e, t)}"\n`),
      n && (r += `  payload := strings.NewReader(${n})\n`),
      (r += `  req, _ := http.NewRequest("${t.method}" url, ${
        n ? "payload" : "nil"
      })\n\n`),
      t.cookies && t.cookies.length)
    ) {
      const e = []
      t.cookies.forEach((t) =>
        e.push(`${encodeURIComponent(t.key)}=${encodeURIComponent(t.value)}`)
      ),
        (r += `  req.Header.Add("cookie", ${JSON.stringify(e.join(";"))})\n`)
    }
    return (
      t.headers.forEach((e) => {
        r += `  req.Header.Add("${e.name}", ${JSON.stringify(e.value)})\n`
      }),
      t.authHeader &&
        (r += `  req.Header.Add("${t.authHeader.name}", ${JSON.stringify(
          t.authHeader.value
        )})\n`),
      (r +=
        "  res, _ := http.DefaultClient.Do(req)\n\n  defer res.Body.Close()\n  body, _ := ioutil.ReadAll(res.Body)\n\n  fmt.Println(res)\n  fmt.Println(string(body))\n\n}"),
      r
    )
  }
  class Ft {
    constructor(e, t, n) {
      ;(this.request = e),
        (this.url = t),
        (this.cookiejars = n),
        (this.code = null),
        (this.request.cookies = this.appendCookies()),
        this.request.authentication &&
          this.request.authentication.type &&
          (this.request.authHeader = Nt(this.request.authentication))
    }
    generate(e) {
      switch (e) {
        case "curl":
          this.code = Ht
          break
        case "javascript":
          this.code = zt
          break
        case "python":
          this.code = qt
          break
        case "node":
          return (
            "const fetch = require('node-fetch');\n\n" +
            zt(this.url, this.request)
          )
        case "ruby":
          this.code = Dt
          break
        case "php":
          this.code = Vt
          break
        case "golang":
          this.code = Ut
          break
        default:
          return "Not implemented yet..."
      }
      return this.code(this.url, this.request)
    }
    appendCookies() {
      const e = []
      return (
        this.cookiejars.forEach((t) => {
          t.cookies &&
            t.cookies.length &&
            t.cookies.forEach((t) => {
              this.url &&
                this.url.includes(t.domain) &&
                ("/" === t.path || this.url.includes(t.path)) &&
                e.push({ key: t.key, value: t.value })
            })
        }),
        e
      )
    }
  }
  function Gt(e) {
    return e.replace(
      /{{\s*(_.)?([a-zA-Z0-9_]+)\s*}}/g,
      '<span class="env-variable">$2</span>'
    )
  }
  class Wt {
    constructor(e) {
      ;(this.body = e), (this.mime = e.mimeType)
    }
    __parseJSON() {
      if (!this.body.text) return
      this.body.text = this.body.text.replace(
        new RegExp("{{.*}}", "g"),
        '"!!Missing declaration in environment!!"'
      )
      return {
        type: "plain",
        note: "json",
        text: `<pre>${JSON.stringify(
          JSON.parse(this.body.text),
          null,
          2
        )}</pre>`,
      }
    }
    __parseMultipart() {
      return {
        type: "array",
        note: "formdata",
        rows: this.body.params.map((e) => ({
          name: e.name,
          value: e.value,
          description: e.description,
        })),
      }
    }
    __parsePlain() {
      return {
        type: "plain",
        note: "raw",
        text: `<pre>${this.body.text}</pre>`,
      }
    }
    parse() {
      switch (this.mime) {
        case "application/json":
          return this.__parseJSON()
        case "multipart/form-data":
        case "application/x-www-form-urlencoded":
          return this.__parseMultipart()
        default:
          return this.__parsePlain()
      }
    }
  }
  class Kt {
    constructor(e) {
      this.req = e
    }
    params() {
      const e = []
      return (
        this.req.parameters.forEach((t) => {
          e.push({ name: t.name, value: t.value, description: t.description })
        }),
        { title: "Parameters", rows: e }
      )
    }
    headers() {
      const e = []
      if (
        (this.req.headers.forEach((t) => {
          e.push({
            name: t.name,
            value: Gt(t.value || ""),
            description: t.description,
          })
        }),
        this.req.authentication && this.req.authentication.type)
      ) {
        const t = Nt(this.req.authentication)
        e.push({ name: t.name, value: `<pre>${Gt(t.value)}</pre>` })
      }
      return { title: "Headers", rows: e }
    }
    body() {
      const e = new Wt(this.req.body).parse()
      switch (e.type) {
        case "array":
          return { title: "Body", note: e.note, rows: e.rows }
        case "plain":
          return { title: "Body", note: e.note, text: e.text }
      }
    }
  }
  function Jt(e, t, n) {
    const r = Object.create(e)
    return (r.row = t[n]), r
  }
  function Zt(e) {
    var t,
      n,
      r = e.data.note + ""
    return {
      c() {
        ;(t = h("span")), (n = g(r)), _(t, "class", "note svelte-1wblyuk")
      },
      m(e, r) {
        u(e, t, r), c(t, n)
      },
      p(e, t) {
        e.data && r !== (r = t.data.note + "") && y(n, r)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function Qt(e) {
    var t,
      n = e.data.text + ""
    return {
      c() {
        _((t = h("div")), "class", "raw-data")
      },
      m(e, r) {
        u(e, t, r), (t.innerHTML = n)
      },
      p(e, r) {
        e.data && n !== (n = r.data.text + "") && (t.innerHTML = n)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function Xt(e) {
    var t
    let n = e.data.rows,
      r = []
    for (let t = 0; t < n.length; t += 1) r[t] = en(Jt(e, n, t))
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c()
        t = m()
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n)
        u(e, t, n)
      },
      p(e, a) {
        if (e.data) {
          let i
          for (n = a.data.rows, i = 0; i < n.length; i += 1) {
            const o = Jt(a, n, i)
            r[i]
              ? r[i].p(e, o)
              : ((r[i] = en(o)), r[i].c(), r[i].m(t.parentNode, t))
          }
          for (; i < r.length; i += 1) r[i].d(1)
          r.length = n.length
        }
      },
      d(e) {
        p(r, e), e && d(t)
      },
    }
  }
  function Yt(e) {
    var t,
      n,
      r,
      a = e.row.description + ""
    return {
      c() {
        ;(t = h("div")),
          (r = f()),
          (n = new $(a, r)),
          _(t, "class", "row description svelte-1wblyuk")
      },
      m(e, a) {
        u(e, t, a), n.m(t), c(t, r)
      },
      p(e, t) {
        e.data && a !== (a = t.row.description + "") && n.p(a)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function en(e) {
    var t,
      n,
      r,
      a,
      i,
      o,
      s,
      l = e.row.name + "",
      p = e.row.value + "",
      b = e.row.description && Yt(e)
    return {
      c() {
        ;(t = h("div")),
          (n = h("div")),
          (r = g(l)),
          (a = f()),
          (i = h("div")),
          (o = f()),
          b && b.c(),
          (s = m()),
          _(n, "class", "name svelte-1wblyuk"),
          _(i, "class", "value svelte-1wblyuk"),
          _(t, "class", "row svelte-1wblyuk")
      },
      m(e, l) {
        u(e, t, l),
          c(t, n),
          c(n, r),
          c(t, a),
          c(t, i),
          (i.innerHTML = p),
          u(e, o, l),
          b && b.m(e, l),
          u(e, s, l)
      },
      p(e, t) {
        e.data && l !== (l = t.row.name + "") && y(r, l),
          e.data && p !== (p = t.row.value + "") && (i.innerHTML = p),
          t.row.description
            ? b
              ? b.p(e, t)
              : ((b = Yt(t)).c(), b.m(s.parentNode, s))
            : b && (b.d(1), (b = null))
      },
      d(e) {
        e && (d(t), d(o)), b && b.d(e), e && d(s)
      },
    }
  }
  function tn(t) {
    var n,
      r,
      a,
      i,
      o,
      s,
      l,
      p = t.data.title + "",
      m = t.data.note && Zt(t),
      b = t.data.text && Qt(t),
      v = t.data.rows && t.data.rows.length && Xt(t)
    return {
      c() {
        ;(n = h("div")),
          (r = h("div")),
          (a = h("span")),
          (i = g(p)),
          (o = f()),
          m && m.c(),
          (s = f()),
          b && b.c(),
          (l = f()),
          v && v.c(),
          _(a, "class", "title svelte-1wblyuk"),
          _(r, "class", "header svelte-1wblyuk"),
          _(n, "class", "table svelte-1wblyuk")
      },
      m(e, t) {
        u(e, n, t),
          c(n, r),
          c(r, a),
          c(a, i),
          c(r, o),
          m && m.m(r, null),
          c(n, s),
          b && b.m(n, null),
          c(n, l),
          v && v.m(n, null)
      },
      p(e, t) {
        e.data && p !== (p = t.data.title + "") && y(i, p),
          t.data.note
            ? m
              ? m.p(e, t)
              : ((m = Zt(t)).c(), m.m(r, null))
            : m && (m.d(1), (m = null)),
          t.data.text
            ? b
              ? b.p(e, t)
              : ((b = Qt(t)).c(), b.m(n, l))
            : b && (b.d(1), (b = null)),
          t.data.rows && t.data.rows.length
            ? v
              ? v.p(e, t)
              : ((v = Xt(t)).c(), v.m(n, null))
            : v && (v.d(1), (v = null))
      },
      i: e,
      o: e,
      d(e) {
        e && d(n), m && m.d(), b && b.d(), v && v.d()
      },
    }
  }
  function nn(e, t, n) {
    let { data: r } = t
    return (
      (e.$set = (e) => {
        "data" in e && n("data", (r = e.data))
      }),
      { data: r }
    )
  }
  class rn extends re {
    constructor(e) {
      super(), ne(this, e, nn, tn, o, ["data"])
    }
  }
  function an(e, t, n) {
    const r = Object.create(e)
    return (r.example = t[n]), r
  }
  function on(e) {
    var t
    return {
      c() {
        _((t = h("div")), "class", "description")
      },
      m(n, r) {
        u(n, t, r), (t.innerHTML = e.description)
      },
      p(e, n) {
        e.description && (t.innerHTML = n.description)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function sn(e) {
    var t,
      n = new rn({ props: { data: e.content.params() } })
    return {
      c() {
        n.$$.fragment.c()
      },
      m(e, r) {
        ee(n, e, r), (t = !0)
      },
      p(e, t) {
        var r = {}
        e.content && (r.data = t.content.params()), n.$set(r)
      },
      i(e) {
        t || (Z(n.$$.fragment, e), (t = !0))
      },
      o(e) {
        Q(n.$$.fragment, e), (t = !1)
      },
      d(e) {
        te(n, e)
      },
    }
  }
  function ln(e) {
    var t,
      n = new rn({ props: { data: e.content.headers() } })
    return {
      c() {
        n.$$.fragment.c()
      },
      m(e, r) {
        ee(n, e, r), (t = !0)
      },
      p(e, t) {
        var r = {}
        e.content && (r.data = t.content.headers()), n.$set(r)
      },
      i(e) {
        t || (Z(n.$$.fragment, e), (t = !0))
      },
      o(e) {
        Q(n.$$.fragment, e), (t = !1)
      },
      d(e) {
        te(n, e)
      },
    }
  }
  function cn(e) {
    var t,
      n = new rn({ props: { data: e.content.body() } })
    return {
      c() {
        n.$$.fragment.c()
      },
      m(e, r) {
        ee(n, e, r), (t = !0)
      },
      p(e, t) {
        var r = {}
        e.content && (r.data = t.content.body()), n.$set(r)
      },
      i(e) {
        t || (Z(n.$$.fragment, e), (t = !0))
      },
      o(e) {
        Q(n.$$.fragment, e), (t = !1)
      },
      d(e) {
        te(n, e)
      },
    }
  }
  function un(e) {
    var t
    let n = e.reqData.exampleResponses,
      r = []
    for (let t = 0; t < n.length; t += 1) r[t] = pn(an(e, n, t))
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c()
        t = m()
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n)
        u(e, t, n)
      },
      p(e, a) {
        if (e.reqData || e.getClassForStatusCode || e.hljs) {
          let i
          for (n = a.reqData.exampleResponses, i = 0; i < n.length; i += 1) {
            const o = an(a, n, i)
            r[i]
              ? r[i].p(e, o)
              : ((r[i] = pn(o)), r[i].c(), r[i].m(t.parentNode, t))
          }
          for (; i < r.length; i += 1) r[i].d(1)
          r.length = n.length
        }
      },
      d(e) {
        p(r, e), e && d(t)
      },
    }
  }
  function dn(e) {
    var t,
      n,
      r,
      a,
      i,
      o,
      s,
      p,
      m,
      b,
      v = e.example.code && e.example.code.length ? " - " + e.example.code : "",
      w = gt.highlightAuto(e.example.value).value + ""
    return {
      c() {
        ;(t = h("div")),
          (n = h("div")),
          (r = h("div")),
          (a = g("Example\n                                response")),
          (i = g(v)),
          (o = g(":")),
          (s = f()),
          (p = h("pre")),
          (m = f()),
          _(r, "class", "title svelte-fapltk"),
          _(n, "class", "header svelte-fapltk"),
          _(p, "class", "svelte-fapltk"),
          _(
            t,
            "class",
            (b =
              l(
                "code-example example-response " +
                  e.getClassForStatusCode(e.example.code)
              ) + " svelte-fapltk")
          )
      },
      m(e, l) {
        u(e, t, l),
          c(t, n),
          c(n, r),
          c(r, a),
          c(r, i),
          c(r, o),
          c(t, s),
          c(t, p),
          (p.innerHTML = w),
          c(t, m)
      },
      p(e, n) {
        e.reqData &&
          v !==
            (v =
              n.example.code && n.example.code.length
                ? " - " + n.example.code
                : "") &&
          y(i, v),
          e.reqData &&
            w !== (w = gt.highlightAuto(n.example.value).value + "") &&
            (p.innerHTML = w),
          e.reqData &&
            b !==
              (b =
                l(
                  "code-example example-response " +
                    n.getClassForStatusCode(n.example.code)
                ) + " svelte-fapltk") &&
            _(t, "class", b)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function pn(e) {
    var t,
      n = e.example.value && dn(e)
    return {
      c() {
        n && n.c(), (t = m())
      },
      m(e, r) {
        n && n.m(e, r), u(e, t, r)
      },
      p(e, r) {
        r.example.value
          ? n
            ? n.p(e, r)
            : ((n = dn(r)).c(), n.m(t.parentNode, t))
          : n && (n.d(1), (n = null))
      },
      d(e) {
        n && n.d(e), e && d(t)
      },
    }
  }
  function hn(e) {
    var t,
      n,
      r,
      a,
      i,
      o,
      s,
      p,
      m,
      b,
      v,
      w,
      k,
      x,
      E,
      S,
      $,
      I,
      C,
      L,
      T,
      M,
      j,
      O,
      A,
      N,
      P,
      R,
      H,
      z,
      q,
      B,
      D,
      V,
      U = e.request.method + "",
      F = e.reqData.name + "",
      G = e.reqData.url + "",
      W = e.description && on(e),
      X = e.request.parameters && e.request.parameters.length && sn(e),
      Y =
        ((e.request.headers && e.request.headers.length) ||
          (e.request.authentication && e.request.authentication.type)) &&
        ln(e),
      ee =
        e.request.body &&
        (e.request.body.text || e.request.body.params) &&
        cn(e),
      te =
        e.reqData.exampleResponses && e.reqData.exampleResponses.length && un(e)
    return {
      c() {
        ;(t = h("div")),
          (n = h("div")),
          (r = h("div")),
          (a = g(" ")),
          (o = f()),
          (s = h("h3")),
          (p = h("strong")),
          (m = g(U)),
          (v = f()),
          (w = g(F)),
          (k = f()),
          (x = h("pre")),
          (E = f()),
          W && W.c(),
          (S = f()),
          ($ = h("div")),
          X && X.c(),
          (I = f()),
          Y && Y.c(),
          (C = f()),
          ee && ee.c(),
          (L = f()),
          (T = h("hr")),
          (M = f()),
          (j = h("div")),
          (O = h("div")),
          (A = h("div")),
          ((N = h("div")).textContent = "Example request:"),
          (P = f()),
          (R = h("div")),
          (H = h("a")),
          (z = g(e.copyText)),
          (q = f()),
          (B = h("pre")),
          (D = f()),
          te && te.c(),
          _(r, "class", "anchor svelte-fapltk"),
          _(r, "id", (i = e.request._id)),
          _(
            p,
            "class",
            (b = l(e.request.method.toLowerCase()) + " svelte-fapltk")
          ),
          _(s, "class", "request-title"),
          _(x, "class", "url svelte-fapltk"),
          _($, "class", "tables"),
          _(n, "class", "left"),
          _(N, "class", "title svelte-fapltk"),
          _(H, "href", "javascript:"),
          _(H, "class", "svelte-fapltk"),
          _(R, "class", "copy"),
          _(A, "class", "header svelte-fapltk"),
          _(B, "class", "svelte-fapltk"),
          _(O, "class", "code-example svelte-fapltk"),
          _(j, "class", "right"),
          _(t, "class", "row")
      },
      m(i, l) {
        u(i, t, l),
          c(t, n),
          c(n, r),
          c(r, a),
          c(n, o),
          c(n, s),
          c(s, p),
          c(p, m),
          c(s, v),
          c(s, w),
          c(n, k),
          c(n, x),
          (x.innerHTML = G),
          c(n, E),
          W && W.m(n, null),
          c(n, S),
          c(n, $),
          X && X.m($, null),
          c($, I),
          Y && Y.m($, null),
          c($, C),
          ee && ee.m($, null),
          c(n, L),
          c(n, T),
          c(t, M),
          c(t, j),
          c(j, O),
          c(O, A),
          c(A, N),
          c(A, P),
          c(A, R),
          c(R, H),
          c(H, z),
          e.a_binding(H),
          c(O, q),
          c(O, B),
          (B.innerHTML = e.exampleHTML),
          e.pre1_binding(B),
          c(j, D),
          te && te.m(j, null),
          (V = !0)
      },
      p(e, t) {
        ;(V && !e.request) || i === (i = t.request._id) || _(r, "id", i),
          (V && !e.request) || U === (U = t.request.method + "") || y(m, U),
          (V && !e.request) ||
            b === (b = l(t.request.method.toLowerCase()) + " svelte-fapltk") ||
            _(p, "class", b),
          (V && !e.reqData) || F === (F = t.reqData.name + "") || y(w, F),
          (V && !e.reqData) ||
            G === (G = t.reqData.url + "") ||
            (x.innerHTML = G),
          t.description
            ? W
              ? W.p(e, t)
              : ((W = on(t)).c(), W.m(n, S))
            : W && (W.d(1), (W = null)),
          t.request.parameters && t.request.parameters.length
            ? X
              ? (X.p(e, t), Z(X, 1))
              : ((X = sn(t)).c(), Z(X, 1), X.m($, I))
            : X &&
              (K(),
              Q(X, 1, 1, () => {
                X = null
              }),
              J()),
          (t.request.headers && t.request.headers.length) ||
          (t.request.authentication && t.request.authentication.type)
            ? Y
              ? (Y.p(e, t), Z(Y, 1))
              : ((Y = ln(t)).c(), Z(Y, 1), Y.m($, C))
            : Y &&
              (K(),
              Q(Y, 1, 1, () => {
                Y = null
              }),
              J()),
          t.request.body && (t.request.body.text || t.request.body.params)
            ? ee
              ? (ee.p(e, t), Z(ee, 1))
              : ((ee = cn(t)).c(), Z(ee, 1), ee.m($, null))
            : ee &&
              (K(),
              Q(ee, 1, 1, () => {
                ee = null
              }),
              J()),
          (V && !e.copyText) || y(z, t.copyText),
          (V && !e.exampleHTML) || (B.innerHTML = t.exampleHTML),
          t.reqData.exampleResponses && t.reqData.exampleResponses.length
            ? te
              ? te.p(e, t)
              : ((te = un(t)).c(), te.m(j, null))
            : te && (te.d(1), (te = null))
      },
      i(e) {
        V || (Z(X), Z(Y), Z(ee), (V = !0))
      },
      o(e) {
        Q(X), Q(Y), Q(ee), (V = !1)
      },
      d(n) {
        n && d(t),
          W && W.d(),
          X && X.d(),
          Y && Y.d(),
          ee && ee.d(),
          e.a_binding(null),
          e.pre1_binding(null),
          te && te.d()
      },
    }
  }
  function gn(e, t, n) {
    const r = new At.Converter({
      simplifiedAutoLink: !0,
      openLinksInNewWindow: !0,
      excludeTrailingPunctuationFromURLs: !0,
      tables: !0,
    })
    let a,
      i,
      { request: o, env: s, language: l = null, cookiejars: c } = t,
      u = "Copy to clipboard"
    const d = document.createElement("code")
    let p, h, g, f, m, b
    return (
      (e.$set = (e) => {
        "request" in e && n("request", (o = e.request)),
          "env" in e && n("env", (s = e.env)),
          "language" in e && n("language", (l = e.language)),
          "cookiejars" in e && n("cookiejars", (c = e.cookiejars))
      }),
      (e.$$.update = (
        e = {
          request: 1,
          language: 1,
          cookiejars: 1,
          exampleCode: 1,
          code: 1,
          copyButton: 1,
          codeElement: 1,
          clipboard: 1,
          reqData: 1,
        }
      ) => {
        e.request && n("content", (p = new Kt(o))),
          e.request &&
            n(
              "reqData",
              (h = {
                method: o.method,
                url: Gt(o.url),
                name: o.name,
                description: o.description,
                exampleResponses: o.exampleResponses,
              })
            ),
          (e.request || e.language || e.cookiejars) &&
            n(
              "exampleCode",
              (g = ((e, t, n, r) => new Ft(e, t, r).generate(n))(
                o,
                o.url,
                l,
                c
              ))
            ),
          e.language && n("code", (d.className = l), d),
          e.exampleCode && n("code", (d.textContent = g), d),
          e.code && gt.highlightBlock(d),
          e.code && n("exampleHTML", (f = d.outerHTML)),
          (e.copyButton || e.codeElement) &&
            n(
              "clipboard",
              (m =
                a &&
                new Ot(a, {
                  target: function () {
                    return i
                  },
                }))
            ),
          e.clipboard &&
            m &&
            m.on("success", function () {
              n("copyText", (u = "Copied!")),
                setTimeout(() => n("copyText", (u = "Copy to Clipboard")), 5e3)
            }),
          e.clipboard &&
            m &&
            m.on("error", function (e) {
              console.error(e),
                n("copyText", (u = "Failed to copy :(")),
                setTimeout(() => n("copyText", (u = "Copy to Clipboard")), 5e3)
            }),
          e.reqData &&
            n("description", (b = h.description && r.makeHtml(h.description)))
      }),
      {
        request: o,
        env: s,
        language: l,
        cookiejars: c,
        copyText: u,
        copyButton: a,
        codeElement: i,
        getClassForStatusCode: function (e) {
          if (!e) return "default"
          switch (e[0]) {
            case "1":
              return "info"
            case "2":
              return "success"
            case "3":
              return "redirect"
            case "4":
              return "client-error"
            case "5":
              return "server-error"
            default:
              return "default"
          }
        },
        content: p,
        reqData: h,
        exampleHTML: f,
        description: b,
        a_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("copyButton", (a = e))
          })
        },
        pre1_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("codeElement", (i = e))
          })
        },
      }
    )
  }
  class fn extends re {
    constructor(e) {
      super(),
        ne(this, e, gn, hn, o, ["request", "env", "language", "cookiejars"])
    }
  }
  function mn(e, t) {
    return e
      ? (Object.keys(t.data).forEach((n) => {
          e = e.replace(
            new RegExp("{{(\\s*(_.)?" + n + "\\s*)}}", "g"),
            t.data[n]
          )
        }),
        e)
      : null
  }
  function bn(e) {
    var t
    return {
      c() {
        _((t = h("div")), "class", "description")
      },
      m(n, r) {
        u(n, t, r), (t.innerHTML = e.description)
      },
      p(e, n) {
        e.description && (t.innerHTML = n.description)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function _n(t) {
    var n,
      r,
      a,
      i,
      o,
      s,
      l,
      p,
      m,
      b = t.groupData.name + "",
      v = t.description && bn(t)
    return {
      c() {
        ;(n = h("div")),
          (r = h("div")),
          (a = h("h2")),
          (i = g(b)),
          (o = f()),
          v && v.c(),
          (s = f()),
          (l = h("hr")),
          (p = f()),
          (m = h("div")),
          _(r, "class", "left"),
          _(m, "class", "right"),
          _(n, "class", "row")
      },
      m(e, t) {
        u(e, n, t),
          c(n, r),
          c(r, a),
          c(a, i),
          c(r, o),
          v && v.m(r, null),
          c(r, s),
          c(r, l),
          c(n, p),
          c(n, m)
      },
      p(e, t) {
        e.groupData && b !== (b = t.groupData.name + "") && y(i, b),
          t.description
            ? v
              ? v.p(e, t)
              : ((v = bn(t)).c(), v.m(r, s))
            : v && (v.d(1), (v = null))
      },
      i: e,
      o: e,
      d(e) {
        e && d(n), v && v.d()
      },
    }
  }
  function vn(e, t, n) {
    const r = new At.Converter({
      simplifiedAutoLink: !0,
      openLinksInNewWindow: !0,
      excludeTrailingPunctuationFromURLs: !0,
      tables: !0,
    })
    let a,
      i,
      { group: o, env: s } = t
    return (
      (e.$set = (e) => {
        "group" in e && n("group", (o = e.group)),
          "env" in e && n("env", (s = e.env))
      }),
      (e.$$.update = (e = { group: 1, env: 1, groupData: 1 }) => {
        ;(e.group || e.env) &&
          n(
            "groupData",
            (a = { name: mn(o.name, s), description: mn(o.description, s) })
          ),
          e.groupData &&
            n("description", (i = a.description && r.makeHtml(a.description)))
      }),
      { group: o, env: s, groupData: a, description: i }
    )
  }
  class wn extends re {
    constructor(e) {
      super(), ne(this, e, vn, _n, o, ["group", "env"])
    }
  }
  function yn(e, t, n) {
    const r = Object.create(e)
    return (r.row = t[n]), r
  }
  function kn(e) {
    var t,
      n,
      r = new wn({ props: { group: e.row, env: e.env } }),
      a = new In({
        props: {
          content: [...e.row.requests, ...e.row.children],
          env: e.env,
          language: e.language,
          cookiejars: e.cookiejars,
        },
      })
    return {
      c() {
        r.$$.fragment.c(), (t = f()), a.$$.fragment.c()
      },
      m(e, i) {
        ee(r, e, i), u(e, t, i), ee(a, e, i), (n = !0)
      },
      p(e, t) {
        var n = {}
        e.content && (n.group = t.row), e.env && (n.env = t.env), r.$set(n)
        var i = {}
        e.content && (i.content = [...t.row.requests, ...t.row.children]),
          e.env && (i.env = t.env),
          e.language && (i.language = t.language),
          e.cookiejars && (i.cookiejars = t.cookiejars),
          a.$set(i)
      },
      i(e) {
        n || (Z(r.$$.fragment, e), Z(a.$$.fragment, e), (n = !0))
      },
      o(e) {
        Q(r.$$.fragment, e), Q(a.$$.fragment, e), (n = !1)
      },
      d(e) {
        te(r, e), e && d(t), te(a, e)
      },
    }
  }
  function xn(e) {
    var t,
      n = new fn({
        props: {
          request: e.row,
          env: e.env,
          language: e.language,
          cookiejars: e.cookiejars,
        },
      })
    return {
      c() {
        n.$$.fragment.c()
      },
      m(e, r) {
        ee(n, e, r), (t = !0)
      },
      p(e, t) {
        var r = {}
        e.content && (r.request = t.row),
          e.env && (r.env = t.env),
          e.language && (r.language = t.language),
          e.cookiejars && (r.cookiejars = t.cookiejars),
          n.$set(r)
      },
      i(e) {
        t || (Z(n.$$.fragment, e), (t = !0))
      },
      o(e) {
        Q(n.$$.fragment, e), (t = !1)
      },
      d(e) {
        te(n, e)
      },
    }
  }
  function En(e) {
    var t,
      n,
      r,
      a,
      i = [xn, kn],
      o = []
    function s(e, t) {
      return "request" === t.row._type ? 0 : 1
    }
    return (
      (t = s(0, e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = m())
        },
        m(e, n) {
          o[t].m(e, n), u(e, r, n), (a = !0)
        },
        p(e, a) {
          var l = t
          ;(t = s(0, a)) === l
            ? o[t].p(e, a)
            : (K(),
              Q(o[l], 1, 1, () => {
                o[l] = null
              }),
              J(),
              (n = o[t]) || (n = o[t] = i[t](a)).c(),
              Z(n, 1),
              n.m(r.parentNode, r))
        },
        i(e) {
          a || (Z(n), (a = !0))
        },
        o(e) {
          Q(n), (a = !1)
        },
        d(e) {
          o[t].d(e), e && d(r)
        },
      }
    )
  }
  function Sn(e) {
    var t, n
    let r = e.content,
      a = []
    for (let t = 0; t < r.length; t += 1) a[t] = En(yn(e, r, t))
    const i = (e) =>
      Q(a[e], 1, 1, () => {
        a[e] = null
      })
    return {
      c() {
        for (let e = 0; e < a.length; e += 1) a[e].c()
        t = m()
      },
      m(e, r) {
        for (let t = 0; t < a.length; t += 1) a[t].m(e, r)
        u(e, t, r), (n = !0)
      },
      p(e, n) {
        if (e.content || e.env || e.language || e.cookiejars) {
          let o
          for (r = n.content, o = 0; o < r.length; o += 1) {
            const i = yn(n, r, o)
            a[o]
              ? (a[o].p(e, i), Z(a[o], 1))
              : ((a[o] = En(i)), a[o].c(), Z(a[o], 1), a[o].m(t.parentNode, t))
          }
          for (K(), o = r.length; o < a.length; o += 1) i(o)
          J()
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < r.length; e += 1) Z(a[e])
          n = !0
        }
      },
      o(e) {
        a = a.filter(Boolean)
        for (let e = 0; e < a.length; e += 1) Q(a[e])
        n = !1
      },
      d(e) {
        p(a, e), e && d(t)
      },
    }
  }
  function $n(e, t, n) {
    let { content: r, env: a, language: i, cookiejars: o } = t
    return (
      (e.$set = (e) => {
        "content" in e && n("content", (r = e.content)),
          "env" in e && n("env", (a = e.env)),
          "language" in e && n("language", (i = e.language)),
          "cookiejars" in e && n("cookiejars", (o = e.cookiejars))
      }),
      { content: r, env: a, language: i, cookiejars: o }
    )
  }
  class In extends re {
    constructor(e) {
      super(),
        ne(this, e, $n, Sn, o, ["content", "env", "language", "cookiejars"])
    }
  }
  function Cn(t) {
    var n,
      r,
      a = t.getOptionLabel(t.item, t.filterText) + ""
    return {
      c() {
        _(
          (n = h("div")),
          "class",
          (r = "item " + t.itemClasses + " svelte-1xfc328")
        )
      },
      m(e, t) {
        u(e, n, t), (n.innerHTML = a)
      },
      p(e, t) {
        ;(e.getOptionLabel || e.item || e.filterText) &&
          a !== (a = t.getOptionLabel(t.item, t.filterText) + "") &&
          (n.innerHTML = a),
          e.itemClasses &&
            r !== (r = "item " + t.itemClasses + " svelte-1xfc328") &&
            _(n, "class", r)
      },
      i: e,
      o: e,
      d(e) {
        e && d(n)
      },
    }
  }
  function Ln(e, t, n) {
    let {
        isActive: r = !1,
        isFirst: a = !1,
        isHover: i = !1,
        getOptionLabel: o,
        item: s,
        filterText: l = "",
      } = t,
      c = ""
    return (
      (e.$set = (e) => {
        "isActive" in e && n("isActive", (r = e.isActive)),
          "isFirst" in e && n("isFirst", (a = e.isFirst)),
          "isHover" in e && n("isHover", (i = e.isHover)),
          "getOptionLabel" in e && n("getOptionLabel", (o = e.getOptionLabel)),
          "item" in e && n("item", (s = e.item)),
          "filterText" in e && n("filterText", (l = e.filterText))
      }),
      (e.$$.update = (e = { isActive: 1, isFirst: 1, isHover: 1, item: 1 }) => {
        if (e.isActive || e.isFirst || e.isHover || e.item) {
          const e = []
          r && e.push("active"),
            a && e.push("first"),
            i && e.push("hover"),
            s.isGroupHeader && e.push("groupHeader"),
            s.isGroupItem && e.push("groupItem"),
            n("itemClasses", (c = e.join(" ")))
        }
      }),
      {
        isActive: r,
        isFirst: a,
        isHover: i,
        getOptionLabel: o,
        item: s,
        filterText: l,
        itemClasses: c,
      }
    )
  }
  class Tn extends re {
    constructor(e) {
      super(),
        ne(this, e, Ln, Cn, o, [
          "isActive",
          "isFirst",
          "isHover",
          "getOptionLabel",
          "item",
          "filterText",
        ])
    }
  }
  const Mn = ({ row: e, visible: t, hoverItemIndex: n }) => ({
      item: t,
      i: t,
      hoverItemIndex: n,
    }),
    jn = ({ row: e, visible: t, hoverItemIndex: n }) => ({
      item: e.data,
      i: e.index,
      hoverItemIndex: n,
    })
  function On(e, t, n) {
    const r = Object.create(e)
    return (r.row = t[n]), r
  }
  function An(e, n) {
    var r, a, i, o
    const l = n.$$slots.default,
      p = (function (e, t, n) {
        if (e) {
          const r = s(e, t, n)
          return e[0](r)
        }
      })(l, n, jn)
    return {
      key: e,
      first: null,
      c() {
        ;(r = h("svelte-virtual-list-row")),
          p || (a = g("Missing template")),
          p && p.c(),
          (i = f()),
          w(r, "class", "svelte-p6ehlv"),
          (this.first = r)
      },
      l(e) {
        p && p.l(svelte_virtual_list_row_nodes)
      },
      m(e, t) {
        u(e, r, t), p ? p.m(r, null) : c(r, a), c(r, i), (o = !0)
      },
      p(e, n) {
        p &&
          p.p &&
          (e.$$scope || e.visible || e.hoverItemIndex) &&
          p.p(
            (function (e, n, r, a) {
              return e[1]
                ? t({}, t(n.$$scope.changed || {}, e[1](a ? a(r) : {})))
                : n.$$scope.changed || {}
            })(l, n, e, Mn),
            s(l, n, jn)
          )
      },
      i(e) {
        o || (Z(p, e), (o = !0))
      },
      o(e) {
        Q(p, e), (o = !1)
      },
      d(e) {
        e && d(r), p && p.d(e)
      },
    }
  }
  function Nn(e) {
    var t,
      n,
      r,
      a,
      i,
      o = [],
      s = new Map()
    let l = e.visible
    const p = (e) => e.row.index
    for (let t = 0; t < l.length; t += 1) {
      let n = On(e, l, t),
        r = p(n)
      s.set(r, (o[t] = An(r, n)))
    }
    return {
      c() {
        ;(t = h("svelte-virtual-list-viewport")),
          (n = h("svelte-virtual-list-contents"))
        for (let e = 0; e < o.length; e += 1) o[e].c()
        x(n, "padding-top", e.top + "px"),
          x(n, "padding-bottom", e.bottom + "px"),
          w(n, "class", "svelte-p6ehlv"),
          D(() => e.svelte_virtual_list_viewport_resize_handler.call(t)),
          x(t, "height", e.height),
          w(t, "class", "svelte-p6ehlv"),
          (i = b(t, "scroll", e.handle_scroll))
      },
      m(i, s) {
        u(i, t, s), c(t, n)
        for (let e = 0; e < o.length; e += 1) o[e].m(n, null)
        e.svelte_virtual_list_contents_binding(n),
          (r = (function (e, t) {
            "static" === getComputedStyle(e).position &&
              (e.style.position = "relative")
            const n = document.createElement("object")
            let r
            return (
              n.setAttribute(
                "style",
                "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
              ),
              (n.type = "text/html"),
              (n.tabIndex = -1),
              (n.onload = () => {
                ;(r = n.contentDocument.defaultView),
                  r.addEventListener("resize", t)
              }),
              /Trident/.test(navigator.userAgent)
                ? (e.appendChild(n), (n.data = "about:blank"))
                : ((n.data = "about:blank"), e.appendChild(n)),
              {
                cancel: () => {
                  r &&
                    r.removeEventListener &&
                    r.removeEventListener("resize", t),
                    e.removeChild(n)
                },
              }
            )
          })(t, e.svelte_virtual_list_viewport_resize_handler.bind(t))),
          e.svelte_virtual_list_viewport_binding(t),
          (a = !0)
      },
      p(e, r) {
        const i = r.visible
        K(),
          (o = (function (e, t, n, r, a, i, o, s, l, c, u, d) {
            let p = e.length,
              h = i.length,
              g = p
            const f = {}
            for (; g--; ) f[e[g].key] = g
            const m = [],
              b = new Map(),
              _ = new Map()
            for (g = h; g--; ) {
              const e = d(a, i, g),
                s = n(e)
              let l = o.get(s)
              l ? r && l.p(t, e) : ((l = c(s, e)), l.c()),
                b.set(s, (m[g] = l)),
                s in f && _.set(s, Math.abs(g - f[s]))
            }
            const v = new Set(),
              w = new Set()
            function y(e) {
              Z(e, 1), e.m(s, u), o.set(e.key, e), (u = e.first), h--
            }
            for (; p && h; ) {
              const t = m[h - 1],
                n = e[p - 1],
                r = t.key,
                a = n.key
              t === n
                ? ((u = t.first), p--, h--)
                : b.has(a)
                ? !o.has(r) || v.has(r)
                  ? y(t)
                  : w.has(a)
                  ? p--
                  : _.get(r) > _.get(a)
                  ? (w.add(r), y(t))
                  : (v.add(a), p--)
                : (l(n, o), p--)
            }
            for (; p--; ) {
              const t = e[p]
              b.has(t.key) || l(t, o)
            }
            for (; h; ) y(m[h - 1])
            return m
          })(o, e, p, 1, r, i, s, n, X, An, null, On)),
          J(),
          (a && !e.top) || x(n, "padding-top", r.top + "px"),
          (a && !e.bottom) || x(n, "padding-bottom", r.bottom + "px"),
          (a && !e.height) || x(t, "height", r.height)
      },
      i(e) {
        if (!a) {
          for (let e = 0; e < l.length; e += 1) Z(o[e])
          a = !0
        }
      },
      o(e) {
        for (let e = 0; e < o.length; e += 1) Q(o[e])
        a = !1
      },
      d(n) {
        n && d(t)
        for (let e = 0; e < o.length; e += 1) o[e].d()
        e.svelte_virtual_list_contents_binding(null),
          r.cancel(),
          e.svelte_virtual_list_viewport_binding(null),
          i()
      },
    }
  }
  function Pn(e, t, n) {
    let r,
      a,
      i,
      o,
      s,
      l,
      {
        items: c,
        height: u = "100%",
        itemHeight: d = 40,
        hoverItemIndex: p = 0,
        start: h = 0,
        end: g = 0,
      } = t,
      f = [],
      m = 0,
      b = 0,
      _ = 0
    M(() => {
      ;(r = i.getElementsByTagName("svelte-virtual-list-row")),
        n("mounted", (s = !0))
    })
    let { $$slots: v = {}, $$scope: w } = t
    return (
      (e.$set = (e) => {
        "items" in e && n("items", (c = e.items)),
          "height" in e && n("height", (u = e.height)),
          "itemHeight" in e && n("itemHeight", (d = e.itemHeight)),
          "hoverItemIndex" in e && n("hoverItemIndex", (p = e.hoverItemIndex)),
          "start" in e && n("start", (h = e.start)),
          "end" in e && n("end", (g = e.end)),
          "$$scope" in e && n("$$scope", (w = e.$$scope))
      }),
      (e.$$.update = (
        e = {
          items: 1,
          start: 1,
          end: 1,
          mounted: 1,
          viewport_height: 1,
          itemHeight: 1,
        }
      ) => {
        ;(e.items || e.start || e.end) &&
          n(
            "visible",
            (o = c.slice(h, g).map((e, t) => ({ index: t + h, data: e })))
          ),
          (e.mounted || e.items || e.viewport_height || e.itemHeight) &&
            s &&
            (async function (e, t, i) {
              const { scrollTop: o } = a
              await B()
              let s = b - o,
                c = h
              for (; s < t && c < e.length; ) {
                let e = r[c - h]
                e || (n("end", (g = c + 1)), await B(), (e = r[c - h]))
                ;(s += f[c] = i || e.offsetHeight), (c += 1)
              }
              n("end", (g = c))
              const u = e.length - g
              ;(l = (b + s) / g),
                n("bottom", (_ = u * l)),
                (f.length = e.length),
                n("viewport", (a.scrollTop = 0), a)
            })(c, m, d)
      }),
      {
        items: c,
        height: u,
        itemHeight: d,
        hoverItemIndex: p,
        start: h,
        end: g,
        viewport: a,
        contents: i,
        viewport_height: m,
        visible: o,
        top: b,
        bottom: _,
        handle_scroll: async function () {
          const { scrollTop: e } = a,
            t = h
          for (let e = 0; e < r.length; e += 1)
            f[h + e] = d || r[e].offsetHeight
          let i = 0,
            o = 0
          for (; i < c.length; ) {
            const t = f[i] || l
            if (o + t > e) {
              n("start", (h = i)), n("top", (b = o))
              break
            }
            ;(o += t), (i += 1)
          }
          for (; i < c.length && ((o += f[i] || l), (i += 1), !(o > e + m)); );
          n("end", (g = i))
          const s = c.length - g
          for (l = o / g; i < c.length; ) f[i++] = l
          if ((n("bottom", (_ = s * l)), h < t)) {
            await B()
            let n = 0,
              i = 0
            for (let e = h; e < t; e += 1)
              r[e - h] && ((n += f[e]), (i += d || r[e - h].offsetHeight))
            const o = i - n
            a.scrollTo(0, e + o)
          }
        },
        svelte_virtual_list_contents_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("contents", (i = e))
          })
        },
        svelte_virtual_list_viewport_resize_handler: function () {
          ;(m = this.offsetHeight), n("viewport_height", m)
        },
        svelte_virtual_list_viewport_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("viewport", (a = e))
          })
        },
        $$slots: v,
        $$scope: w,
      }
    )
  }
  class Rn extends re {
    constructor(e) {
      super(),
        ne(this, e, Pn, Nn, o, [
          "items",
          "height",
          "itemHeight",
          "hoverItemIndex",
          "start",
          "end",
        ])
    }
  }
  function Hn(e, t, n) {
    const r = Object.create(e)
    return (r.item = t[n]), (r.i = n), r
  }
  function zn(e) {
    var t,
      n,
      r = new Rn({
        props: {
          items: e.items,
          itemHeight: e.itemHeight,
          $$slots: {
            default: [qn, ({ item: e, i: t }) => ({ item: e, i: t })],
          },
          $$scope: { ctx: e },
        },
      })
    return {
      c() {
        ;(t = h("div")),
          r.$$.fragment.c(),
          _(t, "class", "listContainer virtualList svelte-bqv8jo")
      },
      m(a, i) {
        u(a, t, i), ee(r, t, null), e.div_binding(t), (n = !0)
      },
      p(e, t) {
        var n = {}
        e.items && (n.items = t.items),
          e.itemHeight && (n.itemHeight = t.itemHeight),
          (e.$$scope ||
            e.Item ||
            e.filterText ||
            e.getOptionLabel ||
            e.selectedValue ||
            e.optionIdentifier ||
            e.hoverItemIndex ||
            e.items) &&
            (n.$$scope = { changed: e, ctx: t }),
          r.$set(n)
      },
      i(e) {
        n || (Z(r.$$.fragment, e), (n = !0))
      },
      o(e) {
        Q(r.$$.fragment, e), (n = !1)
      },
      d(n) {
        n && d(t), te(r), e.div_binding(null)
      },
    }
  }
  function qn(e) {
    var t,
      n,
      r,
      i = e.Item
    function o(e) {
      return {
        props: {
          item: e.item,
          filterText: e.filterText,
          getOptionLabel: e.getOptionLabel,
          isFirst: Jn(e.i),
          isActive: Kn(e.item, e.selectedValue, e.optionIdentifier),
          isHover: Zn(e.hoverItemIndex, e.item, e.i, e.items),
        },
      }
    }
    if (i) var s = new i(o(e))
    function l() {
      return e.mouseover_handler(e)
    }
    function c(...t) {
      return e.click_handler(e, ...t)
    }
    return {
      c() {
        ;(t = h("div")),
          s && s.$$.fragment.c(),
          _(t, "class", "listItem"),
          (r = [b(t, "mouseover", l), b(t, "click", c)])
      },
      m(e, r) {
        u(e, t, r), s && ee(s, t, null), (n = !0)
      },
      p(n, r) {
        e = r
        var a = {}
        if (
          (n.item && (a.item = e.item),
          n.filterText && (a.filterText = e.filterText),
          n.getOptionLabel && (a.getOptionLabel = e.getOptionLabel),
          n.i && (a.isFirst = Jn(e.i)),
          (n.item || n.selectedValue || n.optionIdentifier) &&
            (a.isActive = Kn(e.item, e.selectedValue, e.optionIdentifier)),
          (n.hoverItemIndex || n.item || n.i || n.items) &&
            (a.isHover = Zn(e.hoverItemIndex, e.item, e.i, e.items)),
          i !== (i = e.Item))
        ) {
          if (s) {
            K()
            const e = s
            Q(e.$$.fragment, 1, 0, () => {
              te(e, 1)
            }),
              J()
          }
          i
            ? ((s = new i(o(e))).$$.fragment.c(),
              Z(s.$$.fragment, 1),
              ee(s, t, null))
            : (s = null)
        } else i && s.$set(a)
      },
      i(e) {
        n || (s && Z(s.$$.fragment, e), (n = !0))
      },
      o(e) {
        s && Q(s.$$.fragment, e), (n = !1)
      },
      d(e) {
        e && d(t), s && te(s), a(r)
      },
    }
  }
  function Bn(e) {
    var t, n
    let r = e.items,
      a = []
    for (let t = 0; t < r.length; t += 1) a[t] = Gn(Hn(e, r, t))
    const i = (e) =>
      Q(a[e], 1, 1, () => {
        a[e] = null
      })
    let o = null
    return (
      r.length || ((o = Dn(e)), o.c()),
      {
        c() {
          t = h("div")
          for (let e = 0; e < a.length; e += 1) a[e].c()
          _(t, "class", "listContainer svelte-bqv8jo")
        },
        m(r, i) {
          u(r, t, i)
          for (let e = 0; e < a.length; e += 1) a[e].m(t, null)
          o && o.m(t, null), e.div_binding_1(t), (n = !0)
        },
        p(e, n) {
          if (
            e.items ||
            e.getGroupHeaderLabel ||
            e.Item ||
            e.filterText ||
            e.getOptionLabel ||
            e.isItemFirst ||
            e.isItemActive ||
            e.selectedValue ||
            e.optionIdentifier ||
            e.isItemHover ||
            e.hoverItemIndex ||
            e.hideEmptyState ||
            e.noOptionsMessage
          ) {
            let o
            for (r = n.items, o = 0; o < r.length; o += 1) {
              const i = Hn(n, r, o)
              a[o]
                ? (a[o].p(e, i), Z(a[o], 1))
                : ((a[o] = Gn(i)), a[o].c(), Z(a[o], 1), a[o].m(t, null))
            }
            for (K(), o = r.length; o < a.length; o += 1) i(o)
            J()
          }
          !r.length && o
            ? o.p(e, n)
            : r.length
            ? o && (o.d(1), (o = null))
            : ((o = Dn(n)), o.c(), o.m(t, null))
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < r.length; e += 1) Z(a[e])
            n = !0
          }
        },
        o(e) {
          a = a.filter(Boolean)
          for (let e = 0; e < a.length; e += 1) Q(a[e])
          n = !1
        },
        d(n) {
          n && d(t), p(a, n), o && o.d(), e.div_binding_1(null)
        },
      }
    )
  }
  function Dn(e) {
    var t,
      n = !e.hideEmptyState && Vn(e)
    return {
      c() {
        n && n.c(), (t = m())
      },
      m(e, r) {
        n && n.m(e, r), u(e, t, r)
      },
      p(e, r) {
        r.hideEmptyState
          ? n && (n.d(1), (n = null))
          : n
          ? n.p(e, r)
          : ((n = Vn(r)).c(), n.m(t.parentNode, t))
      },
      d(e) {
        n && n.d(e), e && d(t)
      },
    }
  }
  function Vn(e) {
    var t, n
    return {
      c() {
        ;(t = h("div")),
          (n = g(e.noOptionsMessage)),
          _(t, "class", "empty svelte-bqv8jo")
      },
      m(e, r) {
        u(e, t, r), c(t, n)
      },
      p(e, t) {
        e.noOptionsMessage && y(n, t.noOptionsMessage)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function Un(e) {
    var t,
      n,
      r,
      i,
      o = e.Item
    function s(e) {
      return {
        props: {
          item: e.item,
          filterText: e.filterText,
          getOptionLabel: e.getOptionLabel,
          isFirst: Jn(e.i),
          isActive: Kn(e.item, e.selectedValue, e.optionIdentifier),
          isHover: Zn(e.hoverItemIndex, e.item, e.i, e.items),
        },
      }
    }
    if (o) var l = new o(s(e))
    function p() {
      return e.mouseover_handler_1(e)
    }
    function g(...t) {
      return e.click_handler_1(e, ...t)
    }
    return {
      c() {
        ;(t = h("div")),
          l && l.$$.fragment.c(),
          (n = f()),
          _(t, "class", "listItem"),
          (i = [b(t, "mouseover", p), b(t, "click", g)])
      },
      m(e, a) {
        u(e, t, a), l && ee(l, t, null), c(t, n), (r = !0)
      },
      p(r, a) {
        e = a
        var i = {}
        if (
          (r.items && (i.item = e.item),
          r.filterText && (i.filterText = e.filterText),
          r.getOptionLabel && (i.getOptionLabel = e.getOptionLabel),
          (r.items || r.selectedValue || r.optionIdentifier) &&
            (i.isActive = Kn(e.item, e.selectedValue, e.optionIdentifier)),
          (r.hoverItemIndex || r.items) &&
            (i.isHover = Zn(e.hoverItemIndex, e.item, e.i, e.items)),
          o !== (o = e.Item))
        ) {
          if (l) {
            K()
            const e = l
            Q(e.$$.fragment, 1, 0, () => {
              te(e, 1)
            }),
              J()
          }
          o
            ? ((l = new o(s(e))).$$.fragment.c(),
              Z(l.$$.fragment, 1),
              ee(l, t, n))
            : (l = null)
        } else o && l.$set(i)
      },
      i(e) {
        r || (l && Z(l.$$.fragment, e), (r = !0))
      },
      o(e) {
        l && Q(l.$$.fragment, e), (r = !1)
      },
      d(e) {
        e && d(t), l && te(l), a(i)
      },
    }
  }
  function Fn(t) {
    var n,
      r,
      a = t.getGroupHeaderLabel(t.item) + ""
    return {
      c() {
        ;(n = h("div")),
          (r = g(a)),
          _(n, "class", "listGroupTitle svelte-bqv8jo")
      },
      m(e, t) {
        u(e, n, t), c(n, r)
      },
      p(e, t) {
        ;(e.getGroupHeaderLabel || e.items) &&
          a !== (a = t.getGroupHeaderLabel(t.item) + "") &&
          y(r, a)
      },
      i: e,
      o: e,
      d(e) {
        e && d(n)
      },
    }
  }
  function Gn(e) {
    var t,
      n,
      r,
      a,
      i = [Fn, Un],
      o = []
    function s(e, t) {
      return t.item.isGroupHeader && !t.item.isSelectable ? 0 : 1
    }
    return (
      (t = s(0, e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = m())
        },
        m(e, n) {
          o[t].m(e, n), u(e, r, n), (a = !0)
        },
        p(e, a) {
          var l = t
          ;(t = s(0, a)) === l
            ? o[t].p(e, a)
            : (K(),
              Q(o[l], 1, 1, () => {
                o[l] = null
              }),
              J(),
              (n = o[t]) || (n = o[t] = i[t](a)).c(),
              Z(n, 1),
              n.m(r.parentNode, r))
        },
        i(e) {
          a || (Z(n), (a = !0))
        },
        o(e) {
          Q(n), (a = !1)
        },
        d(e) {
          o[t].d(e), e && d(r)
        },
      }
    )
  }
  function Wn(e) {
    var t,
      n,
      r,
      a,
      i = e.isVirtualList && zn(e),
      o = !e.isVirtualList && Bn(e)
    return {
      c() {
        i && i.c(),
          (t = f()),
          o && o.c(),
          (n = m()),
          (a = b(window, "keydown", e.handleKeyDown))
      },
      m(e, a) {
        i && i.m(e, a), u(e, t, a), o && o.m(e, a), u(e, n, a), (r = !0)
      },
      p(e, r) {
        r.isVirtualList
          ? i
            ? (i.p(e, r), Z(i, 1))
            : ((i = zn(r)).c(), Z(i, 1), i.m(t.parentNode, t))
          : i &&
            (K(),
            Q(i, 1, 1, () => {
              i = null
            }),
            J()),
          r.isVirtualList
            ? o &&
              (K(),
              Q(o, 1, 1, () => {
                o = null
              }),
              J())
            : o
            ? (o.p(e, r), Z(o, 1))
            : ((o = Bn(r)).c(), Z(o, 1), o.m(n.parentNode, n))
      },
      i(e) {
        r || (Z(i), Z(o), (r = !0))
      },
      o(e) {
        Q(i), Q(o), (r = !1)
      },
      d(e) {
        i && i.d(e), e && d(t), o && o.d(e), e && d(n), a()
      },
    }
  }
  function Kn(e, t, n) {
    return t && t[n] === e[n]
  }
  function Jn(e) {
    return 0 === e
  }
  function Zn(e, t, n, r) {
    return e === n || 1 === r.length
  }
  function Qn(e, t, n) {
    const r = O()
    let a,
      { container: i } = t,
      {
        Item: o = Tn,
        isVirtualList: s = !1,
        items: l = [],
        getOptionLabel: c = (e, t) => {
          if (e) return e.isCreator ? `Create "${t}"` : e.label
        },
      } = t,
      { getGroupHeaderLabel: u = (e) => e.label } = t,
      {
        itemHeight: d = 40,
        hoverItemIndex: p = 0,
        selectedValue: h,
        start: g = 0,
        end: f = 0,
        optionIdentifier: m = "value",
        hideEmptyState: b = !1,
        noOptionsMessage: _ = "No options",
        getOptionString: v = (e) => e,
      } = t,
      {
        isMulti: w = !1,
        activeItemIndex: y = 0,
        filterText: k = "",
        isCreatable: x = !1,
      } = t,
      E = 0,
      S = !1
    function $(e) {
      e.isCreator || r("itemSelected", e)
    }
    function I(e) {
      S || n("hoverItemIndex", (p = e))
    }
    function C(e) {
      const { item: t, i: a, event: i } = e
      i.stopPropagation(),
        (h && !w && h[m] === t[m]) ||
          (t.isCreator
            ? r("itemCreated", k)
            : (n("activeItemIndex", (y = a)),
              n("hoverItemIndex", (p = a)),
              $(t)))
    }
    async function L(e) {
      if (s) return
      let t = !0
      for (; t; )
        e > 0 && p === l.length - 1
          ? n("hoverItemIndex", (p = 0))
          : n(
              "hoverItemIndex",
              e < 0 && 0 === p ? (p = l.length - 1) : (p += e)
            ),
          (t = l[p].isGroupHeader && !l[p].isSelectable)
      await B(), A("hover")
    }
    function A(e) {
      if (s || !i) return
      let t
      const r = i.querySelector(".listItem ." + e)
      r &&
        (t =
          i.getBoundingClientRect().bottom - r.getBoundingClientRect().bottom),
        n("container", (i.scrollTop -= t), i)
    }
    M(() => {
      if (l.length > 0 && !w && h) {
        const e = l.findIndex((e) => e[m] === h[m])
        e && n("hoverItemIndex", (p = e))
      }
      A("active"),
        i.addEventListener(
          "scroll",
          () => {
            clearTimeout(E),
              (E = setTimeout(() => {
                S = !1
              }, 100))
          },
          !1
        )
    }),
      j(() => {}),
      T(() => {
        l !== a && l.length > 0 && n("hoverItemIndex", (p = 0)), (a = l)
      })
    return (
      (e.$set = (e) => {
        "container" in e && n("container", (i = e.container)),
          "Item" in e && n("Item", (o = e.Item)),
          "isVirtualList" in e && n("isVirtualList", (s = e.isVirtualList)),
          "items" in e && n("items", (l = e.items)),
          "getOptionLabel" in e && n("getOptionLabel", (c = e.getOptionLabel)),
          "getGroupHeaderLabel" in e &&
            n("getGroupHeaderLabel", (u = e.getGroupHeaderLabel)),
          "itemHeight" in e && n("itemHeight", (d = e.itemHeight)),
          "hoverItemIndex" in e && n("hoverItemIndex", (p = e.hoverItemIndex)),
          "selectedValue" in e && n("selectedValue", (h = e.selectedValue)),
          "start" in e && n("start", (g = e.start)),
          "end" in e && n("end", (f = e.end)),
          "optionIdentifier" in e &&
            n("optionIdentifier", (m = e.optionIdentifier)),
          "hideEmptyState" in e && n("hideEmptyState", (b = e.hideEmptyState)),
          "noOptionsMessage" in e &&
            n("noOptionsMessage", (_ = e.noOptionsMessage)),
          "getOptionString" in e &&
            n("getOptionString", (v = e.getOptionString)),
          "isMulti" in e && n("isMulti", (w = e.isMulti)),
          "activeItemIndex" in e &&
            n("activeItemIndex", (y = e.activeItemIndex)),
          "filterText" in e && n("filterText", (k = e.filterText)),
          "isCreatable" in e && n("isCreatable", (x = e.isCreatable))
      }),
      {
        container: i,
        Item: o,
        isVirtualList: s,
        items: l,
        getOptionLabel: c,
        getGroupHeaderLabel: u,
        itemHeight: d,
        hoverItemIndex: p,
        selectedValue: h,
        start: g,
        end: f,
        optionIdentifier: m,
        hideEmptyState: b,
        noOptionsMessage: _,
        getOptionString: v,
        isMulti: w,
        activeItemIndex: y,
        filterText: k,
        isCreatable: x,
        handleHover: I,
        handleClick: C,
        handleKeyDown: function (e) {
          switch (e.key) {
            case "ArrowDown":
              e.preventDefault(), l.length && L(1)
              break
            case "ArrowUp":
              e.preventDefault(), l.length && L(-1)
              break
            case "Enter":
              if ((e.preventDefault(), 0 === l.length)) break
              const t = l[p]
              if (h && !w && h[m] === t[m]) break
              t.isCreator
                ? r("itemCreated", k)
                : (n("activeItemIndex", (y = p)), $(l[p]))
              break
            case "Tab":
              if ((e.preventDefault(), 0 === l.length)) break
              if (h && h[m] === l[p][m]) return
              n("activeItemIndex", (y = p)), $(l[p])
          }
        },
        mouseover_handler: ({ i: e }) => I(e),
        click_handler: ({ item: e, i: t }, n) => C({ item: e, i: t, event: n }),
        div_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("container", (i = e))
          })
        },
        mouseover_handler_1: ({ i: e }) => I(e),
        click_handler_1: ({ item: e, i: t }, n) =>
          C({ item: e, i: t, event: n }),
        div_binding_1: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("container", (i = e))
          })
        },
      }
    )
  }
  class Xn extends re {
    constructor(e) {
      super(),
        ne(this, e, Qn, Wn, o, [
          "container",
          "Item",
          "isVirtualList",
          "items",
          "getOptionLabel",
          "getGroupHeaderLabel",
          "itemHeight",
          "hoverItemIndex",
          "selectedValue",
          "start",
          "end",
          "optionIdentifier",
          "hideEmptyState",
          "noOptionsMessage",
          "getOptionString",
          "isMulti",
          "activeItemIndex",
          "filterText",
          "isCreatable",
        ])
    }
  }
  function Yn(t) {
    var n,
      r = t.getSelectionLabel(t.item) + ""
    return {
      c() {
        _((n = h("div")), "class", "selection")
      },
      m(e, t) {
        u(e, n, t), (n.innerHTML = r)
      },
      p(e, t) {
        ;(e.getSelectionLabel || e.item) &&
          r !== (r = t.getSelectionLabel(t.item) + "") &&
          (n.innerHTML = r)
      },
      i: e,
      o: e,
      d(e) {
        e && d(n)
      },
    }
  }
  function er(e, t, n) {
    let { getSelectionLabel: r, item: a } = t
    return (
      (e.$set = (e) => {
        "getSelectionLabel" in e &&
          n("getSelectionLabel", (r = e.getSelectionLabel)),
          "item" in e && n("item", (a = e.item))
      }),
      { getSelectionLabel: r, item: a }
    )
  }
  class tr extends re {
    constructor(e) {
      super(), ne(this, e, er, Yn, o, ["getSelectionLabel", "item"])
    }
  }
  function nr(e, t, n) {
    const r = Object.create(e)
    return (r.value = t[n]), (r.i = n), r
  }
  function rr(e) {
    var t, n
    function r(...t) {
      return e.click_handler(e, ...t)
    }
    return {
      c() {
        ;((t = h("div")).innerHTML =
          '<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" role="presentation" class="svelte-rtzfov"><path d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>'),
          _(t, "class", "multiSelectItem_clear svelte-rtzfov"),
          (n = b(t, "click", r))
      },
      m(e, n) {
        u(e, t, n)
      },
      p(t, n) {
        e = n
      },
      d(e) {
        e && d(t), n()
      },
    }
  }
  function ar(e) {
    var t,
      n,
      r,
      a,
      i,
      o = e.getSelectionLabel(e.value) + "",
      s = !e.isDisabled && rr(e)
    return {
      c() {
        ;(t = h("div")),
          (n = h("div")),
          (r = f()),
          s && s.c(),
          (a = f()),
          _(n, "class", "multiSelectItem_label svelte-rtzfov"),
          _(
            t,
            "class",
            (i =
              "multiSelectItem " +
              (e.activeSelectedValue === e.i ? "active" : "") +
              " " +
              (e.isDisabled ? "disabled" : "") +
              " svelte-rtzfov")
          )
      },
      m(e, i) {
        u(e, t, i),
          c(t, n),
          (n.innerHTML = o),
          c(t, r),
          s && s.m(t, null),
          c(t, a)
      },
      p(e, r) {
        ;(e.getSelectionLabel || e.selectedValue) &&
          o !== (o = r.getSelectionLabel(r.value) + "") &&
          (n.innerHTML = o),
          r.isDisabled
            ? s && (s.d(1), (s = null))
            : s || ((s = rr(r)).c(), s.m(t, a)),
          (e.activeSelectedValue || e.isDisabled) &&
            i !==
              (i =
                "multiSelectItem " +
                (r.activeSelectedValue === r.i ? "active" : "") +
                " " +
                (r.isDisabled ? "disabled" : "") +
                " svelte-rtzfov") &&
            _(t, "class", i)
      },
      d(e) {
        e && d(t), s && s.d()
      },
    }
  }
  function ir(t) {
    var n
    let r = t.selectedValue,
      a = []
    for (let e = 0; e < r.length; e += 1) a[e] = ar(nr(t, r, e))
    return {
      c() {
        for (let e = 0; e < a.length; e += 1) a[e].c()
        n = m()
      },
      m(e, t) {
        for (let n = 0; n < a.length; n += 1) a[n].m(e, t)
        u(e, n, t)
      },
      p(e, t) {
        if (
          e.activeSelectedValue ||
          e.isDisabled ||
          e.getSelectionLabel ||
          e.selectedValue
        ) {
          let i
          for (r = t.selectedValue, i = 0; i < r.length; i += 1) {
            const o = nr(t, r, i)
            a[i]
              ? a[i].p(e, o)
              : ((a[i] = ar(o)), a[i].c(), a[i].m(n.parentNode, n))
          }
          for (; i < a.length; i += 1) a[i].d(1)
          a.length = r.length
        }
      },
      i: e,
      o: e,
      d(e) {
        p(a, e), e && d(n)
      },
    }
  }
  function or(e, t, n) {
    const r = O()
    let {
      selectedValue: a = [],
      activeSelectedValue: i,
      isDisabled: o = !1,
      getSelectionLabel: s,
    } = t
    function l(e, t) {
      t.stopPropagation(), r("multiItemClear", { i: e })
    }
    return (
      (e.$set = (e) => {
        "selectedValue" in e && n("selectedValue", (a = e.selectedValue)),
          "activeSelectedValue" in e &&
            n("activeSelectedValue", (i = e.activeSelectedValue)),
          "isDisabled" in e && n("isDisabled", (o = e.isDisabled)),
          "getSelectionLabel" in e &&
            n("getSelectionLabel", (s = e.getSelectionLabel))
      }),
      {
        selectedValue: a,
        activeSelectedValue: i,
        isDisabled: o,
        getSelectionLabel: s,
        handleClear: l,
        click_handler: ({ i: e }, t) => l(e, t),
      }
    )
  }
  class sr extends re {
    constructor(e) {
      super(),
        ne(this, e, or, ir, o, [
          "selectedValue",
          "activeSelectedValue",
          "isDisabled",
          "getSelectionLabel",
        ])
    }
  }
  function lr(e) {
    var t,
      n,
      r = e.MultiSelection
    function a(e) {
      return {
        props: {
          selectedValue: e.selectedValue,
          getSelectionLabel: e.getSelectionLabel,
          activeSelectedValue: e.activeSelectedValue,
          isDisabled: e.isDisabled,
        },
      }
    }
    if (r) {
      var i = new r(a(e))
      i.$on("multiItemClear", e.handleMultiItemClear),
        i.$on("focus", e.handleFocus)
    }
    return {
      c() {
        i && i.$$.fragment.c(), (t = m())
      },
      m(e, r) {
        i && ee(i, e, r), u(e, t, r), (n = !0)
      },
      p(e, n) {
        var o = {}
        if (
          (e.selectedValue && (o.selectedValue = n.selectedValue),
          e.getSelectionLabel && (o.getSelectionLabel = n.getSelectionLabel),
          e.activeSelectedValue &&
            (o.activeSelectedValue = n.activeSelectedValue),
          e.isDisabled && (o.isDisabled = n.isDisabled),
          r !== (r = n.MultiSelection))
        ) {
          if (i) {
            K()
            const e = i
            Q(e.$$.fragment, 1, 0, () => {
              te(e, 1)
            }),
              J()
          }
          r
            ? ((i = new r(a(n))).$on("multiItemClear", n.handleMultiItemClear),
              i.$on("focus", n.handleFocus),
              i.$$.fragment.c(),
              Z(i.$$.fragment, 1),
              ee(i, t.parentNode, t))
            : (i = null)
        } else r && i.$set(o)
      },
      i(e) {
        n || (i && Z(i.$$.fragment, e), (n = !0))
      },
      o(e) {
        i && Q(i.$$.fragment, e), (n = !1)
      },
      d(e) {
        e && d(t), i && te(i, e)
      },
    }
  }
  function cr(e) {
    var t,
      n,
      r,
      a = e.Selection
    function i(e) {
      return {
        props: {
          item: e.selectedValue,
          getSelectionLabel: e.getSelectionLabel,
        },
      }
    }
    if (a) var o = new a(i(e))
    return {
      c() {
        ;(t = h("div")),
          o && o.$$.fragment.c(),
          _(t, "class", "selectedItem svelte-1ik40xa"),
          (r = b(t, "focus", e.handleFocus))
      },
      m(e, r) {
        u(e, t, r), o && ee(o, t, null), (n = !0)
      },
      p(e, n) {
        var r = {}
        if (
          (e.selectedValue && (r.item = n.selectedValue),
          e.getSelectionLabel && (r.getSelectionLabel = n.getSelectionLabel),
          a !== (a = n.Selection))
        ) {
          if (o) {
            K()
            const e = o
            Q(e.$$.fragment, 1, 0, () => {
              te(e, 1)
            }),
              J()
          }
          a
            ? ((o = new a(i(n))).$$.fragment.c(),
              Z(o.$$.fragment, 1),
              ee(o, t, null))
            : (o = null)
        } else a && o.$set(r)
      },
      i(e) {
        n || (o && Z(o.$$.fragment, e), (n = !0))
      },
      o(e) {
        o && Q(o.$$.fragment, e), (n = !1)
      },
      d(e) {
        e && d(t), o && te(o), r()
      },
    }
  }
  function ur(e) {
    var t, n
    return {
      c() {
        var r
        ;((t = h("div")).innerHTML =
          '<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" role="presentation" class="svelte-1ik40xa"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>'),
          _(t, "class", "clearSelect svelte-1ik40xa"),
          (n = b(
            t,
            "click",
            ((r = e.handleClear),
            function (e) {
              return e.preventDefault(), r.call(this, e)
            })
          ))
      },
      m(e, n) {
        u(e, t, n)
      },
      d(e) {
        e && d(t), n()
      },
    }
  }
  function dr(e) {
    var t
    return {
      c() {
        ;((t = h("div")).innerHTML =
          '<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" class="css-19bqh2r svelte-1ik40xa"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>'),
          _(t, "class", "indicator svelte-1ik40xa")
      },
      m(e, n) {
        u(e, t, n)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function pr(e) {
    var t
    return {
      c() {
        ;((t = h("div")).innerHTML =
          '<svg class="spinner_icon svelte-1ik40xa" viewBox="25 25 50 50"><circle class="spinner_path svelte-1ik40xa" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>'),
          _(t, "class", "spinner svelte-1ik40xa")
      },
      m(e, n) {
        u(e, t, n)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function hr(e) {
    for (
      var n,
        r,
        i,
        o,
        s,
        l,
        p,
        g,
        m,
        w,
        y = e.isMulti && e.selectedValue && e.selectedValue.length > 0 && lr(e),
        x = [
          e._inputAttributes,
          { placeholder: e.placeholderText },
          { disabled: e.isDisabled },
          { style: e.inputStyles },
          { class: "svelte-1ik40xa" },
        ],
        E = {},
        S = 0;
      S < x.length;
      S += 1
    )
      E = t(E, x[S])
    var $ = !e.isMulti && e.showSelectedItem && cr(e),
      I =
        e.showSelectedItem &&
        e.isClearable &&
        !e.isDisabled &&
        !e.isWaiting &&
        ur(e),
      C =
        !e.isSearchable &&
        !e.isDisabled &&
        !e.isWaiting &&
        ((e.showSelectedItem && !e.isClearable) || !e.showSelectedItem) &&
        dr(),
      L = e.isWaiting && pr()
    return {
      c() {
        ;(n = h("div")),
          y && y.c(),
          (r = f()),
          (i = h("input")),
          (o = f()),
          $ && $.c(),
          (s = f()),
          I && I.c(),
          (l = f()),
          C && C.c(),
          (p = f()),
          L && L.c(),
          v(i, E),
          _(
            n,
            "class",
            (g =
              e.containerClasses +
              " " +
              (e.hasError ? "hasError" : "") +
              " svelte-1ik40xa")
          ),
          _(n, "style", e.containerStyles),
          (w = [
            b(window, "click", e.handleWindowClick),
            b(window, "keydown", e.handleKeyDown),
            b(window, "resize", e.getPosition),
            b(i, "input", e.input_1_input_handler),
            b(i, "focus", e.handleFocus),
            b(n, "click", e.handleClick),
          ])
      },
      m(t, a) {
        u(t, n, a),
          y && y.m(n, null),
          c(n, r),
          c(n, i),
          k(i, e.filterText),
          e.input_1_binding(i),
          c(n, o),
          $ && $.m(n, null),
          c(n, s),
          I && I.m(n, null),
          c(n, l),
          C && C.m(n, null),
          c(n, p),
          L && L.m(n, null),
          e.div_binding(n),
          (m = !0)
      },
      p(e, t) {
        t.isMulti && t.selectedValue && t.selectedValue.length > 0
          ? y
            ? (y.p(e, t), Z(y, 1))
            : ((y = lr(t)).c(), Z(y, 1), y.m(n, r))
          : y &&
            (K(),
            Q(y, 1, 1, () => {
              y = null
            }),
            J()),
          e.filterText && i.value !== t.filterText && k(i, t.filterText),
          v(
            i,
            Y(x, [
              e._inputAttributes && t._inputAttributes,
              e.placeholderText && { placeholder: t.placeholderText },
              e.isDisabled && { disabled: t.isDisabled },
              e.inputStyles && { style: t.inputStyles },
              { class: "svelte-1ik40xa" },
            ])
          ),
          !t.isMulti && t.showSelectedItem
            ? $
              ? ($.p(e, t), Z($, 1))
              : (($ = cr(t)).c(), Z($, 1), $.m(n, s))
            : $ &&
              (K(),
              Q($, 1, 1, () => {
                $ = null
              }),
              J()),
          t.showSelectedItem && t.isClearable && !t.isDisabled && !t.isWaiting
            ? I || ((I = ur(t)).c(), I.m(n, l))
            : I && (I.d(1), (I = null)),
          t.isSearchable ||
          t.isDisabled ||
          t.isWaiting ||
          ((!t.showSelectedItem || t.isClearable) && t.showSelectedItem)
            ? C && (C.d(1), (C = null))
            : C || ((C = dr()).c(), C.m(n, p)),
          t.isWaiting
            ? L || ((L = pr()).c(), L.m(n, null))
            : L && (L.d(1), (L = null)),
          (m && !e.containerClasses && !e.hasError) ||
            g ===
              (g =
                t.containerClasses +
                " " +
                (t.hasError ? "hasError" : "") +
                " svelte-1ik40xa") ||
            _(n, "class", g),
          (m && !e.containerStyles) || _(n, "style", t.containerStyles)
      },
      i(e) {
        m || (Z(y), Z($), (m = !0))
      },
      o(e) {
        Q(y), Q($), (m = !1)
      },
      d(t) {
        t && d(n),
          y && y.d(),
          e.input_1_binding(null),
          $ && $.d(),
          I && I.d(),
          C && C.d(),
          L && L.d(),
          e.div_binding(null),
          a(w)
      },
    }
  }
  function gr(e, t, n) {
    const r = O()
    let a,
      i,
      o,
      s,
      l,
      c,
      u,
      d,
      {
        container: p,
        input: h,
        Item: g = Tn,
        Selection: f = tr,
        MultiSelection: m = sr,
        isMulti: b = !1,
        isDisabled: _ = !1,
        isCreatable: v = !1,
        isFocused: w = !1,
        selectedValue: y,
        filterText: k = "",
        placeholder: x = "Select...",
        items: E = [],
        groupBy: S,
        groupFilter: $ = (e) => e,
      } = t,
      {
        isGroupHeaderSelectable: I = !1,
        getGroupHeaderLabel: C = (e) => e.label,
      } = t,
      {
        getOptionLabel: L = (e, t) => (e.isCreator ? `Create "${t}"` : e.label),
      } = t,
      {
        optionIdentifier: A = "value",
        loadOptions: P,
        hasError: R = !1,
        containerStyles: H = "",
        getSelectionLabel: z = (e) => {
          if (e) return e.label
        },
      } = t,
      { createGroupHeaderItem: q = (e) => ({ value: e, label: e }) } = t,
      { createItem: D = (e) => ({ value: e, label: e }) } = t,
      {
        isSearchable: V = !0,
        inputStyles: U = "",
        isClearable: F = !0,
        isWaiting: G = !1,
        listPlacement: W = "auto",
        listOpen: K = !1,
        list: J,
        isVirtualList: Z = !1,
        loadOptionsInterval: Q = 300,
        noOptionsMessage: X = "No options",
        hideEmptyState: Y = !1,
        filteredItems: ee = [],
        inputAttributes: te = {},
      } = t,
      ne = ""
    async function re() {
      await B(), n("filterText", (k = ""))
    }
    const ae = (function (e, t, n) {
      let r
      return function () {
        let a = this,
          i = arguments,
          o = function () {
            ;(r = null), n || e.apply(a, i)
          },
          s = n && !r
        clearTimeout(r), (r = setTimeout(o, t)), s && e.apply(a, i)
      }
    })(async () => {
      n("isWaiting", (G = !0)),
        n("items", (E = await P(k))),
        n("isWaiting", (G = !1)),
        n("isFocused", (w = !0)),
        n("listOpen", (K = !0))
    }, Q)
    let ie,
      oe,
      se = {}
    function le() {
      let e = !0
      if (y) {
        const t = [],
          r = []
        y.forEach((n) => {
          t.includes(n[A]) ? (e = !1) : (t.push(n[A]), r.push(n))
        }),
          n("selectedValue", (y = r))
      }
      return e
    }
    async function ce(e) {
      if ((await B(), J)) return J.$set({ items: e })
      P && e.length > 0 && ge()
    }
    function ue(e) {
      const { detail: t } = e,
        a = y[t ? t.i : y.length - 1]
      1 === y.length
        ? n("selectedValue", (y = void 0))
        : n("selectedValue", (y = y.filter((e) => e !== a))),
        r("clear", a),
        de()
    }
    async function de() {
      if ((await B(), !a || !p)) return
      const { top: e, height: t, width: n } = p.getBoundingClientRect()
      ;(a.style["min-width"] = n + "px"),
        (a.style.width = "auto"),
        (a.style.left = "0"),
        "top" === W
          ? (a.style.bottom = t + 5 + "px")
          : (a.style.top = t + 5 + "px"),
        (a = a),
        "auto" === W &&
          (function (e) {
            const t = e.getBoundingClientRect(),
              n = {}
            return (
              (n.top = t.top < 0),
              (n.left = t.left < 0),
              (n.bottom =
                t.bottom >
                (window.innerHeight || document.documentElement.clientHeight)),
              (n.right =
                t.right >
                (window.innerWidth || document.documentElement.clientWidth)),
              (n.any = n.top || n.left || n.bottom || n.right),
              n
            )
          })(a).bottom &&
          ((a.style.top = ""), (a.style.bottom = t + 5 + "px")),
        (a.style.visibility = "")
    }
    function pe() {
      n("isFocused", (w = !0)), h && h.focus()
    }
    function he() {
      re(),
        n("activeSelectedValue", (i = void 0)),
        J &&
          (J.$destroy(),
          n("list", (J = void 0)),
          a &&
            (a.parentNode && a.parentNode.removeChild(a),
            (a = void 0),
            n("list", J),
            (a = a)))
    }
    async function ge() {
      if ((await B(), a && J)) return
      const e = {
        Item: g,
        filterText: k,
        optionIdentifier: A,
        noOptionsMessage: X,
        hideEmptyState: Y,
        isCreatable: v,
        isVirtualList: Z,
        selectedValue: y,
        isMulti: b,
        getGroupHeaderLabel: C,
        items: ee,
      }
      L && (e.getOptionLabel = L),
        (a = document.createElement("div")),
        Object.assign(a.style, {
          position: "absolute",
          "z-index": 2,
          visibility: "hidden",
        }),
        n("list", J),
        (a = a),
        p && p.appendChild(a),
        n("list", (J = new Xn({ target: a, props: e }))),
        J.$on("itemSelected", (e) => {
          const { detail: t } = e
          if (t) {
            const e = Object.assign({}, t)
            n("selectedValue", (y = b ? (y ? y.concat([e]) : [e]) : e)),
              re(),
              n("selectedValue", y),
              n("optionIdentifier", A),
              setTimeout(() => {
                n("listOpen", (K = !1)), n("activeSelectedValue", (i = void 0))
              })
          }
        }),
        J.$on("itemCreated", (e) => {
          const { detail: t } = e
          b
            ? (n("selectedValue", (y = y || [])),
              n("selectedValue", (y = [...y, D(t)])))
            : n("selectedValue", (y = D(t))),
            n("filterText", (k = "")),
            n("listOpen", (K = !1)),
            n("activeSelectedValue", (i = void 0)),
            re()
        }),
        n("list", J),
        (a = a),
        de()
    }
    return (
      T(() => {
        if (
          (b && y && y.length > 1 && le(),
          !b &&
            y &&
            s !== y &&
            ((s && JSON.stringify(y[A]) === JSON.stringify(s[A])) ||
              r("select", y)),
          b &&
            JSON.stringify(y) !== JSON.stringify(s) &&
            le() &&
            r("select", y),
          p && K !== l && (K ? ge() : he()),
          k !== c &&
            (k.length > 0
              ? (n("isFocused", (w = !0)),
                n("listOpen", (K = !0)),
                P
                  ? ae()
                  : (ge(),
                    n("listOpen", (K = !0)),
                    b && n("activeSelectedValue", (i = void 0))))
              : ce([]),
            J && J.$set({ filterText: k })),
          w !== u && (w || K ? pe() : (re(), h && h.blur())),
          d !== ee)
        ) {
          let e = [...ee]
          if (v && k) {
            const t = { ...D(k), isCreator: !0 },
              n = e.find((e) => e[A] === t[A])
            let r
            y &&
              (b
                ? (r = y.find((e) => e[A] === t[A]))
                : y[A] === t[A] && (r = y)),
              n || r || (e = [...e, t])
          }
          ce(e)
        }
        ;(s = y), (l = K), (c = k), (u = w), (d = ee)
      }),
      M(() => {
        w && h.focus(),
          K && ge(),
          E && E.length > 0 && n("originalItemsClone", (o = JSON.stringify(E))),
          y &&
            b &&
            n(
              "selectedValue",
              (y = y.map((e) =>
                "string" == typeof e ? { value: e, label: e } : e
              ))
            )
      }),
      j(() => {
        he()
      }),
      (e.$set = (e) => {
        "container" in e && n("container", (p = e.container)),
          "input" in e && n("input", (h = e.input)),
          "Item" in e && n("Item", (g = e.Item)),
          "Selection" in e && n("Selection", (f = e.Selection)),
          "MultiSelection" in e && n("MultiSelection", (m = e.MultiSelection)),
          "isMulti" in e && n("isMulti", (b = e.isMulti)),
          "isDisabled" in e && n("isDisabled", (_ = e.isDisabled)),
          "isCreatable" in e && n("isCreatable", (v = e.isCreatable)),
          "isFocused" in e && n("isFocused", (w = e.isFocused)),
          "selectedValue" in e && n("selectedValue", (y = e.selectedValue)),
          "filterText" in e && n("filterText", (k = e.filterText)),
          "placeholder" in e && n("placeholder", (x = e.placeholder)),
          "items" in e && n("items", (E = e.items)),
          "groupBy" in e && n("groupBy", (S = e.groupBy)),
          "groupFilter" in e && n("groupFilter", ($ = e.groupFilter)),
          "isGroupHeaderSelectable" in e &&
            n("isGroupHeaderSelectable", (I = e.isGroupHeaderSelectable)),
          "getGroupHeaderLabel" in e &&
            n("getGroupHeaderLabel", (C = e.getGroupHeaderLabel)),
          "getOptionLabel" in e && n("getOptionLabel", (L = e.getOptionLabel)),
          "optionIdentifier" in e &&
            n("optionIdentifier", (A = e.optionIdentifier)),
          "loadOptions" in e && n("loadOptions", (P = e.loadOptions)),
          "hasError" in e && n("hasError", (R = e.hasError)),
          "containerStyles" in e &&
            n("containerStyles", (H = e.containerStyles)),
          "getSelectionLabel" in e &&
            n("getSelectionLabel", (z = e.getSelectionLabel)),
          "createGroupHeaderItem" in e &&
            n("createGroupHeaderItem", (q = e.createGroupHeaderItem)),
          "createItem" in e && n("createItem", (D = e.createItem)),
          "isSearchable" in e && n("isSearchable", (V = e.isSearchable)),
          "inputStyles" in e && n("inputStyles", (U = e.inputStyles)),
          "isClearable" in e && n("isClearable", (F = e.isClearable)),
          "isWaiting" in e && n("isWaiting", (G = e.isWaiting)),
          "listPlacement" in e && n("listPlacement", (W = e.listPlacement)),
          "listOpen" in e && n("listOpen", (K = e.listOpen)),
          "list" in e && n("list", (J = e.list)),
          "isVirtualList" in e && n("isVirtualList", (Z = e.isVirtualList)),
          "loadOptionsInterval" in e &&
            n("loadOptionsInterval", (Q = e.loadOptionsInterval)),
          "noOptionsMessage" in e &&
            n("noOptionsMessage", (X = e.noOptionsMessage)),
          "hideEmptyState" in e && n("hideEmptyState", (Y = e.hideEmptyState)),
          "filteredItems" in e && n("filteredItems", (ee = e.filteredItems)),
          "inputAttributes" in e &&
            n("inputAttributes", (te = e.inputAttributes))
      }),
      (e.$$.update = (
        e = {
          isMulti: 1,
          isDisabled: 1,
          isFocused: 1,
          selectedValue: 1,
          optionIdentifier: 1,
          filterText: 1,
          placeholder: 1,
          inputAttributes: 1,
          isSearchable: 1,
          items: 1,
          loadOptions: 1,
          originalItemsClone: 1,
          getOptionLabel: 1,
          groupBy: 1,
          createGroupHeaderItem: 1,
          isGroupHeaderSelectable: 1,
          groupFilter: 1,
        }
      ) => {
        if (
          ((e.isMulti || e.isDisabled || e.isFocused) &&
            (n("containerClasses", (ne = "selectContainer")),
            n("containerClasses", (ne += b ? " multiSelect" : "")),
            n("containerClasses", (ne += _ ? " disabled" : "")),
            n("containerClasses", (ne += w ? " focused" : ""))),
          (e.selectedValue || e.optionIdentifier) &&
            "string" == typeof y &&
            n("selectedValue", (y = { [A]: y, label: y })),
          (e.selectedValue || e.filterText) &&
            n("showSelectedItem", (ie = y && 0 === k.length)),
          (e.selectedValue || e.placeholder) &&
            n("placeholderText", (oe = y ? "" : x)),
          (e.inputAttributes || e.isSearchable) &&
            (n(
              "_inputAttributes",
              (se = Object.assign(te, {
                autocomplete: "off",
                autocorrect: "off",
                spellcheck: !1,
              }))
            ),
            V || n("_inputAttributes", (se.readonly = !0), se)),
          e.items ||
            e.loadOptions ||
            e.filterText ||
            e.originalItemsClone ||
            e.isMulti ||
            e.selectedValue ||
            e.optionIdentifier ||
            e.getOptionLabel ||
            e.groupBy ||
            e.createGroupHeaderItem ||
            e.isGroupHeaderSelectable ||
            e.groupFilter)
        ) {
          let e,
            t = E
          if (
            (E &&
              E.length > 0 &&
              "object" != typeof E[0] &&
              (t = E.map((e, t) => ({ index: t, value: e, label: e }))),
            P && 0 === k.length && o
              ? ((e = JSON.parse(o)), (t = JSON.parse(o)))
              : (e = P
                  ? 0 === k.length
                    ? []
                    : t
                  : t.filter((e) => {
                      let t = !0
                      return (
                        b && y && (t = !y.find((t) => t[A] === e[A])),
                        !!(t && k.length < 1) ||
                          (t && L(e, k).toLowerCase().includes(k.toLowerCase()))
                      )
                    })),
            S)
          ) {
            const t = [],
              r = {}
            e.forEach((e) => {
              const n = S(e)
              t.includes(n) ||
                (t.push(n),
                (r[n] = []),
                n &&
                  r[n].push(
                    Object.assign(q(n, e), {
                      id: n,
                      isGroupHeader: !0,
                      isSelectable: I,
                    })
                  )),
                r[n].push(Object.assign({ isGroupItem: !!n }, e))
            })
            const a = []
            $(t).forEach((e) => {
              a.push(...r[e])
            }),
              n("filteredItems", (ee = a))
          } else n("filteredItems", (ee = e))
        }
      }),
      {
        container: p,
        input: h,
        Item: g,
        Selection: f,
        MultiSelection: m,
        isMulti: b,
        isDisabled: _,
        isCreatable: v,
        isFocused: w,
        selectedValue: y,
        filterText: k,
        placeholder: x,
        items: E,
        groupBy: S,
        groupFilter: $,
        isGroupHeaderSelectable: I,
        getGroupHeaderLabel: C,
        getOptionLabel: L,
        optionIdentifier: A,
        loadOptions: P,
        hasError: R,
        containerStyles: H,
        getSelectionLabel: z,
        createGroupHeaderItem: q,
        createItem: D,
        isSearchable: V,
        inputStyles: U,
        isClearable: F,
        isWaiting: G,
        listPlacement: W,
        listOpen: K,
        list: J,
        isVirtualList: Z,
        loadOptionsInterval: Q,
        noOptionsMessage: X,
        hideEmptyState: Y,
        filteredItems: ee,
        inputAttributes: te,
        activeSelectedValue: i,
        containerClasses: ne,
        _inputAttributes: se,
        handleMultiItemClear: ue,
        getPosition: de,
        handleKeyDown: function (e) {
          if (w)
            switch (e.key) {
              case "ArrowDown":
              case "ArrowUp":
                e.preventDefault(),
                  n("listOpen", (K = !0)),
                  n("activeSelectedValue", (i = void 0))
                break
              case "Tab":
                K || n("isFocused", (w = !1))
                break
              case "Backspace":
                if (!b || k.length > 0) return
                if (b && y && y.length > 0) {
                  if (
                    (ue(void 0 !== i ? i : y.length - 1),
                    0 === i || void 0 === i)
                  )
                    break
                  n("activeSelectedValue", (i = y.length > i ? i - 1 : void 0))
                }
                break
              case "ArrowLeft":
                if ((J && J.$set({ hoverItemIndex: -1 }), !b || k.length > 0))
                  return
                void 0 === i
                  ? n("activeSelectedValue", (i = y.length - 1))
                  : y.length > i &&
                    0 !== i &&
                    n("activeSelectedValue", (i -= 1))
                break
              case "ArrowRight":
                if (
                  (J && J.$set({ hoverItemIndex: -1 }),
                  !b || k.length > 0 || void 0 === i)
                )
                  return
                i === y.length - 1
                  ? n("activeSelectedValue", (i = void 0))
                  : i < y.length - 1 && n("activeSelectedValue", (i += 1))
            }
        },
        handleFocus: pe,
        handleWindowClick: function (e) {
          p &&
            (p.contains(e.target) ||
              (n("isFocused", (w = !1)),
              n("listOpen", (K = !1)),
              n("activeSelectedValue", (i = void 0)),
              h && h.blur()))
        },
        handleClick: function () {
          _ || (n("isFocused", (w = !0)), n("listOpen", (K = !K)))
        },
        handleClear: function () {
          n("selectedValue", (y = void 0)),
            n("listOpen", (K = !1)),
            r("clear", y),
            pe()
        },
        showSelectedItem: ie,
        placeholderText: oe,
        input_1_input_handler: function () {
          ;(k = this.value), n("filterText", k)
        },
        input_1_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("input", (h = e))
          })
        },
        div_binding: function (e) {
          N[e ? "unshift" : "push"](() => {
            n("container", (p = e))
          })
        },
      }
    )
  }
  class fr extends re {
    constructor(e) {
      super(),
        ne(this, e, gr, hr, o, [
          "container",
          "input",
          "Item",
          "Selection",
          "MultiSelection",
          "isMulti",
          "isDisabled",
          "isCreatable",
          "isFocused",
          "selectedValue",
          "filterText",
          "placeholder",
          "items",
          "groupBy",
          "groupFilter",
          "isGroupHeaderSelectable",
          "getGroupHeaderLabel",
          "getOptionLabel",
          "optionIdentifier",
          "loadOptions",
          "hasError",
          "containerStyles",
          "getSelectionLabel",
          "createGroupHeaderItem",
          "createItem",
          "isSearchable",
          "inputStyles",
          "isClearable",
          "isWaiting",
          "listPlacement",
          "listOpen",
          "list",
          "isVirtualList",
          "loadOptionsInterval",
          "noOptionsMessage",
          "hideEmptyState",
          "filteredItems",
          "inputAttributes",
          "handleClear",
        ])
    }
    get handleClear() {
      return this.$$.ctx.handleClear
    }
  }
  function mr(e) {
    var t
    return {
      c() {
        _((t = h("div")), "class", "description")
      },
      m(n, r) {
        u(n, t, r), (t.innerHTML = e.description)
      },
      p(e, n) {
        e.description && (t.innerHTML = n.description)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function br(e) {
    var t,
      n,
      r,
      a,
      i,
      o,
      s,
      l,
      p,
      m,
      b,
      v,
      w = e.workspace.name + "",
      k = e.description && mr(e)
    function x(t) {
      var n
      e.select_selectedValue_binding.call(null, t),
        (m = !0),
        (n = () => (m = !1)),
        R.push(n)
    }
    let E = { items: e.languages, isClearable: !1, isSearchable: !1 }
    void 0 !== e.selectedValue && (E.selectedValue = e.selectedValue)
    var S = new fr({ props: E })
    N.push(() => {
      return (
        (t = "selectedValue"),
        (n = x),
        void (
          -1 !== (e = S).$$.props.indexOf(t) &&
          ((e.$$.bound[t] = n), n(e.$$.ctx[t]))
        )
      )
      var e, t, n
    })
    var $ = new In({
      props: {
        content: e.content,
        env: e.env,
        language: e.language,
        cookiejars: e.cookiejars,
      },
    })
    return {
      c() {
        ;(t = h("section")),
          (n = h("div")),
          (r = h("div")),
          (a = h("h1")),
          (i = g(w)),
          (o = f()),
          k && k.c(),
          (s = f()),
          (l = h("div")),
          (p = h("div")),
          S.$$.fragment.c(),
          (b = f()),
          $.$$.fragment.c(),
          _(r, "class", "left"),
          _(p, "class", "language-selector svelte-uhjpwm"),
          _(l, "class", "right"),
          _(n, "class", "row"),
          _(t, "class", "content svelte-uhjpwm")
      },
      m(e, d) {
        u(e, t, d),
          c(t, n),
          c(n, r),
          c(r, a),
          c(a, i),
          c(r, o),
          k && k.m(r, null),
          c(n, s),
          c(n, l),
          c(l, p),
          ee(S, p, null),
          c(t, b),
          ee($, t, null),
          (v = !0)
      },
      p(e, t) {
        ;(v && !e.workspace) || w === (w = t.workspace.name + "") || y(i, w),
          t.description
            ? k
              ? k.p(e, t)
              : ((k = mr(t)).c(), k.m(r, null))
            : k && (k.d(1), (k = null))
        var n = {}
        !m && e.selectedValue && (n.selectedValue = t.selectedValue), S.$set(n)
        var a = {}
        e.content && (a.content = t.content),
          e.env && (a.env = t.env),
          e.language && (a.language = t.language),
          e.cookiejars && (a.cookiejars = t.cookiejars),
          $.$set(a)
      },
      i(e) {
        v || (Z(S.$$.fragment, e), Z($.$$.fragment, e), (v = !0))
      },
      o(e) {
        Q(S.$$.fragment, e), Q($.$$.fragment, e), (v = !1)
      },
      d(e) {
        e && d(t), k && k.d(), te(S), te($)
      },
    }
  }
  function _r(e, t, n) {
    const r = new At.Converter({
        simplifiedAutoLink: !0,
        openLinksInNewWindow: !0,
        excludeTrailingPunctuationFromURLs: !0,
        tables: !0,
      }),
      a = [
        { value: "curl", label: "cURL" },
        { value: "javascript", label: "JavaScript/Deno (fetch)" },
        { value: "python", label: "Python (requests)" },
        { value: "node", label: "Node.js (node-fetch)" },
        { value: "ruby", label: "Ruby" },
        { value: "php", label: "PHP" },
        { value: "golang", label: "Go" },
      ]
    let i,
      o,
      s,
      { env: l, groups: c, requests: u, workspace: d, cookiejars: p } = t,
      h = a[0]
    return (
      (e.$set = (e) => {
        "env" in e && n("env", (l = e.env)),
          "groups" in e && n("groups", (c = e.groups)),
          "requests" in e && n("requests", (u = e.requests)),
          "workspace" in e && n("workspace", (d = e.workspace)),
          "cookiejars" in e && n("cookiejars", (p = e.cookiejars))
      }),
      (e.$$.update = (
        e = { groups: 1, requests: 1, workspace: 1, env: 1, selectedValue: 1 }
      ) => {
        ;(e.groups || e.requests) && n("content", (i = [...c, ...u])),
          (e.workspace || e.env) &&
            n(
              "description",
              (o = d.description && r.makeHtml(mn(d.description, l)))
            ),
          e.selectedValue && n("language", (s = h.value))
      }),
      {
        languages: a,
        env: l,
        groups: c,
        requests: u,
        workspace: d,
        cookiejars: p,
        selectedValue: h,
        content: i,
        description: o,
        language: s,
        select_selectedValue_binding: function (e) {
          ;(h = e), n("selectedValue", h)
        },
      }
    )
  }
  class vr extends re {
    constructor(e) {
      super(),
        ne(this, e, _r, br, o, [
          "env",
          "groups",
          "requests",
          "workspace",
          "cookiejars",
        ])
    }
  }
  function wr(e, t) {
    let n = e
    return (
      "object" == typeof n &&
        ((n = JSON.parse(JSON.stringify(e))),
        (function e(t, n) {
          Object.keys(t).forEach((r) => {
            if (null !== t[r])
              switch (typeof t[r]) {
                case "object":
                  e(t[r], n)
                  break
                case "string":
                  t[r] = mn(t[r], n)
              }
          })
        })(n, t)),
      n
    )
  }
  function yr(e, t, n) {
    const r = Object.create(e)
    return (r.environment = t[n]), (r.idx = n), r
  }
  function kr(e) {
    var t,
      n,
      r = e.environment.name + ""
    return {
      c() {
        ;(t = h("option")),
          (n = g(r)),
          (t.__value = e.idx),
          (t.value = t.__value)
      },
      m(e, r) {
        u(e, t, r), c(t, n)
      },
      p(e, t) {
        e.config && r !== (r = t.environment.name + "") && y(n, r)
      },
      d(e) {
        e && d(t)
      },
    }
  }
  function xr(e) {
    var t,
      n,
      r,
      i,
      o,
      s,
      l,
      m,
      v,
      w,
      k,
      $,
      I,
      C,
      L,
      T,
      M,
      j,
      O,
      A,
      N,
      P,
      R,
      H,
      z,
      q,
      B,
      V,
      U,
      F = e.config.workspace.name + ""
    document.title = t = e.config.workspace.name
    let G = e.config.environments,
      W = []
    for (let t = 0; t < G.length; t += 1) W[t] = kr(yr(e, G, t))
    var K = new _e({
        props: {
          requests: e.requests,
          groups: e.groups,
          workspace: e.config.workspace,
          visible: e.menuVisible,
        },
      }),
      J = new vr({
        props: {
          requests: e.requests,
          groups: e.groups,
          workspace: e.config.workspace,
          cookiejars: e.config.cookiejars,
          env: e.env,
        },
      })
    return {
      c() {
        ;(n = f()),
          (r = h("header")),
          (i = h("div")),
          ((o = h("a")).innerHTML =
            '<i class="fa fa-bars" aria-hidden="true"></i>'),
          (s = f()),
          (l = h("div")),
          (m = h("img")),
          (w = f()),
          (k = h("h1")),
          ($ = g(F)),
          (I = f()),
          (C = h("div")),
          (L = h("div")),
          (T = h("a")),
          (M = h("img")),
          (j = f()),
          (O = h("div")),
          ((A = h("label")).textContent = "Environment:"),
          (N = f()),
          (P = h("select"))
        for (let e = 0; e < W.length; e += 1) W[e].c()
        ;(R = f()),
          ((H = h("a")).innerHTML =
            '<i class="fa fa-code" aria-hidden="true"></i>'),
          (z = f()),
          (q = h("section")),
          K.$$.fragment.c(),
          (B = f()),
          J.$$.fragment.c(),
          _(o, "href", "javascript:"),
          _(o, "class", "hamburger-toggler"),
          _(m, "src", "/logo.png"),
          _(m, "alt", (v = e.config.workspace.name)),
          _(l, "class", "logo"),
          _(k, "class", "title"),
          _(i, "class", "header-left"),
          _(M, "src", "https://insomnia.rest/images/run.svg"),
          _(M, "alt", "Run in Insomnia"),
          _(T, "href", e.runInInsomniaLink),
          _(T, "target", "_blank"),
          _(L, "class", "run"),
          _(A, "for", "env"),
          x(A, "display", "inline-block"),
          void 0 === e.envId && D(() => e.select_change_handler.call(P)),
          _(P, "id", "env"),
          _(O, "class", "environment"),
          _(H, "href", "javascript:;"),
          _(H, "class", "example-toggler"),
          _(H, "title", "Toggle request examples"),
          S(H, "inactive", !e.exampleVisible),
          _(C, "class", "header-right"),
          x(
            r,
            "border-top",
            "6px solid " + (null !== e.color ? e.color : "#6a57d5")
          ),
          _(q, "class", "wrapper"),
          S(q, "hide-right", !e.exampleVisible),
          (U = [
            b(o, "click", e.toggleHamburger),
            b(P, "change", e.select_change_handler),
            b(H, "click", e.toggleExample),
          ])
      },
      m(t, a) {
        u(t, n, a),
          u(t, r, a),
          c(r, i),
          c(i, o),
          c(i, s),
          c(i, l),
          c(l, m),
          c(i, w),
          c(i, k),
          c(k, $),
          c(r, I),
          c(r, C),
          c(C, L),
          c(L, T),
          c(T, M),
          c(C, j),
          c(C, O),
          c(O, A),
          c(O, N),
          c(O, P)
        for (let e = 0; e < W.length; e += 1) W[e].m(P, null)
        E(P, e.envId),
          c(C, R),
          c(C, H),
          u(t, z, a),
          u(t, q, a),
          ee(K, q, null),
          c(q, B),
          ee(J, q, null),
          (V = !0)
      },
      p(e, n) {
        if (
          ((V && !e.config) ||
            t === (t = n.config.workspace.name) ||
            (document.title = t),
          (V && !e.config) ||
            v === (v = n.config.workspace.name) ||
            _(m, "alt", v),
          (V && !e.config) ||
            F === (F = n.config.workspace.name + "") ||
            y($, F),
          e.config)
        ) {
          let t
          for (G = n.config.environments, t = 0; t < G.length; t += 1) {
            const r = yr(n, G, t)
            W[t] ? W[t].p(e, r) : ((W[t] = kr(r)), W[t].c(), W[t].m(P, null))
          }
          for (; t < W.length; t += 1) W[t].d(1)
          W.length = G.length
        }
        e.envId && E(P, n.envId),
          e.exampleVisible && S(H, "inactive", !n.exampleVisible),
          (V && !e.color) ||
            x(
              r,
              "border-top",
              "6px solid " + (null !== n.color ? n.color : "#6a57d5")
            )
        var a = {}
        e.requests && (a.requests = n.requests),
          e.groups && (a.groups = n.groups),
          e.config && (a.workspace = n.config.workspace),
          e.menuVisible && (a.visible = n.menuVisible),
          K.$set(a)
        var i = {}
        e.requests && (i.requests = n.requests),
          e.groups && (i.groups = n.groups),
          e.config && (i.workspace = n.config.workspace),
          e.config && (i.cookiejars = n.config.cookiejars),
          e.env && (i.env = n.env),
          J.$set(i),
          e.exampleVisible && S(q, "hide-right", !n.exampleVisible)
      },
      i(e) {
        V || (Z(K.$$.fragment, e), Z(J.$$.fragment, e), (V = !0))
      },
      o(e) {
        Q(K.$$.fragment, e), Q(J.$$.fragment, e), (V = !1)
      },
      d(e) {
        e && (d(n), d(r)), p(W, e), e && (d(z), d(q)), te(K), te(J), a(U)
      },
    }
  }
  function Er(e, t, n) {
    let { config: r } = t,
      a = 0
    const i = window.location.origin + window.INSOMNIA_URL,
      o = `https://insomnia.rest/run/?label=${encodeURIComponent(
        r.workspace.name
      )}&uri=${encodeURIComponent(i)}`
    let s,
      l,
      c,
      u,
      d = !1,
      p = "true" === (localStorage.getItem("show-examples") || "true")
    return (
      (e.$set = (e) => {
        "config" in e && n("config", (r = e.config))
      }),
      (e.$$.update = (e = { config: 1, envId: 1, env: 1 }) => {
        ;(e.config || e.envId) && n("env", (s = r.environments[a])),
          e.env && n("color", (l = s.color)),
          (e.config || e.envId) &&
            n("requests", (c = wr(r.requests, r.environments[a]))),
          (e.config || e.envId) &&
            n("groups", (u = wr(r.groups, r.environments[a])))
      }),
      {
        config: r,
        envId: a,
        runInInsomniaLink: o,
        menuVisible: d,
        exampleVisible: p,
        toggleHamburger: function () {
          n("menuVisible", (d = !d))
        },
        toggleExample: function () {
          n("exampleVisible", (p = !p)),
            localStorage.setItem("show-examples", p)
        },
        env: s,
        color: l,
        requests: c,
        groups: u,
        select_change_handler: function () {
          ;(a = (function (e) {
            const t = e.querySelector(":checked") || e.options[0]
            return t && t.__value
          })(this)),
            n("envId", a)
        },
      }
    )
  }
  class Sr extends re {
    constructor(e) {
      super(), ne(this, e, Er, xr, o, ["config"])
    }
  }
  function $r(t) {
    var n, r
    return {
      c() {
        ;(n = f()),
          ((r =
            h(
              "div"
            )).innerHTML = `<h1>Uh-oh!</h1> <p>\n\t\t\t    It looks like it's not possible to retrieve the contents of the API documentation\n\t\t\t    at the moment. If you're the owner of this site, make sure that your\n\t\t\t    <a href="${window.INSOMNIA_URL}" target="_blank">Insomnia JSON file</a> is accessible.\n\t\t\t  </p> <p>\n\t\t\t    The developer console of your browser might have more things to say about this error.\n\t\t\t  </p>`),
          (document.title = "Uh-oh!"),
          _(r, "class", "error-page svelte-8fny4x")
      },
      m(e, t) {
        u(e, n, t), u(e, r, t)
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && (d(n), d(r))
      },
    }
  }
  class Ir extends re {
    constructor(e) {
      super(), ne(this, e, null, $r, o, [])
    }
  }
  var Cr = "object" == typeof Lt && Lt && Lt.Object === Object && Lt,
    Lr = "object" == typeof self && self && self.Object === Object && self,
    Tr = Cr || Lr || Function("return this")()
  function Mr(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t)
      case 1:
        return e.call(t, n[0])
      case 2:
        return e.call(t, n[0], n[1])
      case 3:
        return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
  }
  function jr(e, t) {
    for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n]
    return e
  }
  var Or = Object.prototype,
    Ar = Or.hasOwnProperty,
    Nr = Or.toString,
    Pr = Tr.Symbol,
    Rr = Or.propertyIsEnumerable,
    Hr = Pr ? Pr.isConcatSpreadable : void 0,
    zr = Math.max
  function qr(e) {
    return (
      Dr(e) ||
      (function (e) {
        return (
          (function (e) {
            return (
              Vr(e) &&
              (function (e) {
                return (
                  null != e &&
                  (function (e) {
                    return (
                      "number" == typeof e &&
                      e > -1 &&
                      e % 1 == 0 &&
                      e <= 9007199254740991
                    )
                  })(e.length) &&
                  !(function (e) {
                    var t = (function (e) {
                      var t = typeof e
                      return !!e && ("object" == t || "function" == t)
                    })(e)
                      ? Nr.call(e)
                      : ""
                    return (
                      "[object Function]" == t ||
                      "[object GeneratorFunction]" == t
                    )
                  })(e)
                )
              })(e)
            )
          })(e) &&
          Ar.call(e, "callee") &&
          (!Rr.call(e, "callee") || "[object Arguments]" == Nr.call(e))
        )
      })(e) ||
      !!(Hr && e && e[Hr])
    )
  }
  function Br(e) {
    if (
      "string" == typeof e ||
      (function (e) {
        return (
          "symbol" == typeof e || (Vr(e) && "[object Symbol]" == Nr.call(e))
        )
      })(e)
    )
      return e
    var t = e + ""
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
  }
  var Dr = Array.isArray
  function Vr(e) {
    return !!e && "object" == typeof e
  }
  var Ur,
    Fr,
    Gr =
      ((Ur = function (e, t) {
        return null == e
          ? {}
          : (function (e, t) {
              return (function (e, t, n) {
                for (var r = -1, a = t.length, i = {}; ++r < a; ) {
                  var o = t[r],
                    s = e[o]
                  n(s, o) && (i[o] = s)
                }
                return i
              })((e = Object(e)), t, function (t, n) {
                return n in e
              })
            })(
              e,
              (function (e, t) {
                for (var n = -1, r = e ? e.length : 0, a = Array(r); ++n < r; )
                  a[n] = t(e[n], n, e)
                return a
              })(
                (function e(t, n, r, a, i) {
                  var o = -1,
                    s = t.length
                  for (r || (r = qr), i || (i = []); ++o < s; ) {
                    var l = t[o]
                    n > 0 && r(l)
                      ? n > 1
                        ? e(l, n - 1, r, a, i)
                        : jr(i, l)
                      : a || (i[i.length] = l)
                  }
                  return i
                })(t, 1),
                Br
              )
            )
      }),
      (Fr = zr(void 0 === Fr ? Ur.length - 1 : Fr, 0)),
      function () {
        for (
          var e = arguments, t = -1, n = zr(e.length - Fr, 0), r = Array(n);
          ++t < n;

        )
          r[t] = e[Fr + t]
        t = -1
        for (var a = Array(Fr + 1); ++t < Fr; ) a[t] = e[t]
        return (a[Fr] = r), Mr(Ur, this, a)
      })
  const Wr = /```response(:(\d+))?\n([\s\S]*?)\n```/gm
  function Kr(e) {
    return { code: e[2] || null, value: e[3].trim() }
  }
  function Jr(e) {
    if (
      !(e = Gr(
        e,
        "_id",
        "method",
        "name",
        "description",
        "parameters",
        "url",
        "authentication",
        "body",
        "headers",
        "_type"
      )).description
    )
      return e
    const t = []
    let n
    for (; (n = Wr.exec(e.description)); ) t.push(Kr(n))
    return (
      (e.exampleResponses = t),
      (e.description = e.description.replace(Wr, "")),
      e
    )
  }
  class Zr {
    constructor(e) {
      ;(this.json = e),
        (this.id = null),
        (this.cute = {
          workspace: { name: null, description: null },
          cookiejars: [],
          environments: [],
          groups: [],
          requests: [],
        })
    }
    metaSort(e, t) {
      return e.metaSortKey - t.metaSortKey
    }
    mapCookiejar(e) {
      return Gr(e, "name", "cookies")
    }
    filterCookiejars() {
      return this.json.resources
        .filter((e) => "cookie_jar" === e._type)
        .map(this.mapCookiejar)
    }
    mapEnvironment(e) {
      return Gr(e, "color", "data", "name")
    }
    filterEnvironments() {
      return this.json.resources
        .filter((e) => "environment" === e._type && !e.isPrivate)
        .sort(this.metaSort)
        .map(this.mapEnvironment)
    }
    filterRequests(e = null) {
      const t = e || this.id
      return this.json.resources
        .filter(
          (e) => "request" === e._type && e.parentId === t && !e.isPrivate
        )
        .sort(this.metaSort)
        .map(Jr)
    }
    deepMapGroups(e) {
      const t = { name: e.name, description: e.description, _type: e._type }
      return (
        (t.children = this.json.resources
          .filter((t) => "request_group" === t._type && t.parentId === e._id)
          .sort(this.metaSort)
          .map(this.deepMapGroups.bind(this))),
        (t.requests = this.filterRequests(e._id)),
        t
      )
    }
    filterRootGroups() {
      const e = this.json.resources.filter(
        (e) => "request_group" === e._type && e.parentId === this.id
      )
      return e ? e.sort(this.metaSort).map(this.deepMapGroups.bind(this)) : []
    }
    generate() {
      const e = this.json.resources.find((e) => "workspace" === e._type)
      return (
        (this.id = e._id),
        (this.cute.workspace.name = e.name),
        (this.cute.workspace.description = e.description),
        (this.cute.cookiejars = this.filterCookiejars()),
        (this.cute.environments = this.filterEnvironments()),
        this.cute.environments.length > 1 &&
          (this.cute.environments = this.cute.environments.slice(1)),
        (this.cute.groups = this.filterRootGroups()),
        (this.cute.requests = this.filterRequests()),
        this.cute
      )
    }
  }
  return (async function () {
    const e = document.getElementById("app"),
      t = (e.getAttribute("data-root") || "") + "./insomnia.json"
    window.INSOMNIA_URL = t
    try {
      const n = await fetch(t, {
          method: "GET",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((e) => e.json()),
        r = new Zr(n).generate()
      return new Sr({ target: e, props: { config: r } })
    } catch (t) {
      return console.error(t), new Ir({ target: e })
    }
  })()
})()
//# sourceMappingURL=bundle.js.map
