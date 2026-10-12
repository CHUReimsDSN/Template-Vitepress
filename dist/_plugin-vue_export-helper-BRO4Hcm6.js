import { computed as e, customRef as t, getCurrentInstance as n, getCurrentScope as r, hasInjectionContext as i, inject as a, isRef as o, nextTick as s, onMounted as c, onScopeDispose as l, reactive as u, readonly as d, ref as f, shallowReadonly as p, shallowRef as m, toRef as h, toValue as g, unref as _, watch as v, watchEffect as y } from "vue";
//#region node_modules/@vueuse/shared/dist/index.js
function b(e, t) {
	return r() ? (l(e, t), !0) : !1;
}
var x = /* @__PURE__ */ new WeakMap(), S = (...e) => {
	let t = e[0], o = n()?.proxy ?? r();
	if (o == null && !i()) throw Error("injectLocal must be called in setup");
	return o && x.has(o) && t in x.get(o) ? x.get(o)[t] : a(...e);
}, C = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var w = (e) => e != null, T = Object.prototype.toString, E = (e) => T.call(e) === "[object Object]", D = () => {};
function O(...e) {
	if (e.length !== 1) return h(...e);
	let n = e[0];
	return typeof n == "function" ? d(t(() => ({
		get: n,
		set: D
	}))) : f(n);
}
function k(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
var A = (e) => e();
function j(e, t = {}) {
	let n, r, i = D, a = D, o = m(!1), s = (e) => {
		clearTimeout(e), i(), i = D;
	}, c;
	return Object.assign((l) => {
		let u = g(e), d = g(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = D;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = D, a = D, e(c());
			}
		},
		isPending: p(o)
	});
}
function M(...e) {
	let t = 0, n, r = !0, i = D, a, s, c, l, u;
	!o(e[0]) && typeof e[0] == "object" ? {delay: s, trailing: c = !0, leading: l = !0, rejectOnCancel: u = !1} = e[0] : [s, c = !0, l = !0, u = !1] = e;
	let d = () => {
		n && (clearTimeout(n), n = void 0, i(), i = D);
	};
	return (e) => {
		let o = g(s), f = Date.now() - t, p = () => a = e();
		return d(), o <= 0 ? (t = Date.now(), p()) : (f > o ? (t = Date.now(), (l || !r) && p()) : c && (a = new Promise((e, a) => {
			i = u ? a : e, n = setTimeout(() => {
				t = Date.now(), r = !0, e(p()), d();
			}, Math.max(0, o - f));
		})), !l && !n && (n = setTimeout(() => r = !0, o)), r = !1, a);
	};
}
function N(e = A, t = {}) {
	let { initialState: n = "active" } = t, r = O(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: p(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function P(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function F(e) {
	return Array.isArray(e) ? e : [e];
}
function ee(e) {
	return e || n();
}
function te(e, t = 200, n = {}) {
	return k(j(t, n), e);
}
function I(e, t = 200, n = !1, r = !0, i = !1) {
	return k(M(t, n, r, i), e);
}
function L(e, t, n = {}) {
	let { eventFilter: r = A, ...i } = n;
	return v(e, k(r, t), i);
}
function R(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = N(r, { initialState: i });
	return {
		stop: L(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function z(e, t = !0, n) {
	ee(n) ? c(e, n) : t ? e() : s(e);
}
function ne(e, t, n = {}) {
	let { debounce: r = 0, maxWait: i = void 0, ...a } = n;
	return L(e, t, {
		...a,
		eventFilter: j(r, { maxWait: i })
	});
}
function re(e, t, n) {
	return v(e, t, {
		...n,
		immediate: !0
	});
}
function ie(e, t, n) {
	let r = v(e, (e, i, a) => {
		e && (n?.once && s(() => r()), t(e, i, a));
	}, {
		...n,
		once: !1
	});
	return r;
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
function ae(t, n, r) {
	let i;
	i = o(r) ? { evaluating: r } : r || {};
	let { lazy: a = !1, flush: s = "sync", evaluating: c = void 0, shallow: l = !0, onError: u = globalThis.reportError ?? D } = i, d = m(!a), p = l ? m(n) : f(n), h = 0;
	return y(async (e) => {
		if (!d.value) return;
		h++;
		let n = h, r = !1;
		c && Promise.resolve().then(() => {
			c.value = !0;
		});
		try {
			let i = await t((t) => {
				e(() => {
					c && (c.value = !1), r || t();
				});
			});
			n === h && (p.value = i);
		} catch (e) {
			u(e);
		} finally {
			c && n === h && (c.value = !1), r = !0;
		}
	}, { flush: s }), a ? e(() => (d.value = !0, p.value)) : p;
}
var B = C ? window : void 0;
C && window.document, C && window.navigator, C && window.location;
function V(e) {
	let t = g(e);
	return t?.$el ?? t;
}
function H(...t) {
	let n = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), r = e(() => {
		let e = F(g(t[0])).filter((e) => e != null);
		return e.every((e) => typeof e != "string") ? e : void 0;
	});
	return re(() => [
		r.value?.map((e) => V(e)) ?? [B].filter((e) => e != null),
		F(g(r.value ? t[1] : t[0])),
		F(_(r.value ? t[2] : t[1])),
		g(r.value ? t[3] : t[2])
	], ([e, t, r, i], a, o) => {
		if (!e?.length || !t?.length || !r?.length) return;
		let s = E(i) ? { ...i } : i, c = e.flatMap((e) => t.flatMap((t) => r.map((r) => n(e, t, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function U() {
	let e = m(!1), t = n();
	return t && c(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function W(t) {
	let n = U();
	return e(() => (n.value, !!t()));
}
function G(t, n, r = {}) {
	let { window: i = B, ...a } = r, o, s = /* @__PURE__ */ W(() => i && "MutationObserver" in i), c = () => {
		o &&= (o.disconnect(), void 0);
	}, l = v(e(() => {
		let e = F(g(t)).map(V).filter(w);
		return new Set(e);
	}), (e) => {
		c(), s.value && e.size && (o = new MutationObserver(n), e.forEach((e) => o.observe(e, a)));
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => o?.takeRecords(), d = () => {
		l(), c();
	};
	return b(d), {
		isSupported: s,
		stop: d,
		takeRecords: u
	};
}
function K(e) {
	return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function q(...e) {
	let t, n, r = {};
	e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
	let { target: i = B, eventName: a = "keydown", passive: o = !1, dedupe: s = !1 } = r, c = K(t);
	return H(i, a, (e) => {
		e.repeat && g(s) || c(e) && n(e);
	}, o);
}
var oe = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function se() {
	let e = i() ? S(oe, null) : null;
	return typeof e == "number" ? e : void 0;
}
function ce(t, n = {}) {
	let { window: r = B, ssrWidth: i = /* @__PURE__ */ se() } = n, a = /* @__PURE__ */ W(() => r && "matchMedia" in r && typeof r.matchMedia == "function"), o = m(typeof i == "number"), s = m(), c = m(!1);
	return y(() => {
		if (o.value) {
			o.value = !a.value;
			let e = g(t).split(",");
			c.value = e.some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || r);
				return n && a && (a = i >= P(n[1])), r && a && (a = i <= P(r[1])), t ? !a : a;
			});
		} else a.value && (s.value = r.matchMedia(g(t)), c.value = s.value.matches);
	}), H(s, "change", (e) => {
		c.value = e.matches;
	}, { passive: !0 }), e(() => c.value);
}
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", le = /* #__PURE__ */ ue();
function ue() {
	return Y in J || (J[Y] = J[Y] || {}), J[Y];
}
function de(e, t) {
	return le[e] || t;
}
function fe(e) {
	return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var pe = {
	boolean: {
		read: (e) => e === "true",
		write: (e) => String(e)
	},
	object: {
		read: (e) => JSON.parse(e),
		write: (e) => JSON.stringify(e)
	},
	number: {
		read: (e) => Number.parseFloat(e),
		write: (e) => String(e)
	},
	any: {
		read: (e) => e,
		write: (e) => String(e)
	},
	string: {
		read: (e) => e,
		write: (e) => String(e)
	},
	map: {
		read: (e) => new Map(JSON.parse(e)),
		write: (e) => JSON.stringify(Array.from(e.entries()))
	},
	set: {
		read: (e) => new Set(JSON.parse(e)),
		write: (e) => JSON.stringify(Array.from(e))
	},
	date: {
		read: (e) => new Date(e),
		write: (e) => e.toISOString()
	}
}, X = "vueuse-storage";
function Z(t, n, r, i = {}) {
	let { flush: a = "pre", deep: o = !0, listenToStorageChanges: c = !0, writeDefaults: l = !0, mergeDefaults: u = !1, shallow: d, window: p = B, eventFilter: h, onError: _ = (e) => {
		console.error(e);
	}, initOnMounted: y } = i, b = (d ? m : f)(typeof n == "function" ? n() : n), x = e(() => g(t));
	if (!r) try {
		r = de("getDefaultStorage", () => B?.localStorage)();
	} catch (e) {
		_(e);
	}
	if (!r) return b;
	let S = g(n), C = fe(S), w = i.serializer ?? pe[C], { pause: T, resume: E } = R(b, (e) => k(e), {
		flush: a,
		deep: o,
		eventFilter: h
	});
	v(x, () => j(), { flush: a });
	let D = !1;
	p && c && (r instanceof Storage ? H(p, "storage", (e) => {
		(!y || D) && j(e);
	}, { passive: !0 }) : H(p, X, (e) => {
		(!y || D) && M(e);
	})), y ? z(() => {
		D = !0, j();
	}) : j();
	function O(e, t) {
		if (p) {
			let n = {
				key: x.value,
				oldValue: e,
				newValue: t,
				storageArea: r
			};
			p.dispatchEvent(r instanceof Storage ? new StorageEvent("storage", n) : new CustomEvent(X, { detail: n }));
		}
	}
	function k(e) {
		try {
			let t = r.getItem(x.value);
			if (e == null) O(t, null), r.removeItem(x.value);
			else {
				let n = w.write(e);
				t !== n && (r.setItem(x.value, n), O(t, n));
			}
		} catch (e) {
			_(e);
		}
	}
	function A(e) {
		let t = e ? e.newValue : r.getItem(x.value);
		if (t == null) return l && S != null && r.setItem(x.value, w.write(S)), S;
		if (!e && u) {
			let e = w.read(t);
			return typeof u == "function" ? u(e, S) : C === "object" && !Array.isArray(e) ? {
				...S,
				...e
			} : e;
		}
		return typeof t == "string" ? w.read(t) : t;
	}
	function j(e) {
		if (!(e && e.storageArea !== r)) {
			if (e && e.key == null) b.value = S;
			else if (!(e && e.key !== x.value)) {
				T();
				try {
					let t = w.write(b.value);
					(e === void 0 || e?.newValue !== t) && (b.value = A(e));
				} catch (e) {
					_(e);
				} finally {
					e ? s(E) : E();
				}
			}
		}
	}
	function M(e) {
		j(e.detail);
	}
	return b;
}
var Q = 1;
function $(t, n = {}) {
	let { throttle: r = 0, idle: i = 200, onStop: a = D, onScroll: o = D, offset: s = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, observe: c = { mutation: !1 }, eventListenerOptions: l = {
		capture: !1,
		passive: !0
	}, behavior: d = "auto", window: f = B, onError: p = (e) => {
		console.error(e);
	} } = n, h = typeof c == "boolean" ? { mutation: c } : c, _ = m(0), v = m(0), y = e({
		get() {
			return _.value;
		},
		set(e) {
			x(e, void 0);
		}
	}), b = e({
		get() {
			return v.value;
		},
		set(e) {
			x(void 0, e);
		}
	});
	function x(e, n) {
		var r, i;
		if (!f) return;
		let a = g(t);
		if (!a) return;
		(r = a instanceof Document ? f.document.body : a) == null || r.scrollTo({
			top: g(n) ?? b.value,
			left: g(e) ?? y.value,
			behavior: g(d)
		});
		let o = (a == null || (i = a.document) == null ? void 0 : i.documentElement) || a?.documentElement || a;
		y != null && (_.value = o.scrollLeft), b != null && (v.value = o.scrollTop);
	}
	let S = m(!1), C = u({
		left: !0,
		right: !1,
		top: !0,
		bottom: !1
	}), w = u({
		left: !1,
		right: !1,
		top: !1,
		bottom: !1
	}), T = (e) => {
		S.value && (S.value = !1, w.left = !1, w.right = !1, w.top = !1, w.bottom = !1, a(e));
	}, E = te(T, r + i), O = (e) => {
		var t;
		if (!f) return;
		let n = (e == null || (t = e.document) == null ? void 0 : t.documentElement) || e?.documentElement || V(e), { display: r, flexDirection: i, direction: a } = f.getComputedStyle(n), o = a === "rtl" ? -1 : 1, c = n.scrollLeft;
		w.left = c < _.value, w.right = c > _.value;
		let l = Math.abs(c * o) <= (s.left || 0), u = Math.abs(c * o) + n.clientWidth >= n.scrollWidth - (s.right || 0) - Q;
		r === "flex" && i === "row-reverse" ? (C.left = u, C.right = l) : (C.left = l, C.right = u), _.value = c;
		let d = n.scrollTop;
		e === f.document && !d && (d = f.document.body.scrollTop), w.top = d < v.value, w.bottom = d > v.value;
		let p = Math.abs(d) <= (s.top || 0), m = Math.abs(d) + n.clientHeight >= n.scrollHeight - (s.bottom || 0) - Q;
		r === "flex" && i === "column-reverse" ? (C.top = m, C.bottom = p) : (C.top = p, C.bottom = m), v.value = d;
	}, k = (e) => {
		if (!f) return;
		let t = e.target.documentElement ?? e.target;
		O(t), S.value = !0, E(e), o(e);
	};
	return H(t, "scroll", r ? I(k, r, !0, !1) : k, l), z(() => {
		try {
			let e = g(t);
			if (!e) return;
			O(e);
		} catch (e) {
			p(e);
		}
	}), h?.mutation && t != null && t !== f && t !== document && G(t, () => {
		let e = g(t);
		e && O(e);
	}, {
		attributes: !0,
		childList: !0,
		subtree: !0
	}), H(t, "scrollend", T, l), {
		x: y,
		y: b,
		isScrolling: S,
		arrivedState: C,
		directions: w,
		measure() {
			let e = g(t);
			f && e && O(e);
		}
	};
}
function me(e, t, n = {}) {
	let { window: r = B } = n;
	return Z(e, t, r?.localStorage, n);
}
function he(e = {}) {
	let { window: t = B } = e, n = t?.navigator, r = /* @__PURE__ */ W(() => n && "language" in n), i = m(n?.language);
	return H(t, "languagechange", () => {
		n && (i.value = n.language);
	}, { passive: !0 }), {
		isSupported: r,
		language: i
	};
}
function ge(e, t, n = {}) {
	let { window: r = B } = n;
	return Z(e, t, r?.sessionStorage, n);
}
function _e(e = {}) {
	let { window: t = B, ...n } = e;
	return $(t, n);
}
//#endregion
//#region \0plugin-vue:export-helper
var ve = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
//#endregion
export { H as a, he as c, w as d, F as f, ie as h, V as i, ge as l, ne as m, ae as n, me as o, b as p, q as r, ce as s, ve as t, _e as u };
