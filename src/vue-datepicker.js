import { openBlock as g, createElementBlock as S, createElementVNode as ae, reactive as Dt, computed as Y, unref as i, ref as F, watch as st, onMounted as Fe, nextTick as ft, toRef as Ot, defineComponent as Ue, renderSlot as H, createCommentVNode as D, normalizeClass as ye, withKeys as de, createBlock as me, withModifiers as Ge, normalizeStyle as at, normalizeProps as Ye, mergeProps as Ce, Fragment as fe, createTextVNode as We, toDisplayString as Se, renderList as De, createVNode as qe, Transition as vt, withCtx as ie, onBeforeUpdate as qn, onUnmounted as sn, withDirectives as Ct, vShow as St, createSlots as Be, isRef as nt, guardReactiveProps as Ze, resolveDynamicComponent as Pt, useSlots as un, getCurrentScope as Jn, onScopeDispose as Qn, Teleport as ea } from "vue";
import { isBefore as dn, isEqual as Yn, isAfter as cn, setHours as Vn, setMinutes as Ln, setSeconds as En, setMilliseconds as fn, parse as ln, isValid as Nt, isDate as ta, format as wt, getMonth as ge, getDay as na, getYear as pe, getHours as Ke, getMinutes as xe, getSeconds as mt, parseISO as aa, startOfWeek as pn, endOfWeek as la, setMonth as Rt, setYear as ot, addDays as ct, set as Re, add as Fn, addMonths as lt, subMonths as bt, getISOWeek as ra, differenceInCalendarDays as oa, eachDayOfInterval as kn, addYears as sa, subYears as ia, sub as ua } from "date-fns";
const it = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, o] of n)
    a[t] = o;
  return a;
}, da = {}, ca = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, fa = /* @__PURE__ */ ae("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), ma = /* @__PURE__ */ ae("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), va = /* @__PURE__ */ ae("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ya = /* @__PURE__ */ ae("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), ha = [
  fa,
  ma,
  va,
  ya
];
function ga(e, n) {
  return g(), S("svg", ca, ha);
}
const Ft = /* @__PURE__ */ it(da, [["render", ga]]), pa = {}, ka = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, wa = /* @__PURE__ */ ae("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), ba = /* @__PURE__ */ ae("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), $a = [
  wa,
  ba
];
function Da(e, n) {
  return g(), S("svg", ka, $a);
}
const Ma = /* @__PURE__ */ it(pa, [["render", Da]]), _a = {}, Ta = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Aa = /* @__PURE__ */ ae("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Ca = [
  Aa
];
function Sa(e, n) {
  return g(), S("svg", Ta, Ca);
}
const wn = /* @__PURE__ */ it(_a, [["render", Sa]]), Pa = {}, Na = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ra = /* @__PURE__ */ ae("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), Ia = [
  Ra
];
function Oa(e, n) {
  return g(), S("svg", Na, Ia);
}
const bn = /* @__PURE__ */ it(Pa, [["render", Oa]]), Ba = {}, Ya = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Va = /* @__PURE__ */ ae("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), La = /* @__PURE__ */ ae("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Ea = [
  Va,
  La
];
function Fa(e, n) {
  return g(), S("svg", Ya, Ea);
}
const Un = /* @__PURE__ */ it(Ba, [["render", Fa]]), Ua = {}, Ha = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Wa = /* @__PURE__ */ ae("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), za = [
  Wa
];
function ja(e, n) {
  return g(), S("svg", Ha, za);
}
const Hn = /* @__PURE__ */ it(Ua, [["render", ja]]), Ka = {}, xa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ga = /* @__PURE__ */ ae("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Za = [
  Ga
];
function Xa(e, n) {
  return g(), S("svg", xa, Za);
}
const Wn = /* @__PURE__ */ it(Ka, [["render", Xa]]), $n = (e, n) => {
  const a = ln(e, n.slice(0, e.length), new Date());
  return Nt(a) && ta(a) ? a : null;
}, qa = (e, n) => {
  if (typeof n == "string")
    return $n(e, n);
  if (Array.isArray(n)) {
    let a = null;
    for (const t of n)
      if (a = $n(e, t), a)
        break;
    return a;
  }
  return typeof n == "function" ? n(e) : null;
}, w = (e) => e ? new Date(e) : new Date(), Ja = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), p = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${o}T${c}:${p}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, ze = (e) => {
  let n = w(JSON.parse(JSON.stringify(e)));
  return n = Vn(n, 0), n = Ln(n, 0), n = En(n, 0), n = fn(n, 0), n;
}, Le = (e, n, a, t) => {
  let o = e ? w(e) : w();
  return (n || n === 0) && (o = Vn(o, +n)), (a || a === 0) && (o = Ln(o, +a)), (t || t === 0) && (o = En(o, +t)), fn(o, 0);
}, Pe = (e, n) => !e || !n ? !1 : dn(ze(e), ze(n)), ke = (e, n) => !e || !n ? !1 : Yn(ze(e), ze(n)), Oe = (e, n) => !e || !n ? !1 : cn(ze(e), ze(n)), zn = (e, n, a) => e && e[0] && e[1] ? Oe(a, e[0]) && Pe(a, e[1]) : e && e[0] && n ? Oe(a, e[0]) && Pe(a, n) || Pe(a, e[0]) && Oe(a, n) : !1, kt = Dt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), jn = () => {
  const e = (t) => {
    kt.menuFocused = t;
  }, n = (t) => {
    kt.shiftKeyInMenu !== t && (kt.shiftKeyInMenu = t);
  };
  return {
    control: Y(() => ({ shiftKeyInMenu: kt.shiftKeyInMenu, menuFocused: kt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = {}, Qa = {
  get exports() {
    return Bt;
  },
  set exports(e) {
    Bt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(Qa, Bt);
const el = /* @__PURE__ */ mn(Bt);
var Yt = {}, tl = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(tl, Yt);
const Dn = /* @__PURE__ */ mn(Yt);
function nl(e, n) {
  var a = ol(n);
  return a.formatToParts ? ll(a, e) : rl(a, e);
}
var al = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ll(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var c = al[a[o].type];
      c >= 0 && (t[c] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (p) {
    if (p instanceof RangeError)
      return [NaN];
    throw p;
  }
}
function rl(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Gt = {};
function ol(e) {
  if (!Gt[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Gt[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Gt[e];
}
function vn(e, n, a, t, o, c, p) {
  var $ = new Date(0);
  return $.setUTCFullYear(e, n, a), $.setUTCHours(t, o, c, p), $;
}
var Mn = 36e5, sl = 6e4, Zt = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function yn(e, n, a) {
  var t, o;
  if (!e || (t = Zt.timezoneZ.exec(e), t))
    return 0;
  var c;
  if (t = Zt.timezoneHH.exec(e), t)
    return c = parseInt(t[1], 10), _n(c) ? -(c * Mn) : NaN;
  if (t = Zt.timezoneHHMM.exec(e), t) {
    c = parseInt(t[1], 10);
    var p = parseInt(t[2], 10);
    return _n(c, p) ? (o = Math.abs(c) * Mn + p * sl, c > 0 ? -o : o) : NaN;
  }
  if (dl(e)) {
    n = new Date(n || Date.now());
    var $ = a ? n : il(n), O = rn($, e), R = a ? O : ul(n, O, e);
    return -R;
  }
  return NaN;
}
function il(e) {
  return vn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function rn(e, n) {
  var a = nl(e, n), t = vn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), o = e.getTime(), c = o % 1e3;
  return o -= c >= 0 ? c : 1e3 + c, t - o;
}
function ul(e, n, a) {
  var t = e.getTime(), o = t - n, c = rn(new Date(o), a);
  if (n === c)
    return n;
  o -= c - n;
  var p = rn(new Date(o), a);
  return c === p ? c : Math.max(c, p);
}
function _n(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var Tn = {};
function dl(e) {
  if (Tn[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Tn[e] = !0, !0;
  } catch {
    return !1;
  }
}
var cl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const Kn = cl;
var Xt = 36e5, An = 6e4, fl = 2, Ie = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Kn
};
function on(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? fl : el(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var o = ml(e), c = vl(o.date, t), p = c.year, $ = c.restDateString, O = yl($, p);
  if (isNaN(O))
    return new Date(NaN);
  if (O) {
    var R = O.getTime(), E = 0, A;
    if (o.time && (E = hl(o.time), isNaN(E)))
      return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (A = yn(o.timeZone || a.timeZone, new Date(R + E)), isNaN(A))
        return new Date(NaN);
    } else
      A = Dn(new Date(R + E)), A = Dn(new Date(R + E + A));
    return new Date(R + E + A);
  } else
    return new Date(NaN);
}
function ml(e) {
  var n = {}, a = Ie.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ie.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var o = Ie.timeZone.exec(t);
    o ? (n.time = t.replace(o[1], ""), n.timeZone = o[1].trim()) : n.time = t;
  }
  return n;
}
function vl(e, n) {
  var a = Ie.YYY[n], t = Ie.YYYYY[n], o;
  if (o = Ie.YYYY.exec(e) || t.exec(e), o) {
    var c = o[1];
    return {
      year: parseInt(c, 10),
      restDateString: e.slice(c.length)
    };
  }
  if (o = Ie.YY.exec(e) || a.exec(e), o) {
    var p = o[1];
    return {
      year: parseInt(p, 10) * 100,
      restDateString: e.slice(p.length)
    };
  }
  return {
    year: null
  };
}
function yl(e, n) {
  if (n === null)
    return null;
  var a, t, o, c;
  if (e.length === 0)
    return t = new Date(0), t.setUTCFullYear(n), t;
  if (a = Ie.MM.exec(e), a)
    return t = new Date(0), o = parseInt(a[1], 10) - 1, Sn(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN);
  if (a = Ie.DDD.exec(e), a) {
    t = new Date(0);
    var p = parseInt(a[1], 10);
    return kl(n, p) ? (t.setUTCFullYear(n, 0, p), t) : new Date(NaN);
  }
  if (a = Ie.MMDD.exec(e), a) {
    t = new Date(0), o = parseInt(a[1], 10) - 1;
    var $ = parseInt(a[2], 10);
    return Sn(n, o, $) ? (t.setUTCFullYear(n, o, $), t) : new Date(NaN);
  }
  if (a = Ie.Www.exec(e), a)
    return c = parseInt(a[1], 10) - 1, Pn(n, c) ? Cn(n, c) : new Date(NaN);
  if (a = Ie.WwwD.exec(e), a) {
    c = parseInt(a[1], 10) - 1;
    var O = parseInt(a[2], 10) - 1;
    return Pn(n, c, O) ? Cn(n, c, O) : new Date(NaN);
  }
  return null;
}
function hl(e) {
  var n, a, t;
  if (n = Ie.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), qt(a) ? a % 24 * Xt : NaN;
  if (n = Ie.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), qt(a, t) ? a % 24 * Xt + t * An : NaN;
  if (n = Ie.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var o = parseFloat(n[3].replace(",", "."));
    return qt(a, t, o) ? a % 24 * Xt + t * An + o * 1e3 : NaN;
  }
  return null;
}
function Cn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7, c = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + c), t;
}
var gl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], pl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function xn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Sn(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = xn(e);
    if (t && a > pl[n] || !t && a > gl[n])
      return !1;
  }
  return !0;
}
function kl(e, n) {
  if (n < 1)
    return !1;
  var a = xn(e);
  return !(a && n > 366 || !a && n > 365);
}
function Pn(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function qt(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Vt = {}, wl = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
}, Lt = {}, bl = {
  get exports() {
    return Lt;
  },
  set exports(e) {
    Lt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, o) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var c in o)
      Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
    return t;
  }
  e.exports = n.default;
})(bl, Lt);
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = o;
  var a = t(Lt);
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function o(c) {
    return (0, a.default)({}, c);
  }
  e.exports = n.default;
})(wl, Vt);
const $l = /* @__PURE__ */ mn(Vt);
function Dl(e, n, a) {
  var t = on(e, a), o = yn(n, t, !0), c = new Date(t.getTime() - o), p = new Date(0);
  return p.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()), p.setHours(c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), c.getUTCMilliseconds()), p;
}
function Ml(e, n, a) {
  if (typeof e == "string" && !e.match(Kn)) {
    var t = $l(a);
    return t.timeZone = n, on(e, t);
  }
  var o = on(e, a), c = vn(
    o.getFullYear(),
    o.getMonth(),
    o.getDate(),
    o.getHours(),
    o.getMinutes(),
    o.getSeconds(),
    o.getMilliseconds()
  ).getTime(), p = yn(n, new Date(c));
  return new Date(c + p);
}
const _l = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, Tl = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((c) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${c}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), o = a.slice(n + 1, a.length);
  return [a[n]].concat(...o).concat(...t);
}, Al = (e) => {
  const n = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    n.push({ value: +a, text: `${a}` });
  return n;
}, Cl = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const c = o < 10 ? `0${o}` : o;
    return new Date(`2017-${c}-01T00:00:00+00:00`);
  }).map((o, c) => ({
    text: a.format(o),
    value: c
  }));
}, Sl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Me = (e) => {
  const n = i(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, Pl = (e) => Object.assign({ type: "dot" }, e), Gn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Et = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, _e = (e) => e, Nn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Rn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), Nl = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Rl = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Il = (e, n, a) => e || (typeof a == "string" ? a : n), Ol = (e) => typeof e == "boolean" ? e ? Rn({}) : !1 : Rn(e), Bl = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Yl = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), Ve = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Et.prop("partial-range"));
  }, a = Y(() => ({
    ariaLabels: Nl(e.ariaLabels),
    textInputOptions: Object.assign(Bl(), e.textInputOptions),
    multiCalendars: Rl(e.multiCalendars),
    previewFormat: Il(e.previewFormat, e.format, c()),
    filters: Yl(e.filters),
    transitions: Ol(e.transitions),
    startTime: d()
  })), t = (l) => {
    if (e.range)
      return l();
    throw new Error(Et.prop("range"));
  }, o = () => {
    const l = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${l}` : `hh:mm${l} aa`;
  }, c = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy", p = (l, v) => {
    if (typeof e.format == "function")
      return e.format(l);
    const m = v || c(), k = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${wt(l[0], m, k)} ${e.modelAuto && !l[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? wt(l[1], m, k) : ""}` : wt(l, m, k);
  }, $ = (l) => e.timezone ? Dl(l, e.timezone) : l, O = (l) => e.timezone ? Ml(l, e.timezone) : l, R = Y(() => (l) => {
    var v;
    return (v = e.hideNavigation) == null ? void 0 : v.includes(l);
  }), E = (l) => {
    const v = e.maxDate ? Oe($(l), $(w(e.maxDate))) : !1, m = e.minDate ? Pe($(l), $(w(e.minDate))) : !1, k = B(l, e.disabledDates), Z = a.value.filters.months.map((be) => +be).includes(ge(l)), se = e.disabledWeekDays.length ? e.disabledWeekDays.some((be) => +be === na(l)) : !1, f = e.allowedDates.length ? !e.allowedDates.some((be) => ke($(w(be)), $(l))) : !1, r = pe(l), J = r < +e.yearRange[0] || r > +e.yearRange[1];
    return !(v || m || k || Z || J || se || f);
  }, A = (l) => {
    const v = {
      hours: Ke(w()),
      minutes: xe(w()),
      seconds: mt(w())
    };
    return Object.assign(v, l);
  }, d = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [A(e.startTime[0]), A(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? A(e.startTime) : null, M = (l) => !E(l), U = (l) => Array.isArray(l) ? Nt(l[0]) && (l[1] ? Nt(l[1]) : !0) : l ? Nt(l) : !1, V = (l) => l instanceof Date ? l : aa(l), ee = (l) => {
    const v = pn($(l), { weekStartsOn: +e.weekStart }), m = la($(l), { weekStartsOn: +e.weekStart });
    return [v, m];
  }, B = (l, v) => Array.isArray(v) ? v.some((m) => ke($(w(m)), $(l))) : v(l), L = (l, v, m) => {
    let k = l ? w(l) : w();
    return (v || v === 0) && (k = Rt(k, v)), m && (k = ot(k, m)), k;
  }, C = (l) => Re(w(), { hours: Ke(l), minutes: xe(l), seconds: mt(l) }), x = (l) => Re(w(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), Q = (l, v, m, k) => {
    if (!l)
      return !0;
    if (k) {
      const G = m === "max" ? dn(l, v) : cn(l, v), Z = { seconds: 0, milliseconds: 0 };
      return G || Yn(Re(l, Z), Re(v, Z));
    }
    return m === "max" ? l.getTime() <= v.getTime() : l.getTime() >= v.getTime();
  }, oe = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, P = (l) => Array.isArray(l) ? [l[0] ? C(l[0]) : null, l[1] ? C(l[1]) : null] : C(l), y = (l) => {
    const v = e.maxTime ? x(e.maxTime) : w(e.maxDate);
    return Array.isArray(l) ? Q(l[0], v, "max", !!e.maxDate) && Q(l[1], v, "max", !!e.maxDate) : Q(l, v, "max", !!e.maxDate);
  }, I = (l, v) => {
    const m = e.minTime ? x(e.minTime) : w(e.minDate);
    return Array.isArray(l) ? Q(l[0], m, "min", !!e.minDate) && Q(l[1], m, "min", !!e.minDate) && v : Q(l, m, "min", !!e.minDate) && v;
  }, W = (l) => {
    let v = !0;
    if (!l || oe())
      return !0;
    const m = !e.minDate && !e.maxDate ? P(l) : l;
    return (e.maxTime || e.maxDate) && (v = y(_e(m))), (e.minTime || e.minDate) && (v = I(_e(m), v)), v;
  }, N = (l, v) => {
    const m = w(JSON.parse(JSON.stringify(l))), k = [];
    for (let G = 0; G < 7; G++) {
      const Z = ct(m, G), se = ge(Z) !== v;
      k.push({
        text: e.hideOffsetDates && se ? "" : Z.getDate(),
        value: Z,
        current: !se,
        classData: {}
      });
    }
    return k;
  }, K = (l, v) => {
    const m = [], k = w($(new Date(v, l))), G = w($(new Date(v, l + 1, 0))), Z = pn(k, { weekStartsOn: e.weekStart }), se = (f) => {
      const r = N(f, l);
      if (m.push({ days: r }), !m[m.length - 1].days.some(
        (J) => ke(ze(J.value), ze(G))
      )) {
        const J = ct(f, 7);
        se(J);
      }
    };
    if (se(Z), e.sixWeeks && m.length < 6) {
      const f = 6 - m.length;
      for (let r = 1; r <= f; r++) {
        const J = m[m.length - 1], be = J.days[J.days.length - 1], we = N(ct(be.value, 1), ge(k));
        m.push({ days: we });
      }
    }
    return m;
  }, te = (l, v, m) => [Re(w(l), { date: 1 }), Re(w(), { month: v, year: m, date: 1 })], q = (l, v) => Pe(...te(e.minDate, l, v)) || ke(...te(e.minDate, l, v)), _ = (l, v) => Oe(...te(e.maxDate, l, v)) || ke(...te(e.maxDate, l, v)), T = (l, v, m) => {
    let k = !1;
    return e.maxDate && m && _(l, v) && (k = !0), e.minDate && !m && q(l, v) && (k = !0), k;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: $,
    getZonedToUtc: O,
    formatDate: p,
    getDefaultPattern: c,
    validateDate: E,
    getDefaultStartTime: d,
    isDisabled: M,
    isValidDate: U,
    sanitizeDate: V,
    getWeekFromDate: ee,
    matchDate: B,
    setDateMonthOrYear: L,
    isValidTime: W,
    getCalendarDays: K,
    validateMonthYearInRange: (l, v, m, k) => {
      let G = !1;
      return k ? e.minDate && e.maxDate ? G = T(l, v, m) : (e.minDate && q(l, v) || e.maxDate && _(l, v)) && (G = !0) : G = !0, G;
    },
    validateMaxDate: _,
    validateMinDate: q,
    defaults: a,
    hideNavigationButtons: R
  };
}, he = Dt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Jt = F(null), At = F(!1), Qt = F(!1), en = F(!1), tn = F(!1), Ne = F(0), Ae = F(0), Je = () => {
  const e = Y(() => At.value ? [...he.selectionGrid, he.actionRow].filter((B) => B.length) : Qt.value ? [
    ...he.timePicker[0],
    ...he.timePicker[1],
    tn.value ? [] : [Jt.value],
    he.actionRow
  ].filter((B) => B.length) : en.value ? [...he.monthPicker, he.actionRow] : [he.monthYear, ...he.calendar, he.time, he.actionRow].filter((B) => B.length)), n = (B) => {
    Ne.value = B ? Ne.value + 1 : Ne.value - 1;
    let L = null;
    e.value[Ae.value] && (L = e.value[Ae.value][Ne.value]), L || (Ne.value = B ? Ne.value - 1 : Ne.value + 1);
  }, a = (B) => {
    if (Ae.value === 0 && !B || Ae.value === e.value.length && B)
      return;
    Ae.value = B ? Ae.value + 1 : Ae.value - 1, e.value[Ae.value] ? e.value[Ae.value] && !e.value[Ae.value][Ne.value] && Ne.value !== 0 && (Ne.value = e.value[Ae.value].length - 1) : Ae.value = B ? Ae.value - 1 : Ae.value + 1;
  }, t = (B) => {
    let L = null;
    e.value[Ae.value] && (L = e.value[Ae.value][Ne.value]), L ? L.focus({ preventScroll: !At.value }) : Ne.value = B ? Ne.value - 1 : Ne.value + 1;
  }, o = () => {
    n(!0), t(!0);
  }, c = () => {
    n(!1), t(!1);
  }, p = () => {
    a(!1), t(!0);
  }, $ = () => {
    a(!0), t(!0);
  }, O = (B, L) => {
    he[L] = B;
  }, R = (B, L) => {
    he[L] = B;
  }, E = () => {
    Ne.value = 0, Ae.value = 0;
  };
  return {
    buildMatrix: O,
    buildMultiLevelMatrix: R,
    setTimePickerBackRef: (B) => {
      Jt.value = B;
    },
    setSelectionGrid: (B) => {
      At.value = B, E(), B || (he.selectionGrid = []);
    },
    setTimePicker: (B, L = !1) => {
      Qt.value = B, tn.value = L, E(), B || (he.timePicker[0] = [], he.timePicker[1] = []);
    },
    setTimePickerElements: (B, L = 0) => {
      he.timePicker[L] = B;
    },
    arrowRight: o,
    arrowLeft: c,
    arrowUp: p,
    arrowDown: $,
    clearArrowNav: () => {
      he.monthYear = [], he.calendar = [], he.time = [], he.actionRow = [], he.selectionGrid = [], he.timePicker[0] = [], he.timePicker[1] = [], At.value = !1, Qt.value = !1, tn.value = !1, en.value = !1, E(), Jt.value = null;
    },
    setMonthPicker: (B) => {
      en.value = B, E();
    },
    refSets: he
    // exposed for testing
  };
}, In = (e) => Array.isArray(e), tt = (e) => Array.isArray(e), On = (e) => Array.isArray(e) && e.length === 2, Vl = (e, n, a, t, o) => {
  const {
    getDefaultStartTime: c,
    isDisabled: p,
    sanitizeDate: $,
    getWeekFromDate: O,
    setDateMonthOrYear: R,
    validateMonthYearInRange: E,
    defaults: A
  } = Ve(e), d = Y({
    get: () => e.internalModelValue,
    set: (s) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", s);
    }
  }), M = F([]);
  st(d, () => {
    e.multiCalendars || Q();
  });
  const U = F([{ month: ge(w()), year: pe(w()) }]), V = Dt({
    hours: e.range ? [Ke(w()), Ke(w())] : Ke(w()),
    minutes: e.range ? [xe(w()), xe(w())] : xe(w()),
    seconds: e.range ? [0, 0] : 0
  }), ee = Y(
    () => (s) => U.value[s] ? U.value[s].month : 0
  ), B = Y(
    () => (s) => U.value[s] ? U.value[s].year : 0
  ), L = Y(() => e.flow && e.flow.length ? o.value === e.flow.length : !0), C = (s, b, z) => {
    var ne, h;
    U.value[s] || (U.value[s] = { month: 0, year: 0 }), U.value[s].month = b === null ? (ne = U.value[s]) == null ? void 0 : ne.month : b, U.value[s].year = z === null ? (h = U.value[s]) == null ? void 0 : h.year : z;
  }, x = (s, b) => {
    V[s] = b;
  };
  Fe(() => {
    d.value || (e.startDate && (C(0, ge(w(e.startDate)), pe(w(e.startDate))), A.value.multiCalendars && ht(0)), A.value.startTime && _()), Q(!0);
  });
  const Q = (s = !1) => {
    if (d.value)
      return Array.isArray(d.value) ? (M.value = d.value, W(s)) : P(d.value);
    if (e.timePicker)
      return N();
    if (e.monthPicker && !e.range)
      return K();
    if (e.yearPicker && !e.range)
      return te();
    if (A.value.multiCalendars && s && !e.startDate)
      return oe(w(), s);
  }, oe = (s, b = !1) => {
    if ((!A.value.multiCalendars || !e.multiStatic || b) && C(0, ge(s), pe(s)), A.value.multiCalendars)
      for (let z = 1; z < A.value.multiCalendars; z++) {
        const ne = Re(w(), { month: ee.value(z - 1), year: B.value(z - 1) }), h = Fn(ne, { months: 1 });
        U.value[z] = { month: ge(h), year: pe(h) };
      }
  }, P = (s) => {
    oe(s), x("hours", Ke(s)), x("minutes", xe(s)), x("seconds", mt(s));
  }, y = (s, b) => {
    oe(s[0], b);
    const z = (ne, h) => [
      ne(s[0]),
      s[1] ? ne(s[1]) : V[h][1]
    ];
    x("hours", z(Ke, "hours")), x("minutes", z(xe, "minutes")), x("seconds", z(mt, "seconds"));
  }, I = (s, b) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return y(s, b);
    if (e.multiDates) {
      const z = s[s.length - 1];
      return P(z);
    }
  }, W = (s) => {
    const b = d.value;
    I(b, s), A.value.multiCalendars && e.multiCalendarsSolo && u();
  }, N = () => {
    if (_(), !e.range)
      d.value = Le(w(), V.hours, V.minutes, q());
    else {
      const s = V.hours, b = V.minutes;
      d.value = [
        Le(w(), s[0], b[0], q()),
        Le(w(), s[1], b[1], q(!1))
      ];
    }
  }, K = () => {
    d.value = R(w(), ee.value(0), B.value(0));
  }, te = () => {
    d.value = w();
  }, q = (s = !0) => e.enableSeconds ? Array.isArray(V.seconds) ? s ? V.seconds[0] : V.seconds[1] : V.seconds : 0, _ = () => {
    const s = c();
    if (s) {
      const b = Array.isArray(s), z = b ? [+s[0].hours, +s[1].hours] : +s.hours, ne = b ? [+s[0].minutes, +s[1].minutes] : +s.minutes, h = b ? [+s[0].seconds, +s[1].seconds] : +s.seconds;
      x("hours", z), x("minutes", ne), e.enableSeconds && x("seconds", h);
    }
  }, T = () => Array.isArray(d.value) && d.value.length ? d.value[d.value.length - 1] : null, u = () => {
    if (Array.isArray(d.value) && d.value.length === 2) {
      const s = w(
        w(d.value[1] ? d.value[1] : lt(d.value[0], 1))
      ), [b, z] = [ge(d.value[0]), pe(d.value[0])], [ne, h] = [ge(d.value[1]), pe(d.value[1])];
      (b !== ne || b === ne && z !== h) && e.multiCalendarsSolo && C(1, ge(s), pe(s));
    }
  }, l = (s) => {
    const b = lt(s, 1);
    return { month: ge(b), year: pe(b) };
  }, v = (s) => {
    const b = ge(w(s)), z = pe(w(s));
    if (C(0, b, z), A.value.multiCalendars > 0)
      for (let ne = 1; ne < A.value.multiCalendars; ne++) {
        const h = l(
          Re(w(s), { year: ee.value(ne - 1), month: B.value(ne - 1) })
        );
        C(ne, h.month, h.year);
      }
  }, m = (s) => {
    if (d.value && Array.isArray(d.value))
      if (d.value.some((b) => ke(s, b))) {
        const b = d.value.filter((z) => !ke(z, s));
        d.value = b.length ? b : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > d.value.length || !e.multiDatesLimit) && d.value.push(s);
    else
      d.value = [s];
  }, k = (s, b) => {
    const z = Oe(s, b) ? b : s, ne = Oe(b, s) ? b : s;
    return kn({ start: z, end: ne });
  }, G = (s) => {
    if (Array.isArray(d.value) && d.value[0]) {
      const b = oa(s, d.value[0]), z = k(d.value[0], s), ne = z.length === 1 ? 0 : z.filter((j) => p(j)).length, h = Math.abs(b) - ne;
      if (e.minRange && e.maxRange)
        return h >= +e.minRange && h <= +e.maxRange;
      if (e.minRange)
        return h >= +e.minRange;
      if (e.maxRange)
        return h <= +e.maxRange;
    }
    return !0;
  }, Z = (s) => Array.isArray(d.value) && d.value.length === 2 ? e.fixedStart && (Oe(s, d.value[0]) || ke(s, d.value[0])) ? [d.value[0], s] : e.fixedEnd && (Pe(s, d.value[1]) || ke(s, d.value[1])) ? [s, d.value[1]] : (n("invalid-fixed-range", s), d.value) : [], se = () => {
    e.autoApply && L.value && n("auto-apply");
  }, f = () => {
    e.autoApply && n("select-date");
  }, r = (s) => !kn({ start: s[0], end: s[1] }).some((z) => p(z)), J = (s) => (d.value = O(w(s.value)), se()), be = (s) => {
    const b = Le(w(s.value), V.hours, V.minutes, q());
    e.multiDates ? m(b) : d.value = b, a(), se();
  }, we = () => {
    M.value = d.value ? d.value.slice() : [], M.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (M.value = []);
  }, He = (s, b) => {
    const z = [w(s.value), ct(w(s.value), +e.autoRange)];
    r(z) && (b && v(s.value), M.value = z);
  }, Xe = (s) => {
    le(s.value) || (M.value = Z(w(s.value)));
  }, le = (s) => e.noDisabledRange ? k(M.value[0], s).some((z) => p(z)) : !1, re = (s, b) => {
    if (we(), e.autoRange)
      return He(s, b);
    if (e.fixedStart || e.fixedEnd)
      return Xe(s);
    M.value[0] ? G(w(s.value)) && !le(s.value) && (Pe(w(s.value), w(M.value[0])) ? M.value.unshift(w(s.value)) : M.value[1] = w(s.value)) : M.value[0] = w(s.value);
  }, ve = (s) => {
    M.value[s] = Le(
      M.value[s],
      V.hours[s],
      V.minutes[s],
      q(s !== 1)
    );
  }, ce = () => {
    M.value.length && (M.value[0] && !M.value[1] ? ve(0) : (ve(0), ve(1), a()), d.value = M.value.slice(), M.value[0] && M.value[1] && e.autoApply && n("auto-apply"), M.value[0] && !M.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, yt = (s, b = !1) => {
    if (!(p(s.value) || !s.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return J(s);
      if (!e.range)
        return be(s);
      tt(V.hours) && tt(V.minutes) && !e.multiDates && (re(s, b), ce());
    }
  }, je = (s) => {
    const b = s.find((z) => z.current);
    return b ? ra(b.value) : "";
  }, ht = (s) => {
    for (let b = s - 1; b >= 0; b--) {
      const z = bt(Re(w(), { month: ee.value(b + 1), year: B.value(b + 1) }), 1);
      C(b, ge(z), pe(z));
    }
    for (let b = s + 1; b <= A.value.multiCalendars - 1; b++) {
      const z = lt(Re(w(), { month: ee.value(b - 1), year: B.value(b - 1) }), 1);
      C(b, ge(z), pe(z));
    }
  }, et = (s) => R(w(), ee.value(s), B.value(s)), gt = (s) => Le(s, V.hours, V.minutes, q()), Ht = (s, b) => {
    const z = e.monthPicker ? ee.value(s) !== b.month || !b.fromNav : B.value(s) !== b.year;
    if (C(s, b.month, b.year), A.value.multiCalendars && !e.multiCalendarsSolo && ht(s), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (z) {
          let ne = d.value ? d.value.slice() : [];
          ne.length === 2 && ne[1] !== null && (ne = []), ne.length ? Pe(et(s), ne[0]) ? ne.unshift(et(s)) : ne[1] = et(s) : ne = [et(s)], d.value = ne;
        }
      } else
        d.value = et(s);
    n("update-month-year", { instance: s, month: b.month, year: b.year }), t(e.multiCalendarsSolo ? s : void 0);
  }, Wt = async (s = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await ft();
      const b = e.monthPicker ? s : !1;
      e.range ? n("auto-apply", b || !d.value || d.value.length === 1) : n("auto-apply", b);
    }
    a();
  }, Mt = (s, b) => {
    const z = Re(w(), { month: ee.value(b), year: B.value(b) }), ne = s < 0 ? lt(z, 1) : bt(z, 1);
    E(ge(ne), pe(ne), s < 0, e.preventMinMaxNavigation) && (C(b, ge(ne), pe(ne)), A.value.multiCalendars && !e.multiCalendarsSolo && ht(b), n("update-month-year", { instance: b, month: ge(ne), year: pe(ne) }), t());
  }, pt = (s) => {
    In(s) && In(d.value) && tt(V.hours) && tt(V.minutes) ? (s[0] && d.value[0] && (d.value[0] = Le(s[0], V.hours[0], V.minutes[0], q())), s[1] && d.value[1] && (d.value[1] = Le(s[1], V.hours[1], V.minutes[1], q(!1)))) : e.multiDates && Array.isArray(d.value) ? d.value[d.value.length - 1] = gt(s) : !e.range && !On(s) && (d.value = gt(s)), n("time-update");
  }, zt = (s, b = !0, z = !1) => {
    const ne = b ? s : V.hours, h = !b && !z ? s : V.minutes, j = z ? s : V.seconds;
    if (e.range && On(d.value) && tt(ne) && tt(h) && tt(j) && !e.disableTimeRangeValidation) {
      const $e = (Ee) => Le(d.value[Ee], ne[Ee], h[Ee], j[Ee]), Te = (Ee) => fn(d.value[Ee], 0);
      if (ke(d.value[0], d.value[1]) && (cn($e(0), Te(1)) || dn($e(1), Te(0))))
        return;
    }
    if (x("hours", ne), x("minutes", h), x("seconds", j), d.value)
      if (e.multiDates) {
        const $e = T();
        $e && pt($e);
      } else
        pt(d.value);
    else
      e.timePicker && pt(e.range ? [w(), w()] : w());
    a();
  }, jt = (s, b) => {
    e.monthChangeOnScroll && Mt(e.monthChangeOnScroll !== "inverse" ? -s.deltaY : s.deltaY, b);
  }, Kt = (s, b, z = !1) => {
    e.monthChangeOnArrows && e.vertical === z && _t(s, b);
  }, _t = (s, b) => {
    Mt(s === "right" ? -1 : 1, b);
  };
  return {
    time: V,
    month: ee,
    year: B,
    modelValue: d,
    calendars: U,
    monthYearSelect: Wt,
    isDisabled: p,
    updateTime: zt,
    getWeekNum: je,
    selectDate: yt,
    updateMonthYear: Ht,
    handleScroll: jt,
    getMarker: (s) => e.markers.find((b) => ke($(s.value), $(b.date))),
    handleArrow: Kt,
    handleSwipe: _t,
    selectCurrentDate: () => {
      e.range ? d.value && Array.isArray(d.value) && d.value[0] ? d.value = Pe(w(), d.value[0]) ? [w(), d.value[0]] : [d.value[0], w()] : d.value = [w()] : d.value = w(), f();
    },
    presetDateRange: (s, b) => {
      b || s.length && s.length <= 2 && e.range && (d.value = s.map((z) => w(z)), f(), e.multiCalendars && ft().then(() => Q(!0)));
    }
  };
}, Ll = (e, n, a) => {
  const t = F(), {
    getZonedToUtc: o,
    getZonedDate: c,
    formatDate: p,
    getDefaultPattern: $,
    checkRangeEnabled: O,
    checkPartialRangeValue: R,
    isValidDate: E,
    setDateMonthOrYear: A,
    defaults: d
  } = Ve(n), M = F(""), U = Ot(n, "format");
  st(t, () => {
    e("internal-model-change", t.value);
  }), st(U, () => {
    l();
  });
  const V = (r) => {
    const J = r || w();
    return n.modelType ? m(J) : {
      hours: Ke(J),
      minutes: xe(J),
      seconds: n.enableSeconds ? mt(J) : 0
    };
  }, ee = (r) => n.modelType ? m(r) : { month: ge(r), year: pe(r) }, B = (r) => Array.isArray(r) ? O(() => [
    ot(w(), r[0]),
    r[1] ? ot(w(), r[1]) : R()
  ]) : ot(w(), +r), L = (r, J) => (typeof r == "string" || typeof r == "number") && n.modelType ? v(r) : J, C = (r) => Array.isArray(r) ? [
    L(
      r[0],
      Le(null, +r[0].hours, +r[0].minutes, r[0].seconds)
    ),
    L(
      r[1],
      Le(null, +r[1].hours, +r[1].minutes, r[1].seconds)
    )
  ] : L(r, Le(null, r.hours, r.minutes, r.seconds)), x = (r) => Array.isArray(r) ? O(() => [
    L(r[0], A(null, +r[0].month, +r[0].year)),
    L(
      r[1],
      r[1] ? A(null, +r[1].month, +r[1].year) : R()
    )
  ]) : L(r, A(null, +r.month, +r.year)), Q = (r) => {
    if (Array.isArray(r))
      return r.map((J) => v(J));
    throw new Error(Et.dateArr("multi-dates"));
  }, oe = (r) => {
    if (Array.isArray(r))
      return [w(r[0]), w(r[1])];
    throw new Error(Et.dateArr("week-picker"));
  }, P = (r) => n.modelAuto ? Array.isArray(r) ? [v(r[0]), v(r[1])] : n.autoApply ? [v(r)] : [v(r), null] : Array.isArray(r) ? O(() => [
    v(r[0]),
    r[1] ? v(r[1]) : R()
  ]) : v(r), y = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(R());
  }, I = () => {
    const r = t.value;
    return [
      m(r[0]),
      r[1] ? m(r[1]) : R()
    ];
  }, W = () => t.value[1] ? I() : m(_e(t.value[0])), N = () => (t.value || []).map((r) => m(r)), K = () => (y(), n.modelAuto ? W() : n.multiDates ? N() : Array.isArray(t.value) ? O(() => I()) : m(_e(t.value))), te = (r) => r ? n.timePicker ? C(_e(r)) : n.monthPicker ? x(_e(r)) : n.yearPicker ? B(_e(r)) : n.multiDates ? Q(_e(r)) : n.weekPicker ? oe(_e(r)) : P(_e(r)) : null, q = (r) => {
    const J = te(r);
    E(_e(J)) ? (t.value = _e(J), l()) : (t.value = null, M.value = "");
  }, _ = () => {
    var J;
    const r = (be) => {
      var we;
      return wt(be, (we = d.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${r(t.value[0])} ${(J = d.value.textInputOptions) == null ? void 0 : J.rangeSeparator} ${t.value[1] ? r(t.value[1]) : ""}`;
  }, T = () => {
    var r;
    return a.value && t.value ? Array.isArray(t.value) ? _() : wt(t.value, (r = d.value.textInputOptions) == null ? void 0 : r.format) : p(t.value);
  }, u = () => {
    var r;
    return t.value ? n.multiDates ? t.value.map((J) => p(J)).join("; ") : n.textInput && typeof ((r = d.value.textInputOptions) == null ? void 0 : r.format) == "string" ? T() : p(t.value) : "";
  }, l = () => {
    !n.format || typeof n.format == "string" ? M.value = u() : M.value = n.format(t.value);
  }, v = (r) => {
    if (n.utc) {
      const J = new Date(r);
      return n.utc === "preserve" ? new Date(J.getTime() + J.getTimezoneOffset() * 6e4) : J;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? c(new Date(r)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? ln(r, $(), new Date()) : c(ln(r, n.modelType, new Date())) : c(new Date(r));
  }, m = (r) => n.utc ? Ja(r, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +o(r) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? p(o(r)) : p(o(r), n.modelType) : o(r), k = (r) => {
    e("update:model-value", r);
  }, G = (r) => Array.isArray(t.value) ? [
    r(t.value[0]),
    t.value[1] ? r(t.value[1]) : R()
  ] : r(_e(t.value)), Z = (r) => k(_e(G(r)));
  return {
    inputValue: M,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: q,
    formatInputValue: l,
    emitModelValue: () => (l(), n.monthPicker ? Z(ee) : n.timePicker ? Z(V) : n.yearPicker ? Z(pe) : n.weekPicker ? k(t.value) : k(K()))
  };
}, El = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: o, defaults: c } = Ve(e), p = (A, d) => {
    let M = A;
    return c.value.filters.months.includes(ge(M)) ? (M = d ? lt(A, 1) : bt(A, 1), p(M, d)) : M;
  }, $ = (A, d) => {
    let M = A;
    return c.value.filters.years.includes(pe(M)) ? (M = d ? sa(A, 1) : ia(A, 1), $(M, d)) : M;
  }, O = (A) => {
    const d = Re(new Date(), { month: e.month, year: e.year });
    let M = A ? lt(d, 1) : bt(d, 1), U = ge(M), V = pe(M);
    c.value.filters.months.includes(U) && (M = p(M, A), U = ge(M), V = pe(M)), c.value.filters.years.includes(V) && (M = $(M, A), V = pe(M)), a(U, V, A, e.preventMinMaxNavigation) && R(U, V);
  }, R = (A, d) => {
    n("update-month-year", { month: A, year: d });
  }, E = Y(() => (A) => {
    if (!e.preventMinMaxNavigation || A && !e.maxDate || !A && !e.minDate)
      return !1;
    const d = Re(new Date(), { month: e.month, year: e.year }), M = A ? lt(d, 1) : bt(d, 1), U = [ge(M), pe(M)];
    return A ? !t(...U) : !o(...U);
  });
  return { handleMonthYearChange: O, isDisabled: E, updateMonthYear: R };
};
var It = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(It || {});
const Fl = (e, n, a, t) => {
  const o = F({
    top: "0",
    left: "0",
    transform: "none"
  }), c = F(!1), p = Ot(t, "teleportCenter");
  st(p, () => {
    ee();
  });
  const $ = (P) => {
    const y = P.getBoundingClientRect();
    return {
      left: y.left + wwLib.getFrontWindow().scrollX,
      top: y.top + wwLib.getFrontWindow().scrollY
    };
  }, O = (P) => {
    const y = P.getBoundingClientRect();
    let I = 0, W = 0;
    for (; P && !isNaN(P.offsetLeft) && !isNaN(P.offsetTop); )
      I += P.offsetLeft - P.scrollLeft, W = y.top + P.scrollTop, P = P.offsetParent;
    return { top: W, left: I };
  }, R = (P, y) => {
    o.value.left = `${P + y}px`, o.value.transform = "translateX(-100%)";
  }, E = (P) => {
    o.value.left = `${P}px`, o.value.transform = "translateX(0)";
  }, A = (P, y, I = !1) => {
    t.position === It.left && E(P), t.position === It.right && R(P, y), t.position === It.center && (o.value.left = `${P + y / 2}px`, o.value.transform = I ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, d = (P) => {
    const { width: y, height: I } = P.getBoundingClientRect(), { top: W, left: N } = t.altPosition ? O(P) : $(P);
    return { top: W, left: N, width: y, height: I };
  }, M = () => {
    const P = Me(n);
    if (P) {
      const { top: y, left: I, width: W, height: N } = d(P);
      o.value.top = `${y + N / 2}px`, o.value.transform = "translateY(-50%)", A(I, W, !0);
    }
  }, U = () => {
    o.value.left = "50%", o.value.top = "50%", o.value.transform = "translate(-50%, -50%)", o.value.position = "fixed";
  }, V = () => {
    const P = Me(n);
    o.value = t.altPosition(P);
  }, ee = (P = !0) => {
    if (!t.inline)
      return p.value ? U() : t.altPosition && typeof t.altPosition != "boolean" ? V() : (P && a("recalculate-position"), oe());
  }, B = ({
    inputEl: P,
    menuEl: y,
    left: I,
    width: W
  }) => {
    wwLib.getFrontWindow().screen.width > 768 && A(I, W), x(P, y);
  }, L = (P, y) => {
    const { top: I, left: W, height: N, width: K } = d(P);
    o.value.top = `${N + I + +t.offset}px`, B({ inputEl: P, menuEl: y, left: W, width: K }), c.value = !1;
  }, C = (P, y) => {
    const { top: I, left: W, width: N } = d(P), { height: K } = y.getBoundingClientRect();
    o.value.top = `${I - K - +t.offset}px`, B({ inputEl: P, menuEl: y, left: W, width: N }), c.value = !0;
  }, x = (P, y) => {
    if (t.autoPosition) {
      const { left: I, width: W } = d(P), { left: N, right: K } = y.getBoundingClientRect();
      if (N < 0)
        return E(I);
      if (K > wwLib.getFrontDocument().documentElement.clientWidth)
        return R(I, W);
    }
  }, Q = (P, y) => {
    const { height: I } = y.getBoundingClientRect(), { top: W, height: N } = P.getBoundingClientRect(), te = wwLib.getFrontWindow().innerHeight - W - N, q = W;
    return I <= te ? L(P, y) : I > te && I <= q ? C(P, y) : te >= q ? L(P, y) : C(P, y);
  }, oe = () => {
    const P = Me(n), y = Me(e);
    if (P && y)
      return t.autoPosition ? Q(P, y) : L(P, y);
  };
  return { openOnTop: c, menuPosition: o, setMenuPosition: ee, setInitialPosition: M };
}, dt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], Ul = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Hl = {
  all: () => dt,
  monthYear: () => dt.filter((e) => e.use.includes("month-year")),
  input: () => Ul,
  timePicker: () => dt.filter((e) => e.use.includes("time")),
  action: () => dt.filter((e) => e.use.includes("action")),
  calendar: () => dt.filter((e) => e.use.includes("calendar")),
  menu: () => dt.filter((e) => e.use.includes("menu"))
}, rt = (e, n, a) => {
  const t = [];
  return Hl[n]().forEach((o) => {
    e[o.name] && t.push(o.name);
  }), a && a.length && a.forEach((o) => {
    o.slot && t.push(o.slot);
  }), t;
}, Ut = (e) => ({ transitionName: Y(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), Qe = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, Wl = ["aria-label", "aria-disabled", "aria-readonly"], zl = {
  key: 1,
  class: "dp__input_wrap"
}, jl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Kl = {
  key: 2,
  class: "dp__input_icon"
}, xl = {
  key: 4,
  class: "dp__clear_icon"
}, Gl = /* @__PURE__ */ Ue({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Qe
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: o, isValidDate: c, defaults: p } = Ve(t), $ = F(), O = F(null), R = F(!1), E = Y(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: R.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), A = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), $.value = null);
    }, d = (y) => {
      var I;
      return qa(y, ((I = p.value.textInputOptions) == null ? void 0 : I.format) || o());
    }, M = (y) => {
      const { rangeSeparator: I } = p.value.textInputOptions, [W, N] = y.split(`${I}`);
      if (W) {
        const K = d(W.trim()), te = N ? d(N.trim()) : null, q = K && te ? [K, te] : [K];
        $.value = K ? q : null;
      }
    }, U = (y) => {
      if (t.range)
        M(y);
      else if (t.multiDates) {
        const I = y.split(";");
        $.value = I.map((W) => d(W.trim())).filter((W) => W);
      } else
        $.value = d(y);
    }, V = (y) => {
      var W;
      const { value: I } = y.target;
      I !== "" ? ((W = p.value.textInputOptions) != null && W.openMenu && !t.isMenuOpen && a("open"), U(I), a("set-input-date", $.value)) : A(), a("update:input-value", I);
    }, ee = () => {
      var y, I;
      (y = p.value.textInputOptions) != null && y.enterSubmit && c($.value) && t.inputValue !== "" ? (a("set-input-date", $.value, !0), $.value = null) : (I = p.value.textInputOptions) != null && I.enterSubmit && t.inputValue === "" && ($.value = null, a("clear"));
    }, B = () => {
      var y, I;
      (y = p.value.textInputOptions) != null && y.tabSubmit && c($.value) && t.inputValue !== "" ? (a("set-input-date", $.value, !0), $.value = null) : (I = p.value.textInputOptions) != null && I.tabSubmit && t.inputValue === "" && ($.value = null, a("clear"));
    }, L = () => {
      R.value = !0, a("focus");
    }, C = (y) => {
      var I;
      y.preventDefault(), y.stopImmediatePropagation(), y.stopPropagation(), t.textInput && ((I = p.value.textInputOptions) != null && I.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? p.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, x = () => {
      R.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && $.value && (a("set-input-date", $.value), a("select-date"), $.value = null);
    }, Q = () => {
      a("clear");
    }, oe = (y) => {
      t.textInput || y.preventDefault();
    };
    return n({
      focusInput: () => {
        O.value && O.value.focus({ preventScroll: !0 });
      }
    }), (y, I) => {
      var W;
      return g(), S("div", {
        onClick: C,
        "aria-label": (W = i(p).ariaLabels) == null ? void 0 : W.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": y.disabled,
        "aria-readonly": y.readonly
      }, [
        y.$slots.trigger && !y.$slots["dp-input"] && !y.inline ? H(y.$slots, "trigger", { key: 0 }) : D("", !0),
        !y.$slots.trigger && (!y.inline || y.inlineWithInput) ? (g(), S("div", zl, [
          y.$slots["dp-input"] && !y.$slots.trigger && !y.inline ? H(y.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: V,
            onEnter: ee,
            onTab: B,
            onClear: Q
          }) : D("", !0),
          y.$slots["dp-input"] ? D("", !0) : (g(), S("input", {
            key: 1,
            ref_key: "inputRef",
            ref: O,
            id: y.uid ? `dp-input-${y.uid}` : void 0,
            name: y.name,
            class: ye(i(E)),
            inputmode: y.textInput ? "text" : "none",
            placeholder: y.placeholder,
            disabled: y.disabled,
            readonly: y.readonly,
            required: y.required,
            value: e.inputValue,
            autocomplete: y.autocomplete,
            onInput: V,
            onKeydown: [
              de(C, ["enter"]),
              de(B, ["tab"])
            ],
            onBlur: x,
            onFocus: L,
            onKeypress: oe
          }, null, 42, jl)),
          y.$slots["input-icon"] && !y.hideInputIcon ? (g(), S("span", Kl, [
            H(y.$slots, "input-icon")
          ])) : D("", !0),
          !y.$slots["input-icon"] && !y.hideInputIcon && !y.$slots["dp-input"] ? (g(), me(i(Ft), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : D("", !0),
          y.$slots["clear-icon"] && e.inputValue && y.clearable && !y.disabled && !y.readonly ? (g(), S("span", xl, [
            H(y.$slots, "clear-icon", { clear: Q })
          ])) : D("", !0),
          y.clearable && !y.$slots["clear-icon"] && e.inputValue && !y.disabled && !y.readonly ? (g(), me(i(Ma), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ge(Q, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : D("", !0)
        ])) : D("", !0)
      ], 8, Wl);
    };
  }
}), Zl = { class: "dp__selection_preview" }, Xl = { class: "dp__action_buttons" }, ql = ["onKeydown"], Jl = /* @__PURE__ */ Ue({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: o, defaults: c } = Ve(a), { buildMatrix: p } = Je(), $ = F(null), O = F(null);
    Fe(() => {
      a.arrowNavigation && p([Me($), Me(O)], "actionRow");
    });
    const R = Y(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), E = Y(() => !d.value || !M.value || !R.value), A = Y(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: E.value
    })), d = Y(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : o(a.internalModelValue)), M = Y(() => a.monthPicker ? B(a.internalModelValue) : !0), U = () => {
      const C = c.value.previewFormat;
      return a.timePicker || a.monthPicker, C(_e(a.internalModelValue));
    }, V = () => {
      const C = a.internalModelValue;
      return c.value.multiCalendars > 0 ? `${t(C[0])} - ${t(C[1])}` : [t(C[0]), t(C[1])];
    }, ee = Y(() => !a.internalModelValue || !a.menuMount ? "" : typeof c.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? V() : a.multiDates ? a.internalModelValue.map((C) => `${t(C)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : U()), B = (C) => {
      if (!a.monthPicker)
        return !0;
      let x = !0;
      return a.minDate && a.maxDate ? Oe(w(C), w(a.minDate)) && Pe(w(C), w(a.maxDate)) : (a.minDate && (x = Oe(w(C), w(a.minDate))), a.maxDate && (x = Pe(w(C), w(a.maxDate))), x);
    }, L = () => {
      d.value && M.value && R.value ? n("select-date") : n("invalid-select");
    };
    return (C, x) => (g(), S("div", {
      class: "dp__action_row",
      style: at(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      C.$slots["action-row"] ? H(C.$slots, "action-row", Ye(Ce({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: i(E),
        selectDate: () => C.$emit("select-date"),
        closePicker: () => C.$emit("close-picker")
      }))) : (g(), S(fe, { key: 1 }, [
        ae("div", Zl, [
          C.$slots["action-preview"] ? H(C.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : D("", !0),
          C.$slots["action-preview"] ? D("", !0) : (g(), S(fe, { key: 1 }, [
            Array.isArray(i(ee)) ? D("", !0) : (g(), S(fe, { key: 0 }, [
              We(Se(i(ee)), 1)
            ], 64)),
            Array.isArray(i(ee)) ? (g(!0), S(fe, { key: 1 }, De(i(ee), (Q, oe) => (g(), S("div", { key: oe }, Se(Q), 1))), 128)) : D("", !0)
          ], 64))
        ]),
        ae("div", Xl, [
          C.$slots["action-select"] ? H(C.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : D("", !0),
          C.$slots["action-select"] ? D("", !0) : (g(), S(fe, { key: 1 }, [
            C.inline ? D("", !0) : (g(), S("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: $,
              tabindex: "0",
              onClick: x[0] || (x[0] = (Q) => C.$emit("close-picker")),
              onKeydown: [
                x[1] || (x[1] = de((Q) => C.$emit("close-picker"), ["enter"])),
                x[2] || (x[2] = de((Q) => C.$emit("close-picker"), ["space"]))
              ]
            }, Se(C.cancelText), 545)),
            ae("span", {
              class: ye(i(A)),
              tabindex: "0",
              onKeydown: [
                de(L, ["enter"]),
                de(L, ["space"])
              ],
              onClick: L,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: O
            }, Se(C.selectText), 43, ql)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), Ql = ["aria-label"], er = {
  class: "dp__calendar_header",
  role: "row"
}, tr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, nr = /* @__PURE__ */ ae("div", { class: "dp__calendar_header_separator" }, null, -1), ar = ["aria-label"], lr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, rr = { class: "dp__cell_inner" }, or = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], sr = /* @__PURE__ */ ae("div", { class: "dp__arrow_bottom_tp" }, null, -1), ir = /* @__PURE__ */ Ue({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Qe
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: o } = Je(), { setDateMonthOrYear: c, defaults: p } = Ve(t), $ = F(null), O = F({ bottom: "", left: "", transform: "" }), R = F([]), E = F(null), A = F(!0), d = F(""), M = F({ startX: 0, endX: 0, startY: 0, endY: 0 }), U = Y(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Tl(t.locale, +t.weekStart));
    Fe(() => {
      a("mount", { cmp: "calendar", refs: R }), t.noSwipe || E.value && (E.value.addEventListener("touchstart", I, { passive: !1 }), E.value.addEventListener("touchend", W, { passive: !1 }), E.value.addEventListener("touchmove", N, { passive: !1 })), t.monthChangeOnScroll && E.value && E.value.addEventListener("wheel", q, { passive: !1 });
    });
    const V = (_) => _ ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", ee = (_, T) => {
      if (t.transitions) {
        const u = ze(c(w(), t.month, t.year));
        d.value = Oe(ze(c(w(), _, T)), u) ? p.value.transitions[V(!0)] : p.value.transitions[V(!1)], A.value = !1, ft(() => {
          A.value = !0;
        });
      }
    }, B = Y(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), L = Y(() => (_) => {
      const T = Pl(_);
      return {
        dp__marker_dot: T.type === "dot",
        dp__marker_line: T.type === "line"
      };
    }), C = Y(() => (_) => ke(_, $.value)), x = Y(() => ({
      dp__calendar: !0,
      dp__calendar_next: p.value.multiCalendars > 0 && t.instance !== 0
    })), Q = Y(() => (_) => t.hideOffsetDates ? _.current : !0), oe = Y(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), P = (_, T, u) => {
      var l, v;
      if (a("set-hover-date", _), (v = (l = _.marker) == null ? void 0 : l.tooltip) != null && v.length) {
        const m = Me(R.value[T][u]);
        if (m) {
          const { width: k, height: G } = m.getBoundingClientRect();
          O.value = {
            bottom: `${G}px`,
            left: `${k / 2}px`,
            transform: "translateX(-50%)"
          }, $.value = _.value, a("tooltip-open", _.value);
        }
      }
    }, y = (_) => {
      $.value && ($.value = null, a("tooltip-close", _.value));
    }, I = (_) => {
      M.value.startX = _.changedTouches[0].screenX, M.value.startY = _.changedTouches[0].screenY;
    }, W = (_) => {
      M.value.endX = _.changedTouches[0].screenX, M.value.endY = _.changedTouches[0].screenY, K();
    }, N = (_) => {
      t.vertical && !t.inline && _.preventDefault();
    }, K = () => {
      const _ = t.vertical ? "Y" : "X";
      Math.abs(M.value[`start${_}`] - M.value[`end${_}`]) > 10 && a("handle-swipe", M.value[`start${_}`] > M.value[`end${_}`] ? "right" : "left");
    }, te = (_, T, u) => {
      _ && (Array.isArray(R.value[T]) ? R.value[T][u] = _ : R.value[T] = [_]), t.arrowNavigation && o(R.value, "calendar");
    }, q = (_) => {
      t.monthChangeOnScroll && (_.preventDefault(), a("handle-scroll", _));
    };
    return n({ triggerTransition: ee }), (_, T) => {
      var u;
      return g(), S("div", {
        class: ye(i(x))
      }, [
        ae("div", {
          style: at(i(oe))
        }, [
          e.specificMode ? D("", !0) : (g(), S("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: E,
            class: ye(i(B)),
            role: "grid",
            "aria-label": (u = i(p).ariaLabels) == null ? void 0 : u.calendarWrap
          }, [
            ae("div", er, [
              _.weekNumbers ? (g(), S("div", tr, Se(_.weekNumName), 1)) : D("", !0),
              (g(!0), S(fe, null, De(i(U), (l, v) => (g(), S("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: v,
                "data-test": "calendar-header"
              }, [
                _.$slots["calendar-header"] ? H(_.$slots, "calendar-header", {
                  key: 0,
                  day: l,
                  index: v
                }) : D("", !0),
                _.$slots["calendar-header"] ? D("", !0) : (g(), S(fe, { key: 1 }, [
                  We(Se(l), 1)
                ], 64))
              ]))), 128))
            ]),
            nr,
            qe(vt, {
              name: d.value,
              css: !!_.transitions
            }, {
              default: ie(() => {
                var l;
                return [
                  A.value ? (g(), S("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (l = i(p).ariaLabels) == null ? void 0 : l.calendarDays
                  }, [
                    (g(!0), S(fe, null, De(e.mappedDates, (v, m) => (g(), S("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: m
                    }, [
                      _.weekNumbers ? (g(), S("div", lr, [
                        ae("div", rr, Se(e.getWeekNum(v.days)), 1)
                      ])) : D("", !0),
                      (g(!0), S(fe, null, De(v.days, (k, G) => {
                        var Z, se, f;
                        return g(), S("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (r) => te(r, m, G),
                          key: G + m,
                          "aria-selected": k.classData.dp__active_date || k.classData.dp__range_start || k.classData.dp__range_start,
                          "aria-disabled": k.classData.dp__cell_disabled,
                          "aria-label": (se = (Z = i(p).ariaLabels) == null ? void 0 : Z.day) == null ? void 0 : se.call(Z, k),
                          tabindex: "0",
                          "data-test": k.value,
                          onClick: Ge((r) => _.$emit("select-date", k), ["stop", "prevent"]),
                          onKeydown: [
                            de((r) => _.$emit("select-date", k), ["enter"]),
                            de((r) => _.$emit("handle-space", k), ["space"])
                          ],
                          onMouseenter: (r) => P(k, m, G),
                          onMouseleave: (r) => y(k)
                        }, [
                          ae("div", {
                            class: ye(["dp__cell_inner", k.classData])
                          }, [
                            _.$slots.day && i(Q)(k) ? H(_.$slots, "day", {
                              key: 0,
                              day: +k.text,
                              date: k.value
                            }) : D("", !0),
                            _.$slots.day ? D("", !0) : (g(), S(fe, { key: 1 }, [
                              We(Se(k.text), 1)
                            ], 64)),
                            k.marker && i(Q)(k) ? (g(), S("div", {
                              key: 2,
                              class: ye(i(L)(k.marker)),
                              style: at(k.marker.color ? { backgroundColor: k.marker.color } : {})
                            }, null, 6)) : D("", !0),
                            i(C)(k.value) ? (g(), S("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: at(O.value)
                            }, [
                              (f = k.marker) != null && f.tooltip ? (g(), S("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: T[0] || (T[0] = Ge(() => {
                                }, ["stop"]))
                              }, [
                                (g(!0), S(fe, null, De(k.marker.tooltip, (r, J) => (g(), S("div", {
                                  key: J,
                                  class: "dp__tooltip_text"
                                }, [
                                  _.$slots["marker-tooltip"] ? H(_.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: r,
                                    day: k.value
                                  }) : D("", !0),
                                  _.$slots["marker-tooltip"] ? D("", !0) : (g(), S(fe, { key: 1 }, [
                                    ae("div", {
                                      class: "dp__tooltip_mark",
                                      style: at(r.color ? { backgroundColor: r.color } : {})
                                    }, null, 4),
                                    ae("div", null, Se(r.text), 1)
                                  ], 64))
                                ]))), 128)),
                                sr
                              ])) : D("", !0)
                            ], 4)) : D("", !0)
                          ], 2)
                        ], 40, or);
                      }), 128))
                    ]))), 128))
                  ], 8, ar)) : D("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, Ql))
        ], 4)
      ], 2);
    };
  }
}), ur = ["aria-label", "aria-disabled"], nn = /* @__PURE__ */ Ue({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = F(null);
    return Fe(() => n("set-ref", a)), (t, o) => (g(), S("div", {
      class: "dp__month_year_col_nav",
      onClick: o[0] || (o[0] = (c) => t.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = de((c) => t.$emit("activate"), ["enter"])),
        o[2] || (o[2] = de((c) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      ae("div", {
        class: ye(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        H(t.$slots, "default")
      ], 2)
    ], 40, ur));
  }
}), dr = ["onKeydown"], cr = { class: "dp__selection_grid_header" }, fr = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], mr = ["aria-label", "onKeydown"], $t = /* @__PURE__ */ Ue({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: o, buildMultiLevelMatrix: c, setMonthPicker: p } = Je(), { hideNavigationButtons: $ } = Ve(t), O = F(!1), R = F(null), E = F(null), A = F([]), d = F(), M = F(null), U = F(0), V = F(null);
    qn(() => {
      R.value = null;
    }), Fe(() => {
      ft().then(() => I()), B(), ee(!0);
    }), sn(() => ee(!1));
    const ee = (T) => {
      var u;
      t.arrowNavigation && ((u = t.headerRefs) != null && u.length ? p(T) : o(T));
    }, B = () => {
      const T = Me(E);
      T && (t.textInput || T.focus({ preventScroll: !0 }), O.value = T.clientHeight < T.scrollHeight);
    }, L = Y(
      () => ({
        dp__overlay: !0
      })
    ), C = Y(() => ({
      dp__overlay_col: !0
    })), x = (T) => t.skipActive ? !1 : T.value === t.modelValue, Q = Y(() => t.items.map((T) => T.filter((u) => u).map((u) => {
      var m, k, G;
      const l = t.disabledValues.some((Z) => Z === u.value) || y(u.value), v = (m = t.multiModelValue) != null && m.length ? (k = t.multiModelValue) == null ? void 0 : k.some(
        (Z) => ke(
          Z,
          ot(
            t.monthPicker ? Rt(new Date(), u.value) : new Date(),
            t.monthPicker ? t.year : u.value
          )
        )
      ) : x(u);
      return {
        ...u,
        className: {
          dp__overlay_cell_active: v,
          dp__overlay_cell: !v,
          dp__overlay_cell_disabled: l,
          dp__overlay_cell_active_disabled: l && v,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (G = t.multiModelValue) != null && G.length ? N(u.value) : !1
        }
      };
    }))), oe = Y(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: O.value,
        dp__button_bottom: t.autoApply
      })
    ), P = Y(() => {
      var T, u;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((T = t.items) == null ? void 0 : T.length) <= 6,
        dp__container_block: ((u = t.items) == null ? void 0 : u.length) > 6
      };
    }), y = (T) => {
      const u = t.maxValue || t.maxValue === 0, l = t.minValue || t.minValue === 0;
      return !u && !l ? !1 : u && l ? +T > +t.maxValue || +T < +t.minValue : u ? +T > +t.maxValue : l ? +T < +t.minValue : !1;
    }, I = () => {
      const T = Me(R), u = Me(E), l = Me(M), v = Me(V), m = l ? l.getBoundingClientRect().height : 0;
      u && (U.value = u.getBoundingClientRect().height - m), T && v && (v.scrollTop = T.offsetTop - v.offsetTop - (U.value / 2 - T.getBoundingClientRect().height) - m);
    }, W = (T) => {
      !t.disabledValues.some((u) => u === T) && !y(T) && (a("update:model-value", T), a("selected"));
    }, N = (T) => {
      const u = t.monthPicker ? t.year : T;
      return zn(
        t.multiModelValue,
        ot(
          t.monthPicker ? Rt(new Date(), d.value || 0) : new Date(),
          t.monthPicker ? u : d.value || u
        ),
        ot(t.monthPicker ? Rt(new Date(), T) : new Date(), u)
      );
    }, K = () => {
      a("toggle"), a("reset-flow");
    }, te = () => {
      t.escClose && K();
    }, q = (T, u, l, v) => {
      T && (u.value === +t.modelValue && !t.disabledValues.includes(u.value) && (R.value = T), t.arrowNavigation && (Array.isArray(A.value[l]) ? A.value[l][v] = T : A.value[l] = [T], _()));
    }, _ = () => {
      var u, l;
      const T = (u = t.headerRefs) != null && u.length ? [t.headerRefs].concat(A.value) : A.value.concat([t.skipButtonRef ? [] : [M.value]]);
      c(_e(T), (l = t.headerRefs) != null && l.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: B }), (T, u) => {
      var l;
      return g(), S("div", {
        ref_key: "gridWrapRef",
        ref: E,
        class: ye(i(L)),
        role: "dialog",
        tabindex: "0",
        onKeydown: de(te, ["esc"])
      }, [
        ae("div", {
          class: ye(i(P)),
          ref_key: "containerRef",
          ref: V,
          role: "grid",
          style: at({ height: `${U.value}px` })
        }, [
          ae("div", cr, [
            H(T.$slots, "header")
          ]),
          T.$slots.overlay ? H(T.$slots, "overlay", { key: 0 }) : (g(!0), S(fe, { key: 1 }, De(i(Q), (v, m) => (g(), S("div", {
            class: "dp__overlay_row",
            key: m,
            role: "row"
          }, [
            (g(!0), S(fe, null, De(v, (k, G) => (g(), S("div", {
              role: "gridcell",
              class: ye(i(C)),
              key: k.value,
              "aria-selected": k.value === e.modelValue && !e.disabledValues.includes(k.value),
              "aria-disabled": k.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (Z) => q(Z, k, m, G),
              tabindex: "0",
              "data-test": k.text,
              onClick: (Z) => W(k.value),
              onKeydown: [
                de((Z) => W(k.value), ["enter"]),
                de((Z) => W(k.value), ["space"])
              ],
              onMouseover: (Z) => d.value = k.value
            }, [
              ae("div", {
                class: ye(k.className)
              }, [
                T.$slots.item ? H(T.$slots, "item", {
                  key: 0,
                  item: k
                }) : D("", !0),
                T.$slots.item ? D("", !0) : (g(), S(fe, { key: 1 }, [
                  We(Se(k.text), 1)
                ], 64))
              ], 2)
            ], 42, fr))), 128))
          ]))), 128))
        ], 6),
        T.$slots["button-icon"] ? Ct((g(), S("div", {
          key: 0,
          role: "button",
          "aria-label": (l = e.ariaLabels) == null ? void 0 : l.toggleOverlay,
          class: ye(i(oe)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: M,
          onClick: K,
          onKeydown: de(K, ["enter"])
        }, [
          H(T.$slots, "button-icon")
        ], 42, mr)), [
          [St, !i($)(e.type)]
        ]) : D("", !0)
      ], 42, dr);
    };
  }
}), vr = ["aria-label"], Bn = /* @__PURE__ */ Ue({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: o } = Ut(a.transitions), c = F(null);
    return Fe(() => n("set-ref", c)), (p, $) => (g(), S(fe, null, [
      ae("div", {
        class: "dp__month_year_select",
        onClick: $[0] || ($[0] = (O) => p.$emit("toggle")),
        onKeydown: [
          $[1] || ($[1] = de((O) => p.$emit("toggle"), ["enter"])),
          $[2] || ($[2] = de((O) => p.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: c
      }, [
        H(p.$slots, "default")
      ], 40, vr),
      qe(vt, {
        name: i(t)(e.showSelectionGrid),
        css: i(o)
      }, {
        default: ie(() => [
          e.showSelectionGrid ? (g(), me($t, Ce({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": $[3] || ($[3] = (O) => p.$emit("update:model-value", O)),
            onToggle: $[4] || ($[4] = (O) => p.$emit("toggle"))
          }), Be({
            "button-icon": ie(() => [
              p.$slots["calendar-icon"] ? H(p.$slots, "calendar-icon", { key: 0 }) : D("", !0),
              p.$slots["calendar-icon"] ? D("", !0) : (g(), me(i(Ft), { key: 1 }))
            ]),
            _: 2
          }, [
            p.$slots[e.slotName] ? {
              name: "item",
              fn: ie(({ item: O }) => [
                H(p.$slots, e.slotName, { item: O })
              ]),
              key: "0"
            } : void 0,
            p.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: ie(() => [
                H(p.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            p.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: ie(() => [
                H(p.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : D("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), yr = { class: "dp__month_year_row" }, hr = { class: "dp__month_year_wrap" }, gr = { class: "dp__month_picker_header" }, pr = ["aria-label"], kr = ["aria-label"], wr = ["aria-label"], br = /* @__PURE__ */ Ue({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: o } = Ve(t), { transitionName: c, showTransition: p } = Ut(o.value.transitions), { buildMatrix: $ } = Je(), { handleMonthYearChange: O, isDisabled: R, updateMonthYear: E } = El(t, a), A = F(!1), d = F(!1), M = F([null, null, null, null]), U = F(null), V = F(null), ee = F(null);
    Fe(() => {
      a("mount");
    });
    const B = (f) => ({
      get: () => t[f],
      set: (r) => {
        const J = f === "month" ? "year" : "month";
        a("update-month-year", { [f]: r, [J]: t[J] }), a("month-year-select", f === "year"), f === "month" ? m(!0) : k(!0);
      }
    }), L = Y(B("month")), C = Y(B("year")), x = (f) => {
      const r = pe(w(f));
      return t.year === r;
    }, Q = Y(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((f) => w(f)).filter((f) => x(f)).map((f) => ge(f)) : [] : []), oe = Y(() => (f) => {
      const r = f === "month";
      return {
        showSelectionGrid: (r ? A : d).value,
        items: (r ? T : u).value,
        disabledValues: o.value.filters[r ? "months" : "years"].concat(Q.value),
        minValue: (r ? W : y).value,
        maxValue: (r ? N : I).value,
        headerRefs: r && t.monthPicker ? [U.value, V.value, ee.value] : [],
        escClose: t.escClose,
        transitions: o.value.transitions,
        ariaLabels: o.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), P = Y(() => (f) => ({
      month: t.month,
      year: t.year,
      items: f === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: E,
      toggle: f === "month" ? m : k
    })), y = Y(() => t.minDate ? pe(w(t.minDate)) : null), I = Y(() => t.maxDate ? pe(w(t.maxDate)) : null), W = Y(() => {
      if (t.minDate && y.value) {
        if (y.value > t.year)
          return 12;
        if (y.value === t.year)
          return ge(w(t.minDate));
      }
      return null;
    }), N = Y(() => t.maxDate && I.value ? I.value < t.year ? -1 : I.value === t.year ? ge(w(t.maxDate)) : null : null), K = Y(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), te = (f) => f.reverse(), q = (f, r = !1) => {
      const J = [], be = (we) => r ? te(we) : we;
      for (let we = 0; we < f.length; we += 3) {
        const He = [f[we], f[we + 1], f[we + 2]];
        J.push(be(He));
      }
      return r ? J.reverse() : J;
    }, _ = Y(() => {
      const f = t.months.find((r) => r.value === t.month);
      return f || { text: "", value: 0 };
    }), T = Y(() => q(t.months)), u = Y(() => q(t.years, t.reverseYears)), l = Y(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), v = Y(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === o.value.multiCalendars - 1 : !0), m = (f = !1) => {
      G(f), A.value = !A.value, A.value || a("overlay-closed");
    }, k = (f = !1) => {
      G(f), d.value = !d.value, d.value || a("overlay-closed");
    }, G = (f) => {
      f || a("reset-flow");
    }, Z = (f = !1) => {
      R.value(f) || a("update-month-year", {
        year: f ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, se = (f, r) => {
      t.arrowNavigation && (M.value[r] = Me(f), $(M.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: m,
      toggleYearPicker: k
    }), (f, r) => {
      var J, be, we, He, Xe;
      return g(), S("div", yr, [
        f.$slots["month-year"] ? H(f.$slots, "month-year", Ye(Ce({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: i(E), handleMonthYearChange: i(O), instance: e.instance }))) : (g(), S(fe, { key: 1 }, [
          !f.monthPicker && !f.yearPicker ? (g(), S(fe, { key: 0 }, [
            i(l) && !f.vertical ? (g(), me(nn, {
              key: 0,
              "aria-label": (J = i(o).ariaLabels) == null ? void 0 : J.prevMonth,
              disabled: i(R)(!1),
              onActivate: r[0] || (r[0] = (le) => i(O)(!1)),
              onSetRef: r[1] || (r[1] = (le) => se(le, 0))
            }, {
              default: ie(() => [
                f.$slots["arrow-left"] ? H(f.$slots, "arrow-left", { key: 0 }) : D("", !0),
                f.$slots["arrow-left"] ? D("", !0) : (g(), me(i(wn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : D("", !0),
            ae("div", hr, [
              qe(Bn, Ce({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (be = i(o).ariaLabels) == null ? void 0 : be.openMonthsOverlay,
                modelValue: i(L),
                "onUpdate:modelValue": r[2] || (r[2] = (le) => nt(L) ? L.value = le : null)
              }, i(oe)("month"), {
                onToggle: m,
                onSetRef: r[3] || (r[3] = (le) => se(le, 1))
              }), Be({
                default: ie(() => [
                  f.$slots.month ? H(f.$slots, "month", Ye(Ce({ key: 0 }, i(_)))) : D("", !0),
                  f.$slots.month ? D("", !0) : (g(), S(fe, { key: 1 }, [
                    We(Se(i(_).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                f.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    H(f.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                f.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: ie(({ item: le }) => [
                    H(f.$slots, "month-overlay-value", {
                      text: le.text,
                      value: le.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                f.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: ie(() => [
                    H(f.$slots, "month-overlay", Ye(Ze(i(P)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                f.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: ie(() => [
                    H(f.$slots, "month-overlay-header", { toggle: m })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              qe(Bn, Ce({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (we = i(o).ariaLabels) == null ? void 0 : we.openYearsOverlay,
                modelValue: i(C),
                "onUpdate:modelValue": r[4] || (r[4] = (le) => nt(C) ? C.value = le : null)
              }, i(oe)("year"), {
                onToggle: k,
                onSetRef: r[5] || (r[5] = (le) => se(le, 2))
              }), Be({
                default: ie(() => [
                  f.$slots.year ? H(f.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : D("", !0),
                  f.$slots.year ? D("", !0) : (g(), S(fe, { key: 1 }, [
                    We(Se(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                f.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    H(f.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                f.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: ie(({ item: le }) => [
                    H(f.$slots, "year-overlay-value", {
                      text: le.text,
                      value: le.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                f.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: ie(() => [
                    H(f.$slots, "year-overlay", Ye(Ze(i(P)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                f.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: ie(() => [
                    H(f.$slots, "year-overlay-header", { toggle: k })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            i(l) && f.vertical ? (g(), me(nn, {
              key: 1,
              "aria-label": (He = i(o).ariaLabels) == null ? void 0 : He.prevMonth,
              disabled: i(R)(!1),
              onActivate: r[6] || (r[6] = (le) => i(O)(!1))
            }, {
              default: ie(() => [
                f.$slots["arrow-up"] ? H(f.$slots, "arrow-up", { key: 0 }) : D("", !0),
                f.$slots["arrow-up"] ? D("", !0) : (g(), me(i(Hn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : D("", !0),
            i(v) ? (g(), me(nn, {
              key: 2,
              ref: "rightIcon",
              disabled: i(R)(!0),
              "aria-label": (Xe = i(o).ariaLabels) == null ? void 0 : Xe.nextMonth,
              onActivate: r[7] || (r[7] = (le) => i(O)(!0)),
              onSetRef: r[8] || (r[8] = (le) => se(le, 3))
            }, {
              default: ie(() => [
                f.$slots[f.vertical ? "arrow-down" : "arrow-right"] ? H(f.$slots, f.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : D("", !0),
                f.$slots[f.vertical ? "arrow-down" : "arrow-right"] ? D("", !0) : (g(), me(Pt(f.vertical ? i(Wn) : i(bn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : D("", !0)
          ], 64)) : D("", !0),
          f.monthPicker ? (g(), me($t, Ce({ key: 1 }, i(oe)("month"), {
            "skip-active": f.range,
            year: e.year,
            "multi-model-value": i(K),
            "month-picker": "",
            modelValue: i(L),
            "onUpdate:modelValue": r[17] || (r[17] = (le) => nt(L) ? L.value = le : null),
            onToggle: m,
            onSelected: r[18] || (r[18] = (le) => f.$emit("overlay-closed"))
          }), Be({
            header: ie(() => {
              var le, re, ve;
              return [
                ae("div", gr, [
                  ae("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: U,
                    onClick: r[9] || (r[9] = (ce) => Z(!1)),
                    onKeydown: r[10] || (r[10] = de((ce) => Z(!1), ["enter"]))
                  }, [
                    ae("div", {
                      class: ye(["dp__inner_nav", { dp__inner_nav_disabled: i(R)(!1) }]),
                      role: "button",
                      "aria-label": (le = i(o).ariaLabels) == null ? void 0 : le.prevMonth
                    }, [
                      f.$slots["arrow-left"] ? H(f.$slots, "arrow-left", { key: 0 }) : D("", !0),
                      f.$slots["arrow-left"] ? D("", !0) : (g(), me(i(wn), { key: 1 }))
                    ], 10, pr)
                  ], 544),
                  ae("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: V,
                    "aria-label": (re = i(o).ariaLabels) == null ? void 0 : re.openYearsOverlay,
                    tabindex: "0",
                    onClick: r[11] || (r[11] = () => k(!1)),
                    onKeydown: r[12] || (r[12] = de(() => k(!1), ["enter"]))
                  }, [
                    f.$slots.year ? H(f.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : D("", !0),
                    f.$slots.year ? D("", !0) : (g(), S(fe, { key: 1 }, [
                      We(Se(e.year), 1)
                    ], 64))
                  ], 40, kr),
                  ae("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: ee,
                    onClick: r[13] || (r[13] = (ce) => Z(!0)),
                    onKeydown: r[14] || (r[14] = de((ce) => Z(!0), ["enter"]))
                  }, [
                    ae("div", {
                      class: ye(["dp__inner_nav", { dp__inner_nav_disabled: i(R)(!0) }]),
                      role: "button",
                      "aria-label": (ve = i(o).ariaLabels) == null ? void 0 : ve.nextMonth
                    }, [
                      f.$slots["arrow-right"] ? H(f.$slots, "arrow-right", { key: 0 }) : D("", !0),
                      f.$slots["arrow-right"] ? D("", !0) : (g(), me(i(bn), { key: 1 }))
                    ], 10, wr)
                  ], 544)
                ]),
                qe(vt, {
                  name: i(c)(d.value),
                  css: i(p)
                }, {
                  default: ie(() => [
                    d.value ? (g(), me($t, Ce({ key: 0 }, i(oe)("year"), {
                      modelValue: i(C),
                      "onUpdate:modelValue": r[15] || (r[15] = (ce) => nt(C) ? C.value = ce : null),
                      onToggle: k,
                      onSelected: r[16] || (r[16] = (ce) => f.$emit("overlay-closed"))
                    }), Be({
                      "button-icon": ie(() => [
                        f.$slots["calendar-icon"] ? H(f.$slots, "calendar-icon", { key: 0 }) : D("", !0),
                        f.$slots["calendar-icon"] ? D("", !0) : (g(), me(i(Ft), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      f.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: ie(({ item: ce }) => [
                          H(f.$slots, "year-overlay-value", {
                            text: ce.text,
                            value: ce.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : D("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            f.$slots["month-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: le }) => [
                H(f.$slots, "month-overlay-value", {
                  text: le.text,
                  value: le.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : D("", !0),
          f.yearPicker ? (g(), me($t, Ce({ key: 2 }, i(oe)("year"), {
            modelValue: i(C),
            "onUpdate:modelValue": r[19] || (r[19] = (le) => nt(C) ? C.value = le : null),
            "multi-model-value": i(K),
            "skip-active": f.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: k,
            onSelected: r[20] || (r[20] = (le) => f.$emit("overlay-closed"))
          }), Be({ _: 2 }, [
            f.$slots["year-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: le }) => [
                H(f.$slots, "year-overlay-value", {
                  text: le.text,
                  value: le.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : D("", !0)
        ], 64))
      ]);
    };
  }
}), $r = {
  key: 0,
  class: "dp__time_input"
}, Dr = ["aria-label", "onKeydown", "onClick"], Mr = ["aria-label", "data-test", "onKeydown", "onClick"], _r = ["aria-label", "onKeydown", "onClick"], Tr = { key: 0 }, Ar = ["aria-label", "onKeydown"], Cr = /* @__PURE__ */ Ue({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Qe
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: o, setTimePickerBackRef: c } = Je(), { defaults: p } = Ve(t), { transitionName: $, showTransition: O } = Ut(p.value.transitions), R = Dt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), E = F("AM"), A = F(null), d = F([]);
    Fe(() => {
      a("mounted");
    });
    const M = Y(() => (u) => !!(t.maxTime && t.maxTime[u] && t.maxTime[u] < t[u] + +t[`${u}Increment`])), U = Y(() => (u) => !!(t.minTime && t.minTime[u] && t.minTime[u] > t[u] - +t[`${u}Increment`])), V = (u, l) => Fn(Re(w(), u), l), ee = (u, l) => ua(Re(w(), u), l), B = Y(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), L = Y(() => {
      const u = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? u.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : u;
    }), C = Y(() => L.value.filter((u) => !u.separator)), x = Y(() => (u) => {
      if (u === "hours") {
        const l = K(t.hours);
        return { text: l < 10 ? `0${l}` : `${l}`, value: l };
      }
      return { text: t[u] < 10 ? `0${t[u]}` : `${t[u]}`, value: t[u] };
    }), Q = (u) => {
      const l = t.is24 ? 24 : 12, v = u === "hours" ? l : 60, m = +t[`${u}GridIncrement`], k = u === "hours" && !t.is24 ? m : 0, G = [];
      for (let Z = k; Z < v; Z += m)
        G.push({ value: Z, text: Z < 10 ? `0${Z}` : `${Z}` });
      return u === "hours" && !t.is24 && G.push({ value: 0, text: "12" }), _l(G);
    }, oe = (u, l) => {
      const v = t.minTime && t.minTime[l], m = t.maxTime && t.maxTime[l];
      return v && m ? u < v || u > m : v ? u < v : m ? u > m : !1;
    }, P = Y(() => (u) => Q(u).flat().map((v) => v.value).filter((v) => oe(v, u))), y = (u) => t[`no${u[0].toUpperCase() + u.slice(1)}Overlay`], I = (u) => {
      y(u) || (R[u] = !R[u], R[u] || a("overlay-closed"));
    }, W = (u) => u === "hours" ? Ke : u === "minutes" ? xe : mt, N = (u, l = !0) => {
      const v = l ? V : ee;
      (l ? M.value(u) : U.value(u)) || a(
        `update:${u}`,
        W(u)(v({ [u]: +t[u] }, { [u]: +t[`${u}Increment`] }))
      );
    }, K = (u) => t.is24 ? u : (u >= 12 ? E.value = "PM" : E.value = "AM", Sl(u)), te = () => {
      E.value === "PM" ? (E.value = "AM", a("update:hours", t.hours - 12)) : (E.value = "PM", a("update:hours", t.hours + 12));
    }, q = (u) => {
      R[u] = !0;
    }, _ = (u, l, v) => {
      if (u && t.arrowNavigation) {
        Array.isArray(d.value[l]) ? d.value[l][v] = u : d.value[l] = [u];
        const m = d.value.reduce(
          (k, G) => G.map((Z, se) => [...k[se] || [], G[se]]),
          []
        );
        c(t.closeTimePickerBtn), A.value && (m[1] = m[1].concat(A.value)), o(m, t.order);
      }
    }, T = (u, l) => u === "hours" && !t.is24 ? a(`update:${u}`, E.value === "PM" ? l + 12 : l) : a(`update:${u}`, l);
    return n({ openChildCmp: q }), (u, l) => {
      var v;
      return u.disabled ? D("", !0) : (g(), S("div", $r, [
        (g(!0), S(fe, null, De(i(L), (m, k) => {
          var G, Z, se;
          return g(), S("div", {
            key: k,
            class: ye(i(B))
          }, [
            m.separator ? (g(), S(fe, { key: 0 }, [
              We(" : ")
            ], 64)) : (g(), S(fe, { key: 1 }, [
              ae("div", {
                class: ye({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(M)(m.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (G = i(p).ariaLabels) == null ? void 0 : G.incrementValue(m.type),
                tabindex: "0",
                onKeydown: [
                  de((f) => N(m.type), ["enter"]),
                  de((f) => N(m.type), ["space"])
                ],
                onClick: (f) => N(m.type),
                ref_for: !0,
                ref: (f) => _(f, k, 0)
              }, [
                u.$slots["arrow-up"] ? H(u.$slots, "arrow-up", { key: 0 }) : D("", !0),
                u.$slots["arrow-up"] ? D("", !0) : (g(), me(i(Hn), { key: 1 }))
              ], 42, Dr),
              ae("div", {
                role: "button",
                "aria-label": (Z = i(p).ariaLabels) == null ? void 0 : Z.openTpOverlay(m.type),
                class: ye(y(m.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${m.type}-toggle-overlay-btn`,
                onKeydown: [
                  de((f) => I(m.type), ["enter"]),
                  de((f) => I(m.type), ["space"])
                ],
                onClick: (f) => I(m.type),
                ref_for: !0,
                ref: (f) => _(f, k, 1)
              }, [
                u.$slots[m.type] ? H(u.$slots, m.type, {
                  key: 0,
                  text: i(x)(m.type).text,
                  value: i(x)(m.type).value
                }) : D("", !0),
                u.$slots[m.type] ? D("", !0) : (g(), S(fe, { key: 1 }, [
                  We(Se(i(x)(m.type).text), 1)
                ], 64))
              ], 42, Mr),
              ae("div", {
                class: ye({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(U)(m.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (se = i(p).ariaLabels) == null ? void 0 : se.decrementValue(m.type),
                tabindex: "0",
                onKeydown: [
                  de((f) => N(m.type, !1), ["enter"]),
                  de((f) => N(m.type, !1), ["space"])
                ],
                onClick: (f) => N(m.type, !1),
                ref_for: !0,
                ref: (f) => _(f, k, 2)
              }, [
                u.$slots["arrow-down"] ? H(u.$slots, "arrow-down", { key: 0 }) : D("", !0),
                u.$slots["arrow-down"] ? D("", !0) : (g(), me(i(Wn), { key: 1 }))
              ], 42, _r)
            ], 64))
          ], 2);
        }), 128)),
        u.is24 ? D("", !0) : (g(), S("div", Tr, [
          u.$slots["am-pm-button"] ? H(u.$slots, "am-pm-button", {
            key: 0,
            toggle: te,
            value: E.value
          }) : D("", !0),
          u.$slots["am-pm-button"] ? D("", !0) : (g(), S("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: A,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (v = i(p).ariaLabels) == null ? void 0 : v.amPmButton,
            tabindex: "0",
            onClick: te,
            onKeydown: [
              de(Ge(te, ["prevent"]), ["enter"]),
              de(Ge(te, ["prevent"]), ["space"])
            ]
          }, Se(E.value), 41, Ar))
        ])),
        (g(!0), S(fe, null, De(i(C), (m, k) => (g(), me(vt, {
          key: k,
          name: i($)(R[m.type]),
          css: i(O)
        }, {
          default: ie(() => [
            R[m.type] ? (g(), me($t, {
              key: 0,
              items: Q(m.type),
              "disabled-values": i(p).filters.times[m.type].concat(i(P)(m.type)),
              "esc-close": u.escClose,
              "aria-labels": i(p).ariaLabels,
              "hide-navigation": u.hideNavigation,
              "onUpdate:modelValue": (G) => T(m.type, G),
              onSelected: (G) => I(m.type),
              onToggle: (G) => I(m.type),
              onResetFlow: l[0] || (l[0] = (G) => u.$emit("reset-flow")),
              type: m.type
            }, Be({
              "button-icon": ie(() => [
                u.$slots["clock-icon"] ? H(u.$slots, "clock-icon", { key: 0 }) : D("", !0),
                u.$slots["clock-icon"] ? D("", !0) : (g(), me(i(Un), { key: 1 }))
              ]),
              _: 2
            }, [
              u.$slots[`${m.type}-overlay-value`] ? {
                name: "item",
                fn: ie(({ item: G }) => [
                  H(u.$slots, `${m.type}-overlay-value`, {
                    text: G.text,
                    value: G.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : D("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Sr = ["aria-label"], Pr = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Nr = {
  key: 1,
  class: "dp__overlay_row"
}, Rr = ["aria-label"], Ir = /* @__PURE__ */ Ue({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: o, setTimePicker: c } = Je(), p = un(), { hideNavigationButtons: $, defaults: O } = Ve(t), { transitionName: R, showTransition: E } = Ut(O.value.transitions), A = F(null), d = F(null), M = F([]), U = F(null);
    Fe(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? o([Me(A.value)], "time") : c(!0, t.timePicker);
    });
    const V = Y(() => t.range && t.modelAuto ? Gn(t.internalModelValue) : !0), ee = F(!1), B = (N) => ({
      hours: Array.isArray(t.hours) ? t.hours[N] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[N] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[N] : t.seconds
    }), L = Y(() => {
      const N = [];
      if (t.range)
        for (let K = 0; K < 2; K++)
          N.push(B(K));
      else
        N.push(B(0));
      return N;
    }), C = (N, K = !1, te = "") => {
      K || a("reset-flow"), ee.value = N, t.arrowNavigation && (c(N), N || a("overlay-closed")), ft(() => {
        te !== "" && M.value[0] && M.value[0].openChildCmp(te);
      });
    }, x = Y(() => ({
      dp__button: !0,
      dp__button_bottom: t.autoApply
    })), Q = rt(p, "timePicker"), oe = (N, K, te) => t.range ? K === 0 ? [N, L.value[1][te]] : [L.value[0][te], N] : N, P = (N) => {
      a("update:hours", N);
    }, y = (N) => {
      a("update:minutes", N);
    }, I = (N) => {
      a("update:seconds", N);
    }, W = () => {
      U.value && t.arrowNavigation && U.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: C }), (N, K) => {
      var te;
      return g(), S("div", null, [
        N.timePicker ? D("", !0) : Ct((g(), S("div", {
          key: 0,
          class: ye(i(x)),
          role: "button",
          "aria-label": (te = i(O).ariaLabels) == null ? void 0 : te.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: A,
          onKeydown: [
            K[0] || (K[0] = de((q) => C(!0), ["enter"])),
            K[1] || (K[1] = de((q) => C(!0), ["space"]))
          ],
          onClick: K[2] || (K[2] = (q) => C(!0))
        }, [
          N.$slots["clock-icon"] ? H(N.$slots, "clock-icon", { key: 0 }) : D("", !0),
          N.$slots["clock-icon"] ? D("", !0) : (g(), me(i(Un), { key: 1 }))
        ], 42, Sr)), [
          [St, !i($)("time")]
        ]),
        qe(vt, {
          name: i(R)(ee.value),
          css: i(E)
        }, {
          default: ie(() => {
            var q;
            return [
              ee.value || N.timePicker ? (g(), S("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: U,
                tabindex: "0"
              }, [
                ae("div", Pr, [
                  N.$slots["time-picker-overlay"] ? H(N.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: P,
                    setMinutes: y,
                    setSeconds: I
                  }) : D("", !0),
                  N.$slots["time-picker-overlay"] ? D("", !0) : (g(), S("div", Nr, [
                    (g(!0), S(fe, null, De(i(L), (_, T) => Ct((g(), me(Cr, Ce({ key: T }, {
                      ...N.$props,
                      order: T,
                      hours: _.hours,
                      minutes: _.minutes,
                      seconds: _.seconds,
                      closeTimePickerBtn: d.value,
                      disabled: T === 0 ? N.fixedStart : N.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: M,
                      "onUpdate:hours": (u) => P(oe(u, T, "hours")),
                      "onUpdate:minutes": (u) => y(oe(u, T, "minutes")),
                      "onUpdate:seconds": (u) => I(oe(u, T, "seconds")),
                      onMounted: W,
                      onOverlayClosed: W
                    }), Be({ _: 2 }, [
                      De(i(Q), (u, l) => ({
                        name: u,
                        fn: ie((v) => [
                          H(N.$slots, u, Ye(Ze(v)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [St, T === 0 ? !0 : i(V)]
                    ])), 128))
                  ])),
                  N.timePicker ? D("", !0) : Ct((g(), S("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: d,
                    class: ye(i(x)),
                    role: "button",
                    "aria-label": (q = i(O).ariaLabels) == null ? void 0 : q.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      K[3] || (K[3] = de((_) => C(!1), ["enter"])),
                      K[4] || (K[4] = de((_) => C(!1), ["space"]))
                    ],
                    onClick: K[5] || (K[5] = (_) => C(!1))
                  }, [
                    N.$slots["calendar-icon"] ? H(N.$slots, "calendar-icon", { key: 0 }) : D("", !0),
                    N.$slots["calendar-icon"] ? D("", !0) : (g(), me(i(Ft), { key: 1 }))
                  ], 42, Rr)), [
                    [St, !i($)("time")]
                  ])
                ])
              ], 512)) : D("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Or = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: o } = Ve(n), c = F(null), p = F(w()), $ = (l) => {
    !l.current && n.hideOffsetDates || (c.value = l.value);
  }, O = () => {
    c.value = null;
  }, R = (l) => Array.isArray(e.value) && n.range && e.value[0] && c.value ? l ? Oe(c.value, e.value[0]) : Pe(c.value, e.value[0]) : !0, E = (l, v) => {
    const m = () => e.value ? v ? e.value[0] || null : e.value[1] : null, k = e.value && Array.isArray(e.value) ? m() : null;
    return ke(w(l.value), k);
  }, A = (l) => {
    const v = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Pe(c.value || null, v) : !0;
  }, d = (l, v = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) ? n.hideOffsetDates && !l.current ? !1 : ke(w(l.value), e.value[v ? 0 : 1]) : n.range ? E(l, v) && A(v) || ke(l.value, Array.isArray(e.value) ? e.value[0] : null) && R(v) : !1, M = (l, v, m) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : m ? Oe(e.value[0], v.value) : Pe(e.value[0], v.value) : !1, U = (l) => !e.value || n.hideOffsetDates && !l.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ke(l.value, e.value[0] ? e.value[0] : p.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((v) => ke(v, l.value)) : ke(l.value, e.value ? e.value : p.value), V = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (c.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const v = ct(c.value, +n.autoRange), m = o(w(c.value));
        return n.weekPicker ? ke(m[1], w(l.value)) : ke(v, w(l.value));
      }
      return !1;
    }
    return !1;
  }, ee = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (c.value) {
        const v = ct(c.value, +n.autoRange);
        if (n.hideOffsetDates && !l.current)
          return !1;
        const m = o(w(c.value));
        return n.weekPicker ? Oe(l.value, m[0]) && Pe(l.value, m[1]) : Oe(l.value, c.value) && Pe(l.value, v);
      }
      return !1;
    }
    return !1;
  }, B = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (c.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const v = o(w(c.value));
        return n.weekPicker ? ke(v[0], l.value) : ke(c.value, l.value);
      }
      return !1;
    }
    return !1;
  }, L = (l) => zn(e.value, c.value, l.value), C = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, x = () => n.modelAuto ? Gn(n.internalModelValue) : !0, Q = (l) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const v = n.range ? !d(l) && !d(l, !1) : !0;
    return !a(l.value) && !U(l) && !(!l.current && n.hideOffsetDates) && v;
  }, oe = (l) => n.range ? n.modelAuto ? C() && U(l) : !1 : U(l), P = (l) => n.highlight ? t(l.value, n.highlight) : !1, y = (l) => a(l.value) && n.highlightDisabledDays === !1, I = (l) => n.highlightWeekDays && n.highlightWeekDays.includes(l.value.getDay()), W = (l) => (n.range || n.weekPicker) && (!(n.multiCalendars > 0) || l.current) && x() && !(!l.current && n.hideOffsetDates) && !U(l) ? L(l) : !1, N = (l) => ({
    dp__cell_offset: !l.current,
    dp__pointer: !n.disabled && !(!l.current && n.hideOffsetDates) && !a(l.value),
    dp__cell_disabled: a(l.value),
    dp__cell_highlight: !y(l) && (P(l) || I(l)) && !oe(l),
    dp__cell_highlight_active: !y(l) && (P(l) || I(l)) && oe(l),
    dp__today: !n.noToday && ke(l.value, p.value) && l.current
  }), K = (l) => ({
    dp__active_date: oe(l),
    dp__date_hover: Q(l)
  }), te = (l) => ({
    ...q(l),
    ..._(l),
    dp__range_between_week: W(l) && n.weekPicker
  }), q = (l) => ({
    dp__range_start: n.multiCalendars > 0 ? l.current && d(l) && x() : d(l) && x(),
    dp__range_end: n.multiCalendars > 0 ? l.current && d(l, !1) && x() : d(l, !1) && x(),
    dp__range_between: W(l) && !n.weekPicker,
    dp__date_hover_start: M(Q(l), l, !0),
    dp__date_hover_end: M(Q(l), l, !1)
  }), _ = (l) => ({
    ...q(l),
    dp__cell_auto_range: ee(l),
    dp__cell_auto_range_start: B(l),
    dp__cell_auto_range_end: V(l)
  }), T = (l) => n.range ? n.autoRange ? _(l) : n.modelAuto ? { ...K(l), ...q(l) } : q(l) : n.weekPicker ? te(l) : K(l);
  return {
    setHoverDate: $,
    clearHoverDate: O,
    getDayClassData: (l) => ({
      ...N(l),
      ...T(l),
      [n.dayClass ? n.dayClass(l.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Br = ["id", "onKeydown"], Yr = {
  key: 0,
  class: "dp__sidebar_left"
}, Vr = {
  key: 1,
  class: "dp__preset_ranges"
}, Lr = ["onClick"], Er = {
  key: 2,
  class: "dp__sidebar_right"
}, Fr = {
  key: 3,
  class: "dp__now_wrap"
}, Ur = /* @__PURE__ */ Ue({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setMenuFocused: o, setShiftKey: c, control: p } = jn(), { getCalendarDays: $, defaults: O } = Ve(t), R = un(), E = F(null), A = Dt({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), d = F([]), M = F([]), U = F(null), V = F(null), ee = F(0), B = F(!1), L = F(0);
    Fe(() => {
      var j;
      B.value = !0, !((j = t.presetRanges) != null && j.length) && !R["left-sidebar"] && !R["right-sidebar"] && je();
      const h = Me(V);
      if (h && !t.textInput && !t.inline && (o(!0), y()), h) {
        const $e = (Te) => {
          !t.monthYearComponent && !t.timePickerComponent && !Object.keys(R).length && Te.preventDefault(), Te.stopImmediatePropagation(), Te.stopPropagation();
        };
        h.addEventListener("pointerdown", $e), h.addEventListener("mousedown", $e);
      }
      wwLib.getFrontWindow().addEventListener("resize", je);
    }), sn(() => {
      wwLib.getFrontWindow().removeEventListener("resize", je);
    });
    const { arrowRight: C, arrowLeft: x, arrowDown: Q, arrowUp: oe } = Je(), P = (h) => {
      h || h === 0 ? M.value[h].triggerTransition(
        te.value(h),
        q.value(h)
      ) : M.value.forEach(
        (j, $e) => j.triggerTransition(te.value($e), q.value($e))
      );
    }, y = () => {
      const h = Me(V);
      h && h.focus({ preventScroll: !0 });
    }, I = () => {
      var h;
      (h = t.flow) != null && h.length && L.value !== -1 && (L.value += 1, a("flow-step", L.value), b());
    }, W = () => {
      L.value = -1;
    }, {
      calendars: N,
      modelValue: K,
      month: te,
      year: q,
      time: _,
      updateTime: T,
      updateMonthYear: u,
      selectDate: l,
      getWeekNum: v,
      monthYearSelect: m,
      handleScroll: k,
      handleArrow: G,
      handleSwipe: Z,
      getMarker: se,
      selectCurrentDate: f,
      presetDateRange: r
    } = Vl(t, a, I, P, L), { setHoverDate: J, clearHoverDate: be, getDayClassData: we } = Or(K, t);
    st(
      N,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const He = rt(R, "calendar"), Xe = rt(R, "action"), le = rt(R, "timePicker"), re = rt(R, "monthYear"), ve = Y(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ce = Y(() => Al(t.yearRange)), yt = Y(() => Cl(t.locale, t.monthNameFormat)), je = () => {
      const h = Me(E);
      h && (ee.value = h.getBoundingClientRect().width);
    }, ht = Y(() => (h) => $(te.value(h), q.value(h))), et = Y(
      () => O.value.multiCalendars > 0 && t.range ? [...Array(O.value.multiCalendars).keys()] : [0]
    ), gt = Y(
      () => (h) => h === 1
    ), Ht = Y(() => t.monthPicker || t.timePicker || t.yearPicker), Wt = Y(
      () => ({
        dp__flex_display: O.value.multiCalendars > 0
      })
    ), Mt = Y(() => ({
      dp__instance_calendar: O.value.multiCalendars > 0
    })), pt = Y(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), zt = Y(
      () => (h) => Kt(ht, h)
    ), jt = Y(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), Kt = (h, j) => h.value(j).map(($e) => ({
      ...$e,
      days: $e.days.map((Te) => (Te.marker = se(Te), Te.classData = we(Te), Te))
    })), _t = (h) => {
      h.stopPropagation(), h.stopImmediatePropagation();
    }, hn = () => {
      t.escClose && a("close-picker");
    }, gn = (h, j = !1) => {
      l(h, j), t.spaceConfirm && a("select-date");
    }, Tt = (h) => {
      var j;
      (j = t.flow) != null && j.length && (A[h] = !0, Object.keys(A).filter(($e) => !A[$e]).length || b());
    }, s = (h, j, $e, Te, ...Ee) => {
      if (t.flow[L.value] === h) {
        const X = Te ? j.value[0] : j.value;
        X && X[$e](...Ee);
      }
    }, b = () => {
      s("month", d, "toggleMonthPicker", !0, !0), s("year", d, "toggleYearPicker", !0, !0), s("calendar", U, "toggleTimePicker", !1, !1, !0), s("time", U, "toggleTimePicker", !1, !0, !0);
      const h = t.flow[L.value];
      (h === "hours" || h === "minutes" || h === "seconds") && s(h, U, "toggleTimePicker", !1, !0, !0, h);
    }, z = (h) => {
      if (t.arrowNavigation) {
        if (h === "up")
          return oe();
        if (h === "down")
          return Q();
        if (h === "left")
          return x();
        if (h === "right")
          return C();
      } else
        h === "left" || h === "up" ? G("left", 0, h === "up") : G("right", 0, h === "down");
    }, ne = (h) => {
      c(h.shiftKey), !t.disableMonthYearSelect && h.code === "Tab" && h.target.classList.contains("dp__menu") && p.value.shiftKeyInMenu && (h.preventDefault(), h.stopImmediatePropagation(), a("close-picker"));
    };
    return n({
      updateMonthYear: u
    }), (h, j) => {
      var $e;
      return g(), me(vt, {
        appear: "",
        name: ($e = i(O).transitions) == null ? void 0 : $e.menuAppear,
        mode: "out-in",
        css: !!h.transitions
      }, {
        default: ie(() => {
          var Te, Ee;
          return [
            ae("div", {
              id: h.uid ? `dp-menu-${h.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: V,
              role: "dialog",
              class: ye(i(jt)),
              onMouseleave: j[14] || (j[14] = //@ts-ignore
              (...X) => i(be) && i(be)(...X)),
              onClick: _t,
              onKeydown: [
                de(hn, ["esc"]),
                j[15] || (j[15] = de(Ge((X) => z("left"), ["prevent"]), ["left"])),
                j[16] || (j[16] = de(Ge((X) => z("up"), ["prevent"]), ["up"])),
                j[17] || (j[17] = de(Ge((X) => z("down"), ["prevent"]), ["down"])),
                j[18] || (j[18] = de(Ge((X) => z("right"), ["prevent"]), ["right"])),
                ne
              ]
            }, [
              (h.disabled || h.readonly) && h.inline ? (g(), S("div", {
                key: 0,
                class: ye(i(pt))
              }, null, 2)) : D("", !0),
              !h.inline && !h.teleportCenter ? (g(), S("div", {
                key: 1,
                class: ye(i(ve))
              }, null, 2)) : D("", !0),
              ae("div", {
                class: ye({
                  dp__menu_content_wrapper: ((Te = h.presetRanges) == null ? void 0 : Te.length) || !!h.$slots["left-sidebar"] || !!h.$slots["right-sidebar"]
                })
              }, [
                h.$slots["left-sidebar"] ? (g(), S("div", Yr, [
                  H(h.$slots, "left-sidebar")
                ])) : D("", !0),
                (Ee = h.presetRanges) != null && Ee.length ? (g(), S("div", Vr, [
                  (g(!0), S(fe, null, De(h.presetRanges, (X, ut) => (g(), S("div", {
                    key: ut,
                    style: at(X.style || {}),
                    class: "dp__preset_range",
                    onClick: (ue) => i(r)(X.range, !!X.slot)
                  }, [
                    X.slot ? H(h.$slots, X.slot, {
                      key: 0,
                      presetDateRange: i(r),
                      label: X.label,
                      range: X.range
                    }) : (g(), S(fe, { key: 1 }, [
                      We(Se(X.label), 1)
                    ], 64))
                  ], 12, Lr))), 128))
                ])) : D("", !0),
                ae("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: E,
                  role: "document"
                }, [
                  ae("div", {
                    class: ye(i(Wt))
                  }, [
                    (g(!0), S(fe, null, De(i(et), (X, ut) => (g(), S("div", {
                      key: X,
                      class: ye(i(Mt))
                    }, [
                      !h.disableMonthYearSelect && !h.timePicker ? (g(), me(Pt(h.monthYearComponent ? h.monthYearComponent : br), Ce({
                        key: 0,
                        ref_for: !0,
                        ref: (ue) => {
                          ue && (d.value[ut] = ue);
                        },
                        months: i(yt),
                        years: i(ce),
                        month: i(te)(X),
                        year: i(q)(X),
                        instance: X,
                        "internal-model-value": e.internalModelValue
                      }, h.$props, {
                        onMount: j[0] || (j[0] = (ue) => Tt("monthYearInput")),
                        onResetFlow: W,
                        onUpdateMonthYear: (ue) => i(u)(X, ue),
                        onMonthYearSelect: i(m),
                        onOverlayClosed: y
                      }), Be({ _: 2 }, [
                        De(i(re), (ue, Xn) => ({
                          name: ue,
                          fn: ie((xt) => [
                            H(h.$slots, ue, Ye(Ze(xt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : D("", !0),
                      qe(ir, Ce({
                        ref_for: !0,
                        ref: (ue) => {
                          ue && (M.value[ut] = ue);
                        },
                        "specific-mode": i(Ht),
                        "get-week-num": i(v),
                        instance: X,
                        "mapped-dates": i(zt)(X),
                        month: i(te)(X),
                        year: i(q)(X)
                      }, h.$props, {
                        "flow-step": L.value,
                        "onUpdate:flowStep": j[1] || (j[1] = (ue) => L.value = ue),
                        onSelectDate: (ue) => i(l)(ue, !i(gt)(X)),
                        onHandleSpace: (ue) => gn(ue, !i(gt)(X)),
                        onSetHoverDate: j[2] || (j[2] = (ue) => i(J)(ue)),
                        onHandleScroll: (ue) => i(k)(ue, X),
                        onHandleSwipe: (ue) => i(Z)(ue, X),
                        onMount: j[3] || (j[3] = (ue) => Tt("calendar")),
                        onResetFlow: W,
                        onTooltipOpen: j[4] || (j[4] = (ue) => h.$emit("tooltip-open", ue)),
                        onTooltipClose: j[5] || (j[5] = (ue) => h.$emit("tooltip-close", ue))
                      }), Be({ _: 2 }, [
                        De(i(He), (ue, Xn) => ({
                          name: ue,
                          fn: ie((xt) => [
                            H(h.$slots, ue, Ye(Ze({ ...xt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  ae("div", null, [
                    h.$slots["time-picker"] ? H(h.$slots, "time-picker", Ye(Ce({ key: 0 }, { time: i(_), updateTime: i(T) }))) : (g(), S(fe, { key: 1 }, [
                      h.enableTimePicker && !h.monthPicker && !h.weekPicker ? (g(), me(Pt(h.timePickerComponent ? h.timePickerComponent : Ir), Ce({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: U,
                        hours: i(_).hours,
                        minutes: i(_).minutes,
                        seconds: i(_).seconds,
                        "internal-model-value": e.internalModelValue
                      }, h.$props, {
                        onMount: j[6] || (j[6] = (X) => Tt("timePicker")),
                        "onUpdate:hours": j[7] || (j[7] = (X) => i(T)(X)),
                        "onUpdate:minutes": j[8] || (j[8] = (X) => i(T)(X, !1)),
                        "onUpdate:seconds": j[9] || (j[9] = (X) => i(T)(X, !1, !0)),
                        onResetFlow: W,
                        onOverlayClosed: y
                      }), Be({ _: 2 }, [
                        De(i(le), (X, ut) => ({
                          name: X,
                          fn: ie((ue) => [
                            H(h.$slots, X, Ye(Ze(ue)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : D("", !0)
                    ], 64))
                  ])
                ], 512),
                h.$slots["right-sidebar"] ? (g(), S("div", Er, [
                  H(h.$slots, "right-sidebar")
                ])) : D("", !0),
                h.showNowButton ? (g(), S("div", Fr, [
                  h.$slots["now-button"] ? H(h.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: i(f)
                  }) : D("", !0),
                  h.$slots["now-button"] ? D("", !0) : (g(), S("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: j[10] || (j[10] = //@ts-ignore
                    (...X) => i(f) && i(f)(...X))
                  }, Se(h.nowButtonLabel), 1))
                ])) : D("", !0)
              ], 2),
              !h.autoApply || h.keepActionRow ? (g(), me(Pt(h.actionRowComponent ? h.actionRowComponent : Jl), Ce({
                key: 2,
                "menu-mount": B.value,
                "calendar-width": ee.value,
                "internal-model-value": e.internalModelValue
              }, h.$props, {
                onClosePicker: j[11] || (j[11] = (X) => h.$emit("close-picker")),
                onSelectDate: j[12] || (j[12] = (X) => h.$emit("select-date")),
                onInvalidSelect: j[13] || (j[13] = (X) => h.$emit("invalid-select"))
              }), Be({ _: 2 }, [
                De(i(Xe), (X, ut) => ({
                  name: X,
                  fn: ie((ue) => [
                    H(h.$slots, X, Ye(Ze({ ...ue })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : D("", !0)
            ], 42, Br)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Hr = typeof wwLib.getFrontWindow() < "u" ? wwLib.getFrontWindow() : void 0, an = () => {
}, Wr = (e) => Jn() ? (Qn(e), !0) : !1, zr = (e, n, a, t) => {
  if (!e)
    return an;
  let o = an;
  const c = st(
    () => i(e),
    ($) => {
      o(), $ && ($.addEventListener(n, a, t), o = () => {
        $.removeEventListener(n, a, t), o = an;
      });
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    c(), o();
  };
  return Wr(p), p;
}, jr = (e, n, a, t = {}) => {
  const { window: o = Hr, event: c = "pointerdown" } = t;
  return o ? zr(o, c, ($) => {
    const O = Me(e), R = Me(n);
    !O || !R || O === $.target || $.composedPath().includes(O) || $.composedPath().includes(R) || a($);
  }, { passive: !0 }) : void 0;
}, Kr = /* @__PURE__ */ Ue({
  __name: "VueDatePicker",
  props: {
    ...Qe
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, o = un(), c = F(!1), p = Ot(t, "modelValue"), $ = Ot(t, "timezone"), O = F(null), R = F(null), E = F(!1), { setMenuFocused: A, setShiftKey: d } = jn(), { clearArrowNav: M } = Je(), { validateDate: U, isValidTime: V, defaults: ee } = Ve(t);
    Fe(() => {
      I(t.modelValue), t.inline || (wwLib.getFrontWindow().addEventListener("scroll", _), wwLib.getFrontWindow().addEventListener("resize", T)), t.inline && (c.value = !0);
    }), sn(() => {
      t.inline || (wwLib.getFrontWindow().removeEventListener("scroll", _), wwLib.getFrontWindow().removeEventListener("resize", T));
    });
    const B = rt(o, "all", t.presetRanges), L = rt(o, "input");
    st(
      [p, $],
      () => {
        I(p.value);
      },
      { deep: !0 }
    );
    const { openOnTop: C, menuPosition: x, setMenuPosition: Q, setInitialPosition: oe } = Fl(
      O,
      R,
      a,
      t
    ), {
      inputValue: P,
      internalModelValue: y,
      parseExternalModelValue: I,
      emitModelValue: W,
      formatInputValue: N,
      checkBeforeEmit: K
    } = Ll(a, t, E), te = Y(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), q = Y(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), _ = () => {
      c.value && (t.closeOnScroll ? se() : t.autoPosition && Q());
    }, T = () => {
      c.value && Q();
    }, u = () => {
      !t.disabled && !t.readonly && (oe(), c.value = !0, ft().then(() => {
        Q(), c.value && a("open");
      }), c.value || Z(), I(t.modelValue));
    }, l = () => {
      P.value = "", Z(), a("update:model-value", null), a("cleared"), se();
    }, v = () => {
      const re = y.value;
      return !re || !Array.isArray(re) && U(re) ? !0 : Array.isArray(re) ? re.length === 2 && U(re[0]) && U(re[1]) ? !0 : U(re[0]) : !1;
    }, m = () => {
      K() && v() ? (W(), se()) : a("invalid-select", y.value);
    }, k = (re) => {
      W(), t.closeOnAutoApply && !re && se();
    }, G = (re = !1) => {
      t.autoApply && V(y.value) && v() && (t.range && Array.isArray(y.value) ? (t.partialRange || y.value.length === 2) && k(re) : k(re));
    }, Z = () => {
      t.textInput || (y.value = null);
    }, se = () => {
      t.inline || (c.value && (c.value = !1, A(!1), d(!1), M(), a("closed"), oe(), P.value && I(p.value)), Z(), R.value && R.value.focusInput());
    }, f = (re, ve) => {
      if (!re) {
        y.value = null;
        return;
      }
      y.value = re, ve && (m(), a("text-submit"));
    }, r = () => {
      t.autoApply && V(y.value) && W();
    }, J = () => c.value ? se() : u(), be = (re) => {
      y.value = re;
    }, we = Y(() => t.textInput && ee.value.textInputOptions.format), He = () => {
      we.value && (E.value = !0, N()), a("focus");
    }, Xe = () => {
      we.value && (E.value = !1, N()), a("blur");
    }, le = (re) => {
      O.value && O.value.updateMonthYear(0, {
        month: Nn(re.month),
        year: Nn(re.year)
      });
    };
    return jr(
      O,
      R,
      t.onClickOutside ? () => t.onClickOutside(v) : se
    ), n({
      closeMenu: se,
      selectDate: m,
      clearValue: l,
      openMenu: u,
      onScroll: _,
      formatInputValue: N,
      // exposed for testing purposes
      updateInternalModelValue: be,
      // modify internal modelValue
      setMonthYear: le
    }), (re, ve) => (g(), S("div", {
      class: ye(i(te))
    }, [
      qe(Gl, Ce({
        ref_key: "inputRef",
        ref: R,
        "is-menu-open": c.value,
        "input-value": i(P),
        "onUpdate:inputValue": ve[0] || (ve[0] = (ce) => nt(P) ? P.value = ce : null)
      }, re.$props, {
        onClear: l,
        onOpen: u,
        onSetInputDate: f,
        onSetEmptyDate: i(W),
        onSelectDate: m,
        onToggle: J,
        onClose: se,
        onFocus: He,
        onBlur: Xe
      }), Be({ _: 2 }, [
        De(i(L), (ce, yt) => ({
          name: ce,
          fn: ie((je) => [
            H(re.$slots, ce, Ye(Ze(je)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      c.value ? (g(), me(ea, {
        key: 0,
        to: re.teleport,
        disabled: re.inline
      }, [
        c.value ? (g(), me(Ur, Ce({
          key: 0,
          ref_key: "dpMenuRef",
          ref: O,
          class: i(q),
          style: i(x),
          "open-on-top": i(C)
        }, re.$props, {
          "internal-model-value": i(y),
          "onUpdate:internalModelValue": ve[1] || (ve[1] = (ce) => nt(y) ? y.value = ce : null),
          onClosePicker: se,
          onSelectDate: m,
          onAutoApply: G,
          onTimeUpdate: r,
          onFlowStep: ve[2] || (ve[2] = (ce) => re.$emit("flow-step", ce)),
          onUpdateMonthYear: ve[3] || (ve[3] = (ce) => re.$emit("update-month-year", ce)),
          onInvalidSelect: ve[4] || (ve[4] = (ce) => re.$emit("invalid-select", i(y))),
          onInvalidFixedRange: ve[5] || (ve[5] = (ce) => re.$emit("invalid-fixed-range", ce)),
          onRecalculatePosition: i(Q),
          onTooltipOpen: ve[6] || (ve[6] = (ce) => re.$emit("tooltip-open", ce)),
          onTooltipClose: ve[7] || (ve[7] = (ce) => re.$emit("tooltip-close", ce))
        }), Be({ _: 2 }, [
          De(i(B), (ce, yt) => ({
            name: ce,
            fn: ie((je) => [
              H(re.$slots, ce, Ye(Ze({ ...je })))
            ])
          }))
        ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : D("", !0)
      ], 8, ["to", "disabled"])) : D("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ (() => {
  const e = Kr;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(xr).forEach(([e, n]) => {
  e !== "default" && (Zn[e] = n);
});
export {
  Zn as default
};
